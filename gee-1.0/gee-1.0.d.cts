
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

export function functions_get_equal_func_for(t: GObject.GType): GLib.EqualFunc
export function functions_get_hash_func_for(t: GObject.GType): GLib.HashFunc
export function functions_get_compare_func_for(t: GObject.GType): GLib.CompareFunc
export function direct_compare(_val1?: any | null, _val2?: any | null): number
export module BidirIterator {

    // Constructor properties interface

    export interface ConstructorProperties extends Iterator.ConstructorProperties, GObject.Object.ConstructorProperties {
    }

}

export interface BidirIterator extends Iterator {

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

export class BidirIterator extends GObject.Object {

    // Own properties of Gee-1.0.Gee.BidirIterator

    static name: string
    static $gtype: GObject.GType<BidirIterator>

    // Constructors of Gee-1.0.Gee.BidirIterator

    constructor(config?: BidirIterator.ConstructorProperties) 
    _init(config?: BidirIterator.ConstructorProperties): void
}

export module Collection {

    // Constructor properties interface

    export interface ConstructorProperties extends Iterable.ConstructorProperties, GObject.Object.ConstructorProperties {
    }

}

export interface Collection extends Iterable {

    // Own properties of Gee-1.0.Gee.Collection

    readonly size: number
    readonly is_empty: boolean
    readonly isEmpty: boolean
    readonly read_only_view: Collection
    readonly readOnlyView: Collection

    // Owm methods of Gee-1.0.Gee.Collection

    contains(item?: any | null): boolean
    add(item?: any | null): boolean
    remove(item?: any | null): boolean
    clear(): void
    add_all(collection: Collection): boolean
    contains_all(collection: Collection): boolean
    remove_all(collection: Collection): boolean
    retain_all(collection: Collection): boolean
    to_array(): any[]

    // Own virtual methods of Gee-1.0.Gee.Collection

    vfunc_contains(item?: any | null): boolean
    vfunc_add(item?: any | null): boolean
    vfunc_remove(item?: any | null): boolean
    vfunc_clear(): void
    vfunc_add_all(collection: Collection): boolean
    vfunc_contains_all(collection: Collection): boolean
    vfunc_remove_all(collection: Collection): boolean
    vfunc_retain_all(collection: Collection): boolean
    vfunc_to_array(): any[]

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

export class Collection extends GObject.Object {

    // Own properties of Gee-1.0.Gee.Collection

    static name: string
    static $gtype: GObject.GType<Collection>

    // Constructors of Gee-1.0.Gee.Collection

    constructor(config?: Collection.ConstructorProperties) 
    _init(config?: Collection.ConstructorProperties): void
    static empty(): Collection
}

export module Comparable {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface Comparable extends GObject.Object {

    // Owm methods of Gee-1.0.Gee.Comparable

    compare_to(object?: any | null): number

    // Own virtual methods of Gee-1.0.Gee.Comparable

    vfunc_compare_to(object?: any | null): number

    // Class property signals of Gee-1.0.Gee.Comparable

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class Comparable {

    // Own properties of Gee-1.0.Gee.Comparable

    static name: string
    static $gtype: GObject.GType<Comparable>

    // Constructors of Gee-1.0.Gee.Comparable

    constructor(config?: Comparable.ConstructorProperties) 
    _init(config?: Comparable.ConstructorProperties): void
}

export module Deque {

    // Constructor properties interface

    export interface ConstructorProperties extends Queue.ConstructorProperties, GObject.Object.ConstructorProperties {
    }

}

export interface Deque extends Queue {

    // Owm methods of Gee-1.0.Gee.Deque

    offer_head(element?: any | null): boolean
    peek_head(): any | null
    poll_head(): any | null
    drain_head(recipient: Collection, amount: number): number
    offer_tail(element?: any | null): boolean
    peek_tail(): any | null
    poll_tail(): any | null
    drain_tail(recipient: Collection, amount: number): number

    // Own virtual methods of Gee-1.0.Gee.Deque

    vfunc_offer_head(element?: any | null): boolean
    vfunc_peek_head(): any | null
    vfunc_poll_head(): any | null
    vfunc_drain_head(recipient: Collection, amount: number): number
    vfunc_offer_tail(element?: any | null): boolean
    vfunc_peek_tail(): any | null
    vfunc_poll_tail(): any | null
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

export class Deque extends GObject.Object {

    // Own properties of Gee-1.0.Gee.Deque

    static name: string
    static $gtype: GObject.GType<Deque>

    // Constructors of Gee-1.0.Gee.Deque

    constructor(config?: Deque.ConstructorProperties) 
    _init(config?: Deque.ConstructorProperties): void
}

export module Iterable {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface Iterable extends GObject.Object {

    // Own properties of Gee-1.0.Gee.Iterable

    readonly element_type: GObject.GType
    readonly elementType: GObject.GType

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

export class Iterable {

    // Own properties of Gee-1.0.Gee.Iterable

    static name: string
    static $gtype: GObject.GType<Iterable>

    // Constructors of Gee-1.0.Gee.Iterable

    constructor(config?: Iterable.ConstructorProperties) 
    _init(config?: Iterable.ConstructorProperties): void
}

export module Iterator {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface Iterator extends GObject.Object {

    // Owm methods of Gee-1.0.Gee.Iterator

    next(): boolean
    has_next(): boolean
    first(): boolean
    get(): any | null
    remove(): void

    // Own virtual methods of Gee-1.0.Gee.Iterator

    vfunc_next(): boolean
    vfunc_has_next(): boolean
    vfunc_first(): boolean
    vfunc_get(): any | null
    vfunc_remove(): void

    // Class property signals of Gee-1.0.Gee.Iterator

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class Iterator {

    // Own properties of Gee-1.0.Gee.Iterator

    static name: string
    static $gtype: GObject.GType<Iterator>

    // Constructors of Gee-1.0.Gee.Iterator

    constructor(config?: Iterator.ConstructorProperties) 
    _init(config?: Iterator.ConstructorProperties): void
}

export module List {

    // Constructor properties interface

    export interface ConstructorProperties extends Collection.ConstructorProperties, GObject.Object.ConstructorProperties {
    }

}

export interface List extends Collection {

    // Own properties of Gee-1.0.Gee.List

    readonly read_only_view: any
    readonly readOnlyView: any

    // Owm methods of Gee-1.0.Gee.List

    list_iterator(): ListIterator
    get(index: number): any | null
    set(index: number, item?: any | null): void
    index_of(item?: any | null): number
    insert(index: number, item?: any | null): void
    remove_at(index: number): any | null
    slice(start: number, stop: number): List | null
    first(): any | null
    last(): any | null
    insert_all(index: number, collection: Collection): void
    sort(compare_func?: GLib.CompareFunc | null): void

    // Own virtual methods of Gee-1.0.Gee.List

    vfunc_list_iterator(): ListIterator
    vfunc_get(index: number): any | null
    vfunc_set(index: number, item?: any | null): void
    vfunc_index_of(item?: any | null): number
    vfunc_insert(index: number, item?: any | null): void
    vfunc_remove_at(index: number): any | null
    vfunc_slice(start: number, stop: number): List | null
    vfunc_first(): any | null
    vfunc_last(): any | null
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

export class List extends GObject.Object {

    // Own properties of Gee-1.0.Gee.List

    static name: string
    static $gtype: GObject.GType<List>

    // Constructors of Gee-1.0.Gee.List

    constructor(config?: List.ConstructorProperties) 
    _init(config?: List.ConstructorProperties): void
    static empty(): List

    // Overloads of empty

    static empty(): Collection
}

export module ListIterator {

    // Constructor properties interface

    export interface ConstructorProperties extends BidirIterator.ConstructorProperties, GObject.Object.ConstructorProperties {
    }

}

export interface ListIterator extends BidirIterator {

    // Owm methods of Gee-1.0.Gee.ListIterator

    set(item?: any | null): void
    insert(item?: any | null): void
    add(item?: any | null): void
    index(): number

