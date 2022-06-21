// @ts-nocheck

/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * ClutterGst-3.0
 */

import type * as Gjs from './Gjs';
import type GstVideo from './GstVideo-1.0';
import type GstBase from './GstBase-1.0';
import type Gst from './Gst-1.0';
import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';
import type GModule from './GModule-2.0';
import type GstPbutils from './GstPbutils-1.0';
import type GstAudio from './GstAudio-1.0';
import type GdkPixbuf from './GdkPixbuf-2.0';
import type Gio from './Gio-2.0';
import type Cogl from './Cogl-1.0';
import type GL from './GL-1.0';
import type Clutter from './Clutter-1.0';
import type cairo from './cairo-1.0';
import type Json from './Json-1.0';
import type CoglPango from './CoglPango-1.0';
import type PangoCairo from './PangoCairo-1.0';
import type Pango from './Pango-1.0';
import type HarfBuzz from './HarfBuzz-0.0';
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
 * Flags that can be given to clutter_gst_player_set_seek_flags().
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
 * ClutterGst full version (e.g. "1.2.3")
 */
const VERSION: number
/**
 * ClutterGst full version, encoded as an hexadecimal value.
 */
const VERSION_HEX: number
/**
 * ClutterGst full version, encoded as a string.
 */
const VERSION_S: string
/**
 * Creates a new #ClutterGstVideoSink initialized with Clutter's Cogl context.
 */
function create_video_sink(): Gst.Element
/**
 * Utility function to initialize both Clutter and GStreamer.
 * 
 * This function should be called before calling any other GLib functions. If
 * this is not an option, your program must initialise the GLib thread system
 * using g_thread_init() before any other GLib functions are called.
 * @param argv A pointer to an array
 */
function init(argv: string[] | null): [ /* returnType */ Clutter.InitError, /* argv */ string[] | null ]
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
 * @param translation_domain a translation domain to use for translating    the <option>--help</option> output for the options in `entries`    with gettext(), or %NULL
 */
function init_with_args(argv: string[] | null, parameter_string: string, entries: GLib.OptionEntry, translation_domain: string): [ /* returnType */ Clutter.InitError, /* argv */ string[] | null ]
interface Player_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of ClutterGst-3.0.ClutterGst.Player

    /**
     * The volume of the audio, as a normalized value between
     * 0.0 and 1.0.
     */
    audio_volume?: number | null
    /**
     * Whether the #ClutterGstPlayer actor is playing.
     */
    playing?: boolean | null
}

/**
 * Signal callback interface for `eos`
 */
interface Player_EosSignalCallback {
    ($obj: Player): void
}

/**
 * Signal callback interface for `error`
 */
interface Player_ErrorSignalCallback {
    ($obj: Player, error: GLib.Error): void
}

/**
 * Signal callback interface for `new-frame`
 */
interface Player_NewFrameSignalCallback {
    ($obj: Player, frame: Frame): void
}

/**
 * Signal callback interface for `ready`
 */
interface Player_ReadySignalCallback {
    ($obj: Player): void
}

/**
 * Signal callback interface for `size-change`
 */
interface Player_SizeChangeSignalCallback {
    ($obj: Player, width: number, height: number): void
}

interface Player {

    // Own properties of ClutterGst-3.0.ClutterGst.Player

    /**
     * The volume of the audio, as a normalized value between
     * 0.0 and 1.0.
     */
    audio_volume: number
    /**
     * Whether the #ClutterGstPlayer is in idle mode.
     */
    readonly idle: boolean
    /**
     * Whether the #ClutterGstPlayer actor is playing.
     */
    playing: boolean

    // Owm methods of ClutterGst-3.0.ClutterGst.Player

    /**
     * Retrieves the playback volume of `self`.
     */
    get_audio_volume(): number
    /**
     * Retrieves the #ClutterGstFrame of the last frame produced by `self`.
     */
    get_frame(): Frame
    /**
     * Get the idle state of the pipeline.
     */
    get_idle(): boolean
    /**
     * Retrieves the #GstPipeline used by the `self,` for direct use with
     * GStreamer API.
     */
    get_pipeline(): Gst.Element
    /**
     * Retrieves the playing status of `self`.
     */
    get_playing(): boolean
    /**
     * Retrieves the #ClutterGstVideoSink used by the `self`.
     */
    get_video_sink(): VideoSink
    /**
     * Sets the playback volume of `self` to `volume`.
     * @param volume the volume as a double between 0.0 and 1.0
     */
    set_audio_volume(volume: number): void
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
    set_playing(playing: boolean): void

    // Own virtual methods of ClutterGst-3.0.ClutterGst.Player

    vfunc_eos(): void
    vfunc_error(error: GLib.Error): void
    /**
     * Retrieves the playback volume of `self`.
     * @virtual 
     */
    vfunc_get_audio_volume(): number
    /**
     * Retrieves the #ClutterGstFrame of the last frame produced by `self`.
     * @virtual 
     */
    vfunc_get_frame(): Frame
    /**
     * Get the idle state of the pipeline.
     * @virtual 
     */
    vfunc_get_idle(): boolean
    /**
     * Retrieves the #GstPipeline used by the `self,` for direct use with
     * GStreamer API.
     * @virtual 
     */
    vfunc_get_pipeline(): Gst.Element
    /**
     * Retrieves the playing status of `self`.
     * @virtual 
     */
    vfunc_get_playing(): boolean
    /**
     * Retrieves the #ClutterGstVideoSink used by the `self`.
     * @virtual 
     */
    vfunc_get_video_sink(): VideoSink
    vfunc_new_frame(frame: Frame): void
    vfunc_ready(): void
    /**
     * Sets the playback volume of `self` to `volume`.
     * @virtual 
     * @param volume the volume as a double between 0.0 and 1.0
     */
    vfunc_set_audio_volume(volume: number): void
    /**
     * Starts or stops playing of `self`.
     * 
     * The implementation might be asynchronous, so the way to know whether
     * the actual playing state of the `self` is to use the #GObject::notify
     * signal on the #ClutterGstPlayer:playing property and then retrieve the
     * current state with clutter_gst_player_get_playing(). ClutterGstVideoActor
     * in clutter-gst is an example of such an asynchronous implementation.
     * @virtual 
     * @param playing %TRUE to start playing
     */
    vfunc_set_playing(playing: boolean): void
    vfunc_size_change(width: number, height: number): void

    // Own signals of ClutterGst-3.0.ClutterGst.Player

    connect(sigName: "eos", callback: Player_EosSignalCallback): number
    connect_after(sigName: "eos", callback: Player_EosSignalCallback): number
    emit(sigName: "eos", ...args: any[]): void
    connect(sigName: "error", callback: Player_ErrorSignalCallback): number
    connect_after(sigName: "error", callback: Player_ErrorSignalCallback): number
    emit(sigName: "error", error: GLib.Error, ...args: any[]): void
    connect(sigName: "new-frame", callback: Player_NewFrameSignalCallback): number
    connect_after(sigName: "new-frame", callback: Player_NewFrameSignalCallback): number
    emit(sigName: "new-frame", frame: Frame, ...args: any[]): void
    connect(sigName: "ready", callback: Player_ReadySignalCallback): number
    connect_after(sigName: "ready", callback: Player_ReadySignalCallback): number
    emit(sigName: "ready", ...args: any[]): void
    connect(sigName: "size-change", callback: Player_SizeChangeSignalCallback): number
    connect_after(sigName: "size-change", callback: Player_SizeChangeSignalCallback): number
    emit(sigName: "size-change", width: number, height: number, ...args: any[]): void

