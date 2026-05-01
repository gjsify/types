
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

export namespace Gdm {

    /**
     * Gdm-1.0
     */


    /**
     * @gir-type Enum
     */
    enum ClientError {
        CLIENT_ERROR_GENERIC,
    }


    function chooser_interface_info(): Gio.DBusInterfaceInfo;

    /**
     * @param klass 
     * @param property_id_begin 
     */
    function chooser_override_properties(klass: typeof GObject.Object, property_id_begin: number): number;

    /**
     * Reads /usr/share/xsessions and other relevant places for possible sessions
     * to log into and returns the complete list.
     * @returns a `null` terminated list of session ids
     */
    function get_session_ids(): string[];

    /**
     * Takes an xsession id and returns the name and comment about it.
     * @param id an id from `gdm_get_session_ids()`
     * @returns The session name if found, or `null` otherwise
     */
    function get_session_name_and_description(id: string): [string, string];

    /**
     * @param cancellable 
     */
    function goto_login_session_sync(cancellable: (Gio.Cancellable | null)): boolean;

    function greeter_interface_info(): Gio.DBusInterfaceInfo;

    /**
     * @param klass 
     * @param property_id_begin 
     */
    function greeter_override_properties(klass: typeof GObject.Object, property_id_begin: number): number;

    function manager_interface_info(): Gio.DBusInterfaceInfo;

    /**
     * @param klass 
     * @param property_id_begin 
     */
    function manager_override_properties(klass: typeof GObject.Object, property_id_begin: number): number;

    function remote_greeter_interface_info(): Gio.DBusInterfaceInfo;

    /**
     * @param klass 
     * @param property_id_begin 
     */
    function remote_greeter_override_properties(klass: typeof GObject.Object, property_id_begin: number): number;

    function user_verifier_choice_list_interface_info(): Gio.DBusInterfaceInfo;

    /**
     * @param klass 
     * @param property_id_begin 
     */
    function user_verifier_choice_list_override_properties(klass: typeof GObject.Object, property_id_begin: number): number;

    function user_verifier_interface_info(): Gio.DBusInterfaceInfo;

    /**
     * @param klass 
     * @param property_id_begin 
     */
    function user_verifier_override_properties(klass: typeof GObject.Object, property_id_begin: number): number;

    function worker_manager_interface_info(): Gio.DBusInterfaceInfo;

    /**
     * @param klass 
     * @param property_id_begin 
     */
    function worker_manager_override_properties(klass: typeof GObject.Object, property_id_begin: number): number;

    namespace ChooserProxy {
        // Signal signatures
        interface SignalSignatures extends Gio.DBusProxy.SignalSignatures {
            "notify::g-bus-type": (pspec: GObject.ParamSpec) => void;
            "notify::g-connection": (pspec: GObject.ParamSpec) => void;
            "notify::g-default-timeout": (pspec: GObject.ParamSpec) => void;
            "notify::g-flags": (pspec: GObject.ParamSpec) => void;
            "notify::g-interface-info": (pspec: GObject.ParamSpec) => void;
            "notify::g-interface-name": (pspec: GObject.ParamSpec) => void;
            "notify::g-name": (pspec: GObject.ParamSpec) => void;
            "notify::g-name-owner": (pspec: GObject.ParamSpec) => void;
            "notify::g-object-path": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Gio.DBusProxy.ConstructorProps, Chooser.ConstructorProps, Gio.AsyncInitable.ConstructorProps, Gio.DBusInterface.ConstructorProps, Gio.Initable.ConstructorProps {

        }
    }

    /**
     * @gir-type Class
     */
    class ChooserProxy extends Gio.DBusProxy implements Chooser, Gio.AsyncInitable<ChooserProxy>, Gio.DBusInterface, Gio.Initable {
        static $gtype: GObject.GType<ChooserProxy>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: ChooserProxy.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<ChooserProxy.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals
        /** @signal */
        connect<K extends keyof ChooserProxy.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ChooserProxy.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof ChooserProxy.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ChooserProxy.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof ChooserProxy.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<ChooserProxy.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods
        /**
         * @param connection 
         * @param flags 
         * @param name 
         * @param object_path 
         * @param cancellable 
         * @param callback 
         */
        static ["new"](connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string, object_path: string, cancellable: (Gio.Cancellable | null), callback: (Gio.AsyncReadyCallback<ChooserProxy> | null)): void;

        /**
         * @param args 
         */
    // Conflicted with Gio.DBusProxy.new
        static ["new"](...args: never[]): any;

        /**
         * @param bus_type 
         * @param flags 
         * @param name 
         * @param object_path 
         * @param cancellable 
         * @param callback 
         */
        static new_for_bus(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, object_path: string, cancellable: (Gio.Cancellable | null), callback: (Gio.AsyncReadyCallback<ChooserProxy> | null)): void;

        /**
         * @param args 
         */
    // Conflicted with Gio.DBusProxy.new_for_bus
        static new_for_bus(...args: never[]): any;

        /**
         * @param cancellable 
         */
        call_disconnect(cancellable: (Gio.Cancellable | null)): globalThis.Promise<boolean>;

        /**
         * @param cancellable 
         * @param callback 
         */
        call_disconnect(cancellable: (Gio.Cancellable | null), callback: (Gio.AsyncReadyCallback<this> | null)): void;

        /**
         * @param cancellable 
         * @param callback 
         */
        call_disconnect(cancellable: (Gio.Cancellable | null), callback?: (Gio.AsyncReadyCallback<this> | null)): (globalThis.Promise<boolean> | void);

        /**
         * @param res 
         */
        call_disconnect_finish(res: Gio.AsyncResult): boolean;

        /**
         * @param cancellable 
         */
        call_disconnect_sync(cancellable: (Gio.Cancellable | null)): boolean;

        /**
         * @param arg_hostname 
         * @param cancellable 
         */
        call_select_hostname(arg_hostname: string, cancellable: (Gio.Cancellable | null)): globalThis.Promise<boolean>;

        /**
         * @param arg_hostname 
         * @param cancellable 
         * @param callback 
         */
        call_select_hostname(arg_hostname: string, cancellable: (Gio.Cancellable | null), callback: (Gio.AsyncReadyCallback<this> | null)): void;

        /**
         * @param arg_hostname 
         * @param cancellable 
         * @param callback 
         */
        call_select_hostname(arg_hostname: string, cancellable: (Gio.Cancellable | null), callback?: (Gio.AsyncReadyCallback<this> | null)): (globalThis.Promise<boolean> | void);

        /**
         * @param res 
         */
        call_select_hostname_finish(res: Gio.AsyncResult): boolean;

        /**
         * @param arg_hostname 
         * @param cancellable 
         */
        call_select_hostname_sync(arg_hostname: string, cancellable: (Gio.Cancellable | null)): boolean;

        /**
         * @param invocation 
         */
        complete_disconnect(invocation: Gio.DBusMethodInvocation): void;

        /**
         * @param invocation 
         */
        complete_select_hostname(invocation: Gio.DBusMethodInvocation): void;

        /**
         * @param invocation 
         * @virtual
         */
        vfunc_handle_disconnect(invocation: Gio.DBusMethodInvocation): boolean;

        /**
         * @param invocation 
         * @param arg_hostname 
         * @virtual
         */
        vfunc_handle_select_hostname(invocation: Gio.DBusMethodInvocation, arg_hostname: string): boolean;

        /**
         * Starts asynchronous initialization of the object implementing the
         * interface. This must be done before any real use of the object after
         * initial construction. If the object also implements {@link Gio.Initable} you can
         * optionally call `g_initable_init()` instead.
         * 
         * This method is intended for language bindings. If writing in C,
         * `g_async_initable_new_async()` should typically be used instead.
         * 
         * When the initialization is finished, `callback` will be called. You can
         * then call `g_async_initable_init_finish()` to get the result of the
         * initialization.
         * 
         * Implementations may also support cancellation. If `cancellable` is not
         * `null`, then initialization can be cancelled by triggering the cancellable
         * object from another thread. If the operation was cancelled, the error
         * {@link Gio.IOErrorEnum.CANCELLED} will be returned. If `cancellable` is not `null`, and
         * the object doesn't support cancellable initialization, the error
         * {@link Gio.IOErrorEnum.NOT_SUPPORTED} will be returned.
         * 
         * As with {@link Gio.Initable}, if the object is not initialized, or initialization
         * returns with an error, then all operations on the object except
         * `g_object_ref()` and `g_object_unref()` are considered to be invalid, and
         * have undefined behaviour. They will often fail with `g_critical()` or
         * `g_warning()`, but this must not be relied on.
         * 
         * Callers should not assume that a class which implements {@link Gio.AsyncInitable} can
         * be initialized multiple times; for more information, see `g_initable_init()`.
         * If a class explicitly supports being initialized multiple times,
         * implementation requires yielding all subsequent calls to `init_async()` on the
         * results of the first call.
         * 
         * For classes that also support the {@link Gio.Initable} interface, the default
         * implementation of this method will run the `g_initable_init()` function
         * in a thread, so if you want to support asynchronous initialization via
         * threads, just implement the {@link Gio.AsyncInitable} interface without overriding
         * any interface methods.
         * @param io_priority the [I/O priority](iface.AsyncResult.html#io-priority) of the operation
         * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore.
         */
        init_async(io_priority: number, cancellable: (Gio.Cancellable | null)): globalThis.Promise<boolean>;

        /**
         * Starts asynchronous initialization of the object implementing the
         * interface. This must be done before any real use of the object after
         * initial construction. If the object also implements {@link Gio.Initable} you can
         * optionally call `g_initable_init()` instead.
         * 
         * This method is intended for language bindings. If writing in C,
         * `g_async_initable_new_async()` should typically be used instead.
         * 
         * When the initialization is finished, `callback` will be called. You can
         * then call `g_async_initable_init_finish()` to get the result of the
         * initialization.
         * 
         * Implementations may also support cancellation. If `cancellable` is not
         * `null`, then initialization can be cancelled by triggering the cancellable
         * object from another thread. If the operation was cancelled, the error
         * {@link Gio.IOErrorEnum.CANCELLED} will be returned. If `cancellable` is not `null`, and
         * the object doesn't support cancellable initialization, the error
         * {@link Gio.IOErrorEnum.NOT_SUPPORTED} will be returned.
         * 
         * As with {@link Gio.Initable}, if the object is not initialized, or initialization
         * returns with an error, then all operations on the object except
         * `g_object_ref()` and `g_object_unref()` are considered to be invalid, and
         * have undefined behaviour. They will often fail with `g_critical()` or
         * `g_warning()`, but this must not be relied on.
         * 
         * Callers should not assume that a class which implements {@link Gio.AsyncInitable} can
         * be initialized multiple times; for more information, see `g_initable_init()`.
         * If a class explicitly supports being initialized multiple times,
         * implementation requires yielding all subsequent calls to `init_async()` on the
         * results of the first call.
         * 
         * For classes that also support the {@link Gio.Initable} interface, the default
         * implementation of this method will run the `g_initable_init()` function
         * in a thread, so if you want to support asynchronous initialization via
         * threads, just implement the {@link Gio.AsyncInitable} interface without overriding
         * any interface methods.
         * @param io_priority the [I/O priority](iface.AsyncResult.html#io-priority) of the operation
         * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore.
         * @param callback a {@link Gio.AsyncReadyCallback} to call when the request is satisfied
         */
        init_async(io_priority: number, cancellable: (Gio.Cancellable | null), callback: (Gio.AsyncReadyCallback<this> | null)): void;

        /**
         * Starts asynchronous initialization of the object implementing the
         * interface. This must be done before any real use of the object after
         * initial construction. If the object also implements {@link Gio.Initable} you can
         * optionally call `g_initable_init()` instead.
         * 
         * This method is intended for language bindings. If writing in C,
         * `g_async_initable_new_async()` should typically be used instead.
         * 
         * When the initialization is finished, `callback` will be called. You can
         * then call `g_async_initable_init_finish()` to get the result of the
         * initialization.
         * 
         * Implementations may also support cancellation. If `cancellable` is not
         * `null`, then initialization can be cancelled by triggering the cancellable
         * object from another thread. If the operation was cancelled, the error
         * {@link Gio.IOErrorEnum.CANCELLED} will be returned. If `cancellable` is not `null`, and
         * the object doesn't support cancellable initialization, the error
         * {@link Gio.IOErrorEnum.NOT_SUPPORTED} will be returned.
         * 
         * As with {@link Gio.Initable}, if the object is not initialized, or initialization
         * returns with an error, then all operations on the object except
         * `g_object_ref()` and `g_object_unref()` are considered to be invalid, and
         * have undefined behaviour. They will often fail with `g_critical()` or
         * `g_warning()`, but this must not be relied on.
         * 
         * Callers should not assume that a class which implements {@link Gio.AsyncInitable} can
         * be initialized multiple times; for more information, see `g_initable_init()`.
         * If a class explicitly supports being initialized multiple times,
         * implementation requires yielding all subsequent calls to `init_async()` on the
         * results of the first call.
         * 
         * For classes that also support the {@link Gio.Initable} interface, the default
         * implementation of this method will run the `g_initable_init()` function
         * in a thread, so if you want to support asynchronous initialization via
         * threads, just implement the {@link Gio.AsyncInitable} interface without overriding
         * any interface methods.
         * @param io_priority the [I/O priority](iface.AsyncResult.html#io-priority) of the operation
         * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore.
         * @param callback a {@link Gio.AsyncReadyCallback} to call when the request is satisfied
         */
        init_async(io_priority: number, cancellable: (Gio.Cancellable | null), callback?: (Gio.AsyncReadyCallback<this> | null)): (globalThis.Promise<boolean> | void);

        /**
         * Finishes asynchronous initialization and returns the result.
         * See `g_async_initable_init_async()`.
         * @param res a {@link Gio.AsyncResult}.
         * @returns `true` if successful. If an error has occurred, this function will return `false` and set `error` appropriately if present.
         */
        init_finish(res: Gio.AsyncResult): boolean;

        /**
         * Finishes the async construction for the various g_async_initable_new
         * calls, returning the created object or `null` on error.
         * @param res the {@link Gio.AsyncResult} from the callback
         * @returns a newly created {@link GObject.Object},      or `null` on error. Free with `g_object_unref()`.
         */
        new_finish(res: Gio.AsyncResult): ChooserProxy;

        /**
         * @param args 
         */
        // Conflicted with Gio.DBusProxy.new_finish
        new_finish(...args: never[]): any;

        /**
         * Starts asynchronous initialization of the object implementing the
         * interface. This must be done before any real use of the object after
         * initial construction. If the object also implements {@link Gio.Initable} you can
         * optionally call `g_initable_init()` instead.
         * 
         * This method is intended for language bindings. If writing in C,
         * `g_async_initable_new_async()` should typically be used instead.
         * 
         * When the initialization is finished, `callback` will be called. You can
         * then call `g_async_initable_init_finish()` to get the result of the
         * initialization.
         * 
         * Implementations may also support cancellation. If `cancellable` is not
         * `null`, then initialization can be cancelled by triggering the cancellable
         * object from another thread. If the operation was cancelled, the error
         * {@link Gio.IOErrorEnum.CANCELLED} will be returned. If `cancellable` is not `null`, and
         * the object doesn't support cancellable initialization, the error
         * {@link Gio.IOErrorEnum.NOT_SUPPORTED} will be returned.
         * 
         * As with {@link Gio.Initable}, if the object is not initialized, or initialization
         * returns with an error, then all operations on the object except
         * `g_object_ref()` and `g_object_unref()` are considered to be invalid, and
         * have undefined behaviour. They will often fail with `g_critical()` or
         * `g_warning()`, but this must not be relied on.
         * 
         * Callers should not assume that a class which implements {@link Gio.AsyncInitable} can
         * be initialized multiple times; for more information, see `g_initable_init()`.
         * If a class explicitly supports being initialized multiple times,
         * implementation requires yielding all subsequent calls to `init_async()` on the
         * results of the first call.
         * 
         * For classes that also support the {@link Gio.Initable} interface, the default
         * implementation of this method will run the `g_initable_init()` function
         * in a thread, so if you want to support asynchronous initialization via
         * threads, just implement the {@link Gio.AsyncInitable} interface without overriding
         * any interface methods.
         * @param io_priority the [I/O priority](iface.AsyncResult.html#io-priority) of the operation
         * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore.
         * @param callback a {@link Gio.AsyncReadyCallback} to call when the request is satisfied
         * @virtual
         */
        vfunc_init_async(io_priority: number, cancellable: (Gio.Cancellable | null), callback: (Gio.AsyncReadyCallback<this> | null)): void;

        /**
         * Finishes asynchronous initialization and returns the result.
         * See `g_async_initable_init_async()`.
         * @param res a {@link Gio.AsyncResult}.
         * @virtual
         */
        vfunc_init_finish(res: Gio.AsyncResult): boolean;

        /**
         * Gets the {@link Gio.DBusObject} that `interface_` belongs to, if any.
         * @returns A {@link Gio.DBusObject} or `null`. The returned reference should be freed with `g_object_unref()`.
         */
        get_object(): (Gio.DBusObject | null);

        /**
         * Gets D-Bus introspection information for the D-Bus interface
         * implemented by `interface_`.
         * @returns A {@link Gio.DBusInterfaceInfo}. Do not free.
         */
        get_info(): Gio.DBusInterfaceInfo;

        /**
         * Sets the {@link Gio.DBusObject} for `interface_` to `object`.
         * 
         * Note that `interface_` will hold a weak reference to `object`.
         * @param object A {@link Gio.DBusObject} or `null`.
         */
        set_object(object: (Gio.DBusObject | null)): void;

        /**
         * Gets the {@link Gio.DBusObject} that `interface_` belongs to, if any.
         * @virtual
         */
        vfunc_dup_object(): (Gio.DBusObject | null);

        /**
         * Gets D-Bus introspection information for the D-Bus interface
         * implemented by `interface_`.
         * @virtual
         */
        vfunc_get_info(): Gio.DBusInterfaceInfo;

        /**
         * Sets the {@link Gio.DBusObject} for `interface_` to `object`.
         * 
         * Note that `interface_` will hold a weak reference to `object`.
         * @param object A {@link Gio.DBusObject} or `null`.
         * @virtual
         */
        vfunc_set_object(object: (Gio.DBusObject | null)): void;

        /**
         * Initializes the object implementing the interface.
         * 
         * This method is intended for language bindings. If writing in C,
         * `g_initable_new()` should typically be used instead.
         * 
         * The object must be initialized before any real use after initial
         * construction, either with this function or `g_async_initable_init_async()`.
         * 
         * Implementations may also support cancellation. If `cancellable` is not `null`,
         * then initialization can be cancelled by triggering the cancellable object
         * from another thread. If the operation was cancelled, the error
         * {@link Gio.IOErrorEnum.CANCELLED} will be returned. If `cancellable` is not `null` and
         * the object doesn't support cancellable initialization the error
         * {@link Gio.IOErrorEnum.NOT_SUPPORTED} will be returned.
         * 
         * If the object is not initialized, or initialization returns with an
         * error, then all operations on the object except `g_object_ref()` and
         * `g_object_unref()` are considered to be invalid, and have undefined
         * behaviour. See the [description][iface@Gio.Initable#description] for more details.
         * 
         * Callers should not assume that a class which implements {@link Gio.Initable} can be
         * initialized multiple times, unless the class explicitly documents itself as
         * supporting this. Generally, a class’ implementation of `init()` can assume
         * (and assert) that it will only be called once. Previously, this documentation
         * recommended all {@link Gio.Initable} implementations should be idempotent; that
         * recommendation was relaxed in GLib 2.54.
         * 
         * If a class explicitly supports being initialized multiple times, it is
         * recommended that the method is idempotent: multiple calls with the same
         * arguments should return the same results. Only the first call initializes
         * the object; further calls return the result of the first call.
         * 
         * One reason why a class might need to support idempotent initialization is if
         * it is designed to be used via the singleton pattern, with a
         * {@link GObject.ObjectClass}.constructor that sometimes returns an existing instance.
         * In this pattern, a caller would expect to be able to call `g_initable_init()`
         * on the result of `g_object_new()`, regardless of whether it is in fact a new
         * instance.
         * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore.
         * @returns `true` if successful. If an error has occurred, this function will     return `false` and set `error` appropriately if present.
         */
        init(cancellable: (Gio.Cancellable | null)): boolean;

        /**
         * Initializes the object implementing the interface.
         * 
         * This method is intended for language bindings. If writing in C,
         * `g_initable_new()` should typically be used instead.
         * 
         * The object must be initialized before any real use after initial
         * construction, either with this function or `g_async_initable_init_async()`.
         * 
         * Implementations may also support cancellation. If `cancellable` is not `null`,
         * then initialization can be cancelled by triggering the cancellable object
         * from another thread. If the operation was cancelled, the error
         * {@link Gio.IOErrorEnum.CANCELLED} will be returned. If `cancellable` is not `null` and
         * the object doesn't support cancellable initialization the error
         * {@link Gio.IOErrorEnum.NOT_SUPPORTED} will be returned.
         * 
         * If the object is not initialized, or initialization returns with an
         * error, then all operations on the object except `g_object_ref()` and
         * `g_object_unref()` are considered to be invalid, and have undefined
         * behaviour. See the [description][iface@Gio.Initable#description] for more details.
         * 
         * Callers should not assume that a class which implements {@link Gio.Initable} can be
         * initialized multiple times, unless the class explicitly documents itself as
         * supporting this. Generally, a class’ implementation of `init()` can assume
         * (and assert) that it will only be called once. Previously, this documentation
         * recommended all {@link Gio.Initable} implementations should be idempotent; that
         * recommendation was relaxed in GLib 2.54.
         * 
         * If a class explicitly supports being initialized multiple times, it is
         * recommended that the method is idempotent: multiple calls with the same
         * arguments should return the same results. Only the first call initializes
         * the object; further calls return the result of the first call.
         * 
         * One reason why a class might need to support idempotent initialization is if
         * it is designed to be used via the singleton pattern, with a
         * {@link GObject.ObjectClass}.constructor that sometimes returns an existing instance.
         * In this pattern, a caller would expect to be able to call `g_initable_init()`
         * on the result of `g_object_new()`, regardless of whether it is in fact a new
         * instance.
         * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore.
         * @virtual
         */
        vfunc_init(cancellable: (Gio.Cancellable | null)): boolean;
    }


    namespace ChooserSkeleton {
        // Signal signatures
        interface SignalSignatures extends Gio.DBusInterfaceSkeleton.SignalSignatures {
            "notify::g-flags": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Gio.DBusInterfaceSkeleton.ConstructorProps, Chooser.ConstructorProps, Gio.DBusInterface.ConstructorProps {

        }
    }

    /**
     * @gir-type Class
     */
    class ChooserSkeleton extends Gio.DBusInterfaceSkeleton implements Chooser, Gio.DBusInterface {
        static $gtype: GObject.GType<ChooserSkeleton>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: ChooserSkeleton.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<ChooserSkeleton.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals
        /** @signal */
        connect<K extends keyof ChooserSkeleton.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ChooserSkeleton.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof ChooserSkeleton.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ChooserSkeleton.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof ChooserSkeleton.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<ChooserSkeleton.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        /**
         * @param cancellable 
         */
        call_disconnect(cancellable: (Gio.Cancellable | null)): globalThis.Promise<boolean>;

        /**
         * @param cancellable 
         * @param callback 
         */
        call_disconnect(cancellable: (Gio.Cancellable | null), callback: (Gio.AsyncReadyCallback<this> | null)): void;

        /**
         * @param cancellable 
         * @param callback 
         */
        call_disconnect(cancellable: (Gio.Cancellable | null), callback?: (Gio.AsyncReadyCallback<this> | null)): (globalThis.Promise<boolean> | void);

        /**
         * @param res 
         */
        call_disconnect_finish(res: Gio.AsyncResult): boolean;

        /**
         * @param cancellable 
         */
        call_disconnect_sync(cancellable: (Gio.Cancellable | null)): boolean;

        /**
         * @param arg_hostname 
         * @param cancellable 
         */
        call_select_hostname(arg_hostname: string, cancellable: (Gio.Cancellable | null)): globalThis.Promise<boolean>;

        /**
         * @param arg_hostname 
         * @param cancellable 
         * @param callback 
         */
        call_select_hostname(arg_hostname: string, cancellable: (Gio.Cancellable | null), callback: (Gio.AsyncReadyCallback<this> | null)): void;

        /**
         * @param arg_hostname 
         * @param cancellable 
         * @param callback 
         */
        call_select_hostname(arg_hostname: string, cancellable: (Gio.Cancellable | null), callback?: (Gio.AsyncReadyCallback<this> | null)): (globalThis.Promise<boolean> | void);

        /**
         * @param res 
         */
        call_select_hostname_finish(res: Gio.AsyncResult): boolean;

        /**
         * @param arg_hostname 
         * @param cancellable 
         */
        call_select_hostname_sync(arg_hostname: string, cancellable: (Gio.Cancellable | null)): boolean;

        /**
         * @param invocation 
         */
        complete_disconnect(invocation: Gio.DBusMethodInvocation): void;

        /**
         * @param invocation 
         */
        complete_select_hostname(invocation: Gio.DBusMethodInvocation): void;

        /**
         * @param invocation 
         * @virtual
         */
        vfunc_handle_disconnect(invocation: Gio.DBusMethodInvocation): boolean;

        /**
         * @param invocation 
         * @param arg_hostname 
         * @virtual
         */
        vfunc_handle_select_hostname(invocation: Gio.DBusMethodInvocation, arg_hostname: string): boolean;

        /**
         * Gets the {@link Gio.DBusObject} that `interface_` belongs to, if any.
         * @returns A {@link Gio.DBusObject} or `null`. The returned reference should be freed with `g_object_unref()`.
         */
        get_object(): (Gio.DBusObject | null);

        /**
         * Gets D-Bus introspection information for the D-Bus interface
         * implemented by `interface_`.
         * @returns A {@link Gio.DBusInterfaceInfo}. Do not free.
         */
        get_info(): Gio.DBusInterfaceInfo;

        /**
         * Sets the {@link Gio.DBusObject} for `interface_` to `object`.
         * 
         * Note that `interface_` will hold a weak reference to `object`.
         * @param object A {@link Gio.DBusObject} or `null`.
         */
        set_object(object: (Gio.DBusObject | null)): void;

        /**
         * Gets the {@link Gio.DBusObject} that `interface_` belongs to, if any.
         * @virtual
         */
        vfunc_dup_object(): (Gio.DBusObject | null);

        /**
         * Gets D-Bus introspection information for the D-Bus interface
         * implemented by `interface_`.
         * @virtual
         */
        vfunc_get_info(): Gio.DBusInterfaceInfo;

        /**
         * Sets the {@link Gio.DBusObject} for `interface_` to `object`.
         * 
         * Note that `interface_` will hold a weak reference to `object`.
         * @param object A {@link Gio.DBusObject} or `null`.
         * @virtual
         */
        vfunc_set_object(object: (Gio.DBusObject | null)): void;
    }


    namespace Client {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {

        }
    }

    /**
     * @gir-type Class
     */
    class Client extends GObject.Object {
        static $gtype: GObject.GType<Client>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Client.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<Client.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): Client;

        // Signals
        /** @signal */
        connect<K extends keyof Client.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Client.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Client.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Client.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Client.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Client.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods
        static error_quark(): GLib.Quark;

        // Methods
        /**
         * Gets a {@link Gdm.Chooser} object that can be used to
         * verify a user's local account.
         * @param cancellable a {@link Gio.Cancellable}
         */
        get_chooser(cancellable: (Gio.Cancellable | null)): globalThis.Promise<Chooser>;

        /**
         * Gets a {@link Gdm.Chooser} object that can be used to
         * verify a user's local account.
         * @param cancellable a {@link Gio.Cancellable}
         * @param callback a {@link Gio.AsyncReadyCallback} to call when the request is satisfied
         */
        get_chooser(cancellable: (Gio.Cancellable | null), callback: (Gio.AsyncReadyCallback<this> | null)): void;

        /**
         * Gets a {@link Gdm.Chooser} object that can be used to
         * verify a user's local account.
         * @param cancellable a {@link Gio.Cancellable}
         * @param callback a {@link Gio.AsyncReadyCallback} to call when the request is satisfied
         */
        get_chooser(cancellable: (Gio.Cancellable | null), callback?: (Gio.AsyncReadyCallback<this> | null)): (globalThis.Promise<Chooser> | void);

        /**
         * Finishes an operation started with
         * `gdm_client_get_chooser()`.
         * @param result The {@link Gio.AsyncResult} from the callback
         * @returns a {@link Gdm.Chooser}
         */
        get_chooser_finish(result: Gio.AsyncResult): Chooser;

        /**
         * Gets a {@link Gdm.Chooser} object that can be used
         * to do do various XDMCP chooser related tasks, such
         * as selecting a host or disconnecting.
         * @param cancellable a {@link Gio.Cancellable}
         * @returns {@link Gdm.Chooser} or `null` if caller is not a chooser
         */
        get_chooser_sync(cancellable: (Gio.Cancellable | null)): Chooser;

        /**
         * Gets a {@link Gdm.Greeter} object that can be used to
         * verify a user's local account.
         * @param cancellable a {@link Gio.Cancellable}
         */
        get_greeter(cancellable: (Gio.Cancellable | null)): globalThis.Promise<Greeter>;

        /**
         * Gets a {@link Gdm.Greeter} object that can be used to
         * verify a user's local account.
         * @param cancellable a {@link Gio.Cancellable}
         * @param callback a {@link Gio.AsyncReadyCallback} to call when the request is satisfied
         */
        get_greeter(cancellable: (Gio.Cancellable | null), callback: (Gio.AsyncReadyCallback<this> | null)): void;

        /**
         * Gets a {@link Gdm.Greeter} object that can be used to
         * verify a user's local account.
         * @param cancellable a {@link Gio.Cancellable}
         * @param callback a {@link Gio.AsyncReadyCallback} to call when the request is satisfied
         */
        get_greeter(cancellable: (Gio.Cancellable | null), callback?: (Gio.AsyncReadyCallback<this> | null)): (globalThis.Promise<Greeter> | void);

        /**
         * Finishes an operation started with
         * `gdm_client_get_greeter()`.
         * @param result The {@link Gio.AsyncResult} from the callback
         * @returns a {@link Gdm.Greeter}
         */
        get_greeter_finish(result: Gio.AsyncResult): Greeter;

        /**
         * Gets a {@link Gdm.Greeter} object that can be used
         * to do do various login screen related tasks, such
         * as selecting a users session, and starting that
         * session.
         * @param cancellable a {@link Gio.Cancellable}
         * @returns {@link Gdm.Greeter} or `null` if caller is not a greeter
         */
        get_greeter_sync(cancellable: (Gio.Cancellable | null)): Greeter;

        /**
         * Gets a {@link Gdm.RemoteGreeter} object that can be used to
         * verify a user's local account.
         * @param cancellable a {@link Gio.Cancellable}
         */
        get_remote_greeter(cancellable: (Gio.Cancellable | null)): globalThis.Promise<RemoteGreeter>;

        /**
         * Gets a {@link Gdm.RemoteGreeter} object that can be used to
         * verify a user's local account.
         * @param cancellable a {@link Gio.Cancellable}
         * @param callback a {@link Gio.AsyncReadyCallback} to call when the request is satisfied
         */
        get_remote_greeter(cancellable: (Gio.Cancellable | null), callback: (Gio.AsyncReadyCallback<this> | null)): void;

        /**
         * Gets a {@link Gdm.RemoteGreeter} object that can be used to
         * verify a user's local account.
         * @param cancellable a {@link Gio.Cancellable}
         * @param callback a {@link Gio.AsyncReadyCallback} to call when the request is satisfied
         */
        get_remote_greeter(cancellable: (Gio.Cancellable | null), callback?: (Gio.AsyncReadyCallback<this> | null)): (globalThis.Promise<RemoteGreeter> | void);

        /**
         * Finishes an operation started with
         * `gdm_client_get_remote_greeter()`.
         * @param result The {@link Gio.AsyncResult} from the callback
         * @returns a {@link Gdm.RemoteGreeter}
         */
        get_remote_greeter_finish(result: Gio.AsyncResult): RemoteGreeter;

        /**
         * Gets a {@link Gdm.RemoteGreeter} object that can be used
         * to do do various remote login screen related tasks,
         * such as disconnecting.
         * @param cancellable a {@link Gio.Cancellable}
         * @returns {@link Gdm.RemoteGreeter} or `null` if caller is not remote
         */
        get_remote_greeter_sync(cancellable: (Gio.Cancellable | null)): RemoteGreeter;

        /**
         * Gets a {@link Gdm.UserVerifier} object that can be used to
         * verify a user's local account.
         * @param cancellable a {@link Gio.Cancellable}
         */
        get_user_verifier(cancellable: (Gio.Cancellable | null)): globalThis.Promise<UserVerifier>;

        /**
         * Gets a {@link Gdm.UserVerifier} object that can be used to
         * verify a user's local account.
         * @param cancellable a {@link Gio.Cancellable}
         * @param callback a {@link Gio.AsyncReadyCallback} to call when the request is satisfied
         */
        get_user_verifier(cancellable: (Gio.Cancellable | null), callback: (Gio.AsyncReadyCallback<this> | null)): void;

        /**
         * Gets a {@link Gdm.UserVerifier} object that can be used to
         * verify a user's local account.
         * @param cancellable a {@link Gio.Cancellable}
         * @param callback a {@link Gio.AsyncReadyCallback} to call when the request is satisfied
         */
        get_user_verifier(cancellable: (Gio.Cancellable | null), callback?: (Gio.AsyncReadyCallback<this> | null)): (globalThis.Promise<UserVerifier> | void);

        /**
         * Gets a {@link Gdm.UserVerifierChoiceList} object that can be used to
         * verify a user's local account.
         * @returns {@link Gdm.UserVerifierChoiceList} or `null` if user verifier isn't yet fetched, or daemon doesn't support choice lists
         */
        get_user_verifier_choice_list(): UserVerifierChoiceList;

        /**
         * Finishes an operation started with
         * `gdm_client_get_user_verifier()`.
         * @param result The {@link Gio.AsyncResult} from the callback
         * @returns a {@link Gdm.UserVerifier}
         */
        get_user_verifier_finish(result: Gio.AsyncResult): UserVerifier;

        /**
         * Gets a {@link Gdm.UserVerifier} object that can be used to
         * verify a user's local account.
         * @param cancellable a {@link Gio.Cancellable}
         * @returns {@link Gdm.UserVerifier} or `null` if not connected
         */
        get_user_verifier_sync(cancellable: (Gio.Cancellable | null)): UserVerifier;