    // Own virtual methods of Gee-1.0.Gee.ListIterator

    vfunc_set(item?: any | null): void
    vfunc_insert(item?: any | null): void
    vfunc_add(item?: any | null): void
    vfunc_index(): number

    // Class property signals of Gee-1.0.Gee.ListIterator

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class ListIterator extends GObject.Object {

    // Own properties of Gee-1.0.Gee.ListIterator

    static name: string
    static $gtype: GObject.GType<ListIterator>

    // Constructors of Gee-1.0.Gee.ListIterator

    constructor(config?: ListIterator.ConstructorProperties) 
    _init(config?: ListIterator.ConstructorProperties): void
}

export module Map {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties, Iterable.ConstructorProperties {
    }

}

export interface Map extends GObject.Object, Iterable {

    // Own properties of Gee-1.0.Gee.Map

    readonly size: number
    readonly is_empty: boolean
    readonly isEmpty: boolean
    readonly keys: Set
    readonly values: Collection
    readonly entries: Set
    readonly read_only_view: Map
    readonly readOnlyView: Map
    readonly key_type: GObject.GType
    readonly keyType: GObject.GType
    readonly value_type: GObject.GType
    readonly valueType: GObject.GType

    // Owm methods of Gee-1.0.Gee.Map

    has_key(key?: any | null): boolean
    contains(key?: any | null): boolean
    has(key?: any | null, value?: any | null): boolean
    get(key?: any | null): any | null
    set(key?: any | null, value?: any | null): void
    unset(key?: any | null): [ /* returnType */ boolean, /* value */ any | null ]
    remove(key?: any | null): [ /* returnType */ boolean, /* value */ any | null ]
    clear(): void
    map_iterator(): MapIterator
    set_all(map: Map): void
    unset_all(map: Map): boolean
    remove_all(map: Map): boolean
    has_all(map: Map): boolean
    contains_all(map: Map): boolean

    // Own virtual methods of Gee-1.0.Gee.Map

    vfunc_has_key(key?: any | null): boolean
    vfunc_contains(key?: any | null): boolean
    vfunc_has(key?: any | null, value?: any | null): boolean
    vfunc_get(key?: any | null): any | null
    vfunc_set(key?: any | null, value?: any | null): void
    vfunc_unset(key?: any | null): [ /* returnType */ boolean, /* value */ any | null ]
    vfunc_remove(key?: any | null): [ /* returnType */ boolean, /* value */ any | null ]
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

export class Map {

    // Own properties of Gee-1.0.Gee.Map

    static name: string
    static $gtype: GObject.GType<Map>

    // Constructors of Gee-1.0.Gee.Map

    constructor(config?: Map.ConstructorProperties) 
    _init(config?: Map.ConstructorProperties): void
    static empty(): Map
}

export module MapIterator {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface MapIterator extends GObject.Object {

    // Owm methods of Gee-1.0.Gee.MapIterator

    next(): boolean
    has_next(): boolean
    first(): boolean
    get_key(): any | null
    get_value(): any | null
    set_value(value?: any | null): void
    unset(): void

    // Own virtual methods of Gee-1.0.Gee.MapIterator

    vfunc_next(): boolean
    vfunc_has_next(): boolean
    vfunc_first(): boolean
    vfunc_get_key(): any | null
    vfunc_get_value(): any | null
    vfunc_set_value(value?: any | null): void
    vfunc_unset(): void

    // Class property signals of Gee-1.0.Gee.MapIterator

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class MapIterator {

    // Own properties of Gee-1.0.Gee.MapIterator

    static name: string
    static $gtype: GObject.GType<MapIterator>

    // Constructors of Gee-1.0.Gee.MapIterator

    constructor(config?: MapIterator.ConstructorProperties) 
    _init(config?: MapIterator.ConstructorProperties): void
}

export module MultiMap {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface MultiMap extends GObject.Object {

    // Own properties of Gee-1.0.Gee.MultiMap

    readonly size: number

    // Owm methods of Gee-1.0.Gee.MultiMap

    get_keys(): Set
    get_all_keys(): MultiSet
    get_values(): Collection
    contains(key?: any | null): boolean
    get(key?: any | null): Collection
    set(key?: any | null, value?: any | null): void
    remove(key?: any | null, value?: any | null): boolean
    remove_all(key?: any | null): boolean
    clear(): void

    // Own virtual methods of Gee-1.0.Gee.MultiMap

    vfunc_get_keys(): Set
    vfunc_get_all_keys(): MultiSet
    vfunc_get_values(): Collection
    vfunc_contains(key?: any | null): boolean
    vfunc_get(key?: any | null): Collection
    vfunc_set(key?: any | null, value?: any | null): void
    vfunc_remove(key?: any | null, value?: any | null): boolean
    vfunc_remove_all(key?: any | null): boolean
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

export class MultiMap {

    // Own properties of Gee-1.0.Gee.MultiMap

    static name: string
    static $gtype: GObject.GType<MultiMap>

    // Constructors of Gee-1.0.Gee.MultiMap

    constructor(config?: MultiMap.ConstructorProperties) 
    _init(config?: MultiMap.ConstructorProperties): void
}

export module MultiSet {

    // Constructor properties interface

    export interface ConstructorProperties extends Collection.ConstructorProperties, GObject.Object.ConstructorProperties {
    }

}

export interface MultiSet extends Collection {

    // Owm methods of Gee-1.0.Gee.MultiSet

    count(item?: any | null): number

    // Own virtual methods of Gee-1.0.Gee.MultiSet

    vfunc_count(item?: any | null): number

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

export class MultiSet extends GObject.Object {

    // Own properties of Gee-1.0.Gee.MultiSet

    static name: string
    static $gtype: GObject.GType<MultiSet>

    // Constructors of Gee-1.0.Gee.MultiSet

    constructor(config?: MultiSet.ConstructorProperties) 
    _init(config?: MultiSet.ConstructorProperties): void
}

export module Queue {

    // Constructor properties interface

    export interface ConstructorProperties extends Collection.ConstructorProperties, GObject.Object.ConstructorProperties {
    }

}

export interface Queue extends Collection {

    // Own properties of Gee-1.0.Gee.Queue

    readonly capacity: number
    readonly remaining_capacity: number
    readonly remainingCapacity: number
    readonly is_full: boolean
    readonly isFull: boolean

    // Owm methods of Gee-1.0.Gee.Queue

    offer(element?: any | null): boolean
    peek(): any | null
    poll(): any | null
    drain(recipient: Collection, amount: number): number

    // Own virtual methods of Gee-1.0.Gee.Queue

    vfunc_offer(element?: any | null): boolean
    vfunc_peek(): any | null
    vfunc_poll(): any | null
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

export class Queue extends GObject.Object {

    // Own properties of Gee-1.0.Gee.Queue

    static name: string
    static $gtype: GObject.GType<Queue>

    // Constructors of Gee-1.0.Gee.Queue

    constructor(config?: Queue.ConstructorProperties) 
    _init(config?: Queue.ConstructorProperties): void
}

export module Set {

    // Constructor properties interface

    export interface ConstructorProperties extends Collection.ConstructorProperties, GObject.Object.ConstructorProperties {
    }

}

export interface Set extends Collection {

    // Own properties of Gee-1.0.Gee.Set

    readonly read_only_view: any
    readonly readOnlyView: any

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

export class Set extends GObject.Object {

    // Own properties of Gee-1.0.Gee.Set

    static name: string
    static $gtype: GObject.GType<Set>

    // Constructors of Gee-1.0.Gee.Set

    constructor(config?: Set.ConstructorProperties) 
    _init(config?: Set.ConstructorProperties): void
    static empty(): Set

    // Overloads of empty

    static empty(): Collection
}

export module SortedSet {

    // Constructor properties interface

    export interface ConstructorProperties extends Set.ConstructorProperties, GObject.Object.ConstructorProperties {
    }

}

export interface SortedSet extends Set {

