// @ts-nocheck

/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * Tracker-3.0
 */

import type Gio from './Gio-2.0';
import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';

export namespace Tracker {

/**
 * Notifier event types.
 */
enum NotifierEventType {
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
enum RdfFormat {
    RDF_FORMAT_TURTLE,
    RDF_FORMAT_TRIG,
    N_RDF_FORMATS,
}
enum SerializeFlags {
    SERIALIZE_FLAGS_NONE,
}
/**
 * Error domain for Tracker Sparql. Errors in this domain will be from the
 * #TrackerSparqlError enumeration. See #GError for more information on error
 * domains.
 */
enum SparqlError {
    /**
     * Subject is not in the domain of a property or
     *                             trying to set multiple values for a single valued
     *                             property.
     */
    ERROR_CONSTRAINT,
    /**
     * Internal error.
     */
    ERROR_INTERNAL,
    /**
     * There was no disk space available to perform the request.
     */
    ERROR_NO_SPACE,
    /**
     * The specified ontology wasn't found.
     */
    ERROR_ONTOLOGY_NOT_FOUND,
    /**
     * Problem encounted while opening the database.
     */
    ERROR_OPEN_ERROR,
    /**
     * Error parsing the SPARQL string.
     */
    ERROR_PARSE,
    /**
     * Problem while executing the query.
     */
    ERROR_QUERY_FAILED,
    /**
     * Type constraint failed when trying to insert data.
     */
    ERROR_TYPE,
    /**
     * Unknown class.
     */
    ERROR_UNKNOWN_CLASS,
    /**
     * Unknown graph.
     */
    ERROR_UNKNOWN_GRAPH,
    /**
     * Unknown property.
     */
    ERROR_UNKNOWN_PROPERTY,
    /**
     * Unsupported feature or method.
     */
    ERROR_UNSUPPORTED,
    /**
     * The ontology doesn't contain nrl:lastModified header
     */
    ERROR_MISSING_LAST_MODIFIED_HEADER,
    /**
     * The property is not completely defined.
     */
    ERROR_INCOMPLETE_PROPERTY_DEFINITION,
    /**
     * The total number of error codes.
     */
    N_ERRORS,
}
/**
 * Enumeration with the possible types of the cursor's cells
 */
enum SparqlValueType {
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
enum SparqlConnectionFlags {
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
const PREFIX_DC: string
/**
 * The Prefix of the MFO namespace
 */
const PREFIX_MFO: string
/**
 * The Prefix of the NAO namespace
 */
const PREFIX_NAO: string
/**
 * The Prefix of the NCO namespace
 */
const PREFIX_NCO: string
/**
 * The Prefix of the NFO namespace
 */
const PREFIX_NFO: string
/**
 * The Prefix of the NIE namespace
 */
const PREFIX_NIE: string
/**
 * The Prefix of the RDF namespace
 */
const PREFIX_NMM: string
/**
 * The Prefix of the NRL namespace
 */
const PREFIX_NRL: string
/**
 * The Prefix of the Osinfo namespace
 */
const PREFIX_OSINFO: string
/**
 * The Prefix of the RDF namespace
 */
const PREFIX_RDF: string
/**
 * The Prefix of the RDFS namespace
 */
const PREFIX_RDFS: string
/**
 * The Prefix of the SLO namespace
 */
const PREFIX_SLO: string
/**
 * The Prefix of the Tracker namespace
 */
const PREFIX_TRACKER: string
/**
 * The Prefix of the XSD namespace
 */
const PREFIX_XSD: string
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
 */
function checkVersion(requiredMajor: number, requiredMinor: number, requiredMicro: number): string
function sparqlErrorQuark(): GLib.Quark
/**
 * Escapes `literal` so it is suitable for insertion in
 * SPARQL queries as string literals. Manual construction
 * of query strings based user input is best avoided at
 * all cost, use of #TrackerSparqlStatement is recommended
 * instead.
 * @param literal a string to escape
 */
function sparqlEscapeString(literal: string): string
/**
 * Calls tracker_sparql_escape_uri_printf().
 * @param uri a string to be escaped, following the tracker sparql rules
 */
function sparqlEscapeUri(uri: string): string
/**
 * Returns a path to the built-in Nepomuk ontologies.
 */
function sparqlGetOntologyNepomuk(): Gio.File
/**
 * Creates a fresh UUID-based URN.
 */
function sparqlGetUuidUrn(): string
interface Batch_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of Tracker-3.0.Tracker.Batch

    /**
     * The #TrackerSparqlConnection the batch belongs to.
     */
    connection?: SparqlConnection | null
}

interface Batch {

    // Own properties of Tracker-3.0.Tracker.Batch

    /**
     * The #TrackerSparqlConnection the batch belongs to.
     */
    readonly connection: SparqlConnection

    // Own fields of Tracker-3.0.Tracker.Batch

    parentInstance: GObject.Object

