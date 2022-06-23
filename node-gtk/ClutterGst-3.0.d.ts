// @ts-nocheck

/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * ClutterGst-3.0
 */

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
function createVideoSink(): Gst.Element
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
 * @param parameterString a string which is displayed in    the first line of <option>--help</option> output, after    <literal><replaceable>programname</replaceable> [OPTION...]</literal>
 * @param entries a %NULL-terminated array of #GOptionEntry<!-- -->s    describing the options of your program
 * @param translationDomain a translation domain to use for translating    the <option>--help</option> output for the options in `entries`    with gettext(), or %NULL
 */
function initWithArgs(argv: string[] | null, parameterString: string, entries: GLib.OptionEntry, translationDomain: string): [ /* returnType */ Clutter.InitError, /* argv */ string[] | null ]
interface Player_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of ClutterGst-3.0.ClutterGst.Player

    /**
     * The volume of the audio, as a normalized value between
     * 0.0 and 1.0.
     */
    audioVolume?: number | null
    /**
     * Whether the #ClutterGstPlayer actor is playing.
     */
    playing?: boolean | null
}

/**
 * Signal callback interface for `eos`
 */
interface Player_EosSignalCallback {
    (): void
}

/**
 * Signal callback interface for `error`
 */
interface Player_ErrorSignalCallback {
    (error: GLib.Error): void
}

/**
 * Signal callback interface for `new-frame`
 */
interface Player_NewFrameSignalCallback {
    (frame: Frame): void
}

/**
 * Signal callback interface for `ready`
 */
interface Player_ReadySignalCallback {
    (): void
}

/**
 * Signal callback interface for `size-change`
 */
interface Player_SizeChangeSignalCallback {
    (width: number, height: number): void
}

interface Player {

    // Own properties of ClutterGst-3.0.ClutterGst.Player

    /**
     * The volume of the audio, as a normalized value between
     * 0.0 and 1.0.
     */
    audioVolume: number
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
    getAudioVolume(): number
    /**
     * Retrieves the #ClutterGstFrame of the last frame produced by `self`.
     */
    getFrame(): Frame
    /**
     * Get the idle state of the pipeline.
     */
    getIdle(): boolean
    /**
     * Retrieves the #GstPipeline used by the `self,` for direct use with
     * GStreamer API.
     */
    getPipeline(): Gst.Element
    /**
     * Retrieves the playing status of `self`.
     */
    getPlaying(): boolean
    /**
     * Retrieves the #ClutterGstVideoSink used by the `self`.
     */
    getVideoSink(): VideoSink
    /**
     * Sets the playback volume of `self` to `volume`.
     * @param volume the volume as a double between 0.0 and 1.0
     */
    setAudioVolume(volume: number): void
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
    setPlaying(playing: boolean): void

    // Own signals of ClutterGst-3.0.ClutterGst.Player

    connect(sigName: "eos", callback: Player_EosSignalCallback): number
    on(sigName: "eos", callback: Player_EosSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "eos", callback: Player_EosSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "eos", callback: Player_EosSignalCallback): NodeJS.EventEmitter
    emit(sigName: "eos", ...args: any[]): void
    connect(sigName: "error", callback: Player_ErrorSignalCallback): number
    on(sigName: "error", callback: Player_ErrorSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "error", callback: Player_ErrorSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "error", callback: Player_ErrorSignalCallback): NodeJS.EventEmitter
    emit(sigName: "error", ...args: any[]): void
    connect(sigName: "new-frame", callback: Player_NewFrameSignalCallback): number
    on(sigName: "new-frame", callback: Player_NewFrameSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "new-frame", callback: Player_NewFrameSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "new-frame", callback: Player_NewFrameSignalCallback): NodeJS.EventEmitter
    emit(sigName: "new-frame", ...args: any[]): void
    connect(sigName: "ready", callback: Player_ReadySignalCallback): number
    on(sigName: "ready", callback: Player_ReadySignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "ready", callback: Player_ReadySignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "ready", callback: Player_ReadySignalCallback): NodeJS.EventEmitter
    emit(sigName: "ready", ...args: any[]): void
    connect(sigName: "size-change", callback: Player_SizeChangeSignalCallback): number
    on(sigName: "size-change", callback: Player_SizeChangeSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "size-change", callback: Player_SizeChangeSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "size-change", callback: Player_SizeChangeSignalCallback): NodeJS.EventEmitter
    emit(sigName: "size-change", height: number, ...args: any[]): void

    // Class property signals of ClutterGst-3.0.ClutterGst.Player

