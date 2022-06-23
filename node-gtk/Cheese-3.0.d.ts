// @ts-nocheck

/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * Cheese-3.0
 */

import type Gst from './Gst-1.0';
import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';
import type GModule from './GModule-2.0';
import type GdkPixbuf from './GdkPixbuf-2.0';
import type Gio from './Gio-2.0';
import type Clutter from './Clutter-1.0';
import type cairo from './cairo-1.0';
import type Json from './Json-1.0';
import type GL from './GL-1.0';
import type CoglPango from './CoglPango-1.0';
import type PangoCairo from './PangoCairo-1.0';
import type Pango from './Pango-1.0';
import type HarfBuzz from './HarfBuzz-0.0';
import type Cogl from './Cogl-1.0';
import type Atk from './Atk-1.0';

export namespace Cheese {

/**
 * Errors that can occur during camera setup, when calling
 * cheese_camera_setup().
 */
enum CameraError {
    /**
     * unknown error
     */
    UNKNOWN,
    /**
     * a required GStreamer element was not
     * found
     */
    ELEMENT_NOT_FOUND,
    /**
     * a #CheeseCameraDevice was not found
     */
    NO_DEVICE,
}
/**
 * The media type, used for generating filenames with
 * cheese_fileutil_get_new_media_filename().
 */
enum MediaMode {
    /**
     * photo
     */
    PHOTO,
    /**
     * video
     */
    VIDEO,
    /**
     * a burst of photos
     */
    BURST,
}
/**
 * The filename suffix for photos saved by Cheese.
 */
const PHOTO_NAME_SUFFIX: string
/**
 * The filename suffix for videos saved by Cheese.
 */
const VIDEO_NAME_SUFFIX: string
interface Camera_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of Cheese-3.0.Cheese.Camera

    /**
     * The device object to capture from.
     */
    device?: CameraDevice | null
    /**
     * The format of the video capture device.
     */
    format?: VideoFormat | null
    /**
     * The video texture for the #CheeseCamera to render into.
     */
    videoTexture?: object | null
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
 * Signal callback interface for `state-flags-changed`
 */
interface Camera_StateFlagsChangedSignalCallback {
    (state: number): void
}

/**
 * Signal callback interface for `video-saved`
 */
interface Camera_VideoSavedSignalCallback {
    (): void
}

interface Camera {

    // Own properties of Cheese-3.0.Cheese.Camera

    /**
     * The device object to capture from.
     */
    device: CameraDevice
    /**
     * The format of the video capture device.
     */
    format: VideoFormat
    /**
     * The currently number of camera devices available for being used.
     */
    readonly numCameraDevices: number
    /**
     * The video texture for the #CheeseCamera to render into.
     */
    videoTexture: object

    // Owm methods of Cheese-3.0.Cheese.Camera

    /**
     * Connect the supplied `texture` to the `camera,` using `effect`.
     * @param effect a #CheeseEffect
     * @param texture a #ClutterActor
     */
    connectEffectTexture(effect: Effect, texture: Clutter.Actor): void
    /**
     * Get the minimum, maximum and default values for the requested `property` of
     * the `camera`.
     * @param property name of the balance property
     */
    getBalancePropertyRange(property: string): [ /* returnType */ boolean, /* min */ number, /* max */ number, /* def */ number ]
    /**
     * Get the list of #CheeseCameraDevice objects, representing active video
     * capture devices on the system.
     */
    getCameraDevices(): CameraDevice[]
    /**
     * Get the #CheeseVideoFormat that is currently set on the `camera`.
     */
    getCurrentVideoFormat(): VideoFormat
    /**
     * Get a string representation of the playing time
     * of the current video recording
     */
    getRecordedTime(): string
    /**
     * Get the currently-selected #CheeseCameraDevice of the `camera`.
     */
    getSelectedDevice(): CameraDevice
    /**
     * Gets the list of #CheeseVideoFormat supported by the selected
     * #CheeseCameraDevice on the `camera`.
     */
    getVideoFormats(): VideoFormat[]
    /**
     * Set the state of the GStreamer pipeline associated with the #CheeseCamera to
     * playing.
     */
    play(): void
    /**
     * Set the requested `property` on the `camera` to `value`.
     * @param property name of the balance property
     * @param value value to be set
     */
    setBalanceProperty(property: string, value: number): void
    /**
     * Set the active video capture device of the `camera`.
     * @param device the device object
     */
    setDevice(device: CameraDevice): void
    /**
     * Set the `effect` on the `camera`.
     * @param effect a #CheeseEffect
     */
    setEffect(effect: Effect): void
    /**
     * Sets a #CheeseVideoFormat on a #CheeseCamera, restarting the video stream if
     * necessary.
     * @param format a #CheeseVideoFormat
     */
    setVideoFormat(format: VideoFormat): void
    /**
     * Setup a video capture device.
     * @param device the video capture device, or %NULL
     */
    setup(device: CameraDevice | null): void
    /**
     * Start a video recording with the `camera` and save it to `filename`.
     * @param filename the name of the video file to where the recording will be saved
     */
    startVideoRecording(filename: string): void
    /**
     * Set the state of the GStreamer pipeline associated with the #CheeseCamera to
     * NULL.
     */
    stop(): void
    /**
     * Stop recording video on the `camera`.
     */
    stopVideoRecording(): void
    /**
     * Toggle the playing/recording state of the `camera`.
     */
    switchCameraDevice(): void
    /**
     * Save a photo taken with the `camera` to a new file at `filename`.
     * @param filename name of the file to save a photo to
     */
    takePhoto(filename: string): boolean
    /**
     * Take a photo with the `camera` and emit it in the ::capture-start signal as a
     * #GdkPixbuf.
     */
    takePhotoPixbuf(): boolean
    /**
     * Control whether the effects pipeline is enabled for `camera`.
     * @param active %TRUE if effects pipeline is active, %FALSE otherwise
     */
    toggleEffectsPipeline(active: boolean): void

