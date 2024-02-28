/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './govirt-1.0-ambient.d.ts';
import './govirt-1.0-import.d.ts';
/**
 * GoVirt-1.0
 */

import type Rest from '@girs/rest-0.7';
import type Soup from '@girs/soup-2.4';
import type Gio from '@girs/gio-2.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';

export namespace GoVirt {
    class ProxyError extends GLib.Error {
        // Own fields of GoVirt-1.0.ProxyError

        PARSING_FAILED: number;
        ACTION_FAILED: number;
        FAULT: number;

        // Constructors of GoVirt-1.0.ProxyError

        constructor(options: { message: string; code: number });

        // Owm methods of GoVirt-1.0.ProxyError

        static quark(): GLib.Quark;
    }

    class RestCallError extends GLib.Error {
        // Own fields of GoVirt-1.0.RestCallError

        XML: number;

        // Constructors of GoVirt-1.0.RestCallError

        constructor(options: { message: string; code: number });

        // Owm methods of GoVirt-1.0.RestCallError

        static quark(): GLib.Quark;
    }

    enum VmDisplayType {
        SPICE,
        VNC,
    }
    enum VmState {
        DOWN,
        UP,
        REBOOTING,
    }
    function proxy_error_quark(): GLib.Quark;
    function rest_call_error_quark(): GLib.Quark;
    module Proxy {
        // Constructor properties interface
    }

    class Proxy extends Rest.Proxy {
        // Own properties of GoVirt-1.0.Proxy

        admin: boolean;
        ca_cert: any[];
        caCert: any[];

        // Constructors of GoVirt-1.0.Proxy

        static ['new'](uri: string): Proxy;

        // Owm methods of GoVirt-1.0.Proxy

        fetch_ca_certificate(): boolean;
        fetch_ca_certificate_async(cancellable: Gio.Cancellable, callback: Gio.AsyncReadyCallback<this>): void;
        fetch_ca_certificate_finish(result: Gio.AsyncResult): Uint8Array;
        fetch_vms(): boolean;
        fetch_vms_async(cancellable: Gio.Cancellable, callback: Gio.AsyncReadyCallback<this>): void;
        fetch_vms_finish(result: Gio.AsyncResult): Vm[];
        /**
         * Gets the list of remote VMs from the proxy object.
         * This method does not initiate any network activity, the remote VM list
         * must have been fetched with ovirt_proxy_fetch_vms() or
         * ovirt_proxy_fetch_vms_async() before calling this function.
         * @returns the list of #OvirtVm associated with #OvirtProxy. The returned list should not be freed nor modified, and can become invalid any time a #OvirtProxy call completes.
         */
        get_vms(): Vm[];
        /**
         * Looks up a virtual machine whose name is `name`. If it cannot be found,
         * NULL is returned. This method does not initiate any network activity,
         * the remote VM list must have been fetched with ovirt_proxy_fetch_vms()
         * or ovirt_proxy_fetch_vms_async() before calling this function.
         * @param vm_name name of the virtual machine to lookup
         * @returns a #OvirtVm whose name is @name or NULL
         */
        lookup_vm(vm_name: string): Vm;
    }

    module Vm {
        // Constructor properties interface
    }

    class Vm extends GObject.Object {
        // Own properties of GoVirt-1.0.Vm

        display: VmDisplay;
        href: string;
        name: string;
        state: VmState;
        uuid: string;

        // Constructors of GoVirt-1.0.Vm

        static ['new'](): Vm;

        // Owm methods of GoVirt-1.0.Vm

        get_ticket(proxy: Proxy): boolean;
        get_ticket_async(proxy: Proxy, cancellable: Gio.Cancellable, callback: Gio.AsyncReadyCallback<this>): void;
        get_ticket_finish(result: Gio.AsyncResult): boolean;
        start(proxy: Proxy): boolean;
        start_async(proxy: Proxy, cancellable: Gio.Cancellable, callback: Gio.AsyncReadyCallback<this>): void;
        start_finish(result: Gio.AsyncResult): boolean;
        stop(proxy: Proxy): boolean;
        stop_async(proxy: Proxy, cancellable: Gio.Cancellable, callback: Gio.AsyncReadyCallback<this>): void;
        stop_finish(result: Gio.AsyncResult): boolean;
    }

    module VmDisplay {
        // Constructor properties interface
    }

    class VmDisplay extends GObject.Object {
        // Own properties of GoVirt-1.0.VmDisplay

        address: string;
        expiry: number;
        monitor_count: number;
        monitorCount: number;
        port: number;
        secure_port: number;
        securePort: number;
        ticket: string;
        type: VmDisplayType;

        // Constructors of GoVirt-1.0.VmDisplay

        static ['new'](): VmDisplay;
    }

    class ProxyClass {}

    class ProxyPrivate {}

    class VmClass {
        // Own fields of GoVirt-1.0.VmClass

        padding: any[];
    }

    class VmDisplayClass {
        // Own fields of GoVirt-1.0.VmDisplayClass

        padding: any[];
    }

    class VmDisplayPrivate {}

    class VmPrivate {}

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

export default GoVirt;
// END
