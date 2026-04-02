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

export namespace Gee {
    /**
     * Gee-0.8
     */

    /**
     * @gir-type Struct
     */
    class FutureError extends GLib.Error {
        static $gtype: GObject.GType<GLib.Error>;

        // Static fields

        static ABANDON_PROMISE: number;
        static EXCEPTION: number;

        // Constructors

        constructor(options: { message: string; code: number });
    }

    /**
     * @gir-type Enum
     */
    export namespace ConcurrentSetRangeType {
        export const $gtype: GObject.GType<ConcurrentSetRangeType>;
    }

    /**
     * @gir-type Enum
     */
    enum ConcurrentSetRangeType {
        HEAD,
        TAIL,
        BOUNDED,
        EMPTY,
    }

    /**
     * @gir-type Enum
     */
    export namespace HazardPointerPolicy {
        export const $gtype: GObject.GType<HazardPointerPolicy>;
    }

    /**
     * @gir-type Enum
     */
    enum HazardPointerPolicy {
        DEFAULT,
        THREAD_EXIT,
        TRY_FREE,
        FREE,
        TRY_RELEASE,
        RELEASE,
    }

    /**
     * @gir-type Enum
     */
    export namespace HazardPointerReleasePolicy {
        export const $gtype: GObject.GType<HazardPointerReleasePolicy>;
    }

    /**
     * @gir-type Enum
     */
    enum HazardPointerReleasePolicy {
        HELPER_THREAD,
        MAIN_LOOP,
    }

    /**
     * @gir-type Enum
     */
    export namespace TraversableStream {
        export const $gtype: GObject.GType<TraversableStream>;
    }

    /**
     * @gir-type Enum
     */
    enum TraversableStream {
        YIELD,
        CONTINUE,
        END,
        WAIT,
    }

    /**
     * @param t
     */
    function functions_get_equal_func_for(t: GObject.GType): [EqualDataFunc, any];
    /**
     * @param t
     */
    function functions_get_hash_func_for(t: GObject.GType): [HashDataFunc, any];
    /**
     * @param t
     */
    function functions_get_compare_func_for(t: GObject.GType): [GLib.CompareDataFunc, any];
    function hazard_pointer_policy_is_concrete(): boolean;
    function hazard_pointer_policy_is_blocking(): boolean;
    function hazard_pointer_policy_is_safe(): boolean;
    function hazard_pointer_policy_to_concrete(): HazardPointerPolicy;
    /**
     * @param g_type
     * @param g_dup_func
     * @param task
     */
    function task(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, task: Task): Future;
    function async_task(): globalThis.Promise<void>;
    /**
     * @param _callback_
     */
    function async_task(_callback_: Gio.AsyncReadyCallback | null): void;
    /**
     * @param _callback_
     */
    function async_task(_callback_?: Gio.AsyncReadyCallback | null): globalThis.Promise<void> | void;
    /**
     * @param _res_
     */
    function async_task_finish(_res_: Gio.AsyncResult): void;
    /**
     * @gir-type Callback
     */
    interface HashDataFunc {
        (t_type: GObject.GType, t_dup_func: GObject.BoxedCopyFunc, v: any): number;
    }
    /**
     * @gir-type Callback
     */
    interface EqualDataFunc {
        (t_type: GObject.GType, t_dup_func: GObject.BoxedCopyFunc, a: any, b: any): boolean;
    }
    /**
     * @gir-type Callback
     */
    interface LazyFunc {
        (g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc): any;
    }
    /**
     * @gir-type Callback
     */
    interface FoldMapFunc {
        (
            a_type: GObject.GType,
            a_dup_func: GObject.BoxedCopyFunc,
            k_type: GObject.GType,
            k_dup_func: GObject.BoxedCopyFunc,
            v_type: GObject.GType,
            v_dup_func: GObject.BoxedCopyFunc,
            k: any,
            v: any,
            a: any,
        ): any;
    }
    /**
     * @gir-type Callback
     */
    interface ForallMapFunc {
        (
            k_type: GObject.GType,
            k_dup_func: GObject.BoxedCopyFunc,
            v_type: GObject.GType,
            v_dup_func: GObject.BoxedCopyFunc,
            k: any,
            v: any,
        ): boolean;
    }
    /**
     * @gir-type Callback
     */
    interface Task {
        (g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc): any;
    }
    /**
     * @gir-type Callback
     */
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
    /**
     * @gir-type Callback
     */
    interface ForallFunc {
        (g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g: any): boolean;
    }
    /**
     * @gir-type Callback
     */
    interface UnfoldFunc {
        (a_type: GObject.GType, a_dup_func: GObject.BoxedCopyFunc): Lazy | null;
    }
    /**
     * @gir-type Callback
     */
    interface StreamFunc {
        (
            g_type: GObject.GType,
            g_dup_func: GObject.BoxedCopyFunc,
            a_type: GObject.GType,
            a_dup_func: GObject.BoxedCopyFunc,
            state: TraversableStream,
            g: Lazy | null,
        ): TraversableStream;
    }
    /**
     * @gir-type Callback
     */
    interface MapFunc {
        (
            a_type: GObject.GType,
            a_dup_func: GObject.BoxedCopyFunc,
            g_type: GObject.GType,
            g_dup_func: GObject.BoxedCopyFunc,
            g: any,
        ): any;
    }
    /**
     * @gir-type Callback
     */
    interface Predicate {
        (g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g: any): boolean;
    }
    /**
     * @gir-type Callback
     */
    interface FlatMapFunc {
        (
            a_type: GObject.GType,
            a_dup_func: GObject.BoxedCopyFunc,
            g_type: GObject.GType,
            g_dup_func: GObject.BoxedCopyFunc,
            g: any,
        ): Iterator;
    }
    namespace AbstractBidirList {
        // Signal signatures
        interface SignalSignatures extends AbstractList.SignalSignatures {
            'notify::g-type': (pspec: GObject.ParamSpec) => void;
            'notify::g-dup-func': (pspec: GObject.ParamSpec) => void;
            'notify::g-destroy-func': (pspec: GObject.ParamSpec) => void;
            'notify::read-only-view': (pspec: GObject.ParamSpec) => void;
            'notify::size': (pspec: GObject.ParamSpec) => void;
            'notify::read-only': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends AbstractList.ConstructorProps, BidirList.ConstructorProps {
            g_type: GObject.GTypeInput;
            gType: GObject.GTypeInput;
            g_dup_func: GObject.BoxedCopyFunc;
            gDupFunc: GObject.BoxedCopyFunc;
            g_destroy_func: GLib.DestroyNotify;
            gDestroyFunc: GLib.DestroyNotify;
            read_only_view: BidirList;
            readOnlyView: BidirList;
        }
    }

    /**
     * @gir-type Class
     */
    abstract class AbstractBidirList extends AbstractList implements BidirList {
        static $gtype: GObject.GType<AbstractBidirList>;

        // Properties

        /**
         * @construct-only
         */
        get g_type(): GObject.GType;
        /**
         * @construct-only
         */
        get gType(): GObject.GType;
        /**
         * @construct-only
         */
        get g_dup_func(): GObject.BoxedCopyFunc;
        /**
         * @construct-only
         */
        get gDupFunc(): GObject.BoxedCopyFunc;
        /**
         * @construct-only
         */
        get g_destroy_func(): GLib.DestroyNotify;
        /**
         * @construct-only
         */
        get gDestroyFunc(): GLib.DestroyNotify;
        /**
         * @read-only
         */
        get read_only_view(): BidirList;
        /**
         * @read-only
         */
        get readOnlyView(): BidirList;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: AbstractBidirList.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<AbstractBidirList.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof AbstractBidirList.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, AbstractBidirList.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof AbstractBidirList.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, AbstractBidirList.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof AbstractBidirList.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<AbstractBidirList.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods

        /**
         * @virtual
         */
        vfunc_bidir_list_iterator(): BidirListIterator;
        /**
         * @virtual
         */
        vfunc_reserved0(): void;
        /**
         * @virtual
         */
        vfunc_reserved1(): void;
        /**
         * @virtual
         */
        vfunc_reserved2(): void;
        /**
         * @virtual
         */
        vfunc_reserved3(): void;
        /**
         * @virtual
         */
        vfunc_reserved4(): void;
        /**
         * @virtual
         */
        vfunc_reserved5(): void;
        /**
         * @virtual
         */
        vfunc_reserved6(): void;
        /**
         * @virtual
         */
        vfunc_reserved7(): void;
        /**
         * @virtual
         */
        vfunc_reserved8(): void;
        /**
         * @virtual
         */
        vfunc_reserved9(): void;
        /**
         * @virtual
         */
        vfunc_get_read_only_view(): BidirList;

        // Methods

        bidir_list_iterator(): BidirListIterator;
        reserved0(): void;
        reserved1(): void;
        reserved2(): void;
        reserved3(): void;
        reserved4(): void;
        reserved5(): void;
        reserved6(): void;
        reserved7(): void;
        reserved8(): void;
        reserved9(): void;
        get_read_only_view(): BidirList;
        list_iterator(): ListIterator;
        /**
         * @param index
         */
        get(index: number): any;
        /**
         * @param index
         * @param item
         */
        set(index: number, item: any): void;
        /**
         * @param args
         */
        // Conflicted with GObject.Object.set
        set(...args: never[]): any;
        /**
         * @param item
         */
        index_of(item: any): number;
        /**
         * @param index
         * @param item
         */
        insert(index: number, item: any): void;
        /**
         * @param index
         */
        remove_at(index: number): any;
        /**
         * @param start
         * @param stop
         */
        slice(start: number, stop: number): List | null;
        first(): any;
        last(): any;
        /**
         * @param index
         * @param collection
         */
        insert_all(index: number, collection: Collection): void;
        /**
         * @param compare_func
         */
        sort(compare_func?: GLib.CompareDataFunc | null): void;
        /**
         * @virtual
         */
        vfunc_list_iterator(): ListIterator;
        /**
         * @param index
         * @virtual
         */
        vfunc_get(index: number): any;
        /**
         * @param index
         * @param item
         * @virtual
         */
        vfunc_set(index: number, item: any): void;
        /**
         * @param item
         * @virtual
         */
        vfunc_index_of(item: any): number;
        /**
         * @param index
         * @param item
         * @virtual
         */
        vfunc_insert(index: number, item: any): void;
        /**
         * @param index
         * @virtual
         */
        vfunc_remove_at(index: number): any;
        /**
         * @param start
         * @param stop
         * @virtual
         */
        vfunc_slice(start: number, stop: number): List | null;
        /**
         * @virtual
         */
        vfunc_first(): any;
        /**
         * @virtual
         */
        vfunc_last(): any;
        /**
         * @param index
         * @param collection
         * @virtual
         */
        vfunc_insert_all(index: number, collection: Collection): void;
        /**
         * @param compare_func
         * @virtual
         */
        vfunc_sort(compare_func?: GLib.CompareDataFunc | null): void;
    }

    namespace AbstractBidirSortedSet {
        // Signal signatures
        interface SignalSignatures extends AbstractSortedSet.SignalSignatures {
            'notify::g-type': (pspec: GObject.ParamSpec) => void;
            'notify::g-dup-func': (pspec: GObject.ParamSpec) => void;
            'notify::g-destroy-func': (pspec: GObject.ParamSpec) => void;
            'notify::read-only-view': (pspec: GObject.ParamSpec) => void;
            'notify::size': (pspec: GObject.ParamSpec) => void;
            'notify::read-only': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends AbstractSortedSet.ConstructorProps, BidirSortedSet.ConstructorProps {
            g_type: GObject.GTypeInput;
            gType: GObject.GTypeInput;
            g_dup_func: GObject.BoxedCopyFunc;
            gDupFunc: GObject.BoxedCopyFunc;
            g_destroy_func: GLib.DestroyNotify;
            gDestroyFunc: GLib.DestroyNotify;
            read_only_view: BidirSortedSet;
            readOnlyView: BidirSortedSet;
        }
    }

    /**
     * @gir-type Class
     */
    abstract class AbstractBidirSortedSet extends AbstractSortedSet implements BidirSortedSet {
        static $gtype: GObject.GType<AbstractBidirSortedSet>;

        // Properties

        /**
         * @construct-only
         */
        get g_type(): GObject.GType;
        /**
         * @construct-only
         */
        get gType(): GObject.GType;
        /**
         * @construct-only
         */
        get g_dup_func(): GObject.BoxedCopyFunc;
        /**
         * @construct-only
         */
        get gDupFunc(): GObject.BoxedCopyFunc;
        /**
         * @construct-only
         */
        get g_destroy_func(): GLib.DestroyNotify;
        /**
         * @construct-only
         */
        get gDestroyFunc(): GLib.DestroyNotify;
        /**
         * @read-only
         */
        get read_only_view(): BidirSortedSet;
        /**
         * @read-only
         */
        get readOnlyView(): BidirSortedSet;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: AbstractBidirSortedSet.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<AbstractBidirSortedSet.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof AbstractBidirSortedSet.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, AbstractBidirSortedSet.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof AbstractBidirSortedSet.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, AbstractBidirSortedSet.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof AbstractBidirSortedSet.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<AbstractBidirSortedSet.SignalSignatures[K]> extends [any, ...infer Q]
                ? Q
                : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods

        /**
         * @virtual
         */
        vfunc_bidir_iterator(): BidirIterator;
        /**
         * @virtual
         */
        vfunc_reserved0(): void;
        /**
         * @virtual
         */
        vfunc_reserved1(): void;
        /**
         * @virtual
         */
        vfunc_reserved2(): void;
        /**
         * @virtual
         */
        vfunc_reserved3(): void;
        /**
         * @virtual
         */
        vfunc_reserved4(): void;
        /**
         * @virtual
         */
        vfunc_reserved5(): void;
        /**
         * @virtual
         */
        vfunc_reserved6(): void;
        /**
         * @virtual
         */
        vfunc_reserved7(): void;
        /**
         * @virtual
         */
        vfunc_reserved8(): void;
        /**
         * @virtual
         */
        vfunc_reserved9(): void;
        /**
         * @virtual
         */
        vfunc_get_read_only_view(): BidirSortedSet;

        // Methods

        bidir_iterator(): BidirIterator;
        reserved0(): void;
        reserved1(): void;
        reserved2(): void;
        reserved3(): void;
        reserved4(): void;
        reserved5(): void;
        reserved6(): void;
        reserved7(): void;
        reserved8(): void;
        reserved9(): void;
        get_read_only_view(): BidirSortedSet;
        first(): any;
        last(): any;
        /**
         * @param element
         */
        iterator_at(element: any): Iterator | null;
        /**
         * @param element
         */
        lower(element: any): any | null;
        /**
         * @param element
         */
        higher(element: any): any | null;
        /**
         * @param element
         */
        floor(element: any): any | null;
        /**
         * @param element
         */
        ceil(element: any): any | null;
        /**
         * @param before
         */
        head_set(before: any): SortedSet;
        /**
         * @param after
         */
        tail_set(after: any): SortedSet;
        /**
         * @param from
         * @param to
         */
        sub_set(from: any, to: any): SortedSet;
        /**
         * @virtual
         */
        vfunc_first(): any;
        /**
         * @virtual
         */
        vfunc_last(): any;
        /**
         * @param element
         * @virtual
         */
        vfunc_iterator_at(element: any): Iterator | null;
        /**
         * @param element
         * @virtual
         */
        vfunc_lower(element: any): any | null;
        /**
         * @param element
         * @virtual
         */
        vfunc_higher(element: any): any | null;
        /**
         * @param element
         * @virtual
         */
        vfunc_floor(element: any): any | null;
        /**
         * @param element
         * @virtual
         */
        vfunc_ceil(element: any): any | null;
        /**
         * @param before
         * @virtual
         */
        vfunc_head_set(before: any): SortedSet;
        /**
         * @param after
         * @virtual
         */
        vfunc_tail_set(after: any): SortedSet;
        /**
         * @param from
         * @param to
         * @virtual
         */
        vfunc_sub_set(from: any, to: any): SortedSet;
    }

    namespace AbstractBidirSortedMap {
        // Signal signatures
        interface SignalSignatures extends AbstractSortedMap.SignalSignatures {
            'notify::k-type': (pspec: GObject.ParamSpec) => void;
            'notify::k-dup-func': (pspec: GObject.ParamSpec) => void;
            'notify::k-destroy-func': (pspec: GObject.ParamSpec) => void;
            'notify::v-type': (pspec: GObject.ParamSpec) => void;
            'notify::v-dup-func': (pspec: GObject.ParamSpec) => void;
            'notify::v-destroy-func': (pspec: GObject.ParamSpec) => void;
            'notify::read-only-view': (pspec: GObject.ParamSpec) => void;
            'notify::ascending-keys': (pspec: GObject.ParamSpec) => void;
            'notify::ascending-entries': (pspec: GObject.ParamSpec) => void;
            'notify::size': (pspec: GObject.ParamSpec) => void;
            'notify::read-only': (pspec: GObject.ParamSpec) => void;
            'notify::keys': (pspec: GObject.ParamSpec) => void;
            'notify::values': (pspec: GObject.ParamSpec) => void;
            'notify::entries': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends AbstractSortedMap.ConstructorProps, BidirSortedMap.ConstructorProps {
            k_type: GObject.GTypeInput;
            kType: GObject.GTypeInput;
            k_dup_func: GObject.BoxedCopyFunc;
            kDupFunc: GObject.BoxedCopyFunc;
            k_destroy_func: GLib.DestroyNotify;
            kDestroyFunc: GLib.DestroyNotify;
            v_type: GObject.GTypeInput;
            vType: GObject.GTypeInput;
            v_dup_func: GObject.BoxedCopyFunc;
            vDupFunc: GObject.BoxedCopyFunc;
            v_destroy_func: GLib.DestroyNotify;
            vDestroyFunc: GLib.DestroyNotify;
            read_only_view: BidirSortedMap | any;
            readOnlyView: BidirSortedMap | any;
        }
    }

    /**
     * @gir-type Class
     */
    abstract class AbstractBidirSortedMap extends AbstractSortedMap implements BidirSortedMap {
        static $gtype: GObject.GType<AbstractBidirSortedMap>;

        // Properties

        /**
         * @construct-only
         */
        get k_type(): GObject.GType;
        /**
         * @construct-only
         */
        get kType(): GObject.GType;
        /**
         * @construct-only
         */
        get k_dup_func(): GObject.BoxedCopyFunc;
        /**
         * @construct-only
         */
        get kDupFunc(): GObject.BoxedCopyFunc;
        /**
         * @construct-only
         */
        get k_destroy_func(): GLib.DestroyNotify;
        /**
         * @construct-only
         */
        get kDestroyFunc(): GLib.DestroyNotify;
        /**
         * @construct-only
         */
        get v_type(): GObject.GType;
        /**
         * @construct-only
         */
        get vType(): GObject.GType;
        /**
         * @construct-only
         */
        get v_dup_func(): GObject.BoxedCopyFunc;
        /**
         * @construct-only
         */
        get vDupFunc(): GObject.BoxedCopyFunc;
        /**
         * @construct-only
         */
        get v_destroy_func(): GLib.DestroyNotify;
        /**
         * @construct-only
         */
        get vDestroyFunc(): GLib.DestroyNotify;
        /**
         * @read-only
         */
        // This accessor conflicts with another accessor's type in a parent class or interface.
        get read_only_view(): BidirSortedMap | any;
        /**
         * @read-only
         */
        // This accessor conflicts with another accessor's type in a parent class or interface.
        get readOnlyView(): BidirSortedMap | any;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: AbstractBidirSortedMap.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<AbstractBidirSortedMap.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof AbstractBidirSortedMap.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, AbstractBidirSortedMap.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof AbstractBidirSortedMap.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, AbstractBidirSortedMap.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof AbstractBidirSortedMap.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<AbstractBidirSortedMap.SignalSignatures[K]> extends [any, ...infer Q]
                ? Q
                : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods

        /**
         * @virtual
         */
        vfunc_bidir_map_iterator(): BidirMapIterator;
        /**
         * @virtual
         */
        vfunc_reserved0(): void;
        /**
         * @virtual
         */
        vfunc_reserved1(): void;
        /**
         * @virtual
         */
        vfunc_reserved2(): void;
        /**
         * @virtual
         */
        vfunc_reserved3(): void;
        /**
         * @virtual
         */
        vfunc_reserved4(): void;
        /**
         * @virtual
         */
        vfunc_reserved5(): void;
        /**
         * @virtual
         */
        vfunc_reserved6(): void;
        /**
         * @virtual
         */
        vfunc_reserved7(): void;
        /**
         * @virtual
         */
        vfunc_reserved8(): void;
        /**
         * @virtual
         */
        vfunc_reserved9(): void;
        /**
         * @virtual
         */
        vfunc_get_read_only_view(): BidirSortedMap;

        // Methods

        bidir_map_iterator(): BidirMapIterator;
        reserved0(): void;
        reserved1(): void;
        reserved2(): void;
        reserved3(): void;
        reserved4(): void;
        reserved5(): void;
        reserved6(): void;
        reserved7(): void;
        reserved8(): void;
        reserved9(): void;
        get_read_only_view(): BidirSortedMap;
        /**
         * @read-only
         * @category Inherited from Gee.SortedMap
         */
        get ascending_keys(): SortedSet;
        /**
         * @read-only
         * @category Inherited from Gee.SortedMap
         */
        get ascendingKeys(): SortedSet;
        /**
         * @read-only
         * @category Inherited from Gee.SortedMap
         */
        get ascending_entries(): SortedSet;
        /**
         * @read-only
         * @category Inherited from Gee.SortedMap
         */
        get ascendingEntries(): SortedSet;
        /**
         * @param before
         */
        head_map(before: any): SortedMap;
        /**
         * @param after
         */
        tail_map(after: any): SortedMap;
        /**
         * @param before
         * @param after
         */
        sub_map(before: any, after: any): SortedMap;
        get_ascending_keys(): SortedSet;
        get_ascending_entries(): SortedSet;
        /**
         * @param before
         * @virtual
         */
        vfunc_head_map(before: any): SortedMap;
        /**
         * @param after
         * @virtual
         */
        vfunc_tail_map(after: any): SortedMap;
        /**
         * @param before
         * @param after
         * @virtual
         */
        vfunc_sub_map(before: any, after: any): SortedMap;
        /**
         * @virtual
         */
        vfunc_get_ascending_keys(): SortedSet;
        /**
         * @virtual
         */
        vfunc_get_ascending_entries(): SortedSet;
    }

    namespace AbstractCollection {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::g-type': (pspec: GObject.ParamSpec) => void;
            'notify::g-dup-func': (pspec: GObject.ParamSpec) => void;
            'notify::g-destroy-func': (pspec: GObject.ParamSpec) => void;
            'notify::size': (pspec: GObject.ParamSpec) => void;
            'notify::read-only': (pspec: GObject.ParamSpec) => void;
            'notify::read-only-view': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps
            extends
                GObject.Object.ConstructorProps,
                Traversable.ConstructorProps,
                Iterable.ConstructorProps,
                Collection.ConstructorProps {
            g_type: GObject.GTypeInput;
            gType: GObject.GTypeInput;
            g_dup_func: GObject.BoxedCopyFunc;
            gDupFunc: GObject.BoxedCopyFunc;
            g_destroy_func: GLib.DestroyNotify;
            gDestroyFunc: GLib.DestroyNotify;
            size: number;
            read_only: boolean;
            readOnly: boolean;
            read_only_view: Collection;
            readOnlyView: Collection;
        }
    }

    /**
     * @gir-type Class
     */
    abstract class AbstractCollection extends GObject.Object implements Traversable, Iterable, Collection {
        static $gtype: GObject.GType<AbstractCollection>;

        // Properties

        /**
         * @construct-only
         */
        get g_type(): GObject.GType;
        /**
         * @construct-only
         */
        get gType(): GObject.GType;
        /**
         * @construct-only
         */
        get g_dup_func(): GObject.BoxedCopyFunc;
        /**
         * @construct-only
         */
        get gDupFunc(): GObject.BoxedCopyFunc;
        /**
         * @construct-only
         */
        get g_destroy_func(): GLib.DestroyNotify;
        /**
         * @construct-only
         */
        get gDestroyFunc(): GLib.DestroyNotify;
        /**
         * @read-only
         */
        get size(): number;
        /**
         * @read-only
         */
        get read_only(): boolean;
        /**
         * @read-only
         */
        get readOnly(): boolean;
        /**
         * @read-only
         */
        get read_only_view(): Collection;
        /**
         * @read-only
         */
        get readOnlyView(): Collection;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: AbstractCollection.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<AbstractCollection.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof AbstractCollection.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, AbstractCollection.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof AbstractCollection.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, AbstractCollection.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof AbstractCollection.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<AbstractCollection.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods

        /**
         * @param item
         * @virtual
         */
        vfunc_contains(item: any): boolean;
        /**
         * @param item
         * @virtual
         */
        vfunc_add(item: any): boolean;
        /**
         * @param item
         * @virtual
         */
        vfunc_remove(item: any): boolean;
        /**
         * @virtual
         */
        vfunc_clear(): void;
        /**
         * @virtual
         */
        vfunc_iterator(): Iterator;
        /**
         * @param f
         * @virtual
         */
        vfunc_foreach(f: ForallFunc): boolean;
        /**
         * @virtual
         */
        vfunc_reserved0(): void;
        /**
         * @virtual
         */
        vfunc_reserved1(): void;
        /**
         * @virtual
         */
        vfunc_reserved2(): void;
        /**
         * @virtual
         */
        vfunc_reserved3(): void;
        /**
         * @virtual
         */
        vfunc_reserved4(): void;
        /**
         * @virtual
         */
        vfunc_reserved5(): void;
        /**
         * @virtual
         */
        vfunc_reserved6(): void;
        /**
         * @virtual
         */
        vfunc_reserved7(): void;
        /**
         * @virtual
         */
        vfunc_reserved8(): void;
        /**
         * @virtual
         */
        vfunc_reserved9(): void;
        /**
         * @virtual
         */
        vfunc_get_size(): number;
        /**
         * @virtual
         */
        vfunc_get_read_only(): boolean;
        /**
         * @virtual
         */
        vfunc_get_read_only_view(): Collection;

        // Methods

