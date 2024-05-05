/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './gee-1.0-ambient.d.ts';

/**
 * Gee-1.0
 */

import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';

export namespace Gee {
    function functions_get_equal_func_for(t: GObject.Type): GLib.EqualFunc;
    function functions_get_hash_func_for(t: GObject.Type): GLib.HashFunc;
    function functions_get_compare_func_for(t: GObject.Type): GLib.CompareFunc;
    function direct_compare(_val1: any, _val2: any): number;
    module AbstractCollection {
        // Constructor properties interface

        interface ConstructorProps
            extends GObject.Object.ConstructorProps,
                Iterable.ConstructorProps,
                Collection.ConstructorProps {
            size: number;
            is_empty: boolean;
            isEmpty: boolean;
            read_only_view: Collection;
            readOnlyView: Collection;
        }
    }

    abstract class AbstractCollection extends GObject.Object implements Iterable, Collection {
        static $gtype: GObject.GType<AbstractCollection>;

        // Own properties of Gee.AbstractCollection

        get size(): number;
        get is_empty(): boolean;
        get isEmpty(): boolean;
        get read_only_view(): Collection;
        get readOnlyView(): Collection;

        // Constructors of Gee.AbstractCollection

        constructor(properties?: Partial<AbstractCollection.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Own virtual methods of Gee.AbstractCollection

        vfunc_contains(item: any): boolean;
        vfunc_add(item: any): boolean;
        vfunc_remove(item: any): boolean;
        vfunc_clear(): void;
        vfunc_to_array(): any[];
        vfunc_add_all(collection: Collection): boolean;
        vfunc_contains_all(collection: Collection): boolean;
        vfunc_remove_all(collection: Collection): boolean;
        vfunc_retain_all(collection: Collection): boolean;
        vfunc_iterator(): Iterator;

        // Own methods of Gee.AbstractCollection

        contains(item: any): boolean;
        add(item: any): boolean;
        remove(item: any): boolean;
        clear(): void;
        to_array(): any[];
        add_all(collection: Collection): boolean;
        contains_all(collection: Collection): boolean;
        remove_all(collection: Collection): boolean;
        retain_all(collection: Collection): boolean;
        iterator(): Iterator;

        // Inherited properties
        get element_type(): GObject.Type;
        get elementType(): GObject.Type;

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
         *     properties[PROP_FOO] = g_param_spec_int ("foo", "Foo", "The foo",
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

    module AbstractList {
        // Constructor properties interface

        interface ConstructorProps extends AbstractCollection.ConstructorProps, List.ConstructorProps {
            read_only_view: List;
            readOnlyView: List;
        }
    }

    abstract class AbstractList extends AbstractCollection implements List {
        static $gtype: GObject.GType<AbstractList>;

        // Own properties of Gee.AbstractList

        get read_only_view(): List;
        get readOnlyView(): List;

        // Constructors of Gee.AbstractList

        constructor(properties?: Partial<AbstractList.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Own virtual methods of Gee.AbstractList

        vfunc_list_iterator(): ListIterator;
        vfunc_get(index: number): any;
        vfunc_set(index: number, item: any): void;
        vfunc_index_of(item: any): number;
        vfunc_insert(index: number, item: any): void;
        vfunc_remove_at(index: number): any;
        vfunc_slice(start: number, stop: number): List;
        vfunc_first(): any;
        vfunc_last(): any;
        vfunc_insert_all(index: number, collection: Collection): void;

        // Own methods of Gee.AbstractList

        list_iterator(): ListIterator;
        get(index: number): any;
        set(index: number, item: any): void;
        // Conflicted with GObject.Object.set
        set(...args: never[]): any;
        index_of(item: any): number;
        insert(index: number, item: any): void;
        remove_at(index: number): any;
        slice(start: number, stop: number): List;
        first(): any;
        last(): any;
        insert_all(index: number, collection: Collection): void;

        // Inherited properties
        get size(): number;
        get is_empty(): boolean;
        get isEmpty(): boolean;
        get element_type(): GObject.Type;
        get elementType(): GObject.Type;

        // Inherited methods
        sort(compare_func: GLib.CompareFunc): void;
        vfunc_sort(compare_func: GLib.CompareFunc): void;
        contains(item: any): boolean;
        add(item: any): boolean;
        remove(item: any): boolean;
        clear(): void;
        add_all(collection: Collection): boolean;
        contains_all(collection: Collection): boolean;
        remove_all(collection: Collection): boolean;
        retain_all(collection: Collection): boolean;
        to_array(): any[];
        vfunc_contains(item: any): boolean;
        vfunc_add(item: any): boolean;
        vfunc_remove(item: any): boolean;
        vfunc_clear(): void;
        vfunc_add_all(collection: Collection): boolean;
        vfunc_contains_all(collection: Collection): boolean;
        vfunc_remove_all(collection: Collection): boolean;
        vfunc_retain_all(collection: Collection): boolean;
        vfunc_to_array(): any[];
        iterator(): Iterator;
        vfunc_iterator(): Iterator;
    }

    module AbstractMap {
        // Constructor properties interface

        interface ConstructorProps
            extends GObject.Object.ConstructorProps,
                Iterable.ConstructorProps,
                Map.ConstructorProps {
            size: number;
            is_empty: boolean;
            isEmpty: boolean;
            keys: Set;
            values: Collection;
            entries: Set;
            read_only_view: Map;
            readOnlyView: Map;
        }
    }

    abstract class AbstractMap extends GObject.Object implements Iterable, Map {
        static $gtype: GObject.GType<AbstractMap>;

        // Own properties of Gee.AbstractMap

        get size(): number;
        get is_empty(): boolean;
        get isEmpty(): boolean;
        get keys(): Set;
        get values(): Collection;
        get entries(): Set;
        get read_only_view(): Map;
        get readOnlyView(): Map;

        // Constructors of Gee.AbstractMap

        constructor(properties?: Partial<AbstractMap.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Own virtual methods of Gee.AbstractMap

        vfunc_has_key(key: any): boolean;
        vfunc_has(key: any, value: any): boolean;
        vfunc_get(key: any): any;
        vfunc_set(key: any, value: any): void;
        vfunc_unset(key: any): [boolean, any];
        vfunc_map_iterator(): MapIterator;
        vfunc_clear(): void;
        vfunc_set_all(map: Map): void;
        vfunc_unset_all(map: Map): boolean;
        vfunc_has_all(map: Map): boolean;

        // Own methods of Gee.AbstractMap

        has_key(key: any): boolean;
        has(key: any, value: any): boolean;
        get(key: any): any;
        set(key: any, value: any): void;
        // Conflicted with GObject.Object.set
        set(...args: never[]): any;
        unset(key: any): [boolean, any];
        map_iterator(): MapIterator;
        clear(): void;
        set_all(map: Map): void;
        unset_all(map: Map): boolean;
        has_all(map: Map): boolean;

        // Inherited properties
        get element_type(): GObject.Type;
        get elementType(): GObject.Type;
        get key_type(): GObject.Type;
        get keyType(): GObject.Type;
        get value_type(): GObject.Type;
        get valueType(): GObject.Type;

        // Inherited methods
        iterator(): Iterator;
        vfunc_iterator(): Iterator;
        contains(key: any): boolean;
        remove(key: any): [boolean, any];
        remove_all(map: Map): boolean;
        contains_all(map: Map): boolean;
        vfunc_contains(key: any): boolean;
        vfunc_remove(key: any): [boolean, any];
        vfunc_remove_all(map: Map): boolean;
        vfunc_contains_all(map: Map): boolean;
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
         *     properties[PROP_FOO] = g_param_spec_int ("foo", "Foo", "The foo",
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
        block_signal_handler(id: number): any;
        unblock_signal_handler(id: number): any;
        stop_emission_by_name(detailedName: string): any;
    }

    module AbstractMultiMap {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps, MultiMap.ConstructorProps {}
    }

    abstract class AbstractMultiMap extends GObject.Object implements MultiMap {
        static $gtype: GObject.GType<AbstractMultiMap>;

        // Constructors of Gee.AbstractMultiMap

        constructor(properties?: Partial<AbstractMultiMap.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Own virtual methods of Gee.AbstractMultiMap

        vfunc_create_value_storage(): Collection;
        vfunc_create_multi_key_set(): MultiSet;
        vfunc_get_value_equal_func(): GLib.EqualFunc;

        // Own methods of Gee.AbstractMultiMap

        create_value_storage(): Collection;
        create_multi_key_set(): MultiSet;
        get_value_equal_func(): GLib.EqualFunc;

        // Inherited properties
        get size(): number;

        // Inherited methods
        get_keys(): Set;
        get_all_keys(): MultiSet;
        get_values(): Collection;
        contains(key: any): boolean;
        get(key: any): Collection;
        set(key: any, value: any): void;
        // Conflicted with GObject.Object.set
        set(...args: never[]): any;
        remove(key: any, value: any): boolean;
        remove_all(key: any): boolean;
        clear(): void;
        vfunc_get_keys(): Set;
        vfunc_get_all_keys(): MultiSet;
        vfunc_get_values(): Collection;
        vfunc_contains(key: any): boolean;
        vfunc_get(key: any): Collection;
        vfunc_set(key: any, value: any): void;
        vfunc_remove(key: any, value: any): boolean;
        vfunc_remove_all(key: any): boolean;
        vfunc_clear(): void;
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
         *     properties[PROP_FOO] = g_param_spec_int ("foo", "Foo", "The foo",
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
        block_signal_handler(id: number): any;
        unblock_signal_handler(id: number): any;
        stop_emission_by_name(detailedName: string): any;
    }

    module AbstractMultiSet {
        // Constructor properties interface

        interface ConstructorProps extends AbstractCollection.ConstructorProps, MultiSet.ConstructorProps {}
    }

    abstract class AbstractMultiSet extends AbstractCollection implements MultiSet {
        static $gtype: GObject.GType<AbstractMultiSet>;

        // Constructors of Gee.AbstractMultiSet

        constructor(properties?: Partial<AbstractMultiSet.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Inherited properties
        get size(): number;
        get is_empty(): boolean;
        get isEmpty(): boolean;
        get read_only_view(): Collection;
        get readOnlyView(): Collection;
        get element_type(): GObject.Type;
        get elementType(): GObject.Type;

        // Inherited methods
        count(item: any): number;
        vfunc_count(item: any): number;
        contains(item: any): boolean;
        add(item: any): boolean;
        remove(item: any): boolean;
        clear(): void;
        add_all(collection: Collection): boolean;
        contains_all(collection: Collection): boolean;
        remove_all(collection: Collection): boolean;
        retain_all(collection: Collection): boolean;
        to_array(): any[];
        vfunc_contains(item: any): boolean;
        vfunc_add(item: any): boolean;
        vfunc_remove(item: any): boolean;
        vfunc_clear(): void;
        vfunc_add_all(collection: Collection): boolean;
        vfunc_contains_all(collection: Collection): boolean;
        vfunc_remove_all(collection: Collection): boolean;
        vfunc_retain_all(collection: Collection): boolean;
        vfunc_to_array(): any[];
        iterator(): Iterator;
        vfunc_iterator(): Iterator;
    }

    module AbstractQueue {
        // Constructor properties interface

        interface ConstructorProps extends AbstractCollection.ConstructorProps, Queue.ConstructorProps {
            capacity: number;
            remaining_capacity: number;
            remainingCapacity: number;
            is_full: boolean;
            isFull: boolean;
        }
    }

    abstract class AbstractQueue extends AbstractCollection implements Queue {
        static $gtype: GObject.GType<AbstractQueue>;

        // Own properties of Gee.AbstractQueue

        get capacity(): number;
        get remaining_capacity(): number;
        get remainingCapacity(): number;
        get is_full(): boolean;
        get isFull(): boolean;

        // Constructors of Gee.AbstractQueue

        constructor(properties?: Partial<AbstractQueue.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Own virtual methods of Gee.AbstractQueue

        vfunc_offer(element: any): boolean;
        vfunc_peek(): any;
        vfunc_poll(): any;
        vfunc_drain(recipient: Collection, amount: number): number;

        // Own methods of Gee.AbstractQueue

        offer(element: any): boolean;
        peek(): any;
        poll(): any;
        drain(recipient: Collection, amount: number): number;

        // Inherited properties
        get size(): number;
        get is_empty(): boolean;
        get isEmpty(): boolean;
        get read_only_view(): Collection;
        get readOnlyView(): Collection;
        get element_type(): GObject.Type;
        get elementType(): GObject.Type;

        // Inherited methods
        contains(item: any): boolean;
        add(item: any): boolean;
        remove(item: any): boolean;
        clear(): void;
        add_all(collection: Collection): boolean;
        contains_all(collection: Collection): boolean;
        remove_all(collection: Collection): boolean;
        retain_all(collection: Collection): boolean;
        to_array(): any[];
        vfunc_contains(item: any): boolean;
        vfunc_add(item: any): boolean;
        vfunc_remove(item: any): boolean;
        vfunc_clear(): void;
        vfunc_add_all(collection: Collection): boolean;
        vfunc_contains_all(collection: Collection): boolean;
        vfunc_remove_all(collection: Collection): boolean;
        vfunc_retain_all(collection: Collection): boolean;
        vfunc_to_array(): any[];
        iterator(): Iterator;
        vfunc_iterator(): Iterator;
    }

    module AbstractSet {
        // Constructor properties interface

        interface ConstructorProps extends AbstractCollection.ConstructorProps, Set.ConstructorProps {
            read_only_view: Set;
            readOnlyView: Set;
        }
    }

    abstract class AbstractSet extends AbstractCollection implements Set {
        static $gtype: GObject.GType<AbstractSet>;

        // Own properties of Gee.AbstractSet

        get read_only_view(): Set;
        get readOnlyView(): Set;

        // Constructors of Gee.AbstractSet

        constructor(properties?: Partial<AbstractSet.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Inherited properties
        get size(): number;
        get is_empty(): boolean;
        get isEmpty(): boolean;
        get element_type(): GObject.Type;
        get elementType(): GObject.Type;

        // Inherited methods
        contains(item: any): boolean;
        add(item: any): boolean;
        remove(item: any): boolean;
        clear(): void;
        add_all(collection: Collection): boolean;
        contains_all(collection: Collection): boolean;
        remove_all(collection: Collection): boolean;
        retain_all(collection: Collection): boolean;
        to_array(): any[];
        vfunc_contains(item: any): boolean;
        vfunc_add(item: any): boolean;
        vfunc_remove(item: any): boolean;
        vfunc_clear(): void;
        vfunc_add_all(collection: Collection): boolean;
        vfunc_contains_all(collection: Collection): boolean;
        vfunc_remove_all(collection: Collection): boolean;
        vfunc_retain_all(collection: Collection): boolean;
        vfunc_to_array(): any[];
        iterator(): Iterator;
        vfunc_iterator(): Iterator;
    }

    module ArrayList {
        // Constructor properties interface

        interface ConstructorProps extends AbstractList.ConstructorProps {
            equal_func: GLib.EqualFunc;
            equalFunc: GLib.EqualFunc;
        }
    }

    class ArrayList extends AbstractList {
        static $gtype: GObject.GType<ArrayList>;

        // Own properties of Gee.ArrayList

        get equal_func(): GLib.EqualFunc;
        set equal_func(val: GLib.EqualFunc);
        get equalFunc(): GLib.EqualFunc;
        set equalFunc(val: GLib.EqualFunc);

        // Constructors of Gee.ArrayList

        constructor(properties?: Partial<ArrayList.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](equal_func: GLib.EqualFunc): ArrayList;

        // Own methods of Gee.ArrayList

        sort_with_data(compare: GLib.CompareDataFunc): void;
    }

    module HashMap {
        // Constructor properties interface

        interface ConstructorProps extends AbstractMap.ConstructorProps {
            key_hash_func: GLib.HashFunc;
            keyHashFunc: GLib.HashFunc;
            key_equal_func: GLib.EqualFunc;
            keyEqualFunc: GLib.EqualFunc;
            value_equal_func: GLib.EqualFunc;
            valueEqualFunc: GLib.EqualFunc;
        }
    }

    class HashMap extends AbstractMap {
        static $gtype: GObject.GType<HashMap>;

        // Own properties of Gee.HashMap

        get key_hash_func(): GLib.HashFunc;
        set key_hash_func(val: GLib.HashFunc);
        get keyHashFunc(): GLib.HashFunc;
        set keyHashFunc(val: GLib.HashFunc);
        get key_equal_func(): GLib.EqualFunc;
        set key_equal_func(val: GLib.EqualFunc);
        get keyEqualFunc(): GLib.EqualFunc;
        set keyEqualFunc(val: GLib.EqualFunc);
        get value_equal_func(): GLib.EqualFunc;
        set value_equal_func(val: GLib.EqualFunc);
        get valueEqualFunc(): GLib.EqualFunc;
        set valueEqualFunc(val: GLib.EqualFunc);

        // Constructors of Gee.HashMap

        constructor(properties?: Partial<HashMap.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](
            key_hash_func: GLib.HashFunc,
            key_equal_func: GLib.EqualFunc,
            value_equal_func: GLib.EqualFunc,
        ): HashMap;
    }

    module HashMultiMap {
        // Constructor properties interface

        interface ConstructorProps extends AbstractMultiMap.ConstructorProps {
            key_hash_func: GLib.HashFunc;
            keyHashFunc: GLib.HashFunc;
            key_equal_func: GLib.EqualFunc;
            keyEqualFunc: GLib.EqualFunc;
            value_hash_func: GLib.HashFunc;
            valueHashFunc: GLib.HashFunc;
            value_equal_func: GLib.EqualFunc;
            valueEqualFunc: GLib.EqualFunc;
        }
    }

    class HashMultiMap extends AbstractMultiMap {
        static $gtype: GObject.GType<HashMultiMap>;

        // Own properties of Gee.HashMultiMap

        get key_hash_func(): GLib.HashFunc;
        get keyHashFunc(): GLib.HashFunc;
        get key_equal_func(): GLib.EqualFunc;
        get keyEqualFunc(): GLib.EqualFunc;
        get value_hash_func(): GLib.HashFunc;
        set value_hash_func(val: GLib.HashFunc);
        get valueHashFunc(): GLib.HashFunc;
        set valueHashFunc(val: GLib.HashFunc);
        get value_equal_func(): GLib.EqualFunc;
        set value_equal_func(val: GLib.EqualFunc);
        get valueEqualFunc(): GLib.EqualFunc;
        set valueEqualFunc(val: GLib.EqualFunc);

        // Constructors of Gee.HashMultiMap

        constructor(properties?: Partial<HashMultiMap.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](
            key_hash_func: GLib.HashFunc,
            key_equal_func: GLib.EqualFunc,
            value_hash_func: GLib.HashFunc,
            value_equal_func: GLib.EqualFunc,
        ): HashMultiMap;
    }

    module HashMultiSet {
        // Constructor properties interface

        interface ConstructorProps extends AbstractMultiSet.ConstructorProps {
            hash_func: GLib.HashFunc;
            hashFunc: GLib.HashFunc;
            equal_func: GLib.EqualFunc;
            equalFunc: GLib.EqualFunc;
        }
    }

    class HashMultiSet extends AbstractMultiSet {
        static $gtype: GObject.GType<HashMultiSet>;

        // Own properties of Gee.HashMultiSet

        get hash_func(): GLib.HashFunc;
        get hashFunc(): GLib.HashFunc;
        get equal_func(): GLib.EqualFunc;
        get equalFunc(): GLib.EqualFunc;

        // Constructors of Gee.HashMultiSet

        constructor(properties?: Partial<HashMultiSet.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](hash_func: GLib.HashFunc, equal_func: GLib.EqualFunc): HashMultiSet;
    }

    module HashSet {
        // Constructor properties interface

        interface ConstructorProps extends AbstractSet.ConstructorProps {
            hash_func: GLib.HashFunc;
            hashFunc: GLib.HashFunc;
            equal_func: GLib.EqualFunc;
            equalFunc: GLib.EqualFunc;
        }
    }

    class HashSet extends AbstractSet {
        static $gtype: GObject.GType<HashSet>;

        // Own properties of Gee.HashSet

        get hash_func(): GLib.HashFunc;
        set hash_func(val: GLib.HashFunc);
        get hashFunc(): GLib.HashFunc;
        set hashFunc(val: GLib.HashFunc);
        get equal_func(): GLib.EqualFunc;
        set equal_func(val: GLib.EqualFunc);
        get equalFunc(): GLib.EqualFunc;
        set equalFunc(val: GLib.EqualFunc);

        // Constructors of Gee.HashSet

        constructor(properties?: Partial<HashSet.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](hash_func: GLib.HashFunc, equal_func: GLib.EqualFunc): HashSet;
    }

    module LinkedList {
        // Constructor properties interface

        interface ConstructorProps
            extends AbstractList.ConstructorProps,
                Queue.ConstructorProps,
                Deque.ConstructorProps {
            equal_func: GLib.EqualFunc;
            equalFunc: GLib.EqualFunc;
            readOnlyView: LinkedList;
            read_only_view: LinkedList;
        }
    }

    class LinkedList extends AbstractList implements Queue, Deque {
        static $gtype: GObject.GType<LinkedList>;

        // Own properties of Gee.LinkedList

        get equal_func(): GLib.EqualFunc;
        set equal_func(val: GLib.EqualFunc);
        get equalFunc(): GLib.EqualFunc;
        set equalFunc(val: GLib.EqualFunc);
        get readOnlyView(): LinkedList;
        get read_only_view(): LinkedList;

        // Constructors of Gee.LinkedList

        constructor(properties?: Partial<LinkedList.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](equal_func: GLib.EqualFunc): LinkedList;

        // Inherited properties
        get capacity(): number;
        get remaining_capacity(): number;
        get remainingCapacity(): number;
        get is_full(): boolean;
        get isFull(): boolean;

        // Inherited methods
        offer(element: any): boolean;
        peek(): any;
        poll(): any;
        drain(recipient: Collection, amount: number): number;
        vfunc_offer(element: any): boolean;
        vfunc_peek(): any;
        vfunc_poll(): any;
        vfunc_drain(recipient: Collection, amount: number): number;
        offer_head(element: any): boolean;
        peek_head(): any;
        poll_head(): any;
        drain_head(recipient: Collection, amount: number): number;
        offer_tail(element: any): boolean;
        peek_tail(): any;
        poll_tail(): any;
        drain_tail(recipient: Collection, amount: number): number;
        vfunc_offer_head(element: any): boolean;
        vfunc_peek_head(): any;
        vfunc_poll_head(): any;
        vfunc_drain_head(recipient: Collection, amount: number): number;
        vfunc_offer_tail(element: any): boolean;
        vfunc_peek_tail(): any;
        vfunc_poll_tail(): any;
        vfunc_drain_tail(recipient: Collection, amount: number): number;
    }

    module PriorityQueue {
        // Constructor properties interface

        interface ConstructorProps extends AbstractQueue.ConstructorProps {
            compare_func: GLib.CompareFunc;
            compareFunc: GLib.CompareFunc;
        }
    }

    class PriorityQueue extends AbstractQueue {
        static $gtype: GObject.GType<PriorityQueue>;

        // Own properties of Gee.PriorityQueue

        get compare_func(): GLib.CompareFunc;
        set compare_func(val: GLib.CompareFunc);
        get compareFunc(): GLib.CompareFunc;
        set compareFunc(val: GLib.CompareFunc);

        // Constructors of Gee.PriorityQueue

        constructor(properties?: Partial<PriorityQueue.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](compare_func: GLib.CompareFunc): PriorityQueue;
    }

    module TreeMap {
        // Constructor properties interface

        interface ConstructorProps extends AbstractMap.ConstructorProps {
            key_compare_func: GLib.CompareFunc;
            keyCompareFunc: GLib.CompareFunc;
            value_equal_func: GLib.EqualFunc;
            valueEqualFunc: GLib.EqualFunc;
        }
    }

    class TreeMap extends AbstractMap {
        static $gtype: GObject.GType<TreeMap>;

        // Own properties of Gee.TreeMap

        get key_compare_func(): GLib.CompareFunc;
        set key_compare_func(val: GLib.CompareFunc);
        get keyCompareFunc(): GLib.CompareFunc;
        set keyCompareFunc(val: GLib.CompareFunc);
        get value_equal_func(): GLib.EqualFunc;
        set value_equal_func(val: GLib.EqualFunc);
        get valueEqualFunc(): GLib.EqualFunc;
        set valueEqualFunc(val: GLib.EqualFunc);

        // Constructors of Gee.TreeMap

        constructor(properties?: Partial<TreeMap.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](key_compare_func: GLib.CompareFunc, value_equal_func: GLib.EqualFunc): TreeMap;
    }

    module TreeMultiMap {
        // Constructor properties interface

        interface ConstructorProps extends AbstractMultiMap.ConstructorProps {
            key_compare_func: GLib.CompareFunc;
            keyCompareFunc: GLib.CompareFunc;
            value_compare_func: GLib.CompareFunc;
            valueCompareFunc: GLib.CompareFunc;
        }
    }

    class TreeMultiMap extends AbstractMultiMap {
        static $gtype: GObject.GType<TreeMultiMap>;

        // Own properties of Gee.TreeMultiMap

        get key_compare_func(): GLib.CompareFunc;
        get keyCompareFunc(): GLib.CompareFunc;
        get value_compare_func(): GLib.CompareFunc;
        set value_compare_func(val: GLib.CompareFunc);
        get valueCompareFunc(): GLib.CompareFunc;
        set valueCompareFunc(val: GLib.CompareFunc);

        // Constructors of Gee.TreeMultiMap

        constructor(properties?: Partial<TreeMultiMap.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](key_compare_func: GLib.CompareFunc, value_compare_func: GLib.CompareFunc): TreeMultiMap;
    }

    module TreeMultiSet {
        // Constructor properties interface

        interface ConstructorProps extends AbstractMultiSet.ConstructorProps {
            compare_func: GLib.CompareFunc;
            compareFunc: GLib.CompareFunc;
        }
    }

    class TreeMultiSet extends AbstractMultiSet {
        static $gtype: GObject.GType<TreeMultiSet>;

        // Own properties of Gee.TreeMultiSet

        get compare_func(): GLib.CompareFunc;
        get compareFunc(): GLib.CompareFunc;

        // Constructors of Gee.TreeMultiSet

        constructor(properties?: Partial<TreeMultiSet.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](compare_func: GLib.CompareFunc): TreeMultiSet;
    }

    module TreeSet {
        // Constructor properties interface

        interface ConstructorProps extends AbstractSet.ConstructorProps, SortedSet.ConstructorProps {
            compare_func: GLib.CompareFunc;
            compareFunc: GLib.CompareFunc;
        }
    }

    class TreeSet extends AbstractSet implements SortedSet {
        static $gtype: GObject.GType<TreeSet>;

        // Own properties of Gee.TreeSet

        get compare_func(): GLib.CompareFunc;
        set compare_func(val: GLib.CompareFunc);
        get compareFunc(): GLib.CompareFunc;
        set compareFunc(val: GLib.CompareFunc);

        // Constructors of Gee.TreeSet

        constructor(properties?: Partial<TreeSet.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](compare_func: GLib.CompareFunc): TreeSet;

        // Inherited properties
        get read_only_view(): Set;
        get readOnlyView(): Set;

        // Inherited methods
        first(): any;
        last(): any;
        bidir_iterator(): BidirIterator;
        iterator_at(element: any): BidirIterator;
        lower(element: any): any;
        higher(element: any): any;
        floor(element: any): any;
        ceil(element: any): any;
        head_set(before: any): SortedSet;
        tail_set(after: any): SortedSet;
        sub_set(from: any, to: any): SortedSet;
        vfunc_first(): any;
        vfunc_last(): any;
        vfunc_bidir_iterator(): BidirIterator;
        vfunc_iterator_at(element: any): BidirIterator;
        vfunc_lower(element: any): any;
        vfunc_higher(element: any): any;
        vfunc_floor(element: any): any;
        vfunc_ceil(element: any): any;
        vfunc_head_set(before: any): SortedSet;
        vfunc_tail_set(after: any): SortedSet;
        vfunc_sub_set(from: any, to: any): SortedSet;
    }

    module MapEntry {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            key: any;
            value: any;
        }
    }

    abstract class MapEntry extends GObject.Object {
        static $gtype: GObject.GType<MapEntry>;

        // Own properties of Gee.MapEntry

        get key(): any;
        get value(): any;
        set value(val: any);

        // Constructors of Gee.MapEntry

        constructor(properties?: Partial<MapEntry.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;
    }

    type AbstractCollectionClass = typeof AbstractCollection;
    abstract class AbstractCollectionPrivate {
        static $gtype: GObject.GType<AbstractCollectionPrivate>;

        // Constructors of Gee.AbstractCollectionPrivate

        _init(...args: any[]): void;
    }

    type AbstractListClass = typeof AbstractList;
    abstract class AbstractListPrivate {
        static $gtype: GObject.GType<AbstractListPrivate>;

        // Constructors of Gee.AbstractListPrivate

        _init(...args: any[]): void;
    }

    type AbstractMapClass = typeof AbstractMap;
    abstract class AbstractMapPrivate {
        static $gtype: GObject.GType<AbstractMapPrivate>;

        // Constructors of Gee.AbstractMapPrivate

        _init(...args: any[]): void;
    }

    type AbstractMultiMapClass = typeof AbstractMultiMap;
    abstract class AbstractMultiMapPrivate {
        static $gtype: GObject.GType<AbstractMultiMapPrivate>;

        // Constructors of Gee.AbstractMultiMapPrivate

        _init(...args: any[]): void;
    }

    type AbstractMultiSetClass = typeof AbstractMultiSet;
    abstract class AbstractMultiSetPrivate {
        static $gtype: GObject.GType<AbstractMultiSetPrivate>;

        // Constructors of Gee.AbstractMultiSetPrivate

        _init(...args: any[]): void;
    }

    type AbstractQueueClass = typeof AbstractQueue;
    abstract class AbstractQueuePrivate {
        static $gtype: GObject.GType<AbstractQueuePrivate>;

        // Constructors of Gee.AbstractQueuePrivate

        _init(...args: any[]): void;
    }

    type AbstractSetClass = typeof AbstractSet;
    abstract class AbstractSetPrivate {
        static $gtype: GObject.GType<AbstractSetPrivate>;

        // Constructors of Gee.AbstractSetPrivate

        _init(...args: any[]): void;
    }

    type ArrayListClass = typeof ArrayList;
    abstract class ArrayListPrivate {
        static $gtype: GObject.GType<ArrayListPrivate>;

        // Constructors of Gee.ArrayListPrivate

        _init(...args: any[]): void;
    }

    type HashMapClass = typeof HashMap;
    abstract class HashMapPrivate {
        static $gtype: GObject.GType<HashMapPrivate>;

        // Constructors of Gee.HashMapPrivate

        _init(...args: any[]): void;
    }

    type HashMultiMapClass = typeof HashMultiMap;
    abstract class HashMultiMapPrivate {
        static $gtype: GObject.GType<HashMultiMapPrivate>;

        // Constructors of Gee.HashMultiMapPrivate

        _init(...args: any[]): void;
    }

    type HashMultiSetClass = typeof HashMultiSet;
    abstract class HashMultiSetPrivate {
        static $gtype: GObject.GType<HashMultiSetPrivate>;

        // Constructors of Gee.HashMultiSetPrivate

        _init(...args: any[]): void;
    }

    type HashSetClass = typeof HashSet;
    abstract class HashSetPrivate {
        static $gtype: GObject.GType<HashSetPrivate>;

        // Constructors of Gee.HashSetPrivate

        _init(...args: any[]): void;
    }

    type LinkedListClass = typeof LinkedList;
    abstract class LinkedListPrivate {
        static $gtype: GObject.GType<LinkedListPrivate>;

        // Constructors of Gee.LinkedListPrivate

        _init(...args: any[]): void;
    }

    type PriorityQueueClass = typeof PriorityQueue;
    abstract class PriorityQueuePrivate {
        static $gtype: GObject.GType<PriorityQueuePrivate>;

        // Constructors of Gee.PriorityQueuePrivate

        _init(...args: any[]): void;
    }

    type TreeMapClass = typeof TreeMap;
    abstract class TreeMapPrivate {
        static $gtype: GObject.GType<TreeMapPrivate>;

        // Constructors of Gee.TreeMapPrivate

        _init(...args: any[]): void;
    }

    type TreeMultiMapClass = typeof TreeMultiMap;
    abstract class TreeMultiMapPrivate {
        static $gtype: GObject.GType<TreeMultiMapPrivate>;

        // Constructors of Gee.TreeMultiMapPrivate

        _init(...args: any[]): void;
    }

    type TreeMultiSetClass = typeof TreeMultiSet;
    abstract class TreeMultiSetPrivate {
        static $gtype: GObject.GType<TreeMultiSetPrivate>;

        // Constructors of Gee.TreeMultiSetPrivate

        _init(...args: any[]): void;
    }

    type TreeSetClass = typeof TreeSet;
    abstract class TreeSetPrivate {
        static $gtype: GObject.GType<TreeSetPrivate>;

        // Constructors of Gee.TreeSetPrivate

        _init(...args: any[]): void;
    }

    type BidirIteratorIface = typeof BidirIterator;
    type CollectionIface = typeof Collection;
    type ComparableIface = typeof Comparable;
    type DequeIface = typeof Deque;
    type IterableIface = typeof Iterable;
    type IteratorIface = typeof Iterator;
    type ListIface = typeof List;
    type ListIteratorIface = typeof ListIterator;
    type MapIface = typeof Map;
    abstract class EntryPrivate {
        static $gtype: GObject.GType<EntryPrivate>;

        // Constructors of Gee.EntryPrivate

        _init(...args: any[]): void;
    }

    type MapIteratorIface = typeof MapIterator;
    type MultiMapIface = typeof MultiMap;
    type MultiSetIface = typeof MultiSet;
    type QueueIface = typeof Queue;
    type SetIface = typeof Set;
    type SortedSetIface = typeof SortedSet;
    module BidirIterator {
        // Constructor properties interface

        interface ConstructorProps extends Iterator.ConstructorProps {}
    }

    export interface BidirIteratorNamespace {
        $gtype: GObject.GType<BidirIterator>;
        prototype: BidirIterator;
    }
    interface BidirIterator extends Iterator {
        // Own methods of Gee.BidirIterator

        previous(): boolean;
        has_previous(): boolean;
        last(): boolean;

        // Own virtual methods of Gee.BidirIterator

        vfunc_previous(): boolean;
        vfunc_has_previous(): boolean;
        vfunc_last(): boolean;
    }

    export const BidirIterator: BidirIteratorNamespace;

    module Collection {
        // Constructor properties interface

        interface ConstructorProps extends Iterable.ConstructorProps {
            size: number;
            is_empty: boolean;
            isEmpty: boolean;
            read_only_view: Collection;
            readOnlyView: Collection;
        }
    }

    export interface CollectionNamespace {
        $gtype: GObject.GType<Collection>;
        prototype: Collection;

        empty(): Collection;
    }
    interface Collection extends Iterable {
        // Own properties of Gee.Collection

        get size(): number;
        get is_empty(): boolean;
        get isEmpty(): boolean;
        get read_only_view(): Collection;
        get readOnlyView(): Collection;

        // Own methods of Gee.Collection

        contains(item: any): boolean;
        add(item: any): boolean;
        remove(item: any): boolean;
        clear(): void;
        add_all(collection: Collection): boolean;
        contains_all(collection: Collection): boolean;
        remove_all(collection: Collection): boolean;
        retain_all(collection: Collection): boolean;
        to_array(): any[];

        // Own virtual methods of Gee.Collection

        vfunc_contains(item: any): boolean;
        vfunc_add(item: any): boolean;
        vfunc_remove(item: any): boolean;
        vfunc_clear(): void;
        vfunc_add_all(collection: Collection): boolean;
        vfunc_contains_all(collection: Collection): boolean;
        vfunc_remove_all(collection: Collection): boolean;
        vfunc_retain_all(collection: Collection): boolean;
        vfunc_to_array(): any[];
    }

    export const Collection: CollectionNamespace;

    module Comparable {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    export interface ComparableNamespace {
        $gtype: GObject.GType<Comparable>;
        prototype: Comparable;
    }
    interface Comparable extends GObject.Object {
        // Own methods of Gee.Comparable

        compare_to(object: any): number;

        // Own virtual methods of Gee.Comparable

        vfunc_compare_to(object: any): number;
    }

    export const Comparable: ComparableNamespace;

    module Deque {
        // Constructor properties interface

        interface ConstructorProps extends Queue.ConstructorProps {}
    }

    export interface DequeNamespace {
        $gtype: GObject.GType<Deque>;
        prototype: Deque;
    }
    interface Deque extends Queue {
        // Own methods of Gee.Deque

        offer_head(element: any): boolean;
        peek_head(): any;
        poll_head(): any;
        drain_head(recipient: Collection, amount: number): number;
        offer_tail(element: any): boolean;
        peek_tail(): any;
        poll_tail(): any;
        drain_tail(recipient: Collection, amount: number): number;

        // Own virtual methods of Gee.Deque

        vfunc_offer_head(element: any): boolean;
        vfunc_peek_head(): any;
        vfunc_poll_head(): any;
        vfunc_drain_head(recipient: Collection, amount: number): number;
        vfunc_offer_tail(element: any): boolean;
        vfunc_peek_tail(): any;
        vfunc_poll_tail(): any;
        vfunc_drain_tail(recipient: Collection, amount: number): number;
    }

    export const Deque: DequeNamespace;

    module Iterable {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            element_type: GObject.Type;
            elementType: GObject.Type;
        }
    }

    export interface IterableNamespace {
        $gtype: GObject.GType<Iterable>;
        prototype: Iterable;
    }
    interface Iterable extends GObject.Object {
        // Own properties of Gee.Iterable

        get element_type(): GObject.Type;
        get elementType(): GObject.Type;

        // Own methods of Gee.Iterable

        iterator(): Iterator;

        // Own virtual methods of Gee.Iterable

        vfunc_iterator(): Iterator;
    }

    export const Iterable: IterableNamespace;

    module Iterator {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    export interface IteratorNamespace {
        $gtype: GObject.GType<Iterator>;
        prototype: Iterator;
    }
    interface Iterator extends GObject.Object {
        // Own methods of Gee.Iterator

        next(): boolean;
        has_next(): boolean;
        first(): boolean;
        get(): any;
        remove(): void;

        // Own virtual methods of Gee.Iterator

        vfunc_next(): boolean;
        vfunc_has_next(): boolean;
        vfunc_first(): boolean;
        vfunc_get(): any;
        vfunc_remove(): void;
    }

    export const Iterator: IteratorNamespace;

    module List {
        // Constructor properties interface

        interface ConstructorProps extends Collection.ConstructorProps {
            read_only_view: List;
            readOnlyView: List;
        }
    }

    export interface ListNamespace {
        $gtype: GObject.GType<List>;
        prototype: List;

        empty(): List;
    }
    interface List extends Collection {
        // Own properties of Gee.List

        get read_only_view(): List;
        get readOnlyView(): List;

        // Own methods of Gee.List

        list_iterator(): ListIterator;
        get(index: number): any;
        set(index: number, item: any): void;
        // Conflicted with GObject.Object.set
        set(...args: never[]): any;
        index_of(item: any): number;
        insert(index: number, item: any): void;
        remove_at(index: number): any;
        slice(start: number, stop: number): List;
        first(): any;
        last(): any;
        insert_all(index: number, collection: Collection): void;
        sort(compare_func: GLib.CompareFunc): void;

        // Own virtual methods of Gee.List

        vfunc_list_iterator(): ListIterator;
        vfunc_get(index: number): any;
        vfunc_set(index: number, item: any): void;
        vfunc_index_of(item: any): number;
        vfunc_insert(index: number, item: any): void;
        vfunc_remove_at(index: number): any;
        vfunc_slice(start: number, stop: number): List;
        vfunc_first(): any;
        vfunc_last(): any;
        vfunc_insert_all(index: number, collection: Collection): void;
        vfunc_sort(compare_func: GLib.CompareFunc): void;
    }

    export const List: ListNamespace;

    module ListIterator {
        // Constructor properties interface

        interface ConstructorProps extends BidirIterator.ConstructorProps {}
    }

    export interface ListIteratorNamespace {
        $gtype: GObject.GType<ListIterator>;
        prototype: ListIterator;
    }
    interface ListIterator extends BidirIterator {
        // Own methods of Gee.ListIterator

        set(item: any): void;
        // Conflicted with GObject.Object.set
        set(...args: never[]): any;
        insert(item: any): void;
        add(item: any): void;
        index(): number;

        // Own virtual methods of Gee.ListIterator

        vfunc_set(item: any): void;
        vfunc_insert(item: any): void;
        vfunc_add(item: any): void;
        vfunc_index(): number;
    }

    export const ListIterator: ListIteratorNamespace;

    module Map {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            size: number;
            is_empty: boolean;
            isEmpty: boolean;
            keys: Set;
            values: Collection;
            entries: Set;
            read_only_view: Map;
            readOnlyView: Map;
            key_type: GObject.Type;
            keyType: GObject.Type;
            value_type: GObject.Type;
            valueType: GObject.Type;
        }
    }

    export interface MapNamespace {
        $gtype: GObject.GType<Map>;
        prototype: Map;

        empty(): Map;
    }
    interface Map extends GObject.Object {
        // Own properties of Gee.Map

        get size(): number;
        get is_empty(): boolean;
        get isEmpty(): boolean;
        get keys(): Set;
        get values(): Collection;
        get entries(): Set;
        get read_only_view(): Map;
        get readOnlyView(): Map;
        get key_type(): GObject.Type;
        get keyType(): GObject.Type;
        get value_type(): GObject.Type;
        get valueType(): GObject.Type;

        // Own methods of Gee.Map

        has_key(key: any): boolean;
        contains(key: any): boolean;
        has(key: any, value: any): boolean;
        get(key: any): any;
        set(key: any, value: any): void;
        // Conflicted with GObject.Object.set
        set(...args: never[]): any;
        unset(key: any): [boolean, any];
        remove(key: any): [boolean, any];
        clear(): void;
        map_iterator(): MapIterator;
        set_all(map: Map): void;
        unset_all(map: Map): boolean;
        remove_all(map: Map): boolean;
        has_all(map: Map): boolean;
        contains_all(map: Map): boolean;

        // Own virtual methods of Gee.Map

        vfunc_has_key(key: any): boolean;
        vfunc_contains(key: any): boolean;
        vfunc_has(key: any, value: any): boolean;
        vfunc_get(key: any): any;
        vfunc_set(key: any, value: any): void;
        vfunc_unset(key: any): [boolean, any];
        vfunc_remove(key: any): [boolean, any];
        vfunc_clear(): void;
        vfunc_map_iterator(): MapIterator;
        vfunc_set_all(map: Map): void;
        vfunc_unset_all(map: Map): boolean;
        vfunc_remove_all(map: Map): boolean;
        vfunc_has_all(map: Map): boolean;
        vfunc_contains_all(map: Map): boolean;
    }

    export const Map: MapNamespace;

    module MapIterator {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    export interface MapIteratorNamespace {
        $gtype: GObject.GType<MapIterator>;
        prototype: MapIterator;
    }
    interface MapIterator extends GObject.Object {
        // Own methods of Gee.MapIterator

        next(): boolean;
        has_next(): boolean;
        first(): boolean;
        get_key(): any;
        get_value(): any;
        set_value(value: any): void;
        unset(): void;

        // Own virtual methods of Gee.MapIterator

        vfunc_next(): boolean;
        vfunc_has_next(): boolean;
        vfunc_first(): boolean;
        vfunc_get_key(): any;
        vfunc_get_value(): any;
        vfunc_set_value(value: any): void;
        vfunc_unset(): void;
    }

    export const MapIterator: MapIteratorNamespace;

    module MultiMap {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            size: number;
        }
    }

    export interface MultiMapNamespace {
        $gtype: GObject.GType<MultiMap>;
        prototype: MultiMap;
    }
    interface MultiMap extends GObject.Object {
        // Own properties of Gee.MultiMap

        get size(): number;

        // Own methods of Gee.MultiMap

        get_keys(): Set;
        get_all_keys(): MultiSet;
        get_values(): Collection;
        contains(key: any): boolean;
        get(key: any): Collection;
        set(key: any, value: any): void;
        // Conflicted with GObject.Object.set
        set(...args: never[]): any;
        remove(key: any, value: any): boolean;
        remove_all(key: any): boolean;
        clear(): void;

        // Own virtual methods of Gee.MultiMap

        vfunc_get_keys(): Set;
        vfunc_get_all_keys(): MultiSet;
        vfunc_get_values(): Collection;
        vfunc_contains(key: any): boolean;
        vfunc_get(key: any): Collection;
        vfunc_set(key: any, value: any): void;
        vfunc_remove(key: any, value: any): boolean;
        vfunc_remove_all(key: any): boolean;
        vfunc_clear(): void;
    }

    export const MultiMap: MultiMapNamespace;

    module MultiSet {
        // Constructor properties interface

        interface ConstructorProps extends Collection.ConstructorProps {}
    }

    export interface MultiSetNamespace {
        $gtype: GObject.GType<MultiSet>;
        prototype: MultiSet;
    }
    interface MultiSet extends Collection {
        // Own methods of Gee.MultiSet

        count(item: any): number;

        // Own virtual methods of Gee.MultiSet

        vfunc_count(item: any): number;
    }

    export const MultiSet: MultiSetNamespace;

    module Queue {
        // Constructor properties interface

        interface ConstructorProps extends Collection.ConstructorProps {
            capacity: number;
            remaining_capacity: number;
            remainingCapacity: number;
            is_full: boolean;
            isFull: boolean;
        }
    }

    export interface QueueNamespace {
        $gtype: GObject.GType<Queue>;
        prototype: Queue;
    }
    interface Queue extends Collection {
        // Own properties of Gee.Queue

        get capacity(): number;
        get remaining_capacity(): number;
        get remainingCapacity(): number;
        get is_full(): boolean;
        get isFull(): boolean;

        // Own methods of Gee.Queue

        offer(element: any): boolean;
        peek(): any;
        poll(): any;
        drain(recipient: Collection, amount: number): number;

        // Own virtual methods of Gee.Queue

        vfunc_offer(element: any): boolean;
        vfunc_peek(): any;
        vfunc_poll(): any;
        vfunc_drain(recipient: Collection, amount: number): number;
    }

    export const Queue: QueueNamespace;

    module Set {
        // Constructor properties interface

        interface ConstructorProps extends Collection.ConstructorProps {
            read_only_view: Set;
            readOnlyView: Set;
        }
    }

    export interface SetNamespace {
        $gtype: GObject.GType<Set>;
        prototype: Set;

        empty(): Set;
    }
    interface Set extends Collection {
        // Own properties of Gee.Set

        get read_only_view(): Set;
        get readOnlyView(): Set;
    }

    export const Set: SetNamespace;

    module SortedSet {
        // Constructor properties interface

        interface ConstructorProps extends Set.ConstructorProps {}
    }

    export interface SortedSetNamespace {
        $gtype: GObject.GType<SortedSet>;
        prototype: SortedSet;
    }
    interface SortedSet extends Set {
        // Own methods of Gee.SortedSet

        first(): any;
        last(): any;
        bidir_iterator(): BidirIterator;
        iterator_at(element: any): BidirIterator;
        lower(element: any): any;
        higher(element: any): any;
        floor(element: any): any;
        ceil(element: any): any;
        head_set(before: any): SortedSet;
        tail_set(after: any): SortedSet;
        sub_set(from: any, to: any): SortedSet;

        // Own virtual methods of Gee.SortedSet

        vfunc_first(): any;
        vfunc_last(): any;
        vfunc_bidir_iterator(): BidirIterator;
        vfunc_iterator_at(element: any): BidirIterator;
        vfunc_lower(element: any): any;
        vfunc_higher(element: any): any;
        vfunc_floor(element: any): any;
        vfunc_ceil(element: any): any;
        vfunc_head_set(before: any): SortedSet;
        vfunc_tail_set(after: any): SortedSet;
        vfunc_sub_set(from: any, to: any): SortedSet;
    }

    export const SortedSet: SortedSetNamespace;

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

export default Gee;
// END
