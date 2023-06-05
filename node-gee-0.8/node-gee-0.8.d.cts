
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

export enum FutureError {
    ABANDON_PROMISE,
    EXCEPTION,
}
export enum ConcurrentSetRangeType {
    HEAD,
    TAIL,
    BOUNDED,
    EMPTY,
}
export enum HazardPointerPolicy {
    DEFAULT,
    THREAD_EXIT,
    TRY_FREE,
    FREE,
    TRY_RELEASE,
    RELEASE,
}
export enum HazardPointerReleasePolicy {
    HELPER_THREAD,
    MAIN_LOOP,
}
export enum TraversableStream {
    YIELD,
    CONTINUE,
    END,
    WAIT,
}
export function functionsGetEqualFuncFor(t: GObject.GType): [ /* returnType */ EqualDataFunc, /* resultTarget */ any, /* resultTargetDestroyNotify */ GLib.DestroyNotify ]
export function functionsGetHashFuncFor(t: GObject.GType): [ /* returnType */ HashDataFunc, /* resultTarget */ any, /* resultTargetDestroyNotify */ GLib.DestroyNotify ]
export function functionsGetCompareFuncFor(t: GObject.GType): [ /* returnType */ GLib.CompareDataFunc, /* resultTarget */ any, /* resultTargetDestroyNotify */ GLib.DestroyNotify ]
export function hazardPointerPolicyIsConcrete(): boolean
export function hazardPointerPolicyIsBlocking(): boolean
export function hazardPointerPolicyIsSafe(): boolean
export function hazardPointerPolicyToConcrete(): HazardPointerPolicy
export function task(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, task: Task): Future
export function asyncTask(callback: Gio.AsyncReadyCallback | null): void
export function asyncTaskFinish(res: Gio.AsyncResult): void
export interface HashDataFunc {
    (tType: GObject.GType, tDupFunc: GObject.BoxedCopyFunc, tDestroyFunc: GLib.DestroyNotify, v: any | null): number
}
export interface EqualDataFunc {
    (tType: GObject.GType, tDupFunc: GObject.BoxedCopyFunc, tDestroyFunc: GLib.DestroyNotify, a: any | null, b: any | null): boolean
}
export interface LazyFunc {
    (gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify): any | null
}
export interface FoldMapFunc {
    (aType: GObject.GType, aDupFunc: GObject.BoxedCopyFunc, aDestroyFunc: GLib.DestroyNotify, kType: GObject.GType, kDupFunc: GObject.BoxedCopyFunc, kDestroyFunc: GLib.DestroyNotify, vType: GObject.GType, vDupFunc: GObject.BoxedCopyFunc, vDestroyFunc: GLib.DestroyNotify, k: any | null, v: any | null, a: any | null): any | null
}
export interface ForallMapFunc {
    (kType: GObject.GType, kDupFunc: GObject.BoxedCopyFunc, kDestroyFunc: GLib.DestroyNotify, vType: GObject.GType, vDupFunc: GObject.BoxedCopyFunc, vDestroyFunc: GLib.DestroyNotify, k: any | null, v: any | null): boolean
}
export interface Task {
    (gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify): any | null
}
export interface FoldFunc {
    (aType: GObject.GType, aDupFunc: GObject.BoxedCopyFunc, aDestroyFunc: GLib.DestroyNotify, gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, g: any | null, a: any | null): any | null
}
export interface ForallFunc {
    (gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, g: any | null): boolean
}
export interface UnfoldFunc {
    (aType: GObject.GType, aDupFunc: GObject.BoxedCopyFunc, aDestroyFunc: GLib.DestroyNotify): Lazy | null
}
export interface StreamFunc {
    (gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, aType: GObject.GType, aDupFunc: GObject.BoxedCopyFunc, aDestroyFunc: GLib.DestroyNotify, state: TraversableStream, g: Lazy | null): TraversableStream
}
export interface MapFunc {
    (aType: GObject.GType, aDupFunc: GObject.BoxedCopyFunc, aDestroyFunc: GLib.DestroyNotify, gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, g: any | null): any | null
}
export interface Predicate {
    (gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, g: any | null): boolean
}
export interface FlatMapFunc {
    (aType: GObject.GType, aDupFunc: GObject.BoxedCopyFunc, aDestroyFunc: GLib.DestroyNotify, gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, g: any | null): Iterator
}
export module BidirIterator {

    // Constructor properties interface

    export interface ConstructorProperties extends Iterator.ConstructorProperties, GObject.Object.ConstructorProperties {
    }

}

export interface BidirIterator extends Iterator {

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

export class BidirIterator extends GObject.Object {

    // Own properties of Gee-0.8.Gee.BidirIterator

    static name: string

    // Constructors of Gee-0.8.Gee.BidirIterator

    constructor(config?: BidirIterator.ConstructorProperties) 
    _init(config?: BidirIterator.ConstructorProperties): void
}

export module BidirList {

    // Constructor properties interface

    export interface ConstructorProperties extends List.ConstructorProperties, GObject.Object.ConstructorProperties {
    }

}

export interface BidirList extends List {

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

export class BidirList extends GObject.Object {

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

export module BidirListIterator {

    // Constructor properties interface

    export interface ConstructorProperties extends BidirIterator.ConstructorProperties, ListIterator.ConstructorProperties, GObject.Object.ConstructorProperties {
    }

}

export interface BidirListIterator extends BidirIterator, ListIterator {

    // Own properties of Gee-0.8.Gee.BidirListIterator

    __gtype__: number

    // Owm methods of Gee-0.8.Gee.BidirListIterator

    // Has conflict: insert(item: any | null): void

    // Own virtual methods of Gee-0.8.Gee.BidirListIterator

    insert(item: any | null): void

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

export class BidirListIterator extends GObject.Object {

    // Own properties of Gee-0.8.Gee.BidirListIterator

    static name: string

    // Constructors of Gee-0.8.Gee.BidirListIterator

    constructor(config?: BidirListIterator.ConstructorProperties) 
    _init(config?: BidirListIterator.ConstructorProperties): void
}

export module BidirMapIterator {

    // Constructor properties interface

    export interface ConstructorProperties extends MapIterator.ConstructorProperties, GObject.Object.ConstructorProperties {
    }

}

export interface BidirMapIterator extends MapIterator {

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

export class BidirMapIterator extends GObject.Object {

    // Own properties of Gee-0.8.Gee.BidirMapIterator

    static name: string

    // Constructors of Gee-0.8.Gee.BidirMapIterator

    constructor(config?: BidirMapIterator.ConstructorProperties) 
    _init(config?: BidirMapIterator.ConstructorProperties): void
}

export module BidirSortedSet {

    // Constructor properties interface

    export interface ConstructorProperties extends SortedSet.ConstructorProperties, GObject.Object.ConstructorProperties {
    }

}

export interface BidirSortedSet extends SortedSet {

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

export class BidirSortedSet extends GObject.Object {

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

export module BidirSortedMap {

    // Constructor properties interface

    export interface ConstructorProperties extends SortedMap.ConstructorProperties, GObject.Object.ConstructorProperties {
    }

}

export interface BidirSortedMap extends SortedMap {

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

export class BidirSortedMap extends GObject.Object {

    // Own properties of Gee-0.8.Gee.BidirSortedMap

    static name: string

    // Constructors of Gee-0.8.Gee.BidirSortedMap

    constructor(config?: BidirSortedMap.ConstructorProperties) 
    _init(config?: BidirSortedMap.ConstructorProperties): void
    static empty(kType: GObject.GType, kDupFunc: GObject.BoxedCopyFunc, kDestroyFunc: GLib.DestroyNotify, vType: GObject.GType, vDupFunc: GObject.BoxedCopyFunc, vDestroyFunc: GLib.DestroyNotify): BidirSortedMap

    // Overloads of empty

    static empty(kType: GObject.GType, kDupFunc: GObject.BoxedCopyFunc, kDestroyFunc: GLib.DestroyNotify, vType: GObject.GType, vDupFunc: GObject.BoxedCopyFunc, vDestroyFunc: GLib.DestroyNotify): Map
}

export module Collection {

    // Constructor properties interface

    export interface ConstructorProperties extends Iterable.ConstructorProperties, GObject.Object.ConstructorProperties {
    }

}

export interface Collection extends Iterable {

    // Own properties of Gee-0.8.Gee.Collection

    readonly size: number
    readonly readOnly: boolean
    readonly readOnlyView: Collection
    __gtype__: number

    // Owm methods of Gee-0.8.Gee.Collection

    // Has conflict: contains(item: any | null): boolean
    // Has conflict: add(item: any | null): boolean
    // Has conflict: remove(item: any | null): boolean
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

    contains(item: any | null): boolean
    add(item: any | null): boolean
    remove(item: any | null): boolean
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

export class Collection extends GObject.Object {

    // Own properties of Gee-0.8.Gee.Collection

    static name: string

    // Constructors of Gee-0.8.Gee.Collection

    constructor(config?: Collection.ConstructorProperties) 
    _init(config?: Collection.ConstructorProperties): void
    static empty(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify): Collection
}

export module Comparable {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface Comparable extends GObject.Object {

    // Own properties of Gee-0.8.Gee.Comparable

    __gtype__: number

    // Owm methods of Gee-0.8.Gee.Comparable

    // Has conflict: compareTo(object: any | null): number

    // Own virtual methods of Gee-0.8.Gee.Comparable

    compareTo(object: any | null): number

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

export class Comparable {

    // Own properties of Gee-0.8.Gee.Comparable

    static name: string

    // Constructors of Gee-0.8.Gee.Comparable

    constructor(config?: Comparable.ConstructorProperties) 
    _init(config?: Comparable.ConstructorProperties): void
}

export module Deque {

    // Constructor properties interface

    export interface ConstructorProperties extends Queue.ConstructorProperties, GObject.Object.ConstructorProperties {
    }

}

export interface Deque extends Queue {

    // Own properties of Gee-0.8.Gee.Deque

    __gtype__: number

    // Owm methods of Gee-0.8.Gee.Deque

    // Has conflict: offerHead(element: any | null): boolean
    // Has conflict: peekHead(): any | null
    // Has conflict: pollHead(): any | null
    // Has conflict: drainHead(recipient: Collection, amount: number): number
    // Has conflict: offerTail(element: any | null): boolean
    // Has conflict: peekTail(): any | null
    // Has conflict: pollTail(): any | null
    // Has conflict: drainTail(recipient: Collection, amount: number): number

    // Own virtual methods of Gee-0.8.Gee.Deque

    offerHead(element: any | null): boolean
    peekHead(): any | null
    pollHead(): any | null
    drainHead(recipient: Collection, amount: number): number
    offerTail(element: any | null): boolean
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

export class Deque extends GObject.Object {

    // Own properties of Gee-0.8.Gee.Deque

    static name: string

    // Constructors of Gee-0.8.Gee.Deque

    constructor(config?: Deque.ConstructorProperties) 
    _init(config?: Deque.ConstructorProperties): void
}

export module Future {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface Future extends GObject.Object {

    // Own properties of Gee-0.8.Gee.Future

    readonly ready: boolean
    readonly exception: GLib.Error
    __gtype__: number

    // Owm methods of Gee-0.8.Gee.Future

    // Has conflict: wait(): any | null
    // Has conflict: waitUntil(endTime: number): [ /* returnType */ boolean, /* value */ any ]
    // Has conflict: waitAsync(callback: Gio.AsyncReadyCallback | null): void
    // Has conflict: waitFinish(res: Gio.AsyncResult): any | null
    // Has conflict: map(aType: GObject.GType, aDupFunc: GObject.BoxedCopyFunc, aDestroyFunc: GLib.DestroyNotify, func: any): Future
    // Has conflict: lightMap(aType: GObject.GType, aDupFunc: GObject.BoxedCopyFunc, aDestroyFunc: GLib.DestroyNotify, func: any): Future
    // Has conflict: lightMapBroken(aType: GObject.GType, aDupFunc: GObject.BoxedCopyFunc, aDestroyFunc: GLib.DestroyNotify, func: any): Future
    // Has conflict: zip(aType: GObject.GType, aDupFunc: GObject.BoxedCopyFunc, aDestroyFunc: GLib.DestroyNotify, bType: GObject.GType, bDupFunc: GObject.BoxedCopyFunc, bDestroyFunc: GLib.DestroyNotify, zipFunc: any, second: Future): Future
    // Has conflict: flatMap(aType: GObject.GType, aDupFunc: GObject.BoxedCopyFunc, aDestroyFunc: GLib.DestroyNotify, func: any): Future
    // Has conflict: getValue(): any | null
    // Has conflict: getReady(): boolean
    // Has conflict: getException(): GLib.Error | null

    // Own virtual methods of Gee-0.8.Gee.Future

    wait(): any | null
    waitUntil(endTime: number): [ /* returnType */ boolean, /* value */ any ]
    waitAsync(callback: Gio.AsyncReadyCallback | null): void
    waitFinish(res: Gio.AsyncResult): any | null
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

export class Future {

    // Own properties of Gee-0.8.Gee.Future

    static name: string

    // Constructors of Gee-0.8.Gee.Future

    constructor(config?: Future.ConstructorProperties) 
    _init(config?: Future.ConstructorProperties): void
}

export module Hashable {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface Hashable extends GObject.Object {

    // Own properties of Gee-0.8.Gee.Hashable

    __gtype__: number

    // Owm methods of Gee-0.8.Gee.Hashable

    // Has conflict: hash(): number
    // Has conflict: equalTo(object: any | null): boolean

    // Own virtual methods of Gee-0.8.Gee.Hashable

