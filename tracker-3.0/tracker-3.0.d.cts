
/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './tracker-3.0-ambient.d.ts';
import './tracker-3.0-import.d.ts';
/**
 * Tracker-3.0
 */

import type Gio from '@girs/gio-2.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';

/**
 * Flags affecting deserialization from a RDF data format.
 */
export enum DeserializeFlags {
    /**
     * No flags.
     */
    NONE,
}
/**
 * Notifier event types.
 */
export enum NotifierEventType {
    /**
     * An element was created.
     */
    CREATE,
    /**
     * An element was deleted.
     */
    DELETE,
    /**
     * An element was updated.
     */
    UPDATE,
}
/**
 * Describes a RDF format to be used in data exchange.
 */
export enum RdfFormat {
    /**
     * Turtle format
     *   ([http://www.w3.org/ns/formats/Turtle](http://www.w3.org/ns/formats/Turtle))
     */
    TURTLE,
    /**
     * Trig format
     *   ([http://www.w3.org/ns/formats/Trig](http://www.w3.org/ns/formats/Trig))
     */
    TRIG,
    /**
     * JSON-LD format
     *   ([http://www.w3.org/ns/formats/JSON-LD](http://www.w3.org/ns/formats/JSON-LD)).
     *   This value was added in version 3.5.
     */
    JSON_LD,
    /**
     * The total number of RDF formats
     */
    LAST,
}
/**
 * Flags affecting serialization into a RDF data format.
 */
export enum SerializeFlags {
    /**
     * No flags.
     */
    NONE,
}
/**
 * Error domain for Tracker Sparql. Errors in this domain will be from the
 * [error`Tracker`.SparqlError] enumeration. See [struct`GLib`.Error] for more information on error
 * domains.
 */
export enum SparqlError {
    /**
     * Subject is not in the domain of a property or
     *                             trying to set multiple values for a single valued
     *                             property.
     */
    CONSTRAINT,
    /**
     * Internal error.
     */
    INTERNAL,
    /**
     * There was no disk space available to perform the request.
     */
    NO_SPACE,
    /**
     * The specified ontology wasn't found.
     */
    ONTOLOGY_NOT_FOUND,
    /**
     * Problem encountered while opening the database.
     */
    OPEN_ERROR,
    /**
     * Error parsing the SPARQL string.
     */
    PARSE,
    /**
     * Problem while executing the query.
     */
    QUERY_FAILED,
    /**
     * Type constraint failed when trying to insert data.
     */
    TYPE,
    /**
     * Unknown class.
     */
    UNKNOWN_CLASS,
    /**
     * Unknown graph.
     */
    UNKNOWN_GRAPH,
    /**
     * Unknown property.
     */
    UNKNOWN_PROPERTY,
    /**
     * Unsupported feature or method.
     */
    UNSUPPORTED,
    /**
     * The ontology doesn't contain nrl:lastModified header
     */
    MISSING_LAST_MODIFIED_HEADER,
    /**
     * The property is not completely defined.
     */
    INCOMPLETE_PROPERTY_DEFINITION,
    /**
     * A soft/hard corruption was found in the database during operation.
     */
    CORRUPT,
    /**
     * The total number of error codes.
     */
    LAST,
}
/**
 * Enumeration with the possible types of the cursor's cells
 */
export enum SparqlValueType {
    /**
     * Unbound value type
     */
    UNBOUND,
    /**
     * Uri value type, rdfs:Resource
     */
    URI,
    /**
     * String value type, xsd:string
     */
    STRING,
    /**
     * Integer value type, xsd:integer
     */
    INTEGER,
    /**
     * Double value type, xsd:double
     */
    DOUBLE,
    /**
     * Datetime value type, xsd:dateTime
     */
    DATETIME,
    /**
     * Blank node value type
     */
    BLANK_NODE,
    /**
     * Boolean value type, xsd:boolean
     */
    BOOLEAN,
}
/**
 * Connection flags to modify #TrackerSparqlConnection behavior.
 * @bitfield 
 */
export enum SparqlConnectionFlags {
    /**
     * No flags.
     */
    NONE,
    /**
     * Connection is readonly.
     */
    READONLY,
    /**
     * Word stemming is applied to FTS search terms.
     */
    FTS_ENABLE_STEMMER,
    /**
     * Unaccenting is applied to FTS search terms.
     */
    FTS_ENABLE_UNACCENT,
    /**
     * FTS Search terms are filtered through a stop word list. This flag is deprecated since Tracker 3.6, and will do nothing.
     */
    FTS_ENABLE_STOP_WORDS,
    /**
     * Ignore numbers in FTS search terms.
     */
    FTS_IGNORE_NUMBERS,
    /**
     * Treat blank nodes as specified in
     *   SPARQL 1.1 syntax. Namely, they cannot be used as URIs. This flag is available since Tracker 3.3.
     */
    ANONYMOUS_BNODES,
}
/**
 * The major version of the Tracker library.
 * 
 * Like #tracker_major_version, but intended to be used at application compile time.
 */
export const MAJOR_VERSION: number
/**
 * The micro version of the Tracker library.
 * 
 * Like #tracker_micro_version, but intended to be used at application compile time.
 */
export const MICRO_VERSION: number
/**
 * The minor version of the Tracker library.
 * 
 * Like #tracker_minor_version, but intended to be used at application compile time.
 */
export const MINOR_VERSION: number
/**
 * The Prefix of the DC (Dublin Core) namespace
 */
export const PREFIX_DC: string | null
/**
 * The Prefix of the MFO namespace
 */
export const PREFIX_MFO: string | null
/**
 * The Prefix of the NAO namespace
 */
export const PREFIX_NAO: string | null
/**
 * The Prefix of the NCO namespace
 */
export const PREFIX_NCO: string | null
/**
 * The Prefix of the NFO namespace
 */
export const PREFIX_NFO: string | null
/**
 * The Prefix of the NIE namespace
 */
export const PREFIX_NIE: string | null
/**
 * The Prefix of the RDF namespace
 */
export const PREFIX_NMM: string | null
/**
 * The Prefix of the NRL namespace
 */
export const PREFIX_NRL: string | null
/**
 * The Prefix of the Osinfo namespace
 */
export const PREFIX_OSINFO: string | null
/**
 * The Prefix of the RDF namespace
 */
export const PREFIX_RDF: string | null
/**
 * The Prefix of the RDFS namespace
 */
export const PREFIX_RDFS: string | null
/**
 * The Prefix of the SLO namespace
 */
export const PREFIX_SLO: string | null
/**
 * The Prefix of the Tracker namespace
 */
export const PREFIX_TRACKER: string | null
/**
 * The Prefix of the XSD namespace
 */
export const PREFIX_XSD: string | null
/**
 * Checks that the Tracker library in use is compatible with the given version.
 * 
 * Generally you would pass in the constants
 * [const`Tracker`.MAJOR_VERSION], [const`Tracker`.MINOR_VERSION], [const`Tracker`.MICRO_VERSION]
 * as the three arguments to this function; that produces
 * a check that the library in use is compatible with
 * the version of Tracker the application or module was compiled
 * against.
 * 
 * Compatibility is defined by two things: first the version
 * of the running library is newer than the version
 * `required_major`.`required_minor`.`required_micro`. Second
 * the running library must be binary compatible with the
 * version `required_major`.`required_minor`.`required_micro`
 * (same major version.)
 * @param required_major the required major version.
 * @param required_minor the required minor version.
 * @param required_micro the required micro version.
 * @returns %NULL if the Tracker library is compatible with the   given version, or a string describing the version mismatch.
 */
export function check_version(required_major: number, required_minor: number, required_micro: number): string | null
export function sparql_error_quark(): GLib.Quark
/**
 * Escapes `literal` so it is suitable for insertion in
 * SPARQL queries as string literals.
 * 
 * Manual construction of query strings based user input is best
 * avoided at all cost, use of #TrackerSparqlStatement is recommended
 * instead.
 * @param literal a string to escape
 * @returns the escaped string
 */
export function sparql_escape_string(literal: string | null): string | null
/**
 * Escapes a string for use as a URI.
 * @param uri a string to be escaped, following the tracker sparql rules
 * @returns a newly-allocated string holding the result.
 */
export function sparql_escape_uri(uri: string | null): string | null
/**
 * Returns a path to the built-in Nepomuk ontologies.
 * @returns a #GFile instance.
 */
export function sparql_get_ontology_nepomuk(): Gio.File
/**
 * Creates a fresh UUID-based URN.
 * @returns A newly generated UUID URN.
 */
export function sparql_get_uuid_urn(): string | null
export module Batch {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Tracker-3.0.Tracker.Batch

        /**
         * The [class`Tracker`.SparqlConnection] the batch belongs to.
         */
        connection?: SparqlConnection | null
    }

}

export interface Batch {

    // Own properties of Tracker-3.0.Tracker.Batch

    /**
     * The [class`Tracker`.SparqlConnection] the batch belongs to.
     */
    readonly connection: SparqlConnection

    // Own fields of Tracker-3.0.Tracker.Batch

    parent_instance: GObject.Object

    // Owm methods of Tracker-3.0.Tracker.Batch

