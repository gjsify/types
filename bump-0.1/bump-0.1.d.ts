/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 */

/**
 * Bump-0.1
 */

import type Gio from '@girs/gio-2.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type GModule from '@girs/gmodule-2.0';
import type Gee from '@girs/gee-0.8';

export namespace Bump {
    interface Callback {
        (g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc): any;
    }
    module AsyncPriorityQueue {
        // Signal callback interfaces

        interface ConsumerShortage {
            (): void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Gee.PriorityQueue.ConstructorProps {
            g_type: GObject.GType;
            gType: GObject.GType;
            g_dup_func: GObject.BoxedCopyFunc;
            gDupFunc: GObject.BoxedCopyFunc;
            g_destroy_func: GLib.DestroyNotify;
            gDestroyFunc: GLib.DestroyNotify;
            waiting_threads: number;
            waitingThreads: number;
        }
    }

    class AsyncPriorityQueue extends Gee.PriorityQueue {
        static $gtype: GObject.GType<AsyncPriorityQueue>;

        // Own properties of Bump.AsyncPriorityQueue

        get g_type(): GObject.GType;
        get gType(): GObject.GType;
        get g_dup_func(): GObject.BoxedCopyFunc;
        get gDupFunc(): GObject.BoxedCopyFunc;
        get g_destroy_func(): GLib.DestroyNotify;
        get gDestroyFunc(): GLib.DestroyNotify;
        get waiting_threads(): number;
        set waiting_threads(val: number);
        get waitingThreads(): number;
        set waitingThreads(val: number);

        // Constructors of Bump.AsyncPriorityQueue

        constructor(properties?: Partial<AsyncPriorityQueue.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](
            g_type: GObject.GType,
            g_dup_func: GObject.BoxedCopyFunc,
            compare_func: GLib.CompareDataFunc,
        ): AsyncPriorityQueue;
        // Conflicted with Gee.PriorityQueue.new

        static ['new'](...args: never[]): any;

        // Own signals of Bump.AsyncPriorityQueue

        connect(id: string, callback: (...args: any[]) => any): number;
        connect_after(id: string, callback: (...args: any[]) => any): number;
        emit(id: string, ...args: any[]): void;
        connect(signal: 'consumer-shortage', callback: (_source: this) => void): number;
        connect_after(signal: 'consumer-shortage', callback: (_source: this) => void): number;
        emit(signal: 'consumer-shortage'): void;

        // Own methods of Bump.AsyncPriorityQueue

        poll_timed(wait: GLib.TimeSpan): any;
        peek_timed(wait: GLib.TimeSpan): any;
        offer(element: any): boolean;
        get_waiting_threads(): number;
    }

    module Claim {
        // Constructor properties interface

        interface ConstructorProps
            extends GObject.Object.ConstructorProps,
                Gio.Initable.ConstructorProps,
                Gio.AsyncInitable.ConstructorProps {
            active: boolean;
            time_acquired: number;
            timeAcquired: number;
            time_released: number;
            timeReleased: number;
            duration_held: GLib.TimeSpan;
            durationHeld: GLib.TimeSpan;
        }
    }

    class Claim extends GObject.Object implements Gio.Initable, Gio.AsyncInitable<Claim> {
        static $gtype: GObject.GType<Claim>;

        // Own properties of Bump.Claim

        get active(): boolean;
        get time_acquired(): number;
        set time_acquired(val: number);
        get timeAcquired(): number;
        set timeAcquired(val: number);
        get time_released(): number;
        set time_released(val: number);
        get timeReleased(): number;
        set timeReleased(val: number);
        get duration_held(): GLib.TimeSpan;
        get durationHeld(): GLib.TimeSpan;

        // Constructors of Bump.Claim

        constructor(properties?: Partial<Claim.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): Claim;

        // Own virtual methods of Bump.Claim

        vfunc_release(): void;
        vfunc_init(cancellable: Gio.Cancellable): boolean;
        // Conflicted with Gio.Initable.vfunc_init
        vfunc_init(...args: never[]): any;
        vfunc_init_async(
            io_priority: number,
            cancellable: Gio.Cancellable,
            _callback_: Gio.AsyncReadyCallback<this>,
        ): void;
        // Conflicted with Gio.AsyncInitable.vfunc_init_async
        vfunc_init_async(...args: never[]): any;
        vfunc_init_finish(_res_: Gio.AsyncResult): boolean;

