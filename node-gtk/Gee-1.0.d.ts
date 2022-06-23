// @ts-nocheck

/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * Gee-1.0
 */

import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';

export namespace Gee {

function functionsGetEqualFuncFor(t: GObject.GType): GLib.EqualFunc
function functionsGetHashFuncFor(t: GObject.GType): GLib.HashFunc
function functionsGetCompareFuncFor(t: GObject.GType): GLib.CompareFunc
function directCompare(val1?: object | null, val2?: object | null): number
interface BidirIterator_ConstructProps extends Iterator_ConstructProps, GObject.Object_ConstructProps {
}

interface BidirIterator extends Iterator {

    // Owm methods of Gee-1.0.Gee.BidirIterator

    previous(): boolean
    hasPrevious(): boolean
    last(): boolean

    // Class property signals of Gee-1.0.Gee.BidirIterator

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
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
    readonly isEmpty: boolean
    readonly readOnlyView: Collection

    // Owm methods of Gee-1.0.Gee.Collection

    contains(item?: object | null): boolean
    add(item?: object | null): boolean
    remove(item?: object | null): boolean
    clear(): void
    addAll(collection: Collection): boolean
    containsAll(collection: Collection): boolean
    removeAll(collection: Collection): boolean
    retainAll(collection: Collection): boolean
    toArray(): object[]

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

    compareTo(object?: object | null): number

    // Class property signals of Gee-1.0.Gee.Comparable

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
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

    offerHead(element?: object | null): boolean
    peekHead(): object | null
    pollHead(): object | null
    drainHead(recipient: Collection, amount: number): number
    offerTail(element?: object | null): boolean
    peekTail(): object | null
    pollTail(): object | null
    drainTail(recipient: Collection, amount: number): number

    // Class property signals of Gee-1.0.Gee.Deque

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
    static $gtype: GObject.GType<Deque>

    // Constructors of Gee-1.0.Gee.Deque

    constructor(config?: Deque_ConstructProps) 
    _init(config?: Deque_ConstructProps): void
}

interface Iterable_ConstructProps extends GObject.Object_ConstructProps {
}

interface Iterable extends GObject.Object {

    // Own properties of Gee-1.0.Gee.Iterable

    readonly elementType: GObject.GType

    // Owm methods of Gee-1.0.Gee.Iterable

    iterator(): Iterator

    // Class property signals of Gee-1.0.Gee.Iterable

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
    hasNext(): boolean
    first(): boolean
    get(): object | null
    remove(): void

    // Class property signals of Gee-1.0.Gee.Iterator

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
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

    readonly readOnlyView: List

    // Owm methods of Gee-1.0.Gee.List

    listIterator(): ListIterator
    get(index: number): object | null
    set(index: number, item?: object | null): void
    indexOf(item?: object | null): number
    insert(index: number, item?: object | null): void
    removeAt(index: number): object | null
    slice(start: number, stop: number): List | null
    first(): object | null
    last(): object | null
    insertAll(index: number, collection: Collection): void
    sort(compareFunc?: GLib.CompareFunc | null): void

    // Class property signals of Gee-1.0.Gee.List

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

    // Class property signals of Gee-1.0.Gee.ListIterator

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
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
    readonly isEmpty: boolean
    readonly keys: Set
    readonly values: Collection
    readonly entries: Set
    readonly readOnlyView: Map
    readonly keyType: GObject.GType
    readonly valueType: GObject.GType

    // Owm methods of Gee-1.0.Gee.Map

    hasKey(key?: object | null): boolean
    contains(key?: object | null): boolean
    has(key?: object | null, value?: object | null): boolean
    get(key?: object | null): object | null
    set(key?: object | null, value?: object | null): void
    unset(key?: object | null): [ /* returnType */ boolean, /* value */ object | null ]
    remove(key?: object | null): [ /* returnType */ boolean, /* value */ object | null ]
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
    hasNext(): boolean
    first(): boolean
    getKey(): object | null
    getValue(): object | null
    setValue(value?: object | null): void
    unset(): void

    // Class property signals of Gee-1.0.Gee.MapIterator

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
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

    getKeys(): Set
    getAllKeys(): MultiSet
    getValues(): Collection
    contains(key?: object | null): boolean
    get(key?: object | null): Collection
    set(key?: object | null, value?: object | null): void
    remove(key?: object | null, value?: object | null): boolean
    removeAll(key?: object | null): boolean
    clear(): void

