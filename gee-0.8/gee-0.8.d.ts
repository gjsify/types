/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './gee-0.8-ambient.d.ts';
import './gee-0.8-import.d.ts';
/**
 * Gee-0.8
 */

import type Gio from '@girs/gio-2.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type GModule from '@girs/gmodule-2.0';

export namespace Gee {
    class FutureError extends GLib.Error {
        // Own fields of Gee-0.8.FutureError

        ABANDON_PROMISE: number;
        EXCEPTION: number;

        // Constructors of Gee-0.8.FutureError

        constructor(options: { message: string; code: number });
    }

    enum ConcurrentSetRangeType {
        HEAD,
        TAIL,
        BOUNDED,
        EMPTY,
    }
    enum HazardPointerPolicy {
        DEFAULT,
        THREAD_EXIT,
        TRY_FREE,
        FREE,
        TRY_RELEASE,
        RELEASE,
    }
    enum HazardPointerReleasePolicy {
        HELPER_THREAD,
        MAIN_LOOP,
    }
    enum TraversableStream {
        YIELD,
        CONTINUE,
        END,
        WAIT,
    }
    function functions_get_equal_func_for(t: GObject.GType): EqualDataFunc;
    function functions_get_hash_func_for(t: GObject.GType): HashDataFunc;
    function functions_get_compare_func_for(t: GObject.GType): GLib.CompareDataFunc;
    function hazard_pointer_policy_is_concrete(): boolean;
    function hazard_pointer_policy_is_blocking(): boolean;
    function hazard_pointer_policy_is_safe(): boolean;
    function hazard_pointer_policy_to_concrete(): HazardPointerPolicy;
    function task(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, task: Task): Future;
    function async_task(_callback_?: Gio.AsyncReadyCallback | null): void;
    function async_task_finish(_res_: Gio.AsyncResult): void;
    interface HashDataFunc {
        (t_type: GObject.GType, t_dup_func: GObject.BoxedCopyFunc, v?: any | null): number;
    }
    interface EqualDataFunc {
        (t_type: GObject.GType, t_dup_func: GObject.BoxedCopyFunc, a?: any | null, b?: any | null): boolean;
    }
    interface LazyFunc {
        (g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc): any | null;
    }
    interface FoldMapFunc {
        (
            a_type: GObject.GType,
            a_dup_func: GObject.BoxedCopyFunc,
            k_type: GObject.GType,
            k_dup_func: GObject.BoxedCopyFunc,
            v_type: GObject.GType,
            v_dup_func: GObject.BoxedCopyFunc,
            k?: any | null,
            v?: any | null,
            a?: any | null,
        ): any | null;
    }
    interface ForallMapFunc {
        (
            k_type: GObject.GType,
            k_dup_func: GObject.BoxedCopyFunc,
            v_type: GObject.GType,
            v_dup_func: GObject.BoxedCopyFunc,
            k?: any | null,
            v?: any | null,
        ): boolean;
    }
    interface Task {
        (g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc): any | null;
    }
    interface FoldFunc {
        (
            a_type: GObject.GType,
            a_dup_func: GObject.BoxedCopyFunc,
            g_type: GObject.GType,
            g_dup_func: GObject.BoxedCopyFunc,
            g?: any | null,
            a?: any | null,
        ): any | null;
    }
    interface ForallFunc {
        (g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g?: any | null): boolean;
    }
    interface UnfoldFunc {
        (a_type: GObject.GType, a_dup_func: GObject.BoxedCopyFunc): Lazy | null;
    }
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
    interface MapFunc {
        (
            a_type: GObject.GType,
            a_dup_func: GObject.BoxedCopyFunc,
            g_type: GObject.GType,
            g_dup_func: GObject.BoxedCopyFunc,
            g?: any | null,
        ): any | null;
    }
    interface Predicate {
        (g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g?: any | null): boolean;
    }
    interface FlatMapFunc {
        (
            a_type: GObject.GType,
            a_dup_func: GObject.BoxedCopyFunc,
            g_type: GObject.GType,
            g_dup_func: GObject.BoxedCopyFunc,
            g?: any | null,
        ): Iterator;
    }
    module AbstractBidirList {
        // Constructor properties interface
    }

    abstract class AbstractBidirList extends AbstractList {
        // Own properties of Gee-0.8.AbstractBidirList

        g_type: GObject.GType;
        gType: GObject.GType;
        g_dup_func: GObject.BoxedCopyFunc;
        gDupFunc: GObject.BoxedCopyFunc;
        g_destroy_func: GLib.DestroyNotify;
        gDestroyFunc: GLib.DestroyNotify;
        readonly read_only_view: BidirList;
        readonly readOnlyView: BidirList;

        // Owm methods of Gee-0.8.AbstractBidirList

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
    }

    module AbstractBidirSortedSet {
        // Constructor properties interface
    }

    abstract class AbstractBidirSortedSet extends AbstractSortedSet {
        // Own properties of Gee-0.8.AbstractBidirSortedSet

        g_type: GObject.GType;
        gType: GObject.GType;
        g_dup_func: GObject.BoxedCopyFunc;
        gDupFunc: GObject.BoxedCopyFunc;
        g_destroy_func: GLib.DestroyNotify;
        gDestroyFunc: GLib.DestroyNotify;
        readonly read_only_view: BidirSortedSet;
        readonly readOnlyView: BidirSortedSet;

        // Owm methods of Gee-0.8.AbstractBidirSortedSet

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
    }

    module AbstractBidirSortedMap {
        // Constructor properties interface
    }

    abstract class AbstractBidirSortedMap extends AbstractSortedMap {
        // Own properties of Gee-0.8.AbstractBidirSortedMap

        k_type: GObject.GType;
        kType: GObject.GType;
        k_dup_func: GObject.BoxedCopyFunc;
        kDupFunc: GObject.BoxedCopyFunc;
        k_destroy_func: GLib.DestroyNotify;
        kDestroyFunc: GLib.DestroyNotify;
        v_type: GObject.GType;
        vType: GObject.GType;
        v_dup_func: GObject.BoxedCopyFunc;
        vDupFunc: GObject.BoxedCopyFunc;
        v_destroy_func: GLib.DestroyNotify;
        vDestroyFunc: GLib.DestroyNotify;
        readonly read_only_view: BidirSortedMap;
        readonly readOnlyView: BidirSortedMap;

        // Owm methods of Gee-0.8.AbstractBidirSortedMap

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
    }

    module AbstractCollection {
        // Constructor properties interface
    }

    abstract class AbstractCollection extends GObject.Object {
        // Own properties of Gee-0.8.AbstractCollection

        g_type: GObject.GType;
        gType: GObject.GType;
        g_dup_func: GObject.BoxedCopyFunc;
        gDupFunc: GObject.BoxedCopyFunc;
        g_destroy_func: GLib.DestroyNotify;
        gDestroyFunc: GLib.DestroyNotify;
        readonly size: number;
        readonly read_only: boolean;
        readonly readOnly: boolean;
        readonly read_only_view: Collection;
        readonly readOnlyView: Collection;

        // Owm methods of Gee-0.8.AbstractCollection

        contains(item?: any | null): boolean;
        add(item?: any | null): boolean;
        remove(item?: any | null): boolean;
        clear(): void;
        iterator(): Iterator;
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
    }

    module AbstractList {
        // Constructor properties interface
    }