        // Own methods of Bump.Claim

        release(): void;
        init(cancellable: Gio.Cancellable): boolean;
        // Conflicted with Gio.Initable.init
        init(...args: never[]): any;
        init_async(io_priority: number, cancellable: Gio.Cancellable, _callback_: Gio.AsyncReadyCallback<this>): void;
        // Conflicted with Gio.AsyncInitable.init_async
        init_async(...args: never[]): any;
        init_finish(_res_: Gio.AsyncResult): boolean;
        get_active(): boolean;
        get_time_acquired(): number;
        get_time_released(): number;
        get_duration_held(): GLib.TimeSpan;

        // Inherited methods
        /**
         * Finishes the async construction for the various g_async_initable_new
         * calls, returning the created object or %NULL on error.
         * @param res the #GAsyncResult from the callback
         * @returns a newly created #GObject,      or %NULL on error. Free with g_object_unref().
         */
        new_finish(res: Gio.AsyncResult): Claim;
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
        disconnect(id: number): void;
        set(properties: { [key: string]: any }): void;
        block_signal_handler(id: number): any;
        unblock_signal_handler(id: number): any;
        stop_emission_by_name(detailedName: string): any;
    }

    module Event {
        interface Callback {
            (
                a_type: GObject.GType,
                a_dup_func: GObject.BoxedCopyFunc,
                r_type: GObject.GType,
                r_dup_func: GObject.BoxedCopyFunc,
                arg: any,
            ): any;
        }
        interface SourceFunc {
            (a_type: GObject.GType, a_dup_func: GObject.BoxedCopyFunc, arg: any): boolean;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            t_type: GObject.GType;
            tType: GObject.GType;
            t_dup_func: GObject.BoxedCopyFunc;
            tDupFunc: GObject.BoxedCopyFunc;
            t_destroy_func: GLib.DestroyNotify;
            tDestroyFunc: GLib.DestroyNotify;
            pool: TaskQueue;
            auto_reset: boolean;
            autoReset: boolean;
            triggered: boolean;
        }
    }

    class Event extends GObject.Object {
        static $gtype: GObject.GType<Event>;

        // Own properties of Bump.Event

        get t_type(): GObject.GType;
        get tType(): GObject.GType;
        get t_dup_func(): GObject.BoxedCopyFunc;
        get tDupFunc(): GObject.BoxedCopyFunc;
        get t_destroy_func(): GLib.DestroyNotify;
        get tDestroyFunc(): GLib.DestroyNotify;
        get pool(): TaskQueue;
        get auto_reset(): boolean;
        get autoReset(): boolean;
        get triggered(): boolean;
        set triggered(val: boolean);

        // Constructors of Bump.Event

        constructor(properties?: Partial<Event.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](t_type: GObject.GType, t_dup_func: GObject.BoxedCopyFunc, auto_reset: boolean): Event;

        // Own methods of Bump.Event

        reset(): void;
        trigger(value: any): void;
        add(func: Event.SourceFunc, priority: number, cancellable: Gio.Cancellable): void;
        execute(
            r_type: GObject.GType,
            r_dup_func: GObject.BoxedCopyFunc,
            func: Callback,
            priority: number,
            cancellable: Gio.Cancellable,
        ): any;
        execute_async(
            r_type: GObject.GType,
            r_dup_func: GObject.BoxedCopyFunc,
            func: Callback,
            priority: number,
            cancellable: Gio.Cancellable,
            _callback_: Gio.AsyncReadyCallback<this>,
        ): void;
        execute_finish(r_type: GObject.GType, r_dup_func: GObject.BoxedCopyFunc, _res_: Gio.AsyncResult): any;
        execute_background(
            r_type: GObject.GType,
            r_dup_func: GObject.BoxedCopyFunc,
            func: Callback,
            priority: number,
            cancellable: Gio.Cancellable,
            _callback_: Gio.AsyncReadyCallback<this>,
        ): void;
        execute_background_finish(
            r_type: GObject.GType,
            r_dup_func: GObject.BoxedCopyFunc,
            _res_: Gio.AsyncResult,
        ): any;
        get_pool(): TaskQueue;
        get_auto_reset(): boolean;
        get_triggered(): boolean;
    }