    hash(): number
    equalTo(object: any | null): boolean

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

export class Hashable {

    // Own properties of Gee-0.8.Gee.Hashable

    static name: string

    // Constructors of Gee-0.8.Gee.Hashable

    constructor(config?: Hashable.ConstructorProperties) 
    _init(config?: Hashable.ConstructorProperties): void
}

export module Iterable {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties, Traversable.ConstructorProperties {
    }

}

export interface Iterable extends GObject.Object, Traversable {

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

export class Iterable {

    // Own properties of Gee-0.8.Gee.Iterable

    static name: string

    // Constructors of Gee-0.8.Gee.Iterable

    constructor(config?: Iterable.ConstructorProperties) 
    _init(config?: Iterable.ConstructorProperties): void
}

export module Iterator {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties, Traversable.ConstructorProperties {
    }

}

export interface Iterator extends GObject.Object, Traversable {

    // Own properties of Gee-0.8.Gee.Iterator

    readonly valid: boolean
    readonly readOnly: boolean
    __gtype__: number

    // Owm methods of Gee-0.8.Gee.Iterator

    // Has conflict: next(): boolean
    // Has conflict: hasNext(): boolean
    // Has conflict: get(): any | null
    // Has conflict: remove(): void
    // Has conflict: getValid(): boolean
    // Has conflict: getReadOnly(): boolean

    // Own virtual methods of Gee-0.8.Gee.Iterator

    next(): boolean
    hasNext(): boolean
    get(): any | null
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

export class Iterator {

    // Own properties of Gee-0.8.Gee.Iterator

    static name: string

    // Constructors of Gee-0.8.Gee.Iterator

    constructor(config?: Iterator.ConstructorProperties) 
    _init(config?: Iterator.ConstructorProperties): void
    static unfold(aType: GObject.GType, aDupFunc: GObject.BoxedCopyFunc, aDestroyFunc: GLib.DestroyNotify, f: UnfoldFunc, current: Lazy | null): Iterator
    static concat(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, iters: Iterator): Iterator
}

export module List {

    // Constructor properties interface

    export interface ConstructorProperties extends Collection.ConstructorProperties, GObject.Object.ConstructorProperties {
    }

}

export interface List extends Collection {

    // Own properties of Gee-0.8.Gee.List

    readonly readOnlyView: any
    __gtype__: number

    // Owm methods of Gee-0.8.Gee.List

    // Has conflict: listIterator(): ListIterator
    // Has conflict: get(index: number): any | null
    // Has conflict: set(index: number, item: any | null): void
    // Has conflict: indexOf(item: any | null): number
    // Has conflict: insert(index: number, item: any | null): void
    // Has conflict: removeAt(index: number): any | null
    // Has conflict: slice(start: number, stop: number): List | null
    // Has conflict: first(): any | null
    // Has conflict: last(): any | null
    // Has conflict: insertAll(index: number, collection: Collection): void
    // Has conflict: sort(compareFunc: GLib.CompareDataFunc | null): void
    // Has conflict: getReadOnlyView(): List

    // Own virtual methods of Gee-0.8.Gee.List

    listIterator(): ListIterator
    get(index: number): any | null
    set(index: number, item: any | null): void
    indexOf(item: any | null): number
    insert(index: number, item: any | null): void
    removeAt(index: number): any | null
    slice(start: number, stop: number): List | null
    first(): any | null
    last(): any | null
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

export class List extends GObject.Object {

    // Own properties of Gee-0.8.Gee.List

    static name: string

    // Constructors of Gee-0.8.Gee.List

    constructor(config?: List.ConstructorProperties) 
    _init(config?: List.ConstructorProperties): void
    static empty(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify): List

    // Overloads of empty

    static empty(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify): Collection
}

export module ListIterator {

    // Constructor properties interface

    export interface ConstructorProperties extends Iterator.ConstructorProperties, GObject.Object.ConstructorProperties {
    }

}

export interface ListIterator extends Iterator {

    // Own properties of Gee-0.8.Gee.ListIterator

    __gtype__: number

    // Owm methods of Gee-0.8.Gee.ListIterator

    // Has conflict: set(item: any | null): void
    // Has conflict: add(item: any | null): void
    // Has conflict: index(): number

    // Own virtual methods of Gee-0.8.Gee.ListIterator

    set(item: any | null): void
    add(item: any | null): void
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

export class ListIterator extends GObject.Object {

    // Own properties of Gee-0.8.Gee.ListIterator

    static name: string

    // Constructors of Gee-0.8.Gee.ListIterator

    constructor(config?: ListIterator.ConstructorProperties) 
    _init(config?: ListIterator.ConstructorProperties): void
}

export module Map {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties, Iterable.ConstructorProperties {
    }

}

export interface Map extends GObject.Object, Iterable {

    // Own properties of Gee-0.8.Gee.Map

    readonly size: number
    readonly readOnly: boolean
    readonly keys: Set
    readonly values: Collection
    readonly entries: Set
    readonly readOnlyView: Map
    __gtype__: number

    // Owm methods of Gee-0.8.Gee.Map

    // Has conflict: hasKey(key: any | null): boolean
    contains(key: any | null): boolean
    // Has conflict: has(key: any | null, value: any | null): boolean
    // Has conflict: get(key: any | null): any | null
    // Has conflict: set(key: any | null, value: any | null): void
    // Has conflict: unset(key: any | null): [ /* returnType */ boolean, /* value */ any ]
    remove(key: any | null): [ /* returnType */ boolean, /* value */ any ]
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

    hasKey(key: any | null): boolean
    has(key: any | null, value: any | null): boolean
    get(key: any | null): any | null
    set(key: any | null, value: any | null): void
    unset(key: any | null): [ /* returnType */ boolean, /* value */ any ]
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

export class Map {

    // Own properties of Gee-0.8.Gee.Map

    static name: string

    // Constructors of Gee-0.8.Gee.Map

    constructor(config?: Map.ConstructorProperties) 
    _init(config?: Map.ConstructorProperties): void
    static empty(kType: GObject.GType, kDupFunc: GObject.BoxedCopyFunc, kDestroyFunc: GLib.DestroyNotify, vType: GObject.GType, vDupFunc: GObject.BoxedCopyFunc, vDestroyFunc: GLib.DestroyNotify): Map
}

export module MapIterator {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface MapIterator extends GObject.Object {

    // Own properties of Gee-0.8.Gee.MapIterator

    readonly valid: boolean
    readonly mutable: boolean
    readonly readOnly: boolean
    __gtype__: number

    // Owm methods of Gee-0.8.Gee.MapIterator

    // Has conflict: next(): boolean
    // Has conflict: hasNext(): boolean
    // Has conflict: getKey(): any | null
    // Has conflict: getValue(): any | null
    // Has conflict: setValue(value: any | null): void
    // Has conflict: unset(): void
    // Has conflict: fold(aType: GObject.GType, aDupFunc: GObject.BoxedCopyFunc, aDestroyFunc: GLib.DestroyNotify, f: FoldMapFunc, seed: any | null): any | null
    // Has conflict: foreach(f: ForallMapFunc): boolean
    // Has conflict: getValid(): boolean
    // Has conflict: getMutable(): boolean
    // Has conflict: getReadOnly(): boolean

    // Own virtual methods of Gee-0.8.Gee.MapIterator

    next(): boolean
    hasNext(): boolean
    getKey(): any | null
    getValue(): any | null
    setValue(value: any | null): void
    unset(): void
    fold(aType: GObject.GType, aDupFunc: GObject.BoxedCopyFunc, aDestroyFunc: GLib.DestroyNotify, f: FoldMapFunc, seed: any | null): any | null
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

export class MapIterator {

    // Own properties of Gee-0.8.Gee.MapIterator

    static name: string

    // Constructors of Gee-0.8.Gee.MapIterator

    constructor(config?: MapIterator.ConstructorProperties) 
    _init(config?: MapIterator.ConstructorProperties): void
}

export module MultiMap {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface MultiMap extends GObject.Object {

    // Own properties of Gee-0.8.Gee.MultiMap

    readonly size: number
    readonly readOnly: boolean
    __gtype__: number

    // Owm methods of Gee-0.8.Gee.MultiMap

    // Has conflict: getKeys(): Set
    // Has conflict: getAllKeys(): MultiSet
    // Has conflict: getValues(): Collection
    // Has conflict: contains(key: any | null): boolean
    // Has conflict: get(key: any | null): Collection
    // Has conflict: set(key: any | null, value: any | null): void
    // Has conflict: remove(key: any | null, value: any | null): boolean
    // Has conflict: removeAll(key: any | null): boolean
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
    contains(key: any | null): boolean
    get(key: any | null): Collection
    set(key: any | null, value: any | null): void
    remove(key: any | null, value: any | null): boolean
    removeAll(key: any | null): boolean
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

export class MultiMap {

    // Own properties of Gee-0.8.Gee.MultiMap

    static name: string

    // Constructors of Gee-0.8.Gee.MultiMap

    constructor(config?: MultiMap.ConstructorProperties) 
    _init(config?: MultiMap.ConstructorProperties): void
}

export module MultiSet {

    // Constructor properties interface

    export interface ConstructorProperties extends Collection.ConstructorProperties, GObject.Object.ConstructorProperties {
    }

}

export interface MultiSet extends Collection {

    // Own properties of Gee-0.8.Gee.MultiSet

    __gtype__: number

    // Owm methods of Gee-0.8.Gee.MultiSet

    // Has conflict: count(item: any | null): number
    // Has conflict: getReadOnlyView(): MultiSet

    // Own virtual methods of Gee-0.8.Gee.MultiSet

    count(item: any | null): number
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

export class MultiSet extends GObject.Object {

    // Own properties of Gee-0.8.Gee.MultiSet

    static name: string

    // Constructors of Gee-0.8.Gee.MultiSet

    constructor(config?: MultiSet.ConstructorProperties) 
    _init(config?: MultiSet.ConstructorProperties): void
    static empty(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify): Set

    // Overloads of empty

    static empty(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify): Collection
}

export module Queue {

    // Constructor properties interface

    export interface ConstructorProperties extends Collection.ConstructorProperties, GObject.Object.ConstructorProperties {
    }

}

export interface Queue extends Collection {

    // Own properties of Gee-0.8.Gee.Queue

    readonly capacity: number
    readonly remainingCapacity: number
    readonly isFull: boolean
    __gtype__: number

    // Owm methods of Gee-0.8.Gee.Queue

    // Has conflict: offer(element: any | null): boolean
    // Has conflict: peek(): any | null
    // Has conflict: poll(): any | null
    // Has conflict: drain(recipient: Collection, amount: number): number
    // Has conflict: getCapacity(): number
    // Has conflict: getRemainingCapacity(): number
    // Has conflict: getIsFull(): boolean

    // Own virtual methods of Gee-0.8.Gee.Queue

    offer(element: any | null): boolean
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

export class Queue extends GObject.Object {

    // Own properties of Gee-0.8.Gee.Queue

    static name: string

    // Constructors of Gee-0.8.Gee.Queue

    constructor(config?: Queue.ConstructorProperties) 
    _init(config?: Queue.ConstructorProperties): void
}

export module Set {

    // Constructor properties interface

    export interface ConstructorProperties extends Collection.ConstructorProperties, GObject.Object.ConstructorProperties {
    }

}

export interface Set extends Collection {

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

export class Set extends GObject.Object {

    // Own properties of Gee-0.8.Gee.Set

    static name: string

    // Constructors of Gee-0.8.Gee.Set

    constructor(config?: Set.ConstructorProperties) 
    _init(config?: Set.ConstructorProperties): void
    static empty(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify): Set

    // Overloads of empty

    static empty(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify): Collection
}

export module SortedMap {

    // Constructor properties interface

    export interface ConstructorProperties extends Map.ConstructorProperties, GObject.Object.ConstructorProperties {
    }

}

export interface SortedMap extends Map {

    // Own properties of Gee-0.8.Gee.SortedMap

    readonly ascendingKeys: SortedSet
    readonly ascendingEntries: SortedSet
    readonly readOnlyView: any
    __gtype__: number

    // Owm methods of Gee-0.8.Gee.SortedMap

    // Has conflict: headMap(before: any | null): SortedMap
    // Has conflict: tailMap(after: any | null): SortedMap
    // Has conflict: subMap(before: any | null, after: any | null): SortedMap
    // Has conflict: getAscendingKeys(): SortedSet
    // Has conflict: getAscendingEntries(): SortedSet
    // Has conflict: getReadOnlyView(): SortedMap

    // Own virtual methods of Gee-0.8.Gee.SortedMap

    headMap(before: any | null): SortedMap
    tailMap(after: any | null): SortedMap
    subMap(before: any | null, after: any | null): SortedMap
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

export class SortedMap extends GObject.Object {

    // Own properties of Gee-0.8.Gee.SortedMap

    static name: string

    // Constructors of Gee-0.8.Gee.SortedMap

    constructor(config?: SortedMap.ConstructorProperties) 
    _init(config?: SortedMap.ConstructorProperties): void
    static empty(kType: GObject.GType, kDupFunc: GObject.BoxedCopyFunc, kDestroyFunc: GLib.DestroyNotify, vType: GObject.GType, vDupFunc: GObject.BoxedCopyFunc, vDestroyFunc: GLib.DestroyNotify): Map
}

export module SortedSet {

    // Constructor properties interface

    export interface ConstructorProperties extends Set.ConstructorProperties, GObject.Object.ConstructorProperties {
    }

}

export interface SortedSet extends Set {

    // Own properties of Gee-0.8.Gee.SortedSet

