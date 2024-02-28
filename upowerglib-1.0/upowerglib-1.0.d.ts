/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './upowerglib-1.0-ambient.d.ts';
import './upowerglib-1.0-import.d.ts';
/**
 * UPowerGlib-1.0
 */

import type Gio from '@girs/gio-2.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';

export namespace UPowerGlib {
    /**
     * The device type.
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
        LAST,
    }
    /**
     * The warning level of a battery.
     */
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
    function client_glue_override_properties(klass: GObject.ObjectClass, property_id_begin: number): number;
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
    function device_glue_override_properties(klass: GObject.ObjectClass, property_id_begin: number): number;
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
    function wakeups_glue_override_properties(klass: GObject.ObjectClass, property_id_begin: number): number;
    module Client {
        // Signal callback interfaces

        interface DeviceAdded {
            (device: Device): void;
        }

        interface DeviceRemoved {
            (object_path: string): void;
        }

        // Constructor properties interface
    }

    class Client extends GObject.Object {
        // Own properties of UPowerGlib-1.0.Client

        /**
         * The daemon version.
         */
        readonly daemon_version: string;
        /**
         * The daemon version.
         */
        readonly daemonVersion: string;
        /**
         * If the laptop lid is closed.
         */
        readonly lid_is_closed: boolean;
        /**
         * If the laptop lid is closed.
         */
        readonly lidIsClosed: boolean;
        /**
         * If a laptop lid is present.
         */
        readonly lid_is_present: boolean;
        /**
         * If a laptop lid is present.
         */
        readonly lidIsPresent: boolean;
        /**
         * If the computer is on battery power.
         */
        readonly on_battery: boolean;
        /**
         * If the computer is on battery power.
         */
        readonly onBattery: boolean;

        // Constructors of UPowerGlib-1.0.Client

        static ['new'](): Client;

        // Owm methods of UPowerGlib-1.0.Client

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
    }

    /**
     * The #UpClientGlueProxy structure contains only private data and should only be accessed using the provided API.
     */
    class ClientGlueProxy extends Gio.DBusProxy {
        // Constructors of UPowerGlib-1.0.ClientGlueProxy

        static new_finish(res: Gio.AsyncResult): ClientGlueProxy;

        static new_for_bus_finish(res: Gio.AsyncResult): ClientGlueProxy;

        static new_for_bus_sync(
            bus_type: Gio.BusType,
            flags: Gio.DBusProxyFlags,
            name: string,
            object_path: string,
            cancellable?: Gio.Cancellable | null,
        ): ClientGlueProxy;

        static new_sync(
            connection: Gio.DBusConnection,
            flags: Gio.DBusProxyFlags,
            name: string | null,
            object_path: string,
            cancellable?: Gio.Cancellable | null,
        ): ClientGlueProxy;

        // Owm methods of UPowerGlib-1.0.ClientGlueProxy

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
    }

    module ClientGlueSkeleton {
        // Constructor properties interface
    }

    /**
     * The #UpClientGlueSkeleton structure contains only private data and should only be accessed using the provided API.
     */
    class ClientGlueSkeleton extends Gio.DBusInterfaceSkeleton {
        // Constructors of UPowerGlib-1.0.ClientGlueSkeleton

        static ['new'](): ClientGlueSkeleton;
    }

    module Device {
        // Constructor properties interface
    }

    class Device extends GObject.Object {
        // Own properties of UPowerGlib-1.0.Device

