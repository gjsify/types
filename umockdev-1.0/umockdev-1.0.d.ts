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

export namespace UMockdev {
    /**
     * UMockdev-1.0
     */

    /**
     * @gir-type Struct
     */
    class Error extends GLib.Error {
        static $gtype: GObject.GType<GLib.Error>;

        // Static fields

        static PARSE: number;
        static VALUE: number;

        // Constructors

        constructor(options: { message: string; code: number });
    }

    function in_mock_environment(): boolean;
    namespace Testbed {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class Testbed extends GObject.Object {
        static $gtype: GObject.GType<Testbed>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Testbed.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Testbed.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): Testbed;

        // Signals

        /** @signal */
        connect<K extends keyof Testbed.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Testbed.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Testbed.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Testbed.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Testbed.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Testbed.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        get_root_dir(): string;
        get_sys_dir(): string;
        /**
         * @param devpath
         * @param name
         * @param value
         */
        set_attribute(devpath: string, name: string, value: string): void;
        /**
         * @param devpath
         * @param name
         * @param value
         */
        set_attribute_binary(devpath: string, name: string, value: Uint8Array | string): void;
        /**
         * @param devpath
         * @param name
         * @param value
         */
        set_attribute_int(devpath: string, name: string, value: number): void;
        /**
         * @param devpath
         * @param name
         * @param value
         */
        set_attribute_hex(devpath: string, name: string, value: number): void;
        /**
         * @param devpath
         * @param name
         * @param value
         */
        set_attribute_link(devpath: string, name: string, value: string): void;
        /**
         * @param devpath
         * @param name
         */
        get_property(devpath: string, name: string): string | null;
        /**
         * @param args
         */
        // Conflicted with GObject.Object.get_property
        get_property(...args: never[]): any;
        /**
         * @param devpath
         * @param name
         * @param value
         */
        set_property(devpath: string, name: string, value: string): void;
        /**
         * @param args
         */
        // Conflicted with GObject.Object.set_property
        set_property(...args: never[]): any;
        /**
         * @param devpath
         * @param name
         * @param value
         */
        set_property_int(devpath: string, name: string, value: number): void;
        /**
         * @param devpath
         * @param name
         * @param value
         */
        set_property_hex(devpath: string, name: string, value: number): void;
        /**
         * @param subsystem
         * @param name
         * @param parent
         * @param attributes
         * @param properties
         */
        add_devicev(
            subsystem: string,
            name: string,
            parent: string | null,
            attributes: string[],
            properties: string[],
        ): string | null;
        /**
         * @param syspath
         */
        remove_device(syspath: string): void;
        /**
         * @param data
         */
        add_from_string(data: string): boolean;
        /**
         * @param path
         */
        add_from_file(path: string): boolean;
        /**
         * @param devpath
         * @param action
         */
        uevent(devpath: string, action: string): void;
        /**
         * @param dev
         * @param handler
         */
        attach_ioctl(dev: string, handler: IoctlBase): boolean;
        /**
         * @param dev
         */
        detach_ioctl(dev: string): boolean;
        /**
         * @param dev
         * @param recordfile
         */
        load_ioctl(dev: string | null, recordfile: string): boolean;
        /**
         * @param sysfs
         * @param recordfile
         */
        load_pcap(sysfs: string, recordfile: string): boolean;
        /**
         * @param dev
         * @param recordfile
         */
        load_script(dev: string | null, recordfile: string): boolean;
        /**
         * @param path
         * @param type
         * @param recordfile
         */
        load_socket_script(path: string, type: number, recordfile: string): boolean;
        /**
         * @param dev
         * @param eventsfile
         */
        load_evemu_events(dev: string | null, eventsfile: string): boolean;
        disable(): void;
        enable(): void;
        clear(): void;
        /**
         * @param devnode
         */
        get_dev_fd(devnode: string): number;
    }

    namespace IoctlData {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class IoctlData extends GObject.Object {
        static $gtype: GObject.GType<IoctlData>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: IoctlData.SignalSignatures;

        // Fields

        data: Uint8Array;
        data_length1: number;
        client_addr: number;

        // Constructors

