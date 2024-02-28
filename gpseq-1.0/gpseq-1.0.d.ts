/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './gpseq-1.0-ambient.d.ts';
import './gpseq-1.0-import.d.ts';
/**
 * Gpseq-1.0
 */

import type Gee from '@girs/gee-0.8';
import type Gio from '@girs/gio-2.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';

export namespace Gpseq {
    class ChannelError extends GLib.Error {
        // Own fields of Gpseq-1.0.ChannelError

        CLOSED: number;
        TIMEOUT: number;
        TRY_FAILED: number;

        // Constructors of Gpseq-1.0.ChannelError

        constructor(options: { message: string; code: number });
    }

    class MapError extends GLib.Error {
        // Own fields of Gpseq-1.0.MapError

        DUPLICATE_KEY: number;

        // Constructors of Gpseq-1.0.MapError

        constructor(options: { message: string; code: number });
    }

    class OptionalError extends GLib.Error {
        // Own fields of Gpseq-1.0.OptionalError

        NOT_PRESENT: number;

        // Constructors of Gpseq-1.0.OptionalError

        constructor(options: { message: string; code: number });
    }

    function collectors_to_generic_array(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc): Collector;
    function collectors_to_collection(
        g_type: GObject.GType,
        g_dup_func: GObject.BoxedCopyFunc,
        factory: Supplier,
    ): Collector;
    function collectors_to_list(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc): Collector;
    function collectors_to_set(
        g_type: GObject.GType,
        g_dup_func: GObject.BoxedCopyFunc,
        hash: Gee.HashDataFunc,
        equal: Gee.EqualDataFunc,
    ): Collector;
    function collectors_to_map(
        k_type: GObject.GType,
        k_dup_func: GObject.BoxedCopyFunc,
        v_type: GObject.GType,
        v_dup_func: GObject.BoxedCopyFunc,
        g_type: GObject.GType,
        g_dup_func: GObject.BoxedCopyFunc,
        key_mapper: MapFunc,
        val_mapper: MapFunc,
        merger: CombineFunc,
        key_hash: Gee.HashDataFunc,
        key_equal: Gee.EqualDataFunc,
        value_equal: Gee.EqualDataFunc,
    ): Collector;
    function collectors_sum_int(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, mapper: MapFunc): Collector;
    function collectors_sum_uint(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, mapper: MapFunc): Collector;
    function collectors_sum_long(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, mapper: MapFunc): Collector;
    function collectors_sum_ulong(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, mapper: MapFunc): Collector;
    function collectors_sum_float(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, mapper: MapFunc): Collector;
    function collectors_sum_double(
        g_type: GObject.GType,
        g_dup_func: GObject.BoxedCopyFunc,
        mapper: MapFunc,
    ): Collector;
    function collectors_sum_int32(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, mapper: MapFunc): Collector;
    function collectors_sum_uint32(
        g_type: GObject.GType,
        g_dup_func: GObject.BoxedCopyFunc,
        mapper: MapFunc,
    ): Collector;
    function collectors_sum_int64(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, mapper: MapFunc): Collector;
    function collectors_sum_uint64(
        g_type: GObject.GType,
        g_dup_func: GObject.BoxedCopyFunc,
        mapper: MapFunc,
    ): Collector;
    function collectors_average_float(
        g_type: GObject.GType,
        g_dup_func: GObject.BoxedCopyFunc,
        mapper: MapFunc,
    ): Collector;
    function collectors_average_double(
        g_type: GObject.GType,
        g_dup_func: GObject.BoxedCopyFunc,
        mapper: MapFunc,
    ): Collector;
    function collectors_group_by(
        k_type: GObject.GType,
        k_dup_func: GObject.BoxedCopyFunc,
        g_type: GObject.GType,
        g_dup_func: GObject.BoxedCopyFunc,
        classifier: MapFunc,
    ): Collector;
    function collectors_group_by_with(
        k_type: GObject.GType,
        k_dup_func: GObject.BoxedCopyFunc,
        v_type: GObject.GType,
        v_dup_func: GObject.BoxedCopyFunc,
        g_type: GObject.GType,
        g_dup_func: GObject.BoxedCopyFunc,
        classifier: MapFunc,
        downstream: Collector,
    ): Collector;
    function collectors_partition(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, pred: Predicate): Collector;
    function collectors_partition_with(
        v_type: GObject.GType,
        v_dup_func: GObject.BoxedCopyFunc,
        g_type: GObject.GType,
        g_dup_func: GObject.BoxedCopyFunc,
        pred: Predicate,
        downstream: Collector,
    ): Collector;
    function collectors_max(
        g_type: GObject.GType,
        g_dup_func: GObject.BoxedCopyFunc,
        compare: GLib.CompareDataFunc,
    ): Collector;
    function collectors_min(
        g_type: GObject.GType,
        g_dup_func: GObject.BoxedCopyFunc,
        compare: GLib.CompareDataFunc,
    ): Collector;
    function collectors_count(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc): Collector;
    function collectors_fold(
        a_type: GObject.GType,
        a_dup_func: GObject.BoxedCopyFunc,
        g_type: GObject.GType,
        g_dup_func: GObject.BoxedCopyFunc,
        accumulator: FoldFunc,
        combiner: CombineFunc,
        identity: any,
    ): Collector;
    function collectors_reduce(
        g_type: GObject.GType,
        g_dup_func: GObject.BoxedCopyFunc,
        accumulator: CombineFunc,
    ): Collector;
    function collectors_join(delimiter: string): Collector;
    function collectors_filter(
        a_type: GObject.GType,
        a_dup_func: GObject.BoxedCopyFunc,
        g_type: GObject.GType,
        g_dup_func: GObject.BoxedCopyFunc,
        pred: Predicate,
        downstream: Collector,
    ): Collector;
    function collectors_tee(
        a_type: GObject.GType,
        a_dup_func: GObject.BoxedCopyFunc,
        g_type: GObject.GType,
        g_dup_func: GObject.BoxedCopyFunc,
        downstreams: Collector[],
        merger: TeeMergeFunc,
    ): Collector;
    function collectors_map(
        r_type: GObject.GType,
        r_dup_func: GObject.BoxedCopyFunc,
        a_type: GObject.GType,
        a_dup_func: GObject.BoxedCopyFunc,
        g_type: GObject.GType,
        g_dup_func: GObject.BoxedCopyFunc,
        mapper: MapFunc,
        downstream: Collector,
    ): Collector;
    function collectors_wrap(
        a_type: GObject.GType,
        a_dup_func: GObject.BoxedCopyFunc,
        g_type: GObject.GType,
        g_dup_func: GObject.BoxedCopyFunc,
        collector: Collector,
    ): Collector;
    function compares_reverse(
        g_type: GObject.GType,
        g_dup_func: GObject.BoxedCopyFunc,
        cmp: GLib.CompareDataFunc,
    ): GLib.CompareDataFunc;
    function compares_join(
        g_type: GObject.GType,
        g_dup_func: GObject.BoxedCopyFunc,
        cmp: GLib.CompareDataFunc,
        cmp2: GLib.CompareDataFunc,
    ): GLib.CompareDataFunc;
    function overflow_int_add(a: number, b: number): boolean;
    function overflow_int_sub(a: number, b: number): boolean;
    function overflow_int_mul(a: number, b: number): boolean;
    function overflow_long_add(a: number, b: number): boolean;
    function overflow_long_sub(a: number, b: number): boolean;
    function overflow_long_mul(a: number, b: number): boolean;
    function overflow_int32_add(a: number, b: number): boolean;
    function overflow_int32_sub(a: number, b: number): boolean;
    function overflow_int32_mul(a: number, b: number): boolean;
    function overflow_int64_add(a: number, b: number): boolean;
    function overflow_int64_sub(a: number, b: number): boolean;
    function overflow_int64_mul(a: number, b: number): boolean;
    function parallel_sort(
        g_type: GObject.GType,
        g_dup_func: GObject.BoxedCopyFunc,
        array: any[],
        compare: GLib.CompareDataFunc,
    ): Future;
    function task(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, func: TaskFunc): Future;
    function run(func: VoidTaskFunc): Future;
    function blocking(func: VoidTaskFunc): void;
    function blocking_get(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, func: TaskFunc): any;
    function join(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, left: TaskFunc): any[];
    function atomic_int64_get(atomic: number): number;
    function atomic_int64_set(atomic: number, newval: number): void;
    function atomic_int64_inc(atomic: number): void;
    function atomic_int64_dec_and_test(atomic: number): boolean;
    function atomic_int64_compare_and_exchange(atomic: number, oldval: number, newval: number): boolean;
    function atomic_int64_add(atomic: number, val: number): number;
    function atomic_int64_and(atomic: number, val: number): number;
    function atomic_int64_or(atomic: number, val: number): number;
    function atomic_int64_xor(atomic: number, val: number): number;
    interface CombineFunc {
        (g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, a: any, b: any): any;
    }
    interface EachChunkFunc {
        (g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, chunk: any[]): boolean;
    }
    interface FlatMapFunc {
        (
            a_type: GObject.GType,
            a_dup_func: GObject.BoxedCopyFunc,
            g_type: GObject.GType,
            g_dup_func: GObject.BoxedCopyFunc,
            g: any,
        ): Gee.Iterator;
    }
    interface FoldFunc {
        (
            a_type: GObject.GType,
            a_dup_func: GObject.BoxedCopyFunc,
            g_type: GObject.GType,
            g_dup_func: GObject.BoxedCopyFunc,
            g: any,
            a: any,
        ): any;
    }
    interface Func {
        (g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g: any): void;
    }
    interface MapFunc {
        (
            a_type: GObject.GType,
            a_dup_func: GObject.BoxedCopyFunc,
            g_type: GObject.GType,
            g_dup_func: GObject.BoxedCopyFunc,
            g: any,
        ): any;
    }
    interface Predicate {
        (g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g: any): boolean;
    }
    interface SupplyFunc {
        (g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc): any;
    }
    interface TaskFunc {
        (g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc): any;
    }
    interface TeeMergeFunc {
        (a_type: GObject.GType, a_dup_func: GObject.BoxedCopyFunc, results: GObject.Object[]): any;
    }
    interface VoidFunc {
        (): void;
    }
    interface VoidTaskFunc {
        (): void;
    }
    enum CollectorFeatures {
        CONCURRENT,
        UNORDERED,
    }
    module ArraySpliterator {
        // Constructor properties interface
    }

