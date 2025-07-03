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
import type Gee from '@girs/gee-0.8';
import type Gio from '@girs/gio-2.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type GModule from '@girs/gmodule-2.0';

export namespace Gpseq {
    /**
     * Gpseq-1.0
     */

    class ChannelError extends GLib.Error {
        static $gtype: GObject.GType<ChannelError>;

        // Static fields

        static CLOSED: number;
        static TIMEOUT: number;
        static TRY_FAILED: number;

        // Constructors

        constructor(options: { message: string; code: number });
        _init(...args: any[]): void;
    }

    class MapError extends GLib.Error {
        static $gtype: GObject.GType<MapError>;

        // Static fields

        static DUPLICATE_KEY: number;

        // Constructors

        constructor(options: { message: string; code: number });
        _init(...args: any[]): void;
    }

    class OptionalError extends GLib.Error {
        static $gtype: GObject.GType<OptionalError>;

        // Static fields

        static NOT_PRESENT: number;

        // Constructors

        constructor(options: { message: string; code: number });
        _init(...args: any[]): void;
    }

    function collectors_to_generic_array(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc): Collector;
    function collectors_to_collection(
        g_type: GObject.GType,
        g_dup_func: GObject.BoxedCopyFunc,
        factory: Supplier,
    ): Collector;
    function collectors_to_list(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc): Collector;
    function collectors_to_set(
        g_type: GObject.GType,
        g_dup_func: GObject.BoxedCopyFunc,
        hash: Gee.HashDataFunc,
        equal: Gee.EqualDataFunc,
    ): Collector;
    function collectors_to_map(
        k_type: GObject.GType,
        k_dup_func: GObject.BoxedCopyFunc,
        v_type: GObject.GType,
        v_dup_func: GObject.BoxedCopyFunc,
        g_type: GObject.GType,
        g_dup_func: GObject.BoxedCopyFunc,
        key_mapper: MapFunc,
        val_mapper: MapFunc,
        merger: CombineFunc,
        key_hash: Gee.HashDataFunc,
        key_equal: Gee.EqualDataFunc,
        value_equal: Gee.EqualDataFunc,
    ): Collector;
    function collectors_sum_int(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, mapper: MapFunc): Collector;
    function collectors_sum_uint(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, mapper: MapFunc): Collector;
    function collectors_sum_long(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, mapper: MapFunc): Collector;
    function collectors_sum_ulong(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, mapper: MapFunc): Collector;
    function collectors_sum_float(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, mapper: MapFunc): Collector;
    function collectors_sum_double(
        g_type: GObject.GType,
        g_dup_func: GObject.BoxedCopyFunc,
        mapper: MapFunc,
    ): Collector;
    function collectors_sum_int32(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, mapper: MapFunc): Collector;
    function collectors_sum_uint32(
        g_type: GObject.GType,
        g_dup_func: GObject.BoxedCopyFunc,
        mapper: MapFunc,
    ): Collector;
    function collectors_sum_int64(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, mapper: MapFunc): Collector;
    function collectors_sum_uint64(
        g_type: GObject.GType,
        g_dup_func: GObject.BoxedCopyFunc,
        mapper: MapFunc,
    ): Collector;
    function collectors_average_float(
        g_type: GObject.GType,
        g_dup_func: GObject.BoxedCopyFunc,
        mapper: MapFunc,
    ): Collector;
    function collectors_average_double(
        g_type: GObject.GType,
        g_dup_func: GObject.BoxedCopyFunc,
        mapper: MapFunc,
    ): Collector;
    function collectors_group_by(
        k_type: GObject.GType,
        k_dup_func: GObject.BoxedCopyFunc,
        g_type: GObject.GType,
        g_dup_func: GObject.BoxedCopyFunc,
        classifier: MapFunc,
    ): Collector;
    function collectors_group_by_with(
        k_type: GObject.GType,
        k_dup_func: GObject.BoxedCopyFunc,
        v_type: GObject.GType,
        v_dup_func: GObject.BoxedCopyFunc,
        g_type: GObject.GType,
        g_dup_func: GObject.BoxedCopyFunc,
        classifier: MapFunc,
        downstream: Collector,
    ): Collector;
    function collectors_partition(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, pred: Predicate): Collector;
    function collectors_partition_with(
        v_type: GObject.GType,
        v_dup_func: GObject.BoxedCopyFunc,
        g_type: GObject.GType,
        g_dup_func: GObject.BoxedCopyFunc,
        pred: Predicate,
        downstream: Collector,
    ): Collector;
    function collectors_max(
        g_type: GObject.GType,
        g_dup_func: GObject.BoxedCopyFunc,
        compare: GLib.CompareDataFunc,
    ): Collector;
    function collectors_min(
        g_type: GObject.GType,
        g_dup_func: GObject.BoxedCopyFunc,
        compare: GLib.CompareDataFunc,
    ): Collector;
    function collectors_count(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc): Collector;
    function collectors_fold(
        a_type: GObject.GType,
        a_dup_func: GObject.BoxedCopyFunc,
        g_type: GObject.GType,
        g_dup_func: GObject.BoxedCopyFunc,
        accumulator: FoldFunc,
        combiner: CombineFunc,
        identity: any,
    ): Collector;
    function collectors_reduce(
        g_type: GObject.GType,
        g_dup_func: GObject.BoxedCopyFunc,
        accumulator: CombineFunc,
    ): Collector;
    function collectors_join(delimiter: string): Collector;
    function collectors_filter(
        a_type: GObject.GType,
        a_dup_func: GObject.BoxedCopyFunc,
        g_type: GObject.GType,
        g_dup_func: GObject.BoxedCopyFunc,
        pred: Predicate,
        downstream: Collector,
    ): Collector;
    function collectors_tee(
        a_type: GObject.GType,
        a_dup_func: GObject.BoxedCopyFunc,
        g_type: GObject.GType,
        g_dup_func: GObject.BoxedCopyFunc,
        downstreams: Collector[],
        merger: TeeMergeFunc,
    ): Collector;
    function collectors_map(
        r_type: GObject.GType,
        r_dup_func: GObject.BoxedCopyFunc,
        a_type: GObject.GType,
        a_dup_func: GObject.BoxedCopyFunc,
        g_type: GObject.GType,
        g_dup_func: GObject.BoxedCopyFunc,
        mapper: MapFunc,
        downstream: Collector,
    ): Collector;
    function collectors_wrap(
        a_type: GObject.GType,
        a_dup_func: GObject.BoxedCopyFunc,
        g_type: GObject.GType,
        g_dup_func: GObject.BoxedCopyFunc,
        collector: Collector,
    ): Collector;
    function compares_reverse(
        g_type: GObject.GType,
        g_dup_func: GObject.BoxedCopyFunc,
        cmp: GLib.CompareDataFunc,
    ): [GLib.CompareDataFunc, any];
    function compares_join(
        g_type: GObject.GType,
        g_dup_func: GObject.BoxedCopyFunc,
        cmp: GLib.CompareDataFunc,
        cmp2: GLib.CompareDataFunc,
    ): [GLib.CompareDataFunc, any];
    function overflow_int_add(a: number, b: number): [boolean, number];
    function overflow_int_sub(a: number, b: number): [boolean, number];
    function overflow_int_mul(a: number, b: number): [boolean, number];
    function overflow_long_add(a: number, b: number): [boolean, number];
    function overflow_long_sub(a: number, b: number): [boolean, number];
    function overflow_long_mul(a: number, b: number): [boolean, number];
    function overflow_int32_add(a: number, b: number): [boolean, number];
    function overflow_int32_sub(a: number, b: number): [boolean, number];
    function overflow_int32_mul(a: number, b: number): [boolean, number];
    function overflow_int64_add(a: number, b: number): [boolean, number];
    function overflow_int64_sub(a: number, b: number): [boolean, number];
    function overflow_int64_mul(a: number, b: number): [boolean, number];
    function parallel_sort(
        g_type: GObject.GType,
        g_dup_func: GObject.BoxedCopyFunc,
        array: any[],
        compare: GLib.CompareDataFunc,
    ): Future;
    function task(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, func: TaskFunc): Future;
    function run(func: VoidTaskFunc): Future;
    function blocking(func: VoidTaskFunc): void;
    function blocking_get(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, func: TaskFunc): any;
    function join(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, left: TaskFunc): [any[], number];
    function atomic_int64_get(atomic: number): [number, number];
    function atomic_int64_set(atomic: number, newval: number): number;
    function atomic_int64_inc(atomic: number): number;
    function atomic_int64_dec_and_test(atomic: number): [boolean, number];
    function atomic_int64_compare_and_exchange(atomic: number, oldval: number, newval: number): [boolean, number];
    function atomic_int64_add(atomic: number, val: number): [number, number];
    function atomic_int64_and(atomic: number, val: number): [number, number];
    function atomic_int64_or(atomic: number, val: number): [number, number];
    function atomic_int64_xor(atomic: number, val: number): [number, number];
    interface CombineFunc {
        (g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, a: any, b: any): any;
    }
    interface EachChunkFunc {
        (g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, chunk: any[]): boolean;
    }
    interface FlatMapFunc {
        (
            a_type: GObject.GType,
            a_dup_func: GObject.BoxedCopyFunc,
            g_type: GObject.GType,
            g_dup_func: GObject.BoxedCopyFunc,
            g: any,
        ): Gee.Iterator;
    }
    interface FoldFunc {
        (
            a_type: GObject.GType,
            a_dup_func: GObject.BoxedCopyFunc,
            g_type: GObject.GType,
            g_dup_func: GObject.BoxedCopyFunc,
            g: any,
            a: any,
        ): any;
    }
    interface Func {
        (g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g: any): void;
    }
    interface MapFunc {
        (
            a_type: GObject.GType,
            a_dup_func: GObject.BoxedCopyFunc,
            g_type: GObject.GType,
            g_dup_func: GObject.BoxedCopyFunc,
            g: any,
        ): any;
    }
    interface Predicate {
        (g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g: any): boolean;
    }
    interface SupplyFunc {
        (g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc): any;
    }
    interface TaskFunc {
        (g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc): any;
    }
    interface TeeMergeFunc {
        (a_type: GObject.GType, a_dup_func: GObject.BoxedCopyFunc, results: GObject.Object[]): any;
    }
    interface VoidFunc {
        (): void;
    }
    interface VoidTaskFunc {
        (): void;
    }