    // Owm methods of Tracker-3.0.Tracker.Batch

    /**
     * Adds the RDF represented by `resource` to `batch`.
     * @param graph RDF graph to insert the resource to
     * @param resource a #TrackerResource
     */
    addResource(graph: string, resource: Resource): void
    /**
     * Adds an SPARQL update string to `batch`.
     * @param sparql a SPARQL update string
     */
    addSparql(sparql: string): void
    /**
     * Executes the batch. This operations happens synchronously.
     * @param cancellable a #GCancellable, or %NULL
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
     */
    executeFinish(res: Gio.AsyncResult): boolean
    /**
     * Returns the #TrackerSparqlConnection that this batch was created from.
     */
    getConnection(): SparqlConnection

    // Class property signals of Tracker-3.0.Tracker.Batch

    connect(sigName: "notify::connection", callback: (...args: any[]) => void): number
    on(sigName: "notify::connection", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::connection", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::connection", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::connection", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class Batch extends GObject.Object {

    // Own properties of Tracker-3.0.Tracker.Batch

    static name: string
    static $gtype: GObject.GType<Batch>

    // Constructors of Tracker-3.0.Tracker.Batch

    constructor(config?: Batch_ConstructProps) 
    _init(config?: Batch_ConstructProps): void
}

interface Endpoint_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of Tracker-3.0.Tracker.Endpoint

    sparqlConnection?: SparqlConnection | null
}

interface Endpoint {

    // Own properties of Tracker-3.0.Tracker.Endpoint

    readonly sparqlConnection: SparqlConnection

    // Own fields of Tracker-3.0.Tracker.Endpoint

    parentInstance: GObject.Object

    // Owm methods of Tracker-3.0.Tracker.Endpoint

    /**
     * Returns the #TrackerSparqlConnection that this endpoint proxies.
     */
    getSparqlConnection(): SparqlConnection

    // Class property signals of Tracker-3.0.Tracker.Endpoint

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
}

/**
 * The <structname>TrackerEndpoint</structname> object represents a public
 * connection to a #TrackerSparqlConnection.
 * @class 
 */
class Endpoint extends GObject.Object {

    // Own properties of Tracker-3.0.Tracker.Endpoint

    static name: string
    static $gtype: GObject.GType<Endpoint>

    // Constructors of Tracker-3.0.Tracker.Endpoint

    constructor(config?: Endpoint_ConstructProps) 
    _init(config?: Endpoint_ConstructProps): void
}

interface EndpointDBus_ConstructProps extends Gio.Initable_ConstructProps, Endpoint_ConstructProps {

    // Own constructor properties of Tracker-3.0.Tracker.EndpointDBus

    dbusConnection?: Gio.DBusConnection | null
    objectPath?: string | null
}

interface EndpointDBus extends Gio.Initable {

    // Own properties of Tracker-3.0.Tracker.EndpointDBus

    readonly dbusConnection: Gio.DBusConnection
    readonly objectPath: string

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
}

/**
 * The <structname>TrackerEndpointDBus</structname> object represents a public
 * connection to a #TrackerSparqlConnection on a DBus object path.
 * @class 
 */
class EndpointDBus extends Endpoint {

    // Own properties of Tracker-3.0.Tracker.EndpointDBus

    static name: string
    static $gtype: GObject.GType<EndpointDBus>

    // Constructors of Tracker-3.0.Tracker.EndpointDBus

    constructor(config?: EndpointDBus_ConstructProps) 
    /**
     * Registers a Tracker endpoint object at `object_path` on `dbus_connection`.
     * The default object path is "/org/freedesktop/Tracker3/Endpoint".
     * @constructor 
     * @param sparqlConnection a #TrackerSparqlConnection
     * @param dbusConnection a #GDBusConnection
     * @param objectPath the object path to use, or %NULL for the default
     * @param cancellable a #GCancellable, or %NULL
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
     */
    static new(sparqlConnection: SparqlConnection, dbusConnection: Gio.DBusConnection, objectPath: string | null, cancellable: Gio.Cancellable | null): EndpointDBus
    _init(config?: EndpointDBus_ConstructProps): void
}

interface EndpointHttp_ConstructProps extends Gio.Initable_ConstructProps, Endpoint_ConstructProps {

    // Own constructor properties of Tracker-3.0.Tracker.EndpointHttp

    httpCertificate?: Gio.TlsCertificate | null
    httpPort?: number | null
}

/**
 * Signal callback interface for `block-remote-address`
 */
interface EndpointHttp_BlockRemoteAddressSignalCallback {
    (object: Gio.SocketAddress): boolean
}

interface EndpointHttp extends Gio.Initable {

    // Own properties of Tracker-3.0.Tracker.EndpointHttp

    readonly httpCertificate: Gio.TlsCertificate
    readonly httpPort: number

    // Own signals of Tracker-3.0.Tracker.EndpointHttp