    /**
     * Inserts the RDF data contained in `stream` as part of `batch`.
     * 
     * The RDF data will be inserted in the given `default_graph` if one is provided,
     * or the anonymous graph if `default_graph` is %NULL. Any RDF data that has a
     * graph specified (e.g. using the `GRAPH` clause in the Trig format) will
     * be inserted in the specified graph instead of `default_graph`.
     * 
     * The `flags` argument is reserved for future expansions, currently
     * %TRACKER_DESERIALIZE_FLAGS_NONE must be passed.
     * @param flags Deserialization flags
     * @param format RDF format of data in stream
     * @param default_graph Default graph that will receive the RDF data
     * @param stream Input stream with RDF data
     */
    add_rdf(flags: DeserializeFlags, format: RdfFormat, default_graph: string | null, stream: Gio.InputStream): void
    /**
     * Adds the RDF represented by `resource` to `batch`.
     * @param graph RDF graph to insert the resource to
     * @param resource A [class`Tracker`.Resource]
     */
    add_resource(graph: string | null, resource: Resource): void
    /**
     * Adds an SPARQL update string to `batch`.
     * @param sparql A SPARQL update string
     */
    add_sparql(sparql: string | null): void
    /**
     * Adds a [class`Tracker`.SparqlStatement] containing an SPARQL update. The statement will
     * be executed once in the batch, with the values bound as specified by `variable_names`
     * and `values`.
     * 
     * For example, for a statement that has a single `~name` parameter,
     * it could be given a value for execution with the given code:
     * 
     * ```c
     * const char *names = { "name" };
     * const GValue values[G_N_ELEMENTS (names)] = { 0, };
     * 
     * g_value_init (&values[0], G_TYPE_STRING);
     * g_value_set_string (&values[0], "John Smith");
     * tracker_batch_add_statementv (batch, stmt,
     *                               G_N_ELEMENTS (names),
     *                               names, values);
     * ```
     * ```python
     * batch.add_statement(stmt, ['name'], ['John Smith']);
     * ```
     * ```js
     * batch.add_statement(stmt, ['name'], ['John Smith']);
     * ```
     * 
     * A [class`Tracker`.SparqlStatement] may be used on multiple [method`Tracker`.Batch.add_statement]
     * calls with the same or different values, on the same or different `TrackerBatch`
     * objects.
     * 
     * This function should only be called on [class`Tracker`.SparqlStatement] objects
     * obtained through [method`Tracker`.SparqlConnection.update_statement] or
     * update statements loaded through [method`Tracker`.SparqlConnection.load_statement_from_gresource].
     * @param stmt A [class`Tracker`.SparqlStatement] containing a SPARQL update
     * @param variable_names The names of each bound parameter
     * @param values The values of each bound parameter
     */
    add_statement(stmt: SparqlStatement, variable_names: string[], values: any[]): void
    /**
     * Executes the batch. This operations happens synchronously.
     * @param cancellable Optional [type`Gio`.Cancellable]
     * @returns %TRUE of there were no errors, %FALSE otherwise
     */
    execute(cancellable: Gio.Cancellable | null): boolean
    /**
     * Executes the batch. This operation happens asynchronously, when
     * finished `callback` will be executed.
     * @param cancellable Optional [type`Gio`.Cancellable]
     * @param callback User-defined [type`Gio`.AsyncReadyCallback] to be called when            the asynchronous operation is finished.
     */
    execute_async(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void

    // Overloads of execute_async

    /**
     * Promisified version of {@link execute_async}
     * 
     * Executes the batch. This operation happens asynchronously, when
     * finished `callback` will be executed.
     * @param cancellable Optional [type`Gio`.Cancellable]
     * @returns A Promise of: %TRUE of there were no errors, %FALSE otherwise
     */
    execute_async(cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>
    /**
     * Finishes the operation started with [method`Tracker`.Batch.execute_async].
     * @param res A [type`Gio`.AsyncResult] with the result of the operation
     * @returns %TRUE of there were no errors, %FALSE otherwise
     */
    execute_finish(res: Gio.AsyncResult): boolean
    /**
     * Returns the [class`Tracker`.SparqlConnection] that this batch was created
     * from.
     * @returns The SPARQL connection of this batch.
     */
    get_connection(): SparqlConnection

    // Class property signals of Tracker-3.0.Tracker.Batch

    connect(sigName: "notify::connection", callback: (($obj: Batch, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::connection", callback: (($obj: Batch, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::connection", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * `TrackerBatch` executes a series of SPARQL updates and RDF data
 * insertions within a transaction.
 * 
 * A batch is created with [method`Tracker`.SparqlConnection.create_batch].
 * To add resources use [method`Tracker`.Batch.add_resource],
 * [method`Tracker`.Batch.add_sparql] or [method`Batch`.add_statement].
 * 
 * When a batch is ready for execution, use [method`Tracker`.Batch.execute]
 * or [method`Tracker`.Batch.execute_async]. The batch is executed as a single
 * transaction, it will succeed or fail entirely.
 * 
 * This object has a single use, after the batch is executed it can
 * only be finished and freed.
 * 
 * The mapping of blank node labels is global in a `TrackerBatch`,
 * referencing the same blank node label in different operations in
 * a batch will resolve to the same resource.
 * @class 
 */
export class Batch extends GObject.Object {

    // Own properties of Tracker-3.0.Tracker.Batch

    static name: string
    static $gtype: GObject.GType<Batch>

    // Constructors of Tracker-3.0.Tracker.Batch

    constructor(config?: Batch.ConstructorProperties) 
    _init(config?: Batch.ConstructorProperties): void
}

export module Endpoint {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Tracker-3.0.Tracker.Endpoint

        /**
         * The [class`Tracker`.SparqlConnection] being proxied by this endpoint.
         */
        sparql_connection?: SparqlConnection | null
    }

}

export interface Endpoint {

    // Own properties of Tracker-3.0.Tracker.Endpoint

    /**
     * The [class`Tracker`.SparqlConnection] being proxied by this endpoint.
     */
    readonly sparql_connection: SparqlConnection

    // Own fields of Tracker-3.0.Tracker.Endpoint

    parent_instance: GObject.Object

    // Owm methods of Tracker-3.0.Tracker.Endpoint

    /**
     * Returns the [class`Tracker`.SparqlConnection] that this endpoint proxies
     * to a wider audience.
     * @returns The proxied SPARQL connection
     */
    get_sparql_connection(): SparqlConnection

    // Class property signals of Tracker-3.0.Tracker.Endpoint

    connect(sigName: "notify::sparql-connection", callback: (($obj: Endpoint, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sparql-connection", callback: (($obj: Endpoint, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sparql-connection", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * `TrackerEndpoint` is a helper object to make RDF triple stores represented
 * by a [class`Tracker`.SparqlConnection] publicly available to other processes/hosts.
 * 
 * This is a base abstract object, see [class`Tracker`.EndpointDBus] to make
 * RDF triple stores available to other processes in the same machine, and
 * [class`Tracker`.EndpointHttp] to make it available to other hosts in the
 * network.
 * 
 * When the RDF triple store represented by a [class`Tracker`.SparqlConnection]
 * is made public this way, other peers may connect to the database using
 * [ctor`Tracker`.SparqlConnection.bus_new] or [ctor`Tracker`.SparqlConnection.remote_new]
 * to access this endpoint exclusively, or they may use the `SERVICE <uri> { ... }` SPARQL
 * syntax from their own [class`Tracker`.SparqlConnection]s to expand their data set.
 * @class 
 */
export class Endpoint extends GObject.Object {

    // Own properties of Tracker-3.0.Tracker.Endpoint

    static name: string
    static $gtype: GObject.GType<Endpoint>

    // Constructors of Tracker-3.0.Tracker.Endpoint

    constructor(config?: Endpoint.ConstructorProperties) 
    _init(config?: Endpoint.ConstructorProperties): void
}

export module EndpointDBus {

    // Constructor properties interface

    export interface ConstructorProperties extends Gio.Initable.ConstructorProperties, Endpoint.ConstructorProperties {

        // Own constructor properties of Tracker-3.0.Tracker.EndpointDBus

        /**
         * The [class`Gio`.DBusConnection] where the connection is proxied through.
         */
        dbus_connection?: Gio.DBusConnection | null
        /**
         * The DBus object path that this endpoint manages.
         */
        object_path?: string | null
    }

}

export interface EndpointDBus extends Gio.Initable {

    // Own properties of Tracker-3.0.Tracker.EndpointDBus

    /**
     * The [class`Gio`.DBusConnection] where the connection is proxied through.
     */
    readonly dbus_connection: Gio.DBusConnection
    /**
     * The DBus object path that this endpoint manages.
     */
    readonly object_path: string | null

    // Class property signals of Tracker-3.0.Tracker.EndpointDBus

    connect(sigName: "notify::dbus-connection", callback: (($obj: EndpointDBus, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::dbus-connection", callback: (($obj: EndpointDBus, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::dbus-connection", ...args: any[]): void
    connect(sigName: "notify::object-path", callback: (($obj: EndpointDBus, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::object-path", callback: (($obj: EndpointDBus, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::object-path", ...args: any[]): void
    connect(sigName: "notify::sparql-connection", callback: (($obj: EndpointDBus, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sparql-connection", callback: (($obj: EndpointDBus, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sparql-connection", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * `TrackerEndpointDBus` makes the RDF data in a [class`Tracker`.SparqlConnection]
 * accessible to other processes via DBus.
 * 
 * This object is a [class`Tracker`.Endpoint] subclass that exports
 * a [class`Tracker`.SparqlConnection] so its RDF data is accessible to other
 * processes through the given [class`Gio`.DBusConnection].
 * 
 * ```c
 * // This process already has org.example.Endpoint bus name
 * endpoint = tracker_endpoint_dbus_new (sparql_connection,
 *                                       dbus_connection,
 *                                       NULL,
 *                                       NULL,
 *                                       &error);
 * 
 * // From another process
 * connection = tracker_sparql_connection_bus_new ("org.example.Endpoint",
 *                                                 NULL,
 *                                                 dbus_connection,
 *                                                 &error);
 * ```
 * 
 * The `TrackerEndpointDBus` will manage a DBus object at the given path
 * with the `org.freedesktop.Tracker3.Endpoint` interface, if no path is
 * given the object will be at the default `/org/freedesktop/Tracker3/Endpoint`
 * location.
 * 
 * Access to these endpoints may be transparently managed through
 * the Tracker portal service for applications sandboxed via Flatpak, and
 * access to data constrained to the graphs defined in the applications
 * manifest.
 * 
 * A `TrackerEndpointDBus` may be created on a different thread/main
 * context from the one that created [class`Tracker`.SparqlConnection].
 * @class 
 */
export class EndpointDBus extends Endpoint {

    // Own properties of Tracker-3.0.Tracker.EndpointDBus

    static name: string
    static $gtype: GObject.GType<EndpointDBus>

    // Constructors of Tracker-3.0.Tracker.EndpointDBus

    constructor(config?: EndpointDBus.ConstructorProperties) 
    /**
     * Registers a Tracker endpoint object at `object_path` on `dbus_connection`.
     * The default object path is `/org/freedesktop/Tracker3/Endpoint`.
     * @constructor 
     * @param sparql_connection The [class`Tracker`.SparqlConnection] being made public
     * @param dbus_connection #GDBusConnection to expose the DBus object over
     * @param object_path The object path to use, or %NULL to use the default
     * @param cancellable Optional [type`Gio`.Cancellable]
     * @returns a `TrackerEndpointDBus` object.
     */
    constructor(sparql_connection: SparqlConnection, dbus_connection: Gio.DBusConnection, object_path: string | null, cancellable: Gio.Cancellable | null) 
    /**
     * Registers a Tracker endpoint object at `object_path` on `dbus_connection`.
     * The default object path is `/org/freedesktop/Tracker3/Endpoint`.
     * @constructor 
     * @param sparql_connection The [class`Tracker`.SparqlConnection] being made public
     * @param dbus_connection #GDBusConnection to expose the DBus object over
     * @param object_path The object path to use, or %NULL to use the default
     * @param cancellable Optional [type`Gio`.Cancellable]
     * @returns a `TrackerEndpointDBus` object.
     */
    static new(sparql_connection: SparqlConnection, dbus_connection: Gio.DBusConnection, object_path: string | null, cancellable: Gio.Cancellable | null): EndpointDBus
    _init(config?: EndpointDBus.ConstructorProperties): void
}

export module EndpointHttp {

    // Signal callback interfaces

    /**
     * Signal callback interface for `block-remote-address`
     */
    export interface BlockRemoteAddressSignalCallback {
        ($obj: EndpointHttp, address: Gio.SocketAddress): boolean
    }


    // Constructor properties interface

    export interface ConstructorProperties extends Gio.Initable.ConstructorProperties, Endpoint.ConstructorProperties {

        // Own constructor properties of Tracker-3.0.Tracker.EndpointHttp

        /**
         * [class`Gio`.TlsCertificate] to encrypt the communication.
         */
        http_certificate?: Gio.TlsCertificate | null
        /**
         * HTTP port used to listen requests.
         */
        http_port?: number | null
    }

}

export interface EndpointHttp extends Gio.Initable {

    // Own properties of Tracker-3.0.Tracker.EndpointHttp

    /**
     * [class`Gio`.TlsCertificate] to encrypt the communication.
     */
    readonly http_certificate: Gio.TlsCertificate
    /**
     * HTTP port used to listen requests.
     */
    readonly http_port: number

    // Own signals of Tracker-3.0.Tracker.EndpointHttp

    connect(sigName: "block-remote-address", callback: EndpointHttp.BlockRemoteAddressSignalCallback): number
    connect_after(sigName: "block-remote-address", callback: EndpointHttp.BlockRemoteAddressSignalCallback): number
    emit(sigName: "block-remote-address", address: Gio.SocketAddress, ...args: any[]): void

    // Class property signals of Tracker-3.0.Tracker.EndpointHttp

    connect(sigName: "notify::http-certificate", callback: (($obj: EndpointHttp, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::http-certificate", callback: (($obj: EndpointHttp, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::http-certificate", ...args: any[]): void
    connect(sigName: "notify::http-port", callback: (($obj: EndpointHttp, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::http-port", callback: (($obj: EndpointHttp, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::http-port", ...args: any[]): void
    connect(sigName: "notify::sparql-connection", callback: (($obj: EndpointHttp, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sparql-connection", callback: (($obj: EndpointHttp, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sparql-connection", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * `TrackerEndpointHttp` makes the RDF data in a [class`Tracker`.SparqlConnection]
 * accessible to other hosts via HTTP.
 * 
 * This object is a [class`Tracker`.Endpoint] subclass that exports
 * a [class`Tracker`.SparqlConnection] so its RDF data is accessible via HTTP
 * requests on the given port. This endpoint implementation is compliant
 * with the [SPARQL protocol specifications](https://www.w3.org/TR/2013/REC-sparql11-protocol-20130321/)
 * and may interoperate with other implementations.
 * 
 * ```c
 * // This host has "example.local" hostname
 * endpoint = tracker_endpoint_http_new (sparql_connection,
 *                                       8080,
 *                                       tls_certificate,
 *                                       NULL,
 *                                       &error);
 * 
 * // From another host
 * connection = tracker_sparql_connection_remote_new ("http://example.local:8080/sparql");
 * ```
 * 
 * Access to HTTP endpoints may be managed via the
 * [signal`Tracker`.EndpointHttp::block-remote-address] signal, the boolean
 * return value expressing whether the connection is blocked or not.
 * Inspection of the requester address is left up to the user. The
 * default value allows all requests independently of their provenance,
 * users are encouraged to add a handler.
 * 
 * If the provided [class`Gio`.TlsCertificate] is %NULL, the endpoint will allow
 * plain HTTP connections. Users are encouraged to provide a certificate
 * in order to use HTTPS.
 * 
 * As a security measure, and in compliance specifications,
 * the HTTP endpoint does not handle database updates or modifications in any
 * way. The database content is considered to be entirely managed by the
 * process that creates the HTTP endpoint and owns the [class`Tracker`.SparqlConnection].
 * 
 * A `TrackerEndpointHttp` may be created on a different thread/main
 * context from the one that created [class`Tracker`.SparqlConnection].
 * @class 
 */
export class EndpointHttp extends Endpoint {

    // Own properties of Tracker-3.0.Tracker.EndpointHttp

    static name: string
    static $gtype: GObject.GType<EndpointHttp>

    // Constructors of Tracker-3.0.Tracker.EndpointHttp

    constructor(config?: EndpointHttp.ConstructorProperties) 
    /**
     * Sets up a Tracker endpoint to listen via HTTP, in the given `port`.
     * If `certificate` is not %NULL, HTTPS may be used to connect to the
     * endpoint.
     * @constructor 
     * @param sparql_connection The [class`Tracker`.SparqlConnection] being made public
     * @param port HTTP port to handle incoming requests
     * @param certificate Optional [type`Gio`.TlsCertificate] to use for encription
     * @param cancellable Optional [type`Gio`.Cancellable]
     * @returns a `TrackerEndpointHttp` object.
     */
    constructor(sparql_connection: SparqlConnection, port: number, certificate: Gio.TlsCertificate | null, cancellable: Gio.Cancellable | null) 
    /**
     * Sets up a Tracker endpoint to listen via HTTP, in the given `port`.
     * If `certificate` is not %NULL, HTTPS may be used to connect to the
     * endpoint.
     * @constructor 
     * @param sparql_connection The [class`Tracker`.SparqlConnection] being made public
     * @param port HTTP port to handle incoming requests
     * @param certificate Optional [type`Gio`.TlsCertificate] to use for encription
     * @param cancellable Optional [type`Gio`.Cancellable]
     * @returns a `TrackerEndpointHttp` object.
     */
    static new(sparql_connection: SparqlConnection, port: number, certificate: Gio.TlsCertificate | null, cancellable: Gio.Cancellable | null): EndpointHttp
    _init(config?: EndpointHttp.ConstructorProperties): void
}

export module NamespaceManager {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface NamespaceManager {

    // Owm methods of Tracker-3.0.Tracker.NamespaceManager

    /**
     * Adds `prefix` as the recognised abbreviaton of `namespace`.
     * 
     * Only one prefix is allowed for a given namespace, and all prefixes must
     * be unique.
     * 
     * Since 3.3, The `TrackerNamespaceManager` instances obtained through
     * [method`Tracker`.SparqlConnection.get_namespace_manager] are "sealed",
     * this API call should not performed on those.
     * @param prefix a short, unique prefix to identify `namespace`
     * @param ns the URL of the given namespace
     */
    add_prefix(prefix: string | null, ns: string | null): void
    /**
     * If `uri` begins with one of the namespaces known to this
     * `TrackerNamespaceManager`, then the return value will be the
     * compressed URI. Otherwise, %NULL will be returned.
     * @param uri a URI or compact URI
     * @returns (nullable): the compressed URI
     */
    compress_uri(uri: string | null): string | null
    /**
     * If `compact_uri` begins with one of the prefixes known to this
     * `TrackerNamespaceManager`, then the return value will be the
     * expanded URI. Otherwise, a copy of `compact_uri` will be returned.
     * @param compact_uri a URI or compact URI
     * @returns The possibly expanded URI in a newly-allocated string.
     */
    expand_uri(compact_uri: string | null): string | null
    /**
     * Calls `func` for each known prefix / URI pair.
     * @param func the function to call for each prefix / URI pair
     */
    foreach(func: GLib.HFunc): void
    /**
     * Returns whether `prefix` is known.
     * @param prefix a string
     * @returns %TRUE if the `TrackerNamespaceManager` knows about @prefix, %FALSE otherwise
     */
    has_prefix(prefix: string | null): boolean
    /**
     * Looks up the namespace URI corresponding to `prefix,` or %NULL if the prefix
     * is not known.
     * @param prefix a string
     * @returns a string owned by the `TrackerNamespaceManager`, or %NULL
     */
    lookup_prefix(prefix: string | null): string | null
    /**
     * Writes out all namespaces as ``prefix`` statements in
     * the [Turtle](https://www.w3.org/TR/turtle/) RDF format.
     * @returns a newly-allocated string
     */
    print_turtle(): string | null

    // Class property signals of Tracker-3.0.Tracker.NamespaceManager

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * `TrackerNamespaceManager` object represents a mapping between namespaces and
 * their shortened prefixes.
 * 
 * This object keeps track of namespaces, and allows you to assign
 * short prefixes for them to avoid frequent use of full namespace IRIs. The syntax
 * used is that of [Compact URIs (CURIEs)](https://www.w3.org/TR/2010/NOTE-curie-20101216).
 * 
 * Usually you will want to use a namespace manager obtained through
 * [method`Tracker`.SparqlConnection.get_namespace_manager] from the
 * [class`Tracker`.SparqlConnection] that manages the RDF data, as that will
 * contain all prefixes and namespaces that are pre-defined by its ontology.
 * @class 
 */
export class NamespaceManager extends GObject.Object {

    // Own properties of Tracker-3.0.Tracker.NamespaceManager

    static name: string
    static $gtype: GObject.GType<NamespaceManager>

    // Constructors of Tracker-3.0.Tracker.NamespaceManager

    constructor(config?: NamespaceManager.ConstructorProperties) 
    /**
     * Creates a new, empty `TrackerNamespaceManager` instance.
     * @constructor 
     * @returns a new `TrackerNamespaceManager` instance
     */
    constructor() 
    /**
     * Creates a new, empty `TrackerNamespaceManager` instance.
     * @constructor 
     * @returns a new `TrackerNamespaceManager` instance
     */
    static new(): NamespaceManager
    _init(config?: NamespaceManager.ConstructorProperties): void
    /**
     * Returns the global `TrackerNamespaceManager` that contains a set of well-known
     * namespaces and prefixes, such as `rdf:`, `rdfs:`, `nie:`, `tracker:`, etc.
     * 
     * Note that the list of prefixes and namespaces is hardcoded in
     * libtracker-sparql. It may not correspond with the installed set of
     * ontologies, if they have been modified since they were installed.
     * @returns a global, shared `TrackerNamespaceManager` instance
     */
    static get_default(): NamespaceManager
}

export module Notifier {

    // Signal callback interfaces

    /**
     * Signal callback interface for `events`
     */
    export interface EventsSignalCallback {
        ($obj: Notifier, service: string | null, graph: string | null, events: NotifierEvent[]): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Tracker-3.0.Tracker.Notifier

        /**
         * SPARQL connection to listen to.
         */
        connection?: SparqlConnection | null
    }

}

export interface Notifier {

    // Own properties of Tracker-3.0.Tracker.Notifier

    /**
     * SPARQL connection to listen to.
     */
    readonly connection: SparqlConnection

    // Own fields of Tracker-3.0.Tracker.Notifier

    parent_instance: GObject.Object

    // Owm methods of Tracker-3.0.Tracker.Notifier

    /**
     * Listens to notification events from a remote DBus SPARQL endpoint.
     * 
     * If the `object_path` argument is %NULL, the default
     * `/org/freedesktop/Tracker3/Endpoint` path will be
     * used. If `graph` is %NULL, all graphs will be listened for.
     * 
     * The signal subscription can be removed with
     * [method`Tracker`.Notifier.signal_unsubscribe].
     * 
     * Note that this call is not necessary to receive notifications on
     * a connection obtained through [ctor`Tracker`.SparqlConnection.bus_new],
     * only to listen to update notifications from additional DBus endpoints.
     * @param connection A [class`Gio`.DBusConnection]
     * @param service DBus service name to subscribe to events for
     * @param object_path DBus object path to subscribe to events for, or %NULL
     * @param graph Graph to listen events for, or %NULL
     * @returns An ID for this subscription
     */
    signal_subscribe(connection: Gio.DBusConnection, service: string | null, object_path: string | null, graph: string | null): number
    /**
     * Undoes a signal subscription done through [method`Tracker`.Notifier.signal_subscribe].
     * 
     * The `handler_id` argument was previously obtained during signal subscription creation.
     * @param handler_id A signal subscription handler ID
     */
    signal_unsubscribe(handler_id: number): void

    // Own signals of Tracker-3.0.Tracker.Notifier

    connect(sigName: "events", callback: Notifier.EventsSignalCallback): number
    connect_after(sigName: "events", callback: Notifier.EventsSignalCallback): number
    emit(sigName: "events", service: string | null, graph: string | null, events: NotifierEvent[], ...args: any[]): void

    // Class property signals of Tracker-3.0.Tracker.Notifier

    connect(sigName: "notify::connection", callback: (($obj: Notifier, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::connection", callback: (($obj: Notifier, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::connection", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * `TrackerNotifier` allows receiving notification on changes
 * in the data stored by a [class`Tracker`.SparqlConnection].
 * 
 * This object may be created through [method`Tracker`.SparqlConnection.create_notifier],
 * events can then be listened for by connecting to the
 * [signal`Tracker`.Notifier::events] signal.
 * 
 * Not every change is notified, only RDF resources with a
 * class that has the [nrl:notify](nrl-ontology.html#nrl:notify)
 * property defined by the ontology will be notified upon changes.
 * 
 * Database changes are communicated through [struct`Tracker`.NotifierEvent] events on
 * individual graph/resource pairs. The event type obtained through
 * [method`Tracker`.NotifierEvent.get_event_type] will determine the type of event.
 * Insertion of new resources is notified through
 * %TRACKER_NOTIFIER_EVENT_CREATE events, deletion of
 * resources is notified through %TRACKER_NOTIFIER_EVENT_DELETE
 * events, and changes on any property of the resource is notified
 * through %TRACKER_NOTIFIER_EVENT_UPDATE events.
 * 
 * The events happen in reaction to database changes, after a `TrackerNotifier`
 * received an event of type %TRACKER_NOTIFIER_EVENT_DELETE, the resource will
 * not exist anymore and only the information in the [struct`Tracker`.NotifierEvent]
 * will remain.
 * 
 * Similarly, when receiving an event of type %TRACKER_NOTIFIER_EVENT_UPDATE,
 * the resource will have already changed, so the data previous to the update is
 * no longer available.
 * 
 * The [signal`Tracker`.Notifier::events] signal is emitted in the thread-default
 * main context of the thread where the `TrackerNotifier` instance was created.
 * @class 
 */
export class Notifier extends GObject.Object {

    // Own properties of Tracker-3.0.Tracker.Notifier

    static name: string
    static $gtype: GObject.GType<Notifier>

    // Constructors of Tracker-3.0.Tracker.Notifier

    constructor(config?: Notifier.ConstructorProperties) 
    _init(config?: Notifier.ConstructorProperties): void
}

export module Resource {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Tracker-3.0.Tracker.Resource

        /**
         * The URI identifier for this class, or %NULL for a
         * blank node.
         */
        identifier?: string | null
    }

}

export interface Resource {

    // Own properties of Tracker-3.0.Tracker.Resource

    /**
     * The URI identifier for this class, or %NULL for a
     * blank node.
     */
    identifier: string | null

    // Own fields of Tracker-3.0.Tracker.Resource

    parent_instance: GObject.Object

    // Owm methods of Tracker-3.0.Tracker.Resource

    /**
     * Adds a boolean property. Previous values for the same property are kept.
     * 
     * This method is meant for RDF properties allowing multiple values, see
     * [nrl:maxCardinality](nrl-ontology.html#nrl:maxCardinality).
     * 
     * This method corresponds to [xsd:boolean](xsd-ontology.html#xsd:boolean).
     * @param property_uri A string identifying the property to modify
     * @param value The property boolean value
     */
    add_boolean(property_uri: string | null, value: boolean): void
    /**
     * Adds a date property as a [type`GLib`.DateTime]. Previous values for the
     * same property are kept.
     * 
     * This method is meant for RDF properties allowing multiple values, see
     * [nrl:maxCardinality](nrl-ontology.html#nrl:maxCardinality).
     * 
     * This method corresponds to [xsd:date](xsd-ontology.html#xsd:date) and
     * [xsd:dateTime](xsd-ontology.html#xsd:dateTime).
     * @param property_uri a string identifying the property to modify
     * @param value the property object
     */
    add_datetime(property_uri: string | null, value: GLib.DateTime): void
    /**
     * Adds a numeric property with double precision. Previous values for the same property are kept.
     * 
     * This method is meant for RDF properties allowing multiple values, see
     * [nrl:maxCardinality](nrl-ontology.html#nrl:maxCardinality).
     * 
     * This method corresponds to [xsd:double](xsd-ontology.html#xsd:double).
     * @param property_uri a string identifying the property to modify
     * @param value the property object
     */
    add_double(property_uri: string | null, value: number): void
    /**
     * Add `value` to the list of values for given property.
     * 
     * You can pass any kind of [struct`GObject`.Value] for `value,` but serialization functions will
     * normally only be able to serialize URIs/relationships and fundamental value
     * types (string, int, etc.).
     * @param property_uri a string identifying the property to set
     * @param value an initialised [struct`GObject`.Value]
     */
    add_gvalue(property_uri: string | null, value: any): void
    /**
     * Adds a numeric property with integer precision. Previous values for the same property are kept.
     * 
     * This method is meant for RDF properties allowing multiple values, see
     * [nrl:maxCardinality](nrl-ontology.html#nrl:maxCardinality).
     * 
     * This method corresponds to [xsd:integer](xsd-ontology.html#xsd:integer).
     * @param property_uri a string identifying the property to modify
     * @param value the property object
     */
    add_int(property_uri: string | null, value: number): void
    /**
     * Adds a numeric property with 64-bit integer precision. Previous values for the same property are kept.
     * 
     * This method is meant for RDF properties allowing multiple values, see
     * [nrl:maxCardinality](nrl-ontology.html#nrl:maxCardinality).
     * 
     * This method corresponds to [xsd:integer](xsd-ontology.html#xsd:integer).
     * @param property_uri a string identifying the property to modify
     * @param value the property object
     */
    add_int64(property_uri: string | null, value: number): void
    /**
     * Adds a resource property as a `TrackerResource`. Previous values for the same property are kept.
     * 
     * This method is meant for RDF properties allowing multiple values, see
     * [nrl:maxCardinality](nrl-ontology.html#nrl:maxCardinality).
     * 
     * This method applies to properties with a [rdfs:range](rdf-ontology.html#rdfs:range)
     * that points to a non-literal class (i.e. a subclass of
     * [rdfs:Resource](rdf-ontology.html#rdfs:Resource)).
     * 
     * This method produces similar RDF to [method`Tracker`.Resource.add_uri],
     * although in this function the URI will depend on the identifier
     * set on `resource`.
     * @param property_uri a string identifying the property to modify
     * @param resource the property object
     */
    add_relation(property_uri: string | null, resource: Resource): void
    /**
     * Adds a string property. Previous values for the same property are kept.
     * 
     * This method is meant for RDF properties allowing multiple values, see
     * [nrl:maxCardinality](nrl-ontology.html#nrl:maxCardinality).
     * 
     * This method corresponds to [xsd:string](xsd-ontology.html#xsd:string).
     * @param property_uri a string identifying the property to modify
     * @param value the property object
     */
    add_string(property_uri: string | null, value: string | null): void
    /**
     * Adds a resource property as a `TrackerResource`. Previous values for the same property are kept.
     * Takes ownership on the given `resource`.
     * 
     * This method is meant to RDF properties allowing multiple values, see
     * [nrl:maxCardinality](nrl-ontology.html#nrl:maxCardinality).
     * 
     * This method applies to properties with a [rdfs:range](rdf-ontology.html#rdfs:range)
     * that points to a non-literal class (i.e. a subclass of
     * [rdfs:Resource](rdf-ontology.html#rdfs:Resource)).
     * 
     * This function produces similar RDF to [method`Tracker`.Resource.add_uri],
     * although in this function the URI will depend on the identifier
     * set on `resource`. This function takes ownership of `resource`.
     * @param property_uri a string identifying the property to modify
     * @param resource the property object
     */
    add_take_relation(property_uri: string | null, resource: Resource): void
    /**
     * Adds a resource property as an URI string. Previous values for the same property are kept.
     * 
     * This method applies to properties with a [rdfs:range](rdf-ontology.html#rdfs:range)
     * that points to a non-literal class (i.e. a subclass of
     * [rdfs:Resource](rdf-ontology.html#rdfs:Resource)).
     * 
     * This method is meant for RDF properties allowing multiple values, see
     * [nrl:maxCardinality](nrl-ontology.html#nrl:maxCardinality).
     * 
     * This function produces similar RDF to [method`Tracker`.Resource.add_relation], although
     * it requires that the URI is previously known.
     * @param property_uri a string identifying the property to modify
     * @param value the property object
     */
    add_uri(property_uri: string | null, value: string | null): void
    /**
     * Returns the first boolean object previously assigned to a property.
     * @param property_uri a string identifying the property to look up
     * @returns the first boolean object
     */
    get_first_boolean(property_uri: string | null): boolean
    /**
     * Returns the first [type`GLib`.DateTime] previously assigned to a property.
     * @param property_uri a string identifying the property to look up
     * @returns the first GDateTime object
     */
    get_first_datetime(property_uri: string | null): GLib.DateTime | null
    /**
     * Returns the first double object previously assigned to a property.
     * @param property_uri a string identifying the property to look up
     * @returns the first double object
     */
    get_first_double(property_uri: string | null): number
    /**
     * Returns the first integer object previously assigned to a property.
     * @param property_uri a string identifying the property to look up
     * @returns the first integer object
     */
    get_first_int(property_uri: string | null): number
    /**
     * Returns the first integer object previously assigned to a property.
     * @param property_uri a string identifying the property to look up
     * @returns the first integer object
     */
    get_first_int64(property_uri: string | null): number
    /**
     * Returns the first resource object previously assigned to a property.
     * @param property_uri a string identifying the property to look up
     * @returns the first resource object
     */
    get_first_relation(property_uri: string | null): Resource | null
    /**
     * Returns the first string object previously assigned to a property.
     * @param property_uri a string identifying the property to look up
     * @returns the first string object
     */
    get_first_string(property_uri: string | null): string | null
    /**
     * Returns the first resource object previously assigned to a property.
     * @param property_uri a string identifying the property to look up
     * @returns the first resource object as an URI.
     */
    get_first_uri(property_uri: string | null): string | null
    /**
     * Returns the identifier of a resource.
     * 
     * If the identifier was set to NULL, the identifier returned will be a locally
     * unique SPARQL blank node identifier, such as `_:123`.
     * @returns a string owned by the resource
     */
    get_identifier(): string | null
    /**
     * Gets the list of properties defined in `resource`
     * @returns The list of properties.
     */
    get_properties(): string[]
    /**
     * Returns whether the prior values for this property would be deleted
     * in the SPARQL issued by `resource`.
     * @param property_uri a string identifying the property to query
     * @returns #TRUE if the property would be overwritten
     */
    get_property_overwrite(property_uri: string | null): boolean
    /**
     * Returns the list of all known values of the given property.
     * @param property_uri a string identifying the property to look up
     * @returns a [struct@GLib.List] of   [struct@GObject.Value] instances. The list should be freed with [func@GLib.List.free]
     */
    get_values(property_uri: string | null): any[] | null
    /**
     * A helper function that compares a `TrackerResource` by its identifier
     * string.
     * @param identifier a string identifying the resource
     * @returns an integer less than, equal to, or greater than zero, if the          resource identifier is <, == or > than @identifier
     */
    identifier_compare_func(identifier: string | null): number
    /**
     * Serialize all the information in `resource` as a JSON-LD document.
     * 
     * See <http://www.jsonld.org/> for more information on the JSON-LD
     * serialization format.
     * 
     * The `namespaces` object is used to expand any compact URI values. In most
     * cases you should pass the one returned by [method`Tracker`.SparqlConnection.get_namespace_manager]
     * from the connection that is the intended recipient of this data.
     * @param namespaces a set of prefixed URLs, or %NULL to use the     Nepomuk set
     * @returns a newly-allocated string containing JSON-LD data.
     */
    print_jsonld(namespaces: NamespaceManager | null): string | null
    /**
     * Serialize all the information in `resource` into the selected RDF format.
     * 
     * The `namespaces` object is used to expand any compact URI values. In most
     * cases you should pass the one returned by [method`Tracker`.SparqlConnection.get_namespace_manager]
     * from the connection that is the intended recipient of this data.
     * @param namespaces a set of prefixed URLs
     * @param format RDF format of the printed string
     * @param graph target graph of the resource RDF, or %NULL for the default graph
     * @returns a newly-allocated string containing RDF data in the requested format.
     */
    print_rdf(namespaces: NamespaceManager, format: RdfFormat, graph: string | null): string | null
    /**
     * Generates a SPARQL command to update a database with the information
     * stored in `resource`.
     * 
     * The `namespaces` object is used to expand any compact URI values. In most
     * cases you should pass the one returned by [method`Tracker`.SparqlConnection.get_namespace_manager]
     * from the connection that is the intended recipient of this data.
     * @param namespaces a set of prefixed URLs, or %NULL to use the     Nepomuk set
     * @param graph_id the URN of the graph the data should be added to,     or %NULL
     * @returns a newly-allocated string containing a SPARQL update command.
     */
    print_sparql_update(namespaces: NamespaceManager | null, graph_id: string | null): string | null
    /**
     * Serialize all the information in `resource` as a Turtle document.
     * 
     * The generated Turtle should correspond to this standard:
     * <https://www.w3.org/TR/2014/REC-turtle-20140225/>
     * 
     * The `namespaces` object is used to expand any compact URI values. In most
     * cases you should pass the one returned by [method`Tracker`.SparqlConnection.get_namespace_manager]
     * from the connection that is the intended recipient of this data.
     * @param namespaces a set of prefixed URLs, or %NULL to use the     Nepomuk set
     * @returns a newly-allocated string
     */
    print_turtle(namespaces: NamespaceManager | null): string | null
    /**
     * Serializes a `TrackerResource` to a [type`GLib`.Variant] in a lossless way.
     * All child resources are subsequently serialized. It is implied
     * that both ends use a common [class`Tracker`.NamespaceManager].
     * @returns A variant describing the resource,          the reference is floating.
     */
    serialize(): GLib.Variant | null
    /**
     * Sets a boolean property. Replaces any previous value.
     * 
     * This method corresponds to [xsd:boolean](xsd-ontology.html#xsd:boolean).
     * @param property_uri A string identifying the property to modify
     * @param value The property boolean value
     */
    set_boolean(property_uri: string | null, value: boolean): void
    /**
     * Sets a date property as a [type`GLib`.DateTime]. Replaces any previous value.
     * 
     * This method corresponds to [xsd:date](xsd-ontology.html#xsd:date) and
     * [xsd:dateTime](xsd-ontology.html#xsd:dateTime).
     * @param property_uri a string identifying the property to modify
     * @param value the property object
     */
    set_datetime(property_uri: string | null, value: GLib.DateTime): void
    /**
     * Sets a numeric property with double precision. Replaces any previous value.
     * 
     * This method corresponds to [xsd:double](xsd-ontology.html#xsd:double).
     * @param property_uri A string identifying the property to modify
     * @param value The property object
     */
    set_double(property_uri: string | null, value: number): void
    /**
     * Replace any previously existing value for `property_uri` with `value`.
     * 
     * When serialising to SPARQL, any properties that were set with this function
     * will get a corresponding DELETE statement to remove any existing values in
     * the database.
     * 
     * You can pass any kind of [struct`GObject`.Value] for `value,` but serialization functions will
     * normally only be able to serialize URIs/relationships and fundamental value
     * types (string, int, etc.).
     * @param property_uri a string identifying the property to set
     * @param value an initialised [struct`GObject`.Value]
     */
    set_gvalue(property_uri: string | null, value: any): void
    /**
     * Changes the identifier of a `TrackerResource`. The identifier should be a
     * URI or compact URI, but this is not necessarily enforced. Invalid
     * identifiers may cause errors when serializing the resource or trying to
     * insert the results in a database.
     * 
     * If the identifier is set to %NULL, a SPARQL blank node identifier such as
     * `_:123` is assigned to the resource.
     * @param identifier a string identifying the resource
     */
    set_identifier(identifier: string | null): void
    /**
     * Sets a numeric property with integer precision. Replaces any previous value.
     * 
     * This method corresponds to [xsd:integer](xsd-ontology.html#xsd:integer).
     * @param property_uri A string identifying the property to modify
     * @param value The property object
     */
    set_int(property_uri: string | null, value: number): void
    /**
     * Sets a numeric property with 64-bit integer precision. Replaces any previous value.
     * 
     * This method corresponds to [xsd:integer](xsd-ontology.html#xsd:integer).
     * @param property_uri a string identifying the property to modify
     * @param value the property object
     */
    set_int64(property_uri: string | null, value: number): void
    /**
     * Sets a resource property as a `TrackerResource`. Replaces any previous value.
     * 
     * This method applies to properties with a [rdfs:range](rdf-ontology.html#rdfs:range)
     * that points to a non-literal class (i.e. a subclass of
     * [rdfs:Resource](rdf-ontology.html#rdfs:Resource)).
     * 
     * This function produces similar RDF to [method`Tracker`.Resource.set_uri],
     * although in this function the URI will depend on the identifier
     * set on `resource`.
     * @param property_uri a string identifying the property to modify
     * @param resource the property object
     */
    set_relation(property_uri: string | null, resource: Resource): void
    /**
     * Sets a string property. Replaces any previous value.
     * 
     * This method corresponds to [xsd:string](xsd-ontology.html#xsd:string).
     * @param property_uri a string identifying the property to modify
     * @param value the property object
     */
    set_string(property_uri: string | null, value: string | null): void
    /**
     * Sets a resource property as a `TrackerResource`. Replaces any previous value.
     * Takes ownership on the given `resource`.
     * 
     * This method applies to properties with a [rdfs:range](rdf-ontology.html#rdfs:range)
     * that points to a non-literal class (i.e. a subclass of
     * [rdfs:Resource](rdf-ontology.html#rdfs:Resource)).
     * 
     * This function produces similar RDF to [method`Tracker`.Resource.set_uri],
     * although in this function the URI will depend on the identifier
     * set on `resource`.
     * @param property_uri a string identifying the property to modify
     * @param resource the property object
     */
    set_take_relation(property_uri: string | null, resource: Resource): void
    /**
     * Sets a resource property as an URI string. Replaces any previous value.
     * 
     * This method applies to properties with a [rdfs:range](rdf-ontology.html#rdfs:range)
     * that points to a non-literal class (i.e. a subclass of
     * [rdfs:Resource](rdf-ontology.html#rdfs:Resource)).
     * 
     * This function produces similar RDF to [method`Tracker`.Resource.set_relation], although
     * it requires that the URI is previously known.
     * @param property_uri a string identifying the property to modify
     * @param value the property object
     */
    set_uri(property_uri: string | null, value: string | null): void

    // Class property signals of Tracker-3.0.Tracker.Resource

    connect(sigName: "notify::identifier", callback: (($obj: Resource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::identifier", callback: (($obj: Resource, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::identifier", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * `TrackerResource` is an in-memory representation of RDF data about a given resource.
 * 
 * This object keeps track of a set of properties for a given resource, and can
 * also link to other `TrackerResource` objects to form trees or graphs of RDF
 * data. See [method`Tracker`.Resource.set_relation] and [method`Tracker`.Resource.set_uri]
 * on how to link a `TrackerResource` to other RDF data.
 * 
 * `TrackerResource` may also hold data about literal values, added through
 * the specialized [method`Tracker`.Resource.set_int64], [method`Tracker`.Resource.set_string],
 * etc family of functions, or the generic [method`Tracker`.Resource.set_gvalue] method.
 * 
 * Since RDF properties may be multi-valued, for every `set` call there exists
 * another `add` call (e.g. [method`Tracker`.Resource.add_int64], [method`Tracker`.Resource.add_string]
 * and so on). The `set` methods do also reset any previously value the
 * property might hold for the given resource.
 * 
 * Resources may have an IRI set at creation through [ctor`Tracker`.Resource.new],
 * or set afterwards through [method`Tracker`.Resource.set_identifier]. Resources
 * without a name will represent a blank node, and will be dealt with as such
 * during database insertions.
 * 
 * `TrackerResource` performs no validation on the data being coherent as per
 * any ontology. Errors will be found out at the time of using the TrackerResource
 * for e.g. database updates.
 * 
 * Once the RDF data is built in memory, the (tree of) `TrackerResource` may be
 * converted to a RDF format through [method`Tracker`.Resource.print_rdf], or
 * directly inserted into a database through [method`Tracker`.Batch.add_resource]
 * or [method`Tracker`.SparqlConnection.update_resource].
 * @class 
 */
export class Resource extends GObject.Object {

    // Own properties of Tracker-3.0.Tracker.Resource

    static name: string
    static $gtype: GObject.GType<Resource>

    // Constructors of Tracker-3.0.Tracker.Resource

    constructor(config?: Resource.ConstructorProperties) 
    /**
     * Creates a TrackerResource instance.
     * @constructor 
     * @param identifier A string containing a URI, or %NULL.
     * @returns a newly created `TrackerResource`.
     */
    constructor(identifier: string | null) 
    /**
     * Creates a TrackerResource instance.
     * @constructor 
     * @param identifier A string containing a URI, or %NULL.
     * @returns a newly created `TrackerResource`.
     */
    static new(identifier: string | null): Resource
    _init(config?: Resource.ConstructorProperties): void
    /**
     * Deserializes a `TrackerResource` previously serialized with
     * [method`Tracker`.Resource.serialize]. It is implied that both ends
     * use a common [class`Tracker`.NamespaceManager].
     * @param variant a [type`GLib`.Variant]
     * @returns A TrackerResource, or %NULL if          deserialization fails.
     */
    static deserialize(variant: GLib.Variant): Resource | null
}

export module SparqlConnection {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface SparqlConnection {

    // Own fields of Tracker-3.0.Tracker.SparqlConnection

    parent_instance: GObject.Object

    // Owm methods of Tracker-3.0.Tracker.SparqlConnection

    /**
     * Closes a SPARQL connection.
     * 
     * No other API calls than g_object_unref() should happen after this call.
     * 
     * This call is blocking. All pending updates will be flushed, and the
     * store databases will be closed orderly. All ongoing SELECT queries
     * will be cancelled. Notifiers will no longer emit events.
     */
    close(): void
    /**
     * Closes a SPARQL connection asynchronously.
     * 
     * No other API calls than g_object_unref() should happen after this call.
     * @param cancellable Optional [type`Gio`.Cancellable]
     * @param callback User-defined [type`Gio`.AsyncReadyCallback] to be called when            the asynchronous operation is finished.
     */
    close_async(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void

    // Overloads of close_async

    /**
     * Promisified version of {@link close_async}
     * 
     * Closes a SPARQL connection asynchronously.
     * 
     * No other API calls than g_object_unref() should happen after this call.
     * @param cancellable Optional [type`Gio`.Cancellable]
     * @returns A Promise of: %FALSE if some error occurred, %TRUE otherwise
     */
    close_async(cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>
    /**
     * Finishes the operation started with [method`Tracker`.SparqlConnection.close_async].
     * @param res A [type`Gio`.AsyncResult] with the result of the operation
     * @returns %FALSE if some error occurred, %TRUE otherwise
     */
    close_finish(res: Gio.AsyncResult): boolean
    /**
     * Creates a new [class`Tracker`.Batch] to store and execute SPARQL updates.
     * 
     * If the connection is readonly or cannot issue SPARQL updates, %NULL will be returned.
     * @returns (nullable): A new [class@Tracker.Batch]
     */
    create_batch(): Batch
    /**
     * Creates a new [class`Tracker`.Notifier] to receive notifications about changes in `connection`.
     * 
     * See [class`Tracker`.Notifier] documentation for information about how to use this
     * object.
     * 
     * Connections to HTTP endpoints will return %NULL.
     * @returns A newly created notifier.
     */
    create_notifier(): Notifier | null
    /**
     * Loads the RDF data contained in `stream` into the given `connection`.
     * 
     * This is an asynchronous operation, `callback` will be invoked when the
     * data has been fully inserted to `connection`.
     * 
     * The RDF data will be inserted in the given `default_graph` if one is provided,
     * or the anonymous graph if `default_graph` is %NULL. Any RDF data that has a
     * graph specified (e.g. using the `GRAPH` clause in the Trig format) will
     * be inserted in the specified graph instead of `default_graph`.
     * 
     * The `flags` argument is reserved for future expansions, currently
     * %TRACKER_DESERIALIZE_FLAGS_NONE must be passed.
     * @param flags Deserialization flags
     * @param format RDF format of data in stream
     * @param default_graph Default graph that will receive the RDF data
     * @param stream Input stream with RDF data
     * @param cancellable Optional [type`Gio`.Cancellable]
     * @param callback User-defined [type`Gio`.AsyncReadyCallback] to be called when            the asynchronous operation is finished.
     */
    deserialize_async(flags: DeserializeFlags, format: RdfFormat, default_graph: string | null, stream: Gio.InputStream, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void

    // Overloads of deserialize_async

    /**
     * Promisified version of {@link deserialize_async}
     * 
     * Loads the RDF data contained in `stream` into the given `connection`.
     * 
     * This is an asynchronous operation, `callback` will be invoked when the
     * data has been fully inserted to `connection`.
     * 
     * The RDF data will be inserted in the given `default_graph` if one is provided,
     * or the anonymous graph if `default_graph` is %NULL. Any RDF data that has a
     * graph specified (e.g. using the `GRAPH` clause in the Trig format) will
     * be inserted in the specified graph instead of `default_graph`.
     * 
     * The `flags` argument is reserved for future expansions, currently
     * %TRACKER_DESERIALIZE_FLAGS_NONE must be passed.
     * @param flags Deserialization flags
     * @param format RDF format of data in stream
     * @param default_graph Default graph that will receive the RDF data
     * @param stream Input stream with RDF data
     * @param cancellable Optional [type`Gio`.Cancellable]
     * @returns A Promise of: %TRUE if all data was inserted successfully.
     */
    deserialize_async(flags: DeserializeFlags, format: RdfFormat, default_graph: string | null, stream: Gio.InputStream, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>
    /**
     * Finishes the operation started with [method`Tracker`.SparqlConnection.deserialize_async].
     * @param result A [type`Gio`.AsyncResult] with the result of the operation
     * @returns %TRUE if all data was inserted successfully.
     */
    deserialize_finish(result: Gio.AsyncResult): boolean
    /**
     * Returns a [class`Tracker`.NamespaceManager] that contains all
     * prefixes in the ontology of `connection`.
     * @returns a [class@Tracker.NamespaceManager] with the prefixes of @connection.
     */
    get_namespace_manager(): NamespaceManager
    /**
     * Prepares a [class`Tracker`.SparqlStatement] for the SPARQL contained as a [struct`Gio`.Resource]
     * file at `resource_path`.
     * 
     * SPARQL Query files typically have the .rq extension. This will use
     * [method`Tracker`.SparqlConnection.query_statement] or [method`Tracker`.SparqlConnection.update_statement]
     * underneath to indistinctly return SPARQL query or update statements.
     * @param resource_path The resource path of the file to parse.
     * @param cancellable Optional [type`Gio`.Cancellable]
     * @returns A prepared statement
     */
    load_statement_from_gresource(resource_path: string | null, cancellable: Gio.Cancellable | null): SparqlStatement | null
    /**
     * Maps a `TrackerSparqlConnection` onto another through a `private:`handle_name`` URI.
     * 
     * This can be accessed via the SERVICE SPARQL syntax in
     * queries from `connection`. E.g.:
     * 
     * ```c
     * tracker_sparql_connection_map_connection (connection,
     *                                           "other-connection",
     *                                           other_connection);
     * ```
     * 
     * ```sparql
     * SELECT ?u {
     *   SERVICE <private:other-connection> {
     *     ?u a rdfs:Resource
     *   }
     * }
     * ```
     * 
     * This is useful to interrelate data from multiple
     * `TrackerSparqlConnection` instances maintained by the same process,
     * without creating a public endpoint for `service_connection`.
     * 
     * `connection` may only be a `TrackerSparqlConnection` created via
     * [ctor`Tracker`.SparqlConnection.new] and [func`Tracker`.SparqlConnection.new_async].
     * @param handle_name Handle name for `service_connection`
     * @param service_connection a `TrackerSparqlConnection` to use from `connection`
     */
    map_connection(handle_name: string | null, service_connection: SparqlConnection): void
    /**
     * Executes a SPARQL query on `connection`.
     * 
     * This method is synchronous and will block until the query
     * is executed. See [method`Tracker`.SparqlConnection.query_async]
     * for an asynchronous variant.
     * 
     * If the query is partially built from user input or other
     * untrusted sources, special care is required about possible
     * SPARQL injection. In order to avoid it entirely, it is recommended
     * to use [class`Tracker`.SparqlStatement]. The function
     * [func`Tracker`.sparql_escape_string] exists as a last resort,
     * but its use is not recommended.
     * @param sparql String containing the SPARQL query
     * @param cancellable Optional [type`Gio`.Cancellable]
     * @returns a [class@Tracker.SparqlCursor] with the results.
     */
    query(sparql: string | null, cancellable: Gio.Cancellable | null): SparqlCursor
    /**
     * Executes asynchronously a SPARQL query on `connection`
     * 
     * If the query is partially built from user input or other
     * untrusted sources, special care is required about possible
     * SPARQL injection. In order to avoid it entirely, it is recommended
     * to use [class`Tracker`.SparqlStatement]. The function
     * [func`Tracker`.sparql_escape_string] exists as a last resort,
     * but its use is not recommended.
     * @param sparql String containing the SPARQL query
     * @param cancellable Optional [type`Gio`.Cancellable]
     * @param callback User-defined [type`Gio`.AsyncReadyCallback] to be called when            the asynchronous operation is finished.
     */
    query_async(sparql: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void

    // Overloads of query_async

    /**
     * Promisified version of {@link query_async}
     * 
     * Executes asynchronously a SPARQL query on `connection`
     * 
     * If the query is partially built from user input or other
     * untrusted sources, special care is required about possible
     * SPARQL injection. In order to avoid it entirely, it is recommended
     * to use [class`Tracker`.SparqlStatement]. The function
     * [func`Tracker`.sparql_escape_string] exists as a last resort,
     * but its use is not recommended.
     * @param sparql String containing the SPARQL query
     * @param cancellable Optional [type`Gio`.Cancellable]
     * @returns A Promise of: a [class@Tracker.SparqlCursor] with the results.
     */
    query_async(sparql: string | null, cancellable: Gio.Cancellable | null): globalThis.Promise<SparqlCursor>
    /**
     * Finishes the operation started with [method`Tracker`.SparqlConnection.query_async].
     * @param res A [type`Gio`.AsyncResult] with the result of the operation
     * @returns a [class@Tracker.SparqlCursor] with the results.
     */
    query_finish(res: Gio.AsyncResult): SparqlCursor
    /**
     * Prepares the given `SELECT`/`ASK`/`DESCRIBE`/`CONSTRUCT` SPARQL query as a
     * [class`Tracker`.SparqlStatement].
     * 
     * This prepared statement can be executed through [method`Tracker`.SparqlStatement.execute]
     * or [method`Tracker`.SparqlStatement.serialize_async] families of functions.
     * @param sparql The SPARQL query
     * @param cancellable Optional [type`Gio`.Cancellable]
     * @returns A prepared statement
     */
    query_statement(sparql: string | null, cancellable: Gio.Cancellable | null): SparqlStatement | null
    /**
     * Serializes a `DESCRIBE` or `CONSTRUCT` query into the specified RDF format.
     * 
     * This is an asynchronous operation, `callback` will be invoked when
     * the data is available for reading.
     * 
     * The SPARQL endpoint may not support the specified format, in that case
     * an error will be raised.
     * 
     * The `flags` argument is reserved for future expansions, currently
     * %TRACKER_SERIALIZE_FLAGS_NONE must be passed.
     * @param flags Serialization flags
     * @param format Output RDF format
     * @param query SPARQL query
     * @param cancellable Optional [type`Gio`.Cancellable]
     * @param callback User-defined [type`Gio`.AsyncReadyCallback] to be called when            the asynchronous operation is finished.
     */
    serialize_async(flags: SerializeFlags, format: RdfFormat, query: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void

    // Overloads of serialize_async

    /**
     * Promisified version of {@link serialize_async}
     * 
     * Serializes a `DESCRIBE` or `CONSTRUCT` query into the specified RDF format.
     * 
     * This is an asynchronous operation, `callback` will be invoked when
     * the data is available for reading.
     * 
     * The SPARQL endpoint may not support the specified format, in that case
     * an error will be raised.
     * 
     * The `flags` argument is reserved for future expansions, currently
     * %TRACKER_SERIALIZE_FLAGS_NONE must be passed.
     * @param flags Serialization flags
     * @param format Output RDF format
     * @param query SPARQL query
     * @param cancellable Optional [type`Gio`.Cancellable]
     * @returns A Promise of: A [class@Gio.InputStream] to read RDF content.
     */
    serialize_async(flags: SerializeFlags, format: RdfFormat, query: string | null, cancellable: Gio.Cancellable | null): globalThis.Promise<Gio.InputStream>
    /**
     * Finishes the operation started with [method`Tracker`.SparqlConnection.serialize_async].
     * @param result A [type`Gio`.AsyncResult] with the result of the operation
     * @returns A [class@Gio.InputStream] to read RDF content.
     */
    serialize_finish(result: Gio.AsyncResult): Gio.InputStream
    /**
     * Executes a SPARQL update on `connection`.
     * 
     * This method is synchronous and will block until the update
     * is finished. See [method`Tracker`.SparqlConnection.update_async]
     * for an asynchronous variant.
     * 
     * It is recommented to consider the usage of [class`Tracker`.Batch]
     * to cluster database updates. Frequent isolated SPARQL updates
     * through this method will have a degraded performance in comparison.
     * 
     * If the query is partially built from user input or other
     * untrusted sources, special care is required about possible
     * SPARQL injection. In order to avoid it entirely, it is recommended
     * to use [class`Tracker`.SparqlStatement], or to build the SPARQL
     * input through [class`Tracker`.Resource]. The function
     * [func`Tracker`.sparql_escape_string] exists as a last resort,
     * but its use is not recommended.
     * @param sparql String containing the SPARQL update query
     * @param cancellable Optional [type`Gio`.Cancellable]
     */
    update(sparql: string | null, cancellable: Gio.Cancellable | null): void
    /**
     * Executes asynchronously an array of SPARQL updates. All updates in the
     * array are handled within a single transaction.
     * 
     * If the query is partially built from user input or other
     * untrusted sources, special care is required about possible
     * SPARQL injection. In order to avoid it entirely, it is recommended
     * to use [class`Tracker`.SparqlStatement], or to build the SPARQL
     * input through [class`Tracker`.Resource]. The function
     * [func`Tracker`.sparql_escape_string] exists as a last resort,
     * but its use is not recommended.
     * @param sparql An array of strings containing the SPARQL update queries
     * @param sparql_length The amount of strings you pass as `sparql`
     * @param cancellable Optional [type`Gio`.Cancellable]
     * @param callback User-defined [type`Gio`.AsyncReadyCallback] to be called when            the asynchronous operation is finished.
     */
    update_array_async(sparql: string | null, sparql_length: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void

    // Overloads of update_array_async

    /**
     * Promisified version of {@link update_array_async}
     * 
     * Executes asynchronously an array of SPARQL updates. All updates in the
     * array are handled within a single transaction.
     * 
     * If the query is partially built from user input or other
     * untrusted sources, special care is required about possible
     * SPARQL injection. In order to avoid it entirely, it is recommended
     * to use [class`Tracker`.SparqlStatement], or to build the SPARQL
     * input through [class`Tracker`.Resource]. The function
     * [func`Tracker`.sparql_escape_string] exists as a last resort,
     * but its use is not recommended.
     * @param sparql An array of strings containing the SPARQL update queries
     * @param sparql_length The amount of strings you pass as `sparql`
     * @param cancellable Optional [type`Gio`.Cancellable]
     * @returns A Promise of: #TRUE if there were no errors.
     */
    update_array_async(sparql: string | null, sparql_length: number, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>
    /**
     * Finishes the operation started with [method`Tracker`.SparqlConnection.update_array_async].
     * @param res A [type`Gio`.AsyncResult] with the result of the operation
     * @returns #TRUE if there were no errors.
     */
    update_array_finish(res: Gio.AsyncResult): boolean
    /**
     * Executes asynchronously a SPARQL update.
     * 
     * It is recommented to consider the usage of [class`Tracker`.Batch]
     * to cluster database updates. Frequent isolated SPARQL updates
     * through this method will have a degraded performance in comparison.
     * 
     * If the query is partially built from user input or other
     * untrusted sources, special care is required about possible
     * SPARQL injection. In order to avoid it entirely, it is recommended
     * to use [class`Tracker`.SparqlStatement], or to build the SPARQL
     * input through [class`Tracker`.Resource]. The function
     * [func`Tracker`.sparql_escape_string] exists as a last resort,
     * but its use is not recommended.
     * @param sparql String containing the SPARQL update query
     * @param cancellable Optional [type`Gio`.Cancellable]
     * @param callback User-defined [type`Gio`.AsyncReadyCallback] to be called when            the asynchronous operation is finished.
     */
    update_async(sparql: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void

    // Overloads of update_async

    /**
     * Promisified version of {@link update_async}
     * 
     * Executes asynchronously a SPARQL update.
     * 
     * It is recommented to consider the usage of [class`Tracker`.Batch]
     * to cluster database updates. Frequent isolated SPARQL updates
     * through this method will have a degraded performance in comparison.
     * 
     * If the query is partially built from user input or other
     * untrusted sources, special care is required about possible
     * SPARQL injection. In order to avoid it entirely, it is recommended
     * to use [class`Tracker`.SparqlStatement], or to build the SPARQL
     * input through [class`Tracker`.Resource]. The function
     * [func`Tracker`.sparql_escape_string] exists as a last resort,
     * but its use is not recommended.
     * @param sparql String containing the SPARQL update query
     * @param cancellable Optional [type`Gio`.Cancellable]
     * @returns A Promise of the result of {@link update_async}
     */
    update_async(sparql: string | null, cancellable: Gio.Cancellable | null): globalThis.Promise<void>
    /**
     * Executes a SPARQL update and returns the names of the generated blank nodes.
     * 
     * This method is synchronous and will block until the update
     * is finished. See [method`Tracker`.SparqlConnection.update_blank_async]
     * for an asynchronous variant.
     * 
     * The `sparql` query should be built with [class`Tracker`.Resource], or
     * its parts correctly escaped using [func`Tracker`.sparql_escape_string],
     * otherwise SPARQL injection is possible.
     * 
     * The format string of the `GVariant` is `aaa{ss}` (an array of an array
     * of dictionaries). The first array represents each INSERT that may exist in
     * the SPARQL string. The second array represents each new node for a given
     * WHERE clause. The last array holds a string pair with the blank node name
     * (e.g. `foo` for the blank node `_:foo`) and the URN that was generated for
     * it. For most updates the first two outer arrays will only contain one item.
     * @param sparql String containing the SPARQL update query
     * @param cancellable Optional [type`Gio`.Cancellable]
     * @returns a [type@GLib.Variant] with the generated URNs.
     */
    update_blank(sparql: string | null, cancellable: Gio.Cancellable | null): GLib.Variant
    /**
     * Executes asynchronously a SPARQL update and returns the names of the generated blank nodes.
     * 
     * See the [method`Tracker`.SparqlConnection.update_blank] documentation to
     * learn the differences with [method`Tracker`.SparqlConnection.update].
     * @param sparql String containing the SPARQL update query
     * @param cancellable Optional [type`Gio`.Cancellable]
     * @param callback User-defined [type`Gio`.AsyncReadyCallback] to be called when            the asynchronous operation is finished.
     */
    update_blank_async(sparql: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void

    // Overloads of update_blank_async

    /**
     * Promisified version of {@link update_blank_async}
     * 
     * Executes asynchronously a SPARQL update and returns the names of the generated blank nodes.
     * 
     * See the [method`Tracker`.SparqlConnection.update_blank] documentation to
     * learn the differences with [method`Tracker`.SparqlConnection.update].
     * @param sparql String containing the SPARQL update query
     * @param cancellable Optional [type`Gio`.Cancellable]
     * @returns A Promise of: a [type@GLib.Variant] with the generated URNs.
     */
    update_blank_async(sparql: string | null, cancellable: Gio.Cancellable | null): globalThis.Promise<GLib.Variant>
    /**
     * Finishes the operation started with [method`Tracker`.SparqlConnection.update_blank_async].
     * 
     * This method returns the URNs of the generated nodes, if any. See the
     * [method`Tracker`.SparqlConnection.update_blank] documentation for the interpretation
     * of the returned [type`GLib`.Variant].
     * @param res A [type`Gio`.AsyncResult] with the result of the operation
     * @returns a [type@GLib.Variant] with the generated URNs.
     */
    update_blank_finish(res: Gio.AsyncResult): GLib.Variant
    /**
     * Finishes the operation started with [method`Tracker`.SparqlConnection.update_async].
     * @param res A [type`Gio`.AsyncResult] with the result of the operation
     */
    update_finish(res: Gio.AsyncResult): void
    /**
     * Inserts a resource as described by `resource` on the given `graph`.
     * 
     * This method is synchronous and will block until the update
     * is finished. See [method`Tracker`.SparqlConnection.update_resource_async]
     * for an asynchronous variant.
     * 
     * It is recommented to consider the usage of [class`Tracker`.Batch]
     * to cluster database updates. Frequent isolated SPARQL updates
     * through this method will have a degraded performance in comparison.
     * @param graph RDF graph where the resource should be inserted/updated, or %NULL for the default graph
     * @param resource A [class`Tracker`.Resource]
     * @param cancellable Optional [type`Gio`.Cancellable]
     * @returns #TRUE if there were no errors.
     */
    update_resource(graph: string | null, resource: Resource, cancellable: Gio.Cancellable | null): boolean
    /**
     * Inserts asynchronously a resource as described by `resource` on the given `graph`.
     * 
     * It is recommented to consider the usage of [class`Tracker`.Batch]
     * to cluster database updates. Frequent isolated SPARQL updates
     * through this method will have a degraded performance in comparison.
     * @param graph RDF graph where the resource should be inserted/updated, or %NULL for the default graph
     * @param resource A [class`Tracker`.Resource]
     * @param cancellable Optional [type`Gio`.Cancellable]
     * @param callback User-defined [type`Gio`.AsyncReadyCallback] to be called when            the asynchronous operation is finished.
     */
    update_resource_async(graph: string | null, resource: Resource, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void

    // Overloads of update_resource_async

    /**
     * Promisified version of {@link update_resource_async}
     * 
     * Inserts asynchronously a resource as described by `resource` on the given `graph`.
     * 
     * It is recommented to consider the usage of [class`Tracker`.Batch]
     * to cluster database updates. Frequent isolated SPARQL updates
     * through this method will have a degraded performance in comparison.
     * @param graph RDF graph where the resource should be inserted/updated, or %NULL for the default graph
     * @param resource A [class`Tracker`.Resource]
     * @param cancellable Optional [type`Gio`.Cancellable]
     * @returns A Promise of: #TRUE if there were no errors.
     */
    update_resource_async(graph: string | null, resource: Resource, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>
    /**
     * Finishes the operation started with [method`Tracker`.SparqlConnection.update_resource_async].
     * @param res A [type`Gio`.AsyncResult] with the result of the operation
     * @returns #TRUE if there were no errors.
     */
    update_resource_finish(res: Gio.AsyncResult): boolean
    /**
     * Prepares the given `INSERT`/`DELETE` SPARQL as a [class`Tracker`.SparqlStatement].
     * 
     * This prepared statement can be executed through
     * the [method`Tracker`.SparqlStatement.update] family of functions.
     * @param sparql The SPARQL update
     * @param cancellable Optional [type`Gio`.Cancellable]
     * @returns A prepared statement
     */
    update_statement(sparql: string | null, cancellable: Gio.Cancellable | null): SparqlStatement | null

    // Class property signals of Tracker-3.0.Tracker.SparqlConnection

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * `TrackerSparqlConnection` holds a connection to a RDF triple store.
 * 
 * This triple store may be of three types:
 * 
 *  - Local to the process, created through [ctor`Tracker`.SparqlConnection.new].
 *  - A HTTP SPARQL endpoint over the network, created through
 *    [ctor`Tracker`.SparqlConnection.remote_new]
 *  - A DBus SPARQL endpoint owned by another process in the same machine, created
 *    through [ctor`Tracker`.SparqlConnection.bus_new]
 * 
 * When creating a local triple store, it is required to give details about its
 * structure. This is done by passing a location to an ontology, see more
 * on how are [ontologies defined](ontologies.html). A local database may be
 * stored in a filesystem location, or it may reside in memory.
 * 
 * A `TrackerSparqlConnection` is private to the calling process, it can be
 * exposed to other hosts/processes via a [class`Tracker`.Endpoint], see
 * [ctor`Tracker`.EndpointDBus.new] and [ctor`Tracker`.EndpointHttp.new].
 * 
 * When issuing SPARQL queries and updates, it is recommended that these are
 * created through [class`Tracker`.SparqlStatement] to avoid the SPARQL
 * injection class of bugs, see [method`Tracker`.SparqlConnection.query_statement]
 * and [method`Tracker`.SparqlConnection.update_statement]. For SPARQL updates
 * it is also possible to use a "builder" approach to generate RDF data, see
 * [class`Tracker`.Resource]. It is also possible to create [class`Tracker`.SparqlStatement]
 * objects for SPARQL queries and updates from SPARQL strings embedded in a
 * [struct`Gio`.Resource], see [method`Tracker`.SparqlConnection.load_statement_from_gresource].
 * 
 * To get the best performance, it is recommended that SPARQL updates are clustered
 * through [class`Tracker`.Batch].
 * 
 * `TrackerSparqlConnection` also offers a number of methods for the simple cases,
 * [method`Tracker`.SparqlConnection.query] may be used when there is a SPARQL
 * query string directly available, and the [method`Tracker`.SparqlConnection.update]
 * family of functions may be used for one-off updates. All functions have asynchronous
 * variants.
 * 
 * When a SPARQL query is executed, a [class`Tracker`.SparqlCursor] will be obtained
 * to iterate over the query results.
 * 
 * Depending on the ontology definition, `TrackerSparqlConnection` may emit
 * notifications whenever resources of certain types get insert, modified or
 * deleted from the triple store (see [nrl:notify](nrl-ontology.html#nrl:notify).
 * These notifications can be handled via a [class`Tracker`.Notifier] obtained with
 * [method`Tracker`.SparqlConnection.create_notifier].
 * 
 * After done with a connection, it is recommended to call [method`Tracker`.SparqlConnection.close]
 * or [method`Tracker`.SparqlConnection.close_async] explicitly to cleanly close the
 * connection and prevent consistency checks on future runs. The triple store
 * connection will be implicitly closed when the `TrackerSparqlConnection` object
 * is disposed.
 * 
 * A `TrackerSparqlConnection` may be used from multiple threads, asynchronous
 * updates are executed sequentially on arrival order, asynchronous
 * queries are dispatched in a thread pool.
 * 
 * If you ever have the need to procedurally compose SPARQL query strings, consider
 * the use of [func`Tracker`.sparql_escape_string] for literal strings and
 * the [func`Tracker`.sparql_escape_uri] family of functions for URIs.
 * @class 
 */
export class SparqlConnection extends GObject.Object {

    // Own properties of Tracker-3.0.Tracker.SparqlConnection

    static name: string
    static $gtype: GObject.GType<SparqlConnection>

    // Constructors of Tracker-3.0.Tracker.SparqlConnection

    constructor(config?: SparqlConnection.ConstructorProperties) 
    /**
     * Connects to a database owned by another process on the
     * local machine via DBus.
     * @constructor 
     * @param service_name The name of the D-Bus service to connect to.
     * @param object_path The path to the object, or %NULL to use the default.
     * @param dbus_connection The [type`Gio`.DBusConnection] to use, or %NULL to use the session bus
     * @returns a new `TrackerSparqlConnection`.
     */
    static bus_new(service_name: string | null, object_path: string | null, dbus_connection: Gio.DBusConnection | null): SparqlConnection
    /**
     * Finishes the operation started with [func`Tracker`.SparqlConnection.bus_new_async].
     * @constructor 
     * @param result A [type`Gio`.AsyncResult] with the result of the operation
     * @returns a new `TrackerSparqlConnection`.
     */
    static bus_new_finish(result: Gio.AsyncResult): SparqlConnection
    /**
     * Creates or opens a process-local database.
     * 
     * This method should only be used for databases owned by the current process.
     * To connect to databases managed by other processes, use
     * [ctor`Tracker`.SparqlConnection.bus_new].
     * 
     * If `store` is %NULL, the database will be created in memory.
     * 
     * If defined, the `ontology` argument must point to a location containing
     * suitable `.ontology` files in Turtle format. These define the structure of
     * the triple store. You can learn more about [ontologies](ontologies.html),
     * or you can use the stock Nepomuk ontologies by calling
     * [func`Tracker`.sparql_get_ontology_nepomuk].
     * 
     * If opening an existing database, it is possible to pass %NULL as the
     * `ontology` location, the ontology will be introspected from the database.
     * Passing a %NULL `ontology` will raise an error if the database does not exist.
     * 
     * If a database is opened without the #TRACKER_SPARQL_CONNECTION_FLAG_READONLY
     * flag enabled, and the given `ontology` holds differences with the current
     * data layout, migration to the new structure will be attempted. This operation
     * may raise an error. In particular, not all migrations are possible without
     * causing data loss and Tracker will refuse to delete data during a migration.
     * The database is always left in a consistent state, either prior or posterior
     * to migration.
     * 
     * It is considered a developer error to ship ontologies that contain format
     * errors, or that fail at migrations.
     * 
     * It is encouraged to use `resource:///` URI locations for `ontology` wherever
     * possible, so the triple store structure is tied to the executable binary,
     * and in order to minimize disk seeks during `TrackerSparqlConnection`
     * initialization.
     * @constructor 
     * @param flags Connection flags to define the SPARQL connection behavior
     * @param store The directory that contains the database as a [iface`Gio`.File], or %NULL
     * @param ontology The directory that contains the database schemas as a [iface`Gio`.File], or %NULL
     * @param cancellable Optional [type`Gio`.Cancellable]
     * @returns a new `TrackerSparqlConnection`.
     */
    constructor(flags: SparqlConnectionFlags, store: Gio.File | null, ontology: Gio.File | null, cancellable: Gio.Cancellable | null) 
    /**
     * Creates or opens a process-local database.
     * 
     * This method should only be used for databases owned by the current process.
     * To connect to databases managed by other processes, use
     * [ctor`Tracker`.SparqlConnection.bus_new].
     * 
     * If `store` is %NULL, the database will be created in memory.
     * 
     * If defined, the `ontology` argument must point to a location containing
     * suitable `.ontology` files in Turtle format. These define the structure of
     * the triple store. You can learn more about [ontologies](ontologies.html),
     * or you can use the stock Nepomuk ontologies by calling
     * [func`Tracker`.sparql_get_ontology_nepomuk].
     * 
     * If opening an existing database, it is possible to pass %NULL as the
     * `ontology` location, the ontology will be introspected from the database.
     * Passing a %NULL `ontology` will raise an error if the database does not exist.
     * 
     * If a database is opened without the #TRACKER_SPARQL_CONNECTION_FLAG_READONLY
     * flag enabled, and the given `ontology` holds differences with the current
     * data layout, migration to the new structure will be attempted. This operation
     * may raise an error. In particular, not all migrations are possible without
     * causing data loss and Tracker will refuse to delete data during a migration.
     * The database is always left in a consistent state, either prior or posterior
     * to migration.
     * 
     * It is considered a developer error to ship ontologies that contain format
     * errors, or that fail at migrations.
     * 
     * It is encouraged to use `resource:///` URI locations for `ontology` wherever
     * possible, so the triple store structure is tied to the executable binary,
     * and in order to minimize disk seeks during `TrackerSparqlConnection`
     * initialization.
     * @constructor 
     * @param flags Connection flags to define the SPARQL connection behavior
     * @param store The directory that contains the database as a [iface`Gio`.File], or %NULL
     * @param ontology The directory that contains the database schemas as a [iface`Gio`.File], or %NULL
     * @param cancellable Optional [type`Gio`.Cancellable]
     * @returns a new `TrackerSparqlConnection`.
     */
    static new(flags: SparqlConnectionFlags, store: Gio.File | null, ontology: Gio.File | null, cancellable: Gio.Cancellable | null): SparqlConnection
    /**
     * Finishes the operation started with [func`Tracker`.SparqlConnection.new_async].
     * @constructor 
     * @param result A [type`Gio`.AsyncResult] with the result of the operation
     */
    static new_finish(result: Gio.AsyncResult): SparqlConnection
    /**
     * Creates a connection to a remote HTTP SPARQL endpoint.
     * 
     * The connection is made using the libsoup HTTP library. The connection will
     * normally use the `https://` or `http://` protocols.
     * @constructor 
     * @param uri_base Base URI of the remote connection
     * @returns a new remote `TrackerSparqlConnection`.
     */
    static remote_new(uri_base: string | null): SparqlConnection
    _init(config?: SparqlConnection.ConstructorProperties): void
    /**
     * Creates or opens a process-local database asynchronously.
     * 
     * See [ctor`Tracker`.SparqlConnection.new] for more information.
     * @param flags Connection flags to define the SPARQL connection behavior
     * @param store The directory that contains the database as a [iface`Gio`.File], or %NULL
     * @param ontology The directory that contains the database schemas as a [iface`Gio`.File], or %NULL
     * @param cancellable Optional [type`Gio`.Cancellable]
     * @param callback User-defined [type`Gio`.AsyncReadyCallback] to be called when            the asynchronous operation is finished.
     */
    static new_async(flags: SparqlConnectionFlags, store: Gio.File | null, ontology: Gio.File | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<SparqlConnection> | null): void
    /**
     * Connects asynchronously to a database owned by another process on the
     * local machine via DBus.
     * @param service_name The name of the D-Bus service to connect to.
     * @param object_path The path to the object, or %NULL to use the default.
     * @param dbus_connection The [class`Gio`.DBusConnection] to use, or %NULL to use the session bus
     * @param cancellable Optional [type`Gio`.Cancellable]
     * @param callback User-defined [type`Gio`.AsyncReadyCallback] to be called when            the asynchronous operation is finished.
     */
    static bus_new_async(service_name: string | null, object_path: string | null, dbus_connection: Gio.DBusConnection | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<SparqlConnection> | null): void
}

export module SparqlCursor {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Tracker-3.0.Tracker.SparqlCursor

        /**
         * The [class`Tracker`.SparqlConnection] used to retrieve the results.
         */
        connection?: SparqlConnection | null
    }

}

export interface SparqlCursor {

    // Own properties of Tracker-3.0.Tracker.SparqlCursor

    /**
     * The [class`Tracker`.SparqlConnection] used to retrieve the results.
     */
    readonly connection: SparqlConnection
    /**
     * Number of columns available in the result set.
     */
    readonly n_columns: number

    // Own fields of Tracker-3.0.Tracker.SparqlCursor

    parent_instance: GObject.Object

    // Owm methods of Tracker-3.0.Tracker.SparqlCursor

    /**
     * Closes the cursor. The object can only be freed after this call.
     */
    close(): void
    /**
     * Retrieve a boolean for the current row in `column`.
     * 
     * If the row/column do not have a boolean value, the result is
     * undefined, see [method`Tracker`.SparqlCursor.get_value_type].
     * @param column column number to retrieve (first one is 0)
     * @returns a boolean value.
     */
    get_boolean(column: number): boolean
    /**
     * Returns the [class`Tracker`.SparqlConnection] associated with this
     * `TrackerSparqlCursor`.
     * @returns the cursor [class@Tracker.SparqlConnection]. The returned object must not be unreferenced by the caller.
     */
    get_connection(): SparqlConnection
    /**
     * Retrieves a [type`GLib`.DateTime] pointer for the current row in `column`.
     * @param column Column number to retrieve (first one is 0)
     * @returns [type@GLib.DateTime] object, or %NULL if the given column does not   contain a [xsd:date](xsd-ontology.html#xsd:date) or [xsd:dateTime](xsd-ontology.html#xsd:dateTime).
     */
    get_datetime(column: number): GLib.DateTime | null
    /**
     * Retrieve a double for the current row in `column`.
     * 
     * If the row/column do not have a integer or double value, the result is
     * undefined, see [method`Tracker`.SparqlCursor.get_value_type].
     * @param column column number to retrieve (first one is 0)
     * @returns a double value.
     */
    get_double(column: number): number
    /**
     * Retrieve an integer for the current row in `column`.
     * 
     * If the row/column do not have an integer value, the result is
     * undefined, see [method`Tracker`.SparqlCursor.get_value_type].
     * @param column column number to retrieve (first one is 0)
     * @returns a 64-bit integer value.
     */
    get_integer(column: number): number
    /**
     * Retrieves the number of columns available in the result set.
     * 
     * This method should only be called after a successful
     * [method`Tracker`.SparqlCursor.next], otherwise its return value
     * will be undefined.
     * @returns The number of columns returned in the result set.
     */
    get_n_columns(): number
    /**
     * Retrieves a string representation of the data in the current
     * row in `column`.
     * 
     * Any type may be converted to a string. If the value is not bound
     * (See [method`Tracker`.SparqlCursor.is_bound]) this method will return %NULL.
     * @param column column number to retrieve (first one is 0)
     * @returns a string which must not be freed. %NULL is returned if the column is not in the `[0, n_columns]` range, or if the row/column refer to a nullable optional value in the result set.
     */
    get_string(column: number): [ /* returnType */ string | null, /* length */ number | null ]
    /**
     * Returns the data type bound to the current row and the given `column`.
     * 
     * If the column is unbound, the value will be %TRACKER_SPARQL_VALUE_TYPE_UNBOUND.
     * See also [method`Tracker`.SparqlCursor.is_bound].
     * 
     * Values of type #TRACKER_SPARQL_VALUE_TYPE_RESOURCE and
     * #TRACKER_SPARQL_VALUE_TYPE_BLANK_NODE can be considered equivalent, the
     * difference is the resource being referenced as a named IRI or a blank
     * node.
     * 
     * All other [enum`Tracker`.SparqlValueType] value types refer to literal values.
     * @param column column number to retrieve (first one is 0)
     * @returns a [enum@Tracker.SparqlValueType] expressing the content type of   the given column for the current row.
     */
    get_value_type(column: number): SparqlValueType
    /**
     * Retrieves the name of the given `column`.
     * 
     * This name will be defined at the SPARQL query, either
     * implicitly from the names of the variables returned in
     * the resultset, or explicitly through the `AS ?var` SPARQL
     * syntax.
     * @param column column number to retrieve (first one is 0)
     * @returns The name of the given column.
     */
    get_variable_name(column: number): string | null
    /**
     * Returns whether the given `column` has a bound value in the current row.
     * 
     * This may not be the case through e.g. the `OPTIONAL { }` SPARQL syntax.
     * @param column column number to retrieve (first one is 0)
     * @returns a %TRUE or %FALSE.
     */
    is_bound(column: number): boolean
    /**
     * Iterates the cursor to the next result.
     * 
     * If the cursor was not started, it will point to the first result after
     * this call. This operation is completely synchronous and it may block,
     * see [method`Tracker`.SparqlCursor.next_async] for an asynchronous variant.
     * @param cancellable Optional [type`Gio`.Cancellable]
     * @returns %FALSE if there are no more results or if an error is found, otherwise %TRUE.
     */
    next(cancellable: Gio.Cancellable | null): boolean
    /**
     * Iterates the cursor asyncronously to the next result.
     * 
     * If the cursor was not started, it will point to the first result after
     * this operation completes.
     * 
     * In the period between this call and the corresponding
     * [method`Tracker`.SparqlCursor.next_finish] call, the other cursor methods
     * should not be used, nor their results trusted. The cursor should only
     * be iterated once at a time.
     * @param cancellable Optional [type`Gio`.Cancellable]
     * @param callback user-defined [type`Gio`.AsyncReadyCallback] to be called when            asynchronous operation is finished.
     */
    next_async(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void

    // Overloads of next_async

    /**
     * Promisified version of {@link next_async}
     * 
     * Iterates the cursor asyncronously to the next result.
     * 
     * If the cursor was not started, it will point to the first result after
     * this operation completes.
     * 
     * In the period between this call and the corresponding
     * [method`Tracker`.SparqlCursor.next_finish] call, the other cursor methods
     * should not be used, nor their results trusted. The cursor should only
     * be iterated once at a time.
     * @param cancellable Optional [type`Gio`.Cancellable]
     * @returns A Promise of: %FALSE if there are no more results or if an error is found, otherwise %TRUE.
     */
    next_async(cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>
    /**
     * Finishes the asynchronous iteration to the next result started with
     * [method`Tracker`.SparqlCursor.next_async].
     * @param res a [type`Gio`.AsyncResult] with the result of the operation
     * @returns %FALSE if there are no more results or if an error is found, otherwise %TRUE.
     */
    next_finish(res: Gio.AsyncResult): boolean
    /**
     * Resets the iterator to point back to the first result.
     */
    rewind(): void

    // Class property signals of Tracker-3.0.Tracker.SparqlCursor

    connect(sigName: "notify::connection", callback: (($obj: SparqlCursor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::connection", callback: (($obj: SparqlCursor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::connection", ...args: any[]): void
    connect(sigName: "notify::n-columns", callback: (($obj: SparqlCursor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::n-columns", callback: (($obj: SparqlCursor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::n-columns", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * `TrackerSparqlCursor` provides the methods to iterate the results of a SPARQL query.
 * 
 * Cursors are obtained through e.g. [method`Tracker`.SparqlStatement.execute]
 * or [method`Tracker`.SparqlConnection.query] after the SPARQL query has been
 * executed.
 * 
 * When created, a cursor does not point to any element, [method`Tracker`.SparqlCursor.next]
 * is necessary to iterate one by one to the first (and following) results.
 * When the cursor iterated across all rows in the result set, [method`Tracker`.SparqlCursor.next]
 * will return %FALSE with no error set.
 * 
 * On each row, it is possible to extract the result values through the
 * [method`Tracker`.SparqlCursor.get_integer], [method`Tracker`.SparqlCursor.get_string], etc... family
 * of methods. The column index of those functions starts at 0. The number of columns is
 * dependent on the SPARQL query issued, but may be checked at runtime through the
 * [method`Tracker`.SparqlCursor.get_n_columns] method.
 * 
 * After a cursor is iterated, it is recommended to call [method`Tracker`.SparqlCursor.close]
 * explicitly to free up resources for other users of the same [class`Tracker`.SparqlConnection],
 * this is especially important in garbage collected languages. These resources
 * will be also implicitly freed on cursor object finalization.
 * 
 * It is possible to use a given `TrackerSparqlCursor` in other threads than
 * the one it was created from. It must be however used from just one thread
 * at any given time.
 * @class 
 */
export class SparqlCursor extends GObject.Object {

    // Own properties of Tracker-3.0.Tracker.SparqlCursor

    static name: string
    static $gtype: GObject.GType<SparqlCursor>

    // Constructors of Tracker-3.0.Tracker.SparqlCursor

    constructor(config?: SparqlCursor.ConstructorProperties) 
    _init(config?: SparqlCursor.ConstructorProperties): void
}

export module SparqlStatement {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Tracker-3.0.Tracker.SparqlStatement

        /**
         * The [class`Tracker`.SparqlConnection] the statement was created for.
         */
        connection?: SparqlConnection | null
        /**
         * SPARQL query stored in this statement.
         */
        sparql?: string | null
    }

}

export interface SparqlStatement {

    // Own properties of Tracker-3.0.Tracker.SparqlStatement

    /**
     * The [class`Tracker`.SparqlConnection] the statement was created for.
     */
    readonly connection: SparqlConnection
    /**
     * SPARQL query stored in this statement.
     */
    readonly sparql: string | null

    // Own fields of Tracker-3.0.Tracker.SparqlStatement

    parent_instance: GObject.Object

    // Owm methods of Tracker-3.0.Tracker.SparqlStatement

    /**
     * Binds the boolean `value` to the parameterized variable given by `name`.
     * @param name variable name
     * @param value value
     */
    bind_boolean(name: string | null, value: boolean): void
    /**
     * Binds the [type`GLib`.DateTime] `value` to the parameterized variable given by `name`.
     * @param name variable name
     * @param value value
     */
    bind_datetime(name: string | null, value: GLib.DateTime): void
    /**
     * Binds the double `value` to the parameterized variable given by `name`.
     * @param name variable name
     * @param value value
     */
    bind_double(name: string | null, value: number): void
    /**
     * Binds the integer `value` to the parameterized variable given by `name`.
     * @param name variable name
     * @param value value
     */
    bind_int(name: string | null, value: number): void
    /**
     * Binds the string `value` to the parameterized variable given by `name`.
     * @param name variable name
     * @param value value
     */
    bind_string(name: string | null, value: string | null): void
    /**
     * Clears all bindings.
     */
    clear_bindings(): void
    /**
     * Executes the `SELECT` or `ASK` SPARQL query with the currently bound values.
     * 
     * This function also works for `DESCRIBE` and `CONSTRUCT` queries that
     * retrieve data from the triple store. These query forms that return
     * RDF data are however more useful together with [method`Tracker`.SparqlStatement.serialize_async].
     * 
     * This function should only be called on `TrackerSparqlStatement` objects
     * obtained through [method`Tracker`.SparqlConnection.query_statement] or
     * SELECT/CONSTRUCT/DESCRIBE statements loaded through
     * [method`Tracker`.SparqlConnection.load_statement_from_gresource].
     * An error will be raised if this method is called on a `INSERT` or `DELETE`
     * SPARQL query.
     * @param cancellable Optional [type`Gio`.Cancellable]
     * @returns A `TrackerSparqlCursor` with the query results.
     */
    execute(cancellable: Gio.Cancellable | null): SparqlCursor
    /**
     * Executes asynchronously the `SELECT` or `ASK` SPARQL query with the currently bound values.
     * 
     * This function also works for `DESCRIBE` and `CONSTRUCT` queries that
     * retrieve data from the triple store. These query forms that return
     * RDF data are however more useful together with [method`Tracker`.SparqlStatement.serialize_async].
     * 
     * This function should only be called on `TrackerSparqlStatement` objects
     * obtained through [method`Tracker`.SparqlConnection.query_statement] or
     * SELECT/CONSTRUCT/DESCRIBE statements loaded through
     * [method`Tracker`.SparqlConnection.load_statement_from_gresource].
     * An error will be raised if this method is called on a `INSERT` or `DELETE`
     * SPARQL query.
     * @param cancellable Optional [type`Gio`.Cancellable]
     * @param callback user-defined [type`Gio`.AsyncReadyCallback] to be called when            the asynchronous operation is finished.
     */
    execute_async(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void

    // Overloads of execute_async

    /**
     * Promisified version of {@link execute_async}
     * 
     * Executes asynchronously the `SELECT` or `ASK` SPARQL query with the currently bound values.
     * 
     * This function also works for `DESCRIBE` and `CONSTRUCT` queries that
     * retrieve data from the triple store. These query forms that return
     * RDF data are however more useful together with [method`Tracker`.SparqlStatement.serialize_async].
     * 
     * This function should only be called on `TrackerSparqlStatement` objects
     * obtained through [method`Tracker`.SparqlConnection.query_statement] or
     * SELECT/CONSTRUCT/DESCRIBE statements loaded through
     * [method`Tracker`.SparqlConnection.load_statement_from_gresource].
     * An error will be raised if this method is called on a `INSERT` or `DELETE`
     * SPARQL query.
     * @param cancellable Optional [type`Gio`.Cancellable]
     * @returns A Promise of: A `TrackerSparqlCursor` with the query results.
     */
    execute_async(cancellable: Gio.Cancellable | null): globalThis.Promise<SparqlCursor>
    /**
     * Finishes the asynchronous operation started through
     * [method`Tracker`.SparqlStatement.execute_async].
     * @param res a [type`Gio`.AsyncResult] with the result of the operation
     * @returns A `TrackerSparqlCursor` with the query results.
     */
    execute_finish(res: Gio.AsyncResult): SparqlCursor
    /**
     * Returns the [class`Tracker`.SparqlConnection] that this statement was created for.
     * @returns The SPARQL connection of this statement.
     */
    get_connection(): SparqlConnection
    /**
     * Returns the SPARQL string that this prepared statement holds.
     * @returns The contained SPARQL query
     */
    get_sparql(): string | null
    /**
     * Serializes a `DESCRIBE` or `CONSTRUCT` query into the given RDF `format`.
     * 
     * The query `stmt` was created from must be either a `DESCRIBE` or `CONSTRUCT`
     * query, an error will be raised otherwise.
     * 
     * This is an asynchronous operation, `callback` will be invoked when the
     * data is available for reading.
     * 
     * The SPARQL endpoint may not support the specified format, in that case
     * an error will be raised.
     * 
     * The `flags` argument is reserved for future expansions, currently
     * #TRACKER_SERIALIZE_FLAGS_NONE must be passed.
     * @param flags serialization flags
     * @param format RDF format of the serialized data
     * @param cancellable Optional [type`Gio`.Cancellable]
     * @param callback user-defined [type`Gio`.AsyncReadyCallback] to be called when            the asynchronous operation is finished.
     */
    serialize_async(flags: SerializeFlags, format: RdfFormat, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void

    // Overloads of serialize_async

    /**
     * Promisified version of {@link serialize_async}
     * 
     * Serializes a `DESCRIBE` or `CONSTRUCT` query into the given RDF `format`.
     * 
     * The query `stmt` was created from must be either a `DESCRIBE` or `CONSTRUCT`
     * query, an error will be raised otherwise.
     * 
     * This is an asynchronous operation, `callback` will be invoked when the
     * data is available for reading.
     * 
     * The SPARQL endpoint may not support the specified format, in that case
     * an error will be raised.
     * 
     * The `flags` argument is reserved for future expansions, currently
     * #TRACKER_SERIALIZE_FLAGS_NONE must be passed.
     * @param flags serialization flags
     * @param format RDF format of the serialized data
     * @param cancellable Optional [type`Gio`.Cancellable]
     * @returns A Promise of: a [class@Gio.InputStream] to read RDF content.
     */
    serialize_async(flags: SerializeFlags, format: RdfFormat, cancellable: Gio.Cancellable | null): globalThis.Promise<Gio.InputStream>
    /**
     * Finishes the asynchronous operation started through
     * [method`Tracker`.SparqlStatement.serialize_async].
     * @param result a [type`Gio`.AsyncResult] with the result of the operation
     * @returns a [class@Gio.InputStream] to read RDF content.
     */
    serialize_finish(result: Gio.AsyncResult): Gio.InputStream
    /**
     * Executes the `INSERT`/`DELETE` SPARQL query series with the currently bound values.
     * 
     * This function should only be called on `TrackerSparqlStatement` objects
     * obtained through [method`Tracker`.SparqlConnection.update_statement] or
     * `INSERT`/`DELETE` statements loaded through
     * [method`Tracker`.SparqlConnection.load_statement_from_gresource].
     * An error will be raised if this method is called on
     * `SELECT`/`ASK`/`DESCRIBE`/`CONSTRUCT` SPARQL queries.
     * @param cancellable Optional [type`Gio`.Cancellable]
     * @returns %TRUE if the update finished with no errors, %FALSE otherwise
     */
    update(cancellable: Gio.Cancellable | null): boolean
    /**
     * Executes asynchronously the `INSERT`/`DELETE` SPARQL query series with the currently bound values.
     * 
     * This function should only be called on `TrackerSparqlStatement` objects
     * obtained through [method`Tracker`.SparqlConnection.update_statement] or
     * `INSERT`/`DELETE` statements loaded through
     * [method`Tracker`.SparqlConnection.load_statement_from_gresource].
     * An error will be raised if this method is called on
     * `SELECT`/`ASK`/`DESCRIBE`/`CONSTRUCT` SPARQL queries.
     * @param cancellable Optional [type`Gio`.Cancellable]
     * @param callback user-defined [type`Gio`.AsyncReadyCallback] to be called when            the asynchronous operation is finished.
     */
    update_async(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void

    // Overloads of update_async

    /**
     * Promisified version of {@link update_async}
     * 
     * Executes asynchronously the `INSERT`/`DELETE` SPARQL query series with the currently bound values.
     * 
     * This function should only be called on `TrackerSparqlStatement` objects
     * obtained through [method`Tracker`.SparqlConnection.update_statement] or
     * `INSERT`/`DELETE` statements loaded through
     * [method`Tracker`.SparqlConnection.load_statement_from_gresource].
     * An error will be raised if this method is called on
     * `SELECT`/`ASK`/`DESCRIBE`/`CONSTRUCT` SPARQL queries.
     * @param cancellable Optional [type`Gio`.Cancellable]
     * @returns A Promise of: %TRUE if the update finished with no errors, %FALSE otherwise
     */
    update_async(cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>
    /**
     * Finishes the asynchronous update started through
     * [method`Tracker`.SparqlStatement.update_async].
     * @param result a [type`Gio`.AsyncResult] with the result of the operation
     * @returns %TRUE if the update finished with no errors, %FALSE otherwise
     */
    update_finish(result: Gio.AsyncResult): boolean

    // Class property signals of Tracker-3.0.Tracker.SparqlStatement

    connect(sigName: "notify::connection", callback: (($obj: SparqlStatement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::connection", callback: (($obj: SparqlStatement, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::connection", ...args: any[]): void
    connect(sigName: "notify::sparql", callback: (($obj: SparqlStatement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sparql", callback: (($obj: SparqlStatement, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sparql", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * `TrackerSparqlStatement` represents a prepared statement for a SPARQL query.
 * 
 * The SPARQL query will be internally compiled into the format that is most
 * optimal to execute the query many times. For connections created
 * through [ctor`Tracker`.SparqlConnection.new] that will be a
 * SQLite compiled statement.
 * 
 * The SPARQL query may contain parameterized variables expressed via the
 * `~` prefix in the SPARQL syntax (e.g. `~var`), these may happen anywhere
 * in the SPARQL where a literal or variable would typically happen. These
 * parameterized variables may be mapped to arbitrary values prior to
 * execution. The `TrackerSparqlStatement` may be reused for future
 * queries with different values.
 * 
 * The argument bindings may be changed through the [method`Tracker`.SparqlStatement.bind_int],
 * [method`Tracker`.SparqlStatement.bind_int], etc... family of functions. Those functions
 * receive a `name` argument corresponding for the variable name in the SPARQL query
 * (eg. `"var"` for `~var`) and a value to map the variable to.
 * 
 * Once all arguments have a value, the query may be executed through
 * [method`Tracker`.SparqlStatement.execute_async] or [method`Tracker`.SparqlStatement.execute].
 * 
 * It is possible to use any `TrackerSparqlStatement` from other threads than
 * the one it was created from. However, binding values and executing the
 * statement must only happen from one thread at a time. It is possible to reuse
 * the `TrackerSparqlStatement` right after [method`Tracker`.SparqlStatement.execute_async]
 * was called, there is no need to wait for [method`Tracker`.SparqlStatement.execute_finish].
 * 
 * In some circumstances, it is possible that the query needs to be recompiled
 * from the SPARQL source. This will happen transparently.
 * @class 
 */
export class SparqlStatement extends GObject.Object {

    // Own properties of Tracker-3.0.Tracker.SparqlStatement

    static name: string
    static $gtype: GObject.GType<SparqlStatement>

    // Constructors of Tracker-3.0.Tracker.SparqlStatement

    constructor(config?: SparqlStatement.ConstructorProperties) 
    _init(config?: SparqlStatement.ConstructorProperties): void
}

export interface BatchClass {
}

export abstract class BatchClass {

    // Own properties of Tracker-3.0.Tracker.BatchClass

    static name: string
}

export interface EndpointClass {
}

export abstract class EndpointClass {

    // Own properties of Tracker-3.0.Tracker.EndpointClass

    static name: string
}

export interface NamespaceManagerClass {

    // Own fields of Tracker-3.0.Tracker.NamespaceManagerClass

    parent_class: GObject.ObjectClass
}

export abstract class NamespaceManagerClass {

    // Own properties of Tracker-3.0.Tracker.NamespaceManagerClass

    static name: string
}

export interface NotifierClass {
}

export abstract class NotifierClass {

    // Own properties of Tracker-3.0.Tracker.NotifierClass

    static name: string
}

export interface NotifierEvent {

    // Owm methods of Tracker-3.0.Tracker.NotifierEvent

    /**
     * Returns the event type.
     * @returns The event type
     */
    get_event_type(): NotifierEventType
    /**
     * Returns the tracker:id of the element being notified upon. This is a #gint64
     * which is used as efficient internal identifier for the resource.
     * @returns the resource ID
     */
    get_id(): number
    /**
     * Returns the Uniform Resource Name of the element. This is Tracker's
     * public identifier for the resource.
     * 
     * This URN is an unique string identifier for the resource being
     * notified upon, typically of the form `urn:uuid:...`.
     * @returns The element URN
     */
    get_urn(): string | null
}

/**
 * The <structname>TrackerNotifierEvent</structname> struct represents a
 * change event in the stored data.
 * @record 
 */
export class NotifierEvent {

    // Own properties of Tracker-3.0.Tracker.NotifierEvent

    static name: string
}

export interface ResourceClass {
}

export abstract class ResourceClass {

    // Own properties of Tracker-3.0.Tracker.ResourceClass

    static name: string
}

export interface SparqlConnectionClass {
}

export abstract class SparqlConnectionClass {

    // Own properties of Tracker-3.0.Tracker.SparqlConnectionClass

    static name: string
}

export interface SparqlCursorClass {
}

export abstract class SparqlCursorClass {

    // Own properties of Tracker-3.0.Tracker.SparqlCursorClass

    static name: string
}

export interface SparqlStatementClass {
}

export abstract class SparqlStatementClass {

    // Own properties of Tracker-3.0.Tracker.SparqlStatementClass

    static name: string
}

/**
 * Name of the imported GIR library
 * @see https://gitlab.gnome.org/GNOME/gjs/-/blob/master/gi/ns.cpp#L188
 */
export const __name__: string
/**
 * Version of the imported GIR library
 * @see https://gitlab.gnome.org/GNOME/gjs/-/blob/master/gi/ns.cpp#L189
 */
export const __version__: string
// END