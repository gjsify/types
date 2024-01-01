
/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './node-tracker-2.0-import.d.ts';
    
/**
 * Tracker-2.0
 */

import type Gio from '@girs/node-gio-2.0';
import type GObject from '@girs/node-gobject-2.0';
import type GLib from '@girs/node-glib-2.0';

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
export enum SparqlConnectionFlags {
    NONE,
    READONLY,
}
export enum SparqlValueType {
    UNBOUND,
    URI,
    STRING,
    INTEGER,
    DOUBLE,
    DATETIME,
    BLANK_NODE,
    BOOLEAN,
}
export enum SparqlError {
    PARSE,
    UNKNOWN_CLASS,
    UNKNOWN_PROPERTY,
    TYPE,
    CONSTRAINT,
    NO_SPACE,
    INTERNAL,
    UNSUPPORTED,
}
export enum SparqlBuilderState {
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
export enum NotifierFlags {
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
export const DBUS_SERVICE: string
export const DBUS_INTERFACE_RESOURCES: string
export const DBUS_OBJECT_RESOURCES: string
export const DBUS_INTERFACE_STATISTICS: string
export const DBUS_OBJECT_STATISTICS: string
export const DBUS_INTERFACE_STATUS: string
export const DBUS_OBJECT_STATUS: string
export const DBUS_INTERFACE_STEROIDS: string
export const DBUS_OBJECT_STEROIDS: string
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
export function checkVersion(requiredMajor: number, requiredMinor: number, requiredMicro: number): string
export function sparqlEscapeUri(uri: string): string | null
export function sparqlEscapeString(literal: string): string | null
export function sparqlGetUuidUrn(): string | null
export module NamespaceManager {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface NamespaceManager {

    // Own properties of Tracker-2.0.Tracker.NamespaceManager

    __gtype__: number

    // Owm methods of Tracker-2.0.Tracker.NamespaceManager

    /**
     * Adds `prefix` as the recognised abbreviaton of `namespace`.
     * 
     * Only one prefix is allowed for a given namespace, and all prefixes must
     * be unique.
     * @param prefix a short, unique prefix to identify `namespace`
     * @param ns the URL of the given namespace
     */
    addPrefix(prefix: string, ns: string): void
    /**
     * If `compact_uri` begins with one of the prefixes known to this
     * #TrackerNamespaceManager, then the return value will be the
     * expanded URI. Otherwise, a copy of `compact_uri` will be returned.
     * @param compactUri a URI or compact URI
     * @returns a newly-allocated string
     */
    expandUri(compactUri: string): string | null
    /**
     * Calls `func` for each known prefix / URI pair.
     * @param func the function to call for each prefix / URI pair
     */
    foreach(func: GLib.HFunc): void
    hasPrefix(prefix: string): boolean
    /**
     * Looks up the namespace URI corresponding to `prefix,` or %NULL if the prefix
     * is not known.
     * @param prefix a string
     * @returns a string owned by the #TrackerNamespaceManager, or %NULL
     */
    lookupPrefix(prefix: string): string
    /**
     * Writes out all namespaces as Turtle `prefix` statements.
     * @returns a newly-allocated string
     */
    printTurtle(): string | null

    // Class property signals of Tracker-2.0.Tracker.NamespaceManager

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

export class NamespaceManager extends GObject.Object {

    // Own properties of Tracker-2.0.Tracker.NamespaceManager

    static name: string

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
    static getDefault(): NamespaceManager
}

export module Notifier {

    // Signal callback interfaces

    /**
     * Signal callback interface for `events`
     */
    export interface EventsSignalCallback {
        (events: NotifierEvent[]): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends Gio.Initable.ConstructorProperties, GObject.Object.ConstructorProperties {

        // Own constructor properties of Tracker-2.0.Tracker.Notifier

        /**
         * RDF classes to listen notifications about.
         */
        classes?: string[] | null
    }

}

export interface Notifier extends Gio.Initable {

    // Own properties of Tracker-2.0.Tracker.Notifier

    /**
     * RDF classes to listen notifications about.
     */
    readonly classes: string[]
    __gtype__: number

    // Own fields of Tracker-2.0.Tracker.Notifier

    parentInstance: GObject.Object

    // Own signals of Tracker-2.0.Tracker.Notifier

