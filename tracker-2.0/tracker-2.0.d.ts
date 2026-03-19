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

        constructor(options: { message: string; code: number });
    }

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
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
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

        static ['new'](): NamespaceManager;

        // Signals

        /** @signal */
        connect<K extends keyof NamespaceManager.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, NamespaceManager.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof NamespaceManager.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, NamespaceManager.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof NamespaceManager.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<NamespaceManager.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
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
            'notify::classes': (pspec: GObject.ParamSpec) => void;
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

        static ['new'](classes: string[] | null, flags: NotifierFlags, cancellable?: Gio.Cancellable | null): Notifier;

        // Signals

        /** @signal */
        connect<K extends keyof Notifier.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Notifier.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Notifier.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Notifier.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Notifier.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Notifier.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
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
        init(cancellable?: Gio.Cancellable | null): boolean;
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
        vfunc_init(cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target`.
         *
         * Whenever the `source_property` is changed the `target_property` is
         * updated using the same value. For instance:
         *
         *
         * ```c
         *   g_object_bind_property (action, "active", widget, "sensitive", 0);
         * ```
         *
         *
         * Will result in the "sensitive" property of the widget {@link GObject.Object} instance to be
         * updated with the same value of the "active" property of the action {@link GObject.Object}
         * instance.
         *
         * If `flags` contains {@link GObject.BindingFlags.BIDIRECTIONAL} then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well.
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. To remove the binding without affecting the
         * `source` and the `target` you can just call `g_object_unref()` on the returned
         * {@link GObject.Binding} instance.
         *
         * Removing the binding by calling `g_object_unref()` on it must only be done if
         * the binding, `source` and `target` are only used from a single thread and it
         * is clear that both `source` and `target` outlive the binding. Especially it
         * is not safe to rely on this if the binding, `source` or `target` can be
         * finalized from different threads. Keep another reference to the binding and
         * use `g_binding_unbind()` instead to be on the safe side.
         *
         * A {@link GObject.Object} can have multiple bindings.
         * @param source_property the property on `source` to bind
         * @param target the target {@link GObject.Object}
         * @param target_property the property on `target` to bind
         * @param flags flags to pass to {@link GObject.Binding}
         * @returns the {@link GObject.Binding} instance representing the     binding between the two {@link GObject.Object} instances. The binding is released     whenever the {@link GObject.Binding} reference count reaches zero.
         */
        bind_property(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
        ): GObject.Binding;
        /**
         * Complete version of `g_object_bind_property()`.
         *
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target`, allowing you to set the transformation functions to be used by
         * the binding.
         *
         * If `flags` contains {@link GObject.BindingFlags.BIDIRECTIONAL} then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well. The `transform_from` function is only used in case
         * of bidirectional bindings, otherwise it will be ignored
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. This will release the reference that is
         * being held on the {@link GObject.Binding} instance; if you want to hold on to the
         * {@link GObject.Binding} instance, you will need to hold a reference to it.
         *
         * To remove the binding, call `g_binding_unbind()`.
         *
         * A {@link GObject.Object} can have multiple bindings.
         *
         * The same `user_data` parameter will be used for both `transform_to`
         * and `transform_from` transformation functions; the `notify` function will
         * be called once, when the binding is removed. If you need different data
         * for each transformation function, please use
         * `g_object_bind_property_with_closures()` instead.
         * @param source_property the property on `source` to bind
         * @param target the target {@link GObject.Object}
         * @param target_property the property on `target` to bind
         * @param flags flags to pass to {@link GObject.Binding}
         * @param transform_to the transformation function     from the `source` to the `target`, or `null` to use the default
         * @param transform_from the transformation function     from the `target` to the `source`, or `null` to use the default
         * @param notify a function to call when disposing the binding, to free     resources used by the transformation functions, or `null` if not required
         * @returns the {@link GObject.Binding} instance representing the     binding between the two {@link GObject.Object} instances. The binding is released     whenever the {@link GObject.Binding} reference count reaches zero.
         */
        bind_property_full(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
            transform_to?: GObject.BindingTransformFunc | null,
            transform_from?: GObject.BindingTransformFunc | null,
            notify?: GLib.DestroyNotify | null,
        ): GObject.Binding;
        /**
         * @param args
         */
        // Conflicted with GObject.Object.bind_property_full
        bind_property_full(...args: never[]): any;
        /**
         * This function is intended for {@link GObject.Object} implementations to re-enforce
         * a [floating][floating-ref] object reference. Doing this is seldom
         * required: all `GInitiallyUnowneds` are created with a floating reference
         * which usually just needs to be sunken by calling `g_object_ref_sink()`.
         */
        force_floating(): void;
        /**
         * Increases the freeze count on `object`. If the freeze count is
         * non-zero, the emission of "notify" signals on `object` is
         * stopped. The signals are queued until the freeze count is decreased
         * to zero. Duplicate notifications are squashed so that at most one
         * {@link GObject.Object.SignalSignatures.notify | GObject.Object::notify} signal is emitted for each property modified while the
         * object is frozen.
         *
         * This is necessary for accessors that modify multiple properties to prevent
         * premature notification while the object is still being modified.
         */
        freeze_notify(): void;
        /**
         * Gets a named field from the objects table of associations (see `g_object_set_data()`).
         * @param key name of the key for that association
         * @returns the data if found,          or `null` if no such data exists.
         */
        get_data(key: string): any | null;
        /**
         * Gets a property of an object.
         *
         * The value can be:
         * - an empty GObject.Value initialized by G_VALUE_INIT, which will be automatically initialized with the expected type of the property (since GLib 2.60)
         * - a GObject.Value initialized with the expected type of the property
         * - a GObject.Value initialized with a type to which the expected type of the property can be transformed
         *
         * In general, a copy is made of the property contents and the caller is responsible for freeing the memory by calling GObject.Value.unset.
         *
         * Note that GObject.Object.get_property is really intended for language bindings, GObject.Object.get is much more convenient for C programming.
         * @param property_name The name of the property to get
         * @param value Return location for the property value. Can be an empty GObject.Value initialized by G_VALUE_INIT (auto-initialized with expected type since GLib 2.60), a GObject.Value initialized with the expected property type, or a GObject.Value initialized with a transformable type
         */
        get_property(property_name: string, value: GObject.Value | any): any;
        /**
         * This function gets back user data pointers stored via
         * `g_object_set_qdata()`.
         * @param quark A {@link GLib.Quark}, naming the user data pointer
         * @returns The user data pointer set, or `null`
         */
        get_qdata(quark: GLib.Quark): any | null;
        /**
         * Gets `n_properties` properties for an `object`.
         * Obtained properties will be set to `values`. All properties must be valid.
         * Warnings will be emitted and undefined behaviour may result if invalid
         * properties are passed in.
         * @param names the names of each property to get
         * @param values the values of each property to get
         */
        getv(names: string[], values: (GObject.Value | any)[]): void;
        /**
         * Checks whether `object` has a [floating][floating-ref] reference.
         * @returns `true` if `object` has a floating reference
         */
        is_floating(): boolean;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use `g_object_notify_by_pspec()`
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * `g_object_freeze_notify()`. In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when `g_object_thaw_notify()` is
         * called.
         * @param property_name the name of a property installed on the class of `object`.
         */
        notify(property_name: string): void;
        /**
         * Emits a "notify" signal for the property specified by `pspec` on `object`.
         *
         * This function omits the property name lookup, hence it is faster than
         * `g_object_notify()`.
         *
         * One way to avoid using `g_object_notify()` from within the
         * class that registered the properties, and using `g_object_notify_by_pspec()`
         * instead, is to store the GParamSpec used with
         * `g_object_class_install_property()` inside a static array, e.g.:
         *
         *
         * ```c
         *   typedef enum
         *   {
         *     PROP_FOO = 1,
         *     PROP_LAST
         *   } MyObjectProperty;
         *
         *   static GParamSpec *properties[PROP_LAST];
         *
         *   static void
         *   my_object_class_init (MyObjectClass *klass)
         *   {
         *     properties[PROP_FOO] = g_param_spec_int ("foo", NULL, NULL,
         *                                              0, 100,
         *                                              50,
         *                                              G_PARAM_READWRITE | G_PARAM_STATIC_STRINGS);
         *     g_object_class_install_property (gobject_class,
         *                                      PROP_FOO,
         *                                      properties[PROP_FOO]);
         *   }
         * ```
         *
         *
         * and then notify a change on the "foo" property with:
         *
         *
         * ```c
         *   g_object_notify_by_pspec (self, properties[PROP_FOO]);
         * ```
         *
         * @param pspec the {@link GObject.ParamSpec} of a property installed on the class of `object`.
         */
        notify_by_pspec(pspec: GObject.ParamSpec): void;
        /**
         * Increases the reference count of `object`.
         *
         * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
         * of `object` will be propagated to the return type (using the GCC `typeof()`
         * extension), so any casting the caller needs to do on the return type must be
         * explicit.
         * @returns the same `object`
         */
        ref(): GObject.Object;
        /**
         * Increase the reference count of `object`, and possibly remove the
         * [floating][floating-ref] reference, if `object` has a floating reference.
         *
         * In other words, if the object is floating, then this call "assumes
         * ownership" of the floating reference, converting it to a normal
         * reference by clearing the floating flag while leaving the reference
         * count unchanged.  If the object is not floating, then this call
         * adds a new normal reference increasing the reference count by one.
         *
         * Since GLib 2.56, the type of `object` will be propagated to the return type
         * under the same conditions as for `g_object_ref()`.
         * @returns `object`
         */
        ref_sink(): GObject.Object;
        /**
         * Releases all references to other objects. This can be used to break
         * reference cycles.
         *
         * This function should only be called from object system implementations.
         */
        run_dispose(): void;
        /**
         * Each object carries around a table of associations from
         * strings to pointers.  This function lets you set an association.
         *
         * If the object already had an association with that name,
         * the old association will be destroyed.
         *
         * Internally, the `key` is converted to a {@link GLib.Quark} using `g_quark_from_string()`.
         * This means a copy of `key` is kept permanently (even after `object` has been
         * finalized) — so it is recommended to only use a small, bounded set of values
         * for `key` in your program, to avoid the {@link GLib.Quark} storage growing unbounded.
         * @param key name of the key
         * @param data data to associate with that key
         */
        set_data(key: string, data?: any | null): void;
        /**
         * Sets a property on an object.
         * @param property_name The name of the property to set
         * @param value The value to set the property to
         */
        set_property(property_name: string, value: GObject.Value | any): void;
        /**
         * Remove a specified datum from the object's data associations,
         * without invoking the association's destroy handler.
         * @param key name of the key
         * @returns the data if found, or `null`          if no such data exists.
         */
        steal_data(key: string): any | null;
        /**
         * This function gets back user data pointers stored via
         * `g_object_set_qdata()` and removes the `data` from object
         * without invoking its `destroy()` function (if any was
         * set).
         * Usually, calling this function is only required to update
         * user data pointers with a destroy notifier, for example:
         *
         * ```c
         * void
         * object_add_to_user_list (GObject     *object,
         *                          const gchar *new_string)
         * {
         *   // the quark, naming the object data
         *   GQuark quark_string_list = g_quark_from_static_string ("my-string-list");
         *   // retrieve the old string list
         *   GList *list = g_object_steal_qdata (object, quark_string_list);
         *
         *   // prepend new string
         *   list = g_list_prepend (list, g_strdup (new_string));
         *   // this changed 'list', so we need to set it again
         *   g_object_set_qdata_full (object, quark_string_list, list, free_string_list);
         * }
         * static void
         * free_string_list (gpointer data)
         * {
         *   GList *node, *list = data;
         *
         *   for (node = list; node; node = node->next)
         *     g_free (node->data);
         *   g_list_free (list);
         * }
         * ```
         *
         * Using `g_object_get_qdata()` in the above example, instead of
         * `g_object_steal_qdata()` would have left the destroy function set,
         * and thus the partial string list would have been freed upon
         * `g_object_set_qdata_full()`.
         * @param quark A {@link GLib.Quark}, naming the user data pointer
         * @returns The user data pointer set, or `null`
         */
        steal_qdata(quark: GLib.Quark): any | null;
        /**
         * Reverts the effect of a previous call to
         * `g_object_freeze_notify()`. The freeze count is decreased on `object`
         * and when it reaches zero, queued "notify" signals are emitted.
         *
         * Duplicate notifications for each property are squashed so that at most one
         * {@link GObject.Object.SignalSignatures.notify | GObject.Object::notify} signal is emitted for each property, in the reverse order
         * in which they have been queued.
         *
         * It is an error to call this function when the freeze count is zero.
         */
        thaw_notify(): void;
        /**
         * Decreases the reference count of `object`. When its reference count
         * drops to 0, the object is finalized (i.e. its memory is freed).
         *
         * If the pointer to the {@link GObject.Object} may be reused in future (for example, if it is
         * an instance variable of another object), it is recommended to clear the
         * pointer to `null` rather than retain a dangling pointer to a potentially
         * invalid {@link GObject.Object} instance. Use `g_clear_object()` for this.
         */
        unref(): void;
        /**
         * This function essentially limits the life time of the `closure` to
         * the life time of the object. That is, when the object is finalized,
         * the `closure` is invalidated by calling `g_closure_invalidate()` on
         * it, in order to prevent invocations of the closure with a finalized
         * (nonexisting) object. Also, `g_object_ref()` and `g_object_unref()` are
         * added as marshal guards to the `closure`, to ensure that an extra
         * reference count is held on `object` during invocation of the
         * `closure`.  Usually, this function will be called on closures that
         * use this `object` as closure data.
         * @param closure {@link GObject.Closure} to watch
         */
        watch_closure(closure: GObject.Closure): void;
        /**
         * the `constructed` function is called by `g_object_new()` as the
         *  final step of the object creation process.  At the point of the call, all
         *  construction properties have been set on the object.  The purpose of this
         *  call is to allow for object initialisation steps that can only be performed
         *  after construction properties have been set.  `constructed` implementors
         *  should chain up to the `constructed` call of their parent class to allow it
         *  to complete its initialisation.
         * @virtual
         */
        vfunc_constructed(): void;
        /**
         * emits property change notification for a bunch
         *  of properties. Overriding `dispatch_properties_changed` should be rarely
         *  needed.
         * @param n_pspecs
         * @param pspecs
         * @virtual
         */
        vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
        /**
         * the `dispose` function is supposed to drop all references to other
         *  objects, but keep the instance otherwise intact, so that client method
         *  invocations still work. It may be run multiple times (due to reference
         *  loops). Before returning, `dispose` should chain up to the `dispose` method
         *  of the parent class.
         * @virtual
         */
        vfunc_dispose(): void;
        /**
         * instance finalization function, should finish the finalization of
         *  the instance begun in `dispose` and chain up to the `finalize` method of the
         *  parent class.
         * @virtual
         */
        vfunc_finalize(): void;
        /**
         * the generic getter for all properties of this type. Should be
         *  overridden for every type with properties.
         * @param property_id
         * @param value
         * @param pspec
         * @virtual
         */
        vfunc_get_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use `g_object_notify_by_pspec()`
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * `g_object_freeze_notify()`. In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when `g_object_thaw_notify()` is
         * called.
         * @param pspec
         * @virtual
         */
        vfunc_notify(pspec: GObject.ParamSpec): void;
        /**
         * the generic setter for all properties of this type. Should be
         *  overridden for every type with properties. If implementations of
         *  `set_property` don't emit property change notification explicitly, this will
         *  be done implicitly by the type system. However, if the notify signal is
         *  emitted explicitly, the type system will not emit it a second time.
         * @param property_id
         * @param value
         * @param pspec
         * @virtual
         */
        vfunc_set_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Disconnects a handler from an instance so it will not be called during any future or currently ongoing emissions of the signal it has been connected to.
         * @param id Handler ID of the handler to be disconnected
         */
        disconnect(id: number): void;
        /**
         * Sets multiple properties of an object at once. The properties argument should be a dictionary mapping property names to values.
         * @param properties Object containing the properties to set
         */
        set(properties: { [key: string]: any }): void;
        /**
         * Blocks a handler of an instance so it will not be called during any signal emissions
         * @param id Handler ID of the handler to be blocked
         */
        block_signal_handler(id: number): void;
        /**
         * Unblocks a handler so it will be called again during any signal emissions
         * @param id Handler ID of the handler to be unblocked
         */
        unblock_signal_handler(id: number): void;
        /**
         * Stops a signal's emission by the given signal name. This will prevent the default handler and any subsequent signal handlers from being invoked.
         * @param detailedName Name of the signal to stop emission of
         */
        stop_emission_by_name(detailedName: string): void;
    }

    namespace Resource {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::identifier': (pspec: GObject.ParamSpec) => void;
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

        static ['new'](identifier: string): Resource;

        // Signals

        /** @signal */
        connect<K extends keyof Resource.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Resource.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Resource.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Resource.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Resource.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Resource.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
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
        add_gvalue(property_uri: string, value: GObject.Value | any): void;
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
        print_jsonld(namespaces?: NamespaceManager | null): string;
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
        print_sparql_update(namespaces?: NamespaceManager | null, graph_id?: string | null): string;
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
         * You can pass any kind of GValue for `value`, but serialization functions will
         * normally only be able to serialize URIs/relationships and fundamental value
         * types (string, int, etc.).
         * @param property_uri a string identifying the property to set
         * @param value an initialised {@link GObject.Value}
         */
        set_gvalue(property_uri: string, value: GObject.Value | any): void;
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
            'notify::result': (pspec: GObject.ParamSpec) => void;
            'notify::length': (pspec: GObject.ParamSpec) => void;
            'notify::state': (pspec: GObject.ParamSpec) => void;
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

        get result(): string;
        get length(): number;
        set length(val: number);
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

        static ['new'](): SparqlBuilder;

        // Signals

        /** @signal */
        connect<K extends keyof SparqlBuilder.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, SparqlBuilder.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof SparqlBuilder.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, SparqlBuilder.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof SparqlBuilder.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<SparqlBuilder.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * @param graph
         */
        insert_open(graph?: string | null): void;
        /**
         * @param graph
         */
        insert_silent_open(graph?: string | null): void;
        insert_close(): void;
        /**
         * @param graph
         */
        delete_open(graph?: string | null): void;
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
        object_int64(literal: number): void;
        /**
         * @param literal
         */
        object_date(literal: number): number;
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
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
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
        connect<K extends keyof SparqlConnection.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, SparqlConnection.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof SparqlConnection.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, SparqlConnection.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof SparqlConnection.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<SparqlConnection.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        /**
         * @param cancellable
         * @param _callback_
         */
        static get_async(
            cancellable?: Gio.Cancellable | null,
            _callback_?: Gio.AsyncReadyCallback<SparqlConnection> | null,
        ): void;
        /**
         * @param _res_
         */
        static get_finish(_res_: Gio.AsyncResult): SparqlConnection;
        /**
         * @param cancellable
         */
        static get(cancellable?: Gio.Cancellable | null): SparqlConnection;
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
        static local_new(
            flags: SparqlConnectionFlags,
            store: Gio.File,
            journal?: Gio.File | null,
            ontology?: Gio.File | null,
            cancellable?: Gio.Cancellable | null,
        ): SparqlConnection;
        /**
         * @param flags
         * @param store
         * @param journal
         * @param ontology
         * @param cancellable
         * @param _callback_
         */
        static local_new_async(
            flags: SparqlConnectionFlags,
            store: Gio.File,
            journal?: Gio.File | null,
            ontology?: Gio.File | null,
            cancellable?: Gio.Cancellable | null,
            _callback_?: Gio.AsyncReadyCallback<SparqlConnection> | null,
        ): void;
        /**
         * @param _res_
         */
        static local_new_finish(_res_: Gio.AsyncResult): SparqlConnection;
        /**
         * @param domain
         */
        static set_domain(domain?: string | null): void;
        static get_domain(): string | null;
        /**
         * @param dbus_connection
         */
        static set_dbus_connection(dbus_connection: Gio.DBusConnection): void;
        static get_dbus_connection(): Gio.DBusConnection | null;

        // Virtual methods

        /**
         * @param sparql
         * @param cancellable
         * @virtual
         */
        vfunc_query(sparql: string, cancellable?: Gio.Cancellable | null): SparqlCursor;
        /**
         * @param sparql
         * @param cancellable
         * @param _callback_
         * @virtual
         */
        vfunc_query_async(
            sparql: string,
            cancellable?: Gio.Cancellable | null,
            _callback_?: Gio.AsyncReadyCallback<this> | null,
        ): void;
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
        vfunc_update(sparql: string, priority: number, cancellable?: Gio.Cancellable | null): void;
        /**
         * @param sparql
         * @param priority
         * @param cancellable
         * @param _callback_
         * @virtual
         */
        vfunc_update_async(
            sparql: string,
            priority: number,
            cancellable?: Gio.Cancellable | null,
            _callback_?: Gio.AsyncReadyCallback<this> | null,
        ): void;
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
        vfunc_update_array_async(
            sparql: string[],
            priority: number,
            cancellable?: Gio.Cancellable | null,
            _callback_?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * @param _res_
         * @virtual
         */
        vfunc_update_array_finish(_res_: Gio.AsyncResult): SparqlError[] | null;
        /**
         * @param sparql
         * @param priority
         * @param cancellable
         * @virtual
         */
        vfunc_update_blank(sparql: string, priority: number, cancellable?: Gio.Cancellable | null): GLib.Variant | null;
        /**
         * @param sparql
         * @param priority
         * @param cancellable
         * @param _callback_
         * @virtual
         */
        vfunc_update_blank_async(
            sparql: string,
            priority: number,
            cancellable?: Gio.Cancellable | null,
            _callback_?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * @param _res_
         * @virtual
         */
        vfunc_update_blank_finish(_res_: Gio.AsyncResult): GLib.Variant | null;
        /**
         * @param file
         * @param cancellable
         * @virtual
         */
        vfunc_load(file: Gio.File, cancellable?: Gio.Cancellable | null): void;
        /**
         * @param file
         * @param cancellable
         * @param _callback_
         * @virtual
         */
        vfunc_load_async(
            file: Gio.File,
            cancellable?: Gio.Cancellable | null,
            _callback_?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * @param _res_
         * @virtual
         */
        vfunc_load_finish(_res_: Gio.AsyncResult): void;
        /**
         * @param cancellable
         * @virtual
         */
        vfunc_statistics(cancellable?: Gio.Cancellable | null): SparqlCursor | null;
        /**
         * @param cancellable
         * @param _callback_
         * @virtual
         */
        vfunc_statistics_async(
            cancellable?: Gio.Cancellable | null,
            _callback_?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * @param _res_
         * @virtual
         */
        vfunc_statistics_finish(_res_: Gio.AsyncResult): SparqlCursor | null;
        /**
         * @virtual
         */
        vfunc_get_namespace_manager(): NamespaceManager | null;
        /**
         * @param sparql
         * @param cancellable
         * @virtual
         */
        vfunc_query_statement(sparql: string, cancellable?: Gio.Cancellable | null): SparqlStatement | null;

        // Methods

        /**
         * @param sparql
         * @param cancellable
         */
        query(sparql: string, cancellable?: Gio.Cancellable | null): SparqlCursor;
        /**
         * @param sparql
         * @param cancellable
         */
        query_async(sparql: string, cancellable?: Gio.Cancellable | null): globalThis.Promise<SparqlCursor>;
        /**
         * @param sparql
         * @param cancellable
         * @param _callback_
         */
        query_async(
            sparql: string,
            cancellable: Gio.Cancellable | null,
            _callback_: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * @param sparql
         * @param cancellable
         * @param _callback_
         */
        query_async(
            sparql: string,
            cancellable?: Gio.Cancellable | null,
            _callback_?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<SparqlCursor> | void;
        /**
         * @param _res_
         */
        query_finish(_res_: Gio.AsyncResult): SparqlCursor;
        /**
         * @param sparql
         * @param priority
         * @param cancellable
         */
        update(sparql: string, priority: number, cancellable?: Gio.Cancellable | null): void;
        /**
         * @param sparql
         * @param priority
         * @param cancellable
         */
        update_async(sparql: string, priority: number, cancellable?: Gio.Cancellable | null): globalThis.Promise<void>;
        /**
         * @param sparql
         * @param priority
         * @param cancellable
         * @param _callback_
         */
        update_async(
            sparql: string,
            priority: number,
            cancellable: Gio.Cancellable | null,
            _callback_: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * @param sparql
         * @param priority
         * @param cancellable
         * @param _callback_
         */
        update_async(
            sparql: string,
            priority: number,
            cancellable?: Gio.Cancellable | null,
            _callback_?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<void> | void;
        /**
         * @param _res_
         */
        update_finish(_res_: Gio.AsyncResult): void;
        /**
         * @param sparql
         * @param priority
         * @param cancellable
         */
        update_array_async(
            sparql: string[],
            priority: number,
            cancellable?: Gio.Cancellable | null,
        ): globalThis.Promise<SparqlError[] | null>;
        /**
         * @param sparql
         * @param priority
         * @param cancellable
         * @param _callback_
         */
        update_array_async(
            sparql: string[],
            priority: number,
            cancellable: Gio.Cancellable | null,
            _callback_: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * @param sparql
         * @param priority
         * @param cancellable
         * @param _callback_
         */
        update_array_async(
            sparql: string[],
            priority: number,
            cancellable?: Gio.Cancellable | null,
            _callback_?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<SparqlError[] | null> | void;
        /**
         * @param _res_
         */
        update_array_finish(_res_: Gio.AsyncResult): SparqlError[] | null;
        /**
         * @param sparql
         * @param priority
         * @param cancellable
         */
        update_blank(sparql: string, priority: number, cancellable?: Gio.Cancellable | null): GLib.Variant | null;
        /**
         * @param sparql
         * @param priority
         * @param cancellable
         */
        update_blank_async(
            sparql: string,
            priority: number,
            cancellable?: Gio.Cancellable | null,
        ): globalThis.Promise<GLib.Variant | null>;
        /**
         * @param sparql
         * @param priority
         * @param cancellable
         * @param _callback_
         */
        update_blank_async(
            sparql: string,
            priority: number,
            cancellable: Gio.Cancellable | null,
            _callback_: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * @param sparql
         * @param priority
         * @param cancellable
         * @param _callback_
         */
        update_blank_async(
            sparql: string,
            priority: number,
            cancellable?: Gio.Cancellable | null,
            _callback_?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<GLib.Variant | null> | void;
        /**
         * @param _res_
         */
        update_blank_finish(_res_: Gio.AsyncResult): GLib.Variant | null;
        /**
         * @param file
         * @param cancellable
         */
        load(file: Gio.File, cancellable?: Gio.Cancellable | null): void;
        /**
         * @param file
         * @param cancellable
         */
        load_async(file: Gio.File, cancellable?: Gio.Cancellable | null): globalThis.Promise<void>;
        /**
         * @param file
         * @param cancellable
         * @param _callback_
         */
        load_async(
            file: Gio.File,
            cancellable: Gio.Cancellable | null,
            _callback_: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * @param file
         * @param cancellable
         * @param _callback_
         */
        load_async(
            file: Gio.File,
            cancellable?: Gio.Cancellable | null,
            _callback_?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<void> | void;
        /**
         * @param _res_
         */
        load_finish(_res_: Gio.AsyncResult): void;
        /**
         * @param cancellable
         */
        statistics(cancellable?: Gio.Cancellable | null): SparqlCursor | null;
        /**
         * @param cancellable
         */
        statistics_async(cancellable?: Gio.Cancellable | null): globalThis.Promise<SparqlCursor | null>;
        /**
         * @param cancellable
         * @param _callback_
         */
        statistics_async(cancellable: Gio.Cancellable | null, _callback_: Gio.AsyncReadyCallback<this> | null): void;
        /**
         * @param cancellable
         * @param _callback_
         */
        statistics_async(
            cancellable?: Gio.Cancellable | null,
            _callback_?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<SparqlCursor | null> | void;
        /**
         * @param _res_
         */
        statistics_finish(_res_: Gio.AsyncResult): SparqlCursor | null;
        get_namespace_manager(): NamespaceManager | null;
        /**
         * @param sparql
         * @param cancellable
         */
        query_statement(sparql: string, cancellable?: Gio.Cancellable | null): SparqlStatement | null;
    }

    namespace SparqlCursor {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::connection': (pspec: GObject.ParamSpec) => void;
            'notify::n-columns': (pspec: GObject.ParamSpec) => void;
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
        get n_columns(): number;
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
        connect<K extends keyof SparqlCursor.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, SparqlCursor.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof SparqlCursor.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, SparqlCursor.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof SparqlCursor.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<SparqlCursor.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
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
        vfunc_get_variable_name(column: number): string | null;
        /**
         * @param column
         * @virtual
         */
        vfunc_get_string(column: number): [string | null, number];
        /**
         * @param cancellable
         * @virtual
         */
        vfunc_next(cancellable?: Gio.Cancellable | null): boolean;
        /**
         * @param cancellable
         * @param _callback_
         * @virtual
         */
        vfunc_next_async(cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback<this> | null): void;
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
        vfunc_get_integer(column: number): number;
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
        get_variable_name(column: number): string | null;
        /**
         * @param column
         */
        get_string(column: number): [string | null, number];
        /**
         * @param cancellable
         */
        next(cancellable?: Gio.Cancellable | null): boolean;
        /**
         * @param cancellable
         */
        next_async(cancellable?: Gio.Cancellable | null): globalThis.Promise<boolean>;
        /**
         * @param cancellable
         * @param _callback_
         */
        next_async(cancellable: Gio.Cancellable | null, _callback_: Gio.AsyncReadyCallback<this> | null): void;
        /**
         * @param cancellable
         * @param _callback_
         */
        next_async(
            cancellable?: Gio.Cancellable | null,
            _callback_?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<boolean> | void;
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
            'notify::sparql': (pspec: GObject.ParamSpec) => void;
            'notify::connection': (pspec: GObject.ParamSpec) => void;
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
        connect<K extends keyof SparqlStatement.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, SparqlStatement.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof SparqlStatement.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, SparqlStatement.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof SparqlStatement.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<SparqlStatement.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
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
        vfunc_execute(cancellable?: Gio.Cancellable | null): SparqlCursor;
        /**
         * @param cancellable
         * @param _callback_
         * @virtual
         */
        vfunc_execute_async(
            cancellable?: Gio.Cancellable | null,
            _callback_?: Gio.AsyncReadyCallback<this> | null,
        ): void;
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
        bind_int(name: string, value: number): void;
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
        execute(cancellable?: Gio.Cancellable | null): SparqlCursor;
        /**
         * @param cancellable
         */
        execute_async(cancellable?: Gio.Cancellable | null): globalThis.Promise<SparqlCursor>;
        /**
         * @param cancellable
         * @param _callback_
         */
        execute_async(cancellable: Gio.Cancellable | null, _callback_: Gio.AsyncReadyCallback<this> | null): void;
        /**
         * @param cancellable
         * @param _callback_
         */
        execute_async(
            cancellable?: Gio.Cancellable | null,
            _callback_?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<SparqlCursor> | void;
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
        get_location(): string | null;
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