    connect(sigName: "block-remote-address", callback: EndpointHttp_BlockRemoteAddressSignalCallback): number
    on(sigName: "block-remote-address", callback: EndpointHttp_BlockRemoteAddressSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "block-remote-address", callback: EndpointHttp_BlockRemoteAddressSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "block-remote-address", callback: EndpointHttp_BlockRemoteAddressSignalCallback): NodeJS.EventEmitter
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
}

/**
 * The <structname>TrackerEndpointHttp</structname> object represents a public
 * connection to a #TrackerSparqlConnection on a HTTP port.
 * @class 
 */
class EndpointHttp extends Endpoint {

    // Own properties of Tracker-3.0.Tracker.EndpointHttp

    static name: string
    static $gtype: GObject.GType<EndpointHttp>

    // Constructors of Tracker-3.0.Tracker.EndpointHttp

    constructor(config?: EndpointHttp_ConstructProps) 
    constructor(sparqlConnection: SparqlConnection, port: number, certificate: Gio.TlsCertificate, cancellable: Gio.Cancellable | null) 
    static new(sparqlConnection: SparqlConnection, port: number, certificate: Gio.TlsCertificate, cancellable: Gio.Cancellable | null): EndpointHttp
    _init(config?: EndpointHttp_ConstructProps): void
}

interface NamespaceManager_ConstructProps extends GObject.Object_ConstructProps {
}

interface NamespaceManager {

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
    addPrefix(prefix: string, ns: string): void
    /**
     * If `uri` begins with one of the namespaces known to this
     * #TrackerNamespaceManager, then the return value will be the
     * compressed URI. Otherwise, %NULL will be returned.
     * @param uri a URI or compact URI
     */
    compressUri(uri: string): string
    /**
     * If `compact_uri` begins with one of the prefixes known to this
     * #TrackerNamespaceManager, then the return value will be the
     * expanded URI. Otherwise, a copy of `compact_uri` will be returned.
     * @param compactUri a URI or compact URI
     */
    expandUri(compactUri: string): string
    /**
     * Calls `func` for each known prefix / URI pair.
     * @param func the function to call for each prefix / URI pair
     */
    foreach(func: GLib.HFunc): void
    /**
     * Returns whether `prefix` is known.
     * @param prefix a string
     */
    hasPrefix(prefix: string): boolean
    /**
     * Looks up the namespace URI corresponding to `prefix,` or %NULL if the prefix
     * is not known.
     * @param prefix a string
     */
    lookupPrefix(prefix: string): string | null
    /**
     * Writes out all namespaces as Turtle `prefix` statements.
     */
    printTurtle(): string

    // Class property signals of Tracker-3.0.Tracker.NamespaceManager

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

/**
 * The <structname>TrackerNamespaceManager</structname> object represents a
 * mapping of prefixes and namespaces.
 * @class 
 */
class NamespaceManager extends GObject.Object {

    // Own properties of Tracker-3.0.Tracker.NamespaceManager

    static name: string
    static $gtype: GObject.GType<NamespaceManager>

    // Constructors of Tracker-3.0.Tracker.NamespaceManager

    constructor(config?: NamespaceManager_ConstructProps) 
    /**
     * Creates a new #TrackerNamespaceManager instance.
     * @constructor 
     */
    constructor() 
    /**
     * Creates a new #TrackerNamespaceManager instance.
     * @constructor 
     */
    static new(): NamespaceManager
    _init(config?: NamespaceManager_ConstructProps): void
    /**
     * Returns the global #TrackerNamespaceManager that contains a set of well-known
     * namespaces and prefixes, such as rdf:, rdfs:, nie:, tracker:, etc.
     * 
     * Note that the list of prefixes and namespaces is hardcoded in
     * libtracker-sparql. It may not correspond with the installed set of
     * ontologies, if they have been modified since they were installed.
     */
    static getDefault(): NamespaceManager
}

interface Notifier_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of Tracker-3.0.Tracker.Notifier

    /**
     * SPARQL connection to listen to.
     */
    connection?: SparqlConnection | null
}

/**
 * Signal callback interface for `events`
 */
interface Notifier_EventsSignalCallback {
    (service: string, graph: string, events: NotifierEvent[]): void
}

interface Notifier {

    // Own properties of Tracker-3.0.Tracker.Notifier

    /**
     * SPARQL connection to listen to.
     */
    readonly connection: SparqlConnection

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
     */
    signalSubscribe(connection: Gio.DBusConnection, service: string, objectPath: string | null, graph: string | null): number
    /**
     * Undoes a DBus signal subscription, the `handler_id` argument was previously
     * obtained with a tracker_notifier_signal_subscribe() call.
     * @param handlerId a handler ID obtained with tracker_notifier_signal_subscribe()
     */
    signalUnsubscribe(handlerId: number): void

    // Own signals of Tracker-3.0.Tracker.Notifier

