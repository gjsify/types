// @ts-nocheck

/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * Gpseq-1.0
 */

import type Gee from './Gee-0.8';
import type Gio from './Gio-2.0';
import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';

export namespace Gpseq {

enum ChannelError {
    CLOSED,
    TIMEOUT,
    TRY_FAILED,
}
enum MapError {
    DUPLICATE_KEY,
}
enum OptionalError {
    NOT_PRESENT,
}
enum CollectorFeatures {
    CONCURRENT,
    UNORDERED,
}
function collectorsToGenericArray(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify): Collector
function collectorsToCollection(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, factory: Supplier): Collector
function collectorsToList(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify): Collector
function collectorsToSet(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, hash: Gee.HashDataFunc | null, equal: Gee.EqualDataFunc | null): Collector
function collectorsToMap(kType: GObject.GType, kDupFunc: GObject.BoxedCopyFunc, kDestroyFunc: GLib.DestroyNotify, vType: GObject.GType, vDupFunc: GObject.BoxedCopyFunc, vDestroyFunc: GLib.DestroyNotify, gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, keyMapper: MapFunc, valMapper: MapFunc, merger: CombineFunc | null, keyHash: Gee.HashDataFunc | null, keyEqual: Gee.EqualDataFunc | null, valueEqual: Gee.EqualDataFunc | null): Collector
function collectorsSumInt(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, mapper: MapFunc): Collector
function collectorsSumUint(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, mapper: MapFunc): Collector
function collectorsSumLong(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, mapper: MapFunc): Collector
function collectorsSumUlong(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, mapper: MapFunc): Collector
function collectorsSumFloat(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, mapper: MapFunc): Collector
function collectorsSumDouble(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, mapper: MapFunc): Collector
function collectorsSumInt32(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, mapper: MapFunc): Collector
function collectorsSumUint32(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, mapper: MapFunc): Collector
function collectorsSumInt64(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, mapper: MapFunc): Collector
function collectorsSumUint64(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, mapper: MapFunc): Collector
function collectorsAverageFloat(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, mapper: MapFunc): Collector
function collectorsAverageDouble(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, mapper: MapFunc): Collector
function collectorsGroupBy(kType: GObject.GType, kDupFunc: GObject.BoxedCopyFunc, kDestroyFunc: GLib.DestroyNotify, gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, classifier: MapFunc): Collector
function collectorsGroupByWith(kType: GObject.GType, kDupFunc: GObject.BoxedCopyFunc, kDestroyFunc: GLib.DestroyNotify, vType: GObject.GType, vDupFunc: GObject.BoxedCopyFunc, vDestroyFunc: GLib.DestroyNotify, gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, classifier: MapFunc, downstream: Collector): Collector
function collectorsPartition(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, pred: Predicate): Collector
function collectorsPartitionWith(vType: GObject.GType, vDupFunc: GObject.BoxedCopyFunc, vDestroyFunc: GLib.DestroyNotify, gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, pred: Predicate, downstream: Collector): Collector
function collectorsMax(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, compare: GLib.CompareDataFunc | null): Collector
function collectorsMin(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, compare: GLib.CompareDataFunc | null): Collector
function collectorsCount(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify): Collector
function collectorsFold(aType: GObject.GType, aDupFunc: GObject.BoxedCopyFunc, aDestroyFunc: GLib.DestroyNotify, gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, accumulator: FoldFunc, combiner: CombineFunc, identity?: object | null): Collector
function collectorsReduce(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, accumulator: CombineFunc): Collector
function collectorsJoin(delimiter: string): Collector
function collectorsFilter(aType: GObject.GType, aDupFunc: GObject.BoxedCopyFunc, aDestroyFunc: GLib.DestroyNotify, gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, pred: Predicate, downstream: Collector): Collector
function collectorsTee(aType: GObject.GType, aDupFunc: GObject.BoxedCopyFunc, aDestroyFunc: GLib.DestroyNotify, gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, downstreams: Collector[], merger: TeeMergeFunc): Collector
function collectorsMap(rType: GObject.GType, rDupFunc: GObject.BoxedCopyFunc, rDestroyFunc: GLib.DestroyNotify, aType: GObject.GType, aDupFunc: GObject.BoxedCopyFunc, aDestroyFunc: GLib.DestroyNotify, gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, mapper: MapFunc, downstream: Collector): Collector
function collectorsWrap(aType: GObject.GType, aDupFunc: GObject.BoxedCopyFunc, aDestroyFunc: GLib.DestroyNotify, gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, collector: Collector): Collector
function comparesReverse(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, cmp: GLib.CompareDataFunc | null): [ /* returnType */ GLib.CompareDataFunc, /* resultTarget */ object | null, /* resultTargetDestroyNotify */ GLib.DestroyNotify ]
function comparesJoin(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, cmp: GLib.CompareDataFunc, cmp2: GLib.CompareDataFunc): [ /* returnType */ GLib.CompareDataFunc, /* resultTarget */ object | null, /* resultTargetDestroyNotify */ GLib.DestroyNotify ]
function overflowIntAdd(a: number, b: number): [ /* returnType */ boolean, /* result */ number ]
function overflowIntSub(a: number, b: number): [ /* returnType */ boolean, /* result */ number ]
function overflowIntMul(a: number, b: number): [ /* returnType */ boolean, /* result */ number ]
function overflowLongAdd(a: number, b: number): [ /* returnType */ boolean, /* result */ number ]
function overflowLongSub(a: number, b: number): [ /* returnType */ boolean, /* result */ number ]
function overflowLongMul(a: number, b: number): [ /* returnType */ boolean, /* result */ number ]
function overflowInt32Add(a: number, b: number): [ /* returnType */ boolean, /* result */ number ]
function overflowInt32Sub(a: number, b: number): [ /* returnType */ boolean, /* result */ number ]
function overflowInt32Mul(a: number, b: number): [ /* returnType */ boolean, /* result */ number ]
function overflowInt64Add(a: number, b: number): [ /* returnType */ boolean, /* result */ number ]
function overflowInt64Sub(a: number, b: number): [ /* returnType */ boolean, /* result */ number ]
function overflowInt64Mul(a: number, b: number): [ /* returnType */ boolean, /* result */ number ]
function parallelSort(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, array: object[], compare: GLib.CompareDataFunc | null): Future
function task(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, func: TaskFunc): Future
function run(func: VoidTaskFunc): Future
function blocking(func: VoidTaskFunc): void
function blockingGet(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, func: TaskFunc): object | null
function join(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, left: TaskFunc): [ /* returnType */ object[], /* resultLength1 */ number ]
function atomicInt64Get(atomic: number): [ /* returnType */ number, /* atomic */ number ]
function atomicInt64Set(atomic: number, newval: number): /* atomic */ number
function atomicInt64Inc(atomic: number): /* atomic */ number
function atomicInt64DecAndTest(atomic: number): [ /* returnType */ boolean, /* atomic */ number ]
function atomicInt64CompareAndExchange(atomic: number, oldval: number, newval: number): [ /* returnType */ boolean, /* atomic */ number ]
function atomicInt64Add(atomic: number, val: number): [ /* returnType */ number, /* atomic */ number ]
function atomicInt64And(atomic: number, val: number): [ /* returnType */ number, /* atomic */ number ]
function atomicInt64Or(atomic: number, val: number): [ /* returnType */ number, /* atomic */ number ]
function atomicInt64Xor(atomic: number, val: number): [ /* returnType */ number, /* atomic */ number ]
interface CombineFunc {
    (gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, a: object | null, b: object | null): object | null
}
interface EachChunkFunc {
    (gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, chunk: object[]): boolean
}
interface FlatMapFunc {
    (aType: GObject.GType, aDupFunc: GObject.BoxedCopyFunc, aDestroyFunc: GLib.DestroyNotify, gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, g: object | null): Gee.Iterator
}
interface FoldFunc {
    (aType: GObject.GType, aDupFunc: GObject.BoxedCopyFunc, aDestroyFunc: GLib.DestroyNotify, gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, g: object | null, a: object | null): object | null
}
interface Func {
    (gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, g: object | null): void
}
interface MapFunc {
    (aType: GObject.GType, aDupFunc: GObject.BoxedCopyFunc, aDestroyFunc: GLib.DestroyNotify, gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, g: object | null): object | null
}
interface Predicate {
    (gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, g: object | null): boolean
}
interface SupplyFunc {
    (gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify): object | null
}
interface TaskFunc {
    (gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify): object | null
}
interface TeeMergeFunc {
    (aType: GObject.GType, aDupFunc: GObject.BoxedCopyFunc, aDestroyFunc: GLib.DestroyNotify, results: GObject.Object[]): object | null
}
interface VoidFunc {
    (): void
}
interface VoidTaskFunc {
    (): void
}
interface Channel_ConstructProps extends Sender_ConstructProps, Receiver_ConstructProps, GObject.Object_ConstructProps {
}

interface Channel extends Sender, Receiver {

    // Class property signals of Gpseq-1.0.Gpseq.Channel

    connect(sigName: "notify::capacity", callback: (...args: any[]) => void): number
    on(sigName: "notify::capacity", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::capacity", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::capacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::capacity", ...args: any[]): void
    connect(sigName: "notify::length", callback: (...args: any[]) => void): number
    on(sigName: "notify::length", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::length", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::length", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::length", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class Channel extends GObject.Object {

    // Own properties of Gpseq-1.0.Gpseq.Channel

    static name: string
    static $gtype: GObject.GType<Channel>

    // Constructors of Gpseq-1.0.Gpseq.Channel

    constructor(config?: Channel_ConstructProps) 
    _init(config?: Channel_ConstructProps): void
    static bounded(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, proposedCapacity: number): Channel
    static unbounded(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify): Channel
}

interface ChannelBase_ConstructProps extends GObject.Object_ConstructProps {
}

interface ChannelBase extends GObject.Object {