        /**
         * @param item
         */
        contains(item: any): boolean;
        /**
         * @param item
         */
        add(item: any): boolean;
        /**
         * @param item
         */
        remove(item: any): boolean;
        clear(): void;
        iterator(): Iterator;
        /**
         * @param f
         */
        foreach(f: ForallFunc): boolean;
        reserved0(): void;
        reserved1(): void;
        reserved2(): void;
        reserved3(): void;
        reserved4(): void;
        reserved5(): void;
        reserved6(): void;
        reserved7(): void;
        reserved8(): void;
        reserved9(): void;
        get_size(): number;
        get_read_only(): boolean;
        get_read_only_view(): Collection;
        /**
         * @param a_type
         * @param a_dup_func
         * @param f
         */
        stream(a_type: GObject.GType, a_dup_func: GObject.BoxedCopyFunc, f: StreamFunc): Iterator;
        /**
         * @param a_type
         * @param a_dup_func
         * @param f
         * @param seed
         */
        fold(a_type: GObject.GType, a_dup_func: GObject.BoxedCopyFunc, f: FoldFunc, seed: any): any;
        /**
         * @param a_type
         * @param a_dup_func
         * @param f
         */
        map(a_type: GObject.GType, a_dup_func: GObject.BoxedCopyFunc, f: MapFunc): Iterator;
        /**
         * @param a_type
         * @param a_dup_func
         * @param f
         * @param seed
         */
        scan(a_type: GObject.GType, a_dup_func: GObject.BoxedCopyFunc, f: FoldFunc, seed: any): Iterator;
        /**
         * @param pred
         */
        filter(pred: Predicate): Iterator;
        /**
         * @param offset
         * @param length
         */
        chop(offset: number, length: number): Iterator;
        /**
         * @param a_type
         * @param a_dup_func
         * @param f
         */
        flat_map(a_type: GObject.GType, a_dup_func: GObject.BoxedCopyFunc, f: FlatMapFunc): Iterator;
        /**
         * @param forks
         */
        tee(forks: number): Iterator[];
        /**
         * @param pred
         */
        first_match(pred: Predicate): any | null;
        /**
         * @param pred
         */
        any_match(pred: Predicate): boolean;
        /**
         * @param pred
         */
        all_match(pred: Predicate): boolean;
        /**
         * @param compare
         */
        max(compare: GLib.CompareDataFunc): any;
        /**
         * @param compare
         */
        min(compare: GLib.CompareDataFunc): any;
        /**
         * @param compare
         */
        order_by(compare?: GLib.CompareDataFunc | null): Iterator;
        get_element_type(): GObject.GType;
        /**
         * @param a_type
         * @param a_dup_func
         * @param f
         * @virtual
         */
        vfunc_stream(a_type: GObject.GType, a_dup_func: GObject.BoxedCopyFunc, f: StreamFunc): Iterator;
        /**
         * @param a_type
         * @param a_dup_func
         * @param f
         * @param seed
         * @virtual
         */
        vfunc_fold(a_type: GObject.GType, a_dup_func: GObject.BoxedCopyFunc, f: FoldFunc, seed: any): any;
        /**
         * @param a_type
         * @param a_dup_func
         * @param f
         * @virtual
         */
        vfunc_map(a_type: GObject.GType, a_dup_func: GObject.BoxedCopyFunc, f: MapFunc): Iterator;
        /**
         * @param a_type
         * @param a_dup_func
         * @param f
         * @param seed
         * @virtual
         */
        vfunc_scan(a_type: GObject.GType, a_dup_func: GObject.BoxedCopyFunc, f: FoldFunc, seed: any): Iterator;
        /**
         * @param pred
         * @virtual
         */
        vfunc_filter(pred: Predicate): Iterator;
        /**
         * @param offset
         * @param length
         * @virtual
         */
        vfunc_chop(offset: number, length: number): Iterator;
        /**
         * @param a_type
         * @param a_dup_func
         * @param f
         * @virtual
         */
        vfunc_flat_map(a_type: GObject.GType, a_dup_func: GObject.BoxedCopyFunc, f: FlatMapFunc): Iterator;
        /**
         * @param forks
         * @virtual
         */
        vfunc_tee(forks: number): Iterator[];
        /**
         * @param pred
         * @virtual
         */
        vfunc_first_match(pred: Predicate): any | null;
        /**
         * @param pred
         * @virtual
         */
        vfunc_any_match(pred: Predicate): boolean;
        /**
         * @param pred
         * @virtual
         */
        vfunc_all_match(pred: Predicate): boolean;
        /**
         * @param compare
         * @virtual
         */
        vfunc_max(compare: GLib.CompareDataFunc): any;
        /**
         * @param compare
         * @virtual
         */
        vfunc_min(compare: GLib.CompareDataFunc): any;
        /**
         * @param compare
         * @virtual
         */
        vfunc_order_by(compare?: GLib.CompareDataFunc | null): Iterator;
        /**
         * @virtual
         */
        vfunc_get_element_type(): GObject.GType;
        /**
         * @param collection
         */
        add_all(collection: Collection): boolean;
        /**
         * @param collection
         */
        contains_all(collection: Collection): boolean;
        /**
         * @param collection
         */
        remove_all(collection: Collection): boolean;
        /**
         * @param collection
         */
        retain_all(collection: Collection): boolean;
        to_array(): any[];
        /**
         * @param array
         */
        add_all_array(array: any[]): boolean;
        /**
         * @param array
         */
        contains_all_array(array: any[]): boolean;
        /**
         * @param array
         */
        remove_all_array(array: any[]): boolean;
        /**
         * @param iter
         */
        add_all_iterator(iter: Iterator): boolean;
        /**
         * @param iter
         */
        contains_all_iterator(iter: Iterator): boolean;
        /**
         * @param iter
         */
        remove_all_iterator(iter: Iterator): boolean;
        get_is_empty(): boolean;
        /**
         * @param collection
         * @virtual
         */
        vfunc_add_all(collection: Collection): boolean;
        /**
         * @param collection
         * @virtual
         */
        vfunc_contains_all(collection: Collection): boolean;
        /**
         * @param collection
         * @virtual
         */
        vfunc_remove_all(collection: Collection): boolean;
        /**
         * @param collection
         * @virtual
         */
        vfunc_retain_all(collection: Collection): boolean;
        /**
         * @virtual
         */
        vfunc_to_array(): any[];
        /**
         * @param array
         * @virtual
         */
        vfunc_add_all_array(array: any[]): boolean;
        /**
         * @param array
         * @virtual
         */
        vfunc_contains_all_array(array: any[]): boolean;
        /**
         * @param array
         * @virtual
         */
        vfunc_remove_all_array(array: any[]): boolean;
        /**
         * @param iter
         * @virtual
         */
        vfunc_add_all_iterator(iter: Iterator): boolean;
        /**
         * @param iter
         * @virtual
         */
        vfunc_contains_all_iterator(iter: Iterator): boolean;
        /**
         * @param iter
         * @virtual
         */
        vfunc_remove_all_iterator(iter: Iterator): boolean;
        /**
         * @virtual
         */
        vfunc_get_is_empty(): boolean;
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

    namespace AbstractList {
        // Signal signatures
        interface SignalSignatures extends AbstractCollection.SignalSignatures {
            'notify::g-type': (pspec: GObject.ParamSpec) => void;
            'notify::g-dup-func': (pspec: GObject.ParamSpec) => void;
            'notify::g-destroy-func': (pspec: GObject.ParamSpec) => void;
            'notify::read-only-view': (pspec: GObject.ParamSpec) => void;
            'notify::size': (pspec: GObject.ParamSpec) => void;
            'notify::read-only': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends AbstractCollection.ConstructorProps, List.ConstructorProps {
            g_type: GObject.GTypeInput;
            gType: GObject.GTypeInput;
            g_dup_func: GObject.BoxedCopyFunc;
            gDupFunc: GObject.BoxedCopyFunc;
            g_destroy_func: GLib.DestroyNotify;
            gDestroyFunc: GLib.DestroyNotify;
            read_only_view: List;
            readOnlyView: List;
        }
    }

    /**
     * @gir-type Class
     */
    abstract class AbstractList extends AbstractCollection implements List {
        static $gtype: GObject.GType<AbstractList>;

        // Properties

        /**
         * @construct-only
         */
        get g_type(): GObject.GType;
        /**
         * @construct-only
         */
        get gType(): GObject.GType;
        /**
         * @construct-only
         */
        get g_dup_func(): GObject.BoxedCopyFunc;
        /**
         * @construct-only
         */
        get gDupFunc(): GObject.BoxedCopyFunc;
        /**
         * @construct-only
         */
        get g_destroy_func(): GLib.DestroyNotify;
        /**
         * @construct-only
         */
        get gDestroyFunc(): GLib.DestroyNotify;
        /**
         * @read-only
         */
        get read_only_view(): List;
        /**
         * @read-only
         */
        get readOnlyView(): List;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: AbstractList.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<AbstractList.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof AbstractList.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, AbstractList.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof AbstractList.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, AbstractList.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof AbstractList.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<AbstractList.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods

        /**
         * @virtual
         */
        vfunc_list_iterator(): ListIterator;
        /**
         * @param index
         * @virtual
         */
        vfunc_get(index: number): any;
        /**
         * @param index
         * @param item
         * @virtual
         */
        vfunc_set(index: number, item: any): void;
        /**
         * @param item
         * @virtual
         */
        vfunc_index_of(item: any): number;
        /**
         * @param index
         * @param item
         * @virtual
         */
        vfunc_insert(index: number, item: any): void;
        /**
         * @param index
         * @virtual
         */
        vfunc_remove_at(index: number): any;
        /**
         * @param start
         * @param stop
         * @virtual
         */
        vfunc_slice(start: number, stop: number): List | null;
        /**
         * @virtual
         */
        vfunc_reserved0(): void;
        /**
         * @virtual
         */
        vfunc_reserved1(): void;
        /**
         * @virtual
         */
        vfunc_reserved2(): void;
        /**
         * @virtual
         */
        vfunc_reserved3(): void;
        /**
         * @virtual
         */
        vfunc_reserved4(): void;
        /**
         * @virtual
         */
        vfunc_reserved5(): void;
        /**
         * @virtual
         */
        vfunc_reserved6(): void;
        /**
         * @virtual
         */
        vfunc_reserved7(): void;
        /**
         * @virtual
         */
        vfunc_reserved8(): void;
        /**
         * @virtual
         */
        vfunc_reserved9(): void;
        /**
         * @virtual
         */
        vfunc_get_read_only_view(): List;

        // Methods

        list_iterator(): ListIterator;
        /**
         * @param index
         */
        get(index: number): any;
        /**
         * @param index
         * @param item
         */
        set(index: number, item: any): void;
        /**
         * @param args
         */
        // Conflicted with GObject.Object.set
        set(...args: never[]): any;
        /**
         * @param item
         */
        index_of(item: any): number;
        /**
         * @param index
         * @param item
         */
        insert(index: number, item: any): void;
        /**
         * @param index
         */
        remove_at(index: number): any;
        /**
         * @param start
         * @param stop
         */
        slice(start: number, stop: number): List | null;
        reserved0(): void;
        reserved1(): void;
        reserved2(): void;
        reserved3(): void;
        reserved4(): void;
        reserved5(): void;
        reserved6(): void;
        reserved7(): void;
        reserved8(): void;
        reserved9(): void;
        get_read_only_view(): List;
        /**
         * @read-only
         * @category Inherited from Gee.Collection
         */
        get size(): number;
        /**
         * @read-only
         * @category Inherited from Gee.Collection
         */
        get read_only(): boolean;
        /**
         * @read-only
         * @category Inherited from Gee.Collection
         */
        get readOnly(): boolean;
        first(): any;
        last(): any;
        /**
         * @param index
         * @param collection
         */
        insert_all(index: number, collection: Collection): void;
        /**
         * @param compare_func
         */
        sort(compare_func?: GLib.CompareDataFunc | null): void;
        /**
         * @virtual
         */
        vfunc_first(): any;
        /**
         * @virtual
         */
        vfunc_last(): any;
        /**
         * @param index
         * @param collection
         * @virtual
         */
        vfunc_insert_all(index: number, collection: Collection): void;
        /**
         * @param compare_func
         * @virtual
         */
        vfunc_sort(compare_func?: GLib.CompareDataFunc | null): void;
        /**
         * @param item
         */
        contains(item: any): boolean;
        /**
         * @param item
         */
        add(item: any): boolean;
        /**
         * @param item
         */
        remove(item: any): boolean;
        clear(): void;
        /**
         * @param collection
         */
        add_all(collection: Collection): boolean;
        /**
         * @param collection
         */
        contains_all(collection: Collection): boolean;
        /**
         * @param collection
         */
        remove_all(collection: Collection): boolean;
        /**
         * @param collection
         */
        retain_all(collection: Collection): boolean;
        to_array(): any[];
        /**
         * @param array
         */
        add_all_array(array: any[]): boolean;
        /**
         * @param array
         */
        contains_all_array(array: any[]): boolean;
        /**
         * @param array
         */
        remove_all_array(array: any[]): boolean;
        /**
         * @param iter
         */
        add_all_iterator(iter: Iterator): boolean;
        /**
         * @param iter
         */
        contains_all_iterator(iter: Iterator): boolean;
        /**
         * @param iter
         */
        remove_all_iterator(iter: Iterator): boolean;
        get_size(): number;
        get_is_empty(): boolean;
        get_read_only(): boolean;
        /**
         * @param item
         * @virtual
         */
        vfunc_contains(item: any): boolean;
        /**
         * @param item
         * @virtual
         */
        vfunc_add(item: any): boolean;
        /**
         * @param item
         * @virtual
         */
        vfunc_remove(item: any): boolean;
        /**
         * @virtual
         */
        vfunc_clear(): void;
        /**
         * @param collection
         * @virtual
         */
        vfunc_add_all(collection: Collection): boolean;
        /**
         * @param collection
         * @virtual
         */
        vfunc_contains_all(collection: Collection): boolean;
        /**
         * @param collection
         * @virtual
         */
        vfunc_remove_all(collection: Collection): boolean;
        /**
         * @param collection
         * @virtual
         */
        vfunc_retain_all(collection: Collection): boolean;
        /**
         * @virtual
         */
        vfunc_to_array(): any[];
        /**
         * @param array
         * @virtual
         */
        vfunc_add_all_array(array: any[]): boolean;
        /**
         * @param array
         * @virtual
         */
        vfunc_contains_all_array(array: any[]): boolean;
        /**
         * @param array
         * @virtual
         */
        vfunc_remove_all_array(array: any[]): boolean;
        /**
         * @param iter
         * @virtual
         */
        vfunc_add_all_iterator(iter: Iterator): boolean;
        /**
         * @param iter
         * @virtual
         */
        vfunc_contains_all_iterator(iter: Iterator): boolean;
        /**
         * @param iter
         * @virtual
         */
        vfunc_remove_all_iterator(iter: Iterator): boolean;
        /**
         * @virtual
         */
        vfunc_get_size(): number;
        /**
         * @virtual
         */
        vfunc_get_is_empty(): boolean;
        /**
         * @virtual
         */
        vfunc_get_read_only(): boolean;
        iterator(): Iterator;
        /**
         * @virtual
         */
        vfunc_iterator(): Iterator;
    }

    namespace AbstractMap {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::k-type': (pspec: GObject.ParamSpec) => void;
            'notify::k-dup-func': (pspec: GObject.ParamSpec) => void;
            'notify::k-destroy-func': (pspec: GObject.ParamSpec) => void;
            'notify::v-type': (pspec: GObject.ParamSpec) => void;
            'notify::v-dup-func': (pspec: GObject.ParamSpec) => void;
            'notify::v-destroy-func': (pspec: GObject.ParamSpec) => void;
            'notify::size': (pspec: GObject.ParamSpec) => void;
            'notify::read-only': (pspec: GObject.ParamSpec) => void;
            'notify::keys': (pspec: GObject.ParamSpec) => void;
            'notify::values': (pspec: GObject.ParamSpec) => void;
            'notify::entries': (pspec: GObject.ParamSpec) => void;
            'notify::read-only-view': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps
            extends
                GObject.Object.ConstructorProps,
                Traversable.ConstructorProps,
                Iterable.ConstructorProps,
                Map.ConstructorProps {
            k_type: GObject.GTypeInput;
            kType: GObject.GTypeInput;
            k_dup_func: GObject.BoxedCopyFunc;
            kDupFunc: GObject.BoxedCopyFunc;
            k_destroy_func: GLib.DestroyNotify;
            kDestroyFunc: GLib.DestroyNotify;
            v_type: GObject.GTypeInput;
            vType: GObject.GTypeInput;
            v_dup_func: GObject.BoxedCopyFunc;
            vDupFunc: GObject.BoxedCopyFunc;
            v_destroy_func: GLib.DestroyNotify;
            vDestroyFunc: GLib.DestroyNotify;
            size: number;
            read_only: boolean;
            readOnly: boolean;
            keys: Set;
            values: Collection;
            entries: Set;
            read_only_view: Map;
            readOnlyView: Map;
        }
    }

    /**
     * @gir-type Class
     */
    abstract class AbstractMap extends GObject.Object implements Traversable, Iterable, Map {
        static $gtype: GObject.GType<AbstractMap>;

        // Properties

        /**
         * @construct-only
         */
        get k_type(): GObject.GType;
        /**
         * @construct-only
         */
        get kType(): GObject.GType;
        /**
         * @construct-only
         */
        get k_dup_func(): GObject.BoxedCopyFunc;
        /**
         * @construct-only
         */
        get kDupFunc(): GObject.BoxedCopyFunc;
        /**
         * @construct-only
         */
        get k_destroy_func(): GLib.DestroyNotify;
        /**
         * @construct-only
         */
        get kDestroyFunc(): GLib.DestroyNotify;
        /**
         * @construct-only
         */
        get v_type(): GObject.GType;
        /**
         * @construct-only
         */
        get vType(): GObject.GType;
        /**
         * @construct-only
         */
        get v_dup_func(): GObject.BoxedCopyFunc;
        /**
         * @construct-only
         */
        get vDupFunc(): GObject.BoxedCopyFunc;
        /**
         * @construct-only
         */
        get v_destroy_func(): GLib.DestroyNotify;
        /**
         * @construct-only
         */
        get vDestroyFunc(): GLib.DestroyNotify;
        /**
         * @read-only
         */
        get size(): number;
        /**
         * @read-only
         */
        get read_only(): boolean;
        /**
         * @read-only
         */
        get readOnly(): boolean;
        /**
         * @read-only
         */
        get keys(): Set;
        /**
         * @read-only
         */
        get values(): Collection;
        /**
         * @read-only
         */
        get entries(): Set;
        /**
         * @read-only
         */
        get read_only_view(): Map;
        /**
         * @read-only
         */
        get readOnlyView(): Map;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: AbstractMap.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<AbstractMap.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof AbstractMap.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, AbstractMap.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof AbstractMap.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, AbstractMap.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof AbstractMap.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<AbstractMap.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods

        /**
         * @param key
         * @virtual
         */
        vfunc_has_key(key: any): boolean;
        /**
         * @param key
         * @param value
         * @virtual
         */
        vfunc_has(key: any, value: any): boolean;
        /**
         * @param key
         * @virtual
         */
        vfunc_get(key: any): any | null;
        /**
         * @param key
         * @param value
         * @virtual
         */
        vfunc_set(key: any, value: any): void;
        /**
         * @param key
         * @virtual
         */
        vfunc_unset(key: any): [boolean, any];
        /**
         * @virtual
         */
        vfunc_map_iterator(): MapIterator;
        /**
         * @virtual
         */
        vfunc_clear(): void;
        /**
         * @param f
         * @virtual
         */
        vfunc_foreach(f: ForallFunc): boolean;
        /**
         * @param a_type
         * @param a_dup_func
         * @param f
         * @virtual
         */
        vfunc_stream(a_type: GObject.GType, a_dup_func: GObject.BoxedCopyFunc, f: StreamFunc): Iterator;
        /**
         * @virtual
         */
        vfunc_reserved0(): void;
        /**
         * @virtual
         */
        vfunc_reserved1(): void;
        /**
         * @virtual
         */
        vfunc_reserved2(): void;
        /**
         * @virtual
         */
        vfunc_reserved3(): void;
        /**
         * @virtual
         */
        vfunc_reserved4(): void;
        /**
         * @virtual
         */
        vfunc_reserved5(): void;
        /**
         * @virtual
         */
        vfunc_reserved6(): void;
        /**
         * @virtual
         */
        vfunc_reserved7(): void;
        /**
         * @virtual
         */
        vfunc_reserved8(): void;
        /**
         * @virtual
         */
        vfunc_reserved9(): void;
        /**
         * @virtual
         */
        vfunc_get_size(): number;
        /**
         * @virtual
         */
        vfunc_get_read_only(): boolean;
        /**
         * @virtual
         */
        vfunc_get_keys(): Set;
        /**
         * @virtual
         */
        vfunc_get_values(): Collection;
        /**
         * @virtual
         */
        vfunc_get_entries(): Set;
        /**
         * @virtual
         */
        vfunc_get_read_only_view(): Map;

        // Methods

        /**
         * @param key
         */
        has_key(key: any): boolean;
        /**
         * @param key
         * @param value
         */
        has(key: any, value: any): boolean;
        /**
         * @param key
         */
        get(key: any): any | null;
        /**
         * @param key
         * @param value
         */
        set(key: any, value: any): void;
        /**
         * @param args
         */
        // Conflicted with GObject.Object.set
        set(...args: never[]): any;
        /**
         * @param key
         */
        unset(key: any): [boolean, any];
        map_iterator(): MapIterator;
        clear(): void;
        /**
         * @param f
         */
        foreach(f: ForallFunc): boolean;
        /**
         * @param a_type
         * @param a_dup_func
         * @param f
         */
        stream(a_type: GObject.GType, a_dup_func: GObject.BoxedCopyFunc, f: StreamFunc): Iterator;
        reserved0(): void;
        reserved1(): void;
        reserved2(): void;
        reserved3(): void;
        reserved4(): void;
        reserved5(): void;
        reserved6(): void;
        reserved7(): void;
        reserved8(): void;
        reserved9(): void;
        get_size(): number;
        get_read_only(): boolean;
        get_keys(): Set;
        get_values(): Collection;
        get_entries(): Set;
        get_read_only_view(): Map;
        /**
         * @param a_type
         * @param a_dup_func
         * @param f
         * @param seed
         */
        fold(a_type: GObject.GType, a_dup_func: GObject.BoxedCopyFunc, f: FoldFunc, seed: any): any;
        /**
         * @param a_type
         * @param a_dup_func
         * @param f
         */
        map(a_type: GObject.GType, a_dup_func: GObject.BoxedCopyFunc, f: MapFunc): Iterator;
        /**
         * @param a_type
         * @param a_dup_func
         * @param f
         * @param seed
         */
        scan(a_type: GObject.GType, a_dup_func: GObject.BoxedCopyFunc, f: FoldFunc, seed: any): Iterator;
        /**
         * @param pred
         */
        filter(pred: Predicate): Iterator;
        /**
         * @param offset
         * @param length
         */
        chop(offset: number, length: number): Iterator;
        /**
         * @param a_type
         * @param a_dup_func
         * @param f
         */
        flat_map(a_type: GObject.GType, a_dup_func: GObject.BoxedCopyFunc, f: FlatMapFunc): Iterator;
        /**
         * @param forks
         */
        tee(forks: number): Iterator[];
        /**
         * @param pred
         */
        first_match(pred: Predicate): any | null;
        /**
         * @param pred
         */
        any_match(pred: Predicate): boolean;
        /**
         * @param pred
         */
        all_match(pred: Predicate): boolean;
        /**
         * @param compare
         */
        max(compare: GLib.CompareDataFunc): any;
        /**
         * @param compare
         */
        min(compare: GLib.CompareDataFunc): any;
        /**
         * @param compare
         */
        order_by(compare?: GLib.CompareDataFunc | null): Iterator;
        get_element_type(): GObject.GType;
        /**
         * @param a_type
         * @param a_dup_func
         * @param f
         * @param seed
         * @virtual
         */
        vfunc_fold(a_type: GObject.GType, a_dup_func: GObject.BoxedCopyFunc, f: FoldFunc, seed: any): any;
        /**
         * @param a_type
         * @param a_dup_func
         * @param f
         * @virtual
         */
        vfunc_map(a_type: GObject.GType, a_dup_func: GObject.BoxedCopyFunc, f: MapFunc): Iterator;
        /**
         * @param a_type
         * @param a_dup_func
         * @param f
         * @param seed
         * @virtual
         */
        vfunc_scan(a_type: GObject.GType, a_dup_func: GObject.BoxedCopyFunc, f: FoldFunc, seed: any): Iterator;
        /**
         * @param pred
         * @virtual
         */
        vfunc_filter(pred: Predicate): Iterator;
        /**
         * @param offset
         * @param length
         * @virtual
         */
        vfunc_chop(offset: number, length: number): Iterator;
        /**
         * @param a_type
         * @param a_dup_func
         * @param f
         * @virtual
         */
        vfunc_flat_map(a_type: GObject.GType, a_dup_func: GObject.BoxedCopyFunc, f: FlatMapFunc): Iterator;
        /**
         * @param forks
         * @virtual
         */
        vfunc_tee(forks: number): Iterator[];
        /**
         * @param pred
         * @virtual
         */
        vfunc_first_match(pred: Predicate): any | null;
        /**
         * @param pred
         * @virtual
         */
        vfunc_any_match(pred: Predicate): boolean;
        /**
         * @param pred
         * @virtual
         */
        vfunc_all_match(pred: Predicate): boolean;
        /**
         * @param compare
         * @virtual
         */
        vfunc_max(compare: GLib.CompareDataFunc): any;
        /**
         * @param compare
         * @virtual
         */
        vfunc_min(compare: GLib.CompareDataFunc): any;
        /**
         * @param compare
         * @virtual
         */
        vfunc_order_by(compare?: GLib.CompareDataFunc | null): Iterator;
        /**
         * @virtual
         */
        vfunc_get_element_type(): GObject.GType;
        iterator(): Iterator;
        /**
         * @virtual
         */
        vfunc_iterator(): Iterator;
        /**
         * @param key
         */
        contains(key: any): boolean;
        /**
         * @param key
         */
        remove(key: any): [boolean, any];
        /**
         * @param map
         */
        set_all(map: Map): void;
        /**
         * @param map
         */
        unset_all(map: Map): boolean;
        /**
         * @param map
         */
        remove_all(map: Map): boolean;
        /**
         * @param map
         */
        has_all(map: Map): boolean;
        /**
         * @param map
         */
        contains_all(map: Map): boolean;
        get_is_empty(): boolean;
        get_key_type(): GObject.GType;
        get_value_type(): GObject.GType;
        /**
         * @param map
         * @virtual
         */
        vfunc_set_all(map: Map): void;
        /**
         * @param map
         * @virtual
         */
        vfunc_unset_all(map: Map): boolean;
        /**
         * @param map
         * @virtual
         */
        vfunc_has_all(map: Map): boolean;
        /**
         * @virtual
         */
        vfunc_get_is_empty(): boolean;
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

