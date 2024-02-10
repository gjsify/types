/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './bump-0.1-ambient.d.ts';
import './bump-0.1-import.d.ts';
/**
 * Bump-0.1
 */

import type Gio from '@girs/gio-2.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type GModule from '@girs/gmodule-2.0';
import type Gee from '@girs/gee-0.8';

export namespace Bump {
    interface Callback {
        (g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc): any;
    }
    module AsyncPriorityQueue {
        // Signal callback interfaces

        interface ConsumerShortage {
            (): void;
        }

        // Constructor properties interface
    }

    class AsyncPriorityQueue extends Gee.PriorityQueue {
        // Own properties of Bump-0.1.AsyncPriorityQueue

        g_type: GObject.GType;
        gType: GObject.GType;
        g_dup_func: GObject.BoxedCopyFunc;
        gDupFunc: GObject.BoxedCopyFunc;
        g_destroy_func: GLib.DestroyNotify;
        gDestroyFunc: GLib.DestroyNotify;
        waiting_threads: number;
        waitingThreads: number;

        // Constructors of Bump-0.1.AsyncPriorityQueue

        static ['new'](
            g_type: GObject.GType,
            g_dup_func: GObject.BoxedCopyFunc,
            compare_func: GLib.CompareDataFunc,
        ): AsyncPriorityQueue;

        // Owm methods of Bump-0.1.AsyncPriorityQueue

        poll_timed(wait: GLib.TimeSpan): any;
        peek_timed(wait: GLib.TimeSpan): any;
        offer(element: any): boolean;
        get_waiting_threads(): number;
    }

    module Claim {
        // Constructor properties interface
    }

    class Claim extends GObject.Object {
        // Own properties of Bump-0.1.Claim

        readonly active: boolean;
        time_acquired: number;
        timeAcquired: number;
        time_released: number;
        timeReleased: number;
        readonly duration_held: GLib.TimeSpan;
        readonly durationHeld: GLib.TimeSpan;

        // Constructors of Bump-0.1.Claim

        static ['new'](): Claim;

        // Owm methods of Bump-0.1.Claim

        release(): void;
        init(cancellable: Gio.Cancellable): boolean;
        init_async(io_priority: number, cancellable: Gio.Cancellable, _callback_: Gio.AsyncReadyCallback<this>): void;
        init_finish(_res_: Gio.AsyncResult): boolean;
        get_active(): boolean;
        get_time_acquired(): number;
        get_time_released(): number;
        get_duration_held(): GLib.TimeSpan;
    }

    module Event {
        // Constructor properties interface
    }

    class Event extends GObject.Object {
        // Own properties of Bump-0.1.Event

        t_type: GObject.GType;
        tType: GObject.GType;
        t_dup_func: GObject.BoxedCopyFunc;
        tDupFunc: GObject.BoxedCopyFunc;
        t_destroy_func: GLib.DestroyNotify;
        tDestroyFunc: GLib.DestroyNotify;
        pool: TaskQueue;
        auto_reset: boolean;
        autoReset: boolean;
        triggered: boolean;

        // Constructors of Bump-0.1.Event

        static ['new'](t_type: GObject.GType, t_dup_func: GObject.BoxedCopyFunc, auto_reset: boolean): Event;

        // Owm methods of Bump-0.1.Event

        reset(): void;
        trigger(value: any): void;
        add(func: EventSourceFunc, priority: number, cancellable: Gio.Cancellable): void;
        execute(
            r_type: GObject.GType,
            r_dup_func: GObject.BoxedCopyFunc,
            func: EventCallback,
            priority: number,
            cancellable: Gio.Cancellable,
        ): any;
        execute_async(
            r_type: GObject.GType,
            r_dup_func: GObject.BoxedCopyFunc,
            func: EventCallback,
            priority: number,
            cancellable: Gio.Cancellable,
            _callback_: Gio.AsyncReadyCallback<this>,
        ): void;
        execute_finish(r_type: GObject.GType, r_dup_func: GObject.BoxedCopyFunc, _res_: Gio.AsyncResult): any;
        execute_background(
            r_type: GObject.GType,
            r_dup_func: GObject.BoxedCopyFunc,
            func: EventCallback,
            priority: number,
            cancellable: Gio.Cancellable,
            _callback_: Gio.AsyncReadyCallback<this>,
        ): void;
        execute_background_finish(
            r_type: GObject.GType,
            r_dup_func: GObject.BoxedCopyFunc,
            _res_: Gio.AsyncResult,
        ): any;
        get_pool(): TaskQueue;
        get_auto_reset(): boolean;
        get_triggered(): boolean;
    }

    module Factory {
        // Constructor properties interface
    }

    abstract class Factory extends GObject.Object {
        // Own properties of Bump-0.1.Factory

        g_type: GObject.GType;
        gType: GObject.GType;
        g_dup_func: GObject.BoxedCopyFunc;
        gDupFunc: GObject.BoxedCopyFunc;
        g_destroy_func: GLib.DestroyNotify;
        gDestroyFunc: GLib.DestroyNotify;

        // Owm methods of Bump-0.1.Factory

