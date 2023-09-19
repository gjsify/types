
/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './node-gee-0.8-import.d.ts';
    
/**
 * Gee-0.8
 */

import type Gio from '@girs/node-gio-2.0';
import type GObject from '@girs/node-gobject-2.0';
import type GLib from '@girs/node-glib-2.0';

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
function functionsGetEqualFuncFor(t: GObject.GType): [ /* returnType */ EqualDataFunc, /* resultTarget */ any, /* resultTargetDestroyNotify */ GLib.DestroyNotify ]
function functionsGetHashFuncFor(t: GObject.GType): [ /* returnType */ HashDataFunc, /* resultTarget */ any, /* resultTargetDestroyNotify */ GLib.DestroyNotify ]
function functionsGetCompareFuncFor(t: GObject.GType): [ /* returnType */ GLib.CompareDataFunc, /* resultTarget */ any, /* resultTargetDestroyNotify */ GLib.DestroyNotify ]
function hazardPointerPolicyIsConcrete(): boolean
function hazardPointerPolicyIsBlocking(): boolean
function hazardPointerPolicyIsSafe(): boolean
function hazardPointerPolicyToConcrete(): HazardPointerPolicy
function task(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, task: Task): Future
function asyncTask(callback: Gio.AsyncReadyCallback | null): void
function asyncTaskFinish(res: Gio.AsyncResult): void
interface HashDataFunc {
    (tType: GObject.GType, tDupFunc: GObject.BoxedCopyFunc, tDestroyFunc: GLib.DestroyNotify, v: any): number
}
interface EqualDataFunc {
    (tType: GObject.GType, tDupFunc: GObject.BoxedCopyFunc, tDestroyFunc: GLib.DestroyNotify, a: any, b: any): boolean
}
interface LazyFunc {
    (gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify): any
}
interface FoldMapFunc {
    (aType: GObject.GType, aDupFunc: GObject.BoxedCopyFunc, aDestroyFunc: GLib.DestroyNotify, kType: GObject.GType, kDupFunc: GObject.BoxedCopyFunc, kDestroyFunc: GLib.DestroyNotify, vType: GObject.GType, vDupFunc: GObject.BoxedCopyFunc, vDestroyFunc: GLib.DestroyNotify, k: any, v: any, a: any): any
}
interface ForallMapFunc {
    (kType: GObject.GType, kDupFunc: GObject.BoxedCopyFunc, kDestroyFunc: GLib.DestroyNotify, vType: GObject.GType, vDupFunc: GObject.BoxedCopyFunc, vDestroyFunc: GLib.DestroyNotify, k: any, v: any): boolean
}
interface Task {
    (gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify): any
}
interface FoldFunc {
    (aType: GObject.GType, aDupFunc: GObject.BoxedCopyFunc, aDestroyFunc: GLib.DestroyNotify, gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, g: any, a: any): any
}
interface ForallFunc {
    (gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, g: any): boolean
}
interface UnfoldFunc {
    (aType: GObject.GType, aDupFunc: GObject.BoxedCopyFunc, aDestroyFunc: GLib.DestroyNotify): Lazy | null
}
interface StreamFunc {
    (gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, aType: GObject.GType, aDupFunc: GObject.BoxedCopyFunc, aDestroyFunc: GLib.DestroyNotify, state: TraversableStream, g: Lazy | null): TraversableStream
}
interface MapFunc {
    (aType: GObject.GType, aDupFunc: GObject.BoxedCopyFunc, aDestroyFunc: GLib.DestroyNotify, gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, g: any): any
}
interface Predicate {
    (gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, g: any): boolean
}
interface FlatMapFunc {
    (aType: GObject.GType, aDupFunc: GObject.BoxedCopyFunc, aDestroyFunc: GLib.DestroyNotify, gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, g: any): Iterator
}
module BidirIterator {

    // Constructor properties interface

    interface ConstructorProperties extends Iterator.ConstructorProperties, GObject.Object.ConstructorProperties {
    }

}

interface BidirIterator extends Iterator {

    // Own properties of Gee-0.8.Gee.BidirIterator

    __gtype__: number

    // Owm methods of Gee-0.8.Gee.BidirIterator

    // Has conflict: previous(): boolean
    // Has conflict: hasPrevious(): boolean
    // Has conflict: first(): boolean
    // Has conflict: last(): boolean

    // Own virtual methods of Gee-0.8.Gee.BidirIterator

    previous(): boolean
    hasPrevious(): boolean
    first(): boolean
    last(): boolean

    // Class property signals of Gee-0.8.Gee.BidirIterator

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
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
    disconnect(id: number): void
}

class BidirIterator extends GObject.Object {

    // Own properties of Gee-0.8.Gee.BidirIterator

    static name: string

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
    __gtype__: number

    // Owm methods of Gee-0.8.Gee.BidirList

    // Has conflict: bidirListIterator(): BidirListIterator
    // Has conflict: getReadOnlyView(): BidirList

    // Own virtual methods of Gee-0.8.Gee.BidirList

    bidirListIterator(): BidirListIterator
    getReadOnlyView(): BidirList

    // Overloads of getReadOnlyView

    getReadOnlyView(): List
    getReadOnlyView(): Collection

    // Class property signals of Gee-0.8.Gee.BidirList

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
    disconnect(id: number): void
}

class BidirList extends GObject.Object {

    // Own properties of Gee-0.8.Gee.BidirList

    static name: string

    // Constructors of Gee-0.8.Gee.BidirList

    constructor(config?: BidirList.ConstructorProperties) 
    _init(config?: BidirList.ConstructorProperties): void

    // Conflicting static methods

    static empty(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify): List

    // Overloads of empty

    static empty(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify): Collection
    static empty(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify): Collection
}

module BidirListIterator {

    // Constructor properties interface

    interface ConstructorProperties extends BidirIterator.ConstructorProperties, ListIterator.ConstructorProperties, GObject.Object.ConstructorProperties {
    }

}

interface BidirListIterator extends BidirIterator, ListIterator {

    // Own properties of Gee-0.8.Gee.BidirListIterator

    __gtype__: number

    // Owm methods of Gee-0.8.Gee.BidirListIterator

    // Has conflict: insert(item: any): void

    // Own virtual methods of Gee-0.8.Gee.BidirListIterator

    insert(item: any): void

    // Class property signals of Gee-0.8.Gee.BidirListIterator

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
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
    disconnect(id: number): void
}

class BidirListIterator extends GObject.Object {

    // Own properties of Gee-0.8.Gee.BidirListIterator

    static name: string

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

    // Own properties of Gee-0.8.Gee.BidirMapIterator

    __gtype__: number

    // Owm methods of Gee-0.8.Gee.BidirMapIterator

    // Has conflict: previous(): boolean
    // Has conflict: hasPrevious(): boolean
    // Has conflict: first(): boolean
    // Has conflict: last(): boolean

    // Own virtual methods of Gee-0.8.Gee.BidirMapIterator

    previous(): boolean
    hasPrevious(): boolean
    first(): boolean
    last(): boolean

    // Class property signals of Gee-0.8.Gee.BidirMapIterator

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
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
    disconnect(id: number): void
}

class BidirMapIterator extends GObject.Object {

    // Own properties of Gee-0.8.Gee.BidirMapIterator

    static name: string

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
    __gtype__: number

    // Owm methods of Gee-0.8.Gee.BidirSortedSet

    // Has conflict: bidirIterator(): BidirIterator
    // Has conflict: getReadOnlyView(): BidirSortedSet

    // Own virtual methods of Gee-0.8.Gee.BidirSortedSet

    bidirIterator(): BidirIterator
    getReadOnlyView(): BidirSortedSet

    // Overloads of getReadOnlyView

    getReadOnlyView(): SortedSet
    getReadOnlyView(): Set
    getReadOnlyView(): Collection

    // Class property signals of Gee-0.8.Gee.BidirSortedSet

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
    disconnect(id: number): void
}

class BidirSortedSet extends GObject.Object {

    // Own properties of Gee-0.8.Gee.BidirSortedSet

    static name: string

    // Constructors of Gee-0.8.Gee.BidirSortedSet

    constructor(config?: BidirSortedSet.ConstructorProperties) 
    _init(config?: BidirSortedSet.ConstructorProperties): void
    static empty(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify): BidirSortedSet

    // Overloads of empty

    static empty(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify): SortedSet
    static empty(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify): Set
    static empty(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify): Collection
}

module BidirSortedMap {

    // Constructor properties interface

    interface ConstructorProperties extends SortedMap.ConstructorProperties, GObject.Object.ConstructorProperties {
    }

}

interface BidirSortedMap extends SortedMap {

    // Own properties of Gee-0.8.Gee.BidirSortedMap

    readonly readOnlyView: any
    __gtype__: number

    // Owm methods of Gee-0.8.Gee.BidirSortedMap

    // Has conflict: bidirMapIterator(): BidirMapIterator
    // Has conflict: getReadOnlyView(): BidirSortedMap

    // Own virtual methods of Gee-0.8.Gee.BidirSortedMap

    bidirMapIterator(): BidirMapIterator
    getReadOnlyView(): BidirSortedMap

    // Overloads of getReadOnlyView

    getReadOnlyView(): SortedMap
    getReadOnlyView(): Map

    // Class property signals of Gee-0.8.Gee.BidirSortedMap

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
    disconnect(id: number): void
}

class BidirSortedMap extends GObject.Object {

    // Own properties of Gee-0.8.Gee.BidirSortedMap

    static name: string

    // Constructors of Gee-0.8.Gee.BidirSortedMap

    constructor(config?: BidirSortedMap.ConstructorProperties) 
    _init(config?: BidirSortedMap.ConstructorProperties): void
    static empty(kType: GObject.GType, kDupFunc: GObject.BoxedCopyFunc, kDestroyFunc: GLib.DestroyNotify, vType: GObject.GType, vDupFunc: GObject.BoxedCopyFunc, vDestroyFunc: GLib.DestroyNotify): BidirSortedMap

    // Overloads of empty

    static empty(kType: GObject.GType, kDupFunc: GObject.BoxedCopyFunc, kDestroyFunc: GLib.DestroyNotify, vType: GObject.GType, vDupFunc: GObject.BoxedCopyFunc, vDestroyFunc: GLib.DestroyNotify): Map
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
    __gtype__: number

    // Owm methods of Gee-0.8.Gee.Collection

    // Has conflict: contains(item: any): boolean
    // Has conflict: add(item: any): boolean
    // Has conflict: remove(item: any): boolean
    // Has conflict: clear(): void
    // Has conflict: addAll(collection: Collection): boolean
    // Has conflict: containsAll(collection: Collection): boolean
    // Has conflict: removeAll(collection: Collection): boolean
    // Has conflict: retainAll(collection: Collection): boolean
    // Has conflict: toArray(): any[]
    // Has conflict: addAllArray(array: any[]): boolean
    // Has conflict: containsAllArray(array: any[]): boolean
    // Has conflict: removeAllArray(array: any[]): boolean
    // Has conflict: addAllIterator(iter: Iterator): boolean
    // Has conflict: containsAllIterator(iter: Iterator): boolean
    // Has conflict: removeAllIterator(iter: Iterator): boolean
    // Has conflict: getSize(): number
    // Has conflict: getIsEmpty(): boolean
    // Has conflict: getReadOnly(): boolean
    // Has conflict: getReadOnlyView(): Collection

    // Own virtual methods of Gee-0.8.Gee.Collection

    contains(item: any): boolean
    add(item: any): boolean
    remove(item: any): boolean
    clear(): void
    addAll(collection: Collection): boolean
    containsAll(collection: Collection): boolean
    removeAll(collection: Collection): boolean
    retainAll(collection: Collection): boolean
    toArray(): any[]
    addAllArray(array: any[]): boolean
    containsAllArray(array: any[]): boolean
    removeAllArray(array: any[]): boolean
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
    disconnect(id: number): void
}

class Collection extends GObject.Object {

    // Own properties of Gee-0.8.Gee.Collection

    static name: string

    // Constructors of Gee-0.8.Gee.Collection

    constructor(config?: Collection.ConstructorProperties) 
    _init(config?: Collection.ConstructorProperties): void
    static empty(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify): Collection
}

module Comparable {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface Comparable extends GObject.Object {

    // Own properties of Gee-0.8.Gee.Comparable

    __gtype__: number

    // Owm methods of Gee-0.8.Gee.Comparable

    // Has conflict: compareTo(object: any): number

    // Own virtual methods of Gee-0.8.Gee.Comparable

    compareTo(object: any): number

    // Class property signals of Gee-0.8.Gee.Comparable

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
    disconnect(id: number): void
}

class Comparable {

    // Own properties of Gee-0.8.Gee.Comparable

    static name: string

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

    // Own properties of Gee-0.8.Gee.Deque

    __gtype__: number

    // Owm methods of Gee-0.8.Gee.Deque

    // Has conflict: offerHead(element: any): boolean
    // Has conflict: peekHead(): any | null
    // Has conflict: pollHead(): any | null
    // Has conflict: drainHead(recipient: Collection, amount: number): number
    // Has conflict: offerTail(element: any): boolean
    // Has conflict: peekTail(): any | null
    // Has conflict: pollTail(): any | null
    // Has conflict: drainTail(recipient: Collection, amount: number): number

    // Own virtual methods of Gee-0.8.Gee.Deque

    offerHead(element: any): boolean
    peekHead(): any | null
    pollHead(): any | null
    drainHead(recipient: Collection, amount: number): number
    offerTail(element: any): boolean
    peekTail(): any | null
    pollTail(): any | null
    drainTail(recipient: Collection, amount: number): number

    // Class property signals of Gee-0.8.Gee.Deque

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
    disconnect(id: number): void
}

class Deque extends GObject.Object {

    // Own properties of Gee-0.8.Gee.Deque

    static name: string

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
    __gtype__: number

    // Owm methods of Gee-0.8.Gee.Future

    // Has conflict: wait(): any
    // Has conflict: waitUntil(endTime: number): [ /* returnType */ boolean, /* value */ any ]
    // Has conflict: waitAsync(callback: Gio.AsyncReadyCallback | null): void
    // Has conflict: waitFinish(res: Gio.AsyncResult): any
    // Has conflict: map(aType: GObject.GType, aDupFunc: GObject.BoxedCopyFunc, aDestroyFunc: GLib.DestroyNotify, func: any): Future
    // Has conflict: lightMap(aType: GObject.GType, aDupFunc: GObject.BoxedCopyFunc, aDestroyFunc: GLib.DestroyNotify, func: any): Future
    // Has conflict: lightMapBroken(aType: GObject.GType, aDupFunc: GObject.BoxedCopyFunc, aDestroyFunc: GLib.DestroyNotify, func: any): Future
    // Has conflict: zip(aType: GObject.GType, aDupFunc: GObject.BoxedCopyFunc, aDestroyFunc: GLib.DestroyNotify, bType: GObject.GType, bDupFunc: GObject.BoxedCopyFunc, bDestroyFunc: GLib.DestroyNotify, zipFunc: any, second: Future): Future
    // Has conflict: flatMap(aType: GObject.GType, aDupFunc: GObject.BoxedCopyFunc, aDestroyFunc: GLib.DestroyNotify, func: any): Future
    // Has conflict: getValue(): any | null
    // Has conflict: getReady(): boolean
    // Has conflict: getException(): GLib.Error | null

    // Own virtual methods of Gee-0.8.Gee.Future

    wait(): any
    waitUntil(endTime: number): [ /* returnType */ boolean, /* value */ any ]
    waitAsync(callback: Gio.AsyncReadyCallback | null): void
    waitFinish(res: Gio.AsyncResult): any
    map(aType: GObject.GType, aDupFunc: GObject.BoxedCopyFunc, aDestroyFunc: GLib.DestroyNotify, func: any): Future
    lightMap(aType: GObject.GType, aDupFunc: GObject.BoxedCopyFunc, aDestroyFunc: GLib.DestroyNotify, func: any): Future
    lightMapBroken(aType: GObject.GType, aDupFunc: GObject.BoxedCopyFunc, aDestroyFunc: GLib.DestroyNotify, func: any): Future
    zip(aType: GObject.GType, aDupFunc: GObject.BoxedCopyFunc, aDestroyFunc: GLib.DestroyNotify, bType: GObject.GType, bDupFunc: GObject.BoxedCopyFunc, bDestroyFunc: GLib.DestroyNotify, zipFunc: any, second: Future): Future
    flatMap(aType: GObject.GType, aDupFunc: GObject.BoxedCopyFunc, aDestroyFunc: GLib.DestroyNotify, func: any): Future
    getValue(): any | null
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
    disconnect(id: number): void
}

class Future {

    // Own properties of Gee-0.8.Gee.Future

    static name: string

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

    // Own properties of Gee-0.8.Gee.Hashable

    __gtype__: number

    // Owm methods of Gee-0.8.Gee.Hashable

    // Has conflict: hash(): number
    // Has conflict: equalTo(object: any): boolean

    // Own virtual methods of Gee-0.8.Gee.Hashable

    hash(): number
    equalTo(object: any): boolean

    // Class property signals of Gee-0.8.Gee.Hashable

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
    disconnect(id: number): void
}

class Hashable {

    // Own properties of Gee-0.8.Gee.Hashable

    static name: string

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

    // Own properties of Gee-0.8.Gee.Iterable

    __gtype__: number

    // Owm methods of Gee-0.8.Gee.Iterable

    // Has conflict: iterator(): Iterator

    // Own virtual methods of Gee-0.8.Gee.Iterable

    iterator(): Iterator

    // Class property signals of Gee-0.8.Gee.Iterable

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
    disconnect(id: number): void
}

class Iterable {

    // Own properties of Gee-0.8.Gee.Iterable

    static name: string

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
    __gtype__: number

    // Owm methods of Gee-0.8.Gee.Iterator

    // Has conflict: next(): boolean
    // Has conflict: hasNext(): boolean
    // Has conflict: get(): any
    // Has conflict: remove(): void
    // Has conflict: getValid(): boolean
    // Has conflict: getReadOnly(): boolean

    // Own virtual methods of Gee-0.8.Gee.Iterator

    next(): boolean
    hasNext(): boolean
    get(): any
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
    disconnect(id: number): void
}

class Iterator {

    // Own properties of Gee-0.8.Gee.Iterator

    static name: string

    // Constructors of Gee-0.8.Gee.Iterator

    constructor(config?: Iterator.ConstructorProperties) 
    _init(config?: Iterator.ConstructorProperties): void
    static unfold(aType: GObject.GType, aDupFunc: GObject.BoxedCopyFunc, aDestroyFunc: GLib.DestroyNotify, f: UnfoldFunc, current: Lazy | null): Iterator
    static concat(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, iters: Iterator): Iterator
}

module List {

    // Constructor properties interface

    interface ConstructorProperties extends Collection.ConstructorProperties, GObject.Object.ConstructorProperties {
    }

}

interface List extends Collection {

    // Own properties of Gee-0.8.Gee.List

    readonly readOnlyView: any
    __gtype__: number

    // Owm methods of Gee-0.8.Gee.List

    // Has conflict: listIterator(): ListIterator
    // Has conflict: get(index: number): any
    // Has conflict: set(index: number, item: any): void
    // Has conflict: indexOf(item: any): number
    // Has conflict: insert(index: number, item: any): void
    // Has conflict: removeAt(index: number): any
    // Has conflict: slice(start: number, stop: number): List | null
    // Has conflict: first(): any
    // Has conflict: last(): any
    // Has conflict: insertAll(index: number, collection: Collection): void
    // Has conflict: sort(compareFunc: GLib.CompareDataFunc | null): void
    // Has conflict: getReadOnlyView(): List

