// @ts-nocheck

/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * Gee-0.8
 */

import type Gio from './Gio-2.0';
import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';

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
function functionsGetEqualFuncFor(t: GObject.GType): [ /* returnType */ EqualDataFunc, /* resultTarget */ object, /* resultTargetDestroyNotify */ GLib.DestroyNotify ]
function functionsGetHashFuncFor(t: GObject.GType): [ /* returnType */ HashDataFunc, /* resultTarget */ object, /* resultTargetDestroyNotify */ GLib.DestroyNotify ]
function functionsGetCompareFuncFor(t: GObject.GType): [ /* returnType */ GLib.CompareDataFunc, /* resultTarget */ object, /* resultTargetDestroyNotify */ GLib.DestroyNotify ]
function hazardPointerPolicyIsConcrete(): boolean
function hazardPointerPolicyIsBlocking(): boolean
function hazardPointerPolicyIsSafe(): boolean
function hazardPointerPolicyToConcrete(): HazardPointerPolicy
function task(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, task: Task): Future
function asyncTask(callback: Gio.AsyncReadyCallback | null): void
function asyncTaskFinish(res: Gio.AsyncResult): void
interface HashDataFunc {
    (tType: GObject.GType, tDupFunc: GObject.BoxedCopyFunc, tDestroyFunc: GLib.DestroyNotify, v: object | null): number
}
interface EqualDataFunc {
    (tType: GObject.GType, tDupFunc: GObject.BoxedCopyFunc, tDestroyFunc: GLib.DestroyNotify, a: object | null, b: object | null): boolean
}
interface LazyFunc {
    (gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify): object | null
}
interface FoldMapFunc {
    (aType: GObject.GType, aDupFunc: GObject.BoxedCopyFunc, aDestroyFunc: GLib.DestroyNotify, kType: GObject.GType, kDupFunc: GObject.BoxedCopyFunc, kDestroyFunc: GLib.DestroyNotify, vType: GObject.GType, vDupFunc: GObject.BoxedCopyFunc, vDestroyFunc: GLib.DestroyNotify, k: object | null, v: object | null, a: object | null): object | null
}
interface ForallMapFunc {
    (kType: GObject.GType, kDupFunc: GObject.BoxedCopyFunc, kDestroyFunc: GLib.DestroyNotify, vType: GObject.GType, vDupFunc: GObject.BoxedCopyFunc, vDestroyFunc: GLib.DestroyNotify, k: object | null, v: object | null): boolean
}
interface Task {
    (gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify): object | null
}
interface FoldFunc {
    (aType: GObject.GType, aDupFunc: GObject.BoxedCopyFunc, aDestroyFunc: GLib.DestroyNotify, gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, g: object | null, a: object | null): object | null
}
interface ForallFunc {
    (gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, g: object | null): boolean
}
interface UnfoldFunc {
    (aType: GObject.GType, aDupFunc: GObject.BoxedCopyFunc, aDestroyFunc: GLib.DestroyNotify): Lazy | null
}
interface StreamFunc {
    (gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, aType: GObject.GType, aDupFunc: GObject.BoxedCopyFunc, aDestroyFunc: GLib.DestroyNotify, state: TraversableStream, g: Lazy | null): TraversableStream
}
interface MapFunc {
    (aType: GObject.GType, aDupFunc: GObject.BoxedCopyFunc, aDestroyFunc: GLib.DestroyNotify, gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, g: object | null): object | null
}
interface Predicate {
    (gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, g: object | null): boolean
}
interface FlatMapFunc {
    (aType: GObject.GType, aDupFunc: GObject.BoxedCopyFunc, aDestroyFunc: GLib.DestroyNotify, gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, g: object | null): Iterator
}
interface BidirIterator_ConstructProps extends Iterator_ConstructProps, GObject.Object_ConstructProps {
}

interface BidirIterator extends Iterator {

    // Owm methods of Gee-0.8.Gee.BidirIterator

    previous(): boolean
    hasPrevious(): boolean
    first(): boolean
    last(): boolean

    // Class property signals of Gee-0.8.Gee.BidirIterator

    connect(sigName: "notify::valid", callback: (...args: any[]) => void): number
    on(sigName: "notify::valid", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::valid", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::valid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::valid", ...args: any[]): void
    connect(sigName: "notify::read-only", callback: (...args: any[]) => void): number
    on(sigName: "notify::read-only", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::read-only", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::read-only", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::read-only", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class BidirIterator extends GObject.Object {

    // Own properties of Gee-0.8.Gee.BidirIterator

    static name: string
    static $gtype: GObject.GType<BidirIterator>

    // Constructors of Gee-0.8.Gee.BidirIterator

    constructor(config?: BidirIterator_ConstructProps) 
    _init(config?: BidirIterator_ConstructProps): void
}

interface BidirList_ConstructProps extends List_ConstructProps, GObject.Object_ConstructProps {
}

interface BidirList extends List {

    // Own properties of Gee-0.8.Gee.BidirList

    readonly readOnlyView: BidirList

    // Owm methods of Gee-0.8.Gee.BidirList

    bidirListIterator(): BidirListIterator
    getReadOnlyView(): BidirList

    // Overloads of getReadOnlyView

    getReadOnlyView(): List
    getReadOnlyView(): Collection
    getReadOnlyView(...args: any[]): any
    getReadOnlyView(...args: any[]): BidirList | List | Collection | any

    // Class property signals of Gee-0.8.Gee.BidirList

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
    connect(sigName: "notify::read-only", callback: (...args: any[]) => void): number
    on(sigName: "notify::read-only", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::read-only", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::read-only", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::read-only", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class BidirList extends GObject.Object {

    // Own properties of Gee-0.8.Gee.BidirList

    static name: string
    static $gtype: GObject.GType<BidirList>

    // Constructors of Gee-0.8.Gee.BidirList

    constructor(config?: BidirList_ConstructProps) 
    _init(config?: BidirList_ConstructProps): void

    // Conflicting static methods

    static empty(...args: any[]): any
}

interface BidirListIterator_ConstructProps extends BidirIterator_ConstructProps, ListIterator_ConstructProps, GObject.Object_ConstructProps {
}

interface BidirListIterator extends BidirIterator, ListIterator {

    // Owm methods of Gee-0.8.Gee.BidirListIterator

    insert(item: object | null): void

    // Class property signals of Gee-0.8.Gee.BidirListIterator

    connect(sigName: "notify::valid", callback: (...args: any[]) => void): number
    on(sigName: "notify::valid", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::valid", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::valid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::valid", ...args: any[]): void
    connect(sigName: "notify::read-only", callback: (...args: any[]) => void): number
    on(sigName: "notify::read-only", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::read-only", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::read-only", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::read-only", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class BidirListIterator extends GObject.Object {

    // Own properties of Gee-0.8.Gee.BidirListIterator

    static name: string
    static $gtype: GObject.GType<BidirListIterator>

    // Constructors of Gee-0.8.Gee.BidirListIterator

    constructor(config?: BidirListIterator_ConstructProps) 
    _init(config?: BidirListIterator_ConstructProps): void
}

interface BidirMapIterator_ConstructProps extends MapIterator_ConstructProps, GObject.Object_ConstructProps {
}

interface BidirMapIterator extends MapIterator {

    // Owm methods of Gee-0.8.Gee.BidirMapIterator

    previous(): boolean
    hasPrevious(): boolean
    first(): boolean
    last(): boolean

    // Class property signals of Gee-0.8.Gee.BidirMapIterator

    connect(sigName: "notify::valid", callback: (...args: any[]) => void): number
    on(sigName: "notify::valid", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::valid", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::valid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::valid", ...args: any[]): void
    connect(sigName: "notify::mutable", callback: (...args: any[]) => void): number
    on(sigName: "notify::mutable", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::mutable", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::mutable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::mutable", ...args: any[]): void
    connect(sigName: "notify::read-only", callback: (...args: any[]) => void): number
    on(sigName: "notify::read-only", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::read-only", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::read-only", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::read-only", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class BidirMapIterator extends GObject.Object {

    // Own properties of Gee-0.8.Gee.BidirMapIterator

    static name: string
    static $gtype: GObject.GType<BidirMapIterator>

    // Constructors of Gee-0.8.Gee.BidirMapIterator

    constructor(config?: BidirMapIterator_ConstructProps) 
    _init(config?: BidirMapIterator_ConstructProps): void
}

interface BidirSortedSet_ConstructProps extends SortedSet_ConstructProps, GObject.Object_ConstructProps {
}

interface BidirSortedSet extends SortedSet {

    // Own properties of Gee-0.8.Gee.BidirSortedSet

    readonly readOnlyView: BidirSortedSet

    // Owm methods of Gee-0.8.Gee.BidirSortedSet

    bidirIterator(): BidirIterator
    getReadOnlyView(): BidirSortedSet

    // Overloads of getReadOnlyView

    getReadOnlyView(): SortedSet
    getReadOnlyView(): Set
    getReadOnlyView(): Collection
    getReadOnlyView(...args: any[]): any
    getReadOnlyView(...args: any[]): BidirSortedSet | SortedSet | Set | Collection | any

    // Class property signals of Gee-0.8.Gee.BidirSortedSet

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
    connect(sigName: "notify::read-only", callback: (...args: any[]) => void): number
    on(sigName: "notify::read-only", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::read-only", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::read-only", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::read-only", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class BidirSortedSet extends GObject.Object {

    // Own properties of Gee-0.8.Gee.BidirSortedSet

    static name: string
    static $gtype: GObject.GType<BidirSortedSet>

    // Constructors of Gee-0.8.Gee.BidirSortedSet

    constructor(config?: BidirSortedSet_ConstructProps) 
    _init(config?: BidirSortedSet_ConstructProps): void
    static empty(gType: GObject.GType, gDupFunc?: GObject.BoxedCopyFunc, gDestroyFunc?: GLib.DestroyNotify): BidirSortedSet

    // Overloads of empty

    static empty(gType: GObject.GType, gDupFunc?: GObject.BoxedCopyFunc, gDestroyFunc?: GLib.DestroyNotify): SortedSet
    static empty(gType: GObject.GType, gDupFunc?: GObject.BoxedCopyFunc, gDestroyFunc?: GLib.DestroyNotify): Set
    static empty(gType: GObject.GType, gDupFunc?: GObject.BoxedCopyFunc, gDestroyFunc?: GLib.DestroyNotify): Collection
    static empty(...args: any[]): any
    static empty(args_or_gType: any[] | GObject.GType, gDupFunc?: GObject.BoxedCopyFunc, gDestroyFunc?: GLib.DestroyNotify): BidirSortedSet | SortedSet | Set | Collection | any
}

interface BidirSortedMap_ConstructProps extends SortedMap_ConstructProps, GObject.Object_ConstructProps {
}

interface BidirSortedMap extends SortedMap {

    // Own properties of Gee-0.8.Gee.BidirSortedMap

    readonly readOnlyView: BidirSortedMap

    // Owm methods of Gee-0.8.Gee.BidirSortedMap

    bidirMapIterator(): BidirMapIterator
    getReadOnlyView(): BidirSortedMap

    // Overloads of getReadOnlyView

    getReadOnlyView(): SortedMap
    getReadOnlyView(): Map
    getReadOnlyView(...args: any[]): any
    getReadOnlyView(...args: any[]): BidirSortedMap | SortedMap | Map | any

    // Class property signals of Gee-0.8.Gee.BidirSortedMap

