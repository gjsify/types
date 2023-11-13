
/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './node-gnomebluetooth-3.0-import.d.ts';
    
/**
 * GnomeBluetooth-3.0
 */

import type Gio from '@girs/node-gio-2.0';
import type GObject from '@girs/node-gobject-2.0';
import type GLib from '@girs/node-glib-2.0';

/**
 * A more precise power state for a Bluetooth adapter.
 */
export enum AdapterState {
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
export enum BatteryType {
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
 * The type of a Bluetooth device. See also %BLUETOOTH_TYPE_INPUT and %BLUETOOTH_TYPE_AUDIO
 * @bitfield 
 */
export enum Type {
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
/**
 * Use this value to select any Bluetooth audio device where a #BluetoothType enum is required.
 */
export const TYPE_AUDIO: number
/**
 * Use this value to select any Bluetooth input device where a #BluetoothType enum is required.
 */
export const TYPE_INPUT: number
/**
 * Returns the type of device corresponding to the given `appearance` value,
 * as usually found in the GAP service.
 * @param appearance a Bluetooth device appearance
 * @returns a #BluetoothType.
 */
export function appearanceToType(appearance: number): Type
/**
 * Returns the type of device corresponding to the given `class` value.
 * @param class_ a Bluetooth device class
 * @returns a #BluetoothType.
 */
export function classToType(class_: number): Type
/**
 * Start a GUI application for transferring files over Bluetooth.
 * @param address Remote device to use
 * @param alias Remote device's name
 * @returns %TRUE on success, %FALSE on error.
 */
export function sendToAddress(address: string | null, alias: string | null): boolean
/**
 * Returns a human-readable string representation of `type` usable for display to users. Do not free the return value.
 * The returned string is already translated with gettext().
 * @param type a #BluetoothType
 * @returns a string.
 */
export function typeToString(type: number): string | null
/**
 * Returns a string representing a human-readable (but not usable for display to users) version of the `uuid`. Do not free the return value.
 * @param uuid a string representing a Bluetooth UUID
 * @returns a string.
 */
export function uuidToString(uuid: string | null): string | null
/**
 * Returns whether the string is a valid Bluetooth address. This does not contact the device in any way.
 * @param bdaddr a string representing a Bluetooth address
 * @returns %TRUE if the address is valid, %FALSE if not.
 */
export function verifyAddress(bdaddr: string | null): boolean
export module Client {

    // Signal callback interfaces

    /**
     * Signal callback interface for `device-added`
     */
    export interface DeviceAddedSignalCallback {
        (device: GObject.Object): void
    }

    /**
     * Signal callback interface for `device-removed`
     */
    export interface DeviceRemovedSignalCallback {
        (device: string | null): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of GnomeBluetooth-3.0.GnomeBluetooth.Client

        /**
         * %TRUE if the default Bluetooth adapter is powered.
         */
        defaultAdapterPowered?: boolean | null
        /**
         * %TRUE if the default Bluetooth adapter is in setup mode (discoverable, and discovering).
         */
        defaultAdapterSetupMode?: boolean | null
    }

}

export interface Client {

    // Own properties of GnomeBluetooth-3.0.GnomeBluetooth.Client

    /**
     * The D-Bus path of the default Bluetooth adapter or %NULL.
     */
    readonly defaultAdapter: string | null
    /**
     * The address of the default Bluetooth adapter or %NULL.
     */
    readonly defaultAdapterAddress: string | null
    /**
     * The name of the default Bluetooth adapter or %NULL.
     */
    readonly defaultAdapterName: string | null
    /**
     * %TRUE if the default Bluetooth adapter is powered.
     */
    defaultAdapterPowered: boolean
    /**
     * %TRUE if the default Bluetooth adapter is in setup mode (discoverable, and discovering).
     */
    defaultAdapterSetupMode: boolean
    /**
     * The #BluetoothAdapterState of the default Bluetooth adapter. More precise than
     * #BluetoothClient:default-adapter-powered.
     */
    readonly defaultAdapterState: AdapterState
    /**
     * The number of detected Bluetooth adapters.
     */
    readonly numAdapters: number
    __gtype__: number

