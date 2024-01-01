
/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './node-cheese-3.0-import.d.ts';
    
/**
 * Cheese-3.0
 */

import type Gst from '@girs/node-gst-1.0';
import type GObject from '@girs/node-gobject-2.0';
import type GLib from '@girs/node-glib-2.0';
import type GModule from '@girs/node-gmodule-2.0';
import type GdkPixbuf from '@girs/node-gdkpixbuf-2.0';
import type Gio from '@girs/node-gio-2.0';
import type Clutter from '@girs/node-clutter-1.0';
import type cairo from '@girs/node-cairo-1.0';
import type Json from '@girs/node-json-1.0';
import type GL from '@girs/node-gl-1.0';
import type CoglPango from '@girs/node-coglpango-1.0';
import type PangoCairo from '@girs/node-pangocairo-1.0';
import type Pango from '@girs/node-pango-1.0';
import type HarfBuzz from '@girs/node-harfbuzz-0.0';
import type freetype2 from '@girs/node-freetype2-2.0';
import type Cogl from '@girs/node-cogl-1.0';
import type Atk from '@girs/node-atk-1.0';

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
module Camera {

    // Signal callback interfaces

    /**
     * Signal callback interface for `photo-saved`
     */
    interface PhotoSavedSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `photo-taken`
     */
    interface PhotoTakenSignalCallback {
        (pixbuf: GdkPixbuf.Pixbuf): void
    }

    /**
     * Signal callback interface for `state-flags-changed`
     */
    interface StateFlagsChangedSignalCallback {
        (state: number): void
    }

    /**
     * Signal callback interface for `video-saved`
     */
    interface VideoSavedSignalCallback {
        (): void
    }


    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

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
        videoTexture?: any | null
    }

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
    videoTexture: any
    __gtype__: number

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
     * @returns %TRUE if the operation was successful, %FALSE otherwise
     */
    getBalancePropertyRange(property: string): [ /* returnType */ boolean, /* min */ number, /* max */ number, /* def */ number ]
    /**
     * Get the list of #CheeseCameraDevice objects, representing active video
     * capture devices on the system.
     * @returns an array of #CheeseCameraDevice
     */
    getCameraDevices(): CameraDevice[]
    /**
     * Get the #CheeseVideoFormat that is currently set on the `camera`.
     * @returns the #CheeseVideoFormat set on the #CheeseCamera
     */
    getCurrentVideoFormat(): VideoFormat
    /**
     * Get a string representation of the playing time
     * of the current video recording
     * @returns A string with the time representation.
     */
    getRecordedTime(): string | null
    /**
     * Get the currently-selected #CheeseCameraDevice of the `camera`.
     * @returns a #CheeseCameraDevice, or %NULL if there is no selected device
     */
    getSelectedDevice(): CameraDevice
    /**
     * Gets the list of #CheeseVideoFormat supported by the selected
     * #CheeseCameraDevice on the `camera`.
     * @returns a #GList of #CheeseVideoFormat, or %NULL if there was no device selected
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
     * @returns %TRUE on success, %FALSE if an error occurred
     */
    takePhoto(filename: string): boolean
    /**
     * Take a photo with the `camera` and emit it in the ::capture-start signal as a
     * #GdkPixbuf.
     * @returns %TRUE if the photo was successfully captured, %FALSE otherwise
     */
    takePhotoPixbuf(): boolean
    /**
     * Control whether the effects pipeline is enabled for `camera`.
     * @param active %TRUE if effects pipeline is active, %FALSE otherwise
     */
    toggleEffectsPipeline(active: boolean): void

    // Own virtual methods of Cheese-3.0.Cheese.Camera

    photoSaved(): void
    photoTaken(pixbuf: GdkPixbuf.Pixbuf): void
    stateFlagsChanged(newState: Gst.State): void
    videoSaved(): void

    // Own signals of Cheese-3.0.Cheese.Camera

    connect(sigName: "photo-saved", callback: Camera.PhotoSavedSignalCallback): number
    on(sigName: "photo-saved", callback: Camera.PhotoSavedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "photo-saved", callback: Camera.PhotoSavedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "photo-saved", callback: Camera.PhotoSavedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "photo-saved", ...args: any[]): void
    connect(sigName: "photo-taken", callback: Camera.PhotoTakenSignalCallback): number
    on(sigName: "photo-taken", callback: Camera.PhotoTakenSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "photo-taken", callback: Camera.PhotoTakenSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "photo-taken", callback: Camera.PhotoTakenSignalCallback): NodeJS.EventEmitter
    emit(sigName: "photo-taken", ...args: any[]): void
    connect(sigName: "state-flags-changed", callback: Camera.StateFlagsChangedSignalCallback): number
    on(sigName: "state-flags-changed", callback: Camera.StateFlagsChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "state-flags-changed", callback: Camera.StateFlagsChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "state-flags-changed", callback: Camera.StateFlagsChangedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "state-flags-changed", ...args: any[]): void
    connect(sigName: "video-saved", callback: Camera.VideoSavedSignalCallback): number
    on(sigName: "video-saved", callback: Camera.VideoSavedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "video-saved", callback: Camera.VideoSavedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "video-saved", callback: Camera.VideoSavedSignalCallback): NodeJS.EventEmitter
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
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * Use the accessor functions below.
 * @class 
 */