    namespace AbstractMultiMap {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::k-type': (pspec: GObject.ParamSpec) => void;
            'notify::k-dup-func': (pspec: GObject.ParamSpec) => void;
            'notify::k-destroy-func': (pspec: GObject.ParamSpec) => void;
            'notify::v-type': (pspec: GObject.ParamSpec) => void;
            'notify::v-dup-func': (pspec: GObject.ParamSpec) => void;
            'notify::v-destroy-func': (pspec: GObject.ParamSpec) => void;
            'notify::size': (pspec: GObject.ParamSpec) => void;
            'notify::read-only': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps, MultiMap.ConstructorProps {
            k_type: GObject.GTypeInput;
            kType: GObject.GTypeInput;
            k_dup_func: GObject.BoxedCopyFunc;
            kDupFunc: GObject.BoxedCopyFunc;
            k_destroy_func: GLib.DestroyNotify;
            kDestroyFunc: GLib.DestroyNotify;
            v_type: GObject.GTypeInput;
            vType: GObject.GTypeInput;
            v_dup_func: GObject.BoxedCopyFunc;
            vDupFunc: GObject.BoxedCopyFunc;
            v_destroy_func: GLib.DestroyNotify;
            vDestroyFunc: GLib.DestroyNotify;
        }
    }

    /**
     * @gir-type Class
     */
    abstract class AbstractMultiMap extends GObject.Object implements MultiMap {
        static $gtype: GObject.GType<AbstractMultiMap>;

        // Properties

        /**
         * @construct-only
         */
        get k_type(): GObject.GType;
        /**
         * @construct-only
         */
        get kType(): GObject.GType;
        /**
         * @construct-only
         */
        get k_dup_func(): GObject.BoxedCopyFunc;
        /**
         * @construct-only
         */
        get kDupFunc(): GObject.BoxedCopyFunc;
        /**
         * @construct-only
         */
        get k_destroy_func(): GLib.DestroyNotify;
        /**
         * @construct-only
         */
        get kDestroyFunc(): GLib.DestroyNotify;
        /**
         * @construct-only
         */
        get v_type(): GObject.GType;
        /**
         * @construct-only
         */
        get vType(): GObject.GType;
        /**
         * @construct-only
         */
        get v_dup_func(): GObject.BoxedCopyFunc;
        /**
         * @construct-only
         */
        get vDupFunc(): GObject.BoxedCopyFunc;
        /**
         * @construct-only
         */
        get v_destroy_func(): GLib.DestroyNotify;
        /**
         * @construct-only
         */
        get vDestroyFunc(): GLib.DestroyNotify;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: AbstractMultiMap.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<AbstractMultiMap.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof AbstractMultiMap.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, AbstractMultiMap.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof AbstractMultiMap.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, AbstractMultiMap.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof AbstractMultiMap.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<AbstractMultiMap.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods

        /**
         * @virtual
         */
        vfunc_create_value_storage(): Collection;
        /**
         * @virtual
         */
        vfunc_create_multi_key_set(): MultiSet;
        /**
         * @virtual
         */
        vfunc_get_value_equal_func(): [EqualDataFunc, any];
        /**
         * @virtual
         */
        vfunc_reserved0(): void;
        /**
         * @virtual
         */
        vfunc_reserved1(): void;
        /**
         * @virtual
         */
        vfunc_reserved2(): void;
        /**
         * @virtual
         */
        vfunc_reserved3(): void;
        /**
         * @virtual
         */
        vfunc_reserved4(): void;
        /**
         * @virtual
         */
        vfunc_reserved5(): void;
        /**
         * @virtual
         */
        vfunc_reserved6(): void;
        /**
         * @virtual
         */
        vfunc_reserved7(): void;
        /**
         * @virtual
         */
        vfunc_reserved8(): void;
        /**
         * @virtual
         */
        vfunc_get_read_only_view(): MultiMap;

        // Methods

        create_value_storage(): Collection;
        create_multi_key_set(): MultiSet;
        get_value_equal_func(): [EqualDataFunc, any];
        reserved0(): void;
        reserved1(): void;
        reserved2(): void;
        reserved3(): void;
        reserved4(): void;
        reserved5(): void;
        reserved6(): void;
        reserved7(): void;
        reserved8(): void;
        get_read_only_view(): MultiMap;
        /**
         * @read-only
         * @category Inherited from Gee.MultiMap
         */
        get size(): number;
        /**
         * @read-only
         * @category Inherited from Gee.MultiMap
         */
        get read_only(): boolean;
        /**
         * @read-only
         * @category Inherited from Gee.MultiMap
         */
        get readOnly(): boolean;
        get_keys(): Set;
        get_all_keys(): MultiSet;
        get_values(): Collection;
        /**
         * @param key
         */
        contains(key: any): boolean;
        /**
         * @param key
         */
        get(key: any): Collection;
        /**
         * @param key
         * @param value
         */
        set(key: any, value: any): void;
        /**
         * @param args
         */
        // Conflicted with GObject.Object.set
        set(...args: never[]): any;
        /**
         * @param key
         * @param value
         */
        remove(key: any, value: any): boolean;
        /**
         * @param key
         */
        remove_all(key: any): boolean;
        clear(): void;
        map_iterator(): MapIterator;
        get_size(): number;
        get_read_only(): boolean;
        get_key_type(): GObject.GType;
        get_value_type(): GObject.GType;
        /**
         * @virtual
         */
        vfunc_get_keys(): Set;
        /**
         * @virtual
         */
        vfunc_get_all_keys(): MultiSet;
        /**
         * @virtual
         */
        vfunc_get_values(): Collection;
        /**
         * @param key
         * @virtual
         */
        vfunc_contains(key: any): boolean;
        /**
         * @param key
         * @virtual
         */
        vfunc_get(key: any): Collection;
        /**
         * @param key
         * @param value
         * @virtual
         */
        vfunc_set(key: any, value: any): void;
        /**
         * @param key
         * @param value
         * @virtual
         */
        vfunc_remove(key: any, value: any): boolean;
        /**
         * @param key
         * @virtual
         */
        vfunc_remove_all(key: any): boolean;
        /**
         * @virtual
         */
        vfunc_clear(): void;
        /**
         * @virtual
         */
        vfunc_map_iterator(): MapIterator;
        /**
         * @virtual
         */
        vfunc_get_size(): number;
        /**
         * @virtual
         */
        vfunc_get_read_only(): boolean;
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

    namespace AbstractMultiSet {
        // Signal signatures
        interface SignalSignatures extends AbstractCollection.SignalSignatures {
            'notify::g-type': (pspec: GObject.ParamSpec) => void;
            'notify::g-dup-func': (pspec: GObject.ParamSpec) => void;
            'notify::g-destroy-func': (pspec: GObject.ParamSpec) => void;
            'notify::size': (pspec: GObject.ParamSpec) => void;
            'notify::read-only': (pspec: GObject.ParamSpec) => void;
            'notify::read-only-view': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends AbstractCollection.ConstructorProps, MultiSet.ConstructorProps {
            g_type: GObject.GTypeInput;
            gType: GObject.GTypeInput;
            g_dup_func: GObject.BoxedCopyFunc;
            gDupFunc: GObject.BoxedCopyFunc;
            g_destroy_func: GLib.DestroyNotify;
            gDestroyFunc: GLib.DestroyNotify;
        }
    }

    /**
     * @gir-type Class
     */
    abstract class AbstractMultiSet extends AbstractCollection implements MultiSet {
        static $gtype: GObject.GType<AbstractMultiSet>;

        // Properties

        /**
         * @construct-only
         */
        get g_type(): GObject.GType;
        /**
         * @construct-only
         */
        get gType(): GObject.GType;
        /**
         * @construct-only
         */
        get g_dup_func(): GObject.BoxedCopyFunc;
        /**
         * @construct-only
         */
        get gDupFunc(): GObject.BoxedCopyFunc;
        /**
         * @construct-only
         */
        get g_destroy_func(): GLib.DestroyNotify;
        /**
         * @construct-only
         */
        get gDestroyFunc(): GLib.DestroyNotify;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: AbstractMultiSet.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<AbstractMultiSet.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof AbstractMultiSet.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, AbstractMultiSet.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof AbstractMultiSet.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, AbstractMultiSet.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof AbstractMultiSet.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<AbstractMultiSet.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods

        /**
         * @virtual
         */
        vfunc_reserved0(): void;
        /**
         * @virtual
         */
        vfunc_reserved1(): void;
        /**
         * @virtual
         */
        vfunc_reserved2(): void;
        /**
         * @virtual
         */
        vfunc_reserved3(): void;
        /**
         * @virtual
         */
        vfunc_reserved4(): void;
        /**
         * @virtual
         */
        vfunc_reserved5(): void;
        /**
         * @virtual
         */
        vfunc_reserved6(): void;
        /**
         * @virtual
         */
        vfunc_reserved7(): void;
        /**
         * @virtual
         */
        vfunc_reserved8(): void;
        /**
         * @virtual
         */
        vfunc_get_read_only_view(): MultiSet;

        // Methods

        reserved0(): void;
        reserved1(): void;
        reserved2(): void;
        reserved3(): void;
        reserved4(): void;
        reserved5(): void;
        reserved6(): void;
        reserved7(): void;
        reserved8(): void;
        get_read_only_view(): MultiSet;
        /**
         * @read-only
         * @category Inherited from Gee.Collection
         */
        get size(): number;
        /**
         * @read-only
         * @category Inherited from Gee.Collection
         */
        get read_only(): boolean;
        /**
         * @read-only
         * @category Inherited from Gee.Collection
         */
        get readOnly(): boolean;
        /**
         * @read-only
         * @category Inherited from Gee.Collection
         */
        get read_only_view(): Collection;
        /**
         * @read-only
         * @category Inherited from Gee.Collection
         */
        get readOnlyView(): Collection;
        /**
         * @param item
         */
        count(item: any): number;
        /**
         * @param item
         * @virtual
         */
        vfunc_count(item: any): number;
        /**
         * @param item
         */
        contains(item: any): boolean;
        /**
         * @param item
         */
        add(item: any): boolean;
        /**
         * @param item
         */
        remove(item: any): boolean;
        clear(): void;
        /**
         * @param collection
         */
        add_all(collection: Collection): boolean;
        /**
         * @param collection
         */
        contains_all(collection: Collection): boolean;
        /**
         * @param collection
         */
        remove_all(collection: Collection): boolean;
        /**
         * @param collection
         */
        retain_all(collection: Collection): boolean;
        to_array(): any[];
        /**
         * @param array
         */
        add_all_array(array: any[]): boolean;
        /**
         * @param array
         */
        contains_all_array(array: any[]): boolean;
        /**
         * @param array
         */
        remove_all_array(array: any[]): boolean;
        /**
         * @param iter
         */
        add_all_iterator(iter: Iterator): boolean;
        /**
         * @param iter
         */
        contains_all_iterator(iter: Iterator): boolean;
        /**
         * @param iter
         */
        remove_all_iterator(iter: Iterator): boolean;
        get_size(): number;
        get_is_empty(): boolean;
        get_read_only(): boolean;
        /**
         * @param item
         * @virtual
         */
        vfunc_contains(item: any): boolean;
        /**
         * @param item
         * @virtual
         */
        vfunc_add(item: any): boolean;
        /**
         * @param item
         * @virtual
         */
        vfunc_remove(item: any): boolean;
        /**
         * @virtual
         */
        vfunc_clear(): void;
        /**
         * @param collection
         * @virtual
         */
        vfunc_add_all(collection: Collection): boolean;
        /**
         * @param collection
         * @virtual
         */
        vfunc_contains_all(collection: Collection): boolean;
        /**
         * @param collection
         * @virtual
         */
        vfunc_remove_all(collection: Collection): boolean;
        /**
         * @param collection
         * @virtual
         */
        vfunc_retain_all(collection: Collection): boolean;
        /**
         * @virtual
         */
        vfunc_to_array(): any[];
        /**
         * @param array
         * @virtual
         */
        vfunc_add_all_array(array: any[]): boolean;
        /**
         * @param array
         * @virtual
         */
        vfunc_contains_all_array(array: any[]): boolean;
        /**
         * @param array
         * @virtual
         */
        vfunc_remove_all_array(array: any[]): boolean;
        /**
         * @param iter
         * @virtual
         */
        vfunc_add_all_iterator(iter: Iterator): boolean;
        /**
         * @param iter
         * @virtual
         */
        vfunc_contains_all_iterator(iter: Iterator): boolean;
        /**
         * @param iter
         * @virtual
         */
        vfunc_remove_all_iterator(iter: Iterator): boolean;
        /**
         * @virtual
         */
        vfunc_get_size(): number;
        /**
         * @virtual
         */
        vfunc_get_is_empty(): boolean;
        /**
         * @virtual
         */
        vfunc_get_read_only(): boolean;
        iterator(): Iterator;
        /**
         * @virtual
         */
        vfunc_iterator(): Iterator;
    }

    namespace AbstractQueue {
        // Signal signatures
        interface SignalSignatures extends AbstractCollection.SignalSignatures {
            'notify::g-type': (pspec: GObject.ParamSpec) => void;
            'notify::g-dup-func': (pspec: GObject.ParamSpec) => void;
            'notify::g-destroy-func': (pspec: GObject.ParamSpec) => void;
            'notify::capacity': (pspec: GObject.ParamSpec) => void;
            'notify::remaining-capacity': (pspec: GObject.ParamSpec) => void;
            'notify::is-full': (pspec: GObject.ParamSpec) => void;
            'notify::size': (pspec: GObject.ParamSpec) => void;
            'notify::read-only': (pspec: GObject.ParamSpec) => void;
            'notify::read-only-view': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends AbstractCollection.ConstructorProps, Queue.ConstructorProps {
            g_type: GObject.GTypeInput;
            gType: GObject.GTypeInput;
            g_dup_func: GObject.BoxedCopyFunc;
            gDupFunc: GObject.BoxedCopyFunc;
            g_destroy_func: GLib.DestroyNotify;
            gDestroyFunc: GLib.DestroyNotify;
            capacity: number;
            remaining_capacity: number;
            remainingCapacity: number;
            is_full: boolean;
            isFull: boolean;
        }
    }

    /**
     * @gir-type Class
     */
    abstract class AbstractQueue extends AbstractCollection implements Queue {
        static $gtype: GObject.GType<AbstractQueue>;

        // Properties

        /**
         * @construct-only
         */
        get g_type(): GObject.GType;
        /**
         * @construct-only
         */
        get gType(): GObject.GType;
        /**
         * @construct-only
         */
        get g_dup_func(): GObject.BoxedCopyFunc;
        /**
         * @construct-only
         */
        get gDupFunc(): GObject.BoxedCopyFunc;
        /**
         * @construct-only
         */
        get g_destroy_func(): GLib.DestroyNotify;
        /**
         * @construct-only
         */
        get gDestroyFunc(): GLib.DestroyNotify;
        /**
         * @read-only
         */
        get capacity(): number;
        /**
         * @read-only
         */
        get remaining_capacity(): number;
        /**
         * @read-only
         */
        get remainingCapacity(): number;
        /**
         * @read-only
         */
        get is_full(): boolean;
        /**
         * @read-only
         */
        get isFull(): boolean;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: AbstractQueue.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<AbstractQueue.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof AbstractQueue.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, AbstractQueue.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof AbstractQueue.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, AbstractQueue.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof AbstractQueue.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<AbstractQueue.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods

        /**
         * @virtual
         */
        vfunc_peek(): any | null;
        /**
         * @virtual
         */
        vfunc_poll(): any | null;
        /**
         * @virtual
         */
        vfunc_reserved0(): void;
        /**
         * @virtual
         */
        vfunc_reserved1(): void;
        /**
         * @virtual
         */
        vfunc_reserved2(): void;
        /**
         * @virtual
         */
        vfunc_reserved3(): void;
        /**
         * @virtual
         */
        vfunc_reserved4(): void;
        /**
         * @virtual
         */
        vfunc_reserved5(): void;
        /**
         * @virtual
         */
        vfunc_reserved6(): void;
        /**
         * @virtual
         */
        vfunc_reserved7(): void;
        /**
         * @virtual
         */
        vfunc_reserved8(): void;
        /**
         * @virtual
         */
        vfunc_reserved9(): void;
        /**
         * @virtual
         */
        vfunc_get_capacity(): number;
        /**
         * @virtual
         */
        vfunc_get_remaining_capacity(): number;
        /**
         * @virtual
         */
        vfunc_get_is_full(): boolean;

        // Methods

        peek(): any | null;
        poll(): any | null;
        reserved0(): void;
        reserved1(): void;
        reserved2(): void;
        reserved3(): void;
        reserved4(): void;
        reserved5(): void;
        reserved6(): void;
        reserved7(): void;
        reserved8(): void;
        reserved9(): void;
        get_capacity(): number;
        get_remaining_capacity(): number;
        get_is_full(): boolean;
        /**
         * @read-only
         * @category Inherited from Gee.Collection
         */
        get size(): number;
        /**
         * @read-only
         * @category Inherited from Gee.Collection
         */
        get read_only(): boolean;
        /**
         * @read-only
         * @category Inherited from Gee.Collection
         */
        get readOnly(): boolean;
        /**
         * @read-only
         * @category Inherited from Gee.Collection
         */
        get read_only_view(): Collection;
        /**
         * @read-only
         * @category Inherited from Gee.Collection
         */
        get readOnlyView(): Collection;
        /**
         * @param element
         */
        offer(element: any): boolean;
        /**
         * @param recipient
         * @param amount
         */
        drain(recipient: Collection, amount: number): number;
        /**
         * @param element
         * @virtual
         */
        vfunc_offer(element: any): boolean;
        /**
         * @param recipient
         * @param amount
         * @virtual
         */
        vfunc_drain(recipient: Collection, amount: number): number;
        /**
         * @param item
         */
        contains(item: any): boolean;
        /**
         * @param item
         */
        add(item: any): boolean;
        /**
         * @param item
         */
        remove(item: any): boolean;
        clear(): void;
        /**
         * @param collection
         */
        add_all(collection: Collection): boolean;
        /**
         * @param collection
         */
        contains_all(collection: Collection): boolean;
        /**
         * @param collection
         */
        remove_all(collection: Collection): boolean;
        /**
         * @param collection
         */
        retain_all(collection: Collection): boolean;
        to_array(): any[];
        /**
         * @param array
         */
        add_all_array(array: any[]): boolean;
        /**
         * @param array
         */
        contains_all_array(array: any[]): boolean;
        /**
         * @param array
         */
        remove_all_array(array: any[]): boolean;
        /**
         * @param iter
         */
        add_all_iterator(iter: Iterator): boolean;
        /**
         * @param iter
         */
        contains_all_iterator(iter: Iterator): boolean;
        /**
         * @param iter
         */
        remove_all_iterator(iter: Iterator): boolean;
        get_size(): number;
        get_is_empty(): boolean;
        get_read_only(): boolean;
        get_read_only_view(): Collection;
        /**
         * @param item
         * @virtual
         */
        vfunc_contains(item: any): boolean;
        /**
         * @param item
         * @virtual
         */
        vfunc_add(item: any): boolean;
        /**
         * @param item
         * @virtual
         */
        vfunc_remove(item: any): boolean;
        /**
         * @virtual
         */
        vfunc_clear(): void;
        /**
         * @param collection
         * @virtual
         */
        vfunc_add_all(collection: Collection): boolean;
        /**
         * @param collection
         * @virtual
         */
        vfunc_contains_all(collection: Collection): boolean;
        /**
         * @param collection
         * @virtual
         */
        vfunc_remove_all(collection: Collection): boolean;
        /**
         * @param collection
         * @virtual
         */
        vfunc_retain_all(collection: Collection): boolean;
        /**
         * @virtual
         */
        vfunc_to_array(): any[];
        /**
         * @param array
         * @virtual
         */
        vfunc_add_all_array(array: any[]): boolean;
        /**
         * @param array
         * @virtual
         */
        vfunc_contains_all_array(array: any[]): boolean;
        /**
         * @param array
         * @virtual
         */
        vfunc_remove_all_array(array: any[]): boolean;
        /**
         * @param iter
         * @virtual
         */
        vfunc_add_all_iterator(iter: Iterator): boolean;
        /**
         * @param iter
         * @virtual
         */
        vfunc_contains_all_iterator(iter: Iterator): boolean;
        /**
         * @param iter
         * @virtual
         */
        vfunc_remove_all_iterator(iter: Iterator): boolean;
        /**
         * @virtual
         */
        vfunc_get_size(): number;
        /**
         * @virtual
         */
        vfunc_get_is_empty(): boolean;
        /**
         * @virtual
         */
        vfunc_get_read_only(): boolean;
        /**
         * @virtual
         */
        vfunc_get_read_only_view(): Collection;
        iterator(): Iterator;
        /**
         * @virtual
         */
        vfunc_iterator(): Iterator;
    }

    namespace AbstractSet {
        // Signal signatures
        interface SignalSignatures extends AbstractCollection.SignalSignatures {
            'notify::g-type': (pspec: GObject.ParamSpec) => void;
            'notify::g-dup-func': (pspec: GObject.ParamSpec) => void;
            'notify::g-destroy-func': (pspec: GObject.ParamSpec) => void;
            'notify::read-only-view': (pspec: GObject.ParamSpec) => void;
            'notify::size': (pspec: GObject.ParamSpec) => void;
            'notify::read-only': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends AbstractCollection.ConstructorProps, Set.ConstructorProps {
            g_type: GObject.GTypeInput;
            gType: GObject.GTypeInput;
            g_dup_func: GObject.BoxedCopyFunc;
            gDupFunc: GObject.BoxedCopyFunc;
            g_destroy_func: GLib.DestroyNotify;
            gDestroyFunc: GLib.DestroyNotify;
            read_only_view: Set;
            readOnlyView: Set;
        }
    }

    /**
     * @gir-type Class
     */
    abstract class AbstractSet extends AbstractCollection implements Set {
        static $gtype: GObject.GType<AbstractSet>;

        // Properties

        /**
         * @construct-only
         */
        get g_type(): GObject.GType;
        /**
         * @construct-only
         */
        get gType(): GObject.GType;
        /**
         * @construct-only
         */
        get g_dup_func(): GObject.BoxedCopyFunc;
        /**
         * @construct-only
         */
        get gDupFunc(): GObject.BoxedCopyFunc;
        /**
         * @construct-only
         */
        get g_destroy_func(): GLib.DestroyNotify;
        /**
         * @construct-only
         */
        get gDestroyFunc(): GLib.DestroyNotify;
        /**
         * @read-only
         */
        get read_only_view(): Set;
        /**
         * @read-only
         */
        get readOnlyView(): Set;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: AbstractSet.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<AbstractSet.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof AbstractSet.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, AbstractSet.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof AbstractSet.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, AbstractSet.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof AbstractSet.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<AbstractSet.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods

        /**
         * @virtual
         */
        vfunc_reserved0(): void;
        /**
         * @virtual
         */
        vfunc_reserved1(): void;
        /**
         * @virtual
         */
        vfunc_reserved2(): void;
        /**
         * @virtual
         */
        vfunc_reserved3(): void;
        /**
         * @virtual
         */
        vfunc_reserved4(): void;
        /**
         * @virtual
         */
        vfunc_reserved5(): void;
        /**
         * @virtual
         */
        vfunc_reserved6(): void;
        /**
         * @virtual
         */
        vfunc_reserved7(): void;
        /**
         * @virtual
         */
        vfunc_reserved8(): void;
        /**
         * @virtual
         */
        vfunc_reserved9(): void;
        /**
         * @virtual
         */
        vfunc_get_read_only_view(): Set;

        // Methods

        reserved0(): void;
        reserved1(): void;
        reserved2(): void;
        reserved3(): void;
        reserved4(): void;
        reserved5(): void;
        reserved6(): void;
        reserved7(): void;
        reserved8(): void;
        reserved9(): void;
        get_read_only_view(): Set;
        /**
         * @read-only
         * @category Inherited from Gee.Collection
         */
        get size(): number;
        /**
         * @read-only
         * @category Inherited from Gee.Collection
         */
        get read_only(): boolean;
        /**
         * @read-only
         * @category Inherited from Gee.Collection
         */
        get readOnly(): boolean;
        /**
         * @param item
         */
        contains(item: any): boolean;
        /**
         * @param item
         */
        add(item: any): boolean;
        /**
         * @param item
         */
        remove(item: any): boolean;
        clear(): void;
        /**
         * @param collection
         */
        add_all(collection: Collection): boolean;
        /**
         * @param collection
         */
        contains_all(collection: Collection): boolean;
        /**
         * @param collection
         */
        remove_all(collection: Collection): boolean;
        /**
         * @param collection
         */
        retain_all(collection: Collection): boolean;
        to_array(): any[];
        /**
         * @param array
         */
        add_all_array(array: any[]): boolean;
        /**
         * @param array
         */
        contains_all_array(array: any[]): boolean;
        /**
         * @param array
         */
        remove_all_array(array: any[]): boolean;
        /**
         * @param iter
         */
        add_all_iterator(iter: Iterator): boolean;
        /**
         * @param iter
         */
        contains_all_iterator(iter: Iterator): boolean;
        /**
         * @param iter
         */
        remove_all_iterator(iter: Iterator): boolean;
        get_size(): number;
        get_is_empty(): boolean;
        get_read_only(): boolean;
        /**
         * @param item
         * @virtual
         */
        vfunc_contains(item: any): boolean;
        /**
         * @param item
         * @virtual
         */
        vfunc_add(item: any): boolean;
        /**
         * @param item
         * @virtual
         */
        vfunc_remove(item: any): boolean;
        /**
         * @virtual
         */
        vfunc_clear(): void;
        /**
         * @param collection
         * @virtual
         */
        vfunc_add_all(collection: Collection): boolean;
        /**
         * @param collection
         * @virtual
         */
        vfunc_contains_all(collection: Collection): boolean;
        /**
         * @param collection
         * @virtual
         */
        vfunc_remove_all(collection: Collection): boolean;
        /**
         * @param collection
         * @virtual
         */
        vfunc_retain_all(collection: Collection): boolean;
        /**
         * @virtual
         */
        vfunc_to_array(): any[];
        /**
         * @param array
         * @virtual
         */
        vfunc_add_all_array(array: any[]): boolean;
        /**
         * @param array
         * @virtual
         */
        vfunc_contains_all_array(array: any[]): boolean;
        /**
         * @param array
         * @virtual
         */
        vfunc_remove_all_array(array: any[]): boolean;
        /**
         * @param iter
         * @virtual
         */
        vfunc_add_all_iterator(iter: Iterator): boolean;
        /**
         * @param iter
         * @virtual
         */
        vfunc_contains_all_iterator(iter: Iterator): boolean;
        /**
         * @param iter
         * @virtual
         */
        vfunc_remove_all_iterator(iter: Iterator): boolean;
        /**
         * @virtual
         */
        vfunc_get_size(): number;
        /**
         * @virtual
         */
        vfunc_get_is_empty(): boolean;
        /**
         * @virtual
         */
        vfunc_get_read_only(): boolean;
        iterator(): Iterator;
        /**
         * @virtual
         */
        vfunc_iterator(): Iterator;
    }

