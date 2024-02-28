/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './gee-1.0-ambient.d.ts';
import './gee-1.0-import.d.ts';
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
    }

    abstract class AbstractCollection extends GObject.Object {
        // Own properties of Gee-1.0.AbstractCollection

        readonly size: number;
        readonly is_empty: boolean;
        readonly isEmpty: boolean;
        readonly read_only_view: Collection;
        readonly readOnlyView: Collection;

        // Owm methods of Gee-1.0.AbstractCollection

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
    }

    module AbstractList {
        // Constructor properties interface
    }

    abstract class AbstractList extends AbstractCollection {
        // Own properties of Gee-1.0.AbstractList

        readonly read_only_view: List;
        readonly readOnlyView: List;

        // Owm methods of Gee-1.0.AbstractList

        list_iterator(): ListIterator;
        get(index: number): any;
        set(index: number, item: any): void;
        index_of(item: any): number;
        insert(index: number, item: any): void;
        remove_at(index: number): any;
        slice(start: number, stop: number): List;
        first(): any;
        last(): any;
        insert_all(index: number, collection: Collection): void;
    }

    module AbstractMap {
        // Constructor properties interface
    }

    abstract class AbstractMap extends GObject.Object {
        // Own properties of Gee-1.0.AbstractMap

        readonly size: number;
        readonly is_empty: boolean;
        readonly isEmpty: boolean;
        readonly keys: Set;
        readonly values: Collection;
        readonly entries: Set;
        readonly read_only_view: Map;
        readonly readOnlyView: Map;

        // Owm methods of Gee-1.0.AbstractMap

        has_key(key: any): boolean;
        has(key: any, value: any): boolean;
        get(key: any): any;
        set(key: any, value: any): void;
        unset(key: any): boolean;
        map_iterator(): MapIterator;
        clear(): void;
        set_all(map: Map): void;
        unset_all(map: Map): boolean;
        has_all(map: Map): boolean;
    }

    module AbstractMultiMap {
        // Constructor properties interface
    }

    abstract class AbstractMultiMap extends GObject.Object {
        // Owm methods of Gee-1.0.AbstractMultiMap

        create_value_storage(): Collection;
        create_multi_key_set(): MultiSet;
        get_value_equal_func(): GLib.EqualFunc;
    }

    module AbstractMultiSet {
        // Constructor properties interface
    }

    abstract class AbstractMultiSet extends AbstractCollection {}

    module AbstractQueue {
        // Constructor properties interface
    }

    abstract class AbstractQueue extends AbstractCollection {
        // Own properties of Gee-1.0.AbstractQueue

        readonly capacity: number;
        readonly remaining_capacity: number;
        readonly remainingCapacity: number;
        readonly is_full: boolean;
        readonly isFull: boolean;

        // Owm methods of Gee-1.0.AbstractQueue

        offer(element: any): boolean;
        peek(): any;
        poll(): any;
        drain(recipient: Collection, amount: number): number;
    }

    module AbstractSet {
        // Constructor properties interface
    }

    abstract class AbstractSet extends AbstractCollection {
        // Own properties of Gee-1.0.AbstractSet

        readonly read_only_view: Set;
        readonly readOnlyView: Set;
    }

    module ArrayList {
        // Constructor properties interface
    }

    class ArrayList extends AbstractList {
        // Own properties of Gee-1.0.ArrayList

        equal_func: GLib.EqualFunc;
        equalFunc: GLib.EqualFunc;

        // Constructors of Gee-1.0.ArrayList

        static ['new'](equal_func: GLib.EqualFunc): ArrayList;

        // Owm methods of Gee-1.0.ArrayList

        sort_with_data(compare: GLib.CompareDataFunc): void;
    }

    module HashMap {
        // Constructor properties interface
    }

    class HashMap extends AbstractMap {
        // Own properties of Gee-1.0.HashMap

        key_hash_func: GLib.HashFunc;
        keyHashFunc: GLib.HashFunc;
        key_equal_func: GLib.EqualFunc;
        keyEqualFunc: GLib.EqualFunc;
        value_equal_func: GLib.EqualFunc;
        valueEqualFunc: GLib.EqualFunc;

        // Constructors of Gee-1.0.HashMap

        static ['new'](
            key_hash_func: GLib.HashFunc,
            key_equal_func: GLib.EqualFunc,
            value_equal_func: GLib.EqualFunc,
        ): HashMap;
    }

    module HashMultiMap {
        // Constructor properties interface
    }

    class HashMultiMap extends AbstractMultiMap {
        // Own properties of Gee-1.0.HashMultiMap

        readonly key_hash_func: GLib.HashFunc;
        readonly keyHashFunc: GLib.HashFunc;
        readonly key_equal_func: GLib.EqualFunc;
        readonly keyEqualFunc: GLib.EqualFunc;
        value_hash_func: GLib.HashFunc;
        valueHashFunc: GLib.HashFunc;
        value_equal_func: GLib.EqualFunc;
        valueEqualFunc: GLib.EqualFunc;

        // Constructors of Gee-1.0.HashMultiMap

        static ['new'](
            key_hash_func: GLib.HashFunc,
            key_equal_func: GLib.EqualFunc,
            value_hash_func: GLib.HashFunc,
            value_equal_func: GLib.EqualFunc,
        ): HashMultiMap;
    }

    module HashMultiSet {
        // Constructor properties interface
    }

    class HashMultiSet extends AbstractMultiSet {
        // Own properties of Gee-1.0.HashMultiSet

        readonly hash_func: GLib.HashFunc;
        readonly hashFunc: GLib.HashFunc;
        readonly equal_func: GLib.EqualFunc;
        readonly equalFunc: GLib.EqualFunc;

        // Constructors of Gee-1.0.HashMultiSet

        static ['new'](hash_func: GLib.HashFunc, equal_func: GLib.EqualFunc): HashMultiSet;
    }

    module HashSet {
        // Constructor properties interface
    }

    class HashSet extends AbstractSet {
        // Own properties of Gee-1.0.HashSet

        hash_func: GLib.HashFunc;
        hashFunc: GLib.HashFunc;
        equal_func: GLib.EqualFunc;
        equalFunc: GLib.EqualFunc;

        // Constructors of Gee-1.0.HashSet

        static ['new'](hash_func: GLib.HashFunc, equal_func: GLib.EqualFunc): HashSet;
    }

    module LinkedList {
        // Constructor properties interface
    }

    class LinkedList extends AbstractList {
        // Own properties of Gee-1.0.LinkedList

        equal_func: GLib.EqualFunc;
        equalFunc: GLib.EqualFunc;

        // Constructors of Gee-1.0.LinkedList

        static ['new'](equal_func: GLib.EqualFunc): LinkedList;
    }

    module PriorityQueue {
        // Constructor properties interface
    }

    class PriorityQueue extends AbstractQueue {
        // Own properties of Gee-1.0.PriorityQueue

        compare_func: GLib.CompareFunc;
        compareFunc: GLib.CompareFunc;

        // Constructors of Gee-1.0.PriorityQueue

        static ['new'](compare_func: GLib.CompareFunc): PriorityQueue;
    }

    module TreeMap {
        // Constructor properties interface
    }

    class TreeMap extends AbstractMap {
        // Own properties of Gee-1.0.TreeMap

        key_compare_func: GLib.CompareFunc;
        keyCompareFunc: GLib.CompareFunc;
        value_equal_func: GLib.EqualFunc;
        valueEqualFunc: GLib.EqualFunc;

        // Constructors of Gee-1.0.TreeMap

        static ['new'](key_compare_func: GLib.CompareFunc, value_equal_func: GLib.EqualFunc): TreeMap;
    }

    module TreeMultiMap {
        // Constructor properties interface
    }

    class TreeMultiMap extends AbstractMultiMap {
        // Own properties of Gee-1.0.TreeMultiMap

        readonly key_compare_func: GLib.CompareFunc;
        readonly keyCompareFunc: GLib.CompareFunc;
        value_compare_func: GLib.CompareFunc;
        valueCompareFunc: GLib.CompareFunc;

        // Constructors of Gee-1.0.TreeMultiMap

        static ['new'](key_compare_func: GLib.CompareFunc, value_compare_func: GLib.CompareFunc): TreeMultiMap;
    }

    module TreeMultiSet {
        // Constructor properties interface
    }

    class TreeMultiSet extends AbstractMultiSet {
        // Own properties of Gee-1.0.TreeMultiSet

        readonly compare_func: GLib.CompareFunc;
        readonly compareFunc: GLib.CompareFunc;

        // Constructors of Gee-1.0.TreeMultiSet

        static ['new'](compare_func: GLib.CompareFunc): TreeMultiSet;
    }

    module TreeSet {
        // Constructor properties interface
    }

    class TreeSet extends AbstractSet {
        // Own properties of Gee-1.0.TreeSet

        compare_func: GLib.CompareFunc;
        compareFunc: GLib.CompareFunc;

        // Constructors of Gee-1.0.TreeSet

        static ['new'](compare_func: GLib.CompareFunc): TreeSet;
    }

    module MapEntry {
        // Constructor properties interface
    }

    abstract class MapEntry extends GObject.Object {
        // Own properties of Gee-1.0.MapEntry

        readonly key: any;
        value: any;
    }

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

    class ArrayListClass {}

    class ArrayListPrivate {}

    class HashMapClass {}

    class HashMapPrivate {}

    class HashMultiMapClass {}

    class HashMultiMapPrivate {}

    class HashMultiSetClass {}

    class HashMultiSetPrivate {}

    class HashSetClass {}

    class HashSetPrivate {}

    class LinkedListClass {}

    class LinkedListPrivate {}

    class PriorityQueueClass {}

    class PriorityQueuePrivate {}

    class TreeMapClass {}

    class TreeMapPrivate {}

    class TreeMultiMapClass {}

    class TreeMultiMapPrivate {}

    class TreeMultiSetClass {}

    class TreeMultiSetPrivate {}

    class TreeSetClass {}

    class TreeSetPrivate {}

    class BidirIteratorIface {}

    class CollectionIface {}

    class ComparableIface {}

    class DequeIface {}

    class IterableIface {}

    class IteratorIface {}

    class ListIface {}

    class ListIteratorIface {}

    class MapIface {}

    class MapEntryClass {}

    class EntryPrivate {}

    class MapIteratorIface {}

    class MultiMapIface {}

    class MultiSetIface {}

    class QueueIface {}

    class SetIface {}

    class SortedSetIface {}

    interface BidirIterator {
        // Owm methods of Gee-1.0.BidirIterator

        previous(): boolean;
        has_previous(): boolean;
        last(): boolean;

        // Own virtual methods of Gee-1.0.BidirIterator

        vfunc_previous(): boolean;
        vfunc_has_previous(): boolean;
        vfunc_last(): boolean;
    }

    interface Collection {
        // Own properties of Gee-1.0.Collection

        readonly size: number;
        readonly is_empty: boolean;
        readonly isEmpty: boolean;
        readonly read_only_view: Collection;
        readonly readOnlyView: Collection;

        // Owm methods of Gee-1.0.Collection

        contains(item: any): boolean;
        add(item: any): boolean;
        remove(item: any): boolean;
        clear(): void;
        add_all(collection: Collection): boolean;
        contains_all(collection: Collection): boolean;
        remove_all(collection: Collection): boolean;
        retain_all(collection: Collection): boolean;
        to_array(): any[];

        // Own virtual methods of Gee-1.0.Collection

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

    interface Comparable {
        // Owm methods of Gee-1.0.Comparable

        compare_to(object: any): number;

        // Own virtual methods of Gee-1.0.Comparable

        vfunc_compare_to(object: any): number;
    }

    interface Deque {
        // Owm methods of Gee-1.0.Deque

        offer_head(element: any): boolean;
        peek_head(): any;
        poll_head(): any;
        drain_head(recipient: Collection, amount: number): number;
        offer_tail(element: any): boolean;
        peek_tail(): any;
        poll_tail(): any;
        drain_tail(recipient: Collection, amount: number): number;

        // Own virtual methods of Gee-1.0.Deque

        vfunc_offer_head(element: any): boolean;
        vfunc_peek_head(): any;
        vfunc_poll_head(): any;
        vfunc_drain_head(recipient: Collection, amount: number): number;
        vfunc_offer_tail(element: any): boolean;
        vfunc_peek_tail(): any;
        vfunc_poll_tail(): any;
        vfunc_drain_tail(recipient: Collection, amount: number): number;
    }

    interface Iterable {
        // Own properties of Gee-1.0.Iterable

        readonly element_type: GObject.Type;
        readonly elementType: GObject.Type;

        // Owm methods of Gee-1.0.Iterable

        iterator(): Iterator;

        // Own virtual methods of Gee-1.0.Iterable

        vfunc_iterator(): Iterator;
    }

    interface Iterator {
        // Owm methods of Gee-1.0.Iterator

        next(): boolean;
        has_next(): boolean;
        first(): boolean;
        get(): any;
        remove(): void;

        // Own virtual methods of Gee-1.0.Iterator

        vfunc_next(): boolean;
        vfunc_has_next(): boolean;
        vfunc_first(): boolean;
        vfunc_get(): any;
        vfunc_remove(): void;
    }

    interface List {
        // Own properties of Gee-1.0.List

        readonly read_only_view: List;
        readonly readOnlyView: List;

        // Owm methods of Gee-1.0.List

        list_iterator(): ListIterator;
        get(index: number): any;
        set(index: number, item: any): void;
        index_of(item: any): number;
        insert(index: number, item: any): void;
        remove_at(index: number): any;
        slice(start: number, stop: number): List;
        first(): any;
        last(): any;
        insert_all(index: number, collection: Collection): void;
        sort(compare_func: GLib.CompareFunc): void;

        // Own virtual methods of Gee-1.0.List

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

    interface ListIterator {
        // Owm methods of Gee-1.0.ListIterator

        set(item: any): void;
        insert(item: any): void;
        add(item: any): void;
        index(): number;

        // Own virtual methods of Gee-1.0.ListIterator

        vfunc_set(item: any): void;
        vfunc_insert(item: any): void;
        vfunc_add(item: any): void;
        vfunc_index(): number;
    }

    interface Map {
        // Own properties of Gee-1.0.Map

        readonly size: number;
        readonly is_empty: boolean;
        readonly isEmpty: boolean;
        readonly keys: Set;
        readonly values: Collection;
        readonly entries: Set;
        readonly read_only_view: Map;
        readonly readOnlyView: Map;
        readonly key_type: GObject.Type;
        readonly keyType: GObject.Type;
        readonly value_type: GObject.Type;
        readonly valueType: GObject.Type;

        // Owm methods of Gee-1.0.Map

        has_key(key: any): boolean;
        contains(key: any): boolean;
        has(key: any, value: any): boolean;
        get(key: any): any;
        set(key: any, value: any): void;
        unset(key: any): boolean;
        remove(key: any): boolean;
        clear(): void;
        map_iterator(): MapIterator;
        set_all(map: Map): void;
        unset_all(map: Map): boolean;
        remove_all(map: Map): boolean;
        has_all(map: Map): boolean;
        contains_all(map: Map): boolean;

        // Own virtual methods of Gee-1.0.Map

        vfunc_has_key(key: any): boolean;
        vfunc_contains(key: any): boolean;
        vfunc_has(key: any, value: any): boolean;
        vfunc_get(key: any): any;
        vfunc_set(key: any, value: any): void;
        vfunc_unset(key: any): boolean;
        vfunc_remove(key: any): boolean;
        vfunc_clear(): void;
        vfunc_map_iterator(): MapIterator;
        vfunc_set_all(map: Map): void;
        vfunc_unset_all(map: Map): boolean;
        vfunc_remove_all(map: Map): boolean;
        vfunc_has_all(map: Map): boolean;
        vfunc_contains_all(map: Map): boolean;
    }

    interface MapIterator {
        // Owm methods of Gee-1.0.MapIterator

        next(): boolean;
        has_next(): boolean;
        first(): boolean;
        get_key(): any;
        get_value(): any;
        set_value(value: any): void;
        unset(): void;

        // Own virtual methods of Gee-1.0.MapIterator

        vfunc_next(): boolean;
        vfunc_has_next(): boolean;
        vfunc_first(): boolean;
        vfunc_get_key(): any;
        vfunc_get_value(): any;
        vfunc_set_value(value: any): void;
        vfunc_unset(): void;
    }

    interface MultiMap {
        // Own properties of Gee-1.0.MultiMap

        readonly size: number;

        // Owm methods of Gee-1.0.MultiMap

        get_keys(): Set;
        get_all_keys(): MultiSet;
        get_values(): Collection;
        contains(key: any): boolean;
        get(key: any): Collection;
        set(key: any, value: any): void;
        remove(key: any, value: any): boolean;
        remove_all(key: any): boolean;
        clear(): void;

        // Own virtual methods of Gee-1.0.MultiMap

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

    interface MultiSet {
        // Owm methods of Gee-1.0.MultiSet

        count(item: any): number;

        // Own virtual methods of Gee-1.0.MultiSet

        vfunc_count(item: any): number;
    }

    interface Queue {
        // Own properties of Gee-1.0.Queue

        readonly capacity: number;
        readonly remaining_capacity: number;
        readonly remainingCapacity: number;
        readonly is_full: boolean;
        readonly isFull: boolean;

        // Owm methods of Gee-1.0.Queue

        offer(element: any): boolean;
        peek(): any;
        poll(): any;
        drain(recipient: Collection, amount: number): number;

        // Own virtual methods of Gee-1.0.Queue

        vfunc_offer(element: any): boolean;
        vfunc_peek(): any;
        vfunc_poll(): any;
        vfunc_drain(recipient: Collection, amount: number): number;
    }

    interface Set {
        // Own properties of Gee-1.0.Set

        readonly read_only_view: Set;
        readonly readOnlyView: Set;
    }

    interface SortedSet {
        // Owm methods of Gee-1.0.SortedSet

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

        // Own virtual methods of Gee-1.0.SortedSet

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
