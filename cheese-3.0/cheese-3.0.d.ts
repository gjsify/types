/**
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 *
 * The based EJS template file is used for the generated .d.ts file of each GIR module like Gtk-4.0, GObject-2.0, ...
 */

import '@girs/gjs';

// Module dependencies
import type Gst from '@girs/gst-1.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type GModule from '@girs/gmodule-2.0';
import type GdkPixbuf from '@girs/gdkpixbuf-2.0';
import type Gio from '@girs/gio-2.0';
import type Clutter from '@girs/clutter-1.0';
import type cairo from 'cairo';
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
     * Cheese-3.0
     */

    /**
     * Errors that can occur during camera setup, when calling
     * `cheese_camera_setup()`.
     * @gir-type Enum
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
         * a {@link Cheese.CameraDevice} was not found
         */
        NO_DEVICE,
    }

    /**
     * The media type, used for generating filenames with
     * `cheese_fileutil_get_new_media_filename()`.
     * @gir-type Enum
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
    namespace Camera {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            /**
             * Emitted when a photo was saved to disk.
             * @signal
             * @action
             * @run-last
             */
            'photo-saved': () => void;
            /**
             * Emitted when a photo was taken.
             * @signal
             * @action
             * @run-last
             */
            'photo-taken': (arg0: GdkPixbuf.Pixbuf) => void;
            /**
             * Emitted when the state of the `camera` {@link Gst.Element} changed.
             * @signal
             * @action
             * @run-last
             */
            'state-flags-changed': (arg0: number) => void;
            /**
             * Emitted when a video was saved to disk.
             * @signal
             * @action
             * @run-last
             */
            'video-saved': () => void;
            'notify::device': (pspec: GObject.ParamSpec) => void;
            'notify::format': (pspec: GObject.ParamSpec) => void;
            'notify::num-camera-devices': (pspec: GObject.ParamSpec) => void;
            'notify::video-texture': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            device: CameraDevice;
            format: VideoFormat;
            num_camera_devices: number;
            numCameraDevices: number;
            video_texture: any;
            videoTexture: any;
        }
    }

    /**
     * Use the accessor functions below.
     * @gir-type Class
     */
    class Camera extends GObject.Object {
        static $gtype: GObject.GType<Camera>;

        // Properties

        /**
         * The device object to capture from.
         */
        get device(): CameraDevice;
        set device(val: CameraDevice);
        /**
         * The format of the video capture device.
         */
        get format(): VideoFormat;
        set format(val: VideoFormat);
        /**
         * The currently number of camera devices available for being used.
         * @read-only
         * @default 0
         */
        get num_camera_devices(): number;
        /**
         * The currently number of camera devices available for being used.
         * @read-only
         * @default 0
         */
        get numCameraDevices(): number;
        /**
         * The video texture for the {@link Cheese.Camera} to render into.
         */
        get video_texture(): any;
        set video_texture(val: any);
        /**
         * The video texture for the {@link Cheese.Camera} to render into.
         */
        get videoTexture(): any;
        set videoTexture(val: any);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Camera.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Camera.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](
            video_texture: Clutter.Actor,
            name: string | null,
            x_resolution: number,
            y_resolution: number,
        ): Camera;

        // Signals

        /** @signal */
        connect<K extends keyof Camera.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Camera.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Camera.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Camera.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Camera.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Camera.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods

        /**
         * @virtual
         */
        vfunc_photo_saved(): void;
        /**
         * @param pixbuf
         * @virtual
         */
        vfunc_photo_taken(pixbuf: GdkPixbuf.Pixbuf): void;
        /**
         * @param new_state
         * @virtual
         */
        vfunc_state_flags_changed(new_state: Gst.State): void;
        /**
         * @virtual
         */
        vfunc_video_saved(): void;

        // Methods

        /**
         * Connect the supplied `texture` to the `camera`, using `effect`.
         * @param effect a {@link Cheese.Effect}
         * @param texture a {@link Clutter.Actor}
         */
        connect_effect_texture(effect: Effect, texture: Clutter.Actor): void;
        /**
         * Get the minimum, maximum and default values for the requested `property` of
         * the `camera`.
         * @param property name of the balance property
         * @returns `true` if the operation was successful, `false` otherwise
         */
        get_balance_property_range(property: string): [boolean, number, number, number];
        /**
         * Get the list of {@link Cheese.CameraDevice} objects, representing active video
         * capture devices on the system.
         * @returns an array of {@link Cheese.CameraDevice}
         */
        get_camera_devices(): CameraDevice[];
        /**
         * Get the {@link Cheese.VideoFormat} that is currently set on the `camera`.
         * @returns the {@link Cheese.VideoFormat} set on the {@link Cheese.Camera}
         */
        get_current_video_format(): VideoFormat;
        /**
         * Get a string representation of the playing time
         * of the current video recording
         * @returns A string with the time representation.
         */
        get_recorded_time(): string;
        /**
         * Get the currently-selected {@link Cheese.CameraDevice} of the `camera`.
         * @returns a {@link Cheese.CameraDevice}, or `null` if there is no selected device
         */
        get_selected_device(): CameraDevice;
        /**
         * Gets the list of {@link Cheese.VideoFormat} supported by the selected
         * {@link Cheese.CameraDevice} on the `camera`.
         * @returns a {@link GLib.List} of {@link Cheese.VideoFormat}, or `null` if there was no device selected
         */
        get_video_formats(): VideoFormat[];
        /**
         * Set the state of the GStreamer pipeline associated with the {@link Cheese.Camera} to
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
         * @param effect a {@link Cheese.Effect}
         */
        set_effect(effect: Effect): void;
        /**
         * Sets a {@link Cheese.VideoFormat} on a {@link Cheese.Camera}, restarting the video stream if
         * necessary.
         * @param format a {@link Cheese.VideoFormat}
         */
        set_video_format(format: VideoFormat): void;
        /**
         * Setup a video capture device.
         * @param device the video capture device, or `null`
         */
        setup(device: CameraDevice | null): void;
        /**
         * Start a video recording with the `camera` and save it to `filename`.
         * @param filename the name of the video file to where the recording will be saved
         */
        start_video_recording(filename: string): void;
        /**
         * Set the state of the GStreamer pipeline associated with the {@link Cheese.Camera} to
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
         * @returns `true` on success, `false` if an error occurred
         */
        take_photo(filename: string): boolean;
        /**
         * Take a photo with the `camera` and emit it in the ::capture-start signal as a
         * {@link GdkPixbuf.Pixbuf}.
         * @returns `true` if the photo was successfully captured, `false` otherwise
         */
        take_photo_pixbuf(): boolean;
        /**
         * Control whether the effects pipeline is enabled for `camera`.
         * @param active `true` if effects pipeline is active, `false` otherwise
         */
        toggle_effects_pipeline(active: boolean): void;
    }

    namespace CameraDevice {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::device': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::path': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps, Gio.Initable.ConstructorProps {
            device: Gst.Device;
            name: string;
            path: string;
        }
    }

    /**
     * Use the accessor functions below.
     * @gir-type Class
     */
    class CameraDevice extends GObject.Object implements Gio.Initable {
        static $gtype: GObject.GType<CameraDevice>;

        // Properties

        /**
         * GStreamer device object of the video capture device.
         * @construct-only
         */
        get device(): Gst.Device;
        /**
         * Human-readable name of the video capture device, for display to the user.
         * @construct-only
         * @default null
         */
        get name(): string;
        /**
         * Path of the video capture device.
         * @construct-only
         * @default null
         */
        get path(): string;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: CameraDevice.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<CameraDevice.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](device: Gst.Device): CameraDevice;

        // Signals

        /** @signal */
        connect<K extends keyof CameraDevice.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, CameraDevice.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof CameraDevice.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, CameraDevice.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof CameraDevice.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<CameraDevice.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        /**
         * Get the {@link Gst.Caps} that are supported for all {@link Cheese.CameraDevice}
         */
        static supported_format_caps(): Gst.Caps;

        // Methods

        /**
         * Get the {@link Cheese.VideoFormat} with the highest resolution with a width greater
         * than 640 pixels and a framerate of greater than 15 FPS for this `device`. If
         * no such format is found, get the highest available resolution instead.
         * @returns the highest-resolution supported {@link Cheese.VideoFormat}
         */
        get_best_format(): VideoFormat;
        /**
         * Get the {@link Gst.Caps} for the given `format` on the `device`.
         * @param format a {@link Cheese.VideoFormat}
         * @returns the {@link Gst.Caps} for the given `format`
         */
        get_caps_for_format(format: VideoFormat): Gst.Caps;
        /**
         * Get the sorted list of {@link Cheese.VideoFormat} that the `device` supports.
         * @returns list of {@link Cheese.VideoFormat}
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
        /**
         * Initializes the object implementing the interface.
         *
         * This method is intended for language bindings. If writing in C,
         * `g_initable_new()` should typically be used instead.
         *
         * The object must be initialized before any real use after initial
         * construction, either with this function or `g_async_initable_init_async()`.
         *
         * Implementations may also support cancellation. If `cancellable` is not `null`,
         * then initialization can be cancelled by triggering the cancellable object
         * from another thread. If the operation was cancelled, the error
         * {@link Gio.IOErrorEnum.CANCELLED} will be returned. If `cancellable` is not `null` and
         * the object doesn't support cancellable initialization the error
         * {@link Gio.IOErrorEnum.NOT_SUPPORTED} will be returned.
         *
         * If the object is not initialized, or initialization returns with an
         * error, then all operations on the object except `g_object_ref()` and
         * `g_object_unref()` are considered to be invalid, and have undefined
         * behaviour. See the [description][iface@Gio.Initable#description] for more details.
         *
         * Callers should not assume that a class which implements {@link Gio.Initable} can be
         * initialized multiple times, unless the class explicitly documents itself as
         * supporting this. Generally, a class’ implementation of `init()` can assume
         * (and assert) that it will only be called once. Previously, this documentation
         * recommended all {@link Gio.Initable} implementations should be idempotent; that
         * recommendation was relaxed in GLib 2.54.
         *
         * If a class explicitly supports being initialized multiple times, it is
         * recommended that the method is idempotent: multiple calls with the same
         * arguments should return the same results. Only the first call initializes
         * the object; further calls return the result of the first call.
         *
         * One reason why a class might need to support idempotent initialization is if
         * it is designed to be used via the singleton pattern, with a
         * {@link GObject.ObjectClass}.constructor that sometimes returns an existing instance.
         * In this pattern, a caller would expect to be able to call `g_initable_init()`
         * on the result of `g_object_new()`, regardless of whether it is in fact a new
         * instance.
         * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore.
         * @returns `true` if successful. If an error has occurred, this function will     return `false` and set `error` appropriately if present.
         */
        init(cancellable: Gio.Cancellable | null): boolean;
        /**
         * Initializes the object implementing the interface.
         *
         * This method is intended for language bindings. If writing in C,
         * `g_initable_new()` should typically be used instead.
         *
         * The object must be initialized before any real use after initial
         * construction, either with this function or `g_async_initable_init_async()`.
         *
         * Implementations may also support cancellation. If `cancellable` is not `null`,
         * then initialization can be cancelled by triggering the cancellable object
         * from another thread. If the operation was cancelled, the error
         * {@link Gio.IOErrorEnum.CANCELLED} will be returned. If `cancellable` is not `null` and
         * the object doesn't support cancellable initialization the error
         * {@link Gio.IOErrorEnum.NOT_SUPPORTED} will be returned.
         *
         * If the object is not initialized, or initialization returns with an
         * error, then all operations on the object except `g_object_ref()` and
         * `g_object_unref()` are considered to be invalid, and have undefined
         * behaviour. See the [description][iface@Gio.Initable#description] for more details.
         *
         * Callers should not assume that a class which implements {@link Gio.Initable} can be
         * initialized multiple times, unless the class explicitly documents itself as
         * supporting this. Generally, a class’ implementation of `init()` can assume
         * (and assert) that it will only be called once. Previously, this documentation
         * recommended all {@link Gio.Initable} implementations should be idempotent; that
         * recommendation was relaxed in GLib 2.54.
         *
         * If a class explicitly supports being initialized multiple times, it is
         * recommended that the method is idempotent: multiple calls with the same
         * arguments should return the same results. Only the first call initializes
         * the object; further calls return the result of the first call.
         *
         * One reason why a class might need to support idempotent initialization is if
         * it is designed to be used via the singleton pattern, with a
         * {@link GObject.ObjectClass}.constructor that sometimes returns an existing instance.
         * In this pattern, a caller would expect to be able to call `g_initable_init()`
         * on the result of `g_object_new()`, regardless of whether it is in fact a new
         * instance.
         * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore.
         * @virtual
         */
        vfunc_init(cancellable: Gio.Cancellable | null): boolean;
    }

    namespace CameraDeviceMonitor {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            /**
             * The ::added signal is emitted when a camera is added, or on start-up
             * after `cheese_camera_device_monitor_coldplug()` is called.
             * @signal
             * @action
             * @run-last
             */
            added: (arg0: CameraDevice) => void;
            /**
             * The ::removed signal is emitted when a camera is unplugged, or disabled on
             * the system.
             * @signal
             * @action
             * @run-last
             */
            removed: (arg0: CameraDevice) => void;
        }

        // Constructor properties interface

        interface ConstructorProps
            extends
                GObject.Object.ConstructorProps,
                Gio.AsyncInitable.ConstructorProps,
                Gio.Initable.ConstructorProps {}
    }

    /**
     * Use the accessor functions below.
     * @gir-type Class
     */
    class CameraDeviceMonitor extends GObject.Object implements Gio.AsyncInitable<CameraDeviceMonitor>, Gio.Initable {
        static $gtype: GObject.GType<CameraDeviceMonitor>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: CameraDeviceMonitor.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<CameraDeviceMonitor.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): CameraDeviceMonitor;

        static new_finish(result: Gio.AsyncResult): CameraDeviceMonitor;
        // Conflicted with Gio.AsyncInitable.new_finish

        static new_finish(...args: never[]): any;

        // Signals

        /** @signal */
        connect<K extends keyof CameraDeviceMonitor.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, CameraDeviceMonitor.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof CameraDeviceMonitor.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, CameraDeviceMonitor.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof CameraDeviceMonitor.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<CameraDeviceMonitor.SignalSignatures[K]> extends [any, ...infer Q]
                ? Q
                : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        /**
         * Creates a new {@link Cheese.CameraDeviceMonitor} object asynchronously. Callback
         * will be called when it is done. Use `cheese_camera_device_monitor_new_finish()`
         * to get the result.
         *
         * See `cheese_camera_device_monitor_new()` for the synchronous version.
         * @param cancellable a {@link Gio.Cancellable} or NULL
         * @param callback a GAsyncReadyCallback to call when the initialization is finished
         */
        static new_async(
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<CameraDeviceMonitor> | null,
        ): void;

        // Virtual methods

        /**
         * @param device
         * @virtual
         */
        vfunc_added(device: CameraDevice): void;
        /**
         * @param device
         * @virtual
         */
        vfunc_removed(device: CameraDevice): void;

        // Methods

        /**
         * Enumerate plugged in cameras and emit ::added for those which already exist.
         * This is only required when your program starts, so be sure to connect to
         * at least the ::added signal before calling this function.
         */
        coldplug(): void;
        /**
         * Starts asynchronous initialization of the object implementing the
         * interface. This must be done before any real use of the object after
         * initial construction. If the object also implements {@link Gio.Initable} you can
         * optionally call `g_initable_init()` instead.
         *
         * This method is intended for language bindings. If writing in C,
         * `g_async_initable_new_async()` should typically be used instead.
         *
         * When the initialization is finished, `callback` will be called. You can
         * then call `g_async_initable_init_finish()` to get the result of the
         * initialization.
         *
         * Implementations may also support cancellation. If `cancellable` is not
         * `null`, then initialization can be cancelled by triggering the cancellable
         * object from another thread. If the operation was cancelled, the error
         * {@link Gio.IOErrorEnum.CANCELLED} will be returned. If `cancellable` is not `null`, and
         * the object doesn't support cancellable initialization, the error
         * {@link Gio.IOErrorEnum.NOT_SUPPORTED} will be returned.
         *
         * As with {@link Gio.Initable}, if the object is not initialized, or initialization
         * returns with an error, then all operations on the object except
         * `g_object_ref()` and `g_object_unref()` are considered to be invalid, and
         * have undefined behaviour. They will often fail with `g_critical()` or
         * `g_warning()`, but this must not be relied on.
         *
         * Callers should not assume that a class which implements {@link Gio.AsyncInitable} can
         * be initialized multiple times; for more information, see `g_initable_init()`.
         * If a class explicitly supports being initialized multiple times,
         * implementation requires yielding all subsequent calls to `init_async()` on the
         * results of the first call.
         *
         * For classes that also support the {@link Gio.Initable} interface, the default
         * implementation of this method will run the `g_initable_init()` function
         * in a thread, so if you want to support asynchronous initialization via
         * threads, just implement the {@link Gio.AsyncInitable} interface without overriding
         * any interface methods.
         * @param io_priority the [I/O priority](iface.AsyncResult.html#io-priority) of the operation
         * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore.
         */
        init_async(io_priority: number, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        /**
         * Starts asynchronous initialization of the object implementing the
         * interface. This must be done before any real use of the object after
         * initial construction. If the object also implements {@link Gio.Initable} you can
         * optionally call `g_initable_init()` instead.
         *
         * This method is intended for language bindings. If writing in C,
         * `g_async_initable_new_async()` should typically be used instead.
         *
         * When the initialization is finished, `callback` will be called. You can
         * then call `g_async_initable_init_finish()` to get the result of the
         * initialization.
         *
         * Implementations may also support cancellation. If `cancellable` is not
         * `null`, then initialization can be cancelled by triggering the cancellable
         * object from another thread. If the operation was cancelled, the error
         * {@link Gio.IOErrorEnum.CANCELLED} will be returned. If `cancellable` is not `null`, and
         * the object doesn't support cancellable initialization, the error
         * {@link Gio.IOErrorEnum.NOT_SUPPORTED} will be returned.
         *
         * As with {@link Gio.Initable}, if the object is not initialized, or initialization
         * returns with an error, then all operations on the object except
         * `g_object_ref()` and `g_object_unref()` are considered to be invalid, and
         * have undefined behaviour. They will often fail with `g_critical()` or
         * `g_warning()`, but this must not be relied on.
         *
         * Callers should not assume that a class which implements {@link Gio.AsyncInitable} can
         * be initialized multiple times; for more information, see `g_initable_init()`.
         * If a class explicitly supports being initialized multiple times,
         * implementation requires yielding all subsequent calls to `init_async()` on the
         * results of the first call.
         *
         * For classes that also support the {@link Gio.Initable} interface, the default
         * implementation of this method will run the `g_initable_init()` function
         * in a thread, so if you want to support asynchronous initialization via
         * threads, just implement the {@link Gio.AsyncInitable} interface without overriding
         * any interface methods.
         * @param io_priority the [I/O priority](iface.AsyncResult.html#io-priority) of the operation
         * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore.
         * @param callback a {@link Gio.AsyncReadyCallback} to call when the request is satisfied
         */
        init_async(
            io_priority: number,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Starts asynchronous initialization of the object implementing the
         * interface. This must be done before any real use of the object after
         * initial construction. If the object also implements {@link Gio.Initable} you can
         * optionally call `g_initable_init()` instead.
         *
         * This method is intended for language bindings. If writing in C,
         * `g_async_initable_new_async()` should typically be used instead.
         *
         * When the initialization is finished, `callback` will be called. You can
         * then call `g_async_initable_init_finish()` to get the result of the
         * initialization.
         *
         * Implementations may also support cancellation. If `cancellable` is not
         * `null`, then initialization can be cancelled by triggering the cancellable
         * object from another thread. If the operation was cancelled, the error
         * {@link Gio.IOErrorEnum.CANCELLED} will be returned. If `cancellable` is not `null`, and
         * the object doesn't support cancellable initialization, the error
         * {@link Gio.IOErrorEnum.NOT_SUPPORTED} will be returned.
         *
         * As with {@link Gio.Initable}, if the object is not initialized, or initialization
         * returns with an error, then all operations on the object except
         * `g_object_ref()` and `g_object_unref()` are considered to be invalid, and
         * have undefined behaviour. They will often fail with `g_critical()` or
         * `g_warning()`, but this must not be relied on.
         *
         * Callers should not assume that a class which implements {@link Gio.AsyncInitable} can
         * be initialized multiple times; for more information, see `g_initable_init()`.
         * If a class explicitly supports being initialized multiple times,
         * implementation requires yielding all subsequent calls to `init_async()` on the
         * results of the first call.
         *
         * For classes that also support the {@link Gio.Initable} interface, the default
         * implementation of this method will run the `g_initable_init()` function
         * in a thread, so if you want to support asynchronous initialization via
         * threads, just implement the {@link Gio.AsyncInitable} interface without overriding
         * any interface methods.
         * @param io_priority the [I/O priority](iface.AsyncResult.html#io-priority) of the operation
         * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore.
         * @param callback a {@link Gio.AsyncReadyCallback} to call when the request is satisfied
         */
        init_async(
            io_priority: number,
            cancellable: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<boolean> | void;
        /**
         * Finishes asynchronous initialization and returns the result.
         * See `g_async_initable_init_async()`.
         * @param res a {@link Gio.AsyncResult}.
         * @returns `true` if successful. If an error has occurred, this function will return `false` and set `error` appropriately if present.
         */
        init_finish(res: Gio.AsyncResult): boolean;
        /**
         * Finishes the async construction for the various g_async_initable_new
         * calls, returning the created object or `null` on error.
         * @param res the {@link Gio.AsyncResult} from the callback
         * @returns a newly created {@link GObject.Object},      or `null` on error. Free with `g_object_unref()`.
         */
        new_finish(res: Gio.AsyncResult): CameraDeviceMonitor;
        /**
         * Starts asynchronous initialization of the object implementing the
         * interface. This must be done before any real use of the object after
         * initial construction. If the object also implements {@link Gio.Initable} you can
         * optionally call `g_initable_init()` instead.
         *
         * This method is intended for language bindings. If writing in C,
         * `g_async_initable_new_async()` should typically be used instead.
         *
         * When the initialization is finished, `callback` will be called. You can
         * then call `g_async_initable_init_finish()` to get the result of the
         * initialization.
         *
         * Implementations may also support cancellation. If `cancellable` is not
         * `null`, then initialization can be cancelled by triggering the cancellable
         * object from another thread. If the operation was cancelled, the error
         * {@link Gio.IOErrorEnum.CANCELLED} will be returned. If `cancellable` is not `null`, and
         * the object doesn't support cancellable initialization, the error
         * {@link Gio.IOErrorEnum.NOT_SUPPORTED} will be returned.
         *
         * As with {@link Gio.Initable}, if the object is not initialized, or initialization
         * returns with an error, then all operations on the object except
         * `g_object_ref()` and `g_object_unref()` are considered to be invalid, and
         * have undefined behaviour. They will often fail with `g_critical()` or
         * `g_warning()`, but this must not be relied on.
         *
         * Callers should not assume that a class which implements {@link Gio.AsyncInitable} can
         * be initialized multiple times; for more information, see `g_initable_init()`.
         * If a class explicitly supports being initialized multiple times,
         * implementation requires yielding all subsequent calls to `init_async()` on the
         * results of the first call.
         *
         * For classes that also support the {@link Gio.Initable} interface, the default
         * implementation of this method will run the `g_initable_init()` function
         * in a thread, so if you want to support asynchronous initialization via
         * threads, just implement the {@link Gio.AsyncInitable} interface without overriding
         * any interface methods.
         * @param io_priority the [I/O priority](iface.AsyncResult.html#io-priority) of the operation
         * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore.
         * @param callback a {@link Gio.AsyncReadyCallback} to call when the request is satisfied
         * @virtual
         */
        vfunc_init_async(
            io_priority: number,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes asynchronous initialization and returns the result.
         * See `g_async_initable_init_async()`.
         * @param res a {@link Gio.AsyncResult}.
         * @virtual
         */
        vfunc_init_finish(res: Gio.AsyncResult): boolean;
        /**
         * Initializes the object implementing the interface.
         *
         * This method is intended for language bindings. If writing in C,
         * `g_initable_new()` should typically be used instead.
         *
         * The object must be initialized before any real use after initial
         * construction, either with this function or `g_async_initable_init_async()`.
         *
         * Implementations may also support cancellation. If `cancellable` is not `null`,
         * then initialization can be cancelled by triggering the cancellable object
         * from another thread. If the operation was cancelled, the error
         * {@link Gio.IOErrorEnum.CANCELLED} will be returned. If `cancellable` is not `null` and
         * the object doesn't support cancellable initialization the error
         * {@link Gio.IOErrorEnum.NOT_SUPPORTED} will be returned.
         *
         * If the object is not initialized, or initialization returns with an
         * error, then all operations on the object except `g_object_ref()` and
         * `g_object_unref()` are considered to be invalid, and have undefined
         * behaviour. See the [description][iface@Gio.Initable#description] for more details.
         *
         * Callers should not assume that a class which implements {@link Gio.Initable} can be
         * initialized multiple times, unless the class explicitly documents itself as
         * supporting this. Generally, a class’ implementation of `init()` can assume
         * (and assert) that it will only be called once. Previously, this documentation
         * recommended all {@link Gio.Initable} implementations should be idempotent; that
         * recommendation was relaxed in GLib 2.54.
         *
         * If a class explicitly supports being initialized multiple times, it is
         * recommended that the method is idempotent: multiple calls with the same
         * arguments should return the same results. Only the first call initializes
         * the object; further calls return the result of the first call.
         *
         * One reason why a class might need to support idempotent initialization is if
         * it is designed to be used via the singleton pattern, with a
         * {@link GObject.ObjectClass}.constructor that sometimes returns an existing instance.
         * In this pattern, a caller would expect to be able to call `g_initable_init()`
         * on the result of `g_object_new()`, regardless of whether it is in fact a new
         * instance.
         * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore.
         * @returns `true` if successful. If an error has occurred, this function will     return `false` and set `error` appropriately if present.
         */
        init(cancellable: Gio.Cancellable | null): boolean;
        /**
         * Initializes the object implementing the interface.
         *
         * This method is intended for language bindings. If writing in C,
         * `g_initable_new()` should typically be used instead.
         *
         * The object must be initialized before any real use after initial
         * construction, either with this function or `g_async_initable_init_async()`.
         *
         * Implementations may also support cancellation. If `cancellable` is not `null`,
         * then initialization can be cancelled by triggering the cancellable object
         * from another thread. If the operation was cancelled, the error
         * {@link Gio.IOErrorEnum.CANCELLED} will be returned. If `cancellable` is not `null` and
         * the object doesn't support cancellable initialization the error
         * {@link Gio.IOErrorEnum.NOT_SUPPORTED} will be returned.
         *
         * If the object is not initialized, or initialization returns with an
         * error, then all operations on the object except `g_object_ref()` and
         * `g_object_unref()` are considered to be invalid, and have undefined
         * behaviour. See the [description][iface@Gio.Initable#description] for more details.
         *
         * Callers should not assume that a class which implements {@link Gio.Initable} can be
         * initialized multiple times, unless the class explicitly documents itself as
         * supporting this. Generally, a class’ implementation of `init()` can assume
         * (and assert) that it will only be called once. Previously, this documentation
         * recommended all {@link Gio.Initable} implementations should be idempotent; that
         * recommendation was relaxed in GLib 2.54.
         *
         * If a class explicitly supports being initialized multiple times, it is
         * recommended that the method is idempotent: multiple calls with the same
         * arguments should return the same results. Only the first call initializes
         * the object; further calls return the result of the first call.
         *
         * One reason why a class might need to support idempotent initialization is if
         * it is designed to be used via the singleton pattern, with a
         * {@link GObject.ObjectClass}.constructor that sometimes returns an existing instance.
         * In this pattern, a caller would expect to be able to call `g_initable_init()`
         * on the result of `g_object_new()`, regardless of whether it is in fact a new
         * instance.
         * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore.
         * @virtual
         */
        vfunc_init(cancellable: Gio.Cancellable | null): boolean;
    }

    namespace Effect {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::control-valve': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::pipeline-desc': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            control_valve: Gst.Element;
            controlValve: Gst.Element;
            name: string;
            pipeline_desc: string;
            pipelineDesc: string;
        }
    }

    /**
     * Use the accessor functions below.
     * @gir-type Class
     */
    class Effect extends GObject.Object {
        static $gtype: GObject.GType<Effect>;

        // Properties

        /**
         * If the control valve is active, then the effect is currently connected to
         * a video stream, for previews.
         */
        get control_valve(): Gst.Element;
        set control_valve(val: Gst.Element);
        /**
         * If the control valve is active, then the effect is currently connected to
         * a video stream, for previews.
         */
        get controlValve(): Gst.Element;
        set controlValve(val: Gst.Element);
        /**
         * Name of the effect, for display in a UI.
         * @construct-only
         */
        get name(): string;
        /**
         * Description of the GStreamer pipeline associated with the effect.
         * @construct-only
         */
        get pipeline_desc(): string;
        /**
         * Description of the GStreamer pipeline associated with the effect.
         * @construct-only
         */
        get pipelineDesc(): string;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Effect.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Effect.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](name: string, pipeline_desc: string): Effect;

        // Signals

        /** @signal */
        connect<K extends keyof Effect.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Effect.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Effect.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Effect.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Effect.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Effect.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        /**
         * Load effects from standard directories, including the user's data directory.
         */
        static load_effects(): Effect[];
        /**
         * Load effect from file.
         * @param filename name of the file containing the effect specification
         */
        static load_from_file(filename: string): Effect;

        // Methods

        /**
         * Disable the preview of a {@link Cheese.Effect}.
         */
        disable_preview(): void;
        /**
         * Enable the preview of a {@link Cheese.Effect}.
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
         * @returns `true` if the preview is connected, `false` otherwise.
         */
        is_preview_connected(): boolean;
    }

    namespace FileUtil {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * Use the accessor functions below.
     * @gir-type Class
     */
    class FileUtil extends GObject.Object {
        static $gtype: GObject.GType<FileUtil>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: FileUtil.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<FileUtil.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): FileUtil;

        // Signals

        /** @signal */
        connect<K extends keyof FileUtil.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, FileUtil.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof FileUtil.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, FileUtil.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof FileUtil.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<FileUtil.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Creates a filename for one of the three media types: photo, photo burst or
         * video. If a filename for a photo burst image was previously created, this
         * function increments the burst count automatically. To start a new burst,
         * first call `cheese_fileutil_reset_burst()`.
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
         * `cheese_fileutil_get_new_media_filename()` with a photo burst starts a new
         * burst of photos.
         */
        reset_burst(): void;
    }

    /**
     * @gir-type Alias
     */
    type CameraClass = typeof Camera;
    /**
     * @gir-type Alias
     */
    type CameraDeviceClass = typeof CameraDevice;
    /**
     * @gir-type Alias
     */
    type CameraDeviceMonitorClass = typeof CameraDeviceMonitor;
    /**
     * @gir-type Struct
     */
    abstract class CameraDeviceMonitorPrivate {
        static $gtype: GObject.GType<CameraDeviceMonitorPrivate>;
    }

    /**
     * @gir-type Struct
     */
    abstract class CameraPrivate {
        static $gtype: GObject.GType<CameraPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type EffectClass = typeof Effect;
    /**
     * @gir-type Alias
     */
    type FileUtilClass = typeof FileUtil;
    /**
     * A description of the resolution, in pixels, of the format to capture with a
     * {@link Cheese.CameraDevice}.
     * @gir-type Struct
     */
    class VideoFormat {
        static $gtype: GObject.GType<VideoFormat>;

        // Fields

        width: number;
        height: number;

        // Constructors

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