    namespace AbstractSortedMap {
        // Signal signatures
        interface SignalSignatures extends AbstractMap.SignalSignatures {
            'notify::k-type': (pspec: GObject.ParamSpec) => void;
            'notify::k-dup-func': (pspec: GObject.ParamSpec) => void;
            'notify::k-destroy-func': (pspec: GObject.ParamSpec) => void;
            'notify::v-type': (pspec: GObject.ParamSpec) => void;
            'notify::v-dup-func': (pspec: GObject.ParamSpec) => void;
            'notify::v-destroy-func': (pspec: GObject.ParamSpec) => void;
            'notify::ascending-keys': (pspec: GObject.ParamSpec) => void;
            'notify::ascending-entries': (pspec: GObject.ParamSpec) => void;
            'notify::read-only-view': (pspec: GObject.ParamSpec) => void;
            'notify::size': (pspec: GObject.ParamSpec) => void;
            'notify::read-only': (pspec: GObject.ParamSpec) => void;
            'notify::keys': (pspec: GObject.ParamSpec) => void;
            'notify::values': (pspec: GObject.ParamSpec) => void;
            'notify::entries': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends AbstractMap.ConstructorProps, SortedMap.ConstructorProps {
            k_type: GObject.GTypeInput;
            kType: GObject.GTypeInput;
            k_dup_func: GObject.BoxedCopyFunc;
            kDupFunc: GObject.BoxedCopyFunc;
            k_destroy_func: GLib.DestroyNotify;
            kDestroyFunc: GLib.DestroyNotify;
            v_type: GObject.GTypeInput;
            vType: GObject.GTypeInput;
            v_dup_func: GObject.BoxedCopyFunc;
            vDupFunc: GObject.BoxedCopyFunc;
            v_destroy_func: GLib.DestroyNotify;
            vDestroyFunc: GLib.DestroyNotify;
            ascending_keys: SortedSet;
            ascendingKeys: SortedSet;
            ascending_entries: SortedSet;
            ascendingEntries: SortedSet;
            readOnlyView: AbstractSortedMap;
            read_only_view: AbstractSortedMap;
        }
    }

    /**
     * @gir-type Class
     */
    abstract class AbstractSortedMap extends AbstractMap implements SortedMap {
        static $gtype: GObject.GType<AbstractSortedMap>;

        // Properties

        /**
         * @construct-only
         */
        get k_type(): GObject.GType;
        /**
         * @construct-only
         */
        get kType(): GObject.GType;
        /**
         * @construct-only
         */
        get k_dup_func(): GObject.BoxedCopyFunc;
        /**
         * @construct-only
         */
        get kDupFunc(): GObject.BoxedCopyFunc;
        /**
         * @construct-only
         */
        get k_destroy_func(): GLib.DestroyNotify;
        /**
         * @construct-only
         */
        get kDestroyFunc(): GLib.DestroyNotify;
        /**
         * @construct-only
         */
        get v_type(): GObject.GType;
        /**
         * @construct-only
         */
        get vType(): GObject.GType;
        /**
         * @construct-only
         */
        get v_dup_func(): GObject.BoxedCopyFunc;
        /**
         * @construct-only
         */
        get vDupFunc(): GObject.BoxedCopyFunc;
        /**
         * @construct-only
         */
        get v_destroy_func(): GLib.DestroyNotify;
        /**
         * @construct-only
         */
        get vDestroyFunc(): GLib.DestroyNotify;
        /**
         * @read-only
         */
        get ascending_keys(): SortedSet;
        /**
         * @read-only
         */
        get ascendingKeys(): SortedSet;
        /**
         * @read-only
         */
        get ascending_entries(): SortedSet;
        /**
         * @read-only
         */
        get ascendingEntries(): SortedSet;
        /**
         * @read-only
         */
        get readOnlyView(): AbstractSortedMap;
        /**
         * @read-only
         */
        get read_only_view(): AbstractSortedMap;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: AbstractSortedMap.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<AbstractSortedMap.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof AbstractSortedMap.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, AbstractSortedMap.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof AbstractSortedMap.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, AbstractSortedMap.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof AbstractSortedMap.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<AbstractSortedMap.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods

        /**
         * @param before
         * @virtual
         */
        vfunc_head_map(before: any): SortedMap;
        /**
         * @param after
         * @virtual
         */
        vfunc_tail_map(after: any): SortedMap;
        /**
         * @param before
         * @param after
         * @virtual
         */
        vfunc_sub_map(before: any, after: any): SortedMap;
        /**
         * @virtual
         */
        vfunc_reserved0(): void;
        /**
         * @virtual
         */
        vfunc_reserved1(): void;
        /**
         * @virtual
         */
        vfunc_reserved2(): void;
        /**
         * @virtual
         */
        vfunc_reserved3(): void;
        /**
         * @virtual
         */
        vfunc_reserved4(): void;
        /**
         * @virtual
         */
        vfunc_reserved5(): void;
        /**
         * @virtual
         */
        vfunc_reserved6(): void;
        /**
         * @virtual
         */
        vfunc_reserved7(): void;
        /**
         * @virtual
         */
        vfunc_reserved8(): void;
        /**
         * @virtual
         */
        vfunc_reserved9(): void;
        /**
         * @virtual
         */
        vfunc_get_ascending_keys(): SortedSet;
        /**
         * @virtual
         */
        vfunc_get_ascending_entries(): SortedSet;

        // Methods

        /**
         * @param before
         */
        head_map(before: any): SortedMap;
        /**
         * @param after
         */
        tail_map(after: any): SortedMap;
        /**
         * @param before
         * @param after
         */
        sub_map(before: any, after: any): SortedMap;
        reserved0(): void;
        reserved1(): void;
        reserved2(): void;
        reserved3(): void;
        reserved4(): void;
        reserved5(): void;
        reserved6(): void;
        reserved7(): void;
        reserved8(): void;
        reserved9(): void;
        get_ascending_keys(): SortedSet;
        get_ascending_entries(): SortedSet;
        /**
         * @read-only
         * @category Inherited from Gee.Map
         */
        get size(): number;
        /**
         * @read-only
         * @category Inherited from Gee.Map
         */
        get read_only(): boolean;
        /**
         * @read-only
         * @category Inherited from Gee.Map
         */
        get readOnly(): boolean;
        /**
         * @read-only
         * @category Inherited from Gee.Map
         */
        get keys(): Set;
        /**
         * @read-only
         * @category Inherited from Gee.Map
         */
        get values(): Collection;
        /**
         * @read-only
         * @category Inherited from Gee.Map
         */
        get entries(): Set;
        get_read_only_view(): SortedMap;
        /**
         * @virtual
         */
        vfunc_get_read_only_view(): SortedMap;
        /**
         * @param key
         */
        has_key(key: any): boolean;
        /**
         * @param key
         */
        contains(key: any): boolean;
        /**
         * @param key
         * @param value
         */
        has(key: any, value: any): boolean;
        /**
         * @param key
         */
        get(key: any): any | null;
        /**
         * @param key
         * @param value
         */
        set(key: any, value: any): void;
        /**
         * @param args
         */
        // Conflicted with GObject.Object.set
        set(...args: never[]): any;
        /**
         * @param key
         */
        unset(key: any): [boolean, any];
        /**
         * @param key
         */
        remove(key: any): [boolean, any];
        clear(): void;
        map_iterator(): MapIterator;
        /**
         * @param map
         */
        set_all(map: Map): void;
        /**
         * @param map
         */
        unset_all(map: Map): boolean;
        /**
         * @param map
         */
        remove_all(map: Map): boolean;
        /**
         * @param map
         */
        has_all(map: Map): boolean;
        /**
         * @param map
         */
        contains_all(map: Map): boolean;
        get_size(): number;
        get_is_empty(): boolean;
        get_read_only(): boolean;
        get_keys(): Set;
        get_values(): Collection;
        get_entries(): Set;
        get_key_type(): GObject.GType;
        get_value_type(): GObject.GType;
        /**
         * @param key
         * @virtual
         */
        vfunc_has_key(key: any): boolean;
        /**
         * @param key
         * @param value
         * @virtual
         */
        vfunc_has(key: any, value: any): boolean;
        /**
         * @param key
         * @virtual
         */
        vfunc_get(key: any): any | null;
        /**
         * @param key
         * @param value
         * @virtual
         */
        vfunc_set(key: any, value: any): void;
        /**
         * @param key
         * @virtual
         */
        vfunc_unset(key: any): [boolean, any];
        /**
         * @virtual
         */
        vfunc_clear(): void;
        /**
         * @virtual
         */
        vfunc_map_iterator(): MapIterator;
        /**
         * @param map
         * @virtual
         */
        vfunc_set_all(map: Map): void;
        /**
         * @param map
         * @virtual
         */
        vfunc_unset_all(map: Map): boolean;
        /**
         * @param map
         * @virtual
         */
        vfunc_has_all(map: Map): boolean;
        /**
         * @virtual
         */
        vfunc_get_size(): number;
        /**
         * @virtual
         */
        vfunc_get_is_empty(): boolean;
        /**
         * @virtual
         */
        vfunc_get_read_only(): boolean;
        /**
         * @virtual
         */
        vfunc_get_keys(): Set;
        /**
         * @virtual
         */
        vfunc_get_values(): Collection;
        /**
         * @virtual
         */
        vfunc_get_entries(): Set;
    }

    namespace AbstractSortedSet {
        // Signal signatures
        interface SignalSignatures extends AbstractSet.SignalSignatures {
            'notify::g-type': (pspec: GObject.ParamSpec) => void;
            'notify::g-dup-func': (pspec: GObject.ParamSpec) => void;
            'notify::g-destroy-func': (pspec: GObject.ParamSpec) => void;
            'notify::read-only-view': (pspec: GObject.ParamSpec) => void;
            'notify::size': (pspec: GObject.ParamSpec) => void;
            'notify::read-only': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends AbstractSet.ConstructorProps, SortedSet.ConstructorProps {
            g_type: GObject.GTypeInput;
            gType: GObject.GTypeInput;
            g_dup_func: GObject.BoxedCopyFunc;
            gDupFunc: GObject.BoxedCopyFunc;
            g_destroy_func: GLib.DestroyNotify;
            gDestroyFunc: GLib.DestroyNotify;
            read_only_view: SortedSet;
            readOnlyView: SortedSet;
        }
    }

    /**
     * @gir-type Class
     */
    abstract class AbstractSortedSet extends AbstractSet implements SortedSet {
        static $gtype: GObject.GType<AbstractSortedSet>;

        // Properties

        /**
         * @construct-only
         */
        get g_type(): GObject.GType;
        /**
         * @construct-only
         */
        get gType(): GObject.GType;
        /**
         * @construct-only
         */
        get g_dup_func(): GObject.BoxedCopyFunc;
        /**
         * @construct-only
         */
        get gDupFunc(): GObject.BoxedCopyFunc;
        /**
         * @construct-only
         */
        get g_destroy_func(): GLib.DestroyNotify;
        /**
         * @construct-only
         */
        get gDestroyFunc(): GLib.DestroyNotify;
        /**
         * @read-only
         */
        get read_only_view(): SortedSet;
        /**
         * @read-only
         */
        get readOnlyView(): SortedSet;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: AbstractSortedSet.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<AbstractSortedSet.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof AbstractSortedSet.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, AbstractSortedSet.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof AbstractSortedSet.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, AbstractSortedSet.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof AbstractSortedSet.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<AbstractSortedSet.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods

        /**
         * @virtual
         */
        vfunc_first(): any;
        /**
         * @virtual
         */
        vfunc_last(): any;
        /**
         * @param element
         * @virtual
         */
        vfunc_iterator_at(element: any): Iterator | null;
        /**
         * @param element
         * @virtual
         */
        vfunc_lower(element: any): any | null;
        /**
         * @param element
         * @virtual
         */
        vfunc_higher(element: any): any | null;
        /**
         * @param element
         * @virtual
         */
        vfunc_floor(element: any): any | null;
        /**
         * @param element
         * @virtual
         */
        vfunc_ceil(element: any): any | null;
        /**
         * @param before
         * @virtual
         */
        vfunc_head_set(before: any): SortedSet;
        /**
         * @param after
         * @virtual
         */
        vfunc_tail_set(after: any): SortedSet;
        /**
         * @param from
         * @param to
         * @virtual
         */
        vfunc_sub_set(from: any, to: any): SortedSet;
        /**
         * @virtual
         */
        vfunc_reserved0(): void;
        /**
         * @virtual
         */
        vfunc_reserved1(): void;
        /**
         * @virtual
         */
        vfunc_reserved2(): void;
        /**
         * @virtual
         */
        vfunc_reserved3(): void;
        /**
         * @virtual
         */
        vfunc_reserved4(): void;
        /**
         * @virtual
         */
        vfunc_reserved5(): void;
        /**
         * @virtual
         */
        vfunc_reserved6(): void;
        /**
         * @virtual
         */
        vfunc_reserved7(): void;
        /**
         * @virtual
         */
        vfunc_reserved8(): void;
        /**
         * @virtual
         */
        vfunc_reserved9(): void;
        /**
         * @virtual
         */
        vfunc_get_read_only_view(): SortedSet;

        // Methods

        first(): any;
        last(): any;
        /**
         * @param element
         */
        iterator_at(element: any): Iterator | null;
        /**
         * @param element
         */
        lower(element: any): any | null;
        /**
         * @param element
         */
        higher(element: any): any | null;
        /**
         * @param element
         */
        floor(element: any): any | null;
        /**
         * @param element
         */
        ceil(element: any): any | null;
        /**
         * @param before
         */
        head_set(before: any): SortedSet;
        /**
         * @param after
         */
        tail_set(after: any): SortedSet;
        /**
         * @param from
         * @param to
         */
        sub_set(from: any, to: any): SortedSet;
        reserved0(): void;
        reserved1(): void;
        reserved2(): void;
        reserved3(): void;
        reserved4(): void;
        reserved5(): void;
        reserved6(): void;
        reserved7(): void;
        reserved8(): void;
        reserved9(): void;
        get_read_only_view(): SortedSet;
    }

    namespace ArrayList {
        // Signal signatures
        interface SignalSignatures extends AbstractBidirList.SignalSignatures {
            'notify::g-type': (pspec: GObject.ParamSpec) => void;
            'notify::g-dup-func': (pspec: GObject.ParamSpec) => void;
            'notify::g-destroy-func': (pspec: GObject.ParamSpec) => void;
            'notify::read-only-view': (pspec: GObject.ParamSpec) => void;
            'notify::size': (pspec: GObject.ParamSpec) => void;
            'notify::read-only': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends AbstractBidirList.ConstructorProps {
            g_type: GObject.GTypeInput;
            gType: GObject.GTypeInput;
            g_dup_func: GObject.BoxedCopyFunc;
            gDupFunc: GObject.BoxedCopyFunc;
            g_destroy_func: GLib.DestroyNotify;
            gDestroyFunc: GLib.DestroyNotify;
        }
    }

    /**
     * @gir-type Class
     */
    class ArrayList extends AbstractBidirList {
        static $gtype: GObject.GType<ArrayList>;

        // Properties

        /**
         * @construct-only
         */
        get g_type(): GObject.GType;
        /**
         * @construct-only
         */
        get gType(): GObject.GType;
        /**
         * @construct-only
         */
        get g_dup_func(): GObject.BoxedCopyFunc;
        /**
         * @construct-only
         */
        get gDupFunc(): GObject.BoxedCopyFunc;
        /**
         * @construct-only
         */
        get g_destroy_func(): GLib.DestroyNotify;
        /**
         * @construct-only
         */
        get gDestroyFunc(): GLib.DestroyNotify;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: ArrayList.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<ArrayList.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](
            g_type: GObject.GType,
            g_dup_func: GObject.BoxedCopyFunc,
            equal_func?: EqualDataFunc | null,
        ): ArrayList;

        static wrap(
            g_type: GObject.GType,
            g_dup_func: GObject.BoxedCopyFunc,
            items: any[],
            equal_func?: EqualDataFunc | null,
        ): ArrayList;

        // Signals

        /** @signal */
        connect<K extends keyof ArrayList.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ArrayList.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof ArrayList.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ArrayList.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof ArrayList.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<ArrayList.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * @param collection
         */
        add_all(collection: Collection): boolean;
        get_equal_func(): [EqualDataFunc, any];
    }

    namespace ArrayQueue {
        // Signal signatures
        interface SignalSignatures extends AbstractQueue.SignalSignatures {
            'notify::g-type': (pspec: GObject.ParamSpec) => void;
            'notify::g-dup-func': (pspec: GObject.ParamSpec) => void;
            'notify::g-destroy-func': (pspec: GObject.ParamSpec) => void;
            'notify::is-empty': (pspec: GObject.ParamSpec) => void;
            'notify::capacity': (pspec: GObject.ParamSpec) => void;
            'notify::remaining-capacity': (pspec: GObject.ParamSpec) => void;
            'notify::is-full': (pspec: GObject.ParamSpec) => void;
            'notify::size': (pspec: GObject.ParamSpec) => void;
            'notify::read-only': (pspec: GObject.ParamSpec) => void;
            'notify::read-only-view': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends AbstractQueue.ConstructorProps, Deque.ConstructorProps {
            g_type: GObject.GTypeInput;
            gType: GObject.GTypeInput;
            g_dup_func: GObject.BoxedCopyFunc;
            gDupFunc: GObject.BoxedCopyFunc;
            g_destroy_func: GLib.DestroyNotify;
            gDestroyFunc: GLib.DestroyNotify;
            is_empty: boolean;
            isEmpty: boolean;
        }
    }

    /**
     * @gir-type Class
     */
    class ArrayQueue extends AbstractQueue implements Deque {
        static $gtype: GObject.GType<ArrayQueue>;

        // Properties

        /**
         * @construct-only
         */
        get g_type(): GObject.GType;
        /**
         * @construct-only
         */
        get gType(): GObject.GType;
        /**
         * @construct-only
         */
        get g_dup_func(): GObject.BoxedCopyFunc;
        /**
         * @construct-only
         */
        get gDupFunc(): GObject.BoxedCopyFunc;
        /**
         * @construct-only
         */
        get g_destroy_func(): GLib.DestroyNotify;
        /**
         * @construct-only
         */
        get gDestroyFunc(): GLib.DestroyNotify;
        /**
         * @read-only
         */
        get is_empty(): boolean;
        /**
         * @read-only
         */
        get isEmpty(): boolean;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: ArrayQueue.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<ArrayQueue.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](
            g_type: GObject.GType,
            g_dup_func: GObject.BoxedCopyFunc,
            equal_func?: EqualDataFunc | null,
        ): ArrayQueue;

        // Signals

        /** @signal */
        connect<K extends keyof ArrayQueue.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ArrayQueue.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof ArrayQueue.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ArrayQueue.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof ArrayQueue.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<ArrayQueue.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        get_equal_func(): [EqualDataFunc, any];
        get_is_empty(): boolean;
        /**
         * @read-only
         * @category Inherited from Gee.Queue
         */
        get capacity(): number;
        /**
         * @read-only
         * @category Inherited from Gee.Queue
         */
        get remaining_capacity(): number;
        /**
         * @read-only
         * @category Inherited from Gee.Queue
         */
        get remainingCapacity(): number;
        /**
         * @read-only
         * @category Inherited from Gee.Queue
         */
        get is_full(): boolean;
        /**
         * @read-only
         * @category Inherited from Gee.Queue
         */
        get isFull(): boolean;
        /**
         * @param element
         */
        offer_head(element: any): boolean;
        peek_head(): any | null;
        poll_head(): any | null;
        /**
         * @param recipient
         * @param amount
         */
        drain_head(recipient: Collection, amount: number): number;
        /**
         * @param element
         */
        offer_tail(element: any): boolean;
        peek_tail(): any | null;
        poll_tail(): any | null;
        /**
         * @param recipient
         * @param amount
         */
        drain_tail(recipient: Collection, amount: number): number;
        /**
         * @param element
         * @virtual
         */
        vfunc_offer_head(element: any): boolean;
        /**
         * @virtual
         */
        vfunc_peek_head(): any | null;
        /**
         * @virtual
         */
        vfunc_poll_head(): any | null;
        /**
         * @param recipient
         * @param amount
         * @virtual
         */
        vfunc_drain_head(recipient: Collection, amount: number): number;
        /**
         * @param element
         * @virtual
         */
        vfunc_offer_tail(element: any): boolean;
        /**
         * @virtual
         */
        vfunc_peek_tail(): any | null;
        /**
         * @virtual
         */
        vfunc_poll_tail(): any | null;
        /**
         * @param recipient
         * @param amount
         * @virtual
         */
        vfunc_drain_tail(recipient: Collection, amount: number): number;
        /**
         * @param element
         */
        offer(element: any): boolean;
        peek(): any | null;
        poll(): any | null;
        /**
         * @param recipient
         * @param amount
         */
        drain(recipient: Collection, amount: number): number;
        get_capacity(): number;
        get_remaining_capacity(): number;
        get_is_full(): boolean;
        /**
         * @param element
         * @virtual
         */
        vfunc_offer(element: any): boolean;
        /**
         * @virtual
         */
        vfunc_peek(): any | null;
        /**
         * @virtual
         */
        vfunc_poll(): any | null;
        /**
         * @param recipient
         * @param amount
         * @virtual
         */
        vfunc_drain(recipient: Collection, amount: number): number;
        /**
         * @virtual
         */
        vfunc_get_capacity(): number;
        /**
         * @virtual
         */
        vfunc_get_remaining_capacity(): number;
        /**
         * @virtual
         */
        vfunc_get_is_full(): boolean;
    }

    namespace ConcurrentList {
        // Signal signatures
        interface SignalSignatures extends AbstractList.SignalSignatures {
            'notify::g-type': (pspec: GObject.ParamSpec) => void;
            'notify::g-dup-func': (pspec: GObject.ParamSpec) => void;
            'notify::g-destroy-func': (pspec: GObject.ParamSpec) => void;
            'notify::is-empty': (pspec: GObject.ParamSpec) => void;
            'notify::read-only-view': (pspec: GObject.ParamSpec) => void;
            'notify::size': (pspec: GObject.ParamSpec) => void;
            'notify::read-only': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends AbstractList.ConstructorProps {
            g_type: GObject.GTypeInput;
            gType: GObject.GTypeInput;
            g_dup_func: GObject.BoxedCopyFunc;
            gDupFunc: GObject.BoxedCopyFunc;
            g_destroy_func: GLib.DestroyNotify;
            gDestroyFunc: GLib.DestroyNotify;
            is_empty: boolean;
            isEmpty: boolean;
        }
    }

    /**
     * @gir-type Class
     */
    class ConcurrentList extends AbstractList {
        static $gtype: GObject.GType<ConcurrentList>;

        // Properties

        /**
         * @construct-only
         */
        get g_type(): GObject.GType;
        /**
         * @construct-only
         */
        get gType(): GObject.GType;
        /**
         * @construct-only
         */
        get g_dup_func(): GObject.BoxedCopyFunc;
        /**
         * @construct-only
         */
        get gDupFunc(): GObject.BoxedCopyFunc;
        /**
         * @construct-only
         */
        get g_destroy_func(): GLib.DestroyNotify;
        /**
         * @construct-only
         */
        get gDestroyFunc(): GLib.DestroyNotify;
        /**
         * @read-only
         */
        get is_empty(): boolean;
        /**
         * @read-only
         */
        get isEmpty(): boolean;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: ConcurrentList.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<ConcurrentList.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](
            g_type: GObject.GType,
            g_dup_func: GObject.BoxedCopyFunc,
            equal_func?: EqualDataFunc | null,
        ): ConcurrentList;

        // Signals

        /** @signal */
        connect<K extends keyof ConcurrentList.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ConcurrentList.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof ConcurrentList.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ConcurrentList.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof ConcurrentList.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<ConcurrentList.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        get_equal_func(): [EqualDataFunc, any];
        get_is_empty(): boolean;
    }

    namespace ConcurrentSet {
        // Signal signatures
        interface SignalSignatures extends AbstractSortedSet.SignalSignatures {
            'notify::g-type': (pspec: GObject.ParamSpec) => void;
            'notify::g-dup-func': (pspec: GObject.ParamSpec) => void;
            'notify::g-destroy-func': (pspec: GObject.ParamSpec) => void;
            'notify::read-only-view': (pspec: GObject.ParamSpec) => void;
            'notify::size': (pspec: GObject.ParamSpec) => void;
            'notify::read-only': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends AbstractSortedSet.ConstructorProps {
            g_type: GObject.GTypeInput;
            gType: GObject.GTypeInput;
            g_dup_func: GObject.BoxedCopyFunc;
            gDupFunc: GObject.BoxedCopyFunc;
            g_destroy_func: GLib.DestroyNotify;
            gDestroyFunc: GLib.DestroyNotify;
        }
    }

    /**
     * @gir-type Class
     */
    class ConcurrentSet extends AbstractSortedSet {
        static $gtype: GObject.GType<ConcurrentSet>;

        // Properties

        /**
         * @construct-only
         */
        get g_type(): GObject.GType;
        /**
         * @construct-only
         */
        get gType(): GObject.GType;
        /**
         * @construct-only
         */
        get g_dup_func(): GObject.BoxedCopyFunc;
        /**
         * @construct-only
         */
        get gDupFunc(): GObject.BoxedCopyFunc;
        /**
         * @construct-only
         */
        get g_destroy_func(): GLib.DestroyNotify;
        /**
         * @construct-only
         */
        get gDestroyFunc(): GLib.DestroyNotify;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: ConcurrentSet.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<ConcurrentSet.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](
            g_type: GObject.GType,
            g_dup_func: GObject.BoxedCopyFunc,
            compare_func?: GLib.CompareDataFunc | null,
        ): ConcurrentSet;

        // Signals

