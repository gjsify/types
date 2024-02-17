
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

export namespace Gee {

enum FutureError {
    ABANDON_PROMISE,
    EXCEPTION,
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
function functions_get_equal_func_for(t: GObject.GType): [ /* returnType */ EqualDataFunc, /* result_target */ any, /* result_target_destroy_notify */ GLib.DestroyNotify ]
function functions_get_hash_func_for(t: GObject.GType): [ /* returnType */ HashDataFunc, /* result_target */ any, /* result_target_destroy_notify */ GLib.DestroyNotify ]
function functions_get_compare_func_for(t: GObject.GType): [ /* returnType */ GLib.CompareDataFunc, /* result_target */ any, /* result_target_destroy_notify */ GLib.DestroyNotify ]
function hazard_pointer_policy_is_concrete(): boolean
function hazard_pointer_policy_is_blocking(): boolean
function hazard_pointer_policy_is_safe(): boolean
function hazard_pointer_policy_to_concrete(): HazardPointerPolicy
function task(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, task: Task): Future
function async_task<Z = unknown>(_callback_: Gio.AsyncReadyCallback<Z> | null): void
function async_task_finish(_res_: Gio.AsyncResult): void
interface HashDataFunc {
    (t_type: GObject.GType, t_dup_func: GObject.BoxedCopyFunc, t_destroy_func: GLib.DestroyNotify, v: any): number
}
interface EqualDataFunc {
    (t_type: GObject.GType, t_dup_func: GObject.BoxedCopyFunc, t_destroy_func: GLib.DestroyNotify, a: any, b: any): boolean
}
interface LazyFunc {
    (g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify): any
}
interface FoldMapFunc {
    (a_type: GObject.GType, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, k_type: GObject.GType, k_dup_func: GObject.BoxedCopyFunc, k_destroy_func: GLib.DestroyNotify, v_type: GObject.GType, v_dup_func: GObject.BoxedCopyFunc, v_destroy_func: GLib.DestroyNotify, k: any, v: any, a: any): any
}
interface ForallMapFunc {
    (k_type: GObject.GType, k_dup_func: GObject.BoxedCopyFunc, k_destroy_func: GLib.DestroyNotify, v_type: GObject.GType, v_dup_func: GObject.BoxedCopyFunc, v_destroy_func: GLib.DestroyNotify, k: any, v: any): boolean
}
interface Task {
    (g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify): any
}
interface FoldFunc {
    (a_type: GObject.GType, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, g: any, a: any): any
}
interface ForallFunc {
    (g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, g: any): boolean
}
interface UnfoldFunc {
    (a_type: GObject.GType, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify): Lazy | null
}
interface StreamFunc {
    (g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, a_type: GObject.GType, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, state: TraversableStream, g: Lazy | null): TraversableStream
}
interface MapFunc {
    (a_type: GObject.GType, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, g: any): any
}
interface Predicate {
    (g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, g: any): boolean
}
interface FlatMapFunc {
    (a_type: GObject.GType, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, g: any): Iterator
}
module BidirIterator {

    // Constructor properties interface

    interface ConstructorProperties extends Iterator.ConstructorProperties, GObject.Object.ConstructorProperties {
    }

}

interface BidirIterator extends Iterator {

    // Owm methods of Gee-0.8.Gee.BidirIterator

    previous(): boolean
    has_previous(): boolean
    first(): boolean
    last(): boolean

    // Own virtual methods of Gee-0.8.Gee.BidirIterator

    vfunc_previous(): boolean
    vfunc_has_previous(): boolean
    vfunc_first(): boolean
    vfunc_last(): boolean

    // Class property signals of Gee-0.8.Gee.BidirIterator