        /**
         * The percentage capacity of the device where 100% means the device has
         * the same charge potential as when it was manufactured.
         */
        capacity: number;
        /**
         * The energy left in the device. Measured in mWh.
         */
        energy: number;
        /**
         * The energy the device will have when it is empty. This is usually zero.
         * Measured in mWh.
         */
        energy_empty: number;
        /**
         * The energy the device will have when it is empty. This is usually zero.
         * Measured in mWh.
         */
        energyEmpty: number;
        /**
         * The amount of energy when the device is fully charged. Measured in mWh.
         */
        energy_full: number;
        /**
         * The amount of energy when the device is fully charged. Measured in mWh.
         */
        energyFull: number;
        /**
         * The amount of energy when the device was brand new. Measured in mWh.
         */
        energy_full_design: number;
        /**
         * The amount of energy when the device was brand new. Measured in mWh.
         */
        energyFullDesign: number;
        /**
         * The rate of discharge or charge. Measured in mW.
         */
        energy_rate: number;
        /**
         * The rate of discharge or charge. Measured in mW.
         */
        energyRate: number;
        /**
         * If the device has history data that might be useful.
         */
        has_history: boolean;
        /**
         * If the device has history data that might be useful.
         */
        hasHistory: boolean;
        /**
         * If the device has statistics data that might be useful.
         */
        has_statistics: boolean;
        /**
         * If the device has statistics data that might be useful.
         */
        hasStatistics: boolean;
        /**
         * The icon name, following the Icon Naming Speficiation
         */
        icon_name: string;
        /**
         * The icon name, following the Icon Naming Speficiation
         */
        iconName: string;
        /**
         * If the device is present, as some devices like laptop batteries
         * can be removed, leaving an empty bay that is still technically a
         * device.
         */
        is_present: boolean;
        /**
         * If the device is present, as some devices like laptop batteries
         * can be removed, leaving an empty bay that is still technically a
         * device.
         */
        isPresent: boolean;
        /**
         * If the device has a rechargable battery.
         */
        is_rechargeable: boolean;
        /**
         * If the device has a rechargable battery.
         */
        isRechargeable: boolean;
        /**
         * The device kind, e.g. %UP_DEVICE_KIND_KEYBOARD.
         */
        kind: number;
        /**
         * The current luminosity of the device.
         */
        luminosity: number;
        /**
         * The model of the device.
         */
        model: string;
        /**
         * The native path of the device, useful for direct device access.
         */
        native_path: string;
        /**
         * The native path of the device, useful for direct device access.
         */
        nativePath: string;
        /**
         * If the device is online, i.e. connected.
         */
        online: boolean;
        /**
         * The percentage charge of the device.
         */
        percentage: number;
        /**
         * If the device is powering the system.
         */
        power_supply: boolean;
        /**
         * If the device is powering the system.
         */
        powerSupply: boolean;
        /**
         * The serial number of the device.
         */
        serial: string;
        /**
         * The state the device is in at this time, e.g. %UP_DEVICE_STATE_EMPTY.
         */
        state: number;
        /**
         * The battery technology e.g. %UP_DEVICE_TECHNOLOGY_LITHIUM_ION.
         */
        technology: number;
        /**
         * The temperature of the device in degrees Celsius.
         */
        temperature: number;
        /**
         * The amount of time until the device is empty.
         */
        time_to_empty: number;
        /**
         * The amount of time until the device is empty.
         */
        timeToEmpty: number;
        /**
         * The amount of time until the device is fully charged.
         */
        time_to_full: number;
        /**
         * The amount of time until the device is fully charged.
         */
        timeToFull: number;
        /**
         * The last time the device was updated.
         */
        update_time: number;
        /**
         * The last time the device was updated.
         */
        updateTime: number;
        /**
         * The vendor of the device.
         */
        vendor: string;
        /**
         * The current voltage of the device.
         */
        voltage: number;
        /**
         * The warning level e.g. %UP_DEVICE_LEVEL_WARNING.
         */
        warning_level: number;
        /**
         * The warning level e.g. %UP_DEVICE_LEVEL_WARNING.
         */
        warningLevel: number;

        // Constructors of UPowerGlib-1.0.Device

        static ['new'](): Device;

        // Owm methods of UPowerGlib-1.0.Device

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

        // Owm methods of UPowerGlib-1.0.Device

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
    }

