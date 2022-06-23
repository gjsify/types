// @ts-nocheck

/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * ClutterGst-1.0
 */

import type GstVideo from './GstVideo-0.10';
import type libxml2 from './libxml2-2.0';
import type GstBase from './GstBase-0.10';
import type Gst from './Gst-0.10';
import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';
import type GModule from './GModule-2.0';
import type GstInterfaces from './GstInterfaces-0.10';
import type GstAudio from './GstAudio-0.10';
import type Clutter from './Clutter-1.0';
import type cairo from './cairo-1.0';
import type Json from './Json-1.0';
import type Gio from './Gio-2.0';
import type GL from './GL-1.0';
import type CoglPango from './CoglPango-1.0';
import type PangoCairo from './PangoCairo-1.0';
import type Pango from './Pango-1.0';
import type HarfBuzz from './HarfBuzz-0.0';
import type Cogl from './Cogl-1.0';
import type Atk from './Atk-1.0';

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
 * Flags that can be given to clutter_gst_video_texture_set_seek_flags().
 * @bitfield 
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
/**
 * ClutterGst major version (e.g. "1", if %CLUTTER_GST_VERSION is "1.2.3")
 */
const MAJOR_VERSION: number
/**
 * ClutterGst micro version (e.g. "3", if %CLUTTER_GST_VERSION is "1.2.3")
 */
const MICRO_VERSION: number
/**
 * ClutterGst minor version (e.g. "2", if %CLUTTER_GST_VERSION is "1.2.3")
 */
const MINOR_VERSION: number
/**
 * ClutterGst full version, encoded as an hexadecimal value.
 */
const VERSION_HEX: number
/**
 * ClutterGst full version, encoded as a string.
 */
const VERSION_S: string
/**
 * Utility function to initialize both Clutter and GStreamer.
 * 
 * This function should be called before calling any other GLib functions. If
 * this is not an option, your program must initialise the GLib thread system
 * using g_thread_init() before any other GLib functions are called.
 * @param argv A pointer to an array
 */
function init(argv?: string[] | null): [ /* returnType */ Clutter.InitError, /* argv */ string[] | null ]
/**
 * This function does the same work as clutter_gst_init(). Additionally, it
 * allows you to add your own command line options, and it automatically
 * generates nicely formatted --help output. Clutter's and GStreamer's
 * #GOptionGroup<!-- -->s are added to the set of available options.
 * 
 * Your program must initialise the GLib thread system using g_thread_init()
 * before any other GLib functions are called.
 * @param argv A pointer to an array
 * @param parameterString a string which is displayed in the first line of <option>--help</option> output, after <literal><replaceable>programname</replaceable> [OPTION...]</literal>
 * @param entries a %NULL-terminated array of #GOptionEntry<!-- -->s describing the options of your program
 * @param translationDomain a translation domain to use for translating the <option>--help</option> output for the options in `entries` with gettext(), or %NULL
 */
function initWithArgs(argv: string[] | null, parameterString: string, entries: GLib.OptionEntry, translationDomain: string): [ /* returnType */ Clutter.InitError, /* argv */ string[] | null ]
/**
 * Adds the #ClutterGstPlayer properties to a class and surchages the
 * set/get_property of #GObjectClass. You should call this
 * function at the end of the class_init method of the class
 * implementing #ClutterGstPlayer.
 * @param objectClass a #GObjectClass
 */
function playerClassInit(objectClass: GObject.ObjectClass): void
interface Player_ConstructProps extends Clutter.Media_ConstructProps, GObject.Object_ConstructProps {

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

/**
 * Signal callback interface for `download-buffering`
 */
interface Player_DownloadBufferingSignalCallback {
    (start: number, stop: number): void
}

interface Player extends Clutter.Media {

    // Own properties of ClutterGst-1.0.ClutterGst.Player

    /**
     * Index of the current audio stream.
     */
    audioStream: number
    /**
     * List of audio streams available on the current media.
     */
    readonly audioStreams: object
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
    readonly subtitleTracks: object
    /**
     * The User Agent used by #ClutterGstPlayer with network protocols.
     */
    userAgent: string

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
     */
    getAudioStream(): number
    /**
     * Get the list of audio streams of the current media.
     */
    getAudioStreams(): string[]
    getBufferingMode(): BufferingMode
    /**
     * Get the idle state of the pipeline.
     */
    getIdle(): boolean
    /**
     * Whether the player is seeking.
     */
    getInSeek(): boolean
    /**
     * Retrieves the #GstPipeline used by the `player,` for direct use with
     * GStreamer API.
     */
    getPipeline(): Gst.Element
    /**
     * Get the current value of the seek-flags property.
     */
    getSeekFlags(): SeekFlags
    /**
     * Get the current subtitles track. The number returned is the index of the
     * subtiles track in the list returned by
     * clutter_gst_player_get_subtitle_tracks().
     */
    getSubtitleTrack(): number
    /**
     * Get the list of subtitles tracks of the current media.
     */
    getSubtitleTracks(): string[]
    /**
     * Retrieves the user agent used when streaming.
     */
    getUserAgent(): string
    init(): boolean
    /**
     * Set the audio stream to play. `index_` is the index of the stream
     * in the list returned by clutter_gst_player_get_audio_streams().
     * @param index the index of the audio stream
     */
    setAudioStream(index: number): void
    setBufferingMode(mode: BufferingMode): void
    /**
     * Seeking can be done with several trade-offs. Clutter-gst defaults
     * to %CLUTTER_GST_SEEK_FLAG_NONE.
     * @param flags a combination of #ClutterGstSeekFlags
     */
    setSeekFlags(flags: SeekFlags): void
    /**
     * Set the subtitles track to play. `index_` is the index of the stream
     * in the list returned by clutter_gst_player_get_subtitle_tracks().
     * 
     * If `index_` is -1, the subtitles are turned off.
     * @param index the index of the subtitles track
     */
    setSubtitleTrack(index: number): void
    /**
     * Sets the user agent to use when streaming.
     * 
     * When streaming content, you might want to set a custom user agent, eg. to
     * promote your software, make it appear in statistics or because the server
     * requires a special user agent you want to impersonate.
     * @param userAgent the user agent
     */
    setUserAgent(userAgent: string): void

