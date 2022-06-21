// @ts-nocheck

/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * Gee-1.0
 */

import type * as Gjs from './Gjs';
import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';

export namespace Gee {

function functions_get_equal_func_for(t: GObject.GType): GLib.EqualFunc
function functions_get_hash_func_for(t: GObject.GType): GLib.HashFunc
function functions_get_compare_func_for(t: GObject.GType): GLib.CompareFunc
function direct_compare(_val1?: object | null, _val2?: object | null): number
interface BidirIterator_ConstructProps extends Iterator_ConstructProps, GObject.Object_ConstructProps {
}

interface BidirIterator extends Iterator {

    // Owm methods of Gee-1.0.Gee.BidirIterator

    previous(): boolean
    has_previous(): boolean
    last(): boolean

    // Own virtual methods of Gee-1.0.Gee.BidirIterator

    vfunc_previous(): boolean
    vfunc_has_previous(): boolean
    vfunc_last(): boolean

    // Class property signals of Gee-1.0.Gee.BidirIterator

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class BidirIterator extends GObject.Object {

    // Own properties of Gee-1.0.Gee.BidirIterator

    static name: string
    static $gtype: GObject.GType<BidirIterator>

    // Constructors of Gee-1.0.Gee.BidirIterator

    constructor(config?: BidirIterator_ConstructProps) 
    _init(config?: BidirIterator_ConstructProps): void
}

interface Collection_ConstructProps extends Iterable_ConstructProps, GObject.Object_ConstructProps {
}

interface Collection extends Iterable {

    // Own properties of Gee-1.0.Gee.Collection

    readonly size: number
    readonly is_empty: boolean
    readonly read_only_view: Collection

    // Owm methods of Gee-1.0.Gee.Collection

    contains(item?: object | null): boolean
    add(item?: object | null): boolean
    remove(item?: object | null): boolean
    clear(): void
    add_all(collection: Collection): boolean
    contains_all(collection: Collection): boolean
    remove_all(collection: Collection): boolean
    retain_all(collection: Collection): boolean
    to_array(): object[]

    // Own virtual methods of Gee-1.0.Gee.Collection

    vfunc_contains(item?: object | null): boolean
    vfunc_add(item?: object | null): boolean
    vfunc_remove(item?: object | null): boolean
    vfunc_clear(): void
    vfunc_add_all(collection: Collection): boolean
    vfunc_contains_all(collection: Collection): boolean
    vfunc_remove_all(collection: Collection): boolean
    vfunc_retain_all(collection: Collection): boolean
    vfunc_to_array(): object[]

    // Class property signals of Gee-1.0.Gee.Collection