    // Class property signals of Gee-1.0.Gee.MultiMap

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

    // Class property signals of Gee-1.0.Gee.MultiSet

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
    readonly remainingCapacity: number
    readonly isFull: boolean

    // Owm methods of Gee-1.0.Gee.Queue

    offer(element?: object | null): boolean
    peek(): object | null
    poll(): object | null
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
    static $gtype: GObject.GType<Queue>

    // Constructors of Gee-1.0.Gee.Queue

    constructor(config?: Queue_ConstructProps) 
    _init(config?: Queue_ConstructProps): void
}

interface Set_ConstructProps extends Collection_ConstructProps, GObject.Object_ConstructProps {
}

interface Set extends Collection {

    // Own properties of Gee-1.0.Gee.Set

    readonly readOnlyView: Set

    // Class property signals of Gee-1.0.Gee.Set

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

    readOnlyView: any

    // Owm methods of Gee-1.0.Gee.SortedSet

    first(): object | null
    last(): object | null
    bidirIterator(): BidirIterator
    iteratorAt(element?: object | null): BidirIterator | null
    lower(element?: object | null): object | null
    higher(element?: object | null): object | null
    floor(element?: object | null): object | null
    ceil(element?: object | null): object | null
    headSet(before?: object | null): SortedSet
    tailSet(after?: object | null): SortedSet
    subSet(from?: object | null, to?: object | null): SortedSet

    // Class property signals of Gee-1.0.Gee.SortedSet

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
    readonly isEmpty: boolean
    readonly readOnlyView: Collection

    // Own fields of Gee-1.0.Gee.AbstractCollection

    parentInstance: GObject.Object
    priv: AbstractCollectionPrivate

    // Owm methods of Gee-1.0.Gee.AbstractCollection

    contains(item?: object | null): boolean
    add(item?: object | null): boolean
    remove(item?: object | null): boolean
    clear(): void
    toArray(): object[]
    addAll(collection: Collection): boolean
    containsAll(collection: Collection): boolean
    removeAll(collection: Collection): boolean
    retainAll(collection: Collection): boolean
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
    static $gtype: GObject.GType<AbstractCollection>

    // Constructors of Gee-1.0.Gee.AbstractCollection

    constructor(config?: AbstractCollection_ConstructProps) 
    _init(config?: AbstractCollection_ConstructProps): void
}

interface AbstractList_ConstructProps extends List_ConstructProps, AbstractCollection_ConstructProps {
}

interface AbstractList extends List {

    // Own properties of Gee-1.0.Gee.AbstractList

    readonly readOnlyView: List

    // Own fields of Gee-1.0.Gee.AbstractList

    parentInstance: AbstractCollection
    priv: AbstractListPrivate

    // Owm methods of Gee-1.0.Gee.AbstractList

    listIterator(): ListIterator
    get(index: number): object | null
    set(index: number, item?: object | null): void
    indexOf(item?: object | null): number
    insert(index: number, item?: object | null): void
    removeAt(index: number): object | null
    slice(start: number, stop: number): List | null
    first(): object | null
    last(): object | null
    insertAll(index: number, collection: Collection): void

    // Class property signals of Gee-1.0.Gee.AbstractList

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
    readonly isEmpty: boolean
    readonly keys: Set
    readonly values: Collection
    readonly entries: Set
    readonly readOnlyView: Map

    // Own fields of Gee-1.0.Gee.AbstractMap

    parentInstance: GObject.Object
    priv: AbstractMapPrivate

    // Owm methods of Gee-1.0.Gee.AbstractMap

    hasKey(key?: object | null): boolean
    has(key?: object | null, value?: object | null): boolean
    get(key?: object | null): object | null
    set(key?: object | null, value?: object | null): void
    unset(key?: object | null): [ /* returnType */ boolean, /* value */ object | null ]
    mapIterator(): MapIterator
    clear(): void
    setAll(map: Map): void
    unsetAll(map: Map): boolean
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
    static $gtype: GObject.GType<AbstractMap>

    // Constructors of Gee-1.0.Gee.AbstractMap

    constructor(config?: AbstractMap_ConstructProps) 
    _init(config?: AbstractMap_ConstructProps): void
}

interface AbstractMultiMap_ConstructProps extends MultiMap_ConstructProps, GObject.Object_ConstructProps {
}

interface AbstractMultiMap extends MultiMap {