    // Own signals of ClutterGst-1.0.ClutterGst.Player

    connect(sigName: "download-buffering", callback: Player_DownloadBufferingSignalCallback): number
    on(sigName: "download-buffering", callback: Player_DownloadBufferingSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "download-buffering", callback: Player_DownloadBufferingSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "download-buffering", callback: Player_DownloadBufferingSignalCallback): NodeJS.EventEmitter
    emit(sigName: "download-buffering", stop: number, ...args: any[]): void

    // Class property signals of ClutterGst-1.0.ClutterGst.Player

    connect(sigName: "notify::audio-stream", callback: (...args: any[]) => void): number
    on(sigName: "notify::audio-stream", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::audio-stream", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::audio-stream", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::audio-stream", ...args: any[]): void
    connect(sigName: "notify::audio-streams", callback: (...args: any[]) => void): number
    on(sigName: "notify::audio-streams", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::audio-streams", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::audio-streams", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::audio-streams", ...args: any[]): void
    connect(sigName: "notify::idle", callback: (...args: any[]) => void): number
    on(sigName: "notify::idle", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::idle", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::idle", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::idle", ...args: any[]): void
    connect(sigName: "notify::in-seek", callback: (...args: any[]) => void): number
    on(sigName: "notify::in-seek", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::in-seek", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::in-seek", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::in-seek", ...args: any[]): void
    connect(sigName: "notify::seek-flags", callback: (...args: any[]) => void): number
    on(sigName: "notify::seek-flags", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::seek-flags", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::seek-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::seek-flags", ...args: any[]): void
    connect(sigName: "notify::subtitle-track", callback: (...args: any[]) => void): number
    on(sigName: "notify::subtitle-track", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::subtitle-track", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::subtitle-track", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::subtitle-track", ...args: any[]): void
    connect(sigName: "notify::subtitle-tracks", callback: (...args: any[]) => void): number
    on(sigName: "notify::subtitle-tracks", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::subtitle-tracks", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::subtitle-tracks", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::subtitle-tracks", ...args: any[]): void
    connect(sigName: "notify::user-agent", callback: (...args: any[]) => void): number
    on(sigName: "notify::user-agent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::user-agent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::user-agent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::user-agent", ...args: any[]): void
    connect(sigName: "notify::audio-volume", callback: (...args: any[]) => void): number
    on(sigName: "notify::audio-volume", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::audio-volume", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::audio-volume", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::audio-volume", ...args: any[]): void
    connect(sigName: "notify::buffer-fill", callback: (...args: any[]) => void): number
    on(sigName: "notify::buffer-fill", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::buffer-fill", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::buffer-fill", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::buffer-fill", ...args: any[]): void
    connect(sigName: "notify::can-seek", callback: (...args: any[]) => void): number
    on(sigName: "notify::can-seek", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::can-seek", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::can-seek", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::can-seek", ...args: any[]): void
    connect(sigName: "notify::duration", callback: (...args: any[]) => void): number
    on(sigName: "notify::duration", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::duration", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::duration", ...args: any[]): void
    connect(sigName: "notify::playing", callback: (...args: any[]) => void): number
    on(sigName: "notify::playing", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::playing", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::playing", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::playing", ...args: any[]): void
    connect(sigName: "notify::progress", callback: (...args: any[]) => void): number
    on(sigName: "notify::progress", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::progress", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::progress", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::progress", ...args: any[]): void
    connect(sigName: "notify::subtitle-font-name", callback: (...args: any[]) => void): number
    on(sigName: "notify::subtitle-font-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::subtitle-font-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::subtitle-font-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::subtitle-font-name", ...args: any[]): void
    connect(sigName: "notify::subtitle-uri", callback: (...args: any[]) => void): number
    on(sigName: "notify::subtitle-uri", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::subtitle-uri", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::subtitle-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::subtitle-uri", ...args: any[]): void
    connect(sigName: "notify::uri", callback: (...args: any[]) => void): number
    on(sigName: "notify::uri", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::uri", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::uri", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

/**
 * #ClutterGstPlayer is an opaque structure whose members cannot be
 * directly accessed
 * @interface 
 */
class Player extends GObject.Object {

    // Own properties of ClutterGst-1.0.ClutterGst.Player

    static name: string
    static $gtype: GObject.GType<Player>

    // Constructors of ClutterGst-1.0.ClutterGst.Player

    constructor(config?: Player_ConstructProps) 
    _init(config?: Player_ConstructProps): void
    /**
     * Adds the #ClutterGstPlayer properties to a class and surchages the
     * set/get_property of #GObjectClass. You should call this
     * function at the end of the class_init method of the class
     * implementing #ClutterGstPlayer.
     * @param objectClass a #GObjectClass
     */
    static classInit(objectClass: GObject.ObjectClass): void
}

interface VideoSink_ConstructProps extends Gst.ImplementsInterface_ConstructProps, GstInterfaces.Navigation_ConstructProps, Gst.BaseSink_ConstructProps {

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

interface VideoSink extends Gst.ImplementsInterface, GstInterfaces.Navigation {

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

    sendEvent(...args: any[]): any
    vfuncSendEvent(...args: any[]): any

    // Class property signals of ClutterGst-1.0.ClutterGst.VideoSink

    connect(sigName: "notify::texture", callback: (...args: any[]) => void): number
    on(sigName: "notify::texture", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::texture", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::texture", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::texture", ...args: any[]): void
    connect(sigName: "notify::update-priority", callback: (...args: any[]) => void): number
    on(sigName: "notify::update-priority", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::update-priority", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::update-priority", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::update-priority", ...args: any[]): void
    connect(sigName: "notify::async", callback: (...args: any[]) => void): number
    on(sigName: "notify::async", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::async", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::async", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::async", ...args: any[]): void
    connect(sigName: "notify::blocksize", callback: (...args: any[]) => void): number
    on(sigName: "notify::blocksize", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::blocksize", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::blocksize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::blocksize", ...args: any[]): void
    connect(sigName: "notify::enable-last-buffer", callback: (...args: any[]) => void): number
    on(sigName: "notify::enable-last-buffer", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::enable-last-buffer", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::enable-last-buffer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::enable-last-buffer", ...args: any[]): void
    connect(sigName: "notify::last-buffer", callback: (...args: any[]) => void): number
    on(sigName: "notify::last-buffer", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::last-buffer", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::last-buffer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::last-buffer", ...args: any[]): void
    connect(sigName: "notify::max-lateness", callback: (...args: any[]) => void): number
    on(sigName: "notify::max-lateness", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::max-lateness", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::max-lateness", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::max-lateness", ...args: any[]): void
    connect(sigName: "notify::preroll-queue-len", callback: (...args: any[]) => void): number
    on(sigName: "notify::preroll-queue-len", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::preroll-queue-len", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::preroll-queue-len", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::preroll-queue-len", ...args: any[]): void
    connect(sigName: "notify::qos", callback: (...args: any[]) => void): number
    on(sigName: "notify::qos", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::qos", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::qos", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::qos", ...args: any[]): void
    connect(sigName: "notify::render-delay", callback: (...args: any[]) => void): number
    on(sigName: "notify::render-delay", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::render-delay", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::render-delay", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::render-delay", ...args: any[]): void
    connect(sigName: "notify::ts-offset", callback: (...args: any[]) => void): number
    on(sigName: "notify::ts-offset", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::ts-offset", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::ts-offset", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::ts-offset", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

/**
 * Class implementing a GStreamer sink element for #ClutterTexture<!-- -->s.
 * 
 * The #ClutterGstVideoSink structure contains only private data and should
 * not be accessed directly.
 * @class 
 */
class VideoSink extends Gst.BaseSink {

    // Own properties of ClutterGst-1.0.ClutterGst.VideoSink

    static name: string
    static $gtype: GObject.GType<VideoSink>

    // Constructors of ClutterGst-1.0.ClutterGst.VideoSink

    constructor(config?: VideoSink_ConstructProps) 
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
     */
    static new(texture: Clutter.Texture): VideoSink
    _init(config?: VideoSink_ConstructProps): void
}

interface VideoTexture_ConstructProps extends Atk.ImplementorIface_ConstructProps, Clutter.Animatable_ConstructProps, Clutter.Container_ConstructProps, Clutter.Media_ConstructProps, Clutter.Scriptable_ConstructProps, Player_ConstructProps, Clutter.Texture_ConstructProps {

    // Own constructor properties of ClutterGst-1.0.ClutterGst.VideoTexture

    pixelAspectRatio?: any | null
}

interface VideoTexture extends Atk.ImplementorIface, Clutter.Animatable, Clutter.Container, Clutter.Media, Clutter.Scriptable, Player {

    // Own properties of ClutterGst-1.0.ClutterGst.VideoTexture

    pixelAspectRatio: any

    // Owm methods of ClutterGst-1.0.ClutterGst.VideoTexture

    /**
     * Get the current audio stream. The number returned in the index of the
     * audio stream playing in the list returned by
     * clutter_gst_video_texture_get_audio_streams().
     */
    getAudioStream(): number
    /**
     * Get the list of audio streams of the current media.
     */
    getAudioStreams(): Gst.TagList[]

    // Overloads of getAudioStreams

    /**
     * Get the list of audio streams of the current media.
     */
    getAudioStreams(): string[]
    getAudioStreams(...args: any[]): any
    getAudioStreams(...args: any[]): Gst.TagList[] | string[] | any
    getBufferingMode(): BufferingMode
    /**
     * Retrieves the material used to draw when no media is being played.
     */
    getIdleMaterial(): Cogl.Handle
    /**
     * Retrieves the #GstPipeline used by the `texture,` for direct use with
     * GStreamer API.
     */
    getPipeline(): Gst.Element
    /**
     * Get the current value of the seek-flags property.
     */
    getSeekFlags(): SeekFlags
    /**
     * Get the current subtitles track. The number returned is the index of the
     * subitles track in the list returned by
     * clutter_gst_video_texture_get_subtitle_tracks().
     */
    getSubtitleTrack(): number
    /**
     * Get the list of subtitles tracks of the current media.
     */
    getSubtitleTracks(): Gst.TagList[]

    // Overloads of getSubtitleTracks

    /**
     * Get the list of subtitles tracks of the current media.
     */
    getSubtitleTracks(): string[]
    getSubtitleTracks(...args: any[]): any
    getSubtitleTracks(...args: any[]): Gst.TagList[] | string[] | any
    /**
     * Retrieves the user agent used when streaming.
     */
    getUserAgent(): string
    /**
     * Set the audio stream to play. `index_` is the index of the stream
     * in the list returned by clutter_gst_video_texture_get_audio_streams().
     * @param index the index of the audio stream
     */
    setAudioStream(index: number): void
    setBufferingMode(mode: BufferingMode): void
    setIdleMaterial(material: Cogl.Handle): void
    /**
     * Seeking can be done with several trade-offs. Clutter-gst defaults
     * to %CLUTTER_GST_SEEK_FLAG_NONE.
     * @param flags a combination of #ClutterGstSeekFlags
     */
    setSeekFlags(flags: SeekFlags): void
    /**
     * Set the subtitles track to play. `index_` is the index of the stream
     * in the list returned by clutter_gst_video_texture_get_subtitle_tracks().
     * 
     * If `index_` is -1, the subtitles are turned off.
     * @param index the index of the subtitles track
     */
    setSubtitleTrack(index: number): void
    /**
     * Sets the user agent to use when streaming.
     * 
     * When streaming content, you might want to set a custom user agent, eg. to
     * promote your software, make it appear in statistics or because the server
     * requires a special user agent you want to impersonate.
     * @param userAgent the user agent
     */
    setUserAgent(userAgent: string): void

    // Class property signals of ClutterGst-1.0.ClutterGst.VideoTexture

    connect(sigName: "notify::pixel-aspect-ratio", callback: (...args: any[]) => void): number
    on(sigName: "notify::pixel-aspect-ratio", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::pixel-aspect-ratio", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::pixel-aspect-ratio", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::pixel-aspect-ratio", ...args: any[]): void
    connect(sigName: "notify::disable-slicing", callback: (...args: any[]) => void): number
    on(sigName: "notify::disable-slicing", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::disable-slicing", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::disable-slicing", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::disable-slicing", ...args: any[]): void
    connect(sigName: "notify::filename", callback: (...args: any[]) => void): number
    on(sigName: "notify::filename", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::filename", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::filename", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::filename", ...args: any[]): void
    connect(sigName: "notify::filter-quality", callback: (...args: any[]) => void): number
    on(sigName: "notify::filter-quality", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::filter-quality", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::filter-quality", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::filter-quality", ...args: any[]): void
    connect(sigName: "notify::keep-aspect-ratio", callback: (...args: any[]) => void): number
    on(sigName: "notify::keep-aspect-ratio", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::keep-aspect-ratio", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::keep-aspect-ratio", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::keep-aspect-ratio", ...args: any[]): void
    connect(sigName: "notify::load-async", callback: (...args: any[]) => void): number
    on(sigName: "notify::load-async", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::load-async", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::load-async", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::load-async", ...args: any[]): void
    connect(sigName: "notify::load-data-async", callback: (...args: any[]) => void): number
    on(sigName: "notify::load-data-async", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::load-data-async", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::load-data-async", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::load-data-async", ...args: any[]): void
    connect(sigName: "notify::pick-with-alpha", callback: (...args: any[]) => void): number
    on(sigName: "notify::pick-with-alpha", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::pick-with-alpha", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::pick-with-alpha", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::pick-with-alpha", ...args: any[]): void
    connect(sigName: "notify::pixel-format", callback: (...args: any[]) => void): number
    on(sigName: "notify::pixel-format", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::pixel-format", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::pixel-format", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::pixel-format", ...args: any[]): void
    connect(sigName: "notify::repeat-x", callback: (...args: any[]) => void): number
    on(sigName: "notify::repeat-x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::repeat-x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::repeat-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::repeat-x", ...args: any[]): void
    connect(sigName: "notify::repeat-y", callback: (...args: any[]) => void): number
    on(sigName: "notify::repeat-y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::repeat-y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::repeat-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::repeat-y", ...args: any[]): void
    connect(sigName: "notify::sync-size", callback: (...args: any[]) => void): number
    on(sigName: "notify::sync-size", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::sync-size", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::sync-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::sync-size", ...args: any[]): void
    connect(sigName: "notify::tile-waste", callback: (...args: any[]) => void): number
    on(sigName: "notify::tile-waste", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::tile-waste", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::tile-waste", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::tile-waste", ...args: any[]): void
    connect(sigName: "notify::actions", callback: (...args: any[]) => void): number
    on(sigName: "notify::actions", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::actions", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::actions", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::actions", ...args: any[]): void
    connect(sigName: "notify::allocation", callback: (...args: any[]) => void): number
    on(sigName: "notify::allocation", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::allocation", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::allocation", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::allocation", ...args: any[]): void
    connect(sigName: "notify::anchor-gravity", callback: (...args: any[]) => void): number
    on(sigName: "notify::anchor-gravity", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::anchor-gravity", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::anchor-gravity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::anchor-gravity", ...args: any[]): void
    connect(sigName: "notify::anchor-x", callback: (...args: any[]) => void): number
    on(sigName: "notify::anchor-x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::anchor-x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::anchor-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::anchor-x", ...args: any[]): void
    connect(sigName: "notify::anchor-y", callback: (...args: any[]) => void): number
    on(sigName: "notify::anchor-y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::anchor-y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::anchor-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::anchor-y", ...args: any[]): void
    connect(sigName: "notify::background-color", callback: (...args: any[]) => void): number
    on(sigName: "notify::background-color", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::background-color", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::background-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::background-color", ...args: any[]): void
    connect(sigName: "notify::background-color-set", callback: (...args: any[]) => void): number
    on(sigName: "notify::background-color-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::background-color-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::background-color-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::background-color-set", ...args: any[]): void
    connect(sigName: "notify::child-transform", callback: (...args: any[]) => void): number
    on(sigName: "notify::child-transform", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::child-transform", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::child-transform", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::child-transform", ...args: any[]): void
    connect(sigName: "notify::child-transform-set", callback: (...args: any[]) => void): number
    on(sigName: "notify::child-transform-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::child-transform-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::child-transform-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::child-transform-set", ...args: any[]): void
    connect(sigName: "notify::clip", callback: (...args: any[]) => void): number
    on(sigName: "notify::clip", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::clip", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::clip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::clip", ...args: any[]): void
    connect(sigName: "notify::clip-rect", callback: (...args: any[]) => void): number
    on(sigName: "notify::clip-rect", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::clip-rect", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::clip-rect", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::clip-rect", ...args: any[]): void
    connect(sigName: "notify::clip-to-allocation", callback: (...args: any[]) => void): number
    on(sigName: "notify::clip-to-allocation", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::clip-to-allocation", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::clip-to-allocation", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::clip-to-allocation", ...args: any[]): void
    connect(sigName: "notify::constraints", callback: (...args: any[]) => void): number
    on(sigName: "notify::constraints", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::constraints", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::constraints", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::constraints", ...args: any[]): void
    connect(sigName: "notify::content", callback: (...args: any[]) => void): number
    on(sigName: "notify::content", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::content", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::content", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::content", ...args: any[]): void
    connect(sigName: "notify::content-box", callback: (...args: any[]) => void): number
    on(sigName: "notify::content-box", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::content-box", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::content-box", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::content-box", ...args: any[]): void
    connect(sigName: "notify::content-gravity", callback: (...args: any[]) => void): number
    on(sigName: "notify::content-gravity", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::content-gravity", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::content-gravity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::content-gravity", ...args: any[]): void
    connect(sigName: "notify::content-repeat", callback: (...args: any[]) => void): number
    on(sigName: "notify::content-repeat", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::content-repeat", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::content-repeat", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::content-repeat", ...args: any[]): void
    connect(sigName: "notify::depth", callback: (...args: any[]) => void): number
    on(sigName: "notify::depth", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::depth", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::depth", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::depth", ...args: any[]): void
    connect(sigName: "notify::effect", callback: (...args: any[]) => void): number
    on(sigName: "notify::effect", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::effect", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::effect", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::effect", ...args: any[]): void
    connect(sigName: "notify::first-child", callback: (...args: any[]) => void): number
    on(sigName: "notify::first-child", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::first-child", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::first-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::first-child", ...args: any[]): void
    connect(sigName: "notify::fixed-position-set", callback: (...args: any[]) => void): number
    on(sigName: "notify::fixed-position-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::fixed-position-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::fixed-position-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::fixed-position-set", ...args: any[]): void
    connect(sigName: "notify::fixed-x", callback: (...args: any[]) => void): number
    on(sigName: "notify::fixed-x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::fixed-x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::fixed-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::fixed-x", ...args: any[]): void
    connect(sigName: "notify::fixed-y", callback: (...args: any[]) => void): number
    on(sigName: "notify::fixed-y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::fixed-y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::fixed-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::fixed-y", ...args: any[]): void
    connect(sigName: "notify::has-clip", callback: (...args: any[]) => void): number
    on(sigName: "notify::has-clip", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::has-clip", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::has-clip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::has-clip", ...args: any[]): void
    connect(sigName: "notify::has-pointer", callback: (...args: any[]) => void): number
    on(sigName: "notify::has-pointer", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::has-pointer", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::has-pointer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::has-pointer", ...args: any[]): void
    connect(sigName: "notify::height", callback: (...args: any[]) => void): number
    on(sigName: "notify::height", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::height", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::height", ...args: any[]): void
    connect(sigName: "notify::last-child", callback: (...args: any[]) => void): number
    on(sigName: "notify::last-child", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::last-child", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::last-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::last-child", ...args: any[]): void
    connect(sigName: "notify::layout-manager", callback: (...args: any[]) => void): number
    on(sigName: "notify::layout-manager", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::layout-manager", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::layout-manager", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::layout-manager", ...args: any[]): void
    connect(sigName: "notify::magnification-filter", callback: (...args: any[]) => void): number
    on(sigName: "notify::magnification-filter", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::magnification-filter", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::magnification-filter", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::magnification-filter", ...args: any[]): void
    connect(sigName: "notify::mapped", callback: (...args: any[]) => void): number
    on(sigName: "notify::mapped", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::mapped", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::mapped", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::mapped", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (...args: any[]) => void): number
    on(sigName: "notify::margin-bottom", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::margin-bottom", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::margin-bottom", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-left", callback: (...args: any[]) => void): number
    on(sigName: "notify::margin-left", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::margin-left", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::margin-left", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::margin-left", ...args: any[]): void
    connect(sigName: "notify::margin-right", callback: (...args: any[]) => void): number
    on(sigName: "notify::margin-right", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::margin-right", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::margin-right", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::margin-right", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (...args: any[]) => void): number
    on(sigName: "notify::margin-top", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::margin-top", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::margin-top", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::min-height", callback: (...args: any[]) => void): number
    on(sigName: "notify::min-height", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::min-height", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::min-height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::min-height", ...args: any[]): void
    connect(sigName: "notify::min-height-set", callback: (...args: any[]) => void): number
    on(sigName: "notify::min-height-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::min-height-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::min-height-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::min-height-set", ...args: any[]): void
    connect(sigName: "notify::min-width", callback: (...args: any[]) => void): number
    on(sigName: "notify::min-width", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::min-width", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::min-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::min-width", ...args: any[]): void
    connect(sigName: "notify::min-width-set", callback: (...args: any[]) => void): number
    on(sigName: "notify::min-width-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::min-width-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::min-width-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::min-width-set", ...args: any[]): void
    connect(sigName: "notify::minification-filter", callback: (...args: any[]) => void): number
    on(sigName: "notify::minification-filter", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::minification-filter", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::minification-filter", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::minification-filter", ...args: any[]): void
    connect(sigName: "notify::name", callback: (...args: any[]) => void): number
    on(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::natural-height", callback: (...args: any[]) => void): number
    on(sigName: "notify::natural-height", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::natural-height", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::natural-height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::natural-height", ...args: any[]): void
    connect(sigName: "notify::natural-height-set", callback: (...args: any[]) => void): number
    on(sigName: "notify::natural-height-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::natural-height-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::natural-height-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::natural-height-set", ...args: any[]): void
    connect(sigName: "notify::natural-width", callback: (...args: any[]) => void): number
    on(sigName: "notify::natural-width", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::natural-width", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::natural-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::natural-width", ...args: any[]): void
    connect(sigName: "notify::natural-width-set", callback: (...args: any[]) => void): number
    on(sigName: "notify::natural-width-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::natural-width-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::natural-width-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::natural-width-set", ...args: any[]): void
    connect(sigName: "notify::offscreen-redirect", callback: (...args: any[]) => void): number
    on(sigName: "notify::offscreen-redirect", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::offscreen-redirect", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::offscreen-redirect", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::offscreen-redirect", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (...args: any[]) => void): number
    on(sigName: "notify::opacity", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::opacity", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::opacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::pivot-point", callback: (...args: any[]) => void): number
    on(sigName: "notify::pivot-point", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::pivot-point", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::pivot-point", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::pivot-point", ...args: any[]): void
    connect(sigName: "notify::pivot-point-z", callback: (...args: any[]) => void): number
    on(sigName: "notify::pivot-point-z", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::pivot-point-z", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::pivot-point-z", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::pivot-point-z", ...args: any[]): void
    connect(sigName: "notify::position", callback: (...args: any[]) => void): number
    on(sigName: "notify::position", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::position", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::position", ...args: any[]): void
    connect(sigName: "notify::reactive", callback: (...args: any[]) => void): number
    on(sigName: "notify::reactive", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::reactive", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::reactive", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::reactive", ...args: any[]): void
    connect(sigName: "notify::realized", callback: (...args: any[]) => void): number
    on(sigName: "notify::realized", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::realized", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::realized", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::realized", ...args: any[]): void
    connect(sigName: "notify::request-mode", callback: (...args: any[]) => void): number
    on(sigName: "notify::request-mode", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::request-mode", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::request-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::request-mode", ...args: any[]): void
    connect(sigName: "notify::rotation-angle-x", callback: (...args: any[]) => void): number
    on(sigName: "notify::rotation-angle-x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::rotation-angle-x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::rotation-angle-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::rotation-angle-x", ...args: any[]): void
    connect(sigName: "notify::rotation-angle-y", callback: (...args: any[]) => void): number
    on(sigName: "notify::rotation-angle-y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::rotation-angle-y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::rotation-angle-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::rotation-angle-y", ...args: any[]): void
    connect(sigName: "notify::rotation-angle-z", callback: (...args: any[]) => void): number
    on(sigName: "notify::rotation-angle-z", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::rotation-angle-z", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::rotation-angle-z", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::rotation-angle-z", ...args: any[]): void
    connect(sigName: "notify::rotation-center-x", callback: (...args: any[]) => void): number
    on(sigName: "notify::rotation-center-x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::rotation-center-x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::rotation-center-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::rotation-center-x", ...args: any[]): void
    connect(sigName: "notify::rotation-center-y", callback: (...args: any[]) => void): number
    on(sigName: "notify::rotation-center-y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::rotation-center-y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::rotation-center-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::rotation-center-y", ...args: any[]): void
    connect(sigName: "notify::rotation-center-z", callback: (...args: any[]) => void): number
    on(sigName: "notify::rotation-center-z", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::rotation-center-z", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::rotation-center-z", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::rotation-center-z", ...args: any[]): void
    connect(sigName: "notify::rotation-center-z-gravity", callback: (...args: any[]) => void): number
    on(sigName: "notify::rotation-center-z-gravity", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::rotation-center-z-gravity", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::rotation-center-z-gravity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::rotation-center-z-gravity", ...args: any[]): void
    connect(sigName: "notify::scale-center-x", callback: (...args: any[]) => void): number
    on(sigName: "notify::scale-center-x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::scale-center-x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::scale-center-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::scale-center-x", ...args: any[]): void
    connect(sigName: "notify::scale-center-y", callback: (...args: any[]) => void): number
    on(sigName: "notify::scale-center-y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::scale-center-y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::scale-center-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::scale-center-y", ...args: any[]): void
    connect(sigName: "notify::scale-gravity", callback: (...args: any[]) => void): number
    on(sigName: "notify::scale-gravity", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::scale-gravity", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::scale-gravity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::scale-gravity", ...args: any[]): void
    connect(sigName: "notify::scale-x", callback: (...args: any[]) => void): number
    on(sigName: "notify::scale-x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::scale-x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::scale-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::scale-x", ...args: any[]): void
    connect(sigName: "notify::scale-y", callback: (...args: any[]) => void): number
    on(sigName: "notify::scale-y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::scale-y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::scale-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::scale-y", ...args: any[]): void
    connect(sigName: "notify::scale-z", callback: (...args: any[]) => void): number
    on(sigName: "notify::scale-z", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::scale-z", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::scale-z", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::scale-z", ...args: any[]): void
    connect(sigName: "notify::show-on-set-parent", callback: (...args: any[]) => void): number
    on(sigName: "notify::show-on-set-parent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::show-on-set-parent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::show-on-set-parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::show-on-set-parent", ...args: any[]): void
    connect(sigName: "notify::size", callback: (...args: any[]) => void): number
    on(sigName: "notify::size", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::size", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::text-direction", callback: (...args: any[]) => void): number
    on(sigName: "notify::text-direction", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::text-direction", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::text-direction", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::text-direction", ...args: any[]): void
    connect(sigName: "notify::transform", callback: (...args: any[]) => void): number
    on(sigName: "notify::transform", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::transform", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::transform", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::transform", ...args: any[]): void
    connect(sigName: "notify::transform-set", callback: (...args: any[]) => void): number
    on(sigName: "notify::transform-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::transform-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::transform-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::transform-set", ...args: any[]): void
    connect(sigName: "notify::translation-x", callback: (...args: any[]) => void): number
    on(sigName: "notify::translation-x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::translation-x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::translation-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::translation-x", ...args: any[]): void
    connect(sigName: "notify::translation-y", callback: (...args: any[]) => void): number
    on(sigName: "notify::translation-y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::translation-y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::translation-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::translation-y", ...args: any[]): void
    connect(sigName: "notify::translation-z", callback: (...args: any[]) => void): number
    on(sigName: "notify::translation-z", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::translation-z", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::translation-z", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::translation-z", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (...args: any[]) => void): number
    on(sigName: "notify::visible", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::visible", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width", callback: (...args: any[]) => void): number
    on(sigName: "notify::width", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::width", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::width", ...args: any[]): void
    connect(sigName: "notify::x", callback: (...args: any[]) => void): number
    on(sigName: "notify::x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::x", ...args: any[]): void
    connect(sigName: "notify::x-align", callback: (...args: any[]) => void): number
    on(sigName: "notify::x-align", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::x-align", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::x-align", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::x-align", ...args: any[]): void
    connect(sigName: "notify::x-expand", callback: (...args: any[]) => void): number
    on(sigName: "notify::x-expand", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::x-expand", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::x-expand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::x-expand", ...args: any[]): void
    connect(sigName: "notify::y", callback: (...args: any[]) => void): number
    on(sigName: "notify::y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::y", ...args: any[]): void
    connect(sigName: "notify::y-align", callback: (...args: any[]) => void): number
    on(sigName: "notify::y-align", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::y-align", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::y-align", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::y-align", ...args: any[]): void
    connect(sigName: "notify::y-expand", callback: (...args: any[]) => void): number
    on(sigName: "notify::y-expand", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::y-expand", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::y-expand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::y-expand", ...args: any[]): void
    connect(sigName: "notify::z-position", callback: (...args: any[]) => void): number
    on(sigName: "notify::z-position", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::z-position", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::z-position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::z-position", ...args: any[]): void
    connect(sigName: "notify::audio-volume", callback: (...args: any[]) => void): number
    on(sigName: "notify::audio-volume", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::audio-volume", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::audio-volume", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::audio-volume", ...args: any[]): void
    connect(sigName: "notify::buffer-fill", callback: (...args: any[]) => void): number
    on(sigName: "notify::buffer-fill", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::buffer-fill", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::buffer-fill", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::buffer-fill", ...args: any[]): void
    connect(sigName: "notify::can-seek", callback: (...args: any[]) => void): number
    on(sigName: "notify::can-seek", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::can-seek", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::can-seek", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::can-seek", ...args: any[]): void
    connect(sigName: "notify::duration", callback: (...args: any[]) => void): number
    on(sigName: "notify::duration", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::duration", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::duration", ...args: any[]): void
    connect(sigName: "notify::playing", callback: (...args: any[]) => void): number
    on(sigName: "notify::playing", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::playing", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::playing", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::playing", ...args: any[]): void
    connect(sigName: "notify::progress", callback: (...args: any[]) => void): number
    on(sigName: "notify::progress", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::progress", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::progress", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::progress", ...args: any[]): void
    connect(sigName: "notify::subtitle-font-name", callback: (...args: any[]) => void): number
    on(sigName: "notify::subtitle-font-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::subtitle-font-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::subtitle-font-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::subtitle-font-name", ...args: any[]): void
    connect(sigName: "notify::subtitle-uri", callback: (...args: any[]) => void): number
    on(sigName: "notify::subtitle-uri", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::subtitle-uri", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::subtitle-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::subtitle-uri", ...args: any[]): void
    connect(sigName: "notify::uri", callback: (...args: any[]) => void): number
    on(sigName: "notify::uri", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::uri", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::uri", ...args: any[]): void
    connect(sigName: "notify::audio-stream", callback: (...args: any[]) => void): number
    on(sigName: "notify::audio-stream", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::audio-stream", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::audio-stream", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::audio-stream", ...args: any[]): void
    connect(sigName: "notify::audio-streams", callback: (...args: any[]) => void): number
    on(sigName: "notify::audio-streams", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::audio-streams", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::audio-streams", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::audio-streams", ...args: any[]): void
    connect(sigName: "notify::idle", callback: (...args: any[]) => void): number
    on(sigName: "notify::idle", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::idle", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::idle", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::idle", ...args: any[]): void
    connect(sigName: "notify::in-seek", callback: (...args: any[]) => void): number
    on(sigName: "notify::in-seek", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::in-seek", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::in-seek", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::in-seek", ...args: any[]): void
    connect(sigName: "notify::seek-flags", callback: (...args: any[]) => void): number
    on(sigName: "notify::seek-flags", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::seek-flags", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::seek-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::seek-flags", ...args: any[]): void
    connect(sigName: "notify::subtitle-track", callback: (...args: any[]) => void): number
    on(sigName: "notify::subtitle-track", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::subtitle-track", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::subtitle-track", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::subtitle-track", ...args: any[]): void
    connect(sigName: "notify::subtitle-tracks", callback: (...args: any[]) => void): number
    on(sigName: "notify::subtitle-tracks", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::subtitle-tracks", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::subtitle-tracks", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::subtitle-tracks", ...args: any[]): void
    connect(sigName: "notify::user-agent", callback: (...args: any[]) => void): number
    on(sigName: "notify::user-agent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::user-agent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::user-agent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::user-agent", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

/**
 * Subclass of #ClutterTexture that displays videos using GStreamer.
 * 
 * The #ClutterGstVideoTexture structure contains only private data and
 * should not be accessed directly.
 * @class 
 */
class VideoTexture extends Clutter.Texture {

    // Own properties of ClutterGst-1.0.ClutterGst.VideoTexture

    static name: string
    static $gtype: GObject.GType<VideoTexture>

    // Constructors of ClutterGst-1.0.ClutterGst.VideoTexture

    constructor(config?: VideoTexture_ConstructProps) 
    /**
     * Creates a video texture.
     * 
     * <note>This function has to be called from Clutter's main thread. While
     * GStreamer will spawn threads to do its work, we want all the GL calls to
     * happen in the same thread. Clutter-gst knows which thread it is by
     * assuming this constructor is called from the Clutter thread.</note>
     * @constructor 
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
     */
    static new(): VideoTexture
    _init(config?: VideoTexture_ConstructProps): void
}

interface PlayerIface {

    // Own fields of ClutterGst-1.0.ClutterGst.PlayerIface

    getPipeline: (player: Player) => Gst.Element
    getUserAgent: (player: Player) => string
    setUserAgent: (player: Player, userAgent: string) => void
    getSeekFlags: (player: Player) => SeekFlags
    setSeekFlags: (player: Player, flags: SeekFlags) => void
    getBufferingMode: (player: Player) => BufferingMode
    setBufferingMode: (player: Player, mode: BufferingMode) => void
    getAudioStreams: (player: Player) => string[]
    getAudioStream: (player: Player) => number
    setAudioStream: (player: Player, index: number) => void
    getSubtitleTracks: (player: Player) => string[]
    getSubtitleTrack: (player: Player) => number
    setSubtitleTrack: (player: Player, index: number) => void
    getIdle: (player: Player) => boolean
    getInSeek: (player: Player) => boolean
    downloadBuffering: (player: Player, start: number, stop: number) => void
}

/**
 * Interface vtable for #ClutterGstPlayer implementations
 * @record 
 */
abstract class PlayerIface {

    // Own properties of ClutterGst-1.0.ClutterGst.PlayerIface

    static name: string
}

interface PlayerIfacePrivate {
}

class PlayerIfacePrivate {

    // Own properties of ClutterGst-1.0.ClutterGst.PlayerIfacePrivate

    static name: string
}

interface VideoSinkClass {
}

/**
 * Base class for #ClutterGstVideoSink.
 * @record 
 */
abstract class VideoSinkClass {

    // Own properties of ClutterGst-1.0.ClutterGst.VideoSinkClass

    static name: string
}

interface VideoSinkPrivate {
}

class VideoSinkPrivate {

    // Own properties of ClutterGst-1.0.ClutterGst.VideoSinkPrivate

    static name: string
}

interface VideoTextureClass {
}

/**
 * Base class for #ClutterGstVideoTexture.
 * @record 
 */
abstract class VideoTextureClass {

    // Own properties of ClutterGst-1.0.ClutterGst.VideoTextureClass

    static name: string
}

interface VideoTexturePrivate {
}

class VideoTexturePrivate {

    // Own properties of ClutterGst-1.0.ClutterGst.VideoTexturePrivate

    static name: string
}

}
export default ClutterGst;