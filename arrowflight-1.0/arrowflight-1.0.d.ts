/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './arrowflight-1.0-ambient.d.ts';

/**
 * ArrowFlight-1.0
 */

import type Arrow from '@girs/arrow-1.0';
import type Gio from '@girs/gio-2.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';

export namespace ArrowFlight {
    interface HeaderFunc {
        (name: string, value: string): void;
    }
    module CallOptions {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    class CallOptions extends GObject.Object {
        static $gtype: GObject.GType<CallOptions>;

        // Constructors of ArrowFlight.CallOptions

        constructor(properties?: Partial<CallOptions.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): CallOptions;

        // Own methods of ArrowFlight.CallOptions

        /**
         * Add a header.
         * @param name A header name.
         * @param value A header value.
         */
        add_header(name: string, value: string): void;
        /**
         * Clear all headers.
         */
        clear_headers(): void;
        /**
         * Iterates over all header in the options.
         * @param func The user's callback function.
         */
        foreach_header(func: HeaderFunc): void;
    }

    module Client {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            client: any;
        }
    }

    class Client extends GObject.Object {
        static $gtype: GObject.GType<Client>;

        // Own properties of ArrowFlight.Client

        set client(val: any);

        // Constructors of ArrowFlight.Client

        constructor(properties?: Partial<Client.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](location: Location, options?: ClientOptions | null): Client;

        // Own methods of ArrowFlight.Client

        /**
         * Authenticates to the server using basic HTTP style authentication.
         * @param user User name to be used.
         * @param password Password to be used.
         * @param options A #GAFlightCallOptions.
         * @returns %TRUE on success, %FALSE if there was an error.
         */
        authenticate_basic_token(
            user: string,
            password: string,
            options: CallOptions | null,
        ): [boolean, string, string];
        close(): boolean;
        do_get(ticket: Ticket, options?: CallOptions | null): StreamReader | null;
        get_flight_info(descriptor: Descriptor, options?: CallOptions | null): Info | null;
        list_flights(criteria?: Criteria | null, options?: CallOptions | null): Info[] | null;
    }