    // Own signals of Cheese-3.0.Cheese.Camera

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
    connect(sigName: "state-flags-changed", callback: Camera_StateFlagsChangedSignalCallback): number
    on(sigName: "state-flags-changed", callback: Camera_StateFlagsChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "state-flags-changed", callback: Camera_StateFlagsChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "state-flags-changed", callback: Camera_StateFlagsChangedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "state-flags-changed", ...args: any[]): void
    connect(sigName: "video-saved", callback: Camera_VideoSavedSignalCallback): number
    on(sigName: "video-saved", callback: Camera_VideoSavedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "video-saved", callback: Camera_VideoSavedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "video-saved", callback: Camera_VideoSavedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "video-saved", ...args: any[]): void

    // Class property signals of Cheese-3.0.Cheese.Camera

    connect(sigName: "notify::device", callback: (...args: any[]) => void): number
    on(sigName: "notify::device", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::device", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::device", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::device", ...args: any[]): void
    connect(sigName: "notify::format", callback: (...args: any[]) => void): number
    on(sigName: "notify::format", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::format", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::format", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::format", ...args: any[]): void
    connect(sigName: "notify::num-camera-devices", callback: (...args: any[]) => void): number
    on(sigName: "notify::num-camera-devices", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::num-camera-devices", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::num-camera-devices", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::num-camera-devices", ...args: any[]): void
    connect(sigName: "notify::video-texture", callback: (...args: any[]) => void): number
    on(sigName: "notify::video-texture", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::video-texture", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::video-texture", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::video-texture", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

/**
 * Use the accessor functions below.
 * @class 
 */
class Camera extends GObject.Object {

    // Own properties of Cheese-3.0.Cheese.Camera

    static name: string
    static $gtype: GObject.GType<Camera>

    // Constructors of Cheese-3.0.Cheese.Camera

    constructor(config?: Camera_ConstructProps) 
    /**
     * Create a new #CheeseCamera object.
     * @constructor 
     * @param videoTexture an actor in which to render the video
     * @param name the name of the device
     * @param xResolution the resolution width
     * @param yResolution the resolution height
     */
    constructor(videoTexture: Clutter.Actor, name: string | null, xResolution: number, yResolution: number) 
    /**
     * Create a new #CheeseCamera object.
     * @constructor 
     * @param videoTexture an actor in which to render the video
     * @param name the name of the device
     * @param xResolution the resolution width
     * @param yResolution the resolution height
     */
    static new(videoTexture: Clutter.Actor, name: string | null, xResolution: number, yResolution: number): Camera
    _init(config?: Camera_ConstructProps): void
}

interface CameraDevice_ConstructProps extends Gio.Initable_ConstructProps, GObject.Object_ConstructProps {

    // Own constructor properties of Cheese-3.0.Cheese.CameraDevice

    /**
     * GStreamer device object of the video capture device.
     */
    device?: Gst.Device | null
    /**
     * Human-readable name of the video capture device, for display to the user.
     */
    name?: string | null
    /**
     * Path of the video capture device.
     */
    path?: string | null
}

interface CameraDevice extends Gio.Initable {

    // Own properties of Cheese-3.0.Cheese.CameraDevice

    /**
     * GStreamer device object of the video capture device.
     */
    readonly device: Gst.Device
    /**
     * Human-readable name of the video capture device, for display to the user.
     */
    readonly name: string
    /**
     * Path of the video capture device.
     */
    readonly path: string

    // Owm methods of Cheese-3.0.Cheese.CameraDevice

    /**
     * Get the #CheeseVideoFormat with the highest resolution with a width greater
     * than 640 pixels and a framerate of greater than 15 FPS for this `device`. If
     * no such format is found, get the highest available resolution instead.
     */
    getBestFormat(): VideoFormat
    /**
     * Get the #GstCaps for the given `format` on the `device`.
     * @param format a #CheeseVideoFormat
     */
    getCapsForFormat(format: VideoFormat): Gst.Caps
    /**
     * Get the sorted list of #CheeseVideoFormat that the `device` supports.
     */
    getFormatList(): VideoFormat[]
    /**
     * Get a human-readable name for the device, as reported by udev, which is
     * suitable for display to a user.
     */
    getName(): string
    /**
     * Get path for the device, as reported by udev.
     */
    getPath(): string
    /**
     * Get the source GStreamer element for the `device`.
     */
    getSrc(): Gst.Element

    // Class property signals of Cheese-3.0.Cheese.CameraDevice

    connect(sigName: "notify::device", callback: (...args: any[]) => void): number
    on(sigName: "notify::device", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::device", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::device", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::device", ...args: any[]): void
    connect(sigName: "notify::name", callback: (...args: any[]) => void): number
    on(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::path", callback: (...args: any[]) => void): number
    on(sigName: "notify::path", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::path", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::path", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

/**
 * Use the accessor functions below.
 * @class 
 */
class CameraDevice extends GObject.Object {

    // Own properties of Cheese-3.0.Cheese.CameraDevice

    static name: string
    static $gtype: GObject.GType<CameraDevice>

    // Constructors of Cheese-3.0.Cheese.CameraDevice

    constructor(config?: CameraDevice_ConstructProps) 
    /**
     * Tries to create a new #CheeseCameraDevice with the supplied device. If
     * construction fails, %NULL is returned, and `error` is set.
     * @constructor 
     * @param device The GStreamer the device, as supplied by GstDeviceMonitor
     */
    constructor(device: Gst.Device) 
    /**
     * Tries to create a new #CheeseCameraDevice with the supplied device. If
     * construction fails, %NULL is returned, and `error` is set.
     * @constructor 
     * @param device The GStreamer the device, as supplied by GstDeviceMonitor
     */
    static new(device: Gst.Device): CameraDevice
    _init(config?: CameraDevice_ConstructProps): void
    /**
     * Get the #GstCaps that are supported for all #CheeseCameraDevice
     */
    static supportedFormatCaps(): Gst.Caps
}

interface CameraDeviceMonitor_ConstructProps extends Gio.AsyncInitable_ConstructProps, Gio.Initable_ConstructProps, GObject.Object_ConstructProps {
}

/**
 * Signal callback interface for `added`
 */
interface CameraDeviceMonitor_AddedSignalCallback {
    (device: CameraDevice): void
}

/**
 * Signal callback interface for `removed`
 */
interface CameraDeviceMonitor_RemovedSignalCallback {
    (device: CameraDevice): void
}

interface CameraDeviceMonitor extends Gio.AsyncInitable, Gio.Initable {

    // Owm methods of Cheese-3.0.Cheese.CameraDeviceMonitor

    /**
     * Enumerate plugged in cameras and emit ::added for those which already exist.
     * This is only required when your program starts, so be sure to connect to
     * at least the ::added signal before calling this function.
     */
    coldplug(): void

    // Own signals of Cheese-3.0.Cheese.CameraDeviceMonitor

    connect(sigName: "added", callback: CameraDeviceMonitor_AddedSignalCallback): number
    on(sigName: "added", callback: CameraDeviceMonitor_AddedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "added", callback: CameraDeviceMonitor_AddedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "added", callback: CameraDeviceMonitor_AddedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "added", ...args: any[]): void
    connect(sigName: "removed", callback: CameraDeviceMonitor_RemovedSignalCallback): number
    on(sigName: "removed", callback: CameraDeviceMonitor_RemovedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "removed", callback: CameraDeviceMonitor_RemovedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "removed", callback: CameraDeviceMonitor_RemovedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "removed", ...args: any[]): void

    // Class property signals of Cheese-3.0.Cheese.CameraDeviceMonitor

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

/**
 * Use the accessor functions below.
 * @class 
 */
class CameraDeviceMonitor extends GObject.Object {

    // Own properties of Cheese-3.0.Cheese.CameraDeviceMonitor

    static name: string
    static $gtype: GObject.GType<CameraDeviceMonitor>

    // Constructors of Cheese-3.0.Cheese.CameraDeviceMonitor

    constructor(config?: CameraDeviceMonitor_ConstructProps) 
    /**
     * Returns a new #CheeseCameraDeviceMonitor object. The initialization may block.
     * See cheese_camera_device_monitor_new_async() for the asynchronous version.
     * @constructor 
     */
    constructor() 
    /**
     * Returns a new #CheeseCameraDeviceMonitor object. The initialization may block.
     * See cheese_camera_device_monitor_new_async() for the asynchronous version.
     * @constructor 
     */
    static new(): CameraDeviceMonitor
    /**
     * Finishes creating a new #CheeseCameraDeviceMonitor object.
     * @constructor 
     * @param result the GAsyncResult from the callback
     */
    static newFinish(result: Gio.AsyncResult): CameraDeviceMonitor
    _init(config?: CameraDeviceMonitor_ConstructProps): void
    /**
     * Creates a new #CheeseCameraDeviceMonitor object asynchronously. Callback
     * will be called when it is done. Use cheese_camera_device_monitor_new_finish()
     * to get the result.
     * 
     * See cheese_camera_device_monitor_new() for the synchronous version.
     * @param cancellable a #GCancellable or NULL
     * @param callback a GAsyncReadyCallback to call when the initialization is finished
     */
    static newAsync(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
}

interface Effect_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of Cheese-3.0.Cheese.Effect

    /**
     * If the control valve is active, then the effect is currently connected to
     * a video stream, for previews.
     */
    controlValve?: Gst.Element | null
    /**
     * Name of the effect, for display in a UI.
     */
    name?: string | null
    /**
     * Description of the GStreamer pipeline associated with the effect.
     */
    pipelineDesc?: string | null
}

interface Effect {

    // Own properties of Cheese-3.0.Cheese.Effect

    /**
     * If the control valve is active, then the effect is currently connected to
     * a video stream, for previews.
     */
    controlValve: Gst.Element
    /**
     * Name of the effect, for display in a UI.
     */
    readonly name: string
    /**
     * Description of the GStreamer pipeline associated with the effect.
     */
    readonly pipelineDesc: string

    // Owm methods of Cheese-3.0.Cheese.Effect

    /**
     * Disable the preview of a #CheeseEffect.
     */
    disablePreview(): void
    /**
     * Enable the preview of a #CheeseEffect.
     */
    enablePreview(): void
    /**
     * Get the human-readable name of the `effect`.
     */
    getName(): string
    /**
     * Get the Gstreamer pipeline description of the `effect`.
     */
    getPipelineDesc(): string
    /**
     * Get whether the `effect` is connected to a video stream, for previews.
     */
    isPreviewConnected(): boolean

    // Class property signals of Cheese-3.0.Cheese.Effect

    connect(sigName: "notify::control-valve", callback: (...args: any[]) => void): number
    on(sigName: "notify::control-valve", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::control-valve", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::control-valve", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::control-valve", ...args: any[]): void
    connect(sigName: "notify::name", callback: (...args: any[]) => void): number
    on(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::pipeline-desc", callback: (...args: any[]) => void): number
    on(sigName: "notify::pipeline-desc", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::pipeline-desc", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::pipeline-desc", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::pipeline-desc", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

/**
 * Use the accessor functions below.
 * @class 
 */
class Effect extends GObject.Object {

    // Own properties of Cheese-3.0.Cheese.Effect

    static name: string
    static $gtype: GObject.GType<Effect>

    // Constructors of Cheese-3.0.Cheese.Effect

    constructor(config?: Effect_ConstructProps) 
    /**
     * Create a new #CheeseEffect.
     * @constructor 
     * @param name name of the effect
     * @param pipelineDesc GStreamer pipeline of the new effect
     */
    constructor(name: string, pipelineDesc: string) 
    /**
     * Create a new #CheeseEffect.
     * @constructor 
     * @param name name of the effect
     * @param pipelineDesc GStreamer pipeline of the new effect
     */
    static new(name: string, pipelineDesc: string): Effect
    _init(config?: Effect_ConstructProps): void
    /**
     * Load effects from standard directories, including the user's data directory.
     */
    static loadEffects(): Effect[]
    /**
     * Load effect from file.
     * @param filename name of the file containing the effect specification
     */
    static loadFromFile(filename: string): Effect
}

interface FileUtil_ConstructProps extends GObject.Object_ConstructProps {
}

interface FileUtil {

    // Owm methods of Cheese-3.0.Cheese.FileUtil

    /**
     * Creates a filename for one of the three media types: photo, photo burst or
     * video. If a filename for a photo burst image was previously created, this
     * function increments the burst count automatically. To start a new burst,
     * first call cheese_fileutil_reset_burst().
     * @param mode the type of media to create a filename for
     */
    getNewMediaFilename(mode: MediaMode): string
    /**
     * Get the path where Cheese photo files are stored.
     */
    getPhotoPath(): string
    /**
     * Get the path where Cheese video files are stored.
     */
    getVideoPath(): string
    /**
     * Resets the burst counter, so that calling
     * cheese_fileutil_get_new_media_filename() with a photo burst starts a new
     * burst of photos.
     */
    resetBurst(): void

    // Class property signals of Cheese-3.0.Cheese.FileUtil

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

/**
 * Use the accessor functions below.
 * @class 
 */
class FileUtil extends GObject.Object {

    // Own properties of Cheese-3.0.Cheese.FileUtil

    static name: string
    static $gtype: GObject.GType<FileUtil>

    // Constructors of Cheese-3.0.Cheese.FileUtil

    constructor(config?: FileUtil_ConstructProps) 
    /**
     * Create a new #CheeseFileUtil object.
     * @constructor 
     */
    constructor() 
    /**
     * Create a new #CheeseFileUtil object.
     * @constructor 
     */
    static new(): FileUtil
    _init(config?: FileUtil_ConstructProps): void
}

interface CameraClass {

    // Own fields of Cheese-3.0.Cheese.CameraClass

    photoSaved: (camera: Camera) => void
    photoTaken: (camera: Camera, pixbuf: GdkPixbuf.Pixbuf) => void
    videoSaved: (camera: Camera) => void
    stateFlagsChanged: (camera: Camera, newState: Gst.State) => void
}

/**
 * Class for #CheeseCamera.
 * @record 
 */
abstract class CameraClass {

    // Own properties of Cheese-3.0.Cheese.CameraClass

    static name: string
}

interface CameraDeviceClass {

    // Own fields of Cheese-3.0.Cheese.CameraDeviceClass

    parentClass: GObject.ObjectClass
}

abstract class CameraDeviceClass {

    // Own properties of Cheese-3.0.Cheese.CameraDeviceClass

    static name: string
}

interface CameraDeviceMonitorClass {

    // Own fields of Cheese-3.0.Cheese.CameraDeviceMonitorClass

    added: (monitor: CameraDeviceMonitor, device: CameraDevice) => void
    removed: (monitor: CameraDeviceMonitor, device: CameraDevice) => void
}

/**
 * Class for #CheeseCameraDeviceMonitor.
 * @record 
 */
abstract class CameraDeviceMonitorClass {

    // Own properties of Cheese-3.0.Cheese.CameraDeviceMonitorClass

    static name: string
}

interface CameraDeviceMonitorPrivate {
}

class CameraDeviceMonitorPrivate {

    // Own properties of Cheese-3.0.Cheese.CameraDeviceMonitorPrivate

    static name: string
}

interface CameraPrivate {
}

class CameraPrivate {

    // Own properties of Cheese-3.0.Cheese.CameraPrivate

    static name: string
}

interface EffectClass {

    // Own fields of Cheese-3.0.Cheese.EffectClass

    parentClass: GObject.ObjectClass
}

abstract class EffectClass {

    // Own properties of Cheese-3.0.Cheese.EffectClass

    static name: string
}

interface FileUtilClass {

    // Own fields of Cheese-3.0.Cheese.FileUtilClass

    parentClass: GObject.ObjectClass
}

abstract class FileUtilClass {

    // Own properties of Cheese-3.0.Cheese.FileUtilClass

    static name: string
}

interface VideoFormat {

    // Own fields of Cheese-3.0.Cheese.VideoFormat

    /**
     * the width of of the video, in pixels
     * @field 
     */
    width: number
    /**
     * the height of the video, in pixels
     * @field 
     */
    height: number
}

/**
 * A description of the resolution, in pixels, of the format to capture with a
 * #CheeseCameraDevice.
 * @record 
 */
class VideoFormat {

    // Own properties of Cheese-3.0.Cheese.VideoFormat

    static name: string
}

}
export default Cheese;