    // Conflicting properties

    read_only_view: any
    readOnlyView: any

    // Owm methods of Gee-1.0.Gee.SortedSet

    first(): any | null
    last(): any | null
    bidir_iterator(): BidirIterator
    iterator_at(element?: any | null): BidirIterator | null
    lower(element?: any | null): any | null
    higher(element?: any | null): any | null
    floor(element?: any | null): any | null
    ceil(element?: any | null): any | null
    head_set(before?: any | null): SortedSet
    tail_set(after?: any | null): SortedSet
    sub_set(from?: any | null, to?: any | null): SortedSet

    // Own virtual methods of Gee-1.0.Gee.SortedSet

    vfunc_first(): any | null
    vfunc_last(): any | null
    vfunc_bidir_iterator(): BidirIterator
    vfunc_iterator_at(element?: any | null): BidirIterator | null
    vfunc_lower(element?: any | null): any | null
    vfunc_higher(element?: any | null): any | null
    vfunc_floor(element?: any | null): any | null
    vfunc_ceil(element?: any | null): any | null
    vfunc_head_set(before?: any | null): SortedSet
    vfunc_tail_set(after?: any | null): SortedSet
    vfunc_sub_set(from?: any | null, to?: any | null): SortedSet

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

export class SortedSet extends GObject.Object {

    // Own properties of Gee-1.0.Gee.SortedSet

    static name: string
    static $gtype: GObject.GType<SortedSet>

    // Constructors of Gee-1.0.Gee.SortedSet

    constructor(config?: SortedSet.ConstructorProperties) 
    _init(config?: SortedSet.ConstructorProperties): void

    // Conflicting static methods

    static empty(): Set

    // Overloads of empty

    static empty(): Collection
    static empty(): Collection
}

export module AbstractCollection {

    // Constructor properties interface

    export interface ConstructorProperties extends Iterable.ConstructorProperties, Collection.ConstructorProperties, GObject.Object.ConstructorProperties {
    }

}

export interface AbstractCollection extends Iterable, Collection {

    // Own properties of Gee-1.0.Gee.AbstractCollection

    readonly size: number
    readonly is_empty: boolean
    readonly isEmpty: boolean
    readonly read_only_view: Collection
    readonly readOnlyView: Collection

    // Own fields of Gee-1.0.Gee.AbstractCollection

    parent_instance: GObject.Object
    priv: AbstractCollectionPrivate

    // Owm methods of Gee-1.0.Gee.AbstractCollection

    contains(item?: any | null): boolean
    add(item?: any | null): boolean
    remove(item?: any | null): boolean
    clear(): void
    to_array(): any[]
    add_all(collection: Collection): boolean
    contains_all(collection: Collection): boolean
    remove_all(collection: Collection): boolean
    retain_all(collection: Collection): boolean
    iterator(): Iterator

    // Own virtual methods of Gee-1.0.Gee.AbstractCollection

    vfunc_contains(item?: any | null): boolean
    vfunc_add(item?: any | null): boolean
    vfunc_remove(item?: any | null): boolean
    vfunc_clear(): void
    vfunc_to_array(): any[]
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

export class AbstractCollection extends GObject.Object {

    // Own properties of Gee-1.0.Gee.AbstractCollection

    static name: string
    static $gtype: GObject.GType<AbstractCollection>

    // Constructors of Gee-1.0.Gee.AbstractCollection

    constructor(config?: AbstractCollection.ConstructorProperties) 
    _init(config?: AbstractCollection.ConstructorProperties): void
}

export module AbstractList {

    // Constructor properties interface

    export interface ConstructorProperties extends List.ConstructorProperties, AbstractCollection.ConstructorProperties {
    }

}

export interface AbstractList extends List {

    // Own properties of Gee-1.0.Gee.AbstractList

    readonly read_only_view: any
    readonly readOnlyView: any

    // Own fields of Gee-1.0.Gee.AbstractList

    parent_instance: AbstractCollection & GObject.Object
    priv: any

    // Owm methods of Gee-1.0.Gee.AbstractList

    list_iterator(): ListIterator
    get(index: number): any | null
    set(index: number, item?: any | null): void
    index_of(item?: any | null): number
    insert(index: number, item?: any | null): void
    remove_at(index: number): any | null
    slice(start: number, stop: number): List | null
    first(): any | null
    last(): any | null
    insert_all(index: number, collection: Collection): void

    // Own virtual methods of Gee-1.0.Gee.AbstractList

    vfunc_list_iterator(): ListIterator
    vfunc_get(index: number): any | null
    vfunc_set(index: number, item?: any | null): void
    vfunc_index_of(item?: any | null): number
    vfunc_insert(index: number, item?: any | null): void
    vfunc_remove_at(index: number): any | null
    vfunc_slice(start: number, stop: number): List | null
    vfunc_first(): any | null
    vfunc_last(): any | null
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

export class AbstractList extends AbstractCollection {

    // Own properties of Gee-1.0.Gee.AbstractList

    static name: string
    static $gtype: GObject.GType<AbstractList>

    // Constructors of Gee-1.0.Gee.AbstractList

    constructor(config?: AbstractList.ConstructorProperties) 
    _init(config?: AbstractList.ConstructorProperties): void

    // Conflicting static methods

    static empty(): List

    // Overloads of empty

    static empty(): Collection
    static empty(): Collection
}

export module AbstractMap {

    // Constructor properties interface

    export interface ConstructorProperties extends Iterable.ConstructorProperties, Map.ConstructorProperties, GObject.Object.ConstructorProperties {
    }

}

export interface AbstractMap extends Iterable, Map {

    // Own properties of Gee-1.0.Gee.AbstractMap

    readonly size: number
    readonly is_empty: boolean
    readonly isEmpty: boolean
    readonly keys: Set
    readonly values: Collection
    readonly entries: Set
    readonly read_only_view: Map
    readonly readOnlyView: Map

    // Own fields of Gee-1.0.Gee.AbstractMap

    parent_instance: GObject.Object
    priv: AbstractMapPrivate

    // Owm methods of Gee-1.0.Gee.AbstractMap

    has_key(key?: any | null): boolean
    has(key?: any | null, value?: any | null): boolean
    get(key?: any | null): any | null
    set(key?: any | null, value?: any | null): void
    unset(key?: any | null): [ /* returnType */ boolean, /* value */ any | null ]
    map_iterator(): MapIterator
    clear(): void
    set_all(map: Map): void
    unset_all(map: Map): boolean
    has_all(map: Map): boolean

    // Own virtual methods of Gee-1.0.Gee.AbstractMap

    vfunc_has_key(key?: any | null): boolean
    vfunc_has(key?: any | null, value?: any | null): boolean
    vfunc_get(key?: any | null): any | null
    vfunc_set(key?: any | null, value?: any | null): void
    vfunc_unset(key?: any | null): [ /* returnType */ boolean, /* value */ any | null ]
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

export class AbstractMap extends GObject.Object {

    // Own properties of Gee-1.0.Gee.AbstractMap

    static name: string
    static $gtype: GObject.GType<AbstractMap>

    // Constructors of Gee-1.0.Gee.AbstractMap

    constructor(config?: AbstractMap.ConstructorProperties) 
    _init(config?: AbstractMap.ConstructorProperties): void
}

export module AbstractMultiMap {

    // Constructor properties interface

    export interface ConstructorProperties extends MultiMap.ConstructorProperties, GObject.Object.ConstructorProperties {
    }

}

export interface AbstractMultiMap extends MultiMap {

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

export class AbstractMultiMap extends GObject.Object {

    // Own properties of Gee-1.0.Gee.AbstractMultiMap

    static name: string
    static $gtype: GObject.GType<AbstractMultiMap>

    // Constructors of Gee-1.0.Gee.AbstractMultiMap

    constructor(config?: AbstractMultiMap.ConstructorProperties) 
    _init(config?: AbstractMultiMap.ConstructorProperties): void
}

export module AbstractMultiSet {

    // Constructor properties interface

