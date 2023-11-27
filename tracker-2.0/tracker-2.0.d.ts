
/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './tracker-2.0-ambient.d.ts';
import './tracker-2.0-import.d.ts';
/**
 * Tracker-2.0
 */

import type Gio from '@girs/gio-2.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';

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
enum SparqlConnectionFlags {
    NONE,
    READONLY,
}
enum SparqlValueType {
    UNBOUND,
    URI,
    STRING,
    INTEGER,
    DOUBLE,
    DATETIME,
    BLANK_NODE,
    BOOLEAN,
}
enum SparqlError {
    PARSE,
    UNKNOWN_CLASS,
    UNKNOWN_PROPERTY,
    TYPE,
    CONSTRAINT,
    NO_SPACE,
    INTERNAL,
    UNSUPPORTED,
}
enum SparqlBuilderState {
    UPDATE,
    INSERT,
    DELETE,
    SUBJECT,
    PREDICATE,
    OBJECT,
    BLANK,
    WHERE,
    EMBEDDED_INSERT,
    GRAPH,
}
/**
 * Flags affecting #TrackerNotifier behavior.
 * @bitfield 
 */
enum NotifierFlags {
    /**
     * No flags
     */
    NONE,
    /**
     * Query URN of notified elements
     */
    QUERY_URN,
    /**
     * Query location of notified elements
     */
    QUERY_LOCATION,
    /**
     * Added/updated Elements are
     *   notified in 2 steps (a CREATE/UPDATE event after the file is first
     *   known, and an UPDATE event after metadata is extracted). The default
     *   #TrackerNotifier behavior coalesces those events in one.
     */
    NOTIFY_UNEXTRACTED,
}
const DBUS_SERVICE: string | null
const DBUS_INTERFACE_RESOURCES: string | null
const DBUS_OBJECT_RESOURCES: string | null
const DBUS_INTERFACE_STATISTICS: string | null
const DBUS_OBJECT_STATISTICS: string | null
const DBUS_INTERFACE_STATUS: string | null
const DBUS_OBJECT_STATUS: string | null
const DBUS_INTERFACE_STEROIDS: string | null
const DBUS_OBJECT_STEROIDS: string | null
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
 * @param required_major the required major version.
 * @param required_minor the required minor version.
 * @param required_micro the required micro version.
 * @returns %NULL if the Tracker library is compatible with the   given version, or a string describing the version mismatch.   The returned string is owned by Tracker and must not be modified   or freed.
 */
function check_version(required_major: number, required_minor: number, required_micro: number): string | null
function sparql_escape_uri(uri: string | null): string | null
function sparql_escape_string(literal: string | null): string | null
function sparql_get_uuid_urn(): string | null
module NamespaceManager {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface NamespaceManager {

    // Owm methods of Tracker-2.0.Tracker.NamespaceManager

    /**
     * Adds `prefix` as the recognised abbreviaton of `namespace`.
     * 
     * Only one prefix is allowed for a given namespace, and all prefixes must
     * be unique.
     * @param prefix a short, unique prefix to identify `namespace`
     * @param ns the URL of the given namespace
     */
    add_prefix(prefix: string | null, ns: string | null): void
    /**
     * If `compact_uri` begins with one of the prefixes known to this
     * #TrackerNamespaceManager, then the return value will be the
     * expanded URI. Otherwise, a copy of `compact_uri` will be returned.
     * @param compact_uri a URI or compact URI
     * @returns a newly-allocated string
     */
    expand_uri(compact_uri: string | null): string | null
    /**
     * Calls `func` for each known prefix / URI pair.
     * @param func the function to call for each prefix / URI pair
     */
    foreach(func: GLib.HFunc): void
    has_prefix(prefix: string | null): boolean
    /**
     * Looks up the namespace URI corresponding to `prefix,` or %NULL if the prefix
     * is not known.
     * @param prefix a string
     * @returns a string owned by the #TrackerNamespaceManager, or %NULL
     */
    lookup_prefix(prefix: string | null): string | null
    /**
     * Writes out all namespaces as Turtle `prefix` statements.
     * @returns a newly-allocated string
     */
    print_turtle(): string | null

    // Class property signals of Tracker-2.0.Tracker.NamespaceManager

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class NamespaceManager extends GObject.Object {

    // Own properties of Tracker-2.0.Tracker.NamespaceManager

    static name: string
    static $gtype: GObject.GType<NamespaceManager>

    // Constructors of Tracker-2.0.Tracker.NamespaceManager

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
    static get_default(): NamespaceManager
}

module Notifier {

    // Signal callback interfaces

    /**
     * Signal callback interface for `events`
     */
    interface EventsSignalCallback {
        ($obj: Notifier, events: NotifierEvent[]): void
    }