    class ArraySpliterator extends GObject.Object {
        // Own properties of Gpseq-1.0.ArraySpliterator

        g_type: GObject.GType;
        gType: GObject.GType;
        g_dup_func: GObject.BoxedCopyFunc;
        gDupFunc: GObject.BoxedCopyFunc;
        g_destroy_func: GLib.DestroyNotify;
        gDestroyFunc: GLib.DestroyNotify;

        // Constructors of Gpseq-1.0.ArraySpliterator

        static ['new'](
            g_type: GObject.GType,
            g_dup_func: GObject.BoxedCopyFunc,
            array: any[],
            start: number,
            stop: number,
        ): ArraySpliterator;
    }

    module ForkJoinTask {
        // Constructor properties interface
    }

    abstract class ForkJoinTask extends GObject.Object {
        // Own properties of Gpseq-1.0.ForkJoinTask

        g_type: GObject.GType;
        gType: GObject.GType;
        g_dup_func: GObject.BoxedCopyFunc;
        gDupFunc: GObject.BoxedCopyFunc;
        g_destroy_func: GLib.DestroyNotify;
        gDestroyFunc: GLib.DestroyNotify;
        readonly parent: ForkJoinTask;
        readonly root: ForkJoinTask;
        readonly is_root: boolean;
        readonly isRoot: boolean;
        readonly threshold: number;
        readonly max_depth: number;
        readonly maxDepth: number;
        depth: number;
        readonly executor: Executor;
        readonly promise: Promise;
        readonly shared_result: ForkJoinTaskSharedResult;
        readonly sharedResult: ForkJoinTaskSharedResult;
        readonly is_cancelled: boolean;
        readonly isCancelled: boolean;