    connect(sigName: "events", callback: Notifier_EventsSignalCallback): number
    on(sigName: "events", callback: Notifier_EventsSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "events", callback: Notifier_EventsSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "events", callback: Notifier_EventsSignalCallback): NodeJS.EventEmitter
    emit(sigName: "events", graph: string, events: NotifierEvent[], ...args: any[]): void

    // Class property signals of Tracker-3.0.Tracker.Notifier

    connect(sigName: "notify::connection", callback: (...args: any[]) => void): number
    on(sigName: "notify::connection", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::connection", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::connection", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::connection", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

/**
 * The <structname>TrackerNotifier</structname> object allows subscribing
 * to changes in the stored data.
 * @class 
 */
class Notifier extends GObject.Object {

    // Own properties of Tracker-3.0.Tracker.Notifier

    static name: string
    static $gtype: GObject.GType<Notifier>

    // Constructors of Tracker-3.0.Tracker.Notifier

    constructor(config?: Notifier_ConstructProps) 
    _init(config?: Notifier_ConstructProps): void
}

interface Resource_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of Tracker-3.0.Tracker.Resource

    /**
     * The URI identifier for this class, or %NULL for a
     * blank node.
     */
    identifier?: string | null
}

interface Resource {

    // Own properties of Tracker-3.0.Tracker.Resource

    /**
     * The URI identifier for this class, or %NULL for a
     * blank node.
     */
    identifier: string

    // Own fields of Tracker-3.0.Tracker.Resource

    parentInstance: GObject.Object

    // Owm methods of Tracker-3.0.Tracker.Resource

