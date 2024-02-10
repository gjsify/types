/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './umockdev-1.0-ambient.d.ts';
import './umockdev-1.0-import.d.ts';
/**
 * UMockdev-1.0
 */

import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';

export namespace UMockdev {
    class Error extends GLib.Error {
        // Own fields of UMockdev-1.0.Error

        PARSE: number;
        VALUE: number;

        // Constructors of UMockdev-1.0.Error

        constructor(options: { message: string; code: number });
    }

    function in_mock_environment(): boolean;
    module Testbed {
        // Constructor properties interface
    }

    class Testbed extends GObject.Object {
        // Constructors of UMockdev-1.0.Testbed

        static ['new'](): Testbed;

        // Owm methods of UMockdev-1.0.Testbed

        get_root_dir(): string;
        get_sys_dir(): string;
        set_attribute(devpath: string, name: string, value: string): void;
        set_attribute_binary(devpath: string, name: string, value: Uint8Array): void;
        set_attribute_int(devpath: string, name: string, value: number): void;
        set_attribute_hex(devpath: string, name: string, value: number): void;
        set_attribute_link(devpath: string, name: string, value: string): void;
        get_property(devpath: string, name: string): string | null;
        set_property(devpath: string, name: string, value: string): void;
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
    }

    class IoctlData extends GObject.Object {
        // Own fields of UMockdev-1.0.IoctlData

        data: Uint8Array;
        data_length1: number;
        client_addr: number;

        // Owm methods of UMockdev-1.0.IoctlData

        compat_ref(): IoctlData | null;
        compat_unref(): void;
        resolve(offset: number, len: number): IoctlData | null;
        set_ptr(offset: number, child: IoctlData): boolean;
        reload(): boolean;
        update(offset: number, new_data: Uint8Array): void;
        retrieve(): void;
    }

    module IoctlClient {
        // Constructor properties interface
    }

    class IoctlClient extends GObject.Object {
        // Own properties of UMockdev-1.0.IoctlClient

        readonly devnode: string;
        readonly request: number;
        readonly arg: IoctlData;
        readonly connected: boolean;

        // Owm methods of UMockdev-1.0.IoctlClient

        get_devnode(): string;
        get_request(): number;
        get_arg(): IoctlData;
        get_connected(): boolean;
        execute(): number;
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
    }

    class IoctlBase extends GObject.Object {
        // Constructors of UMockdev-1.0.IoctlBase

        static ['new'](): IoctlBase;

        // Owm methods of UMockdev-1.0.IoctlBase

        handle_ioctl(client: IoctlClient): boolean;
        handle_read(client: IoctlClient): boolean;
        handle_write(client: IoctlClient): boolean;
    }

    class TestbedClass {}

    class TestbedPrivate {}

    class IoctlDataClass {}

    class IoctlDataPrivate {}

    class IoctlClientClass {}

    class IoctlClientPrivate {}

    class IoctlBaseClass {}

    class IoctlBasePrivate {}

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
