/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './manette-0.2-ambient.d.ts';

/**
 * Manette-0.2
 */

import type Gio from '@girs/gio-2.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type GModule from '@girs/gmodule-2.0';
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
    function get_resource(): Gio.Resource;
    module Device {
        // Signal callback interfaces

        interface AbsoluteAxisEvent {
            (event: Event): void;
        }

        interface ButtonPressEvent {
            (event: Event): void;
        }

        interface ButtonReleaseEvent {
            (event: Event): void;
        }

        interface Disconnected {
            (): void;
        }

        interface Event {
            (event: Event): void;
        }

        interface HatAxisEvent {
            (event: Event): void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    class Device extends GObject.Object {
        static $gtype: GObject.GType<Device>;

        // Constructors of Manette.Device

        constructor(properties?: Partial<Device.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Own signals of Manette.Device

        connect(id: string, callback: (...args: any[]) => any): number;
        connect_after(id: string, callback: (...args: any[]) => any): number;
        emit(id: string, ...args: any[]): void;
        connect(signal: 'absolute-axis-event', callback: (_source: this, event: Event) => void): number;
        connect_after(signal: 'absolute-axis-event', callback: (_source: this, event: Event) => void): number;
        emit(signal: 'absolute-axis-event', event: Event): void;
        connect(signal: 'button-press-event', callback: (_source: this, event: Event) => void): number;
        connect_after(signal: 'button-press-event', callback: (_source: this, event: Event) => void): number;
        emit(signal: 'button-press-event', event: Event): void;
        connect(signal: 'button-release-event', callback: (_source: this, event: Event) => void): number;
        connect_after(signal: 'button-release-event', callback: (_source: this, event: Event) => void): number;
        emit(signal: 'button-release-event', event: Event): void;
        connect(signal: 'disconnected', callback: (_source: this) => void): number;
        connect_after(signal: 'disconnected', callback: (_source: this) => void): number;
        emit(signal: 'disconnected'): void;
        connect(signal: 'event', callback: (_source: this, event: Event) => void): number;
        connect_after(signal: 'event', callback: (_source: this, event: Event) => void): number;
        emit(signal: 'event', event: Event): void;
        connect(signal: 'hat-axis-event', callback: (_source: this, event: Event) => void): number;
        connect_after(signal: 'hat-axis-event', callback: (_source: this, event: Event) => void): number;
        emit(signal: 'hat-axis-event', event: Event): void;

        // Own methods of Manette.Device

        /**
         * Gets the device's name.
         * @returns the name of @self, do not modify it or free it
         */
        get_name(): string;
        /**
         * Gets whether the device has the given input. If the input is present it means
         * that the device can send events for it regardless of whether the device is
         * mapped or not.
         * @param type the input type
         * @param code the input code
         * @returns whether the device has the given input
         */
        has_input(type: number, code: number): boolean;
        has_rumble(): boolean;
        /**
         * Gets whether `self` has a user mapping.
         * @returns whether @self has a user mapping
         */
        has_user_mapping(): boolean;
        /**
         * Removes the user mapping for `self`.
         */
        remove_user_mapping(): void;
        rumble(strong_magnitude: number, weak_magnitude: number, milliseconds: number): boolean;
        /**
         * Saves `mapping_string` as the user mapping for `self`.
         * @param mapping_string the mapping string
         */
        save_user_mapping(mapping_string: string): void;
    }

    module Monitor {
        // Signal callback interfaces

        interface DeviceConnected {
            (device: Device): void;
        }

        interface DeviceDisconnected {
            (device: Device): void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    class Monitor extends GObject.Object {
        static $gtype: GObject.GType<Monitor>;

        // Constructors of Manette.Monitor

        constructor(properties?: Partial<Monitor.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): Monitor;

        // Own signals of Manette.Monitor

        connect(id: string, callback: (...args: any[]) => any): number;
        connect_after(id: string, callback: (...args: any[]) => any): number;
        emit(id: string, ...args: any[]): void;
        connect(signal: 'device-connected', callback: (_source: this, device: Device) => void): number;
        connect_after(signal: 'device-connected', callback: (_source: this, device: Device) => void): number;
        emit(signal: 'device-connected', device: Device): void;
        connect(signal: 'device-disconnected', callback: (_source: this, device: Device) => void): number;
        connect_after(signal: 'device-disconnected', callback: (_source: this, device: Device) => void): number;
        emit(signal: 'device-disconnected', device: Device): void;

        // Own methods of Manette.Monitor

        iterate(): MonitorIter;
    }

    type DeviceClass = typeof Device;
    type MonitorClass = typeof Monitor;
    abstract class MonitorIter {
        static $gtype: GObject.GType<MonitorIter>;

        // Constructors of Manette.MonitorIter

        _init(...args: any[]): void;

        // Own methods of Manette.MonitorIter

        /**
         * Gets the next device from the device monitor iterator.
         * @returns whether the next device was retrieved, if not, the end was reached
         */
        next(): [boolean, Device | null];
    }

    class Event {
        static $gtype: GObject.GType<Event>;

        // Constructors of Manette.Event

        _init(...args: any[]): void;

        // Own methods of Manette.Event

        /**
         * Gets the axis of `self,` if any.
         * @returns whether the axis was retrieved
         */
        get_absolute(): [boolean, number, number];
        /**
         * Gets the button of `self,` if any.
         * @returns whether the button was retrieved
         */
        get_button(): [boolean, number];
        /**
         * Gets the #ManetteDevice associated with the `self`.
         * @returns the #ManetteDevice associated with the @self
         */
        get_device(): Device;
        /**
         * Gets the event type of `self`.
         * @returns the event type of @self
         */
        get_event_type(): EventType;
        /**
         * Gets the hardware code of `self`.
         * @returns the hardware code of @self
         */
        get_hardware_code(): number;
        /**
         * Gets the hardware index of `self`.
         * @returns the hardware index of @self
         */
        get_hardware_index(): number;
        /**
         * Gets the hardware type of `self`.
         * @returns the hardware type of @self
         */
        get_hardware_type(): number;
        /**
         * Gets the hardware value of `self`.
         * @returns the hardware value of @self
         */
        get_hardware_value(): number;
        /**
         * Gets the hat of `self,` if any.
         * @returns whether the hat was retrieved
         */
        get_hat(): [boolean, number, number];
        /**
         * Gets the time stamp of `self`.
         * @returns the time stamp of @self
         */
        get_time(): number;
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

export default Manette;
// END