        create(priority: number, cancellable: Gio.Cancellable): any;
        create_async(priority: number, cancellable: Gio.Cancellable, _callback_: Gio.AsyncReadyCallback<this>): void;
        create_finish(_res_: Gio.AsyncResult): any;
        create_background(
            priority: number,
            cancellable: Gio.Cancellable,
            _callback_: Gio.AsyncReadyCallback<this>,
        ): void;
        create_background_finish(_res_: Gio.AsyncResult): any;
        acquire(priority: number, cancellable: Gio.Cancellable): any;
        acquire_async(priority: number, cancellable: Gio.Cancellable, _callback_: Gio.AsyncReadyCallback<this>): void;
        acquire_finish(_res_: Gio.AsyncResult): any;
        acquire_background(
            priority: number,
            cancellable: Gio.Cancellable,
            _callback_: Gio.AsyncReadyCallback<this>,
        ): void;
        acquire_background_finish(_res_: Gio.AsyncResult): any;
        get_construct_properties(): GObject.Parameter[];
        set_construct_properties(value: GObject.Parameter[]): void;
    }

    module Lazy {
        // Constructor properties interface
    }

    class Lazy extends Factory {
        // Own properties of Bump-0.1.Lazy

        t_type: GObject.GType;
        tType: GObject.GType;
        t_dup_func: GObject.BoxedCopyFunc;
        tDupFunc: GObject.BoxedCopyFunc;
        t_destroy_func: GLib.DestroyNotify;
        tDestroyFunc: GLib.DestroyNotify;
        pool: TaskQueue;
        readonly value: any;
        readonly is_initialized: boolean;
        readonly isInitialized: boolean;

        // Constructors of Bump-0.1.Lazy

        static ['new'](t_type: GObject.GType, t_dup_func: GObject.BoxedCopyFunc): Lazy;

        // Owm methods of Bump-0.1.Lazy

        get_pool(): TaskQueue;
        get_value(): any;
        get_is_initialized(): boolean;
    }

    module ResourceClaim {
        // Constructor properties interface
    }

    class ResourceClaim extends Claim {
        // Own properties of Bump-0.1.ResourceClaim

        t_type: GObject.GType;
        tType: GObject.GType;
        t_dup_func: GObject.BoxedCopyFunc;
        tDupFunc: GObject.BoxedCopyFunc;
        t_destroy_func: GLib.DestroyNotify;
        tDestroyFunc: GLib.DestroyNotify;
        pool: ResourcePool;
        readonly resource: any;

        // Constructors of Bump-0.1.ResourceClaim

        static ['new'](t_type: GObject.GType, t_dup_func: GObject.BoxedCopyFunc, pool: ResourcePool): ResourceClaim;

        // Owm methods of Bump-0.1.ResourceClaim

        get_pool(): ResourcePool;
        get_resource(): any;
    }

    module ResourcePool {
        // Constructor properties interface
    }

    class ResourcePool extends Factory {
        // Own properties of Bump-0.1.ResourcePool

        t_type: GObject.GType;
        tType: GObject.GType;
        t_dup_func: GObject.BoxedCopyFunc;
        tDupFunc: GObject.BoxedCopyFunc;
        t_destroy_func: GLib.DestroyNotify;
        tDestroyFunc: GLib.DestroyNotify;
        max_resources: number;
        maxResources: number;
        max_idle_time: GLib.TimeSpan;
        maxIdleTime: GLib.TimeSpan;
        num_resources: number;
        numResources: number;
        readonly idle_resources: number;
        readonly idleResources: number;
        readonly active_resources: number;
        readonly activeResources: number;
        pool: TaskQueue;

        // Constructors of Bump-0.1.ResourcePool

        static ['new'](t_type: GObject.GType, t_dup_func: GObject.BoxedCopyFunc, max_resources: number): ResourcePool;

        // Owm methods of Bump-0.1.ResourcePool

        release(resource: any): void;
        execute(
            r_type: GObject.GType,
            r_dup_func: GObject.BoxedCopyFunc,
            func: ResourcePoolCallback,
            priority: number,
            cancellable: Gio.Cancellable,
        ): any;
        execute_async(
            r_type: GObject.GType,
            r_dup_func: GObject.BoxedCopyFunc,
            func: ResourcePoolCallback,
            priority: number,
            cancellable: Gio.Cancellable,
            _callback_: Gio.AsyncReadyCallback<this>,
        ): void;
        execute_finish(r_type: GObject.GType, r_dup_func: GObject.BoxedCopyFunc, _res_: Gio.AsyncResult): any;
        execute_background(
            r_type: GObject.GType,
            r_dup_func: GObject.BoxedCopyFunc,
            func: ResourcePoolCallback,
            priority: number,
            cancellable: Gio.Cancellable,
            _callback_: Gio.AsyncReadyCallback<this>,
        ): void;
        execute_background_finish(
            r_type: GObject.GType,
            r_dup_func: GObject.BoxedCopyFunc,
            _res_: Gio.AsyncResult,
        ): any;
        claim(priority: number, cancellable: Gio.Cancellable): ResourceClaim;
        claim_async(priority: number, cancellable: Gio.Cancellable, _callback_: Gio.AsyncReadyCallback<this>): void;
        claim_finish(_res_: Gio.AsyncResult): ResourceClaim;
        get_max_resources(): number;
        get_max_idle_time(): GLib.TimeSpan;
        set_max_idle_time(value: GLib.TimeSpan): void;
        get_num_resources(): number;
        get_idle_resources(): number;
        get_active_resources(): number;
        get_pool(): TaskQueue;
    }

