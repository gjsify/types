// @ts-nocheck

/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * ArrowFlight-1.0
 */

import type * as Gjs from './Gjs';
import type Arrow from './Arrow-1.0';
import type Gio from './Gio-2.0';
import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';

export namespace ArrowFlight {

interface CallOptions_ConstructProps extends GObject.Object_ConstructProps {
}

interface CallOptions {

    // Own fields of ArrowFlight-1.0.ArrowFlight.CallOptions

    parent_instance: GObject.Object

    // Class property signals of ArrowFlight-1.0.ArrowFlight.CallOptions

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class CallOptions extends GObject.Object {

    // Own properties of ArrowFlight-1.0.ArrowFlight.CallOptions

    static name: string
    static $gtype: GObject.GType<CallOptions>

    // Constructors of ArrowFlight-1.0.ArrowFlight.CallOptions

    constructor(config?: CallOptions_ConstructProps) 
    constructor() 
    static new(): CallOptions
    _init(config?: CallOptions_ConstructProps): void
}

interface Client_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of ArrowFlight-1.0.ArrowFlight.Client

    client?: object | null
}

interface Client {

    // Own properties of ArrowFlight-1.0.ArrowFlight.Client

    readonly client: object

    // Own fields of ArrowFlight-1.0.ArrowFlight.Client

    parent_instance: GObject.Object

    // Owm methods of ArrowFlight-1.0.ArrowFlight.Client

    do_get(ticket: Ticket, options: CallOptions | null): StreamReader | null
    list_flights(criteria: Criteria | null, options: CallOptions | null): Info[] | null

    // Class property signals of ArrowFlight-1.0.ArrowFlight.Client

    connect(sigName: "notify::client", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::client", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Client extends GObject.Object {

    // Own properties of ArrowFlight-1.0.ArrowFlight.Client

    static name: string
    static $gtype: GObject.GType<Client>

    // Constructors of ArrowFlight-1.0.ArrowFlight.Client

    constructor(config?: Client_ConstructProps) 
    constructor(location: Location, options: ClientOptions | null) 
    static new(location: Location, options: ClientOptions | null): Client
    _init(config?: Client_ConstructProps): void
}

interface ClientOptions_ConstructProps extends GObject.Object_ConstructProps {
}

interface ClientOptions {

    // Own fields of ArrowFlight-1.0.ArrowFlight.ClientOptions

    parent_instance: GObject.Object

    // Class property signals of ArrowFlight-1.0.ArrowFlight.ClientOptions

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class ClientOptions extends GObject.Object {

    // Own properties of ArrowFlight-1.0.ArrowFlight.ClientOptions

    static name: string
    static $gtype: GObject.GType<ClientOptions>

    // Constructors of ArrowFlight-1.0.ArrowFlight.ClientOptions

    constructor(config?: ClientOptions_ConstructProps) 
    constructor() 
    static new(): ClientOptions
    _init(config?: ClientOptions_ConstructProps): void
}

interface CommandDescriptor_ConstructProps extends Descriptor_ConstructProps {
}

interface CommandDescriptor {

    // Own fields of ArrowFlight-1.0.ArrowFlight.CommandDescriptor

    parent_instance: Descriptor

    // Owm methods of ArrowFlight-1.0.ArrowFlight.CommandDescriptor

    get_command(): string

    // Class property signals of ArrowFlight-1.0.ArrowFlight.CommandDescriptor

