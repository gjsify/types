// @ts-nocheck

/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * Gpseq-1.0
 */

import type * as Gjs from './Gjs';
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
function collectors_to_generic_array(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify): Collector
function collectors_to_collection(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, factory: Supplier): Collector
function collectors_to_list(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify): Collector
function collectors_to_set(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, hash: Gee.HashDataFunc | null, equal: Gee.EqualDataFunc | null): Collector
function collectors_to_map(k_type: GObject.GType, k_dup_func: GObject.BoxedCopyFunc, k_destroy_func: GLib.DestroyNotify, v_type: GObject.GType, v_dup_func: GObject.BoxedCopyFunc, v_destroy_func: GLib.DestroyNotify, g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, key_mapper: MapFunc, val_mapper: MapFunc, merger: CombineFunc | null, key_hash: Gee.HashDataFunc | null, key_equal: Gee.EqualDataFunc | null, value_equal: Gee.EqualDataFunc | null): Collector
function collectors_sum_int(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, mapper: MapFunc): Collector
function collectors_sum_uint(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, mapper: MapFunc): Collector
function collectors_sum_long(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, mapper: MapFunc): Collector
function collectors_sum_ulong(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, mapper: MapFunc): Collector
function collectors_sum_float(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, mapper: MapFunc): Collector
function collectors_sum_double(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, mapper: MapFunc): Collector
function collectors_sum_int32(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, mapper: MapFunc): Collector
function collectors_sum_uint32(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, mapper: MapFunc): Collector
function collectors_sum_int64(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, mapper: MapFunc): Collector
function collectors_sum_uint64(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, mapper: MapFunc): Collector
function collectors_average_float(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, mapper: MapFunc): Collector
function collectors_average_double(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, mapper: MapFunc): Collector
function collectors_group_by(k_type: GObject.GType, k_dup_func: GObject.BoxedCopyFunc, k_destroy_func: GLib.DestroyNotify, g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, classifier: MapFunc): Collector
function collectors_group_by_with(k_type: GObject.GType, k_dup_func: GObject.BoxedCopyFunc, k_destroy_func: GLib.DestroyNotify, v_type: GObject.GType, v_dup_func: GObject.BoxedCopyFunc, v_destroy_func: GLib.DestroyNotify, g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, classifier: MapFunc, downstream: Collector): Collector
function collectors_partition(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, pred: Predicate): Collector
function collectors_partition_with(v_type: GObject.GType, v_dup_func: GObject.BoxedCopyFunc, v_destroy_func: GLib.DestroyNotify, g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, pred: Predicate, downstream: Collector): Collector
function collectors_max(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, compare: GLib.CompareDataFunc | null): Collector
function collectors_min(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, compare: GLib.CompareDataFunc | null): Collector
function collectors_count(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify): Collector
function collectors_fold(a_type: GObject.GType, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, accumulator: FoldFunc, combiner: CombineFunc, identity?: object | null): Collector
function collectors_reduce(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, accumulator: CombineFunc): Collector
function collectors_join(delimiter: string): Collector
function collectors_filter(a_type: GObject.GType, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, pred: Predicate, downstream: Collector): Collector
function collectors_tee(a_type: GObject.GType, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, downstreams: Collector[], merger: TeeMergeFunc): Collector
function collectors_map(r_type: GObject.GType, r_dup_func: GObject.BoxedCopyFunc, r_destroy_func: GLib.DestroyNotify, a_type: GObject.GType, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, mapper: MapFunc, downstream: Collector): Collector
function collectors_wrap(a_type: GObject.GType, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, collector: Collector): Collector
function compares_reverse(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, cmp: GLib.CompareDataFunc | null): [ /* returnType */ GLib.CompareDataFunc, /* result_target */ object | null, /* result_target_destroy_notify */ GLib.DestroyNotify ]
function compares_join(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, cmp: GLib.CompareDataFunc, cmp2: GLib.CompareDataFunc): [ /* returnType */ GLib.CompareDataFunc, /* result_target */ object | null, /* result_target_destroy_notify */ GLib.DestroyNotify ]
function overflow_int_add(a: number, b: number): [ /* returnType */ boolean, /* result */ number ]
function overflow_int_sub(a: number, b: number): [ /* returnType */ boolean, /* result */ number ]
function overflow_int_mul(a: number, b: number): [ /* returnType */ boolean, /* result */ number ]
function overflow_long_add(a: number, b: number): [ /* returnType */ boolean, /* result */ number ]
function overflow_long_sub(a: number, b: number): [ /* returnType */ boolean, /* result */ number ]
function overflow_long_mul(a: number, b: number): [ /* returnType */ boolean, /* result */ number ]
function overflow_int32_add(a: number, b: number): [ /* returnType */ boolean, /* result */ number ]
function overflow_int32_sub(a: number, b: number): [ /* returnType */ boolean, /* result */ number ]
function overflow_int32_mul(a: number, b: number): [ /* returnType */ boolean, /* result */ number ]
function overflow_int64_add(a: number, b: number): [ /* returnType */ boolean, /* result */ number ]
function overflow_int64_sub(a: number, b: number): [ /* returnType */ boolean, /* result */ number ]
function overflow_int64_mul(a: number, b: number): [ /* returnType */ boolean, /* result */ number ]
function parallel_sort(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, array: object[], compare: GLib.CompareDataFunc | null): Future
function task(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, func: TaskFunc): Future
function run(func: VoidTaskFunc): Future
function blocking(func: VoidTaskFunc): void
function blocking_get(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, func: TaskFunc): object | null
function join(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, left: TaskFunc): [ /* returnType */ object[], /* result_length1 */ number ]
function atomic_int64_get(atomic: number): [ /* returnType */ number, /* atomic */ number ]
function atomic_int64_set(atomic: number, newval: number): /* atomic */ number
function atomic_int64_inc(atomic: number): /* atomic */ number
function atomic_int64_dec_and_test(atomic: number): [ /* returnType */ boolean, /* atomic */ number ]
function atomic_int64_compare_and_exchange(atomic: number, oldval: number, newval: number): [ /* returnType */ boolean, /* atomic */ number ]
function atomic_int64_add(atomic: number, val: number): [ /* returnType */ number, /* atomic */ number ]
function atomic_int64_and(atomic: number, val: number): [ /* returnType */ number, /* atomic */ number ]
function atomic_int64_or(atomic: number, val: number): [ /* returnType */ number, /* atomic */ number ]
function atomic_int64_xor(atomic: number, val: number): [ /* returnType */ number, /* atomic */ number ]
interface CombineFunc {
    (g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, a: object | null, b: object | null): object | null
}
interface EachChunkFunc {
    (g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, chunk: object[]): boolean
}
interface FlatMapFunc {
    (a_type: GObject.GType, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, g: object | null): Gee.Iterator
}
interface FoldFunc {
    (a_type: GObject.GType, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, g: object | null, a: object | null): object | null
}
interface Func {
    (g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, g: object | null): void
}
interface MapFunc {
    (a_type: GObject.GType, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, g: object | null): object | null
}
interface Predicate {
    (g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, g: object | null): boolean
}
interface SupplyFunc {
    (g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify): object | null
}
interface TaskFunc {
    (g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify): object | null
}
interface TeeMergeFunc {
    (a_type: GObject.GType, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, results: GObject.Object[]): object | null
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