        // Owm methods of Gpseq-1.0.ForkJoinTask

        get_parent(): ForkJoinTask;
        get_root(): ForkJoinTask;
        get_is_root(): boolean;
        get_threshold(): number;
        get_max_depth(): number;
        get_depth(): number;
        set_depth(value: number): void;
        get_executor(): Executor;
        get_promise(): Promise;
        join(): any;
        fork(): void;
        get_shared_result(): ForkJoinTaskSharedResult;
        cancel(): void;
        get_is_cancelled(): boolean;
        compute(): void;
    }

    class ForkJoinTaskSharedResult {
        // Own fields of Gpseq-1.0.ForkJoinTaskSharedResult

        ref_count: number;

        // Constructors of Gpseq-1.0.ForkJoinTaskSharedResult

        static ['new'](g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc): ForkJoinTaskSharedResult;

        // Owm methods of Gpseq-1.0.ForkJoinTaskSharedResult

        get_ready(): boolean;
        get_value(): any;
        set_value(value: any): void;
        get_error(): GLib.Error;
        set_error(value: GLib.Error): void;
        bake_promise(promise: Promise): void;
    }

    module FuncTask {
        // Constructor properties interface
    }

    class FuncTask extends GObject.Object {
        // Own properties of Gpseq-1.0.FuncTask

        g_type: GObject.GType;
        gType: GObject.GType;
        g_dup_func: GObject.BoxedCopyFunc;
        gDupFunc: GObject.BoxedCopyFunc;
        g_destroy_func: GLib.DestroyNotify;
        gDestroyFunc: GLib.DestroyNotify;

        // Constructors of Gpseq-1.0.FuncTask

        static ['new'](g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, func: TaskFunc): FuncTask;
    }

    module Future {
        // Constructor properties interface
    }

    abstract class Future extends GObject.Object {
        // Own properties of Gpseq-1.0.Future

        g_type: GObject.GType;
        gType: GObject.GType;
        g_dup_func: GObject.BoxedCopyFunc;
        gDupFunc: GObject.BoxedCopyFunc;
        g_destroy_func: GLib.DestroyNotify;
        gDestroyFunc: GLib.DestroyNotify;
        readonly ready: boolean;

        // Owm methods of Gpseq-1.0.Future

        static of(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, value: any): Future;
        static err(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, exception: GLib.Error): Future;
        static done(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, result: Result): Future;

        // Owm methods of Gpseq-1.0.Future

        get_ready(): boolean;
        wait(): any;
        wait_until(end_time: number): boolean;
        transform(a_type: GObject.GType, a_dup_func: GObject.BoxedCopyFunc, func: ResultTransformFunc): Result;
    }

    module GenericArraySpliterator {
        // Constructor properties interface
    }

    class GenericArraySpliterator extends GObject.Object {
        // Own properties of Gpseq-1.0.GenericArraySpliterator

        g_type: GObject.GType;
        gType: GObject.GType;
        g_dup_func: GObject.BoxedCopyFunc;
        gDupFunc: GObject.BoxedCopyFunc;
        g_destroy_func: GLib.DestroyNotify;
        gDestroyFunc: GLib.DestroyNotify;

        // Constructors of Gpseq-1.0.GenericArraySpliterator

        static ['new'](
            g_type: GObject.GType,
            g_dup_func: GObject.BoxedCopyFunc,
            array: any[],
            start: number,
            stop: number,
        ): GenericArraySpliterator;
    }

    module IteratorSpliterator {
        // Constructor properties interface
    }

    class IteratorSpliterator extends GObject.Object {
        // Own properties of Gpseq-1.0.IteratorSpliterator