    connect(sigName: "notify::descriptor", callback: (($obj: CommandDescriptor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::descriptor", callback: (($obj: CommandDescriptor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::descriptor", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class CommandDescriptor extends Descriptor {

    // Own properties of ArrowFlight-1.0.ArrowFlight.CommandDescriptor

    static name: string
    static $gtype: GObject.GType<CommandDescriptor>

    // Constructors of ArrowFlight-1.0.ArrowFlight.CommandDescriptor

    constructor(config?: CommandDescriptor_ConstructProps) 
    constructor(command: string) 
    static new(command: string): CommandDescriptor
    _init(config?: CommandDescriptor_ConstructProps): void
}

interface Criteria_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of ArrowFlight-1.0.ArrowFlight.Criteria

    /**
     * Opaque criteria expression, dependent on server implementation.
     */
    expression?: GLib.Bytes | null
}

interface Criteria {

    // Own properties of ArrowFlight-1.0.ArrowFlight.Criteria

    /**
     * Opaque criteria expression, dependent on server implementation.
     */
    expression: GLib.Bytes

    // Own fields of ArrowFlight-1.0.ArrowFlight.Criteria

    parent_instance: GObject.Object

    // Class property signals of ArrowFlight-1.0.ArrowFlight.Criteria

    connect(sigName: "notify::expression", callback: (($obj: Criteria, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expression", callback: (($obj: Criteria, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::expression", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Criteria extends GObject.Object {

    // Own properties of ArrowFlight-1.0.ArrowFlight.Criteria

    static name: string
    static $gtype: GObject.GType<Criteria>

    // Constructors of ArrowFlight-1.0.ArrowFlight.Criteria

    constructor(config?: Criteria_ConstructProps) 
    constructor(expression: GLib.Bytes) 
    static new(expression: GLib.Bytes): Criteria
    _init(config?: Criteria_ConstructProps): void
}

interface DataStream_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of ArrowFlight-1.0.ArrowFlight.DataStream

    stream?: object | null
}

interface DataStream {

    // Own properties of ArrowFlight-1.0.ArrowFlight.DataStream

    readonly stream: object

    // Own fields of ArrowFlight-1.0.ArrowFlight.DataStream

    parent_instance: GObject.Object

    // Class property signals of ArrowFlight-1.0.ArrowFlight.DataStream

    connect(sigName: "notify::stream", callback: (($obj: DataStream, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stream", callback: (($obj: DataStream, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::stream", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class DataStream extends GObject.Object {

    // Own properties of ArrowFlight-1.0.ArrowFlight.DataStream

    static name: string
    static $gtype: GObject.GType<DataStream>

    // Constructors of ArrowFlight-1.0.ArrowFlight.DataStream

    constructor(config?: DataStream_ConstructProps) 
    _init(config?: DataStream_ConstructProps): void
}

interface Descriptor_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of ArrowFlight-1.0.ArrowFlight.Descriptor

    descriptor?: object | null
}

interface Descriptor {

    // Own properties of ArrowFlight-1.0.ArrowFlight.Descriptor

    readonly descriptor: object

    // Own fields of ArrowFlight-1.0.ArrowFlight.Descriptor

    parent_instance: GObject.Object

    // Owm methods of ArrowFlight-1.0.ArrowFlight.Descriptor

    equal(other_descriptor: Descriptor): boolean
    to_string(): string

    // Class property signals of ArrowFlight-1.0.ArrowFlight.Descriptor

    connect(sigName: "notify::descriptor", callback: (($obj: Descriptor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::descriptor", callback: (($obj: Descriptor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::descriptor", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Descriptor extends GObject.Object {

    // Own properties of ArrowFlight-1.0.ArrowFlight.Descriptor

    static name: string
    static $gtype: GObject.GType<Descriptor>

    // Constructors of ArrowFlight-1.0.ArrowFlight.Descriptor

    constructor(config?: Descriptor_ConstructProps) 
    _init(config?: Descriptor_ConstructProps): void
}

interface Endpoint_ConstructProps extends GObject.Object_ConstructProps {
}

interface Endpoint {

    // Own properties of ArrowFlight-1.0.ArrowFlight.Endpoint

    /**
     * Opaque ticket identify; use with DoGet RPC.
     */
    readonly ticket: Ticket

    // Own fields of ArrowFlight-1.0.ArrowFlight.Endpoint

    parent_instance: GObject.Object

    // Owm methods of ArrowFlight-1.0.ArrowFlight.Endpoint

    equal(other_endpoint: Endpoint): boolean
    get_locations(): Location[] | null

    // Class property signals of ArrowFlight-1.0.ArrowFlight.Endpoint

    connect(sigName: "notify::ticket", callback: (($obj: Endpoint, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ticket", callback: (($obj: Endpoint, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::ticket", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Endpoint extends GObject.Object {

    // Own properties of ArrowFlight-1.0.ArrowFlight.Endpoint

    static name: string
    static $gtype: GObject.GType<Endpoint>

    // Constructors of ArrowFlight-1.0.ArrowFlight.Endpoint

    constructor(config?: Endpoint_ConstructProps) 
    constructor(ticket: Ticket, locations: Location[]) 
    static new(ticket: Ticket, locations: Location[]): Endpoint
    _init(config?: Endpoint_ConstructProps): void
}

interface Info_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of ArrowFlight-1.0.ArrowFlight.Info

    info?: object | null
}

interface Info {

    // Own properties of ArrowFlight-1.0.ArrowFlight.Info

    readonly info: object

    // Own fields of ArrowFlight-1.0.ArrowFlight.Info

    parent_instance: GObject.Object

    // Owm methods of ArrowFlight-1.0.ArrowFlight.Info

    equal(other_info: Info): boolean
    get_descriptor(): Descriptor
    get_endpoints(): Endpoint[]
    get_schema(options: Arrow.ReadOptions | null): Arrow.Schema
    get_total_bytes(): number
    get_total_records(): number

    // Class property signals of ArrowFlight-1.0.ArrowFlight.Info

    connect(sigName: "notify::info", callback: (($obj: Info, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::info", callback: (($obj: Info, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::info", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Info extends GObject.Object {

    // Own properties of ArrowFlight-1.0.ArrowFlight.Info

    static name: string
    static $gtype: GObject.GType<Info>

    // Constructors of ArrowFlight-1.0.ArrowFlight.Info

    constructor(config?: Info_ConstructProps) 
    constructor(schema: Arrow.Schema, descriptor: Descriptor, endpoints: Endpoint[], total_records: number, total_bytes: number) 
    static new(schema: Arrow.Schema, descriptor: Descriptor, endpoints: Endpoint[], total_records: number, total_bytes: number): Info
    _init(config?: Info_ConstructProps): void
}

interface Location_ConstructProps extends GObject.Object_ConstructProps {
}

interface Location {

    // Own fields of ArrowFlight-1.0.ArrowFlight.Location

    parent_instance: GObject.Object

    // Owm methods of ArrowFlight-1.0.ArrowFlight.Location

    equal(other_location: Location): boolean
    get_scheme(): string
    to_string(): string

    // Class property signals of ArrowFlight-1.0.ArrowFlight.Location

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Location extends GObject.Object {

    // Own properties of ArrowFlight-1.0.ArrowFlight.Location

    static name: string
    static $gtype: GObject.GType<Location>

    // Constructors of ArrowFlight-1.0.ArrowFlight.Location

    constructor(config?: Location_ConstructProps) 
    constructor(uri: string) 
    static new(uri: string): Location
    _init(config?: Location_ConstructProps): void
}

interface PathDescriptor_ConstructProps extends Descriptor_ConstructProps {
}

interface PathDescriptor {

    // Own fields of ArrowFlight-1.0.ArrowFlight.PathDescriptor

    parent_instance: Descriptor

    // Owm methods of ArrowFlight-1.0.ArrowFlight.PathDescriptor

    get_paths(): string[] | null

    // Class property signals of ArrowFlight-1.0.ArrowFlight.PathDescriptor

    connect(sigName: "notify::descriptor", callback: (($obj: PathDescriptor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::descriptor", callback: (($obj: PathDescriptor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::descriptor", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class PathDescriptor extends Descriptor {

    // Own properties of ArrowFlight-1.0.ArrowFlight.PathDescriptor

    static name: string
    static $gtype: GObject.GType<PathDescriptor>

    // Constructors of ArrowFlight-1.0.ArrowFlight.PathDescriptor

    constructor(config?: PathDescriptor_ConstructProps) 
    constructor(paths: string[]) 
    static new(paths: string[]): PathDescriptor
    _init(config?: PathDescriptor_ConstructProps): void
}

interface RecordBatchReader_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of ArrowFlight-1.0.ArrowFlight.RecordBatchReader

    reader?: object | null
}

interface RecordBatchReader {

    // Own properties of ArrowFlight-1.0.ArrowFlight.RecordBatchReader

    readonly reader: object

    // Own fields of ArrowFlight-1.0.ArrowFlight.RecordBatchReader

    parent_instance: GObject.Object

    // Owm methods of ArrowFlight-1.0.ArrowFlight.RecordBatchReader

    read_all(): Arrow.Table
    read_next(): StreamChunk

    // Class property signals of ArrowFlight-1.0.ArrowFlight.RecordBatchReader

    connect(sigName: "notify::reader", callback: (($obj: RecordBatchReader, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::reader", callback: (($obj: RecordBatchReader, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::reader", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class RecordBatchReader extends GObject.Object {

    // Own properties of ArrowFlight-1.0.ArrowFlight.RecordBatchReader

    static name: string
    static $gtype: GObject.GType<RecordBatchReader>

    // Constructors of ArrowFlight-1.0.ArrowFlight.RecordBatchReader

    constructor(config?: RecordBatchReader_ConstructProps) 
    _init(config?: RecordBatchReader_ConstructProps): void
}

interface RecordBatchStream_ConstructProps extends DataStream_ConstructProps {

    // Own constructor properties of ArrowFlight-1.0.ArrowFlight.RecordBatchStream

    /**
     * The reader that produces record batches.
     */
    reader?: Arrow.RecordBatchReader | null
}

interface RecordBatchStream {

    // Own properties of ArrowFlight-1.0.ArrowFlight.RecordBatchStream

    /**
     * The reader that produces record batches.
     */
    readonly reader: Arrow.RecordBatchReader

    // Own fields of ArrowFlight-1.0.ArrowFlight.RecordBatchStream

    parent_instance: DataStream

    // Class property signals of ArrowFlight-1.0.ArrowFlight.RecordBatchStream

    connect(sigName: "notify::reader", callback: (($obj: RecordBatchStream, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::reader", callback: (($obj: RecordBatchStream, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::reader", ...args: any[]): void
    connect(sigName: "notify::stream", callback: (($obj: RecordBatchStream, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stream", callback: (($obj: RecordBatchStream, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::stream", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class RecordBatchStream extends DataStream {

    // Own properties of ArrowFlight-1.0.ArrowFlight.RecordBatchStream

    static name: string
    static $gtype: GObject.GType<RecordBatchStream>

    // Constructors of ArrowFlight-1.0.ArrowFlight.RecordBatchStream

    constructor(config?: RecordBatchStream_ConstructProps) 
    constructor(reader: Arrow.RecordBatchReader, options: Arrow.WriteOptions | null) 
    static new(reader: Arrow.RecordBatchReader, options: Arrow.WriteOptions | null): RecordBatchStream
    _init(config?: RecordBatchStream_ConstructProps): void
}

interface Server_ConstructProps extends GObject.Object_ConstructProps {
}

interface Server {

    // Own fields of ArrowFlight-1.0.ArrowFlight.Server

    parent_instance: GObject.Object

    // Owm methods of ArrowFlight-1.0.ArrowFlight.Server

    do_get(context: ServerCallContext, ticket: Ticket): DataStream
    get_port(): number
    list_flights(context: ServerCallContext, criteria: Criteria | null): Info[]
    listen(options: ServerOptions): boolean
    /**
     * Shuts down the serve. This function can be called from signal
     * handler or another thread.
     */
    shutdown(): boolean
    wait(): boolean

    // Own virtual methods of ArrowFlight-1.0.ArrowFlight.Server

    vfunc_do_get(context: ServerCallContext, ticket: Ticket): DataStream
    vfunc_list_flights(context: ServerCallContext, criteria: Criteria | null): Info[]

    // Class property signals of ArrowFlight-1.0.ArrowFlight.Server

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Server extends GObject.Object {

    // Own properties of ArrowFlight-1.0.ArrowFlight.Server

    static name: string
    static $gtype: GObject.GType<Server>

    // Constructors of ArrowFlight-1.0.ArrowFlight.Server

    constructor(config?: Server_ConstructProps) 
    _init(config?: Server_ConstructProps): void
}

interface ServerCallContext_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of ArrowFlight-1.0.ArrowFlight.ServerCallContext

    call_context?: object | null
}

interface ServerCallContext {

    // Own properties of ArrowFlight-1.0.ArrowFlight.ServerCallContext

    readonly call_context: object

    // Own fields of ArrowFlight-1.0.ArrowFlight.ServerCallContext

    parent_instance: GObject.Object

    // Class property signals of ArrowFlight-1.0.ArrowFlight.ServerCallContext

    connect(sigName: "notify::call-context", callback: (($obj: ServerCallContext, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::call-context", callback: (($obj: ServerCallContext, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::call-context", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class ServerCallContext extends GObject.Object {

    // Own properties of ArrowFlight-1.0.ArrowFlight.ServerCallContext

    static name: string
    static $gtype: GObject.GType<ServerCallContext>

    // Constructors of ArrowFlight-1.0.ArrowFlight.ServerCallContext

    constructor(config?: ServerCallContext_ConstructProps) 
    _init(config?: ServerCallContext_ConstructProps): void
}

interface ServerOptions_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of ArrowFlight-1.0.ArrowFlight.ServerOptions

    location?: Location | null
}

interface ServerOptions {

    // Own properties of ArrowFlight-1.0.ArrowFlight.ServerOptions

    readonly location: Location

    // Own fields of ArrowFlight-1.0.ArrowFlight.ServerOptions

    parent_instance: GObject.Object

    // Class property signals of ArrowFlight-1.0.ArrowFlight.ServerOptions

    connect(sigName: "notify::location", callback: (($obj: ServerOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::location", callback: (($obj: ServerOptions, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::location", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class ServerOptions extends GObject.Object {

    // Own properties of ArrowFlight-1.0.ArrowFlight.ServerOptions

    static name: string
    static $gtype: GObject.GType<ServerOptions>

    // Constructors of ArrowFlight-1.0.ArrowFlight.ServerOptions

    constructor(config?: ServerOptions_ConstructProps) 
    constructor(location: Location) 
    static new(location: Location): ServerOptions
    _init(config?: ServerOptions_ConstructProps): void
}

interface StreamChunk_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of ArrowFlight-1.0.ArrowFlight.StreamChunk

    chunk?: object | null
}

interface StreamChunk {

    // Own properties of ArrowFlight-1.0.ArrowFlight.StreamChunk

    readonly chunk: object

    // Own fields of ArrowFlight-1.0.ArrowFlight.StreamChunk

    parent_instance: GObject.Object

    // Owm methods of ArrowFlight-1.0.ArrowFlight.StreamChunk

    get_data(): Arrow.RecordBatch

    // Overloads of get_data

    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     * @param key name of the key for that association
     */
    get_data(key?: string): object | null
    get_data(...args: any[]): any
    get_data(args_or_key?: any[] | string): Arrow.RecordBatch | object | null | any
    get_metadata(): Arrow.Buffer | null

    // Class property signals of ArrowFlight-1.0.ArrowFlight.StreamChunk

    connect(sigName: "notify::chunk", callback: (($obj: StreamChunk, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::chunk", callback: (($obj: StreamChunk, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::chunk", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class StreamChunk extends GObject.Object {

    // Own properties of ArrowFlight-1.0.ArrowFlight.StreamChunk

    static name: string
    static $gtype: GObject.GType<StreamChunk>

    // Constructors of ArrowFlight-1.0.ArrowFlight.StreamChunk

    constructor(config?: StreamChunk_ConstructProps) 
    _init(config?: StreamChunk_ConstructProps): void
}

interface StreamReader_ConstructProps extends RecordBatchReader_ConstructProps {
}

interface StreamReader {

    // Own fields of ArrowFlight-1.0.ArrowFlight.StreamReader

    parent_instance: RecordBatchReader

    // Class property signals of ArrowFlight-1.0.ArrowFlight.StreamReader

    connect(sigName: "notify::reader", callback: (($obj: StreamReader, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::reader", callback: (($obj: StreamReader, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::reader", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class StreamReader extends RecordBatchReader {

    // Own properties of ArrowFlight-1.0.ArrowFlight.StreamReader

    static name: string
    static $gtype: GObject.GType<StreamReader>

    // Constructors of ArrowFlight-1.0.ArrowFlight.StreamReader

    constructor(config?: StreamReader_ConstructProps) 
    _init(config?: StreamReader_ConstructProps): void
}

interface Ticket_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of ArrowFlight-1.0.ArrowFlight.Ticket

    /**
     * Opaque identifier or credential to use when requesting a data
     * stream with the DoGet RPC.
     */
    data?: GLib.Bytes | null
}

interface Ticket {

    // Own properties of ArrowFlight-1.0.ArrowFlight.Ticket

    /**
     * Opaque identifier or credential to use when requesting a data
     * stream with the DoGet RPC.
     */
    data: GLib.Bytes

    // Own fields of ArrowFlight-1.0.ArrowFlight.Ticket

    parent_instance: GObject.Object

    // Owm methods of ArrowFlight-1.0.ArrowFlight.Ticket

    equal(other_ticket: Ticket): boolean

    // Class property signals of ArrowFlight-1.0.ArrowFlight.Ticket

    connect(sigName: "notify::data", callback: (($obj: Ticket, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::data", callback: (($obj: Ticket, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::data", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Ticket extends GObject.Object {

    // Own properties of ArrowFlight-1.0.ArrowFlight.Ticket

    static name: string
    static $gtype: GObject.GType<Ticket>

    // Constructors of ArrowFlight-1.0.ArrowFlight.Ticket

    constructor(config?: Ticket_ConstructProps) 
    constructor(data: GLib.Bytes) 
    static new(data: GLib.Bytes): Ticket
    _init(config?: Ticket_ConstructProps): void
}

interface CallOptionsClass {

    // Own fields of ArrowFlight-1.0.ArrowFlight.CallOptionsClass

    parent_class: GObject.ObjectClass
}

abstract class CallOptionsClass {

    // Own properties of ArrowFlight-1.0.ArrowFlight.CallOptionsClass

    static name: string
}

interface ClientClass {

    // Own fields of ArrowFlight-1.0.ArrowFlight.ClientClass

    parent_class: GObject.ObjectClass
}

abstract class ClientClass {

    // Own properties of ArrowFlight-1.0.ArrowFlight.ClientClass

    static name: string
}

interface ClientOptionsClass {

    // Own fields of ArrowFlight-1.0.ArrowFlight.ClientOptionsClass

    parent_class: GObject.ObjectClass
}

abstract class ClientOptionsClass {

    // Own properties of ArrowFlight-1.0.ArrowFlight.ClientOptionsClass

    static name: string
}

interface CommandDescriptorClass {

    // Own fields of ArrowFlight-1.0.ArrowFlight.CommandDescriptorClass

    parent_class: DescriptorClass
}

abstract class CommandDescriptorClass {

    // Own properties of ArrowFlight-1.0.ArrowFlight.CommandDescriptorClass

    static name: string
}

interface CriteriaClass {

    // Own fields of ArrowFlight-1.0.ArrowFlight.CriteriaClass

    parent_class: GObject.ObjectClass
}

abstract class CriteriaClass {

    // Own properties of ArrowFlight-1.0.ArrowFlight.CriteriaClass

    static name: string
}

interface DataStreamClass {

    // Own fields of ArrowFlight-1.0.ArrowFlight.DataStreamClass

    parent_class: GObject.ObjectClass
}

abstract class DataStreamClass {

    // Own properties of ArrowFlight-1.0.ArrowFlight.DataStreamClass

    static name: string
}

interface DescriptorClass {

    // Own fields of ArrowFlight-1.0.ArrowFlight.DescriptorClass

    parent_class: GObject.ObjectClass
}

abstract class DescriptorClass {

    // Own properties of ArrowFlight-1.0.ArrowFlight.DescriptorClass

    static name: string
}

interface EndpointClass {

    // Own fields of ArrowFlight-1.0.ArrowFlight.EndpointClass

    parent_class: GObject.ObjectClass
}

abstract class EndpointClass {

    // Own properties of ArrowFlight-1.0.ArrowFlight.EndpointClass

    static name: string
}

interface InfoClass {

    // Own fields of ArrowFlight-1.0.ArrowFlight.InfoClass

    parent_class: GObject.ObjectClass
}

abstract class InfoClass {

    // Own properties of ArrowFlight-1.0.ArrowFlight.InfoClass

    static name: string
}

interface LocationClass {

    // Own fields of ArrowFlight-1.0.ArrowFlight.LocationClass

    parent_class: GObject.ObjectClass
}

abstract class LocationClass {

    // Own properties of ArrowFlight-1.0.ArrowFlight.LocationClass

    static name: string
}

interface PathDescriptorClass {

    // Own fields of ArrowFlight-1.0.ArrowFlight.PathDescriptorClass

    parent_class: DescriptorClass
}

abstract class PathDescriptorClass {

    // Own properties of ArrowFlight-1.0.ArrowFlight.PathDescriptorClass

    static name: string
}

interface RecordBatchReaderClass {

    // Own fields of ArrowFlight-1.0.ArrowFlight.RecordBatchReaderClass

    parent_class: GObject.ObjectClass
}

abstract class RecordBatchReaderClass {

    // Own properties of ArrowFlight-1.0.ArrowFlight.RecordBatchReaderClass

    static name: string
}

interface RecordBatchStreamClass {

    // Own fields of ArrowFlight-1.0.ArrowFlight.RecordBatchStreamClass

    parent_class: DataStreamClass
}

abstract class RecordBatchStreamClass {

    // Own properties of ArrowFlight-1.0.ArrowFlight.RecordBatchStreamClass

    static name: string
}

interface ServerCallContextClass {

    // Own fields of ArrowFlight-1.0.ArrowFlight.ServerCallContextClass

    parent_class: GObject.ObjectClass
}

abstract class ServerCallContextClass {

    // Own properties of ArrowFlight-1.0.ArrowFlight.ServerCallContextClass

    static name: string
}

interface ServerClass {

    // Own fields of ArrowFlight-1.0.ArrowFlight.ServerClass

    parent_class: GObject.ObjectClass
    list_flights: (server: Server, context: ServerCallContext, criteria: Criteria | null) => Info[]
    do_get: (server: Server, context: ServerCallContext, ticket: Ticket) => DataStream
}

abstract class ServerClass {

    // Own properties of ArrowFlight-1.0.ArrowFlight.ServerClass

    static name: string
}

interface ServerOptionsClass {

    // Own fields of ArrowFlight-1.0.ArrowFlight.ServerOptionsClass

    parent_class: GObject.ObjectClass
}

abstract class ServerOptionsClass {

    // Own properties of ArrowFlight-1.0.ArrowFlight.ServerOptionsClass

    static name: string
}

interface StreamChunkClass {

    // Own fields of ArrowFlight-1.0.ArrowFlight.StreamChunkClass

    parent_class: GObject.ObjectClass
}

abstract class StreamChunkClass {

    // Own properties of ArrowFlight-1.0.ArrowFlight.StreamChunkClass

    static name: string
}

interface StreamReaderClass {

    // Own fields of ArrowFlight-1.0.ArrowFlight.StreamReaderClass

    parent_class: RecordBatchReaderClass
}

abstract class StreamReaderClass {

    // Own properties of ArrowFlight-1.0.ArrowFlight.StreamReaderClass

    static name: string
}

interface TicketClass {

    // Own fields of ArrowFlight-1.0.ArrowFlight.TicketClass

    parent_class: GObject.ObjectClass
}

abstract class TicketClass {

    // Own properties of ArrowFlight-1.0.ArrowFlight.TicketClass

    static name: string
}

}
export default ArrowFlight;