        /**
         * Gets a {@link Gdm.UserVerifier} object that can be used to
         * reauthenticate an already logged in user.
         * @param username user to reauthenticate
         * @param cancellable a {@link Gio.Cancellable}
         */
        open_reauthentication_channel(username: string, cancellable: (Gio.Cancellable | null)): globalThis.Promise<UserVerifier>;

        /**
         * Gets a {@link Gdm.UserVerifier} object that can be used to
         * reauthenticate an already logged in user.
         * @param username user to reauthenticate
         * @param cancellable a {@link Gio.Cancellable}
         * @param callback a {@link Gio.AsyncReadyCallback} to call when the request is satisfied
         */
        open_reauthentication_channel(username: string, cancellable: (Gio.Cancellable | null), callback: (Gio.AsyncReadyCallback<this> | null)): void;

        /**
         * Gets a {@link Gdm.UserVerifier} object that can be used to
         * reauthenticate an already logged in user.
         * @param username user to reauthenticate
         * @param cancellable a {@link Gio.Cancellable}
         * @param callback a {@link Gio.AsyncReadyCallback} to call when the request is satisfied
         */
        open_reauthentication_channel(username: string, cancellable: (Gio.Cancellable | null), callback?: (Gio.AsyncReadyCallback<this> | null)): (globalThis.Promise<UserVerifier> | void);

        /**
         * Finishes an operation started with
         * `gdm_client_open_reauthentication_channel()`.
         * @param result The {@link Gio.AsyncResult} from the callback
         * @returns a {@link Gdm.UserVerifier}
         */
        open_reauthentication_channel_finish(result: Gio.AsyncResult): UserVerifier;

        /**
         * Gets a {@link Gdm.UserVerifier} object that can be used to
         * reauthenticate an already logged in user. Free with
         * g_object_unref to close reauthentication channel.
         * @param username user to reauthenticate
         * @param cancellable a {@link Gio.Cancellable}
         * @returns {@link Gdm.UserVerifier} or `null` if `username` is not already logged in.
         */
        open_reauthentication_channel_sync(username: string, cancellable: (Gio.Cancellable | null)): UserVerifier;

        /**
         * Enables GDM's pam extensions.  Currently, only
         * org.gnome.DisplayManager.UserVerifier.ChoiceList is supported.
         * @param extensions a list of extensions
         */
        set_enabled_extensions(extensions: string[]): void;
    }


    namespace GreeterProxy {
        // Signal signatures
        interface SignalSignatures extends Gio.DBusProxy.SignalSignatures {
            "notify::g-bus-type": (pspec: GObject.ParamSpec) => void;
            "notify::g-connection": (pspec: GObject.ParamSpec) => void;
            "notify::g-default-timeout": (pspec: GObject.ParamSpec) => void;
            "notify::g-flags": (pspec: GObject.ParamSpec) => void;
            "notify::g-interface-info": (pspec: GObject.ParamSpec) => void;
            "notify::g-interface-name": (pspec: GObject.ParamSpec) => void;
            "notify::g-name": (pspec: GObject.ParamSpec) => void;
            "notify::g-name-owner": (pspec: GObject.ParamSpec) => void;
            "notify::g-object-path": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Gio.DBusProxy.ConstructorProps, Greeter.ConstructorProps, Gio.AsyncInitable.ConstructorProps, Gio.DBusInterface.ConstructorProps, Gio.Initable.ConstructorProps {

        }
    }

    /**
     * @gir-type Class
     */
    class GreeterProxy extends Gio.DBusProxy implements Greeter, Gio.AsyncInitable<GreeterProxy>, Gio.DBusInterface, Gio.Initable {
        static $gtype: GObject.GType<GreeterProxy>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: GreeterProxy.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<GreeterProxy.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals
        /** @signal */
        connect<K extends keyof GreeterProxy.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, GreeterProxy.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof GreeterProxy.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, GreeterProxy.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof GreeterProxy.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<GreeterProxy.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods
        /**
         * @param connection 
         * @param flags 
         * @param name 
         * @param object_path 
         * @param cancellable 
         * @param callback 
         */
        static ["new"](connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string, object_path: string, cancellable: (Gio.Cancellable | null), callback: (Gio.AsyncReadyCallback<GreeterProxy> | null)): void;

        /**
         * @param args 
         */
    // Conflicted with Gio.DBusProxy.new
        static ["new"](...args: never[]): any;

        /**
         * @param bus_type 
         * @param flags 
         * @param name 
         * @param object_path 
         * @param cancellable 
         * @param callback 
         */
        static new_for_bus(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, object_path: string, cancellable: (Gio.Cancellable | null), callback: (Gio.AsyncReadyCallback<GreeterProxy> | null)): void;

        /**
         * @param args 
         */
    // Conflicted with Gio.DBusProxy.new_for_bus
        static new_for_bus(...args: never[]): any;

        /**
         * @param arg_username 
         * @param cancellable 
         */
        call_begin_auto_login(arg_username: string, cancellable: (Gio.Cancellable | null)): globalThis.Promise<boolean>;

        /**
         * @param arg_username 
         * @param cancellable 
         * @param callback 
         */
        call_begin_auto_login(arg_username: string, cancellable: (Gio.Cancellable | null), callback: (Gio.AsyncReadyCallback<this> | null)): void;

        /**
         * @param arg_username 
         * @param cancellable 
         * @param callback 
         */
        call_begin_auto_login(arg_username: string, cancellable: (Gio.Cancellable | null), callback?: (Gio.AsyncReadyCallback<this> | null)): (globalThis.Promise<boolean> | void);

        /**
         * @param res 
         */
        call_begin_auto_login_finish(res: Gio.AsyncResult): boolean;

        /**
         * @param arg_username 
         * @param cancellable 
         */
        call_begin_auto_login_sync(arg_username: string, cancellable: (Gio.Cancellable | null)): boolean;

        /**
         * @param cancellable 
         */
        call_get_timed_login_details(cancellable: (Gio.Cancellable | null)): globalThis.Promise<boolean>;

        /**
         * @param cancellable 
         * @param callback 
         */
        call_get_timed_login_details(cancellable: (Gio.Cancellable | null), callback: (Gio.AsyncReadyCallback<this> | null)): void;

        /**
         * @param cancellable 
         * @param callback 
         */
        call_get_timed_login_details(cancellable: (Gio.Cancellable | null), callback?: (Gio.AsyncReadyCallback<this> | null)): (globalThis.Promise<boolean> | void);

        /**
         * @param out_enabled 
         * @param out_username 
         * @param out_delay 
         * @param res 
         */
        call_get_timed_login_details_finish(out_enabled: boolean, out_username: string, out_delay: number, res: Gio.AsyncResult): boolean;

        /**
         * @param out_enabled 
         * @param out_username 
         * @param out_delay 
         * @param cancellable 
         */
        call_get_timed_login_details_sync(out_enabled: boolean, out_username: string, out_delay: number, cancellable: (Gio.Cancellable | null)): boolean;

        /**
         * @param arg_session 
         * @param cancellable 
         */
        call_select_session(arg_session: string, cancellable: (Gio.Cancellable | null)): globalThis.Promise<boolean>;

        /**
         * @param arg_session 
         * @param cancellable 
         * @param callback 
         */
        call_select_session(arg_session: string, cancellable: (Gio.Cancellable | null), callback: (Gio.AsyncReadyCallback<this> | null)): void;

        /**
         * @param arg_session 
         * @param cancellable 
         * @param callback 
         */
        call_select_session(arg_session: string, cancellable: (Gio.Cancellable | null), callback?: (Gio.AsyncReadyCallback<this> | null)): (globalThis.Promise<boolean> | void);

        /**
         * @param res 
         */
        call_select_session_finish(res: Gio.AsyncResult): boolean;

        /**
         * @param arg_session 
         * @param cancellable 
         */
        call_select_session_sync(arg_session: string, cancellable: (Gio.Cancellable | null)): boolean;

        /**
         * @param arg_username 
         * @param cancellable 
         */
        call_select_user(arg_username: string, cancellable: (Gio.Cancellable | null)): globalThis.Promise<boolean>;

        /**
         * @param arg_username 
         * @param cancellable 
         * @param callback 
         */
        call_select_user(arg_username: string, cancellable: (Gio.Cancellable | null), callback: (Gio.AsyncReadyCallback<this> | null)): void;

        /**
         * @param arg_username 
         * @param cancellable 
         * @param callback 
         */
        call_select_user(arg_username: string, cancellable: (Gio.Cancellable | null), callback?: (Gio.AsyncReadyCallback<this> | null)): (globalThis.Promise<boolean> | void);

        /**
         * @param res 
         */
        call_select_user_finish(res: Gio.AsyncResult): boolean;

        /**
         * @param arg_username 
         * @param cancellable 
         */
        call_select_user_sync(arg_username: string, cancellable: (Gio.Cancellable | null)): boolean;

        /**
         * @param arg_service_name 
         * @param arg_should_start_session 
         * @param cancellable 
         */
        call_start_session_when_ready(arg_service_name: string, arg_should_start_session: boolean, cancellable: (Gio.Cancellable | null)): globalThis.Promise<boolean>;

        /**
         * @param arg_service_name 
         * @param arg_should_start_session 
         * @param cancellable 
         * @param callback 
         */
        call_start_session_when_ready(arg_service_name: string, arg_should_start_session: boolean, cancellable: (Gio.Cancellable | null), callback: (Gio.AsyncReadyCallback<this> | null)): void;

        /**
         * @param arg_service_name 
         * @param arg_should_start_session 
         * @param cancellable 
         * @param callback 
         */
        call_start_session_when_ready(arg_service_name: string, arg_should_start_session: boolean, cancellable: (Gio.Cancellable | null), callback?: (Gio.AsyncReadyCallback<this> | null)): (globalThis.Promise<boolean> | void);

        /**
         * @param res 
         */
        call_start_session_when_ready_finish(res: Gio.AsyncResult): boolean;

        /**
         * @param arg_service_name 
         * @param arg_should_start_session 
         * @param cancellable 
         */
        call_start_session_when_ready_sync(arg_service_name: string, arg_should_start_session: boolean, cancellable: (Gio.Cancellable | null)): boolean;

        /**
         * @param invocation 
         */
        complete_begin_auto_login(invocation: Gio.DBusMethodInvocation): void;

        /**
         * @param invocation 
         * @param enabled 
         * @param username 
         * @param delay 
         */
        complete_get_timed_login_details(invocation: Gio.DBusMethodInvocation, enabled: boolean, username: string, delay: number): void;

        /**
         * @param invocation 
         */
        complete_select_session(invocation: Gio.DBusMethodInvocation): void;

        /**
         * @param invocation 
         */
        complete_select_user(invocation: Gio.DBusMethodInvocation): void;

        /**
         * @param invocation 
         */
        complete_start_session_when_ready(invocation: Gio.DBusMethodInvocation): void;

        /**
         * @param arg_language_name 
         */
        emit_default_language_name_changed(arg_language_name: string): void;

        /**
         * @param arg_session_name 
         */
        emit_default_session_name_changed(arg_session_name: string): void;

        /**
         * @param arg_service_name 
         */
        emit_reauthenticated(arg_service_name: string): void;

        /**
         * @param arg_username 
         */
        emit_selected_user_changed(arg_username: string): void;

        /**
         * @param arg_service_name 
         */
        emit_session_opened(arg_service_name: string): void;

        /**
         * @param arg_username 
         * @param arg_delay 
         */
        emit_timed_login_requested(arg_username: string, arg_delay: number): void;

        /**
         * @param arg_language_name 
         * @virtual
         */
        vfunc_default_language_name_changed(arg_language_name: string): void;

        /**
         * @param arg_session_name 
         * @virtual
         */
        vfunc_default_session_name_changed(arg_session_name: string): void;

        /**
         * @param invocation 
         * @param arg_username 
         * @virtual
         */
        vfunc_handle_begin_auto_login(invocation: Gio.DBusMethodInvocation, arg_username: string): boolean;

        /**
         * @param invocation 
         * @virtual
         */
        vfunc_handle_get_timed_login_details(invocation: Gio.DBusMethodInvocation): boolean;

        /**
         * @param invocation 
         * @param arg_session 
         * @virtual
         */
        vfunc_handle_select_session(invocation: Gio.DBusMethodInvocation, arg_session: string): boolean;

        /**
         * @param invocation 
         * @param arg_username 
         * @virtual
         */
        vfunc_handle_select_user(invocation: Gio.DBusMethodInvocation, arg_username: string): boolean;

        /**
         * @param invocation 
         * @param arg_service_name 
         * @param arg_should_start_session 
         * @virtual
         */
        vfunc_handle_start_session_when_ready(invocation: Gio.DBusMethodInvocation, arg_service_name: string, arg_should_start_session: boolean): boolean;

        /**
         * @param arg_service_name 
         * @virtual
         */
        vfunc_reauthenticated(arg_service_name: string): void;

        /**
         * @param arg_username 
         * @virtual
         */
        vfunc_selected_user_changed(arg_username: string): void;

        /**
         * @param arg_service_name 
         * @virtual
         */
        vfunc_session_opened(arg_service_name: string): void;

        /**
         * @param arg_username 
         * @param arg_delay 
         * @virtual
         */
        vfunc_timed_login_requested(arg_username: string, arg_delay: number): void;

        /**
         * Starts asynchronous initialization of the object implementing the
         * interface. This must be done before any real use of the object after
         * initial construction. If the object also implements {@link Gio.Initable} you can
         * optionally call `g_initable_init()` instead.
         * 
         * This method is intended for language bindings. If writing in C,
         * `g_async_initable_new_async()` should typically be used instead.
         * 
         * When the initialization is finished, `callback` will be called. You can
         * then call `g_async_initable_init_finish()` to get the result of the
         * initialization.
         * 
         * Implementations may also support cancellation. If `cancellable` is not
         * `null`, then initialization can be cancelled by triggering the cancellable
         * object from another thread. If the operation was cancelled, the error
         * {@link Gio.IOErrorEnum.CANCELLED} will be returned. If `cancellable` is not `null`, and
         * the object doesn't support cancellable initialization, the error
         * {@link Gio.IOErrorEnum.NOT_SUPPORTED} will be returned.
         * 
         * As with {@link Gio.Initable}, if the object is not initialized, or initialization
         * returns with an error, then all operations on the object except
         * `g_object_ref()` and `g_object_unref()` are considered to be invalid, and
         * have undefined behaviour. They will often fail with `g_critical()` or
         * `g_warning()`, but this must not be relied on.
         * 
         * Callers should not assume that a class which implements {@link Gio.AsyncInitable} can
         * be initialized multiple times; for more information, see `g_initable_init()`.
         * If a class explicitly supports being initialized multiple times,
         * implementation requires yielding all subsequent calls to `init_async()` on the
         * results of the first call.
         * 
         * For classes that also support the {@link Gio.Initable} interface, the default
         * implementation of this method will run the `g_initable_init()` function
         * in a thread, so if you want to support asynchronous initialization via
         * threads, just implement the {@link Gio.AsyncInitable} interface without overriding
         * any interface methods.
         * @param io_priority the [I/O priority](iface.AsyncResult.html#io-priority) of the operation
         * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore.
         */
        init_async(io_priority: number, cancellable: (Gio.Cancellable | null)): globalThis.Promise<boolean>;

        /**
         * Starts asynchronous initialization of the object implementing the
         * interface. This must be done before any real use of the object after
         * initial construction. If the object also implements {@link Gio.Initable} you can
         * optionally call `g_initable_init()` instead.
         * 
         * This method is intended for language bindings. If writing in C,
         * `g_async_initable_new_async()` should typically be used instead.
         * 
         * When the initialization is finished, `callback` will be called. You can
         * then call `g_async_initable_init_finish()` to get the result of the
         * initialization.
         * 
         * Implementations may also support cancellation. If `cancellable` is not
         * `null`, then initialization can be cancelled by triggering the cancellable
         * object from another thread. If the operation was cancelled, the error
         * {@link Gio.IOErrorEnum.CANCELLED} will be returned. If `cancellable` is not `null`, and
         * the object doesn't support cancellable initialization, the error
         * {@link Gio.IOErrorEnum.NOT_SUPPORTED} will be returned.
         * 
         * As with {@link Gio.Initable}, if the object is not initialized, or initialization
         * returns with an error, then all operations on the object except
         * `g_object_ref()` and `g_object_unref()` are considered to be invalid, and
         * have undefined behaviour. They will often fail with `g_critical()` or
         * `g_warning()`, but this must not be relied on.
         * 
         * Callers should not assume that a class which implements {@link Gio.AsyncInitable} can
         * be initialized multiple times; for more information, see `g_initable_init()`.
         * If a class explicitly supports being initialized multiple times,
         * implementation requires yielding all subsequent calls to `init_async()` on the
         * results of the first call.
         * 
         * For classes that also support the {@link Gio.Initable} interface, the default
         * implementation of this method will run the `g_initable_init()` function
         * in a thread, so if you want to support asynchronous initialization via
         * threads, just implement the {@link Gio.AsyncInitable} interface without overriding
         * any interface methods.
         * @param io_priority the [I/O priority](iface.AsyncResult.html#io-priority) of the operation
         * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore.
         * @param callback a {@link Gio.AsyncReadyCallback} to call when the request is satisfied
         */
        init_async(io_priority: number, cancellable: (Gio.Cancellable | null), callback: (Gio.AsyncReadyCallback<this> | null)): void;

        /**
         * Starts asynchronous initialization of the object implementing the
         * interface. This must be done before any real use of the object after
         * initial construction. If the object also implements {@link Gio.Initable} you can
         * optionally call `g_initable_init()` instead.
         * 
         * This method is intended for language bindings. If writing in C,
         * `g_async_initable_new_async()` should typically be used instead.
         * 
         * When the initialization is finished, `callback` will be called. You can
         * then call `g_async_initable_init_finish()` to get the result of the
         * initialization.
         * 
         * Implementations may also support cancellation. If `cancellable` is not
         * `null`, then initialization can be cancelled by triggering the cancellable
         * object from another thread. If the operation was cancelled, the error
         * {@link Gio.IOErrorEnum.CANCELLED} will be returned. If `cancellable` is not `null`, and
         * the object doesn't support cancellable initialization, the error
         * {@link Gio.IOErrorEnum.NOT_SUPPORTED} will be returned.
         * 
         * As with {@link Gio.Initable}, if the object is not initialized, or initialization
         * returns with an error, then all operations on the object except
         * `g_object_ref()` and `g_object_unref()` are considered to be invalid, and
         * have undefined behaviour. They will often fail with `g_critical()` or
         * `g_warning()`, but this must not be relied on.
         * 
         * Callers should not assume that a class which implements {@link Gio.AsyncInitable} can
         * be initialized multiple times; for more information, see `g_initable_init()`.
         * If a class explicitly supports being initialized multiple times,
         * implementation requires yielding all subsequent calls to `init_async()` on the
         * results of the first call.
         * 
         * For classes that also support the {@link Gio.Initable} interface, the default
         * implementation of this method will run the `g_initable_init()` function
         * in a thread, so if you want to support asynchronous initialization via
         * threads, just implement the {@link Gio.AsyncInitable} interface without overriding
         * any interface methods.
         * @param io_priority the [I/O priority](iface.AsyncResult.html#io-priority) of the operation
         * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore.
         * @param callback a {@link Gio.AsyncReadyCallback} to call when the request is satisfied
         */
        init_async(io_priority: number, cancellable: (Gio.Cancellable | null), callback?: (Gio.AsyncReadyCallback<this> | null)): (globalThis.Promise<boolean> | void);

        /**
         * Finishes asynchronous initialization and returns the result.
         * See `g_async_initable_init_async()`.
         * @param res a {@link Gio.AsyncResult}.
         * @returns `true` if successful. If an error has occurred, this function will return `false` and set `error` appropriately if present.
         */
        init_finish(res: Gio.AsyncResult): boolean;

        /**
         * Finishes the async construction for the various g_async_initable_new
         * calls, returning the created object or `null` on error.
         * @param res the {@link Gio.AsyncResult} from the callback
         * @returns a newly created {@link GObject.Object},      or `null` on error. Free with `g_object_unref()`.
         */
        new_finish(res: Gio.AsyncResult): GreeterProxy;

        /**
         * @param args 
         */
        // Conflicted with Gio.DBusProxy.new_finish
        new_finish(...args: never[]): any;

        /**
         * Starts asynchronous initialization of the object implementing the
         * interface. This must be done before any real use of the object after
         * initial construction. If the object also implements {@link Gio.Initable} you can
         * optionally call `g_initable_init()` instead.
         * 
         * This method is intended for language bindings. If writing in C,
         * `g_async_initable_new_async()` should typically be used instead.
         * 
         * When the initialization is finished, `callback` will be called. You can
         * then call `g_async_initable_init_finish()` to get the result of the
         * initialization.
         * 
         * Implementations may also support cancellation. If `cancellable` is not
         * `null`, then initialization can be cancelled by triggering the cancellable
         * object from another thread. If the operation was cancelled, the error
         * {@link Gio.IOErrorEnum.CANCELLED} will be returned. If `cancellable` is not `null`, and
         * the object doesn't support cancellable initialization, the error
         * {@link Gio.IOErrorEnum.NOT_SUPPORTED} will be returned.
         * 
         * As with {@link Gio.Initable}, if the object is not initialized, or initialization
         * returns with an error, then all operations on the object except
         * `g_object_ref()` and `g_object_unref()` are considered to be invalid, and
         * have undefined behaviour. They will often fail with `g_critical()` or
         * `g_warning()`, but this must not be relied on.
         * 
         * Callers should not assume that a class which implements {@link Gio.AsyncInitable} can
         * be initialized multiple times; for more information, see `g_initable_init()`.
         * If a class explicitly supports being initialized multiple times,
         * implementation requires yielding all subsequent calls to `init_async()` on the
         * results of the first call.
         * 
         * For classes that also support the {@link Gio.Initable} interface, the default
         * implementation of this method will run the `g_initable_init()` function
         * in a thread, so if you want to support asynchronous initialization via
         * threads, just implement the {@link Gio.AsyncInitable} interface without overriding
         * any interface methods.
         * @param io_priority the [I/O priority](iface.AsyncResult.html#io-priority) of the operation
         * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore.
         * @param callback a {@link Gio.AsyncReadyCallback} to call when the request is satisfied
         * @virtual
         */
        vfunc_init_async(io_priority: number, cancellable: (Gio.Cancellable | null), callback: (Gio.AsyncReadyCallback<this> | null)): void;

        /**
         * Finishes asynchronous initialization and returns the result.
         * See `g_async_initable_init_async()`.
         * @param res a {@link Gio.AsyncResult}.
         * @virtual
         */
        vfunc_init_finish(res: Gio.AsyncResult): boolean;

        /**
         * Gets the {@link Gio.DBusObject} that `interface_` belongs to, if any.
         * @returns A {@link Gio.DBusObject} or `null`. The returned reference should be freed with `g_object_unref()`.
         */
        get_object(): (Gio.DBusObject | null);

        /**
         * Gets D-Bus introspection information for the D-Bus interface
         * implemented by `interface_`.
         * @returns A {@link Gio.DBusInterfaceInfo}. Do not free.
         */
        get_info(): Gio.DBusInterfaceInfo;

        /**
         * Sets the {@link Gio.DBusObject} for `interface_` to `object`.
         * 
         * Note that `interface_` will hold a weak reference to `object`.
         * @param object A {@link Gio.DBusObject} or `null`.
         */
        set_object(object: (Gio.DBusObject | null)): void;

        /**
         * Gets the {@link Gio.DBusObject} that `interface_` belongs to, if any.
         * @virtual
         */
        vfunc_dup_object(): (Gio.DBusObject | null);

        /**
         * Gets D-Bus introspection information for the D-Bus interface
         * implemented by `interface_`.
         * @virtual
         */
        vfunc_get_info(): Gio.DBusInterfaceInfo;

        /**
         * Sets the {@link Gio.DBusObject} for `interface_` to `object`.
         * 
         * Note that `interface_` will hold a weak reference to `object`.
         * @param object A {@link Gio.DBusObject} or `null`.
         * @virtual
         */
        vfunc_set_object(object: (Gio.DBusObject | null)): void;

        /**
         * Initializes the object implementing the interface.
         * 
         * This method is intended for language bindings. If writing in C,
         * `g_initable_new()` should typically be used instead.
         * 
         * The object must be initialized before any real use after initial
         * construction, either with this function or `g_async_initable_init_async()`.
         * 
         * Implementations may also support cancellation. If `cancellable` is not `null`,
         * then initialization can be cancelled by triggering the cancellable object
         * from another thread. If the operation was cancelled, the error
         * {@link Gio.IOErrorEnum.CANCELLED} will be returned. If `cancellable` is not `null` and
         * the object doesn't support cancellable initialization the error
         * {@link Gio.IOErrorEnum.NOT_SUPPORTED} will be returned.
         * 
         * If the object is not initialized, or initialization returns with an
         * error, then all operations on the object except `g_object_ref()` and
         * `g_object_unref()` are considered to be invalid, and have undefined
         * behaviour. See the [description][iface@Gio.Initable#description] for more details.
         * 
         * Callers should not assume that a class which implements {@link Gio.Initable} can be
         * initialized multiple times, unless the class explicitly documents itself as
         * supporting this. Generally, a class’ implementation of `init()` can assume
         * (and assert) that it will only be called once. Previously, this documentation
         * recommended all {@link Gio.Initable} implementations should be idempotent; that
         * recommendation was relaxed in GLib 2.54.
         * 
         * If a class explicitly supports being initialized multiple times, it is
         * recommended that the method is idempotent: multiple calls with the same
         * arguments should return the same results. Only the first call initializes
         * the object; further calls return the result of the first call.
         * 
         * One reason why a class might need to support idempotent initialization is if
         * it is designed to be used via the singleton pattern, with a
         * {@link GObject.ObjectClass}.constructor that sometimes returns an existing instance.
         * In this pattern, a caller would expect to be able to call `g_initable_init()`
         * on the result of `g_object_new()`, regardless of whether it is in fact a new
         * instance.
         * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore.
         * @returns `true` if successful. If an error has occurred, this function will     return `false` and set `error` appropriately if present.
         */
        init(cancellable: (Gio.Cancellable | null)): boolean;

        /**
         * Initializes the object implementing the interface.
         * 
         * This method is intended for language bindings. If writing in C,
         * `g_initable_new()` should typically be used instead.
         * 
         * The object must be initialized before any real use after initial
         * construction, either with this function or `g_async_initable_init_async()`.
         * 
         * Implementations may also support cancellation. If `cancellable` is not `null`,
         * then initialization can be cancelled by triggering the cancellable object
         * from another thread. If the operation was cancelled, the error
         * {@link Gio.IOErrorEnum.CANCELLED} will be returned. If `cancellable` is not `null` and
         * the object doesn't support cancellable initialization the error
         * {@link Gio.IOErrorEnum.NOT_SUPPORTED} will be returned.
         * 
         * If the object is not initialized, or initialization returns with an
         * error, then all operations on the object except `g_object_ref()` and
         * `g_object_unref()` are considered to be invalid, and have undefined
         * behaviour. See the [description][iface@Gio.Initable#description] for more details.
         * 
         * Callers should not assume that a class which implements {@link Gio.Initable} can be
         * initialized multiple times, unless the class explicitly documents itself as
         * supporting this. Generally, a class’ implementation of `init()` can assume
         * (and assert) that it will only be called once. Previously, this documentation
         * recommended all {@link Gio.Initable} implementations should be idempotent; that
         * recommendation was relaxed in GLib 2.54.
         * 
         * If a class explicitly supports being initialized multiple times, it is
         * recommended that the method is idempotent: multiple calls with the same
         * arguments should return the same results. Only the first call initializes
         * the object; further calls return the result of the first call.
         * 
         * One reason why a class might need to support idempotent initialization is if
         * it is designed to be used via the singleton pattern, with a
         * {@link GObject.ObjectClass}.constructor that sometimes returns an existing instance.
         * In this pattern, a caller would expect to be able to call `g_initable_init()`
         * on the result of `g_object_new()`, regardless of whether it is in fact a new
         * instance.
         * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore.
         * @virtual
         */
        vfunc_init(cancellable: (Gio.Cancellable | null)): boolean;
    }


    namespace GreeterSkeleton {
        // Signal signatures
        interface SignalSignatures extends Gio.DBusInterfaceSkeleton.SignalSignatures {
            "notify::g-flags": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Gio.DBusInterfaceSkeleton.ConstructorProps, Greeter.ConstructorProps, Gio.DBusInterface.ConstructorProps {

        }
    }

    /**
     * @gir-type Class
     */
    class GreeterSkeleton extends Gio.DBusInterfaceSkeleton implements Greeter, Gio.DBusInterface {
        static $gtype: GObject.GType<GreeterSkeleton>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: GreeterSkeleton.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<GreeterSkeleton.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals
        /** @signal */
        connect<K extends keyof GreeterSkeleton.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, GreeterSkeleton.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof GreeterSkeleton.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, GreeterSkeleton.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof GreeterSkeleton.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<GreeterSkeleton.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        /**
         * @param arg_username 
         * @param cancellable 
         */
        call_begin_auto_login(arg_username: string, cancellable: (Gio.Cancellable | null)): globalThis.Promise<boolean>;

        /**
         * @param arg_username 
         * @param cancellable 
         * @param callback 
         */
        call_begin_auto_login(arg_username: string, cancellable: (Gio.Cancellable | null), callback: (Gio.AsyncReadyCallback<this> | null)): void;

        /**
         * @param arg_username 
         * @param cancellable 
         * @param callback 
         */
        call_begin_auto_login(arg_username: string, cancellable: (Gio.Cancellable | null), callback?: (Gio.AsyncReadyCallback<this> | null)): (globalThis.Promise<boolean> | void);

        /**
         * @param res 
         */
        call_begin_auto_login_finish(res: Gio.AsyncResult): boolean;

        /**
         * @param arg_username 
         * @param cancellable 
         */
        call_begin_auto_login_sync(arg_username: string, cancellable: (Gio.Cancellable | null)): boolean;

        /**
         * @param cancellable 
         */
        call_get_timed_login_details(cancellable: (Gio.Cancellable | null)): globalThis.Promise<boolean>;

        /**
         * @param cancellable 
         * @param callback 
         */
        call_get_timed_login_details(cancellable: (Gio.Cancellable | null), callback: (Gio.AsyncReadyCallback<this> | null)): void;

        /**
         * @param cancellable 
         * @param callback 
         */
        call_get_timed_login_details(cancellable: (Gio.Cancellable | null), callback?: (Gio.AsyncReadyCallback<this> | null)): (globalThis.Promise<boolean> | void);

        /**
         * @param out_enabled 
         * @param out_username 
         * @param out_delay 
         * @param res 
         */
        call_get_timed_login_details_finish(out_enabled: boolean, out_username: string, out_delay: number, res: Gio.AsyncResult): boolean;

        /**
         * @param out_enabled 
         * @param out_username 
         * @param out_delay 
         * @param cancellable 
         */
        call_get_timed_login_details_sync(out_enabled: boolean, out_username: string, out_delay: number, cancellable: (Gio.Cancellable | null)): boolean;

        /**
         * @param arg_session 
         * @param cancellable 
         */
        call_select_session(arg_session: string, cancellable: (Gio.Cancellable | null)): globalThis.Promise<boolean>;

        /**
         * @param arg_session 
         * @param cancellable 
         * @param callback 
         */
        call_select_session(arg_session: string, cancellable: (Gio.Cancellable | null), callback: (Gio.AsyncReadyCallback<this> | null)): void;

        /**
         * @param arg_session 
         * @param cancellable 
         * @param callback 
         */
        call_select_session(arg_session: string, cancellable: (Gio.Cancellable | null), callback?: (Gio.AsyncReadyCallback<this> | null)): (globalThis.Promise<boolean> | void);

        /**
         * @param res 
         */
        call_select_session_finish(res: Gio.AsyncResult): boolean;

        /**
         * @param arg_session 
         * @param cancellable 
         */
        call_select_session_sync(arg_session: string, cancellable: (Gio.Cancellable | null)): boolean;

        /**
         * @param arg_username 
         * @param cancellable 
         */
        call_select_user(arg_username: string, cancellable: (Gio.Cancellable | null)): globalThis.Promise<boolean>;

        /**
         * @param arg_username 
         * @param cancellable 
         * @param callback 
         */
        call_select_user(arg_username: string, cancellable: (Gio.Cancellable | null), callback: (Gio.AsyncReadyCallback<this> | null)): void;

        /**
         * @param arg_username 
         * @param cancellable 
         * @param callback 
         */
        call_select_user(arg_username: string, cancellable: (Gio.Cancellable | null), callback?: (Gio.AsyncReadyCallback<this> | null)): (globalThis.Promise<boolean> | void);

        /**
         * @param res 
         */
        call_select_user_finish(res: Gio.AsyncResult): boolean;

        /**
         * @param arg_username 
         * @param cancellable 
         */
        call_select_user_sync(arg_username: string, cancellable: (Gio.Cancellable | null)): boolean;

        /**
         * @param arg_service_name 
         * @param arg_should_start_session 
         * @param cancellable 
         */
        call_start_session_when_ready(arg_service_name: string, arg_should_start_session: boolean, cancellable: (Gio.Cancellable | null)): globalThis.Promise<boolean>;

        /**
         * @param arg_service_name 
         * @param arg_should_start_session 
         * @param cancellable 
         * @param callback 
         */
        call_start_session_when_ready(arg_service_name: string, arg_should_start_session: boolean, cancellable: (Gio.Cancellable | null), callback: (Gio.AsyncReadyCallback<this> | null)): void;

        /**
         * @param arg_service_name 
         * @param arg_should_start_session 
         * @param cancellable 
         * @param callback 
         */
        call_start_session_when_ready(arg_service_name: string, arg_should_start_session: boolean, cancellable: (Gio.Cancellable | null), callback?: (Gio.AsyncReadyCallback<this> | null)): (globalThis.Promise<boolean> | void);

        /**
         * @param res 
         */
        call_start_session_when_ready_finish(res: Gio.AsyncResult): boolean;

        /**
         * @param arg_service_name 
         * @param arg_should_start_session 
         * @param cancellable 
         */
        call_start_session_when_ready_sync(arg_service_name: string, arg_should_start_session: boolean, cancellable: (Gio.Cancellable | null)): boolean;

        /**
         * @param invocation 
         */
        complete_begin_auto_login(invocation: Gio.DBusMethodInvocation): void;

        /**
         * @param invocation 
         * @param enabled 
         * @param username 
         * @param delay 
         */
        complete_get_timed_login_details(invocation: Gio.DBusMethodInvocation, enabled: boolean, username: string, delay: number): void;