class Camera extends GObject.Object {

    // Own properties of Cheese-3.0.Cheese.Camera

    static name: string

    // Constructors of Cheese-3.0.Cheese.Camera

    constructor(config?: Camera.ConstructorProperties) 
    /**
     * Create a new #CheeseCamera object.
     * @constructor 
     * @param videoTexture an actor in which to render the video
     * @param name the name of the device
     * @param xResolution the resolution width
     * @param yResolution the resolution height
     * @returns a new #CheeseCamera
     */
    constructor(videoTexture: Clutter.Actor, name: string | null, xResolution: number, yResolution: number) 
    /**
     * Create a new #CheeseCamera object.
     * @constructor 
     * @param videoTexture an actor in which to render the video
     * @param name the name of the device
     * @param xResolution the resolution width
     * @param yResolution the resolution height
     * @returns a new #CheeseCamera
     */
    static new(videoTexture: Clutter.Actor, name: string | null, xResolution: number, yResolution: number): Camera
    _init(config?: Camera.ConstructorProperties): void
}

module CameraDevice {

    // Constructor properties interface

    interface ConstructorProperties extends Gio.Initable.ConstructorProperties, GObject.Object.ConstructorProperties {

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
    readonly name: string | null
    /**
     * Path of the video capture device.
     */
    readonly path: string | null
    __gtype__: number

    // Owm methods of Cheese-3.0.Cheese.CameraDevice

    /**
     * Get the #CheeseVideoFormat with the highest resolution with a width greater
     * than 640 pixels and a framerate of greater than 15 FPS for this `device`. If
     * no such format is found, get the highest available resolution instead.
     * @returns the highest-resolution supported #CheeseVideoFormat
     */
    getBestFormat(): VideoFormat
    /**
     * Get the #GstCaps for the given `format` on the `device`.
     * @param format a #CheeseVideoFormat
     * @returns the #GstCaps for the given @format
     */
    getCapsForFormat(format: VideoFormat): Gst.Caps
    /**
     * Get the sorted list of #CheeseVideoFormat that the `device` supports.
     * @returns list of #CheeseVideoFormat
     */
    getFormatList(): VideoFormat[]
    /**
     * Get a human-readable name for the device, as reported by udev, which is
     * suitable for display to a user.
     * @returns the human-readable name of the video capture device
     */
    getName(): string
    /**
     * Get path for the device, as reported by udev.
     * @returns the path of the video capture device
     */
    getPath(): string
    /**
     * Get the source GStreamer element for the `device`.
     * @returns the source GStreamer element
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
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * Use the accessor functions below.
 * @class 
 */
class CameraDevice extends GObject.Object {

    // Own properties of Cheese-3.0.Cheese.CameraDevice