    connect(sigName: "notify::valid", callback: (($obj: BidirIterator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valid", callback: (($obj: BidirIterator, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::valid", ...args: any[]): void
    connect(sigName: "notify::read-only", callback: (($obj: BidirIterator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only", callback: (($obj: BidirIterator, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class BidirIterator extends GObject.Object {

    // Own properties of Gee-0.8.Gee.BidirIterator

    static name: string
    static $gtype: GObject.GType<BidirIterator>

    // Constructors of Gee-0.8.Gee.BidirIterator

    constructor(config?: BidirIterator.ConstructorProperties) 
    _init(config?: BidirIterator.ConstructorProperties): void
}

module BidirList {

    // Constructor properties interface

    interface ConstructorProperties extends List.ConstructorProperties, GObject.Object.ConstructorProperties {
    }

}

interface BidirList extends List {

    // Own properties of Gee-0.8.Gee.BidirList

    readonly readOnlyView: any

    // Owm methods of Gee-0.8.Gee.BidirList

    bidir_list_iterator(): BidirListIterator
    get_read_only_view(): BidirList

    // Overloads of get_read_only_view

    get_read_only_view(): List
    get_read_only_view(): Collection

    // Own virtual methods of Gee-0.8.Gee.BidirList

    vfunc_bidir_list_iterator(): BidirListIterator
    vfunc_get_read_only_view(): BidirList

    // Overloads of vfunc_get_read_only_view

    vfunc_get_read_only_view(): List
    vfunc_get_read_only_view(): Collection

    // Class property signals of Gee-0.8.Gee.BidirList

    connect(sigName: "notify::read-only-view", callback: (($obj: BidirList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: BidirList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only-view", ...args: any[]): void
    connect(sigName: "notify::size", callback: (($obj: BidirList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: BidirList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::read-only", callback: (($obj: BidirList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only", callback: (($obj: BidirList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class BidirList extends GObject.Object {

    // Own properties of Gee-0.8.Gee.BidirList

    static name: string
    static $gtype: GObject.GType<BidirList>

    // Constructors of Gee-0.8.Gee.BidirList

    constructor(config?: BidirList.ConstructorProperties) 
    _init(config?: BidirList.ConstructorProperties): void

    // Conflicting static methods

    static empty(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify): List

    // Overloads of empty

    static empty(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify): Collection
    static empty(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify): Collection
}

module BidirListIterator {

    // Constructor properties interface

    interface ConstructorProperties extends BidirIterator.ConstructorProperties, ListIterator.ConstructorProperties, GObject.Object.ConstructorProperties {
    }

}

interface BidirListIterator extends BidirIterator, ListIterator {

    // Owm methods of Gee-0.8.Gee.BidirListIterator

    insert(item: any): void

    // Own virtual methods of Gee-0.8.Gee.BidirListIterator

    vfunc_insert(item: any): void

    // Class property signals of Gee-0.8.Gee.BidirListIterator

    connect(sigName: "notify::valid", callback: (($obj: BidirListIterator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valid", callback: (($obj: BidirListIterator, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::valid", ...args: any[]): void
    connect(sigName: "notify::read-only", callback: (($obj: BidirListIterator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only", callback: (($obj: BidirListIterator, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class BidirListIterator extends GObject.Object {

    // Own properties of Gee-0.8.Gee.BidirListIterator

    static name: string
    static $gtype: GObject.GType<BidirListIterator>

    // Constructors of Gee-0.8.Gee.BidirListIterator

    constructor(config?: BidirListIterator.ConstructorProperties) 
    _init(config?: BidirListIterator.ConstructorProperties): void
}

module BidirMapIterator {

    // Constructor properties interface

    interface ConstructorProperties extends MapIterator.ConstructorProperties, GObject.Object.ConstructorProperties {
    }

}

interface BidirMapIterator extends MapIterator {

    // Owm methods of Gee-0.8.Gee.BidirMapIterator

    previous(): boolean
    has_previous(): boolean
    first(): boolean
    last(): boolean

    // Own virtual methods of Gee-0.8.Gee.BidirMapIterator

    vfunc_previous(): boolean
    vfunc_has_previous(): boolean
    vfunc_first(): boolean
    vfunc_last(): boolean

    // Class property signals of Gee-0.8.Gee.BidirMapIterator

    connect(sigName: "notify::valid", callback: (($obj: BidirMapIterator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valid", callback: (($obj: BidirMapIterator, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::valid", ...args: any[]): void
    connect(sigName: "notify::mutable", callback: (($obj: BidirMapIterator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mutable", callback: (($obj: BidirMapIterator, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::mutable", ...args: any[]): void
    connect(sigName: "notify::read-only", callback: (($obj: BidirMapIterator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only", callback: (($obj: BidirMapIterator, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class BidirMapIterator extends GObject.Object {

    // Own properties of Gee-0.8.Gee.BidirMapIterator

    static name: string
    static $gtype: GObject.GType<BidirMapIterator>

    // Constructors of Gee-0.8.Gee.BidirMapIterator

    constructor(config?: BidirMapIterator.ConstructorProperties) 
    _init(config?: BidirMapIterator.ConstructorProperties): void
}

module BidirSortedSet {

    // Constructor properties interface

    interface ConstructorProperties extends SortedSet.ConstructorProperties, GObject.Object.ConstructorProperties {
    }

}

interface BidirSortedSet extends SortedSet {

    // Own properties of Gee-0.8.Gee.BidirSortedSet

    readonly readOnlyView: any

    // Owm methods of Gee-0.8.Gee.BidirSortedSet

    bidir_iterator(): BidirIterator
    get_read_only_view(): BidirSortedSet

    // Overloads of get_read_only_view

    get_read_only_view(): SortedSet
    get_read_only_view(): Set
    get_read_only_view(): Collection

    // Own virtual methods of Gee-0.8.Gee.BidirSortedSet

    vfunc_bidir_iterator(): BidirIterator
    vfunc_get_read_only_view(): BidirSortedSet

    // Overloads of vfunc_get_read_only_view

    vfunc_get_read_only_view(): SortedSet
    vfunc_get_read_only_view(): Set
    vfunc_get_read_only_view(): Collection

    // Class property signals of Gee-0.8.Gee.BidirSortedSet

    connect(sigName: "notify::read-only-view", callback: (($obj: BidirSortedSet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: BidirSortedSet, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only-view", ...args: any[]): void
    connect(sigName: "notify::size", callback: (($obj: BidirSortedSet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: BidirSortedSet, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::read-only", callback: (($obj: BidirSortedSet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only", callback: (($obj: BidirSortedSet, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class BidirSortedSet extends GObject.Object {

    // Own properties of Gee-0.8.Gee.BidirSortedSet

    static name: string
    static $gtype: GObject.GType<BidirSortedSet>

    // Constructors of Gee-0.8.Gee.BidirSortedSet

    constructor(config?: BidirSortedSet.ConstructorProperties) 
    _init(config?: BidirSortedSet.ConstructorProperties): void
    static empty(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify): BidirSortedSet

    // Overloads of empty

    static empty(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify): SortedSet
    static empty(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify): Set
    static empty(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify): Collection
}

module BidirSortedMap {

    // Constructor properties interface

    interface ConstructorProperties extends SortedMap.ConstructorProperties, GObject.Object.ConstructorProperties {
    }

}

interface BidirSortedMap extends SortedMap {

    // Own properties of Gee-0.8.Gee.BidirSortedMap

    readonly readOnlyView: any

    // Owm methods of Gee-0.8.Gee.BidirSortedMap

    bidir_map_iterator(): BidirMapIterator
    get_read_only_view(): BidirSortedMap

    // Overloads of get_read_only_view

    get_read_only_view(): SortedMap
    get_read_only_view(): Map

    // Own virtual methods of Gee-0.8.Gee.BidirSortedMap

    vfunc_bidir_map_iterator(): BidirMapIterator
    vfunc_get_read_only_view(): BidirSortedMap

    // Overloads of vfunc_get_read_only_view

    vfunc_get_read_only_view(): SortedMap
    vfunc_get_read_only_view(): Map

    // Class property signals of Gee-0.8.Gee.BidirSortedMap

    connect(sigName: "notify::read-only-view", callback: (($obj: BidirSortedMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: BidirSortedMap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only-view", ...args: any[]): void
    connect(sigName: "notify::ascending-keys", callback: (($obj: BidirSortedMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ascending-keys", callback: (($obj: BidirSortedMap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::ascending-keys", ...args: any[]): void
    connect(sigName: "notify::ascending-entries", callback: (($obj: BidirSortedMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ascending-entries", callback: (($obj: BidirSortedMap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::ascending-entries", ...args: any[]): void
    connect(sigName: "notify::size", callback: (($obj: BidirSortedMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: BidirSortedMap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::read-only", callback: (($obj: BidirSortedMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only", callback: (($obj: BidirSortedMap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only", ...args: any[]): void
    connect(sigName: "notify::keys", callback: (($obj: BidirSortedMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::keys", callback: (($obj: BidirSortedMap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::keys", ...args: any[]): void
    connect(sigName: "notify::values", callback: (($obj: BidirSortedMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::values", callback: (($obj: BidirSortedMap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::values", ...args: any[]): void
    connect(sigName: "notify::entries", callback: (($obj: BidirSortedMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::entries", callback: (($obj: BidirSortedMap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::entries", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class BidirSortedMap extends GObject.Object {

    // Own properties of Gee-0.8.Gee.BidirSortedMap

    static name: string
    static $gtype: GObject.GType<BidirSortedMap>

    // Constructors of Gee-0.8.Gee.BidirSortedMap

    constructor(config?: BidirSortedMap.ConstructorProperties) 
    _init(config?: BidirSortedMap.ConstructorProperties): void
    static empty(k_type: GObject.GType, k_dup_func: GObject.BoxedCopyFunc, k_destroy_func: GLib.DestroyNotify, v_type: GObject.GType, v_dup_func: GObject.BoxedCopyFunc, v_destroy_func: GLib.DestroyNotify): BidirSortedMap

    // Overloads of empty

    static empty(k_type: GObject.GType, k_dup_func: GObject.BoxedCopyFunc, k_destroy_func: GLib.DestroyNotify, v_type: GObject.GType, v_dup_func: GObject.BoxedCopyFunc, v_destroy_func: GLib.DestroyNotify): Map
}

module Collection {

    // Constructor properties interface

    interface ConstructorProperties extends Iterable.ConstructorProperties, GObject.Object.ConstructorProperties {
    }

}

interface Collection extends Iterable {

    // Own properties of Gee-0.8.Gee.Collection

    readonly size: number
    readonly readOnly: boolean
    readonly readOnlyView: Collection

    // Owm methods of Gee-0.8.Gee.Collection

    contains(item: any): boolean
    add(item: any): boolean
    remove(item: any): boolean
    clear(): void
    add_all(collection: Collection): boolean
    contains_all(collection: Collection): boolean
    remove_all(collection: Collection): boolean
    retain_all(collection: Collection): boolean
    to_array(): any[]
    add_all_array(array: any[]): boolean
    contains_all_array(array: any[]): boolean
    remove_all_array(array: any[]): boolean
    add_all_iterator(iter: Iterator): boolean
    contains_all_iterator(iter: Iterator): boolean
    remove_all_iterator(iter: Iterator): boolean
    get_size(): number
    get_is_empty(): boolean
    get_read_only(): boolean
    get_read_only_view(): Collection

    // Own virtual methods of Gee-0.8.Gee.Collection

    vfunc_contains(item: any): boolean
    vfunc_add(item: any): boolean
    vfunc_remove(item: any): boolean
    vfunc_clear(): void
    vfunc_add_all(collection: Collection): boolean
    vfunc_contains_all(collection: Collection): boolean
    vfunc_remove_all(collection: Collection): boolean
    vfunc_retain_all(collection: Collection): boolean
    vfunc_to_array(): any[]
    vfunc_add_all_array(array: any[]): boolean
    vfunc_contains_all_array(array: any[]): boolean
    vfunc_remove_all_array(array: any[]): boolean
    vfunc_add_all_iterator(iter: Iterator): boolean
    vfunc_contains_all_iterator(iter: Iterator): boolean
    vfunc_remove_all_iterator(iter: Iterator): boolean
    vfunc_get_size(): number
    vfunc_get_is_empty(): boolean
    vfunc_get_read_only(): boolean
    vfunc_get_read_only_view(): Collection

    // Class property signals of Gee-0.8.Gee.Collection

    connect(sigName: "notify::size", callback: (($obj: Collection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: Collection, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::read-only", callback: (($obj: Collection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only", callback: (($obj: Collection, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only", ...args: any[]): void
    connect(sigName: "notify::read-only-view", callback: (($obj: Collection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: Collection, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only-view", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Collection extends GObject.Object {

    // Own properties of Gee-0.8.Gee.Collection

    static name: string
    static $gtype: GObject.GType<Collection>

    // Constructors of Gee-0.8.Gee.Collection

    constructor(config?: Collection.ConstructorProperties) 
    _init(config?: Collection.ConstructorProperties): void
    static empty(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify): Collection
}

module Comparable {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface Comparable extends GObject.Object {

    // Owm methods of Gee-0.8.Gee.Comparable

    compare_to(object: any): number

    // Own virtual methods of Gee-0.8.Gee.Comparable

    vfunc_compare_to(object: any): number

    // Class property signals of Gee-0.8.Gee.Comparable

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Comparable {

    // Own properties of Gee-0.8.Gee.Comparable

    static name: string
    static $gtype: GObject.GType<Comparable>

    // Constructors of Gee-0.8.Gee.Comparable

    constructor(config?: Comparable.ConstructorProperties) 
    _init(config?: Comparable.ConstructorProperties): void
}

module Deque {

    // Constructor properties interface

    interface ConstructorProperties extends Queue.ConstructorProperties, GObject.Object.ConstructorProperties {
    }

}

interface Deque extends Queue {

    // Owm methods of Gee-0.8.Gee.Deque

    offer_head(element: any): boolean
    peek_head(): any | null
    poll_head(): any | null
    drain_head(recipient: Collection, amount: number): number
    offer_tail(element: any): boolean
    peek_tail(): any | null
    poll_tail(): any | null
    drain_tail(recipient: Collection, amount: number): number

    // Own virtual methods of Gee-0.8.Gee.Deque

    vfunc_offer_head(element: any): boolean
    vfunc_peek_head(): any | null
    vfunc_poll_head(): any | null
    vfunc_drain_head(recipient: Collection, amount: number): number
    vfunc_offer_tail(element: any): boolean
    vfunc_peek_tail(): any | null
    vfunc_poll_tail(): any | null
    vfunc_drain_tail(recipient: Collection, amount: number): number

    // Class property signals of Gee-0.8.Gee.Deque

    connect(sigName: "notify::capacity", callback: (($obj: Deque, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::capacity", callback: (($obj: Deque, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::capacity", ...args: any[]): void
    connect(sigName: "notify::remaining-capacity", callback: (($obj: Deque, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::remaining-capacity", callback: (($obj: Deque, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::remaining-capacity", ...args: any[]): void
    connect(sigName: "notify::is-full", callback: (($obj: Deque, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-full", callback: (($obj: Deque, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-full", ...args: any[]): void
    connect(sigName: "notify::size", callback: (($obj: Deque, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: Deque, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::read-only", callback: (($obj: Deque, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only", callback: (($obj: Deque, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only", ...args: any[]): void
    connect(sigName: "notify::read-only-view", callback: (($obj: Deque, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: Deque, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only-view", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Deque extends GObject.Object {

    // Own properties of Gee-0.8.Gee.Deque

    static name: string
    static $gtype: GObject.GType<Deque>

    // Constructors of Gee-0.8.Gee.Deque

    constructor(config?: Deque.ConstructorProperties) 
    _init(config?: Deque.ConstructorProperties): void
}

module Future {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface Future extends GObject.Object {

    // Own properties of Gee-0.8.Gee.Future

    readonly ready: boolean
    readonly exception: GLib.Error

    // Owm methods of Gee-0.8.Gee.Future

    wait(): any
    wait_until(end_time: number): [ /* returnType */ boolean, /* value */ any ]
    wait_async(_callback_: Gio.AsyncReadyCallback<this> | null): void

    // Overloads of wait_async

    /**
     * Promisified version of {@link wait_async}
     * 
     * 
     * @param _callback_ 
     * @returns A Promise of the result of {@link wait_async}
     */
    wait_async(): globalThis.Promise<any>
    wait_finish(_res_: Gio.AsyncResult): any
    map(a_type: GObject.GType, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, func: any): Future
    light_map(a_type: GObject.GType, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, func: any): Future
    light_map_broken(a_type: GObject.GType, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, func: any): Future
    zip(a_type: GObject.GType, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, b_type: GObject.GType, b_dup_func: GObject.BoxedCopyFunc, b_destroy_func: GLib.DestroyNotify, zip_func: any, second: Future): Future
    flat_map(a_type: GObject.GType, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, func: any): Future
    get_value(): any | null
    get_ready(): boolean
    get_exception(): GLib.Error | null

    // Own virtual methods of Gee-0.8.Gee.Future

    vfunc_wait(): any
    vfunc_wait_until(end_time: number): [ /* returnType */ boolean, /* value */ any ]
    vfunc_wait_async(_callback_: Gio.AsyncReadyCallback<this> | null): void
    vfunc_wait_finish(_res_: Gio.AsyncResult): any
    vfunc_map(a_type: GObject.GType, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, func: any): Future
    vfunc_light_map(a_type: GObject.GType, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, func: any): Future
    vfunc_light_map_broken(a_type: GObject.GType, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, func: any): Future
    vfunc_zip(a_type: GObject.GType, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, b_type: GObject.GType, b_dup_func: GObject.BoxedCopyFunc, b_destroy_func: GLib.DestroyNotify, zip_func: any, second: Future): Future
    vfunc_flat_map(a_type: GObject.GType, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, func: any): Future
    vfunc_get_value(): any | null
    vfunc_get_ready(): boolean
    vfunc_get_exception(): GLib.Error | null

    // Class property signals of Gee-0.8.Gee.Future

    connect(sigName: "notify::ready", callback: (($obj: Future, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ready", callback: (($obj: Future, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::ready", ...args: any[]): void
    connect(sigName: "notify::exception", callback: (($obj: Future, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::exception", callback: (($obj: Future, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::exception", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Future {

    // Own properties of Gee-0.8.Gee.Future

    static name: string
    static $gtype: GObject.GType<Future>

    // Constructors of Gee-0.8.Gee.Future

    constructor(config?: Future.ConstructorProperties) 
    _init(config?: Future.ConstructorProperties): void
}

module Hashable {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface Hashable extends GObject.Object {

    // Owm methods of Gee-0.8.Gee.Hashable

    hash(): number
    equal_to(object: any): boolean

    // Own virtual methods of Gee-0.8.Gee.Hashable

    vfunc_hash(): number
    vfunc_equal_to(object: any): boolean

    // Class property signals of Gee-0.8.Gee.Hashable

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Hashable {

    // Own properties of Gee-0.8.Gee.Hashable

    static name: string
    static $gtype: GObject.GType<Hashable>

    // Constructors of Gee-0.8.Gee.Hashable

    constructor(config?: Hashable.ConstructorProperties) 
    _init(config?: Hashable.ConstructorProperties): void
}

module Iterable {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties, Traversable.ConstructorProperties {
    }

}

interface Iterable extends GObject.Object, Traversable {

    // Owm methods of Gee-0.8.Gee.Iterable

    iterator(): Iterator

    // Own virtual methods of Gee-0.8.Gee.Iterable

    vfunc_iterator(): Iterator

    // Class property signals of Gee-0.8.Gee.Iterable

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Iterable {

    // Own properties of Gee-0.8.Gee.Iterable

    static name: string
    static $gtype: GObject.GType<Iterable>

    // Constructors of Gee-0.8.Gee.Iterable

    constructor(config?: Iterable.ConstructorProperties) 
    _init(config?: Iterable.ConstructorProperties): void
}

module Iterator {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties, Traversable.ConstructorProperties {
    }

}

interface Iterator extends GObject.Object, Traversable {

    // Own properties of Gee-0.8.Gee.Iterator

    readonly valid: boolean
    readonly readOnly: boolean

    // Owm methods of Gee-0.8.Gee.Iterator

    next(): boolean
    has_next(): boolean
    get(): any
    remove(): void
    get_valid(): boolean
    get_read_only(): boolean

    // Own virtual methods of Gee-0.8.Gee.Iterator

    vfunc_next(): boolean
    vfunc_has_next(): boolean
    vfunc_get(): any
    vfunc_remove(): void
    vfunc_get_valid(): boolean
    vfunc_get_read_only(): boolean

    // Class property signals of Gee-0.8.Gee.Iterator

    connect(sigName: "notify::valid", callback: (($obj: Iterator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valid", callback: (($obj: Iterator, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::valid", ...args: any[]): void
    connect(sigName: "notify::read-only", callback: (($obj: Iterator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only", callback: (($obj: Iterator, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Iterator {

    // Own properties of Gee-0.8.Gee.Iterator

    static name: string
    static $gtype: GObject.GType<Iterator>

    // Constructors of Gee-0.8.Gee.Iterator

    constructor(config?: Iterator.ConstructorProperties) 
    _init(config?: Iterator.ConstructorProperties): void
    static unfold(a_type: GObject.GType, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, f: UnfoldFunc, current: Lazy | null): Iterator
    static concat(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, iters: Iterator): Iterator
}

module List {

    // Constructor properties interface

    interface ConstructorProperties extends Collection.ConstructorProperties, GObject.Object.ConstructorProperties {
    }

}

interface List extends Collection {

    // Own properties of Gee-0.8.Gee.List

    readonly readOnlyView: any

    // Owm methods of Gee-0.8.Gee.List

    list_iterator(): ListIterator
    get(index: number): any
    set(index: number, item: any): void
    index_of(item: any): number
    insert(index: number, item: any): void
    remove_at(index: number): any
    slice(start: number, stop: number): List | null
    first(): any
    last(): any
    insert_all(index: number, collection: Collection): void
    sort(compare_func: GLib.CompareDataFunc | null): void
    get_read_only_view(): List

    // Overloads of get_read_only_view

    get_read_only_view(): Collection

    // Own virtual methods of Gee-0.8.Gee.List

    vfunc_list_iterator(): ListIterator
    vfunc_get(index: number): any
    vfunc_set(index: number, item: any): void
    vfunc_index_of(item: any): number
    vfunc_insert(index: number, item: any): void
    vfunc_remove_at(index: number): any
    vfunc_slice(start: number, stop: number): List | null
    vfunc_first(): any
    vfunc_last(): any
    vfunc_insert_all(index: number, collection: Collection): void
    vfunc_sort(compare_func: GLib.CompareDataFunc | null): void
    vfunc_get_read_only_view(): List

    // Overloads of vfunc_get_read_only_view

    vfunc_get_read_only_view(): Collection

    // Class property signals of Gee-0.8.Gee.List

    connect(sigName: "notify::read-only-view", callback: (($obj: List, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: List, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only-view", ...args: any[]): void
    connect(sigName: "notify::size", callback: (($obj: List, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: List, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::read-only", callback: (($obj: List, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only", callback: (($obj: List, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class List extends GObject.Object {

    // Own properties of Gee-0.8.Gee.List

    static name: string
    static $gtype: GObject.GType<List>

    // Constructors of Gee-0.8.Gee.List

    constructor(config?: List.ConstructorProperties) 
    _init(config?: List.ConstructorProperties): void
    static empty(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify): List

    // Overloads of empty

    static empty(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify): Collection
}

module ListIterator {

    // Constructor properties interface

    interface ConstructorProperties extends Iterator.ConstructorProperties, GObject.Object.ConstructorProperties {
    }

}

interface ListIterator extends Iterator {

    // Owm methods of Gee-0.8.Gee.ListIterator

    set(item: any): void
    add(item: any): void
    index(): number

    // Own virtual methods of Gee-0.8.Gee.ListIterator

    vfunc_set(item: any): void
    vfunc_add(item: any): void
    vfunc_index(): number

    // Class property signals of Gee-0.8.Gee.ListIterator

    connect(sigName: "notify::valid", callback: (($obj: ListIterator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valid", callback: (($obj: ListIterator, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::valid", ...args: any[]): void
    connect(sigName: "notify::read-only", callback: (($obj: ListIterator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only", callback: (($obj: ListIterator, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class ListIterator extends GObject.Object {

    // Own properties of Gee-0.8.Gee.ListIterator

    static name: string
    static $gtype: GObject.GType<ListIterator>

    // Constructors of Gee-0.8.Gee.ListIterator

    constructor(config?: ListIterator.ConstructorProperties) 
    _init(config?: ListIterator.ConstructorProperties): void
}

module Map {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties, Iterable.ConstructorProperties {
    }

}

interface Map extends GObject.Object, Iterable {

    // Own properties of Gee-0.8.Gee.Map

    readonly size: number
    readonly readOnly: boolean
    readonly keys: Set
    readonly values: Collection
    readonly entries: Set
    readonly readOnlyView: Map

    // Owm methods of Gee-0.8.Gee.Map

    has_key(key: any): boolean
    contains(key: any): boolean
    has(key: any, value: any): boolean
    get(key: any): any | null
    set(key: any, value: any): void
    unset(key: any): [ /* returnType */ boolean, /* value */ any ]
    remove(key: any): [ /* returnType */ boolean, /* value */ any ]
    clear(): void
    map_iterator(): MapIterator
    set_all(map: Map): void
    unset_all(map: Map): boolean
    remove_all(map: Map): boolean
    has_all(map: Map): boolean
    contains_all(map: Map): boolean
    get_size(): number
    get_is_empty(): boolean
    get_read_only(): boolean
    get_keys(): Set
    get_values(): Collection
    get_entries(): Set
    get_read_only_view(): Map
    get_key_type(): GObject.GType
    get_value_type(): GObject.GType

    // Own virtual methods of Gee-0.8.Gee.Map

    vfunc_has_key(key: any): boolean
    vfunc_has(key: any, value: any): boolean
    vfunc_get(key: any): any | null
    vfunc_set(key: any, value: any): void
    vfunc_unset(key: any): [ /* returnType */ boolean, /* value */ any ]
    vfunc_clear(): void
    vfunc_map_iterator(): MapIterator
    vfunc_set_all(map: Map): void
    vfunc_unset_all(map: Map): boolean
    vfunc_has_all(map: Map): boolean
    vfunc_get_size(): number
    vfunc_get_is_empty(): boolean
    vfunc_get_read_only(): boolean
    vfunc_get_keys(): Set
    vfunc_get_values(): Collection
    vfunc_get_entries(): Set
    vfunc_get_read_only_view(): Map

    // Class property signals of Gee-0.8.Gee.Map

    connect(sigName: "notify::size", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::read-only", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only", ...args: any[]): void
    connect(sigName: "notify::keys", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::keys", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::keys", ...args: any[]): void
    connect(sigName: "notify::values", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::values", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::values", ...args: any[]): void
    connect(sigName: "notify::entries", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::entries", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::entries", ...args: any[]): void
    connect(sigName: "notify::read-only-view", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only-view", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Map {

    // Own properties of Gee-0.8.Gee.Map

    static name: string
    static $gtype: GObject.GType<Map>

    // Constructors of Gee-0.8.Gee.Map

    constructor(config?: Map.ConstructorProperties) 
    _init(config?: Map.ConstructorProperties): void
    static empty(k_type: GObject.GType, k_dup_func: GObject.BoxedCopyFunc, k_destroy_func: GLib.DestroyNotify, v_type: GObject.GType, v_dup_func: GObject.BoxedCopyFunc, v_destroy_func: GLib.DestroyNotify): Map
}

module MapIterator {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface MapIterator extends GObject.Object {

    // Own properties of Gee-0.8.Gee.MapIterator

    readonly valid: boolean
    readonly mutable: boolean
    readonly readOnly: boolean

    // Owm methods of Gee-0.8.Gee.MapIterator

    next(): boolean
    has_next(): boolean
    get_key(): any
    get_value(): any
    set_value(value: any): void
    unset(): void
    fold(a_type: GObject.GType, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, f: FoldMapFunc, seed: any): any
    foreach(f: ForallMapFunc): boolean
    get_valid(): boolean
    get_mutable(): boolean
    get_read_only(): boolean

    // Own virtual methods of Gee-0.8.Gee.MapIterator

    vfunc_next(): boolean
    vfunc_has_next(): boolean
    vfunc_get_key(): any
    vfunc_get_value(): any
    vfunc_set_value(value: any): void
    vfunc_unset(): void
    vfunc_fold(a_type: GObject.GType, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, f: FoldMapFunc, seed: any): any
    vfunc_foreach(f: ForallMapFunc): boolean
    vfunc_get_valid(): boolean
    vfunc_get_mutable(): boolean
    vfunc_get_read_only(): boolean

    // Class property signals of Gee-0.8.Gee.MapIterator

    connect(sigName: "notify::valid", callback: (($obj: MapIterator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valid", callback: (($obj: MapIterator, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::valid", ...args: any[]): void
    connect(sigName: "notify::mutable", callback: (($obj: MapIterator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mutable", callback: (($obj: MapIterator, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::mutable", ...args: any[]): void
    connect(sigName: "notify::read-only", callback: (($obj: MapIterator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only", callback: (($obj: MapIterator, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class MapIterator {

    // Own properties of Gee-0.8.Gee.MapIterator

    static name: string
    static $gtype: GObject.GType<MapIterator>

    // Constructors of Gee-0.8.Gee.MapIterator

    constructor(config?: MapIterator.ConstructorProperties) 
    _init(config?: MapIterator.ConstructorProperties): void
}

module MultiMap {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface MultiMap extends GObject.Object {

    // Own properties of Gee-0.8.Gee.MultiMap

    readonly size: number
    readonly readOnly: boolean

    // Owm methods of Gee-0.8.Gee.MultiMap

    get_keys(): Set
    get_all_keys(): MultiSet
    get_values(): Collection
    contains(key: any): boolean
    get(key: any): Collection
    set(key: any, value: any): void
    remove(key: any, value: any): boolean
    remove_all(key: any): boolean
    clear(): void
    map_iterator(): MapIterator
    get_size(): number
    get_read_only(): boolean
    get_key_type(): GObject.GType
    get_value_type(): GObject.GType
    get_read_only_view(): MultiMap

    // Own virtual methods of Gee-0.8.Gee.MultiMap

    vfunc_get_keys(): Set
    vfunc_get_all_keys(): MultiSet
    vfunc_get_values(): Collection
    vfunc_contains(key: any): boolean
    vfunc_get(key: any): Collection
    vfunc_set(key: any, value: any): void
    vfunc_remove(key: any, value: any): boolean
    vfunc_remove_all(key: any): boolean
    vfunc_clear(): void
    vfunc_map_iterator(): MapIterator
    vfunc_get_size(): number
    vfunc_get_read_only(): boolean
    vfunc_get_read_only_view(): MultiMap

    // Class property signals of Gee-0.8.Gee.MultiMap

    connect(sigName: "notify::size", callback: (($obj: MultiMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: MultiMap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::read-only", callback: (($obj: MultiMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only", callback: (($obj: MultiMap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class MultiMap {

    // Own properties of Gee-0.8.Gee.MultiMap

    static name: string
    static $gtype: GObject.GType<MultiMap>

    // Constructors of Gee-0.8.Gee.MultiMap

    constructor(config?: MultiMap.ConstructorProperties) 
    _init(config?: MultiMap.ConstructorProperties): void
}

module MultiSet {

    // Constructor properties interface

    interface ConstructorProperties extends Collection.ConstructorProperties, GObject.Object.ConstructorProperties {
    }

}

interface MultiSet extends Collection {

    // Owm methods of Gee-0.8.Gee.MultiSet

    count(item: any): number
    get_read_only_view(): MultiSet

    // Overloads of get_read_only_view

    get_read_only_view(): Collection

    // Own virtual methods of Gee-0.8.Gee.MultiSet

    vfunc_count(item: any): number
    vfunc_get_read_only_view(): MultiSet

    // Overloads of vfunc_get_read_only_view

    vfunc_get_read_only_view(): Collection

    // Class property signals of Gee-0.8.Gee.MultiSet

    connect(sigName: "notify::size", callback: (($obj: MultiSet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: MultiSet, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::read-only", callback: (($obj: MultiSet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only", callback: (($obj: MultiSet, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only", ...args: any[]): void
    connect(sigName: "notify::read-only-view", callback: (($obj: MultiSet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: MultiSet, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only-view", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class MultiSet extends GObject.Object {

    // Own properties of Gee-0.8.Gee.MultiSet

    static name: string
    static $gtype: GObject.GType<MultiSet>

    // Constructors of Gee-0.8.Gee.MultiSet

    constructor(config?: MultiSet.ConstructorProperties) 
    _init(config?: MultiSet.ConstructorProperties): void
    static empty(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify): Set

    // Overloads of empty

    static empty(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify): Collection
}

module Queue {

    // Constructor properties interface

    interface ConstructorProperties extends Collection.ConstructorProperties, GObject.Object.ConstructorProperties {
    }

}

interface Queue extends Collection {

    // Own properties of Gee-0.8.Gee.Queue

    readonly capacity: number
    readonly remainingCapacity: number
    readonly isFull: boolean

    // Owm methods of Gee-0.8.Gee.Queue

    offer(element: any): boolean
    peek(): any | null
    poll(): any | null
    drain(recipient: Collection, amount: number): number
    get_capacity(): number
    get_remaining_capacity(): number
    get_is_full(): boolean

    // Own virtual methods of Gee-0.8.Gee.Queue

    vfunc_offer(element: any): boolean
    vfunc_peek(): any | null
    vfunc_poll(): any | null
    vfunc_drain(recipient: Collection, amount: number): number
    vfunc_get_capacity(): number
    vfunc_get_remaining_capacity(): number
    vfunc_get_is_full(): boolean

    // Class property signals of Gee-0.8.Gee.Queue

    connect(sigName: "notify::capacity", callback: (($obj: Queue, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::capacity", callback: (($obj: Queue, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::capacity", ...args: any[]): void
    connect(sigName: "notify::remaining-capacity", callback: (($obj: Queue, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::remaining-capacity", callback: (($obj: Queue, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::remaining-capacity", ...args: any[]): void
    connect(sigName: "notify::is-full", callback: (($obj: Queue, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-full", callback: (($obj: Queue, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-full", ...args: any[]): void
    connect(sigName: "notify::size", callback: (($obj: Queue, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: Queue, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::read-only", callback: (($obj: Queue, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only", callback: (($obj: Queue, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only", ...args: any[]): void
    connect(sigName: "notify::read-only-view", callback: (($obj: Queue, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: Queue, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only-view", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Queue extends GObject.Object {

    // Own properties of Gee-0.8.Gee.Queue

    static name: string
    static $gtype: GObject.GType<Queue>

    // Constructors of Gee-0.8.Gee.Queue

    constructor(config?: Queue.ConstructorProperties) 
    _init(config?: Queue.ConstructorProperties): void
}

module Set {

    // Constructor properties interface

    interface ConstructorProperties extends Collection.ConstructorProperties, GObject.Object.ConstructorProperties {
    }

}

interface Set extends Collection {

    // Own properties of Gee-0.8.Gee.Set

    readonly readOnlyView: any

    // Owm methods of Gee-0.8.Gee.Set

    get_read_only_view(): Set

    // Overloads of get_read_only_view

    get_read_only_view(): Collection

    // Own virtual methods of Gee-0.8.Gee.Set

    vfunc_get_read_only_view(): Set

    // Overloads of vfunc_get_read_only_view

    vfunc_get_read_only_view(): Collection

    // Class property signals of Gee-0.8.Gee.Set

    connect(sigName: "notify::read-only-view", callback: (($obj: Set, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: Set, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only-view", ...args: any[]): void
    connect(sigName: "notify::size", callback: (($obj: Set, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: Set, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::read-only", callback: (($obj: Set, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only", callback: (($obj: Set, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Set extends GObject.Object {

    // Own properties of Gee-0.8.Gee.Set

    static name: string
    static $gtype: GObject.GType<Set>

    // Constructors of Gee-0.8.Gee.Set

    constructor(config?: Set.ConstructorProperties) 
    _init(config?: Set.ConstructorProperties): void
    static empty(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify): Set

    // Overloads of empty

    static empty(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify): Collection
}

module SortedMap {

    // Constructor properties interface

    interface ConstructorProperties extends Map.ConstructorProperties, GObject.Object.ConstructorProperties {
    }

}

interface SortedMap extends Map {

    // Own properties of Gee-0.8.Gee.SortedMap

    readonly ascendingKeys: SortedSet
    readonly ascendingEntries: SortedSet
    readonly readOnlyView: any

    // Owm methods of Gee-0.8.Gee.SortedMap

    head_map(before: any): SortedMap
    tail_map(after: any): SortedMap
    sub_map(before: any, after: any): SortedMap
    get_ascending_keys(): SortedSet
    get_ascending_entries(): SortedSet
    get_read_only_view(): SortedMap

    // Overloads of get_read_only_view

    get_read_only_view(): Map

    // Own virtual methods of Gee-0.8.Gee.SortedMap

    vfunc_head_map(before: any): SortedMap
    vfunc_tail_map(after: any): SortedMap
    vfunc_sub_map(before: any, after: any): SortedMap
    vfunc_get_ascending_keys(): SortedSet
    vfunc_get_ascending_entries(): SortedSet
    vfunc_get_read_only_view(): SortedMap

    // Overloads of vfunc_get_read_only_view

    vfunc_get_read_only_view(): Map

    // Class property signals of Gee-0.8.Gee.SortedMap

    connect(sigName: "notify::ascending-keys", callback: (($obj: SortedMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ascending-keys", callback: (($obj: SortedMap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::ascending-keys", ...args: any[]): void
    connect(sigName: "notify::ascending-entries", callback: (($obj: SortedMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ascending-entries", callback: (($obj: SortedMap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::ascending-entries", ...args: any[]): void
    connect(sigName: "notify::read-only-view", callback: (($obj: SortedMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: SortedMap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only-view", ...args: any[]): void
    connect(sigName: "notify::size", callback: (($obj: SortedMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: SortedMap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::read-only", callback: (($obj: SortedMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only", callback: (($obj: SortedMap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only", ...args: any[]): void
    connect(sigName: "notify::keys", callback: (($obj: SortedMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::keys", callback: (($obj: SortedMap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::keys", ...args: any[]): void
    connect(sigName: "notify::values", callback: (($obj: SortedMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::values", callback: (($obj: SortedMap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::values", ...args: any[]): void
    connect(sigName: "notify::entries", callback: (($obj: SortedMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::entries", callback: (($obj: SortedMap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::entries", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class SortedMap extends GObject.Object {

    // Own properties of Gee-0.8.Gee.SortedMap

    static name: string
    static $gtype: GObject.GType<SortedMap>

    // Constructors of Gee-0.8.Gee.SortedMap

    constructor(config?: SortedMap.ConstructorProperties) 
    _init(config?: SortedMap.ConstructorProperties): void
    static empty(k_type: GObject.GType, k_dup_func: GObject.BoxedCopyFunc, k_destroy_func: GLib.DestroyNotify, v_type: GObject.GType, v_dup_func: GObject.BoxedCopyFunc, v_destroy_func: GLib.DestroyNotify): Map
}

module SortedSet {

    // Constructor properties interface

    interface ConstructorProperties extends Set.ConstructorProperties, GObject.Object.ConstructorProperties {
    }

}

interface SortedSet extends Set {

    // Own properties of Gee-0.8.Gee.SortedSet

    readonly readOnlyView: any

    // Owm methods of Gee-0.8.Gee.SortedSet

    first(): any
    last(): any
    iterator_at(element: any): Iterator | null
    lower(element: any): any | null
    higher(element: any): any | null
    floor(element: any): any | null
    ceil(element: any): any | null
    head_set(before: any): SortedSet
    tail_set(after: any): SortedSet
    sub_set(from: any, to: any): SortedSet
    get_read_only_view(): SortedSet

    // Overloads of get_read_only_view

    get_read_only_view(): Set
    get_read_only_view(): Collection

    // Own virtual methods of Gee-0.8.Gee.SortedSet

    vfunc_first(): any
    vfunc_last(): any
    vfunc_iterator_at(element: any): Iterator | null
    vfunc_lower(element: any): any | null
    vfunc_higher(element: any): any | null
    vfunc_floor(element: any): any | null
    vfunc_ceil(element: any): any | null
    vfunc_head_set(before: any): SortedSet
    vfunc_tail_set(after: any): SortedSet
    vfunc_sub_set(from: any, to: any): SortedSet
    vfunc_get_read_only_view(): SortedSet

    // Overloads of vfunc_get_read_only_view

    vfunc_get_read_only_view(): Set
    vfunc_get_read_only_view(): Collection

    // Class property signals of Gee-0.8.Gee.SortedSet

    connect(sigName: "notify::read-only-view", callback: (($obj: SortedSet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: SortedSet, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only-view", ...args: any[]): void
    connect(sigName: "notify::size", callback: (($obj: SortedSet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: SortedSet, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::read-only", callback: (($obj: SortedSet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only", callback: (($obj: SortedSet, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class SortedSet extends GObject.Object {

    // Own properties of Gee-0.8.Gee.SortedSet

    static name: string
    static $gtype: GObject.GType<SortedSet>

    // Constructors of Gee-0.8.Gee.SortedSet

    constructor(config?: SortedSet.ConstructorProperties) 
    _init(config?: SortedSet.ConstructorProperties): void
    static empty(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify): SortedSet

    // Overloads of empty

    static empty(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify): Set
    static empty(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify): Collection
}

module Traversable {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface Traversable extends GObject.Object {

    // Owm methods of Gee-0.8.Gee.Traversable

    foreach(f: ForallFunc): boolean
    stream(a_type: GObject.GType, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, f: StreamFunc): Iterator
    fold(a_type: GObject.GType, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, f: FoldFunc, seed: any): any
    map(a_type: GObject.GType, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, f: MapFunc): Iterator
    scan(a_type: GObject.GType, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, f: FoldFunc, seed: any): Iterator
    filter(pred: Predicate): Iterator
    chop(offset: number, length: number): Iterator
    flat_map(a_type: GObject.GType, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, f: FlatMapFunc): Iterator
    tee(forks: number): Iterator[]
    first_match(pred: Predicate): any | null
    any_match(pred: Predicate): boolean
    all_match(pred: Predicate): boolean
    max(compare: GLib.CompareDataFunc): any
    min(compare: GLib.CompareDataFunc): any
    order_by(compare: GLib.CompareDataFunc | null): Iterator
    get_element_type(): GObject.GType

    // Own virtual methods of Gee-0.8.Gee.Traversable

    vfunc_foreach(f: ForallFunc): boolean
    vfunc_stream(a_type: GObject.GType, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, f: StreamFunc): Iterator
    vfunc_fold(a_type: GObject.GType, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, f: FoldFunc, seed: any): any
    vfunc_map(a_type: GObject.GType, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, f: MapFunc): Iterator
    vfunc_scan(a_type: GObject.GType, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, f: FoldFunc, seed: any): Iterator
    vfunc_filter(pred: Predicate): Iterator
    vfunc_chop(offset: number, length: number): Iterator
    vfunc_flat_map(a_type: GObject.GType, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, f: FlatMapFunc): Iterator
    vfunc_tee(forks: number): Iterator[]
    vfunc_first_match(pred: Predicate): any | null
    vfunc_any_match(pred: Predicate): boolean
    vfunc_all_match(pred: Predicate): boolean
    vfunc_max(compare: GLib.CompareDataFunc): any
    vfunc_min(compare: GLib.CompareDataFunc): any
    vfunc_order_by(compare: GLib.CompareDataFunc | null): Iterator
    vfunc_get_element_type(): GObject.GType

    // Class property signals of Gee-0.8.Gee.Traversable

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Traversable {

    // Own properties of Gee-0.8.Gee.Traversable

    static name: string
    static $gtype: GObject.GType<Traversable>

    // Constructors of Gee-0.8.Gee.Traversable

    constructor(config?: Traversable.ConstructorProperties) 
    _init(config?: Traversable.ConstructorProperties): void
}

module AbstractBidirList {

    // Constructor properties interface

    interface ConstructorProperties extends BidirList.ConstructorProperties, AbstractList.ConstructorProperties {

        // Own constructor properties of Gee-0.8.Gee.AbstractBidirList

        gType?: GObject.GType | null
        gDupFunc?: GObject.BoxedCopyFunc | null
        gDestroyFunc?: GLib.DestroyNotify | null
    }

}

interface AbstractBidirList extends BidirList {

    // Own properties of Gee-0.8.Gee.AbstractBidirList

    readonly gType: GObject.GType
    readonly gDupFunc: GObject.BoxedCopyFunc
    readonly gDestroyFunc: GLib.DestroyNotify
    readonly readOnlyView: any

    // Owm methods of Gee-0.8.Gee.AbstractBidirList

    bidir_list_iterator(): BidirListIterator
    reserved0(): void
    reserved1(): void
    reserved2(): void
    reserved3(): void
    reserved4(): void
    reserved5(): void
    reserved6(): void
    reserved7(): void
    reserved8(): void
    reserved9(): void
    get_read_only_view(): BidirList

    // Overloads of get_read_only_view

    get_read_only_view(): BidirList
    get_read_only_view(): List
    get_read_only_view(): Collection

    // Own virtual methods of Gee-0.8.Gee.AbstractBidirList

    vfunc_bidir_list_iterator(): BidirListIterator
    vfunc_reserved0(): void
    vfunc_reserved1(): void
    vfunc_reserved2(): void
    vfunc_reserved3(): void
    vfunc_reserved4(): void
    vfunc_reserved5(): void
    vfunc_reserved6(): void
    vfunc_reserved7(): void
    vfunc_reserved8(): void
    vfunc_reserved9(): void
    vfunc_get_read_only_view(): BidirList

    // Overloads of vfunc_get_read_only_view

    vfunc_get_read_only_view(): BidirList
    vfunc_get_read_only_view(): List
    vfunc_get_read_only_view(): Collection

    // Class property signals of Gee-0.8.Gee.AbstractBidirList

    connect(sigName: "notify::g-type", callback: (($obj: AbstractBidirList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-type", callback: (($obj: AbstractBidirList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-type", ...args: any[]): void
    connect(sigName: "notify::g-dup-func", callback: (($obj: AbstractBidirList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-dup-func", callback: (($obj: AbstractBidirList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-dup-func", ...args: any[]): void
    connect(sigName: "notify::g-destroy-func", callback: (($obj: AbstractBidirList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-destroy-func", callback: (($obj: AbstractBidirList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-destroy-func", ...args: any[]): void
    connect(sigName: "notify::read-only-view", callback: (($obj: AbstractBidirList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: AbstractBidirList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only-view", ...args: any[]): void
    connect(sigName: "notify::size", callback: (($obj: AbstractBidirList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: AbstractBidirList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::read-only", callback: (($obj: AbstractBidirList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only", callback: (($obj: AbstractBidirList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class AbstractBidirList extends AbstractList {

    // Own properties of Gee-0.8.Gee.AbstractBidirList

    static name: string
    static $gtype: GObject.GType<AbstractBidirList>

    // Constructors of Gee-0.8.Gee.AbstractBidirList

    constructor(config?: AbstractBidirList.ConstructorProperties) 
    _init(config?: AbstractBidirList.ConstructorProperties): void

    // Conflicting static methods

    static empty(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify): List

    // Overloads of empty

    static empty(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify): Collection
    static empty(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify): Collection
}

module AbstractBidirSortedSet {

    // Constructor properties interface

    interface ConstructorProperties extends BidirSortedSet.ConstructorProperties, AbstractSortedSet.ConstructorProperties {

        // Own constructor properties of Gee-0.8.Gee.AbstractBidirSortedSet

        gType?: GObject.GType | null
        gDupFunc?: GObject.BoxedCopyFunc | null
        gDestroyFunc?: GLib.DestroyNotify | null
    }

}

interface AbstractBidirSortedSet extends BidirSortedSet {

    // Own properties of Gee-0.8.Gee.AbstractBidirSortedSet

    readonly gType: GObject.GType
    readonly gDupFunc: GObject.BoxedCopyFunc
    readonly gDestroyFunc: GLib.DestroyNotify
    readonly readOnlyView: any

    // Owm methods of Gee-0.8.Gee.AbstractBidirSortedSet

    bidir_iterator(): BidirIterator
    reserved0(): void
    reserved1(): void
    reserved2(): void
    reserved3(): void
    reserved4(): void
    reserved5(): void
    reserved6(): void
    reserved7(): void
    reserved8(): void
    reserved9(): void
    get_read_only_view(): BidirSortedSet

    // Overloads of get_read_only_view

    get_read_only_view(): BidirSortedSet
    get_read_only_view(): SortedSet
    get_read_only_view(): Set
    get_read_only_view(): Collection

    // Own virtual methods of Gee-0.8.Gee.AbstractBidirSortedSet

    vfunc_bidir_iterator(): BidirIterator
    vfunc_reserved0(): void
    vfunc_reserved1(): void
    vfunc_reserved2(): void
    vfunc_reserved3(): void
    vfunc_reserved4(): void
    vfunc_reserved5(): void
    vfunc_reserved6(): void
    vfunc_reserved7(): void
    vfunc_reserved8(): void
    vfunc_reserved9(): void
    vfunc_get_read_only_view(): BidirSortedSet

    // Overloads of vfunc_get_read_only_view

    vfunc_get_read_only_view(): BidirSortedSet
    vfunc_get_read_only_view(): SortedSet
    vfunc_get_read_only_view(): Set
    vfunc_get_read_only_view(): Collection

    // Class property signals of Gee-0.8.Gee.AbstractBidirSortedSet

    connect(sigName: "notify::g-type", callback: (($obj: AbstractBidirSortedSet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-type", callback: (($obj: AbstractBidirSortedSet, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-type", ...args: any[]): void
    connect(sigName: "notify::g-dup-func", callback: (($obj: AbstractBidirSortedSet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-dup-func", callback: (($obj: AbstractBidirSortedSet, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-dup-func", ...args: any[]): void
    connect(sigName: "notify::g-destroy-func", callback: (($obj: AbstractBidirSortedSet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-destroy-func", callback: (($obj: AbstractBidirSortedSet, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-destroy-func", ...args: any[]): void
    connect(sigName: "notify::read-only-view", callback: (($obj: AbstractBidirSortedSet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: AbstractBidirSortedSet, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only-view", ...args: any[]): void
    connect(sigName: "notify::size", callback: (($obj: AbstractBidirSortedSet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: AbstractBidirSortedSet, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::read-only", callback: (($obj: AbstractBidirSortedSet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only", callback: (($obj: AbstractBidirSortedSet, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class AbstractBidirSortedSet extends AbstractSortedSet {

    // Own properties of Gee-0.8.Gee.AbstractBidirSortedSet

    static name: string
    static $gtype: GObject.GType<AbstractBidirSortedSet>

    // Constructors of Gee-0.8.Gee.AbstractBidirSortedSet

    constructor(config?: AbstractBidirSortedSet.ConstructorProperties) 
    _init(config?: AbstractBidirSortedSet.ConstructorProperties): void

    // Conflicting static methods

    static empty(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify): BidirSortedSet

    // Overloads of empty

    static empty(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify): SortedSet
    static empty(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify): Set
    static empty(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify): Collection
    static empty(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify): SortedSet

    // Overloads of empty

    static empty(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify): Set
    static empty(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify): Collection
    static empty(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify): Set

    // Overloads of empty

    static empty(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify): Collection
    static empty(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify): Collection
}

module AbstractBidirSortedMap {

    // Constructor properties interface

    interface ConstructorProperties extends BidirSortedMap.ConstructorProperties, AbstractSortedMap.ConstructorProperties {

        // Own constructor properties of Gee-0.8.Gee.AbstractBidirSortedMap

        kType?: GObject.GType | null
        kDupFunc?: GObject.BoxedCopyFunc | null
        kDestroyFunc?: GLib.DestroyNotify | null
        vType?: GObject.GType | null
        vDupFunc?: GObject.BoxedCopyFunc | null
        vDestroyFunc?: GLib.DestroyNotify | null
    }

}

interface AbstractBidirSortedMap extends BidirSortedMap {

    // Own properties of Gee-0.8.Gee.AbstractBidirSortedMap

    readonly kType: GObject.GType
    readonly kDupFunc: GObject.BoxedCopyFunc
    readonly kDestroyFunc: GLib.DestroyNotify
    readonly vType: GObject.GType
    readonly vDupFunc: GObject.BoxedCopyFunc
    readonly vDestroyFunc: GLib.DestroyNotify
    readonly readOnlyView: any

    // Owm methods of Gee-0.8.Gee.AbstractBidirSortedMap

    bidir_map_iterator(): BidirMapIterator
    reserved0(): void
    reserved1(): void
    reserved2(): void
    reserved3(): void
    reserved4(): void
    reserved5(): void
    reserved6(): void
    reserved7(): void
    reserved8(): void
    reserved9(): void
    get_read_only_view(): BidirSortedMap

    // Overloads of get_read_only_view

    get_read_only_view(): BidirSortedMap
    get_read_only_view(): SortedMap
    get_read_only_view(): Map

    // Own virtual methods of Gee-0.8.Gee.AbstractBidirSortedMap

    vfunc_bidir_map_iterator(): BidirMapIterator
    vfunc_reserved0(): void
    vfunc_reserved1(): void
    vfunc_reserved2(): void
    vfunc_reserved3(): void
    vfunc_reserved4(): void
    vfunc_reserved5(): void
    vfunc_reserved6(): void
    vfunc_reserved7(): void
    vfunc_reserved8(): void
    vfunc_reserved9(): void
    vfunc_get_read_only_view(): BidirSortedMap

    // Overloads of vfunc_get_read_only_view

    vfunc_get_read_only_view(): BidirSortedMap
    vfunc_get_read_only_view(): SortedMap
    vfunc_get_read_only_view(): Map

    // Class property signals of Gee-0.8.Gee.AbstractBidirSortedMap

    connect(sigName: "notify::k-type", callback: (($obj: AbstractBidirSortedMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::k-type", callback: (($obj: AbstractBidirSortedMap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::k-type", ...args: any[]): void
    connect(sigName: "notify::k-dup-func", callback: (($obj: AbstractBidirSortedMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::k-dup-func", callback: (($obj: AbstractBidirSortedMap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::k-dup-func", ...args: any[]): void
    connect(sigName: "notify::k-destroy-func", callback: (($obj: AbstractBidirSortedMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::k-destroy-func", callback: (($obj: AbstractBidirSortedMap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::k-destroy-func", ...args: any[]): void
    connect(sigName: "notify::v-type", callback: (($obj: AbstractBidirSortedMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::v-type", callback: (($obj: AbstractBidirSortedMap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::v-type", ...args: any[]): void
    connect(sigName: "notify::v-dup-func", callback: (($obj: AbstractBidirSortedMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::v-dup-func", callback: (($obj: AbstractBidirSortedMap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::v-dup-func", ...args: any[]): void
    connect(sigName: "notify::v-destroy-func", callback: (($obj: AbstractBidirSortedMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::v-destroy-func", callback: (($obj: AbstractBidirSortedMap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::v-destroy-func", ...args: any[]): void
    connect(sigName: "notify::read-only-view", callback: (($obj: AbstractBidirSortedMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: AbstractBidirSortedMap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only-view", ...args: any[]): void
    connect(sigName: "notify::ascending-keys", callback: (($obj: AbstractBidirSortedMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ascending-keys", callback: (($obj: AbstractBidirSortedMap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::ascending-keys", ...args: any[]): void
    connect(sigName: "notify::ascending-entries", callback: (($obj: AbstractBidirSortedMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ascending-entries", callback: (($obj: AbstractBidirSortedMap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::ascending-entries", ...args: any[]): void
    connect(sigName: "notify::size", callback: (($obj: AbstractBidirSortedMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: AbstractBidirSortedMap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::read-only", callback: (($obj: AbstractBidirSortedMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only", callback: (($obj: AbstractBidirSortedMap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only", ...args: any[]): void
    connect(sigName: "notify::keys", callback: (($obj: AbstractBidirSortedMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::keys", callback: (($obj: AbstractBidirSortedMap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::keys", ...args: any[]): void
    connect(sigName: "notify::values", callback: (($obj: AbstractBidirSortedMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::values", callback: (($obj: AbstractBidirSortedMap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::values", ...args: any[]): void
    connect(sigName: "notify::entries", callback: (($obj: AbstractBidirSortedMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::entries", callback: (($obj: AbstractBidirSortedMap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::entries", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class AbstractBidirSortedMap extends AbstractSortedMap {

    // Own properties of Gee-0.8.Gee.AbstractBidirSortedMap

    static name: string
    static $gtype: GObject.GType<AbstractBidirSortedMap>

    // Constructors of Gee-0.8.Gee.AbstractBidirSortedMap

    constructor(config?: AbstractBidirSortedMap.ConstructorProperties) 
    _init(config?: AbstractBidirSortedMap.ConstructorProperties): void

    // Conflicting static methods

    static empty(k_type: GObject.GType, k_dup_func: GObject.BoxedCopyFunc, k_destroy_func: GLib.DestroyNotify, v_type: GObject.GType, v_dup_func: GObject.BoxedCopyFunc, v_destroy_func: GLib.DestroyNotify): BidirSortedMap

    // Overloads of empty

    static empty(k_type: GObject.GType, k_dup_func: GObject.BoxedCopyFunc, k_destroy_func: GLib.DestroyNotify, v_type: GObject.GType, v_dup_func: GObject.BoxedCopyFunc, v_destroy_func: GLib.DestroyNotify): Map
    static empty(k_type: GObject.GType, k_dup_func: GObject.BoxedCopyFunc, k_destroy_func: GLib.DestroyNotify, v_type: GObject.GType, v_dup_func: GObject.BoxedCopyFunc, v_destroy_func: GLib.DestroyNotify): Map
    static empty(k_type: GObject.GType, k_dup_func: GObject.BoxedCopyFunc, k_destroy_func: GLib.DestroyNotify, v_type: GObject.GType, v_dup_func: GObject.BoxedCopyFunc, v_destroy_func: GLib.DestroyNotify): Map
}

module AbstractCollection {

    // Constructor properties interface

    interface ConstructorProperties extends Traversable.ConstructorProperties, Iterable.ConstructorProperties, Collection.ConstructorProperties, GObject.Object.ConstructorProperties {

        // Own constructor properties of Gee-0.8.Gee.AbstractCollection

        gType?: GObject.GType | null
        gDupFunc?: GObject.BoxedCopyFunc | null
        gDestroyFunc?: GLib.DestroyNotify | null
    }

}

interface AbstractCollection extends Traversable, Iterable, Collection {

    // Own properties of Gee-0.8.Gee.AbstractCollection

    readonly gType: GObject.GType
    readonly gDupFunc: GObject.BoxedCopyFunc
    readonly gDestroyFunc: GLib.DestroyNotify
    readonly size: number
    readonly readOnly: boolean
    readonly readOnlyView: Collection

    // Owm methods of Gee-0.8.Gee.AbstractCollection

    contains(item: any): boolean
    add(item: any): boolean
    remove(item: any): boolean
    clear(): void
    iterator(): Iterator
    foreach(f: ForallFunc): boolean
    reserved0(): void
    reserved1(): void
    reserved2(): void
    reserved3(): void
    reserved4(): void
    reserved5(): void
    reserved6(): void
    reserved7(): void
    reserved8(): void
    reserved9(): void
    get_size(): number
    get_read_only(): boolean
    get_read_only_view(): Collection

    // Own virtual methods of Gee-0.8.Gee.AbstractCollection

    vfunc_contains(item: any): boolean
    vfunc_add(item: any): boolean
    vfunc_remove(item: any): boolean
    vfunc_clear(): void
    vfunc_iterator(): Iterator
    vfunc_foreach(f: ForallFunc): boolean
    vfunc_reserved0(): void
    vfunc_reserved1(): void
    vfunc_reserved2(): void
    vfunc_reserved3(): void
    vfunc_reserved4(): void
    vfunc_reserved5(): void
    vfunc_reserved6(): void
    vfunc_reserved7(): void
    vfunc_reserved8(): void
    vfunc_reserved9(): void
    vfunc_get_size(): number
    vfunc_get_read_only(): boolean
    vfunc_get_read_only_view(): Collection

    // Class property signals of Gee-0.8.Gee.AbstractCollection

    connect(sigName: "notify::g-type", callback: (($obj: AbstractCollection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-type", callback: (($obj: AbstractCollection, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-type", ...args: any[]): void
    connect(sigName: "notify::g-dup-func", callback: (($obj: AbstractCollection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-dup-func", callback: (($obj: AbstractCollection, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-dup-func", ...args: any[]): void
    connect(sigName: "notify::g-destroy-func", callback: (($obj: AbstractCollection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-destroy-func", callback: (($obj: AbstractCollection, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-destroy-func", ...args: any[]): void
    connect(sigName: "notify::size", callback: (($obj: AbstractCollection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: AbstractCollection, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::read-only", callback: (($obj: AbstractCollection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only", callback: (($obj: AbstractCollection, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only", ...args: any[]): void
    connect(sigName: "notify::read-only-view", callback: (($obj: AbstractCollection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: AbstractCollection, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only-view", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class AbstractCollection extends GObject.Object {

    // Own properties of Gee-0.8.Gee.AbstractCollection

    static name: string
    static $gtype: GObject.GType<AbstractCollection>

    // Constructors of Gee-0.8.Gee.AbstractCollection

    constructor(config?: AbstractCollection.ConstructorProperties) 
    _init(config?: AbstractCollection.ConstructorProperties): void
}

module AbstractList {

    // Constructor properties interface

    interface ConstructorProperties extends List.ConstructorProperties, AbstractCollection.ConstructorProperties {

        // Own constructor properties of Gee-0.8.Gee.AbstractList

        gType?: GObject.GType | null
        gDupFunc?: GObject.BoxedCopyFunc | null
        gDestroyFunc?: GLib.DestroyNotify | null
    }

}

interface AbstractList extends List {

    // Own properties of Gee-0.8.Gee.AbstractList

    readonly gType: GObject.GType
    readonly gDupFunc: GObject.BoxedCopyFunc
    readonly gDestroyFunc: GLib.DestroyNotify
    readonly readOnlyView: any

    // Owm methods of Gee-0.8.Gee.AbstractList

    list_iterator(): ListIterator
    get(index: number): any
    set(index: number, item: any): void
    index_of(item: any): number
    insert(index: number, item: any): void
    remove_at(index: number): any
    slice(start: number, stop: number): List | null
    reserved0(): void
    reserved1(): void
    reserved2(): void
    reserved3(): void
    reserved4(): void
    reserved5(): void
    reserved6(): void
    reserved7(): void
    reserved8(): void
    reserved9(): void
    get_read_only_view(): List

    // Overloads of get_read_only_view

    get_read_only_view(): List
    get_read_only_view(): Collection

    // Own virtual methods of Gee-0.8.Gee.AbstractList

    vfunc_list_iterator(): ListIterator
    vfunc_get(index: number): any
    vfunc_set(index: number, item: any): void
    vfunc_index_of(item: any): number
    vfunc_insert(index: number, item: any): void
    vfunc_remove_at(index: number): any
    vfunc_slice(start: number, stop: number): List | null
    vfunc_reserved0(): void
    vfunc_reserved1(): void
    vfunc_reserved2(): void
    vfunc_reserved3(): void
    vfunc_reserved4(): void
    vfunc_reserved5(): void
    vfunc_reserved6(): void
    vfunc_reserved7(): void
    vfunc_reserved8(): void
    vfunc_reserved9(): void
    vfunc_get_read_only_view(): List

    // Overloads of vfunc_get_read_only_view

    vfunc_get_read_only_view(): List
    vfunc_get_read_only_view(): Collection

    // Class property signals of Gee-0.8.Gee.AbstractList

    connect(sigName: "notify::g-type", callback: (($obj: AbstractList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-type", callback: (($obj: AbstractList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-type", ...args: any[]): void
    connect(sigName: "notify::g-dup-func", callback: (($obj: AbstractList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-dup-func", callback: (($obj: AbstractList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-dup-func", ...args: any[]): void
    connect(sigName: "notify::g-destroy-func", callback: (($obj: AbstractList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-destroy-func", callback: (($obj: AbstractList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-destroy-func", ...args: any[]): void
    connect(sigName: "notify::read-only-view", callback: (($obj: AbstractList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: AbstractList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only-view", ...args: any[]): void
    connect(sigName: "notify::size", callback: (($obj: AbstractList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: AbstractList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::read-only", callback: (($obj: AbstractList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only", callback: (($obj: AbstractList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class AbstractList extends AbstractCollection {

    // Own properties of Gee-0.8.Gee.AbstractList

    static name: string
    static $gtype: GObject.GType<AbstractList>

    // Constructors of Gee-0.8.Gee.AbstractList

    constructor(config?: AbstractList.ConstructorProperties) 
    _init(config?: AbstractList.ConstructorProperties): void

    // Conflicting static methods

    static empty(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify): List

    // Overloads of empty

    static empty(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify): Collection
    static empty(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify): Collection
}

module AbstractMap {

    // Constructor properties interface

    interface ConstructorProperties extends Traversable.ConstructorProperties, Iterable.ConstructorProperties, Map.ConstructorProperties, GObject.Object.ConstructorProperties {

        // Own constructor properties of Gee-0.8.Gee.AbstractMap

        kType?: GObject.GType | null
        kDupFunc?: GObject.BoxedCopyFunc | null
        kDestroyFunc?: GLib.DestroyNotify | null
        vType?: GObject.GType | null
        vDupFunc?: GObject.BoxedCopyFunc | null
        vDestroyFunc?: GLib.DestroyNotify | null
    }

}

interface AbstractMap extends Traversable, Iterable, Map {

    // Own properties of Gee-0.8.Gee.AbstractMap

    readonly kType: GObject.GType
    readonly kDupFunc: GObject.BoxedCopyFunc
    readonly kDestroyFunc: GLib.DestroyNotify
    readonly vType: GObject.GType
    readonly vDupFunc: GObject.BoxedCopyFunc
    readonly vDestroyFunc: GLib.DestroyNotify
    readonly size: number
    readonly readOnly: boolean
    readonly keys: Set
    readonly values: Collection
    readonly entries: Set
    readonly readOnlyView: Map

    // Owm methods of Gee-0.8.Gee.AbstractMap

    has_key(key: any): boolean
    has(key: any, value: any): boolean
    get(key: any): any | null
    set(key: any, value: any): void
    unset(key: any): [ /* returnType */ boolean, /* value */ any ]
    map_iterator(): MapIterator
    clear(): void
    foreach(f: ForallFunc): boolean
    stream(a_type: GObject.GType, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, f: StreamFunc): Iterator
    reserved0(): void
    reserved1(): void
    reserved2(): void
    reserved3(): void
    reserved4(): void
    reserved5(): void
    reserved6(): void
    reserved7(): void
    reserved8(): void
    reserved9(): void
    get_size(): number
    get_read_only(): boolean
    get_keys(): Set
    get_values(): Collection
    get_entries(): Set
    get_read_only_view(): Map

    // Own virtual methods of Gee-0.8.Gee.AbstractMap

    vfunc_has_key(key: any): boolean
    vfunc_has(key: any, value: any): boolean
    vfunc_get(key: any): any | null
    vfunc_set(key: any, value: any): void
    vfunc_unset(key: any): [ /* returnType */ boolean, /* value */ any ]
    vfunc_map_iterator(): MapIterator
    vfunc_clear(): void
    vfunc_foreach(f: ForallFunc): boolean
    vfunc_stream(a_type: GObject.GType, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, f: StreamFunc): Iterator
    vfunc_reserved0(): void
    vfunc_reserved1(): void
    vfunc_reserved2(): void
    vfunc_reserved3(): void
    vfunc_reserved4(): void
    vfunc_reserved5(): void
    vfunc_reserved6(): void
    vfunc_reserved7(): void
    vfunc_reserved8(): void
    vfunc_reserved9(): void
    vfunc_get_size(): number
    vfunc_get_read_only(): boolean
    vfunc_get_keys(): Set
    vfunc_get_values(): Collection
    vfunc_get_entries(): Set
    vfunc_get_read_only_view(): Map

    // Class property signals of Gee-0.8.Gee.AbstractMap

    connect(sigName: "notify::k-type", callback: (($obj: AbstractMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::k-type", callback: (($obj: AbstractMap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::k-type", ...args: any[]): void
    connect(sigName: "notify::k-dup-func", callback: (($obj: AbstractMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::k-dup-func", callback: (($obj: AbstractMap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::k-dup-func", ...args: any[]): void
    connect(sigName: "notify::k-destroy-func", callback: (($obj: AbstractMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::k-destroy-func", callback: (($obj: AbstractMap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::k-destroy-func", ...args: any[]): void
    connect(sigName: "notify::v-type", callback: (($obj: AbstractMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::v-type", callback: (($obj: AbstractMap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::v-type", ...args: any[]): void
    connect(sigName: "notify::v-dup-func", callback: (($obj: AbstractMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::v-dup-func", callback: (($obj: AbstractMap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::v-dup-func", ...args: any[]): void
    connect(sigName: "notify::v-destroy-func", callback: (($obj: AbstractMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::v-destroy-func", callback: (($obj: AbstractMap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::v-destroy-func", ...args: any[]): void
    connect(sigName: "notify::size", callback: (($obj: AbstractMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: AbstractMap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::read-only", callback: (($obj: AbstractMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only", callback: (($obj: AbstractMap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only", ...args: any[]): void
    connect(sigName: "notify::keys", callback: (($obj: AbstractMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::keys", callback: (($obj: AbstractMap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::keys", ...args: any[]): void
    connect(sigName: "notify::values", callback: (($obj: AbstractMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::values", callback: (($obj: AbstractMap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::values", ...args: any[]): void
    connect(sigName: "notify::entries", callback: (($obj: AbstractMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::entries", callback: (($obj: AbstractMap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::entries", ...args: any[]): void
    connect(sigName: "notify::read-only-view", callback: (($obj: AbstractMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: AbstractMap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only-view", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class AbstractMap extends GObject.Object {

    // Own properties of Gee-0.8.Gee.AbstractMap

    static name: string
    static $gtype: GObject.GType<AbstractMap>

    // Constructors of Gee-0.8.Gee.AbstractMap

    constructor(config?: AbstractMap.ConstructorProperties) 
    _init(config?: AbstractMap.ConstructorProperties): void
}

module AbstractMultiMap {

    // Constructor properties interface

    interface ConstructorProperties extends MultiMap.ConstructorProperties, GObject.Object.ConstructorProperties {

        // Own constructor properties of Gee-0.8.Gee.AbstractMultiMap

        kType?: GObject.GType | null
        kDupFunc?: GObject.BoxedCopyFunc | null
        kDestroyFunc?: GLib.DestroyNotify | null
        vType?: GObject.GType | null
        vDupFunc?: GObject.BoxedCopyFunc | null
        vDestroyFunc?: GLib.DestroyNotify | null
    }

}

interface AbstractMultiMap extends MultiMap {

    // Own properties of Gee-0.8.Gee.AbstractMultiMap

    readonly kType: GObject.GType
    readonly kDupFunc: GObject.BoxedCopyFunc
    readonly kDestroyFunc: GLib.DestroyNotify
    readonly vType: GObject.GType
    readonly vDupFunc: GObject.BoxedCopyFunc
    readonly vDestroyFunc: GLib.DestroyNotify

    // Own fields of Gee-0.8.Gee.AbstractMultiMap

    _storage_map: Map

    // Owm methods of Gee-0.8.Gee.AbstractMultiMap

    create_value_storage(): Collection
    create_multi_key_set(): MultiSet
    get_value_equal_func(): [ /* returnType */ EqualDataFunc, /* result_target */ any, /* result_target_destroy_notify */ GLib.DestroyNotify ]
    reserved0(): void
    reserved1(): void
    reserved2(): void
    reserved3(): void
    reserved4(): void
    reserved5(): void
    reserved6(): void
    reserved7(): void
    reserved8(): void
    get_read_only_view(): MultiMap

    // Own virtual methods of Gee-0.8.Gee.AbstractMultiMap

    vfunc_create_value_storage(): Collection
    vfunc_create_multi_key_set(): MultiSet
    vfunc_get_value_equal_func(): [ /* returnType */ EqualDataFunc, /* result_target */ any, /* result_target_destroy_notify */ GLib.DestroyNotify ]
    vfunc_reserved0(): void
    vfunc_reserved1(): void
    vfunc_reserved2(): void
    vfunc_reserved3(): void
    vfunc_reserved4(): void
    vfunc_reserved5(): void
    vfunc_reserved6(): void
    vfunc_reserved7(): void
    vfunc_reserved8(): void
    vfunc_get_read_only_view(): MultiMap

    // Class property signals of Gee-0.8.Gee.AbstractMultiMap

    connect(sigName: "notify::k-type", callback: (($obj: AbstractMultiMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::k-type", callback: (($obj: AbstractMultiMap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::k-type", ...args: any[]): void
    connect(sigName: "notify::k-dup-func", callback: (($obj: AbstractMultiMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::k-dup-func", callback: (($obj: AbstractMultiMap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::k-dup-func", ...args: any[]): void
    connect(sigName: "notify::k-destroy-func", callback: (($obj: AbstractMultiMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::k-destroy-func", callback: (($obj: AbstractMultiMap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::k-destroy-func", ...args: any[]): void
    connect(sigName: "notify::v-type", callback: (($obj: AbstractMultiMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::v-type", callback: (($obj: AbstractMultiMap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::v-type", ...args: any[]): void
    connect(sigName: "notify::v-dup-func", callback: (($obj: AbstractMultiMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::v-dup-func", callback: (($obj: AbstractMultiMap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::v-dup-func", ...args: any[]): void
    connect(sigName: "notify::v-destroy-func", callback: (($obj: AbstractMultiMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::v-destroy-func", callback: (($obj: AbstractMultiMap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::v-destroy-func", ...args: any[]): void
    connect(sigName: "notify::size", callback: (($obj: AbstractMultiMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: AbstractMultiMap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::read-only", callback: (($obj: AbstractMultiMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only", callback: (($obj: AbstractMultiMap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class AbstractMultiMap extends GObject.Object {

    // Own properties of Gee-0.8.Gee.AbstractMultiMap

    static name: string
    static $gtype: GObject.GType<AbstractMultiMap>

    // Constructors of Gee-0.8.Gee.AbstractMultiMap

    constructor(config?: AbstractMultiMap.ConstructorProperties) 
    _init(config?: AbstractMultiMap.ConstructorProperties): void
}

module AbstractMultiSet {

    // Constructor properties interface

    interface ConstructorProperties extends MultiSet.ConstructorProperties, AbstractCollection.ConstructorProperties {

        // Own constructor properties of Gee-0.8.Gee.AbstractMultiSet

        gType?: GObject.GType | null
        gDupFunc?: GObject.BoxedCopyFunc | null
        gDestroyFunc?: GLib.DestroyNotify | null
    }

}

interface AbstractMultiSet extends MultiSet {

    // Own properties of Gee-0.8.Gee.AbstractMultiSet

    readonly gType: GObject.GType
    readonly gDupFunc: GObject.BoxedCopyFunc
    readonly gDestroyFunc: GLib.DestroyNotify

    // Own fields of Gee-0.8.Gee.AbstractMultiSet

    _storage_map: Map

    // Owm methods of Gee-0.8.Gee.AbstractMultiSet

    reserved0(): void
    reserved1(): void
    reserved2(): void
    reserved3(): void
    reserved4(): void
    reserved5(): void
    reserved6(): void
    reserved7(): void
    reserved8(): void
    get_read_only_view(): MultiSet

    // Overloads of get_read_only_view

    get_read_only_view(): MultiSet
    get_read_only_view(): Collection

    // Own virtual methods of Gee-0.8.Gee.AbstractMultiSet

    vfunc_reserved0(): void
    vfunc_reserved1(): void
    vfunc_reserved2(): void
    vfunc_reserved3(): void
    vfunc_reserved4(): void
    vfunc_reserved5(): void
    vfunc_reserved6(): void
    vfunc_reserved7(): void
    vfunc_reserved8(): void
    vfunc_get_read_only_view(): MultiSet

    // Overloads of vfunc_get_read_only_view

    vfunc_get_read_only_view(): MultiSet
    vfunc_get_read_only_view(): Collection

    // Class property signals of Gee-0.8.Gee.AbstractMultiSet

    connect(sigName: "notify::g-type", callback: (($obj: AbstractMultiSet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-type", callback: (($obj: AbstractMultiSet, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-type", ...args: any[]): void
    connect(sigName: "notify::g-dup-func", callback: (($obj: AbstractMultiSet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-dup-func", callback: (($obj: AbstractMultiSet, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-dup-func", ...args: any[]): void
    connect(sigName: "notify::g-destroy-func", callback: (($obj: AbstractMultiSet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-destroy-func", callback: (($obj: AbstractMultiSet, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-destroy-func", ...args: any[]): void
    connect(sigName: "notify::size", callback: (($obj: AbstractMultiSet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: AbstractMultiSet, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::read-only", callback: (($obj: AbstractMultiSet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only", callback: (($obj: AbstractMultiSet, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only", ...args: any[]): void
    connect(sigName: "notify::read-only-view", callback: (($obj: AbstractMultiSet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: AbstractMultiSet, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only-view", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class AbstractMultiSet extends AbstractCollection {

    // Own properties of Gee-0.8.Gee.AbstractMultiSet

    static name: string
    static $gtype: GObject.GType<AbstractMultiSet>

    // Constructors of Gee-0.8.Gee.AbstractMultiSet

    constructor(config?: AbstractMultiSet.ConstructorProperties) 
    _init(config?: AbstractMultiSet.ConstructorProperties): void

    // Conflicting static methods

    static empty(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify): Set

    // Overloads of empty

    static empty(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify): Collection
    static empty(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify): Collection
}

module AbstractQueue {

    // Constructor properties interface

    interface ConstructorProperties extends Queue.ConstructorProperties, AbstractCollection.ConstructorProperties {

        // Own constructor properties of Gee-0.8.Gee.AbstractQueue

        gType?: GObject.GType | null
        gDupFunc?: GObject.BoxedCopyFunc | null
        gDestroyFunc?: GLib.DestroyNotify | null
    }

}

interface AbstractQueue extends Queue {

    // Own properties of Gee-0.8.Gee.AbstractQueue

    readonly gType: GObject.GType
    readonly gDupFunc: GObject.BoxedCopyFunc
    readonly gDestroyFunc: GLib.DestroyNotify
    readonly capacity: number
    readonly remainingCapacity: number
    readonly isFull: boolean

    // Owm methods of Gee-0.8.Gee.AbstractQueue

    peek(): any | null
    poll(): any | null
    reserved0(): void
    reserved1(): void
    reserved2(): void
    reserved3(): void
    reserved4(): void
    reserved5(): void
    reserved6(): void
    reserved7(): void
    reserved8(): void
    reserved9(): void
    get_capacity(): number
    get_remaining_capacity(): number
    get_is_full(): boolean

    // Own virtual methods of Gee-0.8.Gee.AbstractQueue

    vfunc_peek(): any | null
    vfunc_poll(): any | null
    vfunc_reserved0(): void
    vfunc_reserved1(): void
    vfunc_reserved2(): void
    vfunc_reserved3(): void
    vfunc_reserved4(): void
    vfunc_reserved5(): void
    vfunc_reserved6(): void
    vfunc_reserved7(): void
    vfunc_reserved8(): void
    vfunc_reserved9(): void
    vfunc_get_capacity(): number
    vfunc_get_remaining_capacity(): number
    vfunc_get_is_full(): boolean

    // Class property signals of Gee-0.8.Gee.AbstractQueue

    connect(sigName: "notify::g-type", callback: (($obj: AbstractQueue, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-type", callback: (($obj: AbstractQueue, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-type", ...args: any[]): void
    connect(sigName: "notify::g-dup-func", callback: (($obj: AbstractQueue, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-dup-func", callback: (($obj: AbstractQueue, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-dup-func", ...args: any[]): void
    connect(sigName: "notify::g-destroy-func", callback: (($obj: AbstractQueue, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-destroy-func", callback: (($obj: AbstractQueue, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-destroy-func", ...args: any[]): void
    connect(sigName: "notify::capacity", callback: (($obj: AbstractQueue, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::capacity", callback: (($obj: AbstractQueue, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::capacity", ...args: any[]): void
    connect(sigName: "notify::remaining-capacity", callback: (($obj: AbstractQueue, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::remaining-capacity", callback: (($obj: AbstractQueue, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::remaining-capacity", ...args: any[]): void
    connect(sigName: "notify::is-full", callback: (($obj: AbstractQueue, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-full", callback: (($obj: AbstractQueue, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-full", ...args: any[]): void
    connect(sigName: "notify::size", callback: (($obj: AbstractQueue, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: AbstractQueue, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::read-only", callback: (($obj: AbstractQueue, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only", callback: (($obj: AbstractQueue, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only", ...args: any[]): void
    connect(sigName: "notify::read-only-view", callback: (($obj: AbstractQueue, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: AbstractQueue, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only-view", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class AbstractQueue extends AbstractCollection {

    // Own properties of Gee-0.8.Gee.AbstractQueue

    static name: string
    static $gtype: GObject.GType<AbstractQueue>

    // Constructors of Gee-0.8.Gee.AbstractQueue

    constructor(config?: AbstractQueue.ConstructorProperties) 
    _init(config?: AbstractQueue.ConstructorProperties): void
}

module AbstractSet {

    // Constructor properties interface

    interface ConstructorProperties extends Set.ConstructorProperties, AbstractCollection.ConstructorProperties {

        // Own constructor properties of Gee-0.8.Gee.AbstractSet

        gType?: GObject.GType | null
        gDupFunc?: GObject.BoxedCopyFunc | null
        gDestroyFunc?: GLib.DestroyNotify | null
    }

}

interface AbstractSet extends Set {

    // Own properties of Gee-0.8.Gee.AbstractSet

    readonly gType: GObject.GType
    readonly gDupFunc: GObject.BoxedCopyFunc
    readonly gDestroyFunc: GLib.DestroyNotify
    readonly readOnlyView: any

    // Owm methods of Gee-0.8.Gee.AbstractSet

    reserved0(): void
    reserved1(): void
    reserved2(): void
    reserved3(): void
    reserved4(): void
    reserved5(): void
    reserved6(): void
    reserved7(): void
    reserved8(): void
    reserved9(): void
    get_read_only_view(): Set

    // Overloads of get_read_only_view

    get_read_only_view(): Set
    get_read_only_view(): Collection

    // Own virtual methods of Gee-0.8.Gee.AbstractSet

    vfunc_reserved0(): void
    vfunc_reserved1(): void
    vfunc_reserved2(): void
    vfunc_reserved3(): void
    vfunc_reserved4(): void
    vfunc_reserved5(): void
    vfunc_reserved6(): void
    vfunc_reserved7(): void
    vfunc_reserved8(): void
    vfunc_reserved9(): void
    vfunc_get_read_only_view(): Set

    // Overloads of vfunc_get_read_only_view

    vfunc_get_read_only_view(): Set
    vfunc_get_read_only_view(): Collection

    // Class property signals of Gee-0.8.Gee.AbstractSet

    connect(sigName: "notify::g-type", callback: (($obj: AbstractSet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-type", callback: (($obj: AbstractSet, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-type", ...args: any[]): void
    connect(sigName: "notify::g-dup-func", callback: (($obj: AbstractSet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-dup-func", callback: (($obj: AbstractSet, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-dup-func", ...args: any[]): void
    connect(sigName: "notify::g-destroy-func", callback: (($obj: AbstractSet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-destroy-func", callback: (($obj: AbstractSet, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-destroy-func", ...args: any[]): void
    connect(sigName: "notify::read-only-view", callback: (($obj: AbstractSet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: AbstractSet, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only-view", ...args: any[]): void
    connect(sigName: "notify::size", callback: (($obj: AbstractSet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: AbstractSet, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::read-only", callback: (($obj: AbstractSet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only", callback: (($obj: AbstractSet, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class AbstractSet extends AbstractCollection {

    // Own properties of Gee-0.8.Gee.AbstractSet

    static name: string
    static $gtype: GObject.GType<AbstractSet>

    // Constructors of Gee-0.8.Gee.AbstractSet

    constructor(config?: AbstractSet.ConstructorProperties) 
    _init(config?: AbstractSet.ConstructorProperties): void

    // Conflicting static methods

    static empty(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify): Set

    // Overloads of empty

    static empty(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify): Collection
    static empty(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify): Collection
}

module AbstractSortedMap {

    // Constructor properties interface

    interface ConstructorProperties extends SortedMap.ConstructorProperties, AbstractMap.ConstructorProperties {

        // Own constructor properties of Gee-0.8.Gee.AbstractSortedMap

        kType?: GObject.GType | null
        kDupFunc?: GObject.BoxedCopyFunc | null
        kDestroyFunc?: GLib.DestroyNotify | null
        vType?: GObject.GType | null
        vDupFunc?: GObject.BoxedCopyFunc | null
        vDestroyFunc?: GLib.DestroyNotify | null
    }

}

interface AbstractSortedMap extends SortedMap {

    // Own properties of Gee-0.8.Gee.AbstractSortedMap

    readonly kType: GObject.GType
    readonly kDupFunc: GObject.BoxedCopyFunc
    readonly kDestroyFunc: GLib.DestroyNotify
    readonly vType: GObject.GType
    readonly vDupFunc: GObject.BoxedCopyFunc
    readonly vDestroyFunc: GLib.DestroyNotify
    readonly ascendingKeys: SortedSet
    readonly ascendingEntries: SortedSet

    // Conflicting properties

    readOnlyView: any

    // Owm methods of Gee-0.8.Gee.AbstractSortedMap

    head_map(before: any): SortedMap
    tail_map(after: any): SortedMap
    sub_map(before: any, after: any): SortedMap
    reserved0(): void
    reserved1(): void
    reserved2(): void
    reserved3(): void
    reserved4(): void
    reserved5(): void
    reserved6(): void
    reserved7(): void
    reserved8(): void
    reserved9(): void
    get_ascending_keys(): SortedSet
    get_ascending_entries(): SortedSet

    // Conflicting methods

    get_read_only_view(): SortedMap

    // Overloads of get_read_only_view

    get_read_only_view(): Map
    get_read_only_view(): Map
    get_read_only_view(): Map
    vfunc_get_read_only_view(): SortedMap

    // Overloads of vfunc_get_read_only_view

    vfunc_get_read_only_view(): Map
    vfunc_get_read_only_view(): Map
    vfunc_get_read_only_view(): Map

    // Own virtual methods of Gee-0.8.Gee.AbstractSortedMap

    vfunc_head_map(before: any): SortedMap
    vfunc_tail_map(after: any): SortedMap
    vfunc_sub_map(before: any, after: any): SortedMap
    vfunc_reserved0(): void
    vfunc_reserved1(): void
    vfunc_reserved2(): void
    vfunc_reserved3(): void
    vfunc_reserved4(): void
    vfunc_reserved5(): void
    vfunc_reserved6(): void
    vfunc_reserved7(): void
    vfunc_reserved8(): void
    vfunc_reserved9(): void
    vfunc_get_ascending_keys(): SortedSet
    vfunc_get_ascending_entries(): SortedSet

    // Class property signals of Gee-0.8.Gee.AbstractSortedMap

    connect(sigName: "notify::k-type", callback: (($obj: AbstractSortedMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::k-type", callback: (($obj: AbstractSortedMap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::k-type", ...args: any[]): void
    connect(sigName: "notify::k-dup-func", callback: (($obj: AbstractSortedMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::k-dup-func", callback: (($obj: AbstractSortedMap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::k-dup-func", ...args: any[]): void
    connect(sigName: "notify::k-destroy-func", callback: (($obj: AbstractSortedMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::k-destroy-func", callback: (($obj: AbstractSortedMap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::k-destroy-func", ...args: any[]): void
    connect(sigName: "notify::v-type", callback: (($obj: AbstractSortedMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::v-type", callback: (($obj: AbstractSortedMap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::v-type", ...args: any[]): void
    connect(sigName: "notify::v-dup-func", callback: (($obj: AbstractSortedMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::v-dup-func", callback: (($obj: AbstractSortedMap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::v-dup-func", ...args: any[]): void
    connect(sigName: "notify::v-destroy-func", callback: (($obj: AbstractSortedMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::v-destroy-func", callback: (($obj: AbstractSortedMap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::v-destroy-func", ...args: any[]): void
    connect(sigName: "notify::ascending-keys", callback: (($obj: AbstractSortedMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ascending-keys", callback: (($obj: AbstractSortedMap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::ascending-keys", ...args: any[]): void
    connect(sigName: "notify::ascending-entries", callback: (($obj: AbstractSortedMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ascending-entries", callback: (($obj: AbstractSortedMap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::ascending-entries", ...args: any[]): void
    connect(sigName: "notify::size", callback: (($obj: AbstractSortedMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: AbstractSortedMap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::read-only", callback: (($obj: AbstractSortedMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only", callback: (($obj: AbstractSortedMap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only", ...args: any[]): void
    connect(sigName: "notify::keys", callback: (($obj: AbstractSortedMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::keys", callback: (($obj: AbstractSortedMap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::keys", ...args: any[]): void
    connect(sigName: "notify::values", callback: (($obj: AbstractSortedMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::values", callback: (($obj: AbstractSortedMap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::values", ...args: any[]): void
    connect(sigName: "notify::entries", callback: (($obj: AbstractSortedMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::entries", callback: (($obj: AbstractSortedMap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::entries", ...args: any[]): void
    connect(sigName: "notify::read-only-view", callback: (($obj: AbstractSortedMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: AbstractSortedMap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only-view", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class AbstractSortedMap extends AbstractMap {

    // Own properties of Gee-0.8.Gee.AbstractSortedMap

    static name: string
    static $gtype: GObject.GType<AbstractSortedMap>

    // Constructors of Gee-0.8.Gee.AbstractSortedMap

    constructor(config?: AbstractSortedMap.ConstructorProperties) 
    _init(config?: AbstractSortedMap.ConstructorProperties): void
}

module AbstractSortedSet {

    // Constructor properties interface

    interface ConstructorProperties extends SortedSet.ConstructorProperties, AbstractSet.ConstructorProperties {

        // Own constructor properties of Gee-0.8.Gee.AbstractSortedSet

        gType?: GObject.GType | null
        gDupFunc?: GObject.BoxedCopyFunc | null
        gDestroyFunc?: GLib.DestroyNotify | null
    }

}

interface AbstractSortedSet extends SortedSet {

    // Own properties of Gee-0.8.Gee.AbstractSortedSet

    readonly gType: GObject.GType
    readonly gDupFunc: GObject.BoxedCopyFunc
    readonly gDestroyFunc: GLib.DestroyNotify
    readonly readOnlyView: any

    // Owm methods of Gee-0.8.Gee.AbstractSortedSet

    first(): any
    last(): any
    iterator_at(element: any): Iterator | null
    lower(element: any): any | null
    higher(element: any): any | null
    floor(element: any): any | null
    ceil(element: any): any | null
    head_set(before: any): SortedSet
    tail_set(after: any): SortedSet
    sub_set(from: any, to: any): SortedSet
    reserved0(): void
    reserved1(): void
    reserved2(): void
    reserved3(): void
    reserved4(): void
    reserved5(): void
    reserved6(): void
    reserved7(): void
    reserved8(): void
    reserved9(): void
    get_read_only_view(): SortedSet

    // Overloads of get_read_only_view

    get_read_only_view(): SortedSet
    get_read_only_view(): Set
    get_read_only_view(): Collection

    // Own virtual methods of Gee-0.8.Gee.AbstractSortedSet

    vfunc_first(): any
    vfunc_last(): any
    vfunc_iterator_at(element: any): Iterator | null
    vfunc_lower(element: any): any | null
    vfunc_higher(element: any): any | null
    vfunc_floor(element: any): any | null
    vfunc_ceil(element: any): any | null
    vfunc_head_set(before: any): SortedSet
    vfunc_tail_set(after: any): SortedSet
    vfunc_sub_set(from: any, to: any): SortedSet
    vfunc_reserved0(): void
    vfunc_reserved1(): void
    vfunc_reserved2(): void
    vfunc_reserved3(): void
    vfunc_reserved4(): void
    vfunc_reserved5(): void
    vfunc_reserved6(): void
    vfunc_reserved7(): void
    vfunc_reserved8(): void
    vfunc_reserved9(): void
    vfunc_get_read_only_view(): SortedSet

    // Overloads of vfunc_get_read_only_view

    vfunc_get_read_only_view(): SortedSet
    vfunc_get_read_only_view(): Set
    vfunc_get_read_only_view(): Collection

    // Class property signals of Gee-0.8.Gee.AbstractSortedSet

    connect(sigName: "notify::g-type", callback: (($obj: AbstractSortedSet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-type", callback: (($obj: AbstractSortedSet, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-type", ...args: any[]): void
    connect(sigName: "notify::g-dup-func", callback: (($obj: AbstractSortedSet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-dup-func", callback: (($obj: AbstractSortedSet, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-dup-func", ...args: any[]): void
    connect(sigName: "notify::g-destroy-func", callback: (($obj: AbstractSortedSet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-destroy-func", callback: (($obj: AbstractSortedSet, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-destroy-func", ...args: any[]): void
    connect(sigName: "notify::read-only-view", callback: (($obj: AbstractSortedSet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: AbstractSortedSet, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only-view", ...args: any[]): void
    connect(sigName: "notify::size", callback: (($obj: AbstractSortedSet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: AbstractSortedSet, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::read-only", callback: (($obj: AbstractSortedSet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only", callback: (($obj: AbstractSortedSet, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class AbstractSortedSet extends AbstractSet {

    // Own properties of Gee-0.8.Gee.AbstractSortedSet

    static name: string
    static $gtype: GObject.GType<AbstractSortedSet>

    // Constructors of Gee-0.8.Gee.AbstractSortedSet

    constructor(config?: AbstractSortedSet.ConstructorProperties) 
    _init(config?: AbstractSortedSet.ConstructorProperties): void

    // Conflicting static methods

    static empty(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify): SortedSet

    // Overloads of empty

    static empty(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify): Set
    static empty(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify): Collection
    static empty(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify): Set

    // Overloads of empty

    static empty(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify): Collection
    static empty(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify): Collection
}

module ArrayList {

    // Constructor properties interface

    interface ConstructorProperties extends AbstractBidirList.ConstructorProperties {

        // Own constructor properties of Gee-0.8.Gee.ArrayList

        gType?: GObject.GType | null
        gDupFunc?: GObject.BoxedCopyFunc | null
        gDestroyFunc?: GLib.DestroyNotify | null
    }

}

interface ArrayList {

    // Own properties of Gee-0.8.Gee.ArrayList

    readonly gType: GObject.GType
    readonly gDupFunc: GObject.BoxedCopyFunc
    readonly gDestroyFunc: GLib.DestroyNotify

    // Conflicting properties

    readOnlyView: any

    // Own fields of Gee-0.8.Gee.ArrayList

    _items: any[]
    _items_length1: number
    _size: number

    // Owm methods of Gee-0.8.Gee.ArrayList

    add_all(collection: Collection): boolean
    get_equal_func(): [ /* returnType */ EqualDataFunc, /* result_target */ any ]

    // Conflicting methods

    get_read_only_view(): BidirList

    // Overloads of get_read_only_view

    get_read_only_view(): BidirList
    get_read_only_view(): List
    get_read_only_view(): Collection
    get_read_only_view(): BidirList

    // Overloads of get_read_only_view

    get_read_only_view(): List
    get_read_only_view(): Collection
    get_read_only_view(): List

    // Overloads of get_read_only_view

    get_read_only_view(): List
    get_read_only_view(): Collection
    get_read_only_view(): List

    // Overloads of get_read_only_view

    get_read_only_view(): Collection
    get_read_only_view(): Collection
    get_read_only_view(): Collection
    vfunc_get_read_only_view(): BidirList

    // Overloads of vfunc_get_read_only_view

    vfunc_get_read_only_view(): BidirList
    vfunc_get_read_only_view(): List
    vfunc_get_read_only_view(): Collection
    vfunc_get_read_only_view(): BidirList

    // Overloads of vfunc_get_read_only_view

    vfunc_get_read_only_view(): List
    vfunc_get_read_only_view(): Collection
    vfunc_get_read_only_view(): List

    // Overloads of vfunc_get_read_only_view

    vfunc_get_read_only_view(): List
    vfunc_get_read_only_view(): Collection
    vfunc_get_read_only_view(): List

    // Overloads of vfunc_get_read_only_view

    vfunc_get_read_only_view(): Collection
    vfunc_get_read_only_view(): Collection
    vfunc_get_read_only_view(): Collection

    // Class property signals of Gee-0.8.Gee.ArrayList

    connect(sigName: "notify::g-type", callback: (($obj: ArrayList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-type", callback: (($obj: ArrayList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-type", ...args: any[]): void
    connect(sigName: "notify::g-dup-func", callback: (($obj: ArrayList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-dup-func", callback: (($obj: ArrayList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-dup-func", ...args: any[]): void
    connect(sigName: "notify::g-destroy-func", callback: (($obj: ArrayList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-destroy-func", callback: (($obj: ArrayList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-destroy-func", ...args: any[]): void
    connect(sigName: "notify::read-only-view", callback: (($obj: ArrayList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: ArrayList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only-view", ...args: any[]): void
    connect(sigName: "notify::size", callback: (($obj: ArrayList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: ArrayList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::read-only", callback: (($obj: ArrayList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only", callback: (($obj: ArrayList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class ArrayList extends AbstractBidirList {

    // Own properties of Gee-0.8.Gee.ArrayList

    static name: string
    static $gtype: GObject.GType<ArrayList>

    // Constructors of Gee-0.8.Gee.ArrayList

    constructor(config?: ArrayList.ConstructorProperties) 
    constructor(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, equal_func: EqualDataFunc | null) 
    static new(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, equal_func: EqualDataFunc | null): ArrayList
    static wrap(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, items: any[], equal_func: EqualDataFunc | null): ArrayList
    _init(config?: ArrayList.ConstructorProperties): void

    // Conflicting static methods

    static empty(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify): List

    // Overloads of empty

    static empty(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify): Collection
    static empty(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify): Collection
}

module ArrayQueue {

    // Constructor properties interface

    interface ConstructorProperties extends Deque.ConstructorProperties, AbstractQueue.ConstructorProperties {

        // Own constructor properties of Gee-0.8.Gee.ArrayQueue

        gType?: GObject.GType | null
        gDupFunc?: GObject.BoxedCopyFunc | null
        gDestroyFunc?: GLib.DestroyNotify | null
    }

}

interface ArrayQueue extends Deque {

    // Own properties of Gee-0.8.Gee.ArrayQueue

    readonly gType: GObject.GType
    readonly gDupFunc: GObject.BoxedCopyFunc
    readonly gDestroyFunc: GLib.DestroyNotify
    readonly isEmpty: boolean

    // Owm methods of Gee-0.8.Gee.ArrayQueue

    get_equal_func(): [ /* returnType */ EqualDataFunc, /* result_target */ any ]
    get_is_empty(): boolean

    // Class property signals of Gee-0.8.Gee.ArrayQueue

    connect(sigName: "notify::g-type", callback: (($obj: ArrayQueue, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-type", callback: (($obj: ArrayQueue, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-type", ...args: any[]): void
    connect(sigName: "notify::g-dup-func", callback: (($obj: ArrayQueue, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-dup-func", callback: (($obj: ArrayQueue, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-dup-func", ...args: any[]): void
    connect(sigName: "notify::g-destroy-func", callback: (($obj: ArrayQueue, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-destroy-func", callback: (($obj: ArrayQueue, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-destroy-func", ...args: any[]): void
    connect(sigName: "notify::is-empty", callback: (($obj: ArrayQueue, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-empty", callback: (($obj: ArrayQueue, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-empty", ...args: any[]): void
    connect(sigName: "notify::capacity", callback: (($obj: ArrayQueue, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::capacity", callback: (($obj: ArrayQueue, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::capacity", ...args: any[]): void
    connect(sigName: "notify::remaining-capacity", callback: (($obj: ArrayQueue, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::remaining-capacity", callback: (($obj: ArrayQueue, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::remaining-capacity", ...args: any[]): void
    connect(sigName: "notify::is-full", callback: (($obj: ArrayQueue, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-full", callback: (($obj: ArrayQueue, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-full", ...args: any[]): void
    connect(sigName: "notify::size", callback: (($obj: ArrayQueue, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: ArrayQueue, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::read-only", callback: (($obj: ArrayQueue, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only", callback: (($obj: ArrayQueue, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only", ...args: any[]): void
    connect(sigName: "notify::read-only-view", callback: (($obj: ArrayQueue, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: ArrayQueue, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only-view", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class ArrayQueue extends AbstractQueue {

    // Own properties of Gee-0.8.Gee.ArrayQueue

    static name: string
    static $gtype: GObject.GType<ArrayQueue>

    // Constructors of Gee-0.8.Gee.ArrayQueue

    constructor(config?: ArrayQueue.ConstructorProperties) 
    constructor(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, equal_func: EqualDataFunc | null) 
    static new(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, equal_func: EqualDataFunc | null): ArrayQueue
    _init(config?: ArrayQueue.ConstructorProperties): void
}

module ConcurrentList {

    // Constructor properties interface

    interface ConstructorProperties extends AbstractList.ConstructorProperties {

        // Own constructor properties of Gee-0.8.Gee.ConcurrentList

        gType?: GObject.GType | null
        gDupFunc?: GObject.BoxedCopyFunc | null
        gDestroyFunc?: GLib.DestroyNotify | null
    }

}

interface ConcurrentList {

    // Own properties of Gee-0.8.Gee.ConcurrentList

    readonly gType: GObject.GType
    readonly gDupFunc: GObject.BoxedCopyFunc
    readonly gDestroyFunc: GLib.DestroyNotify
    readonly isEmpty: boolean

    // Conflicting properties

    readOnlyView: any

    // Owm methods of Gee-0.8.Gee.ConcurrentList

    get_equal_func(): [ /* returnType */ EqualDataFunc, /* result_target */ any ]
    get_is_empty(): boolean

    // Conflicting methods

    get_read_only_view(): List

    // Overloads of get_read_only_view

    get_read_only_view(): List
    get_read_only_view(): Collection
    get_read_only_view(): List

    // Overloads of get_read_only_view

    get_read_only_view(): Collection
    get_read_only_view(): Collection
    get_read_only_view(): Collection
    vfunc_get_read_only_view(): List

    // Overloads of vfunc_get_read_only_view

    vfunc_get_read_only_view(): List
    vfunc_get_read_only_view(): Collection
    vfunc_get_read_only_view(): List

    // Overloads of vfunc_get_read_only_view

    vfunc_get_read_only_view(): Collection
    vfunc_get_read_only_view(): Collection
    vfunc_get_read_only_view(): Collection

    // Class property signals of Gee-0.8.Gee.ConcurrentList

    connect(sigName: "notify::g-type", callback: (($obj: ConcurrentList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-type", callback: (($obj: ConcurrentList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-type", ...args: any[]): void
    connect(sigName: "notify::g-dup-func", callback: (($obj: ConcurrentList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-dup-func", callback: (($obj: ConcurrentList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-dup-func", ...args: any[]): void
    connect(sigName: "notify::g-destroy-func", callback: (($obj: ConcurrentList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-destroy-func", callback: (($obj: ConcurrentList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-destroy-func", ...args: any[]): void
    connect(sigName: "notify::is-empty", callback: (($obj: ConcurrentList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-empty", callback: (($obj: ConcurrentList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-empty", ...args: any[]): void
    connect(sigName: "notify::read-only-view", callback: (($obj: ConcurrentList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: ConcurrentList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only-view", ...args: any[]): void
    connect(sigName: "notify::size", callback: (($obj: ConcurrentList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: ConcurrentList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::read-only", callback: (($obj: ConcurrentList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only", callback: (($obj: ConcurrentList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class ConcurrentList extends AbstractList {

    // Own properties of Gee-0.8.Gee.ConcurrentList

    static name: string
    static $gtype: GObject.GType<ConcurrentList>

    // Constructors of Gee-0.8.Gee.ConcurrentList

    constructor(config?: ConcurrentList.ConstructorProperties) 
    constructor(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, equal_func: EqualDataFunc | null) 
    static new(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, equal_func: EqualDataFunc | null): ConcurrentList
    _init(config?: ConcurrentList.ConstructorProperties): void

    // Conflicting static methods

    static empty(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify): List

    // Overloads of empty

    static empty(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify): Collection
    static empty(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify): Collection
}

module ConcurrentSet {

    // Constructor properties interface

    interface ConstructorProperties extends AbstractSortedSet.ConstructorProperties {

        // Own constructor properties of Gee-0.8.Gee.ConcurrentSet

        gType?: GObject.GType | null
        gDupFunc?: GObject.BoxedCopyFunc | null
        gDestroyFunc?: GLib.DestroyNotify | null
    }

}

interface ConcurrentSet {

    // Own properties of Gee-0.8.Gee.ConcurrentSet

    readonly gType: GObject.GType
    readonly gDupFunc: GObject.BoxedCopyFunc
    readonly gDestroyFunc: GLib.DestroyNotify

    // Conflicting properties

    readOnlyView: any

    // Conflicting methods

    get_read_only_view(): SortedSet

    // Overloads of get_read_only_view

    get_read_only_view(): SortedSet
    get_read_only_view(): Set
    get_read_only_view(): Collection
    get_read_only_view(): SortedSet

    // Overloads of get_read_only_view

    get_read_only_view(): Set
    get_read_only_view(): Collection
    get_read_only_view(): Set

    // Overloads of get_read_only_view

    get_read_only_view(): Set
    get_read_only_view(): Collection
    get_read_only_view(): Set

    // Overloads of get_read_only_view

    get_read_only_view(): Collection
    get_read_only_view(): Collection
    get_read_only_view(): Collection
    vfunc_get_read_only_view(): SortedSet

    // Overloads of vfunc_get_read_only_view

    vfunc_get_read_only_view(): SortedSet
    vfunc_get_read_only_view(): Set
    vfunc_get_read_only_view(): Collection
    vfunc_get_read_only_view(): SortedSet

    // Overloads of vfunc_get_read_only_view

    vfunc_get_read_only_view(): Set
    vfunc_get_read_only_view(): Collection
    vfunc_get_read_only_view(): Set

    // Overloads of vfunc_get_read_only_view

    vfunc_get_read_only_view(): Set
    vfunc_get_read_only_view(): Collection
    vfunc_get_read_only_view(): Set

    // Overloads of vfunc_get_read_only_view

    vfunc_get_read_only_view(): Collection
    vfunc_get_read_only_view(): Collection
    vfunc_get_read_only_view(): Collection

    // Class property signals of Gee-0.8.Gee.ConcurrentSet

    connect(sigName: "notify::g-type", callback: (($obj: ConcurrentSet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-type", callback: (($obj: ConcurrentSet, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-type", ...args: any[]): void
    connect(sigName: "notify::g-dup-func", callback: (($obj: ConcurrentSet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-dup-func", callback: (($obj: ConcurrentSet, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-dup-func", ...args: any[]): void
    connect(sigName: "notify::g-destroy-func", callback: (($obj: ConcurrentSet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-destroy-func", callback: (($obj: ConcurrentSet, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-destroy-func", ...args: any[]): void
    connect(sigName: "notify::read-only-view", callback: (($obj: ConcurrentSet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: ConcurrentSet, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only-view", ...args: any[]): void
    connect(sigName: "notify::size", callback: (($obj: ConcurrentSet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: ConcurrentSet, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::read-only", callback: (($obj: ConcurrentSet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only", callback: (($obj: ConcurrentSet, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class ConcurrentSet extends AbstractSortedSet {

    // Own properties of Gee-0.8.Gee.ConcurrentSet

    static name: string
    static $gtype: GObject.GType<ConcurrentSet>

    // Constructors of Gee-0.8.Gee.ConcurrentSet

    constructor(config?: ConcurrentSet.ConstructorProperties) 
    constructor(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, compare_func: GLib.CompareDataFunc | null) 
    static new(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, compare_func: GLib.CompareDataFunc | null): ConcurrentSet
    _init(config?: ConcurrentSet.ConstructorProperties): void

    // Conflicting static methods

    static empty(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify): SortedSet

    // Overloads of empty

    static empty(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify): Set
    static empty(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify): Collection
    static empty(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify): Set

    // Overloads of empty

    static empty(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify): Collection
    static empty(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify): Collection
}

module HashMap {

    // Constructor properties interface

    interface ConstructorProperties extends AbstractMap.ConstructorProperties {

        // Own constructor properties of Gee-0.8.Gee.HashMap

        kType?: GObject.GType | null
        kDupFunc?: GObject.BoxedCopyFunc | null
        kDestroyFunc?: GLib.DestroyNotify | null
        vType?: GObject.GType | null
        vDupFunc?: GObject.BoxedCopyFunc | null
        vDestroyFunc?: GLib.DestroyNotify | null
    }

}

interface HashMap {

    // Own properties of Gee-0.8.Gee.HashMap

    readonly kType: GObject.GType
    readonly kDupFunc: GObject.BoxedCopyFunc
    readonly kDestroyFunc: GLib.DestroyNotify
    readonly vType: GObject.GType
    readonly vDupFunc: GObject.BoxedCopyFunc
    readonly vDestroyFunc: GLib.DestroyNotify

    // Owm methods of Gee-0.8.Gee.HashMap

    get_key_hash_func(): [ /* returnType */ HashDataFunc, /* result_target */ any ]
    get_key_equal_func(): [ /* returnType */ EqualDataFunc, /* result_target */ any ]
    get_value_equal_func(): [ /* returnType */ EqualDataFunc, /* result_target */ any ]

    // Class property signals of Gee-0.8.Gee.HashMap

    connect(sigName: "notify::k-type", callback: (($obj: HashMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::k-type", callback: (($obj: HashMap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::k-type", ...args: any[]): void
    connect(sigName: "notify::k-dup-func", callback: (($obj: HashMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::k-dup-func", callback: (($obj: HashMap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::k-dup-func", ...args: any[]): void
    connect(sigName: "notify::k-destroy-func", callback: (($obj: HashMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::k-destroy-func", callback: (($obj: HashMap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::k-destroy-func", ...args: any[]): void
    connect(sigName: "notify::v-type", callback: (($obj: HashMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::v-type", callback: (($obj: HashMap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::v-type", ...args: any[]): void
    connect(sigName: "notify::v-dup-func", callback: (($obj: HashMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::v-dup-func", callback: (($obj: HashMap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::v-dup-func", ...args: any[]): void
    connect(sigName: "notify::v-destroy-func", callback: (($obj: HashMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::v-destroy-func", callback: (($obj: HashMap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::v-destroy-func", ...args: any[]): void
    connect(sigName: "notify::size", callback: (($obj: HashMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: HashMap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::read-only", callback: (($obj: HashMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only", callback: (($obj: HashMap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only", ...args: any[]): void
    connect(sigName: "notify::keys", callback: (($obj: HashMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::keys", callback: (($obj: HashMap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::keys", ...args: any[]): void
    connect(sigName: "notify::values", callback: (($obj: HashMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::values", callback: (($obj: HashMap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::values", ...args: any[]): void
    connect(sigName: "notify::entries", callback: (($obj: HashMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::entries", callback: (($obj: HashMap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::entries", ...args: any[]): void
    connect(sigName: "notify::read-only-view", callback: (($obj: HashMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: HashMap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only-view", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class HashMap extends AbstractMap {

    // Own properties of Gee-0.8.Gee.HashMap

    static name: string
    static $gtype: GObject.GType<HashMap>

    // Constructors of Gee-0.8.Gee.HashMap

    constructor(config?: HashMap.ConstructorProperties) 
    constructor(k_type: GObject.GType, k_dup_func: GObject.BoxedCopyFunc, k_destroy_func: GLib.DestroyNotify, v_type: GObject.GType, v_dup_func: GObject.BoxedCopyFunc, v_destroy_func: GLib.DestroyNotify, key_hash_func: HashDataFunc | null, key_equal_func: EqualDataFunc | null, value_equal_func: EqualDataFunc | null) 
    static new(k_type: GObject.GType, k_dup_func: GObject.BoxedCopyFunc, k_destroy_func: GLib.DestroyNotify, v_type: GObject.GType, v_dup_func: GObject.BoxedCopyFunc, v_destroy_func: GLib.DestroyNotify, key_hash_func: HashDataFunc | null, key_equal_func: EqualDataFunc | null, value_equal_func: EqualDataFunc | null): HashMap
    _init(config?: HashMap.ConstructorProperties): void
}

module HashMultiMap {

    // Constructor properties interface

    interface ConstructorProperties extends AbstractMultiMap.ConstructorProperties {

        // Own constructor properties of Gee-0.8.Gee.HashMultiMap

        kType?: GObject.GType | null
        kDupFunc?: GObject.BoxedCopyFunc | null
        kDestroyFunc?: GLib.DestroyNotify | null
        vType?: GObject.GType | null
        vDupFunc?: GObject.BoxedCopyFunc | null
        vDestroyFunc?: GLib.DestroyNotify | null
    }

}

interface HashMultiMap {

    // Own properties of Gee-0.8.Gee.HashMultiMap

    readonly kType: GObject.GType
    readonly kDupFunc: GObject.BoxedCopyFunc
    readonly kDestroyFunc: GLib.DestroyNotify
    readonly vType: GObject.GType
    readonly vDupFunc: GObject.BoxedCopyFunc
    readonly vDestroyFunc: GLib.DestroyNotify

    // Owm methods of Gee-0.8.Gee.HashMultiMap

    get_key_hash_func(): [ /* returnType */ HashDataFunc, /* result_target */ any ]
    get_key_equal_func(): [ /* returnType */ EqualDataFunc, /* result_target */ any ]
    get_value_hash_func(): [ /* returnType */ HashDataFunc, /* result_target */ any ]
    get_value_equal_func(): [ /* returnType */ EqualDataFunc, /* result_target */ any ]

    // Overloads of get_value_equal_func

    get_value_equal_func(): [ /* returnType */ EqualDataFunc, /* result_target */ any, /* result_target_destroy_notify */ GLib.DestroyNotify ]

    // Class property signals of Gee-0.8.Gee.HashMultiMap

    connect(sigName: "notify::k-type", callback: (($obj: HashMultiMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::k-type", callback: (($obj: HashMultiMap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::k-type", ...args: any[]): void
    connect(sigName: "notify::k-dup-func", callback: (($obj: HashMultiMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::k-dup-func", callback: (($obj: HashMultiMap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::k-dup-func", ...args: any[]): void
    connect(sigName: "notify::k-destroy-func", callback: (($obj: HashMultiMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::k-destroy-func", callback: (($obj: HashMultiMap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::k-destroy-func", ...args: any[]): void
    connect(sigName: "notify::v-type", callback: (($obj: HashMultiMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::v-type", callback: (($obj: HashMultiMap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::v-type", ...args: any[]): void
    connect(sigName: "notify::v-dup-func", callback: (($obj: HashMultiMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::v-dup-func", callback: (($obj: HashMultiMap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::v-dup-func", ...args: any[]): void
    connect(sigName: "notify::v-destroy-func", callback: (($obj: HashMultiMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::v-destroy-func", callback: (($obj: HashMultiMap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::v-destroy-func", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class HashMultiMap extends AbstractMultiMap {

    // Own properties of Gee-0.8.Gee.HashMultiMap

    static name: string
    static $gtype: GObject.GType<HashMultiMap>

    // Constructors of Gee-0.8.Gee.HashMultiMap

    constructor(config?: HashMultiMap.ConstructorProperties) 
    constructor(k_type: GObject.GType, k_dup_func: GObject.BoxedCopyFunc, k_destroy_func: GLib.DestroyNotify, v_type: GObject.GType, v_dup_func: GObject.BoxedCopyFunc, v_destroy_func: GLib.DestroyNotify, key_hash_func: HashDataFunc | null, key_equal_func: EqualDataFunc | null, value_hash_func: HashDataFunc | null, value_equal_func: EqualDataFunc | null) 
    static new(k_type: GObject.GType, k_dup_func: GObject.BoxedCopyFunc, k_destroy_func: GLib.DestroyNotify, v_type: GObject.GType, v_dup_func: GObject.BoxedCopyFunc, v_destroy_func: GLib.DestroyNotify, key_hash_func: HashDataFunc | null, key_equal_func: EqualDataFunc | null, value_hash_func: HashDataFunc | null, value_equal_func: EqualDataFunc | null): HashMultiMap
    _init(config?: HashMultiMap.ConstructorProperties): void
}

module HashMultiSet {

    // Constructor properties interface

    interface ConstructorProperties extends AbstractMultiSet.ConstructorProperties {

        // Own constructor properties of Gee-0.8.Gee.HashMultiSet

        gType?: GObject.GType | null
        gDupFunc?: GObject.BoxedCopyFunc | null
        gDestroyFunc?: GLib.DestroyNotify | null
    }

}

interface HashMultiSet {

    // Own properties of Gee-0.8.Gee.HashMultiSet

    readonly gType: GObject.GType
    readonly gDupFunc: GObject.BoxedCopyFunc
    readonly gDestroyFunc: GLib.DestroyNotify

    // Owm methods of Gee-0.8.Gee.HashMultiSet

    get_hash_func(): [ /* returnType */ HashDataFunc, /* result_target */ any ]
    get_equal_func(): [ /* returnType */ EqualDataFunc, /* result_target */ any ]

    // Conflicting methods

    get_read_only_view(): MultiSet

    // Overloads of get_read_only_view

    get_read_only_view(): MultiSet
    get_read_only_view(): Collection
    get_read_only_view(): MultiSet

    // Overloads of get_read_only_view

    get_read_only_view(): Collection
    get_read_only_view(): Collection
    get_read_only_view(): Collection
    vfunc_get_read_only_view(): MultiSet

    // Overloads of vfunc_get_read_only_view

    vfunc_get_read_only_view(): MultiSet
    vfunc_get_read_only_view(): Collection
    vfunc_get_read_only_view(): MultiSet

    // Overloads of vfunc_get_read_only_view

    vfunc_get_read_only_view(): Collection
    vfunc_get_read_only_view(): Collection
    vfunc_get_read_only_view(): Collection

    // Class property signals of Gee-0.8.Gee.HashMultiSet

    connect(sigName: "notify::g-type", callback: (($obj: HashMultiSet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-type", callback: (($obj: HashMultiSet, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-type", ...args: any[]): void
    connect(sigName: "notify::g-dup-func", callback: (($obj: HashMultiSet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-dup-func", callback: (($obj: HashMultiSet, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-dup-func", ...args: any[]): void
    connect(sigName: "notify::g-destroy-func", callback: (($obj: HashMultiSet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-destroy-func", callback: (($obj: HashMultiSet, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-destroy-func", ...args: any[]): void
    connect(sigName: "notify::size", callback: (($obj: HashMultiSet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: HashMultiSet, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::read-only", callback: (($obj: HashMultiSet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only", callback: (($obj: HashMultiSet, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only", ...args: any[]): void
    connect(sigName: "notify::read-only-view", callback: (($obj: HashMultiSet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: HashMultiSet, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only-view", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class HashMultiSet extends AbstractMultiSet {

    // Own properties of Gee-0.8.Gee.HashMultiSet

    static name: string
    static $gtype: GObject.GType<HashMultiSet>

    // Constructors of Gee-0.8.Gee.HashMultiSet

    constructor(config?: HashMultiSet.ConstructorProperties) 
    constructor(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, hash_func: HashDataFunc | null, equal_func: EqualDataFunc | null) 
    static new(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, hash_func: HashDataFunc | null, equal_func: EqualDataFunc | null): HashMultiSet
    static broken(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, hash_func: HashDataFunc | null, equal_func: EqualDataFunc | null): HashMultiSet
    _init(config?: HashMultiSet.ConstructorProperties): void

    // Conflicting static methods

    static empty(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify): Set

    // Overloads of empty

    static empty(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify): Collection
    static empty(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify): Collection
}

module HashSet {

    // Constructor properties interface

    interface ConstructorProperties extends AbstractSet.ConstructorProperties {

        // Own constructor properties of Gee-0.8.Gee.HashSet

        gType?: GObject.GType | null
        gDupFunc?: GObject.BoxedCopyFunc | null
        gDestroyFunc?: GLib.DestroyNotify | null
    }

}

interface HashSet {

    // Own properties of Gee-0.8.Gee.HashSet

    readonly gType: GObject.GType
    readonly gDupFunc: GObject.BoxedCopyFunc
    readonly gDestroyFunc: GLib.DestroyNotify

    // Conflicting properties

    readOnlyView: any

    // Owm methods of Gee-0.8.Gee.HashSet

    get_hash_func(): [ /* returnType */ HashDataFunc, /* result_target */ any ]
    get_equal_func(): [ /* returnType */ EqualDataFunc, /* result_target */ any ]

    // Conflicting methods

    get_read_only_view(): Set

    // Overloads of get_read_only_view

    get_read_only_view(): Set
    get_read_only_view(): Collection
    get_read_only_view(): Set

    // Overloads of get_read_only_view

    get_read_only_view(): Collection
    get_read_only_view(): Collection
    get_read_only_view(): Collection
    vfunc_get_read_only_view(): Set

    // Overloads of vfunc_get_read_only_view

    vfunc_get_read_only_view(): Set
    vfunc_get_read_only_view(): Collection
    vfunc_get_read_only_view(): Set

    // Overloads of vfunc_get_read_only_view

    vfunc_get_read_only_view(): Collection
    vfunc_get_read_only_view(): Collection
    vfunc_get_read_only_view(): Collection

    // Class property signals of Gee-0.8.Gee.HashSet

    connect(sigName: "notify::g-type", callback: (($obj: HashSet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-type", callback: (($obj: HashSet, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-type", ...args: any[]): void
    connect(sigName: "notify::g-dup-func", callback: (($obj: HashSet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-dup-func", callback: (($obj: HashSet, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-dup-func", ...args: any[]): void
    connect(sigName: "notify::g-destroy-func", callback: (($obj: HashSet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-destroy-func", callback: (($obj: HashSet, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-destroy-func", ...args: any[]): void
    connect(sigName: "notify::read-only-view", callback: (($obj: HashSet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: HashSet, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only-view", ...args: any[]): void
    connect(sigName: "notify::size", callback: (($obj: HashSet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: HashSet, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::read-only", callback: (($obj: HashSet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only", callback: (($obj: HashSet, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class HashSet extends AbstractSet {

    // Own properties of Gee-0.8.Gee.HashSet

    static name: string
    static $gtype: GObject.GType<HashSet>

    // Constructors of Gee-0.8.Gee.HashSet

    constructor(config?: HashSet.ConstructorProperties) 
    constructor(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, hash_func: HashDataFunc | null, equal_func: EqualDataFunc | null) 
    static new(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, hash_func: HashDataFunc | null, equal_func: EqualDataFunc | null): HashSet
    _init(config?: HashSet.ConstructorProperties): void

    // Conflicting static methods

    static empty(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify): Set

    // Overloads of empty

    static empty(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify): Collection
    static empty(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify): Collection
}

interface Lazy {

    // Own fields of Gee-0.8.Gee.Lazy

    ref_count: number

    // Owm methods of Gee-0.8.Gee.Lazy

    eval(): void
    get(): any
    get_value(): any
    get_future(): Future | null
}

class Lazy {

    // Own properties of Gee-0.8.Gee.Lazy

    static name: string

    // Constructors of Gee-0.8.Gee.Lazy

    constructor(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, func: LazyFunc) 
    static new(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, func: LazyFunc): Lazy
    static from_value(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, item: any): Lazy
}

module LinkedList {

    // Constructor properties interface

    interface ConstructorProperties extends Queue.ConstructorProperties, Deque.ConstructorProperties, AbstractBidirList.ConstructorProperties {

        // Own constructor properties of Gee-0.8.Gee.LinkedList

        gType?: GObject.GType | null
        gDupFunc?: GObject.BoxedCopyFunc | null
        gDestroyFunc?: GLib.DestroyNotify | null
    }

}

interface LinkedList extends Queue, Deque {

    // Own properties of Gee-0.8.Gee.LinkedList

    readonly gType: GObject.GType
    readonly gDupFunc: GObject.BoxedCopyFunc
    readonly gDestroyFunc: GLib.DestroyNotify

    // Conflicting properties

    readOnlyView: any

    // Owm methods of Gee-0.8.Gee.LinkedList

    first(): any
    last(): any
    get_equal_func(): [ /* returnType */ EqualDataFunc, /* result_target */ any ]

    // Conflicting methods

    get_read_only_view(): BidirList

    // Overloads of get_read_only_view

    get_read_only_view(): BidirList
    get_read_only_view(): List
    get_read_only_view(): Collection
    get_read_only_view(): Collection
    get_read_only_view(): BidirList

    // Overloads of get_read_only_view

    get_read_only_view(): List
    get_read_only_view(): Collection
    get_read_only_view(): List

    // Overloads of get_read_only_view

    get_read_only_view(): List
    get_read_only_view(): Collection
    get_read_only_view(): List

    // Overloads of get_read_only_view

    get_read_only_view(): Collection
    get_read_only_view(): Collection
    vfunc_get_read_only_view(): BidirList

    // Overloads of vfunc_get_read_only_view

    vfunc_get_read_only_view(): BidirList
    vfunc_get_read_only_view(): List
    vfunc_get_read_only_view(): Collection
    vfunc_get_read_only_view(): Collection
    vfunc_get_read_only_view(): BidirList

    // Overloads of vfunc_get_read_only_view

    vfunc_get_read_only_view(): List
    vfunc_get_read_only_view(): Collection
    vfunc_get_read_only_view(): List

    // Overloads of vfunc_get_read_only_view

    vfunc_get_read_only_view(): List
    vfunc_get_read_only_view(): Collection
    vfunc_get_read_only_view(): List

    // Overloads of vfunc_get_read_only_view

    vfunc_get_read_only_view(): Collection
    vfunc_get_read_only_view(): Collection

    // Class property signals of Gee-0.8.Gee.LinkedList

    connect(sigName: "notify::g-type", callback: (($obj: LinkedList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-type", callback: (($obj: LinkedList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-type", ...args: any[]): void
    connect(sigName: "notify::g-dup-func", callback: (($obj: LinkedList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-dup-func", callback: (($obj: LinkedList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-dup-func", ...args: any[]): void
    connect(sigName: "notify::g-destroy-func", callback: (($obj: LinkedList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-destroy-func", callback: (($obj: LinkedList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-destroy-func", ...args: any[]): void
    connect(sigName: "notify::read-only-view", callback: (($obj: LinkedList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: LinkedList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only-view", ...args: any[]): void
    connect(sigName: "notify::size", callback: (($obj: LinkedList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: LinkedList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::read-only", callback: (($obj: LinkedList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only", callback: (($obj: LinkedList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only", ...args: any[]): void
    connect(sigName: "notify::capacity", callback: (($obj: LinkedList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::capacity", callback: (($obj: LinkedList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::capacity", ...args: any[]): void
    connect(sigName: "notify::remaining-capacity", callback: (($obj: LinkedList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::remaining-capacity", callback: (($obj: LinkedList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::remaining-capacity", ...args: any[]): void
    connect(sigName: "notify::is-full", callback: (($obj: LinkedList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-full", callback: (($obj: LinkedList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-full", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class LinkedList extends AbstractBidirList {

    // Own properties of Gee-0.8.Gee.LinkedList

    static name: string
    static $gtype: GObject.GType<LinkedList>

    // Constructors of Gee-0.8.Gee.LinkedList

    constructor(config?: LinkedList.ConstructorProperties) 
    constructor(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, equal_func: EqualDataFunc | null) 
    static new(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, equal_func: EqualDataFunc | null): LinkedList
    _init(config?: LinkedList.ConstructorProperties): void

    // Conflicting static methods

    static empty(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify): Collection
    static empty(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify): List

    // Overloads of empty

    static empty(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify): Collection
}

module PriorityQueue {

    // Constructor properties interface

    interface ConstructorProperties extends AbstractQueue.ConstructorProperties {

        // Own constructor properties of Gee-0.8.Gee.PriorityQueue

        gType?: GObject.GType | null
        gDupFunc?: GObject.BoxedCopyFunc | null
        gDestroyFunc?: GLib.DestroyNotify | null
    }

}

interface PriorityQueue {

    // Own properties of Gee-0.8.Gee.PriorityQueue

    readonly gType: GObject.GType
    readonly gDupFunc: GObject.BoxedCopyFunc
    readonly gDestroyFunc: GLib.DestroyNotify

    // Owm methods of Gee-0.8.Gee.PriorityQueue

    offer(element: any): boolean
    drain(recipient: Collection, amount: number): number
    get_compare_func(): [ /* returnType */ GLib.CompareDataFunc, /* result_target */ any ]

    // Class property signals of Gee-0.8.Gee.PriorityQueue

    connect(sigName: "notify::g-type", callback: (($obj: PriorityQueue, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-type", callback: (($obj: PriorityQueue, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-type", ...args: any[]): void
    connect(sigName: "notify::g-dup-func", callback: (($obj: PriorityQueue, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-dup-func", callback: (($obj: PriorityQueue, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-dup-func", ...args: any[]): void
    connect(sigName: "notify::g-destroy-func", callback: (($obj: PriorityQueue, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-destroy-func", callback: (($obj: PriorityQueue, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-destroy-func", ...args: any[]): void
    connect(sigName: "notify::capacity", callback: (($obj: PriorityQueue, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::capacity", callback: (($obj: PriorityQueue, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::capacity", ...args: any[]): void
    connect(sigName: "notify::remaining-capacity", callback: (($obj: PriorityQueue, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::remaining-capacity", callback: (($obj: PriorityQueue, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::remaining-capacity", ...args: any[]): void
    connect(sigName: "notify::is-full", callback: (($obj: PriorityQueue, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-full", callback: (($obj: PriorityQueue, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-full", ...args: any[]): void
    connect(sigName: "notify::size", callback: (($obj: PriorityQueue, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: PriorityQueue, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::read-only", callback: (($obj: PriorityQueue, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only", callback: (($obj: PriorityQueue, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only", ...args: any[]): void
    connect(sigName: "notify::read-only-view", callback: (($obj: PriorityQueue, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: PriorityQueue, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only-view", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class PriorityQueue extends AbstractQueue {

    // Own properties of Gee-0.8.Gee.PriorityQueue

    static name: string
    static $gtype: GObject.GType<PriorityQueue>

    // Constructors of Gee-0.8.Gee.PriorityQueue

    constructor(config?: PriorityQueue.ConstructorProperties) 
    constructor(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, compare_func: GLib.CompareDataFunc | null) 
    static new(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, compare_func: GLib.CompareDataFunc | null): PriorityQueue
    _init(config?: PriorityQueue.ConstructorProperties): void
}

interface Promise {

    // Own fields of Gee-0.8.Gee.Promise

    ref_count: number

    // Owm methods of Gee-0.8.Gee.Promise

    set_value(value: any): void
    set_exception(exception: GLib.Error): void
    get_future(): Future
}

class Promise {

    // Own properties of Gee-0.8.Gee.Promise

    static name: string

    // Constructors of Gee-0.8.Gee.Promise

    constructor(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify) 
    static new(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify): Promise
}

module TreeMap {

    // Constructor properties interface

    interface ConstructorProperties extends AbstractBidirSortedMap.ConstructorProperties {

        // Own constructor properties of Gee-0.8.Gee.TreeMap

        kType?: GObject.GType | null
        kDupFunc?: GObject.BoxedCopyFunc | null
        kDestroyFunc?: GLib.DestroyNotify | null
        vType?: GObject.GType | null
        vDupFunc?: GObject.BoxedCopyFunc | null
        vDestroyFunc?: GLib.DestroyNotify | null
    }

}

interface TreeMap {

    // Own properties of Gee-0.8.Gee.TreeMap

    readonly kType: GObject.GType
    readonly kDupFunc: GObject.BoxedCopyFunc
    readonly kDestroyFunc: GLib.DestroyNotify
    readonly vType: GObject.GType
    readonly vDupFunc: GObject.BoxedCopyFunc
    readonly vDestroyFunc: GLib.DestroyNotify

    // Conflicting properties

    readOnlyView: any

    // Owm methods of Gee-0.8.Gee.TreeMap

    get_key_compare_func(): [ /* returnType */ GLib.CompareDataFunc, /* result_target */ any ]
    get_value_equal_func(): [ /* returnType */ EqualDataFunc, /* result_target */ any ]

    // Conflicting methods

    get_read_only_view(): BidirSortedMap

    // Overloads of get_read_only_view

    get_read_only_view(): BidirSortedMap
    get_read_only_view(): SortedMap
    get_read_only_view(): Map
    get_read_only_view(): BidirSortedMap

    // Overloads of get_read_only_view

    get_read_only_view(): SortedMap
    get_read_only_view(): Map
    get_read_only_view(): SortedMap

    // Overloads of get_read_only_view

    get_read_only_view(): Map
    get_read_only_view(): Map
    get_read_only_view(): Map
    vfunc_get_read_only_view(): BidirSortedMap

    // Overloads of vfunc_get_read_only_view

    vfunc_get_read_only_view(): BidirSortedMap
    vfunc_get_read_only_view(): SortedMap
    vfunc_get_read_only_view(): Map
    vfunc_get_read_only_view(): BidirSortedMap

    // Overloads of vfunc_get_read_only_view

    vfunc_get_read_only_view(): SortedMap
    vfunc_get_read_only_view(): Map
    vfunc_get_read_only_view(): SortedMap

    // Overloads of vfunc_get_read_only_view

    vfunc_get_read_only_view(): Map
    vfunc_get_read_only_view(): Map
    vfunc_get_read_only_view(): Map

    // Class property signals of Gee-0.8.Gee.TreeMap

    connect(sigName: "notify::k-type", callback: (($obj: TreeMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::k-type", callback: (($obj: TreeMap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::k-type", ...args: any[]): void
    connect(sigName: "notify::k-dup-func", callback: (($obj: TreeMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::k-dup-func", callback: (($obj: TreeMap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::k-dup-func", ...args: any[]): void
    connect(sigName: "notify::k-destroy-func", callback: (($obj: TreeMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::k-destroy-func", callback: (($obj: TreeMap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::k-destroy-func", ...args: any[]): void
    connect(sigName: "notify::v-type", callback: (($obj: TreeMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::v-type", callback: (($obj: TreeMap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::v-type", ...args: any[]): void
    connect(sigName: "notify::v-dup-func", callback: (($obj: TreeMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::v-dup-func", callback: (($obj: TreeMap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::v-dup-func", ...args: any[]): void
    connect(sigName: "notify::v-destroy-func", callback: (($obj: TreeMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::v-destroy-func", callback: (($obj: TreeMap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::v-destroy-func", ...args: any[]): void
    connect(sigName: "notify::read-only-view", callback: (($obj: TreeMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: TreeMap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only-view", ...args: any[]): void
    connect(sigName: "notify::ascending-keys", callback: (($obj: TreeMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ascending-keys", callback: (($obj: TreeMap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::ascending-keys", ...args: any[]): void
    connect(sigName: "notify::ascending-entries", callback: (($obj: TreeMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ascending-entries", callback: (($obj: TreeMap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::ascending-entries", ...args: any[]): void
    connect(sigName: "notify::size", callback: (($obj: TreeMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: TreeMap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::read-only", callback: (($obj: TreeMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only", callback: (($obj: TreeMap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only", ...args: any[]): void
    connect(sigName: "notify::keys", callback: (($obj: TreeMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::keys", callback: (($obj: TreeMap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::keys", ...args: any[]): void
    connect(sigName: "notify::values", callback: (($obj: TreeMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::values", callback: (($obj: TreeMap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::values", ...args: any[]): void
    connect(sigName: "notify::entries", callback: (($obj: TreeMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::entries", callback: (($obj: TreeMap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::entries", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class TreeMap extends AbstractBidirSortedMap {

    // Own properties of Gee-0.8.Gee.TreeMap

    static name: string
    static $gtype: GObject.GType<TreeMap>

    // Constructors of Gee-0.8.Gee.TreeMap

    constructor(config?: TreeMap.ConstructorProperties) 
    constructor(k_type: GObject.GType, k_dup_func: GObject.BoxedCopyFunc, k_destroy_func: GLib.DestroyNotify, v_type: GObject.GType, v_dup_func: GObject.BoxedCopyFunc, v_destroy_func: GLib.DestroyNotify, key_compare_func: GLib.CompareDataFunc | null, value_equal_func: EqualDataFunc | null) 
    static new(k_type: GObject.GType, k_dup_func: GObject.BoxedCopyFunc, k_destroy_func: GLib.DestroyNotify, v_type: GObject.GType, v_dup_func: GObject.BoxedCopyFunc, v_destroy_func: GLib.DestroyNotify, key_compare_func: GLib.CompareDataFunc | null, value_equal_func: EqualDataFunc | null): TreeMap
    _init(config?: TreeMap.ConstructorProperties): void

    // Conflicting static methods

    static empty(k_type: GObject.GType, k_dup_func: GObject.BoxedCopyFunc, k_destroy_func: GLib.DestroyNotify, v_type: GObject.GType, v_dup_func: GObject.BoxedCopyFunc, v_destroy_func: GLib.DestroyNotify): BidirSortedMap

    // Overloads of empty

    static empty(k_type: GObject.GType, k_dup_func: GObject.BoxedCopyFunc, k_destroy_func: GLib.DestroyNotify, v_type: GObject.GType, v_dup_func: GObject.BoxedCopyFunc, v_destroy_func: GLib.DestroyNotify): Map
    static empty(k_type: GObject.GType, k_dup_func: GObject.BoxedCopyFunc, k_destroy_func: GLib.DestroyNotify, v_type: GObject.GType, v_dup_func: GObject.BoxedCopyFunc, v_destroy_func: GLib.DestroyNotify): Map
    static empty(k_type: GObject.GType, k_dup_func: GObject.BoxedCopyFunc, k_destroy_func: GLib.DestroyNotify, v_type: GObject.GType, v_dup_func: GObject.BoxedCopyFunc, v_destroy_func: GLib.DestroyNotify): Map
}

module TreeMultiMap {

    // Constructor properties interface

    interface ConstructorProperties extends AbstractMultiMap.ConstructorProperties {

        // Own constructor properties of Gee-0.8.Gee.TreeMultiMap

        kType?: GObject.GType | null
        kDupFunc?: GObject.BoxedCopyFunc | null
        kDestroyFunc?: GLib.DestroyNotify | null
        vType?: GObject.GType | null
        vDupFunc?: GObject.BoxedCopyFunc | null
        vDestroyFunc?: GLib.DestroyNotify | null
    }

}

interface TreeMultiMap {

    // Own properties of Gee-0.8.Gee.TreeMultiMap

    readonly kType: GObject.GType
    readonly kDupFunc: GObject.BoxedCopyFunc
    readonly kDestroyFunc: GLib.DestroyNotify
    readonly vType: GObject.GType
    readonly vDupFunc: GObject.BoxedCopyFunc
    readonly vDestroyFunc: GLib.DestroyNotify

    // Owm methods of Gee-0.8.Gee.TreeMultiMap

    get_key_compare_func(): [ /* returnType */ GLib.CompareDataFunc, /* result_target */ any ]
    get_value_compare_func(): [ /* returnType */ GLib.CompareDataFunc, /* result_target */ any ]

    // Class property signals of Gee-0.8.Gee.TreeMultiMap

    connect(sigName: "notify::k-type", callback: (($obj: TreeMultiMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::k-type", callback: (($obj: TreeMultiMap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::k-type", ...args: any[]): void
    connect(sigName: "notify::k-dup-func", callback: (($obj: TreeMultiMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::k-dup-func", callback: (($obj: TreeMultiMap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::k-dup-func", ...args: any[]): void
    connect(sigName: "notify::k-destroy-func", callback: (($obj: TreeMultiMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::k-destroy-func", callback: (($obj: TreeMultiMap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::k-destroy-func", ...args: any[]): void
    connect(sigName: "notify::v-type", callback: (($obj: TreeMultiMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::v-type", callback: (($obj: TreeMultiMap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::v-type", ...args: any[]): void
    connect(sigName: "notify::v-dup-func", callback: (($obj: TreeMultiMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::v-dup-func", callback: (($obj: TreeMultiMap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::v-dup-func", ...args: any[]): void
    connect(sigName: "notify::v-destroy-func", callback: (($obj: TreeMultiMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::v-destroy-func", callback: (($obj: TreeMultiMap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::v-destroy-func", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class TreeMultiMap extends AbstractMultiMap {

    // Own properties of Gee-0.8.Gee.TreeMultiMap

    static name: string
    static $gtype: GObject.GType<TreeMultiMap>

    // Constructors of Gee-0.8.Gee.TreeMultiMap

    constructor(config?: TreeMultiMap.ConstructorProperties) 
    constructor(k_type: GObject.GType, k_dup_func: GObject.BoxedCopyFunc, k_destroy_func: GLib.DestroyNotify, v_type: GObject.GType, v_dup_func: GObject.BoxedCopyFunc, v_destroy_func: GLib.DestroyNotify, key_compare_func: GLib.CompareDataFunc | null, value_compare_func: GLib.CompareDataFunc | null) 
    static new(k_type: GObject.GType, k_dup_func: GObject.BoxedCopyFunc, k_destroy_func: GLib.DestroyNotify, v_type: GObject.GType, v_dup_func: GObject.BoxedCopyFunc, v_destroy_func: GLib.DestroyNotify, key_compare_func: GLib.CompareDataFunc | null, value_compare_func: GLib.CompareDataFunc | null): TreeMultiMap
    _init(config?: TreeMultiMap.ConstructorProperties): void
}

module TreeMultiSet {

    // Constructor properties interface

    interface ConstructorProperties extends AbstractMultiSet.ConstructorProperties {

        // Own constructor properties of Gee-0.8.Gee.TreeMultiSet

        gType?: GObject.GType | null
        gDupFunc?: GObject.BoxedCopyFunc | null
        gDestroyFunc?: GLib.DestroyNotify | null
    }

}

interface TreeMultiSet {

    // Own properties of Gee-0.8.Gee.TreeMultiSet

    readonly gType: GObject.GType
    readonly gDupFunc: GObject.BoxedCopyFunc
    readonly gDestroyFunc: GLib.DestroyNotify

    // Owm methods of Gee-0.8.Gee.TreeMultiSet

    get_compare_func(): [ /* returnType */ GLib.CompareDataFunc, /* result_target */ any ]

    // Conflicting methods

    get_read_only_view(): MultiSet

    // Overloads of get_read_only_view

    get_read_only_view(): MultiSet
    get_read_only_view(): Collection
    get_read_only_view(): MultiSet

    // Overloads of get_read_only_view

    get_read_only_view(): Collection
    get_read_only_view(): Collection
    get_read_only_view(): Collection
    vfunc_get_read_only_view(): MultiSet

    // Overloads of vfunc_get_read_only_view

    vfunc_get_read_only_view(): MultiSet
    vfunc_get_read_only_view(): Collection
    vfunc_get_read_only_view(): MultiSet

    // Overloads of vfunc_get_read_only_view

    vfunc_get_read_only_view(): Collection
    vfunc_get_read_only_view(): Collection
    vfunc_get_read_only_view(): Collection

    // Class property signals of Gee-0.8.Gee.TreeMultiSet

    connect(sigName: "notify::g-type", callback: (($obj: TreeMultiSet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-type", callback: (($obj: TreeMultiSet, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-type", ...args: any[]): void
    connect(sigName: "notify::g-dup-func", callback: (($obj: TreeMultiSet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-dup-func", callback: (($obj: TreeMultiSet, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-dup-func", ...args: any[]): void
    connect(sigName: "notify::g-destroy-func", callback: (($obj: TreeMultiSet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-destroy-func", callback: (($obj: TreeMultiSet, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-destroy-func", ...args: any[]): void
    connect(sigName: "notify::size", callback: (($obj: TreeMultiSet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: TreeMultiSet, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::read-only", callback: (($obj: TreeMultiSet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only", callback: (($obj: TreeMultiSet, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only", ...args: any[]): void
    connect(sigName: "notify::read-only-view", callback: (($obj: TreeMultiSet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: TreeMultiSet, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only-view", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class TreeMultiSet extends AbstractMultiSet {

    // Own properties of Gee-0.8.Gee.TreeMultiSet

    static name: string
    static $gtype: GObject.GType<TreeMultiSet>

    // Constructors of Gee-0.8.Gee.TreeMultiSet

    constructor(config?: TreeMultiSet.ConstructorProperties) 
    constructor(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, compare_func: GLib.CompareDataFunc | null) 
    static new(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, compare_func: GLib.CompareDataFunc | null): TreeMultiSet
    _init(config?: TreeMultiSet.ConstructorProperties): void

    // Conflicting static methods

    static empty(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify): Set

    // Overloads of empty

    static empty(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify): Collection
    static empty(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify): Collection
}

module TreeSet {

    // Constructor properties interface

    interface ConstructorProperties extends AbstractBidirSortedSet.ConstructorProperties {

        // Own constructor properties of Gee-0.8.Gee.TreeSet

        gType?: GObject.GType | null
        gDupFunc?: GObject.BoxedCopyFunc | null
        gDestroyFunc?: GLib.DestroyNotify | null
    }

}

interface TreeSet {

    // Own properties of Gee-0.8.Gee.TreeSet

    readonly gType: GObject.GType
    readonly gDupFunc: GObject.BoxedCopyFunc
    readonly gDestroyFunc: GLib.DestroyNotify

    // Conflicting properties

    readOnlyView: any

    // Owm methods of Gee-0.8.Gee.TreeSet

    get_compare_func(): [ /* returnType */ GLib.CompareDataFunc, /* result_target */ any ]

    // Conflicting methods

    get_read_only_view(): BidirSortedSet

    // Overloads of get_read_only_view

    get_read_only_view(): BidirSortedSet
    get_read_only_view(): SortedSet
    get_read_only_view(): Set
    get_read_only_view(): Collection
    get_read_only_view(): BidirSortedSet

    // Overloads of get_read_only_view

    get_read_only_view(): SortedSet
    get_read_only_view(): Set
    get_read_only_view(): Collection
    get_read_only_view(): SortedSet

    // Overloads of get_read_only_view

    get_read_only_view(): SortedSet
    get_read_only_view(): Set
    get_read_only_view(): Collection
    get_read_only_view(): SortedSet

    // Overloads of get_read_only_view

    get_read_only_view(): Set
    get_read_only_view(): Collection
    get_read_only_view(): Set

    // Overloads of get_read_only_view

    get_read_only_view(): Set
    get_read_only_view(): Collection
    get_read_only_view(): Set

    // Overloads of get_read_only_view

    get_read_only_view(): Collection
    get_read_only_view(): Collection
    get_read_only_view(): Collection
    vfunc_get_read_only_view(): BidirSortedSet

    // Overloads of vfunc_get_read_only_view

    vfunc_get_read_only_view(): BidirSortedSet
    vfunc_get_read_only_view(): SortedSet
    vfunc_get_read_only_view(): Set
    vfunc_get_read_only_view(): Collection
    vfunc_get_read_only_view(): BidirSortedSet

    // Overloads of vfunc_get_read_only_view

    vfunc_get_read_only_view(): SortedSet
    vfunc_get_read_only_view(): Set
    vfunc_get_read_only_view(): Collection
    vfunc_get_read_only_view(): SortedSet

    // Overloads of vfunc_get_read_only_view

    vfunc_get_read_only_view(): SortedSet
    vfunc_get_read_only_view(): Set
    vfunc_get_read_only_view(): Collection
    vfunc_get_read_only_view(): SortedSet

    // Overloads of vfunc_get_read_only_view

    vfunc_get_read_only_view(): Set
    vfunc_get_read_only_view(): Collection
    vfunc_get_read_only_view(): Set

    // Overloads of vfunc_get_read_only_view

    vfunc_get_read_only_view(): Set
    vfunc_get_read_only_view(): Collection
    vfunc_get_read_only_view(): Set

    // Overloads of vfunc_get_read_only_view

    vfunc_get_read_only_view(): Collection
    vfunc_get_read_only_view(): Collection
    vfunc_get_read_only_view(): Collection

    // Class property signals of Gee-0.8.Gee.TreeSet

    connect(sigName: "notify::g-type", callback: (($obj: TreeSet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-type", callback: (($obj: TreeSet, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-type", ...args: any[]): void
    connect(sigName: "notify::g-dup-func", callback: (($obj: TreeSet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-dup-func", callback: (($obj: TreeSet, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-dup-func", ...args: any[]): void
    connect(sigName: "notify::g-destroy-func", callback: (($obj: TreeSet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-destroy-func", callback: (($obj: TreeSet, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-destroy-func", ...args: any[]): void
    connect(sigName: "notify::read-only-view", callback: (($obj: TreeSet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: TreeSet, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only-view", ...args: any[]): void
    connect(sigName: "notify::size", callback: (($obj: TreeSet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: TreeSet, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::read-only", callback: (($obj: TreeSet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only", callback: (($obj: TreeSet, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class TreeSet extends AbstractBidirSortedSet {

    // Own properties of Gee-0.8.Gee.TreeSet

    static name: string
    static $gtype: GObject.GType<TreeSet>

    // Constructors of Gee-0.8.Gee.TreeSet

    constructor(config?: TreeSet.ConstructorProperties) 
    constructor(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, compare_func: GLib.CompareDataFunc | null) 
    static new(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, compare_func: GLib.CompareDataFunc | null): TreeSet
    _init(config?: TreeSet.ConstructorProperties): void

    // Conflicting static methods

    static empty(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify): BidirSortedSet

    // Overloads of empty

    static empty(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify): SortedSet
    static empty(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify): Set
    static empty(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify): Collection
    static empty(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify): SortedSet

    // Overloads of empty

    static empty(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify): Set
    static empty(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify): Collection
    static empty(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify): Set

    // Overloads of empty

    static empty(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify): Collection
    static empty(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify): Collection
}

module UnrolledLinkedList {

    // Constructor properties interface

    interface ConstructorProperties extends Queue.ConstructorProperties, Deque.ConstructorProperties, AbstractBidirList.ConstructorProperties {

        // Own constructor properties of Gee-0.8.Gee.UnrolledLinkedList

        gType?: GObject.GType | null
        gDupFunc?: GObject.BoxedCopyFunc | null
        gDestroyFunc?: GLib.DestroyNotify | null
    }

}

interface UnrolledLinkedList extends Queue, Deque {

    // Own properties of Gee-0.8.Gee.UnrolledLinkedList

    readonly gType: GObject.GType
    readonly gDupFunc: GObject.BoxedCopyFunc
    readonly gDestroyFunc: GLib.DestroyNotify

    // Conflicting properties

    readOnlyView: any

    // Owm methods of Gee-0.8.Gee.UnrolledLinkedList

    get_equal_func(): [ /* returnType */ EqualDataFunc, /* result_target */ any ]

    // Conflicting methods

    get_read_only_view(): BidirList

    // Overloads of get_read_only_view

    get_read_only_view(): BidirList
    get_read_only_view(): List
    get_read_only_view(): Collection
    get_read_only_view(): Collection
    get_read_only_view(): BidirList

    // Overloads of get_read_only_view

    get_read_only_view(): List
    get_read_only_view(): Collection
    get_read_only_view(): List

    // Overloads of get_read_only_view

    get_read_only_view(): List
    get_read_only_view(): Collection
    get_read_only_view(): List

    // Overloads of get_read_only_view

    get_read_only_view(): Collection
    get_read_only_view(): Collection
    vfunc_get_read_only_view(): BidirList

    // Overloads of vfunc_get_read_only_view

    vfunc_get_read_only_view(): BidirList
    vfunc_get_read_only_view(): List
    vfunc_get_read_only_view(): Collection
    vfunc_get_read_only_view(): Collection
    vfunc_get_read_only_view(): BidirList

    // Overloads of vfunc_get_read_only_view

    vfunc_get_read_only_view(): List
    vfunc_get_read_only_view(): Collection
    vfunc_get_read_only_view(): List

    // Overloads of vfunc_get_read_only_view

    vfunc_get_read_only_view(): List
    vfunc_get_read_only_view(): Collection
    vfunc_get_read_only_view(): List

    // Overloads of vfunc_get_read_only_view

    vfunc_get_read_only_view(): Collection
    vfunc_get_read_only_view(): Collection

    // Class property signals of Gee-0.8.Gee.UnrolledLinkedList

    connect(sigName: "notify::g-type", callback: (($obj: UnrolledLinkedList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-type", callback: (($obj: UnrolledLinkedList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-type", ...args: any[]): void
    connect(sigName: "notify::g-dup-func", callback: (($obj: UnrolledLinkedList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-dup-func", callback: (($obj: UnrolledLinkedList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-dup-func", ...args: any[]): void
    connect(sigName: "notify::g-destroy-func", callback: (($obj: UnrolledLinkedList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-destroy-func", callback: (($obj: UnrolledLinkedList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-destroy-func", ...args: any[]): void
    connect(sigName: "notify::read-only-view", callback: (($obj: UnrolledLinkedList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: UnrolledLinkedList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only-view", ...args: any[]): void
    connect(sigName: "notify::size", callback: (($obj: UnrolledLinkedList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: UnrolledLinkedList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::read-only", callback: (($obj: UnrolledLinkedList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only", callback: (($obj: UnrolledLinkedList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only", ...args: any[]): void
    connect(sigName: "notify::capacity", callback: (($obj: UnrolledLinkedList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::capacity", callback: (($obj: UnrolledLinkedList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::capacity", ...args: any[]): void
    connect(sigName: "notify::remaining-capacity", callback: (($obj: UnrolledLinkedList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::remaining-capacity", callback: (($obj: UnrolledLinkedList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::remaining-capacity", ...args: any[]): void
    connect(sigName: "notify::is-full", callback: (($obj: UnrolledLinkedList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-full", callback: (($obj: UnrolledLinkedList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-full", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class UnrolledLinkedList extends AbstractBidirList {

    // Own properties of Gee-0.8.Gee.UnrolledLinkedList

    static name: string
    static $gtype: GObject.GType<UnrolledLinkedList>

    // Constructors of Gee-0.8.Gee.UnrolledLinkedList

    constructor(config?: UnrolledLinkedList.ConstructorProperties) 
    constructor(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, equal_func: EqualDataFunc | null) 
    static new(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, equal_func: EqualDataFunc | null): UnrolledLinkedList
    _init(config?: UnrolledLinkedList.ConstructorProperties): void

    // Conflicting static methods

    static empty(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify): Collection
    static empty(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify): List

    // Overloads of empty

    static empty(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify): Collection
}

module MapEntry {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Gee-0.8.Gee.MapEntry

        kType?: GObject.GType | null
        kDupFunc?: GObject.BoxedCopyFunc | null
        kDestroyFunc?: GLib.DestroyNotify | null
        vType?: GObject.GType | null
        vDupFunc?: GObject.BoxedCopyFunc | null
        vDestroyFunc?: GLib.DestroyNotify | null
        value?: any | null
    }

}

interface MapEntry {

    // Own properties of Gee-0.8.Gee.MapEntry

    readonly kType: GObject.GType
    readonly kDupFunc: GObject.BoxedCopyFunc
    readonly kDestroyFunc: GLib.DestroyNotify
    readonly vType: GObject.GType
    readonly vDupFunc: GObject.BoxedCopyFunc
    readonly vDestroyFunc: GLib.DestroyNotify
    readonly key: any
    value: any
    readonly readOnly: boolean

    // Owm methods of Gee-0.8.Gee.MapEntry

    get_key(): any
    get_value(): any
    set_value(value: any): void
    get_read_only(): boolean

    // Own virtual methods of Gee-0.8.Gee.MapEntry

    vfunc_get_key(): any
    vfunc_get_value(): any
    vfunc_set_value(value: any): void
    vfunc_get_read_only(): boolean

    // Class property signals of Gee-0.8.Gee.MapEntry

    connect(sigName: "notify::k-type", callback: (($obj: MapEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::k-type", callback: (($obj: MapEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::k-type", ...args: any[]): void
    connect(sigName: "notify::k-dup-func", callback: (($obj: MapEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::k-dup-func", callback: (($obj: MapEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::k-dup-func", ...args: any[]): void
    connect(sigName: "notify::k-destroy-func", callback: (($obj: MapEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::k-destroy-func", callback: (($obj: MapEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::k-destroy-func", ...args: any[]): void
    connect(sigName: "notify::v-type", callback: (($obj: MapEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::v-type", callback: (($obj: MapEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::v-type", ...args: any[]): void
    connect(sigName: "notify::v-dup-func", callback: (($obj: MapEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::v-dup-func", callback: (($obj: MapEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::v-dup-func", ...args: any[]): void
    connect(sigName: "notify::v-destroy-func", callback: (($obj: MapEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::v-destroy-func", callback: (($obj: MapEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::v-destroy-func", ...args: any[]): void
    connect(sigName: "notify::key", callback: (($obj: MapEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::key", callback: (($obj: MapEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::key", ...args: any[]): void
    connect(sigName: "notify::value", callback: (($obj: MapEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value", callback: (($obj: MapEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::value", ...args: any[]): void
    connect(sigName: "notify::read-only", callback: (($obj: MapEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only", callback: (($obj: MapEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class MapEntry extends GObject.Object {

    // Own properties of Gee-0.8.Gee.MapEntry

    static name: string
    static $gtype: GObject.GType<MapEntry>

    // Constructors of Gee-0.8.Gee.MapEntry

    constructor(config?: MapEntry.ConstructorProperties) 
    _init(config?: MapEntry.ConstructorProperties): void
}

interface AbstractBidirListClass {

    // Own fields of Gee-0.8.Gee.AbstractBidirListClass

    bidir_list_iterator: (self: AbstractBidirList) => BidirListIterator
    reserved0: (self: AbstractBidirList) => void
    reserved1: (self: AbstractBidirList) => void
    reserved2: (self: AbstractBidirList) => void
    reserved3: (self: AbstractBidirList) => void
    reserved4: (self: AbstractBidirList) => void
    reserved5: (self: AbstractBidirList) => void
    reserved6: (self: AbstractBidirList) => void
    reserved7: (self: AbstractBidirList) => void
    reserved8: (self: AbstractBidirList) => void
    reserved9: (self: AbstractBidirList) => void
}

abstract class AbstractBidirListClass {

    // Own properties of Gee-0.8.Gee.AbstractBidirListClass

    static name: string
}

interface AbstractBidirListPrivate {
}

class AbstractBidirListPrivate {

    // Own properties of Gee-0.8.Gee.AbstractBidirListPrivate

    static name: string
}

interface AbstractBidirSortedSetClass {

    // Own fields of Gee-0.8.Gee.AbstractBidirSortedSetClass

    bidir_iterator: (self: AbstractBidirSortedSet) => BidirIterator
    reserved0: (self: AbstractBidirSortedSet) => void
    reserved1: (self: AbstractBidirSortedSet) => void
    reserved2: (self: AbstractBidirSortedSet) => void
    reserved3: (self: AbstractBidirSortedSet) => void
    reserved4: (self: AbstractBidirSortedSet) => void
    reserved5: (self: AbstractBidirSortedSet) => void
    reserved6: (self: AbstractBidirSortedSet) => void
    reserved7: (self: AbstractBidirSortedSet) => void
    reserved8: (self: AbstractBidirSortedSet) => void
    reserved9: (self: AbstractBidirSortedSet) => void
}

abstract class AbstractBidirSortedSetClass {

    // Own properties of Gee-0.8.Gee.AbstractBidirSortedSetClass

    static name: string
}

interface AbstractBidirSortedSetPrivate {
}

class AbstractBidirSortedSetPrivate {

    // Own properties of Gee-0.8.Gee.AbstractBidirSortedSetPrivate

    static name: string
}

interface AbstractBidirSortedMapClass {

    // Own fields of Gee-0.8.Gee.AbstractBidirSortedMapClass

    bidir_map_iterator: (self: AbstractBidirSortedMap) => BidirMapIterator
    reserved0: (self: AbstractBidirSortedMap) => void
    reserved1: (self: AbstractBidirSortedMap) => void
    reserved2: (self: AbstractBidirSortedMap) => void
    reserved3: (self: AbstractBidirSortedMap) => void
    reserved4: (self: AbstractBidirSortedMap) => void
    reserved5: (self: AbstractBidirSortedMap) => void
    reserved6: (self: AbstractBidirSortedMap) => void
    reserved7: (self: AbstractBidirSortedMap) => void
    reserved8: (self: AbstractBidirSortedMap) => void
    reserved9: (self: AbstractBidirSortedMap) => void
}

abstract class AbstractBidirSortedMapClass {

    // Own properties of Gee-0.8.Gee.AbstractBidirSortedMapClass

    static name: string
}

interface AbstractBidirSortedMapPrivate {
}

class AbstractBidirSortedMapPrivate {

    // Own properties of Gee-0.8.Gee.AbstractBidirSortedMapPrivate

    static name: string
}

interface AbstractCollectionClass {

    // Own fields of Gee-0.8.Gee.AbstractCollectionClass

    contains: (self: AbstractCollection, item: any) => boolean
    add: (self: AbstractCollection, item: any) => boolean
    remove: (self: AbstractCollection, item: any) => boolean
    clear: (self: AbstractCollection) => void
    iterator: (self: AbstractCollection) => Iterator
    foreach: (self: AbstractCollection, f: ForallFunc) => boolean
    reserved0: (self: AbstractCollection) => void
    reserved1: (self: AbstractCollection) => void
    reserved2: (self: AbstractCollection) => void
    reserved3: (self: AbstractCollection) => void
    reserved4: (self: AbstractCollection) => void
    reserved5: (self: AbstractCollection) => void
    reserved6: (self: AbstractCollection) => void
    reserved7: (self: AbstractCollection) => void
    reserved8: (self: AbstractCollection) => void
    reserved9: (self: AbstractCollection) => void
}

abstract class AbstractCollectionClass {

    // Own properties of Gee-0.8.Gee.AbstractCollectionClass

    static name: string
}

interface AbstractCollectionPrivate {
}

class AbstractCollectionPrivate {

    // Own properties of Gee-0.8.Gee.AbstractCollectionPrivate

    static name: string
}

interface AbstractListClass {

    // Own fields of Gee-0.8.Gee.AbstractListClass

    list_iterator: (self: AbstractList) => ListIterator
    get: (self: AbstractList, index: number) => any
    set: (self: AbstractList, index: number, item: any) => void
    index_of: (self: AbstractList, item: any) => number
    insert: (self: AbstractList, index: number, item: any) => void
    remove_at: (self: AbstractList, index: number) => any
    slice: (self: AbstractList, start: number, stop: number) => List | null
    reserved0: (self: AbstractList) => void
    reserved1: (self: AbstractList) => void
    reserved2: (self: AbstractList) => void
    reserved3: (self: AbstractList) => void
    reserved4: (self: AbstractList) => void
    reserved5: (self: AbstractList) => void
    reserved6: (self: AbstractList) => void
    reserved7: (self: AbstractList) => void
    reserved8: (self: AbstractList) => void
    reserved9: (self: AbstractList) => void
}

abstract class AbstractListClass {

    // Own properties of Gee-0.8.Gee.AbstractListClass

    static name: string
}

interface AbstractListPrivate {
}

class AbstractListPrivate {

    // Own properties of Gee-0.8.Gee.AbstractListPrivate

    static name: string
}

interface AbstractMapClass {

    // Own fields of Gee-0.8.Gee.AbstractMapClass

    has_key: (self: AbstractMap, key: any) => boolean
    has: (self: AbstractMap, key: any, value: any) => boolean
    get: (self: AbstractMap, key: any) => any | null
    set: (self: AbstractMap, key: any, value: any) => void
    unset: (self: AbstractMap, key: any) => [ /* returnType */ boolean, /* value */ any ]
    map_iterator: (self: AbstractMap) => MapIterator
    clear: (self: AbstractMap) => void
    foreach: (self: AbstractMap, f: ForallFunc) => boolean
    stream: (self: AbstractMap, a_type: GObject.GType, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, f: StreamFunc) => Iterator
    reserved0: (self: AbstractMap) => void
    reserved1: (self: AbstractMap) => void
    reserved2: (self: AbstractMap) => void
    reserved3: (self: AbstractMap) => void
    reserved4: (self: AbstractMap) => void
    reserved5: (self: AbstractMap) => void
    reserved6: (self: AbstractMap) => void
    reserved7: (self: AbstractMap) => void
    reserved8: (self: AbstractMap) => void
    reserved9: (self: AbstractMap) => void
}

abstract class AbstractMapClass {

    // Own properties of Gee-0.8.Gee.AbstractMapClass

    static name: string
}

interface AbstractMapPrivate {
}

class AbstractMapPrivate {

    // Own properties of Gee-0.8.Gee.AbstractMapPrivate

    static name: string
}

interface AbstractMultiMapClass {

    // Own fields of Gee-0.8.Gee.AbstractMultiMapClass

    create_value_storage: (self: AbstractMultiMap) => Collection
    create_multi_key_set: (self: AbstractMultiMap) => MultiSet
    get_value_equal_func: (self: AbstractMultiMap) => [ /* returnType */ EqualDataFunc, /* result_target */ any, /* result_target_destroy_notify */ GLib.DestroyNotify ]
    reserved0: (self: AbstractMultiMap) => void
    reserved1: (self: AbstractMultiMap) => void
    reserved2: (self: AbstractMultiMap) => void
    reserved3: (self: AbstractMultiMap) => void
    reserved4: (self: AbstractMultiMap) => void
    reserved5: (self: AbstractMultiMap) => void
    reserved6: (self: AbstractMultiMap) => void
    reserved7: (self: AbstractMultiMap) => void
    reserved8: (self: AbstractMultiMap) => void
}

abstract class AbstractMultiMapClass {

    // Own properties of Gee-0.8.Gee.AbstractMultiMapClass

    static name: string
}

interface AbstractMultiMapPrivate {
}

class AbstractMultiMapPrivate {

    // Own properties of Gee-0.8.Gee.AbstractMultiMapPrivate

    static name: string
}

interface AbstractMultiSetClass {

    // Own fields of Gee-0.8.Gee.AbstractMultiSetClass

    reserved0: (self: AbstractMultiSet) => void
    reserved1: (self: AbstractMultiSet) => void
    reserved2: (self: AbstractMultiSet) => void
    reserved3: (self: AbstractMultiSet) => void
    reserved4: (self: AbstractMultiSet) => void
    reserved5: (self: AbstractMultiSet) => void
    reserved6: (self: AbstractMultiSet) => void
    reserved7: (self: AbstractMultiSet) => void
    reserved8: (self: AbstractMultiSet) => void
}

abstract class AbstractMultiSetClass {

    // Own properties of Gee-0.8.Gee.AbstractMultiSetClass

    static name: string
}

interface AbstractMultiSetPrivate {
}

class AbstractMultiSetPrivate {

    // Own properties of Gee-0.8.Gee.AbstractMultiSetPrivate

    static name: string
}

interface AbstractQueueClass {

    // Own fields of Gee-0.8.Gee.AbstractQueueClass

    peek: (self: AbstractQueue) => any | null
    poll: (self: AbstractQueue) => any | null
    reserved0: (self: AbstractQueue) => void
    reserved1: (self: AbstractQueue) => void
    reserved2: (self: AbstractQueue) => void
    reserved3: (self: AbstractQueue) => void
    reserved4: (self: AbstractQueue) => void
    reserved5: (self: AbstractQueue) => void
    reserved6: (self: AbstractQueue) => void
    reserved7: (self: AbstractQueue) => void
    reserved8: (self: AbstractQueue) => void
    reserved9: (self: AbstractQueue) => void
}

abstract class AbstractQueueClass {

    // Own properties of Gee-0.8.Gee.AbstractQueueClass

    static name: string
}

interface AbstractQueuePrivate {
}

class AbstractQueuePrivate {

    // Own properties of Gee-0.8.Gee.AbstractQueuePrivate

    static name: string
}

interface AbstractSetClass {

    // Own fields of Gee-0.8.Gee.AbstractSetClass

    reserved0: (self: AbstractSet) => void
    reserved1: (self: AbstractSet) => void
    reserved2: (self: AbstractSet) => void
    reserved3: (self: AbstractSet) => void
    reserved4: (self: AbstractSet) => void
    reserved5: (self: AbstractSet) => void
    reserved6: (self: AbstractSet) => void
    reserved7: (self: AbstractSet) => void
    reserved8: (self: AbstractSet) => void
    reserved9: (self: AbstractSet) => void
}

abstract class AbstractSetClass {

    // Own properties of Gee-0.8.Gee.AbstractSetClass

    static name: string
}

interface AbstractSetPrivate {
}

class AbstractSetPrivate {

    // Own properties of Gee-0.8.Gee.AbstractSetPrivate

    static name: string
}

interface AbstractSortedMapClass {

    // Own fields of Gee-0.8.Gee.AbstractSortedMapClass

    head_map: (self: AbstractSortedMap, before: any) => SortedMap
    tail_map: (self: AbstractSortedMap, after: any) => SortedMap
    sub_map: (self: AbstractSortedMap, before: any, after: any) => SortedMap
    reserved0: (self: AbstractSortedMap) => void
    reserved1: (self: AbstractSortedMap) => void
    reserved2: (self: AbstractSortedMap) => void
    reserved3: (self: AbstractSortedMap) => void
    reserved4: (self: AbstractSortedMap) => void
    reserved5: (self: AbstractSortedMap) => void
    reserved6: (self: AbstractSortedMap) => void
    reserved7: (self: AbstractSortedMap) => void
    reserved8: (self: AbstractSortedMap) => void
    reserved9: (self: AbstractSortedMap) => void
}

abstract class AbstractSortedMapClass {

    // Own properties of Gee-0.8.Gee.AbstractSortedMapClass

    static name: string
}

interface AbstractSortedMapPrivate {
}

class AbstractSortedMapPrivate {

    // Own properties of Gee-0.8.Gee.AbstractSortedMapPrivate

    static name: string
}

interface AbstractSortedSetClass {

    // Own fields of Gee-0.8.Gee.AbstractSortedSetClass

    first: (self: AbstractSortedSet) => any
    last: (self: AbstractSortedSet) => any
    iterator_at: (self: AbstractSortedSet, element: any) => Iterator | null
    lower: (self: AbstractSortedSet, element: any) => any | null
    higher: (self: AbstractSortedSet, element: any) => any | null
    floor: (self: AbstractSortedSet, element: any) => any | null
    ceil: (self: AbstractSortedSet, element: any) => any | null
    head_set: (self: AbstractSortedSet, before: any) => SortedSet
    tail_set: (self: AbstractSortedSet, after: any) => SortedSet
    sub_set: (self: AbstractSortedSet, from: any, to: any) => SortedSet
    reserved0: (self: AbstractSortedSet) => void
    reserved1: (self: AbstractSortedSet) => void
    reserved2: (self: AbstractSortedSet) => void
    reserved3: (self: AbstractSortedSet) => void
    reserved4: (self: AbstractSortedSet) => void
    reserved5: (self: AbstractSortedSet) => void
    reserved6: (self: AbstractSortedSet) => void
    reserved7: (self: AbstractSortedSet) => void
    reserved8: (self: AbstractSortedSet) => void
    reserved9: (self: AbstractSortedSet) => void
}

abstract class AbstractSortedSetClass {

    // Own properties of Gee-0.8.Gee.AbstractSortedSetClass

    static name: string
}

interface AbstractSortedSetPrivate {
}

class AbstractSortedSetPrivate {

    // Own properties of Gee-0.8.Gee.AbstractSortedSetPrivate

    static name: string
}

interface ArrayListClass {
}

abstract class ArrayListClass {

    // Own properties of Gee-0.8.Gee.ArrayListClass

    static name: string
}

interface ArrayListPrivate {
}

class ArrayListPrivate {

    // Own properties of Gee-0.8.Gee.ArrayListPrivate

    static name: string
}

interface ArrayQueueClass {
}

abstract class ArrayQueueClass {

    // Own properties of Gee-0.8.Gee.ArrayQueueClass

    static name: string
}

interface ArrayQueuePrivate {
}

class ArrayQueuePrivate {

    // Own properties of Gee-0.8.Gee.ArrayQueuePrivate

    static name: string
}

interface ConcurrentListClass {
}

abstract class ConcurrentListClass {

    // Own properties of Gee-0.8.Gee.ConcurrentListClass

    static name: string
}

interface ConcurrentListPrivate {
}

class ConcurrentListPrivate {

    // Own properties of Gee-0.8.Gee.ConcurrentListPrivate

    static name: string
}

interface ConcurrentSetClass {
}

abstract class ConcurrentSetClass {

    // Own properties of Gee-0.8.Gee.ConcurrentSetClass

    static name: string
}

interface ConcurrentSetPrivate {
}

class ConcurrentSetPrivate {

    // Own properties of Gee-0.8.Gee.ConcurrentSetPrivate

    static name: string
}

interface HashMapClass {
}

abstract class HashMapClass {

    // Own properties of Gee-0.8.Gee.HashMapClass

    static name: string
}

interface HashMapPrivate {
}

class HashMapPrivate {

    // Own properties of Gee-0.8.Gee.HashMapPrivate

    static name: string
}

interface HashMultiMapClass {
}

abstract class HashMultiMapClass {

    // Own properties of Gee-0.8.Gee.HashMultiMapClass

    static name: string
}

interface HashMultiMapPrivate {
}

class HashMultiMapPrivate {

    // Own properties of Gee-0.8.Gee.HashMultiMapPrivate

    static name: string
}

interface HashMultiSetClass {
}

abstract class HashMultiSetClass {

    // Own properties of Gee-0.8.Gee.HashMultiSetClass

    static name: string
}

interface HashMultiSetPrivate {
}

class HashMultiSetPrivate {

    // Own properties of Gee-0.8.Gee.HashMultiSetPrivate

    static name: string
}

interface HashSetClass {
}

abstract class HashSetClass {

    // Own properties of Gee-0.8.Gee.HashSetClass

    static name: string
}

interface HashSetPrivate {
}

class HashSetPrivate {

    // Own properties of Gee-0.8.Gee.HashSetPrivate

    static name: string
}

interface HazardPointer {

    // Own fields of Gee-0.8.Gee.HazardPointer

    _node: any

    // Owm methods of Gee-0.8.Gee.HazardPointer

    get(other_thread: boolean): any
    release(notify: GLib.DestroyNotify): void
}

class HazardPointer {

    // Own properties of Gee-0.8.Gee.HazardPointer

    static name: string

    // Constructors of Gee-0.8.Gee.HazardPointer

    constructor(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, ptr: any | null) 
    static new(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, ptr: any | null): HazardPointer
    static get_hazard_pointer(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, aptr: any | null, mask: number): [ /* returnType */ HazardPointer | null, /* mask_out */ number ]
    static get_pointer(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, aptr: any | null, mask: number): [ /* returnType */ any | null, /* mask_out */ number ]
    static exchange_hazard_pointer(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, aptr: any | null, new_ptr: any | null, mask: number, new_mask: number): [ /* returnType */ HazardPointer | null, /* old_mask */ number ]
    static set_pointer(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, aptr: any | null, new_ptr: any | null, mask: number, new_mask: number): void
    static exchange_pointer(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, aptr: any | null, new_ptr: any | null, mask: number, new_mask: number): [ /* returnType */ any | null, /* old_mask */ number ]
    static compare_and_exchange_pointer(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, aptr: any | null, old_ptr: any | null, _new_ptr: any | null, mask: number, old_mask: number, new_mask: number): boolean
    static set_default_policy(policy: HazardPointerPolicy): void
    static set_thread_exit_policy(policy: HazardPointerPolicy): void
    static set_release_policy(policy: HazardPointerReleasePolicy): boolean
}

interface HazardPointerContext {

    // Own fields of Gee-0.8.Gee.HazardPointerContext

    _parent: any | null
    _to_free: ArrayList
    _policy: HazardPointerPolicy | null

    // Owm methods of Gee-0.8.Gee.HazardPointerContext

    try_free(): void
    free_all(): void
    try_release(): void
    release(): void
}

class HazardPointerContext {

    // Own properties of Gee-0.8.Gee.HazardPointerContext

    static name: string

    // Constructors of Gee-0.8.Gee.HazardPointerContext

    constructor(policy: HazardPointerPolicy | null) 
    static new(policy: HazardPointerPolicy | null): HazardPointerContext
}

interface LazyClass {
}

abstract class LazyClass {

    // Own properties of Gee-0.8.Gee.LazyClass

    static name: string
}

interface LazyPrivate {
}

class LazyPrivate {

    // Own properties of Gee-0.8.Gee.LazyPrivate

    static name: string
}

interface LinkedListClass {
}

abstract class LinkedListClass {

    // Own properties of Gee-0.8.Gee.LinkedListClass

    static name: string
}

interface LinkedListPrivate {
}

class LinkedListPrivate {

    // Own properties of Gee-0.8.Gee.LinkedListPrivate

    static name: string
}

interface PriorityQueueClass {
}

abstract class PriorityQueueClass {

    // Own properties of Gee-0.8.Gee.PriorityQueueClass

    static name: string
}

interface PriorityQueuePrivate {
}

class PriorityQueuePrivate {

    // Own properties of Gee-0.8.Gee.PriorityQueuePrivate

    static name: string
}

interface PromiseClass {
}

abstract class PromiseClass {

    // Own properties of Gee-0.8.Gee.PromiseClass

    static name: string
}

interface PromisePrivate {
}

class PromisePrivate {

    // Own properties of Gee-0.8.Gee.PromisePrivate

    static name: string
}

interface TreeMapClass {
}

abstract class TreeMapClass {

    // Own properties of Gee-0.8.Gee.TreeMapClass

    static name: string
}

interface TreeMapPrivate {
}

class TreeMapPrivate {

    // Own properties of Gee-0.8.Gee.TreeMapPrivate

    static name: string
}

interface TreeMultiMapClass {
}

abstract class TreeMultiMapClass {

    // Own properties of Gee-0.8.Gee.TreeMultiMapClass

    static name: string
}

interface TreeMultiMapPrivate {
}

class TreeMultiMapPrivate {

    // Own properties of Gee-0.8.Gee.TreeMultiMapPrivate

    static name: string
}

interface TreeMultiSetClass {
}

abstract class TreeMultiSetClass {

    // Own properties of Gee-0.8.Gee.TreeMultiSetClass

    static name: string
}

interface TreeMultiSetPrivate {
}

class TreeMultiSetPrivate {

    // Own properties of Gee-0.8.Gee.TreeMultiSetPrivate

    static name: string
}

interface TreeSetClass {
}

abstract class TreeSetClass {

    // Own properties of Gee-0.8.Gee.TreeSetClass

    static name: string
}

interface TreeSetPrivate {
}

class TreeSetPrivate {

    // Own properties of Gee-0.8.Gee.TreeSetPrivate

    static name: string
}

interface UnrolledLinkedListClass {
}

abstract class UnrolledLinkedListClass {

    // Own properties of Gee-0.8.Gee.UnrolledLinkedListClass

    static name: string
}

interface UnrolledLinkedListPrivate {
}

class UnrolledLinkedListPrivate {

    // Own properties of Gee-0.8.Gee.UnrolledLinkedListPrivate

    static name: string
}

interface BidirIteratorIface {

    // Own fields of Gee-0.8.Gee.BidirIteratorIface

    previous: (self: BidirIterator) => boolean
    has_previous: (self: BidirIterator) => boolean
    first: (self: BidirIterator) => boolean
    last: (self: BidirIterator) => boolean
}

abstract class BidirIteratorIface {

    // Own properties of Gee-0.8.Gee.BidirIteratorIface

    static name: string
}

interface BidirListIface {

    // Own fields of Gee-0.8.Gee.BidirListIface

    bidir_list_iterator: (self: BidirList) => BidirListIterator
    get_read_only_view: (self: BidirList) => BidirList
}

abstract class BidirListIface {

    // Own properties of Gee-0.8.Gee.BidirListIface

    static name: string
}

interface BidirListIteratorIface {

    // Own fields of Gee-0.8.Gee.BidirListIteratorIface

    insert: (self: BidirListIterator, item: any) => void
}

abstract class BidirListIteratorIface {

    // Own properties of Gee-0.8.Gee.BidirListIteratorIface

    static name: string
}

interface BidirMapIteratorIface {

    // Own fields of Gee-0.8.Gee.BidirMapIteratorIface

    previous: (self: BidirMapIterator) => boolean
    has_previous: (self: BidirMapIterator) => boolean
    first: (self: BidirMapIterator) => boolean
    last: (self: BidirMapIterator) => boolean
}

abstract class BidirMapIteratorIface {

    // Own properties of Gee-0.8.Gee.BidirMapIteratorIface

    static name: string
}

interface BidirSortedSetIface {

    // Own fields of Gee-0.8.Gee.BidirSortedSetIface

    bidir_iterator: (self: BidirSortedSet) => BidirIterator
    get_read_only_view: (self: BidirSortedSet) => BidirSortedSet
}

abstract class BidirSortedSetIface {

    // Own properties of Gee-0.8.Gee.BidirSortedSetIface

    static name: string
}

interface BidirSortedMapIface {

    // Own fields of Gee-0.8.Gee.BidirSortedMapIface

    bidir_map_iterator: (self: BidirSortedMap) => BidirMapIterator
    get_read_only_view: (self: BidirSortedMap) => BidirSortedMap
}

abstract class BidirSortedMapIface {

    // Own properties of Gee-0.8.Gee.BidirSortedMapIface

    static name: string
}

interface CollectionIface {

    // Own fields of Gee-0.8.Gee.CollectionIface

    contains: (self: Collection, item: any) => boolean
    add: (self: Collection, item: any) => boolean
    remove: (self: Collection, item: any) => boolean
    clear: (self: Collection) => void
    add_all: (self: Collection, collection: Collection) => boolean
    contains_all: (self: Collection, collection: Collection) => boolean
    remove_all: (self: Collection, collection: Collection) => boolean
    retain_all: (self: Collection, collection: Collection) => boolean
    to_array: () => [ /* returnType */ any[], /* result_length1 */ number ]
    add_all_array: (self: Collection, array: any[]) => boolean
    contains_all_array: (self: Collection, array: any[]) => boolean
    remove_all_array: (self: Collection, array: any[]) => boolean
    add_all_iterator: (self: Collection, iter: Iterator) => boolean
    contains_all_iterator: (self: Collection, iter: Iterator) => boolean
    remove_all_iterator: (self: Collection, iter: Iterator) => boolean
    get_size: (self: Collection) => number
    get_is_empty: (self: Collection) => boolean
    get_read_only: (self: Collection) => boolean
    get_read_only_view: (self: Collection) => Collection
}

abstract class CollectionIface {

    // Own properties of Gee-0.8.Gee.CollectionIface

    static name: string
}

interface ComparableIface {

    // Own fields of Gee-0.8.Gee.ComparableIface

    compare_to: (self: Comparable, object: any) => number
}

abstract class ComparableIface {

    // Own properties of Gee-0.8.Gee.ComparableIface

    static name: string
}

interface DequeIface {

    // Own fields of Gee-0.8.Gee.DequeIface

    offer_head: (self: Deque, element: any) => boolean
    peek_head: (self: Deque) => any | null
    poll_head: (self: Deque) => any | null
    drain_head: (self: Deque, recipient: Collection, amount: number) => number
    offer_tail: (self: Deque, element: any) => boolean
    peek_tail: (self: Deque) => any | null
    poll_tail: (self: Deque) => any | null
    drain_tail: (self: Deque, recipient: Collection, amount: number) => number
}

abstract class DequeIface {

    // Own properties of Gee-0.8.Gee.DequeIface

    static name: string
}

interface FutureIface {

    // Own fields of Gee-0.8.Gee.FutureIface

    wait: (self: Future) => any
    wait_until: (self: Future, end_time: number) => [ /* returnType */ boolean, /* value */ any ]
    wait_async: (self: Future, _callback_: Gio.AsyncReadyCallback | null) => void
    wait_finish: (self: Future, _res_: Gio.AsyncResult) => any
    map: (self: Future, a_type: GObject.GType, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, func: any) => Future
    light_map: (self: Future, a_type: GObject.GType, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, func: any) => Future
    light_map_broken: (self: Future, a_type: GObject.GType, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, func: any) => Future
    zip: (self: Future, a_type: GObject.GType, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, b_type: GObject.GType, b_dup_func: GObject.BoxedCopyFunc, b_destroy_func: GLib.DestroyNotify, zip_func: any, second: Future) => Future
    flat_map: (self: Future, a_type: GObject.GType, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, func: any) => Future
    get_value: (self: Future) => any | null
    get_ready: (self: Future) => boolean
    get_exception: (self: Future) => GLib.Error | null
}

abstract class FutureIface {

    // Own properties of Gee-0.8.Gee.FutureIface

    static name: string
}

interface HashableIface {

    // Own fields of Gee-0.8.Gee.HashableIface

    hash: (self: Hashable) => number
    equal_to: (self: Hashable, object: any) => boolean
}

abstract class HashableIface {

    // Own properties of Gee-0.8.Gee.HashableIface

    static name: string
}

interface IterableIface {

    // Own fields of Gee-0.8.Gee.IterableIface

    iterator: (self: Iterable) => Iterator
}

abstract class IterableIface {

    // Own properties of Gee-0.8.Gee.IterableIface

    static name: string
}

interface IteratorIface {

    // Own fields of Gee-0.8.Gee.IteratorIface

    next: (self: Iterator) => boolean
    has_next: (self: Iterator) => boolean
    get: (self: Iterator) => any
    remove: (self: Iterator) => void
    get_valid: (self: Iterator) => boolean
    get_read_only: (self: Iterator) => boolean
}

abstract class IteratorIface {

    // Own properties of Gee-0.8.Gee.IteratorIface

    static name: string
}

interface ListIface {

    // Own fields of Gee-0.8.Gee.ListIface

    list_iterator: (self: List) => ListIterator
    get: (self: List, index: number) => any
    set: (self: List, index: number, item: any) => void
    index_of: (self: List, item: any) => number
    insert: (self: List, index: number, item: any) => void
    remove_at: (self: List, index: number) => any
    slice: (self: List, start: number, stop: number) => List | null
    first: (self: List) => any
    last: (self: List) => any
    insert_all: (self: List, index: number, collection: Collection) => void
    sort: (self: List, compare_func: GLib.CompareDataFunc | null) => void
    get_read_only_view: (self: List) => List
}

abstract class ListIface {

    // Own properties of Gee-0.8.Gee.ListIface

    static name: string
}

interface ListIteratorIface {

    // Own fields of Gee-0.8.Gee.ListIteratorIface

    set: (self: ListIterator, item: any) => void
    add: (self: ListIterator, item: any) => void
    index: (self: ListIterator) => number
}

abstract class ListIteratorIface {

    // Own properties of Gee-0.8.Gee.ListIteratorIface

    static name: string
}

interface MapIface {

    // Own fields of Gee-0.8.Gee.MapIface

    has_key: (self: Map, key: any) => boolean
    has: (self: Map, key: any, value: any) => boolean
    get: (self: Map, key: any) => any | null
    set: (self: Map, key: any, value: any) => void
    unset: (self: Map, key: any) => [ /* returnType */ boolean, /* value */ any ]
    clear: (self: Map) => void
    map_iterator: (self: Map) => MapIterator
    set_all: (self: Map, map: Map) => void
    unset_all: (self: Map, map: Map) => boolean
    has_all: (self: Map, map: Map) => boolean
    get_size: (self: Map) => number
    get_is_empty: (self: Map) => boolean
    get_read_only: (self: Map) => boolean
    get_keys: (self: Map) => Set
    get_values: (self: Map) => Collection
    get_entries: (self: Map) => Set
    get_read_only_view: (self: Map) => Map
}

abstract class MapIface {

    // Own properties of Gee-0.8.Gee.MapIface

    static name: string
}

interface MapEntryClass {
}

abstract class MapEntryClass {

    // Own properties of Gee-0.8.Gee.MapEntryClass

    static name: string
}

interface MapEntryPrivate {
}

class MapEntryPrivate {

    // Own properties of Gee-0.8.Gee.MapEntryPrivate

    static name: string
}

interface MapIteratorIface {

    // Own fields of Gee-0.8.Gee.MapIteratorIface

    next: (self: MapIterator) => boolean
    has_next: (self: MapIterator) => boolean
    get_key: (self: MapIterator) => any
    get_value: (self: MapIterator) => any
    set_value: (self: MapIterator, value: any) => void
    unset: (self: MapIterator) => void
    fold: (self: MapIterator, a_type: GObject.GType, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, f: FoldMapFunc, seed: any) => any
    foreach: (self: MapIterator, f: ForallMapFunc) => boolean
    get_valid: (self: MapIterator) => boolean
    get_mutable: (self: MapIterator) => boolean
    get_read_only: (self: MapIterator) => boolean
}

abstract class MapIteratorIface {

    // Own properties of Gee-0.8.Gee.MapIteratorIface

    static name: string
}

interface MultiMapIface {

    // Own fields of Gee-0.8.Gee.MultiMapIface

    get_keys: (self: MultiMap) => Set
    get_all_keys: (self: MultiMap) => MultiSet
    get_values: (self: MultiMap) => Collection
    contains: (self: MultiMap, key: any) => boolean
    get: (self: MultiMap, key: any) => Collection
    set: (self: MultiMap, key: any, value: any) => void
    remove: (self: MultiMap, key: any, value: any) => boolean
    remove_all: (self: MultiMap, key: any) => boolean
    clear: (self: MultiMap) => void
    map_iterator: (self: MultiMap) => MapIterator
    get_size: (self: MultiMap) => number
    get_read_only: (self: MultiMap) => boolean
    get_read_only_view: (self: MultiMap) => MultiMap
}

abstract class MultiMapIface {

    // Own properties of Gee-0.8.Gee.MultiMapIface

    static name: string
}

interface MultiSetIface {

    // Own fields of Gee-0.8.Gee.MultiSetIface

    count: (self: MultiSet, item: any) => number
    get_read_only_view: (self: MultiSet) => MultiSet
}

abstract class MultiSetIface {

    // Own properties of Gee-0.8.Gee.MultiSetIface

    static name: string
}

interface QueueIface {

    // Own fields of Gee-0.8.Gee.QueueIface

    offer: (self: Queue, element: any) => boolean
    peek: (self: Queue) => any | null
    poll: (self: Queue) => any | null
    drain: (self: Queue, recipient: Collection, amount: number) => number
    get_capacity: (self: Queue) => number
    get_remaining_capacity: (self: Queue) => number
    get_is_full: (self: Queue) => boolean
}

abstract class QueueIface {

    // Own properties of Gee-0.8.Gee.QueueIface

    static name: string
}

interface SetIface {

    // Own fields of Gee-0.8.Gee.SetIface

    get_read_only_view: (self: Set) => Set
}

abstract class SetIface {

    // Own properties of Gee-0.8.Gee.SetIface

    static name: string
}

interface SortedMapIface {

    // Own fields of Gee-0.8.Gee.SortedMapIface

    head_map: (self: SortedMap, before: any) => SortedMap
    tail_map: (self: SortedMap, after: any) => SortedMap
    sub_map: (self: SortedMap, before: any, after: any) => SortedMap
    get_ascending_keys: (self: SortedMap) => SortedSet
    get_ascending_entries: (self: SortedMap) => SortedSet
    get_read_only_view: (self: SortedMap) => SortedMap
}

abstract class SortedMapIface {

    // Own properties of Gee-0.8.Gee.SortedMapIface

    static name: string
}

interface SortedSetIface {

    // Own fields of Gee-0.8.Gee.SortedSetIface

    first: (self: SortedSet) => any
    last: (self: SortedSet) => any
    iterator_at: (self: SortedSet, element: any) => Iterator | null
    lower: (self: SortedSet, element: any) => any | null
    higher: (self: SortedSet, element: any) => any | null
    floor: (self: SortedSet, element: any) => any | null
    ceil: (self: SortedSet, element: any) => any | null
    head_set: (self: SortedSet, before: any) => SortedSet
    tail_set: (self: SortedSet, after: any) => SortedSet
    sub_set: (self: SortedSet, from: any, to: any) => SortedSet
    get_read_only_view: (self: SortedSet) => SortedSet
}

abstract class SortedSetIface {

    // Own properties of Gee-0.8.Gee.SortedSetIface

    static name: string
}

interface TraversableIface {

    // Own fields of Gee-0.8.Gee.TraversableIface

    foreach: (self: Traversable, f: ForallFunc) => boolean
    stream: (self: Traversable, a_type: GObject.GType, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, f: StreamFunc) => Iterator
    fold: (self: Traversable, a_type: GObject.GType, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, f: FoldFunc, seed: any) => any
    map: (self: Traversable, a_type: GObject.GType, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, f: MapFunc) => Iterator
    scan: (self: Traversable, a_type: GObject.GType, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, f: FoldFunc, seed: any) => Iterator
    filter: (self: Traversable, pred: Predicate) => Iterator
    chop: (self: Traversable, offset: number, length: number) => Iterator
    flat_map: (self: Traversable, a_type: GObject.GType, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, f: FlatMapFunc) => Iterator
    tee: (self: Traversable) => [ /* returnType */ Iterator[], /* result_length1 */ number ]
    first_match: (self: Traversable, pred: Predicate) => any | null
    any_match: (self: Traversable, pred: Predicate) => boolean
    all_match: (self: Traversable, pred: Predicate) => boolean
    max: (self: Traversable, compare: GLib.CompareDataFunc) => any
    min: (self: Traversable, compare: GLib.CompareDataFunc) => any
    order_by: (self: Traversable, compare: GLib.CompareDataFunc | null) => Iterator
    get_element_type: (self: Traversable) => GObject.GType
}

abstract class TraversableIface {

    // Own properties of Gee-0.8.Gee.TraversableIface

    static name: string
}

/**
 * Name of the imported GIR library
 * @see https://gitlab.gnome.org/GNOME/gjs/-/blob/master/gi/ns.cpp#L188
 */
const __name__: string
/**
 * Version of the imported GIR library
 * @see https://gitlab.gnome.org/GNOME/gjs/-/blob/master/gi/ns.cpp#L189
 */
const __version__: string
}

export default Gee;
// END