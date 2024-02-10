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
import type GModule from '@girs/gmodule-2.0';

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
     * %UP_DEVICE_LEVEL_ACTION are relevant for the #WarningLevel.
     * The #BatteryLevel only uses the following values:
     * - %UP_DEVICE_LEVEL_UNKNOWN
     * - %UP_DEVICE_LEVEL_NONE
     * - %UP_DEVICE_LEVEL_LOW
     * - %UP_DEVICE_LEVEL_CRITICAL
     * - %UP_DEVICE_LEVEL_NORMAL
     * - %UP_DEVICE_LEVEL_HIGH
     * - %UP_DEVICE_LEVEL_FULL
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

        static new_finish(res: Gio.AsyncResult): Client;

        static new_full(cancellable?: Gio.Cancellable | null): Client;

        // Owm methods of UPowerGlib-1.0.Client

        /**
         * Asynchronously creates a new #UpClient object.
         *
         * This is an asynchronous failable function.
         * @param cancellable a #GCancellable or %NULL
         * @param callback a #GAsyncReadyCallback to call when the request is satisfied
         */
        static new_async(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<Client> | null): void;

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
         * Get a copy of the device objects. This function does not set the free
         * function for the #GPtrArray so you need use g_object_unref on all
         * elements when you are finished with the array.
         * @returns an array of #UpDevice objects or %NULL on error, free with g_ptr_array_unref()
         */
        get_devices(): Device[];
        /**
         * Get a copy of the device objects.
         * @returns an array of #UpDevice objects or %NULL on error, free with g_ptr_array_unref()
         */
        get_devices2(): Device[];
        /**
         * Asynchronously fetches the list of #UpDevice objects.
         * @param cancellable a #GCancellable or %NULL
         * @param callback a #GAsyncReadyCallback to call when the request is satisfied
         */
        get_devices_async(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): void;
        /**
         * Finishes an operation started with up_client_get_devices_async().
         * @param res a #GAsyncResult obtained from the #GAsyncReadyCallback passed     to up_client_get_devices_async()
         * @returns an array of     #UpDevice objects or %NULL on error.
         */
        get_devices_finish(res: Gio.AsyncResult): Device[];
        /**
         * Get the composite display device.
         * @returns a #UpDevice object, or %NULL on error.
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

    module Device {
        // Constructor properties interface
    }

    class Device extends GObject.Object {
        // Own properties of UPowerGlib-1.0.Device

        /**
         * The battery level, e.g. %UP_DEVICE_LEVEL_CRITICAL. If this is something
         * other than %UP_DEVICE_LEVEL_NONE, then User Interfaces should use this
         * approximate level instead of percentages.
         */
        battery_level: number;
        /**
         * The battery level, e.g. %UP_DEVICE_LEVEL_CRITICAL. If this is something
         * other than %UP_DEVICE_LEVEL_NONE, then User Interfaces should use this
         * approximate level instead of percentages.
         */
        batteryLevel: number;
        /**
         * The percentage capacity of the device where 100% means the device has
         * the same charge potential as when it was manufactured.
         */
        capacity: number;
        /**
         * The number of charge cycles for the battery, or -1 if unknown
         * or non-applicable.
         */
        charge_cycles: number;
        /**
         * The number of charge cycles for the battery, or -1 if unknown
         * or non-applicable.
         */
        chargeCycles: number;
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
         * The percentage charge of the device. Note that if the battery level property
         * is something other than %UP_DEVICE_LEVEL_NONE, then this percentage is an
         * approximation, and should not be used a number to display to the user.
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
         * The warning level e.g. %UP_DEVICE_LEVEL_CRITICAL.
         */
        warning_level: number;
        /**
         * The warning level e.g. %UP_DEVICE_LEVEL_CRITICAL.
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
         * This function is normally not required and will only return without
         * an error if the daemon was started in debug mode.
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

    class ClientClass {}

    /**
     * Private #UpClient data
     */
    class ClientPrivate {}

    class DeviceClass {}

    /**
     * Private #PkDevice data
     */
    class DevicePrivate {}

    class HistoryItemClass {}

    class HistoryItemPrivate {}

    class StatsItemClass {}

    class StatsItemPrivate {}

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
