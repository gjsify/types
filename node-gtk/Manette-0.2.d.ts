// @ts-nocheck

/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * Manette-0.2
 */

import type Gio from './Gio-2.0';
import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';
import type GUdev from './GUdev-1.0';

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
interface Device_ConstructProps extends GObject.Object_ConstructProps {
}

/**
 * Signal callback interface for `absolute-axis-event`
 */
interface Device_AbsoluteAxisEventSignalCallback {
    (event: Event): void
}

/**
 * Signal callback interface for `button-press-event`
 */
interface Device_ButtonPressEventSignalCallback {
    (event: Event): void
}

/**
 * Signal callback interface for `button-release-event`
 */
interface Device_ButtonReleaseEventSignalCallback {
    (event: Event): void
}

/**
 * Signal callback interface for `disconnected`
 */
interface Device_DisconnectedSignalCallback {
    (): void
}

/**
 * Signal callback interface for `event`
 */
interface Device_EventSignalCallback {
    (event: Event): void
}

/**
 * Signal callback interface for `hat-axis-event`
 */
interface Device_HatAxisEventSignalCallback {
    (event: Event): void
}

interface Device {

    // Owm methods of Manette-0.2.Manette.Device

    /**
     * Gets the device's name.
     */
    getName(): string
    /**
     * Gets whether the device has the given input. If the input is present it means
     * that the device can send events for it regardless of whether the device is
     * mapped or not.
     * @param type the input type
     * @param code the input code
     */
    hasInput(type: number, code: number): boolean
    hasRumble(): boolean
    /**
     * Gets whether `self` has a user mapping.
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
    saveUserMapping(mappingString: string): void

    // Own signals of Manette-0.2.Manette.Device

    connect(sigName: "absolute-axis-event", callback: Device_AbsoluteAxisEventSignalCallback): number
    on(sigName: "absolute-axis-event", callback: Device_AbsoluteAxisEventSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "absolute-axis-event", callback: Device_AbsoluteAxisEventSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "absolute-axis-event", callback: Device_AbsoluteAxisEventSignalCallback): NodeJS.EventEmitter
    emit(sigName: "absolute-axis-event", ...args: any[]): void
    connect(sigName: "button-press-event", callback: Device_ButtonPressEventSignalCallback): number
    on(sigName: "button-press-event", callback: Device_ButtonPressEventSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "button-press-event", callback: Device_ButtonPressEventSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "button-press-event", callback: Device_ButtonPressEventSignalCallback): NodeJS.EventEmitter
    emit(sigName: "button-press-event", ...args: any[]): void
    connect(sigName: "button-release-event", callback: Device_ButtonReleaseEventSignalCallback): number
    on(sigName: "button-release-event", callback: Device_ButtonReleaseEventSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "button-release-event", callback: Device_ButtonReleaseEventSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "button-release-event", callback: Device_ButtonReleaseEventSignalCallback): NodeJS.EventEmitter
    emit(sigName: "button-release-event", ...args: any[]): void
    connect(sigName: "disconnected", callback: Device_DisconnectedSignalCallback): number
    on(sigName: "disconnected", callback: Device_DisconnectedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "disconnected", callback: Device_DisconnectedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "disconnected", callback: Device_DisconnectedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "disconnected", ...args: any[]): void
    connect(sigName: "event", callback: Device_EventSignalCallback): number
    on(sigName: "event", callback: Device_EventSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "event", callback: Device_EventSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "event", callback: Device_EventSignalCallback): NodeJS.EventEmitter
    emit(sigName: "event", ...args: any[]): void
    connect(sigName: "hat-axis-event", callback: Device_HatAxisEventSignalCallback): number
    on(sigName: "hat-axis-event", callback: Device_HatAxisEventSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "hat-axis-event", callback: Device_HatAxisEventSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "hat-axis-event", callback: Device_HatAxisEventSignalCallback): NodeJS.EventEmitter
    emit(sigName: "hat-axis-event", ...args: any[]): void

    // Class property signals of Manette-0.2.Manette.Device

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class Device extends GObject.Object {

    // Own properties of Manette-0.2.Manette.Device

    static name: string
    static $gtype: GObject.GType<Device>

    // Constructors of Manette-0.2.Manette.Device

    constructor(config?: Device_ConstructProps) 
    _init(config?: Device_ConstructProps): void
}

interface Monitor_ConstructProps extends GObject.Object_ConstructProps {
}

/**
 * Signal callback interface for `device-connected`
 */
interface Monitor_DeviceConnectedSignalCallback {
    (device: Device): void
}

/**
 * Signal callback interface for `device-disconnected`
 */
interface Monitor_DeviceDisconnectedSignalCallback {
    (device: Device): void
}

interface Monitor {

    // Owm methods of Manette-0.2.Manette.Monitor

    iterate(): MonitorIter

    // Own signals of Manette-0.2.Manette.Monitor

    connect(sigName: "device-connected", callback: Monitor_DeviceConnectedSignalCallback): number
    on(sigName: "device-connected", callback: Monitor_DeviceConnectedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "device-connected", callback: Monitor_DeviceConnectedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "device-connected", callback: Monitor_DeviceConnectedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "device-connected", ...args: any[]): void
    connect(sigName: "device-disconnected", callback: Monitor_DeviceDisconnectedSignalCallback): number
    on(sigName: "device-disconnected", callback: Monitor_DeviceDisconnectedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "device-disconnected", callback: Monitor_DeviceDisconnectedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "device-disconnected", callback: Monitor_DeviceDisconnectedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "device-disconnected", ...args: any[]): void

    // Class property signals of Manette-0.2.Manette.Monitor

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class Monitor extends GObject.Object {

    // Own properties of Manette-0.2.Manette.Monitor

    static name: string
    static $gtype: GObject.GType<Monitor>

    // Constructors of Manette-0.2.Manette.Monitor

    constructor(config?: Monitor_ConstructProps) 
    constructor() 
    static new(): Monitor
    _init(config?: Monitor_ConstructProps): void
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
     */
    getAbsolute(): [ /* returnType */ boolean, /* axis */ number, /* value */ number ]
    /**
     * Gets the button of `self,` if any.
     */
    getButton(): [ /* returnType */ boolean, /* button */ number ]
    /**
     * Gets the #ManetteDevice associated with the `self`.
     */
    getDevice(): Device
    /**
     * Gets the event type of `self`.
     */
    getEventType(): EventType
    /**
     * Gets the hardware code of `self`.
     */
    getHardwareCode(): number
    /**
     * Gets the hardware index of `self`.
     */
    getHardwareIndex(): number
    /**
     * Gets the hardware type of `self`.
     */
    getHardwareType(): number
    /**
     * Gets the hardware value of `self`.
     */
    getHardwareValue(): number
    /**
     * Gets the hat of `self,` if any.
     */
    getHat(): [ /* returnType */ boolean, /* axis */ number, /* value */ number ]
    /**
     * Gets the time stamp of `self`.
     */
    getTime(): number
}

class Event {

    // Own properties of Manette-0.2.Manette.Event

    static name: string
}

}
export default Manette;