        /**
         * @param invocation 
         */
        complete_select_session(invocation: Gio.DBusMethodInvocation): void;

        /**
         * @param invocation 
         */
        complete_select_user(invocation: Gio.DBusMethodInvocation): void;

        /**
         * @param invocation 
         */
        complete_start_session_when_ready(invocation: Gio.DBusMethodInvocation): void;

        /**
         * @param arg_language_name 
         */
        emit_default_language_name_changed(arg_language_name: string): void;

        /**
         * @param arg_session_name 
         */
        emit_default_session_name_changed(arg_session_name: string): void;

        /**
         * @param arg_service_name 
         */
        emit_reauthenticated(arg_service_name: string): void;

        /**
         * @param arg_username 
         */
        emit_selected_user_changed(arg_username: string): void;

        /**
         * @param arg_service_name 
         */
        emit_session_opened(arg_service_name: string): void;

        /**
         * @param arg_username 
         * @param arg_delay 
         */
        emit_timed_login_requested(arg_username: string, arg_delay: number): void;

        /**
         * @param arg_language_name 
         * @virtual
         */
        vfunc_default_language_name_changed(arg_language_name: string): void;

        /**
         * @param arg_session_name 
         * @virtual
         */
        vfunc_default_session_name_changed(arg_session_name: string): void;

        /**
         * @param invocation 
         * @param arg_username 
         * @virtual
         */
        vfunc_handle_begin_auto_login(invocation: Gio.DBusMethodInvocation, arg_username: string): boolean;

        /**
         * @param invocation 
         * @virtual
         */
        vfunc_handle_get_timed_login_details(invocation: Gio.DBusMethodInvocation): boolean;

        /**
         * @param invocation 
         * @param arg_session 
         * @virtual
         */
        vfunc_handle_select_session(invocation: Gio.DBusMethodInvocation, arg_session: string): boolean;

        /**
         * @param invocation 
         * @param arg_username 
         * @virtual
         */
        vfunc_handle_select_user(invocation: Gio.DBusMethodInvocation, arg_username: string): boolean;

        /**
         * @param invocation 
         * @param arg_service_name 
         * @param arg_should_start_session 
         * @virtual
         */
        vfunc_handle_start_session_when_ready(invocation: Gio.DBusMethodInvocation, arg_service_name: string, arg_should_start_session: boolean): boolean;

        /**
         * @param arg_service_name 
         * @virtual
         */
        vfunc_reauthenticated(arg_service_name: string): void;

        /**
         * @param arg_username 
         * @virtual
         */
        vfunc_selected_user_changed(arg_username: string): void;

        /**
         * @param arg_service_name 
         * @virtual
         */
        vfunc_session_opened(arg_service_name: string): void;

        /**
         * @param arg_username 
         * @param arg_delay 
         * @virtual
         */
        vfunc_timed_login_requested(arg_username: string, arg_delay: number): void;

        /**
         * Gets the {@link Gio.DBusObject} that `interface_` belongs to, if any.
         * @returns A {@link Gio.DBusObject} or `null`. The returned reference should be freed with `g_object_unref()`.
         */
        get_object(): (Gio.DBusObject | null);

        /**
         * Gets D-Bus introspection information for the D-Bus interface
         * implemented by `interface_`.
         * @returns A {@link Gio.DBusInterfaceInfo}. Do not free.
         */
        get_info(): Gio.DBusInterfaceInfo;

        /**
         * Sets the {@link Gio.DBusObject} for `interface_` to `object`.
         * 
         * Note that `interface_` will hold a weak reference to `object`.
         * @param object A {@link Gio.DBusObject} or `null`.
         */
        set_object(object: (Gio.DBusObject | null)): void;

        /**
         * Gets the {@link Gio.DBusObject} that `interface_` belongs to, if any.
         * @virtual
         */
        vfunc_dup_object(): (Gio.DBusObject | null);

        /**
         * Gets D-Bus introspection information for the D-Bus interface
         * implemented by `interface_`.
         * @virtual
         */
        vfunc_get_info(): Gio.DBusInterfaceInfo;

        /**
         * Sets the {@link Gio.DBusObject} for `interface_` to `object`.
         * 
         * Note that `interface_` will hold a weak reference to `object`.
         * @param object A {@link Gio.DBusObject} or `null`.
         * @virtual
         */
        vfunc_set_object(object: (Gio.DBusObject | null)): void;
    }


    namespace ManagerProxy {
        // Signal signatures
        interface SignalSignatures extends Gio.DBusProxy.SignalSignatures {
            "notify::g-bus-type": (pspec: GObject.ParamSpec) => void;
            "notify::g-connection": (pspec: GObject.ParamSpec) => void;
            "notify::g-default-timeout": (pspec: GObject.ParamSpec) => void;
            "notify::g-flags": (pspec: GObject.ParamSpec) => void;
            "notify::g-interface-info": (pspec: GObject.ParamSpec) => void;
            "notify::g-interface-name": (pspec: GObject.ParamSpec) => void;
            "notify::g-name": (pspec: GObject.ParamSpec) => void;
            "notify::g-name-owner": (pspec: GObject.ParamSpec) => void;
            "notify::g-object-path": (pspec: GObject.ParamSpec) => void;
            "notify::version": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Gio.DBusProxy.ConstructorProps, Manager.ConstructorProps, Gio.AsyncInitable.ConstructorProps, Gio.DBusInterface.ConstructorProps, Gio.Initable.ConstructorProps {

        }
    }

    /**
     * @gir-type Class
     */
    class ManagerProxy extends Gio.DBusProxy implements Manager, Gio.AsyncInitable<ManagerProxy>, Gio.DBusInterface, Gio.Initable {
        static $gtype: GObject.GType<ManagerProxy>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: ManagerProxy.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<ManagerProxy.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals
        /** @signal */
        connect<K extends keyof ManagerProxy.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ManagerProxy.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof ManagerProxy.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ManagerProxy.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof ManagerProxy.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<ManagerProxy.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods
        /**
         * @param connection 
         * @param flags 
         * @param name 
         * @param object_path 
         * @param cancellable 
         * @param callback 
         */
        static ["new"](connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string, object_path: string, cancellable: (Gio.Cancellable | null), callback: (Gio.AsyncReadyCallback<ManagerProxy> | null)): void;

        /**
         * @param args 
         */
    // Conflicted with Gio.DBusProxy.new
        static ["new"](...args: never[]): any;

        /**
         * @param bus_type 
         * @param flags 
         * @param name 
         * @param object_path 
         * @param cancellable 
         * @param callback 
         */
        static new_for_bus(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, object_path: string, cancellable: (Gio.Cancellable | null), callback: (Gio.AsyncReadyCallback<ManagerProxy> | null)): void;

        /**
         * @param args 
         */
    // Conflicted with Gio.DBusProxy.new_for_bus
        static new_for_bus(...args: never[]): any;

        /**
         * @default null
          * @category Inherited from Gdm.Manager
         */
        get version(): string;
        set version(val: string);

        /**
         * @param arg_username 
         * @param cancellable 
         */
        call_open_reauthentication_channel(arg_username: string, cancellable: (Gio.Cancellable | null)): globalThis.Promise<boolean>;

        /**
         * @param arg_username 
         * @param cancellable 
         * @param callback 
         */
        call_open_reauthentication_channel(arg_username: string, cancellable: (Gio.Cancellable | null), callback: (Gio.AsyncReadyCallback<this> | null)): void;

        /**
         * @param arg_username 
         * @param cancellable 
         * @param callback 
         */
        call_open_reauthentication_channel(arg_username: string, cancellable: (Gio.Cancellable | null), callback?: (Gio.AsyncReadyCallback<this> | null)): (globalThis.Promise<boolean> | void);

        /**
         * @param out_address 
         * @param res 
         */
        call_open_reauthentication_channel_finish(out_address: string, res: Gio.AsyncResult): boolean;

        /**
         * @param arg_username 
         * @param out_address 
         * @param cancellable 
         */
        call_open_reauthentication_channel_sync(arg_username: string, out_address: string, cancellable: (Gio.Cancellable | null)): boolean;

        /**
         * @param cancellable 
         */
        call_open_session(cancellable: (Gio.Cancellable | null)): globalThis.Promise<boolean>;

        /**
         * @param cancellable 
         * @param callback 
         */
        call_open_session(cancellable: (Gio.Cancellable | null), callback: (Gio.AsyncReadyCallback<this> | null)): void;

        /**
         * @param cancellable 
         * @param callback 
         */
        call_open_session(cancellable: (Gio.Cancellable | null), callback?: (Gio.AsyncReadyCallback<this> | null)): (globalThis.Promise<boolean> | void);

        /**
         * @param out_address 
         * @param res 
         */
        call_open_session_finish(out_address: string, res: Gio.AsyncResult): boolean;

        /**
         * @param out_address 
         * @param cancellable 
         */
        call_open_session_sync(out_address: string, cancellable: (Gio.Cancellable | null)): boolean;

        /**
         * @param arg_details 
         * @param cancellable 
         */
        call_register_display(arg_details: GLib.Variant, cancellable: (Gio.Cancellable | null)): globalThis.Promise<boolean>;

        /**
         * @param arg_details 
         * @param cancellable 
         * @param callback 
         */
        call_register_display(arg_details: GLib.Variant, cancellable: (Gio.Cancellable | null), callback: (Gio.AsyncReadyCallback<this> | null)): void;

        /**
         * @param arg_details 
         * @param cancellable 
         * @param callback 
         */
        call_register_display(arg_details: GLib.Variant, cancellable: (Gio.Cancellable | null), callback?: (Gio.AsyncReadyCallback<this> | null)): (globalThis.Promise<boolean> | void);

        /**
         * @param res 
         */
        call_register_display_finish(res: Gio.AsyncResult): boolean;

        /**
         * @param arg_details 
         * @param cancellable 
         */
        call_register_display_sync(arg_details: GLib.Variant, cancellable: (Gio.Cancellable | null)): boolean;

        /**
         * @param arg_details 
         * @param cancellable 
         */
        call_register_session(arg_details: GLib.Variant, cancellable: (Gio.Cancellable | null)): globalThis.Promise<boolean>;

        /**
         * @param arg_details 
         * @param cancellable 
         * @param callback 
         */
        call_register_session(arg_details: GLib.Variant, cancellable: (Gio.Cancellable | null), callback: (Gio.AsyncReadyCallback<this> | null)): void;

        /**
         * @param arg_details 
         * @param cancellable 
         * @param callback 
         */
        call_register_session(arg_details: GLib.Variant, cancellable: (Gio.Cancellable | null), callback?: (Gio.AsyncReadyCallback<this> | null)): (globalThis.Promise<boolean> | void);

        /**
         * @param res 
         */
        call_register_session_finish(res: Gio.AsyncResult): boolean;

        /**
         * @param arg_details 
         * @param cancellable 
         */
        call_register_session_sync(arg_details: GLib.Variant, cancellable: (Gio.Cancellable | null)): boolean;

        /**
         * @param invocation 
         * @param address 
         */
        complete_open_reauthentication_channel(invocation: Gio.DBusMethodInvocation, address: string): void;

        /**
         * @param invocation 
         * @param address 
         */
        complete_open_session(invocation: Gio.DBusMethodInvocation, address: string): void;

        /**
         * @param invocation 
         */
        complete_register_display(invocation: Gio.DBusMethodInvocation): void;

        /**
         * @param invocation 
         */
        complete_register_session(invocation: Gio.DBusMethodInvocation): void;

        dup_version(): string;

        get_version(): string;

        /**
         * @param value 
         */
        set_version(value: string): void;

        /**
         * @virtual
         */
        vfunc_get_version(): string;

        /**
         * @param invocation 
         * @param arg_username 
         * @virtual
         */
        vfunc_handle_open_reauthentication_channel(invocation: Gio.DBusMethodInvocation, arg_username: string): boolean;

        /**
         * @param invocation 
         * @virtual
         */
        vfunc_handle_open_session(invocation: Gio.DBusMethodInvocation): boolean;

        /**
         * @param invocation 
         * @param arg_details 
         * @virtual
         */
        vfunc_handle_register_display(invocation: Gio.DBusMethodInvocation, arg_details: GLib.Variant): boolean;

        /**
         * @param invocation 
         * @param arg_details 
         * @virtual
         */
        vfunc_handle_register_session(invocation: Gio.DBusMethodInvocation, arg_details: GLib.Variant): boolean;

        /**
         * Starts asynchronous initialization of the object implementing the
         * interface. This must be done before any real use of the object after
         * initial construction. If the object also implements {@link Gio.Initable} you can
         * optionally call `g_initable_init()` instead.
         * 
         * This method is intended for language bindings. If writing in C,
         * `g_async_initable_new_async()` should typically be used instead.
         * 
         * When the initialization is finished, `callback` will be called. You can
         * then call `g_async_initable_init_finish()` to get the result of the
         * initialization.
         * 
         * Implementations may also support cancellation. If `cancellable` is not
         * `null`, then initialization can be cancelled by triggering the cancellable
         * object from another thread. If the operation was cancelled, the error
         * {@link Gio.IOErrorEnum.CANCELLED} will be returned. If `cancellable` is not `null`, and
         * the object doesn't support cancellable initialization, the error
         * {@link Gio.IOErrorEnum.NOT_SUPPORTED} will be returned.
         * 
         * As with {@link Gio.Initable}, if the object is not initialized, or initialization
         * returns with an error, then all operations on the object except
         * `g_object_ref()` and `g_object_unref()` are considered to be invalid, and
         * have undefined behaviour. They will often fail with `g_critical()` or
         * `g_warning()`, but this must not be relied on.
         * 
         * Callers should not assume that a class which implements {@link Gio.AsyncInitable} can
         * be initialized multiple times; for more information, see `g_initable_init()`.
         * If a class explicitly supports being initialized multiple times,
         * implementation requires yielding all subsequent calls to `init_async()` on the
         * results of the first call.
         * 
         * For classes that also support the {@link Gio.Initable} interface, the default
         * implementation of this method will run the `g_initable_init()` function
         * in a thread, so if you want to support asynchronous initialization via
         * threads, just implement the {@link Gio.AsyncInitable} interface without overriding
         * any interface methods.
         * @param io_priority the [I/O priority](iface.AsyncResult.html#io-priority) of the operation
         * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore.
         */
        init_async(io_priority: number, cancellable: (Gio.Cancellable | null)): globalThis.Promise<boolean>;

        /**
         * Starts asynchronous initialization of the object implementing the
         * interface. This must be done before any real use of the object after
         * initial construction. If the object also implements {@link Gio.Initable} you can
         * optionally call `g_initable_init()` instead.
         * 
         * This method is intended for language bindings. If writing in C,
         * `g_async_initable_new_async()` should typically be used instead.
         * 
         * When the initialization is finished, `callback` will be called. You can
         * then call `g_async_initable_init_finish()` to get the result of the
         * initialization.
         * 
         * Implementations may also support cancellation. If `cancellable` is not
         * `null`, then initialization can be cancelled by triggering the cancellable
         * object from another thread. If the operation was cancelled, the error
         * {@link Gio.IOErrorEnum.CANCELLED} will be returned. If `cancellable` is not `null`, and
         * the object doesn't support cancellable initialization, the error
         * {@link Gio.IOErrorEnum.NOT_SUPPORTED} will be returned.
         * 
         * As with {@link Gio.Initable}, if the object is not initialized, or initialization
         * returns with an error, then all operations on the object except
         * `g_object_ref()` and `g_object_unref()` are considered to be invalid, and
         * have undefined behaviour. They will often fail with `g_critical()` or
         * `g_warning()`, but this must not be relied on.
         * 
         * Callers should not assume that a class which implements {@link Gio.AsyncInitable} can
         * be initialized multiple times; for more information, see `g_initable_init()`.
         * If a class explicitly supports being initialized multiple times,
         * implementation requires yielding all subsequent calls to `init_async()` on the
         * results of the first call.
         * 
         * For classes that also support the {@link Gio.Initable} interface, the default
         * implementation of this method will run the `g_initable_init()` function
         * in a thread, so if you want to support asynchronous initialization via
         * threads, just implement the {@link Gio.AsyncInitable} interface without overriding
         * any interface methods.
         * @param io_priority the [I/O priority](iface.AsyncResult.html#io-priority) of the operation
         * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore.
         * @param callback a {@link Gio.AsyncReadyCallback} to call when the request is satisfied
         */
        init_async(io_priority: number, cancellable: (Gio.Cancellable | null), callback: (Gio.AsyncReadyCallback<this> | null)): void;

        /**
         * Starts asynchronous initialization of the object implementing the
         * interface. This must be done before any real use of the object after
         * initial construction. If the object also implements {@link Gio.Initable} you can
         * optionally call `g_initable_init()` instead.
         * 
         * This method is intended for language bindings. If writing in C,
         * `g_async_initable_new_async()` should typically be used instead.
         * 
         * When the initialization is finished, `callback` will be called. You can
         * then call `g_async_initable_init_finish()` to get the result of the
         * initialization.
         * 
         * Implementations may also support cancellation. If `cancellable` is not
         * `null`, then initialization can be cancelled by triggering the cancellable
         * object from another thread. If the operation was cancelled, the error
         * {@link Gio.IOErrorEnum.CANCELLED} will be returned. If `cancellable` is not `null`, and
         * the object doesn't support cancellable initialization, the error
         * {@link Gio.IOErrorEnum.NOT_SUPPORTED} will be returned.
         * 
         * As with {@link Gio.Initable}, if the object is not initialized, or initialization
         * returns with an error, then all operations on the object except
         * `g_object_ref()` and `g_object_unref()` are considered to be invalid, and
         * have undefined behaviour. They will often fail with `g_critical()` or
         * `g_warning()`, but this must not be relied on.
         * 
         * Callers should not assume that a class which implements {@link Gio.AsyncInitable} can
         * be initialized multiple times; for more information, see `g_initable_init()`.
         * If a class explicitly supports being initialized multiple times,
         * implementation requires yielding all subsequent calls to `init_async()` on the
         * results of the first call.
         * 
         * For classes that also support the {@link Gio.Initable} interface, the default
         * implementation of this method will run the `g_initable_init()` function
         * in a thread, so if you want to support asynchronous initialization via
         * threads, just implement the {@link Gio.AsyncInitable} interface without overriding
         * any interface methods.
         * @param io_priority the [I/O priority](iface.AsyncResult.html#io-priority) of the operation
         * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore.
         * @param callback a {@link Gio.AsyncReadyCallback} to call when the request is satisfied
         */
        init_async(io_priority: number, cancellable: (Gio.Cancellable | null), callback?: (Gio.AsyncReadyCallback<this> | null)): (globalThis.Promise<boolean> | void);

        /**
         * Finishes asynchronous initialization and returns the result.
         * See `g_async_initable_init_async()`.
         * @param res a {@link Gio.AsyncResult}.
         * @returns `true` if successful. If an error has occurred, this function will return `false` and set `error` appropriately if present.
         */
        init_finish(res: Gio.AsyncResult): boolean;

        /**
         * Finishes the async construction for the various g_async_initable_new
         * calls, returning the created object or `null` on error.
         * @param res the {@link Gio.AsyncResult} from the callback
         * @returns a newly created {@link GObject.Object},      or `null` on error. Free with `g_object_unref()`.
         */
        new_finish(res: Gio.AsyncResult): ManagerProxy;

        /**
         * @param args 
         */
        // Conflicted with Gio.DBusProxy.new_finish
        new_finish(...args: never[]): any;

        /**
         * Starts asynchronous initialization of the object implementing the
         * interface. This must be done before any real use of the object after
         * initial construction. If the object also implements {@link Gio.Initable} you can
         * optionally call `g_initable_init()` instead.
         * 
         * This method is intended for language bindings. If writing in C,
         * `g_async_initable_new_async()` should typically be used instead.
         * 
         * When the initialization is finished, `callback` will be called. You can
         * then call `g_async_initable_init_finish()` to get the result of the
         * initialization.
         * 
         * Implementations may also support cancellation. If `cancellable` is not
         * `null`, then initialization can be cancelled by triggering the cancellable
         * object from another thread. If the operation was cancelled, the error
         * {@link Gio.IOErrorEnum.CANCELLED} will be returned. If `cancellable` is not `null`, and
         * the object doesn't support cancellable initialization, the error
         * {@link Gio.IOErrorEnum.NOT_SUPPORTED} will be returned.
         * 
         * As with {@link Gio.Initable}, if the object is not initialized, or initialization
         * returns with an error, then all operations on the object except
         * `g_object_ref()` and `g_object_unref()` are considered to be invalid, and
         * have undefined behaviour. They will often fail with `g_critical()` or
         * `g_warning()`, but this must not be relied on.
         * 
         * Callers should not assume that a class which implements {@link Gio.AsyncInitable} can
         * be initialized multiple times; for more information, see `g_initable_init()`.
         * If a class explicitly supports being initialized multiple times,
         * implementation requires yielding all subsequent calls to `init_async()` on the
         * results of the first call.
         * 
         * For classes that also support the {@link Gio.Initable} interface, the default
         * implementation of this method will run the `g_initable_init()` function
         * in a thread, so if you want to support asynchronous initialization via
         * threads, just implement the {@link Gio.AsyncInitable} interface without overriding
         * any interface methods.
         * @param io_priority the [I/O priority](iface.AsyncResult.html#io-priority) of the operation
         * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore.
         * @param callback a {@link Gio.AsyncReadyCallback} to call when the request is satisfied
         * @virtual
         */
        vfunc_init_async(io_priority: number, cancellable: (Gio.Cancellable | null), callback: (Gio.AsyncReadyCallback<this> | null)): void;

        /**
         * Finishes asynchronous initialization and returns the result.
         * See `g_async_initable_init_async()`.
         * @param res a {@link Gio.AsyncResult}.
         * @virtual
         */
        vfunc_init_finish(res: Gio.AsyncResult): boolean;

        /**
         * Gets the {@link Gio.DBusObject} that `interface_` belongs to, if any.
         * @returns A {@link Gio.DBusObject} or `null`. The returned reference should be freed with `g_object_unref()`.
         */
        get_object(): (Gio.DBusObject | null);

        /**
         * Gets D-Bus introspection information for the D-Bus interface
         * implemented by `interface_`.
         * @returns A {@link Gio.DBusInterfaceInfo}. Do not free.
         */
        get_info(): Gio.DBusInterfaceInfo;

        /**
         * Sets the {@link Gio.DBusObject} for `interface_` to `object`.
         * 
         * Note that `interface_` will hold a weak reference to `object`.
         * @param object A {@link Gio.DBusObject} or `null`.
         */
        set_object(object: (Gio.DBusObject | null)): void;

        /**
         * Gets the {@link Gio.DBusObject} that `interface_` belongs to, if any.
         * @virtual
         */
        vfunc_dup_object(): (Gio.DBusObject | null);

        /**
         * Gets D-Bus introspection information for the D-Bus interface
         * implemented by `interface_`.
         * @virtual
         */
        vfunc_get_info(): Gio.DBusInterfaceInfo;

        /**
         * Sets the {@link Gio.DBusObject} for `interface_` to `object`.
         * 
         * Note that `interface_` will hold a weak reference to `object`.
         * @param object A {@link Gio.DBusObject} or `null`.
         * @virtual
         */
        vfunc_set_object(object: (Gio.DBusObject | null)): void;

        /**
         * Initializes the object implementing the interface.
         * 
         * This method is intended for language bindings. If writing in C,
         * `g_initable_new()` should typically be used instead.
         * 
         * The object must be initialized before any real use after initial
         * construction, either with this function or `g_async_initable_init_async()`.
         * 
         * Implementations may also support cancellation. If `cancellable` is not `null`,
         * then initialization can be cancelled by triggering the cancellable object
         * from another thread. If the operation was cancelled, the error
         * {@link Gio.IOErrorEnum.CANCELLED} will be returned. If `cancellable` is not `null` and
         * the object doesn't support cancellable initialization the error
         * {@link Gio.IOErrorEnum.NOT_SUPPORTED} will be returned.
         * 
         * If the object is not initialized, or initialization returns with an
         * error, then all operations on the object except `g_object_ref()` and
         * `g_object_unref()` are considered to be invalid, and have undefined
         * behaviour. See the [description][iface@Gio.Initable#description] for more details.
         * 
         * Callers should not assume that a class which implements {@link Gio.Initable} can be
         * initialized multiple times, unless the class explicitly documents itself as
         * supporting this. Generally, a class’ implementation of `init()` can assume
         * (and assert) that it will only be called once. Previously, this documentation
         * recommended all {@link Gio.Initable} implementations should be idempotent; that
         * recommendation was relaxed in GLib 2.54.
         * 
         * If a class explicitly supports being initialized multiple times, it is
         * recommended that the method is idempotent: multiple calls with the same
         * arguments should return the same results. Only the first call initializes
         * the object; further calls return the result of the first call.
         * 
         * One reason why a class might need to support idempotent initialization is if
         * it is designed to be used via the singleton pattern, with a
         * {@link GObject.ObjectClass}.constructor that sometimes returns an existing instance.
         * In this pattern, a caller would expect to be able to call `g_initable_init()`
         * on the result of `g_object_new()`, regardless of whether it is in fact a new
         * instance.
         * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore.
         * @returns `true` if successful. If an error has occurred, this function will     return `false` and set `error` appropriately if present.
         */
        init(cancellable: (Gio.Cancellable | null)): boolean;

        /**
         * Initializes the object implementing the interface.
         * 
         * This method is intended for language bindings. If writing in C,
         * `g_initable_new()` should typically be used instead.
         * 
         * The object must be initialized before any real use after initial
         * construction, either with this function or `g_async_initable_init_async()`.
         * 
         * Implementations may also support cancellation. If `cancellable` is not `null`,
         * then initialization can be cancelled by triggering the cancellable object
         * from another thread. If the operation was cancelled, the error
         * {@link Gio.IOErrorEnum.CANCELLED} will be returned. If `cancellable` is not `null` and
         * the object doesn't support cancellable initialization the error
         * {@link Gio.IOErrorEnum.NOT_SUPPORTED} will be returned.
         * 
         * If the object is not initialized, or initialization returns with an
         * error, then all operations on the object except `g_object_ref()` and
         * `g_object_unref()` are considered to be invalid, and have undefined
         * behaviour. See the [description][iface@Gio.Initable#description] for more details.
         * 
         * Callers should not assume that a class which implements {@link Gio.Initable} can be
         * initialized multiple times, unless the class explicitly documents itself as
         * supporting this. Generally, a class’ implementation of `init()` can assume
         * (and assert) that it will only be called once. Previously, this documentation
         * recommended all {@link Gio.Initable} implementations should be idempotent; that
         * recommendation was relaxed in GLib 2.54.
         * 
         * If a class explicitly supports being initialized multiple times, it is
         * recommended that the method is idempotent: multiple calls with the same
         * arguments should return the same results. Only the first call initializes
         * the object; further calls return the result of the first call.
         * 
         * One reason why a class might need to support idempotent initialization is if
         * it is designed to be used via the singleton pattern, with a
         * {@link GObject.ObjectClass}.constructor that sometimes returns an existing instance.
         * In this pattern, a caller would expect to be able to call `g_initable_init()`
         * on the result of `g_object_new()`, regardless of whether it is in fact a new
         * instance.
         * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore.
         * @virtual
         */
        vfunc_init(cancellable: (Gio.Cancellable | null)): boolean;
    }


    namespace ManagerSkeleton {
        // Signal signatures
        interface SignalSignatures extends Gio.DBusInterfaceSkeleton.SignalSignatures {
            "notify::g-flags": (pspec: GObject.ParamSpec) => void;
            "notify::version": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Gio.DBusInterfaceSkeleton.ConstructorProps, Manager.ConstructorProps, Gio.DBusInterface.ConstructorProps {

        }
    }

    /**
     * @gir-type Class
     */
    class ManagerSkeleton extends Gio.DBusInterfaceSkeleton implements Manager, Gio.DBusInterface {
        static $gtype: GObject.GType<ManagerSkeleton>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: ManagerSkeleton.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<ManagerSkeleton.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals
        /** @signal */
        connect<K extends keyof ManagerSkeleton.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ManagerSkeleton.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof ManagerSkeleton.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ManagerSkeleton.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof ManagerSkeleton.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<ManagerSkeleton.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        /**
         * @default null
          * @category Inherited from Gdm.Manager
         */
        get version(): string;
        set version(val: string);

        /**
         * @param arg_username 
         * @param cancellable 
         */
        call_open_reauthentication_channel(arg_username: string, cancellable: (Gio.Cancellable | null)): globalThis.Promise<boolean>;

        /**
         * @param arg_username 
         * @param cancellable 
         * @param callback 
         */
        call_open_reauthentication_channel(arg_username: string, cancellable: (Gio.Cancellable | null), callback: (Gio.AsyncReadyCallback<this> | null)): void;

        /**
         * @param arg_username 
         * @param cancellable 
         * @param callback 
         */
        call_open_reauthentication_channel(arg_username: string, cancellable: (Gio.Cancellable | null), callback?: (Gio.AsyncReadyCallback<this> | null)): (globalThis.Promise<boolean> | void);

        /**
         * @param out_address 
         * @param res 
         */
        call_open_reauthentication_channel_finish(out_address: string, res: Gio.AsyncResult): boolean;

        /**
         * @param arg_username 
         * @param out_address 
         * @param cancellable 
         */
        call_open_reauthentication_channel_sync(arg_username: string, out_address: string, cancellable: (Gio.Cancellable | null)): boolean;

        /**
         * @param cancellable 
         */
        call_open_session(cancellable: (Gio.Cancellable | null)): globalThis.Promise<boolean>;

        /**
         * @param cancellable 
         * @param callback 
         */
        call_open_session(cancellable: (Gio.Cancellable | null), callback: (Gio.AsyncReadyCallback<this> | null)): void;

        /**
         * @param cancellable 
         * @param callback 
         */
        call_open_session(cancellable: (Gio.Cancellable | null), callback?: (Gio.AsyncReadyCallback<this> | null)): (globalThis.Promise<boolean> | void);

        /**
         * @param out_address 
         * @param res 
         */
        call_open_session_finish(out_address: string, res: Gio.AsyncResult): boolean;

        /**
         * @param out_address 
         * @param cancellable 
         */
        call_open_session_sync(out_address: string, cancellable: (Gio.Cancellable | null)): boolean;

        /**
         * @param arg_details 
         * @param cancellable 
         */
        call_register_display(arg_details: GLib.Variant, cancellable: (Gio.Cancellable | null)): globalThis.Promise<boolean>;

        /**
         * @param arg_details 
         * @param cancellable 
         * @param callback 
         */
        call_register_display(arg_details: GLib.Variant, cancellable: (Gio.Cancellable | null), callback: (Gio.AsyncReadyCallback<this> | null)): void;

        /**
         * @param arg_details 
         * @param cancellable 
         * @param callback 
         */
        call_register_display(arg_details: GLib.Variant, cancellable: (Gio.Cancellable | null), callback?: (Gio.AsyncReadyCallback<this> | null)): (globalThis.Promise<boolean> | void);

        /**
         * @param res 
         */
        call_register_display_finish(res: Gio.AsyncResult): boolean;

        /**
         * @param arg_details 
         * @param cancellable 
         */
        call_register_display_sync(arg_details: GLib.Variant, cancellable: (Gio.Cancellable | null)): boolean;

        /**
         * @param arg_details 
         * @param cancellable 
         */
        call_register_session(arg_details: GLib.Variant, cancellable: (Gio.Cancellable | null)): globalThis.Promise<boolean>;

        /**
         * @param arg_details 
         * @param cancellable 
         * @param callback 
         */
        call_register_session(arg_details: GLib.Variant, cancellable: (Gio.Cancellable | null), callback: (Gio.AsyncReadyCallback<this> | null)): void;

        /**
         * @param arg_details 
         * @param cancellable 
         * @param callback 
         */
        call_register_session(arg_details: GLib.Variant, cancellable: (Gio.Cancellable | null), callback?: (Gio.AsyncReadyCallback<this> | null)): (globalThis.Promise<boolean> | void);

        /**
         * @param res 
         */
        call_register_session_finish(res: Gio.AsyncResult): boolean;

        /**
         * @param arg_details 
         * @param cancellable 
         */
        call_register_session_sync(arg_details: GLib.Variant, cancellable: (Gio.Cancellable | null)): boolean;

        /**
         * @param invocation 
         * @param address 
         */
        complete_open_reauthentication_channel(invocation: Gio.DBusMethodInvocation, address: string): void;

        /**
         * @param invocation 
         * @param address 
         */
        complete_open_session(invocation: Gio.DBusMethodInvocation, address: string): void;

        /**
         * @param invocation 
         */
        complete_register_display(invocation: Gio.DBusMethodInvocation): void;

        /**
         * @param invocation 
         */
        complete_register_session(invocation: Gio.DBusMethodInvocation): void;

        dup_version(): string;

        get_version(): string;

        /**
         * @param value 
         */
        set_version(value: string): void;

        /**
         * @virtual
         */
        vfunc_get_version(): string;

        /**
         * @param invocation 
         * @param arg_username 
         * @virtual
         */
        vfunc_handle_open_reauthentication_channel(invocation: Gio.DBusMethodInvocation, arg_username: string): boolean;

        /**
         * @param invocation 
         * @virtual
         */
        vfunc_handle_open_session(invocation: Gio.DBusMethodInvocation): boolean;

        /**
         * @param invocation 
         * @param arg_details 
         * @virtual
         */
        vfunc_handle_register_display(invocation: Gio.DBusMethodInvocation, arg_details: GLib.Variant): boolean;

        /**
         * @param invocation 
         * @param arg_details 
         * @virtual
         */
        vfunc_handle_register_session(invocation: Gio.DBusMethodInvocation, arg_details: GLib.Variant): boolean;

        /**
         * Gets the {@link Gio.DBusObject} that `interface_` belongs to, if any.
         * @returns A {@link Gio.DBusObject} or `null`. The returned reference should be freed with `g_object_unref()`.
         */
        get_object(): (Gio.DBusObject | null);

        /**
         * Gets D-Bus introspection information for the D-Bus interface
         * implemented by `interface_`.
         * @returns A {@link Gio.DBusInterfaceInfo}. Do not free.
         */
        get_info(): Gio.DBusInterfaceInfo;

        /**
         * Sets the {@link Gio.DBusObject} for `interface_` to `object`.
         * 
         * Note that `interface_` will hold a weak reference to `object`.
         * @param object A {@link Gio.DBusObject} or `null`.
         */
        set_object(object: (Gio.DBusObject | null)): void;

        /**
         * Gets the {@link Gio.DBusObject} that `interface_` belongs to, if any.
         * @virtual
         */
        vfunc_dup_object(): (Gio.DBusObject | null);

