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

    /**
     * @gir-type Struct
     */
    class ProxyError extends GLib.Error {
        static $gtype: GObject.GType<GLib.Error>;

        // Static fields

        static PARSING_FAILED: number;
        static ACTION_FAILED: number;
        static FAULT: number;

        // Constructors

        constructor(options: { message: string; code: number });

        // Static methods

        static quark(): GLib.Quark;
    }

    /**
     * @gir-type Struct
     */
    class RestCallError extends GLib.Error {
        static $gtype: GObject.GType<GLib.Error>;

        // Static fields

        static XML: number;

        // Constructors

        constructor(options: { message: string; code: number });

        // Static methods

        static quark(): GLib.Quark;
    }

    export namespace VmDisplayType {
        export const $gtype: GObject.GType<VmDisplayType>;
    }

    /**
     * @gir-type Enum
     */
    enum VmDisplayType {
        SPICE,
        VNC,
    }

    export namespace VmState {
        export const $gtype: GObject.GType<VmState>;
    }

    /**
     * @gir-type Enum
     */
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

    /**
     * @gir-type Class
     */
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

        /** @signal */
        connect<K extends keyof Proxy.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Proxy.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Proxy.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Proxy.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Proxy.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Proxy.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        fetch_ca_certificate(): boolean;
        /**
         * @param cancellable
         */
        fetch_ca_certificate_async(cancellable: Gio.Cancellable): globalThis.Promise<Uint8Array>;
        /**
         * @param cancellable
         * @param callback
         */
        fetch_ca_certificate_async(cancellable: Gio.Cancellable, callback: Gio.AsyncReadyCallback<this>): void;
        /**
         * @param cancellable
         * @param callback
         */
        fetch_ca_certificate_async(
            cancellable: Gio.Cancellable,
            callback?: Gio.AsyncReadyCallback<this>,
        ): globalThis.Promise<Uint8Array> | void;
        /**
         * @param result
         */
        fetch_ca_certificate_finish(result: Gio.AsyncResult): Uint8Array;
        fetch_vms(): boolean;
        /**
         * @param cancellable
         */
        fetch_vms_async(cancellable: Gio.Cancellable): globalThis.Promise<Vm[]>;
        /**
         * @param cancellable
         * @param callback completion callback
         */
        fetch_vms_async(cancellable: Gio.Cancellable, callback: Gio.AsyncReadyCallback<this>): void;
        /**
         * @param cancellable
         * @param callback completion callback
         */
        fetch_vms_async(
            cancellable: Gio.Cancellable,
            callback?: Gio.AsyncReadyCallback<this>,
        ): globalThis.Promise<Vm[]> | void;
        /**
         * @param result async method result
         * @returns the list of {@link GoVirt.Vm} associated with {@link GoVirt.Proxy}. The returned list should not be freed nor modified, and can become invalid any time a {@link GoVirt.Proxy} call completes.
         */
        fetch_vms_finish(result: Gio.AsyncResult): Vm[];
        /**
         * Gets the list of remote VMs from the proxy object.
         * This method does not initiate any network activity, the remote VM list
         * must have been fetched with `ovirt_proxy_fetch_vms()` or
         * `ovirt_proxy_fetch_vms_async()` before calling this function.
         * @returns the list of {@link GoVirt.Vm} associated with {@link GoVirt.Proxy}. The returned list should not be freed nor modified, and can become invalid any time a {@link GoVirt.Proxy} call completes.
         */
        get_vms(): Vm[];
        /**
         * Looks up a virtual machine whose name is `name`. If it cannot be found,
         * NULL is returned. This method does not initiate any network activity,
         * the remote VM list must have been fetched with `ovirt_proxy_fetch_vms()`
         * or `ovirt_proxy_fetch_vms_async()` before calling this function.
         * @param vm_name name of the virtual machine to lookup
         * @returns a {@link GoVirt.Vm} whose name is `name` or NULL
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

    /**
     * @gir-type Class
     */
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

        /** @signal */
        connect<K extends keyof Vm.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Vm.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Vm.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Vm.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Vm.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Vm.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * @param proxy
         */
        get_ticket(proxy: Proxy): boolean;
        /**
         * @param proxy
         * @param cancellable
         */
        get_ticket_async(proxy: Proxy, cancellable: Gio.Cancellable): globalThis.Promise<boolean>;
        /**
         * @param proxy
         * @param cancellable
         * @param callback
         */
        get_ticket_async(proxy: Proxy, cancellable: Gio.Cancellable, callback: Gio.AsyncReadyCallback<this>): void;
        /**
         * @param proxy
         * @param cancellable
         * @param callback
         */
        get_ticket_async(
            proxy: Proxy,
            cancellable: Gio.Cancellable,
            callback?: Gio.AsyncReadyCallback<this>,
        ): globalThis.Promise<boolean> | void;
        /**
         * @param result
         */
        get_ticket_finish(result: Gio.AsyncResult): boolean;
        /**
         * @param proxy
         */
        start(proxy: Proxy): boolean;
        /**
         * @param proxy
         * @param cancellable
         */
        start_async(proxy: Proxy, cancellable: Gio.Cancellable): globalThis.Promise<boolean>;
        /**
         * @param proxy
         * @param cancellable
         * @param callback
         */
        start_async(proxy: Proxy, cancellable: Gio.Cancellable, callback: Gio.AsyncReadyCallback<this>): void;
        /**
         * @param proxy
         * @param cancellable
         * @param callback
         */
        start_async(
            proxy: Proxy,
            cancellable: Gio.Cancellable,
            callback?: Gio.AsyncReadyCallback<this>,
        ): globalThis.Promise<boolean> | void;
        /**
         * @param result
         */
        start_finish(result: Gio.AsyncResult): boolean;
        /**
         * @param proxy
         */
        stop(proxy: Proxy): boolean;
        /**
         * @param proxy
         * @param cancellable
         */
        stop_async(proxy: Proxy, cancellable: Gio.Cancellable): globalThis.Promise<boolean>;
        /**
         * @param proxy
         * @param cancellable
         * @param callback
         */
        stop_async(proxy: Proxy, cancellable: Gio.Cancellable, callback: Gio.AsyncReadyCallback<this>): void;
        /**
         * @param proxy
         * @param cancellable
         * @param callback
         */
        stop_async(
            proxy: Proxy,
            cancellable: Gio.Cancellable,
            callback?: Gio.AsyncReadyCallback<this>,
        ): globalThis.Promise<boolean> | void;
        /**
         * @param result
         */
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

    /**
     * @gir-type Class
     */
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

        /** @signal */
        connect<K extends keyof VmDisplay.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, VmDisplay.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof VmDisplay.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, VmDisplay.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof VmDisplay.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<VmDisplay.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;
    }

    /**
     * @gir-type Alias
     */
    type ProxyClass = typeof Proxy;
    /**
     * @gir-type Struct
     */
    abstract class ProxyPrivate {
        static $gtype: GObject.GType<ProxyPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type VmClass = typeof Vm;
    /**
     * @gir-type Alias
     */
    type VmDisplayClass = typeof VmDisplay;
    /**
     * @gir-type Struct
     */
    abstract class VmDisplayPrivate {
        static $gtype: GObject.GType<VmDisplayPrivate>;
    }

    /**
     * @gir-type Struct
     */
    abstract class VmPrivate {
        static $gtype: GObject.GType<VmPrivate>;
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
