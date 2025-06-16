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
import type AvahiCore from '@girs/avahicore-0.6';

export namespace Avahi {
    /**
     * Avahi-0.6
     */

    export namespace BrowserEvent {
        export const $gtype: GObject.GType<BrowserEvent>;
    }

    enum BrowserEvent {
        GA_BROWSER_NEW,
        GA_BROWSER_REMOVE,
        GA_BROWSER_CACHE_EXHAUSTED,
        GA_BROWSER_ALL_FOR_NOW,
        GA_BROWSER_FAILURE,
    }

    export namespace ClientFlags {
        export const $gtype: GObject.GType<ClientFlags>;
    }

    enum ClientFlags {
        GA_CLIENT_FLAG_NO_FLAGS,
        GA_CLIENT_FLAG_IGNORE_USER_CONFIG,
        GA_CLIENT_FLAG_NO_FAIL,
    }

    export namespace ClientState {
        export const $gtype: GObject.GType<ClientState>;
    }

    enum ClientState {
        GA_CLIENT_STATE_NOT_STARTED,
        GA_CLIENT_STATE_S_REGISTERING,
        GA_CLIENT_STATE_S_RUNNING,
        GA_CLIENT_STATE_S_COLLISION,
        GA_CLIENT_STATE_FAILURE,
        GA_CLIENT_STATE_CONNECTING,
    }

    export namespace EntryGroupState {
        export const $gtype: GObject.GType<EntryGroupState>;
    }

    enum EntryGroupState {
        GA_ENTRY_GROUP_STATE_UNCOMMITED,
        GA_ENTRY_GROUP_STATE_REGISTERING,
        GA_ENTRY_GROUP_STATE_ESTABLISHED,
        GA_ENTRY_GROUP_STATE_COLLISTION,
        GA_ENTRY_GROUP_STATE_FAILURE,
    }

    export namespace LookupFlags {
        export const $gtype: GObject.GType<LookupFlags>;
    }

    enum LookupFlags {
        GA_LOOKUP_NO_FLAGS,
        GA_LOOKUP_USE_WIDE_AREA,
        GA_LOOKUP_USE_MULTICAST,
        GA_LOOKUP_NO_TXT,
        GA_LOOKUP_NO_ADDRESS,
    }

    export namespace LookupResultFlags {
        export const $gtype: GObject.GType<LookupResultFlags>;
    }

    enum LookupResultFlags {
        GA_LOOKUP_RESULT_CACHED,
        GA_LOOKUP_RESULT_WIDE_AREA,
        GA_LOOKUP_RESULT_MULTICAST,
        GA_LOOKUP_RESULT_LOCAL,
        GA_LOOKUP_RESULT_OUR_OWN,
        GA_LOOKUP_RESULT_STATIC,
    }

    export namespace Protocol {
        export const $gtype: GObject.GType<Protocol>;
    }

    enum Protocol {
        GA_PROTOCOL_INET,
        GA_PROTOCOL_INET6,
        GA_PROTOCOL_UNSPEC,
    }

    export namespace ResolverEvent {
        export const $gtype: GObject.GType<ResolverEvent>;
    }