        /**
         * Gets D-Bus introspection information for the D-Bus interface
         * implemented by `interface_`.
         * @virtual
         */
        vfunc_get_info(): Gio.DBusInterfaceInfo;

        /**
         * Sets the {@link Gio.DBusObject} for `interface_` to `object`.
         * 
         * Note that `interface_` will hold a weak reference to `object`.
         * @param object A {@link Gio.DBusObject} or `null`.
         * @virtual
         */
        vfunc_set_object(object: (Gio.DBusObject | null)): void;
    }


    namespace RemoteGreeterProxy {
        // Signal signatures
        interface SignalSignatures extends Gio.DBusProxy.SignalSignatures {
            "notify::g-bus-type": (pspec: GObject.ParamSpec) => void;
            "notify::g-connection": (pspec: GObject.ParamSpec) => void;
            "notify::g-default-timeout": (pspec: GObject.ParamSpec) => void;
            "notify::g-flags": (pspec: GObject.ParamSpec) => void;
            "notify::g-interface-info": (pspec: GObject.ParamSpec) => void;
            "notify::g-interface-name": (pspec: GObject.ParamSpec) => void;
            "notify::g-name": (pspec: GObject.ParamSpec) => void;
            "notify::g-name-owner": (pspec: GObject.ParamSpec) => void;
            "notify::g-object-path": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Gio.DBusProxy.ConstructorProps, RemoteGreeter.ConstructorProps, Gio.AsyncInitable.ConstructorProps, Gio.DBusInterface.ConstructorProps, Gio.Initable.ConstructorProps {

        }
    }

    /**
     * @gir-type Class
     */
    class RemoteGreeterProxy extends Gio.DBusProxy implements RemoteGreeter, Gio.AsyncInitable<RemoteGreeterProxy>, Gio.DBusInterface, Gio.Initable {
        static $gtype: GObject.GType<RemoteGreeterProxy>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: RemoteGreeterProxy.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<RemoteGreeterProxy.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals
        /** @signal */
        connect<K extends keyof RemoteGreeterProxy.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, RemoteGreeterProxy.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof RemoteGreeterProxy.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, RemoteGreeterProxy.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof RemoteGreeterProxy.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<RemoteGreeterProxy.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods
        /**
         * @param connection 
         * @param flags 
         * @param name 
         * @param object_path 
         * @param cancellable 
         * @param callback 
         */
        static ["new"](connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string, object_path: string, cancellable: (Gio.Cancellable | null), callback: (Gio.AsyncReadyCallback<RemoteGreeterProxy> | null)): void;

        /**
         * @param args 
         */
    // Conflicted with Gio.DBusProxy.new
        static ["new"](...args: never[]): any;

        /**
         * @param bus_type 
         * @param flags 
         * @param name 
         * @param object_path 
         * @param cancellable 
         * @param callback 
         */
        static new_for_bus(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, object_path: string, cancellable: (Gio.Cancellable | null), callback: (Gio.AsyncReadyCallback<RemoteGreeterProxy> | null)): void;

        /**
         * @param args 
         */
    // Conflicted with Gio.DBusProxy.new_for_bus
        static new_for_bus(...args: never[]): any;

        /**
         * @param cancellable 
         */
        call_disconnect(cancellable: (Gio.Cancellable | null)): globalThis.Promise<boolean>;

        /**
         * @param cancellable 
         * @param callback 
         */
        call_disconnect(cancellable: (Gio.Cancellable | null), callback: (Gio.AsyncReadyCallback<this> | null)): void;

        /**
         * @param cancellable 
         * @param callback 
         */
        call_disconnect(cancellable: (Gio.Cancellable | null), callback?: (Gio.AsyncReadyCallback<this> | null)): (globalThis.Promise<boolean> | void);

        /**
         * @param res 
         */
        call_disconnect_finish(res: Gio.AsyncResult): boolean;

        /**
         * @param cancellable 
         */
        call_disconnect_sync(cancellable: (Gio.Cancellable | null)): boolean;

        /**
         * @param invocation 
         */
        complete_disconnect(invocation: Gio.DBusMethodInvocation): void;

        /**
         * @param invocation 
         * @virtual
         */
        vfunc_handle_disconnect(invocation: Gio.DBusMethodInvocation): boolean;

        /**
         * Starts asynchronous initialization of the object implementing the
         * interface. This must be done before any real use of the object after
         * initial construction. If the object also implements {@link Gio.Initable} you can
         * optionally call `g_initable_init()` instead.
         * 
         * This method is intended for language bindings. If writing in C,
         * `g_async_initable_new_async()` should typically be used instead.
         * 
         * When the initialization is finished, `callback` will be called. You can
         * then call `g_async_initable_init_finish()` to get the result of the
         * initialization.
         * 
         * Implementations may also support cancellation. If `cancellable` is not
         * `null`, then initialization can be cancelled by triggering the cancellable
         * object from another thread. If the operation was cancelled, the error
         * {@link Gio.IOErrorEnum.CANCELLED} will be returned. If `cancellable` is not `null`, and
         * the object doesn't support cancellable initialization, the error
         * {@link Gio.IOErrorEnum.NOT_SUPPORTED} will be returned.
         * 
         * As with {@link Gio.Initable}, if the object is not initialized, or initialization
         * returns with an error, then all operations on the object except
         * `g_object_ref()` and `g_object_unref()` are considered to be invalid, and
         * have undefined behaviour. They will often fail with `g_critical()` or
         * `g_warning()`, but this must not be relied on.
         * 
         * Callers should not assume that a class which implements {@link Gio.AsyncInitable} can
         * be initialized multiple times; for more information, see `g_initable_init()`.
         * If a class explicitly supports being initialized multiple times,
         * implementation requires yielding all subsequent calls to `init_async()` on the
         * results of the first call.
         * 
         * For classes that also support the {@link Gio.Initable} interface, the default
         * implementation of this method will run the `g_initable_init()` function
         * in a thread, so if you want to support asynchronous initialization via
         * threads, just implement the {@link Gio.AsyncInitable} interface without overriding
         * any interface methods.
         * @param io_priority the [I/O priority](iface.AsyncResult.html#io-priority) of the operation
         * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore.
         */
        init_async(io_priority: number, cancellable: (Gio.Cancellable | null)): globalThis.Promise<boolean>;

        /**
         * Starts asynchronous initialization of the object implementing the
         * interface. This must be done before any real use of the object after
         * initial construction. If the object also implements {@link Gio.Initable} you can
         * optionally call `g_initable_init()` instead.
         * 
         * This method is intended for language bindings. If writing in C,
         * `g_async_initable_new_async()` should typically be used instead.
         * 
         * When the initialization is finished, `callback` will be called. You can
         * then call `g_async_initable_init_finish()` to get the result of the
         * initialization.
         * 
         * Implementations may also support cancellation. If `cancellable` is not
         * `null`, then initialization can be cancelled by triggering the cancellable
         * object from another thread. If the operation was cancelled, the error
         * {@link Gio.IOErrorEnum.CANCELLED} will be returned. If `cancellable` is not `null`, and
         * the object doesn't support cancellable initialization, the error
         * {@link Gio.IOErrorEnum.NOT_SUPPORTED} will be returned.
         * 
         * As with {@link Gio.Initable}, if the object is not initialized, or initialization
         * returns with an error, then all operations on the object except
         * `g_object_ref()` and `g_object_unref()` are considered to be invalid, and
         * have undefined behaviour. They will often fail with `g_critical()` or
         * `g_warning()`, but this must not be relied on.
         * 
         * Callers should not assume that a class which implements {@link Gio.AsyncInitable} can
         * be initialized multiple times; for more information, see `g_initable_init()`.
         * If a class explicitly supports being initialized multiple times,
         * implementation requires yielding all subsequent calls to `init_async()` on the
         * results of the first call.
         * 
         * For classes that also support the {@link Gio.Initable} interface, the default
         * implementation of this method will run the `g_initable_init()` function
         * in a thread, so if you want to support asynchronous initialization via
         * threads, just implement the {@link Gio.AsyncInitable} interface without overriding
         * any interface methods.
         * @param io_priority the [I/O priority](iface.AsyncResult.html#io-priority) of the operation
         * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore.
         * @param callback a {@link Gio.AsyncReadyCallback} to call when the request is satisfied
         */
        init_async(io_priority: number, cancellable: (Gio.Cancellable | null), callback: (Gio.AsyncReadyCallback<this> | null)): void;

        /**
         * Starts asynchronous initialization of the object implementing the
         * interface. This must be done before any real use of the object after
         * initial construction. If the object also implements {@link Gio.Initable} you can
         * optionally call `g_initable_init()` instead.
         * 
         * This method is intended for language bindings. If writing in C,
         * `g_async_initable_new_async()` should typically be used instead.
         * 
         * When the initialization is finished, `callback` will be called. You can
         * then call `g_async_initable_init_finish()` to get the result of the
         * initialization.
         * 
         * Implementations may also support cancellation. If `cancellable` is not
         * `null`, then initialization can be cancelled by triggering the cancellable
         * object from another thread. If the operation was cancelled, the error
         * {@link Gio.IOErrorEnum.CANCELLED} will be returned. If `cancellable` is not `null`, and
         * the object doesn't support cancellable initialization, the error
         * {@link Gio.IOErrorEnum.NOT_SUPPORTED} will be returned.
         * 
         * As with {@link Gio.Initable}, if the object is not initialized, or initialization
         * returns with an error, then all operations on the object except
         * `g_object_ref()` and `g_object_unref()` are considered to be invalid, and
         * have undefined behaviour. They will often fail with `g_critical()` or
         * `g_warning()`, but this must not be relied on.
         * 
         * Callers should not assume that a class which implements {@link Gio.AsyncInitable} can
         * be initialized multiple times; for more information, see `g_initable_init()`.
         * If a class explicitly supports being initialized multiple times,
         * implementation requires yielding all subsequent calls to `init_async()` on the
         * results of the first call.
         * 
         * For classes that also support the {@link Gio.Initable} interface, the default
         * implementation of this method will run the `g_initable_init()` function
         * in a thread, so if you want to support asynchronous initialization via
         * threads, just implement the {@link Gio.AsyncInitable} interface without overriding
         * any interface methods.
         * @param io_priority the [I/O priority](iface.AsyncResult.html#io-priority) of the operation
         * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore.
         * @param callback a {@link Gio.AsyncReadyCallback} to call when the request is satisfied
         */
        init_async(io_priority: number, cancellable: (Gio.Cancellable | null), callback?: (Gio.AsyncReadyCallback<this> | null)): (globalThis.Promise<boolean> | void);

        /**
         * Finishes asynchronous initialization and returns the result.
         * See `g_async_initable_init_async()`.
         * @param res a {@link Gio.AsyncResult}.
         * @returns `true` if successful. If an error has occurred, this function will return `false` and set `error` appropriately if present.
         */
        init_finish(res: Gio.AsyncResult): boolean;

        /**
         * Finishes the async construction for the various g_async_initable_new
         * calls, returning the created object or `null` on error.
         * @param res the {@link Gio.AsyncResult} from the callback
         * @returns a newly created {@link GObject.Object},      or `null` on error. Free with `g_object_unref()`.
         */
        new_finish(res: Gio.AsyncResult): RemoteGreeterProxy;

        /**
         * @param args 
         */
        // Conflicted with Gio.DBusProxy.new_finish
        new_finish(...args: never[]): any;

        /**
         * Starts asynchronous initialization of the object implementing the
         * interface. This must be done before any real use of the object after
         * initial construction. If the object also implements {@link Gio.Initable} you can
         * optionally call `g_initable_init()` instead.
         * 
         * This method is intended for language bindings. If writing in C,
         * `g_async_initable_new_async()` should typically be used instead.
         * 
         * When the initialization is finished, `callback` will be called. You can
         * then call `g_async_initable_init_finish()` to get the result of the
         * initialization.
         * 
         * Implementations may also support cancellation. If `cancellable` is not
         * `null`, then initialization can be cancelled by triggering the cancellable
         * object from another thread. If the operation was cancelled, the error
         * {@link Gio.IOErrorEnum.CANCELLED} will be returned. If `cancellable` is not `null`, and
         * the object doesn't support cancellable initialization, the error
         * {@link Gio.IOErrorEnum.NOT_SUPPORTED} will be returned.
         * 
         * As with {@link Gio.Initable}, if the object is not initialized, or initialization
         * returns with an error, then all operations on the object except
         * `g_object_ref()` and `g_object_unref()` are considered to be invalid, and
         * have undefined behaviour. They will often fail with `g_critical()` or
         * `g_warning()`, but this must not be relied on.
         * 
         * Callers should not assume that a class which implements {@link Gio.AsyncInitable} can
         * be initialized multiple times; for more information, see `g_initable_init()`.
         * If a class explicitly supports being initialized multiple times,
         * implementation requires yielding all subsequent calls to `init_async()` on the
         * results of the first call.
         * 
         * For classes that also support the {@link Gio.Initable} interface, the default
         * implementation of this method will run the `g_initable_init()` function
         * in a thread, so if you want to support asynchronous initialization via
         * threads, just implement the {@link Gio.AsyncInitable} interface without overriding
         * any interface methods.
         * @param io_priority the [I/O priority](iface.AsyncResult.html#io-priority) of the operation
         * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore.
         * @param callback a {@link Gio.AsyncReadyCallback} to call when the request is satisfied
         * @virtual
         */
        vfunc_init_async(io_priority: number, cancellable: (Gio.Cancellable | null), callback: (Gio.AsyncReadyCallback<this> | null)): void;

        /**
         * Finishes asynchronous initialization and returns the result.
         * See `g_async_initable_init_async()`.
         * @param res a {@link Gio.AsyncResult}.
         * @virtual
         */
        vfunc_init_finish(res: Gio.AsyncResult): boolean;

        /**
         * Gets the {@link Gio.DBusObject} that `interface_` belongs to, if any.
         * @returns A {@link Gio.DBusObject} or `null`. The returned reference should be freed with `g_object_unref()`.
         */
        get_object(): (Gio.DBusObject | null);

        /**
         * Gets D-Bus introspection information for the D-Bus interface
         * implemented by `interface_`.
         * @returns A {@link Gio.DBusInterfaceInfo}. Do not free.
         */
        get_info(): Gio.DBusInterfaceInfo;

        /**
         * Sets the {@link Gio.DBusObject} for `interface_` to `object`.
         * 
         * Note that `interface_` will hold a weak reference to `object`.
         * @param object A {@link Gio.DBusObject} or `null`.
         */
        set_object(object: (Gio.DBusObject | null)): void;

        /**
         * Gets the {@link Gio.DBusObject} that `interface_` belongs to, if any.
         * @virtual
         */
        vfunc_dup_object(): (Gio.DBusObject | null);

        /**
         * Gets D-Bus introspection information for the D-Bus interface
         * implemented by `interface_`.
         * @virtual
         */
        vfunc_get_info(): Gio.DBusInterfaceInfo;

        /**
         * Sets the {@link Gio.DBusObject} for `interface_` to `object`.
         * 
         * Note that `interface_` will hold a weak reference to `object`.
         * @param object A {@link Gio.DBusObject} or `null`.
         * @virtual
         */
        vfunc_set_object(object: (Gio.DBusObject | null)): void;

        /**
         * Initializes the object implementing the interface.
         * 
         * This method is intended for language bindings. If writing in C,
         * `g_initable_new()` should typically be used instead.
         * 
         * The object must be initialized before any real use after initial
         * construction, either with this function or `g_async_initable_init_async()`.
         * 
         * Implementations may also support cancellation. If `cancellable` is not `null`,
         * then initialization can be cancelled by triggering the cancellable object
         * from another thread. If the operation was cancelled, the error
         * {@link Gio.IOErrorEnum.CANCELLED} will be returned. If `cancellable` is not `null` and
         * the object doesn't support cancellable initialization the error
         * {@link Gio.IOErrorEnum.NOT_SUPPORTED} will be returned.
         * 
         * If the object is not initialized, or initialization returns with an
         * error, then all operations on the object except `g_object_ref()` and
         * `g_object_unref()` are considered to be invalid, and have undefined
         * behaviour. See the [description][iface@Gio.Initable#description] for more details.
         * 
         * Callers should not assume that a class which implements {@link Gio.Initable} can be
         * initialized multiple times, unless the class explicitly documents itself as
         * supporting this. Generally, a class’ implementation of `init()` can assume
         * (and assert) that it will only be called once. Previously, this documentation
         * recommended all {@link Gio.Initable} implementations should be idempotent; that
         * recommendation was relaxed in GLib 2.54.
         * 
         * If a class explicitly supports being initialized multiple times, it is
         * recommended that the method is idempotent: multiple calls with the same
         * arguments should return the same results. Only the first call initializes
         * the object; further calls return the result of the first call.
         * 
         * One reason why a class might need to support idempotent initialization is if
         * it is designed to be used via the singleton pattern, with a
         * {@link GObject.ObjectClass}.constructor that sometimes returns an existing instance.
         * In this pattern, a caller would expect to be able to call `g_initable_init()`
         * on the result of `g_object_new()`, regardless of whether it is in fact a new
         * instance.
         * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore.
         * @returns `true` if successful. If an error has occurred, this function will     return `false` and set `error` appropriately if present.
         */
        init(cancellable: (Gio.Cancellable | null)): boolean;

        /**
         * Initializes the object implementing the interface.
         * 
         * This method is intended for language bindings. If writing in C,
         * `g_initable_new()` should typically be used instead.
         * 
         * The object must be initialized before any real use after initial
         * construction, either with this function or `g_async_initable_init_async()`.
         * 
         * Implementations may also support cancellation. If `cancellable` is not `null`,
         * then initialization can be cancelled by triggering the cancellable object
         * from another thread. If the operation was cancelled, the error
         * {@link Gio.IOErrorEnum.CANCELLED} will be returned. If `cancellable` is not `null` and
         * the object doesn't support cancellable initialization the error
         * {@link Gio.IOErrorEnum.NOT_SUPPORTED} will be returned.
         * 
         * If the object is not initialized, or initialization returns with an
         * error, then all operations on the object except `g_object_ref()` and
         * `g_object_unref()` are considered to be invalid, and have undefined
         * behaviour. See the [description][iface@Gio.Initable#description] for more details.
         * 
         * Callers should not assume that a class which implements {@link Gio.Initable} can be
         * initialized multiple times, unless the class explicitly documents itself as
         * supporting this. Generally, a class’ implementation of `init()` can assume
         * (and assert) that it will only be called once. Previously, this documentation
         * recommended all {@link Gio.Initable} implementations should be idempotent; that
         * recommendation was relaxed in GLib 2.54.
         * 
         * If a class explicitly supports being initialized multiple times, it is
         * recommended that the method is idempotent: multiple calls with the same
         * arguments should return the same results. Only the first call initializes
         * the object; further calls return the result of the first call.
         * 
         * One reason why a class might need to support idempotent initialization is if
         * it is designed to be used via the singleton pattern, with a
         * {@link GObject.ObjectClass}.constructor that sometimes returns an existing instance.
         * In this pattern, a caller would expect to be able to call `g_initable_init()`
         * on the result of `g_object_new()`, regardless of whether it is in fact a new
         * instance.
         * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore.
         * @virtual
         */
        vfunc_init(cancellable: (Gio.Cancellable | null)): boolean;
    }


    namespace RemoteGreeterSkeleton {
        // Signal signatures
        interface SignalSignatures extends Gio.DBusInterfaceSkeleton.SignalSignatures {
            "notify::g-flags": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Gio.DBusInterfaceSkeleton.ConstructorProps, RemoteGreeter.ConstructorProps, Gio.DBusInterface.ConstructorProps {

        }
    }

    /**
     * @gir-type Class
     */
    class RemoteGreeterSkeleton extends Gio.DBusInterfaceSkeleton implements RemoteGreeter, Gio.DBusInterface {
        static $gtype: GObject.GType<RemoteGreeterSkeleton>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: RemoteGreeterSkeleton.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<RemoteGreeterSkeleton.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals
        /** @signal */
        connect<K extends keyof RemoteGreeterSkeleton.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, RemoteGreeterSkeleton.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof RemoteGreeterSkeleton.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, RemoteGreeterSkeleton.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof RemoteGreeterSkeleton.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<RemoteGreeterSkeleton.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        /**
         * @param cancellable 
         */
        call_disconnect(cancellable: (Gio.Cancellable | null)): globalThis.Promise<boolean>;

        /**
         * @param cancellable 
         * @param callback 
         */
        call_disconnect(cancellable: (Gio.Cancellable | null), callback: (Gio.AsyncReadyCallback<this> | null)): void;

        /**
         * @param cancellable 
         * @param callback 
         */
        call_disconnect(cancellable: (Gio.Cancellable | null), callback?: (Gio.AsyncReadyCallback<this> | null)): (globalThis.Promise<boolean> | void);

        /**
         * @param res 
         */
        call_disconnect_finish(res: Gio.AsyncResult): boolean;

        /**
         * @param cancellable 
         */
        call_disconnect_sync(cancellable: (Gio.Cancellable | null)): boolean;

        /**
         * @param invocation 
         */
        complete_disconnect(invocation: Gio.DBusMethodInvocation): void;

        /**
         * @param invocation 
         * @virtual
         */
        vfunc_handle_disconnect(invocation: Gio.DBusMethodInvocation): boolean;

        /**
         * Gets the {@link Gio.DBusObject} that `interface_` belongs to, if any.
         * @returns A {@link Gio.DBusObject} or `null`. The returned reference should be freed with `g_object_unref()`.
         */
        get_object(): (Gio.DBusObject | null);

        /**
         * Gets D-Bus introspection information for the D-Bus interface
         * implemented by `interface_`.
         * @returns A {@link Gio.DBusInterfaceInfo}. Do not free.
         */
        get_info(): Gio.DBusInterfaceInfo;

        /**
         * Sets the {@link Gio.DBusObject} for `interface_` to `object`.
         * 
         * Note that `interface_` will hold a weak reference to `object`.
         * @param object A {@link Gio.DBusObject} or `null`.
         */
        set_object(object: (Gio.DBusObject | null)): void;

        /**
         * Gets the {@link Gio.DBusObject} that `interface_` belongs to, if any.
         * @virtual
         */
        vfunc_dup_object(): (Gio.DBusObject | null);

        /**
         * Gets D-Bus introspection information for the D-Bus interface
         * implemented by `interface_`.
         * @virtual
         */
        vfunc_get_info(): Gio.DBusInterfaceInfo;

        /**
         * Sets the {@link Gio.DBusObject} for `interface_` to `object`.
         * 
         * Note that `interface_` will hold a weak reference to `object`.
         * @param object A {@link Gio.DBusObject} or `null`.
         * @virtual
         */
        vfunc_set_object(object: (Gio.DBusObject | null)): void;
    }


    namespace UserVerifierChoiceListProxy {
        // Signal signatures
        interface SignalSignatures extends Gio.DBusProxy.SignalSignatures {
            "notify::g-bus-type": (pspec: GObject.ParamSpec) => void;
            "notify::g-connection": (pspec: GObject.ParamSpec) => void;
            "notify::g-default-timeout": (pspec: GObject.ParamSpec) => void;
            "notify::g-flags": (pspec: GObject.ParamSpec) => void;
            "notify::g-interface-info": (pspec: GObject.ParamSpec) => void;
            "notify::g-interface-name": (pspec: GObject.ParamSpec) => void;
            "notify::g-name": (pspec: GObject.ParamSpec) => void;
            "notify::g-name-owner": (pspec: GObject.ParamSpec) => void;
            "notify::g-object-path": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Gio.DBusProxy.ConstructorProps, UserVerifierChoiceList.ConstructorProps, Gio.AsyncInitable.ConstructorProps, Gio.DBusInterface.ConstructorProps, Gio.Initable.ConstructorProps {

        }
    }

    /**
     * @gir-type Class
     */
    class UserVerifierChoiceListProxy extends Gio.DBusProxy implements UserVerifierChoiceList, Gio.AsyncInitable<UserVerifierChoiceListProxy>, Gio.DBusInterface, Gio.Initable {
        static $gtype: GObject.GType<UserVerifierChoiceListProxy>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: UserVerifierChoiceListProxy.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<UserVerifierChoiceListProxy.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals
        /** @signal */
        connect<K extends keyof UserVerifierChoiceListProxy.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, UserVerifierChoiceListProxy.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof UserVerifierChoiceListProxy.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, UserVerifierChoiceListProxy.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof UserVerifierChoiceListProxy.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<UserVerifierChoiceListProxy.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods
        /**
         * @param connection 
         * @param flags 
         * @param name 
         * @param object_path 
         * @param cancellable 
         * @param callback 
         */
        static ["new"](connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string, object_path: string, cancellable: (Gio.Cancellable | null), callback: (Gio.AsyncReadyCallback<UserVerifierChoiceListProxy> | null)): void;

        /**
         * @param args 
         */
    // Conflicted with Gio.DBusProxy.new
        static ["new"](...args: never[]): any;

        /**
         * @param bus_type 
         * @param flags 
         * @param name 
         * @param object_path 
         * @param cancellable 
         * @param callback 
         */
        static new_for_bus(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, object_path: string, cancellable: (Gio.Cancellable | null), callback: (Gio.AsyncReadyCallback<UserVerifierChoiceListProxy> | null)): void;

        /**
         * @param args 
         */
    // Conflicted with Gio.DBusProxy.new_for_bus
        static new_for_bus(...args: never[]): any;

        /**
         * @param arg_service_name 
         * @param arg_choice 
         * @param cancellable 
         */
        call_select_choice(arg_service_name: string, arg_choice: string, cancellable: (Gio.Cancellable | null)): globalThis.Promise<boolean>;

        /**
         * @param arg_service_name 
         * @param arg_choice 
         * @param cancellable 
         * @param callback 
         */
        call_select_choice(arg_service_name: string, arg_choice: string, cancellable: (Gio.Cancellable | null), callback: (Gio.AsyncReadyCallback<this> | null)): void;

        /**
         * @param arg_service_name 
         * @param arg_choice 
         * @param cancellable 
         * @param callback 
         */
        call_select_choice(arg_service_name: string, arg_choice: string, cancellable: (Gio.Cancellable | null), callback?: (Gio.AsyncReadyCallback<this> | null)): (globalThis.Promise<boolean> | void);

        /**
         * @param res 
         */
        call_select_choice_finish(res: Gio.AsyncResult): boolean;

        /**
         * @param arg_service_name 
         * @param arg_choice 
         * @param cancellable 
         */
        call_select_choice_sync(arg_service_name: string, arg_choice: string, cancellable: (Gio.Cancellable | null)): boolean;

        /**
         * @param invocation 
         */
        complete_select_choice(invocation: Gio.DBusMethodInvocation): void;

        /**
         * @param arg_service_name 
         * @param arg_prompt_message 
         * @param arg_list 
         */
        emit_choice_query(arg_service_name: string, arg_prompt_message: string, arg_list: GLib.Variant): void;

        /**
         * @param arg_service_name 
         * @param arg_prompt_message 
         * @param arg_list 
         * @virtual
         */
        vfunc_choice_query(arg_service_name: string, arg_prompt_message: string, arg_list: GLib.Variant): void;

        /**
         * @param invocation 
         * @param arg_service_name 
         * @param arg_choice 
         * @virtual
         */
        vfunc_handle_select_choice(invocation: Gio.DBusMethodInvocation, arg_service_name: string, arg_choice: string): boolean;

        /**
         * Starts asynchronous initialization of the object implementing the
         * interface. This must be done before any real use of the object after
         * initial construction. If the object also implements {@link Gio.Initable} you can
         * optionally call `g_initable_init()` instead.
         * 
         * This method is intended for language bindings. If writing in C,
         * `g_async_initable_new_async()` should typically be used instead.
         * 
         * When the initialization is finished, `callback` will be called. You can
         * then call `g_async_initable_init_finish()` to get the result of the
         * initialization.
         * 
         * Implementations may also support cancellation. If `cancellable` is not
         * `null`, then initialization can be cancelled by triggering the cancellable
         * object from another thread. If the operation was cancelled, the error
         * {@link Gio.IOErrorEnum.CANCELLED} will be returned. If `cancellable` is not `null`, and
         * the object doesn't support cancellable initialization, the error
         * {@link Gio.IOErrorEnum.NOT_SUPPORTED} will be returned.
         * 
         * As with {@link Gio.Initable}, if the object is not initialized, or initialization
         * returns with an error, then all operations on the object except
         * `g_object_ref()` and `g_object_unref()` are considered to be invalid, and
         * have undefined behaviour. They will often fail with `g_critical()` or
         * `g_warning()`, but this must not be relied on.
         * 
         * Callers should not assume that a class which implements {@link Gio.AsyncInitable} can
         * be initialized multiple times; for more information, see `g_initable_init()`.
         * If a class explicitly supports being initialized multiple times,
         * implementation requires yielding all subsequent calls to `init_async()` on the
         * results of the first call.
         * 
         * For classes that also support the {@link Gio.Initable} interface, the default
         * implementation of this method will run the `g_initable_init()` function
         * in a thread, so if you want to support asynchronous initialization via
         * threads, just implement the {@link Gio.AsyncInitable} interface without overriding
         * any interface methods.
         * @param io_priority the [I/O priority](iface.AsyncResult.html#io-priority) of the operation
         * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore.
         */
        init_async(io_priority: number, cancellable: (Gio.Cancellable | null)): globalThis.Promise<boolean>;

        /**
         * Starts asynchronous initialization of the object implementing the
         * interface. This must be done before any real use of the object after
         * initial construction. If the object also implements {@link Gio.Initable} you can
         * optionally call `g_initable_init()` instead.
         * 
         * This method is intended for language bindings. If writing in C,
         * `g_async_initable_new_async()` should typically be used instead.
         * 
         * When the initialization is finished, `callback` will be called. You can
         * then call `g_async_initable_init_finish()` to get the result of the
         * initialization.
         * 
         * Implementations may also support cancellation. If `cancellable` is not
         * `null`, then initialization can be cancelled by triggering the cancellable
         * object from another thread. If the operation was cancelled, the error
         * {@link Gio.IOErrorEnum.CANCELLED} will be returned. If `cancellable` is not `null`, and
         * the object doesn't support cancellable initialization, the error
         * {@link Gio.IOErrorEnum.NOT_SUPPORTED} will be returned.
         * 
         * As with {@link Gio.Initable}, if the object is not initialized, or initialization
         * returns with an error, then all operations on the object except
         * `g_object_ref()` and `g_object_unref()` are considered to be invalid, and
         * have undefined behaviour. They will often fail with `g_critical()` or
         * `g_warning()`, but this must not be relied on.
         * 
         * Callers should not assume that a class which implements {@link Gio.AsyncInitable} can
         * be initialized multiple times; for more information, see `g_initable_init()`.
         * If a class explicitly supports being initialized multiple times,
         * implementation requires yielding all subsequent calls to `init_async()` on the
         * results of the first call.
         * 
         * For classes that also support the {@link Gio.Initable} interface, the default
         * implementation of this method will run the `g_initable_init()` function
         * in a thread, so if you want to support asynchronous initialization via
         * threads, just implement the {@link Gio.AsyncInitable} interface without overriding
         * any interface methods.
         * @param io_priority the [I/O priority](iface.AsyncResult.html#io-priority) of the operation
         * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore.
         * @param callback a {@link Gio.AsyncReadyCallback} to call when the request is satisfied
         */
        init_async(io_priority: number, cancellable: (Gio.Cancellable | null), callback: (Gio.AsyncReadyCallback<this> | null)): void;

        /**
         * Starts asynchronous initialization of the object implementing the
         * interface. This must be done before any real use of the object after
         * initial construction. If the object also implements {@link Gio.Initable} you can
         * optionally call `g_initable_init()` instead.
         * 
         * This method is intended for language bindings. If writing in C,
         * `g_async_initable_new_async()` should typically be used instead.
         * 
         * When the initialization is finished, `callback` will be called. You can
         * then call `g_async_initable_init_finish()` to get the result of the
         * initialization.
         * 
         * Implementations may also support cancellation. If `cancellable` is not
         * `null`, then initialization can be cancelled by triggering the cancellable
         * object from another thread. If the operation was cancelled, the error
         * {@link Gio.IOErrorEnum.CANCELLED} will be returned. If `cancellable` is not `null`, and
         * the object doesn't support cancellable initialization, the error
         * {@link Gio.IOErrorEnum.NOT_SUPPORTED} will be returned.
         * 
         * As with {@link Gio.Initable}, if the object is not initialized, or initialization
         * returns with an error, then all operations on the object except
         * `g_object_ref()` and `g_object_unref()` are considered to be invalid, and
         * have undefined behaviour. They will often fail with `g_critical()` or
         * `g_warning()`, but this must not be relied on.
         * 
         * Callers should not assume that a class which implements {@link Gio.AsyncInitable} can
         * be initialized multiple times; for more information, see `g_initable_init()`.
         * If a class explicitly supports being initialized multiple times,
         * implementation requires yielding all subsequent calls to `init_async()` on the
         * results of the first call.
         * 
         * For classes that also support the {@link Gio.Initable} interface, the default
         * implementation of this method will run the `g_initable_init()` function
         * in a thread, so if you want to support asynchronous initialization via
         * threads, just implement the {@link Gio.AsyncInitable} interface without overriding
         * any interface methods.
         * @param io_priority the [I/O priority](iface.AsyncResult.html#io-priority) of the operation
         * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore.
         * @param callback a {@link Gio.AsyncReadyCallback} to call when the request is satisfied
         */
        init_async(io_priority: number, cancellable: (Gio.Cancellable | null), callback?: (Gio.AsyncReadyCallback<this> | null)): (globalThis.Promise<boolean> | void);

        /**
         * Finishes asynchronous initialization and returns the result.
         * See `g_async_initable_init_async()`.
         * @param res a {@link Gio.AsyncResult}.
         * @returns `true` if successful. If an error has occurred, this function will return `false` and set `error` appropriately if present.
         */
        init_finish(res: Gio.AsyncResult): boolean;

        /**
         * Finishes the async construction for the various g_async_initable_new
         * calls, returning the created object or `null` on error.
         * @param res the {@link Gio.AsyncResult} from the callback
         * @returns a newly created {@link GObject.Object},      or `null` on error. Free with `g_object_unref()`.
         */
        new_finish(res: Gio.AsyncResult): UserVerifierChoiceListProxy;

        /**
         * @param args 
         */
        // Conflicted with Gio.DBusProxy.new_finish
        new_finish(...args: never[]): any;