    connect(sigName: "notify::size", callback: (($obj: Collection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: Collection, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::is-empty", callback: (($obj: Collection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-empty", callback: (($obj: Collection, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-empty", ...args: any[]): void
    connect(sigName: "notify::read-only-view", callback: (($obj: Collection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: Collection, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only-view", ...args: any[]): void
    connect(sigName: "notify::element-type", callback: (($obj: Collection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::element-type", callback: (($obj: Collection, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::element-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Collection extends GObject.Object {

    // Own properties of Gee-1.0.Gee.Collection

    static name: string
    static $gtype: GObject.GType<Collection>

    // Constructors of Gee-1.0.Gee.Collection

    constructor(config?: Collection_ConstructProps) 
    _init(config?: Collection_ConstructProps): void
    static empty(): Collection
}

interface Comparable_ConstructProps extends GObject.Object_ConstructProps {
}

interface Comparable extends GObject.Object {

    // Owm methods of Gee-1.0.Gee.Comparable

    compare_to(object?: object | null): number

    // Own virtual methods of Gee-1.0.Gee.Comparable

    vfunc_compare_to(object?: object | null): number

    // Class property signals of Gee-1.0.Gee.Comparable

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Comparable {

    // Own properties of Gee-1.0.Gee.Comparable

    static name: string
    static $gtype: GObject.GType<Comparable>

    // Constructors of Gee-1.0.Gee.Comparable

    constructor(config?: Comparable_ConstructProps) 
    _init(config?: Comparable_ConstructProps): void
}

interface Deque_ConstructProps extends Queue_ConstructProps, GObject.Object_ConstructProps {
}

interface Deque extends Queue {

    // Owm methods of Gee-1.0.Gee.Deque

    offer_head(element?: object | null): boolean
    peek_head(): object | null
    poll_head(): object | null
    drain_head(recipient: Collection, amount: number): number
    offer_tail(element?: object | null): boolean
    peek_tail(): object | null
    poll_tail(): object | null
    drain_tail(recipient: Collection, amount: number): number

    // Own virtual methods of Gee-1.0.Gee.Deque

    vfunc_offer_head(element?: object | null): boolean
    vfunc_peek_head(): object | null
    vfunc_poll_head(): object | null
    vfunc_drain_head(recipient: Collection, amount: number): number
    vfunc_offer_tail(element?: object | null): boolean
    vfunc_peek_tail(): object | null
    vfunc_poll_tail(): object | null
    vfunc_drain_tail(recipient: Collection, amount: number): number

    // Class property signals of Gee-1.0.Gee.Deque

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
    connect(sigName: "notify::is-empty", callback: (($obj: Deque, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-empty", callback: (($obj: Deque, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-empty", ...args: any[]): void
    connect(sigName: "notify::read-only-view", callback: (($obj: Deque, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: Deque, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only-view", ...args: any[]): void
    connect(sigName: "notify::element-type", callback: (($obj: Deque, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::element-type", callback: (($obj: Deque, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::element-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Deque extends GObject.Object {

    // Own properties of Gee-1.0.Gee.Deque

    static name: string
    static $gtype: GObject.GType<Deque>

    // Constructors of Gee-1.0.Gee.Deque

    constructor(config?: Deque_ConstructProps) 
    _init(config?: Deque_ConstructProps): void
}

interface Iterable_ConstructProps extends GObject.Object_ConstructProps {
}

interface Iterable extends GObject.Object {

    // Own properties of Gee-1.0.Gee.Iterable

    readonly element_type: GObject.GType

    // Owm methods of Gee-1.0.Gee.Iterable

    iterator(): Iterator

    // Own virtual methods of Gee-1.0.Gee.Iterable

    vfunc_iterator(): Iterator

    // Class property signals of Gee-1.0.Gee.Iterable

    connect(sigName: "notify::element-type", callback: (($obj: Iterable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::element-type", callback: (($obj: Iterable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::element-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Iterable {

    // Own properties of Gee-1.0.Gee.Iterable

    static name: string
    static $gtype: GObject.GType<Iterable>

    // Constructors of Gee-1.0.Gee.Iterable

    constructor(config?: Iterable_ConstructProps) 
    _init(config?: Iterable_ConstructProps): void
}

interface Iterator_ConstructProps extends GObject.Object_ConstructProps {
}

interface Iterator extends GObject.Object {

    // Owm methods of Gee-1.0.Gee.Iterator

    next(): boolean
    has_next(): boolean
    first(): boolean
    get(): object | null
    remove(): void

    // Own virtual methods of Gee-1.0.Gee.Iterator

    vfunc_next(): boolean
    vfunc_has_next(): boolean
    vfunc_first(): boolean
    vfunc_get(): object | null
    vfunc_remove(): void

    // Class property signals of Gee-1.0.Gee.Iterator

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Iterator {

    // Own properties of Gee-1.0.Gee.Iterator

    static name: string
    static $gtype: GObject.GType<Iterator>

    // Constructors of Gee-1.0.Gee.Iterator

    constructor(config?: Iterator_ConstructProps) 
    _init(config?: Iterator_ConstructProps): void
}

interface List_ConstructProps extends Collection_ConstructProps, GObject.Object_ConstructProps {
}

interface List extends Collection {

    // Own properties of Gee-1.0.Gee.List

    readonly read_only_view: List

    // Owm methods of Gee-1.0.Gee.List

    list_iterator(): ListIterator
    get(index: number): object | null
    set(index: number, item?: object | null): void
    index_of(item?: object | null): number
    insert(index: number, item?: object | null): void
    remove_at(index: number): object | null
    slice(start: number, stop: number): List | null
    first(): object | null
    last(): object | null
    insert_all(index: number, collection: Collection): void
    sort(compare_func?: GLib.CompareFunc | null): void

    // Own virtual methods of Gee-1.0.Gee.List

    vfunc_list_iterator(): ListIterator
    vfunc_get(index: number): object | null
    vfunc_set(index: number, item?: object | null): void
    vfunc_index_of(item?: object | null): number
    vfunc_insert(index: number, item?: object | null): void
    vfunc_remove_at(index: number): object | null
    vfunc_slice(start: number, stop: number): List | null
    vfunc_first(): object | null
    vfunc_last(): object | null
    vfunc_insert_all(index: number, collection: Collection): void
    vfunc_sort(compare_func?: GLib.CompareFunc | null): void

    // Class property signals of Gee-1.0.Gee.List

    connect(sigName: "notify::read-only-view", callback: (($obj: List, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: List, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only-view", ...args: any[]): void
    connect(sigName: "notify::size", callback: (($obj: List, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: List, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::is-empty", callback: (($obj: List, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-empty", callback: (($obj: List, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-empty", ...args: any[]): void
    connect(sigName: "notify::element-type", callback: (($obj: List, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::element-type", callback: (($obj: List, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::element-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class List extends GObject.Object {

    // Own properties of Gee-1.0.Gee.List

    static name: string
    static $gtype: GObject.GType<List>

    // Constructors of Gee-1.0.Gee.List

    constructor(config?: List_ConstructProps) 
    _init(config?: List_ConstructProps): void
    static empty(): List

    // Overloads of empty

    static empty(): Collection
    static empty(...args: any[]): any
    static empty(...args: any[]): List | Collection | any
}

interface ListIterator_ConstructProps extends BidirIterator_ConstructProps, GObject.Object_ConstructProps {
}

interface ListIterator extends BidirIterator {

    // Owm methods of Gee-1.0.Gee.ListIterator

    set(item?: object | null): void
    insert(item?: object | null): void
    add(item?: object | null): void
    index(): number

    // Own virtual methods of Gee-1.0.Gee.ListIterator

    vfunc_set(item?: object | null): void
    vfunc_insert(item?: object | null): void
    vfunc_add(item?: object | null): void
    vfunc_index(): number

    // Class property signals of Gee-1.0.Gee.ListIterator

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class ListIterator extends GObject.Object {

    // Own properties of Gee-1.0.Gee.ListIterator

    static name: string
    static $gtype: GObject.GType<ListIterator>

    // Constructors of Gee-1.0.Gee.ListIterator

    constructor(config?: ListIterator_ConstructProps) 
    _init(config?: ListIterator_ConstructProps): void
}

interface Map_ConstructProps extends GObject.Object_ConstructProps, Iterable_ConstructProps {
}

interface Map extends GObject.Object, Iterable {

    // Own properties of Gee-1.0.Gee.Map

    readonly size: number
    readonly is_empty: boolean
    readonly keys: Set
    readonly values: Collection
    readonly entries: Set
    readonly read_only_view: Map
    readonly key_type: GObject.GType
    readonly value_type: GObject.GType

    // Owm methods of Gee-1.0.Gee.Map

    has_key(key?: object | null): boolean
    contains(key?: object | null): boolean
    has(key?: object | null, value?: object | null): boolean
    get(key?: object | null): object | null
    set(key?: object | null, value?: object | null): void
    unset(key?: object | null): [ /* returnType */ boolean, /* value */ object | null ]
    remove(key?: object | null): [ /* returnType */ boolean, /* value */ object | null ]
    clear(): void
    map_iterator(): MapIterator
    set_all(map: Map): void
    unset_all(map: Map): boolean
    remove_all(map: Map): boolean
    has_all(map: Map): boolean
    contains_all(map: Map): boolean

    // Own virtual methods of Gee-1.0.Gee.Map

    vfunc_has_key(key?: object | null): boolean
    vfunc_contains(key?: object | null): boolean
    vfunc_has(key?: object | null, value?: object | null): boolean
    vfunc_get(key?: object | null): object | null
    vfunc_set(key?: object | null, value?: object | null): void
    vfunc_unset(key?: object | null): [ /* returnType */ boolean, /* value */ object | null ]
    vfunc_remove(key?: object | null): [ /* returnType */ boolean, /* value */ object | null ]
    vfunc_clear(): void
    vfunc_map_iterator(): MapIterator
    vfunc_set_all(map: Map): void
    vfunc_unset_all(map: Map): boolean
    vfunc_remove_all(map: Map): boolean
    vfunc_has_all(map: Map): boolean
    vfunc_contains_all(map: Map): boolean

    // Class property signals of Gee-1.0.Gee.Map

    connect(sigName: "notify::size", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::is-empty", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-empty", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-empty", ...args: any[]): void
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
    connect(sigName: "notify::key-type", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::key-type", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::key-type", ...args: any[]): void
    connect(sigName: "notify::value-type", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value-type", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::value-type", ...args: any[]): void
    connect(sigName: "notify::element-type", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::element-type", callback: (($obj: Map, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::element-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Map {

    // Own properties of Gee-1.0.Gee.Map

    static name: string
    static $gtype: GObject.GType<Map>

    // Constructors of Gee-1.0.Gee.Map

    constructor(config?: Map_ConstructProps) 
    _init(config?: Map_ConstructProps): void
    static empty(): Map
}

interface MapIterator_ConstructProps extends GObject.Object_ConstructProps {
}

interface MapIterator extends GObject.Object {

    // Owm methods of Gee-1.0.Gee.MapIterator

    next(): boolean
    has_next(): boolean
    first(): boolean
    get_key(): object | null
    get_value(): object | null
    set_value(value?: object | null): void
    unset(): void

    // Own virtual methods of Gee-1.0.Gee.MapIterator

    vfunc_next(): boolean
    vfunc_has_next(): boolean
    vfunc_first(): boolean
    vfunc_get_key(): object | null
    vfunc_get_value(): object | null
    vfunc_set_value(value?: object | null): void
    vfunc_unset(): void

    // Class property signals of Gee-1.0.Gee.MapIterator

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class MapIterator {

    // Own properties of Gee-1.0.Gee.MapIterator

    static name: string
    static $gtype: GObject.GType<MapIterator>

    // Constructors of Gee-1.0.Gee.MapIterator

    constructor(config?: MapIterator_ConstructProps) 
    _init(config?: MapIterator_ConstructProps): void
}

interface MultiMap_ConstructProps extends GObject.Object_ConstructProps {
}

interface MultiMap extends GObject.Object {

    // Own properties of Gee-1.0.Gee.MultiMap

    readonly size: number

    // Owm methods of Gee-1.0.Gee.MultiMap

    get_keys(): Set
    get_all_keys(): MultiSet
    get_values(): Collection
    contains(key?: object | null): boolean
    get(key?: object | null): Collection
    set(key?: object | null, value?: object | null): void
    remove(key?: object | null, value?: object | null): boolean
    remove_all(key?: object | null): boolean
    clear(): void

    // Own virtual methods of Gee-1.0.Gee.MultiMap

    vfunc_get_keys(): Set
    vfunc_get_all_keys(): MultiSet
    vfunc_get_values(): Collection
    vfunc_contains(key?: object | null): boolean
    vfunc_get(key?: object | null): Collection
    vfunc_set(key?: object | null, value?: object | null): void
    vfunc_remove(key?: object | null, value?: object | null): boolean
    vfunc_remove_all(key?: object | null): boolean
    vfunc_clear(): void

    // Class property signals of Gee-1.0.Gee.MultiMap

    connect(sigName: "notify::size", callback: (($obj: MultiMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: MultiMap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class MultiMap {

    // Own properties of Gee-1.0.Gee.MultiMap

    static name: string
    static $gtype: GObject.GType<MultiMap>

    // Constructors of Gee-1.0.Gee.MultiMap

    constructor(config?: MultiMap_ConstructProps) 
    _init(config?: MultiMap_ConstructProps): void
}

interface MultiSet_ConstructProps extends Collection_ConstructProps, GObject.Object_ConstructProps {
}

interface MultiSet extends Collection {

    // Owm methods of Gee-1.0.Gee.MultiSet

    count(item?: object | null): number

    // Own virtual methods of Gee-1.0.Gee.MultiSet

    vfunc_count(item?: object | null): number

    // Class property signals of Gee-1.0.Gee.MultiSet

    connect(sigName: "notify::size", callback: (($obj: MultiSet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: MultiSet, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::is-empty", callback: (($obj: MultiSet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-empty", callback: (($obj: MultiSet, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-empty", ...args: any[]): void
    connect(sigName: "notify::read-only-view", callback: (($obj: MultiSet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: MultiSet, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only-view", ...args: any[]): void
    connect(sigName: "notify::element-type", callback: (($obj: MultiSet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::element-type", callback: (($obj: MultiSet, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::element-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class MultiSet extends GObject.Object {

    // Own properties of Gee-1.0.Gee.MultiSet

    static name: string
    static $gtype: GObject.GType<MultiSet>

    // Constructors of Gee-1.0.Gee.MultiSet

    constructor(config?: MultiSet_ConstructProps) 
    _init(config?: MultiSet_ConstructProps): void
}

interface Queue_ConstructProps extends Collection_ConstructProps, GObject.Object_ConstructProps {
}

interface Queue extends Collection {

    // Own properties of Gee-1.0.Gee.Queue

    readonly capacity: number
    readonly remaining_capacity: number
    readonly is_full: boolean

    // Owm methods of Gee-1.0.Gee.Queue

    offer(element?: object | null): boolean
    peek(): object | null
    poll(): object | null
    drain(recipient: Collection, amount: number): number

    // Own virtual methods of Gee-1.0.Gee.Queue

    vfunc_offer(element?: object | null): boolean
    vfunc_peek(): object | null
    vfunc_poll(): object | null
    vfunc_drain(recipient: Collection, amount: number): number

    // Class property signals of Gee-1.0.Gee.Queue

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
    connect(sigName: "notify::is-empty", callback: (($obj: Queue, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-empty", callback: (($obj: Queue, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-empty", ...args: any[]): void
    connect(sigName: "notify::read-only-view", callback: (($obj: Queue, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: Queue, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only-view", ...args: any[]): void
    connect(sigName: "notify::element-type", callback: (($obj: Queue, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::element-type", callback: (($obj: Queue, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::element-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Queue extends GObject.Object {

    // Own properties of Gee-1.0.Gee.Queue

    static name: string
    static $gtype: GObject.GType<Queue>

    // Constructors of Gee-1.0.Gee.Queue

    constructor(config?: Queue_ConstructProps) 
    _init(config?: Queue_ConstructProps): void
}

interface Set_ConstructProps extends Collection_ConstructProps, GObject.Object_ConstructProps {
}

interface Set extends Collection {

    // Own properties of Gee-1.0.Gee.Set

    readonly read_only_view: Set

    // Class property signals of Gee-1.0.Gee.Set

    connect(sigName: "notify::read-only-view", callback: (($obj: Set, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: Set, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only-view", ...args: any[]): void
    connect(sigName: "notify::size", callback: (($obj: Set, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: Set, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::is-empty", callback: (($obj: Set, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-empty", callback: (($obj: Set, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-empty", ...args: any[]): void
    connect(sigName: "notify::element-type", callback: (($obj: Set, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::element-type", callback: (($obj: Set, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::element-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Set extends GObject.Object {

    // Own properties of Gee-1.0.Gee.Set

    static name: string
    static $gtype: GObject.GType<Set>

    // Constructors of Gee-1.0.Gee.Set

    constructor(config?: Set_ConstructProps) 
    _init(config?: Set_ConstructProps): void
    static empty(): Set

    // Overloads of empty

    static empty(): Collection
    static empty(...args: any[]): any
    static empty(...args: any[]): Set | Collection | any
}

interface SortedSet_ConstructProps extends Set_ConstructProps, GObject.Object_ConstructProps {
}

interface SortedSet extends Set {

    // Conflicting properties

    read_only_view: any

    // Owm methods of Gee-1.0.Gee.SortedSet

    first(): object | null
    last(): object | null
    bidir_iterator(): BidirIterator
    iterator_at(element?: object | null): BidirIterator | null
    lower(element?: object | null): object | null
    higher(element?: object | null): object | null
    floor(element?: object | null): object | null
    ceil(element?: object | null): object | null
    head_set(before?: object | null): SortedSet
    tail_set(after?: object | null): SortedSet
    sub_set(from?: object | null, to?: object | null): SortedSet

    // Own virtual methods of Gee-1.0.Gee.SortedSet

    vfunc_first(): object | null
    vfunc_last(): object | null
    vfunc_bidir_iterator(): BidirIterator
    vfunc_iterator_at(element?: object | null): BidirIterator | null
    vfunc_lower(element?: object | null): object | null
    vfunc_higher(element?: object | null): object | null
    vfunc_floor(element?: object | null): object | null
    vfunc_ceil(element?: object | null): object | null
    vfunc_head_set(before?: object | null): SortedSet
    vfunc_tail_set(after?: object | null): SortedSet
    vfunc_sub_set(from?: object | null, to?: object | null): SortedSet

    // Class property signals of Gee-1.0.Gee.SortedSet

    connect(sigName: "notify::read-only-view", callback: (($obj: SortedSet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: SortedSet, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only-view", ...args: any[]): void
    connect(sigName: "notify::size", callback: (($obj: SortedSet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: SortedSet, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::is-empty", callback: (($obj: SortedSet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-empty", callback: (($obj: SortedSet, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-empty", ...args: any[]): void
    connect(sigName: "notify::element-type", callback: (($obj: SortedSet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::element-type", callback: (($obj: SortedSet, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::element-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class SortedSet extends GObject.Object {

    // Own properties of Gee-1.0.Gee.SortedSet

    static name: string
    static $gtype: GObject.GType<SortedSet>

    // Constructors of Gee-1.0.Gee.SortedSet

    constructor(config?: SortedSet_ConstructProps) 
    _init(config?: SortedSet_ConstructProps): void

    // Conflicting static methods

    static empty(...args: any[]): any
}

interface AbstractCollection_ConstructProps extends Iterable_ConstructProps, Collection_ConstructProps, GObject.Object_ConstructProps {
}

interface AbstractCollection extends Iterable, Collection {

    // Own properties of Gee-1.0.Gee.AbstractCollection

    readonly size: number
    readonly is_empty: boolean
    readonly read_only_view: Collection

    // Own fields of Gee-1.0.Gee.AbstractCollection

    parent_instance: GObject.Object
    priv: AbstractCollectionPrivate

    // Owm methods of Gee-1.0.Gee.AbstractCollection

    contains(item?: object | null): boolean
    add(item?: object | null): boolean
    remove(item?: object | null): boolean
    clear(): void
    to_array(): object[]
    add_all(collection: Collection): boolean
    contains_all(collection: Collection): boolean
    remove_all(collection: Collection): boolean
    retain_all(collection: Collection): boolean
    iterator(): Iterator

    // Own virtual methods of Gee-1.0.Gee.AbstractCollection

    vfunc_contains(item?: object | null): boolean
    vfunc_add(item?: object | null): boolean
    vfunc_remove(item?: object | null): boolean
    vfunc_clear(): void
    vfunc_to_array(): object[]
    vfunc_add_all(collection: Collection): boolean
    vfunc_contains_all(collection: Collection): boolean
    vfunc_remove_all(collection: Collection): boolean
    vfunc_retain_all(collection: Collection): boolean
    vfunc_iterator(): Iterator

    // Class property signals of Gee-1.0.Gee.AbstractCollection

    connect(sigName: "notify::size", callback: (($obj: AbstractCollection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: AbstractCollection, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::is-empty", callback: (($obj: AbstractCollection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-empty", callback: (($obj: AbstractCollection, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-empty", ...args: any[]): void
    connect(sigName: "notify::read-only-view", callback: (($obj: AbstractCollection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: AbstractCollection, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only-view", ...args: any[]): void
    connect(sigName: "notify::element-type", callback: (($obj: AbstractCollection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::element-type", callback: (($obj: AbstractCollection, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::element-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class AbstractCollection extends GObject.Object {

    // Own properties of Gee-1.0.Gee.AbstractCollection

    static name: string
    static $gtype: GObject.GType<AbstractCollection>

    // Constructors of Gee-1.0.Gee.AbstractCollection

    constructor(config?: AbstractCollection_ConstructProps) 
    _init(config?: AbstractCollection_ConstructProps): void
}

interface AbstractList_ConstructProps extends List_ConstructProps, AbstractCollection_ConstructProps {
}

interface AbstractList extends List {

    // Own properties of Gee-1.0.Gee.AbstractList

    readonly read_only_view: List

    // Own fields of Gee-1.0.Gee.AbstractList

    parent_instance: AbstractCollection
    priv: AbstractListPrivate

    // Owm methods of Gee-1.0.Gee.AbstractList

    list_iterator(): ListIterator
    get(index: number): object | null
    set(index: number, item?: object | null): void
    index_of(item?: object | null): number
    insert(index: number, item?: object | null): void
    remove_at(index: number): object | null
    slice(start: number, stop: number): List | null
    first(): object | null
    last(): object | null
    insert_all(index: number, collection: Collection): void

    // Own virtual methods of Gee-1.0.Gee.AbstractList

    vfunc_list_iterator(): ListIterator
    vfunc_get(index: number): object | null
    vfunc_set(index: number, item?: object | null): void
    vfunc_index_of(item?: object | null): number
    vfunc_insert(index: number, item?: object | null): void
    vfunc_remove_at(index: number): object | null
    vfunc_slice(start: number, stop: number): List | null
    vfunc_first(): object | null
    vfunc_last(): object | null
    vfunc_insert_all(index: number, collection: Collection): void

    // Class property signals of Gee-1.0.Gee.AbstractList

    connect(sigName: "notify::read-only-view", callback: (($obj: AbstractList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: AbstractList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only-view", ...args: any[]): void
    connect(sigName: "notify::size", callback: (($obj: AbstractList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: AbstractList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::is-empty", callback: (($obj: AbstractList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-empty", callback: (($obj: AbstractList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-empty", ...args: any[]): void
    connect(sigName: "notify::element-type", callback: (($obj: AbstractList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::element-type", callback: (($obj: AbstractList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::element-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class AbstractList extends AbstractCollection {

    // Own properties of Gee-1.0.Gee.AbstractList

    static name: string
    static $gtype: GObject.GType<AbstractList>

    // Constructors of Gee-1.0.Gee.AbstractList

    constructor(config?: AbstractList_ConstructProps) 
    _init(config?: AbstractList_ConstructProps): void

    // Conflicting static methods

    static empty(...args: any[]): any
}

interface AbstractMap_ConstructProps extends Iterable_ConstructProps, Map_ConstructProps, GObject.Object_ConstructProps {
}

interface AbstractMap extends Iterable, Map {

    // Own properties of Gee-1.0.Gee.AbstractMap

    readonly size: number
    readonly is_empty: boolean
    readonly keys: Set
    readonly values: Collection
    readonly entries: Set
    readonly read_only_view: Map

    // Own fields of Gee-1.0.Gee.AbstractMap

    parent_instance: GObject.Object
    priv: AbstractMapPrivate

    // Owm methods of Gee-1.0.Gee.AbstractMap

    has_key(key?: object | null): boolean
    has(key?: object | null, value?: object | null): boolean
    get(key?: object | null): object | null
    set(key?: object | null, value?: object | null): void
    unset(key?: object | null): [ /* returnType */ boolean, /* value */ object | null ]
    map_iterator(): MapIterator
    clear(): void
    set_all(map: Map): void
    unset_all(map: Map): boolean
    has_all(map: Map): boolean

    // Own virtual methods of Gee-1.0.Gee.AbstractMap

    vfunc_has_key(key?: object | null): boolean
    vfunc_has(key?: object | null, value?: object | null): boolean
    vfunc_get(key?: object | null): object | null
    vfunc_set(key?: object | null, value?: object | null): void
    vfunc_unset(key?: object | null): [ /* returnType */ boolean, /* value */ object | null ]
    vfunc_map_iterator(): MapIterator
    vfunc_clear(): void
    vfunc_set_all(map: Map): void
    vfunc_unset_all(map: Map): boolean
    vfunc_has_all(map: Map): boolean

    // Class property signals of Gee-1.0.Gee.AbstractMap

    connect(sigName: "notify::size", callback: (($obj: AbstractMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: AbstractMap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::is-empty", callback: (($obj: AbstractMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-empty", callback: (($obj: AbstractMap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-empty", ...args: any[]): void
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
    connect(sigName: "notify::element-type", callback: (($obj: AbstractMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::element-type", callback: (($obj: AbstractMap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::element-type", ...args: any[]): void
    connect(sigName: "notify::key-type", callback: (($obj: AbstractMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::key-type", callback: (($obj: AbstractMap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::key-type", ...args: any[]): void
    connect(sigName: "notify::value-type", callback: (($obj: AbstractMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value-type", callback: (($obj: AbstractMap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::value-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class AbstractMap extends GObject.Object {

    // Own properties of Gee-1.0.Gee.AbstractMap

    static name: string
    static $gtype: GObject.GType<AbstractMap>

    // Constructors of Gee-1.0.Gee.AbstractMap

    constructor(config?: AbstractMap_ConstructProps) 
    _init(config?: AbstractMap_ConstructProps): void
}

interface AbstractMultiMap_ConstructProps extends MultiMap_ConstructProps, GObject.Object_ConstructProps {
}

interface AbstractMultiMap extends MultiMap {

    // Own fields of Gee-1.0.Gee.AbstractMultiMap

    parent_instance: GObject.Object
    priv: AbstractMultiMapPrivate
    _storage_map: Map

    // Owm methods of Gee-1.0.Gee.AbstractMultiMap

    create_value_storage(): Collection
    create_multi_key_set(): MultiSet
    get_value_equal_func(): GLib.EqualFunc

    // Own virtual methods of Gee-1.0.Gee.AbstractMultiMap

    vfunc_create_value_storage(): Collection
    vfunc_create_multi_key_set(): MultiSet
    vfunc_get_value_equal_func(): GLib.EqualFunc

    // Class property signals of Gee-1.0.Gee.AbstractMultiMap

    connect(sigName: "notify::size", callback: (($obj: AbstractMultiMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: AbstractMultiMap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class AbstractMultiMap extends GObject.Object {

    // Own properties of Gee-1.0.Gee.AbstractMultiMap

    static name: string
    static $gtype: GObject.GType<AbstractMultiMap>

    // Constructors of Gee-1.0.Gee.AbstractMultiMap

    constructor(config?: AbstractMultiMap_ConstructProps) 
    _init(config?: AbstractMultiMap_ConstructProps): void
}

interface AbstractMultiSet_ConstructProps extends MultiSet_ConstructProps, AbstractCollection_ConstructProps {
}

interface AbstractMultiSet extends MultiSet {

    // Own fields of Gee-1.0.Gee.AbstractMultiSet

    parent_instance: AbstractCollection
    priv: AbstractMultiSetPrivate
    _storage_map: Map

    // Class property signals of Gee-1.0.Gee.AbstractMultiSet

    connect(sigName: "notify::size", callback: (($obj: AbstractMultiSet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: AbstractMultiSet, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::is-empty", callback: (($obj: AbstractMultiSet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-empty", callback: (($obj: AbstractMultiSet, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-empty", ...args: any[]): void
    connect(sigName: "notify::read-only-view", callback: (($obj: AbstractMultiSet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: AbstractMultiSet, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only-view", ...args: any[]): void
    connect(sigName: "notify::element-type", callback: (($obj: AbstractMultiSet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::element-type", callback: (($obj: AbstractMultiSet, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::element-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class AbstractMultiSet extends AbstractCollection {

    // Own properties of Gee-1.0.Gee.AbstractMultiSet

    static name: string
    static $gtype: GObject.GType<AbstractMultiSet>

    // Constructors of Gee-1.0.Gee.AbstractMultiSet

    constructor(config?: AbstractMultiSet_ConstructProps) 
    _init(config?: AbstractMultiSet_ConstructProps): void
}

interface AbstractQueue_ConstructProps extends Queue_ConstructProps, AbstractCollection_ConstructProps {
}

interface AbstractQueue extends Queue {

    // Own properties of Gee-1.0.Gee.AbstractQueue

    readonly capacity: number
    readonly remaining_capacity: number
    readonly is_full: boolean

    // Own fields of Gee-1.0.Gee.AbstractQueue

    parent_instance: AbstractCollection
    priv: AbstractQueuePrivate

    // Owm methods of Gee-1.0.Gee.AbstractQueue

    offer(element?: object | null): boolean
    peek(): object | null
    poll(): object | null
    drain(recipient: Collection, amount: number): number

    // Own virtual methods of Gee-1.0.Gee.AbstractQueue

    vfunc_offer(element?: object | null): boolean
    vfunc_peek(): object | null
    vfunc_poll(): object | null
    vfunc_drain(recipient: Collection, amount: number): number

    // Class property signals of Gee-1.0.Gee.AbstractQueue

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
    connect(sigName: "notify::is-empty", callback: (($obj: AbstractQueue, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-empty", callback: (($obj: AbstractQueue, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-empty", ...args: any[]): void
    connect(sigName: "notify::read-only-view", callback: (($obj: AbstractQueue, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: AbstractQueue, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only-view", ...args: any[]): void
    connect(sigName: "notify::element-type", callback: (($obj: AbstractQueue, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::element-type", callback: (($obj: AbstractQueue, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::element-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class AbstractQueue extends AbstractCollection {

    // Own properties of Gee-1.0.Gee.AbstractQueue

    static name: string
    static $gtype: GObject.GType<AbstractQueue>

    // Constructors of Gee-1.0.Gee.AbstractQueue

    constructor(config?: AbstractQueue_ConstructProps) 
    _init(config?: AbstractQueue_ConstructProps): void
}

interface AbstractSet_ConstructProps extends Set_ConstructProps, AbstractCollection_ConstructProps {
}

interface AbstractSet extends Set {

    // Own properties of Gee-1.0.Gee.AbstractSet

    readonly read_only_view: Set

    // Own fields of Gee-1.0.Gee.AbstractSet

    parent_instance: AbstractCollection
    priv: AbstractSetPrivate

    // Class property signals of Gee-1.0.Gee.AbstractSet

    connect(sigName: "notify::read-only-view", callback: (($obj: AbstractSet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: AbstractSet, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only-view", ...args: any[]): void
    connect(sigName: "notify::size", callback: (($obj: AbstractSet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: AbstractSet, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::is-empty", callback: (($obj: AbstractSet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-empty", callback: (($obj: AbstractSet, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-empty", ...args: any[]): void
    connect(sigName: "notify::element-type", callback: (($obj: AbstractSet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::element-type", callback: (($obj: AbstractSet, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::element-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class AbstractSet extends AbstractCollection {

    // Own properties of Gee-1.0.Gee.AbstractSet

    static name: string
    static $gtype: GObject.GType<AbstractSet>

    // Constructors of Gee-1.0.Gee.AbstractSet

    constructor(config?: AbstractSet_ConstructProps) 
    _init(config?: AbstractSet_ConstructProps): void

    // Conflicting static methods

    static empty(...args: any[]): any
}

interface ArrayList_ConstructProps extends AbstractList_ConstructProps {

    // Own constructor properties of Gee-1.0.Gee.ArrayList

    equal_func?: GLib.EqualFunc | null
}

interface ArrayList {

    // Own properties of Gee-1.0.Gee.ArrayList

    equal_func: GLib.EqualFunc

    // Conflicting properties

    read_only_view: any

    // Own fields of Gee-1.0.Gee.ArrayList

    parent_instance: AbstractList
    priv: ArrayListPrivate

    // Owm methods of Gee-1.0.Gee.ArrayList

    sort_with_data(compare: GLib.CompareDataFunc): void

    // Class property signals of Gee-1.0.Gee.ArrayList

    connect(sigName: "notify::equal-func", callback: (($obj: ArrayList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::equal-func", callback: (($obj: ArrayList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::equal-func", ...args: any[]): void
    connect(sigName: "notify::read-only-view", callback: (($obj: ArrayList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: ArrayList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only-view", ...args: any[]): void
    connect(sigName: "notify::size", callback: (($obj: ArrayList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: ArrayList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::is-empty", callback: (($obj: ArrayList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-empty", callback: (($obj: ArrayList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-empty", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class ArrayList extends AbstractList {

    // Own properties of Gee-1.0.Gee.ArrayList

    static name: string
    static $gtype: GObject.GType<ArrayList>

    // Constructors of Gee-1.0.Gee.ArrayList

    constructor(config?: ArrayList_ConstructProps) 
    constructor(equal_func?: GLib.EqualFunc | null) 
    static new(equal_func?: GLib.EqualFunc | null): ArrayList
    _init(config?: ArrayList_ConstructProps): void

    // Conflicting static methods

    static empty(...args: any[]): any
}

interface HashMap_ConstructProps extends AbstractMap_ConstructProps {

    // Own constructor properties of Gee-1.0.Gee.HashMap

    key_hash_func?: GLib.HashFunc | null
    key_equal_func?: GLib.EqualFunc | null
    value_equal_func?: GLib.EqualFunc | null
}

interface HashMap {

    // Own properties of Gee-1.0.Gee.HashMap

    key_hash_func: GLib.HashFunc
    key_equal_func: GLib.EqualFunc
    value_equal_func: GLib.EqualFunc

    // Own fields of Gee-1.0.Gee.HashMap

    parent_instance: AbstractMap
    priv: HashMapPrivate

    // Class property signals of Gee-1.0.Gee.HashMap

    connect(sigName: "notify::key-hash-func", callback: (($obj: HashMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::key-hash-func", callback: (($obj: HashMap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::key-hash-func", ...args: any[]): void
    connect(sigName: "notify::key-equal-func", callback: (($obj: HashMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::key-equal-func", callback: (($obj: HashMap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::key-equal-func", ...args: any[]): void
    connect(sigName: "notify::value-equal-func", callback: (($obj: HashMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value-equal-func", callback: (($obj: HashMap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::value-equal-func", ...args: any[]): void
    connect(sigName: "notify::size", callback: (($obj: HashMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: HashMap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::is-empty", callback: (($obj: HashMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-empty", callback: (($obj: HashMap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-empty", ...args: any[]): void
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

    // Own properties of Gee-1.0.Gee.HashMap

    static name: string
    static $gtype: GObject.GType<HashMap>

    // Constructors of Gee-1.0.Gee.HashMap

    constructor(config?: HashMap_ConstructProps) 
    constructor(key_hash_func?: GLib.HashFunc | null, key_equal_func?: GLib.EqualFunc | null, value_equal_func?: GLib.EqualFunc | null) 
    static new(key_hash_func?: GLib.HashFunc | null, key_equal_func?: GLib.EqualFunc | null, value_equal_func?: GLib.EqualFunc | null): HashMap
    _init(config?: HashMap_ConstructProps): void
}

interface HashMultiMap_ConstructProps extends AbstractMultiMap_ConstructProps {

    // Own constructor properties of Gee-1.0.Gee.HashMultiMap

    value_hash_func?: GLib.HashFunc | null
    value_equal_func?: GLib.EqualFunc | null
}

interface HashMultiMap {

    // Own properties of Gee-1.0.Gee.HashMultiMap

    readonly key_hash_func: GLib.HashFunc
    readonly key_equal_func: GLib.EqualFunc
    value_hash_func: GLib.HashFunc
    value_equal_func: GLib.EqualFunc

    // Own fields of Gee-1.0.Gee.HashMultiMap

    parent_instance: AbstractMultiMap
    priv: HashMultiMapPrivate

    // Class property signals of Gee-1.0.Gee.HashMultiMap

    connect(sigName: "notify::key-hash-func", callback: (($obj: HashMultiMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::key-hash-func", callback: (($obj: HashMultiMap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::key-hash-func", ...args: any[]): void
    connect(sigName: "notify::key-equal-func", callback: (($obj: HashMultiMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::key-equal-func", callback: (($obj: HashMultiMap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::key-equal-func", ...args: any[]): void
    connect(sigName: "notify::value-hash-func", callback: (($obj: HashMultiMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value-hash-func", callback: (($obj: HashMultiMap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::value-hash-func", ...args: any[]): void
    connect(sigName: "notify::value-equal-func", callback: (($obj: HashMultiMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value-equal-func", callback: (($obj: HashMultiMap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::value-equal-func", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class HashMultiMap extends AbstractMultiMap {

    // Own properties of Gee-1.0.Gee.HashMultiMap

    static name: string
    static $gtype: GObject.GType<HashMultiMap>

    // Constructors of Gee-1.0.Gee.HashMultiMap

    constructor(config?: HashMultiMap_ConstructProps) 
    constructor(key_hash_func?: GLib.HashFunc | null, key_equal_func?: GLib.EqualFunc | null, value_hash_func?: GLib.HashFunc | null, value_equal_func?: GLib.EqualFunc | null) 
    static new(key_hash_func?: GLib.HashFunc | null, key_equal_func?: GLib.EqualFunc | null, value_hash_func?: GLib.HashFunc | null, value_equal_func?: GLib.EqualFunc | null): HashMultiMap
    _init(config?: HashMultiMap_ConstructProps): void
}

interface HashMultiSet_ConstructProps extends AbstractMultiSet_ConstructProps {
}

interface HashMultiSet {

    // Own properties of Gee-1.0.Gee.HashMultiSet

    readonly hash_func: GLib.HashFunc
    readonly equal_func: GLib.EqualFunc

    // Own fields of Gee-1.0.Gee.HashMultiSet

    parent_instance: AbstractMultiSet
    priv: HashMultiSetPrivate

    // Class property signals of Gee-1.0.Gee.HashMultiSet

    connect(sigName: "notify::hash-func", callback: (($obj: HashMultiSet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hash-func", callback: (($obj: HashMultiSet, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hash-func", ...args: any[]): void
    connect(sigName: "notify::equal-func", callback: (($obj: HashMultiSet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::equal-func", callback: (($obj: HashMultiSet, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::equal-func", ...args: any[]): void
    connect(sigName: "notify::size", callback: (($obj: HashMultiSet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: HashMultiSet, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::is-empty", callback: (($obj: HashMultiSet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-empty", callback: (($obj: HashMultiSet, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-empty", ...args: any[]): void
    connect(sigName: "notify::read-only-view", callback: (($obj: HashMultiSet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: HashMultiSet, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only-view", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class HashMultiSet extends AbstractMultiSet {

    // Own properties of Gee-1.0.Gee.HashMultiSet

    static name: string
    static $gtype: GObject.GType<HashMultiSet>

    // Constructors of Gee-1.0.Gee.HashMultiSet

    constructor(config?: HashMultiSet_ConstructProps) 
    constructor(hash_func?: GLib.HashFunc | null, equal_func?: GLib.EqualFunc | null) 
    static new(hash_func?: GLib.HashFunc | null, equal_func?: GLib.EqualFunc | null): HashMultiSet
    _init(config?: HashMultiSet_ConstructProps): void
}

interface HashSet_ConstructProps extends AbstractSet_ConstructProps {

    // Own constructor properties of Gee-1.0.Gee.HashSet

    hash_func?: GLib.HashFunc | null
    equal_func?: GLib.EqualFunc | null
}

interface HashSet {

    // Own properties of Gee-1.0.Gee.HashSet

    hash_func: GLib.HashFunc
    equal_func: GLib.EqualFunc

    // Conflicting properties

    read_only_view: any

    // Own fields of Gee-1.0.Gee.HashSet

    parent_instance: AbstractSet
    priv: HashSetPrivate

    // Class property signals of Gee-1.0.Gee.HashSet

    connect(sigName: "notify::hash-func", callback: (($obj: HashSet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hash-func", callback: (($obj: HashSet, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hash-func", ...args: any[]): void
    connect(sigName: "notify::equal-func", callback: (($obj: HashSet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::equal-func", callback: (($obj: HashSet, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::equal-func", ...args: any[]): void
    connect(sigName: "notify::read-only-view", callback: (($obj: HashSet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: HashSet, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only-view", ...args: any[]): void
    connect(sigName: "notify::size", callback: (($obj: HashSet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: HashSet, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::is-empty", callback: (($obj: HashSet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-empty", callback: (($obj: HashSet, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-empty", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class HashSet extends AbstractSet {

    // Own properties of Gee-1.0.Gee.HashSet

    static name: string
    static $gtype: GObject.GType<HashSet>

    // Constructors of Gee-1.0.Gee.HashSet

    constructor(config?: HashSet_ConstructProps) 
    constructor(hash_func?: GLib.HashFunc | null, equal_func?: GLib.EqualFunc | null) 
    static new(hash_func?: GLib.HashFunc | null, equal_func?: GLib.EqualFunc | null): HashSet
    _init(config?: HashSet_ConstructProps): void

    // Conflicting static methods

    static empty(...args: any[]): any
}

interface LinkedList_ConstructProps extends Queue_ConstructProps, Deque_ConstructProps, AbstractList_ConstructProps {

    // Own constructor properties of Gee-1.0.Gee.LinkedList

    equal_func?: GLib.EqualFunc | null
}

interface LinkedList extends Queue, Deque {

    // Own properties of Gee-1.0.Gee.LinkedList

    equal_func: GLib.EqualFunc

    // Conflicting properties

    read_only_view: any

    // Own fields of Gee-1.0.Gee.LinkedList

    parent_instance: AbstractList
    priv: LinkedListPrivate

    // Class property signals of Gee-1.0.Gee.LinkedList

    connect(sigName: "notify::equal-func", callback: (($obj: LinkedList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::equal-func", callback: (($obj: LinkedList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::equal-func", ...args: any[]): void
    connect(sigName: "notify::read-only-view", callback: (($obj: LinkedList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: LinkedList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only-view", ...args: any[]): void
    connect(sigName: "notify::size", callback: (($obj: LinkedList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: LinkedList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::is-empty", callback: (($obj: LinkedList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-empty", callback: (($obj: LinkedList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-empty", ...args: any[]): void
    connect(sigName: "notify::capacity", callback: (($obj: LinkedList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::capacity", callback: (($obj: LinkedList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::capacity", ...args: any[]): void
    connect(sigName: "notify::remaining-capacity", callback: (($obj: LinkedList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::remaining-capacity", callback: (($obj: LinkedList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::remaining-capacity", ...args: any[]): void
    connect(sigName: "notify::is-full", callback: (($obj: LinkedList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-full", callback: (($obj: LinkedList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-full", ...args: any[]): void
    connect(sigName: "notify::element-type", callback: (($obj: LinkedList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::element-type", callback: (($obj: LinkedList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::element-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class LinkedList extends AbstractList {

    // Own properties of Gee-1.0.Gee.LinkedList

    static name: string
    static $gtype: GObject.GType<LinkedList>

    // Constructors of Gee-1.0.Gee.LinkedList

    constructor(config?: LinkedList_ConstructProps) 
    constructor(equal_func?: GLib.EqualFunc | null) 
    static new(equal_func?: GLib.EqualFunc | null): LinkedList
    _init(config?: LinkedList_ConstructProps): void

    // Conflicting static methods

    static empty(...args: any[]): any
}

interface PriorityQueue_ConstructProps extends AbstractQueue_ConstructProps {

    // Own constructor properties of Gee-1.0.Gee.PriorityQueue

    compare_func?: GLib.CompareFunc | null
}

interface PriorityQueue {

    // Own properties of Gee-1.0.Gee.PriorityQueue

    compare_func: GLib.CompareFunc

    // Own fields of Gee-1.0.Gee.PriorityQueue

    parent_instance: AbstractQueue
    priv: PriorityQueuePrivate

    // Class property signals of Gee-1.0.Gee.PriorityQueue

    connect(sigName: "notify::compare-func", callback: (($obj: PriorityQueue, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::compare-func", callback: (($obj: PriorityQueue, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::compare-func", ...args: any[]): void
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
    connect(sigName: "notify::is-empty", callback: (($obj: PriorityQueue, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-empty", callback: (($obj: PriorityQueue, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-empty", ...args: any[]): void
    connect(sigName: "notify::read-only-view", callback: (($obj: PriorityQueue, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: PriorityQueue, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only-view", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class PriorityQueue extends AbstractQueue {

    // Own properties of Gee-1.0.Gee.PriorityQueue

    static name: string
    static $gtype: GObject.GType<PriorityQueue>

    // Constructors of Gee-1.0.Gee.PriorityQueue

    constructor(config?: PriorityQueue_ConstructProps) 
    constructor(compare_func?: GLib.CompareFunc | null) 
    static new(compare_func?: GLib.CompareFunc | null): PriorityQueue
    _init(config?: PriorityQueue_ConstructProps): void
}

interface TreeMap_ConstructProps extends AbstractMap_ConstructProps {

    // Own constructor properties of Gee-1.0.Gee.TreeMap

    key_compare_func?: GLib.CompareFunc | null
    value_equal_func?: GLib.EqualFunc | null
}

interface TreeMap {

    // Own properties of Gee-1.0.Gee.TreeMap

    key_compare_func: GLib.CompareFunc
    value_equal_func: GLib.EqualFunc

    // Own fields of Gee-1.0.Gee.TreeMap

    parent_instance: AbstractMap
    priv: TreeMapPrivate

    // Class property signals of Gee-1.0.Gee.TreeMap

    connect(sigName: "notify::key-compare-func", callback: (($obj: TreeMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::key-compare-func", callback: (($obj: TreeMap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::key-compare-func", ...args: any[]): void
    connect(sigName: "notify::value-equal-func", callback: (($obj: TreeMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value-equal-func", callback: (($obj: TreeMap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::value-equal-func", ...args: any[]): void
    connect(sigName: "notify::size", callback: (($obj: TreeMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: TreeMap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::is-empty", callback: (($obj: TreeMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-empty", callback: (($obj: TreeMap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-empty", ...args: any[]): void
    connect(sigName: "notify::keys", callback: (($obj: TreeMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::keys", callback: (($obj: TreeMap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::keys", ...args: any[]): void
    connect(sigName: "notify::values", callback: (($obj: TreeMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::values", callback: (($obj: TreeMap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::values", ...args: any[]): void
    connect(sigName: "notify::entries", callback: (($obj: TreeMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::entries", callback: (($obj: TreeMap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::entries", ...args: any[]): void
    connect(sigName: "notify::read-only-view", callback: (($obj: TreeMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: TreeMap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only-view", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class TreeMap extends AbstractMap {

    // Own properties of Gee-1.0.Gee.TreeMap

    static name: string
    static $gtype: GObject.GType<TreeMap>

    // Constructors of Gee-1.0.Gee.TreeMap

    constructor(config?: TreeMap_ConstructProps) 
    constructor(key_compare_func?: GLib.CompareFunc | null, value_equal_func?: GLib.EqualFunc | null) 
    static new(key_compare_func?: GLib.CompareFunc | null, value_equal_func?: GLib.EqualFunc | null): TreeMap
    _init(config?: TreeMap_ConstructProps): void
}

interface TreeMultiMap_ConstructProps extends AbstractMultiMap_ConstructProps {

    // Own constructor properties of Gee-1.0.Gee.TreeMultiMap

    value_compare_func?: GLib.CompareFunc | null
}

interface TreeMultiMap {

    // Own properties of Gee-1.0.Gee.TreeMultiMap

    readonly key_compare_func: GLib.CompareFunc
    value_compare_func: GLib.CompareFunc

    // Own fields of Gee-1.0.Gee.TreeMultiMap

    parent_instance: AbstractMultiMap
    priv: TreeMultiMapPrivate

    // Class property signals of Gee-1.0.Gee.TreeMultiMap

    connect(sigName: "notify::key-compare-func", callback: (($obj: TreeMultiMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::key-compare-func", callback: (($obj: TreeMultiMap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::key-compare-func", ...args: any[]): void
    connect(sigName: "notify::value-compare-func", callback: (($obj: TreeMultiMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value-compare-func", callback: (($obj: TreeMultiMap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::value-compare-func", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class TreeMultiMap extends AbstractMultiMap {

    // Own properties of Gee-1.0.Gee.TreeMultiMap

    static name: string
    static $gtype: GObject.GType<TreeMultiMap>

    // Constructors of Gee-1.0.Gee.TreeMultiMap

    constructor(config?: TreeMultiMap_ConstructProps) 
    constructor(key_compare_func?: GLib.CompareFunc | null, value_compare_func?: GLib.CompareFunc | null) 
    static new(key_compare_func?: GLib.CompareFunc | null, value_compare_func?: GLib.CompareFunc | null): TreeMultiMap
    _init(config?: TreeMultiMap_ConstructProps): void
}

interface TreeMultiSet_ConstructProps extends AbstractMultiSet_ConstructProps {
}

interface TreeMultiSet {

    // Own properties of Gee-1.0.Gee.TreeMultiSet

    readonly compare_func: GLib.CompareFunc

    // Own fields of Gee-1.0.Gee.TreeMultiSet

    parent_instance: AbstractMultiSet
    priv: TreeMultiSetPrivate

    // Class property signals of Gee-1.0.Gee.TreeMultiSet

    connect(sigName: "notify::compare-func", callback: (($obj: TreeMultiSet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::compare-func", callback: (($obj: TreeMultiSet, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::compare-func", ...args: any[]): void
    connect(sigName: "notify::size", callback: (($obj: TreeMultiSet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: TreeMultiSet, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::is-empty", callback: (($obj: TreeMultiSet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-empty", callback: (($obj: TreeMultiSet, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-empty", ...args: any[]): void
    connect(sigName: "notify::read-only-view", callback: (($obj: TreeMultiSet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: TreeMultiSet, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only-view", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class TreeMultiSet extends AbstractMultiSet {

    // Own properties of Gee-1.0.Gee.TreeMultiSet

    static name: string
    static $gtype: GObject.GType<TreeMultiSet>

    // Constructors of Gee-1.0.Gee.TreeMultiSet

    constructor(config?: TreeMultiSet_ConstructProps) 
    constructor(compare_func?: GLib.CompareFunc | null) 
    static new(compare_func?: GLib.CompareFunc | null): TreeMultiSet
    _init(config?: TreeMultiSet_ConstructProps): void
}

interface TreeSet_ConstructProps extends SortedSet_ConstructProps, AbstractSet_ConstructProps {

    // Own constructor properties of Gee-1.0.Gee.TreeSet

    compare_func?: GLib.CompareFunc | null
}

interface TreeSet extends SortedSet {

    // Own properties of Gee-1.0.Gee.TreeSet

    compare_func: GLib.CompareFunc

    // Conflicting properties

    read_only_view: any

    // Own fields of Gee-1.0.Gee.TreeSet

    parent_instance: AbstractSet
    priv: TreeSetPrivate

    // Class property signals of Gee-1.0.Gee.TreeSet

    connect(sigName: "notify::compare-func", callback: (($obj: TreeSet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::compare-func", callback: (($obj: TreeSet, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::compare-func", ...args: any[]): void
    connect(sigName: "notify::read-only-view", callback: (($obj: TreeSet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: TreeSet, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only-view", ...args: any[]): void
    connect(sigName: "notify::size", callback: (($obj: TreeSet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: TreeSet, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::is-empty", callback: (($obj: TreeSet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-empty", callback: (($obj: TreeSet, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-empty", ...args: any[]): void
    connect(sigName: "notify::element-type", callback: (($obj: TreeSet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::element-type", callback: (($obj: TreeSet, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::element-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class TreeSet extends AbstractSet {

    // Own properties of Gee-1.0.Gee.TreeSet

    static name: string
    static $gtype: GObject.GType<TreeSet>

    // Constructors of Gee-1.0.Gee.TreeSet

    constructor(config?: TreeSet_ConstructProps) 
    constructor(compare_func?: GLib.CompareFunc | null) 
    static new(compare_func?: GLib.CompareFunc | null): TreeSet
    _init(config?: TreeSet_ConstructProps): void

    // Conflicting static methods

    static empty(...args: any[]): any
}

interface MapEntry_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of Gee-1.0.Gee.MapEntry

    value?: object | null
}

interface MapEntry {

    // Own properties of Gee-1.0.Gee.MapEntry

    readonly key: object
    value: object

    // Own fields of Gee-1.0.Gee.MapEntry

    parent_instance: GObject.Object
    priv: EntryPrivate

    // Class property signals of Gee-1.0.Gee.MapEntry

    connect(sigName: "notify::key", callback: (($obj: MapEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::key", callback: (($obj: MapEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::key", ...args: any[]): void
    connect(sigName: "notify::value", callback: (($obj: MapEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value", callback: (($obj: MapEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::value", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class MapEntry extends GObject.Object {

    // Own properties of Gee-1.0.Gee.MapEntry

    static name: string
    static $gtype: GObject.GType<MapEntry>

    // Constructors of Gee-1.0.Gee.MapEntry

    constructor(config?: MapEntry_ConstructProps) 
    _init(config?: MapEntry_ConstructProps): void
}

interface AbstractCollectionClass {

    // Own fields of Gee-1.0.Gee.AbstractCollectionClass

    parent_class: GObject.ObjectClass
    contains: (self: AbstractCollection, item?: object | null) => boolean
    add: (self: AbstractCollection, item?: object | null) => boolean
    remove: (self: AbstractCollection, item?: object | null) => boolean
    clear: (self: AbstractCollection) => void
    to_array: (self: AbstractCollection) => object[]
    add_all: (self: AbstractCollection, collection: Collection) => boolean
    contains_all: (self: AbstractCollection, collection: Collection) => boolean
    remove_all: (self: AbstractCollection, collection: Collection) => boolean
    retain_all: (self: AbstractCollection, collection: Collection) => boolean
    iterator: (self: AbstractCollection) => Iterator
}

abstract class AbstractCollectionClass {

    // Own properties of Gee-1.0.Gee.AbstractCollectionClass

    static name: string
}

interface AbstractCollectionPrivate {
}

class AbstractCollectionPrivate {

    // Own properties of Gee-1.0.Gee.AbstractCollectionPrivate

    static name: string
}

interface AbstractListClass {

    // Own fields of Gee-1.0.Gee.AbstractListClass

    parent_class: AbstractCollectionClass
    list_iterator: (self: AbstractList) => ListIterator
    get: (self: AbstractList, index: number) => object | null
    set: (self: AbstractList, index: number, item?: object | null) => void
    index_of: (self: AbstractList, item?: object | null) => number
    insert: (self: AbstractList, index: number, item?: object | null) => void
    remove_at: (self: AbstractList, index: number) => object | null
    slice: (self: AbstractList, start: number, stop: number) => List | null
    first: (self: AbstractList) => object | null
    last: (self: AbstractList) => object | null
    insert_all: (self: AbstractList, index: number, collection: Collection) => void
}

abstract class AbstractListClass {

    // Own properties of Gee-1.0.Gee.AbstractListClass

    static name: string
}

interface AbstractListPrivate {
}

class AbstractListPrivate {

    // Own properties of Gee-1.0.Gee.AbstractListPrivate

    static name: string
}

interface AbstractMapClass {

    // Own fields of Gee-1.0.Gee.AbstractMapClass

    parent_class: GObject.ObjectClass
    has_key: (self: AbstractMap, key?: object | null) => boolean
    has: (self: AbstractMap, key?: object | null, value?: object | null) => boolean
    get: (self: AbstractMap, key?: object | null) => object | null
    set: (self: AbstractMap, key?: object | null, value?: object | null) => void
    unset: (self: AbstractMap, key?: object | null) => [ /* returnType */ boolean, /* value */ object | null ]
    map_iterator: (self: AbstractMap) => MapIterator
    clear: (self: AbstractMap) => void
    set_all: (self: AbstractMap, map: Map) => void
    unset_all: (self: AbstractMap, map: Map) => boolean
    has_all: (self: AbstractMap, map: Map) => boolean
}

abstract class AbstractMapClass {

    // Own properties of Gee-1.0.Gee.AbstractMapClass

    static name: string
}

interface AbstractMapPrivate {
}

class AbstractMapPrivate {

    // Own properties of Gee-1.0.Gee.AbstractMapPrivate

    static name: string
}

interface AbstractMultiMapClass {

    // Own fields of Gee-1.0.Gee.AbstractMultiMapClass

    parent_class: GObject.ObjectClass
    create_value_storage: (self: AbstractMultiMap) => Collection
    create_multi_key_set: (self: AbstractMultiMap) => MultiSet
    get_value_equal_func: (self: AbstractMultiMap) => GLib.EqualFunc
}

abstract class AbstractMultiMapClass {

    // Own properties of Gee-1.0.Gee.AbstractMultiMapClass

    static name: string
}

interface AbstractMultiMapPrivate {
}

class AbstractMultiMapPrivate {

    // Own properties of Gee-1.0.Gee.AbstractMultiMapPrivate

    static name: string
}

interface AbstractMultiSetClass {

    // Own fields of Gee-1.0.Gee.AbstractMultiSetClass

    parent_class: AbstractCollectionClass
}

abstract class AbstractMultiSetClass {

    // Own properties of Gee-1.0.Gee.AbstractMultiSetClass

    static name: string
}

interface AbstractMultiSetPrivate {
}

class AbstractMultiSetPrivate {

    // Own properties of Gee-1.0.Gee.AbstractMultiSetPrivate

    static name: string
}

interface AbstractQueueClass {

    // Own fields of Gee-1.0.Gee.AbstractQueueClass

    parent_class: AbstractCollectionClass
    offer: (self: AbstractQueue, element?: object | null) => boolean
    peek: (self: AbstractQueue) => object | null
    poll: (self: AbstractQueue) => object | null
    drain: (self: AbstractQueue, recipient: Collection, amount: number) => number
}

abstract class AbstractQueueClass {

    // Own properties of Gee-1.0.Gee.AbstractQueueClass

    static name: string
}

interface AbstractQueuePrivate {
}

class AbstractQueuePrivate {

    // Own properties of Gee-1.0.Gee.AbstractQueuePrivate

    static name: string
}

interface AbstractSetClass {

    // Own fields of Gee-1.0.Gee.AbstractSetClass

    parent_class: AbstractCollectionClass
}

abstract class AbstractSetClass {

    // Own properties of Gee-1.0.Gee.AbstractSetClass

    static name: string
}

interface AbstractSetPrivate {
}

class AbstractSetPrivate {

    // Own properties of Gee-1.0.Gee.AbstractSetPrivate

    static name: string
}

interface ArrayListClass {

    // Own fields of Gee-1.0.Gee.ArrayListClass

    parent_class: AbstractListClass
}

abstract class ArrayListClass {

    // Own properties of Gee-1.0.Gee.ArrayListClass

    static name: string
}

interface ArrayListPrivate {
}

class ArrayListPrivate {

    // Own properties of Gee-1.0.Gee.ArrayListPrivate

    static name: string
}

interface HashMapClass {

    // Own fields of Gee-1.0.Gee.HashMapClass

    parent_class: AbstractMapClass
}

abstract class HashMapClass {

    // Own properties of Gee-1.0.Gee.HashMapClass

    static name: string
}

interface HashMapPrivate {
}

class HashMapPrivate {

    // Own properties of Gee-1.0.Gee.HashMapPrivate

    static name: string
}

interface HashMultiMapClass {

    // Own fields of Gee-1.0.Gee.HashMultiMapClass

    parent_class: AbstractMultiMapClass
}

abstract class HashMultiMapClass {

    // Own properties of Gee-1.0.Gee.HashMultiMapClass

    static name: string
}

interface HashMultiMapPrivate {
}

class HashMultiMapPrivate {

    // Own properties of Gee-1.0.Gee.HashMultiMapPrivate

    static name: string
}

interface HashMultiSetClass {

    // Own fields of Gee-1.0.Gee.HashMultiSetClass

    parent_class: AbstractMultiSetClass
}

abstract class HashMultiSetClass {

    // Own properties of Gee-1.0.Gee.HashMultiSetClass

    static name: string
}

interface HashMultiSetPrivate {
}

class HashMultiSetPrivate {

    // Own properties of Gee-1.0.Gee.HashMultiSetPrivate

    static name: string
}

interface HashSetClass {

    // Own fields of Gee-1.0.Gee.HashSetClass

    parent_class: AbstractSetClass
}

abstract class HashSetClass {

    // Own properties of Gee-1.0.Gee.HashSetClass

    static name: string
}

interface HashSetPrivate {
}

class HashSetPrivate {

    // Own properties of Gee-1.0.Gee.HashSetPrivate

    static name: string
}

interface LinkedListClass {

    // Own fields of Gee-1.0.Gee.LinkedListClass

    parent_class: AbstractListClass
}

abstract class LinkedListClass {

    // Own properties of Gee-1.0.Gee.LinkedListClass

    static name: string
}

interface LinkedListPrivate {
}

class LinkedListPrivate {

    // Own properties of Gee-1.0.Gee.LinkedListPrivate

    static name: string
}

interface PriorityQueueClass {

    // Own fields of Gee-1.0.Gee.PriorityQueueClass

    parent_class: AbstractQueueClass
}

abstract class PriorityQueueClass {

    // Own properties of Gee-1.0.Gee.PriorityQueueClass

    static name: string
}

interface PriorityQueuePrivate {
}

class PriorityQueuePrivate {

    // Own properties of Gee-1.0.Gee.PriorityQueuePrivate

    static name: string
}

interface TreeMapClass {

    // Own fields of Gee-1.0.Gee.TreeMapClass

    parent_class: AbstractMapClass
}

abstract class TreeMapClass {

    // Own properties of Gee-1.0.Gee.TreeMapClass

    static name: string
}

interface TreeMapPrivate {
}

class TreeMapPrivate {

    // Own properties of Gee-1.0.Gee.TreeMapPrivate

    static name: string
}

interface TreeMultiMapClass {

    // Own fields of Gee-1.0.Gee.TreeMultiMapClass

    parent_class: AbstractMultiMapClass
}

abstract class TreeMultiMapClass {

    // Own properties of Gee-1.0.Gee.TreeMultiMapClass

    static name: string
}

interface TreeMultiMapPrivate {
}

class TreeMultiMapPrivate {

    // Own properties of Gee-1.0.Gee.TreeMultiMapPrivate

    static name: string
}

interface TreeMultiSetClass {

    // Own fields of Gee-1.0.Gee.TreeMultiSetClass

    parent_class: AbstractMultiSetClass
}

abstract class TreeMultiSetClass {

    // Own properties of Gee-1.0.Gee.TreeMultiSetClass

    static name: string
}

interface TreeMultiSetPrivate {
}

class TreeMultiSetPrivate {

    // Own properties of Gee-1.0.Gee.TreeMultiSetPrivate

    static name: string
}

interface TreeSetClass {

    // Own fields of Gee-1.0.Gee.TreeSetClass

    parent_class: AbstractSetClass
}

abstract class TreeSetClass {

    // Own properties of Gee-1.0.Gee.TreeSetClass

    static name: string
}

interface TreeSetPrivate {
}

class TreeSetPrivate {

    // Own properties of Gee-1.0.Gee.TreeSetPrivate

    static name: string
}

interface BidirIteratorIface {

    // Own fields of Gee-1.0.Gee.BidirIteratorIface

    parent_iface: GObject.TypeInterface
    previous: (self: BidirIterator) => boolean
    has_previous: (self: BidirIterator) => boolean
    last: (self: BidirIterator) => boolean
}

abstract class BidirIteratorIface {

    // Own properties of Gee-1.0.Gee.BidirIteratorIface

    static name: string
}

interface CollectionIface {

    // Own fields of Gee-1.0.Gee.CollectionIface

    parent_iface: GObject.TypeInterface
    contains: (self: Collection, item?: object | null) => boolean
    add: (self: Collection, item?: object | null) => boolean
    remove: (self: Collection, item?: object | null) => boolean
    clear: (self: Collection) => void
    add_all: (self: Collection, collection: Collection) => boolean
    contains_all: (self: Collection, collection: Collection) => boolean
    remove_all: (self: Collection, collection: Collection) => boolean
    retain_all: (self: Collection, collection: Collection) => boolean
    to_array: (self: Collection) => object[]
}

abstract class CollectionIface {

    // Own properties of Gee-1.0.Gee.CollectionIface

    static name: string
}

interface ComparableIface {

    // Own fields of Gee-1.0.Gee.ComparableIface

    parent_iface: GObject.TypeInterface
    compare_to: (self: Comparable, object?: object | null) => number
}

abstract class ComparableIface {

    // Own properties of Gee-1.0.Gee.ComparableIface

    static name: string
}

interface DequeIface {

    // Own fields of Gee-1.0.Gee.DequeIface

    parent_iface: GObject.TypeInterface
    offer_head: (self: Deque, element?: object | null) => boolean
    peek_head: (self: Deque) => object | null
    poll_head: (self: Deque) => object | null
    drain_head: (self: Deque, recipient: Collection, amount: number) => number
    offer_tail: (self: Deque, element?: object | null) => boolean
    peek_tail: (self: Deque) => object | null
    poll_tail: (self: Deque) => object | null
    drain_tail: (self: Deque, recipient: Collection, amount: number) => number
}

abstract class DequeIface {

    // Own properties of Gee-1.0.Gee.DequeIface

    static name: string
}

interface IterableIface {

    // Own fields of Gee-1.0.Gee.IterableIface

    parent_iface: GObject.TypeInterface
    iterator: (self: Iterable) => Iterator
}

abstract class IterableIface {

    // Own properties of Gee-1.0.Gee.IterableIface

    static name: string
}

interface IteratorIface {

    // Own fields of Gee-1.0.Gee.IteratorIface

    parent_iface: GObject.TypeInterface
    next: (self: Iterator) => boolean
    has_next: (self: Iterator) => boolean
    first: (self: Iterator) => boolean
    get: (self: Iterator) => object | null
    remove: (self: Iterator) => void
}

abstract class IteratorIface {

    // Own properties of Gee-1.0.Gee.IteratorIface

    static name: string
}

interface ListIface {

    // Own fields of Gee-1.0.Gee.ListIface

    parent_iface: GObject.TypeInterface
    list_iterator: (self: List) => ListIterator
    get: (self: List, index: number) => object | null
    set: (self: List, index: number, item?: object | null) => void
    index_of: (self: List, item?: object | null) => number
    insert: (self: List, index: number, item?: object | null) => void
    remove_at: (self: List, index: number) => object | null
    slice: (self: List, start: number, stop: number) => List | null
    first: (self: List) => object | null
    last: (self: List) => object | null
    insert_all: (self: List, index: number, collection: Collection) => void
    sort: (self: List, compare_func?: GLib.CompareFunc | null) => void
}

abstract class ListIface {

    // Own properties of Gee-1.0.Gee.ListIface

    static name: string
}

interface ListIteratorIface {

    // Own fields of Gee-1.0.Gee.ListIteratorIface

    parent_iface: GObject.TypeInterface
    set: (self: ListIterator, item?: object | null) => void
    insert: (self: ListIterator, item?: object | null) => void
    add: (self: ListIterator, item?: object | null) => void
    index: (self: ListIterator) => number
}

abstract class ListIteratorIface {

    // Own properties of Gee-1.0.Gee.ListIteratorIface

    static name: string
}

interface MapIface {

    // Own fields of Gee-1.0.Gee.MapIface

    parent_iface: GObject.TypeInterface
    has_key: (self: Map, key?: object | null) => boolean
    contains: (self: Map, key?: object | null) => boolean
    has: (self: Map, key?: object | null, value?: object | null) => boolean
    get: (self: Map, key?: object | null) => object | null
    set: (self: Map, key?: object | null, value?: object | null) => void
    unset: (self: Map, key?: object | null) => [ /* returnType */ boolean, /* value */ object | null ]
    remove: (self: Map, key?: object | null) => [ /* returnType */ boolean, /* value */ object | null ]
    clear: (self: Map) => void
    map_iterator: (self: Map) => MapIterator
    set_all: (self: Map, map: Map) => void
    unset_all: (self: Map, map: Map) => boolean
    remove_all: (self: Map, map: Map) => boolean
    has_all: (self: Map, map: Map) => boolean
    contains_all: (self: Map, map: Map) => boolean
}

abstract class MapIface {

    // Own properties of Gee-1.0.Gee.MapIface

    static name: string
}

interface MapEntryClass {

    // Own fields of Gee-1.0.Gee.MapEntryClass

    parent_class: GObject.ObjectClass
}

abstract class MapEntryClass {

    // Own properties of Gee-1.0.Gee.MapEntryClass

    static name: string
}

interface EntryPrivate {
}

class EntryPrivate {

    // Own properties of Gee-1.0.Gee.EntryPrivate

    static name: string
}

interface MapIteratorIface {

    // Own fields of Gee-1.0.Gee.MapIteratorIface

    parent_iface: GObject.TypeInterface
    next: (self: MapIterator) => boolean
    has_next: (self: MapIterator) => boolean
    first: (self: MapIterator) => boolean
    get_key: (self: MapIterator) => object | null
    get_value: (self: MapIterator) => object | null
    set_value: (self: MapIterator, value?: object | null) => void
    unset: (self: MapIterator) => void
}

abstract class MapIteratorIface {

    // Own properties of Gee-1.0.Gee.MapIteratorIface

    static name: string
}

interface MultiMapIface {

    // Own fields of Gee-1.0.Gee.MultiMapIface

    parent_iface: GObject.TypeInterface
    get_keys: (self: MultiMap) => Set
    get_all_keys: (self: MultiMap) => MultiSet
    get_values: (self: MultiMap) => Collection
    contains: (self: MultiMap, key?: object | null) => boolean
    get: (self: MultiMap, key?: object | null) => Collection
    set: (self: MultiMap, key?: object | null, value?: object | null) => void
    remove: (self: MultiMap, key?: object | null, value?: object | null) => boolean
    remove_all: (self: MultiMap, key?: object | null) => boolean
    clear: (self: MultiMap) => void
}

abstract class MultiMapIface {

    // Own properties of Gee-1.0.Gee.MultiMapIface

    static name: string
}

interface MultiSetIface {

    // Own fields of Gee-1.0.Gee.MultiSetIface

    parent_iface: GObject.TypeInterface
    count: (self: MultiSet, item?: object | null) => number
}

abstract class MultiSetIface {

    // Own properties of Gee-1.0.Gee.MultiSetIface

    static name: string
}

interface QueueIface {

    // Own fields of Gee-1.0.Gee.QueueIface

    parent_iface: GObject.TypeInterface
    offer: (self: Queue, element?: object | null) => boolean
    peek: (self: Queue) => object | null
    poll: (self: Queue) => object | null
    drain: (self: Queue, recipient: Collection, amount: number) => number
}

abstract class QueueIface {

    // Own properties of Gee-1.0.Gee.QueueIface

    static name: string
}

interface SetIface {

    // Own fields of Gee-1.0.Gee.SetIface

    parent_iface: GObject.TypeInterface
}

abstract class SetIface {

    // Own properties of Gee-1.0.Gee.SetIface

    static name: string
}

interface SortedSetIface {

    // Own fields of Gee-1.0.Gee.SortedSetIface

    parent_iface: GObject.TypeInterface
    first: (self: SortedSet) => object | null
    last: (self: SortedSet) => object | null
    bidir_iterator: (self: SortedSet) => BidirIterator
    iterator_at: (self: SortedSet, element?: object | null) => BidirIterator | null
    lower: (self: SortedSet, element?: object | null) => object | null
    higher: (self: SortedSet, element?: object | null) => object | null
    floor: (self: SortedSet, element?: object | null) => object | null
    ceil: (self: SortedSet, element?: object | null) => object | null
    head_set: (self: SortedSet, before?: object | null) => SortedSet
    tail_set: (self: SortedSet, after?: object | null) => SortedSet
    sub_set: (self: SortedSet, from?: object | null, to?: object | null) => SortedSet
}

abstract class SortedSetIface {

    // Own properties of Gee-1.0.Gee.SortedSetIface

    static name: string
}

}
export default Gee;