    module Semaphore {
        // Constructor properties interface
    }

    class Semaphore extends TaskQueue {
        // Own properties of Bump-0.1.Semaphore

        max_claims: number;
        maxClaims: number;
        claims: number;
        pool: TaskQueue;

        // Constructors of Bump-0.1.Semaphore

        static ['new'](max_claims: number): Semaphore;

        // Owm methods of Bump-0.1.Semaphore

        unlock(): void;
        lock(priority: number, cancellable: Gio.Cancellable): void;
        lock_async(priority: number, cancellable: Gio.Cancellable, _callback_: Gio.AsyncReadyCallback<this>): void;
        lock_finish(_res_: Gio.AsyncResult): void;
        claim(priority: number, cancellable: Gio.Cancellable): SemaphoreClaim;
        claim_async(priority: number, cancellable: Gio.Cancellable, _callback_: Gio.AsyncReadyCallback<this>): void;
        claim_finish(_res_: Gio.AsyncResult): SemaphoreClaim;
        get_max_claims(): number;
        get_claims(): number;
        get_pool(): TaskQueue;
    }

    module SemaphoreClaim {
        // Constructor properties interface
    }

    class SemaphoreClaim extends Claim {
        // Own properties of Bump-0.1.SemaphoreClaim

        semaphore: Semaphore;

        // Owm methods of Bump-0.1.SemaphoreClaim

        get_semaphore(): Semaphore;
    }

    module TaskQueue {
        // Constructor properties interface
    }

    class TaskQueue extends GObject.Object {
        // Constructors of Bump-0.1.TaskQueue

        static ['new'](): TaskQueue;

        // Owm methods of Bump-0.1.TaskQueue

        static get_global(): TaskQueue;

        // Owm methods of Bump-0.1.TaskQueue

        spawn(max: number): number;
        add(task: GLib.SourceFunc, priority: number, cancellable: Gio.Cancellable): void;
        process(wait: GLib.TimeSpan): boolean;
        execute(
            g_type: GObject.GType,
            g_dup_func: GObject.BoxedCopyFunc,
            func: Callback,
            priority: number,
            cancellable: Gio.Cancellable,
        ): any;
        execute_async(
            g_type: GObject.GType,
            g_dup_func: GObject.BoxedCopyFunc,
            func: Callback,
            priority: number,
            cancellable: Gio.Cancellable,
            _callback_: Gio.AsyncReadyCallback<this>,
        ): void;
        execute_finish(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, _res_: Gio.AsyncResult): any;
        execute_background(
            g_type: GObject.GType,
            g_dup_func: GObject.BoxedCopyFunc,
            func: Callback,
            priority: number,
            cancellable: Gio.Cancellable,
            _callback_: Gio.AsyncReadyCallback<this>,
        ): void;
        execute_background_finish(
            g_type: GObject.GType,
            g_dup_func: GObject.BoxedCopyFunc,
            _res_: Gio.AsyncResult,
        ): any;
    }

    class AsyncPriorityQueueClass {}

    class AsyncPriorityQueuePrivate {}

    class ClaimClass {}

    class ClaimPrivate {}

    class EventClass {}

    class EventPrivate {}

    class FactoryClass {}

    class FactoryPrivate {}

    class LazyClass {}

    class LazyPrivate {}

    class ResourceClaimClass {}

    class ResourceClaimPrivate {}

    class ResourcePoolClass {}

    class ResourcePoolPrivate {}

    class SemaphoreClass {}

    class SemaphorePrivate {}

    class SemaphoreClaimClass {}

    class SemaphoreClaimPrivate {}

    class TaskQueueClass {}

    class TaskQueuePrivate {}

    class QueueIface {}

    class ThreadingIface {}

    interface Queue {
        // Own properties of Bump-0.1.Queue

        readonly length: number;

        // Owm methods of Bump-0.1.Queue

        process(wait: GLib.TimeSpan): boolean;
        get_length(): number;

        // Own virtual methods of Bump-0.1.Queue

        vfunc_process(wait: GLib.TimeSpan): boolean;
        vfunc_get_length(): number;
    }

    interface Threading {
        // Owm methods of Bump-0.1.Threading

        get_max_threads(): number;
        set_max_threads(value: number): void;
        get_max_idle_time(): GLib.TimeSpan;
        set_max_idle_time(value: GLib.TimeSpan): void;
        get_num_threads(): number;
        get_idle_threads(): number;
        increase_max_threads(new_max_threads: number): void;
        run_task(func: GLib.SourceFunc): boolean;
        spawn(max_new_threads: number): number;

        // Own virtual methods of Bump-0.1.Threading

        vfunc_spawn(max_new_threads: number): number;
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

export default Bump;
// END