    /**
     * The #UpDeviceGlueProxy structure contains only private data and should only be accessed using the provided API.
     */
    class DeviceGlueProxy extends Gio.DBusProxy {
        // Constructors of UPowerGlib-1.0.DeviceGlueProxy

        static new_finish(res: Gio.AsyncResult): DeviceGlueProxy;

        static new_for_bus_finish(res: Gio.AsyncResult): DeviceGlueProxy;

        static new_for_bus_sync(
            bus_type: Gio.BusType,
            flags: Gio.DBusProxyFlags,
            name: string,
            object_path: string,
            cancellable?: Gio.Cancellable | null,
        ): DeviceGlueProxy;

        static new_sync(
            connection: Gio.DBusConnection,
            flags: Gio.DBusProxyFlags,
            name: string | null,
            object_path: string,
            cancellable?: Gio.Cancellable | null,
        ): DeviceGlueProxy;

        // Owm methods of UPowerGlib-1.0.DeviceGlueProxy

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
    }

    module DeviceGlueSkeleton {
        // Constructor properties interface
    }

    /**
     * The #UpDeviceGlueSkeleton structure contains only private data and should only be accessed using the provided API.
     */
    class DeviceGlueSkeleton extends Gio.DBusInterfaceSkeleton {
        // Constructors of UPowerGlib-1.0.DeviceGlueSkeleton

        static ['new'](): DeviceGlueSkeleton;
    }

    module HistoryItem {
        // Constructor properties interface
    }

    class HistoryItem extends GObject.Object {
        // Own properties of UPowerGlib-1.0.HistoryItem

        state: number;
        time: number;
        value: number;

        // Constructors of UPowerGlib-1.0.HistoryItem

        static ['new'](): HistoryItem;

        // Owm methods of UPowerGlib-1.0.HistoryItem

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
    }

    class StatsItem extends GObject.Object {
        // Own properties of UPowerGlib-1.0.StatsItem

        accuracy: number;
        value: number;

        // Constructors of UPowerGlib-1.0.StatsItem

        static ['new'](): StatsItem;

        // Owm methods of UPowerGlib-1.0.StatsItem

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
    }

    class WakeupItem extends GObject.Object {
        // Own properties of UPowerGlib-1.0.WakeupItem

        cmdline: string;
        details: string;
        id: number;
        is_userspace: boolean;
        isUserspace: boolean;
        old: number;
        value: number;

        // Constructors of UPowerGlib-1.0.WakeupItem

        static ['new'](): WakeupItem;

        // Owm methods of UPowerGlib-1.0.WakeupItem

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
    }

    class Wakeups extends GObject.Object {
        // Constructors of UPowerGlib-1.0.Wakeups

        static ['new'](): Wakeups;

        // Owm methods of UPowerGlib-1.0.Wakeups

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
    }

    /**
     * The #UpWakeupsGlueProxy structure contains only private data and should only be accessed using the provided API.
     */
    class WakeupsGlueProxy extends Gio.DBusProxy {
        // Constructors of UPowerGlib-1.0.WakeupsGlueProxy

        static new_finish(res: Gio.AsyncResult): WakeupsGlueProxy;

        static new_for_bus_finish(res: Gio.AsyncResult): WakeupsGlueProxy;

        static new_for_bus_sync(
            bus_type: Gio.BusType,
            flags: Gio.DBusProxyFlags,
            name: string,
            object_path: string,
            cancellable?: Gio.Cancellable | null,
        ): WakeupsGlueProxy;

        static new_sync(
            connection: Gio.DBusConnection,
            flags: Gio.DBusProxyFlags,
            name: string | null,
            object_path: string,
            cancellable?: Gio.Cancellable | null,
        ): WakeupsGlueProxy;

        // Owm methods of UPowerGlib-1.0.WakeupsGlueProxy

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
    }

    module WakeupsGlueSkeleton {
        // Constructor properties interface
    }