    // Own properties of Gpseq-1.0.Gpseq.ChannelBase

    readonly capacity: Optional
    readonly length: number

    // Owm methods of Gpseq-1.0.Gpseq.ChannelBase

    getCapacity(): Optional
    getLength(): number
    getIsFull(): boolean
    getIsEmpty(): boolean
    close(): void

    // Class property signals of Gpseq-1.0.Gpseq.ChannelBase

    connect(sigName: "notify::capacity", callback: (...args: any[]) => void): number
    on(sigName: "notify::capacity", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::capacity", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::capacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::capacity", ...args: any[]): void
    connect(sigName: "notify::length", callback: (...args: any[]) => void): number
    on(sigName: "notify::length", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::length", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::length", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::length", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class ChannelBase {

    // Own properties of Gpseq-1.0.Gpseq.ChannelBase

    static name: string
    static $gtype: GObject.GType<ChannelBase>

    // Constructors of Gpseq-1.0.Gpseq.ChannelBase

    constructor(config?: ChannelBase_ConstructProps) 
    _init(config?: ChannelBase_ConstructProps): void
}

interface Collector_ConstructProps extends GObject.Object_ConstructProps {
}

interface Collector extends GObject.Object {

    // Own properties of Gpseq-1.0.Gpseq.Collector

    readonly features: CollectorFeatures

    // Owm methods of Gpseq-1.0.Gpseq.Collector

    getFeatures(): CollectorFeatures
    createAccumulator(): object | null
    accumulate(g?: object | null, a?: object | null): void
    combine(a?: object | null, b?: object | null): object | null
    finish(a?: object | null): object | null

    // Class property signals of Gpseq-1.0.Gpseq.Collector

    connect(sigName: "notify::features", callback: (...args: any[]) => void): number
    on(sigName: "notify::features", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::features", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::features", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::features", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class Collector {

    // Own properties of Gpseq-1.0.Gpseq.Collector

    static name: string
    static $gtype: GObject.GType<Collector>

    // Constructors of Gpseq-1.0.Gpseq.Collector

    constructor(config?: Collector_ConstructProps) 
    _init(config?: Collector_ConstructProps): void
}

interface Executor_ConstructProps extends GObject.Object_ConstructProps {
}

interface Executor extends GObject.Object {

    // Own properties of Gpseq-1.0.Gpseq.Executor

    readonly parallels: number

    // Owm methods of Gpseq-1.0.Gpseq.Executor

    submit(task: Task): void
    getParallels(): number

    // Class property signals of Gpseq-1.0.Gpseq.Executor

    connect(sigName: "notify::parallels", callback: (...args: any[]) => void): number
    on(sigName: "notify::parallels", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::parallels", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::parallels", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::parallels", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class Executor {

    // Own properties of Gpseq-1.0.Gpseq.Executor

    static name: string
    static $gtype: GObject.GType<Executor>

    // Constructors of Gpseq-1.0.Gpseq.Executor

    constructor(config?: Executor_ConstructProps) 
    _init(config?: Executor_ConstructProps): void
}

interface Receiver_ConstructProps extends ChannelBase_ConstructProps, Gee.Traversable_ConstructProps, GObject.Object_ConstructProps {
}

interface Receiver extends ChannelBase, Gee.Traversable {

    // Owm methods of Gpseq-1.0.Gpseq.Receiver

    recv(): Result
    recvUntil(endTime: number): Result
    tryRecv(): Result

    // Class property signals of Gpseq-1.0.Gpseq.Receiver

    connect(sigName: "notify::capacity", callback: (...args: any[]) => void): number
    on(sigName: "notify::capacity", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::capacity", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::capacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::capacity", ...args: any[]): void
    connect(sigName: "notify::length", callback: (...args: any[]) => void): number
    on(sigName: "notify::length", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::length", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::length", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::length", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class Receiver extends GObject.Object {

    // Own properties of Gpseq-1.0.Gpseq.Receiver

    static name: string
    static $gtype: GObject.GType<Receiver>

    // Constructors of Gpseq-1.0.Gpseq.Receiver

    constructor(config?: Receiver_ConstructProps) 
    _init(config?: Receiver_ConstructProps): void
}

interface Result_ConstructProps extends Gee.Hashable_ConstructProps, GObject.Object_ConstructProps {
}

interface Result extends Gee.Hashable {

    // Owm methods of Gpseq-1.0.Gpseq.Result

    getValueType(): GObject.GType
    getValue(): object | null
    getException(): GLib.Error | null
    getIsErr(): boolean
    ok(): Result
    okWith(expected: object | null, equal: Gee.EqualDataFunc | null): Result
    future(): Future
    get(): object | null
    transform(aType: GObject.GType, aDupFunc: GObject.BoxedCopyFunc, aDestroyFunc: GLib.DestroyNotify, func: any): Result
    flatMap(aType: GObject.GType, aDupFunc: GObject.BoxedCopyFunc, aDestroyFunc: GLib.DestroyNotify, func: any): Result
    map(aType: GObject.GType, aDupFunc: GObject.BoxedCopyFunc, aDestroyFunc: GLib.DestroyNotify, func: any): Result
    mapErr(func: any): Result
    zip(aType: GObject.GType, aDupFunc: GObject.BoxedCopyFunc, aDestroyFunc: GLib.DestroyNotify, bType: GObject.GType, bDupFunc: GObject.BoxedCopyFunc, bDestroyFunc: GLib.DestroyNotify, zipFunc: any, second: Result): Result
    then(func: GLib.Func): Result
    andThen(func: Func): Result

    // Class property signals of Gpseq-1.0.Gpseq.Result

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class Result extends GObject.Object {

    // Own properties of Gpseq-1.0.Gpseq.Result

    static name: string
    static $gtype: GObject.GType<Result>

    // Constructors of Gpseq-1.0.Gpseq.Result

    constructor(config?: Result_ConstructProps) 
    _init(config?: Result_ConstructProps): void
    static of(gType: GObject.GType, gDupFunc?: GObject.BoxedCopyFunc, gDestroyFunc?: GLib.DestroyNotify, value?: object | null): Result
    static err(gType: GObject.GType, gDupFunc?: GObject.BoxedCopyFunc, gDestroyFunc?: GLib.DestroyNotify, exception?: GLib.Error): Result
}

interface Sender_ConstructProps extends ChannelBase_ConstructProps, GObject.Object_ConstructProps {
}

interface Sender extends ChannelBase {

    // Owm methods of Gpseq-1.0.Gpseq.Sender

    send(data?: object | null): Result
    sendUntil(data: object | null, endTime: number): Result
    trySend(data?: object | null): Result

    // Class property signals of Gpseq-1.0.Gpseq.Sender

    connect(sigName: "notify::capacity", callback: (...args: any[]) => void): number
    on(sigName: "notify::capacity", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::capacity", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::capacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::capacity", ...args: any[]): void
    connect(sigName: "notify::length", callback: (...args: any[]) => void): number
    on(sigName: "notify::length", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::length", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::length", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::length", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class Sender extends GObject.Object {

    // Own properties of Gpseq-1.0.Gpseq.Sender

    static name: string
    static $gtype: GObject.GType<Sender>

    // Constructors of Gpseq-1.0.Gpseq.Sender

    constructor(config?: Sender_ConstructProps) 
    _init(config?: Sender_ConstructProps): void
}

interface Spliterator_ConstructProps extends GObject.Object_ConstructProps {
}

interface Spliterator extends GObject.Object {

    // Own properties of Gpseq-1.0.Gpseq.Spliterator

    readonly estimatedSize: number
    readonly isSizeKnown: boolean

    // Owm methods of Gpseq-1.0.Gpseq.Spliterator

    getElementType(): GObject.GType
    trySplit(): Spliterator | null
    tryAdvance(consumer: Func): boolean
    getEstimatedSize(): number
    getIsSizeKnown(): boolean
    each(f: Func): void
    eachChunk(f: EachChunkFunc): boolean

    // Class property signals of Gpseq-1.0.Gpseq.Spliterator

    connect(sigName: "notify::estimated-size", callback: (...args: any[]) => void): number
    on(sigName: "notify::estimated-size", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::estimated-size", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::estimated-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::estimated-size", ...args: any[]): void
    connect(sigName: "notify::is-size-known", callback: (...args: any[]) => void): number
    on(sigName: "notify::is-size-known", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::is-size-known", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::is-size-known", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::is-size-known", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class Spliterator {

    // Own properties of Gpseq-1.0.Gpseq.Spliterator

    static name: string
    static $gtype: GObject.GType<Spliterator>

    // Constructors of Gpseq-1.0.Gpseq.Spliterator

    constructor(config?: Spliterator_ConstructProps) 
    _init(config?: Spliterator_ConstructProps): void
    static empty(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify): Spliterator
}

interface Supplier_ConstructProps extends GObject.Object_ConstructProps {
}

interface Supplier extends GObject.Object {

    // Owm methods of Gpseq-1.0.Gpseq.Supplier

    supply(): object | null

    // Class property signals of Gpseq-1.0.Gpseq.Supplier

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class Supplier {

    // Own properties of Gpseq-1.0.Gpseq.Supplier

    static name: string
    static $gtype: GObject.GType<Supplier>

    // Constructors of Gpseq-1.0.Gpseq.Supplier

    constructor(config?: Supplier_ConstructProps) 
    _init(config?: Supplier_ConstructProps): void
    static fromFunc(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, func: SupplyFunc): Supplier
}

interface Task_ConstructProps extends GObject.Object_ConstructProps {
}

interface Task extends GObject.Object {

    // Own properties of Gpseq-1.0.Gpseq.Task

    readonly future: Future

    // Owm methods of Gpseq-1.0.Gpseq.Task

    getFuture(): Future
    compute(): void
    invoke(): void

    // Class property signals of Gpseq-1.0.Gpseq.Task