    readonly readOnlyView: any
    __gtype__: number

    // Owm methods of Gee-0.8.Gee.SortedSet

    // Has conflict: first(): any | null
    // Has conflict: last(): any | null
    // Has conflict: iteratorAt(element: any | null): Iterator | null
    // Has conflict: lower(element: any | null): any | null
    // Has conflict: higher(element: any | null): any | null
    // Has conflict: floor(element: any | null): any | null
    // Has conflict: ceil(element: any | null): any | null
    // Has conflict: headSet(before: any | null): SortedSet
    // Has conflict: tailSet(after: any | null): SortedSet
    // Has conflict: subSet(from: any | null, to: any | null): SortedSet
    // Has conflict: getReadOnlyView(): SortedSet

    // Own virtual methods of Gee-0.8.Gee.SortedSet

    first(): any | null
    last(): any | null
    iteratorAt(element: any | null): Iterator | null
    lower(element: any | null): any | null
    higher(element: any | null): any | null
    floor(element: any | null): any | null
    ceil(element: any | null): any | null
    headSet(before: any | null): SortedSet
    tailSet(after: any | null): SortedSet
    subSet(from: any | null, to: any | null): SortedSet
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

export class SortedSet extends GObject.Object {

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

export module Traversable {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface Traversable extends GObject.Object {

    // Own properties of Gee-0.8.Gee.Traversable

    __gtype__: number

    // Owm methods of Gee-0.8.Gee.Traversable

    // Has conflict: foreach(f: ForallFunc): boolean
    // Has conflict: stream(aType: GObject.GType, aDupFunc: GObject.BoxedCopyFunc, aDestroyFunc: GLib.DestroyNotify, f: StreamFunc): Iterator
    // Has conflict: fold(aType: GObject.GType, aDupFunc: GObject.BoxedCopyFunc, aDestroyFunc: GLib.DestroyNotify, f: FoldFunc, seed: any | null): any | null
    // Has conflict: map(aType: GObject.GType, aDupFunc: GObject.BoxedCopyFunc, aDestroyFunc: GLib.DestroyNotify, f: MapFunc): Iterator
    // Has conflict: scan(aType: GObject.GType, aDupFunc: GObject.BoxedCopyFunc, aDestroyFunc: GLib.DestroyNotify, f: FoldFunc, seed: any | null): Iterator
    // Has conflict: filter(pred: Predicate): Iterator
    // Has conflict: chop(offset: number, length: number): Iterator
    // Has conflict: flatMap(aType: GObject.GType, aDupFunc: GObject.BoxedCopyFunc, aDestroyFunc: GLib.DestroyNotify, f: FlatMapFunc): Iterator
    // Has conflict: tee(forks: number): Iterator[]
    // Has conflict: firstMatch(pred: Predicate): any | null
    // Has conflict: anyMatch(pred: Predicate): boolean
    // Has conflict: allMatch(pred: Predicate): boolean
    // Has conflict: max(compare: GLib.CompareDataFunc): any | null
    // Has conflict: min(compare: GLib.CompareDataFunc): any | null
    // Has conflict: orderBy(compare: GLib.CompareDataFunc | null): Iterator
    // Has conflict: getElementType(): GObject.GType

    // Own virtual methods of Gee-0.8.Gee.Traversable

    foreach(f: ForallFunc): boolean
    stream(aType: GObject.GType, aDupFunc: GObject.BoxedCopyFunc, aDestroyFunc: GLib.DestroyNotify, f: StreamFunc): Iterator
    fold(aType: GObject.GType, aDupFunc: GObject.BoxedCopyFunc, aDestroyFunc: GLib.DestroyNotify, f: FoldFunc, seed: any | null): any | null
    map(aType: GObject.GType, aDupFunc: GObject.BoxedCopyFunc, aDestroyFunc: GLib.DestroyNotify, f: MapFunc): Iterator
    scan(aType: GObject.GType, aDupFunc: GObject.BoxedCopyFunc, aDestroyFunc: GLib.DestroyNotify, f: FoldFunc, seed: any | null): Iterator
    filter(pred: Predicate): Iterator
    chop(offset: number, length: number): Iterator
    flatMap(aType: GObject.GType, aDupFunc: GObject.BoxedCopyFunc, aDestroyFunc: GLib.DestroyNotify, f: FlatMapFunc): Iterator
    tee(forks: number): Iterator[]
    firstMatch(pred: Predicate): any | null
    anyMatch(pred: Predicate): boolean
    allMatch(pred: Predicate): boolean
    max(compare: GLib.CompareDataFunc): any | null
    min(compare: GLib.CompareDataFunc): any | null
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

export class Traversable {

    // Own properties of Gee-0.8.Gee.Traversable

    static name: string

    // Constructors of Gee-0.8.Gee.Traversable

    constructor(config?: Traversable.ConstructorProperties) 
    _init(config?: Traversable.ConstructorProperties): void
}

export module AbstractBidirList {

    // Constructor properties interface

    export interface ConstructorProperties extends BidirList.ConstructorProperties, AbstractList.ConstructorProperties {

        // Own constructor properties of Gee-0.8.Gee.AbstractBidirList

        gType?: GObject.GType | null
        gDupFunc?: GObject.BoxedCopyFunc | null
        gDestroyFunc?: GLib.DestroyNotify | null
    }

}

export interface AbstractBidirList extends BidirList {

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
    get(index: number): any | null

    // Overloads of get

    get(index: number): any | null
    get(index: number): any | null
    set(index: number, item: any | null): void

    // Overloads of set

    set(index: number, item: any | null): void
    set(index: number, item: any | null): void
    indexOf(item: any | null): number

    // Overloads of indexOf

    indexOf(item: any | null): number
    indexOf(item: any | null): number
    insert(index: number, item: any | null): void

    // Overloads of insert

    insert(index: number, item: any | null): void
    insert(index: number, item: any | null): void
    removeAt(index: number): any | null

    // Overloads of removeAt

    removeAt(index: number): any | null
    removeAt(index: number): any | null
    slice(start: number, stop: number): List | null

    // Overloads of slice

    slice(start: number, stop: number): List | null
    slice(start: number, stop: number): List | null
    contains(item: any | null): boolean

    // Overloads of contains

    contains(item: any | null): boolean
    contains(item: any | null): boolean
    add(item: any | null): boolean

    // Overloads of add

    add(item: any | null): boolean
    add(item: any | null): boolean
    remove(item: any | null): boolean

    // Overloads of remove

    remove(item: any | null): boolean
    remove(item: any | null): boolean
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

export class AbstractBidirList extends AbstractList {

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

export module AbstractBidirSortedSet {

    // Constructor properties interface

    export interface ConstructorProperties extends BidirSortedSet.ConstructorProperties, AbstractSortedSet.ConstructorProperties {

        // Own constructor properties of Gee-0.8.Gee.AbstractBidirSortedSet

        gType?: GObject.GType | null
        gDupFunc?: GObject.BoxedCopyFunc | null
        gDestroyFunc?: GLib.DestroyNotify | null
    }

}

export interface AbstractBidirSortedSet extends BidirSortedSet {

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

    first(): any | null

    // Overloads of first

    first(): any | null
    first(): any | null
    last(): any | null

    // Overloads of last

    last(): any | null
    last(): any | null
    iteratorAt(element: any | null): Iterator | null

    // Overloads of iteratorAt

    iteratorAt(element: any | null): Iterator | null
    iteratorAt(element: any | null): Iterator | null
    lower(element: any | null): any | null

    // Overloads of lower

    lower(element: any | null): any | null
    lower(element: any | null): any | null
    higher(element: any | null): any | null

    // Overloads of higher

    higher(element: any | null): any | null
    higher(element: any | null): any | null
    floor(element: any | null): any | null

    // Overloads of floor

    floor(element: any | null): any | null
    floor(element: any | null): any | null
    ceil(element: any | null): any | null

    // Overloads of ceil

    ceil(element: any | null): any | null
    ceil(element: any | null): any | null
    headSet(before: any | null): SortedSet

    // Overloads of headSet

    headSet(before: any | null): SortedSet
    headSet(before: any | null): SortedSet
    tailSet(after: any | null): SortedSet

    // Overloads of tailSet

    tailSet(after: any | null): SortedSet
    tailSet(after: any | null): SortedSet
    subSet(from: any | null, to: any | null): SortedSet

    // Overloads of subSet

    subSet(from: any | null, to: any | null): SortedSet
    subSet(from: any | null, to: any | null): SortedSet
    contains(item: any | null): boolean

    // Overloads of contains

    contains(item: any | null): boolean
    contains(item: any | null): boolean
    add(item: any | null): boolean

    // Overloads of add

    add(item: any | null): boolean
    add(item: any | null): boolean
    remove(item: any | null): boolean

    // Overloads of remove

    remove(item: any | null): boolean
    remove(item: any | null): boolean
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

export class AbstractBidirSortedSet extends AbstractSortedSet {

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

export module AbstractBidirSortedMap {

    // Constructor properties interface

    export interface ConstructorProperties extends BidirSortedMap.ConstructorProperties, AbstractSortedMap.ConstructorProperties {

        // Own constructor properties of Gee-0.8.Gee.AbstractBidirSortedMap

        kType?: GObject.GType | null
        kDupFunc?: GObject.BoxedCopyFunc | null
        kDestroyFunc?: GLib.DestroyNotify | null
        vType?: GObject.GType | null
        vDupFunc?: GObject.BoxedCopyFunc | null
        vDestroyFunc?: GLib.DestroyNotify | null
    }

}

export interface AbstractBidirSortedMap extends BidirSortedMap {

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

    headMap(before: any | null): SortedMap

    // Overloads of headMap

    headMap(before: any | null): SortedMap
    headMap(before: any | null): SortedMap
    tailMap(after: any | null): SortedMap

    // Overloads of tailMap

    tailMap(after: any | null): SortedMap
    tailMap(after: any | null): SortedMap
    subMap(before: any | null, after: any | null): SortedMap

    // Overloads of subMap

    subMap(before: any | null, after: any | null): SortedMap
    subMap(before: any | null, after: any | null): SortedMap
    getAscendingKeys(): SortedSet

    // Overloads of getAscendingKeys

    getAscendingKeys(): SortedSet
    getAscendingKeys(): SortedSet
    getAscendingEntries(): SortedSet

    // Overloads of getAscendingEntries

    getAscendingEntries(): SortedSet
    getAscendingEntries(): SortedSet
    hasKey(key: any | null): boolean

    // Overloads of hasKey

    hasKey(key: any | null): boolean
    hasKey(key: any | null): boolean
    has(key: any | null, value: any | null): boolean

    // Overloads of has

    has(key: any | null, value: any | null): boolean
    has(key: any | null, value: any | null): boolean
    get(key: any | null): any | null

    // Overloads of get

    get(key: any | null): any | null
    get(key: any | null): any | null
    set(key: any | null, value: any | null): void

    // Overloads of set

    set(key: any | null, value: any | null): void
    set(key: any | null, value: any | null): void
    unset(key: any | null): [ /* returnType */ boolean, /* value */ any ]

    // Overloads of unset

    unset(key: any | null): [ /* returnType */ boolean, /* value */ any ]
    unset(key: any | null): [ /* returnType */ boolean, /* value */ any ]
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

export class AbstractBidirSortedMap extends AbstractSortedMap {

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

export module AbstractCollection {

    // Constructor properties interface

    export interface ConstructorProperties extends Traversable.ConstructorProperties, Iterable.ConstructorProperties, Collection.ConstructorProperties, GObject.Object.ConstructorProperties {

        // Own constructor properties of Gee-0.8.Gee.AbstractCollection

        gType?: GObject.GType | null
        gDupFunc?: GObject.BoxedCopyFunc | null
        gDestroyFunc?: GLib.DestroyNotify | null
    }

}

export interface AbstractCollection extends Traversable, Iterable, Collection {

    // Own properties of Gee-0.8.Gee.AbstractCollection

    readonly gType: GObject.GType
    readonly gDupFunc: GObject.BoxedCopyFunc
    readonly gDestroyFunc: GLib.DestroyNotify
    readonly size: number
    readonly readOnly: boolean
    readonly readOnlyView: Collection
    __gtype__: number

    // Owm methods of Gee-0.8.Gee.AbstractCollection

    // Has conflict: contains(item: any | null): boolean
    // Has conflict: add(item: any | null): boolean
    // Has conflict: remove(item: any | null): boolean
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

    contains(item: any | null): boolean

    // Overloads of contains

    contains(item: any | null): boolean
    add(item: any | null): boolean

    // Overloads of add

    add(item: any | null): boolean
    remove(item: any | null): boolean

    // Overloads of remove

    remove(item: any | null): boolean
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

export class AbstractCollection extends GObject.Object {

    // Own properties of Gee-0.8.Gee.AbstractCollection

    static name: string

    // Constructors of Gee-0.8.Gee.AbstractCollection

    constructor(config?: AbstractCollection.ConstructorProperties) 
    _init(config?: AbstractCollection.ConstructorProperties): void
}

export module AbstractList {

    // Constructor properties interface

    export interface ConstructorProperties extends List.ConstructorProperties, AbstractCollection.ConstructorProperties {

        // Own constructor properties of Gee-0.8.Gee.AbstractList

        gType?: GObject.GType | null
        gDupFunc?: GObject.BoxedCopyFunc | null
        gDestroyFunc?: GLib.DestroyNotify | null
    }

}

export interface AbstractList extends List {

    // Own properties of Gee-0.8.Gee.AbstractList