        /** @signal */
        connect<K extends keyof ConcurrentSet.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ConcurrentSet.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof ConcurrentSet.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ConcurrentSet.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof ConcurrentSet.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<ConcurrentSet.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;
    }

    namespace HashMap {
        // Signal signatures
        interface SignalSignatures extends AbstractMap.SignalSignatures {
            'notify::k-type': (pspec: GObject.ParamSpec) => void;
            'notify::k-dup-func': (pspec: GObject.ParamSpec) => void;
            'notify::k-destroy-func': (pspec: GObject.ParamSpec) => void;
            'notify::v-type': (pspec: GObject.ParamSpec) => void;
            'notify::v-dup-func': (pspec: GObject.ParamSpec) => void;
            'notify::v-destroy-func': (pspec: GObject.ParamSpec) => void;
            'notify::size': (pspec: GObject.ParamSpec) => void;
            'notify::read-only': (pspec: GObject.ParamSpec) => void;
            'notify::keys': (pspec: GObject.ParamSpec) => void;
            'notify::values': (pspec: GObject.ParamSpec) => void;
            'notify::entries': (pspec: GObject.ParamSpec) => void;
            'notify::read-only-view': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends AbstractMap.ConstructorProps {
            k_type: GObject.GTypeInput;
            kType: GObject.GTypeInput;
            k_dup_func: GObject.BoxedCopyFunc;
            kDupFunc: GObject.BoxedCopyFunc;
            k_destroy_func: GLib.DestroyNotify;
            kDestroyFunc: GLib.DestroyNotify;
            v_type: GObject.GTypeInput;
            vType: GObject.GTypeInput;
            v_dup_func: GObject.BoxedCopyFunc;
            vDupFunc: GObject.BoxedCopyFunc;
            v_destroy_func: GLib.DestroyNotify;
            vDestroyFunc: GLib.DestroyNotify;
        }
    }

    /**
     * @gir-type Class
     */
    class HashMap extends AbstractMap {
        static $gtype: GObject.GType<HashMap>;

        // Properties

        /**
         * @construct-only
         */
        get k_type(): GObject.GType;
        /**
         * @construct-only
         */
        get kType(): GObject.GType;
        /**
         * @construct-only
         */
        get k_dup_func(): GObject.BoxedCopyFunc;
        /**
         * @construct-only
         */
        get kDupFunc(): GObject.BoxedCopyFunc;
        /**
         * @construct-only
         */
        get k_destroy_func(): GLib.DestroyNotify;
        /**
         * @construct-only
         */
        get kDestroyFunc(): GLib.DestroyNotify;
        /**
         * @construct-only
         */
        get v_type(): GObject.GType;
        /**
         * @construct-only
         */
        get vType(): GObject.GType;
        /**
         * @construct-only
         */
        get v_dup_func(): GObject.BoxedCopyFunc;
        /**
         * @construct-only
         */
        get vDupFunc(): GObject.BoxedCopyFunc;
        /**
         * @construct-only
         */
        get v_destroy_func(): GLib.DestroyNotify;
        /**
         * @construct-only
         */
        get vDestroyFunc(): GLib.DestroyNotify;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: HashMap.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<HashMap.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](
            k_type: GObject.GType,
            k_dup_func: GObject.BoxedCopyFunc,
            v_type: GObject.GType,
            v_dup_func: GObject.BoxedCopyFunc,
            key_hash_func?: HashDataFunc | null,
            key_equal_func?: EqualDataFunc | null,
            value_equal_func?: EqualDataFunc | null,
        ): HashMap;

        // Signals

        /** @signal */
        connect<K extends keyof HashMap.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, HashMap.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof HashMap.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, HashMap.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof HashMap.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<HashMap.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        get_key_hash_func(): [HashDataFunc, any];
        get_key_equal_func(): [EqualDataFunc, any];
        get_value_equal_func(): [EqualDataFunc, any];
    }

    namespace HashMultiMap {
        // Signal signatures
        interface SignalSignatures extends AbstractMultiMap.SignalSignatures {
            'notify::k-type': (pspec: GObject.ParamSpec) => void;
            'notify::k-dup-func': (pspec: GObject.ParamSpec) => void;
            'notify::k-destroy-func': (pspec: GObject.ParamSpec) => void;
            'notify::v-type': (pspec: GObject.ParamSpec) => void;
            'notify::v-dup-func': (pspec: GObject.ParamSpec) => void;
            'notify::v-destroy-func': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends AbstractMultiMap.ConstructorProps {
            k_type: GObject.GTypeInput;
            kType: GObject.GTypeInput;
            k_dup_func: GObject.BoxedCopyFunc;
            kDupFunc: GObject.BoxedCopyFunc;
            k_destroy_func: GLib.DestroyNotify;
            kDestroyFunc: GLib.DestroyNotify;
            v_type: GObject.GTypeInput;
            vType: GObject.GTypeInput;
            v_dup_func: GObject.BoxedCopyFunc;
            vDupFunc: GObject.BoxedCopyFunc;
            v_destroy_func: GLib.DestroyNotify;
            vDestroyFunc: GLib.DestroyNotify;
        }
    }

    /**
     * @gir-type Class
     */
    class HashMultiMap extends AbstractMultiMap {
        static $gtype: GObject.GType<HashMultiMap>;

        // Properties

        /**
         * @construct-only
         */
        get k_type(): GObject.GType;
        /**
         * @construct-only
         */
        get kType(): GObject.GType;
        /**
         * @construct-only
         */
        get k_dup_func(): GObject.BoxedCopyFunc;
        /**
         * @construct-only
         */
        get kDupFunc(): GObject.BoxedCopyFunc;
        /**
         * @construct-only
         */
        get k_destroy_func(): GLib.DestroyNotify;
        /**
         * @construct-only
         */
        get kDestroyFunc(): GLib.DestroyNotify;
        /**
         * @construct-only
         */
        get v_type(): GObject.GType;
        /**
         * @construct-only
         */
        get vType(): GObject.GType;
        /**
         * @construct-only
         */
        get v_dup_func(): GObject.BoxedCopyFunc;
        /**
         * @construct-only
         */
        get vDupFunc(): GObject.BoxedCopyFunc;
        /**
         * @construct-only
         */
        get v_destroy_func(): GLib.DestroyNotify;
        /**
         * @construct-only
         */
        get vDestroyFunc(): GLib.DestroyNotify;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: HashMultiMap.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<HashMultiMap.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](
            k_type: GObject.GType,
            k_dup_func: GObject.BoxedCopyFunc,
            v_type: GObject.GType,
            v_dup_func: GObject.BoxedCopyFunc,
            key_hash_func?: HashDataFunc | null,
            key_equal_func?: EqualDataFunc | null,
            value_hash_func?: HashDataFunc | null,
            value_equal_func?: EqualDataFunc | null,
        ): HashMultiMap;

        // Signals

        /** @signal */
        connect<K extends keyof HashMultiMap.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, HashMultiMap.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof HashMultiMap.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, HashMultiMap.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof HashMultiMap.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<HashMultiMap.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        get_key_hash_func(): [HashDataFunc, any];
        get_key_equal_func(): [EqualDataFunc, any];
        get_value_hash_func(): [HashDataFunc, any];
        get_value_equal_func(): [EqualDataFunc, any];
    }

    namespace HashMultiSet {
        // Signal signatures
        interface SignalSignatures extends AbstractMultiSet.SignalSignatures {
            'notify::g-type': (pspec: GObject.ParamSpec) => void;
            'notify::g-dup-func': (pspec: GObject.ParamSpec) => void;
            'notify::g-destroy-func': (pspec: GObject.ParamSpec) => void;
            'notify::size': (pspec: GObject.ParamSpec) => void;
            'notify::read-only': (pspec: GObject.ParamSpec) => void;
            'notify::read-only-view': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends AbstractMultiSet.ConstructorProps {
            g_type: GObject.GTypeInput;
            gType: GObject.GTypeInput;
            g_dup_func: GObject.BoxedCopyFunc;
            gDupFunc: GObject.BoxedCopyFunc;
            g_destroy_func: GLib.DestroyNotify;
            gDestroyFunc: GLib.DestroyNotify;
        }
    }

    /**
     * @gir-type Class
     */
    class HashMultiSet extends AbstractMultiSet {
        static $gtype: GObject.GType<HashMultiSet>;

        // Properties

        /**
         * @construct-only
         */
        get g_type(): GObject.GType;
        /**
         * @construct-only
         */
        get gType(): GObject.GType;
        /**
         * @construct-only
         */
        get g_dup_func(): GObject.BoxedCopyFunc;
        /**
         * @construct-only
         */
        get gDupFunc(): GObject.BoxedCopyFunc;
        /**
         * @construct-only
         */
        get g_destroy_func(): GLib.DestroyNotify;
        /**
         * @construct-only
         */
        get gDestroyFunc(): GLib.DestroyNotify;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: HashMultiSet.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<HashMultiSet.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](
            g_type: GObject.GType,
            g_dup_func: GObject.BoxedCopyFunc,
            hash_func?: HashDataFunc | null,
            equal_func?: EqualDataFunc | null,
        ): HashMultiSet;

        static broken(
            g_type: GObject.GType,
            g_dup_func: GObject.BoxedCopyFunc,
            hash_func?: HashDataFunc | null,
            equal_func?: EqualDataFunc | null,
        ): HashMultiSet;

        // Signals

        /** @signal */
        connect<K extends keyof HashMultiSet.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, HashMultiSet.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof HashMultiSet.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, HashMultiSet.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof HashMultiSet.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<HashMultiSet.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        get_hash_func(): [HashDataFunc, any];
        get_equal_func(): [EqualDataFunc, any];
    }

    namespace HashSet {
        // Signal signatures
        interface SignalSignatures extends AbstractSet.SignalSignatures {
            'notify::g-type': (pspec: GObject.ParamSpec) => void;
            'notify::g-dup-func': (pspec: GObject.ParamSpec) => void;
            'notify::g-destroy-func': (pspec: GObject.ParamSpec) => void;
            'notify::read-only-view': (pspec: GObject.ParamSpec) => void;
            'notify::size': (pspec: GObject.ParamSpec) => void;
            'notify::read-only': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends AbstractSet.ConstructorProps {
            g_type: GObject.GTypeInput;
            gType: GObject.GTypeInput;
            g_dup_func: GObject.BoxedCopyFunc;
            gDupFunc: GObject.BoxedCopyFunc;
            g_destroy_func: GLib.DestroyNotify;
            gDestroyFunc: GLib.DestroyNotify;
        }
    }

    /**
     * @gir-type Class
     */
    class HashSet extends AbstractSet {
        static $gtype: GObject.GType<HashSet>;

        // Properties

        /**
         * @construct-only
         */
        get g_type(): GObject.GType;
        /**
         * @construct-only
         */
        get gType(): GObject.GType;
        /**
         * @construct-only
         */
        get g_dup_func(): GObject.BoxedCopyFunc;
        /**
         * @construct-only
         */
        get gDupFunc(): GObject.BoxedCopyFunc;
        /**
         * @construct-only
         */
        get g_destroy_func(): GLib.DestroyNotify;
        /**
         * @construct-only
         */
        get gDestroyFunc(): GLib.DestroyNotify;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: HashSet.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<HashSet.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](
            g_type: GObject.GType,
            g_dup_func: GObject.BoxedCopyFunc,
            hash_func?: HashDataFunc | null,
            equal_func?: EqualDataFunc | null,
        ): HashSet;

        // Signals

        /** @signal */
        connect<K extends keyof HashSet.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, HashSet.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof HashSet.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, HashSet.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof HashSet.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<HashSet.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        get_hash_func(): [HashDataFunc, any];
        get_equal_func(): [EqualDataFunc, any];
    }

    namespace Lazy {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}
    }

    /**
     * @gir-type Class
     */
    class Lazy {
        static $gtype: GObject.GType<Lazy>;

        // Fields

        ref_count: number;

        // Constructors

        _init(...args: any[]): void;

        static ['new'](g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, func: LazyFunc): Lazy;

        static from_value(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, item: any): Lazy;

        // Signals

        /** @signal */
        connect<K extends keyof Lazy.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Lazy.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Lazy.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Lazy.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Lazy.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Lazy.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        ['eval'](): void;
        get(): any;
        get_value(): any;
        get_future(): Future | null;
    }

    namespace LinkedList {
        // Signal signatures
        interface SignalSignatures extends AbstractBidirList.SignalSignatures {
            'notify::g-type': (pspec: GObject.ParamSpec) => void;
            'notify::g-dup-func': (pspec: GObject.ParamSpec) => void;
            'notify::g-destroy-func': (pspec: GObject.ParamSpec) => void;
            'notify::read-only-view': (pspec: GObject.ParamSpec) => void;
            'notify::size': (pspec: GObject.ParamSpec) => void;
            'notify::read-only': (pspec: GObject.ParamSpec) => void;
            'notify::capacity': (pspec: GObject.ParamSpec) => void;
            'notify::remaining-capacity': (pspec: GObject.ParamSpec) => void;
            'notify::is-full': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps
            extends AbstractBidirList.ConstructorProps, Queue.ConstructorProps, Deque.ConstructorProps {
            g_type: GObject.GTypeInput;
            gType: GObject.GTypeInput;
            g_dup_func: GObject.BoxedCopyFunc;
            gDupFunc: GObject.BoxedCopyFunc;
            g_destroy_func: GLib.DestroyNotify;
            gDestroyFunc: GLib.DestroyNotify;
            readOnlyView: LinkedList;
            read_only_view: LinkedList;
        }
    }

    /**
     * @gir-type Class
     */
    class LinkedList extends AbstractBidirList implements Queue, Deque {
        static $gtype: GObject.GType<LinkedList>;

        // Properties

        /**
         * @construct-only
         */
        get g_type(): GObject.GType;
        /**
         * @construct-only
         */
        get gType(): GObject.GType;
        /**
         * @construct-only
         */
        get g_dup_func(): GObject.BoxedCopyFunc;
        /**
         * @construct-only
         */
        get gDupFunc(): GObject.BoxedCopyFunc;
        /**
         * @construct-only
         */
        get g_destroy_func(): GLib.DestroyNotify;
        /**
         * @construct-only
         */
        get gDestroyFunc(): GLib.DestroyNotify;
        /**
         * @read-only
         */
        get readOnlyView(): LinkedList;
        /**
         * @read-only
         */
        get read_only_view(): LinkedList;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: LinkedList.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<LinkedList.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](
            g_type: GObject.GType,
            g_dup_func: GObject.BoxedCopyFunc,
            equal_func?: EqualDataFunc | null,
        ): LinkedList;

        // Signals

        /** @signal */
        connect<K extends keyof LinkedList.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, LinkedList.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof LinkedList.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, LinkedList.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof LinkedList.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<LinkedList.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        first(): any;
        last(): any;
        get_equal_func(): [EqualDataFunc, any];
        /**
         * @read-only
         * @category Inherited from Gee.Queue
         */
        get capacity(): number;
        /**
         * @read-only
         * @category Inherited from Gee.Queue
         */
        get remaining_capacity(): number;
        /**
         * @read-only
         * @category Inherited from Gee.Queue
         */
        get remainingCapacity(): number;
        /**
         * @read-only
         * @category Inherited from Gee.Queue
         */
        get is_full(): boolean;
        /**
         * @read-only
         * @category Inherited from Gee.Queue
         */
        get isFull(): boolean;
        /**
         * @param element
         */
        offer(element: any): boolean;
        peek(): any | null;
        poll(): any | null;
        /**
         * @param recipient
         * @param amount
         */
        drain(recipient: Collection, amount: number): number;
        get_capacity(): number;
        get_remaining_capacity(): number;
        get_is_full(): boolean;
        /**
         * @param element
         * @virtual
         */
        vfunc_offer(element: any): boolean;
        /**
         * @virtual
         */
        vfunc_peek(): any | null;
        /**
         * @virtual
         */
        vfunc_poll(): any | null;
        /**
         * @param recipient
         * @param amount
         * @virtual
         */
        vfunc_drain(recipient: Collection, amount: number): number;
        /**
         * @virtual
         */
        vfunc_get_capacity(): number;
        /**
         * @virtual
         */
        vfunc_get_remaining_capacity(): number;
        /**
         * @virtual
         */
        vfunc_get_is_full(): boolean;
        /**
         * @param element
         */
        offer_head(element: any): boolean;
        peek_head(): any | null;
        poll_head(): any | null;
        /**
         * @param recipient
         * @param amount
         */
        drain_head(recipient: Collection, amount: number): number;
        /**
         * @param element
         */
        offer_tail(element: any): boolean;
        peek_tail(): any | null;
        poll_tail(): any | null;
        /**
         * @param recipient
         * @param amount
         */
        drain_tail(recipient: Collection, amount: number): number;
        /**
         * @param element
         * @virtual
         */
        vfunc_offer_head(element: any): boolean;
        /**
         * @virtual
         */
        vfunc_peek_head(): any | null;
        /**
         * @virtual
         */
        vfunc_poll_head(): any | null;
        /**
         * @param recipient
         * @param amount
         * @virtual
         */
        vfunc_drain_head(recipient: Collection, amount: number): number;
        /**
         * @param element
         * @virtual
         */
        vfunc_offer_tail(element: any): boolean;
        /**
         * @virtual
         */
        vfunc_peek_tail(): any | null;
        /**
         * @virtual
         */
        vfunc_poll_tail(): any | null;
        /**
         * @param recipient
         * @param amount
         * @virtual
         */
        vfunc_drain_tail(recipient: Collection, amount: number): number;
    }

    namespace PriorityQueue {
        // Signal signatures
        interface SignalSignatures extends AbstractQueue.SignalSignatures {
            'notify::g-type': (pspec: GObject.ParamSpec) => void;
            'notify::g-dup-func': (pspec: GObject.ParamSpec) => void;
            'notify::g-destroy-func': (pspec: GObject.ParamSpec) => void;
            'notify::capacity': (pspec: GObject.ParamSpec) => void;
            'notify::remaining-capacity': (pspec: GObject.ParamSpec) => void;
            'notify::is-full': (pspec: GObject.ParamSpec) => void;
            'notify::size': (pspec: GObject.ParamSpec) => void;
            'notify::read-only': (pspec: GObject.ParamSpec) => void;
            'notify::read-only-view': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends AbstractQueue.ConstructorProps {
            g_type: GObject.GTypeInput;
            gType: GObject.GTypeInput;
            g_dup_func: GObject.BoxedCopyFunc;
            gDupFunc: GObject.BoxedCopyFunc;
            g_destroy_func: GLib.DestroyNotify;
            gDestroyFunc: GLib.DestroyNotify;
        }
    }

    /**
     * @gir-type Class
     */
    class PriorityQueue extends AbstractQueue {
        static $gtype: GObject.GType<PriorityQueue>;

        // Properties

        /**
         * @construct-only
         */
        get g_type(): GObject.GType;
        /**
         * @construct-only
         */
        get gType(): GObject.GType;
        /**
         * @construct-only
         */
        get g_dup_func(): GObject.BoxedCopyFunc;
        /**
         * @construct-only
         */
        get gDupFunc(): GObject.BoxedCopyFunc;
        /**
         * @construct-only
         */
        get g_destroy_func(): GLib.DestroyNotify;
        /**
         * @construct-only
         */
        get gDestroyFunc(): GLib.DestroyNotify;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: PriorityQueue.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<PriorityQueue.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](
            g_type: GObject.GType,
            g_dup_func: GObject.BoxedCopyFunc,
            compare_func?: GLib.CompareDataFunc | null,
        ): PriorityQueue;

        // Signals

        /** @signal */
        connect<K extends keyof PriorityQueue.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, PriorityQueue.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof PriorityQueue.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, PriorityQueue.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof PriorityQueue.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<PriorityQueue.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * @param element
         */
        offer(element: any): boolean;
        /**
         * @param recipient
         * @param amount
         */
        drain(recipient: Collection, amount: number): number;
        get_compare_func(): [GLib.CompareDataFunc, any];
    }

    namespace Promise {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}
    }

    /**
     * @gir-type Class
     */
    class Promise {
        static $gtype: GObject.GType<Promise>;

        // Fields

        ref_count: number;

        // Constructors

        _init(...args: any[]): void;

        static ['new'](g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc): Promise;

        // Signals

        /** @signal */
        connect<K extends keyof Promise.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Promise.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Promise.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Promise.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Promise.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Promise.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * @param value
         */
        set_value(value: any): void;
        /**
         * @param exception
         */
        set_exception(exception: GLib.Error): void;
        get_future(): Future;
    }

    namespace TreeMap {
        // Signal signatures
        interface SignalSignatures extends AbstractBidirSortedMap.SignalSignatures {
            'notify::k-type': (pspec: GObject.ParamSpec) => void;
            'notify::k-dup-func': (pspec: GObject.ParamSpec) => void;
            'notify::k-destroy-func': (pspec: GObject.ParamSpec) => void;
            'notify::v-type': (pspec: GObject.ParamSpec) => void;
            'notify::v-dup-func': (pspec: GObject.ParamSpec) => void;
            'notify::v-destroy-func': (pspec: GObject.ParamSpec) => void;
            'notify::read-only-view': (pspec: GObject.ParamSpec) => void;
            'notify::ascending-keys': (pspec: GObject.ParamSpec) => void;
            'notify::ascending-entries': (pspec: GObject.ParamSpec) => void;
            'notify::size': (pspec: GObject.ParamSpec) => void;
            'notify::read-only': (pspec: GObject.ParamSpec) => void;
            'notify::keys': (pspec: GObject.ParamSpec) => void;
            'notify::values': (pspec: GObject.ParamSpec) => void;
            'notify::entries': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends AbstractBidirSortedMap.ConstructorProps {
            k_type: GObject.GTypeInput;
            kType: GObject.GTypeInput;
            k_dup_func: GObject.BoxedCopyFunc;
            kDupFunc: GObject.BoxedCopyFunc;
            k_destroy_func: GLib.DestroyNotify;
            kDestroyFunc: GLib.DestroyNotify;
            v_type: GObject.GTypeInput;
            vType: GObject.GTypeInput;
            v_dup_func: GObject.BoxedCopyFunc;
            vDupFunc: GObject.BoxedCopyFunc;
            v_destroy_func: GLib.DestroyNotify;
            vDestroyFunc: GLib.DestroyNotify;
        }
    }

    /**
     * @gir-type Class
     */
    class TreeMap extends AbstractBidirSortedMap {
        static $gtype: GObject.GType<TreeMap>;

        // Properties

        /**
         * @construct-only
         */
        get k_type(): GObject.GType;
        /**
         * @construct-only
         */
        get kType(): GObject.GType;
        /**
         * @construct-only
         */
        get k_dup_func(): GObject.BoxedCopyFunc;
        /**
         * @construct-only
         */
        get kDupFunc(): GObject.BoxedCopyFunc;
        /**
         * @construct-only
         */
        get k_destroy_func(): GLib.DestroyNotify;
        /**
         * @construct-only
         */
        get kDestroyFunc(): GLib.DestroyNotify;
        /**
         * @construct-only
         */
        get v_type(): GObject.GType;
        /**
         * @construct-only
         */
        get vType(): GObject.GType;
        /**
         * @construct-only
         */
        get v_dup_func(): GObject.BoxedCopyFunc;
        /**
         * @construct-only
         */
        get vDupFunc(): GObject.BoxedCopyFunc;
        /**
         * @construct-only
         */
        get v_destroy_func(): GLib.DestroyNotify;
        /**
         * @construct-only
         */
        get vDestroyFunc(): GLib.DestroyNotify;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: TreeMap.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<TreeMap.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](
            k_type: GObject.GType,
            k_dup_func: GObject.BoxedCopyFunc,
            v_type: GObject.GType,
            v_dup_func: GObject.BoxedCopyFunc,
            key_compare_func?: GLib.CompareDataFunc | null,
            value_equal_func?: EqualDataFunc | null,
        ): TreeMap;

        // Signals

        /** @signal */
        connect<K extends keyof TreeMap.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, TreeMap.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof TreeMap.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, TreeMap.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof TreeMap.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<TreeMap.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        get_key_compare_func(): [GLib.CompareDataFunc, any];
        get_value_equal_func(): [EqualDataFunc, any];
    }

    namespace TreeMultiMap {
        // Signal signatures
        interface SignalSignatures extends AbstractMultiMap.SignalSignatures {
            'notify::k-type': (pspec: GObject.ParamSpec) => void;
            'notify::k-dup-func': (pspec: GObject.ParamSpec) => void;
            'notify::k-destroy-func': (pspec: GObject.ParamSpec) => void;
            'notify::v-type': (pspec: GObject.ParamSpec) => void;
            'notify::v-dup-func': (pspec: GObject.ParamSpec) => void;
            'notify::v-destroy-func': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends AbstractMultiMap.ConstructorProps {
            k_type: GObject.GTypeInput;
            kType: GObject.GTypeInput;
            k_dup_func: GObject.BoxedCopyFunc;
            kDupFunc: GObject.BoxedCopyFunc;
            k_destroy_func: GLib.DestroyNotify;
            kDestroyFunc: GLib.DestroyNotify;
            v_type: GObject.GTypeInput;
            vType: GObject.GTypeInput;
            v_dup_func: GObject.BoxedCopyFunc;
            vDupFunc: GObject.BoxedCopyFunc;
            v_destroy_func: GLib.DestroyNotify;
            vDestroyFunc: GLib.DestroyNotify;
        }
    }

    /**
     * @gir-type Class
     */
    class TreeMultiMap extends AbstractMultiMap {
        static $gtype: GObject.GType<TreeMultiMap>;

        // Properties

        /**
         * @construct-only
         */
        get k_type(): GObject.GType;
        /**
         * @construct-only
         */
        get kType(): GObject.GType;
        /**
         * @construct-only
         */
        get k_dup_func(): GObject.BoxedCopyFunc;
        /**
         * @construct-only
         */
        get kDupFunc(): GObject.BoxedCopyFunc;
        /**
         * @construct-only
         */
        get k_destroy_func(): GLib.DestroyNotify;
        /**
         * @construct-only
         */
        get kDestroyFunc(): GLib.DestroyNotify;
        /**
         * @construct-only
         */
        get v_type(): GObject.GType;
        /**
         * @construct-only
         */
        get vType(): GObject.GType;
        /**
         * @construct-only
         */
        get v_dup_func(): GObject.BoxedCopyFunc;
        /**
         * @construct-only
         */
        get vDupFunc(): GObject.BoxedCopyFunc;
        /**
         * @construct-only
         */
        get v_destroy_func(): GLib.DestroyNotify;
        /**
         * @construct-only
         */
        get vDestroyFunc(): GLib.DestroyNotify;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: TreeMultiMap.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<TreeMultiMap.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](
            k_type: GObject.GType,
            k_dup_func: GObject.BoxedCopyFunc,
            v_type: GObject.GType,
            v_dup_func: GObject.BoxedCopyFunc,
            key_compare_func?: GLib.CompareDataFunc | null,
            value_compare_func?: GLib.CompareDataFunc | null,
        ): TreeMultiMap;

