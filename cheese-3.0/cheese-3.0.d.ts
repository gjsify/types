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
    const PHOTO_NAME_SUFFIX: string;
    /**
     * The filename suffix for videos saved by Cheese.
     */
    const VIDEO_NAME_SUFFIX: string;
    module Camera {
        // Signal callback interfaces

        interface PhotoSaved {
            (): void;
        }

        interface PhotoTaken {
            (pixbuf: GdkPixbuf.Pixbuf): void;
        }

        interface StateFlagsChanged {
            (state: number): void;
        }

        interface VideoSaved {
            (): void;
        }

        // Constructor properties interface
    }

    /**
     * Use the accessor functions below.
     */
    class Camera extends GObject.Object {
        // Own properties of Cheese-3.0.Camera

        /**
         * The device object to capture from.
         */
        device: CameraDevice;
        /**
         * The format of the video capture device.
         */
        format: VideoFormat;
        /**
         * The currently number of camera devices available for being used.
         */
        readonly num_camera_devices: number;
        /**
         * The currently number of camera devices available for being used.
         */
        readonly numCameraDevices: number;
        /**
         * The video texture for the #CheeseCamera to render into.
         */
        video_texture: any;
        /**
         * The video texture for the #CheeseCamera to render into.
         */
        videoTexture: any;

        // Constructors of Cheese-3.0.Camera

        static ['new'](
            video_texture: Clutter.Actor,
            name: string | null,
            x_resolution: number,
            y_resolution: number,
        ): Camera;

        // Owm methods of Cheese-3.0.Camera

        /**
         * Connect the supplied `texture` to the `camera,` using `effect`.
         * @param effect a #CheeseEffect
         * @param texture a #ClutterActor
         */
        connect_effect_texture(effect: Effect, texture: Clutter.Actor): void;
        /**
         * Get the minimum, maximum and default values for the requested `property` of
         * the `camera`.
         * @param property name of the balance property
         * @returns %TRUE if the operation was successful, %FALSE otherwise
         */
        get_balance_property_range(property: string): boolean;
        /**
         * Get the list of #CheeseCameraDevice objects, representing active video
         * capture devices on the system.
         * @returns an array of #CheeseCameraDevice
         */
        get_camera_devices(): CameraDevice[];
        /**
         * Get the #CheeseVideoFormat that is currently set on the `camera`.
         * @returns the #CheeseVideoFormat set on the #CheeseCamera
         */
        get_current_video_format(): VideoFormat;
        /**
         * Get a string representation of the playing time
         * of the current video recording
         * @returns A string with the time representation.
         */
        get_recorded_time(): string;
        /**
         * Get the currently-selected #CheeseCameraDevice of the `camera`.
         * @returns a #CheeseCameraDevice, or %NULL if there is no selected device
         */
        get_selected_device(): CameraDevice;
        /**
         * Gets the list of #CheeseVideoFormat supported by the selected
         * #CheeseCameraDevice on the `camera`.
         * @returns a #GList of #CheeseVideoFormat, or %NULL if there was no device selected
         */
        get_video_formats(): VideoFormat[];
        /**
         * Set the state of the GStreamer pipeline associated with the #CheeseCamera to
         * playing.
         */
        play(): void;
        /**
         * Set the requested `property` on the `camera` to `value`.
         * @param property name of the balance property
         * @param value value to be set
         */
        set_balance_property(property: string, value: number): void;
        /**
         * Set the active video capture device of the `camera`.
         * @param device the device object
         */
        set_device(device: CameraDevice): void;
        /**
         * Set the `effect` on the `camera`.
         * @param effect a #CheeseEffect
         */
        set_effect(effect: Effect): void;
        /**
         * Sets a #CheeseVideoFormat on a #CheeseCamera, restarting the video stream if
         * necessary.
         * @param format a #CheeseVideoFormat
         */
        set_video_format(format: VideoFormat): void;
        /**
         * Setup a video capture device.
         * @param device the video capture device, or %NULL
         */
        setup(device?: CameraDevice | null): void;
        /**
         * Start a video recording with the `camera` and save it to `filename`.
         * @param filename the name of the video file to where the recording will be saved
         */
        start_video_recording(filename: string): void;
        /**
         * Set the state of the GStreamer pipeline associated with the #CheeseCamera to
         * NULL.
         */
        stop(): void;
        /**
         * Stop recording video on the `camera`.
         */
        stop_video_recording(): void;
        /**
         * Toggle the playing/recording state of the `camera`.
         */
        switch_camera_device(): void;
        /**
         * Save a photo taken with the `camera` to a new file at `filename`.
         * @param filename name of the file to save a photo to
         * @returns %TRUE on success, %FALSE if an error occurred
         */
        take_photo(filename: string): boolean;
        /**
         * Take a photo with the `camera` and emit it in the ::capture-start signal as a
         * #GdkPixbuf.
         * @returns %TRUE if the photo was successfully captured, %FALSE otherwise
         */
        take_photo_pixbuf(): boolean;
        /**
         * Control whether the effects pipeline is enabled for `camera`.
         * @param active %TRUE if effects pipeline is active, %FALSE otherwise
         */
        toggle_effects_pipeline(active: boolean): void;
    }

    module CameraDevice {
        // Constructor properties interface
    }

    /**
     * Use the accessor functions below.
     */
    class CameraDevice extends GObject.Object {
        // Own properties of Cheese-3.0.CameraDevice

        /**
         * GStreamer device object of the video capture device.
         */
        device: Gst.Device;
        /**
         * Human-readable name of the video capture device, for display to the user.
         */
        name: string;
        /**
         * Path of the video capture device.
         */
        path: string;

        // Constructors of Cheese-3.0.CameraDevice

        static ['new'](device: Gst.Device): CameraDevice;

        // Owm methods of Cheese-3.0.CameraDevice

        /**
         * Get the #GstCaps that are supported for all #CheeseCameraDevice
         */
        static supported_format_caps(): Gst.Caps;

        // Owm methods of Cheese-3.0.CameraDevice

        /**
         * Get the #CheeseVideoFormat with the highest resolution with a width greater
         * than 640 pixels and a framerate of greater than 15 FPS for this `device`. If
         * no such format is found, get the highest available resolution instead.
         * @returns the highest-resolution supported #CheeseVideoFormat
         */
        get_best_format(): VideoFormat;
        /**
         * Get the #GstCaps for the given `format` on the `device`.
         * @param format a #CheeseVideoFormat
         * @returns the #GstCaps for the given @format
         */
        get_caps_for_format(format: VideoFormat): Gst.Caps;
        /**
         * Get the sorted list of #CheeseVideoFormat that the `device` supports.
         * @returns list of #CheeseVideoFormat
         */
        get_format_list(): VideoFormat[];
        /**
         * Get a human-readable name for the device, as reported by udev, which is
         * suitable for display to a user.
         * @returns the human-readable name of the video capture device
         */
        get_name(): string;
        /**
         * Get path for the device, as reported by udev.
         * @returns the path of the video capture device
         */
        get_path(): string;
        /**
         * Get the source GStreamer element for the `device`.
         * @returns the source GStreamer element
         */
        get_src(): Gst.Element;
    }

    module CameraDeviceMonitor {
        // Signal callback interfaces

        interface Added {
            (device: CameraDevice): void;
        }

        interface Removed {
            (device: CameraDevice): void;
        }

        // Constructor properties interface
    }

    /**
     * Use the accessor functions below.
     */
    class CameraDeviceMonitor extends GObject.Object {
        // Constructors of Cheese-3.0.CameraDeviceMonitor

        static ['new'](): CameraDeviceMonitor;

        static new_finish(result: Gio.AsyncResult): CameraDeviceMonitor;

        // Owm methods of Cheese-3.0.CameraDeviceMonitor

        /**
         * Creates a new #CheeseCameraDeviceMonitor object asynchronously. Callback
         * will be called when it is done. Use cheese_camera_device_monitor_new_finish()
         * to get the result.
         *
         * See cheese_camera_device_monitor_new() for the synchronous version.
         * @param cancellable a #GCancellable or NULL
         * @param callback a GAsyncReadyCallback to call when the initialization is finished
         */
        static new_async(
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<CameraDeviceMonitor> | null,
        ): void;

        // Owm methods of Cheese-3.0.CameraDeviceMonitor

        /**
         * Enumerate plugged in cameras and emit ::added for those which already exist.
         * This is only required when your program starts, so be sure to connect to
         * at least the ::added signal before calling this function.
         */
        coldplug(): void;
    }

    module Effect {
        // Constructor properties interface
    }

    /**
     * Use the accessor functions below.
     */
    class Effect extends GObject.Object {
        // Own properties of Cheese-3.0.Effect

        /**
         * If the control valve is active, then the effect is currently connected to
         * a video stream, for previews.
         */
        control_valve: Gst.Element;
        /**
         * If the control valve is active, then the effect is currently connected to
         * a video stream, for previews.
         */
        controlValve: Gst.Element;
        /**
         * Name of the effect, for display in a UI.
         */
        name: string;
        /**
         * Description of the GStreamer pipeline associated with the effect.
         */
        pipeline_desc: string;
        /**
         * Description of the GStreamer pipeline associated with the effect.
         */
        pipelineDesc: string;

        // Constructors of Cheese-3.0.Effect

        static ['new'](name: string, pipeline_desc: string): Effect;

        // Owm methods of Cheese-3.0.Effect

        /**
         * Load effects from standard directories, including the user's data directory.
         */
        static load_effects(): Effect[];
        /**
         * Load effect from file.
         * @param filename name of the file containing the effect specification
         */
        static load_from_file(filename: string): Effect;

        // Owm methods of Cheese-3.0.Effect

        /**
         * Disable the preview of a #CheeseEffect.
         */
        disable_preview(): void;
        /**
         * Enable the preview of a #CheeseEffect.
         */
        enable_preview(): void;
        /**
         * Get the human-readable name of the `effect`.
         * @returns the human-readable name of the effect.
         */
        get_name(): string;
        /**
         * Get the Gstreamer pipeline description of the `effect`.
         * @returns the Gstreamer pipeline description of the effect.
         */
        get_pipeline_desc(): string;
        /**
         * Get whether the `effect` is connected to a video stream, for previews.
         * @returns %TRUE if the preview is connected, %FALSE otherwise.
         */
        is_preview_connected(): boolean;
    }

    module FileUtil {
        // Constructor properties interface
    }

    /**
     * Use the accessor functions below.
     */
    class FileUtil extends GObject.Object {
        // Constructors of Cheese-3.0.FileUtil

        static ['new'](): FileUtil;

        // Owm methods of Cheese-3.0.FileUtil

        /**
         * Creates a filename for one of the three media types: photo, photo burst or
         * video. If a filename for a photo burst image was previously created, this
         * function increments the burst count automatically. To start a new burst,
         * first call cheese_fileutil_reset_burst().
         * @param mode the type of media to create a filename for
         * @returns a new filename
         */
        get_new_media_filename(mode: MediaMode): string;
        /**
         * Get the path where Cheese photo files are stored.
         * @returns the Cheese photo path
         */
        get_photo_path(): string;
        /**
         * Get the path where Cheese video files are stored.
         * @returns the Cheese video path
         */
        get_video_path(): string;
        /**
         * Resets the burst counter, so that calling
         * cheese_fileutil_get_new_media_filename() with a photo burst starts a new
         * burst of photos.
         */
        reset_burst(): void;
    }

    /**
     * Class for #CheeseCamera.
     */
    class CameraClass {}

    class CameraDeviceClass {}

    /**
     * Class for #CheeseCameraDeviceMonitor.
     */
    class CameraDeviceMonitorClass {}

    class CameraDeviceMonitorPrivate {}

    class CameraPrivate {}

    class EffectClass {}

    class FileUtilClass {}

    /**
     * A description of the resolution, in pixels, of the format to capture with a
     * #CheeseCameraDevice.
     */
    class VideoFormat {
        // Own fields of Cheese-3.0.VideoFormat

        width: number;
        height: number;

        // Constructors of Cheese-3.0.VideoFormat

        constructor(
            properties?: Partial<{
                width: number;
                height: number;
            }>,
        );
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

export default Cheese;
// END