    connect(sigName: "events", callback: Notifier.EventsSignalCallback): number
    on(sigName: "events", callback: Notifier.EventsSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "events", callback: Notifier.EventsSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "events", callback: Notifier.EventsSignalCallback): NodeJS.EventEmitter
    emit(sigName: "events", ...args: any[]): void

    // Class property signals of Tracker-2.0.Tracker.Notifier

    connect(sigName: "notify::classes", callback: (...args: any[]) => void): number
    on(sigName: "notify::classes", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::classes", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::classes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::classes", ...args: any[]): void
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

export class Notifier extends GObject.Object {

    // Own properties of Tracker-2.0.Tracker.Notifier

    static name: string

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

export module Resource {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Tracker-2.0.Tracker.Resource

        /**
         * The URI identifier for this class, or %NULL for a
         * blank node.
         */
        identifier?: string | null
    }

}

export interface Resource {

    // Own properties of Tracker-2.0.Tracker.Resource

    /**
     * The URI identifier for this class, or %NULL for a
     * blank node.
     */
    identifier: string | null
    __gtype__: number

    // Own fields of Tracker-2.0.Tracker.Resource

    parentInstance: GObject.Object

    // Owm methods of Tracker-2.0.Tracker.Resource

    /**
     * Adds a boolean object to a multi-valued property.
     * @param propertyUri a string identifying the property to modify
     * @param value the property object
     */
    addBoolean(propertyUri: string, value: boolean): void
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
     * @returns the first boolean object
     */
    getFirstBoolean(propertyUri: string): boolean
    /**
     * Returns the first double object previously assigned to a property.
     * @param propertyUri a string identifying the property to look up
     * @returns the first double object
     */
    getFirstDouble(propertyUri: string): number
    /**
     * Returns the first integer object previously assigned to a property.
     * @param propertyUri a string identifying the property to look up
     * @returns the first integer object
     */
    getFirstInt(propertyUri: string): number
    /**
     * Returns the first integer object previously assigned to a property.
     * @param propertyUri a string identifying the property to look up
     * @returns the first integer object
     */
    getFirstInt64(propertyUri: string): number
    /**
     * Returns the first resource object previously assigned to a property.
     * @param propertyUri a string identifying the property to look up
     * @returns the first resource object
     */
    getFirstRelation(propertyUri: string): Resource
    /**
     * Returns the first string object previously assigned to a property.
     * @param propertyUri a string identifying the property to look up
     * @returns the first string object
     */
    getFirstString(propertyUri: string): string
    /**
     * Returns the first resource object previously assigned to a property.
     * @param propertyUri a string identifying the property to look up
     * @returns the first resource object as an URI.
     */
    getFirstUri(propertyUri: string): string
    /**
     * Returns the identifier of a resource.
     * 
     * If the identifier was set to NULL, the identifier returned will be a unique
     * SPARQL blank node identifier, such as "_:123".
     * @returns a string owned by the resource
     */
    getIdentifier(): string
    /**
     * Returns the list of all known values of the given property.
     * @param propertyUri a string identifying the property to look up
     * @returns a #GList of #GValue instances, which must be freed by the caller.
     */
    getValues(propertyUri: string): any[]
    identifierCompareFunc(identifier: string): number
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
    printJsonld(namespaces: NamespaceManager | null): string | null
    /**
     * Generates a SPARQL command to update a database with the information
     * stored in `resource`.
     * 
     * The `namespaces` object is used to expand any compact URI values. In most
     * cases you should pass %NULL, which means the set of namespaces returned by
     * tracker_namespace_manager_get_default() will be used. This defines the
     * usual prefixes for all of the ontologies that Tracker ships with by default.
     * @param namespaces a set of prefixed URLs, or %NULL to use the     default set
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
     * cases you should pass %NULL, which means the set of namespaces returned by
     * tracker_namespace_manager_get_default() will be used. This defines the
     * usual prefixes for all of the ontologies that Tracker ships with by default.
     * @param namespaces a set of prefixed URLs, or %NULL to use the     default set
     * @returns a newly-allocated string
     */
    printTurtle(namespaces: NamespaceManager | null): string | null
    /**
     * Sets a single-valued boolean object.
     * @param propertyUri a string identifying the property to modify
     * @param value the property object
     */
    setBoolean(propertyUri: string, value: boolean): void
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

    // Class property signals of Tracker-2.0.Tracker.Resource

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

    // Own properties of Tracker-2.0.Tracker.Resource