        // Signals

        /** @signal */
        connect<K extends keyof TreeMultiMap.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, TreeMultiMap.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof TreeMultiMap.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, TreeMultiMap.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof TreeMultiMap.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<TreeMultiMap.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        get_key_compare_func(): [GLib.CompareDataFunc, any];
        get_value_compare_func(): [GLib.CompareDataFunc, any];
    }

    namespace TreeMultiSet {
        // Signal signatures
        interface SignalSignatures extends AbstractMultiSet.SignalSignatures {
            'notify::g-type': (pspec: GObject.ParamSpec) => void;
            'notify::g-dup-func': (pspec: GObject.ParamSpec) => void;
            'notify::g-destroy-func': (pspec: GObject.ParamSpec) => void;
            'notify::size': (pspec: GObject.ParamSpec) => void;
            'notify::read-only': (pspec: GObject.ParamSpec) => void;
            'notify::read-only-view': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends AbstractMultiSet.ConstructorProps {
            g_type: GObject.GTypeInput;
            gType: GObject.GTypeInput;
            g_dup_func: GObject.BoxedCopyFunc;
            gDupFunc: GObject.BoxedCopyFunc;
            g_destroy_func: GLib.DestroyNotify;
            gDestroyFunc: GLib.DestroyNotify;
        }
    }

    /**
     * @gir-type Class
     */
    class TreeMultiSet extends AbstractMultiSet {
        static $gtype: GObject.GType<TreeMultiSet>;

        // Properties

        /**
         * @construct-only
         */
        get g_type(): GObject.GType;
        /**
         * @construct-only
         */
        get gType(): GObject.GType;
        /**
         * @construct-only
         */
        get g_dup_func(): GObject.BoxedCopyFunc;
        /**
         * @construct-only
         */
        get gDupFunc(): GObject.BoxedCopyFunc;
        /**
         * @construct-only
         */
        get g_destroy_func(): GLib.DestroyNotify;
        /**
         * @construct-only
         */
        get gDestroyFunc(): GLib.DestroyNotify;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: TreeMultiSet.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<TreeMultiSet.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](
            g_type: GObject.GType,
            g_dup_func: GObject.BoxedCopyFunc,
            compare_func?: GLib.CompareDataFunc | null,
        ): TreeMultiSet;

        // Signals

        /** @signal */
        connect<K extends keyof TreeMultiSet.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, TreeMultiSet.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof TreeMultiSet.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, TreeMultiSet.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof TreeMultiSet.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<TreeMultiSet.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        get_compare_func(): [GLib.CompareDataFunc, any];
    }

    namespace TreeSet {
        // Signal signatures
        interface SignalSignatures extends AbstractBidirSortedSet.SignalSignatures {
            'notify::g-type': (pspec: GObject.ParamSpec) => void;
            'notify::g-dup-func': (pspec: GObject.ParamSpec) => void;
            'notify::g-destroy-func': (pspec: GObject.ParamSpec) => void;
            'notify::read-only-view': (pspec: GObject.ParamSpec) => void;
            'notify::size': (pspec: GObject.ParamSpec) => void;
            'notify::read-only': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends AbstractBidirSortedSet.ConstructorProps {
            g_type: GObject.GTypeInput;
            gType: GObject.GTypeInput;
            g_dup_func: GObject.BoxedCopyFunc;
            gDupFunc: GObject.BoxedCopyFunc;
            g_destroy_func: GLib.DestroyNotify;
            gDestroyFunc: GLib.DestroyNotify;
        }
    }

    /**
     * @gir-type Class
     */
    class TreeSet extends AbstractBidirSortedSet {
        static $gtype: GObject.GType<TreeSet>;

        // Properties

        /**
         * @construct-only
         */
        get g_type(): GObject.GType;
        /**
         * @construct-only
         */
        get gType(): GObject.GType;
        /**
         * @construct-only
         */
        get g_dup_func(): GObject.BoxedCopyFunc;
        /**
         * @construct-only
         */
        get gDupFunc(): GObject.BoxedCopyFunc;
        /**
         * @construct-only
         */
        get g_destroy_func(): GLib.DestroyNotify;
        /**
         * @construct-only
         */
        get gDestroyFunc(): GLib.DestroyNotify;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: TreeSet.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<TreeSet.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](
            g_type: GObject.GType,
            g_dup_func: GObject.BoxedCopyFunc,
            compare_func?: GLib.CompareDataFunc | null,
        ): TreeSet;

        // Signals

        /** @signal */
        connect<K extends keyof TreeSet.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, TreeSet.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof TreeSet.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, TreeSet.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof TreeSet.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<TreeSet.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        get_compare_func(): [GLib.CompareDataFunc, any];
    }

    namespace UnrolledLinkedList {
        // Signal signatures
        interface SignalSignatures extends AbstractBidirList.SignalSignatures {
            'notify::g-type': (pspec: GObject.ParamSpec) => void;
            'notify::g-dup-func': (pspec: GObject.ParamSpec) => void;
            'notify::g-destroy-func': (pspec: GObject.ParamSpec) => void;
            'notify::read-only-view': (pspec: GObject.ParamSpec) => void;
            'notify::size': (pspec: GObject.ParamSpec) => void;
            'notify::read-only': (pspec: GObject.ParamSpec) => void;
            'notify::capacity': (pspec: GObject.ParamSpec) => void;
            'notify::remaining-capacity': (pspec: GObject.ParamSpec) => void;
            'notify::is-full': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps
            extends AbstractBidirList.ConstructorProps, Queue.ConstructorProps, Deque.ConstructorProps {
            g_type: GObject.GTypeInput;
            gType: GObject.GTypeInput;
            g_dup_func: GObject.BoxedCopyFunc;
            gDupFunc: GObject.BoxedCopyFunc;
            g_destroy_func: GLib.DestroyNotify;
            gDestroyFunc: GLib.DestroyNotify;
            readOnlyView: UnrolledLinkedList;
            read_only_view: UnrolledLinkedList;
        }
    }

    /**
     * @gir-type Class
     */
    class UnrolledLinkedList extends AbstractBidirList implements Queue, Deque {
        static $gtype: GObject.GType<UnrolledLinkedList>;

        // Properties

        /**
         * @construct-only
         */
        get g_type(): GObject.GType;
        /**
         * @construct-only
         */
        get gType(): GObject.GType;
        /**
         * @construct-only
         */
        get g_dup_func(): GObject.BoxedCopyFunc;
        /**
         * @construct-only
         */
        get gDupFunc(): GObject.BoxedCopyFunc;
        /**
         * @construct-only
         */
        get g_destroy_func(): GLib.DestroyNotify;
        /**
         * @construct-only
         */
        get gDestroyFunc(): GLib.DestroyNotify;
        /**
         * @read-only
         */
        get readOnlyView(): UnrolledLinkedList;
        /**
         * @read-only
         */
        get read_only_view(): UnrolledLinkedList;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: UnrolledLinkedList.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<UnrolledLinkedList.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](
            g_type: GObject.GType,
            g_dup_func: GObject.BoxedCopyFunc,
            equal_func?: EqualDataFunc | null,
        ): UnrolledLinkedList;

        // Signals

        /** @signal */
        connect<K extends keyof UnrolledLinkedList.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, UnrolledLinkedList.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof UnrolledLinkedList.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, UnrolledLinkedList.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof UnrolledLinkedList.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<UnrolledLinkedList.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        get_equal_func(): [EqualDataFunc, any];
        /**
         * @read-only
         * @category Inherited from Gee.Queue
         */
        get capacity(): number;
        /**
         * @read-only
         * @category Inherited from Gee.Queue
         */
        get remaining_capacity(): number;
        /**
         * @read-only
         * @category Inherited from Gee.Queue
         */
        get remainingCapacity(): number;
        /**
         * @read-only
         * @category Inherited from Gee.Queue
         */
        get is_full(): boolean;
        /**
         * @read-only
         * @category Inherited from Gee.Queue
         */
        get isFull(): boolean;
        /**
         * @param element
         */
        offer(element: any): boolean;
        peek(): any | null;
        poll(): any | null;
        /**
         * @param recipient
         * @param amount
         */
        drain(recipient: Collection, amount: number): number;
        get_capacity(): number;
        get_remaining_capacity(): number;
        get_is_full(): boolean;
        /**
         * @param element
         * @virtual
         */
        vfunc_offer(element: any): boolean;
        /**
         * @virtual
         */
        vfunc_peek(): any | null;
        /**
         * @virtual
         */
        vfunc_poll(): any | null;
        /**
         * @param recipient
         * @param amount
         * @virtual
         */
        vfunc_drain(recipient: Collection, amount: number): number;
        /**
         * @virtual
         */
        vfunc_get_capacity(): number;
        /**
         * @virtual
         */
        vfunc_get_remaining_capacity(): number;
        /**
         * @virtual
         */
        vfunc_get_is_full(): boolean;
        /**
         * @param element
         */
        offer_head(element: any): boolean;
        peek_head(): any | null;
        poll_head(): any | null;
        /**
         * @param recipient
         * @param amount
         */
        drain_head(recipient: Collection, amount: number): number;
        /**
         * @param element
         */
        offer_tail(element: any): boolean;
        peek_tail(): any | null;
        poll_tail(): any | null;
        /**
         * @param recipient
         * @param amount
         */
        drain_tail(recipient: Collection, amount: number): number;
        /**
         * @param element
         * @virtual
         */
        vfunc_offer_head(element: any): boolean;
        /**
         * @virtual
         */
        vfunc_peek_head(): any | null;
        /**
         * @virtual
         */
        vfunc_poll_head(): any | null;
        /**
         * @param recipient
         * @param amount
         * @virtual
         */
        vfunc_drain_head(recipient: Collection, amount: number): number;
        /**
         * @param element
         * @virtual
         */
        vfunc_offer_tail(element: any): boolean;
        /**
         * @virtual
         */
        vfunc_peek_tail(): any | null;
        /**
         * @virtual
         */
        vfunc_poll_tail(): any | null;
        /**
         * @param recipient
         * @param amount
         * @virtual
         */
        vfunc_drain_tail(recipient: Collection, amount: number): number;
    }

    namespace MapEntry {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::k-type': (pspec: GObject.ParamSpec) => void;
            'notify::k-dup-func': (pspec: GObject.ParamSpec) => void;
            'notify::k-destroy-func': (pspec: GObject.ParamSpec) => void;
            'notify::v-type': (pspec: GObject.ParamSpec) => void;
            'notify::v-dup-func': (pspec: GObject.ParamSpec) => void;
            'notify::v-destroy-func': (pspec: GObject.ParamSpec) => void;
            'notify::key': (pspec: GObject.ParamSpec) => void;
            'notify::value': (pspec: GObject.ParamSpec) => void;
            'notify::read-only': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            k_type: GObject.GTypeInput;
            kType: GObject.GTypeInput;
            k_dup_func: GObject.BoxedCopyFunc;
            kDupFunc: GObject.BoxedCopyFunc;
            k_destroy_func: GLib.DestroyNotify;
            kDestroyFunc: GLib.DestroyNotify;
            v_type: GObject.GTypeInput;
            vType: GObject.GTypeInput;
            v_dup_func: GObject.BoxedCopyFunc;
            vDupFunc: GObject.BoxedCopyFunc;
            v_destroy_func: GLib.DestroyNotify;
            vDestroyFunc: GLib.DestroyNotify;
            key: any;
            value: any;
            read_only: boolean;
            readOnly: boolean;
        }
    }

    /**
     * @gir-type Class
     */
    abstract class MapEntry extends GObject.Object {
        static $gtype: GObject.GType<MapEntry>;

        // Properties

        /**
         * @construct-only
         */
        get k_type(): GObject.GType;
        /**
         * @construct-only
         */
        get kType(): GObject.GType;
        /**
         * @construct-only
         */
        get k_dup_func(): GObject.BoxedCopyFunc;
        /**
         * @construct-only
         */
        get kDupFunc(): GObject.BoxedCopyFunc;
        /**
         * @construct-only
         */
        get k_destroy_func(): GLib.DestroyNotify;
        /**
         * @construct-only
         */
        get kDestroyFunc(): GLib.DestroyNotify;
        /**
         * @construct-only
         */
        get v_type(): GObject.GType;
        /**
         * @construct-only
         */
        get vType(): GObject.GType;
        /**
         * @construct-only
         */
        get v_dup_func(): GObject.BoxedCopyFunc;
        /**
         * @construct-only
         */
        get vDupFunc(): GObject.BoxedCopyFunc;
        /**
         * @construct-only
         */
        get v_destroy_func(): GLib.DestroyNotify;
        /**
         * @construct-only
         */
        get vDestroyFunc(): GLib.DestroyNotify;
        /**
         * @read-only
         */
        get key(): any;
        get value(): any;
        set value(val: any);
        /**
         * @read-only
         */
        get read_only(): boolean;
        /**
         * @read-only
         */
        get readOnly(): boolean;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: MapEntry.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<MapEntry.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof MapEntry.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, MapEntry.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof MapEntry.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, MapEntry.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof MapEntry.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<MapEntry.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods

        /**
         * @virtual
         */
        vfunc_get_key(): any;
        /**
         * @virtual
         */
        vfunc_get_value(): any;
        /**
         * @param value
         * @virtual
         */
        vfunc_set_value(value: any): void;
        /**
         * @virtual
         */
        vfunc_get_read_only(): boolean;

        // Methods

        get_key(): any;
        get_value(): any;
        /**
         * @param value
         */
        set_value(value: any): void;
        get_read_only(): boolean;
    }

    /**
     * @gir-type Alias
     */
    type AbstractBidirListClass = typeof AbstractBidirList;
    /**
     * @gir-type Struct
     */
    abstract class AbstractBidirListPrivate {
        static $gtype: GObject.GType<AbstractBidirListPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type AbstractBidirSortedSetClass = typeof AbstractBidirSortedSet;
    /**
     * @gir-type Struct
     */
    abstract class AbstractBidirSortedSetPrivate {
        static $gtype: GObject.GType<AbstractBidirSortedSetPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type AbstractBidirSortedMapClass = typeof AbstractBidirSortedMap;
    /**
     * @gir-type Struct
     */
    abstract class AbstractBidirSortedMapPrivate {
        static $gtype: GObject.GType<AbstractBidirSortedMapPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type AbstractCollectionClass = typeof AbstractCollection;
    /**
     * @gir-type Struct
     */
    abstract class AbstractCollectionPrivate {
        static $gtype: GObject.GType<AbstractCollectionPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type AbstractListClass = typeof AbstractList;
    /**
     * @gir-type Struct
     */
    abstract class AbstractListPrivate {
        static $gtype: GObject.GType<AbstractListPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type AbstractMapClass = typeof AbstractMap;
    /**
     * @gir-type Struct
     */
    abstract class AbstractMapPrivate {
        static $gtype: GObject.GType<AbstractMapPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type AbstractMultiMapClass = typeof AbstractMultiMap;
    /**
     * @gir-type Struct
     */
    abstract class AbstractMultiMapPrivate {
        static $gtype: GObject.GType<AbstractMultiMapPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type AbstractMultiSetClass = typeof AbstractMultiSet;
    /**
     * @gir-type Struct
     */
    abstract class AbstractMultiSetPrivate {
        static $gtype: GObject.GType<AbstractMultiSetPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type AbstractQueueClass = typeof AbstractQueue;
    /**
     * @gir-type Struct
     */
    abstract class AbstractQueuePrivate {
        static $gtype: GObject.GType<AbstractQueuePrivate>;
    }

    /**
     * @gir-type Alias
     */
    type AbstractSetClass = typeof AbstractSet;
    /**
     * @gir-type Struct
     */
    abstract class AbstractSetPrivate {
        static $gtype: GObject.GType<AbstractSetPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type AbstractSortedMapClass = typeof AbstractSortedMap;
    /**
     * @gir-type Struct
     */
    abstract class AbstractSortedMapPrivate {
        static $gtype: GObject.GType<AbstractSortedMapPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type AbstractSortedSetClass = typeof AbstractSortedSet;
    /**
     * @gir-type Struct
     */
    abstract class AbstractSortedSetPrivate {
        static $gtype: GObject.GType<AbstractSortedSetPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type ArrayListClass = typeof ArrayList;
    /**
     * @gir-type Struct
     */
    abstract class ArrayListPrivate {
        static $gtype: GObject.GType<ArrayListPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type ArrayQueueClass = typeof ArrayQueue;
    /**
     * @gir-type Struct
     */
    abstract class ArrayQueuePrivate {
        static $gtype: GObject.GType<ArrayQueuePrivate>;
    }

    /**
     * @gir-type Alias
     */
    type ConcurrentListClass = typeof ConcurrentList;
    /**
     * @gir-type Struct
     */
    abstract class ConcurrentListPrivate {
        static $gtype: GObject.GType<ConcurrentListPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type ConcurrentSetClass = typeof ConcurrentSet;
    /**
     * @gir-type Struct
     */
    abstract class ConcurrentSetPrivate {
        static $gtype: GObject.GType<ConcurrentSetPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type HashMapClass = typeof HashMap;
    /**
     * @gir-type Struct
     */
    abstract class HashMapPrivate {
        static $gtype: GObject.GType<HashMapPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type HashMultiMapClass = typeof HashMultiMap;
    /**
     * @gir-type Struct
     */
    abstract class HashMultiMapPrivate {
        static $gtype: GObject.GType<HashMultiMapPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type HashMultiSetClass = typeof HashMultiSet;
    /**
     * @gir-type Struct
     */
    abstract class HashMultiSetPrivate {
        static $gtype: GObject.GType<HashMultiSetPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type HashSetClass = typeof HashSet;
    /**
     * @gir-type Struct
     */
    abstract class HashSetPrivate {
        static $gtype: GObject.GType<HashSetPrivate>;
    }

    /**
     * @gir-type Struct
     */
    class HazardPointer {
        static $gtype: GObject.GType<HazardPointer>;

        // Constructors

        constructor(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, ptr?: any | null);

        static ['new'](g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, ptr?: any | null): HazardPointer;

        // Static methods

        /**
         * @param g_type
         * @param g_dup_func
         * @param aptr
         * @param mask
         */
        static get_hazard_pointer(
            g_type: GObject.GType,
            g_dup_func: GObject.BoxedCopyFunc,
            aptr: any | null,
            mask: number,
        ): [HazardPointer | null, number];
        /**
         * @param g_type
         * @param g_dup_func
         * @param aptr
         * @param mask
         */
        static get_pointer(
            g_type: GObject.GType,
            g_dup_func: GObject.BoxedCopyFunc,
            aptr: any | null,
            mask: number,
        ): [any | null, number];
        /**
         * @param g_type
         * @param g_dup_func
         * @param aptr
         * @param new_ptr
         * @param mask
         * @param new_mask
         */
        static exchange_hazard_pointer(
            g_type: GObject.GType,
            g_dup_func: GObject.BoxedCopyFunc,
            aptr: any | null,
            new_ptr: any | null,
            mask: number,
            new_mask: number,
        ): [HazardPointer | null, number];
        /**
         * @param g_type
         * @param g_dup_func
         * @param aptr
         * @param new_ptr
         * @param mask
         * @param new_mask
         */
        static set_pointer(
            g_type: GObject.GType,
            g_dup_func: GObject.BoxedCopyFunc,
            aptr: any | null,
            new_ptr: any | null,
            mask: number,
            new_mask: number,
        ): void;
        /**
         * @param g_type
         * @param g_dup_func
         * @param aptr
         * @param new_ptr
         * @param mask
         * @param new_mask
         */
        static exchange_pointer(
            g_type: GObject.GType,
            g_dup_func: GObject.BoxedCopyFunc,
            aptr: any | null,
            new_ptr: any | null,
            mask: number,
            new_mask: number,
        ): [any | null, number];
        /**
         * @param g_type
         * @param g_dup_func
         * @param aptr
         * @param old_ptr
         * @param _new_ptr
         * @param mask
         * @param old_mask
         * @param new_mask
         */
        static compare_and_exchange_pointer(
            g_type: GObject.GType,
            g_dup_func: GObject.BoxedCopyFunc,
            aptr: any | null,
            old_ptr: any | null,
            _new_ptr: any | null,
            mask: number,
            old_mask: number,
            new_mask: number,
        ): boolean;
        /**
         * @param policy
         */
        static set_default_policy(policy: HazardPointerPolicy): void;
        /**
         * @param policy
         */
        static set_thread_exit_policy(policy: HazardPointerPolicy): void;
        /**
         * @param policy
         */
        static set_release_policy(policy: HazardPointerReleasePolicy): boolean;

        // Methods

        /**
         * @param other_thread
         */
        get(other_thread: boolean): any;
        release(): void;
    }

    /**
     * @gir-type Struct
     */
    class HazardPointerContext {
        static $gtype: GObject.GType<HazardPointerContext>;

        // Constructors

        constructor(policy?: HazardPointerPolicy | null);

        static ['new'](policy?: HazardPointerPolicy | null): HazardPointerContext;

        // Methods

        try_free(): void;
        free_all(): void;
        try_release(): void;
        release(): void;
    }

    /**
     * @gir-type Alias
     */
    type LazyClass = typeof Lazy;
    /**
     * @gir-type Struct
     */
    abstract class LazyPrivate {
        static $gtype: GObject.GType<LazyPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type LinkedListClass = typeof LinkedList;
    /**
     * @gir-type Struct
     */
    abstract class LinkedListPrivate {
        static $gtype: GObject.GType<LinkedListPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type PriorityQueueClass = typeof PriorityQueue;
    /**
     * @gir-type Struct
     */
    abstract class PriorityQueuePrivate {
        static $gtype: GObject.GType<PriorityQueuePrivate>;
    }

    /**
     * @gir-type Alias
     */
    type PromiseClass = typeof Promise;
    /**
     * @gir-type Struct
     */
    abstract class PromisePrivate {
        static $gtype: GObject.GType<PromisePrivate>;
    }

    /**
     * @gir-type Alias
     */
    type TreeMapClass = typeof TreeMap;
    /**
     * @gir-type Struct
     */
    abstract class TreeMapPrivate {
        static $gtype: GObject.GType<TreeMapPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type TreeMultiMapClass = typeof TreeMultiMap;
    /**
     * @gir-type Struct
     */
    abstract class TreeMultiMapPrivate {
        static $gtype: GObject.GType<TreeMultiMapPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type TreeMultiSetClass = typeof TreeMultiSet;
    /**
     * @gir-type Struct
     */
    abstract class TreeMultiSetPrivate {
        static $gtype: GObject.GType<TreeMultiSetPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type TreeSetClass = typeof TreeSet;
    /**
     * @gir-type Struct
     */
    abstract class TreeSetPrivate {
        static $gtype: GObject.GType<TreeSetPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type UnrolledLinkedListClass = typeof UnrolledLinkedList;
    /**
     * @gir-type Struct
     */
    abstract class UnrolledLinkedListPrivate {
        static $gtype: GObject.GType<UnrolledLinkedListPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type BidirIteratorIface = typeof BidirIterator;
    /**
     * @gir-type Alias
     */
    type BidirListIface = typeof BidirList;
    /**
     * @gir-type Alias
     */
    type BidirListIteratorIface = typeof BidirListIterator;
    /**
     * @gir-type Alias
     */
    type BidirMapIteratorIface = typeof BidirMapIterator;
    /**
     * @gir-type Alias
     */
    type BidirSortedSetIface = typeof BidirSortedSet;
    /**
     * @gir-type Alias
     */
    type BidirSortedMapIface = typeof BidirSortedMap;
    /**
     * @gir-type Alias
     */
    type CollectionIface = typeof Collection;
    /**
     * @gir-type Alias
     */
    type ComparableIface = typeof Comparable;
    /**
     * @gir-type Alias
     */
    type DequeIface = typeof Deque;
    /**
     * @gir-type Alias
     */
    type FutureIface = typeof Future;
    /**
     * @gir-type Alias
     */
    type HashableIface = typeof Hashable;
    /**
     * @gir-type Alias
     */
    type IterableIface = typeof Iterable;
    /**
     * @gir-type Alias
     */
    type IteratorIface = typeof Iterator;
    /**
     * @gir-type Alias
     */
    type ListIface = typeof List;
    /**
     * @gir-type Alias
     */
    type ListIteratorIface = typeof ListIterator;
    /**
     * @gir-type Alias
     */
    type MapIface = typeof Map;
    /**
     * @gir-type Alias
     */
    type MapEntryClass = typeof MapEntry;
    /**
     * @gir-type Struct
     */
    abstract class MapEntryPrivate {
        static $gtype: GObject.GType<MapEntryPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type MapIteratorIface = typeof MapIterator;
    /**
     * @gir-type Alias
     */
    type MultiMapIface = typeof MultiMap;
    /**
     * @gir-type Alias
     */
    type MultiSetIface = typeof MultiSet;
    /**
     * @gir-type Alias
     */
    type QueueIface = typeof Queue;
    /**
     * @gir-type Alias
     */
    type SetIface = typeof Set;
    /**
     * @gir-type Alias
     */
    type SortedMapIface = typeof SortedMap;
    /**
     * @gir-type Alias
     */
    type SortedSetIface = typeof SortedSet;
    /**
     * @gir-type Alias
     */
    type TraversableIface = typeof Traversable;
    namespace BidirIterator {
        /**
         * Interface for implementing BidirIterator.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface extends Iterator.Interface {
            // Virtual methods

            /**
             * @virtual
             */
            vfunc_previous(): boolean;
            /**
             * @virtual
             */
            vfunc_has_previous(): boolean;
            /**
             * @virtual
             */
            vfunc_first(): boolean;
            /**
             * @virtual
             */
            vfunc_last(): boolean;
        }

        // Constructor properties interface

        interface ConstructorProps extends Iterator.ConstructorProps {}
    }

    export interface BidirIteratorNamespace {
        $gtype: GObject.GType<BidirIterator>;
        prototype: BidirIterator;
    }
    /**
     * @gir-type Interface
     */
    interface BidirIterator extends Iterator, BidirIterator.Interface {
        // Methods

        previous(): boolean;
        has_previous(): boolean;
        first(): boolean;
        last(): boolean;
    }

    export const BidirIterator: BidirIteratorNamespace & {
        new (): BidirIterator; // This allows `obj instanceof BidirIterator`
    };

