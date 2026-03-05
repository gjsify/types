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

export namespace Manette {
    /**
     * Manette-1
     */

    export namespace Axis {
        export const $gtype: GObject.GType<Axis>;
    }

    /**
     * Describes available axes a [class`Device]` can have.
     *
     * More values may be added to this enumeration over time.
     */
    enum Axis {
        /**
         * Left analog stick, horizontal axis
         */
        LEFT_X,
        /**
         * Left analog stick, vertical axis
         */
        LEFT_Y,
        /**
         * Right analog stick, horizontal axis
         */
        RIGHT_X,
        /**
         * Right analog stick, vertical axis
         */
        RIGHT_Y,
        /**
         * Left trigger (L2, LT or ZL)
         */
        LEFT_TRIGGER,
        /**
         * Right trigger (R2, RT or ZR)
         */
        RIGHT_TRIGGER,
    }

    export namespace Button {
        export const $gtype: GObject.GType<Button>;
    }

    /**
     * Describes available buttons a [class`Device]` can have.
     *
     * More values may be added to this enumeration over time.
     */
    enum Button {
        /**
         * D-pad (up)
         */
        DPAD_UP,
        /**
         * D-pad (down)
         */
        DPAD_DOWN,
        /**
         * D-pad (left)
         */
        DPAD_LEFT,
        /**
         * D-pad (right)
         */
        DPAD_RIGHT,
        /**
         * Top face button
         *     (XBox Y, Nintendo X, PlayStation triangle)
         */
        NORTH,
        /**
         * Bottom face button
         *     (XBox A, Nintendo B, PlayStation X)
         */
        SOUTH,
        /**
         * Left face button
         *     (XBox X, Nintendo Y, PlayStation square)
         */
        WEST,
        /**
         * Right face button
         *     (XBox B, Nintendo A, PlayStation circle)
         */
        EAST,
        /**
         * Left menu button
         */
        SELECT,
        /**
         * Right menu button
         */
        START,
        /**
         * Center menu button (Home, Guide, Steam etc)
         */
        MODE,
        /**
         * Left shoulder button (L, L1 or LB)
         */
        LEFT_SHOULDER,
        /**
         * Right shoulder button (R, R1 or RB)
         */
        RIGHT_SHOULDER,
        /**
         * Left stick
         */
        LEFT_STICK,
        /**
         * Right stick
         */
        RIGHT_STICK,
        /**
         * Upper left paddle
         *     (Steam Deck L4 or XBox Elite P3)
         */
        LEFT_PADDLE1,
        /**
         * Lower left paddle
         *     (Steam Deck L5 or XBox Elite P4)
         */
        LEFT_PADDLE2,
        /**
         * Upper right paddle
         *     (Steam Deck R4 or XBox Elite P1)
         */
        RIGHT_PADDLE1,
        /**
         * Lower right paddle
         *     (Steam Deck R5 or XBox Elite P2)
         */
        RIGHT_PADDLE2,
        /**
         * Additional button
         *     (Steam Deck QAM button, Xbox Series X share button etc)
         */
        MISC1,
        /**
         * Additional button
         */
        MISC2,
        /**
         * Additional button
         */
        MISC3,
        /**
         * Additional button
         */
        MISC4,
        /**
         * Additional button
         */
        MISC5,
        /**
         * Additional button
         */
        MISC6,
        /**
         * PS4/PS5 touchpad button
         */
        TOUCHPAD,
    }

    export namespace DeviceType {
        export const $gtype: GObject.GType<DeviceType>;
    }

    /**
     * Describes available types of a [class`Device]`.
     *
     * More values may be added to this enumeration over time.
     */
    enum DeviceType {
        /**
         * Generic gamepads
         */
        GENERIC,
        /**
         * Steam Deck
         */
        STEAM_DECK,
    }

