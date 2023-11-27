
/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './cheese-3.0-ambient.d.ts';
import './cheese-3.0-import.d.ts';
/**
 * Cheese-3.0
 */

import type Gst from '@girs/gst-1.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type GModule from '@girs/gmodule-2.0';
import type GdkPixbuf from '@girs/gdkpixbuf-2.0';
import type Gio from '@girs/gio-2.0';
import type Clutter from '@girs/clutter-1.0';
import type cairo from '@girs/cairo-1.0';
import type Json from '@girs/json-1.0';
import type GL from '@girs/gl-1.0';
import type CoglPango from '@girs/coglpango-1.0';
import type PangoCairo from '@girs/pangocairo-1.0';
import type Pango from '@girs/pango-1.0';
import type HarfBuzz from '@girs/harfbuzz-0.0';
import type freetype2 from '@girs/freetype2-2.0';
import type Cogl from '@girs/cogl-1.0';
import type Atk from '@girs/atk-1.0';

/**
 * Errors that can occur during camera setup, when calling
 * cheese_camera_setup().
 */
export enum CameraError {
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
export enum MediaMode {
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
export const PHOTO_NAME_SUFFIX: string | null
/**
 * The filename suffix for videos saved by Cheese.
 */
export const VIDEO_NAME_SUFFIX: string | null
export module Camera {

    // Signal callback interfaces

    /**
     * Signal callback interface for `photo-saved`
     */
    export interface PhotoSavedSignalCallback {
        ($obj: Camera): void
    }

    /**
     * Signal callback interface for `photo-taken`
     */
    export interface PhotoTakenSignalCallback {
        ($obj: Camera, pixbuf: GdkPixbuf.Pixbuf): void
    }

    /**
     * Signal callback interface for `state-flags-changed`
     */
    export interface StateFlagsChangedSignalCallback {
        ($obj: Camera, state: number): void
    }

    /**
     * Signal callback interface for `video-saved`
     */
    export interface VideoSavedSignalCallback {
        ($obj: Camera): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

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
        video_texture?: any | null
        /**
         * The video texture for the #CheeseCamera to render into.
         */
        videoTexture?: any | null
    }

}

export interface Camera {

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
    readonly num_camera_devices: number
    /**
     * The currently number of camera devices available for being used.
     */
    readonly numCameraDevices: number
    /**
     * The video texture for the #CheeseCamera to render into.
     */
    video_texture: any
    /**
     * The video texture for the #CheeseCamera to render into.
     */
    videoTexture: any

    // Owm methods of Cheese-3.0.Cheese.Camera