    // Own virtual methods of Gee-0.8.Gee.List

    listIterator(): ListIterator
    get(index: number): any
    set(index: number, item: any): void
    indexOf(item: any): number
    insert(index: number, item: any): void
    removeAt(index: number): any
    slice(start: number, stop: number): List | null
    first(): any
    last(): any
    insertAll(index: number, collection: Collection): void
    sort(compareFunc: GLib.CompareDataFunc | null): void
    getReadOnlyView(): List

    // Overloads of getReadOnlyView

    getReadOnlyView(): Collection

    // Class property signals of Gee-0.8.Gee.List

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
    disconnect(id: number): void
}

class List extends GObject.Object {

    // Own properties of Gee-0.8.Gee.List

    static name: string

    // Constructors of Gee-0.8.Gee.List

    constructor(config?: List.ConstructorProperties) 
    _init(config?: List.ConstructorProperties): void
    static empty(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify): List

    // Overloads of empty

    static empty(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify): Collection
}

module ListIterator {

    // Constructor properties interface

    interface ConstructorProperties extends Iterator.ConstructorProperties, GObject.Object.ConstructorProperties {
    }

}

interface ListIterator extends Iterator {

    // Own properties of Gee-0.8.Gee.ListIterator

    __gtype__: number

    // Owm methods of Gee-0.8.Gee.ListIterator

    // Has conflict: set(item: any): void
    // Has conflict: add(item: any): void
    // Has conflict: index(): number

    // Own virtual methods of Gee-0.8.Gee.ListIterator

    set(item: any): void
    add(item: any): void
    index(): number

    // Class property signals of Gee-0.8.Gee.ListIterator

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
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
    disconnect(id: number): void
}

class ListIterator extends GObject.Object {

    // Own properties of Gee-0.8.Gee.ListIterator

    static name: string

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
    __gtype__: number

    // Owm methods of Gee-0.8.Gee.Map

    // Has conflict: hasKey(key: any): boolean
    contains(key: any): boolean
    // Has conflict: has(key: any, value: any): boolean
    // Has conflict: get(key: any): any | null
    // Has conflict: set(key: any, value: any): void
    // Has conflict: unset(key: any): [ /* returnType */ boolean, /* value */ any ]
    remove(key: any): [ /* returnType */ boolean, /* value */ any ]
    // Has conflict: clear(): void
    // Has conflict: mapIterator(): MapIterator
    // Has conflict: setAll(map: Map): void
    // Has conflict: unsetAll(map: Map): boolean
    removeAll(map: Map): boolean
    // Has conflict: hasAll(map: Map): boolean
    containsAll(map: Map): boolean
    // Has conflict: getSize(): number
    // Has conflict: getIsEmpty(): boolean
    // Has conflict: getReadOnly(): boolean
    // Has conflict: getKeys(): Set
    // Has conflict: getValues(): Collection
    // Has conflict: getEntries(): Set
    // Has conflict: getReadOnlyView(): Map
    getKeyType(): GObject.GType
    getValueType(): GObject.GType

    // Own virtual methods of Gee-0.8.Gee.Map

    hasKey(key: any): boolean
    has(key: any, value: any): boolean
    get(key: any): any | null
    set(key: any, value: any): void
    unset(key: any): [ /* returnType */ boolean, /* value */ any ]
    clear(): void
    mapIterator(): MapIterator
    setAll(map: Map): void
    unsetAll(map: Map): boolean
    hasAll(map: Map): boolean
    getSize(): number
    getIsEmpty(): boolean
    getReadOnly(): boolean
    getKeys(): Set
    getValues(): Collection
    getEntries(): Set
    getReadOnlyView(): Map

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
    disconnect(id: number): void
}

class Map {

    // Own properties of Gee-0.8.Gee.Map

    static name: string

    // Constructors of Gee-0.8.Gee.Map

    constructor(config?: Map.ConstructorProperties) 
    _init(config?: Map.ConstructorProperties): void
    static empty(kType: GObject.GType, kDupFunc: GObject.BoxedCopyFunc, kDestroyFunc: GLib.DestroyNotify, vType: GObject.GType, vDupFunc: GObject.BoxedCopyFunc, vDestroyFunc: GLib.DestroyNotify): Map
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
    __gtype__: number

    // Owm methods of Gee-0.8.Gee.MapIterator

    // Has conflict: next(): boolean
    // Has conflict: hasNext(): boolean
    // Has conflict: getKey(): any
    // Has conflict: getValue(): any
    // Has conflict: setValue(value: any): void
    // Has conflict: unset(): void
    // Has conflict: fold(aType: GObject.GType, aDupFunc: GObject.BoxedCopyFunc, aDestroyFunc: GLib.DestroyNotify, f: FoldMapFunc, seed: any): any
    // Has conflict: foreach(f: ForallMapFunc): boolean
    // Has conflict: getValid(): boolean
    // Has conflict: getMutable(): boolean
    // Has conflict: getReadOnly(): boolean

    // Own virtual methods of Gee-0.8.Gee.MapIterator

    next(): boolean
    hasNext(): boolean
    getKey(): any
    getValue(): any
    setValue(value: any): void
    unset(): void
    fold(aType: GObject.GType, aDupFunc: GObject.BoxedCopyFunc, aDestroyFunc: GLib.DestroyNotify, f: FoldMapFunc, seed: any): any
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
    disconnect(id: number): void
}

class MapIterator {

    // Own properties of Gee-0.8.Gee.MapIterator

    static name: string

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
    __gtype__: number

    // Owm methods of Gee-0.8.Gee.MultiMap

    // Has conflict: getKeys(): Set
    // Has conflict: getAllKeys(): MultiSet
    // Has conflict: getValues(): Collection
    // Has conflict: contains(key: any): boolean
    // Has conflict: get(key: any): Collection
    // Has conflict: set(key: any, value: any): void
    // Has conflict: remove(key: any, value: any): boolean
    // Has conflict: removeAll(key: any): boolean
    // Has conflict: clear(): void
    // Has conflict: mapIterator(): MapIterator
    // Has conflict: getSize(): number
    // Has conflict: getReadOnly(): boolean
    getKeyType(): GObject.GType
    getValueType(): GObject.GType
    // Has conflict: getReadOnlyView(): MultiMap

    // Own virtual methods of Gee-0.8.Gee.MultiMap

    getKeys(): Set
    getAllKeys(): MultiSet
    getValues(): Collection
    contains(key: any): boolean
    get(key: any): Collection
    set(key: any, value: any): void
    remove(key: any, value: any): boolean
    removeAll(key: any): boolean
    clear(): void
    mapIterator(): MapIterator
    getSize(): number
    getReadOnly(): boolean
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
    disconnect(id: number): void
}

class MultiMap {

    // Own properties of Gee-0.8.Gee.MultiMap

    static name: string

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

    // Own properties of Gee-0.8.Gee.MultiSet

    __gtype__: number

    // Owm methods of Gee-0.8.Gee.MultiSet

    // Has conflict: count(item: any): number
    // Has conflict: getReadOnlyView(): MultiSet

    // Own virtual methods of Gee-0.8.Gee.MultiSet

    count(item: any): number
    getReadOnlyView(): MultiSet

    // Overloads of getReadOnlyView

    getReadOnlyView(): Collection

    // Class property signals of Gee-0.8.Gee.MultiSet

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
    disconnect(id: number): void
}

class MultiSet extends GObject.Object {

    // Own properties of Gee-0.8.Gee.MultiSet

    static name: string

    // Constructors of Gee-0.8.Gee.MultiSet

    constructor(config?: MultiSet.ConstructorProperties) 
    _init(config?: MultiSet.ConstructorProperties): void
    static empty(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify): Set

    // Overloads of empty

    static empty(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify): Collection
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
    __gtype__: number

    // Owm methods of Gee-0.8.Gee.Queue

    // Has conflict: offer(element: any): boolean
    // Has conflict: peek(): any | null
    // Has conflict: poll(): any | null
    // Has conflict: drain(recipient: Collection, amount: number): number
    // Has conflict: getCapacity(): number
    // Has conflict: getRemainingCapacity(): number
    // Has conflict: getIsFull(): boolean

    // Own virtual methods of Gee-0.8.Gee.Queue

    offer(element: any): boolean
    peek(): any | null
    poll(): any | null
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
    disconnect(id: number): void
}

class Queue extends GObject.Object {

    // Own properties of Gee-0.8.Gee.Queue

    static name: string

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
    __gtype__: number

    // Owm methods of Gee-0.8.Gee.Set

    // Has conflict: getReadOnlyView(): Set

    // Own virtual methods of Gee-0.8.Gee.Set

    getReadOnlyView(): Set

    // Overloads of getReadOnlyView

    getReadOnlyView(): Collection

    // Class property signals of Gee-0.8.Gee.Set

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
    disconnect(id: number): void
}

class Set extends GObject.Object {

    // Own properties of Gee-0.8.Gee.Set

    static name: string

    // Constructors of Gee-0.8.Gee.Set

    constructor(config?: Set.ConstructorProperties) 
    _init(config?: Set.ConstructorProperties): void
    static empty(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify): Set

    // Overloads of empty

    static empty(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify): Collection
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
    __gtype__: number

    // Owm methods of Gee-0.8.Gee.SortedMap

    // Has conflict: headMap(before: any): SortedMap
    // Has conflict: tailMap(after: any): SortedMap
    // Has conflict: subMap(before: any, after: any): SortedMap
    // Has conflict: getAscendingKeys(): SortedSet
    // Has conflict: getAscendingEntries(): SortedSet
    // Has conflict: getReadOnlyView(): SortedMap

    // Own virtual methods of Gee-0.8.Gee.SortedMap

    headMap(before: any): SortedMap
    tailMap(after: any): SortedMap
    subMap(before: any, after: any): SortedMap
    getAscendingKeys(): SortedSet
    getAscendingEntries(): SortedSet
    getReadOnlyView(): SortedMap

    // Overloads of getReadOnlyView

    getReadOnlyView(): Map

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
    disconnect(id: number): void
}

class SortedMap extends GObject.Object {

    // Own properties of Gee-0.8.Gee.SortedMap

    static name: string

    // Constructors of Gee-0.8.Gee.SortedMap

    constructor(config?: SortedMap.ConstructorProperties) 
    _init(config?: SortedMap.ConstructorProperties): void
    static empty(kType: GObject.GType, kDupFunc: GObject.BoxedCopyFunc, kDestroyFunc: GLib.DestroyNotify, vType: GObject.GType, vDupFunc: GObject.BoxedCopyFunc, vDestroyFunc: GLib.DestroyNotify): Map
}

module SortedSet {

    // Constructor properties interface

    interface ConstructorProperties extends Set.ConstructorProperties, GObject.Object.ConstructorProperties {
    }

}

interface SortedSet extends Set {

    // Own properties of Gee-0.8.Gee.SortedSet

    readonly readOnlyView: any
    __gtype__: number

    // Owm methods of Gee-0.8.Gee.SortedSet

    // Has conflict: first(): any
    // Has conflict: last(): any
    // Has conflict: iteratorAt(element: any): Iterator | null
    // Has conflict: lower(element: any): any | null
    // Has conflict: higher(element: any): any | null
    // Has conflict: floor(element: any): any | null
    // Has conflict: ceil(element: any): any | null
    // Has conflict: headSet(before: any): SortedSet
    // Has conflict: tailSet(after: any): SortedSet
    // Has conflict: subSet(from: any, to: any): SortedSet
    // Has conflict: getReadOnlyView(): SortedSet

    // Own virtual methods of Gee-0.8.Gee.SortedSet

    first(): any
    last(): any
    iteratorAt(element: any): Iterator | null
    lower(element: any): any | null
    higher(element: any): any | null
    floor(element: any): any | null
    ceil(element: any): any | null
    headSet(before: any): SortedSet
    tailSet(after: any): SortedSet
    subSet(from: any, to: any): SortedSet
    getReadOnlyView(): SortedSet

    // Overloads of getReadOnlyView

    getReadOnlyView(): Set
    getReadOnlyView(): Collection

    // Class property signals of Gee-0.8.Gee.SortedSet

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
    disconnect(id: number): void
}

class SortedSet extends GObject.Object {

    // Own properties of Gee-0.8.Gee.SortedSet

    static name: string

    // Constructors of Gee-0.8.Gee.SortedSet

    constructor(config?: SortedSet.ConstructorProperties) 
    _init(config?: SortedSet.ConstructorProperties): void
    static empty(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify): SortedSet

    // Overloads of empty

    static empty(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify): Set
    static empty(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify): Collection
}

module Traversable {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface Traversable extends GObject.Object {

    // Own properties of Gee-0.8.Gee.Traversable

    __gtype__: number

    // Owm methods of Gee-0.8.Gee.Traversable

    // Has conflict: foreach(f: ForallFunc): boolean
    // Has conflict: stream(aType: GObject.GType, aDupFunc: GObject.BoxedCopyFunc, aDestroyFunc: GLib.DestroyNotify, f: StreamFunc): Iterator
    // Has conflict: fold(aType: GObject.GType, aDupFunc: GObject.BoxedCopyFunc, aDestroyFunc: GLib.DestroyNotify, f: FoldFunc, seed: any): any
    // Has conflict: map(aType: GObject.GType, aDupFunc: GObject.BoxedCopyFunc, aDestroyFunc: GLib.DestroyNotify, f: MapFunc): Iterator
    // Has conflict: scan(aType: GObject.GType, aDupFunc: GObject.BoxedCopyFunc, aDestroyFunc: GLib.DestroyNotify, f: FoldFunc, seed: any): Iterator
    // Has conflict: filter(pred: Predicate): Iterator
    // Has conflict: chop(offset: number, length: number): Iterator
    // Has conflict: flatMap(aType: GObject.GType, aDupFunc: GObject.BoxedCopyFunc, aDestroyFunc: GLib.DestroyNotify, f: FlatMapFunc): Iterator
    // Has conflict: tee(forks: number): Iterator[]
    // Has conflict: firstMatch(pred: Predicate): any | null
    // Has conflict: anyMatch(pred: Predicate): boolean
    // Has conflict: allMatch(pred: Predicate): boolean
    // Has conflict: max(compare: GLib.CompareDataFunc): any
    // Has conflict: min(compare: GLib.CompareDataFunc): any
    // Has conflict: orderBy(compare: GLib.CompareDataFunc | null): Iterator
    // Has conflict: getElementType(): GObject.GType

    // Own virtual methods of Gee-0.8.Gee.Traversable

    foreach(f: ForallFunc): boolean
    stream(aType: GObject.GType, aDupFunc: GObject.BoxedCopyFunc, aDestroyFunc: GLib.DestroyNotify, f: StreamFunc): Iterator
    fold(aType: GObject.GType, aDupFunc: GObject.BoxedCopyFunc, aDestroyFunc: GLib.DestroyNotify, f: FoldFunc, seed: any): any
    map(aType: GObject.GType, aDupFunc: GObject.BoxedCopyFunc, aDestroyFunc: GLib.DestroyNotify, f: MapFunc): Iterator
    scan(aType: GObject.GType, aDupFunc: GObject.BoxedCopyFunc, aDestroyFunc: GLib.DestroyNotify, f: FoldFunc, seed: any): Iterator
    filter(pred: Predicate): Iterator
    chop(offset: number, length: number): Iterator
    flatMap(aType: GObject.GType, aDupFunc: GObject.BoxedCopyFunc, aDestroyFunc: GLib.DestroyNotify, f: FlatMapFunc): Iterator
    tee(forks: number): Iterator[]
    firstMatch(pred: Predicate): any | null
    anyMatch(pred: Predicate): boolean
    allMatch(pred: Predicate): boolean
    max(compare: GLib.CompareDataFunc): any
    min(compare: GLib.CompareDataFunc): any
    orderBy(compare: GLib.CompareDataFunc | null): Iterator
    getElementType(): GObject.GType

    // Class property signals of Gee-0.8.Gee.Traversable

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
    disconnect(id: number): void
}

class Traversable {

    // Own properties of Gee-0.8.Gee.Traversable

    static name: string

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
    __gtype__: number

    // Owm methods of Gee-0.8.Gee.AbstractBidirList

    // Has conflict: bidirListIterator(): BidirListIterator
    // Has conflict: reserved0(): void
    // Has conflict: reserved1(): void
    // Has conflict: reserved2(): void
    // Has conflict: reserved3(): void
    // Has conflict: reserved4(): void
    // Has conflict: reserved5(): void
    // Has conflict: reserved6(): void
    // Has conflict: reserved7(): void
    // Has conflict: reserved8(): void
    // Has conflict: reserved9(): void
    // Has conflict: getReadOnlyView(): BidirList

    // Conflicting methods

    listIterator(): ListIterator

    // Overloads of listIterator

    listIterator(): ListIterator
    listIterator(): ListIterator
    get(index: number): any

    // Overloads of get

    get(index: number): any
    get(index: number): any
    set(index: number, item: any): void

    // Overloads of set

    set(index: number, item: any): void
    set(index: number, item: any): void
    indexOf(item: any): number

    // Overloads of indexOf

    indexOf(item: any): number
    indexOf(item: any): number
    insert(index: number, item: any): void

    // Overloads of insert

    insert(index: number, item: any): void
    insert(index: number, item: any): void
    removeAt(index: number): any

    // Overloads of removeAt

    removeAt(index: number): any
    removeAt(index: number): any
    slice(start: number, stop: number): List | null

    // Overloads of slice

    slice(start: number, stop: number): List | null
    slice(start: number, stop: number): List | null
    contains(item: any): boolean

    // Overloads of contains

    contains(item: any): boolean
    contains(item: any): boolean
    add(item: any): boolean

    // Overloads of add

    add(item: any): boolean
    add(item: any): boolean
    remove(item: any): boolean

    // Overloads of remove

    remove(item: any): boolean
    remove(item: any): boolean
    clear(): void

    // Overloads of clear

    clear(): void
    clear(): void
    getSize(): number

    // Overloads of getSize

    getSize(): number
    getSize(): number
    getReadOnly(): boolean

    // Overloads of getReadOnly

    getReadOnly(): boolean
    getReadOnly(): boolean
    iterator(): Iterator

    // Overloads of iterator

    iterator(): Iterator
    iterator(): Iterator
    foreach(f: ForallFunc): boolean

    // Overloads of foreach

    foreach(f: ForallFunc): boolean
    foreach(f: ForallFunc): boolean

    // Own virtual methods of Gee-0.8.Gee.AbstractBidirList

    bidirListIterator(): BidirListIterator

    // Overloads of bidirListIterator

    bidirListIterator(): BidirListIterator
    reserved0(): void

    // Overloads of reserved0

    reserved0(): void
    reserved1(): void

    // Overloads of reserved1

    reserved1(): void
    reserved2(): void

    // Overloads of reserved2

    reserved2(): void
    reserved3(): void

    // Overloads of reserved3

    reserved3(): void
    reserved4(): void

    // Overloads of reserved4

    reserved4(): void
    reserved5(): void

    // Overloads of reserved5

    reserved5(): void
    reserved6(): void

    // Overloads of reserved6

    reserved6(): void
    reserved7(): void

    // Overloads of reserved7

    reserved7(): void
    reserved8(): void

    // Overloads of reserved8

    reserved8(): void
    reserved9(): void

    // Overloads of reserved9

