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
import type Soup from '@girs/soup-2.4';
import type Gio from '@girs/gio-2.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type GModule from '@girs/gmodule-2.0';
import type Rest from '@girs/rest-0.7';
import type Json from '@girs/json-1.0';

export namespace GFBGraph {
    /**
     * GFBGraph-0.3
     */

    export namespace NodeError {
        export const $gtype: GObject.GType<NodeError>;
    }

    enum NodeError {
        CONNECTIONABLE,
        CONNECTABLE,
    }
    /**
     * Create a new #RestProxyCall pointing to the Facebook Graph API url (https://graph.facebook.com)
     * and processed by the authorizer to allow queries.
     * @param authorizer a #GFBGraphAuthorizer.
     * @returns a new #RestProxyCall or %NULL in case of error.
     */
    function new_rest_call(authorizer: Authorizer): Rest.ProxyCall;
    namespace Album {
        // Signal signatures
        interface SignalSignatures extends Node.SignalSignatures {
            'notify::count': (pspec: GObject.ParamSpec) => void;
            'notify::cover-photo': (pspec: GObject.ParamSpec) => void;
            'notify::description': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::created-time': (pspec: GObject.ParamSpec) => void;
            'notify::id': (pspec: GObject.ParamSpec) => void;
            'notify::link': (pspec: GObject.ParamSpec) => void;
            'notify::updated-time': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Node.ConstructorProps, Connectable.ConstructorProps {
            count: number;
            cover_photo: string;
            coverPhoto: string;
            description: string;
            name: string;
        }
    }

    class Album extends Node implements Connectable {
        static $gtype: GObject.GType<Album>;

        // Properties

        /**
         * The number of photos in the album.
         */
        get count(): number;
        set count(val: number);
        get cover_photo(): string;
        set cover_photo(val: string);
        get coverPhoto(): string;
        set coverPhoto(val: string);
        /**
         * The album description given by the owner.
         */
        get description(): string;
        set description(val: string);
        /**
         * The album name.
         */
        get name(): string;
        set name(val: string);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Album.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Album.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): Album;

        static new_from_id(authorizer: Authorizer, id: string): Album;

        // Signals

        connect<K extends keyof Album.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Album.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Album.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Album.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Album.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Album.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        get_count(): number;
        get_cover_photo_id(): string;
        get_description(): string;
        get_name(): string;
        /**
         * Sets the description for the `album`.
         * @param description a const pointer to a #gchar.
         */
        set_description(description: string): void;
        /**
         * Sets the name for the `album`.
         * @param name a const pointer to a #gchar.
         */
        set_name(name: string): void;

        // Inherited properties
        get created_time(): string;
        set created_time(val: string);
        get createdTime(): string;
        set createdTime(val: string);
        /**
         * The node ID. All nodes have one of this.
         */
        get id(): string;
        set id(val: string);
        /**
         * The node link. An URL to the node on Facebook.
         */
        get link(): string;
        set link(val: string);
        get updated_time(): string;
        set updated_time(val: string);
        get updatedTime(): string;
        set updatedTime(val: string);

