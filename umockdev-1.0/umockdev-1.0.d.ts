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

export namespace UMockdev {
    /**
     * UMockdev-1.0
     */

    class Error extends GLib.Error {
        static $gtype: GObject.GType<Error>;

        // Static fields of UMockdev.Error

        static PARSE: number;
        static VALUE: number;

        // Constructors of UMockdev.Error

        constructor(options: { message: string; code: number });
        _init(...args: any[]): void;
    }

    function in_mock_environment(): boolean;
    module Testbed {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    class Testbed extends GObject.Object {
        static $gtype: GObject.GType<Testbed>;

        // Constructors of UMockdev.Testbed

        constructor(properties?: Partial<Testbed.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): Testbed;

        // Own methods of UMockdev.Testbed

        get_root_dir(): string;
        get_sys_dir(): string;
        set_attribute(devpath: string, name: string, value: string): void;
        set_attribute_binary(devpath: string, name: string, value: Uint8Array | string): void;
        set_attribute_int(devpath: string, name: string, value: number): void;
        set_attribute_hex(devpath: string, name: string, value: number): void;
        set_attribute_link(devpath: string, name: string, value: string): void;
        get_property(devpath: string, name: string): string | null;
        // Conflicted with GObject.Object.get_property
        get_property(...args: never[]): any;
        set_property(devpath: string, name: string, value: string): void;
        // Conflicted with GObject.Object.set_property
        set_property(...args: never[]): any;
        set_property_int(devpath: string, name: string, value: number): void;
        set_property_hex(devpath: string, name: string, value: number): void;
        add_devicev(
            subsystem: string,
            name: string,
            parent: string | null,
            attributes: string[],
            properties: string[],
        ): string | null;
        remove_device(syspath: string): void;
        add_from_string(data: string): boolean;
        add_from_file(path: string): boolean;
        uevent(devpath: string, action: string): void;
        attach_ioctl(dev: string, handler: IoctlBase): boolean;
        detach_ioctl(dev: string): boolean;
        load_ioctl(dev: string | null, recordfile: string): boolean;
        load_pcap(sysfs: string, recordfile: string): boolean;
        load_script(dev: string | null, recordfile: string): boolean;
        load_socket_script(path: string, type: number, recordfile: string): boolean;
        load_evemu_events(dev: string | null, eventsfile: string): boolean;
        disable(): void;
        enable(): void;
        clear(): void;
        get_dev_fd(devnode: string): number;
    }

    module IoctlData {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    class IoctlData extends GObject.Object {
        static $gtype: GObject.GType<IoctlData>;

        // Own fields of UMockdev.IoctlData

        data: Uint8Array;
        data_length1: number;
        client_addr: number;

        // Constructors of UMockdev.IoctlData

        constructor(properties?: Partial<IoctlData.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Own methods of UMockdev.IoctlData

        compat_ref(): IoctlData | null;
        compat_unref(): void;
        resolve(offset: number, len: number): IoctlData | null;
        set_ptr(offset: number, child: IoctlData): boolean;
        reload(): boolean;
        update(offset: number, new_data: Uint8Array | string): void;
        retrieve(): Uint8Array;
    }

    module IoctlClient {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            devnode: string;
            request: number;
            arg: IoctlData;
            connected: boolean;
        }
    }

    class IoctlClient extends GObject.Object {
        static $gtype: GObject.GType<IoctlClient>;

        // Own properties of UMockdev.IoctlClient

        get devnode(): string;
        get request(): number;
        get arg(): IoctlData;
        get connected(): boolean;

        // Constructors of UMockdev.IoctlClient

        constructor(properties?: Partial<IoctlClient.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Own methods of UMockdev.IoctlClient

        get_devnode(): string;
        get_request(): number;
        get_arg(): IoctlData;
        get_connected(): boolean;
        execute(): [number, number];
        complete(res: number, errno_: number): void;
        abort(): void;
    }

    module IoctlBase {
        // Signal callback interfaces

        interface ClientConnected {
            (client: IoctlClient): void;
        }

        interface ClientVanished {
            (client: IoctlClient): void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    class IoctlBase extends GObject.Object {
        static $gtype: GObject.GType<IoctlBase>;

        // Constructors of UMockdev.IoctlBase

        constructor(properties?: Partial<IoctlBase.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): IoctlBase;

        // Own signals of UMockdev.IoctlBase

        connect(id: string, callback: (...args: any[]) => any): number;
        connect_after(id: string, callback: (...args: any[]) => any): number;
        emit(id: string, ...args: any[]): void;
        connect(signal: 'client-connected', callback: (_source: this, client: IoctlClient) => void): number;
        connect_after(signal: 'client-connected', callback: (_source: this, client: IoctlClient) => void): number;
        emit(signal: 'client-connected', client: IoctlClient): void;
        connect(signal: 'client-vanished', callback: (_source: this, client: IoctlClient) => void): number;
        connect_after(signal: 'client-vanished', callback: (_source: this, client: IoctlClient) => void): number;
        emit(signal: 'client-vanished', client: IoctlClient): void;

        // Own virtual methods of UMockdev.IoctlBase

        vfunc_handle_ioctl(client: IoctlClient): boolean;
        vfunc_handle_read(client: IoctlClient): boolean;
        vfunc_handle_write(client: IoctlClient): boolean;
        vfunc_client_connected(client: IoctlClient): void;
        vfunc_client_vanished(client: IoctlClient): void;

        // Own methods of UMockdev.IoctlBase

        handle_ioctl(client: IoctlClient): boolean;
        handle_read(client: IoctlClient): boolean;
        handle_write(client: IoctlClient): boolean;
    }

    type TestbedClass = typeof Testbed;
    abstract class TestbedPrivate {
        static $gtype: GObject.GType<TestbedPrivate>;

        // Constructors of UMockdev.TestbedPrivate

        _init(...args: any[]): void;
    }

    type IoctlDataClass = typeof IoctlData;
    abstract class IoctlDataPrivate {
        static $gtype: GObject.GType<IoctlDataPrivate>;

        // Constructors of UMockdev.IoctlDataPrivate

        _init(...args: any[]): void;
    }

    type IoctlClientClass = typeof IoctlClient;
    abstract class IoctlClientPrivate {
        static $gtype: GObject.GType<IoctlClientPrivate>;

        // Constructors of UMockdev.IoctlClientPrivate

        _init(...args: any[]): void;
    }

    type IoctlBaseClass = typeof IoctlBase;
    abstract class IoctlBasePrivate {
        static $gtype: GObject.GType<IoctlBasePrivate>;

        // Constructors of UMockdev.IoctlBasePrivate

        _init(...args: any[]): void;
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