    static name: string

    // Constructors of Tracker-2.0.Tracker.Resource

    constructor(config?: Resource.ConstructorProperties) 
    /**
     * Creates a TrackerResource instance.
     * @constructor 
     * @param identifier A string containing a URI
     * @returns a newly created #TrackerResource. Free with g_object_unref() when done
     */
    constructor(identifier: string) 
    /**
     * Creates a TrackerResource instance.
     * @constructor 
     * @param identifier A string containing a URI
     * @returns a newly created #TrackerResource. Free with g_object_unref() when done
     */
    static new(identifier: string): Resource
    _init(config?: Resource.ConstructorProperties): void
}

export module SparqlBuilder {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Tracker-2.0.Tracker.SparqlBuilder

        length?: number | null
    }

}

export interface SparqlBuilder {

    // Own properties of Tracker-2.0.Tracker.SparqlBuilder

    readonly result: string | null
    length: number
    readonly state: any
    __gtype__: number

    // Owm methods of Tracker-2.0.Tracker.SparqlBuilder

    insertOpen(graph: string | null): void
    insertSilentOpen(graph: string | null): void
    insertClose(): void
    deleteOpen(graph: string | null): void
    deleteClose(): void
    graphOpen(graph: string): void
    graphClose(): void
    whereOpen(): void
    whereClose(): void
    subjectVariable(varName: string): void
    objectVariable(varName: string): void
    subjectIri(iri: string): void
    subject(s: string): void
    predicateIri(iri: string): void
    predicate(s: string): void
    objectIri(iri: string): void
    object(s: string): void
    objectString(literal: string): void
    objectUnvalidated(value: string): void
    objectBoolean(literal: boolean): void
    objectInt64(literal: number): void
    objectDate(literal: number): /* literal */ number
    objectDouble(literal: number): void
    objectBlankOpen(): void
    objectBlankClose(): void
    prepend(raw: string): void
    append(raw: string): void
    getResult(): string
    getLength(): number
    getState(): any

    // Class property signals of Tracker-2.0.Tracker.SparqlBuilder