        g_type: GObject.GType;
        gType: GObject.GType;
        g_dup_func: GObject.BoxedCopyFunc;
        gDupFunc: GObject.BoxedCopyFunc;
        g_destroy_func: GLib.DestroyNotify;
        gDestroyFunc: GLib.DestroyNotify;

        // Constructors of Gpseq-1.0.IteratorSpliterator

        static ['new'](
            g_type: GObject.GType,
            g_dup_func: GObject.BoxedCopyFunc,
            iterator: Gee.Iterator,
            estimated_size: number,
            size_known: boolean,
        ): IteratorSpliterator;

        static from_collection(
            g_type: GObject.GType,
            g_dup_func: GObject.BoxedCopyFunc,
            collection: Gee.Collection,
        ): IteratorSpliterator;
    }

    module ListSpliterator {
        // Constructor properties interface
    }

    class ListSpliterator extends GObject.Object {
        // Own properties of Gpseq-1.0.ListSpliterator

        g_type: GObject.GType;
        gType: GObject.GType;
        g_dup_func: GObject.BoxedCopyFunc;
        gDupFunc: GObject.BoxedCopyFunc;
        g_destroy_func: GLib.DestroyNotify;
        gDestroyFunc: GLib.DestroyNotify;

        // Constructors of Gpseq-1.0.ListSpliterator

        static ['new'](
            g_type: GObject.GType,
            g_dup_func: GObject.BoxedCopyFunc,
            list: Gee.List,
            start: number,
            stop: number,
        ): ListSpliterator;
    }

    module Optional {
        // Constructor properties interface
    }

    class Optional extends GObject.Object {
        // Own properties of Gpseq-1.0.Optional

        g_type: GObject.GType;
        gType: GObject.GType;
        g_dup_func: GObject.BoxedCopyFunc;
        gDupFunc: GObject.BoxedCopyFunc;
        g_destroy_func: GLib.DestroyNotify;
        gDestroyFunc: GLib.DestroyNotify;
        readonly value_type: GObject.GType;
        readonly valueType: GObject.GType;
        readonly value: any;
        readonly is_present: boolean;
        readonly isPresent: boolean;

        // Constructors of Gpseq-1.0.Optional

        static empty(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc): Optional;

        static of(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, value: any): Optional;

        static ['new'](g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc): Optional;

        // Owm methods of Gpseq-1.0.Optional

        get_value_type(): GObject.GType;
        get_value(): any;
        get_is_present(): boolean;
        to_string(): string;
        if_present(consumer: GLib.Func): void;
        or_else(other: any): any;
        or_else_get(supplier: SupplyFunc): any;
        or_else_throw(error_supplier: SupplyFunc): any;
        or_else_fail(): any;
        filter(pred: Gee.Predicate): Optional;
        map(a_type: GObject.GType, a_dup_func: GObject.BoxedCopyFunc, mapper: Gee.MapFunc): Optional;
    }

    class Promise {
        // Own fields of Gpseq-1.0.Promise

        ref_count: number;

        // Constructors of Gpseq-1.0.Promise

        static ['new'](g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc): Promise;

        // Owm methods of Gpseq-1.0.Promise

        get_future(): Future;
        set_value(value: any): void;
        set_exception(exception: GLib.Error): void;
    }

    module Seq {
        // Constructor properties interface
    }

    class Seq extends GObject.Object {
        // Own properties of Gpseq-1.0.Seq

        g_type: GObject.GType;
        gType: GObject.GType;
        g_dup_func: GObject.BoxedCopyFunc;
        gDupFunc: GObject.BoxedCopyFunc;
        g_destroy_func: GLib.DestroyNotify;
        gDestroyFunc: GLib.DestroyNotify;
        readonly element_type: GObject.GType;
        readonly elementType: GObject.GType;
        readonly task_env: TaskEnv;
        readonly taskEnv: TaskEnv;
        readonly is_closed: boolean;
        readonly isClosed: boolean;
        readonly is_parallel: boolean;
        readonly isParallel: boolean;

        // Constructors of Gpseq-1.0.Seq

        static ['new'](
            g_type: GObject.GType,
            g_dup_func: GObject.BoxedCopyFunc,
            spliterator: Spliterator,
            env: TaskEnv,
        ): Seq;

        // Owm methods of Gpseq-1.0.Seq

        static of_array(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, array: any[], env: TaskEnv): Seq;
        static of_owned_array(
            g_type: GObject.GType,
            g_dup_func: GObject.BoxedCopyFunc,
            array: any[],
            env: TaskEnv,
        ): Seq;
        static of_generic_array(
            g_type: GObject.GType,
            g_dup_func: GObject.BoxedCopyFunc,
            array: any[],
            env: TaskEnv,
        ): Seq;
        static of_iterator(
            g_type: GObject.GType,
            g_dup_func: GObject.BoxedCopyFunc,
            iterator: Gee.Iterator,
            estimated_size: number,
            size_known: boolean,
            env: TaskEnv,
        ): Seq;
        static of_collection(
            g_type: GObject.GType,
            g_dup_func: GObject.BoxedCopyFunc,
            collection: Gee.Collection,
            env: TaskEnv,
        ): Seq;
        static of_list(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, list: Gee.List, env: TaskEnv): Seq;
        static of_supplier(
            g_type: GObject.GType,
            g_dup_func: GObject.BoxedCopyFunc,
            supplier: Supplier,
            env: TaskEnv,
        ): Seq;
        static of_supply_func(
            g_type: GObject.GType,
            g_dup_func: GObject.BoxedCopyFunc,
            func: SupplyFunc,
            env: TaskEnv,
        ): Seq;
        static iterate(
            g_type: GObject.GType,
            g_dup_func: GObject.BoxedCopyFunc,
            seed: any,
            pred: Gee.Predicate,
            next: Gee.MapFunc,
            env: TaskEnv,
        ): Seq;
        static empty(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc): Seq;