    readonly gType: GObject.GType
    readonly gDupFunc: GObject.BoxedCopyFunc
    readonly gDestroyFunc: GLib.DestroyNotify
    readonly readOnlyView: any
    __gtype__: number

    // Owm methods of Gee-0.8.Gee.AbstractList

    // Has conflict: listIterator(): ListIterator
    // Has conflict: get(index: number): any | null
    // Has conflict: set(index: number, item: any | null): void
    // Has conflict: indexOf(item: any | null): number
    // Has conflict: insert(index: number, item: any | null): void
    // Has conflict: removeAt(index: number): any | null
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

    contains(item: any | null): boolean

    // Overloads of contains

    contains(item: any | null): boolean
    contains(item: any | null): boolean
    add(item: any | null): boolean

    // Overloads of add

    add(item: any | null): boolean
    add(item: any | null): boolean
    remove(item: any | null): boolean

    // Overloads of remove

    remove(item: any | null): boolean
    remove(item: any | null): boolean
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
    get(index: number): any | null

    // Overloads of get

    get(index: number): any | null
    set(index: number, item: any | null): void

    // Overloads of set

    set(index: number, item: any | null): void
    indexOf(item: any | null): number

    // Overloads of indexOf

    indexOf(item: any | null): number
    insert(index: number, item: any | null): void

    // Overloads of insert

    insert(index: number, item: any | null): void
    removeAt(index: number): any | null

    // Overloads of removeAt

    removeAt(index: number): any | null
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

export class AbstractList extends AbstractCollection {

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

export module AbstractMap {

    // Constructor properties interface

    export interface ConstructorProperties extends Traversable.ConstructorProperties, Iterable.ConstructorProperties, Map.ConstructorProperties, GObject.Object.ConstructorProperties {

        // Own constructor properties of Gee-0.8.Gee.AbstractMap

        kType?: GObject.GType | null
        kDupFunc?: GObject.BoxedCopyFunc | null
        kDestroyFunc?: GLib.DestroyNotify | null
        vType?: GObject.GType | null
        vDupFunc?: GObject.BoxedCopyFunc | null
        vDestroyFunc?: GLib.DestroyNotify | null
    }

}

export interface AbstractMap extends Traversable, Iterable, Map {

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

    // Has conflict: hasKey(key: any | null): boolean
    // Has conflict: has(key: any | null, value: any | null): boolean
    // Has conflict: get(key: any | null): any | null
    // Has conflict: set(key: any | null, value: any | null): void
    // Has conflict: unset(key: any | null): [ /* returnType */ boolean, /* value */ any ]
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

    hasKey(key: any | null): boolean

    // Overloads of hasKey

    hasKey(key: any | null): boolean
    has(key: any | null, value: any | null): boolean

    // Overloads of has

    has(key: any | null, value: any | null): boolean
    get(key: any | null): any | null

    // Overloads of get

    get(key: any | null): any | null
    set(key: any | null, value: any | null): void

    // Overloads of set

    set(key: any | null, value: any | null): void
    unset(key: any | null): [ /* returnType */ boolean, /* value */ any ]

    // Overloads of unset

    unset(key: any | null): [ /* returnType */ boolean, /* value */ any ]
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

export class AbstractMap extends GObject.Object {

    // Own properties of Gee-0.8.Gee.AbstractMap

    static name: string

    // Constructors of Gee-0.8.Gee.AbstractMap

    constructor(config?: AbstractMap.ConstructorProperties) 
    _init(config?: AbstractMap.ConstructorProperties): void
}

export module AbstractMultiMap {

    // Constructor properties interface

    export interface ConstructorProperties extends MultiMap.ConstructorProperties, GObject.Object.ConstructorProperties {

        // Own constructor properties of Gee-0.8.Gee.AbstractMultiMap

        kType?: GObject.GType | null
        kDupFunc?: GObject.BoxedCopyFunc | null
        kDestroyFunc?: GLib.DestroyNotify | null
        vType?: GObject.GType | null
        vDupFunc?: GObject.BoxedCopyFunc | null
        vDestroyFunc?: GLib.DestroyNotify | null
    }

}

export interface AbstractMultiMap extends MultiMap {

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

export class AbstractMultiMap extends GObject.Object {

    // Own properties of Gee-0.8.Gee.AbstractMultiMap

    static name: string

    // Constructors of Gee-0.8.Gee.AbstractMultiMap

    constructor(config?: AbstractMultiMap.ConstructorProperties) 
    _init(config?: AbstractMultiMap.ConstructorProperties): void
}

export module AbstractMultiSet {

    // Constructor properties interface

    export interface ConstructorProperties extends MultiSet.ConstructorProperties, AbstractCollection.ConstructorProperties {

        // Own constructor properties of Gee-0.8.Gee.AbstractMultiSet

        gType?: GObject.GType | null
        gDupFunc?: GObject.BoxedCopyFunc | null
        gDestroyFunc?: GLib.DestroyNotify | null
    }

}

export interface AbstractMultiSet extends MultiSet {

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

    contains(item: any | null): boolean

    // Overloads of contains

    contains(item: any | null): boolean
    contains(item: any | null): boolean
    add(item: any | null): boolean

    // Overloads of add

    add(item: any | null): boolean
    add(item: any | null): boolean
    remove(item: any | null): boolean

    // Overloads of remove

    remove(item: any | null): boolean
    remove(item: any | null): boolean
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

export class AbstractMultiSet extends AbstractCollection {

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

export module AbstractQueue {

    // Constructor properties interface

    export interface ConstructorProperties extends Queue.ConstructorProperties, AbstractCollection.ConstructorProperties {

        // Own constructor properties of Gee-0.8.Gee.AbstractQueue

        gType?: GObject.GType | null
        gDupFunc?: GObject.BoxedCopyFunc | null
        gDestroyFunc?: GLib.DestroyNotify | null
    }

}

export interface AbstractQueue extends Queue {

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

    contains(item: any | null): boolean

    // Overloads of contains

    contains(item: any | null): boolean
    contains(item: any | null): boolean
    add(item: any | null): boolean

    // Overloads of add

    add(item: any | null): boolean
    add(item: any | null): boolean
    remove(item: any | null): boolean

    // Overloads of remove

    remove(item: any | null): boolean
    remove(item: any | null): boolean
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

export class AbstractQueue extends AbstractCollection {

    // Own properties of Gee-0.8.Gee.AbstractQueue

    static name: string

    // Constructors of Gee-0.8.Gee.AbstractQueue

    constructor(config?: AbstractQueue.ConstructorProperties) 
    _init(config?: AbstractQueue.ConstructorProperties): void
}

export module AbstractSet {

    // Constructor properties interface

    export interface ConstructorProperties extends Set.ConstructorProperties, AbstractCollection.ConstructorProperties {

        // Own constructor properties of Gee-0.8.Gee.AbstractSet

        gType?: GObject.GType | null
        gDupFunc?: GObject.BoxedCopyFunc | null
        gDestroyFunc?: GLib.DestroyNotify | null
    }

}

export interface AbstractSet extends Set {

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

    contains(item: any | null): boolean

    // Overloads of contains

    contains(item: any | null): boolean
    contains(item: any | null): boolean
    add(item: any | null): boolean

    // Overloads of add

    add(item: any | null): boolean
    add(item: any | null): boolean
    remove(item: any | null): boolean

    // Overloads of remove

    remove(item: any | null): boolean
    remove(item: any | null): boolean
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

export class AbstractSet extends AbstractCollection {

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

export module AbstractSortedMap {

    // Constructor properties interface

    export interface ConstructorProperties extends SortedMap.ConstructorProperties, AbstractMap.ConstructorProperties {

        // Own constructor properties of Gee-0.8.Gee.AbstractSortedMap

        kType?: GObject.GType | null
        kDupFunc?: GObject.BoxedCopyFunc | null
        kDestroyFunc?: GLib.DestroyNotify | null
        vType?: GObject.GType | null
        vDupFunc?: GObject.BoxedCopyFunc | null
        vDestroyFunc?: GLib.DestroyNotify | null
    }

}

export interface AbstractSortedMap extends SortedMap {

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

    // Has conflict: headMap(before: any | null): SortedMap
    // Has conflict: tailMap(after: any | null): SortedMap
    // Has conflict: subMap(before: any | null, after: any | null): SortedMap
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
    hasKey(key: any | null): boolean

    // Overloads of hasKey

    hasKey(key: any | null): boolean
    hasKey(key: any | null): boolean
    has(key: any | null, value: any | null): boolean

    // Overloads of has

    has(key: any | null, value: any | null): boolean
    has(key: any | null, value: any | null): boolean
    get(key: any | null): any | null

    // Overloads of get

    get(key: any | null): any | null
    get(key: any | null): any | null
    set(key: any | null, value: any | null): void

    // Overloads of set

    set(key: any | null, value: any | null): void
    set(key: any | null, value: any | null): void
    unset(key: any | null): [ /* returnType */ boolean, /* value */ any ]

    // Overloads of unset

    unset(key: any | null): [ /* returnType */ boolean, /* value */ any ]
    unset(key: any | null): [ /* returnType */ boolean, /* value */ any ]
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

    headMap(before: any | null): SortedMap

    // Overloads of headMap

    headMap(before: any | null): SortedMap
    tailMap(after: any | null): SortedMap

    // Overloads of tailMap

    tailMap(after: any | null): SortedMap
    subMap(before: any | null, after: any | null): SortedMap

    // Overloads of subMap

    subMap(before: any | null, after: any | null): SortedMap
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

export class AbstractSortedMap extends AbstractMap {

    // Own properties of Gee-0.8.Gee.AbstractSortedMap

    static name: string

    // Constructors of Gee-0.8.Gee.AbstractSortedMap

    constructor(config?: AbstractSortedMap.ConstructorProperties) 
    _init(config?: AbstractSortedMap.ConstructorProperties): void
}

export module AbstractSortedSet {

    // Constructor properties interface

    export interface ConstructorProperties extends SortedSet.ConstructorProperties, AbstractSet.ConstructorProperties {

        // Own constructor properties of Gee-0.8.Gee.AbstractSortedSet

        gType?: GObject.GType | null
        gDupFunc?: GObject.BoxedCopyFunc | null
        gDestroyFunc?: GLib.DestroyNotify | null
    }

}

export interface AbstractSortedSet extends SortedSet {

    // Own properties of Gee-0.8.Gee.AbstractSortedSet

    readonly gType: GObject.GType
    readonly gDupFunc: GObject.BoxedCopyFunc
    readonly gDestroyFunc: GLib.DestroyNotify
    readonly readOnlyView: any
    __gtype__: number

    // Owm methods of Gee-0.8.Gee.AbstractSortedSet

    // Has conflict: first(): any | null
    // Has conflict: last(): any | null
    // Has conflict: iteratorAt(element: any | null): Iterator | null
    // Has conflict: lower(element: any | null): any | null
    // Has conflict: higher(element: any | null): any | null
    // Has conflict: floor(element: any | null): any | null
    // Has conflict: ceil(element: any | null): any | null
    // Has conflict: headSet(before: any | null): SortedSet
    // Has conflict: tailSet(after: any | null): SortedSet
    // Has conflict: subSet(from: any | null, to: any | null): SortedSet
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

    contains(item: any | null): boolean

    // Overloads of contains

    contains(item: any | null): boolean
    contains(item: any | null): boolean
    add(item: any | null): boolean

    // Overloads of add

    add(item: any | null): boolean
    add(item: any | null): boolean
    remove(item: any | null): boolean

    // Overloads of remove

    remove(item: any | null): boolean
    remove(item: any | null): boolean
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

    first(): any | null

    // Overloads of first

    first(): any | null
    last(): any | null

    // Overloads of last

    last(): any | null
    iteratorAt(element: any | null): Iterator | null

    // Overloads of iteratorAt

    iteratorAt(element: any | null): Iterator | null
    lower(element: any | null): any | null

    // Overloads of lower

    lower(element: any | null): any | null
    higher(element: any | null): any | null

    // Overloads of higher

    higher(element: any | null): any | null
    floor(element: any | null): any | null

    // Overloads of floor

    floor(element: any | null): any | null
    ceil(element: any | null): any | null

    // Overloads of ceil

    ceil(element: any | null): any | null
    headSet(before: any | null): SortedSet

    // Overloads of headSet

    headSet(before: any | null): SortedSet
    tailSet(after: any | null): SortedSet

    // Overloads of tailSet

    tailSet(after: any | null): SortedSet
    subSet(from: any | null, to: any | null): SortedSet

    // Overloads of subSet

    subSet(from: any | null, to: any | null): SortedSet
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

export class AbstractSortedSet extends AbstractSet {

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

export module ArrayList {

    // Constructor properties interface

    export interface ConstructorProperties extends AbstractBidirList.ConstructorProperties {

        // Own constructor properties of Gee-0.8.Gee.ArrayList

        gType?: GObject.GType | null
        gDupFunc?: GObject.BoxedCopyFunc | null
        gDestroyFunc?: GLib.DestroyNotify | null
    }

}

export interface ArrayList {

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
    get(index: number): any | null

    // Overloads of get

    get(index: number): any | null
    get(index: number): any | null
    set(index: number, item: any | null): void

    // Overloads of set

    set(index: number, item: any | null): void
    set(index: number, item: any | null): void
    indexOf(item: any | null): number

    // Overloads of indexOf

    indexOf(item: any | null): number
    indexOf(item: any | null): number
    insert(index: number, item: any | null): void

    // Overloads of insert

    insert(index: number, item: any | null): void
    insert(index: number, item: any | null): void
    removeAt(index: number): any | null

    // Overloads of removeAt