        /**
         * Starts asynchronous initialization of the object implementing the
         * interface. This must be done before any real use of the object after
         * initial construction. If the object also implements {@link Gio.Initable} you can
         * optionally call `g_initable_init()` instead.
         * 
         * This method is intended for language bindings. If writing in C,
         * `g_async_initable_new_async()` should typically be used instead.
         * 
         * When the initialization is finished, `callback` will be called. You can
         * then call `g_async_initable_init_finish()` to get the result of the
         * initialization.
         * 
         * Implementations may also support cancellation. If `cancellable` is not
         * `null`, then initialization can be cancelled by triggering the cancellable
         * object from another thread. If the operation was cancelled, the error
         * {@link Gio.IOErrorEnum.CANCELLED} will be returned. If `cancellable` is not `null`, and
         * the object doesn't support cancellable initialization, the error
         * {@link Gio.IOErrorEnum.NOT_SUPPORTED} will be returned.
         * 
         * As with {@link Gio.Initable}, if the object is not initialized, or initialization
         * returns with an error, then all operations on the object except
         * `g_object_ref()` and `g_object_unref()` are considered to be invalid, and
         * have undefined behaviour. They will often fail with `g_critical()` or
         * `g_warning()`, but this must not be relied on.
         * 
         * Callers should not assume that a class which implements {@link Gio.AsyncInitable} can
         * be initialized multiple times; for more information, see `g_initable_init()`.
         * If a class explicitly supports being initialized multiple times,
         * implementation requires yielding all subsequent calls to `init_async()` on the
         * results of the first call.
         * 
         * For classes that also support the {@link Gio.Initable} interface, the default
         * implementation of this method will run the `g_initable_init()` function
         * in a thread, so if you want to support asynchronous initialization via
         * threads, just implement the {@link Gio.AsyncInitable} interface without overriding
         * any interface methods.
         * @param io_priority the [I/O priority](iface.AsyncResult.html#io-priority) of the operation
         * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore.
         * @param callback a {@link Gio.AsyncReadyCallback} to call when the request is satisfied
         * @virtual
         */
        vfunc_init_async(io_priority: number, cancellable: (Gio.Cancellable | null), callback: (Gio.AsyncReadyCallback<this> | null)): void;

        /**
         * Finishes asynchronous initialization and returns the result.
         * See `g_async_initable_init_async()`.
         * @param res a {@link Gio.AsyncResult}.
         * @virtual
         */
        vfunc_init_finish(res: Gio.AsyncResult): boolean;

        /**
         * Gets the {@link Gio.DBusObject} that `interface_` belongs to, if any.
         * @returns A {@link Gio.DBusObject} or `null`. The returned reference should be freed with `g_object_unref()`.
         */
        get_object(): (Gio.DBusObject | null);

        /**
         * Gets D-Bus introspection information for the D-Bus interface
         * implemented by `interface_`.
         * @returns A {@link Gio.DBusInterfaceInfo}. Do not free.
         */
        get_info(): Gio.DBusInterfaceInfo;

        /**
         * Sets the {@link Gio.DBusObject} for `interface_` to `object`.
         * 
         * Note that `interface_` will hold a weak reference to `object`.
         * @param object A {@link Gio.DBusObject} or `null`.
         */
        set_object(object: (Gio.DBusObject | null)): void;

        /**
         * Gets the {@link Gio.DBusObject} that `interface_` belongs to, if any.
         * @virtual
         */
        vfunc_dup_object(): (Gio.DBusObject | null);

        /**
         * Gets D-Bus introspection information for the D-Bus interface
         * implemented by `interface_`.
         * @virtual
         */
        vfunc_get_info(): Gio.DBusInterfaceInfo;

        /**
         * Sets the {@link Gio.DBusObject} for `interface_` to `object`.
         * 
         * Note that `interface_` will hold a weak reference to `object`.
         * @param object A {@link Gio.DBusObject} or `null`.
         * @virtual
         */
        vfunc_set_object(object: (Gio.DBusObject | null)): void;

        /**
         * Initializes the object implementing the interface.
         * 
         * This method is intended for language bindings. If writing in C,
         * `g_initable_new()` should typically be used instead.
         * 
         * The object must be initialized before any real use after initial
         * construction, either with this function or `g_async_initable_init_async()`.
         * 
         * Implementations may also support cancellation. If `cancellable` is not `null`,
         * then initialization can be cancelled by triggering the cancellable object
         * from another thread. If the operation was cancelled, the error
         * {@link Gio.IOErrorEnum.CANCELLED} will be returned. If `cancellable` is not `null` and
         * the object doesn't support cancellable initialization the error
         * {@link Gio.IOErrorEnum.NOT_SUPPORTED} will be returned.
         * 
         * If the object is not initialized, or initialization returns with an
         * error, then all operations on the object except `g_object_ref()` and
         * `g_object_unref()` are considered to be invalid, and have undefined
         * behaviour. See the [description][iface@Gio.Initable#description] for more details.
         * 
         * Callers should not assume that a class which implements {@link Gio.Initable} can be
         * initialized multiple times, unless the class explicitly documents itself as
         * supporting this. Generally, a class’ implementation of `init()` can assume
         * (and assert) that it will only be called once. Previously, this documentation
         * recommended all {@link Gio.Initable} implementations should be idempotent; that
         * recommendation was relaxed in GLib 2.54.
         * 
         * If a class explicitly supports being initialized multiple times, it is
         * recommended that the method is idempotent: multiple calls with the same
         * arguments should return the same results. Only the first call initializes
         * the object; further calls return the result of the first call.
         * 
         * One reason why a class might need to support idempotent initialization is if
         * it is designed to be used via the singleton pattern, with a
         * {@link GObject.ObjectClass}.constructor that sometimes returns an existing instance.
         * In this pattern, a caller would expect to be able to call `g_initable_init()`
         * on the result of `g_object_new()`, regardless of whether it is in fact a new
         * instance.
         * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore.
         * @returns `true` if successful. If an error has occurred, this function will     return `false` and set `error` appropriately if present.
         */
        init(cancellable: (Gio.Cancellable | null)): boolean;

        /**
         * Initializes the object implementing the interface.
         * 
         * This method is intended for language bindings. If writing in C,
         * `g_initable_new()` should typically be used instead.
         * 
         * The object must be initialized before any real use after initial
         * construction, either with this function or `g_async_initable_init_async()`.
         * 
         * Implementations may also support cancellation. If `cancellable` is not `null`,
         * then initialization can be cancelled by triggering the cancellable object
         * from another thread. If the operation was cancelled, the error
         * {@link Gio.IOErrorEnum.CANCELLED} will be returned. If `cancellable` is not `null` and
         * the object doesn't support cancellable initialization the error
         * {@link Gio.IOErrorEnum.NOT_SUPPORTED} will be returned.
         * 
         * If the object is not initialized, or initialization returns with an
         * error, then all operations on the object except `g_object_ref()` and
         * `g_object_unref()` are considered to be invalid, and have undefined
         * behaviour. See the [description][iface@Gio.Initable#description] for more details.
         * 
         * Callers should not assume that a class which implements {@link Gio.Initable} can be
         * initialized multiple times, unless the class explicitly documents itself as
         * supporting this. Generally, a class’ implementation of `init()` can assume
         * (and assert) that it will only be called once. Previously, this documentation
         * recommended all {@link Gio.Initable} implementations should be idempotent; that
         * recommendation was relaxed in GLib 2.54.
         * 
         * If a class explicitly supports being initialized multiple times, it is
         * recommended that the method is idempotent: multiple calls with the same
         * arguments should return the same results. Only the first call initializes
         * the object; further calls return the result of the first call.
         * 
         * One reason why a class might need to support idempotent initialization is if
         * it is designed to be used via the singleton pattern, with a
         * {@link GObject.ObjectClass}.constructor that sometimes returns an existing instance.
         * In this pattern, a caller would expect to be able to call `g_initable_init()`
         * on the result of `g_object_new()`, regardless of whether it is in fact a new
         * instance.
         * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore.
         * @virtual
         */
        vfunc_init(cancellable: (Gio.Cancellable | null)): boolean;
    }


    namespace UserVerifierChoiceListSkeleton {
        // Signal signatures
        interface SignalSignatures extends Gio.DBusInterfaceSkeleton.SignalSignatures {
            "notify::g-flags": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Gio.DBusInterfaceSkeleton.ConstructorProps, UserVerifierChoiceList.ConstructorProps, Gio.DBusInterface.ConstructorProps {

        }
    }

    /**
     * @gir-type Class
     */
    class UserVerifierChoiceListSkeleton extends Gio.DBusInterfaceSkeleton implements UserVerifierChoiceList, Gio.DBusInterface {
        static $gtype: GObject.GType<UserVerifierChoiceListSkeleton>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: UserVerifierChoiceListSkeleton.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<UserVerifierChoiceListSkeleton.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals
        /** @signal */
        connect<K extends keyof UserVerifierChoiceListSkeleton.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, UserVerifierChoiceListSkeleton.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof UserVerifierChoiceListSkeleton.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, UserVerifierChoiceListSkeleton.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof UserVerifierChoiceListSkeleton.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<UserVerifierChoiceListSkeleton.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        /**
         * @param arg_service_name 
         * @param arg_choice 
         * @param cancellable 
         */
        call_select_choice(arg_service_name: string, arg_choice: string, cancellable: (Gio.Cancellable | null)): globalThis.Promise<boolean>;

        /**
         * @param arg_service_name 
         * @param arg_choice 
         * @param cancellable 
         * @param callback 
         */
        call_select_choice(arg_service_name: string, arg_choice: string, cancellable: (Gio.Cancellable | null), callback: (Gio.AsyncReadyCallback<this> | null)): void;

        /**
         * @param arg_service_name 
         * @param arg_choice 
         * @param cancellable 
         * @param callback 
         */
        call_select_choice(arg_service_name: string, arg_choice: string, cancellable: (Gio.Cancellable | null), callback?: (Gio.AsyncReadyCallback<this> | null)): (globalThis.Promise<boolean> | void);

        /**
         * @param res 
         */
        call_select_choice_finish(res: Gio.AsyncResult): boolean;

        /**
         * @param arg_service_name 
         * @param arg_choice 
         * @param cancellable 
         */
        call_select_choice_sync(arg_service_name: string, arg_choice: string, cancellable: (Gio.Cancellable | null)): boolean;

        /**
         * @param invocation 
         */
        complete_select_choice(invocation: Gio.DBusMethodInvocation): void;

        /**
         * @param arg_service_name 
         * @param arg_prompt_message 
         * @param arg_list 
         */
        emit_choice_query(arg_service_name: string, arg_prompt_message: string, arg_list: GLib.Variant): void;

        /**
         * @param arg_service_name 
         * @param arg_prompt_message 
         * @param arg_list 
         * @virtual
         */
        vfunc_choice_query(arg_service_name: string, arg_prompt_message: string, arg_list: GLib.Variant): void;

        /**
         * @param invocation 
         * @param arg_service_name 
         * @param arg_choice 
         * @virtual
         */
        vfunc_handle_select_choice(invocation: Gio.DBusMethodInvocation, arg_service_name: string, arg_choice: string): boolean;

        /**
         * Gets the {@link Gio.DBusObject} that `interface_` belongs to, if any.
         * @returns A {@link Gio.DBusObject} or `null`. The returned reference should be freed with `g_object_unref()`.
         */
        get_object(): (Gio.DBusObject | null);

        /**
         * Gets D-Bus introspection information for the D-Bus interface
         * implemented by `interface_`.
         * @returns A {@link Gio.DBusInterfaceInfo}. Do not free.
         */
        get_info(): Gio.DBusInterfaceInfo;

        /**
         * Sets the {@link Gio.DBusObject} for `interface_` to `object`.
         * 
         * Note that `interface_` will hold a weak reference to `object`.
         * @param object A {@link Gio.DBusObject} or `null`.
         */
        set_object(object: (Gio.DBusObject | null)): void;

        /**
         * Gets the {@link Gio.DBusObject} that `interface_` belongs to, if any.
         * @virtual
         */
        vfunc_dup_object(): (Gio.DBusObject | null);

        /**
         * Gets D-Bus introspection information for the D-Bus interface
         * implemented by `interface_`.
         * @virtual
         */
        vfunc_get_info(): Gio.DBusInterfaceInfo;

        /**
         * Sets the {@link Gio.DBusObject} for `interface_` to `object`.
         * 
         * Note that `interface_` will hold a weak reference to `object`.
         * @param object A {@link Gio.DBusObject} or `null`.
         * @virtual
         */
        vfunc_set_object(object: (Gio.DBusObject | null)): void;
    }


    namespace UserVerifierProxy {
        // Signal signatures
        interface SignalSignatures extends Gio.DBusProxy.SignalSignatures {
            "notify::g-bus-type": (pspec: GObject.ParamSpec) => void;
            "notify::g-connection": (pspec: GObject.ParamSpec) => void;
            "notify::g-default-timeout": (pspec: GObject.ParamSpec) => void;
            "notify::g-flags": (pspec: GObject.ParamSpec) => void;
            "notify::g-interface-info": (pspec: GObject.ParamSpec) => void;
            "notify::g-interface-name": (pspec: GObject.ParamSpec) => void;
            "notify::g-name": (pspec: GObject.ParamSpec) => void;
            "notify::g-name-owner": (pspec: GObject.ParamSpec) => void;
            "notify::g-object-path": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Gio.DBusProxy.ConstructorProps, UserVerifier.ConstructorProps, Gio.AsyncInitable.ConstructorProps, Gio.DBusInterface.ConstructorProps, Gio.Initable.ConstructorProps {

        }
    }

    /**
     * @gir-type Class
     */
    class UserVerifierProxy extends Gio.DBusProxy implements UserVerifier, Gio.AsyncInitable<UserVerifierProxy>, Gio.DBusInterface, Gio.Initable {
        static $gtype: GObject.GType<UserVerifierProxy>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: UserVerifierProxy.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<UserVerifierProxy.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals
        /** @signal */
        connect<K extends keyof UserVerifierProxy.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, UserVerifierProxy.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof UserVerifierProxy.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, UserVerifierProxy.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof UserVerifierProxy.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<UserVerifierProxy.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods
        /**
         * @param connection 
         * @param flags 
         * @param name 
         * @param object_path 
         * @param cancellable 
         * @param callback 
         */
        static ["new"](connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string, object_path: string, cancellable: (Gio.Cancellable | null), callback: (Gio.AsyncReadyCallback<UserVerifierProxy> | null)): void;

        /**
         * @param args 
         */
    // Conflicted with Gio.DBusProxy.new
        static ["new"](...args: never[]): any;

        /**
         * @param bus_type 
         * @param flags 
         * @param name 
         * @param object_path 
         * @param cancellable 
         * @param callback 
         */
        static new_for_bus(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, object_path: string, cancellable: (Gio.Cancellable | null), callback: (Gio.AsyncReadyCallback<UserVerifierProxy> | null)): void;

        /**
         * @param args 
         */
    // Conflicted with Gio.DBusProxy.new_for_bus
        static new_for_bus(...args: never[]): any;

        /**
         * @param arg_service_name 
         * @param arg_answer 
         * @param cancellable 
         */
        call_answer_query(arg_service_name: string, arg_answer: string, cancellable: (Gio.Cancellable | null)): globalThis.Promise<boolean>;

        /**
         * @param arg_service_name 
         * @param arg_answer 
         * @param cancellable 
         * @param callback 
         */
        call_answer_query(arg_service_name: string, arg_answer: string, cancellable: (Gio.Cancellable | null), callback: (Gio.AsyncReadyCallback<this> | null)): void;

        /**
         * @param arg_service_name 
         * @param arg_answer 
         * @param cancellable 
         * @param callback 
         */
        call_answer_query(arg_service_name: string, arg_answer: string, cancellable: (Gio.Cancellable | null), callback?: (Gio.AsyncReadyCallback<this> | null)): (globalThis.Promise<boolean> | void);

        /**
         * @param res 
         */
        call_answer_query_finish(res: Gio.AsyncResult): boolean;

        /**
         * @param arg_service_name 
         * @param arg_answer 
         * @param cancellable 
         */
        call_answer_query_sync(arg_service_name: string, arg_answer: string, cancellable: (Gio.Cancellable | null)): boolean;

        /**
         * @param arg_service_name 
         * @param cancellable 
         */
        call_begin_verification(arg_service_name: string, cancellable: (Gio.Cancellable | null)): globalThis.Promise<boolean>;

        /**
         * @param arg_service_name 
         * @param cancellable 
         * @param callback 
         */
        call_begin_verification(arg_service_name: string, cancellable: (Gio.Cancellable | null), callback: (Gio.AsyncReadyCallback<this> | null)): void;

        /**
         * @param arg_service_name 
         * @param cancellable 
         * @param callback 
         */
        call_begin_verification(arg_service_name: string, cancellable: (Gio.Cancellable | null), callback?: (Gio.AsyncReadyCallback<this> | null)): (globalThis.Promise<boolean> | void);

        /**
         * @param res 
         */
        call_begin_verification_finish(res: Gio.AsyncResult): boolean;

        /**
         * @param arg_service_name 
         * @param arg_username 
         * @param cancellable 
         */
        call_begin_verification_for_user(arg_service_name: string, arg_username: string, cancellable: (Gio.Cancellable | null)): globalThis.Promise<boolean>;

        /**
         * @param arg_service_name 
         * @param arg_username 
         * @param cancellable 
         * @param callback 
         */
        call_begin_verification_for_user(arg_service_name: string, arg_username: string, cancellable: (Gio.Cancellable | null), callback: (Gio.AsyncReadyCallback<this> | null)): void;

        /**
         * @param arg_service_name 
         * @param arg_username 
         * @param cancellable 
         * @param callback 
         */
        call_begin_verification_for_user(arg_service_name: string, arg_username: string, cancellable: (Gio.Cancellable | null), callback?: (Gio.AsyncReadyCallback<this> | null)): (globalThis.Promise<boolean> | void);

        /**
         * @param res 
         */
        call_begin_verification_for_user_finish(res: Gio.AsyncResult): boolean;

        /**
         * @param arg_service_name 
         * @param arg_username 
         * @param cancellable 
         */
        call_begin_verification_for_user_sync(arg_service_name: string, arg_username: string, cancellable: (Gio.Cancellable | null)): boolean;

        /**
         * @param arg_service_name 
         * @param cancellable 
         */
        call_begin_verification_sync(arg_service_name: string, cancellable: (Gio.Cancellable | null)): boolean;

        /**
         * @param cancellable 
         */
        call_cancel(cancellable: (Gio.Cancellable | null)): globalThis.Promise<boolean>;

        /**
         * @param cancellable 
         * @param callback 
         */
        call_cancel(cancellable: (Gio.Cancellable | null), callback: (Gio.AsyncReadyCallback<this> | null)): void;

        /**
         * @param cancellable 
         * @param callback 
         */
        call_cancel(cancellable: (Gio.Cancellable | null), callback?: (Gio.AsyncReadyCallback<this> | null)): (globalThis.Promise<boolean> | void);

        /**
         * @param res 
         */
        call_cancel_finish(res: Gio.AsyncResult): boolean;

        /**
         * @param cancellable 
         */
        call_cancel_sync(cancellable: (Gio.Cancellable | null)): boolean;

        /**
         * @param arg_extensions 
         * @param cancellable 
         */
        call_enable_extensions(arg_extensions: string, cancellable: (Gio.Cancellable | null)): globalThis.Promise<boolean>;

        /**
         * @param arg_extensions 
         * @param cancellable 
         * @param callback 
         */
        call_enable_extensions(arg_extensions: string, cancellable: (Gio.Cancellable | null), callback: (Gio.AsyncReadyCallback<this> | null)): void;

        /**
         * @param arg_extensions 
         * @param cancellable 
         * @param callback 
         */
        call_enable_extensions(arg_extensions: string, cancellable: (Gio.Cancellable | null), callback?: (Gio.AsyncReadyCallback<this> | null)): (globalThis.Promise<boolean> | void);

        /**
         * @param res 
         */
        call_enable_extensions_finish(res: Gio.AsyncResult): boolean;

        /**
         * @param arg_extensions 
         * @param cancellable 
         */
        call_enable_extensions_sync(arg_extensions: string, cancellable: (Gio.Cancellable | null)): boolean;

        /**
         * @param invocation 
         */
        complete_answer_query(invocation: Gio.DBusMethodInvocation): void;

        /**
         * @param invocation 
         */
        complete_begin_verification(invocation: Gio.DBusMethodInvocation): void;

        /**
         * @param invocation 
         */
        complete_begin_verification_for_user(invocation: Gio.DBusMethodInvocation): void;

        /**
         * @param invocation 
         */
        complete_cancel(invocation: Gio.DBusMethodInvocation): void;

        /**
         * @param invocation 
         */
        complete_enable_extensions(invocation: Gio.DBusMethodInvocation): void;

        /**
         * @param arg_service_name 
         */
        emit_conversation_started(arg_service_name: string): void;

        /**
         * @param arg_service_name 
         */
        emit_conversation_stopped(arg_service_name: string): void;

        /**
         * @param arg_service_name 
         * @param arg_info 
         */
        emit_info(arg_service_name: string, arg_info: string): void;

        /**
         * @param arg_service_name 
         * @param arg_query 
         */
        emit_info_query(arg_service_name: string, arg_query: string): void;

        /**
         * @param arg_service_name 
         * @param arg_problem 
         */
        emit_problem(arg_service_name: string, arg_problem: string): void;

        /**
         * @param arg_pid_of_caller 
         */
        emit_reauthentication_started(arg_pid_of_caller: number): void;

        emit_reset(): void;

        /**
         * @param arg_service_name 
         * @param arg_query 
         */
        emit_secret_info_query(arg_service_name: string, arg_query: string): void;

        /**
         * @param arg_service_name 
         * @param arg_message 
         */
        emit_service_unavailable(arg_service_name: string, arg_message: string): void;

        /**
         * @param arg_service_name 
         */
        emit_verification_complete(arg_service_name: string): void;

        /**
         * @param arg_service_name 
         */
        emit_verification_failed(arg_service_name: string): void;

        /**
         * @param arg_service_name 
         * @virtual
         */
        vfunc_conversation_started(arg_service_name: string): void;

        /**
         * @param arg_service_name 
         * @virtual
         */
        vfunc_conversation_stopped(arg_service_name: string): void;

        /**
         * @param invocation 
         * @param arg_service_name 
         * @param arg_answer 
         * @virtual
         */
        vfunc_handle_answer_query(invocation: Gio.DBusMethodInvocation, arg_service_name: string, arg_answer: string): boolean;

        /**
         * @param invocation 
         * @param arg_service_name 
         * @virtual
         */
        vfunc_handle_begin_verification(invocation: Gio.DBusMethodInvocation, arg_service_name: string): boolean;

        /**
         * @param invocation 
         * @param arg_service_name 
         * @param arg_username 
         * @virtual
         */
        vfunc_handle_begin_verification_for_user(invocation: Gio.DBusMethodInvocation, arg_service_name: string, arg_username: string): boolean;

        /**
         * @param invocation 
         * @virtual
         */
        vfunc_handle_cancel(invocation: Gio.DBusMethodInvocation): boolean;

        /**
         * @param invocation 
         * @param arg_extensions 
         * @virtual
         */
        vfunc_handle_enable_extensions(invocation: Gio.DBusMethodInvocation, arg_extensions: string): boolean;

        /**
         * @param arg_service_name 
         * @param arg_info 
         * @virtual
         */
        vfunc_info(arg_service_name: string, arg_info: string): void;

        /**
         * @param arg_service_name 
         * @param arg_query 
         * @virtual
         */
        vfunc_info_query(arg_service_name: string, arg_query: string): void;

        /**
         * @param arg_service_name 
         * @param arg_problem 
         * @virtual
         */
        vfunc_problem(arg_service_name: string, arg_problem: string): void;

        /**
         * @param arg_pid_of_caller 
         * @virtual
         */
        vfunc_reauthentication_started(arg_pid_of_caller: number): void;

        /**
         * @virtual
         */
        vfunc_reset(): void;

        /**
         * @param arg_service_name 
         * @param arg_query 
         * @virtual
         */
        vfunc_secret_info_query(arg_service_name: string, arg_query: string): void;

        /**
         * @param arg_service_name 
         * @param arg_message 
         * @virtual
         */
        vfunc_service_unavailable(arg_service_name: string, arg_message: string): void;

        /**
         * @param arg_service_name 
         * @virtual
         */
        vfunc_verification_complete(arg_service_name: string): void;

        /**
         * @param arg_service_name 
         * @virtual
         */
        vfunc_verification_failed(arg_service_name: string): void;

        /**
         * Starts asynchronous initialization of the object implementing the
         * interface. This must be done before any real use of the object after
         * initial construction. If the object also implements {@link Gio.Initable} you can
         * optionally call `g_initable_init()` instead.
         * 
         * This method is intended for language bindings. If writing in C,
         * `g_async_initable_new_async()` should typically be used instead.
         * 
         * When the initialization is finished, `callback` will be called. You can
         * then call `g_async_initable_init_finish()` to get the result of the
         * initialization.
         * 
         * Implementations may also support cancellation. If `cancellable` is not
         * `null`, then initialization can be cancelled by triggering the cancellable
         * object from another thread. If the operation was cancelled, the error
         * {@link Gio.IOErrorEnum.CANCELLED} will be returned. If `cancellable` is not `null`, and
         * the object doesn't support cancellable initialization, the error
         * {@link Gio.IOErrorEnum.NOT_SUPPORTED} will be returned.
         * 
         * As with {@link Gio.Initable}, if the object is not initialized, or initialization
         * returns with an error, then all operations on the object except
         * `g_object_ref()` and `g_object_unref()` are considered to be invalid, and
         * have undefined behaviour. They will often fail with `g_critical()` or
         * `g_warning()`, but this must not be relied on.
         * 
         * Callers should not assume that a class which implements {@link Gio.AsyncInitable} can
         * be initialized multiple times; for more information, see `g_initable_init()`.
         * If a class explicitly supports being initialized multiple times,
         * implementation requires yielding all subsequent calls to `init_async()` on the
         * results of the first call.
         * 
         * For classes that also support the {@link Gio.Initable} interface, the default
         * implementation of this method will run the `g_initable_init()` function
         * in a thread, so if you want to support asynchronous initialization via
         * threads, just implement the {@link Gio.AsyncInitable} interface without overriding
         * any interface methods.
         * @param io_priority the [I/O priority](iface.AsyncResult.html#io-priority) of the operation
         * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore.
         */
        init_async(io_priority: number, cancellable: (Gio.Cancellable | null)): globalThis.Promise<boolean>;

        /**
         * Starts asynchronous initialization of the object implementing the
         * interface. This must be done before any real use of the object after
         * initial construction. If the object also implements {@link Gio.Initable} you can
         * optionally call `g_initable_init()` instead.
         * 
         * This method is intended for language bindings. If writing in C,
         * `g_async_initable_new_async()` should typically be used instead.
         * 
         * When the initialization is finished, `callback` will be called. You can
         * then call `g_async_initable_init_finish()` to get the result of the
         * initialization.
         * 
         * Implementations may also support cancellation. If `cancellable` is not
         * `null`, then initialization can be cancelled by triggering the cancellable
         * object from another thread. If the operation was cancelled, the error
         * {@link Gio.IOErrorEnum.CANCELLED} will be returned. If `cancellable` is not `null`, and
         * the object doesn't support cancellable initialization, the error
         * {@link Gio.IOErrorEnum.NOT_SUPPORTED} will be returned.
         * 
         * As with {@link Gio.Initable}, if the object is not initialized, or initialization
         * returns with an error, then all operations on the object except
         * `g_object_ref()` and `g_object_unref()` are considered to be invalid, and
         * have undefined behaviour. They will often fail with `g_critical()` or
         * `g_warning()`, but this must not be relied on.
         * 
         * Callers should not assume that a class which implements {@link Gio.AsyncInitable} can
         * be initialized multiple times; for more information, see `g_initable_init()`.
         * If a class explicitly supports being initialized multiple times,
         * implementation requires yielding all subsequent calls to `init_async()` on the
         * results of the first call.
         * 
         * For classes that also support the {@link Gio.Initable} interface, the default
         * implementation of this method will run the `g_initable_init()` function
         * in a thread, so if you want to support asynchronous initialization via
         * threads, just implement the {@link Gio.AsyncInitable} interface without overriding
         * any interface methods.
         * @param io_priority the [I/O priority](iface.AsyncResult.html#io-priority) of the operation
         * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore.
         * @param callback a {@link Gio.AsyncReadyCallback} to call when the request is satisfied
         */
        init_async(io_priority: number, cancellable: (Gio.Cancellable | null), callback: (Gio.AsyncReadyCallback<this> | null)): void;

        /**
         * Starts asynchronous initialization of the object implementing the
         * interface. This must be done before any real use of the object after
         * initial construction. If the object also implements {@link Gio.Initable} you can
         * optionally call `g_initable_init()` instead.
         * 
         * This method is intended for language bindings. If writing in C,
         * `g_async_initable_new_async()` should typically be used instead.
         * 
         * When the initialization is finished, `callback` will be called. You can
         * then call `g_async_initable_init_finish()` to get the result of the
         * initialization.
         * 
         * Implementations may also support cancellation. If `cancellable` is not
         * `null`, then initialization can be cancelled by triggering the cancellable
         * object from another thread. If the operation was cancelled, the error
         * {@link Gio.IOErrorEnum.CANCELLED} will be returned. If `cancellable` is not `null`, and
         * the object doesn't support cancellable initialization, the error
         * {@link Gio.IOErrorEnum.NOT_SUPPORTED} will be returned.
         * 
         * As with {@link Gio.Initable}, if the object is not initialized, or initialization
         * returns with an error, then all operations on the object except
         * `g_object_ref()` and `g_object_unref()` are considered to be invalid, and
         * have undefined behaviour. They will often fail with `g_critical()` or
         * `g_warning()`, but this must not be relied on.
         * 
         * Callers should not assume that a class which implements {@link Gio.AsyncInitable} can
         * be initialized multiple times; for more information, see `g_initable_init()`.
         * If a class explicitly supports being initialized multiple times,
         * implementation requires yielding all subsequent calls to `init_async()` on the
         * results of the first call.
         * 
         * For classes that also support the {@link Gio.Initable} interface, the default
         * implementation of this method will run the `g_initable_init()` function
         * in a thread, so if you want to support asynchronous initialization via
         * threads, just implement the {@link Gio.AsyncInitable} interface without overriding
         * any interface methods.
         * @param io_priority the [I/O priority](iface.AsyncResult.html#io-priority) of the operation
         * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore.
         * @param callback a {@link Gio.AsyncReadyCallback} to call when the request is satisfied
         */
        init_async(io_priority: number, cancellable: (Gio.Cancellable | null), callback?: (Gio.AsyncReadyCallback<this> | null)): (globalThis.Promise<boolean> | void);

        /**
         * Finishes asynchronous initialization and returns the result.
         * See `g_async_initable_init_async()`.
         * @param res a {@link Gio.AsyncResult}.
         * @returns `true` if successful. If an error has occurred, this function will return `false` and set `error` appropriately if present.
         */
        init_finish(res: Gio.AsyncResult): boolean;

        /**
         * Finishes the async construction for the various g_async_initable_new
         * calls, returning the created object or `null` on error.
         * @param res the {@link Gio.AsyncResult} from the callback
         * @returns a newly created {@link GObject.Object},      or `null` on error. Free with `g_object_unref()`.
         */
        new_finish(res: Gio.AsyncResult): UserVerifierProxy;

        /**
         * @param args 
         */
        // Conflicted with Gio.DBusProxy.new_finish
        new_finish(...args: never[]): any;

        /**
         * Starts asynchronous initialization of the object implementing the
         * interface. This must be done before any real use of the object after
         * initial construction. If the object also implements {@link Gio.Initable} you can
         * optionally call `g_initable_init()` instead.
         * 
         * This method is intended for language bindings. If writing in C,
         * `g_async_initable_new_async()` should typically be used instead.
         * 
         * When the initialization is finished, `callback` will be called. You can
         * then call `g_async_initable_init_finish()` to get the result of the
         * initialization.
         * 
         * Implementations may also support cancellation. If `cancellable` is not
         * `null`, then initialization can be cancelled by triggering the cancellable
         * object from another thread. If the operation was cancelled, the error
         * {@link Gio.IOErrorEnum.CANCELLED} will be returned. If `cancellable` is not `null`, and
         * the object doesn't support cancellable initialization, the error
         * {@link Gio.IOErrorEnum.NOT_SUPPORTED} will be returned.
         * 
         * As with {@link Gio.Initable}, if the object is not initialized, or initialization
         * returns with an error, then all operations on the object except
         * `g_object_ref()` and `g_object_unref()` are considered to be invalid, and
         * have undefined behaviour. They will often fail with `g_critical()` or
         * `g_warning()`, but this must not be relied on.
         * 
         * Callers should not assume that a class which implements {@link Gio.AsyncInitable} can
         * be initialized multiple times; for more information, see `g_initable_init()`.
         * If a class explicitly supports being initialized multiple times,
         * implementation requires yielding all subsequent calls to `init_async()` on the
         * results of the first call.
         * 
         * For classes that also support the {@link Gio.Initable} interface, the default
         * implementation of this method will run the `g_initable_init()` function
         * in a thread, so if you want to support asynchronous initialization via
         * threads, just implement the {@link Gio.AsyncInitable} interface without overriding
         * any interface methods.
         * @param io_priority the [I/O priority](iface.AsyncResult.html#io-priority) of the operation
         * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore.
         * @param callback a {@link Gio.AsyncReadyCallback} to call when the request is satisfied
         * @virtual
         */
        vfunc_init_async(io_priority: number, cancellable: (Gio.Cancellable | null), callback: (Gio.AsyncReadyCallback<this> | null)): void;

        /**
         * Finishes asynchronous initialization and returns the result.
         * See `g_async_initable_init_async()`.
         * @param res a {@link Gio.AsyncResult}.
         * @virtual
         */
        vfunc_init_finish(res: Gio.AsyncResult): boolean;

        /**
         * Gets the {@link Gio.DBusObject} that `interface_` belongs to, if any.
         * @returns A {@link Gio.DBusObject} or `null`. The returned reference should be freed with `g_object_unref()`.
         */
        get_object(): (Gio.DBusObject | null);

        /**
         * Gets D-Bus introspection information for the D-Bus interface
         * implemented by `interface_`.
         * @returns A {@link Gio.DBusInterfaceInfo}. Do not free.
         */
        get_info(): Gio.DBusInterfaceInfo;

        /**
         * Sets the {@link Gio.DBusObject} for `interface_` to `object`.
         * 
         * Note that `interface_` will hold a weak reference to `object`.
         * @param object A {@link Gio.DBusObject} or `null`.
         */
        set_object(object: (Gio.DBusObject | null)): void;

