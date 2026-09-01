
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
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';

export namespace Libinsane {

    /**
     * Libinsane-1.0
     */


    /**
     * @gir-type Enum
     */
    enum ConstraintType {
        NONE = 0,
        RANGE = 1,
        LIST = 2,
    }


    /**
     * @gir-type Enum
     */
    enum DeviceLocations {
        ANY = 0,
        LOCAL_ONLY = 1,
    }


    /**
     * @gir-type Struct
     */
    class Error extends GLib.Error {
        static $gtype: GObject.GType<GLib.Error>;

        // Static fields
        static OK: number;

        static CANCELLED: number;

        static DEVICE_BUSY: number;

        static UNSUPPORTED: number;

        static INVALID_VALUE: number;

        static JAMMED: number;

        static COVER_OPEN: number;

        static IO_ERROR: number;

        static NO_MEM: number;

        static ACCESS_DENIED: number;

        static HW_IS_LOCKED: number;

        static INTERNAL_IMG_FORMAT_NOT_SUPPORTED: number;

        static INTERNAL_NOT_IMPLEMENTED: number;

        static INTERNAL_UNKNOWN_ERROR: number;

        static OFFLINE: number;

        // Constructors
        constructor(options: { message: string; code: number });
    }


    /**
     * @gir-type Enum
     */
    enum ImgFormat {
        RAW_RGB_24 = 0,
        GRAYSCALE_8 = 1,
        BW_1 = 2,
        BMP = 3,
        GIF = 4,
        JPEG = 5,
        PNG = 6,
        CIFF = 7,
        EXIF = 8,
        FLASHPIX = 9,
        ICO = 10,
        JPEG2K = 11,
        JPEG2KX = 12,
        MEMORYBMP = 13,
        PHOTOCD = 14,
        PICT = 15,
        TIFF = 16,
    }


    /**
     * @gir-type Enum
     */
    enum ItemType {
        DEVICE = 0,
        FLATBED = 1,
        ADF = 2,
        UNIDENTIFIED = -1,
    }


    /**
     * @gir-type Enum
     */
    enum LogLevel {
        DEBUG = 0,
        INFO = 1,
        WARNING = 2,
        ERROR = 3,
    }


    /**
     * @gir-type Enum
     */
    enum Unit {
        NONE = 0,
        PIXEL = 1,
        BIT = 2,
        MM = 3,
        DPI = 4,
        PERCENT = 5,
        MICROSECOND = 6,
    }


    function error_quark(): GLib.Quark;

    /**
     * @param logger 
     */
    function register_logger(logger: Logger): void;

    function unregister_logger(): void;

    /**
     * Not actually an enum but a bit field.
     * @gir-type Flags
     */
    enum Capability {
        NONE = 0,
        EMULATED = 1,
        AUTOMATIC = 2,
        HW_SELECT = 4,
        SW_SELECT = 8,
        INACTIVE = 16,
    }


    /**
     * @gir-type Flags
     */
    enum SetFlag {
        NONE = 0,
        INEXACT = 1,
        MUST_RELOAD_OPTIONS = 2,
        MUST_RELOAD_PARAMS = 4,
    }


    namespace Api {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class Api extends GObject.Object {
        static $gtype: GObject.GType<Api>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Api.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<Api.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static new_from_string(desc: string): Api;

        static new_safebet(): Api;

        // Signals
        /** @signal */
        connect<K extends keyof Api.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Api.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Api.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Api.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Api.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Api.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods
        static get_version(): string;

        // Methods
        cleanup(): void;

        /**
         * @param dev_id 
         * @returns LibinsaneItem object
         * @throws GLib.Error
         */
        get_device(dev_id: string): Item;

        /**
         * @param locations 
         * @returns list of available devices (LibinsaneDeviceDescriptors objects)
         * @throws GLib.Error
         */
        list_devices(locations: DeviceLocations): DeviceDescriptor[];
    }


    namespace DeviceDescriptor {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class DeviceDescriptor extends GObject.Object {
        static $gtype: GObject.GType<DeviceDescriptor>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: DeviceDescriptor.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<DeviceDescriptor.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals
        /** @signal */
        connect<K extends keyof DeviceDescriptor.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DeviceDescriptor.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof DeviceDescriptor.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DeviceDescriptor.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof DeviceDescriptor.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<DeviceDescriptor.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        get_dev_id(): string;

        get_dev_model(): string;

        get_dev_type(): string;

        get_dev_vendor(): string;

        /**
         * Convenience method: allow to see quickly which device is designated by this object.
         * Do not use in production code.
         */
        to_string(): string;
    }


    namespace Item {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class Item extends GObject.Object {
        static $gtype: GObject.GType<Item>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Item.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<Item.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals
        /** @signal */
        connect<K extends keyof Item.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Item.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Item.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Item.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Item.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Item.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * @throws GLib.Error
         */
        close(): void;

        /**
         * See [C-API](../doxygen/html/structlis__item.html#ae4039acefa6acf85a110dec491340411)
         * @returns list of children items (usually scan sources)
         * @throws GLib.Error
         */
        get_children(): Item[];

        get_item_type(): ItemType;

        /**
         * @returns Item's name
         */
        get_name(): string;