    module Factory {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            g_type: GObject.GType;
            gType: GObject.GType;
            g_dup_func: GObject.BoxedCopyFunc;
            gDupFunc: GObject.BoxedCopyFunc;
            g_destroy_func: GLib.DestroyNotify;
            gDestroyFunc: GLib.DestroyNotify;
        }
    }

    abstract class Factory extends GObject.Object {
        static $gtype: GObject.GType<Factory>;

        // Own properties of Bump.Factory

        get g_type(): GObject.GType;
        get gType(): GObject.GType;
        get g_dup_func(): GObject.BoxedCopyFunc;
        get gDupFunc(): GObject.BoxedCopyFunc;
        get g_destroy_func(): GLib.DestroyNotify;
        get gDestroyFunc(): GLib.DestroyNotify;

        // Constructors of Bump.Factory

        constructor(properties?: Partial<Factory.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Own virtual methods of Bump.Factory

        vfunc_create(priority: number, cancellable: Gio.Cancellable): any;
        vfunc_create_async(
            priority: number,
            cancellable: Gio.Cancellable,
            _callback_: Gio.AsyncReadyCallback<this>,
        ): void;
        vfunc_create_finish(_res_: Gio.AsyncResult): any;
        vfunc_create_background(
            priority: number,
            cancellable: Gio.Cancellable,
            _callback_: Gio.AsyncReadyCallback<this>,
        ): void;
        vfunc_create_background_finish(_res_: Gio.AsyncResult): any;
        vfunc_acquire(priority: number, cancellable: Gio.Cancellable): any;
        vfunc_acquire_async(
            priority: number,
            cancellable: Gio.Cancellable,
            _callback_: Gio.AsyncReadyCallback<this>,
        ): void;
        vfunc_acquire_finish(_res_: Gio.AsyncResult): any;
        vfunc_acquire_background(
            priority: number,
            cancellable: Gio.Cancellable,
            _callback_: Gio.AsyncReadyCallback<this>,
        ): void;
        vfunc_acquire_background_finish(_res_: Gio.AsyncResult): any;

        // Own methods of Bump.Factory

        create(priority: number, cancellable: Gio.Cancellable): any;
        create_async(priority: number, cancellable: Gio.Cancellable, _callback_: Gio.AsyncReadyCallback<this>): void;
        create_finish(_res_: Gio.AsyncResult): any;
        create_background(
            priority: number,
            cancellable: Gio.Cancellable,
            _callback_: Gio.AsyncReadyCallback<this>,
        ): void;
        create_background_finish(_res_: Gio.AsyncResult): any;
        acquire(priority: number, cancellable: Gio.Cancellable): any;
        acquire_async(priority: number, cancellable: Gio.Cancellable, _callback_: Gio.AsyncReadyCallback<this>): void;
        acquire_finish(_res_: Gio.AsyncResult): any;
        acquire_background(
            priority: number,
            cancellable: Gio.Cancellable,
            _callback_: Gio.AsyncReadyCallback<this>,
        ): void;
        acquire_background_finish(_res_: Gio.AsyncResult): any;
        get_construct_properties(): GObject.Parameter[];
        set_construct_properties(value: GObject.Parameter[]): void;
    }

    module Lazy {
        // Constructor properties interface

        interface ConstructorProps extends Factory.ConstructorProps {
            t_type: GObject.GType;
            tType: GObject.GType;
            t_dup_func: GObject.BoxedCopyFunc;
            tDupFunc: GObject.BoxedCopyFunc;
            t_destroy_func: GLib.DestroyNotify;
            tDestroyFunc: GLib.DestroyNotify;
            pool: TaskQueue;
            value: any;
            is_initialized: boolean;
            isInitialized: boolean;
        }
    }

    class Lazy extends Factory {
        static $gtype: GObject.GType<Lazy>;

        // Own properties of Bump.Lazy