    export namespace CollectorFeatures {
        export const $gtype: GObject.GType<CollectorFeatures>;
    }

    enum CollectorFeatures {
        CONCURRENT,
        UNORDERED,
    }
    namespace ArraySpliterator {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::g-type': (pspec: GObject.ParamSpec) => void;
            'notify::g-dup-func': (pspec: GObject.ParamSpec) => void;
            'notify::g-destroy-func': (pspec: GObject.ParamSpec) => void;
            'notify::estimated-size': (pspec: GObject.ParamSpec) => void;
            'notify::is-size-known': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps, Spliterator.ConstructorProps {
            g_type: GObject.GType;
            gType: GObject.GType;
            g_dup_func: GObject.BoxedCopyFunc;
            gDupFunc: GObject.BoxedCopyFunc;
            g_destroy_func: GLib.DestroyNotify;
            gDestroyFunc: GLib.DestroyNotify;
        }
    }

    class ArraySpliterator extends GObject.Object implements Spliterator {
        static $gtype: GObject.GType<ArraySpliterator>;

        // Properties

        get g_type(): GObject.GType;
        get gType(): GObject.GType;
        get g_dup_func(): GObject.BoxedCopyFunc;
        get gDupFunc(): GObject.BoxedCopyFunc;
        get g_destroy_func(): GLib.DestroyNotify;
        get gDestroyFunc(): GLib.DestroyNotify;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: ArraySpliterator.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<ArraySpliterator.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](
            g_type: GObject.GType,
            g_dup_func: GObject.BoxedCopyFunc,
            array: any[],
            start: number,
            stop: number,
        ): ArraySpliterator;

        // Signals

        connect<K extends keyof ArraySpliterator.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ArraySpliterator.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof ArraySpliterator.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ArraySpliterator.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof ArraySpliterator.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<ArraySpliterator.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Inherited properties
        get estimated_size(): number;
        get estimatedSize(): number;
        get is_size_known(): boolean;
        get isSizeKnown(): boolean;

        // Inherited methods
        get_element_type(): GObject.GType;
        try_split(): Spliterator;
        try_advance(consumer: Func): boolean;
        get_estimated_size(): number;
        get_is_size_known(): boolean;
        each(f: Func): void;
        each_chunk(f: EachChunkFunc): boolean;
        vfunc_try_split(): Spliterator;
        vfunc_try_advance(consumer: Func): boolean;
        vfunc_get_estimated_size(): number;
        vfunc_get_is_size_known(): boolean;
        vfunc_each(f: Func): void;
        vfunc_each_chunk(f: EachChunkFunc): boolean;
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

    namespace ForkJoinTask {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::g-type': (pspec: GObject.ParamSpec) => void;
            'notify::g-dup-func': (pspec: GObject.ParamSpec) => void;
            'notify::g-destroy-func': (pspec: GObject.ParamSpec) => void;
            'notify::parent': (pspec: GObject.ParamSpec) => void;
            'notify::root': (pspec: GObject.ParamSpec) => void;
            'notify::is-root': (pspec: GObject.ParamSpec) => void;
            'notify::threshold': (pspec: GObject.ParamSpec) => void;
            'notify::max-depth': (pspec: GObject.ParamSpec) => void;
            'notify::depth': (pspec: GObject.ParamSpec) => void;
            'notify::executor': (pspec: GObject.ParamSpec) => void;
            'notify::promise': (pspec: GObject.ParamSpec) => void;
            'notify::shared-result': (pspec: GObject.ParamSpec) => void;
            'notify::is-cancelled': (pspec: GObject.ParamSpec) => void;
            'notify::future': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps, Task.ConstructorProps {
            g_type: GObject.GType;
            gType: GObject.GType;
            g_dup_func: GObject.BoxedCopyFunc;
            gDupFunc: GObject.BoxedCopyFunc;
            g_destroy_func: GLib.DestroyNotify;
            gDestroyFunc: GLib.DestroyNotify;
            parent: ForkJoinTask;
            root: ForkJoinTask;
            is_root: boolean;
            isRoot: boolean;
            threshold: number;
            max_depth: number;
            maxDepth: number;
            depth: number;
            executor: Executor;
            promise: Promise;
            shared_result: ForkJoinTaskSharedResult;
            sharedResult: ForkJoinTaskSharedResult;
            is_cancelled: boolean;
            isCancelled: boolean;
        }
    }

    abstract class ForkJoinTask extends GObject.Object implements Task {
        static $gtype: GObject.GType<ForkJoinTask>;

        // Properties

        get g_type(): GObject.GType;
        get gType(): GObject.GType;
        get g_dup_func(): GObject.BoxedCopyFunc;
        get gDupFunc(): GObject.BoxedCopyFunc;
        get g_destroy_func(): GLib.DestroyNotify;
        get gDestroyFunc(): GLib.DestroyNotify;
        get parent(): ForkJoinTask;
        get root(): ForkJoinTask;
        get is_root(): boolean;
        get isRoot(): boolean;
        get threshold(): number;
        get max_depth(): number;
        get maxDepth(): number;
        get depth(): number;
        set depth(val: number);
        get executor(): Executor;
        get promise(): Promise;
        get shared_result(): ForkJoinTaskSharedResult;
        get sharedResult(): ForkJoinTaskSharedResult;
        get is_cancelled(): boolean;
        get isCancelled(): boolean;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: ForkJoinTask.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<ForkJoinTask.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        connect<K extends keyof ForkJoinTask.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ForkJoinTask.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof ForkJoinTask.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ForkJoinTask.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof ForkJoinTask.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<ForkJoinTask.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods

        vfunc_compute(): void;

        // Methods

        get_parent(): ForkJoinTask;
        get_root(): ForkJoinTask;
        get_is_root(): boolean;
        get_threshold(): number;
        get_max_depth(): number;
        get_depth(): number;
        set_depth(value: number): void;
        get_executor(): Executor;
        get_promise(): Promise;
        join(): any;
        fork(): void;
        get_shared_result(): ForkJoinTaskSharedResult;
        cancel(): void;
        get_is_cancelled(): boolean;
        compute(): void;

        // Inherited properties
        get future(): Future;

        // Inherited methods
        get_future(): Future;
        invoke(): void;
        vfunc_get_future(): Future;
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

    namespace ForkJoinTaskSharedResult {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}
    }

    class ForkJoinTaskSharedResult {
        static $gtype: GObject.GType<ForkJoinTaskSharedResult>;

        // Fields

        ref_count: number;

        // Constructors

        _init(...args: any[]): void;

        static ['new'](g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc): ForkJoinTaskSharedResult;

        // Signals

        connect<K extends keyof ForkJoinTaskSharedResult.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ForkJoinTaskSharedResult.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof ForkJoinTaskSharedResult.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ForkJoinTaskSharedResult.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof ForkJoinTaskSharedResult.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<ForkJoinTaskSharedResult.SignalSignatures[K]> extends [any, ...infer Q]
                ? Q
                : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        get_ready(): boolean;
        get_value(): any;
        set_value(value: any): void;
        get_error(): GLib.Error;
        set_error(value: GLib.Error): void;
        bake_promise(promise: Promise): void;
    }

    namespace FuncTask {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::g-type': (pspec: GObject.ParamSpec) => void;
            'notify::g-dup-func': (pspec: GObject.ParamSpec) => void;
            'notify::g-destroy-func': (pspec: GObject.ParamSpec) => void;
            'notify::future': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps, Task.ConstructorProps {
            g_type: GObject.GType;
            gType: GObject.GType;
            g_dup_func: GObject.BoxedCopyFunc;
            gDupFunc: GObject.BoxedCopyFunc;
            g_destroy_func: GLib.DestroyNotify;
            gDestroyFunc: GLib.DestroyNotify;
        }
    }

    class FuncTask extends GObject.Object implements Task {
        static $gtype: GObject.GType<FuncTask>;

        // Properties

        get g_type(): GObject.GType;
        get gType(): GObject.GType;
        get g_dup_func(): GObject.BoxedCopyFunc;
        get gDupFunc(): GObject.BoxedCopyFunc;
        get g_destroy_func(): GLib.DestroyNotify;
        get gDestroyFunc(): GLib.DestroyNotify;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: FuncTask.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<FuncTask.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, func: TaskFunc): FuncTask;

        // Signals

        connect<K extends keyof FuncTask.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, FuncTask.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof FuncTask.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, FuncTask.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof FuncTask.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<FuncTask.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Inherited properties
        get future(): Future;

        // Inherited methods
        get_future(): Future;
        compute(): void;
        invoke(): void;
        vfunc_get_future(): Future;
        vfunc_compute(): void;
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

