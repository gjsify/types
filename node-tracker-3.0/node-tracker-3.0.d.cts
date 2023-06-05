
/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './node-tracker-3.0-import.d.ts';
    
/**
 * Tracker-3.0
 */

import type Gio from '@girs/node-gio-2.0';
import type GObject from '@girs/node-gobject-2.0';
import type GLib from '@girs/node-glib-2.0';

/**
 * Flags affecting deserialization of RDF.
 */
export enum DeserializeFlags {
    /**
     * No flags.
     */
    DESERIALIZE_FLAGS_NONE,
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
export enum SerializeFlags {
    SERIALIZE_FLAGS_NONE,
}
/**
 * Error domain for Tracker Sparql. Errors in this domain will be from the
 * #TrackerSparqlError enumeration. See #GError for more information on error
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
     * FTS Search terms are filtered through a stop word list.
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
 * Checks that the Tracker library in use is compatible with the
 * given version. Generally you would pass in the constants
 * #TRACKER_MAJOR_VERSION, #TRACKER_MINOR_VERSION, #TRACKER_MICRO_VERSION
 * as the three arguments to this function; that produces
 * a check that the library in use is compatible with
 * the version of Tracker the application or module was compiled
 * against.
 * 
 * Compatibility is defined by two things: first the version
 * of the running library is newer than the version
 * `required_major`.required_minor.`required_micro`. Second
 * the running library must be binary compatible with the
 * version `required_major`.required_minor.`required_micro`
 * (same major version.)
 * @param requiredMajor the required major version.
 * @param requiredMinor the required minor version.
 * @param requiredMicro the required micro version.
 * @returns %NULL if the Tracker library is compatible with the   given version, or a string describing the version mismatch.   The returned string is owned by Tracker and must not be modified   or freed.
 */
export function checkVersion(requiredMajor: number, requiredMinor: number, requiredMicro: number): string | null
export function sparqlErrorQuark(): GLib.Quark
/**
 * Escapes `literal` so it is suitable for insertion in
 * SPARQL queries as string literals. Manual construction
 * of query strings based user input is best avoided at
 * all cost, use of #TrackerSparqlStatement is recommended
 * instead.
 * @param literal a string to escape
 * @returns the escaped string
 */
export function sparqlEscapeString(literal: string | null): string | null
/**
 * Calls tracker_sparql_escape_uri_printf().
 * @param uri a string to be escaped, following the tracker sparql rules
 * @returns a newly-allocated string holding the result. The returned string should be freed with g_free() when no longer needed.
 */
export function sparqlEscapeUri(uri: string | null): string | null
/**
 * Returns a path to the built-in Nepomuk ontologies.
 * @returns a #GFile instance.
 */
export function sparqlGetOntologyNepomuk(): Gio.File
/**
 * Creates a fresh UUID-based URN.
 * @returns A newly generated UUID URN.
 */
export function sparqlGetUuidUrn(): string | null
export module Batch {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Tracker-3.0.Tracker.Batch

        /**
         * The #TrackerSparqlConnection the batch belongs to.
         */
        connection?: SparqlConnection | null
    }

}

export interface Batch {

    // Own properties of Tracker-3.0.Tracker.Batch

    /**
     * The #TrackerSparqlConnection the batch belongs to.
     */
    readonly connection: SparqlConnection
    __gtype__: number

    // Own fields of Tracker-3.0.Tracker.Batch

    parentInstance: GObject.Object

    // Owm methods of Tracker-3.0.Tracker.Batch

    /**
     * Adds the RDF represented by `resource` to `batch`.
     * @param graph RDF graph to insert the resource to
     * @param resource a #TrackerResource
     */
    addResource(graph: string | null, resource: Resource): void
    /**
     * Adds an SPARQL update string to `batch`.
     * @param sparql a SPARQL update string
     */
    addSparql(sparql: string | null): void
    /**
     * Adds a #TrackerSparqlStatement containing an SPARQL update. The statement will
     * be executed once in the batch, with the values bound as specified by `variable_names`
     * and `values`.
     * 
     * For example, for a statement that has a single `~name` parameter,
     * it could be given a value for execution with the given code:
     * 
     * <div class="gi-lang-c"><pre><code class="language-c">
     * 
     * ```
     * const char *names = { "name" };
     * const GValue values[G_N_ELEMENTS (names)] = { 0, };
     * 
     * g_value_init (&values[0], G_TYPE_STRING);
     * g_value_set_string (&values[0], "John Smith");
     * tracker_batch_add_statementv (batch, stmt,
     *                               G_N_ELEMENTS (names),
     *                               names, values);
     * ```
     * </code></pre></div>
     * 
     * <div class="gi-lang-python"><pre><code class="language-python">
     * 
     * ```
     * batch.add_statement(stmt, ['name'], ['John Smith']);
     * ```
     * </code></pre></div>
     * 
     * <div class="gi-lang-javascript"><pre><code class="language-javascript">
     * 
     * ```
     * batch.add_statement(stmt, ['name'], ['John Smith']);
     * ```
     * </code></pre></div>
     * 
     * The #TrackerSparqlStatement may be used on multiple tracker_batch_add_statement()
     * calls with the same or different values, on the same or different #TrackerBatch
     * objects.
     * 
     * This function should only be called on #TrackerSparqlStatement objects
     * obtained through tracker_sparql_connection_update_statement() or
     * update statements loaded through tracker_sparql_connection_load_statement_from_gresource().
     * @param stmt a #TrackerSparqlStatement containing a SPARQL update
     * @param variableNames the names of each bound parameter
     * @param values the values of each bound parameter
     */
    addStatement(stmt: SparqlStatement, variableNames: string[], values: any[]): void
    /**
     * Executes the batch. This operations happens synchronously.
     * @param cancellable a #GCancellable, or %NULL
     * @returns %TRUE of there were no errors, %FALSE otherwise
     */
    execute(cancellable: Gio.Cancellable | null): boolean
    /**
     * Executes the batch. This operation happens asynchronously, when
     * finished `callback` will be executed.
     * @param cancellable a #GCancellable, or %NULL
     * @param callback user-defined #GAsyncReadyCallback to be called when            asynchronous operation is finished.
     */
    executeAsync(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes the operation started with tracker_batch_execute_async().
     * @param res a #GAsyncResult with the result of the operation
     * @returns %TRUE of there were no errors, %FALSE otherwise
     */
    executeFinish(res: Gio.AsyncResult): boolean
    /**
     * Returns the #TrackerSparqlConnection that this batch was created from.
     * @returns The SPARQL connection of this batch.
     */
    getConnection(): SparqlConnection

    // Class property signals of Tracker-3.0.Tracker.Batch

    connect(sigName: "notify::connection", callback: (...args: any[]) => void): number
    on(sigName: "notify::connection", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::connection", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::connection", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::connection", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class Batch extends GObject.Object {

    // Own properties of Tracker-3.0.Tracker.Batch

    static name: string

    // Constructors of Tracker-3.0.Tracker.Batch

    constructor(config?: Batch.ConstructorProperties) 
    _init(config?: Batch.ConstructorProperties): void
}

export module Endpoint {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Tracker-3.0.Tracker.Endpoint

        sparqlConnection?: SparqlConnection | null
    }

}

export interface Endpoint {

    // Own properties of Tracker-3.0.Tracker.Endpoint

    readonly sparqlConnection: SparqlConnection
    __gtype__: number

    // Own fields of Tracker-3.0.Tracker.Endpoint

    parentInstance: GObject.Object

    // Owm methods of Tracker-3.0.Tracker.Endpoint

    /**
     * Returns the #TrackerSparqlConnection that this endpoint proxies.
     * @returns The proxied SPARQL connection
     */
    getSparqlConnection(): SparqlConnection

    // Class property signals of Tracker-3.0.Tracker.Endpoint

