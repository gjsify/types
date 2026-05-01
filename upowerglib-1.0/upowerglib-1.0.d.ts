
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
import type Gio from '@girs/gio-2.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type GModule from '@girs/gmodule-2.0';

export namespace UPowerGlib {

    /**
     * UPowerGlib-1.0
     */


    /**
     * The device type.
     * @gir-type Enum
     */
    enum DeviceKind {
        UNKNOWN,
        LINE_POWER,
        BATTERY,
        UPS,
        MONITOR,
        MOUSE,
        KEYBOARD,
        PDA,
        PHONE,
        MEDIA_PLAYER,
        TABLET,
        COMPUTER,
        GAMING_INPUT,
        PEN,
        TOUCHPAD,
        MODEM,
        NETWORK,
        HEADSET,
        SPEAKERS,
        HEADPHONES,
        VIDEO,
        OTHER_AUDIO,
        REMOTE_CONTROL,
        PRINTER,
        SCANNER,
        CAMERA,
        WEARABLE,
        TOY,
        BLUETOOTH_GENERIC,
        LAST,
    }


    /**
     * The level of a battery. Only values up to, and including
     * {@link UPowerGlib.DeviceLevel.ACTION} are relevant for the `WarningLevel`.
     * The `BatteryLevel` only uses the following values:
     * - {@link UPowerGlib.DeviceLevel.UNKNOWN}
     * - {@link UPowerGlib.DeviceLevel.NONE}
     * - {@link UPowerGlib.DeviceLevel.LOW}
     * - {@link UPowerGlib.DeviceLevel.CRITICAL}
     * - {@link UPowerGlib.DeviceLevel.NORMAL}
     * - {@link UPowerGlib.DeviceLevel.HIGH}
     * - {@link UPowerGlib.DeviceLevel.FULL}
     * @gir-type Enum
     */
    enum DeviceLevel {
        UNKNOWN,
        NONE,
        DISCHARGING,
        LOW,
        CRITICAL,
        ACTION,
        NORMAL,
        HIGH,
        FULL,
        LAST,
    }


    /**
     * The device state.
     * @gir-type Enum
     */
    enum DeviceState {
        UNKNOWN,
        CHARGING,
        DISCHARGING,
        EMPTY,
        FULLY_CHARGED,
        PENDING_CHARGE,
        PENDING_DISCHARGE,
        LAST,
    }


    /**
     * The device technology.
     * @gir-type Enum
     */
    enum DeviceTechnology {
        UNKNOWN,
        LITHIUM_ION,
        LITHIUM_POLYMER,
        LITHIUM_IRON_PHOSPHATE,
        LEAD_ACID,
        NICKEL_CADMIUM,
        NICKEL_METAL_HYDRIDE,
        LAST,
    }


    const MAJOR_VERSION: number;

    /**
     * The compile-time micro version
     */
    const MICRO_VERSION: number;

    const MINOR_VERSION: number;

    namespace Client {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            /**
             * The ::device-added signal is emitted when a power device is added.
             * @signal
             * @since 0.9.0
             * @run-last
             */
            "device-added": (arg0: Device) => void;
            /**
             * The ::device-removed signal is emitted when a power device is removed.
             * @signal
             * @since 1.0
             * @run-last
             */
            "device-removed": (arg0: string) => void;
            "notify::daemon-version": (pspec: GObject.ParamSpec) => void;
            "notify::lid-is-closed": (pspec: GObject.ParamSpec) => void;
            "notify::lid-is-present": (pspec: GObject.ParamSpec) => void;
            "notify::on-battery": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps, Gio.AsyncInitable.ConstructorProps, Gio.Initable.ConstructorProps {
            daemon_version: string;
            daemonVersion: string;
            lid_is_closed: boolean;
            lidIsClosed: boolean;
            lid_is_present: boolean;
            lidIsPresent: boolean;
            on_battery: boolean;
            onBattery: boolean;
        }
    }

    /**
     * @gir-type Class
     */
    class Client extends GObject.Object implements Gio.AsyncInitable<Client>, Gio.Initable {
        static $gtype: GObject.GType<Client>;