    namespace Future {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::g-type': (pspec: GObject.ParamSpec) => void;
            'notify::g-dup-func': (pspec: GObject.ParamSpec) => void;
            'notify::g-destroy-func': (pspec: GObject.ParamSpec) => void;
            'notify::ready': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps
            extends GObject.Object.ConstructorProps,
                Gee.Hashable.ConstructorProps,
                Result.ConstructorProps {
            g_type: GObject.GType;
            gType: GObject.GType;
            g_dup_func: GObject.BoxedCopyFunc;
            gDupFunc: GObject.BoxedCopyFunc;
            g_destroy_func: GLib.DestroyNotify;
            gDestroyFunc: GLib.DestroyNotify;
            ready: boolean;
        }
    }

    abstract class Future extends GObject.Object implements Gee.Hashable, Result {
        static $gtype: GObject.GType<Future>;

        // Properties

        get g_type(): GObject.GType;
        get gType(): GObject.GType;
        get g_dup_func(): GObject.BoxedCopyFunc;
        get gDupFunc(): GObject.BoxedCopyFunc;
        get g_destroy_func(): GLib.DestroyNotify;
        get gDestroyFunc(): GLib.DestroyNotify;
        get ready(): boolean;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Future.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Future.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        connect<K extends keyof Future.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Future.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Future.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Future.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Future.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Future.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        static of(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, value: any): Future;
        static err(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, exception: GLib.Error): Future;
        static done(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, result: Result): Future;

        // Virtual methods

        vfunc_get_ready(): boolean;
        vfunc_wait(): any;
        vfunc_wait_until(end_time: number): [boolean, any];
        vfunc_transform(a_type: GObject.GType, a_dup_func: GObject.BoxedCopyFunc, func: Result.TransformFunc): Result;

        // Methods

        get_ready(): boolean;
        wait(): any;
        wait_until(end_time: number): [boolean, any];
        transform(a_type: GObject.GType, a_dup_func: GObject.BoxedCopyFunc, func: Result.TransformFunc): Result;

        // Inherited methods
        hash(): number;
        equal_to(object: any): boolean;
        vfunc_hash(): number;
        vfunc_equal_to(object: any): boolean;
        get_value_type(): GObject.GType;
        get_value(): any;
        get_exception(): GLib.Error;
        get_is_err(): boolean;
        ok(): Result;
        ok_with(expected: any, equal: Gee.EqualDataFunc): Result;
        future(): Future;
        get(): any;
        flat_map(a_type: GObject.GType, a_dup_func: GObject.BoxedCopyFunc, func: FlatMapFunc): Result;
        map(a_type: GObject.GType, a_dup_func: GObject.BoxedCopyFunc, func: MapFunc): Result;
        map_err(func: Result.MapErrorFunc): Result;
        zip(
            a_type: GObject.GType,
            a_dup_func: GObject.BoxedCopyFunc,
            b_type: GObject.GType,
            b_dup_func: GObject.BoxedCopyFunc,
            zip_func: Result.ZipFunc,
            second: Result,
        ): Result;
        then(func: GLib.Func): Result;
        and_then(func: Func): Result;
        vfunc_future(): Future;
        vfunc_get(): any;
        vfunc_flat_map(a_type: GObject.GType, a_dup_func: GObject.BoxedCopyFunc, func: FlatMapFunc): Result;
        vfunc_map(a_type: GObject.GType, a_dup_func: GObject.BoxedCopyFunc, func: MapFunc): Result;
        vfunc_map_err(func: Result.MapErrorFunc): Result;
        vfunc_zip(
            a_type: GObject.GType,
            a_dup_func: GObject.BoxedCopyFunc,
            b_type: GObject.GType,
            b_dup_func: GObject.BoxedCopyFunc,
            zip_func: Result.ZipFunc,
            second: Result,
        ): Result;
        vfunc_then(func: GLib.Func): Result;
        vfunc_and_then(func: Func): Result;
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

    namespace GenericArraySpliterator {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::g-type': (pspec: GObject.ParamSpec) => void;
            'notify::g-dup-func': (pspec: GObject.ParamSpec) => void;
            'notify::g-destroy-func': (pspec: GObject.ParamSpec) => void;
            'notify::estimated-size': (pspec: GObject.ParamSpec) => void;
            'notify::is-size-known': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps, Spliterator.ConstructorProps {
            g_type: GObject.GType;
            gType: GObject.GType;
            g_dup_func: GObject.BoxedCopyFunc;
            gDupFunc: GObject.BoxedCopyFunc;
            g_destroy_func: GLib.DestroyNotify;
            gDestroyFunc: GLib.DestroyNotify;
        }
    }

    class GenericArraySpliterator extends GObject.Object implements Spliterator {
        static $gtype: GObject.GType<GenericArraySpliterator>;

        // Properties

        get g_type(): GObject.GType;
        get gType(): GObject.GType;
        get g_dup_func(): GObject.BoxedCopyFunc;
        get gDupFunc(): GObject.BoxedCopyFunc;
        get g_destroy_func(): GLib.DestroyNotify;
        get gDestroyFunc(): GLib.DestroyNotify;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: GenericArraySpliterator.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<GenericArraySpliterator.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](
            g_type: GObject.GType,
            g_dup_func: GObject.BoxedCopyFunc,
            array: any[],
            start: number,
            stop: number,
        ): GenericArraySpliterator;

        // Signals

        connect<K extends keyof GenericArraySpliterator.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, GenericArraySpliterator.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof GenericArraySpliterator.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, GenericArraySpliterator.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof GenericArraySpliterator.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<GenericArraySpliterator.SignalSignatures[K]> extends [any, ...infer Q]
                ? Q
                : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Inherited properties
        get estimated_size(): number;
        get estimatedSize(): number;
        get is_size_known(): boolean;
        get isSizeKnown(): boolean;

        // Inherited methods
        get_element_type(): GObject.GType;
        try_split(): Spliterator;
        try_advance(consumer: Func): boolean;
        get_estimated_size(): number;
        get_is_size_known(): boolean;
        each(f: Func): void;
        each_chunk(f: EachChunkFunc): boolean;
        vfunc_try_split(): Spliterator;
        vfunc_try_advance(consumer: Func): boolean;
        vfunc_get_estimated_size(): number;
        vfunc_get_is_size_known(): boolean;
        vfunc_each(f: Func): void;
        vfunc_each_chunk(f: EachChunkFunc): boolean;
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

    namespace IteratorSpliterator {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::g-type': (pspec: GObject.ParamSpec) => void;
            'notify::g-dup-func': (pspec: GObject.ParamSpec) => void;
            'notify::g-destroy-func': (pspec: GObject.ParamSpec) => void;
            'notify::estimated-size': (pspec: GObject.ParamSpec) => void;
            'notify::is-size-known': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps, Spliterator.ConstructorProps {
            g_type: GObject.GType;
            gType: GObject.GType;
            g_dup_func: GObject.BoxedCopyFunc;
            gDupFunc: GObject.BoxedCopyFunc;
            g_destroy_func: GLib.DestroyNotify;
            gDestroyFunc: GLib.DestroyNotify;
        }
    }

    class IteratorSpliterator extends GObject.Object implements Spliterator {
        static $gtype: GObject.GType<IteratorSpliterator>;

        // Properties

        get g_type(): GObject.GType;
        get gType(): GObject.GType;
        get g_dup_func(): GObject.BoxedCopyFunc;
        get gDupFunc(): GObject.BoxedCopyFunc;
        get g_destroy_func(): GLib.DestroyNotify;
        get gDestroyFunc(): GLib.DestroyNotify;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: IteratorSpliterator.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<IteratorSpliterator.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](
            g_type: GObject.GType,
            g_dup_func: GObject.BoxedCopyFunc,
            iterator: Gee.Iterator,
            estimated_size: number,
            size_known: boolean,
        ): IteratorSpliterator;

        static from_collection(
            g_type: GObject.GType,
            g_dup_func: GObject.BoxedCopyFunc,
            collection: Gee.Collection,
        ): IteratorSpliterator;

        // Signals

        connect<K extends keyof IteratorSpliterator.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, IteratorSpliterator.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof IteratorSpliterator.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, IteratorSpliterator.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof IteratorSpliterator.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<IteratorSpliterator.SignalSignatures[K]> extends [any, ...infer Q]
                ? Q
                : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Inherited properties
        get estimated_size(): number;
        get estimatedSize(): number;
        get is_size_known(): boolean;
        get isSizeKnown(): boolean;

        // Inherited methods
        get_element_type(): GObject.GType;
        try_split(): Spliterator;
        try_advance(consumer: Func): boolean;
        get_estimated_size(): number;
        get_is_size_known(): boolean;
        each(f: Func): void;
        each_chunk(f: EachChunkFunc): boolean;
        vfunc_try_split(): Spliterator;
        vfunc_try_advance(consumer: Func): boolean;
        vfunc_get_estimated_size(): number;
        vfunc_get_is_size_known(): boolean;
        vfunc_each(f: Func): void;
        vfunc_each_chunk(f: EachChunkFunc): boolean;
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

    namespace ListSpliterator {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::g-type': (pspec: GObject.ParamSpec) => void;
            'notify::g-dup-func': (pspec: GObject.ParamSpec) => void;
            'notify::g-destroy-func': (pspec: GObject.ParamSpec) => void;
            'notify::estimated-size': (pspec: GObject.ParamSpec) => void;
            'notify::is-size-known': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps, Spliterator.ConstructorProps {
            g_type: GObject.GType;
            gType: GObject.GType;
            g_dup_func: GObject.BoxedCopyFunc;
            gDupFunc: GObject.BoxedCopyFunc;
            g_destroy_func: GLib.DestroyNotify;
            gDestroyFunc: GLib.DestroyNotify;
        }
    }