        // Owm methods of Gpseq-1.0.Seq

        get_element_type(): GObject.GType;
        get_task_env(): TaskEnv;
        get_is_closed(): boolean;
        close(): void;
        get_is_parallel(): boolean;
        sequential(): Seq;
        parallel(): Seq;
        iterator(): Gee.Iterator;
        spliterator(): Spliterator;
        count(): Future;
        distinct(hash: Gee.HashDataFunc, equal: Gee.EqualDataFunc): Seq;
        all_match(pred: Predicate): Future;
        any_match(pred: Predicate): Future;
        none_match(pred: Predicate): Future;
        find_any(pred: Predicate): Future;
        find_first(pred: Predicate): Future;
        skip(n: number): Seq;
        limit(n: number): Seq;
        chop(offset: number, length: number): Seq;
        skip_ordered(n: number): Seq;
        limit_ordered(n: number): Seq;
        chop_ordered(offset: number, length: number): Seq;
        filter(pred: Predicate): Seq;
        fold(
            a_type: GObject.GType,
            a_dup_func: GObject.BoxedCopyFunc,
            accumulator: FoldFunc,
            combiner: CombineFunc,
            identity: any,
        ): Future;
        reduce(accumulator: CombineFunc): Future;
        map(a_type: GObject.GType, a_dup_func: GObject.BoxedCopyFunc, mapper: MapFunc): Seq;
        flat_map(a_type: GObject.GType, a_dup_func: GObject.BoxedCopyFunc, mapper: FlatMapFunc): Seq;
        max(compare: GLib.CompareDataFunc): Future;
        min(compare: GLib.CompareDataFunc): Future;
        order_by(compare: GLib.CompareDataFunc): Seq;
        reverse_order_by(compare: GLib.CompareDataFunc): Seq;
        foreach(f: Func): Future;
        collect(
            r_type: GObject.GType,
            r_dup_func: GObject.BoxedCopyFunc,
            a_type: GObject.GType,
            a_dup_func: GObject.BoxedCopyFunc,
            collector: Collector,
        ): Future;
        collect_ordered(
            r_type: GObject.GType,
            r_dup_func: GObject.BoxedCopyFunc,
            a_type: GObject.GType,
            a_dup_func: GObject.BoxedCopyFunc,
            collector: Collector,
        ): Future;
        group_by(k_type: GObject.GType, k_dup_func: GObject.BoxedCopyFunc, classifier: MapFunc): Future;
        partition(pred: Predicate): Future;
        to_generic_array(): Future;
        to_list(): Future;
        to_set(hash: Gee.HashDataFunc, equal: Gee.EqualDataFunc): Future;
        to_map(
            k_type: GObject.GType,
            k_dup_func: GObject.BoxedCopyFunc,
            v_type: GObject.GType,
            v_dup_func: GObject.BoxedCopyFunc,
            key_mapper: MapFunc,
            val_mapper: MapFunc,
            merger: CombineFunc,
            key_hash: Gee.HashDataFunc,
            key_equal: Gee.EqualDataFunc,
            value_equal: Gee.EqualDataFunc,
        ): Future;
    }

    module SpliteratorTask {
        // Constructor properties interface
    }

    abstract class SpliteratorTask extends ForkJoinTask {
        // Own properties of Gpseq-1.0.SpliteratorTask

        r_type: GObject.GType;
        rType: GObject.GType;
        r_dup_func: GObject.BoxedCopyFunc;
        rDupFunc: GObject.BoxedCopyFunc;
        r_destroy_func: GLib.DestroyNotify;
        rDestroyFunc: GLib.DestroyNotify;
        g_type: GObject.GType;
        gType: GObject.GType;
        g_dup_func: GObject.BoxedCopyFunc;
        gDupFunc: GObject.BoxedCopyFunc;
        g_destroy_func: GLib.DestroyNotify;
        gDestroyFunc: GLib.DestroyNotify;
        readonly spliterator: Spliterator;
        readonly left_child: SpliteratorTask;
        readonly leftChild: SpliteratorTask;
        readonly right_child: SpliteratorTask;
        readonly rightChild: SpliteratorTask;
        readonly is_leaf: boolean;
        readonly isLeaf: boolean;
        readonly is_leftmost: boolean;
        readonly isLeftmost: boolean;
        readonly empty_result: any;
        readonly emptyResult: any;

        // Owm methods of Gpseq-1.0.SpliteratorTask

        get_spliterator(): Spliterator;
        get_left_child(): SpliteratorTask;
        get_right_child(): SpliteratorTask;
        get_is_leaf(): boolean;
        get_is_leftmost(): boolean;
        cancel_later_nodes(): void;
        get_empty_result(): any;
        leaf_compute(): any;
        merge_results(left: any, right: any): any;
        make_child(spliterator: Spliterator): SpliteratorTask;
    }