    reserved9(): void
    getReadOnlyView(): BidirList

    // Overloads of getReadOnlyView

    getReadOnlyView(): BidirList
    getReadOnlyView(): List
    getReadOnlyView(): Collection

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
    disconnect(id: number): void
}

class AbstractBidirList extends AbstractList {

    // Own properties of Gee-0.8.Gee.AbstractBidirList

    static name: string

    // Constructors of Gee-0.8.Gee.AbstractBidirList

    constructor(config?: AbstractBidirList.ConstructorProperties) 
    _init(config?: AbstractBidirList.ConstructorProperties): void

    // Conflicting static methods

    static empty(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify): List

    // Overloads of empty

    static empty(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify): Collection
    static empty(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify): Collection
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
    __gtype__: number

    // Owm methods of Gee-0.8.Gee.AbstractBidirSortedSet

    // Has conflict: bidirIterator(): BidirIterator
    // Has conflict: reserved0(): void
    // Has conflict: reserved1(): void
    // Has conflict: reserved2(): void
    // Has conflict: reserved3(): void
    // Has conflict: reserved4(): void
    // Has conflict: reserved5(): void
    // Has conflict: reserved6(): void
    // Has conflict: reserved7(): void
    // Has conflict: reserved8(): void
    // Has conflict: reserved9(): void
    // Has conflict: getReadOnlyView(): BidirSortedSet

    // Conflicting methods

    first(): any

    // Overloads of first

    first(): any
    first(): any
    last(): any

    // Overloads of last

    last(): any
    last(): any
    iteratorAt(element: any): Iterator | null

    // Overloads of iteratorAt

    iteratorAt(element: any): Iterator | null
    iteratorAt(element: any): Iterator | null
    lower(element: any): any | null

    // Overloads of lower

    lower(element: any): any | null
    lower(element: any): any | null
    higher(element: any): any | null

    // Overloads of higher

    higher(element: any): any | null
    higher(element: any): any | null
    floor(element: any): any | null

    // Overloads of floor

    floor(element: any): any | null
    floor(element: any): any | null
    ceil(element: any): any | null

    // Overloads of ceil

    ceil(element: any): any | null
    ceil(element: any): any | null
    headSet(before: any): SortedSet

    // Overloads of headSet

    headSet(before: any): SortedSet
    headSet(before: any): SortedSet
    tailSet(after: any): SortedSet

    // Overloads of tailSet

    tailSet(after: any): SortedSet
    tailSet(after: any): SortedSet
    subSet(from: any, to: any): SortedSet

    // Overloads of subSet

    subSet(from: any, to: any): SortedSet
    subSet(from: any, to: any): SortedSet
    contains(item: any): boolean

    // Overloads of contains

    contains(item: any): boolean
    contains(item: any): boolean
    add(item: any): boolean

    // Overloads of add

    add(item: any): boolean
    add(item: any): boolean
    remove(item: any): boolean

    // Overloads of remove

    remove(item: any): boolean
    remove(item: any): boolean
    clear(): void

    // Overloads of clear

    clear(): void
    clear(): void
    getSize(): number

    // Overloads of getSize

    getSize(): number
    getSize(): number
    getReadOnly(): boolean

    // Overloads of getReadOnly

    getReadOnly(): boolean
    getReadOnly(): boolean
    iterator(): Iterator

    // Overloads of iterator

    iterator(): Iterator
    iterator(): Iterator
    foreach(f: ForallFunc): boolean

    // Overloads of foreach

    foreach(f: ForallFunc): boolean
    foreach(f: ForallFunc): boolean

    // Own virtual methods of Gee-0.8.Gee.AbstractBidirSortedSet

    bidirIterator(): BidirIterator

    // Overloads of bidirIterator

    bidirIterator(): BidirIterator
    reserved0(): void

    // Overloads of reserved0

    reserved0(): void
    reserved1(): void

    // Overloads of reserved1

    reserved1(): void
    reserved2(): void

    // Overloads of reserved2

    reserved2(): void
    reserved3(): void

    // Overloads of reserved3

    reserved3(): void
    reserved4(): void

    // Overloads of reserved4

    reserved4(): void
    reserved5(): void

    // Overloads of reserved5

    reserved5(): void
    reserved6(): void

    // Overloads of reserved6

    reserved6(): void
    reserved7(): void

    // Overloads of reserved7

    reserved7(): void
    reserved8(): void

    // Overloads of reserved8

    reserved8(): void
    reserved9(): void

    // Overloads of reserved9

    reserved9(): void
    getReadOnlyView(): BidirSortedSet

    // Overloads of getReadOnlyView

    getReadOnlyView(): BidirSortedSet
    getReadOnlyView(): SortedSet
    getReadOnlyView(): Set
    getReadOnlyView(): Collection

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
    disconnect(id: number): void
}

class AbstractBidirSortedSet extends AbstractSortedSet {

    // Own properties of Gee-0.8.Gee.AbstractBidirSortedSet

    static name: string

    // Constructors of Gee-0.8.Gee.AbstractBidirSortedSet

    constructor(config?: AbstractBidirSortedSet.ConstructorProperties) 
    _init(config?: AbstractBidirSortedSet.ConstructorProperties): void

    // Conflicting static methods

    static empty(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify): BidirSortedSet

    // Overloads of empty

    static empty(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify): SortedSet
    static empty(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify): Set
    static empty(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify): Collection
    static empty(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify): SortedSet

    // Overloads of empty

    static empty(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify): Set
    static empty(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify): Collection
    static empty(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify): Set

    // Overloads of empty

    static empty(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify): Collection
    static empty(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify): Collection
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
    __gtype__: number

    // Owm methods of Gee-0.8.Gee.AbstractBidirSortedMap

    // Has conflict: bidirMapIterator(): BidirMapIterator
    // Has conflict: reserved0(): void
    // Has conflict: reserved1(): void
    // Has conflict: reserved2(): void
    // Has conflict: reserved3(): void
    // Has conflict: reserved4(): void
    // Has conflict: reserved5(): void
    // Has conflict: reserved6(): void
    // Has conflict: reserved7(): void
    // Has conflict: reserved8(): void
    // Has conflict: reserved9(): void
    // Has conflict: getReadOnlyView(): BidirSortedMap

    // Conflicting methods

    headMap(before: any): SortedMap

    // Overloads of headMap

    headMap(before: any): SortedMap
    headMap(before: any): SortedMap
    tailMap(after: any): SortedMap

    // Overloads of tailMap

    tailMap(after: any): SortedMap
    tailMap(after: any): SortedMap
    subMap(before: any, after: any): SortedMap

    // Overloads of subMap

    subMap(before: any, after: any): SortedMap
    subMap(before: any, after: any): SortedMap
    getAscendingKeys(): SortedSet

    // Overloads of getAscendingKeys

    getAscendingKeys(): SortedSet
    getAscendingKeys(): SortedSet
    getAscendingEntries(): SortedSet

    // Overloads of getAscendingEntries

    getAscendingEntries(): SortedSet
    getAscendingEntries(): SortedSet
    hasKey(key: any): boolean

    // Overloads of hasKey

    hasKey(key: any): boolean
    hasKey(key: any): boolean
    has(key: any, value: any): boolean

    // Overloads of has

    has(key: any, value: any): boolean
    has(key: any, value: any): boolean
    get(key: any): any | null

    // Overloads of get

    get(key: any): any | null
    get(key: any): any | null
    set(key: any, value: any): void

    // Overloads of set

    set(key: any, value: any): void
    set(key: any, value: any): void
    unset(key: any): [ /* returnType */ boolean, /* value */ any ]

    // Overloads of unset

    unset(key: any): [ /* returnType */ boolean, /* value */ any ]
    unset(key: any): [ /* returnType */ boolean, /* value */ any ]
    clear(): void

    // Overloads of clear

    clear(): void
    clear(): void
    mapIterator(): MapIterator

    // Overloads of mapIterator

    mapIterator(): MapIterator
    mapIterator(): MapIterator
    getSize(): number

    // Overloads of getSize

    getSize(): number
    getSize(): number
    getReadOnly(): boolean

    // Overloads of getReadOnly

    getReadOnly(): boolean
    getReadOnly(): boolean
    getKeys(): Set

    // Overloads of getKeys

    getKeys(): Set
    getKeys(): Set
    getValues(): Collection

    // Overloads of getValues

    getValues(): Collection
    getValues(): Collection
    getEntries(): Set

    // Overloads of getEntries

    getEntries(): Set
    getEntries(): Set
    foreach(f: ForallFunc): boolean

    // Overloads of foreach

    foreach(f: ForallFunc): boolean
    foreach(f: ForallFunc): boolean
    stream(aType: GObject.GType, aDupFunc: GObject.BoxedCopyFunc, aDestroyFunc: GLib.DestroyNotify, f: StreamFunc): Iterator

    // Overloads of stream

    stream(aType: GObject.GType, aDupFunc: GObject.BoxedCopyFunc, aDestroyFunc: GLib.DestroyNotify, f: StreamFunc): Iterator
    stream(aType: GObject.GType, aDupFunc: GObject.BoxedCopyFunc, aDestroyFunc: GLib.DestroyNotify, f: StreamFunc): Iterator

    // Own virtual methods of Gee-0.8.Gee.AbstractBidirSortedMap

    bidirMapIterator(): BidirMapIterator

    // Overloads of bidirMapIterator

    bidirMapIterator(): BidirMapIterator
    reserved0(): void

    // Overloads of reserved0

    reserved0(): void
    reserved1(): void

    // Overloads of reserved1

    reserved1(): void
    reserved2(): void

    // Overloads of reserved2

    reserved2(): void
    reserved3(): void

    // Overloads of reserved3

    reserved3(): void
    reserved4(): void

    // Overloads of reserved4

    reserved4(): void
    reserved5(): void

    // Overloads of reserved5

    reserved5(): void
    reserved6(): void

    // Overloads of reserved6

    reserved6(): void
    reserved7(): void

    // Overloads of reserved7

    reserved7(): void
    reserved8(): void

    // Overloads of reserved8

    reserved8(): void
    reserved9(): void

    // Overloads of reserved9

    reserved9(): void
    getReadOnlyView(): BidirSortedMap

    // Overloads of getReadOnlyView

    getReadOnlyView(): BidirSortedMap
    getReadOnlyView(): SortedMap
    getReadOnlyView(): Map

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
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
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
    disconnect(id: number): void
}

class AbstractBidirSortedMap extends AbstractSortedMap {

    // Own properties of Gee-0.8.Gee.AbstractBidirSortedMap

    static name: string

    // Constructors of Gee-0.8.Gee.AbstractBidirSortedMap

    constructor(config?: AbstractBidirSortedMap.ConstructorProperties) 
    _init(config?: AbstractBidirSortedMap.ConstructorProperties): void

    // Conflicting static methods

    static empty(kType: GObject.GType, kDupFunc: GObject.BoxedCopyFunc, kDestroyFunc: GLib.DestroyNotify, vType: GObject.GType, vDupFunc: GObject.BoxedCopyFunc, vDestroyFunc: GLib.DestroyNotify): BidirSortedMap

    // Overloads of empty

    static empty(kType: GObject.GType, kDupFunc: GObject.BoxedCopyFunc, kDestroyFunc: GLib.DestroyNotify, vType: GObject.GType, vDupFunc: GObject.BoxedCopyFunc, vDestroyFunc: GLib.DestroyNotify): Map
    static empty(kType: GObject.GType, kDupFunc: GObject.BoxedCopyFunc, kDestroyFunc: GLib.DestroyNotify, vType: GObject.GType, vDupFunc: GObject.BoxedCopyFunc, vDestroyFunc: GLib.DestroyNotify): Map
    static empty(kType: GObject.GType, kDupFunc: GObject.BoxedCopyFunc, kDestroyFunc: GLib.DestroyNotify, vType: GObject.GType, vDupFunc: GObject.BoxedCopyFunc, vDestroyFunc: GLib.DestroyNotify): Map
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
    __gtype__: number

    // Owm methods of Gee-0.8.Gee.AbstractCollection

    // Has conflict: contains(item: any): boolean
    // Has conflict: add(item: any): boolean
    // Has conflict: remove(item: any): boolean
    // Has conflict: clear(): void
    // Has conflict: iterator(): Iterator
    // Has conflict: foreach(f: ForallFunc): boolean
    // Has conflict: reserved0(): void
    // Has conflict: reserved1(): void
    // Has conflict: reserved2(): void
    // Has conflict: reserved3(): void
    // Has conflict: reserved4(): void
    // Has conflict: reserved5(): void
    // Has conflict: reserved6(): void
    // Has conflict: reserved7(): void
    // Has conflict: reserved8(): void
    // Has conflict: reserved9(): void
    // Has conflict: getSize(): number
    // Has conflict: getReadOnly(): boolean
    // Has conflict: getReadOnlyView(): Collection

    // Own virtual methods of Gee-0.8.Gee.AbstractCollection

    contains(item: any): boolean

    // Overloads of contains

    contains(item: any): boolean
    add(item: any): boolean

    // Overloads of add

    add(item: any): boolean
    remove(item: any): boolean

    // Overloads of remove

    remove(item: any): boolean
    clear(): void

    // Overloads of clear

    clear(): void
    iterator(): Iterator

    // Overloads of iterator

    iterator(): Iterator
    foreach(f: ForallFunc): boolean

    // Overloads of foreach

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

    // Overloads of getSize

    getSize(): number
    getReadOnly(): boolean

    // Overloads of getReadOnly

    getReadOnly(): boolean
    getReadOnlyView(): Collection

    // Overloads of getReadOnlyView

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
    disconnect(id: number): void
}

class AbstractCollection extends GObject.Object {

    // Own properties of Gee-0.8.Gee.AbstractCollection

    static name: string

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
    __gtype__: number

    // Owm methods of Gee-0.8.Gee.AbstractList

    // Has conflict: listIterator(): ListIterator
    // Has conflict: get(index: number): any
    // Has conflict: set(index: number, item: any): void
    // Has conflict: indexOf(item: any): number
    // Has conflict: insert(index: number, item: any): void
    // Has conflict: removeAt(index: number): any
    // Has conflict: slice(start: number, stop: number): List | null
    // Has conflict: reserved0(): void
    // Has conflict: reserved1(): void
    // Has conflict: reserved2(): void
    // Has conflict: reserved3(): void
    // Has conflict: reserved4(): void
    // Has conflict: reserved5(): void
    // Has conflict: reserved6(): void
    // Has conflict: reserved7(): void
    // Has conflict: reserved8(): void
    // Has conflict: reserved9(): void
    // Has conflict: getReadOnlyView(): List

    // Conflicting methods

    contains(item: any): boolean

    // Overloads of contains

    contains(item: any): boolean
    contains(item: any): boolean
    add(item: any): boolean

    // Overloads of add

    add(item: any): boolean
    add(item: any): boolean
    remove(item: any): boolean

    // Overloads of remove

    remove(item: any): boolean
    remove(item: any): boolean
    clear(): void

    // Overloads of clear

    clear(): void
    clear(): void
    getSize(): number

    // Overloads of getSize

    getSize(): number
    getSize(): number
    getReadOnly(): boolean

    // Overloads of getReadOnly

    getReadOnly(): boolean
    getReadOnly(): boolean
    iterator(): Iterator

    // Overloads of iterator

    iterator(): Iterator
    iterator(): Iterator
    foreach(f: ForallFunc): boolean

    // Overloads of foreach

    foreach(f: ForallFunc): boolean
    foreach(f: ForallFunc): boolean

    // Own virtual methods of Gee-0.8.Gee.AbstractList

    listIterator(): ListIterator

    // Overloads of listIterator

    listIterator(): ListIterator
    get(index: number): any

    // Overloads of get

    get(index: number): any
    set(index: number, item: any): void

    // Overloads of set

    set(index: number, item: any): void
    indexOf(item: any): number

    // Overloads of indexOf

    indexOf(item: any): number
    insert(index: number, item: any): void

    // Overloads of insert

    insert(index: number, item: any): void
    removeAt(index: number): any

    // Overloads of removeAt

    removeAt(index: number): any
    slice(start: number, stop: number): List | null

    // Overloads of slice

    slice(start: number, stop: number): List | null
    reserved0(): void

    // Overloads of reserved0

    reserved0(): void
    reserved1(): void

    // Overloads of reserved1

    reserved1(): void
    reserved2(): void

    // Overloads of reserved2

    reserved2(): void
    reserved3(): void

    // Overloads of reserved3

    reserved3(): void
    reserved4(): void

    // Overloads of reserved4

    reserved4(): void
    reserved5(): void

    // Overloads of reserved5

    reserved5(): void
    reserved6(): void

    // Overloads of reserved6

    reserved6(): void
    reserved7(): void

    // Overloads of reserved7

    reserved7(): void
    reserved8(): void

    // Overloads of reserved8

    reserved8(): void
    reserved9(): void

    // Overloads of reserved9

    reserved9(): void
    getReadOnlyView(): List

    // Overloads of getReadOnlyView

    getReadOnlyView(): List
    getReadOnlyView(): Collection

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
    disconnect(id: number): void
}

class AbstractList extends AbstractCollection {

    // Own properties of Gee-0.8.Gee.AbstractList

    static name: string

    // Constructors of Gee-0.8.Gee.AbstractList

    constructor(config?: AbstractList.ConstructorProperties) 
    _init(config?: AbstractList.ConstructorProperties): void

    // Conflicting static methods

    static empty(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify): List

    // Overloads of empty

    static empty(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify): Collection
    static empty(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify): Collection
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
    __gtype__: number

    // Owm methods of Gee-0.8.Gee.AbstractMap

    // Has conflict: hasKey(key: any): boolean
    // Has conflict: has(key: any, value: any): boolean
    // Has conflict: get(key: any): any | null
    // Has conflict: set(key: any, value: any): void
    // Has conflict: unset(key: any): [ /* returnType */ boolean, /* value */ any ]
    // Has conflict: mapIterator(): MapIterator
    // Has conflict: clear(): void
    // Has conflict: foreach(f: ForallFunc): boolean
    // Has conflict: stream(aType: GObject.GType, aDupFunc: GObject.BoxedCopyFunc, aDestroyFunc: GLib.DestroyNotify, f: StreamFunc): Iterator
    // Has conflict: reserved0(): void
    // Has conflict: reserved1(): void
    // Has conflict: reserved2(): void
    // Has conflict: reserved3(): void
    // Has conflict: reserved4(): void
    // Has conflict: reserved5(): void
    // Has conflict: reserved6(): void
    // Has conflict: reserved7(): void
    // Has conflict: reserved8(): void
    // Has conflict: reserved9(): void
    // Has conflict: getSize(): number
    // Has conflict: getReadOnly(): boolean
    // Has conflict: getKeys(): Set
    // Has conflict: getValues(): Collection
    // Has conflict: getEntries(): Set
    // Has conflict: getReadOnlyView(): Map

    // Own virtual methods of Gee-0.8.Gee.AbstractMap

    hasKey(key: any): boolean

    // Overloads of hasKey

    hasKey(key: any): boolean
    has(key: any, value: any): boolean

    // Overloads of has

    has(key: any, value: any): boolean
    get(key: any): any | null

    // Overloads of get

    get(key: any): any | null
    set(key: any, value: any): void

    // Overloads of set

    set(key: any, value: any): void
    unset(key: any): [ /* returnType */ boolean, /* value */ any ]

    // Overloads of unset

    unset(key: any): [ /* returnType */ boolean, /* value */ any ]
    mapIterator(): MapIterator