    namespace BidirList {
        /**
         * Interface for implementing BidirList.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface extends List.Interface {
            // Virtual methods

            /**
             * @virtual
             */
            vfunc_bidir_list_iterator(): BidirListIterator;
            /**
             * @virtual
             */
            vfunc_get_read_only_view(): BidirList;
        }

        // Constructor properties interface

        interface ConstructorProps extends List.ConstructorProps {
            read_only_view: BidirList;
            readOnlyView: BidirList;
        }
    }

    export interface BidirListNamespace {
        $gtype: GObject.GType<BidirList>;
        prototype: BidirList;
    }
    /**
     * @gir-type Interface
     */
    interface BidirList extends List {
        // Properties

        /**
         * @read-only
         */
        get read_only_view(): BidirList;
        /**
         * @read-only
         */
        get readOnlyView(): BidirList;

        // Methods

        bidir_list_iterator(): BidirListIterator;
        get_read_only_view(): BidirList;

        // Virtual methods - generated with overloads due to conflicts

        /** @ignore */
        /**
         * @virtual
         */
        vfunc_bidir_list_iterator(): BidirListIterator;
        /** @ignore */
        /**
         * @virtual
         */
        vfunc_get_read_only_view(): BidirList;
        /** @ignore */
        /**
         * @virtual
         */
        vfunc_get_read_only_view(): List;
        /** @ignore */
        /**
         * @virtual
         */
        vfunc_get_read_only_view(): Collection;
    }

    export const BidirList: BidirListNamespace & {
        new (): BidirList; // This allows `obj instanceof BidirList`
    };

    namespace BidirListIterator {
        /**
         * Interface for implementing BidirListIterator.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface extends BidirIterator.Interface {
            // Virtual methods

            /**
             * @param item
             * @virtual
             */
            vfunc_insert(item: any): void;
        }

        // Constructor properties interface

        interface ConstructorProps extends BidirIterator.ConstructorProps {}
    }

    export interface BidirListIteratorNamespace {
        $gtype: GObject.GType<BidirListIterator>;
        prototype: BidirListIterator;
    }
    /**
     * @gir-type Interface
     */
    interface BidirListIterator extends BidirIterator, BidirListIterator.Interface {
        // Methods

        /**
         * @param item
         */
        insert(item: any): void;
    }

    export const BidirListIterator: BidirListIteratorNamespace & {
        new (): BidirListIterator; // This allows `obj instanceof BidirListIterator`
    };

    namespace BidirMapIterator {
        /**
         * Interface for implementing BidirMapIterator.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface extends MapIterator.Interface {
            // Virtual methods

            /**
             * @virtual
             */
            vfunc_previous(): boolean;
            /**
             * @virtual
             */
            vfunc_has_previous(): boolean;
            /**
             * @virtual
             */
            vfunc_first(): boolean;
            /**
             * @virtual
             */
            vfunc_last(): boolean;
        }

        // Constructor properties interface

        interface ConstructorProps extends MapIterator.ConstructorProps {}
    }

    export interface BidirMapIteratorNamespace {
        $gtype: GObject.GType<BidirMapIterator>;
        prototype: BidirMapIterator;
    }
    /**
     * @gir-type Interface
     */
    interface BidirMapIterator extends MapIterator, BidirMapIterator.Interface {
        // Methods

        previous(): boolean;
        has_previous(): boolean;
        first(): boolean;
        last(): boolean;
    }

    export const BidirMapIterator: BidirMapIteratorNamespace & {
        new (): BidirMapIterator; // This allows `obj instanceof BidirMapIterator`
    };

    namespace BidirSortedSet {
        /**
         * Interface for implementing BidirSortedSet.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface extends SortedSet.Interface {
            // Virtual methods

            /**
             * @virtual
             */
            vfunc_bidir_iterator(): BidirIterator;
            /**
             * @virtual
             */
            vfunc_get_read_only_view(): BidirSortedSet;
        }

        // Constructor properties interface

        interface ConstructorProps extends SortedSet.ConstructorProps {
            read_only_view: BidirSortedSet;
            readOnlyView: BidirSortedSet;
        }
    }

    export interface BidirSortedSetNamespace {
        $gtype: GObject.GType<BidirSortedSet>;
        prototype: BidirSortedSet;

        /**
         * @param g_type
         * @param g_dup_func
         */
        empty(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc): BidirSortedSet;
    }
    /**
     * @gir-type Interface
     */
    interface BidirSortedSet extends SortedSet {
        // Properties

        /**
         * @read-only
         */
        get read_only_view(): BidirSortedSet;
        /**
         * @read-only
         */
        get readOnlyView(): BidirSortedSet;

        // Methods

        bidir_iterator(): BidirIterator;
        get_read_only_view(): BidirSortedSet;

        // Virtual methods - generated with overloads due to conflicts

        /** @ignore */
        /**
         * @virtual
         */
        vfunc_bidir_iterator(): BidirIterator;
        /** @ignore */
        /**
         * @virtual
         */
        vfunc_get_read_only_view(): BidirSortedSet;
        /** @ignore */
        /**
         * @virtual
         */
        vfunc_get_read_only_view(): SortedSet;
        /** @ignore */
        /**
         * @virtual
         */
        vfunc_get_read_only_view(): Set;
        /** @ignore */
        /**
         * @virtual
         */
        vfunc_get_read_only_view(): Collection;
    }

    export const BidirSortedSet: BidirSortedSetNamespace & {
        new (): BidirSortedSet; // This allows `obj instanceof BidirSortedSet`
    };

    namespace BidirSortedMap {
        /**
         * Interface for implementing BidirSortedMap.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface extends SortedMap.Interface {
            // Virtual methods

            /**
             * @virtual
             */
            vfunc_bidir_map_iterator(): BidirMapIterator;
            /**
             * @virtual
             */
            vfunc_get_read_only_view(): BidirSortedMap;
        }

        // Constructor properties interface

        interface ConstructorProps extends SortedMap.ConstructorProps {
            read_only_view: BidirSortedMap;
            readOnlyView: BidirSortedMap;
        }
    }

    export interface BidirSortedMapNamespace {
        $gtype: GObject.GType<BidirSortedMap>;
        prototype: BidirSortedMap;

        /**
         * @param k_type
         * @param k_dup_func
         * @param v_type
         * @param v_dup_func
         */
        empty(
            k_type: GObject.GType,
            k_dup_func: GObject.BoxedCopyFunc,
            v_type: GObject.GType,
            v_dup_func: GObject.BoxedCopyFunc,
        ): BidirSortedMap;
    }
    /**
     * @gir-type Interface
     */
    interface BidirSortedMap extends SortedMap {
        // Properties

        /**
         * @read-only
         */
        get read_only_view(): BidirSortedMap;
        /**
         * @read-only
         */
        get readOnlyView(): BidirSortedMap;

        // Methods

        bidir_map_iterator(): BidirMapIterator;
        get_read_only_view(): BidirSortedMap;

        // Virtual methods - generated with overloads due to conflicts

        /** @ignore */
        /**
         * @virtual
         */
        vfunc_bidir_map_iterator(): BidirMapIterator;
        /** @ignore */
        /**
         * @virtual
         */
        vfunc_get_read_only_view(): BidirSortedMap;
        /** @ignore */
        /**
         * @virtual
         */
        vfunc_get_read_only_view(): SortedMap;
        /** @ignore */
        /**
         * @virtual
         */
        vfunc_get_read_only_view(): Map;
    }

    export const BidirSortedMap: BidirSortedMapNamespace & {
        new (): BidirSortedMap; // This allows `obj instanceof BidirSortedMap`
    };

    namespace Collection {
        /**
         * Interface for implementing Collection.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface extends Iterable.Interface {
            // Virtual methods

            /**
             * @param item
             * @virtual
             */
            vfunc_contains(item: any): boolean;
            /**
             * @param item
             * @virtual
             */
            vfunc_add(item: any): boolean;
            /**
             * @param item
             * @virtual
             */
            vfunc_remove(item: any): boolean;
            /**
             * @virtual
             */
            vfunc_clear(): void;
            /**
             * @param collection
             * @virtual
             */
            vfunc_add_all(collection: Collection): boolean;
            /**
             * @param collection
             * @virtual
             */
            vfunc_contains_all(collection: Collection): boolean;
            /**
             * @param collection
             * @virtual
             */
            vfunc_remove_all(collection: Collection): boolean;
            /**
             * @param collection
             * @virtual
             */
            vfunc_retain_all(collection: Collection): boolean;
            /**
             * @virtual
             */
            vfunc_to_array(): any[];
            /**
             * @param array
             * @virtual
             */
            vfunc_add_all_array(array: any[]): boolean;
            /**
             * @param array
             * @virtual
             */
            vfunc_contains_all_array(array: any[]): boolean;
            /**
             * @param array
             * @virtual
             */
            vfunc_remove_all_array(array: any[]): boolean;
            /**
             * @param iter
             * @virtual
             */
            vfunc_add_all_iterator(iter: Iterator): boolean;
            /**
             * @param iter
             * @virtual
             */
            vfunc_contains_all_iterator(iter: Iterator): boolean;
            /**
             * @param iter
             * @virtual
             */
            vfunc_remove_all_iterator(iter: Iterator): boolean;
            /**
             * @virtual
             */
            vfunc_get_size(): number;
            /**
             * @virtual
             */
            vfunc_get_is_empty(): boolean;
            /**
             * @virtual
             */
            vfunc_get_read_only(): boolean;
            /**
             * @virtual
             */
            vfunc_get_read_only_view(): Collection;
        }

        // Constructor properties interface

        interface ConstructorProps extends Iterable.ConstructorProps {
            size: number;
            read_only: boolean;
            readOnly: boolean;
            read_only_view: Collection;
            readOnlyView: Collection;
        }
    }

    export interface CollectionNamespace {
        $gtype: GObject.GType<Collection>;
        prototype: Collection;

        /**
         * @param g_type
         * @param g_dup_func
         */
        empty(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc): Collection;
    }
    /**
     * @gir-type Interface
     */
    interface Collection extends Iterable, Collection.Interface {
        // Properties

        /**
         * @read-only
         */
        get size(): number;
        /**
         * @read-only
         */
        get read_only(): boolean;
        /**
         * @read-only
         */
        get readOnly(): boolean;
        /**
         * @read-only
         */
        get read_only_view(): Collection;
        /**
         * @read-only
         */
        get readOnlyView(): Collection;

        // Methods

        /**
         * @param item
         */
        contains(item: any): boolean;
        /**
         * @param item
         */
        add(item: any): boolean;
        /**
         * @param item
         */
        remove(item: any): boolean;
        clear(): void;
        /**
         * @param collection
         */
        add_all(collection: Collection): boolean;
        /**
         * @param collection
         */
        contains_all(collection: Collection): boolean;
        /**
         * @param collection
         */
        remove_all(collection: Collection): boolean;
        /**
         * @param collection
         */
        retain_all(collection: Collection): boolean;
        to_array(): any[];
        /**
         * @param array
         */
        add_all_array(array: any[]): boolean;
        /**
         * @param array
         */
        contains_all_array(array: any[]): boolean;
        /**
         * @param array
         */
        remove_all_array(array: any[]): boolean;
        /**
         * @param iter
         */
        add_all_iterator(iter: Iterator): boolean;
        /**
         * @param iter
         */
        contains_all_iterator(iter: Iterator): boolean;
        /**
         * @param iter
         */
        remove_all_iterator(iter: Iterator): boolean;
        get_size(): number;
        get_is_empty(): boolean;
        get_read_only(): boolean;
        get_read_only_view(): Collection;
    }

    export const Collection: CollectionNamespace & {
        new (): Collection; // This allows `obj instanceof Collection`
    };

    namespace Comparable {
        /**
         * Interface for implementing Comparable.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface {
            // Virtual methods

            /**
             * @param object
             * @virtual
             */
            vfunc_compare_to(object: any): number;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    export interface ComparableNamespace {
        $gtype: GObject.GType<Comparable>;
        prototype: Comparable;
    }
    /**
     * @gir-type Interface
     */
    interface Comparable extends GObject.Object, Comparable.Interface {
        // Methods

        /**
         * @param object
         */
        compare_to(object: any): number;
    }

    export const Comparable: ComparableNamespace & {
        new (): Comparable; // This allows `obj instanceof Comparable`
    };

    namespace Deque {
        /**
         * Interface for implementing Deque.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface extends Queue.Interface {
            // Virtual methods

            /**
             * @param element
             * @virtual
             */
            vfunc_offer_head(element: any): boolean;
            /**
             * @virtual
             */
            vfunc_peek_head(): any | null;
            /**
             * @virtual
             */
            vfunc_poll_head(): any | null;
            /**
             * @param recipient
             * @param amount
             * @virtual
             */
            vfunc_drain_head(recipient: Collection, amount: number): number;
            /**
             * @param element
             * @virtual
             */
            vfunc_offer_tail(element: any): boolean;
            /**
             * @virtual
             */
            vfunc_peek_tail(): any | null;
            /**
             * @virtual
             */
            vfunc_poll_tail(): any | null;
            /**
             * @param recipient
             * @param amount
             * @virtual
             */
            vfunc_drain_tail(recipient: Collection, amount: number): number;
        }

        // Constructor properties interface

        interface ConstructorProps extends Queue.ConstructorProps {}
    }

    export interface DequeNamespace {
        $gtype: GObject.GType<Deque>;
        prototype: Deque;
    }
    /**
     * @gir-type Interface
     */
    interface Deque extends Queue, Deque.Interface {
        // Methods

        /**
         * @param element
         */
        offer_head(element: any): boolean;
        peek_head(): any | null;
        poll_head(): any | null;
        /**
         * @param recipient
         * @param amount
         */
        drain_head(recipient: Collection, amount: number): number;
        /**
         * @param element
         */
        offer_tail(element: any): boolean;
        peek_tail(): any | null;
        poll_tail(): any | null;
        /**
         * @param recipient
         * @param amount
         */
        drain_tail(recipient: Collection, amount: number): number;
    }

    export const Deque: DequeNamespace & {
        new (): Deque; // This allows `obj instanceof Deque`
    };

    namespace Future {
        /**
         * Interface for implementing Future.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface {
            // Virtual methods

            /**
             * @virtual
             */
            vfunc_wait(): any;
            /**
             * @param end_time
             * @virtual
             */
            vfunc_wait_until(end_time: number): [boolean, any];
            /**
             * @param _callback_
             * @virtual
             */
            vfunc_wait_async(_callback_?: Gio.AsyncReadyCallback<this> | null): void;
            /**
             * @param _res_
             * @virtual
             */
            vfunc_wait_finish(_res_: Gio.AsyncResult): any;
            /**
             * @param a_type
             * @param a_dup_func
             * @param func
             * @virtual
             */
            vfunc_map(a_type: GObject.GType, a_dup_func: GObject.BoxedCopyFunc, func: Future.MapFunc): Future;
            /**
             * @param a_type
             * @param a_dup_func
             * @param func
             * @virtual
             */
            vfunc_light_map(
                a_type: GObject.GType,
                a_dup_func: GObject.BoxedCopyFunc,
                func: Future.LightMapFunc,
            ): Future;
            /**
             * @param a_type
             * @param a_dup_func
             * @param func
             * @virtual
             */
            vfunc_light_map_broken(
                a_type: GObject.GType,
                a_dup_func: GObject.BoxedCopyFunc,
                func: Future.LightMapFunc,
            ): Future;
            /**
             * @param a_type
             * @param a_dup_func
             * @param b_type
             * @param b_dup_func
             * @param zip_func
             * @param second
             * @virtual
             */
            vfunc_zip(
                a_type: GObject.GType,
                a_dup_func: GObject.BoxedCopyFunc,
                b_type: GObject.GType,
                b_dup_func: GObject.BoxedCopyFunc,
                zip_func: Future.ZipFunc,
                second: Future,
            ): Future;
            /**
             * @param a_type
             * @param a_dup_func
             * @param func
             * @virtual
             */
            vfunc_flat_map(a_type: GObject.GType, a_dup_func: GObject.BoxedCopyFunc, func: Future.FlatMapFunc): Future;
            /**
             * @virtual
             */
            vfunc_get_value(): any | null;
            /**
             * @virtual
             */
            vfunc_get_ready(): boolean;
            /**
             * @virtual
             */
            vfunc_get_exception(): GLib.Error | null;
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
        interface FlatMapFunc {
            (
                a_type: GObject.GType,
                a_dup_func: GObject.BoxedCopyFunc,
                g_type: GObject.GType,
                g_dup_func: GObject.BoxedCopyFunc,
                value: any,
            ): Future;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            ready: boolean;
            exception: GLib.Error;
        }
    }

    export interface FutureNamespace {
        $gtype: GObject.GType<Future>;
        prototype: Future;
    }
    /**
     * @gir-type Interface
     */
    interface Future extends GObject.Object, Future.Interface {
        // Properties

        /**
         * @read-only
         */
        get ready(): boolean;
        /**
         * @read-only
         */
        get exception(): GLib.Error;

        // Methods

        wait(): any;
        /**
         * @param end_time
         */
        wait_until(end_time: number): [boolean, any];
        wait_async(): globalThis.Promise<any>;
        /**
         * @param _callback_
         */
        wait_async(_callback_: Gio.AsyncReadyCallback<this> | null): void;
        /**
         * @param _callback_
         */
        wait_async(_callback_?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<any> | void;
        /**
         * @param _res_
         */
        wait_finish(_res_: Gio.AsyncResult): any;
        /**
         * @param a_type
         * @param a_dup_func
         * @param func
         */
        map(a_type: GObject.GType, a_dup_func: GObject.BoxedCopyFunc, func: Future.MapFunc): Future;
        /**
         * @param a_type
         * @param a_dup_func
         * @param func
         */
        light_map(a_type: GObject.GType, a_dup_func: GObject.BoxedCopyFunc, func: Future.LightMapFunc): Future;
        /**
         * @param a_type
         * @param a_dup_func
         * @param func
         */
        light_map_broken(a_type: GObject.GType, a_dup_func: GObject.BoxedCopyFunc, func: Future.LightMapFunc): Future;
        /**
         * @param a_type
         * @param a_dup_func
         * @param b_type
         * @param b_dup_func
         * @param zip_func
         * @param second
         */
        zip(
            a_type: GObject.GType,
            a_dup_func: GObject.BoxedCopyFunc,
            b_type: GObject.GType,
            b_dup_func: GObject.BoxedCopyFunc,
            zip_func: Future.ZipFunc,
            second: Future,
        ): Future;
        /**
         * @param a_type
         * @param a_dup_func
         * @param func
         */
        flat_map(a_type: GObject.GType, a_dup_func: GObject.BoxedCopyFunc, func: Future.FlatMapFunc): Future;
        get_value(): any | null;
        get_ready(): boolean;
        get_exception(): GLib.Error | null;
    }

    export const Future: FutureNamespace & {
        new (): Future; // This allows `obj instanceof Future`
    };

    namespace Hashable {
        /**
         * Interface for implementing Hashable.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface {
            // Virtual methods

            /**
             * @virtual
             */
            vfunc_hash(): number;
            /**
             * @param object
             * @virtual
             */
            vfunc_equal_to(object: any): boolean;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    export interface HashableNamespace {
        $gtype: GObject.GType<Hashable>;
        prototype: Hashable;
    }
    /**
     * @gir-type Interface
     */
    interface Hashable extends GObject.Object, Hashable.Interface {
        // Methods

        hash(): number;
        /**
         * @param object
         */
        equal_to(object: any): boolean;
    }

    export const Hashable: HashableNamespace & {
        new (): Hashable; // This allows `obj instanceof Hashable`
    };

    namespace Iterable {
        /**
         * Interface for implementing Iterable.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface {
            // Virtual methods

            /**
             * @virtual
             */
            vfunc_iterator(): Iterator;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    export interface IterableNamespace {
        $gtype: GObject.GType<Iterable>;
        prototype: Iterable;
    }
    /**
     * @gir-type Interface
     */
    interface Iterable extends GObject.Object, Iterable.Interface {
        // Methods

        iterator(): Iterator;
    }

    export const Iterable: IterableNamespace & {
        new (): Iterable; // This allows `obj instanceof Iterable`
    };

    namespace Iterator {
        /**
         * Interface for implementing Iterator.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface {
            // Virtual methods

            /**
             * @virtual
             */
            vfunc_next(): boolean;
            /**
             * @virtual
             */
            vfunc_has_next(): boolean;
            /**
             * @virtual
             */
            vfunc_get(): any;
            /**
             * @virtual
             */
            vfunc_remove(): void;
            /**
             * @virtual
             */
            vfunc_get_valid(): boolean;
            /**
             * @virtual
             */
            vfunc_get_read_only(): boolean;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            valid: boolean;
            read_only: boolean;
            readOnly: boolean;
        }
    }

    export interface IteratorNamespace {
        $gtype: GObject.GType<Iterator>;
        prototype: Iterator;

        /**
         * @param a_type
         * @param a_dup_func
         * @param f
         * @param current
         */
        unfold(
            a_type: GObject.GType,
            a_dup_func: GObject.BoxedCopyFunc,
            f: UnfoldFunc,
            current?: Lazy | null,
        ): Iterator;
        /**
         * @param g_type
         * @param g_dup_func
         * @param iters
         */
        concat(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, iters: Iterator): Iterator;
    }
    /**
     * @gir-type Interface
     */
    interface Iterator extends GObject.Object, Iterator.Interface {
        // Properties

        /**
         * @read-only
         */
        get valid(): boolean;
        /**
         * @read-only
         */
        get read_only(): boolean;
        /**
         * @read-only
         */
        get readOnly(): boolean;

        // Methods

        next(): boolean;
        has_next(): boolean;
        get(): any;
        remove(): void;
        get_valid(): boolean;
        get_read_only(): boolean;
    }

    export const Iterator: IteratorNamespace & {
        new (): Iterator; // This allows `obj instanceof Iterator`
    };

    namespace List {
        /**
         * Interface for implementing List.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface extends Collection.Interface {
            // Virtual methods

            /**
             * @virtual
             */
            vfunc_list_iterator(): ListIterator;
            /**
             * @param index
             * @virtual
             */
            vfunc_get(index: number): any;
            /**
             * @param index
             * @param item
             * @virtual
             */
            vfunc_set(index: number, item: any): void;
            /**
             * @param item
             * @virtual
             */
            vfunc_index_of(item: any): number;
            /**
             * @param index
             * @param item
             * @virtual
             */
            vfunc_insert(index: number, item: any): void;
            /**
             * @param index
             * @virtual
             */
            vfunc_remove_at(index: number): any;
            /**
             * @param start
             * @param stop
             * @virtual
             */
            vfunc_slice(start: number, stop: number): List | null;
            /**
             * @virtual
             */
            vfunc_first(): any;
            /**
             * @virtual
             */
            vfunc_last(): any;
            /**
             * @param index
             * @param collection
             * @virtual
             */
            vfunc_insert_all(index: number, collection: Collection): void;
            /**
             * @param compare_func
             * @virtual
             */
            vfunc_sort(compare_func?: GLib.CompareDataFunc | null): void;
            /**
             * @virtual
             */
            vfunc_get_read_only_view(): List;
        }

        // Constructor properties interface

        interface ConstructorProps extends Collection.ConstructorProps {
            read_only_view: List;
            readOnlyView: List;
        }
    }

    export interface ListNamespace {
        $gtype: GObject.GType<List>;
        prototype: List;

        /**
         * @param g_type
         * @param g_dup_func
         */
        empty(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc): List;
    }
    /**
     * @gir-type Interface
     */
    interface List extends Collection {
        // Properties

        /**
         * @read-only
         */
        get read_only_view(): List;
        /**
         * @read-only
         */
        get readOnlyView(): List;

        // Methods

        list_iterator(): ListIterator;
        /**
         * @param index
         */
        get(index: number): any;
        /**
         * @param index
         * @param item
         */
        set(index: number, item: any): void;
        /**
         * @param args
         */
        // Conflicted with GObject.Object.set
        set(...args: never[]): any;
        /**
         * @param item
         */
        index_of(item: any): number;
        /**
         * @param index
         * @param item
         */
        insert(index: number, item: any): void;
        /**
         * @param index
         */
        remove_at(index: number): any;
        /**
         * @param start
         * @param stop
         */
        slice(start: number, stop: number): List | null;
        first(): any;
        last(): any;
        /**
         * @param index
         * @param collection
         */
        insert_all(index: number, collection: Collection): void;
        /**
         * @param compare_func
         */
        sort(compare_func?: GLib.CompareDataFunc | null): void;
        get_read_only_view(): List;

        // Virtual methods - generated with overloads due to conflicts

        /** @ignore */
        /**
         * @virtual
         */
        vfunc_list_iterator(): ListIterator;
        /** @ignore */
        /**
         * @param index
         * @virtual
         */
        vfunc_get(index: number): any;
        /** @ignore */
        /**
         * @param index
         * @param item
         * @virtual
         */
        vfunc_set(index: number, item: any): void;
        /** @ignore */
        /**
         * @param item
         * @virtual
         */
        vfunc_index_of(item: any): number;
        /** @ignore */
        /**
         * @param index
         * @param item
         * @virtual
         */
        vfunc_insert(index: number, item: any): void;
        /** @ignore */
        /**
         * @param index
         * @virtual
         */
        vfunc_remove_at(index: number): any;
        /** @ignore */
        /**
         * @param start
         * @param stop
         * @virtual
         */
        vfunc_slice(start: number, stop: number): List | null;
        /** @ignore */
        /**
         * @virtual
         */
        vfunc_first(): any;
        /** @ignore */
        /**
         * @virtual
         */
        vfunc_last(): any;
        /** @ignore */
        /**
         * @param index
         * @param collection
         * @virtual
         */
        vfunc_insert_all(index: number, collection: Collection): void;
        /** @ignore */
        /**
         * @param compare_func
         * @virtual
         */
        vfunc_sort(compare_func?: GLib.CompareDataFunc | null): void;
        /** @ignore */
        /**
         * @virtual
         */
        vfunc_get_read_only_view(): List;
        /** @ignore */
        /**
         * @virtual
         */
        vfunc_get_read_only_view(): Collection;
    }

    export const List: ListNamespace & {
        new (): List; // This allows `obj instanceof List`
    };

    namespace ListIterator {
        /**
         * Interface for implementing ListIterator.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface extends Iterator.Interface {
            // Virtual methods

            /**
             * @param item
             * @virtual
             */
            vfunc_set(item: any): void;
            /**
             * @param item
             * @virtual
             */
            vfunc_add(item: any): void;
            /**
             * @virtual
             */
            vfunc_index(): number;
        }

