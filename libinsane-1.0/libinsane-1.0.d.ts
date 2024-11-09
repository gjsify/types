/**
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 *
 * The based EJS template file is used for the generated .d.ts file of each GIR module like Gtk-4.0, GObject-2.0, ...
 */

// Module dependencies
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';

export namespace Libinsane {
    /**
     * Libinsane-1.0
     */

    export namespace ConstraintType {
        export const $gtype: GObject.GType<ConstraintType>;
    }

    enum ConstraintType {
        NONE,
        RANGE,
        LIST,
    }

    export namespace DeviceLocations {
        export const $gtype: GObject.GType<DeviceLocations>;
    }

    enum DeviceLocations {
        ANY,
        LOCAL_ONLY,
    }
    class Error extends GLib.Error {
        static $gtype: GObject.GType<Error>;

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
        _init(...args: any[]): void;
    }

    export namespace ImgFormat {
        export const $gtype: GObject.GType<ImgFormat>;
    }

    enum ImgFormat {
        RAW_RGB_24,
        GRAYSCALE_8,
        BW_1,
        BMP,
        GIF,
        JPEG,
        PNG,
        CIFF,
        EXIF,
        FLASHPIX,
        ICO,
        JPEG2K,
        JPEG2KX,
        MEMORYBMP,
        PHOTOCD,
        PICT,
        TIFF,
    }

    export namespace ItemType {
        export const $gtype: GObject.GType<ItemType>;
    }

    enum ItemType {
        DEVICE,
        FLATBED,
        ADF,
        UNIDENTIFIED,
    }

    export namespace LogLevel {
        export const $gtype: GObject.GType<LogLevel>;
    }

    enum LogLevel {
        DEBUG,
        INFO,
        WARNING,
        ERROR,
    }

    export namespace Unit {
        export const $gtype: GObject.GType<Unit>;
    }

    enum Unit {
        NONE,
        PIXEL,
        BIT,
        MM,
        DPI,
        PERCENT,
        MICROSECOND,
    }
    function error_quark(): GLib.Quark;
    function register_logger(logger: Logger): void;
    function unregister_logger(): void;
    /**
     * Not actually an enum but a bit field.
     */

    /**
     * Not actually an enum but a bit field.
     */
    export namespace Capability {
        export const $gtype: GObject.GType<Capability>;
    }

    enum Capability {
        NONE,
        EMULATED,
        AUTOMATIC,
        HW_SELECT,
        SW_SELECT,
        INACTIVE,
    }

    export namespace SetFlag {
        export const $gtype: GObject.GType<SetFlag>;
    }

    enum SetFlag {
        NONE,
        INEXACT,
        MUST_RELOAD_OPTIONS,
        MUST_RELOAD_PARAMS,
    }
    module Api {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    class Api extends GObject.Object {
        static $gtype: GObject.GType<Api>;

        // Constructors

        constructor(properties?: Partial<Api.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static new_from_string(desc: string): Api;

        static new_safebet(): Api;

        // Static methods

        static get_version(): string;

        // Methods

        cleanup(): void;
        get_device(dev_id: string): Item;
        list_devices(locations: DeviceLocations | null): DeviceDescriptor[];
    }

    module DeviceDescriptor {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    class DeviceDescriptor extends GObject.Object {
        static $gtype: GObject.GType<DeviceDescriptor>;

        // Constructors

        constructor(properties?: Partial<DeviceDescriptor.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

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

    module Item {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    class Item extends GObject.Object {
        static $gtype: GObject.GType<Item>;

        // Constructors

        constructor(properties?: Partial<Item.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Methods

        close(): void;
        /**
         * See [C-API](../doxygen/html/structlis__item.html#ae4039acefa6acf85a110dec491340411)
         * @returns list of children items (usually scan sources)
         */
        get_children(): Item[];
        get_item_type(): ItemType;
        get_name(): string;
        /**
         * See [C-API](../doxygen/html/structlis__item.html#aa2e301604accfe64461b36e28365bf9e)
         * @returns item scan options.
         */
        get_options(): OptionDescriptor[];
        scan_start(): ScanSession;
    }

    module OptionDescriptor {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    class OptionDescriptor extends GObject.Object {
        static $gtype: GObject.GType<OptionDescriptor>;

        // Constructors

        constructor(properties?: Partial<OptionDescriptor.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

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
        get_value(): unknown;
        get_value_type(): GObject.GType;
        get_value_unit(): Unit;
        is_readable(): boolean;
        is_writable(): boolean;
        set_value(value: GObject.Value | any): SetFlag;
    }

    module ScanParameters {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    class ScanParameters extends GObject.Object {
        static $gtype: GObject.GType<ScanParameters>;

        // Constructors

        constructor(properties?: Partial<ScanParameters.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Methods

        get_format(): ImgFormat;
        get_height(): number;
        get_image_size(): number;
        get_width(): number;
    }

    module ScanSession {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    class ScanSession extends GObject.Object {
        static $gtype: GObject.GType<ScanSession>;

        // Constructors

        constructor(properties?: Partial<ScanSession.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Methods

        cancel(): void;
        end_of_feed(): boolean;
        end_of_page(): boolean;
        get_scan_parameters(): ScanParameters;
        /**
         * You must call libinsane_scan_session_end_of_feed() and libinsane_scan_session_end_of_page()
         * after each call to this function before calling it again.
         * @param buffer buffer to read data
         * @returns Number of bytes read, or -1 on error
         */
        read(buffer: Uint8Array | string): number;
        read_bytes(lng: number): GLib.Bytes;
    }

    type ApiClass = typeof Api;
    abstract class ApiPrivate {
        static $gtype: GObject.GType<ApiPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type DeviceDescriptorClass = typeof DeviceDescriptor;
    abstract class DeviceDescriptorPrivate {
        static $gtype: GObject.GType<DeviceDescriptorPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type ItemClass = typeof Item;
    abstract class ItemPrivate {
        static $gtype: GObject.GType<ItemPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type LoggerInterface = typeof Logger;
    type OptionDescriptorClass = typeof OptionDescriptor;
    abstract class OptionDescriptorPrivate {
        static $gtype: GObject.GType<OptionDescriptorPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type ScanParametersClass = typeof ScanParameters;
    abstract class ScanParametersPrivate {
        static $gtype: GObject.GType<ScanParametersPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type ScanSessionClass = typeof ScanSession;
    abstract class ScanSessionPrivate {
        static $gtype: GObject.GType<ScanSessionPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    module Logger {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    export interface LoggerNamespace {
        $gtype: GObject.GType<Logger>;
        prototype: Logger;
    }
    interface Logger extends GObject.Object {
        // Methods

        log(lvl: LogLevel | null, msg: string): void;

        // Virtual methods

        vfunc_log(lvl: LogLevel, msg: string): void;
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