    export interface ConstructorProperties extends MultiSet.ConstructorProperties, AbstractCollection.ConstructorProperties {
    }

}

export interface AbstractMultiSet extends MultiSet {

    // Own fields of Gee-1.0.Gee.AbstractMultiSet

    parent_instance: AbstractCollection & GObject.Object
    priv: any
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

export class AbstractMultiSet extends AbstractCollection {

    // Own properties of Gee-1.0.Gee.AbstractMultiSet

    static name: string
    static $gtype: GObject.GType<AbstractMultiSet>

    // Constructors of Gee-1.0.Gee.AbstractMultiSet

    constructor(config?: AbstractMultiSet.ConstructorProperties) 
    _init(config?: AbstractMultiSet.ConstructorProperties): void
}

export module AbstractQueue {

    // Constructor properties interface

    export interface ConstructorProperties extends Queue.ConstructorProperties, AbstractCollection.ConstructorProperties {
    }

}

export interface AbstractQueue extends Queue {

    // Own properties of Gee-1.0.Gee.AbstractQueue

    readonly capacity: number
    readonly remaining_capacity: number
    readonly remainingCapacity: number
    readonly is_full: boolean
    readonly isFull: boolean

    // Own fields of Gee-1.0.Gee.AbstractQueue

    parent_instance: AbstractCollection & GObject.Object
    priv: any

    // Owm methods of Gee-1.0.Gee.AbstractQueue

    offer(element?: any | null): boolean
    peek(): any | null
    poll(): any | null
    drain(recipient: Collection, amount: number): number

    // Own virtual methods of Gee-1.0.Gee.AbstractQueue

    vfunc_offer(element?: any | null): boolean
    vfunc_peek(): any | null
    vfunc_poll(): any | null
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

export class AbstractQueue extends AbstractCollection {

    // Own properties of Gee-1.0.Gee.AbstractQueue

    static name: string
    static $gtype: GObject.GType<AbstractQueue>

    // Constructors of Gee-1.0.Gee.AbstractQueue

    constructor(config?: AbstractQueue.ConstructorProperties) 
    _init(config?: AbstractQueue.ConstructorProperties): void
}

export module AbstractSet {

    // Constructor properties interface

    export interface ConstructorProperties extends Set.ConstructorProperties, AbstractCollection.ConstructorProperties {
    }

}

export interface AbstractSet extends Set {

    // Own properties of Gee-1.0.Gee.AbstractSet

    readonly read_only_view: any
    readonly readOnlyView: any

    // Own fields of Gee-1.0.Gee.AbstractSet

    parent_instance: AbstractCollection & GObject.Object
    priv: any

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

export class AbstractSet extends AbstractCollection {

    // Own properties of Gee-1.0.Gee.AbstractSet

    static name: string
    static $gtype: GObject.GType<AbstractSet>

    // Constructors of Gee-1.0.Gee.AbstractSet

    constructor(config?: AbstractSet.ConstructorProperties) 
    _init(config?: AbstractSet.ConstructorProperties): void

    // Conflicting static methods

    static empty(): Set

    // Overloads of empty

    static empty(): Collection
    static empty(): Collection
}

export module ArrayList {

    // Constructor properties interface

    export interface ConstructorProperties extends AbstractList.ConstructorProperties {

        // Own constructor properties of Gee-1.0.Gee.ArrayList

        equal_func?: GLib.EqualFunc | null
        equalFunc?: GLib.EqualFunc | null
    }

}

export interface ArrayList {

    // Own properties of Gee-1.0.Gee.ArrayList

    equal_func: GLib.EqualFunc
    equalFunc: GLib.EqualFunc

    // Conflicting properties

    read_only_view: any
    readOnlyView: any

    // Own fields of Gee-1.0.Gee.ArrayList

    parent_instance: AbstractList & AbstractCollection & GObject.Object & GObject.Object
    priv: any

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

export class ArrayList extends AbstractList {

    // Own properties of Gee-1.0.Gee.ArrayList

    static name: string
    static $gtype: GObject.GType<ArrayList>

    // Constructors of Gee-1.0.Gee.ArrayList

    constructor(config?: ArrayList.ConstructorProperties) 
    constructor(equal_func?: GLib.EqualFunc | null) 
    static new(equal_func?: GLib.EqualFunc | null): ArrayList
    _init(config?: ArrayList.ConstructorProperties): void

    // Conflicting static methods

    static empty(): List

    // Overloads of empty

    static empty(): Collection
    static empty(): Collection
}

export module HashMap {

    // Constructor properties interface

    export interface ConstructorProperties extends AbstractMap.ConstructorProperties {

        // Own constructor properties of Gee-1.0.Gee.HashMap

        key_hash_func?: GLib.HashFunc | null
        key_equal_func?: GLib.EqualFunc | null
        value_equal_func?: GLib.EqualFunc | null
        keyHashFunc?: GLib.HashFunc | null
        keyEqualFunc?: GLib.EqualFunc | null
        valueEqualFunc?: GLib.EqualFunc | null
    }

}

export interface HashMap {

    // Own properties of Gee-1.0.Gee.HashMap

    key_hash_func: GLib.HashFunc
    keyHashFunc: GLib.HashFunc
    key_equal_func: GLib.EqualFunc
    keyEqualFunc: GLib.EqualFunc
    value_equal_func: GLib.EqualFunc
    valueEqualFunc: GLib.EqualFunc

    // Own fields of Gee-1.0.Gee.HashMap

    parent_instance: AbstractMap & GObject.Object
    priv: any

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

export class HashMap extends AbstractMap {

    // Own properties of Gee-1.0.Gee.HashMap

    static name: string
    static $gtype: GObject.GType<HashMap>

    // Constructors of Gee-1.0.Gee.HashMap

    constructor(config?: HashMap.ConstructorProperties) 
    constructor(key_hash_func?: GLib.HashFunc | null, key_equal_func?: GLib.EqualFunc | null, value_equal_func?: GLib.EqualFunc | null) 
    static new(key_hash_func?: GLib.HashFunc | null, key_equal_func?: GLib.EqualFunc | null, value_equal_func?: GLib.EqualFunc | null): HashMap
    _init(config?: HashMap.ConstructorProperties): void
}

export module HashMultiMap {

    // Constructor properties interface

    export interface ConstructorProperties extends AbstractMultiMap.ConstructorProperties {

        // Own constructor properties of Gee-1.0.Gee.HashMultiMap

        value_hash_func?: GLib.HashFunc | null
        value_equal_func?: GLib.EqualFunc | null
        valueHashFunc?: GLib.HashFunc | null
        valueEqualFunc?: GLib.EqualFunc | null
    }

}

export interface HashMultiMap {

    // Own properties of Gee-1.0.Gee.HashMultiMap

    readonly key_hash_func: GLib.HashFunc
    readonly keyHashFunc: GLib.HashFunc
    readonly key_equal_func: GLib.EqualFunc
    readonly keyEqualFunc: GLib.EqualFunc
    value_hash_func: GLib.HashFunc
    valueHashFunc: GLib.HashFunc
    value_equal_func: GLib.EqualFunc
    valueEqualFunc: GLib.EqualFunc

    // Own fields of Gee-1.0.Gee.HashMultiMap

    parent_instance: AbstractMultiMap & GObject.Object
    priv: any

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

export class HashMultiMap extends AbstractMultiMap {

    // Own properties of Gee-1.0.Gee.HashMultiMap

    static name: string
    static $gtype: GObject.GType<HashMultiMap>

    // Constructors of Gee-1.0.Gee.HashMultiMap

    constructor(config?: HashMultiMap.ConstructorProperties) 
    constructor(key_hash_func?: GLib.HashFunc | null, key_equal_func?: GLib.EqualFunc | null, value_hash_func?: GLib.HashFunc | null, value_equal_func?: GLib.EqualFunc | null) 
    static new(key_hash_func?: GLib.HashFunc | null, key_equal_func?: GLib.EqualFunc | null, value_hash_func?: GLib.HashFunc | null, value_equal_func?: GLib.EqualFunc | null): HashMultiMap
    _init(config?: HashMultiMap.ConstructorProperties): void
}

export module HashMultiSet {

