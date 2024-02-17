
/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './cluttergst-1.0-ambient.d.ts';
import './cluttergst-1.0-import.d.ts';
/**
 * ClutterGst-1.0
 */

import type GstVideo from '@girs/gstvideo-0.10';
import type libxml2 from '@girs/libxml2-2.0';
import type GstBase from '@girs/gstbase-0.10';
import type Gst from '@girs/gst-0.10';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type GModule from '@girs/gmodule-2.0';
import type GstInterfaces from '@girs/gstinterfaces-0.10';
import type GstAudio from '@girs/gstaudio-0.10';
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

/**
 * Different buffering policies clutter-gst supports
 */
export enum BufferingMode {
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
 * Flags that can be given to clutter_gst_video_texture_set_seek_flags().
 * @bitfield 
 */
export enum SeekFlags {
    /**
     * Fast seeks (key frame boundaries, default)
     */
    NONE,
    /**
     * Accurate seeks (potentially slower)
     */
    ACCURATE,
}
/**
 * ClutterGst major version (e.g. "1", if %CLUTTER_GST_VERSION is "1.2.3")
 */
export const MAJOR_VERSION: number
/**
 * ClutterGst micro version (e.g. "3", if %CLUTTER_GST_VERSION is "1.2.3")
 */
export const MICRO_VERSION: number
/**
 * ClutterGst minor version (e.g. "2", if %CLUTTER_GST_VERSION is "1.2.3")
 */
export const MINOR_VERSION: number
/**
 * ClutterGst full version, encoded as an hexadecimal value.
 */
export const VERSION_HEX: number
/**
 * ClutterGst full version, encoded as a string.
 */
export const VERSION_S: string
/**
 * Utility function to initialize both Clutter and GStreamer.
 * 
 * This function should be called before calling any other GLib functions. If
 * this is not an option, your program must initialise the GLib thread system
 * using g_thread_init() before any other GLib functions are called.
 * @param argv A pointer to an array
 * @returns A #ClutterInitError.
 */
export function init(argv?: string[] | null): [ /* returnType */ Clutter.InitError, /* argv */ string[] | null ]
/**
 * This function does the same work as clutter_gst_init(). Additionally, it
 * allows you to add your own command line options, and it automatically
 * generates nicely formatted --help output. Clutter's and GStreamer's
 * #GOptionGroup<!-- -->s are added to the set of available options.
 * 
 * Your program must initialise the GLib thread system using g_thread_init()
 * before any other GLib functions are called.
 * @param argv A pointer to an array
 * @param parameter_string a string which is displayed in the first line of <option>--help</option> output, after <literal><replaceable>programname</replaceable> [OPTION...]</literal>
 * @param entries a %NULL-terminated array of #GOptionEntry<!-- -->s describing the options of your program
 * @param translation_domain a translation domain to use for translating the <option>--help</option> output for the options in `entries` with gettext(), or %NULL
 * @returns %CLUTTER_INIT_SUCCESS on success, a negative integer on failure.
 */
export function init_with_args(argv: string[] | null, parameter_string: string, entries: GLib.OptionEntry, translation_domain: string): [ /* returnType */ Clutter.InitError, /* argv */ string[] | null ]
/**
 * Adds the #ClutterGstPlayer properties to a class and surchages the
 * set/get_property of #GObjectClass. You should call this
 * function at the end of the class_init method of the class
 * implementing #ClutterGstPlayer.
 * @param object_class a #GObjectClass
 */
export function player_class_init(object_class: GObject.ObjectClass): void
export module Player {

    // Signal callback interfaces

    /**
     * Signal callback interface for `download-buffering`
     */
    export interface DownloadBufferingSignalCallback {
        ($obj: Player, start: number, stop: number): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends Clutter.Media.ConstructorProperties, GObject.Object.ConstructorProperties {

        // Own constructor properties of ClutterGst-1.0.ClutterGst.Player

        /**
         * Index of the current audio stream.
         */
        audioStream?: number | null
        /**
         * Flags to use when seeking.
         */
        seekFlags?: SeekFlags | null
        subtitleTrack?: number | null
        /**
         * The User Agent used by #ClutterGstPlayer with network protocols.
         */
        userAgent?: string | null
    }

}

export interface Player extends Clutter.Media {

    // Own properties of ClutterGst-1.0.ClutterGst.Player

    /**
     * Index of the current audio stream.
     */
    audioStream: number
    /**
     * List of audio streams available on the current media.
     */
    readonly audioStreams: any
    /**
     * Whether the #ClutterGstPlayer is in idle mode.
     */
    readonly idle: boolean
    /**
     * Whether or not the stream is being seeked.
     */
    readonly inSeek: boolean
    /**
     * Flags to use when seeking.
     */
    seekFlags: SeekFlags
    subtitleTrack: number
    readonly subtitleTracks: any
    /**
     * The User Agent used by #ClutterGstPlayer with network protocols.
     */
    userAgent: string | null

    // Owm methods of ClutterGst-1.0.ClutterGst.Player