    // Overloads of mapIterator

    mapIterator(): MapIterator
    clear(): void

    // Overloads of clear

    clear(): void
    foreach(f: ForallFunc): boolean

    // Overloads of foreach

    foreach(f: ForallFunc): boolean
    stream(aType: GObject.GType, aDupFunc: GObject.BoxedCopyFunc, aDestroyFunc: GLib.DestroyNotify, f: StreamFunc): Iterator

    // Overloads of stream

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

    // Overloads of getSize

    getSize(): number
    getReadOnly(): boolean

    // Overloads of getReadOnly

    getReadOnly(): boolean
    getKeys(): Set

    // Overloads of getKeys

    getKeys(): Set
    getValues(): Collection

    // Overloads of getValues

    getValues(): Collection
    getEntries(): Set

    // Overloads of getEntries

    getEntries(): Set
    getReadOnlyView(): Map

    // Overloads of getReadOnlyView

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
    disconnect(id: number): void
}

class AbstractMap extends GObject.Object {

    // Own properties of Gee-0.8.Gee.AbstractMap

    static name: string

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
    __gtype__: number

    // Own fields of Gee-0.8.Gee.AbstractMultiMap

    storageMap: Map

    // Owm methods of Gee-0.8.Gee.AbstractMultiMap

    // Has conflict: createValueStorage(): Collection
    // Has conflict: createMultiKeySet(): MultiSet
    // Has conflict: getValueEqualFunc(): [ /* returnType */ EqualDataFunc, /* resultTarget */ any, /* resultTargetDestroyNotify */ GLib.DestroyNotify ]
    // Has conflict: reserved0(): void
    // Has conflict: reserved1(): void
    // Has conflict: reserved2(): void
    // Has conflict: reserved3(): void
    // Has conflict: reserved4(): void
    // Has conflict: reserved5(): void
    // Has conflict: reserved6(): void
    // Has conflict: reserved7(): void
    // Has conflict: reserved8(): void
    // Has conflict: getReadOnlyView(): MultiMap

    // Own virtual methods of Gee-0.8.Gee.AbstractMultiMap

    createValueStorage(): Collection
    createMultiKeySet(): MultiSet
    getValueEqualFunc(): [ /* returnType */ EqualDataFunc, /* resultTarget */ any, /* resultTargetDestroyNotify */ GLib.DestroyNotify ]
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

    // Overloads of getReadOnlyView

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
    disconnect(id: number): void
}

class AbstractMultiMap extends GObject.Object {

    // Own properties of Gee-0.8.Gee.AbstractMultiMap

    static name: string

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
    __gtype__: number

    // Own fields of Gee-0.8.Gee.AbstractMultiSet

    storageMap: Map

    // Owm methods of Gee-0.8.Gee.AbstractMultiSet

    // Has conflict: reserved0(): void
    // Has conflict: reserved1(): void
    // Has conflict: reserved2(): void
    // Has conflict: reserved3(): void
    // Has conflict: reserved4(): void
    // Has conflict: reserved5(): void
    // Has conflict: reserved6(): void
    // Has conflict: reserved7(): void
    // Has conflict: reserved8(): void
    // Has conflict: getReadOnlyView(): MultiSet

    // Conflicting methods

    contains(item: any): boolean

    // Overloads of contains

    contains(item: any): boolean
    contains(item: any): boolean
    add(item: any): boolean

    // Overloads of add

    add(item: any): boolean
    add(item: any): boolean
    remove(item: any): boolean

    // Overloads of remove

    remove(item: any): boolean
    remove(item: any): boolean
    clear(): void

    // Overloads of clear

    clear(): void
    clear(): void
    getSize(): number

    // Overloads of getSize

    getSize(): number
    getSize(): number
    getReadOnly(): boolean

    // Overloads of getReadOnly

    getReadOnly(): boolean
    getReadOnly(): boolean
    iterator(): Iterator

    // Overloads of iterator

    iterator(): Iterator
    iterator(): Iterator
    foreach(f: ForallFunc): boolean

    // Overloads of foreach

    foreach(f: ForallFunc): boolean
    foreach(f: ForallFunc): boolean

    // Own virtual methods of Gee-0.8.Gee.AbstractMultiSet

    reserved0(): void

    // Overloads of reserved0

    reserved0(): void
    reserved1(): void

    // Overloads of reserved1

    reserved1(): void
    reserved2(): void

    // Overloads of reserved2

    reserved2(): void
    reserved3(): void

    // Overloads of reserved3

    reserved3(): void
    reserved4(): void

    // Overloads of reserved4

    reserved4(): void
    reserved5(): void

    // Overloads of reserved5

    reserved5(): void
    reserved6(): void

    // Overloads of reserved6

    reserved6(): void
    reserved7(): void

    // Overloads of reserved7

    reserved7(): void
    reserved8(): void

    // Overloads of reserved8

    reserved8(): void
    getReadOnlyView(): MultiSet

    // Overloads of getReadOnlyView

    getReadOnlyView(): MultiSet
    getReadOnlyView(): Collection

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
    disconnect(id: number): void
}

class AbstractMultiSet extends AbstractCollection {

    // Own properties of Gee-0.8.Gee.AbstractMultiSet

    static name: string

    // Constructors of Gee-0.8.Gee.AbstractMultiSet

    constructor(config?: AbstractMultiSet.ConstructorProperties) 
    _init(config?: AbstractMultiSet.ConstructorProperties): void

    // Conflicting static methods

    static empty(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify): Set

    // Overloads of empty

    static empty(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify): Collection
    static empty(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify): Collection
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
    __gtype__: number

    // Owm methods of Gee-0.8.Gee.AbstractQueue

    // Has conflict: peek(): any | null
    // Has conflict: poll(): any | null
    // Has conflict: reserved0(): void
    // Has conflict: reserved1(): void
    // Has conflict: reserved2(): void
    // Has conflict: reserved3(): void
    // Has conflict: reserved4(): void
    // Has conflict: reserved5(): void
    // Has conflict: reserved6(): void
    // Has conflict: reserved7(): void
    // Has conflict: reserved8(): void
    // Has conflict: reserved9(): void
    // Has conflict: getCapacity(): number
    // Has conflict: getRemainingCapacity(): number
    // Has conflict: getIsFull(): boolean

    // Conflicting methods

    contains(item: any): boolean

    // Overloads of contains

    contains(item: any): boolean
    contains(item: any): boolean
    add(item: any): boolean

    // Overloads of add

    add(item: any): boolean
    add(item: any): boolean
    remove(item: any): boolean

    // Overloads of remove

    remove(item: any): boolean
    remove(item: any): boolean
    clear(): void

    // Overloads of clear

    clear(): void
    clear(): void
    getSize(): number

    // Overloads of getSize

    getSize(): number
    getSize(): number
    getReadOnly(): boolean

    // Overloads of getReadOnly

    getReadOnly(): boolean
    getReadOnly(): boolean
    getReadOnlyView(): Collection

    // Overloads of getReadOnlyView

    getReadOnlyView(): Collection
    getReadOnlyView(): Collection
    iterator(): Iterator

    // Overloads of iterator

    iterator(): Iterator
    iterator(): Iterator
    foreach(f: ForallFunc): boolean

    // Overloads of foreach

    foreach(f: ForallFunc): boolean
    foreach(f: ForallFunc): boolean

    // Own virtual methods of Gee-0.8.Gee.AbstractQueue

    peek(): any | null

    // Overloads of peek

    peek(): any | null
    poll(): any | null

    // Overloads of poll

    poll(): any | null
    reserved0(): void

    // Overloads of reserved0

    reserved0(): void
    reserved1(): void

    // Overloads of reserved1

    reserved1(): void
    reserved2(): void

    // Overloads of reserved2

    reserved2(): void
    reserved3(): void

    // Overloads of reserved3

    reserved3(): void
    reserved4(): void

    // Overloads of reserved4

    reserved4(): void
    reserved5(): void

    // Overloads of reserved5

    reserved5(): void
    reserved6(): void

    // Overloads of reserved6

    reserved6(): void
    reserved7(): void

    // Overloads of reserved7

    reserved7(): void
    reserved8(): void

    // Overloads of reserved8

    reserved8(): void
    reserved9(): void

    // Overloads of reserved9

    reserved9(): void
    getCapacity(): number

    // Overloads of getCapacity

    getCapacity(): number
    getRemainingCapacity(): number

    // Overloads of getRemainingCapacity

    getRemainingCapacity(): number
    getIsFull(): boolean

    // Overloads of getIsFull

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
    disconnect(id: number): void
}

class AbstractQueue extends AbstractCollection {

    // Own properties of Gee-0.8.Gee.AbstractQueue

    static name: string

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
    __gtype__: number

    // Owm methods of Gee-0.8.Gee.AbstractSet

    // Has conflict: reserved0(): void
    // Has conflict: reserved1(): void
    // Has conflict: reserved2(): void
    // Has conflict: reserved3(): void
    // Has conflict: reserved4(): void
    // Has conflict: reserved5(): void
    // Has conflict: reserved6(): void
    // Has conflict: reserved7(): void
    // Has conflict: reserved8(): void
    // Has conflict: reserved9(): void
    // Has conflict: getReadOnlyView(): Set

    // Conflicting methods

    contains(item: any): boolean

    // Overloads of contains

    contains(item: any): boolean
    contains(item: any): boolean
    add(item: any): boolean

    // Overloads of add

    add(item: any): boolean
    add(item: any): boolean
    remove(item: any): boolean

    // Overloads of remove

    remove(item: any): boolean
    remove(item: any): boolean
    clear(): void

    // Overloads of clear

    clear(): void
    clear(): void
    getSize(): number

    // Overloads of getSize

    getSize(): number
    getSize(): number
    getReadOnly(): boolean

    // Overloads of getReadOnly

    getReadOnly(): boolean
    getReadOnly(): boolean
    iterator(): Iterator

    // Overloads of iterator

    iterator(): Iterator
    iterator(): Iterator
    foreach(f: ForallFunc): boolean

    // Overloads of foreach

    foreach(f: ForallFunc): boolean
    foreach(f: ForallFunc): boolean

    // Own virtual methods of Gee-0.8.Gee.AbstractSet

    reserved0(): void

    // Overloads of reserved0

    reserved0(): void
    reserved1(): void

    // Overloads of reserved1

    reserved1(): void
    reserved2(): void

    // Overloads of reserved2

    reserved2(): void
    reserved3(): void

    // Overloads of reserved3

    reserved3(): void
    reserved4(): void

    // Overloads of reserved4

    reserved4(): void
    reserved5(): void

    // Overloads of reserved5

    reserved5(): void
    reserved6(): void

    // Overloads of reserved6

    reserved6(): void
    reserved7(): void

    // Overloads of reserved7

    reserved7(): void
    reserved8(): void

    // Overloads of reserved8

    reserved8(): void
    reserved9(): void

    // Overloads of reserved9

    reserved9(): void
    getReadOnlyView(): Set

    // Overloads of getReadOnlyView

    getReadOnlyView(): Set
    getReadOnlyView(): Collection

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
    disconnect(id: number): void
}

class AbstractSet extends AbstractCollection {

    // Own properties of Gee-0.8.Gee.AbstractSet

    static name: string

    // Constructors of Gee-0.8.Gee.AbstractSet

    constructor(config?: AbstractSet.ConstructorProperties) 
    _init(config?: AbstractSet.ConstructorProperties): void

    // Conflicting static methods

    static empty(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify): Set

    // Overloads of empty

    static empty(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify): Collection
    static empty(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify): Collection
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
    __gtype__: number

    // Conflicting properties

    readOnlyView: any

    // Owm methods of Gee-0.8.Gee.AbstractSortedMap

    // Has conflict: headMap(before: any): SortedMap
    // Has conflict: tailMap(after: any): SortedMap
    // Has conflict: subMap(before: any, after: any): SortedMap
    // Has conflict: reserved0(): void
    // Has conflict: reserved1(): void
    // Has conflict: reserved2(): void
    // Has conflict: reserved3(): void
    // Has conflict: reserved4(): void
    // Has conflict: reserved5(): void
    // Has conflict: reserved6(): void
    // Has conflict: reserved7(): void
    // Has conflict: reserved8(): void
    // Has conflict: reserved9(): void
    // Has conflict: getAscendingKeys(): SortedSet
    // Has conflict: getAscendingEntries(): SortedSet

    // Conflicting methods

    getReadOnlyView(): SortedMap

    // Overloads of getReadOnlyView

    getReadOnlyView(): Map
    getReadOnlyView(): Map

    // Overloads of getReadOnlyView

    getReadOnlyView(): Map
    getReadOnlyView(): Map
    hasKey(key: any): boolean

    // Overloads of hasKey

    hasKey(key: any): boolean
    hasKey(key: any): boolean
    has(key: any, value: any): boolean

    // Overloads of has

    has(key: any, value: any): boolean
    has(key: any, value: any): boolean
    get(key: any): any | null

    // Overloads of get

    get(key: any): any | null
    get(key: any): any | null
    set(key: any, value: any): void

    // Overloads of set

    set(key: any, value: any): void
    set(key: any, value: any): void
    unset(key: any): [ /* returnType */ boolean, /* value */ any ]

    // Overloads of unset

    unset(key: any): [ /* returnType */ boolean, /* value */ any ]
    unset(key: any): [ /* returnType */ boolean, /* value */ any ]
    clear(): void

    // Overloads of clear

    clear(): void
    clear(): void
    mapIterator(): MapIterator

    // Overloads of mapIterator

    mapIterator(): MapIterator
    mapIterator(): MapIterator
    getSize(): number

    // Overloads of getSize

    getSize(): number
    getSize(): number
    getReadOnly(): boolean

    // Overloads of getReadOnly

    getReadOnly(): boolean
    getReadOnly(): boolean
    getKeys(): Set

    // Overloads of getKeys

    getKeys(): Set
    getKeys(): Set
    getValues(): Collection

    // Overloads of getValues

    getValues(): Collection
    getValues(): Collection
    getEntries(): Set

    // Overloads of getEntries

    getEntries(): Set
    getEntries(): Set
    foreach(f: ForallFunc): boolean

    // Overloads of foreach

    foreach(f: ForallFunc): boolean
    foreach(f: ForallFunc): boolean
    stream(aType: GObject.GType, aDupFunc: GObject.BoxedCopyFunc, aDestroyFunc: GLib.DestroyNotify, f: StreamFunc): Iterator

    // Overloads of stream

    stream(aType: GObject.GType, aDupFunc: GObject.BoxedCopyFunc, aDestroyFunc: GLib.DestroyNotify, f: StreamFunc): Iterator
    stream(aType: GObject.GType, aDupFunc: GObject.BoxedCopyFunc, aDestroyFunc: GLib.DestroyNotify, f: StreamFunc): Iterator

    // Own virtual methods of Gee-0.8.Gee.AbstractSortedMap

    headMap(before: any): SortedMap

    // Overloads of headMap

    headMap(before: any): SortedMap
    tailMap(after: any): SortedMap

    // Overloads of tailMap

    tailMap(after: any): SortedMap
    subMap(before: any, after: any): SortedMap

    // Overloads of subMap

    subMap(before: any, after: any): SortedMap
    reserved0(): void

    // Overloads of reserved0

    reserved0(): void
    reserved1(): void

    // Overloads of reserved1

    reserved1(): void
    reserved2(): void

    // Overloads of reserved2

    reserved2(): void
    reserved3(): void

    // Overloads of reserved3

    reserved3(): void
    reserved4(): void

    // Overloads of reserved4

    reserved4(): void
    reserved5(): void

    // Overloads of reserved5

    reserved5(): void
    reserved6(): void

    // Overloads of reserved6

    reserved6(): void
    reserved7(): void

    // Overloads of reserved7

    reserved7(): void
    reserved8(): void

    // Overloads of reserved8

    reserved8(): void
    reserved9(): void

    // Overloads of reserved9

    reserved9(): void
    getAscendingKeys(): SortedSet

    // Overloads of getAscendingKeys

    getAscendingKeys(): SortedSet
    getAscendingEntries(): SortedSet

    // Overloads of getAscendingEntries

    getAscendingEntries(): SortedSet

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
    disconnect(id: number): void
}

class AbstractSortedMap extends AbstractMap {

    // Own properties of Gee-0.8.Gee.AbstractSortedMap

    static name: string

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
    __gtype__: number

    // Owm methods of Gee-0.8.Gee.AbstractSortedSet

    // Has conflict: first(): any
    // Has conflict: last(): any
    // Has conflict: iteratorAt(element: any): Iterator | null
    // Has conflict: lower(element: any): any | null
    // Has conflict: higher(element: any): any | null
    // Has conflict: floor(element: any): any | null
    // Has conflict: ceil(element: any): any | null
    // Has conflict: headSet(before: any): SortedSet
    // Has conflict: tailSet(after: any): SortedSet
    // Has conflict: subSet(from: any, to: any): SortedSet
    // Has conflict: reserved0(): void
    // Has conflict: reserved1(): void
    // Has conflict: reserved2(): void
    // Has conflict: reserved3(): void
    // Has conflict: reserved4(): void
    // Has conflict: reserved5(): void
    // Has conflict: reserved6(): void
    // Has conflict: reserved7(): void
    // Has conflict: reserved8(): void
    // Has conflict: reserved9(): void
    // Has conflict: getReadOnlyView(): SortedSet

    // Conflicting methods

    contains(item: any): boolean

    // Overloads of contains

    contains(item: any): boolean
    contains(item: any): boolean
    add(item: any): boolean

    // Overloads of add

    add(item: any): boolean
    add(item: any): boolean
    remove(item: any): boolean

    // Overloads of remove

    remove(item: any): boolean
    remove(item: any): boolean
    clear(): void

    // Overloads of clear

    clear(): void
    clear(): void
    getSize(): number

    // Overloads of getSize

    getSize(): number
    getSize(): number
    getReadOnly(): boolean

    // Overloads of getReadOnly

    getReadOnly(): boolean
    getReadOnly(): boolean
    iterator(): Iterator

    // Overloads of iterator

    iterator(): Iterator
    iterator(): Iterator
    foreach(f: ForallFunc): boolean

    // Overloads of foreach

    foreach(f: ForallFunc): boolean
    foreach(f: ForallFunc): boolean

    // Own virtual methods of Gee-0.8.Gee.AbstractSortedSet

    first(): any

    // Overloads of first

    first(): any
    last(): any

    // Overloads of last

    last(): any
    iteratorAt(element: any): Iterator | null

    // Overloads of iteratorAt

    iteratorAt(element: any): Iterator | null
    lower(element: any): any | null

    // Overloads of lower

    lower(element: any): any | null
    higher(element: any): any | null

    // Overloads of higher

    higher(element: any): any | null
    floor(element: any): any | null

    // Overloads of floor

    floor(element: any): any | null
    ceil(element: any): any | null

    // Overloads of ceil

    ceil(element: any): any | null
    headSet(before: any): SortedSet

    // Overloads of headSet

    headSet(before: any): SortedSet
    tailSet(after: any): SortedSet

    // Overloads of tailSet

    tailSet(after: any): SortedSet
    subSet(from: any, to: any): SortedSet

    // Overloads of subSet

    subSet(from: any, to: any): SortedSet
    reserved0(): void

    // Overloads of reserved0

    reserved0(): void
    reserved1(): void

    // Overloads of reserved1

    reserved1(): void
    reserved2(): void

    // Overloads of reserved2