    // Own fields of Gee-1.0.Gee.AbstractMultiMap

    parentInstance: GObject.Object
    priv: AbstractMultiMapPrivate
    storageMap: Map

    // Owm methods of Gee-1.0.Gee.AbstractMultiMap

    createValueStorage(): Collection
    createMultiKeySet(): MultiSet
    getValueEqualFunc(): GLib.EqualFunc

    // Class property signals of Gee-1.0.Gee.AbstractMultiMap

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
    static $gtype: GObject.GType<AbstractMultiMap>

    // Constructors of Gee-1.0.Gee.AbstractMultiMap

    constructor(config?: AbstractMultiMap_ConstructProps) 
    _init(config?: AbstractMultiMap_ConstructProps): void
}

interface AbstractMultiSet_ConstructProps extends MultiSet_ConstructProps, AbstractCollection_ConstructProps {
}

interface AbstractMultiSet extends MultiSet {

    // Own fields of Gee-1.0.Gee.AbstractMultiSet

    parentInstance: AbstractCollection
    priv: AbstractMultiSetPrivate
    storageMap: Map

    // Class property signals of Gee-1.0.Gee.AbstractMultiSet

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
    readonly remainingCapacity: number
    readonly isFull: boolean

    // Own fields of Gee-1.0.Gee.AbstractQueue

    parentInstance: AbstractCollection
    priv: AbstractQueuePrivate

    // Owm methods of Gee-1.0.Gee.AbstractQueue

    offer(element?: object | null): boolean
    peek(): object | null
    poll(): object | null
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
    static $gtype: GObject.GType<AbstractQueue>

    // Constructors of Gee-1.0.Gee.AbstractQueue

    constructor(config?: AbstractQueue_ConstructProps) 
    _init(config?: AbstractQueue_ConstructProps): void
}

interface AbstractSet_ConstructProps extends Set_ConstructProps, AbstractCollection_ConstructProps {
}

interface AbstractSet extends Set {

    // Own properties of Gee-1.0.Gee.AbstractSet

    readonly readOnlyView: Set

    // Own fields of Gee-1.0.Gee.AbstractSet

    parentInstance: AbstractCollection
    priv: AbstractSetPrivate

    // Class property signals of Gee-1.0.Gee.AbstractSet

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

    equalFunc?: GLib.EqualFunc | null
}

interface ArrayList {

    // Own properties of Gee-1.0.Gee.ArrayList

    equalFunc: GLib.EqualFunc

    // Conflicting properties

    readOnlyView: any

    // Own fields of Gee-1.0.Gee.ArrayList

    parentInstance: AbstractList
    priv: ArrayListPrivate

    // Owm methods of Gee-1.0.Gee.ArrayList

    sortWithData(compare: GLib.CompareDataFunc): void

    // Class property signals of Gee-1.0.Gee.ArrayList

    connect(sigName: "notify::equal-func", callback: (...args: any[]) => void): number
    on(sigName: "notify::equal-func", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::equal-func", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::equal-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::equal-func", ...args: any[]): void
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
    static $gtype: GObject.GType<ArrayList>

    // Constructors of Gee-1.0.Gee.ArrayList

    constructor(config?: ArrayList_ConstructProps) 
    constructor(equalFunc?: GLib.EqualFunc | null) 
    static new(equalFunc?: GLib.EqualFunc | null): ArrayList
    _init(config?: ArrayList_ConstructProps): void

    // Conflicting static methods

    static empty(...args: any[]): any
}

interface HashMap_ConstructProps extends AbstractMap_ConstructProps {

    // Own constructor properties of Gee-1.0.Gee.HashMap

    keyHashFunc?: GLib.HashFunc | null
    keyEqualFunc?: GLib.EqualFunc | null
    valueEqualFunc?: GLib.EqualFunc | null
}

interface HashMap {

    // Own properties of Gee-1.0.Gee.HashMap

    keyHashFunc: GLib.HashFunc
    keyEqualFunc: GLib.EqualFunc
    valueEqualFunc: GLib.EqualFunc

    // Own fields of Gee-1.0.Gee.HashMap

    parentInstance: AbstractMap
    priv: HashMapPrivate

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
    static $gtype: GObject.GType<HashMap>

