
/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 */
/**
 * Manette-0.2
 */

import type Gio from '@girs/gio-2.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type GUdev from '@girs/gudev-1.0';

export namespace Manette {

/**
 * Specifies the type of the event.
 */
enum EventType {
    /**
     * a special code to indicate a null event
     */
    EVENT_NOTHING,
    /**
     * a button has been pressed
     */
    EVENT_BUTTON_PRESS,
    /**
     * a button has been released
     */
    EVENT_BUTTON_RELEASE,
    /**
     * an absolute axis has been moved
     */
    EVENT_ABSOLUTE,
    /**
     * a hat axis has been moved
     */
    EVENT_HAT,
}
function get_resource(): Gio.Resource
module Device {

    // Signal callback interfaces

    /**
     * Signal callback interface for `absolute-axis-event`
     */
    interface AbsoluteAxisEventSignalCallback {
        ($obj: Device, event: Event): void
    }

    /**
     * Signal callback interface for `button-press-event`
     */
    interface ButtonPressEventSignalCallback {
        ($obj: Device, event: Event): void
    }

    /**
     * Signal callback interface for `button-release-event`
     */
    interface ButtonReleaseEventSignalCallback {
        ($obj: Device, event: Event): void
    }

    /**
     * Signal callback interface for `disconnected`
     */
    interface DisconnectedSignalCallback {
        ($obj: Device): void
    }

    /**
     * Signal callback interface for `event`
     */
    interface EventSignalCallback {
        ($obj: Device, event: Event): void
    }