    reserved2(): void
    reserved3(): void

    // Overloads of reserved3

    reserved3(): void
    reserved4(): void

    // Overloads of reserved4

    reserved4(): void
    reserved5(): void

    // Overloads of reserved5

    reserved5(): void
    reserved6(): void

    // Overloads of reserved6

    reserved6(): void
    reserved7(): void

    // Overloads of reserved7

    reserved7(): void
    reserved8(): void

    // Overloads of reserved8

    reserved8(): void
    reserved9(): void

    // Overloads of reserved9

    reserved9(): void
    getReadOnlyView(): SortedSet

    // Overloads of getReadOnlyView

    getReadOnlyView(): SortedSet
    getReadOnlyView(): Set
    getReadOnlyView(): Collection

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
    disconnect(id: number): void
}

class AbstractSortedSet extends AbstractSet {

    // Own properties of Gee-0.8.Gee.AbstractSortedSet

    static name: string

    // Constructors of Gee-0.8.Gee.AbstractSortedSet

    constructor(config?: AbstractSortedSet.ConstructorProperties) 
    _init(config?: AbstractSortedSet.ConstructorProperties): void

    // Conflicting static methods

    static empty(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify): SortedSet

    // Overloads of empty

    static empty(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify): Set
    static empty(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify): Collection
    static empty(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify): Set

    // Overloads of empty

    static empty(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify): Collection
    static empty(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify): Collection
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
    __gtype__: number

    // Conflicting properties

    readOnlyView: any

    // Own fields of Gee-0.8.Gee.ArrayList

    items: any[]
    itemsLength1: number
    size: any

    // Owm methods of Gee-0.8.Gee.ArrayList

    addAll(collection: Collection): boolean

    // Overloads of addAll

    addAll(collection: Collection): boolean
    getEqualFunc(): [ /* returnType */ EqualDataFunc, /* resultTarget */ any ]

    // Conflicting methods

    bidirListIterator(): BidirListIterator

    // Overloads of bidirListIterator

    bidirListIterator(): BidirListIterator
    bidirListIterator(): BidirListIterator
    reserved0(): void

    // Overloads of reserved0

    reserved0(): void
    reserved0(): void

    // Overloads of reserved0

    reserved0(): void
    reserved0(): void
    reserved1(): void

    // Overloads of reserved1

    reserved1(): void
    reserved1(): void

    // Overloads of reserved1

    reserved1(): void
    reserved1(): void
    reserved2(): void

    // Overloads of reserved2

    reserved2(): void
    reserved2(): void

    // Overloads of reserved2

    reserved2(): void
    reserved2(): void
    reserved3(): void

    // Overloads of reserved3

    reserved3(): void
    reserved3(): void

    // Overloads of reserved3

    reserved3(): void
    reserved3(): void
    reserved4(): void

    // Overloads of reserved4

    reserved4(): void
    reserved4(): void

    // Overloads of reserved4

    reserved4(): void
    reserved4(): void
    reserved5(): void

    // Overloads of reserved5

    reserved5(): void
    reserved5(): void

    // Overloads of reserved5

    reserved5(): void
    reserved5(): void
    reserved6(): void

    // Overloads of reserved6

    reserved6(): void
    reserved6(): void

    // Overloads of reserved6

    reserved6(): void
    reserved6(): void
    reserved7(): void

    // Overloads of reserved7

    reserved7(): void
    reserved7(): void

    // Overloads of reserved7

    reserved7(): void
    reserved7(): void
    reserved8(): void

    // Overloads of reserved8

    reserved8(): void
    reserved8(): void

    // Overloads of reserved8

    reserved8(): void
    reserved8(): void
    reserved9(): void

    // Overloads of reserved9

    reserved9(): void
    reserved9(): void

    // Overloads of reserved9

    reserved9(): void
    reserved9(): void
    getReadOnlyView(): BidirList

    // Overloads of getReadOnlyView

    getReadOnlyView(): BidirList
    getReadOnlyView(): List
    getReadOnlyView(): Collection
    getReadOnlyView(): BidirList

    // Overloads of getReadOnlyView

    getReadOnlyView(): List
    getReadOnlyView(): Collection
    getReadOnlyView(): List

    // Overloads of getReadOnlyView

    getReadOnlyView(): List
    getReadOnlyView(): Collection
    getReadOnlyView(): List

    // Overloads of getReadOnlyView

    getReadOnlyView(): Collection
    getReadOnlyView(): Collection

    // Overloads of getReadOnlyView

    getReadOnlyView(): Collection
    getReadOnlyView(): Collection
    listIterator(): ListIterator

    // Overloads of listIterator

    listIterator(): ListIterator
    listIterator(): ListIterator
    get(index: number): any

    // Overloads of get

    get(index: number): any
    get(index: number): any
    set(index: number, item: any): void

    // Overloads of set

    set(index: number, item: any): void
    set(index: number, item: any): void
    indexOf(item: any): number

    // Overloads of indexOf

    indexOf(item: any): number
    indexOf(item: any): number
    insert(index: number, item: any): void

    // Overloads of insert

    insert(index: number, item: any): void
    insert(index: number, item: any): void
    removeAt(index: number): any

    // Overloads of removeAt

    removeAt(index: number): any
    removeAt(index: number): any
    slice(start: number, stop: number): List | null

    // Overloads of slice

    slice(start: number, stop: number): List | null
    slice(start: number, stop: number): List | null
    contains(item: any): boolean

    // Overloads of contains

    contains(item: any): boolean
    contains(item: any): boolean
    add(item: any): boolean

    // Overloads of add

    add(item: any): boolean
    add(item: any): boolean
    remove(item: any): boolean

    // Overloads of remove

    remove(item: any): boolean
    remove(item: any): boolean
    clear(): void

    // Overloads of clear

    clear(): void
    clear(): void
    getSize(): number

    // Overloads of getSize

    getSize(): number
    getSize(): number
    getReadOnly(): boolean

    // Overloads of getReadOnly

    getReadOnly(): boolean
    getReadOnly(): boolean
    iterator(): Iterator

    // Overloads of iterator

    iterator(): Iterator
    iterator(): Iterator
    foreach(f: ForallFunc): boolean

    // Overloads of foreach

    foreach(f: ForallFunc): boolean
    foreach(f: ForallFunc): boolean

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
    disconnect(id: number): void
}

class ArrayList extends AbstractBidirList {

    // Own properties of Gee-0.8.Gee.ArrayList

    static name: string

    // Constructors of Gee-0.8.Gee.ArrayList

    constructor(config?: ArrayList.ConstructorProperties) 
    constructor(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, equalFunc: EqualDataFunc | null) 
    static new(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, equalFunc: EqualDataFunc | null): ArrayList
    static wrap(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, items: any[], equalFunc: EqualDataFunc | null): ArrayList
    _init(config?: ArrayList.ConstructorProperties): void

    // Conflicting static methods

    static empty(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify): List

    // Overloads of empty

    static empty(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify): Collection
    static empty(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify): Collection
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
    __gtype__: number

    // Owm methods of Gee-0.8.Gee.ArrayQueue

    getEqualFunc(): [ /* returnType */ EqualDataFunc, /* resultTarget */ any ]
    getIsEmpty(): boolean

    // Overloads of getIsEmpty

    getIsEmpty(): boolean

    // Conflicting methods

    peek(): any | null

    // Overloads of peek

    peek(): any | null
    peek(): any | null
    poll(): any | null

    // Overloads of poll

    poll(): any | null
    poll(): any | null
    getCapacity(): number

    // Overloads of getCapacity

    getCapacity(): number
    getCapacity(): number
    getRemainingCapacity(): number

    // Overloads of getRemainingCapacity

    getRemainingCapacity(): number
    getRemainingCapacity(): number
    getIsFull(): boolean

    // Overloads of getIsFull

    getIsFull(): boolean
    getIsFull(): boolean
    contains(item: any): boolean

    // Overloads of contains

    contains(item: any): boolean
    contains(item: any): boolean
    add(item: any): boolean

    // Overloads of add

    add(item: any): boolean
    add(item: any): boolean
    remove(item: any): boolean

    // Overloads of remove

    remove(item: any): boolean
    remove(item: any): boolean
    clear(): void

    // Overloads of clear

    clear(): void
    clear(): void
    getSize(): number

    // Overloads of getSize

    getSize(): number
    getSize(): number
    getReadOnly(): boolean

    // Overloads of getReadOnly

    getReadOnly(): boolean
    getReadOnly(): boolean
    getReadOnlyView(): Collection

    // Overloads of getReadOnlyView

    getReadOnlyView(): Collection
    getReadOnlyView(): Collection
    iterator(): Iterator

    // Overloads of iterator

    iterator(): Iterator
    iterator(): Iterator
    foreach(f: ForallFunc): boolean

    // Overloads of foreach

    foreach(f: ForallFunc): boolean
    foreach(f: ForallFunc): boolean
    reserved0(): void

    // Overloads of reserved0

    reserved0(): void
    reserved0(): void
    reserved1(): void

    // Overloads of reserved1

    reserved1(): void
    reserved1(): void
    reserved2(): void

    // Overloads of reserved2

    reserved2(): void
    reserved2(): void
    reserved3(): void

    // Overloads of reserved3

    reserved3(): void
    reserved3(): void
    reserved4(): void

    // Overloads of reserved4

    reserved4(): void
    reserved4(): void
    reserved5(): void

    // Overloads of reserved5

    reserved5(): void
    reserved5(): void
    reserved6(): void

    // Overloads of reserved6

    reserved6(): void
    reserved6(): void
    reserved7(): void

    // Overloads of reserved7

    reserved7(): void
    reserved7(): void
    reserved8(): void

    // Overloads of reserved8

    reserved8(): void
    reserved8(): void
    reserved9(): void

    // Overloads of reserved9

    reserved9(): void
    reserved9(): void

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
    disconnect(id: number): void
}

class ArrayQueue extends AbstractQueue {

    // Own properties of Gee-0.8.Gee.ArrayQueue

    static name: string

    // Constructors of Gee-0.8.Gee.ArrayQueue

    constructor(config?: ArrayQueue.ConstructorProperties) 
    constructor(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, equalFunc: EqualDataFunc | null) 
    static new(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, equalFunc: EqualDataFunc | null): ArrayQueue
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
    __gtype__: number

    // Conflicting properties

    readOnlyView: any

    // Owm methods of Gee-0.8.Gee.ConcurrentList

    getEqualFunc(): [ /* returnType */ EqualDataFunc, /* resultTarget */ any ]
    getIsEmpty(): boolean

    // Overloads of getIsEmpty

    getIsEmpty(): boolean

    // Conflicting methods

    listIterator(): ListIterator

    // Overloads of listIterator

    listIterator(): ListIterator
    listIterator(): ListIterator
    get(index: number): any

    // Overloads of get

    get(index: number): any
    get(index: number): any
    set(index: number, item: any): void

    // Overloads of set

    set(index: number, item: any): void
    set(index: number, item: any): void
    indexOf(item: any): number

    // Overloads of indexOf

    indexOf(item: any): number
    indexOf(item: any): number
    insert(index: number, item: any): void

    // Overloads of insert

    insert(index: number, item: any): void
    insert(index: number, item: any): void
    removeAt(index: number): any

    // Overloads of removeAt

    removeAt(index: number): any
    removeAt(index: number): any
    slice(start: number, stop: number): List | null

    // Overloads of slice

    slice(start: number, stop: number): List | null
    slice(start: number, stop: number): List | null
    reserved0(): void

    // Overloads of reserved0

    reserved0(): void
    reserved0(): void
    reserved1(): void

    // Overloads of reserved1

    reserved1(): void
    reserved1(): void
    reserved2(): void

    // Overloads of reserved2

    reserved2(): void
    reserved2(): void
    reserved3(): void

    // Overloads of reserved3

    reserved3(): void
    reserved3(): void
    reserved4(): void

    // Overloads of reserved4

    reserved4(): void
    reserved4(): void
    reserved5(): void

    // Overloads of reserved5

    reserved5(): void
    reserved5(): void
    reserved6(): void

    // Overloads of reserved6

    reserved6(): void
    reserved6(): void
    reserved7(): void

    // Overloads of reserved7

    reserved7(): void
    reserved7(): void
    reserved8(): void

    // Overloads of reserved8

    reserved8(): void
    reserved8(): void
    reserved9(): void

    // Overloads of reserved9

    reserved9(): void
    reserved9(): void
    getReadOnlyView(): List

    // Overloads of getReadOnlyView

    getReadOnlyView(): List
    getReadOnlyView(): Collection
    getReadOnlyView(): List

    // Overloads of getReadOnlyView

    getReadOnlyView(): Collection
    getReadOnlyView(): Collection

    // Overloads of getReadOnlyView

    getReadOnlyView(): Collection
    getReadOnlyView(): Collection
    contains(item: any): boolean

    // Overloads of contains

    contains(item: any): boolean
    contains(item: any): boolean
    add(item: any): boolean

    // Overloads of add

    add(item: any): boolean
    add(item: any): boolean
    remove(item: any): boolean

    // Overloads of remove

    remove(item: any): boolean
    remove(item: any): boolean
    clear(): void

    // Overloads of clear

    clear(): void
    clear(): void
    getSize(): number

    // Overloads of getSize

    getSize(): number
    getSize(): number
    getReadOnly(): boolean

    // Overloads of getReadOnly

    getReadOnly(): boolean
    getReadOnly(): boolean
    iterator(): Iterator

    // Overloads of iterator

    iterator(): Iterator
    iterator(): Iterator
    foreach(f: ForallFunc): boolean

    // Overloads of foreach

    foreach(f: ForallFunc): boolean
    foreach(f: ForallFunc): boolean

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
    disconnect(id: number): void
}

class ConcurrentList extends AbstractList {

    // Own properties of Gee-0.8.Gee.ConcurrentList

    static name: string

    // Constructors of Gee-0.8.Gee.ConcurrentList

    constructor(config?: ConcurrentList.ConstructorProperties) 
    constructor(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, equalFunc: EqualDataFunc | null) 
    static new(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, equalFunc: EqualDataFunc | null): ConcurrentList
    _init(config?: ConcurrentList.ConstructorProperties): void

    // Conflicting static methods

    static empty(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify): List

    // Overloads of empty

    static empty(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify): Collection
    static empty(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify): Collection
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
    __gtype__: number

    // Conflicting properties

    readOnlyView: any

    // Conflicting methods

    first(): any

    // Overloads of first

    first(): any
    first(): any
    last(): any

    // Overloads of last

    last(): any
    last(): any
    iteratorAt(element: any): Iterator | null

    // Overloads of iteratorAt

    iteratorAt(element: any): Iterator | null
    iteratorAt(element: any): Iterator | null
    lower(element: any): any | null

    // Overloads of lower

    lower(element: any): any | null
    lower(element: any): any | null
    higher(element: any): any | null

    // Overloads of higher

    higher(element: any): any | null
    higher(element: any): any | null
    floor(element: any): any | null

    // Overloads of floor

    floor(element: any): any | null
    floor(element: any): any | null
    ceil(element: any): any | null

    // Overloads of ceil

    ceil(element: any): any | null
    ceil(element: any): any | null
    headSet(before: any): SortedSet

    // Overloads of headSet

    headSet(before: any): SortedSet
    headSet(before: any): SortedSet
    tailSet(after: any): SortedSet

    // Overloads of tailSet

    tailSet(after: any): SortedSet
    tailSet(after: any): SortedSet
    subSet(from: any, to: any): SortedSet

    // Overloads of subSet

    subSet(from: any, to: any): SortedSet
    subSet(from: any, to: any): SortedSet
    reserved0(): void

    // Overloads of reserved0

    reserved0(): void
    reserved0(): void

    // Overloads of reserved0

    reserved0(): void
    reserved0(): void
    reserved1(): void

    // Overloads of reserved1

    reserved1(): void
    reserved1(): void

    // Overloads of reserved1

    reserved1(): void
    reserved1(): void
    reserved2(): void

    // Overloads of reserved2

    reserved2(): void
    reserved2(): void

    // Overloads of reserved2

    reserved2(): void
    reserved2(): void
    reserved3(): void

    // Overloads of reserved3

    reserved3(): void
    reserved3(): void

    // Overloads of reserved3

    reserved3(): void
    reserved3(): void
    reserved4(): void

    // Overloads of reserved4

    reserved4(): void
    reserved4(): void

    // Overloads of reserved4

    reserved4(): void
    reserved4(): void
    reserved5(): void

    // Overloads of reserved5

    reserved5(): void
    reserved5(): void

    // Overloads of reserved5

    reserved5(): void
    reserved5(): void
    reserved6(): void

    // Overloads of reserved6

    reserved6(): void
    reserved6(): void

    // Overloads of reserved6

    reserved6(): void
    reserved6(): void
    reserved7(): void

    // Overloads of reserved7

    reserved7(): void
    reserved7(): void

    // Overloads of reserved7

    reserved7(): void
    reserved7(): void
    reserved8(): void

    // Overloads of reserved8

    reserved8(): void
    reserved8(): void

    // Overloads of reserved8

    reserved8(): void
    reserved8(): void
    reserved9(): void

    // Overloads of reserved9

    reserved9(): void
    reserved9(): void

    // Overloads of reserved9

    reserved9(): void
    reserved9(): void
    getReadOnlyView(): SortedSet

    // Overloads of getReadOnlyView

    getReadOnlyView(): SortedSet
    getReadOnlyView(): Set
    getReadOnlyView(): Collection
    getReadOnlyView(): SortedSet

    // Overloads of getReadOnlyView

    getReadOnlyView(): Set
    getReadOnlyView(): Collection
    getReadOnlyView(): Set

    // Overloads of getReadOnlyView

    getReadOnlyView(): Set
    getReadOnlyView(): Collection
    getReadOnlyView(): Set

    // Overloads of getReadOnlyView

    getReadOnlyView(): Collection
    getReadOnlyView(): Collection

    // Overloads of getReadOnlyView

    getReadOnlyView(): Collection
    getReadOnlyView(): Collection
    contains(item: any): boolean

    // Overloads of contains

    contains(item: any): boolean
    contains(item: any): boolean
    add(item: any): boolean

    // Overloads of add

    add(item: any): boolean
    add(item: any): boolean
    remove(item: any): boolean

    // Overloads of remove

    remove(item: any): boolean
    remove(item: any): boolean
    clear(): void

    // Overloads of clear

    clear(): void
    clear(): void
    getSize(): number

    // Overloads of getSize

    getSize(): number
    getSize(): number
    getReadOnly(): boolean

    // Overloads of getReadOnly

    getReadOnly(): boolean
    getReadOnly(): boolean
    iterator(): Iterator

    // Overloads of iterator

    iterator(): Iterator
    iterator(): Iterator
    foreach(f: ForallFunc): boolean

    // Overloads of foreach

    foreach(f: ForallFunc): boolean
    foreach(f: ForallFunc): boolean

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
    disconnect(id: number): void
}

class ConcurrentSet extends AbstractSortedSet {

    // Own properties of Gee-0.8.Gee.ConcurrentSet

    static name: string

    // Constructors of Gee-0.8.Gee.ConcurrentSet

    constructor(config?: ConcurrentSet.ConstructorProperties) 
    constructor(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, compareFunc: GLib.CompareDataFunc | null) 
    static new(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, compareFunc: GLib.CompareDataFunc | null): ConcurrentSet
    _init(config?: ConcurrentSet.ConstructorProperties): void

    // Conflicting static methods

    static empty(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify): SortedSet