    // Constructors of Gee-1.0.Gee.HashMap

    constructor(config?: HashMap_ConstructProps) 
    constructor(keyHashFunc?: GLib.HashFunc | null, keyEqualFunc?: GLib.EqualFunc | null, valueEqualFunc?: GLib.EqualFunc | null) 
    static new(keyHashFunc?: GLib.HashFunc | null, keyEqualFunc?: GLib.EqualFunc | null, valueEqualFunc?: GLib.EqualFunc | null): HashMap
    _init(config?: HashMap_ConstructProps): void
}

interface HashMultiMap_ConstructProps extends AbstractMultiMap_ConstructProps {

    // Own constructor properties of Gee-1.0.Gee.HashMultiMap

    valueHashFunc?: GLib.HashFunc | null
    valueEqualFunc?: GLib.EqualFunc | null
}

interface HashMultiMap {

    // Own properties of Gee-1.0.Gee.HashMultiMap

    readonly keyHashFunc: GLib.HashFunc
    readonly keyEqualFunc: GLib.EqualFunc
    valueHashFunc: GLib.HashFunc
    valueEqualFunc: GLib.EqualFunc

    // Own fields of Gee-1.0.Gee.HashMultiMap

    parentInstance: AbstractMultiMap
    priv: HashMultiMapPrivate

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
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class HashMultiMap extends AbstractMultiMap {

    // Own properties of Gee-1.0.Gee.HashMultiMap

    static name: string
    static $gtype: GObject.GType<HashMultiMap>

    // Constructors of Gee-1.0.Gee.HashMultiMap

    constructor(config?: HashMultiMap_ConstructProps) 
    constructor(keyHashFunc?: GLib.HashFunc | null, keyEqualFunc?: GLib.EqualFunc | null, valueHashFunc?: GLib.HashFunc | null, valueEqualFunc?: GLib.EqualFunc | null) 
    static new(keyHashFunc?: GLib.HashFunc | null, keyEqualFunc?: GLib.EqualFunc | null, valueHashFunc?: GLib.HashFunc | null, valueEqualFunc?: GLib.EqualFunc | null): HashMultiMap
    _init(config?: HashMultiMap_ConstructProps): void
}

interface HashMultiSet_ConstructProps extends AbstractMultiSet_ConstructProps {
}

interface HashMultiSet {

    // Own properties of Gee-1.0.Gee.HashMultiSet

    readonly hashFunc: GLib.HashFunc
    readonly equalFunc: GLib.EqualFunc

    // Own fields of Gee-1.0.Gee.HashMultiSet

    parentInstance: AbstractMultiSet
    priv: HashMultiSetPrivate

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
    static $gtype: GObject.GType<HashMultiSet>

    // Constructors of Gee-1.0.Gee.HashMultiSet

    constructor(config?: HashMultiSet_ConstructProps) 
    constructor(hashFunc?: GLib.HashFunc | null, equalFunc?: GLib.EqualFunc | null) 
    static new(hashFunc?: GLib.HashFunc | null, equalFunc?: GLib.EqualFunc | null): HashMultiSet
    _init(config?: HashMultiSet_ConstructProps): void
}

interface HashSet_ConstructProps extends AbstractSet_ConstructProps {

    // Own constructor properties of Gee-1.0.Gee.HashSet

    hashFunc?: GLib.HashFunc | null
    equalFunc?: GLib.EqualFunc | null
}

interface HashSet {

    // Own properties of Gee-1.0.Gee.HashSet

    hashFunc: GLib.HashFunc
    equalFunc: GLib.EqualFunc

    // Conflicting properties

    readOnlyView: any

    // Own fields of Gee-1.0.Gee.HashSet

    parentInstance: AbstractSet
    priv: HashSetPrivate

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
    static $gtype: GObject.GType<HashSet>

    // Constructors of Gee-1.0.Gee.HashSet

    constructor(config?: HashSet_ConstructProps) 
    constructor(hashFunc?: GLib.HashFunc | null, equalFunc?: GLib.EqualFunc | null) 
    static new(hashFunc?: GLib.HashFunc | null, equalFunc?: GLib.EqualFunc | null): HashSet
    _init(config?: HashSet_ConstructProps): void

    // Conflicting static methods

    static empty(...args: any[]): any
}

interface LinkedList_ConstructProps extends Queue_ConstructProps, Deque_ConstructProps, AbstractList_ConstructProps {