    /**
     * Adds a boolean object to a multi-valued property.
     * @param propertyUri a string identifying the property to modify
     * @param value the property object
     */
    addBoolean(propertyUri: string, value: boolean): void
    /**
     * Adds GDateTime object to the multi-valued property.
     * @param propertyUri a string identifying the property to modify
     * @param value the property object
     */
    addDatetime(propertyUri: string, value: GLib.DateTime): void
    /**
     * Adds a double object to a multi-valued property.
     * @param propertyUri a string identifying the property to modify
     * @param value the property object
     */
    addDouble(propertyUri: string, value: number): void
    /**
     * Add 'value' to the list of values for given property.
     * 
     * You can pass any kind of GValue for `value,` but serialization functions will
     * normally only be able to serialize URIs/relationships and fundamental value
     * types (string, int, etc.).
     * @param propertyUri a string identifying the property to set
     * @param value an initialised #GValue
     */
    addGvalue(propertyUri: string, value: any): void
    /**
     * Adds an integer object to a multi-valued property.
     * @param propertyUri a string identifying the property to modify
     * @param value the property object
     */
    addInt(propertyUri: string, value: number): void
    /**
     * Adds an integer object to a multi-valued property.
     * @param propertyUri a string identifying the property to modify
     * @param value the property object
     */
    addInt64(propertyUri: string, value: number): void
    /**
     * Adds a resource object to a multi-valued property. This
     * function produces similar RDF to tracker_resource_add_uri(),
     * although in this function the URI will depend on the identifier
     * set on `resource`.
     * @param propertyUri a string identifying the property to modify
     * @param resource the property object
     */
    addRelation(propertyUri: string, resource: Resource): void
    /**
     * Adds a string object to a multi-valued property.
     * @param propertyUri a string identifying the property to modify
     * @param value the property object
     */
    addString(propertyUri: string, value: string): void
    /**
     * Adds a resource object to a multi-valued property. This function
     * produces similar RDF to tracker_resource_add_relation(), although
     * it requires that the URI is previously known.
     * @param propertyUri a string identifying the property to modify
     * @param value the property object
     */
    addUri(propertyUri: string, value: string): void
    /**
     * Returns the first boolean object previously assigned to a property.
     * @param propertyUri a string identifying the property to look up
     */
    getFirstBoolean(propertyUri: string): boolean
    /**
     * Returns the first resource object previously assigned to a property.
     * @param propertyUri a string identifying the property to look up
     */
    getFirstDatetime(propertyUri: string): GLib.DateTime
    /**
     * Returns the first double object previously assigned to a property.
     * @param propertyUri a string identifying the property to look up
     */
    getFirstDouble(propertyUri: string): number
    /**
     * Returns the first integer object previously assigned to a property.
     * @param propertyUri a string identifying the property to look up
     */
    getFirstInt(propertyUri: string): number
    /**
     * Returns the first integer object previously assigned to a property.
     * @param propertyUri a string identifying the property to look up
     */
    getFirstInt64(propertyUri: string): number
    /**
     * Returns the first resource object previously assigned to a property.
     * @param propertyUri a string identifying the property to look up
     */
    getFirstRelation(propertyUri: string): Resource
    /**
     * Returns the first string object previously assigned to a property.
     * @param propertyUri a string identifying the property to look up
     */
    getFirstString(propertyUri: string): string
    /**
     * Returns the first resource object previously assigned to a property.
     * @param propertyUri a string identifying the property to look up
     */
    getFirstUri(propertyUri: string): string
    /**
     * Returns the identifier of a resource.
     * 
     * If the identifier was set to NULL, the identifier returned will be a unique
     * SPARQL blank node identifier, such as "_:123".
     */
    getIdentifier(): string
    /**
     * Gets the list of properties defined in `resource`
     */
    getProperties(): string[]
    /**
     * Returns whether the prior values for this property would be deleted
     * in the SPARQL issued by `resource`.
     * @param propertyUri a string identifying the property to query
     */
    getPropertyOverwrite(propertyUri: string): boolean
    /**
     * Returns the list of all known values of the given property.
     * @param propertyUri a string identifying the property to look up
     */
    getValues(propertyUri: string): any[]
    /**
     * A helper function that compares a #TrackerResource by its identifier
     * string.
     * @param identifier a string identifying the resource
     */
    identifierCompareFunc(identifier: string): number
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
     */
    printJsonld(namespaces: NamespaceManager | null): string
    /**
     * Generates a SPARQL command to update a database with the information
     * stored in `resource`.
     * 
     * The `namespaces` object is used to expand any compact URI values. In most
     * cases you should pass the one returned by tracker_sparql_connection_get_namespace_manager()
     * from the connection that is the intended recipient of this data.
     * @param namespaces a set of prefixed URLs, or %NULL to use the     Nepomuk set
     * @param graphId the URN of the graph the data should be added to,     or %NULL
     */
    printSparqlUpdate(namespaces: NamespaceManager | null, graphId: string | null): string
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
     */
    printTurtle(namespaces: NamespaceManager | null): string
    /**
     * Serializes a #TrackerResource to a #GVariant in a lossless way.
     * All child resources are subsequently serialized. It is implied
     * that both ends use a common #TrackerNamespaceManager.
     */
    serialize(): GLib.Variant
    /**
     * Sets a single-valued boolean object.
     * @param propertyUri a string identifying the property to modify
     * @param value the property object
     */
    setBoolean(propertyUri: string, value: boolean): void
    /**
     * Sets a single-valued GDateTime as a #TrackerResource
     * @param propertyUri a string identifying the property to modify
     * @param value the property object
     */
    setDatetime(propertyUri: string, value: GLib.DateTime): void
    /**
     * Sets a single-valued double object.
     * @param propertyUri a string identifying the property to modify
     * @param value the property object
     */
    setDouble(propertyUri: string, value: number): void
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
    setGvalue(propertyUri: string, value: any): void
    /**
     * Changes the identifier of a #TrackerResource. The identifier should be a
     * URI or compact URI, but this is not necessarily enforced. Invalid
     * identifiers may cause errors when serializing the resource or trying to
     * insert the results in a database.
     * 
     * If the identifier is set to NULL, a SPARQL blank node identifier such as
     * "_:123" is assigned to the resource.
     * @param identifier a string identifying the resource
     */
    setIdentifier(identifier: string | null): void
    /**
     * Sets a single-valued integer object.
     * @param propertyUri a string identifying the property to modify
     * @param value the property object
     */
    setInt(propertyUri: string, value: number): void
    /**
     * Sets a single-valued integer object.
     * @param propertyUri a string identifying the property to modify
     * @param value the property object
     */
    setInt64(propertyUri: string, value: number): void
    /**
     * Sets a single-valued resource object as a #TrackerResource. This
     * function produces similar RDF to tracker_resource_set_uri(),
     * although in this function the URI will depend on the identifier
     * set on `resource`.
     * @param propertyUri a string identifying the property to modify
     * @param resource the property object
     */
    setRelation(propertyUri: string, resource: Resource): void
    /**
     * Sets a single-valued string object.
     * @param propertyUri a string identifying the property to modify
     * @param value the property object
     */
    setString(propertyUri: string, value: string): void
    /**
     * Sets a single-valued resource object as a string URI. This function
     * produces similar RDF to tracker_resource_set_relation(), although
     * it requires that the URI is previously known.
     * @param propertyUri a string identifying the property to modify
     * @param value the property object
     */
    setUri(propertyUri: string, value: string): void

    // Class property signals of Tracker-3.0.Tracker.Resource