    // Constructor properties interface

    export interface ConstructorProperties extends AbstractMultiSet.ConstructorProperties {
    }

}

export interface HashMultiSet {

    // Own properties of Gee-1.0.Gee.HashMultiSet

    readonly hash_func: GLib.HashFunc
    readonly hashFunc: GLib.HashFunc
    readonly equal_func: GLib.EqualFunc
    readonly equalFunc: GLib.EqualFunc

    // Own fields of Gee-1.0.Gee.HashMultiSet

    parent_instance: AbstractMultiSet & AbstractCollection & GObject.Object & GObject.Object
    priv: any

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

export class HashMultiSet extends AbstractMultiSet {

    // Own properties of Gee-1.0.Gee.HashMultiSet

    static name: string
    static $gtype: GObject.GType<HashMultiSet>

    // Constructors of Gee-1.0.Gee.HashMultiSet

    constructor(config?: HashMultiSet.ConstructorProperties) 
    constructor(hash_func?: GLib.HashFunc | null, equal_func?: GLib.EqualFunc | null) 
    static new(hash_func?: GLib.HashFunc | null, equal_func?: GLib.EqualFunc | null): HashMultiSet
    _init(config?: HashMultiSet.ConstructorProperties): void
}

export module HashSet {

    // Constructor properties interface

    export interface ConstructorProperties extends AbstractSet.ConstructorProperties {

        // Own constructor properties of Gee-1.0.Gee.HashSet

        hash_func?: GLib.HashFunc | null
        equal_func?: GLib.EqualFunc | null
        hashFunc?: GLib.HashFunc | null
        equalFunc?: GLib.EqualFunc | null
    }

}

export interface HashSet {

    // Own properties of Gee-1.0.Gee.HashSet

    hash_func: GLib.HashFunc
    hashFunc: GLib.HashFunc
    equal_func: GLib.EqualFunc
    equalFunc: GLib.EqualFunc

    // Conflicting properties

    read_only_view: any
    readOnlyView: any

    // Own fields of Gee-1.0.Gee.HashSet

    parent_instance: AbstractSet & AbstractCollection & GObject.Object & GObject.Object
    priv: any

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

export class HashSet extends AbstractSet {

    // Own properties of Gee-1.0.Gee.HashSet

    static name: string
    static $gtype: GObject.GType<HashSet>

    // Constructors of Gee-1.0.Gee.HashSet

    constructor(config?: HashSet.ConstructorProperties) 
    constructor(hash_func?: GLib.HashFunc | null, equal_func?: GLib.EqualFunc | null) 
    static new(hash_func?: GLib.HashFunc | null, equal_func?: GLib.EqualFunc | null): HashSet
    _init(config?: HashSet.ConstructorProperties): void

    // Conflicting static methods

    static empty(): Set

    // Overloads of empty

    static empty(): Collection
    static empty(): Collection
}

export module LinkedList {

    // Constructor properties interface

    export interface ConstructorProperties extends Queue.ConstructorProperties, Deque.ConstructorProperties, AbstractList.ConstructorProperties {

        // Own constructor properties of Gee-1.0.Gee.LinkedList

        equal_func?: GLib.EqualFunc | null
        equalFunc?: GLib.EqualFunc | null
    }

}

export interface LinkedList extends Queue, Deque {

    // Own properties of Gee-1.0.Gee.LinkedList

    equal_func: GLib.EqualFunc
    equalFunc: GLib.EqualFunc

    // Conflicting properties

    read_only_view: any
    readOnlyView: any

    // Own fields of Gee-1.0.Gee.LinkedList

    parent_instance: AbstractList & AbstractCollection & GObject.Object & GObject.Object
    priv: any

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

export class LinkedList extends AbstractList {

    // Own properties of Gee-1.0.Gee.LinkedList

    static name: string
    static $gtype: GObject.GType<LinkedList>

    // Constructors of Gee-1.0.Gee.LinkedList

    constructor(config?: LinkedList.ConstructorProperties) 
    constructor(equal_func?: GLib.EqualFunc | null) 
    static new(equal_func?: GLib.EqualFunc | null): LinkedList
    _init(config?: LinkedList.ConstructorProperties): void

    // Conflicting static methods

    static empty(): Collection
    static empty(): List

    // Overloads of empty

    static empty(): Collection
}

export module PriorityQueue {

    // Constructor properties interface

    export interface ConstructorProperties extends AbstractQueue.ConstructorProperties {

        // Own constructor properties of Gee-1.0.Gee.PriorityQueue

        compare_func?: GLib.CompareFunc | null
        compareFunc?: GLib.CompareFunc | null
    }

}

export interface PriorityQueue {

    // Own properties of Gee-1.0.Gee.PriorityQueue

    compare_func: GLib.CompareFunc
    compareFunc: GLib.CompareFunc

    // Own fields of Gee-1.0.Gee.PriorityQueue

    parent_instance: AbstractQueue & AbstractCollection & GObject.Object & GObject.Object
    priv: any

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

export class PriorityQueue extends AbstractQueue {

    // Own properties of Gee-1.0.Gee.PriorityQueue

    static name: string
    static $gtype: GObject.GType<PriorityQueue>

    // Constructors of Gee-1.0.Gee.PriorityQueue

    constructor(config?: PriorityQueue.ConstructorProperties) 
    constructor(compare_func?: GLib.CompareFunc | null) 
    static new(compare_func?: GLib.CompareFunc | null): PriorityQueue
    _init(config?: PriorityQueue.ConstructorProperties): void
}

export module TreeMap {

    // Constructor properties interface

    export interface ConstructorProperties extends AbstractMap.ConstructorProperties {

        // Own constructor properties of Gee-1.0.Gee.TreeMap

        key_compare_func?: GLib.CompareFunc | null
        value_equal_func?: GLib.EqualFunc | null
        keyCompareFunc?: GLib.CompareFunc | null
        valueEqualFunc?: GLib.EqualFunc | null
    }

}

export interface TreeMap {

    // Own properties of Gee-1.0.Gee.TreeMap

    key_compare_func: GLib.CompareFunc
    keyCompareFunc: GLib.CompareFunc
    value_equal_func: GLib.EqualFunc
    valueEqualFunc: GLib.EqualFunc

    // Own fields of Gee-1.0.Gee.TreeMap

    parent_instance: AbstractMap & GObject.Object
    priv: any

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

export class TreeMap extends AbstractMap {

    // Own properties of Gee-1.0.Gee.TreeMap

    static name: string
    static $gtype: GObject.GType<TreeMap>

    // Constructors of Gee-1.0.Gee.TreeMap

    constructor(config?: TreeMap.ConstructorProperties) 
    constructor(key_compare_func?: GLib.CompareFunc | null, value_equal_func?: GLib.EqualFunc | null) 
    static new(key_compare_func?: GLib.CompareFunc | null, value_equal_func?: GLib.EqualFunc | null): TreeMap
    _init(config?: TreeMap.ConstructorProperties): void
}

export module TreeMultiMap {

    // Constructor properties interface

    export interface ConstructorProperties extends AbstractMultiMap.ConstructorProperties {

        // Own constructor properties of Gee-1.0.Gee.TreeMultiMap

        value_compare_func?: GLib.CompareFunc | null
        valueCompareFunc?: GLib.CompareFunc | null
    }

}

export interface TreeMultiMap {

    // Own properties of Gee-1.0.Gee.TreeMultiMap

    readonly key_compare_func: GLib.CompareFunc
    readonly keyCompareFunc: GLib.CompareFunc
    value_compare_func: GLib.CompareFunc
    valueCompareFunc: GLib.CompareFunc

    // Own fields of Gee-1.0.Gee.TreeMultiMap