        /**
         * See [C-API](../doxygen/html/structlis__item.html#aa2e301604accfe64461b36e28365bf9e)
         * @returns item scan options.
         * @throws GLib.Error
         */
        get_options(): OptionDescriptor[];

        /**
         * @returns item scan parameters.
         * @throws GLib.Error
         */
        scan_start(): ScanSession;
    }


    namespace OptionDescriptor {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class OptionDescriptor extends GObject.Object {
        static $gtype: GObject.GType<OptionDescriptor>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: OptionDescriptor.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<OptionDescriptor.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals
        /** @signal */
        connect<K extends keyof OptionDescriptor.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, OptionDescriptor.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof OptionDescriptor.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, OptionDescriptor.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof OptionDescriptor.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<OptionDescriptor.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        get_capabilities(): Capability;

        /**
         * `self` option for which we want the constraint
         * @returns item scan options.
         */
        get_constraint(): unknown[];

        get_constraint_type(): ConstraintType;

        get_desc(): string;

        get_name(): string;

        get_title(): string;

        /**
         * @throws GLib.Error
         */
        get_value(): unknown;

        get_value_type(): GObject.GType;

        get_value_unit(): Unit;

        is_readable(): boolean;

        is_writable(): boolean;

        /**
         * @param value 
         * @throws GLib.Error
         */
        set_value(value: GObject.Value | any): SetFlag;
    }


    namespace ScanParameters {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class ScanParameters extends GObject.Object {
        static $gtype: GObject.GType<ScanParameters>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: ScanParameters.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<ScanParameters.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals
        /** @signal */
        connect<K extends keyof ScanParameters.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ScanParameters.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof ScanParameters.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ScanParameters.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof ScanParameters.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<ScanParameters.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        get_format(): ImgFormat;

        get_height(): number;

        get_image_size(): number;

        get_width(): number;
    }


    namespace ScanSession {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class ScanSession extends GObject.Object {
        static $gtype: GObject.GType<ScanSession>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: ScanSession.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<ScanSession.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals
        /** @signal */
        connect<K extends keyof ScanSession.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ScanSession.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof ScanSession.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ScanSession.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof ScanSession.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<ScanSession.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        cancel(): void;

        end_of_feed(): boolean;

        end_of_page(): boolean;

        /**
         * @returns item scan parameters.
         * @throws GLib.Error
         */
        get_scan_parameters(): ScanParameters;

        /**
         * You must call `libinsane_scan_session_end_of_feed()` and `libinsane_scan_session_end_of_page()`
         * after each call to this function before calling it again.
         * @param buffer buffer to read data
         * @returns Number of bytes read, or -1 on error
         * @throws GLib.Error
         */
        read(buffer: Uint8Array | string): number;

        /**
         * @param lng number of bytes wanted
         * @returns a new {@link GLib.Bytes}, or `null` if an error occured
         * @throws GLib.Error
         */
        read_bytes(lng: bigint | number): GLib.Bytes;
    }


    /**
     * @gir-type Alias
     */
    type ApiClass = typeof Api;

    /**
     * @gir-type Struct
     */
    abstract class ApiPrivate {
        static $gtype: GObject.GType<ApiPrivate>;
    }


    /**
     * @gir-type Alias
     */
    type DeviceDescriptorClass = typeof DeviceDescriptor;

    /**
     * @gir-type Struct
     */
    abstract class DeviceDescriptorPrivate {
        static $gtype: GObject.GType<DeviceDescriptorPrivate>;
    }


    /**
     * @gir-type Alias
     */
    type ItemClass = typeof Item;

    /**
     * @gir-type Struct
     */
    abstract class ItemPrivate {
        static $gtype: GObject.GType<ItemPrivate>;
    }


    /**
     * @gir-type Alias
     */
    type LoggerInterface = typeof Logger;

    /**
     * @gir-type Alias
     */
    type OptionDescriptorClass = typeof OptionDescriptor;

    /**
     * @gir-type Struct
     */
    abstract class OptionDescriptorPrivate {
        static $gtype: GObject.GType<OptionDescriptorPrivate>;
    }


    /**
     * @gir-type Alias
     */
    type ScanParametersClass = typeof ScanParameters;

    /**
     * @gir-type Struct
     */
    abstract class ScanParametersPrivate {
        static $gtype: GObject.GType<ScanParametersPrivate>;
    }


    /**
     * @gir-type Alias
     */
    type ScanSessionClass = typeof ScanSession;

    /**
     * @gir-type Struct
     */
    abstract class ScanSessionPrivate {
        static $gtype: GObject.GType<ScanSessionPrivate>;
    }


    namespace Logger {
        /**
         * Interface for implementing Logger.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface {

            // Virtual methods
            /**
             * @param lvl 
             * @param msg 
             * @virtual
             */
            vfunc_log(lvl: LogLevel, msg: string): void;
        }


        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    export interface LoggerNamespace {
        $gtype: GObject.GType<Logger>;
        prototype: Logger;
    }
    /**
     * @gir-type Interface
     */
    interface Logger extends GObject.Object, Logger.Interface {

        // Methods
        /**
         * @param lvl 
         * @param msg 
         */
        log(lvl: LogLevel, msg: string): void;
    }


    export const Logger: LoggerNamespace & {
        new (): Logger; // This allows `obj instanceof Logger`
    };

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

export default Libinsane;

// END