    // Class property signals of ClutterGst-3.0.ClutterGst.Player

    connect(sigName: "notify::audio-volume", callback: (($obj: Player, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::audio-volume", callback: (($obj: Player, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::audio-volume", ...args: any[]): void
    connect(sigName: "notify::idle", callback: (($obj: Player, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::idle", callback: (($obj: Player, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::idle", ...args: any[]): void
    connect(sigName: "notify::playing", callback: (($obj: Player, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::playing", callback: (($obj: Player, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::playing", ...args: any[]): void
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
class Player extends GObject.Object {

    // Own properties of ClutterGst-3.0.ClutterGst.Player

    static name: string
    static $gtype: GObject.GType<Player>

    // Constructors of ClutterGst-3.0.ClutterGst.Player

    constructor(config?: Player_ConstructProps) 
    _init(config?: Player_ConstructProps): void
}

interface Aspectratio_ConstructProps extends Clutter.Content_ConstructProps, Content_ConstructProps {

    // Own constructor properties of ClutterGst-3.0.ClutterGst.Aspectratio

    /**
     * Whether the content should fill its allocation with video rather
     * than adding borders.
     */
    fill_allocation?: boolean | null
    /**
     * Whether or not paint borders on the sides of the video
     */
    paint_borders?: boolean | null
}

interface Aspectratio extends Clutter.Content {

    // Own properties of ClutterGst-3.0.ClutterGst.Aspectratio

    /**
     * Whether the content should fill its allocation with video rather
     * than adding borders.
     */
    fill_allocation: boolean
    /**
     * Whether or not paint borders on the sides of the video
     */
    paint_borders: boolean

    // Class property signals of ClutterGst-3.0.ClutterGst.Aspectratio

    connect(sigName: "notify::fill-allocation", callback: (($obj: Aspectratio, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-allocation", callback: (($obj: Aspectratio, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::fill-allocation", ...args: any[]): void
    connect(sigName: "notify::paint-borders", callback: (($obj: Aspectratio, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::paint-borders", callback: (($obj: Aspectratio, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::paint-borders", ...args: any[]): void
    connect(sigName: "notify::frame", callback: (($obj: Aspectratio, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::frame", callback: (($obj: Aspectratio, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::frame", ...args: any[]): void
    connect(sigName: "notify::paint-frame", callback: (($obj: Aspectratio, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::paint-frame", callback: (($obj: Aspectratio, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::paint-frame", ...args: any[]): void
    connect(sigName: "notify::paint-overlays", callback: (($obj: Aspectratio, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::paint-overlays", callback: (($obj: Aspectratio, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::paint-overlays", ...args: any[]): void
    connect(sigName: "notify::player", callback: (($obj: Aspectratio, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::player", callback: (($obj: Aspectratio, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::player", ...args: any[]): void
    connect(sigName: "notify::sink", callback: (($obj: Aspectratio, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sink", callback: (($obj: Aspectratio, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sink", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * Implementation of #ClutterGstContent that displays video streams
 * with respects to their aspect ratio.
 * 
 * The #ClutterGstAspectratio structure contains only private data and
 * should not be accessed directly.
 * @class 
 */
class Aspectratio extends Content {

    // Own properties of ClutterGst-3.0.ClutterGst.Aspectratio

    static name: string
    static $gtype: GObject.GType<Aspectratio>

    // Constructors of ClutterGst-3.0.ClutterGst.Aspectratio

    constructor(config?: Aspectratio_ConstructProps) 
    _init(config?: Aspectratio_ConstructProps): void
    static new(): Clutter.Content
}

interface Camera_ConstructProps extends Player_ConstructProps, GObject.Object_ConstructProps {

    // Own constructor properties of ClutterGst-3.0.ClutterGst.Camera

    device?: CameraDevice | null
}

/**
 * Signal callback interface for `photo-saved`
 */
interface Camera_PhotoSavedSignalCallback {
    ($obj: Camera): void
}

/**
 * Signal callback interface for `photo-taken`
 */
interface Camera_PhotoTakenSignalCallback {
    ($obj: Camera, pixbuf: GdkPixbuf.Pixbuf): void
}

/**
 * Signal callback interface for `ready-for-capture`
 */
interface Camera_ReadyForCaptureSignalCallback {
    ($obj: Camera, ready: boolean): void
}

/**
 * Signal callback interface for `video-saved`
 */
interface Camera_VideoSavedSignalCallback {
    ($obj: Camera): void
}

interface Camera extends Player {

    // Own properties of ClutterGst-3.0.ClutterGst.Camera

    device: CameraDevice

    // Owm methods of ClutterGst-3.0.ClutterGst.Camera

    get_brightness(cur_value: number): boolean
    get_brightness_range(min_value: number, max_value: number, default_value: number): boolean
    /**
     * Retrieve the current selected camera device.
     */
    get_camera_device(): CameraDevice
    /**
     * Retrieve the current value for the color balance property `property,`
     * 
     * This method will return FALSE if `property` does not exist or color balance is not
     * supported on `self`.
     * See clutter_gst_camera_supports_color_balance().
     * @param property Property name
     * @param cur_value Pointer to store the current value of `property`
     */
    get_color_balance_property(property: string, cur_value: number): boolean
    /**
     * Retrieve the minimum, maximum and default values for the color balance property `property,`
     * 
     * This method will return FALSE if `property` does not exist or color balance is not
     * supported on `self`.
     * See clutter_gst_camera_supports_color_balance().
     * @param property Property name
     * @param min_value Pointer to store the minimum value of `property,` or %NULL
     * @param max_value Pointer to store the maximum value of `property,` or %NULL
     * @param default_value Pointer to store the default value of `property,` or %NULL
     */
    get_color_balance_property_range(property: string, min_value: number, max_value: number, default_value: number): boolean
    get_contrast(cur_value: number): boolean
    get_contrast_range(min_value: number, max_value: number, default_value: number): boolean
    /**
     * Retrieve the current filter being used.
     */
    get_filter(): Gst.Element
    /**
     * Retrieve the current gamma value.
     * 
     * This method will return FALSE if gamma correction is not
     * supported on `self`.
     * See clutter_gst_camera_supports_gamma_correction().
     * @param cur_value Pointer to store the current gamma value
     */
    get_gamma(cur_value: number): boolean
    /**
     * Retrieve the minimum, maximum and default gamma values.
     * 
     * This method will return FALSE if gamma correction is not
     * supported on `self`.
     * See clutter_gst_camera_supports_gamma_correction().
     * @param min_value Pointer to store the minimum gamma value, or %NULL
     * @param max_value Pointer to store the maximum gamma value, or %NULL
     * @param default_value Pointer to store the default gamma value, or %NULL
     */
    get_gamma_range(min_value: number, max_value: number, default_value: number): boolean
    get_hue(cur_value: number): boolean
    get_hue_range(min_value: number, max_value: number, default_value: number): boolean
    get_saturation(cur_value: number): boolean
    get_saturation_range(min_value: number, max_value: number, default_value: number): boolean
    /**
     * Check whether the `self` is ready for video/photo capture.
     */
    is_ready_for_capture(): boolean
    /**
     * Check whether the `self` is recording video.
     */
    is_recording_video(): boolean
    /**
     * Remove the current filter, if any.
     */
    remove_filter(): boolean
    set_brightness(value: number): boolean
    /**
     * Set the new active camera device.
     * @param device a #ClutterGstCameraDevice
     */
    set_camera_device(device: CameraDevice): boolean
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
     */
    set_color_balance_property(property: string, value: number): boolean
    set_contrast(value: number): boolean
    /**
     * Set the filter element to be used.
     * Filters can be used for effects, image processing, etc.
     * @param filter a #GstElement for the filter
     */
    set_filter(filter: Gst.Element): boolean
    /**
     * Set the gamma value.
     * Allowed values can be retrieved with
     * clutter_gst_camera_get_gamma_range().
     * 
     * This method will return FALSE if gamma correction is not
     * supported on `self`.
     * See clutter_gst_camera_supports_gamma_correction().
     * @param value The value to set
     */
    set_gamma(value: number): boolean
    set_hue(value: number): boolean
    /**
     * Set the encoding profile to be used for photo captures.
     * The default profile saves photos as JPEG images.
     * @param profile A #GstEncodingProfile to be used for photo captures.
     */
    set_photo_profile(profile: GstPbutils.EncodingProfile): void
    set_saturation(value: number): boolean
    /**
     * Set the encoding profile to be used for video recording.
     * The default profile saves videos as Ogg/Theora videos.
     * @param profile A #GstEncodingProfile to be used for video recording.
     */
    set_video_profile(profile: GstPbutils.EncodingProfile): void
    /**
     * Start a video recording with the `self` and save it to `filename`.
     * This method requires that `self` is playing and ready for capture.
     * 
     * The ::video-saved signal will be emitted when the video is saved.
     * @param filename the name of the video file to where the recording will be saved
     */
    start_video_recording(filename: string): boolean
    /**
     * Stop recording video on the `self`.
     */
    stop_video_recording(): void
    /**
     * Check whether the `self` supports color balance.
     */
    supports_color_balance(): boolean
    /**
     * Check whether the `self` supports gamma correction.
     */
    supports_gamma_correction(): boolean
    /**
     * Take a photo with the `self` and save it to `filename`.
     * This method requires that `self` is playing and ready for capture.
     * 
     * The ::photo-saved signal will be emitted when the video is saved.
     * @param filename the name of the file to where the photo will be saved
     */
    take_photo(filename: string): boolean
    /**
     * Take a photo with the `self` and emit it in the ::photo-taken signal as a
     * #GdkPixbuf.
     * This method requires that `self` is playing and ready for capture.
     */
    take_photo_pixbuf(): boolean

    // Own virtual methods of ClutterGst-3.0.ClutterGst.Camera

    vfunc_photo_saved(): void
    vfunc_photo_taken(pixbuf: GdkPixbuf.Pixbuf): void
    vfunc_ready_for_capture(ready: boolean): void
    vfunc_video_saved(): void

    // Own signals of ClutterGst-3.0.ClutterGst.Camera

    connect(sigName: "photo-saved", callback: Camera_PhotoSavedSignalCallback): number
    connect_after(sigName: "photo-saved", callback: Camera_PhotoSavedSignalCallback): number
    emit(sigName: "photo-saved", ...args: any[]): void
    connect(sigName: "photo-taken", callback: Camera_PhotoTakenSignalCallback): number
    connect_after(sigName: "photo-taken", callback: Camera_PhotoTakenSignalCallback): number
    emit(sigName: "photo-taken", pixbuf: GdkPixbuf.Pixbuf, ...args: any[]): void
    connect(sigName: "ready-for-capture", callback: Camera_ReadyForCaptureSignalCallback): number
    connect_after(sigName: "ready-for-capture", callback: Camera_ReadyForCaptureSignalCallback): number
    emit(sigName: "ready-for-capture", ready: boolean, ...args: any[]): void
    connect(sigName: "video-saved", callback: Camera_VideoSavedSignalCallback): number
    connect_after(sigName: "video-saved", callback: Camera_VideoSavedSignalCallback): number
    emit(sigName: "video-saved", ...args: any[]): void

    // Class property signals of ClutterGst-3.0.ClutterGst.Camera

    connect(sigName: "notify::device", callback: (($obj: Camera, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::device", callback: (($obj: Camera, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::device", ...args: any[]): void
    connect(sigName: "notify::audio-volume", callback: (($obj: Camera, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::audio-volume", callback: (($obj: Camera, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::audio-volume", ...args: any[]): void
    connect(sigName: "notify::idle", callback: (($obj: Camera, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::idle", callback: (($obj: Camera, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::idle", ...args: any[]): void
    connect(sigName: "notify::playing", callback: (($obj: Camera, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::playing", callback: (($obj: Camera, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::playing", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * Implementation of #ClutterGstPlayer that displays camera streams
 * using GStreamer.
 * 
 * The #ClutterGstCamera structure contains only private data and
 * should not be accessed directly.
 * @class 
 */
class Camera extends GObject.Object {

    // Own properties of ClutterGst-3.0.ClutterGst.Camera

    static name: string
    static $gtype: GObject.GType<Camera>

    // Constructors of ClutterGst-3.0.ClutterGst.Camera

    constructor(config?: Camera_ConstructProps) 
    /**
     * Create a camera actor.
     * 
     * <note>This function has to be called from Clutter's main thread. While
     * GStreamer will spawn threads to do its work, we want all the GL calls to
     * happen in the same thread. Clutter-gst knows which thread it is by
     * assuming this constructor is called from the Clutter thread.</note>
     * @constructor 
     */
    constructor() 
    /**
     * Create a camera actor.
     * 
     * <note>This function has to be called from Clutter's main thread. While
     * GStreamer will spawn threads to do its work, we want all the GL calls to
     * happen in the same thread. Clutter-gst knows which thread it is by
     * assuming this constructor is called from the Clutter thread.</note>
     * @constructor 
     */
    static new(): Camera
    _init(config?: Camera_ConstructProps): void
}

interface CameraDevice_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of ClutterGst-3.0.ClutterGst.CameraDevice

    /**
     * The GstElementFactory for this device.
     */
    element_factory?: Gst.ElementFactory | null
    /**
     * The device name.
     */
    name?: string | null
    /**
     * The device node.
     */
    node?: string | null
}

/**
 * Signal callback interface for `capture-resolution-changed`
 */
interface CameraDevice_CaptureResolutionChangedSignalCallback {
    ($obj: CameraDevice, width: number, height: number): void
}

interface CameraDevice {

    // Own properties of ClutterGst-3.0.ClutterGst.CameraDevice

    /**
     * The GstElementFactory for this device.
     */
    readonly element_factory: Gst.ElementFactory
    /**
     * The device name.
     */
    readonly name: string
    /**
     * The device node.
     */
    readonly node: string

    // Owm methods of ClutterGst-3.0.ClutterGst.CameraDevice

    /**
     * Retrieve the current capture resolution being used by `device`.
     */
    get_capture_resolution(): [ /* width */ number, /* height */ number ]
    /**
     * Retrieve the name of the `device`.
     */
    get_name(): string
    /**
     * Retrieve the node (location) of the `device`.
     */
    get_node(): string
    /**
     * Retrieve the supported resolutions of the `device`.
     */
    get_supported_resolutions(): VideoResolution[]
    /**
     * Set the capture resolution to be used by `device`.
     * @param width The new capture resolution width to use
     * @param height The new capture resolution height to use
     */
    set_capture_resolution(width: number, height: number): void

    // Own virtual methods of ClutterGst-3.0.ClutterGst.CameraDevice

    vfunc_capture_resolution_changed(width: number, height: number): void

    // Own signals of ClutterGst-3.0.ClutterGst.CameraDevice

    connect(sigName: "capture-resolution-changed", callback: CameraDevice_CaptureResolutionChangedSignalCallback): number
    connect_after(sigName: "capture-resolution-changed", callback: CameraDevice_CaptureResolutionChangedSignalCallback): number
    emit(sigName: "capture-resolution-changed", width: number, height: number, ...args: any[]): void

    // Class property signals of ClutterGst-3.0.ClutterGst.CameraDevice

    connect(sigName: "notify::element-factory", callback: (($obj: CameraDevice, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::element-factory", callback: (($obj: CameraDevice, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::element-factory", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: CameraDevice, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: CameraDevice, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::node", callback: (($obj: CameraDevice, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node", callback: (($obj: CameraDevice, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::node", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * GObject representing a camera device using GStreamer.
 * 
 * The #ClutterGstCameraDevice structure contains only private data and
 * should not be accessed directly.
 * @class 
 */
class CameraDevice extends GObject.Object {

    // Own properties of ClutterGst-3.0.ClutterGst.CameraDevice

    static name: string
    static $gtype: GObject.GType<CameraDevice>

    // Constructors of ClutterGst-3.0.ClutterGst.CameraDevice

    constructor(config?: CameraDevice_ConstructProps) 
    _init(config?: CameraDevice_ConstructProps): void
}

interface CameraManager_ConstructProps extends GObject.Object_ConstructProps {
}

/**
 * Signal callback interface for `camera-added`
 */
interface CameraManager_CameraAddedSignalCallback {
    ($obj: CameraManager, camera_device: CameraDevice): void
}

/**
 * Signal callback interface for `camera-removed`
 */
interface CameraManager_CameraRemovedSignalCallback {
    ($obj: CameraManager, camera_device: CameraDevice): void
}

interface CameraManager {

    // Owm methods of ClutterGst-3.0.ClutterGst.CameraManager

    /**
     * Retrieve an array of supported camera devices.
     */
    get_camera_devices(): CameraDevice[]

    // Own signals of ClutterGst-3.0.ClutterGst.CameraManager

    connect(sigName: "camera-added", callback: CameraManager_CameraAddedSignalCallback): number
    connect_after(sigName: "camera-added", callback: CameraManager_CameraAddedSignalCallback): number
    emit(sigName: "camera-added", camera_device: CameraDevice, ...args: any[]): void
    connect(sigName: "camera-removed", callback: CameraManager_CameraRemovedSignalCallback): number
    connect_after(sigName: "camera-removed", callback: CameraManager_CameraRemovedSignalCallback): number
    emit(sigName: "camera-removed", camera_device: CameraDevice, ...args: any[]): void

    // Class property signals of ClutterGst-3.0.ClutterGst.CameraManager

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * An object to list available cameras on the system.
 * 
 * The #ClutterGstCameraManager structure contains only private data and
 * should not be accessed directly.
 * @class 
 */
class CameraManager extends GObject.Object {

    // Own properties of ClutterGst-3.0.ClutterGst.CameraManager

    static name: string
    static $gtype: GObject.GType<CameraManager>

    // Constructors of ClutterGst-3.0.ClutterGst.CameraManager

    constructor(config?: CameraManager_ConstructProps) 
    _init(config?: CameraManager_ConstructProps): void
    /**
     * Get the camera manager.
     * 
     * <note>This function has to be called from Clutter's main
     * thread.</note>
     */
    static get_default(): CameraManager
}

interface Content_ConstructProps extends Clutter.Content_ConstructProps, GObject.Object_ConstructProps {

    // Own constructor properties of ClutterGst-3.0.ClutterGst.Content

    frame?: Frame | null
    paint_frame?: boolean | null
    paint_overlays?: boolean | null
    player?: GObject.Object | null
    sink?: VideoSink | null
}

/**
 * Signal callback interface for `size-change`
 */
interface Content_SizeChangeSignalCallback {
    ($obj: Content, width: number, height: number): void
}

interface Content extends Clutter.Content {

    // Own properties of ClutterGst-3.0.ClutterGst.Content

    frame: Frame
    paint_frame: boolean
    paint_overlays: boolean
    player: GObject.Object
    sink: VideoSink

    // Owm methods of ClutterGst-3.0.ClutterGst.Content

    get_frame(): Frame
    get_overlays(): Overlays
    get_player(): Player
    get_sink(): VideoSink
    /**
     * Set the current frame.
     * @param frame A #ClutterGstFrame
     */
    set_frame(frame: Frame): void
    set_player(player: Player): void
    set_sink(sink: VideoSink): void

    // Own virtual methods of ClutterGst-3.0.ClutterGst.Content

    vfunc_has_painting_content(): boolean

    // Own signals of ClutterGst-3.0.ClutterGst.Content

    connect(sigName: "size-change", callback: Content_SizeChangeSignalCallback): number
    connect_after(sigName: "size-change", callback: Content_SizeChangeSignalCallback): number
    emit(sigName: "size-change", width: number, height: number, ...args: any[]): void

    // Class property signals of ClutterGst-3.0.ClutterGst.Content

    connect(sigName: "notify::frame", callback: (($obj: Content, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::frame", callback: (($obj: Content, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::frame", ...args: any[]): void
    connect(sigName: "notify::paint-frame", callback: (($obj: Content, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::paint-frame", callback: (($obj: Content, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::paint-frame", ...args: any[]): void
    connect(sigName: "notify::paint-overlays", callback: (($obj: Content, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::paint-overlays", callback: (($obj: Content, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::paint-overlays", ...args: any[]): void
    connect(sigName: "notify::player", callback: (($obj: Content, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::player", callback: (($obj: Content, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::player", ...args: any[]): void
    connect(sigName: "notify::sink", callback: (($obj: Content, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sink", callback: (($obj: Content, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sink", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * The #ClutterGstContent structure contains only private data
 * and should be accessed using the provided API
 * @class 
 */
class Content extends GObject.Object {

    // Own properties of ClutterGst-3.0.ClutterGst.Content

    static name: string
    static $gtype: GObject.GType<Content>

    // Constructors of ClutterGst-3.0.ClutterGst.Content

    constructor(config?: Content_ConstructProps) 
    _init(config?: Content_ConstructProps): void
    static new(): Clutter.Content
    static new_with_sink(sink: VideoSink): Clutter.Content
}

interface Crop_ConstructProps extends Clutter.Content_ConstructProps, Content_ConstructProps {

    // Own constructor properties of ClutterGst-3.0.ClutterGst.Crop

    /**
     * Whether to cull the backface of the actor
     */
    cull_backface?: boolean | null
    /**
     * Input region in the video frame (all values between 0 and 1).
     */
    input_region?: Box | null
    /**
     * Output region in the actor's allocation (all values between 0 and 1).
     */
    output_region?: Box | null
    /**
     * Whether or not paint borders on the sides of the video
     */
    paint_borders?: boolean | null
}

interface Crop extends Clutter.Content {

    // Own properties of ClutterGst-3.0.ClutterGst.Crop

    /**
     * Whether to cull the backface of the actor
     */
    cull_backface: boolean
    /**
     * Input region in the video frame (all values between 0 and 1).
     */
    input_region: Box
    /**
     * Output region in the actor's allocation (all values between 0 and 1).
     */
    output_region: Box
    /**
     * Whether or not paint borders on the sides of the video
     */
    paint_borders: boolean

    // Class property signals of ClutterGst-3.0.ClutterGst.Crop

    connect(sigName: "notify::cull-backface", callback: (($obj: Crop, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cull-backface", callback: (($obj: Crop, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::cull-backface", ...args: any[]): void
    connect(sigName: "notify::input-region", callback: (($obj: Crop, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::input-region", callback: (($obj: Crop, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::input-region", ...args: any[]): void
    connect(sigName: "notify::output-region", callback: (($obj: Crop, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::output-region", callback: (($obj: Crop, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::output-region", ...args: any[]): void
    connect(sigName: "notify::paint-borders", callback: (($obj: Crop, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::paint-borders", callback: (($obj: Crop, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::paint-borders", ...args: any[]): void
    connect(sigName: "notify::frame", callback: (($obj: Crop, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::frame", callback: (($obj: Crop, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::frame", ...args: any[]): void
    connect(sigName: "notify::paint-frame", callback: (($obj: Crop, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::paint-frame", callback: (($obj: Crop, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::paint-frame", ...args: any[]): void
    connect(sigName: "notify::paint-overlays", callback: (($obj: Crop, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::paint-overlays", callback: (($obj: Crop, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::paint-overlays", ...args: any[]): void
    connect(sigName: "notify::player", callback: (($obj: Crop, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::player", callback: (($obj: Crop, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::player", ...args: any[]): void
    connect(sigName: "notify::sink", callback: (($obj: Crop, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sink", callback: (($obj: Crop, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sink", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * Implementation of #ClutterGstContent that displays a sub region of
 * video streams.
 * 
 * The #ClutterGstCrop structure contains only private data and
 * should not be accessed directly.
 * @class 
 */
class Crop extends Content {

    // Own properties of ClutterGst-3.0.ClutterGst.Crop

    static name: string
    static $gtype: GObject.GType<Crop>

    // Constructors of ClutterGst-3.0.ClutterGst.Crop

    constructor(config?: Crop_ConstructProps) 
    constructor() 
    // TODO fix conflict: static new(): Crop
    _init(config?: Crop_ConstructProps): void
}

interface Playback_ConstructProps extends Player_ConstructProps, GObject.Object_ConstructProps {

    // Own constructor properties of ClutterGst-3.0.ClutterGst.Playback

    /**
     * Index of the current audio stream.
     */
    audio_stream?: number | null
    /**
     * The current progress of the playback, as a normalized
     * value between 0.0 and 1.0.
     */
    progress?: number | null
    /**
     * Flags to use when seeking.
     */
    seek_flags?: SeekFlags | null
    /**
     * The font used to display subtitles. The font description has to
     * follow the same grammar as the one recognized by
     * pango_font_description_from_string().
     */
    subtitle_font_name?: string | null
    /**
     * Current subtitle track being displayed.
     */
    subtitle_track?: number | null
    /**
     * The location of a subtitle file, expressed as a valid URI.
     */
    subtitle_uri?: string | null
    /**
     * The location of a media file, expressed as a valid URI.
     */
    uri?: string | null
    /**
     * The User Agent used by #ClutterGstPlayback with network protocols.
     */
    user_agent?: string | null
}

/**
 * Signal callback interface for `should-buffer`
 */
interface Playback_ShouldBufferSignalCallback {
    ($obj: Playback, query: Gst.Query): boolean
}

interface Playback extends Player {

    // Own properties of ClutterGst-3.0.ClutterGst.Playback

    /**
     * Index of the current audio stream.
     */
    audio_stream: number
    /**
     * List of audio streams available on the current media.
     */
    readonly audio_streams: object
    /**
     * The fill level of the buffer for the current stream,
     * as a value between 0.0 and 1.0.
     */
    readonly buffer_fill: number
    /**
     * Whether the current stream is seekable.
     */
    readonly can_seek: boolean
    /**
     * The duration of the current stream, in seconds
     */
    readonly duration: number
    /**
     * Whether or not the stream is being seeked.
     */
    readonly in_seek: boolean
    /**
     * The current progress of the playback, as a normalized
     * value between 0.0 and 1.0.
     */
    progress: number
    /**
     * Flags to use when seeking.
     */
    seek_flags: SeekFlags
    /**
     * The font used to display subtitles. The font description has to
     * follow the same grammar as the one recognized by
     * pango_font_description_from_string().
     */
    subtitle_font_name: string
    /**
     * Current subtitle track being displayed.
     */
    subtitle_track: number
    /**
     * List of subtitle tracks available.
     */
    readonly subtitle_tracks: object
    /**
     * The location of a subtitle file, expressed as a valid URI.
     */
    subtitle_uri: string
    /**
     * The location of a media file, expressed as a valid URI.
     */
    uri: string
    /**
     * The User Agent used by #ClutterGstPlayback with network protocols.
     */
    user_agent: string

    // Own fields of ClutterGst-3.0.ClutterGst.Playback

    parent: GObject.Object
    priv: PlaybackPrivate

    // Owm methods of ClutterGst-3.0.ClutterGst.Playback

    /**
     * Get the current audio stream. The number returned in the index of the
     * audio stream playing in the list returned by
     * clutter_gst_playback_get_audio_streams().
     */
    get_audio_stream(): number
    /**
     * Get the list of audio streams of the current media.
     */
    get_audio_streams(): string[]
    /**
     * Retrieves the buffer duration when buffering network streams.
     */
    get_buffer_duration(): number
    /**
     * Retrieves the amount of the stream that is buffered.
     */
    get_buffer_fill(): number
    /**
     * Retrieves the buffer size when buffering network streams.
     */
    get_buffer_size(): number
    get_buffering_mode(): BufferingMode
    /**
     * Retrieves the duration of the media stream that `self` represents.
     */
    get_duration(): number
    /**
     * Whether the player is seeking.
     */
    get_in_seek(): boolean
    /**
     * Retrieves the position in the media stream that `self` represents.
     */
    get_position(): number
    /**
     * Retrieves the playback progress of `self`.
     */
    get_progress(): number
    /**
     * Get the current value of the seek-flags property.
     */
    get_seek_flags(): SeekFlags
    /**
     * Retrieves the font name currently used.
     */
    get_subtitle_font_name(): string
    /**
     * Get the current subtitles track. The number returned is the index of the
     * subtiles track in the list returned by
     * clutter_gst_playback_get_subtitle_tracks().
     */
    get_subtitle_track(): number
    /**
     * Get the list of subtitles tracks of the current media.
     */
    get_subtitle_tracks(): string[]
    /**
     * Retrieves the URI of the subtitle file in use.
     */
    get_subtitle_uri(): string
    /**
     * Retrieves the URI from `self`.
     */
    get_uri(): string
    /**
     * Retrieves the user agent used when streaming.
     */
    get_user_agent(): string
    /**
     * Whether the player is using a live media.
     */
    is_live_media(): boolean
    /**
     * Set the audio stream to play. `index_` is the index of the stream
     * in the list returned by clutter_gst_playback_get_audio_streams().
     * @param index_ the index of the audio stream
     */
    set_audio_stream(index_: number): void
    /**
     * Sets the buffer duration to be used when buffering network streams.
     * @param duration The new duration
     */
    set_buffer_duration(duration: number): void
    /**
     * Sets the buffer size to be used when buffering network streams.
     * @param size The new size
     */
    set_buffer_size(size: number): void
    set_buffering_mode(mode: BufferingMode): void
    /**
     * Sets the source of `self` using a file path.
     * @param filename A filename
     */
    set_filename(filename: string): void
    /**
     * Sets the playback progress of `self`. The `progress` is
     * a normalized value between 0.0 (begin) and 1.0 (end).
     * @param progress the progress of the playback, between 0.0 and 1.0
     */
    set_progress(progress: number): void
    /**
     * Seeking can be done with several trade-offs. Clutter-gst defaults
     * to %CLUTTER_GST_SEEK_FLAG_NONE.
     * @param flags a combination of #ClutterGstSeekFlags
     */
    set_seek_flags(flags: SeekFlags): void
    /**
     * Sets the font used by the subtitle renderer. The `font_name` string must be
     * either %NULL, which means that the default font name of the underlying
     * implementation will be used; or must follow the grammar recognized by
     * pango_font_description_from_string() like:
     * 
     * |[
     *   clutter_gst_playback_set_subtitle_font_name (player, "Sans 24pt");
     * ```
     * 
     * @param font_name a font name, or %NULL to set the default font name
     */
    set_subtitle_font_name(font_name: string): void
    /**
     * Set the subtitles track to play. `index_` is the index of the stream
     * in the list returned by clutter_gst_playback_get_subtitle_tracks().
     * 
     * If `index_` is -1, the subtitles are turned off.
     * @param index_ the index of the subtitles track
     */
    set_subtitle_track(index_: number): void
    /**
     * Sets the location of a subtitle file to display while playing `self`.
     * @param uri the URI of a subtitle file
     */
    set_subtitle_uri(uri: string): void
    /**
     * Sets the URI of `self` to `uri`.
     * @param uri the URI of the media stream
     */
    set_uri(uri: string): void
    /**
     * Sets the user agent to use when streaming.
     * 
     * When streaming content, you might want to set a custom user agent, eg. to
     * promote your software, make it appear in statistics or because the server
     * requires a special user agent you want to impersonate.
     * @param user_agent the user agent
     */
    set_user_agent(user_agent: string): void

    // Own virtual methods of ClutterGst-3.0.ClutterGst.Playback

    vfunc_should_buffer(query: Gst.Query): boolean

    // Own signals of ClutterGst-3.0.ClutterGst.Playback

    connect(sigName: "should-buffer", callback: Playback_ShouldBufferSignalCallback): number
    connect_after(sigName: "should-buffer", callback: Playback_ShouldBufferSignalCallback): number
    emit(sigName: "should-buffer", query: Gst.Query, ...args: any[]): void

    // Class property signals of ClutterGst-3.0.ClutterGst.Playback

    connect(sigName: "notify::audio-stream", callback: (($obj: Playback, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::audio-stream", callback: (($obj: Playback, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::audio-stream", ...args: any[]): void
    connect(sigName: "notify::audio-streams", callback: (($obj: Playback, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::audio-streams", callback: (($obj: Playback, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::audio-streams", ...args: any[]): void
    connect(sigName: "notify::buffer-fill", callback: (($obj: Playback, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::buffer-fill", callback: (($obj: Playback, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::buffer-fill", ...args: any[]): void
    connect(sigName: "notify::can-seek", callback: (($obj: Playback, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-seek", callback: (($obj: Playback, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-seek", ...args: any[]): void
    connect(sigName: "notify::duration", callback: (($obj: Playback, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::duration", callback: (($obj: Playback, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::duration", ...args: any[]): void
    connect(sigName: "notify::in-seek", callback: (($obj: Playback, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::in-seek", callback: (($obj: Playback, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::in-seek", ...args: any[]): void
    connect(sigName: "notify::progress", callback: (($obj: Playback, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::progress", callback: (($obj: Playback, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::progress", ...args: any[]): void
    connect(sigName: "notify::seek-flags", callback: (($obj: Playback, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::seek-flags", callback: (($obj: Playback, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::seek-flags", ...args: any[]): void
    connect(sigName: "notify::subtitle-font-name", callback: (($obj: Playback, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::subtitle-font-name", callback: (($obj: Playback, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::subtitle-font-name", ...args: any[]): void
    connect(sigName: "notify::subtitle-track", callback: (($obj: Playback, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::subtitle-track", callback: (($obj: Playback, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::subtitle-track", ...args: any[]): void
    connect(sigName: "notify::subtitle-tracks", callback: (($obj: Playback, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::subtitle-tracks", callback: (($obj: Playback, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::subtitle-tracks", ...args: any[]): void
    connect(sigName: "notify::subtitle-uri", callback: (($obj: Playback, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::subtitle-uri", callback: (($obj: Playback, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::subtitle-uri", ...args: any[]): void
    connect(sigName: "notify::uri", callback: (($obj: Playback, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::uri", callback: (($obj: Playback, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::uri", ...args: any[]): void
    connect(sigName: "notify::user-agent", callback: (($obj: Playback, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::user-agent", callback: (($obj: Playback, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::user-agent", ...args: any[]): void
    connect(sigName: "notify::audio-volume", callback: (($obj: Playback, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::audio-volume", callback: (($obj: Playback, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::audio-volume", ...args: any[]): void
    connect(sigName: "notify::idle", callback: (($obj: Playback, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::idle", callback: (($obj: Playback, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::idle", ...args: any[]): void
    connect(sigName: "notify::playing", callback: (($obj: Playback, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::playing", callback: (($obj: Playback, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::playing", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * Implementation of #ClutterGstPlayback that displays media streams
 * using GStreamer.
 * 
 * The #ClutterGstPlayback structure contains only private data and
 * should not be accessed directly.
 * @class 
 */
class Playback extends GObject.Object {

    // Own properties of ClutterGst-3.0.ClutterGst.Playback

    static name: string
    static $gtype: GObject.GType<Playback>

    // Constructors of ClutterGst-3.0.ClutterGst.Playback

    constructor(config?: Playback_ConstructProps) 
    constructor() 
    static new(): Playback
    _init(config?: Playback_ConstructProps): void
}

interface VideoSink_ConstructProps extends GstVideo.ColorBalance_ConstructProps, GstVideo.Navigation_ConstructProps, GstVideo.VideoSink_ConstructProps {

    // Own constructor properties of ClutterGst-3.0.ClutterGst.VideoSink

    update_priority?: number | null
}

/**
 * Signal callback interface for `new-frame`
 */
interface VideoSink_NewFrameSignalCallback {
    ($obj: VideoSink): void
}

/**
 * Signal callback interface for `new-overlays`
 */
interface VideoSink_NewOverlaysSignalCallback {
    ($obj: VideoSink): void
}

/**
 * Signal callback interface for `pipeline-ready`
 */
interface VideoSink_PipelineReadySignalCallback {
    ($obj: VideoSink): void
}

interface VideoSink extends GstVideo.ColorBalance, GstVideo.Navigation {

    // Own properties of ClutterGst-3.0.ClutterGst.VideoSink

    update_priority: number

    // Conflicting properties

    element: any
    object: any

    // Owm methods of ClutterGst-3.0.ClutterGst.VideoSink

    /**
     * Returns a #ClutterGstFrame object suitable to render the current
     * frame of the given video sink. An application is free to make a
     * copy of this pipeline and modify it for custom rendering.
     */
    get_frame(): Frame
    get_overlays(): Overlays
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
     */
    is_ready(): boolean

    // Conflicting methods

    get_value(...args: any[]): any
    ref(...args: any[]): any
    send_event(...args: any[]): any
    vfunc_send_event(...args: any[]): any

    // Own virtual methods of ClutterGst-3.0.ClutterGst.VideoSink

    vfunc_new_frame(): void
    vfunc_new_overlays(): void
    vfunc_pipeline_ready(): void

    // Own signals of ClutterGst-3.0.ClutterGst.VideoSink

    connect(sigName: "new-frame", callback: VideoSink_NewFrameSignalCallback): number
    connect_after(sigName: "new-frame", callback: VideoSink_NewFrameSignalCallback): number
    emit(sigName: "new-frame", ...args: any[]): void
    connect(sigName: "new-overlays", callback: VideoSink_NewOverlaysSignalCallback): number
    connect_after(sigName: "new-overlays", callback: VideoSink_NewOverlaysSignalCallback): number
    emit(sigName: "new-overlays", ...args: any[]): void
    connect(sigName: "pipeline-ready", callback: VideoSink_PipelineReadySignalCallback): number
    connect_after(sigName: "pipeline-ready", callback: VideoSink_PipelineReadySignalCallback): number
    emit(sigName: "pipeline-ready", ...args: any[]): void

    // Class property signals of ClutterGst-3.0.ClutterGst.VideoSink

    connect(sigName: "notify::update-priority", callback: (($obj: VideoSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::update-priority", callback: (($obj: VideoSink, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::update-priority", ...args: any[]): void
    connect(sigName: "notify::show-preroll-frame", callback: (($obj: VideoSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::show-preroll-frame", callback: (($obj: VideoSink, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::show-preroll-frame", ...args: any[]): void
    connect(sigName: "notify::async", callback: (($obj: VideoSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::async", callback: (($obj: VideoSink, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::async", ...args: any[]): void
    connect(sigName: "notify::blocksize", callback: (($obj: VideoSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::blocksize", callback: (($obj: VideoSink, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::blocksize", ...args: any[]): void
    connect(sigName: "notify::enable-last-sample", callback: (($obj: VideoSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enable-last-sample", callback: (($obj: VideoSink, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::enable-last-sample", ...args: any[]): void
    connect(sigName: "notify::last-sample", callback: (($obj: VideoSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::last-sample", callback: (($obj: VideoSink, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::last-sample", ...args: any[]): void
    connect(sigName: "notify::max-bitrate", callback: (($obj: VideoSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-bitrate", callback: (($obj: VideoSink, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::max-bitrate", ...args: any[]): void
    connect(sigName: "notify::max-lateness", callback: (($obj: VideoSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-lateness", callback: (($obj: VideoSink, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::max-lateness", ...args: any[]): void
    connect(sigName: "notify::processing-deadline", callback: (($obj: VideoSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::processing-deadline", callback: (($obj: VideoSink, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::processing-deadline", ...args: any[]): void
    connect(sigName: "notify::qos", callback: (($obj: VideoSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::qos", callback: (($obj: VideoSink, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::qos", ...args: any[]): void
    connect(sigName: "notify::render-delay", callback: (($obj: VideoSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::render-delay", callback: (($obj: VideoSink, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::render-delay", ...args: any[]): void
    connect(sigName: "notify::stats", callback: (($obj: VideoSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stats", callback: (($obj: VideoSink, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::stats", ...args: any[]): void
    connect(sigName: "notify::sync", callback: (($obj: VideoSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sync", callback: (($obj: VideoSink, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sync", ...args: any[]): void
    connect(sigName: "notify::throttle-time", callback: (($obj: VideoSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::throttle-time", callback: (($obj: VideoSink, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::throttle-time", ...args: any[]): void
    connect(sigName: "notify::ts-offset", callback: (($obj: VideoSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ts-offset", callback: (($obj: VideoSink, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::ts-offset", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * The #ClutterGstVideoSink structure contains only private data and
 * should be accessed using the provided API.
 * @class 
 */
class VideoSink extends GstVideo.VideoSink {

    // Own properties of ClutterGst-3.0.ClutterGst.VideoSink

    static name: string
    static $gtype: GObject.GType<VideoSink>

    // Constructors of ClutterGst-3.0.ClutterGst.VideoSink

    constructor(config?: VideoSink_ConstructProps) 
    /**
     * Creates a new #ClutterGstVideoSink
     * @constructor 
     */
    constructor() 
    /**
     * Creates a new #ClutterGstVideoSink
     * @constructor 
     */
    static new(): VideoSink
    _init(config?: VideoSink_ConstructProps): void
}

interface AspectratioClass {
}

/**
 * Base class for #ClutterGstAspectratio.
 * @record 
 */
abstract class AspectratioClass {

    // Own properties of ClutterGst-3.0.ClutterGst.AspectratioClass

    static name: string
}

interface AspectratioPrivate {
}

class AspectratioPrivate {

    // Own properties of ClutterGst-3.0.ClutterGst.AspectratioPrivate

    static name: string
}

interface Box {

    // Own fields of ClutterGst-3.0.ClutterGst.Box

    /**
     * X coordinate of the top left corner
     * @field 
     */
    x1: number
    /**
     * Y coordinate of the top left corner
     * @field 
     */
    y1: number
    /**
     * X coordinate of the bottom right corner
     * @field 
     */
    x2: number
    /**
     * Y coordinate of the bottom right corner
     * @field 
     */
    y2: number

    // Owm methods of ClutterGst-3.0.ClutterGst.Box

    /**
     * Retrieves the height of the `box`
     */
    get_height(): number
    /**
     * Retrieves the width of the `box`
     */
    get_width(): number
}

/**
 * Bounding box of an area in a video texture or actor's allocation.
 * Coordinates are usually expressed in the [0, 1] interval.
 * @record 
 */
class Box {

    // Own properties of ClutterGst-3.0.ClutterGst.Box

    static name: string
}

interface CameraClass {

    // Own fields of ClutterGst-3.0.ClutterGst.CameraClass

    ready_for_capture: (self: Camera, ready: boolean) => void
    photo_saved: (self: Camera) => void
    photo_taken: (self: Camera, pixbuf: GdkPixbuf.Pixbuf) => void
    video_saved: (self: Camera) => void
}

/**
 * Base class for #ClutterGstCamera.
 * @record 
 */
abstract class CameraClass {

    // Own properties of ClutterGst-3.0.ClutterGst.CameraClass

    static name: string
}

interface CameraDeviceClass {

    // Own fields of ClutterGst-3.0.ClutterGst.CameraDeviceClass

    capture_resolution_changed: (device: CameraDevice, width: number, height: number) => void
}

/**
 * Base class for #ClutterGstCameraDevice.
 * @record 
 */
abstract class CameraDeviceClass {

    // Own properties of ClutterGst-3.0.ClutterGst.CameraDeviceClass

    static name: string
}

interface CameraDevicePrivate {
}

class CameraDevicePrivate {

    // Own properties of ClutterGst-3.0.ClutterGst.CameraDevicePrivate

    static name: string
}

interface CameraManagerClass {
}

/**
 * Base class for #ClutterGstCamera.
 * @record 
 */
abstract class CameraManagerClass {

    // Own properties of ClutterGst-3.0.ClutterGst.CameraManagerClass

    static name: string
}

interface CameraManagerPrivate {
}

class CameraManagerPrivate {

    // Own properties of ClutterGst-3.0.ClutterGst.CameraManagerPrivate

    static name: string
}

interface CameraPrivate {
}

class CameraPrivate {

    // Own properties of ClutterGst-3.0.ClutterGst.CameraPrivate

    static name: string
}

interface ContentClass {

    // Own fields of ClutterGst-3.0.ClutterGst.ContentClass

    has_painting_content: (self: Content) => boolean
}

/**
 * The #ClutterGstContentClass structure contains only private data
 * and should be accessed using the provided API
 * @record 
 */
abstract class ContentClass {

    // Own properties of ClutterGst-3.0.ClutterGst.ContentClass

    static name: string
}

interface ContentPrivate {
}

class ContentPrivate {

    // Own properties of ClutterGst-3.0.ClutterGst.ContentPrivate

    static name: string
}

interface CropClass {
}

/**
 * Base class for #ClutterGstCrop.
 * @record 
 */
abstract class CropClass {

    // Own properties of ClutterGst-3.0.ClutterGst.CropClass

    static name: string
}

interface CropPrivate {
}

class CropPrivate {

    // Own properties of ClutterGst-3.0.ClutterGst.CropPrivate

    static name: string
}

interface Frame {

    // Own fields of ClutterGst-3.0.ClutterGst.Frame

    /**
     * a #ClutterGstVideoResolution
     * @field 
     */
    resolution: VideoResolution
}

/**
 * Represents a frame outputted by the #ClutterGstVideoSink.
 * @record 
 */
class Frame {

    // Own properties of ClutterGst-3.0.ClutterGst.Frame

    static name: string
}

interface Overlay {

    // Own fields of ClutterGst-3.0.ClutterGst.Overlay

    /**
     * a #ClutterGstBox representing the position of the
     *            overlay within a #ClutterGstFrame.
     * @field 
     */
    position: Box
}

/**
 * Represents a video overlay outputted by the #ClutterGstVideoSink.
 * @record 
 */
class Overlay {

    // Own properties of ClutterGst-3.0.ClutterGst.Overlay

    static name: string
}

interface Overlays {

    // Own fields of ClutterGst-3.0.ClutterGst.Overlays

    /**
     * an array of #ClutterGstOverlay
     * @field 
     */
    overlays: object[]
}

class Overlays {

    // Own properties of ClutterGst-3.0.ClutterGst.Overlays

    static name: string
}

interface PlaybackClass {

    // Own fields of ClutterGst-3.0.ClutterGst.PlaybackClass

    should_buffer: (self: Playback, query: Gst.Query) => boolean
}

/**
 * Base class for #ClutterGstPlayback.
 * @record 
 */
abstract class PlaybackClass {

    // Own properties of ClutterGst-3.0.ClutterGst.PlaybackClass

    static name: string
}

interface PlaybackPrivate {
}

class PlaybackPrivate {

    // Own properties of ClutterGst-3.0.ClutterGst.PlaybackPrivate

    static name: string
}

interface PlayerIface {

    // Own fields of ClutterGst-3.0.ClutterGst.PlayerIface

    get_frame: (self: Player) => Frame
    get_pipeline: (self: Player) => Gst.Element
    get_video_sink: (self: Player) => VideoSink
    get_idle: (self: Player) => boolean
    get_audio_volume: (self: Player) => number
    set_audio_volume: (self: Player, volume: number) => void
    get_playing: (self: Player) => boolean
    set_playing: (self: Player, playing: boolean) => void
    new_frame: (self: Player, frame: Frame) => void
    ready: (self: Player) => void
    eos: (self: Player) => void
    error: (self: Player, error: GLib.Error) => void
    size_change: (self: Player, width: number, height: number) => void
}

/**
 * Interface vtable for #ClutterGstPlayer implementations
 * @record 
 */
abstract class PlayerIface {

    // Own properties of ClutterGst-3.0.ClutterGst.PlayerIface

    static name: string
}

interface PlayerIfacePrivate {
}

class PlayerIfacePrivate {

    // Own properties of ClutterGst-3.0.ClutterGst.PlayerIfacePrivate

    static name: string
}

interface VideoResolution {

    // Own fields of ClutterGst-3.0.ClutterGst.VideoResolution

    /**
     * the width, in pixels
     * @field 
     */
    width: number
    /**
     * the height, in pixels
     * @field 
     */
    height: number
    par_n: number
    par_d: number
}

/**
 * A video resolution.
 * @record 
 */
class VideoResolution {

    // Own properties of ClutterGst-3.0.ClutterGst.VideoResolution

    static name: string
}

interface VideoSinkClass {

    // Own fields of ClutterGst-3.0.ClutterGst.VideoSinkClass

    new_frame: (sink: VideoSink) => void
    pipeline_ready: (sink: VideoSink) => void
    new_overlays: (sink: VideoSink) => void
}

abstract class VideoSinkClass {

    // Own properties of ClutterGst-3.0.ClutterGst.VideoSinkClass

    static name: string
}

interface VideoSinkPrivate {
}

class VideoSinkPrivate {

    // Own properties of ClutterGst-3.0.ClutterGst.VideoSinkPrivate

    static name: string
}

}
export default ClutterGst;