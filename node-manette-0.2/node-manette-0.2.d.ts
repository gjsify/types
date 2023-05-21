
/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './node-manette-0.2-import.d.ts';
    
/**
 * Manette-0.2
 */

import type Gio from '@girs/node-gio-2.0';
import type GObject from '@girs/node-gobject-2.0';
import type GLib from '@girs/node-glib-2.0';
import type GUdev from '@girs/node-gudev-1.0';

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
function getResource(): Gio.Resource
module Device {

    // Signal callback interfaces

    /**
     * Signal callback interface for `absolute-axis-event`
     */
    interface AbsoluteAxisEventSignalCallback {
        (event: Event): void
    }

    /**
     * Signal callback interface for `button-press-event`
     */
    interface ButtonPressEventSignalCallback {
        (event: Event): void
    }

    /**
     * Signal callback interface for `button-release-event`
     */
    interface ButtonReleaseEventSignalCallback {
        (event: Event): void
    }

    /**
     * Signal callback interface for `disconnected`
     */
    interface DisconnectedSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `event`
     */
    interface EventSignalCallback {
        (event: Event): void
    }

    /**
     * Signal callback interface for `hat-axis-event`
     */
    interface HatAxisEventSignalCallback {
        (event: Event): void
    }


    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface Device {

    // Own properties of Manette-0.2.Manette.Device

    __gtype__: number

    // Owm methods of Manette-0.2.Manette.Device

    /**
     * Gets the device's name.
     * @returns the name of @self, do not modify it or free it
     */
    getName(): string | null
    /**
     * Gets whether the device has the given input. If the input is present it means
     * that the device can send events for it regardless of whether the device is
     * mapped or not.
     * @param type the input type
     * @param code the input code
     * @returns whether the device has the given input
     */
    hasInput(type: number, code: number): boolean
    hasRumble(): boolean
    /**
     * Gets whether `self` has a user mapping.
     * @returns whether @self has a user mapping
     */
    hasUserMapping(): boolean
    /**
     * Removes the user mapping for `self`.
     */
    removeUserMapping(): void
    rumble(strongMagnitude: number, weakMagnitude: number, milliseconds: number): boolean
    /**
     * Saves `mapping_string` as the user mapping for `self`.
     * @param mappingString the mapping string
     */
    saveUserMapping(mappingString: string | null): void

    // Own signals of Manette-0.2.Manette.Device

    connect(sigName: "absolute-axis-event", callback: Device.AbsoluteAxisEventSignalCallback): number
    on(sigName: "absolute-axis-event", callback: Device.AbsoluteAxisEventSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "absolute-axis-event", callback: Device.AbsoluteAxisEventSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "absolute-axis-event", callback: Device.AbsoluteAxisEventSignalCallback): NodeJS.EventEmitter
    emit(sigName: "absolute-axis-event", ...args: any[]): void
    connect(sigName: "button-press-event", callback: Device.ButtonPressEventSignalCallback): number
    on(sigName: "button-press-event", callback: Device.ButtonPressEventSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "button-press-event", callback: Device.ButtonPressEventSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "button-press-event", callback: Device.ButtonPressEventSignalCallback): NodeJS.EventEmitter
    emit(sigName: "button-press-event", ...args: any[]): void
    connect(sigName: "button-release-event", callback: Device.ButtonReleaseEventSignalCallback): number
    on(sigName: "button-release-event", callback: Device.ButtonReleaseEventSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "button-release-event", callback: Device.ButtonReleaseEventSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "button-release-event", callback: Device.ButtonReleaseEventSignalCallback): NodeJS.EventEmitter
    emit(sigName: "button-release-event", ...args: any[]): void
    connect(sigName: "disconnected", callback: Device.DisconnectedSignalCallback): number
    on(sigName: "disconnected", callback: Device.DisconnectedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "disconnected", callback: Device.DisconnectedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "disconnected", callback: Device.DisconnectedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "disconnected", ...args: any[]): void
    connect(sigName: "event", callback: Device.EventSignalCallback): number
    on(sigName: "event", callback: Device.EventSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "event", callback: Device.EventSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "event", callback: Device.EventSignalCallback): NodeJS.EventEmitter
    emit(sigName: "event", ...args: any[]): void
    connect(sigName: "hat-axis-event", callback: Device.HatAxisEventSignalCallback): number
    on(sigName: "hat-axis-event", callback: Device.HatAxisEventSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "hat-axis-event", callback: Device.HatAxisEventSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "hat-axis-event", callback: Device.HatAxisEventSignalCallback): NodeJS.EventEmitter
    emit(sigName: "hat-axis-event", ...args: any[]): void

    // Class property signals of Manette-0.2.Manette.Device

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
}

class Device extends GObject.Object {