        // Constructor properties interface

        interface ConstructorProps extends Iterator.ConstructorProps {}
    }

    export interface ListIteratorNamespace {
        $gtype: GObject.GType<ListIterator>;
        prototype: ListIterator;
    }
    /**
     * @gir-type Interface
     */
    interface ListIterator extends Iterator, ListIterator.Interface {
        // Methods

        /**
         * @param item
         */
        set(item: any): void;
        /**
         * @param args
         */
        // Conflicted with GObject.Object.set
        set(...args: never[]): any;
        /**
         * @param item
         */
        add(item: any): void;
        index(): number;
    }

    export const ListIterator: ListIteratorNamespace & {
        new (): ListIterator; // This allows `obj instanceof ListIterator`
    };

    namespace Map {
        /**
         * Interface for implementing Map.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface {
            // Virtual methods

            /**
             * @param key
             * @virtual
             */
            vfunc_has_key(key: any): boolean;
            /**
             * @param key
             * @param value
             * @virtual
             */
            vfunc_has(key: any, value: any): boolean;
            /**
             * @param key
             * @virtual
             */
            vfunc_get(key: any): any | null;
            /**
             * @param key
             * @param value
             * @virtual
             */
            vfunc_set(key: any, value: any): void;
            /**
             * @param key
             * @virtual
             */
            vfunc_unset(key: any): [boolean, any];
            /**
             * @virtual
             */
            vfunc_clear(): void;
            /**
             * @virtual
             */
            vfunc_map_iterator(): MapIterator;
            /**
             * @param map
             * @virtual
             */
            vfunc_set_all(map: Map): void;
            /**
             * @param map
             * @virtual
             */
            vfunc_unset_all(map: Map): boolean;
            /**
             * @param map
             * @virtual
             */
            vfunc_has_all(map: Map): boolean;
            /**
             * @virtual
             */
            vfunc_get_size(): number;
            /**
             * @virtual
             */
            vfunc_get_is_empty(): boolean;
            /**
             * @virtual
             */
            vfunc_get_read_only(): boolean;
            /**
             * @virtual
             */
            vfunc_get_keys(): Set;
            /**
             * @virtual
             */
            vfunc_get_values(): Collection;
            /**
             * @virtual
             */
            vfunc_get_entries(): Set;
            /**
             * @virtual
             */
            vfunc_get_read_only_view(): Map;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            size: number;
            read_only: boolean;
            readOnly: boolean;
            keys: Set;
            values: Collection;
            entries: Set;
            read_only_view: Map;
            readOnlyView: Map;
        }
    }

    export interface MapNamespace {
        $gtype: GObject.GType<Map>;
        prototype: Map;

        /**
         * @param k_type
         * @param k_dup_func
         * @param v_type
         * @param v_dup_func
         */
        empty(
            k_type: GObject.GType,
            k_dup_func: GObject.BoxedCopyFunc,
            v_type: GObject.GType,
            v_dup_func: GObject.BoxedCopyFunc,
        ): Map;
    }
    /**
     * @gir-type Interface
     */
    interface Map extends GObject.Object, Map.Interface {
        // Properties

        /**
         * @read-only
         */
        get size(): number;
        /**
         * @read-only
         */
        get read_only(): boolean;
        /**
         * @read-only
         */
        get readOnly(): boolean;
        /**
         * @read-only
         */
        get keys(): Set;
        /**
         * @read-only
         */
        get values(): Collection;
        /**
         * @read-only
         */
        get entries(): Set;
        /**
         * @read-only
         */
        get read_only_view(): Map;
        /**
         * @read-only
         */
        get readOnlyView(): Map;

        // Methods

        /**
         * @param key
         */
        has_key(key: any): boolean;
        /**
         * @param key
         */
        contains(key: any): boolean;
        /**
         * @param key
         * @param value
         */
        has(key: any, value: any): boolean;
        /**
         * @param key
         */
        get(key: any): any | null;
        /**
         * @param key
         * @param value
         */
        set(key: any, value: any): void;
        /**
         * @param args
         */
        // Conflicted with GObject.Object.set
        set(...args: never[]): any;
        /**
         * @param key
         */
        unset(key: any): [boolean, any];
        /**
         * @param key
         */
        remove(key: any): [boolean, any];
        clear(): void;
        map_iterator(): MapIterator;
        /**
         * @param map
         */
        set_all(map: Map): void;
        /**
         * @param map
         */
        unset_all(map: Map): boolean;
        /**
         * @param map
         */
        remove_all(map: Map): boolean;
        /**
         * @param map
         */
        has_all(map: Map): boolean;
        /**
         * @param map
         */
        contains_all(map: Map): boolean;
        get_size(): number;
        get_is_empty(): boolean;
        get_read_only(): boolean;
        get_keys(): Set;
        get_values(): Collection;
        get_entries(): Set;
        get_read_only_view(): Map;
        get_key_type(): GObject.GType;
        get_value_type(): GObject.GType;
    }

    export const Map: MapNamespace & {
        new (): Map; // This allows `obj instanceof Map`
    };

    namespace MapIterator {
        /**
         * Interface for implementing MapIterator.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface {
            // Virtual methods

            /**
             * @virtual
             */
            vfunc_next(): boolean;
            /**
             * @virtual
             */
            vfunc_has_next(): boolean;
            /**
             * @virtual
             */
            vfunc_get_key(): any;
            /**
             * @virtual
             */
            vfunc_get_value(): any;
            /**
             * @param value
             * @virtual
             */
            vfunc_set_value(value: any): void;
            /**
             * @virtual
             */
            vfunc_unset(): void;
            /**
             * @param a_type
             * @param a_dup_func
             * @param f
             * @param seed
             * @virtual
             */
            vfunc_fold(a_type: GObject.GType, a_dup_func: GObject.BoxedCopyFunc, f: FoldMapFunc, seed: any): any;
            /**
             * @param f
             * @virtual
             */
            vfunc_foreach(f: ForallMapFunc): boolean;
            /**
             * @virtual
             */
            vfunc_get_valid(): boolean;
            /**
             * @virtual
             */
            vfunc_get_mutable(): boolean;
            /**
             * @virtual
             */
            vfunc_get_read_only(): boolean;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            valid: boolean;
            mutable: boolean;
            read_only: boolean;
            readOnly: boolean;
        }
    }

    export interface MapIteratorNamespace {
        $gtype: GObject.GType<MapIterator>;
        prototype: MapIterator;
    }
    /**
     * @gir-type Interface
     */
    interface MapIterator extends GObject.Object, MapIterator.Interface {
        // Properties

        /**
         * @read-only
         */
        get valid(): boolean;
        /**
         * @read-only
         */
        get mutable(): boolean;
        /**
         * @read-only
         */
        get read_only(): boolean;
        /**
         * @read-only
         */
        get readOnly(): boolean;

        // Methods

        next(): boolean;
        has_next(): boolean;
        get_key(): any;
        get_value(): any;
        /**
         * @param value
         */
        set_value(value: any): void;
        unset(): void;
        /**
         * @param a_type
         * @param a_dup_func
         * @param f
         * @param seed
         */
        fold(a_type: GObject.GType, a_dup_func: GObject.BoxedCopyFunc, f: FoldMapFunc, seed: any): any;
        /**
         * @param f
         */
        foreach(f: ForallMapFunc): boolean;
        get_valid(): boolean;
        get_mutable(): boolean;
        get_read_only(): boolean;
    }

    export const MapIterator: MapIteratorNamespace & {
        new (): MapIterator; // This allows `obj instanceof MapIterator`
    };

    namespace MultiMap {
        /**
         * Interface for implementing MultiMap.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface {
            // Virtual methods

            /**
             * @virtual
             */
            vfunc_get_keys(): Set;
            /**
             * @virtual
             */
            vfunc_get_all_keys(): MultiSet;
            /**
             * @virtual
             */
            vfunc_get_values(): Collection;
            /**
             * @param key
             * @virtual
             */
            vfunc_contains(key: any): boolean;
            /**
             * @param key
             * @virtual
             */
            vfunc_get(key: any): Collection;
            /**
             * @param key
             * @param value
             * @virtual
             */
            vfunc_set(key: any, value: any): void;
            /**
             * @param key
             * @param value
             * @virtual
             */
            vfunc_remove(key: any, value: any): boolean;
            /**
             * @param key
             * @virtual
             */
            vfunc_remove_all(key: any): boolean;
            /**
             * @virtual
             */
            vfunc_clear(): void;
            /**
             * @virtual
             */
            vfunc_map_iterator(): MapIterator;
            /**
             * @virtual
             */
            vfunc_get_size(): number;
            /**
             * @virtual
             */
            vfunc_get_read_only(): boolean;
            /**
             * @virtual
             */
            vfunc_get_read_only_view(): MultiMap;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            size: number;
            read_only: boolean;
            readOnly: boolean;
        }
    }

    export interface MultiMapNamespace {
        $gtype: GObject.GType<MultiMap>;
        prototype: MultiMap;
    }
    /**
     * @gir-type Interface
     */
    interface MultiMap extends GObject.Object, MultiMap.Interface {
        // Properties

        /**
         * @read-only
         */
        get size(): number;
        /**
         * @read-only
         */
        get read_only(): boolean;
        /**
         * @read-only
         */
        get readOnly(): boolean;

        // Methods

        get_keys(): Set;
        get_all_keys(): MultiSet;
        get_values(): Collection;
        /**
         * @param key
         */
        contains(key: any): boolean;
        /**
         * @param key
         */
        get(key: any): Collection;
        /**
         * @param key
         * @param value
         */
        set(key: any, value: any): void;
        /**
         * @param args
         */
        // Conflicted with GObject.Object.set
        set(...args: never[]): any;
        /**
         * @param key
         * @param value
         */
        remove(key: any, value: any): boolean;
        /**
         * @param key
         */
        remove_all(key: any): boolean;
        clear(): void;
        map_iterator(): MapIterator;
        get_size(): number;
        get_read_only(): boolean;
        get_key_type(): GObject.GType;
        get_value_type(): GObject.GType;
        get_read_only_view(): MultiMap;
    }

    export const MultiMap: MultiMapNamespace & {
        new (): MultiMap; // This allows `obj instanceof MultiMap`
    };

    namespace MultiSet {
        /**
         * Interface for implementing MultiSet.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface extends Collection.Interface {
            // Virtual methods

            /**
             * @param item
             * @virtual
             */
            vfunc_count(item: any): number;
            /**
             * @virtual
             */
            vfunc_get_read_only_view(): MultiSet;
        }

        // Constructor properties interface

        interface ConstructorProps extends Collection.ConstructorProps {}
    }

    export interface MultiSetNamespace {
        $gtype: GObject.GType<MultiSet>;
        prototype: MultiSet;

        /**
         * @param g_type
         * @param g_dup_func
         */
        empty(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc): Set;
    }
    /**
     * @gir-type Interface
     */
    interface MultiSet extends Collection {
        // Methods

        /**
         * @param item
         */
        count(item: any): number;
        get_read_only_view(): MultiSet;

        // Virtual methods - generated with overloads due to conflicts

        /** @ignore */
        /**
         * @param item
         * @virtual
         */
        vfunc_count(item: any): number;
        /** @ignore */
        /**
         * @virtual
         */
        vfunc_get_read_only_view(): MultiSet;
        /** @ignore */
        /**
         * @virtual
         */
        vfunc_get_read_only_view(): Collection;
    }

    export const MultiSet: MultiSetNamespace & {
        new (): MultiSet; // This allows `obj instanceof MultiSet`
    };

    namespace Queue {
        /**
         * Interface for implementing Queue.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface extends Collection.Interface {
            // Virtual methods

            /**
             * @param element
             * @virtual
             */
            vfunc_offer(element: any): boolean;
            /**
             * @virtual
             */
            vfunc_peek(): any | null;
            /**
             * @virtual
             */
            vfunc_poll(): any | null;
            /**
             * @param recipient
             * @param amount
             * @virtual
             */
            vfunc_drain(recipient: Collection, amount: number): number;
            /**
             * @virtual
             */
            vfunc_get_capacity(): number;
            /**
             * @virtual
             */
            vfunc_get_remaining_capacity(): number;
            /**
             * @virtual
             */
            vfunc_get_is_full(): boolean;
        }

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
    /**
     * @gir-type Interface
     */
    interface Queue extends Collection, Queue.Interface {
        // Properties

        /**
         * @read-only
         */
        get capacity(): number;
        /**
         * @read-only
         */
        get remaining_capacity(): number;
        /**
         * @read-only
         */
        get remainingCapacity(): number;
        /**
         * @read-only
         */
        get is_full(): boolean;
        /**
         * @read-only
         */
        get isFull(): boolean;

        // Methods

        /**
         * @param element
         */
        offer(element: any): boolean;
        peek(): any | null;
        poll(): any | null;
        /**
         * @param recipient
         * @param amount
         */
        drain(recipient: Collection, amount: number): number;
        get_capacity(): number;
        get_remaining_capacity(): number;
        get_is_full(): boolean;
    }

    export const Queue: QueueNamespace & {
        new (): Queue; // This allows `obj instanceof Queue`
    };

    namespace Set {
        /**
         * Interface for implementing Set.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface extends Collection.Interface {
            // Virtual methods

            /**
             * @virtual
             */
            vfunc_get_read_only_view(): Set;
        }

        // Constructor properties interface

        interface ConstructorProps extends Collection.ConstructorProps {
            read_only_view: Set;
            readOnlyView: Set;
        }
    }

    export interface SetNamespace {
        $gtype: GObject.GType<Set>;
        prototype: Set;

        /**
         * @param g_type
         * @param g_dup_func
         */
        empty(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc): Set;
    }
    /**
     * @gir-type Interface
     */
    interface Set extends Collection {
        // Properties

        /**
         * @read-only
         */
        get read_only_view(): Set;
        /**
         * @read-only
         */
        get readOnlyView(): Set;

        // Methods

        get_read_only_view(): Set;

        // Virtual methods - generated with overloads due to conflicts

        /** @ignore */
        /**
         * @virtual
         */
        vfunc_get_read_only_view(): Set;
        /** @ignore */
        /**
         * @virtual
         */
        vfunc_get_read_only_view(): Collection;
    }

    export const Set: SetNamespace & {
        new (): Set; // This allows `obj instanceof Set`
    };

    namespace SortedMap {
        /**
         * Interface for implementing SortedMap.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface extends Map.Interface {
            // Virtual methods

            /**
             * @param before
             * @virtual
             */
            vfunc_head_map(before: any): SortedMap;
            /**
             * @param after
             * @virtual
             */
            vfunc_tail_map(after: any): SortedMap;
            /**
             * @param before
             * @param after
             * @virtual
             */
            vfunc_sub_map(before: any, after: any): SortedMap;
            /**
             * @virtual
             */
            vfunc_get_ascending_keys(): SortedSet;
            /**
             * @virtual
             */
            vfunc_get_ascending_entries(): SortedSet;
            /**
             * @virtual
             */
            vfunc_get_read_only_view(): SortedMap;
        }

        // Constructor properties interface

        interface ConstructorProps extends Map.ConstructorProps {
            ascending_keys: SortedSet;
            ascendingKeys: SortedSet;
            ascending_entries: SortedSet;
            ascendingEntries: SortedSet;
            read_only_view: SortedMap;
            readOnlyView: SortedMap;
        }
    }

    export interface SortedMapNamespace {
        $gtype: GObject.GType<SortedMap>;
        prototype: SortedMap;

        /**
         * @param k_type
         * @param k_dup_func
         * @param v_type
         * @param v_dup_func
         */
        empty(
            k_type: GObject.GType,
            k_dup_func: GObject.BoxedCopyFunc,
            v_type: GObject.GType,
            v_dup_func: GObject.BoxedCopyFunc,
        ): Map;
    }
    /**
     * @gir-type Interface
     */
    interface SortedMap extends Map {
        // Properties

        /**
         * @read-only
         */
        get ascending_keys(): SortedSet;
        /**
         * @read-only
         */
        get ascendingKeys(): SortedSet;
        /**
         * @read-only
         */
        get ascending_entries(): SortedSet;
        /**
         * @read-only
         */
        get ascendingEntries(): SortedSet;
        /**
         * @read-only
         */
        get read_only_view(): SortedMap;
        /**
         * @read-only
         */
        get readOnlyView(): SortedMap;

        // Methods

        /**
         * @param before
         */
        head_map(before: any): SortedMap;
        /**
         * @param after
         */
        tail_map(after: any): SortedMap;
        /**
         * @param before
         * @param after
         */
        sub_map(before: any, after: any): SortedMap;
        get_ascending_keys(): SortedSet;
        get_ascending_entries(): SortedSet;
        get_read_only_view(): SortedMap;

        // Virtual methods - generated with overloads due to conflicts

        /** @ignore */
        /**
         * @param before
         * @virtual
         */
        vfunc_head_map(before: any): SortedMap;
        /** @ignore */
        /**
         * @param after
         * @virtual
         */
        vfunc_tail_map(after: any): SortedMap;
        /** @ignore */
        /**
         * @param before
         * @param after
         * @virtual
         */
        vfunc_sub_map(before: any, after: any): SortedMap;
        /** @ignore */
        /**
         * @virtual
         */
        vfunc_get_ascending_keys(): SortedSet;
        /** @ignore */
        /**
         * @virtual
         */
        vfunc_get_ascending_entries(): SortedSet;
        /** @ignore */
        /**
         * @virtual
         */
        vfunc_get_read_only_view(): SortedMap;
        /** @ignore */
        /**
         * @virtual
         */
        vfunc_get_read_only_view(): Map;
    }

    export const SortedMap: SortedMapNamespace & {
        new (): SortedMap; // This allows `obj instanceof SortedMap`
    };

    namespace SortedSet {
        /**
         * Interface for implementing SortedSet.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface extends Set.Interface {
            // Virtual methods

            /**
             * @virtual
             */
            vfunc_first(): any;
            /**
             * @virtual
             */
            vfunc_last(): any;
            /**
             * @param element
             * @virtual
             */
            vfunc_iterator_at(element: any): Iterator | null;
            /**
             * @param element
             * @virtual
             */
            vfunc_lower(element: any): any | null;
            /**
             * @param element
             * @virtual
             */
            vfunc_higher(element: any): any | null;
            /**
             * @param element
             * @virtual
             */
            vfunc_floor(element: any): any | null;
            /**
             * @param element
             * @virtual
             */
            vfunc_ceil(element: any): any | null;
            /**
             * @param before
             * @virtual
             */
            vfunc_head_set(before: any): SortedSet;
            /**
             * @param after
             * @virtual
             */
            vfunc_tail_set(after: any): SortedSet;
            /**
             * @param from
             * @param to
             * @virtual
             */
            vfunc_sub_set(from: any, to: any): SortedSet;
            /**
             * @virtual
             */
            vfunc_get_read_only_view(): SortedSet;
        }

        // Constructor properties interface

        interface ConstructorProps extends Set.ConstructorProps {
            read_only_view: SortedSet;
            readOnlyView: SortedSet;
        }
    }

    export interface SortedSetNamespace {
        $gtype: GObject.GType<SortedSet>;
        prototype: SortedSet;

        /**
         * @param g_type
         * @param g_dup_func
         */
        empty(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc): SortedSet;
    }
    /**
     * @gir-type Interface
     */
    interface SortedSet extends Set {
        // Properties

        /**
         * @read-only
         */
        get read_only_view(): SortedSet;
        /**
         * @read-only
         */
        get readOnlyView(): SortedSet;

        // Methods

        first(): any;
        last(): any;
        /**
         * @param element
         */
        iterator_at(element: any): Iterator | null;
        /**
         * @param element
         */
        lower(element: any): any | null;
        /**
         * @param element
         */
        higher(element: any): any | null;
        /**
         * @param element
         */
        floor(element: any): any | null;
        /**
         * @param element
         */
        ceil(element: any): any | null;
        /**
         * @param before
         */
        head_set(before: any): SortedSet;
        /**
         * @param after
         */
        tail_set(after: any): SortedSet;
        /**
         * @param from
         * @param to
         */
        sub_set(from: any, to: any): SortedSet;
        get_read_only_view(): SortedSet;

        // Virtual methods - generated with overloads due to conflicts

        /** @ignore */
        /**
         * @virtual
         */
        vfunc_first(): any;
        /** @ignore */
        /**
         * @virtual
         */
        vfunc_last(): any;
        /** @ignore */
        /**
         * @param element
         * @virtual
         */
        vfunc_iterator_at(element: any): Iterator | null;
        /** @ignore */
        /**
         * @param element
         * @virtual
         */
        vfunc_lower(element: any): any | null;
        /** @ignore */
        /**
         * @param element
         * @virtual
         */
        vfunc_higher(element: any): any | null;
        /** @ignore */
        /**
         * @param element
         * @virtual
         */
        vfunc_floor(element: any): any | null;
        /** @ignore */
        /**
         * @param element
         * @virtual
         */
        vfunc_ceil(element: any): any | null;
        /** @ignore */
        /**
         * @param before
         * @virtual
         */
        vfunc_head_set(before: any): SortedSet;
        /** @ignore */
        /**
         * @param after
         * @virtual
         */
        vfunc_tail_set(after: any): SortedSet;
        /** @ignore */
        /**
         * @param from
         * @param to
         * @virtual
         */
        vfunc_sub_set(from: any, to: any): SortedSet;
        /** @ignore */
        /**
         * @virtual
         */
        vfunc_get_read_only_view(): SortedSet;
        /** @ignore */
        /**
         * @virtual
         */
        vfunc_get_read_only_view(): Set;
        /** @ignore */
        /**
         * @virtual
         */
        vfunc_get_read_only_view(): Collection;
    }

    export const SortedSet: SortedSetNamespace & {
        new (): SortedSet; // This allows `obj instanceof SortedSet`
    };

    namespace Traversable {
        /**
         * Interface for implementing Traversable.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface {
            // Virtual methods

            /**
             * @param f
             * @virtual
             */
            vfunc_foreach(f: ForallFunc): boolean;
            /**
             * @param a_type
             * @param a_dup_func
             * @param f
             * @virtual
             */
            vfunc_stream(a_type: GObject.GType, a_dup_func: GObject.BoxedCopyFunc, f: StreamFunc): Iterator;
            /**
             * @param a_type
             * @param a_dup_func
             * @param f
             * @param seed
             * @virtual
             */
            vfunc_fold(a_type: GObject.GType, a_dup_func: GObject.BoxedCopyFunc, f: FoldFunc, seed: any): any;
            /**
             * @param a_type
             * @param a_dup_func
             * @param f
             * @virtual
             */
            vfunc_map(a_type: GObject.GType, a_dup_func: GObject.BoxedCopyFunc, f: MapFunc): Iterator;
            /**
             * @param a_type
             * @param a_dup_func
             * @param f
             * @param seed
             * @virtual
             */
            vfunc_scan(a_type: GObject.GType, a_dup_func: GObject.BoxedCopyFunc, f: FoldFunc, seed: any): Iterator;
            /**
             * @param pred
             * @virtual
             */
            vfunc_filter(pred: Predicate): Iterator;
            /**
             * @param offset
             * @param length
             * @virtual
             */
            vfunc_chop(offset: number, length: number): Iterator;
            /**
             * @param a_type
             * @param a_dup_func
             * @param f
             * @virtual
             */
            vfunc_flat_map(a_type: GObject.GType, a_dup_func: GObject.BoxedCopyFunc, f: FlatMapFunc): Iterator;
            /**
             * @param forks
             * @virtual
             */
            vfunc_tee(forks: number): Iterator[];
            /**
             * @param pred
             * @virtual
             */
            vfunc_first_match(pred: Predicate): any | null;
            /**
             * @param pred
             * @virtual
             */
            vfunc_any_match(pred: Predicate): boolean;
            /**
             * @param pred
             * @virtual
             */
            vfunc_all_match(pred: Predicate): boolean;
            /**
             * @param compare
             * @virtual
             */
            vfunc_max(compare: GLib.CompareDataFunc): any;
            /**
             * @param compare
             * @virtual
             */
            vfunc_min(compare: GLib.CompareDataFunc): any;
            /**
             * @param compare
             * @virtual
             */
            vfunc_order_by(compare?: GLib.CompareDataFunc | null): Iterator;
            /**
             * @virtual
             */
            vfunc_get_element_type(): GObject.GType;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    export interface TraversableNamespace {
        $gtype: GObject.GType<Traversable>;
        prototype: Traversable;
    }
    /**
     * @gir-type Interface
     */
    interface Traversable extends GObject.Object, Traversable.Interface {
        // Methods

        /**
         * @param f
         */
        foreach(f: ForallFunc): boolean;
        /**
         * @param a_type
         * @param a_dup_func
         * @param f
         */
        stream(a_type: GObject.GType, a_dup_func: GObject.BoxedCopyFunc, f: StreamFunc): Iterator;
        /**
         * @param a_type
         * @param a_dup_func
         * @param f
         * @param seed
         */
        fold(a_type: GObject.GType, a_dup_func: GObject.BoxedCopyFunc, f: FoldFunc, seed: any): any;
        /**
         * @param a_type
         * @param a_dup_func
         * @param f
         */
        map(a_type: GObject.GType, a_dup_func: GObject.BoxedCopyFunc, f: MapFunc): Iterator;
        /**
         * @param a_type
         * @param a_dup_func
         * @param f
         * @param seed
         */
        scan(a_type: GObject.GType, a_dup_func: GObject.BoxedCopyFunc, f: FoldFunc, seed: any): Iterator;
        /**
         * @param pred
         */
        filter(pred: Predicate): Iterator;
        /**
         * @param offset
         * @param length
         */
        chop(offset: number, length: number): Iterator;
        /**
         * @param a_type
         * @param a_dup_func
         * @param f
         */
        flat_map(a_type: GObject.GType, a_dup_func: GObject.BoxedCopyFunc, f: FlatMapFunc): Iterator;
        /**
         * @param forks
         */
        tee(forks: number): Iterator[];
        /**
         * @param pred
         */
        first_match(pred: Predicate): any | null;
        /**
         * @param pred
         */
        any_match(pred: Predicate): boolean;
        /**
         * @param pred
         */
        all_match(pred: Predicate): boolean;
        /**
         * @param compare
         */
        max(compare: GLib.CompareDataFunc): any;
        /**
         * @param compare
         */
        min(compare: GLib.CompareDataFunc): any;
        /**
         * @param compare
         */
        order_by(compare?: GLib.CompareDataFunc | null): Iterator;
        get_element_type(): GObject.GType;
    }

    export const Traversable: TraversableNamespace & {
        new (): Traversable; // This allows `obj instanceof Traversable`
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

export default Gee;

// END