    /**
     * libmanette major version component (e.g. 1 if the version is 1.2.3).
     */
    const MAJOR_VERSION: number;
    /**
     * libmanette micro version component (e.g. 3 if the version is 1.2.3).
     */
    const MICRO_VERSION: number;
    /**
     * libmanette minor version component (e.g. 2 if the version is 1.2.3).
     */
    const MINOR_VERSION: number;
    /**
     * libmanette version, encoded as a string, useful for printing and
     * concatenation.
     */
    const VERSION_S: string;
    /**
     * Returns the major version number of the libmanette library.
     *
     * For example, in libmanette version 1.2.3 this is 1.
     *
     * This function is in the library, so it represents the libmanette library your
     * code is running against. Contrast with the [const`MAJOR_VERSION]` constant,
     * which represents the major version of the libmanette headers you have
     * included when compiling your code.
     * @returns the major version number of the libmanette library
     */
    function get_major_version(): number;
    /**
     * Returns the micro version number of the libmanette library.
     *
     * For example, in libmanette version 1.2.3 this is 3.
     *
     * This function is in the library, so it represents the libmanette library your
     * code is running against. Contrast with the [const`MAJOR_VERSION]` constant,
     * which represents the micro version of the libmanette headers you have
     * included when compiling your code.
     * @returns the micro version number of the libmanette library
     */
    function get_micro_version(): number;
    /**
     * Returns the minor version number of the libmanette library.
     *
     * For example, in libmanette version 1.2.3 this is 2.
     *
     * This function is in the library, so it represents the libmanette library your
     * code is running against. Contrast with the [const`MAJOR_VERSION]` constant,
     * which represents the minor version of the libmanette headers you have
     * included when compiling your code.
     * @returns the minor version number of the libmanette library
     */
    function get_minor_version(): number;
    namespace Device {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'absolute-axis-changed': (arg0: Axis, arg1: number) => void;
            'button-pressed': (arg0: Button) => void;
            'button-released': (arg0: Button) => void;
            disconnected: () => void;
            'unmapped-absolute-axis-changed': (arg0: number, arg1: number) => void;
            'unmapped-button-pressed': (arg0: number) => void;
            'unmapped-button-released': (arg0: number) => void;
            'unmapped-hat-axis-changed': (arg0: number, arg1: number) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * An object representing a physical gamepad.
     *
     * See also: [class`Monitor]`.
     */
    class Device extends GObject.Object {
        static $gtype: GObject.GType<Device>;

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

        /**
         * Gets the timestamp of when the current event was emitted on `self`.
         *
         * Use this timestamp to ensure external factors such as synchronous disk writes
         * don't influence your timing computations.
         * @returns the timestamp of when the current event was emitted
         */
        get_current_event_time(): number;
        /**
         * Gets the device type of `self`.
         * @returns the device type
         */
        get_device_type(): DeviceType;
        /**
         * Gets the identifier used by SDL mappings to discriminate game controller
         * devices.
         * @returns the identifier used by SDL mappings
         */
        get_guid(): string;
        /**
         * Gets the user mapping for `self,` or default mapping if there isn't any.
         *
         * Can return `NULL` if there's no mapping or `self` doesn't support mappings.
         * @returns the mapping for @self
         */
        get_mapping(): string | null;
        /**
         * Gets the device's name.
         * @returns the name of @self
         */
        get_name(): string;
        /**
         * Gets whether the device has `axis`.
         * @param axis an axis
         * @returns whether the device has @axis
         */
        has_axis(axis: Axis | null): boolean;
        /**
         * Gets whether the device has `button`.
         * @param button a button
         * @returns whether the device has @button
         */
        has_button(button: Button | null): boolean;
        /**
         * Gets whether the device has the given input.
         *
         * If the input is present, it means that the device can send events for it
         * regardless of whether the device is mapped or not.
         * @param type the input type
         * @param code the input code
         * @returns whether the device has the given input
         */
        has_input(type: number, code: number): boolean;
        /**
         * Gets whether `self` supports rumble.
         * @returns whether @self supports rumble
         */
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
        /**
         * Make `self` rumble during `milliseconds` milliseconds.
         *
         * The heavy and light motors will rumble at their respectively defined
         * magnitudes.
         *
         * The duration cannot exceed 32767 milliseconds.
         * @param strong_magnitude the magnitude for the heavy motor
         * @param weak_magnitude the magnitude for the light motor
         * @param milliseconds the rumble effect play time in milliseconds
         * @returns whether the rumble effect was played
         */
        rumble(strong_magnitude: number, weak_magnitude: number, milliseconds: number): boolean;
        /**
         * Saves `mapping_string` as the user mapping for `self`.
         * @param mapping_string the mapping string
         */
        save_user_mapping(mapping_string: string): void;
        /**
         * Gets whether `self` supports mapping.
         * @returns whether @self supports mapping
         */
        supports_mapping(): boolean;
    }

    namespace Monitor {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'device-connected': (arg0: Device) => void;
            'device-disconnected': (arg0: Device) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * An object monitoring the availability of devices.
     *
     * See also: [class`Device]`.
     */
    class Monitor extends GObject.Object {
        static $gtype: GObject.GType<Monitor>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Monitor.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Monitor.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): Monitor;

        // Signals

        connect<K extends keyof Monitor.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Monitor.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Monitor.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Monitor.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Monitor.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Monitor.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Lists the currently connected devices.
         * @returns the list of devices
         */
        list_devices(): Device[];
    }

    type DeviceClass = typeof Device;
    type MonitorClass = typeof Monitor;
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