    // Own properties of Manette-0.2.Manette.Device

    static name: string

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
        (device: Device): void
    }

    /**
     * Signal callback interface for `device-disconnected`
     */
    interface DeviceDisconnectedSignalCallback {
        (device: Device): void
    }


    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface Monitor {

    // Own properties of Manette-0.2.Manette.Monitor

    __gtype__: number

    // Owm methods of Manette-0.2.Manette.Monitor

    iterate(): MonitorIter

    // Own signals of Manette-0.2.Manette.Monitor

    connect(sigName: "device-connected", callback: Monitor.DeviceConnectedSignalCallback): number
    on(sigName: "device-connected", callback: Monitor.DeviceConnectedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "device-connected", callback: Monitor.DeviceConnectedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "device-connected", callback: Monitor.DeviceConnectedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "device-connected", ...args: any[]): void
    connect(sigName: "device-disconnected", callback: Monitor.DeviceDisconnectedSignalCallback): number
    on(sigName: "device-disconnected", callback: Monitor.DeviceDisconnectedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "device-disconnected", callback: Monitor.DeviceDisconnectedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "device-disconnected", callback: Monitor.DeviceDisconnectedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "device-disconnected", ...args: any[]): void

    // Class property signals of Manette-0.2.Manette.Monitor

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
}

class Monitor extends GObject.Object {

    // Own properties of Manette-0.2.Manette.Monitor

    static name: string

    // Constructors of Manette-0.2.Manette.Monitor

    constructor(config?: Monitor.ConstructorProperties) 
    constructor() 
    static new(): Monitor
    _init(config?: Monitor.ConstructorProperties): void
}

interface DeviceClass {

    // Own fields of Manette-0.2.Manette.DeviceClass

    parentClass: GObject.ObjectClass
}

abstract class DeviceClass {

    // Own properties of Manette-0.2.Manette.DeviceClass

    static name: string
}

interface MonitorClass {

    // Own fields of Manette-0.2.Manette.MonitorClass

    parentClass: GObject.ObjectClass
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
    getAbsolute(): [ /* returnType */ boolean, /* axis */ number, /* value */ number ]
    /**
     * Gets the button of `self,` if any.
     * @returns whether the button was retrieved
     */
    getButton(): [ /* returnType */ boolean, /* button */ number ]
    /**
     * Gets the #ManetteDevice associated with the `self`.
     * @returns the #ManetteDevice associated with the @self
     */
    getDevice(): Device
    /**
     * Gets the event type of `self`.
     * @returns the event type of @self
     */
    getEventType(): EventType
    /**
     * Gets the hardware code of `self`.
     * @returns the hardware code of @self
     */
    getHardwareCode(): number
    /**
     * Gets the hardware index of `self`.
     * @returns the hardware index of @self
     */
    getHardwareIndex(): number
    /**
     * Gets the hardware type of `self`.
     * @returns the hardware type of @self
     */
    getHardwareType(): number
    /**
     * Gets the hardware value of `self`.
     * @returns the hardware value of @self
     */
    getHardwareValue(): number
    /**
     * Gets the hat of `self,` if any.
     * @returns whether the hat was retrieved
     */
    getHat(): [ /* returnType */ boolean, /* axis */ number, /* value */ number ]
    /**
     * Gets the time stamp of `self`.
     * @returns the time stamp of @self
     */
    getTime(): number
}

class Event {

    // Own properties of Manette-0.2.Manette.Event

    static name: string
}

}

export default Manette;
// END