    /**
     * Signal callback interface for `hat-axis-event`
     */
    interface HatAxisEventSignalCallback {
        ($obj: Device, event: Event): void
    }


    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface Device {

    // Owm methods of Manette-0.2.Manette.Device

    /**
     * Gets the device's name.
     * @returns the name of @self, do not modify it or free it
     */
    get_name(): string | null
    /**
     * Gets whether the device has the given input. If the input is present it means
     * that the device can send events for it regardless of whether the device is
     * mapped or not.
     * @param type the input type
     * @param code the input code
     * @returns whether the device has the given input
     */
    has_input(type: number, code: number): boolean
    has_rumble(): boolean
    /**
     * Gets whether `self` has a user mapping.
     * @returns whether @self has a user mapping
     */
    has_user_mapping(): boolean
    /**
     * Removes the user mapping for `self`.
     */
    remove_user_mapping(): void
    rumble(strong_magnitude: number, weak_magnitude: number, milliseconds: number): boolean
    /**
     * Saves `mapping_string` as the user mapping for `self`.
     * @param mapping_string the mapping string
     */
    save_user_mapping(mapping_string: string | null): void

    // Own signals of Manette-0.2.Manette.Device

    connect(sigName: "absolute-axis-event", callback: Device.AbsoluteAxisEventSignalCallback): number
    connect_after(sigName: "absolute-axis-event", callback: Device.AbsoluteAxisEventSignalCallback): number
    emit(sigName: "absolute-axis-event", event: Event, ...args: any[]): void
    connect(sigName: "button-press-event", callback: Device.ButtonPressEventSignalCallback): number
    connect_after(sigName: "button-press-event", callback: Device.ButtonPressEventSignalCallback): number
    emit(sigName: "button-press-event", event: Event, ...args: any[]): void
    connect(sigName: "button-release-event", callback: Device.ButtonReleaseEventSignalCallback): number
    connect_after(sigName: "button-release-event", callback: Device.ButtonReleaseEventSignalCallback): number
    emit(sigName: "button-release-event", event: Event, ...args: any[]): void
    connect(sigName: "disconnected", callback: Device.DisconnectedSignalCallback): number
    connect_after(sigName: "disconnected", callback: Device.DisconnectedSignalCallback): number
    emit(sigName: "disconnected", ...args: any[]): void
    connect(sigName: "event", callback: Device.EventSignalCallback): number
    connect_after(sigName: "event", callback: Device.EventSignalCallback): number
    emit(sigName: "event", event: Event, ...args: any[]): void
    connect(sigName: "hat-axis-event", callback: Device.HatAxisEventSignalCallback): number
    connect_after(sigName: "hat-axis-event", callback: Device.HatAxisEventSignalCallback): number
    emit(sigName: "hat-axis-event", event: Event, ...args: any[]): void

    // Class property signals of Manette-0.2.Manette.Device

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Device extends GObject.Object {

    // Own properties of Manette-0.2.Manette.Device

    static name: string
    static $gtype: GObject.GType<Device>

    // Constructors of Manette-0.2.Manette.Device

    constructor(config?: Device.ConstructorProperties) 
    _init(config?: Device.ConstructorProperties): void
}

module Monitor {

    // Signal callback interfaces

    /**
     * Signal callback interface for `device-connected`
     */
    interface DeviceConnectedSignalCallback {
        ($obj: Monitor, device: Device): void
    }

    /**
     * Signal callback interface for `device-disconnected`
     */
    interface DeviceDisconnectedSignalCallback {
        ($obj: Monitor, device: Device): void
    }


    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface Monitor {

    // Owm methods of Manette-0.2.Manette.Monitor

    iterate(): MonitorIter

    // Own signals of Manette-0.2.Manette.Monitor

    connect(sigName: "device-connected", callback: Monitor.DeviceConnectedSignalCallback): number
    connect_after(sigName: "device-connected", callback: Monitor.DeviceConnectedSignalCallback): number
    emit(sigName: "device-connected", device: Device, ...args: any[]): void
    connect(sigName: "device-disconnected", callback: Monitor.DeviceDisconnectedSignalCallback): number
    connect_after(sigName: "device-disconnected", callback: Monitor.DeviceDisconnectedSignalCallback): number
    emit(sigName: "device-disconnected", device: Device, ...args: any[]): void

    // Class property signals of Manette-0.2.Manette.Monitor

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Monitor extends GObject.Object {

    // Own properties of Manette-0.2.Manette.Monitor

    static name: string
    static $gtype: GObject.GType<Monitor>

    // Constructors of Manette-0.2.Manette.Monitor

    constructor(config?: Monitor.ConstructorProperties) 
    constructor() 
    static new(): Monitor
    _init(config?: Monitor.ConstructorProperties): void
}

interface DeviceClass {

    // Own fields of Manette-0.2.Manette.DeviceClass

    parent_class: GObject.ObjectClass
}

abstract class DeviceClass {

    // Own properties of Manette-0.2.Manette.DeviceClass

    static name: string
}

interface MonitorClass {

    // Own fields of Manette-0.2.Manette.MonitorClass

    parent_class: GObject.ObjectClass
}

abstract class MonitorClass {

    // Own properties of Manette-0.2.Manette.MonitorClass

    static name: string
}

interface MonitorIter {

    // Owm methods of Manette-0.2.Manette.MonitorIter

    /**
     * Gets the next device from the device monitor iterator.
     * @returns whether the next device was retrieved, if not, the end was reached
     */
    next(): [ /* returnType */ boolean, /* device */ Device | null ]
}

class MonitorIter {

    // Own properties of Manette-0.2.Manette.MonitorIter

    static name: string
}

interface Event {

    // Owm methods of Manette-0.2.Manette.Event

    /**
     * Gets the axis of `self,` if any.
     * @returns whether the axis was retrieved
     */
    get_absolute(): [ /* returnType */ boolean, /* axis */ number, /* value */ number ]
    /**
     * Gets the button of `self,` if any.
     * @returns whether the button was retrieved
     */
    get_button(): [ /* returnType */ boolean, /* button */ number ]
    /**
     * Gets the #ManetteDevice associated with the `self`.
     * @returns the #ManetteDevice associated with the @self
     */
    get_device(): Device
    /**
     * Gets the event type of `self`.
     * @returns the event type of @self
     */
    get_event_type(): EventType
    /**
     * Gets the hardware code of `self`.
     * @returns the hardware code of @self
     */
    get_hardware_code(): number
    /**
     * Gets the hardware index of `self`.
     * @returns the hardware index of @self
     */
    get_hardware_index(): number
    /**
     * Gets the hardware type of `self`.
     * @returns the hardware type of @self
     */
    get_hardware_type(): number
    /**
     * Gets the hardware value of `self`.
     * @returns the hardware value of @self
     */
    get_hardware_value(): number
    /**
     * Gets the hat of `self,` if any.
     * @returns whether the hat was retrieved
     */
    get_hat(): [ /* returnType */ boolean, /* axis */ number, /* value */ number ]
    /**
     * Gets the time stamp of `self`.
     * @returns the time stamp of @self
     */
    get_time(): number
}

class Event {

    // Own properties of Manette-0.2.Manette.Event

    static name: string
}

/**
 * Name of the imported GIR library
 * @see https://gitlab.gnome.org/GNOME/gjs/-/blob/master/gi/ns.cpp#L188
 */
const __name__: string
/**
 * Version of the imported GIR library
 * @see https://gitlab.gnome.org/GNOME/gjs/-/blob/master/gi/ns.cpp#L189
 */
const __version__: string
}

export default Manette;
// END