        // Properties
        /**
         * The daemon version.
         * @since 0.9.0
         * @read-only
         * @default null
         */
        get daemon_version(): string;

        /**
         * The daemon version.
         * @since 0.9.0
         * @read-only
         * @default null
         */
        get daemonVersion(): string;

        /**
         * If the laptop lid is closed.
         * @since 0.9.0
         * @read-only
         * @default false
         */
        get lid_is_closed(): boolean;

        /**
         * If the laptop lid is closed.
         * @since 0.9.0
         * @read-only
         * @default false
         */
        get lidIsClosed(): boolean;

        /**
         * If a laptop lid is present.
         * @since 0.9.0
         * @read-only
         * @default false
         */
        get lid_is_present(): boolean;

        /**
         * If a laptop lid is present.
         * @since 0.9.0
         * @read-only
         * @default false
         */
        get lidIsPresent(): boolean;

        /**
         * If the computer is on battery power.
         * @since 0.9.0
         * @read-only
         * @default false
         */
        get on_battery(): boolean;

        /**
         * If the computer is on battery power.
         * @since 0.9.0
         * @read-only
         * @default false
         */
        get onBattery(): boolean;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Client.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<Client.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): Client;

        static new_finish(res: Gio.AsyncResult): Client;

        // Conflicted with Gio.AsyncInitable.new_finish
        static new_finish(...args: never[]): any;

        static new_full(cancellable: (Gio.Cancellable | null)): Client;

        // Signals
        /** @signal */
        connect<K extends keyof Client.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Client.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Client.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Client.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Client.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Client.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods
        /**
         * Asynchronously creates a new {@link UPowerGlib.Client} object.
         * 
         * This is an asynchronous failable function.
         * @param cancellable a {@link Gio.Cancellable} or `null`
         * @param callback a {@link Gio.AsyncReadyCallback} to call when the request is satisfied
         */
        static new_async(cancellable: (Gio.Cancellable | null), callback: (Gio.AsyncReadyCallback<Client> | null)): void;

        // Virtual methods
        /**
         * @param device 
         * @virtual
         */
        vfunc_device_added(device: Device): void;

        /**
         * @param object_path 
         * @virtual
         */
        vfunc_device_removed(object_path: string): void;

        // Methods
        /**
         * Gets a string representing the configured critical action,
         * depending on availability.
         * @returns the action name, or `null` on error.
         */
        get_critical_action(): string;

        /**
         * Get UPower daemon version.
         * @returns string containing the daemon version, e.g. 008
         */
        get_daemon_version(): string;

        /**
         * Get a copy of the device objects. This function does not set the free
         * function for the {@link GLib.PtrArray} so you need use g_object_unref on all
         * elements when you are finished with the array.
         * @returns an array of {@link UPowerGlib.Device} objects or `null` on error, free with `g_ptr_array_unref()`
         */
        get_devices(): Device[];

        /**
         * Get a copy of the device objects.
         * @returns an array of {@link UPowerGlib.Device} objects or `null` on error, free with `g_ptr_array_unref()`
         */
        get_devices2(): Device[];

        /**
         * Asynchronously fetches the list of {@link UPowerGlib.Device} objects.
         * @param cancellable a {@link Gio.Cancellable} or `null`
         */
        get_devices_async(cancellable: (Gio.Cancellable | null)): globalThis.Promise<Device[]>;

        /**
         * Asynchronously fetches the list of {@link UPowerGlib.Device} objects.
         * @param cancellable a {@link Gio.Cancellable} or `null`
         * @param callback a {@link Gio.AsyncReadyCallback} to call when the request is satisfied
         */
        get_devices_async(cancellable: (Gio.Cancellable | null), callback: (Gio.AsyncReadyCallback<this> | null)): void;

        /**
         * Asynchronously fetches the list of {@link UPowerGlib.Device} objects.
         * @param cancellable a {@link Gio.Cancellable} or `null`
         * @param callback a {@link Gio.AsyncReadyCallback} to call when the request is satisfied
         */
        get_devices_async(cancellable: (Gio.Cancellable | null), callback?: (Gio.AsyncReadyCallback<this> | null)): (globalThis.Promise<Device[]> | void);