    module SubArray {
        // Constructor properties interface
    }

    class SubArray extends GObject.Object {
        // Own properties of Gpseq-1.0.SubArray

        g_type: GObject.GType;
        gType: GObject.GType;
        g_dup_func: GObject.BoxedCopyFunc;
        gDupFunc: GObject.BoxedCopyFunc;
        g_destroy_func: GLib.DestroyNotify;
        gDestroyFunc: GLib.DestroyNotify;
        readonly size: number;

        // Constructors of Gpseq-1.0.SubArray

        static ['new'](g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, data: any[]): SubArray;

        static from_sub_array(
            g_type: GObject.GType,
            g_dup_func: GObject.BoxedCopyFunc,
            array: SubArray,
            start: number,
            stop: number,
        ): SubArray;

        // Owm methods of Gpseq-1.0.SubArray

        get_data(): any[];
        get_size(): number;
        get(index: number): any;
        set(index: number, item: any): void;
        sort(compare_func: GLib.CompareDataFunc): void;
        copy(start: number, src: SubArray, src_start: number, count: number): void;
        copy_array(start: number, src: any[], src_start: number, count: number): void;
        sub_array(start: number, stop: number): SubArray;
    }

    module SubArraySpliterator {
        // Constructor properties interface
    }

    class SubArraySpliterator extends GObject.Object {
        // Own properties of Gpseq-1.0.SubArraySpliterator

        g_type: GObject.GType;
        gType: GObject.GType;
        g_dup_func: GObject.BoxedCopyFunc;
        gDupFunc: GObject.BoxedCopyFunc;
        g_destroy_func: GLib.DestroyNotify;
        gDestroyFunc: GLib.DestroyNotify;

        // Constructors of Gpseq-1.0.SubArraySpliterator

        static ['new'](
            g_type: GObject.GType,
            g_dup_func: GObject.BoxedCopyFunc,
            array: SubArray,
            start: number,
            stop: number,
        ): SubArraySpliterator;
    }

    module SupplierSpliterator {
        // Constructor properties interface
    }

    class SupplierSpliterator extends GObject.Object {
        // Own properties of Gpseq-1.0.SupplierSpliterator

        g_type: GObject.GType;
        gType: GObject.GType;
        g_dup_func: GObject.BoxedCopyFunc;
        gDupFunc: GObject.BoxedCopyFunc;
        g_destroy_func: GLib.DestroyNotify;
        gDestroyFunc: GLib.DestroyNotify;

        // Constructors of Gpseq-1.0.SupplierSpliterator

        static ['new'](
            g_type: GObject.GType,
            g_dup_func: GObject.BoxedCopyFunc,
            supplier: Supplier,
        ): SupplierSpliterator;
    }

    module TaskEnv {
        // Constructor properties interface
    }

    abstract class TaskEnv extends GObject.Object {
        // Own properties of Gpseq-1.0.TaskEnv

        readonly executor: Executor;

        // Owm methods of Gpseq-1.0.TaskEnv

        static get_default_task_env(): TaskEnv;
        static set_default_task_env(task_env: TaskEnv): void;
        static get_common_task_env(): TaskEnv;
        static push(task_env: TaskEnv): void;
        static pop(): void;
        static apply(task_env: TaskEnv, func: VoidFunc): void;

        // Owm methods of Gpseq-1.0.TaskEnv

        get_executor(): Executor;
        resolve_threshold(elements: number, threads: number): number;
        resolve_max_depth(elements: number, threads: number): number;
    }

    module WaitGroup {
        // Constructor properties interface
    }

    class WaitGroup extends GObject.Object {
        // Constructors of Gpseq-1.0.WaitGroup

        static ['new'](): WaitGroup;

        // Owm methods of Gpseq-1.0.WaitGroup

        add(delta: number): void;
        done(): void;
        task(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, func: TaskFunc): Future;
        run(func: VoidTaskFunc): Future;
        wait(): void;
        wait_until(end_time: number): boolean;
    }

    module WorkerPool {
        // Constructor properties interface
    }

    class WorkerPool extends GObject.Object {
        // Own properties of Gpseq-1.0.WorkerPool

        max_threads: number;
        maxThreads: number;
        readonly num_threads: number;
        readonly numThreads: number;
        readonly factory: ThreadFactory;
        readonly is_terminating: boolean;
        readonly isTerminating: boolean;
        readonly is_terminated: boolean;
        readonly isTerminated: boolean;
        readonly is_terminating_started: boolean;
        readonly isTerminatingStarted: boolean;

        // Constructors of Gpseq-1.0.WorkerPool

        static with_defaults(): WorkerPool;

        static ['new'](parallels: number, factory: ThreadFactory): WorkerPool;

        // Owm methods of Gpseq-1.0.WorkerPool

        static get_default_factory(): ThreadFactory;

        // Owm methods of Gpseq-1.0.WorkerPool

        get_max_threads(): number;
        set_max_threads(value: number): void;
        get_num_threads(): number;
        get_factory(): ThreadFactory;
        get_is_terminating(): boolean;
        get_is_terminated(): boolean;
        get_is_terminating_started(): boolean;
        terminate(): void;
        terminate_now(): void;
        wait_termination(): void;
        wait_termination_until(end_time: number): void;
    }

