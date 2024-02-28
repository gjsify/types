/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './arrowflight-1.0-ambient.d.ts';
import './arrowflight-1.0-import.d.ts';
/**
 * ArrowFlight-1.0
 */

import type Arrow from '@girs/arrow-1.0';
import type Gio from '@girs/gio-2.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';

export namespace ArrowFlight {
    module CallOptions {
        // Constructor properties interface
    }

    class CallOptions extends GObject.Object {
        // Constructors of ArrowFlight-1.0.CallOptions

        static ['new'](): CallOptions;
    }

    module Client {
        // Constructor properties interface
    }

    class Client extends GObject.Object {
        // Own properties of ArrowFlight-1.0.Client

        client: any;

        // Constructors of ArrowFlight-1.0.Client

        static ['new'](location: Location, options?: ClientOptions | null): Client;

        // Owm methods of ArrowFlight-1.0.Client

        do_get(ticket: Ticket, options?: CallOptions | null): StreamReader | null;
        list_flights(criteria?: Criteria | null, options?: CallOptions | null): Info[] | null;
    }

    module ClientOptions {
        // Constructor properties interface
    }

    class ClientOptions extends GObject.Object {
        // Constructors of ArrowFlight-1.0.ClientOptions

        static ['new'](): ClientOptions;
    }

    module CommandDescriptor {
        // Constructor properties interface
    }

    class CommandDescriptor extends Descriptor {
        // Constructors of ArrowFlight-1.0.CommandDescriptor

        static ['new'](command: string): CommandDescriptor;

        // Owm methods of ArrowFlight-1.0.CommandDescriptor

        get_command(): string;
    }

    module Criteria {
        // Constructor properties interface
    }

    class Criteria extends GObject.Object {
        // Own properties of ArrowFlight-1.0.Criteria

        /**
         * Opaque criteria expression, dependent on server implementation.
         */
        expression: GLib.Bytes;

        // Constructors of ArrowFlight-1.0.Criteria

        static ['new'](expression: GLib.Bytes): Criteria;
    }

    module DataStream {
        // Constructor properties interface
    }

    class DataStream extends GObject.Object {
        // Own properties of ArrowFlight-1.0.DataStream

        stream: any;
    }

    module Descriptor {
        // Constructor properties interface
    }

    abstract class Descriptor extends GObject.Object {
        // Own properties of ArrowFlight-1.0.Descriptor

        descriptor: any;

        // Owm methods of ArrowFlight-1.0.Descriptor

        equal(other_descriptor: Descriptor): boolean;
        to_string(): string;
    }

    module Endpoint {
        // Constructor properties interface
    }

    class Endpoint extends GObject.Object {
        // Own properties of ArrowFlight-1.0.Endpoint

        /**
         * Opaque ticket identify; use with DoGet RPC.
         */
        readonly ticket: Ticket;

        // Constructors of ArrowFlight-1.0.Endpoint

        static ['new'](ticket: Ticket, locations: Location[]): Endpoint;

        // Owm methods of ArrowFlight-1.0.Endpoint

        equal(other_endpoint: Endpoint): boolean;
        get_locations(): Location[] | null;
    }

    module Info {
        // Constructor properties interface
    }

    class Info extends GObject.Object {
        // Own properties of ArrowFlight-1.0.Info

        info: any;

        // Constructors of ArrowFlight-1.0.Info

        static ['new'](
            schema: Arrow.Schema,
            descriptor: Descriptor,
            endpoints: Endpoint[],
            total_records: number,
            total_bytes: number,
        ): Info;

        // Owm methods of ArrowFlight-1.0.Info

        equal(other_info: Info): boolean;
        get_descriptor(): Descriptor;
        get_endpoints(): Endpoint[];
        get_schema(options?: Arrow.ReadOptions | null): Arrow.Schema;
        get_total_bytes(): number;
        get_total_records(): number;
    }

    module Location {
        // Constructor properties interface
    }

    class Location extends GObject.Object {
        // Constructors of ArrowFlight-1.0.Location

        static ['new'](uri: string): Location;

        // Owm methods of ArrowFlight-1.0.Location

        equal(other_location: Location): boolean;
        get_scheme(): string;
        to_string(): string;
    }

    module PathDescriptor {
        // Constructor properties interface
    }

    class PathDescriptor extends Descriptor {
        // Constructors of ArrowFlight-1.0.PathDescriptor

        static ['new'](paths: string[]): PathDescriptor;

        // Owm methods of ArrowFlight-1.0.PathDescriptor

        get_paths(): string[] | null;
    }

    module RecordBatchReader {
        // Constructor properties interface
    }

    class RecordBatchReader extends GObject.Object {
        // Own properties of ArrowFlight-1.0.RecordBatchReader

        reader: any;

        // Owm methods of ArrowFlight-1.0.RecordBatchReader

        read_all(): Arrow.Table;
        read_next(): StreamChunk;
    }

    module RecordBatchStream {
        // Constructor properties interface
    }

    class RecordBatchStream extends DataStream {
        // Own properties of ArrowFlight-1.0.RecordBatchStream

        /**
         * The reader that produces record batches.
         */
        reader: Arrow.RecordBatchReader;

        // Constructors of ArrowFlight-1.0.RecordBatchStream

        static ['new'](reader: Arrow.RecordBatchReader, options?: Arrow.WriteOptions | null): RecordBatchStream;
    }

    module Server {
        // Constructor properties interface
    }

    abstract class Server extends GObject.Object {
        // Owm methods of ArrowFlight-1.0.Server

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
    }

    class ServerCallContext extends GObject.Object {
        // Own properties of ArrowFlight-1.0.ServerCallContext

        call_context: any;
        callContext: any;
    }

    module ServerOptions {
        // Constructor properties interface
    }

    class ServerOptions extends GObject.Object {
        // Own properties of ArrowFlight-1.0.ServerOptions

        location: Location;

        // Constructors of ArrowFlight-1.0.ServerOptions

        static ['new'](location: Location): ServerOptions;
    }

    module StreamChunk {
        // Constructor properties interface
    }

    class StreamChunk extends GObject.Object {
        // Own properties of ArrowFlight-1.0.StreamChunk

        chunk: any;

        // Owm methods of ArrowFlight-1.0.StreamChunk

        get_data(): Arrow.RecordBatch;
        get_metadata(): Arrow.Buffer | null;
    }

    module StreamReader {
        // Constructor properties interface
    }

    class StreamReader extends RecordBatchReader {}

    module Ticket {
        // Constructor properties interface
    }

    class Ticket extends GObject.Object {
        // Own properties of ArrowFlight-1.0.Ticket

        /**
         * Opaque identifier or credential to use when requesting a data
         * stream with the DoGet RPC.
         */
        data: GLib.Bytes;

        // Constructors of ArrowFlight-1.0.Ticket

        static ['new'](data: GLib.Bytes): Ticket;

        // Owm methods of ArrowFlight-1.0.Ticket

        equal(other_ticket: Ticket): boolean;
    }

    class CallOptionsClass {}

    class ClientClass {}

    class ClientOptionsClass {}

    class CommandDescriptorClass {}

    class CriteriaClass {}

    class DataStreamClass {}

    class DescriptorClass {}

    class EndpointClass {}

    class InfoClass {}

    class LocationClass {}

    class PathDescriptorClass {}

    class RecordBatchReaderClass {}

    class RecordBatchStreamClass {}

    class ServerCallContextClass {}

    class ServerClass {}

    class ServerOptionsClass {}

    class StreamChunkClass {}

    class StreamReaderClass {}

    class TicketClass {}

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