    /**
     * The #UpWakeupsGlueSkeleton structure contains only private data and should only be accessed using the provided API.
     */
    class WakeupsGlueSkeleton extends Gio.DBusInterfaceSkeleton {
        // Constructors of UPowerGlib-1.0.WakeupsGlueSkeleton

        static ['new'](): WakeupsGlueSkeleton;
    }

    class ClientClass {}

    /**
     * Virtual table for the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-UPower.top_of_page">org.freedesktop.UPower</link>.
     */
    class ClientGlueIface {}

    /**
     * Class structure for #UpClientGlueProxy.
     */
    class ClientGlueProxyClass {}

    class ClientGlueProxyPrivate {}

    /**
     * Class structure for #UpClientGlueSkeleton.
     */
    class ClientGlueSkeletonClass {}

    class ClientGlueSkeletonPrivate {}

    /**
     * Private #UpClient data
     */
    class ClientPrivate {}

    class DeviceClass {}

    /**
     * Virtual table for the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-UPower-Device.top_of_page">org.freedesktop.UPower.Device</link>.
     */
    class DeviceGlueIface {}

    /**
     * Class structure for #UpDeviceGlueProxy.
     */
    class DeviceGlueProxyClass {}

    class DeviceGlueProxyPrivate {}

    /**
     * Class structure for #UpDeviceGlueSkeleton.
     */
    class DeviceGlueSkeletonClass {}

    class DeviceGlueSkeletonPrivate {}

    /**
     * Private #PkDevice data
     */
    class DevicePrivate {}

    class HistoryItemClass {}

    class HistoryItemPrivate {}

    class StatsItemClass {}

    class StatsItemPrivate {}

    class WakeupItemClass {}

    class WakeupItemPrivate {}

    class WakeupsClass {}

    /**
     * Virtual table for the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-UPower-Wakeups.top_of_page">org.freedesktop.UPower.Wakeups</link>.
     */
    class WakeupsGlueIface {}

    /**
     * Class structure for #UpWakeupsGlueProxy.
     */
    class WakeupsGlueProxyClass {}

    class WakeupsGlueProxyPrivate {}

    /**
     * Class structure for #UpWakeupsGlueSkeleton.
     */
    class WakeupsGlueSkeletonClass {}

    class WakeupsGlueSkeletonPrivate {}

    class WakeupsPrivate {}

    interface ClientGlue {
        // Own properties of UPowerGlib-1.0.ClientGlue

        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UPower.DaemonVersion">"DaemonVersion"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        daemon_version: string;
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UPower.DaemonVersion">"DaemonVersion"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        daemonVersion: string;
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UPower.LidIsClosed">"LidIsClosed"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        lid_is_closed: boolean;
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UPower.LidIsClosed">"LidIsClosed"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        lidIsClosed: boolean;
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UPower.LidIsPresent">"LidIsPresent"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        lid_is_present: boolean;
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UPower.LidIsPresent">"LidIsPresent"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        lidIsPresent: boolean;
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UPower.OnBattery">"OnBattery"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        on_battery: boolean;
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UPower.OnBattery">"OnBattery"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        onBattery: boolean;

        // Owm methods of UPowerGlib-1.0.ClientGlue

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
        call_enumerate_devices_finish(res: Gio.AsyncResult): boolean;
        /**
         * Synchronously invokes the <link linkend="gdbus-method-org-freedesktop-UPower.EnumerateDevices">EnumerateDevices()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
         *
         * See up_client_glue_call_enumerate_devices() for the asynchronous version of this method.
         * @param cancellable A #GCancellable or %NULL.
         * @returns %TRUE if the call succeded, %FALSE if @error is set.
         */
        call_enumerate_devices_sync(cancellable?: Gio.Cancellable | null): boolean;
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
        call_get_critical_action_finish(res: Gio.AsyncResult): boolean;
        /**
         * Synchronously invokes the <link linkend="gdbus-method-org-freedesktop-UPower.GetCriticalAction">GetCriticalAction()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
         *
         * See up_client_glue_call_get_critical_action() for the asynchronous version of this method.
         * @param cancellable A #GCancellable or %NULL.
         * @returns %TRUE if the call succeded, %FALSE if @error is set.
         */
        call_get_critical_action_sync(cancellable?: Gio.Cancellable | null): boolean;
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
        call_get_display_device_finish(res: Gio.AsyncResult): boolean;
        /**
         * Synchronously invokes the <link linkend="gdbus-method-org-freedesktop-UPower.GetDisplayDevice">GetDisplayDevice()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
         *
         * See up_client_glue_call_get_display_device() for the asynchronous version of this method.
         * @param cancellable A #GCancellable or %NULL.
         * @returns %TRUE if the call succeded, %FALSE if @error is set.
         */
        call_get_display_device_sync(cancellable?: Gio.Cancellable | null): boolean;
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

