/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './avahi-0.6-ambient.d.ts';
import './avahi-0.6-import.d.ts';
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
    }

    class Client extends GObject.Object {
        // Own properties of Avahi-0.6.Client

        flags: ClientFlags;
        readonly state: ClientState;

        // Constructors of Avahi-0.6.Client

        static ['new'](flags: ClientFlags): Client;

        // Owm methods of Avahi-0.6.Client

        start(): boolean;
        start_in_context(context: GLib.MainContext): boolean;
    }

    module EntryGroup {
        // Signal callback interfaces

        interface StateChanged {
            (object: EntryGroupState): void;
        }

        // Constructor properties interface
    }

    class EntryGroup extends GObject.Object {
        // Own properties of Avahi-0.6.EntryGroup

        readonly state: EntryGroupState;

        // Constructors of Avahi-0.6.EntryGroup

        static ['new'](): EntryGroup;

        // Owm methods of Avahi-0.6.EntryGroup

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
    }

    class RecordBrowser extends GObject.Object {
        // Own properties of Avahi-0.6.RecordBrowser

        'class': number;
        flags: LookupFlags;
        'interface': number;
        name: string;
        protocol: Protocol;
        type: number;

        // Constructors of Avahi-0.6.RecordBrowser

        static ['new'](name: string, type: number): RecordBrowser;

        static new_full(
            _interface: AvahiCore.IfIndex,
            protocol: AvahiCore.Protocol,
            name: string,
            clazz: number,
            type: number,
            flags: LookupFlags,
        ): RecordBrowser;

        // Owm methods of Avahi-0.6.RecordBrowser

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
    }

    class ServiceBrowser extends GObject.Object {
        // Own properties of Avahi-0.6.ServiceBrowser

        domain: string;
        flags: LookupFlags;
        'interface': number;
        protocol: Protocol;
        type: string;

        // Constructors of Avahi-0.6.ServiceBrowser

        static ['new'](type: string): ServiceBrowser;

        static new_full(
            _interface: AvahiCore.IfIndex,
            protocol: AvahiCore.Protocol,
            type: string,
            domain: string,
            flags: LookupFlags,
        ): ServiceBrowser;

        // Owm methods of Avahi-0.6.ServiceBrowser

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
    }

    class ServiceResolver extends GObject.Object {
        // Own properties of Avahi-0.6.ServiceResolver

        aprotocol: Protocol;
        domain: string;
        flags: LookupFlags;
        'interface': number;
        name: string;
        protocol: Protocol;
        type: string;

        // Constructors of Avahi-0.6.ServiceResolver

        static ['new'](
            _interface: AvahiCore.IfIndex,
            protocol: AvahiCore.Protocol,
            name: string,
            type: string,
            domain: string,
            address_protocol: AvahiCore.Protocol,
            flags: LookupFlags,
        ): ServiceResolver;

        // Owm methods of Avahi-0.6.ServiceResolver

        attach(client: Client): boolean;
        get_address(address: AvahiCore.Address, port: number): boolean;
    }

    class ClientClass {}

    class EntryGroupClass {}

    class EntryGroupService {
        // Own fields of Avahi-0.6.EntryGroupService

        'interface': AvahiCore.IfIndex;
        protocol: AvahiCore.Protocol;
        flags: AvahiCore.PublishFlags;
        name: string;
        type: string;
        domain: string;
        host: string;
        port: number;

        // Owm methods of Avahi-0.6.EntryGroupService

        freeze(): void;
        remove_key(key: string): boolean;
        set(key: string, value: string): boolean;
        set_arbitrary(key: string, value: number, size: number): boolean;
        thaw(): boolean;
    }

    class RecordBrowserClass {}

    class ServiceBrowserClass {}

    class ServiceResolverClass {}

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
