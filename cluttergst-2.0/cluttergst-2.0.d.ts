/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './cluttergst-2.0-ambient.d.ts';
import './cluttergst-2.0-import.d.ts';
/**
 * ClutterGst-2.0
 */

import type GstVideo from '@girs/gstvideo-1.0';
import type GstBase from '@girs/gstbase-1.0';
import type Gst from '@girs/gst-1.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type GModule from '@girs/gmodule-2.0';
import type GstAudio from '@girs/gstaudio-1.0';
import type Clutter from '@girs/clutter-1.0';
import type cairo from '@girs/cairo-1.0';
import type Json from '@girs/json-1.0';
import type Gio from '@girs/gio-2.0';
import type GL from '@girs/gl-1.0';
import type CoglPango from '@girs/coglpango-1.0';
import type PangoCairo from '@girs/pangocairo-1.0';
import type Pango from '@girs/pango-1.0';
import type HarfBuzz from '@girs/harfbuzz-0.0';
import type freetype2 from '@girs/freetype2-2.0';
import type Cogl from '@girs/cogl-1.0';
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
     * ClutterGst full version, encoded as an hexadecimal value.
     */
    const VERSION_HEX: number;
    /**
     * ClutterGst full version, encoded as a string.
     */
    const VERSION_S: string;
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
     * #GOptionGroup<!-- -->s are added to the set of available options.
     *
     * Your program must initialise the GLib thread system using g_thread_init()
     * before any other GLib functions are called.
     * @param argv A pointer to an array
     * @param parameter_string a string which is displayed in    the first line of <option>--help</option> output, after    <literal><replaceable>programname</replaceable> [OPTION...]</literal>
     * @param entries a %NULL-terminated array of #GOptionEntry<!-- -->s    describing the options of your program
     * @param translation_domain a translation domain to use for translating    the <option>--help</option> output for the options in @entries    with gettext(), or %NULL
     * @returns %CLUTTER_INIT_SUCCESS on success, a negative integer   on failure.
     */
    function init_with_args(
        argv: string[] | null,
        parameter_string: string,
        entries: GLib.OptionEntry,
        translation_domain: string,
    ): Clutter.InitError;
    /**
     * Adds the #ClutterGstPlayer properties to a class and surchages the
     * set/get_property of #GObjectClass. You should call this
     * function at the end of the class_init method of the class
     * implementing #ClutterGstPlayer.
     * @param object_class a #GObjectClass
     */
    function player_class_init(object_class: GObject.ObjectClass): void;
    /**
     * Flags that can be given to clutter_gst_video_texture_set_seek_flags().
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
    module VideoSink {
        // Constructor properties interface
    }

    /**
     * Class implementing a GStreamer sink element for #ClutterTexture<!-- -->s.
     *
     * The #ClutterGstVideoSink structure contains only private data and should
     * not be accessed directly.
     */
    class VideoSink extends GstBase.BaseSink {
        // Own properties of ClutterGst-2.0.VideoSink

        /**
         * This is the texture the video is decoded into. It can be any
         * #ClutterTexture, however Cluter-Gst has a handy subclass,
         * #ClutterGstVideoTexture, that implements the #ClutterMedia
         * interface.
         */
        texture: Clutter.Texture;
        /**
         * Clutter-Gst installs a #GSource to signal that a new frame is ready to
         * the Clutter thread. This property allows to tweak the priority of the
         * source (Lower value is higher priority).
         *
         * Since 1.0
         */
        update_priority: number;
        /**
         * Clutter-Gst installs a #GSource to signal that a new frame is ready to
         * the Clutter thread. This property allows to tweak the priority of the
         * source (Lower value is higher priority).
         *
         * Since 1.0
         */
        updatePriority: number;

        // Constructors of ClutterGst-2.0.VideoSink

        static ['new'](texture: Clutter.Texture): VideoSink;
    }

    module VideoTexture {
        // Constructor properties interface
    }

    /**
     * Subclass of #ClutterTexture that displays videos using GStreamer.
     *
     * The #ClutterGstVideoTexture structure contains only private data and
     * should not be accessed directly.
     */
    class VideoTexture extends Clutter.Texture {
        // Own properties of ClutterGst-2.0.VideoTexture

        pixel_aspect_ratio: Gst.Fraction;
        pixelAspectRatio: Gst.Fraction;

        // Constructors of ClutterGst-2.0.VideoTexture

        static ['new'](): VideoTexture;

        // Owm methods of ClutterGst-2.0.VideoTexture

        /**
         * Get the current audio stream. The number returned in the index of the
         * audio stream playing in the list returned by
         * clutter_gst_video_texture_get_audio_streams().
         * @returns the index of the current audio stream, -1 if the media has no audio stream
         */
        get_audio_stream(): number;
        /**
         * Get the list of audio streams of the current media.
         * @returns a list of #GstTagList describing the available audio streams
         */
        get_audio_streams(): Gst.TagList[];
        get_buffering_mode(): BufferingMode;
        /**
         * Retrieves the material used to draw when no media is being played.
         * @returns the #CoglHandle of the idle material
         */
        get_idle_material(): Cogl.Handle;
        /**
         * Retrieves the #GstPipeline used by the `texture,` for direct use with
         * GStreamer API.
         * @returns the pipeline element used by the video texture
         */
        get_pipeline(): Gst.Element;
        /**
         * Get the current value of the seek-flags property.
         * @returns a combination of #ClutterGstSeekFlags
         */
        get_seek_flags(): SeekFlags;
        /**
         * Get the current subtitles track. The number returned is the index of the
         * subitles track in the list returned by
         * clutter_gst_video_texture_get_subtitle_tracks().
         * @returns the index of the current subtitlest track, -1 if the media has no subtitles track or if the subtitles have been turned off
         */
        get_subtitle_track(): number;
        /**
         * Get the list of subtitles tracks of the current media.
         * @returns a list of #GstTagList describing the available subtitles tracks
         */
        get_subtitle_tracks(): Gst.TagList[];
        /**
         * Retrieves the user agent used when streaming.
         * @returns the user agent used. The returned string has to be freed with g_free()
         */
        get_user_agent(): string;
        /**
         * Set the audio stream to play. `index_` is the index of the stream
         * in the list returned by clutter_gst_video_texture_get_audio_streams().
         * @param index_ the index of the audio stream
         */
        set_audio_stream(index_: number): void;
        set_buffering_mode(mode: BufferingMode): void;
        /**
         * Sets a material to use to draw when no media is being played. The
         * #ClutterGstVideoTexture holds a reference of the `material`.
         *
         * The default idle material will paint the #ClutterGstVideoTexture in black.
         * If %COGL_INVALID_HANDLE is given as `material` to this function, this
         * default idle material will be used.
         * @param material the handle of a Cogl material
         */
        set_idle_material(material: Cogl.Handle): void;
        /**
         * Seeking can be done with several trade-offs. Clutter-gst defaults
         * to %CLUTTER_GST_SEEK_FLAG_NONE.
         * @param flags a combination of #ClutterGstSeekFlags
         */
        set_seek_flags(flags: SeekFlags): void;
        /**
         * Set the subtitles track to play. `index_` is the index of the stream
         * in the list returned by clutter_gst_video_texture_get_subtitle_tracks().
         *
         * If `index_` is -1, the subtitles are turned off.
         * @param index_ the index of the subtitles track
         */
        set_subtitle_track(index_: number): void;
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

    /**
     * Interface vtable for #ClutterGstPlayer implementations
     */
    class PlayerIface {}

    class PlayerIfacePrivate {}

    /**
     * Base class for #ClutterGstVideoSink.
     */
    class VideoSinkClass {}

    class VideoSinkPrivate {}

    /**
     * Base class for #ClutterGstVideoTexture.
     */
    class VideoTextureClass {}

    class VideoTexturePrivate {}

    interface Player {
        // Own properties of ClutterGst-2.0.Player

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
         * Whether the #ClutterGstPlayer is in idle mode.
         */
        readonly idle: boolean;
        /**
         * Whether or not the stream is being seeked.
         */
        readonly in_seek: boolean;
        /**
         * Whether or not the stream is being seeked.
         */
        readonly inSeek: boolean;
        /**
         * Flags to use when seeking.
         */
        seek_flags: SeekFlags;
        /**
         * Flags to use when seeking.
         */
        seekFlags: SeekFlags;
        subtitle_track: number;
        subtitleTrack: number;
        readonly subtitle_tracks: any;
        readonly subtitleTracks: any;
        /**
         * The User Agent used by #ClutterGstPlayer with network protocols.
         */
        user_agent: string;
        /**
         * The User Agent used by #ClutterGstPlayer with network protocols.
         */
        userAgent: string;

        // Owm methods of ClutterGst-2.0.Player

        /**
         * Frees the resources created by clutter_gst_player_init(). After
         * clutter_gst_player_deinit() has been called, no other player method can be
         * called on the instance.
         */
        deinit(): void;
        /**
         * Get the current audio stream. The number returned in the index of the
         * audio stream playing in the list returned by
         * clutter_gst_player_get_audio_streams().
         * @returns the index of the current audio stream, -1 if the media has no audio stream
         */
        get_audio_stream(): number;
        /**
         * Get the list of audio streams of the current media.
         * @returns a list of strings describing the available audio streams
         */
        get_audio_streams(): string[];
        get_buffering_mode(): BufferingMode;
        /**
         * Get the idle state of the pipeline.
         * @returns TRUE if the pipline is in idle mode, FALSE otherwise.
         */
        get_idle(): boolean;
        /**
         * Whether the player is seeking.
         * @returns TRUE if the player is seeking, FALSE otherwise.
         */
        get_in_seek(): boolean;
        /**
         * Retrieves the #GstPipeline used by the `player,` for direct use with
         * GStreamer API.
         * @returns the #GstPipeline element used by the player
         */
        get_pipeline(): Gst.Element;
        /**
         * Get the current value of the seek-flags property.
         * @returns a combination of #ClutterGstSeekFlags
         */
        get_seek_flags(): SeekFlags;
        /**
         * Get the current subtitles track. The number returned is the index of the
         * subtiles track in the list returned by
         * clutter_gst_player_get_subtitle_tracks().
         * @returns the index of the current subtitlest track, -1 if the media has no subtitles track or if the subtitles have been turned off
         */
        get_subtitle_track(): number;
        /**
         * Get the list of subtitles tracks of the current media.
         * @returns a list of strings describing the available subtitles tracks
         */
        get_subtitle_tracks(): string[];
        /**
         * Retrieves the user agent used when streaming.
         * @returns the user agent used. The returned string has to be freed with g_free()
         */
        get_user_agent(): string;
        /**
         * Initialize a #ClutterGstPlayer instance. You should call this
         * function at the beginning of the init method of the class
         * implementing #ClutterGstPlayer.
         *
         * When you're finished with the ClutterGstPlayer mixin features (usually in
         * the dispose or finalize vfuncs), call clutter_gst_player_deinit() to
         * desallocate the resources created by clutter_gst_player_init().
         * @returns TRUE if the initialization was successfull, FALSE otherwise.
         */
        init(): boolean;
        /**
         * Set the audio stream to play. `index_` is the index of the stream
         * in the list returned by clutter_gst_player_get_audio_streams().
         * @param index_ the index of the audio stream
         */
        set_audio_stream(index_: number): void;
        set_buffering_mode(mode: BufferingMode): void;
        /**
         * Seeking can be done with several trade-offs. Clutter-gst defaults
         * to %CLUTTER_GST_SEEK_FLAG_NONE.
         * @param flags a combination of #ClutterGstSeekFlags
         */
        set_seek_flags(flags: SeekFlags): void;
        /**
         * Set the subtitles track to play. `index_` is the index of the stream
         * in the list returned by clutter_gst_player_get_subtitle_tracks().
         *
         * If `index_` is -1, the subtitles are turned off.
         * @param index_ the index of the subtitles track
         */
        set_subtitle_track(index_: number): void;
        /**
         * Sets the user agent to use when streaming.
         *
         * When streaming content, you might want to set a custom user agent, eg. to
         * promote your software, make it appear in statistics or because the server
         * requires a special user agent you want to impersonate.
         * @param user_agent the user agent
         */
        set_user_agent(user_agent: string): void;

        // Own virtual methods of ClutterGst-2.0.Player

        vfunc_download_buffering(start: number, stop: number): void;
        /**
         * Get the current audio stream. The number returned in the index of the
         * audio stream playing in the list returned by
         * clutter_gst_player_get_audio_streams().
         */
        vfunc_get_audio_stream(): number;
        /**
         * Get the list of audio streams of the current media.
         */
        vfunc_get_audio_streams(): string[];
        vfunc_get_buffering_mode(): BufferingMode;
        /**
         * Get the idle state of the pipeline.
         */
        vfunc_get_idle(): boolean;
        /**
         * Whether the player is seeking.
         */
        vfunc_get_in_seek(): boolean;
        /**
         * Retrieves the #GstPipeline used by the `player,` for direct use with
         * GStreamer API.
         */
        vfunc_get_pipeline(): Gst.Element;
        /**
         * Get the current value of the seek-flags property.
         */
        vfunc_get_seek_flags(): SeekFlags;
        /**
         * Get the current subtitles track. The number returned is the index of the
         * subtiles track in the list returned by
         * clutter_gst_player_get_subtitle_tracks().
         */
        vfunc_get_subtitle_track(): number;
        /**
         * Get the list of subtitles tracks of the current media.
         */
        vfunc_get_subtitle_tracks(): string[];
        /**
         * Retrieves the user agent used when streaming.
         */
        vfunc_get_user_agent(): string;
        /**
         * Set the audio stream to play. `index_` is the index of the stream
         * in the list returned by clutter_gst_player_get_audio_streams().
         * @param index_ the index of the audio stream
         */
        vfunc_set_audio_stream(index_: number): void;
        vfunc_set_buffering_mode(mode: BufferingMode): void;
        /**
         * Seeking can be done with several trade-offs. Clutter-gst defaults
         * to %CLUTTER_GST_SEEK_FLAG_NONE.
         * @param flags a combination of #ClutterGstSeekFlags
         */
        vfunc_set_seek_flags(flags: SeekFlags): void;
        /**
         * Set the subtitles track to play. `index_` is the index of the stream
         * in the list returned by clutter_gst_player_get_subtitle_tracks().
         *
         * If `index_` is -1, the subtitles are turned off.
         * @param index_ the index of the subtitles track
         */
        vfunc_set_subtitle_track(index_: number): void;
        /**
         * Sets the user agent to use when streaming.
         *
         * When streaming content, you might want to set a custom user agent, eg. to
         * promote your software, make it appear in statistics or because the server
         * requires a special user agent you want to impersonate.
         * @param user_agent the user agent
         */
        vfunc_set_user_agent(user_agent: string): void;
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