    static name: string

    // Constructors of Cheese-3.0.Cheese.CameraDevice

    constructor(config?: CameraDevice.ConstructorProperties) 
    /**
     * Tries to create a new #CheeseCameraDevice with the supplied device. If
     * construction fails, %NULL is returned, and `error` is set.
     * @constructor 
     * @param device The GStreamer the device, as supplied by GstDeviceMonitor
     * @returns a new #CheeseCameraDevice, or %NULL
     */
    constructor(device: Gst.Device) 
    /**
     * Tries to create a new #CheeseCameraDevice with the supplied device. If
     * construction fails, %NULL is returned, and `error` is set.
     * @constructor 
     * @param device The GStreamer the device, as supplied by GstDeviceMonitor
     * @returns a new #CheeseCameraDevice, or %NULL
     */
    static new(device: Gst.Device): CameraDevice
    _init(config?: CameraDevice.ConstructorProperties): void
    /**
     * Get the #GstCaps that are supported for all #CheeseCameraDevice
     * @returns the #GstCaps
     */
    static supportedFormatCaps(): Gst.Caps
}

module CameraDeviceMonitor {

    // Signal callback interfaces

    /**
     * Signal callback interface for `added`
     */
    interface AddedSignalCallback {
        (device: CameraDevice): void
    }

    /**
     * Signal callback interface for `removed`
     */
    interface RemovedSignalCallback {
        (device: CameraDevice): void
    }


    // Constructor properties interface

    interface ConstructorProperties extends Gio.AsyncInitable.ConstructorProperties, Gio.Initable.ConstructorProperties, GObject.Object.ConstructorProperties {
    }

}

interface CameraDeviceMonitor extends Gio.AsyncInitable, Gio.Initable {

    // Own properties of Cheese-3.0.Cheese.CameraDeviceMonitor

    __gtype__: number

    // Owm methods of Cheese-3.0.Cheese.CameraDeviceMonitor

    /**
     * Enumerate plugged in cameras and emit ::added for those which already exist.
     * This is only required when your program starts, so be sure to connect to
     * at least the ::added signal before calling this function.
     */
    coldplug(): void

    // Own virtual methods of Cheese-3.0.Cheese.CameraDeviceMonitor

    added(device: CameraDevice): void
    removed(device: CameraDevice): void

    // Own signals of Cheese-3.0.Cheese.CameraDeviceMonitor

    connect(sigName: "added", callback: CameraDeviceMonitor.AddedSignalCallback): number
    on(sigName: "added", callback: CameraDeviceMonitor.AddedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "added", callback: CameraDeviceMonitor.AddedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "added", callback: CameraDeviceMonitor.AddedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "added", ...args: any[]): void
    connect(sigName: "removed", callback: CameraDeviceMonitor.RemovedSignalCallback): number
    on(sigName: "removed", callback: CameraDeviceMonitor.RemovedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "removed", callback: CameraDeviceMonitor.RemovedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "removed", callback: CameraDeviceMonitor.RemovedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "removed", ...args: any[]): void

    // Class property signals of Cheese-3.0.Cheese.CameraDeviceMonitor

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * Use the accessor functions below.
 * @class 
 */
class CameraDeviceMonitor extends GObject.Object {

    // Own properties of Cheese-3.0.Cheese.CameraDeviceMonitor

    static name: string

    // Constructors of Cheese-3.0.Cheese.CameraDeviceMonitor