    connect(sigName: "notify::read-only-view", callback: (...args: any[]) => void): number
    on(sigName: "notify::read-only-view", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::read-only-view", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::read-only-view", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::read-only-view", ...args: any[]): void
    connect(sigName: "notify::ascending-keys", callback: (...args: any[]) => void): number
    on(sigName: "notify::ascending-keys", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::ascending-keys", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::ascending-keys", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::ascending-keys", ...args: any[]): void
    connect(sigName: "notify::ascending-entries", callback: (...args: any[]) => void): number
    on(sigName: "notify::ascending-entries", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::ascending-entries", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::ascending-entries", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::ascending-entries", ...args: any[]): void
    connect(sigName: "notify::size", callback: (...args: any[]) => void): number
    on(sigName: "notify::size", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::size", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::read-only", callback: (...args: any[]) => void): number
    on(sigName: "notify::read-only", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::read-only", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::read-only", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::read-only", ...args: any[]): void
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
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class BidirSortedMap extends GObject.Object {

    // Own properties of Gee-0.8.Gee.BidirSortedMap

    static name: string
    static $gtype: GObject.GType<BidirSortedMap>

    // Constructors of Gee-0.8.Gee.BidirSortedMap

    constructor(config?: BidirSortedMap_ConstructProps) 
    _init(config?: BidirSortedMap_ConstructProps): void
    static empty(kType: GObject.GType, kDupFunc?: GObject.BoxedCopyFunc, kDestroyFunc?: GLib.DestroyNotify, vType?: GObject.GType, vDupFunc?: GObject.BoxedCopyFunc, vDestroyFunc?: GLib.DestroyNotify): BidirSortedMap

    // Overloads of empty

    static empty(kType: GObject.GType, kDupFunc?: GObject.BoxedCopyFunc, kDestroyFunc?: GLib.DestroyNotify, vType?: GObject.GType, vDupFunc?: GObject.BoxedCopyFunc, vDestroyFunc?: GLib.DestroyNotify): Map
    static empty(...args: any[]): any
    static empty(args_or_kType: any[] | GObject.GType, kDupFunc?: GObject.BoxedCopyFunc, kDestroyFunc?: GLib.DestroyNotify, vType?: GObject.GType, vDupFunc?: GObject.BoxedCopyFunc, vDestroyFunc?: GLib.DestroyNotify): BidirSortedMap | Map | any
}

interface Collection_ConstructProps extends Iterable_ConstructProps, GObject.Object_ConstructProps {
}

interface Collection extends Iterable {

    // Own properties of Gee-0.8.Gee.Collection

    readonly size: number
    readonly readOnly: boolean
    readonly readOnlyView: Collection

    // Owm methods of Gee-0.8.Gee.Collection

    contains(item: object | null): boolean
    add(item: object | null): boolean
    remove(item: object | null): boolean
    clear(): void
    addAll(collection: Collection): boolean
    containsAll(collection: Collection): boolean
    removeAll(collection: Collection): boolean
    retainAll(collection: Collection): boolean
    toArray(): object[]
    addAllArray(array: object[]): boolean
    containsAllArray(array: object[]): boolean
    removeAllArray(array: object[]): boolean
    addAllIterator(iter: Iterator): boolean
    containsAllIterator(iter: Iterator): boolean
    removeAllIterator(iter: Iterator): boolean
    getSize(): number
    getIsEmpty(): boolean
    getReadOnly(): boolean
    getReadOnlyView(): Collection

    // Class property signals of Gee-0.8.Gee.Collection

    connect(sigName: "notify::size", callback: (...args: any[]) => void): number
    on(sigName: "notify::size", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::size", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::read-only", callback: (...args: any[]) => void): number
    on(sigName: "notify::read-only", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::read-only", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::read-only", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::read-only", ...args: any[]): void
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

class Collection extends GObject.Object {

    // Own properties of Gee-0.8.Gee.Collection

    static name: string
    static $gtype: GObject.GType<Collection>

    // Constructors of Gee-0.8.Gee.Collection

    constructor(config?: Collection_ConstructProps) 
    _init(config?: Collection_ConstructProps): void
    static empty(gType: GObject.GType, gDupFunc?: GObject.BoxedCopyFunc, gDestroyFunc?: GLib.DestroyNotify): Collection
}

interface Comparable_ConstructProps extends GObject.Object_ConstructProps {
}

interface Comparable extends GObject.Object {

    // Owm methods of Gee-0.8.Gee.Comparable

    compareTo(object: object | null): number

    // Class property signals of Gee-0.8.Gee.Comparable

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class Comparable {

    // Own properties of Gee-0.8.Gee.Comparable

    static name: string
    static $gtype: GObject.GType<Comparable>

    // Constructors of Gee-0.8.Gee.Comparable

    constructor(config?: Comparable_ConstructProps) 
    _init(config?: Comparable_ConstructProps): void
}

interface Deque_ConstructProps extends Queue_ConstructProps, GObject.Object_ConstructProps {
}

interface Deque extends Queue {

    // Owm methods of Gee-0.8.Gee.Deque

    offerHead(element: object | null): boolean
    peekHead(): object | null
    pollHead(): object | null
    drainHead(recipient: Collection, amount: number): number
    offerTail(element: object | null): boolean
    peekTail(): object | null
    pollTail(): object | null
    drainTail(recipient: Collection, amount: number): number

    // Class property signals of Gee-0.8.Gee.Deque

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
    connect(sigName: "notify::read-only", callback: (...args: any[]) => void): number
    on(sigName: "notify::read-only", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::read-only", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::read-only", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::read-only", ...args: any[]): void
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

class Deque extends GObject.Object {

    // Own properties of Gee-0.8.Gee.Deque

    static name: string
    static $gtype: GObject.GType<Deque>

    // Constructors of Gee-0.8.Gee.Deque

    constructor(config?: Deque_ConstructProps) 
    _init(config?: Deque_ConstructProps): void
}

interface Future_ConstructProps extends GObject.Object_ConstructProps {
}

interface Future extends GObject.Object {

    // Own properties of Gee-0.8.Gee.Future

    readonly ready: boolean
    readonly exception: GLib.Error

    // Owm methods of Gee-0.8.Gee.Future

    wait(): object | null
    waitUntil(endTime: number): [ /* returnType */ boolean, /* value */ object ]
    waitAsync(callback: Gio.AsyncReadyCallback | null): void
    waitFinish(res: Gio.AsyncResult): object | null
    map(aType: GObject.GType, aDupFunc: GObject.BoxedCopyFunc, aDestroyFunc: GLib.DestroyNotify, func: any): Future
    lightMap(aType: GObject.GType, aDupFunc: GObject.BoxedCopyFunc, aDestroyFunc: GLib.DestroyNotify, func: any): Future
    lightMapBroken(aType: GObject.GType, aDupFunc: GObject.BoxedCopyFunc, aDestroyFunc: GLib.DestroyNotify, func: any): Future
    zip(aType: GObject.GType, aDupFunc: GObject.BoxedCopyFunc, aDestroyFunc: GLib.DestroyNotify, bType: GObject.GType, bDupFunc: GObject.BoxedCopyFunc, bDestroyFunc: GLib.DestroyNotify, zipFunc: any, second: Future): Future
    flatMap(aType: GObject.GType, aDupFunc: GObject.BoxedCopyFunc, aDestroyFunc: GLib.DestroyNotify, func: any): Future
    getValue(): object | null
    getReady(): boolean
    getException(): GLib.Error | null

    // Class property signals of Gee-0.8.Gee.Future

    connect(sigName: "notify::ready", callback: (...args: any[]) => void): number
    on(sigName: "notify::ready", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::ready", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::ready", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::ready", ...args: any[]): void
    connect(sigName: "notify::exception", callback: (...args: any[]) => void): number
    on(sigName: "notify::exception", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::exception", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::exception", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::exception", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class Future {

    // Own properties of Gee-0.8.Gee.Future

    static name: string
    static $gtype: GObject.GType<Future>

    // Constructors of Gee-0.8.Gee.Future

    constructor(config?: Future_ConstructProps) 
    _init(config?: Future_ConstructProps): void
}

interface Hashable_ConstructProps extends GObject.Object_ConstructProps {
}

interface Hashable extends GObject.Object {

    // Owm methods of Gee-0.8.Gee.Hashable

    hash(): number
    equalTo(object: object | null): boolean

    // Class property signals of Gee-0.8.Gee.Hashable

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class Hashable {

    // Own properties of Gee-0.8.Gee.Hashable

    static name: string
    static $gtype: GObject.GType<Hashable>

    // Constructors of Gee-0.8.Gee.Hashable

    constructor(config?: Hashable_ConstructProps) 
    _init(config?: Hashable_ConstructProps): void
}

interface Iterable_ConstructProps extends GObject.Object_ConstructProps, Traversable_ConstructProps {
}

interface Iterable extends GObject.Object, Traversable {

    // Owm methods of Gee-0.8.Gee.Iterable

    iterator(): Iterator

    // Class property signals of Gee-0.8.Gee.Iterable

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class Iterable {

    // Own properties of Gee-0.8.Gee.Iterable

    static name: string
    static $gtype: GObject.GType<Iterable>

    // Constructors of Gee-0.8.Gee.Iterable

    constructor(config?: Iterable_ConstructProps) 
    _init(config?: Iterable_ConstructProps): void
}

interface Iterator_ConstructProps extends GObject.Object_ConstructProps, Traversable_ConstructProps {
}

interface Iterator extends GObject.Object, Traversable {

    // Own properties of Gee-0.8.Gee.Iterator

    readonly valid: boolean
    readonly readOnly: boolean

    // Owm methods of Gee-0.8.Gee.Iterator

    next(): boolean
    hasNext(): boolean
    get(): object | null
    remove(): void
    getValid(): boolean
    getReadOnly(): boolean

    // Class property signals of Gee-0.8.Gee.Iterator

    connect(sigName: "notify::valid", callback: (...args: any[]) => void): number
    on(sigName: "notify::valid", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::valid", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::valid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::valid", ...args: any[]): void
    connect(sigName: "notify::read-only", callback: (...args: any[]) => void): number
    on(sigName: "notify::read-only", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::read-only", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::read-only", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::read-only", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class Iterator {

    // Own properties of Gee-0.8.Gee.Iterator

    static name: string
    static $gtype: GObject.GType<Iterator>

    // Constructors of Gee-0.8.Gee.Iterator

    constructor(config?: Iterator_ConstructProps) 
    _init(config?: Iterator_ConstructProps): void
    static unfold(aType: GObject.GType, aDupFunc: GObject.BoxedCopyFunc, aDestroyFunc: GLib.DestroyNotify, f: UnfoldFunc, current: Lazy | null): Iterator
    static concat(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, iters: Iterator): Iterator
}

interface List_ConstructProps extends Collection_ConstructProps, GObject.Object_ConstructProps {
}

interface List extends Collection {

    // Own properties of Gee-0.8.Gee.List

    readonly readOnlyView: List

    // Owm methods of Gee-0.8.Gee.List

    listIterator(): ListIterator
    get(index: number): object | null
    set(index: number, item: object | null): void
    indexOf(item: object | null): number
    insert(index: number, item: object | null): void
    removeAt(index: number): object | null
    slice(start: number, stop: number): List | null
    first(): object | null
    last(): object | null
    insertAll(index: number, collection: Collection): void
    sort(compareFunc: GLib.CompareDataFunc | null): void
    getReadOnlyView(): List

    // Overloads of getReadOnlyView

    getReadOnlyView(): Collection
    getReadOnlyView(...args: any[]): any
    getReadOnlyView(...args: any[]): List | Collection | any

    // Class property signals of Gee-0.8.Gee.List

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
    connect(sigName: "notify::read-only", callback: (...args: any[]) => void): number
    on(sigName: "notify::read-only", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::read-only", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::read-only", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::read-only", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class List extends GObject.Object {

    // Own properties of Gee-0.8.Gee.List

    static name: string
    static $gtype: GObject.GType<List>

    // Constructors of Gee-0.8.Gee.List

    constructor(config?: List_ConstructProps) 
    _init(config?: List_ConstructProps): void
    static empty(gType: GObject.GType, gDupFunc?: GObject.BoxedCopyFunc, gDestroyFunc?: GLib.DestroyNotify): List

    // Overloads of empty

    static empty(gType: GObject.GType, gDupFunc?: GObject.BoxedCopyFunc, gDestroyFunc?: GLib.DestroyNotify): Collection
    static empty(...args: any[]): any
    static empty(args_or_gType: any[] | GObject.GType, gDupFunc?: GObject.BoxedCopyFunc, gDestroyFunc?: GLib.DestroyNotify): List | Collection | any
}

interface ListIterator_ConstructProps extends Iterator_ConstructProps, GObject.Object_ConstructProps {
}

interface ListIterator extends Iterator {

    // Owm methods of Gee-0.8.Gee.ListIterator

    set(item: object | null): void
    add(item: object | null): void
    index(): number

    // Class property signals of Gee-0.8.Gee.ListIterator

    connect(sigName: "notify::valid", callback: (...args: any[]) => void): number
    on(sigName: "notify::valid", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::valid", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::valid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::valid", ...args: any[]): void
    connect(sigName: "notify::read-only", callback: (...args: any[]) => void): number
    on(sigName: "notify::read-only", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::read-only", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::read-only", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::read-only", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class ListIterator extends GObject.Object {

    // Own properties of Gee-0.8.Gee.ListIterator

    static name: string
    static $gtype: GObject.GType<ListIterator>

    // Constructors of Gee-0.8.Gee.ListIterator

    constructor(config?: ListIterator_ConstructProps) 
    _init(config?: ListIterator_ConstructProps): void
}

interface Map_ConstructProps extends GObject.Object_ConstructProps, Iterable_ConstructProps {
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

    hasKey(key: object | null): boolean
    contains(key: object | null): boolean
    has(key: object | null, value: object | null): boolean
    get(key: object | null): object | null
    set(key: object | null, value: object | null): void
    unset(key: object | null): [ /* returnType */ boolean, /* value */ object ]
    remove(key: object | null): [ /* returnType */ boolean, /* value */ object ]
    clear(): void
    mapIterator(): MapIterator
    setAll(map: Map): void
    unsetAll(map: Map): boolean
    removeAll(map: Map): boolean
    hasAll(map: Map): boolean
    containsAll(map: Map): boolean
    getSize(): number
    getIsEmpty(): boolean
    getReadOnly(): boolean
    getKeys(): Set
    getValues(): Collection
    getEntries(): Set
    getReadOnlyView(): Map
    getKeyType(): GObject.GType
    getValueType(): GObject.GType

    // Class property signals of Gee-0.8.Gee.Map

    connect(sigName: "notify::size", callback: (...args: any[]) => void): number
    on(sigName: "notify::size", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::size", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::read-only", callback: (...args: any[]) => void): number
    on(sigName: "notify::read-only", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::read-only", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::read-only", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::read-only", ...args: any[]): void
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

class Map {

    // Own properties of Gee-0.8.Gee.Map

    static name: string
    static $gtype: GObject.GType<Map>

    // Constructors of Gee-0.8.Gee.Map

    constructor(config?: Map_ConstructProps) 
    _init(config?: Map_ConstructProps): void
    static empty(kType: GObject.GType, kDupFunc: GObject.BoxedCopyFunc, kDestroyFunc: GLib.DestroyNotify, vType: GObject.GType, vDupFunc: GObject.BoxedCopyFunc, vDestroyFunc: GLib.DestroyNotify): Map
}

interface MapIterator_ConstructProps extends GObject.Object_ConstructProps {
}

interface MapIterator extends GObject.Object {

    // Own properties of Gee-0.8.Gee.MapIterator

    readonly valid: boolean
    readonly mutable: boolean
    readonly readOnly: boolean

    // Owm methods of Gee-0.8.Gee.MapIterator

    next(): boolean
    hasNext(): boolean
    getKey(): object | null
    getValue(): object | null
    setValue(value: object | null): void
    unset(): void
    fold(aType: GObject.GType, aDupFunc: GObject.BoxedCopyFunc, aDestroyFunc: GLib.DestroyNotify, f: FoldMapFunc, seed: object | null): object | null
    foreach(f: ForallMapFunc): boolean
    getValid(): boolean
    getMutable(): boolean
    getReadOnly(): boolean

    // Class property signals of Gee-0.8.Gee.MapIterator

    connect(sigName: "notify::valid", callback: (...args: any[]) => void): number
    on(sigName: "notify::valid", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::valid", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::valid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::valid", ...args: any[]): void
    connect(sigName: "notify::mutable", callback: (...args: any[]) => void): number
    on(sigName: "notify::mutable", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::mutable", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::mutable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::mutable", ...args: any[]): void
    connect(sigName: "notify::read-only", callback: (...args: any[]) => void): number
    on(sigName: "notify::read-only", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::read-only", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::read-only", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::read-only", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class MapIterator {

    // Own properties of Gee-0.8.Gee.MapIterator

    static name: string
    static $gtype: GObject.GType<MapIterator>

    // Constructors of Gee-0.8.Gee.MapIterator

    constructor(config?: MapIterator_ConstructProps) 
    _init(config?: MapIterator_ConstructProps): void
}

interface MultiMap_ConstructProps extends GObject.Object_ConstructProps {
}

interface MultiMap extends GObject.Object {

    // Own properties of Gee-0.8.Gee.MultiMap

    readonly size: number
    readonly readOnly: boolean

    // Owm methods of Gee-0.8.Gee.MultiMap

    getKeys(): Set
    getAllKeys(): MultiSet
    getValues(): Collection
    contains(key: object | null): boolean
    get(key: object | null): Collection
    set(key: object | null, value: object | null): void
    remove(key: object | null, value: object | null): boolean
    removeAll(key: object | null): boolean
    clear(): void
    mapIterator(): MapIterator
    getSize(): number
    getReadOnly(): boolean
    getKeyType(): GObject.GType
    getValueType(): GObject.GType
    getReadOnlyView(): MultiMap

    // Class property signals of Gee-0.8.Gee.MultiMap

    connect(sigName: "notify::size", callback: (...args: any[]) => void): number
    on(sigName: "notify::size", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::size", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::read-only", callback: (...args: any[]) => void): number
    on(sigName: "notify::read-only", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::read-only", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::read-only", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::read-only", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class MultiMap {

    // Own properties of Gee-0.8.Gee.MultiMap

    static name: string
    static $gtype: GObject.GType<MultiMap>

    // Constructors of Gee-0.8.Gee.MultiMap

    constructor(config?: MultiMap_ConstructProps) 
    _init(config?: MultiMap_ConstructProps): void
}

interface MultiSet_ConstructProps extends Collection_ConstructProps, GObject.Object_ConstructProps {
}

interface MultiSet extends Collection {

    // Owm methods of Gee-0.8.Gee.MultiSet

    count(item: object | null): number
    getReadOnlyView(): MultiSet

    // Overloads of getReadOnlyView

    getReadOnlyView(): Collection
    getReadOnlyView(...args: any[]): any
    getReadOnlyView(...args: any[]): MultiSet | Collection | any

    // Class property signals of Gee-0.8.Gee.MultiSet

    connect(sigName: "notify::size", callback: (...args: any[]) => void): number
    on(sigName: "notify::size", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::size", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::read-only", callback: (...args: any[]) => void): number
    on(sigName: "notify::read-only", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::read-only", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::read-only", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::read-only", ...args: any[]): void
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

class MultiSet extends GObject.Object {

    // Own properties of Gee-0.8.Gee.MultiSet

    static name: string
    static $gtype: GObject.GType<MultiSet>

    // Constructors of Gee-0.8.Gee.MultiSet

    constructor(config?: MultiSet_ConstructProps) 
    _init(config?: MultiSet_ConstructProps): void
    static empty(gType: GObject.GType, gDupFunc?: GObject.BoxedCopyFunc, gDestroyFunc?: GLib.DestroyNotify): Set

    // Overloads of empty

    static empty(gType: GObject.GType, gDupFunc?: GObject.BoxedCopyFunc, gDestroyFunc?: GLib.DestroyNotify): Collection
    static empty(...args: any[]): any
    static empty(args_or_gType: any[] | GObject.GType, gDupFunc?: GObject.BoxedCopyFunc, gDestroyFunc?: GLib.DestroyNotify): Set | Collection | any
}

interface Queue_ConstructProps extends Collection_ConstructProps, GObject.Object_ConstructProps {
}

interface Queue extends Collection {

    // Own properties of Gee-0.8.Gee.Queue

    readonly capacity: number
    readonly remainingCapacity: number
    readonly isFull: boolean

    // Owm methods of Gee-0.8.Gee.Queue

    offer(element: object | null): boolean
    peek(): object | null
    poll(): object | null
    drain(recipient: Collection, amount: number): number
    getCapacity(): number
    getRemainingCapacity(): number
    getIsFull(): boolean

    // Class property signals of Gee-0.8.Gee.Queue

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
    connect(sigName: "notify::read-only", callback: (...args: any[]) => void): number
    on(sigName: "notify::read-only", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::read-only", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::read-only", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::read-only", ...args: any[]): void
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

class Queue extends GObject.Object {

    // Own properties of Gee-0.8.Gee.Queue

    static name: string
    static $gtype: GObject.GType<Queue>

    // Constructors of Gee-0.8.Gee.Queue

    constructor(config?: Queue_ConstructProps) 
    _init(config?: Queue_ConstructProps): void
}

interface Set_ConstructProps extends Collection_ConstructProps, GObject.Object_ConstructProps {
}

interface Set extends Collection {

    // Own properties of Gee-0.8.Gee.Set

    readonly readOnlyView: Set

    // Owm methods of Gee-0.8.Gee.Set

    getReadOnlyView(): Set

    // Overloads of getReadOnlyView

    getReadOnlyView(): Collection
    getReadOnlyView(...args: any[]): any
    getReadOnlyView(...args: any[]): Set | Collection | any

    // Class property signals of Gee-0.8.Gee.Set

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
    connect(sigName: "notify::read-only", callback: (...args: any[]) => void): number
    on(sigName: "notify::read-only", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::read-only", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::read-only", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::read-only", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class Set extends GObject.Object {

    // Own properties of Gee-0.8.Gee.Set

    static name: string
    static $gtype: GObject.GType<Set>

    // Constructors of Gee-0.8.Gee.Set

    constructor(config?: Set_ConstructProps) 
    _init(config?: Set_ConstructProps): void
    static empty(gType: GObject.GType, gDupFunc?: GObject.BoxedCopyFunc, gDestroyFunc?: GLib.DestroyNotify): Set

    // Overloads of empty

    static empty(gType: GObject.GType, gDupFunc?: GObject.BoxedCopyFunc, gDestroyFunc?: GLib.DestroyNotify): Collection
    static empty(...args: any[]): any
    static empty(args_or_gType: any[] | GObject.GType, gDupFunc?: GObject.BoxedCopyFunc, gDestroyFunc?: GLib.DestroyNotify): Set | Collection | any
}

interface SortedMap_ConstructProps extends Map_ConstructProps, GObject.Object_ConstructProps {
}

interface SortedMap extends Map {

    // Own properties of Gee-0.8.Gee.SortedMap

    readonly ascendingKeys: SortedSet
    readonly ascendingEntries: SortedSet
    readonly readOnlyView: SortedMap

    // Owm methods of Gee-0.8.Gee.SortedMap

    headMap(before: object | null): SortedMap
    tailMap(after: object | null): SortedMap
    subMap(before: object | null, after: object | null): SortedMap
    getAscendingKeys(): SortedSet
    getAscendingEntries(): SortedSet
    getReadOnlyView(): SortedMap

    // Overloads of getReadOnlyView

    getReadOnlyView(): Map
    getReadOnlyView(...args: any[]): any
    getReadOnlyView(...args: any[]): SortedMap | Map | any

    // Class property signals of Gee-0.8.Gee.SortedMap

    connect(sigName: "notify::ascending-keys", callback: (...args: any[]) => void): number
    on(sigName: "notify::ascending-keys", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::ascending-keys", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::ascending-keys", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::ascending-keys", ...args: any[]): void
    connect(sigName: "notify::ascending-entries", callback: (...args: any[]) => void): number
    on(sigName: "notify::ascending-entries", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::ascending-entries", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::ascending-entries", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::ascending-entries", ...args: any[]): void
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
    connect(sigName: "notify::read-only", callback: (...args: any[]) => void): number
    on(sigName: "notify::read-only", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::read-only", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::read-only", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::read-only", ...args: any[]): void
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
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class SortedMap extends GObject.Object {

    // Own properties of Gee-0.8.Gee.SortedMap

    static name: string
    static $gtype: GObject.GType<SortedMap>

    // Constructors of Gee-0.8.Gee.SortedMap

    constructor(config?: SortedMap_ConstructProps) 
    _init(config?: SortedMap_ConstructProps): void
    static empty(kType: GObject.GType, kDupFunc?: GObject.BoxedCopyFunc, kDestroyFunc?: GLib.DestroyNotify, vType?: GObject.GType, vDupFunc?: GObject.BoxedCopyFunc, vDestroyFunc?: GLib.DestroyNotify): Map
}

interface SortedSet_ConstructProps extends Set_ConstructProps, GObject.Object_ConstructProps {
}

interface SortedSet extends Set {

    // Own properties of Gee-0.8.Gee.SortedSet

    readonly readOnlyView: SortedSet

    // Owm methods of Gee-0.8.Gee.SortedSet

    first(): object | null
    last(): object | null
    iteratorAt(element: object | null): Iterator | null
    lower(element: object | null): object | null
    higher(element: object | null): object | null
    floor(element: object | null): object | null
    ceil(element: object | null): object | null
    headSet(before: object | null): SortedSet
    tailSet(after: object | null): SortedSet
    subSet(from: object | null, to: object | null): SortedSet
    getReadOnlyView(): SortedSet

    // Overloads of getReadOnlyView

    getReadOnlyView(): Set
    getReadOnlyView(): Collection
    getReadOnlyView(...args: any[]): any
    getReadOnlyView(...args: any[]): SortedSet | Set | Collection | any

    // Class property signals of Gee-0.8.Gee.SortedSet

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
    connect(sigName: "notify::read-only", callback: (...args: any[]) => void): number
    on(sigName: "notify::read-only", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::read-only", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::read-only", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::read-only", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class SortedSet extends GObject.Object {

    // Own properties of Gee-0.8.Gee.SortedSet

    static name: string
    static $gtype: GObject.GType<SortedSet>

    // Constructors of Gee-0.8.Gee.SortedSet

    constructor(config?: SortedSet_ConstructProps) 
    _init(config?: SortedSet_ConstructProps): void
    static empty(gType: GObject.GType, gDupFunc?: GObject.BoxedCopyFunc, gDestroyFunc?: GLib.DestroyNotify): SortedSet

    // Overloads of empty

    static empty(gType: GObject.GType, gDupFunc?: GObject.BoxedCopyFunc, gDestroyFunc?: GLib.DestroyNotify): Set
    static empty(gType: GObject.GType, gDupFunc?: GObject.BoxedCopyFunc, gDestroyFunc?: GLib.DestroyNotify): Collection
    static empty(...args: any[]): any
    static empty(args_or_gType: any[] | GObject.GType, gDupFunc?: GObject.BoxedCopyFunc, gDestroyFunc?: GLib.DestroyNotify): SortedSet | Set | Collection | any
}

interface Traversable_ConstructProps extends GObject.Object_ConstructProps {
}

interface Traversable extends GObject.Object {

    // Owm methods of Gee-0.8.Gee.Traversable

    foreach(f: ForallFunc): boolean
    stream(aType: GObject.GType, aDupFunc: GObject.BoxedCopyFunc, aDestroyFunc: GLib.DestroyNotify, f: StreamFunc): Iterator
    fold(aType: GObject.GType, aDupFunc: GObject.BoxedCopyFunc, aDestroyFunc: GLib.DestroyNotify, f: FoldFunc, seed: object | null): object | null
    map(aType: GObject.GType, aDupFunc: GObject.BoxedCopyFunc, aDestroyFunc: GLib.DestroyNotify, f: MapFunc): Iterator
    scan(aType: GObject.GType, aDupFunc: GObject.BoxedCopyFunc, aDestroyFunc: GLib.DestroyNotify, f: FoldFunc, seed: object | null): Iterator
    filter(pred: Predicate): Iterator
    chop(offset: number, length: number): Iterator
    flatMap(aType: GObject.GType, aDupFunc: GObject.BoxedCopyFunc, aDestroyFunc: GLib.DestroyNotify, f: FlatMapFunc): Iterator
    tee(forks: number): Iterator[]
    firstMatch(pred: Predicate): object | null
    anyMatch(pred: Predicate): boolean
    allMatch(pred: Predicate): boolean
    max(compare: GLib.CompareDataFunc): object | null
    min(compare: GLib.CompareDataFunc): object | null
    orderBy(compare: GLib.CompareDataFunc | null): Iterator
    getElementType(): GObject.GType

    // Class property signals of Gee-0.8.Gee.Traversable

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class Traversable {

    // Own properties of Gee-0.8.Gee.Traversable

    static name: string
    static $gtype: GObject.GType<Traversable>

    // Constructors of Gee-0.8.Gee.Traversable

    constructor(config?: Traversable_ConstructProps) 
    _init(config?: Traversable_ConstructProps): void
}

interface AbstractBidirList_ConstructProps extends BidirList_ConstructProps, AbstractList_ConstructProps {

    // Own constructor properties of Gee-0.8.Gee.AbstractBidirList

    gType?: GObject.GType | null
    gDupFunc?: GObject.BoxedCopyFunc | null
    gDestroyFunc?: GLib.DestroyNotify | null
}

interface AbstractBidirList extends BidirList {

    // Own properties of Gee-0.8.Gee.AbstractBidirList

    readonly gType: GObject.GType
    readonly gDupFunc: GObject.BoxedCopyFunc
    readonly gDestroyFunc: GLib.DestroyNotify
    readonly readOnlyView: BidirList

    // Owm methods of Gee-0.8.Gee.AbstractBidirList

    bidirListIterator(): BidirListIterator
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
    getReadOnlyView(): BidirList

    // Overloads of getReadOnlyView

    getReadOnlyView(): BidirList
    getReadOnlyView(): List
    getReadOnlyView(): Collection
    getReadOnlyView(...args: any[]): any
    getReadOnlyView(...args: any[]): BidirList | List | Collection | any

    // Class property signals of Gee-0.8.Gee.AbstractBidirList

    connect(sigName: "notify::g-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::g-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::g-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::g-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::g-type", ...args: any[]): void
    connect(sigName: "notify::g-dup-func", callback: (...args: any[]) => void): number
    on(sigName: "notify::g-dup-func", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::g-dup-func", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::g-dup-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::g-dup-func", ...args: any[]): void
    connect(sigName: "notify::g-destroy-func", callback: (...args: any[]) => void): number
    on(sigName: "notify::g-destroy-func", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::g-destroy-func", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::g-destroy-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::g-destroy-func", ...args: any[]): void
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
    connect(sigName: "notify::read-only", callback: (...args: any[]) => void): number
    on(sigName: "notify::read-only", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::read-only", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::read-only", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::read-only", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class AbstractBidirList extends AbstractList {

    // Own properties of Gee-0.8.Gee.AbstractBidirList

    static name: string
    static $gtype: GObject.GType<AbstractBidirList>

    // Constructors of Gee-0.8.Gee.AbstractBidirList

    constructor(config?: AbstractBidirList_ConstructProps) 
    _init(config?: AbstractBidirList_ConstructProps): void

    // Conflicting static methods

    static empty(...args: any[]): any
}

interface AbstractBidirSortedSet_ConstructProps extends BidirSortedSet_ConstructProps, AbstractSortedSet_ConstructProps {

    // Own constructor properties of Gee-0.8.Gee.AbstractBidirSortedSet

    gType?: GObject.GType | null
    gDupFunc?: GObject.BoxedCopyFunc | null
    gDestroyFunc?: GLib.DestroyNotify | null
}

interface AbstractBidirSortedSet extends BidirSortedSet {

    // Own properties of Gee-0.8.Gee.AbstractBidirSortedSet

    readonly gType: GObject.GType
    readonly gDupFunc: GObject.BoxedCopyFunc
    readonly gDestroyFunc: GLib.DestroyNotify
    readonly readOnlyView: BidirSortedSet

    // Owm methods of Gee-0.8.Gee.AbstractBidirSortedSet

    bidirIterator(): BidirIterator
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
    getReadOnlyView(): BidirSortedSet

    // Overloads of getReadOnlyView

    getReadOnlyView(): BidirSortedSet
    getReadOnlyView(): SortedSet
    getReadOnlyView(): Set
    getReadOnlyView(): Collection
    getReadOnlyView(...args: any[]): any
    getReadOnlyView(...args: any[]): BidirSortedSet | SortedSet | Set | Collection | any

    // Class property signals of Gee-0.8.Gee.AbstractBidirSortedSet

    connect(sigName: "notify::g-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::g-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::g-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::g-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::g-type", ...args: any[]): void
    connect(sigName: "notify::g-dup-func", callback: (...args: any[]) => void): number
    on(sigName: "notify::g-dup-func", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::g-dup-func", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::g-dup-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::g-dup-func", ...args: any[]): void
    connect(sigName: "notify::g-destroy-func", callback: (...args: any[]) => void): number
    on(sigName: "notify::g-destroy-func", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::g-destroy-func", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::g-destroy-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::g-destroy-func", ...args: any[]): void
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
    connect(sigName: "notify::read-only", callback: (...args: any[]) => void): number
    on(sigName: "notify::read-only", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::read-only", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::read-only", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::read-only", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class AbstractBidirSortedSet extends AbstractSortedSet {

    // Own properties of Gee-0.8.Gee.AbstractBidirSortedSet

    static name: string
    static $gtype: GObject.GType<AbstractBidirSortedSet>

    // Constructors of Gee-0.8.Gee.AbstractBidirSortedSet

    constructor(config?: AbstractBidirSortedSet_ConstructProps) 
    _init(config?: AbstractBidirSortedSet_ConstructProps): void

    // Conflicting static methods

    static empty(...args: any[]): any
}

interface AbstractBidirSortedMap_ConstructProps extends BidirSortedMap_ConstructProps, AbstractSortedMap_ConstructProps {

    // Own constructor properties of Gee-0.8.Gee.AbstractBidirSortedMap

    kType?: GObject.GType | null
    kDupFunc?: GObject.BoxedCopyFunc | null
    kDestroyFunc?: GLib.DestroyNotify | null
    vType?: GObject.GType | null
    vDupFunc?: GObject.BoxedCopyFunc | null
    vDestroyFunc?: GLib.DestroyNotify | null
}

interface AbstractBidirSortedMap extends BidirSortedMap {

    // Own properties of Gee-0.8.Gee.AbstractBidirSortedMap

    readonly kType: GObject.GType
    readonly kDupFunc: GObject.BoxedCopyFunc
    readonly kDestroyFunc: GLib.DestroyNotify
    readonly vType: GObject.GType
    readonly vDupFunc: GObject.BoxedCopyFunc
    readonly vDestroyFunc: GLib.DestroyNotify
    readonly readOnlyView: BidirSortedMap

    // Owm methods of Gee-0.8.Gee.AbstractBidirSortedMap

    bidirMapIterator(): BidirMapIterator
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
    getReadOnlyView(): BidirSortedMap

    // Overloads of getReadOnlyView

    getReadOnlyView(): BidirSortedMap
    getReadOnlyView(): SortedMap
    getReadOnlyView(): Map
    getReadOnlyView(...args: any[]): any
    getReadOnlyView(...args: any[]): BidirSortedMap | SortedMap | Map | any

    // Class property signals of Gee-0.8.Gee.AbstractBidirSortedMap

    connect(sigName: "notify::k-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::k-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::k-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::k-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::k-type", ...args: any[]): void
    connect(sigName: "notify::k-dup-func", callback: (...args: any[]) => void): number
    on(sigName: "notify::k-dup-func", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::k-dup-func", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::k-dup-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::k-dup-func", ...args: any[]): void
    connect(sigName: "notify::k-destroy-func", callback: (...args: any[]) => void): number
    on(sigName: "notify::k-destroy-func", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::k-destroy-func", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::k-destroy-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::k-destroy-func", ...args: any[]): void
    connect(sigName: "notify::v-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::v-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::v-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::v-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::v-type", ...args: any[]): void
    connect(sigName: "notify::v-dup-func", callback: (...args: any[]) => void): number
    on(sigName: "notify::v-dup-func", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::v-dup-func", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::v-dup-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::v-dup-func", ...args: any[]): void
    connect(sigName: "notify::v-destroy-func", callback: (...args: any[]) => void): number
    on(sigName: "notify::v-destroy-func", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::v-destroy-func", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::v-destroy-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::v-destroy-func", ...args: any[]): void
    connect(sigName: "notify::read-only-view", callback: (...args: any[]) => void): number
    on(sigName: "notify::read-only-view", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::read-only-view", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::read-only-view", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::read-only-view", ...args: any[]): void
    connect(sigName: "notify::ascending-keys", callback: (...args: any[]) => void): number
    on(sigName: "notify::ascending-keys", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::ascending-keys", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::ascending-keys", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::ascending-keys", ...args: any[]): void
    connect(sigName: "notify::ascending-entries", callback: (...args: any[]) => void): number
    on(sigName: "notify::ascending-entries", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::ascending-entries", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::ascending-entries", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::ascending-entries", ...args: any[]): void
    connect(sigName: "notify::size", callback: (...args: any[]) => void): number
    on(sigName: "notify::size", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::size", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::read-only", callback: (...args: any[]) => void): number
    on(sigName: "notify::read-only", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::read-only", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::read-only", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::read-only", ...args: any[]): void
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
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class AbstractBidirSortedMap extends AbstractSortedMap {

    // Own properties of Gee-0.8.Gee.AbstractBidirSortedMap

    static name: string
    static $gtype: GObject.GType<AbstractBidirSortedMap>

    // Constructors of Gee-0.8.Gee.AbstractBidirSortedMap

    constructor(config?: AbstractBidirSortedMap_ConstructProps) 
    _init(config?: AbstractBidirSortedMap_ConstructProps): void

    // Conflicting static methods

    static empty(...args: any[]): any
}

interface AbstractCollection_ConstructProps extends Traversable_ConstructProps, Iterable_ConstructProps, Collection_ConstructProps, GObject.Object_ConstructProps {

    // Own constructor properties of Gee-0.8.Gee.AbstractCollection

    gType?: GObject.GType | null
    gDupFunc?: GObject.BoxedCopyFunc | null
    gDestroyFunc?: GLib.DestroyNotify | null
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

    contains(item: object | null): boolean
    add(item: object | null): boolean
    remove(item: object | null): boolean
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
    getSize(): number
    getReadOnly(): boolean
    getReadOnlyView(): Collection

    // Class property signals of Gee-0.8.Gee.AbstractCollection

    connect(sigName: "notify::g-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::g-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::g-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::g-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::g-type", ...args: any[]): void
    connect(sigName: "notify::g-dup-func", callback: (...args: any[]) => void): number
    on(sigName: "notify::g-dup-func", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::g-dup-func", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::g-dup-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::g-dup-func", ...args: any[]): void
    connect(sigName: "notify::g-destroy-func", callback: (...args: any[]) => void): number
    on(sigName: "notify::g-destroy-func", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::g-destroy-func", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::g-destroy-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::g-destroy-func", ...args: any[]): void
    connect(sigName: "notify::size", callback: (...args: any[]) => void): number
    on(sigName: "notify::size", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::size", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::read-only", callback: (...args: any[]) => void): number
    on(sigName: "notify::read-only", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::read-only", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::read-only", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::read-only", ...args: any[]): void
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

class AbstractCollection extends GObject.Object {

    // Own properties of Gee-0.8.Gee.AbstractCollection

    static name: string
    static $gtype: GObject.GType<AbstractCollection>

    // Constructors of Gee-0.8.Gee.AbstractCollection

    constructor(config?: AbstractCollection_ConstructProps) 
    _init(config?: AbstractCollection_ConstructProps): void
}

interface AbstractList_ConstructProps extends List_ConstructProps, AbstractCollection_ConstructProps {

    // Own constructor properties of Gee-0.8.Gee.AbstractList

    gType?: GObject.GType | null
    gDupFunc?: GObject.BoxedCopyFunc | null
    gDestroyFunc?: GLib.DestroyNotify | null
}

interface AbstractList extends List {

    // Own properties of Gee-0.8.Gee.AbstractList

    readonly gType: GObject.GType
    readonly gDupFunc: GObject.BoxedCopyFunc
    readonly gDestroyFunc: GLib.DestroyNotify
    readonly readOnlyView: List

    // Owm methods of Gee-0.8.Gee.AbstractList

    listIterator(): ListIterator
    get(index: number): object | null
    set(index: number, item: object | null): void
    indexOf(item: object | null): number
    insert(index: number, item: object | null): void
    removeAt(index: number): object | null
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
    getReadOnlyView(): List

    // Overloads of getReadOnlyView

    getReadOnlyView(): List
    getReadOnlyView(): Collection
    getReadOnlyView(...args: any[]): any
    getReadOnlyView(...args: any[]): List | Collection | any

    // Class property signals of Gee-0.8.Gee.AbstractList

    connect(sigName: "notify::g-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::g-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::g-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::g-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::g-type", ...args: any[]): void
    connect(sigName: "notify::g-dup-func", callback: (...args: any[]) => void): number
    on(sigName: "notify::g-dup-func", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::g-dup-func", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::g-dup-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::g-dup-func", ...args: any[]): void
    connect(sigName: "notify::g-destroy-func", callback: (...args: any[]) => void): number
    on(sigName: "notify::g-destroy-func", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::g-destroy-func", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::g-destroy-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::g-destroy-func", ...args: any[]): void
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
    connect(sigName: "notify::read-only", callback: (...args: any[]) => void): number
    on(sigName: "notify::read-only", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::read-only", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::read-only", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::read-only", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class AbstractList extends AbstractCollection {

    // Own properties of Gee-0.8.Gee.AbstractList

    static name: string
    static $gtype: GObject.GType<AbstractList>

    // Constructors of Gee-0.8.Gee.AbstractList

    constructor(config?: AbstractList_ConstructProps) 
    _init(config?: AbstractList_ConstructProps): void

    // Conflicting static methods

    static empty(...args: any[]): any
}

interface AbstractMap_ConstructProps extends Traversable_ConstructProps, Iterable_ConstructProps, Map_ConstructProps, GObject.Object_ConstructProps {

    // Own constructor properties of Gee-0.8.Gee.AbstractMap

    kType?: GObject.GType | null
    kDupFunc?: GObject.BoxedCopyFunc | null
    kDestroyFunc?: GLib.DestroyNotify | null
    vType?: GObject.GType | null
    vDupFunc?: GObject.BoxedCopyFunc | null
    vDestroyFunc?: GLib.DestroyNotify | null
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

    hasKey(key: object | null): boolean
    has(key: object | null, value: object | null): boolean
    get(key: object | null): object | null
    set(key: object | null, value: object | null): void
    unset(key: object | null): [ /* returnType */ boolean, /* value */ object ]
    mapIterator(): MapIterator
    clear(): void
    foreach(f: ForallFunc): boolean
    stream(aType: GObject.GType, aDupFunc: GObject.BoxedCopyFunc, aDestroyFunc: GLib.DestroyNotify, f: StreamFunc): Iterator
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
    getSize(): number
    getReadOnly(): boolean
    getKeys(): Set
    getValues(): Collection
    getEntries(): Set
    getReadOnlyView(): Map

    // Class property signals of Gee-0.8.Gee.AbstractMap

    connect(sigName: "notify::k-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::k-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::k-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::k-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::k-type", ...args: any[]): void
    connect(sigName: "notify::k-dup-func", callback: (...args: any[]) => void): number
    on(sigName: "notify::k-dup-func", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::k-dup-func", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::k-dup-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::k-dup-func", ...args: any[]): void
    connect(sigName: "notify::k-destroy-func", callback: (...args: any[]) => void): number
    on(sigName: "notify::k-destroy-func", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::k-destroy-func", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::k-destroy-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::k-destroy-func", ...args: any[]): void
    connect(sigName: "notify::v-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::v-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::v-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::v-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::v-type", ...args: any[]): void
    connect(sigName: "notify::v-dup-func", callback: (...args: any[]) => void): number
    on(sigName: "notify::v-dup-func", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::v-dup-func", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::v-dup-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::v-dup-func", ...args: any[]): void
    connect(sigName: "notify::v-destroy-func", callback: (...args: any[]) => void): number
    on(sigName: "notify::v-destroy-func", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::v-destroy-func", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::v-destroy-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::v-destroy-func", ...args: any[]): void
    connect(sigName: "notify::size", callback: (...args: any[]) => void): number
    on(sigName: "notify::size", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::size", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::read-only", callback: (...args: any[]) => void): number
    on(sigName: "notify::read-only", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::read-only", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::read-only", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::read-only", ...args: any[]): void
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

class AbstractMap extends GObject.Object {

    // Own properties of Gee-0.8.Gee.AbstractMap

    static name: string
    static $gtype: GObject.GType<AbstractMap>

    // Constructors of Gee-0.8.Gee.AbstractMap

    constructor(config?: AbstractMap_ConstructProps) 
    _init(config?: AbstractMap_ConstructProps): void
}

interface AbstractMultiMap_ConstructProps extends MultiMap_ConstructProps, GObject.Object_ConstructProps {

    // Own constructor properties of Gee-0.8.Gee.AbstractMultiMap

    kType?: GObject.GType | null
    kDupFunc?: GObject.BoxedCopyFunc | null
    kDestroyFunc?: GLib.DestroyNotify | null
    vType?: GObject.GType | null
    vDupFunc?: GObject.BoxedCopyFunc | null
    vDestroyFunc?: GLib.DestroyNotify | null
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

    storageMap: Map

    // Owm methods of Gee-0.8.Gee.AbstractMultiMap

    createValueStorage(): Collection
    createMultiKeySet(): MultiSet
    getValueEqualFunc(): [ /* returnType */ EqualDataFunc, /* resultTarget */ object, /* resultTargetDestroyNotify */ GLib.DestroyNotify ]
    reserved0(): void
    reserved1(): void
    reserved2(): void
    reserved3(): void
    reserved4(): void
    reserved5(): void
    reserved6(): void
    reserved7(): void
    reserved8(): void
    getReadOnlyView(): MultiMap

    // Class property signals of Gee-0.8.Gee.AbstractMultiMap

    connect(sigName: "notify::k-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::k-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::k-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::k-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::k-type", ...args: any[]): void
    connect(sigName: "notify::k-dup-func", callback: (...args: any[]) => void): number
    on(sigName: "notify::k-dup-func", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::k-dup-func", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::k-dup-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::k-dup-func", ...args: any[]): void
    connect(sigName: "notify::k-destroy-func", callback: (...args: any[]) => void): number
    on(sigName: "notify::k-destroy-func", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::k-destroy-func", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::k-destroy-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::k-destroy-func", ...args: any[]): void
    connect(sigName: "notify::v-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::v-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::v-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::v-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::v-type", ...args: any[]): void
    connect(sigName: "notify::v-dup-func", callback: (...args: any[]) => void): number
    on(sigName: "notify::v-dup-func", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::v-dup-func", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::v-dup-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::v-dup-func", ...args: any[]): void
    connect(sigName: "notify::v-destroy-func", callback: (...args: any[]) => void): number
    on(sigName: "notify::v-destroy-func", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::v-destroy-func", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::v-destroy-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::v-destroy-func", ...args: any[]): void
    connect(sigName: "notify::size", callback: (...args: any[]) => void): number
    on(sigName: "notify::size", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::size", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::read-only", callback: (...args: any[]) => void): number
    on(sigName: "notify::read-only", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::read-only", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::read-only", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::read-only", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class AbstractMultiMap extends GObject.Object {

    // Own properties of Gee-0.8.Gee.AbstractMultiMap

    static name: string
    static $gtype: GObject.GType<AbstractMultiMap>

    // Constructors of Gee-0.8.Gee.AbstractMultiMap

    constructor(config?: AbstractMultiMap_ConstructProps) 
    _init(config?: AbstractMultiMap_ConstructProps): void
}

interface AbstractMultiSet_ConstructProps extends MultiSet_ConstructProps, AbstractCollection_ConstructProps {

    // Own constructor properties of Gee-0.8.Gee.AbstractMultiSet

    gType?: GObject.GType | null
    gDupFunc?: GObject.BoxedCopyFunc | null
    gDestroyFunc?: GLib.DestroyNotify | null
}

interface AbstractMultiSet extends MultiSet {

    // Own properties of Gee-0.8.Gee.AbstractMultiSet

    readonly gType: GObject.GType
    readonly gDupFunc: GObject.BoxedCopyFunc
    readonly gDestroyFunc: GLib.DestroyNotify

    // Own fields of Gee-0.8.Gee.AbstractMultiSet

    storageMap: Map

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
    getReadOnlyView(): MultiSet

    // Overloads of getReadOnlyView

    getReadOnlyView(): MultiSet
    getReadOnlyView(): Collection
    getReadOnlyView(...args: any[]): any
    getReadOnlyView(...args: any[]): MultiSet | Collection | any

    // Class property signals of Gee-0.8.Gee.AbstractMultiSet

    connect(sigName: "notify::g-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::g-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::g-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::g-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::g-type", ...args: any[]): void
    connect(sigName: "notify::g-dup-func", callback: (...args: any[]) => void): number
    on(sigName: "notify::g-dup-func", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::g-dup-func", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::g-dup-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::g-dup-func", ...args: any[]): void
    connect(sigName: "notify::g-destroy-func", callback: (...args: any[]) => void): number
    on(sigName: "notify::g-destroy-func", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::g-destroy-func", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::g-destroy-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::g-destroy-func", ...args: any[]): void
    connect(sigName: "notify::size", callback: (...args: any[]) => void): number
    on(sigName: "notify::size", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::size", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::read-only", callback: (...args: any[]) => void): number
    on(sigName: "notify::read-only", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::read-only", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::read-only", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::read-only", ...args: any[]): void
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

class AbstractMultiSet extends AbstractCollection {

    // Own properties of Gee-0.8.Gee.AbstractMultiSet

    static name: string
    static $gtype: GObject.GType<AbstractMultiSet>

    // Constructors of Gee-0.8.Gee.AbstractMultiSet

    constructor(config?: AbstractMultiSet_ConstructProps) 
    _init(config?: AbstractMultiSet_ConstructProps): void

    // Conflicting static methods

    static empty(...args: any[]): any
}

interface AbstractQueue_ConstructProps extends Queue_ConstructProps, AbstractCollection_ConstructProps {

    // Own constructor properties of Gee-0.8.Gee.AbstractQueue

    gType?: GObject.GType | null
    gDupFunc?: GObject.BoxedCopyFunc | null
    gDestroyFunc?: GLib.DestroyNotify | null
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

    peek(): object | null
    poll(): object | null
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
    getCapacity(): number
    getRemainingCapacity(): number
    getIsFull(): boolean

    // Class property signals of Gee-0.8.Gee.AbstractQueue

    connect(sigName: "notify::g-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::g-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::g-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::g-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::g-type", ...args: any[]): void
    connect(sigName: "notify::g-dup-func", callback: (...args: any[]) => void): number
    on(sigName: "notify::g-dup-func", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::g-dup-func", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::g-dup-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::g-dup-func", ...args: any[]): void
    connect(sigName: "notify::g-destroy-func", callback: (...args: any[]) => void): number
    on(sigName: "notify::g-destroy-func", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::g-destroy-func", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::g-destroy-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::g-destroy-func", ...args: any[]): void
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
    connect(sigName: "notify::read-only", callback: (...args: any[]) => void): number
    on(sigName: "notify::read-only", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::read-only", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::read-only", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::read-only", ...args: any[]): void
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

class AbstractQueue extends AbstractCollection {

    // Own properties of Gee-0.8.Gee.AbstractQueue

    static name: string
    static $gtype: GObject.GType<AbstractQueue>

    // Constructors of Gee-0.8.Gee.AbstractQueue

    constructor(config?: AbstractQueue_ConstructProps) 
    _init(config?: AbstractQueue_ConstructProps): void
}

interface AbstractSet_ConstructProps extends Set_ConstructProps, AbstractCollection_ConstructProps {

    // Own constructor properties of Gee-0.8.Gee.AbstractSet

    gType?: GObject.GType | null
    gDupFunc?: GObject.BoxedCopyFunc | null
    gDestroyFunc?: GLib.DestroyNotify | null
}

interface AbstractSet extends Set {

    // Own properties of Gee-0.8.Gee.AbstractSet

    readonly gType: GObject.GType
    readonly gDupFunc: GObject.BoxedCopyFunc
    readonly gDestroyFunc: GLib.DestroyNotify
    readonly readOnlyView: Set

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
    getReadOnlyView(): Set

    // Overloads of getReadOnlyView

    getReadOnlyView(): Set
    getReadOnlyView(): Collection
    getReadOnlyView(...args: any[]): any
    getReadOnlyView(...args: any[]): Set | Collection | any

    // Class property signals of Gee-0.8.Gee.AbstractSet

    connect(sigName: "notify::g-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::g-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::g-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::g-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::g-type", ...args: any[]): void
    connect(sigName: "notify::g-dup-func", callback: (...args: any[]) => void): number
    on(sigName: "notify::g-dup-func", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::g-dup-func", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::g-dup-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::g-dup-func", ...args: any[]): void
    connect(sigName: "notify::g-destroy-func", callback: (...args: any[]) => void): number
    on(sigName: "notify::g-destroy-func", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::g-destroy-func", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::g-destroy-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::g-destroy-func", ...args: any[]): void
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
    connect(sigName: "notify::read-only", callback: (...args: any[]) => void): number
    on(sigName: "notify::read-only", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::read-only", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::read-only", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::read-only", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class AbstractSet extends AbstractCollection {

    // Own properties of Gee-0.8.Gee.AbstractSet

    static name: string
    static $gtype: GObject.GType<AbstractSet>

    // Constructors of Gee-0.8.Gee.AbstractSet

    constructor(config?: AbstractSet_ConstructProps) 
    _init(config?: AbstractSet_ConstructProps): void

    // Conflicting static methods

    static empty(...args: any[]): any
}

interface AbstractSortedMap_ConstructProps extends SortedMap_ConstructProps, AbstractMap_ConstructProps {

    // Own constructor properties of Gee-0.8.Gee.AbstractSortedMap

    kType?: GObject.GType | null
    kDupFunc?: GObject.BoxedCopyFunc | null
    kDestroyFunc?: GLib.DestroyNotify | null
    vType?: GObject.GType | null
    vDupFunc?: GObject.BoxedCopyFunc | null
    vDestroyFunc?: GLib.DestroyNotify | null
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

    headMap(before: object | null): SortedMap
    tailMap(after: object | null): SortedMap
    subMap(before: object | null, after: object | null): SortedMap
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
    getAscendingKeys(): SortedSet
    getAscendingEntries(): SortedSet

    // Conflicting methods

    getReadOnlyView(...args: any[]): any
    vfuncGetReadOnlyView(...args: any[]): any

    // Class property signals of Gee-0.8.Gee.AbstractSortedMap

    connect(sigName: "notify::k-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::k-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::k-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::k-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::k-type", ...args: any[]): void
    connect(sigName: "notify::k-dup-func", callback: (...args: any[]) => void): number
    on(sigName: "notify::k-dup-func", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::k-dup-func", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::k-dup-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::k-dup-func", ...args: any[]): void
    connect(sigName: "notify::k-destroy-func", callback: (...args: any[]) => void): number
    on(sigName: "notify::k-destroy-func", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::k-destroy-func", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::k-destroy-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::k-destroy-func", ...args: any[]): void
    connect(sigName: "notify::v-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::v-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::v-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::v-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::v-type", ...args: any[]): void
    connect(sigName: "notify::v-dup-func", callback: (...args: any[]) => void): number
    on(sigName: "notify::v-dup-func", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::v-dup-func", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::v-dup-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::v-dup-func", ...args: any[]): void
    connect(sigName: "notify::v-destroy-func", callback: (...args: any[]) => void): number
    on(sigName: "notify::v-destroy-func", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::v-destroy-func", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::v-destroy-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::v-destroy-func", ...args: any[]): void
    connect(sigName: "notify::ascending-keys", callback: (...args: any[]) => void): number
    on(sigName: "notify::ascending-keys", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::ascending-keys", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::ascending-keys", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::ascending-keys", ...args: any[]): void
    connect(sigName: "notify::ascending-entries", callback: (...args: any[]) => void): number
    on(sigName: "notify::ascending-entries", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::ascending-entries", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::ascending-entries", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::ascending-entries", ...args: any[]): void
    connect(sigName: "notify::size", callback: (...args: any[]) => void): number
    on(sigName: "notify::size", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::size", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::read-only", callback: (...args: any[]) => void): number
    on(sigName: "notify::read-only", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::read-only", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::read-only", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::read-only", ...args: any[]): void
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

class AbstractSortedMap extends AbstractMap {

    // Own properties of Gee-0.8.Gee.AbstractSortedMap

    static name: string
    static $gtype: GObject.GType<AbstractSortedMap>

    // Constructors of Gee-0.8.Gee.AbstractSortedMap

    constructor(config?: AbstractSortedMap_ConstructProps) 
    _init(config?: AbstractSortedMap_ConstructProps): void
}

interface AbstractSortedSet_ConstructProps extends SortedSet_ConstructProps, AbstractSet_ConstructProps {

    // Own constructor properties of Gee-0.8.Gee.AbstractSortedSet

    gType?: GObject.GType | null
    gDupFunc?: GObject.BoxedCopyFunc | null
    gDestroyFunc?: GLib.DestroyNotify | null
}

interface AbstractSortedSet extends SortedSet {

    // Own properties of Gee-0.8.Gee.AbstractSortedSet

    readonly gType: GObject.GType
    readonly gDupFunc: GObject.BoxedCopyFunc
    readonly gDestroyFunc: GLib.DestroyNotify
    readonly readOnlyView: SortedSet

    // Owm methods of Gee-0.8.Gee.AbstractSortedSet

    first(): object | null
    last(): object | null
    iteratorAt(element: object | null): Iterator | null
    lower(element: object | null): object | null
    higher(element: object | null): object | null
    floor(element: object | null): object | null
    ceil(element: object | null): object | null
    headSet(before: object | null): SortedSet
    tailSet(after: object | null): SortedSet
    subSet(from: object | null, to: object | null): SortedSet
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
    getReadOnlyView(): SortedSet

    // Overloads of getReadOnlyView

    getReadOnlyView(): SortedSet
    getReadOnlyView(): Set
    getReadOnlyView(): Collection
    getReadOnlyView(...args: any[]): any
    getReadOnlyView(...args: any[]): SortedSet | Set | Collection | any

    // Class property signals of Gee-0.8.Gee.AbstractSortedSet

    connect(sigName: "notify::g-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::g-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::g-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::g-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::g-type", ...args: any[]): void
    connect(sigName: "notify::g-dup-func", callback: (...args: any[]) => void): number
    on(sigName: "notify::g-dup-func", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::g-dup-func", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::g-dup-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::g-dup-func", ...args: any[]): void
    connect(sigName: "notify::g-destroy-func", callback: (...args: any[]) => void): number
    on(sigName: "notify::g-destroy-func", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::g-destroy-func", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::g-destroy-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::g-destroy-func", ...args: any[]): void
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
    connect(sigName: "notify::read-only", callback: (...args: any[]) => void): number
    on(sigName: "notify::read-only", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::read-only", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::read-only", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::read-only", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class AbstractSortedSet extends AbstractSet {

    // Own properties of Gee-0.8.Gee.AbstractSortedSet

    static name: string
    static $gtype: GObject.GType<AbstractSortedSet>

    // Constructors of Gee-0.8.Gee.AbstractSortedSet

    constructor(config?: AbstractSortedSet_ConstructProps) 
    _init(config?: AbstractSortedSet_ConstructProps): void

    // Conflicting static methods

    static empty(...args: any[]): any
}

interface ArrayList_ConstructProps extends AbstractBidirList_ConstructProps {

    // Own constructor properties of Gee-0.8.Gee.ArrayList

    gType?: GObject.GType | null
    gDupFunc?: GObject.BoxedCopyFunc | null
    gDestroyFunc?: GLib.DestroyNotify | null
}

interface ArrayList {

    // Own properties of Gee-0.8.Gee.ArrayList

    readonly gType: GObject.GType
    readonly gDupFunc: GObject.BoxedCopyFunc
    readonly gDestroyFunc: GLib.DestroyNotify

    // Conflicting properties

    readOnlyView: any

    // Own fields of Gee-0.8.Gee.ArrayList

    items: object[]
    itemsLength1: number
    size: number

    // Owm methods of Gee-0.8.Gee.ArrayList

    addAll(collection: Collection): boolean
    getEqualFunc(): [ /* returnType */ EqualDataFunc, /* resultTarget */ object ]

    // Conflicting methods

    getReadOnlyView(...args: any[]): any
    vfuncGetReadOnlyView(...args: any[]): any

    // Class property signals of Gee-0.8.Gee.ArrayList

    connect(sigName: "notify::g-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::g-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::g-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::g-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::g-type", ...args: any[]): void
    connect(sigName: "notify::g-dup-func", callback: (...args: any[]) => void): number
    on(sigName: "notify::g-dup-func", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::g-dup-func", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::g-dup-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::g-dup-func", ...args: any[]): void
    connect(sigName: "notify::g-destroy-func", callback: (...args: any[]) => void): number
    on(sigName: "notify::g-destroy-func", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::g-destroy-func", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::g-destroy-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::g-destroy-func", ...args: any[]): void
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
    connect(sigName: "notify::read-only", callback: (...args: any[]) => void): number
    on(sigName: "notify::read-only", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::read-only", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::read-only", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::read-only", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class ArrayList extends AbstractBidirList {

    // Own properties of Gee-0.8.Gee.ArrayList

    static name: string
    static $gtype: GObject.GType<ArrayList>

    // Constructors of Gee-0.8.Gee.ArrayList

    constructor(config?: ArrayList_ConstructProps) 
    constructor(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, equalFunc: EqualDataFunc | null) 
    static new(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, equalFunc: EqualDataFunc | null): ArrayList
    static wrap(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, items: object[], equalFunc: EqualDataFunc | null): ArrayList
    _init(config?: ArrayList_ConstructProps): void

    // Conflicting static methods

    static empty(...args: any[]): any
}

interface ArrayQueue_ConstructProps extends Deque_ConstructProps, AbstractQueue_ConstructProps {

    // Own constructor properties of Gee-0.8.Gee.ArrayQueue

    gType?: GObject.GType | null
    gDupFunc?: GObject.BoxedCopyFunc | null
    gDestroyFunc?: GLib.DestroyNotify | null
}

interface ArrayQueue extends Deque {

    // Own properties of Gee-0.8.Gee.ArrayQueue

    readonly gType: GObject.GType
    readonly gDupFunc: GObject.BoxedCopyFunc
    readonly gDestroyFunc: GLib.DestroyNotify
    readonly isEmpty: boolean

    // Owm methods of Gee-0.8.Gee.ArrayQueue

    getEqualFunc(): [ /* returnType */ EqualDataFunc, /* resultTarget */ object ]
    getIsEmpty(): boolean

    // Class property signals of Gee-0.8.Gee.ArrayQueue

    connect(sigName: "notify::g-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::g-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::g-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::g-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::g-type", ...args: any[]): void
    connect(sigName: "notify::g-dup-func", callback: (...args: any[]) => void): number
    on(sigName: "notify::g-dup-func", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::g-dup-func", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::g-dup-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::g-dup-func", ...args: any[]): void
    connect(sigName: "notify::g-destroy-func", callback: (...args: any[]) => void): number
    on(sigName: "notify::g-destroy-func", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::g-destroy-func", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::g-destroy-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::g-destroy-func", ...args: any[]): void
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
    connect(sigName: "notify::size", callback: (...args: any[]) => void): number
    on(sigName: "notify::size", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::size", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::read-only", callback: (...args: any[]) => void): number
    on(sigName: "notify::read-only", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::read-only", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::read-only", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::read-only", ...args: any[]): void
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

class ArrayQueue extends AbstractQueue {

    // Own properties of Gee-0.8.Gee.ArrayQueue

    static name: string
    static $gtype: GObject.GType<ArrayQueue>

    // Constructors of Gee-0.8.Gee.ArrayQueue

    constructor(config?: ArrayQueue_ConstructProps) 
    constructor(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, equalFunc: EqualDataFunc | null) 
    static new(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, equalFunc: EqualDataFunc | null): ArrayQueue
    _init(config?: ArrayQueue_ConstructProps): void
}

interface ConcurrentList_ConstructProps extends AbstractList_ConstructProps {

    // Own constructor properties of Gee-0.8.Gee.ConcurrentList

    gType?: GObject.GType | null
    gDupFunc?: GObject.BoxedCopyFunc | null
    gDestroyFunc?: GLib.DestroyNotify | null
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

    getEqualFunc(): [ /* returnType */ EqualDataFunc, /* resultTarget */ object ]
    getIsEmpty(): boolean

    // Conflicting methods

    getReadOnlyView(...args: any[]): any
    vfuncGetReadOnlyView(...args: any[]): any

    // Class property signals of Gee-0.8.Gee.ConcurrentList

    connect(sigName: "notify::g-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::g-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::g-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::g-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::g-type", ...args: any[]): void
    connect(sigName: "notify::g-dup-func", callback: (...args: any[]) => void): number
    on(sigName: "notify::g-dup-func", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::g-dup-func", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::g-dup-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::g-dup-func", ...args: any[]): void
    connect(sigName: "notify::g-destroy-func", callback: (...args: any[]) => void): number
    on(sigName: "notify::g-destroy-func", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::g-destroy-func", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::g-destroy-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::g-destroy-func", ...args: any[]): void
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
    connect(sigName: "notify::size", callback: (...args: any[]) => void): number
    on(sigName: "notify::size", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::size", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::read-only", callback: (...args: any[]) => void): number
    on(sigName: "notify::read-only", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::read-only", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::read-only", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::read-only", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class ConcurrentList extends AbstractList {

    // Own properties of Gee-0.8.Gee.ConcurrentList

    static name: string
    static $gtype: GObject.GType<ConcurrentList>

    // Constructors of Gee-0.8.Gee.ConcurrentList

    constructor(config?: ConcurrentList_ConstructProps) 
    constructor(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, equalFunc: EqualDataFunc | null) 
    static new(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, equalFunc: EqualDataFunc | null): ConcurrentList
    _init(config?: ConcurrentList_ConstructProps): void

    // Conflicting static methods

    static empty(...args: any[]): any
}

interface ConcurrentSet_ConstructProps extends AbstractSortedSet_ConstructProps {

    // Own constructor properties of Gee-0.8.Gee.ConcurrentSet

    gType?: GObject.GType | null
    gDupFunc?: GObject.BoxedCopyFunc | null
    gDestroyFunc?: GLib.DestroyNotify | null
}

interface ConcurrentSet {

    // Own properties of Gee-0.8.Gee.ConcurrentSet

    readonly gType: GObject.GType
    readonly gDupFunc: GObject.BoxedCopyFunc
    readonly gDestroyFunc: GLib.DestroyNotify

    // Conflicting properties

    readOnlyView: any

    // Conflicting methods

    getReadOnlyView(...args: any[]): any
    vfuncGetReadOnlyView(...args: any[]): any

    // Class property signals of Gee-0.8.Gee.ConcurrentSet

    connect(sigName: "notify::g-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::g-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::g-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::g-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::g-type", ...args: any[]): void
    connect(sigName: "notify::g-dup-func", callback: (...args: any[]) => void): number
    on(sigName: "notify::g-dup-func", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::g-dup-func", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::g-dup-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::g-dup-func", ...args: any[]): void
    connect(sigName: "notify::g-destroy-func", callback: (...args: any[]) => void): number
    on(sigName: "notify::g-destroy-func", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::g-destroy-func", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::g-destroy-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::g-destroy-func", ...args: any[]): void
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
    connect(sigName: "notify::read-only", callback: (...args: any[]) => void): number
    on(sigName: "notify::read-only", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::read-only", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::read-only", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::read-only", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class ConcurrentSet extends AbstractSortedSet {

    // Own properties of Gee-0.8.Gee.ConcurrentSet

    static name: string
    static $gtype: GObject.GType<ConcurrentSet>

    // Constructors of Gee-0.8.Gee.ConcurrentSet

    constructor(config?: ConcurrentSet_ConstructProps) 
    constructor(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, compareFunc: GLib.CompareDataFunc | null) 
    static new(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, compareFunc: GLib.CompareDataFunc | null): ConcurrentSet
    _init(config?: ConcurrentSet_ConstructProps): void

    // Conflicting static methods

    static empty(...args: any[]): any
}

interface HashMap_ConstructProps extends AbstractMap_ConstructProps {

    // Own constructor properties of Gee-0.8.Gee.HashMap

    kType?: GObject.GType | null
    kDupFunc?: GObject.BoxedCopyFunc | null
    kDestroyFunc?: GLib.DestroyNotify | null
    vType?: GObject.GType | null
    vDupFunc?: GObject.BoxedCopyFunc | null
    vDestroyFunc?: GLib.DestroyNotify | null
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

    getKeyHashFunc(): [ /* returnType */ HashDataFunc, /* resultTarget */ object ]
    getKeyEqualFunc(): [ /* returnType */ EqualDataFunc, /* resultTarget */ object ]
    getValueEqualFunc(): [ /* returnType */ EqualDataFunc, /* resultTarget */ object ]

    // Class property signals of Gee-0.8.Gee.HashMap

    connect(sigName: "notify::k-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::k-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::k-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::k-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::k-type", ...args: any[]): void
    connect(sigName: "notify::k-dup-func", callback: (...args: any[]) => void): number
    on(sigName: "notify::k-dup-func", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::k-dup-func", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::k-dup-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::k-dup-func", ...args: any[]): void
    connect(sigName: "notify::k-destroy-func", callback: (...args: any[]) => void): number
    on(sigName: "notify::k-destroy-func", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::k-destroy-func", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::k-destroy-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::k-destroy-func", ...args: any[]): void
    connect(sigName: "notify::v-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::v-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::v-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::v-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::v-type", ...args: any[]): void
    connect(sigName: "notify::v-dup-func", callback: (...args: any[]) => void): number
    on(sigName: "notify::v-dup-func", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::v-dup-func", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::v-dup-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::v-dup-func", ...args: any[]): void
    connect(sigName: "notify::v-destroy-func", callback: (...args: any[]) => void): number
    on(sigName: "notify::v-destroy-func", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::v-destroy-func", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::v-destroy-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::v-destroy-func", ...args: any[]): void
    connect(sigName: "notify::size", callback: (...args: any[]) => void): number
    on(sigName: "notify::size", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::size", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::read-only", callback: (...args: any[]) => void): number
    on(sigName: "notify::read-only", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::read-only", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::read-only", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::read-only", ...args: any[]): void
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

    // Own properties of Gee-0.8.Gee.HashMap

    static name: string
    static $gtype: GObject.GType<HashMap>

    // Constructors of Gee-0.8.Gee.HashMap

    constructor(config?: HashMap_ConstructProps) 
    constructor(kType: GObject.GType, kDupFunc: GObject.BoxedCopyFunc, kDestroyFunc: GLib.DestroyNotify, vType: GObject.GType, vDupFunc: GObject.BoxedCopyFunc, vDestroyFunc: GLib.DestroyNotify, keyHashFunc: HashDataFunc | null, keyEqualFunc: EqualDataFunc | null, valueEqualFunc: EqualDataFunc | null) 
    static new(kType: GObject.GType, kDupFunc: GObject.BoxedCopyFunc, kDestroyFunc: GLib.DestroyNotify, vType: GObject.GType, vDupFunc: GObject.BoxedCopyFunc, vDestroyFunc: GLib.DestroyNotify, keyHashFunc: HashDataFunc | null, keyEqualFunc: EqualDataFunc | null, valueEqualFunc: EqualDataFunc | null): HashMap
    _init(config?: HashMap_ConstructProps): void
}

interface HashMultiMap_ConstructProps extends AbstractMultiMap_ConstructProps {

    // Own constructor properties of Gee-0.8.Gee.HashMultiMap

    kType?: GObject.GType | null
    kDupFunc?: GObject.BoxedCopyFunc | null
    kDestroyFunc?: GLib.DestroyNotify | null
    vType?: GObject.GType | null
    vDupFunc?: GObject.BoxedCopyFunc | null
    vDestroyFunc?: GLib.DestroyNotify | null
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

    getKeyHashFunc(): [ /* returnType */ HashDataFunc, /* resultTarget */ object ]
    getKeyEqualFunc(): [ /* returnType */ EqualDataFunc, /* resultTarget */ object ]
    getValueHashFunc(): [ /* returnType */ HashDataFunc, /* resultTarget */ object ]
    getValueEqualFunc(): [ /* returnType */ EqualDataFunc, /* resultTarget */ object ]

    // Overloads of getValueEqualFunc

    getValueEqualFunc(): [ /* returnType */ EqualDataFunc, /* resultTarget */ object, /* resultTargetDestroyNotify */ GLib.DestroyNotify ]
    getValueEqualFunc(...args: any[]): any
    getValueEqualFunc(...args: any[]): [ /* returnType */ EqualDataFunc | any, /* resultTarget */ object, /* resultTargetDestroyNotify */ GLib.DestroyNotify ]

    // Class property signals of Gee-0.8.Gee.HashMultiMap

    connect(sigName: "notify::k-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::k-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::k-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::k-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::k-type", ...args: any[]): void
    connect(sigName: "notify::k-dup-func", callback: (...args: any[]) => void): number
    on(sigName: "notify::k-dup-func", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::k-dup-func", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::k-dup-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::k-dup-func", ...args: any[]): void
    connect(sigName: "notify::k-destroy-func", callback: (...args: any[]) => void): number
    on(sigName: "notify::k-destroy-func", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::k-destroy-func", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::k-destroy-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::k-destroy-func", ...args: any[]): void
    connect(sigName: "notify::v-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::v-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::v-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::v-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::v-type", ...args: any[]): void
    connect(sigName: "notify::v-dup-func", callback: (...args: any[]) => void): number
    on(sigName: "notify::v-dup-func", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::v-dup-func", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::v-dup-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::v-dup-func", ...args: any[]): void
    connect(sigName: "notify::v-destroy-func", callback: (...args: any[]) => void): number
    on(sigName: "notify::v-destroy-func", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::v-destroy-func", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::v-destroy-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::v-destroy-func", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class HashMultiMap extends AbstractMultiMap {

    // Own properties of Gee-0.8.Gee.HashMultiMap

    static name: string
    static $gtype: GObject.GType<HashMultiMap>

    // Constructors of Gee-0.8.Gee.HashMultiMap

    constructor(config?: HashMultiMap_ConstructProps) 
    constructor(kType: GObject.GType, kDupFunc: GObject.BoxedCopyFunc, kDestroyFunc: GLib.DestroyNotify, vType: GObject.GType, vDupFunc: GObject.BoxedCopyFunc, vDestroyFunc: GLib.DestroyNotify, keyHashFunc: HashDataFunc | null, keyEqualFunc: EqualDataFunc | null, valueHashFunc: HashDataFunc | null, valueEqualFunc: EqualDataFunc | null) 
    static new(kType: GObject.GType, kDupFunc: GObject.BoxedCopyFunc, kDestroyFunc: GLib.DestroyNotify, vType: GObject.GType, vDupFunc: GObject.BoxedCopyFunc, vDestroyFunc: GLib.DestroyNotify, keyHashFunc: HashDataFunc | null, keyEqualFunc: EqualDataFunc | null, valueHashFunc: HashDataFunc | null, valueEqualFunc: EqualDataFunc | null): HashMultiMap
    _init(config?: HashMultiMap_ConstructProps): void
}

interface HashMultiSet_ConstructProps extends AbstractMultiSet_ConstructProps {

    // Own constructor properties of Gee-0.8.Gee.HashMultiSet

    gType?: GObject.GType | null
    gDupFunc?: GObject.BoxedCopyFunc | null
    gDestroyFunc?: GLib.DestroyNotify | null
}

interface HashMultiSet {

    // Own properties of Gee-0.8.Gee.HashMultiSet

    readonly gType: GObject.GType
    readonly gDupFunc: GObject.BoxedCopyFunc
    readonly gDestroyFunc: GLib.DestroyNotify

    // Owm methods of Gee-0.8.Gee.HashMultiSet

    getHashFunc(): [ /* returnType */ HashDataFunc, /* resultTarget */ object ]
    getEqualFunc(): [ /* returnType */ EqualDataFunc, /* resultTarget */ object ]

    // Conflicting methods

    getReadOnlyView(...args: any[]): any
    vfuncGetReadOnlyView(...args: any[]): any

    // Class property signals of Gee-0.8.Gee.HashMultiSet

    connect(sigName: "notify::g-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::g-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::g-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::g-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::g-type", ...args: any[]): void
    connect(sigName: "notify::g-dup-func", callback: (...args: any[]) => void): number
    on(sigName: "notify::g-dup-func", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::g-dup-func", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::g-dup-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::g-dup-func", ...args: any[]): void
    connect(sigName: "notify::g-destroy-func", callback: (...args: any[]) => void): number
    on(sigName: "notify::g-destroy-func", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::g-destroy-func", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::g-destroy-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::g-destroy-func", ...args: any[]): void
    connect(sigName: "notify::size", callback: (...args: any[]) => void): number
    on(sigName: "notify::size", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::size", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::read-only", callback: (...args: any[]) => void): number
    on(sigName: "notify::read-only", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::read-only", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::read-only", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::read-only", ...args: any[]): void
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

    // Own properties of Gee-0.8.Gee.HashMultiSet

    static name: string
    static $gtype: GObject.GType<HashMultiSet>

    // Constructors of Gee-0.8.Gee.HashMultiSet

    constructor(config?: HashMultiSet_ConstructProps) 
    constructor(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, hashFunc: HashDataFunc | null, equalFunc: EqualDataFunc | null) 
    static new(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, hashFunc: HashDataFunc | null, equalFunc: EqualDataFunc | null): HashMultiSet
    static broken(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, hashFunc: HashDataFunc | null, equalFunc: EqualDataFunc | null): HashMultiSet
    _init(config?: HashMultiSet_ConstructProps): void

    // Conflicting static methods

    static empty(...args: any[]): any
}

interface HashSet_ConstructProps extends AbstractSet_ConstructProps {

    // Own constructor properties of Gee-0.8.Gee.HashSet

    gType?: GObject.GType | null
    gDupFunc?: GObject.BoxedCopyFunc | null
    gDestroyFunc?: GLib.DestroyNotify | null
}

interface HashSet {

    // Own properties of Gee-0.8.Gee.HashSet

    readonly gType: GObject.GType
    readonly gDupFunc: GObject.BoxedCopyFunc
    readonly gDestroyFunc: GLib.DestroyNotify

    // Conflicting properties

    readOnlyView: any

    // Owm methods of Gee-0.8.Gee.HashSet

    getHashFunc(): [ /* returnType */ HashDataFunc, /* resultTarget */ object ]
    getEqualFunc(): [ /* returnType */ EqualDataFunc, /* resultTarget */ object ]

    // Conflicting methods

    getReadOnlyView(...args: any[]): any
    vfuncGetReadOnlyView(...args: any[]): any

    // Class property signals of Gee-0.8.Gee.HashSet

    connect(sigName: "notify::g-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::g-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::g-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::g-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::g-type", ...args: any[]): void
    connect(sigName: "notify::g-dup-func", callback: (...args: any[]) => void): number
    on(sigName: "notify::g-dup-func", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::g-dup-func", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::g-dup-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::g-dup-func", ...args: any[]): void
    connect(sigName: "notify::g-destroy-func", callback: (...args: any[]) => void): number
    on(sigName: "notify::g-destroy-func", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::g-destroy-func", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::g-destroy-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::g-destroy-func", ...args: any[]): void
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
    connect(sigName: "notify::read-only", callback: (...args: any[]) => void): number
    on(sigName: "notify::read-only", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::read-only", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::read-only", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::read-only", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class HashSet extends AbstractSet {

    // Own properties of Gee-0.8.Gee.HashSet

    static name: string
    static $gtype: GObject.GType<HashSet>

    // Constructors of Gee-0.8.Gee.HashSet

    constructor(config?: HashSet_ConstructProps) 
    constructor(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, hashFunc: HashDataFunc | null, equalFunc: EqualDataFunc | null) 
    static new(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, hashFunc: HashDataFunc | null, equalFunc: EqualDataFunc | null): HashSet
    _init(config?: HashSet_ConstructProps): void

    // Conflicting static methods

    static empty(...args: any[]): any
}

interface Lazy {

    // Own fields of Gee-0.8.Gee.Lazy

    refCount: number

    // Owm methods of Gee-0.8.Gee.Lazy

    eval(): void
    get(): object | null
    getValue(): object | null
    getFuture(): Future | null
}

class Lazy {

    // Own properties of Gee-0.8.Gee.Lazy

    static name: string

    // Constructors of Gee-0.8.Gee.Lazy

    constructor(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, func: LazyFunc) 
    static new(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, func: LazyFunc): Lazy
    static fromValue(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, item: object | null): Lazy
}

interface LinkedList_ConstructProps extends Queue_ConstructProps, Deque_ConstructProps, AbstractBidirList_ConstructProps {

    // Own constructor properties of Gee-0.8.Gee.LinkedList

    gType?: GObject.GType | null
    gDupFunc?: GObject.BoxedCopyFunc | null
    gDestroyFunc?: GLib.DestroyNotify | null
}

interface LinkedList extends Queue, Deque {

    // Own properties of Gee-0.8.Gee.LinkedList

    readonly gType: GObject.GType
    readonly gDupFunc: GObject.BoxedCopyFunc
    readonly gDestroyFunc: GLib.DestroyNotify

    // Conflicting properties

    readOnlyView: any

    // Owm methods of Gee-0.8.Gee.LinkedList

    first(): object | null
    last(): object | null
    getEqualFunc(): [ /* returnType */ EqualDataFunc, /* resultTarget */ object ]

    // Conflicting methods

    getReadOnlyView(...args: any[]): any
    vfuncGetReadOnlyView(...args: any[]): any

    // Class property signals of Gee-0.8.Gee.LinkedList

    connect(sigName: "notify::g-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::g-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::g-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::g-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::g-type", ...args: any[]): void
    connect(sigName: "notify::g-dup-func", callback: (...args: any[]) => void): number
    on(sigName: "notify::g-dup-func", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::g-dup-func", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::g-dup-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::g-dup-func", ...args: any[]): void
    connect(sigName: "notify::g-destroy-func", callback: (...args: any[]) => void): number
    on(sigName: "notify::g-destroy-func", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::g-destroy-func", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::g-destroy-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::g-destroy-func", ...args: any[]): void
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
    connect(sigName: "notify::read-only", callback: (...args: any[]) => void): number
    on(sigName: "notify::read-only", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::read-only", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::read-only", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::read-only", ...args: any[]): void
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
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class LinkedList extends AbstractBidirList {

    // Own properties of Gee-0.8.Gee.LinkedList

    static name: string
    static $gtype: GObject.GType<LinkedList>

    // Constructors of Gee-0.8.Gee.LinkedList

    constructor(config?: LinkedList_ConstructProps) 
    constructor(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, equalFunc: EqualDataFunc | null) 
    static new(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, equalFunc: EqualDataFunc | null): LinkedList
    _init(config?: LinkedList_ConstructProps): void

    // Conflicting static methods

    static empty(...args: any[]): any
}

interface PriorityQueue_ConstructProps extends AbstractQueue_ConstructProps {

    // Own constructor properties of Gee-0.8.Gee.PriorityQueue

    gType?: GObject.GType | null
    gDupFunc?: GObject.BoxedCopyFunc | null
    gDestroyFunc?: GLib.DestroyNotify | null
}

interface PriorityQueue {

    // Own properties of Gee-0.8.Gee.PriorityQueue

    readonly gType: GObject.GType
    readonly gDupFunc: GObject.BoxedCopyFunc
    readonly gDestroyFunc: GLib.DestroyNotify

    // Owm methods of Gee-0.8.Gee.PriorityQueue

    offer(element?: object | null): boolean
    drain(recipient: Collection, amount: number): number
    getCompareFunc(): [ /* returnType */ GLib.CompareDataFunc, /* resultTarget */ object ]

    // Class property signals of Gee-0.8.Gee.PriorityQueue

    connect(sigName: "notify::g-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::g-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::g-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::g-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::g-type", ...args: any[]): void
    connect(sigName: "notify::g-dup-func", callback: (...args: any[]) => void): number
    on(sigName: "notify::g-dup-func", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::g-dup-func", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::g-dup-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::g-dup-func", ...args: any[]): void
    connect(sigName: "notify::g-destroy-func", callback: (...args: any[]) => void): number
    on(sigName: "notify::g-destroy-func", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::g-destroy-func", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::g-destroy-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::g-destroy-func", ...args: any[]): void
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
    connect(sigName: "notify::read-only", callback: (...args: any[]) => void): number
    on(sigName: "notify::read-only", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::read-only", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::read-only", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::read-only", ...args: any[]): void
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

    // Own properties of Gee-0.8.Gee.PriorityQueue

    static name: string
    static $gtype: GObject.GType<PriorityQueue>

    // Constructors of Gee-0.8.Gee.PriorityQueue

    constructor(config?: PriorityQueue_ConstructProps) 
    constructor(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, compareFunc: GLib.CompareDataFunc | null) 
    static new(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, compareFunc: GLib.CompareDataFunc | null): PriorityQueue
    _init(config?: PriorityQueue_ConstructProps): void
}

interface Promise {

    // Own fields of Gee-0.8.Gee.Promise

    refCount: number

    // Owm methods of Gee-0.8.Gee.Promise

    setValue(value: object | null): void
    setException(exception: GLib.Error): void
    getFuture(): Future
}

class Promise {

    // Own properties of Gee-0.8.Gee.Promise

    static name: string

    // Constructors of Gee-0.8.Gee.Promise

    constructor(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify) 
    static new(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify): Promise
}

interface TreeMap_ConstructProps extends AbstractBidirSortedMap_ConstructProps {

    // Own constructor properties of Gee-0.8.Gee.TreeMap

    kType?: GObject.GType | null
    kDupFunc?: GObject.BoxedCopyFunc | null
    kDestroyFunc?: GLib.DestroyNotify | null
    vType?: GObject.GType | null
    vDupFunc?: GObject.BoxedCopyFunc | null
    vDestroyFunc?: GLib.DestroyNotify | null
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

    getKeyCompareFunc(): [ /* returnType */ GLib.CompareDataFunc, /* resultTarget */ object ]
    getValueEqualFunc(): [ /* returnType */ EqualDataFunc, /* resultTarget */ object ]

    // Conflicting methods

    getReadOnlyView(...args: any[]): any
    vfuncGetReadOnlyView(...args: any[]): any

    // Class property signals of Gee-0.8.Gee.TreeMap

    connect(sigName: "notify::k-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::k-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::k-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::k-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::k-type", ...args: any[]): void
    connect(sigName: "notify::k-dup-func", callback: (...args: any[]) => void): number
    on(sigName: "notify::k-dup-func", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::k-dup-func", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::k-dup-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::k-dup-func", ...args: any[]): void
    connect(sigName: "notify::k-destroy-func", callback: (...args: any[]) => void): number
    on(sigName: "notify::k-destroy-func", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::k-destroy-func", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::k-destroy-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::k-destroy-func", ...args: any[]): void
    connect(sigName: "notify::v-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::v-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::v-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::v-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::v-type", ...args: any[]): void
    connect(sigName: "notify::v-dup-func", callback: (...args: any[]) => void): number
    on(sigName: "notify::v-dup-func", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::v-dup-func", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::v-dup-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::v-dup-func", ...args: any[]): void
    connect(sigName: "notify::v-destroy-func", callback: (...args: any[]) => void): number
    on(sigName: "notify::v-destroy-func", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::v-destroy-func", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::v-destroy-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::v-destroy-func", ...args: any[]): void
    connect(sigName: "notify::read-only-view", callback: (...args: any[]) => void): number
    on(sigName: "notify::read-only-view", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::read-only-view", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::read-only-view", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::read-only-view", ...args: any[]): void
    connect(sigName: "notify::ascending-keys", callback: (...args: any[]) => void): number
    on(sigName: "notify::ascending-keys", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::ascending-keys", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::ascending-keys", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::ascending-keys", ...args: any[]): void
    connect(sigName: "notify::ascending-entries", callback: (...args: any[]) => void): number
    on(sigName: "notify::ascending-entries", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::ascending-entries", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::ascending-entries", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::ascending-entries", ...args: any[]): void
    connect(sigName: "notify::size", callback: (...args: any[]) => void): number
    on(sigName: "notify::size", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::size", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::read-only", callback: (...args: any[]) => void): number
    on(sigName: "notify::read-only", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::read-only", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::read-only", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::read-only", ...args: any[]): void
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
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class TreeMap extends AbstractBidirSortedMap {

    // Own properties of Gee-0.8.Gee.TreeMap

    static name: string
    static $gtype: GObject.GType<TreeMap>

    // Constructors of Gee-0.8.Gee.TreeMap

    constructor(config?: TreeMap_ConstructProps) 
    constructor(kType: GObject.GType, kDupFunc: GObject.BoxedCopyFunc, kDestroyFunc: GLib.DestroyNotify, vType: GObject.GType, vDupFunc: GObject.BoxedCopyFunc, vDestroyFunc: GLib.DestroyNotify, keyCompareFunc: GLib.CompareDataFunc | null, valueEqualFunc: EqualDataFunc | null) 
    static new(kType: GObject.GType, kDupFunc: GObject.BoxedCopyFunc, kDestroyFunc: GLib.DestroyNotify, vType: GObject.GType, vDupFunc: GObject.BoxedCopyFunc, vDestroyFunc: GLib.DestroyNotify, keyCompareFunc: GLib.CompareDataFunc | null, valueEqualFunc: EqualDataFunc | null): TreeMap
    _init(config?: TreeMap_ConstructProps): void

    // Conflicting static methods

    static empty(...args: any[]): any
}

interface TreeMultiMap_ConstructProps extends AbstractMultiMap_ConstructProps {

    // Own constructor properties of Gee-0.8.Gee.TreeMultiMap

    kType?: GObject.GType | null
    kDupFunc?: GObject.BoxedCopyFunc | null
    kDestroyFunc?: GLib.DestroyNotify | null
    vType?: GObject.GType | null
    vDupFunc?: GObject.BoxedCopyFunc | null
    vDestroyFunc?: GLib.DestroyNotify | null
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

    getKeyCompareFunc(): [ /* returnType */ GLib.CompareDataFunc, /* resultTarget */ object ]
    getValueCompareFunc(): [ /* returnType */ GLib.CompareDataFunc, /* resultTarget */ object ]

    // Class property signals of Gee-0.8.Gee.TreeMultiMap

    connect(sigName: "notify::k-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::k-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::k-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::k-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::k-type", ...args: any[]): void
    connect(sigName: "notify::k-dup-func", callback: (...args: any[]) => void): number
    on(sigName: "notify::k-dup-func", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::k-dup-func", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::k-dup-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::k-dup-func", ...args: any[]): void
    connect(sigName: "notify::k-destroy-func", callback: (...args: any[]) => void): number
    on(sigName: "notify::k-destroy-func", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::k-destroy-func", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::k-destroy-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::k-destroy-func", ...args: any[]): void
    connect(sigName: "notify::v-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::v-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::v-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::v-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::v-type", ...args: any[]): void
    connect(sigName: "notify::v-dup-func", callback: (...args: any[]) => void): number
    on(sigName: "notify::v-dup-func", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::v-dup-func", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::v-dup-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::v-dup-func", ...args: any[]): void
    connect(sigName: "notify::v-destroy-func", callback: (...args: any[]) => void): number
    on(sigName: "notify::v-destroy-func", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::v-destroy-func", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::v-destroy-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::v-destroy-func", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class TreeMultiMap extends AbstractMultiMap {

    // Own properties of Gee-0.8.Gee.TreeMultiMap

    static name: string
    static $gtype: GObject.GType<TreeMultiMap>

    // Constructors of Gee-0.8.Gee.TreeMultiMap

    constructor(config?: TreeMultiMap_ConstructProps) 
    constructor(kType: GObject.GType, kDupFunc: GObject.BoxedCopyFunc, kDestroyFunc: GLib.DestroyNotify, vType: GObject.GType, vDupFunc: GObject.BoxedCopyFunc, vDestroyFunc: GLib.DestroyNotify, keyCompareFunc: GLib.CompareDataFunc | null, valueCompareFunc: GLib.CompareDataFunc | null) 
    static new(kType: GObject.GType, kDupFunc: GObject.BoxedCopyFunc, kDestroyFunc: GLib.DestroyNotify, vType: GObject.GType, vDupFunc: GObject.BoxedCopyFunc, vDestroyFunc: GLib.DestroyNotify, keyCompareFunc: GLib.CompareDataFunc | null, valueCompareFunc: GLib.CompareDataFunc | null): TreeMultiMap
    _init(config?: TreeMultiMap_ConstructProps): void
}

interface TreeMultiSet_ConstructProps extends AbstractMultiSet_ConstructProps {

    // Own constructor properties of Gee-0.8.Gee.TreeMultiSet

    gType?: GObject.GType | null
    gDupFunc?: GObject.BoxedCopyFunc | null
    gDestroyFunc?: GLib.DestroyNotify | null
}

interface TreeMultiSet {

    // Own properties of Gee-0.8.Gee.TreeMultiSet

    readonly gType: GObject.GType
    readonly gDupFunc: GObject.BoxedCopyFunc
    readonly gDestroyFunc: GLib.DestroyNotify

    // Owm methods of Gee-0.8.Gee.TreeMultiSet

    getCompareFunc(): [ /* returnType */ GLib.CompareDataFunc, /* resultTarget */ object ]

    // Conflicting methods

    getReadOnlyView(...args: any[]): any
    vfuncGetReadOnlyView(...args: any[]): any

    // Class property signals of Gee-0.8.Gee.TreeMultiSet

    connect(sigName: "notify::g-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::g-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::g-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::g-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::g-type", ...args: any[]): void
    connect(sigName: "notify::g-dup-func", callback: (...args: any[]) => void): number
    on(sigName: "notify::g-dup-func", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::g-dup-func", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::g-dup-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::g-dup-func", ...args: any[]): void
    connect(sigName: "notify::g-destroy-func", callback: (...args: any[]) => void): number
    on(sigName: "notify::g-destroy-func", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::g-destroy-func", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::g-destroy-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::g-destroy-func", ...args: any[]): void
    connect(sigName: "notify::size", callback: (...args: any[]) => void): number
    on(sigName: "notify::size", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::size", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::read-only", callback: (...args: any[]) => void): number
    on(sigName: "notify::read-only", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::read-only", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::read-only", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::read-only", ...args: any[]): void
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

    // Own properties of Gee-0.8.Gee.TreeMultiSet

    static name: string
    static $gtype: GObject.GType<TreeMultiSet>

    // Constructors of Gee-0.8.Gee.TreeMultiSet

    constructor(config?: TreeMultiSet_ConstructProps) 
    constructor(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, compareFunc: GLib.CompareDataFunc | null) 
    static new(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, compareFunc: GLib.CompareDataFunc | null): TreeMultiSet
    _init(config?: TreeMultiSet_ConstructProps): void

    // Conflicting static methods

    static empty(...args: any[]): any
}

interface TreeSet_ConstructProps extends AbstractBidirSortedSet_ConstructProps {

    // Own constructor properties of Gee-0.8.Gee.TreeSet

    gType?: GObject.GType | null
    gDupFunc?: GObject.BoxedCopyFunc | null
    gDestroyFunc?: GLib.DestroyNotify | null
}

interface TreeSet {

    // Own properties of Gee-0.8.Gee.TreeSet

    readonly gType: GObject.GType
    readonly gDupFunc: GObject.BoxedCopyFunc
    readonly gDestroyFunc: GLib.DestroyNotify

    // Conflicting properties

    readOnlyView: any

    // Owm methods of Gee-0.8.Gee.TreeSet

    getCompareFunc(): [ /* returnType */ GLib.CompareDataFunc, /* resultTarget */ object ]

    // Conflicting methods

    getReadOnlyView(...args: any[]): any
    vfuncGetReadOnlyView(...args: any[]): any

    // Class property signals of Gee-0.8.Gee.TreeSet

    connect(sigName: "notify::g-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::g-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::g-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::g-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::g-type", ...args: any[]): void
    connect(sigName: "notify::g-dup-func", callback: (...args: any[]) => void): number
    on(sigName: "notify::g-dup-func", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::g-dup-func", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::g-dup-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::g-dup-func", ...args: any[]): void
    connect(sigName: "notify::g-destroy-func", callback: (...args: any[]) => void): number
    on(sigName: "notify::g-destroy-func", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::g-destroy-func", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::g-destroy-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::g-destroy-func", ...args: any[]): void
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
    connect(sigName: "notify::read-only", callback: (...args: any[]) => void): number
    on(sigName: "notify::read-only", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::read-only", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::read-only", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::read-only", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class TreeSet extends AbstractBidirSortedSet {

    // Own properties of Gee-0.8.Gee.TreeSet

    static name: string
    static $gtype: GObject.GType<TreeSet>

    // Constructors of Gee-0.8.Gee.TreeSet

    constructor(config?: TreeSet_ConstructProps) 
    constructor(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, compareFunc: GLib.CompareDataFunc | null) 
    static new(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, compareFunc: GLib.CompareDataFunc | null): TreeSet
    _init(config?: TreeSet_ConstructProps): void

    // Conflicting static methods

    static empty(...args: any[]): any
}

interface UnrolledLinkedList_ConstructProps extends Queue_ConstructProps, Deque_ConstructProps, AbstractBidirList_ConstructProps {

    // Own constructor properties of Gee-0.8.Gee.UnrolledLinkedList

    gType?: GObject.GType | null
    gDupFunc?: GObject.BoxedCopyFunc | null
    gDestroyFunc?: GLib.DestroyNotify | null
}

interface UnrolledLinkedList extends Queue, Deque {

    // Own properties of Gee-0.8.Gee.UnrolledLinkedList

    readonly gType: GObject.GType
    readonly gDupFunc: GObject.BoxedCopyFunc
    readonly gDestroyFunc: GLib.DestroyNotify

    // Conflicting properties

    readOnlyView: any

    // Owm methods of Gee-0.8.Gee.UnrolledLinkedList

    getEqualFunc(): [ /* returnType */ EqualDataFunc, /* resultTarget */ object ]

    // Conflicting methods

    getReadOnlyView(...args: any[]): any
    vfuncGetReadOnlyView(...args: any[]): any

    // Class property signals of Gee-0.8.Gee.UnrolledLinkedList

    connect(sigName: "notify::g-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::g-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::g-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::g-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::g-type", ...args: any[]): void
    connect(sigName: "notify::g-dup-func", callback: (...args: any[]) => void): number
    on(sigName: "notify::g-dup-func", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::g-dup-func", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::g-dup-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::g-dup-func", ...args: any[]): void
    connect(sigName: "notify::g-destroy-func", callback: (...args: any[]) => void): number
    on(sigName: "notify::g-destroy-func", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::g-destroy-func", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::g-destroy-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::g-destroy-func", ...args: any[]): void
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
    connect(sigName: "notify::read-only", callback: (...args: any[]) => void): number
    on(sigName: "notify::read-only", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::read-only", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::read-only", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::read-only", ...args: any[]): void
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
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class UnrolledLinkedList extends AbstractBidirList {

    // Own properties of Gee-0.8.Gee.UnrolledLinkedList

    static name: string
    static $gtype: GObject.GType<UnrolledLinkedList>

    // Constructors of Gee-0.8.Gee.UnrolledLinkedList

    constructor(config?: UnrolledLinkedList_ConstructProps) 
    constructor(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, equalFunc: EqualDataFunc | null) 
    static new(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, equalFunc: EqualDataFunc | null): UnrolledLinkedList
    _init(config?: UnrolledLinkedList_ConstructProps): void

    // Conflicting static methods

    static empty(...args: any[]): any
}

interface MapEntry_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of Gee-0.8.Gee.MapEntry

    kType?: GObject.GType | null
    kDupFunc?: GObject.BoxedCopyFunc | null
    kDestroyFunc?: GLib.DestroyNotify | null
    vType?: GObject.GType | null
    vDupFunc?: GObject.BoxedCopyFunc | null
    vDestroyFunc?: GLib.DestroyNotify | null
    value?: object | null
}

interface MapEntry {

    // Own properties of Gee-0.8.Gee.MapEntry

    readonly kType: GObject.GType
    readonly kDupFunc: GObject.BoxedCopyFunc
    readonly kDestroyFunc: GLib.DestroyNotify
    readonly vType: GObject.GType
    readonly vDupFunc: GObject.BoxedCopyFunc
    readonly vDestroyFunc: GLib.DestroyNotify
    readonly key: object
    value: object
    readonly readOnly: boolean

    // Owm methods of Gee-0.8.Gee.MapEntry

    getKey(): object | null
    getValue(): object | null
    setValue(value: object | null): void
    getReadOnly(): boolean

    // Class property signals of Gee-0.8.Gee.MapEntry

    connect(sigName: "notify::k-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::k-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::k-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::k-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::k-type", ...args: any[]): void
    connect(sigName: "notify::k-dup-func", callback: (...args: any[]) => void): number
    on(sigName: "notify::k-dup-func", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::k-dup-func", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::k-dup-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::k-dup-func", ...args: any[]): void
    connect(sigName: "notify::k-destroy-func", callback: (...args: any[]) => void): number
    on(sigName: "notify::k-destroy-func", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::k-destroy-func", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::k-destroy-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::k-destroy-func", ...args: any[]): void
    connect(sigName: "notify::v-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::v-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::v-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::v-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::v-type", ...args: any[]): void
    connect(sigName: "notify::v-dup-func", callback: (...args: any[]) => void): number
    on(sigName: "notify::v-dup-func", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::v-dup-func", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::v-dup-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::v-dup-func", ...args: any[]): void
    connect(sigName: "notify::v-destroy-func", callback: (...args: any[]) => void): number
    on(sigName: "notify::v-destroy-func", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::v-destroy-func", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::v-destroy-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::v-destroy-func", ...args: any[]): void
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
    connect(sigName: "notify::read-only", callback: (...args: any[]) => void): number
    on(sigName: "notify::read-only", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::read-only", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::read-only", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::read-only", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class MapEntry extends GObject.Object {

    // Own properties of Gee-0.8.Gee.MapEntry

    static name: string
    static $gtype: GObject.GType<MapEntry>

    // Constructors of Gee-0.8.Gee.MapEntry

    constructor(config?: MapEntry_ConstructProps) 
    _init(config?: MapEntry_ConstructProps): void
}

interface AbstractBidirListClass {

    // Own fields of Gee-0.8.Gee.AbstractBidirListClass

    bidirListIterator: (self: AbstractBidirList) => BidirListIterator
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

    bidirIterator: (self: AbstractBidirSortedSet) => BidirIterator
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

    bidirMapIterator: (self: AbstractBidirSortedMap) => BidirMapIterator
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

    contains: (self: AbstractCollection, item: object | null) => boolean
    add: (self: AbstractCollection, item: object | null) => boolean
    remove: (self: AbstractCollection, item: object | null) => boolean
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

    listIterator: (self: AbstractList) => ListIterator
    get: (self: AbstractList, index: number) => object | null
    set: (self: AbstractList, index: number, item: object | null) => void
    indexOf: (self: AbstractList, item: object | null) => number
    insert: (self: AbstractList, index: number, item: object | null) => void
    removeAt: (self: AbstractList, index: number) => object | null
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

    hasKey: (self: AbstractMap, key: object | null) => boolean
    has: (self: AbstractMap, key: object | null, value: object | null) => boolean
    get: (self: AbstractMap, key: object | null) => object | null
    set: (self: AbstractMap, key: object | null, value: object | null) => void
    unset: (self: AbstractMap, key: object | null) => [ /* returnType */ boolean, /* value */ object ]
    mapIterator: (self: AbstractMap) => MapIterator
    clear: (self: AbstractMap) => void
    foreach: (self: AbstractMap, f: ForallFunc) => boolean
    stream: (self: AbstractMap, aType: GObject.GType, aDupFunc: GObject.BoxedCopyFunc, aDestroyFunc: GLib.DestroyNotify, f: StreamFunc) => Iterator
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

    createValueStorage: (self: AbstractMultiMap) => Collection
    createMultiKeySet: (self: AbstractMultiMap) => MultiSet
    getValueEqualFunc: (self: AbstractMultiMap) => [ /* returnType */ EqualDataFunc, /* resultTarget */ object, /* resultTargetDestroyNotify */ GLib.DestroyNotify ]
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

    peek: (self: AbstractQueue) => object | null
    poll: (self: AbstractQueue) => object | null
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

    headMap: (self: AbstractSortedMap, before: object | null) => SortedMap
    tailMap: (self: AbstractSortedMap, after: object | null) => SortedMap
    subMap: (self: AbstractSortedMap, before: object | null, after: object | null) => SortedMap
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

    first: (self: AbstractSortedSet) => object | null
    last: (self: AbstractSortedSet) => object | null
    iteratorAt: (self: AbstractSortedSet, element: object | null) => Iterator | null
    lower: (self: AbstractSortedSet, element: object | null) => object | null
    higher: (self: AbstractSortedSet, element: object | null) => object | null
    floor: (self: AbstractSortedSet, element: object | null) => object | null
    ceil: (self: AbstractSortedSet, element: object | null) => object | null
    headSet: (self: AbstractSortedSet, before: object | null) => SortedSet
    tailSet: (self: AbstractSortedSet, after: object | null) => SortedSet
    subSet: (self: AbstractSortedSet, from: object | null, to: object | null) => SortedSet
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

    node: any

    // Owm methods of Gee-0.8.Gee.HazardPointer

    get(otherThread: boolean): object | null
    release(notify: GLib.DestroyNotify): void
}

class HazardPointer {

    // Own properties of Gee-0.8.Gee.HazardPointer

    static name: string

    // Constructors of Gee-0.8.Gee.HazardPointer

    constructor(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, ptr: object | null) 
    static new(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, ptr: object | null): HazardPointer
    static getHazardPointer(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, aptr: object | null, mask: number): [ /* returnType */ HazardPointer | null, /* maskOut */ number ]
    static getPointer(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, aptr: object | null, mask: number): [ /* returnType */ object | null, /* maskOut */ number ]
    static exchangeHazardPointer(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, aptr: object | null, newPtr: object | null, mask: number, newMask: number): [ /* returnType */ HazardPointer | null, /* oldMask */ number ]
    static setPointer(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, aptr: object | null, newPtr: object | null, mask: number, newMask: number): void
    static exchangePointer(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, aptr: object | null, newPtr: object | null, mask: number, newMask: number): [ /* returnType */ object | null, /* oldMask */ number ]
    static compareAndExchangePointer(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, aptr: object | null, oldPtr: object | null, newPtr: object | null, mask: number, oldMask: number, newMask: number): boolean
    static setDefaultPolicy(policy: HazardPointerPolicy): void
    static setThreadExitPolicy(policy: HazardPointerPolicy): void
    static setReleasePolicy(policy: HazardPointerReleasePolicy): boolean
}

interface HazardPointerContext {

    // Own fields of Gee-0.8.Gee.HazardPointerContext

    parent: object | null
    toFree: ArrayList
    policy: HazardPointerPolicy | null

    // Owm methods of Gee-0.8.Gee.HazardPointerContext

    tryFree(): void
    freeAll(): void
    tryRelease(): void
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
    hasPrevious: (self: BidirIterator) => boolean
    first: (self: BidirIterator) => boolean
    last: (self: BidirIterator) => boolean
}

abstract class BidirIteratorIface {

    // Own properties of Gee-0.8.Gee.BidirIteratorIface

    static name: string
}

interface BidirListIface {

    // Own fields of Gee-0.8.Gee.BidirListIface

    bidirListIterator: (self: BidirList) => BidirListIterator
    getReadOnlyView: (self: BidirList) => BidirList
}

abstract class BidirListIface {

    // Own properties of Gee-0.8.Gee.BidirListIface

    static name: string
}

interface BidirListIteratorIface {

    // Own fields of Gee-0.8.Gee.BidirListIteratorIface

    insert: (self: BidirListIterator, item: object | null) => void
}

abstract class BidirListIteratorIface {

    // Own properties of Gee-0.8.Gee.BidirListIteratorIface

    static name: string
}

interface BidirMapIteratorIface {

    // Own fields of Gee-0.8.Gee.BidirMapIteratorIface

    previous: (self: BidirMapIterator) => boolean
    hasPrevious: (self: BidirMapIterator) => boolean
    first: (self: BidirMapIterator) => boolean
    last: (self: BidirMapIterator) => boolean
}

abstract class BidirMapIteratorIface {

    // Own properties of Gee-0.8.Gee.BidirMapIteratorIface

    static name: string
}

interface BidirSortedSetIface {

    // Own fields of Gee-0.8.Gee.BidirSortedSetIface

    bidirIterator: (self: BidirSortedSet) => BidirIterator
    getReadOnlyView: (self: BidirSortedSet) => BidirSortedSet
}

abstract class BidirSortedSetIface {

    // Own properties of Gee-0.8.Gee.BidirSortedSetIface

    static name: string
}

interface BidirSortedMapIface {

    // Own fields of Gee-0.8.Gee.BidirSortedMapIface

    bidirMapIterator: (self: BidirSortedMap) => BidirMapIterator
    getReadOnlyView: (self: BidirSortedMap) => BidirSortedMap
}

abstract class BidirSortedMapIface {

    // Own properties of Gee-0.8.Gee.BidirSortedMapIface

    static name: string
}

interface CollectionIface {

    // Own fields of Gee-0.8.Gee.CollectionIface

    contains: (self: Collection, item: object | null) => boolean
    add: (self: Collection, item: object | null) => boolean
    remove: (self: Collection, item: object | null) => boolean
    clear: (self: Collection) => void
    addAll: (self: Collection, collection: Collection) => boolean
    containsAll: (self: Collection, collection: Collection) => boolean
    removeAll: (self: Collection, collection: Collection) => boolean
    retainAll: (self: Collection, collection: Collection) => boolean
    toArray: () => [ /* returnType */ object[], /* resultLength1 */ number ]
    addAllArray: (self: Collection, array: object[]) => boolean
    containsAllArray: (self: Collection, array: object[]) => boolean
    removeAllArray: (self: Collection, array: object[]) => boolean
    addAllIterator: (self: Collection, iter: Iterator) => boolean
    containsAllIterator: (self: Collection, iter: Iterator) => boolean
    removeAllIterator: (self: Collection, iter: Iterator) => boolean
    getSize: (self: Collection) => number
    getIsEmpty: (self: Collection) => boolean
    getReadOnly: (self: Collection) => boolean
    getReadOnlyView: (self: Collection) => Collection
}

abstract class CollectionIface {

    // Own properties of Gee-0.8.Gee.CollectionIface

    static name: string
}

interface ComparableIface {

    // Own fields of Gee-0.8.Gee.ComparableIface

    compareTo: (self: Comparable, object: object | null) => number
}

abstract class ComparableIface {

    // Own properties of Gee-0.8.Gee.ComparableIface

    static name: string
}

interface DequeIface {

    // Own fields of Gee-0.8.Gee.DequeIface

    offerHead: (self: Deque, element: object | null) => boolean
    peekHead: (self: Deque) => object | null
    pollHead: (self: Deque) => object | null
    drainHead: (self: Deque, recipient: Collection, amount: number) => number
    offerTail: (self: Deque, element: object | null) => boolean
    peekTail: (self: Deque) => object | null
    pollTail: (self: Deque) => object | null
    drainTail: (self: Deque, recipient: Collection, amount: number) => number
}

abstract class DequeIface {

    // Own properties of Gee-0.8.Gee.DequeIface

    static name: string
}

interface FutureIface {

    // Own fields of Gee-0.8.Gee.FutureIface

    wait: (self: Future) => object | null
    waitUntil: (self: Future, endTime: number) => [ /* returnType */ boolean, /* value */ object ]
    waitAsync: (self: Future, callback: Gio.AsyncReadyCallback | null) => void
    waitFinish: (self: Future, res: Gio.AsyncResult) => object | null
    map: (self: Future, aType: GObject.GType, aDupFunc: GObject.BoxedCopyFunc, aDestroyFunc: GLib.DestroyNotify, func: any) => Future
    lightMap: (self: Future, aType: GObject.GType, aDupFunc: GObject.BoxedCopyFunc, aDestroyFunc: GLib.DestroyNotify, func: any) => Future
    lightMapBroken: (self: Future, aType: GObject.GType, aDupFunc: GObject.BoxedCopyFunc, aDestroyFunc: GLib.DestroyNotify, func: any) => Future
    zip: (self: Future, aType: GObject.GType, aDupFunc: GObject.BoxedCopyFunc, aDestroyFunc: GLib.DestroyNotify, bType: GObject.GType, bDupFunc: GObject.BoxedCopyFunc, bDestroyFunc: GLib.DestroyNotify, zipFunc: any, second: Future) => Future
    flatMap: (self: Future, aType: GObject.GType, aDupFunc: GObject.BoxedCopyFunc, aDestroyFunc: GLib.DestroyNotify, func: any) => Future
    getValue: (self: Future) => object | null
    getReady: (self: Future) => boolean
    getException: (self: Future) => GLib.Error | null
}

abstract class FutureIface {

    // Own properties of Gee-0.8.Gee.FutureIface

    static name: string
}

interface HashableIface {

    // Own fields of Gee-0.8.Gee.HashableIface

    hash: (self: Hashable) => number
    equalTo: (self: Hashable, object: object | null) => boolean
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
    hasNext: (self: Iterator) => boolean
    get: (self: Iterator) => object | null
    remove: (self: Iterator) => void
    getValid: (self: Iterator) => boolean
    getReadOnly: (self: Iterator) => boolean
}

abstract class IteratorIface {

    // Own properties of Gee-0.8.Gee.IteratorIface

    static name: string
}

interface ListIface {

    // Own fields of Gee-0.8.Gee.ListIface

    listIterator: (self: List) => ListIterator
    get: (self: List, index: number) => object | null
    set: (self: List, index: number, item: object | null) => void
    indexOf: (self: List, item: object | null) => number
    insert: (self: List, index: number, item: object | null) => void
    removeAt: (self: List, index: number) => object | null
    slice: (self: List, start: number, stop: number) => List | null
    first: (self: List) => object | null
    last: (self: List) => object | null
    insertAll: (self: List, index: number, collection: Collection) => void
    sort: (self: List, compareFunc: GLib.CompareDataFunc | null) => void
    getReadOnlyView: (self: List) => List
}

abstract class ListIface {

    // Own properties of Gee-0.8.Gee.ListIface

    static name: string
}

interface ListIteratorIface {

    // Own fields of Gee-0.8.Gee.ListIteratorIface

    set: (self: ListIterator, item: object | null) => void
    add: (self: ListIterator, item: object | null) => void
    index: (self: ListIterator) => number
}

abstract class ListIteratorIface {

    // Own properties of Gee-0.8.Gee.ListIteratorIface

    static name: string
}

interface MapIface {

    // Own fields of Gee-0.8.Gee.MapIface

    hasKey: (self: Map, key: object | null) => boolean
    has: (self: Map, key: object | null, value: object | null) => boolean
    get: (self: Map, key: object | null) => object | null
    set: (self: Map, key: object | null, value: object | null) => void
    unset: (self: Map, key: object | null) => [ /* returnType */ boolean, /* value */ object ]
    clear: (self: Map) => void
    mapIterator: (self: Map) => MapIterator
    setAll: (self: Map, map: Map) => void
    unsetAll: (self: Map, map: Map) => boolean
    hasAll: (self: Map, map: Map) => boolean
    getSize: (self: Map) => number
    getIsEmpty: (self: Map) => boolean
    getReadOnly: (self: Map) => boolean
    getKeys: (self: Map) => Set
    getValues: (self: Map) => Collection
    getEntries: (self: Map) => Set
    getReadOnlyView: (self: Map) => Map
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
    hasNext: (self: MapIterator) => boolean
    getKey: (self: MapIterator) => object | null
    getValue: (self: MapIterator) => object | null
    setValue: (self: MapIterator, value: object | null) => void
    unset: (self: MapIterator) => void
    fold: (self: MapIterator, aType: GObject.GType, aDupFunc: GObject.BoxedCopyFunc, aDestroyFunc: GLib.DestroyNotify, f: FoldMapFunc, seed: object | null) => object | null
    foreach: (self: MapIterator, f: ForallMapFunc) => boolean
    getValid: (self: MapIterator) => boolean
    getMutable: (self: MapIterator) => boolean
    getReadOnly: (self: MapIterator) => boolean
}

abstract class MapIteratorIface {

    // Own properties of Gee-0.8.Gee.MapIteratorIface

    static name: string
}

interface MultiMapIface {

    // Own fields of Gee-0.8.Gee.MultiMapIface

    getKeys: (self: MultiMap) => Set
    getAllKeys: (self: MultiMap) => MultiSet
    getValues: (self: MultiMap) => Collection
    contains: (self: MultiMap, key: object | null) => boolean
    get: (self: MultiMap, key: object | null) => Collection
    set: (self: MultiMap, key: object | null, value: object | null) => void
    remove: (self: MultiMap, key: object | null, value: object | null) => boolean
    removeAll: (self: MultiMap, key: object | null) => boolean
    clear: (self: MultiMap) => void
    mapIterator: (self: MultiMap) => MapIterator
    getSize: (self: MultiMap) => number
    getReadOnly: (self: MultiMap) => boolean
    getReadOnlyView: (self: MultiMap) => MultiMap
}

abstract class MultiMapIface {

    // Own properties of Gee-0.8.Gee.MultiMapIface

    static name: string
}

interface MultiSetIface {

    // Own fields of Gee-0.8.Gee.MultiSetIface

    count: (self: MultiSet, item: object | null) => number
    getReadOnlyView: (self: MultiSet) => MultiSet
}

abstract class MultiSetIface {

    // Own properties of Gee-0.8.Gee.MultiSetIface

    static name: string
}

interface QueueIface {

    // Own fields of Gee-0.8.Gee.QueueIface

    offer: (self: Queue, element: object | null) => boolean
    peek: (self: Queue) => object | null
    poll: (self: Queue) => object | null
    drain: (self: Queue, recipient: Collection, amount: number) => number
    getCapacity: (self: Queue) => number
    getRemainingCapacity: (self: Queue) => number
    getIsFull: (self: Queue) => boolean
}

abstract class QueueIface {

    // Own properties of Gee-0.8.Gee.QueueIface

    static name: string
}

interface SetIface {

    // Own fields of Gee-0.8.Gee.SetIface

    getReadOnlyView: (self: Set) => Set
}

abstract class SetIface {

    // Own properties of Gee-0.8.Gee.SetIface

    static name: string
}

interface SortedMapIface {

    // Own fields of Gee-0.8.Gee.SortedMapIface

    headMap: (self: SortedMap, before: object | null) => SortedMap
    tailMap: (self: SortedMap, after: object | null) => SortedMap
    subMap: (self: SortedMap, before: object | null, after: object | null) => SortedMap
    getAscendingKeys: (self: SortedMap) => SortedSet
    getAscendingEntries: (self: SortedMap) => SortedSet
    getReadOnlyView: (self: SortedMap) => SortedMap
}

abstract class SortedMapIface {

    // Own properties of Gee-0.8.Gee.SortedMapIface

    static name: string
}

interface SortedSetIface {

    // Own fields of Gee-0.8.Gee.SortedSetIface

    first: (self: SortedSet) => object | null
    last: (self: SortedSet) => object | null
    iteratorAt: (self: SortedSet, element: object | null) => Iterator | null
    lower: (self: SortedSet, element: object | null) => object | null
    higher: (self: SortedSet, element: object | null) => object | null
    floor: (self: SortedSet, element: object | null) => object | null
    ceil: (self: SortedSet, element: object | null) => object | null
    headSet: (self: SortedSet, before: object | null) => SortedSet
    tailSet: (self: SortedSet, after: object | null) => SortedSet
    subSet: (self: SortedSet, from: object | null, to: object | null) => SortedSet
    getReadOnlyView: (self: SortedSet) => SortedSet
}

abstract class SortedSetIface {

    // Own properties of Gee-0.8.Gee.SortedSetIface

    static name: string
}

interface TraversableIface {

    // Own fields of Gee-0.8.Gee.TraversableIface

    foreach: (self: Traversable, f: ForallFunc) => boolean
    stream: (self: Traversable, aType: GObject.GType, aDupFunc: GObject.BoxedCopyFunc, aDestroyFunc: GLib.DestroyNotify, f: StreamFunc) => Iterator
    fold: (self: Traversable, aType: GObject.GType, aDupFunc: GObject.BoxedCopyFunc, aDestroyFunc: GLib.DestroyNotify, f: FoldFunc, seed: object | null) => object | null
    map: (self: Traversable, aType: GObject.GType, aDupFunc: GObject.BoxedCopyFunc, aDestroyFunc: GLib.DestroyNotify, f: MapFunc) => Iterator
    scan: (self: Traversable, aType: GObject.GType, aDupFunc: GObject.BoxedCopyFunc, aDestroyFunc: GLib.DestroyNotify, f: FoldFunc, seed: object | null) => Iterator
    filter: (self: Traversable, pred: Predicate) => Iterator
    chop: (self: Traversable, offset: number, length: number) => Iterator
    flatMap: (self: Traversable, aType: GObject.GType, aDupFunc: GObject.BoxedCopyFunc, aDestroyFunc: GLib.DestroyNotify, f: FlatMapFunc) => Iterator
    tee: (self: Traversable) => [ /* returnType */ Iterator[], /* resultLength1 */ number ]
    firstMatch: (self: Traversable, pred: Predicate) => object | null
    anyMatch: (self: Traversable, pred: Predicate) => boolean
    allMatch: (self: Traversable, pred: Predicate) => boolean
    max: (self: Traversable, compare: GLib.CompareDataFunc) => object | null
    min: (self: Traversable, compare: GLib.CompareDataFunc) => object | null
    orderBy: (self: Traversable, compare: GLib.CompareDataFunc | null) => Iterator
    getElementType: (self: Traversable) => GObject.GType
}

abstract class TraversableIface {

    // Own properties of Gee-0.8.Gee.TraversableIface

    static name: string
}

}
export default Gee;