        // Own virtual methods of UPowerGlib-1.0.ClientGlue

        vfunc_device_added(arg_device: string): void;
        vfunc_device_removed(arg_device: string): void;
        vfunc_handle_enumerate_devices(invocation: Gio.DBusMethodInvocation): boolean;
        vfunc_handle_get_critical_action(invocation: Gio.DBusMethodInvocation): boolean;
        vfunc_handle_get_display_device(invocation: Gio.DBusMethodInvocation): boolean;
    }

    interface DeviceGlue {
        // Own properties of UPowerGlib-1.0.DeviceGlue

        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UPower-Device.Capacity">"Capacity"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        capacity: number;
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UPower-Device.Energy">"Energy"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        energy: number;
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UPower-Device.EnergyEmpty">"EnergyEmpty"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        energy_empty: number;
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UPower-Device.EnergyEmpty">"EnergyEmpty"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        energyEmpty: number;
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UPower-Device.EnergyFull">"EnergyFull"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        energy_full: number;
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UPower-Device.EnergyFull">"EnergyFull"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        energyFull: number;
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UPower-Device.EnergyFullDesign">"EnergyFullDesign"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        energy_full_design: number;
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UPower-Device.EnergyFullDesign">"EnergyFullDesign"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        energyFullDesign: number;
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UPower-Device.EnergyRate">"EnergyRate"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        energy_rate: number;
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UPower-Device.EnergyRate">"EnergyRate"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        energyRate: number;
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UPower-Device.HasHistory">"HasHistory"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        has_history: boolean;
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UPower-Device.HasHistory">"HasHistory"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        hasHistory: boolean;
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UPower-Device.HasStatistics">"HasStatistics"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        has_statistics: boolean;
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UPower-Device.HasStatistics">"HasStatistics"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        hasStatistics: boolean;
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UPower-Device.IconName">"IconName"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        icon_name: string;
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UPower-Device.IconName">"IconName"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        iconName: string;
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UPower-Device.IsPresent">"IsPresent"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        is_present: boolean;
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UPower-Device.IsPresent">"IsPresent"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        isPresent: boolean;
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UPower-Device.IsRechargeable">"IsRechargeable"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        is_rechargeable: boolean;
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UPower-Device.IsRechargeable">"IsRechargeable"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        isRechargeable: boolean;
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UPower-Device.Luminosity">"Luminosity"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        luminosity: number;
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UPower-Device.Model">"Model"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        model: string;
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UPower-Device.NativePath">"NativePath"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        native_path: string;
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UPower-Device.NativePath">"NativePath"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        nativePath: string;
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UPower-Device.Online">"Online"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        online: boolean;
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UPower-Device.Percentage">"Percentage"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        percentage: number;
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UPower-Device.PowerSupply">"PowerSupply"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        power_supply: boolean;
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UPower-Device.PowerSupply">"PowerSupply"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        powerSupply: boolean;
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UPower-Device.Serial">"Serial"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        serial: string;
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UPower-Device.State">"State"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        state: number;
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UPower-Device.Technology">"Technology"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        technology: number;
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UPower-Device.Temperature">"Temperature"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        temperature: number;
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UPower-Device.TimeToEmpty">"TimeToEmpty"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        time_to_empty: number;
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UPower-Device.TimeToEmpty">"TimeToEmpty"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        timeToEmpty: number;
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UPower-Device.TimeToFull">"TimeToFull"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        time_to_full: number;
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UPower-Device.TimeToFull">"TimeToFull"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        timeToFull: number;
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UPower-Device.Type">"Type"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        type: number;
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UPower-Device.UpdateTime">"UpdateTime"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        update_time: number;
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UPower-Device.UpdateTime">"UpdateTime"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        updateTime: number;
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UPower-Device.Vendor">"Vendor"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        vendor: string;
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UPower-Device.Voltage">"Voltage"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        voltage: number;
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UPower-Device.WarningLevel">"WarningLevel"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        warning_level: number;
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UPower-Device.WarningLevel">"WarningLevel"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        warningLevel: number;