    connect(sigName: "notify::identifier", callback: (...args: any[]) => void): number
    on(sigName: "notify::identifier", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::identifier", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::identifier", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::identifier", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

/**
 * The <structname>TrackerResource</structname> object represents information
 * about a given resource.
 * @class 
 */
class Resource extends GObject.Object {

    // Own properties of Tracker-3.0.Tracker.Resource

    static name: string
    static $gtype: GObject.GType<Resource>

    // Constructors of Tracker-3.0.Tracker.Resource

    constructor(config?: Resource_ConstructProps) 
    /**
     * Creates a TrackerResource instance.
     * @constructor 
     * @param identifier A string containing a URI, or %NULL.
     */
    constructor(identifier: string | null) 
    /**
     * Creates a TrackerResource instance.
     * @constructor 
     * @param identifier A string containing a URI, or %NULL.
     */
    static new(identifier: string | null): Resource
    _init(config?: Resource_ConstructProps): void
    /**
     * Deserializes a #TrackerResource previously serialized with
     * tracker_resource_serialize(). It is implied that both ends
     * use a common #TrackerNamespaceManager.
     * @param variant a #GVariant
     */
    static deserialize(variant: GLib.Variant): Resource
}

interface SparqlConnection_ConstructProps extends GObject.Object_ConstructProps {
}

interface SparqlConnection {

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
     */
    closeFinish(res: Gio.AsyncResult): boolean
    /**
     * Creates a new batch to store and execute update commands. If the connection
     * is readonly or cannot issue SPARQL updates, %NULL will be returned.
     */
    createBatch(): Batch
    /**
     * Creates a new #TrackerNotifier to notify about changes in `connection`.
     * See #TrackerNotifier documentation for information about how to use this
     * object.
     */
    createNotifier(): Notifier
    /**
     * Retrieves a #TrackerNamespaceManager that contains all
     * prefixes in the ontology of `connection`.
     */
    getNamespaceManager(): NamespaceManager
    /**
     * Prepares a #TrackerSparqlStatement for the SPARQL query contained as a resource
     * file at `resource_path`. SPARQL Query files typically have the .rq extension.
     * @param resourcePath the resource path of the file to parse.
     * @param cancellable a #GCancellable, or %NULL
     */
    loadStatementFromGresource(resourcePath: string, cancellable: Gio.Cancellable | null): SparqlStatement | null
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
    mapConnection(handleName: string, serviceConnection: SparqlConnection): void
    /**
     * Executes a SPARQL query on. The API call is completely synchronous, so
     * it may block.
     * 
     * The `sparql` query should be built with #TrackerResource, or
     * its parts correctly escaped using tracker_sparql_escape_string(),
     * otherwise SPARQL injection is possible.
     * @param sparql string containing the SPARQL query
     * @param cancellable a #GCancellable used to cancel the operation
     */
    query(sparql: string, cancellable: Gio.Cancellable | null): SparqlCursor
    /**
     * Executes asynchronously a SPARQL query.
     * @param sparql string containing the SPARQL query
     * @param cancellable a #GCancellable used to cancel the operation
     * @param callback user-defined #GAsyncReadyCallback to be called when            asynchronous operation is finished.
     */
    queryAsync(sparql: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes the asynchronous SPARQL query operation.
     * @param res a #GAsyncResult with the result of the operation
     */
    queryFinish(res: Gio.AsyncResult): SparqlCursor
    /**
     * Prepares the given `sparql` as a #TrackerSparqlStatement.
     * @param sparql the SPARQL query
     * @param cancellable a #GCancellable used to cancel the operation, or %NULL
     */
    queryStatement(sparql: string, cancellable: Gio.Cancellable | null): SparqlStatement | null
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
    serializeAsync(flags: SerializeFlags, format: RdfFormat, query: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes a tracker_sparql_connection_serialize_async() operation.
     * In case of error, %NULL will be returned and `error` will be set.
     * @param result the #GAsyncResult
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
    update(sparql: string, cancellable: Gio.Cancellable | null): void
    /**
     * Executes asynchronously an array of SPARQL updates. All updates in the
     * array are handled within a single transaction.
     * @param sparql an array of strings containing the SPARQL update queries
     * @param sparqlLength the amount of strings you pass as `sparql`
     * @param cancellable a #GCancellable used to cancel the operation
     * @param callback user-defined #GAsyncReadyCallback to be called when            asynchronous operation is finished.
     */
    updateArrayAsync(sparql: string, sparqlLength: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes the asynchronous SPARQL update_array operation.
     * @param res a #GAsyncResult with the result of the operation
     */
    updateArrayFinish(res: Gio.AsyncResult): boolean
    /**
     * Executes asynchronously a SPARQL update.
     * @param sparql string containing the SPARQL update query
     * @param cancellable a #GCancellable used to cancel the operation
     * @param callback user-defined #GAsyncReadyCallback to be called when            asynchronous operation is finished.
     */
    updateAsync(sparql: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
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
     */
    updateBlank(sparql: string, cancellable: Gio.Cancellable | null): GLib.Variant
    /**
     * Executes asynchronously a SPARQL update with blank nodes. See
     * the tracker_sparql_connection_update_blank() documentation to
     * see the differences with tracker_sparql_connection_update().
     * @param sparql string containing the SPARQL update query
     * @param cancellable a #GCancellable used to cancel the operation
     * @param callback user-defined #GAsyncReadyCallback to be called when            asynchronous operation is finished.
     */
    updateBlankAsync(sparql: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes the asynchronous SPARQL update operation, and returns
     * the URNs of the generated nodes, if any. See the
     * tracker_sparql_connection_update_blank() documentation for the interpretation
     * of the returned #GVariant.
     * @param res a #GAsyncResult with the result of the operation
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
     */
    updateResourceFinish(res: Gio.AsyncResult): boolean

    // Class property signals of Tracker-3.0.Tracker.SparqlConnection

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

/**
 * The <structname>TrackerSparqlConnection</structname> object represents a
 * SPARQL connection.
 * @class 
 */
class SparqlConnection extends GObject.Object {

    // Own properties of Tracker-3.0.Tracker.SparqlConnection

    static name: string
    static $gtype: GObject.GType<SparqlConnection>

    // Constructors of Tracker-3.0.Tracker.SparqlConnection

    constructor(config?: SparqlConnection_ConstructProps) 
    /**
     * Connects to a database owned by another process on the
     * local machine.
     * @constructor 
     * @param serviceName The name of the D-Bus service to connect to.
     * @param objectPath The path to the object, or %NULL to use the default.
     * @param dbusConnection The #GDBusConnection to use, or %NULL to use the session bus
     */
    static busNew(serviceName: string, objectPath: string | null, dbusConnection: Gio.DBusConnection | null): SparqlConnection
    /**
     * Completion function for tracker_sparql_connection_bus_new_async().
     * @constructor 
     * @param result the #GAsyncResult
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
     */
    static remoteNew(uriBase: string): SparqlConnection
    _init(config?: SparqlConnection_ConstructProps): void
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
    static busNewAsync(serviceName: string, objectPath: string | null, dbusConnection: Gio.DBusConnection | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
}

interface SparqlCursor_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of Tracker-3.0.Tracker.SparqlCursor

    /**
     * The #TrackerSparqlConnection used to retrieve the results.
     */
    connection?: SparqlConnection | null
}

interface SparqlCursor {

    // Own properties of Tracker-3.0.Tracker.SparqlCursor

    /**
     * The #TrackerSparqlConnection used to retrieve the results.
     */
    readonly connection: SparqlConnection
    readonly nColumns: number

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
     */
    getBoolean(column: number): boolean
    /**
     * Returns the #TrackerSparqlConnection associated with this
     * #TrackerSparqlCursor.
     */
    getConnection(): SparqlConnection
    /**
     * Retrieve an GDateTime pointer for the current row in `column`.
     * @param column column number to retrieve (first one is 0)
     */
    getDatetime(column: number): GLib.DateTime | null
    /**
     * Retrieve a double for the current row in `column`.
     * @param column column number to retrieve (first one is 0)
     */
    getDouble(column: number): number
    /**
     * Retrieve an integer for the current row in `column`.
     * @param column column number to retrieve (first one is 0)
     */
    getInteger(column: number): number
    /**
     * This method should only be called after a successful
     * tracker_sparql_cursor_next(); otherwise its return value
     * will be undefined.
     */
    getNColumns(): number
    /**
     * Retrieves a string representation of the data in the current
     * row in `column`.
     * @param column column number to retrieve (first one is 0)
     */
    getString(column: number): [ /* returnType */ string | null, /* length */ number | null ]
    /**
     * The data type bound to the current row in `column` is returned.
     * @param column column number to retrieve (first one is 0)
     */
    getValueType(column: number): SparqlValueType
    /**
     * Retrieves the variable name for the current row in `column`.
     * @param column column number to retrieve (first one is 0)
     */
    getVariableName(column: number): string
    /**
     * If the current row and `column` are bound to a value, %TRUE is returned.
     * @param column column number to retrieve (first one is 0)
     */
    isBound(column: number): boolean
    /**
     * Iterates to the next result. This is completely synchronous and
     * it may block.
     * @param cancellable a #GCancellable used to cancel the operation
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
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

/**
 * The <structname>TrackerSparqlCursor</structname> object represents an
 * iterator of results.
 * @class 
 */
class SparqlCursor extends GObject.Object {

    // Own properties of Tracker-3.0.Tracker.SparqlCursor

    static name: string
    static $gtype: GObject.GType<SparqlCursor>

    // Constructors of Tracker-3.0.Tracker.SparqlCursor

    constructor(config?: SparqlCursor_ConstructProps) 
    _init(config?: SparqlCursor_ConstructProps): void
}

interface SparqlStatement_ConstructProps extends GObject.Object_ConstructProps {

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

interface SparqlStatement {

    // Own properties of Tracker-3.0.Tracker.SparqlStatement

    /**
     * The #TrackerSparqlConnection used to perform the query.
     */
    readonly connection: SparqlConnection
    /**
     * SPARQL query stored in this statement.
     */
    readonly sparql: string

    // Own fields of Tracker-3.0.Tracker.SparqlStatement

    parentInstance: GObject.Object

    // Owm methods of Tracker-3.0.Tracker.SparqlStatement

    /**
     * Binds the boolean `value` to variable `name`.
     * @param name variable name
     * @param value value
     */
    bindBoolean(name: string, value: boolean): void
    /**
     * Binds the GDateTime `value` to variable `name`.
     * @param name variable name
     * @param value value
     */
    bindDatetime(name: string, value: GLib.DateTime): void
    /**
     * Binds the double `value` to variable `name`.
     * @param name variable name
     * @param value value
     */
    bindDouble(name: string, value: number): void
    /**
     * Binds the integer `value` to variable `name`.
     * @param name variable name
     * @param value value
     */
    bindInt(name: string, value: number): void
    /**
     * Binds the string `value` to variable `name`.
     * @param name variable name
     * @param value value
     */
    bindString(name: string, value: string): void
    /**
     * Clears all boolean/string/integer/double bindings.
     */
    clearBindings(): void
    /**
     * Executes the SPARQL query with the currently bound values.
     * @param cancellable a #GCancellable used to cancel the operation
     */
    execute(cancellable: Gio.Cancellable | null): SparqlCursor
    /**
     * Asynchronously executes the SPARQL query with the currently bound values.
     * @param cancellable a #GCancellable used to cancel the operation
     * @param callback user-defined #GAsyncReadyCallback to be called when            asynchronous operation is finished.
     */
    executeAsync(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes the asynchronous operation started through
     * tracker_sparql_statement_execute_async().
     * @param res The #GAsyncResult from the callback used to return the #TrackerSparqlCursor
     */
    executeFinish(res: Gio.AsyncResult): SparqlCursor
    /**
     * Returns the #TrackerSparqlConnection that this statement was created from.
     */
    getConnection(): SparqlConnection
    /**
     * Returns the SPARQL string that this prepared statement holds.
     */
    getSparql(): string
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
     */
    serializeFinish(result: Gio.AsyncResult): Gio.InputStream

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
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

/**
 * The <structname>TrackerSparqlStatement</structname> object represents
 * a prepared query statement.
 * @class 
 */
class SparqlStatement extends GObject.Object {

    // Own properties of Tracker-3.0.Tracker.SparqlStatement

    static name: string
    static $gtype: GObject.GType<SparqlStatement>

    // Constructors of Tracker-3.0.Tracker.SparqlStatement

    constructor(config?: SparqlStatement_ConstructProps) 
    _init(config?: SparqlStatement_ConstructProps): void
}

interface BatchClass {
}

abstract class BatchClass {

    // Own properties of Tracker-3.0.Tracker.BatchClass

    static name: string
}

interface EndpointClass {
}

abstract class EndpointClass {

    // Own properties of Tracker-3.0.Tracker.EndpointClass

    static name: string
}

interface NamespaceManagerClass {

    // Own fields of Tracker-3.0.Tracker.NamespaceManagerClass

    parentClass: GObject.ObjectClass
}

abstract class NamespaceManagerClass {

    // Own properties of Tracker-3.0.Tracker.NamespaceManagerClass

    static name: string
}

interface NotifierClass {
}

abstract class NotifierClass {

    // Own properties of Tracker-3.0.Tracker.NotifierClass

    static name: string
}

interface NotifierEvent {

    // Owm methods of Tracker-3.0.Tracker.NotifierEvent

    /**
     * Returns the event type.
     */
    getEventType(): NotifierEventType
    /**
     * Returns the tracker:id of the element being notified upon. This is a #gint64
     * which is used as efficient internal identifier for the resource.
     */
    getId(): number
    /**
     * Returns the Uniform Resource Name of the element. This is Tracker's
     * public identifier for the resource.
     * 
     * This URN is an unique string identifier for the resource being
     * notified upon, typically of the form "urn:uuid:...".
     */
    getUrn(): string
}

/**
 * The <structname>TrackerNotifierEvent</structname> struct represents a
 * change event in the stored data.
 * @record 
 */
class NotifierEvent {

    // Own properties of Tracker-3.0.Tracker.NotifierEvent

    static name: string
}

interface ResourceClass {
}

abstract class ResourceClass {

    // Own properties of Tracker-3.0.Tracker.ResourceClass

    static name: string
}

interface SparqlConnectionClass {
}

abstract class SparqlConnectionClass {

    // Own properties of Tracker-3.0.Tracker.SparqlConnectionClass

    static name: string
}

interface SparqlCursorClass {
}

abstract class SparqlCursorClass {

    // Own properties of Tracker-3.0.Tracker.SparqlCursorClass

    static name: string
}

interface SparqlStatementClass {
}

abstract class SparqlStatementClass {

    // Own properties of Tracker-3.0.Tracker.SparqlStatementClass

    static name: string
}

}
export default Tracker;