    // Owm methods of GnomeBluetooth-3.0.GnomeBluetooth.Client

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
    connectService(path: string | null, connect: boolean, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes the connection operation. See bluetooth_client_connect_service().
     * @param res a #GAsyncResult
     * @returns %TRUE if the connection operation succeeded, %FALSE otherwise.
     */
    connectServiceFinish(res: Gio.AsyncResult): boolean
    /**
     * Returns an unfiltered #GListStore representing the devices attached to the default
     * Bluetooth adapter.
     * @returns a #GListStore
     */
    getDevices(): Gio.ListStore
    /**
     * Returns whether there are connected devices with the input capability.
     * This can be used by an OS user interface to warn the user before disabling
     * Bluetooth so that the user isn't stranded without any input devices.
     * @returns %TRUE if there are connected input devices.
     */
    hasConnectedInputDevices(): boolean

    // Own signals of GnomeBluetooth-3.0.GnomeBluetooth.Client

    connect(sigName: "device-added", callback: Client.DeviceAddedSignalCallback): number
    on(sigName: "device-added", callback: Client.DeviceAddedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "device-added", callback: Client.DeviceAddedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "device-added", callback: Client.DeviceAddedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "device-added", ...args: any[]): void
    connect(sigName: "device-removed", callback: Client.DeviceRemovedSignalCallback): number
    on(sigName: "device-removed", callback: Client.DeviceRemovedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "device-removed", callback: Client.DeviceRemovedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "device-removed", callback: Client.DeviceRemovedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "device-removed", ...args: any[]): void

    // Class property signals of GnomeBluetooth-3.0.GnomeBluetooth.Client

    connect(sigName: "notify::default-adapter", callback: (...args: any[]) => void): number
    on(sigName: "notify::default-adapter", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::default-adapter", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::default-adapter", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::default-adapter", ...args: any[]): void
    connect(sigName: "notify::default-adapter-address", callback: (...args: any[]) => void): number
    on(sigName: "notify::default-adapter-address", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::default-adapter-address", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::default-adapter-address", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::default-adapter-address", ...args: any[]): void
    connect(sigName: "notify::default-adapter-name", callback: (...args: any[]) => void): number
    on(sigName: "notify::default-adapter-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::default-adapter-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::default-adapter-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::default-adapter-name", ...args: any[]): void
    connect(sigName: "notify::default-adapter-powered", callback: (...args: any[]) => void): number
    on(sigName: "notify::default-adapter-powered", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::default-adapter-powered", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::default-adapter-powered", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::default-adapter-powered", ...args: any[]): void
    connect(sigName: "notify::default-adapter-setup-mode", callback: (...args: any[]) => void): number
    on(sigName: "notify::default-adapter-setup-mode", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::default-adapter-setup-mode", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::default-adapter-setup-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::default-adapter-setup-mode", ...args: any[]): void
    connect(sigName: "notify::default-adapter-state", callback: (...args: any[]) => void): number
    on(sigName: "notify::default-adapter-state", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::default-adapter-state", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::default-adapter-state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::default-adapter-state", ...args: any[]): void
    connect(sigName: "notify::num-adapters", callback: (...args: any[]) => void): number
    on(sigName: "notify::num-adapters", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::num-adapters", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::num-adapters", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::num-adapters", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class Client extends GObject.Object {

    // Own properties of GnomeBluetooth-3.0.GnomeBluetooth.Client

    static name: string

    // Constructors of GnomeBluetooth-3.0.GnomeBluetooth.Client

    constructor(config?: Client.ConstructorProperties) 
    /**
     * Returns a reference to the #BluetoothClient singleton. Use g_object_unref() when done with the object.
     * @constructor 
     * @returns a #BluetoothClient object.
     */
    constructor() 
    /**
     * Returns a reference to the #BluetoothClient singleton. Use g_object_unref() when done with the object.
     * @constructor 
     * @returns a #BluetoothClient object.
     */
    static new(): Client
    _init(config?: Client.ConstructorProperties): void
}

export module Device {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of GnomeBluetooth-3.0.GnomeBluetooth.Device

        address?: string | null
        alias?: string | null
        batteryLevel?: number | null
        batteryPercentage?: number | null
        batteryType?: BatteryType | null
        connected?: boolean | null
        icon?: string | null
        legacyPairing?: boolean | null
        name?: string | null
        paired?: boolean | null
        proxy?: Gio.DBusProxy | null
        trusted?: boolean | null
        type?: Type | null
        uuids?: string[] | null
    }

}

export interface Device {

    // Own properties of GnomeBluetooth-3.0.GnomeBluetooth.Device

    address: string | null
    alias: string | null
    batteryLevel: number
    batteryPercentage: number
    batteryType: BatteryType
    readonly connectable: boolean
    connected: boolean
    icon: string | null
    legacyPairing: boolean
    name: string | null
    paired: boolean
    proxy: Gio.DBusProxy
    trusted: boolean
    type: Type
    uuids: string[]
    __gtype__: number

    // Owm methods of GnomeBluetooth-3.0.GnomeBluetooth.Device

    dump(): void
    getObjectPath(): string | null
    toString(): string | null

    // Class property signals of GnomeBluetooth-3.0.GnomeBluetooth.Device

    connect(sigName: "notify::address", callback: (...args: any[]) => void): number
    on(sigName: "notify::address", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::address", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::address", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::address", ...args: any[]): void
    connect(sigName: "notify::alias", callback: (...args: any[]) => void): number
    on(sigName: "notify::alias", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::alias", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::alias", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::alias", ...args: any[]): void
    connect(sigName: "notify::battery-level", callback: (...args: any[]) => void): number
    on(sigName: "notify::battery-level", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::battery-level", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::battery-level", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::battery-level", ...args: any[]): void
    connect(sigName: "notify::battery-percentage", callback: (...args: any[]) => void): number
    on(sigName: "notify::battery-percentage", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::battery-percentage", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::battery-percentage", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::battery-percentage", ...args: any[]): void
    connect(sigName: "notify::battery-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::battery-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::battery-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::battery-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::battery-type", ...args: any[]): void
    connect(sigName: "notify::connectable", callback: (...args: any[]) => void): number
    on(sigName: "notify::connectable", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::connectable", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::connectable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::connectable", ...args: any[]): void
    connect(sigName: "notify::connected", callback: (...args: any[]) => void): number
    on(sigName: "notify::connected", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::connected", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::connected", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::connected", ...args: any[]): void
    connect(sigName: "notify::icon", callback: (...args: any[]) => void): number
    on(sigName: "notify::icon", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::icon", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::icon", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::icon", ...args: any[]): void
    connect(sigName: "notify::legacy-pairing", callback: (...args: any[]) => void): number
    on(sigName: "notify::legacy-pairing", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::legacy-pairing", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::legacy-pairing", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::legacy-pairing", ...args: any[]): void
    connect(sigName: "notify::name", callback: (...args: any[]) => void): number
    on(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::paired", callback: (...args: any[]) => void): number
    on(sigName: "notify::paired", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::paired", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::paired", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::paired", ...args: any[]): void
    connect(sigName: "notify::proxy", callback: (...args: any[]) => void): number
    on(sigName: "notify::proxy", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::proxy", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::proxy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::proxy", ...args: any[]): void
    connect(sigName: "notify::trusted", callback: (...args: any[]) => void): number
    on(sigName: "notify::trusted", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::trusted", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::trusted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::trusted", ...args: any[]): void
    connect(sigName: "notify::type", callback: (...args: any[]) => void): number
    on(sigName: "notify::type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::type", ...args: any[]): void
    connect(sigName: "notify::uuids", callback: (...args: any[]) => void): number
    on(sigName: "notify::uuids", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::uuids", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::uuids", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::uuids", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class Device extends GObject.Object {

    // Own properties of GnomeBluetooth-3.0.GnomeBluetooth.Device

    static name: string

    // Constructors of GnomeBluetooth-3.0.GnomeBluetooth.Device

    constructor(config?: Device.ConstructorProperties) 
    _init(config?: Device.ConstructorProperties): void
}

export interface ClientClass {

    // Own fields of GnomeBluetooth-3.0.GnomeBluetooth.ClientClass

    parentClass: GObject.ObjectClass
}

export abstract class ClientClass {

    // Own properties of GnomeBluetooth-3.0.GnomeBluetooth.ClientClass

    static name: string
}

export interface DeviceClass {

    // Own fields of GnomeBluetooth-3.0.GnomeBluetooth.DeviceClass

    parentClass: GObject.ObjectClass
}

export abstract class DeviceClass {

    // Own properties of GnomeBluetooth-3.0.GnomeBluetooth.DeviceClass

    static name: string
}

// END