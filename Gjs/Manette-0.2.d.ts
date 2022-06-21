// @ts-nocheck

/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * Manette-0.2
 */

import type * as Gjs from './Gjs';
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
function get_resource(): Gio.Resource
interface Device_ConstructProps extends GObject.Object_ConstructProps {
}

/**
 * Signal callback interface for `absolute-axis-event`
 */
interface Device_AbsoluteAxisEventSignalCallback {
    ($obj: Device, event: Event): void
}

/**
 * Signal callback interface for `button-press-event`
 */
interface Device_ButtonPressEventSignalCallback {
    ($obj: Device, event: Event): void
}

/**
 * Signal callback interface for `button-release-event`
 */
interface Device_ButtonReleaseEventSignalCallback {
    ($obj: Device, event: Event): void
}

/**
 * Signal callback interface for `disconnected`
 */
interface Device_DisconnectedSignalCallback {
    ($obj: Device): void
}

/**
 * Signal callback interface for `event`
 */
interface Device_EventSignalCallback {
    ($obj: Device, event: Event): void
}

/**
 * Signal callback interface for `hat-axis-event`
 */
interface Device_HatAxisEventSignalCallback {
    ($obj: Device, event: Event): void
}

interface Device {

    // Owm methods of Manette-0.2.Manette.Device

    /**
     * Gets the device's name.
     */
    get_name(): string
    /**
     * Gets whether the device has the given input. If the input is present it means
     * that the device can send events for it regardless of whether the device is
     * mapped or not.
     * @param type the input type
     * @param code the input code
     */
    has_input(type: number, code: number): boolean
    has_rumble(): boolean
    /**
     * Gets whether `self` has a user mapping.
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
    save_user_mapping(mapping_string: string): void

    // Own signals of Manette-0.2.Manette.Device

    connect(sigName: "absolute-axis-event", callback: Device_AbsoluteAxisEventSignalCallback): number
    connect_after(sigName: "absolute-axis-event", callback: Device_AbsoluteAxisEventSignalCallback): number
    emit(sigName: "absolute-axis-event", event: Event, ...args: any[]): void
    connect(sigName: "button-press-event", callback: Device_ButtonPressEventSignalCallback): number
    connect_after(sigName: "button-press-event", callback: Device_ButtonPressEventSignalCallback): number
    emit(sigName: "button-press-event", event: Event, ...args: any[]): void
    connect(sigName: "button-release-event", callback: Device_ButtonReleaseEventSignalCallback): number
    connect_after(sigName: "button-release-event", callback: Device_ButtonReleaseEventSignalCallback): number
    emit(sigName: "button-release-event", event: Event, ...args: any[]): void
    connect(sigName: "disconnected", callback: Device_DisconnectedSignalCallback): number
    connect_after(sigName: "disconnected", callback: Device_DisconnectedSignalCallback): number
    emit(sigName: "disconnected", ...args: any[]): void
    connect(sigName: "event", callback: Device_EventSignalCallback): number
    connect_after(sigName: "event", callback: Device_EventSignalCallback): number
    emit(sigName: "event", event: Event, ...args: any[]): void
    connect(sigName: "hat-axis-event", callback: Device_HatAxisEventSignalCallback): number
    connect_after(sigName: "hat-axis-event", callback: Device_HatAxisEventSignalCallback): number
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

    constructor(config?: Device_ConstructProps) 
    _init(config?: Device_ConstructProps): void
}

interface Monitor_ConstructProps extends GObject.Object_ConstructProps {
}

/**
 * Signal callback interface for `device-connected`
 */
interface Monitor_DeviceConnectedSignalCallback {
    ($obj: Monitor, device: Device): void
}

/**
 * Signal callback interface for `device-disconnected`
 */
interface Monitor_DeviceDisconnectedSignalCallback {
    ($obj: Monitor, device: Device): void
}

interface Monitor {

    // Owm methods of Manette-0.2.Manette.Monitor

    iterate(): MonitorIter

    // Own signals of Manette-0.2.Manette.Monitor

    connect(sigName: "device-connected", callback: Monitor_DeviceConnectedSignalCallback): number
    connect_after(sigName: "device-connected", callback: Monitor_DeviceConnectedSignalCallback): number
    emit(sigName: "device-connected", device: Device, ...args: any[]): void
    connect(sigName: "device-disconnected", callback: Monitor_DeviceDisconnectedSignalCallback): number
    connect_after(sigName: "device-disconnected", callback: Monitor_DeviceDisconnectedSignalCallback): number
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

    constructor(config?: Monitor_ConstructProps) 
    constructor() 
    static new(): Monitor
    _init(config?: Monitor_ConstructProps): void
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
    get_absolute(): [ /* returnType */ boolean, /* axis */ number, /* value */ number ]
    /**
     * Gets the button of `self,` if any.
     */
    get_button(): [ /* returnType */ boolean, /* button */ number ]
    /**
     * Gets the #ManetteDevice associated with the `self`.
     */
    get_device(): Device
    /**
     * Gets the event type of `self`.
     */
    get_event_type(): EventType
    /**
     * Gets the hardware code of `self`.
     */
    get_hardware_code(): number
    /**
     * Gets the hardware index of `self`.
     */
    get_hardware_index(): number
    /**
     * Gets the hardware type of `self`.
     */
    get_hardware_type(): number
    /**
     * Gets the hardware value of `self`.
     */
    get_hardware_value(): number
    /**
     * Gets the hat of `self,` if any.
     */
    get_hat(): [ /* returnType */ boolean, /* axis */ number, /* value */ number ]
    /**
     * Gets the time stamp of `self`.
     */
    get_time(): number
}

class Event {

    // Own properties of Manette-0.2.Manette.Event

    static name: string
}

}
export default Manette;