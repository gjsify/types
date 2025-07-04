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

export namespace GnomeBluetooth {
    /**
     * GnomeBluetooth-3.0
     */

    /**
     * A more precise power state for a Bluetooth adapter.
     */

    /**
     * A more precise power state for a Bluetooth adapter.
     */
    export namespace AdapterState {
        export const $gtype: GObject.GType<AdapterState>;
    }

    enum AdapterState {
        /**
         * Bluetooth adapter is missing.
         */
        ABSENT,
        /**
         * Bluetooth adapter is on.
         */
        ON,
        /**
         * Bluetooth adapter is being turned on.
         */
        TURNING_ON,
        /**
         * Bluetooth adapter is being turned off.
         */
        TURNING_OFF,
        /**
         * Bluetooth adapter is off.
         */
        OFF,
    }
    /**
     * The type of battery reporting supported by the device.
     */

    /**
     * The type of battery reporting supported by the device.
     */
    export namespace BatteryType {
        export const $gtype: GObject.GType<BatteryType>;
    }

    enum BatteryType {
        /**
         * no battery reporting
         */
        NONE,
        /**
         * battery reported in percentage
         */
        PERCENTAGE,
        /**
         * battery reported coarsely
         */
        COARSE,
    }
    /**
     * Use this value to select any Bluetooth audio device where a #BluetoothType enum is required.
     */
    const TYPE_AUDIO: number;
    /**
     * Use this value to select any Bluetooth input device where a #BluetoothType enum is required.
     */
    const TYPE_INPUT: number;
    /**
     * Returns the type of device corresponding to the given `appearance` value,
     * as usually found in the GAP service.
     * @param appearance a Bluetooth device appearance
     * @returns a #BluetoothType.
     */
    function appearance_to_type(appearance: number): Type;
    /**
     * Returns the type of device corresponding to the given `class` value.
     * @param _class a Bluetooth device class
     * @returns a #BluetoothType.
     */
    function class_to_type(_class: number): Type;
    /**
     * Start a GUI application for transferring files over Bluetooth.
     * @param address Remote device to use
     * @param alias Remote device's name
     * @returns %TRUE on success, %FALSE on error.
     */
    function send_to_address(address: string, alias: string): boolean;
    /**
     * Returns a human-readable string representation of `type` usable for display to users. Do not free the return value.
     * The returned string is already translated with gettext().
     * @param type a #BluetoothType
     * @returns a string.
     */
    function type_to_string(type: number): string;
    /**
     * Returns a string representing a human-readable (but not usable for display to users) version of the `uuid`. Do not free the return value.
     * @param uuid a string representing a Bluetooth UUID
     * @returns a string.
     */
    function uuid_to_string(uuid: string): string;
    /**
     * Returns whether the string is a valid Bluetooth address. This does not contact the device in any way.
     * @param bdaddr a string representing a Bluetooth address
     * @returns %TRUE if the address is valid, %FALSE if not.
     */
    function verify_address(bdaddr: string): boolean;
    /**
     * The type of a Bluetooth device. See also %BLUETOOTH_TYPE_INPUT and %BLUETOOTH_TYPE_AUDIO
     */

    /**
     * The type of a Bluetooth device. See also %BLUETOOTH_TYPE_INPUT and %BLUETOOTH_TYPE_AUDIO
     */
    export namespace Type {
        export const $gtype: GObject.GType<Type>;
    }