    removeAt(index: number): any | null
    removeAt(index: number): any | null
    slice(start: number, stop: number): List | null

    // Overloads of slice

    slice(start: number, stop: number): List | null
    slice(start: number, stop: number): List | null
    contains(item: any | null): boolean

    // Overloads of contains

    contains(item: any | null): boolean
    contains(item: any | null): boolean
    add(item: any | null): boolean

    // Overloads of add

    add(item: any | null): boolean
    add(item: any | null): boolean
    remove(item: any | null): boolean

    // Overloads of remove

    remove(item: any | null): boolean
    remove(item: any | null): boolean
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

export class ArrayList extends AbstractBidirList {

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

export module ArrayQueue {

    // Constructor properties interface

    export interface ConstructorProperties extends Deque.ConstructorProperties, AbstractQueue.ConstructorProperties {

        // Own constructor properties of Gee-0.8.Gee.ArrayQueue

        gType?: GObject.GType | null
        gDupFunc?: GObject.BoxedCopyFunc | null
        gDestroyFunc?: GLib.DestroyNotify | null
    }

}

export interface ArrayQueue extends Deque {

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
    contains(item: any | null): boolean

    // Overloads of contains

    contains(item: any | null): boolean
    contains(item: any | null): boolean
    add(item: any | null): boolean

    // Overloads of add

    add(item: any | null): boolean
    add(item: any | null): boolean
    remove(item: any | null): boolean

    // Overloads of remove

    remove(item: any | null): boolean
    remove(item: any | null): boolean
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

export class ArrayQueue extends AbstractQueue {

    // Own properties of Gee-0.8.Gee.ArrayQueue

    static name: string

    // Constructors of Gee-0.8.Gee.ArrayQueue

    constructor(config?: ArrayQueue.ConstructorProperties) 
    constructor(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, equalFunc: EqualDataFunc | null) 
    static new(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, equalFunc: EqualDataFunc | null): ArrayQueue
    _init(config?: ArrayQueue.ConstructorProperties): void
}

export module ConcurrentList {

    // Constructor properties interface

    export interface ConstructorProperties extends AbstractList.ConstructorProperties {

        // Own constructor properties of Gee-0.8.Gee.ConcurrentList

        gType?: GObject.GType | null
        gDupFunc?: GObject.BoxedCopyFunc | null
        gDestroyFunc?: GLib.DestroyNotify | null
    }

}

export interface ConcurrentList {

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
    get(index: number): any | null

    // Overloads of get

    get(index: number): any | null
    get(index: number): any | null
    set(index: number, item: any | null): void

    // Overloads of set

    set(index: number, item: any | null): void
    set(index: number, item: any | null): void
    indexOf(item: any | null): number

    // Overloads of indexOf

    indexOf(item: any | null): number
    indexOf(item: any | null): number
    insert(index: number, item: any | null): void

    // Overloads of insert

    insert(index: number, item: any | null): void
    insert(index: number, item: any | null): void
    removeAt(index: number): any | null

    // Overloads of removeAt

    removeAt(index: number): any | null
    removeAt(index: number): any | null
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
    contains(item: any | null): boolean

    // Overloads of contains

    contains(item: any | null): boolean
    contains(item: any | null): boolean
    add(item: any | null): boolean

    // Overloads of add

    add(item: any | null): boolean
    add(item: any | null): boolean
    remove(item: any | null): boolean

    // Overloads of remove

    remove(item: any | null): boolean
    remove(item: any | null): boolean
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

export class ConcurrentList extends AbstractList {

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

export module ConcurrentSet {

    // Constructor properties interface

    export interface ConstructorProperties extends AbstractSortedSet.ConstructorProperties {

        // Own constructor properties of Gee-0.8.Gee.ConcurrentSet

        gType?: GObject.GType | null
        gDupFunc?: GObject.BoxedCopyFunc | null
        gDestroyFunc?: GLib.DestroyNotify | null
    }

}

export interface ConcurrentSet {

    // Own properties of Gee-0.8.Gee.ConcurrentSet

    readonly gType: GObject.GType
    readonly gDupFunc: GObject.BoxedCopyFunc
    readonly gDestroyFunc: GLib.DestroyNotify
    __gtype__: number

    // Conflicting properties

    readOnlyView: any

    // Conflicting methods

    first(): any | null

    // Overloads of first

    first(): any | null
    first(): any | null
    last(): any | null

    // Overloads of last

    last(): any | null
    last(): any | null
    iteratorAt(element: any | null): Iterator | null

    // Overloads of iteratorAt

    iteratorAt(element: any | null): Iterator | null
    iteratorAt(element: any | null): Iterator | null
    lower(element: any | null): any | null

    // Overloads of lower

    lower(element: any | null): any | null
    lower(element: any | null): any | null
    higher(element: any | null): any | null

    // Overloads of higher

    higher(element: any | null): any | null
    higher(element: any | null): any | null
    floor(element: any | null): any | null

    // Overloads of floor

    floor(element: any | null): any | null
    floor(element: any | null): any | null
    ceil(element: any | null): any | null

    // Overloads of ceil

    ceil(element: any | null): any | null
    ceil(element: any | null): any | null
    headSet(before: any | null): SortedSet

    // Overloads of headSet

    headSet(before: any | null): SortedSet
    headSet(before: any | null): SortedSet
    tailSet(after: any | null): SortedSet

    // Overloads of tailSet

    tailSet(after: any | null): SortedSet
    tailSet(after: any | null): SortedSet
    subSet(from: any | null, to: any | null): SortedSet

    // Overloads of subSet

    subSet(from: any | null, to: any | null): SortedSet
    subSet(from: any | null, to: any | null): SortedSet
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
    contains(item: any | null): boolean

    // Overloads of contains

    contains(item: any | null): boolean
    contains(item: any | null): boolean
    add(item: any | null): boolean

    // Overloads of add

    add(item: any | null): boolean
    add(item: any | null): boolean
    remove(item: any | null): boolean

    // Overloads of remove

    remove(item: any | null): boolean
    remove(item: any | null): boolean
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

export class ConcurrentSet extends AbstractSortedSet {

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

export module HashMap {

    // Constructor properties interface

    export interface ConstructorProperties extends AbstractMap.ConstructorProperties {

        // Own constructor properties of Gee-0.8.Gee.HashMap

        kType?: GObject.GType | null
        kDupFunc?: GObject.BoxedCopyFunc | null
        kDestroyFunc?: GLib.DestroyNotify | null
        vType?: GObject.GType | null
        vDupFunc?: GObject.BoxedCopyFunc | null
        vDestroyFunc?: GLib.DestroyNotify | null
    }

}

export interface HashMap {

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

    hasKey(key: any | null): boolean

    // Overloads of hasKey

    hasKey(key: any | null): boolean
    hasKey(key: any | null): boolean
    has(key: any | null, value: any | null): boolean

    // Overloads of has

    has(key: any | null, value: any | null): boolean
    has(key: any | null, value: any | null): boolean
    get(key: any | null): any | null

    // Overloads of get

    get(key: any | null): any | null
    get(key: any | null): any | null
    set(key: any | null, value: any | null): void

    // Overloads of set

    set(key: any | null, value: any | null): void
    set(key: any | null, value: any | null): void
    unset(key: any | null): [ /* returnType */ boolean, /* value */ any ]

    // Overloads of unset

    unset(key: any | null): [ /* returnType */ boolean, /* value */ any ]
    unset(key: any | null): [ /* returnType */ boolean, /* value */ any ]
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

export class HashMap extends AbstractMap {

    // Own properties of Gee-0.8.Gee.HashMap

    static name: string

    // Constructors of Gee-0.8.Gee.HashMap

    constructor(config?: HashMap.ConstructorProperties) 
    constructor(kType: GObject.GType, kDupFunc: GObject.BoxedCopyFunc, kDestroyFunc: GLib.DestroyNotify, vType: GObject.GType, vDupFunc: GObject.BoxedCopyFunc, vDestroyFunc: GLib.DestroyNotify, keyHashFunc: HashDataFunc | null, keyEqualFunc: EqualDataFunc | null, valueEqualFunc: EqualDataFunc | null) 
    static new(kType: GObject.GType, kDupFunc: GObject.BoxedCopyFunc, kDestroyFunc: GLib.DestroyNotify, vType: GObject.GType, vDupFunc: GObject.BoxedCopyFunc, vDestroyFunc: GLib.DestroyNotify, keyHashFunc: HashDataFunc | null, keyEqualFunc: EqualDataFunc | null, valueEqualFunc: EqualDataFunc | null): HashMap
    _init(config?: HashMap.ConstructorProperties): void
}

export module HashMultiMap {

    // Constructor properties interface

    export interface ConstructorProperties extends AbstractMultiMap.ConstructorProperties {

        // Own constructor properties of Gee-0.8.Gee.HashMultiMap

        kType?: GObject.GType | null
        kDupFunc?: GObject.BoxedCopyFunc | null
        kDestroyFunc?: GLib.DestroyNotify | null
        vType?: GObject.GType | null
        vDupFunc?: GObject.BoxedCopyFunc | null
        vDestroyFunc?: GLib.DestroyNotify | null
    }

}

export interface HashMultiMap {

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

export class HashMultiMap extends AbstractMultiMap {

    // Own properties of Gee-0.8.Gee.HashMultiMap

    static name: string

    // Constructors of Gee-0.8.Gee.HashMultiMap

    constructor(config?: HashMultiMap.ConstructorProperties) 
    constructor(kType: GObject.GType, kDupFunc: GObject.BoxedCopyFunc, kDestroyFunc: GLib.DestroyNotify, vType: GObject.GType, vDupFunc: GObject.BoxedCopyFunc, vDestroyFunc: GLib.DestroyNotify, keyHashFunc: HashDataFunc | null, keyEqualFunc: EqualDataFunc | null, valueHashFunc: HashDataFunc | null, valueEqualFunc: EqualDataFunc | null) 
    static new(kType: GObject.GType, kDupFunc: GObject.BoxedCopyFunc, kDestroyFunc: GLib.DestroyNotify, vType: GObject.GType, vDupFunc: GObject.BoxedCopyFunc, vDestroyFunc: GLib.DestroyNotify, keyHashFunc: HashDataFunc | null, keyEqualFunc: EqualDataFunc | null, valueHashFunc: HashDataFunc | null, valueEqualFunc: EqualDataFunc | null): HashMultiMap
    _init(config?: HashMultiMap.ConstructorProperties): void
}

export module HashMultiSet {

    // Constructor properties interface

    export interface ConstructorProperties extends AbstractMultiSet.ConstructorProperties {

        // Own constructor properties of Gee-0.8.Gee.HashMultiSet

        gType?: GObject.GType | null
        gDupFunc?: GObject.BoxedCopyFunc | null
        gDestroyFunc?: GLib.DestroyNotify | null
    }

}

export interface HashMultiSet {

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
    contains(item: any | null): boolean

    // Overloads of contains

    contains(item: any | null): boolean
    contains(item: any | null): boolean
    add(item: any | null): boolean

    // Overloads of add

    add(item: any | null): boolean
    add(item: any | null): boolean
    remove(item: any | null): boolean

    // Overloads of remove

    remove(item: any | null): boolean
    remove(item: any | null): boolean
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

export class HashMultiSet extends AbstractMultiSet {

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

export module HashSet {

    // Constructor properties interface

    export interface ConstructorProperties extends AbstractSet.ConstructorProperties {

        // Own constructor properties of Gee-0.8.Gee.HashSet

        gType?: GObject.GType | null
        gDupFunc?: GObject.BoxedCopyFunc | null
        gDestroyFunc?: GLib.DestroyNotify | null
    }

}

export interface HashSet {

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
    contains(item: any | null): boolean

    // Overloads of contains

    contains(item: any | null): boolean
    contains(item: any | null): boolean
    add(item: any | null): boolean

    // Overloads of add

    add(item: any | null): boolean
    add(item: any | null): boolean
    remove(item: any | null): boolean

    // Overloads of remove

    remove(item: any | null): boolean
    remove(item: any | null): boolean
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

export class HashSet extends AbstractSet {

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

export interface Lazy {

    // Own fields of Gee-0.8.Gee.Lazy

    refCount: number

    // Owm methods of Gee-0.8.Gee.Lazy

    eval(): void
    get(): any | null
    getValue(): any | null
    getFuture(): Future | null
}

export class Lazy {

    // Own properties of Gee-0.8.Gee.Lazy

    static name: string

    // Constructors of Gee-0.8.Gee.Lazy

    constructor(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, func: LazyFunc) 
    static new(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, func: LazyFunc): Lazy
    static fromValue(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, item: any | null): Lazy
}

export module LinkedList {

    // Constructor properties interface

    export interface ConstructorProperties extends Queue.ConstructorProperties, Deque.ConstructorProperties, AbstractBidirList.ConstructorProperties {

        // Own constructor properties of Gee-0.8.Gee.LinkedList

        gType?: GObject.GType | null
        gDupFunc?: GObject.BoxedCopyFunc | null
        gDestroyFunc?: GLib.DestroyNotify | null
    }

}

export interface LinkedList extends Queue, Deque {

    // Own properties of Gee-0.8.Gee.LinkedList

    readonly gType: GObject.GType
    readonly gDupFunc: GObject.BoxedCopyFunc
    readonly gDestroyFunc: GLib.DestroyNotify
    __gtype__: number

    // Conflicting properties

    readOnlyView: any

    // Owm methods of Gee-0.8.Gee.LinkedList

    first(): any | null

    // Overloads of first

    first(): any | null
    last(): any | null

    // Overloads of last

