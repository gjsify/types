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
import type GModule from '@girs/gmodule-2.0';

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
    class SparqlError extends GLib.Error {
        // Own fields of Tracker-2.0.SparqlError

        PARSE: number;
        UNKNOWN_CLASS: number;
        UNKNOWN_PROPERTY: number;
        TYPE: number;
        CONSTRAINT: number;
        NO_SPACE: number;
        INTERNAL: number;
        UNSUPPORTED: number;

        // Constructors of Tracker-2.0.SparqlError

        constructor(options: { message: string; code: number });
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
    const DBUS_SERVICE: string;
    const DBUS_INTERFACE_RESOURCES: string;
    const DBUS_OBJECT_RESOURCES: string;
    const DBUS_INTERFACE_STATISTICS: string;
    const DBUS_OBJECT_STATISTICS: string;
    const DBUS_INTERFACE_STATUS: string;
    const DBUS_OBJECT_STATUS: string;
    const DBUS_INTERFACE_STEROIDS: string;
    const DBUS_OBJECT_STEROIDS: string;
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
    function check_version(required_major: number, required_minor: number, required_micro: number): string;
    function sparql_escape_uri(uri: string): string;
    function sparql_escape_string(literal: string): string;
    function sparql_get_uuid_urn(): string;
    /**
     * Flags affecting #TrackerNotifier behavior.
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
    module NamespaceManager {
        // Constructor properties interface
    }

    class NamespaceManager extends GObject.Object {
        // Constructors of Tracker-2.0.NamespaceManager

        static ['new'](): NamespaceManager;

        // Owm methods of Tracker-2.0.NamespaceManager

        /**
         * Returns the global #TrackerNamespaceManager that contains a set of well-known
         * namespaces and prefixes, such as rdf:, rdfs:, nie:, tracker:, etc.
         *
         * Note that the list of prefixes and namespaces is hardcoded in
         * libtracker-sparql. It may not correspond with the installed set of
         * ontologies, if they have been modified since they were installed.
         */
        static get_default(): NamespaceManager;

        // Owm methods of Tracker-2.0.NamespaceManager

        /**
         * Adds `prefix` as the recognised abbreviaton of `namespace`.
         *
         * Only one prefix is allowed for a given namespace, and all prefixes must
         * be unique.
         * @param prefix a short, unique prefix to identify @namespace
         * @param ns the URL of the given namespace
         */
        add_prefix(prefix: string, ns: string): void;
        /**
         * If `compact_uri` begins with one of the prefixes known to this
         * #TrackerNamespaceManager, then the return value will be the
         * expanded URI. Otherwise, a copy of `compact_uri` will be returned.
         * @param compact_uri a URI or compact URI
         * @returns a newly-allocated string
         */
        expand_uri(compact_uri: string): string;
        /**
         * Calls `func` for each known prefix / URI pair.
         * @param func the function to call for each prefix / URI pair
         */
        foreach(func: GLib.HFunc): void;
        has_prefix(prefix: string): boolean;
        /**
         * Looks up the namespace URI corresponding to `prefix,` or %NULL if the prefix
         * is not known.
         * @param prefix a string
         * @returns a string owned by the #TrackerNamespaceManager, or %NULL
         */
        lookup_prefix(prefix: string): string;
        /**
         * Writes out all namespaces as Turtle `prefix` statements.
         * @returns a newly-allocated string
         */
        print_turtle(): string;
    }

    module Notifier {
        // Signal callback interfaces

        interface Events {
            (events: NotifierEvent[]): void;
        }

        // Constructor properties interface
    }

    class Notifier extends GObject.Object {
        // Own properties of Tracker-2.0.Notifier

        /**
         * RDF classes to listen notifications about.
         */
        classes: string[];

        // Constructors of Tracker-2.0.Notifier

        static ['new'](classes: string[] | null, flags: NotifierFlags, cancellable?: Gio.Cancellable | null): Notifier;
    }

    module Resource {
        // Constructor properties interface
    }

    /**
     * The &lt;structname&gt;TrackerResource&lt;/structname&gt; object represents information
     * about a given resource.
     */
    class Resource extends GObject.Object {
        // Own properties of Tracker-2.0.Resource

        /**
         * The URI identifier for this class, or %NULL for a
         * blank node.
         */
        identifier: string;

        // Constructors of Tracker-2.0.Resource

        static ['new'](identifier: string): Resource;

        // Owm methods of Tracker-2.0.Resource

        /**
         * Adds a boolean object to a multi-valued property.
         * @param property_uri a string identifying the property to modify
         * @param value the property object
         */
        add_boolean(property_uri: string, value: boolean): void;
        /**
         * Adds a double object to a multi-valued property.
         * @param property_uri a string identifying the property to modify
         * @param value the property object
         */
        add_double(property_uri: string, value: number): void;
        /**
         * Add 'value' to the list of values for given property.
         *
         * You can pass any kind of GValue for `value,` but serialization functions will
         * normally only be able to serialize URIs/relationships and fundamental value
         * types (string, int, etc.).
         * @param property_uri a string identifying the property to set
         * @param value an initialised #GValue
         */
        add_gvalue(property_uri: string, value: GObject.Value): void;
        /**
         * Adds an integer object to a multi-valued property.
         * @param property_uri a string identifying the property to modify
         * @param value the property object
         */
        add_int(property_uri: string, value: number): void;
        /**
         * Adds an integer object to a multi-valued property.
         * @param property_uri a string identifying the property to modify
         * @param value the property object
         */
        add_int64(property_uri: string, value: number): void;
        /**
         * Adds a resource object to a multi-valued property. This
         * function produces similar RDF to tracker_resource_add_uri(),
         * although in this function the URI will depend on the identifier
         * set on `resource`.
         * @param property_uri a string identifying the property to modify
         * @param resource the property object
         */
        add_relation(property_uri: string, resource: Resource): void;
        /**
         * Adds a string object to a multi-valued property.
         * @param property_uri a string identifying the property to modify
         * @param value the property object
         */
        add_string(property_uri: string, value: string): void;
        /**
         * Adds a resource object to a multi-valued property. This function
         * produces similar RDF to tracker_resource_add_relation(), although
         * it requires that the URI is previously known.
         * @param property_uri a string identifying the property to modify
         * @param value the property object
         */
        add_uri(property_uri: string, value: string): void;
        /**
         * Returns the first boolean object previously assigned to a property.
         * @param property_uri a string identifying the property to look up
         * @returns the first boolean object
         */
        get_first_boolean(property_uri: string): boolean;
        /**
         * Returns the first double object previously assigned to a property.
         * @param property_uri a string identifying the property to look up
         * @returns the first double object
         */
        get_first_double(property_uri: string): number;
        /**
         * Returns the first integer object previously assigned to a property.
         * @param property_uri a string identifying the property to look up
         * @returns the first integer object
         */
        get_first_int(property_uri: string): number;
        /**
         * Returns the first integer object previously assigned to a property.
         * @param property_uri a string identifying the property to look up
         * @returns the first integer object
         */
        get_first_int64(property_uri: string): number;
        /**
         * Returns the first resource object previously assigned to a property.
         * @param property_uri a string identifying the property to look up
         * @returns the first resource object
         */
        get_first_relation(property_uri: string): Resource;
        /**
         * Returns the first string object previously assigned to a property.
         * @param property_uri a string identifying the property to look up
         * @returns the first string object
         */
        get_first_string(property_uri: string): string;
        /**
         * Returns the first resource object previously assigned to a property.
         * @param property_uri a string identifying the property to look up
         * @returns the first resource object as an URI.
         */
        get_first_uri(property_uri: string): string;
        /**
         * Returns the identifier of a resource.
         *
         * If the identifier was set to NULL, the identifier returned will be a unique
         * SPARQL blank node identifier, such as "_:123".
         * @returns a string owned by the resource
         */
        get_identifier(): string;
        /**
         * Returns the list of all known values of the given property.
         * @param property_uri a string identifying the property to look up
         * @returns a #GList of #GValue instances, which must be freed by the caller.
         */
        get_values(property_uri: string): GObject.Value[];
        identifier_compare_func(identifier: string): number;
        /**
         * Serialize all the information in `resource` as a JSON-LD document.
         *
         * See &lt;http://www.jsonld.org/&gt; for more information on the JSON-LD
         * serialization format.
         *
         * The `namespaces` object is used to expand any compact URI values. In most
         * cases you should pass %NULL, which means the set of namespaces returned by
         * tracker_namespace_manager_get_default() will be used. This defines the
         * usual prefixes for all of the ontologies that Tracker ships with by default.
         * @param namespaces a set of prefixed URLs, or %NULL to use the     default set
         * @returns a newly-allocated string containing JSON-LD data.
         */
        print_jsonld(namespaces?: NamespaceManager | null): string;
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
        print_sparql_update(namespaces?: NamespaceManager | null, graph_id?: string | null): string;
        /**
         * Serialize all the information in `resource` as a Turtle document.
         *
         * The generated Turtle should correspond to this standard:
         * &lt;https://www.w3.org/TR/2014/REC-turtle-20140225/&gt;
         *
         * The `namespaces` object is used to expand any compact URI values. In most
         * cases you should pass %NULL, which means the set of namespaces returned by
         * tracker_namespace_manager_get_default() will be used. This defines the
         * usual prefixes for all of the ontologies that Tracker ships with by default.
         * @param namespaces a set of prefixed URLs, or %NULL to use the     default set
         * @returns a newly-allocated string
         */
        print_turtle(namespaces?: NamespaceManager | null): string;
        /**
         * Sets a single-valued boolean object.
         * @param property_uri a string identifying the property to modify
         * @param value the property object
         */
        set_boolean(property_uri: string, value: boolean): void;
        /**
         * Sets a single-valued double object.
         * @param property_uri a string identifying the property to modify
         * @param value the property object
         */
        set_double(property_uri: string, value: number): void;
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
        set_gvalue(property_uri: string, value: GObject.Value): void;
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
        set_identifier(identifier?: string | null): void;
        /**
         * Sets a single-valued integer object.
         * @param property_uri a string identifying the property to modify
         * @param value the property object
         */
        set_int(property_uri: string, value: number): void;
        /**
         * Sets a single-valued integer object.
         * @param property_uri a string identifying the property to modify
         * @param value the property object
         */
        set_int64(property_uri: string, value: number): void;
        /**
         * Sets a single-valued resource object as a #TrackerResource. This
         * function produces similar RDF to tracker_resource_set_uri(),
         * although in this function the URI will depend on the identifier
         * set on `resource`.
         * @param property_uri a string identifying the property to modify
         * @param resource the property object
         */
        set_relation(property_uri: string, resource: Resource): void;
        /**
         * Sets a single-valued string object.
         * @param property_uri a string identifying the property to modify
         * @param value the property object
         */
        set_string(property_uri: string, value: string): void;
        /**
         * Sets a single-valued resource object as a string URI. This function
         * produces similar RDF to tracker_resource_set_relation(), although
         * it requires that the URI is previously known.
         * @param property_uri a string identifying the property to modify
         * @param value the property object
         */
        set_uri(property_uri: string, value: string): void;
    }

    module SparqlBuilder {
        // Constructor properties interface
    }

    class SparqlBuilder extends GObject.Object {
        // Own properties of Tracker-2.0.SparqlBuilder

        readonly result: string;
        length: number;
        readonly state: Tracker_Vala.SparqlBuilderState;

        // Constructors of Tracker-2.0.SparqlBuilder

        static update(): SparqlBuilder;

        static embedded_insert(): SparqlBuilder;

        static ['new'](): SparqlBuilder;

        // Owm methods of Tracker-2.0.SparqlBuilder

        insert_open(graph?: string | null): void;
        insert_silent_open(graph?: string | null): void;
        insert_close(): void;
        delete_open(graph?: string | null): void;
        delete_close(): void;
        graph_open(graph: string): void;
        graph_close(): void;
        where_open(): void;
        where_close(): void;
        subject_variable(var_name: string): void;
        object_variable(var_name: string): void;
        subject_iri(iri: string): void;
        subject(s: string): void;
        predicate_iri(iri: string): void;
        predicate(s: string): void;
        object_iri(iri: string): void;
        object(s: string): void;
        object_string(literal: string): void;
        object_unvalidated(value: string): void;
        object_boolean(literal: boolean): void;
        object_int64(literal: number): void;
        object_date(literal: number): void;
        object_double(literal: number): void;
        object_blank_open(): void;
        object_blank_close(): void;
        prepend(raw: string): void;
        append(raw: string): void;
        get_result(): string;
        get_length(): number;
        get_state(): Tracker_Vala.SparqlBuilderState;
    }

    module SparqlConnection {
        // Constructor properties interface
    }

    abstract class SparqlConnection extends GObject.Object {
        // Owm methods of Tracker-2.0.SparqlConnection

        static get_async(
            cancellable?: Gio.Cancellable | null,
            _callback_?: Gio.AsyncReadyCallback<SparqlConnection> | null,
        ): void;
        static get_finish(_res_: Gio.AsyncResult): Tracker_Vala.SparqlConnection;
        static get(cancellable?: Gio.Cancellable | null): Tracker_Vala.SparqlConnection;
        static remote_new(uri_base: string): Tracker_Vala.SparqlConnection;
        static local_new(
            flags: Tracker_Vala.SparqlConnectionFlags,
            store: Gio.File,
            journal?: Gio.File | null,
            ontology?: Gio.File | null,
            cancellable?: Gio.Cancellable | null,
        ): Tracker_Vala.SparqlConnection;
        static local_new_async(
            flags: Tracker_Vala.SparqlConnectionFlags,
            store: Gio.File,
            journal?: Gio.File | null,
            ontology?: Gio.File | null,
            cancellable?: Gio.Cancellable | null,
            _callback_?: Gio.AsyncReadyCallback<SparqlConnection> | null,
        ): void;
        static local_new_finish(_res_: Gio.AsyncResult): Tracker_Vala.SparqlConnection;
        static set_domain(domain?: string | null): void;
        static get_domain(): string | null;
        static set_dbus_connection(dbus_connection: Gio.DBusConnection): void;
        static get_dbus_connection(): Gio.DBusConnection | null;

        // Owm methods of Tracker-2.0.SparqlConnection

        query(sparql: string, cancellable?: Gio.Cancellable | null): Tracker_Vala.SparqlCursor;
        query_async(
            sparql: string,
            cancellable?: Gio.Cancellable | null,
            _callback_?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        query_finish(_res_: Gio.AsyncResult): Tracker_Vala.SparqlCursor;
        update(sparql: string, priority: number, cancellable?: Gio.Cancellable | null): void;
        update_async(
            sparql: string,
            priority: number,
            cancellable?: Gio.Cancellable | null,
            _callback_?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        update_finish(_res_: Gio.AsyncResult): void;
        update_array_async(
            sparql: string[],
            priority: number,
            cancellable?: Gio.Cancellable | null,
            _callback_?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        update_array_finish(_res_: Gio.AsyncResult): Tracker_Vala.SparqlError[] | null;
        update_blank(sparql: string, priority: number, cancellable?: Gio.Cancellable | null): GLib.Variant | null;
        update_blank_async(
            sparql: string,
            priority: number,
            cancellable?: Gio.Cancellable | null,
            _callback_?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        update_blank_finish(_res_: Gio.AsyncResult): GLib.Variant | null;
        load(file: Gio.File, cancellable?: Gio.Cancellable | null): void;
        load_async(
            file: Gio.File,
            cancellable?: Gio.Cancellable | null,
            _callback_?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        load_finish(_res_: Gio.AsyncResult): void;
        statistics(cancellable?: Gio.Cancellable | null): Tracker_Vala.SparqlCursor | null;
        statistics_async(cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback<this> | null): void;
        statistics_finish(_res_: Gio.AsyncResult): Tracker_Vala.SparqlCursor | null;
        get_namespace_manager(): NamespaceManager | null;
        query_statement(sparql: string, cancellable?: Gio.Cancellable | null): Tracker_Vala.SparqlStatement | null;
    }

    module SparqlCursor {
        // Constructor properties interface
    }

    abstract class SparqlCursor extends GObject.Object {
        // Own properties of Tracker-2.0.SparqlCursor

        connection: Tracker_Vala.SparqlConnection;
        readonly n_columns: number;
        readonly nColumns: number;

        // Owm methods of Tracker-2.0.SparqlCursor

        get_value_type(column: number): Tracker_Vala.SparqlValueType;
        get_variable_name(column: number): string | null;
        get_string(column: number): string | null;
        next(cancellable?: Gio.Cancellable | null): boolean;
        next_async(cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback<this> | null): void;
        next_finish(_res_: Gio.AsyncResult): boolean;
        rewind(): void;
        close(): void;
        get_integer(column: number): number;
        get_double(column: number): number;
        get_boolean(column: number): boolean;
        is_bound(column: number): boolean;
        get_connection(): Tracker_Vala.SparqlConnection;
        set_connection(value: Tracker_Vala.SparqlConnection): void;
        get_n_columns(): number;
    }

    module SparqlStatement {
        // Constructor properties interface
    }

    abstract class SparqlStatement extends GObject.Object {
        // Own properties of Tracker-2.0.SparqlStatement

        sparql: string;
        connection: Tracker_Vala.SparqlConnection;

        // Owm methods of Tracker-2.0.SparqlStatement

        bind_int(name: string, value: number): void;
        bind_boolean(name: string, value: boolean): void;
        bind_string(name: string, value: string): void;
        bind_double(name: string, value: number): void;
        execute(cancellable?: Gio.Cancellable | null): Tracker_Vala.SparqlCursor;
        execute_async(cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback<this> | null): void;
        execute_finish(_res_: Gio.AsyncResult): Tracker_Vala.SparqlCursor;
        get_sparql(): string;
        set_sparql(value: string): void;
        get_connection(): Tracker_Vala.SparqlConnection;
        set_connection(value: Tracker_Vala.SparqlConnection): void;
    }

    class NamespaceManagerClass {}

    class NotifierClass {
        // Own fields of Tracker-2.0.NotifierClass

        padding: any[];
    }

    class NotifierEvent {
        // Owm methods of Tracker-2.0.NotifierEvent

        /**
         * Returns the event type.
         * @returns The event type
         */
        get_event_type(): NotifierEventType;
        /**
         * Returns the tracker:id of the element being notified upon.
         * @returns the resource ID
         */
        get_id(): number;
        /**
         * Returns the location (e.g. an URI) of the element if the notifier
         * has the flag %TRACKER_NOTIFIER_FLAG_QUERY_LOCATION, and it can
         * be obtained at the time of emission.
         * @returns The element location, or %NULL
         */
        get_location(): string | null;
        /**
         * Returns the RDF type that this notification event relates to, in their
         * expanded forms (for example,
         * &lt;http://www.semanticdesktop.org/ontologies/2007/03/22/nfo#Audio&gt;).
         *
         * A resource may have multiple RDF types. In the case of changes to a
         * resource with multiple types, one event will be notified for each
         * RDF type the notifier is subscribed to.
         *
         * For performance reasons, Tracker only sends notifications for events that
         * are explicitly marked with the tracker:notify property in their ontology.
         * @returns the RDF type of the element
         */
        get_type(): string;
        /**
         * Returns the Uniform Resource Name of the element if the
         * notifier has the flag %TRACKER_NOTIFIER_FLAG_QUERY_URN enabled.
         *
         * This URN is an unique string identifier for the resource being
         * notified upon, typically of the form "urn:uuid:...".
         * @returns The element URN
         */
        get_urn(): string;
    }

    class ResourceClass {}

    class SparqlBuilderClass {}

    class SparqlBuilderPrivate {}

    class SparqlConnectionClass {}

    class SparqlConnectionPrivate {}

    class SparqlCursorClass {}

    class SparqlCursorPrivate {}

    class SparqlStatementClass {}

    class SparqlStatementPrivate {}

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

export default Tracker;
// END
