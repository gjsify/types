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
import type Rest from '@girs/rest-0.7';
import type Soup from '@girs/soup-2.4';
import type Gio from '@girs/gio-2.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type GModule from '@girs/gmodule-2.0';

export namespace GoVirt {
    /**
     * GoVirt-1.0
     */

    class ProxyError extends GLib.Error {
        static $gtype: GObject.GType<ProxyError>;

        // Static fields

        static PARSING_FAILED: number;
        static ACTION_FAILED: number;
        static FAULT: number;

        // Constructors

        constructor(options: { message: string; code: number });
        _init(...args: any[]): void;

        // Static methods

        static quark(): GLib.Quark;
    }

    class RestCallError extends GLib.Error {
        static $gtype: GObject.GType<RestCallError>;

        // Static fields

        static XML: number;

        // Constructors

        constructor(options: { message: string; code: number });
        _init(...args: any[]): void;

        // Static methods

        static quark(): GLib.Quark;
    }

    export namespace VmDisplayType {
        export const $gtype: GObject.GType<VmDisplayType>;
    }

    enum VmDisplayType {
        SPICE,
        VNC,
    }

    export namespace VmState {
        export const $gtype: GObject.GType<VmState>;
    }

    enum VmState {
        DOWN,
        UP,
        REBOOTING,
    }
    function proxy_error_quark(): GLib.Quark;
    function rest_call_error_quark(): GLib.Quark;
    namespace Proxy {
        // Signal signatures
        interface SignalSignatures extends Rest.Proxy.SignalSignatures {
            'notify::admin': (pspec: GObject.ParamSpec) => void;
            'notify::ca-cert': (pspec: GObject.ParamSpec) => void;
            'notify::binding-required': (pspec: GObject.ParamSpec) => void;
            'notify::disable-cookies': (pspec: GObject.ParamSpec) => void;
            'notify::password': (pspec: GObject.ParamSpec) => void;
            'notify::ssl-ca-file': (pspec: GObject.ParamSpec) => void;
            'notify::ssl-strict': (pspec: GObject.ParamSpec) => void;
            'notify::url-format': (pspec: GObject.ParamSpec) => void;
            'notify::user-agent': (pspec: GObject.ParamSpec) => void;
            'notify::username': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Rest.Proxy.ConstructorProps {
            admin: boolean;
            ca_cert: any[];
            caCert: any[];
        }
    }

    class Proxy extends Rest.Proxy {
        static $gtype: GObject.GType<Proxy>;

        // Properties

        get admin(): boolean;
        set admin(val: boolean);
        get ca_cert(): any[];
        set ca_cert(val: any[]);
        get caCert(): any[];
        set caCert(val: any[]);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Proxy.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Proxy.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](uri: string): Proxy;

        // Signals

        connect<K extends keyof Proxy.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Proxy.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Proxy.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Proxy.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Proxy.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Proxy.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        fetch_ca_certificate(): boolean;
        fetch_ca_certificate_async(cancellable: Gio.Cancellable): Promise<Uint8Array>;
        fetch_ca_certificate_async(cancellable: Gio.Cancellable, callback: Gio.AsyncReadyCallback<this>): void;
        fetch_ca_certificate_async(
            cancellable: Gio.Cancellable,
            callback?: Gio.AsyncReadyCallback<this>,
        ): Promise<Uint8Array> | void;
        fetch_ca_certificate_finish(result: Gio.AsyncResult): Uint8Array;
        fetch_vms(): boolean;
        fetch_vms_async(cancellable: Gio.Cancellable): Promise<Vm[]>;
        fetch_vms_async(cancellable: Gio.Cancellable, callback: Gio.AsyncReadyCallback<this>): void;
        fetch_vms_async(cancellable: Gio.Cancellable, callback?: Gio.AsyncReadyCallback<this>): Promise<Vm[]> | void;
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

    namespace Vm {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::display': (pspec: GObject.ParamSpec) => void;
            'notify::href': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::state': (pspec: GObject.ParamSpec) => void;
            'notify::uuid': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            display: VmDisplay;
            href: string;
            name: string;
            state: VmState;
            uuid: string;
        }
    }