    module WorkerThread {
        // Constructor properties interface
    }

    class WorkerThread extends GObject.Object {
        // Own properties of Gpseq-1.0.WorkerThread

        readonly thread: GLib.Thread;
        readonly pool: WorkerPool;
        readonly name: string;
        readonly is_started: boolean;
        readonly isStarted: boolean;
        readonly is_terminated: boolean;
        readonly isTerminated: boolean;
        readonly is_alive: boolean;
        readonly isAlive: boolean;

        // Constructors of Gpseq-1.0.WorkerThread

        static ['new'](pool: WorkerPool): WorkerThread;

        // Owm methods of Gpseq-1.0.WorkerThread

        static get_by(thread: GLib.Thread): WorkerThread;
        static self(): WorkerThread;

        // Owm methods of Gpseq-1.0.WorkerThread

        get_thread(): GLib.Thread;
        get_pool(): WorkerPool;
        get_name(): string;
        get_is_started(): boolean;
        get_is_terminated(): boolean;
        get_is_alive(): boolean;
        start(): void;
        join(): void;
        blocking(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, func: TaskFunc): any;
    }

    module Wrapper {
        // Constructor properties interface
    }

    class Wrapper extends GObject.Object {
        // Own properties of Gpseq-1.0.Wrapper

        g_type: GObject.GType;
        gType: GObject.GType;
        g_dup_func: GObject.BoxedCopyFunc;
        gDupFunc: GObject.BoxedCopyFunc;
        g_destroy_func: GLib.DestroyNotify;
        gDestroyFunc: GLib.DestroyNotify;
        readonly value: any;
        readonly value_type: GObject.GType;
        readonly valueType: GObject.GType;

        // Constructors of Gpseq-1.0.Wrapper

        static ['new'](g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, value: any): Wrapper;

        // Owm methods of Gpseq-1.0.Wrapper

        get_value(): any;
        get_value_type(): GObject.GType;
    }

    class ArraySpliteratorClass {}

    class ArraySpliteratorPrivate {}

    class ForkJoinTaskClass {}

    class ForkJoinTaskPrivate {}

    class ForkJoinTaskSharedResultClass {}

    class ForkJoinTaskSharedResultPrivate {}

    class FuncTaskClass {}

    class FuncTaskPrivate {}

    class FutureClass {}

    class FuturePrivate {}

    class GenericArraySpliteratorClass {}

    class GenericArraySpliteratorPrivate {}

    class IteratorSpliteratorClass {}

    class IteratorSpliteratorPrivate {}

    class ListSpliteratorClass {}

    class ListSpliteratorPrivate {}

    class OptionalClass {}

    class OptionalPrivate {}

    class PromiseClass {}

    class PromisePrivate {}

    class SeqClass {}

    class SeqPrivate {}

    class SpliteratorTaskClass {}

    class SpliteratorTaskPrivate {}

    class SubArrayClass {}

    class SubArrayPrivate {}

    class SubArraySpliteratorClass {}

    class SubArraySpliteratorPrivate {}

    class SupplierSpliteratorClass {}

    class SupplierSpliteratorPrivate {}

    class TaskEnvClass {}

    class TaskEnvPrivate {}

    class WaitGroupClass {}

    class WaitGroupPrivate {}

    class WorkerPoolClass {}

    class WorkerPoolPrivate {}

    class WorkerThreadClass {}

    class WorkerThreadPrivate {}

    class WrapperClass {}

    class WrapperPrivate {}

    class ChannelIface {}

    class ChannelBaseIface {}

    class CollectorIface {}

    class ExecutorIface {}

    class ReceiverIface {}

    class ResultIface {}

    class SenderIface {}

    class SpliteratorIface {}

    class SupplierIface {}

    class TaskIface {}

    class ThreadFactoryIface {}

    class CacheLinePad {}

    interface Channel {}

    interface ChannelBase {
        // Own properties of Gpseq-1.0.ChannelBase

        readonly capacity: Optional;
        readonly length: number;

        // Owm methods of Gpseq-1.0.ChannelBase

        get_capacity(): Optional;
        get_length(): number;
        get_is_full(): boolean;
        get_is_empty(): boolean;
        close(): void;

        // Own virtual methods of Gpseq-1.0.ChannelBase

        vfunc_get_capacity(): Optional;
        vfunc_get_length(): number;
        vfunc_get_is_full(): boolean;
        vfunc_get_is_empty(): boolean;
        vfunc_close(): void;
    }

    interface Collector {
        // Own properties of Gpseq-1.0.Collector

        readonly features: CollectorFeatures;

        // Owm methods of Gpseq-1.0.Collector

        get_features(): CollectorFeatures;
        create_accumulator(): any;
        accumulate(g: any, a: any): void;
        combine(a: any, b: any): any;
        finish(a: any): any;

        // Own virtual methods of Gpseq-1.0.Collector

        vfunc_get_features(): CollectorFeatures;
        vfunc_create_accumulator(): any;
        vfunc_accumulate(g: any, a: any): void;
        vfunc_combine(a: any, b: any): any;
        vfunc_finish(a: any): any;
    }

    interface Executor {
        // Own properties of Gpseq-1.0.Executor

        readonly parallels: number;

        // Owm methods of Gpseq-1.0.Executor

        submit(task: Task): void;
        get_parallels(): number;