    last(): any | null
    getEqualFunc(): [ /* returnType */ EqualDataFunc, /* resultTarget */ any ]

    // Conflicting methods

    contains(item: any | null): boolean
    contains(item: any | null): boolean

    // Overloads of contains

    contains(item: any | null): boolean
    add(item: any | null): boolean
    add(item: any | null): boolean

    // Overloads of add

    add(item: any | null): boolean
    remove(item: any | null): boolean
    remove(item: any | null): boolean

    // Overloads of remove

    remove(item: any | null): boolean
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
    get(index: number): any | null

    // Overloads of get

    get(index: number): any | null
    get(index: number): any | null
    set(index: number, item: any | null): void

    // Overloads of set

    set(index: number, item: any | null): void
    set(index: number, item: any | null): void
    indexOf(item: any | null): number

    // Overloads of indexOf

    indexOf(item: any | null): number
    indexOf(item: any | null): number
    insert(index: number, item: any | null): void

    // Overloads of insert

    insert(index: number, item: any | null): void
    insert(index: number, item: any | null): void
    removeAt(index: number): any | null

    // Overloads of removeAt

    removeAt(index: number): any | null
    removeAt(index: number): any | null
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

export class LinkedList extends AbstractBidirList {

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

export module PriorityQueue {

    // Constructor properties interface

    export interface ConstructorProperties extends AbstractQueue.ConstructorProperties {

        // Own constructor properties of Gee-0.8.Gee.PriorityQueue

        gType?: GObject.GType | null
        gDupFunc?: GObject.BoxedCopyFunc | null
        gDestroyFunc?: GLib.DestroyNotify | null
    }

}

export interface PriorityQueue {

    // Own properties of Gee-0.8.Gee.PriorityQueue

    readonly gType: GObject.GType
    readonly gDupFunc: GObject.BoxedCopyFunc
    readonly gDestroyFunc: GLib.DestroyNotify
    __gtype__: number

    // Owm methods of Gee-0.8.Gee.PriorityQueue

    offer(element: any | null): boolean

    // Overloads of offer

    offer(element: any | null): boolean
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
    contains(item: any | null): boolean

    // Overloads of contains

    contains(item: any | null): boolean
    contains(item: any | null): boolean
    add(item: any | null): boolean

    // Overloads of add

    add(item: any | null): boolean
    add(item: any | null): boolean
    remove(item: any | null): boolean

    // Overloads of remove

    remove(item: any | null): boolean
    remove(item: any | null): boolean
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

export class PriorityQueue extends AbstractQueue {

    // Own properties of Gee-0.8.Gee.PriorityQueue

    static name: string

    // Constructors of Gee-0.8.Gee.PriorityQueue

    constructor(config?: PriorityQueue.ConstructorProperties) 
    constructor(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, compareFunc: GLib.CompareDataFunc | null) 
    static new(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, compareFunc: GLib.CompareDataFunc | null): PriorityQueue
    _init(config?: PriorityQueue.ConstructorProperties): void
}

export interface Promise {

    // Own fields of Gee-0.8.Gee.Promise

    refCount: number

    // Owm methods of Gee-0.8.Gee.Promise

    setValue(value: any | null): void
    setException(exception: GLib.Error): void
    getFuture(): Future
}

export class Promise {

    // Own properties of Gee-0.8.Gee.Promise

    static name: string

    // Constructors of Gee-0.8.Gee.Promise

    constructor(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify) 
    static new(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify): Promise
}

export module TreeMap {

    // Constructor properties interface

    export interface ConstructorProperties extends AbstractBidirSortedMap.ConstructorProperties {

        // Own constructor properties of Gee-0.8.Gee.TreeMap

        kType?: GObject.GType | null
        kDupFunc?: GObject.BoxedCopyFunc | null
        kDestroyFunc?: GLib.DestroyNotify | null
        vType?: GObject.GType | null
        vDupFunc?: GObject.BoxedCopyFunc | null
        vDestroyFunc?: GLib.DestroyNotify | null
    }

}

export interface TreeMap {

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
    headMap(before: any | null): SortedMap

    // Overloads of headMap

    headMap(before: any | null): SortedMap
    headMap(before: any | null): SortedMap
    tailMap(after: any | null): SortedMap

    // Overloads of tailMap

    tailMap(after: any | null): SortedMap
    tailMap(after: any | null): SortedMap
    subMap(before: any | null, after: any | null): SortedMap

    // Overloads of subMap

    subMap(before: any | null, after: any | null): SortedMap
    subMap(before: any | null, after: any | null): SortedMap
    getAscendingKeys(): SortedSet

    // Overloads of getAscendingKeys

    getAscendingKeys(): SortedSet
    getAscendingKeys(): SortedSet
    getAscendingEntries(): SortedSet

    // Overloads of getAscendingEntries

    getAscendingEntries(): SortedSet
    getAscendingEntries(): SortedSet
    hasKey(key: any | null): boolean

    // Overloads of hasKey

    hasKey(key: any | null): boolean
    hasKey(key: any | null): boolean
    has(key: any | null, value: any | null): boolean

    // Overloads of has

    has(key: any | null, value: any | null): boolean
    has(key: any | null, value: any | null): boolean
    get(key: any | null): any | null

    // Overloads of get

    get(key: any | null): any | null
    get(key: any | null): any | null
    set(key: any | null, value: any | null): void

    // Overloads of set

    set(key: any | null, value: any | null): void
    set(key: any | null, value: any | null): void
    unset(key: any | null): [ /* returnType */ boolean, /* value */ any ]

    // Overloads of unset

    unset(key: any | null): [ /* returnType */ boolean, /* value */ any ]
    unset(key: any | null): [ /* returnType */ boolean, /* value */ any ]
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

export class TreeMap extends AbstractBidirSortedMap {

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

export module TreeMultiMap {

    // Constructor properties interface

    export interface ConstructorProperties extends AbstractMultiMap.ConstructorProperties {

        // Own constructor properties of Gee-0.8.Gee.TreeMultiMap

        kType?: GObject.GType | null
        kDupFunc?: GObject.BoxedCopyFunc | null
        kDestroyFunc?: GLib.DestroyNotify | null
        vType?: GObject.GType | null
        vDupFunc?: GObject.BoxedCopyFunc | null
        vDestroyFunc?: GLib.DestroyNotify | null
    }

}

export interface TreeMultiMap {

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

export class TreeMultiMap extends AbstractMultiMap {

    // Own properties of Gee-0.8.Gee.TreeMultiMap

    static name: string

    // Constructors of Gee-0.8.Gee.TreeMultiMap

    constructor(config?: TreeMultiMap.ConstructorProperties) 
    constructor(kType: GObject.GType, kDupFunc: GObject.BoxedCopyFunc, kDestroyFunc: GLib.DestroyNotify, vType: GObject.GType, vDupFunc: GObject.BoxedCopyFunc, vDestroyFunc: GLib.DestroyNotify, keyCompareFunc: GLib.CompareDataFunc | null, valueCompareFunc: GLib.CompareDataFunc | null) 
    static new(kType: GObject.GType, kDupFunc: GObject.BoxedCopyFunc, kDestroyFunc: GLib.DestroyNotify, vType: GObject.GType, vDupFunc: GObject.BoxedCopyFunc, vDestroyFunc: GLib.DestroyNotify, keyCompareFunc: GLib.CompareDataFunc | null, valueCompareFunc: GLib.CompareDataFunc | null): TreeMultiMap
    _init(config?: TreeMultiMap.ConstructorProperties): void
}

export module TreeMultiSet {

    // Constructor properties interface

    export interface ConstructorProperties extends AbstractMultiSet.ConstructorProperties {

        // Own constructor properties of Gee-0.8.Gee.TreeMultiSet

        gType?: GObject.GType | null
        gDupFunc?: GObject.BoxedCopyFunc | null
        gDestroyFunc?: GLib.DestroyNotify | null
    }

}

export interface TreeMultiSet {

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
    contains(item: any | null): boolean

    // Overloads of contains

    contains(item: any | null): boolean
    contains(item: any | null): boolean
    add(item: any | null): boolean

    // Overloads of add

    add(item: any | null): boolean
    add(item: any | null): boolean
    remove(item: any | null): boolean

    // Overloads of remove

    remove(item: any | null): boolean
    remove(item: any | null): boolean
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

export class TreeMultiSet extends AbstractMultiSet {

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

export module TreeSet {

    // Constructor properties interface

    export interface ConstructorProperties extends AbstractBidirSortedSet.ConstructorProperties {

        // Own constructor properties of Gee-0.8.Gee.TreeSet

        gType?: GObject.GType | null
        gDupFunc?: GObject.BoxedCopyFunc | null
        gDestroyFunc?: GLib.DestroyNotify | null
    }

}

export interface TreeSet {

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
    first(): any | null

    // Overloads of first

    first(): any | null
    first(): any | null
    last(): any | null

    // Overloads of last

    last(): any | null
    last(): any | null
    iteratorAt(element: any | null): Iterator | null

    // Overloads of iteratorAt

    iteratorAt(element: any | null): Iterator | null
    iteratorAt(element: any | null): Iterator | null
    lower(element: any | null): any | null

    // Overloads of lower

    lower(element: any | null): any | null
    lower(element: any | null): any | null
    higher(element: any | null): any | null

    // Overloads of higher

    higher(element: any | null): any | null
    higher(element: any | null): any | null
    floor(element: any | null): any | null

    // Overloads of floor

    floor(element: any | null): any | null
    floor(element: any | null): any | null
    ceil(element: any | null): any | null

    // Overloads of ceil

    ceil(element: any | null): any | null
    ceil(element: any | null): any | null
    headSet(before: any | null): SortedSet

    // Overloads of headSet

    headSet(before: any | null): SortedSet
    headSet(before: any | null): SortedSet
    tailSet(after: any | null): SortedSet

    // Overloads of tailSet

    tailSet(after: any | null): SortedSet
    tailSet(after: any | null): SortedSet
    subSet(from: any | null, to: any | null): SortedSet

    // Overloads of subSet

    subSet(from: any | null, to: any | null): SortedSet
    subSet(from: any | null, to: any | null): SortedSet
    contains(item: any | null): boolean

    // Overloads of contains

    contains(item: any | null): boolean
    contains(item: any | null): boolean
    add(item: any | null): boolean

    // Overloads of add

    add(item: any | null): boolean
    add(item: any | null): boolean
    remove(item: any | null): boolean

    // Overloads of remove

    remove(item: any | null): boolean
    remove(item: any | null): boolean
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

export class TreeSet extends AbstractBidirSortedSet {

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

export module UnrolledLinkedList {

    // Constructor properties interface

    export interface ConstructorProperties extends Queue.ConstructorProperties, Deque.ConstructorProperties, AbstractBidirList.ConstructorProperties {

        // Own constructor properties of Gee-0.8.Gee.UnrolledLinkedList

        gType?: GObject.GType | null
        gDupFunc?: GObject.BoxedCopyFunc | null
        gDestroyFunc?: GLib.DestroyNotify | null
    }

}

export interface UnrolledLinkedList extends Queue, Deque {

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

    contains(item: any | null): boolean
    contains(item: any | null): boolean

    // Overloads of contains

    contains(item: any | null): boolean
    add(item: any | null): boolean
    add(item: any | null): boolean

    // Overloads of add

    add(item: any | null): boolean
    remove(item: any | null): boolean
    remove(item: any | null): boolean

    // Overloads of remove

    remove(item: any | null): boolean
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
    get(index: number): any | null

    // Overloads of get

    get(index: number): any | null
    get(index: number): any | null
    set(index: number, item: any | null): void

    // Overloads of set

    set(index: number, item: any | null): void
    set(index: number, item: any | null): void
    indexOf(item: any | null): number

    // Overloads of indexOf

    indexOf(item: any | null): number
    indexOf(item: any | null): number
    insert(index: number, item: any | null): void

    // Overloads of insert

    insert(index: number, item: any | null): void
    insert(index: number, item: any | null): void
    removeAt(index: number): any | null

    // Overloads of removeAt

    removeAt(index: number): any | null
    removeAt(index: number): any | null
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

export class UnrolledLinkedList extends AbstractBidirList {

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

export module MapEntry {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

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

export interface MapEntry {

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

    // Has conflict: getKey(): any | null
    // Has conflict: getValue(): any | null
    // Has conflict: setValue(value: any | null): void
    // Has conflict: getReadOnly(): boolean

    // Own virtual methods of Gee-0.8.Gee.MapEntry

    getKey(): any | null
    getValue(): any | null
    setValue(value: any | null): void
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

export class MapEntry extends GObject.Object {

    // Own properties of Gee-0.8.Gee.MapEntry

    static name: string

    // Constructors of Gee-0.8.Gee.MapEntry

    constructor(config?: MapEntry.ConstructorProperties) 
    _init(config?: MapEntry.ConstructorProperties): void
}

export interface AbstractBidirListClass {

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

export abstract class AbstractBidirListClass {

    // Own properties of Gee-0.8.Gee.AbstractBidirListClass

    static name: string
}

export interface AbstractBidirListPrivate {
}

export class AbstractBidirListPrivate {

    // Own properties of Gee-0.8.Gee.AbstractBidirListPrivate

    static name: string
}

export interface AbstractBidirSortedSetClass {

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

export abstract class AbstractBidirSortedSetClass {

    // Own properties of Gee-0.8.Gee.AbstractBidirSortedSetClass

    static name: string
}

export interface AbstractBidirSortedSetPrivate {
}

export class AbstractBidirSortedSetPrivate {

    // Own properties of Gee-0.8.Gee.AbstractBidirSortedSetPrivate