    abstract class AbstractList extends AbstractCollection {
        // Own properties of Gee-0.8.AbstractList

        g_type: GObject.GType;
        gType: GObject.GType;
        g_dup_func: GObject.BoxedCopyFunc;
        gDupFunc: GObject.BoxedCopyFunc;
        g_destroy_func: GLib.DestroyNotify;
        gDestroyFunc: GLib.DestroyNotify;
        readonly read_only_view: List;
        readonly readOnlyView: List;

        // Owm methods of Gee-0.8.AbstractList

        list_iterator(): ListIterator;
        get(index: number): any | null;
        set(index: number, item?: any | null): void;
        index_of(item?: any | null): number;
        insert(index: number, item?: any | null): void;
        remove_at(index: number): any | null;
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
    }

    module AbstractMap {
        // Constructor properties interface
    }

    abstract class AbstractMap extends GObject.Object {
        // Own properties of Gee-0.8.AbstractMap

        k_type: GObject.GType;
        kType: GObject.GType;
        k_dup_func: GObject.BoxedCopyFunc;
        kDupFunc: GObject.BoxedCopyFunc;
        k_destroy_func: GLib.DestroyNotify;
        kDestroyFunc: GLib.DestroyNotify;
        v_type: GObject.GType;
        vType: GObject.GType;
        v_dup_func: GObject.BoxedCopyFunc;
        vDupFunc: GObject.BoxedCopyFunc;
        v_destroy_func: GLib.DestroyNotify;
        vDestroyFunc: GLib.DestroyNotify;
        readonly size: number;
        readonly read_only: boolean;
        readonly readOnly: boolean;
        readonly keys: Set;
        readonly values: Collection;
        readonly entries: Set;
        readonly read_only_view: Map;
        readonly readOnlyView: Map;

        // Owm methods of Gee-0.8.AbstractMap

        has_key(key?: any | null): boolean;
        has(key?: any | null, value?: any | null): boolean;
        get(key?: any | null): any | null;
        set(key?: any | null, value?: any | null): void;
        unset(key: any | null): boolean;
        map_iterator(): MapIterator;
        clear(): void;
        foreach(f: ForallFunc): boolean;
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
    }

    module AbstractMultiMap {
        // Constructor properties interface
    }

    abstract class AbstractMultiMap extends GObject.Object {
        // Own properties of Gee-0.8.AbstractMultiMap

        k_type: GObject.GType;
        kType: GObject.GType;
        k_dup_func: GObject.BoxedCopyFunc;
        kDupFunc: GObject.BoxedCopyFunc;
        k_destroy_func: GLib.DestroyNotify;
        kDestroyFunc: GLib.DestroyNotify;
        v_type: GObject.GType;
        vType: GObject.GType;
        v_dup_func: GObject.BoxedCopyFunc;
        vDupFunc: GObject.BoxedCopyFunc;
        v_destroy_func: GLib.DestroyNotify;
        vDestroyFunc: GLib.DestroyNotify;

        // Owm methods of Gee-0.8.AbstractMultiMap

        create_value_storage(): Collection;
        create_multi_key_set(): MultiSet;
        get_value_equal_func(): EqualDataFunc;
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
    }

    module AbstractMultiSet {
        // Constructor properties interface
    }

    abstract class AbstractMultiSet extends AbstractCollection {
        // Own properties of Gee-0.8.AbstractMultiSet

        g_type: GObject.GType;
        gType: GObject.GType;
        g_dup_func: GObject.BoxedCopyFunc;
        gDupFunc: GObject.BoxedCopyFunc;
        g_destroy_func: GLib.DestroyNotify;
        gDestroyFunc: GLib.DestroyNotify;

        // Owm methods of Gee-0.8.AbstractMultiSet

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
    }

    module AbstractQueue {
        // Constructor properties interface
    }

    abstract class AbstractQueue extends AbstractCollection {
        // Own properties of Gee-0.8.AbstractQueue

        g_type: GObject.GType;
        gType: GObject.GType;
        g_dup_func: GObject.BoxedCopyFunc;
        gDupFunc: GObject.BoxedCopyFunc;
        g_destroy_func: GLib.DestroyNotify;
        gDestroyFunc: GLib.DestroyNotify;
        readonly capacity: number;
        readonly remaining_capacity: number;
        readonly remainingCapacity: number;
        readonly is_full: boolean;
        readonly isFull: boolean;

        // Owm methods of Gee-0.8.AbstractQueue

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
    }

    module AbstractSet {
        // Constructor properties interface
    }

    abstract class AbstractSet extends AbstractCollection {
        // Own properties of Gee-0.8.AbstractSet

        g_type: GObject.GType;
        gType: GObject.GType;
        g_dup_func: GObject.BoxedCopyFunc;
        gDupFunc: GObject.BoxedCopyFunc;
        g_destroy_func: GLib.DestroyNotify;
        gDestroyFunc: GLib.DestroyNotify;
        readonly read_only_view: Set;
        readonly readOnlyView: Set;

        // Owm methods of Gee-0.8.AbstractSet

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
    }

    module AbstractSortedMap {
        // Constructor properties interface
    }

    abstract class AbstractSortedMap extends AbstractMap {
        // Own properties of Gee-0.8.AbstractSortedMap

        k_type: GObject.GType;
        kType: GObject.GType;
        k_dup_func: GObject.BoxedCopyFunc;
        kDupFunc: GObject.BoxedCopyFunc;
        k_destroy_func: GLib.DestroyNotify;
        kDestroyFunc: GLib.DestroyNotify;
        v_type: GObject.GType;
        vType: GObject.GType;
        v_dup_func: GObject.BoxedCopyFunc;
        vDupFunc: GObject.BoxedCopyFunc;
        v_destroy_func: GLib.DestroyNotify;
        vDestroyFunc: GLib.DestroyNotify;
        readonly ascending_keys: SortedSet;
        readonly ascendingKeys: SortedSet;
        readonly ascending_entries: SortedSet;
        readonly ascendingEntries: SortedSet;

        // Owm methods of Gee-0.8.AbstractSortedMap

        head_map(before?: any | null): SortedMap;
        tail_map(after?: any | null): SortedMap;
        sub_map(before?: any | null, after?: any | null): SortedMap;
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
    }

    module AbstractSortedSet {
        // Constructor properties interface
    }

    abstract class AbstractSortedSet extends AbstractSet {
        // Own properties of Gee-0.8.AbstractSortedSet

        g_type: GObject.GType;
        gType: GObject.GType;
        g_dup_func: GObject.BoxedCopyFunc;
        gDupFunc: GObject.BoxedCopyFunc;
        g_destroy_func: GLib.DestroyNotify;
        gDestroyFunc: GLib.DestroyNotify;
        readonly read_only_view: SortedSet;
        readonly readOnlyView: SortedSet;

        // Owm methods of Gee-0.8.AbstractSortedSet

        first(): any | null;
        last(): any | null;
        iterator_at(element?: any | null): Iterator | null;
        lower(element?: any | null): any | null;
        higher(element?: any | null): any | null;
        floor(element?: any | null): any | null;
        ceil(element?: any | null): any | null;
        head_set(before?: any | null): SortedSet;
        tail_set(after?: any | null): SortedSet;
        sub_set(from?: any | null, to?: any | null): SortedSet;
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

    module ArrayList {
        // Constructor properties interface
    }