    connect(sigName: "notify::capacity", callback: (($obj: Channel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::capacity", callback: (($obj: Channel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::capacity", ...args: any[]): void
    connect(sigName: "notify::length", callback: (($obj: Channel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::length", callback: (($obj: Channel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::length", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Channel extends GObject.Object {

    // Own properties of Gpseq-1.0.Gpseq.Channel

    static name: string
    static $gtype: GObject.GType<Channel>

    // Constructors of Gpseq-1.0.Gpseq.Channel

    constructor(config?: Channel_ConstructProps) 
    _init(config?: Channel_ConstructProps): void
    static bounded(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, proposed_capacity: number): Channel
    static unbounded(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify): Channel
}

interface ChannelBase_ConstructProps extends GObject.Object_ConstructProps {
}

interface ChannelBase extends GObject.Object {

    // Own properties of Gpseq-1.0.Gpseq.ChannelBase

    readonly capacity: Optional
    readonly length: number

    // Owm methods of Gpseq-1.0.Gpseq.ChannelBase

    get_capacity(): Optional
    get_length(): number
    get_is_full(): boolean
    get_is_empty(): boolean
    close(): void

    // Own virtual methods of Gpseq-1.0.Gpseq.ChannelBase

    vfunc_get_capacity(): Optional
    vfunc_get_length(): number
    vfunc_get_is_full(): boolean
    vfunc_get_is_empty(): boolean
    vfunc_close(): void

    // Class property signals of Gpseq-1.0.Gpseq.ChannelBase

    connect(sigName: "notify::capacity", callback: (($obj: ChannelBase, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::capacity", callback: (($obj: ChannelBase, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::capacity", ...args: any[]): void
    connect(sigName: "notify::length", callback: (($obj: ChannelBase, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::length", callback: (($obj: ChannelBase, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::length", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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

    get_features(): CollectorFeatures
    create_accumulator(): object | null
    accumulate(g?: object | null, a?: object | null): void
    combine(a?: object | null, b?: object | null): object | null
    finish(a?: object | null): object | null

    // Own virtual methods of Gpseq-1.0.Gpseq.Collector

    vfunc_get_features(): CollectorFeatures
    vfunc_create_accumulator(): object | null
    vfunc_accumulate(g?: object | null, a?: object | null): void
    vfunc_combine(a?: object | null, b?: object | null): object | null
    vfunc_finish(a?: object | null): object | null

    // Class property signals of Gpseq-1.0.Gpseq.Collector

    connect(sigName: "notify::features", callback: (($obj: Collector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::features", callback: (($obj: Collector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::features", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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
    get_parallels(): number

    // Own virtual methods of Gpseq-1.0.Gpseq.Executor

    vfunc_submit(task: Task): void
    vfunc_get_parallels(): number

    // Class property signals of Gpseq-1.0.Gpseq.Executor

    connect(sigName: "notify::parallels", callback: (($obj: Executor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parallels", callback: (($obj: Executor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parallels", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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
    recv_until(end_time: number): Result
    try_recv(): Result

    // Own virtual methods of Gpseq-1.0.Gpseq.Receiver

    vfunc_recv(): Result
    vfunc_recv_until(end_time: number): Result
    vfunc_try_recv(): Result

    // Class property signals of Gpseq-1.0.Gpseq.Receiver

    connect(sigName: "notify::capacity", callback: (($obj: Receiver, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::capacity", callback: (($obj: Receiver, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::capacity", ...args: any[]): void
    connect(sigName: "notify::length", callback: (($obj: Receiver, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::length", callback: (($obj: Receiver, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::length", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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

    get_value_type(): GObject.GType
    get_value(): object | null
    get_exception(): GLib.Error | null
    get_is_err(): boolean
    ok(): Result
    ok_with(expected: object | null, equal: Gee.EqualDataFunc | null): Result
    future(): Future
    get(): object | null
    transform(a_type: GObject.GType, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, func: any): Result
    flat_map(a_type: GObject.GType, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, func: any): Result
    map(a_type: GObject.GType, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, func: any): Result
    map_err(func: any): Result
    zip(a_type: GObject.GType, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, b_type: GObject.GType, b_dup_func: GObject.BoxedCopyFunc, b_destroy_func: GLib.DestroyNotify, zip_func: any, second: Result): Result
    then(func: GLib.Func): Result
    and_then(func: Func): Result

    // Own virtual methods of Gpseq-1.0.Gpseq.Result

    vfunc_future(): Future
    vfunc_get(): object | null
    vfunc_transform(a_type: GObject.GType, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, func: any): Result
    vfunc_flat_map(a_type: GObject.GType, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, func: any): Result
    vfunc_map(a_type: GObject.GType, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, func: any): Result
    vfunc_map_err(func: any): Result
    vfunc_zip(a_type: GObject.GType, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, b_type: GObject.GType, b_dup_func: GObject.BoxedCopyFunc, b_destroy_func: GLib.DestroyNotify, zip_func: any, second: Result): Result
    vfunc_then(func: GLib.Func): Result
    vfunc_and_then(func: Func): Result

    // Class property signals of Gpseq-1.0.Gpseq.Result

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Result extends GObject.Object {

    // Own properties of Gpseq-1.0.Gpseq.Result

    static name: string
    static $gtype: GObject.GType<Result>

    // Constructors of Gpseq-1.0.Gpseq.Result

    constructor(config?: Result_ConstructProps) 
    _init(config?: Result_ConstructProps): void
    static of(g_type: GObject.GType, g_dup_func?: GObject.BoxedCopyFunc, g_destroy_func?: GLib.DestroyNotify, value?: object | null): Result
    static err(g_type: GObject.GType, g_dup_func?: GObject.BoxedCopyFunc, g_destroy_func?: GLib.DestroyNotify, exception?: GLib.Error): Result
}

interface Sender_ConstructProps extends ChannelBase_ConstructProps, GObject.Object_ConstructProps {
}

interface Sender extends ChannelBase {

    // Owm methods of Gpseq-1.0.Gpseq.Sender

    send(data?: object | null): Result
    send_until(data: object | null, end_time: number): Result
    try_send(data?: object | null): Result

    // Own virtual methods of Gpseq-1.0.Gpseq.Sender

    vfunc_send(data?: object | null): Result
    vfunc_send_until(data: object | null, end_time: number): Result
    vfunc_try_send(data?: object | null): Result

    // Class property signals of Gpseq-1.0.Gpseq.Sender

    connect(sigName: "notify::capacity", callback: (($obj: Sender, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::capacity", callback: (($obj: Sender, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::capacity", ...args: any[]): void
    connect(sigName: "notify::length", callback: (($obj: Sender, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::length", callback: (($obj: Sender, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::length", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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

    readonly estimated_size: number
    readonly is_size_known: boolean

    // Owm methods of Gpseq-1.0.Gpseq.Spliterator

    get_element_type(): GObject.GType
    try_split(): Spliterator | null
    try_advance(consumer: Func): boolean
    get_estimated_size(): number
    get_is_size_known(): boolean
    each(f: Func): void
    each_chunk(f: EachChunkFunc): boolean

    // Own virtual methods of Gpseq-1.0.Gpseq.Spliterator

    vfunc_try_split(): Spliterator | null
    vfunc_try_advance(consumer: Func): boolean
    vfunc_get_estimated_size(): number
    vfunc_get_is_size_known(): boolean
    vfunc_each(f: Func): void
    vfunc_each_chunk(f: EachChunkFunc): boolean

    // Class property signals of Gpseq-1.0.Gpseq.Spliterator

    connect(sigName: "notify::estimated-size", callback: (($obj: Spliterator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::estimated-size", callback: (($obj: Spliterator, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::estimated-size", ...args: any[]): void
    connect(sigName: "notify::is-size-known", callback: (($obj: Spliterator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-size-known", callback: (($obj: Spliterator, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-size-known", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Spliterator {

    // Own properties of Gpseq-1.0.Gpseq.Spliterator

    static name: string
    static $gtype: GObject.GType<Spliterator>

    // Constructors of Gpseq-1.0.Gpseq.Spliterator

    constructor(config?: Spliterator_ConstructProps) 
    _init(config?: Spliterator_ConstructProps): void
    static empty(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify): Spliterator
}

interface Supplier_ConstructProps extends GObject.Object_ConstructProps {
}

interface Supplier extends GObject.Object {

    // Owm methods of Gpseq-1.0.Gpseq.Supplier

    supply(): object | null

    // Own virtual methods of Gpseq-1.0.Gpseq.Supplier

    vfunc_supply(): object | null

    // Class property signals of Gpseq-1.0.Gpseq.Supplier

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Supplier {

    // Own properties of Gpseq-1.0.Gpseq.Supplier

    static name: string
    static $gtype: GObject.GType<Supplier>

    // Constructors of Gpseq-1.0.Gpseq.Supplier

    constructor(config?: Supplier_ConstructProps) 
    _init(config?: Supplier_ConstructProps): void
    static from_func(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, func: SupplyFunc): Supplier
}

interface Task_ConstructProps extends GObject.Object_ConstructProps {
}

interface Task extends GObject.Object {

    // Own properties of Gpseq-1.0.Gpseq.Task

    readonly future: Future

    // Owm methods of Gpseq-1.0.Gpseq.Task

    get_future(): Future
    compute(): void
    invoke(): void

    // Own virtual methods of Gpseq-1.0.Gpseq.Task

    vfunc_get_future(): Future
    vfunc_compute(): void

    // Class property signals of Gpseq-1.0.Gpseq.Task

    connect(sigName: "notify::future", callback: (($obj: Task, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::future", callback: (($obj: Task, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::future", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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

    create_thread(pool: WorkerPool): WorkerThread

    // Own virtual methods of Gpseq-1.0.Gpseq.ThreadFactory

    vfunc_create_thread(pool: WorkerPool): WorkerThread

    // Class property signals of Gpseq-1.0.Gpseq.ThreadFactory

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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

    g_type?: GObject.GType | null
    g_dup_func?: GObject.BoxedCopyFunc | null
    g_destroy_func?: GLib.DestroyNotify | null
}

interface ArraySpliterator extends Spliterator {

    // Own properties of Gpseq-1.0.Gpseq.ArraySpliterator

    readonly g_type: GObject.GType
    readonly g_dup_func: GObject.BoxedCopyFunc
    readonly g_destroy_func: GLib.DestroyNotify

    // Class property signals of Gpseq-1.0.Gpseq.ArraySpliterator

    connect(sigName: "notify::g-type", callback: (($obj: ArraySpliterator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-type", callback: (($obj: ArraySpliterator, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-type", ...args: any[]): void
    connect(sigName: "notify::g-dup-func", callback: (($obj: ArraySpliterator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-dup-func", callback: (($obj: ArraySpliterator, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-dup-func", ...args: any[]): void
    connect(sigName: "notify::g-destroy-func", callback: (($obj: ArraySpliterator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-destroy-func", callback: (($obj: ArraySpliterator, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-destroy-func", ...args: any[]): void
    connect(sigName: "notify::estimated-size", callback: (($obj: ArraySpliterator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::estimated-size", callback: (($obj: ArraySpliterator, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::estimated-size", ...args: any[]): void
    connect(sigName: "notify::is-size-known", callback: (($obj: ArraySpliterator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-size-known", callback: (($obj: ArraySpliterator, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-size-known", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class ArraySpliterator extends GObject.Object {

    // Own properties of Gpseq-1.0.Gpseq.ArraySpliterator

    static name: string
    static $gtype: GObject.GType<ArraySpliterator>

    // Constructors of Gpseq-1.0.Gpseq.ArraySpliterator

    constructor(config?: ArraySpliterator_ConstructProps) 
    constructor(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, array: object[], start: number, stop: number) 
    static new(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, array: object[], start: number, stop: number): ArraySpliterator
    _init(config?: ArraySpliterator_ConstructProps): void
}

interface ForkJoinTask_ConstructProps extends Task_ConstructProps, GObject.Object_ConstructProps {

    // Own constructor properties of Gpseq-1.0.Gpseq.ForkJoinTask

    g_type?: GObject.GType | null
    g_dup_func?: GObject.BoxedCopyFunc | null
    g_destroy_func?: GLib.DestroyNotify | null
    depth?: number | null
}

interface ForkJoinTask extends Task {

    // Own properties of Gpseq-1.0.Gpseq.ForkJoinTask

    readonly g_type: GObject.GType
    readonly g_dup_func: GObject.BoxedCopyFunc
    readonly g_destroy_func: GLib.DestroyNotify
    readonly parent: ForkJoinTask
    readonly root: ForkJoinTask
    readonly is_root: boolean
    readonly threshold: number
    readonly max_depth: number
    depth: number
    readonly executor: Executor
    readonly promise: Promise
    readonly shared_result: ForkJoinTaskSharedResult
    readonly is_cancelled: boolean

    // Owm methods of Gpseq-1.0.Gpseq.ForkJoinTask

    get_parent(): ForkJoinTask | null
    get_root(): ForkJoinTask
    get_is_root(): boolean
    get_threshold(): number
    get_max_depth(): number
    get_depth(): number
    set_depth(value: number): void
    get_executor(): Executor
    get_promise(): Promise
    join(): object | null
    fork(): void
    get_shared_result(): ForkJoinTaskSharedResult
    cancel(): void
    get_is_cancelled(): boolean
    compute(): void

    // Own virtual methods of Gpseq-1.0.Gpseq.ForkJoinTask

    vfunc_compute(): void

    // Class property signals of Gpseq-1.0.Gpseq.ForkJoinTask

    connect(sigName: "notify::g-type", callback: (($obj: ForkJoinTask, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-type", callback: (($obj: ForkJoinTask, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-type", ...args: any[]): void
    connect(sigName: "notify::g-dup-func", callback: (($obj: ForkJoinTask, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-dup-func", callback: (($obj: ForkJoinTask, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-dup-func", ...args: any[]): void
    connect(sigName: "notify::g-destroy-func", callback: (($obj: ForkJoinTask, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-destroy-func", callback: (($obj: ForkJoinTask, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-destroy-func", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: ForkJoinTask, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: ForkJoinTask, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::root", callback: (($obj: ForkJoinTask, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::root", callback: (($obj: ForkJoinTask, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::root", ...args: any[]): void
    connect(sigName: "notify::is-root", callback: (($obj: ForkJoinTask, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-root", callback: (($obj: ForkJoinTask, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-root", ...args: any[]): void
    connect(sigName: "notify::threshold", callback: (($obj: ForkJoinTask, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::threshold", callback: (($obj: ForkJoinTask, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::threshold", ...args: any[]): void
    connect(sigName: "notify::max-depth", callback: (($obj: ForkJoinTask, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-depth", callback: (($obj: ForkJoinTask, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::max-depth", ...args: any[]): void
    connect(sigName: "notify::depth", callback: (($obj: ForkJoinTask, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::depth", callback: (($obj: ForkJoinTask, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::depth", ...args: any[]): void
    connect(sigName: "notify::executor", callback: (($obj: ForkJoinTask, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::executor", callback: (($obj: ForkJoinTask, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::executor", ...args: any[]): void
    connect(sigName: "notify::promise", callback: (($obj: ForkJoinTask, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::promise", callback: (($obj: ForkJoinTask, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::promise", ...args: any[]): void
    connect(sigName: "notify::shared-result", callback: (($obj: ForkJoinTask, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::shared-result", callback: (($obj: ForkJoinTask, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::shared-result", ...args: any[]): void
    connect(sigName: "notify::is-cancelled", callback: (($obj: ForkJoinTask, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-cancelled", callback: (($obj: ForkJoinTask, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-cancelled", ...args: any[]): void
    connect(sigName: "notify::future", callback: (($obj: ForkJoinTask, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::future", callback: (($obj: ForkJoinTask, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::future", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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

    ref_count: number

    // Owm methods of Gpseq-1.0.Gpseq.ForkJoinTaskSharedResult

    get_ready(): boolean
    get_value(): object | null
    set_value(value?: object | null): void
    get_error(): GLib.Error | null
    set_error(value?: GLib.Error | null): void
    bake_promise(promise: Promise): void
}

class ForkJoinTaskSharedResult {

    // Own properties of Gpseq-1.0.Gpseq.ForkJoinTaskSharedResult

    static name: string

    // Constructors of Gpseq-1.0.Gpseq.ForkJoinTaskSharedResult

    constructor(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify) 
    static new(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify): ForkJoinTaskSharedResult
}

interface FuncTask_ConstructProps extends Task_ConstructProps, GObject.Object_ConstructProps {

    // Own constructor properties of Gpseq-1.0.Gpseq.FuncTask

    g_type?: GObject.GType | null
    g_dup_func?: GObject.BoxedCopyFunc | null
    g_destroy_func?: GLib.DestroyNotify | null
}

interface FuncTask extends Task {

    // Own properties of Gpseq-1.0.Gpseq.FuncTask

    readonly g_type: GObject.GType
    readonly g_dup_func: GObject.BoxedCopyFunc
    readonly g_destroy_func: GLib.DestroyNotify

    // Class property signals of Gpseq-1.0.Gpseq.FuncTask

    connect(sigName: "notify::g-type", callback: (($obj: FuncTask, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-type", callback: (($obj: FuncTask, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-type", ...args: any[]): void
    connect(sigName: "notify::g-dup-func", callback: (($obj: FuncTask, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-dup-func", callback: (($obj: FuncTask, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-dup-func", ...args: any[]): void
    connect(sigName: "notify::g-destroy-func", callback: (($obj: FuncTask, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-destroy-func", callback: (($obj: FuncTask, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-destroy-func", ...args: any[]): void
    connect(sigName: "notify::future", callback: (($obj: FuncTask, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::future", callback: (($obj: FuncTask, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::future", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class FuncTask extends GObject.Object {

    // Own properties of Gpseq-1.0.Gpseq.FuncTask

    static name: string
    static $gtype: GObject.GType<FuncTask>

    // Constructors of Gpseq-1.0.Gpseq.FuncTask

    constructor(config?: FuncTask_ConstructProps) 
    constructor(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, func: TaskFunc) 
    static new(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, func: TaskFunc): FuncTask
    _init(config?: FuncTask_ConstructProps): void
}

interface Future_ConstructProps extends Gee.Hashable_ConstructProps, Result_ConstructProps, GObject.Object_ConstructProps {

    // Own constructor properties of Gpseq-1.0.Gpseq.Future

    g_type?: GObject.GType | null
    g_dup_func?: GObject.BoxedCopyFunc | null
    g_destroy_func?: GLib.DestroyNotify | null
}

interface Future extends Gee.Hashable, Result {

    // Own properties of Gpseq-1.0.Gpseq.Future

    readonly g_type: GObject.GType
    readonly g_dup_func: GObject.BoxedCopyFunc
    readonly g_destroy_func: GLib.DestroyNotify
    readonly ready: boolean

    // Owm methods of Gpseq-1.0.Gpseq.Future

    get_ready(): boolean
    wait(): object | null
    wait_until(end_time: number): [ /* returnType */ boolean, /* value */ object | null ]
    transform(a_type: GObject.GType, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, func: any): Result

    // Own virtual methods of Gpseq-1.0.Gpseq.Future

    vfunc_get_ready(): boolean
    vfunc_wait(): object | null
    vfunc_wait_until(end_time: number): [ /* returnType */ boolean, /* value */ object | null ]
    vfunc_transform(a_type: GObject.GType, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, func: any): Result

    // Class property signals of Gpseq-1.0.Gpseq.Future

    connect(sigName: "notify::g-type", callback: (($obj: Future, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-type", callback: (($obj: Future, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-type", ...args: any[]): void
    connect(sigName: "notify::g-dup-func", callback: (($obj: Future, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-dup-func", callback: (($obj: Future, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-dup-func", ...args: any[]): void
    connect(sigName: "notify::g-destroy-func", callback: (($obj: Future, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-destroy-func", callback: (($obj: Future, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-destroy-func", ...args: any[]): void
    connect(sigName: "notify::ready", callback: (($obj: Future, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ready", callback: (($obj: Future, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::ready", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Future extends GObject.Object {

    // Own properties of Gpseq-1.0.Gpseq.Future

    static name: string
    static $gtype: GObject.GType<Future>

    // Constructors of Gpseq-1.0.Gpseq.Future

    constructor(config?: Future_ConstructProps) 
    _init(config?: Future_ConstructProps): void
    static of(g_type: GObject.GType, g_dup_func?: GObject.BoxedCopyFunc, g_destroy_func?: GLib.DestroyNotify, value?: object | null): Future

    // Overloads of of

    static of(g_type: GObject.GType, g_dup_func?: GObject.BoxedCopyFunc, g_destroy_func?: GLib.DestroyNotify, value?: object | null): Result
    static of(...args: any[]): any
    static of(args_or_g_type: any[] | GObject.GType, g_dup_func?: GObject.BoxedCopyFunc, g_destroy_func?: GLib.DestroyNotify, value?: object | null): Future | Result | any
    static err(g_type: GObject.GType, g_dup_func?: GObject.BoxedCopyFunc, g_destroy_func?: GLib.DestroyNotify, exception?: GLib.Error): Future

    // Overloads of err

    static err(g_type: GObject.GType, g_dup_func?: GObject.BoxedCopyFunc, g_destroy_func?: GLib.DestroyNotify, exception?: GLib.Error): Result
    static err(...args: any[]): any
    static err(args_or_g_type: any[] | GObject.GType, g_dup_func?: GObject.BoxedCopyFunc, g_destroy_func?: GLib.DestroyNotify, exception?: GLib.Error): Future | Result | any
    static done(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, result: Result): Future
}

interface GenericArraySpliterator_ConstructProps extends Spliterator_ConstructProps, GObject.Object_ConstructProps {

    // Own constructor properties of Gpseq-1.0.Gpseq.GenericArraySpliterator

    g_type?: GObject.GType | null
    g_dup_func?: GObject.BoxedCopyFunc | null
    g_destroy_func?: GLib.DestroyNotify | null
}

interface GenericArraySpliterator extends Spliterator {

    // Own properties of Gpseq-1.0.Gpseq.GenericArraySpliterator

    readonly g_type: GObject.GType
    readonly g_dup_func: GObject.BoxedCopyFunc
    readonly g_destroy_func: GLib.DestroyNotify

    // Class property signals of Gpseq-1.0.Gpseq.GenericArraySpliterator

    connect(sigName: "notify::g-type", callback: (($obj: GenericArraySpliterator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-type", callback: (($obj: GenericArraySpliterator, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-type", ...args: any[]): void
    connect(sigName: "notify::g-dup-func", callback: (($obj: GenericArraySpliterator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-dup-func", callback: (($obj: GenericArraySpliterator, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-dup-func", ...args: any[]): void
    connect(sigName: "notify::g-destroy-func", callback: (($obj: GenericArraySpliterator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-destroy-func", callback: (($obj: GenericArraySpliterator, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-destroy-func", ...args: any[]): void
    connect(sigName: "notify::estimated-size", callback: (($obj: GenericArraySpliterator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::estimated-size", callback: (($obj: GenericArraySpliterator, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::estimated-size", ...args: any[]): void
    connect(sigName: "notify::is-size-known", callback: (($obj: GenericArraySpliterator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-size-known", callback: (($obj: GenericArraySpliterator, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-size-known", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class GenericArraySpliterator extends GObject.Object {

    // Own properties of Gpseq-1.0.Gpseq.GenericArraySpliterator

    static name: string
    static $gtype: GObject.GType<GenericArraySpliterator>

    // Constructors of Gpseq-1.0.Gpseq.GenericArraySpliterator

    constructor(config?: GenericArraySpliterator_ConstructProps) 
    constructor(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, array: object[], start: number, stop: number) 
    static new(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, array: object[], start: number, stop: number): GenericArraySpliterator
    _init(config?: GenericArraySpliterator_ConstructProps): void
}

interface IteratorSpliterator_ConstructProps extends Spliterator_ConstructProps, GObject.Object_ConstructProps {

    // Own constructor properties of Gpseq-1.0.Gpseq.IteratorSpliterator

    g_type?: GObject.GType | null
    g_dup_func?: GObject.BoxedCopyFunc | null
    g_destroy_func?: GLib.DestroyNotify | null
}

interface IteratorSpliterator extends Spliterator {

    // Own properties of Gpseq-1.0.Gpseq.IteratorSpliterator

    readonly g_type: GObject.GType
    readonly g_dup_func: GObject.BoxedCopyFunc
    readonly g_destroy_func: GLib.DestroyNotify

    // Class property signals of Gpseq-1.0.Gpseq.IteratorSpliterator

    connect(sigName: "notify::g-type", callback: (($obj: IteratorSpliterator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-type", callback: (($obj: IteratorSpliterator, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-type", ...args: any[]): void
    connect(sigName: "notify::g-dup-func", callback: (($obj: IteratorSpliterator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-dup-func", callback: (($obj: IteratorSpliterator, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-dup-func", ...args: any[]): void
    connect(sigName: "notify::g-destroy-func", callback: (($obj: IteratorSpliterator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-destroy-func", callback: (($obj: IteratorSpliterator, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-destroy-func", ...args: any[]): void
    connect(sigName: "notify::estimated-size", callback: (($obj: IteratorSpliterator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::estimated-size", callback: (($obj: IteratorSpliterator, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::estimated-size", ...args: any[]): void
    connect(sigName: "notify::is-size-known", callback: (($obj: IteratorSpliterator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-size-known", callback: (($obj: IteratorSpliterator, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-size-known", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class IteratorSpliterator extends GObject.Object {

    // Own properties of Gpseq-1.0.Gpseq.IteratorSpliterator

    static name: string
    static $gtype: GObject.GType<IteratorSpliterator>

    // Constructors of Gpseq-1.0.Gpseq.IteratorSpliterator

    constructor(config?: IteratorSpliterator_ConstructProps) 
    constructor(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, iterator: Gee.Iterator, estimated_size: number, size_known: boolean) 
    static new(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, iterator: Gee.Iterator, estimated_size: number, size_known: boolean): IteratorSpliterator
    static from_collection(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, collection: Gee.Collection): IteratorSpliterator
    _init(config?: IteratorSpliterator_ConstructProps): void
}

interface ListSpliterator_ConstructProps extends Spliterator_ConstructProps, GObject.Object_ConstructProps {

    // Own constructor properties of Gpseq-1.0.Gpseq.ListSpliterator

    g_type?: GObject.GType | null
    g_dup_func?: GObject.BoxedCopyFunc | null
    g_destroy_func?: GLib.DestroyNotify | null
}

interface ListSpliterator extends Spliterator {

    // Own properties of Gpseq-1.0.Gpseq.ListSpliterator

    readonly g_type: GObject.GType
    readonly g_dup_func: GObject.BoxedCopyFunc
    readonly g_destroy_func: GLib.DestroyNotify

    // Class property signals of Gpseq-1.0.Gpseq.ListSpliterator

    connect(sigName: "notify::g-type", callback: (($obj: ListSpliterator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-type", callback: (($obj: ListSpliterator, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-type", ...args: any[]): void
    connect(sigName: "notify::g-dup-func", callback: (($obj: ListSpliterator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-dup-func", callback: (($obj: ListSpliterator, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-dup-func", ...args: any[]): void
    connect(sigName: "notify::g-destroy-func", callback: (($obj: ListSpliterator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-destroy-func", callback: (($obj: ListSpliterator, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-destroy-func", ...args: any[]): void
    connect(sigName: "notify::estimated-size", callback: (($obj: ListSpliterator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::estimated-size", callback: (($obj: ListSpliterator, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::estimated-size", ...args: any[]): void
    connect(sigName: "notify::is-size-known", callback: (($obj: ListSpliterator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-size-known", callback: (($obj: ListSpliterator, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-size-known", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class ListSpliterator extends GObject.Object {

    // Own properties of Gpseq-1.0.Gpseq.ListSpliterator

    static name: string
    static $gtype: GObject.GType<ListSpliterator>

    // Constructors of Gpseq-1.0.Gpseq.ListSpliterator

    constructor(config?: ListSpliterator_ConstructProps) 
    constructor(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, list: Gee.List, start: number, stop: number) 
    static new(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, list: Gee.List, start: number, stop: number): ListSpliterator
    _init(config?: ListSpliterator_ConstructProps): void
}

interface Optional_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of Gpseq-1.0.Gpseq.Optional

    g_type?: GObject.GType | null
    g_dup_func?: GObject.BoxedCopyFunc | null
    g_destroy_func?: GLib.DestroyNotify | null
}

interface Optional {

    // Own properties of Gpseq-1.0.Gpseq.Optional

    readonly g_type: GObject.GType
    readonly g_dup_func: GObject.BoxedCopyFunc
    readonly g_destroy_func: GLib.DestroyNotify
    readonly value_type: GObject.GType
    readonly value: object
    readonly is_present: boolean

    // Owm methods of Gpseq-1.0.Gpseq.Optional

    get_value_type(): GObject.GType
    get_value(): object | null
    get_is_present(): boolean
    to_string(): string
    if_present(consumer: GLib.Func): void
    or_else(other?: object | null): object | null
    or_else_get(supplier: SupplyFunc): object | null
    or_else_throw(error_supplier?: SupplyFunc | null): object | null
    or_else_fail(): object | null
    filter(pred: Gee.Predicate): Optional
    map(a_type: GObject.GType, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, mapper: Gee.MapFunc): Optional

    // Class property signals of Gpseq-1.0.Gpseq.Optional

    connect(sigName: "notify::g-type", callback: (($obj: Optional, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-type", callback: (($obj: Optional, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-type", ...args: any[]): void
    connect(sigName: "notify::g-dup-func", callback: (($obj: Optional, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-dup-func", callback: (($obj: Optional, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-dup-func", ...args: any[]): void
    connect(sigName: "notify::g-destroy-func", callback: (($obj: Optional, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-destroy-func", callback: (($obj: Optional, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-destroy-func", ...args: any[]): void
    connect(sigName: "notify::value-type", callback: (($obj: Optional, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value-type", callback: (($obj: Optional, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::value-type", ...args: any[]): void
    connect(sigName: "notify::value", callback: (($obj: Optional, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value", callback: (($obj: Optional, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::value", ...args: any[]): void
    connect(sigName: "notify::is-present", callback: (($obj: Optional, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-present", callback: (($obj: Optional, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-present", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Optional extends GObject.Object {

    // Own properties of Gpseq-1.0.Gpseq.Optional

    static name: string
    static $gtype: GObject.GType<Optional>

    // Constructors of Gpseq-1.0.Gpseq.Optional

    constructor(config?: Optional_ConstructProps) 
    static empty(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify): Optional
    static of(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, value?: object | null): Optional
    constructor(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify) 
    static new(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify): Optional
    _init(config?: Optional_ConstructProps): void
}

interface Promise {

    // Own fields of Gpseq-1.0.Gpseq.Promise

    ref_count: number

    // Owm methods of Gpseq-1.0.Gpseq.Promise

    get_future(): Future
    set_value(value?: object | null): void
    set_exception(exception: GLib.Error): void
}

class Promise {

    // Own properties of Gpseq-1.0.Gpseq.Promise

    static name: string

    // Constructors of Gpseq-1.0.Gpseq.Promise

    constructor(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify) 
    static new(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify): Promise
}

interface Seq_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of Gpseq-1.0.Gpseq.Seq

    g_type?: GObject.GType | null
    g_dup_func?: GObject.BoxedCopyFunc | null
    g_destroy_func?: GLib.DestroyNotify | null
}

interface Seq {

    // Own properties of Gpseq-1.0.Gpseq.Seq

    readonly g_type: GObject.GType
    readonly g_dup_func: GObject.BoxedCopyFunc
    readonly g_destroy_func: GLib.DestroyNotify
    readonly element_type: GObject.GType
    readonly task_env: TaskEnv
    readonly is_closed: boolean
    readonly is_parallel: boolean

    // Owm methods of Gpseq-1.0.Gpseq.Seq

    get_element_type(): GObject.GType
    get_task_env(): TaskEnv
    get_is_closed(): boolean
    close(): void
    get_is_parallel(): boolean
    sequential(): Seq
    parallel(): Seq
    iterator(): Gee.Iterator
    spliterator(): Spliterator
    count(): Future
    distinct(hash: Gee.HashDataFunc | null, equal: Gee.EqualDataFunc | null): Seq
    all_match(pred: Predicate): Future
    any_match(pred: Predicate): Future
    none_match(pred: Predicate): Future
    find_any(pred: Predicate): Future
    find_first(pred: Predicate): Future
    skip(n: number): Seq
    limit(n: number): Seq
    chop(offset: number, length: number): Seq
    skip_ordered(n: number): Seq
    limit_ordered(n: number): Seq
    chop_ordered(offset: number, length: number): Seq
    filter(pred: Predicate): Seq
    fold(a_type: GObject.GType, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, accumulator: FoldFunc, combiner: CombineFunc, identity?: object | null): Future
    reduce(accumulator: CombineFunc): Future
    map(a_type: GObject.GType, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, mapper: MapFunc): Seq
    flat_map(a_type: GObject.GType, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, mapper: FlatMapFunc): Seq
    max(compare: GLib.CompareDataFunc | null): Future
    min(compare: GLib.CompareDataFunc | null): Future
    order_by(compare: GLib.CompareDataFunc | null): Seq
    reverse_order_by(compare: GLib.CompareDataFunc | null): Seq
    foreach(f: Func): Future
    collect(r_type: GObject.GType, r_dup_func: GObject.BoxedCopyFunc, r_destroy_func: GLib.DestroyNotify, a_type: GObject.GType, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, collector: Collector): Future
    collect_ordered(r_type: GObject.GType, r_dup_func: GObject.BoxedCopyFunc, r_destroy_func: GLib.DestroyNotify, a_type: GObject.GType, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, collector: Collector): Future
    group_by(k_type: GObject.GType, k_dup_func: GObject.BoxedCopyFunc, k_destroy_func: GLib.DestroyNotify, classifier: MapFunc): Future
    partition(pred: Predicate): Future
    to_generic_array(): Future
    to_list(): Future
    to_set(hash: Gee.HashDataFunc | null, equal: Gee.EqualDataFunc | null): Future
    to_map(k_type: GObject.GType, k_dup_func: GObject.BoxedCopyFunc, k_destroy_func: GLib.DestroyNotify, v_type: GObject.GType, v_dup_func: GObject.BoxedCopyFunc, v_destroy_func: GLib.DestroyNotify, key_mapper: MapFunc, val_mapper: MapFunc, merger: CombineFunc | null, key_hash: Gee.HashDataFunc | null, key_equal: Gee.EqualDataFunc | null, value_equal: Gee.EqualDataFunc | null): Future

    // Class property signals of Gpseq-1.0.Gpseq.Seq

    connect(sigName: "notify::g-type", callback: (($obj: Seq, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-type", callback: (($obj: Seq, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-type", ...args: any[]): void
    connect(sigName: "notify::g-dup-func", callback: (($obj: Seq, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-dup-func", callback: (($obj: Seq, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-dup-func", ...args: any[]): void
    connect(sigName: "notify::g-destroy-func", callback: (($obj: Seq, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-destroy-func", callback: (($obj: Seq, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-destroy-func", ...args: any[]): void
    connect(sigName: "notify::element-type", callback: (($obj: Seq, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::element-type", callback: (($obj: Seq, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::element-type", ...args: any[]): void
    connect(sigName: "notify::task-env", callback: (($obj: Seq, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::task-env", callback: (($obj: Seq, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::task-env", ...args: any[]): void
    connect(sigName: "notify::is-closed", callback: (($obj: Seq, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-closed", callback: (($obj: Seq, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-closed", ...args: any[]): void
    connect(sigName: "notify::is-parallel", callback: (($obj: Seq, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-parallel", callback: (($obj: Seq, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-parallel", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Seq extends GObject.Object {

    // Own properties of Gpseq-1.0.Gpseq.Seq

    static name: string
    static $gtype: GObject.GType<Seq>

    // Constructors of Gpseq-1.0.Gpseq.Seq

    constructor(config?: Seq_ConstructProps) 
    constructor(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, spliterator: Spliterator, env?: TaskEnv | null) 
    static new(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, spliterator: Spliterator, env?: TaskEnv | null): Seq
    _init(config?: Seq_ConstructProps): void
    static of_array(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, array: object[], env?: TaskEnv | null): Seq
    static of_owned_array(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, array: object[], env?: TaskEnv | null): Seq
    static of_generic_array(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, array: object[], env?: TaskEnv | null): Seq
    static of_iterator(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, iterator: Gee.Iterator, estimated_size: number, size_known: boolean, env?: TaskEnv | null): Seq
    static of_collection(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, collection: Gee.Collection, env?: TaskEnv | null): Seq
    static of_list(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, list: Gee.List, env?: TaskEnv | null): Seq
    static of_supplier(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, supplier: Supplier, env?: TaskEnv | null): Seq
    static of_supply_func(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, func: SupplyFunc, env?: TaskEnv | null): Seq
    static iterate(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, seed: object | null, pred: Gee.Predicate, next: Gee.MapFunc, env?: TaskEnv | null): Seq
    static empty(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify): Seq
}

interface SpliteratorTask_ConstructProps extends ForkJoinTask_ConstructProps {

    // Own constructor properties of Gpseq-1.0.Gpseq.SpliteratorTask

    r_type?: GObject.GType | null
    r_dup_func?: GObject.BoxedCopyFunc | null
    r_destroy_func?: GLib.DestroyNotify | null
    g_type?: GObject.GType | null
    g_dup_func?: GObject.BoxedCopyFunc | null
    g_destroy_func?: GLib.DestroyNotify | null
}

interface SpliteratorTask {

    // Own properties of Gpseq-1.0.Gpseq.SpliteratorTask

    readonly r_type: GObject.GType
    readonly r_dup_func: GObject.BoxedCopyFunc
    readonly r_destroy_func: GLib.DestroyNotify
    readonly g_type: GObject.GType
    readonly g_dup_func: GObject.BoxedCopyFunc
    readonly g_destroy_func: GLib.DestroyNotify
    readonly spliterator: Spliterator
    readonly left_child: SpliteratorTask
    readonly right_child: SpliteratorTask
    readonly is_leaf: boolean
    readonly is_leftmost: boolean
    readonly empty_result: object

    // Owm methods of Gpseq-1.0.Gpseq.SpliteratorTask

    get_spliterator(): Spliterator
    get_left_child(): SpliteratorTask | null
    get_right_child(): SpliteratorTask | null
    get_is_leaf(): boolean
    get_is_leftmost(): boolean
    cancel_later_nodes(): void
    get_empty_result(): object | null
    leaf_compute(): object | null
    merge_results(left?: object | null, right?: object | null): object | null
    make_child(spliterator: Spliterator): SpliteratorTask

    // Own virtual methods of Gpseq-1.0.Gpseq.SpliteratorTask

    vfunc_get_empty_result(): object | null
    vfunc_leaf_compute(): object | null
    vfunc_merge_results(left?: object | null, right?: object | null): object | null
    vfunc_make_child(spliterator: Spliterator): SpliteratorTask

    // Class property signals of Gpseq-1.0.Gpseq.SpliteratorTask

    connect(sigName: "notify::r-type", callback: (($obj: SpliteratorTask, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::r-type", callback: (($obj: SpliteratorTask, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::r-type", ...args: any[]): void
    connect(sigName: "notify::r-dup-func", callback: (($obj: SpliteratorTask, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::r-dup-func", callback: (($obj: SpliteratorTask, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::r-dup-func", ...args: any[]): void
    connect(sigName: "notify::r-destroy-func", callback: (($obj: SpliteratorTask, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::r-destroy-func", callback: (($obj: SpliteratorTask, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::r-destroy-func", ...args: any[]): void
    connect(sigName: "notify::g-type", callback: (($obj: SpliteratorTask, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-type", callback: (($obj: SpliteratorTask, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-type", ...args: any[]): void
    connect(sigName: "notify::g-dup-func", callback: (($obj: SpliteratorTask, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-dup-func", callback: (($obj: SpliteratorTask, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-dup-func", ...args: any[]): void
    connect(sigName: "notify::g-destroy-func", callback: (($obj: SpliteratorTask, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-destroy-func", callback: (($obj: SpliteratorTask, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-destroy-func", ...args: any[]): void
    connect(sigName: "notify::spliterator", callback: (($obj: SpliteratorTask, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::spliterator", callback: (($obj: SpliteratorTask, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::spliterator", ...args: any[]): void
    connect(sigName: "notify::left-child", callback: (($obj: SpliteratorTask, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::left-child", callback: (($obj: SpliteratorTask, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::left-child", ...args: any[]): void
    connect(sigName: "notify::right-child", callback: (($obj: SpliteratorTask, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::right-child", callback: (($obj: SpliteratorTask, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::right-child", ...args: any[]): void
    connect(sigName: "notify::is-leaf", callback: (($obj: SpliteratorTask, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-leaf", callback: (($obj: SpliteratorTask, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-leaf", ...args: any[]): void
    connect(sigName: "notify::is-leftmost", callback: (($obj: SpliteratorTask, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-leftmost", callback: (($obj: SpliteratorTask, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-leftmost", ...args: any[]): void
    connect(sigName: "notify::empty-result", callback: (($obj: SpliteratorTask, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::empty-result", callback: (($obj: SpliteratorTask, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::empty-result", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: SpliteratorTask, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: SpliteratorTask, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::root", callback: (($obj: SpliteratorTask, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::root", callback: (($obj: SpliteratorTask, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::root", ...args: any[]): void
    connect(sigName: "notify::is-root", callback: (($obj: SpliteratorTask, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-root", callback: (($obj: SpliteratorTask, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-root", ...args: any[]): void
    connect(sigName: "notify::threshold", callback: (($obj: SpliteratorTask, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::threshold", callback: (($obj: SpliteratorTask, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::threshold", ...args: any[]): void
    connect(sigName: "notify::max-depth", callback: (($obj: SpliteratorTask, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-depth", callback: (($obj: SpliteratorTask, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::max-depth", ...args: any[]): void
    connect(sigName: "notify::depth", callback: (($obj: SpliteratorTask, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::depth", callback: (($obj: SpliteratorTask, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::depth", ...args: any[]): void
    connect(sigName: "notify::executor", callback: (($obj: SpliteratorTask, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::executor", callback: (($obj: SpliteratorTask, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::executor", ...args: any[]): void
    connect(sigName: "notify::promise", callback: (($obj: SpliteratorTask, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::promise", callback: (($obj: SpliteratorTask, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::promise", ...args: any[]): void
    connect(sigName: "notify::shared-result", callback: (($obj: SpliteratorTask, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::shared-result", callback: (($obj: SpliteratorTask, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::shared-result", ...args: any[]): void
    connect(sigName: "notify::is-cancelled", callback: (($obj: SpliteratorTask, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-cancelled", callback: (($obj: SpliteratorTask, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-cancelled", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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

    g_type?: GObject.GType | null
    g_dup_func?: GObject.BoxedCopyFunc | null
    g_destroy_func?: GLib.DestroyNotify | null
}

interface SubArray extends Gee.Traversable, Gee.Iterable {

    // Own properties of Gpseq-1.0.Gpseq.SubArray

    readonly g_type: GObject.GType
    readonly g_dup_func: GObject.BoxedCopyFunc
    readonly g_destroy_func: GLib.DestroyNotify
    readonly size: number

    // Owm methods of Gpseq-1.0.Gpseq.SubArray

    get_data(): object[]

    // Overloads of get_data

    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     * @param key name of the key for that association
     */
    get_data(key?: string): object | null
    get_data(...args: any[]): any
    get_data(args_or_key?: any[] | string): object[] | object | null | any
    get_size(): number
    get(index: number): object | null
    set(index: number, item?: object | null): void
    sort(compare_func: GLib.CompareDataFunc | null): void
    copy(start: number, src: SubArray, src_start: number, count: number): void
    copy_array(start: number, src: object[], src_start: number, count: number): void
    sub_array(start: number, stop: number): SubArray

    // Class property signals of Gpseq-1.0.Gpseq.SubArray

    connect(sigName: "notify::g-type", callback: (($obj: SubArray, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-type", callback: (($obj: SubArray, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-type", ...args: any[]): void
    connect(sigName: "notify::g-dup-func", callback: (($obj: SubArray, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-dup-func", callback: (($obj: SubArray, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-dup-func", ...args: any[]): void
    connect(sigName: "notify::g-destroy-func", callback: (($obj: SubArray, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-destroy-func", callback: (($obj: SubArray, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-destroy-func", ...args: any[]): void
    connect(sigName: "notify::size", callback: (($obj: SubArray, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: SubArray, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class SubArray extends GObject.Object {

    // Own properties of Gpseq-1.0.Gpseq.SubArray

    static name: string
    static $gtype: GObject.GType<SubArray>

    // Constructors of Gpseq-1.0.Gpseq.SubArray

    constructor(config?: SubArray_ConstructProps) 
    constructor(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, data: object[]) 
    static new(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, data: object[]): SubArray
    static from_sub_array(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, array: SubArray, start: number, stop: number): SubArray
    _init(config?: SubArray_ConstructProps): void
}

interface SubArraySpliterator_ConstructProps extends Spliterator_ConstructProps, GObject.Object_ConstructProps {

    // Own constructor properties of Gpseq-1.0.Gpseq.SubArraySpliterator

    g_type?: GObject.GType | null
    g_dup_func?: GObject.BoxedCopyFunc | null
    g_destroy_func?: GLib.DestroyNotify | null
}

interface SubArraySpliterator extends Spliterator {

    // Own properties of Gpseq-1.0.Gpseq.SubArraySpliterator

    readonly g_type: GObject.GType
    readonly g_dup_func: GObject.BoxedCopyFunc
    readonly g_destroy_func: GLib.DestroyNotify

    // Class property signals of Gpseq-1.0.Gpseq.SubArraySpliterator

    connect(sigName: "notify::g-type", callback: (($obj: SubArraySpliterator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-type", callback: (($obj: SubArraySpliterator, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-type", ...args: any[]): void
    connect(sigName: "notify::g-dup-func", callback: (($obj: SubArraySpliterator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-dup-func", callback: (($obj: SubArraySpliterator, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-dup-func", ...args: any[]): void
    connect(sigName: "notify::g-destroy-func", callback: (($obj: SubArraySpliterator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-destroy-func", callback: (($obj: SubArraySpliterator, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-destroy-func", ...args: any[]): void
    connect(sigName: "notify::estimated-size", callback: (($obj: SubArraySpliterator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::estimated-size", callback: (($obj: SubArraySpliterator, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::estimated-size", ...args: any[]): void
    connect(sigName: "notify::is-size-known", callback: (($obj: SubArraySpliterator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-size-known", callback: (($obj: SubArraySpliterator, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-size-known", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class SubArraySpliterator extends GObject.Object {

    // Own properties of Gpseq-1.0.Gpseq.SubArraySpliterator

    static name: string
    static $gtype: GObject.GType<SubArraySpliterator>

    // Constructors of Gpseq-1.0.Gpseq.SubArraySpliterator

    constructor(config?: SubArraySpliterator_ConstructProps) 
    constructor(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, array: SubArray, start: number, stop: number) 
    static new(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, array: SubArray, start: number, stop: number): SubArraySpliterator
    _init(config?: SubArraySpliterator_ConstructProps): void
}

interface SupplierSpliterator_ConstructProps extends Spliterator_ConstructProps, GObject.Object_ConstructProps {

    // Own constructor properties of Gpseq-1.0.Gpseq.SupplierSpliterator

    g_type?: GObject.GType | null
    g_dup_func?: GObject.BoxedCopyFunc | null
    g_destroy_func?: GLib.DestroyNotify | null
}

interface SupplierSpliterator extends Spliterator {

    // Own properties of Gpseq-1.0.Gpseq.SupplierSpliterator

    readonly g_type: GObject.GType
    readonly g_dup_func: GObject.BoxedCopyFunc
    readonly g_destroy_func: GLib.DestroyNotify

    // Class property signals of Gpseq-1.0.Gpseq.SupplierSpliterator

    connect(sigName: "notify::g-type", callback: (($obj: SupplierSpliterator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-type", callback: (($obj: SupplierSpliterator, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-type", ...args: any[]): void
    connect(sigName: "notify::g-dup-func", callback: (($obj: SupplierSpliterator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-dup-func", callback: (($obj: SupplierSpliterator, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-dup-func", ...args: any[]): void
    connect(sigName: "notify::g-destroy-func", callback: (($obj: SupplierSpliterator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-destroy-func", callback: (($obj: SupplierSpliterator, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-destroy-func", ...args: any[]): void
    connect(sigName: "notify::estimated-size", callback: (($obj: SupplierSpliterator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::estimated-size", callback: (($obj: SupplierSpliterator, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::estimated-size", ...args: any[]): void
    connect(sigName: "notify::is-size-known", callback: (($obj: SupplierSpliterator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-size-known", callback: (($obj: SupplierSpliterator, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-size-known", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class SupplierSpliterator extends GObject.Object {

    // Own properties of Gpseq-1.0.Gpseq.SupplierSpliterator

    static name: string
    static $gtype: GObject.GType<SupplierSpliterator>

    // Constructors of Gpseq-1.0.Gpseq.SupplierSpliterator

    constructor(config?: SupplierSpliterator_ConstructProps) 
    constructor(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, supplier: Supplier) 
    static new(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, supplier: Supplier): SupplierSpliterator
    _init(config?: SupplierSpliterator_ConstructProps): void
}

interface TaskEnv_ConstructProps extends GObject.Object_ConstructProps {
}

interface TaskEnv {

    // Own properties of Gpseq-1.0.Gpseq.TaskEnv

    readonly executor: Executor

    // Owm methods of Gpseq-1.0.Gpseq.TaskEnv

    get_executor(): Executor
    resolve_threshold(elements: number, threads: number): number
    resolve_max_depth(elements: number, threads: number): number

    // Own virtual methods of Gpseq-1.0.Gpseq.TaskEnv

    vfunc_get_executor(): Executor
    vfunc_resolve_threshold(elements: number, threads: number): number
    vfunc_resolve_max_depth(elements: number, threads: number): number

    // Class property signals of Gpseq-1.0.Gpseq.TaskEnv

    connect(sigName: "notify::executor", callback: (($obj: TaskEnv, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::executor", callback: (($obj: TaskEnv, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::executor", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class TaskEnv extends GObject.Object {

    // Own properties of Gpseq-1.0.Gpseq.TaskEnv

    static name: string
    static $gtype: GObject.GType<TaskEnv>

    // Constructors of Gpseq-1.0.Gpseq.TaskEnv

    constructor(config?: TaskEnv_ConstructProps) 
    _init(config?: TaskEnv_ConstructProps): void
    static get_default_task_env(): TaskEnv
    static set_default_task_env(task_env: TaskEnv): void
    static get_common_task_env(): TaskEnv
    static push(task_env: TaskEnv): void
    static pop(): void
    static apply(task_env: TaskEnv, func: VoidFunc): void
}

interface WaitGroup_ConstructProps extends GObject.Object_ConstructProps {
}

interface WaitGroup {

    // Owm methods of Gpseq-1.0.Gpseq.WaitGroup

    add(delta: number): void
    done(): void
    task(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, func: TaskFunc): Future
    run(func: VoidTaskFunc): Future
    wait(): void
    wait_until(end_time: number): boolean

    // Class property signals of Gpseq-1.0.Gpseq.WaitGroup

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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

    max_threads?: number | null
}

interface WorkerPool extends Executor {

    // Own properties of Gpseq-1.0.Gpseq.WorkerPool

    max_threads: number
    readonly num_threads: number
    readonly factory: ThreadFactory
    readonly is_terminating: boolean
    readonly is_terminated: boolean
    readonly is_terminating_started: boolean

    // Owm methods of Gpseq-1.0.Gpseq.WorkerPool

    get_max_threads(): number
    set_max_threads(value: number): void
    get_num_threads(): number
    get_factory(): ThreadFactory
    get_is_terminating(): boolean
    get_is_terminated(): boolean
    get_is_terminating_started(): boolean
    terminate(): void
    terminate_now(): void
    wait_termination(): void
    wait_termination_until(end_time: number): void

    // Class property signals of Gpseq-1.0.Gpseq.WorkerPool

    connect(sigName: "notify::max-threads", callback: (($obj: WorkerPool, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-threads", callback: (($obj: WorkerPool, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::max-threads", ...args: any[]): void
    connect(sigName: "notify::num-threads", callback: (($obj: WorkerPool, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::num-threads", callback: (($obj: WorkerPool, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::num-threads", ...args: any[]): void
    connect(sigName: "notify::factory", callback: (($obj: WorkerPool, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::factory", callback: (($obj: WorkerPool, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::factory", ...args: any[]): void
    connect(sigName: "notify::is-terminating", callback: (($obj: WorkerPool, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-terminating", callback: (($obj: WorkerPool, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-terminating", ...args: any[]): void
    connect(sigName: "notify::is-terminated", callback: (($obj: WorkerPool, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-terminated", callback: (($obj: WorkerPool, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-terminated", ...args: any[]): void
    connect(sigName: "notify::is-terminating-started", callback: (($obj: WorkerPool, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-terminating-started", callback: (($obj: WorkerPool, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-terminating-started", ...args: any[]): void
    connect(sigName: "notify::parallels", callback: (($obj: WorkerPool, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parallels", callback: (($obj: WorkerPool, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parallels", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class WorkerPool extends GObject.Object {

    // Own properties of Gpseq-1.0.Gpseq.WorkerPool

    static name: string
    static $gtype: GObject.GType<WorkerPool>

    // Constructors of Gpseq-1.0.Gpseq.WorkerPool

    constructor(config?: WorkerPool_ConstructProps) 
    static with_defaults(): WorkerPool
    constructor(parallels: number, factory: ThreadFactory) 
    static new(parallels: number, factory: ThreadFactory): WorkerPool
    _init(config?: WorkerPool_ConstructProps): void
    static get_default_factory(): ThreadFactory
}

interface WorkerThread_ConstructProps extends GObject.Object_ConstructProps {
}

interface WorkerThread {

    // Own properties of Gpseq-1.0.Gpseq.WorkerThread

    readonly thread: GLib.Thread
    readonly pool: WorkerPool
    readonly name: string
    readonly is_started: boolean
    readonly is_terminated: boolean
    readonly is_alive: boolean

    // Owm methods of Gpseq-1.0.Gpseq.WorkerThread

    get_thread(): GLib.Thread | null
    get_pool(): WorkerPool
    get_name(): string
    get_is_started(): boolean
    get_is_terminated(): boolean
    get_is_alive(): boolean
    start(): void
    join(): void
    blocking(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, func: TaskFunc): object | null

    // Class property signals of Gpseq-1.0.Gpseq.WorkerThread

    connect(sigName: "notify::thread", callback: (($obj: WorkerThread, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::thread", callback: (($obj: WorkerThread, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::thread", ...args: any[]): void
    connect(sigName: "notify::pool", callback: (($obj: WorkerThread, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pool", callback: (($obj: WorkerThread, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::pool", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: WorkerThread, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: WorkerThread, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::is-started", callback: (($obj: WorkerThread, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-started", callback: (($obj: WorkerThread, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-started", ...args: any[]): void
    connect(sigName: "notify::is-terminated", callback: (($obj: WorkerThread, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-terminated", callback: (($obj: WorkerThread, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-terminated", ...args: any[]): void
    connect(sigName: "notify::is-alive", callback: (($obj: WorkerThread, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-alive", callback: (($obj: WorkerThread, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-alive", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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
    static get_by(thread: GLib.Thread): WorkerThread | null
    static self(): WorkerThread | null
}

interface Wrapper_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of Gpseq-1.0.Gpseq.Wrapper

    g_type?: GObject.GType | null
    g_dup_func?: GObject.BoxedCopyFunc | null
    g_destroy_func?: GLib.DestroyNotify | null
}

interface Wrapper {

    // Own properties of Gpseq-1.0.Gpseq.Wrapper

    readonly g_type: GObject.GType
    readonly g_dup_func: GObject.BoxedCopyFunc
    readonly g_destroy_func: GLib.DestroyNotify
    readonly value: object
    readonly value_type: GObject.GType

    // Owm methods of Gpseq-1.0.Gpseq.Wrapper

    get_value(): object | null
    get_value_type(): GObject.GType

    // Class property signals of Gpseq-1.0.Gpseq.Wrapper

    connect(sigName: "notify::g-type", callback: (($obj: Wrapper, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-type", callback: (($obj: Wrapper, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-type", ...args: any[]): void
    connect(sigName: "notify::g-dup-func", callback: (($obj: Wrapper, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-dup-func", callback: (($obj: Wrapper, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-dup-func", ...args: any[]): void
    connect(sigName: "notify::g-destroy-func", callback: (($obj: Wrapper, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-destroy-func", callback: (($obj: Wrapper, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-destroy-func", ...args: any[]): void
    connect(sigName: "notify::value", callback: (($obj: Wrapper, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value", callback: (($obj: Wrapper, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::value", ...args: any[]): void
    connect(sigName: "notify::value-type", callback: (($obj: Wrapper, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value-type", callback: (($obj: Wrapper, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::value-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Wrapper extends GObject.Object {

    // Own properties of Gpseq-1.0.Gpseq.Wrapper

    static name: string
    static $gtype: GObject.GType<Wrapper>

    // Constructors of Gpseq-1.0.Gpseq.Wrapper

    constructor(config?: Wrapper_ConstructProps) 
    constructor(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, value?: object | null) 
    static new(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, value?: object | null): Wrapper
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
    wait_until: (self: Future, end_time: number) => [ /* returnType */ boolean, /* value */ object | null ]
    transform: (self: Future, a_type: GObject.GType, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, func: any) => Result
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

    leaf_compute: (self: SpliteratorTask) => object | null
    merge_results: (self: SpliteratorTask, left?: object | null, right?: object | null) => object | null
    make_child: (self: SpliteratorTask, spliterator: Spliterator) => SpliteratorTask
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

    resolve_threshold: (self: TaskEnv, elements: number, threads: number) => number
    resolve_max_depth: (self: TaskEnv, elements: number, threads: number) => number
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
    get_capacity: (self: ChannelBase) => Optional
    get_length: (self: ChannelBase) => number
    get_is_full: (self: ChannelBase) => boolean
    get_is_empty: (self: ChannelBase) => boolean
}

abstract class ChannelBaseIface {

    // Own properties of Gpseq-1.0.Gpseq.ChannelBaseIface

    static name: string
}

interface CollectorIface {

    // Own fields of Gpseq-1.0.Gpseq.CollectorIface

    create_accumulator: (self: Collector) => object | null
    accumulate: (self: Collector, g?: object | null, a?: object | null) => void
    combine: (self: Collector, a?: object | null, b?: object | null) => object | null
    finish: (self: Collector, a?: object | null) => object | null
    get_features: (self: Collector) => CollectorFeatures
}

abstract class CollectorIface {

    // Own properties of Gpseq-1.0.Gpseq.CollectorIface

    static name: string
}

interface ExecutorIface {

    // Own fields of Gpseq-1.0.Gpseq.ExecutorIface

    submit: (self: Executor, task: Task) => void
    get_parallels: (self: Executor) => number
}

abstract class ExecutorIface {

    // Own properties of Gpseq-1.0.Gpseq.ExecutorIface

    static name: string
}

interface ReceiverIface {

    // Own fields of Gpseq-1.0.Gpseq.ReceiverIface

    recv: (self: Receiver) => Result
    recv_until: (self: Receiver, end_time: number) => Result
    try_recv: (self: Receiver) => Result
}

abstract class ReceiverIface {

    // Own properties of Gpseq-1.0.Gpseq.ReceiverIface

    static name: string
}

interface ResultIface {

    // Own fields of Gpseq-1.0.Gpseq.ResultIface

    future: (self: Result) => Future
    get: (self: Result) => object | null
    transform: (self: Result, a_type: GObject.GType, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, func: any) => Result
    flat_map: (self: Result, a_type: GObject.GType, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, func: any) => Result
    map: (self: Result, a_type: GObject.GType, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, func: any) => Result
    map_err: (self: Result, func: any) => Result
    zip: (self: Result, a_type: GObject.GType, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, b_type: GObject.GType, b_dup_func: GObject.BoxedCopyFunc, b_destroy_func: GLib.DestroyNotify, zip_func: any, second: Result) => Result
    then: (self: Result, func: GLib.Func) => Result
    and_then: (self: Result, func: Func) => Result
}

abstract class ResultIface {

    // Own properties of Gpseq-1.0.Gpseq.ResultIface

    static name: string
}

interface SenderIface {

    // Own fields of Gpseq-1.0.Gpseq.SenderIface

    send: (self: Sender, data?: object | null) => Result
    send_until: (self: Sender, data: object | null, end_time: number) => Result
    try_send: (self: Sender, data?: object | null) => Result
}

abstract class SenderIface {

    // Own properties of Gpseq-1.0.Gpseq.SenderIface

    static name: string
}

interface SpliteratorIface {

    // Own fields of Gpseq-1.0.Gpseq.SpliteratorIface

    try_split: (self: Spliterator) => Spliterator | null
    try_advance: (self: Spliterator, consumer: Func) => boolean
    each: (self: Spliterator, f: Func) => void
    each_chunk: (self: Spliterator, f: EachChunkFunc) => boolean
    get_estimated_size: (self: Spliterator) => number
    get_is_size_known: (self: Spliterator) => boolean
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
    get_future: (self: Task) => Future
}

abstract class TaskIface {

    // Own properties of Gpseq-1.0.Gpseq.TaskIface

    static name: string
}

interface ThreadFactoryIface {

    // Own fields of Gpseq-1.0.Gpseq.ThreadFactoryIface

    create_thread: (self: ThreadFactory, pool: WorkerPool) => WorkerThread
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