        get t_type(): GObject.GType;
        get tType(): GObject.GType;
        get t_dup_func(): GObject.BoxedCopyFunc;
        get tDupFunc(): GObject.BoxedCopyFunc;
        get t_destroy_func(): GLib.DestroyNotify;
        get tDestroyFunc(): GLib.DestroyNotify;
        get pool(): TaskQueue;
        get value(): any;
        get is_initialized(): boolean;
        get isInitialized(): boolean;

        // Constructors of Bump.Lazy

        constructor(properties?: Partial<Lazy.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](t_type: GObject.GType, t_dup_func: GObject.BoxedCopyFunc): Lazy;

        // Own methods of Bump.Lazy

        get_pool(): TaskQueue;
        get_value(): any;
        get_is_initialized(): boolean;
    }

    module ResourceClaim {
        // Constructor properties interface

        interface ConstructorProps extends Claim.ConstructorProps {
            t_type: GObject.GType;
            tType: GObject.GType;
            t_dup_func: GObject.BoxedCopyFunc;
            tDupFunc: GObject.BoxedCopyFunc;
            t_destroy_func: GLib.DestroyNotify;
            tDestroyFunc: GLib.DestroyNotify;
            pool: ResourcePool;
            resource: any;
        }
    }

    class ResourceClaim extends Claim {
        static $gtype: GObject.GType<ResourceClaim>;

        // Own properties of Bump.ResourceClaim

        get t_type(): GObject.GType;
        get tType(): GObject.GType;
        get t_dup_func(): GObject.BoxedCopyFunc;
        get tDupFunc(): GObject.BoxedCopyFunc;
        get t_destroy_func(): GLib.DestroyNotify;
        get tDestroyFunc(): GLib.DestroyNotify;
        get pool(): ResourcePool;
        get resource(): any;

        // Constructors of Bump.ResourceClaim

        constructor(properties?: Partial<ResourceClaim.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](t_type: GObject.GType, t_dup_func: GObject.BoxedCopyFunc, pool: ResourcePool): ResourceClaim;
        // Conflicted with Bump.Claim.new

        static ['new'](...args: never[]): any;

        // Own methods of Bump.ResourceClaim

        get_pool(): ResourcePool;
        get_resource(): any;
    }

    module ResourcePool {
        interface Callback {
            (
                t_type: GObject.GType,
                t_dup_func: GObject.BoxedCopyFunc,
                r_type: GObject.GType,
                r_dup_func: GObject.BoxedCopyFunc,
                resource: any,
            ): any;
        }

        // Constructor properties interface

        interface ConstructorProps extends Factory.ConstructorProps {
            t_type: GObject.GType;
            tType: GObject.GType;
            t_dup_func: GObject.BoxedCopyFunc;
            tDupFunc: GObject.BoxedCopyFunc;
            t_destroy_func: GLib.DestroyNotify;
            tDestroyFunc: GLib.DestroyNotify;
            max_resources: number;
            maxResources: number;
            max_idle_time: GLib.TimeSpan;
            maxIdleTime: GLib.TimeSpan;
            num_resources: number;
            numResources: number;
            idle_resources: number;
            idleResources: number;
            active_resources: number;
            activeResources: number;
            pool: TaskQueue;
        }
    }

    class ResourcePool extends Factory {
        static $gtype: GObject.GType<ResourcePool>;

        // Own properties of Bump.ResourcePool

        get t_type(): GObject.GType;
        get tType(): GObject.GType;
        get t_dup_func(): GObject.BoxedCopyFunc;
        get tDupFunc(): GObject.BoxedCopyFunc;
        get t_destroy_func(): GLib.DestroyNotify;
        get tDestroyFunc(): GLib.DestroyNotify;
        get max_resources(): number;
        get maxResources(): number;
        get max_idle_time(): GLib.TimeSpan;
        set max_idle_time(val: GLib.TimeSpan);
        get maxIdleTime(): GLib.TimeSpan;
        set maxIdleTime(val: GLib.TimeSpan);
        get num_resources(): number;
        set num_resources(val: number);
        get numResources(): number;
        set numResources(val: number);
        get idle_resources(): number;
        get idleResources(): number;
        get active_resources(): number;
        get activeResources(): number;
        get pool(): TaskQueue;