        constructor(properties?: Partial<IoctlData.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof IoctlData.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, IoctlData.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof IoctlData.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, IoctlData.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof IoctlData.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<IoctlData.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        compat_ref(): IoctlData | null;
        compat_unref(): void;
        /**
         * @param offset
         * @param len
         */
        resolve(offset: number, len: number): IoctlData | null;
        /**
         * @param offset
         * @param child
         */
        set_ptr(offset: number, child: IoctlData): boolean;
        reload(): boolean;
        /**
         * @param offset
         * @param new_data
         */
        update(offset: number, new_data: Uint8Array | string): void;
        retrieve(): Uint8Array;
    }

    namespace IoctlClient {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::devnode': (pspec: GObject.ParamSpec) => void;
            'notify::request': (pspec: GObject.ParamSpec) => void;
            'notify::arg': (pspec: GObject.ParamSpec) => void;
            'notify::connected': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            devnode: string;
            request: number;
            arg: IoctlData;
            connected: boolean;
        }
    }

    /**
     * @gir-type Class
     */
    class IoctlClient extends GObject.Object {
        static $gtype: GObject.GType<IoctlClient>;

        // Properties

        /**
         * @read-only
         */
        get devnode(): string;
        /**
         * @read-only
         */
        get request(): number;
        /**
         * @read-only
         */
        get arg(): IoctlData;
        /**
         * @read-only
         */
        get connected(): boolean;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: IoctlClient.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<IoctlClient.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof IoctlClient.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, IoctlClient.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof IoctlClient.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, IoctlClient.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof IoctlClient.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<IoctlClient.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        get_devnode(): string;
        get_request(): number;
        get_arg(): IoctlData;
        get_connected(): boolean;
        execute(): [number, number];
        /**
         * @param res
         * @param errno_
         */
        complete(res: number, errno_: number): void;
        abort(): void;
    }

    namespace IoctlBase {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            /**
             * @signal
             */
            'client-connected': (arg0: IoctlClient) => void;
            /**
             * @signal
             */
            'client-vanished': (arg0: IoctlClient) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class IoctlBase extends GObject.Object {
        static $gtype: GObject.GType<IoctlBase>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: IoctlBase.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<IoctlBase.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): IoctlBase;

        // Signals

        /** @signal */
        connect<K extends keyof IoctlBase.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, IoctlBase.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof IoctlBase.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, IoctlBase.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof IoctlBase.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<IoctlBase.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods

        /**
         * @param client
         * @virtual
         */
        vfunc_handle_ioctl(client: IoctlClient): boolean;
        /**
         * @param client
         * @virtual
         */
        vfunc_handle_read(client: IoctlClient): boolean;
        /**
         * @param client
         * @virtual
         */
        vfunc_handle_write(client: IoctlClient): boolean;
        /**
         * @param client
         * @virtual
         */
        vfunc_client_connected(client: IoctlClient): void;
        /**
         * @param client
         * @virtual
         */
        vfunc_client_vanished(client: IoctlClient): void;

        // Methods

        /**
         * @param client
         */
        handle_ioctl(client: IoctlClient): boolean;
        /**
         * @param client
         */
        handle_read(client: IoctlClient): boolean;
        /**
         * @param client
         */
        handle_write(client: IoctlClient): boolean;
    }

    /**
     * @gir-type Alias
     */
    type TestbedClass = typeof Testbed;
    /**
     * @gir-type Struct
     */
    abstract class TestbedPrivate {
        static $gtype: GObject.GType<TestbedPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type IoctlDataClass = typeof IoctlData;
    /**
     * @gir-type Struct
     */
    abstract class IoctlDataPrivate {
        static $gtype: GObject.GType<IoctlDataPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type IoctlClientClass = typeof IoctlClient;
    /**
     * @gir-type Struct
     */
    abstract class IoctlClientPrivate {
        static $gtype: GObject.GType<IoctlClientPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type IoctlBaseClass = typeof IoctlBase;
    /**
     * @gir-type Struct
     */
    abstract class IoctlBasePrivate {
        static $gtype: GObject.GType<IoctlBasePrivate>;
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

export default UMockdev;

// END
