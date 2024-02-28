/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './manette-0.2-ambient.d.ts';
import './manette-0.2-import.d.ts';
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
    }

    class Device extends GObject.Object {
        // Owm methods of Manette-0.2.Device

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
    }

    class Monitor extends GObject.Object {
        // Constructors of Manette-0.2.Monitor

        static ['new'](): Monitor;

        // Owm methods of Manette-0.2.Monitor

        iterate(): MonitorIter;
    }

    class DeviceClass {}

    class MonitorClass {}

    class MonitorIter {
        // Owm methods of Manette-0.2.MonitorIter

        /**
         * Gets the next device from the device monitor iterator.
         * @returns whether the next device was retrieved, if not, the end was reached
         */
        next(): boolean;
    }

    class Event {
        // Owm methods of Manette-0.2.Event

        /**
         * Gets the axis of `self,` if any.
         * @returns whether the axis was retrieved
         */
        get_absolute(): boolean;
        /**
         * Gets the button of `self,` if any.
         * @returns whether the button was retrieved
         */
        get_button(): boolean;
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
        get_hat(): boolean;
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