        // Constructors of Bump.ResourcePool

        constructor(properties?: Partial<ResourcePool.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](t_type: GObject.GType, t_dup_func: GObject.BoxedCopyFunc, max_resources: number): ResourcePool;

        // Own virtual methods of Bump.ResourcePool

        vfunc_release(resource: any): void;

        // Own methods of Bump.ResourcePool

        release(resource: any): void;
        execute(
            r_type: GObject.GType,
            r_dup_func: GObject.BoxedCopyFunc,
            func: Callback,
            priority: number,
            cancellable: Gio.Cancellable,
        ): any;
        execute_async(
            r_type: GObject.GType,
            r_dup_func: GObject.BoxedCopyFunc,
            func: Callback,
            priority: number,
            cancellable: Gio.Cancellable,
            _callback_: Gio.AsyncReadyCallback<this>,
        ): void;
        execute_finish(r_type: GObject.GType, r_dup_func: GObject.BoxedCopyFunc, _res_: Gio.AsyncResult): any;
        execute_background(
            r_type: GObject.GType,
            r_dup_func: GObject.BoxedCopyFunc,
            func: Callback,
            priority: number,
            cancellable: Gio.Cancellable,
            _callback_: Gio.AsyncReadyCallback<this>,
        ): void;
        execute_background_finish(
            r_type: GObject.GType,
            r_dup_func: GObject.BoxedCopyFunc,
            _res_: Gio.AsyncResult,
        ): any;
        claim(priority: number, cancellable: Gio.Cancellable): ResourceClaim;
        claim_async(priority: number, cancellable: Gio.Cancellable, _callback_: Gio.AsyncReadyCallback<this>): void;
        claim_finish(_res_: Gio.AsyncResult): ResourceClaim;
        get_max_resources(): number;
        get_max_idle_time(): GLib.TimeSpan;
        set_max_idle_time(value: GLib.TimeSpan): void;
        get_num_resources(): number;
        get_idle_resources(): number;
        get_active_resources(): number;
        get_pool(): TaskQueue;
    }

    module Semaphore {
        // Constructor properties interface

        interface ConstructorProps extends TaskQueue.ConstructorProps {
            max_claims: number;
            maxClaims: number;
            claims: number;
            pool: TaskQueue;
        }
    }

    class Semaphore extends TaskQueue {
        static $gtype: GObject.GType<Semaphore>;

        // Own properties of Bump.Semaphore

        get max_claims(): number;
        get maxClaims(): number;
        get claims(): number;
        set claims(val: number);
        get pool(): TaskQueue;

        // Constructors of Bump.Semaphore

        constructor(properties?: Partial<Semaphore.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](max_claims: number): Semaphore;
        // Conflicted with Bump.TaskQueue.new

        static ['new'](...args: never[]): any;

        // Own virtual methods of Bump.Semaphore

        vfunc_claim(priority: number, cancellable: Gio.Cancellable): SemaphoreClaim;
        vfunc_claim_async(
            priority: number,
            cancellable: Gio.Cancellable,
            _callback_: Gio.AsyncReadyCallback<this>,
        ): void;
        vfunc_claim_finish(_res_: Gio.AsyncResult): SemaphoreClaim;

        // Own methods of Bump.Semaphore

        unlock(): void;
        lock(priority: number, cancellable: Gio.Cancellable): void;
        lock_async(priority: number, cancellable: Gio.Cancellable, _callback_: Gio.AsyncReadyCallback<this>): void;
        lock_finish(_res_: Gio.AsyncResult): void;
        claim(priority: number, cancellable: Gio.Cancellable): SemaphoreClaim;
        claim_async(priority: number, cancellable: Gio.Cancellable, _callback_: Gio.AsyncReadyCallback<this>): void;
        claim_finish(_res_: Gio.AsyncResult): SemaphoreClaim;
        get_max_claims(): number;
        get_claims(): number;
        get_pool(): TaskQueue;
    }

    module SemaphoreClaim {
        // Constructor properties interface

        interface ConstructorProps extends Claim.ConstructorProps {
            semaphore: Semaphore;
        }
    }