    constructor(config?: CameraDeviceMonitor.ConstructorProperties) 
    /**
     * Returns a new #CheeseCameraDeviceMonitor object. The initialization may block.
     * See cheese_camera_device_monitor_new_async() for the asynchronous version.
     * @constructor 
     * @returns a new #CheeseCameraDeviceMonitor object.
     */
    constructor() 
    /**
     * Returns a new #CheeseCameraDeviceMonitor object. The initialization may block.
     * See cheese_camera_device_monitor_new_async() for the asynchronous version.
     * @constructor 
     * @returns a new #CheeseCameraDeviceMonitor object.
     */
    static new(): CameraDeviceMonitor
    /**
     * Finishes creating a new #CheeseCameraDeviceMonitor object.
     * @constructor 
     * @param result the GAsyncResult from the callback
     * @returns a new #CheeseCameraDeviceMonitor object or NULL if error is set.
     */
    static newFinish(result: Gio.AsyncResult): CameraDeviceMonitor
    _init(config?: CameraDeviceMonitor.ConstructorProperties): void
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

module Effect {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

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
    readonly name: string | null
    /**
     * Description of the GStreamer pipeline associated with the effect.
     */
    readonly pipelineDesc: string | null
    __gtype__: number

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
     * @returns the human-readable name of the effect.
     */
    getName(): string
    /**
     * Get the Gstreamer pipeline description of the `effect`.
     * @returns the Gstreamer pipeline description of the effect.
     */
    getPipelineDesc(): string
    /**
     * Get whether the `effect` is connected to a video stream, for previews.
     * @returns %TRUE if the preview is connected, %FALSE otherwise.
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
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * Use the accessor functions below.
 * @class 
 */
class Effect extends GObject.Object {

    // Own properties of Cheese-3.0.Cheese.Effect

    static name: string

    // Constructors of Cheese-3.0.Cheese.Effect

    constructor(config?: Effect.ConstructorProperties) 
    /**
     * Create a new #CheeseEffect.
     * @constructor 
     * @param name name of the effect
     * @param pipelineDesc GStreamer pipeline of the new effect
     * @returns a new #CheeseEffect
     */
    constructor(name: string, pipelineDesc: string) 
    /**
     * Create a new #CheeseEffect.
     * @constructor 
     * @param name name of the effect
     * @param pipelineDesc GStreamer pipeline of the new effect
     * @returns a new #CheeseEffect
     */
    static new(name: string, pipelineDesc: string): Effect
    _init(config?: Effect.ConstructorProperties): void
    /**
     * Load effects from standard directories, including the user's data directory.
     * @returns a list of #CheeseEffect, or %NULL if no effects could be found
     */
    static loadEffects(): Effect[]
    /**
     * Load effect from file.
     * @param filename name of the file containing the effect specification
     * @returns a #CheeseEffect, or %NULL on error
     */
    static loadFromFile(filename: string): Effect
}

module FileUtil {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface FileUtil {

    // Own properties of Cheese-3.0.Cheese.FileUtil

    __gtype__: number

    // Owm methods of Cheese-3.0.Cheese.FileUtil

    /**
     * Creates a filename for one of the three media types: photo, photo burst or
     * video. If a filename for a photo burst image was previously created, this
     * function increments the burst count automatically. To start a new burst,
     * first call cheese_fileutil_reset_burst().
     * @param mode the type of media to create a filename for
     * @returns a new filename
     */
    getNewMediaFilename(mode: MediaMode): string
    /**
     * Get the path where Cheese photo files are stored.
     * @returns the Cheese photo path
     */
    getPhotoPath(): string
    /**
     * Get the path where Cheese video files are stored.
     * @returns the Cheese video path
     */
    getVideoPath(): string
    /**
     * Resets the burst counter, so that calling
     * cheese_fileutil_get_new_media_filename() with a photo burst starts a new
     * burst of photos.
     */
    resetBurst(): void

    // Class property signals of Cheese-3.0.Cheese.FileUtil

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * Use the accessor functions below.
 * @class 
 */
class FileUtil extends GObject.Object {

    // Own properties of Cheese-3.0.Cheese.FileUtil

    static name: string

    // Constructors of Cheese-3.0.Cheese.FileUtil

    constructor(config?: FileUtil.ConstructorProperties) 
    /**
     * Create a new #CheeseFileUtil object.
     * @constructor 
     * @returns a new #CheeseFileUtil
     */
    constructor() 
    /**
     * Create a new #CheeseFileUtil object.
     * @constructor 
     * @returns a new #CheeseFileUtil
     */
    static new(): FileUtil
    _init(config?: FileUtil.ConstructorProperties): void
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
// END