    class ArrayList extends AbstractBidirList {
        // Own properties of Gee-0.8.ArrayList

        g_type: GObject.GType;
        gType: GObject.GType;
        g_dup_func: GObject.BoxedCopyFunc;
        gDupFunc: GObject.BoxedCopyFunc;
        g_destroy_func: GLib.DestroyNotify;
        gDestroyFunc: GLib.DestroyNotify;

        // Constructors of Gee-0.8.ArrayList

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

        // Owm methods of Gee-0.8.ArrayList

        add_all(collection: Collection): boolean;
        get_equal_func(): EqualDataFunc;
    }

    module ArrayQueue {
        // Constructor properties interface
    }

    class ArrayQueue extends AbstractQueue {
        // Own properties of Gee-0.8.ArrayQueue

        g_type: GObject.GType;
        gType: GObject.GType;
        g_dup_func: GObject.BoxedCopyFunc;
        gDupFunc: GObject.BoxedCopyFunc;
        g_destroy_func: GLib.DestroyNotify;
        gDestroyFunc: GLib.DestroyNotify;
        readonly is_empty: boolean;
        readonly isEmpty: boolean;

        // Constructors of Gee-0.8.ArrayQueue

        static ['new'](
            g_type: GObject.GType,
            g_dup_func: GObject.BoxedCopyFunc,
            equal_func?: EqualDataFunc | null,
        ): ArrayQueue;

        // Owm methods of Gee-0.8.ArrayQueue

        get_equal_func(): EqualDataFunc;
        get_is_empty(): boolean;
    }

    module ConcurrentList {
        // Constructor properties interface
    }

    class ConcurrentList extends AbstractList {
        // Own properties of Gee-0.8.ConcurrentList

        g_type: GObject.GType;
        gType: GObject.GType;
        g_dup_func: GObject.BoxedCopyFunc;
        gDupFunc: GObject.BoxedCopyFunc;
        g_destroy_func: GLib.DestroyNotify;
        gDestroyFunc: GLib.DestroyNotify;
        readonly is_empty: boolean;
        readonly isEmpty: boolean;

        // Constructors of Gee-0.8.ConcurrentList

        static ['new'](
            g_type: GObject.GType,
            g_dup_func: GObject.BoxedCopyFunc,
            equal_func?: EqualDataFunc | null,
        ): ConcurrentList;

        // Owm methods of Gee-0.8.ConcurrentList

        get_equal_func(): EqualDataFunc;
        get_is_empty(): boolean;
    }

    module ConcurrentSet {
        // Constructor properties interface
    }

    class ConcurrentSet extends AbstractSortedSet {
        // Own properties of Gee-0.8.ConcurrentSet

        g_type: GObject.GType;
        gType: GObject.GType;
        g_dup_func: GObject.BoxedCopyFunc;
        gDupFunc: GObject.BoxedCopyFunc;
        g_destroy_func: GLib.DestroyNotify;
        gDestroyFunc: GLib.DestroyNotify;

        // Constructors of Gee-0.8.ConcurrentSet

        static ['new'](
            g_type: GObject.GType,
            g_dup_func: GObject.BoxedCopyFunc,
            compare_func?: GLib.CompareDataFunc | null,
        ): ConcurrentSet;
    }

    module HashMap {
        // Constructor properties interface
    }

    class HashMap extends AbstractMap {
        // Own properties of Gee-0.8.HashMap

        k_type: GObject.GType;
        kType: GObject.GType;
        k_dup_func: GObject.BoxedCopyFunc;
        kDupFunc: GObject.BoxedCopyFunc;
        k_destroy_func: GLib.DestroyNotify;
        kDestroyFunc: GLib.DestroyNotify;
        v_type: GObject.GType;
        vType: GObject.GType;
        v_dup_func: GObject.BoxedCopyFunc;
        vDupFunc: GObject.BoxedCopyFunc;
        v_destroy_func: GLib.DestroyNotify;
        vDestroyFunc: GLib.DestroyNotify;

        // Constructors of Gee-0.8.HashMap

        static ['new'](
            k_type: GObject.GType,
            k_dup_func: GObject.BoxedCopyFunc,
            v_type: GObject.GType,
            v_dup_func: GObject.BoxedCopyFunc,
            key_hash_func?: HashDataFunc | null,
            key_equal_func?: EqualDataFunc | null,
            value_equal_func?: EqualDataFunc | null,
        ): HashMap;

        // Owm methods of Gee-0.8.HashMap

        get_key_hash_func(): HashDataFunc;
        get_key_equal_func(): EqualDataFunc;
        get_value_equal_func(): EqualDataFunc;
    }

    module HashMultiMap {
        // Constructor properties interface
    }

    class HashMultiMap extends AbstractMultiMap {
        // Own properties of Gee-0.8.HashMultiMap

        k_type: GObject.GType;
        kType: GObject.GType;
        k_dup_func: GObject.BoxedCopyFunc;
        kDupFunc: GObject.BoxedCopyFunc;
        k_destroy_func: GLib.DestroyNotify;
        kDestroyFunc: GLib.DestroyNotify;
        v_type: GObject.GType;
        vType: GObject.GType;
        v_dup_func: GObject.BoxedCopyFunc;
        vDupFunc: GObject.BoxedCopyFunc;
        v_destroy_func: GLib.DestroyNotify;
        vDestroyFunc: GLib.DestroyNotify;

        // Constructors of Gee-0.8.HashMultiMap

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

        // Owm methods of Gee-0.8.HashMultiMap

        get_key_hash_func(): HashDataFunc;
        get_key_equal_func(): EqualDataFunc;
        get_value_hash_func(): HashDataFunc;
        get_value_equal_func(): EqualDataFunc;
    }

    module HashMultiSet {
        // Constructor properties interface
    }

    class HashMultiSet extends AbstractMultiSet {
        // Own properties of Gee-0.8.HashMultiSet

        g_type: GObject.GType;
        gType: GObject.GType;
        g_dup_func: GObject.BoxedCopyFunc;
        gDupFunc: GObject.BoxedCopyFunc;
        g_destroy_func: GLib.DestroyNotify;
        gDestroyFunc: GLib.DestroyNotify;

        // Constructors of Gee-0.8.HashMultiSet

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

        // Owm methods of Gee-0.8.HashMultiSet

        get_hash_func(): HashDataFunc;
        get_equal_func(): EqualDataFunc;
    }

    module HashSet {
        // Constructor properties interface
    }

    class HashSet extends AbstractSet {
        // Own properties of Gee-0.8.HashSet

        g_type: GObject.GType;
        gType: GObject.GType;
        g_dup_func: GObject.BoxedCopyFunc;
        gDupFunc: GObject.BoxedCopyFunc;
        g_destroy_func: GLib.DestroyNotify;
        gDestroyFunc: GLib.DestroyNotify;

        // Constructors of Gee-0.8.HashSet

        static ['new'](
            g_type: GObject.GType,
            g_dup_func: GObject.BoxedCopyFunc,
            hash_func?: HashDataFunc | null,
            equal_func?: EqualDataFunc | null,
        ): HashSet;

        // Owm methods of Gee-0.8.HashSet

        get_hash_func(): HashDataFunc;
        get_equal_func(): EqualDataFunc;
    }

    class Lazy {
        // Own fields of Gee-0.8.Lazy

        ref_count: number;