    class SemaphoreClaim extends Claim {
        static $gtype: GObject.GType<SemaphoreClaim>;

        // Own properties of Bump.SemaphoreClaim

        get semaphore(): Semaphore;

        // Constructors of Bump.SemaphoreClaim

        constructor(properties?: Partial<SemaphoreClaim.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Own methods of Bump.SemaphoreClaim

        get_semaphore(): Semaphore;
    }

    module TaskQueue {
        // Constructor properties interface

        interface ConstructorProps
            extends GObject.Object.ConstructorProps,
                Queue.ConstructorProps,
                Threading.ConstructorProps {}
    }

    class TaskQueue extends GObject.Object implements Queue, Threading {
        static $gtype: GObject.GType<TaskQueue>;

        // Constructors of Bump.TaskQueue

        constructor(properties?: Partial<TaskQueue.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): TaskQueue;

        // Own static methods of Bump.TaskQueue

        static get_global(): TaskQueue;

        // Own virtual methods of Bump.TaskQueue

        vfunc_spawn(max: number): number;
        vfunc_add(task: GLib.SourceFunc, priority: number, cancellable: Gio.Cancellable): void;
        vfunc_process(wait: GLib.TimeSpan): boolean;
        vfunc_execute(
            g_type: GObject.GType,
            g_dup_func: GObject.BoxedCopyFunc,
            func: Callback,
            priority: number,
            cancellable: Gio.Cancellable,
        ): any;
        vfunc_execute_async(
            g_type: GObject.GType,
            g_dup_func: GObject.BoxedCopyFunc,
            func: Callback,
            priority: number,
            cancellable: Gio.Cancellable,
            _callback_: Gio.AsyncReadyCallback<this>,
        ): void;
        vfunc_execute_finish(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, _res_: Gio.AsyncResult): any;
        vfunc_execute_background(
            g_type: GObject.GType,
            g_dup_func: GObject.BoxedCopyFunc,
            func: Callback,
            priority: number,
            cancellable: Gio.Cancellable,
            _callback_: Gio.AsyncReadyCallback<this>,
        ): void;
        vfunc_execute_background_finish(
            g_type: GObject.GType,
            g_dup_func: GObject.BoxedCopyFunc,
            _res_: Gio.AsyncResult,
        ): any;

        // Own methods of Bump.TaskQueue

        spawn(max: number): number;
        add(task: GLib.SourceFunc, priority: number, cancellable: Gio.Cancellable): void;
        process(wait: GLib.TimeSpan): boolean;
        execute(
            g_type: GObject.GType,
            g_dup_func: GObject.BoxedCopyFunc,
            func: Callback,
            priority: number,
            cancellable: Gio.Cancellable,
        ): any;
        execute_async(
            g_type: GObject.GType,
            g_dup_func: GObject.BoxedCopyFunc,
            func: Callback,
            priority: number,
            cancellable: Gio.Cancellable,
            _callback_: Gio.AsyncReadyCallback<this>,
        ): void;
        execute_finish(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, _res_: Gio.AsyncResult): any;
        execute_background(
            g_type: GObject.GType,
            g_dup_func: GObject.BoxedCopyFunc,
            func: Callback,
            priority: number,
            cancellable: Gio.Cancellable,
            _callback_: Gio.AsyncReadyCallback<this>,
        ): void;
        execute_background_finish(
            g_type: GObject.GType,
            g_dup_func: GObject.BoxedCopyFunc,
            _res_: Gio.AsyncResult,
        ): any;

        // Inherited properties
        get length(): number;

        // Inherited methods
        get_length(): number;
        vfunc_get_length(): number;
        get_max_threads(): number;
        set_max_threads(value: number): void;
        get_max_idle_time(): GLib.TimeSpan;
        set_max_idle_time(value: GLib.TimeSpan): void;
        get_num_threads(): number;
        get_idle_threads(): number;
        increase_max_threads(new_max_threads: number): void;
        run_task(func: GLib.SourceFunc): boolean;
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
        disconnect(id: number): void;
        set(properties: { [key: string]: any }): void;
        block_signal_handler(id: number): any;
        unblock_signal_handler(id: number): any;
        stop_emission_by_name(detailedName: string): any;
    }