        // Owm methods of UPowerGlib-1.0.DeviceGlue

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
        call_get_history_finish(res: Gio.AsyncResult): boolean;
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
        ): boolean;
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
        call_get_statistics_finish(res: Gio.AsyncResult): boolean;
        /**
         * Synchronously invokes the <link linkend="gdbus-method-org-freedesktop-UPower-Device.GetStatistics">GetStatistics()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
         *
         * See up_device_glue_call_get_statistics() for the asynchronous version of this method.
         * @param arg_type Argument to pass with the method invocation.
         * @param cancellable A #GCancellable or %NULL.
         * @returns %TRUE if the call succeded, %FALSE if @error is set.
         */
        call_get_statistics_sync(arg_type: string, cancellable?: Gio.Cancellable | null): boolean;
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

        // Own virtual methods of UPowerGlib-1.0.DeviceGlue

        vfunc_handle_get_history(
            invocation: Gio.DBusMethodInvocation,
            arg_type: string,
            arg_timespan: number,
            arg_resolution: number,
        ): boolean;
        vfunc_handle_get_statistics(invocation: Gio.DBusMethodInvocation, arg_type: string): boolean;
        vfunc_handle_refresh(invocation: Gio.DBusMethodInvocation): boolean;
    }

    interface WakeupsGlue {
        // Own properties of UPowerGlib-1.0.WakeupsGlue

        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UPower-Wakeups.HasCapability">"HasCapability"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        has_capability: boolean;
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UPower-Wakeups.HasCapability">"HasCapability"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        hasCapability: boolean;

        // Owm methods of UPowerGlib-1.0.WakeupsGlue

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
        call_get_data_finish(res: Gio.AsyncResult): boolean;
        /**
         * Synchronously invokes the <link linkend="gdbus-method-org-freedesktop-UPower-Wakeups.GetData">GetData()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
         *
         * See up_wakeups_glue_call_get_data() for the asynchronous version of this method.
         * @param cancellable A #GCancellable or %NULL.
         * @returns %TRUE if the call succeded, %FALSE if @error is set.
         */
        call_get_data_sync(cancellable?: Gio.Cancellable | null): boolean;
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
        call_get_total_finish(res: Gio.AsyncResult): boolean;
        /**
         * Synchronously invokes the <link linkend="gdbus-method-org-freedesktop-UPower-Wakeups.GetTotal">GetTotal()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
         *
         * See up_wakeups_glue_call_get_total() for the asynchronous version of this method.
         * @param cancellable A #GCancellable or %NULL.
         * @returns %TRUE if the call succeded, %FALSE if @error is set.
         */
        call_get_total_sync(cancellable?: Gio.Cancellable | null): boolean;
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

        // Own virtual methods of UPowerGlib-1.0.WakeupsGlue

        vfunc_data_changed(): void;
        vfunc_handle_get_data(invocation: Gio.DBusMethodInvocation): boolean;
        vfunc_handle_get_total(invocation: Gio.DBusMethodInvocation): boolean;
        vfunc_total_changed(arg_value: number): void;
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