        /**
         * Gets the {@link Gio.DBusObject} that `interface_` belongs to, if any.
         * @virtual
         */
        vfunc_dup_object(): (Gio.DBusObject | null);

        /**
         * Gets D-Bus introspection information for the D-Bus interface
         * implemented by `interface_`.
         * @virtual
         */
        vfunc_get_info(): Gio.DBusInterfaceInfo;

        /**
         * Sets the {@link Gio.DBusObject} for `interface_` to `object`.
         * 
         * Note that `interface_` will hold a weak reference to `object`.
         * @param object A {@link Gio.DBusObject} or `null`.
         * @virtual
         */
        vfunc_set_object(object: (Gio.DBusObject | null)): void;

        /**
         * Initializes the object implementing the interface.
         * 
         * This method is intended for language bindings. If writing in C,
         * `g_initable_new()` should typically be used instead.
         * 
         * The object must be initialized before any real use after initial
         * construction, either with this function or `g_async_initable_init_async()`.
         * 
         * Implementations may also support cancellation. If `cancellable` is not `null`,
         * then initialization can be cancelled by triggering the cancellable object
         * from another thread. If the operation was cancelled, the error
         * {@link Gio.IOErrorEnum.CANCELLED} will be returned. If `cancellable` is not `null` and
         * the object doesn't support cancellable initialization the error
         * {@link Gio.IOErrorEnum.NOT_SUPPORTED} will be returned.
         * 
         * If the object is not initialized, or initialization returns with an
         * error, then all operations on the object except `g_object_ref()` and
         * `g_object_unref()` are considered to be invalid, and have undefined
         * behaviour. See the [description][iface@Gio.Initable#description] for more details.
         * 
         * Callers should not assume that a class which implements {@link Gio.Initable} can be
         * initialized multiple times, unless the class explicitly documents itself as
         * supporting this. Generally, a class’ implementation of `init()` can assume
         * (and assert) that it will only be called once. Previously, this documentation
         * recommended all {@link Gio.Initable} implementations should be idempotent; that
         * recommendation was relaxed in GLib 2.54.
         * 
         * If a class explicitly supports being initialized multiple times, it is
         * recommended that the method is idempotent: multiple calls with the same
         * arguments should return the same results. Only the first call initializes
         * the object; further calls return the result of the first call.
         * 
         * One reason why a class might need to support idempotent initialization is if
         * it is designed to be used via the singleton pattern, with a
         * {@link GObject.ObjectClass}.constructor that sometimes returns an existing instance.
         * In this pattern, a caller would expect to be able to call `g_initable_init()`
         * on the result of `g_object_new()`, regardless of whether it is in fact a new
         * instance.
         * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore.
         * @returns `true` if successful. If an error has occurred, this function will     return `false` and set `error` appropriately if present.
         */
        init(cancellable: (Gio.Cancellable | null)): boolean;

        /**
         * Initializes the object implementing the interface.
         * 
         * This method is intended for language bindings. If writing in C,
         * `g_initable_new()` should typically be used instead.
         * 
         * The object must be initialized before any real use after initial
         * construction, either with this function or `g_async_initable_init_async()`.
         * 
         * Implementations may also support cancellation. If `cancellable` is not `null`,
         * then initialization can be cancelled by triggering the cancellable object
         * from another thread. If the operation was cancelled, the error
         * {@link Gio.IOErrorEnum.CANCELLED} will be returned. If `cancellable` is not `null` and
         * the object doesn't support cancellable initialization the error
         * {@link Gio.IOErrorEnum.NOT_SUPPORTED} will be returned.
         * 
         * If the object is not initialized, or initialization returns with an
         * error, then all operations on the object except `g_object_ref()` and
         * `g_object_unref()` are considered to be invalid, and have undefined
         * behaviour. See the [description][iface@Gio.Initable#description] for more details.
         * 
         * Callers should not assume that a class which implements {@link Gio.Initable} can be
         * initialized multiple times, unless the class explicitly documents itself as
         * supporting this. Generally, a class’ implementation of `init()` can assume
         * (and assert) that it will only be called once. Previously, this documentation
         * recommended all {@link Gio.Initable} implementations should be idempotent; that
         * recommendation was relaxed in GLib 2.54.
         * 
         * If a class explicitly supports being initialized multiple times, it is
         * recommended that the method is idempotent: multiple calls with the same
         * arguments should return the same results. Only the first call initializes
         * the object; further calls return the result of the first call.
         * 
         * One reason why a class might need to support idempotent initialization is if
         * it is designed to be used via the singleton pattern, with a
         * {@link GObject.ObjectClass}.constructor that sometimes returns an existing instance.
         * In this pattern, a caller would expect to be able to call `g_initable_init()`
         * on the result of `g_object_new()`, regardless of whether it is in fact a new
         * instance.
         * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore.
         * @virtual
         */
        vfunc_init(cancellable: (Gio.Cancellable | null)): boolean;
    }


    namespace UserVerifierSkeleton {
        // Signal signatures
        interface SignalSignatures extends Gio.DBusInterfaceSkeleton.SignalSignatures {
            "notify::g-flags": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Gio.DBusInterfaceSkeleton.ConstructorProps, UserVerifier.ConstructorProps, Gio.DBusInterface.ConstructorProps {

        }
    }

    /**
     * @gir-type Class
     */
    class UserVerifierSkeleton extends Gio.DBusInterfaceSkeleton implements UserVerifier, Gio.DBusInterface {
        static $gtype: GObject.GType<UserVerifierSkeleton>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: UserVerifierSkeleton.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<UserVerifierSkeleton.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals
        /** @signal */
        connect<K extends keyof UserVerifierSkeleton.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, UserVerifierSkeleton.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof UserVerifierSkeleton.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, UserVerifierSkeleton.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof UserVerifierSkeleton.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<UserVerifierSkeleton.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        /**
         * @param arg_service_name 
         * @param arg_answer 
         * @param cancellable 
         */
        call_answer_query(arg_service_name: string, arg_answer: string, cancellable: (Gio.Cancellable | null)): globalThis.Promise<boolean>;

        /**
         * @param arg_service_name 
         * @param arg_answer 
         * @param cancellable 
         * @param callback 
         */
        call_answer_query(arg_service_name: string, arg_answer: string, cancellable: (Gio.Cancellable | null), callback: (Gio.AsyncReadyCallback<this> | null)): void;

        /**
         * @param arg_service_name 
         * @param arg_answer 
         * @param cancellable 
         * @param callback 
         */
        call_answer_query(arg_service_name: string, arg_answer: string, cancellable: (Gio.Cancellable | null), callback?: (Gio.AsyncReadyCallback<this> | null)): (globalThis.Promise<boolean> | void);

        /**
         * @param res 
         */
        call_answer_query_finish(res: Gio.AsyncResult): boolean;

        /**
         * @param arg_service_name 
         * @param arg_answer 
         * @param cancellable 
         */
        call_answer_query_sync(arg_service_name: string, arg_answer: string, cancellable: (Gio.Cancellable | null)): boolean;

        /**
         * @param arg_service_name 
         * @param cancellable 
         */
        call_begin_verification(arg_service_name: string, cancellable: (Gio.Cancellable | null)): globalThis.Promise<boolean>;

        /**
         * @param arg_service_name 
         * @param cancellable 
         * @param callback 
         */
        call_begin_verification(arg_service_name: string, cancellable: (Gio.Cancellable | null), callback: (Gio.AsyncReadyCallback<this> | null)): void;

        /**
         * @param arg_service_name 
         * @param cancellable 
         * @param callback 
         */
        call_begin_verification(arg_service_name: string, cancellable: (Gio.Cancellable | null), callback?: (Gio.AsyncReadyCallback<this> | null)): (globalThis.Promise<boolean> | void);

        /**
         * @param res 
         */
        call_begin_verification_finish(res: Gio.AsyncResult): boolean;

        /**
         * @param arg_service_name 
         * @param arg_username 
         * @param cancellable 
         */
        call_begin_verification_for_user(arg_service_name: string, arg_username: string, cancellable: (Gio.Cancellable | null)): globalThis.Promise<boolean>;

        /**
         * @param arg_service_name 
         * @param arg_username 
         * @param cancellable 
         * @param callback 
         */
        call_begin_verification_for_user(arg_service_name: string, arg_username: string, cancellable: (Gio.Cancellable | null), callback: (Gio.AsyncReadyCallback<this> | null)): void;

        /**
         * @param arg_service_name 
         * @param arg_username 
         * @param cancellable 
         * @param callback 
         */
        call_begin_verification_for_user(arg_service_name: string, arg_username: string, cancellable: (Gio.Cancellable | null), callback?: (Gio.AsyncReadyCallback<this> | null)): (globalThis.Promise<boolean> | void);

        /**
         * @param res 
         */
        call_begin_verification_for_user_finish(res: Gio.AsyncResult): boolean;

        /**
         * @param arg_service_name 
         * @param arg_username 
         * @param cancellable 
         */
        call_begin_verification_for_user_sync(arg_service_name: string, arg_username: string, cancellable: (Gio.Cancellable | null)): boolean;

        /**
         * @param arg_service_name 
         * @param cancellable 
         */
        call_begin_verification_sync(arg_service_name: string, cancellable: (Gio.Cancellable | null)): boolean;

        /**
         * @param cancellable 
         */
        call_cancel(cancellable: (Gio.Cancellable | null)): globalThis.Promise<boolean>;

        /**
         * @param cancellable 
         * @param callback 
         */
        call_cancel(cancellable: (Gio.Cancellable | null), callback: (Gio.AsyncReadyCallback<this> | null)): void;

        /**
         * @param cancellable 
         * @param callback 
         */
        call_cancel(cancellable: (Gio.Cancellable | null), callback?: (Gio.AsyncReadyCallback<this> | null)): (globalThis.Promise<boolean> | void);

        /**
         * @param res 
         */
        call_cancel_finish(res: Gio.AsyncResult): boolean;

        /**
         * @param cancellable 
         */
        call_cancel_sync(cancellable: (Gio.Cancellable | null)): boolean;

        /**
         * @param arg_extensions 
         * @param cancellable 
         */
        call_enable_extensions(arg_extensions: string, cancellable: (Gio.Cancellable | null)): globalThis.Promise<boolean>;

        /**
         * @param arg_extensions 
         * @param cancellable 
         * @param callback 
         */
        call_enable_extensions(arg_extensions: string, cancellable: (Gio.Cancellable | null), callback: (Gio.AsyncReadyCallback<this> | null)): void;

        /**
         * @param arg_extensions 
         * @param cancellable 
         * @param callback 
         */
        call_enable_extensions(arg_extensions: string, cancellable: (Gio.Cancellable | null), callback?: (Gio.AsyncReadyCallback<this> | null)): (globalThis.Promise<boolean> | void);

        /**
         * @param res 
         */
        call_enable_extensions_finish(res: Gio.AsyncResult): boolean;

        /**
         * @param arg_extensions 
         * @param cancellable 
         */
        call_enable_extensions_sync(arg_extensions: string, cancellable: (Gio.Cancellable | null)): boolean;

        /**
         * @param invocation 
         */
        complete_answer_query(invocation: Gio.DBusMethodInvocation): void;

        /**
         * @param invocation 
         */
        complete_begin_verification(invocation: Gio.DBusMethodInvocation): void;

        /**
         * @param invocation 
         */
        complete_begin_verification_for_user(invocation: Gio.DBusMethodInvocation): void;

        /**
         * @param invocation 
         */
        complete_cancel(invocation: Gio.DBusMethodInvocation): void;

        /**
         * @param invocation 
         */
        complete_enable_extensions(invocation: Gio.DBusMethodInvocation): void;

        /**
         * @param arg_service_name 
         */
        emit_conversation_started(arg_service_name: string): void;

        /**
         * @param arg_service_name 
         */
        emit_conversation_stopped(arg_service_name: string): void;

        /**
         * @param arg_service_name 
         * @param arg_info 
         */
        emit_info(arg_service_name: string, arg_info: string): void;

        /**
         * @param arg_service_name 
         * @param arg_query 
         */
        emit_info_query(arg_service_name: string, arg_query: string): void;

        /**
         * @param arg_service_name 
         * @param arg_problem 
         */
        emit_problem(arg_service_name: string, arg_problem: string): void;

        /**
         * @param arg_pid_of_caller 
         */
        emit_reauthentication_started(arg_pid_of_caller: number): void;

        emit_reset(): void;

        /**
         * @param arg_service_name 
         * @param arg_query 
         */
        emit_secret_info_query(arg_service_name: string, arg_query: string): void;

        /**
         * @param arg_service_name 
         * @param arg_message 
         */
        emit_service_unavailable(arg_service_name: string, arg_message: string): void;

        /**
         * @param arg_service_name 
         */
        emit_verification_complete(arg_service_name: string): void;

        /**
         * @param arg_service_name 
         */
        emit_verification_failed(arg_service_name: string): void;

        /**
         * @param arg_service_name 
         * @virtual
         */
        vfunc_conversation_started(arg_service_name: string): void;

        /**
         * @param arg_service_name 
         * @virtual
         */
        vfunc_conversation_stopped(arg_service_name: string): void;

        /**
         * @param invocation 
         * @param arg_service_name 
         * @param arg_answer 
         * @virtual
         */
        vfunc_handle_answer_query(invocation: Gio.DBusMethodInvocation, arg_service_name: string, arg_answer: string): boolean;

        /**
         * @param invocation 
         * @param arg_service_name 
         * @virtual
         */
        vfunc_handle_begin_verification(invocation: Gio.DBusMethodInvocation, arg_service_name: string): boolean;

        /**
         * @param invocation 
         * @param arg_service_name 
         * @param arg_username 
         * @virtual
         */
        vfunc_handle_begin_verification_for_user(invocation: Gio.DBusMethodInvocation, arg_service_name: string, arg_username: string): boolean;

        /**
         * @param invocation 
         * @virtual
         */
        vfunc_handle_cancel(invocation: Gio.DBusMethodInvocation): boolean;

        /**
         * @param invocation 
         * @param arg_extensions 
         * @virtual
         */
        vfunc_handle_enable_extensions(invocation: Gio.DBusMethodInvocation, arg_extensions: string): boolean;

        /**
         * @param arg_service_name 
         * @param arg_info 
         * @virtual
         */
        vfunc_info(arg_service_name: string, arg_info: string): void;

        /**
         * @param arg_service_name 
         * @param arg_query 
         * @virtual
         */
        vfunc_info_query(arg_service_name: string, arg_query: string): void;

        /**
         * @param arg_service_name 
         * @param arg_problem 
         * @virtual
         */
        vfunc_problem(arg_service_name: string, arg_problem: string): void;

        /**
         * @param arg_pid_of_caller 
         * @virtual
         */
        vfunc_reauthentication_started(arg_pid_of_caller: number): void;

        /**
         * @virtual
         */
        vfunc_reset(): void;

        /**
         * @param arg_service_name 
         * @param arg_query 
         * @virtual
         */
        vfunc_secret_info_query(arg_service_name: string, arg_query: string): void;

        /**
         * @param arg_service_name 
         * @param arg_message 
         * @virtual
         */
        vfunc_service_unavailable(arg_service_name: string, arg_message: string): void;

        /**
         * @param arg_service_name 
         * @virtual
         */
        vfunc_verification_complete(arg_service_name: string): void;

        /**
         * @param arg_service_name 
         * @virtual
         */
        vfunc_verification_failed(arg_service_name: string): void;

        /**
         * Gets the {@link Gio.DBusObject} that `interface_` belongs to, if any.
         * @returns A {@link Gio.DBusObject} or `null`. The returned reference should be freed with `g_object_unref()`.
         */
        get_object(): (Gio.DBusObject | null);

        /**
         * Gets D-Bus introspection information for the D-Bus interface
         * implemented by `interface_`.
         * @returns A {@link Gio.DBusInterfaceInfo}. Do not free.
         */
        get_info(): Gio.DBusInterfaceInfo;

        /**
         * Sets the {@link Gio.DBusObject} for `interface_` to `object`.
         * 
         * Note that `interface_` will hold a weak reference to `object`.
         * @param object A {@link Gio.DBusObject} or `null`.
         */
        set_object(object: (Gio.DBusObject | null)): void;

        /**
         * Gets the {@link Gio.DBusObject} that `interface_` belongs to, if any.
         * @virtual
         */
        vfunc_dup_object(): (Gio.DBusObject | null);

        /**
         * Gets D-Bus introspection information for the D-Bus interface
         * implemented by `interface_`.
         * @virtual
         */
        vfunc_get_info(): Gio.DBusInterfaceInfo;

        /**
         * Sets the {@link Gio.DBusObject} for `interface_` to `object`.
         * 
         * Note that `interface_` will hold a weak reference to `object`.
         * @param object A {@link Gio.DBusObject} or `null`.
         * @virtual
         */
        vfunc_set_object(object: (Gio.DBusObject | null)): void;
    }


    namespace WorkerManagerProxy {
        // Signal signatures
        interface SignalSignatures extends Gio.DBusProxy.SignalSignatures {
            "notify::g-bus-type": (pspec: GObject.ParamSpec) => void;
            "notify::g-connection": (pspec: GObject.ParamSpec) => void;
            "notify::g-default-timeout": (pspec: GObject.ParamSpec) => void;
            "notify::g-flags": (pspec: GObject.ParamSpec) => void;
            "notify::g-interface-info": (pspec: GObject.ParamSpec) => void;
            "notify::g-interface-name": (pspec: GObject.ParamSpec) => void;
            "notify::g-name": (pspec: GObject.ParamSpec) => void;
            "notify::g-name-owner": (pspec: GObject.ParamSpec) => void;
            "notify::g-object-path": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Gio.DBusProxy.ConstructorProps, WorkerManager.ConstructorProps, Gio.AsyncInitable.ConstructorProps, Gio.DBusInterface.ConstructorProps, Gio.Initable.ConstructorProps {

        }
    }

    /**
     * @gir-type Class
     */
    class WorkerManagerProxy extends Gio.DBusProxy implements WorkerManager, Gio.AsyncInitable<WorkerManagerProxy>, Gio.DBusInterface, Gio.Initable {
        static $gtype: GObject.GType<WorkerManagerProxy>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: WorkerManagerProxy.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<WorkerManagerProxy.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals
        /** @signal */
        connect<K extends keyof WorkerManagerProxy.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, WorkerManagerProxy.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof WorkerManagerProxy.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, WorkerManagerProxy.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof WorkerManagerProxy.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<WorkerManagerProxy.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods
        /**
         * @param connection 
         * @param flags 
         * @param name 
         * @param object_path 
         * @param cancellable 
         * @param callback 
         */
        static ["new"](connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string, object_path: string, cancellable: (Gio.Cancellable | null), callback: (Gio.AsyncReadyCallback<WorkerManagerProxy> | null)): void;

        /**
         * @param args 
         */
    // Conflicted with Gio.DBusProxy.new
        static ["new"](...args: never[]): any;

        /**
         * @param bus_type 
         * @param flags 
         * @param name 
         * @param object_path 
         * @param cancellable 
         * @param callback 
         */
        static new_for_bus(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, object_path: string, cancellable: (Gio.Cancellable | null), callback: (Gio.AsyncReadyCallback<WorkerManagerProxy> | null)): void;

        /**
         * @param args 
         */
    // Conflicted with Gio.DBusProxy.new_for_bus
        static new_for_bus(...args: never[]): any;

        /**
         * @param arg_service_name 
         * @param arg_prompt_message 
         * @param arg_query 
         * @param cancellable 
         */
        call_choice_list_query(arg_service_name: string, arg_prompt_message: string, arg_query: GLib.Variant, cancellable: (Gio.Cancellable | null)): globalThis.Promise<boolean>;

        /**
         * @param arg_service_name 
         * @param arg_prompt_message 
         * @param arg_query 
         * @param cancellable 
         * @param callback 
         */
        call_choice_list_query(arg_service_name: string, arg_prompt_message: string, arg_query: GLib.Variant, cancellable: (Gio.Cancellable | null), callback: (Gio.AsyncReadyCallback<this> | null)): void;

        /**
         * @param arg_service_name 
         * @param arg_prompt_message 
         * @param arg_query 
         * @param cancellable 
         * @param callback 
         */
        call_choice_list_query(arg_service_name: string, arg_prompt_message: string, arg_query: GLib.Variant, cancellable: (Gio.Cancellable | null), callback?: (Gio.AsyncReadyCallback<this> | null)): (globalThis.Promise<boolean> | void);

        /**
         * @param out_answer 
         * @param res 
         */
        call_choice_list_query_finish(out_answer: string, res: Gio.AsyncResult): boolean;

        /**
         * @param arg_service_name 
         * @param arg_prompt_message 
         * @param arg_query 
         * @param out_answer 
         * @param cancellable 
         */
        call_choice_list_query_sync(arg_service_name: string, arg_prompt_message: string, arg_query: GLib.Variant, out_answer: string, cancellable: (Gio.Cancellable | null)): boolean;

        /**
         * @param cancellable 
         */
        call_hello(cancellable: (Gio.Cancellable | null)): globalThis.Promise<boolean>;

        /**
         * @param cancellable 
         * @param callback 
         */
        call_hello(cancellable: (Gio.Cancellable | null), callback: (Gio.AsyncReadyCallback<this> | null)): void;

        /**
         * @param cancellable 
         * @param callback 
         */
        call_hello(cancellable: (Gio.Cancellable | null), callback?: (Gio.AsyncReadyCallback<this> | null)): (globalThis.Promise<boolean> | void);

        /**
         * @param res 
         */
        call_hello_finish(res: Gio.AsyncResult): boolean;

        /**
         * @param cancellable 
         */
        call_hello_sync(cancellable: (Gio.Cancellable | null)): boolean;

        /**
         * @param arg_service_name 
         * @param arg_info 
         * @param cancellable 
         */
        call_info(arg_service_name: string, arg_info: string, cancellable: (Gio.Cancellable | null)): globalThis.Promise<boolean>;

        /**
         * @param arg_service_name 
         * @param arg_info 
         * @param cancellable 
         * @param callback 
         */
        call_info(arg_service_name: string, arg_info: string, cancellable: (Gio.Cancellable | null), callback: (Gio.AsyncReadyCallback<this> | null)): void;

        /**
         * @param arg_service_name 
         * @param arg_info 
         * @param cancellable 
         * @param callback 
         */
        call_info(arg_service_name: string, arg_info: string, cancellable: (Gio.Cancellable | null), callback?: (Gio.AsyncReadyCallback<this> | null)): (globalThis.Promise<boolean> | void);

        /**
         * @param res 
         */
        call_info_finish(res: Gio.AsyncResult): boolean;

        /**
         * @param arg_service_name 
         * @param arg_query 
         * @param cancellable 
         */
        call_info_query(arg_service_name: string, arg_query: string, cancellable: (Gio.Cancellable | null)): globalThis.Promise<boolean>;

        /**
         * @param arg_service_name 
         * @param arg_query 
         * @param cancellable 
         * @param callback 
         */
        call_info_query(arg_service_name: string, arg_query: string, cancellable: (Gio.Cancellable | null), callback: (Gio.AsyncReadyCallback<this> | null)): void;

        /**
         * @param arg_service_name 
         * @param arg_query 
         * @param cancellable 
         * @param callback 
         */
        call_info_query(arg_service_name: string, arg_query: string, cancellable: (Gio.Cancellable | null), callback?: (Gio.AsyncReadyCallback<this> | null)): (globalThis.Promise<boolean> | void);

        /**
         * @param out_answer 
         * @param res 
         */
        call_info_query_finish(out_answer: string, res: Gio.AsyncResult): boolean;

        /**
         * @param arg_service_name 
         * @param arg_query 
         * @param out_answer 
         * @param cancellable 
         */
        call_info_query_sync(arg_service_name: string, arg_query: string, out_answer: string, cancellable: (Gio.Cancellable | null)): boolean;

        /**
         * @param arg_service_name 
         * @param arg_info 
         * @param cancellable 
         */
        call_info_sync(arg_service_name: string, arg_info: string, cancellable: (Gio.Cancellable | null)): boolean;

        /**
         * @param arg_service_name 
         * @param arg_problem 
         * @param cancellable 
         */
        call_problem(arg_service_name: string, arg_problem: string, cancellable: (Gio.Cancellable | null)): globalThis.Promise<boolean>;

        /**
         * @param arg_service_name 
         * @param arg_problem 
         * @param cancellable 
         * @param callback 
         */
        call_problem(arg_service_name: string, arg_problem: string, cancellable: (Gio.Cancellable | null), callback: (Gio.AsyncReadyCallback<this> | null)): void;

        /**
         * @param arg_service_name 
         * @param arg_problem 
         * @param cancellable 
         * @param callback 
         */
        call_problem(arg_service_name: string, arg_problem: string, cancellable: (Gio.Cancellable | null), callback?: (Gio.AsyncReadyCallback<this> | null)): (globalThis.Promise<boolean> | void);

        /**
         * @param res 
         */
        call_problem_finish(res: Gio.AsyncResult): boolean;

        /**
         * @param arg_service_name 
         * @param arg_problem 
         * @param cancellable 
         */
        call_problem_sync(arg_service_name: string, arg_problem: string, cancellable: (Gio.Cancellable | null)): boolean;

        /**
         * @param arg_service_name 
         * @param arg_query 
         * @param cancellable 
         */
        call_secret_info_query(arg_service_name: string, arg_query: string, cancellable: (Gio.Cancellable | null)): globalThis.Promise<boolean>;

        /**
         * @param arg_service_name 
         * @param arg_query 
         * @param cancellable 
         * @param callback 
         */
        call_secret_info_query(arg_service_name: string, arg_query: string, cancellable: (Gio.Cancellable | null), callback: (Gio.AsyncReadyCallback<this> | null)): void;

        /**
         * @param arg_service_name 
         * @param arg_query 
         * @param cancellable 
         * @param callback 
         */
        call_secret_info_query(arg_service_name: string, arg_query: string, cancellable: (Gio.Cancellable | null), callback?: (Gio.AsyncReadyCallback<this> | null)): (globalThis.Promise<boolean> | void);

        /**
         * @param out_answer 
         * @param res 
         */
        call_secret_info_query_finish(out_answer: string, res: Gio.AsyncResult): boolean;

        /**
         * @param arg_service_name 
         * @param arg_query 
         * @param out_answer 
         * @param cancellable 
         */
        call_secret_info_query_sync(arg_service_name: string, arg_query: string, out_answer: string, cancellable: (Gio.Cancellable | null)): boolean;

        /**
         * @param invocation 
         * @param answer 
         */
        complete_choice_list_query(invocation: Gio.DBusMethodInvocation, answer: string): void;

        /**
         * @param invocation 
         */
        complete_hello(invocation: Gio.DBusMethodInvocation): void;

        /**
         * @param invocation 
         */
        complete_info(invocation: Gio.DBusMethodInvocation): void;

        /**
         * @param invocation 
         * @param answer 
         */
        complete_info_query(invocation: Gio.DBusMethodInvocation, answer: string): void;

        /**
         * @param invocation 
         */
        complete_problem(invocation: Gio.DBusMethodInvocation): void;

        /**
         * @param invocation 
         * @param answer 
         */
        complete_secret_info_query(invocation: Gio.DBusMethodInvocation, answer: string): void;

        /**
         * @param invocation 
         * @param arg_service_name 
         * @param arg_prompt_message 
         * @param arg_query 
         * @virtual
         */
        vfunc_handle_choice_list_query(invocation: Gio.DBusMethodInvocation, arg_service_name: string, arg_prompt_message: string, arg_query: GLib.Variant): boolean;

        /**
         * @param invocation 
         * @virtual
         */
        vfunc_handle_hello(invocation: Gio.DBusMethodInvocation): boolean;

        /**
         * @param invocation 
         * @param arg_service_name 
         * @param arg_info 
         * @virtual
         */
        vfunc_handle_info(invocation: Gio.DBusMethodInvocation, arg_service_name: string, arg_info: string): boolean;

        /**
         * @param invocation 
         * @param arg_service_name 
         * @param arg_query 
         * @virtual
         */
        vfunc_handle_info_query(invocation: Gio.DBusMethodInvocation, arg_service_name: string, arg_query: string): boolean;

        /**
         * @param invocation 
         * @param arg_service_name 
         * @param arg_problem 
         * @virtual
         */
        vfunc_handle_problem(invocation: Gio.DBusMethodInvocation, arg_service_name: string, arg_problem: string): boolean;

        /**
         * @param invocation 
         * @param arg_service_name 
         * @param arg_query 
         * @virtual
         */
        vfunc_handle_secret_info_query(invocation: Gio.DBusMethodInvocation, arg_service_name: string, arg_query: string): boolean;

        /**
         * Starts asynchronous initialization of the object implementing the
         * interface. This must be done before any real use of the object after
         * initial construction. If the object also implements {@link Gio.Initable} you can
         * optionally call `g_initable_init()` instead.
         * 
         * This method is intended for language bindings. If writing in C,
         * `g_async_initable_new_async()` should typically be used instead.
         * 
         * When the initialization is finished, `callback` will be called. You can
         * then call `g_async_initable_init_finish()` to get the result of the
         * initialization.
         * 
         * Implementations may also support cancellation. If `cancellable` is not
         * `null`, then initialization can be cancelled by triggering the cancellable
         * object from another thread. If the operation was cancelled, the error
         * {@link Gio.IOErrorEnum.CANCELLED} will be returned. If `cancellable` is not `null`, and
         * the object doesn't support cancellable initialization, the error
         * {@link Gio.IOErrorEnum.NOT_SUPPORTED} will be returned.
         * 
         * As with {@link Gio.Initable}, if the object is not initialized, or initialization
         * returns with an error, then all operations on the object except
         * `g_object_ref()` and `g_object_unref()` are considered to be invalid, and
         * have undefined behaviour. They will often fail with `g_critical()` or
         * `g_warning()`, but this must not be relied on.
         * 
         * Callers should not assume that a class which implements {@link Gio.AsyncInitable} can
         * be initialized multiple times; for more information, see `g_initable_init()`.
         * If a class explicitly supports being initialized multiple times,
         * implementation requires yielding all subsequent calls to `init_async()` on the
         * results of the first call.
         * 
         * For classes that also support the {@link Gio.Initable} interface, the default
         * implementation of this method will run the `g_initable_init()` function
         * in a thread, so if you want to support asynchronous initialization via
         * threads, just implement the {@link Gio.AsyncInitable} interface without overriding
         * any interface methods.
         * @param io_priority the [I/O priority](iface.AsyncResult.html#io-priority) of the operation
         * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore.
         */
        init_async(io_priority: number, cancellable: (Gio.Cancellable | null)): globalThis.Promise<boolean>;

        /**
         * Starts asynchronous initialization of the object implementing the
         * interface. This must be done before any real use of the object after
         * initial construction. If the object also implements {@link Gio.Initable} you can
         * optionally call `g_initable_init()` instead.
         * 
         * This method is intended for language bindings. If writing in C,
         * `g_async_initable_new_async()` should typically be used instead.
         * 
         * When the initialization is finished, `callback` will be called. You can
         * then call `g_async_initable_init_finish()` to get the result of the
         * initialization.
         * 
         * Implementations may also support cancellation. If `cancellable` is not
         * `null`, then initialization can be cancelled by triggering the cancellable
         * object from another thread. If the operation was cancelled, the error
         * {@link Gio.IOErrorEnum.CANCELLED} will be returned. If `cancellable` is not `null`, and
         * the object doesn't support cancellable initialization, the error
         * {@link Gio.IOErrorEnum.NOT_SUPPORTED} will be returned.
         * 
         * As with {@link Gio.Initable}, if the object is not initialized, or initialization
         * returns with an error, then all operations on the object except
         * `g_object_ref()` and `g_object_unref()` are considered to be invalid, and
         * have undefined behaviour. They will often fail with `g_critical()` or
         * `g_warning()`, but this must not be relied on.
         * 
         * Callers should not assume that a class which implements {@link Gio.AsyncInitable} can
         * be initialized multiple times; for more information, see `g_initable_init()`.
         * If a class explicitly supports being initialized multiple times,
         * implementation requires yielding all subsequent calls to `init_async()` on the
         * results of the first call.
         * 
         * For classes that also support the {@link Gio.Initable} interface, the default
         * implementation of this method will run the `g_initable_init()` function
         * in a thread, so if you want to support asynchronous initialization via
         * threads, just implement the {@link Gio.AsyncInitable} interface without overriding
         * any interface methods.
         * @param io_priority the [I/O priority](iface.AsyncResult.html#io-priority) of the operation
         * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore.
         * @param callback a {@link Gio.AsyncReadyCallback} to call when the request is satisfied
         */
        init_async(io_priority: number, cancellable: (Gio.Cancellable | null), callback: (Gio.AsyncReadyCallback<this> | null)): void;

        /**
         * Starts asynchronous initialization of the object implementing the
         * interface. This must be done before any real use of the object after
         * initial construction. If the object also implements {@link Gio.Initable} you can
         * optionally call `g_initable_init()` instead.
         * 
         * This method is intended for language bindings. If writing in C,
         * `g_async_initable_new_async()` should typically be used instead.
         * 
         * When the initialization is finished, `callback` will be called. You can
         * then call `g_async_initable_init_finish()` to get the result of the
         * initialization.
         * 
         * Implementations may also support cancellation. If `cancellable` is not
         * `null`, then initialization can be cancelled by triggering the cancellable
         * object from another thread. If the operation was cancelled, the error
         * {@link Gio.IOErrorEnum.CANCELLED} will be returned. If `cancellable` is not `null`, and
         * the object doesn't support cancellable initialization, the error
         * {@link Gio.IOErrorEnum.NOT_SUPPORTED} will be returned.
         * 
         * As with {@link Gio.Initable}, if the object is not initialized, or initialization
         * returns with an error, then all operations on the object except
         * `g_object_ref()` and `g_object_unref()` are considered to be invalid, and
         * have undefined behaviour. They will often fail with `g_critical()` or
         * `g_warning()`, but this must not be relied on.
         * 
         * Callers should not assume that a class which implements {@link Gio.AsyncInitable} can
         * be initialized multiple times; for more information, see `g_initable_init()`.
         * If a class explicitly supports being initialized multiple times,
         * implementation requires yielding all subsequent calls to `init_async()` on the
         * results of the first call.
         * 
         * For classes that also support the {@link Gio.Initable} interface, the default
         * implementation of this method will run the `g_initable_init()` function
         * in a thread, so if you want to support asynchronous initialization via
         * threads, just implement the {@link Gio.AsyncInitable} interface without overriding
         * any interface methods.
         * @param io_priority the [I/O priority](iface.AsyncResult.html#io-priority) of the operation
         * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore.
         * @param callback a {@link Gio.AsyncReadyCallback} to call when the request is satisfied
         */
        init_async(io_priority: number, cancellable: (Gio.Cancellable | null), callback?: (Gio.AsyncReadyCallback<this> | null)): (globalThis.Promise<boolean> | void);