    // Own constructor properties of Gee-1.0.Gee.LinkedList

    equalFunc?: GLib.EqualFunc | null
}

interface LinkedList extends Queue, Deque {

    // Own properties of Gee-1.0.Gee.LinkedList

    equalFunc: GLib.EqualFunc

    // Conflicting properties

    readOnlyView: any

    // Own fields of Gee-1.0.Gee.LinkedList

    parentInstance: AbstractList
    priv: LinkedListPrivate

    // Class property signals of Gee-1.0.Gee.LinkedList

    connect(sigName: "notify::equal-func", callback: (...args: any[]) => void): number
    on(sigName: "notify::equal-func", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::equal-func", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::equal-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::equal-func", ...args: any[]): void
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
    static $gtype: GObject.GType<LinkedList>

    // Constructors of Gee-1.0.Gee.LinkedList

    constructor(config?: LinkedList_ConstructProps) 
    constructor(equalFunc?: GLib.EqualFunc | null) 
    static new(equalFunc?: GLib.EqualFunc | null): LinkedList
    _init(config?: LinkedList_ConstructProps): void

    // Conflicting static methods

    static empty(...args: any[]): any
}

interface PriorityQueue_ConstructProps extends AbstractQueue_ConstructProps {

    // Own constructor properties of Gee-1.0.Gee.PriorityQueue

    compareFunc?: GLib.CompareFunc | null
}

interface PriorityQueue {

    // Own properties of Gee-1.0.Gee.PriorityQueue

    compareFunc: GLib.CompareFunc

    // Own fields of Gee-1.0.Gee.PriorityQueue

    parentInstance: AbstractQueue
    priv: PriorityQueuePrivate

    // Class property signals of Gee-1.0.Gee.PriorityQueue

    connect(sigName: "notify::compare-func", callback: (...args: any[]) => void): number
    on(sigName: "notify::compare-func", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::compare-func", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::compare-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::compare-func", ...args: any[]): void
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
    static $gtype: GObject.GType<PriorityQueue>

    // Constructors of Gee-1.0.Gee.PriorityQueue

    constructor(config?: PriorityQueue_ConstructProps) 
    constructor(compareFunc?: GLib.CompareFunc | null) 
    static new(compareFunc?: GLib.CompareFunc | null): PriorityQueue
    _init(config?: PriorityQueue_ConstructProps): void
}

interface TreeMap_ConstructProps extends AbstractMap_ConstructProps {

    // Own constructor properties of Gee-1.0.Gee.TreeMap

    keyCompareFunc?: GLib.CompareFunc | null
    valueEqualFunc?: GLib.EqualFunc | null
}

interface TreeMap {

    // Own properties of Gee-1.0.Gee.TreeMap

    keyCompareFunc: GLib.CompareFunc
    valueEqualFunc: GLib.EqualFunc

    // Own fields of Gee-1.0.Gee.TreeMap

    parentInstance: AbstractMap
    priv: TreeMapPrivate

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
    static $gtype: GObject.GType<TreeMap>

    // Constructors of Gee-1.0.Gee.TreeMap

    constructor(config?: TreeMap_ConstructProps) 
    constructor(keyCompareFunc?: GLib.CompareFunc | null, valueEqualFunc?: GLib.EqualFunc | null) 
    static new(keyCompareFunc?: GLib.CompareFunc | null, valueEqualFunc?: GLib.EqualFunc | null): TreeMap
    _init(config?: TreeMap_ConstructProps): void
}

interface TreeMultiMap_ConstructProps extends AbstractMultiMap_ConstructProps {

    // Own constructor properties of Gee-1.0.Gee.TreeMultiMap

    valueCompareFunc?: GLib.CompareFunc | null
}

interface TreeMultiMap {

    // Own properties of Gee-1.0.Gee.TreeMultiMap

    readonly keyCompareFunc: GLib.CompareFunc
    valueCompareFunc: GLib.CompareFunc

    // Own fields of Gee-1.0.Gee.TreeMultiMap