        // Constructors of Gee-0.8.Lazy

        static ['new'](g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, func: LazyFunc): Lazy;

        static from_value(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, item?: any | null): Lazy;

        // Owm methods of Gee-0.8.Lazy

        eval(): void;
        get(): any | null;
        get_value(): any | null;
        get_future(): Future | null;
    }

    module LinkedList {
        // Constructor properties interface
    }

    class LinkedList extends AbstractBidirList {
        // Own properties of Gee-0.8.LinkedList

        g_type: GObject.GType;
        gType: GObject.GType;
        g_dup_func: GObject.BoxedCopyFunc;
        gDupFunc: GObject.BoxedCopyFunc;
        g_destroy_func: GLib.DestroyNotify;
        gDestroyFunc: GLib.DestroyNotify;

        // Constructors of Gee-0.8.LinkedList

        static ['new'](
            g_type: GObject.GType,
            g_dup_func: GObject.BoxedCopyFunc,
            equal_func?: EqualDataFunc | null,
        ): LinkedList;

        // Owm methods of Gee-0.8.LinkedList

        first(): any | null;
        last(): any | null;
        get_equal_func(): EqualDataFunc;
    }

    module PriorityQueue {
        // Constructor properties interface
    }

    class PriorityQueue extends AbstractQueue {
        // Own properties of Gee-0.8.PriorityQueue

        g_type: GObject.GType;
        gType: GObject.GType;
        g_dup_func: GObject.BoxedCopyFunc;
        gDupFunc: GObject.BoxedCopyFunc;
        g_destroy_func: GLib.DestroyNotify;
        gDestroyFunc: GLib.DestroyNotify;

        // Constructors of Gee-0.8.PriorityQueue

        static ['new'](
            g_type: GObject.GType,
            g_dup_func: GObject.BoxedCopyFunc,
            compare_func?: GLib.CompareDataFunc | null,
        ): PriorityQueue;

        // Owm methods of Gee-0.8.PriorityQueue

        offer(element?: any | null): boolean;
        drain(recipient: Collection, amount: number): number;
        get_compare_func(): GLib.CompareDataFunc;
    }

    class Promise {
        // Own fields of Gee-0.8.Promise

        ref_count: number;

        // Constructors of Gee-0.8.Promise

        static ['new'](g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc): Promise;

        // Owm methods of Gee-0.8.Promise

        set_value(value?: any | null): void;
        set_exception(exception: GLib.Error): void;
        get_future(): Future;
    }

    module TreeMap {
        // Constructor properties interface
    }

    class TreeMap extends AbstractBidirSortedMap {
        // Own properties of Gee-0.8.TreeMap

        k_type: GObject.GType;
        kType: GObject.GType;
        k_dup_func: GObject.BoxedCopyFunc;
        kDupFunc: GObject.BoxedCopyFunc;
        k_destroy_func: GLib.DestroyNotify;
        kDestroyFunc: GLib.DestroyNotify;
        v_type: GObject.GType;
        vType: GObject.GType;
        v_dup_func: GObject.BoxedCopyFunc;
        vDupFunc: GObject.BoxedCopyFunc;
        v_destroy_func: GLib.DestroyNotify;
        vDestroyFunc: GLib.DestroyNotify;

        // Constructors of Gee-0.8.TreeMap

        static ['new'](
            k_type: GObject.GType,
            k_dup_func: GObject.BoxedCopyFunc,
            v_type: GObject.GType,
            v_dup_func: GObject.BoxedCopyFunc,
            key_compare_func?: GLib.CompareDataFunc | null,
            value_equal_func?: EqualDataFunc | null,
        ): TreeMap;

        // Owm methods of Gee-0.8.TreeMap

        get_key_compare_func(): GLib.CompareDataFunc;
        get_value_equal_func(): EqualDataFunc;
    }

    module TreeMultiMap {
        // Constructor properties interface
    }

    class TreeMultiMap extends AbstractMultiMap {
        // Own properties of Gee-0.8.TreeMultiMap

        k_type: GObject.GType;
        kType: GObject.GType;
        k_dup_func: GObject.BoxedCopyFunc;
        kDupFunc: GObject.BoxedCopyFunc;
        k_destroy_func: GLib.DestroyNotify;
        kDestroyFunc: GLib.DestroyNotify;
        v_type: GObject.GType;
        vType: GObject.GType;
        v_dup_func: GObject.BoxedCopyFunc;
        vDupFunc: GObject.BoxedCopyFunc;
        v_destroy_func: GLib.DestroyNotify;
        vDestroyFunc: GLib.DestroyNotify;

        // Constructors of Gee-0.8.TreeMultiMap

        static ['new'](
            k_type: GObject.GType,
            k_dup_func: GObject.BoxedCopyFunc,
            v_type: GObject.GType,
            v_dup_func: GObject.BoxedCopyFunc,
            key_compare_func?: GLib.CompareDataFunc | null,
            value_compare_func?: GLib.CompareDataFunc | null,
        ): TreeMultiMap;

        // Owm methods of Gee-0.8.TreeMultiMap

        get_key_compare_func(): GLib.CompareDataFunc;
        get_value_compare_func(): GLib.CompareDataFunc;
    }

    module TreeMultiSet {
        // Constructor properties interface
    }

    class TreeMultiSet extends AbstractMultiSet {
        // Own properties of Gee-0.8.TreeMultiSet

        g_type: GObject.GType;
        gType: GObject.GType;
        g_dup_func: GObject.BoxedCopyFunc;
        gDupFunc: GObject.BoxedCopyFunc;
        g_destroy_func: GLib.DestroyNotify;
        gDestroyFunc: GLib.DestroyNotify;

        // Constructors of Gee-0.8.TreeMultiSet

        static ['new'](
            g_type: GObject.GType,
            g_dup_func: GObject.BoxedCopyFunc,
            compare_func?: GLib.CompareDataFunc | null,
        ): TreeMultiSet;

        // Owm methods of Gee-0.8.TreeMultiSet

        get_compare_func(): GLib.CompareDataFunc;
    }

    module TreeSet {
        // Constructor properties interface
    }

    class TreeSet extends AbstractBidirSortedSet {
        // Own properties of Gee-0.8.TreeSet

        g_type: GObject.GType;
        gType: GObject.GType;
        g_dup_func: GObject.BoxedCopyFunc;
        gDupFunc: GObject.BoxedCopyFunc;
        g_destroy_func: GLib.DestroyNotify;
        gDestroyFunc: GLib.DestroyNotify;

        // Constructors of Gee-0.8.TreeSet

        static ['new'](
            g_type: GObject.GType,
            g_dup_func: GObject.BoxedCopyFunc,
            compare_func?: GLib.CompareDataFunc | null,
        ): TreeSet;

        // Owm methods of Gee-0.8.TreeSet

        get_compare_func(): GLib.CompareDataFunc;
    }

    module UnrolledLinkedList {
        // Constructor properties interface
    }

    class UnrolledLinkedList extends AbstractBidirList {
        // Own properties of Gee-0.8.UnrolledLinkedList

        g_type: GObject.GType;
        gType: GObject.GType;
        g_dup_func: GObject.BoxedCopyFunc;
        gDupFunc: GObject.BoxedCopyFunc;
        g_destroy_func: GLib.DestroyNotify;
        gDestroyFunc: GLib.DestroyNotify;

        // Constructors of Gee-0.8.UnrolledLinkedList