    /**
     * Connect the supplied `texture` to the `camera,` using `effect`.
     * @param effect a #CheeseEffect
     * @param texture a #ClutterActor
     */
    connect_effect_texture(effect: Effect, texture: Clutter.Actor): void
    /**
     * Get the minimum, maximum and default values for the requested `property` of
     * the `camera`.
     * @param property name of the balance property
     * @returns %TRUE if the operation was successful, %FALSE otherwise
     */
    get_balance_property_range(property: string | null): [ /* returnType */ boolean, /* min */ number, /* max */ number, /* def */ number ]
    /**
     * Get the list of #CheeseCameraDevice objects, representing active video
     * capture devices on the system.
     * @returns an array of #CheeseCameraDevice
     */
    get_camera_devices(): CameraDevice[]
    /**
     * Get the #CheeseVideoFormat that is currently set on the `camera`.
     * @returns the #CheeseVideoFormat set on the #CheeseCamera
     */
    get_current_video_format(): VideoFormat
    /**
     * Get a string representation of the playing time
     * of the current video recording
     * @returns A string with the time representation.
     */
    get_recorded_time(): string | null
    /**
     * Get the currently-selected #CheeseCameraDevice of the `camera`.
     * @returns a #CheeseCameraDevice, or %NULL if there is no selected device
     */
    get_selected_device(): CameraDevice
    /**
     * Gets the list of #CheeseVideoFormat supported by the selected
     * #CheeseCameraDevice on the `camera`.
     * @returns a #GList of #CheeseVideoFormat, or %NULL if there was no device selected
     */
    get_video_formats(): VideoFormat[]
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
    set_balance_property(property: string | null, value: number): void
    /**
     * Set the active video capture device of the `camera`.
     * @param device the device object
     */
    set_device(device: CameraDevice): void
    /**
     * Set the `effect` on the `camera`.
     * @param effect a #CheeseEffect
     */
    set_effect(effect: Effect): void
    /**
     * Sets a #CheeseVideoFormat on a #CheeseCamera, restarting the video stream if
     * necessary.
     * @param format a #CheeseVideoFormat
     */
    set_video_format(format: VideoFormat): void
    /**
     * Setup a video capture device.
     * @param device the video capture device, or %NULL
     */
    setup(device: CameraDevice | null): void
    /**
     * Start a video recording with the `camera` and save it to `filename`.
     * @param filename the name of the video file to where the recording will be saved
     */
    start_video_recording(filename: string): void
    /**
     * Set the state of the GStreamer pipeline associated with the #CheeseCamera to
     * NULL.
     */
    stop(): void
    /**
     * Stop recording video on the `camera`.
     */
    stop_video_recording(): void
    /**
     * Toggle the playing/recording state of the `camera`.
     */
    switch_camera_device(): void
    /**
     * Save a photo taken with the `camera` to a new file at `filename`.
     * @param filename name of the file to save a photo to
     * @returns %TRUE on success, %FALSE if an error occurred
     */
    take_photo(filename: string): boolean
    /**
     * Take a photo with the `camera` and emit it in the ::capture-start signal as a
     * #GdkPixbuf.
     * @returns %TRUE if the photo was successfully captured, %FALSE otherwise
     */
    take_photo_pixbuf(): boolean
    /**
     * Control whether the effects pipeline is enabled for `camera`.
     * @param active %TRUE if effects pipeline is active, %FALSE otherwise
     */
    toggle_effects_pipeline(active: boolean): void

    // Own virtual methods of Cheese-3.0.Cheese.Camera

    vfunc_photo_saved(): void
    vfunc_photo_taken(pixbuf: GdkPixbuf.Pixbuf): void
    vfunc_state_flags_changed(new_state: Gst.State): void
    vfunc_video_saved(): void

    // Own signals of Cheese-3.0.Cheese.Camera

    connect(sigName: "photo-saved", callback: Camera.PhotoSavedSignalCallback): number
    connect_after(sigName: "photo-saved", callback: Camera.PhotoSavedSignalCallback): number
    emit(sigName: "photo-saved", ...args: any[]): void
    connect(sigName: "photo-taken", callback: Camera.PhotoTakenSignalCallback): number
    connect_after(sigName: "photo-taken", callback: Camera.PhotoTakenSignalCallback): number
    emit(sigName: "photo-taken", pixbuf: GdkPixbuf.Pixbuf, ...args: any[]): void
    connect(sigName: "state-flags-changed", callback: Camera.StateFlagsChangedSignalCallback): number
    connect_after(sigName: "state-flags-changed", callback: Camera.StateFlagsChangedSignalCallback): number
    emit(sigName: "state-flags-changed", state: number, ...args: any[]): void
    connect(sigName: "video-saved", callback: Camera.VideoSavedSignalCallback): number
    connect_after(sigName: "video-saved", callback: Camera.VideoSavedSignalCallback): number
    emit(sigName: "video-saved", ...args: any[]): void

    // Class property signals of Cheese-3.0.Cheese.Camera

