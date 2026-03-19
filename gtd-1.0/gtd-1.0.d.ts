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
import type Gtk from '@girs/gtk-4.0';
import type Gsk from '@girs/gsk-4.0';
import type Graphene from '@girs/graphene-1.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type Gdk from '@girs/gdk-4.0';
import type cairo from 'cairo';
import type PangoCairo from '@girs/pangocairo-1.0';
import type Pango from '@girs/pango-1.0';
import type HarfBuzz from '@girs/harfbuzz-0.0';
import type freetype2 from '@girs/freetype2-2.0';
import type Gio from '@girs/gio-2.0';
import type GModule from '@girs/gmodule-2.0';
import type GdkPixbuf from '@girs/gdkpixbuf-2.0';

export namespace Gtd {
    /**
     * Gtd-1.0
     */

    /**
     * @gir-type Callback
     */
    interface ErrorActionFunc {
        (notification: Notification): void;
    }
    /**
     * @gir-type Callback
     */
    interface ListModelFilterFunc<A = GObject.Object> {
        (object: A): boolean;
    }
    /**
     * @gir-type Callback
     */
    interface MenuButtonCreatePopupFunc {
        (self: MenuButton): void;
    }
    /**
     * @gir-type Callback
     */
    interface NotificationActionFunc {
        (notification: Notification): void;
    }
    /**
     * @gir-type Callback
     */
    interface TaskListViewHeaderFunc {
        (task: Task, previous_task: Task): Gtk.Widget | null;
    }
    namespace BinLayout {
        // Signal signatures
        interface SignalSignatures extends Gtk.LayoutManager.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends Gtk.LayoutManager.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class BinLayout extends Gtk.LayoutManager {
        static $gtype: GObject.GType<BinLayout>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: BinLayout.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<BinLayout.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): BinLayout;

        // Signals

        /** @signal */
        connect<K extends keyof BinLayout.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, BinLayout.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof BinLayout.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, BinLayout.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof BinLayout.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<BinLayout.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;
    }

    namespace Clock {
        // Signal signatures
        interface SignalSignatures extends Object.SignalSignatures {
            /**
             * @signal
             */
            'day-changed': () => void;
            /**
             * @signal
             */
            'hour-changed': () => void;
            /**
             * @signal
             */
            'minute-changed': () => void;
            'notify::loading': (pspec: GObject.ParamSpec) => void;
            'notify::uid': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Object.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class Clock extends Object {
        static $gtype: GObject.GType<Clock>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Clock.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Clock.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): Clock;

        // Signals

        /** @signal */
        connect<K extends keyof Clock.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Clock.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Clock.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Clock.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Clock.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Clock.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;
    }

    namespace ListModelFilter {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::child-model': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps<A extends GObject.Object = GObject.Object>
            extends GObject.Object.ConstructorProps, Gio.ListModel.ConstructorProps {
            child_model: Gio.ListModel;
            childModel: Gio.ListModel;
        }
    }

    /**
     * @gir-type Class
     */
    class ListModelFilter<A extends GObject.Object = GObject.Object>
        extends GObject.Object
        implements Gio.ListModel<A>
    {
        static $gtype: GObject.GType<ListModelFilter>;

        // Properties

        get child_model(): Gio.ListModel;
        get childModel(): Gio.ListModel;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: ListModelFilter.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<ListModelFilter.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](child_model: Gio.ListModel): ListModelFilter;

        // Signals

        /** @signal */
        connect<K extends keyof ListModelFilter.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ListModelFilter.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof ListModelFilter.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ListModelFilter.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof ListModelFilter.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<ListModelFilter.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Gets the child model that is being filtered.
         * @returns A {@link Gio.ListModel}.
         */
        get_child_model(): Gio.ListModel;
        invalidate(): void;
        /**
         * @param filter_func
         */
        set_filter_func(filter_func: ListModelFilterFunc): void;
        /**
         * Gets the type of the items in `list`.
         *
         * All items returned from `g_list_model_get_item()` are of the type
         * returned by this function, or a subtype, or if the type is an
         * interface, they are an implementation of that interface.
         *
         * The item type of a {@link Gio.ListModel} can not change during the life of the
         * model.
         * @returns the {@link GObject.GType} of the items contained in `list`.
         */
        get_item_type(): GObject.GType;
        /**
         * Gets the number of items in `list`.
         *
         * Depending on the model implementation, calling this function may be
         * less efficient than iterating the list with increasing values for
         * `position` until `g_list_model_get_item()` returns `null`.
         * @returns the number of items in `list`.
         */
        get_n_items(): number;
        /**
         * Get the item at `position`.
         *
         * If `position` is greater than the number of items in `list`, `null` is
         * returned.
         *
         * `null` is never returned for an index that is smaller than the length
         * of the list.
         *
         * This function is meant to be used by language bindings in place
         * of `g_list_model_get_item()`.
         *
         * See also: `g_list_model_get_n_items()`
         * @param position the position of the item to fetch
         * @returns the object at `position`.
         */
        get_item(position: number): A | null;
        /**
         * Emits the {@link Gio.ListModel.SignalSignatures.items_changed | Gio.ListModel::items-changed} signal on `list`.
         *
         * This function should only be called by classes implementing
         * {@link Gio.ListModel}. It has to be called after the internal representation
         * of `list` has been updated, because handlers connected to this signal
         * might query the new state of the list.
         *
         * Implementations must only make changes to the model (as visible to
         * its consumer) in places that will not cause problems for that
         * consumer.  For models that are driven directly by a write API (such
         * as {@link Gio.ListStore}), changes can be reported in response to uses of that
         * API.  For models that represent remote data, changes should only be
         * made from a fresh mainloop dispatch.  It is particularly not
         * permitted to make changes in response to a call to the {@link Gio.ListModel}
         * consumer API.
         *
         * Stated another way: in general, it is assumed that code making a
         * series of accesses to the model via the API, without returning to the
         * mainloop, and without calling other code, will continue to view the
         * same contents of the model.
         * @param position the position at which `list` changed
         * @param removed the number of items removed
         * @param added the number of items added
         */
        items_changed(position: number, removed: number, added: number): void;
        /**
         * Get the item at `position`. If `position` is greater than the number of
         * items in `list`, `null` is returned.
         *
         * `null` is never returned for an index that is smaller than the length
         * of the list.  See `g_list_model_get_n_items()`.
         *
         * The same {@link GObject.Object} instance may not appear more than once in a {@link Gio.ListModel}.
         * @param position the position of the item to fetch
         * @virtual
         */
        vfunc_get_item(position: number): A | null;
        /**
         * Gets the type of the items in `list`.
         *
         * All items returned from `g_list_model_get_item()` are of the type
         * returned by this function, or a subtype, or if the type is an
         * interface, they are an implementation of that interface.
         *
         * The item type of a {@link Gio.ListModel} can not change during the life of the
         * model.
         * @virtual
         */
        vfunc_get_item_type(): GObject.GType;
        /**
         * Gets the number of items in `list`.
         *
         * Depending on the model implementation, calling this function may be
         * less efficient than iterating the list with increasing values for
         * `position` until `g_list_model_get_item()` returns `null`.
         * @virtual
         */
        vfunc_get_n_items(): number;
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

    namespace ListStore {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::item-type': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps<A extends GObject.Object = GObject.Object>
            extends GObject.Object.ConstructorProps, Gio.ListModel.ConstructorProps {
            item_type: GObject.GType;
            itemType: GObject.GType;
        }
    }

    /**
     * {@link Gtd.ListStore} is a simple implementation of {@link Gio.ListModel} that stores all
     * items in memory.
     *
     * It provides insertions, deletions, and lookups in logarithmic time
     * with a fast path for the common case of iterating the list linearly.
     * @gir-type Class
     */
    class ListStore<A extends GObject.Object = GObject.Object> extends GObject.Object implements Gio.ListModel<A> {
        static $gtype: GObject.GType<ListStore>;

        // Properties

        /**
         * The type of items contained in this list store. Items must be
         * subclasses of {@link GObject.Object}.
         */
        get item_type(): GObject.GType;
        /**
         * The type of items contained in this list store. Items must be
         * subclasses of {@link GObject.Object}.
         */
        get itemType(): GObject.GType;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: ListStore.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<ListStore.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](item_type: GObject.GType): ListStore;

        // Signals

        /** @signal */
        connect<K extends keyof ListStore.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ListStore.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof ListStore.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ListStore.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof ListStore.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<ListStore.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Appends `item` to `store`. `item` must be of type {@link Gtd.ListStore.item_type}.
         *
         * This function takes a ref on `item`.
         *
         * Use `gtd_list_store_splice()` to append multiple items at the same time
         * efficiently.
         * @param item the new item
         */
        append(item: GObject.Object): void;
        /**
         * Retrieves the position of `items` inside `store`. It is a programming
         * error to pass an `item` that is not contained in `store`.
         * @param item the item to retrieve the position
         * @returns the position of `item` in `store`.
         */
        get_item_position(item?: any | null): number;
        /**
         * Inserts `item` into `store` at `position`. `item` must be of type
         * {@link Gtd.ListStore.item_type} or derived from it. `position` must be smaller
         * than the length of the list, or equal to it to append.
         *
         * This function takes a ref on `item`.
         *
         * Use `gtd_list_store_splice()` to insert multiple items at the same time
         * efficiently.
         * @param position the position at which to insert the new item
         * @param item the new item
         */
        insert(position: number, item: GObject.Object): void;
        /**
         * Inserts `item` into `store` at a position to be determined by the
         * `compare_func`.
         *
         * The list must already be sorted before calling this function or the
         * result is undefined.  Usually you would approach this by only ever
         * inserting items by way of this function.
         *
         * This function takes a ref on `item`.
         * @param item the new item
         * @param compare_func pairwise comparison function for sorting
         * @returns the position at which `item` was inserted
         */
        insert_sorted(item: GObject.Object, compare_func: GLib.CompareDataFunc): number;
        /**
         * Removes the item from `store`.
         *
         * Use `gtd_list_store_splice()` to remove multiple items at the same time
         * efficiently.
         * @param item the item that is to be removed
         */
        remove(item?: any | null): void;
        /**
         * Removes all items from `store`.
         */
        remove_all(): void;
        /**
         * Removes the item from `store` that is at `position`. `position` must be
         * smaller than the current length of the list.
         *
         * Use `gtd_list_store_splice()` to remove multiple items at the same time
         * efficiently.
         * @param position the position of the item that is to be removed
         */
        remove_at_position(position: number): void;
        /**
         * Sort the items in `store` according to `compare_func`.
         * @param compare_func pairwise comparison function for sorting
         */
        sort(compare_func: GLib.CompareDataFunc): void;
        /**
         * Changes `store` by removing `n_removals` items and adding `n_additions`
         * items to it. `additions` must contain `n_additions` items of type
         * {@link Gtd.ListStore.item_type}.  `null` is not permitted.
         *
         * This function is more efficient than `gtd_list_store_insert()` and
         * `gtd_list_store_remove()`, because it only emits
         * {@link Gio.ListModel.SignalSignatures.items_changed | Gio.ListModel::items-changed} once for the change.
         *
         * This function takes a ref on each item in `additions`.
         *
         * The parameters `position` and `n_removals` must be correct (ie:
         * `position` + `n_removals` must be less than or equal to the length of
         * the list at the time this function is called).
         * @param position the position at which to make the change
         * @param n_removals the number of items to remove
         * @param additions the items to add
         */
        splice(position: number, n_removals: number, additions: GObject.Object[]): void;
        /**
         * Gets the type of the items in `list`.
         *
         * All items returned from `g_list_model_get_item()` are of the type
         * returned by this function, or a subtype, or if the type is an
         * interface, they are an implementation of that interface.
         *
         * The item type of a {@link Gio.ListModel} can not change during the life of the
         * model.
         * @returns the {@link GObject.GType} of the items contained in `list`.
         */
        get_item_type(): GObject.GType;
        /**
         * Gets the number of items in `list`.
         *
         * Depending on the model implementation, calling this function may be
         * less efficient than iterating the list with increasing values for
         * `position` until `g_list_model_get_item()` returns `null`.
         * @returns the number of items in `list`.
         */
        get_n_items(): number;
        /**
         * Get the item at `position`.
         *
         * If `position` is greater than the number of items in `list`, `null` is
         * returned.
         *
         * `null` is never returned for an index that is smaller than the length
         * of the list.
         *
         * This function is meant to be used by language bindings in place
         * of `g_list_model_get_item()`.
         *
         * See also: `g_list_model_get_n_items()`
         * @param position the position of the item to fetch
         * @returns the object at `position`.
         */
        get_item(position: number): A | null;
        /**
         * Emits the {@link Gio.ListModel.SignalSignatures.items_changed | Gio.ListModel::items-changed} signal on `list`.
         *
         * This function should only be called by classes implementing
         * {@link Gio.ListModel}. It has to be called after the internal representation
         * of `list` has been updated, because handlers connected to this signal
         * might query the new state of the list.
         *
         * Implementations must only make changes to the model (as visible to
         * its consumer) in places that will not cause problems for that
         * consumer.  For models that are driven directly by a write API (such
         * as {@link Gio.ListStore}), changes can be reported in response to uses of that
         * API.  For models that represent remote data, changes should only be
         * made from a fresh mainloop dispatch.  It is particularly not
         * permitted to make changes in response to a call to the {@link Gio.ListModel}
         * consumer API.
         *
         * Stated another way: in general, it is assumed that code making a
         * series of accesses to the model via the API, without returning to the
         * mainloop, and without calling other code, will continue to view the
         * same contents of the model.
         * @param position the position at which `list` changed
         * @param removed the number of items removed
         * @param added the number of items added
         */
        items_changed(position: number, removed: number, added: number): void;
        /**
         * Get the item at `position`. If `position` is greater than the number of
         * items in `list`, `null` is returned.
         *
         * `null` is never returned for an index that is smaller than the length
         * of the list.  See `g_list_model_get_n_items()`.
         *
         * The same {@link GObject.Object} instance may not appear more than once in a {@link Gio.ListModel}.
         * @param position the position of the item to fetch
         * @virtual
         */
        vfunc_get_item(position: number): A | null;
        /**
         * Gets the type of the items in `list`.
         *
         * All items returned from `g_list_model_get_item()` are of the type
         * returned by this function, or a subtype, or if the type is an
         * interface, they are an implementation of that interface.
         *
         * The item type of a {@link Gio.ListModel} can not change during the life of the
         * model.
         * @virtual
         */
        vfunc_get_item_type(): GObject.GType;
        /**
         * Gets the number of items in `list`.
         *
         * Depending on the model implementation, calling this function may be
         * less efficient than iterating the list with increasing values for
         * `position` until `g_list_model_get_item()` returns `null`.
         * @virtual
         */
        vfunc_get_n_items(): number;
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

    namespace Manager {
        // Signal signatures
        interface SignalSignatures extends Object.SignalSignatures {
            /**
             * The ::list-added signal is emmited after a {@link Gtd.TaskList}
             * is connected.
             * @signal
             */
            'list-added': (arg0: TaskList) => void;
            /**
             * The ::list-changed signal is emmited after a {@link Gtd.TaskList}
             * has any of it's properties changed.
             * @signal
             */
            'list-changed': (arg0: TaskList) => void;
            /**
             * The ::list-removed signal is emmited after a {@link Gtd.TaskList}
             * is disconnected.
             * @signal
             */
            'list-removed': (arg0: TaskList) => void;
            /**
             * The ::provider-added signal is emmited after a {@link Gtd.Provider}
             * is added.
             * @signal
             */
            'provider-added': (arg0: Provider) => void;
            /**
             * The ::provider-removed signal is emmited after a {@link Gtd.Provider}
             * is removed from the list.
             * @signal
             */
            'provider-removed': (arg0: Provider) => void;
            /**
             * Notifies about errors, and sends the error message for widgets
             * to display.
             * @signal
             */
            'show-error-message': (arg0: string, arg1: string, arg2: any | null, arg3: any | null) => void;
            /**
             * Sends a notification.
             * @signal
             */
            'show-notification': (arg0: Notification) => void;
            'notify::clock': (pspec: GObject.ParamSpec) => void;
            'notify::default-provider': (pspec: GObject.ParamSpec) => void;
            'notify::loading': (pspec: GObject.ParamSpec) => void;
            'notify::uid': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Object.ConstructorProps {
            clock: Clock;
            default_provider: Provider;
            defaultProvider: Provider;
        }
    }

    /**
     * @gir-type Class
     */
    class Manager extends Object {
        static $gtype: GObject.GType<Manager>;

        // Properties

        get clock(): Clock;
        get default_provider(): Provider;
        set default_provider(val: Provider);
        get defaultProvider(): Provider;
        set defaultProvider(val: Provider);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Manager.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Manager.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): Manager;

        // Signals

        /** @signal */
        connect<K extends keyof Manager.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Manager.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Manager.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Manager.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Manager.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Manager.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        /**
         * Retrieves the singleton {@link Gtd.Manager} instance. You should always
         * use this function instead of `gtd_manager_new`.
         */
        static get_default(): Manager;

        // Methods

        /**
         * Adds `provider` to the list of providers.
         * @param provider a {@link Gtd.Provider}
         */
        add_provider(provider: Provider): void;
        /**
         * Reports an error.
         * @param title the title of the error
         * @param description detailed description of the error
         * @param _function function to be called when the notification is dismissed
         */
        emit_error_message(
            title?: string | null,
            description?: string | null,
            _function?: ErrorActionFunc | null,
        ): void;
        /**
         * Retrieves the {@link Gio.ListModel} containing `GtdTasks` from
         * `self`. You can use the this model to bind to GtkListBox
         * or other widgets.
         *
         * The model is sorted.
         * @returns a {@link Gio.ListModel}
         */
        get_all_tasks_model(): Gio.ListModel;
        /**
         * Retrieves the {@link Gtd.Clock} from `self`. You can use the
         * clock to know when your code should be updated.
         * @returns a {@link Gtd.Clock}
         */
        get_clock(): Clock;
        /**
         * Retrieves the default provider location. Default is "local".
         * @returns the default provider.
         */
        get_default_provider(): Provider;
        /**
         * Retrieves the local inbox.
         * @returns a {@link Gtd.TaskList}
         */
        get_inbox(): TaskList | null;
        /**
         * Retrieves the {@link Gio.ListModel} containing `GtdTaskLists` that are
         * inbox.
         * @returns a {@link Gio.ListModel}
         */
        get_inbox_model(): Gio.ListModel;
        /**
         * Retrieves the 'first-run' setting.
         * @returns `true` if Endeavour was never run before, `false` otherwise.
         */
        get_is_first_run(): boolean;
        /**
         * Retrieves the list of available {@link Gtd.Provider}.
         * @returns a newly allocated {@link GLib.List} of {@link Gtd.Storage}. Free with `g_list_free` after use.
         */
        get_providers(): Provider[];
        /**
         * Retrieves the {@link Gio.ListModel} containing `GtdProviders`.
         * @returns a {@link Gio.ListModel}
         */
        get_providers_model(): Gio.ListModel;
        /**
         * Retrieves the internal {@link Gio.Settings} from `manager`.
         * @returns the internal {@link Gio.Settings} of `manager`
         */
        get_settings(): Gio.Settings;
        /**
         * Retrieves the {@link Gio.ListModel} containing `GtdTaskLists` from
         * `self`. You can use the this model to bind to GtkListBox
         * or other widgets.
         *
         * The model is sorted.
         * @returns a {@link Gio.ListModel}
         */
        get_task_lists_model(): Gio.ListModel;
        /**
         * Retrieves the {@link Gio.ListModel} containing `GtdTasks` from
         * `self`. You can use the this model to bind to GtkListBox
         * or other widgets.
         *
         * The model returned by this function is filtered to only
         * contain tasks from unarchived lists. If you need all tasks,
         * see `gtd_manager_get_all_tasks_model()`.
         *
         * The model is sorted.
         * @returns a {@link Gio.ListModel}
         */
        get_tasks_model(): Gio.ListModel;
        /**
         * Removes `provider` from the list of providers.
         * @param provider a {@link Gtd.Provider}
         */
        remove_provider(provider: Provider): void;
        /**
         * Sends a notification to the notification system.
         * @param notification a {@link Gtd.Notification}
         */
        send_notification(notification: Notification): void;
        /**
         * Sets the provider.
         * @param provider the default provider.
         */
        set_default_provider(provider?: Provider | null): void;
        /**
         * Sets the 'first-run' setting.
         * @param is_first_run `true` to make it first run, `false` otherwise.
         */
        set_is_first_run(is_first_run: boolean): void;
    }

    namespace MaxSizeLayout {
        // Signal signatures
        interface SignalSignatures extends Gtk.LayoutManager.SignalSignatures {
            'notify::max-height': (pspec: GObject.ParamSpec) => void;
            'notify::max-width': (pspec: GObject.ParamSpec) => void;
            'notify::max-width-chars': (pspec: GObject.ParamSpec) => void;
            'notify::width-chars': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Gtk.LayoutManager.ConstructorProps {
            max_height: number;
            maxHeight: number;
            max_width: number;
            maxWidth: number;
            max_width_chars: number;
            maxWidthChars: number;
            width_chars: number;
            widthChars: number;
        }
    }

    /**
     * @gir-type Class
     */
    class MaxSizeLayout extends Gtk.LayoutManager {
        static $gtype: GObject.GType<MaxSizeLayout>;

        // Properties

        /**
         * Sets the maximum height of the {@link Gtk.Widget}.
         */
        get max_height(): number;
        set max_height(val: number);
        /**
         * Sets the maximum height of the {@link Gtk.Widget}.
         */
        get maxHeight(): number;
        set maxHeight(val: number);
        /**
         * Sets the maximum width of the {@link Gtk.Widget}.
         */
        get max_width(): number;
        set max_width(val: number);
        /**
         * Sets the maximum width of the {@link Gtk.Widget}.
         */
        get maxWidth(): number;
        set maxWidth(val: number);
        /**
         * Sets the maximum size of the {@link Gtk.Widget} in characters.
         */
        get max_width_chars(): number;
        set max_width_chars(val: number);
        /**
         * Sets the maximum size of the {@link Gtk.Widget} in characters.
         */
        get maxWidthChars(): number;
        set maxWidthChars(val: number);
        /**
         * Sets the size of the {@link Gtk.Widget} in characters.
         */
        get width_chars(): number;
        set width_chars(val: number);
        /**
         * Sets the size of the {@link Gtk.Widget} in characters.
         */
        get widthChars(): number;
        set widthChars(val: number);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: MaxSizeLayout.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<MaxSizeLayout.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): MaxSizeLayout;

        // Signals

        /** @signal */
        connect<K extends keyof MaxSizeLayout.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, MaxSizeLayout.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof MaxSizeLayout.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, MaxSizeLayout.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof MaxSizeLayout.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<MaxSizeLayout.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Retrieves the maximum height of `self`.
         * @returns maximum height
         */
        get_max_height(): number;
        /**
         * Retrieves the maximum width of `self`.
         * @returns maximum width
         */
        get_max_width(): number;
        /**
         * Retrieves the maximum width in characters of `self`.
         * @returns maximum width in characters
         */
        get_max_width_chars(): number;
        /**
         * Retrieves the minimum width in characters of `self`.
         * @returns minimum width in characters
         */
        get_width_chars(): number;
        /**
         * Sets the maximum height `self` has.
         * @param max_height maximum height of the widget `self` is attached to
         */
        set_max_height(max_height: number): void;
        /**
         * Sets the maximum width `self` has.
         * @param max_width maximum width of the widget `self` is attached to
         */
        set_max_width(max_width: number): void;
        /**
         * Sets the maximum width `self` has, in characters length. It is a programming
         * error to set a value smaller than {@link Gtd.MaxSizeLayout.width_layout}.
         * @param max_width_chars maximum width of the widget `self` is attached to, in character length
         */
        set_max_width_chars(max_width_chars: number): void;
        /**
         * Sets the minimum width `self` has, in characters length. It is a programming
         * error to set a value bigger than {@link Gtd.MaxSizeLayout.max_width_layout}.
         * @param width_chars minimum width of the widget `self` is attached to, in character length
         */
        set_width_chars(width_chars: number): void;
    }

    namespace MenuButton {
        // Signal signatures
        interface SignalSignatures extends Gtk.Widget.SignalSignatures {
            'notify::align-widget': (pspec: GObject.ParamSpec) => void;
            'notify::direction': (pspec: GObject.ParamSpec) => void;
            'notify::gicon': (pspec: GObject.ParamSpec) => void;
            'notify::has-frame': (pspec: GObject.ParamSpec) => void;
            'notify::label': (pspec: GObject.ParamSpec) => void;
            'notify::menu-model': (pspec: GObject.ParamSpec) => void;
            'notify::popover': (pspec: GObject.ParamSpec) => void;
            'notify::use-underline': (pspec: GObject.ParamSpec) => void;
            'notify::can-focus': (pspec: GObject.ParamSpec) => void;
            'notify::can-target': (pspec: GObject.ParamSpec) => void;
            'notify::css-classes': (pspec: GObject.ParamSpec) => void;
            'notify::css-name': (pspec: GObject.ParamSpec) => void;
            'notify::cursor': (pspec: GObject.ParamSpec) => void;
            'notify::focus-on-click': (pspec: GObject.ParamSpec) => void;
            'notify::focusable': (pspec: GObject.ParamSpec) => void;
            'notify::halign': (pspec: GObject.ParamSpec) => void;
            'notify::has-default': (pspec: GObject.ParamSpec) => void;
            'notify::has-focus': (pspec: GObject.ParamSpec) => void;
            'notify::has-tooltip': (pspec: GObject.ParamSpec) => void;
            'notify::height-request': (pspec: GObject.ParamSpec) => void;
            'notify::hexpand': (pspec: GObject.ParamSpec) => void;
            'notify::hexpand-set': (pspec: GObject.ParamSpec) => void;
            'notify::layout-manager': (pspec: GObject.ParamSpec) => void;
            'notify::limit-events': (pspec: GObject.ParamSpec) => void;
            'notify::margin-bottom': (pspec: GObject.ParamSpec) => void;
            'notify::margin-end': (pspec: GObject.ParamSpec) => void;
            'notify::margin-start': (pspec: GObject.ParamSpec) => void;
            'notify::margin-top': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::opacity': (pspec: GObject.ParamSpec) => void;
            'notify::overflow': (pspec: GObject.ParamSpec) => void;
            'notify::parent': (pspec: GObject.ParamSpec) => void;
            'notify::receives-default': (pspec: GObject.ParamSpec) => void;
            'notify::root': (pspec: GObject.ParamSpec) => void;
            'notify::scale-factor': (pspec: GObject.ParamSpec) => void;
            'notify::sensitive': (pspec: GObject.ParamSpec) => void;
            'notify::tooltip-markup': (pspec: GObject.ParamSpec) => void;
            'notify::tooltip-text': (pspec: GObject.ParamSpec) => void;
            'notify::valign': (pspec: GObject.ParamSpec) => void;
            'notify::vexpand': (pspec: GObject.ParamSpec) => void;
            'notify::vexpand-set': (pspec: GObject.ParamSpec) => void;
            'notify::visible': (pspec: GObject.ParamSpec) => void;
            'notify::width-request': (pspec: GObject.ParamSpec) => void;
            'notify::accessible-role': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps
            extends
                Gtk.Widget.ConstructorProps,
                Gtk.Accessible.ConstructorProps,
                Gtk.Buildable.ConstructorProps,
                Gtk.ConstraintTarget.ConstructorProps {
            align_widget: Gtk.Widget;
            alignWidget: Gtk.Widget;
            direction: Gtk.ArrowType;
            gicon: Gio.Icon;
            has_frame: boolean;
            hasFrame: boolean;
            label: string;
            menu_model: Gio.MenuModel;
            menuModel: Gio.MenuModel;
            popover: Gtk.Popover;
            use_underline: boolean;
            useUnderline: boolean;
        }
    }

    /**
     * @gir-type Class
     */
    class MenuButton extends Gtk.Widget implements Gtk.Accessible, Gtk.Buildable, Gtk.ConstraintTarget {
        static $gtype: GObject.GType<MenuButton>;

        // Properties

        /**
         * The {@link Gtk.Widget} to use to align the menu with.
         */
        get align_widget(): Gtk.Widget;
        set align_widget(val: Gtk.Widget);
        /**
         * The {@link Gtk.Widget} to use to align the menu with.
         */
        get alignWidget(): Gtk.Widget;
        set alignWidget(val: Gtk.Widget);
        /**
         * The {@link Gtk.ArrowType} representing the direction in which the
         * menu or popover will be popped out.
         */
        get direction(): Gtk.ArrowType;
        set direction(val: Gtk.ArrowType);
        get gicon(): Gio.Icon;
        set gicon(val: Gio.Icon);
        get has_frame(): boolean;
        set has_frame(val: boolean);
        get hasFrame(): boolean;
        set hasFrame(val: boolean);
        get label(): string;
        set label(val: string);
        /**
         * The {@link Gio.MenuModel} from which the popup will be created.
         *
         * See `gtd_menu_button_set_menu_model()` for the interaction with the
         * {@link Gtd.MenuButton.popup} property.
         */
        get menu_model(): Gio.MenuModel;
        set menu_model(val: Gio.MenuModel);
        /**
         * The {@link Gio.MenuModel} from which the popup will be created.
         *
         * See `gtd_menu_button_set_menu_model()` for the interaction with the
         * {@link Gtd.MenuButton.popup} property.
         */
        get menuModel(): Gio.MenuModel;
        set menuModel(val: Gio.MenuModel);
        /**
         * The {@link Gtk.Popover} that will be popped up when the button is clicked.
         */
        get popover(): Gtk.Popover;
        set popover(val: Gtk.Popover);
        get use_underline(): boolean;
        set use_underline(val: boolean);
        get useUnderline(): boolean;
        set useUnderline(val: boolean);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: MenuButton.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<MenuButton.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): MenuButton;

        // Signals

        /** @signal */
        connect<K extends keyof MenuButton.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, MenuButton.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof MenuButton.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, MenuButton.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof MenuButton.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<MenuButton.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Returns the parent {@link Gtk.Widget} to use to line up with menu.
         * @returns a {@link Gtk.Widget} value or `null`
         */
        get_align_widget(): Gtk.Widget | null;
        /**
         * Returns the direction the popup will be pointing at when popped up.
         * @returns a {@link Gtk.ArrowType} value
         */
        get_direction(): Gtk.ArrowType;
        /**
         * @param args
         */
        // Conflicted with Gtk.Widget.get_direction
        get_direction(...args: never[]): any;
        /**
         * Gets the name of the icon shown in the button.
         * @returns the name of the icon shown in the button
         */
        get_gicon(): Gio.Icon;
        /**
         * Returns whether the button has a frame.
         * @returns `true` if the button has a frame
         */
        get_has_frame(): boolean;
        /**
         * Gets the label shown in the button
         * @returns the label shown in the button
         */
        get_label(): string;
        /**
         * Returns the {@link Gio.MenuModel} used to generate the popup.
         * @returns a {@link Gio.MenuModel} or `null`
         */
        get_menu_model(): Gio.MenuModel | null;
        /**
         * Returns the {@link Gtk.Popover} that pops out of the button.
         * If the button is not using a {@link Gtk.Popover}, this function
         * returns `null`.
         * @returns a {@link Gtk.Popover} or `null`
         */
        get_popover(): Gtk.Popover | null;
        /**
         * Returns whether an embedded underline in the text indicates a
         * mnemonic. See `gtd_menu_button_set_use_underline()`.
         * @returns `true` whether an embedded underline in the text indicates     the mnemonic accelerator keys.
         */
        get_use_underline(): boolean;
        /**
         * Dismiss the menu.
         */
        popdown(): void;
        /**
         * Pop up the menu.
         */
        popup(): void;
        /**
         * Sets the {@link Gtk.Widget} to use to line the menu with when popped up.
         * Note that the `align_widget` must contain the {@link Gtd.MenuButton} itself.
         *
         * Setting it to `null` means that the menu will be aligned with the
         * button itself.
         *
         * Note that this property is only used with menus currently,
         * and not for popovers.
         * @param align_widget a {@link Gtk.Widget}
         */
        set_align_widget(align_widget?: Gtk.Widget | null): void;
        /**
         * Sets `func` to be called when a popup is about to be shown.
         * `func` should use one of
         *
         *  - `gtd_menu_button_set_popover()`
         *  - `gtd_menu_button_set_menu_model()`
         *
         * to set a popup for `menu_button`.
         * If `func` is non-`null`, `menu_button` will always be sensitive.
         *
         * Using this function will not reset the menu widget attached to `menu_button`.
         * Instead, this can be done manually in `func`.
         * @param func function to call when a popuop is about to   be shown, but none has been provided via other means, or `null`   to reset to default behavior.
         * @param destroy_notify destroy notify for `user_data`
         */
        set_create_popup_func(
            func?: MenuButtonCreatePopupFunc | null,
            destroy_notify?: GLib.DestroyNotify | null,
        ): void;
        /**
         * Sets the direction in which the popup will be popped up, as
         * well as changing the arrow’s direction. The child will not
         * be changed to an arrow if it was customized.
         *
         * If the does not fit in the available space in the given direction,
         * GTK+ will its best to keep it inside the screen and fully visible.
         *
         * If you pass {@link Gtk.ArrowType.NONE} for a `direction`, the popup will behave
         * as if you passed {@link Gtk.ArrowType.DOWN} (although you won’t see any arrows).
         * @param direction a {@link Gtk.ArrowType}
         */
        set_direction(direction: Gtk.ArrowType | null): void;
        /**
         * @param args
         */
        // Conflicted with Gtk.Widget.set_direction
        set_direction(...args: never[]): any;
        /**
         * @param icon
         */
        set_gicon(icon: Gio.Icon): void;
        /**
         * Sets the style of the button.
         * @param has_frame whether the button should have a visible frame
         */
        set_has_frame(has_frame: boolean): void;
        /**
         * Sets the label to show inside the menu button.
         * @param label the label
         */
        set_label(label: string): void;
        /**
         * Sets the {@link Gio.MenuModel} from which the popup will be constructed,
         * or `null` to dissociate any existing menu model and disable the button.
         *
         * A {@link Gtk.Popover} will be created from the menu model with `gtk_popover_menu_new_from_model()`.
         * Actions will be connected as documented for this function.
         *
         * If {@link Gtd.MenuButton.popover} is already set, it will be dissociated from the `menu_button`,
         * and the property is set to `null`.
         * @param menu_model a {@link Gio.MenuModel}, or `null` to unset and disable the   button
         */
        set_menu_model(menu_model?: Gio.MenuModel | null): void;
        /**
         * Sets the {@link Gtk.Popover} that will be popped up when the `menu_button` is clicked,
         * or `null` to dissociate any existing popover and disable the button.
         *
         * If {@link Gtd.MenuButton.menu_model} is set, the menu model is dissociated from the
         * `menu_button`, and the property is set to `null`.
         * @param popover a {@link Gtk.Popover}, or `null` to unset and disable the button
         */
        set_popover(popover?: Gtk.Widget | null): void;
        /**
         * If true, an underline in the text indicates the next character should be
         * used for the mnemonic accelerator key.
         * @param use_underline `true` if underlines in the text indicate mnemonics
         */
        set_use_underline(use_underline: boolean): void;
        /**
         * The accessible role of the given {@link Gtk.Accessible} implementation.
         *
         * The accessible role cannot be changed once set.
         * @category Inherited from Gtk.Accessible
         */
        get accessible_role(): Gtk.AccessibleRole;
        set accessible_role(val: Gtk.AccessibleRole);
        /**
         * The accessible role of the given {@link Gtk.Accessible} implementation.
         *
         * The accessible role cannot be changed once set.
         * @category Inherited from Gtk.Accessible
         */
        get accessibleRole(): Gtk.AccessibleRole;
        set accessibleRole(val: Gtk.AccessibleRole);
        /**
         * Requests the user's screen reader to announce the given message.
         *
         * This kind of notification is useful for messages that
         * either have only a visual representation or that are not
         * exposed visually at all, e.g. a notification about a
         * successful operation.
         *
         * Also, by using this API, you can ensure that the message
         * does not interrupts the user's current screen reader output.
         * @param message the string to announce
         * @param priority the priority of the announcement
         */
        announce(message: string, priority: Gtk.AccessibleAnnouncementPriority | null): void;
        /**
         * Retrieves the accessible parent for an accessible object.
         *
         * This function returns `NULL` for top level widgets.
         * @returns the accessible parent
         */
        get_accessible_parent(): Gtk.Accessible | null;
        /**
         * Retrieves the accessible role of an accessible object.
         * @returns the accessible role
         */
        get_accessible_role(): Gtk.AccessibleRole;
        /**
         * Retrieves the implementation for the given accessible object.
         * @returns the accessible implementation object
         */
        get_at_context(): Gtk.ATContext;
        /**
         * Queries the coordinates and dimensions of this accessible
         *
         * This functionality can be overridden by {@link Gtk.Accessible}
         * implementations, e.g. to get the bounds from an ignored
         * child widget.
         * @returns true if the bounds are valid, and false otherwise
         */
        get_bounds(): [boolean, number, number, number, number];
        /**
         * Retrieves the first accessible child of an accessible object.
         * @returns the first accessible child
         */
        get_first_accessible_child(): Gtk.Accessible | null;
        /**
         * Retrieves the next accessible sibling of an accessible object
         * @returns the next accessible sibling
         */
        get_next_accessible_sibling(): Gtk.Accessible | null;
        /**
         * Queries a platform state, such as focus.
         *
         * This functionality can be overridden by {@link Gtk.Accessible}
         * implementations, e.g. to get platform state from an ignored
         * child widget, as is the case for {@link Gtk.Text} wrappers.
         * @param state platform state to query
         * @returns the value of state for the accessible
         */
        get_platform_state(state: Gtk.AccessiblePlatformState | null): boolean;
        /**
         * Resets the accessible property to its default value.
         * @param property the accessible property
         */
        reset_property(property: Gtk.AccessibleProperty | null): void;
        /**
         * Resets the accessible relation to its default value.
         * @param relation the accessible relation
         */
        reset_relation(relation: Gtk.AccessibleRelation | null): void;
        /**
         * Resets the accessible state to its default value.
         * @param state the accessible state
         */
        reset_state(state: Gtk.AccessibleState | null): void;
        /**
         * Sets the parent and sibling of an accessible object.
         *
         * This function is meant to be used by accessible implementations that are
         * not part of the widget hierarchy, and but act as a logical bridge between
         * widgets. For instance, if a widget creates an object that holds metadata
         * for each child, and you want that object to implement the {@link Gtk.Accessible}
         * interface, you will use this function to ensure that the parent of each
         * child widget is the metadata object, and the parent of each metadata
         * object is the container widget.
         * @param parent the parent accessible object
         * @param next_sibling the sibling accessible object
         */
        set_accessible_parent(parent?: Gtk.Accessible | null, next_sibling?: Gtk.Accessible | null): void;
        /**
         * Updates the next accessible sibling.
         *
         * That might be useful when a new child of a custom accessible
         * is created, and it needs to be linked to a previous child.
         * @param new_sibling the new next accessible sibling to set
         */
        update_next_accessible_sibling(new_sibling?: Gtk.Accessible | null): void;
        /**
         * Informs ATs that the platform state has changed.
         *
         * This function should be used by {@link Gtk.Accessible} implementations that
         * have a platform state but are not widgets. Widgets handle platform
         * states automatically.
         * @param state the platform state to update
         */
        update_platform_state(state: Gtk.AccessiblePlatformState | null): void;
        /**
         * Updates an array of accessible properties.
         *
         * This function should be called by {@link Gtk.Widget} types whenever an accessible
         * property change must be communicated to assistive technologies.
         *
         * This function is meant to be used by language bindings.
         * @param properties an array of accessible properties
         * @param values an array of `GValues`, one for each property
         */
        update_property(properties: Gtk.AccessibleProperty[] | null, values: (GObject.Value | any)[]): void;
        /**
         * Updates an array of accessible relations.
         *
         * This function should be called by {@link Gtk.Widget} types whenever an accessible
         * relation change must be communicated to assistive technologies.
         *
         * This function is meant to be used by language bindings.
         * @param relations an array of accessible relations
         * @param values an array of `GValues`, one for each relation
         */
        update_relation(relations: Gtk.AccessibleRelation[] | null, values: (GObject.Value | any)[]): void;
        /**
         * Updates an array of accessible states.
         *
         * This function should be called by {@link Gtk.Widget} types whenever an accessible
         * state change must be communicated to assistive technologies.
         *
         * This function is meant to be used by language bindings.
         * @param states an array of accessible states
         * @param values an array of `GValues`, one for each state
         */
        update_state(states: Gtk.AccessibleState[] | null, values: (GObject.Value | any)[]): void;
        /**
         * Retrieves the accessible parent for an accessible object.
         *
         * This function returns `NULL` for top level widgets.
         * @virtual
         */
        vfunc_get_accessible_parent(): Gtk.Accessible | null;
        /**
         * Retrieves the implementation for the given accessible object.
         * @virtual
         */
        vfunc_get_at_context(): Gtk.ATContext | null;
        /**
         * Queries the coordinates and dimensions of this accessible
         *
         * This functionality can be overridden by {@link Gtk.Accessible}
         * implementations, e.g. to get the bounds from an ignored
         * child widget.
         * @virtual
         */
        vfunc_get_bounds(): [boolean, number, number, number, number];
        /**
         * Retrieves the first accessible child of an accessible object.
         * @virtual
         */
        vfunc_get_first_accessible_child(): Gtk.Accessible | null;
        /**
         * Retrieves the next accessible sibling of an accessible object
         * @virtual
         */
        vfunc_get_next_accessible_sibling(): Gtk.Accessible | null;
        /**
         * Queries a platform state, such as focus.
         *
         * This functionality can be overridden by {@link Gtk.Accessible}
         * implementations, e.g. to get platform state from an ignored
         * child widget, as is the case for {@link Gtk.Text} wrappers.
         * @param state platform state to query
         * @virtual
         */
        vfunc_get_platform_state(state: Gtk.AccessiblePlatformState): boolean;
        /**
         * Gets the ID of the `buildable` object.
         *
         * {@link Gtk.Builder} sets the name based on the ID attribute
         * of the `<object>` tag used to construct the `buildable`.
         * @returns the ID of the buildable object
         */
        get_buildable_id(): string | null;
        /**
         * Adds a child to `buildable`. `type` is an optional string
         * describing how the child should be added.
         * @param builder a {@link Gtk.Builder}
         * @param child child to add
         * @param type kind of child or `null`
         * @virtual
         */
        vfunc_add_child(builder: Gtk.Builder, child: GObject.Object, type?: string | null): void;
        /**
         * Similar to `gtk_buildable_parser_finished()` but is
         * called once for each custom tag handled by the `buildable`.
         * @param builder a {@link Gtk.Builder}
         * @param child child object or `null` for non-child tags
         * @param tagname the name of the tag
         * @param data user data created in custom_tag_start
         * @virtual
         */
        vfunc_custom_finished(
            builder: Gtk.Builder,
            child: GObject.Object | null,
            tagname: string,
            data?: any | null,
        ): void;
        /**
         * Called at the end of each custom element handled by
         * the buildable.
         * @param builder {@link Gtk.Builder} used to construct this object
         * @param child child object or `null` for non-child tags
         * @param tagname name of tag
         * @param data user data that will be passed in to parser functions
         * @virtual
         */
        vfunc_custom_tag_end(
            builder: Gtk.Builder,
            child: GObject.Object | null,
            tagname: string,
            data?: any | null,
        ): void;
        /**
         * Called for each unknown element under `<child>`.
         * @param builder a {@link Gtk.Builder} used to construct this object
         * @param child child object or `null` for non-child tags
         * @param tagname name of tag
         * @virtual
         */
        vfunc_custom_tag_start(
            builder: Gtk.Builder,
            child: GObject.Object | null,
            tagname: string,
        ): [boolean, Gtk.BuildableParser, any];
        /**
         * The getter corresponding to `set_id`. Implement this
         *   if you implement `set_id`.
         * @virtual
         */
        vfunc_get_id(): string;
        /**
         * Retrieves the internal child called `childname` of the `buildable` object.
         * @param builder a {@link Gtk.Builder}
         * @param childname name of child
         * @virtual
         */
        vfunc_get_internal_child<T = GObject.Object>(builder: Gtk.Builder, childname: string): T;
        /**
         * Called when a builder finishes the parsing
         *  of a UI definition. It is normally not necessary to implement this,
         *  unless you need to perform special cleanup actions. {@link Gtk.Window} sets
         *  the {@link Gtk.Widget.visible} property here.
         * @param builder
         * @virtual
         */
        vfunc_parser_finished(builder: Gtk.Builder): void;
        /**
         * Sets a property of a buildable object.
         *  It is normally not necessary to implement this, `g_object_set_property()`
         *  is used by default. {@link Gtk.Window} implements this to delay showing itself
         *  (i.e. setting the {@link Gtk.Widget.visible} property) until the whole
         *  interface is created.
         * @param builder
         * @param name
         * @param value
         * @virtual
         */
        vfunc_set_buildable_property(builder: Gtk.Builder, name: string, value: GObject.Value | any): void;
        /**
         * Stores the id attribute given in the {@link Gtk.Builder} UI definition.
         *   {@link Gtk.Widget} stores the name as object data. Implement this method if your
         *   object has some notion of “ID” and it makes sense to map the XML id
         *   attribute to it.
         * @param id
         * @virtual
         */
        vfunc_set_id(id: string): void;
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

    namespace Notification {
        // Signal signatures
        interface SignalSignatures extends Object.SignalSignatures {
            /**
             * The ::executed signal is emitted after the primary or secondary
             * {@link Gtd.Notification} action is executed.
             * @signal
             */
            executed: () => void;
            'notify::has-dismissal-action': (pspec: GObject.ParamSpec) => void;
            'notify::has-secondary-action': (pspec: GObject.ParamSpec) => void;
            'notify::secondary-action-name': (pspec: GObject.ParamSpec) => void;
            'notify::text': (pspec: GObject.ParamSpec) => void;
            'notify::loading': (pspec: GObject.ParamSpec) => void;
            'notify::uid': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Object.ConstructorProps {
            has_dismissal_action: boolean;
            hasDismissalAction: boolean;
            has_secondary_action: boolean;
            hasSecondaryAction: boolean;
            secondary_action_name: string;
            secondaryActionName: string;
            text: string;
        }
    }

    /**
     * @gir-type Class
     */
    class Notification extends Object {
        static $gtype: GObject.GType<Notification>;

        // Properties

        get has_dismissal_action(): boolean;
        get hasDismissalAction(): boolean;
        get has_secondary_action(): boolean;
        get hasSecondaryAction(): boolean;
        get secondary_action_name(): string;
        set secondary_action_name(val: string);
        get secondaryActionName(): string;
        set secondaryActionName(val: string);
        get text(): string;
        set text(val: string);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Notification.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Notification.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](text?: string | null): Notification;
        // Conflicted with Gtd.Object.new

        static ['new'](...args: never[]): any;

        // Signals

        /** @signal */
        connect<K extends keyof Notification.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Notification.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Notification.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Notification.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Notification.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Notification.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Executes the dismissal action of `notification` if any.
         */
        execute_dismissal_action(): void;
        /**
         * Executes the secondary action of `notification` if any.
         */
        execute_secondary_action(): void;
        /**
         * Gets the text of `notification`.
         * @returns the text of `notification`.
         */
        get_text(): string;
        /**
         * Sets the dismissal action of `notification`
         * @param func the dismissal action function
         */
        set_dismissal_action(func?: NotificationActionFunc | null): void;
        /**
         * Sets the secondary action of `notification`, which is triggered
         * only on user explicit input.
         * @param name the name of the secondary action
         * @param func the secondary action function
         */
        set_secondary_action(name: string, func?: NotificationActionFunc | null): void;
        /**
         * Sets the text of `notification` to `text`.
         * @param text the user-visible text of `notification`
         */
        set_text(text: string): void;
    }

    namespace Object {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::loading': (pspec: GObject.ParamSpec) => void;
            'notify::uid': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            loading: boolean;
            uid: string;
        }
    }

    /**
     * @gir-type Class
     */
    class Object extends GObject.Object {
        static $gtype: GObject.GType<Object>;

        // Properties

        get loading(): boolean;
        get uid(): string;
        set uid(val: string);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Object.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Object.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](uid: string): Object;

        // Signals

        /** @signal */
        connect<K extends keyof Object.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Object.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Object.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Object.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Object.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Object.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods

        /**
         * Retrieves the internal unique identifier of `object`.
         * @virtual
         */
        vfunc_get_uid(): string;
        /**
         * Sets the unique identifier of `object` to `uid`. Only
         * a `GtdBackend` should do it.
         * @param uid the unique identifier of `object`
         * @virtual
         */
        vfunc_set_uid(uid: string): void;

        // Methods

        /**
         * Whether `object` is loading or not.
         * @returns `true` if `object` is loading, `false` otherwise.
         */
        get_loading(): boolean;
        /**
         * Retrieves the internal unique identifier of `object`.
         * @returns the unique identifier of `object`. Do not free after usage.
         */
        get_uid(): string;
        /**
         * Decreases the loading counter of `object` by one. The object is marked
         * as loading while the loading counter is greater than zero.
         *
         * It is a programming error to pop more times then push the loading the
         * counter.
         */
        pop_loading(): void;
        /**
         * Increases the loading counter of `object` by one. The object is marked
         * as loading while the loading counter is greater than zero.
         */
        push_loading(): void;
        /**
         * Sets the unique identifier of `object` to `uid`. Only
         * a `GtdBackend` should do it.
         * @param uid the unique identifier of `object`
         */
        set_uid(uid: string): void;
    }

    namespace OmniArea {
        // Signal signatures
        interface SignalSignatures extends Widget.SignalSignatures {
            'notify::pivot-point': (pspec: GObject.ParamSpec) => void;
            'notify::rotation-x': (pspec: GObject.ParamSpec) => void;
            'notify::rotation-y': (pspec: GObject.ParamSpec) => void;
            'notify::rotation-z': (pspec: GObject.ParamSpec) => void;
            'notify::scale-x': (pspec: GObject.ParamSpec) => void;
            'notify::scale-y': (pspec: GObject.ParamSpec) => void;
            'notify::scale-z': (pspec: GObject.ParamSpec) => void;
            'notify::translation-x': (pspec: GObject.ParamSpec) => void;
            'notify::translation-y': (pspec: GObject.ParamSpec) => void;
            'notify::translation-z': (pspec: GObject.ParamSpec) => void;
            'notify::can-focus': (pspec: GObject.ParamSpec) => void;
            'notify::can-target': (pspec: GObject.ParamSpec) => void;
            'notify::css-classes': (pspec: GObject.ParamSpec) => void;
            'notify::css-name': (pspec: GObject.ParamSpec) => void;
            'notify::cursor': (pspec: GObject.ParamSpec) => void;
            'notify::focus-on-click': (pspec: GObject.ParamSpec) => void;
            'notify::focusable': (pspec: GObject.ParamSpec) => void;
            'notify::halign': (pspec: GObject.ParamSpec) => void;
            'notify::has-default': (pspec: GObject.ParamSpec) => void;
            'notify::has-focus': (pspec: GObject.ParamSpec) => void;
            'notify::has-tooltip': (pspec: GObject.ParamSpec) => void;
            'notify::height-request': (pspec: GObject.ParamSpec) => void;
            'notify::hexpand': (pspec: GObject.ParamSpec) => void;
            'notify::hexpand-set': (pspec: GObject.ParamSpec) => void;
            'notify::layout-manager': (pspec: GObject.ParamSpec) => void;
            'notify::limit-events': (pspec: GObject.ParamSpec) => void;
            'notify::margin-bottom': (pspec: GObject.ParamSpec) => void;
            'notify::margin-end': (pspec: GObject.ParamSpec) => void;
            'notify::margin-start': (pspec: GObject.ParamSpec) => void;
            'notify::margin-top': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::opacity': (pspec: GObject.ParamSpec) => void;
            'notify::overflow': (pspec: GObject.ParamSpec) => void;
            'notify::parent': (pspec: GObject.ParamSpec) => void;
            'notify::receives-default': (pspec: GObject.ParamSpec) => void;
            'notify::root': (pspec: GObject.ParamSpec) => void;
            'notify::scale-factor': (pspec: GObject.ParamSpec) => void;
            'notify::sensitive': (pspec: GObject.ParamSpec) => void;
            'notify::tooltip-markup': (pspec: GObject.ParamSpec) => void;
            'notify::tooltip-text': (pspec: GObject.ParamSpec) => void;
            'notify::valign': (pspec: GObject.ParamSpec) => void;
            'notify::vexpand': (pspec: GObject.ParamSpec) => void;
            'notify::vexpand-set': (pspec: GObject.ParamSpec) => void;
            'notify::visible': (pspec: GObject.ParamSpec) => void;
            'notify::width-request': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps
            extends
                Widget.ConstructorProps,
                Gtk.Accessible.ConstructorProps,
                Gtk.Buildable.ConstructorProps,
                Gtk.ConstraintTarget.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class OmniArea extends Widget implements Gtk.Accessible, Gtk.Buildable, Gtk.ConstraintTarget {
        static $gtype: GObject.GType<OmniArea>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: OmniArea.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<OmniArea.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof OmniArea.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, OmniArea.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof OmniArea.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, OmniArea.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof OmniArea.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<OmniArea.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Pushes a new message to `self`.
         * @param id an identifier for this notification
         * @param text user visible text of the notification
         * @param icon a {@link Gio.Icon}
         */
        push_message(id: string, text: string, icon?: Gio.Icon | null): void;
        /**
         * Withdraws a message from `self`. If a message with `id` doesn't
         * exist, nothing happens.
         * @param id an identifier for this notification
         */
        withdraw_message(id: string): void;
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

    namespace ProviderPopover {
        // Signal signatures
        interface SignalSignatures extends Gtk.Popover.SignalSignatures {
            'notify::autohide': (pspec: GObject.ParamSpec) => void;
            'notify::cascade-popdown': (pspec: GObject.ParamSpec) => void;
            'notify::child': (pspec: GObject.ParamSpec) => void;
            'notify::default-widget': (pspec: GObject.ParamSpec) => void;
            'notify::has-arrow': (pspec: GObject.ParamSpec) => void;
            'notify::mnemonics-visible': (pspec: GObject.ParamSpec) => void;
            'notify::pointing-to': (pspec: GObject.ParamSpec) => void;
            'notify::position': (pspec: GObject.ParamSpec) => void;
            'notify::can-focus': (pspec: GObject.ParamSpec) => void;
            'notify::can-target': (pspec: GObject.ParamSpec) => void;
            'notify::css-classes': (pspec: GObject.ParamSpec) => void;
            'notify::css-name': (pspec: GObject.ParamSpec) => void;
            'notify::cursor': (pspec: GObject.ParamSpec) => void;
            'notify::focus-on-click': (pspec: GObject.ParamSpec) => void;
            'notify::focusable': (pspec: GObject.ParamSpec) => void;
            'notify::halign': (pspec: GObject.ParamSpec) => void;
            'notify::has-default': (pspec: GObject.ParamSpec) => void;
            'notify::has-focus': (pspec: GObject.ParamSpec) => void;
            'notify::has-tooltip': (pspec: GObject.ParamSpec) => void;
            'notify::height-request': (pspec: GObject.ParamSpec) => void;
            'notify::hexpand': (pspec: GObject.ParamSpec) => void;
            'notify::hexpand-set': (pspec: GObject.ParamSpec) => void;
            'notify::layout-manager': (pspec: GObject.ParamSpec) => void;
            'notify::limit-events': (pspec: GObject.ParamSpec) => void;
            'notify::margin-bottom': (pspec: GObject.ParamSpec) => void;
            'notify::margin-end': (pspec: GObject.ParamSpec) => void;
            'notify::margin-start': (pspec: GObject.ParamSpec) => void;
            'notify::margin-top': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::opacity': (pspec: GObject.ParamSpec) => void;
            'notify::overflow': (pspec: GObject.ParamSpec) => void;
            'notify::parent': (pspec: GObject.ParamSpec) => void;
            'notify::receives-default': (pspec: GObject.ParamSpec) => void;
            'notify::root': (pspec: GObject.ParamSpec) => void;
            'notify::scale-factor': (pspec: GObject.ParamSpec) => void;
            'notify::sensitive': (pspec: GObject.ParamSpec) => void;
            'notify::tooltip-markup': (pspec: GObject.ParamSpec) => void;
            'notify::tooltip-text': (pspec: GObject.ParamSpec) => void;
            'notify::valign': (pspec: GObject.ParamSpec) => void;
            'notify::vexpand': (pspec: GObject.ParamSpec) => void;
            'notify::vexpand-set': (pspec: GObject.ParamSpec) => void;
            'notify::visible': (pspec: GObject.ParamSpec) => void;
            'notify::width-request': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps
            extends
                Gtk.Popover.ConstructorProps,
                Gtk.Accessible.ConstructorProps,
                Gtk.Buildable.ConstructorProps,
                Gtk.ConstraintTarget.ConstructorProps,
                Gtk.Native.ConstructorProps,
                Gtk.ShortcutManager.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class ProviderPopover
        extends Gtk.Popover
        implements Gtk.Accessible, Gtk.Buildable, Gtk.ConstraintTarget, Gtk.Native, Gtk.ShortcutManager
    {
        static $gtype: GObject.GType<ProviderPopover>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: ProviderPopover.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<ProviderPopover.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): ProviderPopover;

        // Signals

        /** @signal */
        connect<K extends keyof ProviderPopover.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ProviderPopover.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof ProviderPopover.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ProviderPopover.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof ProviderPopover.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<ProviderPopover.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;
        /**
         * Whether the widget or any of its descendents can accept
         * the input focus.
         *
         * This property is meant to be set by widget implementations,
         * typically in their instance init function.
         * @category Inherited from Gtk.Widget
         */
        get can_focus(): boolean;
        set can_focus(val: boolean);
        /**
         * Whether the widget or any of its descendents can accept
         * the input focus.
         *
         * This property is meant to be set by widget implementations,
         * typically in their instance init function.
         * @category Inherited from Gtk.Widget
         */
        get canFocus(): boolean;
        set canFocus(val: boolean);
        /**
         * Whether the widget can receive pointer events.
         * @category Inherited from Gtk.Widget
         */
        get can_target(): boolean;
        set can_target(val: boolean);
        /**
         * Whether the widget can receive pointer events.
         * @category Inherited from Gtk.Widget
         */
        get canTarget(): boolean;
        set canTarget(val: boolean);
        /**
         * A list of css classes applied to this widget.
         * @category Inherited from Gtk.Widget
         */
        get css_classes(): string[];
        set css_classes(val: string[]);
        /**
         * A list of css classes applied to this widget.
         * @category Inherited from Gtk.Widget
         */
        get cssClasses(): string[];
        set cssClasses(val: string[]);
        /**
         * The name of this widget in the CSS tree.
         *
         * This property is meant to be set by widget implementations,
         * typically in their instance init function.
         * @category Inherited from Gtk.Widget
         */
        get css_name(): string;
        /**
         * The name of this widget in the CSS tree.
         *
         * This property is meant to be set by widget implementations,
         * typically in their instance init function.
         * @category Inherited from Gtk.Widget
         */
        get cssName(): string;
        /**
         * The cursor used by `widget`.
         * @category Inherited from Gtk.Widget
         */
        get cursor(): Gdk.Cursor;
        set cursor(val: Gdk.Cursor);
        /**
         * Whether the widget should grab focus when it is clicked with the mouse.
         *
         * This property is only relevant for widgets that can take focus.
         * @category Inherited from Gtk.Widget
         */
        get focus_on_click(): boolean;
        set focus_on_click(val: boolean);
        /**
         * Whether the widget should grab focus when it is clicked with the mouse.
         *
         * This property is only relevant for widgets that can take focus.
         * @category Inherited from Gtk.Widget
         */
        get focusOnClick(): boolean;
        set focusOnClick(val: boolean);
        /**
         * Whether this widget itself will accept the input focus.
         * @category Inherited from Gtk.Widget
         */
        get focusable(): boolean;
        set focusable(val: boolean);
        /**
         * How to distribute horizontal space if widget gets extra space.
         * @category Inherited from Gtk.Widget
         */
        get halign(): Gtk.Align;
        set halign(val: Gtk.Align);
        /**
         * Whether the widget is the default widget.
         * @category Inherited from Gtk.Widget
         */
        get has_default(): boolean;
        /**
         * Whether the widget is the default widget.
         * @category Inherited from Gtk.Widget
         */
        get hasDefault(): boolean;
        /**
         * Whether the widget has the input focus.
         * @category Inherited from Gtk.Widget
         */
        get has_focus(): boolean;
        /**
         * Whether the widget has the input focus.
         * @category Inherited from Gtk.Widget
         */
        get hasFocus(): boolean;
        /**
         * Enables or disables the emission of the `Gtk.Widget::query-tooltip`
         * signal on `widget`.
         *
         * A true value indicates that `widget` can have a tooltip, in this case
         * the widget will be queried using `Gtk.Widget::query-tooltip` to
         * determine whether it will provide a tooltip or not.
         * @category Inherited from Gtk.Widget
         */
        get has_tooltip(): boolean;
        set has_tooltip(val: boolean);
        /**
         * Enables or disables the emission of the `Gtk.Widget::query-tooltip`
         * signal on `widget`.
         *
         * A true value indicates that `widget` can have a tooltip, in this case
         * the widget will be queried using `Gtk.Widget::query-tooltip` to
         * determine whether it will provide a tooltip or not.
         * @category Inherited from Gtk.Widget
         */
        get hasTooltip(): boolean;
        set hasTooltip(val: boolean);
        /**
         * Overrides for height request of the widget.
         *
         * If this is -1, the natural request will be used.
         * @category Inherited from Gtk.Widget
         */
        get height_request(): number;
        set height_request(val: number);
        /**
         * Overrides for height request of the widget.
         *
         * If this is -1, the natural request will be used.
         * @category Inherited from Gtk.Widget
         */
        get heightRequest(): number;
        set heightRequest(val: number);
        /**
         * Whether to expand horizontally.
         * @category Inherited from Gtk.Widget
         */
        get hexpand(): boolean;
        set hexpand(val: boolean);
        /**
         * Whether to use the `hexpand` property.
         * @category Inherited from Gtk.Widget
         */
        get hexpand_set(): boolean;
        set hexpand_set(val: boolean);
        /**
         * Whether to use the `hexpand` property.
         * @category Inherited from Gtk.Widget
         */
        get hexpandSet(): boolean;
        set hexpandSet(val: boolean);
        /**
         * The {@link Gtk.LayoutManager} instance to use to compute
         * the preferred size of the widget, and allocate its children.
         *
         * This property is meant to be set by widget implementations,
         * typically in their instance init function.
         * @category Inherited from Gtk.Widget
         */
        get layout_manager(): Gtk.LayoutManager;
        set layout_manager(val: Gtk.LayoutManager);
        /**
         * The {@link Gtk.LayoutManager} instance to use to compute
         * the preferred size of the widget, and allocate its children.
         *
         * This property is meant to be set by widget implementations,
         * typically in their instance init function.
         * @category Inherited from Gtk.Widget
         */
        get layoutManager(): Gtk.LayoutManager;
        set layoutManager(val: Gtk.LayoutManager);
        /**
         * Makes this widget act like a modal dialog, with respect to
         * event delivery.
         *
         * Global event controllers will not handle events with targets
         * inside the widget, unless they are set up to ignore propagation
         * limits. See {@link Gtk.EventController.set_propagation_limit}.
         * @since 4.18
         * @category Inherited from Gtk.Widget
         */
        get limit_events(): boolean;
        set limit_events(val: boolean);
        /**
         * Makes this widget act like a modal dialog, with respect to
         * event delivery.
         *
         * Global event controllers will not handle events with targets
         * inside the widget, unless they are set up to ignore propagation
         * limits. See {@link Gtk.EventController.set_propagation_limit}.
         * @since 4.18
         * @category Inherited from Gtk.Widget
         */
        get limitEvents(): boolean;
        set limitEvents(val: boolean);
        /**
         * Margin on bottom side of widget.
         *
         * This property adds margin outside of the widget's normal size
         * request, the margin will be added in addition to the size from
         * {@link Gtk.Widget.set_size_request} for example.
         * @category Inherited from Gtk.Widget
         */
        get margin_bottom(): number;
        set margin_bottom(val: number);
        /**
         * Margin on bottom side of widget.
         *
         * This property adds margin outside of the widget's normal size
         * request, the margin will be added in addition to the size from
         * {@link Gtk.Widget.set_size_request} for example.
         * @category Inherited from Gtk.Widget
         */
        get marginBottom(): number;
        set marginBottom(val: number);
        /**
         * Margin on end of widget, horizontally.
         *
         * This property supports left-to-right and right-to-left text
         * directions.
         *
         * This property adds margin outside of the widget's normal size
         * request, the margin will be added in addition to the size from
         * {@link Gtk.Widget.set_size_request} for example.
         * @category Inherited from Gtk.Widget
         */
        get margin_end(): number;
        set margin_end(val: number);
        /**
         * Margin on end of widget, horizontally.
         *
         * This property supports left-to-right and right-to-left text
         * directions.
         *
         * This property adds margin outside of the widget's normal size
         * request, the margin will be added in addition to the size from
         * {@link Gtk.Widget.set_size_request} for example.
         * @category Inherited from Gtk.Widget
         */
        get marginEnd(): number;
        set marginEnd(val: number);
        /**
         * Margin on start of widget, horizontally.
         *
         * This property supports left-to-right and right-to-left text
         * directions.
         *
         * This property adds margin outside of the widget's normal size
         * request, the margin will be added in addition to the size from
         * {@link Gtk.Widget.set_size_request} for example.
         * @category Inherited from Gtk.Widget
         */
        get margin_start(): number;
        set margin_start(val: number);
        /**
         * Margin on start of widget, horizontally.
         *
         * This property supports left-to-right and right-to-left text
         * directions.
         *
         * This property adds margin outside of the widget's normal size
         * request, the margin will be added in addition to the size from
         * {@link Gtk.Widget.set_size_request} for example.
         * @category Inherited from Gtk.Widget
         */
        get marginStart(): number;
        set marginStart(val: number);
        /**
         * Margin on top side of widget.
         *
         * This property adds margin outside of the widget's normal size
         * request, the margin will be added in addition to the size from
         * {@link Gtk.Widget.set_size_request} for example.
         * @category Inherited from Gtk.Widget
         */
        get margin_top(): number;
        set margin_top(val: number);
        /**
         * Margin on top side of widget.
         *
         * This property adds margin outside of the widget's normal size
         * request, the margin will be added in addition to the size from
         * {@link Gtk.Widget.set_size_request} for example.
         * @category Inherited from Gtk.Widget
         */
        get marginTop(): number;
        set marginTop(val: number);
        /**
         * The name of the widget.
         * @category Inherited from Gtk.Widget
         */
        get name(): string;
        set name(val: string);
        /**
         * The requested opacity of the widget.
         * @category Inherited from Gtk.Widget
         */
        get opacity(): number;
        set opacity(val: number);
        /**
         * How content outside the widget's content area is treated.
         *
         * This property is meant to be set by widget implementations,
         * typically in their instance init function.
         * @category Inherited from Gtk.Widget
         */
        get overflow(): Gtk.Overflow;
        set overflow(val: Gtk.Overflow);
        /**
         * The parent widget of this widget.
         * @category Inherited from Gtk.Widget
         */
        get parent(): Gtk.Widget;
        /**
         * Whether the widget will receive the default action when it is focused.
         * @category Inherited from Gtk.Widget
         */
        get receives_default(): boolean;
        set receives_default(val: boolean);
        /**
         * Whether the widget will receive the default action when it is focused.
         * @category Inherited from Gtk.Widget
         */
        get receivesDefault(): boolean;
        set receivesDefault(val: boolean);
        /**
         * The {@link Gtk.Root} widget of the widget tree containing this widget.
         *
         * This will be `NULL` if the widget is not contained in a root widget.
         * @category Inherited from Gtk.Widget
         */
        get root(): Gtk.Root;
        /**
         * The scale factor of the widget.
         * @category Inherited from Gtk.Widget
         */
        get scale_factor(): number;
        /**
         * The scale factor of the widget.
         * @category Inherited from Gtk.Widget
         */
        get scaleFactor(): number;
        /**
         * Whether the widget responds to input.
         * @category Inherited from Gtk.Widget
         */
        get sensitive(): boolean;
        set sensitive(val: boolean);
        /**
         * Sets the text of tooltip to be the given string, which is marked up
         * with Pango markup.
         *
         * Also see {@link Gtk.Tooltip.set_markup}.
         *
         * This is a convenience property which will take care of getting the
         * tooltip shown if the given string is not `NULL`:
         * {@link Gtk.Widget.has_tooltip} will automatically be set to true
         * and there will be taken care of `Gtk.Widget::query-tooltip` in
         * the default signal handler.
         *
         * Note that if both {@link Gtk.Widget.tooltip_text} and
         * {@link Gtk.Widget.tooltip_markup} are set, the last one wins.
         * @category Inherited from Gtk.Widget
         */
        get tooltip_markup(): string;
        set tooltip_markup(val: string);
        /**
         * Sets the text of tooltip to be the given string, which is marked up
         * with Pango markup.
         *
         * Also see {@link Gtk.Tooltip.set_markup}.
         *
         * This is a convenience property which will take care of getting the
         * tooltip shown if the given string is not `NULL`:
         * {@link Gtk.Widget.has_tooltip} will automatically be set to true
         * and there will be taken care of `Gtk.Widget::query-tooltip` in
         * the default signal handler.
         *
         * Note that if both {@link Gtk.Widget.tooltip_text} and
         * {@link Gtk.Widget.tooltip_markup} are set, the last one wins.
         * @category Inherited from Gtk.Widget
         */
        get tooltipMarkup(): string;
        set tooltipMarkup(val: string);
        /**
         * Sets the text of tooltip to be the given string.
         *
         * Also see {@link Gtk.Tooltip.set_text}.
         *
         * This is a convenience property which will take care of getting the
         * tooltip shown if the given string is not `NULL`:
         * {@link Gtk.Widget.has_tooltip} will automatically be set to true
         * and there will be taken care of `Gtk.Widget::query-tooltip` in
         * the default signal handler.
         *
         * Note that if both {@link Gtk.Widget.tooltip_text} and
         * {@link Gtk.Widget.tooltip_markup} are set, the last one wins.
         * @category Inherited from Gtk.Widget
         */
        get tooltip_text(): string;
        set tooltip_text(val: string);
        /**
         * Sets the text of tooltip to be the given string.
         *
         * Also see {@link Gtk.Tooltip.set_text}.
         *
         * This is a convenience property which will take care of getting the
         * tooltip shown if the given string is not `NULL`:
         * {@link Gtk.Widget.has_tooltip} will automatically be set to true
         * and there will be taken care of `Gtk.Widget::query-tooltip` in
         * the default signal handler.
         *
         * Note that if both {@link Gtk.Widget.tooltip_text} and
         * {@link Gtk.Widget.tooltip_markup} are set, the last one wins.
         * @category Inherited from Gtk.Widget
         */
        get tooltipText(): string;
        set tooltipText(val: string);
        /**
         * How to distribute vertical space if widget gets extra space.
         * @category Inherited from Gtk.Widget
         */
        get valign(): Gtk.Align;
        set valign(val: Gtk.Align);
        /**
         * Whether to expand vertically.
         * @category Inherited from Gtk.Widget
         */
        get vexpand(): boolean;
        set vexpand(val: boolean);
        /**
         * Whether to use the `vexpand` property.
         * @category Inherited from Gtk.Widget
         */
        get vexpand_set(): boolean;
        set vexpand_set(val: boolean);
        /**
         * Whether to use the `vexpand` property.
         * @category Inherited from Gtk.Widget
         */
        get vexpandSet(): boolean;
        set vexpandSet(val: boolean);
        /**
         * Whether the widget is visible.
         * @category Inherited from Gtk.Widget
         */
        get visible(): boolean;
        set visible(val: boolean);
        /**
         * Overrides for width request of the widget.
         *
         * If this is -1, the natural request will be used.
         * @category Inherited from Gtk.Widget
         */
        get width_request(): number;
        set width_request(val: number);
        /**
         * Overrides for width request of the widget.
         *
         * If this is -1, the natural request will be used.
         * @category Inherited from Gtk.Widget
         */
        get widthRequest(): number;
        set widthRequest(val: number);
        /**
         * Returns the renderer that is used for this {@link Gtk.Native}.
         * @returns the renderer for `self`
         */
        get_renderer(): Gsk.Renderer | null;
        /**
         * Returns the surface of this {@link Gtk.Native}.
         * @returns the surface of `self`
         */
        get_surface(): Gdk.Surface | null;
        /**
         * Retrieves the surface transform of `self`.
         *
         * This is the translation from `self`'s surface coordinates into
         * `self`'s widget coordinates.
         */
        get_surface_transform(): [number, number];
        /**
         * Realizes a {@link Gtk.Native}.
         *
         * This should only be used by subclasses.
         */
        realize(): void;
        /**
         * Unrealizes a {@link Gtk.Native}.
         *
         * This should only be used by subclasses.
         */
        unrealize(): void;
        /**
         * Add a {@link Gtk.ShortcutController} to be managed.
         * @param controller
         * @virtual
         */
        vfunc_add_controller(controller: Gtk.ShortcutController): void;
        /**
         * Remove a {@link Gtk.ShortcutController} that had previously
         *   been added
         * @param controller
         * @virtual
         */
        vfunc_remove_controller(controller: Gtk.ShortcutController): void;
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
        /**
         * Enables or disables an action installed with
         * {@link Gtk.WidgetClass.install_action}.
         * @param action_name action name, such as "clipboard.paste"
         * @param enabled whether the action is now enabled
         */
        action_set_enabled(action_name: string, enabled: boolean): void;
        /**
         * Activates the widget.
         *
         * The activation will emit the signal set using
         * {@link Gtk.WidgetClass.set_activate_signal}
         * during class initialization.
         *
         * Activation is what happens when you press <kbd>Enter</kbd>
         * on a widget.
         *
         * If you wish to handle the activation keybinding yourself,
         * it is recommended to use {@link Gtk.WidgetClass.add_shortcut}
         * with an action created with {@link Gtk.SignalAction.new}.
         *
         * If `widget` is not activatable, the function returns false.
         * @returns true if the widget was activated
         */
        activate(): boolean;
        /**
         * Activates an action for the widget.
         *
         * The action is looked up in the action groups associated with
         * `widget` and its ancestors.
         *
         * If the action is in an action group added with
         * {@link Gtk.Widget.insert_action_group}, the `name` is expected
         * to be prefixed with the prefix that was used when the group was
         * inserted.
         *
         * The arguments must match the actions expected parameter type,
         * as returned by {@link Gio.Action.get_parameter_type}.
         * @param name the name of the action to activate
         * @param args parameters to use
         * @returns true if the action was activated
         */
        activate_action(name: string, args?: GLib.Variant | null): boolean;
        /**
         * Activates the `default.activate` action for the widget.
         *
         * The action is looked up in the same was as for
         * {@link Gtk.Widget.activate_action}.
         */
        activate_default(): void;
        /**
         * Adds an event controller to the widget.
         *
         * The event controllers of a widget handle the events that are
         * propagated to the widget.
         *
         * You will usually want to call this function right after
         * creating any kind of {@link Gtk.EventController}.
         * @param controller an event controller that hasn't been   added to a widget yet
         */
        add_controller(controller: Gtk.EventController): void;
        /**
         * Adds a style class to the widget.
         *
         * After calling this function, the widget’s style will match
         * for `css_class`, according to CSS matching rules.
         *
         * Use {@link Gtk.Widget.remove_css_class} to remove the
         * style again.
         * @param css_class style class to add to `widget`, without the leading period
         */
        add_css_class(css_class: string): void;
        /**
         * Adds a widget to the list of mnemonic labels for this widget.
         *
         * See {@link Gtk.Widget.list_mnemonic_labels}.
         *
         * Note that the list of mnemonic labels for the widget is cleared
         * when the widget is destroyed, so the caller must make sure
         * to update its internal state at this point as well.
         * @param label a widget that acts as a mnemonic label for `widget`
         */
        add_mnemonic_label(label: Gtk.Widget): void;
        /**
         * Queues an animation frame update and adds a callback to be called
         * before each frame.
         *
         * Until the tick callback is removed, it will be called frequently
         * (usually at the frame rate of the output device or as quickly as
         * the application can be repainted, whichever is slower). For this
         * reason, is most suitable for handling graphics that change every
         * frame or every few frames.
         *
         * The tick callback does not automatically imply a relayout or repaint.
         * If you want a repaint or relayout, and aren’t changing widget properties
         * that would trigger that (for example, changing the text of a label),
         * then you will have to call {@link Gtk.Widget.queue_resize} or
         * {@link Gtk.Widget.queue_draw} yourself.
         *
         * {@link Gdk.FrameClock.get_frame_time} should generally be used
         * for timing continuous animations and
         * {@link Gdk.FrameTimings.get_predicted_presentation_time} should be
         * used if you are trying to display isolated frames at particular times.
         *
         * This is a more convenient alternative to connecting directly to the
         * `Gdk.FrameClock::update` signal of the frame clock, since you
         * don't have to worry about when a frame clock is assigned to a widget.
         *
         * To remove a tick callback, pass the ID that is returned by this function
         * to {@link Gtk.Widget.remove_tick_callback}.
         * @param callback function   to call for updating animations
         * @returns an ID for this callback
         */
        add_tick_callback(callback: Gtk.TickCallback): number;
        /**
         * Assigns size, position, (optionally) a baseline and transform
         * to a child widget.
         *
         * In this function, the allocation and baseline may be adjusted.
         * The given allocation will be forced to be bigger than the
         * widget's minimum size, as well as at least 0×0 in size.
         *
         * This function is only used by widget implementations.
         *
         * For a version that does not take a transform, see
         * {@link Gtk.Widget.size_allocate}.
         * @param width new width
         * @param height new height
         * @param baseline new baseline, or -1
         * @param transform transformation to be applied
         */
        allocate(width: number, height: number, baseline: number, transform?: Gsk.Transform | null): void;
        /**
         * Called by widgets as the user moves around the window using
         * keyboard shortcuts.
         *
         * The `direction` argument indicates what kind of motion is taking
         * place (up, down, left, right, tab forward, tab backward).
         *
         * This function calls the {@link Gtk.Widget.focus} virtual function;
         * widgets can override the virtual function in order to implement
         * appropriate focus behavior.
         *
         * The default `focus()` virtual function for a widget should return
         * true if moving in `direction` left the focus on a focusable location
         * inside that widget, and false if moving in `direction` moved the focus
         * outside the widget. When returning true, widgets normally call
         * {@link Gtk.Widget.grab_focus} to place the focus accordingly;
         * when returning false, they don’t modify the current focus location.
         *
         * This function is used by custom widget implementations; if you're
         * writing an app, you’d use {@link Gtk.Widget.grab_focus} to move
         * the focus to a particular widget.
         * @param direction direction of focus movement
         * @returns true if focus ended up inside `widget`
         */
        child_focus(direction: Gtk.DirectionType | null): boolean;
        /**
         * Computes the bounds for `widget` in the coordinate space of `target`.
         *
         * The bounds of widget are (the bounding box of) the region that it is
         * expected to draw in. See the [coordinate system](coordinates.html)
         * overview to learn more.
         *
         * If the operation is successful, true is returned. If `widget` has no
         * bounds or the bounds cannot be expressed in `target`'s coordinate space
         * (for example if both widgets are in different windows), false is
         * returned and `bounds` is set to the zero rectangle.
         *
         * It is valid for `widget` and `target` to be the same widget.
         * @param target the target widget
         * @returns true if the bounds could be computed
         */
        compute_bounds(target: Gtk.Widget): [boolean, Graphene.Rect];
        /**
         * Computes whether a parent widget should give this widget
         * extra space when possible.
         *
         * Widgets with children should check this, rather than looking at
         * {@link Gtk.Widget.get_hexpand} or {@link Gtk.Widget.get_vexpand}.
         *
         * This function already checks whether the widget is visible, so
         * visibility does not need to be checked separately. Non-visible
         * widgets are not expanded.
         *
         * The computed expand value uses either the expand setting explicitly
         * set on the widget itself, or, if none has been explicitly set,
         * the widget may expand if some of its children do.
         * @param orientation expand direction
         * @returns whether widget tree rooted here should be expanded
         */
        compute_expand(orientation: Gtk.Orientation | null): boolean;
        /**
         * Translates the given `point` in `widget`'s coordinates to coordinates
         * in `target`’s coordinate system.
         *
         * In order to perform this operation, both widgets must share a
         * a common ancestor. If that is not the case, `out_point` is set
         * to (0, 0) and false is returned.
         * @param target the widget to transform into
         * @param point a point in `widget`'s coordinate system
         * @returns true if `src_widget` and `dest_widget` have a common   ancestor, false otherwise
         */
        compute_point(target: Gtk.Widget, point: Graphene.Point): [boolean, Graphene.Point];
        /**
         * Computes a matrix suitable to describe a transformation from
         * `widget`'s coordinate system into `target`'s coordinate system.
         *
         * The transform can not be computed in certain cases, for example
         * when `widget` and `target` do not share a common ancestor. In that
         * case `out_transform` gets set to the identity matrix.
         *
         * To learn more about widget coordinate systems, see the coordinate
         * system [overview](coordinates.html).
         * @param target the target widget that the matrix will transform to
         * @returns true if the transform could be computed
         */
        compute_transform(target: Gtk.Widget): [boolean, Graphene.Matrix];
        /**
         * Tests if a given point is contained in the widget.
         *
         * The coordinates for (x, y) must be in widget coordinates, so
         * (0, 0) is assumed to be the top left of `widget`'s content area.
         * @param x X coordinate to test, relative to `widget`'s origin
         * @param y Y coordinate to test, relative to `widget`'s origin
         * @returns true if `widget` contains the point (x, y)
         */
        contains(x: number, y: number): boolean;
        /**
         * Creates a new {@link Pango.Context} that is configured for the widget.
         *
         * The {@link Pango.Context} will have the appropriate font map,
         * font options, font description, and base direction set.
         *
         * See also {@link Gtk.Widget.get_pango_context}.
         * @returns the new {@link Pango.Context}
         */
        create_pango_context(): Pango.Context;
        /**
         * Creates a new {@link Pango.Layout} that is configured for the widget.
         *
         * The {@link Pango.Layout} will have the appropriate font map,
         * font description, and base direction set.
         *
         * If you keep a {@link Pango.Layout} created in this way around,
         * you need to re-create it when the widgets {@link Pango.Context}
         * is replaced. This can be tracked by listening to changes
         * of the {@link Gtk.Widget.root} property on the widget.
         * @param text text to set on the layout
         * @returns the new {@link Pango.Layout}
         */
        create_pango_layout(text?: string | null): Pango.Layout;
        /**
         * Clears the template children for the widget.
         *
         * This function is the opposite of {@link Gtk.Widget.init_template},
         * and it is used to clear all the template children from a widget
         * instance. If you bound a template child to a field in the instance
         * structure, or in the instance private data structure, the field will
         * be set to `NULL` after this function returns.
         *
         * You should call this function inside the {@link GObject.Object.dispose}
         * implementation of any widget that called {@link Gtk.Widget.init_template}.
         * Typically, you will want to call this function last, right before
         * chaining up to the parent type's dispose implementation, e.g.
         *
         * ```c
         * static void
         * some_widget_dispose (GObject *gobject)
         * {
         *   SomeWidget *self = SOME_WIDGET (gobject);
         *
         *   // Clear the template data for SomeWidget
         *   gtk_widget_dispose_template (GTK_WIDGET (self), SOME_TYPE_WIDGET);
         *
         *   G_OBJECT_CLASS (some_widget_parent_class)->dispose (gobject);
         * }
         * ```
         * @param widget_type the type of the widget to finalize the template for
         */
        dispose_template(widget_type: GObject.GType): void;
        /**
         * Checks to see if a drag movement has passed the GTK drag threshold.
         * @param start_x X coordinate of start of drag
         * @param start_y Y coordinate of start of drag
         * @param current_x current X coordinate
         * @param current_y current Y coordinate
         * @returns true if the drag threshold has been passed
         */
        drag_check_threshold(start_x: number, start_y: number, current_x: number, current_y: number): boolean;
        /**
         * Notifies the user about an input-related error on the widget.
         *
         * If the {@link Gtk.Settings.gtk_error_bell} setting is true,
         * it calls {@link Gdk.Surface.beep}, otherwise it does nothing.
         *
         * Note that the effect of {@link Gdk.Surface.beep} can be configured
         * in many ways, depending on the windowing backend and the desktop
         * environment or window manager that is used.
         */
        error_bell(): void;
        /**
         * Returns the baseline that has currently been allocated to the widget.
         *
         * This function is intended to be used when implementing handlers
         * for the {@link Gtk.Widget.snapshot} function, and when allocating
         * child widgets in {@link Gtk.Widget.size_allocate}.
         * @returns the baseline of the `widget`, or -1 if none
         */
        get_allocated_baseline(): number;
        /**
         * Returns the height that has currently been allocated to the widget.
         *
         * To learn more about widget sizes, see the coordinate
         * system [overview](coordinates.html).
         * @returns the height of the `widget`
         */
        get_allocated_height(): number;
        /**
         * Returns the width that has currently been allocated to the widget.
         *
         * To learn more about widget sizes, see the coordinate
         * system [overview](coordinates.html).
         * @returns the width of the `widget`
         */
        get_allocated_width(): number;
        /**
         * Retrieves the widget’s allocation.
         *
         * Note, when implementing a layout widget: a widget’s allocation
         * will be its “adjusted” allocation, that is, the widget’s parent
         * typically calls {@link Gtk.Widget.size_allocate} with an allocation,
         * and that allocation is then adjusted (to handle margin
         * and alignment for example) before assignment to the widget.
         * {@link Gtk.Widget.get_allocation} returns the adjusted allocation that
         * was actually assigned to the widget. The adjusted allocation is
         * guaranteed to be completely contained within the
         * {@link Gtk.Widget.size_allocate} allocation, however.
         *
         * So a layout widget is guaranteed that its children stay inside
         * the assigned bounds, but not that they have exactly the bounds the
         * widget assigned.
         */
        get_allocation(): Gtk.Allocation;
        /**
         * Gets the first ancestor of the widget with type `widget_type`.
         *
         * For example, `gtk_widget_get_ancestor (widget, GTK_TYPE_BOX)`
         * gets the first {@link Gtk.Box} that’s an ancestor of `widget`. No
         * reference will be added to the returned widget; it should
         * not be unreferenced.
         *
         * Note that unlike {@link Gtk.Widget.is_ancestor}, this function
         * considers `widget` to be an ancestor of itself.
         * @param widget_type ancestor type
         * @returns the ancestor widget
         */
        get_ancestor(widget_type: GObject.GType): Gtk.Widget | null;
        /**
         * Returns the baseline that has currently been allocated to the widget.
         *
         * This function is intended to be used when implementing handlers
         * for the {@link Gtk.Widget.snapshot} function, and when allocating
         * child widgets in {@link Gtk.Widget.size_allocate}.
         * @returns the baseline of the `widget`, or -1 if none
         */
        get_baseline(): number;
        /**
         * Determines whether the input focus can enter the widget or any
         * of its children.
         *
         * See {@link Gtk.Widget.set_can_focus}.
         * @returns true if the input focus can enter `widget`
         */
        get_can_focus(): boolean;
        /**
         * Queries whether the widget can be the target of pointer events.
         * @returns true if `widget` can receive pointer events
         */
        get_can_target(): boolean;
        /**
         * Gets the value set with {@link Gtk.Widget.set_child_visible}.
         *
         * If you feel a need to use this function, your code probably
         * needs reorganization.
         *
         * This function is only useful for widget implementations
         * and should never be called by an application.
         * @returns true if the widget is mapped with the parent
         */
        get_child_visible(): boolean;
        /**
         * Gets the clipboard object for the widget.
         *
         * This is a utility function to get the clipboard object for the
         * display that `widget` is using.
         *
         * Note that this function always works, even when `widget` is not
         * realized yet.
         * @returns the appropriate clipboard object
         */
        get_clipboard(): Gdk.Clipboard;
        /**
         * Gets the current foreground color for the widget’s style.
         *
         * This function should only be used in snapshot
         * implementations that need to do custom drawing
         * with the foreground color.
         */
        get_color(): Gdk.RGBA;
        /**
         * Returns the list of style classes applied to the widget.
         * @returns a `NULL`-terminated list of   css classes currently applied to `widget`
         */
        get_css_classes(): string[];
        /**
         * Returns the CSS name of the widget.
         * @returns the CSS name
         */
        get_css_name(): string;
        /**
         * Gets the cursor set on the widget.
         *
         * See {@link Gtk.Widget.set_cursor} for details.
         * @returns the cursor   that is set on `widget`
         */
        get_cursor(): Gdk.Cursor | null;
        /**
         * Gets the reading direction for the widget.
         *
         * See {@link Gtk.Widget.set_direction}.
         * @returns the reading direction for the widget
         */
        get_direction(): Gtk.TextDirection;
        /**
         * Get the display for the window that the widget belongs to.
         *
         * This function can only be called after the widget has been
         * added to a widget hierarchy with a {@link Gtk.Root} at the top.
         *
         * In general, you should only create display-specific
         * resources when a widget has been realized, and you should
         * free those resources when the widget is unrealized.
         * @returns the display for this widget
         */
        get_display(): Gdk.Display;
        /**
         * Returns the widget’s first child.
         *
         * This function is primarily meant for widget implementations.
         * @returns the widget's first child
         */
        get_first_child(): Gtk.Widget | null;
        /**
         * Returns the focus child of the widget.
         * @returns the current focus   child of `widget`
         */
        get_focus_child(): Gtk.Widget | null;
        /**
         * Returns whether the widget should grab focus when it is clicked
         * with the mouse.
         *
         * See {@link Gtk.Widget.set_focus_on_click}.
         * @returns true if the widget should grab focus when it is   clicked with the mouse
         */
        get_focus_on_click(): boolean;
        /**
         * Determines whether the widget can own the input focus.
         *
         * See {@link Gtk.Widget.set_focusable}.
         * @returns true if `widget` can own the input focus
         */
        get_focusable(): boolean;
        /**
         * Gets the font map of the widget.
         *
         * See {@link Gtk.Widget.set_font_map}.
         * @returns the font map of `widget`
         */
        get_font_map(): Pango.FontMap | null;
        /**
         * Returns the `cairo_font_options_t` of the widget.
         *
         * Seee {@link Gtk.Widget.set_font_options}.
         * @returns the `cairo_font_options_t` of widget
         */
        get_font_options(): cairo.FontOptions | null;
        /**
         * Obtains the frame clock for a widget.
         *
         * The frame clock is a global “ticker” that can be used to drive
         * animations and repaints. The most common reason to get the frame
         * clock is to call {@link Gdk.FrameClock.get_frame_time}, in order
         * to get a time to use for animating. For example you might record
         * the start of the animation with an initial value from
         * {@link Gdk.FrameClock.get_frame_time}, and then update the animation
         * by calling {@link Gdk.FrameClock.get_frame_time} again during each repaint.
         *
         * {@link Gdk.FrameClock.request_phase} will result in a new frame on the
         * clock, but won’t necessarily repaint any widgets. To repaint a widget,
         * you have to use {@link Gtk.Widget.queue_draw} which invalidates the
         * widget (thus scheduling it to receive a draw on the next frame).
         * {@link Gtk.Widget.queue_draw} will also end up requesting a frame
         * on the appropriate frame clock.
         *
         * A widget’s frame clock will not change while the widget is mapped.
         * Reparenting a widget (which implies a temporary unmap) can change
         * the widget’s frame clock.
         *
         * Unrealized widgets do not have a frame clock.
         * @returns the frame clock
         */
        get_frame_clock(): Gdk.FrameClock | null;
        /**
         * Gets the horizontal alignment of the widget.
         *
         * For backwards compatibility reasons this method will never return
         * one of the baseline alignments, but instead it will convert it to
         * {@link Gtk.Align.FILL} or {@link Gtk.Align.CENTER}.
         *
         * Baselines are not supported for horizontal alignment.
         * @returns the horizontal alignment of `widget`
         */
        get_halign(): Gtk.Align;
        /**
         * Returns the current value of the `has-tooltip` property.
         * @returns current value of `has-tooltip` on `widget`
         */
        get_has_tooltip(): boolean;
        /**
         * Returns the content height of the widget.
         *
         * This function returns the height passed to its
         * size-allocate implementation, which is the height you
         * should be using in {@link Gtk.Widget.snapshot}.
         *
         * For pointer events, see {@link Gtk.Widget.contains}.
         *
         * To learn more about widget sizes, see the coordinate
         * system [overview](coordinates.html).
         * @returns The height of `widget`
         */
        get_height(): number;
        /**
         * Gets whether the widget would like any available extra horizontal
         * space.
         *
         * When a user resizes a window, widgets with expand set to true generally
         * receive the extra space. For example, a list or scrollable area
         * or document in your window would often be set to expand.
         *
         * Widgets with children should use {@link Gtk.Widget.compute_expand}
         * rather than this function, to see whether any of its children,
         * has the expand flag set. If any child of a widget wants to
         * expand, the parent may ask to expand also.
         *
         * This function only looks at the widget’s own hexpand flag, rather
         * than computing whether the entire widget tree rooted at this widget
         * wants to expand.
         * @returns whether hexpand flag is set
         */
        get_hexpand(): boolean;
        /**
         * Gets whether the `hexpand` flag has been explicitly set.
         *
         * If {@link Gtk.Widget.hexpand} property is set, then it
         * overrides any computed expand value based on child widgets.
         * If `hexpand` is not set, then the expand value depends on
         * whether any children of the widget would like to expand.
         *
         * There are few reasons to use this function, but it’s here
         * for completeness and consistency.
         * @returns whether hexpand has been explicitly set
         */
        get_hexpand_set(): boolean;
        /**
         * Returns the widget’s last child.
         *
         * This function is primarily meant for widget implementations.
         * @returns the widget's last child
         */
        get_last_child(): Gtk.Widget | null;
        /**
         * Retrieves the layout manager of the widget.
         *
         * See {@link Gtk.Widget.set_layout_manager}.
         * @returns the layout manager of `widget`
         */
        get_layout_manager(): Gtk.LayoutManager | null;
        /**
         * Gets the value of the {@link Gtk.Widget.limit_events} property.
         */
        get_limit_events(): boolean;
        /**
         * Returns whether the widget is mapped.
         * @returns true if the widget is mapped
         */
        get_mapped(): boolean;
        /**
         * Gets the bottom margin of the widget.
         * @returns The bottom margin of `widget`
         */
        get_margin_bottom(): number;
        /**
         * Gets the end margin of the widget.
         * @returns The end margin of `widget`
         */
        get_margin_end(): number;
        /**
         * Gets the start margin of the widget.
         * @returns The start margin of `widget`
         */
        get_margin_start(): number;
        /**
         * Gets the top margin of the widget.
         * @returns The top margin of `widget`
         */
        get_margin_top(): number;
        /**
         * Retrieves the name of a widget.
         *
         * See {@link Gtk.Widget.set_name} for the significance of widget names.
         * @returns name of the widget
         */
        get_name(): string;
        /**
         * Returns the nearest {@link Gtk.Native} ancestor of the widget.
         *
         * This function will return `NULL` if the widget is not
         * contained inside a widget tree with a native ancestor.
         *
         * {@link Gtk.Native} widgets will return themselves here.
         * @returns the {@link Gtk.Native} ancestor of `widget`
         */
        get_native(): Gtk.Native | null;
        /**
         * Returns the widget’s next sibling.
         *
         * This function is primarily meant for widget implementations.
         * @returns the widget's next sibling
         */
        get_next_sibling(): Gtk.Widget | null;
        /**
         * Fetches the requested opacity for the widget.
         *
         * See {@link Gtk.Widget.set_opacity}.
         * @returns the requested opacity for this widget
         */
        get_opacity(): number;
        /**
         * Returns the widget’s overflow value.
         * @returns The widget's overflow value
         */
        get_overflow(): Gtk.Overflow;
        /**
         * Gets a {@link Pango.Context} that is configured for the widget.
         *
         * The {@link Pango.Context} will have the appropriate font map, font description,
         * and base direction set.
         *
         * Unlike the context returned by {@link Gtk.Widget.create_pango_context},
         * this context is owned by the widget (it can be used until the screen
         * for the widget changes or the widget is removed from its toplevel),
         * and will be updated to match any changes to the widget’s attributes.
         * This can be tracked by listening to changes of the
         * {@link Gtk.Widget.root} property on the widget.
         * @returns the {@link Pango.Context} for the widget
         */
        get_pango_context(): Pango.Context;
        /**
         * Returns the parent widget of the widget.
         * @returns the parent widget of `widget`
         */
        get_parent(): Gtk.Widget | null;
        /**
         * Retrieves the minimum and natural size of a widget, taking
         * into account the widget’s preference for height-for-width management.
         *
         * This is used to retrieve a suitable size by container widgets which do
         * not impose any restrictions on the child placement. It can be used
         * to deduce toplevel window and menu sizes as well as child widgets in
         * free-form containers such as {@link Gtk.Fixed}.
         *
         * Handle with care. Note that the natural height of a height-for-width
         * widget will generally be a smaller size than the minimum height, since
         * the required height for the natural width is generally smaller than the
         * required height for the minimum width.
         *
         * Use {@link Gtk.Widget.measure} if you want to support baseline alignment.
         */
        get_preferred_size(): [Gtk.Requisition | null, Gtk.Requisition | null];
        /**
         * Returns the widget’s previous sibling.
         *
         * This function is primarily meant for widget implementations.
         * @returns the widget's previous sibling
         */
        get_prev_sibling(): Gtk.Widget | null;
        /**
         * Gets the primary clipboard of the widget.
         *
         * This is a utility function to get the primary clipboard object
         * for the display that `widget` is using.
         *
         * Note that this function always works, even when `widget` is not
         * realized yet.
         * @returns the appropriate clipboard object
         */
        get_primary_clipboard(): Gdk.Clipboard;
        /**
         * Determines whether the widget is realized.
         * @returns true if `widget` is realized
         */
        get_realized(): boolean;
        /**
         * Determines whether the widget is always treated as the default widget
         * within its toplevel when it has the focus, even if another widget
         * is the default.
         *
         * See {@link Gtk.Widget.set_receives_default}.
         * @returns true if `widget` acts as the default widget when focused
         */
        get_receives_default(): boolean;
        /**
         * Gets whether the widget prefers a height-for-width layout
         * or a width-for-height layout.
         *
         * Single-child widgets generally propagate the preference of
         * their child, more complex widgets need to request something
         * either in context of their children or in context of their
         * allocation capabilities.
         * @returns The {@link Gtk.SizeRequestMode} preferred by `widget`.
         */
        get_request_mode(): Gtk.SizeRequestMode;
        /**
         * Returns the {@link Gtk.Root} widget of the widget.
         *
         * This function will return `NULL` if the widget is not contained
         * inside a widget tree with a root widget.
         *
         * {@link Gtk.Root} widgets will return themselves here.
         * @returns the root widget of `widget`
         */
        get_root(): Gtk.Root | null;
        /**
         * Retrieves the internal scale factor that maps from window
         * coordinates to the actual device pixels.
         *
         * On traditional systems this is 1, on high density outputs,
         * it can be a higher value (typically 2).
         *
         * See {@link Gdk.Surface.get_scale_factor}.
         *
         * Note that modern systems may support *fractional* scaling,
         * where the scale factor is not an integer. On such systems,
         * this function will return the next higher integer value,
         * but you probably want to use {@link Gdk.Surface.get_scale}
         * to get the fractional scale value.
         * @returns the scale factor for `widget`
         */
        get_scale_factor(): number;
        /**
         * Returns the widget’s sensitivity.
         *
         * This function returns the value that has been set using
         * {@link Gtk.Widget.set_sensitive}).
         *
         * The effective sensitivity of a widget is however determined
         * by both its own and its parent widget’s sensitivity.
         * See {@link Gtk.Widget.is_sensitive}.
         * @returns true if the widget is sensitive
         */
        get_sensitive(): boolean;
        /**
         * Gets the settings object holding the settings used for the widget.
         *
         * Note that this function can only be called when the {@link Gtk.Widget}
         * is attached to a toplevel, since the settings object is specific
         * to a particular display. If you want to monitor the widget for
         * changes in its settings, connect to the `notify::display` signal.
         * @returns the relevant settings object
         */
        get_settings(): Gtk.Settings;
        /**
         * Returns the content width or height of the widget.
         *
         * Which dimension is returned depends on `orientation`.
         *
         * This is equivalent to calling {@link Gtk.Widget.get_width}
         * for {@link Gtk.Orientation.HORIZONTAL} or {@link Gtk.Widget.get_height}
         * for {@link Gtk.Orientation.VERTICAL}, but can be used when
         * writing orientation-independent code, such as when
         * implementing {@link Gtk.Orientable} widgets.
         *
         * To learn more about widget sizes, see the coordinate
         * system [overview](coordinates.html).
         * @param orientation the orientation to query
         * @returns the size of `widget` in `orientation`
         */
        get_size(orientation: Gtk.Orientation | null): number;
        /**
         * Gets the size request that was explicitly set for the widget.
         *
         * A value of -1 stored in `width` or `height` indicates that that
         * dimension has not been set explicitly and the natural requisition
         * of the widget will be used instead.
         *
         * See {@link Gtk.Widget.set_size_request}.
         *
         * To get the size a widget will actually request, call
         * {@link Gtk.Widget.measure} instead of this function.
         */
        get_size_request(): [number, number];
        /**
         * Returns the widget state as a flag set.
         *
         * It is worth mentioning that the effective {@link Gtk.StateFlags.INSENSITIVE}
         * state will be returned, that is, also based on parent insensitivity,
         * even if `widget` itself is sensitive.
         *
         * Also note that if you are looking for a way to obtain the
         * {@link Gtk.StateFlags} to pass to a {@link Gtk.StyleContext}
         * method, you should look at {@link Gtk.StyleContext.get_state}.
         * @returns the state flags of widget
         */
        get_state_flags(): Gtk.StateFlags;
        /**
         * Returns the style context associated to the widget.
         *
         * The returned object is guaranteed to be the same
         * for the lifetime of `widget`.
         * @returns the widgets style context
         */
        get_style_context(): Gtk.StyleContext;
        /**
         * Fetches an object build from the template XML for `widget_type` in
         * the widget.
         *
         * This will only report children which were previously declared
         * with {@link Gtk.WidgetClass.bind_template_child_full} or one of its
         * variants.
         *
         * This function is only meant to be called for code which is private
         * to the `widget_type` which declared the child and is meant for language
         * bindings which cannot easily make use of the GObject structure offsets.
         * @param widget_type The {@link GObject.GType} to get a template child for
         * @param name ID of the child defined in the template XML
         * @returns the object built in the template XML with   the id `name`
         */
        get_template_child<T = GObject.Object>(widget_type: GObject.GType, name: string): T;
        /**
         * Gets the contents of the tooltip for the widget.
         *
         * If the tooltip has not been set using
         * {@link Gtk.Widget.set_tooltip_markup}, this
         * function returns `NULL`.
         * @returns the tooltip text
         */
        get_tooltip_markup(): string | null;
        /**
         * Gets the contents of the tooltip for the widget.
         *
         * If the `widget`'s tooltip was set using
         * {@link Gtk.Widget.set_tooltip_markup},
         * this function will return the escaped text.
         * @returns the tooltip text
         */
        get_tooltip_text(): string | null;
        /**
         * Gets the vertical alignment of the widget.
         * @returns the vertical alignment of `widget`
         */
        get_valign(): Gtk.Align;
        /**
         * Gets whether the widget would like any available extra vertical
         * space.
         *
         * See {@link Gtk.Widget.get_hexpand} for more detail.
         * @returns whether vexpand flag is set
         */
        get_vexpand(): boolean;
        /**
         * Gets whether the `vexpand` flag has been explicitly set.
         *
         * See {@link Gtk.Widget.get_hexpand_set} for more detail.
         * @returns whether vexpand has been explicitly set
         */
        get_vexpand_set(): boolean;
        /**
         * Determines whether the widget is visible.
         *
         * If you want to take into account whether the widget’s
         * parent is also marked as visible, use
         * {@link Gtk.Widget.is_visible} instead.
         *
         * This function does not check if the widget is
         * obscured in any way.
         *
         * See {@link Gtk.Widget.set_visible}.
         * @returns true if the widget is visible
         */
        get_visible(): boolean;
        /**
         * Returns the content width of the widget.
         *
         * This function returns the width passed to its
         * size-allocate implementation, which is the width you
         * should be using in {@link Gtk.Widget.snapshot}.
         *
         * For pointer events, see {@link Gtk.Widget.contains}.
         *
         * To learn more about widget sizes, see the coordinate
         * system [overview](coordinates.html).
         * @returns The width of `widget`
         */
        get_width(): number;
        /**
         * Causes `widget` to have the keyboard focus for the window
         * that it belongs to.
         *
         * If `widget` is not focusable, or its {@link Gtk.Widget.grab_focus}
         * implementation cannot transfer the focus to a descendant of `widget`
         * that is focusable, it will not take focus and false will be returned.
         *
         * Calling {@link Gtk.Widget.grab_focus} on an already focused widget
         * is allowed, should not have an effect, and return true.
         * @returns true if focus is now inside `widget`
         */
        grab_focus(): boolean;
        /**
         * Returns whether a style class is currently applied to the widget.
         * @param css_class style class, without the leading period
         * @returns true if `css_class` is currently applied to `widget`
         */
        has_css_class(css_class: string): boolean;
        /**
         * Determines if the widget should show a visible indication that
         * it has the global input focus.
         *
         * This is a convenience function that takes into account whether
         * focus indication should currently be shown in the toplevel window
         * of `widget`. See {@link Gtk.Window.get_focus_visible} for more
         * information about focus indication.
         *
         * To find out if the widget has the global input focus, use
         * {@link Gtk.Widget.has_focus}.
         * @returns true if the widget should display a “focus rectangle”
         */
        has_visible_focus(): boolean;
        /**
         * Reverses the effects of [method.Gtk.Widget.show].
         *
         * This is causing the widget to be hidden (invisible to the user).
         */
        hide(): void;
        /**
         * Returns whether the widget is currently being destroyed.
         *
         * This information can sometimes be used to avoid doing
         * unnecessary work.
         * @returns true if `widget` is being destroyed
         */
        in_destruction(): boolean;
        /**
         * Creates and initializes child widgets defined in templates.
         *
         * This function must be called in the instance initializer
         * for any class which assigned itself a template using
         * {@link Gtk.WidgetClass.set_template}.
         *
         * It is important to call this function in the instance initializer
         * of a widget subclass and not in `GObject.constructed()` or
         * `GObject.constructor()` for two reasons:
         *
         *  - derived widgets will assume that the composite widgets
         *    defined by its parent classes have been created in their
         *    relative instance initializers
         *  - when calling `g_object_new()` on a widget with composite templates,
         *    it’s important to build the composite widgets before the construct
         *    properties are set. Properties passed to `g_object_new()` should
         *    take precedence over properties set in the private template XML
         *
         * A good rule of thumb is to call this function as the first thing in
         * an instance initialization function.
         */
        init_template(): void;
        /**
         * Inserts an action group into the widget's actions.
         *
         * Children of `widget` that implement {@link Gtk.Actionable} can
         * then be associated with actions in `group` by setting their
         * “action-name” to `prefix`.`action-name`.
         *
         * Note that inheritance is defined for individual actions. I.e.
         * even if you insert a group with prefix `prefix`, actions with
         * the same prefix will still be inherited from the parent, unless
         * the group contains an action with the same name.
         *
         * If `group` is `NULL`, a previously inserted group for `name` is
         * removed from `widget`.
         * @param name the prefix for actions in `group`
         * @param group an action group
         */
        insert_action_group(name: string, group?: Gio.ActionGroup | null): void;
        /**
         * Sets the parent widget of the widget.
         *
         * In contrast to {@link Gtk.Widget.set_parent}, this function
         * inserts `widget` at a specific position into the list of children
         * of the `parent` widget.
         *
         * It will be placed after `previous_sibling`, or at the beginning if
         * `previous_sibling` is `NULL`.
         *
         * After calling this function, `gtk_widget_get_prev_sibling (widget)`
         * will return `previous_sibling`.
         *
         * If `parent` is already set as the parent widget of `widget`, this
         * function can also be used to reorder `widget` in the child widget
         * list of `parent`.
         *
         * This function is primarily meant for widget implementations; if you are
         * just using a widget, you *must* use its own API for adding children.
         * @param parent the parent widget to insert `widget` into
         * @param previous_sibling the new previous sibling of `widget`
         */
        insert_after(parent: Gtk.Widget, previous_sibling?: Gtk.Widget | null): void;
        /**
         * Sets the parent widget of the widget.
         *
         * In contrast to {@link Gtk.Widget.set_parent}, this function
         * inserts `widget` at a specific position into the list of children
         * of the `parent` widget.
         *
         * It will be placed before `next_sibling`, or at the end if
         * `next_sibling` is `NULL`.
         *
         * After calling this function, `gtk_widget_get_next_sibling (widget)`
         * will return `next_sibling`.
         *
         * If `parent` is already set as the parent widget of `widget`, this function
         * can also be used to reorder `widget` in the child widget list of `parent`.
         *
         * This function is primarily meant for widget implementations; if you are
         * just using a widget, you *must* use its own API for adding children.
         * @param parent the parent widget to insert `widget` into
         * @param next_sibling the new next sibling of `widget`
         */
        insert_before(parent: Gtk.Widget, next_sibling?: Gtk.Widget | null): void;
        /**
         * Determines whether the widget is a descendent of `ancestor`.
         * @param ancestor another {@link Gtk.Widget}
         * @returns true if `ancestor` contains `widget` as a child,   grandchild, great grandchild, etc
         */
        is_ancestor(ancestor: Gtk.Widget): boolean;
        /**
         * Determines whether the widget can be drawn to.
         *
         * A widget can be drawn if it is mapped and visible.
         * @returns true if `widget` is drawable
         */
        is_drawable(): boolean;
        /**
         * Determines if the widget is the focus widget within its
         * toplevel.
         *
         * This does not mean that the {@link Gtk.Widget.has_focus}
         * property is necessarily set; {@link Gtk.Widget.has_focus}
         * will only be set if the toplevel widget additionally has the
         * global input focus.
         * @returns true if the widget is the focus widget
         */
        is_focus(): boolean;
        /**
         * Returns the widget’s effective sensitivity.
         *
         * This means it is sensitive itself and also its
         * parent widget is sensitive.
         * @returns true if the widget is effectively sensitive
         */
        is_sensitive(): boolean;
        /**
         * Determines whether the widget and all its parents are marked as
         * visible.
         *
         * This function does not check if the widget is obscured in any way.
         *
         * See also {@link Gtk.Widget.get_visible} and
         * {@link Gtk.Widget.set_visible}.
         * @returns true if the widget and all its parents are visible
         */
        is_visible(): boolean;
        /**
         * Emits the `Gtk.Widget::keynav-failed` signal on the widget.
         *
         * This function should be called whenever keyboard navigation
         * within a single widget hits a boundary.
         *
         * The return value of this function should be interpreted
         * in a way similar to the return value of
         * {@link Gtk.Widget.child_focus}. When true is returned,
         * stay in the widget, the failed keyboard navigation is ok
         * and/or there is nowhere we can/should move the focus to.
         * When false is returned, the caller should continue with
         * keyboard navigation outside the widget, e.g. by calling
         * {@link Gtk.Widget.child_focus} on the widget’s toplevel.
         *
         * The default `Gtk.Widget::keynav-failed` handler returns
         * false for {@link Gtk.DirectionType.TAB-FORWARD} and
         * {@link Gtk.DirectionType.TAB-BACKWARD}. For the other values
         * of {@link Gtk.DirectionType} it returns true.
         *
         * Whenever the default handler returns true, it also calls
         * {@link Gtk.Widget.error_bell} to notify the user of the
         * failed keyboard navigation.
         *
         * A use case for providing an own implementation of `::keynav-failed`
         * (either by connecting to it or by overriding it) would be a row of
         * {@link Gtk.Entry} widgets where the user should be able to navigate
         * the entire row with the cursor keys, as e.g. known from user
         * interfaces that require entering license keys.
         * @param direction direction of focus movement
         * @returns true if stopping keyboard navigation is fine, false   if the emitting widget should try to handle the keyboard   navigation attempt in its parent widget
         */
        keynav_failed(direction: Gtk.DirectionType | null): boolean;
        /**
         * Returns the widgets for which this widget is the target of a
         * mnemonic.
         *
         * Typically, these widgets will be labels. See, for example,
         * {@link Gtk.Label.set_mnemonic_widget}.
         *
         * The widgets in the list are not individually referenced.
         * If you want to iterate through the list and perform actions
         * involving callbacks that might destroy the widgets, you
         * must call `g_list_foreach (result, (GFunc)g_object_ref, NULL)`
         * first, and then unref all the widgets afterwards.
         * @returns the list   of mnemonic labels
         */
        list_mnemonic_labels(): Gtk.Widget[];
        /**
         * Causes a widget to be mapped if it isn’t already.
         *
         * This function is only for use in widget implementations.
         */
        map(): void;
        /**
         * Measures `widget` in the orientation `orientation` and for the given `for_size`.
         *
         * As an example, if `orientation` is {@link Gtk.Orientation.HORIZONTAL} and `for_size`
         * is 300, this functions will compute the minimum and natural width of `widget`
         * if it is allocated at a height of 300 pixels.
         *
         * See [GtkWidget’s geometry management section](class.Widget.html#height-for-width-geometry-management) for
         * a more details on implementing {@link Gtk.Widget.measure}.
         * @param orientation the orientation to measure
         * @param for_size Size for the opposite of `orientation`, i.e.   if `orientation` is {@link Gtk.Orientation.HORIZONTAL}, this is   the height the widget should be measured with. The {@link Gtk.Orientation.VERTICAL}   case is analogous. This way, both height-for-width and width-for-height   requests can be implemented. If no size is known, -1 can be passed.
         */
        measure(orientation: Gtk.Orientation | null, for_size: number): [number, number, number, number];
        /**
         * Emits the `Gtk.Widget::mnemonic-activate` signal.
         * @param group_cycling true if there are other widgets with the same mnemonic
         * @returns true if the signal has been handled
         */
        mnemonic_activate(group_cycling: boolean): boolean;
        /**
         * Returns a list model to track the children of the widget.
         *
         * Calling this function will enable extra internal bookkeeping
         * to track children and emit signals on the returned listmodel.
         * It may slow down operations a lot.
         *
         * Applications should try hard to avoid calling this function
         * because of the slowdowns.
         * @returns a list model tracking `widget`'s children
         */
        observe_children(): Gio.ListModel;
        /**
         * Returns a list model to track the event controllers of the widget.
         *
         * Calling this function will enable extra internal bookkeeping
         * to track controllers and emit signals on the returned listmodel.
         * It may slow down operations a lot.
         *
         * Applications should try hard to avoid calling this function
         * because of the slowdowns.
         * @returns a list model tracking `widget`'s controllers
         */
        observe_controllers(): Gio.ListModel;
        /**
         * Finds the descendant of the widget closest to a point.
         *
         * The point (x, y) must be given in widget coordinates, so (0, 0)
         * is assumed to be the top left of `widget`'s content area.
         *
         * Usually widgets will return `NULL` if the given coordinate is not
         * contained in `widget` checked via {@link Gtk.Widget.contains}.
         * Otherwise they will recursively try to find a child that does
         * not return `NULL`. Widgets are however free to customize their
         * picking algorithm.
         *
         * This function is used on the toplevel to determine the widget
         * below the mouse cursor for purposes of hover highlighting and
         * delivering events.
         * @param x x coordinate to test, relative to `widget`'s origin
         * @param y y coordinate to test, relative to `widget`'s origin
         * @param flags flags to influence what is picked
         * @returns the widget's descendant at (x, y)
         */
        pick(x: number, y: number, flags: Gtk.PickFlags | null): Gtk.Widget | null;
        /**
         * Flags the widget for a rerun of the {@link Gtk.Widget.size_allocate}
         * function.
         *
         * Use this function instead of {@link Gtk.Widget.queue_resize}
         * when the `widget`'s size request didn't change but it wants to
         * reposition its contents.
         *
         * An example user of this function is {@link Gtk.Widget.set_halign}.
         *
         * This function is only for use in widget implementations.
         */
        queue_allocate(): void;
        /**
         * Schedules this widget to be redrawn.
         *
         * The redraw will happen in the paint phase
         * of the current or the next frame.
         *
         * This means `widget`'s {@link Gtk.Widget.snapshot}
         * implementation will be called.
         */
        queue_draw(): void;
        /**
         * Flags a widget to have its size renegotiated.
         *
         * This should be called when a widget for some reason has a new
         * size request. For example, when you change the text in a
         * {@link Gtk.Label}, the label queues a resize to ensure there’s
         * enough space for the new text.
         *
         * Note that you cannot call `gtk_widget_queue_resize()` on a widget
         * from inside its implementation of the {@link Gtk.Widget.size_allocate}
         * virtual method. Calls to `gtk_widget_queue_resize()` from inside
         * {@link Gtk.Widget.size_allocate} will be silently ignored.
         *
         * This function is only for use in widget implementations.
         */
        queue_resize(): void;
        /**
         * Removes an event controller from the widget.
         *
         * The removed event controller will not receive any more events,
         * and should not be used again.
         *
         * Widgets will remove all event controllers automatically when they
         * are destroyed, there is normally no need to call this function.
         * @param controller an event controller
         */
        remove_controller(controller: Gtk.EventController): void;
        /**
         * Removes a style from the widget.
         *
         * After this, the style of `widget` will stop matching for `css_class`.
         * @param css_class style class to remove from `widget`, without the leading period
         */
        remove_css_class(css_class: string): void;
        /**
         * Removes a widget from the list of mnemonic labels for this widget.
         *
         * See {@link Gtk.Widget.list_mnemonic_labels}.
         *
         * The widget must have previously been added to the list with
         * {@link Gtk.Widget.add_mnemonic_label}.
         * @param label a widget that is a mnemonic label for `widget`
         */
        remove_mnemonic_label(label: Gtk.Widget): void;
        /**
         * Removes a tick callback previously registered with
         * {@link Gtk.Widget.add_tick_callback}.
         * @param id an ID returned by {@link Gtk.Widget.add_tick_callback}
         */
        remove_tick_callback(id: number): void;
        /**
         * Sets whether the input focus can enter the widget or
         * any of its children.
         *
         * Applications should set `can_focus` to false to mark a
         * widget as for pointer/touch use only.
         *
         * Note that having `can_focus` be true is only one of the
         * necessary conditions for being focusable. A widget must
         * also be sensitive and focusable and not have an ancestor
         * that is marked as not can-focus in order to receive input
         * focus.
         *
         * See {@link Gtk.Widget.grab_focus} for actually setting
         * the input focus on a widget.
         * @param can_focus whether the input focus can enter   the widget or any of its children
         */
        set_can_focus(can_focus: boolean): void;
        /**
         * Sets whether the widget can be the target of pointer events.
         * @param can_target whether this widget should be able to   receive pointer events
         */
        set_can_target(can_target: boolean): void;
        /**
         * Sets whether the widget should be mapped along with its parent.
         *
         * The child visibility can be set for widget before it is added
         * to a container with {@link Gtk.Widget.set_parent}, to avoid
         * mapping children unnecessary before immediately unmapping them.
         * However it will be reset to its default state of true when the
         * widget is removed from a container.
         *
         * Note that changing the child visibility of a widget does not
         * queue a resize on the widget. Most of the time, the size of
         * a widget is computed from all visible children, whether or
         * not they are mapped. If this is not the case, the container
         * can queue a resize itself.
         *
         * This function is only useful for widget implementations
         * and should never be called by an application.
         * @param child_visible whether `widget` should be mapped along   with its parent
         */
        set_child_visible(child_visible: boolean): void;
        /**
         * Replaces the current style classes of the widget with `classes`.
         * @param classes `NULL`-terminated list of style classes
         */
        set_css_classes(classes: string[]): void;
        /**
         * Sets the cursor to be shown when the pointer hovers over
         * the widget.
         *
         * If the `cursor` is `NULL`, `widget` will use the cursor
         * inherited from its parent.
         * @param cursor the new cursor
         */
        set_cursor(cursor?: Gdk.Cursor | null): void;
        /**
         * Sets the cursor to be shown when the pointer hovers over
         * the widget.
         *
         * This is a utility function that creates a cursor via
         * {@link Gdk.Cursor.new_from_name} and then sets it on `widget`
         * with {@link Gtk.Widget.set_cursor}. See those functions for
         * details.
         *
         * On top of that, this function allows `name` to be `NULL`, which
         * will do the same as calling {@link Gtk.Widget.set_cursor}
         * with a `NULL` cursor.
         * @param name the name of the cursor
         */
        set_cursor_from_name(name?: string | null): void;
        /**
         * Sets the reading direction on the widget.
         *
         * This direction controls the primary direction for widgets
         * containing text, and also the direction in which the children
         * of a container are packed. The ability to set the direction is
         * present in order so that correct localization into languages with
         * right-to-left reading directions can be done.
         *
         * Generally, applications will let the default reading direction
         * prevail, except for widgets where the children are arranged in
         * an order that is explicitly visual rather than logical (such as
         * buttons for text justification).
         *
         * If the direction is set to {@link Gtk.TextDirection.NONE}, then
         * the value set by {@link Gtk.Widget.set_default_direction} will be used.
         * @param dir the new direction
         */
        set_direction(dir: Gtk.TextDirection | null): void;
        /**
         * Set the focus child of the widget.
         *
         * This function is only suitable for widget implementations.
         * If you want a certain widget to get the input focus, call
         * {@link Gtk.Widget.grab_focus} on it.
         * @param child a direct child widget of `widget`   or `NULL` to unset the focus child
         */
        set_focus_child(child?: Gtk.Widget | null): void;
        /**
         * Sets whether the widget should grab focus when it is clicked
         * with the mouse.
         *
         * Making mouse clicks not grab focus is useful in places like
         * toolbars where you don’t want the keyboard focus removed from
         * the main area of the application.
         * @param focus_on_click whether the widget should grab focus when clicked   with the mouse
         */
        set_focus_on_click(focus_on_click: boolean): void;
        /**
         * Sets whether the widget can own the input focus.
         *
         * Widget implementations should set `focusable` to true in
         * their `init()` function if they want to receive keyboard input.
         *
         * Note that having `focusable` be true is only one of the
         * necessary conditions for being focusable. A widget must
         * also be sensitive and can-focus and not have an ancestor
         * that is marked as not can-focus in order to receive input
         * focus.
         *
         * See {@link Gtk.Widget.grab_focus} for actually setting
         * the input focus on a widget.
         * @param focusable whether or not `widget` can own the input focus
         */
        set_focusable(focusable: boolean): void;
        /**
         * Sets the font map to use for text rendering in the widget.
         *
         * The font map is the object that is used to look up fonts.
         * Setting a custom font map can be useful in special situations,
         * e.g. when you need to add application-specific fonts to the set
         * of available fonts.
         *
         * When not set, the widget will inherit the font map from its parent.
         * @param font_map a {@link Pango.FontMap}
         */
        set_font_map(font_map?: Pango.FontMap | null): void;
        /**
         * Sets the `cairo_font_options_t` used for text rendering
         * in the widget.
         *
         * When not set, the default font options for the {@link Gdk.Display}
         * will be used.
         * @param options a `cairo_font_options_t` struct   to unset any previously set default font options
         */
        set_font_options(options?: cairo.FontOptions | null): void;
        /**
         * Sets the horizontal alignment of the widget.
         * @param align the horizontal alignment
         */
        set_halign(align: Gtk.Align | null): void;
        /**
         * Sets the `has-tooltip` property on the widget.
         * @param has_tooltip whether or not `widget` has a tooltip
         */
        set_has_tooltip(has_tooltip: boolean): void;
        /**
         * Sets whether the widget would like any available extra horizontal
         * space.
         *
         * When a user resizes a window, widgets with expand set to true generally
         * receive the extra space. For example, a list or scrollable area
         * or document in your window would often be set to expand.
         *
         * Call this function to set the expand flag if you would like your
         * widget to become larger horizontally when the window has extra
         * room.
         *
         * By default, widgets automatically expand if any of their children
         * want to expand. (To see if a widget will automatically expand given
         * its current children and state, call {@link Gtk.Widget.compute_expand}.
         * A widget can decide how the expandability of children affects its
         * own expansion by overriding the `compute_expand` virtual method on
         * {@link Gtk.Widget}.).
         *
         * Setting hexpand explicitly with this function will override the
         * automatic expand behavior.
         *
         * This function forces the widget to expand or not to expand,
         * regardless of children. The override occurs because
         * {@link Gtk.Widget.set_hexpand} sets the hexpand-set property (see
         * {@link Gtk.Widget.set_hexpand_set}) which causes the widget’s hexpand
         * value to be used, rather than looking at children and widget state.
         * @param expand whether to expand
         */
        set_hexpand(expand: boolean): void;
        /**
         * Sets whether the hexpand flag will be used.
         *
         * The {@link Gtk.Widget.hexpand_set} property will be set
         * automatically when you call {@link Gtk.Widget.set_hexpand}
         * to set hexpand, so the most likely reason to use this function
         * would be to unset an explicit expand flag.
         *
         * If hexpand is set, then it overrides any computed
         * expand value based on child widgets. If hexpand is not
         * set, then the expand value depends on whether any
         * children of the widget would like to expand.
         *
         * There are few reasons to use this function, but it’s here
         * for completeness and consistency.
         * @param set value for hexpand-set property
         */
        set_hexpand_set(set: boolean): void;
        /**
         * Sets the layout manager to use for measuring and allocating children
         * of the widget.
         * @param layout_manager a layout manager
         */
        set_layout_manager(layout_manager?: Gtk.LayoutManager | null): void;
        /**
         * Sets whether the widget acts like a modal dialog,
         * with respect to event delivery.
         * @param limit_events whether to limit events
         */
        set_limit_events(limit_events: boolean): void;
        /**
         * Sets the bottom margin of the widget.
         * @param margin the bottom margin
         */
        set_margin_bottom(margin: number): void;
        /**
         * Sets the end margin of the widget.
         * @param margin the end margin
         */
        set_margin_end(margin: number): void;
        /**
         * Sets the start margin of the widget.
         * @param margin the start margin
         */
        set_margin_start(margin: number): void;
        /**
         * Sets the top margin of the widget.
         * @param margin the top margin
         */
        set_margin_top(margin: number): void;
        /**
         * Sets a widgets name.
         *
         * Setting a name allows you to refer to the widget from a
         * CSS file. You can apply a style to widgets with a particular name
         * in the CSS file. See the documentation for the CSS syntax (on the
         * same page as the docs for {@link Gtk.StyleContext}.
         *
         * Note that the CSS syntax has certain special characters to delimit
         * and represent elements in a selector (period, #, >, *...), so using
         * these will make your widget impossible to match by name. Any combination
         * of alphanumeric symbols, dashes and underscores will suffice.
         * @param name name for the widget
         */
        set_name(name: string): void;
        /**
         * Requests the widget to be rendered partially transparent.
         *
         * An opacity of 0 is fully transparent and an opacity of 1
         * is fully opaque.
         *
         * Opacity works on both toplevel widgets and child widgets, although
         * there are some limitations: For toplevel widgets, applying opacity
         * depends on the capabilities of the windowing system. On X11, this
         * has any effect only on X displays with a compositing manager, see
         * {@link Gdk.Display.is_composited}. On Windows and Wayland it will
         * always work, although setting a window’s opacity after the window
         * has been shown may cause some flicker.
         *
         * Note that the opacity is inherited through inclusion — if you set
         * a toplevel to be partially translucent, all of its content will
         * appear translucent, since it is ultimatively rendered on that
         * toplevel. The opacity value itself is not inherited by child
         * widgets (since that would make widgets deeper in the hierarchy
         * progressively more translucent). As a consequence, {@link Gtk.Popover}
         * instances and other {@link Gtk.Native} widgets with their own surface
         * will use their own opacity value, and thus by default appear
         * non-translucent, even if they are attached to a toplevel that
         * is translucent.
         * @param opacity desired opacity, between 0 and 1
         */
        set_opacity(opacity: number): void;
        /**
         * Sets how the widget treats content that is drawn outside the
         * it's content area.
         *
         * See the definition of {@link Gtk.Overflow} for details.
         *
         * This setting is provided for widget implementations and
         * should not be used by application code.
         *
         * The default value is {@link Gtk.Overflow.VISIBLE}.
         * @param overflow desired overflow value
         */
        set_overflow(overflow: Gtk.Overflow | null): void;
        /**
         * Sets the parent widget of the widget.
         *
         * This takes care of details such as updating the state and style
         * of the child to reflect its new location and resizing the parent.
         * The opposite function is {@link Gtk.Widget.unparent}.
         *
         * This function is useful only when implementing subclasses of
         * {@link Gtk.Widget}.
         * @param parent parent widget
         */
        set_parent(parent: Gtk.Widget): void;
        /**
         * Sets whether the widget will be treated as the default
         * widget within its toplevel when it has the focus, even if
         * another widget is the default.
         * @param receives_default whether or not `widget` can be a default widget
         */
        set_receives_default(receives_default: boolean): void;
        /**
         * Sets the sensitivity of the widget.
         *
         * A widget is sensitive if the user can interact with it.
         * Insensitive widgets are “grayed out” and the user can’t
         * interact with them. Insensitive widgets are known as
         * “inactive”, “disabled”, or “ghosted” in some other toolkits.
         * @param sensitive true to make the widget sensitive
         */
        set_sensitive(sensitive: boolean): void;
        /**
         * Sets the minimum size of the widget.
         *
         * That is, the widget’s size request will be at least `width`
         * by `height`. You can use this function to force a widget to
         * be larger than it normally would be.
         *
         * In most cases, {@link Gtk.Window.set_default_size} is a better
         * choice for toplevel windows than this function; setting the default
         * size will still allow users to shrink the window. Setting the size
         * request will force them to leave the window at least as large as
         * the size request.
         *
         * Note the inherent danger of setting any fixed size - themes,
         * translations into other languages, different fonts, and user action
         * can all change the appropriate size for a given widget. So, it is
         * basically impossible to hardcode a size that will always work.
         *
         * The size request of a widget is the smallest size a widget can
         * accept while still functioning well and drawing itself correctly.
         * However in some strange cases a widget may be allocated less than
         * its requested size, and in many cases a widget may be allocated more
         * space than it requested.
         *
         * If the size request in a given direction is -1 (unset), then
         * the “natural” size request of the widget will be used instead.
         *
         * The size request set here does not include any margin from the
         * properties
         * {@link Gtk.Widget.margin_start},
         * {@link Gtk.Widget.margin_end},
         * {@link Gtk.Widget.margin_top}, and
         * {@link Gtk.Widget.margin_bottom}, but it does include pretty
         * much all other padding or border properties set by any subclass
         * of {@link Gtk.Widget}.
         * @param width width `widget` should request, or -1 to unset
         * @param height height `widget` should request, or -1 to unset
         */
        set_size_request(width: number, height: number): void;
        /**
         * Turns on flag values in the current widget state.
         *
         * Typical widget states are insensitive, prelighted, etc.
         *
         * This function accepts the values {@link Gtk.StateFlags.DIR-LTR} and
         * {@link Gtk.StateFlags.DIR-RTL} but ignores them. If you want to set
         * the widget's direction, use {@link Gtk.Widget.set_direction}.
         *
         * This function is for use in widget implementations.
         * @param flags state flags to turn on
         * @param clear whether to clear state before turning on `flags`
         */
        set_state_flags(flags: Gtk.StateFlags | null, clear: boolean): void;
        /**
         * Sets the contents of the tooltip for widget.
         *
         * `markup` must contain Pango markup.
         *
         * This function will take care of setting the
         * {@link Gtk.Widget.has_tooltip} as a side effect, and of the
         * default handler for the `Gtk.Widget::query-tooltip` signal.
         *
         * See also {@link Gtk.Tooltip.set_markup}.
         * @param markup the contents of the tooltip for `widget`
         */
        set_tooltip_markup(markup?: string | null): void;
        /**
         * Sets the contents of the tooltip for the widget.
         *
         * If `text` contains any markup, it will be escaped.
         *
         * This function will take care of setting
         * {@link Gtk.Widget.has_tooltip} as a side effect,
         * and of the default handler for the
         * `Gtk.Widget::query-tooltip` signal.
         *
         * See also {@link Gtk.Tooltip.set_text}.
         * @param text the contents of the tooltip for `widget`
         */
        set_tooltip_text(text?: string | null): void;
        /**
         * Sets the vertical alignment of the widget.
         * @param align the vertical alignment
         */
        set_valign(align: Gtk.Align | null): void;
        /**
         * Sets whether the widget would like any available extra vertical
         * space.
         *
         * See {@link Gtk.Widget.set_hexpand} for more detail.
         * @param expand whether to expand
         */
        set_vexpand(expand: boolean): void;
        /**
         * Sets whether the vexpand flag will be used.
         *
         * See {@link Gtk.Widget.set_hexpand_set} for more detail.
         * @param set value for vexpand-set property
         */
        set_vexpand_set(set: boolean): void;
        /**
         * Sets the visibility state of `widget`.
         *
         * Note that setting this to true doesn’t mean the widget is
         * actually viewable, see {@link Gtk.Widget.get_visible}.
         * @param visible whether the widget should be shown or not
         */
        set_visible(visible: boolean): void;
        /**
         * Returns whether the widget should contribute to
         * the measuring and allocation of its parent.
         *
         * This is false for invisible children, but also
         * for children that have their own surface, such
         * as {@link Gtk.Popover} instances.
         * @returns true if child should be included in   measuring and allocating
         */
        should_layout(): boolean;
        /**
         * Flags a widget to be displayed.
         *
         * Any widget that isn’t shown will not appear on the screen.
         *
         * Remember that you have to show the containers containing a widget,
         * in addition to the widget itself, before it will appear onscreen.
         *
         * When a toplevel widget is shown, it is immediately realized and
         * mapped; other shown widgets are realized and mapped when their
         * toplevel widget is realized and mapped.
         */
        show(): void;
        /**
         * Allocates widget with a transformation that translates
         * the origin to the position in `allocation`.
         *
         * This is a simple form of {@link Gtk.Widget.allocate}.
         * @param allocation position and size to be allocated to `widget`
         * @param baseline the baseline of the child, or -1
         */
        size_allocate(allocation: Gtk.Allocation, baseline: number): void;
        /**
         * Snapshots a child of the widget.
         *
         * When a widget receives a call to the snapshot function,
         * it must send synthetic {@link Gtk.Widget.snapshot} calls
         * to all children. This function provides a convenient way
         * of doing this. A widget, when it receives a call to its
         * {@link Gtk.Widget.snapshot} function, calls
         * `gtk_widget_snapshot_child()` once for each child, passing in
         * the `snapshot` the widget received.
         *
         * This function takes care of translating the origin of `snapshot`,
         * and deciding whether the child needs to be snapshot.
         *
         * It does nothing for children that implement {@link Gtk.Native}.
         * @param child a child of `widget`
         * @param snapshot snapshot as passed to the widget. In particular, no   calls to {@link Gtk.Snapshot.translate} or other transform calls   should have been made
         */
        snapshot_child(child: Gtk.Widget, snapshot: Gtk.Snapshot): void;
        /**
         * Translates coordinates relative to `src_widget`’s allocation
         * to coordinates relative to `dest_widget`’s allocations.
         *
         * In order to perform this operation, both widget must share
         * a common ancestor. If that is not the case, `dest_x` and `dest_y`
         * are set to 0 and false is returned.
         * @param dest_widget another widget
         * @param src_x X position in widget coordinates of `src_widget`
         * @param src_y Y position in widget coordinates of `src_widget`
         * @returns true if `src_widget` and `dest_widget` have a common   ancestor, false otherwise
         */
        translate_coordinates(dest_widget: Gtk.Widget, src_x: number, src_y: number): [boolean, number, number];
        /**
         * Triggers a tooltip query on the display of the widget.
         */
        trigger_tooltip_query(): void;
        /**
         * Causes a widget to be unmapped if it’s currently mapped.
         *
         * This function is only for use in widget implementations.
         */
        unmap(): void;
        /**
         * Removes `widget` from its parent.
         *
         * This function is only for use in widget implementations,
         * typically in dispose.
         */
        unparent(): void;
        /**
         * Turns off flag values for the current widget state.
         *
         * See {@link Gtk.Widget.set_state_flags}.
         *
         * This function is for use in widget implementations.
         * @param flags state flags to turn off
         */
        unset_state_flags(flags: Gtk.StateFlags | null): void;
        /**
         * Computes whether a container should give this
         *   widget extra space when possible.
         * @param hexpand_p
         * @param vexpand_p
         * @virtual
         */
        vfunc_compute_expand(hexpand_p: boolean, vexpand_p: boolean): void;
        /**
         * Tests if a given point is contained in the widget.
         *
         * The coordinates for (x, y) must be in widget coordinates, so
         * (0, 0) is assumed to be the top left of `widget`'s content area.
         * @param x X coordinate to test, relative to `widget`'s origin
         * @param y Y coordinate to test, relative to `widget`'s origin
         * @virtual
         */
        vfunc_contains(x: number, y: number): boolean;
        /**
         * Vfunc called when the CSS used by widget was changed. Widgets
         *   should then discard their caches that depend on CSS and queue resizes or
         *   redraws accordingly. The default implementation will take care of this for
         *   all the default CSS properties, so implementations must chain up.
         * @param change
         * @virtual
         */
        vfunc_css_changed(change: Gtk.CssStyleChange): void;
        /**
         * Signal emitted when the text direction of a
         *   widget changes.
         * @param previous_direction
         * @virtual
         */
        vfunc_direction_changed(previous_direction: Gtk.TextDirection): void;
        /**
         * Vfunc for `gtk_widget_child_focus()`
         * @param direction
         * @virtual
         */
        vfunc_focus(direction: Gtk.DirectionType): boolean;
        /**
         * Gets whether the widget prefers a height-for-width layout
         * or a width-for-height layout.
         *
         * Single-child widgets generally propagate the preference of
         * their child, more complex widgets need to request something
         * either in context of their children or in context of their
         * allocation capabilities.
         * @virtual
         */
        vfunc_get_request_mode(): Gtk.SizeRequestMode;
        /**
         * Causes `widget` to have the keyboard focus for the window
         * that it belongs to.
         *
         * If `widget` is not focusable, or its {@link Gtk.Widget.grab_focus}
         * implementation cannot transfer the focus to a descendant of `widget`
         * that is focusable, it will not take focus and false will be returned.
         *
         * Calling {@link Gtk.Widget.grab_focus} on an already focused widget
         * is allowed, should not have an effect, and return true.
         * @virtual
         */
        vfunc_grab_focus(): boolean;
        /**
         * Reverses the effects of [method.Gtk.Widget.show].
         *
         * This is causing the widget to be hidden (invisible to the user).
         * @virtual
         */
        vfunc_hide(): void;
        /**
         * Emits the `Gtk.Widget::keynav-failed` signal on the widget.
         *
         * This function should be called whenever keyboard navigation
         * within a single widget hits a boundary.
         *
         * The return value of this function should be interpreted
         * in a way similar to the return value of
         * {@link Gtk.Widget.child_focus}. When true is returned,
         * stay in the widget, the failed keyboard navigation is ok
         * and/or there is nowhere we can/should move the focus to.
         * When false is returned, the caller should continue with
         * keyboard navigation outside the widget, e.g. by calling
         * {@link Gtk.Widget.child_focus} on the widget’s toplevel.
         *
         * The default `Gtk.Widget::keynav-failed` handler returns
         * false for {@link Gtk.DirectionType.TAB-FORWARD} and
         * {@link Gtk.DirectionType.TAB-BACKWARD}. For the other values
         * of {@link Gtk.DirectionType} it returns true.
         *
         * Whenever the default handler returns true, it also calls
         * {@link Gtk.Widget.error_bell} to notify the user of the
         * failed keyboard navigation.
         *
         * A use case for providing an own implementation of `::keynav-failed`
         * (either by connecting to it or by overriding it) would be a row of
         * {@link Gtk.Entry} widgets where the user should be able to navigate
         * the entire row with the cursor keys, as e.g. known from user
         * interfaces that require entering license keys.
         * @param direction direction of focus movement
         * @virtual
         */
        vfunc_keynav_failed(direction: Gtk.DirectionType): boolean;
        /**
         * Causes a widget to be mapped if it isn’t already.
         *
         * This function is only for use in widget implementations.
         * @virtual
         */
        vfunc_map(): void;
        /**
         * Measures `widget` in the orientation `orientation` and for the given `for_size`.
         *
         * As an example, if `orientation` is {@link Gtk.Orientation.HORIZONTAL} and `for_size`
         * is 300, this functions will compute the minimum and natural width of `widget`
         * if it is allocated at a height of 300 pixels.
         *
         * See [GtkWidget’s geometry management section](class.Widget.html#height-for-width-geometry-management) for
         * a more details on implementing {@link Gtk.Widget.measure}.
         * @param orientation the orientation to measure
         * @param for_size Size for the opposite of `orientation`, i.e.   if `orientation` is {@link Gtk.Orientation.HORIZONTAL}, this is   the height the widget should be measured with. The {@link Gtk.Orientation.VERTICAL}   case is analogous. This way, both height-for-width and width-for-height   requests can be implemented. If no size is known, -1 can be passed.
         * @virtual
         */
        vfunc_measure(orientation: Gtk.Orientation, for_size: number): [number, number, number, number];
        /**
         * Emits the `Gtk.Widget::mnemonic-activate` signal.
         * @param group_cycling true if there are other widgets with the same mnemonic
         * @virtual
         */
        vfunc_mnemonic_activate(group_cycling: boolean): boolean;
        /**
         * Signal emitted when a change of focus is requested
         * @param direction
         * @virtual
         */
        vfunc_move_focus(direction: Gtk.DirectionType): void;
        /**
         * Signal emitted when “has-tooltip” is `true` and the
         *   hover timeout has expired with the cursor hovering “above”
         *   widget; or emitted when widget got focus in keyboard mode.
         * @param x
         * @param y
         * @param keyboard_tooltip
         * @param tooltip
         * @virtual
         */
        vfunc_query_tooltip(x: number, y: number, keyboard_tooltip: boolean, tooltip: Gtk.Tooltip): boolean;
        /**
         * Creates the GDK resources associated with a widget.
         *
         * Normally realization happens implicitly; if you show a widget
         * and all its parent containers, then the widget will be realized
         * and mapped automatically.
         *
         * Realizing a widget requires all the widget’s parent widgets to be
         * realized; calling this function realizes the widget’s parents
         * in addition to `widget` itself. If a widget is not yet inside a
         * toplevel window when you realize it, bad things will happen.
         *
         * This function is primarily used in widget implementations, and
         * isn’t very useful otherwise. Many times when you think you might
         * need it, a better approach is to connect to a signal that will be
         * called after the widget is realized automatically, such as
         * `Gtk.Widget::realize`.
         * @virtual
         */
        vfunc_realize(): void;
        /**
         * Called when the widget gets added to a {@link Gtk.Root} widget. Must
         *   chain up
         * @virtual
         */
        vfunc_root(): void;
        /**
         * Set the focus child of the widget.
         *
         * This function is only suitable for widget implementations.
         * If you want a certain widget to get the input focus, call
         * {@link Gtk.Widget.grab_focus} on it.
         * @param child a direct child widget of `widget`   or `NULL` to unset the focus child
         * @virtual
         */
        vfunc_set_focus_child(child?: Gtk.Widget | null): void;
        /**
         * Flags a widget to be displayed.
         *
         * Any widget that isn’t shown will not appear on the screen.
         *
         * Remember that you have to show the containers containing a widget,
         * in addition to the widget itself, before it will appear onscreen.
         *
         * When a toplevel widget is shown, it is immediately realized and
         * mapped; other shown widgets are realized and mapped when their
         * toplevel widget is realized and mapped.
         * @virtual
         */
        vfunc_show(): void;
        /**
         * Called to set the allocation, if the widget does
         *   not have a layout manager.
         * @param width
         * @param height
         * @param baseline
         * @virtual
         */
        vfunc_size_allocate(width: number, height: number, baseline: number): void;
        /**
         * Vfunc called when a new snapshot of the widget has to be taken.
         * @param snapshot
         * @virtual
         */
        vfunc_snapshot(snapshot: Gtk.Snapshot): void;
        /**
         * Signal emitted when the widget state changes,
         *   see `gtk_widget_get_state_flags()`.
         * @param previous_state_flags
         * @virtual
         */
        vfunc_state_flags_changed(previous_state_flags: Gtk.StateFlags): void;
        /**
         * Emitted when a system setting was changed. Must chain up.
         * @param settings
         * @virtual
         */
        vfunc_system_setting_changed(settings: Gtk.SystemSetting): void;
        /**
         * Causes a widget to be unmapped if it’s currently mapped.
         *
         * This function is only for use in widget implementations.
         * @virtual
         */
        vfunc_unmap(): void;
        /**
         * Causes a widget to be unrealized.
         *
         * This frees all GDK resources associated with the widget.
         *
         * This function is only useful in widget implementations.
         * @virtual
         */
        vfunc_unrealize(): void;
        /**
         * Called when the widget is about to be removed from its
         *   {@link Gtk.Root} widget. Must chain up
         * @virtual
         */
        vfunc_unroot(): void;
    }

    namespace StarWidget {
        // Signal signatures
        interface SignalSignatures extends Widget.SignalSignatures {
            'notify::active': (pspec: GObject.ParamSpec) => void;
            'notify::pivot-point': (pspec: GObject.ParamSpec) => void;
            'notify::rotation-x': (pspec: GObject.ParamSpec) => void;
            'notify::rotation-y': (pspec: GObject.ParamSpec) => void;
            'notify::rotation-z': (pspec: GObject.ParamSpec) => void;
            'notify::scale-x': (pspec: GObject.ParamSpec) => void;
            'notify::scale-y': (pspec: GObject.ParamSpec) => void;
            'notify::scale-z': (pspec: GObject.ParamSpec) => void;
            'notify::translation-x': (pspec: GObject.ParamSpec) => void;
            'notify::translation-y': (pspec: GObject.ParamSpec) => void;
            'notify::translation-z': (pspec: GObject.ParamSpec) => void;
            'notify::can-focus': (pspec: GObject.ParamSpec) => void;
            'notify::can-target': (pspec: GObject.ParamSpec) => void;
            'notify::css-classes': (pspec: GObject.ParamSpec) => void;
            'notify::css-name': (pspec: GObject.ParamSpec) => void;
            'notify::cursor': (pspec: GObject.ParamSpec) => void;
            'notify::focus-on-click': (pspec: GObject.ParamSpec) => void;
            'notify::focusable': (pspec: GObject.ParamSpec) => void;
            'notify::halign': (pspec: GObject.ParamSpec) => void;
            'notify::has-default': (pspec: GObject.ParamSpec) => void;
            'notify::has-focus': (pspec: GObject.ParamSpec) => void;
            'notify::has-tooltip': (pspec: GObject.ParamSpec) => void;
            'notify::height-request': (pspec: GObject.ParamSpec) => void;
            'notify::hexpand': (pspec: GObject.ParamSpec) => void;
            'notify::hexpand-set': (pspec: GObject.ParamSpec) => void;
            'notify::layout-manager': (pspec: GObject.ParamSpec) => void;
            'notify::limit-events': (pspec: GObject.ParamSpec) => void;
            'notify::margin-bottom': (pspec: GObject.ParamSpec) => void;
            'notify::margin-end': (pspec: GObject.ParamSpec) => void;
            'notify::margin-start': (pspec: GObject.ParamSpec) => void;
            'notify::margin-top': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::opacity': (pspec: GObject.ParamSpec) => void;
            'notify::overflow': (pspec: GObject.ParamSpec) => void;
            'notify::parent': (pspec: GObject.ParamSpec) => void;
            'notify::receives-default': (pspec: GObject.ParamSpec) => void;
            'notify::root': (pspec: GObject.ParamSpec) => void;
            'notify::scale-factor': (pspec: GObject.ParamSpec) => void;
            'notify::sensitive': (pspec: GObject.ParamSpec) => void;
            'notify::tooltip-markup': (pspec: GObject.ParamSpec) => void;
            'notify::tooltip-text': (pspec: GObject.ParamSpec) => void;
            'notify::valign': (pspec: GObject.ParamSpec) => void;
            'notify::vexpand': (pspec: GObject.ParamSpec) => void;
            'notify::vexpand-set': (pspec: GObject.ParamSpec) => void;
            'notify::visible': (pspec: GObject.ParamSpec) => void;
            'notify::width-request': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps
            extends
                Widget.ConstructorProps,
                Gtk.Accessible.ConstructorProps,
                Gtk.Buildable.ConstructorProps,
                Gtk.ConstraintTarget.ConstructorProps {
            active: boolean;
        }
    }

    /**
     * @gir-type Class
     */
    class StarWidget extends Widget implements Gtk.Accessible, Gtk.Buildable, Gtk.ConstraintTarget {
        static $gtype: GObject.GType<StarWidget>;

        // Properties

        /**
         * Whether the star widget is active or not. When active, the
         * star appears filled.
         */
        get active(): boolean;
        set active(val: boolean);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: StarWidget.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<StarWidget.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): StarWidget;

        // Signals

        /** @signal */
        connect<K extends keyof StarWidget.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, StarWidget.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof StarWidget.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, StarWidget.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof StarWidget.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<StarWidget.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        get_active(): boolean;
        /**
         * @param active
         */
        set_active(active: boolean): void;
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

    namespace Task {
        // Signal signatures
        interface SignalSignatures extends Object.SignalSignatures {
            'notify::complete': (pspec: GObject.ParamSpec) => void;
            'notify::creation-date': (pspec: GObject.ParamSpec) => void;
            'notify::description': (pspec: GObject.ParamSpec) => void;
            'notify::due-date': (pspec: GObject.ParamSpec) => void;
            'notify::important': (pspec: GObject.ParamSpec) => void;
            'notify::list': (pspec: GObject.ParamSpec) => void;
            'notify::position': (pspec: GObject.ParamSpec) => void;
            'notify::title': (pspec: GObject.ParamSpec) => void;
            'notify::loading': (pspec: GObject.ParamSpec) => void;
            'notify::uid': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Object.ConstructorProps {
            complete: boolean;
            creation_date: GLib.DateTime;
            creationDate: GLib.DateTime;
            description: string;
            due_date: GLib.DateTime;
            dueDate: GLib.DateTime;
            important: boolean;
            list: TaskList;
            position: number;
            title: string;
        }
    }

    /**
     * @gir-type Class
     */
    class Task extends Object {
        static $gtype: GObject.GType<Task>;

        // Properties

        get complete(): boolean;
        set complete(val: boolean);
        get creation_date(): GLib.DateTime;
        set creation_date(val: GLib.DateTime);
        get creationDate(): GLib.DateTime;
        set creationDate(val: GLib.DateTime);
        get description(): string;
        set description(val: string);
        get due_date(): GLib.DateTime;
        set due_date(val: GLib.DateTime);
        get dueDate(): GLib.DateTime;
        set dueDate(val: GLib.DateTime);
        get important(): boolean;
        set important(val: boolean);
        get list(): TaskList;
        set list(val: TaskList);
        get position(): number;
        set position(val: number);
        get title(): string;
        set title(val: string);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Task.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Task.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): Task;

        // Signals

        /** @signal */
        connect<K extends keyof Task.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Task.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Task.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Task.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Task.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Task.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods

        /**
         * Retrieves whether the task is complete or not.
         * @virtual
         */
        vfunc_get_complete(): boolean;
        /**
         * Returns the {@link GLib.DateTime} that represents the task's completion date.
         * Returns `null` if no date is set.
         * @virtual
         */
        vfunc_get_completion_date(): GLib.DateTime | null;
        /**
         * Returns the {@link GLib.DateTime} that represents the task's creation date.
         * The value is referenced for thread safety. Returns `null` if
         * no date is set.
         * @virtual
         */
        vfunc_get_creation_date(): GLib.DateTime;
        /**
         * Retrieves the description of the task.
         * @virtual
         */
        vfunc_get_description(): string;
        /**
         * Returns the {@link GLib.DateTime} that represents the task's due date.
         * The value is referenced for thread safety. Returns `null` if
         * no date is set.
         * @virtual
         */
        vfunc_get_due_date(): GLib.DateTime | null;
        /**
         * Retrieves whether `self` is `important` or not.
         * @virtual
         */
        vfunc_get_important(): boolean;
        /**
         * Returns the position of `task` inside the parent {@link Gtd.TaskList},
         * or -1 if not set.
         * @virtual
         */
        vfunc_get_position(): number;
        /**
         * Retrieves the title of the task, or `null`.
         * @virtual
         */
        vfunc_get_title(): string;
        /**
         * Updates the complete state of `task`.
         * @param complete the new value
         * @virtual
         */
        vfunc_set_complete(complete: boolean): void;
        /**
         * @param dt
         * @virtual
         */
        vfunc_set_completion_date(dt: GLib.DateTime): void;
        /**
         * Sets the creation date of `task`.
         * @param dt
         * @virtual
         */
        vfunc_set_creation_date(dt: GLib.DateTime): void;
        /**
         * Updates the description of `task`. The string is not stripped off of
         * spaces to preserve user data.
         * @param description the new description, or `null`
         * @virtual
         */
        vfunc_set_description(description?: string | null): void;
        /**
         * Updates the internal `GtdTask`::due-date property.
         * @param dt a {@link GLib.DateTime}
         * @virtual
         */
        vfunc_set_due_date(dt?: GLib.DateTime | null): void;
        /**
         * Sets whether `self` is `important` or not.
         * @param important whether `self` is important or not
         * @virtual
         */
        vfunc_set_important(important: boolean): void;
        /**
         * Sets the `task` position inside the parent {@link Gtd.TaskList}. It
         * is up to the interface to handle two or more {@link Gtd.Task} with
         * the same position value.
         * @param position the priority of `task`, or -1
         * @virtual
         */
        vfunc_set_position(position: number): void;
        /**
         * Updates the title of `task`. The string is stripped off of
         * leading spaces.
         * @param title the new title, or `null`
         * @virtual
         */
        vfunc_set_title(title?: string | null): void;

        // Methods

        /**
         * Compare `t1` and `t2`.
         * @param t2 a {@link Gtd.Task}
         * @returns %-1 if `t1` comes before `t2`, %1 for the opposite, %0 if they're equal
         */
        compare(t2?: Task | null): number;
        /**
         * Retrieves whether the task is complete or not.
         * @returns `true` if the task is complete, `false` otherwise
         */
        get_complete(): boolean;
        /**
         * Returns the {@link GLib.DateTime} that represents the task's completion date.
         * Returns `null` if no date is set.
         * @returns the internal {@link GLib.DateTime} or `null`. Unreference it after use.
         */
        get_completion_date(): GLib.DateTime | null;
        /**
         * Returns the {@link GLib.DateTime} that represents the task's creation date.
         * The value is referenced for thread safety. Returns `null` if
         * no date is set.
         * @returns the internal {@link GLib.DateTime} referenced for thread safety, or `null`. Unreference it after use.
         */
        get_creation_date(): GLib.DateTime;
        /**
         * Retrieves the description of the task.
         * @returns the description of `task`
         */
        get_description(): string;
        /**
         * Returns the {@link GLib.DateTime} that represents the task's due date.
         * The value is referenced for thread safety. Returns `null` if
         * no date is set.
         * @returns the internal {@link GLib.DateTime} referenced for thread safety, or `null`. Unreference it after use.
         */
        get_due_date(): GLib.DateTime | null;
        /**
         * Retrieves whether `self` is `important` or not.
         * @returns `true` if `self` is important, `false` otherwise
         */
        get_important(): boolean;
        /**
         * Returns a weak reference to the {@link Gtd.TaskList} that
         * owns the given `task`.
         * @returns a weak reference to the {@link Gtd.TaskList} that owns `task`. Do not free after usage.
         */
        get_list(): TaskList;
        /**
         * Returns the position of `task` inside the parent {@link Gtd.TaskList},
         * or -1 if not set.
         * @returns the position of the task, or -1
         */
        get_position(): number;
        /**
         * Utility function to retrieve the data provider that backs this
         * task. Notice that this is exactly the same as writing:
         *
         *
         * ```c
         * GtdTaskList *list;
         * GtdProvider *provider;
         *
         * list = gtd_task_get_list (task);
         * provider = gtd_task_list_get_provider (list);
         * ```
         *
         * @returns the {@link Gtd.Provider} of this task's list.
         */
        get_provider(): Provider | null;
        /**
         * Retrieves the title of the task, or `null`.
         * @returns the title of `task`, or `null`
         */
        get_title(): string;
        /**
         * Updates the complete state of `task`.
         * @param complete the new value
         */
        set_complete(complete: boolean): void;
        /**
         * Sets the creation date of `task`.
         * @param dt
         */
        set_creation_date(dt: GLib.DateTime): void;
        /**
         * Updates the description of `task`. The string is not stripped off of
         * spaces to preserve user data.
         * @param description the new description, or `null`
         */
        set_description(description?: string | null): void;
        /**
         * Updates the internal `GtdTask`::due-date property.
         * @param dt a {@link GLib.DateTime}
         */
        set_due_date(dt?: GLib.DateTime | null): void;
        /**
         * Sets whether `self` is `important` or not.
         * @param important whether `self` is important or not
         */
        set_important(important: boolean): void;
        /**
         * Sets the parent {@link Gtd.TaskList} of `task`.
         * @param list a {@link Gtd.TaskList}
         */
        set_list(list?: TaskList | null): void;
        /**
         * Sets the `task` position inside the parent {@link Gtd.TaskList}. It
         * is up to the interface to handle two or more {@link Gtd.Task} with
         * the same position value.
         * @param position the priority of `task`, or -1
         */
        set_position(position: number): void;
        /**
         * Updates the title of `task`. The string is stripped off of
         * leading spaces.
         * @param title the new title, or `null`
         */
        set_title(title?: string | null): void;
    }

    namespace TaskList {
        // Signal signatures
        interface SignalSignatures extends Object.SignalSignatures {
            /**
             * The ::task-added signal is emitted after a {@link Gtd.Task}
             * is added to the list.
             * @signal
             */
            'task-added': (arg0: Task) => void;
            /**
             * The ::task-removed signal is emitted after a {@link Gtd.Task}
             * is removed from the list.
             * @signal
             */
            'task-removed': (arg0: Task) => void;
            /**
             * The ::task-updated signal is emitted after a {@link Gtd.Task}
             * in the list is updated.
             * @signal
             */
            'task-updated': (arg0: Task) => void;
            'notify::archived': (pspec: GObject.ParamSpec) => void;
            'notify::color': (pspec: GObject.ParamSpec) => void;
            'notify::is-removable': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::provider': (pspec: GObject.ParamSpec) => void;
            'notify::loading': (pspec: GObject.ParamSpec) => void;
            'notify::uid': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps<A extends GObject.Object = GObject.Object>
            extends Object.ConstructorProps, Gio.ListModel.ConstructorProps {
            archived: boolean;
            color: Gdk.RGBA;
            is_removable: boolean;
            isRemovable: boolean;
            name: string;
            provider: Provider;
        }
    }

    /**
     * @gir-type Class
     */
    class TaskList<A extends GObject.Object = GObject.Object> extends Object implements Gio.ListModel<A> {
        static $gtype: GObject.GType<TaskList>;

        // Properties

        get archived(): boolean;
        set archived(val: boolean);
        get color(): Gdk.RGBA;
        set color(val: Gdk.RGBA);
        get is_removable(): boolean;
        set is_removable(val: boolean);
        get isRemovable(): boolean;
        set isRemovable(val: boolean);
        get name(): string;
        set name(val: string);
        get provider(): Provider;
        set provider(val: Provider);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: TaskList.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<TaskList.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](provider?: Provider | null): TaskList;
        // Conflicted with Gtd.Object.new

        static ['new'](...args: never[]): any;

        // Signals

        /** @signal */
        connect<K extends keyof TaskList.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, TaskList.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof TaskList.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, TaskList.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof TaskList.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<TaskList.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods

        /**
         * Retrieves whether `self` is archived or not. Archived task lists
         * are hidden by default, and new tasks cannot be added.
         * @virtual
         */
        vfunc_get_archived(): boolean;
        /**
         * Sets the "archive" property of `self` to `archived`.
         * @param archived whether `self` is archived or not
         * @virtual
         */
        vfunc_set_archived(archived: boolean): void;
        /**
         * @param task
         * @virtual
         */
        vfunc_task_added(task: Task): void;
        /**
         * @param task
         * @virtual
         */
        vfunc_task_removed(task: Task): void;
        /**
         * @param task
         * @virtual
         */
        vfunc_task_updated(task: Task): void;

        // Methods

        /**
         * Adds `task` to `list`.
         * @param task a {@link Gtd.Task}
         */
        add_task(task: Task): void;
        /**
         * Checks if `task` is inside `list`.
         * @param task a {@link Gtd.Task}
         * @returns `true` if `list` contains `task`, `false` otherwise
         */
        contains(task: Task): boolean;
        /**
         * Retrieves whether `self` is archived or not. Archived task lists
         * are hidden by default, and new tasks cannot be added.
         * @returns `true` if `self` is archived, `false` otherwise.
         */
        get_archived(): boolean;
        /**
         * Retrieves the color of %list. It is guarantee that it always returns a
         * color, given a valid {@link Gtd.TaskList}.
         * @returns the color of %list. Free with %gdk_rgba_free after use.
         */
        get_color(): Gdk.RGBA;
        /**
         * Retrieves the user-visible name of `list`, or `null`.
         * @returns the internal name of `list`. Do not free after use.
         */
        get_name(): string;
        /**
         * Retrieves the {@link Gtd.Provider} who owns this list.
         * @returns a {@link Gtd.Provider}
         */
        get_provider(): Provider;
        /**
         * Retrieves a task from `self` with the given `id`.
         * @param id the id of the task
         * @returns a {@link Gtd.Task}, or `null`
         */
        get_task_by_id(id: string): Task | null;
        /**
         * Imports task into `self`
         * @param task a {@link Gtd.Task}
         * @param cancellable
         */
        import_task(task: Task, cancellable?: Gio.Cancellable | null): globalThis.Promise<Gio.Task>;
        /**
         * Imports task into `self`
         * @param task a {@link Gtd.Task}
         * @param cancellable
         * @param callback
         */
        import_task(
            task: Task,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Imports task into `self`
         * @param task a {@link Gtd.Task}
         * @param cancellable
         * @param callback
         */
        import_task(
            task: Task,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<Gio.Task> | void;
        /**
         * Imports task into `self`
         * @param result a {@link Gio.AsyncResult}
         * @returns a {@link Gio.Task}
         */
        import_task_finish(result: Gio.AsyncResult): Gio.Task;
        /**
         * Retrieves whether `self` is the inbox task list of its provider.
         * @returns `true` if `self` is the inbox of it's provider, `false` otherwise.
         */
        is_inbox(): boolean;
        /**
         * Moves `task` to `new_position`, and repositions the elements
         * in between as well.
         *
         * `task` must belong to `self`.
         * @param task a {@link Gtd.Task}
         * @param new_position the new position of `task` inside `self`
         */
        move_task_to_position(task: Task, new_position: number): void;
        /**
         * Removes `task` from `list` if it's inside the list.
         * @param task a {@link Gtd.Task}
         */
        remove_task(task: Task): void;
        /**
         * Sets the "archive" property of `self` to `archived`.
         * @param archived whether `self` is archived or not
         */
        set_archived(archived: boolean): void;
        /**
         * sets the color of `list`.
         * @param color
         */
        set_color(color: Gdk.RGBA): void;
        /**
         * Sets whether `list` can be deleted or not.
         * @param is_removable `true` if `list` can be deleted, `false` otherwise
         */
        set_is_removable(is_removable: boolean): void;
        /**
         * Sets the `list` name to `name`.
         * @param name the name of `list`
         */
        set_name(name?: string | null): void;
        /**
         * Sets the provider of this tasklist.
         * @param provider a {@link Gtd.Provider}, or `null`
         */
        set_provider(provider?: Provider | null): void;
        /**
         * Updates `task` at `list`.
         * @param task a {@link Gtd.Task}
         */
        update_task(task: Task): void;
        /**
         * Gets the type of the items in `list`.
         *
         * All items returned from `g_list_model_get_item()` are of the type
         * returned by this function, or a subtype, or if the type is an
         * interface, they are an implementation of that interface.
         *
         * The item type of a {@link Gio.ListModel} can not change during the life of the
         * model.
         * @returns the {@link GObject.GType} of the items contained in `list`.
         */
        get_item_type(): GObject.GType;
        /**
         * Gets the number of items in `list`.
         *
         * Depending on the model implementation, calling this function may be
         * less efficient than iterating the list with increasing values for
         * `position` until `g_list_model_get_item()` returns `null`.
         * @returns the number of items in `list`.
         */
        get_n_items(): number;
        /**
         * Get the item at `position`.
         *
         * If `position` is greater than the number of items in `list`, `null` is
         * returned.
         *
         * `null` is never returned for an index that is smaller than the length
         * of the list.
         *
         * This function is meant to be used by language bindings in place
         * of `g_list_model_get_item()`.
         *
         * See also: `g_list_model_get_n_items()`
         * @param position the position of the item to fetch
         * @returns the object at `position`.
         */
        get_item(position: number): A | null;
        /**
         * Emits the {@link Gio.ListModel.SignalSignatures.items_changed | Gio.ListModel::items-changed} signal on `list`.
         *
         * This function should only be called by classes implementing
         * {@link Gio.ListModel}. It has to be called after the internal representation
         * of `list` has been updated, because handlers connected to this signal
         * might query the new state of the list.
         *
         * Implementations must only make changes to the model (as visible to
         * its consumer) in places that will not cause problems for that
         * consumer.  For models that are driven directly by a write API (such
         * as {@link Gio.ListStore}), changes can be reported in response to uses of that
         * API.  For models that represent remote data, changes should only be
         * made from a fresh mainloop dispatch.  It is particularly not
         * permitted to make changes in response to a call to the {@link Gio.ListModel}
         * consumer API.
         *
         * Stated another way: in general, it is assumed that code making a
         * series of accesses to the model via the API, without returning to the
         * mainloop, and without calling other code, will continue to view the
         * same contents of the model.
         * @param position the position at which `list` changed
         * @param removed the number of items removed
         * @param added the number of items added
         */
        items_changed(position: number, removed: number, added: number): void;
        /**
         * Get the item at `position`. If `position` is greater than the number of
         * items in `list`, `null` is returned.
         *
         * `null` is never returned for an index that is smaller than the length
         * of the list.  See `g_list_model_get_n_items()`.
         *
         * The same {@link GObject.Object} instance may not appear more than once in a {@link Gio.ListModel}.
         * @param position the position of the item to fetch
         * @virtual
         */
        vfunc_get_item(position: number): A | null;
        /**
         * Gets the type of the items in `list`.
         *
         * All items returned from `g_list_model_get_item()` are of the type
         * returned by this function, or a subtype, or if the type is an
         * interface, they are an implementation of that interface.
         *
         * The item type of a {@link Gio.ListModel} can not change during the life of the
         * model.
         * @virtual
         */
        vfunc_get_item_type(): GObject.GType;
        /**
         * Gets the number of items in `list`.
         *
         * Depending on the model implementation, calling this function may be
         * less efficient than iterating the list with increasing values for
         * `position` until `g_list_model_get_item()` returns `null`.
         * @virtual
         */
        vfunc_get_n_items(): number;
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

    namespace TaskListView {
        // Signal signatures
        interface SignalSignatures extends Gtk.Box.SignalSignatures {
            'notify::show-due-date': (pspec: GObject.ParamSpec) => void;
            'notify::show-list-name': (pspec: GObject.ParamSpec) => void;
            'notify::baseline-child': (pspec: GObject.ParamSpec) => void;
            'notify::baseline-position': (pspec: GObject.ParamSpec) => void;
            'notify::homogeneous': (pspec: GObject.ParamSpec) => void;
            'notify::spacing': (pspec: GObject.ParamSpec) => void;
            'notify::can-focus': (pspec: GObject.ParamSpec) => void;
            'notify::can-target': (pspec: GObject.ParamSpec) => void;
            'notify::css-classes': (pspec: GObject.ParamSpec) => void;
            'notify::css-name': (pspec: GObject.ParamSpec) => void;
            'notify::cursor': (pspec: GObject.ParamSpec) => void;
            'notify::focus-on-click': (pspec: GObject.ParamSpec) => void;
            'notify::focusable': (pspec: GObject.ParamSpec) => void;
            'notify::halign': (pspec: GObject.ParamSpec) => void;
            'notify::has-default': (pspec: GObject.ParamSpec) => void;
            'notify::has-focus': (pspec: GObject.ParamSpec) => void;
            'notify::has-tooltip': (pspec: GObject.ParamSpec) => void;
            'notify::height-request': (pspec: GObject.ParamSpec) => void;
            'notify::hexpand': (pspec: GObject.ParamSpec) => void;
            'notify::hexpand-set': (pspec: GObject.ParamSpec) => void;
            'notify::layout-manager': (pspec: GObject.ParamSpec) => void;
            'notify::limit-events': (pspec: GObject.ParamSpec) => void;
            'notify::margin-bottom': (pspec: GObject.ParamSpec) => void;
            'notify::margin-end': (pspec: GObject.ParamSpec) => void;
            'notify::margin-start': (pspec: GObject.ParamSpec) => void;
            'notify::margin-top': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::opacity': (pspec: GObject.ParamSpec) => void;
            'notify::overflow': (pspec: GObject.ParamSpec) => void;
            'notify::parent': (pspec: GObject.ParamSpec) => void;
            'notify::receives-default': (pspec: GObject.ParamSpec) => void;
            'notify::root': (pspec: GObject.ParamSpec) => void;
            'notify::scale-factor': (pspec: GObject.ParamSpec) => void;
            'notify::sensitive': (pspec: GObject.ParamSpec) => void;
            'notify::tooltip-markup': (pspec: GObject.ParamSpec) => void;
            'notify::tooltip-text': (pspec: GObject.ParamSpec) => void;
            'notify::valign': (pspec: GObject.ParamSpec) => void;
            'notify::vexpand': (pspec: GObject.ParamSpec) => void;
            'notify::vexpand-set': (pspec: GObject.ParamSpec) => void;
            'notify::visible': (pspec: GObject.ParamSpec) => void;
            'notify::width-request': (pspec: GObject.ParamSpec) => void;
            'notify::orientation': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps
            extends
                Gtk.Box.ConstructorProps,
                Gtk.Accessible.ConstructorProps,
                Gtk.Buildable.ConstructorProps,
                Gtk.ConstraintTarget.ConstructorProps,
                Gtk.Orientable.ConstructorProps {
            show_due_date: boolean;
            showDueDate: boolean;
            show_list_name: boolean;
            showListName: boolean;
        }
    }

    /**
     * @gir-type Class
     */
    class TaskListView extends Gtk.Box implements Gtk.Accessible, Gtk.Buildable, Gtk.ConstraintTarget, Gtk.Orientable {
        static $gtype: GObject.GType<TaskListView>;

        // Properties

        get show_due_date(): boolean;
        set show_due_date(val: boolean);
        get showDueDate(): boolean;
        set showDueDate(val: boolean);
        get show_list_name(): boolean;
        set show_list_name(val: boolean);
        get showListName(): boolean;
        set showListName(val: boolean);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: TaskListView.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<TaskListView.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): TaskListView;

        // Signals

        /** @signal */
        connect<K extends keyof TaskListView.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, TaskListView.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof TaskListView.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, TaskListView.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof TaskListView.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<TaskListView.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Retrieves the current default date which new tasks are set to.
         * @returns a {@link GLib.DateTime}, or `null`
         */
        get_default_date(): GLib.DateTime | null;
        /**
         * Retrieves the {@link Gtd.TaskList} from `view`, or `null` if none was set.
         * @returns the {@link Gio.ListModel} of `view`, or `null` is none was set.
         */
        get_model(): Gio.ListModel;
        /**
         * Retrieves whether the `self` is showing the due dates of the tasks
         * or not.
         * @returns `true` if due dates are visible, `false` otherwise.
         */
        get_show_due_date(): boolean;
        /**
         * Whether `view` shows the tasks' list names.
         * @returns `true` if `view` show the tasks' list names, `false` otherwise
         */
        get_show_list_name(): boolean;
        /**
         * Sets the current default date.
         * @param default_date the default_date, or `null`
         */
        set_default_date(default_date?: GLib.DateTime | null): void;
        /**
         * Sets `func` as the header function of `view`. You can safely call
         * %gtk_list_box_row_set_header from within `func`.
         *
         * Do not unref nor free any of the passed data.
         * @param func the header function
         */
        set_header_func(func?: TaskListViewHeaderFunc | null): void;
        /**
         * Sets the internal {@link Gio.ListModel} of `view`. The model must have
         * its element GType as `GtdTask`.
         * @param model a {@link Gio.ListModel}
         */
        set_model(model: Gio.ListModel): void;
        /**
         * Sets whether `self` shows the due dates of the tasks or not.
         * @param show_due_date `true` to show due dates, `false` otherwise
         */
        set_show_due_date(show_due_date: boolean): void;
        /**
         * Whether `view` should should it's tasks' list name.
         * @param show_list_name `true` to show list names, `false` to hide it
         */
        set_show_list_name(show_list_name: boolean): void;
        /**
         * The orientation of the orientable.
         * @category Inherited from Gtk.Orientable
         */
        get orientation(): Gtk.Orientation;
        set orientation(val: Gtk.Orientation);
        /**
         * Retrieves the orientation of the `orientable`.
         * @returns the orientation of the `orientable`
         */
        get_orientation(): Gtk.Orientation;
        /**
         * Sets the orientation of the `orientable`.
         * @param orientation the orientable’s new orientation
         */
        set_orientation(orientation: Gtk.Orientation | null): void;
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

    namespace Widget {
        // Signal signatures
        interface SignalSignatures extends Gtk.Widget.SignalSignatures {
            /**
             * The ::transition-stopped signal is emitted once a transition
             * is stopped; a transition is stopped once it reached its total
             * duration (including eventual repeats), it has been stopped
             * using `gtd_timeline_stop()`, or it has been removed from the
             * transitions applied on `actor`, using `gtd_actor_remove_transition()`.
             * @signal
             * @since 1.12
             */
            'transition-stopped': (arg0: string, arg1: boolean) => void;
            /**
             * The ::transitions-completed signal is emitted once all transitions
             * involving `actor` are complete.
             * @signal
             * @since 1.10
             */
            'transitions-completed': () => void;
            'notify::pivot-point': (pspec: GObject.ParamSpec) => void;
            'notify::rotation-x': (pspec: GObject.ParamSpec) => void;
            'notify::rotation-y': (pspec: GObject.ParamSpec) => void;
            'notify::rotation-z': (pspec: GObject.ParamSpec) => void;
            'notify::scale-x': (pspec: GObject.ParamSpec) => void;
            'notify::scale-y': (pspec: GObject.ParamSpec) => void;
            'notify::scale-z': (pspec: GObject.ParamSpec) => void;
            'notify::translation-x': (pspec: GObject.ParamSpec) => void;
            'notify::translation-y': (pspec: GObject.ParamSpec) => void;
            'notify::translation-z': (pspec: GObject.ParamSpec) => void;
            'notify::can-focus': (pspec: GObject.ParamSpec) => void;
            'notify::can-target': (pspec: GObject.ParamSpec) => void;
            'notify::css-classes': (pspec: GObject.ParamSpec) => void;
            'notify::css-name': (pspec: GObject.ParamSpec) => void;
            'notify::cursor': (pspec: GObject.ParamSpec) => void;
            'notify::focus-on-click': (pspec: GObject.ParamSpec) => void;
            'notify::focusable': (pspec: GObject.ParamSpec) => void;
            'notify::halign': (pspec: GObject.ParamSpec) => void;
            'notify::has-default': (pspec: GObject.ParamSpec) => void;
            'notify::has-focus': (pspec: GObject.ParamSpec) => void;
            'notify::has-tooltip': (pspec: GObject.ParamSpec) => void;
            'notify::height-request': (pspec: GObject.ParamSpec) => void;
            'notify::hexpand': (pspec: GObject.ParamSpec) => void;
            'notify::hexpand-set': (pspec: GObject.ParamSpec) => void;
            'notify::layout-manager': (pspec: GObject.ParamSpec) => void;
            'notify::limit-events': (pspec: GObject.ParamSpec) => void;
            'notify::margin-bottom': (pspec: GObject.ParamSpec) => void;
            'notify::margin-end': (pspec: GObject.ParamSpec) => void;
            'notify::margin-start': (pspec: GObject.ParamSpec) => void;
            'notify::margin-top': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::opacity': (pspec: GObject.ParamSpec) => void;
            'notify::overflow': (pspec: GObject.ParamSpec) => void;
            'notify::parent': (pspec: GObject.ParamSpec) => void;
            'notify::receives-default': (pspec: GObject.ParamSpec) => void;
            'notify::root': (pspec: GObject.ParamSpec) => void;
            'notify::scale-factor': (pspec: GObject.ParamSpec) => void;
            'notify::sensitive': (pspec: GObject.ParamSpec) => void;
            'notify::tooltip-markup': (pspec: GObject.ParamSpec) => void;
            'notify::tooltip-text': (pspec: GObject.ParamSpec) => void;
            'notify::valign': (pspec: GObject.ParamSpec) => void;
            'notify::vexpand': (pspec: GObject.ParamSpec) => void;
            'notify::vexpand-set': (pspec: GObject.ParamSpec) => void;
            'notify::visible': (pspec: GObject.ParamSpec) => void;
            'notify::width-request': (pspec: GObject.ParamSpec) => void;
            'notify::accessible-role': (pspec: GObject.ParamSpec) => void;
            /**
             * The ::transition-stopped signal is emitted once a transition
             * is stopped; a transition is stopped once it reached its total
             * duration (including eventual repeats), it has been stopped
             * using `gtd_timeline_stop()`, or it has been removed from the
             * transitions applied on `actor`, using `gtd_actor_remove_transition()`.
             * @signal
             * @since 1.12
             */
            'transition-stopped::pivot-point': (arg0: string, arg1: boolean) => void;
            /**
             * The ::transition-stopped signal is emitted once a transition
             * is stopped; a transition is stopped once it reached its total
             * duration (including eventual repeats), it has been stopped
             * using `gtd_timeline_stop()`, or it has been removed from the
             * transitions applied on `actor`, using `gtd_actor_remove_transition()`.
             * @signal
             * @since 1.12
             */
            'transition-stopped::rotation-x': (arg0: string, arg1: boolean) => void;
            /**
             * The ::transition-stopped signal is emitted once a transition
             * is stopped; a transition is stopped once it reached its total
             * duration (including eventual repeats), it has been stopped
             * using `gtd_timeline_stop()`, or it has been removed from the
             * transitions applied on `actor`, using `gtd_actor_remove_transition()`.
             * @signal
             * @since 1.12
             */
            'transition-stopped::rotation-y': (arg0: string, arg1: boolean) => void;
            /**
             * The ::transition-stopped signal is emitted once a transition
             * is stopped; a transition is stopped once it reached its total
             * duration (including eventual repeats), it has been stopped
             * using `gtd_timeline_stop()`, or it has been removed from the
             * transitions applied on `actor`, using `gtd_actor_remove_transition()`.
             * @signal
             * @since 1.12
             */
            'transition-stopped::rotation-z': (arg0: string, arg1: boolean) => void;
            /**
             * The ::transition-stopped signal is emitted once a transition
             * is stopped; a transition is stopped once it reached its total
             * duration (including eventual repeats), it has been stopped
             * using `gtd_timeline_stop()`, or it has been removed from the
             * transitions applied on `actor`, using `gtd_actor_remove_transition()`.
             * @signal
             * @since 1.12
             */
            'transition-stopped::scale-x': (arg0: string, arg1: boolean) => void;
            /**
             * The ::transition-stopped signal is emitted once a transition
             * is stopped; a transition is stopped once it reached its total
             * duration (including eventual repeats), it has been stopped
             * using `gtd_timeline_stop()`, or it has been removed from the
             * transitions applied on `actor`, using `gtd_actor_remove_transition()`.
             * @signal
             * @since 1.12
             */
            'transition-stopped::scale-y': (arg0: string, arg1: boolean) => void;
            /**
             * The ::transition-stopped signal is emitted once a transition
             * is stopped; a transition is stopped once it reached its total
             * duration (including eventual repeats), it has been stopped
             * using `gtd_timeline_stop()`, or it has been removed from the
             * transitions applied on `actor`, using `gtd_actor_remove_transition()`.
             * @signal
             * @since 1.12
             */
            'transition-stopped::scale-z': (arg0: string, arg1: boolean) => void;
            /**
             * The ::transition-stopped signal is emitted once a transition
             * is stopped; a transition is stopped once it reached its total
             * duration (including eventual repeats), it has been stopped
             * using `gtd_timeline_stop()`, or it has been removed from the
             * transitions applied on `actor`, using `gtd_actor_remove_transition()`.
             * @signal
             * @since 1.12
             */
            'transition-stopped::translation-x': (arg0: string, arg1: boolean) => void;
            /**
             * The ::transition-stopped signal is emitted once a transition
             * is stopped; a transition is stopped once it reached its total
             * duration (including eventual repeats), it has been stopped
             * using `gtd_timeline_stop()`, or it has been removed from the
             * transitions applied on `actor`, using `gtd_actor_remove_transition()`.
             * @signal
             * @since 1.12
             */
            'transition-stopped::translation-y': (arg0: string, arg1: boolean) => void;
            /**
             * The ::transition-stopped signal is emitted once a transition
             * is stopped; a transition is stopped once it reached its total
             * duration (including eventual repeats), it has been stopped
             * using `gtd_timeline_stop()`, or it has been removed from the
             * transitions applied on `actor`, using `gtd_actor_remove_transition()`.
             * @signal
             * @since 1.12
             */
            'transition-stopped::translation-z': (arg0: string, arg1: boolean) => void;
            /**
             * The ::transition-stopped signal is emitted once a transition
             * is stopped; a transition is stopped once it reached its total
             * duration (including eventual repeats), it has been stopped
             * using `gtd_timeline_stop()`, or it has been removed from the
             * transitions applied on `actor`, using `gtd_actor_remove_transition()`.
             * @signal
             * @since 1.12
             */
            'transition-stopped::can-focus': (arg0: string, arg1: boolean) => void;
            /**
             * The ::transition-stopped signal is emitted once a transition
             * is stopped; a transition is stopped once it reached its total
             * duration (including eventual repeats), it has been stopped
             * using `gtd_timeline_stop()`, or it has been removed from the
             * transitions applied on `actor`, using `gtd_actor_remove_transition()`.
             * @signal
             * @since 1.12
             */
            'transition-stopped::can-target': (arg0: string, arg1: boolean) => void;
            /**
             * The ::transition-stopped signal is emitted once a transition
             * is stopped; a transition is stopped once it reached its total
             * duration (including eventual repeats), it has been stopped
             * using `gtd_timeline_stop()`, or it has been removed from the
             * transitions applied on `actor`, using `gtd_actor_remove_transition()`.
             * @signal
             * @since 1.12
             */
            'transition-stopped::css-classes': (arg0: string, arg1: boolean) => void;
            /**
             * The ::transition-stopped signal is emitted once a transition
             * is stopped; a transition is stopped once it reached its total
             * duration (including eventual repeats), it has been stopped
             * using `gtd_timeline_stop()`, or it has been removed from the
             * transitions applied on `actor`, using `gtd_actor_remove_transition()`.
             * @signal
             * @since 1.12
             */
            'transition-stopped::css-name': (arg0: string, arg1: boolean) => void;
            /**
             * The ::transition-stopped signal is emitted once a transition
             * is stopped; a transition is stopped once it reached its total
             * duration (including eventual repeats), it has been stopped
             * using `gtd_timeline_stop()`, or it has been removed from the
             * transitions applied on `actor`, using `gtd_actor_remove_transition()`.
             * @signal
             * @since 1.12
             */
            'transition-stopped::cursor': (arg0: string, arg1: boolean) => void;
            /**
             * The ::transition-stopped signal is emitted once a transition
             * is stopped; a transition is stopped once it reached its total
             * duration (including eventual repeats), it has been stopped
             * using `gtd_timeline_stop()`, or it has been removed from the
             * transitions applied on `actor`, using `gtd_actor_remove_transition()`.
             * @signal
             * @since 1.12
             */
            'transition-stopped::focus-on-click': (arg0: string, arg1: boolean) => void;
            /**
             * The ::transition-stopped signal is emitted once a transition
             * is stopped; a transition is stopped once it reached its total
             * duration (including eventual repeats), it has been stopped
             * using `gtd_timeline_stop()`, or it has been removed from the
             * transitions applied on `actor`, using `gtd_actor_remove_transition()`.
             * @signal
             * @since 1.12
             */
            'transition-stopped::focusable': (arg0: string, arg1: boolean) => void;
            /**
             * The ::transition-stopped signal is emitted once a transition
             * is stopped; a transition is stopped once it reached its total
             * duration (including eventual repeats), it has been stopped
             * using `gtd_timeline_stop()`, or it has been removed from the
             * transitions applied on `actor`, using `gtd_actor_remove_transition()`.
             * @signal
             * @since 1.12
             */
            'transition-stopped::halign': (arg0: string, arg1: boolean) => void;
            /**
             * The ::transition-stopped signal is emitted once a transition
             * is stopped; a transition is stopped once it reached its total
             * duration (including eventual repeats), it has been stopped
             * using `gtd_timeline_stop()`, or it has been removed from the
             * transitions applied on `actor`, using `gtd_actor_remove_transition()`.
             * @signal
             * @since 1.12
             */
            'transition-stopped::has-default': (arg0: string, arg1: boolean) => void;
            /**
             * The ::transition-stopped signal is emitted once a transition
             * is stopped; a transition is stopped once it reached its total
             * duration (including eventual repeats), it has been stopped
             * using `gtd_timeline_stop()`, or it has been removed from the
             * transitions applied on `actor`, using `gtd_actor_remove_transition()`.
             * @signal
             * @since 1.12
             */
            'transition-stopped::has-focus': (arg0: string, arg1: boolean) => void;
            /**
             * The ::transition-stopped signal is emitted once a transition
             * is stopped; a transition is stopped once it reached its total
             * duration (including eventual repeats), it has been stopped
             * using `gtd_timeline_stop()`, or it has been removed from the
             * transitions applied on `actor`, using `gtd_actor_remove_transition()`.
             * @signal
             * @since 1.12
             */
            'transition-stopped::has-tooltip': (arg0: string, arg1: boolean) => void;
            /**
             * The ::transition-stopped signal is emitted once a transition
             * is stopped; a transition is stopped once it reached its total
             * duration (including eventual repeats), it has been stopped
             * using `gtd_timeline_stop()`, or it has been removed from the
             * transitions applied on `actor`, using `gtd_actor_remove_transition()`.
             * @signal
             * @since 1.12
             */
            'transition-stopped::height-request': (arg0: string, arg1: boolean) => void;
            /**
             * The ::transition-stopped signal is emitted once a transition
             * is stopped; a transition is stopped once it reached its total
             * duration (including eventual repeats), it has been stopped
             * using `gtd_timeline_stop()`, or it has been removed from the
             * transitions applied on `actor`, using `gtd_actor_remove_transition()`.
             * @signal
             * @since 1.12
             */
            'transition-stopped::hexpand': (arg0: string, arg1: boolean) => void;
            /**
             * The ::transition-stopped signal is emitted once a transition
             * is stopped; a transition is stopped once it reached its total
             * duration (including eventual repeats), it has been stopped
             * using `gtd_timeline_stop()`, or it has been removed from the
             * transitions applied on `actor`, using `gtd_actor_remove_transition()`.
             * @signal
             * @since 1.12
             */
            'transition-stopped::hexpand-set': (arg0: string, arg1: boolean) => void;
            /**
             * The ::transition-stopped signal is emitted once a transition
             * is stopped; a transition is stopped once it reached its total
             * duration (including eventual repeats), it has been stopped
             * using `gtd_timeline_stop()`, or it has been removed from the
             * transitions applied on `actor`, using `gtd_actor_remove_transition()`.
             * @signal
             * @since 1.12
             */
            'transition-stopped::layout-manager': (arg0: string, arg1: boolean) => void;
            /**
             * The ::transition-stopped signal is emitted once a transition
             * is stopped; a transition is stopped once it reached its total
             * duration (including eventual repeats), it has been stopped
             * using `gtd_timeline_stop()`, or it has been removed from the
             * transitions applied on `actor`, using `gtd_actor_remove_transition()`.
             * @signal
             * @since 1.12
             */
            'transition-stopped::limit-events': (arg0: string, arg1: boolean) => void;
            /**
             * The ::transition-stopped signal is emitted once a transition
             * is stopped; a transition is stopped once it reached its total
             * duration (including eventual repeats), it has been stopped
             * using `gtd_timeline_stop()`, or it has been removed from the
             * transitions applied on `actor`, using `gtd_actor_remove_transition()`.
             * @signal
             * @since 1.12
             */
            'transition-stopped::margin-bottom': (arg0: string, arg1: boolean) => void;
            /**
             * The ::transition-stopped signal is emitted once a transition
             * is stopped; a transition is stopped once it reached its total
             * duration (including eventual repeats), it has been stopped
             * using `gtd_timeline_stop()`, or it has been removed from the
             * transitions applied on `actor`, using `gtd_actor_remove_transition()`.
             * @signal
             * @since 1.12
             */
            'transition-stopped::margin-end': (arg0: string, arg1: boolean) => void;
            /**
             * The ::transition-stopped signal is emitted once a transition
             * is stopped; a transition is stopped once it reached its total
             * duration (including eventual repeats), it has been stopped
             * using `gtd_timeline_stop()`, or it has been removed from the
             * transitions applied on `actor`, using `gtd_actor_remove_transition()`.
             * @signal
             * @since 1.12
             */
            'transition-stopped::margin-start': (arg0: string, arg1: boolean) => void;
            /**
             * The ::transition-stopped signal is emitted once a transition
             * is stopped; a transition is stopped once it reached its total
             * duration (including eventual repeats), it has been stopped
             * using `gtd_timeline_stop()`, or it has been removed from the
             * transitions applied on `actor`, using `gtd_actor_remove_transition()`.
             * @signal
             * @since 1.12
             */
            'transition-stopped::margin-top': (arg0: string, arg1: boolean) => void;
            /**
             * The ::transition-stopped signal is emitted once a transition
             * is stopped; a transition is stopped once it reached its total
             * duration (including eventual repeats), it has been stopped
             * using `gtd_timeline_stop()`, or it has been removed from the
             * transitions applied on `actor`, using `gtd_actor_remove_transition()`.
             * @signal
             * @since 1.12
             */
            'transition-stopped::name': (arg0: string, arg1: boolean) => void;
            /**
             * The ::transition-stopped signal is emitted once a transition
             * is stopped; a transition is stopped once it reached its total
             * duration (including eventual repeats), it has been stopped
             * using `gtd_timeline_stop()`, or it has been removed from the
             * transitions applied on `actor`, using `gtd_actor_remove_transition()`.
             * @signal
             * @since 1.12
             */
            'transition-stopped::opacity': (arg0: string, arg1: boolean) => void;
            /**
             * The ::transition-stopped signal is emitted once a transition
             * is stopped; a transition is stopped once it reached its total
             * duration (including eventual repeats), it has been stopped
             * using `gtd_timeline_stop()`, or it has been removed from the
             * transitions applied on `actor`, using `gtd_actor_remove_transition()`.
             * @signal
             * @since 1.12
             */
            'transition-stopped::overflow': (arg0: string, arg1: boolean) => void;
            /**
             * The ::transition-stopped signal is emitted once a transition
             * is stopped; a transition is stopped once it reached its total
             * duration (including eventual repeats), it has been stopped
             * using `gtd_timeline_stop()`, or it has been removed from the
             * transitions applied on `actor`, using `gtd_actor_remove_transition()`.
             * @signal
             * @since 1.12
             */
            'transition-stopped::parent': (arg0: string, arg1: boolean) => void;
            /**
             * The ::transition-stopped signal is emitted once a transition
             * is stopped; a transition is stopped once it reached its total
             * duration (including eventual repeats), it has been stopped
             * using `gtd_timeline_stop()`, or it has been removed from the
             * transitions applied on `actor`, using `gtd_actor_remove_transition()`.
             * @signal
             * @since 1.12
             */
            'transition-stopped::receives-default': (arg0: string, arg1: boolean) => void;
            /**
             * The ::transition-stopped signal is emitted once a transition
             * is stopped; a transition is stopped once it reached its total
             * duration (including eventual repeats), it has been stopped
             * using `gtd_timeline_stop()`, or it has been removed from the
             * transitions applied on `actor`, using `gtd_actor_remove_transition()`.
             * @signal
             * @since 1.12
             */
            'transition-stopped::root': (arg0: string, arg1: boolean) => void;
            /**
             * The ::transition-stopped signal is emitted once a transition
             * is stopped; a transition is stopped once it reached its total
             * duration (including eventual repeats), it has been stopped
             * using `gtd_timeline_stop()`, or it has been removed from the
             * transitions applied on `actor`, using `gtd_actor_remove_transition()`.
             * @signal
             * @since 1.12
             */
            'transition-stopped::scale-factor': (arg0: string, arg1: boolean) => void;
            /**
             * The ::transition-stopped signal is emitted once a transition
             * is stopped; a transition is stopped once it reached its total
             * duration (including eventual repeats), it has been stopped
             * using `gtd_timeline_stop()`, or it has been removed from the
             * transitions applied on `actor`, using `gtd_actor_remove_transition()`.
             * @signal
             * @since 1.12
             */
            'transition-stopped::sensitive': (arg0: string, arg1: boolean) => void;
            /**
             * The ::transition-stopped signal is emitted once a transition
             * is stopped; a transition is stopped once it reached its total
             * duration (including eventual repeats), it has been stopped
             * using `gtd_timeline_stop()`, or it has been removed from the
             * transitions applied on `actor`, using `gtd_actor_remove_transition()`.
             * @signal
             * @since 1.12
             */
            'transition-stopped::tooltip-markup': (arg0: string, arg1: boolean) => void;
            /**
             * The ::transition-stopped signal is emitted once a transition
             * is stopped; a transition is stopped once it reached its total
             * duration (including eventual repeats), it has been stopped
             * using `gtd_timeline_stop()`, or it has been removed from the
             * transitions applied on `actor`, using `gtd_actor_remove_transition()`.
             * @signal
             * @since 1.12
             */
            'transition-stopped::tooltip-text': (arg0: string, arg1: boolean) => void;
            /**
             * The ::transition-stopped signal is emitted once a transition
             * is stopped; a transition is stopped once it reached its total
             * duration (including eventual repeats), it has been stopped
             * using `gtd_timeline_stop()`, or it has been removed from the
             * transitions applied on `actor`, using `gtd_actor_remove_transition()`.
             * @signal
             * @since 1.12
             */
            'transition-stopped::valign': (arg0: string, arg1: boolean) => void;
            /**
             * The ::transition-stopped signal is emitted once a transition
             * is stopped; a transition is stopped once it reached its total
             * duration (including eventual repeats), it has been stopped
             * using `gtd_timeline_stop()`, or it has been removed from the
             * transitions applied on `actor`, using `gtd_actor_remove_transition()`.
             * @signal
             * @since 1.12
             */
            'transition-stopped::vexpand': (arg0: string, arg1: boolean) => void;
            /**
             * The ::transition-stopped signal is emitted once a transition
             * is stopped; a transition is stopped once it reached its total
             * duration (including eventual repeats), it has been stopped
             * using `gtd_timeline_stop()`, or it has been removed from the
             * transitions applied on `actor`, using `gtd_actor_remove_transition()`.
             * @signal
             * @since 1.12
             */
            'transition-stopped::vexpand-set': (arg0: string, arg1: boolean) => void;
            /**
             * The ::transition-stopped signal is emitted once a transition
             * is stopped; a transition is stopped once it reached its total
             * duration (including eventual repeats), it has been stopped
             * using `gtd_timeline_stop()`, or it has been removed from the
             * transitions applied on `actor`, using `gtd_actor_remove_transition()`.
             * @signal
             * @since 1.12
             */
            'transition-stopped::visible': (arg0: string, arg1: boolean) => void;
            /**
             * The ::transition-stopped signal is emitted once a transition
             * is stopped; a transition is stopped once it reached its total
             * duration (including eventual repeats), it has been stopped
             * using `gtd_timeline_stop()`, or it has been removed from the
             * transitions applied on `actor`, using `gtd_actor_remove_transition()`.
             * @signal
             * @since 1.12
             */
            'transition-stopped::width-request': (arg0: string, arg1: boolean) => void;
            /**
             * The ::transition-stopped signal is emitted once a transition
             * is stopped; a transition is stopped once it reached its total
             * duration (including eventual repeats), it has been stopped
             * using `gtd_timeline_stop()`, or it has been removed from the
             * transitions applied on `actor`, using `gtd_actor_remove_transition()`.
             * @signal
             * @since 1.12
             */
            'transition-stopped::accessible-role': (arg0: string, arg1: boolean) => void;
        }

        // Constructor properties interface

        interface ConstructorProps
            extends
                Gtk.Widget.ConstructorProps,
                Gtk.Accessible.ConstructorProps,
                Gtk.Buildable.ConstructorProps,
                Gtk.ConstraintTarget.ConstructorProps {
            pivot_point: Graphene.Point3D;
            pivotPoint: Graphene.Point3D;
            rotation_x: number;
            rotationX: number;
            rotation_y: number;
            rotationY: number;
            rotation_z: number;
            rotationZ: number;
            scale_x: number;
            scaleX: number;
            scale_y: number;
            scaleY: number;
            scale_z: number;
            scaleZ: number;
            translation_x: number;
            translationX: number;
            translation_y: number;
            translationY: number;
            translation_z: number;
            translationZ: number;
        }
    }

    /**
     * @gir-type Class
     */
    class Widget extends Gtk.Widget implements Gtk.Accessible, Gtk.Buildable, Gtk.ConstraintTarget {
        static $gtype: GObject.GType<Widget>;

        // Properties

        get pivot_point(): Graphene.Point3D;
        set pivot_point(val: Graphene.Point3D);
        get pivotPoint(): Graphene.Point3D;
        set pivotPoint(val: Graphene.Point3D);
        get rotation_x(): number;
        set rotation_x(val: number);
        get rotationX(): number;
        set rotationX(val: number);
        get rotation_y(): number;
        set rotation_y(val: number);
        get rotationY(): number;
        set rotationY(val: number);
        get rotation_z(): number;
        set rotation_z(val: number);
        get rotationZ(): number;
        set rotationZ(val: number);
        get scale_x(): number;
        set scale_x(val: number);
        get scaleX(): number;
        set scaleX(val: number);
        get scale_y(): number;
        set scale_y(val: number);
        get scaleY(): number;
        set scaleY(val: number);
        get scale_z(): number;
        set scale_z(val: number);
        get scaleZ(): number;
        set scaleZ(val: number);
        get translation_x(): number;
        set translation_x(val: number);
        get translationX(): number;
        set translationX(val: number);
        get translation_y(): number;
        set translation_y(val: number);
        get translationY(): number;
        set translationY(val: number);
        get translation_z(): number;
        set translation_z(val: number);
        get translationZ(): number;
        set translationZ(val: number);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Widget.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Widget.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): Widget;

        // Signals

        /** @signal */
        connect<K extends keyof Widget.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Widget.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Widget.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Widget.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Widget.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Widget.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Adds a `transition` to the {@link Gtd.Widget}'s list of animations.
         *
         * The `name` string is a per-widget unique identifier of the `transition`: only
         * one {@link Gtd.Transition} can be associated to the specified `name`.
         *
         * The `transition` will be started once added.
         *
         * This function will take a reference on the `transition`.
         *
         * This function is usually called implicitly when modifying an animatable
         * property.
         * @param name the name of the transition to add
         * @param transition the {@link Gtd.Transition} to add
         */
        add_transition(name: string, transition: Transition): void;
        /**
         * @param transform
         */
        apply_transform(transform: Gsk.Transform): Gsk.Transform;
        /**
         * Retrieves the delay that should be applied when tweening animatable
         * properties.
         * @returns a delay, in milliseconds
         */
        get_easing_delay(): number;
        /**
         * Retrieves the duration of the tweening for animatable
         * properties of `self` for the current easing state.
         * @returns the duration of the tweening, in milliseconds
         */
        get_easing_duration(): number;
        /**
         * @param out_pivot_point
         */
        get_pivot_point(out_pivot_point: Graphene.Point3D): void;
        /**
         * @param rotation_x
         * @param rotation_y
         * @param rotation_z
         */
        get_rotation(rotation_x: number, rotation_y: number, rotation_z: number): void;
        /**
         * @param scale_x
         * @param scale_y
         * @param scale_z
         */
        get_scale(scale_x: number, scale_y: number, scale_z: number): void;
        /**
         * Retrieves the {@link Gtd.Transition} of a {@link Gtd.Widget} by using the
         * transition `name`.
         *
         * Transitions created for animatable properties use the name of the
         * property itself, for instance the code below:
         *
         *
         * ```c
         *   gtd_widget_set_easing_duration (widget, 1000);
         *   gtd_widget_set_rotation_angle (widget, GTD_Y_AXIS, 360.0);
         *
         *   transition = gtd_widget_get_transition (widget, "rotation-angle-y");
         *   g_signal_connect (transition, "stopped",
         *                     G_CALLBACK (on_transition_stopped),
         *                     widget);
         * ```
         *
         *
         * will call the `on_transition_stopped` callback when the transition
         * is finished.
         *
         * If you just want to get notifications of the completion of a transition,
         * you should use the {@link Gtd.Widget.SignalSignatures.transition_stopped | Gtd.Widget::transition-stopped} signal, using the
         * transition name as the signal detail.
         * @param name the name of the transition
         * @returns a {@link Gtd.Transition}, or `null` is none   was found to match the passed name; the returned instance is owned   by Gtd and it should not be freed
         */
        get_transition(name: string): Transition;
        /**
         * @param translation_x
         * @param translation_y
         * @param translation_z
         */
        get_translation(translation_x: number, translation_y: number, translation_z: number): void;
        /**
         * Removes all transitions associated to `self`.
         */
        remove_all_transitions(): void;
        /**
         * Removes the transition stored inside a {@link Gtd.Widget} using `name`
         * identifier.
         *
         * If the transition is currently in progress, it will be stopped.
         *
         * This function releases the reference acquired when the transition
         * was added to the {@link Gtd.Widget}.
         * @param name the name of the transition to remove
         */
        remove_transition(name: string): void;
        /**
         * Restores the easing state as it was prior to a call to
         * `gtd_widget_save_easing_state()`.
         */
        restore_easing_state(): void;
        /**
         * Saves the current easing state for animatable properties, and creates
         * a new state with the default values for easing mode and duration.
         *
         * New transitions created after calling this function will inherit the
         * duration, easing mode, and delay of the new easing state; this also
         * applies to transitions modified in flight.
         */
        save_easing_state(): void;
        /**
         * Sets the delay that should be applied before tweening animatable
         * properties.
         * @param msecs the delay before the start of the tweening, in milliseconds
         */
        set_easing_delay(msecs: number): void;
        /**
         * Sets the duration of the tweening for animatable properties
         * of `self` for the current easing state.
         * @param msecs the duration of the easing, or `null`
         */
        set_easing_duration(msecs: number): void;
        /**
         * @param pivot_point
         */
        set_pivot_point(pivot_point: Graphene.Point3D): void;
        /**
         * @param rotation_x
         * @param rotation_y
         * @param rotation_z
         */
        set_rotation(rotation_x: number, rotation_y: number, rotation_z: number): void;
        /**
         * @param scale_x
         * @param scale_y
         * @param scale_z
         */
        set_scale(scale_x: number, scale_y: number, scale_z: number): void;
        /**
         * @param translation_x
         * @param translation_y
         * @param translation_z
         */
        set_translation(translation_x: number, translation_y: number, translation_z: number): void;
        /**
         * The accessible role of the given {@link Gtk.Accessible} implementation.
         *
         * The accessible role cannot be changed once set.
         * @category Inherited from Gtk.Accessible
         */
        get accessible_role(): Gtk.AccessibleRole;
        set accessible_role(val: Gtk.AccessibleRole);
        /**
         * The accessible role of the given {@link Gtk.Accessible} implementation.
         *
         * The accessible role cannot be changed once set.
         * @category Inherited from Gtk.Accessible
         */
        get accessibleRole(): Gtk.AccessibleRole;
        set accessibleRole(val: Gtk.AccessibleRole);
        /**
         * Requests the user's screen reader to announce the given message.
         *
         * This kind of notification is useful for messages that
         * either have only a visual representation or that are not
         * exposed visually at all, e.g. a notification about a
         * successful operation.
         *
         * Also, by using this API, you can ensure that the message
         * does not interrupts the user's current screen reader output.
         * @param message the string to announce
         * @param priority the priority of the announcement
         */
        announce(message: string, priority: Gtk.AccessibleAnnouncementPriority | null): void;
        /**
         * Retrieves the accessible parent for an accessible object.
         *
         * This function returns `NULL` for top level widgets.
         * @returns the accessible parent
         */
        get_accessible_parent(): Gtk.Accessible | null;
        /**
         * Retrieves the accessible role of an accessible object.
         * @returns the accessible role
         */
        get_accessible_role(): Gtk.AccessibleRole;
        /**
         * Retrieves the implementation for the given accessible object.
         * @returns the accessible implementation object
         */
        get_at_context(): Gtk.ATContext;
        /**
         * Queries the coordinates and dimensions of this accessible
         *
         * This functionality can be overridden by {@link Gtk.Accessible}
         * implementations, e.g. to get the bounds from an ignored
         * child widget.
         * @returns true if the bounds are valid, and false otherwise
         */
        get_bounds(): [boolean, number, number, number, number];
        /**
         * Retrieves the first accessible child of an accessible object.
         * @returns the first accessible child
         */
        get_first_accessible_child(): Gtk.Accessible | null;
        /**
         * Retrieves the next accessible sibling of an accessible object
         * @returns the next accessible sibling
         */
        get_next_accessible_sibling(): Gtk.Accessible | null;
        /**
         * Queries a platform state, such as focus.
         *
         * This functionality can be overridden by {@link Gtk.Accessible}
         * implementations, e.g. to get platform state from an ignored
         * child widget, as is the case for {@link Gtk.Text} wrappers.
         * @param state platform state to query
         * @returns the value of state for the accessible
         */
        get_platform_state(state: Gtk.AccessiblePlatformState | null): boolean;
        /**
         * Resets the accessible property to its default value.
         * @param property the accessible property
         */
        reset_property(property: Gtk.AccessibleProperty | null): void;
        /**
         * Resets the accessible relation to its default value.
         * @param relation the accessible relation
         */
        reset_relation(relation: Gtk.AccessibleRelation | null): void;
        /**
         * Resets the accessible state to its default value.
         * @param state the accessible state
         */
        reset_state(state: Gtk.AccessibleState | null): void;
        /**
         * Sets the parent and sibling of an accessible object.
         *
         * This function is meant to be used by accessible implementations that are
         * not part of the widget hierarchy, and but act as a logical bridge between
         * widgets. For instance, if a widget creates an object that holds metadata
         * for each child, and you want that object to implement the {@link Gtk.Accessible}
         * interface, you will use this function to ensure that the parent of each
         * child widget is the metadata object, and the parent of each metadata
         * object is the container widget.
         * @param parent the parent accessible object
         * @param next_sibling the sibling accessible object
         */
        set_accessible_parent(parent?: Gtk.Accessible | null, next_sibling?: Gtk.Accessible | null): void;
        /**
         * Updates the next accessible sibling.
         *
         * That might be useful when a new child of a custom accessible
         * is created, and it needs to be linked to a previous child.
         * @param new_sibling the new next accessible sibling to set
         */
        update_next_accessible_sibling(new_sibling?: Gtk.Accessible | null): void;
        /**
         * Informs ATs that the platform state has changed.
         *
         * This function should be used by {@link Gtk.Accessible} implementations that
         * have a platform state but are not widgets. Widgets handle platform
         * states automatically.
         * @param state the platform state to update
         */
        update_platform_state(state: Gtk.AccessiblePlatformState | null): void;
        /**
         * Updates an array of accessible properties.
         *
         * This function should be called by {@link Gtk.Widget} types whenever an accessible
         * property change must be communicated to assistive technologies.
         *
         * This function is meant to be used by language bindings.
         * @param properties an array of accessible properties
         * @param values an array of `GValues`, one for each property
         */
        update_property(properties: Gtk.AccessibleProperty[] | null, values: (GObject.Value | any)[]): void;
        /**
         * Updates an array of accessible relations.
         *
         * This function should be called by {@link Gtk.Widget} types whenever an accessible
         * relation change must be communicated to assistive technologies.
         *
         * This function is meant to be used by language bindings.
         * @param relations an array of accessible relations
         * @param values an array of `GValues`, one for each relation
         */
        update_relation(relations: Gtk.AccessibleRelation[] | null, values: (GObject.Value | any)[]): void;
        /**
         * Updates an array of accessible states.
         *
         * This function should be called by {@link Gtk.Widget} types whenever an accessible
         * state change must be communicated to assistive technologies.
         *
         * This function is meant to be used by language bindings.
         * @param states an array of accessible states
         * @param values an array of `GValues`, one for each state
         */
        update_state(states: Gtk.AccessibleState[] | null, values: (GObject.Value | any)[]): void;
        /**
         * Retrieves the accessible parent for an accessible object.
         *
         * This function returns `NULL` for top level widgets.
         * @virtual
         */
        vfunc_get_accessible_parent(): Gtk.Accessible | null;
        /**
         * Retrieves the implementation for the given accessible object.
         * @virtual
         */
        vfunc_get_at_context(): Gtk.ATContext | null;
        /**
         * Queries the coordinates and dimensions of this accessible
         *
         * This functionality can be overridden by {@link Gtk.Accessible}
         * implementations, e.g. to get the bounds from an ignored
         * child widget.
         * @virtual
         */
        vfunc_get_bounds(): [boolean, number, number, number, number];
        /**
         * Retrieves the first accessible child of an accessible object.
         * @virtual
         */
        vfunc_get_first_accessible_child(): Gtk.Accessible | null;
        /**
         * Retrieves the next accessible sibling of an accessible object
         * @virtual
         */
        vfunc_get_next_accessible_sibling(): Gtk.Accessible | null;
        /**
         * Queries a platform state, such as focus.
         *
         * This functionality can be overridden by {@link Gtk.Accessible}
         * implementations, e.g. to get platform state from an ignored
         * child widget, as is the case for {@link Gtk.Text} wrappers.
         * @param state platform state to query
         * @virtual
         */
        vfunc_get_platform_state(state: Gtk.AccessiblePlatformState): boolean;
        /**
         * Gets the ID of the `buildable` object.
         *
         * {@link Gtk.Builder} sets the name based on the ID attribute
         * of the `<object>` tag used to construct the `buildable`.
         * @returns the ID of the buildable object
         */
        get_buildable_id(): string | null;
        /**
         * Adds a child to `buildable`. `type` is an optional string
         * describing how the child should be added.
         * @param builder a {@link Gtk.Builder}
         * @param child child to add
         * @param type kind of child or `null`
         * @virtual
         */
        vfunc_add_child(builder: Gtk.Builder, child: GObject.Object, type?: string | null): void;
        /**
         * Similar to `gtk_buildable_parser_finished()` but is
         * called once for each custom tag handled by the `buildable`.
         * @param builder a {@link Gtk.Builder}
         * @param child child object or `null` for non-child tags
         * @param tagname the name of the tag
         * @param data user data created in custom_tag_start
         * @virtual
         */
        vfunc_custom_finished(
            builder: Gtk.Builder,
            child: GObject.Object | null,
            tagname: string,
            data?: any | null,
        ): void;
        /**
         * Called at the end of each custom element handled by
         * the buildable.
         * @param builder {@link Gtk.Builder} used to construct this object
         * @param child child object or `null` for non-child tags
         * @param tagname name of tag
         * @param data user data that will be passed in to parser functions
         * @virtual
         */
        vfunc_custom_tag_end(
            builder: Gtk.Builder,
            child: GObject.Object | null,
            tagname: string,
            data?: any | null,
        ): void;
        /**
         * Called for each unknown element under `<child>`.
         * @param builder a {@link Gtk.Builder} used to construct this object
         * @param child child object or `null` for non-child tags
         * @param tagname name of tag
         * @virtual
         */
        vfunc_custom_tag_start(
            builder: Gtk.Builder,
            child: GObject.Object | null,
            tagname: string,
        ): [boolean, Gtk.BuildableParser, any];
        /**
         * The getter corresponding to `set_id`. Implement this
         *   if you implement `set_id`.
         * @virtual
         */
        vfunc_get_id(): string;
        /**
         * Retrieves the internal child called `childname` of the `buildable` object.
         * @param builder a {@link Gtk.Builder}
         * @param childname name of child
         * @virtual
         */
        vfunc_get_internal_child<T = GObject.Object>(builder: Gtk.Builder, childname: string): T;
        /**
         * Called when a builder finishes the parsing
         *  of a UI definition. It is normally not necessary to implement this,
         *  unless you need to perform special cleanup actions. {@link Gtk.Window} sets
         *  the {@link Gtk.Widget.visible} property here.
         * @param builder
         * @virtual
         */
        vfunc_parser_finished(builder: Gtk.Builder): void;
        /**
         * Sets a property of a buildable object.
         *  It is normally not necessary to implement this, `g_object_set_property()`
         *  is used by default. {@link Gtk.Window} implements this to delay showing itself
         *  (i.e. setting the {@link Gtk.Widget.visible} property) until the whole
         *  interface is created.
         * @param builder
         * @param name
         * @param value
         * @virtual
         */
        vfunc_set_buildable_property(builder: Gtk.Builder, name: string, value: GObject.Value | any): void;
        /**
         * Stores the id attribute given in the {@link Gtk.Builder} UI definition.
         *   {@link Gtk.Widget} stores the name as object data. Implement this method if your
         *   object has some notion of “ID” and it makes sense to map the XML id
         *   attribute to it.
         * @param id
         * @virtual
         */
        vfunc_set_id(id: string): void;
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

    namespace Window {
        // Signal signatures
        interface SignalSignatures extends Gtk.ApplicationWindow.SignalSignatures {
            'notify::current-workspace': (pspec: GObject.ParamSpec) => void;
            'notify::show-menubar': (pspec: GObject.ParamSpec) => void;
            'notify::application': (pspec: GObject.ParamSpec) => void;
            'notify::child': (pspec: GObject.ParamSpec) => void;
            'notify::decorated': (pspec: GObject.ParamSpec) => void;
            'notify::default-height': (pspec: GObject.ParamSpec) => void;
            'notify::default-widget': (pspec: GObject.ParamSpec) => void;
            'notify::default-width': (pspec: GObject.ParamSpec) => void;
            'notify::deletable': (pspec: GObject.ParamSpec) => void;
            'notify::destroy-with-parent': (pspec: GObject.ParamSpec) => void;
            'notify::display': (pspec: GObject.ParamSpec) => void;
            'notify::focus-visible': (pspec: GObject.ParamSpec) => void;
            'notify::focus-widget': (pspec: GObject.ParamSpec) => void;
            'notify::fullscreened': (pspec: GObject.ParamSpec) => void;
            'notify::gravity': (pspec: GObject.ParamSpec) => void;
            'notify::handle-menubar-accel': (pspec: GObject.ParamSpec) => void;
            'notify::hide-on-close': (pspec: GObject.ParamSpec) => void;
            'notify::icon-name': (pspec: GObject.ParamSpec) => void;
            'notify::is-active': (pspec: GObject.ParamSpec) => void;
            'notify::maximized': (pspec: GObject.ParamSpec) => void;
            'notify::mnemonics-visible': (pspec: GObject.ParamSpec) => void;
            'notify::modal': (pspec: GObject.ParamSpec) => void;
            'notify::resizable': (pspec: GObject.ParamSpec) => void;
            'notify::startup-id': (pspec: GObject.ParamSpec) => void;
            'notify::suspended': (pspec: GObject.ParamSpec) => void;
            'notify::title': (pspec: GObject.ParamSpec) => void;
            'notify::titlebar': (pspec: GObject.ParamSpec) => void;
            'notify::transient-for': (pspec: GObject.ParamSpec) => void;
            'notify::can-focus': (pspec: GObject.ParamSpec) => void;
            'notify::can-target': (pspec: GObject.ParamSpec) => void;
            'notify::css-classes': (pspec: GObject.ParamSpec) => void;
            'notify::css-name': (pspec: GObject.ParamSpec) => void;
            'notify::cursor': (pspec: GObject.ParamSpec) => void;
            'notify::focus-on-click': (pspec: GObject.ParamSpec) => void;
            'notify::focusable': (pspec: GObject.ParamSpec) => void;
            'notify::halign': (pspec: GObject.ParamSpec) => void;
            'notify::has-default': (pspec: GObject.ParamSpec) => void;
            'notify::has-focus': (pspec: GObject.ParamSpec) => void;
            'notify::has-tooltip': (pspec: GObject.ParamSpec) => void;
            'notify::height-request': (pspec: GObject.ParamSpec) => void;
            'notify::hexpand': (pspec: GObject.ParamSpec) => void;
            'notify::hexpand-set': (pspec: GObject.ParamSpec) => void;
            'notify::layout-manager': (pspec: GObject.ParamSpec) => void;
            'notify::limit-events': (pspec: GObject.ParamSpec) => void;
            'notify::margin-bottom': (pspec: GObject.ParamSpec) => void;
            'notify::margin-end': (pspec: GObject.ParamSpec) => void;
            'notify::margin-start': (pspec: GObject.ParamSpec) => void;
            'notify::margin-top': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::opacity': (pspec: GObject.ParamSpec) => void;
            'notify::overflow': (pspec: GObject.ParamSpec) => void;
            'notify::parent': (pspec: GObject.ParamSpec) => void;
            'notify::receives-default': (pspec: GObject.ParamSpec) => void;
            'notify::root': (pspec: GObject.ParamSpec) => void;
            'notify::scale-factor': (pspec: GObject.ParamSpec) => void;
            'notify::sensitive': (pspec: GObject.ParamSpec) => void;
            'notify::tooltip-markup': (pspec: GObject.ParamSpec) => void;
            'notify::tooltip-text': (pspec: GObject.ParamSpec) => void;
            'notify::valign': (pspec: GObject.ParamSpec) => void;
            'notify::vexpand': (pspec: GObject.ParamSpec) => void;
            'notify::vexpand-set': (pspec: GObject.ParamSpec) => void;
            'notify::visible': (pspec: GObject.ParamSpec) => void;
            'notify::width-request': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps
            extends
                Gtk.ApplicationWindow.ConstructorProps,
                Gio.ActionGroup.ConstructorProps,
                Gio.ActionMap.ConstructorProps,
                Gtk.Accessible.ConstructorProps,
                Gtk.Buildable.ConstructorProps,
                Gtk.ConstraintTarget.ConstructorProps,
                Gtk.Native.ConstructorProps,
                Gtk.Root.ConstructorProps,
                Gtk.ShortcutManager.ConstructorProps {
            current_workspace: Workspace;
            currentWorkspace: Workspace;
        }
    }

    /**
     * @gir-type Class
     */
    class Window
        extends Gtk.ApplicationWindow
        implements
            Gio.ActionGroup,
            Gio.ActionMap,
            Gtk.Accessible,
            Gtk.Buildable,
            Gtk.ConstraintTarget,
            Gtk.Native,
            Gtk.Root,
            Gtk.ShortcutManager
    {
        static $gtype: GObject.GType<Window>;

        // Properties

        get current_workspace(): Workspace;
        get currentWorkspace(): Workspace;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Window.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Window.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](application: Application): Window;
        // Conflicted with Gtk.ApplicationWindow.new

        static ['new'](...args: never[]): any;

        // Signals

        /** @signal */
        connect<K extends keyof Window.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Window.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Window.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Window.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Window.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Window.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * @param widget
         * @param position
         */
        embed_widget_in_header(widget: Gtk.Widget, position: Gtk.PositionType | null): void;
        /**
         * Retrieves the currently active workspace
         * @returns a {@link Gtd.Workspace}
         */
        get_current_workspace(): Workspace;
        /**
         * Whether the widget or any of its descendents can accept
         * the input focus.
         *
         * This property is meant to be set by widget implementations,
         * typically in their instance init function.
         * @category Inherited from Gtk.Widget
         */
        get can_focus(): boolean;
        set can_focus(val: boolean);
        /**
         * Whether the widget or any of its descendents can accept
         * the input focus.
         *
         * This property is meant to be set by widget implementations,
         * typically in their instance init function.
         * @category Inherited from Gtk.Widget
         */
        get canFocus(): boolean;
        set canFocus(val: boolean);
        /**
         * Whether the widget can receive pointer events.
         * @category Inherited from Gtk.Widget
         */
        get can_target(): boolean;
        set can_target(val: boolean);
        /**
         * Whether the widget can receive pointer events.
         * @category Inherited from Gtk.Widget
         */
        get canTarget(): boolean;
        set canTarget(val: boolean);
        /**
         * A list of css classes applied to this widget.
         * @category Inherited from Gtk.Widget
         */
        get css_classes(): string[];
        set css_classes(val: string[]);
        /**
         * A list of css classes applied to this widget.
         * @category Inherited from Gtk.Widget
         */
        get cssClasses(): string[];
        set cssClasses(val: string[]);
        /**
         * The name of this widget in the CSS tree.
         *
         * This property is meant to be set by widget implementations,
         * typically in their instance init function.
         * @category Inherited from Gtk.Widget
         */
        get css_name(): string;
        /**
         * The name of this widget in the CSS tree.
         *
         * This property is meant to be set by widget implementations,
         * typically in their instance init function.
         * @category Inherited from Gtk.Widget
         */
        get cssName(): string;
        /**
         * The cursor used by `widget`.
         * @category Inherited from Gtk.Widget
         */
        get cursor(): Gdk.Cursor;
        set cursor(val: Gdk.Cursor);
        /**
         * Whether the widget should grab focus when it is clicked with the mouse.
         *
         * This property is only relevant for widgets that can take focus.
         * @category Inherited from Gtk.Widget
         */
        get focus_on_click(): boolean;
        set focus_on_click(val: boolean);
        /**
         * Whether the widget should grab focus when it is clicked with the mouse.
         *
         * This property is only relevant for widgets that can take focus.
         * @category Inherited from Gtk.Widget
         */
        get focusOnClick(): boolean;
        set focusOnClick(val: boolean);
        /**
         * Whether this widget itself will accept the input focus.
         * @category Inherited from Gtk.Widget
         */
        get focusable(): boolean;
        set focusable(val: boolean);
        /**
         * How to distribute horizontal space if widget gets extra space.
         * @category Inherited from Gtk.Widget
         */
        get halign(): Gtk.Align;
        set halign(val: Gtk.Align);
        /**
         * Whether the widget is the default widget.
         * @category Inherited from Gtk.Widget
         */
        get has_default(): boolean;
        /**
         * Whether the widget is the default widget.
         * @category Inherited from Gtk.Widget
         */
        get hasDefault(): boolean;
        /**
         * Whether the widget has the input focus.
         * @category Inherited from Gtk.Widget
         */
        get has_focus(): boolean;
        /**
         * Whether the widget has the input focus.
         * @category Inherited from Gtk.Widget
         */
        get hasFocus(): boolean;
        /**
         * Enables or disables the emission of the `Gtk.Widget::query-tooltip`
         * signal on `widget`.
         *
         * A true value indicates that `widget` can have a tooltip, in this case
         * the widget will be queried using `Gtk.Widget::query-tooltip` to
         * determine whether it will provide a tooltip or not.
         * @category Inherited from Gtk.Widget
         */
        get has_tooltip(): boolean;
        set has_tooltip(val: boolean);
        /**
         * Enables or disables the emission of the `Gtk.Widget::query-tooltip`
         * signal on `widget`.
         *
         * A true value indicates that `widget` can have a tooltip, in this case
         * the widget will be queried using `Gtk.Widget::query-tooltip` to
         * determine whether it will provide a tooltip or not.
         * @category Inherited from Gtk.Widget
         */
        get hasTooltip(): boolean;
        set hasTooltip(val: boolean);
        /**
         * Overrides for height request of the widget.
         *
         * If this is -1, the natural request will be used.
         * @category Inherited from Gtk.Widget
         */
        get height_request(): number;
        set height_request(val: number);
        /**
         * Overrides for height request of the widget.
         *
         * If this is -1, the natural request will be used.
         * @category Inherited from Gtk.Widget
         */
        get heightRequest(): number;
        set heightRequest(val: number);
        /**
         * Whether to expand horizontally.
         * @category Inherited from Gtk.Widget
         */
        get hexpand(): boolean;
        set hexpand(val: boolean);
        /**
         * Whether to use the `hexpand` property.
         * @category Inherited from Gtk.Widget
         */
        get hexpand_set(): boolean;
        set hexpand_set(val: boolean);
        /**
         * Whether to use the `hexpand` property.
         * @category Inherited from Gtk.Widget
         */
        get hexpandSet(): boolean;
        set hexpandSet(val: boolean);
        /**
         * The {@link Gtk.LayoutManager} instance to use to compute
         * the preferred size of the widget, and allocate its children.
         *
         * This property is meant to be set by widget implementations,
         * typically in their instance init function.
         * @category Inherited from Gtk.Widget
         */
        get layout_manager(): Gtk.LayoutManager;
        set layout_manager(val: Gtk.LayoutManager);
        /**
         * The {@link Gtk.LayoutManager} instance to use to compute
         * the preferred size of the widget, and allocate its children.
         *
         * This property is meant to be set by widget implementations,
         * typically in their instance init function.
         * @category Inherited from Gtk.Widget
         */
        get layoutManager(): Gtk.LayoutManager;
        set layoutManager(val: Gtk.LayoutManager);
        /**
         * Makes this widget act like a modal dialog, with respect to
         * event delivery.
         *
         * Global event controllers will not handle events with targets
         * inside the widget, unless they are set up to ignore propagation
         * limits. See {@link Gtk.EventController.set_propagation_limit}.
         * @since 4.18
         * @category Inherited from Gtk.Widget
         */
        get limit_events(): boolean;
        set limit_events(val: boolean);
        /**
         * Makes this widget act like a modal dialog, with respect to
         * event delivery.
         *
         * Global event controllers will not handle events with targets
         * inside the widget, unless they are set up to ignore propagation
         * limits. See {@link Gtk.EventController.set_propagation_limit}.
         * @since 4.18
         * @category Inherited from Gtk.Widget
         */
        get limitEvents(): boolean;
        set limitEvents(val: boolean);
        /**
         * Margin on bottom side of widget.
         *
         * This property adds margin outside of the widget's normal size
         * request, the margin will be added in addition to the size from
         * {@link Gtk.Widget.set_size_request} for example.
         * @category Inherited from Gtk.Widget
         */
        get margin_bottom(): number;
        set margin_bottom(val: number);
        /**
         * Margin on bottom side of widget.
         *
         * This property adds margin outside of the widget's normal size
         * request, the margin will be added in addition to the size from
         * {@link Gtk.Widget.set_size_request} for example.
         * @category Inherited from Gtk.Widget
         */
        get marginBottom(): number;
        set marginBottom(val: number);
        /**
         * Margin on end of widget, horizontally.
         *
         * This property supports left-to-right and right-to-left text
         * directions.
         *
         * This property adds margin outside of the widget's normal size
         * request, the margin will be added in addition to the size from
         * {@link Gtk.Widget.set_size_request} for example.
         * @category Inherited from Gtk.Widget
         */
        get margin_end(): number;
        set margin_end(val: number);
        /**
         * Margin on end of widget, horizontally.
         *
         * This property supports left-to-right and right-to-left text
         * directions.
         *
         * This property adds margin outside of the widget's normal size
         * request, the margin will be added in addition to the size from
         * {@link Gtk.Widget.set_size_request} for example.
         * @category Inherited from Gtk.Widget
         */
        get marginEnd(): number;
        set marginEnd(val: number);
        /**
         * Margin on start of widget, horizontally.
         *
         * This property supports left-to-right and right-to-left text
         * directions.
         *
         * This property adds margin outside of the widget's normal size
         * request, the margin will be added in addition to the size from
         * {@link Gtk.Widget.set_size_request} for example.
         * @category Inherited from Gtk.Widget
         */
        get margin_start(): number;
        set margin_start(val: number);
        /**
         * Margin on start of widget, horizontally.
         *
         * This property supports left-to-right and right-to-left text
         * directions.
         *
         * This property adds margin outside of the widget's normal size
         * request, the margin will be added in addition to the size from
         * {@link Gtk.Widget.set_size_request} for example.
         * @category Inherited from Gtk.Widget
         */
        get marginStart(): number;
        set marginStart(val: number);
        /**
         * Margin on top side of widget.
         *
         * This property adds margin outside of the widget's normal size
         * request, the margin will be added in addition to the size from
         * {@link Gtk.Widget.set_size_request} for example.
         * @category Inherited from Gtk.Widget
         */
        get margin_top(): number;
        set margin_top(val: number);
        /**
         * Margin on top side of widget.
         *
         * This property adds margin outside of the widget's normal size
         * request, the margin will be added in addition to the size from
         * {@link Gtk.Widget.set_size_request} for example.
         * @category Inherited from Gtk.Widget
         */
        get marginTop(): number;
        set marginTop(val: number);
        /**
         * The name of the widget.
         * @category Inherited from Gtk.Widget
         */
        get name(): string;
        set name(val: string);
        /**
         * The requested opacity of the widget.
         * @category Inherited from Gtk.Widget
         */
        get opacity(): number;
        set opacity(val: number);
        /**
         * How content outside the widget's content area is treated.
         *
         * This property is meant to be set by widget implementations,
         * typically in their instance init function.
         * @category Inherited from Gtk.Widget
         */
        get overflow(): Gtk.Overflow;
        set overflow(val: Gtk.Overflow);
        /**
         * The parent widget of this widget.
         * @category Inherited from Gtk.Widget
         */
        get parent(): Gtk.Widget;
        /**
         * Whether the widget will receive the default action when it is focused.
         * @category Inherited from Gtk.Widget
         */
        get receives_default(): boolean;
        set receives_default(val: boolean);
        /**
         * Whether the widget will receive the default action when it is focused.
         * @category Inherited from Gtk.Widget
         */
        get receivesDefault(): boolean;
        set receivesDefault(val: boolean);
        /**
         * The {@link Gtk.Root} widget of the widget tree containing this widget.
         *
         * This will be `NULL` if the widget is not contained in a root widget.
         * @category Inherited from Gtk.Widget
         */
        get root(): Gtk.Root;
        /**
         * The scale factor of the widget.
         * @category Inherited from Gtk.Widget
         */
        get scale_factor(): number;
        /**
         * The scale factor of the widget.
         * @category Inherited from Gtk.Widget
         */
        get scaleFactor(): number;
        /**
         * Whether the widget responds to input.
         * @category Inherited from Gtk.Widget
         */
        get sensitive(): boolean;
        set sensitive(val: boolean);
        /**
         * Sets the text of tooltip to be the given string, which is marked up
         * with Pango markup.
         *
         * Also see {@link Gtk.Tooltip.set_markup}.
         *
         * This is a convenience property which will take care of getting the
         * tooltip shown if the given string is not `NULL`:
         * {@link Gtk.Widget.has_tooltip} will automatically be set to true
         * and there will be taken care of `Gtk.Widget::query-tooltip` in
         * the default signal handler.
         *
         * Note that if both {@link Gtk.Widget.tooltip_text} and
         * {@link Gtk.Widget.tooltip_markup} are set, the last one wins.
         * @category Inherited from Gtk.Widget
         */
        get tooltip_markup(): string;
        set tooltip_markup(val: string);
        /**
         * Sets the text of tooltip to be the given string, which is marked up
         * with Pango markup.
         *
         * Also see {@link Gtk.Tooltip.set_markup}.
         *
         * This is a convenience property which will take care of getting the
         * tooltip shown if the given string is not `NULL`:
         * {@link Gtk.Widget.has_tooltip} will automatically be set to true
         * and there will be taken care of `Gtk.Widget::query-tooltip` in
         * the default signal handler.
         *
         * Note that if both {@link Gtk.Widget.tooltip_text} and
         * {@link Gtk.Widget.tooltip_markup} are set, the last one wins.
         * @category Inherited from Gtk.Widget
         */
        get tooltipMarkup(): string;
        set tooltipMarkup(val: string);
        /**
         * Sets the text of tooltip to be the given string.
         *
         * Also see {@link Gtk.Tooltip.set_text}.
         *
         * This is a convenience property which will take care of getting the
         * tooltip shown if the given string is not `NULL`:
         * {@link Gtk.Widget.has_tooltip} will automatically be set to true
         * and there will be taken care of `Gtk.Widget::query-tooltip` in
         * the default signal handler.
         *
         * Note that if both {@link Gtk.Widget.tooltip_text} and
         * {@link Gtk.Widget.tooltip_markup} are set, the last one wins.
         * @category Inherited from Gtk.Widget
         */
        get tooltip_text(): string;
        set tooltip_text(val: string);
        /**
         * Sets the text of tooltip to be the given string.
         *
         * Also see {@link Gtk.Tooltip.set_text}.
         *
         * This is a convenience property which will take care of getting the
         * tooltip shown if the given string is not `NULL`:
         * {@link Gtk.Widget.has_tooltip} will automatically be set to true
         * and there will be taken care of `Gtk.Widget::query-tooltip` in
         * the default signal handler.
         *
         * Note that if both {@link Gtk.Widget.tooltip_text} and
         * {@link Gtk.Widget.tooltip_markup} are set, the last one wins.
         * @category Inherited from Gtk.Widget
         */
        get tooltipText(): string;
        set tooltipText(val: string);
        /**
         * How to distribute vertical space if widget gets extra space.
         * @category Inherited from Gtk.Widget
         */
        get valign(): Gtk.Align;
        set valign(val: Gtk.Align);
        /**
         * Whether to expand vertically.
         * @category Inherited from Gtk.Widget
         */
        get vexpand(): boolean;
        set vexpand(val: boolean);
        /**
         * Whether to use the `vexpand` property.
         * @category Inherited from Gtk.Widget
         */
        get vexpand_set(): boolean;
        set vexpand_set(val: boolean);
        /**
         * Whether to use the `vexpand` property.
         * @category Inherited from Gtk.Widget
         */
        get vexpandSet(): boolean;
        set vexpandSet(val: boolean);
        /**
         * Whether the widget is visible.
         * @category Inherited from Gtk.Widget
         */
        get visible(): boolean;
        set visible(val: boolean);
        /**
         * Overrides for width request of the widget.
         *
         * If this is -1, the natural request will be used.
         * @category Inherited from Gtk.Widget
         */
        get width_request(): number;
        set width_request(val: number);
        /**
         * Overrides for width request of the widget.
         *
         * If this is -1, the natural request will be used.
         * @category Inherited from Gtk.Widget
         */
        get widthRequest(): number;
        set widthRequest(val: number);
        /**
         * Emits the `Gio.ActionGroup::action-added` signal on `action_group`.
         *
         * This function should only be called by {@link Gio.ActionGroup} implementations.
         * @param action_name the name of an action in the group
         */
        action_added(action_name: string): void;
        /**
         * Emits the `Gio.ActionGroup::action-enabled-changed` signal on `action_group`.
         *
         * This function should only be called by {@link Gio.ActionGroup} implementations.
         * @param action_name the name of an action in the group
         * @param enabled whether the action is now enabled
         */
        action_enabled_changed(action_name: string, enabled: boolean): void;
        /**
         * Emits the `Gio.ActionGroup::action-removed` signal on `action_group`.
         *
         * This function should only be called by {@link Gio.ActionGroup} implementations.
         * @param action_name the name of an action in the group
         */
        action_removed(action_name: string): void;
        /**
         * Emits the `Gio.ActionGroup::action-state-changed` signal on `action_group`.
         *
         * This function should only be called by {@link Gio.ActionGroup} implementations.
         * @param action_name the name of an action in the group
         * @param state the new state of the named action
         */
        action_state_changed(action_name: string, state: GLib.Variant): void;
        /**
         * Activate the named action within `action_group`.
         *
         * If the action is expecting a parameter, then the correct type of
         * parameter must be given as `parameter`.  If the action is expecting no
         * parameters then `parameter` must be `NULL`.  See
         * {@link Gio.ActionGroup.get_action_parameter_type}.
         *
         * If the {@link Gio.ActionGroup} implementation supports asynchronous remote
         * activation over D-Bus, this call may return before the relevant
         * D-Bus traffic has been sent, or any replies have been received. In
         * order to block on such asynchronous activation calls,
         * {@link Gio.DBusConnection.flush} should be called prior to the code, which
         * depends on the result of the action activation. Without flushing
         * the D-Bus connection, there is no guarantee that the action would
         * have been activated.
         *
         * The following code which runs in a remote app instance, shows an
         * example of a ‘quit’ action being activated on the primary app
         * instance over D-Bus. Here {@link Gio.DBusConnection.flush} is called
         * before `exit()`. Without `g_dbus_connection_flush()`, the ‘quit’ action
         * may fail to be activated on the primary instance.
         *
         * ```c
         * // call ‘quit’ action on primary instance
         * g_action_group_activate_action (G_ACTION_GROUP (app), "quit", NULL);
         *
         * // make sure the action is activated now
         * g_dbus_connection_flush (…);
         *
         * g_debug ("Application has been terminated. Exiting.");
         *
         * exit (0);
         * ```
         * @param action_name the name of the action to activate
         * @param parameter parameters to the activation
         */
        activate_action(action_name: string, parameter?: GLib.Variant | null): void;
        /**
         * @param args
         */
        // Conflicted with Gtk.Widget.activate_action
        activate_action(...args: never[]): any;
        /**
         * Request for the state of the named action within `action_group` to be
         * changed to `value`.
         *
         * The action must be stateful and `value` must be of the correct type.
         * See {@link Gio.ActionGroup.get_action_state_type}.
         *
         * This call merely requests a change.  The action may refuse to change
         * its state or may change its state to something other than `value`.
         * See {@link Gio.ActionGroup.get_action_state_hint}.
         *
         * If the `value` GVariant is floating, it is consumed.
         * @param action_name the name of the action to request the change on
         * @param value the new state
         */
        change_action_state(action_name: string, value: GLib.Variant): void;
        /**
         * Checks if the named action within `action_group` is currently enabled.
         *
         * An action must be enabled in order to be activated or in order to
         * have its state changed from outside callers.
         * @param action_name the name of the action to query
         * @returns whether the action is currently enabled
         */
        get_action_enabled(action_name: string): boolean;
        /**
         * Queries the type of the parameter that must be given when activating
         * the named action within `action_group`.
         *
         * When activating the action using {@link Gio.ActionGroup.activate_action},
         * the {@link GLib.Variant} given to that function must be of the type returned
         * by this function.
         *
         * In the case that this function returns `NULL`, you must not give any
         * {@link GLib.Variant}, but `NULL` instead.
         *
         * The parameter type of a particular action will never change but it is
         * possible for an action to be removed and for a new action to be added
         * with the same name but a different parameter type.
         * @param action_name the name of the action to query
         * @returns the parameter type
         */
        get_action_parameter_type(action_name: string): GLib.VariantType | null;
        /**
         * Queries the current state of the named action within `action_group`.
         *
         * If the action is not stateful then `NULL` will be returned.  If the
         * action is stateful then the type of the return value is the type
         * given by {@link Gio.ActionGroup.get_action_state_type}.
         *
         * The return value (if non-`NULL`) should be freed with
         * {@link GLib.Variant.unref} when it is no longer required.
         * @param action_name the name of the action to query
         * @returns the current state of the action
         */
        get_action_state(action_name: string): GLib.Variant | null;
        /**
         * Requests a hint about the valid range of values for the state of the
         * named action within `action_group`.
         *
         * If `NULL` is returned it either means that the action is not stateful
         * or that there is no hint about the valid range of values for the
         * state of the action.
         *
         * If a {@link GLib.Variant} array is returned then each item in the array is a
         * possible value for the state.  If a {@link GLib.Variant} pair (ie: two-tuple) is
         * returned then the tuple specifies the inclusive lower and upper bound
         * of valid values for the state.
         *
         * In any case, the information is merely a hint.  It may be possible to
         * have a state value outside of the hinted range and setting a value
         * within the range may fail.
         *
         * The return value (if non-`NULL`) should be freed with
         * {@link GLib.Variant.unref} when it is no longer required.
         * @param action_name the name of the action to query
         * @returns the state range hint
         */
        get_action_state_hint(action_name: string): GLib.Variant | null;
        /**
         * Queries the type of the state of the named action within
         * `action_group`.
         *
         * If the action is stateful then this function returns the
         * {@link GLib.VariantType} of the state.  All calls to
         * {@link Gio.ActionGroup.change_action_state} must give a {@link GLib.Variant} of this
         * type and {@link Gio.ActionGroup.get_action_state} will return a {@link GLib.Variant}
         * of the same type.
         *
         * If the action is not stateful then this function will return `NULL`.
         * In that case, {@link Gio.ActionGroup.get_action_state} will return `NULL`
         * and you must not call {@link Gio.ActionGroup.change_action_state}.
         *
         * The state type of a particular action will never change but it is
         * possible for an action to be removed and for a new action to be added
         * with the same name but a different state type.
         * @param action_name the name of the action to query
         * @returns the state type, if the action is stateful
         */
        get_action_state_type(action_name: string): GLib.VariantType | null;
        /**
         * Checks if the named action exists within `action_group`.
         * @param action_name the name of the action to check for
         * @returns whether the named action exists
         */
        has_action(action_name: string): boolean;
        /**
         * Lists the actions contained within `action_group`.
         *
         * The caller is responsible for freeing the list with {@link GLib.strfreev} when
         * it is no longer required.
         * @returns a `NULL`-terminated array   of the names of the actions in the group
         */
        list_actions(): string[];
        /**
         * Queries all aspects of the named action within an `action_group`.
         *
         * This function acquires the information available from
         * {@link Gio.ActionGroup.has_action}, {@link Gio.ActionGroup.get_action_enabled},
         * {@link Gio.ActionGroup.get_action_parameter_type},
         * {@link Gio.ActionGroup.get_action_state_type},
         * {@link Gio.ActionGroup.get_action_state_hint} and
         * {@link Gio.ActionGroup.get_action_state} with a single function call.
         *
         * This provides two main benefits.
         *
         * The first is the improvement in efficiency that comes with not having
         * to perform repeated lookups of the action in order to discover
         * different things about it.  The second is that implementing
         * {@link Gio.ActionGroup} can now be done by only overriding this one virtual
         * function.
         *
         * The interface provides a default implementation of this function that
         * calls the individual functions, as required, to fetch the
         * information.  The interface also provides default implementations of
         * those functions that call this function.  All implementations,
         * therefore, must override either this function or all of the others.
         *
         * If the action exists, `TRUE` is returned and any of the requested
         * fields (as indicated by having a non-`NULL` reference passed in) are
         * filled.  If the action doesn’t exist, `FALSE` is returned and the
         * fields may or may not have been modified.
         * @param action_name the name of an action in the group
         * @returns `TRUE` if the action exists, else `FALSE`
         */
        query_action(
            action_name: string,
        ): [
            boolean,
            boolean,
            GLib.VariantType | null,
            GLib.VariantType | null,
            GLib.Variant | null,
            GLib.Variant | null,
        ];
        /**
         * Emits the `Gio.ActionGroup::action-added` signal on `action_group`.
         *
         * This function should only be called by {@link Gio.ActionGroup} implementations.
         * @param action_name the name of an action in the group
         * @virtual
         */
        vfunc_action_added(action_name: string): void;
        /**
         * Emits the `Gio.ActionGroup::action-enabled-changed` signal on `action_group`.
         *
         * This function should only be called by {@link Gio.ActionGroup} implementations.
         * @param action_name the name of an action in the group
         * @param enabled whether the action is now enabled
         * @virtual
         */
        vfunc_action_enabled_changed(action_name: string, enabled: boolean): void;
        /**
         * Emits the `Gio.ActionGroup::action-removed` signal on `action_group`.
         *
         * This function should only be called by {@link Gio.ActionGroup} implementations.
         * @param action_name the name of an action in the group
         * @virtual
         */
        vfunc_action_removed(action_name: string): void;
        /**
         * Emits the `Gio.ActionGroup::action-state-changed` signal on `action_group`.
         *
         * This function should only be called by {@link Gio.ActionGroup} implementations.
         * @param action_name the name of an action in the group
         * @param state the new state of the named action
         * @virtual
         */
        vfunc_action_state_changed(action_name: string, state: GLib.Variant): void;
        /**
         * Activate the named action within `action_group`.
         *
         * If the action is expecting a parameter, then the correct type of
         * parameter must be given as `parameter`.  If the action is expecting no
         * parameters then `parameter` must be `NULL`.  See
         * {@link Gio.ActionGroup.get_action_parameter_type}.
         *
         * If the {@link Gio.ActionGroup} implementation supports asynchronous remote
         * activation over D-Bus, this call may return before the relevant
         * D-Bus traffic has been sent, or any replies have been received. In
         * order to block on such asynchronous activation calls,
         * {@link Gio.DBusConnection.flush} should be called prior to the code, which
         * depends on the result of the action activation. Without flushing
         * the D-Bus connection, there is no guarantee that the action would
         * have been activated.
         *
         * The following code which runs in a remote app instance, shows an
         * example of a ‘quit’ action being activated on the primary app
         * instance over D-Bus. Here {@link Gio.DBusConnection.flush} is called
         * before `exit()`. Without `g_dbus_connection_flush()`, the ‘quit’ action
         * may fail to be activated on the primary instance.
         *
         * ```c
         * // call ‘quit’ action on primary instance
         * g_action_group_activate_action (G_ACTION_GROUP (app), "quit", NULL);
         *
         * // make sure the action is activated now
         * g_dbus_connection_flush (…);
         *
         * g_debug ("Application has been terminated. Exiting.");
         *
         * exit (0);
         * ```
         * @param action_name the name of the action to activate
         * @param parameter parameters to the activation
         * @virtual
         */
        vfunc_activate_action(action_name: string, parameter?: GLib.Variant | null): void;
        /**
         * Request for the state of the named action within `action_group` to be
         * changed to `value`.
         *
         * The action must be stateful and `value` must be of the correct type.
         * See {@link Gio.ActionGroup.get_action_state_type}.
         *
         * This call merely requests a change.  The action may refuse to change
         * its state or may change its state to something other than `value`.
         * See {@link Gio.ActionGroup.get_action_state_hint}.
         *
         * If the `value` GVariant is floating, it is consumed.
         * @param action_name the name of the action to request the change on
         * @param value the new state
         * @virtual
         */
        vfunc_change_action_state(action_name: string, value: GLib.Variant): void;
        /**
         * Checks if the named action within `action_group` is currently enabled.
         *
         * An action must be enabled in order to be activated or in order to
         * have its state changed from outside callers.
         * @param action_name the name of the action to query
         * @virtual
         */
        vfunc_get_action_enabled(action_name: string): boolean;
        /**
         * Queries the type of the parameter that must be given when activating
         * the named action within `action_group`.
         *
         * When activating the action using {@link Gio.ActionGroup.activate_action},
         * the {@link GLib.Variant} given to that function must be of the type returned
         * by this function.
         *
         * In the case that this function returns `NULL`, you must not give any
         * {@link GLib.Variant}, but `NULL` instead.
         *
         * The parameter type of a particular action will never change but it is
         * possible for an action to be removed and for a new action to be added
         * with the same name but a different parameter type.
         * @param action_name the name of the action to query
         * @virtual
         */
        vfunc_get_action_parameter_type(action_name: string): GLib.VariantType | null;
        /**
         * Queries the current state of the named action within `action_group`.
         *
         * If the action is not stateful then `NULL` will be returned.  If the
         * action is stateful then the type of the return value is the type
         * given by {@link Gio.ActionGroup.get_action_state_type}.
         *
         * The return value (if non-`NULL`) should be freed with
         * {@link GLib.Variant.unref} when it is no longer required.
         * @param action_name the name of the action to query
         * @virtual
         */
        vfunc_get_action_state(action_name: string): GLib.Variant | null;
        /**
         * Requests a hint about the valid range of values for the state of the
         * named action within `action_group`.
         *
         * If `NULL` is returned it either means that the action is not stateful
         * or that there is no hint about the valid range of values for the
         * state of the action.
         *
         * If a {@link GLib.Variant} array is returned then each item in the array is a
         * possible value for the state.  If a {@link GLib.Variant} pair (ie: two-tuple) is
         * returned then the tuple specifies the inclusive lower and upper bound
         * of valid values for the state.
         *
         * In any case, the information is merely a hint.  It may be possible to
         * have a state value outside of the hinted range and setting a value
         * within the range may fail.
         *
         * The return value (if non-`NULL`) should be freed with
         * {@link GLib.Variant.unref} when it is no longer required.
         * @param action_name the name of the action to query
         * @virtual
         */
        vfunc_get_action_state_hint(action_name: string): GLib.Variant | null;
        /**
         * Queries the type of the state of the named action within
         * `action_group`.
         *
         * If the action is stateful then this function returns the
         * {@link GLib.VariantType} of the state.  All calls to
         * {@link Gio.ActionGroup.change_action_state} must give a {@link GLib.Variant} of this
         * type and {@link Gio.ActionGroup.get_action_state} will return a {@link GLib.Variant}
         * of the same type.
         *
         * If the action is not stateful then this function will return `NULL`.
         * In that case, {@link Gio.ActionGroup.get_action_state} will return `NULL`
         * and you must not call {@link Gio.ActionGroup.change_action_state}.
         *
         * The state type of a particular action will never change but it is
         * possible for an action to be removed and for a new action to be added
         * with the same name but a different state type.
         * @param action_name the name of the action to query
         * @virtual
         */
        vfunc_get_action_state_type(action_name: string): GLib.VariantType | null;
        /**
         * Checks if the named action exists within `action_group`.
         * @param action_name the name of the action to check for
         * @virtual
         */
        vfunc_has_action(action_name: string): boolean;
        /**
         * Lists the actions contained within `action_group`.
         *
         * The caller is responsible for freeing the list with {@link GLib.strfreev} when
         * it is no longer required.
         * @virtual
         */
        vfunc_list_actions(): string[];
        /**
         * Queries all aspects of the named action within an `action_group`.
         *
         * This function acquires the information available from
         * {@link Gio.ActionGroup.has_action}, {@link Gio.ActionGroup.get_action_enabled},
         * {@link Gio.ActionGroup.get_action_parameter_type},
         * {@link Gio.ActionGroup.get_action_state_type},
         * {@link Gio.ActionGroup.get_action_state_hint} and
         * {@link Gio.ActionGroup.get_action_state} with a single function call.
         *
         * This provides two main benefits.
         *
         * The first is the improvement in efficiency that comes with not having
         * to perform repeated lookups of the action in order to discover
         * different things about it.  The second is that implementing
         * {@link Gio.ActionGroup} can now be done by only overriding this one virtual
         * function.
         *
         * The interface provides a default implementation of this function that
         * calls the individual functions, as required, to fetch the
         * information.  The interface also provides default implementations of
         * those functions that call this function.  All implementations,
         * therefore, must override either this function or all of the others.
         *
         * If the action exists, `TRUE` is returned and any of the requested
         * fields (as indicated by having a non-`NULL` reference passed in) are
         * filled.  If the action doesn’t exist, `FALSE` is returned and the
         * fields may or may not have been modified.
         * @param action_name the name of an action in the group
         * @virtual
         */
        vfunc_query_action(
            action_name: string,
        ): [
            boolean,
            boolean,
            GLib.VariantType | null,
            GLib.VariantType | null,
            GLib.Variant | null,
            GLib.Variant | null,
        ];
        /**
         * Adds an action to the `action_map`.
         *
         * If the action map already contains an action with the same name
         * as `action` then the old action is dropped from the action map.
         *
         * The action map takes its own reference on `action`.
         * @param action a {@link Gio.Action}
         */
        add_action(action: Gio.Action): void;
        /**
         * A convenience function for creating multiple simple actions.
         * See Gio.ActionEntryObj for the structure of the action entry.
         * @param entries Array of action entries to add
         */
        add_action_entries(entries: Gio.ActionEntryObj[]): void;
        /**
         * Looks up the action with the name `action_name` in `action_map`.
         *
         * If no such action exists, returns `NULL`.
         * @param action_name the name of an action
         * @returns a {@link Gio.Action}
         */
        lookup_action(action_name: string): Gio.Action | null;
        /**
         * Removes the named action from the action map.
         *
         * If no action of this name is in the map then nothing happens.
         * @param action_name the name of the action
         */
        remove_action(action_name: string): void;
        /**
         * Remove actions from a {@link Gio.ActionMap}. This is meant as the reverse of
         * {@link Gio.ActionMap.add_action_entries}.
         *
         *
         * ```c
         * static const GActionEntry entries[] = {
         *     { "quit",         activate_quit              },
         *     { "print-string", activate_print_string, "s" }
         * };
         *
         * void
         * add_actions (GActionMap *map)
         * {
         *   g_action_map_add_action_entries (map, entries, G_N_ELEMENTS (entries), NULL);
         * }
         *
         * void
         * remove_actions (GActionMap *map)
         * {
         *   g_action_map_remove_action_entries (map, entries, G_N_ELEMENTS (entries));
         * }
         * ```
         * @param entries a pointer to   the first item in an array of {@link Gio.ActionEntry} structs
         */
        remove_action_entries(entries: Gio.ActionEntry[]): void;
        /**
         * Adds an action to the `action_map`.
         *
         * If the action map already contains an action with the same name
         * as `action` then the old action is dropped from the action map.
         *
         * The action map takes its own reference on `action`.
         * @param action a {@link Gio.Action}
         * @virtual
         */
        vfunc_add_action(action: Gio.Action): void;
        /**
         * Looks up the action with the name `action_name` in `action_map`.
         *
         * If no such action exists, returns `NULL`.
         * @param action_name the name of an action
         * @virtual
         */
        vfunc_lookup_action(action_name: string): Gio.Action | null;
        /**
         * Removes the named action from the action map.
         *
         * If no action of this name is in the map then nothing happens.
         * @param action_name the name of the action
         * @virtual
         */
        vfunc_remove_action(action_name: string): void;
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
        /**
         * Enables or disables an action installed with
         * {@link Gtk.WidgetClass.install_action}.
         * @param action_name action name, such as "clipboard.paste"
         * @param enabled whether the action is now enabled
         */
        action_set_enabled(action_name: string, enabled: boolean): void;
        /**
         * Activates the widget.
         *
         * The activation will emit the signal set using
         * {@link Gtk.WidgetClass.set_activate_signal}
         * during class initialization.
         *
         * Activation is what happens when you press <kbd>Enter</kbd>
         * on a widget.
         *
         * If you wish to handle the activation keybinding yourself,
         * it is recommended to use {@link Gtk.WidgetClass.add_shortcut}
         * with an action created with {@link Gtk.SignalAction.new}.
         *
         * If `widget` is not activatable, the function returns false.
         * @returns true if the widget was activated
         */
        activate(): boolean;
        /**
         * Activates the `default.activate` action for the widget.
         *
         * The action is looked up in the same was as for
         * {@link Gtk.Widget.activate_action}.
         */
        activate_default(): void;
        /**
         * Adds an event controller to the widget.
         *
         * The event controllers of a widget handle the events that are
         * propagated to the widget.
         *
         * You will usually want to call this function right after
         * creating any kind of {@link Gtk.EventController}.
         * @param controller an event controller that hasn't been   added to a widget yet
         */
        add_controller(controller: Gtk.EventController): void;
        /**
         * Adds a style class to the widget.
         *
         * After calling this function, the widget’s style will match
         * for `css_class`, according to CSS matching rules.
         *
         * Use {@link Gtk.Widget.remove_css_class} to remove the
         * style again.
         * @param css_class style class to add to `widget`, without the leading period
         */
        add_css_class(css_class: string): void;
        /**
         * Adds a widget to the list of mnemonic labels for this widget.
         *
         * See {@link Gtk.Widget.list_mnemonic_labels}.
         *
         * Note that the list of mnemonic labels for the widget is cleared
         * when the widget is destroyed, so the caller must make sure
         * to update its internal state at this point as well.
         * @param label a widget that acts as a mnemonic label for `widget`
         */
        add_mnemonic_label(label: Gtk.Widget): void;
        /**
         * Queues an animation frame update and adds a callback to be called
         * before each frame.
         *
         * Until the tick callback is removed, it will be called frequently
         * (usually at the frame rate of the output device or as quickly as
         * the application can be repainted, whichever is slower). For this
         * reason, is most suitable for handling graphics that change every
         * frame or every few frames.
         *
         * The tick callback does not automatically imply a relayout or repaint.
         * If you want a repaint or relayout, and aren’t changing widget properties
         * that would trigger that (for example, changing the text of a label),
         * then you will have to call {@link Gtk.Widget.queue_resize} or
         * {@link Gtk.Widget.queue_draw} yourself.
         *
         * {@link Gdk.FrameClock.get_frame_time} should generally be used
         * for timing continuous animations and
         * {@link Gdk.FrameTimings.get_predicted_presentation_time} should be
         * used if you are trying to display isolated frames at particular times.
         *
         * This is a more convenient alternative to connecting directly to the
         * `Gdk.FrameClock::update` signal of the frame clock, since you
         * don't have to worry about when a frame clock is assigned to a widget.
         *
         * To remove a tick callback, pass the ID that is returned by this function
         * to {@link Gtk.Widget.remove_tick_callback}.
         * @param callback function   to call for updating animations
         * @returns an ID for this callback
         */
        add_tick_callback(callback: Gtk.TickCallback): number;
        /**
         * Assigns size, position, (optionally) a baseline and transform
         * to a child widget.
         *
         * In this function, the allocation and baseline may be adjusted.
         * The given allocation will be forced to be bigger than the
         * widget's minimum size, as well as at least 0×0 in size.
         *
         * This function is only used by widget implementations.
         *
         * For a version that does not take a transform, see
         * {@link Gtk.Widget.size_allocate}.
         * @param width new width
         * @param height new height
         * @param baseline new baseline, or -1
         * @param transform transformation to be applied
         */
        allocate(width: number, height: number, baseline: number, transform?: Gsk.Transform | null): void;
        /**
         * Called by widgets as the user moves around the window using
         * keyboard shortcuts.
         *
         * The `direction` argument indicates what kind of motion is taking
         * place (up, down, left, right, tab forward, tab backward).
         *
         * This function calls the {@link Gtk.Widget.focus} virtual function;
         * widgets can override the virtual function in order to implement
         * appropriate focus behavior.
         *
         * The default `focus()` virtual function for a widget should return
         * true if moving in `direction` left the focus on a focusable location
         * inside that widget, and false if moving in `direction` moved the focus
         * outside the widget. When returning true, widgets normally call
         * {@link Gtk.Widget.grab_focus} to place the focus accordingly;
         * when returning false, they don’t modify the current focus location.
         *
         * This function is used by custom widget implementations; if you're
         * writing an app, you’d use {@link Gtk.Widget.grab_focus} to move
         * the focus to a particular widget.
         * @param direction direction of focus movement
         * @returns true if focus ended up inside `widget`
         */
        child_focus(direction: Gtk.DirectionType | null): boolean;
        /**
         * Computes the bounds for `widget` in the coordinate space of `target`.
         *
         * The bounds of widget are (the bounding box of) the region that it is
         * expected to draw in. See the [coordinate system](coordinates.html)
         * overview to learn more.
         *
         * If the operation is successful, true is returned. If `widget` has no
         * bounds or the bounds cannot be expressed in `target`'s coordinate space
         * (for example if both widgets are in different windows), false is
         * returned and `bounds` is set to the zero rectangle.
         *
         * It is valid for `widget` and `target` to be the same widget.
         * @param target the target widget
         * @returns true if the bounds could be computed
         */
        compute_bounds(target: Gtk.Widget): [boolean, Graphene.Rect];
        /**
         * Computes whether a parent widget should give this widget
         * extra space when possible.
         *
         * Widgets with children should check this, rather than looking at
         * {@link Gtk.Widget.get_hexpand} or {@link Gtk.Widget.get_vexpand}.
         *
         * This function already checks whether the widget is visible, so
         * visibility does not need to be checked separately. Non-visible
         * widgets are not expanded.
         *
         * The computed expand value uses either the expand setting explicitly
         * set on the widget itself, or, if none has been explicitly set,
         * the widget may expand if some of its children do.
         * @param orientation expand direction
         * @returns whether widget tree rooted here should be expanded
         */
        compute_expand(orientation: Gtk.Orientation | null): boolean;
        /**
         * Translates the given `point` in `widget`'s coordinates to coordinates
         * in `target`’s coordinate system.
         *
         * In order to perform this operation, both widgets must share a
         * a common ancestor. If that is not the case, `out_point` is set
         * to (0, 0) and false is returned.
         * @param target the widget to transform into
         * @param point a point in `widget`'s coordinate system
         * @returns true if `src_widget` and `dest_widget` have a common   ancestor, false otherwise
         */
        compute_point(target: Gtk.Widget, point: Graphene.Point): [boolean, Graphene.Point];
        /**
         * Computes a matrix suitable to describe a transformation from
         * `widget`'s coordinate system into `target`'s coordinate system.
         *
         * The transform can not be computed in certain cases, for example
         * when `widget` and `target` do not share a common ancestor. In that
         * case `out_transform` gets set to the identity matrix.
         *
         * To learn more about widget coordinate systems, see the coordinate
         * system [overview](coordinates.html).
         * @param target the target widget that the matrix will transform to
         * @returns true if the transform could be computed
         */
        compute_transform(target: Gtk.Widget): [boolean, Graphene.Matrix];
        /**
         * Tests if a given point is contained in the widget.
         *
         * The coordinates for (x, y) must be in widget coordinates, so
         * (0, 0) is assumed to be the top left of `widget`'s content area.
         * @param x X coordinate to test, relative to `widget`'s origin
         * @param y Y coordinate to test, relative to `widget`'s origin
         * @returns true if `widget` contains the point (x, y)
         */
        contains(x: number, y: number): boolean;
        /**
         * Creates a new {@link Pango.Context} that is configured for the widget.
         *
         * The {@link Pango.Context} will have the appropriate font map,
         * font options, font description, and base direction set.
         *
         * See also {@link Gtk.Widget.get_pango_context}.
         * @returns the new {@link Pango.Context}
         */
        create_pango_context(): Pango.Context;
        /**
         * Creates a new {@link Pango.Layout} that is configured for the widget.
         *
         * The {@link Pango.Layout} will have the appropriate font map,
         * font description, and base direction set.
         *
         * If you keep a {@link Pango.Layout} created in this way around,
         * you need to re-create it when the widgets {@link Pango.Context}
         * is replaced. This can be tracked by listening to changes
         * of the {@link Gtk.Widget.root} property on the widget.
         * @param text text to set on the layout
         * @returns the new {@link Pango.Layout}
         */
        create_pango_layout(text?: string | null): Pango.Layout;
        /**
         * Clears the template children for the widget.
         *
         * This function is the opposite of {@link Gtk.Widget.init_template},
         * and it is used to clear all the template children from a widget
         * instance. If you bound a template child to a field in the instance
         * structure, or in the instance private data structure, the field will
         * be set to `NULL` after this function returns.
         *
         * You should call this function inside the {@link GObject.Object.dispose}
         * implementation of any widget that called {@link Gtk.Widget.init_template}.
         * Typically, you will want to call this function last, right before
         * chaining up to the parent type's dispose implementation, e.g.
         *
         * ```c
         * static void
         * some_widget_dispose (GObject *gobject)
         * {
         *   SomeWidget *self = SOME_WIDGET (gobject);
         *
         *   // Clear the template data for SomeWidget
         *   gtk_widget_dispose_template (GTK_WIDGET (self), SOME_TYPE_WIDGET);
         *
         *   G_OBJECT_CLASS (some_widget_parent_class)->dispose (gobject);
         * }
         * ```
         * @param widget_type the type of the widget to finalize the template for
         */
        dispose_template(widget_type: GObject.GType): void;
        /**
         * Checks to see if a drag movement has passed the GTK drag threshold.
         * @param start_x X coordinate of start of drag
         * @param start_y Y coordinate of start of drag
         * @param current_x current X coordinate
         * @param current_y current Y coordinate
         * @returns true if the drag threshold has been passed
         */
        drag_check_threshold(start_x: number, start_y: number, current_x: number, current_y: number): boolean;
        /**
         * Notifies the user about an input-related error on the widget.
         *
         * If the {@link Gtk.Settings.gtk_error_bell} setting is true,
         * it calls {@link Gdk.Surface.beep}, otherwise it does nothing.
         *
         * Note that the effect of {@link Gdk.Surface.beep} can be configured
         * in many ways, depending on the windowing backend and the desktop
         * environment or window manager that is used.
         */
        error_bell(): void;
        /**
         * Returns the baseline that has currently been allocated to the widget.
         *
         * This function is intended to be used when implementing handlers
         * for the {@link Gtk.Widget.snapshot} function, and when allocating
         * child widgets in {@link Gtk.Widget.size_allocate}.
         * @returns the baseline of the `widget`, or -1 if none
         */
        get_allocated_baseline(): number;
        /**
         * Returns the height that has currently been allocated to the widget.
         *
         * To learn more about widget sizes, see the coordinate
         * system [overview](coordinates.html).
         * @returns the height of the `widget`
         */
        get_allocated_height(): number;
        /**
         * Returns the width that has currently been allocated to the widget.
         *
         * To learn more about widget sizes, see the coordinate
         * system [overview](coordinates.html).
         * @returns the width of the `widget`
         */
        get_allocated_width(): number;
        /**
         * Retrieves the widget’s allocation.
         *
         * Note, when implementing a layout widget: a widget’s allocation
         * will be its “adjusted” allocation, that is, the widget’s parent
         * typically calls {@link Gtk.Widget.size_allocate} with an allocation,
         * and that allocation is then adjusted (to handle margin
         * and alignment for example) before assignment to the widget.
         * {@link Gtk.Widget.get_allocation} returns the adjusted allocation that
         * was actually assigned to the widget. The adjusted allocation is
         * guaranteed to be completely contained within the
         * {@link Gtk.Widget.size_allocate} allocation, however.
         *
         * So a layout widget is guaranteed that its children stay inside
         * the assigned bounds, but not that they have exactly the bounds the
         * widget assigned.
         */
        get_allocation(): Gtk.Allocation;
        /**
         * Gets the first ancestor of the widget with type `widget_type`.
         *
         * For example, `gtk_widget_get_ancestor (widget, GTK_TYPE_BOX)`
         * gets the first {@link Gtk.Box} that’s an ancestor of `widget`. No
         * reference will be added to the returned widget; it should
         * not be unreferenced.
         *
         * Note that unlike {@link Gtk.Widget.is_ancestor}, this function
         * considers `widget` to be an ancestor of itself.
         * @param widget_type ancestor type
         * @returns the ancestor widget
         */
        get_ancestor(widget_type: GObject.GType): Gtk.Widget | null;
        /**
         * Returns the baseline that has currently been allocated to the widget.
         *
         * This function is intended to be used when implementing handlers
         * for the {@link Gtk.Widget.snapshot} function, and when allocating
         * child widgets in {@link Gtk.Widget.size_allocate}.
         * @returns the baseline of the `widget`, or -1 if none
         */
        get_baseline(): number;
        /**
         * Determines whether the input focus can enter the widget or any
         * of its children.
         *
         * See {@link Gtk.Widget.set_can_focus}.
         * @returns true if the input focus can enter `widget`
         */
        get_can_focus(): boolean;
        /**
         * Queries whether the widget can be the target of pointer events.
         * @returns true if `widget` can receive pointer events
         */
        get_can_target(): boolean;
        /**
         * Gets the value set with {@link Gtk.Widget.set_child_visible}.
         *
         * If you feel a need to use this function, your code probably
         * needs reorganization.
         *
         * This function is only useful for widget implementations
         * and should never be called by an application.
         * @returns true if the widget is mapped with the parent
         */
        get_child_visible(): boolean;
        /**
         * Gets the clipboard object for the widget.
         *
         * This is a utility function to get the clipboard object for the
         * display that `widget` is using.
         *
         * Note that this function always works, even when `widget` is not
         * realized yet.
         * @returns the appropriate clipboard object
         */
        get_clipboard(): Gdk.Clipboard;
        /**
         * Gets the current foreground color for the widget’s style.
         *
         * This function should only be used in snapshot
         * implementations that need to do custom drawing
         * with the foreground color.
         */
        get_color(): Gdk.RGBA;
        /**
         * Returns the list of style classes applied to the widget.
         * @returns a `NULL`-terminated list of   css classes currently applied to `widget`
         */
        get_css_classes(): string[];
        /**
         * Returns the CSS name of the widget.
         * @returns the CSS name
         */
        get_css_name(): string;
        /**
         * Gets the cursor set on the widget.
         *
         * See {@link Gtk.Widget.set_cursor} for details.
         * @returns the cursor   that is set on `widget`
         */
        get_cursor(): Gdk.Cursor | null;
        /**
         * Gets the reading direction for the widget.
         *
         * See {@link Gtk.Widget.set_direction}.
         * @returns the reading direction for the widget
         */
        get_direction(): Gtk.TextDirection;
        /**
         * Get the display for the window that the widget belongs to.
         *
         * This function can only be called after the widget has been
         * added to a widget hierarchy with a {@link Gtk.Root} at the top.
         *
         * In general, you should only create display-specific
         * resources when a widget has been realized, and you should
         * free those resources when the widget is unrealized.
         * @returns the display for this widget
         */
        get_display(): Gdk.Display;
        /**
         * Returns the widget’s first child.
         *
         * This function is primarily meant for widget implementations.
         * @returns the widget's first child
         */
        get_first_child(): Gtk.Widget | null;
        /**
         * Returns the focus child of the widget.
         * @returns the current focus   child of `widget`
         */
        get_focus_child(): Gtk.Widget | null;
        /**
         * Returns whether the widget should grab focus when it is clicked
         * with the mouse.
         *
         * See {@link Gtk.Widget.set_focus_on_click}.
         * @returns true if the widget should grab focus when it is   clicked with the mouse
         */
        get_focus_on_click(): boolean;
        /**
         * Determines whether the widget can own the input focus.
         *
         * See {@link Gtk.Widget.set_focusable}.
         * @returns true if `widget` can own the input focus
         */
        get_focusable(): boolean;
        /**
         * Gets the font map of the widget.
         *
         * See {@link Gtk.Widget.set_font_map}.
         * @returns the font map of `widget`
         */
        get_font_map(): Pango.FontMap | null;
        /**
         * Returns the `cairo_font_options_t` of the widget.
         *
         * Seee {@link Gtk.Widget.set_font_options}.
         * @returns the `cairo_font_options_t` of widget
         */
        get_font_options(): cairo.FontOptions | null;
        /**
         * Obtains the frame clock for a widget.
         *
         * The frame clock is a global “ticker” that can be used to drive
         * animations and repaints. The most common reason to get the frame
         * clock is to call {@link Gdk.FrameClock.get_frame_time}, in order
         * to get a time to use for animating. For example you might record
         * the start of the animation with an initial value from
         * {@link Gdk.FrameClock.get_frame_time}, and then update the animation
         * by calling {@link Gdk.FrameClock.get_frame_time} again during each repaint.
         *
         * {@link Gdk.FrameClock.request_phase} will result in a new frame on the
         * clock, but won’t necessarily repaint any widgets. To repaint a widget,
         * you have to use {@link Gtk.Widget.queue_draw} which invalidates the
         * widget (thus scheduling it to receive a draw on the next frame).
         * {@link Gtk.Widget.queue_draw} will also end up requesting a frame
         * on the appropriate frame clock.
         *
         * A widget’s frame clock will not change while the widget is mapped.
         * Reparenting a widget (which implies a temporary unmap) can change
         * the widget’s frame clock.
         *
         * Unrealized widgets do not have a frame clock.
         * @returns the frame clock
         */
        get_frame_clock(): Gdk.FrameClock | null;
        /**
         * Gets the horizontal alignment of the widget.
         *
         * For backwards compatibility reasons this method will never return
         * one of the baseline alignments, but instead it will convert it to
         * {@link Gtk.Align.FILL} or {@link Gtk.Align.CENTER}.
         *
         * Baselines are not supported for horizontal alignment.
         * @returns the horizontal alignment of `widget`
         */
        get_halign(): Gtk.Align;
        /**
         * Returns the current value of the `has-tooltip` property.
         * @returns current value of `has-tooltip` on `widget`
         */
        get_has_tooltip(): boolean;
        /**
         * Returns the content height of the widget.
         *
         * This function returns the height passed to its
         * size-allocate implementation, which is the height you
         * should be using in {@link Gtk.Widget.snapshot}.
         *
         * For pointer events, see {@link Gtk.Widget.contains}.
         *
         * To learn more about widget sizes, see the coordinate
         * system [overview](coordinates.html).
         * @returns The height of `widget`
         */
        get_height(): number;
        /**
         * Gets whether the widget would like any available extra horizontal
         * space.
         *
         * When a user resizes a window, widgets with expand set to true generally
         * receive the extra space. For example, a list or scrollable area
         * or document in your window would often be set to expand.
         *
         * Widgets with children should use {@link Gtk.Widget.compute_expand}
         * rather than this function, to see whether any of its children,
         * has the expand flag set. If any child of a widget wants to
         * expand, the parent may ask to expand also.
         *
         * This function only looks at the widget’s own hexpand flag, rather
         * than computing whether the entire widget tree rooted at this widget
         * wants to expand.
         * @returns whether hexpand flag is set
         */
        get_hexpand(): boolean;
        /**
         * Gets whether the `hexpand` flag has been explicitly set.
         *
         * If {@link Gtk.Widget.hexpand} property is set, then it
         * overrides any computed expand value based on child widgets.
         * If `hexpand` is not set, then the expand value depends on
         * whether any children of the widget would like to expand.
         *
         * There are few reasons to use this function, but it’s here
         * for completeness and consistency.
         * @returns whether hexpand has been explicitly set
         */
        get_hexpand_set(): boolean;
        /**
         * Returns the widget’s last child.
         *
         * This function is primarily meant for widget implementations.
         * @returns the widget's last child
         */
        get_last_child(): Gtk.Widget | null;
        /**
         * Retrieves the layout manager of the widget.
         *
         * See {@link Gtk.Widget.set_layout_manager}.
         * @returns the layout manager of `widget`
         */
        get_layout_manager(): Gtk.LayoutManager | null;
        /**
         * Gets the value of the {@link Gtk.Widget.limit_events} property.
         */
        get_limit_events(): boolean;
        /**
         * Returns whether the widget is mapped.
         * @returns true if the widget is mapped
         */
        get_mapped(): boolean;
        /**
         * Gets the bottom margin of the widget.
         * @returns The bottom margin of `widget`
         */
        get_margin_bottom(): number;
        /**
         * Gets the end margin of the widget.
         * @returns The end margin of `widget`
         */
        get_margin_end(): number;
        /**
         * Gets the start margin of the widget.
         * @returns The start margin of `widget`
         */
        get_margin_start(): number;
        /**
         * Gets the top margin of the widget.
         * @returns The top margin of `widget`
         */
        get_margin_top(): number;
        /**
         * Retrieves the name of a widget.
         *
         * See {@link Gtk.Widget.set_name} for the significance of widget names.
         * @returns name of the widget
         */
        get_name(): string;
        /**
         * Returns the nearest {@link Gtk.Native} ancestor of the widget.
         *
         * This function will return `NULL` if the widget is not
         * contained inside a widget tree with a native ancestor.
         *
         * {@link Gtk.Native} widgets will return themselves here.
         * @returns the {@link Gtk.Native} ancestor of `widget`
         */
        get_native(): Gtk.Native | null;
        /**
         * Returns the widget’s next sibling.
         *
         * This function is primarily meant for widget implementations.
         * @returns the widget's next sibling
         */
        get_next_sibling(): Gtk.Widget | null;
        /**
         * Fetches the requested opacity for the widget.
         *
         * See {@link Gtk.Widget.set_opacity}.
         * @returns the requested opacity for this widget
         */
        get_opacity(): number;
        /**
         * Returns the widget’s overflow value.
         * @returns The widget's overflow value
         */
        get_overflow(): Gtk.Overflow;
        /**
         * Gets a {@link Pango.Context} that is configured for the widget.
         *
         * The {@link Pango.Context} will have the appropriate font map, font description,
         * and base direction set.
         *
         * Unlike the context returned by {@link Gtk.Widget.create_pango_context},
         * this context is owned by the widget (it can be used until the screen
         * for the widget changes or the widget is removed from its toplevel),
         * and will be updated to match any changes to the widget’s attributes.
         * This can be tracked by listening to changes of the
         * {@link Gtk.Widget.root} property on the widget.
         * @returns the {@link Pango.Context} for the widget
         */
        get_pango_context(): Pango.Context;
        /**
         * Returns the parent widget of the widget.
         * @returns the parent widget of `widget`
         */
        get_parent(): Gtk.Widget | null;
        /**
         * Retrieves the minimum and natural size of a widget, taking
         * into account the widget’s preference for height-for-width management.
         *
         * This is used to retrieve a suitable size by container widgets which do
         * not impose any restrictions on the child placement. It can be used
         * to deduce toplevel window and menu sizes as well as child widgets in
         * free-form containers such as {@link Gtk.Fixed}.
         *
         * Handle with care. Note that the natural height of a height-for-width
         * widget will generally be a smaller size than the minimum height, since
         * the required height for the natural width is generally smaller than the
         * required height for the minimum width.
         *
         * Use {@link Gtk.Widget.measure} if you want to support baseline alignment.
         */
        get_preferred_size(): [Gtk.Requisition | null, Gtk.Requisition | null];
        /**
         * Returns the widget’s previous sibling.
         *
         * This function is primarily meant for widget implementations.
         * @returns the widget's previous sibling
         */
        get_prev_sibling(): Gtk.Widget | null;
        /**
         * Gets the primary clipboard of the widget.
         *
         * This is a utility function to get the primary clipboard object
         * for the display that `widget` is using.
         *
         * Note that this function always works, even when `widget` is not
         * realized yet.
         * @returns the appropriate clipboard object
         */
        get_primary_clipboard(): Gdk.Clipboard;
        /**
         * Determines whether the widget is realized.
         * @returns true if `widget` is realized
         */
        get_realized(): boolean;
        /**
         * Determines whether the widget is always treated as the default widget
         * within its toplevel when it has the focus, even if another widget
         * is the default.
         *
         * See {@link Gtk.Widget.set_receives_default}.
         * @returns true if `widget` acts as the default widget when focused
         */
        get_receives_default(): boolean;
        /**
         * Gets whether the widget prefers a height-for-width layout
         * or a width-for-height layout.
         *
         * Single-child widgets generally propagate the preference of
         * their child, more complex widgets need to request something
         * either in context of their children or in context of their
         * allocation capabilities.
         * @returns The {@link Gtk.SizeRequestMode} preferred by `widget`.
         */
        get_request_mode(): Gtk.SizeRequestMode;
        /**
         * Returns the {@link Gtk.Root} widget of the widget.
         *
         * This function will return `NULL` if the widget is not contained
         * inside a widget tree with a root widget.
         *
         * {@link Gtk.Root} widgets will return themselves here.
         * @returns the root widget of `widget`
         */
        get_root(): Gtk.Root | null;
        /**
         * Retrieves the internal scale factor that maps from window
         * coordinates to the actual device pixels.
         *
         * On traditional systems this is 1, on high density outputs,
         * it can be a higher value (typically 2).
         *
         * See {@link Gdk.Surface.get_scale_factor}.
         *
         * Note that modern systems may support *fractional* scaling,
         * where the scale factor is not an integer. On such systems,
         * this function will return the next higher integer value,
         * but you probably want to use {@link Gdk.Surface.get_scale}
         * to get the fractional scale value.
         * @returns the scale factor for `widget`
         */
        get_scale_factor(): number;
        /**
         * Returns the widget’s sensitivity.
         *
         * This function returns the value that has been set using
         * {@link Gtk.Widget.set_sensitive}).
         *
         * The effective sensitivity of a widget is however determined
         * by both its own and its parent widget’s sensitivity.
         * See {@link Gtk.Widget.is_sensitive}.
         * @returns true if the widget is sensitive
         */
        get_sensitive(): boolean;
        /**
         * Gets the settings object holding the settings used for the widget.
         *
         * Note that this function can only be called when the {@link Gtk.Widget}
         * is attached to a toplevel, since the settings object is specific
         * to a particular display. If you want to monitor the widget for
         * changes in its settings, connect to the `notify::display` signal.
         * @returns the relevant settings object
         */
        get_settings(): Gtk.Settings;
        /**
         * Returns the content width or height of the widget.
         *
         * Which dimension is returned depends on `orientation`.
         *
         * This is equivalent to calling {@link Gtk.Widget.get_width}
         * for {@link Gtk.Orientation.HORIZONTAL} or {@link Gtk.Widget.get_height}
         * for {@link Gtk.Orientation.VERTICAL}, but can be used when
         * writing orientation-independent code, such as when
         * implementing {@link Gtk.Orientable} widgets.
         *
         * To learn more about widget sizes, see the coordinate
         * system [overview](coordinates.html).
         * @param orientation the orientation to query
         * @returns the size of `widget` in `orientation`
         */
        get_size(orientation: Gtk.Orientation | null): number;
        /**
         * Gets the size request that was explicitly set for the widget.
         *
         * A value of -1 stored in `width` or `height` indicates that that
         * dimension has not been set explicitly and the natural requisition
         * of the widget will be used instead.
         *
         * See {@link Gtk.Widget.set_size_request}.
         *
         * To get the size a widget will actually request, call
         * {@link Gtk.Widget.measure} instead of this function.
         */
        get_size_request(): [number, number];
        /**
         * Returns the widget state as a flag set.
         *
         * It is worth mentioning that the effective {@link Gtk.StateFlags.INSENSITIVE}
         * state will be returned, that is, also based on parent insensitivity,
         * even if `widget` itself is sensitive.
         *
         * Also note that if you are looking for a way to obtain the
         * {@link Gtk.StateFlags} to pass to a {@link Gtk.StyleContext}
         * method, you should look at {@link Gtk.StyleContext.get_state}.
         * @returns the state flags of widget
         */
        get_state_flags(): Gtk.StateFlags;
        /**
         * Returns the style context associated to the widget.
         *
         * The returned object is guaranteed to be the same
         * for the lifetime of `widget`.
         * @returns the widgets style context
         */
        get_style_context(): Gtk.StyleContext;
        /**
         * Fetches an object build from the template XML for `widget_type` in
         * the widget.
         *
         * This will only report children which were previously declared
         * with {@link Gtk.WidgetClass.bind_template_child_full} or one of its
         * variants.
         *
         * This function is only meant to be called for code which is private
         * to the `widget_type` which declared the child and is meant for language
         * bindings which cannot easily make use of the GObject structure offsets.
         * @param widget_type The {@link GObject.GType} to get a template child for
         * @param name ID of the child defined in the template XML
         * @returns the object built in the template XML with   the id `name`
         */
        get_template_child<T = GObject.Object>(widget_type: GObject.GType, name: string): T;
        /**
         * Gets the contents of the tooltip for the widget.
         *
         * If the tooltip has not been set using
         * {@link Gtk.Widget.set_tooltip_markup}, this
         * function returns `NULL`.
         * @returns the tooltip text
         */
        get_tooltip_markup(): string | null;
        /**
         * Gets the contents of the tooltip for the widget.
         *
         * If the `widget`'s tooltip was set using
         * {@link Gtk.Widget.set_tooltip_markup},
         * this function will return the escaped text.
         * @returns the tooltip text
         */
        get_tooltip_text(): string | null;
        /**
         * Gets the vertical alignment of the widget.
         * @returns the vertical alignment of `widget`
         */
        get_valign(): Gtk.Align;
        /**
         * Gets whether the widget would like any available extra vertical
         * space.
         *
         * See {@link Gtk.Widget.get_hexpand} for more detail.
         * @returns whether vexpand flag is set
         */
        get_vexpand(): boolean;
        /**
         * Gets whether the `vexpand` flag has been explicitly set.
         *
         * See {@link Gtk.Widget.get_hexpand_set} for more detail.
         * @returns whether vexpand has been explicitly set
         */
        get_vexpand_set(): boolean;
        /**
         * Determines whether the widget is visible.
         *
         * If you want to take into account whether the widget’s
         * parent is also marked as visible, use
         * {@link Gtk.Widget.is_visible} instead.
         *
         * This function does not check if the widget is
         * obscured in any way.
         *
         * See {@link Gtk.Widget.set_visible}.
         * @returns true if the widget is visible
         */
        get_visible(): boolean;
        /**
         * Returns the content width of the widget.
         *
         * This function returns the width passed to its
         * size-allocate implementation, which is the width you
         * should be using in {@link Gtk.Widget.snapshot}.
         *
         * For pointer events, see {@link Gtk.Widget.contains}.
         *
         * To learn more about widget sizes, see the coordinate
         * system [overview](coordinates.html).
         * @returns The width of `widget`
         */
        get_width(): number;
        /**
         * Causes `widget` to have the keyboard focus for the window
         * that it belongs to.
         *
         * If `widget` is not focusable, or its {@link Gtk.Widget.grab_focus}
         * implementation cannot transfer the focus to a descendant of `widget`
         * that is focusable, it will not take focus and false will be returned.
         *
         * Calling {@link Gtk.Widget.grab_focus} on an already focused widget
         * is allowed, should not have an effect, and return true.
         * @returns true if focus is now inside `widget`
         */
        grab_focus(): boolean;
        /**
         * Returns whether a style class is currently applied to the widget.
         * @param css_class style class, without the leading period
         * @returns true if `css_class` is currently applied to `widget`
         */
        has_css_class(css_class: string): boolean;
        /**
         * Determines if the widget should show a visible indication that
         * it has the global input focus.
         *
         * This is a convenience function that takes into account whether
         * focus indication should currently be shown in the toplevel window
         * of `widget`. See {@link Gtk.Window.get_focus_visible} for more
         * information about focus indication.
         *
         * To find out if the widget has the global input focus, use
         * {@link Gtk.Widget.has_focus}.
         * @returns true if the widget should display a “focus rectangle”
         */
        has_visible_focus(): boolean;
        /**
         * Reverses the effects of [method.Gtk.Widget.show].
         *
         * This is causing the widget to be hidden (invisible to the user).
         */
        hide(): void;
        /**
         * Returns whether the widget is currently being destroyed.
         *
         * This information can sometimes be used to avoid doing
         * unnecessary work.
         * @returns true if `widget` is being destroyed
         */
        in_destruction(): boolean;
        /**
         * Creates and initializes child widgets defined in templates.
         *
         * This function must be called in the instance initializer
         * for any class which assigned itself a template using
         * {@link Gtk.WidgetClass.set_template}.
         *
         * It is important to call this function in the instance initializer
         * of a widget subclass and not in `GObject.constructed()` or
         * `GObject.constructor()` for two reasons:
         *
         *  - derived widgets will assume that the composite widgets
         *    defined by its parent classes have been created in their
         *    relative instance initializers
         *  - when calling `g_object_new()` on a widget with composite templates,
         *    it’s important to build the composite widgets before the construct
         *    properties are set. Properties passed to `g_object_new()` should
         *    take precedence over properties set in the private template XML
         *
         * A good rule of thumb is to call this function as the first thing in
         * an instance initialization function.
         */
        init_template(): void;
        /**
         * Inserts an action group into the widget's actions.
         *
         * Children of `widget` that implement {@link Gtk.Actionable} can
         * then be associated with actions in `group` by setting their
         * “action-name” to `prefix`.`action-name`.
         *
         * Note that inheritance is defined for individual actions. I.e.
         * even if you insert a group with prefix `prefix`, actions with
         * the same prefix will still be inherited from the parent, unless
         * the group contains an action with the same name.
         *
         * If `group` is `NULL`, a previously inserted group for `name` is
         * removed from `widget`.
         * @param name the prefix for actions in `group`
         * @param group an action group
         */
        insert_action_group(name: string, group?: Gio.ActionGroup | null): void;
        /**
         * Sets the parent widget of the widget.
         *
         * In contrast to {@link Gtk.Widget.set_parent}, this function
         * inserts `widget` at a specific position into the list of children
         * of the `parent` widget.
         *
         * It will be placed after `previous_sibling`, or at the beginning if
         * `previous_sibling` is `NULL`.
         *
         * After calling this function, `gtk_widget_get_prev_sibling (widget)`
         * will return `previous_sibling`.
         *
         * If `parent` is already set as the parent widget of `widget`, this
         * function can also be used to reorder `widget` in the child widget
         * list of `parent`.
         *
         * This function is primarily meant for widget implementations; if you are
         * just using a widget, you *must* use its own API for adding children.
         * @param parent the parent widget to insert `widget` into
         * @param previous_sibling the new previous sibling of `widget`
         */
        insert_after(parent: Gtk.Widget, previous_sibling?: Gtk.Widget | null): void;
        /**
         * Sets the parent widget of the widget.
         *
         * In contrast to {@link Gtk.Widget.set_parent}, this function
         * inserts `widget` at a specific position into the list of children
         * of the `parent` widget.
         *
         * It will be placed before `next_sibling`, or at the end if
         * `next_sibling` is `NULL`.
         *
         * After calling this function, `gtk_widget_get_next_sibling (widget)`
         * will return `next_sibling`.
         *
         * If `parent` is already set as the parent widget of `widget`, this function
         * can also be used to reorder `widget` in the child widget list of `parent`.
         *
         * This function is primarily meant for widget implementations; if you are
         * just using a widget, you *must* use its own API for adding children.
         * @param parent the parent widget to insert `widget` into
         * @param next_sibling the new next sibling of `widget`
         */
        insert_before(parent: Gtk.Widget, next_sibling?: Gtk.Widget | null): void;
        /**
         * Determines whether the widget is a descendent of `ancestor`.
         * @param ancestor another {@link Gtk.Widget}
         * @returns true if `ancestor` contains `widget` as a child,   grandchild, great grandchild, etc
         */
        is_ancestor(ancestor: Gtk.Widget): boolean;
        /**
         * Determines whether the widget can be drawn to.
         *
         * A widget can be drawn if it is mapped and visible.
         * @returns true if `widget` is drawable
         */
        is_drawable(): boolean;
        /**
         * Determines if the widget is the focus widget within its
         * toplevel.
         *
         * This does not mean that the {@link Gtk.Widget.has_focus}
         * property is necessarily set; {@link Gtk.Widget.has_focus}
         * will only be set if the toplevel widget additionally has the
         * global input focus.
         * @returns true if the widget is the focus widget
         */
        is_focus(): boolean;
        /**
         * Returns the widget’s effective sensitivity.
         *
         * This means it is sensitive itself and also its
         * parent widget is sensitive.
         * @returns true if the widget is effectively sensitive
         */
        is_sensitive(): boolean;
        /**
         * Determines whether the widget and all its parents are marked as
         * visible.
         *
         * This function does not check if the widget is obscured in any way.
         *
         * See also {@link Gtk.Widget.get_visible} and
         * {@link Gtk.Widget.set_visible}.
         * @returns true if the widget and all its parents are visible
         */
        is_visible(): boolean;
        /**
         * Emits the `Gtk.Widget::keynav-failed` signal on the widget.
         *
         * This function should be called whenever keyboard navigation
         * within a single widget hits a boundary.
         *
         * The return value of this function should be interpreted
         * in a way similar to the return value of
         * {@link Gtk.Widget.child_focus}. When true is returned,
         * stay in the widget, the failed keyboard navigation is ok
         * and/or there is nowhere we can/should move the focus to.
         * When false is returned, the caller should continue with
         * keyboard navigation outside the widget, e.g. by calling
         * {@link Gtk.Widget.child_focus} on the widget’s toplevel.
         *
         * The default `Gtk.Widget::keynav-failed` handler returns
         * false for {@link Gtk.DirectionType.TAB-FORWARD} and
         * {@link Gtk.DirectionType.TAB-BACKWARD}. For the other values
         * of {@link Gtk.DirectionType} it returns true.
         *
         * Whenever the default handler returns true, it also calls
         * {@link Gtk.Widget.error_bell} to notify the user of the
         * failed keyboard navigation.
         *
         * A use case for providing an own implementation of `::keynav-failed`
         * (either by connecting to it or by overriding it) would be a row of
         * {@link Gtk.Entry} widgets where the user should be able to navigate
         * the entire row with the cursor keys, as e.g. known from user
         * interfaces that require entering license keys.
         * @param direction direction of focus movement
         * @returns true if stopping keyboard navigation is fine, false   if the emitting widget should try to handle the keyboard   navigation attempt in its parent widget
         */
        keynav_failed(direction: Gtk.DirectionType | null): boolean;
        /**
         * Returns the widgets for which this widget is the target of a
         * mnemonic.
         *
         * Typically, these widgets will be labels. See, for example,
         * {@link Gtk.Label.set_mnemonic_widget}.
         *
         * The widgets in the list are not individually referenced.
         * If you want to iterate through the list and perform actions
         * involving callbacks that might destroy the widgets, you
         * must call `g_list_foreach (result, (GFunc)g_object_ref, NULL)`
         * first, and then unref all the widgets afterwards.
         * @returns the list   of mnemonic labels
         */
        list_mnemonic_labels(): Gtk.Widget[];
        /**
         * Causes a widget to be mapped if it isn’t already.
         *
         * This function is only for use in widget implementations.
         */
        map(): void;
        /**
         * Measures `widget` in the orientation `orientation` and for the given `for_size`.
         *
         * As an example, if `orientation` is {@link Gtk.Orientation.HORIZONTAL} and `for_size`
         * is 300, this functions will compute the minimum and natural width of `widget`
         * if it is allocated at a height of 300 pixels.
         *
         * See [GtkWidget’s geometry management section](class.Widget.html#height-for-width-geometry-management) for
         * a more details on implementing {@link Gtk.Widget.measure}.
         * @param orientation the orientation to measure
         * @param for_size Size for the opposite of `orientation`, i.e.   if `orientation` is {@link Gtk.Orientation.HORIZONTAL}, this is   the height the widget should be measured with. The {@link Gtk.Orientation.VERTICAL}   case is analogous. This way, both height-for-width and width-for-height   requests can be implemented. If no size is known, -1 can be passed.
         */
        measure(orientation: Gtk.Orientation | null, for_size: number): [number, number, number, number];
        /**
         * Emits the `Gtk.Widget::mnemonic-activate` signal.
         * @param group_cycling true if there are other widgets with the same mnemonic
         * @returns true if the signal has been handled
         */
        mnemonic_activate(group_cycling: boolean): boolean;
        /**
         * Returns a list model to track the children of the widget.
         *
         * Calling this function will enable extra internal bookkeeping
         * to track children and emit signals on the returned listmodel.
         * It may slow down operations a lot.
         *
         * Applications should try hard to avoid calling this function
         * because of the slowdowns.
         * @returns a list model tracking `widget`'s children
         */
        observe_children(): Gio.ListModel;
        /**
         * Returns a list model to track the event controllers of the widget.
         *
         * Calling this function will enable extra internal bookkeeping
         * to track controllers and emit signals on the returned listmodel.
         * It may slow down operations a lot.
         *
         * Applications should try hard to avoid calling this function
         * because of the slowdowns.
         * @returns a list model tracking `widget`'s controllers
         */
        observe_controllers(): Gio.ListModel;
        /**
         * Finds the descendant of the widget closest to a point.
         *
         * The point (x, y) must be given in widget coordinates, so (0, 0)
         * is assumed to be the top left of `widget`'s content area.
         *
         * Usually widgets will return `NULL` if the given coordinate is not
         * contained in `widget` checked via {@link Gtk.Widget.contains}.
         * Otherwise they will recursively try to find a child that does
         * not return `NULL`. Widgets are however free to customize their
         * picking algorithm.
         *
         * This function is used on the toplevel to determine the widget
         * below the mouse cursor for purposes of hover highlighting and
         * delivering events.
         * @param x x coordinate to test, relative to `widget`'s origin
         * @param y y coordinate to test, relative to `widget`'s origin
         * @param flags flags to influence what is picked
         * @returns the widget's descendant at (x, y)
         */
        pick(x: number, y: number, flags: Gtk.PickFlags | null): Gtk.Widget | null;
        /**
         * Flags the widget for a rerun of the {@link Gtk.Widget.size_allocate}
         * function.
         *
         * Use this function instead of {@link Gtk.Widget.queue_resize}
         * when the `widget`'s size request didn't change but it wants to
         * reposition its contents.
         *
         * An example user of this function is {@link Gtk.Widget.set_halign}.
         *
         * This function is only for use in widget implementations.
         */
        queue_allocate(): void;
        /**
         * Schedules this widget to be redrawn.
         *
         * The redraw will happen in the paint phase
         * of the current or the next frame.
         *
         * This means `widget`'s {@link Gtk.Widget.snapshot}
         * implementation will be called.
         */
        queue_draw(): void;
        /**
         * Flags a widget to have its size renegotiated.
         *
         * This should be called when a widget for some reason has a new
         * size request. For example, when you change the text in a
         * {@link Gtk.Label}, the label queues a resize to ensure there’s
         * enough space for the new text.
         *
         * Note that you cannot call `gtk_widget_queue_resize()` on a widget
         * from inside its implementation of the {@link Gtk.Widget.size_allocate}
         * virtual method. Calls to `gtk_widget_queue_resize()` from inside
         * {@link Gtk.Widget.size_allocate} will be silently ignored.
         *
         * This function is only for use in widget implementations.
         */
        queue_resize(): void;
        /**
         * Creates the GDK resources associated with a widget.
         *
         * Normally realization happens implicitly; if you show a widget
         * and all its parent containers, then the widget will be realized
         * and mapped automatically.
         *
         * Realizing a widget requires all the widget’s parent widgets to be
         * realized; calling this function realizes the widget’s parents
         * in addition to `widget` itself. If a widget is not yet inside a
         * toplevel window when you realize it, bad things will happen.
         *
         * This function is primarily used in widget implementations, and
         * isn’t very useful otherwise. Many times when you think you might
         * need it, a better approach is to connect to a signal that will be
         * called after the widget is realized automatically, such as
         * `Gtk.Widget::realize`.
         */
        realize(): void;
        /**
         * Removes an event controller from the widget.
         *
         * The removed event controller will not receive any more events,
         * and should not be used again.
         *
         * Widgets will remove all event controllers automatically when they
         * are destroyed, there is normally no need to call this function.
         * @param controller an event controller
         */
        remove_controller(controller: Gtk.EventController): void;
        /**
         * Removes a style from the widget.
         *
         * After this, the style of `widget` will stop matching for `css_class`.
         * @param css_class style class to remove from `widget`, without the leading period
         */
        remove_css_class(css_class: string): void;
        /**
         * Removes a widget from the list of mnemonic labels for this widget.
         *
         * See {@link Gtk.Widget.list_mnemonic_labels}.
         *
         * The widget must have previously been added to the list with
         * {@link Gtk.Widget.add_mnemonic_label}.
         * @param label a widget that is a mnemonic label for `widget`
         */
        remove_mnemonic_label(label: Gtk.Widget): void;
        /**
         * Removes a tick callback previously registered with
         * {@link Gtk.Widget.add_tick_callback}.
         * @param id an ID returned by {@link Gtk.Widget.add_tick_callback}
         */
        remove_tick_callback(id: number): void;
        /**
         * Sets whether the input focus can enter the widget or
         * any of its children.
         *
         * Applications should set `can_focus` to false to mark a
         * widget as for pointer/touch use only.
         *
         * Note that having `can_focus` be true is only one of the
         * necessary conditions for being focusable. A widget must
         * also be sensitive and focusable and not have an ancestor
         * that is marked as not can-focus in order to receive input
         * focus.
         *
         * See {@link Gtk.Widget.grab_focus} for actually setting
         * the input focus on a widget.
         * @param can_focus whether the input focus can enter   the widget or any of its children
         */
        set_can_focus(can_focus: boolean): void;
        /**
         * Sets whether the widget can be the target of pointer events.
         * @param can_target whether this widget should be able to   receive pointer events
         */
        set_can_target(can_target: boolean): void;
        /**
         * Sets whether the widget should be mapped along with its parent.
         *
         * The child visibility can be set for widget before it is added
         * to a container with {@link Gtk.Widget.set_parent}, to avoid
         * mapping children unnecessary before immediately unmapping them.
         * However it will be reset to its default state of true when the
         * widget is removed from a container.
         *
         * Note that changing the child visibility of a widget does not
         * queue a resize on the widget. Most of the time, the size of
         * a widget is computed from all visible children, whether or
         * not they are mapped. If this is not the case, the container
         * can queue a resize itself.
         *
         * This function is only useful for widget implementations
         * and should never be called by an application.
         * @param child_visible whether `widget` should be mapped along   with its parent
         */
        set_child_visible(child_visible: boolean): void;
        /**
         * Replaces the current style classes of the widget with `classes`.
         * @param classes `NULL`-terminated list of style classes
         */
        set_css_classes(classes: string[]): void;
        /**
         * Sets the cursor to be shown when the pointer hovers over
         * the widget.
         *
         * If the `cursor` is `NULL`, `widget` will use the cursor
         * inherited from its parent.
         * @param cursor the new cursor
         */
        set_cursor(cursor?: Gdk.Cursor | null): void;
        /**
         * Sets the cursor to be shown when the pointer hovers over
         * the widget.
         *
         * This is a utility function that creates a cursor via
         * {@link Gdk.Cursor.new_from_name} and then sets it on `widget`
         * with {@link Gtk.Widget.set_cursor}. See those functions for
         * details.
         *
         * On top of that, this function allows `name` to be `NULL`, which
         * will do the same as calling {@link Gtk.Widget.set_cursor}
         * with a `NULL` cursor.
         * @param name the name of the cursor
         */
        set_cursor_from_name(name?: string | null): void;
        /**
         * Sets the reading direction on the widget.
         *
         * This direction controls the primary direction for widgets
         * containing text, and also the direction in which the children
         * of a container are packed. The ability to set the direction is
         * present in order so that correct localization into languages with
         * right-to-left reading directions can be done.
         *
         * Generally, applications will let the default reading direction
         * prevail, except for widgets where the children are arranged in
         * an order that is explicitly visual rather than logical (such as
         * buttons for text justification).
         *
         * If the direction is set to {@link Gtk.TextDirection.NONE}, then
         * the value set by {@link Gtk.Widget.set_default_direction} will be used.
         * @param dir the new direction
         */
        set_direction(dir: Gtk.TextDirection | null): void;
        /**
         * Set the focus child of the widget.
         *
         * This function is only suitable for widget implementations.
         * If you want a certain widget to get the input focus, call
         * {@link Gtk.Widget.grab_focus} on it.
         * @param child a direct child widget of `widget`   or `NULL` to unset the focus child
         */
        set_focus_child(child?: Gtk.Widget | null): void;
        /**
         * Sets whether the widget should grab focus when it is clicked
         * with the mouse.
         *
         * Making mouse clicks not grab focus is useful in places like
         * toolbars where you don’t want the keyboard focus removed from
         * the main area of the application.
         * @param focus_on_click whether the widget should grab focus when clicked   with the mouse
         */
        set_focus_on_click(focus_on_click: boolean): void;
        /**
         * Sets whether the widget can own the input focus.
         *
         * Widget implementations should set `focusable` to true in
         * their `init()` function if they want to receive keyboard input.
         *
         * Note that having `focusable` be true is only one of the
         * necessary conditions for being focusable. A widget must
         * also be sensitive and can-focus and not have an ancestor
         * that is marked as not can-focus in order to receive input
         * focus.
         *
         * See {@link Gtk.Widget.grab_focus} for actually setting
         * the input focus on a widget.
         * @param focusable whether or not `widget` can own the input focus
         */
        set_focusable(focusable: boolean): void;
        /**
         * Sets the font map to use for text rendering in the widget.
         *
         * The font map is the object that is used to look up fonts.
         * Setting a custom font map can be useful in special situations,
         * e.g. when you need to add application-specific fonts to the set
         * of available fonts.
         *
         * When not set, the widget will inherit the font map from its parent.
         * @param font_map a {@link Pango.FontMap}
         */
        set_font_map(font_map?: Pango.FontMap | null): void;
        /**
         * Sets the `cairo_font_options_t` used for text rendering
         * in the widget.
         *
         * When not set, the default font options for the {@link Gdk.Display}
         * will be used.
         * @param options a `cairo_font_options_t` struct   to unset any previously set default font options
         */
        set_font_options(options?: cairo.FontOptions | null): void;
        /**
         * Sets the horizontal alignment of the widget.
         * @param align the horizontal alignment
         */
        set_halign(align: Gtk.Align | null): void;
        /**
         * Sets the `has-tooltip` property on the widget.
         * @param has_tooltip whether or not `widget` has a tooltip
         */
        set_has_tooltip(has_tooltip: boolean): void;
        /**
         * Sets whether the widget would like any available extra horizontal
         * space.
         *
         * When a user resizes a window, widgets with expand set to true generally
         * receive the extra space. For example, a list or scrollable area
         * or document in your window would often be set to expand.
         *
         * Call this function to set the expand flag if you would like your
         * widget to become larger horizontally when the window has extra
         * room.
         *
         * By default, widgets automatically expand if any of their children
         * want to expand. (To see if a widget will automatically expand given
         * its current children and state, call {@link Gtk.Widget.compute_expand}.
         * A widget can decide how the expandability of children affects its
         * own expansion by overriding the `compute_expand` virtual method on
         * {@link Gtk.Widget}.).
         *
         * Setting hexpand explicitly with this function will override the
         * automatic expand behavior.
         *
         * This function forces the widget to expand or not to expand,
         * regardless of children. The override occurs because
         * {@link Gtk.Widget.set_hexpand} sets the hexpand-set property (see
         * {@link Gtk.Widget.set_hexpand_set}) which causes the widget’s hexpand
         * value to be used, rather than looking at children and widget state.
         * @param expand whether to expand
         */
        set_hexpand(expand: boolean): void;
        /**
         * Sets whether the hexpand flag will be used.
         *
         * The {@link Gtk.Widget.hexpand_set} property will be set
         * automatically when you call {@link Gtk.Widget.set_hexpand}
         * to set hexpand, so the most likely reason to use this function
         * would be to unset an explicit expand flag.
         *
         * If hexpand is set, then it overrides any computed
         * expand value based on child widgets. If hexpand is not
         * set, then the expand value depends on whether any
         * children of the widget would like to expand.
         *
         * There are few reasons to use this function, but it’s here
         * for completeness and consistency.
         * @param set value for hexpand-set property
         */
        set_hexpand_set(set: boolean): void;
        /**
         * Sets the layout manager to use for measuring and allocating children
         * of the widget.
         * @param layout_manager a layout manager
         */
        set_layout_manager(layout_manager?: Gtk.LayoutManager | null): void;
        /**
         * Sets whether the widget acts like a modal dialog,
         * with respect to event delivery.
         * @param limit_events whether to limit events
         */
        set_limit_events(limit_events: boolean): void;
        /**
         * Sets the bottom margin of the widget.
         * @param margin the bottom margin
         */
        set_margin_bottom(margin: number): void;
        /**
         * Sets the end margin of the widget.
         * @param margin the end margin
         */
        set_margin_end(margin: number): void;
        /**
         * Sets the start margin of the widget.
         * @param margin the start margin
         */
        set_margin_start(margin: number): void;
        /**
         * Sets the top margin of the widget.
         * @param margin the top margin
         */
        set_margin_top(margin: number): void;
        /**
         * Sets a widgets name.
         *
         * Setting a name allows you to refer to the widget from a
         * CSS file. You can apply a style to widgets with a particular name
         * in the CSS file. See the documentation for the CSS syntax (on the
         * same page as the docs for {@link Gtk.StyleContext}.
         *
         * Note that the CSS syntax has certain special characters to delimit
         * and represent elements in a selector (period, #, >, *...), so using
         * these will make your widget impossible to match by name. Any combination
         * of alphanumeric symbols, dashes and underscores will suffice.
         * @param name name for the widget
         */
        set_name(name: string): void;
        /**
         * Requests the widget to be rendered partially transparent.
         *
         * An opacity of 0 is fully transparent and an opacity of 1
         * is fully opaque.
         *
         * Opacity works on both toplevel widgets and child widgets, although
         * there are some limitations: For toplevel widgets, applying opacity
         * depends on the capabilities of the windowing system. On X11, this
         * has any effect only on X displays with a compositing manager, see
         * {@link Gdk.Display.is_composited}. On Windows and Wayland it will
         * always work, although setting a window’s opacity after the window
         * has been shown may cause some flicker.
         *
         * Note that the opacity is inherited through inclusion — if you set
         * a toplevel to be partially translucent, all of its content will
         * appear translucent, since it is ultimatively rendered on that
         * toplevel. The opacity value itself is not inherited by child
         * widgets (since that would make widgets deeper in the hierarchy
         * progressively more translucent). As a consequence, {@link Gtk.Popover}
         * instances and other {@link Gtk.Native} widgets with their own surface
         * will use their own opacity value, and thus by default appear
         * non-translucent, even if they are attached to a toplevel that
         * is translucent.
         * @param opacity desired opacity, between 0 and 1
         */
        set_opacity(opacity: number): void;
        /**
         * Sets how the widget treats content that is drawn outside the
         * it's content area.
         *
         * See the definition of {@link Gtk.Overflow} for details.
         *
         * This setting is provided for widget implementations and
         * should not be used by application code.
         *
         * The default value is {@link Gtk.Overflow.VISIBLE}.
         * @param overflow desired overflow value
         */
        set_overflow(overflow: Gtk.Overflow | null): void;
        /**
         * Sets the parent widget of the widget.
         *
         * This takes care of details such as updating the state and style
         * of the child to reflect its new location and resizing the parent.
         * The opposite function is {@link Gtk.Widget.unparent}.
         *
         * This function is useful only when implementing subclasses of
         * {@link Gtk.Widget}.
         * @param parent parent widget
         */
        set_parent(parent: Gtk.Widget): void;
        /**
         * Sets whether the widget will be treated as the default
         * widget within its toplevel when it has the focus, even if
         * another widget is the default.
         * @param receives_default whether or not `widget` can be a default widget
         */
        set_receives_default(receives_default: boolean): void;
        /**
         * Sets the sensitivity of the widget.
         *
         * A widget is sensitive if the user can interact with it.
         * Insensitive widgets are “grayed out” and the user can’t
         * interact with them. Insensitive widgets are known as
         * “inactive”, “disabled”, or “ghosted” in some other toolkits.
         * @param sensitive true to make the widget sensitive
         */
        set_sensitive(sensitive: boolean): void;
        /**
         * Sets the minimum size of the widget.
         *
         * That is, the widget’s size request will be at least `width`
         * by `height`. You can use this function to force a widget to
         * be larger than it normally would be.
         *
         * In most cases, {@link Gtk.Window.set_default_size} is a better
         * choice for toplevel windows than this function; setting the default
         * size will still allow users to shrink the window. Setting the size
         * request will force them to leave the window at least as large as
         * the size request.
         *
         * Note the inherent danger of setting any fixed size - themes,
         * translations into other languages, different fonts, and user action
         * can all change the appropriate size for a given widget. So, it is
         * basically impossible to hardcode a size that will always work.
         *
         * The size request of a widget is the smallest size a widget can
         * accept while still functioning well and drawing itself correctly.
         * However in some strange cases a widget may be allocated less than
         * its requested size, and in many cases a widget may be allocated more
         * space than it requested.
         *
         * If the size request in a given direction is -1 (unset), then
         * the “natural” size request of the widget will be used instead.
         *
         * The size request set here does not include any margin from the
         * properties
         * {@link Gtk.Widget.margin_start},
         * {@link Gtk.Widget.margin_end},
         * {@link Gtk.Widget.margin_top}, and
         * {@link Gtk.Widget.margin_bottom}, but it does include pretty
         * much all other padding or border properties set by any subclass
         * of {@link Gtk.Widget}.
         * @param width width `widget` should request, or -1 to unset
         * @param height height `widget` should request, or -1 to unset
         */
        set_size_request(width: number, height: number): void;
        /**
         * Turns on flag values in the current widget state.
         *
         * Typical widget states are insensitive, prelighted, etc.
         *
         * This function accepts the values {@link Gtk.StateFlags.DIR-LTR} and
         * {@link Gtk.StateFlags.DIR-RTL} but ignores them. If you want to set
         * the widget's direction, use {@link Gtk.Widget.set_direction}.
         *
         * This function is for use in widget implementations.
         * @param flags state flags to turn on
         * @param clear whether to clear state before turning on `flags`
         */
        set_state_flags(flags: Gtk.StateFlags | null, clear: boolean): void;
        /**
         * Sets the contents of the tooltip for widget.
         *
         * `markup` must contain Pango markup.
         *
         * This function will take care of setting the
         * {@link Gtk.Widget.has_tooltip} as a side effect, and of the
         * default handler for the `Gtk.Widget::query-tooltip` signal.
         *
         * See also {@link Gtk.Tooltip.set_markup}.
         * @param markup the contents of the tooltip for `widget`
         */
        set_tooltip_markup(markup?: string | null): void;
        /**
         * Sets the contents of the tooltip for the widget.
         *
         * If `text` contains any markup, it will be escaped.
         *
         * This function will take care of setting
         * {@link Gtk.Widget.has_tooltip} as a side effect,
         * and of the default handler for the
         * `Gtk.Widget::query-tooltip` signal.
         *
         * See also {@link Gtk.Tooltip.set_text}.
         * @param text the contents of the tooltip for `widget`
         */
        set_tooltip_text(text?: string | null): void;
        /**
         * Sets the vertical alignment of the widget.
         * @param align the vertical alignment
         */
        set_valign(align: Gtk.Align | null): void;
        /**
         * Sets whether the widget would like any available extra vertical
         * space.
         *
         * See {@link Gtk.Widget.set_hexpand} for more detail.
         * @param expand whether to expand
         */
        set_vexpand(expand: boolean): void;
        /**
         * Sets whether the vexpand flag will be used.
         *
         * See {@link Gtk.Widget.set_hexpand_set} for more detail.
         * @param set value for vexpand-set property
         */
        set_vexpand_set(set: boolean): void;
        /**
         * Sets the visibility state of `widget`.
         *
         * Note that setting this to true doesn’t mean the widget is
         * actually viewable, see {@link Gtk.Widget.get_visible}.
         * @param visible whether the widget should be shown or not
         */
        set_visible(visible: boolean): void;
        /**
         * Returns whether the widget should contribute to
         * the measuring and allocation of its parent.
         *
         * This is false for invisible children, but also
         * for children that have their own surface, such
         * as {@link Gtk.Popover} instances.
         * @returns true if child should be included in   measuring and allocating
         */
        should_layout(): boolean;
        /**
         * Flags a widget to be displayed.
         *
         * Any widget that isn’t shown will not appear on the screen.
         *
         * Remember that you have to show the containers containing a widget,
         * in addition to the widget itself, before it will appear onscreen.
         *
         * When a toplevel widget is shown, it is immediately realized and
         * mapped; other shown widgets are realized and mapped when their
         * toplevel widget is realized and mapped.
         */
        show(): void;
        /**
         * Allocates widget with a transformation that translates
         * the origin to the position in `allocation`.
         *
         * This is a simple form of {@link Gtk.Widget.allocate}.
         * @param allocation position and size to be allocated to `widget`
         * @param baseline the baseline of the child, or -1
         */
        size_allocate(allocation: Gtk.Allocation, baseline: number): void;
        /**
         * Snapshots a child of the widget.
         *
         * When a widget receives a call to the snapshot function,
         * it must send synthetic {@link Gtk.Widget.snapshot} calls
         * to all children. This function provides a convenient way
         * of doing this. A widget, when it receives a call to its
         * {@link Gtk.Widget.snapshot} function, calls
         * `gtk_widget_snapshot_child()` once for each child, passing in
         * the `snapshot` the widget received.
         *
         * This function takes care of translating the origin of `snapshot`,
         * and deciding whether the child needs to be snapshot.
         *
         * It does nothing for children that implement {@link Gtk.Native}.
         * @param child a child of `widget`
         * @param snapshot snapshot as passed to the widget. In particular, no   calls to {@link Gtk.Snapshot.translate} or other transform calls   should have been made
         */
        snapshot_child(child: Gtk.Widget, snapshot: Gtk.Snapshot): void;
        /**
         * Translates coordinates relative to `src_widget`’s allocation
         * to coordinates relative to `dest_widget`’s allocations.
         *
         * In order to perform this operation, both widget must share
         * a common ancestor. If that is not the case, `dest_x` and `dest_y`
         * are set to 0 and false is returned.
         * @param dest_widget another widget
         * @param src_x X position in widget coordinates of `src_widget`
         * @param src_y Y position in widget coordinates of `src_widget`
         * @returns true if `src_widget` and `dest_widget` have a common   ancestor, false otherwise
         */
        translate_coordinates(dest_widget: Gtk.Widget, src_x: number, src_y: number): [boolean, number, number];
        /**
         * Triggers a tooltip query on the display of the widget.
         */
        trigger_tooltip_query(): void;
        /**
         * Causes a widget to be unmapped if it’s currently mapped.
         *
         * This function is only for use in widget implementations.
         */
        unmap(): void;
        /**
         * Removes `widget` from its parent.
         *
         * This function is only for use in widget implementations,
         * typically in dispose.
         */
        unparent(): void;
        /**
         * Causes a widget to be unrealized.
         *
         * This frees all GDK resources associated with the widget.
         *
         * This function is only useful in widget implementations.
         */
        unrealize(): void;
        /**
         * Turns off flag values for the current widget state.
         *
         * See {@link Gtk.Widget.set_state_flags}.
         *
         * This function is for use in widget implementations.
         * @param flags state flags to turn off
         */
        unset_state_flags(flags: Gtk.StateFlags | null): void;
        /**
         * Computes whether a container should give this
         *   widget extra space when possible.
         * @param hexpand_p
         * @param vexpand_p
         * @virtual
         */
        vfunc_compute_expand(hexpand_p: boolean, vexpand_p: boolean): void;
        /**
         * Tests if a given point is contained in the widget.
         *
         * The coordinates for (x, y) must be in widget coordinates, so
         * (0, 0) is assumed to be the top left of `widget`'s content area.
         * @param x X coordinate to test, relative to `widget`'s origin
         * @param y Y coordinate to test, relative to `widget`'s origin
         * @virtual
         */
        vfunc_contains(x: number, y: number): boolean;
        /**
         * Vfunc called when the CSS used by widget was changed. Widgets
         *   should then discard their caches that depend on CSS and queue resizes or
         *   redraws accordingly. The default implementation will take care of this for
         *   all the default CSS properties, so implementations must chain up.
         * @param change
         * @virtual
         */
        vfunc_css_changed(change: Gtk.CssStyleChange): void;
        /**
         * Signal emitted when the text direction of a
         *   widget changes.
         * @param previous_direction
         * @virtual
         */
        vfunc_direction_changed(previous_direction: Gtk.TextDirection): void;
        /**
         * Vfunc for `gtk_widget_child_focus()`
         * @param direction
         * @virtual
         */
        vfunc_focus(direction: Gtk.DirectionType): boolean;
        /**
         * Gets whether the widget prefers a height-for-width layout
         * or a width-for-height layout.
         *
         * Single-child widgets generally propagate the preference of
         * their child, more complex widgets need to request something
         * either in context of their children or in context of their
         * allocation capabilities.
         * @virtual
         */
        vfunc_get_request_mode(): Gtk.SizeRequestMode;
        /**
         * Causes `widget` to have the keyboard focus for the window
         * that it belongs to.
         *
         * If `widget` is not focusable, or its {@link Gtk.Widget.grab_focus}
         * implementation cannot transfer the focus to a descendant of `widget`
         * that is focusable, it will not take focus and false will be returned.
         *
         * Calling {@link Gtk.Widget.grab_focus} on an already focused widget
         * is allowed, should not have an effect, and return true.
         * @virtual
         */
        vfunc_grab_focus(): boolean;
        /**
         * Reverses the effects of [method.Gtk.Widget.show].
         *
         * This is causing the widget to be hidden (invisible to the user).
         * @virtual
         */
        vfunc_hide(): void;
        /**
         * Emits the `Gtk.Widget::keynav-failed` signal on the widget.
         *
         * This function should be called whenever keyboard navigation
         * within a single widget hits a boundary.
         *
         * The return value of this function should be interpreted
         * in a way similar to the return value of
         * {@link Gtk.Widget.child_focus}. When true is returned,
         * stay in the widget, the failed keyboard navigation is ok
         * and/or there is nowhere we can/should move the focus to.
         * When false is returned, the caller should continue with
         * keyboard navigation outside the widget, e.g. by calling
         * {@link Gtk.Widget.child_focus} on the widget’s toplevel.
         *
         * The default `Gtk.Widget::keynav-failed` handler returns
         * false for {@link Gtk.DirectionType.TAB-FORWARD} and
         * {@link Gtk.DirectionType.TAB-BACKWARD}. For the other values
         * of {@link Gtk.DirectionType} it returns true.
         *
         * Whenever the default handler returns true, it also calls
         * {@link Gtk.Widget.error_bell} to notify the user of the
         * failed keyboard navigation.
         *
         * A use case for providing an own implementation of `::keynav-failed`
         * (either by connecting to it or by overriding it) would be a row of
         * {@link Gtk.Entry} widgets where the user should be able to navigate
         * the entire row with the cursor keys, as e.g. known from user
         * interfaces that require entering license keys.
         * @param direction direction of focus movement
         * @virtual
         */
        vfunc_keynav_failed(direction: Gtk.DirectionType): boolean;
        /**
         * Causes a widget to be mapped if it isn’t already.
         *
         * This function is only for use in widget implementations.
         * @virtual
         */
        vfunc_map(): void;
        /**
         * Measures `widget` in the orientation `orientation` and for the given `for_size`.
         *
         * As an example, if `orientation` is {@link Gtk.Orientation.HORIZONTAL} and `for_size`
         * is 300, this functions will compute the minimum and natural width of `widget`
         * if it is allocated at a height of 300 pixels.
         *
         * See [GtkWidget’s geometry management section](class.Widget.html#height-for-width-geometry-management) for
         * a more details on implementing {@link Gtk.Widget.measure}.
         * @param orientation the orientation to measure
         * @param for_size Size for the opposite of `orientation`, i.e.   if `orientation` is {@link Gtk.Orientation.HORIZONTAL}, this is   the height the widget should be measured with. The {@link Gtk.Orientation.VERTICAL}   case is analogous. This way, both height-for-width and width-for-height   requests can be implemented. If no size is known, -1 can be passed.
         * @virtual
         */
        vfunc_measure(orientation: Gtk.Orientation, for_size: number): [number, number, number, number];
        /**
         * Emits the `Gtk.Widget::mnemonic-activate` signal.
         * @param group_cycling true if there are other widgets with the same mnemonic
         * @virtual
         */
        vfunc_mnemonic_activate(group_cycling: boolean): boolean;
        /**
         * Signal emitted when a change of focus is requested
         * @param direction
         * @virtual
         */
        vfunc_move_focus(direction: Gtk.DirectionType): void;
        /**
         * Signal emitted when “has-tooltip” is `true` and the
         *   hover timeout has expired with the cursor hovering “above”
         *   widget; or emitted when widget got focus in keyboard mode.
         * @param x
         * @param y
         * @param keyboard_tooltip
         * @param tooltip
         * @virtual
         */
        vfunc_query_tooltip(x: number, y: number, keyboard_tooltip: boolean, tooltip: Gtk.Tooltip): boolean;
        /**
         * Creates the GDK resources associated with a widget.
         *
         * Normally realization happens implicitly; if you show a widget
         * and all its parent containers, then the widget will be realized
         * and mapped automatically.
         *
         * Realizing a widget requires all the widget’s parent widgets to be
         * realized; calling this function realizes the widget’s parents
         * in addition to `widget` itself. If a widget is not yet inside a
         * toplevel window when you realize it, bad things will happen.
         *
         * This function is primarily used in widget implementations, and
         * isn’t very useful otherwise. Many times when you think you might
         * need it, a better approach is to connect to a signal that will be
         * called after the widget is realized automatically, such as
         * `Gtk.Widget::realize`.
         * @virtual
         */
        vfunc_realize(): void;
        /**
         * Called when the widget gets added to a {@link Gtk.Root} widget. Must
         *   chain up
         * @virtual
         */
        vfunc_root(): void;
        /**
         * Set the focus child of the widget.
         *
         * This function is only suitable for widget implementations.
         * If you want a certain widget to get the input focus, call
         * {@link Gtk.Widget.grab_focus} on it.
         * @param child a direct child widget of `widget`   or `NULL` to unset the focus child
         * @virtual
         */
        vfunc_set_focus_child(child?: Gtk.Widget | null): void;
        /**
         * Flags a widget to be displayed.
         *
         * Any widget that isn’t shown will not appear on the screen.
         *
         * Remember that you have to show the containers containing a widget,
         * in addition to the widget itself, before it will appear onscreen.
         *
         * When a toplevel widget is shown, it is immediately realized and
         * mapped; other shown widgets are realized and mapped when their
         * toplevel widget is realized and mapped.
         * @virtual
         */
        vfunc_show(): void;
        /**
         * Called to set the allocation, if the widget does
         *   not have a layout manager.
         * @param width
         * @param height
         * @param baseline
         * @virtual
         */
        vfunc_size_allocate(width: number, height: number, baseline: number): void;
        /**
         * Vfunc called when a new snapshot of the widget has to be taken.
         * @param snapshot
         * @virtual
         */
        vfunc_snapshot(snapshot: Gtk.Snapshot): void;
        /**
         * Signal emitted when the widget state changes,
         *   see `gtk_widget_get_state_flags()`.
         * @param previous_state_flags
         * @virtual
         */
        vfunc_state_flags_changed(previous_state_flags: Gtk.StateFlags): void;
        /**
         * Emitted when a system setting was changed. Must chain up.
         * @param settings
         * @virtual
         */
        vfunc_system_setting_changed(settings: Gtk.SystemSetting): void;
        /**
         * Causes a widget to be unmapped if it’s currently mapped.
         *
         * This function is only for use in widget implementations.
         * @virtual
         */
        vfunc_unmap(): void;
        /**
         * Causes a widget to be unrealized.
         *
         * This frees all GDK resources associated with the widget.
         *
         * This function is only useful in widget implementations.
         * @virtual
         */
        vfunc_unrealize(): void;
        /**
         * Called when the widget is about to be removed from its
         *   {@link Gtk.Root} widget. Must chain up
         * @virtual
         */
        vfunc_unroot(): void;
    }

    /**
     * @gir-type Alias
     */
    type ActivatableInterface = typeof Activatable;
    /**
     * @gir-type Struct
     */
    abstract class Animatable {
        static $gtype: GObject.GType<Animatable>;
    }

    /**
     * @gir-type Struct
     */
    abstract class Application {
        static $gtype: GObject.GType<Application>;
    }

    /**
     * @gir-type Alias
     */
    type BinLayoutClass = typeof BinLayout;
    /**
     * @gir-type Alias
     */
    type ClockClass = typeof Clock;
    /**
     * @gir-type Struct
     */
    abstract class DoneButton {
        static $gtype: GObject.GType<DoneButton>;
    }

    /**
     * @gir-type Struct
     */
    abstract class InitialSetupWindow {
        static $gtype: GObject.GType<InitialSetupWindow>;
    }

    /**
     * @gir-type Struct
     */
    abstract class Interval {
        static $gtype: GObject.GType<Interval>;
    }

    /**
     * @gir-type Alias
     */
    type ListModelFilterClass = typeof ListModelFilter;
    /**
     * @gir-type Alias
     */
    type ListStoreClass = typeof ListStore;
    /**
     * @gir-type Struct
     */
    abstract class ListView {
        static $gtype: GObject.GType<ListView>;
    }

    /**
     * @gir-type Alias
     */
    type ManagerClass = typeof Manager;
    /**
     * @gir-type Struct
     */
    abstract class MarkdownRenderer {
        static $gtype: GObject.GType<MarkdownRenderer>;
    }

    /**
     * @gir-type Alias
     */
    type MaxSizeLayoutClass = typeof MaxSizeLayout;
    /**
     * @gir-type Alias
     */
    type MenuButtonClass = typeof MenuButton;
    /**
     * @gir-type Alias
     */
    type NotificationClass = typeof Notification;
    /**
     * @gir-type Alias
     */
    type ObjectClass = typeof Object;
    /**
     * @gir-type Alias
     */
    type OmniAreaAddinInterface = typeof OmniAreaAddin;
    /**
     * @gir-type Alias
     */
    type OmniAreaClass = typeof OmniArea;
    /**
     * @gir-type Alias
     */
    type PanelInterface = typeof Panel;
    /**
     * @gir-type Struct
     */
    abstract class PluginManager {
        static $gtype: GObject.GType<PluginManager>;
    }

    /**
     * @gir-type Alias
     */
    type ProviderInterface = typeof Provider;
    /**
     * @gir-type Alias
     */
    type ProviderPopoverClass = typeof ProviderPopover;
    /**
     * @gir-type Alias
     */
    type StarWidgetClass = typeof StarWidget;
    /**
     * @gir-type Struct
     */
    abstract class Storage {
        static $gtype: GObject.GType<Storage>;
    }

    /**
     * @gir-type Struct
     */
    abstract class StoragePopover {
        static $gtype: GObject.GType<StoragePopover>;
    }

    /**
     * @gir-type Struct
     */
    abstract class StorageRow {
        static $gtype: GObject.GType<StorageRow>;
    }

    /**
     * @gir-type Struct
     */
    abstract class StorageSelector {
        static $gtype: GObject.GType<StorageSelector>;
    }

    /**
     * @gir-type Alias
     */
    type TaskClass = typeof Task;
    /**
     * @gir-type Alias
     */
    type TaskListClass = typeof TaskList;
    /**
     * @gir-type Struct
     */
    abstract class TaskListItem {
        static $gtype: GObject.GType<TaskListItem>;
    }

    /**
     * @gir-type Alias
     */
    type TaskListViewClass = typeof TaskListView;
    /**
     * @gir-type Struct
     */
    abstract class TaskRow {
        static $gtype: GObject.GType<TaskRow>;
    }

    /**
     * @gir-type Struct
     */
    abstract class Transition {
        static $gtype: GObject.GType<Transition>;
    }

    /**
     * @gir-type Alias
     */
    type WidgetClass = typeof Widget;
    /**
     * @gir-type Alias
     */
    type WindowClass = typeof Window;
    /**
     * @gir-type Alias
     */
    type WorkspaceInterface = typeof Workspace;
    namespace Activatable {
        /**
         * Interface for implementing Activatable.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface {
            // Virtual methods

            /**
             * Activates the extension. This is the starting point where
             * the implementation does everything it needs to do. Avoid
             * doing it earlier than this call.
             *
             * This function is called after the extension is loaded and
             * the signals are connected. If you want to do anything before
             * that, the _init function should be used instead.
             * @virtual
             */
            vfunc_activate(): void;
            /**
             * Deactivates the extension. Here, the extension should remove
             * all providers and panels it set.
             *
             * This function is called before the extension is removed. At
             * this point, the plugin manager already removed all providers
             * and widgets this extension exported. If you want to do anything
             * after the extension is removed, use GObject::finalize instead.
             * @virtual
             */
            vfunc_deactivate(): void;
            /**
             * Retrieve the preferences panel of `activatable` if any.
             * @virtual
             */
            vfunc_get_preferences_panel(): Gtk.Widget | null;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            preferences_panel: Gtk.Widget;
            preferencesPanel: Gtk.Widget;
        }
    }

    export interface ActivatableNamespace {
        $gtype: GObject.GType<Activatable>;
        prototype: Activatable;
    }
    /**
     * @gir-type Interface
     */
    interface Activatable extends GObject.Object, Activatable.Interface {
        // Properties

        get preferences_panel(): Gtk.Widget;
        get preferencesPanel(): Gtk.Widget;

        // Methods

        /**
         * Activates the extension. This is the starting point where
         * the implementation does everything it needs to do. Avoid
         * doing it earlier than this call.
         *
         * This function is called after the extension is loaded and
         * the signals are connected. If you want to do anything before
         * that, the _init function should be used instead.
         */
        activate(): void;
        /**
         * Deactivates the extension. Here, the extension should remove
         * all providers and panels it set.
         *
         * This function is called before the extension is removed. At
         * this point, the plugin manager already removed all providers
         * and widgets this extension exported. If you want to do anything
         * after the extension is removed, use GObject::finalize instead.
         */
        deactivate(): void;
        /**
         * Retrieve the preferences panel of `activatable` if any.
         * @returns a {@link Gtk.Widget}, or `null`
         */
        get_preferences_panel(): Gtk.Widget | null;
    }

    export const Activatable: ActivatableNamespace & {
        new (): Activatable; // This allows `obj instanceof Activatable`
    };

    namespace OmniAreaAddin {
        /**
         * Interface for implementing OmniAreaAddin.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface {
            // Virtual methods

            /**
             * Requests that the {@link Gtd.OmniAreaAddin} initialize, possibly modifying
             * `omni_bar` as necessary.
             * @param omni_bar an {@link Gtd.OmniArea}
             * @virtual
             */
            vfunc_load(omni_bar: OmniArea): void;
            /**
             * Requests that the {@link Gtd.OmniAreaAddin} shutdown, possibly modifying
             * `omni_bar` as necessary to return it to the original state before
             * the addin was loaded.
             * @param omni_bar an {@link Gtd.OmniArea}
             * @virtual
             */
            vfunc_unload(omni_bar: OmniArea): void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    export interface OmniAreaAddinNamespace {
        $gtype: GObject.GType<OmniAreaAddin>;
        prototype: OmniAreaAddin;
    }
    /**
     * @gir-type Interface
     */
    interface OmniAreaAddin extends GObject.Object, OmniAreaAddin.Interface {
        // Methods

        /**
         * Requests that the {@link Gtd.OmniAreaAddin} initialize, possibly modifying
         * `omni_bar` as necessary.
         * @param omni_bar an {@link Gtd.OmniArea}
         */
        load(omni_bar: OmniArea): void;
        /**
         * Requests that the {@link Gtd.OmniAreaAddin} shutdown, possibly modifying
         * `omni_bar` as necessary to return it to the original state before
         * the addin was loaded.
         * @param omni_bar an {@link Gtd.OmniArea}
         */
        unload(omni_bar: OmniArea): void;
    }

    export const OmniAreaAddin: OmniAreaAddinNamespace & {
        new (): OmniAreaAddin; // This allows `obj instanceof OmniAreaAddin`
    };

    namespace Panel {
        /**
         * Interface for implementing Panel.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface {
            // Virtual methods

            /**
             * Activates the panel with `parameters`. The passed parameters
             * are in free form, to allow panels have any input they want.
             *
             * This is an optional vfunc.
             * @param parameters parameters of the panel
             * @virtual
             */
            vfunc_activate(parameters?: GLib.Variant | null): void;
            /**
             * Retrieves the list of widgets to be placed at headerbar. The
             * position of the widget is determined by the {@link Gtk.Widget.SignalSignatures.halign | Gtk.Widget::halign}
             * property.
             *
             * Widgets with `GTK_ALIGN_START` halign will be packed into the
             * start of the headerbar, and `GTK_ALIGN_END` at the end. Other
             * values are silently ignored.
             * @virtual
             */
            vfunc_get_header_widgets(): Gtk.Widget[];
            /**
             * Retrieves the icon of `self`.
             * @virtual
             */
            vfunc_get_icon(): Gio.Icon | null;
            /**
             * Retrieves the gear menu of `panel`.
             * @virtual
             */
            vfunc_get_menu(): Gio.Menu;
            /**
             * Retrieves the name of `panel`
             * @virtual
             */
            vfunc_get_panel_name(): string;
            /**
             * Retrieves the title of `panel`
             * @virtual
             */
            vfunc_get_panel_title(): string;
            /**
             * Retrieves the popover of `self`. It is used as the
             * window menu when available.
             * @virtual
             */
            vfunc_get_popover(): Gtk.Popover | null;
            /**
             * Retrieves the priority of `self`. This value is used to
             * determine the position of the panel in the sidebar.
             * @virtual
             */
            vfunc_get_priority(): number;
            /**
             * Retrieves the subtitle of `panel`
             * @virtual
             */
            vfunc_get_subtitle(): string;
        }

        // Constructor properties interface

        interface ConstructorProps extends Gtk.Widget.ConstructorProps {
            icon: Gio.Icon;
            menu: Gio.Menu;
            name: string;
            priority: number;
            subtitle: string;
            title: string;
        }
    }

    export interface PanelNamespace {
        $gtype: GObject.GType<Panel>;
        prototype: Panel;
    }
    /**
     * @gir-type Interface
     */
    interface Panel extends Gtk.Widget, Panel.Interface {
        // Properties

        get icon(): Gio.Icon;
        get menu(): Gio.Menu;
        get name(): string;
        get priority(): number;
        get subtitle(): string;
        get title(): string;

        // Methods

        /**
         * Activates the panel with `parameters`. The passed parameters
         * are in free form, to allow panels have any input they want.
         *
         * This is an optional vfunc.
         * @param parameters parameters of the panel
         */
        activate(parameters?: GLib.Variant | null): void;
        /**
         * @param args
         */
        // Conflicted with Gtk.Widget.activate
        activate(...args: never[]): any;
        /**
         * Retrieves the list of widgets to be placed at headerbar. The
         * position of the widget is determined by the {@link Gtk.Widget.SignalSignatures.halign | Gtk.Widget::halign}
         * property.
         *
         * Widgets with `GTK_ALIGN_START` halign will be packed into the
         * start of the headerbar, and `GTK_ALIGN_END` at the end. Other
         * values are silently ignored.
         * @returns the list of {@link Gtk.Widget}
         */
        get_header_widgets(): Gtk.Widget[];
        /**
         * Retrieves the icon of `self`.
         * @returns a {@link Gio.Icon}
         */
        get_icon(): Gio.Icon | null;
        /**
         * Retrieves the gear menu of `panel`.
         * @returns a {@link Gio.Menu}
         */
        get_menu(): Gio.Menu;
        /**
         * Retrieves the name of `panel`
         * @returns the name of `panel`
         */
        get_panel_name(): string;
        /**
         * Retrieves the title of `panel`
         * @returns the title of `panel`
         */
        get_panel_title(): string;
        /**
         * Retrieves the popover of `self`. It is used as the
         * window menu when available.
         * @returns a {@link Gtk.Popover}
         */
        get_popover(): Gtk.Popover | null;
        /**
         * Retrieves the priority of `self`. This value is used to
         * determine the position of the panel in the sidebar.
         * @returns the priority of `self`
         */
        get_priority(): number;
        /**
         * Retrieves the subtitle of `panel`
         * @returns the subtitle of `panel`
         */
        get_subtitle(): string;
    }

    export const Panel: PanelNamespace & {
        new (): Panel; // This allows `obj instanceof Panel`
    };

    namespace Provider {
        /**
         * Interface for implementing Provider.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface {
            // Virtual methods

            /**
             * Creates the given task in `provider`.
             * @param list a `GtdTaskLast`
             * @param title The task title
             * @param due_date a {@link GLib.DateTime}
             * @param cancellable a {@link Gio.Cancellable}
             * @param callback a callback
             * @virtual
             */
            vfunc_create_task(
                list: TaskList,
                title: string,
                due_date?: GLib.DateTime | null,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Finishes creating the task.
             * @param result a {@link Gio.AsyncResult}
             * @virtual
             */
            vfunc_create_task_finish(result: Gio.AsyncResult): Task | null;
            /**
             * Creates the given list in `provider`.
             * @param name the name of the new task list
             * @param cancellable a {@link Gio.Cancellable}
             * @param callback a callback
             * @virtual
             */
            vfunc_create_task_list(
                name?: string | null,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Finishes creating the task list. The provider will emit the
             * GtdProvider:list-added signal after creating the task list.
             * @param result a {@link Gio.AsyncResult}
             * @virtual
             */
            vfunc_create_task_list_finish(result: Gio.AsyncResult): boolean;
            /**
             * Retrieves the description of `provider`.
             * @virtual
             */
            vfunc_get_description(): string;
            /**
             * Retrieves whether `provider` is enabled or not. A disabled
             * provider cannot be selected to be default nor be selected
             * to add tasks to it.
             * @virtual
             */
            vfunc_get_enabled(): boolean;
            /**
             * The icon of `provider`.
             * @virtual
             */
            vfunc_get_icon(): Gio.Icon;
            /**
             * Retrieves the identifier of `provider`.
             * @virtual
             */
            vfunc_get_id(): string;
            /**
             * Retrieves the inbox of `provider`.
             * @virtual
             */
            vfunc_get_inbox(): TaskList | null;
            /**
             * Retrieves the user-visible name of `provider`.
             * @virtual
             */
            vfunc_get_name(): string;
            /**
             * Retrieves the type of the `provider`. This should return the
             * same value, regardless of the account name.
             *
             * For example: "todoist", "todo-txt" or "google"
             * @virtual
             */
            vfunc_get_provider_type(): string;
            /**
             * Retrieves the tasklists that this provider contains.
             * @virtual
             */
            vfunc_get_task_lists(): TaskList[];
            /**
             * Asks the provider to refresh. Online providers may want to
             * synchronize tasks and tasklists, credentials, etc, when this
             * is called.
             *
             * This is an optional feature. Providers that do not implement
             * the "refresh" vfunc will be ignored.
             * @virtual
             */
            vfunc_refresh(): void;
            /**
             * Removes the given task from `provider`.
             * @param task a {@link Gtd.Task}
             * @param cancellable a {@link Gio.Cancellable}
             * @param callback a callback
             * @virtual
             */
            vfunc_remove_task(
                task: Task,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Finishes removing the task.
             * @param result a {@link Gio.AsyncResult}
             * @virtual
             */
            vfunc_remove_task_finish(result: Gio.AsyncResult): boolean;
            /**
             * Removes the given list from `provider`.
             * @param list a {@link Gtd.TaskList}
             * @param cancellable a {@link Gio.Cancellable}
             * @param callback a callback
             * @virtual
             */
            vfunc_remove_task_list(
                list: TaskList,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Finishes removing the task list. The provider will emit the
             * GtdProvider:list-removed signal after removing the task list.
             * @param result a {@link Gio.AsyncResult}
             * @virtual
             */
            vfunc_remove_task_list_finish(result: Gio.AsyncResult): boolean;
            /**
             * Updates the given task in `provider`.
             * @param task a {@link Gtd.Task}
             * @param cancellable a {@link Gio.Cancellable}
             * @param callback a callback
             * @virtual
             */
            vfunc_update_task(
                task: Task,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Finishes updating the task list.
             * @param result a {@link Gio.AsyncResult}
             * @virtual
             */
            vfunc_update_task_finish(result: Gio.AsyncResult): boolean;
            /**
             * Updates the given list in `provider`.
             * @param list a {@link Gtd.TaskList}
             * @param cancellable a {@link Gio.Cancellable}
             * @param callback a callback
             * @virtual
             */
            vfunc_update_task_list(
                list: TaskList,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Finishes updating the task list. The provider will emit the
             * GtdProvider:list-updated signal after updating the task list.
             * @param result a {@link Gio.AsyncResult}
             * @virtual
             */
            vfunc_update_task_list_finish(result: Gio.AsyncResult): boolean;
        }

        // Constructor properties interface

        interface ConstructorProps extends Object.ConstructorProps {
            description: string;
            enabled: boolean;
            icon: Gio.Icon;
            id: string;
            name: string;
            provider_type: string;
            providerType: string;
        }
    }

    export interface ProviderNamespace {
        $gtype: GObject.GType<Provider>;
        prototype: Provider;
    }
    /**
     * @gir-type Interface
     */
    interface Provider extends Object, Provider.Interface {
        // Properties

        get description(): string;
        get enabled(): boolean;
        get icon(): Gio.Icon;
        get id(): string;
        get name(): string;
        get provider_type(): string;
        get providerType(): string;

        // Methods

        /**
         * Compares `a` and `b`. The sorting criteria is internal and
         * may change.
         * @param b a {@link Gtd.Provider}
         * @returns -1 if `a` comes before `b`, 1 for the oposite, and 0 if they're equal
         */
        compare(b: Provider): number;
        /**
         * Creates the given task in `provider`.
         * @param list a `GtdTaskLast`
         * @param title The task title
         * @param due_date a {@link GLib.DateTime}
         * @param cancellable a {@link Gio.Cancellable}
         */
        create_task(
            list: TaskList,
            title: string,
            due_date?: GLib.DateTime | null,
            cancellable?: Gio.Cancellable | null,
        ): globalThis.Promise<Task | null>;
        /**
         * Creates the given task in `provider`.
         * @param list a `GtdTaskLast`
         * @param title The task title
         * @param due_date a {@link GLib.DateTime}
         * @param cancellable a {@link Gio.Cancellable}
         * @param callback a callback
         */
        create_task(
            list: TaskList,
            title: string,
            due_date: GLib.DateTime | null,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Creates the given task in `provider`.
         * @param list a `GtdTaskLast`
         * @param title The task title
         * @param due_date a {@link GLib.DateTime}
         * @param cancellable a {@link Gio.Cancellable}
         * @param callback a callback
         */
        create_task(
            list: TaskList,
            title: string,
            due_date?: GLib.DateTime | null,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<Task | null> | void;
        /**
         * Finishes creating the task.
         * @param result a {@link Gio.AsyncResult}
         * @returns a {@link Gtd.Task}
         */
        create_task_finish(result: Gio.AsyncResult): Task | null;
        /**
         * Creates the given list in `provider`.
         * @param name the name of the new task list
         * @param cancellable a {@link Gio.Cancellable}
         */
        create_task_list(name?: string | null, cancellable?: Gio.Cancellable | null): globalThis.Promise<boolean>;
        /**
         * Creates the given list in `provider`.
         * @param name the name of the new task list
         * @param cancellable a {@link Gio.Cancellable}
         * @param callback a callback
         */
        create_task_list(
            name: string | null,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Creates the given list in `provider`.
         * @param name the name of the new task list
         * @param cancellable a {@link Gio.Cancellable}
         * @param callback a callback
         */
        create_task_list(
            name?: string | null,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<boolean> | void;
        /**
         * Finishes creating the task list. The provider will emit the
         * GtdProvider:list-added signal after creating the task list.
         * @param result a {@link Gio.AsyncResult}
         * @returns `true` if task list was successfully created, `false` otherwise
         */
        create_task_list_finish(result: Gio.AsyncResult): boolean;
        /**
         * Retrieves the description of `provider`.
         * @returns the description of `provider`
         */
        get_description(): string;
        /**
         * Retrieves whether `provider` is enabled or not. A disabled
         * provider cannot be selected to be default nor be selected
         * to add tasks to it.
         * @returns `true` if provider is enabled, `false` otherwise.
         */
        get_enabled(): boolean;
        /**
         * The icon of `provider`.
         * @returns a {@link Gio.Icon}
         */
        get_icon(): Gio.Icon;
        /**
         * Retrieves the identifier of `provider`.
         * @returns the id of `provider`
         */
        get_id(): string;
        /**
         * Retrieves the inbox of `provider`.
         * @returns a {@link Gtd.TaskList}
         */
        get_inbox(): TaskList | null;
        /**
         * Retrieves the user-visible name of `provider`.
         * @returns the name of `provider`
         */
        get_name(): string;
        /**
         * Retrieves the type of the `provider`. This should return the
         * same value, regardless of the account name.
         *
         * For example: "todoist", "todo-txt" or "google"
         * @returns the type of the `provider`
         */
        get_provider_type(): string;
        /**
         * Retrieves the tasklists that this provider contains.
         * @returns the list of tasks, or `null`
         */
        get_task_lists(): TaskList[];
        /**
         * Asks the provider to refresh. Online providers may want to
         * synchronize tasks and tasklists, credentials, etc, when this
         * is called.
         *
         * This is an optional feature. Providers that do not implement
         * the "refresh" vfunc will be ignored.
         */
        refresh(): void;
        /**
         * Removes the given task from `provider`.
         * @param task a {@link Gtd.Task}
         * @param cancellable a {@link Gio.Cancellable}
         */
        remove_task(task: Task, cancellable?: Gio.Cancellable | null): globalThis.Promise<boolean>;
        /**
         * Removes the given task from `provider`.
         * @param task a {@link Gtd.Task}
         * @param cancellable a {@link Gio.Cancellable}
         * @param callback a callback
         */
        remove_task(
            task: Task,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Removes the given task from `provider`.
         * @param task a {@link Gtd.Task}
         * @param cancellable a {@link Gio.Cancellable}
         * @param callback a callback
         */
        remove_task(
            task: Task,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<boolean> | void;
        /**
         * Finishes removing the task.
         * @param result a {@link Gio.AsyncResult}
         * @returns `true` if task was successfully removed, `false` otherwise
         */
        remove_task_finish(result: Gio.AsyncResult): boolean;
        /**
         * Removes the given list from `provider`.
         * @param list a {@link Gtd.TaskList}
         * @param cancellable a {@link Gio.Cancellable}
         */
        remove_task_list(list: TaskList, cancellable?: Gio.Cancellable | null): globalThis.Promise<boolean>;
        /**
         * Removes the given list from `provider`.
         * @param list a {@link Gtd.TaskList}
         * @param cancellable a {@link Gio.Cancellable}
         * @param callback a callback
         */
        remove_task_list(
            list: TaskList,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Removes the given list from `provider`.
         * @param list a {@link Gtd.TaskList}
         * @param cancellable a {@link Gio.Cancellable}
         * @param callback a callback
         */
        remove_task_list(
            list: TaskList,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<boolean> | void;
        /**
         * Finishes removing the task list. The provider will emit the
         * GtdProvider:list-removed signal after removing the task list.
         * @param result a {@link Gio.AsyncResult}
         * @returns `true` if task list was successfully removed, `false` otherwise
         */
        remove_task_list_finish(result: Gio.AsyncResult): boolean;
        /**
         * Updates the given task in `provider`.
         * @param task a {@link Gtd.Task}
         * @param cancellable a {@link Gio.Cancellable}
         */
        update_task(task: Task, cancellable?: Gio.Cancellable | null): globalThis.Promise<boolean>;
        /**
         * Updates the given task in `provider`.
         * @param task a {@link Gtd.Task}
         * @param cancellable a {@link Gio.Cancellable}
         * @param callback a callback
         */
        update_task(
            task: Task,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Updates the given task in `provider`.
         * @param task a {@link Gtd.Task}
         * @param cancellable a {@link Gio.Cancellable}
         * @param callback a callback
         */
        update_task(
            task: Task,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<boolean> | void;
        /**
         * Finishes updating the task list.
         * @param result a {@link Gio.AsyncResult}
         * @returns `true` if task list was successfully updated, `false` otherwise
         */
        update_task_finish(result: Gio.AsyncResult): boolean;
        /**
         * Updates the given list in `provider`.
         * @param list a {@link Gtd.TaskList}
         * @param cancellable a {@link Gio.Cancellable}
         */
        update_task_list(list: TaskList, cancellable?: Gio.Cancellable | null): globalThis.Promise<boolean>;
        /**
         * Updates the given list in `provider`.
         * @param list a {@link Gtd.TaskList}
         * @param cancellable a {@link Gio.Cancellable}
         * @param callback a callback
         */
        update_task_list(
            list: TaskList,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Updates the given list in `provider`.
         * @param list a {@link Gtd.TaskList}
         * @param cancellable a {@link Gio.Cancellable}
         * @param callback a callback
         */
        update_task_list(
            list: TaskList,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<boolean> | void;
        /**
         * Finishes updating the task list. The provider will emit the
         * GtdProvider:list-updated signal after updating the task list.
         * @param result a {@link Gio.AsyncResult}
         * @returns `true` if task list was successfully updated, `false` otherwise
         */
        update_task_list_finish(result: Gio.AsyncResult): boolean;
    }

    export const Provider: ProviderNamespace & {
        new (): Provider; // This allows `obj instanceof Provider`
    };

    namespace Workspace {
        /**
         * Interface for implementing Workspace.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface {
            // Virtual methods

            /**
             * Activates `self`. This happens when the workspace
             * becomes the active workspace in the main window.
             * @param parameters workspace-specific parameters
             * @virtual
             */
            vfunc_activate(parameters?: GLib.Variant | null): void;
            /**
             * Deactivates `self`. This happens when the workspace
             * is switched away in the main window.
             * @virtual
             */
            vfunc_deactivate(): void;
            /**
             * Retrieves the icon of `self`. It is mandatory to implement
             * this.
             * @virtual
             */
            vfunc_get_icon(): Gio.Icon;
            /**
             * Retrieves the id of `self`. It is mandatory to implement
             * this.
             * @virtual
             */
            vfunc_get_id(): string;
            /**
             * Retrieves the priority of `self`. It is mandatory to implement
             * this.
             * @virtual
             */
            vfunc_get_priority(): number;
            /**
             * Retrieves the title of `self`. It is mandatory to implement
             * this.
             * @virtual
             */
            vfunc_get_title(): string;
        }

        // Constructor properties interface

        interface ConstructorProps extends Gtk.Widget.ConstructorProps {
            icon: Gio.Icon;
            title: string;
        }
    }

    export interface WorkspaceNamespace {
        $gtype: GObject.GType<Workspace>;
        prototype: Workspace;
    }
    /**
     * @gir-type Interface
     */
    interface Workspace extends Gtk.Widget, Workspace.Interface {
        // Properties

        get icon(): Gio.Icon;
        get title(): string;

        // Methods

        /**
         * Activates `self`. This happens when the workspace
         * becomes the active workspace in the main window.
         * @param parameters workspace-specific parameters
         */
        activate(parameters?: GLib.Variant | null): void;
        /**
         * @param args
         */
        // Conflicted with Gtk.Widget.activate
        activate(...args: never[]): any;
        /**
         * Deactivates `self`. This happens when the workspace
         * is switched away in the main window.
         */
        deactivate(): void;
        /**
         * Retrieves the icon of `self`. It is mandatory to implement
         * this.
         * @returns a {@link Gio.Icon}
         */
        get_icon(): Gio.Icon;
        /**
         * Retrieves the id of `self`. It is mandatory to implement
         * this.
         * @returns the id of `self`
         */
        get_id(): string;
        /**
         * Retrieves the priority of `self`. It is mandatory to implement
         * this.
         * @returns the priority of `self`
         */
        get_priority(): number;
        /**
         * Retrieves the title of `self`. It is mandatory to implement
         * this.
         * @returns the title of `self`
         */
        get_title(): string;
    }

    export const Workspace: WorkspaceNamespace & {
        new (): Workspace; // This allows `obj instanceof Workspace`
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

export default Gtd;

// END