    class ListSpliterator extends GObject.Object implements Spliterator {
        static $gtype: GObject.GType<ListSpliterator>;

        // Properties

        get g_type(): GObject.GType;
        get gType(): GObject.GType;
        get g_dup_func(): GObject.BoxedCopyFunc;
        get gDupFunc(): GObject.BoxedCopyFunc;
        get g_destroy_func(): GLib.DestroyNotify;
        get gDestroyFunc(): GLib.DestroyNotify;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: ListSpliterator.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<ListSpliterator.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](
            g_type: GObject.GType,
            g_dup_func: GObject.BoxedCopyFunc,
            list: Gee.List,
            start: number,
            stop: number,
        ): ListSpliterator;

        // Signals

        connect<K extends keyof ListSpliterator.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ListSpliterator.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof ListSpliterator.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ListSpliterator.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof ListSpliterator.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<ListSpliterator.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Inherited properties
        get estimated_size(): number;
        get estimatedSize(): number;
        get is_size_known(): boolean;
        get isSizeKnown(): boolean;

        // Inherited methods
        get_element_type(): GObject.GType;
        try_split(): Spliterator;
        try_advance(consumer: Func): boolean;
        get_estimated_size(): number;
        get_is_size_known(): boolean;
        each(f: Func): void;
        each_chunk(f: EachChunkFunc): boolean;
        vfunc_try_split(): Spliterator;
        vfunc_try_advance(consumer: Func): boolean;
        vfunc_get_estimated_size(): number;
        vfunc_get_is_size_known(): boolean;
        vfunc_each(f: Func): void;
        vfunc_each_chunk(f: EachChunkFunc): boolean;
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

    namespace Optional {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::g-type': (pspec: GObject.ParamSpec) => void;
            'notify::g-dup-func': (pspec: GObject.ParamSpec) => void;
            'notify::g-destroy-func': (pspec: GObject.ParamSpec) => void;
            'notify::value-type': (pspec: GObject.ParamSpec) => void;
            'notify::value': (pspec: GObject.ParamSpec) => void;
            'notify::is-present': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            g_type: GObject.GType;
            gType: GObject.GType;
            g_dup_func: GObject.BoxedCopyFunc;
            gDupFunc: GObject.BoxedCopyFunc;
            g_destroy_func: GLib.DestroyNotify;
            gDestroyFunc: GLib.DestroyNotify;
            value_type: GObject.GType;
            valueType: GObject.GType;
            value: any;
            is_present: boolean;
            isPresent: boolean;
        }
    }

    class Optional extends GObject.Object {
        static $gtype: GObject.GType<Optional>;

        // Properties

        get g_type(): GObject.GType;
        get gType(): GObject.GType;
        get g_dup_func(): GObject.BoxedCopyFunc;
        get gDupFunc(): GObject.BoxedCopyFunc;
        get g_destroy_func(): GLib.DestroyNotify;
        get gDestroyFunc(): GLib.DestroyNotify;
        get value_type(): GObject.GType;
        get valueType(): GObject.GType;
        get value(): any;
        get is_present(): boolean;
        get isPresent(): boolean;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Optional.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Optional.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static empty(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc): Optional;

        static of(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, value: any): Optional;

        static ['new'](g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc): Optional;

        // Signals

        connect<K extends keyof Optional.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Optional.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Optional.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Optional.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Optional.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Optional.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        get_value_type(): GObject.GType;
        get_value(): any;
        get_is_present(): boolean;
        to_string(): string;
        if_present(consumer: GLib.Func): void;
        or_else(other: any): any;
        or_else_get(supplier: SupplyFunc): any;
        or_else_throw(error_supplier: SupplyFunc): any;
        or_else_fail(): any;
        filter(pred: Gee.Predicate): Optional;
        map(a_type: GObject.GType, a_dup_func: GObject.BoxedCopyFunc, mapper: Gee.MapFunc): Optional;
    }