    static name: string
}

export interface AbstractBidirSortedMapClass {

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

export abstract class AbstractBidirSortedMapClass {

    // Own properties of Gee-0.8.Gee.AbstractBidirSortedMapClass

    static name: string
}

export interface AbstractBidirSortedMapPrivate {
}

export class AbstractBidirSortedMapPrivate {

    // Own properties of Gee-0.8.Gee.AbstractBidirSortedMapPrivate

    static name: string
}

export interface AbstractCollectionClass {

    // Own fields of Gee-0.8.Gee.AbstractCollectionClass

    contains: (self: AbstractCollection, item: any | null) => boolean
    add: (self: AbstractCollection, item: any | null) => boolean
    remove: (self: AbstractCollection, item: any | null) => boolean
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

export abstract class AbstractCollectionClass {

    // Own properties of Gee-0.8.Gee.AbstractCollectionClass

    static name: string
}

export interface AbstractCollectionPrivate {
}

export class AbstractCollectionPrivate {

    // Own properties of Gee-0.8.Gee.AbstractCollectionPrivate

    static name: string
}

export interface AbstractListClass {

    // Own fields of Gee-0.8.Gee.AbstractListClass

    listIterator: (self: AbstractList) => ListIterator
    get: (self: AbstractList, index: number) => any | null
    set: (self: AbstractList, index: number, item: any | null) => void
    indexOf: (self: AbstractList, item: any | null) => number
    insert: (self: AbstractList, index: number, item: any | null) => void
    removeAt: (self: AbstractList, index: number) => any | null
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

export abstract class AbstractListClass {

    // Own properties of Gee-0.8.Gee.AbstractListClass

    static name: string
}

export interface AbstractListPrivate {
}

export class AbstractListPrivate {

    // Own properties of Gee-0.8.Gee.AbstractListPrivate

    static name: string
}

export interface AbstractMapClass {

    // Own fields of Gee-0.8.Gee.AbstractMapClass

    hasKey: (self: AbstractMap, key: any | null) => boolean
    has: (self: AbstractMap, key: any | null, value: any | null) => boolean
    get: (self: AbstractMap, key: any | null) => any | null
    set: (self: AbstractMap, key: any | null, value: any | null) => void
    unset: (self: AbstractMap, key: any | null) => [ /* returnType */ boolean, /* value */ any ]
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

export abstract class AbstractMapClass {

    // Own properties of Gee-0.8.Gee.AbstractMapClass

    static name: string
}

export interface AbstractMapPrivate {
}

export class AbstractMapPrivate {

    // Own properties of Gee-0.8.Gee.AbstractMapPrivate

    static name: string
}

export interface AbstractMultiMapClass {

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

export abstract class AbstractMultiMapClass {

    // Own properties of Gee-0.8.Gee.AbstractMultiMapClass

    static name: string
}

export interface AbstractMultiMapPrivate {
}

export class AbstractMultiMapPrivate {

    // Own properties of Gee-0.8.Gee.AbstractMultiMapPrivate

    static name: string
}

export interface AbstractMultiSetClass {

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

export abstract class AbstractMultiSetClass {

    // Own properties of Gee-0.8.Gee.AbstractMultiSetClass

    static name: string
}

export interface AbstractMultiSetPrivate {
}

export class AbstractMultiSetPrivate {

    // Own properties of Gee-0.8.Gee.AbstractMultiSetPrivate

    static name: string
}

export interface AbstractQueueClass {

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

export abstract class AbstractQueueClass {

    // Own properties of Gee-0.8.Gee.AbstractQueueClass

    static name: string
}

export interface AbstractQueuePrivate {
}

export class AbstractQueuePrivate {

    // Own properties of Gee-0.8.Gee.AbstractQueuePrivate

    static name: string
}

export interface AbstractSetClass {

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

export abstract class AbstractSetClass {

    // Own properties of Gee-0.8.Gee.AbstractSetClass

    static name: string
}

export interface AbstractSetPrivate {
}

export class AbstractSetPrivate {

    // Own properties of Gee-0.8.Gee.AbstractSetPrivate

    static name: string
}

export interface AbstractSortedMapClass {

    // Own fields of Gee-0.8.Gee.AbstractSortedMapClass

    headMap: (self: AbstractSortedMap, before: any | null) => SortedMap
    tailMap: (self: AbstractSortedMap, after: any | null) => SortedMap
    subMap: (self: AbstractSortedMap, before: any | null, after: any | null) => SortedMap
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

export abstract class AbstractSortedMapClass {

    // Own properties of Gee-0.8.Gee.AbstractSortedMapClass

    static name: string
}

export interface AbstractSortedMapPrivate {
}

export class AbstractSortedMapPrivate {

    // Own properties of Gee-0.8.Gee.AbstractSortedMapPrivate

    static name: string
}

export interface AbstractSortedSetClass {

    // Own fields of Gee-0.8.Gee.AbstractSortedSetClass

    first: (self: AbstractSortedSet) => any | null
    last: (self: AbstractSortedSet) => any | null
    iteratorAt: (self: AbstractSortedSet, element: any | null) => Iterator | null
    lower: (self: AbstractSortedSet, element: any | null) => any | null
    higher: (self: AbstractSortedSet, element: any | null) => any | null
    floor: (self: AbstractSortedSet, element: any | null) => any | null
    ceil: (self: AbstractSortedSet, element: any | null) => any | null
    headSet: (self: AbstractSortedSet, before: any | null) => SortedSet
    tailSet: (self: AbstractSortedSet, after: any | null) => SortedSet
    subSet: (self: AbstractSortedSet, from: any | null, to: any | null) => SortedSet
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

export abstract class AbstractSortedSetClass {

    // Own properties of Gee-0.8.Gee.AbstractSortedSetClass

    static name: string
}

export interface AbstractSortedSetPrivate {
}

export class AbstractSortedSetPrivate {

    // Own properties of Gee-0.8.Gee.AbstractSortedSetPrivate

    static name: string
}

export interface ArrayListClass {
}

export abstract class ArrayListClass {

    // Own properties of Gee-0.8.Gee.ArrayListClass

    static name: string
}

export interface ArrayListPrivate {
}

export class ArrayListPrivate {

    // Own properties of Gee-0.8.Gee.ArrayListPrivate

    static name: string
}

export interface ArrayQueueClass {
}

export abstract class ArrayQueueClass {

    // Own properties of Gee-0.8.Gee.ArrayQueueClass

    static name: string
}

export interface ArrayQueuePrivate {
}

export class ArrayQueuePrivate {

    // Own properties of Gee-0.8.Gee.ArrayQueuePrivate

    static name: string
}

export interface ConcurrentListClass {
}

export abstract class ConcurrentListClass {

    // Own properties of Gee-0.8.Gee.ConcurrentListClass

    static name: string
}

export interface ConcurrentListPrivate {
}

export class ConcurrentListPrivate {

    // Own properties of Gee-0.8.Gee.ConcurrentListPrivate

    static name: string
}

export interface ConcurrentSetClass {
}

export abstract class ConcurrentSetClass {

    // Own properties of Gee-0.8.Gee.ConcurrentSetClass

    static name: string
}

export interface ConcurrentSetPrivate {
}

export class ConcurrentSetPrivate {

    // Own properties of Gee-0.8.Gee.ConcurrentSetPrivate

    static name: string
}

export interface HashMapClass {
}

export abstract class HashMapClass {

    // Own properties of Gee-0.8.Gee.HashMapClass

    static name: string
}

export interface HashMapPrivate {
}

export class HashMapPrivate {

    // Own properties of Gee-0.8.Gee.HashMapPrivate

    static name: string
}

export interface HashMultiMapClass {
}

export abstract class HashMultiMapClass {

    // Own properties of Gee-0.8.Gee.HashMultiMapClass

    static name: string
}

export interface HashMultiMapPrivate {
}

export class HashMultiMapPrivate {

    // Own properties of Gee-0.8.Gee.HashMultiMapPrivate

    static name: string
}

export interface HashMultiSetClass {
}

export abstract class HashMultiSetClass {

    // Own properties of Gee-0.8.Gee.HashMultiSetClass

    static name: string
}

export interface HashMultiSetPrivate {
}

export class HashMultiSetPrivate {

    // Own properties of Gee-0.8.Gee.HashMultiSetPrivate

    static name: string
}

export interface HashSetClass {
}

export abstract class HashSetClass {

    // Own properties of Gee-0.8.Gee.HashSetClass

    static name: string
}

export interface HashSetPrivate {
}

export class HashSetPrivate {

    // Own properties of Gee-0.8.Gee.HashSetPrivate

    static name: string
}

export interface HazardPointer {

    // Own fields of Gee-0.8.Gee.HazardPointer

    node: any

    // Owm methods of Gee-0.8.Gee.HazardPointer

    get(otherThread: boolean): any | null
    release(notify: GLib.DestroyNotify): void
}

export class HazardPointer {

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

export interface HazardPointerContext {

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

export class HazardPointerContext {

    // Own properties of Gee-0.8.Gee.HazardPointerContext

    static name: string

    // Constructors of Gee-0.8.Gee.HazardPointerContext

    constructor(policy: HazardPointerPolicy | null) 
    static new(policy: HazardPointerPolicy | null): HazardPointerContext
}

export interface LazyClass {
}

export abstract class LazyClass {

    // Own properties of Gee-0.8.Gee.LazyClass

    static name: string
}

export interface LazyPrivate {
}

export class LazyPrivate {

    // Own properties of Gee-0.8.Gee.LazyPrivate

    static name: string
}

export interface LinkedListClass {
}

export abstract class LinkedListClass {

    // Own properties of Gee-0.8.Gee.LinkedListClass

    static name: string
}

export interface LinkedListPrivate {
}

export class LinkedListPrivate {

    // Own properties of Gee-0.8.Gee.LinkedListPrivate

    static name: string
}

export interface PriorityQueueClass {
}

export abstract class PriorityQueueClass {

    // Own properties of Gee-0.8.Gee.PriorityQueueClass

    static name: string
}

export interface PriorityQueuePrivate {
}

export class PriorityQueuePrivate {

    // Own properties of Gee-0.8.Gee.PriorityQueuePrivate

    static name: string
}

export interface PromiseClass {
}

export abstract class PromiseClass {

    // Own properties of Gee-0.8.Gee.PromiseClass

    static name: string
}

export interface PromisePrivate {
}

export class PromisePrivate {

    // Own properties of Gee-0.8.Gee.PromisePrivate

    static name: string
}

export interface TreeMapClass {
}

export abstract class TreeMapClass {

    // Own properties of Gee-0.8.Gee.TreeMapClass

    static name: string
}

export interface TreeMapPrivate {
}

export class TreeMapPrivate {

    // Own properties of Gee-0.8.Gee.TreeMapPrivate

    static name: string
}

export interface TreeMultiMapClass {
}

export abstract class TreeMultiMapClass {

    // Own properties of Gee-0.8.Gee.TreeMultiMapClass

    static name: string
}

export interface TreeMultiMapPrivate {
}

export class TreeMultiMapPrivate {

    // Own properties of Gee-0.8.Gee.TreeMultiMapPrivate

    static name: string
}

export interface TreeMultiSetClass {
}

export abstract class TreeMultiSetClass {

    // Own properties of Gee-0.8.Gee.TreeMultiSetClass

    static name: string
}

export interface TreeMultiSetPrivate {
}

export class TreeMultiSetPrivate {

    // Own properties of Gee-0.8.Gee.TreeMultiSetPrivate

    static name: string
}

export interface TreeSetClass {
}

export abstract class TreeSetClass {

    // Own properties of Gee-0.8.Gee.TreeSetClass

    static name: string
}

export interface TreeSetPrivate {
}

export class TreeSetPrivate {

    // Own properties of Gee-0.8.Gee.TreeSetPrivate

    static name: string
}

export interface UnrolledLinkedListClass {
}

export abstract class UnrolledLinkedListClass {

    // Own properties of Gee-0.8.Gee.UnrolledLinkedListClass

    static name: string
}

export interface UnrolledLinkedListPrivate {
}

export class UnrolledLinkedListPrivate {

    // Own properties of Gee-0.8.Gee.UnrolledLinkedListPrivate

    static name: string
}

export interface BidirIteratorIface {

    // Own fields of Gee-0.8.Gee.BidirIteratorIface

    previous: (self: BidirIterator) => boolean
    hasPrevious: (self: BidirIterator) => boolean
    first: (self: BidirIterator) => boolean
    last: (self: BidirIterator) => boolean
}

export abstract class BidirIteratorIface {

    // Own properties of Gee-0.8.Gee.BidirIteratorIface

    static name: string
}

export interface BidirListIface {

    // Own fields of Gee-0.8.Gee.BidirListIface

    bidirListIterator: (self: BidirList) => BidirListIterator
    getReadOnlyView: (self: BidirList) => BidirList
}

export abstract class BidirListIface {

    // Own properties of Gee-0.8.Gee.BidirListIface

    static name: string
}

export interface BidirListIteratorIface {

    // Own fields of Gee-0.8.Gee.BidirListIteratorIface

    insert: (self: BidirListIterator, item: any | null) => void
}

export abstract class BidirListIteratorIface {

    // Own properties of Gee-0.8.Gee.BidirListIteratorIface

    static name: string
}

export interface BidirMapIteratorIface {

    // Own fields of Gee-0.8.Gee.BidirMapIteratorIface

    previous: (self: BidirMapIterator) => boolean
    hasPrevious: (self: BidirMapIterator) => boolean
    first: (self: BidirMapIterator) => boolean
    last: (self: BidirMapIterator) => boolean
}

export abstract class BidirMapIteratorIface {

