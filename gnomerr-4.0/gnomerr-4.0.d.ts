
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
import type GnomeDesktop from '@girs/gnomedesktop-4.0';
import type Gio from '@girs/gio-2.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type GModule from '@girs/gmodule-2.0';
import type GdkPixbuf from '@girs/gdkpixbuf-2.0';
import type GDesktopEnums from '@girs/gdesktopenums-3.0';
import type Gdk from '@girs/gdk-4.0';
import type cairo from 'cairo';
import type PangoCairo from '@girs/pangocairo-1.0';
import type Pango from '@girs/pango-1.0';
import type HarfBuzz from '@girs/harfbuzz-0.0';
import type freetype2 from '@girs/freetype2-2.0';

export namespace GnomeRR {

    /**
     * GnomeRR-4.0
     */


    /**
     * @gir-type Enum
     */
    enum DpmsMode {
        ON,
        STANDBY,
        SUSPEND,
        OFF,
        UNKNOWN,
    }


    /**
     * @gir-type Enum
     */
    export namespace DpmsModeType {
        export const $gtype: GObject.GType<DpmsModeType>;
    }

    /**
     * @gir-type Enum
     */
    enum DpmsModeType {
        ON,
        STANDBY,
        SUSPEND,
        OFF,
        UNKNOWN,
    }


    /**
     * @gir-type Struct
     */
    class Error extends GLib.Error {
        static $gtype: GObject.GType<GLib.Error>;

        // Static fields
        static UNKNOWN: number;

        static NO_RANDR_EXTENSION: number;

        static RANDR_ERROR: number;

        static BOUNDS_ERROR: number;

        static CRTC_ASSIGNMENT: number;

        static NO_MATCHING_CONFIG: number;

        static NO_DPMS_EXTENSION: number;

        // Constructors
        constructor(options: { message: string, code: number });
    }


    const CONNECTOR_TYPE_PANEL: string;

    /**
     * Returns the error domain used by the GnomeRR API.
     * @returns the GnomeRR error domain
     */
    function error_quark(): GLib.Quark;

    /**
     * @gir-type Flags
     */
    enum Rotation {
        ROTATION_NEXT,
        ROTATION_0,
        ROTATION_90,
        ROTATION_180,
        ROTATION_270,
        REFLECT_X,
        REFLECT_Y,
    }