    namespace Promise {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}
    }

    class Promise {
        static $gtype: GObject.GType<Promise>;

        // Fields

        ref_count: number;

        // Constructors

        _init(...args: any[]): void;

        static ['new'](g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc): Promise;

        // Signals

        connect<K extends keyof Promise.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Promise.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Promise.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Promise.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Promise.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Promise.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        get_future(): Future;
        set_value(value: any): void;
        set_exception(exception: GLib.Error): void;
    }

    namespace Seq {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::g-type': (pspec: GObject.ParamSpec) => void;
            'notify::g-dup-func': (pspec: GObject.ParamSpec) => void;
            'notify::g-destroy-func': (pspec: GObject.ParamSpec) => void;
            'notify::element-type': (pspec: GObject.ParamSpec) => void;
            'notify::task-env': (pspec: GObject.ParamSpec) => void;
            'notify::is-closed': (pspec: GObject.ParamSpec) => void;
            'notify::is-parallel': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            g_type: GObject.GType;
            gType: GObject.GType;
            g_dup_func: GObject.BoxedCopyFunc;
            gDupFunc: GObject.BoxedCopyFunc;
            g_destroy_func: GLib.DestroyNotify;
            gDestroyFunc: GLib.DestroyNotify;
            element_type: GObject.GType;
            elementType: GObject.GType;
            task_env: TaskEnv;
            taskEnv: TaskEnv;
            is_closed: boolean;
            isClosed: boolean;
            is_parallel: boolean;
            isParallel: boolean;
        }
    }

    class Seq extends GObject.Object {
        static $gtype: GObject.GType<Seq>;

        // Properties

        get g_type(): GObject.GType;
        get gType(): GObject.GType;
        get g_dup_func(): GObject.BoxedCopyFunc;
        get gDupFunc(): GObject.BoxedCopyFunc;
        get g_destroy_func(): GLib.DestroyNotify;
        get gDestroyFunc(): GLib.DestroyNotify;
        get element_type(): GObject.GType;
        get elementType(): GObject.GType;
        get task_env(): TaskEnv;
        get taskEnv(): TaskEnv;
        get is_closed(): boolean;
        get isClosed(): boolean;
        get is_parallel(): boolean;
        get isParallel(): boolean;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Seq.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Seq.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](
            g_type: GObject.GType,
            g_dup_func: GObject.BoxedCopyFunc,
            spliterator: Spliterator,
            env: TaskEnv,
        ): Seq;

        // Signals

        connect<K extends keyof Seq.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Seq.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Seq.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Seq.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Seq.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Seq.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        static of_array(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, array: any[], env: TaskEnv): Seq;
        static of_owned_array(
            g_type: GObject.GType,
            g_dup_func: GObject.BoxedCopyFunc,
            array: any[],
            env: TaskEnv,
        ): Seq;
        static of_generic_array(
            g_type: GObject.GType,
            g_dup_func: GObject.BoxedCopyFunc,
            array: any[],
            env: TaskEnv,
        ): Seq;
        static of_iterator(
            g_type: GObject.GType,
            g_dup_func: GObject.BoxedCopyFunc,
            iterator: Gee.Iterator,
            estimated_size: number,
            size_known: boolean,
            env: TaskEnv,
        ): Seq;
        static of_collection(
            g_type: GObject.GType,
            g_dup_func: GObject.BoxedCopyFunc,
            collection: Gee.Collection,
            env: TaskEnv,
        ): Seq;
        static of_list(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, list: Gee.List, env: TaskEnv): Seq;
        static of_supplier(
            g_type: GObject.GType,
            g_dup_func: GObject.BoxedCopyFunc,
            supplier: Supplier,
            env: TaskEnv,
        ): Seq;
        static of_supply_func(
            g_type: GObject.GType,
            g_dup_func: GObject.BoxedCopyFunc,
            func: SupplyFunc,
            env: TaskEnv,
        ): Seq;
        static iterate(
            g_type: GObject.GType,
            g_dup_func: GObject.BoxedCopyFunc,
            seed: any,
            pred: Gee.Predicate,
            next: Gee.MapFunc,
            env: TaskEnv,
        ): Seq;
        static empty(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc): Seq;

        // Methods

        get_element_type(): GObject.GType;
        get_task_env(): TaskEnv;
        get_is_closed(): boolean;
        close(): void;
        get_is_parallel(): boolean;
        sequential(): Seq;
        parallel(): Seq;
        iterator(): Gee.Iterator;
        spliterator(): Spliterator;
        count(): Future;
        distinct(hash: Gee.HashDataFunc, equal: Gee.EqualDataFunc): Seq;
        all_match(pred: Predicate): Future;
        any_match(pred: Predicate): Future;
        none_match(pred: Predicate): Future;
        find_any(pred: Predicate): Future;
        find_first(pred: Predicate): Future;
        skip(n: number): Seq;
        limit(n: number): Seq;
        chop(offset: number, length: number): Seq;
        skip_ordered(n: number): Seq;
        limit_ordered(n: number): Seq;
        chop_ordered(offset: number, length: number): Seq;
        filter(pred: Predicate): Seq;
        fold(
            a_type: GObject.GType,
            a_dup_func: GObject.BoxedCopyFunc,
            accumulator: FoldFunc,
            combiner: CombineFunc,
            identity: any,
        ): Future;
        reduce(accumulator: CombineFunc): Future;
        map(a_type: GObject.GType, a_dup_func: GObject.BoxedCopyFunc, mapper: MapFunc): Seq;
        flat_map(a_type: GObject.GType, a_dup_func: GObject.BoxedCopyFunc, mapper: FlatMapFunc): Seq;
        max(compare: GLib.CompareDataFunc): Future;
        min(compare: GLib.CompareDataFunc): Future;
        order_by(compare: GLib.CompareDataFunc): Seq;
        reverse_order_by(compare: GLib.CompareDataFunc): Seq;
        foreach(f: Func): Future;
        collect(
            r_type: GObject.GType,
            r_dup_func: GObject.BoxedCopyFunc,
            a_type: GObject.GType,
            a_dup_func: GObject.BoxedCopyFunc,
            collector: Collector,
        ): Future;
        collect_ordered(
            r_type: GObject.GType,
            r_dup_func: GObject.BoxedCopyFunc,
            a_type: GObject.GType,
            a_dup_func: GObject.BoxedCopyFunc,
            collector: Collector,
        ): Future;
        group_by(k_type: GObject.GType, k_dup_func: GObject.BoxedCopyFunc, classifier: MapFunc): Future;
        partition(pred: Predicate): Future;
        to_generic_array(): Future;
        to_list(): Future;
        to_set(hash: Gee.HashDataFunc, equal: Gee.EqualDataFunc): Future;
        to_map(
            k_type: GObject.GType,
            k_dup_func: GObject.BoxedCopyFunc,
            v_type: GObject.GType,
            v_dup_func: GObject.BoxedCopyFunc,
            key_mapper: MapFunc,
            val_mapper: MapFunc,
            merger: CombineFunc,
            key_hash: Gee.HashDataFunc,
            key_equal: Gee.EqualDataFunc,
            value_equal: Gee.EqualDataFunc,
        ): Future;
    }

    namespace SpliteratorTask {
        // Signal signatures
        interface SignalSignatures extends ForkJoinTask.SignalSignatures {
            'notify::r-type': (pspec: GObject.ParamSpec) => void;
            'notify::r-dup-func': (pspec: GObject.ParamSpec) => void;
            'notify::r-destroy-func': (pspec: GObject.ParamSpec) => void;
            'notify::g-type': (pspec: GObject.ParamSpec) => void;
            'notify::g-dup-func': (pspec: GObject.ParamSpec) => void;
            'notify::g-destroy-func': (pspec: GObject.ParamSpec) => void;
            'notify::spliterator': (pspec: GObject.ParamSpec) => void;
            'notify::left-child': (pspec: GObject.ParamSpec) => void;
            'notify::right-child': (pspec: GObject.ParamSpec) => void;
            'notify::is-leaf': (pspec: GObject.ParamSpec) => void;
            'notify::is-leftmost': (pspec: GObject.ParamSpec) => void;
            'notify::empty-result': (pspec: GObject.ParamSpec) => void;
            'notify::parent': (pspec: GObject.ParamSpec) => void;
            'notify::root': (pspec: GObject.ParamSpec) => void;
            'notify::is-root': (pspec: GObject.ParamSpec) => void;
            'notify::threshold': (pspec: GObject.ParamSpec) => void;
            'notify::max-depth': (pspec: GObject.ParamSpec) => void;
            'notify::depth': (pspec: GObject.ParamSpec) => void;
            'notify::executor': (pspec: GObject.ParamSpec) => void;
            'notify::promise': (pspec: GObject.ParamSpec) => void;
            'notify::shared-result': (pspec: GObject.ParamSpec) => void;
            'notify::is-cancelled': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends ForkJoinTask.ConstructorProps {
            r_type: GObject.GType;
            rType: GObject.GType;
            r_dup_func: GObject.BoxedCopyFunc;
            rDupFunc: GObject.BoxedCopyFunc;
            r_destroy_func: GLib.DestroyNotify;
            rDestroyFunc: GLib.DestroyNotify;
            g_type: GObject.GType;
            gType: GObject.GType;
            g_dup_func: GObject.BoxedCopyFunc;
            gDupFunc: GObject.BoxedCopyFunc;
            g_destroy_func: GLib.DestroyNotify;
            gDestroyFunc: GLib.DestroyNotify;
            spliterator: Spliterator;
            left_child: SpliteratorTask;
            leftChild: SpliteratorTask;
            right_child: SpliteratorTask;
            rightChild: SpliteratorTask;
            is_leaf: boolean;
            isLeaf: boolean;
            is_leftmost: boolean;
            isLeftmost: boolean;
            empty_result: any;
            emptyResult: any;
        }
    }

    abstract class SpliteratorTask extends ForkJoinTask {
        static $gtype: GObject.GType<SpliteratorTask>;

        // Properties

        get r_type(): GObject.GType;
        get rType(): GObject.GType;
        get r_dup_func(): GObject.BoxedCopyFunc;
        get rDupFunc(): GObject.BoxedCopyFunc;
        get r_destroy_func(): GLib.DestroyNotify;
        get rDestroyFunc(): GLib.DestroyNotify;
        get g_type(): GObject.GType;
        get gType(): GObject.GType;
        get g_dup_func(): GObject.BoxedCopyFunc;
        get gDupFunc(): GObject.BoxedCopyFunc;
        get g_destroy_func(): GLib.DestroyNotify;
        get gDestroyFunc(): GLib.DestroyNotify;
        get spliterator(): Spliterator;
        get left_child(): SpliteratorTask;
        get leftChild(): SpliteratorTask;
        get right_child(): SpliteratorTask;
        get rightChild(): SpliteratorTask;
        get is_leaf(): boolean;
        get isLeaf(): boolean;
        get is_leftmost(): boolean;
        get isLeftmost(): boolean;
        get empty_result(): any;
        get emptyResult(): any;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: SpliteratorTask.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<SpliteratorTask.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        connect<K extends keyof SpliteratorTask.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, SpliteratorTask.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof SpliteratorTask.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, SpliteratorTask.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof SpliteratorTask.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<SpliteratorTask.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods

        vfunc_get_empty_result(): any;
        vfunc_leaf_compute(): any;
        vfunc_merge_results(left: any, right: any): any;
        vfunc_make_child(spliterator: Spliterator): SpliteratorTask;

        // Methods

        get_spliterator(): Spliterator;
        get_left_child(): SpliteratorTask;
        get_right_child(): SpliteratorTask;
        get_is_leaf(): boolean;
        get_is_leftmost(): boolean;
        cancel_later_nodes(): void;
        get_empty_result(): any;
        leaf_compute(): any;
        merge_results(left: any, right: any): any;
        make_child(spliterator: Spliterator): SpliteratorTask;
    }

    namespace SubArray {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::g-type': (pspec: GObject.ParamSpec) => void;
            'notify::g-dup-func': (pspec: GObject.ParamSpec) => void;
            'notify::g-destroy-func': (pspec: GObject.ParamSpec) => void;
            'notify::size': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps
            extends GObject.Object.ConstructorProps,
                Gee.Traversable.ConstructorProps,
                Gee.Iterable.ConstructorProps {
            g_type: GObject.GType;
            gType: GObject.GType;
            g_dup_func: GObject.BoxedCopyFunc;
            gDupFunc: GObject.BoxedCopyFunc;
            g_destroy_func: GLib.DestroyNotify;
            gDestroyFunc: GLib.DestroyNotify;
            size: number;
        }
    }

    class SubArray extends GObject.Object implements Gee.Traversable, Gee.Iterable {
        static $gtype: GObject.GType<SubArray>;

        // Properties

        get g_type(): GObject.GType;
        get gType(): GObject.GType;
        get g_dup_func(): GObject.BoxedCopyFunc;
        get gDupFunc(): GObject.BoxedCopyFunc;
        get g_destroy_func(): GLib.DestroyNotify;
        get gDestroyFunc(): GLib.DestroyNotify;
        get size(): number;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: SubArray.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<SubArray.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, data: any[]): SubArray;

        static from_sub_array(
            g_type: GObject.GType,
            g_dup_func: GObject.BoxedCopyFunc,
            array: SubArray,
            start: number,
            stop: number,
        ): SubArray;

        // Signals

        connect<K extends keyof SubArray.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, SubArray.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof SubArray.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, SubArray.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof SubArray.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<SubArray.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        get_data(): any[];
        // Conflicted with GObject.Object.get_data
        get_data(...args: never[]): any;
        get_size(): number;
        get(index: number): any;
        set(index: number, item: any): void;
        // Conflicted with GObject.Object.set
        set(...args: never[]): any;
        sort(compare_func: GLib.CompareDataFunc): void;
        copy(start: number, src: SubArray, src_start: number, count: number): void;
        copy_array(start: number, src: any[], src_start: number, count: number): void;
        sub_array(start: number, stop: number): SubArray;

        // Inherited methods
        foreach(f: Gee.ForallFunc): boolean;
        stream(a_type: GObject.GType, a_dup_func: GObject.BoxedCopyFunc, f: Gee.StreamFunc): Gee.Iterator;
        fold(a_type: GObject.GType, a_dup_func: GObject.BoxedCopyFunc, f: Gee.FoldFunc, seed: any): any;
        map(a_type: GObject.GType, a_dup_func: GObject.BoxedCopyFunc, f: Gee.MapFunc): Gee.Iterator;
        scan(a_type: GObject.GType, a_dup_func: GObject.BoxedCopyFunc, f: Gee.FoldFunc, seed: any): Gee.Iterator;
        filter(pred: Gee.Predicate): Gee.Iterator;
        chop(offset: number, length: number): Gee.Iterator;
        flat_map(a_type: GObject.GType, a_dup_func: GObject.BoxedCopyFunc, f: Gee.FlatMapFunc): Gee.Iterator;
        tee(forks: number): Gee.Iterator[];
        first_match(pred: Gee.Predicate): any | null;
        any_match(pred: Gee.Predicate): boolean;
        all_match(pred: Gee.Predicate): boolean;
        max(compare: GLib.CompareDataFunc): any;
        min(compare: GLib.CompareDataFunc): any;
        order_by(compare?: GLib.CompareDataFunc | null): Gee.Iterator;
        get_element_type(): GObject.GType;
        vfunc_foreach(f: Gee.ForallFunc): boolean;
        vfunc_stream(a_type: GObject.GType, a_dup_func: GObject.BoxedCopyFunc, f: Gee.StreamFunc): Gee.Iterator;
        vfunc_fold(a_type: GObject.GType, a_dup_func: GObject.BoxedCopyFunc, f: Gee.FoldFunc, seed: any): any;
        vfunc_map(a_type: GObject.GType, a_dup_func: GObject.BoxedCopyFunc, f: Gee.MapFunc): Gee.Iterator;
        vfunc_scan(a_type: GObject.GType, a_dup_func: GObject.BoxedCopyFunc, f: Gee.FoldFunc, seed: any): Gee.Iterator;
        vfunc_filter(pred: Gee.Predicate): Gee.Iterator;
        vfunc_chop(offset: number, length: number): Gee.Iterator;
        vfunc_flat_map(a_type: GObject.GType, a_dup_func: GObject.BoxedCopyFunc, f: Gee.FlatMapFunc): Gee.Iterator;
        vfunc_tee(forks: number): Gee.Iterator[];
        vfunc_first_match(pred: Gee.Predicate): any | null;
        vfunc_any_match(pred: Gee.Predicate): boolean;
        vfunc_all_match(pred: Gee.Predicate): boolean;
        vfunc_max(compare: GLib.CompareDataFunc): any;
        vfunc_min(compare: GLib.CompareDataFunc): any;
        vfunc_order_by(compare?: GLib.CompareDataFunc | null): Gee.Iterator;
        vfunc_get_element_type(): GObject.GType;
        iterator(): Gee.Iterator;
        vfunc_iterator(): Gee.Iterator;
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

    namespace SubArraySpliterator {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::g-type': (pspec: GObject.ParamSpec) => void;
            'notify::g-dup-func': (pspec: GObject.ParamSpec) => void;
            'notify::g-destroy-func': (pspec: GObject.ParamSpec) => void;
            'notify::estimated-size': (pspec: GObject.ParamSpec) => void;
            'notify::is-size-known': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps, Spliterator.ConstructorProps {
            g_type: GObject.GType;
            gType: GObject.GType;
            g_dup_func: GObject.BoxedCopyFunc;
            gDupFunc: GObject.BoxedCopyFunc;
            g_destroy_func: GLib.DestroyNotify;
            gDestroyFunc: GLib.DestroyNotify;
        }
    }

    class SubArraySpliterator extends GObject.Object implements Spliterator {
        static $gtype: GObject.GType<SubArraySpliterator>;

        // Properties

        get g_type(): GObject.GType;
        get gType(): GObject.GType;
        get g_dup_func(): GObject.BoxedCopyFunc;
        get gDupFunc(): GObject.BoxedCopyFunc;
        get g_destroy_func(): GLib.DestroyNotify;
        get gDestroyFunc(): GLib.DestroyNotify;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: SubArraySpliterator.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<SubArraySpliterator.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](
            g_type: GObject.GType,
            g_dup_func: GObject.BoxedCopyFunc,
            array: SubArray,
            start: number,
            stop: number,
        ): SubArraySpliterator;

        // Signals

        connect<K extends keyof SubArraySpliterator.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, SubArraySpliterator.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof SubArraySpliterator.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, SubArraySpliterator.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof SubArraySpliterator.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<SubArraySpliterator.SignalSignatures[K]> extends [any, ...infer Q]
                ? Q
                : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Inherited properties
        get estimated_size(): number;
        get estimatedSize(): number;
        get is_size_known(): boolean;
        get isSizeKnown(): boolean;

        // Inherited methods
        get_element_type(): GObject.GType;
        try_split(): Spliterator;
        try_advance(consumer: Func): boolean;
        get_estimated_size(): number;
        get_is_size_known(): boolean;
        each(f: Func): void;
        each_chunk(f: EachChunkFunc): boolean;
        vfunc_try_split(): Spliterator;
        vfunc_try_advance(consumer: Func): boolean;
        vfunc_get_estimated_size(): number;
        vfunc_get_is_size_known(): boolean;
        vfunc_each(f: Func): void;
        vfunc_each_chunk(f: EachChunkFunc): boolean;
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

    namespace SupplierSpliterator {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::g-type': (pspec: GObject.ParamSpec) => void;
            'notify::g-dup-func': (pspec: GObject.ParamSpec) => void;
            'notify::g-destroy-func': (pspec: GObject.ParamSpec) => void;
            'notify::estimated-size': (pspec: GObject.ParamSpec) => void;
            'notify::is-size-known': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps, Spliterator.ConstructorProps {
            g_type: GObject.GType;
            gType: GObject.GType;
            g_dup_func: GObject.BoxedCopyFunc;
            gDupFunc: GObject.BoxedCopyFunc;
            g_destroy_func: GLib.DestroyNotify;
            gDestroyFunc: GLib.DestroyNotify;
        }
    }

    class SupplierSpliterator extends GObject.Object implements Spliterator {
        static $gtype: GObject.GType<SupplierSpliterator>;

        // Properties

        get g_type(): GObject.GType;
        get gType(): GObject.GType;
        get g_dup_func(): GObject.BoxedCopyFunc;
        get gDupFunc(): GObject.BoxedCopyFunc;
        get g_destroy_func(): GLib.DestroyNotify;
        get gDestroyFunc(): GLib.DestroyNotify;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: SupplierSpliterator.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<SupplierSpliterator.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](
            g_type: GObject.GType,
            g_dup_func: GObject.BoxedCopyFunc,
            supplier: Supplier,
        ): SupplierSpliterator;

        // Signals

        connect<K extends keyof SupplierSpliterator.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, SupplierSpliterator.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof SupplierSpliterator.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, SupplierSpliterator.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof SupplierSpliterator.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<SupplierSpliterator.SignalSignatures[K]> extends [any, ...infer Q]
                ? Q
                : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Inherited properties
        get estimated_size(): number;
        get estimatedSize(): number;
        get is_size_known(): boolean;
        get isSizeKnown(): boolean;

        // Inherited methods
        get_element_type(): GObject.GType;
        try_split(): Spliterator;
        try_advance(consumer: Func): boolean;
        get_estimated_size(): number;
        get_is_size_known(): boolean;
        each(f: Func): void;
        each_chunk(f: EachChunkFunc): boolean;
        vfunc_try_split(): Spliterator;
        vfunc_try_advance(consumer: Func): boolean;
        vfunc_get_estimated_size(): number;
        vfunc_get_is_size_known(): boolean;
        vfunc_each(f: Func): void;
        vfunc_each_chunk(f: EachChunkFunc): boolean;
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

    namespace TaskEnv {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::executor': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            executor: Executor;
        }
    }

    abstract class TaskEnv extends GObject.Object {
        static $gtype: GObject.GType<TaskEnv>;

        // Properties

        get executor(): Executor;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: TaskEnv.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<TaskEnv.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        connect<K extends keyof TaskEnv.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, TaskEnv.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof TaskEnv.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, TaskEnv.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof TaskEnv.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<TaskEnv.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        static get_default_task_env(): TaskEnv;
        static set_default_task_env(task_env: TaskEnv): void;
        static get_common_task_env(): TaskEnv;
        static push(task_env: TaskEnv): void;
        static pop(): void;
        static apply(task_env: TaskEnv, func: VoidFunc): void;

        // Virtual methods

        vfunc_get_executor(): Executor;
        vfunc_resolve_threshold(elements: number, threads: number): number;
        vfunc_resolve_max_depth(elements: number, threads: number): number;

        // Methods

        get_executor(): Executor;
        resolve_threshold(elements: number, threads: number): number;
        resolve_max_depth(elements: number, threads: number): number;
    }

    namespace WaitGroup {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    class WaitGroup extends GObject.Object {
        static $gtype: GObject.GType<WaitGroup>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: WaitGroup.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<WaitGroup.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): WaitGroup;

        // Signals

        connect<K extends keyof WaitGroup.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, WaitGroup.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof WaitGroup.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, WaitGroup.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof WaitGroup.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<WaitGroup.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        add(delta: number): void;
        done(): void;
        task(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, func: TaskFunc): Future;
        run(func: VoidTaskFunc): Future;
        wait(): void;
        wait_until(end_time: number): boolean;
    }

    namespace WorkerPool {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::max-threads': (pspec: GObject.ParamSpec) => void;
            'notify::num-threads': (pspec: GObject.ParamSpec) => void;
            'notify::factory': (pspec: GObject.ParamSpec) => void;
            'notify::is-terminating': (pspec: GObject.ParamSpec) => void;
            'notify::is-terminated': (pspec: GObject.ParamSpec) => void;
            'notify::is-terminating-started': (pspec: GObject.ParamSpec) => void;
            'notify::parallels': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps, Executor.ConstructorProps {
            max_threads: number;
            maxThreads: number;
            num_threads: number;
            numThreads: number;
            factory: ThreadFactory;
            is_terminating: boolean;
            isTerminating: boolean;
            is_terminated: boolean;
            isTerminated: boolean;
            is_terminating_started: boolean;
            isTerminatingStarted: boolean;
        }
    }

    class WorkerPool extends GObject.Object implements Executor {
        static $gtype: GObject.GType<WorkerPool>;

        // Properties

        get max_threads(): number;
        set max_threads(val: number);
        get maxThreads(): number;
        set maxThreads(val: number);
        get num_threads(): number;
        get numThreads(): number;
        get factory(): ThreadFactory;
        get is_terminating(): boolean;
        get isTerminating(): boolean;
        get is_terminated(): boolean;
        get isTerminated(): boolean;
        get is_terminating_started(): boolean;
        get isTerminatingStarted(): boolean;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: WorkerPool.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<WorkerPool.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static with_defaults(): WorkerPool;

        static ['new'](parallels: number, factory: ThreadFactory): WorkerPool;

        // Signals

        connect<K extends keyof WorkerPool.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, WorkerPool.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof WorkerPool.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, WorkerPool.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof WorkerPool.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<WorkerPool.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        static get_default_factory(): ThreadFactory;

        // Methods

        get_max_threads(): number;
        set_max_threads(value: number): void;
        get_num_threads(): number;
        get_factory(): ThreadFactory;
        get_is_terminating(): boolean;
        get_is_terminated(): boolean;
        get_is_terminating_started(): boolean;
        terminate(): void;
        terminate_now(): void;
        wait_termination(): void;
        wait_termination_until(end_time: number): void;

        // Inherited properties
        get parallels(): number;

        // Inherited methods
        submit(task: Task): void;
        get_parallels(): number;
        vfunc_submit(task: Task): void;
        vfunc_get_parallels(): number;
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

    namespace WorkerThread {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::thread': (pspec: GObject.ParamSpec) => void;
            'notify::pool': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::is-started': (pspec: GObject.ParamSpec) => void;
            'notify::is-terminated': (pspec: GObject.ParamSpec) => void;
            'notify::is-alive': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            thread: GLib.Thread;
            pool: WorkerPool;
            name: string;
            is_started: boolean;
            isStarted: boolean;
            is_terminated: boolean;
            isTerminated: boolean;
            is_alive: boolean;
            isAlive: boolean;
        }
    }

    class WorkerThread extends GObject.Object {
        static $gtype: GObject.GType<WorkerThread>;

        // Properties

        get thread(): GLib.Thread;
        get pool(): WorkerPool;
        get name(): string;
        get is_started(): boolean;
        get isStarted(): boolean;
        get is_terminated(): boolean;
        get isTerminated(): boolean;
        get is_alive(): boolean;
        get isAlive(): boolean;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: WorkerThread.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<WorkerThread.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](pool: WorkerPool): WorkerThread;

        // Signals

        connect<K extends keyof WorkerThread.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, WorkerThread.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof WorkerThread.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, WorkerThread.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof WorkerThread.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<WorkerThread.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        static get_by(thread: GLib.Thread): WorkerThread;
        static self(): WorkerThread;

        // Methods

        get_thread(): GLib.Thread;
        get_pool(): WorkerPool;
        get_name(): string;
        get_is_started(): boolean;
        get_is_terminated(): boolean;
        get_is_alive(): boolean;
        start(): void;
        join(): void;
        blocking(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, func: TaskFunc): any;
    }

    namespace Wrapper {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::g-type': (pspec: GObject.ParamSpec) => void;
            'notify::g-dup-func': (pspec: GObject.ParamSpec) => void;
            'notify::g-destroy-func': (pspec: GObject.ParamSpec) => void;
            'notify::value': (pspec: GObject.ParamSpec) => void;
            'notify::value-type': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            g_type: GObject.GType;
            gType: GObject.GType;
            g_dup_func: GObject.BoxedCopyFunc;
            gDupFunc: GObject.BoxedCopyFunc;
            g_destroy_func: GLib.DestroyNotify;
            gDestroyFunc: GLib.DestroyNotify;
            value: any;
            value_type: GObject.GType;
            valueType: GObject.GType;
        }
    }

    class Wrapper extends GObject.Object {
        static $gtype: GObject.GType<Wrapper>;

        // Properties

        get g_type(): GObject.GType;
        get gType(): GObject.GType;
        get g_dup_func(): GObject.BoxedCopyFunc;
        get gDupFunc(): GObject.BoxedCopyFunc;
        get g_destroy_func(): GLib.DestroyNotify;
        get gDestroyFunc(): GLib.DestroyNotify;
        get value(): any;
        get value_type(): GObject.GType;
        get valueType(): GObject.GType;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Wrapper.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Wrapper.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, value: any): Wrapper;

        // Signals

        connect<K extends keyof Wrapper.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Wrapper.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Wrapper.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Wrapper.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Wrapper.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Wrapper.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        get_value(): any;
        get_value_type(): GObject.GType;
    }

    type ArraySpliteratorClass = typeof ArraySpliterator;
    abstract class ArraySpliteratorPrivate {
        static $gtype: GObject.GType<ArraySpliteratorPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type ForkJoinTaskClass = typeof ForkJoinTask;
    abstract class ForkJoinTaskPrivate {
        static $gtype: GObject.GType<ForkJoinTaskPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type ForkJoinTaskSharedResultClass = typeof ForkJoinTaskSharedResult;
    abstract class ForkJoinTaskSharedResultPrivate {
        static $gtype: GObject.GType<ForkJoinTaskSharedResultPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type FuncTaskClass = typeof FuncTask;
    abstract class FuncTaskPrivate {
        static $gtype: GObject.GType<FuncTaskPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type FutureClass = typeof Future;
    abstract class FuturePrivate {
        static $gtype: GObject.GType<FuturePrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type GenericArraySpliteratorClass = typeof GenericArraySpliterator;
    abstract class GenericArraySpliteratorPrivate {
        static $gtype: GObject.GType<GenericArraySpliteratorPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type IteratorSpliteratorClass = typeof IteratorSpliterator;
    abstract class IteratorSpliteratorPrivate {
        static $gtype: GObject.GType<IteratorSpliteratorPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type ListSpliteratorClass = typeof ListSpliterator;
    abstract class ListSpliteratorPrivate {
        static $gtype: GObject.GType<ListSpliteratorPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type OptionalClass = typeof Optional;
    abstract class OptionalPrivate {
        static $gtype: GObject.GType<OptionalPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type PromiseClass = typeof Promise;
    abstract class PromisePrivate {
        static $gtype: GObject.GType<PromisePrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type SeqClass = typeof Seq;
    abstract class SeqPrivate {
        static $gtype: GObject.GType<SeqPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type SpliteratorTaskClass = typeof SpliteratorTask;
    abstract class SpliteratorTaskPrivate {
        static $gtype: GObject.GType<SpliteratorTaskPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type SubArrayClass = typeof SubArray;
    abstract class SubArrayPrivate {
        static $gtype: GObject.GType<SubArrayPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type SubArraySpliteratorClass = typeof SubArraySpliterator;
    abstract class SubArraySpliteratorPrivate {
        static $gtype: GObject.GType<SubArraySpliteratorPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type SupplierSpliteratorClass = typeof SupplierSpliterator;
    abstract class SupplierSpliteratorPrivate {
        static $gtype: GObject.GType<SupplierSpliteratorPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type TaskEnvClass = typeof TaskEnv;
    abstract class TaskEnvPrivate {
        static $gtype: GObject.GType<TaskEnvPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type WaitGroupClass = typeof WaitGroup;
    abstract class WaitGroupPrivate {
        static $gtype: GObject.GType<WaitGroupPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type WorkerPoolClass = typeof WorkerPool;
    abstract class WorkerPoolPrivate {
        static $gtype: GObject.GType<WorkerPoolPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type WorkerThreadClass = typeof WorkerThread;
    abstract class WorkerThreadPrivate {
        static $gtype: GObject.GType<WorkerThreadPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type WrapperClass = typeof Wrapper;
    abstract class WrapperPrivate {
        static $gtype: GObject.GType<WrapperPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type ChannelIface = typeof Channel;
    type ChannelBaseIface = typeof ChannelBase;
    type CollectorIface = typeof Collector;
    type ExecutorIface = typeof Executor;
    type ReceiverIface = typeof Receiver;
    type ResultIface = typeof Result;
    type SenderIface = typeof Sender;
    type SpliteratorIface = typeof Spliterator;
    type SupplierIface = typeof Supplier;
    type TaskIface = typeof Task;
    type ThreadFactoryIface = typeof ThreadFactory;
    class CacheLinePad {
        static $gtype: GObject.GType<CacheLinePad>;

        // Constructors

        _init(...args: any[]): void;
    }

    namespace Channel {
        // Constructor properties interface

        interface ConstructorProps extends Sender.ConstructorProps {}
    }

    export interface ChannelNamespace {
        $gtype: GObject.GType<Channel>;
        prototype: Channel;

        bounded(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, proposed_capacity: number): Channel;
        unbounded(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc): Channel;
    }
    interface Channel extends Sender {}

    export const Channel: ChannelNamespace & {
        new (): Channel; // This allows `obj instanceof Channel`
    };

    namespace ChannelBase {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            capacity: Optional;
            length: number;
        }
    }

    export interface ChannelBaseNamespace {
        $gtype: GObject.GType<ChannelBase>;
        prototype: ChannelBase;
    }
    interface ChannelBase extends GObject.Object {
        // Properties

        get capacity(): Optional;
        get length(): number;

        // Methods

        get_capacity(): Optional;
        get_length(): number;
        get_is_full(): boolean;
        get_is_empty(): boolean;
        close(): void;

        // Virtual methods

        vfunc_get_capacity(): Optional;
        vfunc_get_length(): number;
        vfunc_get_is_full(): boolean;
        vfunc_get_is_empty(): boolean;
        vfunc_close(): void;
    }

    export const ChannelBase: ChannelBaseNamespace & {
        new (): ChannelBase; // This allows `obj instanceof ChannelBase`
    };

    namespace Collector {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            features: CollectorFeatures;
        }
    }

    export interface CollectorNamespace {
        $gtype: GObject.GType<Collector>;
        prototype: Collector;
    }
    interface Collector extends GObject.Object {
        // Properties

        get features(): CollectorFeatures;

        // Methods

        get_features(): CollectorFeatures;
        create_accumulator(): any;
        accumulate(g: any, a: any): void;
        combine(a: any, b: any): any;
        finish(a: any): any;

        // Virtual methods

        vfunc_get_features(): CollectorFeatures;
        vfunc_create_accumulator(): any;
        vfunc_accumulate(g: any, a: any): void;
        vfunc_combine(a: any, b: any): any;
        vfunc_finish(a: any): any;
    }

    export const Collector: CollectorNamespace & {
        new (): Collector; // This allows `obj instanceof Collector`
    };

    namespace Executor {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            parallels: number;
        }
    }

    export interface ExecutorNamespace {
        $gtype: GObject.GType<Executor>;
        prototype: Executor;
    }
    interface Executor extends GObject.Object {
        // Properties

        get parallels(): number;

        // Methods

        submit(task: Task): void;
        get_parallels(): number;

        // Virtual methods

        vfunc_submit(task: Task): void;
        vfunc_get_parallels(): number;
    }

    export const Executor: ExecutorNamespace & {
        new (): Executor; // This allows `obj instanceof Executor`
    };

    namespace Receiver {
        // Constructor properties interface

        interface ConstructorProps extends ChannelBase.ConstructorProps {}
    }

    export interface ReceiverNamespace {
        $gtype: GObject.GType<Receiver>;
        prototype: Receiver;
    }
    interface Receiver extends ChannelBase {
        // Methods

        recv(): Result;
        recv_until(end_time: number): Result;
        try_recv(): Result;

        // Virtual methods

        vfunc_recv(): Result;
        vfunc_recv_until(end_time: number): Result;
        vfunc_try_recv(): Result;
    }

    export const Receiver: ReceiverNamespace & {
        new (): Receiver; // This allows `obj instanceof Receiver`
    };

    namespace Result {
        interface TransformFunc {
            (
                a_type: GObject.GType,
                a_dup_func: GObject.BoxedCopyFunc,
                g_type: GObject.GType,
                g_dup_func: GObject.BoxedCopyFunc,
                result: Result,
            ): Result;
        }
        interface FlatMapFunc {
            (
                a_type: GObject.GType,
                a_dup_func: GObject.BoxedCopyFunc,
                g_type: GObject.GType,
                g_dup_func: GObject.BoxedCopyFunc,
                value: any,
            ): Result;
        }
        interface MapFunc {
            (
                a_type: GObject.GType,
                a_dup_func: GObject.BoxedCopyFunc,
                g_type: GObject.GType,
                g_dup_func: GObject.BoxedCopyFunc,
                value: any,
            ): any;
        }
        interface MapErrorFunc {
            (err: GLib.Error): GLib.Error;
        }
        interface LightMapFunc {
            (
                a_type: GObject.GType,
                a_dup_func: GObject.BoxedCopyFunc,
                g_type: GObject.GType,
                g_dup_func: GObject.BoxedCopyFunc,
                value: any,
            ): any;
        }
        interface ZipFunc {
            (
                a_type: GObject.GType,
                a_dup_func: GObject.BoxedCopyFunc,
                b_type: GObject.GType,
                b_dup_func: GObject.BoxedCopyFunc,
                c_type: GObject.GType,
                c_dup_func: GObject.BoxedCopyFunc,
                a: any,
                b: any,
            ): any;
        }

        // Constructor properties interface

        interface ConstructorProps extends Gee.Hashable.ConstructorProps {}
    }

    export interface ResultNamespace {
        $gtype: GObject.GType<Result>;
        prototype: Result;

        of(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, value: any): Result;
        err(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, exception: GLib.Error): Result;
    }
    interface Result extends Gee.Hashable {
        // Methods

        get_value_type(): GObject.GType;
        get_value(): any;
        get_exception(): GLib.Error;
        get_is_err(): boolean;
        ok(): Result;
        ok_with(expected: any, equal: Gee.EqualDataFunc): Result;
        future(): Future;
        get(): any;
        transform(a_type: GObject.GType, a_dup_func: GObject.BoxedCopyFunc, func: Result.TransformFunc): Result;
        flat_map(a_type: GObject.GType, a_dup_func: GObject.BoxedCopyFunc, func: FlatMapFunc): Result;
        map(a_type: GObject.GType, a_dup_func: GObject.BoxedCopyFunc, func: MapFunc): Result;
        map_err(func: Result.MapErrorFunc): Result;
        zip(
            a_type: GObject.GType,
            a_dup_func: GObject.BoxedCopyFunc,
            b_type: GObject.GType,
            b_dup_func: GObject.BoxedCopyFunc,
            zip_func: Result.ZipFunc,
            second: Result,
        ): Result;
        then(func: GLib.Func): Result;
        and_then(func: Func): Result;

        // Virtual methods

        vfunc_future(): Future;
        vfunc_get(): any;
        vfunc_transform(a_type: GObject.GType, a_dup_func: GObject.BoxedCopyFunc, func: Result.TransformFunc): Result;
        vfunc_flat_map(a_type: GObject.GType, a_dup_func: GObject.BoxedCopyFunc, func: FlatMapFunc): Result;
        vfunc_map(a_type: GObject.GType, a_dup_func: GObject.BoxedCopyFunc, func: MapFunc): Result;
        vfunc_map_err(func: Result.MapErrorFunc): Result;
        vfunc_zip(
            a_type: GObject.GType,
            a_dup_func: GObject.BoxedCopyFunc,
            b_type: GObject.GType,
            b_dup_func: GObject.BoxedCopyFunc,
            zip_func: Result.ZipFunc,
            second: Result,
        ): Result;
        vfunc_then(func: GLib.Func): Result;
        vfunc_and_then(func: Func): Result;
    }

    export const Result: ResultNamespace & {
        new (): Result; // This allows `obj instanceof Result`
    };

    namespace Sender {
        // Constructor properties interface

        interface ConstructorProps extends ChannelBase.ConstructorProps {}
    }

    export interface SenderNamespace {
        $gtype: GObject.GType<Sender>;
        prototype: Sender;
    }
    interface Sender extends ChannelBase {
        // Methods

        send(data: any): Result;
        send_until(data: any, end_time: number): Result;
        try_send(data: any): Result;

        // Virtual methods

        vfunc_send(data: any): Result;
        vfunc_send_until(data: any, end_time: number): Result;
        vfunc_try_send(data: any): Result;
    }

    export const Sender: SenderNamespace & {
        new (): Sender; // This allows `obj instanceof Sender`
    };

    namespace Spliterator {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            estimated_size: number;
            estimatedSize: number;
            is_size_known: boolean;
            isSizeKnown: boolean;
        }
    }

    export interface SpliteratorNamespace {
        $gtype: GObject.GType<Spliterator>;
        prototype: Spliterator;

        empty(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc): Spliterator;
    }
    interface Spliterator extends GObject.Object {
        // Properties

        get estimated_size(): number;
        get estimatedSize(): number;
        get is_size_known(): boolean;
        get isSizeKnown(): boolean;

        // Methods

        get_element_type(): GObject.GType;
        try_split(): Spliterator;
        try_advance(consumer: Func): boolean;
        get_estimated_size(): number;
        get_is_size_known(): boolean;
        each(f: Func): void;
        each_chunk(f: EachChunkFunc): boolean;

        // Virtual methods

        vfunc_try_split(): Spliterator;
        vfunc_try_advance(consumer: Func): boolean;
        vfunc_get_estimated_size(): number;
        vfunc_get_is_size_known(): boolean;
        vfunc_each(f: Func): void;
        vfunc_each_chunk(f: EachChunkFunc): boolean;
    }

    export const Spliterator: SpliteratorNamespace & {
        new (): Spliterator; // This allows `obj instanceof Spliterator`
    };

    namespace Supplier {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    export interface SupplierNamespace {
        $gtype: GObject.GType<Supplier>;
        prototype: Supplier;

        from_func(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, func: SupplyFunc): Supplier;
    }
    interface Supplier extends GObject.Object {
        // Methods

        supply(): any;

        // Virtual methods

        vfunc_supply(): any;
    }

    export const Supplier: SupplierNamespace & {
        new (): Supplier; // This allows `obj instanceof Supplier`
    };

    namespace Task {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            future: Future;
        }
    }

    export interface TaskNamespace {
        $gtype: GObject.GType<Task>;
        prototype: Task;
    }
    interface Task extends GObject.Object {
        // Properties

        get future(): Future;

        // Methods

        get_future(): Future;
        compute(): void;
        invoke(): void;

        // Virtual methods

        vfunc_get_future(): Future;
        vfunc_compute(): void;
    }

    export const Task: TaskNamespace & {
        new (): Task; // This allows `obj instanceof Task`
    };

    namespace ThreadFactory {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    export interface ThreadFactoryNamespace {
        $gtype: GObject.GType<ThreadFactory>;
        prototype: ThreadFactory;
    }
    interface ThreadFactory extends GObject.Object {
        // Methods

        create_thread(pool: WorkerPool): WorkerThread;

        // Virtual methods

        vfunc_create_thread(pool: WorkerPool): WorkerThread;
    }

    export const ThreadFactory: ThreadFactoryNamespace & {
        new (): ThreadFactory; // This allows `obj instanceof ThreadFactory`
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

export default Gpseq;

// END