        static ['new'](
            g_type: GObject.GType,
            g_dup_func: GObject.BoxedCopyFunc,
            equal_func?: EqualDataFunc | null,
        ): UnrolledLinkedList;

        // Owm methods of Gee-0.8.UnrolledLinkedList

        get_equal_func(): EqualDataFunc;
    }

    module MapEntry {
        // Constructor properties interface
    }

    abstract class MapEntry extends GObject.Object {
        // Own properties of Gee-0.8.MapEntry

        k_type: GObject.GType;
        kType: GObject.GType;
        k_dup_func: GObject.BoxedCopyFunc;
        kDupFunc: GObject.BoxedCopyFunc;
        k_destroy_func: GLib.DestroyNotify;
        kDestroyFunc: GLib.DestroyNotify;
        v_type: GObject.GType;
        vType: GObject.GType;
        v_dup_func: GObject.BoxedCopyFunc;
        vDupFunc: GObject.BoxedCopyFunc;
        v_destroy_func: GLib.DestroyNotify;
        vDestroyFunc: GLib.DestroyNotify;
        readonly key: any;
        value: any;
        readonly read_only: boolean;
        readonly readOnly: boolean;

        // Owm methods of Gee-0.8.MapEntry

        get_key(): any | null;
        get_value(): any | null;
        set_value(value?: any | null): void;
        get_read_only(): boolean;
    }

    class AbstractBidirListClass {}

    class AbstractBidirListPrivate {}

    class AbstractBidirSortedSetClass {}

    class AbstractBidirSortedSetPrivate {}

    class AbstractBidirSortedMapClass {}

    class AbstractBidirSortedMapPrivate {}

    class AbstractCollectionClass {}

    class AbstractCollectionPrivate {}

    class AbstractListClass {}

    class AbstractListPrivate {}

    class AbstractMapClass {}

    class AbstractMapPrivate {}

    class AbstractMultiMapClass {}

    class AbstractMultiMapPrivate {}

    class AbstractMultiSetClass {}

    class AbstractMultiSetPrivate {}

    class AbstractQueueClass {}

    class AbstractQueuePrivate {}

    class AbstractSetClass {}

    class AbstractSetPrivate {}

    class AbstractSortedMapClass {}

    class AbstractSortedMapPrivate {}

    class AbstractSortedSetClass {}

    class AbstractSortedSetPrivate {}

    class ArrayListClass {}

    class ArrayListPrivate {}

    class ArrayQueueClass {}

    class ArrayQueuePrivate {}

    class ConcurrentListClass {}

    class ConcurrentListPrivate {}

    class ConcurrentSetClass {}

    class ConcurrentSetPrivate {}

    class HashMapClass {}

    class HashMapPrivate {}

    class HashMultiMapClass {}

    class HashMultiMapPrivate {}

    class HashMultiSetClass {}

    class HashMultiSetPrivate {}

    class HashSetClass {}

    class HashSetPrivate {}

    class HazardPointer {
        // Constructors of Gee-0.8.HazardPointer

        constructor(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, ptr?: any | null);

        static ['new'](g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, ptr?: any | null): HazardPointer;

        // Owm methods of Gee-0.8.HazardPointer

        static get_hazard_pointer(
            g_type: GObject.GType,
            g_dup_func: GObject.BoxedCopyFunc,
            aptr: any | null,
            mask: number,
        ): HazardPointer | null;
        static get_pointer(
            g_type: GObject.GType,
            g_dup_func: GObject.BoxedCopyFunc,
            aptr: any | null,
            mask: number,
        ): any | null;
        static exchange_hazard_pointer(
            g_type: GObject.GType,
            g_dup_func: GObject.BoxedCopyFunc,
            aptr: any | null,
            new_ptr: any | null,
            mask: number,
            new_mask: number,
        ): HazardPointer | null;
        static set_pointer(
            g_type: GObject.GType,
            g_dup_func: GObject.BoxedCopyFunc,
            aptr: any | null,
            new_ptr: any | null,
            mask: number,
            new_mask: number,
        ): void;
        static exchange_pointer(
            g_type: GObject.GType,
            g_dup_func: GObject.BoxedCopyFunc,
            aptr: any | null,
            new_ptr: any | null,
            mask: number,
            new_mask: number,
        ): any | null;
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
        static set_default_policy(policy: HazardPointerPolicy): void;
        static set_thread_exit_policy(policy: HazardPointerPolicy): void;
        static set_release_policy(policy: HazardPointerReleasePolicy): boolean;

        // Owm methods of Gee-0.8.HazardPointer

        get(other_thread: boolean): any | null;
        release(): void;
    }

    class HazardPointerContext {
        // Constructors of Gee-0.8.HazardPointerContext

        constructor(policy?: HazardPointerPolicy | null);

        static ['new'](policy?: HazardPointerPolicy | null): HazardPointerContext;

        // Owm methods of Gee-0.8.HazardPointerContext

        try_free(): void;
        free_all(): void;
        try_release(): void;
        release(): void;
    }

    class LazyClass {}

    class LazyPrivate {}

    class LinkedListClass {}

    class LinkedListPrivate {}

    class PriorityQueueClass {}

    class PriorityQueuePrivate {}

    class PromiseClass {}

    class PromisePrivate {}

    class TreeMapClass {}

    class TreeMapPrivate {}

    class TreeMultiMapClass {}

    class TreeMultiMapPrivate {}

    class TreeMultiSetClass {}

    class TreeMultiSetPrivate {}

    class TreeSetClass {}

    class TreeSetPrivate {}

    class UnrolledLinkedListClass {}

    class UnrolledLinkedListPrivate {}

    class BidirIteratorIface {}

    class BidirListIface {}

    class BidirListIteratorIface {}

    class BidirMapIteratorIface {}

    class BidirSortedSetIface {}

    class BidirSortedMapIface {}

    class CollectionIface {}

    class ComparableIface {}

    class DequeIface {}

    class FutureIface {}

    class HashableIface {}

    class IterableIface {}

    class IteratorIface {}

    class ListIface {}

    class ListIteratorIface {}

    class MapIface {}

    class MapEntryClass {}

    class MapEntryPrivate {}

    class MapIteratorIface {}

    class MultiMapIface {}

    class MultiSetIface {}

    class QueueIface {}

    class SetIface {}

    class SortedMapIface {}

    class SortedSetIface {}

    class TraversableIface {}

    interface BidirIterator {
        // Owm methods of Gee-0.8.BidirIterator

        previous(): boolean;
        has_previous(): boolean;
        first(): boolean;
        last(): boolean;

        // Own virtual methods of Gee-0.8.BidirIterator

        vfunc_previous(): boolean;
        vfunc_has_previous(): boolean;
        vfunc_first(): boolean;
        vfunc_last(): boolean;
    }

    interface BidirList {
        // Own properties of Gee-0.8.BidirList

        readonly read_only_view: BidirList;
        readonly readOnlyView: BidirList;

        // Owm methods of Gee-0.8.BidirList

        bidir_list_iterator(): BidirListIterator;
        get_read_only_view(): BidirList;

        // Own virtual methods of Gee-0.8.BidirList

        vfunc_bidir_list_iterator(): BidirListIterator;
        vfunc_get_read_only_view(): BidirList;
    }

    interface BidirListIterator {
        // Owm methods of Gee-0.8.BidirListIterator