        /**
         * Finishes asynchronous initialization and returns the result.
         * See `g_async_initable_init_async()`.
         * @param res a {@link Gio.AsyncResult}.
         * @returns `true` if successful. If an error has occurred, this function will return `false` and set `error` appropriately if present.
         */
        init_finish(res: Gio.AsyncResult): boolean;

        /**
         * Finishes the async construction for the various g_async_initable_new
         * calls, returning the created object or `null` on error.
         * @param res the {@link Gio.AsyncResult} from the callback
         * @returns a newly created {@link GObject.Object},      or `null` on error. Free with `g_object_unref()`.
         */
        new_finish(res: Gio.AsyncResult): WorkerManagerProxy;

        /**
         * @param args 
         */
        // Conflicted with Gio.DBusProxy.new_finish
        new_finish(...args: never[]): any;

        /**
         * Starts asynchronous initialization of the object implementing the
         * interface. This must be done before any real use of the object after
         * initial construction. If the object also implements {@link Gio.Initable} you can
         * optionally call `g_initable_init()` instead.
         * 
         * This method is intended for language bindings. If writing in C,
         * `g_async_initable_new_async()` should typically be used instead.
         * 
         * When the initialization is finished, `callback` will be called. You can
         * then call `g_async_initable_init_finish()` to get the result of the
         * initialization.
         * 
         * Implementations may also support cancellation. If `cancellable` is not
         * `null`, then initialization can be cancelled by triggering the cancellable
         * object from another thread. If the operation was cancelled, the error
         * {@link Gio.IOErrorEnum.CANCELLED} will be returned. If `cancellable` is not `null`, and
         * the object doesn't support cancellable initialization, the error
         * {@link Gio.IOErrorEnum.NOT_SUPPORTED} will be returned.
         * 
         * As with {@link Gio.Initable}, if the object is not initialized, or initialization
         * returns with an error, then all operations on the object except
         * `g_object_ref()` and `g_object_unref()` are considered to be invalid, and
         * have undefined behaviour. They will often fail with `g_critical()` or
         * `g_warning()`, but this must not be relied on.
         * 
         * Callers should not assume that a class which implements {@link Gio.AsyncInitable} can
         * be initialized multiple times; for more information, see `g_initable_init()`.
         * If a class explicitly supports being initialized multiple times,
         * implementation requires yielding all subsequent calls to `init_async()` on the
         * results of the first call.
         * 
         * For classes that also support the {@link Gio.Initable} interface, the default
         * implementation of this method will run the `g_initable_init()` function
         * in a thread, so if you want to support asynchronous initialization via
         * threads, just implement the {@link Gio.AsyncInitable} interface without overriding
         * any interface methods.
         * @param io_priority the [I/O priority](iface.AsyncResult.html#io-priority) of the operation
         * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore.
         * @param callback a {@link Gio.AsyncReadyCallback} to call when the request is satisfied
         * @virtual
         */
        vfunc_init_async(io_priority: number, cancellable: (Gio.Cancellable | null), callback: (Gio.AsyncReadyCallback<this> | null)): void;

        /**
         * Finishes asynchronous initialization and returns the result.
         * See `g_async_initable_init_async()`.
         * @param res a {@link Gio.AsyncResult}.
         * @virtual
         */
        vfunc_init_finish(res: Gio.AsyncResult): boolean;

        /**
         * Gets the {@link Gio.DBusObject} that `interface_` belongs to, if any.
         * @returns A {@link Gio.DBusObject} or `null`. The returned reference should be freed with `g_object_unref()`.
         */
        get_object(): (Gio.DBusObject | null);

        /**
         * Gets D-Bus introspection information for the D-Bus interface
         * implemented by `interface_`.
         * @returns A {@link Gio.DBusInterfaceInfo}. Do not free.
         */
        get_info(): Gio.DBusInterfaceInfo;

        /**
         * Sets the {@link Gio.DBusObject} for `interface_` to `object`.
         * 
         * Note that `interface_` will hold a weak reference to `object`.
         * @param object A {@link Gio.DBusObject} or `null`.
         */
        set_object(object: (Gio.DBusObject | null)): void;

        /**
         * Gets the {@link Gio.DBusObject} that `interface_` belongs to, if any.
         * @virtual
         */
        vfunc_dup_object(): (Gio.DBusObject | null);

        /**
         * Gets D-Bus introspection information for the D-Bus interface
         * implemented by `interface_`.
         * @virtual
         */
        vfunc_get_info(): Gio.DBusInterfaceInfo;

        /**
         * Sets the {@link Gio.DBusObject} for `interface_` to `object`.
         * 
         * Note that `interface_` will hold a weak reference to `object`.
         * @param object A {@link Gio.DBusObject} or `null`.
         * @virtual
         */
        vfunc_set_object(object: (Gio.DBusObject | null)): void;

        /**
         * Initializes the object implementing the interface.
         * 
         * This method is intended for language bindings. If writing in C,
         * `g_initable_new()` should typically be used instead.
         * 
         * The object must be initialized before any real use after initial
         * construction, either with this function or `g_async_initable_init_async()`.
         * 
         * Implementations may also support cancellation. If `cancellable` is not `null`,
         * then initialization can be cancelled by triggering the cancellable object
         * from another thread. If the operation was cancelled, the error
         * {@link Gio.IOErrorEnum.CANCELLED} will be returned. If `cancellable` is not `null` and
         * the object doesn't support cancellable initialization the error
         * {@link Gio.IOErrorEnum.NOT_SUPPORTED} will be returned.
         * 
         * If the object is not initialized, or initialization returns with an
         * error, then all operations on the object except `g_object_ref()` and
         * `g_object_unref()` are considered to be invalid, and have undefined
         * behaviour. See the [description][iface@Gio.Initable#description] for more details.
         * 
         * Callers should not assume that a class which implements {@link Gio.Initable} can be
         * initialized multiple times, unless the class explicitly documents itself as
         * supporting this. Generally, a class’ implementation of `init()` can assume
         * (and assert) that it will only be called once. Previously, this documentation
         * recommended all {@link Gio.Initable} implementations should be idempotent; that
         * recommendation was relaxed in GLib 2.54.
         * 
         * If a class explicitly supports being initialized multiple times, it is
         * recommended that the method is idempotent: multiple calls with the same
         * arguments should return the same results. Only the first call initializes
         * the object; further calls return the result of the first call.
         * 
         * One reason why a class might need to support idempotent initialization is if
         * it is designed to be used via the singleton pattern, with a
         * {@link GObject.ObjectClass}.constructor that sometimes returns an existing instance.
         * In this pattern, a caller would expect to be able to call `g_initable_init()`
         * on the result of `g_object_new()`, regardless of whether it is in fact a new
         * instance.
         * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore.
         * @returns `true` if successful. If an error has occurred, this function will     return `false` and set `error` appropriately if present.
         */
        init(cancellable: (Gio.Cancellable | null)): boolean;

        /**
         * Initializes the object implementing the interface.
         * 
         * This method is intended for language bindings. If writing in C,
         * `g_initable_new()` should typically be used instead.
         * 
         * The object must be initialized before any real use after initial
         * construction, either with this function or `g_async_initable_init_async()`.
         * 
         * Implementations may also support cancellation. If `cancellable` is not `null`,
         * then initialization can be cancelled by triggering the cancellable object
         * from another thread. If the operation was cancelled, the error
         * {@link Gio.IOErrorEnum.CANCELLED} will be returned. If `cancellable` is not `null` and
         * the object doesn't support cancellable initialization the error
         * {@link Gio.IOErrorEnum.NOT_SUPPORTED} will be returned.
         * 
         * If the object is not initialized, or initialization returns with an
         * error, then all operations on the object except `g_object_ref()` and
         * `g_object_unref()` are considered to be invalid, and have undefined
         * behaviour. See the [description][iface@Gio.Initable#description] for more details.
         * 
         * Callers should not assume that a class which implements {@link Gio.Initable} can be
         * initialized multiple times, unless the class explicitly documents itself as
         * supporting this. Generally, a class’ implementation of `init()` can assume
         * (and assert) that it will only be called once. Previously, this documentation
         * recommended all {@link Gio.Initable} implementations should be idempotent; that
         * recommendation was relaxed in GLib 2.54.
         * 
         * If a class explicitly supports being initialized multiple times, it is
         * recommended that the method is idempotent: multiple calls with the same
         * arguments should return the same results. Only the first call initializes
         * the object; further calls return the result of the first call.
         * 
         * One reason why a class might need to support idempotent initialization is if
         * it is designed to be used via the singleton pattern, with a
         * {@link GObject.ObjectClass}.constructor that sometimes returns an existing instance.
         * In this pattern, a caller would expect to be able to call `g_initable_init()`
         * on the result of `g_object_new()`, regardless of whether it is in fact a new
         * instance.
         * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore.
         * @virtual
         */
        vfunc_init(cancellable: (Gio.Cancellable | null)): boolean;
    }


    namespace WorkerManagerSkeleton {
        // Signal signatures
        interface SignalSignatures extends Gio.DBusInterfaceSkeleton.SignalSignatures {
            "notify::g-flags": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Gio.DBusInterfaceSkeleton.ConstructorProps, WorkerManager.ConstructorProps, Gio.DBusInterface.ConstructorProps {

        }
    }

    /**
     * @gir-type Class
     */
    class WorkerManagerSkeleton extends Gio.DBusInterfaceSkeleton implements WorkerManager, Gio.DBusInterface {
        static $gtype: GObject.GType<WorkerManagerSkeleton>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: WorkerManagerSkeleton.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<WorkerManagerSkeleton.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals
        /** @signal */
        connect<K extends keyof WorkerManagerSkeleton.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, WorkerManagerSkeleton.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof WorkerManagerSkeleton.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, WorkerManagerSkeleton.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof WorkerManagerSkeleton.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<WorkerManagerSkeleton.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        /**
         * @param arg_service_name 
         * @param arg_prompt_message 
         * @param arg_query 
         * @param cancellable 
         */
        call_choice_list_query(arg_service_name: string, arg_prompt_message: string, arg_query: GLib.Variant, cancellable: (Gio.Cancellable | null)): globalThis.Promise<boolean>;

        /**
         * @param arg_service_name 
         * @param arg_prompt_message 
         * @param arg_query 
         * @param cancellable 
         * @param callback 
         */
        call_choice_list_query(arg_service_name: string, arg_prompt_message: string, arg_query: GLib.Variant, cancellable: (Gio.Cancellable | null), callback: (Gio.AsyncReadyCallback<this> | null)): void;

        /**
         * @param arg_service_name 
         * @param arg_prompt_message 
         * @param arg_query 
         * @param cancellable 
         * @param callback 
         */
        call_choice_list_query(arg_service_name: string, arg_prompt_message: string, arg_query: GLib.Variant, cancellable: (Gio.Cancellable | null), callback?: (Gio.AsyncReadyCallback<this> | null)): (globalThis.Promise<boolean> | void);

        /**
         * @param out_answer 
         * @param res 
         */
        call_choice_list_query_finish(out_answer: string, res: Gio.AsyncResult): boolean;

        /**
         * @param arg_service_name 
         * @param arg_prompt_message 
         * @param arg_query 
         * @param out_answer 
         * @param cancellable 
         */
        call_choice_list_query_sync(arg_service_name: string, arg_prompt_message: string, arg_query: GLib.Variant, out_answer: string, cancellable: (Gio.Cancellable | null)): boolean;

        /**
         * @param cancellable 
         */
        call_hello(cancellable: (Gio.Cancellable | null)): globalThis.Promise<boolean>;

        /**
         * @param cancellable 
         * @param callback 
         */
        call_hello(cancellable: (Gio.Cancellable | null), callback: (Gio.AsyncReadyCallback<this> | null)): void;

        /**
         * @param cancellable 
         * @param callback 
         */
        call_hello(cancellable: (Gio.Cancellable | null), callback?: (Gio.AsyncReadyCallback<this> | null)): (globalThis.Promise<boolean> | void);

        /**
         * @param res 
         */
        call_hello_finish(res: Gio.AsyncResult): boolean;

        /**
         * @param cancellable 
         */
        call_hello_sync(cancellable: (Gio.Cancellable | null)): boolean;

        /**
         * @param arg_service_name 
         * @param arg_info 
         * @param cancellable 
         */
        call_info(arg_service_name: string, arg_info: string, cancellable: (Gio.Cancellable | null)): globalThis.Promise<boolean>;

        /**
         * @param arg_service_name 
         * @param arg_info 
         * @param cancellable 
         * @param callback 
         */
        call_info(arg_service_name: string, arg_info: string, cancellable: (Gio.Cancellable | null), callback: (Gio.AsyncReadyCallback<this> | null)): void;

        /**
         * @param arg_service_name 
         * @param arg_info 
         * @param cancellable 
         * @param callback 
         */
        call_info(arg_service_name: string, arg_info: string, cancellable: (Gio.Cancellable | null), callback?: (Gio.AsyncReadyCallback<this> | null)): (globalThis.Promise<boolean> | void);

        /**
         * @param res 
         */
        call_info_finish(res: Gio.AsyncResult): boolean;

        /**
         * @param arg_service_name 
         * @param arg_query 
         * @param cancellable 
         */
        call_info_query(arg_service_name: string, arg_query: string, cancellable: (Gio.Cancellable | null)): globalThis.Promise<boolean>;

        /**
         * @param arg_service_name 
         * @param arg_query 
         * @param cancellable 
         * @param callback 
         */
        call_info_query(arg_service_name: string, arg_query: string, cancellable: (Gio.Cancellable | null), callback: (Gio.AsyncReadyCallback<this> | null)): void;

        /**
         * @param arg_service_name 
         * @param arg_query 
         * @param cancellable 
         * @param callback 
         */
        call_info_query(arg_service_name: string, arg_query: string, cancellable: (Gio.Cancellable | null), callback?: (Gio.AsyncReadyCallback<this> | null)): (globalThis.Promise<boolean> | void);

        /**
         * @param out_answer 
         * @param res 
         */
        call_info_query_finish(out_answer: string, res: Gio.AsyncResult): boolean;

        /**
         * @param arg_service_name 
         * @param arg_query 
         * @param out_answer 
         * @param cancellable 
         */
        call_info_query_sync(arg_service_name: string, arg_query: string, out_answer: string, cancellable: (Gio.Cancellable | null)): boolean;

        /**
         * @param arg_service_name 
         * @param arg_info 
         * @param cancellable 
         */
        call_info_sync(arg_service_name: string, arg_info: string, cancellable: (Gio.Cancellable | null)): boolean;

        /**
         * @param arg_service_name 
         * @param arg_problem 
         * @param cancellable 
         */
        call_problem(arg_service_name: string, arg_problem: string, cancellable: (Gio.Cancellable | null)): globalThis.Promise<boolean>;

        /**
         * @param arg_service_name 
         * @param arg_problem 
         * @param cancellable 
         * @param callback 
         */
        call_problem(arg_service_name: string, arg_problem: string, cancellable: (Gio.Cancellable | null), callback: (Gio.AsyncReadyCallback<this> | null)): void;

        /**
         * @param arg_service_name 
         * @param arg_problem 
         * @param cancellable 
         * @param callback 
         */
        call_problem(arg_service_name: string, arg_problem: string, cancellable: (Gio.Cancellable | null), callback?: (Gio.AsyncReadyCallback<this> | null)): (globalThis.Promise<boolean> | void);

        /**
         * @param res 
         */
        call_problem_finish(res: Gio.AsyncResult): boolean;

        /**
         * @param arg_service_name 
         * @param arg_problem 
         * @param cancellable 
         */
        call_problem_sync(arg_service_name: string, arg_problem: string, cancellable: (Gio.Cancellable | null)): boolean;

        /**
         * @param arg_service_name 
         * @param arg_query 
         * @param cancellable 
         */
        call_secret_info_query(arg_service_name: string, arg_query: string, cancellable: (Gio.Cancellable | null)): globalThis.Promise<boolean>;

        /**
         * @param arg_service_name 
         * @param arg_query 
         * @param cancellable 
         * @param callback 
         */
        call_secret_info_query(arg_service_name: string, arg_query: string, cancellable: (Gio.Cancellable | null), callback: (Gio.AsyncReadyCallback<this> | null)): void;

        /**
         * @param arg_service_name 
         * @param arg_query 
         * @param cancellable 
         * @param callback 
         */
        call_secret_info_query(arg_service_name: string, arg_query: string, cancellable: (Gio.Cancellable | null), callback?: (Gio.AsyncReadyCallback<this> | null)): (globalThis.Promise<boolean> | void);

        /**
         * @param out_answer 
         * @param res 
         */
        call_secret_info_query_finish(out_answer: string, res: Gio.AsyncResult): boolean;

        /**
         * @param arg_service_name 
         * @param arg_query 
         * @param out_answer 
         * @param cancellable 
         */
        call_secret_info_query_sync(arg_service_name: string, arg_query: string, out_answer: string, cancellable: (Gio.Cancellable | null)): boolean;

        /**
         * @param invocation 
         * @param answer 
         */
        complete_choice_list_query(invocation: Gio.DBusMethodInvocation, answer: string): void;

        /**
         * @param invocation 
         */
        complete_hello(invocation: Gio.DBusMethodInvocation): void;

        /**
         * @param invocation 
         */
        complete_info(invocation: Gio.DBusMethodInvocation): void;

        /**
         * @param invocation 
         * @param answer 
         */
        complete_info_query(invocation: Gio.DBusMethodInvocation, answer: string): void;

        /**
         * @param invocation 
         */
        complete_problem(invocation: Gio.DBusMethodInvocation): void;

        /**
         * @param invocation 
         * @param answer 
         */
        complete_secret_info_query(invocation: Gio.DBusMethodInvocation, answer: string): void;

        /**
         * @param invocation 
         * @param arg_service_name 
         * @param arg_prompt_message 
         * @param arg_query 
         * @virtual
         */
        vfunc_handle_choice_list_query(invocation: Gio.DBusMethodInvocation, arg_service_name: string, arg_prompt_message: string, arg_query: GLib.Variant): boolean;

        /**
         * @param invocation 
         * @virtual
         */
        vfunc_handle_hello(invocation: Gio.DBusMethodInvocation): boolean;

        /**
         * @param invocation 
         * @param arg_service_name 
         * @param arg_info 
         * @virtual
         */
        vfunc_handle_info(invocation: Gio.DBusMethodInvocation, arg_service_name: string, arg_info: string): boolean;

        /**
         * @param invocation 
         * @param arg_service_name 
         * @param arg_query 
         * @virtual
         */
        vfunc_handle_info_query(invocation: Gio.DBusMethodInvocation, arg_service_name: string, arg_query: string): boolean;

        /**
         * @param invocation 
         * @param arg_service_name 
         * @param arg_problem 
         * @virtual
         */
        vfunc_handle_problem(invocation: Gio.DBusMethodInvocation, arg_service_name: string, arg_problem: string): boolean;

        /**
         * @param invocation 
         * @param arg_service_name 
         * @param arg_query 
         * @virtual
         */
        vfunc_handle_secret_info_query(invocation: Gio.DBusMethodInvocation, arg_service_name: string, arg_query: string): boolean;

        /**
         * Gets the {@link Gio.DBusObject} that `interface_` belongs to, if any.
         * @returns A {@link Gio.DBusObject} or `null`. The returned reference should be freed with `g_object_unref()`.
         */
        get_object(): (Gio.DBusObject | null);

        /**
         * Gets D-Bus introspection information for the D-Bus interface
         * implemented by `interface_`.
         * @returns A {@link Gio.DBusInterfaceInfo}. Do not free.
         */
        get_info(): Gio.DBusInterfaceInfo;

        /**
         * Sets the {@link Gio.DBusObject} for `interface_` to `object`.
         * 
         * Note that `interface_` will hold a weak reference to `object`.
         * @param object A {@link Gio.DBusObject} or `null`.
         */
        set_object(object: (Gio.DBusObject | null)): void;

        /**
         * Gets the {@link Gio.DBusObject} that `interface_` belongs to, if any.
         * @virtual
         */
        vfunc_dup_object(): (Gio.DBusObject | null);

        /**
         * Gets D-Bus introspection information for the D-Bus interface
         * implemented by `interface_`.
         * @virtual
         */
        vfunc_get_info(): Gio.DBusInterfaceInfo;

        /**
         * Sets the {@link Gio.DBusObject} for `interface_` to `object`.
         * 
         * Note that `interface_` will hold a weak reference to `object`.
         * @param object A {@link Gio.DBusObject} or `null`.
         * @virtual
         */
        vfunc_set_object(object: (Gio.DBusObject | null)): void;
    }


    /**
     * @gir-type Alias
     */
    type ChooserIface = typeof Chooser;

    /**
     * @gir-type Alias
     */
    type ChooserProxyClass = typeof ChooserProxy;

    /**
     * @gir-type Struct
     */
    abstract class ChooserProxyPrivate {
        static $gtype: GObject.GType<ChooserProxyPrivate>;
    }


    /**
     * @gir-type Alias
     */
    type ChooserSkeletonClass = typeof ChooserSkeleton;

    /**
     * @gir-type Struct
     */
    abstract class ChooserSkeletonPrivate {
        static $gtype: GObject.GType<ChooserSkeletonPrivate>;
    }


    /**
     * @gir-type Alias
     */
    type ClientClass = typeof Client;

    /**
     * @gir-type Alias
     */
    type GreeterIface = typeof Greeter;

    /**
     * @gir-type Alias
     */
    type GreeterProxyClass = typeof GreeterProxy;

    /**
     * @gir-type Struct
     */
    abstract class GreeterProxyPrivate {
        static $gtype: GObject.GType<GreeterProxyPrivate>;
    }


    /**
     * @gir-type Alias
     */
    type GreeterSkeletonClass = typeof GreeterSkeleton;

    /**
     * @gir-type Struct
     */
    abstract class GreeterSkeletonPrivate {
        static $gtype: GObject.GType<GreeterSkeletonPrivate>;
    }


    /**
     * @gir-type Alias
     */
    type ManagerIface = typeof Manager;

    /**
     * @gir-type Alias
     */
    type ManagerProxyClass = typeof ManagerProxy;

    /**
     * @gir-type Struct
     */
    abstract class ManagerProxyPrivate {
        static $gtype: GObject.GType<ManagerProxyPrivate>;
    }


    /**
     * @gir-type Alias
     */
    type ManagerSkeletonClass = typeof ManagerSkeleton;

    /**
     * @gir-type Struct
     */
    abstract class ManagerSkeletonPrivate {
        static $gtype: GObject.GType<ManagerSkeletonPrivate>;
    }


    /**
     * @gir-type Alias
     */
    type RemoteGreeterIface = typeof RemoteGreeter;

    /**
     * @gir-type Alias
     */
    type RemoteGreeterProxyClass = typeof RemoteGreeterProxy;

    /**
     * @gir-type Struct
     */
    abstract class RemoteGreeterProxyPrivate {
        static $gtype: GObject.GType<RemoteGreeterProxyPrivate>;
    }


    /**
     * @gir-type Alias
     */
    type RemoteGreeterSkeletonClass = typeof RemoteGreeterSkeleton;

    /**
     * @gir-type Struct
     */
    abstract class RemoteGreeterSkeletonPrivate {
        static $gtype: GObject.GType<RemoteGreeterSkeletonPrivate>;
    }


    /**
     * @gir-type Alias
     */
    type UserVerifierChoiceListIface = typeof UserVerifierChoiceList;

    /**
     * @gir-type Alias
     */
    type UserVerifierChoiceListProxyClass = typeof UserVerifierChoiceListProxy;

    /**
     * @gir-type Struct
     */
    abstract class UserVerifierChoiceListProxyPrivate {
        static $gtype: GObject.GType<UserVerifierChoiceListProxyPrivate>;
    }


    /**
     * @gir-type Alias
     */
    type UserVerifierChoiceListSkeletonClass = typeof UserVerifierChoiceListSkeleton;

    /**
     * @gir-type Struct
     */
    abstract class UserVerifierChoiceListSkeletonPrivate {
        static $gtype: GObject.GType<UserVerifierChoiceListSkeletonPrivate>;
    }


    /**
     * @gir-type Alias
     */
    type UserVerifierIface = typeof UserVerifier;

    /**
     * @gir-type Alias
     */
    type UserVerifierProxyClass = typeof UserVerifierProxy;

    /**
     * @gir-type Struct
     */
    abstract class UserVerifierProxyPrivate {
        static $gtype: GObject.GType<UserVerifierProxyPrivate>;
    }


    /**
     * @gir-type Alias
     */
    type UserVerifierSkeletonClass = typeof UserVerifierSkeleton;

    /**
     * @gir-type Struct
     */
    abstract class UserVerifierSkeletonPrivate {
        static $gtype: GObject.GType<UserVerifierSkeletonPrivate>;
    }


    /**
     * @gir-type Alias
     */
    type WorkerManagerIface = typeof WorkerManager;

    /**
     * @gir-type Alias
     */
    type WorkerManagerProxyClass = typeof WorkerManagerProxy;

    /**
     * @gir-type Struct
     */
    abstract class WorkerManagerProxyPrivate {
        static $gtype: GObject.GType<WorkerManagerProxyPrivate>;
    }


    /**
     * @gir-type Alias
     */
    type WorkerManagerSkeletonClass = typeof WorkerManagerSkeleton;

    /**
     * @gir-type Struct
     */
    abstract class WorkerManagerSkeletonPrivate {
        static $gtype: GObject.GType<WorkerManagerSkeletonPrivate>;
    }


    namespace Chooser {
        /**
         * Interface for implementing Chooser.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface {

            // Virtual methods
            /**
             * @param invocation 
             * @virtual
             */
            vfunc_handle_disconnect(invocation: Gio.DBusMethodInvocation): boolean;

            /**
             * @param invocation 
             * @param arg_hostname 
             * @virtual
             */
            vfunc_handle_select_hostname(invocation: Gio.DBusMethodInvocation, arg_hostname: string): boolean;
        }


        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {

        }
    }

    export interface ChooserNamespace {
        $gtype: GObject.GType<Chooser>;
        prototype: Chooser;
        interface_info(): Gio.DBusInterfaceInfo;
        /**
        * @param klass 
        * @param property_id_begin 
        */
        override_properties(klass: typeof GObject.Object, property_id_begin: number): number;
    }
    /**
     * @gir-type Interface
     */
    interface Chooser extends GObject.Object, Chooser.Interface {

        // Methods
        /**
         * @param cancellable 
         */
        call_disconnect(cancellable: (Gio.Cancellable | null)): globalThis.Promise<boolean>;

        /**
         * @param cancellable 
         * @param callback 
         */
        call_disconnect(cancellable: (Gio.Cancellable | null), callback: (Gio.AsyncReadyCallback<this> | null)): void;

        /**
         * @param cancellable 
         * @param callback 
         */
        call_disconnect(cancellable: (Gio.Cancellable | null), callback?: (Gio.AsyncReadyCallback<this> | null)): (globalThis.Promise<boolean> | void);

        /**
         * @param res 
         */
        call_disconnect_finish(res: Gio.AsyncResult): boolean;

        /**
         * @param cancellable 
         */
        call_disconnect_sync(cancellable: (Gio.Cancellable | null)): boolean;

        /**
         * @param arg_hostname 
         * @param cancellable 
         */
        call_select_hostname(arg_hostname: string, cancellable: (Gio.Cancellable | null)): globalThis.Promise<boolean>;

        /**
         * @param arg_hostname 
         * @param cancellable 
         * @param callback 
         */
        call_select_hostname(arg_hostname: string, cancellable: (Gio.Cancellable | null), callback: (Gio.AsyncReadyCallback<this> | null)): void;

        /**
         * @param arg_hostname 
         * @param cancellable 
         * @param callback 
         */
        call_select_hostname(arg_hostname: string, cancellable: (Gio.Cancellable | null), callback?: (Gio.AsyncReadyCallback<this> | null)): (globalThis.Promise<boolean> | void);

        /**
         * @param res 
         */
        call_select_hostname_finish(res: Gio.AsyncResult): boolean;

        /**
         * @param arg_hostname 
         * @param cancellable 
         */
        call_select_hostname_sync(arg_hostname: string, cancellable: (Gio.Cancellable | null)): boolean;

        /**
         * @param invocation 
         */
        complete_disconnect(invocation: Gio.DBusMethodInvocation): void;

        /**
         * @param invocation 
         */
        complete_select_hostname(invocation: Gio.DBusMethodInvocation): void;
    }


    export const Chooser: ChooserNamespace & {
        new (): Chooser; // This allows `obj instanceof Chooser`
    };

    namespace Greeter {
        /**
         * Interface for implementing Greeter.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface {

            // Virtual methods
            /**
             * @param arg_language_name 
             * @virtual
             */
            vfunc_default_language_name_changed(arg_language_name: string): void;

            /**
             * @param arg_session_name 
             * @virtual
             */
            vfunc_default_session_name_changed(arg_session_name: string): void;

            /**
             * @param invocation 
             * @param arg_username 
             * @virtual
             */
            vfunc_handle_begin_auto_login(invocation: Gio.DBusMethodInvocation, arg_username: string): boolean;

            /**
             * @param invocation 
             * @virtual
             */
            vfunc_handle_get_timed_login_details(invocation: Gio.DBusMethodInvocation): boolean;

            /**
             * @param invocation 
             * @param arg_session 
             * @virtual
             */
            vfunc_handle_select_session(invocation: Gio.DBusMethodInvocation, arg_session: string): boolean;

            /**
             * @param invocation 
             * @param arg_username 
             * @virtual
             */
            vfunc_handle_select_user(invocation: Gio.DBusMethodInvocation, arg_username: string): boolean;

            /**
             * @param invocation 
             * @param arg_service_name 
             * @param arg_should_start_session 
             * @virtual
             */
            vfunc_handle_start_session_when_ready(invocation: Gio.DBusMethodInvocation, arg_service_name: string, arg_should_start_session: boolean): boolean;

            /**
             * @param arg_service_name 
             * @virtual
             */
            vfunc_reauthenticated(arg_service_name: string): void;

            /**
             * @param arg_username 
             * @virtual
             */
            vfunc_selected_user_changed(arg_username: string): void;

            /**
             * @param arg_service_name 
             * @virtual
             */
            vfunc_session_opened(arg_service_name: string): void;

            /**
             * @param arg_username 
             * @param arg_delay 
             * @virtual
             */
            vfunc_timed_login_requested(arg_username: string, arg_delay: number): void;
        }


        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {

        }
    }

    export interface GreeterNamespace {
        $gtype: GObject.GType<Greeter>;
        prototype: Greeter;
        interface_info(): Gio.DBusInterfaceInfo;
        /**
        * @param klass 
        * @param property_id_begin 
        */
        override_properties(klass: typeof GObject.Object, property_id_begin: number): number;
    }
    /**
     * @gir-type Interface
     */
    interface Greeter extends GObject.Object, Greeter.Interface {

        // Methods
        /**
         * @param arg_username 
         * @param cancellable 
         */
        call_begin_auto_login(arg_username: string, cancellable: (Gio.Cancellable | null)): globalThis.Promise<boolean>;

        /**
         * @param arg_username 
         * @param cancellable 
         * @param callback 
         */
        call_begin_auto_login(arg_username: string, cancellable: (Gio.Cancellable | null), callback: (Gio.AsyncReadyCallback<this> | null)): void;

        /**
         * @param arg_username 
         * @param cancellable 
         * @param callback 
         */
        call_begin_auto_login(arg_username: string, cancellable: (Gio.Cancellable | null), callback?: (Gio.AsyncReadyCallback<this> | null)): (globalThis.Promise<boolean> | void);

        /**
         * @param res 
         */
        call_begin_auto_login_finish(res: Gio.AsyncResult): boolean;

        /**
         * @param arg_username 
         * @param cancellable 
         */
        call_begin_auto_login_sync(arg_username: string, cancellable: (Gio.Cancellable | null)): boolean;

        /**
         * @param cancellable 
         */
        call_get_timed_login_details(cancellable: (Gio.Cancellable | null)): globalThis.Promise<boolean>;

        /**
         * @param cancellable 
         * @param callback 
         */
        call_get_timed_login_details(cancellable: (Gio.Cancellable | null), callback: (Gio.AsyncReadyCallback<this> | null)): void;

        /**
         * @param cancellable 
         * @param callback 
         */
        call_get_timed_login_details(cancellable: (Gio.Cancellable | null), callback?: (Gio.AsyncReadyCallback<this> | null)): (globalThis.Promise<boolean> | void);

        /**
         * @param out_enabled 
         * @param out_username 
         * @param out_delay 
         * @param res 
         */
        call_get_timed_login_details_finish(out_enabled: boolean, out_username: string, out_delay: number, res: Gio.AsyncResult): boolean;

        /**
         * @param out_enabled 
         * @param out_username 
         * @param out_delay 
         * @param cancellable 
         */
        call_get_timed_login_details_sync(out_enabled: boolean, out_username: string, out_delay: number, cancellable: (Gio.Cancellable | null)): boolean;

        /**
         * @param arg_session 
         * @param cancellable 
         */
        call_select_session(arg_session: string, cancellable: (Gio.Cancellable | null)): globalThis.Promise<boolean>;

        /**
         * @param arg_session 
         * @param cancellable 
         * @param callback 
         */
        call_select_session(arg_session: string, cancellable: (Gio.Cancellable | null), callback: (Gio.AsyncReadyCallback<this> | null)): void;

        /**
         * @param arg_session 
         * @param cancellable 
         * @param callback 
         */
        call_select_session(arg_session: string, cancellable: (Gio.Cancellable | null), callback?: (Gio.AsyncReadyCallback<this> | null)): (globalThis.Promise<boolean> | void);

        /**
         * @param res 
         */
        call_select_session_finish(res: Gio.AsyncResult): boolean;

        /**
         * @param arg_session 
         * @param cancellable 
         */
        call_select_session_sync(arg_session: string, cancellable: (Gio.Cancellable | null)): boolean;

        /**
         * @param arg_username 
         * @param cancellable 
         */
        call_select_user(arg_username: string, cancellable: (Gio.Cancellable | null)): globalThis.Promise<boolean>;

        /**
         * @param arg_username 
         * @param cancellable 
         * @param callback 
         */
        call_select_user(arg_username: string, cancellable: (Gio.Cancellable | null), callback: (Gio.AsyncReadyCallback<this> | null)): void;