    connect(sigName: "notify::future", callback: (...args: any[]) => void): number
    on(sigName: "notify::future", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::future", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::future", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::future", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class Task {

    // Own properties of Gpseq-1.0.Gpseq.Task

    static name: string
    static $gtype: GObject.GType<Task>

    // Constructors of Gpseq-1.0.Gpseq.Task

    constructor(config?: Task_ConstructProps) 
    _init(config?: Task_ConstructProps): void
}

interface ThreadFactory_ConstructProps extends GObject.Object_ConstructProps {
}

interface ThreadFactory extends GObject.Object {

    // Owm methods of Gpseq-1.0.Gpseq.ThreadFactory

    createThread(pool: WorkerPool): WorkerThread

    // Class property signals of Gpseq-1.0.Gpseq.ThreadFactory

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class ThreadFactory {

    // Own properties of Gpseq-1.0.Gpseq.ThreadFactory

    static name: string
    static $gtype: GObject.GType<ThreadFactory>

    // Constructors of Gpseq-1.0.Gpseq.ThreadFactory

    constructor(config?: ThreadFactory_ConstructProps) 
    _init(config?: ThreadFactory_ConstructProps): void
}

interface ArraySpliterator_ConstructProps extends Spliterator_ConstructProps, GObject.Object_ConstructProps {

    // Own constructor properties of Gpseq-1.0.Gpseq.ArraySpliterator

    gType?: GObject.GType | null
    gDupFunc?: GObject.BoxedCopyFunc | null
    gDestroyFunc?: GLib.DestroyNotify | null
}

interface ArraySpliterator extends Spliterator {

    // Own properties of Gpseq-1.0.Gpseq.ArraySpliterator

    readonly gType: GObject.GType
    readonly gDupFunc: GObject.BoxedCopyFunc
    readonly gDestroyFunc: GLib.DestroyNotify

    // Class property signals of Gpseq-1.0.Gpseq.ArraySpliterator

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
    connect(sigName: "notify::estimated-size", callback: (...args: any[]) => void): number
    on(sigName: "notify::estimated-size", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::estimated-size", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::estimated-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::estimated-size", ...args: any[]): void
    connect(sigName: "notify::is-size-known", callback: (...args: any[]) => void): number
    on(sigName: "notify::is-size-known", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::is-size-known", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::is-size-known", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::is-size-known", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class ArraySpliterator extends GObject.Object {

    // Own properties of Gpseq-1.0.Gpseq.ArraySpliterator

    static name: string
    static $gtype: GObject.GType<ArraySpliterator>

    // Constructors of Gpseq-1.0.Gpseq.ArraySpliterator

    constructor(config?: ArraySpliterator_ConstructProps) 
    constructor(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, array: object[], start: number, stop: number) 
    static new(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, array: object[], start: number, stop: number): ArraySpliterator
    _init(config?: ArraySpliterator_ConstructProps): void
}

interface ForkJoinTask_ConstructProps extends Task_ConstructProps, GObject.Object_ConstructProps {

    // Own constructor properties of Gpseq-1.0.Gpseq.ForkJoinTask

    gType?: GObject.GType | null
    gDupFunc?: GObject.BoxedCopyFunc | null
    gDestroyFunc?: GLib.DestroyNotify | null
    depth?: number | null
}

interface ForkJoinTask extends Task {

    // Own properties of Gpseq-1.0.Gpseq.ForkJoinTask

    readonly gType: GObject.GType
    readonly gDupFunc: GObject.BoxedCopyFunc
    readonly gDestroyFunc: GLib.DestroyNotify
    readonly parent: ForkJoinTask
    readonly root: ForkJoinTask
    readonly isRoot: boolean
    readonly threshold: number
    readonly maxDepth: number
    depth: number
    readonly executor: Executor
    readonly promise: Promise
    readonly sharedResult: ForkJoinTaskSharedResult
    readonly isCancelled: boolean

    // Owm methods of Gpseq-1.0.Gpseq.ForkJoinTask

    getParent(): ForkJoinTask | null
    getRoot(): ForkJoinTask
    getIsRoot(): boolean
    getThreshold(): number
    getMaxDepth(): number
    getDepth(): number
    setDepth(value: number): void
    getExecutor(): Executor
    getPromise(): Promise
    join(): object | null
    fork(): void
    getSharedResult(): ForkJoinTaskSharedResult
    cancel(): void
    getIsCancelled(): boolean
    compute(): void

