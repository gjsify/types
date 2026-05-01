
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
import type Gio from '@girs/gio-2.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type GModule from '@girs/gmodule-2.0';

export namespace Tracker {

    /**
     * Tracker-2.0
     */


    /**
     * Notifier event types.
     * @gir-type Enum
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


    /**
     * @gir-type Enum
     */
    export namespace SparqlConnectionFlags {
        export const $gtype: GObject.GType<SparqlConnectionFlags>;
    }

    /**
     * @gir-type Enum
     */
    enum SparqlConnectionFlags {
        NONE,
        READONLY,
    }


    /**
     * @gir-type Enum
     */
    export namespace SparqlValueType {
        export const $gtype: GObject.GType<SparqlValueType>;
    }

    /**
     * @gir-type Enum
     */
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


    /**
     * @gir-type Struct
     */
    class SparqlError extends GLib.Error {
        static $gtype: GObject.GType<GLib.Error>;

        // Static fields
        static PARSE: number;

        static UNKNOWN_CLASS: number;

        static UNKNOWN_PROPERTY: number;

        static TYPE: number;

        static CONSTRAINT: number;

        static NO_SPACE: number;

        static INTERNAL: number;

        static UNSUPPORTED: number;

        // Constructors
        constructor(options: { message: string, code: number });
    }


    /**
     * @gir-type Enum
     */
    export namespace SparqlBuilderState {
        export const $gtype: GObject.GType<SparqlBuilderState>;
    }

    /**
     * @gir-type Enum
     */
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
     * @returns `null` if the Tracker library is compatible with the   given version, or a string describing the version mismatch.   The returned string is owned by Tracker and must not be modified   or freed.
     * @since 0.10
     */
    function check_version(required_major: number, required_minor: number, required_micro: number): string;

    /**
     * @param uri 
     */
    function sparql_escape_uri(uri: string): string;

    /**
     * @param literal 
     */
    function sparql_escape_string(literal: string): string;

    function sparql_get_uuid_urn(): string;