    parent_instance: AbstractMultiMap & GObject.Object
    priv: any

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

export class TreeMultiMap extends AbstractMultiMap {

    // Own properties of Gee-1.0.Gee.TreeMultiMap

    static name: string
    static $gtype: GObject.GType<TreeMultiMap>

    // Constructors of Gee-1.0.Gee.TreeMultiMap

    constructor(config?: TreeMultiMap.ConstructorProperties) 
    constructor(key_compare_func?: GLib.CompareFunc | null, value_compare_func?: GLib.CompareFunc | null) 
    static new(key_compare_func?: GLib.CompareFunc | null, value_compare_func?: GLib.CompareFunc | null): TreeMultiMap
    _init(config?: TreeMultiMap.ConstructorProperties): void
}

export module TreeMultiSet {

    // Constructor properties interface

    export interface ConstructorProperties extends AbstractMultiSet.ConstructorProperties {
    }

}

export interface TreeMultiSet {

    // Own properties of Gee-1.0.Gee.TreeMultiSet

    readonly compare_func: GLib.CompareFunc
    readonly compareFunc: GLib.CompareFunc

    // Own fields of Gee-1.0.Gee.TreeMultiSet

    parent_instance: AbstractMultiSet & AbstractCollection & GObject.Object & GObject.Object
    priv: any

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

export class TreeMultiSet extends AbstractMultiSet {

    // Own properties of Gee-1.0.Gee.TreeMultiSet

    static name: string
    static $gtype: GObject.GType<TreeMultiSet>

    // Constructors of Gee-1.0.Gee.TreeMultiSet

    constructor(config?: TreeMultiSet.ConstructorProperties) 
    constructor(compare_func?: GLib.CompareFunc | null) 
    static new(compare_func?: GLib.CompareFunc | null): TreeMultiSet
    _init(config?: TreeMultiSet.ConstructorProperties): void
}

export module TreeSet {

    // Constructor properties interface

    export interface ConstructorProperties extends SortedSet.ConstructorProperties, AbstractSet.ConstructorProperties {

        // Own constructor properties of Gee-1.0.Gee.TreeSet

        compare_func?: GLib.CompareFunc | null
        compareFunc?: GLib.CompareFunc | null
    }

}

export interface TreeSet extends SortedSet {

    // Own properties of Gee-1.0.Gee.TreeSet

    compare_func: GLib.CompareFunc
    compareFunc: GLib.CompareFunc

    // Conflicting properties

    read_only_view: any
    readOnlyView: any

    // Own fields of Gee-1.0.Gee.TreeSet

    parent_instance: AbstractSet & AbstractCollection & GObject.Object & GObject.Object
    priv: any

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

export class TreeSet extends AbstractSet {

    // Own properties of Gee-1.0.Gee.TreeSet

    static name: string
    static $gtype: GObject.GType<TreeSet>

    // Constructors of Gee-1.0.Gee.TreeSet

    constructor(config?: TreeSet.ConstructorProperties) 
    constructor(compare_func?: GLib.CompareFunc | null) 
    static new(compare_func?: GLib.CompareFunc | null): TreeSet
    _init(config?: TreeSet.ConstructorProperties): void

    // Conflicting static methods

    static empty(): Set

    // Overloads of empty

    static empty(): Collection
    static empty(): Collection
}

export module MapEntry {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Gee-1.0.Gee.MapEntry

        value?: any | null
    }

}

export interface MapEntry {

    // Own properties of Gee-1.0.Gee.MapEntry

    readonly key: any
    value: any

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

export class MapEntry extends GObject.Object {

    // Own properties of Gee-1.0.Gee.MapEntry

    static name: string
    static $gtype: GObject.GType<MapEntry>

    // Constructors of Gee-1.0.Gee.MapEntry

    constructor(config?: MapEntry.ConstructorProperties) 
    _init(config?: MapEntry.ConstructorProperties): void
}

export interface AbstractCollectionClass {

    // Own fields of Gee-1.0.Gee.AbstractCollectionClass

    parent_class: GObject.ObjectClass
    contains: (self: AbstractCollection, item?: any | null) => boolean
    add: (self: AbstractCollection, item?: any | null) => boolean
    remove: (self: AbstractCollection, item?: any | null) => boolean
    clear: (self: AbstractCollection) => void
    to_array: (self: AbstractCollection) => any[]
    add_all: (self: AbstractCollection, collection: Collection) => boolean
    contains_all: (self: AbstractCollection, collection: Collection) => boolean
    remove_all: (self: AbstractCollection, collection: Collection) => boolean
    retain_all: (self: AbstractCollection, collection: Collection) => boolean
    iterator: (self: AbstractCollection) => Iterator
}

export abstract class AbstractCollectionClass {

    // Own properties of Gee-1.0.Gee.AbstractCollectionClass

    static name: string
}

export interface AbstractCollectionPrivate {
}

export class AbstractCollectionPrivate {

    // Own properties of Gee-1.0.Gee.AbstractCollectionPrivate

    static name: string
}

export interface AbstractListClass {

    // Own fields of Gee-1.0.Gee.AbstractListClass

    parent_class: AbstractCollectionClass
    list_iterator: (self: AbstractList) => ListIterator
    get: (self: AbstractList, index: number) => any | null
    set: (self: AbstractList, index: number, item?: any | null) => void
    index_of: (self: AbstractList, item?: any | null) => number
    insert: (self: AbstractList, index: number, item?: any | null) => void
    remove_at: (self: AbstractList, index: number) => any | null
    slice: (self: AbstractList, start: number, stop: number) => List | null
    first: (self: AbstractList) => any | null
    last: (self: AbstractList) => any | null
    insert_all: (self: AbstractList, index: number, collection: Collection) => void
}

export abstract class AbstractListClass {

    // Own properties of Gee-1.0.Gee.AbstractListClass

    static name: string
}

export interface AbstractListPrivate {
}

export class AbstractListPrivate {

    // Own properties of Gee-1.0.Gee.AbstractListPrivate

    static name: string
}

export interface AbstractMapClass {

    // Own fields of Gee-1.0.Gee.AbstractMapClass

    parent_class: GObject.ObjectClass
    has_key: (self: AbstractMap, key?: any | null) => boolean
    has: (self: AbstractMap, key?: any | null, value?: any | null) => boolean
    get: (self: AbstractMap, key?: any | null) => any | null
    set: (self: AbstractMap, key?: any | null, value?: any | null) => void
    unset: (self: AbstractMap, key?: any | null) => [ /* returnType */ boolean, /* value */ any | null ]
    map_iterator: (self: AbstractMap) => MapIterator
    clear: (self: AbstractMap) => void
    set_all: (self: AbstractMap, map: Map) => void
    unset_all: (self: AbstractMap, map: Map) => boolean
    has_all: (self: AbstractMap, map: Map) => boolean
}

export abstract class AbstractMapClass {

    // Own properties of Gee-1.0.Gee.AbstractMapClass

    static name: string
}

export interface AbstractMapPrivate {
}

export class AbstractMapPrivate {

    // Own properties of Gee-1.0.Gee.AbstractMapPrivate

    static name: string
}

export interface AbstractMultiMapClass {

    // Own fields of Gee-1.0.Gee.AbstractMultiMapClass

    parent_class: GObject.ObjectClass
    create_value_storage: (self: AbstractMultiMap) => Collection
    create_multi_key_set: (self: AbstractMultiMap) => MultiSet
    get_value_equal_func: (self: AbstractMultiMap) => GLib.EqualFunc
}

export abstract class AbstractMultiMapClass {

    // Own properties of Gee-1.0.Gee.AbstractMultiMapClass

    static name: string
}

export interface AbstractMultiMapPrivate {
}

export class AbstractMultiMapPrivate {

    // Own properties of Gee-1.0.Gee.AbstractMultiMapPrivate

    static name: string
}

export interface AbstractMultiSetClass {

    // Own fields of Gee-1.0.Gee.AbstractMultiSetClass

    parent_class: AbstractCollectionClass
}

export abstract class AbstractMultiSetClass {

