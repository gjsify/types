/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './avahi-0.6-ambient.d.ts';

/**
 * Avahi-0.6
 */

import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type AvahiCore from '@girs/avahicore-0.6';

export namespace Avahi {
    enum BrowserEvent {
        GA_BROWSER_NEW,
        GA_BROWSER_REMOVE,
        GA_BROWSER_CACHE_EXHAUSTED,
        GA_BROWSER_ALL_FOR_NOW,
        GA_BROWSER_FAILURE,
    }
    enum ClientFlags {
        GA_CLIENT_FLAG_NO_FLAGS,
        GA_CLIENT_FLAG_IGNORE_USER_CONFIG,
        GA_CLIENT_FLAG_NO_FAIL,
    }
    enum ClientState {
        GA_CLIENT_STATE_NOT_STARTED,
        GA_CLIENT_STATE_S_REGISTERING,
        GA_CLIENT_STATE_S_RUNNING,
        GA_CLIENT_STATE_S_COLLISION,
        GA_CLIENT_STATE_FAILURE,
        GA_CLIENT_STATE_CONNECTING,
    }
    enum EntryGroupState {
        GA_ENTRY_GROUP_STATE_UNCOMMITED,
        GA_ENTRY_GROUP_STATE_REGISTERING,
        GA_ENTRY_GROUP_STATE_ESTABLISHED,
        GA_ENTRY_GROUP_STATE_COLLISION,
        GA_ENTRY_GROUP_STATE_FAILURE,
    }
    enum LookupFlags {
        GA_LOOKUP_NO_FLAGS,
        GA_LOOKUP_USE_WIDE_AREA,
        GA_LOOKUP_USE_MULTICAST,
        GA_LOOKUP_NO_TXT,
        GA_LOOKUP_NO_ADDRESS,
    }
    enum LookupResultFlags {
        GA_LOOKUP_RESULT_CACHED,
        GA_LOOKUP_RESULT_WIDE_AREA,
        GA_LOOKUP_RESULT_MULTICAST,
        GA_LOOKUP_RESULT_LOCAL,
        GA_LOOKUP_RESULT_OUR_OWN,
        GA_LOOKUP_RESULT_STATIC,
    }
    enum Protocol {
        GA_PROTOCOL_INET,
        GA_PROTOCOL_INET6,
        GA_PROTOCOL_UNSPEC,
    }
    enum ResolverEvent {
        GA_RESOLVER_FOUND,
        GA_RESOLVER_FAILURE,
    }
    function error_quark(): GLib.Quark;
    module Client {
        // Signal callback interfaces

        interface StateChanged {
            (object: ClientState): void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            flags: ClientFlags;
            state: ClientState;
        }
    }

    class Client extends GObject.Object {
        static $gtype: GObject.GType<Client>;

        // Own properties of Avahi.Client

        get flags(): ClientFlags;
        get state(): ClientState;

        // Constructors of Avahi.Client

        constructor(properties?: Partial<Client.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](flags: ClientFlags): Client;

        // Own signals of Avahi.Client

        connect(id: string, callback: (...args: any[]) => any): number;
        connect_after(id: string, callback: (...args: any[]) => any): number;
        emit(id: string, ...args: any[]): void;
        connect(signal: 'state-changed', callback: (_source: this, object: ClientState) => void): number;
        connect_after(signal: 'state-changed', callback: (_source: this, object: ClientState) => void): number;
        emit(signal: 'state-changed', object: ClientState): void;

        // Own methods of Avahi.Client

        start(): boolean;
        start_in_context(context: GLib.MainContext): boolean;
    }

    module EntryGroup {
        // Signal callback interfaces

        interface StateChanged {
            (object: EntryGroupState): void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            state: EntryGroupState;
        }
    }

    class EntryGroup extends GObject.Object {
        static $gtype: GObject.GType<EntryGroup>;

        // Own properties of Avahi.EntryGroup

        get state(): EntryGroupState;

        // Constructors of Avahi.EntryGroup

        constructor(properties?: Partial<EntryGroup.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): EntryGroup;

        // Own signals of Avahi.EntryGroup

        connect(id: string, callback: (...args: any[]) => any): number;
        connect_after(id: string, callback: (...args: any[]) => any): number;
        emit(id: string, ...args: any[]): void;
        connect(signal: 'state-changed', callback: (_source: this, object: EntryGroupState) => void): number;
        connect_after(signal: 'state-changed', callback: (_source: this, object: EntryGroupState) => void): number;
        emit(signal: 'state-changed', object: EntryGroupState): void;

        // Own methods of Avahi.EntryGroup

