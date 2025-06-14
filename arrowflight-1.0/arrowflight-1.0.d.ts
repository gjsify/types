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

        // Constructors

        constructor(properties?: Partial<CallOptions.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): CallOptions;

        // Signals

        connect<K extends keyof CallOptions.SignalSignatures>(
            signal: K,
            callback: CallOptions.SignalSignatures[K],
        ): number;
        connect_after<K extends keyof CallOptions.SignalSignatures>(
            signal: K,
            callback: CallOptions.SignalSignatures[K],
        ): number;
        emit<K extends keyof CallOptions.SignalSignatures>(
            signal: K,
            ...args: CallOptions.SignalSignatures[K] extends (...args: infer P) => any ? P : never
        ): void;
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

        // Properties

        set client(val: any);

        // Constructors

        constructor(properties?: Partial<Client.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](location: Location, options?: ClientOptions | null): Client;

        // Signals

        connect<K extends keyof Client.SignalSignatures>(signal: K, callback: Client.SignalSignatures[K]): number;
        connect_after<K extends keyof Client.SignalSignatures>(signal: K, callback: Client.SignalSignatures[K]): number;
        emit<K extends keyof Client.SignalSignatures>(
            signal: K,
            ...args: Client.SignalSignatures[K] extends (...args: infer P) => any ? P : never
        ): void;

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

        // Constructors

        constructor(properties?: Partial<ClientOptions.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): ClientOptions;

        // Signals

        connect<K extends keyof ClientOptions.SignalSignatures>(
            signal: K,
            callback: ClientOptions.SignalSignatures[K],
        ): number;
        connect_after<K extends keyof ClientOptions.SignalSignatures>(
            signal: K,
            callback: ClientOptions.SignalSignatures[K],
        ): number;
        emit<K extends keyof ClientOptions.SignalSignatures>(
            signal: K,
            ...args: ClientOptions.SignalSignatures[K] extends (...args: infer P) => any ? P : never
        ): void;
    }

    namespace CommandDescriptor {
        // Signal signatures
        interface SignalSignatures extends Descriptor.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends Descriptor.ConstructorProps {}
    }

    class CommandDescriptor extends Descriptor {
        static $gtype: GObject.GType<CommandDescriptor>;

        // Constructors

        constructor(properties?: Partial<CommandDescriptor.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](command: string): CommandDescriptor;

        // Signals

        connect<K extends keyof CommandDescriptor.SignalSignatures>(
            signal: K,
            callback: CommandDescriptor.SignalSignatures[K],
        ): number;
        connect_after<K extends keyof CommandDescriptor.SignalSignatures>(
            signal: K,
            callback: CommandDescriptor.SignalSignatures[K],
        ): number;
        emit<K extends keyof CommandDescriptor.SignalSignatures>(
            signal: K,
            ...args: CommandDescriptor.SignalSignatures[K] extends (...args: infer P) => any ? P : never
        ): void;

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

        // Signals

        connect<K extends keyof Criteria.SignalSignatures>(signal: K, callback: Criteria.SignalSignatures[K]): number;
        connect_after<K extends keyof Criteria.SignalSignatures>(
            signal: K,
            callback: Criteria.SignalSignatures[K],
        ): number;
        emit<K extends keyof Criteria.SignalSignatures>(
            signal: K,
            ...args: Criteria.SignalSignatures[K] extends (...args: infer P) => any ? P : never
        ): void;
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

        // Properties

        set stream(val: any);

        // Constructors

        constructor(properties?: Partial<DataStream.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        connect<K extends keyof DataStream.SignalSignatures>(
            signal: K,
            callback: DataStream.SignalSignatures[K],
        ): number;
        connect_after<K extends keyof DataStream.SignalSignatures>(
            signal: K,
            callback: DataStream.SignalSignatures[K],
        ): number;
        emit<K extends keyof DataStream.SignalSignatures>(
            signal: K,
            ...args: DataStream.SignalSignatures[K] extends (...args: infer P) => any ? P : never
        ): void;
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

        // Properties

        set descriptor(val: any);

        // Constructors

        constructor(properties?: Partial<Descriptor.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        connect<K extends keyof Descriptor.SignalSignatures>(
            signal: K,
            callback: Descriptor.SignalSignatures[K],
        ): number;
        connect_after<K extends keyof Descriptor.SignalSignatures>(
            signal: K,
            callback: Descriptor.SignalSignatures[K],
        ): number;
        emit<K extends keyof Descriptor.SignalSignatures>(
            signal: K,
            ...args: Descriptor.SignalSignatures[K] extends (...args: infer P) => any ? P : never
        ): void;

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

        // Properties

        /**
         * Opaque ticket identify; use with DoGet RPC.
         */
        get ticket(): Ticket;

        // Constructors

        constructor(properties?: Partial<Endpoint.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](ticket: Ticket, locations: Location[]): Endpoint;

        // Signals

        connect<K extends keyof Endpoint.SignalSignatures>(signal: K, callback: Endpoint.SignalSignatures[K]): number;
        connect_after<K extends keyof Endpoint.SignalSignatures>(
            signal: K,
            callback: Endpoint.SignalSignatures[K],
        ): number;
        emit<K extends keyof Endpoint.SignalSignatures>(
            signal: K,
            ...args: Endpoint.SignalSignatures[K] extends (...args: infer P) => any ? P : never
        ): void;

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

        // Signals

        connect<K extends keyof Info.SignalSignatures>(signal: K, callback: Info.SignalSignatures[K]): number;
        connect_after<K extends keyof Info.SignalSignatures>(signal: K, callback: Info.SignalSignatures[K]): number;
        emit<K extends keyof Info.SignalSignatures>(
            signal: K,
            ...args: Info.SignalSignatures[K] extends (...args: infer P) => any ? P : never
        ): void;

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

        // Constructors

        constructor(properties?: Partial<Location.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](uri: string): Location;

        // Signals

        connect<K extends keyof Location.SignalSignatures>(signal: K, callback: Location.SignalSignatures[K]): number;
        connect_after<K extends keyof Location.SignalSignatures>(
            signal: K,
            callback: Location.SignalSignatures[K],
        ): number;
        emit<K extends keyof Location.SignalSignatures>(
            signal: K,
            ...args: Location.SignalSignatures[K] extends (...args: infer P) => any ? P : never
        ): void;

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

        // Constructors

        constructor(properties?: Partial<PathDescriptor.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](paths: string[]): PathDescriptor;

        // Signals

        connect<K extends keyof PathDescriptor.SignalSignatures>(
            signal: K,
            callback: PathDescriptor.SignalSignatures[K],
        ): number;
        connect_after<K extends keyof PathDescriptor.SignalSignatures>(
            signal: K,
            callback: PathDescriptor.SignalSignatures[K],
        ): number;
        emit<K extends keyof PathDescriptor.SignalSignatures>(
            signal: K,
            ...args: PathDescriptor.SignalSignatures[K] extends (...args: infer P) => any ? P : never
        ): void;

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

        // Properties

        set reader(val: any);

        // Constructors

        constructor(properties?: Partial<RecordBatchReader.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        connect<K extends keyof RecordBatchReader.SignalSignatures>(
            signal: K,
            callback: RecordBatchReader.SignalSignatures[K],
        ): number;
        connect_after<K extends keyof RecordBatchReader.SignalSignatures>(
            signal: K,
            callback: RecordBatchReader.SignalSignatures[K],
        ): number;
        emit<K extends keyof RecordBatchReader.SignalSignatures>(
            signal: K,
            ...args: RecordBatchReader.SignalSignatures[K] extends (...args: infer P) => any ? P : never
        ): void;

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

        // Properties

        /**
         * The reader that produces record batches.
         */
        get reader(): Arrow.RecordBatchReader;

        // Constructors

        constructor(properties?: Partial<RecordBatchStream.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](reader: Arrow.RecordBatchReader, options?: Arrow.WriteOptions | null): RecordBatchStream;

        // Signals

        connect<K extends keyof RecordBatchStream.SignalSignatures>(
            signal: K,
            callback: RecordBatchStream.SignalSignatures[K],
        ): number;
        connect_after<K extends keyof RecordBatchStream.SignalSignatures>(
            signal: K,
            callback: RecordBatchStream.SignalSignatures[K],
        ): number;
        emit<K extends keyof RecordBatchStream.SignalSignatures>(
            signal: K,
            ...args: RecordBatchStream.SignalSignatures[K] extends (...args: infer P) => any ? P : never
        ): void;
    }

    namespace Server {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    abstract class Server extends GObject.Object {
        static $gtype: GObject.GType<Server>;

        // Constructors

        constructor(properties?: Partial<Server.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        connect<K extends keyof Server.SignalSignatures>(signal: K, callback: Server.SignalSignatures[K]): number;
        connect_after<K extends keyof Server.SignalSignatures>(signal: K, callback: Server.SignalSignatures[K]): number;
        emit<K extends keyof Server.SignalSignatures>(
            signal: K,
            ...args: Server.SignalSignatures[K] extends (...args: infer P) => any ? P : never
        ): void;

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

        // Properties

        set call_context(val: any);
        set callContext(val: any);

        // Constructors

        constructor(properties?: Partial<ServerCallContext.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        connect<K extends keyof ServerCallContext.SignalSignatures>(
            signal: K,
            callback: ServerCallContext.SignalSignatures[K],
        ): number;
        connect_after<K extends keyof ServerCallContext.SignalSignatures>(
            signal: K,
            callback: ServerCallContext.SignalSignatures[K],
        ): number;
        emit<K extends keyof ServerCallContext.SignalSignatures>(
            signal: K,
            ...args: ServerCallContext.SignalSignatures[K] extends (...args: infer P) => any ? P : never
        ): void;
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

        // Properties

        get location(): Location;

        // Constructors

        constructor(properties?: Partial<ServerOptions.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](location: Location): ServerOptions;

        // Signals

        connect<K extends keyof ServerOptions.SignalSignatures>(
            signal: K,
            callback: ServerOptions.SignalSignatures[K],
        ): number;
        connect_after<K extends keyof ServerOptions.SignalSignatures>(
            signal: K,
            callback: ServerOptions.SignalSignatures[K],
        ): number;
        emit<K extends keyof ServerOptions.SignalSignatures>(
            signal: K,
            ...args: ServerOptions.SignalSignatures[K] extends (...args: infer P) => any ? P : never
        ): void;
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

        // Properties

        set chunk(val: any);

        // Constructors

        constructor(properties?: Partial<StreamChunk.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        connect<K extends keyof StreamChunk.SignalSignatures>(
            signal: K,
            callback: StreamChunk.SignalSignatures[K],
        ): number;
        connect_after<K extends keyof StreamChunk.SignalSignatures>(
            signal: K,
            callback: StreamChunk.SignalSignatures[K],
        ): number;
        emit<K extends keyof StreamChunk.SignalSignatures>(
            signal: K,
            ...args: StreamChunk.SignalSignatures[K] extends (...args: infer P) => any ? P : never
        ): void;

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

        // Constructors

        constructor(properties?: Partial<StreamReader.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        connect<K extends keyof StreamReader.SignalSignatures>(
            signal: K,
            callback: StreamReader.SignalSignatures[K],
        ): number;
        connect_after<K extends keyof StreamReader.SignalSignatures>(
            signal: K,
            callback: StreamReader.SignalSignatures[K],
        ): number;
        emit<K extends keyof StreamReader.SignalSignatures>(
            signal: K,
            ...args: StreamReader.SignalSignatures[K] extends (...args: infer P) => any ? P : never
        ): void;
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

        // Signals

        connect<K extends keyof Ticket.SignalSignatures>(signal: K, callback: Ticket.SignalSignatures[K]): number;
        connect_after<K extends keyof Ticket.SignalSignatures>(signal: K, callback: Ticket.SignalSignatures[K]): number;
        emit<K extends keyof Ticket.SignalSignatures>(
            signal: K,
            ...args: Ticket.SignalSignatures[K] extends (...args: infer P) => any ? P : never
        ): void;

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
