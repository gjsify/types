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
            'device-added': (arg0: Device) => void;
            /**
             * The ::device-removed signal is emitted when a power device is removed.
             * @signal
             * @since 1.0
             * @run-last
             */
            'device-removed': (arg0: string) => void;
            'notify::daemon-version': (pspec: GObject.ParamSpec) => void;
            'notify::lid-is-closed': (pspec: GObject.ParamSpec) => void;
            'notify::lid-is-present': (pspec: GObject.ParamSpec) => void;
            'notify::on-battery': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps
            extends GObject.Object.ConstructorProps, Gio.AsyncInitable.ConstructorProps, Gio.Initable.ConstructorProps {
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
         */
        get daemon_version(): string;
        /**
         * The daemon version.
         * @since 0.9.0
         * @read-only
         */
        get daemonVersion(): string;
        /**
         * If the laptop lid is closed.
         * @since 0.9.0
         * @read-only
         */
        get lid_is_closed(): boolean;
        /**
         * If the laptop lid is closed.
         * @since 0.9.0
         * @read-only
         */
        get lidIsClosed(): boolean;
        /**
         * If a laptop lid is present.
         * @since 0.9.0
         * @read-only
         */
        get lid_is_present(): boolean;
        /**
         * If a laptop lid is present.
         * @since 0.9.0
         * @read-only
         */
        get lidIsPresent(): boolean;
        /**
         * If the computer is on battery power.
         * @since 0.9.0
         * @read-only
         */
        get on_battery(): boolean;
        /**
         * If the computer is on battery power.
         * @since 0.9.0
         * @read-only
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

        static ['new'](): Client;

        static new_finish(res: Gio.AsyncResult): Client;
        // Conflicted with Gio.AsyncInitable.new_finish

        static new_finish(...args: never[]): any;

        static new_full(cancellable?: Gio.Cancellable | null): Client;

        // Signals

        /** @signal */
        connect<K extends keyof Client.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Client.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Client.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Client.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Client.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Client.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        /**
         * Asynchronously creates a new {@link UPowerGlib.Client} object.
         *
         * This is an asynchronous failable function.
         * @param cancellable a {@link Gio.Cancellable} or `null`
         * @param callback a {@link Gio.AsyncReadyCallback} to call when the request is satisfied
         */
        static new_async(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<Client> | null): void;

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
        get_devices_async(cancellable?: Gio.Cancellable | null): globalThis.Promise<Device[]>;
        /**
         * Asynchronously fetches the list of {@link UPowerGlib.Device} objects.
         * @param cancellable a {@link Gio.Cancellable} or `null`
         * @param callback a {@link Gio.AsyncReadyCallback} to call when the request is satisfied
         */
        get_devices_async(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        /**
         * Asynchronously fetches the list of {@link UPowerGlib.Device} objects.
         * @param cancellable a {@link Gio.Cancellable} or `null`
         * @param callback a {@link Gio.AsyncReadyCallback} to call when the request is satisfied
         */
        get_devices_async(
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<Device[]> | void;
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
        init_async(io_priority: number, cancellable?: Gio.Cancellable | null): globalThis.Promise<boolean>;
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
            cancellable?: Gio.Cancellable | null,
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
        vfunc_init_async(
            io_priority: number,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
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
        init(cancellable?: Gio.Cancellable | null): boolean;
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
        vfunc_init(cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target`.
         *
         * Whenever the `source_property` is changed the `target_property` is
         * updated using the same value. For instance:
         *
         *
         * ```c
         *   g_object_bind_property (action, "active", widget, "sensitive", 0);
         * ```
         *
         *
         * Will result in the "sensitive" property of the widget {@link GObject.Object} instance to be
         * updated with the same value of the "active" property of the action {@link GObject.Object}
         * instance.
         *
         * If `flags` contains {@link GObject.BindingFlags.BIDIRECTIONAL} then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well.
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. To remove the binding without affecting the
         * `source` and the `target` you can just call `g_object_unref()` on the returned
         * {@link GObject.Binding} instance.
         *
         * Removing the binding by calling `g_object_unref()` on it must only be done if
         * the binding, `source` and `target` are only used from a single thread and it
         * is clear that both `source` and `target` outlive the binding. Especially it
         * is not safe to rely on this if the binding, `source` or `target` can be
         * finalized from different threads. Keep another reference to the binding and
         * use `g_binding_unbind()` instead to be on the safe side.
         *
         * A {@link GObject.Object} can have multiple bindings.
         * @param source_property the property on `source` to bind
         * @param target the target {@link GObject.Object}
         * @param target_property the property on `target` to bind
         * @param flags flags to pass to {@link GObject.Binding}
         * @returns the {@link GObject.Binding} instance representing the     binding between the two {@link GObject.Object} instances. The binding is released     whenever the {@link GObject.Binding} reference count reaches zero.
         */
        bind_property(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
        ): GObject.Binding;
        /**
         * Complete version of `g_object_bind_property()`.
         *
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target`, allowing you to set the transformation functions to be used by
         * the binding.
         *
         * If `flags` contains {@link GObject.BindingFlags.BIDIRECTIONAL} then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well. The `transform_from` function is only used in case
         * of bidirectional bindings, otherwise it will be ignored
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. This will release the reference that is
         * being held on the {@link GObject.Binding} instance; if you want to hold on to the
         * {@link GObject.Binding} instance, you will need to hold a reference to it.
         *
         * To remove the binding, call `g_binding_unbind()`.
         *
         * A {@link GObject.Object} can have multiple bindings.
         *
         * The same `user_data` parameter will be used for both `transform_to`
         * and `transform_from` transformation functions; the `notify` function will
         * be called once, when the binding is removed. If you need different data
         * for each transformation function, please use
         * `g_object_bind_property_with_closures()` instead.
         * @param source_property the property on `source` to bind
         * @param target the target {@link GObject.Object}
         * @param target_property the property on `target` to bind
         * @param flags flags to pass to {@link GObject.Binding}
         * @param transform_to the transformation function     from the `source` to the `target`, or `null` to use the default
         * @param transform_from the transformation function     from the `target` to the `source`, or `null` to use the default
         * @param notify a function to call when disposing the binding, to free     resources used by the transformation functions, or `null` if not required
         * @returns the {@link GObject.Binding} instance representing the     binding between the two {@link GObject.Object} instances. The binding is released     whenever the {@link GObject.Binding} reference count reaches zero.
         */
        bind_property_full(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
            transform_to?: GObject.BindingTransformFunc | null,
            transform_from?: GObject.BindingTransformFunc | null,
            notify?: GLib.DestroyNotify | null,
        ): GObject.Binding;
        /**
         * @param args
         */
        // Conflicted with GObject.Object.bind_property_full
        bind_property_full(...args: never[]): any;
        /**
         * This function is intended for {@link GObject.Object} implementations to re-enforce
         * a [floating](floating-refs.html) object reference. Doing this is seldom
         * required: all `GInitiallyUnowneds` are created with a floating reference
         * which usually just needs to be sunken by calling `g_object_ref_sink()`.
         */
        force_floating(): void;
        /**
         * Increases the freeze count on `object`. If the freeze count is
         * non-zero, the emission of "notify" signals on `object` is
         * stopped. The signals are queued until the freeze count is decreased
         * to zero. Duplicate notifications are squashed so that at most one
         * {@link GObject.Object.SignalSignatures.notify | GObject.Object::notify} signal is emitted for each property modified while the
         * object is frozen.
         *
         * This is necessary for accessors that modify multiple properties to prevent
         * premature notification while the object is still being modified.
         */
        freeze_notify(): void;
        /**
         * Gets a named field from the objects table of associations (see `g_object_set_data()`).
         * @param key name of the key for that association
         * @returns the data if found,          or `null` if no such data exists.
         */
        get_data(key: string): any | null;
        /**
         * Gets a property of an object.
         *
         * The value can be:
         * - an empty GObject.Value initialized by G_VALUE_INIT, which will be automatically initialized with the expected type of the property (since GLib 2.60)
         * - a GObject.Value initialized with the expected type of the property
         * - a GObject.Value initialized with a type to which the expected type of the property can be transformed
         *
         * In general, a copy is made of the property contents and the caller is responsible for freeing the memory by calling GObject.Value.unset.
         *
         * Note that GObject.Object.get_property is really intended for language bindings, GObject.Object.get is much more convenient for C programming.
         * @param property_name The name of the property to get
         * @param value Return location for the property value. Can be an empty GObject.Value initialized by G_VALUE_INIT (auto-initialized with expected type since GLib 2.60), a GObject.Value initialized with the expected property type, or a GObject.Value initialized with a transformable type
         */
        get_property(property_name: string, value: GObject.Value | any): any;
        /**
         * This function gets back user data pointers stored via
         * `g_object_set_qdata()`.
         * @param quark A {@link GLib.Quark}, naming the user data pointer
         * @returns The user data pointer set, or `null`
         */
        get_qdata(quark: GLib.Quark): any | null;
        /**
         * Gets `n_properties` properties for an `object`.
         * Obtained properties will be set to `values`. All properties must be valid.
         * Warnings will be emitted and undefined behaviour may result if invalid
         * properties are passed in.
         * @param names the names of each property to get
         * @param values the values of each property to get
         */
        getv(names: string[], values: (GObject.Value | any)[]): void;
        /**
         * Checks whether `object` has a [floating](floating-refs.html) reference.
         * @returns `true` if `object` has a floating reference
         */
        is_floating(): boolean;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use `g_object_notify_by_pspec()`
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * `g_object_freeze_notify()`. In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when `g_object_thaw_notify()` is
         * called.
         * @param property_name the name of a property installed on the class of `object`.
         */
        notify(property_name: string): void;
        /**
         * Emits a "notify" signal for the property specified by `pspec` on `object`.
         *
         * This function omits the property name lookup, hence it is faster than
         * `g_object_notify()`.
         *
         * One way to avoid using `g_object_notify()` from within the
         * class that registered the properties, and using `g_object_notify_by_pspec()`
         * instead, is to store the GParamSpec used with
         * `g_object_class_install_property()` inside a static array, e.g.:
         *
         *
         * ```c
         *   typedef enum
         *   {
         *     PROP_FOO = 1,
         *     PROP_LAST
         *   } MyObjectProperty;
         *
         *   static GParamSpec *properties[PROP_LAST];
         *
         *   static void
         *   my_object_class_init (MyObjectClass *klass)
         *   {
         *     properties[PROP_FOO] = g_param_spec_int ("foo", NULL, NULL,
         *                                              0, 100,
         *                                              50,
         *                                              G_PARAM_READWRITE | G_PARAM_STATIC_STRINGS);
         *     g_object_class_install_property (gobject_class,
         *                                      PROP_FOO,
         *                                      properties[PROP_FOO]);
         *   }
         * ```
         *
         *
         * and then notify a change on the "foo" property with:
         *
         *
         * ```c
         *   g_object_notify_by_pspec (self, properties[PROP_FOO]);
         * ```
         *
         * @param pspec the {@link GObject.ParamSpec} of a property installed on the class of `object`.
         */
        notify_by_pspec(pspec: GObject.ParamSpec): void;
        /**
         * Increases the reference count of `object`.
         *
         * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
         * of `object` will be propagated to the return type (using the GCC `typeof()`
         * extension), so any casting the caller needs to do on the return type must be
         * explicit.
         * @returns the same `object`
         */
        ref(): GObject.Object;
        /**
         * Increase the reference count of `object`, and possibly remove the
         * [floating](floating-refs.html) reference, if `object` has a floating reference.
         *
         * In other words, if the object is floating, then this call "assumes
         * ownership" of the floating reference, converting it to a normal
         * reference by clearing the floating flag while leaving the reference
         * count unchanged.  If the object is not floating, then this call
         * adds a new normal reference increasing the reference count by one.
         *
         * Since GLib 2.56, the type of `object` will be propagated to the return type
         * under the same conditions as for `g_object_ref()`.
         * @returns `object`
         */
        ref_sink(): GObject.Object;
        /**
         * Releases all references to other objects. This can be used to break
         * reference cycles.
         *
         * This function should only be called from object system implementations.
         */
        run_dispose(): void;
        /**
         * Each object carries around a table of associations from
         * strings to pointers.  This function lets you set an association.
         *
         * If the object already had an association with that name,
         * the old association will be destroyed.
         *
         * Internally, the `key` is converted to a {@link GLib.Quark} using `g_quark_from_string()`.
         * This means a copy of `key` is kept permanently (even after `object` has been
         * finalized) — so it is recommended to only use a small, bounded set of values
         * for `key` in your program, to avoid the {@link GLib.Quark} storage growing unbounded.
         * @param key name of the key
         * @param data data to associate with that key
         */
        set_data(key: string, data?: any | null): void;
        /**
         * Sets a property on an object.
         * @param property_name The name of the property to set
         * @param value The value to set the property to
         */
        set_property(property_name: string, value: GObject.Value | any): void;
        /**
         * Remove a specified datum from the object's data associations,
         * without invoking the association's destroy handler.
         * @param key name of the key
         * @returns the data if found, or `null`          if no such data exists.
         */
        steal_data(key: string): any | null;
        /**
         * This function gets back user data pointers stored via
         * `g_object_set_qdata()` and removes the `data` from object
         * without invoking its `destroy()` function (if any was
         * set).
         * Usually, calling this function is only required to update
         * user data pointers with a destroy notifier, for example:
         *
         * ```c
         * void
         * object_add_to_user_list (GObject     *object,
         *                          const gchar *new_string)
         * {
         *   // the quark, naming the object data
         *   GQuark quark_string_list = g_quark_from_static_string ("my-string-list");
         *   // retrieve the old string list
         *   GList *list = g_object_steal_qdata (object, quark_string_list);
         *
         *   // prepend new string
         *   list = g_list_prepend (list, g_strdup (new_string));
         *   // this changed 'list', so we need to set it again
         *   g_object_set_qdata_full (object, quark_string_list, list, free_string_list);
         * }
         * static void
         * free_string_list (gpointer data)
         * {
         *   GList *node, *list = data;
         *
         *   for (node = list; node; node = node->next)
         *     g_free (node->data);
         *   g_list_free (list);
         * }
         * ```
         *
         * Using `g_object_get_qdata()` in the above example, instead of
         * `g_object_steal_qdata()` would have left the destroy function set,
         * and thus the partial string list would have been freed upon
         * `g_object_set_qdata_full()`.
         * @param quark A {@link GLib.Quark}, naming the user data pointer
         * @returns The user data pointer set, or `null`
         */
        steal_qdata(quark: GLib.Quark): any | null;
        /**
         * Reverts the effect of a previous call to
         * `g_object_freeze_notify()`. The freeze count is decreased on `object`
         * and when it reaches zero, queued "notify" signals are emitted.
         *
         * Duplicate notifications for each property are squashed so that at most one
         * {@link GObject.Object.SignalSignatures.notify | GObject.Object::notify} signal is emitted for each property, in the reverse order
         * in which they have been queued.
         *
         * It is an error to call this function when the freeze count is zero.
         */
        thaw_notify(): void;
        /**
         * Decreases the reference count of `object`. When its reference count
         * drops to 0, the object is finalized (i.e. its memory is freed).
         *
         * If the pointer to the {@link GObject.Object} may be reused in future (for example, if it is
         * an instance variable of another object), it is recommended to clear the
         * pointer to `null` rather than retain a dangling pointer to a potentially
         * invalid {@link GObject.Object} instance. Use `g_clear_object()` for this.
         */
        unref(): void;
        /**
         * This function essentially limits the life time of the `closure` to
         * the life time of the object. That is, when the object is finalized,
         * the `closure` is invalidated by calling `g_closure_invalidate()` on
         * it, in order to prevent invocations of the closure with a finalized
         * (nonexisting) object. Also, `g_object_ref()` and `g_object_unref()` are
         * added as marshal guards to the `closure`, to ensure that an extra
         * reference count is held on `object` during invocation of the
         * `closure`.  Usually, this function will be called on closures that
         * use this `object` as closure data.
         * @param closure {@link GObject.Closure} to watch
         */
        watch_closure(closure: GObject.Closure): void;
        /**
         * the `constructed` function is called by `g_object_new()` as the
         *  final step of the object creation process.  At the point of the call, all
         *  construction properties have been set on the object.  The purpose of this
         *  call is to allow for object initialisation steps that can only be performed
         *  after construction properties have been set.  `constructed` implementors
         *  should chain up to the `constructed` call of their parent class to allow it
         *  to complete its initialisation.
         * @virtual
         */
        vfunc_constructed(): void;
        /**
         * emits property change notification for a bunch
         *  of properties. Overriding `dispatch_properties_changed` should be rarely
         *  needed.
         * @param n_pspecs
         * @param pspecs
         * @virtual
         */
        vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
        /**
         * the `dispose` function is supposed to drop all references to other
         *  objects, but keep the instance otherwise intact, so that client method
         *  invocations still work. It may be run multiple times (due to reference
         *  loops). Before returning, `dispose` should chain up to the `dispose` method
         *  of the parent class.
         * @virtual
         */
        vfunc_dispose(): void;
        /**
         * instance finalization function, should finish the finalization of
         *  the instance begun in `dispose` and chain up to the `finalize` method of the
         *  parent class.
         * @virtual
         */
        vfunc_finalize(): void;
        /**
         * the generic getter for all properties of this type. Should be
         *  overridden for every type with properties.
         * @param property_id
         * @param value
         * @param pspec
         * @virtual
         */
        vfunc_get_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use `g_object_notify_by_pspec()`
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * `g_object_freeze_notify()`. In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when `g_object_thaw_notify()` is
         * called.
         * @param pspec
         * @virtual
         */
        vfunc_notify(pspec: GObject.ParamSpec): void;
        /**
         * the generic setter for all properties of this type. Should be
         *  overridden for every type with properties. If implementations of
         *  `set_property` don't emit property change notification explicitly, this will
         *  be done implicitly by the type system. However, if the notify signal is
         *  emitted explicitly, the type system will not emit it a second time.
         * @param property_id
         * @param value
         * @param pspec
         * @virtual
         */
        vfunc_set_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Disconnects a handler from an instance so it will not be called during any future or currently ongoing emissions of the signal it has been connected to.
         * @param id Handler ID of the handler to be disconnected
         */
        disconnect(id: number): void;
        /**
         * Sets multiple properties of an object at once. The properties argument should be a dictionary mapping property names to values.
         * @param properties Object containing the properties to set
         */
        set(properties: { [key: string]: any }): void;
        /**
         * Blocks a handler of an instance so it will not be called during any signal emissions
         * @param id Handler ID of the handler to be blocked
         */
        block_signal_handler(id: number): void;
        /**
         * Unblocks a handler so it will be called again during any signal emissions
         * @param id Handler ID of the handler to be unblocked
         */
        unblock_signal_handler(id: number): void;
        /**
         * Stops a signal's emission by the given signal name. This will prevent the default handler and any subsequent signal handlers from being invoked.
         * @param detailedName Name of the signal to stop emission of
         */
        stop_emission_by_name(detailedName: string): void;
    }

    namespace Device {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::battery-level': (pspec: GObject.ParamSpec) => void;
            'notify::capacity': (pspec: GObject.ParamSpec) => void;
            'notify::capacity-level': (pspec: GObject.ParamSpec) => void;
            'notify::charge-cycles': (pspec: GObject.ParamSpec) => void;
            'notify::charge-end-threshold': (pspec: GObject.ParamSpec) => void;
            'notify::charge-start-threshold': (pspec: GObject.ParamSpec) => void;
            'notify::charge-threshold-enabled': (pspec: GObject.ParamSpec) => void;
            'notify::charge-threshold-supported': (pspec: GObject.ParamSpec) => void;
            'notify::energy': (pspec: GObject.ParamSpec) => void;
            'notify::energy-empty': (pspec: GObject.ParamSpec) => void;
            'notify::energy-full': (pspec: GObject.ParamSpec) => void;
            'notify::energy-full-design': (pspec: GObject.ParamSpec) => void;
            'notify::energy-rate': (pspec: GObject.ParamSpec) => void;
            'notify::has-history': (pspec: GObject.ParamSpec) => void;
            'notify::has-statistics': (pspec: GObject.ParamSpec) => void;
            'notify::icon-name': (pspec: GObject.ParamSpec) => void;
            'notify::is-present': (pspec: GObject.ParamSpec) => void;
            'notify::is-rechargeable': (pspec: GObject.ParamSpec) => void;
            'notify::kind': (pspec: GObject.ParamSpec) => void;
            'notify::luminosity': (pspec: GObject.ParamSpec) => void;
            'notify::model': (pspec: GObject.ParamSpec) => void;
            'notify::native-path': (pspec: GObject.ParamSpec) => void;
            'notify::online': (pspec: GObject.ParamSpec) => void;
            'notify::percentage': (pspec: GObject.ParamSpec) => void;
            'notify::power-supply': (pspec: GObject.ParamSpec) => void;
            'notify::serial': (pspec: GObject.ParamSpec) => void;
            'notify::state': (pspec: GObject.ParamSpec) => void;
            'notify::technology': (pspec: GObject.ParamSpec) => void;
            'notify::temperature': (pspec: GObject.ParamSpec) => void;
            'notify::time-to-empty': (pspec: GObject.ParamSpec) => void;
            'notify::time-to-full': (pspec: GObject.ParamSpec) => void;
            'notify::update-time': (pspec: GObject.ParamSpec) => void;
            'notify::vendor': (pspec: GObject.ParamSpec) => void;
            'notify::voltage': (pspec: GObject.ParamSpec) => void;
            'notify::voltage-max-design': (pspec: GObject.ParamSpec) => void;
            'notify::voltage-min-design': (pspec: GObject.ParamSpec) => void;
            'notify::warning-level': (pspec: GObject.ParamSpec) => void;
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
            time_to_empty: number;
            timeToEmpty: number;
            time_to_full: number;
            timeToFull: number;
            update_time: number;
            updateTime: number;
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
         */
        get battery_level(): number;
        set battery_level(val: number);
        /**
         * The battery level, e.g. {@link UPowerGlib.DeviceLevel.CRITICAL}. If this is something
         * other than {@link UPowerGlib.DeviceLevel.NONE}, then User Interfaces should use this
         * approximate level instead of percentages.
         * @since 1.0
         */
        get batteryLevel(): number;
        set batteryLevel(val: number);
        /**
         * The percentage capacity of the device where 100% means the device has
         * the same charge potential as when it was manufactured.
         * @since 0.9.0
         */
        get capacity(): number;
        set capacity(val: number);
        /**
         * Coarse representation of battery capacity. The value is one of the following:
         * Unknown, Critical, Low, Normal, High, and Full.
         * @since 1.90.10
         */
        get capacity_level(): string;
        set capacity_level(val: string);
        /**
         * Coarse representation of battery capacity. The value is one of the following:
         * Unknown, Critical, Low, Normal, High, and Full.
         * @since 1.90.10
         */
        get capacityLevel(): string;
        set capacityLevel(val: string);
        /**
         * The number of charge cycles for the battery, or -1 if unknown
         * or non-applicable.
         * @since 1.0
         */
        get charge_cycles(): number;
        set charge_cycles(val: number);
        /**
         * The number of charge cycles for the battery, or -1 if unknown
         * or non-applicable.
         * @since 1.0
         */
        get chargeCycles(): number;
        set chargeCycles(val: number);
        /**
         * The charge end threshold of a battery.
         * @since 1.90.5
         */
        get charge_end_threshold(): number;
        set charge_end_threshold(val: number);
        /**
         * The charge end threshold of a battery.
         * @since 1.90.5
         */
        get chargeEndThreshold(): number;
        set chargeEndThreshold(val: number);
        /**
         * The charge start threshold of a battery.
         * @since 1.90.5
         */
        get charge_start_threshold(): number;
        set charge_start_threshold(val: number);
        /**
         * The charge start threshold of a battery.
         * @since 1.90.5
         */
        get chargeStartThreshold(): number;
        set chargeStartThreshold(val: number);
        /**
         * The charge threshold of a battery is enabled, or false if unknown
         * or non-applicable.
         * @since 1.90.5
         */
        get charge_threshold_enabled(): boolean;
        set charge_threshold_enabled(val: boolean);
        /**
         * The charge threshold of a battery is enabled, or false if unknown
         * or non-applicable.
         * @since 1.90.5
         */
        get chargeThresholdEnabled(): boolean;
        set chargeThresholdEnabled(val: boolean);
        /**
         * The charge threshold of a battery is supported, or false if unknown
         * or non-applicable.
         * @since 1.90.5
         */
        get charge_threshold_supported(): boolean;
        set charge_threshold_supported(val: boolean);
        /**
         * The charge threshold of a battery is supported, or false if unknown
         * or non-applicable.
         * @since 1.90.5
         */
        get chargeThresholdSupported(): boolean;
        set chargeThresholdSupported(val: boolean);
        /**
         * The energy left in the device. Measured in mWh.
         * @since 0.9.0
         */
        get energy(): number;
        set energy(val: number);
        /**
         * The energy the device will have when it is empty. This is usually zero.
         * Measured in mWh.
         * @since 0.9.0
         */
        get energy_empty(): number;
        set energy_empty(val: number);
        /**
         * The energy the device will have when it is empty. This is usually zero.
         * Measured in mWh.
         * @since 0.9.0
         */
        get energyEmpty(): number;
        set energyEmpty(val: number);
        /**
         * The amount of energy when the device is fully charged. Measured in mWh.
         * @since 0.9.0
         */
        get energy_full(): number;
        set energy_full(val: number);
        /**
         * The amount of energy when the device is fully charged. Measured in mWh.
         * @since 0.9.0
         */
        get energyFull(): number;
        set energyFull(val: number);
        /**
         * The amount of energy when the device was brand new. Measured in mWh.
         * @since 0.9.0
         */
        get energy_full_design(): number;
        set energy_full_design(val: number);
        /**
         * The amount of energy when the device was brand new. Measured in mWh.
         * @since 0.9.0
         */
        get energyFullDesign(): number;
        set energyFullDesign(val: number);
        /**
         * The rate of discharge or charge. Measured in mW.
         * @since 0.9.0
         */
        get energy_rate(): number;
        set energy_rate(val: number);
        /**
         * The rate of discharge or charge. Measured in mW.
         * @since 0.9.0
         */
        get energyRate(): number;
        set energyRate(val: number);
        /**
         * If the device has history data that might be useful.
         * @since 0.9.0
         */
        get has_history(): boolean;
        set has_history(val: boolean);
        /**
         * If the device has history data that might be useful.
         * @since 0.9.0
         */
        get hasHistory(): boolean;
        set hasHistory(val: boolean);
        /**
         * If the device has statistics data that might be useful.
         * @since 0.9.0
         */
        get has_statistics(): boolean;
        set has_statistics(val: boolean);
        /**
         * If the device has statistics data that might be useful.
         * @since 0.9.0
         */
        get hasStatistics(): boolean;
        set hasStatistics(val: boolean);
        /**
         * The icon name, following the Icon Naming Specification
         * @since 1.0
         */
        get icon_name(): string;
        set icon_name(val: string);
        /**
         * The icon name, following the Icon Naming Specification
         * @since 1.0
         */
        get iconName(): string;
        set iconName(val: string);
        /**
         * If the device is present, as some devices like laptop batteries
         * can be removed, leaving an empty bay that is still technically a
         * device.
         * @since 0.9.0
         */
        get is_present(): boolean;
        set is_present(val: boolean);
        /**
         * If the device is present, as some devices like laptop batteries
         * can be removed, leaving an empty bay that is still technically a
         * device.
         * @since 0.9.0
         */
        get isPresent(): boolean;
        set isPresent(val: boolean);
        /**
         * If the device has a rechargeable battery.
         * @since 0.9.0
         */
        get is_rechargeable(): boolean;
        set is_rechargeable(val: boolean);
        /**
         * If the device has a rechargeable battery.
         * @since 0.9.0
         */
        get isRechargeable(): boolean;
        set isRechargeable(val: boolean);
        /**
         * The device kind, e.g. {@link UPowerGlib.DeviceKind.KEYBOARD}.
         * @since 0.9.0
         */
        get kind(): number;
        set kind(val: number);
        /**
         * The current luminosity of the device.
         *
         * NOTE: As of 1.91.1, this property is deprecated since the code it
         * depends on was removed in 0.99.12.
         * @since 0.9.19
         */
        get luminosity(): number;
        set luminosity(val: number);
        /**
         * The model of the device.
         * @since 0.9.0
         */
        get model(): string;
        set model(val: string);
        /**
         * The native path of the device, useful for direct device access.
         * @since 0.9.0
         */
        get native_path(): string;
        set native_path(val: string);
        /**
         * The native path of the device, useful for direct device access.
         * @since 0.9.0
         */
        get nativePath(): string;
        set nativePath(val: string);
        /**
         * If the device is online, i.e. connected.
         * @since 0.9.0
         */
        get online(): boolean;
        set online(val: boolean);
        /**
         * The percentage charge of the device. Note that if the battery level property
         * is something other than {@link UPowerGlib.DeviceLevel.NONE}, then this percentage is an
         * approximation, and should not be used a number to display to the user.
         * @since 0.9.0
         */
        get percentage(): number;
        set percentage(val: number);
        /**
         * If the device is powering the system.
         * @since 0.9.0
         */
        get power_supply(): boolean;
        set power_supply(val: boolean);
        /**
         * If the device is powering the system.
         * @since 0.9.0
         */
        get powerSupply(): boolean;
        set powerSupply(val: boolean);
        /**
         * The serial number of the device.
         * @since 0.9.0
         */
        get serial(): string;
        set serial(val: string);
        /**
         * The state the device is in at this time, e.g. {@link UPowerGlib.DeviceState.EMPTY}.
         * @since 0.9.0
         */
        get state(): number;
        set state(val: number);
        /**
         * The battery technology e.g. {@link UPowerGlib.DeviceTechnology.LITHIUM_ION}.
         * @since 0.9.0
         */
        get technology(): number;
        set technology(val: number);
        /**
         * The temperature of the device in degrees Celsius.
         * @since 0.9.22
         */
        get temperature(): number;
        set temperature(val: number);
        /**
         * The amount of time until the device is empty.
         * @since 0.9.0
         */
        get time_to_empty(): number;
        set time_to_empty(val: number);
        /**
         * The amount of time until the device is empty.
         * @since 0.9.0
         */
        get timeToEmpty(): number;
        set timeToEmpty(val: number);
        /**
         * The amount of time until the device is fully charged.
         * @since 0.9.0
         */
        get time_to_full(): number;
        set time_to_full(val: number);
        /**
         * The amount of time until the device is fully charged.
         * @since 0.9.0
         */
        get timeToFull(): number;
        set timeToFull(val: number);
        /**
         * The last time the device was updated.
         * @since 0.9.0
         */
        get update_time(): number;
        set update_time(val: number);
        /**
         * The last time the device was updated.
         * @since 0.9.0
         */
        get updateTime(): number;
        set updateTime(val: number);
        /**
         * The vendor of the device.
         * @since 0.9.0
         */
        get vendor(): string;
        set vendor(val: string);
        /**
         * The current voltage of the device.
         * @since 0.9.0
         */
        get voltage(): number;
        set voltage(val: number);
        get voltage_max_design(): number;
        set voltage_max_design(val: number);
        get voltageMaxDesign(): number;
        set voltageMaxDesign(val: number);
        get voltage_min_design(): number;
        set voltage_min_design(val: number);
        get voltageMinDesign(): number;
        set voltageMinDesign(val: number);
        /**
         * The warning level e.g. {@link UPowerGlib.DeviceLevel.CRITICAL}.
         * @since 1.0
         */
        get warning_level(): number;
        set warning_level(val: number);
        /**
         * The warning level e.g. {@link UPowerGlib.DeviceLevel.CRITICAL}.
         * @since 1.0
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

        static ['new'](): Device;

        // Signals

        /** @signal */
        connect<K extends keyof Device.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Device.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Device.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Device.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Device.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Device.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
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
        get_history_sync(
            type: string,
            timespec: number,
            resolution: number,
            cancellable?: Gio.Cancellable | null,
        ): HistoryItem[];
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
        get_statistics_sync(type: string, cancellable?: Gio.Cancellable | null): StatsItem[];
        /**
         * Refreshes properties on the device.
         * This function is normally not required and will only return without
         * an error if the daemon was started in debug mode.
         * @param cancellable a {@link Gio.Cancellable} or `null`
         * @returns `TRUE` for success, else `FALSE` and `error` is used
         */
        refresh_sync(cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Sets the object path of the object and fills up initial properties.
         * @param object_path The UPower object path.
         * @param cancellable a {@link Gio.Cancellable} or `null`
         * @returns `TRUE` for success, else `FALSE` and `error` is used
         */
        set_object_path_sync(object_path: string, cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Converts the device to a string description.
         * @returns text representation of {@link UPowerGlib.Device}
         */
        to_text(): string;
    }

    namespace HistoryItem {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::state': (pspec: GObject.ParamSpec) => void;
            'notify::time': (pspec: GObject.ParamSpec) => void;
            'notify::value': (pspec: GObject.ParamSpec) => void;
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
         */
        get state(): number;
        set state(val: number);
        /**
         * @since 0.9.0
         */
        get time(): number;
        set time(val: number);
        /**
         * @since 0.9.0
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

        static ['new'](): HistoryItem;

        // Signals

        /** @signal */
        connect<K extends keyof HistoryItem.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, HistoryItem.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof HistoryItem.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, HistoryItem.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof HistoryItem.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<HistoryItem.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
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
        set_state(state: DeviceState | null): void;
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
            'notify::accuracy': (pspec: GObject.ParamSpec) => void;
            'notify::value': (pspec: GObject.ParamSpec) => void;
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
         */
        get accuracy(): number;
        set accuracy(val: number);
        /**
         * @since 0.9.0
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

        static ['new'](): StatsItem;

        // Signals

        /** @signal */
        connect<K extends keyof StatsItem.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, StatsItem.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof StatsItem.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, StatsItem.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof StatsItem.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<StatsItem.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
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