        add_record(
            flags: AvahiCore.PublishFlags,
            name: string,
            type: number,
            ttl: number,
            rdata: any | null,
            size: number,
        ): boolean;
        add_record_full(
            _interface: AvahiCore.IfIndex,
            protocol: AvahiCore.Protocol,
            flags: AvahiCore.PublishFlags,
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

    module RecordBrowser {
        // Signal callback interfaces

        interface AllForNow {
            (): void;
        }

        interface CacheExhausted {
            (): void;
        }

        interface Failure {
            (object?: any | null): void;
        }

        interface NewRecord {
            (
                object: number,
                p0: Protocol,
                p1: string,
                p2: number,
                p3: number,
                p4: any | null,
                p5: number,
                p6: LookupResultFlags,
            ): void;
        }

        interface RemovedRecord {
            (
                object: number,
                p0: Protocol,
                p1: string,
                p2: number,
                p3: number,
                p4: any | null,
                p5: number,
                p6: LookupResultFlags,
            ): void;
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

        // Own properties of Avahi.RecordBrowser

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

        // Constructors of Avahi.RecordBrowser

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

        // Own signals of Avahi.RecordBrowser

        connect(id: string, callback: (...args: any[]) => any): number;
        connect_after(id: string, callback: (...args: any[]) => any): number;
        emit(id: string, ...args: any[]): void;
        connect(signal: 'all-for-now', callback: (_source: this) => void): number;
        connect_after(signal: 'all-for-now', callback: (_source: this) => void): number;
        emit(signal: 'all-for-now'): void;
        connect(signal: 'cache-exhausted', callback: (_source: this) => void): number;
        connect_after(signal: 'cache-exhausted', callback: (_source: this) => void): number;
        emit(signal: 'cache-exhausted'): void;
        connect(signal: 'failure', callback: (_source: this, object: any | null) => void): number;
        connect_after(signal: 'failure', callback: (_source: this, object: any | null) => void): number;
        emit(signal: 'failure', object?: any | null): void;
        connect(
            signal: 'new-record',
            callback: (
                _source: this,
                object: number,
                p0: Protocol,
                p1: string,
                p2: number,
                p3: number,
                p4: any | null,
                p5: number,
                p6: LookupResultFlags,
            ) => void,
        ): number;
        connect_after(
            signal: 'new-record',
            callback: (
                _source: this,
                object: number,
                p0: Protocol,
                p1: string,
                p2: number,
                p3: number,
                p4: any | null,
                p5: number,
                p6: LookupResultFlags,
            ) => void,
        ): number;
        emit(
            signal: 'new-record',
            object: number,
            p0: Protocol,
            p1: string,
            p2: number,
            p3: number,
            p4: any | null,
            p5: number,
            p6: LookupResultFlags,
        ): void;
        connect(
            signal: 'removed-record',
            callback: (
                _source: this,
                object: number,
                p0: Protocol,
                p1: string,
                p2: number,
                p3: number,
                p4: any | null,
                p5: number,
                p6: LookupResultFlags,
            ) => void,
        ): number;
        connect_after(
            signal: 'removed-record',
            callback: (
                _source: this,
                object: number,
                p0: Protocol,
                p1: string,
                p2: number,
                p3: number,
                p4: any | null,
                p5: number,
                p6: LookupResultFlags,
            ) => void,
        ): number;
        emit(
            signal: 'removed-record',
            object: number,
            p0: Protocol,
            p1: string,
            p2: number,
            p3: number,
            p4: any | null,
            p5: number,
            p6: LookupResultFlags,
        ): void;

        // Own methods of Avahi.RecordBrowser

        attach(client: Client): boolean;
    }

    module ServiceBrowser {
        // Signal callback interfaces

        interface AllForNow {
            (): void;
        }

        interface CacheExhausted {
            (): void;
        }

        interface Failure {
            (object?: any | null): void;
        }

        interface NewService {
            (object: number, p0: Protocol, p1: string, p2: string, p3: string, p4: LookupResultFlags): void;
        }

        interface RemovedService {
            (object: number, p0: Protocol, p1: string, p2: string, p3: string, p4: LookupResultFlags): void;
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

        // Own properties of Avahi.ServiceBrowser

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

        // Constructors of Avahi.ServiceBrowser

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

        // Own signals of Avahi.ServiceBrowser

        connect(id: string, callback: (...args: any[]) => any): number;
        connect_after(id: string, callback: (...args: any[]) => any): number;
        emit(id: string, ...args: any[]): void;
        connect(signal: 'all-for-now', callback: (_source: this) => void): number;
        connect_after(signal: 'all-for-now', callback: (_source: this) => void): number;
        emit(signal: 'all-for-now'): void;
        connect(signal: 'cache-exhausted', callback: (_source: this) => void): number;
        connect_after(signal: 'cache-exhausted', callback: (_source: this) => void): number;
        emit(signal: 'cache-exhausted'): void;
        connect(signal: 'failure', callback: (_source: this, object: any | null) => void): number;
        connect_after(signal: 'failure', callback: (_source: this, object: any | null) => void): number;
        emit(signal: 'failure', object?: any | null): void;
        connect(
            signal: 'new-service',
            callback: (
                _source: this,
                object: number,
                p0: Protocol,
                p1: string,
                p2: string,
                p3: string,
                p4: LookupResultFlags,
            ) => void,
        ): number;
        connect_after(
            signal: 'new-service',
            callback: (
                _source: this,
                object: number,
                p0: Protocol,
                p1: string,
                p2: string,
                p3: string,
                p4: LookupResultFlags,
            ) => void,
        ): number;
        emit(
            signal: 'new-service',
            object: number,
            p0: Protocol,
            p1: string,
            p2: string,
            p3: string,
            p4: LookupResultFlags,
        ): void;
        connect(
            signal: 'removed-service',
            callback: (
                _source: this,
                object: number,
                p0: Protocol,
                p1: string,
                p2: string,
                p3: string,
                p4: LookupResultFlags,
            ) => void,
        ): number;
        connect_after(
            signal: 'removed-service',
            callback: (
                _source: this,
                object: number,
                p0: Protocol,
                p1: string,
                p2: string,
                p3: string,
                p4: LookupResultFlags,
            ) => void,
        ): number;
        emit(
            signal: 'removed-service',
            object: number,
            p0: Protocol,
            p1: string,
            p2: string,
            p3: string,
            p4: LookupResultFlags,
        ): void;

        // Own methods of Avahi.ServiceBrowser

        attach(client: Client): boolean;
    }

    module ServiceResolver {
        // Signal callback interfaces

        interface Failure {
            (object?: any | null): void;
        }

        interface Found {
            (
                object: number,
                p0: Protocol,
                p1: string,
                p2: string,
                p3: string,
                p4: string,
                p5: any | null,
                p6: number,
                p7: any | null,
                p8: LookupResultFlags,
            ): void;
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

        // Own properties of Avahi.ServiceResolver

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

        // Constructors of Avahi.ServiceResolver

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

        // Own signals of Avahi.ServiceResolver

        connect(id: string, callback: (...args: any[]) => any): number;
        connect_after(id: string, callback: (...args: any[]) => any): number;
        emit(id: string, ...args: any[]): void;
        connect(signal: 'failure', callback: (_source: this, object: any | null) => void): number;
        connect_after(signal: 'failure', callback: (_source: this, object: any | null) => void): number;
        emit(signal: 'failure', object?: any | null): void;
        connect(
            signal: 'found',
            callback: (
                _source: this,
                object: number,
                p0: Protocol,
                p1: string,
                p2: string,
                p3: string,
                p4: string,
                p5: any | null,
                p6: number,
                p7: any | null,
                p8: LookupResultFlags,
            ) => void,
        ): number;
        connect_after(
            signal: 'found',
            callback: (
                _source: this,
                object: number,
                p0: Protocol,
                p1: string,
                p2: string,
                p3: string,
                p4: string,
                p5: any | null,
                p6: number,
                p7: any | null,
                p8: LookupResultFlags,
            ) => void,
        ): number;
        emit(
            signal: 'found',
            object: number,
            p0: Protocol,
            p1: string,
            p2: string,
            p3: string,
            p4: string,
            p5: any | null,
            p6: number,
            p7: any | null,
            p8: LookupResultFlags,
        ): void;

        // Own methods of Avahi.ServiceResolver

        attach(client: Client): boolean;
        get_address(address: AvahiCore.Address, port: number): boolean;
    }

    type ClientClass = typeof Client;
    type EntryGroupClass = typeof EntryGroup;
    class EntryGroupService {
        static $gtype: GObject.GType<EntryGroupService>;

        // Own fields of Avahi.EntryGroupService

        'interface': AvahiCore.IfIndex;
        protocol: AvahiCore.Protocol;
        flags: AvahiCore.PublishFlags;
        name: string;
        type: string;
        domain: string;
        host: string;
        port: number;

        // Constructors of Avahi.EntryGroupService

        _init(...args: any[]): void;

        // Own methods of Avahi.EntryGroupService

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