        insert(item?: any | null): void;

        // Own virtual methods of Gee-0.8.BidirListIterator

        vfunc_insert(item?: any | null): void;
    }

    interface BidirMapIterator {
        // Owm methods of Gee-0.8.BidirMapIterator

        previous(): boolean;
        has_previous(): boolean;
        first(): boolean;
        last(): boolean;

        // Own virtual methods of Gee-0.8.BidirMapIterator

        vfunc_previous(): boolean;
        vfunc_has_previous(): boolean;
        vfunc_first(): boolean;
        vfunc_last(): boolean;
    }

    interface BidirSortedSet {
        // Own properties of Gee-0.8.BidirSortedSet

        readonly read_only_view: BidirSortedSet;
        readonly readOnlyView: BidirSortedSet;

        // Owm methods of Gee-0.8.BidirSortedSet

        bidir_iterator(): BidirIterator;
        get_read_only_view(): BidirSortedSet;

        // Own virtual methods of Gee-0.8.BidirSortedSet

        vfunc_bidir_iterator(): BidirIterator;
        vfunc_get_read_only_view(): BidirSortedSet;
    }

    interface BidirSortedMap {
        // Own properties of Gee-0.8.BidirSortedMap

        readonly read_only_view: BidirSortedMap;
        readonly readOnlyView: BidirSortedMap;

        // Owm methods of Gee-0.8.BidirSortedMap

        bidir_map_iterator(): BidirMapIterator;
        get_read_only_view(): BidirSortedMap;

        // Own virtual methods of Gee-0.8.BidirSortedMap

        vfunc_bidir_map_iterator(): BidirMapIterator;
        vfunc_get_read_only_view(): BidirSortedMap;
    }

    interface Collection {
        // Own properties of Gee-0.8.Collection

        readonly size: number;
        readonly read_only: boolean;
        readonly readOnly: boolean;
        readonly read_only_view: Collection;
        readonly readOnlyView: Collection;

        // Owm methods of Gee-0.8.Collection

        contains(item?: any | null): boolean;
        add(item?: any | null): boolean;
        remove(item?: any | null): boolean;
        clear(): void;
        add_all(collection: Collection): boolean;
        contains_all(collection: Collection): boolean;
        remove_all(collection: Collection): boolean;
        retain_all(collection: Collection): boolean;
        to_array(): any[];
        add_all_array(array: any[]): boolean;
        contains_all_array(array: any[]): boolean;
        remove_all_array(array: any[]): boolean;
        add_all_iterator(iter: Iterator): boolean;
        contains_all_iterator(iter: Iterator): boolean;
        remove_all_iterator(iter: Iterator): boolean;
        get_size(): number;
        get_is_empty(): boolean;
        get_read_only(): boolean;
        get_read_only_view(): Collection;

        // Own virtual methods of Gee-0.8.Collection

        vfunc_contains(item?: any | null): boolean;
        vfunc_add(item?: any | null): boolean;
        vfunc_remove(item?: any | null): boolean;
        vfunc_clear(): void;
        vfunc_add_all(collection: Collection): boolean;
        vfunc_contains_all(collection: Collection): boolean;
        vfunc_remove_all(collection: Collection): boolean;
        vfunc_retain_all(collection: Collection): boolean;
        vfunc_to_array(): any[];
        vfunc_add_all_array(array: any[]): boolean;
        vfunc_contains_all_array(array: any[]): boolean;
        vfunc_remove_all_array(array: any[]): boolean;
        vfunc_add_all_iterator(iter: Iterator): boolean;
        vfunc_contains_all_iterator(iter: Iterator): boolean;
        vfunc_remove_all_iterator(iter: Iterator): boolean;
        vfunc_get_size(): number;
        vfunc_get_is_empty(): boolean;
        vfunc_get_read_only(): boolean;
        vfunc_get_read_only_view(): Collection;
    }

    interface Comparable {
        // Owm methods of Gee-0.8.Comparable

        compare_to(object?: any | null): number;

        // Own virtual methods of Gee-0.8.Comparable

        vfunc_compare_to(object?: any | null): number;
    }

    interface Deque {
        // Owm methods of Gee-0.8.Deque

        offer_head(element?: any | null): boolean;
        peek_head(): any | null;
        poll_head(): any | null;
        drain_head(recipient: Collection, amount: number): number;
        offer_tail(element?: any | null): boolean;
        peek_tail(): any | null;
        poll_tail(): any | null;
        drain_tail(recipient: Collection, amount: number): number;

        // Own virtual methods of Gee-0.8.Deque

        vfunc_offer_head(element?: any | null): boolean;
        vfunc_peek_head(): any | null;
        vfunc_poll_head(): any | null;
        vfunc_drain_head(recipient: Collection, amount: number): number;
        vfunc_offer_tail(element?: any | null): boolean;
        vfunc_peek_tail(): any | null;
        vfunc_poll_tail(): any | null;
        vfunc_drain_tail(recipient: Collection, amount: number): number;
    }

    interface Future {
        // Own properties of Gee-0.8.Future

        readonly ready: boolean;
        readonly exception: GLib.Error;

        // Owm methods of Gee-0.8.Future

        wait(): any | null;
        wait_until(end_time: number): boolean;
        wait_async(_callback_?: Gio.AsyncReadyCallback<this> | null): void;
        wait_finish(_res_: Gio.AsyncResult): any | null;
        map(a_type: GObject.GType, a_dup_func: GObject.BoxedCopyFunc, func: FutureMapFunc): Future;
        light_map(a_type: GObject.GType, a_dup_func: GObject.BoxedCopyFunc, func: FutureLightMapFunc): Future;
        light_map_broken(a_type: GObject.GType, a_dup_func: GObject.BoxedCopyFunc, func: FutureLightMapFunc): Future;
        zip(
            a_type: GObject.GType,
            a_dup_func: GObject.BoxedCopyFunc,
            b_type: GObject.GType,
            b_dup_func: GObject.BoxedCopyFunc,
            zip_func: FutureZipFunc,
            second: Future,
        ): Future;
        flat_map(a_type: GObject.GType, a_dup_func: GObject.BoxedCopyFunc, func: FutureFlatMapFunc): Future;
        get_value(): any | null;
        get_ready(): boolean;
        get_exception(): GLib.Error | null;

        // Own virtual methods of Gee-0.8.Future

        vfunc_wait(): any | null;
        vfunc_wait_until(end_time: number): boolean;
        vfunc_wait_async(_callback_?: Gio.AsyncReadyCallback<this> | null): void;
        vfunc_wait_finish(_res_: Gio.AsyncResult): any | null;
        vfunc_map(a_type: GObject.GType, a_dup_func: GObject.BoxedCopyFunc, func: FutureMapFunc): Future;
        vfunc_light_map(a_type: GObject.GType, a_dup_func: GObject.BoxedCopyFunc, func: FutureLightMapFunc): Future;
        vfunc_light_map_broken(
            a_type: GObject.GType,
            a_dup_func: GObject.BoxedCopyFunc,
            func: FutureLightMapFunc,
        ): Future;
        vfunc_zip(
            a_type: GObject.GType,
            a_dup_func: GObject.BoxedCopyFunc,
            b_type: GObject.GType,
            b_dup_func: GObject.BoxedCopyFunc,
            zip_func: FutureZipFunc,
            second: Future,
        ): Future;
        vfunc_flat_map(a_type: GObject.GType, a_dup_func: GObject.BoxedCopyFunc, func: FutureFlatMapFunc): Future;
        vfunc_get_value(): any | null;
        vfunc_get_ready(): boolean;
        vfunc_get_exception(): GLib.Error | null;
    }

