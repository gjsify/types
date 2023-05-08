
/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/gjsify/ts-for-gir
 */
/**
 * Gee-1.0
 */

import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';

export namespace Gee {

function functionsGetEqualFuncFor(t: GObject.GType): GLib.EqualFunc
function functionsGetHashFuncFor(t: GObject.GType): GLib.HashFunc
function functionsGetCompareFuncFor(t: GObject.GType): GLib.CompareFunc
function directCompare(val1?: any | null, val2?: any | null): number
module BidirIterator {

    // Constructor properties interface

    interface ConstructorProperties extends Iterator.ConstructorProperties, GObject.Object.ConstructorProperties {
    }

}

interface BidirIterator extends Iterator {

    // Own properties of Gee-1.0.Gee.BidirIterator

    __gtype__: number

    // Owm methods of Gee-1.0.Gee.BidirIterator

    // Has conflict: previous(): boolean
    // Has conflict: hasPrevious(): boolean
    // Has conflict: last(): boolean

    // Own virtual methods of Gee-1.0.Gee.BidirIterator

    previous(): boolean
    hasPrevious(): boolean
    last(): boolean

    // Class property signals of Gee-1.0.Gee.BidirIterator

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class BidirIterator extends GObject.Object {

    // Own properties of Gee-1.0.Gee.BidirIterator

    static name: string

    // Constructors of Gee-1.0.Gee.BidirIterator

    constructor(config?: BidirIterator.ConstructorProperties) 
    _init(config?: BidirIterator.ConstructorProperties): void
}

module Collection {

    // Constructor properties interface

    interface ConstructorProperties extends Iterable.ConstructorProperties, GObject.Object.ConstructorProperties {
    }

}

interface Collection extends Iterable {

    // Own properties of Gee-1.0.Gee.Collection

    readonly size: number
    readonly isEmpty: boolean
    readonly readOnlyView: Collection
    __gtype__: number

    // Owm methods of Gee-1.0.Gee.Collection

    // Has conflict: contains(item?: any | null): boolean
    // Has conflict: add(item?: any | null): boolean
    // Has conflict: remove(item?: any | null): boolean
    // Has conflict: clear(): void
    // Has conflict: addAll(collection: Collection): boolean
    // Has conflict: containsAll(collection: Collection): boolean
    // Has conflict: removeAll(collection: Collection): boolean
    // Has conflict: retainAll(collection: Collection): boolean
    // Has conflict: toArray(): any[]

    // Own virtual methods of Gee-1.0.Gee.Collection

    contains(item?: any | null): boolean
    add(item?: any | null): boolean
    remove(item?: any | null): boolean
    clear(): void
    addAll(collection: Collection): boolean
    containsAll(collection: Collection): boolean
    removeAll(collection: Collection): boolean
    retainAll(collection: Collection): boolean
    toArray(): any[]

    // Class property signals of Gee-1.0.Gee.Collection

