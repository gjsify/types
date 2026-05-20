
/**
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 *
 * The based EJS template file is used for the generated .d.ts file of each GIR module like Gtk-4.0, GObject-2.0, ...
 */

import '@girs/gjs';

// Module dependencies
import type Gio from '@girs/gio-2.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type GModule from '@girs/gmodule-2.0';
import type Gee from '@girs/gee-0.8';

export namespace Bump {

    /**
     * Bump-0.1
     */


    /**
     * @gir-type Callback
     */
    interface Callback {
        (g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc): never;
    }

    namespace AsyncPriorityQueue {
        // Signal signatures
        interface SignalSignatures extends Gee.PriorityQueue.SignalSignatures {
            /**
             * @signal
             */
            "consumer-shortage": () => void;
            "notify::g-type": (pspec: GObject.ParamSpec) => void;
            "notify::g-dup-func": (pspec: GObject.ParamSpec) => void;
            "notify::g-destroy-func": (pspec: GObject.ParamSpec) => void;
            "notify::waiting-threads": (pspec: GObject.ParamSpec) => void;
            "notify::capacity": (pspec: GObject.ParamSpec) => void;
            "notify::remaining-capacity": (pspec: GObject.ParamSpec) => void;
            "notify::is-full": (pspec: GObject.ParamSpec) => void;
            "notify::size": (pspec: GObject.ParamSpec) => void;
            "notify::read-only": (pspec: GObject.ParamSpec) => void;
            "notify::read-only-view": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Gee.PriorityQueue.ConstructorProps {
            g_type: GObject.GTypeInput;
            gType: GObject.GTypeInput;
            g_dup_func: GObject.BoxedCopyFunc;
            gDupFunc: GObject.BoxedCopyFunc;
            g_destroy_func: GLib.DestroyNotify;
            gDestroyFunc: GLib.DestroyNotify;
            waiting_threads: number;
            waitingThreads: number;
        }
    }

    /**
     * @gir-type Class
     */
    class AsyncPriorityQueue extends Gee.PriorityQueue {
        static $gtype: GObject.GType<AsyncPriorityQueue>;

        // Properties
        /**
         * @construct-only
         */
        get g_type(): GObject.GType;

        /**
         * @construct-only
         */
        get gType(): GObject.GType;

        /**
         * @construct-only
         */
        get g_dup_func(): GObject.BoxedCopyFunc;

        /**
         * @construct-only
         */
        get gDupFunc(): GObject.BoxedCopyFunc;

        /**
         * @construct-only
         */
        get g_destroy_func(): GLib.DestroyNotify;

        /**
         * @construct-only
         */
        get gDestroyFunc(): GLib.DestroyNotify;

        get waiting_threads(): number;
        set waiting_threads(val: number);

        get waitingThreads(): number;
        set waitingThreads(val: number);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: AsyncPriorityQueue.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<AsyncPriorityQueue.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, compare_func: GLib.CompareDataFunc): AsyncPriorityQueue;

        // Conflicted with Gee.PriorityQueue.new
        static ["new"](...args: never[]): any;

        // Signals
        /** @signal */
        connect<K extends keyof AsyncPriorityQueue.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, AsyncPriorityQueue.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof AsyncPriorityQueue.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, AsyncPriorityQueue.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof AsyncPriorityQueue.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<AsyncPriorityQueue.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * @param wait 
         */
        poll_timed(wait: GLib.TimeSpan): null;

        /**
         * @param wait 
         */
        peek_timed(wait: GLib.TimeSpan): null;

        /**
         * @param element 
         */
        offer(element: never): boolean;

        get_waiting_threads(): number;
    }


    namespace Claim {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "notify::active": (pspec: GObject.ParamSpec) => void;
            "notify::time-acquired": (pspec: GObject.ParamSpec) => void;
            "notify::time-released": (pspec: GObject.ParamSpec) => void;
            "notify::duration-held": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps, Gio.Initable.ConstructorProps, Gio.AsyncInitable.ConstructorProps {
            active: boolean;
            time_acquired: bigint | number;
            timeAcquired: bigint | number;
            time_released: bigint | number;
            timeReleased: bigint | number;
            duration_held: GLib.TimeSpan;
            durationHeld: GLib.TimeSpan;
        }
    }

    /**
     * @gir-type Class
     */
    class Claim extends GObject.Object implements Gio.Initable, Gio.AsyncInitable<Claim> {
        static $gtype: GObject.GType<Claim>;

        // Properties
        /**
         * @read-only
         */
        get active(): boolean;

        get time_acquired(): number;
        set time_acquired(val: bigint | number);

        get timeAcquired(): number;
        set timeAcquired(val: bigint | number);

        get time_released(): number;
        set time_released(val: bigint | number);

        get timeReleased(): number;
        set timeReleased(val: bigint | number);

        /**
         * @read-only
         */
        get duration_held(): GLib.TimeSpan;

        /**
         * @read-only
         */
        get durationHeld(): GLib.TimeSpan;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Claim.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<Claim.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): Claim;

        // Signals
        /** @signal */
        connect<K extends keyof Claim.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Claim.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Claim.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Claim.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Claim.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Claim.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods
        /**
         * @virtual
         */
        vfunc_release(): void;

        /**
         * @param cancellable 
         * @virtual
         */
        vfunc_init(cancellable: Gio.Cancellable): boolean;

        /**
         * @param args 
         * @virtual
         */
    // Conflicted with Gio.Initable.vfunc_init
        vfunc_init(...args: never[]): any;

        /**
         * @param io_priority 
         * @param cancellable 
         * @param _callback_ 
         * @virtual
         */
        vfunc_init_async(io_priority: number, cancellable: Gio.Cancellable, _callback_: Gio.AsyncReadyCallback<this>): void;

        /**
         * @param args 
         * @virtual
         */
    // Conflicted with Gio.AsyncInitable.vfunc_init_async
        vfunc_init_async(...args: never[]): any;

        /**
         * @param _res_ 
         * @virtual
         */
        vfunc_init_finish(_res_: Gio.AsyncResult): boolean;

        // Methods
        release(): void;