    interface Hashable {
        // Owm methods of Gee-0.8.Hashable

        hash(): number;
        equal_to(object?: any | null): boolean;

        // Own virtual methods of Gee-0.8.Hashable

        vfunc_hash(): number;
        vfunc_equal_to(object?: any | null): boolean;
    }

    interface Iterable {
        // Owm methods of Gee-0.8.Iterable

        iterator(): Iterator;

        // Own virtual methods of Gee-0.8.Iterable

        vfunc_iterator(): Iterator;
    }

    interface Iterator {
        // Own properties of Gee-0.8.Iterator

        readonly valid: boolean;
        readonly read_only: boolean;
        readonly readOnly: boolean;

        // Owm methods of Gee-0.8.Iterator

        next(): boolean;
        has_next(): boolean;
        get(): any | null;
        remove(): void;
        get_valid(): boolean;
        get_read_only(): boolean;

        // Own virtual methods of Gee-0.8.Iterator

        vfunc_next(): boolean;
        vfunc_has_next(): boolean;
        vfunc_get(): any | null;
        vfunc_remove(): void;
        vfunc_get_valid(): boolean;
        vfunc_get_read_only(): boolean;
    }

    interface List {
        // Own properties of Gee-0.8.List

        readonly read_only_view: List;
        readonly readOnlyView: List;

        // Owm methods of Gee-0.8.List

        list_iterator(): ListIterator;
        get(index: number): any | null;
        set(index: number, item?: any | null): void;
        index_of(item?: any | null): number;
        insert(index: number, item?: any | null): void;
        remove_at(index: number): any | null;
        slice(start: number, stop: number): List | null;
        first(): any | null;
        last(): any | null;
        insert_all(index: number, collection: Collection): void;
        sort(compare_func?: GLib.CompareDataFunc | null): void;
        get_read_only_view(): List;

        // Own virtual methods of Gee-0.8.List

        vfunc_list_iterator(): ListIterator;
        vfunc_get(index: number): any | null;
        vfunc_set(index: number, item?: any | null): void;
        vfunc_index_of(item?: any | null): number;
        vfunc_insert(index: number, item?: any | null): void;
        vfunc_remove_at(index: number): any | null;
        vfunc_slice(start: number, stop: number): List | null;
        vfunc_first(): any | null;
        vfunc_last(): any | null;
        vfunc_insert_all(index: number, collection: Collection): void;
        vfunc_sort(compare_func?: GLib.CompareDataFunc | null): void;
        vfunc_get_read_only_view(): List;
    }

    interface ListIterator {
        // Owm methods of Gee-0.8.ListIterator

        set(item?: any | null): void;
        add(item?: any | null): void;
        index(): number;

        // Own virtual methods of Gee-0.8.ListIterator

        vfunc_set(item?: any | null): void;
        vfunc_add(item?: any | null): void;
        vfunc_index(): number;
    }

    interface Map {
        // Own properties of Gee-0.8.Map

        readonly size: number;
        readonly read_only: boolean;
        readonly readOnly: boolean;
        readonly keys: Set;
        readonly values: Collection;
        readonly entries: Set;
        readonly read_only_view: Map;
        readonly readOnlyView: Map;

        // Owm methods of Gee-0.8.Map

        has_key(key?: any | null): boolean;
        contains(key?: any | null): boolean;
        has(key?: any | null, value?: any | null): boolean;
        get(key?: any | null): any | null;
        set(key?: any | null, value?: any | null): void;
        unset(key: any | null): boolean;
        remove(key: any | null): boolean;
        clear(): void;
        map_iterator(): MapIterator;
        set_all(map: Map): void;
        unset_all(map: Map): boolean;
        remove_all(map: Map): boolean;
        has_all(map: Map): boolean;
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

        // Own virtual methods of Gee-0.8.Map

        vfunc_has_key(key?: any | null): boolean;
        vfunc_has(key?: any | null, value?: any | null): boolean;
        vfunc_get(key?: any | null): any | null;
        vfunc_set(key?: any | null, value?: any | null): void;
        vfunc_unset(key: any | null): boolean;
        vfunc_clear(): void;
        vfunc_map_iterator(): MapIterator;
        vfunc_set_all(map: Map): void;
        vfunc_unset_all(map: Map): boolean;
        vfunc_has_all(map: Map): boolean;
        vfunc_get_size(): number;
        vfunc_get_is_empty(): boolean;
        vfunc_get_read_only(): boolean;
        vfunc_get_keys(): Set;
        vfunc_get_values(): Collection;
        vfunc_get_entries(): Set;
        vfunc_get_read_only_view(): Map;
    }

    interface MapIterator {
        // Own properties of Gee-0.8.MapIterator

        readonly valid: boolean;
        readonly mutable: boolean;
        readonly read_only: boolean;
        readonly readOnly: boolean;

        // Owm methods of Gee-0.8.MapIterator

        next(): boolean;
        has_next(): boolean;
        get_key(): any | null;
        get_value(): any | null;
        set_value(value?: any | null): void;
        unset(): void;
        fold(a_type: GObject.GType, a_dup_func: GObject.BoxedCopyFunc, f: FoldMapFunc, seed?: any | null): any | null;
        foreach(f: ForallMapFunc): boolean;
        get_valid(): boolean;
        get_mutable(): boolean;
        get_read_only(): boolean;

        // Own virtual methods of Gee-0.8.MapIterator

        vfunc_next(): boolean;
        vfunc_has_next(): boolean;
        vfunc_get_key(): any | null;
        vfunc_get_value(): any | null;
        vfunc_set_value(value?: any | null): void;
        vfunc_unset(): void;
        vfunc_fold(
            a_type: GObject.GType,
            a_dup_func: GObject.BoxedCopyFunc,
            f: FoldMapFunc,
            seed?: any | null,
        ): any | null;
        vfunc_foreach(f: ForallMapFunc): boolean;
        vfunc_get_valid(): boolean;
        vfunc_get_mutable(): boolean;
        vfunc_get_read_only(): boolean;
    }

    interface MultiMap {
        // Own properties of Gee-0.8.MultiMap

        readonly size: number;
        readonly read_only: boolean;
        readonly readOnly: boolean;

        // Owm methods of Gee-0.8.MultiMap

        get_keys(): Set;
        get_all_keys(): MultiSet;
        get_values(): Collection;
        contains(key?: any | null): boolean;
        get(key?: any | null): Collection;
        set(key?: any | null, value?: any | null): void;
        remove(key?: any | null, value?: any | null): boolean;
        remove_all(key?: any | null): boolean;
        clear(): void;
        map_iterator(): MapIterator;
        get_size(): number;
        get_read_only(): boolean;
        get_key_type(): GObject.GType;
        get_value_type(): GObject.GType;
        get_read_only_view(): MultiMap;

        // Own virtual methods of Gee-0.8.MultiMap