        /**
         * @param arg_username 
         * @param cancellable 
         * @param callback 
         */
        call_select_user(arg_username: string, cancellable: (Gio.Cancellable | null), callback?: (Gio.AsyncReadyCallback<this> | null)): (globalThis.Promise<boolean> | void);

        /**
         * @param res 
         */
        call_select_user_finish(res: Gio.AsyncResult): boolean;

        /**
         * @param arg_username 
         * @param cancellable 
         */
        call_select_user_sync(arg_username: string, cancellable: (Gio.Cancellable | null)): boolean;

        /**
         * @param arg_service_name 
         * @param arg_should_start_session 
         * @param cancellable 
         */
        call_start_session_when_ready(arg_service_name: string, arg_should_start_session: boolean, cancellable: (Gio.Cancellable | null)): globalThis.Promise<boolean>;

        /**
         * @param arg_service_name 
         * @param arg_should_start_session 
         * @param cancellable 
         * @param callback 
         */
        call_start_session_when_ready(arg_service_name: string, arg_should_start_session: boolean, cancellable: (Gio.Cancellable | null), callback: (Gio.AsyncReadyCallback<this> | null)): void;

        /**
         * @param arg_service_name 
         * @param arg_should_start_session 
         * @param cancellable 
         * @param callback 
         */
        call_start_session_when_ready(arg_service_name: string, arg_should_start_session: boolean, cancellable: (Gio.Cancellable | null), callback?: (Gio.AsyncReadyCallback<this> | null)): (globalThis.Promise<boolean> | void);

        /**
         * @param res 
         */
        call_start_session_when_ready_finish(res: Gio.AsyncResult): boolean;

        /**
         * @param arg_service_name 
         * @param arg_should_start_session 
         * @param cancellable 
         */
        call_start_session_when_ready_sync(arg_service_name: string, arg_should_start_session: boolean, cancellable: (Gio.Cancellable | null)): boolean;

        /**
         * @param invocation 
         */
        complete_begin_auto_login(invocation: Gio.DBusMethodInvocation): void;

        /**
         * @param invocation 
         * @param enabled 
         * @param username 
         * @param delay 
         */
        complete_get_timed_login_details(invocation: Gio.DBusMethodInvocation, enabled: boolean, username: string, delay: number): void;

        /**
         * @param invocation 
         */
        complete_select_session(invocation: Gio.DBusMethodInvocation): void;

        /**
         * @param invocation 
         */
        complete_select_user(invocation: Gio.DBusMethodInvocation): void;

        /**
         * @param invocation 
         */
        complete_start_session_when_ready(invocation: Gio.DBusMethodInvocation): void;

        /**
         * @param arg_language_name 
         */
        emit_default_language_name_changed(arg_language_name: string): void;

        /**
         * @param arg_session_name 
         */
        emit_default_session_name_changed(arg_session_name: string): void;

        /**
         * @param arg_service_name 
         */
        emit_reauthenticated(arg_service_name: string): void;

        /**
         * @param arg_username 
         */
        emit_selected_user_changed(arg_username: string): void;

        /**
         * @param arg_service_name 
         */
        emit_session_opened(arg_service_name: string): void;

        /**
         * @param arg_username 
         * @param arg_delay 
         */
        emit_timed_login_requested(arg_username: string, arg_delay: number): void;
    }


    export const Greeter: GreeterNamespace & {
        new (): Greeter; // This allows `obj instanceof Greeter`
    };

    namespace Manager {
        /**
         * Interface for implementing Manager.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface {

            // Virtual methods
            /**
             * @virtual
             */
            vfunc_get_version(): string;

            /**
             * @param invocation 
             * @param arg_username 
             * @virtual
             */
            vfunc_handle_open_reauthentication_channel(invocation: Gio.DBusMethodInvocation, arg_username: string): boolean;

            /**
             * @param invocation 
             * @virtual
             */
            vfunc_handle_open_session(invocation: Gio.DBusMethodInvocation): boolean;

            /**
             * @param invocation 
             * @param arg_details 
             * @virtual
             */
            vfunc_handle_register_display(invocation: Gio.DBusMethodInvocation, arg_details: GLib.Variant): boolean;

            /**
             * @param invocation 
             * @param arg_details 
             * @virtual
             */
            vfunc_handle_register_session(invocation: Gio.DBusMethodInvocation, arg_details: GLib.Variant): boolean;
        }


        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            version: string;
        }
    }

    export interface ManagerNamespace {
        $gtype: GObject.GType<Manager>;
        prototype: Manager;
        interface_info(): Gio.DBusInterfaceInfo;
        /**
        * @param klass 
        * @param property_id_begin 
        */
        override_properties(klass: typeof GObject.Object, property_id_begin: number): number;
    }
    /**
     * @gir-type Interface
     */
    interface Manager extends GObject.Object, Manager.Interface {

        // Properties
        /**
         * @default null
         */
        get version(): string;
        set version(val: string);

        // Methods
        /**
         * @param arg_username 
         * @param cancellable 
         */
        call_open_reauthentication_channel(arg_username: string, cancellable: (Gio.Cancellable | null)): globalThis.Promise<boolean>;

        /**
         * @param arg_username 
         * @param cancellable 
         * @param callback 
         */
        call_open_reauthentication_channel(arg_username: string, cancellable: (Gio.Cancellable | null), callback: (Gio.AsyncReadyCallback<this> | null)): void;

        /**
         * @param arg_username 
         * @param cancellable 
         * @param callback 
         */
        call_open_reauthentication_channel(arg_username: string, cancellable: (Gio.Cancellable | null), callback?: (Gio.AsyncReadyCallback<this> | null)): (globalThis.Promise<boolean> | void);

        /**
         * @param out_address 
         * @param res 
         */
        call_open_reauthentication_channel_finish(out_address: string, res: Gio.AsyncResult): boolean;

        /**
         * @param arg_username 
         * @param out_address 
         * @param cancellable 
         */
        call_open_reauthentication_channel_sync(arg_username: string, out_address: string, cancellable: (Gio.Cancellable | null)): boolean;

        /**
         * @param cancellable 
         */
        call_open_session(cancellable: (Gio.Cancellable | null)): globalThis.Promise<boolean>;

        /**
         * @param cancellable 
         * @param callback 
         */
        call_open_session(cancellable: (Gio.Cancellable | null), callback: (Gio.AsyncReadyCallback<this> | null)): void;

        /**
         * @param cancellable 
         * @param callback 
         */
        call_open_session(cancellable: (Gio.Cancellable | null), callback?: (Gio.AsyncReadyCallback<this> | null)): (globalThis.Promise<boolean> | void);

        /**
         * @param out_address 
         * @param res 
         */
        call_open_session_finish(out_address: string, res: Gio.AsyncResult): boolean;

        /**
         * @param out_address 
         * @param cancellable 
         */
        call_open_session_sync(out_address: string, cancellable: (Gio.Cancellable | null)): boolean;

        /**
         * @param arg_details 
         * @param cancellable 
         */
        call_register_display(arg_details: GLib.Variant, cancellable: (Gio.Cancellable | null)): globalThis.Promise<boolean>;

        /**
         * @param arg_details 
         * @param cancellable 
         * @param callback 
         */
        call_register_display(arg_details: GLib.Variant, cancellable: (Gio.Cancellable | null), callback: (Gio.AsyncReadyCallback<this> | null)): void;

        /**
         * @param arg_details 
         * @param cancellable 
         * @param callback 
         */
        call_register_display(arg_details: GLib.Variant, cancellable: (Gio.Cancellable | null), callback?: (Gio.AsyncReadyCallback<this> | null)): (globalThis.Promise<boolean> | void);

        /**
         * @param res 
         */
        call_register_display_finish(res: Gio.AsyncResult): boolean;

        /**
         * @param arg_details 
         * @param cancellable 
         */
        call_register_display_sync(arg_details: GLib.Variant, cancellable: (Gio.Cancellable | null)): boolean;

        /**
         * @param arg_details 
         * @param cancellable 
         */
        call_register_session(arg_details: GLib.Variant, cancellable: (Gio.Cancellable | null)): globalThis.Promise<boolean>;

        /**
         * @param arg_details 
         * @param cancellable 
         * @param callback 
         */
        call_register_session(arg_details: GLib.Variant, cancellable: (Gio.Cancellable | null), callback: (Gio.AsyncReadyCallback<this> | null)): void;

        /**
         * @param arg_details 
         * @param cancellable 
         * @param callback 
         */
        call_register_session(arg_details: GLib.Variant, cancellable: (Gio.Cancellable | null), callback?: (Gio.AsyncReadyCallback<this> | null)): (globalThis.Promise<boolean> | void);

        /**
         * @param res 
         */
        call_register_session_finish(res: Gio.AsyncResult): boolean;

        /**
         * @param arg_details 
         * @param cancellable 
         */
        call_register_session_sync(arg_details: GLib.Variant, cancellable: (Gio.Cancellable | null)): boolean;

        /**
         * @param invocation 
         * @param address 
         */
        complete_open_reauthentication_channel(invocation: Gio.DBusMethodInvocation, address: string): void;

        /**
         * @param invocation 
         * @param address 
         */
        complete_open_session(invocation: Gio.DBusMethodInvocation, address: string): void;

        /**
         * @param invocation 
         */
        complete_register_display(invocation: Gio.DBusMethodInvocation): void;

        /**
         * @param invocation 
         */
        complete_register_session(invocation: Gio.DBusMethodInvocation): void;

        dup_version(): string;

        get_version(): string;

        /**
         * @param value 
         */
        set_version(value: string): void;
    }


    export const Manager: ManagerNamespace & {
        new (): Manager; // This allows `obj instanceof Manager`
    };

    namespace RemoteGreeter {
        /**
         * Interface for implementing RemoteGreeter.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface {

            // Virtual methods
            /**
             * @param invocation 
             * @virtual
             */
            vfunc_handle_disconnect(invocation: Gio.DBusMethodInvocation): boolean;
        }


        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {

        }
    }

    export interface RemoteGreeterNamespace {
        $gtype: GObject.GType<RemoteGreeter>;
        prototype: RemoteGreeter;
        interface_info(): Gio.DBusInterfaceInfo;
        /**
        * @param klass 
        * @param property_id_begin 
        */
        override_properties(klass: typeof GObject.Object, property_id_begin: number): number;
    }
    /**
     * @gir-type Interface
     */
    interface RemoteGreeter extends GObject.Object, RemoteGreeter.Interface {

        // Methods
        /**
         * @param cancellable 
         */
        call_disconnect(cancellable: (Gio.Cancellable | null)): globalThis.Promise<boolean>;

        /**
         * @param cancellable 
         * @param callback 
         */
        call_disconnect(cancellable: (Gio.Cancellable | null), callback: (Gio.AsyncReadyCallback<this> | null)): void;

        /**
         * @param cancellable 
         * @param callback 
         */
        call_disconnect(cancellable: (Gio.Cancellable | null), callback?: (Gio.AsyncReadyCallback<this> | null)): (globalThis.Promise<boolean> | void);

        /**
         * @param res 
         */
        call_disconnect_finish(res: Gio.AsyncResult): boolean;

        /**
         * @param cancellable 
         */
        call_disconnect_sync(cancellable: (Gio.Cancellable | null)): boolean;

        /**
         * @param invocation 
         */
        complete_disconnect(invocation: Gio.DBusMethodInvocation): void;
    }


    export const RemoteGreeter: RemoteGreeterNamespace & {
        new (): RemoteGreeter; // This allows `obj instanceof RemoteGreeter`
    };

    namespace UserVerifier {
        /**
         * Interface for implementing UserVerifier.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface {

            // Virtual methods
            /**
             * @param arg_service_name 
             * @virtual
             */
            vfunc_conversation_started(arg_service_name: string): void;

            /**
             * @param arg_service_name 
             * @virtual
             */
            vfunc_conversation_stopped(arg_service_name: string): void;

            /**
             * @param invocation 
             * @param arg_service_name 
             * @param arg_answer 
             * @virtual
             */
            vfunc_handle_answer_query(invocation: Gio.DBusMethodInvocation, arg_service_name: string, arg_answer: string): boolean;

            /**
             * @param invocation 
             * @param arg_service_name 
             * @virtual
             */
            vfunc_handle_begin_verification(invocation: Gio.DBusMethodInvocation, arg_service_name: string): boolean;

            /**
             * @param invocation 
             * @param arg_service_name 
             * @param arg_username 
             * @virtual
             */
            vfunc_handle_begin_verification_for_user(invocation: Gio.DBusMethodInvocation, arg_service_name: string, arg_username: string): boolean;

            /**
             * @param invocation 
             * @virtual
             */
            vfunc_handle_cancel(invocation: Gio.DBusMethodInvocation): boolean;

            /**
             * @param invocation 
             * @param arg_extensions 
             * @virtual
             */
            vfunc_handle_enable_extensions(invocation: Gio.DBusMethodInvocation, arg_extensions: string): boolean;

            /**
             * @param arg_service_name 
             * @param arg_info 
             * @virtual
             */
            vfunc_info(arg_service_name: string, arg_info: string): void;

            /**
             * @param arg_service_name 
             * @param arg_query 
             * @virtual
             */
            vfunc_info_query(arg_service_name: string, arg_query: string): void;

            /**
             * @param arg_service_name 
             * @param arg_problem 
             * @virtual
             */
            vfunc_problem(arg_service_name: string, arg_problem: string): void;

            /**
             * @param arg_pid_of_caller 
             * @virtual
             */
            vfunc_reauthentication_started(arg_pid_of_caller: number): void;

            /**
             * @virtual
             */
            vfunc_reset(): void;

            /**
             * @param arg_service_name 
             * @param arg_query 
             * @virtual
             */
            vfunc_secret_info_query(arg_service_name: string, arg_query: string): void;

            /**
             * @param arg_service_name 
             * @param arg_message 
             * @virtual
             */
            vfunc_service_unavailable(arg_service_name: string, arg_message: string): void;

            /**
             * @param arg_service_name 
             * @virtual
             */
            vfunc_verification_complete(arg_service_name: string): void;

            /**
             * @param arg_service_name 
             * @virtual
             */
            vfunc_verification_failed(arg_service_name: string): void;
        }


        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {

        }
    }

    export interface UserVerifierNamespace {
        $gtype: GObject.GType<UserVerifier>;
        prototype: UserVerifier;
        interface_info(): Gio.DBusInterfaceInfo;
        /**
        * @param klass 
        * @param property_id_begin 
        */
        override_properties(klass: typeof GObject.Object, property_id_begin: number): number;
    }
    /**
     * @gir-type Interface
     */
    interface UserVerifier extends GObject.Object, UserVerifier.Interface {

        // Methods
        /**
         * @param arg_service_name 
         * @param arg_answer 
         * @param cancellable 
         */
        call_answer_query(arg_service_name: string, arg_answer: string, cancellable: (Gio.Cancellable | null)): globalThis.Promise<boolean>;

        /**
         * @param arg_service_name 
         * @param arg_answer 
         * @param cancellable 
         * @param callback 
         */
        call_answer_query(arg_service_name: string, arg_answer: string, cancellable: (Gio.Cancellable | null), callback: (Gio.AsyncReadyCallback<this> | null)): void;

        /**
         * @param arg_service_name 
         * @param arg_answer 
         * @param cancellable 
         * @param callback 
         */
        call_answer_query(arg_service_name: string, arg_answer: string, cancellable: (Gio.Cancellable | null), callback?: (Gio.AsyncReadyCallback<this> | null)): (globalThis.Promise<boolean> | void);

        /**
         * @param res 
         */
        call_answer_query_finish(res: Gio.AsyncResult): boolean;

        /**
         * @param arg_service_name 
         * @param arg_answer 
         * @param cancellable 
         */
        call_answer_query_sync(arg_service_name: string, arg_answer: string, cancellable: (Gio.Cancellable | null)): boolean;

        /**
         * @param arg_service_name 
         * @param cancellable 
         */
        call_begin_verification(arg_service_name: string, cancellable: (Gio.Cancellable | null)): globalThis.Promise<boolean>;

        /**
         * @param arg_service_name 
         * @param cancellable 
         * @param callback 
         */
        call_begin_verification(arg_service_name: string, cancellable: (Gio.Cancellable | null), callback: (Gio.AsyncReadyCallback<this> | null)): void;

        /**
         * @param arg_service_name 
         * @param cancellable 
         * @param callback 
         */
        call_begin_verification(arg_service_name: string, cancellable: (Gio.Cancellable | null), callback?: (Gio.AsyncReadyCallback<this> | null)): (globalThis.Promise<boolean> | void);

        /**
         * @param res 
         */
        call_begin_verification_finish(res: Gio.AsyncResult): boolean;

        /**
         * @param arg_service_name 
         * @param arg_username 
         * @param cancellable 
         */
        call_begin_verification_for_user(arg_service_name: string, arg_username: string, cancellable: (Gio.Cancellable | null)): globalThis.Promise<boolean>;

        /**
         * @param arg_service_name 
         * @param arg_username 
         * @param cancellable 
         * @param callback 
         */
        call_begin_verification_for_user(arg_service_name: string, arg_username: string, cancellable: (Gio.Cancellable | null), callback: (Gio.AsyncReadyCallback<this> | null)): void;

        /**
         * @param arg_service_name 
         * @param arg_username 
         * @param cancellable 
         * @param callback 
         */
        call_begin_verification_for_user(arg_service_name: string, arg_username: string, cancellable: (Gio.Cancellable | null), callback?: (Gio.AsyncReadyCallback<this> | null)): (globalThis.Promise<boolean> | void);

        /**
         * @param res 
         */
        call_begin_verification_for_user_finish(res: Gio.AsyncResult): boolean;

        /**
         * @param arg_service_name 
         * @param arg_username 
         * @param cancellable 
         */
        call_begin_verification_for_user_sync(arg_service_name: string, arg_username: string, cancellable: (Gio.Cancellable | null)): boolean;

        /**
         * @param arg_service_name 
         * @param cancellable 
         */
        call_begin_verification_sync(arg_service_name: string, cancellable: (Gio.Cancellable | null)): boolean;

        /**
         * @param cancellable 
         */
        call_cancel(cancellable: (Gio.Cancellable | null)): globalThis.Promise<boolean>;

        /**
         * @param cancellable 
         * @param callback 
         */
        call_cancel(cancellable: (Gio.Cancellable | null), callback: (Gio.AsyncReadyCallback<this> | null)): void;

        /**
         * @param cancellable 
         * @param callback 
         */
        call_cancel(cancellable: (Gio.Cancellable | null), callback?: (Gio.AsyncReadyCallback<this> | null)): (globalThis.Promise<boolean> | void);

        /**
         * @param res 
         */
        call_cancel_finish(res: Gio.AsyncResult): boolean;

        /**
         * @param cancellable 
         */
        call_cancel_sync(cancellable: (Gio.Cancellable | null)): boolean;

        /**
         * @param arg_extensions 
         * @param cancellable 
         */
        call_enable_extensions(arg_extensions: string, cancellable: (Gio.Cancellable | null)): globalThis.Promise<boolean>;

        /**
         * @param arg_extensions 
         * @param cancellable 
         * @param callback 
         */
        call_enable_extensions(arg_extensions: string, cancellable: (Gio.Cancellable | null), callback: (Gio.AsyncReadyCallback<this> | null)): void;

        /**
         * @param arg_extensions 
         * @param cancellable 
         * @param callback 
         */
        call_enable_extensions(arg_extensions: string, cancellable: (Gio.Cancellable | null), callback?: (Gio.AsyncReadyCallback<this> | null)): (globalThis.Promise<boolean> | void);

        /**
         * @param res 
         */
        call_enable_extensions_finish(res: Gio.AsyncResult): boolean;

        /**
         * @param arg_extensions 
         * @param cancellable 
         */
        call_enable_extensions_sync(arg_extensions: string, cancellable: (Gio.Cancellable | null)): boolean;

        /**
         * @param invocation 
         */
        complete_answer_query(invocation: Gio.DBusMethodInvocation): void;

        /**
         * @param invocation 
         */
        complete_begin_verification(invocation: Gio.DBusMethodInvocation): void;

        /**
         * @param invocation 
         */
        complete_begin_verification_for_user(invocation: Gio.DBusMethodInvocation): void;

        /**
         * @param invocation 
         */
        complete_cancel(invocation: Gio.DBusMethodInvocation): void;

        /**
         * @param invocation 
         */
        complete_enable_extensions(invocation: Gio.DBusMethodInvocation): void;

        /**
         * @param arg_service_name 
         */
        emit_conversation_started(arg_service_name: string): void;

        /**
         * @param arg_service_name 
         */
        emit_conversation_stopped(arg_service_name: string): void;

        /**
         * @param arg_service_name 
         * @param arg_info 
         */
        emit_info(arg_service_name: string, arg_info: string): void;

        /**
         * @param arg_service_name 
         * @param arg_query 
         */
        emit_info_query(arg_service_name: string, arg_query: string): void;

        /**
         * @param arg_service_name 
         * @param arg_problem 
         */
        emit_problem(arg_service_name: string, arg_problem: string): void;

        /**
         * @param arg_pid_of_caller 
         */
        emit_reauthentication_started(arg_pid_of_caller: number): void;

        emit_reset(): void;

        /**
         * @param arg_service_name 
         * @param arg_query 
         */
        emit_secret_info_query(arg_service_name: string, arg_query: string): void;

        /**
         * @param arg_service_name 
         * @param arg_message 
         */
        emit_service_unavailable(arg_service_name: string, arg_message: string): void;

        /**
         * @param arg_service_name 
         */
        emit_verification_complete(arg_service_name: string): void;

        /**
         * @param arg_service_name 
         */
        emit_verification_failed(arg_service_name: string): void;
    }


    export const UserVerifier: UserVerifierNamespace & {
        new (): UserVerifier; // This allows `obj instanceof UserVerifier`
    };

    namespace UserVerifierChoiceList {
        /**
         * Interface for implementing UserVerifierChoiceList.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface {

            // Virtual methods
            /**
             * @param arg_service_name 
             * @param arg_prompt_message 
             * @param arg_list 
             * @virtual
             */
            vfunc_choice_query(arg_service_name: string, arg_prompt_message: string, arg_list: GLib.Variant): void;

            /**
             * @param invocation 
             * @param arg_service_name 
             * @param arg_choice 
             * @virtual
             */
            vfunc_handle_select_choice(invocation: Gio.DBusMethodInvocation, arg_service_name: string, arg_choice: string): boolean;
        }


        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {

        }
    }

    export interface UserVerifierChoiceListNamespace {
        $gtype: GObject.GType<UserVerifierChoiceList>;
        prototype: UserVerifierChoiceList;
        interface_info(): Gio.DBusInterfaceInfo;
        /**
        * @param klass 
        * @param property_id_begin 
        */
        override_properties(klass: typeof GObject.Object, property_id_begin: number): number;
    }
    /**
     * @gir-type Interface
     */
    interface UserVerifierChoiceList extends GObject.Object, UserVerifierChoiceList.Interface {

        // Methods
        /**
         * @param arg_service_name 
         * @param arg_choice 
         * @param cancellable 
         */
        call_select_choice(arg_service_name: string, arg_choice: string, cancellable: (Gio.Cancellable | null)): globalThis.Promise<boolean>;

        /**
         * @param arg_service_name 
         * @param arg_choice 
         * @param cancellable 
         * @param callback 
         */
        call_select_choice(arg_service_name: string, arg_choice: string, cancellable: (Gio.Cancellable | null), callback: (Gio.AsyncReadyCallback<this> | null)): void;

        /**
         * @param arg_service_name 
         * @param arg_choice 
         * @param cancellable 
         * @param callback 
         */
        call_select_choice(arg_service_name: string, arg_choice: string, cancellable: (Gio.Cancellable | null), callback?: (Gio.AsyncReadyCallback<this> | null)): (globalThis.Promise<boolean> | void);

        /**
         * @param res 
         */
        call_select_choice_finish(res: Gio.AsyncResult): boolean;

        /**
         * @param arg_service_name 
         * @param arg_choice 
         * @param cancellable 
         */
        call_select_choice_sync(arg_service_name: string, arg_choice: string, cancellable: (Gio.Cancellable | null)): boolean;

        /**
         * @param invocation 
         */
        complete_select_choice(invocation: Gio.DBusMethodInvocation): void;

        /**
         * @param arg_service_name 
         * @param arg_prompt_message 
         * @param arg_list 
         */
        emit_choice_query(arg_service_name: string, arg_prompt_message: string, arg_list: GLib.Variant): void;
    }


    export const UserVerifierChoiceList: UserVerifierChoiceListNamespace & {
        new (): UserVerifierChoiceList; // This allows `obj instanceof UserVerifierChoiceList`
    };

    namespace WorkerManager {
        /**
         * Interface for implementing WorkerManager.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface {

            // Virtual methods
            /**
             * @param invocation 
             * @param arg_service_name 
             * @param arg_prompt_message 
             * @param arg_query 
             * @virtual
             */
            vfunc_handle_choice_list_query(invocation: Gio.DBusMethodInvocation, arg_service_name: string, arg_prompt_message: string, arg_query: GLib.Variant): boolean;

            /**
             * @param invocation 
             * @virtual
             */
            vfunc_handle_hello(invocation: Gio.DBusMethodInvocation): boolean;

            /**
             * @param invocation 
             * @param arg_service_name 
             * @param arg_info 
             * @virtual
             */
            vfunc_handle_info(invocation: Gio.DBusMethodInvocation, arg_service_name: string, arg_info: string): boolean;

            /**
             * @param invocation 
             * @param arg_service_name 
             * @param arg_query 
             * @virtual
             */
            vfunc_handle_info_query(invocation: Gio.DBusMethodInvocation, arg_service_name: string, arg_query: string): boolean;

            /**
             * @param invocation 
             * @param arg_service_name 
             * @param arg_problem 
             * @virtual
             */
            vfunc_handle_problem(invocation: Gio.DBusMethodInvocation, arg_service_name: string, arg_problem: string): boolean;

            /**
             * @param invocation 
             * @param arg_service_name 
             * @param arg_query 
             * @virtual
             */
            vfunc_handle_secret_info_query(invocation: Gio.DBusMethodInvocation, arg_service_name: string, arg_query: string): boolean;
        }


        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {

        }
    }

    export interface WorkerManagerNamespace {
        $gtype: GObject.GType<WorkerManager>;
        prototype: WorkerManager;
        interface_info(): Gio.DBusInterfaceInfo;
        /**
        * @param klass 
        * @param property_id_begin 
        */
        override_properties(klass: typeof GObject.Object, property_id_begin: number): number;
    }
    /**
     * @gir-type Interface
     */
    interface WorkerManager extends GObject.Object, WorkerManager.Interface {

        // Methods
        /**
         * @param arg_service_name 
         * @param arg_prompt_message 
         * @param arg_query 
         * @param cancellable 
         */
        call_choice_list_query(arg_service_name: string, arg_prompt_message: string, arg_query: GLib.Variant, cancellable: (Gio.Cancellable | null)): globalThis.Promise<boolean>;

        /**
         * @param arg_service_name 
         * @param arg_prompt_message 
         * @param arg_query 
         * @param cancellable 
         * @param callback 
         */
        call_choice_list_query(arg_service_name: string, arg_prompt_message: string, arg_query: GLib.Variant, cancellable: (Gio.Cancellable | null), callback: (Gio.AsyncReadyCallback<this> | null)): void;

        /**
         * @param arg_service_name 
         * @param arg_prompt_message 
         * @param arg_query 
         * @param cancellable 
         * @param callback 
         */
        call_choice_list_query(arg_service_name: string, arg_prompt_message: string, arg_query: GLib.Variant, cancellable: (Gio.Cancellable | null), callback?: (Gio.AsyncReadyCallback<this> | null)): (globalThis.Promise<boolean> | void);

        /**
         * @param out_answer 
         * @param res 
         */
        call_choice_list_query_finish(out_answer: string, res: Gio.AsyncResult): boolean;

        /**
         * @param arg_service_name 
         * @param arg_prompt_message 
         * @param arg_query 
         * @param out_answer 
         * @param cancellable 
         */
        call_choice_list_query_sync(arg_service_name: string, arg_prompt_message: string, arg_query: GLib.Variant, out_answer: string, cancellable: (Gio.Cancellable | null)): boolean;

        /**
         * @param cancellable 
         */
        call_hello(cancellable: (Gio.Cancellable | null)): globalThis.Promise<boolean>;

        /**
         * @param cancellable 
         * @param callback 
         */
        call_hello(cancellable: (Gio.Cancellable | null), callback: (Gio.AsyncReadyCallback<this> | null)): void;

        /**
         * @param cancellable 
         * @param callback 
         */
        call_hello(cancellable: (Gio.Cancellable | null), callback?: (Gio.AsyncReadyCallback<this> | null)): (globalThis.Promise<boolean> | void);

        /**
         * @param res 
         */
        call_hello_finish(res: Gio.AsyncResult): boolean;

        /**
         * @param cancellable 
         */
        call_hello_sync(cancellable: (Gio.Cancellable | null)): boolean;

        /**
         * @param arg_service_name 
         * @param arg_info 
         * @param cancellable 
         */
        call_info(arg_service_name: string, arg_info: string, cancellable: (Gio.Cancellable | null)): globalThis.Promise<boolean>;

        /**
         * @param arg_service_name 
         * @param arg_info 
         * @param cancellable 
         * @param callback 
         */
        call_info(arg_service_name: string, arg_info: string, cancellable: (Gio.Cancellable | null), callback: (Gio.AsyncReadyCallback<this> | null)): void;

        /**
         * @param arg_service_name 
         * @param arg_info 
         * @param cancellable 
         * @param callback 
         */
        call_info(arg_service_name: string, arg_info: string, cancellable: (Gio.Cancellable | null), callback?: (Gio.AsyncReadyCallback<this> | null)): (globalThis.Promise<boolean> | void);

        /**
         * @param res 
         */
        call_info_finish(res: Gio.AsyncResult): boolean;

        /**
         * @param arg_service_name 
         * @param arg_query 
         * @param cancellable 
         */
        call_info_query(arg_service_name: string, arg_query: string, cancellable: (Gio.Cancellable | null)): globalThis.Promise<boolean>;

        /**
         * @param arg_service_name 
         * @param arg_query 
         * @param cancellable 
         * @param callback 
         */
        call_info_query(arg_service_name: string, arg_query: string, cancellable: (Gio.Cancellable | null), callback: (Gio.AsyncReadyCallback<this> | null)): void;

        /**
         * @param arg_service_name 
         * @param arg_query 
         * @param cancellable 
         * @param callback 
         */
        call_info_query(arg_service_name: string, arg_query: string, cancellable: (Gio.Cancellable | null), callback?: (Gio.AsyncReadyCallback<this> | null)): (globalThis.Promise<boolean> | void);

        /**
         * @param out_answer 
         * @param res 
         */
        call_info_query_finish(out_answer: string, res: Gio.AsyncResult): boolean;

        /**
         * @param arg_service_name 
         * @param arg_query 
         * @param out_answer 
         * @param cancellable 
         */
        call_info_query_sync(arg_service_name: string, arg_query: string, out_answer: string, cancellable: (Gio.Cancellable | null)): boolean;

        /**
         * @param arg_service_name 
         * @param arg_info 
         * @param cancellable 
         */
        call_info_sync(arg_service_name: string, arg_info: string, cancellable: (Gio.Cancellable | null)): boolean;

        /**
         * @param arg_service_name 
         * @param arg_problem 
         * @param cancellable 
         */
        call_problem(arg_service_name: string, arg_problem: string, cancellable: (Gio.Cancellable | null)): globalThis.Promise<boolean>;

        /**
         * @param arg_service_name 
         * @param arg_problem 
         * @param cancellable 
         * @param callback 
         */
        call_problem(arg_service_name: string, arg_problem: string, cancellable: (Gio.Cancellable | null), callback: (Gio.AsyncReadyCallback<this> | null)): void;

        /**
         * @param arg_service_name 
         * @param arg_problem 
         * @param cancellable 
         * @param callback 
         */
        call_problem(arg_service_name: string, arg_problem: string, cancellable: (Gio.Cancellable | null), callback?: (Gio.AsyncReadyCallback<this> | null)): (globalThis.Promise<boolean> | void);

        /**
         * @param res 
         */
        call_problem_finish(res: Gio.AsyncResult): boolean;

        /**
         * @param arg_service_name 
         * @param arg_problem 
         * @param cancellable 
         */
        call_problem_sync(arg_service_name: string, arg_problem: string, cancellable: (Gio.Cancellable | null)): boolean;

        /**
         * @param arg_service_name 
         * @param arg_query 
         * @param cancellable 
         */
        call_secret_info_query(arg_service_name: string, arg_query: string, cancellable: (Gio.Cancellable | null)): globalThis.Promise<boolean>;

        /**
         * @param arg_service_name 
         * @param arg_query 
         * @param cancellable 
         * @param callback 
         */
        call_secret_info_query(arg_service_name: string, arg_query: string, cancellable: (Gio.Cancellable | null), callback: (Gio.AsyncReadyCallback<this> | null)): void;

        /**
         * @param arg_service_name 
         * @param arg_query 
         * @param cancellable 
         * @param callback 
         */
        call_secret_info_query(arg_service_name: string, arg_query: string, cancellable: (Gio.Cancellable | null), callback?: (Gio.AsyncReadyCallback<this> | null)): (globalThis.Promise<boolean> | void);

        /**
         * @param out_answer 
         * @param res 
         */
        call_secret_info_query_finish(out_answer: string, res: Gio.AsyncResult): boolean;

        /**
         * @param arg_service_name 
         * @param arg_query 
         * @param out_answer 
         * @param cancellable 
         */
        call_secret_info_query_sync(arg_service_name: string, arg_query: string, out_answer: string, cancellable: (Gio.Cancellable | null)): boolean;

        /**
         * @param invocation 
         * @param answer 
         */
        complete_choice_list_query(invocation: Gio.DBusMethodInvocation, answer: string): void;

        /**
         * @param invocation 
         */
        complete_hello(invocation: Gio.DBusMethodInvocation): void;

        /**
         * @param invocation 
         */
        complete_info(invocation: Gio.DBusMethodInvocation): void;

        /**
         * @param invocation 
         * @param answer 
         */
        complete_info_query(invocation: Gio.DBusMethodInvocation, answer: string): void;

        /**
         * @param invocation 
         */
        complete_problem(invocation: Gio.DBusMethodInvocation): void;

        /**
         * @param invocation 
         * @param answer 
         */
        complete_secret_info_query(invocation: Gio.DBusMethodInvocation, answer: string): void;
    }


    export const WorkerManager: WorkerManagerNamespace & {
        new (): WorkerManager; // This allows `obj instanceof WorkerManager`
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

export default Gdm;

// END