    // Overloads of empty

    static empty(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify): Set
    static empty(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify): Collection
    static empty(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify): Set

    // Overloads of empty

    static empty(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify): Collection
    static empty(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify): Collection
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
    __gtype__: number

    // Owm methods of Gee-0.8.Gee.HashMap

    getKeyHashFunc(): [ /* returnType */ HashDataFunc, /* resultTarget */ any ]
    getKeyEqualFunc(): [ /* returnType */ EqualDataFunc, /* resultTarget */ any ]
    getValueEqualFunc(): [ /* returnType */ EqualDataFunc, /* resultTarget */ any ]

    // Conflicting methods

    hasKey(key: any): boolean

    // Overloads of hasKey

    hasKey(key: any): boolean
    hasKey(key: any): boolean
    has(key: any, value: any): boolean

    // Overloads of has

    has(key: any, value: any): boolean
    has(key: any, value: any): boolean
    get(key: any): any | null

    // Overloads of get

    get(key: any): any | null
    get(key: any): any | null
    set(key: any, value: any): void

    // Overloads of set

    set(key: any, value: any): void
    set(key: any, value: any): void
    unset(key: any): [ /* returnType */ boolean, /* value */ any ]

    // Overloads of unset

    unset(key: any): [ /* returnType */ boolean, /* value */ any ]
    unset(key: any): [ /* returnType */ boolean, /* value */ any ]
    mapIterator(): MapIterator

    // Overloads of mapIterator

    mapIterator(): MapIterator
    mapIterator(): MapIterator
    clear(): void

    // Overloads of clear

    clear(): void
    clear(): void
    foreach(f: ForallFunc): boolean

    // Overloads of foreach

    foreach(f: ForallFunc): boolean
    foreach(f: ForallFunc): boolean
    stream(aType: GObject.GType, aDupFunc: GObject.BoxedCopyFunc, aDestroyFunc: GLib.DestroyNotify, f: StreamFunc): Iterator

    // Overloads of stream

    stream(aType: GObject.GType, aDupFunc: GObject.BoxedCopyFunc, aDestroyFunc: GLib.DestroyNotify, f: StreamFunc): Iterator
    stream(aType: GObject.GType, aDupFunc: GObject.BoxedCopyFunc, aDestroyFunc: GLib.DestroyNotify, f: StreamFunc): Iterator
    getSize(): number

    // Overloads of getSize

    getSize(): number
    getSize(): number
    getReadOnly(): boolean

    // Overloads of getReadOnly

    getReadOnly(): boolean
    getReadOnly(): boolean
    getKeys(): Set

    // Overloads of getKeys

    getKeys(): Set
    getKeys(): Set
    getValues(): Collection

    // Overloads of getValues

    getValues(): Collection
    getValues(): Collection
    getEntries(): Set

    // Overloads of getEntries

    getEntries(): Set
    getEntries(): Set
    getReadOnlyView(): Map

    // Overloads of getReadOnlyView

    getReadOnlyView(): Map
    getReadOnlyView(): Map

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
    disconnect(id: number): void
}

class HashMap extends AbstractMap {

    // Own properties of Gee-0.8.Gee.HashMap

    static name: string

    // Constructors of Gee-0.8.Gee.HashMap

    constructor(config?: HashMap.ConstructorProperties) 
    constructor(kType: GObject.GType, kDupFunc: GObject.BoxedCopyFunc, kDestroyFunc: GLib.DestroyNotify, vType: GObject.GType, vDupFunc: GObject.BoxedCopyFunc, vDestroyFunc: GLib.DestroyNotify, keyHashFunc: HashDataFunc | null, keyEqualFunc: EqualDataFunc | null, valueEqualFunc: EqualDataFunc | null) 
    static new(kType: GObject.GType, kDupFunc: GObject.BoxedCopyFunc, kDestroyFunc: GLib.DestroyNotify, vType: GObject.GType, vDupFunc: GObject.BoxedCopyFunc, vDestroyFunc: GLib.DestroyNotify, keyHashFunc: HashDataFunc | null, keyEqualFunc: EqualDataFunc | null, valueEqualFunc: EqualDataFunc | null): HashMap
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
    __gtype__: number

    // Owm methods of Gee-0.8.Gee.HashMultiMap

    getKeyHashFunc(): [ /* returnType */ HashDataFunc, /* resultTarget */ any ]
    getKeyEqualFunc(): [ /* returnType */ EqualDataFunc, /* resultTarget */ any ]
    getValueHashFunc(): [ /* returnType */ HashDataFunc, /* resultTarget */ any ]
    getValueEqualFunc(): [ /* returnType */ EqualDataFunc, /* resultTarget */ any ]

    // Overloads of getValueEqualFunc

    getValueEqualFunc(): [ /* returnType */ EqualDataFunc, /* resultTarget */ any, /* resultTargetDestroyNotify */ GLib.DestroyNotify ]

    // Conflicting methods

    getReadOnlyView(): MultiMap

    // Overloads of getReadOnlyView

    getReadOnlyView(): MultiMap
    getReadOnlyView(): MultiMap

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
    disconnect(id: number): void
}

class HashMultiMap extends AbstractMultiMap {

    // Own properties of Gee-0.8.Gee.HashMultiMap

    static name: string

    // Constructors of Gee-0.8.Gee.HashMultiMap

    constructor(config?: HashMultiMap.ConstructorProperties) 
    constructor(kType: GObject.GType, kDupFunc: GObject.BoxedCopyFunc, kDestroyFunc: GLib.DestroyNotify, vType: GObject.GType, vDupFunc: GObject.BoxedCopyFunc, vDestroyFunc: GLib.DestroyNotify, keyHashFunc: HashDataFunc | null, keyEqualFunc: EqualDataFunc | null, valueHashFunc: HashDataFunc | null, valueEqualFunc: EqualDataFunc | null) 
    static new(kType: GObject.GType, kDupFunc: GObject.BoxedCopyFunc, kDestroyFunc: GLib.DestroyNotify, vType: GObject.GType, vDupFunc: GObject.BoxedCopyFunc, vDestroyFunc: GLib.DestroyNotify, keyHashFunc: HashDataFunc | null, keyEqualFunc: EqualDataFunc | null, valueHashFunc: HashDataFunc | null, valueEqualFunc: EqualDataFunc | null): HashMultiMap
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
    __gtype__: number

    // Owm methods of Gee-0.8.Gee.HashMultiSet

    getHashFunc(): [ /* returnType */ HashDataFunc, /* resultTarget */ any ]
    getEqualFunc(): [ /* returnType */ EqualDataFunc, /* resultTarget */ any ]

    // Conflicting methods

    reserved0(): void

    // Overloads of reserved0

    reserved0(): void
    reserved0(): void
    reserved1(): void

    // Overloads of reserved1

    reserved1(): void
    reserved1(): void
    reserved2(): void

    // Overloads of reserved2

    reserved2(): void
    reserved2(): void
    reserved3(): void

    // Overloads of reserved3

    reserved3(): void
    reserved3(): void
    reserved4(): void

    // Overloads of reserved4

    reserved4(): void
    reserved4(): void
    reserved5(): void

    // Overloads of reserved5

    reserved5(): void
    reserved5(): void
    reserved6(): void

    // Overloads of reserved6

    reserved6(): void
    reserved6(): void
    reserved7(): void

    // Overloads of reserved7

    reserved7(): void
    reserved7(): void
    reserved8(): void

    // Overloads of reserved8

    reserved8(): void
    reserved8(): void
    getReadOnlyView(): MultiSet

    // Overloads of getReadOnlyView

    getReadOnlyView(): MultiSet
    getReadOnlyView(): Collection
    getReadOnlyView(): MultiSet

    // Overloads of getReadOnlyView

    getReadOnlyView(): Collection
    getReadOnlyView(): Collection

    // Overloads of getReadOnlyView

    getReadOnlyView(): Collection
    getReadOnlyView(): Collection
    contains(item: any): boolean

    // Overloads of contains

    contains(item: any): boolean
    contains(item: any): boolean
    add(item: any): boolean

    // Overloads of add

    add(item: any): boolean
    add(item: any): boolean
    remove(item: any): boolean

    // Overloads of remove

    remove(item: any): boolean
    remove(item: any): boolean
    clear(): void

    // Overloads of clear

    clear(): void
    clear(): void
    getSize(): number

    // Overloads of getSize

    getSize(): number
    getSize(): number
    getReadOnly(): boolean

    // Overloads of getReadOnly

    getReadOnly(): boolean
    getReadOnly(): boolean
    iterator(): Iterator

    // Overloads of iterator

    iterator(): Iterator
    iterator(): Iterator
    foreach(f: ForallFunc): boolean

    // Overloads of foreach

    foreach(f: ForallFunc): boolean
    foreach(f: ForallFunc): boolean

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
    disconnect(id: number): void
}

class HashMultiSet extends AbstractMultiSet {

    // Own properties of Gee-0.8.Gee.HashMultiSet

    static name: string

    // Constructors of Gee-0.8.Gee.HashMultiSet

    constructor(config?: HashMultiSet.ConstructorProperties) 
    constructor(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, hashFunc: HashDataFunc | null, equalFunc: EqualDataFunc | null) 
    static new(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, hashFunc: HashDataFunc | null, equalFunc: EqualDataFunc | null): HashMultiSet
    static broken(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, hashFunc: HashDataFunc | null, equalFunc: EqualDataFunc | null): HashMultiSet
    _init(config?: HashMultiSet.ConstructorProperties): void

    // Conflicting static methods

    static empty(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify): Set

    // Overloads of empty

    static empty(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify): Collection
    static empty(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify): Collection
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
    __gtype__: number

    // Conflicting properties

    readOnlyView: any

    // Owm methods of Gee-0.8.Gee.HashSet

    getHashFunc(): [ /* returnType */ HashDataFunc, /* resultTarget */ any ]
    getEqualFunc(): [ /* returnType */ EqualDataFunc, /* resultTarget */ any ]

    // Conflicting methods

    reserved0(): void

    // Overloads of reserved0

    reserved0(): void
    reserved0(): void
    reserved1(): void

    // Overloads of reserved1

    reserved1(): void
    reserved1(): void
    reserved2(): void

    // Overloads of reserved2

    reserved2(): void
    reserved2(): void
    reserved3(): void

    // Overloads of reserved3

    reserved3(): void
    reserved3(): void
    reserved4(): void

    // Overloads of reserved4

    reserved4(): void
    reserved4(): void
    reserved5(): void

    // Overloads of reserved5

    reserved5(): void
    reserved5(): void
    reserved6(): void

    // Overloads of reserved6

    reserved6(): void
    reserved6(): void
    reserved7(): void

    // Overloads of reserved7

    reserved7(): void
    reserved7(): void
    reserved8(): void

    // Overloads of reserved8

    reserved8(): void
    reserved8(): void
    reserved9(): void

    // Overloads of reserved9

    reserved9(): void
    reserved9(): void
    getReadOnlyView(): Set

    // Overloads of getReadOnlyView

    getReadOnlyView(): Set
    getReadOnlyView(): Collection
    getReadOnlyView(): Set

    // Overloads of getReadOnlyView

    getReadOnlyView(): Collection
    getReadOnlyView(): Collection

    // Overloads of getReadOnlyView

    getReadOnlyView(): Collection
    getReadOnlyView(): Collection
    contains(item: any): boolean

    // Overloads of contains

    contains(item: any): boolean
    contains(item: any): boolean
    add(item: any): boolean

    // Overloads of add

    add(item: any): boolean
    add(item: any): boolean
    remove(item: any): boolean

    // Overloads of remove

    remove(item: any): boolean
    remove(item: any): boolean
    clear(): void

    // Overloads of clear

    clear(): void
    clear(): void
    getSize(): number

    // Overloads of getSize

    getSize(): number
    getSize(): number
    getReadOnly(): boolean

    // Overloads of getReadOnly

    getReadOnly(): boolean
    getReadOnly(): boolean
    iterator(): Iterator

    // Overloads of iterator

    iterator(): Iterator
    iterator(): Iterator
    foreach(f: ForallFunc): boolean

    // Overloads of foreach

    foreach(f: ForallFunc): boolean
    foreach(f: ForallFunc): boolean

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
    disconnect(id: number): void
}

class HashSet extends AbstractSet {

    // Own properties of Gee-0.8.Gee.HashSet

    static name: string

    // Constructors of Gee-0.8.Gee.HashSet

    constructor(config?: HashSet.ConstructorProperties) 
    constructor(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, hashFunc: HashDataFunc | null, equalFunc: EqualDataFunc | null) 
    static new(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, hashFunc: HashDataFunc | null, equalFunc: EqualDataFunc | null): HashSet
    _init(config?: HashSet.ConstructorProperties): void

    // Conflicting static methods

    static empty(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify): Set

    // Overloads of empty

    static empty(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify): Collection
    static empty(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify): Collection
}

interface Lazy {

    // Own fields of Gee-0.8.Gee.Lazy

    refCount: number

    // Owm methods of Gee-0.8.Gee.Lazy

    eval(): void
    get(): any
    getValue(): any
    getFuture(): Future | null
}

class Lazy {

    // Own properties of Gee-0.8.Gee.Lazy

    static name: string

    // Constructors of Gee-0.8.Gee.Lazy

    constructor(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, func: LazyFunc) 
    static new(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, func: LazyFunc): Lazy
    static fromValue(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, item: any): Lazy
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
    __gtype__: number

    // Conflicting properties

    readOnlyView: any

    // Owm methods of Gee-0.8.Gee.LinkedList

    first(): any

    // Overloads of first

    first(): any
    last(): any

    // Overloads of last

    last(): any
    getEqualFunc(): [ /* returnType */ EqualDataFunc, /* resultTarget */ any ]

    // Conflicting methods

    contains(item: any): boolean
    contains(item: any): boolean

    // Overloads of contains

    contains(item: any): boolean
    add(item: any): boolean
    add(item: any): boolean

    // Overloads of add

    add(item: any): boolean
    remove(item: any): boolean
    remove(item: any): boolean

    // Overloads of remove

    remove(item: any): boolean
    clear(): void
    clear(): void

    // Overloads of clear

    clear(): void
    getSize(): number
    getSize(): number

    // Overloads of getSize

    getSize(): number
    getReadOnly(): boolean
    getReadOnly(): boolean

    // Overloads of getReadOnly

    getReadOnly(): boolean
    getReadOnlyView(): BidirList

    // Overloads of getReadOnlyView

    getReadOnlyView(): BidirList
    getReadOnlyView(): List
    getReadOnlyView(): Collection
    getReadOnlyView(): Collection
    getReadOnlyView(): BidirList

    // Overloads of getReadOnlyView

    getReadOnlyView(): List
    getReadOnlyView(): Collection
    getReadOnlyView(): List

    // Overloads of getReadOnlyView

    getReadOnlyView(): List
    getReadOnlyView(): Collection
    getReadOnlyView(): List

    // Overloads of getReadOnlyView

    getReadOnlyView(): Collection
    getReadOnlyView(): Collection

    // Overloads of getReadOnlyView

    getReadOnlyView(): Collection
    iterator(): Iterator
    iterator(): Iterator

    // Overloads of iterator

    iterator(): Iterator
    foreach(f: ForallFunc): boolean

    // Overloads of foreach

    foreach(f: ForallFunc): boolean
    foreach(f: ForallFunc): boolean
    bidirListIterator(): BidirListIterator

    // Overloads of bidirListIterator

    bidirListIterator(): BidirListIterator
    bidirListIterator(): BidirListIterator
    reserved0(): void

    // Overloads of reserved0

    reserved0(): void
    reserved0(): void

    // Overloads of reserved0

    reserved0(): void
    reserved0(): void
    reserved1(): void

    // Overloads of reserved1

    reserved1(): void
    reserved1(): void

    // Overloads of reserved1

    reserved1(): void
    reserved1(): void
    reserved2(): void

    // Overloads of reserved2

    reserved2(): void
    reserved2(): void

    // Overloads of reserved2

    reserved2(): void
    reserved2(): void
    reserved3(): void

    // Overloads of reserved3

    reserved3(): void
    reserved3(): void

    // Overloads of reserved3

    reserved3(): void
    reserved3(): void
    reserved4(): void

    // Overloads of reserved4

    reserved4(): void
    reserved4(): void

    // Overloads of reserved4

    reserved4(): void
    reserved4(): void
    reserved5(): void

    // Overloads of reserved5

    reserved5(): void
    reserved5(): void

    // Overloads of reserved5

    reserved5(): void
    reserved5(): void
    reserved6(): void

    // Overloads of reserved6

    reserved6(): void
    reserved6(): void

    // Overloads of reserved6

    reserved6(): void
    reserved6(): void
    reserved7(): void

    // Overloads of reserved7

    reserved7(): void
    reserved7(): void

    // Overloads of reserved7

    reserved7(): void
    reserved7(): void
    reserved8(): void

    // Overloads of reserved8

    reserved8(): void
    reserved8(): void

    // Overloads of reserved8

    reserved8(): void
    reserved8(): void
    reserved9(): void

    // Overloads of reserved9

    reserved9(): void
    reserved9(): void

    // Overloads of reserved9

    reserved9(): void
    reserved9(): void
    listIterator(): ListIterator

    // Overloads of listIterator

    listIterator(): ListIterator
    listIterator(): ListIterator
    get(index: number): any

    // Overloads of get

    get(index: number): any
    get(index: number): any
    set(index: number, item: any): void

    // Overloads of set

    set(index: number, item: any): void
    set(index: number, item: any): void
    indexOf(item: any): number

    // Overloads of indexOf

    indexOf(item: any): number
    indexOf(item: any): number
    insert(index: number, item: any): void

    // Overloads of insert

    insert(index: number, item: any): void
    insert(index: number, item: any): void
    removeAt(index: number): any

    // Overloads of removeAt

    removeAt(index: number): any
    removeAt(index: number): any
    slice(start: number, stop: number): List | null

    // Overloads of slice

    slice(start: number, stop: number): List | null
    slice(start: number, stop: number): List | null

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
    disconnect(id: number): void
}

class LinkedList extends AbstractBidirList {

    // Own properties of Gee-0.8.Gee.LinkedList

    static name: string

    // Constructors of Gee-0.8.Gee.LinkedList

    constructor(config?: LinkedList.ConstructorProperties) 
    constructor(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, equalFunc: EqualDataFunc | null) 
    static new(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, equalFunc: EqualDataFunc | null): LinkedList
    _init(config?: LinkedList.ConstructorProperties): void

    // Conflicting static methods

    static empty(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify): Collection
    static empty(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify): List

    // Overloads of empty

    static empty(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify): Collection
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
    __gtype__: number

    // Owm methods of Gee-0.8.Gee.PriorityQueue

    offer(element: any): boolean

    // Overloads of offer

    offer(element: any): boolean
    drain(recipient: Collection, amount: number): number

    // Overloads of drain

    drain(recipient: Collection, amount: number): number
    getCompareFunc(): [ /* returnType */ GLib.CompareDataFunc, /* resultTarget */ any ]

    // Conflicting methods

    peek(): any | null

    // Overloads of peek

    peek(): any | null
    peek(): any | null
    poll(): any | null

    // Overloads of poll

    poll(): any | null
    poll(): any | null
    reserved0(): void

    // Overloads of reserved0

    reserved0(): void
    reserved0(): void
    reserved1(): void

    // Overloads of reserved1

    reserved1(): void
    reserved1(): void
    reserved2(): void