        // Own virtual methods of Gpseq-1.0.Executor

        vfunc_submit(task: Task): void;
        vfunc_get_parallels(): number;
    }

    interface Receiver {
        // Owm methods of Gpseq-1.0.Receiver

        recv(): Result;
        recv_until(end_time: number): Result;
        try_recv(): Result;

        // Own virtual methods of Gpseq-1.0.Receiver

        vfunc_recv(): Result;
        vfunc_recv_until(end_time: number): Result;
        vfunc_try_recv(): Result;
    }

    interface Result {
        // Owm methods of Gpseq-1.0.Result

        get_value_type(): GObject.GType;
        get_value(): any;
        get_exception(): GLib.Error;
        get_is_err(): boolean;
        ok(): Result;
        ok_with(expected: any, equal: Gee.EqualDataFunc): Result;
        future(): Future;
        get(): any;
        transform(a_type: GObject.GType, a_dup_func: GObject.BoxedCopyFunc, func: ResultTransformFunc): Result;
        flat_map(a_type: GObject.GType, a_dup_func: GObject.BoxedCopyFunc, func: ResultFlatMapFunc): Result;
        map(a_type: GObject.GType, a_dup_func: GObject.BoxedCopyFunc, func: ResultMapFunc): Result;
        map_err(func: ResultMapErrorFunc): Result;
        zip(
            a_type: GObject.GType,
            a_dup_func: GObject.BoxedCopyFunc,
            b_type: GObject.GType,
            b_dup_func: GObject.BoxedCopyFunc,
            zip_func: ResultZipFunc,
            second: Result,
        ): Result;
        then(func: GLib.Func): Result;
        and_then(func: Func): Result;

        // Own virtual methods of Gpseq-1.0.Result

        vfunc_future(): Future;
        vfunc_get(): any;
        vfunc_transform(a_type: GObject.GType, a_dup_func: GObject.BoxedCopyFunc, func: ResultTransformFunc): Result;
        vfunc_flat_map(a_type: GObject.GType, a_dup_func: GObject.BoxedCopyFunc, func: ResultFlatMapFunc): Result;
        vfunc_map(a_type: GObject.GType, a_dup_func: GObject.BoxedCopyFunc, func: ResultMapFunc): Result;
        vfunc_map_err(func: ResultMapErrorFunc): Result;
        vfunc_zip(
            a_type: GObject.GType,
            a_dup_func: GObject.BoxedCopyFunc,
            b_type: GObject.GType,
            b_dup_func: GObject.BoxedCopyFunc,
            zip_func: ResultZipFunc,
            second: Result,
        ): Result;
        vfunc_then(func: GLib.Func): Result;
        vfunc_and_then(func: Func): Result;
    }

    interface Sender {
        // Owm methods of Gpseq-1.0.Sender

        send(data: any): Result;
        send_until(data: any, end_time: number): Result;
        try_send(data: any): Result;

        // Own virtual methods of Gpseq-1.0.Sender

        vfunc_send(data: any): Result;
        vfunc_send_until(data: any, end_time: number): Result;
        vfunc_try_send(data: any): Result;
    }

    interface Spliterator {
        // Own properties of Gpseq-1.0.Spliterator

        readonly estimated_size: number;
        readonly estimatedSize: number;
        readonly is_size_known: boolean;
        readonly isSizeKnown: boolean;

        // Owm methods of Gpseq-1.0.Spliterator

        get_element_type(): GObject.GType;
        try_split(): Spliterator;
        try_advance(consumer: Func): boolean;
        get_estimated_size(): number;
        get_is_size_known(): boolean;
        each(f: Func): void;
        each_chunk(f: EachChunkFunc): boolean;

        // Own virtual methods of Gpseq-1.0.Spliterator

        vfunc_try_split(): Spliterator;
        vfunc_try_advance(consumer: Func): boolean;
        vfunc_get_estimated_size(): number;
        vfunc_get_is_size_known(): boolean;
        vfunc_each(f: Func): void;
        vfunc_each_chunk(f: EachChunkFunc): boolean;
    }

    interface Supplier {
        // Owm methods of Gpseq-1.0.Supplier

        supply(): any;

        // Own virtual methods of Gpseq-1.0.Supplier

        vfunc_supply(): any;
    }

    interface Task {
        // Own properties of Gpseq-1.0.Task

        readonly future: Future;

        // Owm methods of Gpseq-1.0.Task

        get_future(): Future;
        compute(): void;
        invoke(): void;

        // Own virtual methods of Gpseq-1.0.Task

        vfunc_get_future(): Future;
        vfunc_compute(): void;
    }

    interface ThreadFactory {
        // Owm methods of Gpseq-1.0.ThreadFactory

        create_thread(pool: WorkerPool): WorkerThread;

        // Own virtual methods of Gpseq-1.0.ThreadFactory

        vfunc_create_thread(pool: WorkerPool): WorkerThread;
    }

    /**
     * Name of the imported GIR library
     * `see` https://gitlab.gnome.org/GNOME/gjs/-/blob/master/gi/ns.cpp#L188
     */
    const __name__: string;
    /**
     * Version of the imported GIR library
     * `see` https://gitlab.gnome.org/GNOME/gjs/-/blob/master/gi/ns.cpp#L189
     */
    const __version__: string;
}

export default Gpseq;
// END