    /**
     * Frees the resources created by clutter_gst_player_init(). After
     * clutter_gst_player_deinit() has been called, no other player method can be
     * called on the instance.
     */
    deinit(): void
    /**
     * Get the current audio stream. The number returned in the index of the
     * audio stream playing in the list returned by
     * clutter_gst_player_get_audio_streams().
     * @returns the index of the current audio stream, -1 if the media has no audio stream
     */
    get_audio_stream(): number
    /**
     * Get the list of audio streams of the current media.
     * @returns a list of strings describing the available audio streams
     */
    get_audio_streams(): string[]
    get_buffering_mode(): BufferingMode
    /**
     * Get the idle state of the pipeline.
     * @returns TRUE if the pipline is in idle mode, FALSE otherwise.
     */
    get_idle(): boolean
    /**
     * Whether the player is seeking.
     * @returns TRUE if the player is seeking, FALSE otherwise.
     */
    get_in_seek(): boolean
    /**
     * Retrieves the #GstPipeline used by the `player,` for direct use with
     * GStreamer API.
     * @returns the #GstPipeline element used by the player
     */
    get_pipeline(): Gst.Element
    /**
     * Get the current value of the seek-flags property.
     * @returns a combination of #ClutterGstSeekFlags
     */
    get_seek_flags(): SeekFlags
    /**
     * Get the current subtitles track. The number returned is the index of the
     * subtiles track in the list returned by
     * clutter_gst_player_get_subtitle_tracks().
     * @returns the index of the current subtitlest track, -1 if the media has no subtitles track or if the subtitles have been turned off
     */
    get_subtitle_track(): number
    /**
     * Get the list of subtitles tracks of the current media.
     * @returns a list of strings describing the available subtitles tracks
     */
    get_subtitle_tracks(): string[]
    /**
     * Retrieves the user agent used when streaming.
     * @returns the user agent used. The returned string has to be freed with g_free()
     */
    get_user_agent(): string | null
    init(): boolean
    /**
     * Set the audio stream to play. `index_` is the index of the stream
     * in the list returned by clutter_gst_player_get_audio_streams().
     * @param index_ the index of the audio stream
     */
    set_audio_stream(index_: number): void
    set_buffering_mode(mode: BufferingMode): void
    /**
     * Seeking can be done with several trade-offs. Clutter-gst defaults
     * to %CLUTTER_GST_SEEK_FLAG_NONE.
     * @param flags a combination of #ClutterGstSeekFlags
     */
    set_seek_flags(flags: SeekFlags): void
    /**
     * Set the subtitles track to play. `index_` is the index of the stream
     * in the list returned by clutter_gst_player_get_subtitle_tracks().
     * 
     * If `index_` is -1, the subtitles are turned off.
     * @param index_ the index of the subtitles track
     */
    set_subtitle_track(index_: number): void
    /**
     * Sets the user agent to use when streaming.
     * 
     * When streaming content, you might want to set a custom user agent, eg. to
     * promote your software, make it appear in statistics or because the server
     * requires a special user agent you want to impersonate.
     * @param user_agent the user agent
     */
    set_user_agent(user_agent: string): void

    // Own virtual methods of ClutterGst-1.0.ClutterGst.Player

    vfunc_download_buffering(start: number, stop: number): void
    /**
     * Get the current audio stream. The number returned in the index of the
     * audio stream playing in the list returned by
     * clutter_gst_player_get_audio_streams().
     * @virtual 
     * @returns the index of the current audio stream, -1 if the media has no audio stream
     */
    vfunc_get_audio_stream(): number
    /**
     * Get the list of audio streams of the current media.
     * @virtual 
     * @returns a list of strings describing the available audio streams
     */
    vfunc_get_audio_streams(): string[]
    vfunc_get_buffering_mode(): BufferingMode
    /**
     * Get the idle state of the pipeline.
     * @virtual 
     * @returns TRUE if the pipline is in idle mode, FALSE otherwise.
     */
    vfunc_get_idle(): boolean
    /**
     * Whether the player is seeking.
     * @virtual 
     * @returns TRUE if the player is seeking, FALSE otherwise.
     */
    vfunc_get_in_seek(): boolean
    /**
     * Retrieves the #GstPipeline used by the `player,` for direct use with
     * GStreamer API.
     * @virtual 
     * @returns the #GstPipeline element used by the player
     */
    vfunc_get_pipeline(): Gst.Element
    /**
     * Get the current value of the seek-flags property.
     * @virtual 
     * @returns a combination of #ClutterGstSeekFlags
     */
    vfunc_get_seek_flags(): SeekFlags
    /**
     * Get the current subtitles track. The number returned is the index of the
     * subtiles track in the list returned by
     * clutter_gst_player_get_subtitle_tracks().
     * @virtual 
     * @returns the index of the current subtitlest track, -1 if the media has no subtitles track or if the subtitles have been turned off
     */
    vfunc_get_subtitle_track(): number
    /**
     * Get the list of subtitles tracks of the current media.
     * @virtual 
     * @returns a list of strings describing the available subtitles tracks
     */
    vfunc_get_subtitle_tracks(): string[]
    /**
     * Retrieves the user agent used when streaming.
     * @virtual 
     * @returns the user agent used. The returned string has to be freed with g_free()
     */
    vfunc_get_user_agent(): string | null
    /**
     * Set the audio stream to play. `index_` is the index of the stream
     * in the list returned by clutter_gst_player_get_audio_streams().
     * @virtual 
     * @param index_ the index of the audio stream
     */
    vfunc_set_audio_stream(index_: number): void
    vfunc_set_buffering_mode(mode: BufferingMode): void
    /**
     * Seeking can be done with several trade-offs. Clutter-gst defaults
     * to %CLUTTER_GST_SEEK_FLAG_NONE.
     * @virtual 
     * @param flags a combination of #ClutterGstSeekFlags
     */
    vfunc_set_seek_flags(flags: SeekFlags): void
    /**
     * Set the subtitles track to play. `index_` is the index of the stream
     * in the list returned by clutter_gst_player_get_subtitle_tracks().
     * 
     * If `index_` is -1, the subtitles are turned off.
     * @virtual 
     * @param index_ the index of the subtitles track
     */
    vfunc_set_subtitle_track(index_: number): void
    /**
     * Sets the user agent to use when streaming.
     * 
     * When streaming content, you might want to set a custom user agent, eg. to
     * promote your software, make it appear in statistics or because the server
     * requires a special user agent you want to impersonate.
     * @virtual 
     * @param user_agent the user agent
     */
    vfunc_set_user_agent(user_agent: string): void