    module ClientOptions {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            disable_server_verification: boolean;
            disableServerVerification: boolean;
        }
    }

    class ClientOptions extends GObject.Object {
        static $gtype: GObject.GType<ClientOptions>;

        // Own properties of ArrowFlight.ClientOptions

        /**
         * Whether use TLS without validating the server certificate. Use
         * with caution.
         */
        get disable_server_verification(): boolean;
        set disable_server_verification(val: boolean);
        /**
         * Whether use TLS without validating the server certificate. Use
         * with caution.
         */
        get disableServerVerification(): boolean;
        set disableServerVerification(val: boolean);

        // Constructors of ArrowFlight.ClientOptions

        constructor(properties?: Partial<ClientOptions.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): ClientOptions;
    }

    module CommandDescriptor {
        // Constructor properties interface

        interface ConstructorProps extends Descriptor.ConstructorProps {}
    }

    class CommandDescriptor extends Descriptor {
        static $gtype: GObject.GType<CommandDescriptor>;

        // Constructors of ArrowFlight.CommandDescriptor

        constructor(properties?: Partial<CommandDescriptor.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](command: string): CommandDescriptor;

        // Own methods of ArrowFlight.CommandDescriptor

        get_command(): string;
    }

    module Criteria {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            expression: GLib.Bytes;
        }
    }

    class Criteria extends GObject.Object {
        static $gtype: GObject.GType<Criteria>;

        // Own properties of ArrowFlight.Criteria

        /**
         * Opaque criteria expression, dependent on server implementation.
         */
        get expression(): GLib.Bytes;
        set expression(val: GLib.Bytes);

        // Constructors of ArrowFlight.Criteria

        constructor(properties?: Partial<Criteria.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](expression: GLib.Bytes | Uint8Array): Criteria;
    }

    module DataStream {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            stream: any;
        }
    }

    class DataStream extends GObject.Object {
        static $gtype: GObject.GType<DataStream>;

        // Own properties of ArrowFlight.DataStream

        set stream(val: any);

        // Constructors of ArrowFlight.DataStream

        constructor(properties?: Partial<DataStream.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;
    }

    module Descriptor {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            descriptor: any;
        }
    }

    abstract class Descriptor extends GObject.Object {
        static $gtype: GObject.GType<Descriptor>;

        // Own properties of ArrowFlight.Descriptor

        set descriptor(val: any);

        // Constructors of ArrowFlight.Descriptor

        constructor(properties?: Partial<Descriptor.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Own methods of ArrowFlight.Descriptor

        equal(other_descriptor: Descriptor): boolean;
        to_string(): string;
    }

    module Endpoint {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            ticket: Ticket;
        }
    }

    class Endpoint extends GObject.Object {
        static $gtype: GObject.GType<Endpoint>;

        // Own properties of ArrowFlight.Endpoint

        /**
         * Opaque ticket identify; use with DoGet RPC.
         */
        get ticket(): Ticket;

        // Constructors of ArrowFlight.Endpoint

        constructor(properties?: Partial<Endpoint.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](ticket: Ticket, locations: Location[]): Endpoint;

        // Own methods of ArrowFlight.Endpoint

        equal(other_endpoint: Endpoint): boolean;
        get_locations(): Location[] | null;
    }

    module Info {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            info: any;
        }
    }

    class Info extends GObject.Object {
        static $gtype: GObject.GType<Info>;

        // Own properties of ArrowFlight.Info

        set info(val: any);

        // Constructors of ArrowFlight.Info

        constructor(properties?: Partial<Info.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](
            schema: Arrow.Schema,
            descriptor: Descriptor,
            endpoints: Endpoint[],
            total_records: number,
            total_bytes: number,
        ): Info;

        // Own methods of ArrowFlight.Info

        equal(other_info: Info): boolean;
        get_descriptor(): Descriptor;
        get_endpoints(): Endpoint[];
        get_schema(options?: Arrow.ReadOptions | null): Arrow.Schema;
        get_total_bytes(): number;
        get_total_records(): number;
    }

    module Location {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    class Location extends GObject.Object {
        static $gtype: GObject.GType<Location>;

        // Constructors of ArrowFlight.Location

        constructor(properties?: Partial<Location.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](uri: string): Location;

        // Own methods of ArrowFlight.Location

        equal(other_location: Location): boolean;
        get_scheme(): string;
        to_string(): string;
    }

    module PathDescriptor {
        // Constructor properties interface

        interface ConstructorProps extends Descriptor.ConstructorProps {}
    }

    class PathDescriptor extends Descriptor {
        static $gtype: GObject.GType<PathDescriptor>;

        // Constructors of ArrowFlight.PathDescriptor

        constructor(properties?: Partial<PathDescriptor.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](paths: string[]): PathDescriptor;

        // Own methods of ArrowFlight.PathDescriptor

        get_paths(): string[] | null;
    }

    module RecordBatchReader {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            reader: any;
        }
    }

    class RecordBatchReader extends GObject.Object {
        static $gtype: GObject.GType<RecordBatchReader>;

        // Own properties of ArrowFlight.RecordBatchReader

        set reader(val: any);

        // Constructors of ArrowFlight.RecordBatchReader

        constructor(properties?: Partial<RecordBatchReader.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Own methods of ArrowFlight.RecordBatchReader

        read_all(): Arrow.Table;
        read_next(): StreamChunk;
    }

    module RecordBatchStream {
        // Constructor properties interface

        interface ConstructorProps extends DataStream.ConstructorProps {
            reader: Arrow.RecordBatchReader;
        }
    }

    class RecordBatchStream extends DataStream {
        static $gtype: GObject.GType<RecordBatchStream>;

        // Own properties of ArrowFlight.RecordBatchStream

        /**
         * The reader that produces record batches.
         */
        get reader(): Arrow.RecordBatchReader;

        // Constructors of ArrowFlight.RecordBatchStream

        constructor(properties?: Partial<RecordBatchStream.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](reader: Arrow.RecordBatchReader, options?: Arrow.WriteOptions | null): RecordBatchStream;
    }

    module Server {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps, Servable.ConstructorProps {}
    }

    abstract class Server extends GObject.Object implements Servable {
        static $gtype: GObject.GType<Server>;

        // Constructors of ArrowFlight.Server

        constructor(properties?: Partial<Server.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Own virtual methods of ArrowFlight.Server

        vfunc_do_get(context: ServerCallContext, ticket: Ticket): DataStream;
        vfunc_get_flight_info(context: ServerCallContext, request: Descriptor): Info;
        vfunc_list_flights(context: ServerCallContext, criteria?: Criteria | null): Info[];

        // Own methods of ArrowFlight.Server

        do_get(context: ServerCallContext, ticket: Ticket): DataStream;
        get_flight_info(context: ServerCallContext, request: Descriptor): Info;
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

        // Inherited methods
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
         * Will result in the "sensitive" property of the widget #GObject instance to be
         * updated with the same value of the "active" property of the action #GObject
         * instance.
         *
         * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well.
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. To remove the binding without affecting the
         * `source` and the `target` you can just call g_object_unref() on the returned
         * #GBinding instance.
         *
         * Removing the binding by calling g_object_unref() on it must only be done if
         * the binding, `source` and `target` are only used from a single thread and it
         * is clear that both `source` and `target` outlive the binding. Especially it
         * is not safe to rely on this if the binding, `source` or `target` can be
         * finalized from different threads. Keep another reference to the binding and
         * use g_binding_unbind() instead to be on the safe side.
         *
         * A #GObject can have multiple bindings.
         * @param source_property the property on @source to bind
         * @param target the target #GObject
         * @param target_property the property on @target to bind
         * @param flags flags to pass to #GBinding
         * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
         */
        bind_property(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags,
        ): GObject.Binding;
        /**
         * Complete version of g_object_bind_property().
         *
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target,` allowing you to set the transformation functions to be used by
         * the binding.
         *
         * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well. The `transform_from` function is only used in case
         * of bidirectional bindings, otherwise it will be ignored
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. This will release the reference that is
         * being held on the #GBinding instance; if you want to hold on to the
         * #GBinding instance, you will need to hold a reference to it.
         *
         * To remove the binding, call g_binding_unbind().
         *
         * A #GObject can have multiple bindings.
         *
         * The same `user_data` parameter will be used for both `transform_to`
         * and `transform_from` transformation functions; the `notify` function will
         * be called once, when the binding is removed. If you need different data
         * for each transformation function, please use
         * g_object_bind_property_with_closures() instead.
         * @param source_property the property on @source to bind
         * @param target the target #GObject
         * @param target_property the property on @target to bind
         * @param flags flags to pass to #GBinding
         * @param transform_to the transformation function     from the @source to the @target, or %NULL to use the default
         * @param transform_from the transformation function     from the @target to the @source, or %NULL to use the default
         * @param notify a function to call when disposing the binding, to free     resources used by the transformation functions, or %NULL if not required
         * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
         */
        bind_property_full(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags,
            transform_to?: GObject.BindingTransformFunc | null,
            transform_from?: GObject.BindingTransformFunc | null,
            notify?: GLib.DestroyNotify | null,
        ): GObject.Binding;
        // Conflicted with GObject.Object.bind_property_full
        bind_property_full(...args: never[]): any;
        /**
         * This function is intended for #GObject implementations to re-enforce
         * a [floating][floating-ref] object reference. Doing this is seldom
         * required: all #GInitiallyUnowneds are created with a floating reference
         * which usually just needs to be sunken by calling g_object_ref_sink().
         */
        force_floating(): void;
        /**
         * Increases the freeze count on `object`. If the freeze count is
         * non-zero, the emission of "notify" signals on `object` is
         * stopped. The signals are queued until the freeze count is decreased
         * to zero. Duplicate notifications are squashed so that at most one
         * #GObject::notify signal is emitted for each property modified while the
         * object is frozen.
         *
         * This is necessary for accessors that modify multiple properties to prevent
         * premature notification while the object is still being modified.
         */
        freeze_notify(): void;
        /**
         * Gets a named field from the objects table of associations (see g_object_set_data()).
         * @param key name of the key for that association
         * @returns the data if found,          or %NULL if no such data exists.
         */
        get_data(key: string): any | null;
        get_property(property_name: string): any;
        /**
         * This function gets back user data pointers stored via
         * g_object_set_qdata().
         * @param quark A #GQuark, naming the user data pointer
         * @returns The user data pointer set, or %NULL
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
         * @returns %TRUE if @object has a floating reference
         */
        is_floating(): boolean;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use g_object_notify_by_pspec()
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * g_object_freeze_notify(). In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when g_object_thaw_notify() is
         * called.
         * @param property_name the name of a property installed on the class of @object.
         */
        notify(property_name: string): void;
        /**
         * Emits a "notify" signal for the property specified by `pspec` on `object`.
         *
         * This function omits the property name lookup, hence it is faster than
         * g_object_notify().
         *
         * One way to avoid using g_object_notify() from within the
         * class that registered the properties, and using g_object_notify_by_pspec()
         * instead, is to store the GParamSpec used with
         * g_object_class_install_property() inside a static array, e.g.:
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
         * @param pspec the #GParamSpec of a property installed on the class of @object.
         */
        notify_by_pspec(pspec: GObject.ParamSpec): void;
        /**
         * Increases the reference count of `object`.
         *
         * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
         * of `object` will be propagated to the return type (using the GCC typeof()
         * extension), so any casting the caller needs to do on the return type must be
         * explicit.
         * @returns the same @object
         */
        ref(): GObject.Object;
        /**
         * Increase the reference count of `object,` and possibly remove the
         * [floating][floating-ref] reference, if `object` has a floating reference.
         *
         * In other words, if the object is floating, then this call "assumes
         * ownership" of the floating reference, converting it to a normal
         * reference by clearing the floating flag while leaving the reference
         * count unchanged.  If the object is not floating, then this call
         * adds a new normal reference increasing the reference count by one.
         *
         * Since GLib 2.56, the type of `object` will be propagated to the return type
         * under the same conditions as for g_object_ref().
         * @returns @object
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
         * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
         * This means a copy of `key` is kept permanently (even after `object` has been
         * finalized) — so it is recommended to only use a small, bounded set of values
         * for `key` in your program, to avoid the #GQuark storage growing unbounded.
         * @param key name of the key
         * @param data data to associate with that key
         */
        set_data(key: string, data?: any | null): void;
        set_property(property_name: string, value: any): void;
        /**
         * Remove a specified datum from the object's data associations,
         * without invoking the association's destroy handler.
         * @param key name of the key
         * @returns the data if found, or %NULL          if no such data exists.
         */
        steal_data(key: string): any | null;
        /**
         * This function gets back user data pointers stored via
         * g_object_set_qdata() and removes the `data` from object
         * without invoking its destroy() function (if any was
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
         * Using g_object_get_qdata() in the above example, instead of
         * g_object_steal_qdata() would have left the destroy function set,
         * and thus the partial string list would have been freed upon
         * g_object_set_qdata_full().
         * @param quark A #GQuark, naming the user data pointer
         * @returns The user data pointer set, or %NULL
         */
        steal_qdata(quark: GLib.Quark): any | null;
        /**
         * Reverts the effect of a previous call to
         * g_object_freeze_notify(). The freeze count is decreased on `object`
         * and when it reaches zero, queued "notify" signals are emitted.
         *
         * Duplicate notifications for each property are squashed so that at most one
         * #GObject::notify signal is emitted for each property, in the reverse order
         * in which they have been queued.
         *
         * It is an error to call this function when the freeze count is zero.
         */
        thaw_notify(): void;
        /**
         * Decreases the reference count of `object`. When its reference count
         * drops to 0, the object is finalized (i.e. its memory is freed).
         *
         * If the pointer to the #GObject may be reused in future (for example, if it is
         * an instance variable of another object), it is recommended to clear the
         * pointer to %NULL rather than retain a dangling pointer to a potentially
         * invalid #GObject instance. Use g_clear_object() for this.
         */
        unref(): void;
        /**
         * This function essentially limits the life time of the `closure` to
         * the life time of the object. That is, when the object is finalized,
         * the `closure` is invalidated by calling g_closure_invalidate() on
         * it, in order to prevent invocations of the closure with a finalized
         * (nonexisting) object. Also, g_object_ref() and g_object_unref() are
         * added as marshal guards to the `closure,` to ensure that an extra
         * reference count is held on `object` during invocation of the
         * `closure`.  Usually, this function will be called on closures that
         * use this `object` as closure data.
         * @param closure #GClosure to watch
         */
        watch_closure(closure: GObject.Closure): void;
        vfunc_constructed(): void;
        vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
        vfunc_dispose(): void;
        vfunc_finalize(): void;
        vfunc_get_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use g_object_notify_by_pspec()
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * g_object_freeze_notify(). In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when g_object_thaw_notify() is
         * called.
         * @param pspec
         */
        vfunc_notify(pspec: GObject.ParamSpec): void;
        vfunc_set_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        disconnect(id: number): void;
        set(properties: { [key: string]: any }): void;
        block_signal_handler(id: number): any;
        unblock_signal_handler(id: number): any;
        stop_emission_by_name(detailedName: string): any;
    }

    module ServerAuthHandler {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            handler: any;
        }
    }

    abstract class ServerAuthHandler extends GObject.Object {
        static $gtype: GObject.GType<ServerAuthHandler>;

        // Own properties of ArrowFlight.ServerAuthHandler

        set handler(val: any);

        // Constructors of ArrowFlight.ServerAuthHandler

        constructor(properties?: Partial<ServerAuthHandler.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;
    }

    module ServerAuthReader {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            reader: any;
        }
    }

    class ServerAuthReader extends GObject.Object {
        static $gtype: GObject.GType<ServerAuthReader>;

        // Own properties of ArrowFlight.ServerAuthReader

        set reader(val: any);

        // Constructors of ArrowFlight.ServerAuthReader

        constructor(properties?: Partial<ServerAuthReader.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Own methods of ArrowFlight.ServerAuthReader

        /**
         * Reads a message from the client.
         * @returns Read data as #GBytes on   success, %NULL on error.
         */
        read(): GLib.Bytes | null;
    }

    module ServerAuthSender {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            sender: any;
        }
    }

    class ServerAuthSender extends GObject.Object {
        static $gtype: GObject.GType<ServerAuthSender>;

        // Own properties of ArrowFlight.ServerAuthSender

        set sender(val: any);

        // Constructors of ArrowFlight.ServerAuthSender

        constructor(properties?: Partial<ServerAuthSender.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Own methods of ArrowFlight.ServerAuthSender

        /**
         * Writes a message to the client.
         * @param message A #GBytes to be sent.
         * @returns %TRUE on success, %FALSE on error.
         */
        write(message: GLib.Bytes | Uint8Array): boolean;
    }

    module ServerCallContext {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            call_context: any;
            callContext: any;
        }
    }

    class ServerCallContext extends GObject.Object {
        static $gtype: GObject.GType<ServerCallContext>;

        // Own properties of ArrowFlight.ServerCallContext

        set call_context(val: any);
        set callContext(val: any);

        // Constructors of ArrowFlight.ServerCallContext

        constructor(properties?: Partial<ServerCallContext.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;
    }

    module ServerCustomAuthHandler {
        // Constructor properties interface

        interface ConstructorProps extends ServerAuthHandler.ConstructorProps {}
    }

    class ServerCustomAuthHandler extends ServerAuthHandler {
        static $gtype: GObject.GType<ServerCustomAuthHandler>;

        // Constructors of ArrowFlight.ServerCustomAuthHandler

        constructor(properties?: Partial<ServerCustomAuthHandler.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Own virtual methods of ArrowFlight.ServerCustomAuthHandler

        /**
         * Authenticates the client on initial connection. The server can send
         * and read responses from the client at any time.
         * @param context A #GAFlightServerCallContext.
         * @param sender A #GAFlightServerAuthSender.
         * @param reader A #GAFlightServerAuthReader.
         */
        vfunc_authenticate(context: ServerCallContext, sender: ServerAuthSender, reader: ServerAuthReader): void;
        /**
         * Validates a per-call client token.
         * @param context A #GAFlightServerCallContext.
         * @param token The client token. May be the empty string if the client does not   provide a token.
         */
        vfunc_is_valid(context: ServerCallContext, token: GLib.Bytes | Uint8Array): GLib.Bytes;

        // Own methods of ArrowFlight.ServerCustomAuthHandler

        /**
         * Authenticates the client on initial connection. The server can send
         * and read responses from the client at any time.
         * @param context A #GAFlightServerCallContext.
         * @param sender A #GAFlightServerAuthSender.
         * @param reader A #GAFlightServerAuthReader.
         */
        authenticate(context: ServerCallContext, sender: ServerAuthSender, reader: ServerAuthReader): void;
        /**
         * Validates a per-call client token.
         * @param context A #GAFlightServerCallContext.
         * @param token The client token. May be the empty string if the client does not   provide a token.
         */
        is_valid(context: ServerCallContext, token: GLib.Bytes | Uint8Array): GLib.Bytes;
    }

    module ServerOptions {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            auth_handler: ServerAuthHandler;
            authHandler: ServerAuthHandler;
            location: Location;
        }
    }

    class ServerOptions extends GObject.Object {
        static $gtype: GObject.GType<ServerOptions>;

        // Own properties of ArrowFlight.ServerOptions

        /**
         * The authentication handler.
         */
        get auth_handler(): ServerAuthHandler;
        set auth_handler(val: ServerAuthHandler);
        /**
         * The authentication handler.
         */
        get authHandler(): ServerAuthHandler;
        set authHandler(val: ServerAuthHandler);
        /**
         * The location to be listened.
         */
        get location(): Location;

        // Constructors of ArrowFlight.ServerOptions

        constructor(properties?: Partial<ServerOptions.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](location: Location): ServerOptions;
    }

    module StreamChunk {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            chunk: any;
        }
    }

    class StreamChunk extends GObject.Object {
        static $gtype: GObject.GType<StreamChunk>;

        // Own properties of ArrowFlight.StreamChunk

        set chunk(val: any);

        // Constructors of ArrowFlight.StreamChunk

        constructor(properties?: Partial<StreamChunk.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Own methods of ArrowFlight.StreamChunk

        get_data(): Arrow.RecordBatch;
        // Conflicted with GObject.Object.get_data
        get_data(...args: never[]): any;
        get_metadata(): Arrow.Buffer | null;
    }

    module StreamReader {
        // Constructor properties interface

        interface ConstructorProps extends RecordBatchReader.ConstructorProps {}
    }

    class StreamReader extends RecordBatchReader {
        static $gtype: GObject.GType<StreamReader>;

        // Constructors of ArrowFlight.StreamReader

        constructor(properties?: Partial<StreamReader.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;
    }

    module Ticket {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            data: GLib.Bytes;
        }
    }

    class Ticket extends GObject.Object {
        static $gtype: GObject.GType<Ticket>;

        // Own properties of ArrowFlight.Ticket

        /**
         * Opaque identifier or credential to use when requesting a data
         * stream with the DoGet RPC.
         */
        get data(): GLib.Bytes;
        set data(val: GLib.Bytes);

        // Constructors of ArrowFlight.Ticket

        constructor(properties?: Partial<Ticket.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](data: GLib.Bytes | Uint8Array): Ticket;

        // Own methods of ArrowFlight.Ticket

        equal(other_ticket: Ticket): boolean;
    }

    type CallOptionsClass = typeof CallOptions;
    type ClientClass = typeof Client;
    type ClientOptionsClass = typeof ClientOptions;
    type CommandDescriptorClass = typeof CommandDescriptor;
    type CriteriaClass = typeof Criteria;
    type DataStreamClass = typeof DataStream;
    type DescriptorClass = typeof Descriptor;
    type EndpointClass = typeof Endpoint;
    type InfoClass = typeof Info;
    type LocationClass = typeof Location;
    type PathDescriptorClass = typeof PathDescriptor;
    type RecordBatchReaderClass = typeof RecordBatchReader;
    type RecordBatchStreamClass = typeof RecordBatchStream;
    type ServableInterface = typeof Servable;
    type ServerAuthHandlerClass = typeof ServerAuthHandler;
    type ServerAuthReaderClass = typeof ServerAuthReader;
    type ServerAuthSenderClass = typeof ServerAuthSender;
    type ServerCallContextClass = typeof ServerCallContext;
    type ServerClass = typeof Server;
    type ServerCustomAuthHandlerClass = typeof ServerCustomAuthHandler;
    type ServerOptionsClass = typeof ServerOptions;
    type StreamChunkClass = typeof StreamChunk;
    type StreamReaderClass = typeof StreamReader;
    type TicketClass = typeof Ticket;
    module Servable {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    export interface ServableNamespace {
        $gtype: GObject.GType<Servable>;
        prototype: Servable;
    }
    interface Servable extends GObject.Object {}

    export const Servable: ServableNamespace;

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