    connect(sigName: "notify::device", callback: (($obj: Camera, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::device", callback: (($obj: Camera, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::device", ...args: any[]): void
    connect(sigName: "notify::format", callback: (($obj: Camera, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::format", callback: (($obj: Camera, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::format", ...args: any[]): void
    connect(sigName: "notify::num-camera-devices", callback: (($obj: Camera, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::num-camera-devices", callback: (($obj: Camera, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::num-camera-devices", ...args: any[]): void
    connect(sigName: "notify::video-texture", callback: (($obj: Camera, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::video-texture", callback: (($obj: Camera, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::video-texture", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * Use the accessor functions below.
 * @class 
 */
export class Camera extends GObject.Object {

    // Own properties of Cheese-3.0.Cheese.Camera

    static name: string
    static $gtype: GObject.GType<Camera>

    // Constructors of Cheese-3.0.Cheese.Camera

    constructor(config?: Camera.ConstructorProperties) 
    /**
     * Create a new #CheeseCamera object.
     * @constructor 
     * @param video_texture an actor in which to render the video
     * @param name the name of the device
     * @param x_resolution the resolution width
     * @param y_resolution the resolution height
     * @returns a new #CheeseCamera
     */
    constructor(video_texture: Clutter.Actor, name: string | null, x_resolution: number, y_resolution: number) 
    /**
     * Create a new #CheeseCamera object.
     * @constructor 
     * @param video_texture an actor in which to render the video
     * @param name the name of the device
     * @param x_resolution the resolution width
     * @param y_resolution the resolution height
     * @returns a new #CheeseCamera
     */
    static new(video_texture: Clutter.Actor, name: string | null, x_resolution: number, y_resolution: number): Camera
    _init(config?: Camera.ConstructorProperties): void
}

export module CameraDevice {

    // Constructor properties interface

    export interface ConstructorProperties extends Gio.Initable.ConstructorProperties, GObject.Object.ConstructorProperties {

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

export interface CameraDevice extends Gio.Initable {

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

    // Owm methods of Cheese-3.0.Cheese.CameraDevice

    /**
     * Get the #CheeseVideoFormat with the highest resolution with a width greater
     * than 640 pixels and a framerate of greater than 15 FPS for this `device`. If
     * no such format is found, get the highest available resolution instead.
     * @returns the highest-resolution supported #CheeseVideoFormat
     */
    get_best_format(): VideoFormat
    /**
     * Get the #GstCaps for the given `format` on the `device`.
     * @param format a #CheeseVideoFormat
     * @returns the #GstCaps for the given @format
     */
    get_caps_for_format(format: VideoFormat): Gst.Caps
    /**
     * Get the sorted list of #CheeseVideoFormat that the `device` supports.
     * @returns list of #CheeseVideoFormat
     */
    get_format_list(): VideoFormat[]
    /**
     * Get a human-readable name for the device, as reported by udev, which is
     * suitable for display to a user.
     * @returns the human-readable name of the video capture device
     */
    get_name(): string | null
    /**
     * Get path for the device, as reported by udev.
     * @returns the path of the video capture device
     */
    get_path(): string | null
    /**
     * Get the source GStreamer element for the `device`.
     * @returns the source GStreamer element
     */
    get_src(): Gst.Element

    // Class property signals of Cheese-3.0.Cheese.CameraDevice

    connect(sigName: "notify::device", callback: (($obj: CameraDevice, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::device", callback: (($obj: CameraDevice, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::device", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: CameraDevice, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: CameraDevice, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::path", callback: (($obj: CameraDevice, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::path", callback: (($obj: CameraDevice, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::path", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * Use the accessor functions below.
 * @class 
 */
export class CameraDevice extends GObject.Object {

    // Own properties of Cheese-3.0.Cheese.CameraDevice

    static name: string
    static $gtype: GObject.GType<CameraDevice>

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
    static supported_format_caps(): Gst.Caps
}

export module CameraDeviceMonitor {

    // Signal callback interfaces

    /**
     * Signal callback interface for `added`
     */
    export interface AddedSignalCallback {
        ($obj: CameraDeviceMonitor, device: CameraDevice): void
    }

    /**
     * Signal callback interface for `removed`
     */
    export interface RemovedSignalCallback {
        ($obj: CameraDeviceMonitor, device: CameraDevice): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends Gio.AsyncInitable.ConstructorProperties, Gio.Initable.ConstructorProperties, GObject.Object.ConstructorProperties {
    }

}

export interface CameraDeviceMonitor extends Gio.AsyncInitable, Gio.Initable {

    // Owm methods of Cheese-3.0.Cheese.CameraDeviceMonitor

    /**
     * Enumerate plugged in cameras and emit ::added for those which already exist.
     * This is only required when your program starts, so be sure to connect to
     * at least the ::added signal before calling this function.
     */
    coldplug(): void

    // Own virtual methods of Cheese-3.0.Cheese.CameraDeviceMonitor

    vfunc_added(device: CameraDevice): void
    vfunc_removed(device: CameraDevice): void

    // Own signals of Cheese-3.0.Cheese.CameraDeviceMonitor

    connect(sigName: "added", callback: CameraDeviceMonitor.AddedSignalCallback): number
    connect_after(sigName: "added", callback: CameraDeviceMonitor.AddedSignalCallback): number
    emit(sigName: "added", device: CameraDevice, ...args: any[]): void
    connect(sigName: "removed", callback: CameraDeviceMonitor.RemovedSignalCallback): number
    connect_after(sigName: "removed", callback: CameraDeviceMonitor.RemovedSignalCallback): number
    emit(sigName: "removed", device: CameraDevice, ...args: any[]): void

    // Class property signals of Cheese-3.0.Cheese.CameraDeviceMonitor

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * Use the accessor functions below.
 * @class 
 */
export class CameraDeviceMonitor extends GObject.Object {

    // Own properties of Cheese-3.0.Cheese.CameraDeviceMonitor

    static name: string
    static $gtype: GObject.GType<CameraDeviceMonitor>

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
    static new_finish(result: Gio.AsyncResult): CameraDeviceMonitor
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
    static new_async(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<CameraDeviceMonitor> | null): void
}

export module Effect {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Cheese-3.0.Cheese.Effect

        /**
         * If the control valve is active, then the effect is currently connected to
         * a video stream, for previews.
         */
        control_valve?: Gst.Element | null
        /**
         * Name of the effect, for display in a UI.
         */
        name?: string | null
        /**
         * Description of the GStreamer pipeline associated with the effect.
         */
        pipeline_desc?: string | null
        /**
         * If the control valve is active, then the effect is currently connected to
         * a video stream, for previews.
         */
        controlValve?: Gst.Element | null
        /**
         * Description of the GStreamer pipeline associated with the effect.
         */
        pipelineDesc?: string | null
    }

}

export interface Effect {

    // Own properties of Cheese-3.0.Cheese.Effect

    /**
     * If the control valve is active, then the effect is currently connected to
     * a video stream, for previews.
     */
    control_valve: Gst.Element
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
    readonly pipeline_desc: string | null
    /**
     * Description of the GStreamer pipeline associated with the effect.
     */
    readonly pipelineDesc: string | null

    // Owm methods of Cheese-3.0.Cheese.Effect

    /**
     * Disable the preview of a #CheeseEffect.
     */
    disable_preview(): void
    /**
     * Enable the preview of a #CheeseEffect.
     */
    enable_preview(): void
    /**
     * Get the human-readable name of the `effect`.
     * @returns the human-readable name of the effect.
     */
    get_name(): string | null
    /**
     * Get the Gstreamer pipeline description of the `effect`.
     * @returns the Gstreamer pipeline description of the effect.
     */
    get_pipeline_desc(): string | null
    /**
     * Get whether the `effect` is connected to a video stream, for previews.
     * @returns %TRUE if the preview is connected, %FALSE otherwise.
     */
    is_preview_connected(): boolean

    // Class property signals of Cheese-3.0.Cheese.Effect

    connect(sigName: "notify::control-valve", callback: (($obj: Effect, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::control-valve", callback: (($obj: Effect, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::control-valve", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: Effect, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Effect, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::pipeline-desc", callback: (($obj: Effect, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pipeline-desc", callback: (($obj: Effect, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::pipeline-desc", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * Use the accessor functions below.
 * @class 
 */
export class Effect extends GObject.Object {

    // Own properties of Cheese-3.0.Cheese.Effect

    static name: string
    static $gtype: GObject.GType<Effect>

    // Constructors of Cheese-3.0.Cheese.Effect

    constructor(config?: Effect.ConstructorProperties) 
    /**
     * Create a new #CheeseEffect.
     * @constructor 
     * @param name name of the effect
     * @param pipeline_desc GStreamer pipeline of the new effect
     * @returns a new #CheeseEffect
     */
    constructor(name: string | null, pipeline_desc: string | null) 
    /**
     * Create a new #CheeseEffect.
     * @constructor 
     * @param name name of the effect
     * @param pipeline_desc GStreamer pipeline of the new effect
     * @returns a new #CheeseEffect
     */
    static new(name: string | null, pipeline_desc: string | null): Effect
    _init(config?: Effect.ConstructorProperties): void
    /**
     * Load effects from standard directories, including the user's data directory.
     * @returns a list of #CheeseEffect, or %NULL if no effects could be found
     */
    static load_effects(): Effect[]
    /**
     * Load effect from file.
     * @param filename name of the file containing the effect specification
     * @returns a #CheeseEffect, or %NULL on error
     */
    static load_from_file(filename: string): Effect
}

export module FileUtil {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface FileUtil {

    // Owm methods of Cheese-3.0.Cheese.FileUtil

    /**
     * Creates a filename for one of the three media types: photo, photo burst or
     * video. If a filename for a photo burst image was previously created, this
     * function increments the burst count automatically. To start a new burst,
     * first call cheese_fileutil_reset_burst().
     * @param mode the type of media to create a filename for
     * @returns a new filename
     */
    get_new_media_filename(mode: MediaMode): string
    /**
     * Get the path where Cheese photo files are stored.
     * @returns the Cheese photo path
     */
    get_photo_path(): string
    /**
     * Get the path where Cheese video files are stored.
     * @returns the Cheese video path
     */
    get_video_path(): string
    /**
     * Resets the burst counter, so that calling
     * cheese_fileutil_get_new_media_filename() with a photo burst starts a new
     * burst of photos.
     */
    reset_burst(): void

    // Class property signals of Cheese-3.0.Cheese.FileUtil

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * Use the accessor functions below.
 * @class 
 */
export class FileUtil extends GObject.Object {

    // Own properties of Cheese-3.0.Cheese.FileUtil

    static name: string
    static $gtype: GObject.GType<FileUtil>

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

export interface CameraClass {

    // Own fields of Cheese-3.0.Cheese.CameraClass

    photo_saved: (camera: Camera) => void
    photo_taken: (camera: Camera, pixbuf: GdkPixbuf.Pixbuf) => void
    video_saved: (camera: Camera) => void
    state_flags_changed: (camera: Camera, new_state: Gst.State) => void
}

/**
 * Class for #CheeseCamera.
 * @record 
 */
export abstract class CameraClass {

    // Own properties of Cheese-3.0.Cheese.CameraClass

    static name: string
}

export interface CameraDeviceClass {

    // Own fields of Cheese-3.0.Cheese.CameraDeviceClass

    parent_class: GObject.ObjectClass
}

export abstract class CameraDeviceClass {

    // Own properties of Cheese-3.0.Cheese.CameraDeviceClass

    static name: string
}

export interface CameraDeviceMonitorClass {

    // Own fields of Cheese-3.0.Cheese.CameraDeviceMonitorClass

    added: (monitor: CameraDeviceMonitor, device: CameraDevice) => void
    removed: (monitor: CameraDeviceMonitor, device: CameraDevice) => void
}

/**
 * Class for #CheeseCameraDeviceMonitor.
 * @record 
 */
export abstract class CameraDeviceMonitorClass {

    // Own properties of Cheese-3.0.Cheese.CameraDeviceMonitorClass

    static name: string
}

export interface CameraDeviceMonitorPrivate {
}

export class CameraDeviceMonitorPrivate {

    // Own properties of Cheese-3.0.Cheese.CameraDeviceMonitorPrivate

    static name: string
}

export interface CameraPrivate {
}

export class CameraPrivate {

    // Own properties of Cheese-3.0.Cheese.CameraPrivate

    static name: string
}

export interface EffectClass {

    // Own fields of Cheese-3.0.Cheese.EffectClass

    parent_class: GObject.ObjectClass
}

export abstract class EffectClass {

    // Own properties of Cheese-3.0.Cheese.EffectClass

    static name: string
}

export interface FileUtilClass {

    // Own fields of Cheese-3.0.Cheese.FileUtilClass

    parent_class: GObject.ObjectClass
}

export abstract class FileUtilClass {

    // Own properties of Cheese-3.0.Cheese.FileUtilClass

    static name: string
}

export interface VideoFormat {

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
export class VideoFormat {

    // Own properties of Cheese-3.0.Cheese.VideoFormat

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