    // Own properties of Gee-1.0.Gee.AbstractMultiSetClass

    static name: string
}

export interface AbstractMultiSetPrivate {
}

export class AbstractMultiSetPrivate {

    // Own properties of Gee-1.0.Gee.AbstractMultiSetPrivate

    static name: string
}

export interface AbstractQueueClass {

    // Own fields of Gee-1.0.Gee.AbstractQueueClass

    parent_class: AbstractCollectionClass
    offer: (self: AbstractQueue, element?: any | null) => boolean
    peek: (self: AbstractQueue) => any | null
    poll: (self: AbstractQueue) => any | null
    drain: (self: AbstractQueue, recipient: Collection, amount: number) => number
}

export abstract class AbstractQueueClass {

    // Own properties of Gee-1.0.Gee.AbstractQueueClass

    static name: string
}

export interface AbstractQueuePrivate {
}

export class AbstractQueuePrivate {

    // Own properties of Gee-1.0.Gee.AbstractQueuePrivate

    static name: string
}

export interface AbstractSetClass {

    // Own fields of Gee-1.0.Gee.AbstractSetClass

    parent_class: AbstractCollectionClass
}

export abstract class AbstractSetClass {

    // Own properties of Gee-1.0.Gee.AbstractSetClass

    static name: string
}

export interface AbstractSetPrivate {
}

export class AbstractSetPrivate {

    // Own properties of Gee-1.0.Gee.AbstractSetPrivate

    static name: string
}

export interface ArrayListClass {

    // Own fields of Gee-1.0.Gee.ArrayListClass

    parent_class: AbstractListClass
}

export abstract class ArrayListClass {

    // Own properties of Gee-1.0.Gee.ArrayListClass

    static name: string
}

export interface ArrayListPrivate {
}

export class ArrayListPrivate {

    // Own properties of Gee-1.0.Gee.ArrayListPrivate

    static name: string
}

export interface HashMapClass {

    // Own fields of Gee-1.0.Gee.HashMapClass

    parent_class: AbstractMapClass
}

export abstract class HashMapClass {

    // Own properties of Gee-1.0.Gee.HashMapClass

    static name: string
}

export interface HashMapPrivate {
}

export class HashMapPrivate {

    // Own properties of Gee-1.0.Gee.HashMapPrivate

    static name: string
}

export interface HashMultiMapClass {

    // Own fields of Gee-1.0.Gee.HashMultiMapClass

    parent_class: AbstractMultiMapClass
}

export abstract class HashMultiMapClass {

    // Own properties of Gee-1.0.Gee.HashMultiMapClass

    static name: string
}

export interface HashMultiMapPrivate {
}

export class HashMultiMapPrivate {

    // Own properties of Gee-1.0.Gee.HashMultiMapPrivate

    static name: string
}

export interface HashMultiSetClass {

    // Own fields of Gee-1.0.Gee.HashMultiSetClass

    parent_class: AbstractMultiSetClass
}

export abstract class HashMultiSetClass {

    // Own properties of Gee-1.0.Gee.HashMultiSetClass

    static name: string
}

export interface HashMultiSetPrivate {
}

export class HashMultiSetPrivate {

    // Own properties of Gee-1.0.Gee.HashMultiSetPrivate

    static name: string
}

export interface HashSetClass {

    // Own fields of Gee-1.0.Gee.HashSetClass

    parent_class: AbstractSetClass
}

export abstract class HashSetClass {

    // Own properties of Gee-1.0.Gee.HashSetClass

    static name: string
}

export interface HashSetPrivate {
}

export class HashSetPrivate {

    // Own properties of Gee-1.0.Gee.HashSetPrivate

    static name: string
}

export interface LinkedListClass {

    // Own fields of Gee-1.0.Gee.LinkedListClass

    parent_class: AbstractListClass
}

export abstract class LinkedListClass {

    // Own properties of Gee-1.0.Gee.LinkedListClass

    static name: string
}

export interface LinkedListPrivate {
}

export class LinkedListPrivate {

    // Own properties of Gee-1.0.Gee.LinkedListPrivate

    static name: string
}

export interface PriorityQueueClass {

    // Own fields of Gee-1.0.Gee.PriorityQueueClass

    parent_class: AbstractQueueClass
}

export abstract class PriorityQueueClass {

    // Own properties of Gee-1.0.Gee.PriorityQueueClass

    static name: string
}

export interface PriorityQueuePrivate {
}

export class PriorityQueuePrivate {

    // Own properties of Gee-1.0.Gee.PriorityQueuePrivate

    static name: string
}

export interface TreeMapClass {

    // Own fields of Gee-1.0.Gee.TreeMapClass

    parent_class: AbstractMapClass
}

export abstract class TreeMapClass {

    // Own properties of Gee-1.0.Gee.TreeMapClass

    static name: string
}

export interface TreeMapPrivate {
}

export class TreeMapPrivate {

    // Own properties of Gee-1.0.Gee.TreeMapPrivate

    static name: string
}

export interface TreeMultiMapClass {

    // Own fields of Gee-1.0.Gee.TreeMultiMapClass

    parent_class: AbstractMultiMapClass
}

export abstract class TreeMultiMapClass {

    // Own properties of Gee-1.0.Gee.TreeMultiMapClass

    static name: string
}

export interface TreeMultiMapPrivate {
}

export class TreeMultiMapPrivate {

    // Own properties of Gee-1.0.Gee.TreeMultiMapPrivate

    static name: string
}

export interface TreeMultiSetClass {

    // Own fields of Gee-1.0.Gee.TreeMultiSetClass

    parent_class: AbstractMultiSetClass
}

export abstract class TreeMultiSetClass {

    // Own properties of Gee-1.0.Gee.TreeMultiSetClass

    static name: string
}

export interface TreeMultiSetPrivate {
}

export class TreeMultiSetPrivate {

    // Own properties of Gee-1.0.Gee.TreeMultiSetPrivate

    static name: string
}

export interface TreeSetClass {

    // Own fields of Gee-1.0.Gee.TreeSetClass

    parent_class: AbstractSetClass
}

export abstract class TreeSetClass {

    // Own properties of Gee-1.0.Gee.TreeSetClass

    static name: string
}

export interface TreeSetPrivate {
}

export class TreeSetPrivate {

    // Own properties of Gee-1.0.Gee.TreeSetPrivate

    static name: string
}

export interface BidirIteratorIface {

    // Own fields of Gee-1.0.Gee.BidirIteratorIface

    parent_iface: GObject.TypeInterface
    previous: (self: BidirIterator) => boolean
    has_previous: (self: BidirIterator) => boolean
    last: (self: BidirIterator) => boolean
}

export abstract class BidirIteratorIface {

    // Own properties of Gee-1.0.Gee.BidirIteratorIface

    static name: string
}

export interface CollectionIface {

    // Own fields of Gee-1.0.Gee.CollectionIface

    parent_iface: GObject.TypeInterface
    contains: (self: Collection, item?: any | null) => boolean
    add: (self: Collection, item?: any | null) => boolean
    remove: (self: Collection, item?: any | null) => boolean
    clear: (self: Collection) => void
    add_all: (self: Collection, collection: Collection) => boolean
    contains_all: (self: Collection, collection: Collection) => boolean
    remove_all: (self: Collection, collection: Collection) => boolean
    retain_all: (self: Collection, collection: Collection) => boolean
    to_array: (self: Collection) => any[]
}

export abstract class CollectionIface {

    // Own properties of Gee-1.0.Gee.CollectionIface

    static name: string
}

export interface ComparableIface {

    // Own fields of Gee-1.0.Gee.ComparableIface

    parent_iface: GObject.TypeInterface
    compare_to: (self: Comparable, object?: any | null) => number
}

export abstract class ComparableIface {

    // Own properties of Gee-1.0.Gee.ComparableIface

    static name: string
}

export interface DequeIface {

    // Own fields of Gee-1.0.Gee.DequeIface

