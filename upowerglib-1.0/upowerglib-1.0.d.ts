/**
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 *
 * The based EJS template file is used for the generated .d.ts file of each GIR module like Gtk-4.0, GObject-2.0, ...
 */

// Module dependencies
import type Gio from '@girs/gio-2.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';

export namespace UPowerGlib {
    /**
     * UPowerGlib-1.0
     */

    /**
     * The device type.
     */

    /**
     * The device type.
     */
    export namespace DeviceKind {
        export const $gtype: GObject.GType<DeviceKind>;
    }

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
        LAST,
    }
    /**
     * The warning level of a battery.
     */

    /**
     * The warning level of a battery.
     */
    export namespace DeviceLevel {
        export const $gtype: GObject.GType<DeviceLevel>;
    }

    enum DeviceLevel {
        UNKNOWN,
        NONE,
        DISCHARGING,
        LOW,
        CRITICAL,
        ACTION,
        LAST,
    }
    /**
     * The device state.
     */

    /**
     * The device state.
     */
    export namespace DeviceState {
        export const $gtype: GObject.GType<DeviceState>;
    }

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
     */

    /**
     * The device technology.
     */
    export namespace DeviceTechnology {
        export const $gtype: GObject.GType<DeviceTechnology>;
    }

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
    /**
     * Gets a machine-readable description of the <link linkend="gdbus-interface-org-freedesktop-UPower.top_of_page">org.freedesktop.UPower</link> D-Bus interface.
     * @returns A #GDBusInterfaceInfo. Do not free.
     */
    function client_glue_interface_info(): Gio.DBusInterfaceInfo;
    /**
     * Overrides all #GObject properties in the #UpClientGlue interface for a concrete class.
     * The properties are overridden in the order they are defined.
     * @param klass The class structure for a #GObject<!-- -->-derived class.
     * @param property_id_begin The property id to assign to the first overridden property.
     * @returns The last property id.
     */
    function client_glue_override_properties(klass: typeof GObject.Object, property_id_begin: number): number;
    /**
     * Gets a machine-readable description of the <link linkend="gdbus-interface-org-freedesktop-UPower-Device.top_of_page">org.freedesktop.UPower.Device</link> D-Bus interface.
     * @returns A #GDBusInterfaceInfo. Do not free.
     */
    function device_glue_interface_info(): Gio.DBusInterfaceInfo;
    /**
     * Overrides all #GObject properties in the #UpDeviceGlue interface for a concrete class.
     * The properties are overridden in the order they are defined.
     * @param klass The class structure for a #GObject<!-- -->-derived class.
     * @param property_id_begin The property id to assign to the first overridden property.
     * @returns The last property id.
     */
    function device_glue_override_properties(klass: typeof GObject.Object, property_id_begin: number): number;
    /**
     * Gets a machine-readable description of the <link linkend="gdbus-interface-org-freedesktop-UPower-Wakeups.top_of_page">org.freedesktop.UPower.Wakeups</link> D-Bus interface.
     * @returns A #GDBusInterfaceInfo. Do not free.
     */
    function wakeups_glue_interface_info(): Gio.DBusInterfaceInfo;
    /**
     * Overrides all #GObject properties in the #UpWakeupsGlue interface for a concrete class.
     * The properties are overridden in the order they are defined.
     * @param klass The class structure for a #GObject<!-- -->-derived class.
     * @param property_id_begin The property id to assign to the first overridden property.
     * @returns The last property id.
     */
    function wakeups_glue_override_properties(klass: typeof GObject.Object, property_id_begin: number): number;
    module Client {
        // Signal callback interfaces

        interface DeviceAdded {
            (device: Device): void;
        }

        interface DeviceRemoved {
            (object_path: string): void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
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

    class Client extends GObject.Object {
        static $gtype: GObject.GType<Client>;

        // Properties

        /**
         * The daemon version.
         */
        get daemon_version(): string;
        /**
         * The daemon version.
         */
        get daemonVersion(): string;
        /**
         * If the laptop lid is closed.
         */
        get lid_is_closed(): boolean;
        /**
         * If the laptop lid is closed.
         */
        get lidIsClosed(): boolean;
        /**
         * If a laptop lid is present.
         */
        get lid_is_present(): boolean;
        /**
         * If a laptop lid is present.
         */
        get lidIsPresent(): boolean;
        /**
         * If the computer is on battery power.
         */
        get on_battery(): boolean;
        /**
         * If the computer is on battery power.
         */
        get onBattery(): boolean;

        // Constructors

        constructor(properties?: Partial<Client.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): Client;

        // Signals

        connect(id: string, callback: (...args: any[]) => any): number;
        connect_after(id: string, callback: (...args: any[]) => any): number;
        emit(id: string, ...args: any[]): void;
        connect(signal: 'device-added', callback: (_source: this, device: Device) => void): number;
        connect_after(signal: 'device-added', callback: (_source: this, device: Device) => void): number;
        emit(signal: 'device-added', device: Device): void;
        connect(signal: 'device-removed', callback: (_source: this, object_path: string) => void): number;
        connect_after(signal: 'device-removed', callback: (_source: this, object_path: string) => void): number;
        emit(signal: 'device-removed', object_path: string): void;

        // Virtual methods

        vfunc_device_added(device: Device): void;
        vfunc_device_removed(object_path: string): void;

        // Methods

        /**
         * Gets a string representing the configured critical action,
         * depending on availability.
         * @returns the action name, or %NULL on error.
         */
        get_critical_action(): string;
        /**
         * Get UPower daemon version.
         * @returns string containing the daemon version, e.g. 008
         */
        get_daemon_version(): string;
        /**
         * Get a copy of the device objects.
         * @returns an array of #UpDevice objects, free with g_ptr_array_unref()
         */
        get_devices(): Device[];
        /**
         * Get the composite display device.
         * @returns a #UpClient object, or %NULL on error.
         */
        get_display_device(): Device;
        /**
         * Get whether the laptop lid is closed.
         * @returns %TRUE if lid is closed or %FALSE otherwise.
         */
        get_lid_is_closed(): boolean;
        /**
         * Get whether a laptop lid is present on this machine.
         * @returns %TRUE if the machine has a laptop lid
         */
        get_lid_is_present(): boolean;
        /**
         * Get whether the system is running on battery power.
         * @returns %TRUE if the system is currently running on battery, %FALSE otherwise.
         */
        get_on_battery(): boolean;
    }

    module ClientGlueProxy {
        // Constructor properties interface

        interface ConstructorProps
            extends Gio.DBusProxy.ConstructorProps,
                Gio.AsyncInitable.ConstructorProps,
                Gio.DBusInterface.ConstructorProps,
                Gio.Initable.ConstructorProps,
                ClientGlue.ConstructorProps {}
    }

    /**
     * The #UpClientGlueProxy structure contains only private data and should only be accessed using the provided API.
     */
    class ClientGlueProxy
        extends Gio.DBusProxy
        implements Gio.AsyncInitable<ClientGlueProxy>, Gio.DBusInterface, Gio.Initable, ClientGlue
    {
        static $gtype: GObject.GType<ClientGlueProxy>;

        // Constructors

        constructor(properties?: Partial<ClientGlueProxy.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static new_finish(res: Gio.AsyncResult): ClientGlueProxy;
        // Conflicted with Gio.AsyncInitable.new_finish

        static new_finish(...args: never[]): any;

        static new_for_bus_finish(res: Gio.AsyncResult): ClientGlueProxy;

        static new_for_bus_sync(
            bus_type: Gio.BusType,
            flags: Gio.DBusProxyFlags,
            name: string,
            object_path: string,
            cancellable?: Gio.Cancellable | null,
        ): ClientGlueProxy;
        // Conflicted with Gio.DBusProxy.new_for_bus_sync

        static new_for_bus_sync(...args: never[]): any;

        static new_sync(
            connection: Gio.DBusConnection,
            flags: Gio.DBusProxyFlags,
            name: string | null,
            object_path: string,
            cancellable?: Gio.Cancellable | null,
        ): ClientGlueProxy;
        // Conflicted with Gio.DBusProxy.new_sync

        static new_sync(...args: never[]): any;

        // Static methods

        /**
         * Asynchronously creates a proxy for the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-UPower.top_of_page">org.freedesktop.UPower</link>. See g_dbus_proxy_new() for more details.
         *
         * When the operation is finished, `callback` will be invoked in the <link linkend="g-main-context-push-thread-default">thread-default main loop</link> of the thread you are calling this method from.
         * You can then call up_client_glue_proxy_new_finish() to get the result of the operation.
         *
         * See up_client_glue_proxy_new_sync() for the synchronous, blocking version of this constructor.
         * @param connection A #GDBusConnection.
         * @param flags Flags from the #GDBusProxyFlags enumeration.
         * @param name A bus name (well-known or unique) or %NULL if @connection is not a message bus connection.
         * @param object_path An object path.
         * @param cancellable A #GCancellable or %NULL.
         * @param callback A #GAsyncReadyCallback to call when the request is satisfied.
         */
        static ['new'](
            connection: Gio.DBusConnection,
            flags: Gio.DBusProxyFlags,
            name: string | null,
            object_path: string,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<ClientGlueProxy> | null,
        ): void;
        // Conflicted with Gio.DBusProxy.new
        static ['new'](...args: never[]): any;
        /**
         * Like up_client_glue_proxy_new() but takes a #GBusType instead of a #GDBusConnection.
         *
         * When the operation is finished, `callback` will be invoked in the <link linkend="g-main-context-push-thread-default">thread-default main loop</link> of the thread you are calling this method from.
         * You can then call up_client_glue_proxy_new_for_bus_finish() to get the result of the operation.
         *
         * See up_client_glue_proxy_new_for_bus_sync() for the synchronous, blocking version of this constructor.
         * @param bus_type A #GBusType.
         * @param flags Flags from the #GDBusProxyFlags enumeration.
         * @param name A bus name (well-known or unique).
         * @param object_path An object path.
         * @param cancellable A #GCancellable or %NULL.
         * @param callback A #GAsyncReadyCallback to call when the request is satisfied.
         */
        static new_for_bus(
            bus_type: Gio.BusType,
            flags: Gio.DBusProxyFlags,
            name: string,
            object_path: string,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<ClientGlueProxy> | null,
        ): void;
        // Conflicted with Gio.DBusProxy.new_for_bus
        static new_for_bus(...args: never[]): any;

        // Inherited properties
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UPower.DaemonVersion">"DaemonVersion"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        get daemon_version(): string;
        set daemon_version(val: string);
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UPower.DaemonVersion">"DaemonVersion"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        get daemonVersion(): string;
        set daemonVersion(val: string);
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UPower.LidIsClosed">"LidIsClosed"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        get lid_is_closed(): boolean;
        set lid_is_closed(val: boolean);
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UPower.LidIsClosed">"LidIsClosed"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        get lidIsClosed(): boolean;
        set lidIsClosed(val: boolean);
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UPower.LidIsPresent">"LidIsPresent"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        get lid_is_present(): boolean;
        set lid_is_present(val: boolean);
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UPower.LidIsPresent">"LidIsPresent"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        get lidIsPresent(): boolean;
        set lidIsPresent(val: boolean);
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UPower.OnBattery">"OnBattery"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        get on_battery(): boolean;
        set on_battery(val: boolean);
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UPower.OnBattery">"OnBattery"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        get onBattery(): boolean;
        set onBattery(val: boolean);

        // Inherited methods
        /**
         * Starts asynchronous initialization of the object implementing the
         * interface. This must be done before any real use of the object after
         * initial construction. If the object also implements #GInitable you can
         * optionally call g_initable_init() instead.
         *
         * This method is intended for language bindings. If writing in C,
         * g_async_initable_new_async() should typically be used instead.
         *
         * When the initialization is finished, `callback` will be called. You can
         * then call g_async_initable_init_finish() to get the result of the
         * initialization.
         *
         * Implementations may also support cancellation. If `cancellable` is not
         * %NULL, then initialization can be cancelled by triggering the cancellable
         * object from another thread. If the operation was cancelled, the error
         * %G_IO_ERROR_CANCELLED will be returned. If `cancellable` is not %NULL, and
         * the object doesn't support cancellable initialization, the error
         * %G_IO_ERROR_NOT_SUPPORTED will be returned.
         *
         * As with #GInitable, if the object is not initialized, or initialization
         * returns with an error, then all operations on the object except
         * g_object_ref() and g_object_unref() are considered to be invalid, and
         * have undefined behaviour. They will often fail with g_critical() or
         * g_warning(), but this must not be relied on.
         *
         * Callers should not assume that a class which implements #GAsyncInitable can
         * be initialized multiple times; for more information, see g_initable_init().
         * If a class explicitly supports being initialized multiple times,
         * implementation requires yielding all subsequent calls to init_async() on the
         * results of the first call.
         *
         * For classes that also support the #GInitable interface, the default
         * implementation of this method will run the g_initable_init() function
         * in a thread, so if you want to support asynchronous initialization via
         * threads, just implement the #GAsyncInitable interface without overriding
         * any interface methods.
         * @param io_priority the [I/O priority][io-priority] of the operation
         * @param cancellable optional #GCancellable object, %NULL to ignore.
         * @param callback a #GAsyncReadyCallback to call when the request is satisfied
         */
        init_async(
            io_priority: number,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes asynchronous initialization and returns the result.
         * See g_async_initable_init_async().
         * @param res a #GAsyncResult.
         * @returns %TRUE if successful. If an error has occurred, this function will return %FALSE and set @error appropriately if present.
         */
        init_finish(res: Gio.AsyncResult): boolean;
        /**
         * Finishes the async construction for the various g_async_initable_new
         * calls, returning the created object or %NULL on error.
         * @param res the #GAsyncResult from the callback
         * @returns a newly created #GObject,      or %NULL on error. Free with g_object_unref().
         */
        new_finish(res: Gio.AsyncResult): ClientGlueProxy;
        // Conflicted with Gio.DBusProxy.new_finish
        new_finish(...args: never[]): any;
        /**
         * Starts asynchronous initialization of the object implementing the
         * interface. This must be done before any real use of the object after
         * initial construction. If the object also implements #GInitable you can
         * optionally call g_initable_init() instead.
         *
         * This method is intended for language bindings. If writing in C,
         * g_async_initable_new_async() should typically be used instead.
         *
         * When the initialization is finished, `callback` will be called. You can
         * then call g_async_initable_init_finish() to get the result of the
         * initialization.
         *
         * Implementations may also support cancellation. If `cancellable` is not
         * %NULL, then initialization can be cancelled by triggering the cancellable
         * object from another thread. If the operation was cancelled, the error
         * %G_IO_ERROR_CANCELLED will be returned. If `cancellable` is not %NULL, and
         * the object doesn't support cancellable initialization, the error
         * %G_IO_ERROR_NOT_SUPPORTED will be returned.
         *
         * As with #GInitable, if the object is not initialized, or initialization
         * returns with an error, then all operations on the object except
         * g_object_ref() and g_object_unref() are considered to be invalid, and
         * have undefined behaviour. They will often fail with g_critical() or
         * g_warning(), but this must not be relied on.
         *
         * Callers should not assume that a class which implements #GAsyncInitable can
         * be initialized multiple times; for more information, see g_initable_init().
         * If a class explicitly supports being initialized multiple times,
         * implementation requires yielding all subsequent calls to init_async() on the
         * results of the first call.
         *
         * For classes that also support the #GInitable interface, the default
         * implementation of this method will run the g_initable_init() function
         * in a thread, so if you want to support asynchronous initialization via
         * threads, just implement the #GAsyncInitable interface without overriding
         * any interface methods.
         * @param io_priority the [I/O priority][io-priority] of the operation
         * @param cancellable optional #GCancellable object, %NULL to ignore.
         * @param callback a #GAsyncReadyCallback to call when the request is satisfied
         */
        vfunc_init_async(
            io_priority: number,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes asynchronous initialization and returns the result.
         * See g_async_initable_init_async().
         * @param res a #GAsyncResult.
         */
        vfunc_init_finish(res: Gio.AsyncResult): boolean;
        /**
         * Gets the #GDBusObject that `interface_` belongs to, if any.
         * @returns A #GDBusObject or %NULL. The returned reference should be freed with g_object_unref().
         */
        get_object(): Gio.DBusObject | null;
        /**
         * Gets D-Bus introspection information for the D-Bus interface
         * implemented by `interface_`.
         * @returns A #GDBusInterfaceInfo. Do not free.
         */
        get_info(): Gio.DBusInterfaceInfo;
        /**
         * Sets the #GDBusObject for `interface_` to `object`.
         *
         * Note that `interface_` will hold a weak reference to `object`.
         * @param object A #GDBusObject or %NULL.
         */
        set_object(object?: Gio.DBusObject | null): void;
        /**
         * Gets the #GDBusObject that `interface_` belongs to, if any.
         */
        vfunc_dup_object(): Gio.DBusObject | null;
        /**
         * Gets D-Bus introspection information for the D-Bus interface
         * implemented by `interface_`.
         */
        vfunc_get_info(): Gio.DBusInterfaceInfo;
        /**
         * Sets the #GDBusObject for `interface_` to `object`.
         *
         * Note that `interface_` will hold a weak reference to `object`.
         * @param object A #GDBusObject or %NULL.
         */
        vfunc_set_object(object?: Gio.DBusObject | null): void;
        /**
         * Initializes the object implementing the interface.
         *
         * This method is intended for language bindings. If writing in C,
         * g_initable_new() should typically be used instead.
         *
         * The object must be initialized before any real use after initial
         * construction, either with this function or g_async_initable_init_async().
         *
         * Implementations may also support cancellation. If `cancellable` is not %NULL,
         * then initialization can be cancelled by triggering the cancellable object
         * from another thread. If the operation was cancelled, the error
         * %G_IO_ERROR_CANCELLED will be returned. If `cancellable` is not %NULL and
         * the object doesn't support cancellable initialization the error
         * %G_IO_ERROR_NOT_SUPPORTED will be returned.
         *
         * If the object is not initialized, or initialization returns with an
         * error, then all operations on the object except g_object_ref() and
         * g_object_unref() are considered to be invalid, and have undefined
         * behaviour. See the [introduction][ginitable] for more details.
         *
         * Callers should not assume that a class which implements #GInitable can be
         * initialized multiple times, unless the class explicitly documents itself as
         * supporting this. Generally, a class’ implementation of init() can assume
         * (and assert) that it will only be called once. Previously, this documentation
         * recommended all #GInitable implementations should be idempotent; that
         * recommendation was relaxed in GLib 2.54.
         *
         * If a class explicitly supports being initialized multiple times, it is
         * recommended that the method is idempotent: multiple calls with the same
         * arguments should return the same results. Only the first call initializes
         * the object; further calls return the result of the first call.
         *
         * One reason why a class might need to support idempotent initialization is if
         * it is designed to be used via the singleton pattern, with a
         * #GObjectClass.constructor that sometimes returns an existing instance.
         * In this pattern, a caller would expect to be able to call g_initable_init()
         * on the result of g_object_new(), regardless of whether it is in fact a new
         * instance.
         * @param cancellable optional #GCancellable object, %NULL to ignore.
         * @returns %TRUE if successful. If an error has occurred, this function will     return %FALSE and set @error appropriately if present.
         */
        init(cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Initializes the object implementing the interface.
         *
         * This method is intended for language bindings. If writing in C,
         * g_initable_new() should typically be used instead.
         *
         * The object must be initialized before any real use after initial
         * construction, either with this function or g_async_initable_init_async().
         *
         * Implementations may also support cancellation. If `cancellable` is not %NULL,
         * then initialization can be cancelled by triggering the cancellable object
         * from another thread. If the operation was cancelled, the error
         * %G_IO_ERROR_CANCELLED will be returned. If `cancellable` is not %NULL and
         * the object doesn't support cancellable initialization the error
         * %G_IO_ERROR_NOT_SUPPORTED will be returned.
         *
         * If the object is not initialized, or initialization returns with an
         * error, then all operations on the object except g_object_ref() and
         * g_object_unref() are considered to be invalid, and have undefined
         * behaviour. See the [introduction][ginitable] for more details.
         *
         * Callers should not assume that a class which implements #GInitable can be
         * initialized multiple times, unless the class explicitly documents itself as
         * supporting this. Generally, a class’ implementation of init() can assume
         * (and assert) that it will only be called once. Previously, this documentation
         * recommended all #GInitable implementations should be idempotent; that
         * recommendation was relaxed in GLib 2.54.
         *
         * If a class explicitly supports being initialized multiple times, it is
         * recommended that the method is idempotent: multiple calls with the same
         * arguments should return the same results. Only the first call initializes
         * the object; further calls return the result of the first call.
         *
         * One reason why a class might need to support idempotent initialization is if
         * it is designed to be used via the singleton pattern, with a
         * #GObjectClass.constructor that sometimes returns an existing instance.
         * In this pattern, a caller would expect to be able to call g_initable_init()
         * on the result of g_object_new(), regardless of whether it is in fact a new
         * instance.
         * @param cancellable optional #GCancellable object, %NULL to ignore.
         */
        vfunc_init(cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-freedesktop-UPower.EnumerateDevices">EnumerateDevices()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the <link linkend="g-main-context-push-thread-default">thread-default main loop</link> of the thread you are calling this method from.
         * You can then call up_client_glue_call_enumerate_devices_finish() to get the result of the operation.
         *
         * See up_client_glue_call_enumerate_devices_sync() for the synchronous, blocking version of this method.
         * @param cancellable A #GCancellable or %NULL.
         * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL.
         */
        call_enumerate_devices(
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes an operation started with up_client_glue_call_enumerate_devices().
         * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to up_client_glue_call_enumerate_devices().
         * @returns %TRUE if the call succeded, %FALSE if @error is set.
         */
        call_enumerate_devices_finish(res: Gio.AsyncResult): [boolean, string];
        /**
         * Synchronously invokes the <link linkend="gdbus-method-org-freedesktop-UPower.EnumerateDevices">EnumerateDevices()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
         *
         * See up_client_glue_call_enumerate_devices() for the asynchronous version of this method.
         * @param cancellable A #GCancellable or %NULL.
         * @returns %TRUE if the call succeded, %FALSE if @error is set.
         */
        call_enumerate_devices_sync(cancellable?: Gio.Cancellable | null): [boolean, string];
        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-freedesktop-UPower.GetCriticalAction">GetCriticalAction()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the <link linkend="g-main-context-push-thread-default">thread-default main loop</link> of the thread you are calling this method from.
         * You can then call up_client_glue_call_get_critical_action_finish() to get the result of the operation.
         *
         * See up_client_glue_call_get_critical_action_sync() for the synchronous, blocking version of this method.
         * @param cancellable A #GCancellable or %NULL.
         * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL.
         */
        call_get_critical_action(
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes an operation started with up_client_glue_call_get_critical_action().
         * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to up_client_glue_call_get_critical_action().
         * @returns %TRUE if the call succeded, %FALSE if @error is set.
         */
        call_get_critical_action_finish(res: Gio.AsyncResult): [boolean, string];
        /**
         * Synchronously invokes the <link linkend="gdbus-method-org-freedesktop-UPower.GetCriticalAction">GetCriticalAction()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
         *
         * See up_client_glue_call_get_critical_action() for the asynchronous version of this method.
         * @param cancellable A #GCancellable or %NULL.
         * @returns %TRUE if the call succeded, %FALSE if @error is set.
         */
        call_get_critical_action_sync(cancellable?: Gio.Cancellable | null): [boolean, string];
        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-freedesktop-UPower.GetDisplayDevice">GetDisplayDevice()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the <link linkend="g-main-context-push-thread-default">thread-default main loop</link> of the thread you are calling this method from.
         * You can then call up_client_glue_call_get_display_device_finish() to get the result of the operation.
         *
         * See up_client_glue_call_get_display_device_sync() for the synchronous, blocking version of this method.
         * @param cancellable A #GCancellable or %NULL.
         * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL.
         */
        call_get_display_device(
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes an operation started with up_client_glue_call_get_display_device().
         * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to up_client_glue_call_get_display_device().
         * @returns %TRUE if the call succeded, %FALSE if @error is set.
         */
        call_get_display_device_finish(res: Gio.AsyncResult): [boolean, string];
        /**
         * Synchronously invokes the <link linkend="gdbus-method-org-freedesktop-UPower.GetDisplayDevice">GetDisplayDevice()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
         *
         * See up_client_glue_call_get_display_device() for the asynchronous version of this method.
         * @param cancellable A #GCancellable or %NULL.
         * @returns %TRUE if the call succeded, %FALSE if @error is set.
         */
        call_get_display_device_sync(cancellable?: Gio.Cancellable | null): [boolean, string];
        /**
         * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-freedesktop-UPower.EnumerateDevices">EnumerateDevices()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
         *
         * This method will free `invocation,` you cannot use it afterwards.
         * @param invocation A #GDBusMethodInvocation.
         * @param devices Parameter to return.
         */
        complete_enumerate_devices(invocation: Gio.DBusMethodInvocation, devices: string): void;
        /**
         * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-freedesktop-UPower.GetCriticalAction">GetCriticalAction()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
         *
         * This method will free `invocation,` you cannot use it afterwards.
         * @param invocation A #GDBusMethodInvocation.
         * @param action Parameter to return.
         */
        complete_get_critical_action(invocation: Gio.DBusMethodInvocation, action: string): void;
        /**
         * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-freedesktop-UPower.GetDisplayDevice">GetDisplayDevice()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
         *
         * This method will free `invocation,` you cannot use it afterwards.
         * @param invocation A #GDBusMethodInvocation.
         * @param device Parameter to return.
         */
        complete_get_display_device(invocation: Gio.DBusMethodInvocation, device: string): void;
        /**
         * Emits the <link linkend="gdbus-signal-org-freedesktop-UPower.DeviceAdded">"DeviceAdded"</link> D-Bus signal.
         * @param arg_device Argument to pass with the signal.
         */
        emit_device_added(arg_device: string): void;
        /**
         * Emits the <link linkend="gdbus-signal-org-freedesktop-UPower.DeviceRemoved">"DeviceRemoved"</link> D-Bus signal.
         * @param arg_device Argument to pass with the signal.
         */
        emit_device_removed(arg_device: string): void;
        vfunc_device_added(arg_device: string): void;
        vfunc_device_removed(arg_device: string): void;
        vfunc_handle_enumerate_devices(invocation: Gio.DBusMethodInvocation): boolean;
        vfunc_handle_get_critical_action(invocation: Gio.DBusMethodInvocation): boolean;
        vfunc_handle_get_display_device(invocation: Gio.DBusMethodInvocation): boolean;
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
         * Will result in the "sensitive" property of the widget #GObject instance to be
         * updated with the same value of the "active" property of the action #GObject
         * instance.
         *
         * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well.
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. To remove the binding without affecting the
         * `source` and the `target` you can just call g_object_unref() on the returned
         * #GBinding instance.
         *
         * Removing the binding by calling g_object_unref() on it must only be done if
         * the binding, `source` and `target` are only used from a single thread and it
         * is clear that both `source` and `target` outlive the binding. Especially it
         * is not safe to rely on this if the binding, `source` or `target` can be
         * finalized from different threads. Keep another reference to the binding and
         * use g_binding_unbind() instead to be on the safe side.
         *
         * A #GObject can have multiple bindings.
         * @param source_property the property on @source to bind
         * @param target the target #GObject
         * @param target_property the property on @target to bind
         * @param flags flags to pass to #GBinding
         * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
         */
        bind_property(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags,
        ): GObject.Binding;
        /**
         * Complete version of g_object_bind_property().
         *
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target,` allowing you to set the transformation functions to be used by
         * the binding.
         *
         * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well. The `transform_from` function is only used in case
         * of bidirectional bindings, otherwise it will be ignored
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. This will release the reference that is
         * being held on the #GBinding instance; if you want to hold on to the
         * #GBinding instance, you will need to hold a reference to it.
         *
         * To remove the binding, call g_binding_unbind().
         *
         * A #GObject can have multiple bindings.
         *
         * The same `user_data` parameter will be used for both `transform_to`
         * and `transform_from` transformation functions; the `notify` function will
         * be called once, when the binding is removed. If you need different data
         * for each transformation function, please use
         * g_object_bind_property_with_closures() instead.
         * @param source_property the property on @source to bind
         * @param target the target #GObject
         * @param target_property the property on @target to bind
         * @param flags flags to pass to #GBinding
         * @param transform_to the transformation function     from the @source to the @target, or %NULL to use the default
         * @param transform_from the transformation function     from the @target to the @source, or %NULL to use the default
         * @param notify a function to call when disposing the binding, to free     resources used by the transformation functions, or %NULL if not required
         * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
         */
        bind_property_full(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags,
            transform_to?: GObject.BindingTransformFunc | null,
            transform_from?: GObject.BindingTransformFunc | null,
            notify?: GLib.DestroyNotify | null,
        ): GObject.Binding;
        // Conflicted with GObject.Object.bind_property_full
        bind_property_full(...args: never[]): any;
        /**
         * This function is intended for #GObject implementations to re-enforce
         * a [floating][floating-ref] object reference. Doing this is seldom
         * required: all #GInitiallyUnowneds are created with a floating reference
         * which usually just needs to be sunken by calling g_object_ref_sink().
         */
        force_floating(): void;
        /**
         * Increases the freeze count on `object`. If the freeze count is
         * non-zero, the emission of "notify" signals on `object` is
         * stopped. The signals are queued until the freeze count is decreased
         * to zero. Duplicate notifications are squashed so that at most one
         * #GObject::notify signal is emitted for each property modified while the
         * object is frozen.
         *
         * This is necessary for accessors that modify multiple properties to prevent
         * premature notification while the object is still being modified.
         */
        freeze_notify(): void;
        /**
         * Gets a named field from the objects table of associations (see g_object_set_data()).
         * @param key name of the key for that association
         * @returns the data if found,          or %NULL if no such data exists.
         */
        get_data(key: string): any | null;
        get_property(property_name: string): any;
        /**
         * This function gets back user data pointers stored via
         * g_object_set_qdata().
         * @param quark A #GQuark, naming the user data pointer
         * @returns The user data pointer set, or %NULL
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
         * Checks whether `object` has a [floating][floating-ref] reference.
         * @returns %TRUE if @object has a floating reference
         */
        is_floating(): boolean;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use g_object_notify_by_pspec()
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * g_object_freeze_notify(). In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when g_object_thaw_notify() is
         * called.
         * @param property_name the name of a property installed on the class of @object.
         */
        notify(property_name: string): void;
        /**
         * Emits a "notify" signal for the property specified by `pspec` on `object`.
         *
         * This function omits the property name lookup, hence it is faster than
         * g_object_notify().
         *
         * One way to avoid using g_object_notify() from within the
         * class that registered the properties, and using g_object_notify_by_pspec()
         * instead, is to store the GParamSpec used with
         * g_object_class_install_property() inside a static array, e.g.:
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
         * @param pspec the #GParamSpec of a property installed on the class of @object.
         */
        notify_by_pspec(pspec: GObject.ParamSpec): void;
        /**
         * Increases the reference count of `object`.
         *
         * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
         * of `object` will be propagated to the return type (using the GCC typeof()
         * extension), so any casting the caller needs to do on the return type must be
         * explicit.
         * @returns the same @object
         */
        ref(): GObject.Object;
        /**
         * Increase the reference count of `object,` and possibly remove the
         * [floating][floating-ref] reference, if `object` has a floating reference.
         *
         * In other words, if the object is floating, then this call "assumes
         * ownership" of the floating reference, converting it to a normal
         * reference by clearing the floating flag while leaving the reference
         * count unchanged.  If the object is not floating, then this call
         * adds a new normal reference increasing the reference count by one.
         *
         * Since GLib 2.56, the type of `object` will be propagated to the return type
         * under the same conditions as for g_object_ref().
         * @returns @object
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
         * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
         * This means a copy of `key` is kept permanently (even after `object` has been
         * finalized) — so it is recommended to only use a small, bounded set of values
         * for `key` in your program, to avoid the #GQuark storage growing unbounded.
         * @param key name of the key
         * @param data data to associate with that key
         */
        set_data(key: string, data?: any | null): void;
        set_property(property_name: string, value: any): void;
        /**
         * Remove a specified datum from the object's data associations,
         * without invoking the association's destroy handler.
         * @param key name of the key
         * @returns the data if found, or %NULL          if no such data exists.
         */
        steal_data(key: string): any | null;
        /**
         * This function gets back user data pointers stored via
         * g_object_set_qdata() and removes the `data` from object
         * without invoking its destroy() function (if any was
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
         * Using g_object_get_qdata() in the above example, instead of
         * g_object_steal_qdata() would have left the destroy function set,
         * and thus the partial string list would have been freed upon
         * g_object_set_qdata_full().
         * @param quark A #GQuark, naming the user data pointer
         * @returns The user data pointer set, or %NULL
         */
        steal_qdata(quark: GLib.Quark): any | null;
        /**
         * Reverts the effect of a previous call to
         * g_object_freeze_notify(). The freeze count is decreased on `object`
         * and when it reaches zero, queued "notify" signals are emitted.
         *
         * Duplicate notifications for each property are squashed so that at most one
         * #GObject::notify signal is emitted for each property, in the reverse order
         * in which they have been queued.
         *
         * It is an error to call this function when the freeze count is zero.
         */
        thaw_notify(): void;
        /**
         * Decreases the reference count of `object`. When its reference count
         * drops to 0, the object is finalized (i.e. its memory is freed).
         *
         * If the pointer to the #GObject may be reused in future (for example, if it is
         * an instance variable of another object), it is recommended to clear the
         * pointer to %NULL rather than retain a dangling pointer to a potentially
         * invalid #GObject instance. Use g_clear_object() for this.
         */
        unref(): void;
        /**
         * This function essentially limits the life time of the `closure` to
         * the life time of the object. That is, when the object is finalized,
         * the `closure` is invalidated by calling g_closure_invalidate() on
         * it, in order to prevent invocations of the closure with a finalized
         * (nonexisting) object. Also, g_object_ref() and g_object_unref() are
         * added as marshal guards to the `closure,` to ensure that an extra
         * reference count is held on `object` during invocation of the
         * `closure`.  Usually, this function will be called on closures that
         * use this `object` as closure data.
         * @param closure #GClosure to watch
         */
        watch_closure(closure: GObject.Closure): void;
        /**
         * the `constructed` function is called by g_object_new() as the
         *  final step of the object creation process.  At the point of the call, all
         *  construction properties have been set on the object.  The purpose of this
         *  call is to allow for object initialisation steps that can only be performed
         *  after construction properties have been set.  `constructed` implementors
         *  should chain up to the `constructed` call of their parent class to allow it
         *  to complete its initialisation.
         */
        vfunc_constructed(): void;
        /**
         * emits property change notification for a bunch
         *  of properties. Overriding `dispatch_properties_changed` should be rarely
         *  needed.
         * @param n_pspecs
         * @param pspecs
         */
        vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
        /**
         * the `dispose` function is supposed to drop all references to other
         *  objects, but keep the instance otherwise intact, so that client method
         *  invocations still work. It may be run multiple times (due to reference
         *  loops). Before returning, `dispose` should chain up to the `dispose` method
         *  of the parent class.
         */
        vfunc_dispose(): void;
        /**
         * instance finalization function, should finish the finalization of
         *  the instance begun in `dispose` and chain up to the `finalize` method of the
         *  parent class.
         */
        vfunc_finalize(): void;
        /**
         * the generic getter for all properties of this type. Should be
         *  overridden for every type with properties.
         * @param property_id
         * @param value
         * @param pspec
         */
        vfunc_get_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use g_object_notify_by_pspec()
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * g_object_freeze_notify(). In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when g_object_thaw_notify() is
         * called.
         * @param pspec
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
         */
        vfunc_set_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        disconnect(id: number): void;
        set(properties: { [key: string]: any }): void;
        block_signal_handler(id: number): any;
        unblock_signal_handler(id: number): any;
        stop_emission_by_name(detailedName: string): any;
    }

    module ClientGlueSkeleton {
        // Constructor properties interface

        interface ConstructorProps
            extends Gio.DBusInterfaceSkeleton.ConstructorProps,
                Gio.DBusInterface.ConstructorProps,
                ClientGlue.ConstructorProps {}
    }

    /**
     * The #UpClientGlueSkeleton structure contains only private data and should only be accessed using the provided API.
     */
    class ClientGlueSkeleton extends Gio.DBusInterfaceSkeleton implements Gio.DBusInterface, ClientGlue {
        static $gtype: GObject.GType<ClientGlueSkeleton>;

        // Constructors

        constructor(properties?: Partial<ClientGlueSkeleton.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): ClientGlueSkeleton;

        // Inherited properties
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UPower.DaemonVersion">"DaemonVersion"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        get daemon_version(): string;
        set daemon_version(val: string);
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UPower.DaemonVersion">"DaemonVersion"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        get daemonVersion(): string;
        set daemonVersion(val: string);
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UPower.LidIsClosed">"LidIsClosed"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        get lid_is_closed(): boolean;
        set lid_is_closed(val: boolean);
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UPower.LidIsClosed">"LidIsClosed"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        get lidIsClosed(): boolean;
        set lidIsClosed(val: boolean);
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UPower.LidIsPresent">"LidIsPresent"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        get lid_is_present(): boolean;
        set lid_is_present(val: boolean);
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UPower.LidIsPresent">"LidIsPresent"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        get lidIsPresent(): boolean;
        set lidIsPresent(val: boolean);
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UPower.OnBattery">"OnBattery"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        get on_battery(): boolean;
        set on_battery(val: boolean);
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UPower.OnBattery">"OnBattery"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        get onBattery(): boolean;
        set onBattery(val: boolean);

        // Inherited methods
        /**
         * Gets the #GDBusObject that `interface_` belongs to, if any.
         * @returns A #GDBusObject or %NULL. The returned reference should be freed with g_object_unref().
         */
        get_object(): Gio.DBusObject | null;
        /**
         * Gets D-Bus introspection information for the D-Bus interface
         * implemented by `interface_`.
         * @returns A #GDBusInterfaceInfo. Do not free.
         */
        get_info(): Gio.DBusInterfaceInfo;
        /**
         * Sets the #GDBusObject for `interface_` to `object`.
         *
         * Note that `interface_` will hold a weak reference to `object`.
         * @param object A #GDBusObject or %NULL.
         */
        set_object(object?: Gio.DBusObject | null): void;
        /**
         * Gets the #GDBusObject that `interface_` belongs to, if any.
         */
        vfunc_dup_object(): Gio.DBusObject | null;
        /**
         * Gets D-Bus introspection information for the D-Bus interface
         * implemented by `interface_`.
         */
        vfunc_get_info(): Gio.DBusInterfaceInfo;
        /**
         * Sets the #GDBusObject for `interface_` to `object`.
         *
         * Note that `interface_` will hold a weak reference to `object`.
         * @param object A #GDBusObject or %NULL.
         */
        vfunc_set_object(object?: Gio.DBusObject | null): void;
        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-freedesktop-UPower.EnumerateDevices">EnumerateDevices()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the <link linkend="g-main-context-push-thread-default">thread-default main loop</link> of the thread you are calling this method from.
         * You can then call up_client_glue_call_enumerate_devices_finish() to get the result of the operation.
         *
         * See up_client_glue_call_enumerate_devices_sync() for the synchronous, blocking version of this method.
         * @param cancellable A #GCancellable or %NULL.
         * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL.
         */
        call_enumerate_devices(
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes an operation started with up_client_glue_call_enumerate_devices().
         * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to up_client_glue_call_enumerate_devices().
         * @returns %TRUE if the call succeded, %FALSE if @error is set.
         */
        call_enumerate_devices_finish(res: Gio.AsyncResult): [boolean, string];
        /**
         * Synchronously invokes the <link linkend="gdbus-method-org-freedesktop-UPower.EnumerateDevices">EnumerateDevices()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
         *
         * See up_client_glue_call_enumerate_devices() for the asynchronous version of this method.
         * @param cancellable A #GCancellable or %NULL.
         * @returns %TRUE if the call succeded, %FALSE if @error is set.
         */
        call_enumerate_devices_sync(cancellable?: Gio.Cancellable | null): [boolean, string];
        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-freedesktop-UPower.GetCriticalAction">GetCriticalAction()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the <link linkend="g-main-context-push-thread-default">thread-default main loop</link> of the thread you are calling this method from.
         * You can then call up_client_glue_call_get_critical_action_finish() to get the result of the operation.
         *
         * See up_client_glue_call_get_critical_action_sync() for the synchronous, blocking version of this method.
         * @param cancellable A #GCancellable or %NULL.
         * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL.
         */
        call_get_critical_action(
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes an operation started with up_client_glue_call_get_critical_action().
         * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to up_client_glue_call_get_critical_action().
         * @returns %TRUE if the call succeded, %FALSE if @error is set.
         */
        call_get_critical_action_finish(res: Gio.AsyncResult): [boolean, string];
        /**
         * Synchronously invokes the <link linkend="gdbus-method-org-freedesktop-UPower.GetCriticalAction">GetCriticalAction()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
         *
         * See up_client_glue_call_get_critical_action() for the asynchronous version of this method.
         * @param cancellable A #GCancellable or %NULL.
         * @returns %TRUE if the call succeded, %FALSE if @error is set.
         */
        call_get_critical_action_sync(cancellable?: Gio.Cancellable | null): [boolean, string];
        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-freedesktop-UPower.GetDisplayDevice">GetDisplayDevice()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the <link linkend="g-main-context-push-thread-default">thread-default main loop</link> of the thread you are calling this method from.
         * You can then call up_client_glue_call_get_display_device_finish() to get the result of the operation.
         *
         * See up_client_glue_call_get_display_device_sync() for the synchronous, blocking version of this method.
         * @param cancellable A #GCancellable or %NULL.
         * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL.
         */
        call_get_display_device(
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes an operation started with up_client_glue_call_get_display_device().
         * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to up_client_glue_call_get_display_device().
         * @returns %TRUE if the call succeded, %FALSE if @error is set.
         */
        call_get_display_device_finish(res: Gio.AsyncResult): [boolean, string];
        /**
         * Synchronously invokes the <link linkend="gdbus-method-org-freedesktop-UPower.GetDisplayDevice">GetDisplayDevice()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
         *
         * See up_client_glue_call_get_display_device() for the asynchronous version of this method.
         * @param cancellable A #GCancellable or %NULL.
         * @returns %TRUE if the call succeded, %FALSE if @error is set.
         */
        call_get_display_device_sync(cancellable?: Gio.Cancellable | null): [boolean, string];
        /**
         * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-freedesktop-UPower.EnumerateDevices">EnumerateDevices()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
         *
         * This method will free `invocation,` you cannot use it afterwards.
         * @param invocation A #GDBusMethodInvocation.
         * @param devices Parameter to return.
         */
        complete_enumerate_devices(invocation: Gio.DBusMethodInvocation, devices: string): void;
        /**
         * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-freedesktop-UPower.GetCriticalAction">GetCriticalAction()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
         *
         * This method will free `invocation,` you cannot use it afterwards.
         * @param invocation A #GDBusMethodInvocation.
         * @param action Parameter to return.
         */
        complete_get_critical_action(invocation: Gio.DBusMethodInvocation, action: string): void;
        /**
         * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-freedesktop-UPower.GetDisplayDevice">GetDisplayDevice()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
         *
         * This method will free `invocation,` you cannot use it afterwards.
         * @param invocation A #GDBusMethodInvocation.
         * @param device Parameter to return.
         */
        complete_get_display_device(invocation: Gio.DBusMethodInvocation, device: string): void;
        /**
         * Emits the <link linkend="gdbus-signal-org-freedesktop-UPower.DeviceAdded">"DeviceAdded"</link> D-Bus signal.
         * @param arg_device Argument to pass with the signal.
         */
        emit_device_added(arg_device: string): void;
        /**
         * Emits the <link linkend="gdbus-signal-org-freedesktop-UPower.DeviceRemoved">"DeviceRemoved"</link> D-Bus signal.
         * @param arg_device Argument to pass with the signal.
         */
        emit_device_removed(arg_device: string): void;
        vfunc_device_added(arg_device: string): void;
        vfunc_device_removed(arg_device: string): void;
        vfunc_handle_enumerate_devices(invocation: Gio.DBusMethodInvocation): boolean;
        vfunc_handle_get_critical_action(invocation: Gio.DBusMethodInvocation): boolean;
        vfunc_handle_get_display_device(invocation: Gio.DBusMethodInvocation): boolean;
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
         * Will result in the "sensitive" property of the widget #GObject instance to be
         * updated with the same value of the "active" property of the action #GObject
         * instance.
         *
         * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well.
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. To remove the binding without affecting the
         * `source` and the `target` you can just call g_object_unref() on the returned
         * #GBinding instance.
         *
         * Removing the binding by calling g_object_unref() on it must only be done if
         * the binding, `source` and `target` are only used from a single thread and it
         * is clear that both `source` and `target` outlive the binding. Especially it
         * is not safe to rely on this if the binding, `source` or `target` can be
         * finalized from different threads. Keep another reference to the binding and
         * use g_binding_unbind() instead to be on the safe side.
         *
         * A #GObject can have multiple bindings.
         * @param source_property the property on @source to bind
         * @param target the target #GObject
         * @param target_property the property on @target to bind
         * @param flags flags to pass to #GBinding
         * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
         */
        bind_property(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags,
        ): GObject.Binding;
        /**
         * Complete version of g_object_bind_property().
         *
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target,` allowing you to set the transformation functions to be used by
         * the binding.
         *
         * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well. The `transform_from` function is only used in case
         * of bidirectional bindings, otherwise it will be ignored
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. This will release the reference that is
         * being held on the #GBinding instance; if you want to hold on to the
         * #GBinding instance, you will need to hold a reference to it.
         *
         * To remove the binding, call g_binding_unbind().
         *
         * A #GObject can have multiple bindings.
         *
         * The same `user_data` parameter will be used for both `transform_to`
         * and `transform_from` transformation functions; the `notify` function will
         * be called once, when the binding is removed. If you need different data
         * for each transformation function, please use
         * g_object_bind_property_with_closures() instead.
         * @param source_property the property on @source to bind
         * @param target the target #GObject
         * @param target_property the property on @target to bind
         * @param flags flags to pass to #GBinding
         * @param transform_to the transformation function     from the @source to the @target, or %NULL to use the default
         * @param transform_from the transformation function     from the @target to the @source, or %NULL to use the default
         * @param notify a function to call when disposing the binding, to free     resources used by the transformation functions, or %NULL if not required
         * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
         */
        bind_property_full(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags,
            transform_to?: GObject.BindingTransformFunc | null,
            transform_from?: GObject.BindingTransformFunc | null,
            notify?: GLib.DestroyNotify | null,
        ): GObject.Binding;
        // Conflicted with GObject.Object.bind_property_full
        bind_property_full(...args: never[]): any;
        /**
         * This function is intended for #GObject implementations to re-enforce
         * a [floating][floating-ref] object reference. Doing this is seldom
         * required: all #GInitiallyUnowneds are created with a floating reference
         * which usually just needs to be sunken by calling g_object_ref_sink().
         */
        force_floating(): void;
        /**
         * Increases the freeze count on `object`. If the freeze count is
         * non-zero, the emission of "notify" signals on `object` is
         * stopped. The signals are queued until the freeze count is decreased
         * to zero. Duplicate notifications are squashed so that at most one
         * #GObject::notify signal is emitted for each property modified while the
         * object is frozen.
         *
         * This is necessary for accessors that modify multiple properties to prevent
         * premature notification while the object is still being modified.
         */
        freeze_notify(): void;
        /**
         * Gets a named field from the objects table of associations (see g_object_set_data()).
         * @param key name of the key for that association
         * @returns the data if found,          or %NULL if no such data exists.
         */
        get_data(key: string): any | null;
        get_property(property_name: string): any;
        /**
         * This function gets back user data pointers stored via
         * g_object_set_qdata().
         * @param quark A #GQuark, naming the user data pointer
         * @returns The user data pointer set, or %NULL
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
         * Checks whether `object` has a [floating][floating-ref] reference.
         * @returns %TRUE if @object has a floating reference
         */
        is_floating(): boolean;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use g_object_notify_by_pspec()
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * g_object_freeze_notify(). In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when g_object_thaw_notify() is
         * called.
         * @param property_name the name of a property installed on the class of @object.
         */
        notify(property_name: string): void;
        /**
         * Emits a "notify" signal for the property specified by `pspec` on `object`.
         *
         * This function omits the property name lookup, hence it is faster than
         * g_object_notify().
         *
         * One way to avoid using g_object_notify() from within the
         * class that registered the properties, and using g_object_notify_by_pspec()
         * instead, is to store the GParamSpec used with
         * g_object_class_install_property() inside a static array, e.g.:
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
         * @param pspec the #GParamSpec of a property installed on the class of @object.
         */
        notify_by_pspec(pspec: GObject.ParamSpec): void;
        /**
         * Increases the reference count of `object`.
         *
         * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
         * of `object` will be propagated to the return type (using the GCC typeof()
         * extension), so any casting the caller needs to do on the return type must be
         * explicit.
         * @returns the same @object
         */
        ref(): GObject.Object;
        /**
         * Increase the reference count of `object,` and possibly remove the
         * [floating][floating-ref] reference, if `object` has a floating reference.
         *
         * In other words, if the object is floating, then this call "assumes
         * ownership" of the floating reference, converting it to a normal
         * reference by clearing the floating flag while leaving the reference
         * count unchanged.  If the object is not floating, then this call
         * adds a new normal reference increasing the reference count by one.
         *
         * Since GLib 2.56, the type of `object` will be propagated to the return type
         * under the same conditions as for g_object_ref().
         * @returns @object
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
         * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
         * This means a copy of `key` is kept permanently (even after `object` has been
         * finalized) — so it is recommended to only use a small, bounded set of values
         * for `key` in your program, to avoid the #GQuark storage growing unbounded.
         * @param key name of the key
         * @param data data to associate with that key
         */
        set_data(key: string, data?: any | null): void;
        set_property(property_name: string, value: any): void;
        /**
         * Remove a specified datum from the object's data associations,
         * without invoking the association's destroy handler.
         * @param key name of the key
         * @returns the data if found, or %NULL          if no such data exists.
         */
        steal_data(key: string): any | null;
        /**
         * This function gets back user data pointers stored via
         * g_object_set_qdata() and removes the `data` from object
         * without invoking its destroy() function (if any was
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
         * Using g_object_get_qdata() in the above example, instead of
         * g_object_steal_qdata() would have left the destroy function set,
         * and thus the partial string list would have been freed upon
         * g_object_set_qdata_full().
         * @param quark A #GQuark, naming the user data pointer
         * @returns The user data pointer set, or %NULL
         */
        steal_qdata(quark: GLib.Quark): any | null;
        /**
         * Reverts the effect of a previous call to
         * g_object_freeze_notify(). The freeze count is decreased on `object`
         * and when it reaches zero, queued "notify" signals are emitted.
         *
         * Duplicate notifications for each property are squashed so that at most one
         * #GObject::notify signal is emitted for each property, in the reverse order
         * in which they have been queued.
         *
         * It is an error to call this function when the freeze count is zero.
         */
        thaw_notify(): void;
        /**
         * Decreases the reference count of `object`. When its reference count
         * drops to 0, the object is finalized (i.e. its memory is freed).
         *
         * If the pointer to the #GObject may be reused in future (for example, if it is
         * an instance variable of another object), it is recommended to clear the
         * pointer to %NULL rather than retain a dangling pointer to a potentially
         * invalid #GObject instance. Use g_clear_object() for this.
         */
        unref(): void;
        /**
         * This function essentially limits the life time of the `closure` to
         * the life time of the object. That is, when the object is finalized,
         * the `closure` is invalidated by calling g_closure_invalidate() on
         * it, in order to prevent invocations of the closure with a finalized
         * (nonexisting) object. Also, g_object_ref() and g_object_unref() are
         * added as marshal guards to the `closure,` to ensure that an extra
         * reference count is held on `object` during invocation of the
         * `closure`.  Usually, this function will be called on closures that
         * use this `object` as closure data.
         * @param closure #GClosure to watch
         */
        watch_closure(closure: GObject.Closure): void;
        /**
         * the `constructed` function is called by g_object_new() as the
         *  final step of the object creation process.  At the point of the call, all
         *  construction properties have been set on the object.  The purpose of this
         *  call is to allow for object initialisation steps that can only be performed
         *  after construction properties have been set.  `constructed` implementors
         *  should chain up to the `constructed` call of their parent class to allow it
         *  to complete its initialisation.
         */
        vfunc_constructed(): void;
        /**
         * emits property change notification for a bunch
         *  of properties. Overriding `dispatch_properties_changed` should be rarely
         *  needed.
         * @param n_pspecs
         * @param pspecs
         */
        vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
        /**
         * the `dispose` function is supposed to drop all references to other
         *  objects, but keep the instance otherwise intact, so that client method
         *  invocations still work. It may be run multiple times (due to reference
         *  loops). Before returning, `dispose` should chain up to the `dispose` method
         *  of the parent class.
         */
        vfunc_dispose(): void;
        /**
         * instance finalization function, should finish the finalization of
         *  the instance begun in `dispose` and chain up to the `finalize` method of the
         *  parent class.
         */
        vfunc_finalize(): void;
        /**
         * the generic getter for all properties of this type. Should be
         *  overridden for every type with properties.
         * @param property_id
         * @param value
         * @param pspec
         */
        vfunc_get_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use g_object_notify_by_pspec()
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * g_object_freeze_notify(). In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when g_object_thaw_notify() is
         * called.
         * @param pspec
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
         */
        vfunc_set_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        disconnect(id: number): void;
        set(properties: { [key: string]: any }): void;
        block_signal_handler(id: number): any;
        unblock_signal_handler(id: number): any;
        stop_emission_by_name(detailedName: string): any;
    }

    module Device {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            capacity: number;
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
            warning_level: number;
            warningLevel: number;
        }
    }

    class Device extends GObject.Object {
        static $gtype: GObject.GType<Device>;

        // Properties

        /**
         * The percentage capacity of the device where 100% means the device has
         * the same charge potential as when it was manufactured.
         */
        get capacity(): number;
        set capacity(val: number);
        /**
         * The energy left in the device. Measured in mWh.
         */
        get energy(): number;
        set energy(val: number);
        /**
         * The energy the device will have when it is empty. This is usually zero.
         * Measured in mWh.
         */
        get energy_empty(): number;
        set energy_empty(val: number);
        /**
         * The energy the device will have when it is empty. This is usually zero.
         * Measured in mWh.
         */
        get energyEmpty(): number;
        set energyEmpty(val: number);
        /**
         * The amount of energy when the device is fully charged. Measured in mWh.
         */
        get energy_full(): number;
        set energy_full(val: number);
        /**
         * The amount of energy when the device is fully charged. Measured in mWh.
         */
        get energyFull(): number;
        set energyFull(val: number);
        /**
         * The amount of energy when the device was brand new. Measured in mWh.
         */
        get energy_full_design(): number;
        set energy_full_design(val: number);
        /**
         * The amount of energy when the device was brand new. Measured in mWh.
         */
        get energyFullDesign(): number;
        set energyFullDesign(val: number);
        /**
         * The rate of discharge or charge. Measured in mW.
         */
        get energy_rate(): number;
        set energy_rate(val: number);
        /**
         * The rate of discharge or charge. Measured in mW.
         */
        get energyRate(): number;
        set energyRate(val: number);
        /**
         * If the device has history data that might be useful.
         */
        get has_history(): boolean;
        set has_history(val: boolean);
        /**
         * If the device has history data that might be useful.
         */
        get hasHistory(): boolean;
        set hasHistory(val: boolean);
        /**
         * If the device has statistics data that might be useful.
         */
        get has_statistics(): boolean;
        set has_statistics(val: boolean);
        /**
         * If the device has statistics data that might be useful.
         */
        get hasStatistics(): boolean;
        set hasStatistics(val: boolean);
        /**
         * The icon name, following the Icon Naming Speficiation
         */
        get icon_name(): string;
        set icon_name(val: string);
        /**
         * The icon name, following the Icon Naming Speficiation
         */
        get iconName(): string;
        set iconName(val: string);
        /**
         * If the device is present, as some devices like laptop batteries
         * can be removed, leaving an empty bay that is still technically a
         * device.
         */
        get is_present(): boolean;
        set is_present(val: boolean);
        /**
         * If the device is present, as some devices like laptop batteries
         * can be removed, leaving an empty bay that is still technically a
         * device.
         */
        get isPresent(): boolean;
        set isPresent(val: boolean);
        /**
         * If the device has a rechargable battery.
         */
        get is_rechargeable(): boolean;
        set is_rechargeable(val: boolean);
        /**
         * If the device has a rechargable battery.
         */
        get isRechargeable(): boolean;
        set isRechargeable(val: boolean);
        /**
         * The device kind, e.g. %UP_DEVICE_KIND_KEYBOARD.
         */
        get kind(): number;
        set kind(val: number);
        /**
         * The current luminosity of the device.
         */
        get luminosity(): number;
        set luminosity(val: number);
        /**
         * The model of the device.
         */
        get model(): string;
        set model(val: string);
        /**
         * The native path of the device, useful for direct device access.
         */
        get native_path(): string;
        set native_path(val: string);
        /**
         * The native path of the device, useful for direct device access.
         */
        get nativePath(): string;
        set nativePath(val: string);
        /**
         * If the device is online, i.e. connected.
         */
        get online(): boolean;
        set online(val: boolean);
        /**
         * The percentage charge of the device.
         */
        get percentage(): number;
        set percentage(val: number);
        /**
         * If the device is powering the system.
         */
        get power_supply(): boolean;
        set power_supply(val: boolean);
        /**
         * If the device is powering the system.
         */
        get powerSupply(): boolean;
        set powerSupply(val: boolean);
        /**
         * The serial number of the device.
         */
        get serial(): string;
        set serial(val: string);
        /**
         * The state the device is in at this time, e.g. %UP_DEVICE_STATE_EMPTY.
         */
        get state(): number;
        set state(val: number);
        /**
         * The battery technology e.g. %UP_DEVICE_TECHNOLOGY_LITHIUM_ION.
         */
        get technology(): number;
        set technology(val: number);
        /**
         * The temperature of the device in degrees Celsius.
         */
        get temperature(): number;
        set temperature(val: number);
        /**
         * The amount of time until the device is empty.
         */
        get time_to_empty(): number;
        set time_to_empty(val: number);
        /**
         * The amount of time until the device is empty.
         */
        get timeToEmpty(): number;
        set timeToEmpty(val: number);
        /**
         * The amount of time until the device is fully charged.
         */
        get time_to_full(): number;
        set time_to_full(val: number);
        /**
         * The amount of time until the device is fully charged.
         */
        get timeToFull(): number;
        set timeToFull(val: number);
        /**
         * The last time the device was updated.
         */
        get update_time(): number;
        set update_time(val: number);
        /**
         * The last time the device was updated.
         */
        get updateTime(): number;
        set updateTime(val: number);
        /**
         * The vendor of the device.
         */
        get vendor(): string;
        set vendor(val: string);
        /**
         * The current voltage of the device.
         */
        get voltage(): number;
        set voltage(val: number);
        /**
         * The warning level e.g. %UP_DEVICE_LEVEL_WARNING.
         */
        get warning_level(): number;
        set warning_level(val: number);
        /**
         * The warning level e.g. %UP_DEVICE_LEVEL_WARNING.
         */
        get warningLevel(): number;
        set warningLevel(val: number);

        // Constructors

        constructor(properties?: Partial<Device.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): Device;

        // Static methods

        /**
         * Converts a string to a #UpDeviceKind.
         * @param type
         */
        static kind_from_string(type: string): DeviceKind;
        /**
         * Converts a #UpDeviceKind to a string.
         * @param type_enum
         */
        static kind_to_string(type_enum: DeviceKind): string;
        /**
         * Converts a string to a #UpDeviceLevel.
         * @param level
         */
        static level_from_string(level: string): DeviceLevel;
        /**
         * Converts a #UpDeviceLevel to a string.
         * @param level_enum
         */
        static level_to_string(level_enum: DeviceLevel): string;
        /**
         * Converts a string to a #UpDeviceState.
         * @param state
         */
        static state_from_string(state: string): DeviceState;
        /**
         * Converts a #UpDeviceState to a string.
         * @param state_enum
         */
        static state_to_string(state_enum: DeviceState): string;
        /**
         * Converts a string to a #UpDeviceTechnology.
         * @param technology
         */
        static technology_from_string(technology: string): DeviceTechnology;
        /**
         * Converts a #UpDeviceTechnology to a string.
         * @param technology_enum
         */
        static technology_to_string(technology_enum: DeviceTechnology): string;

        // Methods

        /**
         * Gets the device history.
         * @param type The type of history, known values are "rate" and "charge".
         * @param timespec the amount of time to look back into time.
         * @param resolution the resolution of data.
         * @param cancellable a #GCancellable or %NULL
         * @returns an array of #UpHistoryItem's, with the most               recent one being first; %NULL if @error is set or @device is               invalid
         */
        get_history_sync(
            type: string,
            timespec: number,
            resolution: number,
            cancellable?: Gio.Cancellable | null,
        ): HistoryItem[];
        /**
         * Gets the object path for the device.
         * @returns the object path, or %NULL
         */
        get_object_path(): string;
        /**
         * Gets the device current statistics.
         * @param type the type of statistics.
         * @param cancellable a #GCancellable or %NULL
         * @returns an array of #UpStatsItem's, else #NULL and @error is used
         */
        get_statistics_sync(type: string, cancellable?: Gio.Cancellable | null): StatsItem[];
        /**
         * Refreshes properties on the device.
         * This function is normally not required.
         * @param cancellable a #GCancellable or %NULL
         * @returns #TRUE for success, else #FALSE and @error is used
         */
        refresh_sync(cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Sets the object path of the object and fills up initial properties.
         * @param object_path The UPower object path.
         * @param cancellable a #GCancellable or %NULL
         * @returns #TRUE for success, else #FALSE and @error is used
         */
        set_object_path_sync(object_path: string, cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Converts the device to a string description.
         * @returns text representation of #UpDevice
         */
        to_text(): string;
    }

    module DeviceGlueProxy {
        // Constructor properties interface

        interface ConstructorProps
            extends Gio.DBusProxy.ConstructorProps,
                Gio.AsyncInitable.ConstructorProps,
                Gio.DBusInterface.ConstructorProps,
                Gio.Initable.ConstructorProps,
                DeviceGlue.ConstructorProps {}
    }

    /**
     * The #UpDeviceGlueProxy structure contains only private data and should only be accessed using the provided API.
     */
    class DeviceGlueProxy
        extends Gio.DBusProxy
        implements Gio.AsyncInitable<DeviceGlueProxy>, Gio.DBusInterface, Gio.Initable, DeviceGlue
    {
        static $gtype: GObject.GType<DeviceGlueProxy>;

        // Constructors

        constructor(properties?: Partial<DeviceGlueProxy.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static new_finish(res: Gio.AsyncResult): DeviceGlueProxy;
        // Conflicted with Gio.AsyncInitable.new_finish

        static new_finish(...args: never[]): any;

        static new_for_bus_finish(res: Gio.AsyncResult): DeviceGlueProxy;

        static new_for_bus_sync(
            bus_type: Gio.BusType,
            flags: Gio.DBusProxyFlags,
            name: string,
            object_path: string,
            cancellable?: Gio.Cancellable | null,
        ): DeviceGlueProxy;
        // Conflicted with Gio.DBusProxy.new_for_bus_sync

        static new_for_bus_sync(...args: never[]): any;

        static new_sync(
            connection: Gio.DBusConnection,
            flags: Gio.DBusProxyFlags,
            name: string | null,
            object_path: string,
            cancellable?: Gio.Cancellable | null,
        ): DeviceGlueProxy;
        // Conflicted with Gio.DBusProxy.new_sync

        static new_sync(...args: never[]): any;

        // Static methods

        /**
         * Asynchronously creates a proxy for the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-UPower-Device.top_of_page">org.freedesktop.UPower.Device</link>. See g_dbus_proxy_new() for more details.
         *
         * When the operation is finished, `callback` will be invoked in the <link linkend="g-main-context-push-thread-default">thread-default main loop</link> of the thread you are calling this method from.
         * You can then call up_device_glue_proxy_new_finish() to get the result of the operation.
         *
         * See up_device_glue_proxy_new_sync() for the synchronous, blocking version of this constructor.
         * @param connection A #GDBusConnection.
         * @param flags Flags from the #GDBusProxyFlags enumeration.
         * @param name A bus name (well-known or unique) or %NULL if @connection is not a message bus connection.
         * @param object_path An object path.
         * @param cancellable A #GCancellable or %NULL.
         * @param callback A #GAsyncReadyCallback to call when the request is satisfied.
         */
        static ['new'](
            connection: Gio.DBusConnection,
            flags: Gio.DBusProxyFlags,
            name: string | null,
            object_path: string,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<DeviceGlueProxy> | null,
        ): void;
        // Conflicted with Gio.DBusProxy.new
        static ['new'](...args: never[]): any;
        /**
         * Like up_device_glue_proxy_new() but takes a #GBusType instead of a #GDBusConnection.
         *
         * When the operation is finished, `callback` will be invoked in the <link linkend="g-main-context-push-thread-default">thread-default main loop</link> of the thread you are calling this method from.
         * You can then call up_device_glue_proxy_new_for_bus_finish() to get the result of the operation.
         *
         * See up_device_glue_proxy_new_for_bus_sync() for the synchronous, blocking version of this constructor.
         * @param bus_type A #GBusType.
         * @param flags Flags from the #GDBusProxyFlags enumeration.
         * @param name A bus name (well-known or unique).
         * @param object_path An object path.
         * @param cancellable A #GCancellable or %NULL.
         * @param callback A #GAsyncReadyCallback to call when the request is satisfied.
         */
        static new_for_bus(
            bus_type: Gio.BusType,
            flags: Gio.DBusProxyFlags,
            name: string,
            object_path: string,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<DeviceGlueProxy> | null,
        ): void;
        // Conflicted with Gio.DBusProxy.new_for_bus
        static new_for_bus(...args: never[]): any;

        // Inherited properties
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UPower-Device.Capacity">"Capacity"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        get capacity(): number;
        set capacity(val: number);
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UPower-Device.Energy">"Energy"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        get energy(): number;
        set energy(val: number);
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UPower-Device.EnergyEmpty">"EnergyEmpty"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        get energy_empty(): number;
        set energy_empty(val: number);
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UPower-Device.EnergyEmpty">"EnergyEmpty"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        get energyEmpty(): number;
        set energyEmpty(val: number);
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UPower-Device.EnergyFull">"EnergyFull"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        get energy_full(): number;
        set energy_full(val: number);
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UPower-Device.EnergyFull">"EnergyFull"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        get energyFull(): number;
        set energyFull(val: number);
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UPower-Device.EnergyFullDesign">"EnergyFullDesign"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        get energy_full_design(): number;
        set energy_full_design(val: number);
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UPower-Device.EnergyFullDesign">"EnergyFullDesign"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        get energyFullDesign(): number;
        set energyFullDesign(val: number);
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UPower-Device.EnergyRate">"EnergyRate"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        get energy_rate(): number;
        set energy_rate(val: number);
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UPower-Device.EnergyRate">"EnergyRate"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        get energyRate(): number;
        set energyRate(val: number);
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UPower-Device.HasHistory">"HasHistory"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        get has_history(): boolean;
        set has_history(val: boolean);
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UPower-Device.HasHistory">"HasHistory"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        get hasHistory(): boolean;
        set hasHistory(val: boolean);
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UPower-Device.HasStatistics">"HasStatistics"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        get has_statistics(): boolean;
        set has_statistics(val: boolean);
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UPower-Device.HasStatistics">"HasStatistics"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        get hasStatistics(): boolean;
        set hasStatistics(val: boolean);
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UPower-Device.IconName">"IconName"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        get icon_name(): string;
        set icon_name(val: string);
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UPower-Device.IconName">"IconName"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        get iconName(): string;
        set iconName(val: string);
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UPower-Device.IsPresent">"IsPresent"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        get is_present(): boolean;
        set is_present(val: boolean);
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UPower-Device.IsPresent">"IsPresent"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        get isPresent(): boolean;
        set isPresent(val: boolean);
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UPower-Device.IsRechargeable">"IsRechargeable"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        get is_rechargeable(): boolean;
        set is_rechargeable(val: boolean);
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UPower-Device.IsRechargeable">"IsRechargeable"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        get isRechargeable(): boolean;
        set isRechargeable(val: boolean);
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UPower-Device.Luminosity">"Luminosity"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        get luminosity(): number;
        set luminosity(val: number);
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UPower-Device.Model">"Model"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        get model(): string;
        set model(val: string);
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UPower-Device.NativePath">"NativePath"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        get native_path(): string;
        set native_path(val: string);
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UPower-Device.NativePath">"NativePath"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        get nativePath(): string;
        set nativePath(val: string);
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UPower-Device.Online">"Online"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        get online(): boolean;
        set online(val: boolean);
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UPower-Device.Percentage">"Percentage"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        get percentage(): number;
        set percentage(val: number);
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UPower-Device.PowerSupply">"PowerSupply"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        get power_supply(): boolean;
        set power_supply(val: boolean);
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UPower-Device.PowerSupply">"PowerSupply"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        get powerSupply(): boolean;
        set powerSupply(val: boolean);
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UPower-Device.Serial">"Serial"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        get serial(): string;
        set serial(val: string);
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UPower-Device.State">"State"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        get state(): number;
        set state(val: number);
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UPower-Device.Technology">"Technology"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        get technology(): number;
        set technology(val: number);
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UPower-Device.Temperature">"Temperature"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        get temperature(): number;
        set temperature(val: number);
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UPower-Device.TimeToEmpty">"TimeToEmpty"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        get time_to_empty(): number;
        set time_to_empty(val: number);
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UPower-Device.TimeToEmpty">"TimeToEmpty"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        get timeToEmpty(): number;
        set timeToEmpty(val: number);
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UPower-Device.TimeToFull">"TimeToFull"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        get time_to_full(): number;
        set time_to_full(val: number);
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UPower-Device.TimeToFull">"TimeToFull"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        get timeToFull(): number;
        set timeToFull(val: number);
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UPower-Device.Type">"Type"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        get type(): number;
        set type(val: number);
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UPower-Device.UpdateTime">"UpdateTime"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        get update_time(): number;
        set update_time(val: number);
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UPower-Device.UpdateTime">"UpdateTime"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        get updateTime(): number;
        set updateTime(val: number);
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UPower-Device.Vendor">"Vendor"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        get vendor(): string;
        set vendor(val: string);
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UPower-Device.Voltage">"Voltage"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        get voltage(): number;
        set voltage(val: number);
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UPower-Device.WarningLevel">"WarningLevel"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        get warning_level(): number;
        set warning_level(val: number);
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UPower-Device.WarningLevel">"WarningLevel"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        get warningLevel(): number;
        set warningLevel(val: number);

        // Inherited methods
        /**
         * Starts asynchronous initialization of the object implementing the
         * interface. This must be done before any real use of the object after
         * initial construction. If the object also implements #GInitable you can
         * optionally call g_initable_init() instead.
         *
         * This method is intended for language bindings. If writing in C,
         * g_async_initable_new_async() should typically be used instead.
         *
         * When the initialization is finished, `callback` will be called. You can
         * then call g_async_initable_init_finish() to get the result of the
         * initialization.
         *
         * Implementations may also support cancellation. If `cancellable` is not
         * %NULL, then initialization can be cancelled by triggering the cancellable
         * object from another thread. If the operation was cancelled, the error
         * %G_IO_ERROR_CANCELLED will be returned. If `cancellable` is not %NULL, and
         * the object doesn't support cancellable initialization, the error
         * %G_IO_ERROR_NOT_SUPPORTED will be returned.
         *
         * As with #GInitable, if the object is not initialized, or initialization
         * returns with an error, then all operations on the object except
         * g_object_ref() and g_object_unref() are considered to be invalid, and
         * have undefined behaviour. They will often fail with g_critical() or
         * g_warning(), but this must not be relied on.
         *
         * Callers should not assume that a class which implements #GAsyncInitable can
         * be initialized multiple times; for more information, see g_initable_init().
         * If a class explicitly supports being initialized multiple times,
         * implementation requires yielding all subsequent calls to init_async() on the
         * results of the first call.
         *
         * For classes that also support the #GInitable interface, the default
         * implementation of this method will run the g_initable_init() function
         * in a thread, so if you want to support asynchronous initialization via
         * threads, just implement the #GAsyncInitable interface without overriding
         * any interface methods.
         * @param io_priority the [I/O priority][io-priority] of the operation
         * @param cancellable optional #GCancellable object, %NULL to ignore.
         * @param callback a #GAsyncReadyCallback to call when the request is satisfied
         */
        init_async(
            io_priority: number,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes asynchronous initialization and returns the result.
         * See g_async_initable_init_async().
         * @param res a #GAsyncResult.
         * @returns %TRUE if successful. If an error has occurred, this function will return %FALSE and set @error appropriately if present.
         */
        init_finish(res: Gio.AsyncResult): boolean;
        /**
         * Finishes the async construction for the various g_async_initable_new
         * calls, returning the created object or %NULL on error.
         * @param res the #GAsyncResult from the callback
         * @returns a newly created #GObject,      or %NULL on error. Free with g_object_unref().
         */
        new_finish(res: Gio.AsyncResult): DeviceGlueProxy;
        // Conflicted with Gio.DBusProxy.new_finish
        new_finish(...args: never[]): any;
        /**
         * Starts asynchronous initialization of the object implementing the
         * interface. This must be done before any real use of the object after
         * initial construction. If the object also implements #GInitable you can
         * optionally call g_initable_init() instead.
         *
         * This method is intended for language bindings. If writing in C,
         * g_async_initable_new_async() should typically be used instead.
         *
         * When the initialization is finished, `callback` will be called. You can
         * then call g_async_initable_init_finish() to get the result of the
         * initialization.
         *
         * Implementations may also support cancellation. If `cancellable` is not
         * %NULL, then initialization can be cancelled by triggering the cancellable
         * object from another thread. If the operation was cancelled, the error
         * %G_IO_ERROR_CANCELLED will be returned. If `cancellable` is not %NULL, and
         * the object doesn't support cancellable initialization, the error
         * %G_IO_ERROR_NOT_SUPPORTED will be returned.
         *
         * As with #GInitable, if the object is not initialized, or initialization
         * returns with an error, then all operations on the object except
         * g_object_ref() and g_object_unref() are considered to be invalid, and
         * have undefined behaviour. They will often fail with g_critical() or
         * g_warning(), but this must not be relied on.
         *
         * Callers should not assume that a class which implements #GAsyncInitable can
         * be initialized multiple times; for more information, see g_initable_init().
         * If a class explicitly supports being initialized multiple times,
         * implementation requires yielding all subsequent calls to init_async() on the
         * results of the first call.
         *
         * For classes that also support the #GInitable interface, the default
         * implementation of this method will run the g_initable_init() function
         * in a thread, so if you want to support asynchronous initialization via
         * threads, just implement the #GAsyncInitable interface without overriding
         * any interface methods.
         * @param io_priority the [I/O priority][io-priority] of the operation
         * @param cancellable optional #GCancellable object, %NULL to ignore.
         * @param callback a #GAsyncReadyCallback to call when the request is satisfied
         */
        vfunc_init_async(
            io_priority: number,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes asynchronous initialization and returns the result.
         * See g_async_initable_init_async().
         * @param res a #GAsyncResult.
         */
        vfunc_init_finish(res: Gio.AsyncResult): boolean;
        /**
         * Gets the #GDBusObject that `interface_` belongs to, if any.
         * @returns A #GDBusObject or %NULL. The returned reference should be freed with g_object_unref().
         */
        get_object(): Gio.DBusObject | null;
        /**
         * Gets D-Bus introspection information for the D-Bus interface
         * implemented by `interface_`.
         * @returns A #GDBusInterfaceInfo. Do not free.
         */
        get_info(): Gio.DBusInterfaceInfo;
        /**
         * Sets the #GDBusObject for `interface_` to `object`.
         *
         * Note that `interface_` will hold a weak reference to `object`.
         * @param object A #GDBusObject or %NULL.
         */
        set_object(object?: Gio.DBusObject | null): void;
        /**
         * Gets the #GDBusObject that `interface_` belongs to, if any.
         */
        vfunc_dup_object(): Gio.DBusObject | null;
        /**
         * Gets D-Bus introspection information for the D-Bus interface
         * implemented by `interface_`.
         */
        vfunc_get_info(): Gio.DBusInterfaceInfo;
        /**
         * Sets the #GDBusObject for `interface_` to `object`.
         *
         * Note that `interface_` will hold a weak reference to `object`.
         * @param object A #GDBusObject or %NULL.
         */
        vfunc_set_object(object?: Gio.DBusObject | null): void;
        /**
         * Initializes the object implementing the interface.
         *
         * This method is intended for language bindings. If writing in C,
         * g_initable_new() should typically be used instead.
         *
         * The object must be initialized before any real use after initial
         * construction, either with this function or g_async_initable_init_async().
         *
         * Implementations may also support cancellation. If `cancellable` is not %NULL,
         * then initialization can be cancelled by triggering the cancellable object
         * from another thread. If the operation was cancelled, the error
         * %G_IO_ERROR_CANCELLED will be returned. If `cancellable` is not %NULL and
         * the object doesn't support cancellable initialization the error
         * %G_IO_ERROR_NOT_SUPPORTED will be returned.
         *
         * If the object is not initialized, or initialization returns with an
         * error, then all operations on the object except g_object_ref() and
         * g_object_unref() are considered to be invalid, and have undefined
         * behaviour. See the [introduction][ginitable] for more details.
         *
         * Callers should not assume that a class which implements #GInitable can be
         * initialized multiple times, unless the class explicitly documents itself as
         * supporting this. Generally, a class’ implementation of init() can assume
         * (and assert) that it will only be called once. Previously, this documentation
         * recommended all #GInitable implementations should be idempotent; that
         * recommendation was relaxed in GLib 2.54.
         *
         * If a class explicitly supports being initialized multiple times, it is
         * recommended that the method is idempotent: multiple calls with the same
         * arguments should return the same results. Only the first call initializes
         * the object; further calls return the result of the first call.
         *
         * One reason why a class might need to support idempotent initialization is if
         * it is designed to be used via the singleton pattern, with a
         * #GObjectClass.constructor that sometimes returns an existing instance.
         * In this pattern, a caller would expect to be able to call g_initable_init()
         * on the result of g_object_new(), regardless of whether it is in fact a new
         * instance.
         * @param cancellable optional #GCancellable object, %NULL to ignore.
         * @returns %TRUE if successful. If an error has occurred, this function will     return %FALSE and set @error appropriately if present.
         */
        init(cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Initializes the object implementing the interface.
         *
         * This method is intended for language bindings. If writing in C,
         * g_initable_new() should typically be used instead.
         *
         * The object must be initialized before any real use after initial
         * construction, either with this function or g_async_initable_init_async().
         *
         * Implementations may also support cancellation. If `cancellable` is not %NULL,
         * then initialization can be cancelled by triggering the cancellable object
         * from another thread. If the operation was cancelled, the error
         * %G_IO_ERROR_CANCELLED will be returned. If `cancellable` is not %NULL and
         * the object doesn't support cancellable initialization the error
         * %G_IO_ERROR_NOT_SUPPORTED will be returned.
         *
         * If the object is not initialized, or initialization returns with an
         * error, then all operations on the object except g_object_ref() and
         * g_object_unref() are considered to be invalid, and have undefined
         * behaviour. See the [introduction][ginitable] for more details.
         *
         * Callers should not assume that a class which implements #GInitable can be
         * initialized multiple times, unless the class explicitly documents itself as
         * supporting this. Generally, a class’ implementation of init() can assume
         * (and assert) that it will only be called once. Previously, this documentation
         * recommended all #GInitable implementations should be idempotent; that
         * recommendation was relaxed in GLib 2.54.
         *
         * If a class explicitly supports being initialized multiple times, it is
         * recommended that the method is idempotent: multiple calls with the same
         * arguments should return the same results. Only the first call initializes
         * the object; further calls return the result of the first call.
         *
         * One reason why a class might need to support idempotent initialization is if
         * it is designed to be used via the singleton pattern, with a
         * #GObjectClass.constructor that sometimes returns an existing instance.
         * In this pattern, a caller would expect to be able to call g_initable_init()
         * on the result of g_object_new(), regardless of whether it is in fact a new
         * instance.
         * @param cancellable optional #GCancellable object, %NULL to ignore.
         */
        vfunc_init(cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-freedesktop-UPower-Device.GetHistory">GetHistory()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the <link linkend="g-main-context-push-thread-default">thread-default main loop</link> of the thread you are calling this method from.
         * You can then call up_device_glue_call_get_history_finish() to get the result of the operation.
         *
         * See up_device_glue_call_get_history_sync() for the synchronous, blocking version of this method.
         * @param arg_type Argument to pass with the method invocation.
         * @param arg_timespan Argument to pass with the method invocation.
         * @param arg_resolution Argument to pass with the method invocation.
         * @param cancellable A #GCancellable or %NULL.
         * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL.
         */
        call_get_history(
            arg_type: string,
            arg_timespan: number,
            arg_resolution: number,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes an operation started with up_device_glue_call_get_history().
         * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to up_device_glue_call_get_history().
         * @returns %TRUE if the call succeded, %FALSE if @error is set.
         */
        call_get_history_finish(res: Gio.AsyncResult): [boolean, GLib.Variant];
        /**
         * Synchronously invokes the <link linkend="gdbus-method-org-freedesktop-UPower-Device.GetHistory">GetHistory()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
         *
         * See up_device_glue_call_get_history() for the asynchronous version of this method.
         * @param arg_type Argument to pass with the method invocation.
         * @param arg_timespan Argument to pass with the method invocation.
         * @param arg_resolution Argument to pass with the method invocation.
         * @param cancellable A #GCancellable or %NULL.
         * @returns %TRUE if the call succeded, %FALSE if @error is set.
         */
        call_get_history_sync(
            arg_type: string,
            arg_timespan: number,
            arg_resolution: number,
            cancellable?: Gio.Cancellable | null,
        ): [boolean, GLib.Variant];
        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-freedesktop-UPower-Device.GetStatistics">GetStatistics()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the <link linkend="g-main-context-push-thread-default">thread-default main loop</link> of the thread you are calling this method from.
         * You can then call up_device_glue_call_get_statistics_finish() to get the result of the operation.
         *
         * See up_device_glue_call_get_statistics_sync() for the synchronous, blocking version of this method.
         * @param arg_type Argument to pass with the method invocation.
         * @param cancellable A #GCancellable or %NULL.
         * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL.
         */
        call_get_statistics(
            arg_type: string,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes an operation started with up_device_glue_call_get_statistics().
         * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to up_device_glue_call_get_statistics().
         * @returns %TRUE if the call succeded, %FALSE if @error is set.
         */
        call_get_statistics_finish(res: Gio.AsyncResult): [boolean, GLib.Variant];
        /**
         * Synchronously invokes the <link linkend="gdbus-method-org-freedesktop-UPower-Device.GetStatistics">GetStatistics()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
         *
         * See up_device_glue_call_get_statistics() for the asynchronous version of this method.
         * @param arg_type Argument to pass with the method invocation.
         * @param cancellable A #GCancellable or %NULL.
         * @returns %TRUE if the call succeded, %FALSE if @error is set.
         */
        call_get_statistics_sync(arg_type: string, cancellable?: Gio.Cancellable | null): [boolean, GLib.Variant];
        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-freedesktop-UPower-Device.Refresh">Refresh()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the <link linkend="g-main-context-push-thread-default">thread-default main loop</link> of the thread you are calling this method from.
         * You can then call up_device_glue_call_refresh_finish() to get the result of the operation.
         *
         * See up_device_glue_call_refresh_sync() for the synchronous, blocking version of this method.
         * @param cancellable A #GCancellable or %NULL.
         * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL.
         */
        call_refresh(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): void;
        /**
         * Finishes an operation started with up_device_glue_call_refresh().
         * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to up_device_glue_call_refresh().
         * @returns %TRUE if the call succeded, %FALSE if @error is set.
         */
        call_refresh_finish(res: Gio.AsyncResult): boolean;
        /**
         * Synchronously invokes the <link linkend="gdbus-method-org-freedesktop-UPower-Device.Refresh">Refresh()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
         *
         * See up_device_glue_call_refresh() for the asynchronous version of this method.
         * @param cancellable A #GCancellable or %NULL.
         * @returns %TRUE if the call succeded, %FALSE if @error is set.
         */
        call_refresh_sync(cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-freedesktop-UPower-Device.GetHistory">GetHistory()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
         *
         * This method will free `invocation,` you cannot use it afterwards.
         * @param invocation A #GDBusMethodInvocation.
         * @param data Parameter to return.
         */
        complete_get_history(invocation: Gio.DBusMethodInvocation, data: GLib.Variant): void;
        /**
         * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-freedesktop-UPower-Device.GetStatistics">GetStatistics()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
         *
         * This method will free `invocation,` you cannot use it afterwards.
         * @param invocation A #GDBusMethodInvocation.
         * @param data Parameter to return.
         */
        complete_get_statistics(invocation: Gio.DBusMethodInvocation, data: GLib.Variant): void;
        /**
         * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-freedesktop-UPower-Device.Refresh">Refresh()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
         *
         * This method will free `invocation,` you cannot use it afterwards.
         * @param invocation A #GDBusMethodInvocation.
         */
        complete_refresh(invocation: Gio.DBusMethodInvocation): void;
        vfunc_handle_get_history(
            invocation: Gio.DBusMethodInvocation,
            arg_type: string,
            arg_timespan: number,
            arg_resolution: number,
        ): boolean;
        vfunc_handle_get_statistics(invocation: Gio.DBusMethodInvocation, arg_type: string): boolean;
        vfunc_handle_refresh(invocation: Gio.DBusMethodInvocation): boolean;
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
         * Will result in the "sensitive" property of the widget #GObject instance to be
         * updated with the same value of the "active" property of the action #GObject
         * instance.
         *
         * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well.
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. To remove the binding without affecting the
         * `source` and the `target` you can just call g_object_unref() on the returned
         * #GBinding instance.
         *
         * Removing the binding by calling g_object_unref() on it must only be done if
         * the binding, `source` and `target` are only used from a single thread and it
         * is clear that both `source` and `target` outlive the binding. Especially it
         * is not safe to rely on this if the binding, `source` or `target` can be
         * finalized from different threads. Keep another reference to the binding and
         * use g_binding_unbind() instead to be on the safe side.
         *
         * A #GObject can have multiple bindings.
         * @param source_property the property on @source to bind
         * @param target the target #GObject
         * @param target_property the property on @target to bind
         * @param flags flags to pass to #GBinding
         * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
         */
        bind_property(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags,
        ): GObject.Binding;
        /**
         * Complete version of g_object_bind_property().
         *
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target,` allowing you to set the transformation functions to be used by
         * the binding.
         *
         * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well. The `transform_from` function is only used in case
         * of bidirectional bindings, otherwise it will be ignored
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. This will release the reference that is
         * being held on the #GBinding instance; if you want to hold on to the
         * #GBinding instance, you will need to hold a reference to it.
         *
         * To remove the binding, call g_binding_unbind().
         *
         * A #GObject can have multiple bindings.
         *
         * The same `user_data` parameter will be used for both `transform_to`
         * and `transform_from` transformation functions; the `notify` function will
         * be called once, when the binding is removed. If you need different data
         * for each transformation function, please use
         * g_object_bind_property_with_closures() instead.
         * @param source_property the property on @source to bind
         * @param target the target #GObject
         * @param target_property the property on @target to bind
         * @param flags flags to pass to #GBinding
         * @param transform_to the transformation function     from the @source to the @target, or %NULL to use the default
         * @param transform_from the transformation function     from the @target to the @source, or %NULL to use the default
         * @param notify a function to call when disposing the binding, to free     resources used by the transformation functions, or %NULL if not required
         * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
         */
        bind_property_full(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags,
            transform_to?: GObject.BindingTransformFunc | null,
            transform_from?: GObject.BindingTransformFunc | null,
            notify?: GLib.DestroyNotify | null,
        ): GObject.Binding;
        // Conflicted with GObject.Object.bind_property_full
        bind_property_full(...args: never[]): any;
        /**
         * This function is intended for #GObject implementations to re-enforce
         * a [floating][floating-ref] object reference. Doing this is seldom
         * required: all #GInitiallyUnowneds are created with a floating reference
         * which usually just needs to be sunken by calling g_object_ref_sink().
         */
        force_floating(): void;
        /**
         * Increases the freeze count on `object`. If the freeze count is
         * non-zero, the emission of "notify" signals on `object` is
         * stopped. The signals are queued until the freeze count is decreased
         * to zero. Duplicate notifications are squashed so that at most one
         * #GObject::notify signal is emitted for each property modified while the
         * object is frozen.
         *
         * This is necessary for accessors that modify multiple properties to prevent
         * premature notification while the object is still being modified.
         */
        freeze_notify(): void;
        /**
         * Gets a named field from the objects table of associations (see g_object_set_data()).
         * @param key name of the key for that association
         * @returns the data if found,          or %NULL if no such data exists.
         */
        get_data(key: string): any | null;
        get_property(property_name: string): any;
        /**
         * This function gets back user data pointers stored via
         * g_object_set_qdata().
         * @param quark A #GQuark, naming the user data pointer
         * @returns The user data pointer set, or %NULL
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
         * Checks whether `object` has a [floating][floating-ref] reference.
         * @returns %TRUE if @object has a floating reference
         */
        is_floating(): boolean;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use g_object_notify_by_pspec()
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * g_object_freeze_notify(). In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when g_object_thaw_notify() is
         * called.
         * @param property_name the name of a property installed on the class of @object.
         */
        notify(property_name: string): void;
        /**
         * Emits a "notify" signal for the property specified by `pspec` on `object`.
         *
         * This function omits the property name lookup, hence it is faster than
         * g_object_notify().
         *
         * One way to avoid using g_object_notify() from within the
         * class that registered the properties, and using g_object_notify_by_pspec()
         * instead, is to store the GParamSpec used with
         * g_object_class_install_property() inside a static array, e.g.:
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
         * @param pspec the #GParamSpec of a property installed on the class of @object.
         */
        notify_by_pspec(pspec: GObject.ParamSpec): void;
        /**
         * Increases the reference count of `object`.
         *
         * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
         * of `object` will be propagated to the return type (using the GCC typeof()
         * extension), so any casting the caller needs to do on the return type must be
         * explicit.
         * @returns the same @object
         */
        ref(): GObject.Object;
        /**
         * Increase the reference count of `object,` and possibly remove the
         * [floating][floating-ref] reference, if `object` has a floating reference.
         *
         * In other words, if the object is floating, then this call "assumes
         * ownership" of the floating reference, converting it to a normal
         * reference by clearing the floating flag while leaving the reference
         * count unchanged.  If the object is not floating, then this call
         * adds a new normal reference increasing the reference count by one.
         *
         * Since GLib 2.56, the type of `object` will be propagated to the return type
         * under the same conditions as for g_object_ref().
         * @returns @object
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
         * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
         * This means a copy of `key` is kept permanently (even after `object` has been
         * finalized) — so it is recommended to only use a small, bounded set of values
         * for `key` in your program, to avoid the #GQuark storage growing unbounded.
         * @param key name of the key
         * @param data data to associate with that key
         */
        set_data(key: string, data?: any | null): void;
        set_property(property_name: string, value: any): void;
        /**
         * Remove a specified datum from the object's data associations,
         * without invoking the association's destroy handler.
         * @param key name of the key
         * @returns the data if found, or %NULL          if no such data exists.
         */
        steal_data(key: string): any | null;
        /**
         * This function gets back user data pointers stored via
         * g_object_set_qdata() and removes the `data` from object
         * without invoking its destroy() function (if any was
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
         * Using g_object_get_qdata() in the above example, instead of
         * g_object_steal_qdata() would have left the destroy function set,
         * and thus the partial string list would have been freed upon
         * g_object_set_qdata_full().
         * @param quark A #GQuark, naming the user data pointer
         * @returns The user data pointer set, or %NULL
         */
        steal_qdata(quark: GLib.Quark): any | null;
        /**
         * Reverts the effect of a previous call to
         * g_object_freeze_notify(). The freeze count is decreased on `object`
         * and when it reaches zero, queued "notify" signals are emitted.
         *
         * Duplicate notifications for each property are squashed so that at most one
         * #GObject::notify signal is emitted for each property, in the reverse order
         * in which they have been queued.
         *
         * It is an error to call this function when the freeze count is zero.
         */
        thaw_notify(): void;
        /**
         * Decreases the reference count of `object`. When its reference count
         * drops to 0, the object is finalized (i.e. its memory is freed).
         *
         * If the pointer to the #GObject may be reused in future (for example, if it is
         * an instance variable of another object), it is recommended to clear the
         * pointer to %NULL rather than retain a dangling pointer to a potentially
         * invalid #GObject instance. Use g_clear_object() for this.
         */
        unref(): void;
        /**
         * This function essentially limits the life time of the `closure` to
         * the life time of the object. That is, when the object is finalized,
         * the `closure` is invalidated by calling g_closure_invalidate() on
         * it, in order to prevent invocations of the closure with a finalized
         * (nonexisting) object. Also, g_object_ref() and g_object_unref() are
         * added as marshal guards to the `closure,` to ensure that an extra
         * reference count is held on `object` during invocation of the
         * `closure`.  Usually, this function will be called on closures that
         * use this `object` as closure data.
         * @param closure #GClosure to watch
         */
        watch_closure(closure: GObject.Closure): void;
        /**
         * the `constructed` function is called by g_object_new() as the
         *  final step of the object creation process.  At the point of the call, all
         *  construction properties have been set on the object.  The purpose of this
         *  call is to allow for object initialisation steps that can only be performed
         *  after construction properties have been set.  `constructed` implementors
         *  should chain up to the `constructed` call of their parent class to allow it
         *  to complete its initialisation.
         */
        vfunc_constructed(): void;
        /**
         * emits property change notification for a bunch
         *  of properties. Overriding `dispatch_properties_changed` should be rarely
         *  needed.
         * @param n_pspecs
         * @param pspecs
         */
        vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
        /**
         * the `dispose` function is supposed to drop all references to other
         *  objects, but keep the instance otherwise intact, so that client method
         *  invocations still work. It may be run multiple times (due to reference
         *  loops). Before returning, `dispose` should chain up to the `dispose` method
         *  of the parent class.
         */
        vfunc_dispose(): void;
        /**
         * instance finalization function, should finish the finalization of
         *  the instance begun in `dispose` and chain up to the `finalize` method of the
         *  parent class.
         */
        vfunc_finalize(): void;
        /**
         * the generic getter for all properties of this type. Should be
         *  overridden for every type with properties.
         * @param property_id
         * @param value
         * @param pspec
         */
        vfunc_get_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use g_object_notify_by_pspec()
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * g_object_freeze_notify(). In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when g_object_thaw_notify() is
         * called.
         * @param pspec
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
         */
        vfunc_set_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        disconnect(id: number): void;
        set(properties: { [key: string]: any }): void;
        block_signal_handler(id: number): any;
        unblock_signal_handler(id: number): any;
        stop_emission_by_name(detailedName: string): any;
    }

    module DeviceGlueSkeleton {
        // Constructor properties interface

        interface ConstructorProps
            extends Gio.DBusInterfaceSkeleton.ConstructorProps,
                Gio.DBusInterface.ConstructorProps,
                DeviceGlue.ConstructorProps {}
    }

    /**
     * The #UpDeviceGlueSkeleton structure contains only private data and should only be accessed using the provided API.
     */
    class DeviceGlueSkeleton extends Gio.DBusInterfaceSkeleton implements Gio.DBusInterface, DeviceGlue {
        static $gtype: GObject.GType<DeviceGlueSkeleton>;

        // Constructors

        constructor(properties?: Partial<DeviceGlueSkeleton.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): DeviceGlueSkeleton;

        // Inherited properties
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UPower-Device.Capacity">"Capacity"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        get capacity(): number;
        set capacity(val: number);
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UPower-Device.Energy">"Energy"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        get energy(): number;
        set energy(val: number);
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UPower-Device.EnergyEmpty">"EnergyEmpty"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        get energy_empty(): number;
        set energy_empty(val: number);
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UPower-Device.EnergyEmpty">"EnergyEmpty"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        get energyEmpty(): number;
        set energyEmpty(val: number);
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UPower-Device.EnergyFull">"EnergyFull"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        get energy_full(): number;
        set energy_full(val: number);
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UPower-Device.EnergyFull">"EnergyFull"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        get energyFull(): number;
        set energyFull(val: number);
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UPower-Device.EnergyFullDesign">"EnergyFullDesign"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        get energy_full_design(): number;
        set energy_full_design(val: number);
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UPower-Device.EnergyFullDesign">"EnergyFullDesign"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        get energyFullDesign(): number;
        set energyFullDesign(val: number);
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UPower-Device.EnergyRate">"EnergyRate"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        get energy_rate(): number;
        set energy_rate(val: number);
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UPower-Device.EnergyRate">"EnergyRate"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        get energyRate(): number;
        set energyRate(val: number);
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UPower-Device.HasHistory">"HasHistory"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        get has_history(): boolean;
        set has_history(val: boolean);
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UPower-Device.HasHistory">"HasHistory"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        get hasHistory(): boolean;
        set hasHistory(val: boolean);
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UPower-Device.HasStatistics">"HasStatistics"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        get has_statistics(): boolean;
        set has_statistics(val: boolean);
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UPower-Device.HasStatistics">"HasStatistics"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        get hasStatistics(): boolean;
        set hasStatistics(val: boolean);
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UPower-Device.IconName">"IconName"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        get icon_name(): string;
        set icon_name(val: string);
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UPower-Device.IconName">"IconName"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        get iconName(): string;
        set iconName(val: string);
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UPower-Device.IsPresent">"IsPresent"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        get is_present(): boolean;
        set is_present(val: boolean);
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UPower-Device.IsPresent">"IsPresent"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        get isPresent(): boolean;
        set isPresent(val: boolean);
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UPower-Device.IsRechargeable">"IsRechargeable"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        get is_rechargeable(): boolean;
        set is_rechargeable(val: boolean);
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UPower-Device.IsRechargeable">"IsRechargeable"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        get isRechargeable(): boolean;
        set isRechargeable(val: boolean);
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UPower-Device.Luminosity">"Luminosity"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        get luminosity(): number;
        set luminosity(val: number);
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UPower-Device.Model">"Model"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        get model(): string;
        set model(val: string);
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UPower-Device.NativePath">"NativePath"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        get native_path(): string;
        set native_path(val: string);
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UPower-Device.NativePath">"NativePath"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        get nativePath(): string;
        set nativePath(val: string);
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UPower-Device.Online">"Online"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        get online(): boolean;
        set online(val: boolean);
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UPower-Device.Percentage">"Percentage"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        get percentage(): number;
        set percentage(val: number);
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UPower-Device.PowerSupply">"PowerSupply"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        get power_supply(): boolean;
        set power_supply(val: boolean);
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UPower-Device.PowerSupply">"PowerSupply"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        get powerSupply(): boolean;
        set powerSupply(val: boolean);
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UPower-Device.Serial">"Serial"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        get serial(): string;
        set serial(val: string);
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UPower-Device.State">"State"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        get state(): number;
        set state(val: number);
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UPower-Device.Technology">"Technology"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        get technology(): number;
        set technology(val: number);
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UPower-Device.Temperature">"Temperature"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        get temperature(): number;
        set temperature(val: number);
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UPower-Device.TimeToEmpty">"TimeToEmpty"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        get time_to_empty(): number;
        set time_to_empty(val: number);
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UPower-Device.TimeToEmpty">"TimeToEmpty"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        get timeToEmpty(): number;
        set timeToEmpty(val: number);
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UPower-Device.TimeToFull">"TimeToFull"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        get time_to_full(): number;
        set time_to_full(val: number);
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UPower-Device.TimeToFull">"TimeToFull"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        get timeToFull(): number;
        set timeToFull(val: number);
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UPower-Device.Type">"Type"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        get type(): number;
        set type(val: number);
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UPower-Device.UpdateTime">"UpdateTime"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        get update_time(): number;
        set update_time(val: number);
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UPower-Device.UpdateTime">"UpdateTime"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        get updateTime(): number;
        set updateTime(val: number);
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UPower-Device.Vendor">"Vendor"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        get vendor(): string;
        set vendor(val: string);
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UPower-Device.Voltage">"Voltage"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        get voltage(): number;
        set voltage(val: number);
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UPower-Device.WarningLevel">"WarningLevel"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        get warning_level(): number;
        set warning_level(val: number);
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UPower-Device.WarningLevel">"WarningLevel"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        get warningLevel(): number;
        set warningLevel(val: number);

        // Inherited methods
        /**
         * Gets the #GDBusObject that `interface_` belongs to, if any.
         * @returns A #GDBusObject or %NULL. The returned reference should be freed with g_object_unref().
         */
        get_object(): Gio.DBusObject | null;
        /**
         * Gets D-Bus introspection information for the D-Bus interface
         * implemented by `interface_`.
         * @returns A #GDBusInterfaceInfo. Do not free.
         */
        get_info(): Gio.DBusInterfaceInfo;
        /**
         * Sets the #GDBusObject for `interface_` to `object`.
         *
         * Note that `interface_` will hold a weak reference to `object`.
         * @param object A #GDBusObject or %NULL.
         */
        set_object(object?: Gio.DBusObject | null): void;
        /**
         * Gets the #GDBusObject that `interface_` belongs to, if any.
         */
        vfunc_dup_object(): Gio.DBusObject | null;
        /**
         * Gets D-Bus introspection information for the D-Bus interface
         * implemented by `interface_`.
         */
        vfunc_get_info(): Gio.DBusInterfaceInfo;
        /**
         * Sets the #GDBusObject for `interface_` to `object`.
         *
         * Note that `interface_` will hold a weak reference to `object`.
         * @param object A #GDBusObject or %NULL.
         */
        vfunc_set_object(object?: Gio.DBusObject | null): void;
        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-freedesktop-UPower-Device.GetHistory">GetHistory()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the <link linkend="g-main-context-push-thread-default">thread-default main loop</link> of the thread you are calling this method from.
         * You can then call up_device_glue_call_get_history_finish() to get the result of the operation.
         *
         * See up_device_glue_call_get_history_sync() for the synchronous, blocking version of this method.
         * @param arg_type Argument to pass with the method invocation.
         * @param arg_timespan Argument to pass with the method invocation.
         * @param arg_resolution Argument to pass with the method invocation.
         * @param cancellable A #GCancellable or %NULL.
         * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL.
         */
        call_get_history(
            arg_type: string,
            arg_timespan: number,
            arg_resolution: number,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes an operation started with up_device_glue_call_get_history().
         * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to up_device_glue_call_get_history().
         * @returns %TRUE if the call succeded, %FALSE if @error is set.
         */
        call_get_history_finish(res: Gio.AsyncResult): [boolean, GLib.Variant];
        /**
         * Synchronously invokes the <link linkend="gdbus-method-org-freedesktop-UPower-Device.GetHistory">GetHistory()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
         *
         * See up_device_glue_call_get_history() for the asynchronous version of this method.
         * @param arg_type Argument to pass with the method invocation.
         * @param arg_timespan Argument to pass with the method invocation.
         * @param arg_resolution Argument to pass with the method invocation.
         * @param cancellable A #GCancellable or %NULL.
         * @returns %TRUE if the call succeded, %FALSE if @error is set.
         */
        call_get_history_sync(
            arg_type: string,
            arg_timespan: number,
            arg_resolution: number,
            cancellable?: Gio.Cancellable | null,
        ): [boolean, GLib.Variant];
        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-freedesktop-UPower-Device.GetStatistics">GetStatistics()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the <link linkend="g-main-context-push-thread-default">thread-default main loop</link> of the thread you are calling this method from.
         * You can then call up_device_glue_call_get_statistics_finish() to get the result of the operation.
         *
         * See up_device_glue_call_get_statistics_sync() for the synchronous, blocking version of this method.
         * @param arg_type Argument to pass with the method invocation.
         * @param cancellable A #GCancellable or %NULL.
         * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL.
         */
        call_get_statistics(
            arg_type: string,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes an operation started with up_device_glue_call_get_statistics().
         * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to up_device_glue_call_get_statistics().
         * @returns %TRUE if the call succeded, %FALSE if @error is set.
         */
        call_get_statistics_finish(res: Gio.AsyncResult): [boolean, GLib.Variant];
        /**
         * Synchronously invokes the <link linkend="gdbus-method-org-freedesktop-UPower-Device.GetStatistics">GetStatistics()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
         *
         * See up_device_glue_call_get_statistics() for the asynchronous version of this method.
         * @param arg_type Argument to pass with the method invocation.
         * @param cancellable A #GCancellable or %NULL.
         * @returns %TRUE if the call succeded, %FALSE if @error is set.
         */
        call_get_statistics_sync(arg_type: string, cancellable?: Gio.Cancellable | null): [boolean, GLib.Variant];
        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-freedesktop-UPower-Device.Refresh">Refresh()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the <link linkend="g-main-context-push-thread-default">thread-default main loop</link> of the thread you are calling this method from.
         * You can then call up_device_glue_call_refresh_finish() to get the result of the operation.
         *
         * See up_device_glue_call_refresh_sync() for the synchronous, blocking version of this method.
         * @param cancellable A #GCancellable or %NULL.
         * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL.
         */
        call_refresh(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): void;
        /**
         * Finishes an operation started with up_device_glue_call_refresh().
         * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to up_device_glue_call_refresh().
         * @returns %TRUE if the call succeded, %FALSE if @error is set.
         */
        call_refresh_finish(res: Gio.AsyncResult): boolean;
        /**
         * Synchronously invokes the <link linkend="gdbus-method-org-freedesktop-UPower-Device.Refresh">Refresh()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
         *
         * See up_device_glue_call_refresh() for the asynchronous version of this method.
         * @param cancellable A #GCancellable or %NULL.
         * @returns %TRUE if the call succeded, %FALSE if @error is set.
         */
        call_refresh_sync(cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-freedesktop-UPower-Device.GetHistory">GetHistory()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
         *
         * This method will free `invocation,` you cannot use it afterwards.
         * @param invocation A #GDBusMethodInvocation.
         * @param data Parameter to return.
         */
        complete_get_history(invocation: Gio.DBusMethodInvocation, data: GLib.Variant): void;
        /**
         * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-freedesktop-UPower-Device.GetStatistics">GetStatistics()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
         *
         * This method will free `invocation,` you cannot use it afterwards.
         * @param invocation A #GDBusMethodInvocation.
         * @param data Parameter to return.
         */
        complete_get_statistics(invocation: Gio.DBusMethodInvocation, data: GLib.Variant): void;
        /**
         * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-freedesktop-UPower-Device.Refresh">Refresh()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
         *
         * This method will free `invocation,` you cannot use it afterwards.
         * @param invocation A #GDBusMethodInvocation.
         */
        complete_refresh(invocation: Gio.DBusMethodInvocation): void;
        vfunc_handle_get_history(
            invocation: Gio.DBusMethodInvocation,
            arg_type: string,
            arg_timespan: number,
            arg_resolution: number,
        ): boolean;
        vfunc_handle_get_statistics(invocation: Gio.DBusMethodInvocation, arg_type: string): boolean;
        vfunc_handle_refresh(invocation: Gio.DBusMethodInvocation): boolean;
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
         * Will result in the "sensitive" property of the widget #GObject instance to be
         * updated with the same value of the "active" property of the action #GObject
         * instance.
         *
         * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well.
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. To remove the binding without affecting the
         * `source` and the `target` you can just call g_object_unref() on the returned
         * #GBinding instance.
         *
         * Removing the binding by calling g_object_unref() on it must only be done if
         * the binding, `source` and `target` are only used from a single thread and it
         * is clear that both `source` and `target` outlive the binding. Especially it
         * is not safe to rely on this if the binding, `source` or `target` can be
         * finalized from different threads. Keep another reference to the binding and
         * use g_binding_unbind() instead to be on the safe side.
         *
         * A #GObject can have multiple bindings.
         * @param source_property the property on @source to bind
         * @param target the target #GObject
         * @param target_property the property on @target to bind
         * @param flags flags to pass to #GBinding
         * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
         */
        bind_property(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags,
        ): GObject.Binding;
        /**
         * Complete version of g_object_bind_property().
         *
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target,` allowing you to set the transformation functions to be used by
         * the binding.
         *
         * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well. The `transform_from` function is only used in case
         * of bidirectional bindings, otherwise it will be ignored
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. This will release the reference that is
         * being held on the #GBinding instance; if you want to hold on to the
         * #GBinding instance, you will need to hold a reference to it.
         *
         * To remove the binding, call g_binding_unbind().
         *
         * A #GObject can have multiple bindings.
         *
         * The same `user_data` parameter will be used for both `transform_to`
         * and `transform_from` transformation functions; the `notify` function will
         * be called once, when the binding is removed. If you need different data
         * for each transformation function, please use
         * g_object_bind_property_with_closures() instead.
         * @param source_property the property on @source to bind
         * @param target the target #GObject
         * @param target_property the property on @target to bind
         * @param flags flags to pass to #GBinding
         * @param transform_to the transformation function     from the @source to the @target, or %NULL to use the default
         * @param transform_from the transformation function     from the @target to the @source, or %NULL to use the default
         * @param notify a function to call when disposing the binding, to free     resources used by the transformation functions, or %NULL if not required
         * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
         */
        bind_property_full(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags,
            transform_to?: GObject.BindingTransformFunc | null,
            transform_from?: GObject.BindingTransformFunc | null,
            notify?: GLib.DestroyNotify | null,
        ): GObject.Binding;
        // Conflicted with GObject.Object.bind_property_full
        bind_property_full(...args: never[]): any;
        /**
         * This function is intended for #GObject implementations to re-enforce
         * a [floating][floating-ref] object reference. Doing this is seldom
         * required: all #GInitiallyUnowneds are created with a floating reference
         * which usually just needs to be sunken by calling g_object_ref_sink().
         */
        force_floating(): void;
        /**
         * Increases the freeze count on `object`. If the freeze count is
         * non-zero, the emission of "notify" signals on `object` is
         * stopped. The signals are queued until the freeze count is decreased
         * to zero. Duplicate notifications are squashed so that at most one
         * #GObject::notify signal is emitted for each property modified while the
         * object is frozen.
         *
         * This is necessary for accessors that modify multiple properties to prevent
         * premature notification while the object is still being modified.
         */
        freeze_notify(): void;
        /**
         * Gets a named field from the objects table of associations (see g_object_set_data()).
         * @param key name of the key for that association
         * @returns the data if found,          or %NULL if no such data exists.
         */
        get_data(key: string): any | null;
        get_property(property_name: string): any;
        /**
         * This function gets back user data pointers stored via
         * g_object_set_qdata().
         * @param quark A #GQuark, naming the user data pointer
         * @returns The user data pointer set, or %NULL
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
         * Checks whether `object` has a [floating][floating-ref] reference.
         * @returns %TRUE if @object has a floating reference
         */
        is_floating(): boolean;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use g_object_notify_by_pspec()
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * g_object_freeze_notify(). In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when g_object_thaw_notify() is
         * called.
         * @param property_name the name of a property installed on the class of @object.
         */
        notify(property_name: string): void;
        /**
         * Emits a "notify" signal for the property specified by `pspec` on `object`.
         *
         * This function omits the property name lookup, hence it is faster than
         * g_object_notify().
         *
         * One way to avoid using g_object_notify() from within the
         * class that registered the properties, and using g_object_notify_by_pspec()
         * instead, is to store the GParamSpec used with
         * g_object_class_install_property() inside a static array, e.g.:
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
         * @param pspec the #GParamSpec of a property installed on the class of @object.
         */
        notify_by_pspec(pspec: GObject.ParamSpec): void;
        /**
         * Increases the reference count of `object`.
         *
         * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
         * of `object` will be propagated to the return type (using the GCC typeof()
         * extension), so any casting the caller needs to do on the return type must be
         * explicit.
         * @returns the same @object
         */
        ref(): GObject.Object;
        /**
         * Increase the reference count of `object,` and possibly remove the
         * [floating][floating-ref] reference, if `object` has a floating reference.
         *
         * In other words, if the object is floating, then this call "assumes
         * ownership" of the floating reference, converting it to a normal
         * reference by clearing the floating flag while leaving the reference
         * count unchanged.  If the object is not floating, then this call
         * adds a new normal reference increasing the reference count by one.
         *
         * Since GLib 2.56, the type of `object` will be propagated to the return type
         * under the same conditions as for g_object_ref().
         * @returns @object
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
         * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
         * This means a copy of `key` is kept permanently (even after `object` has been
         * finalized) — so it is recommended to only use a small, bounded set of values
         * for `key` in your program, to avoid the #GQuark storage growing unbounded.
         * @param key name of the key
         * @param data data to associate with that key
         */
        set_data(key: string, data?: any | null): void;
        set_property(property_name: string, value: any): void;
        /**
         * Remove a specified datum from the object's data associations,
         * without invoking the association's destroy handler.
         * @param key name of the key
         * @returns the data if found, or %NULL          if no such data exists.
         */
        steal_data(key: string): any | null;
        /**
         * This function gets back user data pointers stored via
         * g_object_set_qdata() and removes the `data` from object
         * without invoking its destroy() function (if any was
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
         * Using g_object_get_qdata() in the above example, instead of
         * g_object_steal_qdata() would have left the destroy function set,
         * and thus the partial string list would have been freed upon
         * g_object_set_qdata_full().
         * @param quark A #GQuark, naming the user data pointer
         * @returns The user data pointer set, or %NULL
         */
        steal_qdata(quark: GLib.Quark): any | null;
        /**
         * Reverts the effect of a previous call to
         * g_object_freeze_notify(). The freeze count is decreased on `object`
         * and when it reaches zero, queued "notify" signals are emitted.
         *
         * Duplicate notifications for each property are squashed so that at most one
         * #GObject::notify signal is emitted for each property, in the reverse order
         * in which they have been queued.
         *
         * It is an error to call this function when the freeze count is zero.
         */
        thaw_notify(): void;
        /**
         * Decreases the reference count of `object`. When its reference count
         * drops to 0, the object is finalized (i.e. its memory is freed).
         *
         * If the pointer to the #GObject may be reused in future (for example, if it is
         * an instance variable of another object), it is recommended to clear the
         * pointer to %NULL rather than retain a dangling pointer to a potentially
         * invalid #GObject instance. Use g_clear_object() for this.
         */
        unref(): void;
        /**
         * This function essentially limits the life time of the `closure` to
         * the life time of the object. That is, when the object is finalized,
         * the `closure` is invalidated by calling g_closure_invalidate() on
         * it, in order to prevent invocations of the closure with a finalized
         * (nonexisting) object. Also, g_object_ref() and g_object_unref() are
         * added as marshal guards to the `closure,` to ensure that an extra
         * reference count is held on `object` during invocation of the
         * `closure`.  Usually, this function will be called on closures that
         * use this `object` as closure data.
         * @param closure #GClosure to watch
         */
        watch_closure(closure: GObject.Closure): void;
        /**
         * the `constructed` function is called by g_object_new() as the
         *  final step of the object creation process.  At the point of the call, all
         *  construction properties have been set on the object.  The purpose of this
         *  call is to allow for object initialisation steps that can only be performed
         *  after construction properties have been set.  `constructed` implementors
         *  should chain up to the `constructed` call of their parent class to allow it
         *  to complete its initialisation.
         */
        vfunc_constructed(): void;
        /**
         * emits property change notification for a bunch
         *  of properties. Overriding `dispatch_properties_changed` should be rarely
         *  needed.
         * @param n_pspecs
         * @param pspecs
         */
        vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
        /**
         * the `dispose` function is supposed to drop all references to other
         *  objects, but keep the instance otherwise intact, so that client method
         *  invocations still work. It may be run multiple times (due to reference
         *  loops). Before returning, `dispose` should chain up to the `dispose` method
         *  of the parent class.
         */
        vfunc_dispose(): void;
        /**
         * instance finalization function, should finish the finalization of
         *  the instance begun in `dispose` and chain up to the `finalize` method of the
         *  parent class.
         */
        vfunc_finalize(): void;
        /**
         * the generic getter for all properties of this type. Should be
         *  overridden for every type with properties.
         * @param property_id
         * @param value
         * @param pspec
         */
        vfunc_get_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use g_object_notify_by_pspec()
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * g_object_freeze_notify(). In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when g_object_thaw_notify() is
         * called.
         * @param pspec
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
         */
        vfunc_set_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        disconnect(id: number): void;
        set(properties: { [key: string]: any }): void;
        block_signal_handler(id: number): any;
        unblock_signal_handler(id: number): any;
        stop_emission_by_name(detailedName: string): any;
    }

    module HistoryItem {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            state: number;
            time: number;
            value: number;
        }
    }

    class HistoryItem extends GObject.Object {
        static $gtype: GObject.GType<HistoryItem>;

        // Properties

        get state(): number;
        set state(val: number);
        get time(): number;
        set time(val: number);
        get value(): number;
        set value(val: number);

        // Constructors

        constructor(properties?: Partial<HistoryItem.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): HistoryItem;

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

    module StatsItem {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            accuracy: number;
            value: number;
        }
    }

    class StatsItem extends GObject.Object {
        static $gtype: GObject.GType<StatsItem>;

        // Properties

        get accuracy(): number;
        set accuracy(val: number);
        get value(): number;
        set value(val: number);

        // Constructors

        constructor(properties?: Partial<StatsItem.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): StatsItem;

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

    module WakeupItem {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            cmdline: string;
            details: string;
            id: number;
            is_userspace: boolean;
            isUserspace: boolean;
            old: number;
            value: number;
        }
    }

    class WakeupItem extends GObject.Object {
        static $gtype: GObject.GType<WakeupItem>;

        // Properties

        get cmdline(): string;
        set cmdline(val: string);
        get details(): string;
        set details(val: string);
        get id(): number;
        set id(val: number);
        get is_userspace(): boolean;
        set is_userspace(val: boolean);
        get isUserspace(): boolean;
        set isUserspace(val: boolean);
        get old(): number;
        set old(val: number);
        get value(): number;
        set value(val: number);

        // Constructors

        constructor(properties?: Partial<WakeupItem.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): WakeupItem;

        // Methods

        /**
         * Gets the item cmdline.
         * @returns the value
         */
        get_cmdline(): string;
        /**
         * Gets the item details.
         * @returns the value
         */
        get_details(): string;
        /**
         * Gets the item id.
         * @returns the value
         */
        get_id(): number;
        /**
         * Gets if the item is userspace.
         * @returns the value
         */
        get_is_userspace(): boolean;
        /**
         * Gets the item old.
         * @returns the value
         */
        get_old(): number;
        /**
         * Gets the item value.
         * @returns the value
         */
        get_value(): number;
        /**
         * Sets the item cmdline.
         * @param cmdline the new value
         */
        set_cmdline(cmdline: string): void;
        /**
         * Sets the item details.
         * @param details the new value
         */
        set_details(details: string): void;
        /**
         * Sets the item id.
         * @param id the new value
         */
        set_id(id: number): void;
        /**
         * Sets if the item is userspace.
         * @param is_userspace the new value
         */
        set_is_userspace(is_userspace: boolean): void;
        /**
         * Sets the item old.
         * @param old the new value
         */
        set_old(old: number): void;
        /**
         * Sets the item value.
         * @param value the new value
         */
        set_value(value: number): void;
    }

    module Wakeups {
        // Signal callback interfaces

        interface DataChanged {
            (): void;
        }

        interface TotalChanged {
            (object: number): void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    class Wakeups extends GObject.Object {
        static $gtype: GObject.GType<Wakeups>;

        // Constructors

        constructor(properties?: Partial<Wakeups.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): Wakeups;

        // Signals

        connect(id: string, callback: (...args: any[]) => any): number;
        connect_after(id: string, callback: (...args: any[]) => any): number;
        emit(id: string, ...args: any[]): void;
        connect(signal: 'data-changed', callback: (_source: this) => void): number;
        connect_after(signal: 'data-changed', callback: (_source: this) => void): number;
        emit(signal: 'data-changed'): void;
        connect(signal: 'total-changed', callback: (_source: this, object: number) => void): number;
        connect_after(signal: 'total-changed', callback: (_source: this, object: number) => void): number;
        emit(signal: 'total-changed', object: number): void;

        // Virtual methods

        vfunc_data_changed(): void;
        vfunc_total_changed(value: number): void;

        // Methods

        /**
         * Gets the wakeups data from the daemon.
         * @param cancellable a #GCancellable or %NULL
         * @returns an array of %UpWakeupItem's
         */
        get_data_sync(cancellable?: Gio.Cancellable | null): WakeupItem[];
        /**
         * Returns if the daemon supports getting the wakeup data.
         * @returns %TRUE if supported
         */
        get_has_capability(): boolean;
        /**
         * Gets properties from the daemon about wakeup data.
         * @param cancellable a #GCancellable or %NULL
         * @returns %TRUE if supported
         */
        get_properties_sync(cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Gets the the total number of wakeups per second from the daemon.
         * @param cancellable a #GCancellable or %NULL
         * @returns number of wakeups per second.
         */
        get_total_sync(cancellable?: Gio.Cancellable | null): number;
    }

    module WakeupsGlueProxy {
        // Constructor properties interface

        interface ConstructorProps
            extends Gio.DBusProxy.ConstructorProps,
                Gio.AsyncInitable.ConstructorProps,
                Gio.DBusInterface.ConstructorProps,
                Gio.Initable.ConstructorProps,
                WakeupsGlue.ConstructorProps {}
    }

    /**
     * The #UpWakeupsGlueProxy structure contains only private data and should only be accessed using the provided API.
     */
    class WakeupsGlueProxy
        extends Gio.DBusProxy
        implements Gio.AsyncInitable<WakeupsGlueProxy>, Gio.DBusInterface, Gio.Initable, WakeupsGlue
    {
        static $gtype: GObject.GType<WakeupsGlueProxy>;

        // Constructors

        constructor(properties?: Partial<WakeupsGlueProxy.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static new_finish(res: Gio.AsyncResult): WakeupsGlueProxy;
        // Conflicted with Gio.AsyncInitable.new_finish

        static new_finish(...args: never[]): any;

        static new_for_bus_finish(res: Gio.AsyncResult): WakeupsGlueProxy;

        static new_for_bus_sync(
            bus_type: Gio.BusType,
            flags: Gio.DBusProxyFlags,
            name: string,
            object_path: string,
            cancellable?: Gio.Cancellable | null,
        ): WakeupsGlueProxy;
        // Conflicted with Gio.DBusProxy.new_for_bus_sync

        static new_for_bus_sync(...args: never[]): any;

        static new_sync(
            connection: Gio.DBusConnection,
            flags: Gio.DBusProxyFlags,
            name: string | null,
            object_path: string,
            cancellable?: Gio.Cancellable | null,
        ): WakeupsGlueProxy;
        // Conflicted with Gio.DBusProxy.new_sync

        static new_sync(...args: never[]): any;

        // Static methods

        /**
         * Asynchronously creates a proxy for the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-UPower-Wakeups.top_of_page">org.freedesktop.UPower.Wakeups</link>. See g_dbus_proxy_new() for more details.
         *
         * When the operation is finished, `callback` will be invoked in the <link linkend="g-main-context-push-thread-default">thread-default main loop</link> of the thread you are calling this method from.
         * You can then call up_wakeups_glue_proxy_new_finish() to get the result of the operation.
         *
         * See up_wakeups_glue_proxy_new_sync() for the synchronous, blocking version of this constructor.
         * @param connection A #GDBusConnection.
         * @param flags Flags from the #GDBusProxyFlags enumeration.
         * @param name A bus name (well-known or unique) or %NULL if @connection is not a message bus connection.
         * @param object_path An object path.
         * @param cancellable A #GCancellable or %NULL.
         * @param callback A #GAsyncReadyCallback to call when the request is satisfied.
         */
        static ['new'](
            connection: Gio.DBusConnection,
            flags: Gio.DBusProxyFlags,
            name: string | null,
            object_path: string,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<WakeupsGlueProxy> | null,
        ): void;
        // Conflicted with Gio.DBusProxy.new
        static ['new'](...args: never[]): any;
        /**
         * Like up_wakeups_glue_proxy_new() but takes a #GBusType instead of a #GDBusConnection.
         *
         * When the operation is finished, `callback` will be invoked in the <link linkend="g-main-context-push-thread-default">thread-default main loop</link> of the thread you are calling this method from.
         * You can then call up_wakeups_glue_proxy_new_for_bus_finish() to get the result of the operation.
         *
         * See up_wakeups_glue_proxy_new_for_bus_sync() for the synchronous, blocking version of this constructor.
         * @param bus_type A #GBusType.
         * @param flags Flags from the #GDBusProxyFlags enumeration.
         * @param name A bus name (well-known or unique).
         * @param object_path An object path.
         * @param cancellable A #GCancellable or %NULL.
         * @param callback A #GAsyncReadyCallback to call when the request is satisfied.
         */
        static new_for_bus(
            bus_type: Gio.BusType,
            flags: Gio.DBusProxyFlags,
            name: string,
            object_path: string,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<WakeupsGlueProxy> | null,
        ): void;
        // Conflicted with Gio.DBusProxy.new_for_bus
        static new_for_bus(...args: never[]): any;

        // Inherited properties
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UPower-Wakeups.HasCapability">"HasCapability"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        get has_capability(): boolean;
        set has_capability(val: boolean);
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UPower-Wakeups.HasCapability">"HasCapability"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        get hasCapability(): boolean;
        set hasCapability(val: boolean);

        // Inherited methods
        /**
         * Starts asynchronous initialization of the object implementing the
         * interface. This must be done before any real use of the object after
         * initial construction. If the object also implements #GInitable you can
         * optionally call g_initable_init() instead.
         *
         * This method is intended for language bindings. If writing in C,
         * g_async_initable_new_async() should typically be used instead.
         *
         * When the initialization is finished, `callback` will be called. You can
         * then call g_async_initable_init_finish() to get the result of the
         * initialization.
         *
         * Implementations may also support cancellation. If `cancellable` is not
         * %NULL, then initialization can be cancelled by triggering the cancellable
         * object from another thread. If the operation was cancelled, the error
         * %G_IO_ERROR_CANCELLED will be returned. If `cancellable` is not %NULL, and
         * the object doesn't support cancellable initialization, the error
         * %G_IO_ERROR_NOT_SUPPORTED will be returned.
         *
         * As with #GInitable, if the object is not initialized, or initialization
         * returns with an error, then all operations on the object except
         * g_object_ref() and g_object_unref() are considered to be invalid, and
         * have undefined behaviour. They will often fail with g_critical() or
         * g_warning(), but this must not be relied on.
         *
         * Callers should not assume that a class which implements #GAsyncInitable can
         * be initialized multiple times; for more information, see g_initable_init().
         * If a class explicitly supports being initialized multiple times,
         * implementation requires yielding all subsequent calls to init_async() on the
         * results of the first call.
         *
         * For classes that also support the #GInitable interface, the default
         * implementation of this method will run the g_initable_init() function
         * in a thread, so if you want to support asynchronous initialization via
         * threads, just implement the #GAsyncInitable interface without overriding
         * any interface methods.
         * @param io_priority the [I/O priority][io-priority] of the operation
         * @param cancellable optional #GCancellable object, %NULL to ignore.
         * @param callback a #GAsyncReadyCallback to call when the request is satisfied
         */
        init_async(
            io_priority: number,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes asynchronous initialization and returns the result.
         * See g_async_initable_init_async().
         * @param res a #GAsyncResult.
         * @returns %TRUE if successful. If an error has occurred, this function will return %FALSE and set @error appropriately if present.
         */
        init_finish(res: Gio.AsyncResult): boolean;
        /**
         * Finishes the async construction for the various g_async_initable_new
         * calls, returning the created object or %NULL on error.
         * @param res the #GAsyncResult from the callback
         * @returns a newly created #GObject,      or %NULL on error. Free with g_object_unref().
         */
        new_finish(res: Gio.AsyncResult): WakeupsGlueProxy;
        // Conflicted with Gio.DBusProxy.new_finish
        new_finish(...args: never[]): any;
        /**
         * Starts asynchronous initialization of the object implementing the
         * interface. This must be done before any real use of the object after
         * initial construction. If the object also implements #GInitable you can
         * optionally call g_initable_init() instead.
         *
         * This method is intended for language bindings. If writing in C,
         * g_async_initable_new_async() should typically be used instead.
         *
         * When the initialization is finished, `callback` will be called. You can
         * then call g_async_initable_init_finish() to get the result of the
         * initialization.
         *
         * Implementations may also support cancellation. If `cancellable` is not
         * %NULL, then initialization can be cancelled by triggering the cancellable
         * object from another thread. If the operation was cancelled, the error
         * %G_IO_ERROR_CANCELLED will be returned. If `cancellable` is not %NULL, and
         * the object doesn't support cancellable initialization, the error
         * %G_IO_ERROR_NOT_SUPPORTED will be returned.
         *
         * As with #GInitable, if the object is not initialized, or initialization
         * returns with an error, then all operations on the object except
         * g_object_ref() and g_object_unref() are considered to be invalid, and
         * have undefined behaviour. They will often fail with g_critical() or
         * g_warning(), but this must not be relied on.
         *
         * Callers should not assume that a class which implements #GAsyncInitable can
         * be initialized multiple times; for more information, see g_initable_init().
         * If a class explicitly supports being initialized multiple times,
         * implementation requires yielding all subsequent calls to init_async() on the
         * results of the first call.
         *
         * For classes that also support the #GInitable interface, the default
         * implementation of this method will run the g_initable_init() function
         * in a thread, so if you want to support asynchronous initialization via
         * threads, just implement the #GAsyncInitable interface without overriding
         * any interface methods.
         * @param io_priority the [I/O priority][io-priority] of the operation
         * @param cancellable optional #GCancellable object, %NULL to ignore.
         * @param callback a #GAsyncReadyCallback to call when the request is satisfied
         */
        vfunc_init_async(
            io_priority: number,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes asynchronous initialization and returns the result.
         * See g_async_initable_init_async().
         * @param res a #GAsyncResult.
         */
        vfunc_init_finish(res: Gio.AsyncResult): boolean;
        /**
         * Gets the #GDBusObject that `interface_` belongs to, if any.
         * @returns A #GDBusObject or %NULL. The returned reference should be freed with g_object_unref().
         */
        get_object(): Gio.DBusObject | null;
        /**
         * Gets D-Bus introspection information for the D-Bus interface
         * implemented by `interface_`.
         * @returns A #GDBusInterfaceInfo. Do not free.
         */
        get_info(): Gio.DBusInterfaceInfo;
        /**
         * Sets the #GDBusObject for `interface_` to `object`.
         *
         * Note that `interface_` will hold a weak reference to `object`.
         * @param object A #GDBusObject or %NULL.
         */
        set_object(object?: Gio.DBusObject | null): void;
        /**
         * Gets the #GDBusObject that `interface_` belongs to, if any.
         */
        vfunc_dup_object(): Gio.DBusObject | null;
        /**
         * Gets D-Bus introspection information for the D-Bus interface
         * implemented by `interface_`.
         */
        vfunc_get_info(): Gio.DBusInterfaceInfo;
        /**
         * Sets the #GDBusObject for `interface_` to `object`.
         *
         * Note that `interface_` will hold a weak reference to `object`.
         * @param object A #GDBusObject or %NULL.
         */
        vfunc_set_object(object?: Gio.DBusObject | null): void;
        /**
         * Initializes the object implementing the interface.
         *
         * This method is intended for language bindings. If writing in C,
         * g_initable_new() should typically be used instead.
         *
         * The object must be initialized before any real use after initial
         * construction, either with this function or g_async_initable_init_async().
         *
         * Implementations may also support cancellation. If `cancellable` is not %NULL,
         * then initialization can be cancelled by triggering the cancellable object
         * from another thread. If the operation was cancelled, the error
         * %G_IO_ERROR_CANCELLED will be returned. If `cancellable` is not %NULL and
         * the object doesn't support cancellable initialization the error
         * %G_IO_ERROR_NOT_SUPPORTED will be returned.
         *
         * If the object is not initialized, or initialization returns with an
         * error, then all operations on the object except g_object_ref() and
         * g_object_unref() are considered to be invalid, and have undefined
         * behaviour. See the [introduction][ginitable] for more details.
         *
         * Callers should not assume that a class which implements #GInitable can be
         * initialized multiple times, unless the class explicitly documents itself as
         * supporting this. Generally, a class’ implementation of init() can assume
         * (and assert) that it will only be called once. Previously, this documentation
         * recommended all #GInitable implementations should be idempotent; that
         * recommendation was relaxed in GLib 2.54.
         *
         * If a class explicitly supports being initialized multiple times, it is
         * recommended that the method is idempotent: multiple calls with the same
         * arguments should return the same results. Only the first call initializes
         * the object; further calls return the result of the first call.
         *
         * One reason why a class might need to support idempotent initialization is if
         * it is designed to be used via the singleton pattern, with a
         * #GObjectClass.constructor that sometimes returns an existing instance.
         * In this pattern, a caller would expect to be able to call g_initable_init()
         * on the result of g_object_new(), regardless of whether it is in fact a new
         * instance.
         * @param cancellable optional #GCancellable object, %NULL to ignore.
         * @returns %TRUE if successful. If an error has occurred, this function will     return %FALSE and set @error appropriately if present.
         */
        init(cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Initializes the object implementing the interface.
         *
         * This method is intended for language bindings. If writing in C,
         * g_initable_new() should typically be used instead.
         *
         * The object must be initialized before any real use after initial
         * construction, either with this function or g_async_initable_init_async().
         *
         * Implementations may also support cancellation. If `cancellable` is not %NULL,
         * then initialization can be cancelled by triggering the cancellable object
         * from another thread. If the operation was cancelled, the error
         * %G_IO_ERROR_CANCELLED will be returned. If `cancellable` is not %NULL and
         * the object doesn't support cancellable initialization the error
         * %G_IO_ERROR_NOT_SUPPORTED will be returned.
         *
         * If the object is not initialized, or initialization returns with an
         * error, then all operations on the object except g_object_ref() and
         * g_object_unref() are considered to be invalid, and have undefined
         * behaviour. See the [introduction][ginitable] for more details.
         *
         * Callers should not assume that a class which implements #GInitable can be
         * initialized multiple times, unless the class explicitly documents itself as
         * supporting this. Generally, a class’ implementation of init() can assume
         * (and assert) that it will only be called once. Previously, this documentation
         * recommended all #GInitable implementations should be idempotent; that
         * recommendation was relaxed in GLib 2.54.
         *
         * If a class explicitly supports being initialized multiple times, it is
         * recommended that the method is idempotent: multiple calls with the same
         * arguments should return the same results. Only the first call initializes
         * the object; further calls return the result of the first call.
         *
         * One reason why a class might need to support idempotent initialization is if
         * it is designed to be used via the singleton pattern, with a
         * #GObjectClass.constructor that sometimes returns an existing instance.
         * In this pattern, a caller would expect to be able to call g_initable_init()
         * on the result of g_object_new(), regardless of whether it is in fact a new
         * instance.
         * @param cancellable optional #GCancellable object, %NULL to ignore.
         */
        vfunc_init(cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-freedesktop-UPower-Wakeups.GetData">GetData()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the <link linkend="g-main-context-push-thread-default">thread-default main loop</link> of the thread you are calling this method from.
         * You can then call up_wakeups_glue_call_get_data_finish() to get the result of the operation.
         *
         * See up_wakeups_glue_call_get_data_sync() for the synchronous, blocking version of this method.
         * @param cancellable A #GCancellable or %NULL.
         * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL.
         */
        call_get_data(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): void;
        /**
         * Finishes an operation started with up_wakeups_glue_call_get_data().
         * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to up_wakeups_glue_call_get_data().
         * @returns %TRUE if the call succeded, %FALSE if @error is set.
         */
        call_get_data_finish(res: Gio.AsyncResult): [boolean, GLib.Variant];
        /**
         * Synchronously invokes the <link linkend="gdbus-method-org-freedesktop-UPower-Wakeups.GetData">GetData()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
         *
         * See up_wakeups_glue_call_get_data() for the asynchronous version of this method.
         * @param cancellable A #GCancellable or %NULL.
         * @returns %TRUE if the call succeded, %FALSE if @error is set.
         */
        call_get_data_sync(cancellable?: Gio.Cancellable | null): [boolean, GLib.Variant];
        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-freedesktop-UPower-Wakeups.GetTotal">GetTotal()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the <link linkend="g-main-context-push-thread-default">thread-default main loop</link> of the thread you are calling this method from.
         * You can then call up_wakeups_glue_call_get_total_finish() to get the result of the operation.
         *
         * See up_wakeups_glue_call_get_total_sync() for the synchronous, blocking version of this method.
         * @param cancellable A #GCancellable or %NULL.
         * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL.
         */
        call_get_total(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): void;
        /**
         * Finishes an operation started with up_wakeups_glue_call_get_total().
         * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to up_wakeups_glue_call_get_total().
         * @returns %TRUE if the call succeded, %FALSE if @error is set.
         */
        call_get_total_finish(res: Gio.AsyncResult): [boolean, number];
        /**
         * Synchronously invokes the <link linkend="gdbus-method-org-freedesktop-UPower-Wakeups.GetTotal">GetTotal()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
         *
         * See up_wakeups_glue_call_get_total() for the asynchronous version of this method.
         * @param cancellable A #GCancellable or %NULL.
         * @returns %TRUE if the call succeded, %FALSE if @error is set.
         */
        call_get_total_sync(cancellable?: Gio.Cancellable | null): [boolean, number];
        /**
         * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-freedesktop-UPower-Wakeups.GetData">GetData()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
         *
         * This method will free `invocation,` you cannot use it afterwards.
         * @param invocation A #GDBusMethodInvocation.
         * @param data Parameter to return.
         */
        complete_get_data(invocation: Gio.DBusMethodInvocation, data: GLib.Variant): void;
        /**
         * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-freedesktop-UPower-Wakeups.GetTotal">GetTotal()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
         *
         * This method will free `invocation,` you cannot use it afterwards.
         * @param invocation A #GDBusMethodInvocation.
         * @param value Parameter to return.
         */
        complete_get_total(invocation: Gio.DBusMethodInvocation, value: number): void;
        /**
         * Emits the <link linkend="gdbus-signal-org-freedesktop-UPower-Wakeups.DataChanged">"DataChanged"</link> D-Bus signal.
         */
        emit_data_changed(): void;
        /**
         * Emits the <link linkend="gdbus-signal-org-freedesktop-UPower-Wakeups.TotalChanged">"TotalChanged"</link> D-Bus signal.
         * @param arg_value Argument to pass with the signal.
         */
        emit_total_changed(arg_value: number): void;
        vfunc_data_changed(): void;
        vfunc_handle_get_data(invocation: Gio.DBusMethodInvocation): boolean;
        vfunc_handle_get_total(invocation: Gio.DBusMethodInvocation): boolean;
        vfunc_total_changed(arg_value: number): void;
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
         * Will result in the "sensitive" property of the widget #GObject instance to be
         * updated with the same value of the "active" property of the action #GObject
         * instance.
         *
         * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well.
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. To remove the binding without affecting the
         * `source` and the `target` you can just call g_object_unref() on the returned
         * #GBinding instance.
         *
         * Removing the binding by calling g_object_unref() on it must only be done if
         * the binding, `source` and `target` are only used from a single thread and it
         * is clear that both `source` and `target` outlive the binding. Especially it
         * is not safe to rely on this if the binding, `source` or `target` can be
         * finalized from different threads. Keep another reference to the binding and
         * use g_binding_unbind() instead to be on the safe side.
         *
         * A #GObject can have multiple bindings.
         * @param source_property the property on @source to bind
         * @param target the target #GObject
         * @param target_property the property on @target to bind
         * @param flags flags to pass to #GBinding
         * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
         */
        bind_property(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags,
        ): GObject.Binding;
        /**
         * Complete version of g_object_bind_property().
         *
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target,` allowing you to set the transformation functions to be used by
         * the binding.
         *
         * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well. The `transform_from` function is only used in case
         * of bidirectional bindings, otherwise it will be ignored
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. This will release the reference that is
         * being held on the #GBinding instance; if you want to hold on to the
         * #GBinding instance, you will need to hold a reference to it.
         *
         * To remove the binding, call g_binding_unbind().
         *
         * A #GObject can have multiple bindings.
         *
         * The same `user_data` parameter will be used for both `transform_to`
         * and `transform_from` transformation functions; the `notify` function will
         * be called once, when the binding is removed. If you need different data
         * for each transformation function, please use
         * g_object_bind_property_with_closures() instead.
         * @param source_property the property on @source to bind
         * @param target the target #GObject
         * @param target_property the property on @target to bind
         * @param flags flags to pass to #GBinding
         * @param transform_to the transformation function     from the @source to the @target, or %NULL to use the default
         * @param transform_from the transformation function     from the @target to the @source, or %NULL to use the default
         * @param notify a function to call when disposing the binding, to free     resources used by the transformation functions, or %NULL if not required
         * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
         */
        bind_property_full(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags,
            transform_to?: GObject.BindingTransformFunc | null,
            transform_from?: GObject.BindingTransformFunc | null,
            notify?: GLib.DestroyNotify | null,
        ): GObject.Binding;
        // Conflicted with GObject.Object.bind_property_full
        bind_property_full(...args: never[]): any;
        /**
         * This function is intended for #GObject implementations to re-enforce
         * a [floating][floating-ref] object reference. Doing this is seldom
         * required: all #GInitiallyUnowneds are created with a floating reference
         * which usually just needs to be sunken by calling g_object_ref_sink().
         */
        force_floating(): void;
        /**
         * Increases the freeze count on `object`. If the freeze count is
         * non-zero, the emission of "notify" signals on `object` is
         * stopped. The signals are queued until the freeze count is decreased
         * to zero. Duplicate notifications are squashed so that at most one
         * #GObject::notify signal is emitted for each property modified while the
         * object is frozen.
         *
         * This is necessary for accessors that modify multiple properties to prevent
         * premature notification while the object is still being modified.
         */
        freeze_notify(): void;
        /**
         * Gets a named field from the objects table of associations (see g_object_set_data()).
         * @param key name of the key for that association
         * @returns the data if found,          or %NULL if no such data exists.
         */
        get_data(key: string): any | null;
        get_property(property_name: string): any;
        /**
         * This function gets back user data pointers stored via
         * g_object_set_qdata().
         * @param quark A #GQuark, naming the user data pointer
         * @returns The user data pointer set, or %NULL
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
         * Checks whether `object` has a [floating][floating-ref] reference.
         * @returns %TRUE if @object has a floating reference
         */
        is_floating(): boolean;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use g_object_notify_by_pspec()
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * g_object_freeze_notify(). In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when g_object_thaw_notify() is
         * called.
         * @param property_name the name of a property installed on the class of @object.
         */
        notify(property_name: string): void;
        /**
         * Emits a "notify" signal for the property specified by `pspec` on `object`.
         *
         * This function omits the property name lookup, hence it is faster than
         * g_object_notify().
         *
         * One way to avoid using g_object_notify() from within the
         * class that registered the properties, and using g_object_notify_by_pspec()
         * instead, is to store the GParamSpec used with
         * g_object_class_install_property() inside a static array, e.g.:
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
         * @param pspec the #GParamSpec of a property installed on the class of @object.
         */
        notify_by_pspec(pspec: GObject.ParamSpec): void;
        /**
         * Increases the reference count of `object`.
         *
         * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
         * of `object` will be propagated to the return type (using the GCC typeof()
         * extension), so any casting the caller needs to do on the return type must be
         * explicit.
         * @returns the same @object
         */
        ref(): GObject.Object;
        /**
         * Increase the reference count of `object,` and possibly remove the
         * [floating][floating-ref] reference, if `object` has a floating reference.
         *
         * In other words, if the object is floating, then this call "assumes
         * ownership" of the floating reference, converting it to a normal
         * reference by clearing the floating flag while leaving the reference
         * count unchanged.  If the object is not floating, then this call
         * adds a new normal reference increasing the reference count by one.
         *
         * Since GLib 2.56, the type of `object` will be propagated to the return type
         * under the same conditions as for g_object_ref().
         * @returns @object
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
         * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
         * This means a copy of `key` is kept permanently (even after `object` has been
         * finalized) — so it is recommended to only use a small, bounded set of values
         * for `key` in your program, to avoid the #GQuark storage growing unbounded.
         * @param key name of the key
         * @param data data to associate with that key
         */
        set_data(key: string, data?: any | null): void;
        set_property(property_name: string, value: any): void;
        /**
         * Remove a specified datum from the object's data associations,
         * without invoking the association's destroy handler.
         * @param key name of the key
         * @returns the data if found, or %NULL          if no such data exists.
         */
        steal_data(key: string): any | null;
        /**
         * This function gets back user data pointers stored via
         * g_object_set_qdata() and removes the `data` from object
         * without invoking its destroy() function (if any was
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
         * Using g_object_get_qdata() in the above example, instead of
         * g_object_steal_qdata() would have left the destroy function set,
         * and thus the partial string list would have been freed upon
         * g_object_set_qdata_full().
         * @param quark A #GQuark, naming the user data pointer
         * @returns The user data pointer set, or %NULL
         */
        steal_qdata(quark: GLib.Quark): any | null;
        /**
         * Reverts the effect of a previous call to
         * g_object_freeze_notify(). The freeze count is decreased on `object`
         * and when it reaches zero, queued "notify" signals are emitted.
         *
         * Duplicate notifications for each property are squashed so that at most one
         * #GObject::notify signal is emitted for each property, in the reverse order
         * in which they have been queued.
         *
         * It is an error to call this function when the freeze count is zero.
         */
        thaw_notify(): void;
        /**
         * Decreases the reference count of `object`. When its reference count
         * drops to 0, the object is finalized (i.e. its memory is freed).
         *
         * If the pointer to the #GObject may be reused in future (for example, if it is
         * an instance variable of another object), it is recommended to clear the
         * pointer to %NULL rather than retain a dangling pointer to a potentially
         * invalid #GObject instance. Use g_clear_object() for this.
         */
        unref(): void;
        /**
         * This function essentially limits the life time of the `closure` to
         * the life time of the object. That is, when the object is finalized,
         * the `closure` is invalidated by calling g_closure_invalidate() on
         * it, in order to prevent invocations of the closure with a finalized
         * (nonexisting) object. Also, g_object_ref() and g_object_unref() are
         * added as marshal guards to the `closure,` to ensure that an extra
         * reference count is held on `object` during invocation of the
         * `closure`.  Usually, this function will be called on closures that
         * use this `object` as closure data.
         * @param closure #GClosure to watch
         */
        watch_closure(closure: GObject.Closure): void;
        /**
         * the `constructed` function is called by g_object_new() as the
         *  final step of the object creation process.  At the point of the call, all
         *  construction properties have been set on the object.  The purpose of this
         *  call is to allow for object initialisation steps that can only be performed
         *  after construction properties have been set.  `constructed` implementors
         *  should chain up to the `constructed` call of their parent class to allow it
         *  to complete its initialisation.
         */
        vfunc_constructed(): void;
        /**
         * emits property change notification for a bunch
         *  of properties. Overriding `dispatch_properties_changed` should be rarely
         *  needed.
         * @param n_pspecs
         * @param pspecs
         */
        vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
        /**
         * the `dispose` function is supposed to drop all references to other
         *  objects, but keep the instance otherwise intact, so that client method
         *  invocations still work. It may be run multiple times (due to reference
         *  loops). Before returning, `dispose` should chain up to the `dispose` method
         *  of the parent class.
         */
        vfunc_dispose(): void;
        /**
         * instance finalization function, should finish the finalization of
         *  the instance begun in `dispose` and chain up to the `finalize` method of the
         *  parent class.
         */
        vfunc_finalize(): void;
        /**
         * the generic getter for all properties of this type. Should be
         *  overridden for every type with properties.
         * @param property_id
         * @param value
         * @param pspec
         */
        vfunc_get_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use g_object_notify_by_pspec()
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * g_object_freeze_notify(). In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when g_object_thaw_notify() is
         * called.
         * @param pspec
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
         */
        vfunc_set_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        disconnect(id: number): void;
        set(properties: { [key: string]: any }): void;
        block_signal_handler(id: number): any;
        unblock_signal_handler(id: number): any;
        stop_emission_by_name(detailedName: string): any;
    }

    module WakeupsGlueSkeleton {
        // Constructor properties interface

        interface ConstructorProps
            extends Gio.DBusInterfaceSkeleton.ConstructorProps,
                Gio.DBusInterface.ConstructorProps,
                WakeupsGlue.ConstructorProps {}
    }

    /**
     * The #UpWakeupsGlueSkeleton structure contains only private data and should only be accessed using the provided API.
     */
    class WakeupsGlueSkeleton extends Gio.DBusInterfaceSkeleton implements Gio.DBusInterface, WakeupsGlue {
        static $gtype: GObject.GType<WakeupsGlueSkeleton>;

        // Constructors

        constructor(properties?: Partial<WakeupsGlueSkeleton.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): WakeupsGlueSkeleton;

        // Inherited properties
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UPower-Wakeups.HasCapability">"HasCapability"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        get has_capability(): boolean;
        set has_capability(val: boolean);
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UPower-Wakeups.HasCapability">"HasCapability"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        get hasCapability(): boolean;
        set hasCapability(val: boolean);

        // Inherited methods
        /**
         * Gets the #GDBusObject that `interface_` belongs to, if any.
         * @returns A #GDBusObject or %NULL. The returned reference should be freed with g_object_unref().
         */
        get_object(): Gio.DBusObject | null;
        /**
         * Gets D-Bus introspection information for the D-Bus interface
         * implemented by `interface_`.
         * @returns A #GDBusInterfaceInfo. Do not free.
         */
        get_info(): Gio.DBusInterfaceInfo;
        /**
         * Sets the #GDBusObject for `interface_` to `object`.
         *
         * Note that `interface_` will hold a weak reference to `object`.
         * @param object A #GDBusObject or %NULL.
         */
        set_object(object?: Gio.DBusObject | null): void;
        /**
         * Gets the #GDBusObject that `interface_` belongs to, if any.
         */
        vfunc_dup_object(): Gio.DBusObject | null;
        /**
         * Gets D-Bus introspection information for the D-Bus interface
         * implemented by `interface_`.
         */
        vfunc_get_info(): Gio.DBusInterfaceInfo;
        /**
         * Sets the #GDBusObject for `interface_` to `object`.
         *
         * Note that `interface_` will hold a weak reference to `object`.
         * @param object A #GDBusObject or %NULL.
         */
        vfunc_set_object(object?: Gio.DBusObject | null): void;
        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-freedesktop-UPower-Wakeups.GetData">GetData()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the <link linkend="g-main-context-push-thread-default">thread-default main loop</link> of the thread you are calling this method from.
         * You can then call up_wakeups_glue_call_get_data_finish() to get the result of the operation.
         *
         * See up_wakeups_glue_call_get_data_sync() for the synchronous, blocking version of this method.
         * @param cancellable A #GCancellable or %NULL.
         * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL.
         */
        call_get_data(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): void;
        /**
         * Finishes an operation started with up_wakeups_glue_call_get_data().
         * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to up_wakeups_glue_call_get_data().
         * @returns %TRUE if the call succeded, %FALSE if @error is set.
         */
        call_get_data_finish(res: Gio.AsyncResult): [boolean, GLib.Variant];
        /**
         * Synchronously invokes the <link linkend="gdbus-method-org-freedesktop-UPower-Wakeups.GetData">GetData()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
         *
         * See up_wakeups_glue_call_get_data() for the asynchronous version of this method.
         * @param cancellable A #GCancellable or %NULL.
         * @returns %TRUE if the call succeded, %FALSE if @error is set.
         */
        call_get_data_sync(cancellable?: Gio.Cancellable | null): [boolean, GLib.Variant];
        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-freedesktop-UPower-Wakeups.GetTotal">GetTotal()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the <link linkend="g-main-context-push-thread-default">thread-default main loop</link> of the thread you are calling this method from.
         * You can then call up_wakeups_glue_call_get_total_finish() to get the result of the operation.
         *
         * See up_wakeups_glue_call_get_total_sync() for the synchronous, blocking version of this method.
         * @param cancellable A #GCancellable or %NULL.
         * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL.
         */
        call_get_total(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): void;
        /**
         * Finishes an operation started with up_wakeups_glue_call_get_total().
         * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to up_wakeups_glue_call_get_total().
         * @returns %TRUE if the call succeded, %FALSE if @error is set.
         */
        call_get_total_finish(res: Gio.AsyncResult): [boolean, number];
        /**
         * Synchronously invokes the <link linkend="gdbus-method-org-freedesktop-UPower-Wakeups.GetTotal">GetTotal()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
         *
         * See up_wakeups_glue_call_get_total() for the asynchronous version of this method.
         * @param cancellable A #GCancellable or %NULL.
         * @returns %TRUE if the call succeded, %FALSE if @error is set.
         */
        call_get_total_sync(cancellable?: Gio.Cancellable | null): [boolean, number];
        /**
         * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-freedesktop-UPower-Wakeups.GetData">GetData()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
         *
         * This method will free `invocation,` you cannot use it afterwards.
         * @param invocation A #GDBusMethodInvocation.
         * @param data Parameter to return.
         */
        complete_get_data(invocation: Gio.DBusMethodInvocation, data: GLib.Variant): void;
        /**
         * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-freedesktop-UPower-Wakeups.GetTotal">GetTotal()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
         *
         * This method will free `invocation,` you cannot use it afterwards.
         * @param invocation A #GDBusMethodInvocation.
         * @param value Parameter to return.
         */
        complete_get_total(invocation: Gio.DBusMethodInvocation, value: number): void;
        /**
         * Emits the <link linkend="gdbus-signal-org-freedesktop-UPower-Wakeups.DataChanged">"DataChanged"</link> D-Bus signal.
         */
        emit_data_changed(): void;
        /**
         * Emits the <link linkend="gdbus-signal-org-freedesktop-UPower-Wakeups.TotalChanged">"TotalChanged"</link> D-Bus signal.
         * @param arg_value Argument to pass with the signal.
         */
        emit_total_changed(arg_value: number): void;
        vfunc_data_changed(): void;
        vfunc_handle_get_data(invocation: Gio.DBusMethodInvocation): boolean;
        vfunc_handle_get_total(invocation: Gio.DBusMethodInvocation): boolean;
        vfunc_total_changed(arg_value: number): void;
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
         * Will result in the "sensitive" property of the widget #GObject instance to be
         * updated with the same value of the "active" property of the action #GObject
         * instance.
         *
         * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well.
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. To remove the binding without affecting the
         * `source` and the `target` you can just call g_object_unref() on the returned
         * #GBinding instance.
         *
         * Removing the binding by calling g_object_unref() on it must only be done if
         * the binding, `source` and `target` are only used from a single thread and it
         * is clear that both `source` and `target` outlive the binding. Especially it
         * is not safe to rely on this if the binding, `source` or `target` can be
         * finalized from different threads. Keep another reference to the binding and
         * use g_binding_unbind() instead to be on the safe side.
         *
         * A #GObject can have multiple bindings.
         * @param source_property the property on @source to bind
         * @param target the target #GObject
         * @param target_property the property on @target to bind
         * @param flags flags to pass to #GBinding
         * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
         */
        bind_property(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags,
        ): GObject.Binding;
        /**
         * Complete version of g_object_bind_property().
         *
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target,` allowing you to set the transformation functions to be used by
         * the binding.
         *
         * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well. The `transform_from` function is only used in case
         * of bidirectional bindings, otherwise it will be ignored
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. This will release the reference that is
         * being held on the #GBinding instance; if you want to hold on to the
         * #GBinding instance, you will need to hold a reference to it.
         *
         * To remove the binding, call g_binding_unbind().
         *
         * A #GObject can have multiple bindings.
         *
         * The same `user_data` parameter will be used for both `transform_to`
         * and `transform_from` transformation functions; the `notify` function will
         * be called once, when the binding is removed. If you need different data
         * for each transformation function, please use
         * g_object_bind_property_with_closures() instead.
         * @param source_property the property on @source to bind
         * @param target the target #GObject
         * @param target_property the property on @target to bind
         * @param flags flags to pass to #GBinding
         * @param transform_to the transformation function     from the @source to the @target, or %NULL to use the default
         * @param transform_from the transformation function     from the @target to the @source, or %NULL to use the default
         * @param notify a function to call when disposing the binding, to free     resources used by the transformation functions, or %NULL if not required
         * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
         */
        bind_property_full(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags,
            transform_to?: GObject.BindingTransformFunc | null,
            transform_from?: GObject.BindingTransformFunc | null,
            notify?: GLib.DestroyNotify | null,
        ): GObject.Binding;
        // Conflicted with GObject.Object.bind_property_full
        bind_property_full(...args: never[]): any;
        /**
         * This function is intended for #GObject implementations to re-enforce
         * a [floating][floating-ref] object reference. Doing this is seldom
         * required: all #GInitiallyUnowneds are created with a floating reference
         * which usually just needs to be sunken by calling g_object_ref_sink().
         */
        force_floating(): void;
        /**
         * Increases the freeze count on `object`. If the freeze count is
         * non-zero, the emission of "notify" signals on `object` is
         * stopped. The signals are queued until the freeze count is decreased
         * to zero. Duplicate notifications are squashed so that at most one
         * #GObject::notify signal is emitted for each property modified while the
         * object is frozen.
         *
         * This is necessary for accessors that modify multiple properties to prevent
         * premature notification while the object is still being modified.
         */
        freeze_notify(): void;
        /**
         * Gets a named field from the objects table of associations (see g_object_set_data()).
         * @param key name of the key for that association
         * @returns the data if found,          or %NULL if no such data exists.
         */
        get_data(key: string): any | null;
        get_property(property_name: string): any;
        /**
         * This function gets back user data pointers stored via
         * g_object_set_qdata().
         * @param quark A #GQuark, naming the user data pointer
         * @returns The user data pointer set, or %NULL
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
         * Checks whether `object` has a [floating][floating-ref] reference.
         * @returns %TRUE if @object has a floating reference
         */
        is_floating(): boolean;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use g_object_notify_by_pspec()
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * g_object_freeze_notify(). In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when g_object_thaw_notify() is
         * called.
         * @param property_name the name of a property installed on the class of @object.
         */
        notify(property_name: string): void;
        /**
         * Emits a "notify" signal for the property specified by `pspec` on `object`.
         *
         * This function omits the property name lookup, hence it is faster than
         * g_object_notify().
         *
         * One way to avoid using g_object_notify() from within the
         * class that registered the properties, and using g_object_notify_by_pspec()
         * instead, is to store the GParamSpec used with
         * g_object_class_install_property() inside a static array, e.g.:
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
         * @param pspec the #GParamSpec of a property installed on the class of @object.
         */
        notify_by_pspec(pspec: GObject.ParamSpec): void;
        /**
         * Increases the reference count of `object`.
         *
         * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
         * of `object` will be propagated to the return type (using the GCC typeof()
         * extension), so any casting the caller needs to do on the return type must be
         * explicit.
         * @returns the same @object
         */
        ref(): GObject.Object;
        /**
         * Increase the reference count of `object,` and possibly remove the
         * [floating][floating-ref] reference, if `object` has a floating reference.
         *
         * In other words, if the object is floating, then this call "assumes
         * ownership" of the floating reference, converting it to a normal
         * reference by clearing the floating flag while leaving the reference
         * count unchanged.  If the object is not floating, then this call
         * adds a new normal reference increasing the reference count by one.
         *
         * Since GLib 2.56, the type of `object` will be propagated to the return type
         * under the same conditions as for g_object_ref().
         * @returns @object
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
         * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
         * This means a copy of `key` is kept permanently (even after `object` has been
         * finalized) — so it is recommended to only use a small, bounded set of values
         * for `key` in your program, to avoid the #GQuark storage growing unbounded.
         * @param key name of the key
         * @param data data to associate with that key
         */
        set_data(key: string, data?: any | null): void;
        set_property(property_name: string, value: any): void;
        /**
         * Remove a specified datum from the object's data associations,
         * without invoking the association's destroy handler.
         * @param key name of the key
         * @returns the data if found, or %NULL          if no such data exists.
         */
        steal_data(key: string): any | null;
        /**
         * This function gets back user data pointers stored via
         * g_object_set_qdata() and removes the `data` from object
         * without invoking its destroy() function (if any was
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
         * Using g_object_get_qdata() in the above example, instead of
         * g_object_steal_qdata() would have left the destroy function set,
         * and thus the partial string list would have been freed upon
         * g_object_set_qdata_full().
         * @param quark A #GQuark, naming the user data pointer
         * @returns The user data pointer set, or %NULL
         */
        steal_qdata(quark: GLib.Quark): any | null;
        /**
         * Reverts the effect of a previous call to
         * g_object_freeze_notify(). The freeze count is decreased on `object`
         * and when it reaches zero, queued "notify" signals are emitted.
         *
         * Duplicate notifications for each property are squashed so that at most one
         * #GObject::notify signal is emitted for each property, in the reverse order
         * in which they have been queued.
         *
         * It is an error to call this function when the freeze count is zero.
         */
        thaw_notify(): void;
        /**
         * Decreases the reference count of `object`. When its reference count
         * drops to 0, the object is finalized (i.e. its memory is freed).
         *
         * If the pointer to the #GObject may be reused in future (for example, if it is
         * an instance variable of another object), it is recommended to clear the
         * pointer to %NULL rather than retain a dangling pointer to a potentially
         * invalid #GObject instance. Use g_clear_object() for this.
         */
        unref(): void;
        /**
         * This function essentially limits the life time of the `closure` to
         * the life time of the object. That is, when the object is finalized,
         * the `closure` is invalidated by calling g_closure_invalidate() on
         * it, in order to prevent invocations of the closure with a finalized
         * (nonexisting) object. Also, g_object_ref() and g_object_unref() are
         * added as marshal guards to the `closure,` to ensure that an extra
         * reference count is held on `object` during invocation of the
         * `closure`.  Usually, this function will be called on closures that
         * use this `object` as closure data.
         * @param closure #GClosure to watch
         */
        watch_closure(closure: GObject.Closure): void;
        /**
         * the `constructed` function is called by g_object_new() as the
         *  final step of the object creation process.  At the point of the call, all
         *  construction properties have been set on the object.  The purpose of this
         *  call is to allow for object initialisation steps that can only be performed
         *  after construction properties have been set.  `constructed` implementors
         *  should chain up to the `constructed` call of their parent class to allow it
         *  to complete its initialisation.
         */
        vfunc_constructed(): void;
        /**
         * emits property change notification for a bunch
         *  of properties. Overriding `dispatch_properties_changed` should be rarely
         *  needed.
         * @param n_pspecs
         * @param pspecs
         */
        vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
        /**
         * the `dispose` function is supposed to drop all references to other
         *  objects, but keep the instance otherwise intact, so that client method
         *  invocations still work. It may be run multiple times (due to reference
         *  loops). Before returning, `dispose` should chain up to the `dispose` method
         *  of the parent class.
         */
        vfunc_dispose(): void;
        /**
         * instance finalization function, should finish the finalization of
         *  the instance begun in `dispose` and chain up to the `finalize` method of the
         *  parent class.
         */
        vfunc_finalize(): void;
        /**
         * the generic getter for all properties of this type. Should be
         *  overridden for every type with properties.
         * @param property_id
         * @param value
         * @param pspec
         */
        vfunc_get_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use g_object_notify_by_pspec()
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * g_object_freeze_notify(). In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when g_object_thaw_notify() is
         * called.
         * @param pspec
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
         */
        vfunc_set_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        disconnect(id: number): void;
        set(properties: { [key: string]: any }): void;
        block_signal_handler(id: number): any;
        unblock_signal_handler(id: number): any;
        stop_emission_by_name(detailedName: string): any;
    }

    type ClientClass = typeof Client;
    type ClientGlueIface = typeof ClientGlue;
    type ClientGlueProxyClass = typeof ClientGlueProxy;
    abstract class ClientGlueProxyPrivate {
        static $gtype: GObject.GType<ClientGlueProxyPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type ClientGlueSkeletonClass = typeof ClientGlueSkeleton;
    abstract class ClientGlueSkeletonPrivate {
        static $gtype: GObject.GType<ClientGlueSkeletonPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    /**
     * Private #UpClient data
     */
    abstract class ClientPrivate {
        static $gtype: GObject.GType<ClientPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type DeviceClass = typeof Device;
    type DeviceGlueIface = typeof DeviceGlue;
    type DeviceGlueProxyClass = typeof DeviceGlueProxy;
    abstract class DeviceGlueProxyPrivate {
        static $gtype: GObject.GType<DeviceGlueProxyPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type DeviceGlueSkeletonClass = typeof DeviceGlueSkeleton;
    abstract class DeviceGlueSkeletonPrivate {
        static $gtype: GObject.GType<DeviceGlueSkeletonPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    /**
     * Private #PkDevice data
     */
    abstract class DevicePrivate {
        static $gtype: GObject.GType<DevicePrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type HistoryItemClass = typeof HistoryItem;
    abstract class HistoryItemPrivate {
        static $gtype: GObject.GType<HistoryItemPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type StatsItemClass = typeof StatsItem;
    abstract class StatsItemPrivate {
        static $gtype: GObject.GType<StatsItemPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type WakeupItemClass = typeof WakeupItem;
    abstract class WakeupItemPrivate {
        static $gtype: GObject.GType<WakeupItemPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type WakeupsClass = typeof Wakeups;
    type WakeupsGlueIface = typeof WakeupsGlue;
    type WakeupsGlueProxyClass = typeof WakeupsGlueProxy;
    abstract class WakeupsGlueProxyPrivate {
        static $gtype: GObject.GType<WakeupsGlueProxyPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type WakeupsGlueSkeletonClass = typeof WakeupsGlueSkeleton;
    abstract class WakeupsGlueSkeletonPrivate {
        static $gtype: GObject.GType<WakeupsGlueSkeletonPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    abstract class WakeupsPrivate {
        static $gtype: GObject.GType<WakeupsPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    module ClientGlue {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
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

    export interface ClientGlueNamespace {
        $gtype: GObject.GType<ClientGlue>;
        prototype: ClientGlue;

        /**
         * Gets a machine-readable description of the <link linkend="gdbus-interface-org-freedesktop-UPower.top_of_page">org.freedesktop.UPower</link> D-Bus interface.
         */
        interface_info(): Gio.DBusInterfaceInfo;
        /**
         * Overrides all #GObject properties in the #UpClientGlue interface for a concrete class.
         * The properties are overridden in the order they are defined.
         * @param klass The class structure for a #GObject<!-- -->-derived class.
         * @param property_id_begin The property id to assign to the first overridden property.
         */
        override_properties(klass: typeof GObject.Object, property_id_begin: number): number;
    }
    interface ClientGlue extends GObject.Object {
        // Properties

        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UPower.DaemonVersion">"DaemonVersion"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        get daemon_version(): string;
        set daemon_version(val: string);
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UPower.DaemonVersion">"DaemonVersion"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        get daemonVersion(): string;
        set daemonVersion(val: string);
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UPower.LidIsClosed">"LidIsClosed"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        get lid_is_closed(): boolean;
        set lid_is_closed(val: boolean);
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UPower.LidIsClosed">"LidIsClosed"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        get lidIsClosed(): boolean;
        set lidIsClosed(val: boolean);
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UPower.LidIsPresent">"LidIsPresent"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        get lid_is_present(): boolean;
        set lid_is_present(val: boolean);
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UPower.LidIsPresent">"LidIsPresent"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        get lidIsPresent(): boolean;
        set lidIsPresent(val: boolean);
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UPower.OnBattery">"OnBattery"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        get on_battery(): boolean;
        set on_battery(val: boolean);
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UPower.OnBattery">"OnBattery"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        get onBattery(): boolean;
        set onBattery(val: boolean);

        // Methods

        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-freedesktop-UPower.EnumerateDevices">EnumerateDevices()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the <link linkend="g-main-context-push-thread-default">thread-default main loop</link> of the thread you are calling this method from.
         * You can then call up_client_glue_call_enumerate_devices_finish() to get the result of the operation.
         *
         * See up_client_glue_call_enumerate_devices_sync() for the synchronous, blocking version of this method.
         * @param cancellable A #GCancellable or %NULL.
         * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL.
         */
        call_enumerate_devices(
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes an operation started with up_client_glue_call_enumerate_devices().
         * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to up_client_glue_call_enumerate_devices().
         * @returns %TRUE if the call succeded, %FALSE if @error is set.
         */
        call_enumerate_devices_finish(res: Gio.AsyncResult): [boolean, string];
        /**
         * Synchronously invokes the <link linkend="gdbus-method-org-freedesktop-UPower.EnumerateDevices">EnumerateDevices()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
         *
         * See up_client_glue_call_enumerate_devices() for the asynchronous version of this method.
         * @param cancellable A #GCancellable or %NULL.
         * @returns %TRUE if the call succeded, %FALSE if @error is set.
         */
        call_enumerate_devices_sync(cancellable?: Gio.Cancellable | null): [boolean, string];
        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-freedesktop-UPower.GetCriticalAction">GetCriticalAction()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the <link linkend="g-main-context-push-thread-default">thread-default main loop</link> of the thread you are calling this method from.
         * You can then call up_client_glue_call_get_critical_action_finish() to get the result of the operation.
         *
         * See up_client_glue_call_get_critical_action_sync() for the synchronous, blocking version of this method.
         * @param cancellable A #GCancellable or %NULL.
         * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL.
         */
        call_get_critical_action(
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes an operation started with up_client_glue_call_get_critical_action().
         * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to up_client_glue_call_get_critical_action().
         * @returns %TRUE if the call succeded, %FALSE if @error is set.
         */
        call_get_critical_action_finish(res: Gio.AsyncResult): [boolean, string];
        /**
         * Synchronously invokes the <link linkend="gdbus-method-org-freedesktop-UPower.GetCriticalAction">GetCriticalAction()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
         *
         * See up_client_glue_call_get_critical_action() for the asynchronous version of this method.
         * @param cancellable A #GCancellable or %NULL.
         * @returns %TRUE if the call succeded, %FALSE if @error is set.
         */
        call_get_critical_action_sync(cancellable?: Gio.Cancellable | null): [boolean, string];
        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-freedesktop-UPower.GetDisplayDevice">GetDisplayDevice()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the <link linkend="g-main-context-push-thread-default">thread-default main loop</link> of the thread you are calling this method from.
         * You can then call up_client_glue_call_get_display_device_finish() to get the result of the operation.
         *
         * See up_client_glue_call_get_display_device_sync() for the synchronous, blocking version of this method.
         * @param cancellable A #GCancellable or %NULL.
         * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL.
         */
        call_get_display_device(
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes an operation started with up_client_glue_call_get_display_device().
         * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to up_client_glue_call_get_display_device().
         * @returns %TRUE if the call succeded, %FALSE if @error is set.
         */
        call_get_display_device_finish(res: Gio.AsyncResult): [boolean, string];
        /**
         * Synchronously invokes the <link linkend="gdbus-method-org-freedesktop-UPower.GetDisplayDevice">GetDisplayDevice()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
         *
         * See up_client_glue_call_get_display_device() for the asynchronous version of this method.
         * @param cancellable A #GCancellable or %NULL.
         * @returns %TRUE if the call succeded, %FALSE if @error is set.
         */
        call_get_display_device_sync(cancellable?: Gio.Cancellable | null): [boolean, string];
        /**
         * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-freedesktop-UPower.EnumerateDevices">EnumerateDevices()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
         *
         * This method will free `invocation,` you cannot use it afterwards.
         * @param invocation A #GDBusMethodInvocation.
         * @param devices Parameter to return.
         */
        complete_enumerate_devices(invocation: Gio.DBusMethodInvocation, devices: string): void;
        /**
         * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-freedesktop-UPower.GetCriticalAction">GetCriticalAction()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
         *
         * This method will free `invocation,` you cannot use it afterwards.
         * @param invocation A #GDBusMethodInvocation.
         * @param action Parameter to return.
         */
        complete_get_critical_action(invocation: Gio.DBusMethodInvocation, action: string): void;
        /**
         * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-freedesktop-UPower.GetDisplayDevice">GetDisplayDevice()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
         *
         * This method will free `invocation,` you cannot use it afterwards.
         * @param invocation A #GDBusMethodInvocation.
         * @param device Parameter to return.
         */
        complete_get_display_device(invocation: Gio.DBusMethodInvocation, device: string): void;
        /**
         * Emits the <link linkend="gdbus-signal-org-freedesktop-UPower.DeviceAdded">"DeviceAdded"</link> D-Bus signal.
         * @param arg_device Argument to pass with the signal.
         */
        emit_device_added(arg_device: string): void;
        /**
         * Emits the <link linkend="gdbus-signal-org-freedesktop-UPower.DeviceRemoved">"DeviceRemoved"</link> D-Bus signal.
         * @param arg_device Argument to pass with the signal.
         */
        emit_device_removed(arg_device: string): void;

        // Virtual methods

        vfunc_device_added(arg_device: string): void;
        vfunc_device_removed(arg_device: string): void;
        vfunc_handle_enumerate_devices(invocation: Gio.DBusMethodInvocation): boolean;
        vfunc_handle_get_critical_action(invocation: Gio.DBusMethodInvocation): boolean;
        vfunc_handle_get_display_device(invocation: Gio.DBusMethodInvocation): boolean;
    }

    export const ClientGlue: ClientGlueNamespace;

    module DeviceGlue {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            capacity: number;
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
            type: number;
            update_time: number;
            updateTime: number;
            vendor: string;
            voltage: number;
            warning_level: number;
            warningLevel: number;
        }
    }

    export interface DeviceGlueNamespace {
        $gtype: GObject.GType<DeviceGlue>;
        prototype: DeviceGlue;

        /**
         * Gets a machine-readable description of the <link linkend="gdbus-interface-org-freedesktop-UPower-Device.top_of_page">org.freedesktop.UPower.Device</link> D-Bus interface.
         */
        interface_info(): Gio.DBusInterfaceInfo;
        /**
         * Overrides all #GObject properties in the #UpDeviceGlue interface for a concrete class.
         * The properties are overridden in the order they are defined.
         * @param klass The class structure for a #GObject<!-- -->-derived class.
         * @param property_id_begin The property id to assign to the first overridden property.
         */
        override_properties(klass: typeof GObject.Object, property_id_begin: number): number;
    }
    interface DeviceGlue extends GObject.Object {
        // Properties

        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UPower-Device.Capacity">"Capacity"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        get capacity(): number;
        set capacity(val: number);
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UPower-Device.Energy">"Energy"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        get energy(): number;
        set energy(val: number);
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UPower-Device.EnergyEmpty">"EnergyEmpty"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        get energy_empty(): number;
        set energy_empty(val: number);
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UPower-Device.EnergyEmpty">"EnergyEmpty"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        get energyEmpty(): number;
        set energyEmpty(val: number);
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UPower-Device.EnergyFull">"EnergyFull"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        get energy_full(): number;
        set energy_full(val: number);
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UPower-Device.EnergyFull">"EnergyFull"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        get energyFull(): number;
        set energyFull(val: number);
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UPower-Device.EnergyFullDesign">"EnergyFullDesign"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        get energy_full_design(): number;
        set energy_full_design(val: number);
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UPower-Device.EnergyFullDesign">"EnergyFullDesign"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        get energyFullDesign(): number;
        set energyFullDesign(val: number);
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UPower-Device.EnergyRate">"EnergyRate"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        get energy_rate(): number;
        set energy_rate(val: number);
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UPower-Device.EnergyRate">"EnergyRate"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        get energyRate(): number;
        set energyRate(val: number);
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UPower-Device.HasHistory">"HasHistory"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        get has_history(): boolean;
        set has_history(val: boolean);
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UPower-Device.HasHistory">"HasHistory"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        get hasHistory(): boolean;
        set hasHistory(val: boolean);
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UPower-Device.HasStatistics">"HasStatistics"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        get has_statistics(): boolean;
        set has_statistics(val: boolean);
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UPower-Device.HasStatistics">"HasStatistics"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        get hasStatistics(): boolean;
        set hasStatistics(val: boolean);
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UPower-Device.IconName">"IconName"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        get icon_name(): string;
        set icon_name(val: string);
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UPower-Device.IconName">"IconName"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        get iconName(): string;
        set iconName(val: string);
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UPower-Device.IsPresent">"IsPresent"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        get is_present(): boolean;
        set is_present(val: boolean);
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UPower-Device.IsPresent">"IsPresent"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        get isPresent(): boolean;
        set isPresent(val: boolean);
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UPower-Device.IsRechargeable">"IsRechargeable"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        get is_rechargeable(): boolean;
        set is_rechargeable(val: boolean);
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UPower-Device.IsRechargeable">"IsRechargeable"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        get isRechargeable(): boolean;
        set isRechargeable(val: boolean);
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UPower-Device.Luminosity">"Luminosity"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        get luminosity(): number;
        set luminosity(val: number);
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UPower-Device.Model">"Model"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        get model(): string;
        set model(val: string);
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UPower-Device.NativePath">"NativePath"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        get native_path(): string;
        set native_path(val: string);
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UPower-Device.NativePath">"NativePath"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        get nativePath(): string;
        set nativePath(val: string);
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UPower-Device.Online">"Online"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        get online(): boolean;
        set online(val: boolean);
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UPower-Device.Percentage">"Percentage"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        get percentage(): number;
        set percentage(val: number);
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UPower-Device.PowerSupply">"PowerSupply"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        get power_supply(): boolean;
        set power_supply(val: boolean);
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UPower-Device.PowerSupply">"PowerSupply"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        get powerSupply(): boolean;
        set powerSupply(val: boolean);
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UPower-Device.Serial">"Serial"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        get serial(): string;
        set serial(val: string);
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UPower-Device.State">"State"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        get state(): number;
        set state(val: number);
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UPower-Device.Technology">"Technology"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        get technology(): number;
        set technology(val: number);
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UPower-Device.Temperature">"Temperature"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        get temperature(): number;
        set temperature(val: number);
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UPower-Device.TimeToEmpty">"TimeToEmpty"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        get time_to_empty(): number;
        set time_to_empty(val: number);
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UPower-Device.TimeToEmpty">"TimeToEmpty"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        get timeToEmpty(): number;
        set timeToEmpty(val: number);
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UPower-Device.TimeToFull">"TimeToFull"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        get time_to_full(): number;
        set time_to_full(val: number);
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UPower-Device.TimeToFull">"TimeToFull"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        get timeToFull(): number;
        set timeToFull(val: number);
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UPower-Device.Type">"Type"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        get type(): number;
        set type(val: number);
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UPower-Device.UpdateTime">"UpdateTime"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        get update_time(): number;
        set update_time(val: number);
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UPower-Device.UpdateTime">"UpdateTime"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        get updateTime(): number;
        set updateTime(val: number);
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UPower-Device.Vendor">"Vendor"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        get vendor(): string;
        set vendor(val: string);
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UPower-Device.Voltage">"Voltage"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        get voltage(): number;
        set voltage(val: number);
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UPower-Device.WarningLevel">"WarningLevel"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        get warning_level(): number;
        set warning_level(val: number);
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UPower-Device.WarningLevel">"WarningLevel"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        get warningLevel(): number;
        set warningLevel(val: number);

        // Methods

        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-freedesktop-UPower-Device.GetHistory">GetHistory()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the <link linkend="g-main-context-push-thread-default">thread-default main loop</link> of the thread you are calling this method from.
         * You can then call up_device_glue_call_get_history_finish() to get the result of the operation.
         *
         * See up_device_glue_call_get_history_sync() for the synchronous, blocking version of this method.
         * @param arg_type Argument to pass with the method invocation.
         * @param arg_timespan Argument to pass with the method invocation.
         * @param arg_resolution Argument to pass with the method invocation.
         * @param cancellable A #GCancellable or %NULL.
         * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL.
         */
        call_get_history(
            arg_type: string,
            arg_timespan: number,
            arg_resolution: number,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes an operation started with up_device_glue_call_get_history().
         * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to up_device_glue_call_get_history().
         * @returns %TRUE if the call succeded, %FALSE if @error is set.
         */
        call_get_history_finish(res: Gio.AsyncResult): [boolean, GLib.Variant];
        /**
         * Synchronously invokes the <link linkend="gdbus-method-org-freedesktop-UPower-Device.GetHistory">GetHistory()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
         *
         * See up_device_glue_call_get_history() for the asynchronous version of this method.
         * @param arg_type Argument to pass with the method invocation.
         * @param arg_timespan Argument to pass with the method invocation.
         * @param arg_resolution Argument to pass with the method invocation.
         * @param cancellable A #GCancellable or %NULL.
         * @returns %TRUE if the call succeded, %FALSE if @error is set.
         */
        call_get_history_sync(
            arg_type: string,
            arg_timespan: number,
            arg_resolution: number,
            cancellable?: Gio.Cancellable | null,
        ): [boolean, GLib.Variant];
        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-freedesktop-UPower-Device.GetStatistics">GetStatistics()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the <link linkend="g-main-context-push-thread-default">thread-default main loop</link> of the thread you are calling this method from.
         * You can then call up_device_glue_call_get_statistics_finish() to get the result of the operation.
         *
         * See up_device_glue_call_get_statistics_sync() for the synchronous, blocking version of this method.
         * @param arg_type Argument to pass with the method invocation.
         * @param cancellable A #GCancellable or %NULL.
         * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL.
         */
        call_get_statistics(
            arg_type: string,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes an operation started with up_device_glue_call_get_statistics().
         * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to up_device_glue_call_get_statistics().
         * @returns %TRUE if the call succeded, %FALSE if @error is set.
         */
        call_get_statistics_finish(res: Gio.AsyncResult): [boolean, GLib.Variant];
        /**
         * Synchronously invokes the <link linkend="gdbus-method-org-freedesktop-UPower-Device.GetStatistics">GetStatistics()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
         *
         * See up_device_glue_call_get_statistics() for the asynchronous version of this method.
         * @param arg_type Argument to pass with the method invocation.
         * @param cancellable A #GCancellable or %NULL.
         * @returns %TRUE if the call succeded, %FALSE if @error is set.
         */
        call_get_statistics_sync(arg_type: string, cancellable?: Gio.Cancellable | null): [boolean, GLib.Variant];
        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-freedesktop-UPower-Device.Refresh">Refresh()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the <link linkend="g-main-context-push-thread-default">thread-default main loop</link> of the thread you are calling this method from.
         * You can then call up_device_glue_call_refresh_finish() to get the result of the operation.
         *
         * See up_device_glue_call_refresh_sync() for the synchronous, blocking version of this method.
         * @param cancellable A #GCancellable or %NULL.
         * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL.
         */
        call_refresh(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): void;
        /**
         * Finishes an operation started with up_device_glue_call_refresh().
         * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to up_device_glue_call_refresh().
         * @returns %TRUE if the call succeded, %FALSE if @error is set.
         */
        call_refresh_finish(res: Gio.AsyncResult): boolean;
        /**
         * Synchronously invokes the <link linkend="gdbus-method-org-freedesktop-UPower-Device.Refresh">Refresh()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
         *
         * See up_device_glue_call_refresh() for the asynchronous version of this method.
         * @param cancellable A #GCancellable or %NULL.
         * @returns %TRUE if the call succeded, %FALSE if @error is set.
         */
        call_refresh_sync(cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-freedesktop-UPower-Device.GetHistory">GetHistory()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
         *
         * This method will free `invocation,` you cannot use it afterwards.
         * @param invocation A #GDBusMethodInvocation.
         * @param data Parameter to return.
         */
        complete_get_history(invocation: Gio.DBusMethodInvocation, data: GLib.Variant): void;
        /**
         * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-freedesktop-UPower-Device.GetStatistics">GetStatistics()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
         *
         * This method will free `invocation,` you cannot use it afterwards.
         * @param invocation A #GDBusMethodInvocation.
         * @param data Parameter to return.
         */
        complete_get_statistics(invocation: Gio.DBusMethodInvocation, data: GLib.Variant): void;
        /**
         * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-freedesktop-UPower-Device.Refresh">Refresh()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
         *
         * This method will free `invocation,` you cannot use it afterwards.
         * @param invocation A #GDBusMethodInvocation.
         */
        complete_refresh(invocation: Gio.DBusMethodInvocation): void;

        // Virtual methods

        vfunc_handle_get_history(
            invocation: Gio.DBusMethodInvocation,
            arg_type: string,
            arg_timespan: number,
            arg_resolution: number,
        ): boolean;
        vfunc_handle_get_statistics(invocation: Gio.DBusMethodInvocation, arg_type: string): boolean;
        vfunc_handle_refresh(invocation: Gio.DBusMethodInvocation): boolean;
    }

    export const DeviceGlue: DeviceGlueNamespace;

    module WakeupsGlue {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            has_capability: boolean;
            hasCapability: boolean;
        }
    }

    export interface WakeupsGlueNamespace {
        $gtype: GObject.GType<WakeupsGlue>;
        prototype: WakeupsGlue;

        /**
         * Gets a machine-readable description of the <link linkend="gdbus-interface-org-freedesktop-UPower-Wakeups.top_of_page">org.freedesktop.UPower.Wakeups</link> D-Bus interface.
         */
        interface_info(): Gio.DBusInterfaceInfo;
        /**
         * Overrides all #GObject properties in the #UpWakeupsGlue interface for a concrete class.
         * The properties are overridden in the order they are defined.
         * @param klass The class structure for a #GObject<!-- -->-derived class.
         * @param property_id_begin The property id to assign to the first overridden property.
         */
        override_properties(klass: typeof GObject.Object, property_id_begin: number): number;
    }
    interface WakeupsGlue extends GObject.Object {
        // Properties

        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UPower-Wakeups.HasCapability">"HasCapability"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        get has_capability(): boolean;
        set has_capability(val: boolean);
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UPower-Wakeups.HasCapability">"HasCapability"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        get hasCapability(): boolean;
        set hasCapability(val: boolean);

        // Methods

        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-freedesktop-UPower-Wakeups.GetData">GetData()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the <link linkend="g-main-context-push-thread-default">thread-default main loop</link> of the thread you are calling this method from.
         * You can then call up_wakeups_glue_call_get_data_finish() to get the result of the operation.
         *
         * See up_wakeups_glue_call_get_data_sync() for the synchronous, blocking version of this method.
         * @param cancellable A #GCancellable or %NULL.
         * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL.
         */
        call_get_data(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): void;
        /**
         * Finishes an operation started with up_wakeups_glue_call_get_data().
         * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to up_wakeups_glue_call_get_data().
         * @returns %TRUE if the call succeded, %FALSE if @error is set.
         */
        call_get_data_finish(res: Gio.AsyncResult): [boolean, GLib.Variant];
        /**
         * Synchronously invokes the <link linkend="gdbus-method-org-freedesktop-UPower-Wakeups.GetData">GetData()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
         *
         * See up_wakeups_glue_call_get_data() for the asynchronous version of this method.
         * @param cancellable A #GCancellable or %NULL.
         * @returns %TRUE if the call succeded, %FALSE if @error is set.
         */
        call_get_data_sync(cancellable?: Gio.Cancellable | null): [boolean, GLib.Variant];
        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-freedesktop-UPower-Wakeups.GetTotal">GetTotal()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the <link linkend="g-main-context-push-thread-default">thread-default main loop</link> of the thread you are calling this method from.
         * You can then call up_wakeups_glue_call_get_total_finish() to get the result of the operation.
         *
         * See up_wakeups_glue_call_get_total_sync() for the synchronous, blocking version of this method.
         * @param cancellable A #GCancellable or %NULL.
         * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL.
         */
        call_get_total(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): void;
        /**
         * Finishes an operation started with up_wakeups_glue_call_get_total().
         * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to up_wakeups_glue_call_get_total().
         * @returns %TRUE if the call succeded, %FALSE if @error is set.
         */
        call_get_total_finish(res: Gio.AsyncResult): [boolean, number];
        /**
         * Synchronously invokes the <link linkend="gdbus-method-org-freedesktop-UPower-Wakeups.GetTotal">GetTotal()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
         *
         * See up_wakeups_glue_call_get_total() for the asynchronous version of this method.
         * @param cancellable A #GCancellable or %NULL.
         * @returns %TRUE if the call succeded, %FALSE if @error is set.
         */
        call_get_total_sync(cancellable?: Gio.Cancellable | null): [boolean, number];
        /**
         * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-freedesktop-UPower-Wakeups.GetData">GetData()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
         *
         * This method will free `invocation,` you cannot use it afterwards.
         * @param invocation A #GDBusMethodInvocation.
         * @param data Parameter to return.
         */
        complete_get_data(invocation: Gio.DBusMethodInvocation, data: GLib.Variant): void;
        /**
         * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-freedesktop-UPower-Wakeups.GetTotal">GetTotal()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
         *
         * This method will free `invocation,` you cannot use it afterwards.
         * @param invocation A #GDBusMethodInvocation.
         * @param value Parameter to return.
         */
        complete_get_total(invocation: Gio.DBusMethodInvocation, value: number): void;
        /**
         * Emits the <link linkend="gdbus-signal-org-freedesktop-UPower-Wakeups.DataChanged">"DataChanged"</link> D-Bus signal.
         */
        emit_data_changed(): void;
        /**
         * Emits the <link linkend="gdbus-signal-org-freedesktop-UPower-Wakeups.TotalChanged">"TotalChanged"</link> D-Bus signal.
         * @param arg_value Argument to pass with the signal.
         */
        emit_total_changed(arg_value: number): void;

        // Virtual methods

        vfunc_data_changed(): void;
        vfunc_handle_get_data(invocation: Gio.DBusMethodInvocation): boolean;
        vfunc_handle_get_total(invocation: Gio.DBusMethodInvocation): boolean;
        vfunc_total_changed(arg_value: number): void;
    }

    export const WakeupsGlue: WakeupsGlueNamespace;

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