        /**
         * @param cancellable 
         */
        init(cancellable: Gio.Cancellable): boolean;

        /**
         * @param args 
         */
    // Conflicted with Gio.Initable.init
        init(...args: never[]): any;

        /**
         * @param io_priority 
         * @param cancellable 
         */
        init_async(io_priority: number, cancellable: Gio.Cancellable): globalThis.Promise<boolean>;

        /**
         * @param io_priority 
         * @param cancellable 
         * @param _callback_ 
         */
        init_async(io_priority: number, cancellable: Gio.Cancellable, _callback_: Gio.AsyncReadyCallback<this>): void;

        /**
         * @param io_priority 
         * @param cancellable 
         * @param _callback_ 
         */
        init_async(io_priority: number, cancellable: Gio.Cancellable, _callback_?: Gio.AsyncReadyCallback<this>): globalThis.Promise<boolean> | void;

        /**
         * @param args 
         */
    // Conflicted with Gio.AsyncInitable.init_async
        init_async(...args: never[]): any;

        /**
         * @param _res_ 
         */
        init_finish(_res_: Gio.AsyncResult): boolean;

        get_active(): boolean;

        get_time_acquired(): number;

        get_time_released(): number;

        get_duration_held(): GLib.TimeSpan;

        /**
         * Finishes the async construction for the various g_async_initable_new
         * calls, returning the created object or `null` on error.
         * @param res the {@link Gio.AsyncResult} from the callback
         * @returns a newly created {@link GObject.Object},      or `null` on error. Free with `g_object_unref()`.
         */
        new_finish(res: Gio.AsyncResult): Claim;
    }


    namespace Event {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "notify::t-type": (pspec: GObject.ParamSpec) => void;
            "notify::t-dup-func": (pspec: GObject.ParamSpec) => void;
            "notify::t-destroy-func": (pspec: GObject.ParamSpec) => void;
            "notify::pool": (pspec: GObject.ParamSpec) => void;
            "notify::auto-reset": (pspec: GObject.ParamSpec) => void;
            "notify::triggered": (pspec: GObject.ParamSpec) => void;
        }
    interface Callback {
        (a_type: GObject.GType, a_dup_func: GObject.BoxedCopyFunc, r_type: GObject.GType, r_dup_func: GObject.BoxedCopyFunc, arg: null): never;
    }
    interface SourceFunc {
        (a_type: GObject.GType, a_dup_func: GObject.BoxedCopyFunc, arg: null): boolean;
    }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            t_type: GObject.GTypeInput;
            tType: GObject.GTypeInput;
            t_dup_func: GObject.BoxedCopyFunc;
            tDupFunc: GObject.BoxedCopyFunc;
            t_destroy_func: GLib.DestroyNotify;
            tDestroyFunc: GLib.DestroyNotify;
            pool: TaskQueue;
            auto_reset: boolean;
            autoReset: boolean;
            triggered: boolean;
        }
    }

    /**
     * @gir-type Class
     */
    class Event extends GObject.Object {
        static $gtype: GObject.GType<Event>;

        // Properties
        /**
         * @construct-only
         */
        get t_type(): GObject.GType;

        /**
         * @construct-only
         */
        get tType(): GObject.GType;

        /**
         * @construct-only
         */
        get t_dup_func(): GObject.BoxedCopyFunc;

        /**
         * @construct-only
         */
        get tDupFunc(): GObject.BoxedCopyFunc;

        /**
         * @construct-only
         */
        get t_destroy_func(): GLib.DestroyNotify;

        /**
         * @construct-only
         */
        get tDestroyFunc(): GLib.DestroyNotify;

        /**
         * @construct-only
         */
        get pool(): TaskQueue;

        /**
         * @construct-only
         */
        get auto_reset(): boolean;

        /**
         * @construct-only
         */
        get autoReset(): boolean;

        get triggered(): boolean;
        set triggered(val: boolean);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Event.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<Event.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](t_type: GObject.GType, t_dup_func: GObject.BoxedCopyFunc, auto_reset: boolean): Event;

        // Signals
        /** @signal */
        connect<K extends keyof Event.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Event.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Event.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Event.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Event.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Event.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        reset(): void;

        /**
         * @param value 
         */
        trigger(value: never): void;

        /**
         * @param func 
         * @param priority 
         * @param cancellable 
         */
        add(func: Event.SourceFunc, priority: number, cancellable: Gio.Cancellable): void;

        /**
         * @param r_type 
         * @param r_dup_func 
         * @param func 
         * @param priority 
         * @param cancellable 
         */
        execute(r_type: GObject.GType, r_dup_func: GObject.BoxedCopyFunc, func: Event.Callback, priority: number, cancellable: Gio.Cancellable): null;

        /**
         * @param r_type 
         * @param r_dup_func 
         * @param func 
         * @param priority 
         * @param cancellable 
         */
        execute_async(r_type: GObject.GType, r_dup_func: GObject.BoxedCopyFunc, func: Event.Callback, priority: number, cancellable: Gio.Cancellable): globalThis.Promise<null>;

        /**
         * @param r_type 
         * @param r_dup_func 
         * @param func 
         * @param priority 
         * @param cancellable 
         * @param _callback_ 
         */
        execute_async(r_type: GObject.GType, r_dup_func: GObject.BoxedCopyFunc, func: Event.Callback, priority: number, cancellable: Gio.Cancellable, _callback_: Gio.AsyncReadyCallback<this>): void;

        /**
         * @param r_type 
         * @param r_dup_func 
         * @param func 
         * @param priority 
         * @param cancellable 
         * @param _callback_ 
         */
        execute_async(r_type: GObject.GType, r_dup_func: GObject.BoxedCopyFunc, func: Event.Callback, priority: number, cancellable: Gio.Cancellable, _callback_?: Gio.AsyncReadyCallback<this>): globalThis.Promise<null> | void;

        /**
         * @param r_type 
         * @param r_dup_func 
         * @param _res_ 
         */
        execute_finish(r_type: GObject.GType, r_dup_func: GObject.BoxedCopyFunc, _res_: Gio.AsyncResult): null;

        /**
         * @param r_type 
         * @param r_dup_func 
         * @param func 
         * @param priority 
         * @param cancellable 
         */
        execute_background(r_type: GObject.GType, r_dup_func: GObject.BoxedCopyFunc, func: Event.Callback, priority: number, cancellable: Gio.Cancellable): globalThis.Promise<null>;

        /**
         * @param r_type 
         * @param r_dup_func 
         * @param func 
         * @param priority 
         * @param cancellable 
         * @param _callback_ 
         */
        execute_background(r_type: GObject.GType, r_dup_func: GObject.BoxedCopyFunc, func: Event.Callback, priority: number, cancellable: Gio.Cancellable, _callback_: Gio.AsyncReadyCallback<this>): void;

        /**
         * @param r_type 
         * @param r_dup_func 
         * @param func 
         * @param priority 
         * @param cancellable 
         * @param _callback_ 
         */
        execute_background(r_type: GObject.GType, r_dup_func: GObject.BoxedCopyFunc, func: Event.Callback, priority: number, cancellable: Gio.Cancellable, _callback_?: Gio.AsyncReadyCallback<this>): globalThis.Promise<null> | void;

        /**
         * @param r_type 
         * @param r_dup_func 
         * @param _res_ 
         */
        execute_background_finish(r_type: GObject.GType, r_dup_func: GObject.BoxedCopyFunc, _res_: Gio.AsyncResult): null;

        get_pool(): TaskQueue;

        get_auto_reset(): boolean;

        get_triggered(): boolean;
    }


    namespace Factory {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "notify::g-type": (pspec: GObject.ParamSpec) => void;
            "notify::g-dup-func": (pspec: GObject.ParamSpec) => void;
            "notify::g-destroy-func": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            g_type: GObject.GTypeInput;
            gType: GObject.GTypeInput;
            g_dup_func: GObject.BoxedCopyFunc;
            gDupFunc: GObject.BoxedCopyFunc;
            g_destroy_func: GLib.DestroyNotify;
            gDestroyFunc: GLib.DestroyNotify;
        }
    }

    /**
     * @gir-type Class
     */
    abstract class Factory extends GObject.Object {
        static $gtype: GObject.GType<Factory>;

        // Properties
        /**
         * @construct-only
         */
        get g_type(): GObject.GType;

        /**
         * @construct-only
         */
        get gType(): GObject.GType;

        /**
         * @construct-only
         */
        get g_dup_func(): GObject.BoxedCopyFunc;

        /**
         * @construct-only
         */
        get gDupFunc(): GObject.BoxedCopyFunc;

        /**
         * @construct-only
         */
        get g_destroy_func(): GLib.DestroyNotify;

        /**
         * @construct-only
         */
        get gDestroyFunc(): GLib.DestroyNotify;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Factory.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<Factory.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals
        /** @signal */
        connect<K extends keyof Factory.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Factory.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Factory.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Factory.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Factory.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Factory.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods
        /**
         * @param priority 
         * @param cancellable 
         * @virtual
         */
        vfunc_create(priority: number, cancellable: Gio.Cancellable): never;

        /**
         * @param priority 
         * @param cancellable 
         * @param _callback_ 
         * @virtual
         */
        vfunc_create_async(priority: number, cancellable: Gio.Cancellable, _callback_: Gio.AsyncReadyCallback<this>): void;

        /**
         * @param _res_ 
         * @virtual
         */
        vfunc_create_finish(_res_: Gio.AsyncResult): never;

        /**
         * @param priority 
         * @param cancellable 
         * @param _callback_ 
         * @virtual
         */
        vfunc_create_background(priority: number, cancellable: Gio.Cancellable, _callback_: Gio.AsyncReadyCallback<this>): void;

        /**
         * @param _res_ 
         * @virtual
         */
        vfunc_create_background_finish(_res_: Gio.AsyncResult): never;

        /**
         * @param priority 
         * @param cancellable 
         * @virtual
         */
        vfunc_acquire(priority: number, cancellable: Gio.Cancellable): never;

        /**
         * @param priority 
         * @param cancellable 
         * @param _callback_ 
         * @virtual
         */
        vfunc_acquire_async(priority: number, cancellable: Gio.Cancellable, _callback_: Gio.AsyncReadyCallback<this>): void;

        /**
         * @param _res_ 
         * @virtual
         */
        vfunc_acquire_finish(_res_: Gio.AsyncResult): never;

        /**
         * @param priority 
         * @param cancellable 
         * @param _callback_ 
         * @virtual
         */
        vfunc_acquire_background(priority: number, cancellable: Gio.Cancellable, _callback_: Gio.AsyncReadyCallback<this>): void;

        /**
         * @param _res_ 
         * @virtual
         */
        vfunc_acquire_background_finish(_res_: Gio.AsyncResult): never;

        // Methods
        /**
         * @param priority 
         * @param cancellable 
         */
        create(priority: number, cancellable: Gio.Cancellable): null;

        /**
         * @param priority 
         * @param cancellable 
         */
        create_async(priority: number, cancellable: Gio.Cancellable): globalThis.Promise<null>;

        /**
         * @param priority 
         * @param cancellable 
         * @param _callback_ 
         */
        create_async(priority: number, cancellable: Gio.Cancellable, _callback_: Gio.AsyncReadyCallback<this>): void;

        /**
         * @param priority 
         * @param cancellable 
         * @param _callback_ 
         */
        create_async(priority: number, cancellable: Gio.Cancellable, _callback_?: Gio.AsyncReadyCallback<this>): globalThis.Promise<null> | void;

        /**
         * @param _res_ 
         */
        create_finish(_res_: Gio.AsyncResult): null;

        /**
         * @param priority 
         * @param cancellable 
         */
        create_background(priority: number, cancellable: Gio.Cancellable): globalThis.Promise<null>;

        /**
         * @param priority 
         * @param cancellable 
         * @param _callback_ 
         */
        create_background(priority: number, cancellable: Gio.Cancellable, _callback_: Gio.AsyncReadyCallback<this>): void;

        /**
         * @param priority 
         * @param cancellable 
         * @param _callback_ 
         */
        create_background(priority: number, cancellable: Gio.Cancellable, _callback_?: Gio.AsyncReadyCallback<this>): globalThis.Promise<null> | void;

        /**
         * @param _res_ 
         */
        create_background_finish(_res_: Gio.AsyncResult): null;

        /**
         * @param priority 
         * @param cancellable 
         */
        acquire(priority: number, cancellable: Gio.Cancellable): null;

        /**
         * @param priority 
         * @param cancellable 
         */
        acquire_async(priority: number, cancellable: Gio.Cancellable): globalThis.Promise<null>;

        /**
         * @param priority 
         * @param cancellable 
         * @param _callback_ 
         */
        acquire_async(priority: number, cancellable: Gio.Cancellable, _callback_: Gio.AsyncReadyCallback<this>): void;

        /**
         * @param priority 
         * @param cancellable 
         * @param _callback_ 
         */
        acquire_async(priority: number, cancellable: Gio.Cancellable, _callback_?: Gio.AsyncReadyCallback<this>): globalThis.Promise<null> | void;

        /**
         * @param _res_ 
         */
        acquire_finish(_res_: Gio.AsyncResult): null;

        /**
         * @param priority 
         * @param cancellable 
         */
        acquire_background(priority: number, cancellable: Gio.Cancellable): globalThis.Promise<null>;

        /**
         * @param priority 
         * @param cancellable 
         * @param _callback_ 
         */
        acquire_background(priority: number, cancellable: Gio.Cancellable, _callback_: Gio.AsyncReadyCallback<this>): void;

        /**
         * @param priority 
         * @param cancellable 
         * @param _callback_ 
         */
        acquire_background(priority: number, cancellable: Gio.Cancellable, _callback_?: Gio.AsyncReadyCallback<this>): globalThis.Promise<null> | void;

        /**
         * @param _res_ 
         */
        acquire_background_finish(_res_: Gio.AsyncResult): null;

        get_construct_properties(): GObject.Parameter[];

        /**
         * @param value 
         */
        set_construct_properties(value: GObject.Parameter[]): void;
    }


    namespace Lazy {
        // Signal signatures
        interface SignalSignatures extends Factory.SignalSignatures {
            "notify::t-type": (pspec: GObject.ParamSpec) => void;
            "notify::t-dup-func": (pspec: GObject.ParamSpec) => void;
            "notify::t-destroy-func": (pspec: GObject.ParamSpec) => void;
            "notify::pool": (pspec: GObject.ParamSpec) => void;
            "notify::value": (pspec: GObject.ParamSpec) => void;
            "notify::is-initialized": (pspec: GObject.ParamSpec) => void;
            "notify::g-type": (pspec: GObject.ParamSpec) => void;
            "notify::g-dup-func": (pspec: GObject.ParamSpec) => void;
            "notify::g-destroy-func": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Factory.ConstructorProps {
            t_type: GObject.GTypeInput;
            tType: GObject.GTypeInput;
            t_dup_func: GObject.BoxedCopyFunc;
            tDupFunc: GObject.BoxedCopyFunc;
            t_destroy_func: GLib.DestroyNotify;
            tDestroyFunc: GLib.DestroyNotify;
            pool: TaskQueue;
            value: never;
            is_initialized: boolean;
            isInitialized: boolean;
        }
    }

    /**
     * @gir-type Class
     */
    class Lazy extends Factory {
        static $gtype: GObject.GType<Lazy>;

        // Properties
        /**
         * @construct-only
         */
        get t_type(): GObject.GType;

        /**
         * @construct-only
         */
        get tType(): GObject.GType;

        /**
         * @construct-only
         */
        get t_dup_func(): GObject.BoxedCopyFunc;

        /**
         * @construct-only
         */
        get tDupFunc(): GObject.BoxedCopyFunc;

        /**
         * @construct-only
         */
        get t_destroy_func(): GLib.DestroyNotify;

        /**
         * @construct-only
         */
        get tDestroyFunc(): GLib.DestroyNotify;

        /**
         * @construct-only
         */
        get pool(): TaskQueue;

        /**
         * @read-only
         */
        get value(): null;

        /**
         * @read-only
         */
        get is_initialized(): boolean;

        /**
         * @read-only
         */
        get isInitialized(): boolean;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Lazy.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<Lazy.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](t_type: GObject.GType, t_dup_func: GObject.BoxedCopyFunc): Lazy;

        // Signals
        /** @signal */
        connect<K extends keyof Lazy.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Lazy.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Lazy.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Lazy.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Lazy.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Lazy.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        get_pool(): TaskQueue;

        get_value(): null;

        get_is_initialized(): boolean;
    }


    namespace ResourceClaim {
        // Signal signatures
        interface SignalSignatures extends Claim.SignalSignatures {
            "notify::t-type": (pspec: GObject.ParamSpec) => void;
            "notify::t-dup-func": (pspec: GObject.ParamSpec) => void;
            "notify::t-destroy-func": (pspec: GObject.ParamSpec) => void;
            "notify::pool": (pspec: GObject.ParamSpec) => void;
            "notify::resource": (pspec: GObject.ParamSpec) => void;
            "notify::active": (pspec: GObject.ParamSpec) => void;
            "notify::time-acquired": (pspec: GObject.ParamSpec) => void;
            "notify::time-released": (pspec: GObject.ParamSpec) => void;
            "notify::duration-held": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Claim.ConstructorProps {
            t_type: GObject.GTypeInput;
            tType: GObject.GTypeInput;
            t_dup_func: GObject.BoxedCopyFunc;
            tDupFunc: GObject.BoxedCopyFunc;
            t_destroy_func: GLib.DestroyNotify;
            tDestroyFunc: GLib.DestroyNotify;
            pool: ResourcePool;
            resource: never;
        }
    }

    /**
     * @gir-type Class
     */
    class ResourceClaim extends Claim {
        static $gtype: GObject.GType<ResourceClaim>;

        // Properties
        /**
         * @construct-only
         */
        get t_type(): GObject.GType;

        /**
         * @construct-only
         */
        get tType(): GObject.GType;

        /**
         * @construct-only
         */
        get t_dup_func(): GObject.BoxedCopyFunc;

        /**
         * @construct-only
         */
        get tDupFunc(): GObject.BoxedCopyFunc;

        /**
         * @construct-only
         */
        get t_destroy_func(): GLib.DestroyNotify;

        /**
         * @construct-only
         */
        get tDestroyFunc(): GLib.DestroyNotify;

        /**
         * @construct-only
         */
        get pool(): ResourcePool;

        /**
         * @read-only
         */
        get resource(): null;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: ResourceClaim.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<ResourceClaim.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](t_type: GObject.GType, t_dup_func: GObject.BoxedCopyFunc, pool: ResourcePool): ResourceClaim;

        // Conflicted with Bump.Claim.new
        static ["new"](...args: never[]): any;

        // Signals
        /** @signal */
        connect<K extends keyof ResourceClaim.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ResourceClaim.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof ResourceClaim.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ResourceClaim.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof ResourceClaim.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<ResourceClaim.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        get_pool(): ResourcePool;

        get_resource(): null;
    }


    namespace ResourcePool {
        // Signal signatures
        interface SignalSignatures extends Factory.SignalSignatures {
            "notify::t-type": (pspec: GObject.ParamSpec) => void;
            "notify::t-dup-func": (pspec: GObject.ParamSpec) => void;
            "notify::t-destroy-func": (pspec: GObject.ParamSpec) => void;
            "notify::max-resources": (pspec: GObject.ParamSpec) => void;
            "notify::max-idle-time": (pspec: GObject.ParamSpec) => void;
            "notify::num-resources": (pspec: GObject.ParamSpec) => void;
            "notify::idle-resources": (pspec: GObject.ParamSpec) => void;
            "notify::active-resources": (pspec: GObject.ParamSpec) => void;
            "notify::pool": (pspec: GObject.ParamSpec) => void;
            "notify::g-type": (pspec: GObject.ParamSpec) => void;
            "notify::g-dup-func": (pspec: GObject.ParamSpec) => void;
            "notify::g-destroy-func": (pspec: GObject.ParamSpec) => void;
        }
    interface Callback {
        (t_type: GObject.GType, t_dup_func: GObject.BoxedCopyFunc, r_type: GObject.GType, r_dup_func: GObject.BoxedCopyFunc, resource: null): never;
    }

        // Constructor properties interface
        interface ConstructorProps extends Factory.ConstructorProps {
            t_type: GObject.GTypeInput;
            tType: GObject.GTypeInput;
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
            idle_resources: number;
            idleResources: number;
            active_resources: number;
            activeResources: number;
            pool: TaskQueue;
        }
    }

    /**
     * @gir-type Class
     */
    class ResourcePool extends Factory {
        static $gtype: GObject.GType<ResourcePool>;

        // Properties
        /**
         * @construct-only
         */
        get t_type(): GObject.GType;

        /**
         * @construct-only
         */
        get tType(): GObject.GType;

        /**
         * @construct-only
         */
        get t_dup_func(): GObject.BoxedCopyFunc;

        /**
         * @construct-only
         */
        get tDupFunc(): GObject.BoxedCopyFunc;

        /**
         * @construct-only
         */
        get t_destroy_func(): GLib.DestroyNotify;

        /**
         * @construct-only
         */
        get tDestroyFunc(): GLib.DestroyNotify;

        /**
         * @construct-only
         */
        get max_resources(): number;

        /**
         * @construct-only
         */
        get maxResources(): number;

        get max_idle_time(): GLib.TimeSpan;
        set max_idle_time(val: GLib.TimeSpan);

        get maxIdleTime(): GLib.TimeSpan;
        set maxIdleTime(val: GLib.TimeSpan);

        get num_resources(): number;
        set num_resources(val: number);

        get numResources(): number;
        set numResources(val: number);

        /**
         * @read-only
         */
        get idle_resources(): number;

        /**
         * @read-only
         */
        get idleResources(): number;

        /**
         * @read-only
         */
        get active_resources(): number;

        /**
         * @read-only
         */
        get activeResources(): number;

        /**
         * @construct-only
         */
        get pool(): TaskQueue;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: ResourcePool.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<ResourcePool.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](t_type: GObject.GType, t_dup_func: GObject.BoxedCopyFunc, max_resources: number): ResourcePool;

        // Signals
        /** @signal */
        connect<K extends keyof ResourcePool.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ResourcePool.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof ResourcePool.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ResourcePool.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof ResourcePool.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<ResourcePool.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods
        /**
         * @param resource 
         * @virtual
         */
        vfunc_release(resource: null): void;

        // Methods
        /**
         * @param resource 
         */
        release(resource: never): void;

        /**
         * @param r_type 
         * @param r_dup_func 
         * @param func 
         * @param priority 
         * @param cancellable 
         */
        execute(r_type: GObject.GType, r_dup_func: GObject.BoxedCopyFunc, func: ResourcePool.Callback, priority: number, cancellable: Gio.Cancellable): null;

        /**
         * @param r_type 
         * @param r_dup_func 
         * @param func 
         * @param priority 
         * @param cancellable 
         */
        execute_async(r_type: GObject.GType, r_dup_func: GObject.BoxedCopyFunc, func: ResourcePool.Callback, priority: number, cancellable: Gio.Cancellable): globalThis.Promise<null>;

        /**
         * @param r_type 
         * @param r_dup_func 
         * @param func 
         * @param priority 
         * @param cancellable 
         * @param _callback_ 
         */
        execute_async(r_type: GObject.GType, r_dup_func: GObject.BoxedCopyFunc, func: ResourcePool.Callback, priority: number, cancellable: Gio.Cancellable, _callback_: Gio.AsyncReadyCallback<this>): void;

        /**
         * @param r_type 
         * @param r_dup_func 
         * @param func 
         * @param priority 
         * @param cancellable 
         * @param _callback_ 
         */
        execute_async(r_type: GObject.GType, r_dup_func: GObject.BoxedCopyFunc, func: ResourcePool.Callback, priority: number, cancellable: Gio.Cancellable, _callback_?: Gio.AsyncReadyCallback<this>): globalThis.Promise<null> | void;

        /**
         * @param r_type 
         * @param r_dup_func 
         * @param _res_ 
         */
        execute_finish(r_type: GObject.GType, r_dup_func: GObject.BoxedCopyFunc, _res_: Gio.AsyncResult): null;

        /**
         * @param r_type 
         * @param r_dup_func 
         * @param func 
         * @param priority 
         * @param cancellable 
         */
        execute_background(r_type: GObject.GType, r_dup_func: GObject.BoxedCopyFunc, func: ResourcePool.Callback, priority: number, cancellable: Gio.Cancellable): globalThis.Promise<null>;

        /**
         * @param r_type 
         * @param r_dup_func 
         * @param func 
         * @param priority 
         * @param cancellable 
         * @param _callback_ 
         */
        execute_background(r_type: GObject.GType, r_dup_func: GObject.BoxedCopyFunc, func: ResourcePool.Callback, priority: number, cancellable: Gio.Cancellable, _callback_: Gio.AsyncReadyCallback<this>): void;

        /**
         * @param r_type 
         * @param r_dup_func 
         * @param func 
         * @param priority 
         * @param cancellable 
         * @param _callback_ 
         */
        execute_background(r_type: GObject.GType, r_dup_func: GObject.BoxedCopyFunc, func: ResourcePool.Callback, priority: number, cancellable: Gio.Cancellable, _callback_?: Gio.AsyncReadyCallback<this>): globalThis.Promise<null> | void;

        /**
         * @param r_type 
         * @param r_dup_func 
         * @param _res_ 
         */
        execute_background_finish(r_type: GObject.GType, r_dup_func: GObject.BoxedCopyFunc, _res_: Gio.AsyncResult): null;

        /**
         * @param priority 
         * @param cancellable 
         */
        claim(priority: number, cancellable: Gio.Cancellable): ResourceClaim;

        /**
         * @param priority 
         * @param cancellable 
         */
        claim_async(priority: number, cancellable: Gio.Cancellable): globalThis.Promise<ResourceClaim>;

        /**
         * @param priority 
         * @param cancellable 
         * @param _callback_ 
         */
        claim_async(priority: number, cancellable: Gio.Cancellable, _callback_: Gio.AsyncReadyCallback<this>): void;

        /**
         * @param priority 
         * @param cancellable 
         * @param _callback_ 
         */
        claim_async(priority: number, cancellable: Gio.Cancellable, _callback_?: Gio.AsyncReadyCallback<this>): globalThis.Promise<ResourceClaim> | void;

        /**
         * @param _res_ 
         */
        claim_finish(_res_: Gio.AsyncResult): ResourceClaim;

        get_max_resources(): number;

        get_max_idle_time(): GLib.TimeSpan;

        /**
         * @param value 
         */
        set_max_idle_time(value: GLib.TimeSpan): void;

        get_num_resources(): number;

        get_idle_resources(): number;

        get_active_resources(): number;

        get_pool(): TaskQueue;
    }


    namespace Semaphore {
        // Signal signatures
        interface SignalSignatures extends TaskQueue.SignalSignatures {
            "notify::max-claims": (pspec: GObject.ParamSpec) => void;
            "notify::claims": (pspec: GObject.ParamSpec) => void;
            "notify::pool": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends TaskQueue.ConstructorProps {
            max_claims: number;
            maxClaims: number;
            claims: number;
            pool: TaskQueue;
        }
    }

    /**
     * @gir-type Class
     */
    class Semaphore extends TaskQueue {
        static $gtype: GObject.GType<Semaphore>;

        // Properties
        /**
         * @construct-only
         */
        get max_claims(): number;

        /**
         * @construct-only
         */
        get maxClaims(): number;

        get claims(): number;
        set claims(val: number);

        /**
         * @construct-only
         */
        get pool(): TaskQueue;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Semaphore.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<Semaphore.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](max_claims: number): Semaphore;

        // Conflicted with Bump.TaskQueue.new
        static ["new"](...args: never[]): any;

        // Signals
        /** @signal */
        connect<K extends keyof Semaphore.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Semaphore.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Semaphore.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Semaphore.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Semaphore.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Semaphore.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods
        /**
         * @param priority 
         * @param cancellable 
         * @virtual
         */
        vfunc_claim(priority: number, cancellable: Gio.Cancellable): SemaphoreClaim;

        /**
         * @param priority 
         * @param cancellable 
         * @param _callback_ 
         * @virtual
         */
        vfunc_claim_async(priority: number, cancellable: Gio.Cancellable, _callback_: Gio.AsyncReadyCallback<this>): void;

        /**
         * @param _res_ 
         * @virtual
         */
        vfunc_claim_finish(_res_: Gio.AsyncResult): SemaphoreClaim;

        // Methods
        unlock(): void;

        /**
         * @param priority 
         * @param cancellable 
         */
        lock(priority: number, cancellable: Gio.Cancellable): void;

        /**
         * @param priority 
         * @param cancellable 
         */
        lock_async(priority: number, cancellable: Gio.Cancellable): globalThis.Promise<void>;

        /**
         * @param priority 
         * @param cancellable 
         * @param _callback_ 
         */
        lock_async(priority: number, cancellable: Gio.Cancellable, _callback_: Gio.AsyncReadyCallback<this>): void;

        /**
         * @param priority 
         * @param cancellable 
         * @param _callback_ 
         */
        lock_async(priority: number, cancellable: Gio.Cancellable, _callback_?: Gio.AsyncReadyCallback<this>): globalThis.Promise<void> | void;

        /**
         * @param _res_ 
         */
        lock_finish(_res_: Gio.AsyncResult): void;

        /**
         * @param priority 
         * @param cancellable 
         */
        claim(priority: number, cancellable: Gio.Cancellable): SemaphoreClaim;

        /**
         * @param priority 
         * @param cancellable 
         */
        claim_async(priority: number, cancellable: Gio.Cancellable): globalThis.Promise<SemaphoreClaim>;

        /**
         * @param priority 
         * @param cancellable 
         * @param _callback_ 
         */
        claim_async(priority: number, cancellable: Gio.Cancellable, _callback_: Gio.AsyncReadyCallback<this>): void;

        /**
         * @param priority 
         * @param cancellable 
         * @param _callback_ 
         */
        claim_async(priority: number, cancellable: Gio.Cancellable, _callback_?: Gio.AsyncReadyCallback<this>): globalThis.Promise<SemaphoreClaim> | void;

        /**
         * @param _res_ 
         */
        claim_finish(_res_: Gio.AsyncResult): SemaphoreClaim;

        get_max_claims(): number;

        get_claims(): number;

        get_pool(): TaskQueue;
    }


    namespace SemaphoreClaim {
        // Signal signatures
        interface SignalSignatures extends Claim.SignalSignatures {
            "notify::semaphore": (pspec: GObject.ParamSpec) => void;
            "notify::active": (pspec: GObject.ParamSpec) => void;
            "notify::time-acquired": (pspec: GObject.ParamSpec) => void;
            "notify::time-released": (pspec: GObject.ParamSpec) => void;
            "notify::duration-held": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Claim.ConstructorProps {
            semaphore: Semaphore;
        }
    }

    /**
     * @gir-type Class
     */
    class SemaphoreClaim extends Claim {
        static $gtype: GObject.GType<SemaphoreClaim>;

        // Properties
        /**
         * @construct-only
         */
        get semaphore(): Semaphore;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: SemaphoreClaim.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<SemaphoreClaim.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals
        /** @signal */
        connect<K extends keyof SemaphoreClaim.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, SemaphoreClaim.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof SemaphoreClaim.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, SemaphoreClaim.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof SemaphoreClaim.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<SemaphoreClaim.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        get_semaphore(): Semaphore;
    }


    namespace TaskQueue {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "notify::length": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps, Queue.ConstructorProps, Threading.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class TaskQueue extends GObject.Object implements Queue, Threading {
        static $gtype: GObject.GType<TaskQueue>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: TaskQueue.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<TaskQueue.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): TaskQueue;

        // Signals
        /** @signal */
        connect<K extends keyof TaskQueue.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, TaskQueue.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof TaskQueue.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, TaskQueue.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof TaskQueue.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<TaskQueue.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods
        static get_global(): TaskQueue;

        // Virtual methods
        /**
         * @param max 
         * @virtual
         */
        vfunc_spawn(max: number): number;

        /**
         * @param task 
         * @param priority 
         * @param cancellable 
         * @virtual
         */
        vfunc_add(task: GLib.SourceFunc, priority: number, cancellable: Gio.Cancellable): void;

        /**
         * @param wait 
         * @virtual
         */
        vfunc_process(wait: GLib.TimeSpan): boolean;

        /**
         * @param g_type 
         * @param g_dup_func 
         * @param func 
         * @param priority 
         * @param cancellable 
         * @virtual
         */
        vfunc_execute(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, func: Callback, priority: number, cancellable: Gio.Cancellable): never;

        /**
         * @param g_type 
         * @param g_dup_func 
         * @param func 
         * @param priority 
         * @param cancellable 
         * @param _callback_ 
         * @virtual
         */
        vfunc_execute_async(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, func: Callback, priority: number, cancellable: Gio.Cancellable, _callback_: Gio.AsyncReadyCallback<this>): void;

        /**
         * @param g_type 
         * @param g_dup_func 
         * @param _res_ 
         * @virtual
         */
        vfunc_execute_finish(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, _res_: Gio.AsyncResult): never;

        /**
         * @param g_type 
         * @param g_dup_func 
         * @param func 
         * @param priority 
         * @param cancellable 
         * @param _callback_ 
         * @virtual
         */
        vfunc_execute_background(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, func: Callback, priority: number, cancellable: Gio.Cancellable, _callback_: Gio.AsyncReadyCallback<this>): void;

        /**
         * @param g_type 
         * @param g_dup_func 
         * @param _res_ 
         * @virtual
         */
        vfunc_execute_background_finish(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, _res_: Gio.AsyncResult): never;

        // Methods
        /**
         * @param max 
         */
        spawn(max: number): number;

        /**
         * @param task 
         * @param priority 
         * @param cancellable 
         */
        add(task: GLib.SourceFunc, priority: number, cancellable: Gio.Cancellable): void;

        /**
         * @param wait 
         */
        process(wait: GLib.TimeSpan): boolean;

        /**
         * @param g_type 
         * @param g_dup_func 
         * @param func 
         * @param priority 
         * @param cancellable 
         */
        execute(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, func: Callback, priority: number, cancellable: Gio.Cancellable): null;

        /**
         * @param g_type 
         * @param g_dup_func 
         * @param func 
         * @param priority 
         * @param cancellable 
         */
        execute_async(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, func: Callback, priority: number, cancellable: Gio.Cancellable): globalThis.Promise<null>;

        /**
         * @param g_type 
         * @param g_dup_func 
         * @param func 
         * @param priority 
         * @param cancellable 
         * @param _callback_ 
         */
        execute_async(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, func: Callback, priority: number, cancellable: Gio.Cancellable, _callback_: Gio.AsyncReadyCallback<this>): void;

        /**
         * @param g_type 
         * @param g_dup_func 
         * @param func 
         * @param priority 
         * @param cancellable 
         * @param _callback_ 
         */
        execute_async(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, func: Callback, priority: number, cancellable: Gio.Cancellable, _callback_?: Gio.AsyncReadyCallback<this>): globalThis.Promise<null> | void;

        /**
         * @param g_type 
         * @param g_dup_func 
         * @param _res_ 
         */
        execute_finish(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, _res_: Gio.AsyncResult): null;

        /**
         * @param g_type 
         * @param g_dup_func 
         * @param func 
         * @param priority 
         * @param cancellable 
         */
        execute_background(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, func: Callback, priority: number, cancellable: Gio.Cancellable): globalThis.Promise<null>;

        /**
         * @param g_type 
         * @param g_dup_func 
         * @param func 
         * @param priority 
         * @param cancellable 
         * @param _callback_ 
         */
        execute_background(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, func: Callback, priority: number, cancellable: Gio.Cancellable, _callback_: Gio.AsyncReadyCallback<this>): void;

        /**
         * @param g_type 
         * @param g_dup_func 
         * @param func 
         * @param priority 
         * @param cancellable 
         * @param _callback_ 
         */
        execute_background(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, func: Callback, priority: number, cancellable: Gio.Cancellable, _callback_?: Gio.AsyncReadyCallback<this>): globalThis.Promise<null> | void;

        /**
         * @param g_type 
         * @param g_dup_func 
         * @param _res_ 
         */
        execute_background_finish(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, _res_: Gio.AsyncResult): null;

        /**
         * @read-only
          * @category Inherited from Bump.Queue
         */
        get length(): number;

        get_length(): number;

        /**
         * @virtual
         */
        vfunc_get_length(): number;

        get_max_threads(): number;

        /**
         * @param value 
         */
        set_max_threads(value: number): void;

        get_max_idle_time(): GLib.TimeSpan;

        /**
         * @param value 
         */
        set_max_idle_time(value: GLib.TimeSpan): void;

        get_num_threads(): number;

        get_idle_threads(): number;

        /**
         * @param new_max_threads 
         */
        increase_max_threads(new_max_threads: number): void;

        /**
         * @param func 
         */
        run_task(func: GLib.SourceFunc): boolean;
    }


    /**
     * @gir-type Alias
     */
    type AsyncPriorityQueueClass = typeof AsyncPriorityQueue;

    /**
     * @gir-type Struct
     */
    abstract class AsyncPriorityQueuePrivate {
        static $gtype: GObject.GType<AsyncPriorityQueuePrivate>;
    }


    /**
     * @gir-type Alias
     */
    type ClaimClass = typeof Claim;

    /**
     * @gir-type Struct
     */
    abstract class ClaimPrivate {
        static $gtype: GObject.GType<ClaimPrivate>;
    }


    /**
     * @gir-type Alias
     */
    type EventClass = typeof Event;

    /**
     * @gir-type Struct
     */
    abstract class EventPrivate {
        static $gtype: GObject.GType<EventPrivate>;
    }


    /**
     * @gir-type Alias
     */
    type FactoryClass = typeof Factory;

    /**
     * @gir-type Struct
     */
    abstract class FactoryPrivate {
        static $gtype: GObject.GType<FactoryPrivate>;
    }


    /**
     * @gir-type Alias
     */
    type LazyClass = typeof Lazy;

    /**
     * @gir-type Struct
     */
    abstract class LazyPrivate {
        static $gtype: GObject.GType<LazyPrivate>;
    }


    /**
     * @gir-type Alias
     */
    type ResourceClaimClass = typeof ResourceClaim;

    /**
     * @gir-type Struct
     */
    abstract class ResourceClaimPrivate {
        static $gtype: GObject.GType<ResourceClaimPrivate>;
    }


    /**
     * @gir-type Alias
     */
    type ResourcePoolClass = typeof ResourcePool;

    /**
     * @gir-type Struct
     */
    abstract class ResourcePoolPrivate {
        static $gtype: GObject.GType<ResourcePoolPrivate>;
    }


    /**
     * @gir-type Alias
     */
    type SemaphoreClass = typeof Semaphore;

    /**
     * @gir-type Struct
     */
    abstract class SemaphorePrivate {
        static $gtype: GObject.GType<SemaphorePrivate>;
    }


    /**
     * @gir-type Alias
     */
    type SemaphoreClaimClass = typeof SemaphoreClaim;

    /**
     * @gir-type Struct
     */
    abstract class SemaphoreClaimPrivate {
        static $gtype: GObject.GType<SemaphoreClaimPrivate>;
    }


    /**
     * @gir-type Alias
     */
    type TaskQueueClass = typeof TaskQueue;

    /**
     * @gir-type Struct
     */
    abstract class TaskQueuePrivate {
        static $gtype: GObject.GType<TaskQueuePrivate>;
    }


    /**
     * @gir-type Alias
     */
    type QueueIface = typeof Queue;

    /**
     * @gir-type Alias
     */
    type ThreadingIface = typeof Threading;

    namespace Queue {
        /**
         * Interface for implementing Queue.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface {

            // Virtual methods
            /**
             * @param wait 
             * @virtual
             */
            vfunc_process(wait: GLib.TimeSpan): boolean;

            /**
             * @virtual
             */
            vfunc_get_length(): number;
        }


        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            length: number;
        }
    }

    export interface QueueNamespace {
        $gtype: GObject.GType<Queue>;
        prototype: Queue;
    }
    /**
     * @gir-type Interface
     */
    interface Queue extends GObject.Object, Queue.Interface {

        // Properties
        /**
         * @read-only
         */
        get length(): number;

        // Methods
        /**
         * @param wait 
         */
        process(wait: GLib.TimeSpan): boolean;

        get_length(): number;
    }


    export const Queue: QueueNamespace & {
        new (): Queue; // This allows `obj instanceof Queue`
    };

    namespace Threading {
        /**
         * Interface for implementing Threading.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface {

            // Virtual methods
            /**
             * @param max_new_threads 
             * @virtual
             */
            vfunc_spawn(max_new_threads: number): number;
        }


        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    export interface ThreadingNamespace {
        $gtype: GObject.GType<Threading>;
        prototype: Threading;
    }
    /**
     * @gir-type Interface
     */
    interface Threading extends GObject.Object, Threading.Interface {

        // Methods
        get_max_threads(): number;

        /**
         * @param value 
         */
        set_max_threads(value: number): void;

        get_max_idle_time(): GLib.TimeSpan;

        /**
         * @param value 
         */
        set_max_idle_time(value: GLib.TimeSpan): void;

        get_num_threads(): number;

        get_idle_threads(): number;

        /**
         * @param new_max_threads 
         */
        increase_max_threads(new_max_threads: number): void;

        /**
         * @param func 
         */
        run_task(func: GLib.SourceFunc): boolean;

        /**
         * @param max_new_threads 
         */
        spawn(max_new_threads: number): number;
    }


    export const Threading: ThreadingNamespace & {
        new (): Threading; // This allows `obj instanceof Threading`
    };

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