    connect(sigName: "notify::audio-volume", callback: (...args: any[]) => void): number
    on(sigName: "notify::audio-volume", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::audio-volume", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::audio-volume", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::audio-volume", ...args: any[]): void
    connect(sigName: "notify::idle", callback: (...args: any[]) => void): number
    on(sigName: "notify::idle", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::idle", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::idle", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::idle", ...args: any[]): void
    connect(sigName: "notify::playing", callback: (...args: any[]) => void): number
    on(sigName: "notify::playing", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::playing", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::playing", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::playing", ...args: any[]): void
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
    fillAllocation?: boolean | null
    /**
     * Whether or not paint borders on the sides of the video
     */
    paintBorders?: boolean | null
}

interface Aspectratio extends Clutter.Content {

    // Own properties of ClutterGst-3.0.ClutterGst.Aspectratio

    /**
     * Whether the content should fill its allocation with video rather
     * than adding borders.
     */
    fillAllocation: boolean
    /**
     * Whether or not paint borders on the sides of the video
     */
    paintBorders: boolean

    // Class property signals of ClutterGst-3.0.ClutterGst.Aspectratio

    connect(sigName: "notify::fill-allocation", callback: (...args: any[]) => void): number
    on(sigName: "notify::fill-allocation", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::fill-allocation", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::fill-allocation", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::fill-allocation", ...args: any[]): void
    connect(sigName: "notify::paint-borders", callback: (...args: any[]) => void): number
    on(sigName: "notify::paint-borders", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::paint-borders", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::paint-borders", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::paint-borders", ...args: any[]): void
    connect(sigName: "notify::frame", callback: (...args: any[]) => void): number
    on(sigName: "notify::frame", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::frame", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::frame", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::frame", ...args: any[]): void
    connect(sigName: "notify::paint-frame", callback: (...args: any[]) => void): number
    on(sigName: "notify::paint-frame", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::paint-frame", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::paint-frame", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::paint-frame", ...args: any[]): void
    connect(sigName: "notify::paint-overlays", callback: (...args: any[]) => void): number
    on(sigName: "notify::paint-overlays", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::paint-overlays", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::paint-overlays", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::paint-overlays", ...args: any[]): void
    connect(sigName: "notify::player", callback: (...args: any[]) => void): number
    on(sigName: "notify::player", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::player", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::player", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::player", ...args: any[]): void
    connect(sigName: "notify::sink", callback: (...args: any[]) => void): number
    on(sigName: "notify::sink", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::sink", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::sink", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::sink", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
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
    (): void
}

/**
 * Signal callback interface for `photo-taken`
 */
interface Camera_PhotoTakenSignalCallback {
    (pixbuf: GdkPixbuf.Pixbuf): void
}

/**
 * Signal callback interface for `ready-for-capture`
 */
interface Camera_ReadyForCaptureSignalCallback {
    (ready: boolean): void
}

/**
 * Signal callback interface for `video-saved`
 */
interface Camera_VideoSavedSignalCallback {
    (): void
}

interface Camera extends Player {

    // Own properties of ClutterGst-3.0.ClutterGst.Camera

    device: CameraDevice

    // Owm methods of ClutterGst-3.0.ClutterGst.Camera

    getBrightness(curValue: number): boolean
    getBrightnessRange(minValue: number, maxValue: number, defaultValue: number): boolean
    /**
     * Retrieve the current selected camera device.
     */
    getCameraDevice(): CameraDevice
    /**
     * Retrieve the current value for the color balance property `property,`
     * 
     * This method will return FALSE if `property` does not exist or color balance is not
     * supported on `self`.
     * See clutter_gst_camera_supports_color_balance().
     * @param property Property name
     * @param curValue Pointer to store the current value of `property`
     */
    getColorBalanceProperty(property: string, curValue: number): boolean
    /**
     * Retrieve the minimum, maximum and default values for the color balance property `property,`
     * 
     * This method will return FALSE if `property` does not exist or color balance is not
     * supported on `self`.
     * See clutter_gst_camera_supports_color_balance().
     * @param property Property name
     * @param minValue Pointer to store the minimum value of `property,` or %NULL
     * @param maxValue Pointer to store the maximum value of `property,` or %NULL
     * @param defaultValue Pointer to store the default value of `property,` or %NULL
     */
    getColorBalancePropertyRange(property: string, minValue: number, maxValue: number, defaultValue: number): boolean
    getContrast(curValue: number): boolean
    getContrastRange(minValue: number, maxValue: number, defaultValue: number): boolean
    /**
     * Retrieve the current filter being used.
     */
    getFilter(): Gst.Element
    /**
     * Retrieve the current gamma value.
     * 
     * This method will return FALSE if gamma correction is not
     * supported on `self`.
     * See clutter_gst_camera_supports_gamma_correction().
     * @param curValue Pointer to store the current gamma value
     */
    getGamma(curValue: number): boolean
    /**
     * Retrieve the minimum, maximum and default gamma values.
     * 
     * This method will return FALSE if gamma correction is not
     * supported on `self`.
     * See clutter_gst_camera_supports_gamma_correction().
     * @param minValue Pointer to store the minimum gamma value, or %NULL
     * @param maxValue Pointer to store the maximum gamma value, or %NULL
     * @param defaultValue Pointer to store the default gamma value, or %NULL
     */
    getGammaRange(minValue: number, maxValue: number, defaultValue: number): boolean
    getHue(curValue: number): boolean
    getHueRange(minValue: number, maxValue: number, defaultValue: number): boolean
    getSaturation(curValue: number): boolean
    getSaturationRange(minValue: number, maxValue: number, defaultValue: number): boolean
    /**
     * Check whether the `self` is ready for video/photo capture.
     */
    isReadyForCapture(): boolean
    /**
     * Check whether the `self` is recording video.
     */
    isRecordingVideo(): boolean
    /**
     * Remove the current filter, if any.
     */
    removeFilter(): boolean
    setBrightness(value: number): boolean
    /**
     * Set the new active camera device.
     * @param device a #ClutterGstCameraDevice
     */
    setCameraDevice(device: CameraDevice): boolean
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
    setColorBalanceProperty(property: string, value: number): boolean
    setContrast(value: number): boolean
    /**
     * Set the filter element to be used.
     * Filters can be used for effects, image processing, etc.
     * @param filter a #GstElement for the filter
     */
    setFilter(filter: Gst.Element): boolean
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
    setGamma(value: number): boolean
    setHue(value: number): boolean
    /**
     * Set the encoding profile to be used for photo captures.
     * The default profile saves photos as JPEG images.
     * @param profile A #GstEncodingProfile to be used for photo captures.
     */
    setPhotoProfile(profile: GstPbutils.EncodingProfile): void
    setSaturation(value: number): boolean
    /**
     * Set the encoding profile to be used for video recording.
     * The default profile saves videos as Ogg/Theora videos.
     * @param profile A #GstEncodingProfile to be used for video recording.
     */
    setVideoProfile(profile: GstPbutils.EncodingProfile): void
    /**
     * Start a video recording with the `self` and save it to `filename`.
     * This method requires that `self` is playing and ready for capture.
     * 
     * The ::video-saved signal will be emitted when the video is saved.
     * @param filename the name of the video file to where the recording will be saved
     */
    startVideoRecording(filename: string): boolean
    /**
     * Stop recording video on the `self`.
     */
    stopVideoRecording(): void
    /**
     * Check whether the `self` supports color balance.
     */
    supportsColorBalance(): boolean
    /**
     * Check whether the `self` supports gamma correction.
     */
    supportsGammaCorrection(): boolean
    /**
     * Take a photo with the `self` and save it to `filename`.
     * This method requires that `self` is playing and ready for capture.
     * 
     * The ::photo-saved signal will be emitted when the video is saved.
     * @param filename the name of the file to where the photo will be saved
     */
    takePhoto(filename: string): boolean
    /**
     * Take a photo with the `self` and emit it in the ::photo-taken signal as a
     * #GdkPixbuf.
     * This method requires that `self` is playing and ready for capture.
     */
    takePhotoPixbuf(): boolean

    // Own signals of ClutterGst-3.0.ClutterGst.Camera

    connect(sigName: "photo-saved", callback: Camera_PhotoSavedSignalCallback): number
    on(sigName: "photo-saved", callback: Camera_PhotoSavedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "photo-saved", callback: Camera_PhotoSavedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "photo-saved", callback: Camera_PhotoSavedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "photo-saved", ...args: any[]): void
    connect(sigName: "photo-taken", callback: Camera_PhotoTakenSignalCallback): number
    on(sigName: "photo-taken", callback: Camera_PhotoTakenSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "photo-taken", callback: Camera_PhotoTakenSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "photo-taken", callback: Camera_PhotoTakenSignalCallback): NodeJS.EventEmitter
    emit(sigName: "photo-taken", ...args: any[]): void
    connect(sigName: "ready-for-capture", callback: Camera_ReadyForCaptureSignalCallback): number
    on(sigName: "ready-for-capture", callback: Camera_ReadyForCaptureSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "ready-for-capture", callback: Camera_ReadyForCaptureSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "ready-for-capture", callback: Camera_ReadyForCaptureSignalCallback): NodeJS.EventEmitter
    emit(sigName: "ready-for-capture", ...args: any[]): void
    connect(sigName: "video-saved", callback: Camera_VideoSavedSignalCallback): number
    on(sigName: "video-saved", callback: Camera_VideoSavedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "video-saved", callback: Camera_VideoSavedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "video-saved", callback: Camera_VideoSavedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "video-saved", ...args: any[]): void

    // Class property signals of ClutterGst-3.0.ClutterGst.Camera

    connect(sigName: "notify::device", callback: (...args: any[]) => void): number
    on(sigName: "notify::device", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::device", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::device", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::device", ...args: any[]): void
    connect(sigName: "notify::audio-volume", callback: (...args: any[]) => void): number
    on(sigName: "notify::audio-volume", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::audio-volume", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::audio-volume", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::audio-volume", ...args: any[]): void
    connect(sigName: "notify::idle", callback: (...args: any[]) => void): number
    on(sigName: "notify::idle", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::idle", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::idle", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::idle", ...args: any[]): void
    connect(sigName: "notify::playing", callback: (...args: any[]) => void): number
    on(sigName: "notify::playing", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::playing", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::playing", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::playing", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
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
    elementFactory?: Gst.ElementFactory | null
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
    (width: number, height: number): void
}

interface CameraDevice {

    // Own properties of ClutterGst-3.0.ClutterGst.CameraDevice

    /**
     * The GstElementFactory for this device.
     */
    readonly elementFactory: Gst.ElementFactory
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
    getCaptureResolution(): [ /* width */ number, /* height */ number ]
    /**
     * Retrieve the name of the `device`.
     */
    getName(): string
    /**
     * Retrieve the node (location) of the `device`.
     */
    getNode(): string
    /**
     * Retrieve the supported resolutions of the `device`.
     */
    getSupportedResolutions(): VideoResolution[]
    /**
     * Set the capture resolution to be used by `device`.
     * @param width The new capture resolution width to use
     * @param height The new capture resolution height to use
     */
    setCaptureResolution(width: number, height: number): void

    // Own signals of ClutterGst-3.0.ClutterGst.CameraDevice

    connect(sigName: "capture-resolution-changed", callback: CameraDevice_CaptureResolutionChangedSignalCallback): number
    on(sigName: "capture-resolution-changed", callback: CameraDevice_CaptureResolutionChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "capture-resolution-changed", callback: CameraDevice_CaptureResolutionChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "capture-resolution-changed", callback: CameraDevice_CaptureResolutionChangedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "capture-resolution-changed", height: number, ...args: any[]): void

    // Class property signals of ClutterGst-3.0.ClutterGst.CameraDevice

    connect(sigName: "notify::element-factory", callback: (...args: any[]) => void): number
    on(sigName: "notify::element-factory", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::element-factory", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::element-factory", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::element-factory", ...args: any[]): void
    connect(sigName: "notify::name", callback: (...args: any[]) => void): number
    on(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::node", callback: (...args: any[]) => void): number
    on(sigName: "notify::node", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::node", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::node", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::node", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
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
    (cameraDevice: CameraDevice): void
}

/**
 * Signal callback interface for `camera-removed`
 */
interface CameraManager_CameraRemovedSignalCallback {
    (cameraDevice: CameraDevice): void
}

interface CameraManager {

    // Owm methods of ClutterGst-3.0.ClutterGst.CameraManager

    /**
     * Retrieve an array of supported camera devices.
     */
    getCameraDevices(): CameraDevice[]

    // Own signals of ClutterGst-3.0.ClutterGst.CameraManager

    connect(sigName: "camera-added", callback: CameraManager_CameraAddedSignalCallback): number
    on(sigName: "camera-added", callback: CameraManager_CameraAddedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "camera-added", callback: CameraManager_CameraAddedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "camera-added", callback: CameraManager_CameraAddedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "camera-added", ...args: any[]): void
    connect(sigName: "camera-removed", callback: CameraManager_CameraRemovedSignalCallback): number
    on(sigName: "camera-removed", callback: CameraManager_CameraRemovedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "camera-removed", callback: CameraManager_CameraRemovedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "camera-removed", callback: CameraManager_CameraRemovedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "camera-removed", ...args: any[]): void

    // Class property signals of ClutterGst-3.0.ClutterGst.CameraManager

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
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
    static getDefault(): CameraManager
}

interface Content_ConstructProps extends Clutter.Content_ConstructProps, GObject.Object_ConstructProps {

    // Own constructor properties of ClutterGst-3.0.ClutterGst.Content

    frame?: Frame | null
    paintFrame?: boolean | null
    paintOverlays?: boolean | null
    player?: GObject.Object | null
    sink?: VideoSink | null
}

/**
 * Signal callback interface for `size-change`
 */
interface Content_SizeChangeSignalCallback {
    (width: number, height: number): void
}

interface Content extends Clutter.Content {

    // Own properties of ClutterGst-3.0.ClutterGst.Content

    frame: Frame
    paintFrame: boolean
    paintOverlays: boolean
    player: GObject.Object
    sink: VideoSink

    // Owm methods of ClutterGst-3.0.ClutterGst.Content

    getFrame(): Frame
    getOverlays(): Overlays
    getPlayer(): Player
    getSink(): VideoSink
    /**
     * Set the current frame.
     * @param frame A #ClutterGstFrame
     */
    setFrame(frame: Frame): void
    setPlayer(player: Player): void
    setSink(sink: VideoSink): void

    // Own signals of ClutterGst-3.0.ClutterGst.Content

    connect(sigName: "size-change", callback: Content_SizeChangeSignalCallback): number
    on(sigName: "size-change", callback: Content_SizeChangeSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "size-change", callback: Content_SizeChangeSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "size-change", callback: Content_SizeChangeSignalCallback): NodeJS.EventEmitter
    emit(sigName: "size-change", height: number, ...args: any[]): void

    // Class property signals of ClutterGst-3.0.ClutterGst.Content

    connect(sigName: "notify::frame", callback: (...args: any[]) => void): number
    on(sigName: "notify::frame", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::frame", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::frame", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::frame", ...args: any[]): void
    connect(sigName: "notify::paint-frame", callback: (...args: any[]) => void): number
    on(sigName: "notify::paint-frame", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::paint-frame", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::paint-frame", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::paint-frame", ...args: any[]): void
    connect(sigName: "notify::paint-overlays", callback: (...args: any[]) => void): number
    on(sigName: "notify::paint-overlays", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::paint-overlays", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::paint-overlays", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::paint-overlays", ...args: any[]): void
    connect(sigName: "notify::player", callback: (...args: any[]) => void): number
    on(sigName: "notify::player", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::player", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::player", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::player", ...args: any[]): void
    connect(sigName: "notify::sink", callback: (...args: any[]) => void): number
    on(sigName: "notify::sink", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::sink", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::sink", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::sink", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
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
    static newWithSink(sink: VideoSink): Clutter.Content
}

interface Crop_ConstructProps extends Clutter.Content_ConstructProps, Content_ConstructProps {

    // Own constructor properties of ClutterGst-3.0.ClutterGst.Crop

    /**
     * Whether to cull the backface of the actor
     */
    cullBackface?: boolean | null
    /**
     * Input region in the video frame (all values between 0 and 1).
     */
    inputRegion?: Box | null
    /**
     * Output region in the actor's allocation (all values between 0 and 1).
     */
    outputRegion?: Box | null
    /**
     * Whether or not paint borders on the sides of the video
     */
    paintBorders?: boolean | null
}

interface Crop extends Clutter.Content {

    // Own properties of ClutterGst-3.0.ClutterGst.Crop

    /**
     * Whether to cull the backface of the actor
     */
    cullBackface: boolean
    /**
     * Input region in the video frame (all values between 0 and 1).
     */
    inputRegion: Box
    /**
     * Output region in the actor's allocation (all values between 0 and 1).
     */
    outputRegion: Box
    /**
     * Whether or not paint borders on the sides of the video
     */
    paintBorders: boolean

    // Class property signals of ClutterGst-3.0.ClutterGst.Crop

    connect(sigName: "notify::cull-backface", callback: (...args: any[]) => void): number
    on(sigName: "notify::cull-backface", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::cull-backface", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::cull-backface", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::cull-backface", ...args: any[]): void
    connect(sigName: "notify::input-region", callback: (...args: any[]) => void): number
    on(sigName: "notify::input-region", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::input-region", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::input-region", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::input-region", ...args: any[]): void
    connect(sigName: "notify::output-region", callback: (...args: any[]) => void): number
    on(sigName: "notify::output-region", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::output-region", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::output-region", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::output-region", ...args: any[]): void
    connect(sigName: "notify::paint-borders", callback: (...args: any[]) => void): number
    on(sigName: "notify::paint-borders", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::paint-borders", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::paint-borders", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::paint-borders", ...args: any[]): void
    connect(sigName: "notify::frame", callback: (...args: any[]) => void): number
    on(sigName: "notify::frame", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::frame", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::frame", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::frame", ...args: any[]): void
    connect(sigName: "notify::paint-frame", callback: (...args: any[]) => void): number
    on(sigName: "notify::paint-frame", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::paint-frame", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::paint-frame", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::paint-frame", ...args: any[]): void
    connect(sigName: "notify::paint-overlays", callback: (...args: any[]) => void): number
    on(sigName: "notify::paint-overlays", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::paint-overlays", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::paint-overlays", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::paint-overlays", ...args: any[]): void
    connect(sigName: "notify::player", callback: (...args: any[]) => void): number
    on(sigName: "notify::player", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::player", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::player", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::player", ...args: any[]): void
    connect(sigName: "notify::sink", callback: (...args: any[]) => void): number
    on(sigName: "notify::sink", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::sink", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::sink", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::sink", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
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
    audioStream?: number | null
    /**
     * The current progress of the playback, as a normalized
     * value between 0.0 and 1.0.
     */
    progress?: number | null
    /**
     * Flags to use when seeking.
     */
    seekFlags?: SeekFlags | null
    /**
     * The font used to display subtitles. The font description has to
     * follow the same grammar as the one recognized by
     * pango_font_description_from_string().
     */
    subtitleFontName?: string | null
    /**
     * Current subtitle track being displayed.
     */
    subtitleTrack?: number | null
    /**
     * The location of a subtitle file, expressed as a valid URI.
     */
    subtitleUri?: string | null
    /**
     * The location of a media file, expressed as a valid URI.
     */
    uri?: string | null
    /**
     * The User Agent used by #ClutterGstPlayback with network protocols.
     */
    userAgent?: string | null
}

/**
 * Signal callback interface for `should-buffer`
 */
interface Playback_ShouldBufferSignalCallback {
    (query: Gst.Query): boolean
}

interface Playback extends Player {

    // Own properties of ClutterGst-3.0.ClutterGst.Playback

    /**
     * Index of the current audio stream.
     */
    audioStream: number
    /**
     * List of audio streams available on the current media.
     */
    readonly audioStreams: object
    /**
     * The fill level of the buffer for the current stream,
     * as a value between 0.0 and 1.0.
     */
    readonly bufferFill: number
    /**
     * Whether the current stream is seekable.
     */
    readonly canSeek: boolean
    /**
     * The duration of the current stream, in seconds
     */
    readonly duration: number
    /**
     * Whether or not the stream is being seeked.
     */
    readonly inSeek: boolean
    /**
     * The current progress of the playback, as a normalized
     * value between 0.0 and 1.0.
     */
    progress: number
    /**
     * Flags to use when seeking.
     */
    seekFlags: SeekFlags
    /**
     * The font used to display subtitles. The font description has to
     * follow the same grammar as the one recognized by
     * pango_font_description_from_string().
     */
    subtitleFontName: string
    /**
     * Current subtitle track being displayed.
     */
    subtitleTrack: number
    /**
     * List of subtitle tracks available.
     */
    readonly subtitleTracks: object
    /**
     * The location of a subtitle file, expressed as a valid URI.
     */
    subtitleUri: string
    /**
     * The location of a media file, expressed as a valid URI.
     */
    uri: string
    /**
     * The User Agent used by #ClutterGstPlayback with network protocols.
     */
    userAgent: string

    // Own fields of ClutterGst-3.0.ClutterGst.Playback

    parent: GObject.Object
    priv: PlaybackPrivate

    // Owm methods of ClutterGst-3.0.ClutterGst.Playback

    /**
     * Get the current audio stream. The number returned in the index of the
     * audio stream playing in the list returned by
     * clutter_gst_playback_get_audio_streams().
     */
    getAudioStream(): number
    /**
     * Get the list of audio streams of the current media.
     */
    getAudioStreams(): string[]
    /**
     * Retrieves the buffer duration when buffering network streams.
     */
    getBufferDuration(): number
    /**
     * Retrieves the amount of the stream that is buffered.
     */
    getBufferFill(): number
    /**
     * Retrieves the buffer size when buffering network streams.
     */
    getBufferSize(): number
    getBufferingMode(): BufferingMode
    /**
     * Retrieves the duration of the media stream that `self` represents.
     */
    getDuration(): number
    /**
     * Whether the player is seeking.
     */
    getInSeek(): boolean
    /**
     * Retrieves the position in the media stream that `self` represents.
     */
    getPosition(): number
    /**
     * Retrieves the playback progress of `self`.
     */
    getProgress(): number
    /**
     * Get the current value of the seek-flags property.
     */
    getSeekFlags(): SeekFlags
    /**
     * Retrieves the font name currently used.
     */
    getSubtitleFontName(): string
    /**
     * Get the current subtitles track. The number returned is the index of the
     * subtiles track in the list returned by
     * clutter_gst_playback_get_subtitle_tracks().
     */
    getSubtitleTrack(): number
    /**
     * Get the list of subtitles tracks of the current media.
     */
    getSubtitleTracks(): string[]
    /**
     * Retrieves the URI of the subtitle file in use.
     */
    getSubtitleUri(): string
    /**
     * Retrieves the URI from `self`.
     */
    getUri(): string
    /**
     * Retrieves the user agent used when streaming.
     */
    getUserAgent(): string
    /**
     * Whether the player is using a live media.
     */
    isLiveMedia(): boolean
    /**
     * Set the audio stream to play. `index_` is the index of the stream
     * in the list returned by clutter_gst_playback_get_audio_streams().
     * @param index the index of the audio stream
     */
    setAudioStream(index: number): void
    /**
     * Sets the buffer duration to be used when buffering network streams.
     * @param duration The new duration
     */
    setBufferDuration(duration: number): void
    /**
     * Sets the buffer size to be used when buffering network streams.
     * @param size The new size
     */
    setBufferSize(size: number): void
    setBufferingMode(mode: BufferingMode): void
    /**
     * Sets the source of `self` using a file path.
     * @param filename A filename
     */
    setFilename(filename: string): void
    /**
     * Sets the playback progress of `self`. The `progress` is
     * a normalized value between 0.0 (begin) and 1.0 (end).
     * @param progress the progress of the playback, between 0.0 and 1.0
     */
    setProgress(progress: number): void
    /**
     * Seeking can be done with several trade-offs. Clutter-gst defaults
     * to %CLUTTER_GST_SEEK_FLAG_NONE.
     * @param flags a combination of #ClutterGstSeekFlags
     */
    setSeekFlags(flags: SeekFlags): void
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
     * @param fontName a font name, or %NULL to set the default font name
     */
    setSubtitleFontName(fontName: string): void
    /**
     * Set the subtitles track to play. `index_` is the index of the stream
     * in the list returned by clutter_gst_playback_get_subtitle_tracks().
     * 
     * If `index_` is -1, the subtitles are turned off.
     * @param index the index of the subtitles track
     */
    setSubtitleTrack(index: number): void
    /**
     * Sets the location of a subtitle file to display while playing `self`.
     * @param uri the URI of a subtitle file
     */
    setSubtitleUri(uri: string): void
    /**
     * Sets the URI of `self` to `uri`.
     * @param uri the URI of the media stream
     */
    setUri(uri: string): void
    /**
     * Sets the user agent to use when streaming.
     * 
     * When streaming content, you might want to set a custom user agent, eg. to
     * promote your software, make it appear in statistics or because the server
     * requires a special user agent you want to impersonate.
     * @param userAgent the user agent
     */
    setUserAgent(userAgent: string): void

    // Own signals of ClutterGst-3.0.ClutterGst.Playback

    connect(sigName: "should-buffer", callback: Playback_ShouldBufferSignalCallback): number
    on(sigName: "should-buffer", callback: Playback_ShouldBufferSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "should-buffer", callback: Playback_ShouldBufferSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "should-buffer", callback: Playback_ShouldBufferSignalCallback): NodeJS.EventEmitter
    emit(sigName: "should-buffer", ...args: any[]): void

    // Class property signals of ClutterGst-3.0.ClutterGst.Playback

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
    connect(sigName: "notify::in-seek", callback: (...args: any[]) => void): number
    on(sigName: "notify::in-seek", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::in-seek", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::in-seek", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::in-seek", ...args: any[]): void
    connect(sigName: "notify::progress", callback: (...args: any[]) => void): number
    on(sigName: "notify::progress", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::progress", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::progress", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::progress", ...args: any[]): void
    connect(sigName: "notify::seek-flags", callback: (...args: any[]) => void): number
    on(sigName: "notify::seek-flags", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::seek-flags", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::seek-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::seek-flags", ...args: any[]): void
    connect(sigName: "notify::subtitle-font-name", callback: (...args: any[]) => void): number
    on(sigName: "notify::subtitle-font-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::subtitle-font-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::subtitle-font-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::subtitle-font-name", ...args: any[]): void
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
    connect(sigName: "notify::idle", callback: (...args: any[]) => void): number
    on(sigName: "notify::idle", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::idle", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::idle", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::idle", ...args: any[]): void
    connect(sigName: "notify::playing", callback: (...args: any[]) => void): number
    on(sigName: "notify::playing", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::playing", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::playing", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::playing", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
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

    updatePriority?: number | null
}

/**
 * Signal callback interface for `new-frame`
 */
interface VideoSink_NewFrameSignalCallback {
    (): void
}

/**
 * Signal callback interface for `new-overlays`
 */
interface VideoSink_NewOverlaysSignalCallback {
    (): void
}

/**
 * Signal callback interface for `pipeline-ready`
 */
interface VideoSink_PipelineReadySignalCallback {
    (): void
}

interface VideoSink extends GstVideo.ColorBalance, GstVideo.Navigation {

    // Own properties of ClutterGst-3.0.ClutterGst.VideoSink

    updatePriority: number

    // Conflicting properties

    element: any
    object: any

    // Owm methods of ClutterGst-3.0.ClutterGst.VideoSink

    /**
     * Returns a #ClutterGstFrame object suitable to render the current
     * frame of the given video sink. An application is free to make a
     * copy of this pipeline and modify it for custom rendering.
     */
    getFrame(): Frame
    getOverlays(): Overlays
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
    isReady(): boolean

    // Conflicting methods

    getValue(...args: any[]): any
    ref(...args: any[]): any
    sendEvent(...args: any[]): any
    vfuncSendEvent(...args: any[]): any

    // Own signals of ClutterGst-3.0.ClutterGst.VideoSink

    connect(sigName: "new-frame", callback: VideoSink_NewFrameSignalCallback): number
    on(sigName: "new-frame", callback: VideoSink_NewFrameSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "new-frame", callback: VideoSink_NewFrameSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "new-frame", callback: VideoSink_NewFrameSignalCallback): NodeJS.EventEmitter
    emit(sigName: "new-frame", ...args: any[]): void
    connect(sigName: "new-overlays", callback: VideoSink_NewOverlaysSignalCallback): number
    on(sigName: "new-overlays", callback: VideoSink_NewOverlaysSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "new-overlays", callback: VideoSink_NewOverlaysSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "new-overlays", callback: VideoSink_NewOverlaysSignalCallback): NodeJS.EventEmitter
    emit(sigName: "new-overlays", ...args: any[]): void
    connect(sigName: "pipeline-ready", callback: VideoSink_PipelineReadySignalCallback): number
    on(sigName: "pipeline-ready", callback: VideoSink_PipelineReadySignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "pipeline-ready", callback: VideoSink_PipelineReadySignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "pipeline-ready", callback: VideoSink_PipelineReadySignalCallback): NodeJS.EventEmitter
    emit(sigName: "pipeline-ready", ...args: any[]): void

    // Class property signals of ClutterGst-3.0.ClutterGst.VideoSink

    connect(sigName: "notify::update-priority", callback: (...args: any[]) => void): number
    on(sigName: "notify::update-priority", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::update-priority", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::update-priority", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::update-priority", ...args: any[]): void
    connect(sigName: "notify::show-preroll-frame", callback: (...args: any[]) => void): number
    on(sigName: "notify::show-preroll-frame", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::show-preroll-frame", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::show-preroll-frame", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::show-preroll-frame", ...args: any[]): void
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
    connect(sigName: "notify::enable-last-sample", callback: (...args: any[]) => void): number
    on(sigName: "notify::enable-last-sample", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::enable-last-sample", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::enable-last-sample", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::enable-last-sample", ...args: any[]): void
    connect(sigName: "notify::last-sample", callback: (...args: any[]) => void): number
    on(sigName: "notify::last-sample", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::last-sample", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::last-sample", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::last-sample", ...args: any[]): void
    connect(sigName: "notify::max-bitrate", callback: (...args: any[]) => void): number
    on(sigName: "notify::max-bitrate", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::max-bitrate", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::max-bitrate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::max-bitrate", ...args: any[]): void
    connect(sigName: "notify::max-lateness", callback: (...args: any[]) => void): number
    on(sigName: "notify::max-lateness", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::max-lateness", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::max-lateness", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::max-lateness", ...args: any[]): void
    connect(sigName: "notify::processing-deadline", callback: (...args: any[]) => void): number
    on(sigName: "notify::processing-deadline", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::processing-deadline", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::processing-deadline", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::processing-deadline", ...args: any[]): void
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
    connect(sigName: "notify::stats", callback: (...args: any[]) => void): number
    on(sigName: "notify::stats", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::stats", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::stats", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::stats", ...args: any[]): void
    connect(sigName: "notify::sync", callback: (...args: any[]) => void): number
    on(sigName: "notify::sync", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::sync", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::sync", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::sync", ...args: any[]): void
    connect(sigName: "notify::throttle-time", callback: (...args: any[]) => void): number
    on(sigName: "notify::throttle-time", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::throttle-time", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::throttle-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::throttle-time", ...args: any[]): void
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
    getHeight(): number
    /**
     * Retrieves the width of the `box`
     */
    getWidth(): number
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

    readyForCapture: (self: Camera, ready: boolean) => void
    photoSaved: (self: Camera) => void
    photoTaken: (self: Camera, pixbuf: GdkPixbuf.Pixbuf) => void
    videoSaved: (self: Camera) => void
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

    captureResolutionChanged: (device: CameraDevice, width: number, height: number) => void
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

    hasPaintingContent: (self: Content) => boolean
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

    shouldBuffer: (self: Playback, query: Gst.Query) => boolean
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

    getFrame: (self: Player) => Frame
    getPipeline: (self: Player) => Gst.Element
    getVideoSink: (self: Player) => VideoSink
    getIdle: (self: Player) => boolean
    getAudioVolume: (self: Player) => number
    setAudioVolume: (self: Player, volume: number) => void
    getPlaying: (self: Player) => boolean
    setPlaying: (self: Player, playing: boolean) => void
    newFrame: (self: Player, frame: Frame) => void
    ready: (self: Player) => void
    eos: (self: Player) => void
    error: (self: Player, error: GLib.Error) => void
    sizeChange: (self: Player, width: number, height: number) => void
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
    parN: number
    parD: number
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

    newFrame: (sink: VideoSink) => void
    pipelineReady: (sink: VideoSink) => void
    newOverlays: (sink: VideoSink) => void
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