    class Vm extends GObject.Object {
        static $gtype: GObject.GType<Vm>;

        // Properties

        get display(): VmDisplay;
        set display(val: VmDisplay);
        get href(): string;
        set href(val: string);
        get name(): string;
        set name(val: string);
        get state(): VmState;
        set state(val: VmState);
        get uuid(): string;
        set uuid(val: string);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Vm.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Vm.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): Vm;

        // Signals

        connect<K extends keyof Vm.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Vm.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Vm.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Vm.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Vm.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Vm.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        get_ticket(proxy: Proxy): boolean;
        get_ticket_async(proxy: Proxy, cancellable: Gio.Cancellable): Promise<boolean>;
        get_ticket_async(proxy: Proxy, cancellable: Gio.Cancellable, callback: Gio.AsyncReadyCallback<this>): void;
        get_ticket_async(
            proxy: Proxy,
            cancellable: Gio.Cancellable,
            callback?: Gio.AsyncReadyCallback<this>,
        ): Promise<boolean> | void;
        get_ticket_finish(result: Gio.AsyncResult): boolean;
        start(proxy: Proxy): boolean;
        start_async(proxy: Proxy, cancellable: Gio.Cancellable): Promise<boolean>;
        start_async(proxy: Proxy, cancellable: Gio.Cancellable, callback: Gio.AsyncReadyCallback<this>): void;
        start_async(
            proxy: Proxy,
            cancellable: Gio.Cancellable,
            callback?: Gio.AsyncReadyCallback<this>,
        ): Promise<boolean> | void;
        start_finish(result: Gio.AsyncResult): boolean;
        stop(proxy: Proxy): boolean;
        stop_async(proxy: Proxy, cancellable: Gio.Cancellable): Promise<boolean>;
        stop_async(proxy: Proxy, cancellable: Gio.Cancellable, callback: Gio.AsyncReadyCallback<this>): void;
        stop_async(
            proxy: Proxy,
            cancellable: Gio.Cancellable,
            callback?: Gio.AsyncReadyCallback<this>,
        ): Promise<boolean> | void;
        stop_finish(result: Gio.AsyncResult): boolean;
    }

    namespace VmDisplay {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::address': (pspec: GObject.ParamSpec) => void;
            'notify::expiry': (pspec: GObject.ParamSpec) => void;
            'notify::monitor-count': (pspec: GObject.ParamSpec) => void;
            'notify::port': (pspec: GObject.ParamSpec) => void;
            'notify::secure-port': (pspec: GObject.ParamSpec) => void;
            'notify::ticket': (pspec: GObject.ParamSpec) => void;
            'notify::type': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            address: string;
            expiry: number;
            monitor_count: number;
            monitorCount: number;
            port: number;
            secure_port: number;
            securePort: number;
            ticket: string;
            type: VmDisplayType;
        }
    }

    class VmDisplay extends GObject.Object {
        static $gtype: GObject.GType<VmDisplay>;

        // Properties

        get address(): string;
        set address(val: string);
        get expiry(): number;
        set expiry(val: number);
        get monitor_count(): number;
        set monitor_count(val: number);
        get monitorCount(): number;
        set monitorCount(val: number);
        get port(): number;
        set port(val: number);
        get secure_port(): number;
        set secure_port(val: number);
        get securePort(): number;
        set securePort(val: number);
        get ticket(): string;
        set ticket(val: string);
        get type(): VmDisplayType;
        set type(val: VmDisplayType);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: VmDisplay.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<VmDisplay.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): VmDisplay;

        // Signals

        connect<K extends keyof VmDisplay.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, VmDisplay.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof VmDisplay.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, VmDisplay.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof VmDisplay.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<VmDisplay.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;
    }

    type ProxyClass = typeof Proxy;
    abstract class ProxyPrivate {
        static $gtype: GObject.GType<ProxyPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type VmClass = typeof Vm;
    type VmDisplayClass = typeof VmDisplay;
    abstract class VmDisplayPrivate {
        static $gtype: GObject.GType<VmDisplayPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    abstract class VmPrivate {
        static $gtype: GObject.GType<VmPrivate>;

        // Constructors

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

export default GoVirt;

// END