    // Class property signals of Gpseq-1.0.Gpseq.ForkJoinTask

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
    connect(sigName: "notify::parent", callback: (...args: any[]) => void): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::root", callback: (...args: any[]) => void): number
    on(sigName: "notify::root", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::root", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::root", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::root", ...args: any[]): void
    connect(sigName: "notify::is-root", callback: (...args: any[]) => void): number
    on(sigName: "notify::is-root", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::is-root", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::is-root", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::is-root", ...args: any[]): void
    connect(sigName: "notify::threshold", callback: (...args: any[]) => void): number
    on(sigName: "notify::threshold", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::threshold", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::threshold", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::threshold", ...args: any[]): void
    connect(sigName: "notify::max-depth", callback: (...args: any[]) => void): number
    on(sigName: "notify::max-depth", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::max-depth", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::max-depth", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::max-depth", ...args: any[]): void
    connect(sigName: "notify::depth", callback: (...args: any[]) => void): number
    on(sigName: "notify::depth", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::depth", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::depth", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::depth", ...args: any[]): void
    connect(sigName: "notify::executor", callback: (...args: any[]) => void): number
    on(sigName: "notify::executor", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::executor", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::executor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::executor", ...args: any[]): void
    connect(sigName: "notify::promise", callback: (...args: any[]) => void): number
    on(sigName: "notify::promise", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::promise", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::promise", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::promise", ...args: any[]): void
    connect(sigName: "notify::shared-result", callback: (...args: any[]) => void): number
    on(sigName: "notify::shared-result", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::shared-result", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::shared-result", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::shared-result", ...args: any[]): void
    connect(sigName: "notify::is-cancelled", callback: (...args: any[]) => void): number
    on(sigName: "notify::is-cancelled", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::is-cancelled", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::is-cancelled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::is-cancelled", ...args: any[]): void
    connect(sigName: "notify::future", callback: (...args: any[]) => void): number
    on(sigName: "notify::future", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::future", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::future", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::future", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class ForkJoinTask extends GObject.Object {

    // Own properties of Gpseq-1.0.Gpseq.ForkJoinTask

    static name: string
    static $gtype: GObject.GType<ForkJoinTask>

    // Constructors of Gpseq-1.0.Gpseq.ForkJoinTask

    constructor(config?: ForkJoinTask_ConstructProps) 
    _init(config?: ForkJoinTask_ConstructProps): void
}

interface ForkJoinTaskSharedResult {

    // Own fields of Gpseq-1.0.Gpseq.ForkJoinTaskSharedResult

    refCount: number

    // Owm methods of Gpseq-1.0.Gpseq.ForkJoinTaskSharedResult

    getReady(): boolean
    getValue(): object | null
    setValue(value?: object | null): void
    getError(): GLib.Error | null
    setError(value?: GLib.Error | null): void
    bakePromise(promise: Promise): void
}

class ForkJoinTaskSharedResult {

    // Own properties of Gpseq-1.0.Gpseq.ForkJoinTaskSharedResult

    static name: string

    // Constructors of Gpseq-1.0.Gpseq.ForkJoinTaskSharedResult

    constructor(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify) 
    static new(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify): ForkJoinTaskSharedResult
}

interface FuncTask_ConstructProps extends Task_ConstructProps, GObject.Object_ConstructProps {

    // Own constructor properties of Gpseq-1.0.Gpseq.FuncTask

    gType?: GObject.GType | null
    gDupFunc?: GObject.BoxedCopyFunc | null
    gDestroyFunc?: GLib.DestroyNotify | null
}

interface FuncTask extends Task {

    // Own properties of Gpseq-1.0.Gpseq.FuncTask

    readonly gType: GObject.GType
    readonly gDupFunc: GObject.BoxedCopyFunc
    readonly gDestroyFunc: GLib.DestroyNotify

    // Class property signals of Gpseq-1.0.Gpseq.FuncTask

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
    connect(sigName: "notify::future", callback: (...args: any[]) => void): number
    on(sigName: "notify::future", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::future", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::future", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::future", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class FuncTask extends GObject.Object {

    // Own properties of Gpseq-1.0.Gpseq.FuncTask

    static name: string
    static $gtype: GObject.GType<FuncTask>

    // Constructors of Gpseq-1.0.Gpseq.FuncTask

    constructor(config?: FuncTask_ConstructProps) 
    constructor(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, func: TaskFunc) 
    static new(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, func: TaskFunc): FuncTask
    _init(config?: FuncTask_ConstructProps): void
}

interface Future_ConstructProps extends Gee.Hashable_ConstructProps, Result_ConstructProps, GObject.Object_ConstructProps {

    // Own constructor properties of Gpseq-1.0.Gpseq.Future

    gType?: GObject.GType | null
    gDupFunc?: GObject.BoxedCopyFunc | null
    gDestroyFunc?: GLib.DestroyNotify | null
}

interface Future extends Gee.Hashable, Result {

    // Own properties of Gpseq-1.0.Gpseq.Future

    readonly gType: GObject.GType
    readonly gDupFunc: GObject.BoxedCopyFunc
    readonly gDestroyFunc: GLib.DestroyNotify
    readonly ready: boolean

    // Owm methods of Gpseq-1.0.Gpseq.Future

    getReady(): boolean
    wait(): object | null
    waitUntil(endTime: number): [ /* returnType */ boolean, /* value */ object | null ]
    transform(aType: GObject.GType, aDupFunc: GObject.BoxedCopyFunc, aDestroyFunc: GLib.DestroyNotify, func: any): Result

    // Class property signals of Gpseq-1.0.Gpseq.Future

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
    connect(sigName: "notify::ready", callback: (...args: any[]) => void): number
    on(sigName: "notify::ready", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::ready", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::ready", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::ready", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class Future extends GObject.Object {

    // Own properties of Gpseq-1.0.Gpseq.Future

    static name: string
    static $gtype: GObject.GType<Future>

    // Constructors of Gpseq-1.0.Gpseq.Future

    constructor(config?: Future_ConstructProps) 
    _init(config?: Future_ConstructProps): void
    static of(gType: GObject.GType, gDupFunc?: GObject.BoxedCopyFunc, gDestroyFunc?: GLib.DestroyNotify, value?: object | null): Future

    // Overloads of of

    static of(gType: GObject.GType, gDupFunc?: GObject.BoxedCopyFunc, gDestroyFunc?: GLib.DestroyNotify, value?: object | null): Result
    static of(...args: any[]): any
    static of(args_or_gType: any[] | GObject.GType, gDupFunc?: GObject.BoxedCopyFunc, gDestroyFunc?: GLib.DestroyNotify, value?: object | null): Future | Result | any
    static err(gType: GObject.GType, gDupFunc?: GObject.BoxedCopyFunc, gDestroyFunc?: GLib.DestroyNotify, exception?: GLib.Error): Future

    // Overloads of err

    static err(gType: GObject.GType, gDupFunc?: GObject.BoxedCopyFunc, gDestroyFunc?: GLib.DestroyNotify, exception?: GLib.Error): Result
    static err(...args: any[]): any
    static err(args_or_gType: any[] | GObject.GType, gDupFunc?: GObject.BoxedCopyFunc, gDestroyFunc?: GLib.DestroyNotify, exception?: GLib.Error): Future | Result | any
    static done(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, result: Result): Future
}

interface GenericArraySpliterator_ConstructProps extends Spliterator_ConstructProps, GObject.Object_ConstructProps {

    // Own constructor properties of Gpseq-1.0.Gpseq.GenericArraySpliterator

    gType?: GObject.GType | null
    gDupFunc?: GObject.BoxedCopyFunc | null
    gDestroyFunc?: GLib.DestroyNotify | null
}

interface GenericArraySpliterator extends Spliterator {

    // Own properties of Gpseq-1.0.Gpseq.GenericArraySpliterator

    readonly gType: GObject.GType
    readonly gDupFunc: GObject.BoxedCopyFunc
    readonly gDestroyFunc: GLib.DestroyNotify

    // Class property signals of Gpseq-1.0.Gpseq.GenericArraySpliterator

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
    connect(sigName: "notify::estimated-size", callback: (...args: any[]) => void): number
    on(sigName: "notify::estimated-size", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::estimated-size", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::estimated-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::estimated-size", ...args: any[]): void
    connect(sigName: "notify::is-size-known", callback: (...args: any[]) => void): number
    on(sigName: "notify::is-size-known", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::is-size-known", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::is-size-known", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::is-size-known", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class GenericArraySpliterator extends GObject.Object {

    // Own properties of Gpseq-1.0.Gpseq.GenericArraySpliterator

    static name: string
    static $gtype: GObject.GType<GenericArraySpliterator>

    // Constructors of Gpseq-1.0.Gpseq.GenericArraySpliterator

    constructor(config?: GenericArraySpliterator_ConstructProps) 
    constructor(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, array: object[], start: number, stop: number) 
    static new(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, array: object[], start: number, stop: number): GenericArraySpliterator
    _init(config?: GenericArraySpliterator_ConstructProps): void
}

interface IteratorSpliterator_ConstructProps extends Spliterator_ConstructProps, GObject.Object_ConstructProps {

    // Own constructor properties of Gpseq-1.0.Gpseq.IteratorSpliterator

    gType?: GObject.GType | null
    gDupFunc?: GObject.BoxedCopyFunc | null
    gDestroyFunc?: GLib.DestroyNotify | null
}

interface IteratorSpliterator extends Spliterator {

    // Own properties of Gpseq-1.0.Gpseq.IteratorSpliterator

    readonly gType: GObject.GType
    readonly gDupFunc: GObject.BoxedCopyFunc
    readonly gDestroyFunc: GLib.DestroyNotify

    // Class property signals of Gpseq-1.0.Gpseq.IteratorSpliterator

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
    connect(sigName: "notify::estimated-size", callback: (...args: any[]) => void): number
    on(sigName: "notify::estimated-size", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::estimated-size", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::estimated-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::estimated-size", ...args: any[]): void
    connect(sigName: "notify::is-size-known", callback: (...args: any[]) => void): number
    on(sigName: "notify::is-size-known", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::is-size-known", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::is-size-known", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::is-size-known", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class IteratorSpliterator extends GObject.Object {

    // Own properties of Gpseq-1.0.Gpseq.IteratorSpliterator

    static name: string
    static $gtype: GObject.GType<IteratorSpliterator>

    // Constructors of Gpseq-1.0.Gpseq.IteratorSpliterator

    constructor(config?: IteratorSpliterator_ConstructProps) 
    constructor(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, iterator: Gee.Iterator, estimatedSize: number, sizeKnown: boolean) 
    static new(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, iterator: Gee.Iterator, estimatedSize: number, sizeKnown: boolean): IteratorSpliterator
    static fromCollection(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, collection: Gee.Collection): IteratorSpliterator
    _init(config?: IteratorSpliterator_ConstructProps): void
}

interface ListSpliterator_ConstructProps extends Spliterator_ConstructProps, GObject.Object_ConstructProps {

    // Own constructor properties of Gpseq-1.0.Gpseq.ListSpliterator

    gType?: GObject.GType | null
    gDupFunc?: GObject.BoxedCopyFunc | null
    gDestroyFunc?: GLib.DestroyNotify | null
}

interface ListSpliterator extends Spliterator {

    // Own properties of Gpseq-1.0.Gpseq.ListSpliterator

    readonly gType: GObject.GType
    readonly gDupFunc: GObject.BoxedCopyFunc
    readonly gDestroyFunc: GLib.DestroyNotify

    // Class property signals of Gpseq-1.0.Gpseq.ListSpliterator

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
    connect(sigName: "notify::estimated-size", callback: (...args: any[]) => void): number
    on(sigName: "notify::estimated-size", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::estimated-size", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::estimated-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::estimated-size", ...args: any[]): void
    connect(sigName: "notify::is-size-known", callback: (...args: any[]) => void): number
    on(sigName: "notify::is-size-known", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::is-size-known", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::is-size-known", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::is-size-known", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class ListSpliterator extends GObject.Object {

    // Own properties of Gpseq-1.0.Gpseq.ListSpliterator

    static name: string
    static $gtype: GObject.GType<ListSpliterator>

    // Constructors of Gpseq-1.0.Gpseq.ListSpliterator

    constructor(config?: ListSpliterator_ConstructProps) 
    constructor(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, list: Gee.List, start: number, stop: number) 
    static new(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, list: Gee.List, start: number, stop: number): ListSpliterator
    _init(config?: ListSpliterator_ConstructProps): void
}

interface Optional_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of Gpseq-1.0.Gpseq.Optional

    gType?: GObject.GType | null
    gDupFunc?: GObject.BoxedCopyFunc | null
    gDestroyFunc?: GLib.DestroyNotify | null
}

interface Optional {

    // Own properties of Gpseq-1.0.Gpseq.Optional

    readonly gType: GObject.GType
    readonly gDupFunc: GObject.BoxedCopyFunc
    readonly gDestroyFunc: GLib.DestroyNotify
    readonly valueType: GObject.GType
    readonly value: object
    readonly isPresent: boolean

    // Owm methods of Gpseq-1.0.Gpseq.Optional

    getValueType(): GObject.GType
    getValue(): object | null
    getIsPresent(): boolean
    toString(): string
    ifPresent(consumer: GLib.Func): void
    orElse(other?: object | null): object | null
    orElseGet(supplier: SupplyFunc): object | null
    orElseThrow(errorSupplier?: SupplyFunc | null): object | null
    orElseFail(): object | null
    filter(pred: Gee.Predicate): Optional
    map(aType: GObject.GType, aDupFunc: GObject.BoxedCopyFunc, aDestroyFunc: GLib.DestroyNotify, mapper: Gee.MapFunc): Optional

    // Class property signals of Gpseq-1.0.Gpseq.Optional

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
    connect(sigName: "notify::value-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::value-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::value-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::value-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::value-type", ...args: any[]): void
    connect(sigName: "notify::value", callback: (...args: any[]) => void): number
    on(sigName: "notify::value", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::value", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::value", ...args: any[]): void
    connect(sigName: "notify::is-present", callback: (...args: any[]) => void): number
    on(sigName: "notify::is-present", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::is-present", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::is-present", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::is-present", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class Optional extends GObject.Object {

    // Own properties of Gpseq-1.0.Gpseq.Optional

    static name: string
    static $gtype: GObject.GType<Optional>

    // Constructors of Gpseq-1.0.Gpseq.Optional

    constructor(config?: Optional_ConstructProps) 
    static empty(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify): Optional
    static of(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, value?: object | null): Optional
    constructor(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify) 
    static new(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify): Optional
    _init(config?: Optional_ConstructProps): void
}

interface Promise {

    // Own fields of Gpseq-1.0.Gpseq.Promise

    refCount: number

    // Owm methods of Gpseq-1.0.Gpseq.Promise

    getFuture(): Future
    setValue(value?: object | null): void
    setException(exception: GLib.Error): void
}

class Promise {

    // Own properties of Gpseq-1.0.Gpseq.Promise

    static name: string

    // Constructors of Gpseq-1.0.Gpseq.Promise

    constructor(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify) 
    static new(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify): Promise
}

interface Seq_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of Gpseq-1.0.Gpseq.Seq

    gType?: GObject.GType | null
    gDupFunc?: GObject.BoxedCopyFunc | null
    gDestroyFunc?: GLib.DestroyNotify | null
}

interface Seq {

    // Own properties of Gpseq-1.0.Gpseq.Seq

    readonly gType: GObject.GType
    readonly gDupFunc: GObject.BoxedCopyFunc
    readonly gDestroyFunc: GLib.DestroyNotify
    readonly elementType: GObject.GType
    readonly taskEnv: TaskEnv
    readonly isClosed: boolean
    readonly isParallel: boolean

    // Owm methods of Gpseq-1.0.Gpseq.Seq

    getElementType(): GObject.GType
    getTaskEnv(): TaskEnv
    getIsClosed(): boolean
    close(): void
    getIsParallel(): boolean
    sequential(): Seq
    parallel(): Seq
    iterator(): Gee.Iterator
    spliterator(): Spliterator
    count(): Future
    distinct(hash: Gee.HashDataFunc | null, equal: Gee.EqualDataFunc | null): Seq
    allMatch(pred: Predicate): Future
    anyMatch(pred: Predicate): Future
    noneMatch(pred: Predicate): Future
    findAny(pred: Predicate): Future
    findFirst(pred: Predicate): Future
    skip(n: number): Seq
    limit(n: number): Seq
    chop(offset: number, length: number): Seq
    skipOrdered(n: number): Seq
    limitOrdered(n: number): Seq
    chopOrdered(offset: number, length: number): Seq
    filter(pred: Predicate): Seq
    fold(aType: GObject.GType, aDupFunc: GObject.BoxedCopyFunc, aDestroyFunc: GLib.DestroyNotify, accumulator: FoldFunc, combiner: CombineFunc, identity?: object | null): Future
    reduce(accumulator: CombineFunc): Future
    map(aType: GObject.GType, aDupFunc: GObject.BoxedCopyFunc, aDestroyFunc: GLib.DestroyNotify, mapper: MapFunc): Seq
    flatMap(aType: GObject.GType, aDupFunc: GObject.BoxedCopyFunc, aDestroyFunc: GLib.DestroyNotify, mapper: FlatMapFunc): Seq
    max(compare: GLib.CompareDataFunc | null): Future
    min(compare: GLib.CompareDataFunc | null): Future
    orderBy(compare: GLib.CompareDataFunc | null): Seq
    reverseOrderBy(compare: GLib.CompareDataFunc | null): Seq
    foreach(f: Func): Future
    collect(rType: GObject.GType, rDupFunc: GObject.BoxedCopyFunc, rDestroyFunc: GLib.DestroyNotify, aType: GObject.GType, aDupFunc: GObject.BoxedCopyFunc, aDestroyFunc: GLib.DestroyNotify, collector: Collector): Future
    collectOrdered(rType: GObject.GType, rDupFunc: GObject.BoxedCopyFunc, rDestroyFunc: GLib.DestroyNotify, aType: GObject.GType, aDupFunc: GObject.BoxedCopyFunc, aDestroyFunc: GLib.DestroyNotify, collector: Collector): Future
    groupBy(kType: GObject.GType, kDupFunc: GObject.BoxedCopyFunc, kDestroyFunc: GLib.DestroyNotify, classifier: MapFunc): Future
    partition(pred: Predicate): Future
    toGenericArray(): Future
    toList(): Future
    toSet(hash: Gee.HashDataFunc | null, equal: Gee.EqualDataFunc | null): Future
    toMap(kType: GObject.GType, kDupFunc: GObject.BoxedCopyFunc, kDestroyFunc: GLib.DestroyNotify, vType: GObject.GType, vDupFunc: GObject.BoxedCopyFunc, vDestroyFunc: GLib.DestroyNotify, keyMapper: MapFunc, valMapper: MapFunc, merger: CombineFunc | null, keyHash: Gee.HashDataFunc | null, keyEqual: Gee.EqualDataFunc | null, valueEqual: Gee.EqualDataFunc | null): Future

    // Class property signals of Gpseq-1.0.Gpseq.Seq

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
    connect(sigName: "notify::element-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::element-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::element-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::element-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::element-type", ...args: any[]): void
    connect(sigName: "notify::task-env", callback: (...args: any[]) => void): number
    on(sigName: "notify::task-env", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::task-env", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::task-env", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::task-env", ...args: any[]): void
    connect(sigName: "notify::is-closed", callback: (...args: any[]) => void): number
    on(sigName: "notify::is-closed", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::is-closed", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::is-closed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::is-closed", ...args: any[]): void
    connect(sigName: "notify::is-parallel", callback: (...args: any[]) => void): number
    on(sigName: "notify::is-parallel", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::is-parallel", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::is-parallel", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::is-parallel", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class Seq extends GObject.Object {

    // Own properties of Gpseq-1.0.Gpseq.Seq

    static name: string
    static $gtype: GObject.GType<Seq>

    // Constructors of Gpseq-1.0.Gpseq.Seq

    constructor(config?: Seq_ConstructProps) 
    constructor(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, spliterator: Spliterator, env?: TaskEnv | null) 
    static new(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, spliterator: Spliterator, env?: TaskEnv | null): Seq
    _init(config?: Seq_ConstructProps): void
    static ofArray(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, array: object[], env?: TaskEnv | null): Seq
    static ofOwnedArray(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, array: object[], env?: TaskEnv | null): Seq
    static ofGenericArray(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, array: object[], env?: TaskEnv | null): Seq
    static ofIterator(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, iterator: Gee.Iterator, estimatedSize: number, sizeKnown: boolean, env?: TaskEnv | null): Seq
    static ofCollection(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, collection: Gee.Collection, env?: TaskEnv | null): Seq
    static ofList(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, list: Gee.List, env?: TaskEnv | null): Seq
    static ofSupplier(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, supplier: Supplier, env?: TaskEnv | null): Seq
    static ofSupplyFunc(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, func: SupplyFunc, env?: TaskEnv | null): Seq
    static iterate(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, seed: object | null, pred: Gee.Predicate, next: Gee.MapFunc, env?: TaskEnv | null): Seq
    static empty(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify): Seq
}

interface SpliteratorTask_ConstructProps extends ForkJoinTask_ConstructProps {

    // Own constructor properties of Gpseq-1.0.Gpseq.SpliteratorTask

    rType?: GObject.GType | null
    rDupFunc?: GObject.BoxedCopyFunc | null
    rDestroyFunc?: GLib.DestroyNotify | null
    gType?: GObject.GType | null
    gDupFunc?: GObject.BoxedCopyFunc | null
    gDestroyFunc?: GLib.DestroyNotify | null
}

interface SpliteratorTask {

    // Own properties of Gpseq-1.0.Gpseq.SpliteratorTask

    readonly rType: GObject.GType
    readonly rDupFunc: GObject.BoxedCopyFunc
    readonly rDestroyFunc: GLib.DestroyNotify
    readonly gType: GObject.GType
    readonly gDupFunc: GObject.BoxedCopyFunc
    readonly gDestroyFunc: GLib.DestroyNotify
    readonly spliterator: Spliterator
    readonly leftChild: SpliteratorTask
    readonly rightChild: SpliteratorTask
    readonly isLeaf: boolean
    readonly isLeftmost: boolean
    readonly emptyResult: object

    // Owm methods of Gpseq-1.0.Gpseq.SpliteratorTask

    getSpliterator(): Spliterator
    getLeftChild(): SpliteratorTask | null
    getRightChild(): SpliteratorTask | null
    getIsLeaf(): boolean
    getIsLeftmost(): boolean
    cancelLaterNodes(): void
    getEmptyResult(): object | null
    leafCompute(): object | null
    mergeResults(left?: object | null, right?: object | null): object | null
    makeChild(spliterator: Spliterator): SpliteratorTask

    // Class property signals of Gpseq-1.0.Gpseq.SpliteratorTask

    connect(sigName: "notify::r-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::r-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::r-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::r-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::r-type", ...args: any[]): void
    connect(sigName: "notify::r-dup-func", callback: (...args: any[]) => void): number
    on(sigName: "notify::r-dup-func", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::r-dup-func", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::r-dup-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::r-dup-func", ...args: any[]): void
    connect(sigName: "notify::r-destroy-func", callback: (...args: any[]) => void): number
    on(sigName: "notify::r-destroy-func", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::r-destroy-func", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::r-destroy-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::r-destroy-func", ...args: any[]): void
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
    connect(sigName: "notify::spliterator", callback: (...args: any[]) => void): number
    on(sigName: "notify::spliterator", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::spliterator", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::spliterator", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::spliterator", ...args: any[]): void
    connect(sigName: "notify::left-child", callback: (...args: any[]) => void): number
    on(sigName: "notify::left-child", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::left-child", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::left-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::left-child", ...args: any[]): void
    connect(sigName: "notify::right-child", callback: (...args: any[]) => void): number
    on(sigName: "notify::right-child", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::right-child", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::right-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::right-child", ...args: any[]): void
    connect(sigName: "notify::is-leaf", callback: (...args: any[]) => void): number
    on(sigName: "notify::is-leaf", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::is-leaf", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::is-leaf", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::is-leaf", ...args: any[]): void
    connect(sigName: "notify::is-leftmost", callback: (...args: any[]) => void): number
    on(sigName: "notify::is-leftmost", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::is-leftmost", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::is-leftmost", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::is-leftmost", ...args: any[]): void
    connect(sigName: "notify::empty-result", callback: (...args: any[]) => void): number
    on(sigName: "notify::empty-result", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::empty-result", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::empty-result", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::empty-result", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (...args: any[]) => void): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::root", callback: (...args: any[]) => void): number
    on(sigName: "notify::root", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::root", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::root", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::root", ...args: any[]): void
    connect(sigName: "notify::is-root", callback: (...args: any[]) => void): number
    on(sigName: "notify::is-root", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::is-root", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::is-root", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::is-root", ...args: any[]): void
    connect(sigName: "notify::threshold", callback: (...args: any[]) => void): number
    on(sigName: "notify::threshold", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::threshold", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::threshold", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::threshold", ...args: any[]): void
    connect(sigName: "notify::max-depth", callback: (...args: any[]) => void): number
    on(sigName: "notify::max-depth", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::max-depth", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::max-depth", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::max-depth", ...args: any[]): void
    connect(sigName: "notify::depth", callback: (...args: any[]) => void): number
    on(sigName: "notify::depth", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::depth", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::depth", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::depth", ...args: any[]): void
    connect(sigName: "notify::executor", callback: (...args: any[]) => void): number
    on(sigName: "notify::executor", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::executor", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::executor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::executor", ...args: any[]): void
    connect(sigName: "notify::promise", callback: (...args: any[]) => void): number
    on(sigName: "notify::promise", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::promise", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::promise", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::promise", ...args: any[]): void
    connect(sigName: "notify::shared-result", callback: (...args: any[]) => void): number
    on(sigName: "notify::shared-result", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::shared-result", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::shared-result", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::shared-result", ...args: any[]): void
    connect(sigName: "notify::is-cancelled", callback: (...args: any[]) => void): number
    on(sigName: "notify::is-cancelled", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::is-cancelled", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::is-cancelled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::is-cancelled", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class SpliteratorTask extends ForkJoinTask {

    // Own properties of Gpseq-1.0.Gpseq.SpliteratorTask

    static name: string
    static $gtype: GObject.GType<SpliteratorTask>

    // Constructors of Gpseq-1.0.Gpseq.SpliteratorTask

    constructor(config?: SpliteratorTask_ConstructProps) 
    _init(config?: SpliteratorTask_ConstructProps): void
}

interface SubArray_ConstructProps extends Gee.Traversable_ConstructProps, Gee.Iterable_ConstructProps, GObject.Object_ConstructProps {

    // Own constructor properties of Gpseq-1.0.Gpseq.SubArray

    gType?: GObject.GType | null
    gDupFunc?: GObject.BoxedCopyFunc | null
    gDestroyFunc?: GLib.DestroyNotify | null
}

interface SubArray extends Gee.Traversable, Gee.Iterable {

    // Own properties of Gpseq-1.0.Gpseq.SubArray

    readonly gType: GObject.GType
    readonly gDupFunc: GObject.BoxedCopyFunc
    readonly gDestroyFunc: GLib.DestroyNotify
    readonly size: number

    // Owm methods of Gpseq-1.0.Gpseq.SubArray

    getData(): object[]

    // Overloads of getData

    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     * @param key name of the key for that association
     */
    getData(key?: string): object | null
    getData(...args: any[]): any
    getData(args_or_key?: any[] | string): object[] | object | null | any
    getSize(): number
    get(index: number): object | null
    set(index: number, item?: object | null): void
    sort(compareFunc: GLib.CompareDataFunc | null): void
    copy(start: number, src: SubArray, srcStart: number, count: number): void
    copyArray(start: number, src: object[], srcStart: number, count: number): void
    subArray(start: number, stop: number): SubArray

    // Class property signals of Gpseq-1.0.Gpseq.SubArray

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
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class SubArray extends GObject.Object {

    // Own properties of Gpseq-1.0.Gpseq.SubArray

    static name: string
    static $gtype: GObject.GType<SubArray>

    // Constructors of Gpseq-1.0.Gpseq.SubArray

    constructor(config?: SubArray_ConstructProps) 
    constructor(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, data: object[]) 
    static new(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, data: object[]): SubArray
    static fromSubArray(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, array: SubArray, start: number, stop: number): SubArray
    _init(config?: SubArray_ConstructProps): void
}

interface SubArraySpliterator_ConstructProps extends Spliterator_ConstructProps, GObject.Object_ConstructProps {

    // Own constructor properties of Gpseq-1.0.Gpseq.SubArraySpliterator

    gType?: GObject.GType | null
    gDupFunc?: GObject.BoxedCopyFunc | null
    gDestroyFunc?: GLib.DestroyNotify | null
}

interface SubArraySpliterator extends Spliterator {

    // Own properties of Gpseq-1.0.Gpseq.SubArraySpliterator

    readonly gType: GObject.GType
    readonly gDupFunc: GObject.BoxedCopyFunc
    readonly gDestroyFunc: GLib.DestroyNotify

    // Class property signals of Gpseq-1.0.Gpseq.SubArraySpliterator

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
    connect(sigName: "notify::estimated-size", callback: (...args: any[]) => void): number
    on(sigName: "notify::estimated-size", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::estimated-size", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::estimated-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::estimated-size", ...args: any[]): void
    connect(sigName: "notify::is-size-known", callback: (...args: any[]) => void): number
    on(sigName: "notify::is-size-known", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::is-size-known", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::is-size-known", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::is-size-known", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class SubArraySpliterator extends GObject.Object {

    // Own properties of Gpseq-1.0.Gpseq.SubArraySpliterator

    static name: string
    static $gtype: GObject.GType<SubArraySpliterator>

    // Constructors of Gpseq-1.0.Gpseq.SubArraySpliterator

    constructor(config?: SubArraySpliterator_ConstructProps) 
    constructor(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, array: SubArray, start: number, stop: number) 
    static new(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, array: SubArray, start: number, stop: number): SubArraySpliterator
    _init(config?: SubArraySpliterator_ConstructProps): void
}

interface SupplierSpliterator_ConstructProps extends Spliterator_ConstructProps, GObject.Object_ConstructProps {

    // Own constructor properties of Gpseq-1.0.Gpseq.SupplierSpliterator

    gType?: GObject.GType | null
    gDupFunc?: GObject.BoxedCopyFunc | null
    gDestroyFunc?: GLib.DestroyNotify | null
}

interface SupplierSpliterator extends Spliterator {

    // Own properties of Gpseq-1.0.Gpseq.SupplierSpliterator

    readonly gType: GObject.GType
    readonly gDupFunc: GObject.BoxedCopyFunc
    readonly gDestroyFunc: GLib.DestroyNotify

    // Class property signals of Gpseq-1.0.Gpseq.SupplierSpliterator

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
    connect(sigName: "notify::estimated-size", callback: (...args: any[]) => void): number
    on(sigName: "notify::estimated-size", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::estimated-size", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::estimated-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::estimated-size", ...args: any[]): void
    connect(sigName: "notify::is-size-known", callback: (...args: any[]) => void): number
    on(sigName: "notify::is-size-known", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::is-size-known", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::is-size-known", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::is-size-known", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class SupplierSpliterator extends GObject.Object {

    // Own properties of Gpseq-1.0.Gpseq.SupplierSpliterator

    static name: string
    static $gtype: GObject.GType<SupplierSpliterator>

    // Constructors of Gpseq-1.0.Gpseq.SupplierSpliterator

    constructor(config?: SupplierSpliterator_ConstructProps) 
    constructor(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, supplier: Supplier) 
    static new(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, supplier: Supplier): SupplierSpliterator
    _init(config?: SupplierSpliterator_ConstructProps): void
}

interface TaskEnv_ConstructProps extends GObject.Object_ConstructProps {
}

interface TaskEnv {

    // Own properties of Gpseq-1.0.Gpseq.TaskEnv

    readonly executor: Executor

    // Owm methods of Gpseq-1.0.Gpseq.TaskEnv

    getExecutor(): Executor
    resolveThreshold(elements: number, threads: number): number
    resolveMaxDepth(elements: number, threads: number): number

    // Class property signals of Gpseq-1.0.Gpseq.TaskEnv

    connect(sigName: "notify::executor", callback: (...args: any[]) => void): number
    on(sigName: "notify::executor", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::executor", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::executor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::executor", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class TaskEnv extends GObject.Object {

    // Own properties of Gpseq-1.0.Gpseq.TaskEnv

    static name: string
    static $gtype: GObject.GType<TaskEnv>

    // Constructors of Gpseq-1.0.Gpseq.TaskEnv

    constructor(config?: TaskEnv_ConstructProps) 
    _init(config?: TaskEnv_ConstructProps): void
    static getDefaultTaskEnv(): TaskEnv
    static setDefaultTaskEnv(taskEnv: TaskEnv): void
    static getCommonTaskEnv(): TaskEnv
    static push(taskEnv: TaskEnv): void
    static pop(): void
    static apply(taskEnv: TaskEnv, func: VoidFunc): void
}

interface WaitGroup_ConstructProps extends GObject.Object_ConstructProps {
}

interface WaitGroup {

    // Owm methods of Gpseq-1.0.Gpseq.WaitGroup

    add(delta: number): void
    done(): void
    task(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, func: TaskFunc): Future
    run(func: VoidTaskFunc): Future
    wait(): void
    waitUntil(endTime: number): boolean

    // Class property signals of Gpseq-1.0.Gpseq.WaitGroup

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class WaitGroup extends GObject.Object {

    // Own properties of Gpseq-1.0.Gpseq.WaitGroup

    static name: string
    static $gtype: GObject.GType<WaitGroup>

    // Constructors of Gpseq-1.0.Gpseq.WaitGroup

    constructor(config?: WaitGroup_ConstructProps) 
    constructor() 
    static new(): WaitGroup
    _init(config?: WaitGroup_ConstructProps): void
}

interface WorkerPool_ConstructProps extends Executor_ConstructProps, GObject.Object_ConstructProps {

    // Own constructor properties of Gpseq-1.0.Gpseq.WorkerPool

    maxThreads?: number | null
}

interface WorkerPool extends Executor {

    // Own properties of Gpseq-1.0.Gpseq.WorkerPool

    maxThreads: number
    readonly numThreads: number
    readonly factory: ThreadFactory
    readonly isTerminating: boolean
    readonly isTerminated: boolean
    readonly isTerminatingStarted: boolean

    // Owm methods of Gpseq-1.0.Gpseq.WorkerPool

    getMaxThreads(): number
    setMaxThreads(value: number): void
    getNumThreads(): number
    getFactory(): ThreadFactory
    getIsTerminating(): boolean
    getIsTerminated(): boolean
    getIsTerminatingStarted(): boolean
    terminate(): void
    terminateNow(): void
    waitTermination(): void
    waitTerminationUntil(endTime: number): void

    // Class property signals of Gpseq-1.0.Gpseq.WorkerPool

    connect(sigName: "notify::max-threads", callback: (...args: any[]) => void): number
    on(sigName: "notify::max-threads", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::max-threads", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::max-threads", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::max-threads", ...args: any[]): void
    connect(sigName: "notify::num-threads", callback: (...args: any[]) => void): number
    on(sigName: "notify::num-threads", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::num-threads", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::num-threads", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::num-threads", ...args: any[]): void
    connect(sigName: "notify::factory", callback: (...args: any[]) => void): number
    on(sigName: "notify::factory", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::factory", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::factory", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::factory", ...args: any[]): void
    connect(sigName: "notify::is-terminating", callback: (...args: any[]) => void): number
    on(sigName: "notify::is-terminating", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::is-terminating", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::is-terminating", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::is-terminating", ...args: any[]): void
    connect(sigName: "notify::is-terminated", callback: (...args: any[]) => void): number
    on(sigName: "notify::is-terminated", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::is-terminated", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::is-terminated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::is-terminated", ...args: any[]): void
    connect(sigName: "notify::is-terminating-started", callback: (...args: any[]) => void): number
    on(sigName: "notify::is-terminating-started", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::is-terminating-started", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::is-terminating-started", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::is-terminating-started", ...args: any[]): void
    connect(sigName: "notify::parallels", callback: (...args: any[]) => void): number
    on(sigName: "notify::parallels", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::parallels", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::parallels", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::parallels", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class WorkerPool extends GObject.Object {

    // Own properties of Gpseq-1.0.Gpseq.WorkerPool

    static name: string
    static $gtype: GObject.GType<WorkerPool>

    // Constructors of Gpseq-1.0.Gpseq.WorkerPool

    constructor(config?: WorkerPool_ConstructProps) 
    static withDefaults(): WorkerPool
    constructor(parallels: number, factory: ThreadFactory) 
    static new(parallels: number, factory: ThreadFactory): WorkerPool
    _init(config?: WorkerPool_ConstructProps): void
    static getDefaultFactory(): ThreadFactory
}

interface WorkerThread_ConstructProps extends GObject.Object_ConstructProps {
}

interface WorkerThread {

    // Own properties of Gpseq-1.0.Gpseq.WorkerThread

    readonly thread: GLib.Thread
    readonly pool: WorkerPool
    readonly name: string
    readonly isStarted: boolean
    readonly isTerminated: boolean
    readonly isAlive: boolean

    // Owm methods of Gpseq-1.0.Gpseq.WorkerThread

    getThread(): GLib.Thread | null
    getPool(): WorkerPool
    getName(): string
    getIsStarted(): boolean
    getIsTerminated(): boolean
    getIsAlive(): boolean
    start(): void
    join(): void
    blocking(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, func: TaskFunc): object | null

    // Class property signals of Gpseq-1.0.Gpseq.WorkerThread

    connect(sigName: "notify::thread", callback: (...args: any[]) => void): number
    on(sigName: "notify::thread", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::thread", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::thread", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::thread", ...args: any[]): void
    connect(sigName: "notify::pool", callback: (...args: any[]) => void): number
    on(sigName: "notify::pool", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::pool", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::pool", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::pool", ...args: any[]): void
    connect(sigName: "notify::name", callback: (...args: any[]) => void): number
    on(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::is-started", callback: (...args: any[]) => void): number
    on(sigName: "notify::is-started", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::is-started", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::is-started", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::is-started", ...args: any[]): void
    connect(sigName: "notify::is-terminated", callback: (...args: any[]) => void): number
    on(sigName: "notify::is-terminated", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::is-terminated", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::is-terminated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::is-terminated", ...args: any[]): void
    connect(sigName: "notify::is-alive", callback: (...args: any[]) => void): number
    on(sigName: "notify::is-alive", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::is-alive", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::is-alive", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::is-alive", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class WorkerThread extends GObject.Object {

    // Own properties of Gpseq-1.0.Gpseq.WorkerThread

    static name: string
    static $gtype: GObject.GType<WorkerThread>

    // Constructors of Gpseq-1.0.Gpseq.WorkerThread

    constructor(config?: WorkerThread_ConstructProps) 
    constructor(pool: WorkerPool) 
    static new(pool: WorkerPool): WorkerThread
    _init(config?: WorkerThread_ConstructProps): void
    static getBy(thread: GLib.Thread): WorkerThread | null
    static self(): WorkerThread | null
}

interface Wrapper_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of Gpseq-1.0.Gpseq.Wrapper

    gType?: GObject.GType | null
    gDupFunc?: GObject.BoxedCopyFunc | null
    gDestroyFunc?: GLib.DestroyNotify | null
}

interface Wrapper {

    // Own properties of Gpseq-1.0.Gpseq.Wrapper

    readonly gType: GObject.GType
    readonly gDupFunc: GObject.BoxedCopyFunc
    readonly gDestroyFunc: GLib.DestroyNotify
    readonly value: object
    readonly valueType: GObject.GType

    // Owm methods of Gpseq-1.0.Gpseq.Wrapper

    getValue(): object | null
    getValueType(): GObject.GType

    // Class property signals of Gpseq-1.0.Gpseq.Wrapper

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
    connect(sigName: "notify::value", callback: (...args: any[]) => void): number
    on(sigName: "notify::value", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::value", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::value", ...args: any[]): void
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

class Wrapper extends GObject.Object {

    // Own properties of Gpseq-1.0.Gpseq.Wrapper

    static name: string
    static $gtype: GObject.GType<Wrapper>

    // Constructors of Gpseq-1.0.Gpseq.Wrapper

    constructor(config?: Wrapper_ConstructProps) 
    constructor(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, value?: object | null) 
    static new(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, value?: object | null): Wrapper
    _init(config?: Wrapper_ConstructProps): void
}

interface ArraySpliteratorClass {
}

abstract class ArraySpliteratorClass {

    // Own properties of Gpseq-1.0.Gpseq.ArraySpliteratorClass

    static name: string
}

interface ArraySpliteratorPrivate {
}

class ArraySpliteratorPrivate {

    // Own properties of Gpseq-1.0.Gpseq.ArraySpliteratorPrivate

    static name: string
}

interface ForkJoinTaskClass {

    // Own fields of Gpseq-1.0.Gpseq.ForkJoinTaskClass

    compute: (self: ForkJoinTask) => void
}

abstract class ForkJoinTaskClass {

    // Own properties of Gpseq-1.0.Gpseq.ForkJoinTaskClass

    static name: string
}

interface ForkJoinTaskPrivate {
}

class ForkJoinTaskPrivate {

    // Own properties of Gpseq-1.0.Gpseq.ForkJoinTaskPrivate

    static name: string
}

interface ForkJoinTaskSharedResultClass {
}

abstract class ForkJoinTaskSharedResultClass {

    // Own properties of Gpseq-1.0.Gpseq.ForkJoinTaskSharedResultClass

    static name: string
}

interface ForkJoinTaskSharedResultPrivate {
}

class ForkJoinTaskSharedResultPrivate {

    // Own properties of Gpseq-1.0.Gpseq.ForkJoinTaskSharedResultPrivate

    static name: string
}

interface FuncTaskClass {
}

abstract class FuncTaskClass {

    // Own properties of Gpseq-1.0.Gpseq.FuncTaskClass

    static name: string
}

interface FuncTaskPrivate {
}

class FuncTaskPrivate {

    // Own properties of Gpseq-1.0.Gpseq.FuncTaskPrivate

    static name: string
}

interface FutureClass {

    // Own fields of Gpseq-1.0.Gpseq.FutureClass

    wait: (self: Future) => object | null
    waitUntil: (self: Future, endTime: number) => [ /* returnType */ boolean, /* value */ object | null ]
    transform: (self: Future, aType: GObject.GType, aDupFunc: GObject.BoxedCopyFunc, aDestroyFunc: GLib.DestroyNotify, func: any) => Result
}

abstract class FutureClass {

    // Own properties of Gpseq-1.0.Gpseq.FutureClass

    static name: string
}

interface FuturePrivate {
}

class FuturePrivate {

    // Own properties of Gpseq-1.0.Gpseq.FuturePrivate

    static name: string
}

interface GenericArraySpliteratorClass {
}

abstract class GenericArraySpliteratorClass {

    // Own properties of Gpseq-1.0.Gpseq.GenericArraySpliteratorClass

    static name: string
}

interface GenericArraySpliteratorPrivate {
}

class GenericArraySpliteratorPrivate {

    // Own properties of Gpseq-1.0.Gpseq.GenericArraySpliteratorPrivate

    static name: string
}

interface IteratorSpliteratorClass {
}

abstract class IteratorSpliteratorClass {

    // Own properties of Gpseq-1.0.Gpseq.IteratorSpliteratorClass

    static name: string
}

interface IteratorSpliteratorPrivate {
}

class IteratorSpliteratorPrivate {

    // Own properties of Gpseq-1.0.Gpseq.IteratorSpliteratorPrivate

    static name: string
}

interface ListSpliteratorClass {
}

abstract class ListSpliteratorClass {

    // Own properties of Gpseq-1.0.Gpseq.ListSpliteratorClass

    static name: string
}

interface ListSpliteratorPrivate {
}

class ListSpliteratorPrivate {

    // Own properties of Gpseq-1.0.Gpseq.ListSpliteratorPrivate

    static name: string
}

interface OptionalClass {
}

abstract class OptionalClass {

    // Own properties of Gpseq-1.0.Gpseq.OptionalClass

    static name: string
}

interface OptionalPrivate {
}

class OptionalPrivate {

    // Own properties of Gpseq-1.0.Gpseq.OptionalPrivate

    static name: string
}

interface PromiseClass {
}

abstract class PromiseClass {

    // Own properties of Gpseq-1.0.Gpseq.PromiseClass

    static name: string
}

interface PromisePrivate {
}

class PromisePrivate {

    // Own properties of Gpseq-1.0.Gpseq.PromisePrivate

    static name: string
}

interface SeqClass {
}

abstract class SeqClass {

    // Own properties of Gpseq-1.0.Gpseq.SeqClass

    static name: string
}

interface SeqPrivate {
}

class SeqPrivate {

    // Own properties of Gpseq-1.0.Gpseq.SeqPrivate

    static name: string
}

interface SpliteratorTaskClass {

    // Own fields of Gpseq-1.0.Gpseq.SpliteratorTaskClass

    leafCompute: (self: SpliteratorTask) => object | null
    mergeResults: (self: SpliteratorTask, left?: object | null, right?: object | null) => object | null
    makeChild: (self: SpliteratorTask, spliterator: Spliterator) => SpliteratorTask
}

abstract class SpliteratorTaskClass {

    // Own properties of Gpseq-1.0.Gpseq.SpliteratorTaskClass

    static name: string
}

interface SpliteratorTaskPrivate {
}

class SpliteratorTaskPrivate {

    // Own properties of Gpseq-1.0.Gpseq.SpliteratorTaskPrivate

    static name: string
}

interface SubArrayClass {
}

abstract class SubArrayClass {

    // Own properties of Gpseq-1.0.Gpseq.SubArrayClass

    static name: string
}

interface SubArrayPrivate {
}

class SubArrayPrivate {

    // Own properties of Gpseq-1.0.Gpseq.SubArrayPrivate

    static name: string
}

interface SubArraySpliteratorClass {
}

abstract class SubArraySpliteratorClass {

    // Own properties of Gpseq-1.0.Gpseq.SubArraySpliteratorClass

    static name: string
}

interface SubArraySpliteratorPrivate {
}

class SubArraySpliteratorPrivate {

    // Own properties of Gpseq-1.0.Gpseq.SubArraySpliteratorPrivate

    static name: string
}

interface SupplierSpliteratorClass {
}

abstract class SupplierSpliteratorClass {

    // Own properties of Gpseq-1.0.Gpseq.SupplierSpliteratorClass

    static name: string
}

interface SupplierSpliteratorPrivate {
}

class SupplierSpliteratorPrivate {

    // Own properties of Gpseq-1.0.Gpseq.SupplierSpliteratorPrivate

    static name: string
}

interface TaskEnvClass {

    // Own fields of Gpseq-1.0.Gpseq.TaskEnvClass

    resolveThreshold: (self: TaskEnv, elements: number, threads: number) => number
    resolveMaxDepth: (self: TaskEnv, elements: number, threads: number) => number
}

abstract class TaskEnvClass {

    // Own properties of Gpseq-1.0.Gpseq.TaskEnvClass

    static name: string
}

interface TaskEnvPrivate {
}

class TaskEnvPrivate {

    // Own properties of Gpseq-1.0.Gpseq.TaskEnvPrivate

    static name: string
}

interface WaitGroupClass {
}

abstract class WaitGroupClass {

    // Own properties of Gpseq-1.0.Gpseq.WaitGroupClass

    static name: string
}

interface WaitGroupPrivate {
}

class WaitGroupPrivate {

    // Own properties of Gpseq-1.0.Gpseq.WaitGroupPrivate

    static name: string
}

interface WorkerPoolClass {
}

abstract class WorkerPoolClass {

    // Own properties of Gpseq-1.0.Gpseq.WorkerPoolClass

    static name: string
}

interface WorkerPoolPrivate {
}

class WorkerPoolPrivate {

    // Own properties of Gpseq-1.0.Gpseq.WorkerPoolPrivate

    static name: string
}

interface WorkerThreadClass {
}

abstract class WorkerThreadClass {

    // Own properties of Gpseq-1.0.Gpseq.WorkerThreadClass

    static name: string
}

interface WorkerThreadPrivate {
}

class WorkerThreadPrivate {

    // Own properties of Gpseq-1.0.Gpseq.WorkerThreadPrivate

    static name: string
}

interface WrapperClass {
}

abstract class WrapperClass {

    // Own properties of Gpseq-1.0.Gpseq.WrapperClass

    static name: string
}

interface WrapperPrivate {
}

class WrapperPrivate {

    // Own properties of Gpseq-1.0.Gpseq.WrapperPrivate

    static name: string
}

interface ChannelIface {
}

abstract class ChannelIface {

    // Own properties of Gpseq-1.0.Gpseq.ChannelIface

    static name: string
}

interface ChannelBaseIface {

    // Own fields of Gpseq-1.0.Gpseq.ChannelBaseIface

    close: (self: ChannelBase) => void
    getCapacity: (self: ChannelBase) => Optional
    getLength: (self: ChannelBase) => number
    getIsFull: (self: ChannelBase) => boolean
    getIsEmpty: (self: ChannelBase) => boolean
}

abstract class ChannelBaseIface {

    // Own properties of Gpseq-1.0.Gpseq.ChannelBaseIface

    static name: string
}

interface CollectorIface {

    // Own fields of Gpseq-1.0.Gpseq.CollectorIface

    createAccumulator: (self: Collector) => object | null
    accumulate: (self: Collector, g?: object | null, a?: object | null) => void
    combine: (self: Collector, a?: object | null, b?: object | null) => object | null
    finish: (self: Collector, a?: object | null) => object | null
    getFeatures: (self: Collector) => CollectorFeatures
}

abstract class CollectorIface {

    // Own properties of Gpseq-1.0.Gpseq.CollectorIface

    static name: string
}

interface ExecutorIface {

    // Own fields of Gpseq-1.0.Gpseq.ExecutorIface

    submit: (self: Executor, task: Task) => void
    getParallels: (self: Executor) => number
}

abstract class ExecutorIface {

    // Own properties of Gpseq-1.0.Gpseq.ExecutorIface

    static name: string
}

interface ReceiverIface {

    // Own fields of Gpseq-1.0.Gpseq.ReceiverIface

    recv: (self: Receiver) => Result
    recvUntil: (self: Receiver, endTime: number) => Result
    tryRecv: (self: Receiver) => Result
}

abstract class ReceiverIface {

    // Own properties of Gpseq-1.0.Gpseq.ReceiverIface

    static name: string
}

interface ResultIface {

    // Own fields of Gpseq-1.0.Gpseq.ResultIface

    future: (self: Result) => Future
    get: (self: Result) => object | null
    transform: (self: Result, aType: GObject.GType, aDupFunc: GObject.BoxedCopyFunc, aDestroyFunc: GLib.DestroyNotify, func: any) => Result
    flatMap: (self: Result, aType: GObject.GType, aDupFunc: GObject.BoxedCopyFunc, aDestroyFunc: GLib.DestroyNotify, func: any) => Result
    map: (self: Result, aType: GObject.GType, aDupFunc: GObject.BoxedCopyFunc, aDestroyFunc: GLib.DestroyNotify, func: any) => Result
    mapErr: (self: Result, func: any) => Result
    zip: (self: Result, aType: GObject.GType, aDupFunc: GObject.BoxedCopyFunc, aDestroyFunc: GLib.DestroyNotify, bType: GObject.GType, bDupFunc: GObject.BoxedCopyFunc, bDestroyFunc: GLib.DestroyNotify, zipFunc: any, second: Result) => Result
    then: (self: Result, func: GLib.Func) => Result
    andThen: (self: Result, func: Func) => Result
}

abstract class ResultIface {

    // Own properties of Gpseq-1.0.Gpseq.ResultIface

    static name: string
}

interface SenderIface {

    // Own fields of Gpseq-1.0.Gpseq.SenderIface

    send: (self: Sender, data?: object | null) => Result
    sendUntil: (self: Sender, data: object | null, endTime: number) => Result
    trySend: (self: Sender, data?: object | null) => Result
}

abstract class SenderIface {

    // Own properties of Gpseq-1.0.Gpseq.SenderIface

    static name: string
}

interface SpliteratorIface {

    // Own fields of Gpseq-1.0.Gpseq.SpliteratorIface

    trySplit: (self: Spliterator) => Spliterator | null
    tryAdvance: (self: Spliterator, consumer: Func) => boolean
    each: (self: Spliterator, f: Func) => void
    eachChunk: (self: Spliterator, f: EachChunkFunc) => boolean
    getEstimatedSize: (self: Spliterator) => number
    getIsSizeKnown: (self: Spliterator) => boolean
}

abstract class SpliteratorIface {

    // Own properties of Gpseq-1.0.Gpseq.SpliteratorIface

    static name: string
}

interface SupplierIface {

    // Own fields of Gpseq-1.0.Gpseq.SupplierIface

    supply: (self: Supplier) => object | null
}

abstract class SupplierIface {

    // Own properties of Gpseq-1.0.Gpseq.SupplierIface

    static name: string
}

interface TaskIface {

    // Own fields of Gpseq-1.0.Gpseq.TaskIface

    compute: (self: Task) => void
    getFuture: (self: Task) => Future
}

abstract class TaskIface {

    // Own properties of Gpseq-1.0.Gpseq.TaskIface

    static name: string
}

interface ThreadFactoryIface {

    // Own fields of Gpseq-1.0.Gpseq.ThreadFactoryIface

    createThread: (self: ThreadFactory, pool: WorkerPool) => WorkerThread
}

abstract class ThreadFactoryIface {

    // Own properties of Gpseq-1.0.Gpseq.ThreadFactoryIface

    static name: string
}

interface CacheLinePad {
}

class CacheLinePad {

    // Own properties of Gpseq-1.0.Gpseq.CacheLinePad

    static name: string
}

}
export default Gpseq;