    type AsyncPriorityQueueClass = typeof AsyncPriorityQueue;
    abstract class AsyncPriorityQueuePrivate {
        static $gtype: GObject.GType<AsyncPriorityQueuePrivate>;

        // Constructors of Bump.AsyncPriorityQueuePrivate

        _init(...args: any[]): void;
    }

    type ClaimClass = typeof Claim;
    abstract class ClaimPrivate {
        static $gtype: GObject.GType<ClaimPrivate>;

        // Constructors of Bump.ClaimPrivate

        _init(...args: any[]): void;
    }

    type EventClass = typeof Event;
    abstract class EventPrivate {
        static $gtype: GObject.GType<EventPrivate>;

        // Constructors of Bump.EventPrivate

        _init(...args: any[]): void;
    }

    type FactoryClass = typeof Factory;
    abstract class FactoryPrivate {
        static $gtype: GObject.GType<FactoryPrivate>;

        // Constructors of Bump.FactoryPrivate

        _init(...args: any[]): void;
    }

    type LazyClass = typeof Lazy;
    abstract class LazyPrivate {
        static $gtype: GObject.GType<LazyPrivate>;

        // Constructors of Bump.LazyPrivate

        _init(...args: any[]): void;
    }

    type ResourceClaimClass = typeof ResourceClaim;
    abstract class ResourceClaimPrivate {
        static $gtype: GObject.GType<ResourceClaimPrivate>;

        // Constructors of Bump.ResourceClaimPrivate

        _init(...args: any[]): void;
    }

    type ResourcePoolClass = typeof ResourcePool;
    abstract class ResourcePoolPrivate {
        static $gtype: GObject.GType<ResourcePoolPrivate>;

        // Constructors of Bump.ResourcePoolPrivate

        _init(...args: any[]): void;
    }

    type SemaphoreClass = typeof Semaphore;
    abstract class SemaphorePrivate {
        static $gtype: GObject.GType<SemaphorePrivate>;

        // Constructors of Bump.SemaphorePrivate

        _init(...args: any[]): void;
    }

    type SemaphoreClaimClass = typeof SemaphoreClaim;
    abstract class SemaphoreClaimPrivate {
        static $gtype: GObject.GType<SemaphoreClaimPrivate>;

        // Constructors of Bump.SemaphoreClaimPrivate

        _init(...args: any[]): void;
    }

    type TaskQueueClass = typeof TaskQueue;
    abstract class TaskQueuePrivate {
        static $gtype: GObject.GType<TaskQueuePrivate>;

        // Constructors of Bump.TaskQueuePrivate

        _init(...args: any[]): void;
    }

    type QueueIface = typeof Queue;
    type ThreadingIface = typeof Threading;
    module Queue {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            length: number;
        }
    }

    export interface QueueNamespace {
        $gtype: GObject.GType<Queue>;
        prototype: Queue;
    }
    interface Queue extends GObject.Object {
        // Own properties of Bump.Queue

        get length(): number;

        // Own methods of Bump.Queue

        process(wait: GLib.TimeSpan): boolean;
        get_length(): number;

        // Own virtual methods of Bump.Queue

        vfunc_process(wait: GLib.TimeSpan): boolean;
        vfunc_get_length(): number;
    }

    export const Queue: QueueNamespace;

    module Threading {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    export interface ThreadingNamespace {
        $gtype: GObject.GType<Threading>;
        prototype: Threading;
    }
    interface Threading extends GObject.Object {
        // Own methods of Bump.Threading

        get_max_threads(): number;
        set_max_threads(value: number): void;
        get_max_idle_time(): GLib.TimeSpan;
        set_max_idle_time(value: GLib.TimeSpan): void;
        get_num_threads(): number;
        get_idle_threads(): number;
        increase_max_threads(new_max_threads: number): void;
        run_task(func: GLib.SourceFunc): boolean;
        spawn(max_new_threads: number): number;

        // Own virtual methods of Bump.Threading

        vfunc_spawn(max_new_threads: number): number;
    }

    export const Threading: ThreadingNamespace;

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

export default Bump;
// END