    // Overloads of reserved2

    reserved2(): void
    reserved2(): void
    reserved3(): void

    // Overloads of reserved3

    reserved3(): void
    reserved3(): void
    reserved4(): void

    // Overloads of reserved4

    reserved4(): void
    reserved4(): void
    reserved5(): void

    // Overloads of reserved5

    reserved5(): void
    reserved5(): void
    reserved6(): void

    // Overloads of reserved6

    reserved6(): void
    reserved6(): void
    reserved7(): void

    // Overloads of reserved7

    reserved7(): void
    reserved7(): void
    reserved8(): void

    // Overloads of reserved8

    reserved8(): void
    reserved8(): void
    reserved9(): void

    // Overloads of reserved9

    reserved9(): void
    reserved9(): void
    getCapacity(): number

    // Overloads of getCapacity

    getCapacity(): number
    getCapacity(): number
    getRemainingCapacity(): number

    // Overloads of getRemainingCapacity

    getRemainingCapacity(): number
    getRemainingCapacity(): number
    getIsFull(): boolean

    // Overloads of getIsFull

    getIsFull(): boolean
    getIsFull(): boolean
    contains(item: any): boolean

    // Overloads of contains

    contains(item: any): boolean
    contains(item: any): boolean
    add(item: any): boolean

    // Overloads of add

    add(item: any): boolean
    add(item: any): boolean
    remove(item: any): boolean

    // Overloads of remove

    remove(item: any): boolean
    remove(item: any): boolean
    clear(): void

    // Overloads of clear

    clear(): void
    clear(): void
    getSize(): number

    // Overloads of getSize

    getSize(): number
    getSize(): number
    getReadOnly(): boolean

    // Overloads of getReadOnly

    getReadOnly(): boolean
    getReadOnly(): boolean
    getReadOnlyView(): Collection

    // Overloads of getReadOnlyView

    getReadOnlyView(): Collection
    getReadOnlyView(): Collection
    iterator(): Iterator

    // Overloads of iterator

    iterator(): Iterator
    iterator(): Iterator
    foreach(f: ForallFunc): boolean

    // Overloads of foreach

    foreach(f: ForallFunc): boolean
    foreach(f: ForallFunc): boolean

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
    disconnect(id: number): void
}

class PriorityQueue extends AbstractQueue {

    // Own properties of Gee-0.8.Gee.PriorityQueue

    static name: string

    // Constructors of Gee-0.8.Gee.PriorityQueue

    constructor(config?: PriorityQueue.ConstructorProperties) 
    constructor(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, compareFunc: GLib.CompareDataFunc | null) 
    static new(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, compareFunc: GLib.CompareDataFunc | null): PriorityQueue
    _init(config?: PriorityQueue.ConstructorProperties): void
}

interface Promise {

    // Own fields of Gee-0.8.Gee.Promise

    refCount: number

    // Owm methods of Gee-0.8.Gee.Promise

    setValue(value: any): void
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
    __gtype__: number

    // Conflicting properties

    readOnlyView: any

    // Owm methods of Gee-0.8.Gee.TreeMap

    getKeyCompareFunc(): [ /* returnType */ GLib.CompareDataFunc, /* resultTarget */ any ]
    getValueEqualFunc(): [ /* returnType */ EqualDataFunc, /* resultTarget */ any ]

    // Conflicting methods

    bidirMapIterator(): BidirMapIterator

    // Overloads of bidirMapIterator

    bidirMapIterator(): BidirMapIterator
    bidirMapIterator(): BidirMapIterator
    reserved0(): void

    // Overloads of reserved0

    reserved0(): void
    reserved0(): void

    // Overloads of reserved0

    reserved0(): void
    reserved0(): void
    reserved1(): void

    // Overloads of reserved1

    reserved1(): void
    reserved1(): void

    // Overloads of reserved1

    reserved1(): void
    reserved1(): void
    reserved2(): void

    // Overloads of reserved2

    reserved2(): void
    reserved2(): void

    // Overloads of reserved2

    reserved2(): void
    reserved2(): void
    reserved3(): void

    // Overloads of reserved3

    reserved3(): void
    reserved3(): void

    // Overloads of reserved3

    reserved3(): void
    reserved3(): void
    reserved4(): void

    // Overloads of reserved4

    reserved4(): void
    reserved4(): void

    // Overloads of reserved4

    reserved4(): void
    reserved4(): void
    reserved5(): void

    // Overloads of reserved5

    reserved5(): void
    reserved5(): void

    // Overloads of reserved5

    reserved5(): void
    reserved5(): void
    reserved6(): void

    // Overloads of reserved6

    reserved6(): void
    reserved6(): void

    // Overloads of reserved6

    reserved6(): void
    reserved6(): void
    reserved7(): void

    // Overloads of reserved7

    reserved7(): void
    reserved7(): void

    // Overloads of reserved7

    reserved7(): void
    reserved7(): void
    reserved8(): void

    // Overloads of reserved8

    reserved8(): void
    reserved8(): void

    // Overloads of reserved8

    reserved8(): void
    reserved8(): void
    reserved9(): void

    // Overloads of reserved9

    reserved9(): void
    reserved9(): void

    // Overloads of reserved9

    reserved9(): void
    reserved9(): void
    getReadOnlyView(): BidirSortedMap

    // Overloads of getReadOnlyView

    getReadOnlyView(): BidirSortedMap
    getReadOnlyView(): SortedMap
    getReadOnlyView(): Map
    getReadOnlyView(): BidirSortedMap

    // Overloads of getReadOnlyView

    getReadOnlyView(): SortedMap
    getReadOnlyView(): Map
    getReadOnlyView(): SortedMap

    // Overloads of getReadOnlyView

    getReadOnlyView(): Map
    getReadOnlyView(): Map

    // Overloads of getReadOnlyView

    getReadOnlyView(): Map
    getReadOnlyView(): Map
    headMap(before: any): SortedMap

    // Overloads of headMap

    headMap(before: any): SortedMap
    headMap(before: any): SortedMap
    tailMap(after: any): SortedMap

    // Overloads of tailMap

    tailMap(after: any): SortedMap
    tailMap(after: any): SortedMap
    subMap(before: any, after: any): SortedMap

    // Overloads of subMap

    subMap(before: any, after: any): SortedMap
    subMap(before: any, after: any): SortedMap
    getAscendingKeys(): SortedSet

    // Overloads of getAscendingKeys

    getAscendingKeys(): SortedSet
    getAscendingKeys(): SortedSet
    getAscendingEntries(): SortedSet

    // Overloads of getAscendingEntries

    getAscendingEntries(): SortedSet
    getAscendingEntries(): SortedSet
    hasKey(key: any): boolean

    // Overloads of hasKey

    hasKey(key: any): boolean
    hasKey(key: any): boolean
    has(key: any, value: any): boolean

    // Overloads of has

    has(key: any, value: any): boolean
    has(key: any, value: any): boolean
    get(key: any): any | null

    // Overloads of get

    get(key: any): any | null
    get(key: any): any | null
    set(key: any, value: any): void

    // Overloads of set

    set(key: any, value: any): void
    set(key: any, value: any): void
    unset(key: any): [ /* returnType */ boolean, /* value */ any ]

    // Overloads of unset

    unset(key: any): [ /* returnType */ boolean, /* value */ any ]
    unset(key: any): [ /* returnType */ boolean, /* value */ any ]
    clear(): void

    // Overloads of clear

    clear(): void
    clear(): void
    mapIterator(): MapIterator

    // Overloads of mapIterator

    mapIterator(): MapIterator
    mapIterator(): MapIterator
    getSize(): number

    // Overloads of getSize

    getSize(): number
    getSize(): number
    getReadOnly(): boolean

    // Overloads of getReadOnly

    getReadOnly(): boolean
    getReadOnly(): boolean
    getKeys(): Set

    // Overloads of getKeys

    getKeys(): Set
    getKeys(): Set
    getValues(): Collection

    // Overloads of getValues

    getValues(): Collection
    getValues(): Collection
    getEntries(): Set

    // Overloads of getEntries

    getEntries(): Set
    getEntries(): Set
    foreach(f: ForallFunc): boolean

    // Overloads of foreach

    foreach(f: ForallFunc): boolean
    foreach(f: ForallFunc): boolean
    stream(aType: GObject.GType, aDupFunc: GObject.BoxedCopyFunc, aDestroyFunc: GLib.DestroyNotify, f: StreamFunc): Iterator

    // Overloads of stream

    stream(aType: GObject.GType, aDupFunc: GObject.BoxedCopyFunc, aDestroyFunc: GLib.DestroyNotify, f: StreamFunc): Iterator
    stream(aType: GObject.GType, aDupFunc: GObject.BoxedCopyFunc, aDestroyFunc: GLib.DestroyNotify, f: StreamFunc): Iterator

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
    disconnect(id: number): void
}

class TreeMap extends AbstractBidirSortedMap {

    // Own properties of Gee-0.8.Gee.TreeMap

    static name: string

    // Constructors of Gee-0.8.Gee.TreeMap

    constructor(config?: TreeMap.ConstructorProperties) 
    constructor(kType: GObject.GType, kDupFunc: GObject.BoxedCopyFunc, kDestroyFunc: GLib.DestroyNotify, vType: GObject.GType, vDupFunc: GObject.BoxedCopyFunc, vDestroyFunc: GLib.DestroyNotify, keyCompareFunc: GLib.CompareDataFunc | null, valueEqualFunc: EqualDataFunc | null) 
    static new(kType: GObject.GType, kDupFunc: GObject.BoxedCopyFunc, kDestroyFunc: GLib.DestroyNotify, vType: GObject.GType, vDupFunc: GObject.BoxedCopyFunc, vDestroyFunc: GLib.DestroyNotify, keyCompareFunc: GLib.CompareDataFunc | null, valueEqualFunc: EqualDataFunc | null): TreeMap
    _init(config?: TreeMap.ConstructorProperties): void

    // Conflicting static methods

    static empty(kType: GObject.GType, kDupFunc: GObject.BoxedCopyFunc, kDestroyFunc: GLib.DestroyNotify, vType: GObject.GType, vDupFunc: GObject.BoxedCopyFunc, vDestroyFunc: GLib.DestroyNotify): BidirSortedMap

    // Overloads of empty

    static empty(kType: GObject.GType, kDupFunc: GObject.BoxedCopyFunc, kDestroyFunc: GLib.DestroyNotify, vType: GObject.GType, vDupFunc: GObject.BoxedCopyFunc, vDestroyFunc: GLib.DestroyNotify): Map
    static empty(kType: GObject.GType, kDupFunc: GObject.BoxedCopyFunc, kDestroyFunc: GLib.DestroyNotify, vType: GObject.GType, vDupFunc: GObject.BoxedCopyFunc, vDestroyFunc: GLib.DestroyNotify): Map
    static empty(kType: GObject.GType, kDupFunc: GObject.BoxedCopyFunc, kDestroyFunc: GLib.DestroyNotify, vType: GObject.GType, vDupFunc: GObject.BoxedCopyFunc, vDestroyFunc: GLib.DestroyNotify): Map
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
    __gtype__: number

    // Owm methods of Gee-0.8.Gee.TreeMultiMap

    getKeyCompareFunc(): [ /* returnType */ GLib.CompareDataFunc, /* resultTarget */ any ]
    getValueCompareFunc(): [ /* returnType */ GLib.CompareDataFunc, /* resultTarget */ any ]

    // Conflicting methods

    getReadOnlyView(): MultiMap

    // Overloads of getReadOnlyView

    getReadOnlyView(): MultiMap
    getReadOnlyView(): MultiMap

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
    disconnect(id: number): void
}

class TreeMultiMap extends AbstractMultiMap {

    // Own properties of Gee-0.8.Gee.TreeMultiMap

    static name: string

    // Constructors of Gee-0.8.Gee.TreeMultiMap

    constructor(config?: TreeMultiMap.ConstructorProperties) 
    constructor(kType: GObject.GType, kDupFunc: GObject.BoxedCopyFunc, kDestroyFunc: GLib.DestroyNotify, vType: GObject.GType, vDupFunc: GObject.BoxedCopyFunc, vDestroyFunc: GLib.DestroyNotify, keyCompareFunc: GLib.CompareDataFunc | null, valueCompareFunc: GLib.CompareDataFunc | null) 
    static new(kType: GObject.GType, kDupFunc: GObject.BoxedCopyFunc, kDestroyFunc: GLib.DestroyNotify, vType: GObject.GType, vDupFunc: GObject.BoxedCopyFunc, vDestroyFunc: GLib.DestroyNotify, keyCompareFunc: GLib.CompareDataFunc | null, valueCompareFunc: GLib.CompareDataFunc | null): TreeMultiMap
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
    __gtype__: number

    // Owm methods of Gee-0.8.Gee.TreeMultiSet

    getCompareFunc(): [ /* returnType */ GLib.CompareDataFunc, /* resultTarget */ any ]

    // Conflicting methods

    reserved0(): void

    // Overloads of reserved0

    reserved0(): void
    reserved0(): void
    reserved1(): void

    // Overloads of reserved1

    reserved1(): void
    reserved1(): void
    reserved2(): void

    // Overloads of reserved2

    reserved2(): void
    reserved2(): void
    reserved3(): void

    // Overloads of reserved3

    reserved3(): void
    reserved3(): void
    reserved4(): void

    // Overloads of reserved4

    reserved4(): void
    reserved4(): void
    reserved5(): void

    // Overloads of reserved5

    reserved5(): void
    reserved5(): void
    reserved6(): void

    // Overloads of reserved6

    reserved6(): void
    reserved6(): void
    reserved7(): void

    // Overloads of reserved7

    reserved7(): void
    reserved7(): void
    reserved8(): void

    // Overloads of reserved8

    reserved8(): void
    reserved8(): void
    getReadOnlyView(): MultiSet

    // Overloads of getReadOnlyView

    getReadOnlyView(): MultiSet
    getReadOnlyView(): Collection
    getReadOnlyView(): MultiSet

    // Overloads of getReadOnlyView

    getReadOnlyView(): Collection
    getReadOnlyView(): Collection

    // Overloads of getReadOnlyView

    getReadOnlyView(): Collection
    getReadOnlyView(): Collection
    contains(item: any): boolean

    // Overloads of contains

    contains(item: any): boolean
    contains(item: any): boolean
    add(item: any): boolean

    // Overloads of add

    add(item: any): boolean
    add(item: any): boolean
    remove(item: any): boolean

    // Overloads of remove

    remove(item: any): boolean
    remove(item: any): boolean
    clear(): void

    // Overloads of clear

    clear(): void
    clear(): void
    getSize(): number

    // Overloads of getSize

    getSize(): number
    getSize(): number
    getReadOnly(): boolean

    // Overloads of getReadOnly

    getReadOnly(): boolean
    getReadOnly(): boolean
    iterator(): Iterator

    // Overloads of iterator

    iterator(): Iterator
    iterator(): Iterator
    foreach(f: ForallFunc): boolean

    // Overloads of foreach

    foreach(f: ForallFunc): boolean
    foreach(f: ForallFunc): boolean

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
    disconnect(id: number): void
}

class TreeMultiSet extends AbstractMultiSet {

    // Own properties of Gee-0.8.Gee.TreeMultiSet

    static name: string

    // Constructors of Gee-0.8.Gee.TreeMultiSet

    constructor(config?: TreeMultiSet.ConstructorProperties) 
    constructor(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, compareFunc: GLib.CompareDataFunc | null) 
    static new(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, compareFunc: GLib.CompareDataFunc | null): TreeMultiSet
    _init(config?: TreeMultiSet.ConstructorProperties): void

    // Conflicting static methods

    static empty(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify): Set

    // Overloads of empty

    static empty(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify): Collection
    static empty(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify): Collection
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
    __gtype__: number

    // Conflicting properties

    readOnlyView: any

    // Owm methods of Gee-0.8.Gee.TreeSet

    getCompareFunc(): [ /* returnType */ GLib.CompareDataFunc, /* resultTarget */ any ]

    // Conflicting methods

    bidirIterator(): BidirIterator

    // Overloads of bidirIterator

    bidirIterator(): BidirIterator
    bidirIterator(): BidirIterator
    reserved0(): void

    // Overloads of reserved0

    reserved0(): void
    reserved0(): void

    // Overloads of reserved0

    reserved0(): void
    reserved0(): void

    // Overloads of reserved0

    reserved0(): void
    reserved0(): void
    reserved1(): void

    // Overloads of reserved1

    reserved1(): void
    reserved1(): void

    // Overloads of reserved1

    reserved1(): void
    reserved1(): void

    // Overloads of reserved1

    reserved1(): void
    reserved1(): void
    reserved2(): void

    // Overloads of reserved2

    reserved2(): void
    reserved2(): void

    // Overloads of reserved2

    reserved2(): void
    reserved2(): void

    // Overloads of reserved2

    reserved2(): void
    reserved2(): void
    reserved3(): void

    // Overloads of reserved3

    reserved3(): void
    reserved3(): void

    // Overloads of reserved3

    reserved3(): void
    reserved3(): void

    // Overloads of reserved3

    reserved3(): void
    reserved3(): void
    reserved4(): void

    // Overloads of reserved4

    reserved4(): void
    reserved4(): void

    // Overloads of reserved4

    reserved4(): void
    reserved4(): void

    // Overloads of reserved4

    reserved4(): void
    reserved4(): void
    reserved5(): void

    // Overloads of reserved5

    reserved5(): void
    reserved5(): void

    // Overloads of reserved5

    reserved5(): void
    reserved5(): void

    // Overloads of reserved5

    reserved5(): void
    reserved5(): void
    reserved6(): void

    // Overloads of reserved6

    reserved6(): void
    reserved6(): void

    // Overloads of reserved6

    reserved6(): void
    reserved6(): void

    // Overloads of reserved6

    reserved6(): void
    reserved6(): void
    reserved7(): void

    // Overloads of reserved7

    reserved7(): void
    reserved7(): void

    // Overloads of reserved7

    reserved7(): void
    reserved7(): void

    // Overloads of reserved7

    reserved7(): void
    reserved7(): void
    reserved8(): void

    // Overloads of reserved8

    reserved8(): void
    reserved8(): void

    // Overloads of reserved8

    reserved8(): void
    reserved8(): void

    // Overloads of reserved8

    reserved8(): void
    reserved8(): void
    reserved9(): void

    // Overloads of reserved9

    reserved9(): void
    reserved9(): void

    // Overloads of reserved9

    reserved9(): void
    reserved9(): void

    // Overloads of reserved9

    reserved9(): void
    reserved9(): void
    getReadOnlyView(): BidirSortedSet

    // Overloads of getReadOnlyView

    getReadOnlyView(): BidirSortedSet
    getReadOnlyView(): SortedSet
    getReadOnlyView(): Set
    getReadOnlyView(): Collection
    getReadOnlyView(): BidirSortedSet

    // Overloads of getReadOnlyView

    getReadOnlyView(): SortedSet
    getReadOnlyView(): Set
    getReadOnlyView(): Collection
    getReadOnlyView(): SortedSet

    // Overloads of getReadOnlyView

    getReadOnlyView(): SortedSet
    getReadOnlyView(): Set
    getReadOnlyView(): Collection
    getReadOnlyView(): SortedSet

    // Overloads of getReadOnlyView

    getReadOnlyView(): Set
    getReadOnlyView(): Collection
    getReadOnlyView(): Set

    // Overloads of getReadOnlyView

    getReadOnlyView(): Set
    getReadOnlyView(): Collection
    getReadOnlyView(): Set