    parent_iface: GObject.TypeInterface
    offer_head: (self: Deque, element?: any | null) => boolean
    peek_head: (self: Deque) => any | null
    poll_head: (self: Deque) => any | null
    drain_head: (self: Deque, recipient: Collection, amount: number) => number
    offer_tail: (self: Deque, element?: any | null) => boolean
    peek_tail: (self: Deque) => any | null
    poll_tail: (self: Deque) => any | null
    drain_tail: (self: Deque, recipient: Collection, amount: number) => number
}

export abstract class DequeIface {

    // Own properties of Gee-1.0.Gee.DequeIface

    static name: string
}

export interface IterableIface {

    // Own fields of Gee-1.0.Gee.IterableIface

    parent_iface: GObject.TypeInterface
    iterator: (self: Iterable) => Iterator
}

export abstract class IterableIface {

    // Own properties of Gee-1.0.Gee.IterableIface

    static name: string
}

export interface IteratorIface {

    // Own fields of Gee-1.0.Gee.IteratorIface

    parent_iface: GObject.TypeInterface
    next: (self: Iterator) => boolean
    has_next: (self: Iterator) => boolean
    first: (self: Iterator) => boolean
    get: (self: Iterator) => any | null
    remove: (self: Iterator) => void
}

export abstract class IteratorIface {

    // Own properties of Gee-1.0.Gee.IteratorIface

    static name: string
}

export interface ListIface {

    // Own fields of Gee-1.0.Gee.ListIface

    parent_iface: GObject.TypeInterface
    list_iterator: (self: List) => ListIterator
    get: (self: List, index: number) => any | null
    set: (self: List, index: number, item?: any | null) => void
    index_of: (self: List, item?: any | null) => number
    insert: (self: List, index: number, item?: any | null) => void
    remove_at: (self: List, index: number) => any | null
    slice: (self: List, start: number, stop: number) => List | null
    first: (self: List) => any | null
    last: (self: List) => any | null
    insert_all: (self: List, index: number, collection: Collection) => void
    sort: (self: List, compare_func?: GLib.CompareFunc | null) => void
}

export abstract class ListIface {

    // Own properties of Gee-1.0.Gee.ListIface

    static name: string
}

export interface ListIteratorIface {

    // Own fields of Gee-1.0.Gee.ListIteratorIface

    parent_iface: GObject.TypeInterface
    set: (self: ListIterator, item?: any | null) => void
    insert: (self: ListIterator, item?: any | null) => void
    add: (self: ListIterator, item?: any | null) => void
    index: (self: ListIterator) => number
}

export abstract class ListIteratorIface {

    // Own properties of Gee-1.0.Gee.ListIteratorIface

    static name: string
}

export interface MapIface {

    // Own fields of Gee-1.0.Gee.MapIface

    parent_iface: GObject.TypeInterface
    has_key: (self: Map, key?: any | null) => boolean
    contains: (self: Map, key?: any | null) => boolean
    has: (self: Map, key?: any | null, value?: any | null) => boolean
    get: (self: Map, key?: any | null) => any | null
    set: (self: Map, key?: any | null, value?: any | null) => void
    unset: (self: Map, key?: any | null) => [ /* returnType */ boolean, /* value */ any | null ]
    remove: (self: Map, key?: any | null) => [ /* returnType */ boolean, /* value */ any | null ]
    clear: (self: Map) => void
    map_iterator: (self: Map) => MapIterator
    set_all: (self: Map, map: Map) => void
    unset_all: (self: Map, map: Map) => boolean
    remove_all: (self: Map, map: Map) => boolean
    has_all: (self: Map, map: Map) => boolean
    contains_all: (self: Map, map: Map) => boolean
}

export abstract class MapIface {

    // Own properties of Gee-1.0.Gee.MapIface

    static name: string
}

export interface MapEntryClass {

    // Own fields of Gee-1.0.Gee.MapEntryClass

    parent_class: GObject.ObjectClass
}

export abstract class MapEntryClass {

    // Own properties of Gee-1.0.Gee.MapEntryClass

    static name: string
}

export interface EntryPrivate {
}

export class EntryPrivate {

    // Own properties of Gee-1.0.Gee.EntryPrivate

    static name: string
}

export interface MapIteratorIface {

    // Own fields of Gee-1.0.Gee.MapIteratorIface

    parent_iface: GObject.TypeInterface
    next: (self: MapIterator) => boolean
    has_next: (self: MapIterator) => boolean
    first: (self: MapIterator) => boolean
    get_key: (self: MapIterator) => any | null
    get_value: (self: MapIterator) => any | null
    set_value: (self: MapIterator, value?: any | null) => void
    unset: (self: MapIterator) => void
}

export abstract class MapIteratorIface {

    // Own properties of Gee-1.0.Gee.MapIteratorIface

    static name: string
}

export interface MultiMapIface {

    // Own fields of Gee-1.0.Gee.MultiMapIface

    parent_iface: GObject.TypeInterface
    get_keys: (self: MultiMap) => Set
    get_all_keys: (self: MultiMap) => MultiSet
    get_values: (self: MultiMap) => Collection
    contains: (self: MultiMap, key?: any | null) => boolean
    get: (self: MultiMap, key?: any | null) => Collection
    set: (self: MultiMap, key?: any | null, value?: any | null) => void
    remove: (self: MultiMap, key?: any | null, value?: any | null) => boolean
    remove_all: (self: MultiMap, key?: any | null) => boolean
    clear: (self: MultiMap) => void
}

export abstract class MultiMapIface {

    // Own properties of Gee-1.0.Gee.MultiMapIface

    static name: string
}

export interface MultiSetIface {

    // Own fields of Gee-1.0.Gee.MultiSetIface

    parent_iface: GObject.TypeInterface
    count: (self: MultiSet, item?: any | null) => number
}

export abstract class MultiSetIface {

    // Own properties of Gee-1.0.Gee.MultiSetIface

    static name: string
}

export interface QueueIface {

    // Own fields of Gee-1.0.Gee.QueueIface

    parent_iface: GObject.TypeInterface
    offer: (self: Queue, element?: any | null) => boolean
    peek: (self: Queue) => any | null
    poll: (self: Queue) => any | null
    drain: (self: Queue, recipient: Collection, amount: number) => number
}

export abstract class QueueIface {

    // Own properties of Gee-1.0.Gee.QueueIface

    static name: string
}

export interface SetIface {

    // Own fields of Gee-1.0.Gee.SetIface

    parent_iface: GObject.TypeInterface
}

export abstract class SetIface {

    // Own properties of Gee-1.0.Gee.SetIface

    static name: string
}

export interface SortedSetIface {

    // Own fields of Gee-1.0.Gee.SortedSetIface

    parent_iface: GObject.TypeInterface
    first: (self: SortedSet) => any | null
    last: (self: SortedSet) => any | null
    bidir_iterator: (self: SortedSet) => BidirIterator
    iterator_at: (self: SortedSet, element?: any | null) => BidirIterator | null
    lower: (self: SortedSet, element?: any | null) => any | null
    higher: (self: SortedSet, element?: any | null) => any | null
    floor: (self: SortedSet, element?: any | null) => any | null
    ceil: (self: SortedSet, element?: any | null) => any | null
    head_set: (self: SortedSet, before?: any | null) => SortedSet
    tail_set: (self: SortedSet, after?: any | null) => SortedSet
    sub_set: (self: SortedSet, from?: any | null, to?: any | null) => SortedSet
}

export abstract class SortedSetIface {

    // Own properties of Gee-1.0.Gee.SortedSetIface

    static name: string
}

/**
 * Name of the imported GIR library
 * @see https://gitlab.gnome.org/GNOME/gjs/-/blob/master/gi/ns.cpp#L188
 */
export const __name__: string
/**
 * Version of the imported GIR library
 * @see https://gitlab.gnome.org/GNOME/gjs/-/blob/master/gi/ns.cpp#L189
 */
export const __version__: string
// END