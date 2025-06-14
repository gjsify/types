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
import type Arrow from '@girs/arrow-1.0';
import type Gio from '@girs/gio-2.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type GModule from '@girs/gmodule-2.0';

export namespace ArrowFlight {
    /**
     * ArrowFlight-1.0
     */

    namespace CallOptions {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    class CallOptions extends GObject.Object {
        static $gtype: GObject.GType<CallOptions>;
        declare static readonly __signalSignatures: CallOptions.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<CallOptions.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): CallOptions;
    }

    namespace Client {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            client: any;
        }
    }

    class Client extends GObject.Object {
        static $gtype: GObject.GType<Client>;
        declare static readonly __signalSignatures: Client.SignalSignatures;

        // Properties

        set client(val: any);

        // Constructors

        constructor(properties?: Partial<Client.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](location: Location, options?: ClientOptions | null): Client;

        // Methods

        do_get(ticket: Ticket, options?: CallOptions | null): StreamReader | null;
        list_flights(criteria?: Criteria | null, options?: CallOptions | null): Info[] | null;
    }

    namespace ClientOptions {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    class ClientOptions extends GObject.Object {
        static $gtype: GObject.GType<ClientOptions>;
        declare static readonly __signalSignatures: ClientOptions.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<ClientOptions.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): ClientOptions;
    }

    namespace CommandDescriptor {
        // Signal signatures
        interface SignalSignatures extends Descriptor.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends Descriptor.ConstructorProps {}
    }

    class CommandDescriptor extends Descriptor {
        static $gtype: GObject.GType<CommandDescriptor>;
        declare static readonly __signalSignatures: CommandDescriptor.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<CommandDescriptor.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](command: string): CommandDescriptor;

        // Methods

        get_command(): string;
    }

    namespace Criteria {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            expression: GLib.Bytes;
        }
    }

    class Criteria extends GObject.Object {
        static $gtype: GObject.GType<Criteria>;
        declare static readonly __signalSignatures: Criteria.SignalSignatures;

        // Properties

        /**
         * Opaque criteria expression, dependent on server implementation.
         */
        get expression(): GLib.Bytes;
        set expression(val: GLib.Bytes);

        // Constructors

        constructor(properties?: Partial<Criteria.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](expression: GLib.Bytes | Uint8Array): Criteria;
    }

    namespace DataStream {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            stream: any;
        }
    }

    class DataStream extends GObject.Object {
        static $gtype: GObject.GType<DataStream>;
        declare static readonly __signalSignatures: DataStream.SignalSignatures;

        // Properties

        set stream(val: any);

        // Constructors

        constructor(properties?: Partial<DataStream.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;
    }

    namespace Descriptor {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            descriptor: any;
        }
    }

    abstract class Descriptor extends GObject.Object {
        static $gtype: GObject.GType<Descriptor>;
        declare static readonly __signalSignatures: Descriptor.SignalSignatures;

        // Properties

        set descriptor(val: any);

        // Constructors

        constructor(properties?: Partial<Descriptor.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Methods

        equal(other_descriptor: Descriptor): boolean;
        to_string(): string;
    }

    namespace Endpoint {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            ticket: Ticket;
        }
    }

    class Endpoint extends GObject.Object {
        static $gtype: GObject.GType<Endpoint>;
        declare static readonly __signalSignatures: Endpoint.SignalSignatures;

        // Properties

        /**
         * Opaque ticket identify; use with DoGet RPC.
         */
        get ticket(): Ticket;

        // Constructors

        constructor(properties?: Partial<Endpoint.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](ticket: Ticket, locations: Location[]): Endpoint;

        // Methods

        equal(other_endpoint: Endpoint): boolean;
        get_locations(): Location[] | null;
    }

    namespace Info {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            info: any;
        }
    }

    class Info extends GObject.Object {
        static $gtype: GObject.GType<Info>;
        declare static readonly __signalSignatures: Info.SignalSignatures;

        // Properties

        set info(val: any);

        // Constructors

        constructor(properties?: Partial<Info.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](
            schema: Arrow.Schema,
            descriptor: Descriptor,
            endpoints: Endpoint[],
            total_records: number,
            total_bytes: number,
        ): Info;

        // Methods

        equal(other_info: Info): boolean;
        get_descriptor(): Descriptor;
        get_endpoints(): Endpoint[];
        get_schema(options?: Arrow.ReadOptions | null): Arrow.Schema;
        get_total_bytes(): number;
        get_total_records(): number;
    }

    namespace Location {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    class Location extends GObject.Object {
        static $gtype: GObject.GType<Location>;
        declare static readonly __signalSignatures: Location.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Location.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](uri: string): Location;

        // Methods

        equal(other_location: Location): boolean;
        get_scheme(): string;
        to_string(): string;
    }

    namespace PathDescriptor {
        // Signal signatures
        interface SignalSignatures extends Descriptor.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends Descriptor.ConstructorProps {}
    }

    class PathDescriptor extends Descriptor {
        static $gtype: GObject.GType<PathDescriptor>;
        declare static readonly __signalSignatures: PathDescriptor.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<PathDescriptor.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](paths: string[]): PathDescriptor;

        // Methods

        get_paths(): string[] | null;
    }

    namespace RecordBatchReader {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            reader: any;
        }
    }

    class RecordBatchReader extends GObject.Object {
        static $gtype: GObject.GType<RecordBatchReader>;
        declare static readonly __signalSignatures: RecordBatchReader.SignalSignatures;

        // Properties

        set reader(val: any);

        // Constructors

        constructor(properties?: Partial<RecordBatchReader.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Methods

        read_all(): Arrow.Table;
        read_next(): StreamChunk;
    }

    namespace RecordBatchStream {
        // Signal signatures
        interface SignalSignatures extends DataStream.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends DataStream.ConstructorProps {
            reader: Arrow.RecordBatchReader;
        }
    }

    class RecordBatchStream extends DataStream {
        static $gtype: GObject.GType<RecordBatchStream>;
        declare static readonly __signalSignatures: RecordBatchStream.SignalSignatures;

        // Properties

        /**
         * The reader that produces record batches.
         */
        get reader(): Arrow.RecordBatchReader;

        // Constructors

        constructor(properties?: Partial<RecordBatchStream.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](reader: Arrow.RecordBatchReader, options?: Arrow.WriteOptions | null): RecordBatchStream;
    }

    namespace Server {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    abstract class Server extends GObject.Object {
        static $gtype: GObject.GType<Server>;
        declare static readonly __signalSignatures: Server.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Server.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Virtual methods

        vfunc_do_get(context: ServerCallContext, ticket: Ticket): DataStream;
        vfunc_list_flights(context: ServerCallContext, criteria?: Criteria | null): Info[];

        // Methods

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

    namespace ServerCallContext {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            call_context: any;
            callContext: any;
        }
    }

    class ServerCallContext extends GObject.Object {
        static $gtype: GObject.GType<ServerCallContext>;
        declare static readonly __signalSignatures: ServerCallContext.SignalSignatures;

        // Properties

        set call_context(val: any);
        set callContext(val: any);

        // Constructors

        constructor(properties?: Partial<ServerCallContext.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;
    }

    namespace ServerOptions {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            location: Location;
        }
    }

    class ServerOptions extends GObject.Object {
        static $gtype: GObject.GType<ServerOptions>;
        declare static readonly __signalSignatures: ServerOptions.SignalSignatures;

        // Properties

        get location(): Location;

        // Constructors

        constructor(properties?: Partial<ServerOptions.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](location: Location): ServerOptions;
    }

    namespace StreamChunk {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            chunk: any;
        }
    }

    class StreamChunk extends GObject.Object {
        static $gtype: GObject.GType<StreamChunk>;
        declare static readonly __signalSignatures: StreamChunk.SignalSignatures;

        // Properties

        set chunk(val: any);

        // Constructors

        constructor(properties?: Partial<StreamChunk.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Methods

        get_data(): Arrow.RecordBatch;
        // Conflicted with GObject.Object.get_data
        get_data(...args: never[]): any;
        get_metadata(): Arrow.Buffer | null;
    }

    namespace StreamReader {
        // Signal signatures
        interface SignalSignatures extends RecordBatchReader.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends RecordBatchReader.ConstructorProps {}
    }

    class StreamReader extends RecordBatchReader {
        static $gtype: GObject.GType<StreamReader>;
        declare static readonly __signalSignatures: StreamReader.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<StreamReader.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;
    }

    namespace Ticket {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            data: GLib.Bytes;
        }
    }

    class Ticket extends GObject.Object {
        static $gtype: GObject.GType<Ticket>;
        declare static readonly __signalSignatures: Ticket.SignalSignatures;

        // Properties

        /**
         * Opaque identifier or credential to use when requesting a data
         * stream with the DoGet RPC.
         */
        get data(): GLib.Bytes;
        set data(val: GLib.Bytes);

        // Constructors

        constructor(properties?: Partial<Ticket.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](data: GLib.Bytes | Uint8Array): Ticket;

        // Methods

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