    // Overloads of getReadOnlyView

    getReadOnlyView(): Collection
    getReadOnlyView(): Collection

    // Overloads of getReadOnlyView

    getReadOnlyView(): Collection
    getReadOnlyView(): Collection
    first(): any

    // Overloads of first

    first(): any
    first(): any
    last(): any

    // Overloads of last

    last(): any
    last(): any
    iteratorAt(element: any): Iterator | null

    // Overloads of iteratorAt

    iteratorAt(element: any): Iterator | null
    iteratorAt(element: any): Iterator | null
    lower(element: any): any | null

    // Overloads of lower

    lower(element: any): any | null
    lower(element: any): any | null
    higher(element: any): any | null

    // Overloads of higher

    higher(element: any): any | null
    higher(element: any): any | null
    floor(element: any): any | null

    // Overloads of floor

    floor(element: any): any | null
    floor(element: any): any | null
    ceil(element: any): any | null

    // Overloads of ceil

    ceil(element: any): any | null
    ceil(element: any): any | null
    headSet(before: any): SortedSet

    // Overloads of headSet

    headSet(before: any): SortedSet
    headSet(before: any): SortedSet
    tailSet(after: any): SortedSet

    // Overloads of tailSet

    tailSet(after: any): SortedSet
    tailSet(after: any): SortedSet
    subSet(from: any, to: any): SortedSet

    // Overloads of subSet

    subSet(from: any, to: any): SortedSet
    subSet(from: any, to: any): SortedSet
    contains(item: any): boolean

    // Overloads of contains

    contains(item: any): boolean
    contains(item: any): boolean
    add(item: any): boolean

    // Overloads of add

    add(item: any): boolean
    add(item: any): boolean
    remove(item: any): boolean

    // Overloads of remove

    remove(item: any): boolean
    remove(item: any): boolean
    clear(): void

    // Overloads of clear

    clear(): void
    clear(): void
    getSize(): number

    // Overloads of getSize

    getSize(): number
    getSize(): number
    getReadOnly(): boolean

    // Overloads of getReadOnly

    getReadOnly(): boolean
    getReadOnly(): boolean
    iterator(): Iterator

    // Overloads of iterator

    iterator(): Iterator
    iterator(): Iterator
    foreach(f: ForallFunc): boolean

    // Overloads of foreach

    foreach(f: ForallFunc): boolean
    foreach(f: ForallFunc): boolean

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
    disconnect(id: number): void
}

class TreeSet extends AbstractBidirSortedSet {

    // Own properties of Gee-0.8.Gee.TreeSet

    static name: string

    // Constructors of Gee-0.8.Gee.TreeSet

    constructor(config?: TreeSet.ConstructorProperties) 
    constructor(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, compareFunc: GLib.CompareDataFunc | null) 
    static new(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, compareFunc: GLib.CompareDataFunc | null): TreeSet
    _init(config?: TreeSet.ConstructorProperties): void

    // Conflicting static methods

    static empty(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify): BidirSortedSet

    // Overloads of empty

    static empty(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify): SortedSet
    static empty(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify): Set
    static empty(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify): Collection
    static empty(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify): SortedSet

    // Overloads of empty

    static empty(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify): Set
    static empty(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify): Collection
    static empty(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify): Set

    // Overloads of empty

    static empty(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify): Collection
    static empty(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify): Collection
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
    __gtype__: number

    // Conflicting properties

    readOnlyView: any

    // Owm methods of Gee-0.8.Gee.UnrolledLinkedList

    getEqualFunc(): [ /* returnType */ EqualDataFunc, /* resultTarget */ any ]

    // Conflicting methods

    contains(item: any): boolean
    contains(item: any): boolean

    // Overloads of contains

    contains(item: any): boolean
    add(item: any): boolean
    add(item: any): boolean

    // Overloads of add

    add(item: any): boolean
    remove(item: any): boolean
    remove(item: any): boolean

    // Overloads of remove

    remove(item: any): boolean
    clear(): void
    clear(): void

    // Overloads of clear

    clear(): void
    getSize(): number
    getSize(): number

    // Overloads of getSize

    getSize(): number
    getReadOnly(): boolean
    getReadOnly(): boolean

    // Overloads of getReadOnly

    getReadOnly(): boolean
    getReadOnlyView(): BidirList

    // Overloads of getReadOnlyView

    getReadOnlyView(): BidirList
    getReadOnlyView(): List
    getReadOnlyView(): Collection
    getReadOnlyView(): Collection
    getReadOnlyView(): BidirList

    // Overloads of getReadOnlyView

    getReadOnlyView(): List
    getReadOnlyView(): Collection
    getReadOnlyView(): List

    // Overloads of getReadOnlyView

    getReadOnlyView(): List
    getReadOnlyView(): Collection
    getReadOnlyView(): List

    // Overloads of getReadOnlyView

    getReadOnlyView(): Collection
    getReadOnlyView(): Collection

    // Overloads of getReadOnlyView

    getReadOnlyView(): Collection
    iterator(): Iterator
    iterator(): Iterator

    // Overloads of iterator

    iterator(): Iterator
    foreach(f: ForallFunc): boolean

    // Overloads of foreach

    foreach(f: ForallFunc): boolean
    foreach(f: ForallFunc): boolean
    bidirListIterator(): BidirListIterator

    // Overloads of bidirListIterator

    bidirListIterator(): BidirListIterator
    bidirListIterator(): BidirListIterator
    reserved0(): void

    // Overloads of reserved0

    reserved0(): void
    reserved0(): void

    // Overloads of reserved0

    reserved0(): void
    reserved0(): void
    reserved1(): void

    // Overloads of reserved1

    reserved1(): void
    reserved1(): void

    // Overloads of reserved1

    reserved1(): void
    reserved1(): void
    reserved2(): void

    // Overloads of reserved2

    reserved2(): void
    reserved2(): void

    // Overloads of reserved2

    reserved2(): void
    reserved2(): void
    reserved3(): void

    // Overloads of reserved3

    reserved3(): void
    reserved3(): void

    // Overloads of reserved3

    reserved3(): void
    reserved3(): void
    reserved4(): void

    // Overloads of reserved4

    reserved4(): void
    reserved4(): void

    // Overloads of reserved4

    reserved4(): void
    reserved4(): void
    reserved5(): void

    // Overloads of reserved5

    reserved5(): void
    reserved5(): void

    // Overloads of reserved5

    reserved5(): void
    reserved5(): void
    reserved6(): void

    // Overloads of reserved6

    reserved6(): void
    reserved6(): void

    // Overloads of reserved6

    reserved6(): void
    reserved6(): void
    reserved7(): void

    // Overloads of reserved7

    reserved7(): void
    reserved7(): void

    // Overloads of reserved7

    reserved7(): void
    reserved7(): void
    reserved8(): void

    // Overloads of reserved8

    reserved8(): void
    reserved8(): void

    // Overloads of reserved8

    reserved8(): void
    reserved8(): void
    reserved9(): void

    // Overloads of reserved9

    reserved9(): void
    reserved9(): void

    // Overloads of reserved9

    reserved9(): void
    reserved9(): void
    listIterator(): ListIterator

    // Overloads of listIterator

    listIterator(): ListIterator
    listIterator(): ListIterator
    get(index: number): any

    // Overloads of get

    get(index: number): any
    get(index: number): any
    set(index: number, item: any): void

    // Overloads of set

    set(index: number, item: any): void
    set(index: number, item: any): void
    indexOf(item: any): number

    // Overloads of indexOf

    indexOf(item: any): number
    indexOf(item: any): number
    insert(index: number, item: any): void

    // Overloads of insert

    insert(index: number, item: any): void
    insert(index: number, item: any): void
    removeAt(index: number): any

    // Overloads of removeAt

    removeAt(index: number): any
    removeAt(index: number): any
    slice(start: number, stop: number): List | null

    // Overloads of slice

    slice(start: number, stop: number): List | null
    slice(start: number, stop: number): List | null

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
    disconnect(id: number): void
}

class UnrolledLinkedList extends AbstractBidirList {

    // Own properties of Gee-0.8.Gee.UnrolledLinkedList

    static name: string

    // Constructors of Gee-0.8.Gee.UnrolledLinkedList

    constructor(config?: UnrolledLinkedList.ConstructorProperties) 
    constructor(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, equalFunc: EqualDataFunc | null) 
    static new(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, equalFunc: EqualDataFunc | null): UnrolledLinkedList
    _init(config?: UnrolledLinkedList.ConstructorProperties): void

    // Conflicting static methods

    static empty(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify): Collection
    static empty(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify): List

    // Overloads of empty

    static empty(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify): Collection
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
    __gtype__: number

    // Owm methods of Gee-0.8.Gee.MapEntry

    // Has conflict: getKey(): any
    // Has conflict: getValue(): any
    // Has conflict: setValue(value: any): void
    // Has conflict: getReadOnly(): boolean

    // Own virtual methods of Gee-0.8.Gee.MapEntry

    getKey(): any
    getValue(): any
    setValue(value: any): void
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
    disconnect(id: number): void
}

class MapEntry extends GObject.Object {

    // Own properties of Gee-0.8.Gee.MapEntry

    static name: string

    // Constructors of Gee-0.8.Gee.MapEntry

    constructor(config?: MapEntry.ConstructorProperties) 
    _init(config?: MapEntry.ConstructorProperties): void
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

    listIterator: (self: AbstractList) => ListIterator
    get: (self: AbstractList, index: number) => any
    set: (self: AbstractList, index: number, item: any) => void
    indexOf: (self: AbstractList, item: any) => number
    insert: (self: AbstractList, index: number, item: any) => void
    removeAt: (self: AbstractList, index: number) => any
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

    hasKey: (self: AbstractMap, key: any) => boolean
    has: (self: AbstractMap, key: any, value: any) => boolean
    get: (self: AbstractMap, key: any) => any | null
    set: (self: AbstractMap, key: any, value: any) => void
    unset: (self: AbstractMap, key: any) => [ /* returnType */ boolean, /* value */ any ]
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
    getValueEqualFunc: (self: AbstractMultiMap) => [ /* returnType */ EqualDataFunc, /* resultTarget */ any, /* resultTargetDestroyNotify */ GLib.DestroyNotify ]
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

    headMap: (self: AbstractSortedMap, before: any) => SortedMap
    tailMap: (self: AbstractSortedMap, after: any) => SortedMap
    subMap: (self: AbstractSortedMap, before: any, after: any) => SortedMap
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
    iteratorAt: (self: AbstractSortedSet, element: any) => Iterator | null
    lower: (self: AbstractSortedSet, element: any) => any | null
    higher: (self: AbstractSortedSet, element: any) => any | null
    floor: (self: AbstractSortedSet, element: any) => any | null
    ceil: (self: AbstractSortedSet, element: any) => any | null
    headSet: (self: AbstractSortedSet, before: any) => SortedSet
    tailSet: (self: AbstractSortedSet, after: any) => SortedSet
    subSet: (self: AbstractSortedSet, from: any, to: any) => SortedSet
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

    get(otherThread: boolean): any
    release(notify: GLib.DestroyNotify): void
}

class HazardPointer {

    // Own properties of Gee-0.8.Gee.HazardPointer

    static name: string

    // Constructors of Gee-0.8.Gee.HazardPointer

    constructor(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, ptr: any | null) 
    static new(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, ptr: any | null): HazardPointer
    static getHazardPointer(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, aptr: any | null, mask: number): [ /* returnType */ HazardPointer | null, /* maskOut */ number ]
    static getPointer(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, aptr: any | null, mask: number): [ /* returnType */ any | null, /* maskOut */ number ]
    static exchangeHazardPointer(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, aptr: any | null, newPtr: any | null, mask: number, newMask: number): [ /* returnType */ HazardPointer | null, /* oldMask */ number ]
    static setPointer(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, aptr: any | null, newPtr: any | null, mask: number, newMask: number): void
    static exchangePointer(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, aptr: any | null, newPtr: any | null, mask: number, newMask: number): [ /* returnType */ any | null, /* oldMask */ number ]
    static compareAndExchangePointer(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, aptr: any | null, oldPtr: any | null, newPtr: any | null, mask: number, oldMask: number, newMask: number): boolean
    static setDefaultPolicy(policy: HazardPointerPolicy): void
    static setThreadExitPolicy(policy: HazardPointerPolicy): void
    static setReleasePolicy(policy: HazardPointerReleasePolicy): boolean
}

interface HazardPointerContext {

    // Own fields of Gee-0.8.Gee.HazardPointerContext

    parent: any | null
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

    insert: (self: BidirListIterator, item: any) => void
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

    contains: (self: Collection, item: any) => boolean
    add: (self: Collection, item: any) => boolean
    remove: (self: Collection, item: any) => boolean
    clear: (self: Collection) => void
    addAll: (self: Collection, collection: Collection) => boolean
    containsAll: (self: Collection, collection: Collection) => boolean
    removeAll: (self: Collection, collection: Collection) => boolean
    retainAll: (self: Collection, collection: Collection) => boolean
    toArray: () => [ /* returnType */ any[], /* resultLength1 */ number ]
    addAllArray: (self: Collection, array: any[]) => boolean
    containsAllArray: (self: Collection, array: any[]) => boolean
    removeAllArray: (self: Collection, array: any[]) => boolean
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

    compareTo: (self: Comparable, object: any) => number
}

abstract class ComparableIface {

    // Own properties of Gee-0.8.Gee.ComparableIface

    static name: string
}

interface DequeIface {

    // Own fields of Gee-0.8.Gee.DequeIface

    offerHead: (self: Deque, element: any) => boolean
    peekHead: (self: Deque) => any | null
    pollHead: (self: Deque) => any | null
    drainHead: (self: Deque, recipient: Collection, amount: number) => number
    offerTail: (self: Deque, element: any) => boolean
    peekTail: (self: Deque) => any | null
    pollTail: (self: Deque) => any | null
    drainTail: (self: Deque, recipient: Collection, amount: number) => number
}

abstract class DequeIface {

    // Own properties of Gee-0.8.Gee.DequeIface

    static name: string
}

interface FutureIface {

    // Own fields of Gee-0.8.Gee.FutureIface

    wait: (self: Future) => any
    waitUntil: (self: Future, endTime: number) => [ /* returnType */ boolean, /* value */ any ]
    waitAsync: (self: Future, callback: Gio.AsyncReadyCallback | null) => void
    waitFinish: (self: Future, res: Gio.AsyncResult) => any
    map: (self: Future, aType: GObject.GType, aDupFunc: GObject.BoxedCopyFunc, aDestroyFunc: GLib.DestroyNotify, func: any) => Future
    lightMap: (self: Future, aType: GObject.GType, aDupFunc: GObject.BoxedCopyFunc, aDestroyFunc: GLib.DestroyNotify, func: any) => Future
    lightMapBroken: (self: Future, aType: GObject.GType, aDupFunc: GObject.BoxedCopyFunc, aDestroyFunc: GLib.DestroyNotify, func: any) => Future
    zip: (self: Future, aType: GObject.GType, aDupFunc: GObject.BoxedCopyFunc, aDestroyFunc: GLib.DestroyNotify, bType: GObject.GType, bDupFunc: GObject.BoxedCopyFunc, bDestroyFunc: GLib.DestroyNotify, zipFunc: any, second: Future) => Future
    flatMap: (self: Future, aType: GObject.GType, aDupFunc: GObject.BoxedCopyFunc, aDestroyFunc: GLib.DestroyNotify, func: any) => Future
    getValue: (self: Future) => any | null
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
    equalTo: (self: Hashable, object: any) => boolean
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
    get: (self: Iterator) => any
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
    get: (self: List, index: number) => any
    set: (self: List, index: number, item: any) => void
    indexOf: (self: List, item: any) => number
    insert: (self: List, index: number, item: any) => void
    removeAt: (self: List, index: number) => any
    slice: (self: List, start: number, stop: number) => List | null
    first: (self: List) => any
    last: (self: List) => any
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

    hasKey: (self: Map, key: any) => boolean
    has: (self: Map, key: any, value: any) => boolean
    get: (self: Map, key: any) => any | null
    set: (self: Map, key: any, value: any) => void
    unset: (self: Map, key: any) => [ /* returnType */ boolean, /* value */ any ]
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
    getKey: (self: MapIterator) => any
    getValue: (self: MapIterator) => any
    setValue: (self: MapIterator, value: any) => void
    unset: (self: MapIterator) => void
    fold: (self: MapIterator, aType: GObject.GType, aDupFunc: GObject.BoxedCopyFunc, aDestroyFunc: GLib.DestroyNotify, f: FoldMapFunc, seed: any) => any
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
    contains: (self: MultiMap, key: any) => boolean
    get: (self: MultiMap, key: any) => Collection
    set: (self: MultiMap, key: any, value: any) => void
    remove: (self: MultiMap, key: any, value: any) => boolean
    removeAll: (self: MultiMap, key: any) => boolean
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

    count: (self: MultiSet, item: any) => number
    getReadOnlyView: (self: MultiSet) => MultiSet
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

    headMap: (self: SortedMap, before: any) => SortedMap
    tailMap: (self: SortedMap, after: any) => SortedMap
    subMap: (self: SortedMap, before: any, after: any) => SortedMap
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

    first: (self: SortedSet) => any
    last: (self: SortedSet) => any
    iteratorAt: (self: SortedSet, element: any) => Iterator | null
    lower: (self: SortedSet, element: any) => any | null
    higher: (self: SortedSet, element: any) => any | null
    floor: (self: SortedSet, element: any) => any | null
    ceil: (self: SortedSet, element: any) => any | null
    headSet: (self: SortedSet, before: any) => SortedSet
    tailSet: (self: SortedSet, after: any) => SortedSet
    subSet: (self: SortedSet, from: any, to: any) => SortedSet
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
    fold: (self: Traversable, aType: GObject.GType, aDupFunc: GObject.BoxedCopyFunc, aDestroyFunc: GLib.DestroyNotify, f: FoldFunc, seed: any) => any
    map: (self: Traversable, aType: GObject.GType, aDupFunc: GObject.BoxedCopyFunc, aDestroyFunc: GLib.DestroyNotify, f: MapFunc) => Iterator
    scan: (self: Traversable, aType: GObject.GType, aDupFunc: GObject.BoxedCopyFunc, aDestroyFunc: GLib.DestroyNotify, f: FoldFunc, seed: any) => Iterator
    filter: (self: Traversable, pred: Predicate) => Iterator
    chop: (self: Traversable, offset: number, length: number) => Iterator
    flatMap: (self: Traversable, aType: GObject.GType, aDupFunc: GObject.BoxedCopyFunc, aDestroyFunc: GLib.DestroyNotify, f: FlatMapFunc) => Iterator
    tee: (self: Traversable) => [ /* returnType */ Iterator[], /* resultLength1 */ number ]
    firstMatch: (self: Traversable, pred: Predicate) => any | null
    anyMatch: (self: Traversable, pred: Predicate) => boolean
    allMatch: (self: Traversable, pred: Predicate) => boolean
    max: (self: Traversable, compare: GLib.CompareDataFunc) => any
    min: (self: Traversable, compare: GLib.CompareDataFunc) => any
    orderBy: (self: Traversable, compare: GLib.CompareDataFunc | null) => Iterator
    getElementType: (self: Traversable) => GObject.GType
}

abstract class TraversableIface {

    // Own properties of Gee-0.8.Gee.TraversableIface

    static name: string
}

}

export default Gee;
// END