    connect(sigName: "notify::size", callback: (...args: any[]) => void): number
    on(sigName: "notify::size", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::size", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::is-empty", callback: (...args: any[]) => void): number
    on(sigName: "notify::is-empty", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::is-empty", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::is-empty", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::is-empty", ...args: any[]): void
    connect(sigName: "notify::read-only-view", callback: (...args: any[]) => void): number
    on(sigName: "notify::read-only-view", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::read-only-view", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::read-only-view", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::read-only-view", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::element-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::element-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::element-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::element-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::element-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class Collection extends GObject.Object {

    // Own properties of Gee-1.0.Gee.Collection

    static name: string

    // Constructors of Gee-1.0.Gee.Collection

    constructor(config?: Collection.ConstructorProperties) 
    _init(config?: Collection.ConstructorProperties): void
    static empty(): Collection
}

module Comparable {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface Comparable extends GObject.Object {

    // Own properties of Gee-1.0.Gee.Comparable

    __gtype__: number

    // Owm methods of Gee-1.0.Gee.Comparable

    // Has conflict: compareTo(object?: any | null): number

    // Own virtual methods of Gee-1.0.Gee.Comparable

    compareTo(object?: any | null): number

    // Class property signals of Gee-1.0.Gee.Comparable

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class Comparable {

    // Own properties of Gee-1.0.Gee.Comparable

    static name: string

    // Constructors of Gee-1.0.Gee.Comparable

    constructor(config?: Comparable.ConstructorProperties) 
    _init(config?: Comparable.ConstructorProperties): void
}

module Deque {

    // Constructor properties interface

    interface ConstructorProperties extends Queue.ConstructorProperties, GObject.Object.ConstructorProperties {
    }

}

interface Deque extends Queue {

    // Own properties of Gee-1.0.Gee.Deque

    __gtype__: number

    // Owm methods of Gee-1.0.Gee.Deque

    // Has conflict: offerHead(element?: any | null): boolean
    // Has conflict: peekHead(): any | null
    // Has conflict: pollHead(): any | null
    // Has conflict: drainHead(recipient: Collection, amount: number): number
    // Has conflict: offerTail(element?: any | null): boolean
    // Has conflict: peekTail(): any | null
    // Has conflict: pollTail(): any | null
    // Has conflict: drainTail(recipient: Collection, amount: number): number

    // Own virtual methods of Gee-1.0.Gee.Deque

    offerHead(element?: any | null): boolean
    peekHead(): any | null
    pollHead(): any | null
    drainHead(recipient: Collection, amount: number): number
    offerTail(element?: any | null): boolean
    peekTail(): any | null
    pollTail(): any | null
    drainTail(recipient: Collection, amount: number): number

    // Class property signals of Gee-1.0.Gee.Deque

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::capacity", callback: (...args: any[]) => void): number
    on(sigName: "notify::capacity", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::capacity", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::capacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::capacity", ...args: any[]): void
    connect(sigName: "notify::remaining-capacity", callback: (...args: any[]) => void): number
    on(sigName: "notify::remaining-capacity", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::remaining-capacity", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::remaining-capacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::remaining-capacity", ...args: any[]): void
    connect(sigName: "notify::is-full", callback: (...args: any[]) => void): number
    on(sigName: "notify::is-full", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::is-full", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::is-full", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::is-full", ...args: any[]): void
    connect(sigName: "notify::size", callback: (...args: any[]) => void): number
    on(sigName: "notify::size", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::size", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::is-empty", callback: (...args: any[]) => void): number
    on(sigName: "notify::is-empty", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::is-empty", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::is-empty", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::is-empty", ...args: any[]): void
    connect(sigName: "notify::read-only-view", callback: (...args: any[]) => void): number
    on(sigName: "notify::read-only-view", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::read-only-view", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::read-only-view", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::read-only-view", ...args: any[]): void
    connect(sigName: "notify::element-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::element-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::element-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::element-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::element-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class Deque extends GObject.Object {

    // Own properties of Gee-1.0.Gee.Deque

    static name: string

    // Constructors of Gee-1.0.Gee.Deque

    constructor(config?: Deque.ConstructorProperties) 
    _init(config?: Deque.ConstructorProperties): void
}

module Iterable {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface Iterable extends GObject.Object {

    // Own properties of Gee-1.0.Gee.Iterable

    readonly elementType: GObject.GType
    __gtype__: number

    // Owm methods of Gee-1.0.Gee.Iterable

    // Has conflict: iterator(): Iterator

    // Own virtual methods of Gee-1.0.Gee.Iterable

    iterator(): Iterator

    // Class property signals of Gee-1.0.Gee.Iterable

    connect(sigName: "notify::element-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::element-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::element-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::element-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::element-type", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class Iterable {

    // Own properties of Gee-1.0.Gee.Iterable

    static name: string

    // Constructors of Gee-1.0.Gee.Iterable

    constructor(config?: Iterable.ConstructorProperties) 
    _init(config?: Iterable.ConstructorProperties): void
}

module Iterator {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface Iterator extends GObject.Object {

    // Own properties of Gee-1.0.Gee.Iterator

    __gtype__: number

    // Owm methods of Gee-1.0.Gee.Iterator

    // Has conflict: next(): boolean
    // Has conflict: hasNext(): boolean
    // Has conflict: first(): boolean
    // Has conflict: get(): any | null
    // Has conflict: remove(): void

    // Own virtual methods of Gee-1.0.Gee.Iterator

    next(): boolean
    hasNext(): boolean
    first(): boolean
    get(): any | null
    remove(): void

    // Class property signals of Gee-1.0.Gee.Iterator

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class Iterator {

    // Own properties of Gee-1.0.Gee.Iterator

    static name: string

    // Constructors of Gee-1.0.Gee.Iterator

    constructor(config?: Iterator.ConstructorProperties) 
    _init(config?: Iterator.ConstructorProperties): void
}

module List {

    // Constructor properties interface

    interface ConstructorProperties extends Collection.ConstructorProperties, GObject.Object.ConstructorProperties {
    }

}

interface List extends Collection {

    // Own properties of Gee-1.0.Gee.List

    readonly readOnlyView: any
    __gtype__: number

    // Owm methods of Gee-1.0.Gee.List

    // Has conflict: listIterator(): ListIterator
    // Has conflict: get(index: number): any | null
    // Has conflict: set(index: number, item?: any | null): void
    // Has conflict: indexOf(item?: any | null): number
    // Has conflict: insert(index: number, item?: any | null): void
    // Has conflict: removeAt(index: number): any | null
    // Has conflict: slice(start: number, stop: number): List | null
    // Has conflict: first(): any | null
    // Has conflict: last(): any | null
    // Has conflict: insertAll(index: number, collection: Collection): void
    // Has conflict: sort(compareFunc?: GLib.CompareFunc | null): void

    // Own virtual methods of Gee-1.0.Gee.List

    listIterator(): ListIterator
    get(index: number): any | null
    set(index: number, item?: any | null): void
    indexOf(item?: any | null): number
    insert(index: number, item?: any | null): void
    removeAt(index: number): any | null
    slice(start: number, stop: number): List | null
    first(): any | null
    last(): any | null
    insertAll(index: number, collection: Collection): void
    sort(compareFunc?: GLib.CompareFunc | null): void

    // Class property signals of Gee-1.0.Gee.List

    connect(sigName: "notify::read-only-view", callback: (...args: any[]) => void): number
    on(sigName: "notify::read-only-view", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::read-only-view", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::read-only-view", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::read-only-view", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::size", callback: (...args: any[]) => void): number
    on(sigName: "notify::size", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::size", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::is-empty", callback: (...args: any[]) => void): number
    on(sigName: "notify::is-empty", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::is-empty", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::is-empty", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::is-empty", ...args: any[]): void
    connect(sigName: "notify::element-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::element-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::element-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::element-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::element-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class List extends GObject.Object {

    // Own properties of Gee-1.0.Gee.List

    static name: string

    // Constructors of Gee-1.0.Gee.List

    constructor(config?: List.ConstructorProperties) 
    _init(config?: List.ConstructorProperties): void
    static empty(): List

    // Overloads of empty

    static empty(): Collection
}

module ListIterator {

    // Constructor properties interface

    interface ConstructorProperties extends BidirIterator.ConstructorProperties, GObject.Object.ConstructorProperties {
    }

}

interface ListIterator extends BidirIterator {

    // Own properties of Gee-1.0.Gee.ListIterator

    __gtype__: number

    // Owm methods of Gee-1.0.Gee.ListIterator

    // Has conflict: set(item?: any | null): void
    // Has conflict: insert(item?: any | null): void
    // Has conflict: add(item?: any | null): void
    // Has conflict: index(): number

    // Own virtual methods of Gee-1.0.Gee.ListIterator

    set(item?: any | null): void
    insert(item?: any | null): void
    add(item?: any | null): void
    index(): number

    // Class property signals of Gee-1.0.Gee.ListIterator

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class ListIterator extends GObject.Object {

    // Own properties of Gee-1.0.Gee.ListIterator

    static name: string

    // Constructors of Gee-1.0.Gee.ListIterator

    constructor(config?: ListIterator.ConstructorProperties) 
    _init(config?: ListIterator.ConstructorProperties): void
}

module Map {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties, Iterable.ConstructorProperties {
    }

}

interface Map extends GObject.Object, Iterable {

    // Own properties of Gee-1.0.Gee.Map

    readonly size: number
    readonly isEmpty: boolean
    readonly keys: Set
    readonly values: Collection
    readonly entries: Set
    readonly readOnlyView: Map
    readonly keyType: GObject.GType
    readonly valueType: GObject.GType
    __gtype__: number

    // Owm methods of Gee-1.0.Gee.Map

    // Has conflict: hasKey(key?: any | null): boolean
    // Has conflict: contains(key?: any | null): boolean
    // Has conflict: has(key?: any | null, value?: any | null): boolean
    // Has conflict: get(key?: any | null): any | null
    // Has conflict: set(key?: any | null, value?: any | null): void
    // Has conflict: unset(key?: any | null): [ /* returnType */ boolean, /* value */ any | null ]
    // Has conflict: remove(key?: any | null): [ /* returnType */ boolean, /* value */ any | null ]
    // Has conflict: clear(): void
    // Has conflict: mapIterator(): MapIterator
    // Has conflict: setAll(map: Map): void
    // Has conflict: unsetAll(map: Map): boolean
    // Has conflict: removeAll(map: Map): boolean
    // Has conflict: hasAll(map: Map): boolean
    // Has conflict: containsAll(map: Map): boolean

    // Own virtual methods of Gee-1.0.Gee.Map

    hasKey(key?: any | null): boolean
    contains(key?: any | null): boolean
    has(key?: any | null, value?: any | null): boolean
    get(key?: any | null): any | null
    set(key?: any | null, value?: any | null): void
    unset(key?: any | null): [ /* returnType */ boolean, /* value */ any | null ]
    remove(key?: any | null): [ /* returnType */ boolean, /* value */ any | null ]
    clear(): void
    mapIterator(): MapIterator
    setAll(map: Map): void
    unsetAll(map: Map): boolean
    removeAll(map: Map): boolean
    hasAll(map: Map): boolean
    containsAll(map: Map): boolean

    // Class property signals of Gee-1.0.Gee.Map

    connect(sigName: "notify::size", callback: (...args: any[]) => void): number
    on(sigName: "notify::size", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::size", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::is-empty", callback: (...args: any[]) => void): number
    on(sigName: "notify::is-empty", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::is-empty", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::is-empty", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::is-empty", ...args: any[]): void
    connect(sigName: "notify::keys", callback: (...args: any[]) => void): number
    on(sigName: "notify::keys", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::keys", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::keys", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::keys", ...args: any[]): void
    connect(sigName: "notify::values", callback: (...args: any[]) => void): number
    on(sigName: "notify::values", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::values", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::values", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::values", ...args: any[]): void
    connect(sigName: "notify::entries", callback: (...args: any[]) => void): number
    on(sigName: "notify::entries", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::entries", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::entries", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::entries", ...args: any[]): void
    connect(sigName: "notify::read-only-view", callback: (...args: any[]) => void): number
    on(sigName: "notify::read-only-view", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::read-only-view", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::read-only-view", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::read-only-view", ...args: any[]): void
    connect(sigName: "notify::key-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::key-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::key-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::key-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::key-type", ...args: any[]): void
    connect(sigName: "notify::value-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::value-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::value-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::value-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::value-type", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::element-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::element-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::element-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::element-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::element-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class Map {

    // Own properties of Gee-1.0.Gee.Map

    static name: string

    // Constructors of Gee-1.0.Gee.Map

    constructor(config?: Map.ConstructorProperties) 
    _init(config?: Map.ConstructorProperties): void
    static empty(): Map
}

module MapIterator {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface MapIterator extends GObject.Object {

    // Own properties of Gee-1.0.Gee.MapIterator

    __gtype__: number

    // Owm methods of Gee-1.0.Gee.MapIterator

    // Has conflict: next(): boolean
    // Has conflict: hasNext(): boolean
    // Has conflict: first(): boolean
    // Has conflict: getKey(): any | null
    // Has conflict: getValue(): any | null
    // Has conflict: setValue(value?: any | null): void
    // Has conflict: unset(): void

    // Own virtual methods of Gee-1.0.Gee.MapIterator

    next(): boolean
    hasNext(): boolean
    first(): boolean
    getKey(): any | null
    getValue(): any | null
    setValue(value?: any | null): void
    unset(): void

    // Class property signals of Gee-1.0.Gee.MapIterator

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class MapIterator {

    // Own properties of Gee-1.0.Gee.MapIterator

    static name: string

    // Constructors of Gee-1.0.Gee.MapIterator

    constructor(config?: MapIterator.ConstructorProperties) 
    _init(config?: MapIterator.ConstructorProperties): void
}

module MultiMap {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface MultiMap extends GObject.Object {

    // Own properties of Gee-1.0.Gee.MultiMap

    readonly size: number
    __gtype__: number

    // Owm methods of Gee-1.0.Gee.MultiMap

    // Has conflict: getKeys(): Set
    // Has conflict: getAllKeys(): MultiSet
    // Has conflict: getValues(): Collection
    // Has conflict: contains(key?: any | null): boolean
    // Has conflict: get(key?: any | null): Collection
    // Has conflict: set(key?: any | null, value?: any | null): void
    // Has conflict: remove(key?: any | null, value?: any | null): boolean
    // Has conflict: removeAll(key?: any | null): boolean
    // Has conflict: clear(): void

    // Own virtual methods of Gee-1.0.Gee.MultiMap

    getKeys(): Set
    getAllKeys(): MultiSet
    getValues(): Collection
    contains(key?: any | null): boolean
    get(key?: any | null): Collection
    set(key?: any | null, value?: any | null): void
    remove(key?: any | null, value?: any | null): boolean
    removeAll(key?: any | null): boolean
    clear(): void

    // Class property signals of Gee-1.0.Gee.MultiMap

    connect(sigName: "notify::size", callback: (...args: any[]) => void): number
    on(sigName: "notify::size", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::size", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class MultiMap {

    // Own properties of Gee-1.0.Gee.MultiMap

    static name: string

    // Constructors of Gee-1.0.Gee.MultiMap

    constructor(config?: MultiMap.ConstructorProperties) 
    _init(config?: MultiMap.ConstructorProperties): void
}

module MultiSet {

    // Constructor properties interface

    interface ConstructorProperties extends Collection.ConstructorProperties, GObject.Object.ConstructorProperties {
    }

}

interface MultiSet extends Collection {

    // Own properties of Gee-1.0.Gee.MultiSet

    __gtype__: number

    // Owm methods of Gee-1.0.Gee.MultiSet

    // Has conflict: count(item?: any | null): number

    // Own virtual methods of Gee-1.0.Gee.MultiSet

    count(item?: any | null): number

    // Class property signals of Gee-1.0.Gee.MultiSet

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::size", callback: (...args: any[]) => void): number
    on(sigName: "notify::size", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::size", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::is-empty", callback: (...args: any[]) => void): number
    on(sigName: "notify::is-empty", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::is-empty", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::is-empty", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::is-empty", ...args: any[]): void
    connect(sigName: "notify::read-only-view", callback: (...args: any[]) => void): number
    on(sigName: "notify::read-only-view", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::read-only-view", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::read-only-view", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::read-only-view", ...args: any[]): void
    connect(sigName: "notify::element-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::element-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::element-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::element-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::element-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class MultiSet extends GObject.Object {

    // Own properties of Gee-1.0.Gee.MultiSet

    static name: string

    // Constructors of Gee-1.0.Gee.MultiSet

    constructor(config?: MultiSet.ConstructorProperties) 
    _init(config?: MultiSet.ConstructorProperties): void
}

module Queue {

    // Constructor properties interface

    interface ConstructorProperties extends Collection.ConstructorProperties, GObject.Object.ConstructorProperties {
    }

}

interface Queue extends Collection {

    // Own properties of Gee-1.0.Gee.Queue

    readonly capacity: number
    readonly remainingCapacity: number
    readonly isFull: boolean
    __gtype__: number

    // Owm methods of Gee-1.0.Gee.Queue

    // Has conflict: offer(element?: any | null): boolean
    // Has conflict: peek(): any | null
    // Has conflict: poll(): any | null
    // Has conflict: drain(recipient: Collection, amount: number): number

    // Own virtual methods of Gee-1.0.Gee.Queue

    offer(element?: any | null): boolean
    peek(): any | null
    poll(): any | null
    drain(recipient: Collection, amount: number): number

    // Class property signals of Gee-1.0.Gee.Queue

    connect(sigName: "notify::capacity", callback: (...args: any[]) => void): number
    on(sigName: "notify::capacity", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::capacity", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::capacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::capacity", ...args: any[]): void
    connect(sigName: "notify::remaining-capacity", callback: (...args: any[]) => void): number
    on(sigName: "notify::remaining-capacity", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::remaining-capacity", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::remaining-capacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::remaining-capacity", ...args: any[]): void
    connect(sigName: "notify::is-full", callback: (...args: any[]) => void): number
    on(sigName: "notify::is-full", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::is-full", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::is-full", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::is-full", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::size", callback: (...args: any[]) => void): number
    on(sigName: "notify::size", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::size", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::is-empty", callback: (...args: any[]) => void): number
    on(sigName: "notify::is-empty", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::is-empty", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::is-empty", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::is-empty", ...args: any[]): void
    connect(sigName: "notify::read-only-view", callback: (...args: any[]) => void): number
    on(sigName: "notify::read-only-view", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::read-only-view", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::read-only-view", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::read-only-view", ...args: any[]): void
    connect(sigName: "notify::element-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::element-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::element-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::element-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::element-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class Queue extends GObject.Object {

    // Own properties of Gee-1.0.Gee.Queue

    static name: string

    // Constructors of Gee-1.0.Gee.Queue

    constructor(config?: Queue.ConstructorProperties) 
    _init(config?: Queue.ConstructorProperties): void
}

module Set {

    // Constructor properties interface

    interface ConstructorProperties extends Collection.ConstructorProperties, GObject.Object.ConstructorProperties {
    }

}

interface Set extends Collection {

    // Own properties of Gee-1.0.Gee.Set

    readonly readOnlyView: any
    __gtype__: number

    // Class property signals of Gee-1.0.Gee.Set

    connect(sigName: "notify::read-only-view", callback: (...args: any[]) => void): number
    on(sigName: "notify::read-only-view", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::read-only-view", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::read-only-view", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::read-only-view", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::size", callback: (...args: any[]) => void): number
    on(sigName: "notify::size", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::size", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::is-empty", callback: (...args: any[]) => void): number
    on(sigName: "notify::is-empty", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::is-empty", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::is-empty", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::is-empty", ...args: any[]): void
    connect(sigName: "notify::element-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::element-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::element-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::element-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::element-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class Set extends GObject.Object {

    // Own properties of Gee-1.0.Gee.Set

    static name: string

    // Constructors of Gee-1.0.Gee.Set

    constructor(config?: Set.ConstructorProperties) 
    _init(config?: Set.ConstructorProperties): void
    static empty(): Set

    // Overloads of empty

    static empty(): Collection
}

module SortedSet {

    // Constructor properties interface

    interface ConstructorProperties extends Set.ConstructorProperties, GObject.Object.ConstructorProperties {
    }

}

interface SortedSet extends Set {

    // Own properties of Gee-1.0.Gee.SortedSet

    __gtype__: number

    // Conflicting properties

    readOnlyView: any

    // Owm methods of Gee-1.0.Gee.SortedSet

    // Has conflict: first(): any | null
    // Has conflict: last(): any | null
    // Has conflict: bidirIterator(): BidirIterator
    // Has conflict: iteratorAt(element?: any | null): BidirIterator | null
    // Has conflict: lower(element?: any | null): any | null
    // Has conflict: higher(element?: any | null): any | null
    // Has conflict: floor(element?: any | null): any | null
    // Has conflict: ceil(element?: any | null): any | null
    // Has conflict: headSet(before?: any | null): SortedSet
    // Has conflict: tailSet(after?: any | null): SortedSet
    // Has conflict: subSet(from?: any | null, to?: any | null): SortedSet

    // Own virtual methods of Gee-1.0.Gee.SortedSet

    first(): any | null
    last(): any | null
    bidirIterator(): BidirIterator
    iteratorAt(element?: any | null): BidirIterator | null
    lower(element?: any | null): any | null
    higher(element?: any | null): any | null
    floor(element?: any | null): any | null
    ceil(element?: any | null): any | null
    headSet(before?: any | null): SortedSet
    tailSet(after?: any | null): SortedSet
    subSet(from?: any | null, to?: any | null): SortedSet

    // Class property signals of Gee-1.0.Gee.SortedSet

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::read-only-view", callback: (...args: any[]) => void): number
    on(sigName: "notify::read-only-view", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::read-only-view", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::read-only-view", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::read-only-view", ...args: any[]): void
    connect(sigName: "notify::size", callback: (...args: any[]) => void): number
    on(sigName: "notify::size", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::size", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::is-empty", callback: (...args: any[]) => void): number
    on(sigName: "notify::is-empty", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::is-empty", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::is-empty", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::is-empty", ...args: any[]): void
    connect(sigName: "notify::element-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::element-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::element-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::element-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::element-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class SortedSet extends GObject.Object {

    // Own properties of Gee-1.0.Gee.SortedSet

    static name: string

    // Constructors of Gee-1.0.Gee.SortedSet

    constructor(config?: SortedSet.ConstructorProperties) 
    _init(config?: SortedSet.ConstructorProperties): void

    // Conflicting static methods

    static empty(): Set

    // Overloads of empty

    static empty(): Collection
    static empty(): Collection
}

module AbstractCollection {

    // Constructor properties interface

    interface ConstructorProperties extends Iterable.ConstructorProperties, Collection.ConstructorProperties, GObject.Object.ConstructorProperties {
    }

}

interface AbstractCollection extends Iterable, Collection {

    // Own properties of Gee-1.0.Gee.AbstractCollection

    readonly size: number
    readonly isEmpty: boolean
    readonly readOnlyView: Collection
    __gtype__: number

    // Own fields of Gee-1.0.Gee.AbstractCollection

    parentInstance: GObject.Object
    priv: AbstractCollectionPrivate

    // Owm methods of Gee-1.0.Gee.AbstractCollection

    // Has conflict: contains(item?: any | null): boolean
    // Has conflict: add(item?: any | null): boolean
    // Has conflict: remove(item?: any | null): boolean
    // Has conflict: clear(): void
    // Has conflict: toArray(): any[]
    // Has conflict: addAll(collection: Collection): boolean
    // Has conflict: containsAll(collection: Collection): boolean
    // Has conflict: removeAll(collection: Collection): boolean
    // Has conflict: retainAll(collection: Collection): boolean
    // Has conflict: iterator(): Iterator

    // Own virtual methods of Gee-1.0.Gee.AbstractCollection

    contains(item?: any | null): boolean

    // Overloads of contains

    contains(item?: any | null): boolean
    add(item?: any | null): boolean

    // Overloads of add

    add(item?: any | null): boolean
    remove(item?: any | null): boolean

    // Overloads of remove

    remove(item?: any | null): boolean
    clear(): void

    // Overloads of clear

    clear(): void
    toArray(): any[]

    // Overloads of toArray

    toArray(): any[]
    addAll(collection: Collection): boolean

    // Overloads of addAll

    addAll(collection: Collection): boolean
    containsAll(collection: Collection): boolean

    // Overloads of containsAll

    containsAll(collection: Collection): boolean
    removeAll(collection: Collection): boolean

    // Overloads of removeAll

    removeAll(collection: Collection): boolean
    retainAll(collection: Collection): boolean

    // Overloads of retainAll

    retainAll(collection: Collection): boolean
    iterator(): Iterator

    // Overloads of iterator

    iterator(): Iterator

    // Class property signals of Gee-1.0.Gee.AbstractCollection

    connect(sigName: "notify::size", callback: (...args: any[]) => void): number
    on(sigName: "notify::size", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::size", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::is-empty", callback: (...args: any[]) => void): number
    on(sigName: "notify::is-empty", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::is-empty", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::is-empty", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::is-empty", ...args: any[]): void
    connect(sigName: "notify::read-only-view", callback: (...args: any[]) => void): number
    on(sigName: "notify::read-only-view", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::read-only-view", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::read-only-view", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::read-only-view", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::element-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::element-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::element-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::element-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::element-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class AbstractCollection extends GObject.Object {

    // Own properties of Gee-1.0.Gee.AbstractCollection

    static name: string

    // Constructors of Gee-1.0.Gee.AbstractCollection

    constructor(config?: AbstractCollection.ConstructorProperties) 
    _init(config?: AbstractCollection.ConstructorProperties): void
}

module AbstractList {

    // Constructor properties interface

    interface ConstructorProperties extends List.ConstructorProperties, AbstractCollection.ConstructorProperties {
    }

}

interface AbstractList extends List {

    // Own properties of Gee-1.0.Gee.AbstractList

    readonly readOnlyView: any
    __gtype__: number

    // Own fields of Gee-1.0.Gee.AbstractList

    parentInstance: any
    priv: any

    // Owm methods of Gee-1.0.Gee.AbstractList

    // Has conflict: listIterator(): ListIterator
    // Has conflict: get(index: number): any | null
    // Has conflict: set(index: number, item?: any | null): void
    // Has conflict: indexOf(item?: any | null): number
    // Has conflict: insert(index: number, item?: any | null): void
    // Has conflict: removeAt(index: number): any | null
    // Has conflict: slice(start: number, stop: number): List | null
    // Has conflict: first(): any | null
    // Has conflict: last(): any | null
    // Has conflict: insertAll(index: number, collection: Collection): void

    // Conflicting methods

    contains(item?: any | null): boolean

    // Overloads of contains

    contains(item?: any | null): boolean
    contains(item?: any | null): boolean
    add(item?: any | null): boolean

    // Overloads of add

    add(item?: any | null): boolean
    add(item?: any | null): boolean
    remove(item?: any | null): boolean

    // Overloads of remove

    remove(item?: any | null): boolean
    remove(item?: any | null): boolean
    clear(): void

    // Overloads of clear

    clear(): void
    clear(): void
    addAll(collection: Collection): boolean

    // Overloads of addAll

    addAll(collection: Collection): boolean
    addAll(collection: Collection): boolean
    containsAll(collection: Collection): boolean

    // Overloads of containsAll

    containsAll(collection: Collection): boolean
    containsAll(collection: Collection): boolean
    removeAll(collection: Collection): boolean

    // Overloads of removeAll

    removeAll(collection: Collection): boolean
    removeAll(collection: Collection): boolean
    retainAll(collection: Collection): boolean

    // Overloads of retainAll

    retainAll(collection: Collection): boolean
    retainAll(collection: Collection): boolean
    toArray(): any[]

    // Overloads of toArray

    toArray(): any[]
    toArray(): any[]
    iterator(): Iterator

    // Overloads of iterator

    iterator(): Iterator
    iterator(): Iterator

    // Own virtual methods of Gee-1.0.Gee.AbstractList

    listIterator(): ListIterator

    // Overloads of listIterator

    listIterator(): ListIterator
    get(index: number): any | null

    // Overloads of get

    get(index: number): any | null
    set(index: number, item?: any | null): void

    // Overloads of set

    set(index: number, item?: any | null): void
    indexOf(item?: any | null): number

    // Overloads of indexOf

    indexOf(item?: any | null): number
    insert(index: number, item?: any | null): void

    // Overloads of insert

    insert(index: number, item?: any | null): void
    removeAt(index: number): any | null

    // Overloads of removeAt

    removeAt(index: number): any | null
    slice(start: number, stop: number): List | null

    // Overloads of slice

    slice(start: number, stop: number): List | null
    first(): any | null

    // Overloads of first

    first(): any | null
    last(): any | null

    // Overloads of last

    last(): any | null
    insertAll(index: number, collection: Collection): void

    // Overloads of insertAll

    insertAll(index: number, collection: Collection): void

    // Class property signals of Gee-1.0.Gee.AbstractList

    connect(sigName: "notify::read-only-view", callback: (...args: any[]) => void): number
    on(sigName: "notify::read-only-view", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::read-only-view", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::read-only-view", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::read-only-view", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::size", callback: (...args: any[]) => void): number
    on(sigName: "notify::size", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::size", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::is-empty", callback: (...args: any[]) => void): number
    on(sigName: "notify::is-empty", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::is-empty", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::is-empty", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::is-empty", ...args: any[]): void
    connect(sigName: "notify::element-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::element-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::element-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::element-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::element-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class AbstractList extends AbstractCollection {

    // Own properties of Gee-1.0.Gee.AbstractList

    static name: string

    // Constructors of Gee-1.0.Gee.AbstractList

    constructor(config?: AbstractList.ConstructorProperties) 
    _init(config?: AbstractList.ConstructorProperties): void

    // Conflicting static methods

    static empty(): List

    // Overloads of empty

    static empty(): Collection
    static empty(): Collection
}

module AbstractMap {

    // Constructor properties interface

    interface ConstructorProperties extends Iterable.ConstructorProperties, Map.ConstructorProperties, GObject.Object.ConstructorProperties {
    }

}

interface AbstractMap extends Iterable, Map {

    // Own properties of Gee-1.0.Gee.AbstractMap

    readonly size: number
    readonly isEmpty: boolean
    readonly keys: Set
    readonly values: Collection
    readonly entries: Set
    readonly readOnlyView: Map
    __gtype__: number

    // Own fields of Gee-1.0.Gee.AbstractMap

    parentInstance: GObject.Object
    priv: AbstractMapPrivate

    // Owm methods of Gee-1.0.Gee.AbstractMap

    // Has conflict: hasKey(key?: any | null): boolean
    // Has conflict: has(key?: any | null, value?: any | null): boolean
    // Has conflict: get(key?: any | null): any | null
    // Has conflict: set(key?: any | null, value?: any | null): void
    // Has conflict: unset(key?: any | null): [ /* returnType */ boolean, /* value */ any | null ]
    // Has conflict: mapIterator(): MapIterator
    // Has conflict: clear(): void
    // Has conflict: setAll(map: Map): void
    // Has conflict: unsetAll(map: Map): boolean
    // Has conflict: hasAll(map: Map): boolean

    // Own virtual methods of Gee-1.0.Gee.AbstractMap

    hasKey(key?: any | null): boolean

    // Overloads of hasKey

    hasKey(key?: any | null): boolean
    has(key?: any | null, value?: any | null): boolean

    // Overloads of has

    has(key?: any | null, value?: any | null): boolean
    get(key?: any | null): any | null

    // Overloads of get

    get(key?: any | null): any | null
    set(key?: any | null, value?: any | null): void

    // Overloads of set

    set(key?: any | null, value?: any | null): void
    unset(key?: any | null): [ /* returnType */ boolean, /* value */ any | null ]

    // Overloads of unset

    unset(key?: any | null): [ /* returnType */ boolean, /* value */ any | null ]
    mapIterator(): MapIterator

    // Overloads of mapIterator

    mapIterator(): MapIterator
    clear(): void

    // Overloads of clear

    clear(): void
    setAll(map: Map): void

    // Overloads of setAll

    setAll(map: Map): void
    unsetAll(map: Map): boolean

    // Overloads of unsetAll

    unsetAll(map: Map): boolean
    hasAll(map: Map): boolean

    // Overloads of hasAll

    hasAll(map: Map): boolean

    // Class property signals of Gee-1.0.Gee.AbstractMap

    connect(sigName: "notify::size", callback: (...args: any[]) => void): number
    on(sigName: "notify::size", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::size", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::is-empty", callback: (...args: any[]) => void): number
    on(sigName: "notify::is-empty", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::is-empty", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::is-empty", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::is-empty", ...args: any[]): void
    connect(sigName: "notify::keys", callback: (...args: any[]) => void): number
    on(sigName: "notify::keys", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::keys", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::keys", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::keys", ...args: any[]): void
    connect(sigName: "notify::values", callback: (...args: any[]) => void): number
    on(sigName: "notify::values", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::values", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::values", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::values", ...args: any[]): void
    connect(sigName: "notify::entries", callback: (...args: any[]) => void): number
    on(sigName: "notify::entries", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::entries", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::entries", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::entries", ...args: any[]): void
    connect(sigName: "notify::read-only-view", callback: (...args: any[]) => void): number
    on(sigName: "notify::read-only-view", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::read-only-view", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::read-only-view", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::read-only-view", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::element-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::element-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::element-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::element-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::element-type", ...args: any[]): void
    connect(sigName: "notify::key-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::key-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::key-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::key-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::key-type", ...args: any[]): void
    connect(sigName: "notify::value-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::value-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::value-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::value-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::value-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class AbstractMap extends GObject.Object {

    // Own properties of Gee-1.0.Gee.AbstractMap

    static name: string

    // Constructors of Gee-1.0.Gee.AbstractMap

    constructor(config?: AbstractMap.ConstructorProperties) 
    _init(config?: AbstractMap.ConstructorProperties): void
}

module AbstractMultiMap {

    // Constructor properties interface

    interface ConstructorProperties extends MultiMap.ConstructorProperties, GObject.Object.ConstructorProperties {
    }

}

interface AbstractMultiMap extends MultiMap {

    // Own properties of Gee-1.0.Gee.AbstractMultiMap

    __gtype__: number

    // Own fields of Gee-1.0.Gee.AbstractMultiMap

    parentInstance: GObject.Object
    priv: AbstractMultiMapPrivate
    storageMap: Map

    // Owm methods of Gee-1.0.Gee.AbstractMultiMap

    // Has conflict: createValueStorage(): Collection
    // Has conflict: createMultiKeySet(): MultiSet
    // Has conflict: getValueEqualFunc(): GLib.EqualFunc

    // Own virtual methods of Gee-1.0.Gee.AbstractMultiMap

    createValueStorage(): Collection
    createMultiKeySet(): MultiSet
    getValueEqualFunc(): GLib.EqualFunc

    // Class property signals of Gee-1.0.Gee.AbstractMultiMap

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::size", callback: (...args: any[]) => void): number
    on(sigName: "notify::size", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::size", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class AbstractMultiMap extends GObject.Object {

    // Own properties of Gee-1.0.Gee.AbstractMultiMap

    static name: string

    // Constructors of Gee-1.0.Gee.AbstractMultiMap

    constructor(config?: AbstractMultiMap.ConstructorProperties) 
    _init(config?: AbstractMultiMap.ConstructorProperties): void
}

module AbstractMultiSet {

    // Constructor properties interface

    interface ConstructorProperties extends MultiSet.ConstructorProperties, AbstractCollection.ConstructorProperties {
    }

}

interface AbstractMultiSet extends MultiSet {

    // Own properties of Gee-1.0.Gee.AbstractMultiSet

    __gtype__: number

    // Own fields of Gee-1.0.Gee.AbstractMultiSet

    parentInstance: any
    priv: any
    storageMap: Map

    // Conflicting methods

    contains(item?: any | null): boolean

    // Overloads of contains

    contains(item?: any | null): boolean
    contains(item?: any | null): boolean
    add(item?: any | null): boolean

    // Overloads of add

    add(item?: any | null): boolean
    add(item?: any | null): boolean
    remove(item?: any | null): boolean

    // Overloads of remove

    remove(item?: any | null): boolean
    remove(item?: any | null): boolean
    clear(): void

    // Overloads of clear

    clear(): void
    clear(): void
    addAll(collection: Collection): boolean

    // Overloads of addAll

    addAll(collection: Collection): boolean
    addAll(collection: Collection): boolean
    containsAll(collection: Collection): boolean

    // Overloads of containsAll

    containsAll(collection: Collection): boolean
    containsAll(collection: Collection): boolean
    removeAll(collection: Collection): boolean

    // Overloads of removeAll

    removeAll(collection: Collection): boolean
    removeAll(collection: Collection): boolean
    retainAll(collection: Collection): boolean

    // Overloads of retainAll

    retainAll(collection: Collection): boolean
    retainAll(collection: Collection): boolean
    toArray(): any[]

    // Overloads of toArray

    toArray(): any[]
    toArray(): any[]
    iterator(): Iterator

    // Overloads of iterator

    iterator(): Iterator
    iterator(): Iterator

    // Class property signals of Gee-1.0.Gee.AbstractMultiSet

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::size", callback: (...args: any[]) => void): number
    on(sigName: "notify::size", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::size", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::is-empty", callback: (...args: any[]) => void): number
    on(sigName: "notify::is-empty", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::is-empty", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::is-empty", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::is-empty", ...args: any[]): void
    connect(sigName: "notify::read-only-view", callback: (...args: any[]) => void): number
    on(sigName: "notify::read-only-view", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::read-only-view", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::read-only-view", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::read-only-view", ...args: any[]): void
    connect(sigName: "notify::element-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::element-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::element-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::element-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::element-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class AbstractMultiSet extends AbstractCollection {

    // Own properties of Gee-1.0.Gee.AbstractMultiSet

    static name: string

    // Constructors of Gee-1.0.Gee.AbstractMultiSet

    constructor(config?: AbstractMultiSet.ConstructorProperties) 
    _init(config?: AbstractMultiSet.ConstructorProperties): void
}

module AbstractQueue {

    // Constructor properties interface

    interface ConstructorProperties extends Queue.ConstructorProperties, AbstractCollection.ConstructorProperties {
    }

}

interface AbstractQueue extends Queue {

    // Own properties of Gee-1.0.Gee.AbstractQueue

    readonly capacity: number
    readonly remainingCapacity: number
    readonly isFull: boolean
    __gtype__: number

    // Own fields of Gee-1.0.Gee.AbstractQueue

    parentInstance: any
    priv: any

    // Owm methods of Gee-1.0.Gee.AbstractQueue

    // Has conflict: offer(element?: any | null): boolean
    // Has conflict: peek(): any | null
    // Has conflict: poll(): any | null
    // Has conflict: drain(recipient: Collection, amount: number): number

    // Conflicting methods

    contains(item?: any | null): boolean

    // Overloads of contains

    contains(item?: any | null): boolean
    contains(item?: any | null): boolean
    add(item?: any | null): boolean

    // Overloads of add

    add(item?: any | null): boolean
    add(item?: any | null): boolean
    remove(item?: any | null): boolean

    // Overloads of remove

    remove(item?: any | null): boolean
    remove(item?: any | null): boolean
    clear(): void

    // Overloads of clear

    clear(): void
    clear(): void
    addAll(collection: Collection): boolean

    // Overloads of addAll

    addAll(collection: Collection): boolean
    addAll(collection: Collection): boolean
    containsAll(collection: Collection): boolean

    // Overloads of containsAll

    containsAll(collection: Collection): boolean
    containsAll(collection: Collection): boolean
    removeAll(collection: Collection): boolean

    // Overloads of removeAll

    removeAll(collection: Collection): boolean
    removeAll(collection: Collection): boolean
    retainAll(collection: Collection): boolean

    // Overloads of retainAll

    retainAll(collection: Collection): boolean
    retainAll(collection: Collection): boolean
    toArray(): any[]

    // Overloads of toArray

    toArray(): any[]
    toArray(): any[]
    iterator(): Iterator

    // Overloads of iterator

    iterator(): Iterator
    iterator(): Iterator

    // Own virtual methods of Gee-1.0.Gee.AbstractQueue

    offer(element?: any | null): boolean

    // Overloads of offer

    offer(element?: any | null): boolean
    peek(): any | null

    // Overloads of peek

    peek(): any | null
    poll(): any | null

    // Overloads of poll

    poll(): any | null
    drain(recipient: Collection, amount: number): number

    // Overloads of drain

    drain(recipient: Collection, amount: number): number

    // Class property signals of Gee-1.0.Gee.AbstractQueue

    connect(sigName: "notify::capacity", callback: (...args: any[]) => void): number
    on(sigName: "notify::capacity", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::capacity", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::capacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::capacity", ...args: any[]): void
    connect(sigName: "notify::remaining-capacity", callback: (...args: any[]) => void): number
    on(sigName: "notify::remaining-capacity", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::remaining-capacity", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::remaining-capacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::remaining-capacity", ...args: any[]): void
    connect(sigName: "notify::is-full", callback: (...args: any[]) => void): number
    on(sigName: "notify::is-full", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::is-full", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::is-full", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::is-full", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::size", callback: (...args: any[]) => void): number
    on(sigName: "notify::size", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::size", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::is-empty", callback: (...args: any[]) => void): number
    on(sigName: "notify::is-empty", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::is-empty", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::is-empty", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::is-empty", ...args: any[]): void
    connect(sigName: "notify::read-only-view", callback: (...args: any[]) => void): number
    on(sigName: "notify::read-only-view", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::read-only-view", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::read-only-view", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::read-only-view", ...args: any[]): void
    connect(sigName: "notify::element-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::element-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::element-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::element-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::element-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class AbstractQueue extends AbstractCollection {

    // Own properties of Gee-1.0.Gee.AbstractQueue

    static name: string

    // Constructors of Gee-1.0.Gee.AbstractQueue

    constructor(config?: AbstractQueue.ConstructorProperties) 
    _init(config?: AbstractQueue.ConstructorProperties): void
}

module AbstractSet {

    // Constructor properties interface

    interface ConstructorProperties extends Set.ConstructorProperties, AbstractCollection.ConstructorProperties {
    }

}

interface AbstractSet extends Set {

    // Own properties of Gee-1.0.Gee.AbstractSet

    readonly readOnlyView: any
    __gtype__: number

    // Own fields of Gee-1.0.Gee.AbstractSet

    parentInstance: any
    priv: any

    // Conflicting methods

    contains(item?: any | null): boolean

    // Overloads of contains

    contains(item?: any | null): boolean
    contains(item?: any | null): boolean
    add(item?: any | null): boolean

    // Overloads of add

    add(item?: any | null): boolean
    add(item?: any | null): boolean
    remove(item?: any | null): boolean

    // Overloads of remove

    remove(item?: any | null): boolean
    remove(item?: any | null): boolean
    clear(): void

    // Overloads of clear

    clear(): void
    clear(): void
    addAll(collection: Collection): boolean

    // Overloads of addAll

    addAll(collection: Collection): boolean
    addAll(collection: Collection): boolean
    containsAll(collection: Collection): boolean

    // Overloads of containsAll

    containsAll(collection: Collection): boolean
    containsAll(collection: Collection): boolean
    removeAll(collection: Collection): boolean

    // Overloads of removeAll

    removeAll(collection: Collection): boolean
    removeAll(collection: Collection): boolean
    retainAll(collection: Collection): boolean

    // Overloads of retainAll

    retainAll(collection: Collection): boolean
    retainAll(collection: Collection): boolean
    toArray(): any[]

    // Overloads of toArray

    toArray(): any[]
    toArray(): any[]
    iterator(): Iterator

    // Overloads of iterator

    iterator(): Iterator
    iterator(): Iterator

    // Class property signals of Gee-1.0.Gee.AbstractSet

    connect(sigName: "notify::read-only-view", callback: (...args: any[]) => void): number
    on(sigName: "notify::read-only-view", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::read-only-view", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::read-only-view", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::read-only-view", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::size", callback: (...args: any[]) => void): number
    on(sigName: "notify::size", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::size", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::is-empty", callback: (...args: any[]) => void): number
    on(sigName: "notify::is-empty", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::is-empty", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::is-empty", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::is-empty", ...args: any[]): void
    connect(sigName: "notify::element-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::element-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::element-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::element-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::element-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class AbstractSet extends AbstractCollection {

    // Own properties of Gee-1.0.Gee.AbstractSet

    static name: string

    // Constructors of Gee-1.0.Gee.AbstractSet

    constructor(config?: AbstractSet.ConstructorProperties) 
    _init(config?: AbstractSet.ConstructorProperties): void

    // Conflicting static methods

    static empty(): Set

    // Overloads of empty

    static empty(): Collection
    static empty(): Collection
}

module ArrayList {

    // Constructor properties interface

    interface ConstructorProperties extends AbstractList.ConstructorProperties {

        // Own constructor properties of Gee-1.0.Gee.ArrayList

        equalFunc?: GLib.EqualFunc | null
    }

}

interface ArrayList {

    // Own properties of Gee-1.0.Gee.ArrayList

    equalFunc: GLib.EqualFunc
    __gtype__: number

    // Conflicting properties

    readOnlyView: any

    // Own fields of Gee-1.0.Gee.ArrayList

    parentInstance: any
    priv: any

    // Owm methods of Gee-1.0.Gee.ArrayList

    sortWithData(compare: GLib.CompareDataFunc): void

    // Conflicting methods

    listIterator(): ListIterator

    // Overloads of listIterator

    listIterator(): ListIterator
    listIterator(): ListIterator
    get(index: number): any | null

    // Overloads of get

    get(index: number): any | null
    get(index: number): any | null
    set(index: number, item?: any | null): void

    // Overloads of set

    set(index: number, item?: any | null): void
    set(index: number, item?: any | null): void
    indexOf(item?: any | null): number

    // Overloads of indexOf

    indexOf(item?: any | null): number
    indexOf(item?: any | null): number
    insert(index: number, item?: any | null): void

    // Overloads of insert

    insert(index: number, item?: any | null): void
    insert(index: number, item?: any | null): void
    removeAt(index: number): any | null

    // Overloads of removeAt

    removeAt(index: number): any | null
    removeAt(index: number): any | null
    slice(start: number, stop: number): List | null

    // Overloads of slice

    slice(start: number, stop: number): List | null
    slice(start: number, stop: number): List | null
    first(): any | null

    // Overloads of first

    first(): any | null
    first(): any | null
    last(): any | null

    // Overloads of last

    last(): any | null
    last(): any | null
    insertAll(index: number, collection: Collection): void

    // Overloads of insertAll

    insertAll(index: number, collection: Collection): void
    insertAll(index: number, collection: Collection): void
    contains(item?: any | null): boolean

    // Overloads of contains

    contains(item?: any | null): boolean
    contains(item?: any | null): boolean
    add(item?: any | null): boolean

    // Overloads of add

    add(item?: any | null): boolean
    add(item?: any | null): boolean
    remove(item?: any | null): boolean

    // Overloads of remove

    remove(item?: any | null): boolean
    remove(item?: any | null): boolean
    clear(): void

    // Overloads of clear

    clear(): void
    clear(): void
    addAll(collection: Collection): boolean

    // Overloads of addAll

    addAll(collection: Collection): boolean
    addAll(collection: Collection): boolean
    containsAll(collection: Collection): boolean

    // Overloads of containsAll

    containsAll(collection: Collection): boolean
    containsAll(collection: Collection): boolean
    removeAll(collection: Collection): boolean

    // Overloads of removeAll

    removeAll(collection: Collection): boolean
    removeAll(collection: Collection): boolean
    retainAll(collection: Collection): boolean

    // Overloads of retainAll

    retainAll(collection: Collection): boolean
    retainAll(collection: Collection): boolean
    toArray(): any[]

    // Overloads of toArray

    toArray(): any[]
    toArray(): any[]
    iterator(): Iterator

    // Overloads of iterator

    iterator(): Iterator
    iterator(): Iterator

    // Class property signals of Gee-1.0.Gee.ArrayList

    connect(sigName: "notify::equal-func", callback: (...args: any[]) => void): number
    on(sigName: "notify::equal-func", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::equal-func", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::equal-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::equal-func", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::read-only-view", callback: (...args: any[]) => void): number
    on(sigName: "notify::read-only-view", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::read-only-view", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::read-only-view", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::read-only-view", ...args: any[]): void
    connect(sigName: "notify::size", callback: (...args: any[]) => void): number
    on(sigName: "notify::size", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::size", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::is-empty", callback: (...args: any[]) => void): number
    on(sigName: "notify::is-empty", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::is-empty", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::is-empty", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::is-empty", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class ArrayList extends AbstractList {

    // Own properties of Gee-1.0.Gee.ArrayList

    static name: string

    // Constructors of Gee-1.0.Gee.ArrayList

    constructor(config?: ArrayList.ConstructorProperties) 
    constructor(equalFunc?: GLib.EqualFunc | null) 
    static new(equalFunc?: GLib.EqualFunc | null): ArrayList
    _init(config?: ArrayList.ConstructorProperties): void

    // Conflicting static methods

    static empty(): List

    // Overloads of empty

    static empty(): Collection
    static empty(): Collection
}

module HashMap {

    // Constructor properties interface

    interface ConstructorProperties extends AbstractMap.ConstructorProperties {

        // Own constructor properties of Gee-1.0.Gee.HashMap

        keyHashFunc?: GLib.HashFunc | null
        keyEqualFunc?: GLib.EqualFunc | null
        valueEqualFunc?: GLib.EqualFunc | null
    }

}

interface HashMap {

    // Own properties of Gee-1.0.Gee.HashMap

    keyHashFunc: GLib.HashFunc
    keyEqualFunc: GLib.EqualFunc
    valueEqualFunc: GLib.EqualFunc
    __gtype__: number

    // Own fields of Gee-1.0.Gee.HashMap

    parentInstance: any
    priv: any

    // Conflicting methods

    hasKey(key?: any | null): boolean

    // Overloads of hasKey

    hasKey(key?: any | null): boolean
    hasKey(key?: any | null): boolean
    has(key?: any | null, value?: any | null): boolean

    // Overloads of has

    has(key?: any | null, value?: any | null): boolean
    has(key?: any | null, value?: any | null): boolean
    get(key?: any | null): any | null

    // Overloads of get

    get(key?: any | null): any | null
    get(key?: any | null): any | null
    set(key?: any | null, value?: any | null): void

    // Overloads of set

    set(key?: any | null, value?: any | null): void
    set(key?: any | null, value?: any | null): void
    unset(key?: any | null): [ /* returnType */ boolean, /* value */ any | null ]

    // Overloads of unset

    unset(key?: any | null): [ /* returnType */ boolean, /* value */ any | null ]
    unset(key?: any | null): [ /* returnType */ boolean, /* value */ any | null ]
    mapIterator(): MapIterator

    // Overloads of mapIterator

    mapIterator(): MapIterator
    mapIterator(): MapIterator
    clear(): void

    // Overloads of clear

    clear(): void
    clear(): void
    setAll(map: Map): void

    // Overloads of setAll

    setAll(map: Map): void
    setAll(map: Map): void
    unsetAll(map: Map): boolean

    // Overloads of unsetAll

    unsetAll(map: Map): boolean
    unsetAll(map: Map): boolean
    hasAll(map: Map): boolean

    // Overloads of hasAll

    hasAll(map: Map): boolean
    hasAll(map: Map): boolean

    // Class property signals of Gee-1.0.Gee.HashMap

    connect(sigName: "notify::key-hash-func", callback: (...args: any[]) => void): number
    on(sigName: "notify::key-hash-func", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::key-hash-func", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::key-hash-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::key-hash-func", ...args: any[]): void
    connect(sigName: "notify::key-equal-func", callback: (...args: any[]) => void): number
    on(sigName: "notify::key-equal-func", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::key-equal-func", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::key-equal-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::key-equal-func", ...args: any[]): void
    connect(sigName: "notify::value-equal-func", callback: (...args: any[]) => void): number
    on(sigName: "notify::value-equal-func", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::value-equal-func", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::value-equal-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::value-equal-func", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::size", callback: (...args: any[]) => void): number
    on(sigName: "notify::size", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::size", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::is-empty", callback: (...args: any[]) => void): number
    on(sigName: "notify::is-empty", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::is-empty", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::is-empty", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::is-empty", ...args: any[]): void
    connect(sigName: "notify::keys", callback: (...args: any[]) => void): number
    on(sigName: "notify::keys", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::keys", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::keys", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::keys", ...args: any[]): void
    connect(sigName: "notify::values", callback: (...args: any[]) => void): number
    on(sigName: "notify::values", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::values", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::values", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::values", ...args: any[]): void
    connect(sigName: "notify::entries", callback: (...args: any[]) => void): number
    on(sigName: "notify::entries", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::entries", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::entries", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::entries", ...args: any[]): void
    connect(sigName: "notify::read-only-view", callback: (...args: any[]) => void): number
    on(sigName: "notify::read-only-view", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::read-only-view", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::read-only-view", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::read-only-view", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class HashMap extends AbstractMap {

    // Own properties of Gee-1.0.Gee.HashMap

    static name: string

    // Constructors of Gee-1.0.Gee.HashMap

    constructor(config?: HashMap.ConstructorProperties) 
    constructor(keyHashFunc?: GLib.HashFunc | null, keyEqualFunc?: GLib.EqualFunc | null, valueEqualFunc?: GLib.EqualFunc | null) 
    static new(keyHashFunc?: GLib.HashFunc | null, keyEqualFunc?: GLib.EqualFunc | null, valueEqualFunc?: GLib.EqualFunc | null): HashMap
    _init(config?: HashMap.ConstructorProperties): void
}

module HashMultiMap {

    // Constructor properties interface

    interface ConstructorProperties extends AbstractMultiMap.ConstructorProperties {

        // Own constructor properties of Gee-1.0.Gee.HashMultiMap

        valueHashFunc?: GLib.HashFunc | null
        valueEqualFunc?: GLib.EqualFunc | null
    }

}

interface HashMultiMap {

    // Own properties of Gee-1.0.Gee.HashMultiMap

    readonly keyHashFunc: GLib.HashFunc
    readonly keyEqualFunc: GLib.EqualFunc
    valueHashFunc: GLib.HashFunc
    valueEqualFunc: GLib.EqualFunc
    __gtype__: number

    // Own fields of Gee-1.0.Gee.HashMultiMap

    parentInstance: any
    priv: any

    // Class property signals of Gee-1.0.Gee.HashMultiMap

    connect(sigName: "notify::key-hash-func", callback: (...args: any[]) => void): number
    on(sigName: "notify::key-hash-func", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::key-hash-func", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::key-hash-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::key-hash-func", ...args: any[]): void
    connect(sigName: "notify::key-equal-func", callback: (...args: any[]) => void): number
    on(sigName: "notify::key-equal-func", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::key-equal-func", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::key-equal-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::key-equal-func", ...args: any[]): void
    connect(sigName: "notify::value-hash-func", callback: (...args: any[]) => void): number
    on(sigName: "notify::value-hash-func", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::value-hash-func", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::value-hash-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::value-hash-func", ...args: any[]): void
    connect(sigName: "notify::value-equal-func", callback: (...args: any[]) => void): number
    on(sigName: "notify::value-equal-func", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::value-equal-func", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::value-equal-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::value-equal-func", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class HashMultiMap extends AbstractMultiMap {

    // Own properties of Gee-1.0.Gee.HashMultiMap

    static name: string

    // Constructors of Gee-1.0.Gee.HashMultiMap

    constructor(config?: HashMultiMap.ConstructorProperties) 
    constructor(keyHashFunc?: GLib.HashFunc | null, keyEqualFunc?: GLib.EqualFunc | null, valueHashFunc?: GLib.HashFunc | null, valueEqualFunc?: GLib.EqualFunc | null) 
    static new(keyHashFunc?: GLib.HashFunc | null, keyEqualFunc?: GLib.EqualFunc | null, valueHashFunc?: GLib.HashFunc | null, valueEqualFunc?: GLib.EqualFunc | null): HashMultiMap
    _init(config?: HashMultiMap.ConstructorProperties): void
}

module HashMultiSet {

    // Constructor properties interface

    interface ConstructorProperties extends AbstractMultiSet.ConstructorProperties {
    }

}

interface HashMultiSet {

    // Own properties of Gee-1.0.Gee.HashMultiSet

    readonly hashFunc: GLib.HashFunc
    readonly equalFunc: GLib.EqualFunc
    __gtype__: number

    // Own fields of Gee-1.0.Gee.HashMultiSet

    parentInstance: any
    priv: any

    // Conflicting methods

    contains(item?: any | null): boolean

    // Overloads of contains

    contains(item?: any | null): boolean
    contains(item?: any | null): boolean
    add(item?: any | null): boolean

    // Overloads of add

    add(item?: any | null): boolean
    add(item?: any | null): boolean
    remove(item?: any | null): boolean

    // Overloads of remove

    remove(item?: any | null): boolean
    remove(item?: any | null): boolean
    clear(): void

    // Overloads of clear

    clear(): void
    clear(): void
    addAll(collection: Collection): boolean

    // Overloads of addAll

    addAll(collection: Collection): boolean
    addAll(collection: Collection): boolean
    containsAll(collection: Collection): boolean

    // Overloads of containsAll

    containsAll(collection: Collection): boolean
    containsAll(collection: Collection): boolean
    removeAll(collection: Collection): boolean

    // Overloads of removeAll

    removeAll(collection: Collection): boolean
    removeAll(collection: Collection): boolean
    retainAll(collection: Collection): boolean

    // Overloads of retainAll

    retainAll(collection: Collection): boolean
    retainAll(collection: Collection): boolean
    toArray(): any[]

    // Overloads of toArray

    toArray(): any[]
    toArray(): any[]
    iterator(): Iterator

    // Overloads of iterator

    iterator(): Iterator
    iterator(): Iterator

    // Class property signals of Gee-1.0.Gee.HashMultiSet

    connect(sigName: "notify::hash-func", callback: (...args: any[]) => void): number
    on(sigName: "notify::hash-func", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::hash-func", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::hash-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::hash-func", ...args: any[]): void
    connect(sigName: "notify::equal-func", callback: (...args: any[]) => void): number
    on(sigName: "notify::equal-func", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::equal-func", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::equal-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::equal-func", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::size", callback: (...args: any[]) => void): number
    on(sigName: "notify::size", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::size", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::is-empty", callback: (...args: any[]) => void): number
    on(sigName: "notify::is-empty", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::is-empty", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::is-empty", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::is-empty", ...args: any[]): void
    connect(sigName: "notify::read-only-view", callback: (...args: any[]) => void): number
    on(sigName: "notify::read-only-view", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::read-only-view", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::read-only-view", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::read-only-view", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class HashMultiSet extends AbstractMultiSet {

    // Own properties of Gee-1.0.Gee.HashMultiSet

    static name: string

    // Constructors of Gee-1.0.Gee.HashMultiSet

    constructor(config?: HashMultiSet.ConstructorProperties) 
    constructor(hashFunc?: GLib.HashFunc | null, equalFunc?: GLib.EqualFunc | null) 
    static new(hashFunc?: GLib.HashFunc | null, equalFunc?: GLib.EqualFunc | null): HashMultiSet
    _init(config?: HashMultiSet.ConstructorProperties): void
}

module HashSet {

    // Constructor properties interface

    interface ConstructorProperties extends AbstractSet.ConstructorProperties {

        // Own constructor properties of Gee-1.0.Gee.HashSet

        hashFunc?: GLib.HashFunc | null
        equalFunc?: GLib.EqualFunc | null
    }

}

interface HashSet {

    // Own properties of Gee-1.0.Gee.HashSet

    hashFunc: GLib.HashFunc
    equalFunc: GLib.EqualFunc
    __gtype__: number

    // Conflicting properties

    readOnlyView: any

    // Own fields of Gee-1.0.Gee.HashSet

    parentInstance: any
    priv: any

    // Conflicting methods

    contains(item?: any | null): boolean

    // Overloads of contains

    contains(item?: any | null): boolean
    contains(item?: any | null): boolean
    add(item?: any | null): boolean

    // Overloads of add

    add(item?: any | null): boolean
    add(item?: any | null): boolean
    remove(item?: any | null): boolean

    // Overloads of remove

    remove(item?: any | null): boolean
    remove(item?: any | null): boolean
    clear(): void

    // Overloads of clear

    clear(): void
    clear(): void
    addAll(collection: Collection): boolean

    // Overloads of addAll

    addAll(collection: Collection): boolean
    addAll(collection: Collection): boolean
    containsAll(collection: Collection): boolean

    // Overloads of containsAll

    containsAll(collection: Collection): boolean
    containsAll(collection: Collection): boolean
    removeAll(collection: Collection): boolean

    // Overloads of removeAll

    removeAll(collection: Collection): boolean
    removeAll(collection: Collection): boolean
    retainAll(collection: Collection): boolean

    // Overloads of retainAll

    retainAll(collection: Collection): boolean
    retainAll(collection: Collection): boolean
    toArray(): any[]

    // Overloads of toArray

    toArray(): any[]
    toArray(): any[]
    iterator(): Iterator

    // Overloads of iterator

    iterator(): Iterator
    iterator(): Iterator

    // Class property signals of Gee-1.0.Gee.HashSet

    connect(sigName: "notify::hash-func", callback: (...args: any[]) => void): number
    on(sigName: "notify::hash-func", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::hash-func", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::hash-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::hash-func", ...args: any[]): void
    connect(sigName: "notify::equal-func", callback: (...args: any[]) => void): number
    on(sigName: "notify::equal-func", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::equal-func", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::equal-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::equal-func", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::read-only-view", callback: (...args: any[]) => void): number
    on(sigName: "notify::read-only-view", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::read-only-view", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::read-only-view", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::read-only-view", ...args: any[]): void
    connect(sigName: "notify::size", callback: (...args: any[]) => void): number
    on(sigName: "notify::size", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::size", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::is-empty", callback: (...args: any[]) => void): number
    on(sigName: "notify::is-empty", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::is-empty", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::is-empty", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::is-empty", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class HashSet extends AbstractSet {

    // Own properties of Gee-1.0.Gee.HashSet

    static name: string

    // Constructors of Gee-1.0.Gee.HashSet

    constructor(config?: HashSet.ConstructorProperties) 
    constructor(hashFunc?: GLib.HashFunc | null, equalFunc?: GLib.EqualFunc | null) 
    static new(hashFunc?: GLib.HashFunc | null, equalFunc?: GLib.EqualFunc | null): HashSet
    _init(config?: HashSet.ConstructorProperties): void

    // Conflicting static methods

    static empty(): Set

    // Overloads of empty

    static empty(): Collection
    static empty(): Collection
}

module LinkedList {

    // Constructor properties interface

    interface ConstructorProperties extends Queue.ConstructorProperties, Deque.ConstructorProperties, AbstractList.ConstructorProperties {

        // Own constructor properties of Gee-1.0.Gee.LinkedList

        equalFunc?: GLib.EqualFunc | null
    }

}

interface LinkedList extends Queue, Deque {

    // Own properties of Gee-1.0.Gee.LinkedList

    equalFunc: GLib.EqualFunc
    __gtype__: number

    // Conflicting properties

    readOnlyView: any

    // Own fields of Gee-1.0.Gee.LinkedList

    parentInstance: any
    priv: any

    // Conflicting methods

    contains(item?: any | null): boolean
    contains(item?: any | null): boolean

    // Overloads of contains

    contains(item?: any | null): boolean
    add(item?: any | null): boolean
    add(item?: any | null): boolean

    // Overloads of add

    add(item?: any | null): boolean
    remove(item?: any | null): boolean
    remove(item?: any | null): boolean

    // Overloads of remove

    remove(item?: any | null): boolean
    clear(): void
    clear(): void

    // Overloads of clear

    clear(): void
    addAll(collection: Collection): boolean
    addAll(collection: Collection): boolean

    // Overloads of addAll

    addAll(collection: Collection): boolean
    containsAll(collection: Collection): boolean
    containsAll(collection: Collection): boolean

    // Overloads of containsAll

    containsAll(collection: Collection): boolean
    removeAll(collection: Collection): boolean
    removeAll(collection: Collection): boolean

    // Overloads of removeAll

    removeAll(collection: Collection): boolean
    retainAll(collection: Collection): boolean
    retainAll(collection: Collection): boolean

    // Overloads of retainAll

    retainAll(collection: Collection): boolean
    toArray(): any[]
    toArray(): any[]

    // Overloads of toArray

    toArray(): any[]
    iterator(): Iterator

    // Overloads of iterator

    iterator(): Iterator
    iterator(): Iterator
    listIterator(): ListIterator

    // Overloads of listIterator

    listIterator(): ListIterator
    listIterator(): ListIterator
    get(index: number): any | null

    // Overloads of get

    get(index: number): any | null
    get(index: number): any | null
    set(index: number, item?: any | null): void

    // Overloads of set

    set(index: number, item?: any | null): void
    set(index: number, item?: any | null): void
    indexOf(item?: any | null): number

    // Overloads of indexOf

    indexOf(item?: any | null): number
    indexOf(item?: any | null): number
    insert(index: number, item?: any | null): void

    // Overloads of insert

    insert(index: number, item?: any | null): void
    insert(index: number, item?: any | null): void
    removeAt(index: number): any | null

    // Overloads of removeAt

    removeAt(index: number): any | null
    removeAt(index: number): any | null
    slice(start: number, stop: number): List | null

    // Overloads of slice

    slice(start: number, stop: number): List | null
    slice(start: number, stop: number): List | null
    first(): any | null

    // Overloads of first

    first(): any | null
    first(): any | null
    last(): any | null

    // Overloads of last

    last(): any | null
    last(): any | null
    insertAll(index: number, collection: Collection): void

    // Overloads of insertAll

    insertAll(index: number, collection: Collection): void
    insertAll(index: number, collection: Collection): void

    // Class property signals of Gee-1.0.Gee.LinkedList

    connect(sigName: "notify::equal-func", callback: (...args: any[]) => void): number
    on(sigName: "notify::equal-func", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::equal-func", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::equal-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::equal-func", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::read-only-view", callback: (...args: any[]) => void): number
    on(sigName: "notify::read-only-view", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::read-only-view", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::read-only-view", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::read-only-view", ...args: any[]): void
    connect(sigName: "notify::size", callback: (...args: any[]) => void): number
    on(sigName: "notify::size", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::size", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::is-empty", callback: (...args: any[]) => void): number
    on(sigName: "notify::is-empty", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::is-empty", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::is-empty", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::is-empty", ...args: any[]): void
    connect(sigName: "notify::capacity", callback: (...args: any[]) => void): number
    on(sigName: "notify::capacity", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::capacity", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::capacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::capacity", ...args: any[]): void
    connect(sigName: "notify::remaining-capacity", callback: (...args: any[]) => void): number
    on(sigName: "notify::remaining-capacity", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::remaining-capacity", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::remaining-capacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::remaining-capacity", ...args: any[]): void
    connect(sigName: "notify::is-full", callback: (...args: any[]) => void): number
    on(sigName: "notify::is-full", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::is-full", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::is-full", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::is-full", ...args: any[]): void
    connect(sigName: "notify::element-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::element-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::element-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::element-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::element-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class LinkedList extends AbstractList {

    // Own properties of Gee-1.0.Gee.LinkedList

    static name: string

    // Constructors of Gee-1.0.Gee.LinkedList

    constructor(config?: LinkedList.ConstructorProperties) 
    constructor(equalFunc?: GLib.EqualFunc | null) 
    static new(equalFunc?: GLib.EqualFunc | null): LinkedList
    _init(config?: LinkedList.ConstructorProperties): void

    // Conflicting static methods

    static empty(): Collection
    static empty(): List

    // Overloads of empty

    static empty(): Collection
}

module PriorityQueue {

    // Constructor properties interface

    interface ConstructorProperties extends AbstractQueue.ConstructorProperties {

        // Own constructor properties of Gee-1.0.Gee.PriorityQueue

        compareFunc?: GLib.CompareFunc | null
    }

}

interface PriorityQueue {

    // Own properties of Gee-1.0.Gee.PriorityQueue

    compareFunc: GLib.CompareFunc
    __gtype__: number

    // Own fields of Gee-1.0.Gee.PriorityQueue

    parentInstance: any
    priv: any

    // Conflicting methods

    offer(element?: any | null): boolean

    // Overloads of offer

    offer(element?: any | null): boolean
    offer(element?: any | null): boolean
    peek(): any | null

    // Overloads of peek

    peek(): any | null
    peek(): any | null
    poll(): any | null

    // Overloads of poll

    poll(): any | null
    poll(): any | null
    drain(recipient: Collection, amount: number): number

    // Overloads of drain

    drain(recipient: Collection, amount: number): number
    drain(recipient: Collection, amount: number): number
    contains(item?: any | null): boolean

    // Overloads of contains

    contains(item?: any | null): boolean
    contains(item?: any | null): boolean
    add(item?: any | null): boolean

    // Overloads of add

    add(item?: any | null): boolean
    add(item?: any | null): boolean
    remove(item?: any | null): boolean

    // Overloads of remove

    remove(item?: any | null): boolean
    remove(item?: any | null): boolean
    clear(): void

    // Overloads of clear

    clear(): void
    clear(): void
    addAll(collection: Collection): boolean

    // Overloads of addAll

    addAll(collection: Collection): boolean
    addAll(collection: Collection): boolean
    containsAll(collection: Collection): boolean

    // Overloads of containsAll

    containsAll(collection: Collection): boolean
    containsAll(collection: Collection): boolean
    removeAll(collection: Collection): boolean

    // Overloads of removeAll

    removeAll(collection: Collection): boolean
    removeAll(collection: Collection): boolean
    retainAll(collection: Collection): boolean

    // Overloads of retainAll

    retainAll(collection: Collection): boolean
    retainAll(collection: Collection): boolean
    toArray(): any[]

    // Overloads of toArray

    toArray(): any[]
    toArray(): any[]
    iterator(): Iterator

    // Overloads of iterator

    iterator(): Iterator
    iterator(): Iterator

    // Class property signals of Gee-1.0.Gee.PriorityQueue

    connect(sigName: "notify::compare-func", callback: (...args: any[]) => void): number
    on(sigName: "notify::compare-func", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::compare-func", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::compare-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::compare-func", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::capacity", callback: (...args: any[]) => void): number
    on(sigName: "notify::capacity", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::capacity", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::capacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::capacity", ...args: any[]): void
    connect(sigName: "notify::remaining-capacity", callback: (...args: any[]) => void): number
    on(sigName: "notify::remaining-capacity", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::remaining-capacity", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::remaining-capacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::remaining-capacity", ...args: any[]): void
    connect(sigName: "notify::is-full", callback: (...args: any[]) => void): number
    on(sigName: "notify::is-full", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::is-full", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::is-full", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::is-full", ...args: any[]): void
    connect(sigName: "notify::size", callback: (...args: any[]) => void): number
    on(sigName: "notify::size", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::size", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::is-empty", callback: (...args: any[]) => void): number
    on(sigName: "notify::is-empty", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::is-empty", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::is-empty", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::is-empty", ...args: any[]): void
    connect(sigName: "notify::read-only-view", callback: (...args: any[]) => void): number
    on(sigName: "notify::read-only-view", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::read-only-view", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::read-only-view", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::read-only-view", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class PriorityQueue extends AbstractQueue {

    // Own properties of Gee-1.0.Gee.PriorityQueue

    static name: string

    // Constructors of Gee-1.0.Gee.PriorityQueue

    constructor(config?: PriorityQueue.ConstructorProperties) 
    constructor(compareFunc?: GLib.CompareFunc | null) 
    static new(compareFunc?: GLib.CompareFunc | null): PriorityQueue
    _init(config?: PriorityQueue.ConstructorProperties): void
}

module TreeMap {

    // Constructor properties interface

    interface ConstructorProperties extends AbstractMap.ConstructorProperties {

        // Own constructor properties of Gee-1.0.Gee.TreeMap

        keyCompareFunc?: GLib.CompareFunc | null
        valueEqualFunc?: GLib.EqualFunc | null
    }

}

interface TreeMap {

    // Own properties of Gee-1.0.Gee.TreeMap

    keyCompareFunc: GLib.CompareFunc
    valueEqualFunc: GLib.EqualFunc
    __gtype__: number

    // Own fields of Gee-1.0.Gee.TreeMap

    parentInstance: any
    priv: any

    // Conflicting methods

    hasKey(key?: any | null): boolean

    // Overloads of hasKey

    hasKey(key?: any | null): boolean
    hasKey(key?: any | null): boolean
    has(key?: any | null, value?: any | null): boolean

    // Overloads of has

    has(key?: any | null, value?: any | null): boolean
    has(key?: any | null, value?: any | null): boolean
    get(key?: any | null): any | null

    // Overloads of get

    get(key?: any | null): any | null
    get(key?: any | null): any | null
    set(key?: any | null, value?: any | null): void

    // Overloads of set

    set(key?: any | null, value?: any | null): void
    set(key?: any | null, value?: any | null): void
    unset(key?: any | null): [ /* returnType */ boolean, /* value */ any | null ]

    // Overloads of unset

    unset(key?: any | null): [ /* returnType */ boolean, /* value */ any | null ]
    unset(key?: any | null): [ /* returnType */ boolean, /* value */ any | null ]
    mapIterator(): MapIterator

    // Overloads of mapIterator

    mapIterator(): MapIterator
    mapIterator(): MapIterator
    clear(): void

    // Overloads of clear

    clear(): void
    clear(): void
    setAll(map: Map): void

    // Overloads of setAll

    setAll(map: Map): void
    setAll(map: Map): void
    unsetAll(map: Map): boolean

    // Overloads of unsetAll

    unsetAll(map: Map): boolean
    unsetAll(map: Map): boolean
    hasAll(map: Map): boolean

    // Overloads of hasAll

    hasAll(map: Map): boolean
    hasAll(map: Map): boolean

    // Class property signals of Gee-1.0.Gee.TreeMap

    connect(sigName: "notify::key-compare-func", callback: (...args: any[]) => void): number
    on(sigName: "notify::key-compare-func", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::key-compare-func", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::key-compare-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::key-compare-func", ...args: any[]): void
    connect(sigName: "notify::value-equal-func", callback: (...args: any[]) => void): number
    on(sigName: "notify::value-equal-func", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::value-equal-func", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::value-equal-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::value-equal-func", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::size", callback: (...args: any[]) => void): number
    on(sigName: "notify::size", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::size", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::is-empty", callback: (...args: any[]) => void): number
    on(sigName: "notify::is-empty", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::is-empty", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::is-empty", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::is-empty", ...args: any[]): void
    connect(sigName: "notify::keys", callback: (...args: any[]) => void): number
    on(sigName: "notify::keys", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::keys", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::keys", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::keys", ...args: any[]): void
    connect(sigName: "notify::values", callback: (...args: any[]) => void): number
    on(sigName: "notify::values", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::values", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::values", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::values", ...args: any[]): void
    connect(sigName: "notify::entries", callback: (...args: any[]) => void): number
    on(sigName: "notify::entries", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::entries", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::entries", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::entries", ...args: any[]): void
    connect(sigName: "notify::read-only-view", callback: (...args: any[]) => void): number
    on(sigName: "notify::read-only-view", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::read-only-view", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::read-only-view", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::read-only-view", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class TreeMap extends AbstractMap {

    // Own properties of Gee-1.0.Gee.TreeMap

    static name: string

    // Constructors of Gee-1.0.Gee.TreeMap

    constructor(config?: TreeMap.ConstructorProperties) 
    constructor(keyCompareFunc?: GLib.CompareFunc | null, valueEqualFunc?: GLib.EqualFunc | null) 
    static new(keyCompareFunc?: GLib.CompareFunc | null, valueEqualFunc?: GLib.EqualFunc | null): TreeMap
    _init(config?: TreeMap.ConstructorProperties): void
}

module TreeMultiMap {

    // Constructor properties interface

    interface ConstructorProperties extends AbstractMultiMap.ConstructorProperties {

        // Own constructor properties of Gee-1.0.Gee.TreeMultiMap

        valueCompareFunc?: GLib.CompareFunc | null
    }

}

interface TreeMultiMap {

    // Own properties of Gee-1.0.Gee.TreeMultiMap

    readonly keyCompareFunc: GLib.CompareFunc
    valueCompareFunc: GLib.CompareFunc
    __gtype__: number

    // Own fields of Gee-1.0.Gee.TreeMultiMap

    parentInstance: any
    priv: any

    // Class property signals of Gee-1.0.Gee.TreeMultiMap

    connect(sigName: "notify::key-compare-func", callback: (...args: any[]) => void): number
    on(sigName: "notify::key-compare-func", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::key-compare-func", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::key-compare-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::key-compare-func", ...args: any[]): void
    connect(sigName: "notify::value-compare-func", callback: (...args: any[]) => void): number
    on(sigName: "notify::value-compare-func", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::value-compare-func", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::value-compare-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::value-compare-func", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class TreeMultiMap extends AbstractMultiMap {

    // Own properties of Gee-1.0.Gee.TreeMultiMap

    static name: string

    // Constructors of Gee-1.0.Gee.TreeMultiMap

    constructor(config?: TreeMultiMap.ConstructorProperties) 
    constructor(keyCompareFunc?: GLib.CompareFunc | null, valueCompareFunc?: GLib.CompareFunc | null) 
    static new(keyCompareFunc?: GLib.CompareFunc | null, valueCompareFunc?: GLib.CompareFunc | null): TreeMultiMap
    _init(config?: TreeMultiMap.ConstructorProperties): void
}

module TreeMultiSet {

    // Constructor properties interface

    interface ConstructorProperties extends AbstractMultiSet.ConstructorProperties {
    }

}

interface TreeMultiSet {

    // Own properties of Gee-1.0.Gee.TreeMultiSet

    readonly compareFunc: GLib.CompareFunc
    __gtype__: number

    // Own fields of Gee-1.0.Gee.TreeMultiSet

    parentInstance: any
    priv: any

    // Conflicting methods

    contains(item?: any | null): boolean

    // Overloads of contains

    contains(item?: any | null): boolean
    contains(item?: any | null): boolean
    add(item?: any | null): boolean

    // Overloads of add

    add(item?: any | null): boolean
    add(item?: any | null): boolean
    remove(item?: any | null): boolean

    // Overloads of remove

    remove(item?: any | null): boolean
    remove(item?: any | null): boolean
    clear(): void

    // Overloads of clear

    clear(): void
    clear(): void
    addAll(collection: Collection): boolean

    // Overloads of addAll

    addAll(collection: Collection): boolean
    addAll(collection: Collection): boolean
    containsAll(collection: Collection): boolean

    // Overloads of containsAll

    containsAll(collection: Collection): boolean
    containsAll(collection: Collection): boolean
    removeAll(collection: Collection): boolean

    // Overloads of removeAll

    removeAll(collection: Collection): boolean
    removeAll(collection: Collection): boolean
    retainAll(collection: Collection): boolean

    // Overloads of retainAll

    retainAll(collection: Collection): boolean
    retainAll(collection: Collection): boolean
    toArray(): any[]

    // Overloads of toArray

    toArray(): any[]
    toArray(): any[]
    iterator(): Iterator

    // Overloads of iterator

    iterator(): Iterator
    iterator(): Iterator

    // Class property signals of Gee-1.0.Gee.TreeMultiSet

    connect(sigName: "notify::compare-func", callback: (...args: any[]) => void): number
    on(sigName: "notify::compare-func", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::compare-func", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::compare-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::compare-func", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::size", callback: (...args: any[]) => void): number
    on(sigName: "notify::size", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::size", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::is-empty", callback: (...args: any[]) => void): number
    on(sigName: "notify::is-empty", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::is-empty", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::is-empty", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::is-empty", ...args: any[]): void
    connect(sigName: "notify::read-only-view", callback: (...args: any[]) => void): number
    on(sigName: "notify::read-only-view", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::read-only-view", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::read-only-view", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::read-only-view", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class TreeMultiSet extends AbstractMultiSet {

    // Own properties of Gee-1.0.Gee.TreeMultiSet

    static name: string

    // Constructors of Gee-1.0.Gee.TreeMultiSet

    constructor(config?: TreeMultiSet.ConstructorProperties) 
    constructor(compareFunc?: GLib.CompareFunc | null) 
    static new(compareFunc?: GLib.CompareFunc | null): TreeMultiSet
    _init(config?: TreeMultiSet.ConstructorProperties): void
}

module TreeSet {

    // Constructor properties interface

    interface ConstructorProperties extends SortedSet.ConstructorProperties, AbstractSet.ConstructorProperties {

        // Own constructor properties of Gee-1.0.Gee.TreeSet

        compareFunc?: GLib.CompareFunc | null
    }

}

interface TreeSet extends SortedSet {

    // Own properties of Gee-1.0.Gee.TreeSet

    compareFunc: GLib.CompareFunc
    __gtype__: number

    // Conflicting properties

    readOnlyView: any

    // Own fields of Gee-1.0.Gee.TreeSet

    parentInstance: any
    priv: any

    // Conflicting methods

    contains(item?: any | null): boolean

    // Overloads of contains

    contains(item?: any | null): boolean
    contains(item?: any | null): boolean
    add(item?: any | null): boolean

    // Overloads of add

    add(item?: any | null): boolean
    add(item?: any | null): boolean
    remove(item?: any | null): boolean

    // Overloads of remove

    remove(item?: any | null): boolean
    remove(item?: any | null): boolean
    clear(): void

    // Overloads of clear

    clear(): void
    clear(): void
    addAll(collection: Collection): boolean

    // Overloads of addAll

    addAll(collection: Collection): boolean
    addAll(collection: Collection): boolean
    containsAll(collection: Collection): boolean

    // Overloads of containsAll

    containsAll(collection: Collection): boolean
    containsAll(collection: Collection): boolean
    removeAll(collection: Collection): boolean

    // Overloads of removeAll

    removeAll(collection: Collection): boolean
    removeAll(collection: Collection): boolean
    retainAll(collection: Collection): boolean

    // Overloads of retainAll

    retainAll(collection: Collection): boolean
    retainAll(collection: Collection): boolean
    toArray(): any[]

    // Overloads of toArray

    toArray(): any[]
    toArray(): any[]
    iterator(): Iterator

    // Overloads of iterator

    iterator(): Iterator
    iterator(): Iterator

    // Class property signals of Gee-1.0.Gee.TreeSet

    connect(sigName: "notify::compare-func", callback: (...args: any[]) => void): number
    on(sigName: "notify::compare-func", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::compare-func", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::compare-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::compare-func", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::read-only-view", callback: (...args: any[]) => void): number
    on(sigName: "notify::read-only-view", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::read-only-view", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::read-only-view", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::read-only-view", ...args: any[]): void
    connect(sigName: "notify::size", callback: (...args: any[]) => void): number
    on(sigName: "notify::size", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::size", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::is-empty", callback: (...args: any[]) => void): number
    on(sigName: "notify::is-empty", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::is-empty", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::is-empty", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::is-empty", ...args: any[]): void
    connect(sigName: "notify::element-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::element-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::element-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::element-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::element-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class TreeSet extends AbstractSet {

    // Own properties of Gee-1.0.Gee.TreeSet

    static name: string

    // Constructors of Gee-1.0.Gee.TreeSet

    constructor(config?: TreeSet.ConstructorProperties) 
    constructor(compareFunc?: GLib.CompareFunc | null) 
    static new(compareFunc?: GLib.CompareFunc | null): TreeSet
    _init(config?: TreeSet.ConstructorProperties): void

    // Conflicting static methods

    static empty(): Set

    // Overloads of empty

    static empty(): Collection
    static empty(): Collection
}

module MapEntry {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Gee-1.0.Gee.MapEntry

        value?: any | null
    }

}

interface MapEntry {

    // Own properties of Gee-1.0.Gee.MapEntry

    readonly key: any
    value: any
    __gtype__: number

    // Own fields of Gee-1.0.Gee.MapEntry

    parentInstance: GObject.Object
    priv: EntryPrivate

    // Class property signals of Gee-1.0.Gee.MapEntry

    connect(sigName: "notify::key", callback: (...args: any[]) => void): number
    on(sigName: "notify::key", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::key", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::key", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::key", ...args: any[]): void
    connect(sigName: "notify::value", callback: (...args: any[]) => void): number
    on(sigName: "notify::value", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::value", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::value", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class MapEntry extends GObject.Object {

    // Own properties of Gee-1.0.Gee.MapEntry

    static name: string

    // Constructors of Gee-1.0.Gee.MapEntry

    constructor(config?: MapEntry.ConstructorProperties) 
    _init(config?: MapEntry.ConstructorProperties): void
}

interface AbstractCollectionClass {

    // Own fields of Gee-1.0.Gee.AbstractCollectionClass

    parentClass: GObject.ObjectClass
    contains: (self: AbstractCollection, item?: any | null) => boolean
    add: (self: AbstractCollection, item?: any | null) => boolean
    remove: (self: AbstractCollection, item?: any | null) => boolean
    clear: (self: AbstractCollection) => void
    toArray: (self: AbstractCollection) => any[]
    addAll: (self: AbstractCollection, collection: Collection) => boolean
    containsAll: (self: AbstractCollection, collection: Collection) => boolean
    removeAll: (self: AbstractCollection, collection: Collection) => boolean
    retainAll: (self: AbstractCollection, collection: Collection) => boolean
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

    parentClass: AbstractCollectionClass
    listIterator: (self: AbstractList) => ListIterator
    get: (self: AbstractList, index: number) => any | null
    set: (self: AbstractList, index: number, item?: any | null) => void
    indexOf: (self: AbstractList, item?: any | null) => number
    insert: (self: AbstractList, index: number, item?: any | null) => void
    removeAt: (self: AbstractList, index: number) => any | null
    slice: (self: AbstractList, start: number, stop: number) => List | null
    first: (self: AbstractList) => any | null
    last: (self: AbstractList) => any | null
    insertAll: (self: AbstractList, index: number, collection: Collection) => void
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

    parentClass: GObject.ObjectClass
    hasKey: (self: AbstractMap, key?: any | null) => boolean
    has: (self: AbstractMap, key?: any | null, value?: any | null) => boolean
    get: (self: AbstractMap, key?: any | null) => any | null
    set: (self: AbstractMap, key?: any | null, value?: any | null) => void
    unset: (self: AbstractMap, key?: any | null) => [ /* returnType */ boolean, /* value */ any | null ]
    mapIterator: (self: AbstractMap) => MapIterator
    clear: (self: AbstractMap) => void
    setAll: (self: AbstractMap, map: Map) => void
    unsetAll: (self: AbstractMap, map: Map) => boolean
    hasAll: (self: AbstractMap, map: Map) => boolean
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

    parentClass: GObject.ObjectClass
    createValueStorage: (self: AbstractMultiMap) => Collection
    createMultiKeySet: (self: AbstractMultiMap) => MultiSet
    getValueEqualFunc: (self: AbstractMultiMap) => GLib.EqualFunc
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

    parentClass: AbstractCollectionClass
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

    parentClass: AbstractCollectionClass
    offer: (self: AbstractQueue, element?: any | null) => boolean
    peek: (self: AbstractQueue) => any | null
    poll: (self: AbstractQueue) => any | null
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

    parentClass: AbstractCollectionClass
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

    parentClass: AbstractListClass
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

    parentClass: AbstractMapClass
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

    parentClass: AbstractMultiMapClass
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

    parentClass: AbstractMultiSetClass
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

    parentClass: AbstractSetClass
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

    parentClass: AbstractListClass
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

    parentClass: AbstractQueueClass
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

    parentClass: AbstractMapClass
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

    parentClass: AbstractMultiMapClass
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

    parentClass: AbstractMultiSetClass
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

    parentClass: AbstractSetClass
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

    parentIface: GObject.TypeInterface
    previous: (self: BidirIterator) => boolean
    hasPrevious: (self: BidirIterator) => boolean
    last: (self: BidirIterator) => boolean
}

abstract class BidirIteratorIface {

    // Own properties of Gee-1.0.Gee.BidirIteratorIface

    static name: string
}

interface CollectionIface {

    // Own fields of Gee-1.0.Gee.CollectionIface

    parentIface: GObject.TypeInterface
    contains: (self: Collection, item?: any | null) => boolean
    add: (self: Collection, item?: any | null) => boolean
    remove: (self: Collection, item?: any | null) => boolean
    clear: (self: Collection) => void
    addAll: (self: Collection, collection: Collection) => boolean
    containsAll: (self: Collection, collection: Collection) => boolean
    removeAll: (self: Collection, collection: Collection) => boolean
    retainAll: (self: Collection, collection: Collection) => boolean
    toArray: (self: Collection) => any[]
}

abstract class CollectionIface {

    // Own properties of Gee-1.0.Gee.CollectionIface

    static name: string
}

interface ComparableIface {

    // Own fields of Gee-1.0.Gee.ComparableIface

    parentIface: GObject.TypeInterface
    compareTo: (self: Comparable, object?: any | null) => number
}

abstract class ComparableIface {

    // Own properties of Gee-1.0.Gee.ComparableIface

    static name: string
}

interface DequeIface {

    // Own fields of Gee-1.0.Gee.DequeIface

    parentIface: GObject.TypeInterface
    offerHead: (self: Deque, element?: any | null) => boolean
    peekHead: (self: Deque) => any | null
    pollHead: (self: Deque) => any | null
    drainHead: (self: Deque, recipient: Collection, amount: number) => number
    offerTail: (self: Deque, element?: any | null) => boolean
    peekTail: (self: Deque) => any | null
    pollTail: (self: Deque) => any | null
    drainTail: (self: Deque, recipient: Collection, amount: number) => number
}

abstract class DequeIface {

    // Own properties of Gee-1.0.Gee.DequeIface

    static name: string
}

interface IterableIface {

    // Own fields of Gee-1.0.Gee.IterableIface

    parentIface: GObject.TypeInterface
    iterator: (self: Iterable) => Iterator
}

abstract class IterableIface {

    // Own properties of Gee-1.0.Gee.IterableIface

    static name: string
}

interface IteratorIface {

    // Own fields of Gee-1.0.Gee.IteratorIface

    parentIface: GObject.TypeInterface
    next: (self: Iterator) => boolean
    hasNext: (self: Iterator) => boolean
    first: (self: Iterator) => boolean
    get: (self: Iterator) => any | null
    remove: (self: Iterator) => void
}

abstract class IteratorIface {

    // Own properties of Gee-1.0.Gee.IteratorIface

    static name: string
}

interface ListIface {

    // Own fields of Gee-1.0.Gee.ListIface

    parentIface: GObject.TypeInterface
    listIterator: (self: List) => ListIterator
    get: (self: List, index: number) => any | null
    set: (self: List, index: number, item?: any | null) => void
    indexOf: (self: List, item?: any | null) => number
    insert: (self: List, index: number, item?: any | null) => void
    removeAt: (self: List, index: number) => any | null
    slice: (self: List, start: number, stop: number) => List | null
    first: (self: List) => any | null
    last: (self: List) => any | null
    insertAll: (self: List, index: number, collection: Collection) => void
    sort: (self: List, compareFunc?: GLib.CompareFunc | null) => void
}

abstract class ListIface {

    // Own properties of Gee-1.0.Gee.ListIface

    static name: string
}

interface ListIteratorIface {

    // Own fields of Gee-1.0.Gee.ListIteratorIface

    parentIface: GObject.TypeInterface
    set: (self: ListIterator, item?: any | null) => void
    insert: (self: ListIterator, item?: any | null) => void
    add: (self: ListIterator, item?: any | null) => void
    index: (self: ListIterator) => number
}

abstract class ListIteratorIface {

    // Own properties of Gee-1.0.Gee.ListIteratorIface

    static name: string
}

interface MapIface {

    // Own fields of Gee-1.0.Gee.MapIface

    parentIface: GObject.TypeInterface
    hasKey: (self: Map, key?: any | null) => boolean
    contains: (self: Map, key?: any | null) => boolean
    has: (self: Map, key?: any | null, value?: any | null) => boolean
    get: (self: Map, key?: any | null) => any | null
    set: (self: Map, key?: any | null, value?: any | null) => void
    unset: (self: Map, key?: any | null) => [ /* returnType */ boolean, /* value */ any | null ]
    remove: (self: Map, key?: any | null) => [ /* returnType */ boolean, /* value */ any | null ]
    clear: (self: Map) => void
    mapIterator: (self: Map) => MapIterator
    setAll: (self: Map, map: Map) => void
    unsetAll: (self: Map, map: Map) => boolean
    removeAll: (self: Map, map: Map) => boolean
    hasAll: (self: Map, map: Map) => boolean
    containsAll: (self: Map, map: Map) => boolean
}

abstract class MapIface {

    // Own properties of Gee-1.0.Gee.MapIface

    static name: string
}

interface MapEntryClass {

    // Own fields of Gee-1.0.Gee.MapEntryClass

    parentClass: GObject.ObjectClass
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

    parentIface: GObject.TypeInterface
    next: (self: MapIterator) => boolean
    hasNext: (self: MapIterator) => boolean
    first: (self: MapIterator) => boolean
    getKey: (self: MapIterator) => any | null
    getValue: (self: MapIterator) => any | null
    setValue: (self: MapIterator, value?: any | null) => void
    unset: (self: MapIterator) => void
}

abstract class MapIteratorIface {

    // Own properties of Gee-1.0.Gee.MapIteratorIface

    static name: string
}

interface MultiMapIface {

    // Own fields of Gee-1.0.Gee.MultiMapIface

    parentIface: GObject.TypeInterface
    getKeys: (self: MultiMap) => Set
    getAllKeys: (self: MultiMap) => MultiSet
    getValues: (self: MultiMap) => Collection
    contains: (self: MultiMap, key?: any | null) => boolean
    get: (self: MultiMap, key?: any | null) => Collection
    set: (self: MultiMap, key?: any | null, value?: any | null) => void
    remove: (self: MultiMap, key?: any | null, value?: any | null) => boolean
    removeAll: (self: MultiMap, key?: any | null) => boolean
    clear: (self: MultiMap) => void
}

abstract class MultiMapIface {

    // Own properties of Gee-1.0.Gee.MultiMapIface

    static name: string
}

interface MultiSetIface {

    // Own fields of Gee-1.0.Gee.MultiSetIface

    parentIface: GObject.TypeInterface
    count: (self: MultiSet, item?: any | null) => number
}

abstract class MultiSetIface {

    // Own properties of Gee-1.0.Gee.MultiSetIface

    static name: string
}

interface QueueIface {

    // Own fields of Gee-1.0.Gee.QueueIface

    parentIface: GObject.TypeInterface
    offer: (self: Queue, element?: any | null) => boolean
    peek: (self: Queue) => any | null
    poll: (self: Queue) => any | null
    drain: (self: Queue, recipient: Collection, amount: number) => number
}

abstract class QueueIface {

    // Own properties of Gee-1.0.Gee.QueueIface

    static name: string
}

interface SetIface {

    // Own fields of Gee-1.0.Gee.SetIface

    parentIface: GObject.TypeInterface
}

abstract class SetIface {

    // Own properties of Gee-1.0.Gee.SetIface

    static name: string
}

interface SortedSetIface {

    // Own fields of Gee-1.0.Gee.SortedSetIface

    parentIface: GObject.TypeInterface
    first: (self: SortedSet) => any | null
    last: (self: SortedSet) => any | null
    bidirIterator: (self: SortedSet) => BidirIterator
    iteratorAt: (self: SortedSet, element?: any | null) => BidirIterator | null
    lower: (self: SortedSet, element?: any | null) => any | null
    higher: (self: SortedSet, element?: any | null) => any | null
    floor: (self: SortedSet, element?: any | null) => any | null
    ceil: (self: SortedSet, element?: any | null) => any | null
    headSet: (self: SortedSet, before?: any | null) => SortedSet
    tailSet: (self: SortedSet, after?: any | null) => SortedSet
    subSet: (self: SortedSet, from?: any | null, to?: any | null) => SortedSet
}

abstract class SortedSetIface {

    // Own properties of Gee-1.0.Gee.SortedSetIface

    static name: string
}

}

export default Gee;