    // Own properties of Gee-0.8.Gee.BidirMapIteratorIface

    static name: string
}

export interface BidirSortedSetIface {

    // Own fields of Gee-0.8.Gee.BidirSortedSetIface

    bidirIterator: (self: BidirSortedSet) => BidirIterator
    getReadOnlyView: (self: BidirSortedSet) => BidirSortedSet
}

export abstract class BidirSortedSetIface {

    // Own properties of Gee-0.8.Gee.BidirSortedSetIface

    static name: string
}

export interface BidirSortedMapIface {

    // Own fields of Gee-0.8.Gee.BidirSortedMapIface

    bidirMapIterator: (self: BidirSortedMap) => BidirMapIterator
    getReadOnlyView: (self: BidirSortedMap) => BidirSortedMap
}

export abstract class BidirSortedMapIface {

    // Own properties of Gee-0.8.Gee.BidirSortedMapIface

    static name: string
}

export interface CollectionIface {

    // Own fields of Gee-0.8.Gee.CollectionIface

    contains: (self: Collection, item: any | null) => boolean
    add: (self: Collection, item: any | null) => boolean
    remove: (self: Collection, item: any | null) => boolean
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

export abstract class CollectionIface {

    // Own properties of Gee-0.8.Gee.CollectionIface

    static name: string
}

export interface ComparableIface {

    // Own fields of Gee-0.8.Gee.ComparableIface

    compareTo: (self: Comparable, object: any | null) => number
}

export abstract class ComparableIface {

    // Own properties of Gee-0.8.Gee.ComparableIface

    static name: string
}

export interface DequeIface {

    // Own fields of Gee-0.8.Gee.DequeIface

    offerHead: (self: Deque, element: any | null) => boolean
    peekHead: (self: Deque) => any | null
    pollHead: (self: Deque) => any | null
    drainHead: (self: Deque, recipient: Collection, amount: number) => number
    offerTail: (self: Deque, element: any | null) => boolean
    peekTail: (self: Deque) => any | null
    pollTail: (self: Deque) => any | null
    drainTail: (self: Deque, recipient: Collection, amount: number) => number
}

export abstract class DequeIface {

    // Own properties of Gee-0.8.Gee.DequeIface

    static name: string
}

export interface FutureIface {

    // Own fields of Gee-0.8.Gee.FutureIface

    wait: (self: Future) => any | null
    waitUntil: (self: Future, endTime: number) => [ /* returnType */ boolean, /* value */ any ]
    waitAsync: (self: Future, callback: Gio.AsyncReadyCallback | null) => void
    waitFinish: (self: Future, res: Gio.AsyncResult) => any | null
    map: (self: Future, aType: GObject.GType, aDupFunc: GObject.BoxedCopyFunc, aDestroyFunc: GLib.DestroyNotify, func: any) => Future
    lightMap: (self: Future, aType: GObject.GType, aDupFunc: GObject.BoxedCopyFunc, aDestroyFunc: GLib.DestroyNotify, func: any) => Future
    lightMapBroken: (self: Future, aType: GObject.GType, aDupFunc: GObject.BoxedCopyFunc, aDestroyFunc: GLib.DestroyNotify, func: any) => Future
    zip: (self: Future, aType: GObject.GType, aDupFunc: GObject.BoxedCopyFunc, aDestroyFunc: GLib.DestroyNotify, bType: GObject.GType, bDupFunc: GObject.BoxedCopyFunc, bDestroyFunc: GLib.DestroyNotify, zipFunc: any, second: Future) => Future
    flatMap: (self: Future, aType: GObject.GType, aDupFunc: GObject.BoxedCopyFunc, aDestroyFunc: GLib.DestroyNotify, func: any) => Future
    getValue: (self: Future) => any | null
    getReady: (self: Future) => boolean
    getException: (self: Future) => GLib.Error | null
}

export abstract class FutureIface {

    // Own properties of Gee-0.8.Gee.FutureIface

    static name: string
}

export interface HashableIface {

    // Own fields of Gee-0.8.Gee.HashableIface

    hash: (self: Hashable) => number
    equalTo: (self: Hashable, object: any | null) => boolean
}

export abstract class HashableIface {

    // Own properties of Gee-0.8.Gee.HashableIface

    static name: string
}

export interface IterableIface {

    // Own fields of Gee-0.8.Gee.IterableIface

    iterator: (self: Iterable) => Iterator
}

export abstract class IterableIface {

    // Own properties of Gee-0.8.Gee.IterableIface

    static name: string
}

export interface IteratorIface {

    // Own fields of Gee-0.8.Gee.IteratorIface

    next: (self: Iterator) => boolean
    hasNext: (self: Iterator) => boolean
    get: (self: Iterator) => any | null
    remove: (self: Iterator) => void
    getValid: (self: Iterator) => boolean
    getReadOnly: (self: Iterator) => boolean
}

export abstract class IteratorIface {

    // Own properties of Gee-0.8.Gee.IteratorIface

    static name: string
}

export interface ListIface {

    // Own fields of Gee-0.8.Gee.ListIface

    listIterator: (self: List) => ListIterator
    get: (self: List, index: number) => any | null
    set: (self: List, index: number, item: any | null) => void
    indexOf: (self: List, item: any | null) => number
    insert: (self: List, index: number, item: any | null) => void
    removeAt: (self: List, index: number) => any | null
    slice: (self: List, start: number, stop: number) => List | null
    first: (self: List) => any | null
    last: (self: List) => any | null
    insertAll: (self: List, index: number, collection: Collection) => void
    sort: (self: List, compareFunc: GLib.CompareDataFunc | null) => void
    getReadOnlyView: (self: List) => List
}

export abstract class ListIface {

    // Own properties of Gee-0.8.Gee.ListIface

    static name: string
}

export interface ListIteratorIface {

    // Own fields of Gee-0.8.Gee.ListIteratorIface

    set: (self: ListIterator, item: any | null) => void
    add: (self: ListIterator, item: any | null) => void
    index: (self: ListIterator) => number
}

export abstract class ListIteratorIface {

    // Own properties of Gee-0.8.Gee.ListIteratorIface

    static name: string
}

export interface MapIface {

    // Own fields of Gee-0.8.Gee.MapIface

    hasKey: (self: Map, key: any | null) => boolean
    has: (self: Map, key: any | null, value: any | null) => boolean
    get: (self: Map, key: any | null) => any | null
    set: (self: Map, key: any | null, value: any | null) => void
    unset: (self: Map, key: any | null) => [ /* returnType */ boolean, /* value */ any ]
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

export abstract class MapIface {

    // Own properties of Gee-0.8.Gee.MapIface

    static name: string
}

export interface MapEntryClass {
}

export abstract class MapEntryClass {

    // Own properties of Gee-0.8.Gee.MapEntryClass

    static name: string
}

export interface MapEntryPrivate {
}

export class MapEntryPrivate {

    // Own properties of Gee-0.8.Gee.MapEntryPrivate

    static name: string
}

export interface MapIteratorIface {

    // Own fields of Gee-0.8.Gee.MapIteratorIface

    next: (self: MapIterator) => boolean
    hasNext: (self: MapIterator) => boolean
    getKey: (self: MapIterator) => any | null
    getValue: (self: MapIterator) => any | null
    setValue: (self: MapIterator, value: any | null) => void
    unset: (self: MapIterator) => void
    fold: (self: MapIterator, aType: GObject.GType, aDupFunc: GObject.BoxedCopyFunc, aDestroyFunc: GLib.DestroyNotify, f: FoldMapFunc, seed: any | null) => any | null
    foreach: (self: MapIterator, f: ForallMapFunc) => boolean
    getValid: (self: MapIterator) => boolean
    getMutable: (self: MapIterator) => boolean
    getReadOnly: (self: MapIterator) => boolean
}

export abstract class MapIteratorIface {

    // Own properties of Gee-0.8.Gee.MapIteratorIface

    static name: string
}

export interface MultiMapIface {

    // Own fields of Gee-0.8.Gee.MultiMapIface

    getKeys: (self: MultiMap) => Set
    getAllKeys: (self: MultiMap) => MultiSet
    getValues: (self: MultiMap) => Collection
    contains: (self: MultiMap, key: any | null) => boolean
    get: (self: MultiMap, key: any | null) => Collection
    set: (self: MultiMap, key: any | null, value: any | null) => void
    remove: (self: MultiMap, key: any | null, value: any | null) => boolean
    removeAll: (self: MultiMap, key: any | null) => boolean
    clear: (self: MultiMap) => void
    mapIterator: (self: MultiMap) => MapIterator
    getSize: (self: MultiMap) => number
    getReadOnly: (self: MultiMap) => boolean
    getReadOnlyView: (self: MultiMap) => MultiMap
}

export abstract class MultiMapIface {

    // Own properties of Gee-0.8.Gee.MultiMapIface

    static name: string
}

export interface MultiSetIface {

    // Own fields of Gee-0.8.Gee.MultiSetIface

    count: (self: MultiSet, item: any | null) => number
    getReadOnlyView: (self: MultiSet) => MultiSet
}

export abstract class MultiSetIface {

    // Own properties of Gee-0.8.Gee.MultiSetIface

    static name: string
}

export interface QueueIface {

    // Own fields of Gee-0.8.Gee.QueueIface

    offer: (self: Queue, element: any | null) => boolean
    peek: (self: Queue) => any | null
    poll: (self: Queue) => any | null
    drain: (self: Queue, recipient: Collection, amount: number) => number
    getCapacity: (self: Queue) => number
    getRemainingCapacity: (self: Queue) => number
    getIsFull: (self: Queue) => boolean
}

export abstract class QueueIface {

    // Own properties of Gee-0.8.Gee.QueueIface

    static name: string
}

export interface SetIface {

    // Own fields of Gee-0.8.Gee.SetIface

    getReadOnlyView: (self: Set) => Set
}

export abstract class SetIface {

    // Own properties of Gee-0.8.Gee.SetIface

    static name: string
}

export interface SortedMapIface {

    // Own fields of Gee-0.8.Gee.SortedMapIface

    headMap: (self: SortedMap, before: any | null) => SortedMap
    tailMap: (self: SortedMap, after: any | null) => SortedMap
    subMap: (self: SortedMap, before: any | null, after: any | null) => SortedMap
    getAscendingKeys: (self: SortedMap) => SortedSet
    getAscendingEntries: (self: SortedMap) => SortedSet
    getReadOnlyView: (self: SortedMap) => SortedMap
}

export abstract class SortedMapIface {

    // Own properties of Gee-0.8.Gee.SortedMapIface

    static name: string
}

export interface SortedSetIface {

    // Own fields of Gee-0.8.Gee.SortedSetIface

    first: (self: SortedSet) => any | null
    last: (self: SortedSet) => any | null
    iteratorAt: (self: SortedSet, element: any | null) => Iterator | null
    lower: (self: SortedSet, element: any | null) => any | null
    higher: (self: SortedSet, element: any | null) => any | null
    floor: (self: SortedSet, element: any | null) => any | null
    ceil: (self: SortedSet, element: any | null) => any | null
    headSet: (self: SortedSet, before: any | null) => SortedSet
    tailSet: (self: SortedSet, after: any | null) => SortedSet
    subSet: (self: SortedSet, from: any | null, to: any | null) => SortedSet
    getReadOnlyView: (self: SortedSet) => SortedSet
}

export abstract class SortedSetIface {

    // Own properties of Gee-0.8.Gee.SortedSetIface

    static name: string
}

export interface TraversableIface {

    // Own fields of Gee-0.8.Gee.TraversableIface

    foreach: (self: Traversable, f: ForallFunc) => boolean
    stream: (self: Traversable, aType: GObject.GType, aDupFunc: GObject.BoxedCopyFunc, aDestroyFunc: GLib.DestroyNotify, f: StreamFunc) => Iterator
    fold: (self: Traversable, aType: GObject.GType, aDupFunc: GObject.BoxedCopyFunc, aDestroyFunc: GLib.DestroyNotify, f: FoldFunc, seed: any | null) => any | null
    map: (self: Traversable, aType: GObject.GType, aDupFunc: GObject.BoxedCopyFunc, aDestroyFunc: GLib.DestroyNotify, f: MapFunc) => Iterator
    scan: (self: Traversable, aType: GObject.GType, aDupFunc: GObject.BoxedCopyFunc, aDestroyFunc: GLib.DestroyNotify, f: FoldFunc, seed: any | null) => Iterator
    filter: (self: Traversable, pred: Predicate) => Iterator
    chop: (self: Traversable, offset: number, length: number) => Iterator
    flatMap: (self: Traversable, aType: GObject.GType, aDupFunc: GObject.BoxedCopyFunc, aDestroyFunc: GLib.DestroyNotify, f: FlatMapFunc) => Iterator
    tee: (self: Traversable) => [ /* returnType */ Iterator[], /* resultLength1 */ number ]
    firstMatch: (self: Traversable, pred: Predicate) => any | null
    anyMatch: (self: Traversable, pred: Predicate) => boolean
    allMatch: (self: Traversable, pred: Predicate) => boolean
    max: (self: Traversable, compare: GLib.CompareDataFunc) => any | null
    min: (self: Traversable, compare: GLib.CompareDataFunc) => any | null
    orderBy: (self: Traversable, compare: GLib.CompareDataFunc | null) => Iterator
    getElementType: (self: Traversable) => GObject.GType
}

export abstract class TraversableIface {

    // Own properties of Gee-0.8.Gee.TraversableIface

    static name: string
}

// END