    // Own signals of ClutterGst-1.0.ClutterGst.Player

    connect(sigName: "download-buffering", callback: Player.DownloadBufferingSignalCallback): number
    connect_after(sigName: "download-buffering", callback: Player.DownloadBufferingSignalCallback): number
    emit(sigName: "download-buffering", start: number, stop: number, ...args: any[]): void

    // Class property signals of ClutterGst-1.0.ClutterGst.Player

    connect(sigName: "notify::audio-stream", callback: (($obj: Player, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::audio-stream", callback: (($obj: Player, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::audio-stream", ...args: any[]): void
    connect(sigName: "notify::audio-streams", callback: (($obj: Player, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::audio-streams", callback: (($obj: Player, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::audio-streams", ...args: any[]): void
    connect(sigName: "notify::idle", callback: (($obj: Player, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::idle", callback: (($obj: Player, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::idle", ...args: any[]): void
    connect(sigName: "notify::in-seek", callback: (($obj: Player, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::in-seek", callback: (($obj: Player, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::in-seek", ...args: any[]): void
    connect(sigName: "notify::seek-flags", callback: (($obj: Player, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::seek-flags", callback: (($obj: Player, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::seek-flags", ...args: any[]): void
    connect(sigName: "notify::subtitle-track", callback: (($obj: Player, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::subtitle-track", callback: (($obj: Player, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::subtitle-track", ...args: any[]): void
    connect(sigName: "notify::subtitle-tracks", callback: (($obj: Player, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::subtitle-tracks", callback: (($obj: Player, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::subtitle-tracks", ...args: any[]): void
    connect(sigName: "notify::user-agent", callback: (($obj: Player, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::user-agent", callback: (($obj: Player, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::user-agent", ...args: any[]): void
    connect(sigName: "notify::audio-volume", callback: (($obj: Player, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::audio-volume", callback: (($obj: Player, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::audio-volume", ...args: any[]): void
    connect(sigName: "notify::buffer-fill", callback: (($obj: Player, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::buffer-fill", callback: (($obj: Player, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::buffer-fill", ...args: any[]): void
    connect(sigName: "notify::can-seek", callback: (($obj: Player, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-seek", callback: (($obj: Player, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-seek", ...args: any[]): void
    connect(sigName: "notify::duration", callback: (($obj: Player, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::duration", callback: (($obj: Player, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::duration", ...args: any[]): void
    connect(sigName: "notify::playing", callback: (($obj: Player, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::playing", callback: (($obj: Player, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::playing", ...args: any[]): void
    connect(sigName: "notify::progress", callback: (($obj: Player, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::progress", callback: (($obj: Player, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::progress", ...args: any[]): void
    connect(sigName: "notify::subtitle-font-name", callback: (($obj: Player, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::subtitle-font-name", callback: (($obj: Player, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::subtitle-font-name", ...args: any[]): void
    connect(sigName: "notify::subtitle-uri", callback: (($obj: Player, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::subtitle-uri", callback: (($obj: Player, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::subtitle-uri", ...args: any[]): void
    connect(sigName: "notify::uri", callback: (($obj: Player, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::uri", callback: (($obj: Player, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::uri", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * #ClutterGstPlayer is an opaque structure whose members cannot be
 * directly accessed
 * @interface 
 */
export class Player extends GObject.Object {

    // Own properties of ClutterGst-1.0.ClutterGst.Player

    static name: string
    static $gtype: GObject.GType<Player>

    // Constructors of ClutterGst-1.0.ClutterGst.Player

    constructor(config?: Player.ConstructorProperties) 
    _init(config?: Player.ConstructorProperties): void
    /**
     * Adds the #ClutterGstPlayer properties to a class and surchages the
     * set/get_property of #GObjectClass. You should call this
     * function at the end of the class_init method of the class
     * implementing #ClutterGstPlayer.
     * @param object_class a #GObjectClass
     */
    static class_init(object_class: GObject.ObjectClass): void
}

export module VideoSink {

    // Constructor properties interface

    export interface ConstructorProperties extends Gst.ImplementsInterface.ConstructorProperties, GstInterfaces.Navigation.ConstructorProperties, Gst.BaseSink.ConstructorProperties {

        // Own constructor properties of ClutterGst-1.0.ClutterGst.VideoSink

        /**
         * This is the texture the video is decoded into. It can be any
         * #ClutterTexture, however Cluter-Gst has a handy subclass,
         * #ClutterGstVideoTexture, that implements the #ClutterMedia
         * interface.
         */
        texture?: Clutter.Texture | null
        /**
         * Clutter-Gst installs a #GSource to signal that a new frame is ready to
         * the Clutter thread. This property allows to tweak the priority of the
         * source (Lower value is higher priority).
         * 
         * Since 1.0
         */
        updatePriority?: number | null
    }

}

export interface VideoSink extends Gst.ImplementsInterface, GstInterfaces.Navigation {

    // Own properties of ClutterGst-1.0.ClutterGst.VideoSink

    /**
     * This is the texture the video is decoded into. It can be any
     * #ClutterTexture, however Cluter-Gst has a handy subclass,
     * #ClutterGstVideoTexture, that implements the #ClutterMedia
     * interface.
     */
    texture: Clutter.Texture
    /**
     * Clutter-Gst installs a #GSource to signal that a new frame is ready to
     * the Clutter thread. This property allows to tweak the priority of the
     * source (Lower value is higher priority).
     * 
     * Since 1.0
     */
    updatePriority: number

    // Conflicting properties

    object: any

    // Conflicting methods

    send_event(structure: Gst.Structure): void
    send_event(event: Gst.Event): boolean
    vfunc_send_event(structure: Gst.Structure): void
    vfunc_send_event(event: Gst.Event): boolean

    // Class property signals of ClutterGst-1.0.ClutterGst.VideoSink

    connect(sigName: "notify::texture", callback: (($obj: VideoSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::texture", callback: (($obj: VideoSink, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::texture", ...args: any[]): void
    connect(sigName: "notify::update-priority", callback: (($obj: VideoSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::update-priority", callback: (($obj: VideoSink, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::update-priority", ...args: any[]): void
    connect(sigName: "notify::async", callback: (($obj: VideoSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::async", callback: (($obj: VideoSink, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::async", ...args: any[]): void
    connect(sigName: "notify::blocksize", callback: (($obj: VideoSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::blocksize", callback: (($obj: VideoSink, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::blocksize", ...args: any[]): void
    connect(sigName: "notify::enable-last-buffer", callback: (($obj: VideoSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enable-last-buffer", callback: (($obj: VideoSink, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::enable-last-buffer", ...args: any[]): void
    connect(sigName: "notify::last-buffer", callback: (($obj: VideoSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::last-buffer", callback: (($obj: VideoSink, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::last-buffer", ...args: any[]): void
    connect(sigName: "notify::max-lateness", callback: (($obj: VideoSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-lateness", callback: (($obj: VideoSink, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::max-lateness", ...args: any[]): void
    connect(sigName: "notify::preroll-queue-len", callback: (($obj: VideoSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::preroll-queue-len", callback: (($obj: VideoSink, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::preroll-queue-len", ...args: any[]): void
    connect(sigName: "notify::qos", callback: (($obj: VideoSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::qos", callback: (($obj: VideoSink, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::qos", ...args: any[]): void
    connect(sigName: "notify::render-delay", callback: (($obj: VideoSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::render-delay", callback: (($obj: VideoSink, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::render-delay", ...args: any[]): void
    connect(sigName: "notify::ts-offset", callback: (($obj: VideoSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ts-offset", callback: (($obj: VideoSink, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::ts-offset", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * Class implementing a GStreamer sink element for #ClutterTexture<!-- -->s.
 * 
 * The #ClutterGstVideoSink structure contains only private data and should
 * not be accessed directly.
 * @class 
 */
export class VideoSink extends Gst.BaseSink {

    // Own properties of ClutterGst-1.0.ClutterGst.VideoSink

    static name: string
    static $gtype: GObject.GType<VideoSink>

    // Constructors of ClutterGst-1.0.ClutterGst.VideoSink

    constructor(config?: VideoSink.ConstructorProperties) 
    /**
     * Creates a new GStreamer video sink which uses `texture` as the target
     * for sinking a video stream from GStreamer.
     * 
     * <note>This function has to be called from Clutter's main thread. While
     * GStreamer will spawn threads to do its work, we want all the GL calls to
     * happen in the same thread. Clutter-gst knows which thread it is by
     * assuming this constructor is called from the Clutter thread.</note>
     * @constructor 
     * @param texture a #ClutterTexture
     * @returns a #GstElement for the newly created video sink
     */
    constructor(texture: Clutter.Texture) 
    /**
     * Creates a new GStreamer video sink which uses `texture` as the target
     * for sinking a video stream from GStreamer.
     * 
     * <note>This function has to be called from Clutter's main thread. While
     * GStreamer will spawn threads to do its work, we want all the GL calls to
     * happen in the same thread. Clutter-gst knows which thread it is by
     * assuming this constructor is called from the Clutter thread.</note>
     * @constructor 
     * @param texture a #ClutterTexture
     * @returns a #GstElement for the newly created video sink
     */
    static new(texture: Clutter.Texture): VideoSink
    _init(config?: VideoSink.ConstructorProperties): void
}

export module VideoTexture {

    // Constructor properties interface

    export interface ConstructorProperties extends Atk.ImplementorIface.ConstructorProperties, Clutter.Animatable.ConstructorProperties, Clutter.Container.ConstructorProperties, Clutter.Media.ConstructorProperties, Clutter.Scriptable.ConstructorProperties, Player.ConstructorProperties, Clutter.Texture.ConstructorProperties {

        // Own constructor properties of ClutterGst-1.0.ClutterGst.VideoTexture

        pixelAspectRatio?: any | null
    }

}

export interface VideoTexture extends Atk.ImplementorIface, Clutter.Animatable, Clutter.Container, Clutter.Media, Clutter.Scriptable, Player {

    // Own properties of ClutterGst-1.0.ClutterGst.VideoTexture

    pixelAspectRatio: any

    // Owm methods of ClutterGst-1.0.ClutterGst.VideoTexture

    /**
     * Get the current audio stream. The number returned in the index of the
     * audio stream playing in the list returned by
     * clutter_gst_video_texture_get_audio_streams().
     * @returns the index of the current audio stream, -1 if the media has no audio stream
     */
    get_audio_stream(): number
    /**
     * Get the list of audio streams of the current media.
     * @returns a list of #GstTagList describing the available audio streams
     */
    get_audio_streams(): Gst.TagList[]

    // Overloads of get_audio_streams

    /**
     * Get the list of audio streams of the current media.
     * @returns a list of strings describing the available audio streams
     */
    get_audio_streams(): string[]
    get_buffering_mode(): BufferingMode
    /**
     * Retrieves the material used to draw when no media is being played.
     * @returns the #CoglHandle of the idle material
     */
    get_idle_material(): Cogl.Handle
    /**
     * Retrieves the #GstPipeline used by the `texture,` for direct use with
     * GStreamer API.
     * @returns the pipeline element used by the video texture
     */
    get_pipeline(): Gst.Element
    /**
     * Get the current value of the seek-flags property.
     * @returns a combination of #ClutterGstSeekFlags
     */
    get_seek_flags(): SeekFlags
    /**
     * Get the current subtitles track. The number returned is the index of the
     * subitles track in the list returned by
     * clutter_gst_video_texture_get_subtitle_tracks().
     * @returns the index of the current subtitlest track, -1 if the media has no subtitles track or if the subtitles have been turned off
     */
    get_subtitle_track(): number
    /**
     * Get the list of subtitles tracks of the current media.
     * @returns a list of #GstTagList describing the available subtitles tracks
     */
    get_subtitle_tracks(): Gst.TagList[]

    // Overloads of get_subtitle_tracks

    /**
     * Get the list of subtitles tracks of the current media.
     * @returns a list of strings describing the available subtitles tracks
     */
    get_subtitle_tracks(): string[]
    /**
     * Retrieves the user agent used when streaming.
     * @returns the user agent used. The returned string has to be freed with g_free()
     */
    get_user_agent(): string | null
    /**
     * Set the audio stream to play. `index_` is the index of the stream
     * in the list returned by clutter_gst_video_texture_get_audio_streams().
     * @param index_ the index of the audio stream
     */
    set_audio_stream(index_: number): void
    set_buffering_mode(mode: BufferingMode): void
    set_idle_material(material: Cogl.Handle): void
    /**
     * Seeking can be done with several trade-offs. Clutter-gst defaults
     * to %CLUTTER_GST_SEEK_FLAG_NONE.
     * @param flags a combination of #ClutterGstSeekFlags
     */
    set_seek_flags(flags: SeekFlags): void
    /**
     * Set the subtitles track to play. `index_` is the index of the stream
     * in the list returned by clutter_gst_video_texture_get_subtitle_tracks().
     * 
     * If `index_` is -1, the subtitles are turned off.
     * @param index_ the index of the subtitles track
     */
    set_subtitle_track(index_: number): void
    /**
     * Sets the user agent to use when streaming.
     * 
     * When streaming content, you might want to set a custom user agent, eg. to
     * promote your software, make it appear in statistics or because the server
     * requires a special user agent you want to impersonate.
     * @param user_agent the user agent
     */
    set_user_agent(user_agent: string): void

    // Class property signals of ClutterGst-1.0.ClutterGst.VideoTexture

    connect(sigName: "notify::pixel-aspect-ratio", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pixel-aspect-ratio", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::pixel-aspect-ratio", ...args: any[]): void
    connect(sigName: "notify::disable-slicing", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::disable-slicing", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::disable-slicing", ...args: any[]): void
    connect(sigName: "notify::filename", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::filename", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::filename", ...args: any[]): void
    connect(sigName: "notify::filter-quality", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::filter-quality", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::filter-quality", ...args: any[]): void
    connect(sigName: "notify::keep-aspect-ratio", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::keep-aspect-ratio", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::keep-aspect-ratio", ...args: any[]): void
    connect(sigName: "notify::load-async", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::load-async", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::load-async", ...args: any[]): void
    connect(sigName: "notify::load-data-async", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::load-data-async", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::load-data-async", ...args: any[]): void
    connect(sigName: "notify::pick-with-alpha", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pick-with-alpha", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::pick-with-alpha", ...args: any[]): void
    connect(sigName: "notify::pixel-format", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pixel-format", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::pixel-format", ...args: any[]): void
    connect(sigName: "notify::repeat-x", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::repeat-x", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::repeat-x", ...args: any[]): void
    connect(sigName: "notify::repeat-y", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::repeat-y", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::repeat-y", ...args: any[]): void
    connect(sigName: "notify::sync-size", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sync-size", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sync-size", ...args: any[]): void
    connect(sigName: "notify::tile-waste", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tile-waste", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tile-waste", ...args: any[]): void
    connect(sigName: "notify::actions", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::actions", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::actions", ...args: any[]): void
    connect(sigName: "notify::allocation", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::allocation", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::allocation", ...args: any[]): void
    connect(sigName: "notify::anchor-gravity", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::anchor-gravity", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::anchor-gravity", ...args: any[]): void
    connect(sigName: "notify::anchor-x", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::anchor-x", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::anchor-x", ...args: any[]): void
    connect(sigName: "notify::anchor-y", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::anchor-y", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::anchor-y", ...args: any[]): void
    connect(sigName: "notify::background-color", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::background-color", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::background-color", ...args: any[]): void
    connect(sigName: "notify::background-color-set", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::background-color-set", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::background-color-set", ...args: any[]): void
    connect(sigName: "notify::child-transform", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child-transform", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child-transform", ...args: any[]): void
    connect(sigName: "notify::child-transform-set", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child-transform-set", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child-transform-set", ...args: any[]): void
    connect(sigName: "notify::clip", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clip", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::clip", ...args: any[]): void
    connect(sigName: "notify::clip-rect", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clip-rect", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::clip-rect", ...args: any[]): void
    connect(sigName: "notify::clip-to-allocation", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clip-to-allocation", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::clip-to-allocation", ...args: any[]): void
    connect(sigName: "notify::constraints", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::constraints", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::constraints", ...args: any[]): void
    connect(sigName: "notify::content", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::content", ...args: any[]): void
    connect(sigName: "notify::content-box", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content-box", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::content-box", ...args: any[]): void
    connect(sigName: "notify::content-gravity", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content-gravity", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::content-gravity", ...args: any[]): void
    connect(sigName: "notify::content-repeat", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content-repeat", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::content-repeat", ...args: any[]): void
    connect(sigName: "notify::depth", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::depth", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::depth", ...args: any[]): void
    connect(sigName: "notify::effect", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::effect", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::effect", ...args: any[]): void
    connect(sigName: "notify::first-child", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::first-child", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::first-child", ...args: any[]): void
    connect(sigName: "notify::fixed-position-set", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fixed-position-set", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::fixed-position-set", ...args: any[]): void
    connect(sigName: "notify::fixed-x", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fixed-x", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::fixed-x", ...args: any[]): void
    connect(sigName: "notify::fixed-y", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fixed-y", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::fixed-y", ...args: any[]): void
    connect(sigName: "notify::has-clip", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-clip", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-clip", ...args: any[]): void
    connect(sigName: "notify::has-pointer", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-pointer", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-pointer", ...args: any[]): void
    connect(sigName: "notify::height", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height", ...args: any[]): void
    connect(sigName: "notify::last-child", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::last-child", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::last-child", ...args: any[]): void
    connect(sigName: "notify::layout-manager", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::layout-manager", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::layout-manager", ...args: any[]): void
    connect(sigName: "notify::magnification-filter", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::magnification-filter", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::magnification-filter", ...args: any[]): void
    connect(sigName: "notify::mapped", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mapped", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::mapped", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-left", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-left", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-left", ...args: any[]): void
    connect(sigName: "notify::margin-right", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-right", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-right", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::min-height", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::min-height", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::min-height", ...args: any[]): void
    connect(sigName: "notify::min-height-set", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::min-height-set", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::min-height-set", ...args: any[]): void
    connect(sigName: "notify::min-width", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::min-width", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::min-width", ...args: any[]): void
    connect(sigName: "notify::min-width-set", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::min-width-set", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::min-width-set", ...args: any[]): void
    connect(sigName: "notify::minification-filter", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::minification-filter", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::minification-filter", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::natural-height", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::natural-height", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::natural-height", ...args: any[]): void
    connect(sigName: "notify::natural-height-set", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::natural-height-set", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::natural-height-set", ...args: any[]): void
    connect(sigName: "notify::natural-width", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::natural-width", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::natural-width", ...args: any[]): void
    connect(sigName: "notify::natural-width-set", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::natural-width-set", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::natural-width-set", ...args: any[]): void
    connect(sigName: "notify::offscreen-redirect", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::offscreen-redirect", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::offscreen-redirect", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::pivot-point", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pivot-point", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::pivot-point", ...args: any[]): void
    connect(sigName: "notify::pivot-point-z", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pivot-point-z", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::pivot-point-z", ...args: any[]): void
    connect(sigName: "notify::position", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::position", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::position", ...args: any[]): void
    connect(sigName: "notify::reactive", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::reactive", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::reactive", ...args: any[]): void
    connect(sigName: "notify::realized", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::realized", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::realized", ...args: any[]): void
    connect(sigName: "notify::request-mode", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::request-mode", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::request-mode", ...args: any[]): void
    connect(sigName: "notify::rotation-angle-x", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rotation-angle-x", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::rotation-angle-x", ...args: any[]): void
    connect(sigName: "notify::rotation-angle-y", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rotation-angle-y", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::rotation-angle-y", ...args: any[]): void
    connect(sigName: "notify::rotation-angle-z", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rotation-angle-z", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::rotation-angle-z", ...args: any[]): void
    connect(sigName: "notify::rotation-center-x", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rotation-center-x", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::rotation-center-x", ...args: any[]): void
    connect(sigName: "notify::rotation-center-y", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rotation-center-y", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::rotation-center-y", ...args: any[]): void
    connect(sigName: "notify::rotation-center-z", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rotation-center-z", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::rotation-center-z", ...args: any[]): void
    connect(sigName: "notify::rotation-center-z-gravity", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rotation-center-z-gravity", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::rotation-center-z-gravity", ...args: any[]): void
    connect(sigName: "notify::scale-center-x", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-center-x", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-center-x", ...args: any[]): void
    connect(sigName: "notify::scale-center-y", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-center-y", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-center-y", ...args: any[]): void
    connect(sigName: "notify::scale-gravity", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-gravity", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-gravity", ...args: any[]): void
    connect(sigName: "notify::scale-x", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-x", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-x", ...args: any[]): void
    connect(sigName: "notify::scale-y", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-y", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-y", ...args: any[]): void
    connect(sigName: "notify::scale-z", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-z", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-z", ...args: any[]): void
    connect(sigName: "notify::show-on-set-parent", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::show-on-set-parent", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::show-on-set-parent", ...args: any[]): void
    connect(sigName: "notify::size", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::text-direction", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::text-direction", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::text-direction", ...args: any[]): void
    connect(sigName: "notify::transform", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transform", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::transform", ...args: any[]): void
    connect(sigName: "notify::transform-set", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transform-set", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::transform-set", ...args: any[]): void
    connect(sigName: "notify::translation-x", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::translation-x", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::translation-x", ...args: any[]): void
    connect(sigName: "notify::translation-y", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::translation-y", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::translation-y", ...args: any[]): void
    connect(sigName: "notify::translation-z", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::translation-z", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::translation-z", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width", ...args: any[]): void
    connect(sigName: "notify::x", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::x", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::x", ...args: any[]): void
    connect(sigName: "notify::x-align", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::x-align", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::x-align", ...args: any[]): void
    connect(sigName: "notify::x-expand", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::x-expand", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::x-expand", ...args: any[]): void
    connect(sigName: "notify::y", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::y", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::y", ...args: any[]): void
    connect(sigName: "notify::y-align", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::y-align", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::y-align", ...args: any[]): void
    connect(sigName: "notify::y-expand", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::y-expand", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::y-expand", ...args: any[]): void
    connect(sigName: "notify::z-position", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::z-position", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::z-position", ...args: any[]): void
    connect(sigName: "notify::audio-volume", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::audio-volume", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::audio-volume", ...args: any[]): void
    connect(sigName: "notify::buffer-fill", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::buffer-fill", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::buffer-fill", ...args: any[]): void
    connect(sigName: "notify::can-seek", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-seek", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-seek", ...args: any[]): void
    connect(sigName: "notify::duration", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::duration", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::duration", ...args: any[]): void
    connect(sigName: "notify::playing", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::playing", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::playing", ...args: any[]): void
    connect(sigName: "notify::progress", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::progress", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::progress", ...args: any[]): void
    connect(sigName: "notify::subtitle-font-name", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::subtitle-font-name", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::subtitle-font-name", ...args: any[]): void
    connect(sigName: "notify::subtitle-uri", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::subtitle-uri", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::subtitle-uri", ...args: any[]): void
    connect(sigName: "notify::uri", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::uri", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::uri", ...args: any[]): void
    connect(sigName: "notify::audio-stream", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::audio-stream", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::audio-stream", ...args: any[]): void
    connect(sigName: "notify::audio-streams", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::audio-streams", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::audio-streams", ...args: any[]): void
    connect(sigName: "notify::idle", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::idle", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::idle", ...args: any[]): void
    connect(sigName: "notify::in-seek", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::in-seek", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::in-seek", ...args: any[]): void
    connect(sigName: "notify::seek-flags", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::seek-flags", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::seek-flags", ...args: any[]): void
    connect(sigName: "notify::subtitle-track", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::subtitle-track", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::subtitle-track", ...args: any[]): void
    connect(sigName: "notify::subtitle-tracks", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::subtitle-tracks", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::subtitle-tracks", ...args: any[]): void
    connect(sigName: "notify::user-agent", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::user-agent", callback: (($obj: VideoTexture, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::user-agent", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * Subclass of #ClutterTexture that displays videos using GStreamer.
 * 
 * The #ClutterGstVideoTexture structure contains only private data and
 * should not be accessed directly.
 * @class 
 */
export class VideoTexture extends Clutter.Texture {

    // Own properties of ClutterGst-1.0.ClutterGst.VideoTexture

    static name: string
    static $gtype: GObject.GType<VideoTexture>

    // Constructors of ClutterGst-1.0.ClutterGst.VideoTexture

    constructor(config?: VideoTexture.ConstructorProperties) 
    /**
     * Creates a video texture.
     * 
     * <note>This function has to be called from Clutter's main thread. While
     * GStreamer will spawn threads to do its work, we want all the GL calls to
     * happen in the same thread. Clutter-gst knows which thread it is by
     * assuming this constructor is called from the Clutter thread.</note>
     * @constructor 
     * @returns the newly created video texture actor
     */
    constructor() 
    /**
     * Creates a video texture.
     * 
     * <note>This function has to be called from Clutter's main thread. While
     * GStreamer will spawn threads to do its work, we want all the GL calls to
     * happen in the same thread. Clutter-gst knows which thread it is by
     * assuming this constructor is called from the Clutter thread.</note>
     * @constructor 
     * @returns the newly created video texture actor
     */
    static new(): VideoTexture
    _init(config?: VideoTexture.ConstructorProperties): void
}

export interface PlayerIface {

    // Own fields of ClutterGst-1.0.ClutterGst.PlayerIface

    get_pipeline: (player: Player) => Gst.Element
    get_user_agent: (player: Player) => string | null
    set_user_agent: (player: Player, user_agent: string) => void
    get_seek_flags: (player: Player) => SeekFlags
    set_seek_flags: (player: Player, flags: SeekFlags) => void
    get_buffering_mode: (player: Player) => BufferingMode
    set_buffering_mode: (player: Player, mode: BufferingMode) => void
    get_audio_streams: (player: Player) => string[]
    get_audio_stream: (player: Player) => number
    set_audio_stream: (player: Player, index_: number) => void
    get_subtitle_tracks: (player: Player) => string[]
    get_subtitle_track: (player: Player) => number
    set_subtitle_track: (player: Player, index_: number) => void
    get_idle: (player: Player) => boolean
    get_in_seek: (player: Player) => boolean
    download_buffering: (player: Player, start: number, stop: number) => void
}

/**
 * Interface vtable for #ClutterGstPlayer implementations
 * @record 
 */
export abstract class PlayerIface {

    // Own properties of ClutterGst-1.0.ClutterGst.PlayerIface

    static name: string
}

export interface PlayerIfacePrivate {
}

export class PlayerIfacePrivate {

    // Own properties of ClutterGst-1.0.ClutterGst.PlayerIfacePrivate

    static name: string
}

export interface VideoSinkClass {
}

/**
 * Base class for #ClutterGstVideoSink.
 * @record 
 */
export abstract class VideoSinkClass {

    // Own properties of ClutterGst-1.0.ClutterGst.VideoSinkClass

    static name: string
}

export interface VideoSinkPrivate {
}

export class VideoSinkPrivate {

    // Own properties of ClutterGst-1.0.ClutterGst.VideoSinkPrivate

    static name: string
}

export interface VideoTextureClass {
}

/**
 * Base class for #ClutterGstVideoTexture.
 * @record 
 */
export abstract class VideoTextureClass {

    // Own properties of ClutterGst-1.0.ClutterGst.VideoTextureClass

    static name: string
}

export interface VideoTexturePrivate {
}

export class VideoTexturePrivate {

    // Own properties of ClutterGst-1.0.ClutterGst.VideoTexturePrivate

    static name: string
}

/**
 * Name of the imported GIR library
 * @see https://gitlab.gnome.org/GNOME/gjs/-/blob/master/gi/ns.cpp#L188
 */
export const __name__: string
/**
 * Version of the imported GIR library
 * @see https://gitlab.gnome.org/GNOME/gjs/-/blob/master/gi/ns.cpp#L189
 */
export const __version__: string
// END