    connect(sigName: "notify::sparql-connection", callback: (...args: any[]) => void): number
    on(sigName: "notify::sparql-connection", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::sparql-connection", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::sparql-connection", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::sparql-connection", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * The <structname>TrackerEndpoint</structname> object represents a public
 * connection to a #TrackerSparqlConnection.
 * @class 
 */
export class Endpoint extends GObject.Object {

    // Own properties of Tracker-3.0.Tracker.Endpoint

    static name: string

    // Constructors of Tracker-3.0.Tracker.Endpoint

    constructor(config?: Endpoint.ConstructorProperties) 
    _init(config?: Endpoint.ConstructorProperties): void
}

export module EndpointDBus {

    // Constructor properties interface

    export interface ConstructorProperties extends Gio.Initable.ConstructorProperties, Endpoint.ConstructorProperties {

        // Own constructor properties of Tracker-3.0.Tracker.EndpointDBus

        dbusConnection?: Gio.DBusConnection | null
        objectPath?: string | null
    }

}

export interface EndpointDBus extends Gio.Initable {

    // Own properties of Tracker-3.0.Tracker.EndpointDBus

    readonly dbusConnection: Gio.DBusConnection
    readonly objectPath: string | null
    __gtype__: number

    // Class property signals of Tracker-3.0.Tracker.EndpointDBus

    connect(sigName: "notify::dbus-connection", callback: (...args: any[]) => void): number
    on(sigName: "notify::dbus-connection", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::dbus-connection", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::dbus-connection", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::dbus-connection", ...args: any[]): void
    connect(sigName: "notify::object-path", callback: (...args: any[]) => void): number
    on(sigName: "notify::object-path", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::object-path", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::object-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::object-path", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::sparql-connection", callback: (...args: any[]) => void): number
    on(sigName: "notify::sparql-connection", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::sparql-connection", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::sparql-connection", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::sparql-connection", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * The <structname>TrackerEndpointDBus</structname> object represents a public
 * connection to a #TrackerSparqlConnection on a DBus object path.
 * @class 
 */
export class EndpointDBus extends Endpoint {

    // Own properties of Tracker-3.0.Tracker.EndpointDBus

    static name: string

    // Constructors of Tracker-3.0.Tracker.EndpointDBus

    constructor(config?: EndpointDBus.ConstructorProperties) 
    /**
     * Registers a Tracker endpoint object at `object_path` on `dbus_connection`.
     * The default object path is "/org/freedesktop/Tracker3/Endpoint".
     * @constructor 
     * @param sparqlConnection a #TrackerSparqlConnection
     * @param dbusConnection a #GDBusConnection
     * @param objectPath the object path to use, or %NULL for the default
     * @param cancellable a #GCancellable, or %NULL
     * @returns a #TrackerEndpointDBus object.
     */
    constructor(sparqlConnection: SparqlConnection, dbusConnection: Gio.DBusConnection, objectPath: string | null, cancellable: Gio.Cancellable | null) 
    /**
     * Registers a Tracker endpoint object at `object_path` on `dbus_connection`.
     * The default object path is "/org/freedesktop/Tracker3/Endpoint".
     * @constructor 
     * @param sparqlConnection a #TrackerSparqlConnection
     * @param dbusConnection a #GDBusConnection
     * @param objectPath the object path to use, or %NULL for the default
     * @param cancellable a #GCancellable, or %NULL
     * @returns a #TrackerEndpointDBus object.
     */
    static new(sparqlConnection: SparqlConnection, dbusConnection: Gio.DBusConnection, objectPath: string | null, cancellable: Gio.Cancellable | null): EndpointDBus
    _init(config?: EndpointDBus.ConstructorProperties): void
}

export module EndpointHttp {

    // Signal callback interfaces

    /**
     * Signal callback interface for `block-remote-address`
     */
    export interface BlockRemoteAddressSignalCallback {
        (address: Gio.SocketAddress): boolean
    }


    // Constructor properties interface

    export interface ConstructorProperties extends Gio.Initable.ConstructorProperties, Endpoint.ConstructorProperties {

        // Own constructor properties of Tracker-3.0.Tracker.EndpointHttp

        httpCertificate?: Gio.TlsCertificate | null
        httpPort?: number | null
    }

}

export interface EndpointHttp extends Gio.Initable {

    // Own properties of Tracker-3.0.Tracker.EndpointHttp

    readonly httpCertificate: Gio.TlsCertificate
    readonly httpPort: number
    __gtype__: number

    // Own signals of Tracker-3.0.Tracker.EndpointHttp

    connect(sigName: "block-remote-address", callback: EndpointHttp.BlockRemoteAddressSignalCallback): number
    on(sigName: "block-remote-address", callback: EndpointHttp.BlockRemoteAddressSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "block-remote-address", callback: EndpointHttp.BlockRemoteAddressSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "block-remote-address", callback: EndpointHttp.BlockRemoteAddressSignalCallback): NodeJS.EventEmitter
    emit(sigName: "block-remote-address", ...args: any[]): void

    // Class property signals of Tracker-3.0.Tracker.EndpointHttp

    connect(sigName: "notify::http-certificate", callback: (...args: any[]) => void): number
    on(sigName: "notify::http-certificate", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::http-certificate", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::http-certificate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::http-certificate", ...args: any[]): void
    connect(sigName: "notify::http-port", callback: (...args: any[]) => void): number
    on(sigName: "notify::http-port", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::http-port", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::http-port", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::http-port", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::sparql-connection", callback: (...args: any[]) => void): number
    on(sigName: "notify::sparql-connection", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::sparql-connection", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::sparql-connection", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::sparql-connection", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * The <structname>TrackerEndpointHttp</structname> object represents a public
 * connection to a #TrackerSparqlConnection on a HTTP port.
 * @class 
 */
export class EndpointHttp extends Endpoint {

    // Own properties of Tracker-3.0.Tracker.EndpointHttp

    static name: string

    // Constructors of Tracker-3.0.Tracker.EndpointHttp

    constructor(config?: EndpointHttp.ConstructorProperties) 
    /**
     * Sets up a Tracker endpoint to listen via HTTP, in the given `port`.
     * If `certificate` is not %NULL, HTTPS may be used to connect to the
     * endpoint.
     * @constructor 
     * @param sparqlConnection a #TrackerSparqlConnection
     * @param port HTTP port to listen to
     * @param certificate certificate to use for encription, or %NULL
     * @param cancellable a #GCancellable, or %NULL
     * @returns a #TrackerEndpointDBus object.
     */
    constructor(sparqlConnection: SparqlConnection, port: number, certificate: Gio.TlsCertificate | null, cancellable: Gio.Cancellable | null) 
    /**
     * Sets up a Tracker endpoint to listen via HTTP, in the given `port`.
     * If `certificate` is not %NULL, HTTPS may be used to connect to the
     * endpoint.
     * @constructor 
     * @param sparqlConnection a #TrackerSparqlConnection
     * @param port HTTP port to listen to
     * @param certificate certificate to use for encription, or %NULL
     * @param cancellable a #GCancellable, or %NULL
     * @returns a #TrackerEndpointDBus object.
     */
    static new(sparqlConnection: SparqlConnection, port: number, certificate: Gio.TlsCertificate | null, cancellable: Gio.Cancellable | null): EndpointHttp
    _init(config?: EndpointHttp.ConstructorProperties): void
}

export module NamespaceManager {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface NamespaceManager {

    // Own properties of Tracker-3.0.Tracker.NamespaceManager

    __gtype__: number

    // Owm methods of Tracker-3.0.Tracker.NamespaceManager

    /**
     * Adds `prefix` as the recognised abbreviaton of `namespace`.
     * 
     * Only one prefix is allowed for a given namespace, and all prefixes must
     * be unique.
     * 
     * Since 3.3, This function may not be used on #TrackerNamespaceManager
     * instances that were obtained through
     * tracker_sparql_connection_get_namespace_manager().
     * @param prefix a short, unique prefix to identify `namespace`
     * @param ns the URL of the given namespace
     */
    addPrefix(prefix: string | null, ns: string | null): void
    /**
     * If `uri` begins with one of the namespaces known to this
     * #TrackerNamespaceManager, then the return value will be the
     * compressed URI. Otherwise, %NULL will be returned.
     * @param uri a URI or compact URI
     * @returns (nullable): the compressed URI
     */
    compressUri(uri: string | null): string | null
    /**
     * If `compact_uri` begins with one of the prefixes known to this
     * #TrackerNamespaceManager, then the return value will be the
     * expanded URI. Otherwise, a copy of `compact_uri` will be returned.
     * @param compactUri a URI or compact URI
     * @returns a newly-allocated string
     */
    expandUri(compactUri: string | null): string | null
    /**
     * Calls `func` for each known prefix / URI pair.
     * @param func the function to call for each prefix / URI pair
     */
    foreach(func: GLib.HFunc): void
    /**
     * Returns whether `prefix` is known.
     * @param prefix a string
     * @returns %TRUE if the #TrackerNamespaceManager knows about @prefix, %FALSE otherwise
     */
    hasPrefix(prefix: string | null): boolean
    /**
     * Looks up the namespace URI corresponding to `prefix,` or %NULL if the prefix
     * is not known.
     * @param prefix a string
     * @returns a string owned by the #TrackerNamespaceManager, or %NULL
     */
    lookupPrefix(prefix: string | null): string | null
    /**
     * Writes out all namespaces as Turtle `prefix` statements.
     * @returns a newly-allocated string
     */
    printTurtle(): string | null

    // Class property signals of Tracker-3.0.Tracker.NamespaceManager

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * The <structname>TrackerNamespaceManager</structname> object represents a
 * mapping of prefixes and namespaces.
 * @class 
 */
export class NamespaceManager extends GObject.Object {

    // Own properties of Tracker-3.0.Tracker.NamespaceManager

    static name: string

    // Constructors of Tracker-3.0.Tracker.NamespaceManager

    constructor(config?: NamespaceManager.ConstructorProperties) 
    /**
     * Creates a new #TrackerNamespaceManager instance.
     * @constructor 
     * @returns a new #TrackerNamespaceManager instance
     */
    constructor() 
    /**
     * Creates a new #TrackerNamespaceManager instance.
     * @constructor 
     * @returns a new #TrackerNamespaceManager instance
     */
    static new(): NamespaceManager
    _init(config?: NamespaceManager.ConstructorProperties): void
    /**
     * Returns the global #TrackerNamespaceManager that contains a set of well-known
     * namespaces and prefixes, such as rdf:, rdfs:, nie:, tracker:, etc.
     * 
     * Note that the list of prefixes and namespaces is hardcoded in
     * libtracker-sparql. It may not correspond with the installed set of
     * ontologies, if they have been modified since they were installed.
     * @returns a global, shared #TrackerNamespaceManager instance
     */
    static getDefault(): NamespaceManager
}

export module Notifier {

    // Signal callback interfaces

    /**
     * Signal callback interface for `events`
     */
    export interface EventsSignalCallback {
        (service: string | null, graph: string | null, events: NotifierEvent[]): void
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
    __gtype__: number

    // Own fields of Tracker-3.0.Tracker.Notifier

    parentInstance: GObject.Object

    // Owm methods of Tracker-3.0.Tracker.Notifier

    /**
     * Listens to notification events from a remote SPARQL endpoint as a DBus
     * service (see #TrackerEndpointDBus). If the `object_path` argument is
     * %NULL, the default "/org/freedesktop/Tracker3/Endpoint" path will be
     * used. If `graph` is %NULL, all graphs will be listened for.
     * 
     * The signal subscription can be removed with
     * tracker_notifier_signal_unsubscribe().
     * @param connection a #GDBusConnection
     * @param service DBus service name to subscribe to events for
     * @param objectPath DBus object path to subscribe to events for, or %NULL
     * @param graph graph to listen events for, or %NULL
     * @returns An ID for this subscription
     */
    signalSubscribe(connection: Gio.DBusConnection, service: string | null, objectPath: string | null, graph: string | null): number
    /**
     * Undoes a DBus signal subscription, the `handler_id` argument was previously
     * obtained with a tracker_notifier_signal_subscribe() call.
     * @param handlerId a handler ID obtained with tracker_notifier_signal_subscribe()
     */
    signalUnsubscribe(handlerId: number): void

    // Own signals of Tracker-3.0.Tracker.Notifier

    connect(sigName: "events", callback: Notifier.EventsSignalCallback): number
    on(sigName: "events", callback: Notifier.EventsSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "events", callback: Notifier.EventsSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "events", callback: Notifier.EventsSignalCallback): NodeJS.EventEmitter
    emit(sigName: "events", graph: string | null, events: NotifierEvent[], ...args: any[]): void

    // Class property signals of Tracker-3.0.Tracker.Notifier

    connect(sigName: "notify::connection", callback: (...args: any[]) => void): number
    on(sigName: "notify::connection", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::connection", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::connection", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::connection", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * The <structname>TrackerNotifier</structname> object allows subscribing
 * to changes in the stored data.
 * @class 
 */
export class Notifier extends GObject.Object {

    // Own properties of Tracker-3.0.Tracker.Notifier

    static name: string

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
    __gtype__: number

    // Own fields of Tracker-3.0.Tracker.Resource

    parentInstance: GObject.Object

    // Owm methods of Tracker-3.0.Tracker.Resource

    /**
     * Adds a boolean object to a multi-valued property.
     * @param propertyUri a string identifying the property to modify
     * @param value the property object
     */
    addBoolean(propertyUri: string | null, value: boolean): void
    /**
     * Adds GDateTime object to the multi-valued property.
     * @param propertyUri a string identifying the property to modify
     * @param value the property object
     */
    addDatetime(propertyUri: string | null, value: GLib.DateTime): void
    /**
     * Adds a double object to a multi-valued property.
     * @param propertyUri a string identifying the property to modify
     * @param value the property object
     */
    addDouble(propertyUri: string | null, value: number): void
    /**
     * Add 'value' to the list of values for given property.
     * 
     * You can pass any kind of GValue for `value,` but serialization functions will
     * normally only be able to serialize URIs/relationships and fundamental value
     * types (string, int, etc.).
     * @param propertyUri a string identifying the property to set
     * @param value an initialised #GValue
     */
    addGvalue(propertyUri: string | null, value: any): void
    /**
     * Adds an integer object to a multi-valued property.
     * @param propertyUri a string identifying the property to modify
     * @param value the property object
     */
    addInt(propertyUri: string | null, value: number): void
    /**
     * Adds an integer object to a multi-valued property.
     * @param propertyUri a string identifying the property to modify
     * @param value the property object
     */
    addInt64(propertyUri: string | null, value: number): void
    /**
     * Adds a resource object to a multi-valued property. This
     * function produces similar RDF to tracker_resource_add_uri(),
     * although in this function the URI will depend on the identifier
     * set on `resource`.
     * @param propertyUri a string identifying the property to modify
     * @param resource the property object
     */
    addRelation(propertyUri: string | null, resource: Resource): void
    /**
     * Adds a string object to a multi-valued property.
     * @param propertyUri a string identifying the property to modify
     * @param value the property object
     */
    addString(propertyUri: string | null, value: string | null): void
    /**
     * Adds a resource object to a multi-valued property. This
     * function produces similar RDF to tracker_resource_add_uri(),
     * although in this function the URI will depend on the identifier
     * set on `resource`. This function takes ownership of `resource`.
     * @param propertyUri a string identifying the property to modify
     * @param resource the property object
     */
    addTakeRelation(propertyUri: string | null, resource: Resource): void
    /**
     * Adds a resource object to a multi-valued property. This function
     * produces similar RDF to tracker_resource_add_relation(), although
     * it requires that the URI is previously known.
     * @param propertyUri a string identifying the property to modify
     * @param value the property object
     */
    addUri(propertyUri: string | null, value: string | null): void
    /**
     * Returns the first boolean object previously assigned to a property.
     * @param propertyUri a string identifying the property to look up
     * @returns the first boolean object
     */
    getFirstBoolean(propertyUri: string | null): boolean
    /**
     * Returns the first resource object previously assigned to a property.
     * @param propertyUri a string identifying the property to look up
     * @returns the first GDateTime object
     */
    getFirstDatetime(propertyUri: string | null): GLib.DateTime | null
    /**
     * Returns the first double object previously assigned to a property.
     * @param propertyUri a string identifying the property to look up
     * @returns the first double object
     */
    getFirstDouble(propertyUri: string | null): number
    /**
     * Returns the first integer object previously assigned to a property.
     * @param propertyUri a string identifying the property to look up
     * @returns the first integer object
     */
    getFirstInt(propertyUri: string | null): number
    /**
     * Returns the first integer object previously assigned to a property.
     * @param propertyUri a string identifying the property to look up
     * @returns the first integer object
     */
    getFirstInt64(propertyUri: string | null): number
    /**
     * Returns the first resource object previously assigned to a property.
     * @param propertyUri a string identifying the property to look up
     * @returns the first resource object
     */
    getFirstRelation(propertyUri: string | null): Resource | null
    /**
     * Returns the first string object previously assigned to a property.
     * @param propertyUri a string identifying the property to look up
     * @returns the first string object
     */
    getFirstString(propertyUri: string | null): string | null
    /**
     * Returns the first resource object previously assigned to a property.
     * @param propertyUri a string identifying the property to look up
     * @returns the first resource object as an URI.
     */
    getFirstUri(propertyUri: string | null): string | null
    /**
     * Returns the identifier of a resource.
     * 
     * If the identifier was set to NULL, the identifier returned will be a unique
     * SPARQL blank node identifier, such as "_:123".
     * @returns a string owned by the resource
     */
    getIdentifier(): string | null
    /**
     * Gets the list of properties defined in `resource`
     * @returns The list of properties.          The list should be freed with g_list_free().
     */
    getProperties(): string[]
    /**
     * Returns whether the prior values for this property would be deleted
     * in the SPARQL issued by `resource`.
     * @param propertyUri a string identifying the property to query
     * @returns #TRUE if the property would be overwritten
     */
    getPropertyOverwrite(propertyUri: string | null): boolean
    /**
     * Returns the list of all known values of the given property.
     * @param propertyUri a string identifying the property to look up
     * @returns a #GList of #GValue instances. The list should be freed with g_list_free()
     */
    getValues(propertyUri: string | null): any[] | null
    /**
     * A helper function that compares a #TrackerResource by its identifier
     * string.
     * @param identifier a string identifying the resource
     * @returns an integer less than, equal to, or greater than zero, if the          resource identifier is <, == or > than @identifier
     */
    identifierCompareFunc(identifier: string | null): number
    /**
     * Serialize all the information in `resource` as a JSON-LD document.
     * 
     * See <http://www.jsonld.org/> for more information on the JSON-LD
     * serialization format.
     * 
     * The `namespaces` object is used to expand any compact URI values. In most
     * cases you should pass the one returned by tracker_sparql_connection_get_namespace_manager()
     * from the connection that is the intended recipient of this data.
     * @param namespaces a set of prefixed URLs, or %NULL to use the     Nepomuk set
     * @returns a newly-allocated string containing JSON-LD data.
     */
    printJsonld(namespaces: NamespaceManager | null): string | null
    /**
     * Serialize all the information in `resource` into the selected RDF format.
     * 
     * The `namespaces` object is used to expand any compact URI values. In most
     * cases you should pass the one returned by tracker_sparql_connection_get_namespace_manager()
     * from the connection that is the intended recipient of this data.
     * @param namespaces a set of prefixed URLs
     * @param format RDF format of the printed string
     * @param graph target graph of the resource RDF, or %NULL for the default graph
     * @returns a newly-allocated string containing RDF data in the requested format.
     */
    printRdf(namespaces: NamespaceManager, format: RdfFormat, graph: string | null): string | null
    /**
     * Generates a SPARQL command to update a database with the information
     * stored in `resource`.
     * 
     * The `namespaces` object is used to expand any compact URI values. In most
     * cases you should pass the one returned by tracker_sparql_connection_get_namespace_manager()
     * from the connection that is the intended recipient of this data.
     * @param namespaces a set of prefixed URLs, or %NULL to use the     Nepomuk set
     * @param graphId the URN of the graph the data should be added to,     or %NULL
     * @returns a newly-allocated string containing a SPARQL update command.
     */
    printSparqlUpdate(namespaces: NamespaceManager | null, graphId: string | null): string | null
    /**
     * Serialize all the information in `resource` as a Turtle document.
     * 
     * The generated Turtle should correspond to this standard:
     * <https://www.w3.org/TR/2014/REC-turtle-20140225/>
     * 
     * The `namespaces` object is used to expand any compact URI values. In most
     * cases you should pass the one returned by tracker_sparql_connection_get_namespace_manager()
     * from the connection that is the intended recipient of this data.
     * @param namespaces a set of prefixed URLs, or %NULL to use the     Nepomuk set
     * @returns a newly-allocated string
     */
    printTurtle(namespaces: NamespaceManager | null): string | null
    /**
     * Serializes a #TrackerResource to a #GVariant in a lossless way.
     * All child resources are subsequently serialized. It is implied
     * that both ends use a common #TrackerNamespaceManager.
     * @returns A variant describing the resource,          the reference is floating.
     */
    serialize(): GLib.Variant | null
    /**
     * Sets a single-valued boolean object.
     * @param propertyUri a string identifying the property to modify
     * @param value the property object
     */
    setBoolean(propertyUri: string | null, value: boolean): void
    /**
     * Sets a single-valued GDateTime as a #TrackerResource
     * @param propertyUri a string identifying the property to modify
     * @param value the property object
     */
    setDatetime(propertyUri: string | null, value: GLib.DateTime): void
    /**
     * Sets a single-valued double object.
     * @param propertyUri a string identifying the property to modify
     * @param value the property object
     */
    setDouble(propertyUri: string | null, value: number): void
    /**
     * State that the only value for the given property is 'value'. Any existing
     * values for 'property' will be removed.
     * 
     * When serialising to SPARQL, any properties that were set with this function
     * will get a corresponding DELETE statement to remove any existing values in
     * the database.
     * 
     * You can pass any kind of GValue for `value,` but serialization functions will
     * normally only be able to serialize URIs/relationships and fundamental value
     * types (string, int, etc.).
     * @param propertyUri a string identifying the property to set
     * @param value an initialised #GValue
     */
    setGvalue(propertyUri: string | null, value: any): void
    /**
     * Changes the identifier of a #TrackerResource. The identifier should be a
     * URI or compact URI, but this is not necessarily enforced. Invalid
     * identifiers may cause errors when serializing the resource or trying to
     * insert the results in a database.
     * 
     * If the identifier is set to %NULL, a SPARQL blank node identifier such as
     * "_:123" is assigned to the resource.
     * @param identifier a string identifying the resource
     */
    setIdentifier(identifier: string | null): void
    /**
     * Sets a single-valued integer object.
     * @param propertyUri a string identifying the property to modify
     * @param value the property object
     */
    setInt(propertyUri: string | null, value: number): void
    /**
     * Sets a single-valued integer object.
     * @param propertyUri a string identifying the property to modify
     * @param value the property object
     */
    setInt64(propertyUri: string | null, value: number): void
    /**
     * Sets a single-valued resource object as a #TrackerResource. This
     * function produces similar RDF to tracker_resource_set_uri(),
     * although in this function the URI will depend on the identifier
     * set on `resource`.
     * @param propertyUri a string identifying the property to modify
     * @param resource the property object
     */
    setRelation(propertyUri: string | null, resource: Resource): void
    /**
     * Sets a single-valued string object.
     * @param propertyUri a string identifying the property to modify
     * @param value the property object
     */
    setString(propertyUri: string | null, value: string | null): void
    /**
     * Sets a single-valued resource object as a #TrackerResource. This
     * function produces similar RDF to tracker_resource_set_uri(),
     * although in this function the URI will depend on the identifier
     * set on `resource`. This function takes ownership of `resource`.
     * @param propertyUri a string identifying the property to modify
     * @param resource the property object
     */
    setTakeRelation(propertyUri: string | null, resource: Resource): void
    /**
     * Sets a single-valued resource object as a string URI. This function
     * produces similar RDF to tracker_resource_set_relation(), although
     * it requires that the URI is previously known.
     * @param propertyUri a string identifying the property to modify
     * @param value the property object
     */
    setUri(propertyUri: string | null, value: string | null): void

    // Class property signals of Tracker-3.0.Tracker.Resource

    connect(sigName: "notify::identifier", callback: (...args: any[]) => void): number
    on(sigName: "notify::identifier", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::identifier", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::identifier", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::identifier", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * The <structname>TrackerResource</structname> object represents information
 * about a given resource.
 * @class 
 */
export class Resource extends GObject.Object {

    // Own properties of Tracker-3.0.Tracker.Resource

    static name: string

    // Constructors of Tracker-3.0.Tracker.Resource

    constructor(config?: Resource.ConstructorProperties) 
    /**
     * Creates a TrackerResource instance.
     * @constructor 
     * @param identifier A string containing a URI, or %NULL.
     * @returns a newly created #TrackerResource. Free with g_object_unref() when done
     */
    constructor(identifier: string | null) 
    /**
     * Creates a TrackerResource instance.
     * @constructor 
     * @param identifier A string containing a URI, or %NULL.
     * @returns a newly created #TrackerResource. Free with g_object_unref() when done
     */
    static new(identifier: string | null): Resource
    _init(config?: Resource.ConstructorProperties): void
    /**
     * Deserializes a #TrackerResource previously serialized with
     * tracker_resource_serialize(). It is implied that both ends
     * use a common #TrackerNamespaceManager.
     * @param variant a #GVariant
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

    // Own properties of Tracker-3.0.Tracker.SparqlConnection

    __gtype__: number

    // Own fields of Tracker-3.0.Tracker.SparqlConnection

    parentInstance: GObject.Object

    // Owm methods of Tracker-3.0.Tracker.SparqlConnection

    /**
     * Closes a SPARQL connection. No other API calls than g_object_unref()
     * should happen after this call.
     * 
     * This call is blocking. All pending updates will be flushed, and the
     * store databases will be closed orderly. All ongoing SELECT queries
     * will be cancelled. Notifiers will no longer emit events.
     */
    close(): void
    /**
     * Closes a connection asynchronously. No other API calls than g_object_unref()
     * should happen after this call. See tracker_sparql_connection_close() for more
     * information.
     * @param cancellable a #GCancellable, or %NULL
     * @param callback user-defined #GAsyncReadyCallback to be called when            asynchronous operation is finished.
     */
    closeAsync(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes the asynchronous connection close.
     * @param res the #GAsyncResult
     * @returns %FALSE if some error occurred, %TRUE otherwise
     */
    closeFinish(res: Gio.AsyncResult): boolean
    /**
     * Creates a new batch to store and execute update commands. If the connection
     * is readonly or cannot issue SPARQL updates, %NULL will be returned.
     * @returns (nullable): A new #TrackerBatch
     */
    createBatch(): Batch
    /**
     * Creates a new #TrackerNotifier to notify about changes in `connection`.
     * See #TrackerNotifier documentation for information about how to use this
     * object.
     * @returns a newly created notifier. Free with g_object_unref()          when no longer needed.
     */
    createNotifier(): Notifier
    /**
     * Incorporates the contents of the RDF data contained in `stream` into the
     * data stored by `connection`. This is an asynchronous operation,
     * `callback` will be invoked when the data has been fully inserted to
     * `connection`.
     * 
     * RDF data will be inserted in the given `default_graph` if one is provided,
     * or the default graph if `default_graph` is %NULL. Any RDF data that has a
     * graph specified (e.g. using the `GRAPH` clause in the Trig format) will
     * be inserted in the specified graph instead of `default_graph`.
     * 
     * The `flags` argument is reserved for future expansions, currently
     * %TRACKER_DESERIALIZE_FLAGS_NONE must be passed.
     * @param flags deserialization flags
     * @param format RDF format of data in stream
     * @param defaultGraph default graph that will receive the RDF data
     * @param stream input stream with RDF data
     * @param cancellable a #GCancellable
     * @param callback the #GAsyncReadyCallback called when the operation completes
     */
    deserializeAsync(flags: DeserializeFlags, format: RdfFormat, defaultGraph: string | null, stream: Gio.InputStream, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes a tracker_sparql_connection_deserialize_async() operation.
     * In case of error, %NULL will be returned and `error` will be set.
     * @param result the #GAsyncResult
     * @returns %TRUE if all data was inserted successfully.
     */
    deserializeFinish(result: Gio.AsyncResult): boolean
    /**
     * Retrieves a #TrackerNamespaceManager that contains all
     * prefixes in the ontology of `connection`.
     * @returns a #TrackerNamespaceManager for this connection. This object is owned by @connection and must not be freed.
     */
    getNamespaceManager(): NamespaceManager
    /**
     * Prepares a #TrackerSparqlStatement for the SPARQL query contained as a resource
     * file at `resource_path`. SPARQL Query files typically have the .rq extension.
     * @param resourcePath the resource path of the file to parse.
     * @param cancellable a #GCancellable, or %NULL
     * @returns a prepared statement
     */
    loadStatementFromGresource(resourcePath: string | null, cancellable: Gio.Cancellable | null): SparqlStatement | null
    /**
     * Maps `service_connection` so it is available as a "private:`handle_name"` URI
     * in `connection`. This can be accessed via the SERVICE SPARQL syntax in
     * queries from `connection`. E.g.:
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
     * #TrackerSparqlConnection instances maintained by the same process,
     * without creating a public endpoint for `service_connection`.
     * 
     * `connection` may only be a #TrackerSparqlConnection created via
     * tracker_sparql_connection_new() and tracker_sparql_connection_new_async().
     * @param handleName handle name for `service_connection`
     * @param serviceConnection a #TrackerSparqlConnection to use from `connection`
     */
    mapConnection(handleName: string | null, serviceConnection: SparqlConnection): void
    /**
     * Executes a SPARQL query on. The API call is completely synchronous, so
     * it may block.
     * 
     * The `sparql` query should be built with #TrackerResource, or
     * its parts correctly escaped using tracker_sparql_escape_string(),
     * otherwise SPARQL injection is possible.
     * @param sparql string containing the SPARQL query
     * @param cancellable a #GCancellable used to cancel the operation
     * @returns a #TrackerSparqlCursor if results were found. On error, #NULL is returned and the @error is set accordingly. Call g_object_unref() on the returned cursor when no longer needed.
     */
    query(sparql: string | null, cancellable: Gio.Cancellable | null): SparqlCursor
    /**
     * Executes asynchronously a SPARQL query.
     * @param sparql string containing the SPARQL query
     * @param cancellable a #GCancellable used to cancel the operation
     * @param callback user-defined #GAsyncReadyCallback to be called when            asynchronous operation is finished.
     */
    queryAsync(sparql: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes the asynchronous SPARQL query operation.
     * @param res a #GAsyncResult with the result of the operation
     * @returns a #TrackerSparqlCursor if results were found. On error, #NULL is returned and the @error is set accordingly. Call g_object_unref() on the returned cursor when no longer needed.
     */
    queryFinish(res: Gio.AsyncResult): SparqlCursor
    /**
     * Prepares the given SELECT/DESCRIBE/CONSTRUCT `sparql` as a #TrackerSparqlStatement.
     * This prepared statement can be executed through tracker_sparql_statement_execute()
     * or tracker_sparql_statement_serialize_async() families of functions.
     * @param sparql the SPARQL query
     * @param cancellable a #GCancellable used to cancel the operation, or %NULL
     * @returns a prepared statement
     */
    queryStatement(sparql: string | null, cancellable: Gio.Cancellable | null): SparqlStatement | null
    /**
     * Serializes data into the specified RDF format. `query` must be either a
     * `DESCRIBE` or `CONSTRUCT` query. This is an asynchronous operation,
     * `callback` will be invoked when the data is available for reading.
     * 
     * The SPARQL endpoint may not support the specified format, in that case
     * an error will be raised.
     * 
     * The `flags` argument is reserved for future expansions, currently
     * %TRACKER_SERIALIZE_FLAGS_NONE must be passed.
     * @param flags serialization flags
     * @param format output RDF format
     * @param query SPARQL query
     * @param cancellable a #GCancellable
     * @param callback the #GAsyncReadyCallback called when the operation completes
     */
    serializeAsync(flags: SerializeFlags, format: RdfFormat, query: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes a tracker_sparql_connection_serialize_async() operation.
     * In case of error, %NULL will be returned and `error` will be set.
     * @param result the #GAsyncResult
     * @returns a #GInputStream to read RDF content.
     */
    serializeFinish(result: Gio.AsyncResult): Gio.InputStream
    /**
     * Executes a SPARQL update. The API call is completely
     * synchronous, so it may block.
     * 
     * The `sparql` query should be built with #TrackerResource, or
     * its parts correctly escaped using tracker_sparql_escape_string(),
     * otherwise SPARQL injection is possible.
     * @param sparql string containing the SPARQL update query
     * @param cancellable a #GCancellable used to cancel the operation
     */
    update(sparql: string | null, cancellable: Gio.Cancellable | null): void
    /**
     * Executes asynchronously an array of SPARQL updates. All updates in the
     * array are handled within a single transaction.
     * @param sparql an array of strings containing the SPARQL update queries
     * @param sparqlLength the amount of strings you pass as `sparql`
     * @param cancellable a #GCancellable used to cancel the operation
     * @param callback user-defined #GAsyncReadyCallback to be called when            asynchronous operation is finished.
     */
    updateArrayAsync(sparql: string | null, sparqlLength: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes the asynchronous SPARQL update_array operation.
     * @param res a #GAsyncResult with the result of the operation
     * @returns #TRUE if there were no errors.
     */
    updateArrayFinish(res: Gio.AsyncResult): boolean
    /**
     * Executes asynchronously a SPARQL update.
     * @param sparql string containing the SPARQL update query
     * @param cancellable a #GCancellable used to cancel the operation
     * @param callback user-defined #GAsyncReadyCallback to be called when            asynchronous operation is finished.
     */
    updateAsync(sparql: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Executes a SPARQL update and returns the URNs of the generated nodes,
     * if any. The API call is completely synchronous, so it may block.
     * 
     * The `sparql` query should be built with #TrackerResource, or
     * its parts correctly escaped using tracker_sparql_escape_string(),
     * otherwise SPARQL injection is possible.
     * 
     * The format string of the `GVariant` is `aaa{ss}` (an array of an array
     * of dictionaries). The first array represents each INSERT that may exist in
     * the SPARQL string. The second array represents each new node for a given
     * WHERE clause. The last array holds a string pair with the blank node name
     * (e.g. `foo` for the blank node `_:foo`) and the URN that was generated for
     * it. For most updates the first two outer arrays will only contain one item.
     * @param sparql string containing the SPARQL update query
     * @param cancellable a #GCancellable used to cancel the operation
     * @returns a #GVariant with the generated URNs, which should be freed with g_variant_unref() when no longer used.
     */
    updateBlank(sparql: string | null, cancellable: Gio.Cancellable | null): GLib.Variant
    /**
     * Executes asynchronously a SPARQL update with blank nodes. See
     * the tracker_sparql_connection_update_blank() documentation to
     * see the differences with tracker_sparql_connection_update().
     * @param sparql string containing the SPARQL update query
     * @param cancellable a #GCancellable used to cancel the operation
     * @param callback user-defined #GAsyncReadyCallback to be called when            asynchronous operation is finished.
     */
    updateBlankAsync(sparql: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes the asynchronous SPARQL update operation, and returns
     * the URNs of the generated nodes, if any. See the
     * tracker_sparql_connection_update_blank() documentation for the interpretation
     * of the returned #GVariant.
     * @param res a #GAsyncResult with the result of the operation
     * @returns a #GVariant with the generated URNs, which should be freed with g_variant_unref() when no longer used.
     */
    updateBlankFinish(res: Gio.AsyncResult): GLib.Variant
    /**
     * Finishes the asynchronous SPARQL update operation.
     * @param res a #GAsyncResult with the result of the operation
     */
    updateFinish(res: Gio.AsyncResult): void
    /**
     * Inserts a resource as described by `resource,` on the graph described by `graph`.
     * This operation blocks until done.
     * @param graph RDF graph where the resource should be inserted/updated, or %NULL for the default graph
     * @param resource a #TrackerResource
     * @param cancellable a #GCancellable, or %NULL
     * @returns #TRUE if there were no errors.
     */
    updateResource(graph: string | null, resource: Resource, cancellable: Gio.Cancellable | null): boolean
    /**
     * Inserts a resource as described by `resource,` on the graph described by `graph`.
     * This operation is executed asynchronously, when finished `callback` will be
     * executed.
     * @param graph RDF graph where the resource should be inserted/updated, or %NULL for the default graph
     * @param resource a #TrackerResource
     * @param cancellable a #GCancellable, or %NULL
     * @param callback the #GAsyncReadyCallback called when the operation completes
     */
    updateResourceAsync(graph: string | null, resource: Resource, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes a tracker_sparql_connection_update_resource_async() operation.
     * @param res a #GAsyncResult with the result of the operation
     * @returns #TRUE if there were no errors.
     */
    updateResourceFinish(res: Gio.AsyncResult): boolean
    /**
     * Prepares the given INSERT/DELETE/LOAD/CLEAR/DROP/ADD/MOVE/COPY/CREATE `sparql`
     * as a #TrackerSparqlStatement. This prepared statement can be executed through
     * the tracker_sparql_statement_update() family of functions.
     * @param sparql the SPARQL update
     * @param cancellable a #GCancellable used to cancel the operation, or %NULL
     * @returns a prepared statement
     */
    updateStatement(sparql: string | null, cancellable: Gio.Cancellable | null): SparqlStatement | null

    // Class property signals of Tracker-3.0.Tracker.SparqlConnection

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * The <structname>TrackerSparqlConnection</structname> object represents a
 * SPARQL connection.
 * @class 
 */
export class SparqlConnection extends GObject.Object {

    // Own properties of Tracker-3.0.Tracker.SparqlConnection

    static name: string

    // Constructors of Tracker-3.0.Tracker.SparqlConnection

    constructor(config?: SparqlConnection.ConstructorProperties) 
    /**
     * Connects to a database owned by another process on the
     * local machine.
     * @constructor 
     * @param serviceName The name of the D-Bus service to connect to.
     * @param objectPath The path to the object, or %NULL to use the default.
     * @param dbusConnection The #GDBusConnection to use, or %NULL to use the session bus
     * @returns a new #TrackerSparqlConnection. Call g_object_unref() on the object when no longer used.
     */
    static busNew(serviceName: string | null, objectPath: string | null, dbusConnection: Gio.DBusConnection | null): SparqlConnection
    /**
     * Completion function for tracker_sparql_connection_bus_new_async().
     * @constructor 
     * @param result the #GAsyncResult
     * @returns a new #TrackerSparqlConnection. Call g_object_unref() on the object when no longer used.
     */
    static busNewFinish(result: Gio.AsyncResult): SparqlConnection
    /**
     * Creates or opens a database.
     * 
     * This method should only be used for databases owned by the current process.
     * To connect to databases managed by other processes, use
     * tracker_sparql_connection_bus_new().
     * 
     * If `store` is %NULL, the database will be created in memory.
     * 
     * The `ontologies` parameter must point to a location containing suitable
     * `.ontology` files in Turtle format. These control the database schema that
     * is used. You can use the default Nepomuk ontologies by calling
     * tracker_sparql_get_ontology_nepomuk ().
     * 
     * If you open an existing database using a different `ontology` to the one it
     * was created with, Tracker will attempt to migrate the existing data to the
     * new schema. This may raise an error. In particular, not all migrations are
     * possible without causing data loss and Tracker will refuse to delete data
     * during a migration.
     * 
     * You can also pass %NULL for `ontologies` to mean "use the ontologies that the
     * database was created with". This will fail if the database doesn't already
     * exist.
     * @constructor 
     * @param flags values from #TrackerSparqlConnectionFlags
     * @param store the directory that contains the database as a #GFile, or %NULL
     * @param ontology the directory that contains the database schemas as a #GFile, or %NULL
     * @param cancellable a #GCancellable, or %NULL
     * @returns a new #TrackerSparqlConnection. Call g_object_unref() on the object when no longer used.
     */
    constructor(flags: SparqlConnectionFlags, store: Gio.File | null, ontology: Gio.File | null, cancellable: Gio.Cancellable | null) 
    /**
     * Creates or opens a database.
     * 
     * This method should only be used for databases owned by the current process.
     * To connect to databases managed by other processes, use
     * tracker_sparql_connection_bus_new().
     * 
     * If `store` is %NULL, the database will be created in memory.
     * 
     * The `ontologies` parameter must point to a location containing suitable
     * `.ontology` files in Turtle format. These control the database schema that
     * is used. You can use the default Nepomuk ontologies by calling
     * tracker_sparql_get_ontology_nepomuk ().
     * 
     * If you open an existing database using a different `ontology` to the one it
     * was created with, Tracker will attempt to migrate the existing data to the
     * new schema. This may raise an error. In particular, not all migrations are
     * possible without causing data loss and Tracker will refuse to delete data
     * during a migration.
     * 
     * You can also pass %NULL for `ontologies` to mean "use the ontologies that the
     * database was created with". This will fail if the database doesn't already
     * exist.
     * @constructor 
     * @param flags values from #TrackerSparqlConnectionFlags
     * @param store the directory that contains the database as a #GFile, or %NULL
     * @param ontology the directory that contains the database schemas as a #GFile, or %NULL
     * @param cancellable a #GCancellable, or %NULL
     * @returns a new #TrackerSparqlConnection. Call g_object_unref() on the object when no longer used.
     */
    static new(flags: SparqlConnectionFlags, store: Gio.File | null, ontology: Gio.File | null, cancellable: Gio.Cancellable | null): SparqlConnection
    /**
     * Completion function for tracker_sparql_connection_new_async().
     * @constructor 
     * @param result the #GAsyncResult
     */
    static newFinish(result: Gio.AsyncResult): SparqlConnection
    /**
     * Connects to a remote SPARQL endpoint. The connection is made using the libsoup
     * HTTP library. The connection will normally use the http:// or https:// protocol.
     * @constructor 
     * @param uriBase Base URI of the remote connection
     * @returns a new remote #TrackerSparqlConnection. Call g_object_unref() on the object when no longer used.
     */
    static remoteNew(uriBase: string | null): SparqlConnection
    _init(config?: SparqlConnection.ConstructorProperties): void
    /**
     * Asynchronous version of tracker_sparql_connection_new().
     * @param flags values from #TrackerSparqlConnectionFlags
     * @param store the directory that contains the database as a #GFile, or %NULL
     * @param ontology the directory that contains the database schemas as a #GFile, or %NULL
     * @param cancellable a #GCancellable, or %NULL
     * @param callback the #GAsyncReadyCallback called when the operation completes
     */
    static newAsync(flags: SparqlConnectionFlags, store: Gio.File | null, ontology: Gio.File | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Connects to a database owned by another process on the
     * local machine. This is an asynchronous operation.
     * @param serviceName The name of the D-Bus service to connect to.
     * @param objectPath The path to the object, or %NULL to use the default.
     * @param dbusConnection The #GDBusConnection to use, or %NULL to use the session bus
     * @param cancellable a #GCancellable, or %NULL
     * @param callback the #GAsyncReadyCallback called when the operation completes
     */
    static busNewAsync(serviceName: string | null, objectPath: string | null, dbusConnection: Gio.DBusConnection | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
}

export module SparqlCursor {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Tracker-3.0.Tracker.SparqlCursor

        /**
         * The #TrackerSparqlConnection used to retrieve the results.
         */
        connection?: SparqlConnection | null
    }

}

export interface SparqlCursor {

    // Own properties of Tracker-3.0.Tracker.SparqlCursor

    /**
     * The #TrackerSparqlConnection used to retrieve the results.
     */
    readonly connection: SparqlConnection
    readonly nColumns: number
    __gtype__: number

    // Own fields of Tracker-3.0.Tracker.SparqlCursor

    parentInstance: GObject.Object

    // Owm methods of Tracker-3.0.Tracker.SparqlCursor

    /**
     * Closes the iterator, making it invalid.
     */
    close(): void
    /**
     * Retrieve a boolean for the current row in `column`.
     * @param column column number to retrieve (first one is 0)
     * @returns a #gboolean.
     */
    getBoolean(column: number): boolean
    /**
     * Returns the #TrackerSparqlConnection associated with this
     * #TrackerSparqlCursor.
     * @returns the cursor #TrackerSparqlConnection. The returned object must not be unreferenced by the caller.
     */
    getConnection(): SparqlConnection
    /**
     * Retrieve an GDateTime pointer for the current row in `column`.
     * @param column column number to retrieve (first one is 0)
     * @returns #GDateTime object, or %NULL if the given column does not contain a xsd:date or xsd:dateTime
     */
    getDatetime(column: number): GLib.DateTime | null
    /**
     * Retrieve a double for the current row in `column`.
     * @param column column number to retrieve (first one is 0)
     * @returns a double.
     */
    getDouble(column: number): number
    /**
     * Retrieve an integer for the current row in `column`.
     * @param column column number to retrieve (first one is 0)
     * @returns a #gint64.
     */
    getInteger(column: number): number
    /**
     * This method should only be called after a successful
     * tracker_sparql_cursor_next(); otherwise its return value
     * will be undefined.
     * @returns a #gint representing the number of columns available in the results to iterate.
     */
    getNColumns(): number
    /**
     * Retrieves a string representation of the data in the current
     * row in `column`.
     * @param column column number to retrieve (first one is 0)
     * @returns a string which must not be freed. %NULL is returned if the column is not in the [0,#n_columns] range.
     */
    getString(column: number): [ /* returnType */ string | null, /* length */ number | null ]
    /**
     * The data type bound to the current row in `column` is returned.
     * @param column column number to retrieve (first one is 0)
     * @returns a #TrackerSparqlValueType.
     */
    getValueType(column: number): SparqlValueType
    /**
     * Retrieves the variable name for the current row in `column`.
     * @param column column number to retrieve (first one is 0)
     * @returns a string which must not be freed.
     */
    getVariableName(column: number): string | null
    /**
     * If the current row and `column` are bound to a value, %TRUE is returned.
     * @param column column number to retrieve (first one is 0)
     * @returns a %TRUE or %FALSE.
     */
    isBound(column: number): boolean
    /**
     * Iterates to the next result. This is completely synchronous and
     * it may block.
     * @param cancellable a #GCancellable used to cancel the operation
     * @returns %FALSE if no more results found, otherwise %TRUE.
     */
    next(cancellable: Gio.Cancellable | null): boolean
    /**
     * Iterates, asynchronously, to the next result.
     * @param cancellable a #GCancellable used to cancel the operation
     * @param callback user-defined #GAsyncReadyCallback to be called when            asynchronous operation is finished.
     */
    nextAsync(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes the asynchronous iteration to the next result.
     * @param res a #GAsyncResult with the result of the operation
     * @returns %FALSE if no more results found, otherwise %TRUE.
     */
    nextFinish(res: Gio.AsyncResult): boolean
    /**
     * Resets the iterator to point back to the first result.
     */
    rewind(): void

    // Class property signals of Tracker-3.0.Tracker.SparqlCursor

    connect(sigName: "notify::connection", callback: (...args: any[]) => void): number
    on(sigName: "notify::connection", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::connection", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::connection", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::connection", ...args: any[]): void
    connect(sigName: "notify::n-columns", callback: (...args: any[]) => void): number
    on(sigName: "notify::n-columns", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::n-columns", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::n-columns", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::n-columns", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * The <structname>TrackerSparqlCursor</structname> object represents an
 * iterator of results.
 * @class 
 */
export class SparqlCursor extends GObject.Object {

    // Own properties of Tracker-3.0.Tracker.SparqlCursor

    static name: string

    // Constructors of Tracker-3.0.Tracker.SparqlCursor

    constructor(config?: SparqlCursor.ConstructorProperties) 
    _init(config?: SparqlCursor.ConstructorProperties): void
}

export module SparqlStatement {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Tracker-3.0.Tracker.SparqlStatement

        /**
         * The #TrackerSparqlConnection used to perform the query.
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
     * The #TrackerSparqlConnection used to perform the query.
     */
    readonly connection: SparqlConnection
    /**
     * SPARQL query stored in this statement.
     */
    readonly sparql: string | null
    __gtype__: number

    // Own fields of Tracker-3.0.Tracker.SparqlStatement

    parentInstance: GObject.Object

    // Owm methods of Tracker-3.0.Tracker.SparqlStatement

    /**
     * Binds the boolean `value` to variable `name`.
     * @param name variable name
     * @param value value
     */
    bindBoolean(name: string | null, value: boolean): void
    /**
     * Binds the GDateTime `value` to variable `name`.
     * @param name variable name
     * @param value value
     */
    bindDatetime(name: string | null, value: GLib.DateTime): void
    /**
     * Binds the double `value` to variable `name`.
     * @param name variable name
     * @param value value
     */
    bindDouble(name: string | null, value: number): void
    /**
     * Binds the integer `value` to variable `name`.
     * @param name variable name
     * @param value value
     */
    bindInt(name: string | null, value: number): void
    /**
     * Binds the string `value` to variable `name`.
     * @param name variable name
     * @param value value
     */
    bindString(name: string | null, value: string | null): void
    /**
     * Clears all boolean/string/integer/double bindings.
     */
    clearBindings(): void
    /**
     * Executes the SPARQL query with the currently bound values.
     * 
     * This function should only be called on #TrackerSparqlStatement objects
     * obtained through tracker_sparql_connection_query_statement() or
     * SELECT/CONSTRUCT/DESCRIBE statements loaded through
     * tracker_sparql_connection_load_statement_from_gresource().
     * @param cancellable a #GCancellable used to cancel the operation
     * @returns A #TrackerSparqlCursor
     */
    execute(cancellable: Gio.Cancellable | null): SparqlCursor
    /**
     * Asynchronously executes the SPARQL query with the currently bound values.
     * 
     * This function should only be called on #TrackerSparqlStatement objects
     * obtained through tracker_sparql_connection_query_statement() or
     * SELECT/CONSTRUCT/DESCRIBE statements loaded through
     * tracker_sparql_connection_load_statement_from_gresource().
     * @param cancellable a #GCancellable used to cancel the operation
     * @param callback user-defined #GAsyncReadyCallback to be called when            asynchronous operation is finished.
     */
    executeAsync(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes the asynchronous operation started through
     * tracker_sparql_statement_execute_async().
     * @param res The #GAsyncResult from the callback used to return the #TrackerSparqlCursor
     * @returns A #TrackerSparqlCursor
     */
    executeFinish(res: Gio.AsyncResult): SparqlCursor
    /**
     * Returns the #TrackerSparqlConnection that this statement was created from.
     * @returns The SPARQL connection of this statement.
     */
    getConnection(): SparqlConnection
    /**
     * Returns the SPARQL string that this prepared statement holds.
     * @returns The contained SPARQL query
     */
    getSparql(): string | null
    /**
     * Serializes data into the specified RDF format. The query `stmt` was
     * created from must be either a `DESCRIBE` or `CONSTRUCT` query, an
     * error will be raised otherwise.
     * 
     * This is an asynchronous operation, `callback` will be invoked when the
     * data is available for reading.
     * 
     * The SPARQL endpoint may not support the specified format, in that case
     * an error will be raised.
     * 
     * The `flags` argument is reserved for future expansions, currently
     * %TRACKER_SERIALIZE_FLAGS_NONE must be passed.
     * @param flags serialization flags
     * @param format RDF format of the serialized data
     * @param cancellable a #GCancellable used to cancel the operation
     * @param callback user-defined #GAsyncReadyCallback to be called when            asynchronous operation is finished.
     */
    serializeAsync(flags: SerializeFlags, format: RdfFormat, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes a tracker_sparql_statement_serialize_async() operation.
     * In case of error, %NULL will be returned and `error` will be set.
     * @param result the #GAsyncResult
     * @returns a #GInputStream to read RDF content.
     */
    serializeFinish(result: Gio.AsyncResult): Gio.InputStream
    /**
     * Executes the SPARQL update with the currently bound values.
     * 
     * This function should only be called on #TrackerSparqlStatement objects
     * obtained through tracker_sparql_connection_update_statement() or
     * update statements loaded through tracker_sparql_connection_load_statement_from_gresource().
     * @param cancellable a #GCancellable used to cancel the operation
     * @returns %TRUE if the update finished with no errors, %FALSE otherwise
     */
    update(cancellable: Gio.Cancellable | null): boolean
    /**
     * Asynchronously executes the SPARQL update query with the currently bound values.
     * 
     * This function should only be called on #TrackerSparqlStatement objects
     * obtained through tracker_sparql_connection_update_statement() or
     * update statements loaded through tracker_sparql_connection_load_statement_from_gresource().
     * @param cancellable a #GCancellable used to cancel the operation
     * @param callback user-defined #GAsyncReadyCallback to be called when            asynchronous operation is finished.
     */
    updateAsync(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes the asynchronous update started through
     * tracker_sparql_statement_update_async().
     * @param result The #GAsyncResult from the callback used to return the #TrackerSparqlCursor
     * @returns %TRUE if the update finished with no errors, %FALSE otherwise
     */
    updateFinish(result: Gio.AsyncResult): boolean

    // Class property signals of Tracker-3.0.Tracker.SparqlStatement

    connect(sigName: "notify::connection", callback: (...args: any[]) => void): number
    on(sigName: "notify::connection", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::connection", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::connection", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::connection", ...args: any[]): void
    connect(sigName: "notify::sparql", callback: (...args: any[]) => void): number
    on(sigName: "notify::sparql", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::sparql", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::sparql", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::sparql", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * The <structname>TrackerSparqlStatement</structname> object represents
 * a prepared query statement.
 * @class 
 */
export class SparqlStatement extends GObject.Object {

    // Own properties of Tracker-3.0.Tracker.SparqlStatement

    static name: string

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

    parentClass: GObject.ObjectClass
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
    getEventType(): NotifierEventType
    /**
     * Returns the tracker:id of the element being notified upon. This is a #gint64
     * which is used as efficient internal identifier for the resource.
     * @returns the resource ID
     */
    getId(): number
    /**
     * Returns the Uniform Resource Name of the element. This is Tracker's
     * public identifier for the resource.
     * 
     * This URN is an unique string identifier for the resource being
     * notified upon, typically of the form "urn:uuid:...".
     * @returns The element URN
     */
    getUrn(): string | null
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

// END