    /**
     * Flags affecting {@link Tracker.Notifier} behavior.
     * @gir-type Flags
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
         *   {@link Tracker.Notifier} behavior coalesces those events in one.
         */
        NOTIFY_UNEXTRACTED,
    }


    namespace NamespaceManager {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {

        }
    }

    /**
     * @gir-type Class
     */
    class NamespaceManager extends GObject.Object {
        static $gtype: GObject.GType<NamespaceManager>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: NamespaceManager.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<NamespaceManager.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): NamespaceManager;

        // Signals
        /** @signal */
        connect<K extends keyof NamespaceManager.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, NamespaceManager.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof NamespaceManager.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, NamespaceManager.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof NamespaceManager.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<NamespaceManager.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods
        /**
         * Returns the global {@link Tracker.NamespaceManager} that contains a set of well-known
         * namespaces and prefixes, such as rdf:, rdfs:, nie:, tracker:, etc.
         * 
         * Note that the list of prefixes and namespaces is hardcoded in
         * libtracker-sparql. It may not correspond with the installed set of
         * ontologies, if they have been modified since they were installed.
         */
        static get_default(): NamespaceManager;

        // Methods
        /**
         * Adds `prefix` as the recognised abbreviaton of `namespace`.
         * 
         * Only one prefix is allowed for a given namespace, and all prefixes must
         * be unique.
         * @param prefix a short, unique prefix to identify `namespace`
         * @param ns the URL of the given namespace
         */
        add_prefix(prefix: string, ns: string): void;

        /**
         * If `compact_uri` begins with one of the prefixes known to this
         * {@link Tracker.NamespaceManager}, then the return value will be the
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

        /**
         * @param prefix a string
         * @returns `true` if the {@link Tracker.NamespaceManager} knows about `prefix`, `false` otherwise
         */
        has_prefix(prefix: string): boolean;

        /**
         * Looks up the namespace URI corresponding to `prefix`, or `null` if the prefix
         * is not known.
         * @param prefix a string
         * @returns a string owned by the {@link Tracker.NamespaceManager}, or `null`
         */
        lookup_prefix(prefix: string): string;

        /**
         * Writes out all namespaces as Turtle `prefix` statements.
         * @returns a newly-allocated string
         */
        print_turtle(): string;
    }


    namespace Notifier {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            /**
             * Notifies of changes in the Tracker database.
             * @signal
             */
            events: (arg0: NotifierEvent[]) => void;
            "notify::classes": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps, Gio.Initable.ConstructorProps {
            classes: string[];
        }
    }

    /**
     * @gir-type Class
     */
    class Notifier extends GObject.Object implements Gio.Initable {
        static $gtype: GObject.GType<Notifier>;

        // Properties
        /**
         * RDF classes to listen notifications about.
         * @construct-only
         */
        get classes(): string[];

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Notifier.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<Notifier.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](classes: (string[] | null), flags: NotifierFlags, cancellable: (Gio.Cancellable | null)): Notifier;

        // Signals
        /** @signal */
        connect<K extends keyof Notifier.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Notifier.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Notifier.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Notifier.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Notifier.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Notifier.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        /**
         * Initializes the object implementing the interface.
         * 
         * This method is intended for language bindings. If writing in C,
         * `g_initable_new()` should typically be used instead.
         * 
         * The object must be initialized before any real use after initial
         * construction, either with this function or `g_async_initable_init_async()`.
         * 
         * Implementations may also support cancellation. If `cancellable` is not `null`,
         * then initialization can be cancelled by triggering the cancellable object
         * from another thread. If the operation was cancelled, the error
         * {@link Gio.IOErrorEnum.CANCELLED} will be returned. If `cancellable` is not `null` and
         * the object doesn't support cancellable initialization the error
         * {@link Gio.IOErrorEnum.NOT_SUPPORTED} will be returned.
         * 
         * If the object is not initialized, or initialization returns with an
         * error, then all operations on the object except `g_object_ref()` and
         * `g_object_unref()` are considered to be invalid, and have undefined
         * behaviour. See the [description][iface@Gio.Initable#description] for more details.
         * 
         * Callers should not assume that a class which implements {@link Gio.Initable} can be
         * initialized multiple times, unless the class explicitly documents itself as
         * supporting this. Generally, a class’ implementation of `init()` can assume
         * (and assert) that it will only be called once. Previously, this documentation
         * recommended all {@link Gio.Initable} implementations should be idempotent; that
         * recommendation was relaxed in GLib 2.54.
         * 
         * If a class explicitly supports being initialized multiple times, it is
         * recommended that the method is idempotent: multiple calls with the same
         * arguments should return the same results. Only the first call initializes
         * the object; further calls return the result of the first call.
         * 
         * One reason why a class might need to support idempotent initialization is if
         * it is designed to be used via the singleton pattern, with a
         * {@link GObject.ObjectClass}.constructor that sometimes returns an existing instance.
         * In this pattern, a caller would expect to be able to call `g_initable_init()`
         * on the result of `g_object_new()`, regardless of whether it is in fact a new
         * instance.
         * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore.
         * @returns `true` if successful. If an error has occurred, this function will     return `false` and set `error` appropriately if present.
         */
        init(cancellable: (Gio.Cancellable | null)): boolean;

        /**
         * Initializes the object implementing the interface.
         * 
         * This method is intended for language bindings. If writing in C,
         * `g_initable_new()` should typically be used instead.
         * 
         * The object must be initialized before any real use after initial
         * construction, either with this function or `g_async_initable_init_async()`.
         * 
         * Implementations may also support cancellation. If `cancellable` is not `null`,
         * then initialization can be cancelled by triggering the cancellable object
         * from another thread. If the operation was cancelled, the error
         * {@link Gio.IOErrorEnum.CANCELLED} will be returned. If `cancellable` is not `null` and
         * the object doesn't support cancellable initialization the error
         * {@link Gio.IOErrorEnum.NOT_SUPPORTED} will be returned.
         * 
         * If the object is not initialized, or initialization returns with an
         * error, then all operations on the object except `g_object_ref()` and
         * `g_object_unref()` are considered to be invalid, and have undefined
         * behaviour. See the [description][iface@Gio.Initable#description] for more details.
         * 
         * Callers should not assume that a class which implements {@link Gio.Initable} can be
         * initialized multiple times, unless the class explicitly documents itself as
         * supporting this. Generally, a class’ implementation of `init()` can assume
         * (and assert) that it will only be called once. Previously, this documentation
         * recommended all {@link Gio.Initable} implementations should be idempotent; that
         * recommendation was relaxed in GLib 2.54.
         * 
         * If a class explicitly supports being initialized multiple times, it is
         * recommended that the method is idempotent: multiple calls with the same
         * arguments should return the same results. Only the first call initializes
         * the object; further calls return the result of the first call.
         * 
         * One reason why a class might need to support idempotent initialization is if
         * it is designed to be used via the singleton pattern, with a
         * {@link GObject.ObjectClass}.constructor that sometimes returns an existing instance.
         * In this pattern, a caller would expect to be able to call `g_initable_init()`
         * on the result of `g_object_new()`, regardless of whether it is in fact a new
         * instance.
         * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore.
         * @virtual
         */
        vfunc_init(cancellable: (Gio.Cancellable | null)): boolean;
    }


    namespace Resource {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "notify::identifier": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            identifier: string;
        }
    }

    /**
     * The <structname>TrackerResource</structname> object represents information
     * about a given resource.
     * @gir-type Class
     */
    class Resource extends GObject.Object {
        static $gtype: GObject.GType<Resource>;

        // Properties
        /**
         * The URI identifier for this class, or `null` for a
         * blank node.
         * @default null
         */
        get identifier(): string;
        set identifier(val: string);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Resource.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<Resource.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](identifier: string): Resource;

        // Signals
        /** @signal */
        connect<K extends keyof Resource.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Resource.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Resource.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Resource.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Resource.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Resource.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
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
         * You can pass any kind of GValue for `value`, but serialization functions will
         * normally only be able to serialize URIs/relationships and fundamental value
         * types (string, int, etc.).
         * @param property_uri a string identifying the property to set
         * @param value an initialised {@link GObject.Value}
         */
        add_gvalue(property_uri: string, value: (GObject.Value | any)): void;

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
        add_int64(property_uri: string, value: (bigint | number)): void;

        /**
         * Adds a resource object to a multi-valued property. This
         * function produces similar RDF to `tracker_resource_add_uri()`,
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
         * produces similar RDF to `tracker_resource_add_relation()`, although
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
         * @returns a {@link GLib.List} of {@link GObject.Value} instances, which must be freed by the caller.
         */
        get_values(property_uri: string): unknown[];

        /**
         * @param identifier 
         */
        identifier_compare_func(identifier: string): number;

        /**
         * Serialize all the information in `resource` as a JSON-LD document.
         * 
         * See <http://www.jsonld.org/> for more information on the JSON-LD
         * serialization format.
         * 
         * The `namespaces` object is used to expand any compact URI values. In most
         * cases you should pass `null`, which means the set of namespaces returned by
         * `tracker_namespace_manager_get_default()` will be used. This defines the
         * usual prefixes for all of the ontologies that Tracker ships with by default.
         * @param namespaces a set of prefixed URLs, or `null` to use the     default set
         * @returns a newly-allocated string containing JSON-LD data.
         */
        print_jsonld(namespaces: (NamespaceManager | null)): string;

        /**
         * Generates a SPARQL command to update a database with the information
         * stored in `resource`.
         * 
         * The `namespaces` object is used to expand any compact URI values. In most
         * cases you should pass `null`, which means the set of namespaces returned by
         * `tracker_namespace_manager_get_default()` will be used. This defines the
         * usual prefixes for all of the ontologies that Tracker ships with by default.
         * @param namespaces a set of prefixed URLs, or `null` to use the     default set
         * @param graph_id the URN of the graph the data should be added to,     or `null`
         * @returns a newly-allocated string containing a SPARQL update command.
         */
        print_sparql_update(namespaces: (NamespaceManager | null), graph_id: (string | null)): string;

        /**
         * Serialize all the information in `resource` as a Turtle document.
         * 
         * The generated Turtle should correspond to this standard:
         * <https://www.w3.org/TR/2014/REC-turtle-20140225/>
         * 
         * The `namespaces` object is used to expand any compact URI values. In most
         * cases you should pass `null`, which means the set of namespaces returned by
         * `tracker_namespace_manager_get_default()` will be used. This defines the
         * usual prefixes for all of the ontologies that Tracker ships with by default.
         * @param namespaces a set of prefixed URLs, or `null` to use the     default set
         * @returns a newly-allocated string
         */
        print_turtle(namespaces: (NamespaceManager | null)): string;

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
         * You can pass any kind of GValue for `value`, but serialization functions will
         * normally only be able to serialize URIs/relationships and fundamental value
         * types (string, int, etc.).
         * @param property_uri a string identifying the property to set
         * @param value an initialised {@link GObject.Value}
         */
        set_gvalue(property_uri: string, value: (GObject.Value | any)): void;

        /**
         * Changes the identifier of a {@link Tracker.Resource}. The identifier should be a
         * URI or compact URI, but this is not necessarily enforced. Invalid
         * identifiers may cause errors when serializing the resource or trying to
         * insert the results in a database.
         * 
         * If the identifier is set to NULL, a SPARQL blank node identifier such as
         * "_:123" is assigned to the resource.
         * @param identifier a string identifying the resource
         */
        set_identifier(identifier: (string | null)): void;

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
        set_int64(property_uri: string, value: (bigint | number)): void;

        /**
         * Sets a single-valued resource object as a {@link Tracker.Resource}. This
         * function produces similar RDF to `tracker_resource_set_uri()`,
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
         * produces similar RDF to `tracker_resource_set_relation()`, although
         * it requires that the URI is previously known.
         * @param property_uri a string identifying the property to modify
         * @param value the property object
         */
        set_uri(property_uri: string, value: string): void;
    }


    namespace SparqlBuilder {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "notify::result": (pspec: GObject.ParamSpec) => void;
            "notify::length": (pspec: GObject.ParamSpec) => void;
            "notify::state": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            result: string;
            length: number;
            state: SparqlBuilderState;
        }
    }

    /**
     * @gir-type Class
     */
    class SparqlBuilder extends GObject.Object {
        static $gtype: GObject.GType<SparqlBuilder>;

        // Properties
        /**
         * @read-only
         */
        get result(): string;

        get length(): number;
        set length(val: number);

        /**
         * @read-only
         */
        get state(): SparqlBuilderState;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: SparqlBuilder.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<SparqlBuilder.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static update(): SparqlBuilder;

        static embedded_insert(): SparqlBuilder;

        static ["new"](): SparqlBuilder;

        // Signals
        /** @signal */
        connect<K extends keyof SparqlBuilder.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, SparqlBuilder.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof SparqlBuilder.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, SparqlBuilder.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof SparqlBuilder.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<SparqlBuilder.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * @param graph 
         */
        insert_open(graph: (string | null)): void;

        /**
         * @param graph 
         */
        insert_silent_open(graph: (string | null)): void;

        insert_close(): void;

        /**
         * @param graph 
         */
        delete_open(graph: (string | null)): void;

        delete_close(): void;

        /**
         * @param graph 
         */
        graph_open(graph: string): void;

        graph_close(): void;

        where_open(): void;

        where_close(): void;

        /**
         * @param var_name 
         */
        subject_variable(var_name: string): void;

        /**
         * @param var_name 
         */
        object_variable(var_name: string): void;

        /**
         * @param iri 
         */
        subject_iri(iri: string): void;

        /**
         * @param s 
         */
        subject(s: string): void;

        /**
         * @param iri 
         */
        predicate_iri(iri: string): void;

        /**
         * @param s 
         */
        predicate(s: string): void;

        /**
         * @param iri 
         */
        object_iri(iri: string): void;

        /**
         * @param s 
         */
        object(s: string): void;

        /**
         * @param literal 
         */
        object_string(literal: string): void;

        /**
         * @param value 
         */
        object_unvalidated(value: string): void;

        /**
         * @param literal 
         */
        object_boolean(literal: boolean): void;

        /**
         * @param literal 
         */
        object_int64(literal: (bigint | number)): void;

        /**
         * @param literal 
         */
        object_date(literal: (bigint | number)): number;

        /**
         * @param literal 
         */
        object_double(literal: number): void;

        object_blank_open(): void;

        object_blank_close(): void;

        /**
         * @param raw 
         */
        prepend(raw: string): void;

        /**
         * @param raw 
         */
        append(raw: string): void;

        get_result(): string;

        get_length(): number;

        get_state(): SparqlBuilderState;
    }


    namespace SparqlConnection {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {

        }
    }

    /**
     * @gir-type Class
     */
    abstract class SparqlConnection extends GObject.Object {
        static $gtype: GObject.GType<SparqlConnection>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: SparqlConnection.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<SparqlConnection.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals
        /** @signal */
        connect<K extends keyof SparqlConnection.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, SparqlConnection.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof SparqlConnection.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, SparqlConnection.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof SparqlConnection.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<SparqlConnection.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods
        /**
         * @param cancellable 
         * @param _callback_ 
         */
        static get_async(cancellable: (Gio.Cancellable | null), _callback_: (Gio.AsyncReadyCallback<SparqlConnection> | null)): void;

        /**
         * @param _res_ 
         */
        static get_finish(_res_: Gio.AsyncResult): SparqlConnection;

        /**
         * @param cancellable 
         */
        static get(cancellable: (Gio.Cancellable | null)): SparqlConnection;

        /**
         * @param uri_base 
         */
        static remote_new(uri_base: string): SparqlConnection;

        /**
         * @param flags 
         * @param store 
         * @param journal 
         * @param ontology 
         * @param cancellable 
         */
        static local_new(flags: SparqlConnectionFlags, store: Gio.File, journal: (Gio.File | null), ontology: (Gio.File | null), cancellable: (Gio.Cancellable | null)): SparqlConnection;

        /**
         * @param flags 
         * @param store 
         * @param journal 
         * @param ontology 
         * @param cancellable 
         * @param _callback_ 
         */
        static local_new_async(flags: SparqlConnectionFlags, store: Gio.File, journal: (Gio.File | null), ontology: (Gio.File | null), cancellable: (Gio.Cancellable | null), _callback_: (Gio.AsyncReadyCallback<SparqlConnection> | null)): void;

        /**
         * @param _res_ 
         */
        static local_new_finish(_res_: Gio.AsyncResult): SparqlConnection;

        /**
         * @param domain 
         */
        static set_domain(domain: (string | null)): void;

        static get_domain(): (string | null);

        /**
         * @param dbus_connection 
         */
        static set_dbus_connection(dbus_connection: Gio.DBusConnection): void;

        static get_dbus_connection(): (Gio.DBusConnection | null);

        // Virtual methods
        /**
         * @param sparql 
         * @param cancellable 
         * @virtual
         */
        vfunc_query(sparql: string, cancellable: (Gio.Cancellable | null)): SparqlCursor;

        /**
         * @param sparql 
         * @param cancellable 
         * @param _callback_ 
         * @virtual
         */
        vfunc_query_async(sparql: string, cancellable: (Gio.Cancellable | null), _callback_: (Gio.AsyncReadyCallback<this> | null)): void;

        /**
         * @param _res_ 
         * @virtual
         */
        vfunc_query_finish(_res_: Gio.AsyncResult): SparqlCursor;

        /**
         * @param sparql 
         * @param priority 
         * @param cancellable 
         * @virtual
         */
        vfunc_update(sparql: string, priority: number, cancellable: (Gio.Cancellable | null)): void;

        /**
         * @param sparql 
         * @param priority 
         * @param cancellable 
         * @param _callback_ 
         * @virtual
         */
        vfunc_update_async(sparql: string, priority: number, cancellable: (Gio.Cancellable | null), _callback_: (Gio.AsyncReadyCallback<this> | null)): void;

        /**
         * @param _res_ 
         * @virtual
         */
        vfunc_update_finish(_res_: Gio.AsyncResult): void;

        /**
         * @param sparql 
         * @param priority 
         * @param cancellable 
         * @param _callback_ 
         * @virtual
         */
        vfunc_update_array_async(sparql: string[], priority: number, cancellable: (Gio.Cancellable | null), _callback_: (Gio.AsyncReadyCallback<this> | null)): void;

        /**
         * @param _res_ 
         * @virtual
         */
        vfunc_update_array_finish(_res_: Gio.AsyncResult): (SparqlError[] | null);

        /**
         * @param sparql 
         * @param priority 
         * @param cancellable 
         * @virtual
         */
        vfunc_update_blank(sparql: string, priority: number, cancellable: (Gio.Cancellable | null)): (GLib.Variant | null);

        /**
         * @param sparql 
         * @param priority 
         * @param cancellable 
         * @param _callback_ 
         * @virtual
         */
        vfunc_update_blank_async(sparql: string, priority: number, cancellable: (Gio.Cancellable | null), _callback_: (Gio.AsyncReadyCallback<this> | null)): void;

        /**
         * @param _res_ 
         * @virtual
         */
        vfunc_update_blank_finish(_res_: Gio.AsyncResult): (GLib.Variant | null);

        /**
         * @param file 
         * @param cancellable 
         * @virtual
         */
        vfunc_load(file: Gio.File, cancellable: (Gio.Cancellable | null)): void;

        /**
         * @param file 
         * @param cancellable 
         * @param _callback_ 
         * @virtual
         */
        vfunc_load_async(file: Gio.File, cancellable: (Gio.Cancellable | null), _callback_: (Gio.AsyncReadyCallback<this> | null)): void;

        /**
         * @param _res_ 
         * @virtual
         */
        vfunc_load_finish(_res_: Gio.AsyncResult): void;

        /**
         * @param cancellable 
         * @virtual
         */
        vfunc_statistics(cancellable: (Gio.Cancellable | null)): (SparqlCursor | null);

        /**
         * @param cancellable 
         * @param _callback_ 
         * @virtual
         */
        vfunc_statistics_async(cancellable: (Gio.Cancellable | null), _callback_: (Gio.AsyncReadyCallback<this> | null)): void;

        /**
         * @param _res_ 
         * @virtual
         */
        vfunc_statistics_finish(_res_: Gio.AsyncResult): (SparqlCursor | null);

        /**
         * @virtual
         */
        vfunc_get_namespace_manager(): (NamespaceManager | null);

        /**
         * @param sparql 
         * @param cancellable 
         * @virtual
         */
        vfunc_query_statement(sparql: string, cancellable: (Gio.Cancellable | null)): (SparqlStatement | null);

        // Methods
        /**
         * @param sparql 
         * @param cancellable 
         */
        query(sparql: string, cancellable: (Gio.Cancellable | null)): SparqlCursor;

        /**
         * @param sparql 
         * @param cancellable 
         */
        query_async(sparql: string, cancellable: (Gio.Cancellable | null)): globalThis.Promise<SparqlCursor>;

        /**
         * @param sparql 
         * @param cancellable 
         * @param _callback_ 
         */
        query_async(sparql: string, cancellable: (Gio.Cancellable | null), _callback_: (Gio.AsyncReadyCallback<this> | null)): void;

        /**
         * @param sparql 
         * @param cancellable 
         * @param _callback_ 
         */
        query_async(sparql: string, cancellable: (Gio.Cancellable | null), _callback_?: (Gio.AsyncReadyCallback<this> | null)): (globalThis.Promise<SparqlCursor> | void);

        /**
         * @param _res_ 
         */
        query_finish(_res_: Gio.AsyncResult): SparqlCursor;

        /**
         * @param sparql 
         * @param priority 
         * @param cancellable 
         */
        update(sparql: string, priority: number, cancellable: (Gio.Cancellable | null)): void;

        /**
         * @param sparql 
         * @param priority 
         * @param cancellable 
         */
        update_async(sparql: string, priority: number, cancellable: (Gio.Cancellable | null)): globalThis.Promise<void>;

        /**
         * @param sparql 
         * @param priority 
         * @param cancellable 
         * @param _callback_ 
         */
        update_async(sparql: string, priority: number, cancellable: (Gio.Cancellable | null), _callback_: (Gio.AsyncReadyCallback<this> | null)): void;

        /**
         * @param sparql 
         * @param priority 
         * @param cancellable 
         * @param _callback_ 
         */
        update_async(sparql: string, priority: number, cancellable: (Gio.Cancellable | null), _callback_?: (Gio.AsyncReadyCallback<this> | null)): (globalThis.Promise<void> | void);

        /**
         * @param _res_ 
         */
        update_finish(_res_: Gio.AsyncResult): void;

        /**
         * @param sparql 
         * @param priority 
         * @param cancellable 
         */
        update_array_async(sparql: string[], priority: number, cancellable: (Gio.Cancellable | null)): globalThis.Promise<(SparqlError[] | null)>;

        /**
         * @param sparql 
         * @param priority 
         * @param cancellable 
         * @param _callback_ 
         */
        update_array_async(sparql: string[], priority: number, cancellable: (Gio.Cancellable | null), _callback_: (Gio.AsyncReadyCallback<this> | null)): void;

        /**
         * @param sparql 
         * @param priority 
         * @param cancellable 
         * @param _callback_ 
         */
        update_array_async(sparql: string[], priority: number, cancellable: (Gio.Cancellable | null), _callback_?: (Gio.AsyncReadyCallback<this> | null)): (globalThis.Promise<(SparqlError[] | null)> | void);

        /**
         * @param _res_ 
         */
        update_array_finish(_res_: Gio.AsyncResult): (SparqlError[] | null);

        /**
         * @param sparql 
         * @param priority 
         * @param cancellable 
         */
        update_blank(sparql: string, priority: number, cancellable: (Gio.Cancellable | null)): (GLib.Variant | null);

        /**
         * @param sparql 
         * @param priority 
         * @param cancellable 
         */
        update_blank_async(sparql: string, priority: number, cancellable: (Gio.Cancellable | null)): globalThis.Promise<(GLib.Variant | null)>;

        /**
         * @param sparql 
         * @param priority 
         * @param cancellable 
         * @param _callback_ 
         */
        update_blank_async(sparql: string, priority: number, cancellable: (Gio.Cancellable | null), _callback_: (Gio.AsyncReadyCallback<this> | null)): void;

        /**
         * @param sparql 
         * @param priority 
         * @param cancellable 
         * @param _callback_ 
         */
        update_blank_async(sparql: string, priority: number, cancellable: (Gio.Cancellable | null), _callback_?: (Gio.AsyncReadyCallback<this> | null)): (globalThis.Promise<(GLib.Variant | null)> | void);

        /**
         * @param _res_ 
         */
        update_blank_finish(_res_: Gio.AsyncResult): (GLib.Variant | null);

        /**
         * @param file 
         * @param cancellable 
         */
        load(file: Gio.File, cancellable: (Gio.Cancellable | null)): void;

        /**
         * @param file 
         * @param cancellable 
         */
        load_async(file: Gio.File, cancellable: (Gio.Cancellable | null)): globalThis.Promise<void>;

        /**
         * @param file 
         * @param cancellable 
         * @param _callback_ 
         */
        load_async(file: Gio.File, cancellable: (Gio.Cancellable | null), _callback_: (Gio.AsyncReadyCallback<this> | null)): void;

        /**
         * @param file 
         * @param cancellable 
         * @param _callback_ 
         */
        load_async(file: Gio.File, cancellable: (Gio.Cancellable | null), _callback_?: (Gio.AsyncReadyCallback<this> | null)): (globalThis.Promise<void> | void);

        /**
         * @param _res_ 
         */
        load_finish(_res_: Gio.AsyncResult): void;

        /**
         * @param cancellable 
         */
        statistics(cancellable: (Gio.Cancellable | null)): (SparqlCursor | null);

        /**
         * @param cancellable 
         */
        statistics_async(cancellable: (Gio.Cancellable | null)): globalThis.Promise<(SparqlCursor | null)>;

        /**
         * @param cancellable 
         * @param _callback_ 
         */
        statistics_async(cancellable: (Gio.Cancellable | null), _callback_: (Gio.AsyncReadyCallback<this> | null)): void;

        /**
         * @param cancellable 
         * @param _callback_ 
         */
        statistics_async(cancellable: (Gio.Cancellable | null), _callback_?: (Gio.AsyncReadyCallback<this> | null)): (globalThis.Promise<(SparqlCursor | null)> | void);

        /**
         * @param _res_ 
         */
        statistics_finish(_res_: Gio.AsyncResult): (SparqlCursor | null);

        get_namespace_manager(): (NamespaceManager | null);

        /**
         * @param sparql 
         * @param cancellable 
         */
        query_statement(sparql: string, cancellable: (Gio.Cancellable | null)): (SparqlStatement | null);
    }


    namespace SparqlCursor {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "notify::connection": (pspec: GObject.ParamSpec) => void;
            "notify::n-columns": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            connection: SparqlConnection;
            n_columns: number;
            nColumns: number;
        }
    }

    /**
     * @gir-type Class
     */
    abstract class SparqlCursor extends GObject.Object {
        static $gtype: GObject.GType<SparqlCursor>;

        // Properties
        get connection(): SparqlConnection;
        set connection(val: SparqlConnection);

        /**
         * @read-only
         */
        get n_columns(): number;

        /**
         * @read-only
         */
        get nColumns(): number;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: SparqlCursor.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<SparqlCursor.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals
        /** @signal */
        connect<K extends keyof SparqlCursor.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, SparqlCursor.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof SparqlCursor.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, SparqlCursor.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof SparqlCursor.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<SparqlCursor.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods
        /**
         * @param column 
         * @virtual
         */
        vfunc_get_value_type(column: number): SparqlValueType;

        /**
         * @param column 
         * @virtual
         */
        vfunc_get_variable_name(column: number): (string | null);

        /**
         * @param column 
         * @virtual
         */
        vfunc_get_string(column: number): [(string | null), bigint | number];

        /**
         * @param cancellable 
         * @virtual
         */
        vfunc_next(cancellable: (Gio.Cancellable | null)): boolean;

        /**
         * @param cancellable 
         * @param _callback_ 
         * @virtual
         */
        vfunc_next_async(cancellable: (Gio.Cancellable | null), _callback_: (Gio.AsyncReadyCallback<this> | null)): void;

        /**
         * @param _res_ 
         * @virtual
         */
        vfunc_next_finish(_res_: Gio.AsyncResult): boolean;

        /**
         * @virtual
         */
        vfunc_rewind(): void;

        /**
         * @virtual
         */
        vfunc_close(): void;

        /**
         * @param column 
         * @virtual
         */
        vfunc_get_integer(column: number): (bigint | number);

        /**
         * @param column 
         * @virtual
         */
        vfunc_get_double(column: number): number;

        /**
         * @param column 
         * @virtual
         */
        vfunc_get_boolean(column: number): boolean;

        /**
         * @param column 
         * @virtual
         */
        vfunc_is_bound(column: number): boolean;

        /**
         * @virtual
         */
        vfunc_get_n_columns(): number;

        // Methods
        /**
         * @param column 
         */
        get_value_type(column: number): SparqlValueType;

        /**
         * @param column 
         */
        get_variable_name(column: number): (string | null);

        /**
         * @param column 
         */
        get_string(column: number): [(string | null), number];

        /**
         * @param cancellable 
         */
        next(cancellable: (Gio.Cancellable | null)): boolean;

        /**
         * @param cancellable 
         */
        next_async(cancellable: (Gio.Cancellable | null)): globalThis.Promise<boolean>;

        /**
         * @param cancellable 
         * @param _callback_ 
         */
        next_async(cancellable: (Gio.Cancellable | null), _callback_: (Gio.AsyncReadyCallback<this> | null)): void;

        /**
         * @param cancellable 
         * @param _callback_ 
         */
        next_async(cancellable: (Gio.Cancellable | null), _callback_?: (Gio.AsyncReadyCallback<this> | null)): (globalThis.Promise<boolean> | void);

        /**
         * @param _res_ 
         */
        next_finish(_res_: Gio.AsyncResult): boolean;

        rewind(): void;

        close(): void;

        /**
         * @param column 
         */
        get_integer(column: number): number;

        /**
         * @param column 
         */
        get_double(column: number): number;

        /**
         * @param column 
         */
        get_boolean(column: number): boolean;

        /**
         * @param column 
         */
        is_bound(column: number): boolean;

        get_connection(): SparqlConnection;

        /**
         * @param value 
         */
        set_connection(value: SparqlConnection): void;

        get_n_columns(): number;
    }


    namespace SparqlStatement {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "notify::sparql": (pspec: GObject.ParamSpec) => void;
            "notify::connection": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            sparql: string;
            connection: SparqlConnection;
        }
    }

    /**
     * @gir-type Class
     */
    abstract class SparqlStatement extends GObject.Object {
        static $gtype: GObject.GType<SparqlStatement>;

        // Properties
        get sparql(): string;
        set sparql(val: string);

        get connection(): SparqlConnection;
        set connection(val: SparqlConnection);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: SparqlStatement.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<SparqlStatement.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals
        /** @signal */
        connect<K extends keyof SparqlStatement.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, SparqlStatement.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof SparqlStatement.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, SparqlStatement.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof SparqlStatement.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<SparqlStatement.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods
        /**
         * @param name 
         * @param value 
         * @virtual
         */
        vfunc_bind_int(name: string, value: number): void;

        /**
         * @param name 
         * @param value 
         * @virtual
         */
        vfunc_bind_boolean(name: string, value: boolean): void;

        /**
         * @param name 
         * @param value 
         * @virtual
         */
        vfunc_bind_string(name: string, value: string): void;

        /**
         * @param name 
         * @param value 
         * @virtual
         */
        vfunc_bind_double(name: string, value: number): void;

        /**
         * @param cancellable 
         * @virtual
         */
        vfunc_execute(cancellable: (Gio.Cancellable | null)): SparqlCursor;

        /**
         * @param cancellable 
         * @param _callback_ 
         * @virtual
         */
        vfunc_execute_async(cancellable: (Gio.Cancellable | null), _callback_: (Gio.AsyncReadyCallback<this> | null)): void;

        /**
         * @param _res_ 
         * @virtual
         */
        vfunc_execute_finish(_res_: Gio.AsyncResult): SparqlCursor;

        // Methods
        /**
         * @param name 
         * @param value 
         */
        bind_int(name: string, value: (bigint | number)): void;

        /**
         * @param name 
         * @param value 
         */
        bind_boolean(name: string, value: boolean): void;

        /**
         * @param name 
         * @param value 
         */
        bind_string(name: string, value: string): void;

        /**
         * @param name 
         * @param value 
         */
        bind_double(name: string, value: number): void;

        /**
         * @param cancellable 
         */
        execute(cancellable: (Gio.Cancellable | null)): SparqlCursor;

        /**
         * @param cancellable 
         */
        execute_async(cancellable: (Gio.Cancellable | null)): globalThis.Promise<SparqlCursor>;

        /**
         * @param cancellable 
         * @param _callback_ 
         */
        execute_async(cancellable: (Gio.Cancellable | null), _callback_: (Gio.AsyncReadyCallback<this> | null)): void;

        /**
         * @param cancellable 
         * @param _callback_ 
         */
        execute_async(cancellable: (Gio.Cancellable | null), _callback_?: (Gio.AsyncReadyCallback<this> | null)): (globalThis.Promise<SparqlCursor> | void);

        /**
         * @param _res_ 
         */
        execute_finish(_res_: Gio.AsyncResult): SparqlCursor;

        get_sparql(): string;

        /**
         * @param value 
         */
        set_sparql(value: string): void;

        get_connection(): SparqlConnection;

        /**
         * @param value 
         */
        set_connection(value: SparqlConnection): void;
    }


    /**
     * @gir-type Alias
     */
    type NamespaceManagerClass = typeof NamespaceManager;

    /**
     * @gir-type Alias
     */
    type NotifierClass = typeof Notifier;

    /**
     * @gir-type Struct
     */
    abstract class NotifierEvent {
        static $gtype: GObject.GType<NotifierEvent>;

        // Methods
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
         * has the flag {@link Tracker.NotifierFlags.QUERY_LOCATION}, and it can
         * be obtained at the time of emission.
         * @returns The element location, or `null`
         */
        get_location(): (string | null);

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
        get_type(): string;

        /**
         * Returns the Uniform Resource Name of the element if the
         * notifier has the flag {@link Tracker.NotifierFlags.QUERY_URN} enabled.
         * 
         * This URN is an unique string identifier for the resource being
         * notified upon, typically of the form "urn:uuid:...".
         * @returns The element URN
         */
        get_urn(): string;
    }


    /**
     * @gir-type Alias
     */
    type ResourceClass = typeof Resource;

    /**
     * @gir-type Alias
     */
    type SparqlBuilderClass = typeof SparqlBuilder;

    /**
     * @gir-type Struct
     */
    abstract class SparqlBuilderPrivate {
        static $gtype: GObject.GType<SparqlBuilderPrivate>;
    }


    /**
     * @gir-type Alias
     */
    type SparqlConnectionClass = typeof SparqlConnection;

    /**
     * @gir-type Struct
     */
    abstract class SparqlConnectionPrivate {
        static $gtype: GObject.GType<SparqlConnectionPrivate>;
    }


    /**
     * @gir-type Alias
     */
    type SparqlCursorClass = typeof SparqlCursor;

    /**
     * @gir-type Struct
     */
    abstract class SparqlCursorPrivate {
        static $gtype: GObject.GType<SparqlCursorPrivate>;
    }


    /**
     * @gir-type Alias
     */
    type SparqlStatementClass = typeof SparqlStatement;

    /**
     * @gir-type Struct
     */
    abstract class SparqlStatementPrivate {
        static $gtype: GObject.GType<SparqlStatementPrivate>;
    }


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