        // Inherited methods
        /**
         * In most cases, #GFBGraphConnectable implementers can use this function in order to parse
         * the response when a gfbgraph_node_get_connection_nodes() is executed and the
         * gfbgraph_connectable_parse_connected_data() was called.
         *
         * Normally, Facebook Graph API returns the connections in the same way, using JSON objects,
         * with a root object called "data".
         * @param payload a const #gchar with the response string from the Facebook Graph API.
         * @returns a newly-allocated #GList of #GFBGraphNode with the same #GType as @self.
         */
        default_parse_connected_data(payload: string): Node[];
        /**
         * Get the Facebook Graph API function path to retrieve the nodes connected with `node_type`
         * managed by the #GFBGraphConnectable object.
         * @param node_type a #GType, required a #GFBGRAPH_TYPE_NODE or children.
         * @returns a const #gchar with the function path or %NULL.
         */
        get_connection_path(node_type: GObject.GType): string;
        /**
         * Get the params to be inserted in a request to the Facebook Graph API
         * in order to append the node `self` to a node of type `node_type`.
         * @param node_type a #GType, required a #GFBGRAPH_TYPE_NODE or children.
         * @returns A string based #GHashTable with the params and his values or %NULL.
         */
        get_connection_post_params(node_type: GObject.GType): GLib.HashTable<any, any>;
        /**
         * Check if `self` object, normally a #GFBGraphNode implementing the #GFBGraphConnectable interface,
         * has the possibility to be connected to another node of type `node_type`.
         * @param node_type a #GType, required a #GFBGRAPH_TYPE_NODE or children.
         * @returns %TRUE in case that the @self object can be connected to a node of type @node_type, %FALSE otherwise.
         */
        is_connectable_to(node_type: GObject.GType): boolean;
        /**
         * Parse the response contained in `payload` when a gfbgraph_node_get_connection_nodes() was
         * executed.
         * @param payload a const #gchar with the response string from the Facebook Graph API.
         * @returns a newly-allocated #GList of #GFBGraphNode created from the @payload or %NULL.
         */
        parse_connected_data(payload: string): Node[];
        /**
         * Get the params to be inserted in a request to the Facebook Graph API
         * in order to append the node `self` to a node of type `node_type`.
         * @param node_type a #GType, required a #GFBGRAPH_TYPE_NODE or children.
         */
        vfunc_get_connection_post_params(node_type: GObject.GType): GLib.HashTable<any, any>;
        /**
         * Parse the response contained in `payload` when a gfbgraph_node_get_connection_nodes() was
         * executed.
         * @param payload a const #gchar with the response string from the Facebook Graph API.
         */
        vfunc_parse_connected_data(payload: string): Node[];
        /**
         * Appends `connect_node` to `node`. `connect_node` must implement the #GFBGraphConnectable interface
         * and be connectable to `node` GType.
         * @param connect_node A #GFBGraphNode.
         * @param authorizer A #GFBGraphAuthorizer.
         * @returns TRUE on sucess, FALSE if an error ocurred.
         */
        append_connection(connect_node: Node, authorizer: Authorizer): boolean;
        /**
         * Retrieve the nodes of type `node_type` connected to the `node` object. The `node_type` object must
         * implement the #GFBGraphConnectionable interface and be connectable to `node` type object.
         * See gfbgraph_node_get_connection_nodes_async() for the asynchronous version of this call.
         * @param node_type a #GFBGraphNode type #GType that determines the kind of nodes to retrieve.
         * @param authorizer a #GFBGraphAuthorizer.
         * @returns a newly-allocated #GList of type @node_type objects with the found nodes.
         */
        get_connection_nodes(node_type: GObject.GType, authorizer: Authorizer): Node[];
        /**
         * Asynchronously retrieve the list of nodes of type `node_type` connected to the `node` object. See
         * gfbgraph_node_get_connection_nodes() for the synchronous version of this call.
         *
         * When the operation is finished, `callback` will be called. You can then call gfbgraph_node_get_connection_nodes_finish()
         * to get the list of connected nodes.
         * @param node_type a #GFBGraphNode type #GType that must implement the #GFBGraphConnectionable interface.
         * @param authorizer a #GFBGraphAuthorizer.
         * @param cancellable An optional #GCancellable object, or %NULL.
         */
        get_connection_nodes_async(
            node_type: GObject.GType,
            authorizer: Authorizer,
            cancellable?: Gio.Cancellable | null,
        ): globalThis.Promise<Node[]>;
        /**
         * Asynchronously retrieve the list of nodes of type `node_type` connected to the `node` object. See
         * gfbgraph_node_get_connection_nodes() for the synchronous version of this call.
         *
         * When the operation is finished, `callback` will be called. You can then call gfbgraph_node_get_connection_nodes_finish()
         * to get the list of connected nodes.
         * @param node_type a #GFBGraphNode type #GType that must implement the #GFBGraphConnectionable interface.
         * @param authorizer a #GFBGraphAuthorizer.
         * @param cancellable An optional #GCancellable object, or %NULL.
         * @param callback A #GAsyncReadyCallback to call when the request is completed.
         */
        get_connection_nodes_async(
            node_type: GObject.GType,
            authorizer: Authorizer,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Asynchronously retrieve the list of nodes of type `node_type` connected to the `node` object. See
         * gfbgraph_node_get_connection_nodes() for the synchronous version of this call.
         *
         * When the operation is finished, `callback` will be called. You can then call gfbgraph_node_get_connection_nodes_finish()
         * to get the list of connected nodes.
         * @param node_type a #GFBGraphNode type #GType that must implement the #GFBGraphConnectionable interface.
         * @param authorizer a #GFBGraphAuthorizer.
         * @param cancellable An optional #GCancellable object, or %NULL.
         * @param callback A #GAsyncReadyCallback to call when the request is completed.
         */
        get_connection_nodes_async(
            node_type: GObject.GType,
            authorizer: Authorizer,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<Node[]> | void;
        /**
         * Finishes an asynchronous operation started with
         * gfbgraph_node_get_connection_nodes_async().
         * @param result A #GAsyncResult.
         * @returns a newly-allocated #GList of type #node_type objects with the found nodes.
         */
        get_connection_nodes_async_finish(result: Gio.AsyncResult): Node[];
        /**
         * Gets a node created time.
         * @returns an ISO 8601 encoded date when the node was initially published.
         */
        get_created_time(): string;
        /**
         * Gets the Facebook Graph unique node ID.
         * @returns the node ID.
         */
        get_id(): string;
        get_link(): string;
        /**
         * Gets a node updated time.
         * @returns an ISO 8601 encoded date when the node was updated.
         */
        get_updated_time(): string;
        /**
         * Sets the ID for a node. Just useful when a new node is created
         * and the Graph API returns the ID of the new created node.
         * @param id a const pointer to a #gchar.
         */
        set_id(id: string): void;
    }

    namespace GoaAuthorizer {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps, Authorizer.ConstructorProps {}
    }

    class GoaAuthorizer extends GObject.Object implements Authorizer {
        static $gtype: GObject.GType<GoaAuthorizer>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: GoaAuthorizer.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<GoaAuthorizer.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        connect<K extends keyof GoaAuthorizer.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, GoaAuthorizer.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof GoaAuthorizer.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, GoaAuthorizer.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof GoaAuthorizer.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<GoaAuthorizer.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Inherited methods
        /**
         * Adds the necessary authorization to `call`.
         *
         * This method modifies `call` in place and is thread safe.
         * @param call A #RestProxyCall.
         */
        process_call(call: Rest.ProxyCall): void;
        /**
         * Adds the necessary authorization to `message`. The type of `message`
         * can be DELETE, GET and POST.
         *
         * This method modifies `message` in place and is thread safe.
         * @param message A #SoupMessage.
         */
        process_message(message: Soup.Message): void;
        /**
         * Synchronously forces `iface` to refresh any authorization tokens
         * held by it.
         *
         * This method is thread safe.
         * @param cancellable An optional #GCancellable object, or %NULL.
         * @returns %TRUE if the authorizer now has a valid token.
         */
        refresh_authorization(cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Adds the necessary authorization to `call`.
         *
         * This method modifies `call` in place and is thread safe.
         * @param call A #RestProxyCall.
         */
        vfunc_process_call(call: Rest.ProxyCall): void;
        /**
         * Adds the necessary authorization to `message`. The type of `message`
         * can be DELETE, GET and POST.
         *
         * This method modifies `message` in place and is thread safe.
         * @param message A #SoupMessage.
         */
        vfunc_process_message(message: Soup.Message): void;
        /**
         * Synchronously forces `iface` to refresh any authorization tokens
         * held by it.
         *
         * This method is thread safe.
         * @param cancellable An optional #GCancellable object, or %NULL.
         */
        vfunc_refresh_authorization(cancellable?: Gio.Cancellable | null): boolean;
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
            flags: GObject.BindingFlags | null,
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
            flags: GObject.BindingFlags | null,
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
        /**
         * the `constructed` function is called by g_object_new() as the
         *  final step of the object creation process.  At the point of the call, all
         *  construction properties have been set on the object.  The purpose of this
         *  call is to allow for object initialisation steps that can only be performed
         *  after construction properties have been set.  `constructed` implementors
         *  should chain up to the `constructed` call of their parent class to allow it
         *  to complete its initialisation.
         */
        vfunc_constructed(): void;
        /**
         * emits property change notification for a bunch
         *  of properties. Overriding `dispatch_properties_changed` should be rarely
         *  needed.
         * @param n_pspecs
         * @param pspecs
         */
        vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
        /**
         * the `dispose` function is supposed to drop all references to other
         *  objects, but keep the instance otherwise intact, so that client method
         *  invocations still work. It may be run multiple times (due to reference
         *  loops). Before returning, `dispose` should chain up to the `dispose` method
         *  of the parent class.
         */
        vfunc_dispose(): void;
        /**
         * instance finalization function, should finish the finalization of
         *  the instance begun in `dispose` and chain up to the `finalize` method of the
         *  parent class.
         */
        vfunc_finalize(): void;
        /**
         * the generic getter for all properties of this type. Should be
         *  overridden for every type with properties.
         * @param property_id
         * @param value
         * @param pspec
         */
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
        /**
         * the generic setter for all properties of this type. Should be
         *  overridden for every type with properties. If implementations of
         *  `set_property` don't emit property change notification explicitly, this will
         *  be done implicitly by the type system. However, if the notify signal is
         *  emitted explicitly, the type system will not emit it a second time.
         * @param property_id
         * @param value
         * @param pspec
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

    namespace Node {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::created-time': (pspec: GObject.ParamSpec) => void;
            'notify::id': (pspec: GObject.ParamSpec) => void;
            'notify::link': (pspec: GObject.ParamSpec) => void;
            'notify::updated-time': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            created_time: string;
            createdTime: string;
            id: string;
            link: string;
            updated_time: string;
            updatedTime: string;
        }
    }

    class Node extends GObject.Object {
        static $gtype: GObject.GType<Node>;

        // Properties

        get created_time(): string;
        set created_time(val: string);
        get createdTime(): string;
        set createdTime(val: string);
        /**
         * The node ID. All nodes have one of this.
         */
        get id(): string;
        set id(val: string);
        /**
         * The node link. An URL to the node on Facebook.
         */
        get link(): string;
        set link(val: string);
        get updated_time(): string;
        set updated_time(val: string);
        get updatedTime(): string;
        set updatedTime(val: string);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Node.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Node.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): Node;

        static new_from_id(authorizer: Authorizer, id: string, node_type: GObject.GType): Node;

        // Signals

        connect<K extends keyof Node.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Node.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Node.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Node.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Node.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Node.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        static error_quark(): GLib.Quark;

        // Methods

        /**
         * Appends `connect_node` to `node`. `connect_node` must implement the #GFBGraphConnectable interface
         * and be connectable to `node` GType.
         * @param connect_node A #GFBGraphNode.
         * @param authorizer A #GFBGraphAuthorizer.
         * @returns TRUE on sucess, FALSE if an error ocurred.
         */
        append_connection(connect_node: Node, authorizer: Authorizer): boolean;
        /**
         * Retrieve the nodes of type `node_type` connected to the `node` object. The `node_type` object must
         * implement the #GFBGraphConnectionable interface and be connectable to `node` type object.
         * See gfbgraph_node_get_connection_nodes_async() for the asynchronous version of this call.
         * @param node_type a #GFBGraphNode type #GType that determines the kind of nodes to retrieve.
         * @param authorizer a #GFBGraphAuthorizer.
         * @returns a newly-allocated #GList of type @node_type objects with the found nodes.
         */
        get_connection_nodes(node_type: GObject.GType, authorizer: Authorizer): Node[];
        /**
         * Asynchronously retrieve the list of nodes of type `node_type` connected to the `node` object. See
         * gfbgraph_node_get_connection_nodes() for the synchronous version of this call.
         *
         * When the operation is finished, `callback` will be called. You can then call gfbgraph_node_get_connection_nodes_finish()
         * to get the list of connected nodes.
         * @param node_type a #GFBGraphNode type #GType that must implement the #GFBGraphConnectionable interface.
         * @param authorizer a #GFBGraphAuthorizer.
         * @param cancellable An optional #GCancellable object, or %NULL.
         */
        get_connection_nodes_async(
            node_type: GObject.GType,
            authorizer: Authorizer,
            cancellable?: Gio.Cancellable | null,
        ): globalThis.Promise<Node[]>;
        /**
         * Asynchronously retrieve the list of nodes of type `node_type` connected to the `node` object. See
         * gfbgraph_node_get_connection_nodes() for the synchronous version of this call.
         *
         * When the operation is finished, `callback` will be called. You can then call gfbgraph_node_get_connection_nodes_finish()
         * to get the list of connected nodes.
         * @param node_type a #GFBGraphNode type #GType that must implement the #GFBGraphConnectionable interface.
         * @param authorizer a #GFBGraphAuthorizer.
         * @param cancellable An optional #GCancellable object, or %NULL.
         * @param callback A #GAsyncReadyCallback to call when the request is completed.
         */
        get_connection_nodes_async(
            node_type: GObject.GType,
            authorizer: Authorizer,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Asynchronously retrieve the list of nodes of type `node_type` connected to the `node` object. See
         * gfbgraph_node_get_connection_nodes() for the synchronous version of this call.
         *
         * When the operation is finished, `callback` will be called. You can then call gfbgraph_node_get_connection_nodes_finish()
         * to get the list of connected nodes.
         * @param node_type a #GFBGraphNode type #GType that must implement the #GFBGraphConnectionable interface.
         * @param authorizer a #GFBGraphAuthorizer.
         * @param cancellable An optional #GCancellable object, or %NULL.
         * @param callback A #GAsyncReadyCallback to call when the request is completed.
         */
        get_connection_nodes_async(
            node_type: GObject.GType,
            authorizer: Authorizer,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<Node[]> | void;
        /**
         * Finishes an asynchronous operation started with
         * gfbgraph_node_get_connection_nodes_async().
         * @param result A #GAsyncResult.
         * @returns a newly-allocated #GList of type #node_type objects with the found nodes.
         */
        get_connection_nodes_async_finish(result: Gio.AsyncResult): Node[];
        /**
         * Gets a node created time.
         * @returns an ISO 8601 encoded date when the node was initially published.
         */
        get_created_time(): string;
        /**
         * Gets the Facebook Graph unique node ID.
         * @returns the node ID.
         */
        get_id(): string;
        get_link(): string;
        /**
         * Gets a node updated time.
         * @returns an ISO 8601 encoded date when the node was updated.
         */
        get_updated_time(): string;
        /**
         * Sets the ID for a node. Just useful when a new node is created
         * and the Graph API returns the ID of the new created node.
         * @param id a const pointer to a #gchar.
         */
        set_id(id: string): void;
    }

    namespace Photo {
        // Signal signatures
        interface SignalSignatures extends Node.SignalSignatures {
            'notify::height': (pspec: GObject.ParamSpec) => void;
            'notify::images': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::source': (pspec: GObject.ParamSpec) => void;
            'notify::width': (pspec: GObject.ParamSpec) => void;
            'notify::created-time': (pspec: GObject.ParamSpec) => void;
            'notify::id': (pspec: GObject.ParamSpec) => void;
            'notify::link': (pspec: GObject.ParamSpec) => void;
            'notify::updated-time': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps
            extends Node.ConstructorProps,
                Connectable.ConstructorProps,
                Json.Serializable.ConstructorProps {
            height: number;
            images: any;
            name: string;
            source: string;
            width: number;
        }
    }

    class Photo extends Node implements Connectable, Json.Serializable {
        static $gtype: GObject.GType<Photo>;

        // Properties

        /**
         * The default photo height, up to 720px.
         */
        get height(): number;
        set height(val: number);
        /**
         * A list with the available representations of the photo, in differents sizes
         */
        get images(): any;
        set images(val: any);
        /**
         * The name of the photo given by his owner.
         */
        get name(): string;
        set name(val: string);
        /**
         * An URI for the photo, with a maximum width or height of 720px.
         */
        get source(): string;
        set source(val: string);
        /**
         * The default photo width, up to 720px.
         */
        get width(): number;
        set width(val: number);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Photo.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Photo.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): Photo;

        static new_from_id(authorizer: Authorizer, id: string): Photo;

        // Signals

        connect<K extends keyof Photo.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Photo.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Photo.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Photo.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Photo.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Photo.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Download the default sized photo pointed by `photo,` with a maximum width or height of 720px.
         * The photo always is a JPEG.
         * @param authorizer a #GFBGraphAuthorizer.
         * @returns a #GInputStream with the photo content or %NULL in case of error.
         */
        download_default_size(authorizer: Authorizer): Gio.InputStream;
        get_default_height(): number;
        get_default_source_uri(): string;
        get_default_width(): number;
        get_image_hires(): PhotoImage;
        get_image_near_height(height: number): PhotoImage;
        get_image_near_width(width: number): PhotoImage;
        get_images(): PhotoImage[];
        get_name(): string;

        // Inherited properties
        get created_time(): string;
        set created_time(val: string);
        get createdTime(): string;
        set createdTime(val: string);
        /**
         * The node ID. All nodes have one of this.
         */
        get id(): string;
        set id(val: string);
        /**
         * The node link. An URL to the node on Facebook.
         */
        get link(): string;
        set link(val: string);
        get updated_time(): string;
        set updated_time(val: string);
        get updatedTime(): string;
        set updatedTime(val: string);

        // Inherited methods
        /**
         * In most cases, #GFBGraphConnectable implementers can use this function in order to parse
         * the response when a gfbgraph_node_get_connection_nodes() is executed and the
         * gfbgraph_connectable_parse_connected_data() was called.
         *
         * Normally, Facebook Graph API returns the connections in the same way, using JSON objects,
         * with a root object called "data".
         * @param payload a const #gchar with the response string from the Facebook Graph API.
         * @returns a newly-allocated #GList of #GFBGraphNode with the same #GType as @self.
         */
        default_parse_connected_data(payload: string): Node[];
        /**
         * Get the Facebook Graph API function path to retrieve the nodes connected with `node_type`
         * managed by the #GFBGraphConnectable object.
         * @param node_type a #GType, required a #GFBGRAPH_TYPE_NODE or children.
         * @returns a const #gchar with the function path or %NULL.
         */
        get_connection_path(node_type: GObject.GType): string;
        /**
         * Get the params to be inserted in a request to the Facebook Graph API
         * in order to append the node `self` to a node of type `node_type`.
         * @param node_type a #GType, required a #GFBGRAPH_TYPE_NODE or children.
         * @returns A string based #GHashTable with the params and his values or %NULL.
         */
        get_connection_post_params(node_type: GObject.GType): GLib.HashTable<any, any>;
        /**
         * Check if `self` object, normally a #GFBGraphNode implementing the #GFBGraphConnectable interface,
         * has the possibility to be connected to another node of type `node_type`.
         * @param node_type a #GType, required a #GFBGRAPH_TYPE_NODE or children.
         * @returns %TRUE in case that the @self object can be connected to a node of type @node_type, %FALSE otherwise.
         */
        is_connectable_to(node_type: GObject.GType): boolean;
        /**
         * Parse the response contained in `payload` when a gfbgraph_node_get_connection_nodes() was
         * executed.
         * @param payload a const #gchar with the response string from the Facebook Graph API.
         * @returns a newly-allocated #GList of #GFBGraphNode created from the @payload or %NULL.
         */
        parse_connected_data(payload: string): Node[];
        /**
         * Get the params to be inserted in a request to the Facebook Graph API
         * in order to append the node `self` to a node of type `node_type`.
         * @param node_type a #GType, required a #GFBGRAPH_TYPE_NODE or children.
         */
        vfunc_get_connection_post_params(node_type: GObject.GType): GLib.HashTable<any, any>;
        /**
         * Parse the response contained in `payload` when a gfbgraph_node_get_connection_nodes() was
         * executed.
         * @param payload a const #gchar with the response string from the Facebook Graph API.
         */
        vfunc_parse_connected_data(payload: string): Node[];
        /**
         * Calls the default implementation of the [vfunc`Json`.Serializable.deserialize_property]
         * virtual function.
         *
         * This function can be used inside a custom implementation of the
         * `deserialize_property()` virtual function in lieu of calling the
         * default implementation through `g_type_default_interface_peek()`:
         *
         * ```c
         * JsonSerializable *iface;
         * gboolean res;
         *
         * iface = g_type_default_interface_peek (JSON_TYPE_SERIALIZABLE);
         * res = iface->deserialize_property (serializable, property_name,
         *                                    value,
         *                                    pspec,
         *                                    property_node);
         * ```
         * @param property_name the name of the property to deserialize
         * @param value a pointer to an uninitialized value
         * @param pspec a property description
         * @param property_node the JSON node containing the serialized property
         * @returns `TRUE` if the property was successfully deserialized
         */
        default_deserialize_property(
            property_name: string,
            value: GObject.Value | any,
            pspec: GObject.ParamSpec,
            property_node: Json.Node,
        ): boolean;
        /**
         * Calls the default implementation of the [vfunc`Json`.Serializable.serialize_property]
         * virtual function.
         *
         * This function can be used inside a custom implementation of the
         * `serialize_property()` virtual function in lieu of calling the
         * default implementation through `g_type_default_interface_peek()`:
         *
         * ```c
         * JsonSerializable *iface;
         * JsonNode *node;
         *
         * iface = g_type_default_interface_peek (JSON_TYPE_SERIALIZABLE);
         * node = iface->serialize_property (serializable, property_name,
         *                                   value,
         *                                   pspec);
         * ```
         *
         * This function will return `NULL` if the property could not be
         * serialized.
         * @param property_name the name of the property to serialize
         * @param value the value of the property to serialize
         * @param pspec a property description
         * @returns a node containing the   serialized property
         */
        default_serialize_property(
            property_name: string,
            value: GObject.Value | any,
            pspec: GObject.ParamSpec,
        ): Json.Node | null;
        /**
         * Asks a `JsonSerializable` implementation to deserialize the
         * property contained inside `property_node` and place its value
         * into `value`.
         *
         * The `value` can be:
         *
         * - an empty `GValue` initialized by `G_VALUE_INIT`, which will be automatically
         *   initialized with the expected type of the property by using the given
         *   property description (since JSON-GLib 1.6)
         * - a `GValue` initialized with the expected type of the property
         *
         * This function will not be called for properties that are marked as
         * as `G_PARAM_CONSTRUCT_ONLY`.
         * @param property_name the name of the property to serialize
         * @param pspec a property description
         * @param property_node the JSON node containing the serialized property
         * @returns `TRUE` if the property was successfully deserialized
         */
        deserialize_property(
            property_name: string,
            pspec: GObject.ParamSpec,
            property_node: Json.Node,
        ): [boolean, unknown];
        /**
         * Calls the [vfunc`Json`.Serializable.find_property] implementation on
         * the `JsonSerializable` instance, which will return the property
         * description for the given name.
         * @param name the name of the property
         * @returns the property description
         */
        find_property(name: string): GObject.ParamSpec | null;
        /**
         * Calls the [vfunc`Json`.Serializable.get_property] implementation
         * on the `JsonSerializable` instance, which will get the value of
         * the given property.
         * @param pspec a property description
         */
        get_property(pspec: GObject.ParamSpec): unknown;
        // Conflicted with GObject.Object.get_property
        get_property(...args: never[]): any;
        /**
         * Calls the [vfunc`Json`.Serializable.list_properties] implementation on
         * the `JsonSerializable` instance, which will return the list of serializable
         * properties.
         * @returns the serializable   properties of the object
         */
        list_properties(): GObject.ParamSpec[];
        /**
         * Asks a `JsonSerializable` implementation to serialize an object
         * property into a JSON node.
         * @param property_name the name of the property to serialize
         * @param value the value of the property to serialize
         * @param pspec a property description
         * @returns a node containing the serialized property
         */
        serialize_property(
            property_name: string,
            value: GObject.Value | any,
            pspec: GObject.ParamSpec,
        ): Json.Node | null;
        /**
         * Calls the [vfunc`Json`.Serializable.set_property] implementation
         * on the `JsonSerializable` instance, which will set the property
         * with the given value.
         * @param pspec a property description
         * @param value the property value to set
         */
        set_property(pspec: GObject.ParamSpec, value: GObject.Value | any): void;
        // Conflicted with GObject.Object.set_property
        set_property(...args: never[]): any;
        /**
         * Asks a `JsonSerializable` implementation to deserialize the
         * property contained inside `property_node` and place its value
         * into `value`.
         *
         * The `value` can be:
         *
         * - an empty `GValue` initialized by `G_VALUE_INIT`, which will be automatically
         *   initialized with the expected type of the property by using the given
         *   property description (since JSON-GLib 1.6)
         * - a `GValue` initialized with the expected type of the property
         *
         * This function will not be called for properties that are marked as
         * as `G_PARAM_CONSTRUCT_ONLY`.
         * @param property_name the name of the property to serialize
         * @param pspec a property description
         * @param property_node the JSON node containing the serialized property
         */
        vfunc_deserialize_property(
            property_name: string,
            pspec: GObject.ParamSpec,
            property_node: Json.Node,
        ): [boolean, unknown];
        /**
         * Calls the [vfunc`Json`.Serializable.find_property] implementation on
         * the `JsonSerializable` instance, which will return the property
         * description for the given name.
         * @param name the name of the property
         */
        vfunc_find_property(name: string): GObject.ParamSpec | null;
        /**
         * Calls the [vfunc`Json`.Serializable.get_property] implementation
         * on the `JsonSerializable` instance, which will get the value of
         * the given property.
         * @param pspec a property description
         */
        vfunc_get_property(pspec: GObject.ParamSpec): unknown;
        // Conflicted with GObject.Object.vfunc_get_property
        vfunc_get_property(...args: never[]): any;
        /**
         * Asks a `JsonSerializable` implementation to serialize an object
         * property into a JSON node.
         * @param property_name the name of the property to serialize
         * @param value the value of the property to serialize
         * @param pspec a property description
         */
        vfunc_serialize_property(
            property_name: string,
            value: GObject.Value | any,
            pspec: GObject.ParamSpec,
        ): Json.Node | null;
        /**
         * Calls the [vfunc`Json`.Serializable.set_property] implementation
         * on the `JsonSerializable` instance, which will set the property
         * with the given value.
         * @param pspec a property description
         * @param value the property value to set
         */
        vfunc_set_property(pspec: GObject.ParamSpec, value: GObject.Value | any): void;
        // Conflicted with GObject.Object.vfunc_set_property
        vfunc_set_property(...args: never[]): any;
        /**
         * Appends `connect_node` to `node`. `connect_node` must implement the #GFBGraphConnectable interface
         * and be connectable to `node` GType.
         * @param connect_node A #GFBGraphNode.
         * @param authorizer A #GFBGraphAuthorizer.
         * @returns TRUE on sucess, FALSE if an error ocurred.
         */
        append_connection(connect_node: Node, authorizer: Authorizer): boolean;
        /**
         * Retrieve the nodes of type `node_type` connected to the `node` object. The `node_type` object must
         * implement the #GFBGraphConnectionable interface and be connectable to `node` type object.
         * See gfbgraph_node_get_connection_nodes_async() for the asynchronous version of this call.
         * @param node_type a #GFBGraphNode type #GType that determines the kind of nodes to retrieve.
         * @param authorizer a #GFBGraphAuthorizer.
         * @returns a newly-allocated #GList of type @node_type objects with the found nodes.
         */
        get_connection_nodes(node_type: GObject.GType, authorizer: Authorizer): Node[];
        /**
         * Asynchronously retrieve the list of nodes of type `node_type` connected to the `node` object. See
         * gfbgraph_node_get_connection_nodes() for the synchronous version of this call.
         *
         * When the operation is finished, `callback` will be called. You can then call gfbgraph_node_get_connection_nodes_finish()
         * to get the list of connected nodes.
         * @param node_type a #GFBGraphNode type #GType that must implement the #GFBGraphConnectionable interface.
         * @param authorizer a #GFBGraphAuthorizer.
         * @param cancellable An optional #GCancellable object, or %NULL.
         */
        get_connection_nodes_async(
            node_type: GObject.GType,
            authorizer: Authorizer,
            cancellable?: Gio.Cancellable | null,
        ): globalThis.Promise<Node[]>;
        /**
         * Asynchronously retrieve the list of nodes of type `node_type` connected to the `node` object. See
         * gfbgraph_node_get_connection_nodes() for the synchronous version of this call.
         *
         * When the operation is finished, `callback` will be called. You can then call gfbgraph_node_get_connection_nodes_finish()
         * to get the list of connected nodes.
         * @param node_type a #GFBGraphNode type #GType that must implement the #GFBGraphConnectionable interface.
         * @param authorizer a #GFBGraphAuthorizer.
         * @param cancellable An optional #GCancellable object, or %NULL.
         * @param callback A #GAsyncReadyCallback to call when the request is completed.
         */
        get_connection_nodes_async(
            node_type: GObject.GType,
            authorizer: Authorizer,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Asynchronously retrieve the list of nodes of type `node_type` connected to the `node` object. See
         * gfbgraph_node_get_connection_nodes() for the synchronous version of this call.
         *
         * When the operation is finished, `callback` will be called. You can then call gfbgraph_node_get_connection_nodes_finish()
         * to get the list of connected nodes.
         * @param node_type a #GFBGraphNode type #GType that must implement the #GFBGraphConnectionable interface.
         * @param authorizer a #GFBGraphAuthorizer.
         * @param cancellable An optional #GCancellable object, or %NULL.
         * @param callback A #GAsyncReadyCallback to call when the request is completed.
         */
        get_connection_nodes_async(
            node_type: GObject.GType,
            authorizer: Authorizer,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<Node[]> | void;
        /**
         * Finishes an asynchronous operation started with
         * gfbgraph_node_get_connection_nodes_async().
         * @param result A #GAsyncResult.
         * @returns a newly-allocated #GList of type #node_type objects with the found nodes.
         */
        get_connection_nodes_async_finish(result: Gio.AsyncResult): Node[];
        /**
         * Gets a node created time.
         * @returns an ISO 8601 encoded date when the node was initially published.
         */
        get_created_time(): string;
        /**
         * Gets the Facebook Graph unique node ID.
         * @returns the node ID.
         */
        get_id(): string;
        get_link(): string;
        /**
         * Gets a node updated time.
         * @returns an ISO 8601 encoded date when the node was updated.
         */
        get_updated_time(): string;
        /**
         * Sets the ID for a node. Just useful when a new node is created
         * and the Graph API returns the ID of the new created node.
         * @param id a const pointer to a #gchar.
         */
        set_id(id: string): void;
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
            flags: GObject.BindingFlags | null,
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
            flags: GObject.BindingFlags | null,
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
        /**
         * the `constructed` function is called by g_object_new() as the
         *  final step of the object creation process.  At the point of the call, all
         *  construction properties have been set on the object.  The purpose of this
         *  call is to allow for object initialisation steps that can only be performed
         *  after construction properties have been set.  `constructed` implementors
         *  should chain up to the `constructed` call of their parent class to allow it
         *  to complete its initialisation.
         */
        vfunc_constructed(): void;
        /**
         * emits property change notification for a bunch
         *  of properties. Overriding `dispatch_properties_changed` should be rarely
         *  needed.
         * @param n_pspecs
         * @param pspecs
         */
        vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
        /**
         * the `dispose` function is supposed to drop all references to other
         *  objects, but keep the instance otherwise intact, so that client method
         *  invocations still work. It may be run multiple times (due to reference
         *  loops). Before returning, `dispose` should chain up to the `dispose` method
         *  of the parent class.
         */
        vfunc_dispose(): void;
        /**
         * instance finalization function, should finish the finalization of
         *  the instance begun in `dispose` and chain up to the `finalize` method of the
         *  parent class.
         */
        vfunc_finalize(): void;
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

    namespace SimpleAuthorizer {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::access-token': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps, Authorizer.ConstructorProps {
            access_token: string;
            accessToken: string;
        }
    }

    class SimpleAuthorizer extends GObject.Object implements Authorizer {
        static $gtype: GObject.GType<SimpleAuthorizer>;

        // Properties

        get access_token(): string;
        set access_token(val: string);
        get accessToken(): string;
        set accessToken(val: string);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: SimpleAuthorizer.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<SimpleAuthorizer.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](access_token: string): SimpleAuthorizer;

        // Signals

        connect<K extends keyof SimpleAuthorizer.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, SimpleAuthorizer.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof SimpleAuthorizer.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, SimpleAuthorizer.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof SimpleAuthorizer.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<SimpleAuthorizer.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Inherited methods
        /**
         * Adds the necessary authorization to `call`.
         *
         * This method modifies `call` in place and is thread safe.
         * @param call A #RestProxyCall.
         */
        process_call(call: Rest.ProxyCall): void;
        /**
         * Adds the necessary authorization to `message`. The type of `message`
         * can be DELETE, GET and POST.
         *
         * This method modifies `message` in place and is thread safe.
         * @param message A #SoupMessage.
         */
        process_message(message: Soup.Message): void;
        /**
         * Synchronously forces `iface` to refresh any authorization tokens
         * held by it.
         *
         * This method is thread safe.
         * @param cancellable An optional #GCancellable object, or %NULL.
         * @returns %TRUE if the authorizer now has a valid token.
         */
        refresh_authorization(cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Adds the necessary authorization to `call`.
         *
         * This method modifies `call` in place and is thread safe.
         * @param call A #RestProxyCall.
         */
        vfunc_process_call(call: Rest.ProxyCall): void;
        /**
         * Adds the necessary authorization to `message`. The type of `message`
         * can be DELETE, GET and POST.
         *
         * This method modifies `message` in place and is thread safe.
         * @param message A #SoupMessage.
         */
        vfunc_process_message(message: Soup.Message): void;
        /**
         * Synchronously forces `iface` to refresh any authorization tokens
         * held by it.
         *
         * This method is thread safe.
         * @param cancellable An optional #GCancellable object, or %NULL.
         */
        vfunc_refresh_authorization(cancellable?: Gio.Cancellable | null): boolean;
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
            flags: GObject.BindingFlags | null,
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
            flags: GObject.BindingFlags | null,
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
        /**
         * the `constructed` function is called by g_object_new() as the
         *  final step of the object creation process.  At the point of the call, all
         *  construction properties have been set on the object.  The purpose of this
         *  call is to allow for object initialisation steps that can only be performed
         *  after construction properties have been set.  `constructed` implementors
         *  should chain up to the `constructed` call of their parent class to allow it
         *  to complete its initialisation.
         */
        vfunc_constructed(): void;
        /**
         * emits property change notification for a bunch
         *  of properties. Overriding `dispatch_properties_changed` should be rarely
         *  needed.
         * @param n_pspecs
         * @param pspecs
         */
        vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
        /**
         * the `dispose` function is supposed to drop all references to other
         *  objects, but keep the instance otherwise intact, so that client method
         *  invocations still work. It may be run multiple times (due to reference
         *  loops). Before returning, `dispose` should chain up to the `dispose` method
         *  of the parent class.
         */
        vfunc_dispose(): void;
        /**
         * instance finalization function, should finish the finalization of
         *  the instance begun in `dispose` and chain up to the `finalize` method of the
         *  parent class.
         */
        vfunc_finalize(): void;
        /**
         * the generic getter for all properties of this type. Should be
         *  overridden for every type with properties.
         * @param property_id
         * @param value
         * @param pspec
         */
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
        /**
         * the generic setter for all properties of this type. Should be
         *  overridden for every type with properties. If implementations of
         *  `set_property` don't emit property change notification explicitly, this will
         *  be done implicitly by the type system. However, if the notify signal is
         *  emitted explicitly, the type system will not emit it a second time.
         * @param property_id
         * @param value
         * @param pspec
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

    namespace User {
        // Signal signatures
        interface SignalSignatures extends Node.SignalSignatures {
            'notify::email': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::created-time': (pspec: GObject.ParamSpec) => void;
            'notify::id': (pspec: GObject.ParamSpec) => void;
            'notify::link': (pspec: GObject.ParamSpec) => void;
            'notify::updated-time': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Node.ConstructorProps {
            email: string;
            name: string;
        }
    }

    class User extends Node {
        static $gtype: GObject.GType<User>;

        // Properties

        /**
         * The email of the user if available
         */
        get email(): string;
        set email(val: string);
        /**
         * The full name of the user
         */
        get name(): string;
        set name(val: string);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: User.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<User.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): User;

        static new_from_id(authorizer: Authorizer, id: string): User;

        // Signals

        connect<K extends keyof User.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, User.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof User.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, User.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof User.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<User.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        /**
         * Retrieve the current user logged using the https://graph.facebook.com/me Graph API function.
         * See gfbgraph_user_get_my_async() for the asynchronous version of this call.
         * @param authorizer a #GFBGraphAuthorizer.
         */
        static get_me(authorizer: Authorizer): User;
        /**
         * Asynchronously retrieve the current user logged. See gfbgraph_user_get_me() for the
         * synchronous version of this call.
         *
         * When the operation is finished, `callback` will be called. You can then call gfbgraph_user_get_me_finish()
         * to get the #GFBGraphUser for to the current user logged.
         * @param authorizer a #GFBGraphAuthorizer.
         * @param cancellable An optional #GCancellable object, or %NULL.
         * @param callback A #GAsyncReadyCallback to call when the request is completed.
         */
        static get_me_async(
            authorizer: Authorizer,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<User> | null,
        ): void;
        /**
         * Finishes an asynchronous operation started with
         * gfbgraph_user_get_me_async().
         * @param authorizer a #GFBGraphAuthorizer.
         * @param result A #GAsyncResult.
         */
        static get_me_async_finish(authorizer: Authorizer, result: Gio.AsyncResult): User;

        // Methods

        /**
         * Retrieve the albums nodes owned by the `user`. This functions call the function ID/albums.
         * @param authorizer a #GFBGraphAuthorizer.
         * @returns a newly-allocated #GList with the albums nodes owned by the given user.
         */
        get_albums(authorizer: Authorizer): Album[];
        /**
         * Asynchronously retrieve the albums nodes owned by the `user`. See gfbgraph_user_get_albums() for the
         * synchronous version of this call.
         *
         * When the operation is finished, `callback` will be called. You can then call gfbgraph_user_get_albums_async_finish()
         * to get the #GList of #GFBGraphAlbum owned by the `user`.
         * @param authorizer a #GFBGraphAuthorizer.
         * @param cancellable An optional #GCancellable object, or %NULL.
         */
        get_albums_async(authorizer: Authorizer, cancellable?: Gio.Cancellable | null): globalThis.Promise<Album[]>;
        /**
         * Asynchronously retrieve the albums nodes owned by the `user`. See gfbgraph_user_get_albums() for the
         * synchronous version of this call.
         *
         * When the operation is finished, `callback` will be called. You can then call gfbgraph_user_get_albums_async_finish()
         * to get the #GList of #GFBGraphAlbum owned by the `user`.
         * @param authorizer a #GFBGraphAuthorizer.
         * @param cancellable An optional #GCancellable object, or %NULL.
         * @param callback A #GAsyncReadyCallback to call when the request is completed.
         */
        get_albums_async(
            authorizer: Authorizer,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Asynchronously retrieve the albums nodes owned by the `user`. See gfbgraph_user_get_albums() for the
         * synchronous version of this call.
         *
         * When the operation is finished, `callback` will be called. You can then call gfbgraph_user_get_albums_async_finish()
         * to get the #GList of #GFBGraphAlbum owned by the `user`.
         * @param authorizer a #GFBGraphAuthorizer.
         * @param cancellable An optional #GCancellable object, or %NULL.
         * @param callback A #GAsyncReadyCallback to call when the request is completed.
         */
        get_albums_async(
            authorizer: Authorizer,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<Album[]> | void;
        /**
         * Finishes an asynchronous operation started with
         * gfbgraph_user_get_albums_async().
         * @param result A #GAsyncResult.
         * @returns a newly-allocated #GList of albums owned by the @user.
         */
        get_albums_async_finish(result: Gio.AsyncResult): Album[];
        /**
         * Get the user email. To retrieve this propertie, you need 'email' extended
         * permission.
         * @returns a const #gchar with the user email, or %NULL.
         */
        get_email(): string;
        /**
         * Get the user full name.
         * @returns a const #gchar with the user full name, or %NULL.
         */
        get_name(): string;
    }

    type AlbumClass = typeof Album;
    abstract class AlbumPrivate {
        static $gtype: GObject.GType<AlbumPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type AuthorizerInterface = typeof Authorizer;
    type ConnectableInterface = typeof Connectable;
    type GoaAuthorizerClass = typeof GoaAuthorizer;
    abstract class GoaAuthorizerPrivate {
        static $gtype: GObject.GType<GoaAuthorizerPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type NodeClass = typeof Node;
    abstract class NodePrivate {
        static $gtype: GObject.GType<NodePrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type PhotoClass = typeof Photo;
    /**
     * An struct with the information of a image.
     */
    class PhotoImage {
        static $gtype: GObject.GType<PhotoImage>;

        // Fields

        width: number;
        height: number;
        source: string;

        // Constructors

        constructor(
            properties?: Partial<{
                width: number;
                height: number;
                source: string;
            }>,
        );
        _init(...args: any[]): void;
    }

    abstract class PhotoPrivate {
        static $gtype: GObject.GType<PhotoPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type SimpleAuthorizerClass = typeof SimpleAuthorizer;
    abstract class SimpleAuthorizerPrivate {
        static $gtype: GObject.GType<SimpleAuthorizerPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type UserClass = typeof User;
    abstract class UserPrivate {
        static $gtype: GObject.GType<UserPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    namespace Authorizer {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    export interface AuthorizerNamespace {
        $gtype: GObject.GType<Authorizer>;
        prototype: Authorizer;
    }
    interface Authorizer extends GObject.Object {
        // Methods

        /**
         * Adds the necessary authorization to `call`.
         *
         * This method modifies `call` in place and is thread safe.
         * @param call A #RestProxyCall.
         */
        process_call(call: Rest.ProxyCall): void;
        /**
         * Adds the necessary authorization to `message`. The type of `message`
         * can be DELETE, GET and POST.
         *
         * This method modifies `message` in place and is thread safe.
         * @param message A #SoupMessage.
         */
        process_message(message: Soup.Message): void;
        /**
         * Synchronously forces `iface` to refresh any authorization tokens
         * held by it.
         *
         * This method is thread safe.
         * @param cancellable An optional #GCancellable object, or %NULL.
         * @returns %TRUE if the authorizer now has a valid token.
         */
        refresh_authorization(cancellable?: Gio.Cancellable | null): boolean;

        // Virtual methods

        /**
         * Adds the necessary authorization to `call`.
         *
         * This method modifies `call` in place and is thread safe.
         * @param call A #RestProxyCall.
         */
        vfunc_process_call(call: Rest.ProxyCall): void;
        /**
         * Adds the necessary authorization to `message`. The type of `message`
         * can be DELETE, GET and POST.
         *
         * This method modifies `message` in place and is thread safe.
         * @param message A #SoupMessage.
         */
        vfunc_process_message(message: Soup.Message): void;
        /**
         * Synchronously forces `iface` to refresh any authorization tokens
         * held by it.
         *
         * This method is thread safe.
         * @param cancellable An optional #GCancellable object, or %NULL.
         */
        vfunc_refresh_authorization(cancellable?: Gio.Cancellable | null): boolean;
    }

    export const Authorizer: AuthorizerNamespace & {
        new (): Authorizer; // This allows `obj instanceof Authorizer`
    };

    namespace Connectable {
        // Constructor properties interface

        interface ConstructorProps extends Node.ConstructorProps {}
    }

    export interface ConnectableNamespace {
        $gtype: GObject.GType<Connectable>;
        prototype: Connectable;
    }
    interface Connectable extends Node {
        // Methods

        /**
         * In most cases, #GFBGraphConnectable implementers can use this function in order to parse
         * the response when a gfbgraph_node_get_connection_nodes() is executed and the
         * gfbgraph_connectable_parse_connected_data() was called.
         *
         * Normally, Facebook Graph API returns the connections in the same way, using JSON objects,
         * with a root object called "data".
         * @param payload a const #gchar with the response string from the Facebook Graph API.
         * @returns a newly-allocated #GList of #GFBGraphNode with the same #GType as @self.
         */
        default_parse_connected_data(payload: string): Node[];
        /**
         * Get the Facebook Graph API function path to retrieve the nodes connected with `node_type`
         * managed by the #GFBGraphConnectable object.
         * @param node_type a #GType, required a #GFBGRAPH_TYPE_NODE or children.
         * @returns a const #gchar with the function path or %NULL.
         */
        get_connection_path(node_type: GObject.GType): string;
        /**
         * Get the params to be inserted in a request to the Facebook Graph API
         * in order to append the node `self` to a node of type `node_type`.
         * @param node_type a #GType, required a #GFBGRAPH_TYPE_NODE or children.
         * @returns A string based #GHashTable with the params and his values or %NULL.
         */
        get_connection_post_params(node_type: GObject.GType): GLib.HashTable<any, any>;
        /**
         * Check if `self` object, normally a #GFBGraphNode implementing the #GFBGraphConnectable interface,
         * has the possibility to be connected to another node of type `node_type`.
         * @param node_type a #GType, required a #GFBGRAPH_TYPE_NODE or children.
         * @returns %TRUE in case that the @self object can be connected to a node of type @node_type, %FALSE otherwise.
         */
        is_connectable_to(node_type: GObject.GType): boolean;
        /**
         * Parse the response contained in `payload` when a gfbgraph_node_get_connection_nodes() was
         * executed.
         * @param payload a const #gchar with the response string from the Facebook Graph API.
         * @returns a newly-allocated #GList of #GFBGraphNode created from the @payload or %NULL.
         */
        parse_connected_data(payload: string): Node[];

        // Virtual methods

        /**
         * Get the params to be inserted in a request to the Facebook Graph API
         * in order to append the node `self` to a node of type `node_type`.
         * @param node_type a #GType, required a #GFBGRAPH_TYPE_NODE or children.
         */
        vfunc_get_connection_post_params(node_type: GObject.GType): GLib.HashTable<any, any>;
        /**
         * Parse the response contained in `payload` when a gfbgraph_node_get_connection_nodes() was
         * executed.
         * @param payload a const #gchar with the response string from the Facebook Graph API.
         */
        vfunc_parse_connected_data(payload: string): Node[];
    }

    export const Connectable: ConnectableNamespace & {
        new (): Connectable; // This allows `obj instanceof Connectable`
    };

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

export default GFBGraph;

// END