    namespace Config {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "notify::screen": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            screen: Screen;
        }
    }

    /**
     * @gir-type Class
     */
    class Config extends GObject.Object {
        static $gtype: GObject.GType<Config>;

        // Properties
        /**
         * @construct-only
         */
        set screen(val: Screen);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Config.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<Config.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static new_current(screen: Screen): Config;

        // Signals
        /** @signal */
        connect<K extends keyof Config.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Config.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Config.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Config.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Config.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Config.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * @param screen 
         */
        applicable(screen: Screen): boolean;

        /**
         * @param screen 
         */
        apply(screen: Screen): boolean;

        /**
         * @param screen 
         */
        apply_persistent(screen: Screen): boolean;

        ensure_primary(): boolean;

        /**
         * @param config2 
         */
        equal(config2: Config): boolean;

        /**
         * @returns whether at least two outputs are at (0, 0) offset and they have the same width/height.  Those outputs are of course connected and on (i.e. they have a CRTC assigned).
         */
        get_clone(): boolean;

        /**
         * @returns the output configuration for this {@link GnomeRR.Config}
         */
        get_outputs(): OutputInfo[];

        load_current(): boolean;

        /**
         * @param config2 
         */
        match(config2: Config): boolean;

        sanitize(): void;

        /**
         * @param clone 
         */
        set_clone(clone: boolean): void;
    }


    namespace OutputInfo {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {

        }
    }

    /**
     * The representation of an output, which can be used for
     * querying and setting display state.
     * @gir-type Class
     */
    class OutputInfo extends GObject.Object {
        static $gtype: GObject.GType<OutputInfo>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: OutputInfo.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<OutputInfo.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals
        /** @signal */
        connect<K extends keyof OutputInfo.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, OutputInfo.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof OutputInfo.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, OutputInfo.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof OutputInfo.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<OutputInfo.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        get_aspect_ratio(): number;

        /**
         * @returns the display name of this output
         */
        get_display_name(): string;

        /**
         * Get the geometry for the monitor connected to the specified output.
         * 
         * If the monitor is a tiled monitor, it returns the geometry for the complete monitor.
         */
        get_geometry(): [number, number, number, number];

        /**
         * Retrieves the output name.
         * @returns the output name
         */
        get_name(): string;

        get_preferred_height(): number;

        get_preferred_width(): number;

        get_primary(): boolean;

        get_product(): string;

        get_refresh_rate(): number;

        get_rotation(): Rotation;

        get_serial(): string;

        get_underscanning(): boolean;

        /**
         * @returns the output's vendor string
         */
        get_vendor(): string;

        /**
         * @returns whether there is a CRTC assigned to this output (i.e. a signal is being sent to it)
         */
        is_active(): boolean;

        /**
         * @returns whether the output is physically connected to a monitor
         */
        is_connected(): boolean;

        /**
         * @returns `true` if the specified output is connected to the primary tile of a monitor or to an untiled monitor, `false` if the output is connected to a secondary tile.
         */
        is_primary_tile(): boolean;

        /**
         * @param active 
         */
        set_active(active: boolean): void;

        /**
         * Set the geometry for the monitor connected to the specified output.
         * 
         * If the monitor is a tiled monitor, it sets the geometry for the complete monitor.
         * @param x x offset for monitor
         * @param y y offset for monitor
         * @param width monitor width
         * @param height monitor height
         */
        set_geometry(x: number, y: number, width: number, height: number): void;

        /**
         * @param primary 
         */
        set_primary(primary: boolean): void;

        /**
         * @param rate 
         */
        set_refresh_rate(rate: number): void;

        /**
         * @param rotation 
         */
        set_rotation(rotation: Rotation): void;

        /**
         * @param underscanning 
         */
        set_underscanning(underscanning: boolean): void;

        /**
         * @param rotation 
         */
        supports_rotation(rotation: Rotation): boolean;
    }


    namespace Screen {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            /**
             * @signal
             * @run-first
             */
            changed: () => void;
            /**
             * This signal is emitted when a display device is connected to a
             * port, or a port is hotplugged with an active output. The latter
             * can happen if a laptop is docked, and the dock provides a new
             * active output.
             * 
             * The `output` value is not a {@link GObject.Object}. The returned `output` value can
             * only assume to be valid during the emission of the signal (i.e. within
             * your signal handler only), as it may change later when the `screen`
             * is modified due to an event from the X server, or due to another
             * place in the application modifying the `screen` and the `output`.
             * Therefore, deal with changes to the `output` right in your signal
             * handler, instead of keeping the `output` reference for an async or
             * idle function.
             * @signal
             * @run-first
             */
            "output-connected": (arg0: Output) => void;
            /**
             * This signal is emitted when a display device is disconnected from
             * a port, or a port output is hot-unplugged. The latter can happen
             * if a laptop is undocked, and the dock provided the output.
             * 
             * The `output` value is not a {@link GObject.Object}. The returned `output` value can
             * only assume to be valid during the emission of the signal (i.e. within
             * your signal handler only), as it may change later when the `screen`
             * is modified due to an event from the X server, or due to another
             * place in the application modifying the `screen` and the `output`.
             * Therefore, deal with changes to the `output` right in your signal
             * handler, instead of keeping the `output` reference for an async or
             * idle function.
             * @signal
             * @run-first
             */
            "output-disconnected": (arg0: Output) => void;
            "notify::dpms-mode": (pspec: GObject.ParamSpec) => void;
            "notify::gdk-display": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps, Gio.AsyncInitable.ConstructorProps, Gio.Initable.ConstructorProps {
            dpms_mode: DpmsModeType;
            dpmsMode: DpmsModeType;
            gdk_display: Gdk.Display;
            gdkDisplay: Gdk.Display;
        }
    }

    /**
     * @gir-type Class
     */
    class Screen extends GObject.Object implements Gio.AsyncInitable<Screen>, Gio.Initable {
        static $gtype: GObject.GType<Screen>;

        // Properties
        /**
         * @default GnomeRR.DpmsModeType.UNKNOWN
         */
        get dpms_mode(): DpmsModeType;
        set dpms_mode(val: DpmsModeType);

        /**
         * @default GnomeRR.DpmsModeType.UNKNOWN
         */
        get dpmsMode(): DpmsModeType;
        set dpmsMode(val: DpmsModeType);

        /**
         * @construct-only
         */
        get gdk_display(): Gdk.Display;

        /**
         * @construct-only
         */
        get gdkDisplay(): Gdk.Display;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Screen.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<Screen.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](display: Gdk.Display): Screen;

        static new_finish(result: Gio.AsyncResult): Screen;

        // Conflicted with Gio.AsyncInitable.new_finish
        static new_finish(...args: never[]): any;

        // Signals
        /** @signal */
        connect<K extends keyof Screen.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Screen.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Screen.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Screen.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Screen.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Screen.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods
        /**
         * Asynchronously creates a new {@link GnomeRR.Screen} instance.
         * 
         * On both success and error, `callback` will be invoked. You should use
         * `gnome_rr_screen_new_finish()` to retrieve the newly created {@link GnomeRR.Screen}
         * instance.
         * @param display the windowing system connection used to query the display
         * @param callback the function to call when the {@link GnomeRR.Screen} is ready, or on error
         */
        static new_async(display: Gdk.Display, callback: (Gio.AsyncReadyCallback<Screen> | null)): void;

        // Virtual methods
        /**
         * @virtual
         */
        vfunc_changed(): void;

        /**
         * @param output 
         * @virtual
         */
        vfunc_output_connected(output: Output): void;

        /**
         * @param output 
         * @virtual
         */
        vfunc_output_disconnected(output: Output): void;

        // Methods
        /**
         * Retrieves the CRTC of the screen using the given identifier.
         * @param id the identifier of a CRTC
         * @returns the CRTC identified by `id`
         */
        get_crtc_by_id(id: number): Crtc;

        get_dpms_mode(): [boolean, DpmsMode];

        /**
         * Retrieves the output of a screen using the given identifier.
         * @param id the identifier of an output
         * @returns the output identified by `id`
         */
        get_output_by_id(id: number): Output;

        /**
         * Retrieves the output for the given name.
         * @param name 
         * @returns the output identified by `name`
         */
        get_output_by_name(name: string): Output;

        /**
         * Get the ranges of the screen
         */
        get_ranges(): [number, number, number, number];

        /**
         * Lists all available XRandR clone modes.
         * @returns the available XRandR clone modes
         */
        list_clone_modes(): Mode[];

        /**
         * List all CRTCs of the given screen.
         * @returns the available CRTCs
         */
        list_crtcs(): Crtc[];

        /**
         * Lists all available XRandR modes.
         * @returns the available XRandR modes
         */
        list_modes(): Mode[];

        /**
         * List all outputs of the given screen.
         * @returns the available outputs
         */
        list_outputs(): Output[];

        /**
         * Refreshes the screen configuration, and calls the screen's callback if it
         * exists and if the screen's configuration changed.
         * @returns TRUE if the screen's configuration changed; otherwise, the function returns FALSE and a NULL error if the configuration didn't change, or FALSE and a non-NULL error if there was an error while refreshing the configuration.
         */
        refresh(): boolean;

        /**
         * This method also disables the DPMS timeouts.
         * @param mode 
         */
        set_dpms_mode(mode: DpmsMode): boolean;

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
        init_async(io_priority: number, cancellable: (Gio.Cancellable | null)): globalThis.Promise<boolean>;

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
        init_async(io_priority: number, cancellable: (Gio.Cancellable | null), callback: (Gio.AsyncReadyCallback<this> | null)): void;

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
        init_async(io_priority: number, cancellable: (Gio.Cancellable | null), callback?: (Gio.AsyncReadyCallback<this> | null)): (globalThis.Promise<boolean> | void);

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
        new_finish(res: Gio.AsyncResult): Screen;

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
        vfunc_init_async(io_priority: number, cancellable: (Gio.Cancellable | null), callback: (Gio.AsyncReadyCallback<this> | null)): void;

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
        init(cancellable: (Gio.Cancellable | null)): boolean;

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
        vfunc_init(cancellable: (Gio.Cancellable | null)): boolean;
    }


    /**
     * @gir-type Struct
     */
    class CTM {
        static $gtype: GObject.GType<CTM>;
    }


    /**
     * @gir-type Alias
     */
    type ConfigClass = typeof Config;

    /**
     * @gir-type Struct
     */
    abstract class Crtc {
        static $gtype: GObject.GType<Crtc>;

        // Methods
        /**
         * @param output 
         */
        can_drive_output(output: Output): boolean;

        /**
         * @returns the current mode of this crtc
         */
        get_current_mode(): Mode;

        get_current_rotation(): Rotation;

        /**
         * @param size 
         * @returns `true` for success
         */
        get_gamma(size: number): [boolean, number, number, number];

        get_id(): number;

        get_position(): [number, number];

        get_rotations(): Rotation;

        /**
         * @param size 
         * @param red 
         * @param green 
         * @param blue 
         */
        set_gamma(size: number, red: number, green: number, blue: number): boolean;

        /**
         * @param rotation 
         */
        supports_rotation(rotation: Rotation): boolean;
    }


    /**
     * @gir-type Struct
     */
    abstract class Mode {
        static $gtype: GObject.GType<Mode>;

        // Methods
        get_freq(): number;

        get_freq_f(): number;

        get_height(): number;

        get_id(): number;

        get_is_interlaced(): boolean;

        /**
         * Returns TRUE if this mode is a tiled
         * mode created for span a tiled monitor.
         */
        get_is_tiled(): boolean;

        get_width(): number;
    }


    /**
     * @gir-type Struct
     */
    abstract class Output {
        static $gtype: GObject.GType<Output>;

        // Methods
        /**
         * Checks whether the given output can clone another output.
         * @param clone the output to compare
         * @returns `TRUE` if the output can clone another output
         */
        can_clone(clone: Output): boolean;

        /**
         * Retrieves the backlight brightness of the given output.
         * @returns The currently set backlight brightness
         */
        get_backlight(): number;

        /**
         * Retrieves the CRTC of the given output.
         * @returns the CRTC of the output
         */
        get_crtc(): Crtc;

        /**
         * Retrieves the current mode of the given output.
         * @returns the current mode of this output
         */
        get_current_mode(): Mode;

        /**
         * Retrieves the display name of the given output.
         * @returns the display name
         */
        get_display_name(): string;

        /**
         * @param size 
         */
        get_edid_data(size: (bigint | number)): number;

        get_id(): number;

        /**
         * Retrieves the model identifiers from the EDID of the given output.
         */
        get_ids_from_edid(): [string, string, string];

        /**
         * Checks whether the given output is the primary output.
         * @returns `TRUE` if the output is the primary one
         */
        get_is_primary(): boolean;

        get_is_underscanning(): boolean;

        /**
         * Retrieves the value of the minimum backlight step for the given output,
         * as a percentage.
         * @returns The minimum backlight step available in percent
         */
        get_min_backlight_step(): number;

        /**
         * Retrieves the name of the given output.
         * @returns the name of the output
         */
        get_name(): string;

        /**
         * Retrieves the physical size of the given output.
         */
        get_physical_size(): [number, number];

        get_position(): [number, number];

        /**
         * Retrieves all the possible CRTC for the given output.
         * @returns the list of possible CRTC
         */
        get_possible_crtcs(): Crtc[];

        /**
         * Retrieves the preferred mode of the given output.
         * @returns the preferred mode of the output
         */
        get_preferred_mode(): Mode;

        /**
         * Checks whether the given output is a built-in display.
         * @returns `TRUE` if the output is a built-in display
         */
        is_builtin_display(): boolean;

        /**
         * Retrieves all available modes of the given output.
         * @returns a list of modes
         */
        list_modes(): Mode[];

        /**
         * Sets the backlight level for the given output.
         * 
         * The value is a percentage, with a range of [0, 100].
         * @param value the absolute value of the backlight
         * @returns `TRUE` for success
         */
        set_backlight(value: number): boolean;

        /**
         * Sets the color transformation matrix for the given output.
         * @param ctm the color transformation matrix
         * @returns `TRUE` on success
         */
        set_color_transform(ctm: CTM): boolean;

        supports_color_transform(): boolean;

        /**
         * Checks whether the given output supports a mode.
         * @param mode the mode to compare
         * @returns `TRUE` if the mode is supported
         */
        supports_mode(mode: Mode): boolean;

        supports_underscanning(): boolean;
    }


    /**
     * @gir-type Alias
     */
    type OutputInfoClass = typeof OutputInfo;

    /**
     * @gir-type Alias
     */
    type ScreenClass = typeof Screen;

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

export default GnomeRR;

// END