    parentInstance: AbstractMultiMap
    priv: TreeMultiMapPrivate

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
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class TreeMultiMap extends AbstractMultiMap {

    // Own properties of Gee-1.0.Gee.TreeMultiMap

    static name: string
    static $gtype: GObject.GType<TreeMultiMap>

    // Constructors of Gee-1.0.Gee.TreeMultiMap

    constructor(config?: TreeMultiMap_ConstructProps) 
    constructor(keyCompareFunc?: GLib.CompareFunc | null, valueCompareFunc?: GLib.CompareFunc | null) 
    static new(keyCompareFunc?: GLib.CompareFunc | null, valueCompareFunc?: GLib.CompareFunc | null): TreeMultiMap
    _init(config?: TreeMultiMap_ConstructProps): void
}

interface TreeMultiSet_ConstructProps extends AbstractMultiSet_ConstructProps {
}

interface TreeMultiSet {

    // Own properties of Gee-1.0.Gee.TreeMultiSet

    readonly compareFunc: GLib.CompareFunc

    // Own fields of Gee-1.0.Gee.TreeMultiSet

    parentInstance: AbstractMultiSet
    priv: TreeMultiSetPrivate

    // Class property signals of Gee-1.0.Gee.TreeMultiSet

    connect(sigName: "notify::compare-func", callback: (...args: any[]) => void): number
    on(sigName: "notify::compare-func", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::compare-func", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::compare-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::compare-func", ...args: any[]): void
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
    static $gtype: GObject.GType<TreeMultiSet>

    // Constructors of Gee-1.0.Gee.TreeMultiSet

    constructor(config?: TreeMultiSet_ConstructProps) 
    constructor(compareFunc?: GLib.CompareFunc | null) 
    static new(compareFunc?: GLib.CompareFunc | null): TreeMultiSet
    _init(config?: TreeMultiSet_ConstructProps): void
}

interface TreeSet_ConstructProps extends SortedSet_ConstructProps, AbstractSet_ConstructProps {

    // Own constructor properties of Gee-1.0.Gee.TreeSet

    compareFunc?: GLib.CompareFunc | null
}

interface TreeSet extends SortedSet {

    // Own properties of Gee-1.0.Gee.TreeSet

    compareFunc: GLib.CompareFunc

    // Conflicting properties

    readOnlyView: any

    // Own fields of Gee-1.0.Gee.TreeSet

    parentInstance: AbstractSet
    priv: TreeSetPrivate

    // Class property signals of Gee-1.0.Gee.TreeSet

    connect(sigName: "notify::compare-func", callback: (...args: any[]) => void): number
    on(sigName: "notify::compare-func", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::compare-func", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::compare-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::compare-func", ...args: any[]): void
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
    static $gtype: GObject.GType<TreeSet>

    // Constructors of Gee-1.0.Gee.TreeSet

    constructor(config?: TreeSet_ConstructProps) 
    constructor(compareFunc?: GLib.CompareFunc | null) 
    static new(compareFunc?: GLib.CompareFunc | null): TreeSet
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
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
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

    parentClass: GObject.ObjectClass
    contains: (self: AbstractCollection, item?: object | null) => boolean
    add: (self: AbstractCollection, item?: object | null) => boolean
    remove: (self: AbstractCollection, item?: object | null) => boolean
    clear: (self: AbstractCollection) => void
    toArray: (self: AbstractCollection) => object[]
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
    get: (self: AbstractList, index: number) => object | null
    set: (self: AbstractList, index: number, item?: object | null) => void
    indexOf: (self: AbstractList, item?: object | null) => number
    insert: (self: AbstractList, index: number, item?: object | null) => void
    removeAt: (self: AbstractList, index: number) => object | null
    slice: (self: AbstractList, start: number, stop: number) => List | null
    first: (self: AbstractList) => object | null
    last: (self: AbstractList) => object | null
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
    hasKey: (self: AbstractMap, key?: object | null) => boolean
    has: (self: AbstractMap, key?: object | null, value?: object | null) => boolean
    get: (self: AbstractMap, key?: object | null) => object | null
    set: (self: AbstractMap, key?: object | null, value?: object | null) => void
    unset: (self: AbstractMap, key?: object | null) => [ /* returnType */ boolean, /* value */ object | null ]
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
    contains: (self: Collection, item?: object | null) => boolean
    add: (self: Collection, item?: object | null) => boolean
    remove: (self: Collection, item?: object | null) => boolean
    clear: (self: Collection) => void
    addAll: (self: Collection, collection: Collection) => boolean
    containsAll: (self: Collection, collection: Collection) => boolean
    removeAll: (self: Collection, collection: Collection) => boolean
    retainAll: (self: Collection, collection: Collection) => boolean
    toArray: (self: Collection) => object[]
}

abstract class CollectionIface {