    enum Type {
        /**
         * any device, or a device of an unknown type
         */
        ANY,
        /**
         * a telephone (usually a cell/mobile phone)
         */
        PHONE,
        /**
         * a modem
         */
        MODEM,
        /**
         * a computer, can be a laptop, a wearable computer, etc.
         */
        COMPUTER,
        /**
         * a network device, such as a router
         */
        NETWORK,
        /**
         * a headset (usually a hands-free device)
         */
        HEADSET,
        /**
         * headphones (covers two ears)
         */
        HEADPHONES,
        /**
         * another type of audio device
         */
        OTHER_AUDIO,
        /**
         * a keyboard
         */
        KEYBOARD,
        /**
         * a mouse
         */
        MOUSE,
        /**
         * a camera (still or moving)
         */
        CAMERA,
        /**
         * a printer
         */
        PRINTER,
        /**
         * a joypad, joystick, or other game controller
         */
        JOYPAD,
        /**
         * a drawing tablet
         */
        TABLET,
        /**
         * a video device, such as a webcam
         */
        VIDEO,
        /**
         * a remote control
         */
        REMOTE_CONTROL,
        /**
         * a scanner
         */
        SCANNER,
        /**
         * a display
         */
        DISPLAY,
        /**
         * a wearable computer
         */
        WEARABLE,
        /**
         * a toy or game
         */
        TOY,
        /**
         * audio speaker or speakers
         */
        SPEAKERS,
    }
    namespace Client {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'device-added': (arg0: GObject.Object) => void;
            'device-removed': (arg0: string) => void;
            'notify::default-adapter': (pspec: GObject.ParamSpec) => void;
            'notify::default-adapter-address': (pspec: GObject.ParamSpec) => void;
            'notify::default-adapter-name': (pspec: GObject.ParamSpec) => void;
            'notify::default-adapter-powered': (pspec: GObject.ParamSpec) => void;
            'notify::default-adapter-setup-mode': (pspec: GObject.ParamSpec) => void;
            'notify::default-adapter-state': (pspec: GObject.ParamSpec) => void;
            'notify::num-adapters': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            default_adapter: string;
            defaultAdapter: string;
            default_adapter_address: string;
            defaultAdapterAddress: string;
            default_adapter_name: string;
            defaultAdapterName: string;
            default_adapter_powered: boolean;
            defaultAdapterPowered: boolean;
            default_adapter_setup_mode: boolean;
            defaultAdapterSetupMode: boolean;
            default_adapter_state: AdapterState;
            defaultAdapterState: AdapterState;
            num_adapters: number;
            numAdapters: number;
        }
    }

    class Client extends GObject.Object {
        static $gtype: GObject.GType<Client>;

        // Properties

        /**
         * The D-Bus path of the default Bluetooth adapter or %NULL.
         */
        get default_adapter(): string;
        /**
         * The D-Bus path of the default Bluetooth adapter or %NULL.
         */
        get defaultAdapter(): string;
        /**
         * The address of the default Bluetooth adapter or %NULL.
         */
        get default_adapter_address(): string;
        /**
         * The address of the default Bluetooth adapter or %NULL.
         */
        get defaultAdapterAddress(): string;
        /**
         * The name of the default Bluetooth adapter or %NULL.
         */
        get default_adapter_name(): string;
        /**
         * The name of the default Bluetooth adapter or %NULL.
         */
        get defaultAdapterName(): string;
        /**
         * %TRUE if the default Bluetooth adapter is powered.
         */
        get default_adapter_powered(): boolean;
        set default_adapter_powered(val: boolean);
        /**
         * %TRUE if the default Bluetooth adapter is powered.
         */
        get defaultAdapterPowered(): boolean;
        set defaultAdapterPowered(val: boolean);
        /**
         * %TRUE if the default Bluetooth adapter is in setup mode (discoverable, and discovering).
         */
        get default_adapter_setup_mode(): boolean;
        set default_adapter_setup_mode(val: boolean);
        /**
         * %TRUE if the default Bluetooth adapter is in setup mode (discoverable, and discovering).
         */
        get defaultAdapterSetupMode(): boolean;
        set defaultAdapterSetupMode(val: boolean);
        /**
         * The #BluetoothAdapterState of the default Bluetooth adapter. More precise than
         * #BluetoothClient:default-adapter-powered.
         */
        get default_adapter_state(): AdapterState;
        /**
         * The #BluetoothAdapterState of the default Bluetooth adapter. More precise than
         * #BluetoothClient:default-adapter-powered.
         */
        get defaultAdapterState(): AdapterState;
        /**
         * The number of detected Bluetooth adapters.
         */
        get num_adapters(): number;
        /**
         * The number of detected Bluetooth adapters.
         */
        get numAdapters(): number;

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

        // Signals

        connect<K extends keyof Client.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Client.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Client.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Client.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Client.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Client.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * This will start the process of connecting to one of the known-connectable
         * services on the device. This means that it could connect to all the audio
         * services on a headset, but just to the input service on a keyboard.
         *
         * Broadly speaking, this will only have an effect on devices with audio and HID
         * services, and do nothing if the device doesn't have the "connectable"
         * property set.
         *
         * When the connection operation is finished, `callback` will be called. You can
         * then call bluetooth_client_connect_service_finish() to get the result of the
         * operation.
         * @param path the object path on which to operate
         * @param connect Whether try to connect or disconnect from services on a device
         * @param cancellable optional #GCancellable object, %NULL to ignore
         */
        connect_service(
            path: string,
            connect: boolean,
            cancellable?: Gio.Cancellable | null,
        ): globalThis.Promise<boolean>;
        /**
         * This will start the process of connecting to one of the known-connectable
         * services on the device. This means that it could connect to all the audio
         * services on a headset, but just to the input service on a keyboard.
         *
         * Broadly speaking, this will only have an effect on devices with audio and HID
         * services, and do nothing if the device doesn't have the "connectable"
         * property set.
         *
         * When the connection operation is finished, `callback` will be called. You can
         * then call bluetooth_client_connect_service_finish() to get the result of the
         * operation.
         * @param path the object path on which to operate
         * @param connect Whether try to connect or disconnect from services on a device
         * @param cancellable optional #GCancellable object, %NULL to ignore
         * @param callback a #GAsyncReadyCallback to call when the connection is complete
         */
        connect_service(
            path: string,
            connect: boolean,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * This will start the process of connecting to one of the known-connectable
         * services on the device. This means that it could connect to all the audio
         * services on a headset, but just to the input service on a keyboard.
         *
         * Broadly speaking, this will only have an effect on devices with audio and HID
         * services, and do nothing if the device doesn't have the "connectable"
         * property set.
         *
         * When the connection operation is finished, `callback` will be called. You can
         * then call bluetooth_client_connect_service_finish() to get the result of the
         * operation.
         * @param path the object path on which to operate
         * @param connect Whether try to connect or disconnect from services on a device
         * @param cancellable optional #GCancellable object, %NULL to ignore
         * @param callback a #GAsyncReadyCallback to call when the connection is complete
         */
        connect_service(
            path: string,
            connect: boolean,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<boolean> | void;
        /**
         * Finishes the connection operation. See bluetooth_client_connect_service().
         * @param res a #GAsyncResult
         * @returns %TRUE if the connection operation succeeded, %FALSE otherwise.
         */
        connect_service_finish(res: Gio.AsyncResult): boolean;
        /**
         * Returns an unfiltered #GListStore representing the devices attached to the default
         * Bluetooth adapter.
         * @returns a #GListStore
         */
        get_devices(): Gio.ListStore;
        /**
         * Returns whether there are connected devices with the input capability.
         * This can be used by an OS user interface to warn the user before disabling
         * Bluetooth so that the user isn't stranded without any input devices.
         * @returns %TRUE if there are connected input devices.
         */
        has_connected_input_devices(): boolean;
    }

    namespace Device {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::address': (pspec: GObject.ParamSpec) => void;
            'notify::alias': (pspec: GObject.ParamSpec) => void;
            'notify::battery-level': (pspec: GObject.ParamSpec) => void;
            'notify::battery-percentage': (pspec: GObject.ParamSpec) => void;
            'notify::battery-type': (pspec: GObject.ParamSpec) => void;
            'notify::connectable': (pspec: GObject.ParamSpec) => void;
            'notify::connected': (pspec: GObject.ParamSpec) => void;
            'notify::icon': (pspec: GObject.ParamSpec) => void;
            'notify::legacy-pairing': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::paired': (pspec: GObject.ParamSpec) => void;
            'notify::proxy': (pspec: GObject.ParamSpec) => void;
            'notify::trusted': (pspec: GObject.ParamSpec) => void;
            'notify::type': (pspec: GObject.ParamSpec) => void;
            'notify::uuids': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            address: string;
            alias: string;
            battery_level: number;
            batteryLevel: number;
            battery_percentage: number;
            batteryPercentage: number;
            battery_type: BatteryType;
            batteryType: BatteryType;
            connectable: boolean;
            connected: boolean;
            icon: string;
            legacy_pairing: boolean;
            legacyPairing: boolean;
            name: string;
            paired: boolean;
            proxy: Gio.DBusProxy;
            trusted: boolean;
            type: Type;
            uuids: string[];
        }
    }

    class Device extends GObject.Object {
        static $gtype: GObject.GType<Device>;

        // Properties

        get address(): string;
        set address(val: string);
        get alias(): string;
        set alias(val: string);
        get battery_level(): number;
        set battery_level(val: number);
        get batteryLevel(): number;
        set batteryLevel(val: number);
        get battery_percentage(): number;
        set battery_percentage(val: number);
        get batteryPercentage(): number;
        set batteryPercentage(val: number);
        get battery_type(): BatteryType;
        set battery_type(val: BatteryType);
        get batteryType(): BatteryType;
        set batteryType(val: BatteryType);
        get connectable(): boolean;
        get connected(): boolean;
        set connected(val: boolean);
        get icon(): string;
        set icon(val: string);
        get legacy_pairing(): boolean;
        set legacy_pairing(val: boolean);
        get legacyPairing(): boolean;
        set legacyPairing(val: boolean);
        get name(): string;
        set name(val: string);
        get paired(): boolean;
        set paired(val: boolean);
        get proxy(): Gio.DBusProxy;
        set proxy(val: Gio.DBusProxy);
        get trusted(): boolean;
        set trusted(val: boolean);
        get type(): Type;
        set type(val: Type);
        get uuids(): string[];
        set uuids(val: string[]);

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

        // Signals

        connect<K extends keyof Device.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Device.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Device.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Device.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Device.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Device.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        dump(): void;
        get_object_path(): string;
        to_string(): string;
    }

    type ClientClass = typeof Client;
    type DeviceClass = typeof Device;
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

export default GnomeBluetooth;

// END
