/**
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 *
 * The based EJS template file is used for the generated .d.ts file of each GIR module like Gtk-4.0, GObject-2.0, ...
 */

// Module dependencies
import type Arrow from '@girs/arrow-1.0';
import type Gio from '@girs/gio-2.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type GModule from '@girs/gmodule-2.0';

export namespace ArrowFlight {
    /**
     * ArrowFlight-1.0
     */

    module CallOptions {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    class CallOptions extends GObject.Object {
        static $gtype: GObject.GType<CallOptions>;

        // Constructors of ArrowFlight.CallOptions

        constructor(properties?: Partial<CallOptions.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): CallOptions;
    }

    module Client {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            client: any;
        }
    }

    class Client extends GObject.Object {
        static $gtype: GObject.GType<Client>;

        // Own properties of ArrowFlight.Client

        set client(val: any);

        // Constructors of ArrowFlight.Client

        constructor(properties?: Partial<Client.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](location: Location, options?: ClientOptions | null): Client;

        // Own methods of ArrowFlight.Client

        do_get(ticket: Ticket, options?: CallOptions | null): StreamReader | null;
        list_flights(criteria?: Criteria | null, options?: CallOptions | null): Info[] | null;
    }

    module ClientOptions {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    class ClientOptions extends GObject.Object {
        static $gtype: GObject.GType<ClientOptions>;

        // Constructors of ArrowFlight.ClientOptions

        constructor(properties?: Partial<ClientOptions.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): ClientOptions;
    }

    module CommandDescriptor {
        // Constructor properties interface

        interface ConstructorProps extends Descriptor.ConstructorProps {}
    }

    class CommandDescriptor extends Descriptor {
        static $gtype: GObject.GType<CommandDescriptor>;

        // Constructors of ArrowFlight.CommandDescriptor

        constructor(properties?: Partial<CommandDescriptor.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](command: string): CommandDescriptor;

        // Own methods of ArrowFlight.CommandDescriptor

        get_command(): string;
    }

    module Criteria {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            expression: GLib.Bytes;
        }
    }

    class Criteria extends GObject.Object {
        static $gtype: GObject.GType<Criteria>;

        // Own properties of ArrowFlight.Criteria

        /**
         * Opaque criteria expression, dependent on server implementation.
         */
        get expression(): GLib.Bytes;
        set expression(val: GLib.Bytes);

        // Constructors of ArrowFlight.Criteria

        constructor(properties?: Partial<Criteria.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](expression: GLib.Bytes | Uint8Array): Criteria;
    }