        vfunc_get_keys(): Set;
        vfunc_get_all_keys(): MultiSet;
        vfunc_get_values(): Collection;
        vfunc_contains(key?: any | null): boolean;
        vfunc_get(key?: any | null): Collection;
        vfunc_set(key?: any | null, value?: any | null): void;
        vfunc_remove(key?: any | null, value?: any | null): boolean;
        vfunc_remove_all(key?: any | null): boolean;
        vfunc_clear(): void;
        vfunc_map_iterator(): MapIterator;
        vfunc_get_size(): number;
        vfunc_get_read_only(): boolean;
        vfunc_get_read_only_view(): MultiMap;
    }

    interface MultiSet {
        // Owm methods of Gee-0.8.MultiSet

        count(item?: any | null): number;
        get_read_only_view(): MultiSet;

        // Own virtual methods of Gee-0.8.MultiSet

        vfunc_count(item?: any | null): number;
        vfunc_get_read_only_view(): MultiSet;
    }

    interface Queue {
        // Own properties of Gee-0.8.Queue

        readonly capacity: number;
        readonly remaining_capacity: number;
        readonly remainingCapacity: number;
        readonly is_full: boolean;
        readonly isFull: boolean;

        // Owm methods of Gee-0.8.Queue

        offer(element?: any | null): boolean;
        peek(): any | null;
        poll(): any | null;
        drain(recipient: Collection, amount: number): number;
        get_capacity(): number;
        get_remaining_capacity(): number;
        get_is_full(): boolean;

        // Own virtual methods of Gee-0.8.Queue

        vfunc_offer(element?: any | null): boolean;
        vfunc_peek(): any | null;
        vfunc_poll(): any | null;
        vfunc_drain(recipient: Collection, amount: number): number;
        vfunc_get_capacity(): number;
        vfunc_get_remaining_capacity(): number;
        vfunc_get_is_full(): boolean;
    }

    interface Set {
        // Own properties of Gee-0.8.Set

        readonly read_only_view: Set;
        readonly readOnlyView: Set;

        // Owm methods of Gee-0.8.Set

        get_read_only_view(): Set;

        // Own virtual methods of Gee-0.8.Set

        vfunc_get_read_only_view(): Set;
    }

    interface SortedMap {
        // Own properties of Gee-0.8.SortedMap

        readonly ascending_keys: SortedSet;
        readonly ascendingKeys: SortedSet;
        readonly ascending_entries: SortedSet;
        readonly ascendingEntries: SortedSet;
        readonly read_only_view: SortedMap;
        readonly readOnlyView: SortedMap;

        // Owm methods of Gee-0.8.SortedMap

        head_map(before?: any | null): SortedMap;
        tail_map(after?: any | null): SortedMap;
        sub_map(before?: any | null, after?: any | null): SortedMap;
        get_ascending_keys(): SortedSet;
        get_ascending_entries(): SortedSet;
        get_read_only_view(): SortedMap;

        // Own virtual methods of Gee-0.8.SortedMap

        vfunc_head_map(before?: any | null): SortedMap;
        vfunc_tail_map(after?: any | null): SortedMap;
        vfunc_sub_map(before?: any | null, after?: any | null): SortedMap;
        vfunc_get_ascending_keys(): SortedSet;
        vfunc_get_ascending_entries(): SortedSet;
        vfunc_get_read_only_view(): SortedMap;
    }

    interface SortedSet {
        // Own properties of Gee-0.8.SortedSet

        readonly read_only_view: SortedSet;
        readonly readOnlyView: SortedSet;

        // Owm methods of Gee-0.8.SortedSet

        first(): any | null;
        last(): any | null;
        iterator_at(element?: any | null): Iterator | null;
        lower(element?: any | null): any | null;
        higher(element?: any | null): any | null;
        floor(element?: any | null): any | null;
        ceil(element?: any | null): any | null;
        head_set(before?: any | null): SortedSet;
        tail_set(after?: any | null): SortedSet;
        sub_set(from?: any | null, to?: any | null): SortedSet;
        get_read_only_view(): SortedSet;

        // Own virtual methods of Gee-0.8.SortedSet

        vfunc_first(): any | null;
        vfunc_last(): any | null;
        vfunc_iterator_at(element?: any | null): Iterator | null;
        vfunc_lower(element?: any | null): any | null;
        vfunc_higher(element?: any | null): any | null;
        vfunc_floor(element?: any | null): any | null;
        vfunc_ceil(element?: any | null): any | null;
        vfunc_head_set(before?: any | null): SortedSet;
        vfunc_tail_set(after?: any | null): SortedSet;
        vfunc_sub_set(from?: any | null, to?: any | null): SortedSet;
        vfunc_get_read_only_view(): SortedSet;
    }

    interface Traversable {
        // Owm methods of Gee-0.8.Traversable

        foreach(f: ForallFunc): boolean;
        stream(a_type: GObject.GType, a_dup_func: GObject.BoxedCopyFunc, f: StreamFunc): Iterator;
        fold(a_type: GObject.GType, a_dup_func: GObject.BoxedCopyFunc, f: FoldFunc, seed?: any | null): any | null;
        map(a_type: GObject.GType, a_dup_func: GObject.BoxedCopyFunc, f: MapFunc): Iterator;
        scan(a_type: GObject.GType, a_dup_func: GObject.BoxedCopyFunc, f: FoldFunc, seed?: any | null): Iterator;
        filter(pred: Predicate): Iterator;
        chop(offset: number, length: number): Iterator;
        flat_map(a_type: GObject.GType, a_dup_func: GObject.BoxedCopyFunc, f: FlatMapFunc): Iterator;
        tee(forks: number): Iterator[];
        first_match(pred: Predicate): any | null;
        any_match(pred: Predicate): boolean;
        all_match(pred: Predicate): boolean;
        max(compare: GLib.CompareDataFunc): any | null;
        min(compare: GLib.CompareDataFunc): any | null;
        order_by(compare?: GLib.CompareDataFunc | null): Iterator;
        get_element_type(): GObject.GType;

        // Own virtual methods of Gee-0.8.Traversable

        vfunc_foreach(f: ForallFunc): boolean;
        vfunc_stream(a_type: GObject.GType, a_dup_func: GObject.BoxedCopyFunc, f: StreamFunc): Iterator;
        vfunc_fold(
            a_type: GObject.GType,
            a_dup_func: GObject.BoxedCopyFunc,
            f: FoldFunc,
            seed?: any | null,
        ): any | null;
        vfunc_map(a_type: GObject.GType, a_dup_func: GObject.BoxedCopyFunc, f: MapFunc): Iterator;
        vfunc_scan(a_type: GObject.GType, a_dup_func: GObject.BoxedCopyFunc, f: FoldFunc, seed?: any | null): Iterator;
        vfunc_filter(pred: Predicate): Iterator;
        vfunc_chop(offset: number, length: number): Iterator;
        vfunc_flat_map(a_type: GObject.GType, a_dup_func: GObject.BoxedCopyFunc, f: FlatMapFunc): Iterator;
        vfunc_tee(forks: number): Iterator[];
        vfunc_first_match(pred: Predicate): any | null;
        vfunc_any_match(pred: Predicate): boolean;
        vfunc_all_match(pred: Predicate): boolean;
        vfunc_max(compare: GLib.CompareDataFunc): any | null;
        vfunc_min(compare: GLib.CompareDataFunc): any | null;
        vfunc_order_by(compare?: GLib.CompareDataFunc | null): Iterator;
        vfunc_get_element_type(): GObject.GType;
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

export default Gee;
// END