    // Constructor properties interface

    interface ConstructorProperties extends Gio.Initable.ConstructorProperties, GObject.Object.ConstructorProperties {

        // Own constructor properties of Tracker-2.0.Tracker.Notifier

        /**
         * RDF classes to listen notifications about.
         */
        classes?: string[] | null
    }

}

interface Notifier extends Gio.Initable {

    // Own properties of Tracker-2.0.Tracker.Notifier

    /**
     * RDF classes to listen notifications about.
     */
    readonly classes: string[]

    // Own fields of Tracker-2.0.Tracker.Notifier

    parent_instance: GObject.Object

    // Own signals of Tracker-2.0.Tracker.Notifier

    connect(sigName: "events", callback: Notifier.EventsSignalCallback): number
    connect_after(sigName: "events", callback: Notifier.EventsSignalCallback): number
    emit(sigName: "events", events: NotifierEvent[], ...args: any[]): void

    // Class property signals of Tracker-2.0.Tracker.Notifier

    connect(sigName: "notify::classes", callback: (($obj: Notifier, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::classes", callback: (($obj: Notifier, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::classes", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Notifier extends GObject.Object {

    // Own properties of Tracker-2.0.Tracker.Notifier

    static name: string
    static $gtype: GObject.GType<Notifier>

    // Constructors of Tracker-2.0.Tracker.Notifier

    constructor(config?: Notifier.ConstructorProperties) 
    /**
     * Creates a new notifier, events can be listened through the
     * TrackerNotifier::events signal.
     * @constructor 
     * @param classes Array of RDF classes to           receive notifications from, or %NULL for all.
     * @param flags flags affecting the notifier behavior
     * @param cancellable Cancellable for the operation
     * @returns a newly created #TrackerNotifier, %NULL on error.
     */
    constructor(classes: string[] | null, flags: NotifierFlags, cancellable: Gio.Cancellable | null) 
    /**
     * Creates a new notifier, events can be listened through the
     * TrackerNotifier::events signal.
     * @constructor 
     * @param classes Array of RDF classes to           receive notifications from, or %NULL for all.
     * @param flags flags affecting the notifier behavior
     * @param cancellable Cancellable for the operation
     * @returns a newly created #TrackerNotifier, %NULL on error.
     */
    static new(classes: string[] | null, flags: NotifierFlags, cancellable: Gio.Cancellable | null): Notifier
    _init(config?: Notifier.ConstructorProperties): void
}

module Resource {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Tracker-2.0.Tracker.Resource

        /**
         * The URI identifier for this class, or %NULL for a
         * blank node.
         */
        identifier?: string | null
    }

}

interface Resource {

    // Own properties of Tracker-2.0.Tracker.Resource

    /**
     * The URI identifier for this class, or %NULL for a
     * blank node.
     */
    identifier: string | null

    // Own fields of Tracker-2.0.Tracker.Resource

    parent_instance: GObject.Object

    // Owm methods of Tracker-2.0.Tracker.Resource

    /**
     * Adds a boolean object to a multi-valued property.
     * @param property_uri a string identifying the property to modify
     * @param value the property object
     */
    add_boolean(property_uri: string | null, value: boolean): void
    /**
     * Adds a double object to a multi-valued property.
     * @param property_uri a string identifying the property to modify
     * @param value the property object
     */
    add_double(property_uri: string | null, value: number): void
    /**
     * Add 'value' to the list of values for given property.
     * 
     * You can pass any kind of GValue for `value,` but serialization functions will
     * normally only be able to serialize URIs/relationships and fundamental value
     * types (string, int, etc.).
     * @param property_uri a string identifying the property to set
     * @param value an initialised #GValue
     */
    add_gvalue(property_uri: string | null, value: any): void
    /**
     * Adds an integer object to a multi-valued property.
     * @param property_uri a string identifying the property to modify
     * @param value the property object
     */
    add_int(property_uri: string | null, value: number): void
    /**
     * Adds an integer object to a multi-valued property.
     * @param property_uri a string identifying the property to modify
     * @param value the property object
     */
    add_int64(property_uri: string | null, value: number): void
    /**
     * Adds a resource object to a multi-valued property. This
     * function produces similar RDF to tracker_resource_add_uri(),
     * although in this function the URI will depend on the identifier
     * set on `resource`.
     * @param property_uri a string identifying the property to modify
     * @param resource the property object
     */
    add_relation(property_uri: string | null, resource: Resource): void
    /**
     * Adds a string object to a multi-valued property.
     * @param property_uri a string identifying the property to modify
     * @param value the property object
     */
    add_string(property_uri: string | null, value: string | null): void
    /**
     * Adds a resource object to a multi-valued property. This function
     * produces similar RDF to tracker_resource_add_relation(), although
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
    get_first_relation(property_uri: string | null): Resource
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
     * If the identifier was set to NULL, the identifier returned will be a unique
     * SPARQL blank node identifier, such as "_:123".
     * @returns a string owned by the resource
     */
    get_identifier(): string | null
    /**
     * Returns the list of all known values of the given property.
     * @param property_uri a string identifying the property to look up
     * @returns a #GList of #GValue instances, which must be freed by the caller.
     */
    get_values(property_uri: string | null): any[]
    identifier_compare_func(identifier: string | null): number
    /**
     * Serialize all the information in `resource` as a JSON-LD document.
     * 
     * See <http://www.jsonld.org/> for more information on the JSON-LD
     * serialization format.
     * 
     * The `namespaces` object is used to expand any compact URI values. In most
     * cases you should pass %NULL, which means the set of namespaces returned by
     * tracker_namespace_manager_get_default() will be used. This defines the
     * usual prefixes for all of the ontologies that Tracker ships with by default.
     * @param namespaces a set of prefixed URLs, or %NULL to use the     default set
     * @returns a newly-allocated string containing JSON-LD data.
     */
    print_jsonld(namespaces: NamespaceManager | null): string | null
    /**
     * Generates a SPARQL command to update a database with the information
     * stored in `resource`.
     * 
     * The `namespaces` object is used to expand any compact URI values. In most
     * cases you should pass %NULL, which means the set of namespaces returned by
     * tracker_namespace_manager_get_default() will be used. This defines the
     * usual prefixes for all of the ontologies that Tracker ships with by default.
     * @param namespaces a set of prefixed URLs, or %NULL to use the     default set
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
     * cases you should pass %NULL, which means the set of namespaces returned by
     * tracker_namespace_manager_get_default() will be used. This defines the
     * usual prefixes for all of the ontologies that Tracker ships with by default.
     * @param namespaces a set of prefixed URLs, or %NULL to use the     default set
     * @returns a newly-allocated string
     */
    print_turtle(namespaces: NamespaceManager | null): string | null
    /**
     * Sets a single-valued boolean object.
     * @param property_uri a string identifying the property to modify
     * @param value the property object
     */
    set_boolean(property_uri: string | null, value: boolean): void
    /**
     * Sets a single-valued double object.
     * @param property_uri a string identifying the property to modify
     * @param value the property object
     */
    set_double(property_uri: string | null, value: number): void
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
     * @param property_uri a string identifying the property to set
     * @param value an initialised #GValue
     */
    set_gvalue(property_uri: string | null, value: any): void
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
    set_identifier(identifier: string | null): void
    /**
     * Sets a single-valued integer object.
     * @param property_uri a string identifying the property to modify
     * @param value the property object
     */
    set_int(property_uri: string | null, value: number): void
    /**
     * Sets a single-valued integer object.
     * @param property_uri a string identifying the property to modify
     * @param value the property object
     */
    set_int64(property_uri: string | null, value: number): void
    /**
     * Sets a single-valued resource object as a #TrackerResource. This
     * function produces similar RDF to tracker_resource_set_uri(),
     * although in this function the URI will depend on the identifier
     * set on `resource`.
     * @param property_uri a string identifying the property to modify
     * @param resource the property object
     */
    set_relation(property_uri: string | null, resource: Resource): void
    /**
     * Sets a single-valued string object.
     * @param property_uri a string identifying the property to modify
     * @param value the property object
     */
    set_string(property_uri: string | null, value: string | null): void
    /**
     * Sets a single-valued resource object as a string URI. This function
     * produces similar RDF to tracker_resource_set_relation(), although
     * it requires that the URI is previously known.
     * @param property_uri a string identifying the property to modify
     * @param value the property object
     */
    set_uri(property_uri: string | null, value: string | null): void

    // Class property signals of Tracker-2.0.Tracker.Resource

    connect(sigName: "notify::identifier", callback: (($obj: Resource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::identifier", callback: (($obj: Resource, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::identifier", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * The <structname>TrackerResource</structname> object represents information
 * about a given resource.
 * @class 
 */
class Resource extends GObject.Object {

    // Own properties of Tracker-2.0.Tracker.Resource

    static name: string
    static $gtype: GObject.GType<Resource>

    // Constructors of Tracker-2.0.Tracker.Resource

    constructor(config?: Resource.ConstructorProperties) 
    /**
     * Creates a TrackerResource instance.
     * @constructor 
     * @param identifier A string containing a URI
     * @returns a newly created #TrackerResource. Free with g_object_unref() when done
     */
    constructor(identifier: string | null) 
    /**
     * Creates a TrackerResource instance.
     * @constructor 
     * @param identifier A string containing a URI
     * @returns a newly created #TrackerResource. Free with g_object_unref() when done
     */
    static new(identifier: string | null): Resource
    _init(config?: Resource.ConstructorProperties): void
}

module SparqlBuilder {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Tracker-2.0.Tracker.SparqlBuilder

        length?: number | null
    }

}

interface SparqlBuilder {

    // Own properties of Tracker-2.0.Tracker.SparqlBuilder

    readonly result: string | null
    length: number
    readonly state: any

    // Owm methods of Tracker-2.0.Tracker.SparqlBuilder

    insert_open(graph: string | null): void
    insert_silent_open(graph: string | null): void
    insert_close(): void
    delete_open(graph: string | null): void
    delete_close(): void
    graph_open(graph: string | null): void
    graph_close(): void
    where_open(): void
    where_close(): void
    subject_variable(var_name: string | null): void
    object_variable(var_name: string | null): void
    subject_iri(iri: string | null): void
    subject(s: string | null): void
    predicate_iri(iri: string | null): void
    predicate(s: string | null): void
    object_iri(iri: string | null): void
    object(s: string | null): void
    object_string(literal: string | null): void
    object_unvalidated(value: string | null): void
    object_boolean(literal: boolean): void
    object_int64(literal: number): void
    object_date(literal: number): /* literal */ number
    object_double(literal: number): void
    object_blank_open(): void
    object_blank_close(): void
    prepend(raw: string | null): void
    append(raw: string | null): void
    get_result(): string | null
    get_length(): number
    get_state(): any

    // Class property signals of Tracker-2.0.Tracker.SparqlBuilder

    connect(sigName: "notify::result", callback: (($obj: SparqlBuilder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::result", callback: (($obj: SparqlBuilder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::result", ...args: any[]): void
    connect(sigName: "notify::length", callback: (($obj: SparqlBuilder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::length", callback: (($obj: SparqlBuilder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::length", ...args: any[]): void
    connect(sigName: "notify::state", callback: (($obj: SparqlBuilder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::state", callback: (($obj: SparqlBuilder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::state", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class SparqlBuilder extends GObject.Object {

    // Own properties of Tracker-2.0.Tracker.SparqlBuilder

    static name: string
    static $gtype: GObject.GType<SparqlBuilder>

    // Constructors of Tracker-2.0.Tracker.SparqlBuilder

    constructor(config?: SparqlBuilder.ConstructorProperties) 
    static update(): SparqlBuilder
    static embedded_insert(): SparqlBuilder
    constructor() 
    static new(): SparqlBuilder
    _init(config?: SparqlBuilder.ConstructorProperties): void
}

module SparqlConnection {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface SparqlConnection {

    // Owm methods of Tracker-2.0.Tracker.SparqlConnection

    query(sparql: string | null, cancellable: Gio.Cancellable | null): any
    query_async(sparql: string | null, cancellable: Gio.Cancellable | null, _callback_: Gio.AsyncReadyCallback<this> | null): void

    // Overloads of query_async

    /**
     * Promisified version of {@link query_async}
     * 
     * 
     * @param sparql 
     * @param cancellable 
     * @param _callback_ 
     * @returns A Promise of the result of {@link query_async}
     */
    query_async(sparql: string | null, cancellable: Gio.Cancellable | null): globalThis.Promise<any>
    query_finish(_res_: Gio.AsyncResult): any
    update(sparql: string | null, priority: number, cancellable: Gio.Cancellable | null): void
    update_async(sparql: string | null, priority: number, cancellable: Gio.Cancellable | null, _callback_: Gio.AsyncReadyCallback<this> | null): void

    // Overloads of update_async

    /**
     * Promisified version of {@link update_async}
     * 
     * 
     * @param sparql 
     * @param priority 
     * @param cancellable 
     * @param _callback_ 
     * @returns A Promise of the result of {@link update_async}
     */
    update_async(sparql: string | null, priority: number, cancellable: Gio.Cancellable | null): globalThis.Promise<void>
    update_finish(_res_: Gio.AsyncResult): void
    update_array_async(sparql: string[], priority: number, cancellable: Gio.Cancellable | null, _callback_: Gio.AsyncReadyCallback<this> | null): void

    // Overloads of update_array_async

    /**
     * Promisified version of {@link update_array_async}
     * 
     * 
     * @param sparql 
     * @param priority 
     * @param cancellable 
     * @param _callback_ 
     * @returns A Promise of the result of {@link update_array_async}
     */
    update_array_async(sparql: string[], priority: number, cancellable: Gio.Cancellable | null): globalThis.Promise<any[] | null>
    update_array_finish(_res_: Gio.AsyncResult): any[] | null
    update_blank(sparql: string | null, priority: number, cancellable: Gio.Cancellable | null): GLib.Variant | null
    update_blank_async(sparql: string | null, priority: number, cancellable: Gio.Cancellable | null, _callback_: Gio.AsyncReadyCallback<this> | null): void

    // Overloads of update_blank_async

    /**
     * Promisified version of {@link update_blank_async}
     * 
     * 
     * @param sparql 
     * @param priority 
     * @param cancellable 
     * @param _callback_ 
     * @returns A Promise of the result of {@link update_blank_async}
     */
    update_blank_async(sparql: string | null, priority: number, cancellable: Gio.Cancellable | null): globalThis.Promise<GLib.Variant | null>
    update_blank_finish(_res_: Gio.AsyncResult): GLib.Variant | null
    load(file: Gio.File, cancellable: Gio.Cancellable | null): void
    load_async(file: Gio.File, cancellable: Gio.Cancellable | null, _callback_: Gio.AsyncReadyCallback<this> | null): void

    // Overloads of load_async

    /**
     * Promisified version of {@link load_async}
     * 
     * 
     * @param file 
     * @param cancellable 
     * @param _callback_ 
     * @returns A Promise of the result of {@link load_async}
     */
    load_async(file: Gio.File, cancellable: Gio.Cancellable | null): globalThis.Promise<void>
    load_finish(_res_: Gio.AsyncResult): void
    statistics(cancellable: Gio.Cancellable | null): any | null
    statistics_async(cancellable: Gio.Cancellable | null, _callback_: Gio.AsyncReadyCallback<this> | null): void

    // Overloads of statistics_async

    /**
     * Promisified version of {@link statistics_async}
     * 
     * 
     * @param cancellable 
     * @param _callback_ 
     * @returns A Promise of the result of {@link statistics_async}
     */
    statistics_async(cancellable: Gio.Cancellable | null): globalThis.Promise<any | null>
    statistics_finish(_res_: Gio.AsyncResult): any | null
    get_namespace_manager(): NamespaceManager | null
    query_statement(sparql: string | null, cancellable: Gio.Cancellable | null): any | null

    // Own virtual methods of Tracker-2.0.Tracker.SparqlConnection

    vfunc_query(sparql: string | null, cancellable: Gio.Cancellable | null): any
    vfunc_query_async(sparql: string | null, cancellable: Gio.Cancellable | null, _callback_: Gio.AsyncReadyCallback<this> | null): void
    vfunc_query_finish(_res_: Gio.AsyncResult): any
    vfunc_update(sparql: string | null, priority: number, cancellable: Gio.Cancellable | null): void
    vfunc_update_async(sparql: string | null, priority: number, cancellable: Gio.Cancellable | null, _callback_: Gio.AsyncReadyCallback<this> | null): void
    vfunc_update_finish(_res_: Gio.AsyncResult): void
    vfunc_update_array_async(sparql: string[], priority: number, cancellable: Gio.Cancellable | null, _callback_: Gio.AsyncReadyCallback<this> | null): void
    vfunc_update_array_finish(_res_: Gio.AsyncResult): any[] | null
    vfunc_update_blank(sparql: string | null, priority: number, cancellable: Gio.Cancellable | null): GLib.Variant | null
    vfunc_update_blank_async(sparql: string | null, priority: number, cancellable: Gio.Cancellable | null, _callback_: Gio.AsyncReadyCallback<this> | null): void
    vfunc_update_blank_finish(_res_: Gio.AsyncResult): GLib.Variant | null
    vfunc_load(file: Gio.File, cancellable: Gio.Cancellable | null): void
    vfunc_load_async(file: Gio.File, cancellable: Gio.Cancellable | null, _callback_: Gio.AsyncReadyCallback<this> | null): void
    vfunc_load_finish(_res_: Gio.AsyncResult): void
    vfunc_statistics(cancellable: Gio.Cancellable | null): any | null
    vfunc_statistics_async(cancellable: Gio.Cancellable | null, _callback_: Gio.AsyncReadyCallback<this> | null): void
    vfunc_statistics_finish(_res_: Gio.AsyncResult): any | null
    vfunc_get_namespace_manager(): NamespaceManager | null
    vfunc_query_statement(sparql: string | null, cancellable: Gio.Cancellable | null): any | null

    // Class property signals of Tracker-2.0.Tracker.SparqlConnection

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class SparqlConnection extends GObject.Object {

    // Own properties of Tracker-2.0.Tracker.SparqlConnection

    static name: string
    static $gtype: GObject.GType<SparqlConnection>

    // Constructors of Tracker-2.0.Tracker.SparqlConnection

    constructor(config?: SparqlConnection.ConstructorProperties) 
    _init(config?: SparqlConnection.ConstructorProperties): void
    static get_async(cancellable: Gio.Cancellable | null, _callback_: Gio.AsyncReadyCallback<SparqlConnection> | null): void
    static get_finish(_res_: Gio.AsyncResult): any
    static get(cancellable: Gio.Cancellable | null): any
    static remote_new(uri_base: string | null): any
    static local_new(flags: any, store: Gio.File, journal: Gio.File | null, ontology: Gio.File | null, cancellable: Gio.Cancellable | null): any
    static local_new_async(flags: any, store: Gio.File, journal: Gio.File | null, ontology: Gio.File | null, cancellable: Gio.Cancellable | null, _callback_: Gio.AsyncReadyCallback<SparqlConnection> | null): void
    static local_new_finish(_res_: Gio.AsyncResult): any
    static set_domain(domain: string | null): void
    static get_domain(): string | null
    static set_dbus_connection(dbus_connection: Gio.DBusConnection): void
    static get_dbus_connection(): Gio.DBusConnection | null
}

module SparqlCursor {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Tracker-2.0.Tracker.SparqlCursor

        connection?: any | null
    }

}

interface SparqlCursor {

    // Own properties of Tracker-2.0.Tracker.SparqlCursor

    connection: any
    readonly n_columns: number
    readonly nColumns: number

    // Owm methods of Tracker-2.0.Tracker.SparqlCursor

    get_value_type(column: number): any
    get_variable_name(column: number): string | null
    get_string(column: number): [ /* returnType */ string | null, /* length */ number ]
    next(cancellable: Gio.Cancellable | null): boolean
    next_async(cancellable: Gio.Cancellable | null, _callback_: Gio.AsyncReadyCallback<this> | null): void

    // Overloads of next_async

    /**
     * Promisified version of {@link next_async}
     * 
     * 
     * @param cancellable 
     * @param _callback_ 
     * @returns A Promise of the result of {@link next_async}
     */
    next_async(cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>
    next_finish(_res_: Gio.AsyncResult): boolean
    rewind(): void
    close(): void
    get_integer(column: number): number
    get_double(column: number): number
    get_boolean(column: number): boolean
    is_bound(column: number): boolean
    get_connection(): any
    set_connection(value: any): void
    get_n_columns(): number

    // Own virtual methods of Tracker-2.0.Tracker.SparqlCursor

    vfunc_get_value_type(column: number): any
    vfunc_get_variable_name(column: number): string | null
    vfunc_get_string(column: number): [ /* returnType */ string | null, /* length */ number ]
    vfunc_next(cancellable: Gio.Cancellable | null): boolean
    vfunc_next_async(cancellable: Gio.Cancellable | null, _callback_: Gio.AsyncReadyCallback<this> | null): void
    vfunc_next_finish(_res_: Gio.AsyncResult): boolean
    vfunc_rewind(): void
    vfunc_close(): void
    vfunc_get_integer(column: number): number
    vfunc_get_double(column: number): number
    vfunc_get_boolean(column: number): boolean
    vfunc_is_bound(column: number): boolean
    vfunc_get_n_columns(): number

    // Class property signals of Tracker-2.0.Tracker.SparqlCursor

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

class SparqlCursor extends GObject.Object {

    // Own properties of Tracker-2.0.Tracker.SparqlCursor

    static name: string
    static $gtype: GObject.GType<SparqlCursor>

    // Constructors of Tracker-2.0.Tracker.SparqlCursor

    constructor(config?: SparqlCursor.ConstructorProperties) 
    _init(config?: SparqlCursor.ConstructorProperties): void
}

module SparqlStatement {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Tracker-2.0.Tracker.SparqlStatement

        sparql?: string | null
        connection?: any | null
    }

}

interface SparqlStatement {

    // Own properties of Tracker-2.0.Tracker.SparqlStatement

    sparql: string | null
    connection: any

    // Owm methods of Tracker-2.0.Tracker.SparqlStatement

    bind_int(name: string | null, value: number): void
    bind_boolean(name: string | null, value: boolean): void
    bind_string(name: string | null, value: string | null): void
    bind_double(name: string | null, value: number): void
    execute(cancellable: Gio.Cancellable | null): any
    execute_async(cancellable: Gio.Cancellable | null, _callback_: Gio.AsyncReadyCallback<this> | null): void

    // Overloads of execute_async

    /**
     * Promisified version of {@link execute_async}
     * 
     * 
     * @param cancellable 
     * @param _callback_ 
     * @returns A Promise of the result of {@link execute_async}
     */
    execute_async(cancellable: Gio.Cancellable | null): globalThis.Promise<any>
    execute_finish(_res_: Gio.AsyncResult): any
    get_sparql(): string | null
    set_sparql(value: string | null): void
    get_connection(): any
    set_connection(value: any): void

    // Own virtual methods of Tracker-2.0.Tracker.SparqlStatement

    vfunc_bind_int(name: string | null, value: number): void
    vfunc_bind_boolean(name: string | null, value: boolean): void
    vfunc_bind_string(name: string | null, value: string | null): void
    vfunc_bind_double(name: string | null, value: number): void
    vfunc_execute(cancellable: Gio.Cancellable | null): any
    vfunc_execute_async(cancellable: Gio.Cancellable | null, _callback_: Gio.AsyncReadyCallback<this> | null): void
    vfunc_execute_finish(_res_: Gio.AsyncResult): any

    // Class property signals of Tracker-2.0.Tracker.SparqlStatement

    connect(sigName: "notify::sparql", callback: (($obj: SparqlStatement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sparql", callback: (($obj: SparqlStatement, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sparql", ...args: any[]): void
    connect(sigName: "notify::connection", callback: (($obj: SparqlStatement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::connection", callback: (($obj: SparqlStatement, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::connection", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class SparqlStatement extends GObject.Object {

    // Own properties of Tracker-2.0.Tracker.SparqlStatement

    static name: string
    static $gtype: GObject.GType<SparqlStatement>

    // Constructors of Tracker-2.0.Tracker.SparqlStatement

    constructor(config?: SparqlStatement.ConstructorProperties) 
    _init(config?: SparqlStatement.ConstructorProperties): void
}

interface NamespaceManagerClass {

    // Own fields of Tracker-2.0.Tracker.NamespaceManagerClass

    parent_class: GObject.ObjectClass
}

abstract class NamespaceManagerClass {

    // Own properties of Tracker-2.0.Tracker.NamespaceManagerClass

    static name: string
}

interface NotifierClass {

    // Own fields of Tracker-2.0.Tracker.NotifierClass

    parent_class: GObject.ObjectClass
    padding: any[]
}

abstract class NotifierClass {

    // Own properties of Tracker-2.0.Tracker.NotifierClass

    static name: string
}

interface NotifierEvent {

    // Owm methods of Tracker-2.0.Tracker.NotifierEvent

    /**
     * Returns the event type.
     * @returns The event type
     */
    get_event_type(): NotifierEventType
    /**
     * Returns the tracker:id of the element being notified upon.
     * @returns the resource ID
     */
    get_id(): number
    /**
     * Returns the location (e.g. an URI) of the element if the notifier
     * has the flag %TRACKER_NOTIFIER_FLAG_QUERY_LOCATION, and it can
     * be obtained at the time of emission.
     * @returns The element location, or %NULL
     */
    get_location(): string | null
    /**
     * Returns the RDF type that this notification event relates to, in their
     * expanded forms (for example,
     * <http://www.semanticdesktop.org/ontologies/2007/03/22/nfo#Audio>).
     * 
     * A resource may have multiple RDF types. In the case of changes to a
     * resource with multiple types, one event will be notified for each
     * RDF type the notifier is subscribed to.
     * 
     * For performance reasons, Tracker only sends notifications for events that
     * are explicitly marked with the tracker:notify property in their ontology.
     * @returns the RDF type of the element
     */
    get_type(): string | null
    /**
     * Returns the Uniform Resource Name of the element if the
     * notifier has the flag %TRACKER_NOTIFIER_FLAG_QUERY_URN enabled.
     * 
     * This URN is an unique string identifier for the resource being
     * notified upon, typically of the form "urn:uuid:...".
     * @returns The element URN
     */
    get_urn(): string | null
}

class NotifierEvent {

    // Own properties of Tracker-2.0.Tracker.NotifierEvent

    static name: string
}

interface ResourceClass {

    // Own fields of Tracker-2.0.Tracker.ResourceClass

    parent_class: GObject.ObjectClass
}

abstract class ResourceClass {

    // Own properties of Tracker-2.0.Tracker.ResourceClass

    static name: string
}

interface SparqlBuilderClass {
}

abstract class SparqlBuilderClass {

    // Own properties of Tracker-2.0.Tracker.SparqlBuilderClass

    static name: string
}

interface SparqlBuilderPrivate {
}

class SparqlBuilderPrivate {

    // Own properties of Tracker-2.0.Tracker.SparqlBuilderPrivate

    static name: string
}

interface SparqlConnectionClass {

    // Own fields of Tracker-2.0.Tracker.SparqlConnectionClass

    query: (self: any, sparql: string | null, cancellable: Gio.Cancellable | null) => any
    query_async: (self: any, sparql: string | null, cancellable: Gio.Cancellable | null, _callback_: Gio.AsyncReadyCallback | null) => void
    query_finish: (self: any, _res_: Gio.AsyncResult) => any
    update: (self: any, sparql: string | null, priority: number, cancellable: Gio.Cancellable | null) => void
    update_async: (self: any, sparql: string | null, priority: number, cancellable: Gio.Cancellable | null, _callback_: Gio.AsyncReadyCallback | null) => void
    update_finish: (self: any, _res_: Gio.AsyncResult) => void
    update_array_async: (self: any, sparql: string[], priority: number, cancellable: Gio.Cancellable | null, _callback_: Gio.AsyncReadyCallback | null) => void
    update_array_finish: (self: any, _res_: Gio.AsyncResult) => any[] | null
    update_blank: (self: any, sparql: string | null, priority: number, cancellable: Gio.Cancellable | null) => GLib.Variant | null
    update_blank_async: (self: any, sparql: string | null, priority: number, cancellable: Gio.Cancellable | null, _callback_: Gio.AsyncReadyCallback | null) => void
    update_blank_finish: (self: any, _res_: Gio.AsyncResult) => GLib.Variant | null
    load: (self: any, file: Gio.File, cancellable: Gio.Cancellable | null) => void
    load_async: (self: any, file: Gio.File, cancellable: Gio.Cancellable | null, _callback_: Gio.AsyncReadyCallback | null) => void
    load_finish: (self: any, _res_: Gio.AsyncResult) => void
    statistics: (self: any, cancellable: Gio.Cancellable | null) => any | null
    statistics_async: (self: any, cancellable: Gio.Cancellable | null, _callback_: Gio.AsyncReadyCallback | null) => void
    statistics_finish: (self: any, _res_: Gio.AsyncResult) => any | null
    get_namespace_manager: (self: any) => NamespaceManager | null
    query_statement: (self: any, sparql: string | null, cancellable: Gio.Cancellable | null) => any | null
}

abstract class SparqlConnectionClass {

    // Own properties of Tracker-2.0.Tracker.SparqlConnectionClass

    static name: string
}

interface SparqlConnectionPrivate {
}

class SparqlConnectionPrivate {

    // Own properties of Tracker-2.0.Tracker.SparqlConnectionPrivate

    static name: string
}

interface SparqlCursorClass {

    // Own fields of Tracker-2.0.Tracker.SparqlCursorClass

    get_value_type: (self: any, column: number) => any
    get_variable_name: (self: any, column: number) => string | null
    get_string: (self: any, column: number) => [ /* returnType */ string | null, /* length */ number ]
    next: (self: any, cancellable: Gio.Cancellable | null) => boolean
    next_async: (self: any, cancellable: Gio.Cancellable | null, _callback_: Gio.AsyncReadyCallback | null) => void
    next_finish: (self: any, _res_: Gio.AsyncResult) => boolean
    rewind: (self: any) => void
    close: (self: any) => void
    get_integer: (self: any, column: number) => number
    get_double: (self: any, column: number) => number
    get_boolean: (self: any, column: number) => boolean
    is_bound: (self: any, column: number) => boolean
}

abstract class SparqlCursorClass {

    // Own properties of Tracker-2.0.Tracker.SparqlCursorClass

    static name: string
}

interface SparqlCursorPrivate {
}

class SparqlCursorPrivate {

    // Own properties of Tracker-2.0.Tracker.SparqlCursorPrivate

    static name: string
}

interface SparqlStatementClass {

    // Own fields of Tracker-2.0.Tracker.SparqlStatementClass

    bind_int: (self: any, name: string | null, value: number) => void
    bind_boolean: (self: any, name: string | null, value: boolean) => void
    bind_string: (self: any, name: string | null, value: string | null) => void
    bind_double: (self: any, name: string | null, value: number) => void
    execute: (self: any, cancellable: Gio.Cancellable | null) => any
    execute_async: (self: any, cancellable: Gio.Cancellable | null, _callback_: Gio.AsyncReadyCallback | null) => void
    execute_finish: (self: any, _res_: Gio.AsyncResult) => any
}

abstract class SparqlStatementClass {

    // Own properties of Tracker-2.0.Tracker.SparqlStatementClass

    static name: string
}

interface SparqlStatementPrivate {
}

class SparqlStatementPrivate {

    // Own properties of Tracker-2.0.Tracker.SparqlStatementPrivate

    static name: string
}

/**
 * Name of the imported GIR library
 * @see https://gitlab.gnome.org/GNOME/gjs/-/blob/master/gi/ns.cpp#L188
 */
const __name__: string
/**
 * Version of the imported GIR library
 * @see https://gitlab.gnome.org/GNOME/gjs/-/blob/master/gi/ns.cpp#L189
 */
const __version__: string
}

export default Tracker;
// END