        /**
         * Finishes an operation started with `up_client_get_devices_async()`.
         * @param res a {@link Gio.AsyncResult} obtained from the {@link Gio.AsyncReadyCallback} passed     to `up_client_get_devices_async()`
         * @returns an array of     {@link UPowerGlib.Device} objects or `null` on error.
         */
        get_devices_finish(res: Gio.AsyncResult): Device[];

        /**
         * Get the composite display device.
         * @returns a {@link UPowerGlib.Device} object, or `null` on error.
         */
        get_display_device(): Device;

        /**
         * Get whether the laptop lid is closed.
         * @returns `true` if lid is closed or `false` otherwise.
         */
        get_lid_is_closed(): boolean;

        /**
         * Get whether a laptop lid is present on this machine.
         * @returns `true` if the machine has a laptop lid
         */
        get_lid_is_present(): boolean;

        /**
         * Get whether the system is running on battery power.
         * @returns `true` if the system is currently running on battery, `false` otherwise.
         */
        get_on_battery(): boolean;

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
        new_finish(res: Gio.AsyncResult): Client;

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


    namespace Device {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "notify::battery-level": (pspec: GObject.ParamSpec) => void;
            "notify::capacity": (pspec: GObject.ParamSpec) => void;
            "notify::capacity-level": (pspec: GObject.ParamSpec) => void;
            "notify::charge-cycles": (pspec: GObject.ParamSpec) => void;
            "notify::charge-end-threshold": (pspec: GObject.ParamSpec) => void;
            "notify::charge-start-threshold": (pspec: GObject.ParamSpec) => void;
            "notify::charge-threshold-enabled": (pspec: GObject.ParamSpec) => void;
            "notify::charge-threshold-supported": (pspec: GObject.ParamSpec) => void;
            "notify::energy": (pspec: GObject.ParamSpec) => void;
            "notify::energy-empty": (pspec: GObject.ParamSpec) => void;
            "notify::energy-full": (pspec: GObject.ParamSpec) => void;
            "notify::energy-full-design": (pspec: GObject.ParamSpec) => void;
            "notify::energy-rate": (pspec: GObject.ParamSpec) => void;
            "notify::has-history": (pspec: GObject.ParamSpec) => void;
            "notify::has-statistics": (pspec: GObject.ParamSpec) => void;
            "notify::icon-name": (pspec: GObject.ParamSpec) => void;
            "notify::is-present": (pspec: GObject.ParamSpec) => void;
            "notify::is-rechargeable": (pspec: GObject.ParamSpec) => void;
            "notify::kind": (pspec: GObject.ParamSpec) => void;
            "notify::luminosity": (pspec: GObject.ParamSpec) => void;
            "notify::model": (pspec: GObject.ParamSpec) => void;
            "notify::native-path": (pspec: GObject.ParamSpec) => void;
            "notify::online": (pspec: GObject.ParamSpec) => void;
            "notify::percentage": (pspec: GObject.ParamSpec) => void;
            "notify::power-supply": (pspec: GObject.ParamSpec) => void;
            "notify::serial": (pspec: GObject.ParamSpec) => void;
            "notify::state": (pspec: GObject.ParamSpec) => void;
            "notify::technology": (pspec: GObject.ParamSpec) => void;
            "notify::temperature": (pspec: GObject.ParamSpec) => void;
            "notify::time-to-empty": (pspec: GObject.ParamSpec) => void;
            "notify::time-to-full": (pspec: GObject.ParamSpec) => void;
            "notify::update-time": (pspec: GObject.ParamSpec) => void;
            "notify::vendor": (pspec: GObject.ParamSpec) => void;
            "notify::voltage": (pspec: GObject.ParamSpec) => void;
            "notify::voltage-max-design": (pspec: GObject.ParamSpec) => void;
            "notify::voltage-min-design": (pspec: GObject.ParamSpec) => void;
            "notify::warning-level": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            battery_level: number;
            batteryLevel: number;
            capacity: number;
            capacity_level: string;
            capacityLevel: string;
            charge_cycles: number;
            chargeCycles: number;
            charge_end_threshold: number;
            chargeEndThreshold: number;
            charge_start_threshold: number;
            chargeStartThreshold: number;
            charge_threshold_enabled: boolean;
            chargeThresholdEnabled: boolean;
            charge_threshold_supported: boolean;
            chargeThresholdSupported: boolean;
            energy: number;
            energy_empty: number;
            energyEmpty: number;
            energy_full: number;
            energyFull: number;
            energy_full_design: number;
            energyFullDesign: number;
            energy_rate: number;
            energyRate: number;
            has_history: boolean;
            hasHistory: boolean;
            has_statistics: boolean;
            hasStatistics: boolean;
            icon_name: string;
            iconName: string;
            is_present: boolean;
            isPresent: boolean;
            is_rechargeable: boolean;
            isRechargeable: boolean;
            kind: number;
            luminosity: number;
            model: string;
            native_path: string;
            nativePath: string;
            online: boolean;
            percentage: number;
            power_supply: boolean;
            powerSupply: boolean;
            serial: string;
            state: number;
            technology: number;
            temperature: number;
            time_to_empty: (bigint | number);
            timeToEmpty: (bigint | number);
            time_to_full: (bigint | number);
            timeToFull: (bigint | number);
            update_time: (bigint | number);
            updateTime: (bigint | number);
            vendor: string;
            voltage: number;
            voltage_max_design: number;
            voltageMaxDesign: number;
            voltage_min_design: number;
            voltageMinDesign: number;
            warning_level: number;
            warningLevel: number;
        }
    }

    /**
     * @gir-type Class
     */
    class Device extends GObject.Object {
        static $gtype: GObject.GType<Device>;

        // Properties
        /**
         * The battery level, e.g. {@link UPowerGlib.DeviceLevel.CRITICAL}. If this is something
         * other than {@link UPowerGlib.DeviceLevel.NONE}, then User Interfaces should use this
         * approximate level instead of percentages.
         * @since 1.0
         * @default 1
         */
        get battery_level(): number;
        set battery_level(val: number);

        /**
         * The battery level, e.g. {@link UPowerGlib.DeviceLevel.CRITICAL}. If this is something
         * other than {@link UPowerGlib.DeviceLevel.NONE}, then User Interfaces should use this
         * approximate level instead of percentages.
         * @since 1.0
         * @default 1
         */
        get batteryLevel(): number;
        set batteryLevel(val: number);

        /**
         * The percentage capacity of the device where 100% means the device has
         * the same charge potential as when it was manufactured.
         * @since 0.9.0
         * @default 100
         */
        get capacity(): number;
        set capacity(val: number);

        /**
         * Coarse representation of battery capacity. The value is one of the following:
         * Unknown, Critical, Low, Normal, High, and Full.
         * @since 1.90.10
         * @default null
         */
        get capacity_level(): string;
        set capacity_level(val: string);

        /**
         * Coarse representation of battery capacity. The value is one of the following:
         * Unknown, Critical, Low, Normal, High, and Full.
         * @since 1.90.10
         * @default null
         */
        get capacityLevel(): string;
        set capacityLevel(val: string);

        /**
         * The number of charge cycles for the battery, or -1 if unknown
         * or non-applicable.
         * @since 1.0
         * @default -1
         */
        get charge_cycles(): number;
        set charge_cycles(val: number);

        /**
         * The number of charge cycles for the battery, or -1 if unknown
         * or non-applicable.
         * @since 1.0
         * @default -1
         */
        get chargeCycles(): number;
        set chargeCycles(val: number);

        /**
         * The charge end threshold of a battery.
         * @since 1.90.5
         * @default 100
         */
        get charge_end_threshold(): number;
        set charge_end_threshold(val: number);

        /**
         * The charge end threshold of a battery.
         * @since 1.90.5
         * @default 100
         */
        get chargeEndThreshold(): number;
        set chargeEndThreshold(val: number);

        /**
         * The charge start threshold of a battery.
         * @since 1.90.5
         * @default 0
         */
        get charge_start_threshold(): number;
        set charge_start_threshold(val: number);

        /**
         * The charge start threshold of a battery.
         * @since 1.90.5
         * @default 0
         */
        get chargeStartThreshold(): number;
        set chargeStartThreshold(val: number);

        /**
         * The charge threshold of a battery is enabled, or false if unknown
         * or non-applicable.
         * @since 1.90.5
         * @default false
         */
        get charge_threshold_enabled(): boolean;
        set charge_threshold_enabled(val: boolean);

        /**
         * The charge threshold of a battery is enabled, or false if unknown
         * or non-applicable.
         * @since 1.90.5
         * @default false
         */
        get chargeThresholdEnabled(): boolean;
        set chargeThresholdEnabled(val: boolean);

        /**
         * The charge threshold of a battery is supported, or false if unknown
         * or non-applicable.
         * @since 1.90.5
         * @default false
         */
        get charge_threshold_supported(): boolean;
        set charge_threshold_supported(val: boolean);

        /**
         * The charge threshold of a battery is supported, or false if unknown
         * or non-applicable.
         * @since 1.90.5
         * @default false
         */
        get chargeThresholdSupported(): boolean;
        set chargeThresholdSupported(val: boolean);

        /**
         * The energy left in the device. Measured in mWh.
         * @since 0.9.0
         * @default 0
         */
        get energy(): number;
        set energy(val: number);

        /**
         * The energy the device will have when it is empty. This is usually zero.
         * Measured in mWh.
         * @since 0.9.0
         * @default 0
         */
        get energy_empty(): number;
        set energy_empty(val: number);

        /**
         * The energy the device will have when it is empty. This is usually zero.
         * Measured in mWh.
         * @since 0.9.0
         * @default 0
         */
        get energyEmpty(): number;
        set energyEmpty(val: number);

        /**
         * The amount of energy when the device is fully charged. Measured in mWh.
         * @since 0.9.0
         * @default 0
         */
        get energy_full(): number;
        set energy_full(val: number);

        /**
         * The amount of energy when the device is fully charged. Measured in mWh.
         * @since 0.9.0
         * @default 0
         */
        get energyFull(): number;
        set energyFull(val: number);

        /**
         * The amount of energy when the device was brand new. Measured in mWh.
         * @since 0.9.0
         * @default 0
         */
        get energy_full_design(): number;
        set energy_full_design(val: number);

        /**
         * The amount of energy when the device was brand new. Measured in mWh.
         * @since 0.9.0
         * @default 0
         */
        get energyFullDesign(): number;
        set energyFullDesign(val: number);

        /**
         * The rate of discharge or charge. Measured in mW.
         * @since 0.9.0
         * @default 0
         */
        get energy_rate(): number;
        set energy_rate(val: number);

        /**
         * The rate of discharge or charge. Measured in mW.
         * @since 0.9.0
         * @default 0
         */
        get energyRate(): number;
        set energyRate(val: number);

        /**
         * If the device has history data that might be useful.
         * @since 0.9.0
         * @default false
         */
        get has_history(): boolean;
        set has_history(val: boolean);

        /**
         * If the device has history data that might be useful.
         * @since 0.9.0
         * @default false
         */
        get hasHistory(): boolean;
        set hasHistory(val: boolean);

        /**
         * If the device has statistics data that might be useful.
         * @since 0.9.0
         * @default false
         */
        get has_statistics(): boolean;
        set has_statistics(val: boolean);

        /**
         * If the device has statistics data that might be useful.
         * @since 0.9.0
         * @default false
         */
        get hasStatistics(): boolean;
        set hasStatistics(val: boolean);

        /**
         * The icon name, following the Icon Naming Specification
         * @since 1.0
         * @default null
         */
        get icon_name(): string;
        set icon_name(val: string);

        /**
         * The icon name, following the Icon Naming Specification
         * @since 1.0
         * @default null
         */
        get iconName(): string;
        set iconName(val: string);

        /**
         * If the device is present, as some devices like laptop batteries
         * can be removed, leaving an empty bay that is still technically a
         * device.
         * @since 0.9.0
         * @default false
         */
        get is_present(): boolean;
        set is_present(val: boolean);

        /**
         * If the device is present, as some devices like laptop batteries
         * can be removed, leaving an empty bay that is still technically a
         * device.
         * @since 0.9.0
         * @default false
         */
        get isPresent(): boolean;
        set isPresent(val: boolean);

        /**
         * If the device has a rechargeable battery.
         * @since 0.9.0
         * @default false
         */
        get is_rechargeable(): boolean;
        set is_rechargeable(val: boolean);

        /**
         * If the device has a rechargeable battery.
         * @since 0.9.0
         * @default false
         */
        get isRechargeable(): boolean;
        set isRechargeable(val: boolean);

        /**
         * The device kind, e.g. {@link UPowerGlib.DeviceKind.KEYBOARD}.
         * @since 0.9.0
         * @default 0
         */
        get kind(): number;
        set kind(val: number);

        /**
         * The current luminosity of the device.
         * 
         * NOTE: As of 1.91.1, this property is deprecated since the code it
         * depends on was removed in 0.99.12.
         * @since 0.9.19
         * @default 0
         */
        get luminosity(): number;
        set luminosity(val: number);

        /**
         * The model of the device.
         * @since 0.9.0
         * @default null
         */
        get model(): string;
        set model(val: string);

        /**
         * The native path of the device, useful for direct device access.
         * @since 0.9.0
         * @default null
         */
        get native_path(): string;
        set native_path(val: string);

        /**
         * The native path of the device, useful for direct device access.
         * @since 0.9.0
         * @default null
         */
        get nativePath(): string;
        set nativePath(val: string);

        /**
         * If the device is online, i.e. connected.
         * @since 0.9.0
         * @default false
         */
        get online(): boolean;
        set online(val: boolean);

        /**
         * The percentage charge of the device. Note that if the battery level property
         * is something other than {@link UPowerGlib.DeviceLevel.NONE}, then this percentage is an
         * approximation, and should not be used a number to display to the user.
         * @since 0.9.0
         * @default 100
         */
        get percentage(): number;
        set percentage(val: number);

        /**
         * If the device is powering the system.
         * @since 0.9.0
         * @default false
         */
        get power_supply(): boolean;
        set power_supply(val: boolean);

        /**
         * If the device is powering the system.
         * @since 0.9.0
         * @default false
         */
        get powerSupply(): boolean;
        set powerSupply(val: boolean);

        /**
         * The serial number of the device.
         * @since 0.9.0
         * @default null
         */
        get serial(): string;
        set serial(val: string);

        /**
         * The state the device is in at this time, e.g. {@link UPowerGlib.DeviceState.EMPTY}.
         * @since 0.9.0
         * @default 0
         */
        get state(): number;
        set state(val: number);

        /**
         * The battery technology e.g. {@link UPowerGlib.DeviceTechnology.LITHIUM_ION}.
         * @since 0.9.0
         * @default 0
         */
        get technology(): number;
        set technology(val: number);

        /**
         * The temperature of the device in degrees Celsius.
         * @since 0.9.22
         * @default 0
         */
        get temperature(): number;
        set temperature(val: number);

        /**
         * The amount of time until the device is empty.
         * @since 0.9.0
         * @default 0
         */
        get time_to_empty(): number;
        set time_to_empty(val: (bigint | number));

        /**
         * The amount of time until the device is empty.
         * @since 0.9.0
         * @default 0
         */
        get timeToEmpty(): number;
        set timeToEmpty(val: (bigint | number));

        /**
         * The amount of time until the device is fully charged.
         * @since 0.9.0
         * @default 0
         */
        get time_to_full(): number;
        set time_to_full(val: (bigint | number));

        /**
         * The amount of time until the device is fully charged.
         * @since 0.9.0
         * @default 0
         */
        get timeToFull(): number;
        set timeToFull(val: (bigint | number));

        /**
         * The last time the device was updated.
         * @since 0.9.0
         * @default 0
         */
        get update_time(): number;
        set update_time(val: (bigint | number));

        /**
         * The last time the device was updated.
         * @since 0.9.0
         * @default 0
         */
        get updateTime(): number;
        set updateTime(val: (bigint | number));

        /**
         * The vendor of the device.
         * @since 0.9.0
         * @default null
         */
        get vendor(): string;
        set vendor(val: string);

        /**
         * The current voltage of the device.
         * @since 0.9.0
         * @default 0
         */
        get voltage(): number;
        set voltage(val: number);

        /**
         * @default 0
         */
        get voltage_max_design(): number;
        set voltage_max_design(val: number);

        /**
         * @default 0
         */
        get voltageMaxDesign(): number;
        set voltageMaxDesign(val: number);

        /**
         * @default 0
         */
        get voltage_min_design(): number;
        set voltage_min_design(val: number);

        /**
         * @default 0
         */
        get voltageMinDesign(): number;
        set voltageMinDesign(val: number);

        /**
         * The warning level e.g. {@link UPowerGlib.DeviceLevel.CRITICAL}.
         * @since 1.0
         * @default 0
         */
        get warning_level(): number;
        set warning_level(val: number);

        /**
         * The warning level e.g. {@link UPowerGlib.DeviceLevel.CRITICAL}.
         * @since 1.0
         * @default 0
         */
        get warningLevel(): number;
        set warningLevel(val: number);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Device.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<Device.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): Device;

        // Signals
        /** @signal */
        connect<K extends keyof Device.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Device.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Device.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Device.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Device.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Device.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods
        /**
         * Converts a string to a {@link UPowerGlib.DeviceKind}.
         * @param type 
         */
        static kind_from_string(type: string): DeviceKind;

        /**
         * Converts a {@link UPowerGlib.DeviceKind} to a string.
         * @param type_enum 
         */
        static kind_to_string(type_enum: DeviceKind): string;

        /**
         * Converts a string to a {@link UPowerGlib.DeviceLevel}.
         * @param level 
         */
        static level_from_string(level: string): DeviceLevel;

        /**
         * Converts a {@link UPowerGlib.DeviceLevel} to a string.
         * @param level_enum 
         */
        static level_to_string(level_enum: DeviceLevel): string;

        /**
         * Converts a string to a {@link UPowerGlib.DeviceState}.
         * @param state 
         */
        static state_from_string(state: string): DeviceState;

        /**
         * Converts a {@link UPowerGlib.DeviceState} to a string.
         * @param state_enum 
         */
        static state_to_string(state_enum: DeviceState): string;

        /**
         * Converts a string to a {@link UPowerGlib.DeviceTechnology}.
         * @param technology 
         */
        static technology_from_string(technology: string): DeviceTechnology;

        /**
         * Converts a {@link UPowerGlib.DeviceTechnology} to a string.
         * @param technology_enum 
         */
        static technology_to_string(technology_enum: DeviceTechnology): string;

        // Methods
        /**
         * Gets the device history.
         * @param type The type of history. Known values are "rate", "charge" and "voltage".
         * @param timespec the amount of time to look back into time.
         * @param resolution the resolution of data.
         * @param cancellable a {@link Gio.Cancellable} or `null`
         * @returns an array of {@link UPowerGlib.HistoryItem}'s, with the most               recent one being first; `null` if `error` is set or `device` is               invalid
         */
        get_history_sync(type: string, timespec: number, resolution: number, cancellable: (Gio.Cancellable | null)): HistoryItem[];

        /**
         * Gets the object path for the device.
         * @returns the object path, or `null`
         */
        get_object_path(): string;

        /**
         * Gets the device current statistics.
         * @param type the type of statistics.
         * @param cancellable a {@link Gio.Cancellable} or `null`
         * @returns an array of {@link UPowerGlib.StatsItem}'s, else `NULL` and `error` is used
         */
        get_statistics_sync(type: string, cancellable: (Gio.Cancellable | null)): StatsItem[];

        /**
         * Refreshes properties on the device.
         * This function is normally not required and will only return without
         * an error if the daemon was started in debug mode.
         * @param cancellable a {@link Gio.Cancellable} or `null`
         * @returns `TRUE` for success, else `FALSE` and `error` is used
         */
        refresh_sync(cancellable: (Gio.Cancellable | null)): boolean;

        /**
         * Sets the object path of the object and fills up initial properties.
         * @param object_path The UPower object path.
         * @param cancellable a {@link Gio.Cancellable} or `null`
         * @returns `TRUE` for success, else `FALSE` and `error` is used
         */
        set_object_path_sync(object_path: string, cancellable: (Gio.Cancellable | null)): boolean;

        /**
         * Converts the device to a string description.
         * @returns text representation of {@link UPowerGlib.Device}
         */
        to_text(): string;
    }


    namespace HistoryItem {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "notify::state": (pspec: GObject.ParamSpec) => void;
            "notify::time": (pspec: GObject.ParamSpec) => void;
            "notify::value": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            state: number;
            time: number;
            value: number;
        }
    }

    /**
     * @gir-type Class
     */
    class HistoryItem extends GObject.Object {
        static $gtype: GObject.GType<HistoryItem>;

        // Properties
        /**
         * @since 0.9.0
         * @default 0
         */
        get state(): number;
        set state(val: number);

        /**
         * @since 0.9.0
         * @default 0
         */
        get time(): number;
        set time(val: number);

        /**
         * @since 0.9.0
         * @default 0
         */
        get value(): number;
        set value(val: number);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: HistoryItem.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<HistoryItem.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): HistoryItem;

        // Signals
        /** @signal */
        connect<K extends keyof HistoryItem.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, HistoryItem.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof HistoryItem.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, HistoryItem.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof HistoryItem.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<HistoryItem.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * Gets the item state.
         */
        get_state(): DeviceState;

        /**
         * Gets the item time.
         */
        get_time(): number;

        /**
         * Gets the item value.
         */
        get_value(): number;

        /**
         * Converts the history item to a string representation.
         * @param text 
         */
        set_from_string(text: string): boolean;

        /**
         * Sets the item state.
         * @param state the new value
         */
        set_state(state: DeviceState): void;

        /**
         * Sets the item time.
         * @param time the new value
         */
        set_time(time: number): void;

        /**
         * Sets the item time to the present value.
         */
        set_time_to_present(): void;

        /**
         * Sets the item value.
         * @param value the new value
         */
        set_value(value: number): void;

        /**
         * Converts the history item to a string representation.
         */
        to_string(): string;
    }


    namespace StatsItem {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "notify::accuracy": (pspec: GObject.ParamSpec) => void;
            "notify::value": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            accuracy: number;
            value: number;
        }
    }

    /**
     * @gir-type Class
     */
    class StatsItem extends GObject.Object {
        static $gtype: GObject.GType<StatsItem>;

        // Properties
        /**
         * @since 0.9.0
         * @default 0
         */
        get accuracy(): number;
        set accuracy(val: number);

        /**
         * @since 0.9.0
         * @default 0
         */
        get value(): number;
        set value(val: number);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: StatsItem.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<StatsItem.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): StatsItem;

        // Signals
        /** @signal */
        connect<K extends keyof StatsItem.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, StatsItem.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof StatsItem.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, StatsItem.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof StatsItem.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<StatsItem.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * Gets the item accuracy.
         */
        get_accuracy(): number;

        /**
         * Gets the item value.
         */
        get_value(): number;

        /**
         * Sets the item accuracy.
         * @param accuracy 
         */
        set_accuracy(accuracy: number): void;

        /**
         * Sets the item value.
         * @param value 
         */
        set_value(value: number): void;
    }


    /**
     * @gir-type Alias
     */
    type ClientClass = typeof Client;

    /**
     * Private {@link UPowerGlib.Client} data
     * @gir-type Struct
     */
    abstract class ClientPrivate {
        static $gtype: GObject.GType<ClientPrivate>;
    }


    /**
     * @gir-type Alias
     */
    type DeviceClass = typeof Device;

    /**
     * Private `PkDevice` data
     * @gir-type Struct
     */
    abstract class DevicePrivate {
        static $gtype: GObject.GType<DevicePrivate>;
    }


    /**
     * @gir-type Alias
     */
    type HistoryItemClass = typeof HistoryItem;

    /**
     * @gir-type Struct
     */
    abstract class HistoryItemPrivate {
        static $gtype: GObject.GType<HistoryItemPrivate>;
    }


    /**
     * @gir-type Alias
     */
    type StatsItemClass = typeof StatsItem;

    /**
     * @gir-type Struct
     */
    abstract class StatsItemPrivate {
        static $gtype: GObject.GType<StatsItemPrivate>;
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

export default UPowerGlib;

// END