    connect(sigName: "notify::result", callback: (...args: any[]) => void): number
    on(sigName: "notify::result", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::result", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::result", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::result", ...args: any[]): void
    connect(sigName: "notify::length", callback: (...args: any[]) => void): number
    on(sigName: "notify::length", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::length", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::length", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::length", ...args: any[]): void
    connect(sigName: "notify::state", callback: (...args: any[]) => void): number
    on(sigName: "notify::state", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::state", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::state", ...args: any[]): void
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

export class SparqlBuilder extends GObject.Object {

    // Own properties of Tracker-2.0.Tracker.SparqlBuilder

    static name: string

    // Constructors of Tracker-2.0.Tracker.SparqlBuilder

    constructor(config?: SparqlBuilder.ConstructorProperties) 
    static update(): SparqlBuilder
    static embeddedInsert(): SparqlBuilder
    constructor() 
    static new(): SparqlBuilder
    _init(config?: SparqlBuilder.ConstructorProperties): void
}

export module SparqlConnection {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface SparqlConnection {

    // Own properties of Tracker-2.0.Tracker.SparqlConnection

    __gtype__: number

    // Owm methods of Tracker-2.0.Tracker.SparqlConnection

    // Has conflict: query(sparql: string, cancellable: Gio.Cancellable | null): any
    // Has conflict: queryAsync(sparql: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    // Has conflict: queryFinish(res: Gio.AsyncResult): any
    // Has conflict: update(sparql: string, priority: number, cancellable: Gio.Cancellable | null): void
    // Has conflict: updateAsync(sparql: string, priority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    // Has conflict: updateFinish(res: Gio.AsyncResult): void
    // Has conflict: updateArrayAsync(sparql: string[], priority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    // Has conflict: updateArrayFinish(res: Gio.AsyncResult): any[] | null
    // Has conflict: updateBlank(sparql: string, priority: number, cancellable: Gio.Cancellable | null): GLib.Variant | null
    // Has conflict: updateBlankAsync(sparql: string, priority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    // Has conflict: updateBlankFinish(res: Gio.AsyncResult): GLib.Variant | null
    // Has conflict: load(file: Gio.File, cancellable: Gio.Cancellable | null): void
    // Has conflict: loadAsync(file: Gio.File, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    // Has conflict: loadFinish(res: Gio.AsyncResult): void
    // Has conflict: statistics(cancellable: Gio.Cancellable | null): any | null
    // Has conflict: statisticsAsync(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    // Has conflict: statisticsFinish(res: Gio.AsyncResult): any | null
    // Has conflict: getNamespaceManager(): NamespaceManager | null
    // Has conflict: queryStatement(sparql: string, cancellable: Gio.Cancellable | null): any | null

    // Own virtual methods of Tracker-2.0.Tracker.SparqlConnection

    query(sparql: string, cancellable: Gio.Cancellable | null): any
    queryAsync(sparql: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    queryFinish(res: Gio.AsyncResult): any
    update(sparql: string, priority: number, cancellable: Gio.Cancellable | null): void
    updateAsync(sparql: string, priority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    updateFinish(res: Gio.AsyncResult): void
    updateArrayAsync(sparql: string[], priority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    updateArrayFinish(res: Gio.AsyncResult): any[] | null
    updateBlank(sparql: string, priority: number, cancellable: Gio.Cancellable | null): GLib.Variant | null
    updateBlankAsync(sparql: string, priority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    updateBlankFinish(res: Gio.AsyncResult): GLib.Variant | null
    load(file: Gio.File, cancellable: Gio.Cancellable | null): void
    loadAsync(file: Gio.File, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    loadFinish(res: Gio.AsyncResult): void
    statistics(cancellable: Gio.Cancellable | null): any | null
    statisticsAsync(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    statisticsFinish(res: Gio.AsyncResult): any | null
    getNamespaceManager(): NamespaceManager | null
    queryStatement(sparql: string, cancellable: Gio.Cancellable | null): any | null

    // Class property signals of Tracker-2.0.Tracker.SparqlConnection

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

export class SparqlConnection extends GObject.Object {

    // Own properties of Tracker-2.0.Tracker.SparqlConnection

    static name: string

    // Constructors of Tracker-2.0.Tracker.SparqlConnection

    constructor(config?: SparqlConnection.ConstructorProperties) 
    _init(config?: SparqlConnection.ConstructorProperties): void
    static getAsync(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    static getFinish(res: Gio.AsyncResult): any
    static get(cancellable: Gio.Cancellable | null): any
    static remoteNew(uriBase: string): any
    static localNew(flags: any, store: Gio.File, journal: Gio.File | null, ontology: Gio.File | null, cancellable: Gio.Cancellable | null): any
    static localNewAsync(flags: any, store: Gio.File, journal: Gio.File | null, ontology: Gio.File | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    static localNewFinish(res: Gio.AsyncResult): any
    static setDomain(domain: string | null): void
    static getDomain(): string | null
    static setDbusConnection(dbusConnection: Gio.DBusConnection): void
    static getDbusConnection(): Gio.DBusConnection | null
}

export module SparqlCursor {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Tracker-2.0.Tracker.SparqlCursor

        connection?: any | null
    }

}

export interface SparqlCursor {

    // Own properties of Tracker-2.0.Tracker.SparqlCursor

    connection: any
    readonly nColumns: number
    __gtype__: number

    // Owm methods of Tracker-2.0.Tracker.SparqlCursor

    // Has conflict: getValueType(column: number): any
    // Has conflict: getVariableName(column: number): string | null
    // Has conflict: getString(column: number): [ /* returnType */ string | null, /* length */ number ]
    // Has conflict: next(cancellable: Gio.Cancellable | null): boolean
    // Has conflict: nextAsync(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    // Has conflict: nextFinish(res: Gio.AsyncResult): boolean
    // Has conflict: rewind(): void
    // Has conflict: close(): void
    // Has conflict: getInteger(column: number): number
    // Has conflict: getDouble(column: number): number
    // Has conflict: getBoolean(column: number): boolean
    // Has conflict: isBound(column: number): boolean
    getConnection(): any
    setConnection(value: any): void
    // Has conflict: getNColumns(): number

    // Own virtual methods of Tracker-2.0.Tracker.SparqlCursor

    getValueType(column: number): any
    getVariableName(column: number): string | null
    getString(column: number): [ /* returnType */ string | null, /* length */ number ]
    next(cancellable: Gio.Cancellable | null): boolean
    nextAsync(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    nextFinish(res: Gio.AsyncResult): boolean
    rewind(): void
    close(): void
    getInteger(column: number): number
    getDouble(column: number): number
    getBoolean(column: number): boolean
    isBound(column: number): boolean
    getNColumns(): number

    // Class property signals of Tracker-2.0.Tracker.SparqlCursor

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

export class SparqlCursor extends GObject.Object {

    // Own properties of Tracker-2.0.Tracker.SparqlCursor

    static name: string

    // Constructors of Tracker-2.0.Tracker.SparqlCursor

    constructor(config?: SparqlCursor.ConstructorProperties) 
    _init(config?: SparqlCursor.ConstructorProperties): void
}

export module SparqlStatement {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Tracker-2.0.Tracker.SparqlStatement

        sparql?: string | null
        connection?: any | null
    }

}

export interface SparqlStatement {

    // Own properties of Tracker-2.0.Tracker.SparqlStatement

    sparql: string | null
    connection: any
    __gtype__: number

    // Owm methods of Tracker-2.0.Tracker.SparqlStatement

    // Has conflict: bindInt(name: string, value: number): void
    // Has conflict: bindBoolean(name: string, value: boolean): void
    // Has conflict: bindString(name: string, value: string): void
    // Has conflict: bindDouble(name: string, value: number): void
    // Has conflict: execute(cancellable: Gio.Cancellable | null): any
    // Has conflict: executeAsync(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    // Has conflict: executeFinish(res: Gio.AsyncResult): any
    getSparql(): string
    setSparql(value: string): void
    getConnection(): any
    setConnection(value: any): void

    // Own virtual methods of Tracker-2.0.Tracker.SparqlStatement

    bindInt(name: string, value: number): void
    bindBoolean(name: string, value: boolean): void
    bindString(name: string, value: string): void
    bindDouble(name: string, value: number): void
    execute(cancellable: Gio.Cancellable | null): any
    executeAsync(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    executeFinish(res: Gio.AsyncResult): any

    // Class property signals of Tracker-2.0.Tracker.SparqlStatement

    connect(sigName: "notify::sparql", callback: (...args: any[]) => void): number
    on(sigName: "notify::sparql", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::sparql", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::sparql", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::sparql", ...args: any[]): void
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

export class SparqlStatement extends GObject.Object {

    // Own properties of Tracker-2.0.Tracker.SparqlStatement

    static name: string

    // Constructors of Tracker-2.0.Tracker.SparqlStatement

    constructor(config?: SparqlStatement.ConstructorProperties) 
    _init(config?: SparqlStatement.ConstructorProperties): void
}

export interface NamespaceManagerClass {

    // Own fields of Tracker-2.0.Tracker.NamespaceManagerClass

    parentClass: GObject.ObjectClass
}

export abstract class NamespaceManagerClass {

    // Own properties of Tracker-2.0.Tracker.NamespaceManagerClass

    static name: string
}

export interface NotifierClass {

    // Own fields of Tracker-2.0.Tracker.NotifierClass

    parentClass: GObject.ObjectClass
    padding: any[]
}

export abstract class NotifierClass {

    // Own properties of Tracker-2.0.Tracker.NotifierClass

    static name: string
}

export interface NotifierEvent {

    // Owm methods of Tracker-2.0.Tracker.NotifierEvent

    /**
     * Returns the event type.
     * @returns The event type
     */
    getEventType(): NotifierEventType
    /**
     * Returns the tracker:id of the element being notified upon.
     * @returns the resource ID
     */
    getId(): number
    /**
     * Returns the location (e.g. an URI) of the element if the notifier
     * has the flag %TRACKER_NOTIFIER_FLAG_QUERY_LOCATION, and it can
     * be obtained at the time of emission.
     * @returns The element location, or %NULL
     */
    getLocation(): string | null
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
    getType(): string
    /**
     * Returns the Uniform Resource Name of the element if the
     * notifier has the flag %TRACKER_NOTIFIER_FLAG_QUERY_URN enabled.
     * 
     * This URN is an unique string identifier for the resource being
     * notified upon, typically of the form "urn:uuid:...".
     * @returns The element URN
     */
    getUrn(): string
}

export class NotifierEvent {

    // Own properties of Tracker-2.0.Tracker.NotifierEvent

    static name: string
}

export interface ResourceClass {

    // Own fields of Tracker-2.0.Tracker.ResourceClass

    parentClass: GObject.ObjectClass
}

export abstract class ResourceClass {

    // Own properties of Tracker-2.0.Tracker.ResourceClass

    static name: string
}

export interface SparqlBuilderClass {
}

export abstract class SparqlBuilderClass {

    // Own properties of Tracker-2.0.Tracker.SparqlBuilderClass

    static name: string
}

export interface SparqlBuilderPrivate {
}

export class SparqlBuilderPrivate {

    // Own properties of Tracker-2.0.Tracker.SparqlBuilderPrivate

    static name: string
}

export interface SparqlConnectionClass {

    // Own fields of Tracker-2.0.Tracker.SparqlConnectionClass

    query: (self: any, sparql: string, cancellable: Gio.Cancellable | null) => any
    queryAsync: (self: any, sparql: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null) => void
    queryFinish: (self: any, res: Gio.AsyncResult) => any
    update: (self: any, sparql: string, priority: number, cancellable: Gio.Cancellable | null) => void
    updateAsync: (self: any, sparql: string, priority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null) => void
    updateFinish: (self: any, res: Gio.AsyncResult) => void
    updateArrayAsync: (self: any, sparql: string[], priority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null) => void
    updateArrayFinish: (self: any, res: Gio.AsyncResult) => any[] | null
    updateBlank: (self: any, sparql: string, priority: number, cancellable: Gio.Cancellable | null) => GLib.Variant | null
    updateBlankAsync: (self: any, sparql: string, priority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null) => void
    updateBlankFinish: (self: any, res: Gio.AsyncResult) => GLib.Variant | null
    load: (self: any, file: Gio.File, cancellable: Gio.Cancellable | null) => void
    loadAsync: (self: any, file: Gio.File, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null) => void
    loadFinish: (self: any, res: Gio.AsyncResult) => void
    statistics: (self: any, cancellable: Gio.Cancellable | null) => any | null
    statisticsAsync: (self: any, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null) => void
    statisticsFinish: (self: any, res: Gio.AsyncResult) => any | null
    getNamespaceManager: (self: any) => NamespaceManager | null
    queryStatement: (self: any, sparql: string, cancellable: Gio.Cancellable | null) => any | null
}

export abstract class SparqlConnectionClass {

    // Own properties of Tracker-2.0.Tracker.SparqlConnectionClass

    static name: string
}

export interface SparqlConnectionPrivate {
}

export class SparqlConnectionPrivate {

    // Own properties of Tracker-2.0.Tracker.SparqlConnectionPrivate

    static name: string
}

export interface SparqlCursorClass {

    // Own fields of Tracker-2.0.Tracker.SparqlCursorClass

    getValueType: (self: any, column: number) => any
    getVariableName: (self: any, column: number) => string | null
    getString: (self: any, column: number) => [ /* returnType */ string | null, /* length */ number ]
    next: (self: any, cancellable: Gio.Cancellable | null) => boolean
    nextAsync: (self: any, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null) => void
    nextFinish: (self: any, res: Gio.AsyncResult) => boolean
    rewind: (self: any) => void
    close: (self: any) => void
    getInteger: (self: any, column: number) => number
    getDouble: (self: any, column: number) => number
    getBoolean: (self: any, column: number) => boolean
    isBound: (self: any, column: number) => boolean
}

export abstract class SparqlCursorClass {

    // Own properties of Tracker-2.0.Tracker.SparqlCursorClass

    static name: string
}

export interface SparqlCursorPrivate {
}

export class SparqlCursorPrivate {

    // Own properties of Tracker-2.0.Tracker.SparqlCursorPrivate

    static name: string
}

export interface SparqlStatementClass {

    // Own fields of Tracker-2.0.Tracker.SparqlStatementClass

    bindInt: (self: any, name: string, value: number) => void
    bindBoolean: (self: any, name: string, value: boolean) => void
    bindString: (self: any, name: string, value: string) => void
    bindDouble: (self: any, name: string, value: number) => void
    execute: (self: any, cancellable: Gio.Cancellable | null) => any
    executeAsync: (self: any, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null) => void
    executeFinish: (self: any, res: Gio.AsyncResult) => any
}

export abstract class SparqlStatementClass {

    // Own properties of Tracker-2.0.Tracker.SparqlStatementClass

    static name: string
}

export interface SparqlStatementPrivate {
}

export class SparqlStatementPrivate {

    // Own properties of Tracker-2.0.Tracker.SparqlStatementPrivate

    static name: string
}

// END