    module DataStream {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            stream: any;
        }
    }

    class DataStream extends GObject.Object {
        static $gtype: GObject.GType<DataStream>;

        // Own properties of ArrowFlight.DataStream

        set stream(val: any);

        // Constructors of ArrowFlight.DataStream

        constructor(properties?: Partial<DataStream.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;
    }

    module Descriptor {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            descriptor: any;
        }
    }

    abstract class Descriptor extends GObject.Object {
        static $gtype: GObject.GType<Descriptor>;

        // Own properties of ArrowFlight.Descriptor

        set descriptor(val: any);

        // Constructors of ArrowFlight.Descriptor

        constructor(properties?: Partial<Descriptor.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Own methods of ArrowFlight.Descriptor

        equal(other_descriptor: Descriptor): boolean;
        to_string(): string;
    }

    module Endpoint {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            ticket: Ticket;
        }
    }

    class Endpoint extends GObject.Object {
        static $gtype: GObject.GType<Endpoint>;

        // Own properties of ArrowFlight.Endpoint

        /**
         * Opaque ticket identify; use with DoGet RPC.
         */
        get ticket(): Ticket;

        // Constructors of ArrowFlight.Endpoint

        constructor(properties?: Partial<Endpoint.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](ticket: Ticket, locations: Location[]): Endpoint;

        // Own methods of ArrowFlight.Endpoint

        equal(other_endpoint: Endpoint): boolean;
        get_locations(): Location[] | null;
    }

    module Info {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            info: any;
        }
    }

    class Info extends GObject.Object {
        static $gtype: GObject.GType<Info>;

        // Own properties of ArrowFlight.Info

        set info(val: any);

        // Constructors of ArrowFlight.Info

        constructor(properties?: Partial<Info.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](
            schema: Arrow.Schema,
            descriptor: Descriptor,
            endpoints: Endpoint[],
            total_records: number,
            total_bytes: number,
        ): Info;

        // Own methods of ArrowFlight.Info

        equal(other_info: Info): boolean;
        get_descriptor(): Descriptor;
        get_endpoints(): Endpoint[];
        get_schema(options?: Arrow.ReadOptions | null): Arrow.Schema;
        get_total_bytes(): number;
        get_total_records(): number;
    }

    module Location {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    class Location extends GObject.Object {
        static $gtype: GObject.GType<Location>;

        // Constructors of ArrowFlight.Location

        constructor(properties?: Partial<Location.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](uri: string): Location;

        // Own methods of ArrowFlight.Location

        equal(other_location: Location): boolean;
        get_scheme(): string;
        to_string(): string;
    }

    module PathDescriptor {
        // Constructor properties interface

        interface ConstructorProps extends Descriptor.ConstructorProps {}
    }

    class PathDescriptor extends Descriptor {
        static $gtype: GObject.GType<PathDescriptor>;

        // Constructors of ArrowFlight.PathDescriptor

        constructor(properties?: Partial<PathDescriptor.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](paths: string[]): PathDescriptor;

        // Own methods of ArrowFlight.PathDescriptor

        get_paths(): string[] | null;
    }

    module RecordBatchReader {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            reader: any;
        }
    }

    class RecordBatchReader extends GObject.Object {
        static $gtype: GObject.GType<RecordBatchReader>;

        // Own properties of ArrowFlight.RecordBatchReader

        set reader(val: any);

        // Constructors of ArrowFlight.RecordBatchReader

        constructor(properties?: Partial<RecordBatchReader.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Own methods of ArrowFlight.RecordBatchReader

        read_all(): Arrow.Table;
        read_next(): StreamChunk;
    }

    module RecordBatchStream {
        // Constructor properties interface

        interface ConstructorProps extends DataStream.ConstructorProps {
            reader: Arrow.RecordBatchReader;
        }
    }

    class RecordBatchStream extends DataStream {
        static $gtype: GObject.GType<RecordBatchStream>;

        // Own properties of ArrowFlight.RecordBatchStream

        /**
         * The reader that produces record batches.
         */
        get reader(): Arrow.RecordBatchReader;

        // Constructors of ArrowFlight.RecordBatchStream

        constructor(properties?: Partial<RecordBatchStream.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](reader: Arrow.RecordBatchReader, options?: Arrow.WriteOptions | null): RecordBatchStream;
    }

    module Server {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    abstract class Server extends GObject.Object {
        static $gtype: GObject.GType<Server>;

        // Constructors of ArrowFlight.Server

        constructor(properties?: Partial<Server.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Own virtual methods of ArrowFlight.Server

        vfunc_do_get(context: ServerCallContext, ticket: Ticket): DataStream;
        vfunc_list_flights(context: ServerCallContext, criteria?: Criteria | null): Info[];

        // Own methods of ArrowFlight.Server

        do_get(context: ServerCallContext, ticket: Ticket): DataStream;
        get_port(): number;
        list_flights(context: ServerCallContext, criteria?: Criteria | null): Info[];
        listen(options: ServerOptions): boolean;
        /**
         * Shuts down the serve. This function can be called from signal
         * handler or another thread.
         * @returns %TRUE on success, %FALSE on error.
         */
        shutdown(): boolean;
        wait(): boolean;
    }

    module ServerCallContext {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            call_context: any;
            callContext: any;
        }
    }

    class ServerCallContext extends GObject.Object {
        static $gtype: GObject.GType<ServerCallContext>;

        // Own properties of ArrowFlight.ServerCallContext

        set call_context(val: any);
        set callContext(val: any);

        // Constructors of ArrowFlight.ServerCallContext

        constructor(properties?: Partial<ServerCallContext.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;
    }

    module ServerOptions {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            location: Location;
        }
    }

    class ServerOptions extends GObject.Object {
        static $gtype: GObject.GType<ServerOptions>;

        // Own properties of ArrowFlight.ServerOptions

        get location(): Location;

        // Constructors of ArrowFlight.ServerOptions

        constructor(properties?: Partial<ServerOptions.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](location: Location): ServerOptions;
    }

    module StreamChunk {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            chunk: any;
        }
    }

    class StreamChunk extends GObject.Object {
        static $gtype: GObject.GType<StreamChunk>;

        // Own properties of ArrowFlight.StreamChunk

        set chunk(val: any);

        // Constructors of ArrowFlight.StreamChunk

        constructor(properties?: Partial<StreamChunk.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Own methods of ArrowFlight.StreamChunk

        get_data(): Arrow.RecordBatch;
        // Conflicted with GObject.Object.get_data
        get_data(...args: never[]): any;
        get_metadata(): Arrow.Buffer | null;
    }

    module StreamReader {
        // Constructor properties interface

        interface ConstructorProps extends RecordBatchReader.ConstructorProps {}
    }

    class StreamReader extends RecordBatchReader {
        static $gtype: GObject.GType<StreamReader>;

        // Constructors of ArrowFlight.StreamReader

        constructor(properties?: Partial<StreamReader.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;
    }

    module Ticket {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            data: GLib.Bytes;
        }
    }

    class Ticket extends GObject.Object {
        static $gtype: GObject.GType<Ticket>;

        // Own properties of ArrowFlight.Ticket

        /**
         * Opaque identifier or credential to use when requesting a data
         * stream with the DoGet RPC.
         */
        get data(): GLib.Bytes;
        set data(val: GLib.Bytes);

        // Constructors of ArrowFlight.Ticket

        constructor(properties?: Partial<Ticket.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](data: GLib.Bytes | Uint8Array): Ticket;

        // Own methods of ArrowFlight.Ticket

        equal(other_ticket: Ticket): boolean;
    }

    type CallOptionsClass = typeof CallOptions;
    type ClientClass = typeof Client;
    type ClientOptionsClass = typeof ClientOptions;
    type CommandDescriptorClass = typeof CommandDescriptor;
    type CriteriaClass = typeof Criteria;
    type DataStreamClass = typeof DataStream;
    type DescriptorClass = typeof Descriptor;
    type EndpointClass = typeof Endpoint;
    type InfoClass = typeof Info;
    type LocationClass = typeof Location;
    type PathDescriptorClass = typeof PathDescriptor;
    type RecordBatchReaderClass = typeof RecordBatchReader;
    type RecordBatchStreamClass = typeof RecordBatchStream;
    type ServerCallContextClass = typeof ServerCallContext;
    type ServerClass = typeof Server;
    type ServerOptionsClass = typeof ServerOptions;
    type StreamChunkClass = typeof StreamChunk;
    type StreamReaderClass = typeof StreamReader;
    type TicketClass = typeof Ticket;
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

export default ArrowFlight;

// END