    // Own properties of Gee-1.0.Gee.CollectionIface

    static name: string
}

interface ComparableIface {

    // Own fields of Gee-1.0.Gee.ComparableIface

    parentIface: GObject.TypeInterface
    compareTo: (self: Comparable, object?: object | null) => number
}

abstract class ComparableIface {

    // Own properties of Gee-1.0.Gee.ComparableIface

    static name: string
}

interface DequeIface {

    // Own fields of Gee-1.0.Gee.DequeIface

    parentIface: GObject.TypeInterface
    offerHead: (self: Deque, element?: object | null) => boolean
    peekHead: (self: Deque) => object | null
    pollHead: (self: Deque) => object | null
    drainHead: (self: Deque, recipient: Collection, amount: number) => number
    offerTail: (self: Deque, element?: object | null) => boolean
    peekTail: (self: Deque) => object | null
    pollTail: (self: Deque) => object | null
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
    get: (self: Iterator) => object | null
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
    get: (self: List, index: number) => object | null
    set: (self: List, index: number, item?: object | null) => void
    indexOf: (self: List, item?: object | null) => number
    insert: (self: List, index: number, item?: object | null) => void
    removeAt: (self: List, index: number) => object | null
    slice: (self: List, start: number, stop: number) => List | null
    first: (self: List) => object | null
    last: (self: List) => object | null
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

    parentIface: GObject.TypeInterface
    hasKey: (self: Map, key?: object | null) => boolean
    contains: (self: Map, key?: object | null) => boolean
    has: (self: Map, key?: object | null, value?: object | null) => boolean
    get: (self: Map, key?: object | null) => object | null
    set: (self: Map, key?: object | null, value?: object | null) => void
    unset: (self: Map, key?: object | null) => [ /* returnType */ boolean, /* value */ object | null ]
    remove: (self: Map, key?: object | null) => [ /* returnType */ boolean, /* value */ object | null ]
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
    getKey: (self: MapIterator) => object | null
    getValue: (self: MapIterator) => object | null
    setValue: (self: MapIterator, value?: object | null) => void
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
    contains: (self: MultiMap, key?: object | null) => boolean
    get: (self: MultiMap, key?: object | null) => Collection
    set: (self: MultiMap, key?: object | null, value?: object | null) => void
    remove: (self: MultiMap, key?: object | null, value?: object | null) => boolean
    removeAll: (self: MultiMap, key?: object | null) => boolean
    clear: (self: MultiMap) => void
}

abstract class MultiMapIface {

    // Own properties of Gee-1.0.Gee.MultiMapIface

    static name: string
}

interface MultiSetIface {

    // Own fields of Gee-1.0.Gee.MultiSetIface

    parentIface: GObject.TypeInterface
    count: (self: MultiSet, item?: object | null) => number
}

abstract class MultiSetIface {

    // Own properties of Gee-1.0.Gee.MultiSetIface

    static name: string
}

interface QueueIface {

    // Own fields of Gee-1.0.Gee.QueueIface

    parentIface: GObject.TypeInterface
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

    parentIface: GObject.TypeInterface
}

abstract class SetIface {

    // Own properties of Gee-1.0.Gee.SetIface

    static name: string
}

interface SortedSetIface {

    // Own fields of Gee-1.0.Gee.SortedSetIface

    parentIface: GObject.TypeInterface
    first: (self: SortedSet) => object | null
    last: (self: SortedSet) => object | null
    bidirIterator: (self: SortedSet) => BidirIterator
    iteratorAt: (self: SortedSet, element?: object | null) => BidirIterator | null
    lower: (self: SortedSet, element?: object | null) => object | null
    higher: (self: SortedSet, element?: object | null) => object | null
    floor: (self: SortedSet, element?: object | null) => object | null
    ceil: (self: SortedSet, element?: object | null) => object | null
    headSet: (self: SortedSet, before?: object | null) => SortedSet
    tailSet: (self: SortedSet, after?: object | null) => SortedSet
    subSet: (self: SortedSet, from?: object | null, to?: object | null) => SortedSet
}

abstract class SortedSetIface {

    // Own properties of Gee-1.0.Gee.SortedSetIface

    static name: string
}

}
export default Gee;