    enum ResolverEvent {
        GA_RESOLVER_FOUND,
        GA_RESOLVER_FAILURE,
    }
    function error_quark(): GLib.Quark;
    namespace Client {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'state-changed': (arg0: ClientState) => void;
            'notify::flags': (pspec: GObject.ParamSpec) => void;
            'notify::state': (pspec: GObject.ParamSpec) => void;
            'state-changed::flags': (arg0: ClientState) => void;
            'state-changed::state': (arg0: ClientState) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            flags: ClientFlags;
            state: ClientState;
        }
    }

    class Client extends GObject.Object {
        static $gtype: GObject.GType<Client>;

        // Properties

        get flags(): ClientFlags;
        get state(): ClientState;
        /**
         * Compile-time signal type information.
         *
         * This static property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        static $signals: Client.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Client.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](flags: ClientFlags): Client;

        // Signals

        connect<K extends keyof Client.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Client.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Client.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Client.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Client.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Client.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        start(): boolean;
        start_in_context(context: GLib.MainContext): boolean;
    }

    namespace EntryGroup {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'state-changed': (arg0: EntryGroupState) => void;
            'notify::state': (pspec: GObject.ParamSpec) => void;
            'state-changed::state': (arg0: EntryGroupState) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            state: EntryGroupState;
        }
    }

    class EntryGroup extends GObject.Object {
        static $gtype: GObject.GType<EntryGroup>;

        // Properties

        get state(): EntryGroupState;
        /**
         * Compile-time signal type information.
         *
         * This static property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        static $signals: EntryGroup.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<EntryGroup.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): EntryGroup;

        // Signals

        connect<K extends keyof EntryGroup.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, EntryGroup.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof EntryGroup.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, EntryGroup.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof EntryGroup.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<EntryGroup.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        add_record(
            flags: AvahiCore.PublishFlags | null,
            name: string,
            type: number,
            ttl: number,
            rdata: any | null,
            size: number,
        ): boolean;
        add_record_full(
            _interface: AvahiCore.IfIndex,
            protocol: AvahiCore.Protocol | null,
            flags: AvahiCore.PublishFlags | null,
            name: string,
            clazz: number,
            type: number,
            ttl: number,
            rdata: any | null,
            size: number,
        ): boolean;
        attach(client: Client): boolean;
        commit(): boolean;
        reset(): boolean;
    }

    namespace RecordBrowser {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'all-for-now': () => void;
            'cache-exhausted': () => void;
            failure: (arg0: any | null) => void;
            'new-record': (
                arg0: number,
                arg1: Protocol,
                arg2: string,
                arg3: number,
                arg4: number,
                arg5: any | null,
                arg6: number,
                arg7: LookupResultFlags,
            ) => void;
            'removed-record': (
                arg0: number,
                arg1: Protocol,
                arg2: string,
                arg3: number,
                arg4: number,
                arg5: any | null,
                arg6: number,
                arg7: LookupResultFlags,
            ) => void;
            'notify::class': (pspec: GObject.ParamSpec) => void;
            'notify::flags': (pspec: GObject.ParamSpec) => void;
            'notify::interface': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::protocol': (pspec: GObject.ParamSpec) => void;
            'notify::type': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            class: number;
            flags: LookupFlags;
            interface: number;
            name: string;
            protocol: Protocol;
            type: number;
        }
    }

    class RecordBrowser extends GObject.Object {
        static $gtype: GObject.GType<RecordBrowser>;

        // Properties

        get class(): number;
        set class(val: number);
        get flags(): LookupFlags;
        set flags(val: LookupFlags);
        get interface(): number;
        set interface(val: number);
        get name(): string;
        set name(val: string);
        get protocol(): Protocol;
        set protocol(val: Protocol);
        get type(): number;
        set type(val: number);
        /**
         * Compile-time signal type information.
         *
         * This static property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        static $signals: RecordBrowser.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<RecordBrowser.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](name: string, type: number): RecordBrowser;

        static new_full(
            _interface: AvahiCore.IfIndex,
            protocol: AvahiCore.Protocol,
            name: string,
            clazz: number,
            type: number,
            flags: LookupFlags,
        ): RecordBrowser;

        // Signals

        connect<K extends keyof RecordBrowser.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, RecordBrowser.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof RecordBrowser.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, RecordBrowser.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof RecordBrowser.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<RecordBrowser.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        attach(client: Client): boolean;
    }

    namespace ServiceBrowser {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'all-for-now': () => void;
            'cache-exhausted': () => void;
            failure: (arg0: any | null) => void;
            'new-service': (
                arg0: number,
                arg1: Protocol,
                arg2: string,
                arg3: string,
                arg4: string,
                arg5: LookupResultFlags,
            ) => void;
            'removed-service': (
                arg0: number,
                arg1: Protocol,
                arg2: string,
                arg3: string,
                arg4: string,
                arg5: LookupResultFlags,
            ) => void;
            'notify::domain': (pspec: GObject.ParamSpec) => void;
            'notify::flags': (pspec: GObject.ParamSpec) => void;
            'notify::interface': (pspec: GObject.ParamSpec) => void;
            'notify::protocol': (pspec: GObject.ParamSpec) => void;
            'notify::type': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            domain: string;
            flags: LookupFlags;
            interface: number;
            protocol: Protocol;
            type: string;
        }
    }

    class ServiceBrowser extends GObject.Object {
        static $gtype: GObject.GType<ServiceBrowser>;

        // Properties

        get domain(): string;
        set domain(val: string);
        get flags(): LookupFlags;
        set flags(val: LookupFlags);
        get interface(): number;
        set interface(val: number);
        get protocol(): Protocol;
        set protocol(val: Protocol);
        get type(): string;
        set type(val: string);
        /**
         * Compile-time signal type information.
         *
         * This static property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        static $signals: ServiceBrowser.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<ServiceBrowser.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](type: string): ServiceBrowser;

        static new_full(
            _interface: AvahiCore.IfIndex,
            protocol: AvahiCore.Protocol,
            type: string,
            domain: string,
            flags: LookupFlags,
        ): ServiceBrowser;

        // Signals

        connect<K extends keyof ServiceBrowser.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ServiceBrowser.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof ServiceBrowser.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ServiceBrowser.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof ServiceBrowser.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<ServiceBrowser.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        attach(client: Client): boolean;
    }

    namespace ServiceResolver {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            failure: (arg0: any | null) => void;
            found: (
                arg0: number,
                arg1: Protocol,
                arg2: string,
                arg3: string,
                arg4: string,
                arg5: string,
                arg6: any | null,
                arg7: number,
                arg8: any | null,
                arg9: LookupResultFlags,
            ) => void;
            'notify::aprotocol': (pspec: GObject.ParamSpec) => void;
            'notify::domain': (pspec: GObject.ParamSpec) => void;
            'notify::flags': (pspec: GObject.ParamSpec) => void;
            'notify::interface': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::protocol': (pspec: GObject.ParamSpec) => void;
            'notify::type': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            aprotocol: Protocol;
            domain: string;
            flags: LookupFlags;
            interface: number;
            name: string;
            protocol: Protocol;
            type: string;
        }
    }

    class ServiceResolver extends GObject.Object {
        static $gtype: GObject.GType<ServiceResolver>;

        // Properties

        get aprotocol(): Protocol;
        set aprotocol(val: Protocol);
        get domain(): string;
        set domain(val: string);
        get flags(): LookupFlags;
        set flags(val: LookupFlags);
        get interface(): number;
        set interface(val: number);
        get name(): string;
        set name(val: string);
        get protocol(): Protocol;
        set protocol(val: Protocol);
        get type(): string;
        set type(val: string);
        /**
         * Compile-time signal type information.
         *
         * This static property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        static $signals: ServiceResolver.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<ServiceResolver.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](
            _interface: AvahiCore.IfIndex,
            protocol: AvahiCore.Protocol,
            name: string,
            type: string,
            domain: string,
            address_protocol: AvahiCore.Protocol,
            flags: LookupFlags,
        ): ServiceResolver;

        // Signals

        connect<K extends keyof ServiceResolver.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ServiceResolver.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof ServiceResolver.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ServiceResolver.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof ServiceResolver.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<ServiceResolver.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        attach(client: Client): boolean;
        get_address(address: AvahiCore.Address, port: number): boolean;
    }

    type ClientClass = typeof Client;
    type EntryGroupClass = typeof EntryGroup;
    class EntryGroupService {
        static $gtype: GObject.GType<EntryGroupService>;

        // Fields

        'interface': AvahiCore.IfIndex;
        protocol: AvahiCore.Protocol;
        flags: AvahiCore.PublishFlags;
        name: string;
        type: string;
        domain: string;
        host: string;
        port: number;

        // Constructors

        _init(...args: any[]): void;

        // Methods

        freeze(): void;
        remove_key(key: string): boolean;
        set(key: string, value: string): boolean;
        set_arbitrary(key: string, value: number, size: number): boolean;
        thaw(): boolean;
    }

    type RecordBrowserClass = typeof RecordBrowser;
    type ServiceBrowserClass = typeof ServiceBrowser;
    type ServiceResolverClass = typeof ServiceResolver;
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

export default Avahi;

// END
