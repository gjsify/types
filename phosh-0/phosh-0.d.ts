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
import type NM from '@girs/nm-1.0';
import type Gio from '@girs/gio-2.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type GModule from '@girs/gmodule-2.0';
import type Handy from '@girs/handy-1';
import type Gtk from '@girs/gtk-3.0';
import type xlib from '@girs/xlib-2.0';
import type Gdk from '@girs/gdk-3.0';
import type cairo from 'cairo';
import type Pango from '@girs/pango-1.0';
import type HarfBuzz from '@girs/harfbuzz-0.0';
import type freetype2 from '@girs/freetype2-2.0';
import type GdkPixbuf from '@girs/gdkpixbuf-2.0';
import type Atk from '@girs/atk-1.0';
import type GnomeDesktop from '@girs/gnomedesktop-3.0';
import type GDesktopEnums from '@girs/gdesktopenums-3.0';
import type GnomeBluetooth from '@girs/gnomebluetooth-3.0';
import type Gcr from '@girs/gcr-3';
import type Gck from '@girs/gck-1';

export namespace Phosh {
    /**
     * Phosh-0
     */

    /**
     * @gir-type Enum
     */
    export namespace LockscreenPage {
        export const $gtype: GObject.GType<LockscreenPage>;
    }

    /**
     * Indicates which page is currently shown on the lockscreen.
     *
     * This helps `PhoshGnomeShellManager` to decide when to emit
     * AcceleratorActivated events over DBus
     * @gir-type Enum
     */
    enum LockscreenPage {
        /**
         * The info page (clock, notifications, MPRIS, etc)
         */
        INFO,
        /**
         * The extra page (an extension point used by Lockscreen subclasses)
         */
        EXTRA,
        /**
         * The unlock page (where PIN is entered)
         */
        UNLOCK,
    }

    /**
     * Gets a machine-readable description of the <link linkend="gdbus-interface-org-gnome-Shell-Screenshot.top_of_page">org.gnome.Shell.Screenshot</link> D-Bus interface.
     * @returns A {@link Gio.DBusInterfaceInfo}. Do not free.
     */
    function dbus_screenshot_interface_info(): Gio.DBusInterfaceInfo;
    /**
     * Overrides all {@link GObject.Object} properties in the {@link Phosh.DBusScreenshot} interface for a concrete class.
     * The properties are overridden in the order they are defined.
     * @param klass The class structure for a {@link GObject.Object} derived class.
     * @param property_id_begin The property id to assign to the first overridden property.
     * @returns The last property id.
     */
    function dbus_screenshot_override_properties(klass: typeof GObject.Object, property_id_begin: number): number;
    namespace DBusScreenshotProxy {
        // Signal signatures
        interface SignalSignatures extends Gio.DBusProxy.SignalSignatures {
            'notify::g-bus-type': (pspec: GObject.ParamSpec) => void;
            'notify::g-connection': (pspec: GObject.ParamSpec) => void;
            'notify::g-default-timeout': (pspec: GObject.ParamSpec) => void;
            'notify::g-flags': (pspec: GObject.ParamSpec) => void;
            'notify::g-interface-info': (pspec: GObject.ParamSpec) => void;
            'notify::g-interface-name': (pspec: GObject.ParamSpec) => void;
            'notify::g-name': (pspec: GObject.ParamSpec) => void;
            'notify::g-name-owner': (pspec: GObject.ParamSpec) => void;
            'notify::g-object-path': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps
            extends
                Gio.DBusProxy.ConstructorProps,
                Gio.AsyncInitable.ConstructorProps,
                Gio.DBusInterface.ConstructorProps,
                Gio.Initable.ConstructorProps,
                DBusScreenshot.ConstructorProps {}
    }

    /**
     * The {@link Phosh.DBusScreenshotProxy} structure contains only private data and should only be accessed using the provided API.
     * @gir-type Class
     */
    class DBusScreenshotProxy
        extends Gio.DBusProxy
        implements Gio.AsyncInitable<DBusScreenshotProxy>, Gio.DBusInterface, Gio.Initable, DBusScreenshot
    {
        static $gtype: GObject.GType<DBusScreenshotProxy>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: DBusScreenshotProxy.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<DBusScreenshotProxy.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static new_finish(res: Gio.AsyncResult): DBusScreenshotProxy;
        // Conflicted with Gio.AsyncInitable.new_finish

        static new_finish(...args: never[]): any;

        static new_for_bus_finish(res: Gio.AsyncResult): DBusScreenshotProxy;

        static new_for_bus_sync(
            bus_type: Gio.BusType,
            flags: Gio.DBusProxyFlags,
            name: string,
            object_path: string,
            cancellable?: Gio.Cancellable | null,
        ): DBusScreenshotProxy;
        // Conflicted with Gio.DBusProxy.new_for_bus_sync

        static new_for_bus_sync(...args: never[]): any;

        static new_sync(
            connection: Gio.DBusConnection,
            flags: Gio.DBusProxyFlags,
            name: string | null,
            object_path: string,
            cancellable?: Gio.Cancellable | null,
        ): DBusScreenshotProxy;
        // Conflicted with Gio.DBusProxy.new_sync

        static new_sync(...args: never[]): any;

        // Signals

        /** @signal */
        connect<K extends keyof DBusScreenshotProxy.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, DBusScreenshotProxy.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof DBusScreenshotProxy.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, DBusScreenshotProxy.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof DBusScreenshotProxy.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<DBusScreenshotProxy.SignalSignatures[K]> extends [any, ...infer Q]
                ? Q
                : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        /**
         * Asynchronously creates a proxy for the D-Bus interface <link linkend="gdbus-interface-org-gnome-Shell-Screenshot.top_of_page">org.gnome.Shell.Screenshot</link>. See `g_dbus_proxy_new()` for more details.
         *
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `phosh_dbus_screenshot_proxy_new_finish()` to get the result of the operation.
         *
         * See `phosh_dbus_screenshot_proxy_new_sync()` for the synchronous, blocking version of this constructor.
         * @param connection A {@link Gio.DBusConnection}.
         * @param flags Flags from the {@link Gio.DBusProxyFlags} enumeration.
         * @param name A bus name (well-known or unique) or `null` if `connection` is not a message bus connection.
         * @param object_path An object path.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied.
         */
        static ['new'](
            connection: Gio.DBusConnection,
            flags: Gio.DBusProxyFlags,
            name: string | null,
            object_path: string,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<DBusScreenshotProxy> | null,
        ): void;
        /**
         * @param args
         */
        // Conflicted with Gio.DBusProxy.new
        static ['new'](...args: never[]): any;
        /**
         * Like `phosh_dbus_screenshot_proxy_new()` but takes a {@link Gio.BusType} instead of a {@link Gio.DBusConnection}.
         *
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `phosh_dbus_screenshot_proxy_new_for_bus_finish()` to get the result of the operation.
         *
         * See `phosh_dbus_screenshot_proxy_new_for_bus_sync()` for the synchronous, blocking version of this constructor.
         * @param bus_type A {@link Gio.BusType}.
         * @param flags Flags from the {@link Gio.DBusProxyFlags} enumeration.
         * @param name A bus name (well-known or unique).
         * @param object_path An object path.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied.
         */
        static new_for_bus(
            bus_type: Gio.BusType,
            flags: Gio.DBusProxyFlags,
            name: string,
            object_path: string,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<DBusScreenshotProxy> | null,
        ): void;
        /**
         * @param args
         */
        // Conflicted with Gio.DBusProxy.new_for_bus
        static new_for_bus(...args: never[]): any;
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
        init_async(io_priority: number, cancellable?: Gio.Cancellable | null): globalThis.Promise<boolean>;
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
        init_async(
            io_priority: number,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
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
        init_async(
            io_priority: number,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<boolean> | void;
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
        new_finish(res: Gio.AsyncResult): DBusScreenshotProxy;
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
        vfunc_init_async(
            io_priority: number,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
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
        get_object(): Gio.DBusObject | null;
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
        set_object(object?: Gio.DBusObject | null): void;
        /**
         * Gets the {@link Gio.DBusObject} that `interface_` belongs to, if any.
         * @virtual
         */
        vfunc_dup_object(): Gio.DBusObject | null;
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
        vfunc_set_object(object?: Gio.DBusObject | null): void;
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
        init(cancellable?: Gio.Cancellable | null): boolean;
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
        vfunc_init(cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-gnome-Shell-Screenshot.FlashArea">FlashArea()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `phosh_dbus_screenshot_call_flash_area_finish()` to get the result of the operation.
         *
         * See `phosh_dbus_screenshot_call_flash_area_sync()` for the synchronous, blocking version of this method.
         * @param arg_x Argument to pass with the method invocation.
         * @param arg_y Argument to pass with the method invocation.
         * @param arg_width Argument to pass with the method invocation.
         * @param arg_height Argument to pass with the method invocation.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         */
        call_flash_area(
            arg_x: number,
            arg_y: number,
            arg_width: number,
            arg_height: number,
            cancellable?: Gio.Cancellable | null,
        ): globalThis.Promise<boolean>;
        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-gnome-Shell-Screenshot.FlashArea">FlashArea()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `phosh_dbus_screenshot_call_flash_area_finish()` to get the result of the operation.
         *
         * See `phosh_dbus_screenshot_call_flash_area_sync()` for the synchronous, blocking version of this method.
         * @param arg_x Argument to pass with the method invocation.
         * @param arg_y Argument to pass with the method invocation.
         * @param arg_width Argument to pass with the method invocation.
         * @param arg_height Argument to pass with the method invocation.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied or `null`.
         */
        call_flash_area(
            arg_x: number,
            arg_y: number,
            arg_width: number,
            arg_height: number,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-gnome-Shell-Screenshot.FlashArea">FlashArea()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `phosh_dbus_screenshot_call_flash_area_finish()` to get the result of the operation.
         *
         * See `phosh_dbus_screenshot_call_flash_area_sync()` for the synchronous, blocking version of this method.
         * @param arg_x Argument to pass with the method invocation.
         * @param arg_y Argument to pass with the method invocation.
         * @param arg_width Argument to pass with the method invocation.
         * @param arg_height Argument to pass with the method invocation.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied or `null`.
         */
        call_flash_area(
            arg_x: number,
            arg_y: number,
            arg_width: number,
            arg_height: number,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<boolean> | void;
        /**
         * Finishes an operation started with `phosh_dbus_screenshot_call_flash_area()`.
         * @param res The {@link Gio.AsyncResult} obtained from the {@link Gio.AsyncReadyCallback} passed to `phosh_dbus_screenshot_call_flash_area()`.
         * @returns `true` if the call succeeded, `false` if `error` is set.
         */
        call_flash_area_finish(res: Gio.AsyncResult): boolean;
        /**
         * Synchronously invokes the <link linkend="gdbus-method-org-gnome-Shell-Screenshot.FlashArea">FlashArea()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
         *
         * See `phosh_dbus_screenshot_call_flash_area()` for the asynchronous version of this method.
         * @param arg_x Argument to pass with the method invocation.
         * @param arg_y Argument to pass with the method invocation.
         * @param arg_width Argument to pass with the method invocation.
         * @param arg_height Argument to pass with the method invocation.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @returns `true` if the call succeeded, `false` if `error` is set.
         */
        call_flash_area_sync(
            arg_x: number,
            arg_y: number,
            arg_width: number,
            arg_height: number,
            cancellable?: Gio.Cancellable | null,
        ): boolean;
        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-gnome-Shell-Screenshot.PickColor">PickColor()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `phosh_dbus_screenshot_call_pick_color_finish()` to get the result of the operation.
         *
         * See `phosh_dbus_screenshot_call_pick_color_sync()` for the synchronous, blocking version of this method.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         */
        call_pick_color(cancellable?: Gio.Cancellable | null): globalThis.Promise<GLib.Variant | null>;
        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-gnome-Shell-Screenshot.PickColor">PickColor()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `phosh_dbus_screenshot_call_pick_color_finish()` to get the result of the operation.
         *
         * See `phosh_dbus_screenshot_call_pick_color_sync()` for the synchronous, blocking version of this method.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied or `null`.
         */
        call_pick_color(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-gnome-Shell-Screenshot.PickColor">PickColor()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `phosh_dbus_screenshot_call_pick_color_finish()` to get the result of the operation.
         *
         * See `phosh_dbus_screenshot_call_pick_color_sync()` for the synchronous, blocking version of this method.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied or `null`.
         */
        call_pick_color(
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<GLib.Variant | null> | void;
        /**
         * Finishes an operation started with `phosh_dbus_screenshot_call_pick_color()`.
         * @param res The {@link Gio.AsyncResult} obtained from the {@link Gio.AsyncReadyCallback} passed to `phosh_dbus_screenshot_call_pick_color()`.
         * @returns `true` if the call succeeded, `false` if `error` is set.
         */
        call_pick_color_finish(res: Gio.AsyncResult): [boolean, GLib.Variant | null];
        /**
         * Synchronously invokes the <link linkend="gdbus-method-org-gnome-Shell-Screenshot.PickColor">PickColor()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
         *
         * See `phosh_dbus_screenshot_call_pick_color()` for the asynchronous version of this method.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @returns `true` if the call succeeded, `false` if `error` is set.
         */
        call_pick_color_sync(cancellable?: Gio.Cancellable | null): [boolean, GLib.Variant | null];
        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-gnome-Shell-Screenshot.Screenshot">Screenshot()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `phosh_dbus_screenshot_call_screenshot_finish()` to get the result of the operation.
         *
         * See `phosh_dbus_screenshot_call_screenshot_sync()` for the synchronous, blocking version of this method.
         * @param arg_include_cursor Argument to pass with the method invocation.
         * @param arg_flash Argument to pass with the method invocation.
         * @param arg_filename Argument to pass with the method invocation.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         */
        call_screenshot(
            arg_include_cursor: boolean,
            arg_flash: boolean,
            arg_filename: string,
            cancellable?: Gio.Cancellable | null,
        ): globalThis.Promise<[boolean, string]>;
        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-gnome-Shell-Screenshot.Screenshot">Screenshot()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `phosh_dbus_screenshot_call_screenshot_finish()` to get the result of the operation.
         *
         * See `phosh_dbus_screenshot_call_screenshot_sync()` for the synchronous, blocking version of this method.
         * @param arg_include_cursor Argument to pass with the method invocation.
         * @param arg_flash Argument to pass with the method invocation.
         * @param arg_filename Argument to pass with the method invocation.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied or `null`.
         */
        call_screenshot(
            arg_include_cursor: boolean,
            arg_flash: boolean,
            arg_filename: string,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-gnome-Shell-Screenshot.Screenshot">Screenshot()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `phosh_dbus_screenshot_call_screenshot_finish()` to get the result of the operation.
         *
         * See `phosh_dbus_screenshot_call_screenshot_sync()` for the synchronous, blocking version of this method.
         * @param arg_include_cursor Argument to pass with the method invocation.
         * @param arg_flash Argument to pass with the method invocation.
         * @param arg_filename Argument to pass with the method invocation.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied or `null`.
         */
        call_screenshot(
            arg_include_cursor: boolean,
            arg_flash: boolean,
            arg_filename: string,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<[boolean, string]> | void;
        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-gnome-Shell-Screenshot.ScreenshotArea">ScreenshotArea()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `phosh_dbus_screenshot_call_screenshot_area_finish()` to get the result of the operation.
         *
         * See `phosh_dbus_screenshot_call_screenshot_area_sync()` for the synchronous, blocking version of this method.
         * @param arg_x Argument to pass with the method invocation.
         * @param arg_y Argument to pass with the method invocation.
         * @param arg_width Argument to pass with the method invocation.
         * @param arg_height Argument to pass with the method invocation.
         * @param arg_flash Argument to pass with the method invocation.
         * @param arg_filename Argument to pass with the method invocation.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         */
        call_screenshot_area(
            arg_x: number,
            arg_y: number,
            arg_width: number,
            arg_height: number,
            arg_flash: boolean,
            arg_filename: string,
            cancellable?: Gio.Cancellable | null,
        ): globalThis.Promise<[boolean, string]>;
        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-gnome-Shell-Screenshot.ScreenshotArea">ScreenshotArea()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `phosh_dbus_screenshot_call_screenshot_area_finish()` to get the result of the operation.
         *
         * See `phosh_dbus_screenshot_call_screenshot_area_sync()` for the synchronous, blocking version of this method.
         * @param arg_x Argument to pass with the method invocation.
         * @param arg_y Argument to pass with the method invocation.
         * @param arg_width Argument to pass with the method invocation.
         * @param arg_height Argument to pass with the method invocation.
         * @param arg_flash Argument to pass with the method invocation.
         * @param arg_filename Argument to pass with the method invocation.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied or `null`.
         */
        call_screenshot_area(
            arg_x: number,
            arg_y: number,
            arg_width: number,
            arg_height: number,
            arg_flash: boolean,
            arg_filename: string,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-gnome-Shell-Screenshot.ScreenshotArea">ScreenshotArea()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `phosh_dbus_screenshot_call_screenshot_area_finish()` to get the result of the operation.
         *
         * See `phosh_dbus_screenshot_call_screenshot_area_sync()` for the synchronous, blocking version of this method.
         * @param arg_x Argument to pass with the method invocation.
         * @param arg_y Argument to pass with the method invocation.
         * @param arg_width Argument to pass with the method invocation.
         * @param arg_height Argument to pass with the method invocation.
         * @param arg_flash Argument to pass with the method invocation.
         * @param arg_filename Argument to pass with the method invocation.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied or `null`.
         */
        call_screenshot_area(
            arg_x: number,
            arg_y: number,
            arg_width: number,
            arg_height: number,
            arg_flash: boolean,
            arg_filename: string,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<[boolean, string]> | void;
        /**
         * Finishes an operation started with `phosh_dbus_screenshot_call_screenshot_area()`.
         * @param res The {@link Gio.AsyncResult} obtained from the {@link Gio.AsyncReadyCallback} passed to `phosh_dbus_screenshot_call_screenshot_area()`.
         * @returns `true` if the call succeeded, `false` if `error` is set.
         */
        call_screenshot_area_finish(res: Gio.AsyncResult): [boolean, boolean, string];
        /**
         * Synchronously invokes the <link linkend="gdbus-method-org-gnome-Shell-Screenshot.ScreenshotArea">ScreenshotArea()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
         *
         * See `phosh_dbus_screenshot_call_screenshot_area()` for the asynchronous version of this method.
         * @param arg_x Argument to pass with the method invocation.
         * @param arg_y Argument to pass with the method invocation.
         * @param arg_width Argument to pass with the method invocation.
         * @param arg_height Argument to pass with the method invocation.
         * @param arg_flash Argument to pass with the method invocation.
         * @param arg_filename Argument to pass with the method invocation.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @returns `true` if the call succeeded, `false` if `error` is set.
         */
        call_screenshot_area_sync(
            arg_x: number,
            arg_y: number,
            arg_width: number,
            arg_height: number,
            arg_flash: boolean,
            arg_filename: string,
            cancellable?: Gio.Cancellable | null,
        ): [boolean, boolean, string];
        /**
         * Finishes an operation started with `phosh_dbus_screenshot_call_screenshot()`.
         * @param res The {@link Gio.AsyncResult} obtained from the {@link Gio.AsyncReadyCallback} passed to `phosh_dbus_screenshot_call_screenshot()`.
         * @returns `true` if the call succeeded, `false` if `error` is set.
         */
        call_screenshot_finish(res: Gio.AsyncResult): [boolean, boolean, string];
        /**
         * Synchronously invokes the <link linkend="gdbus-method-org-gnome-Shell-Screenshot.Screenshot">Screenshot()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
         *
         * See `phosh_dbus_screenshot_call_screenshot()` for the asynchronous version of this method.
         * @param arg_include_cursor Argument to pass with the method invocation.
         * @param arg_flash Argument to pass with the method invocation.
         * @param arg_filename Argument to pass with the method invocation.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @returns `true` if the call succeeded, `false` if `error` is set.
         */
        call_screenshot_sync(
            arg_include_cursor: boolean,
            arg_flash: boolean,
            arg_filename: string,
            cancellable?: Gio.Cancellable | null,
        ): [boolean, boolean, string];
        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-gnome-Shell-Screenshot.ScreenshotWindow">ScreenshotWindow()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `phosh_dbus_screenshot_call_screenshot_window_finish()` to get the result of the operation.
         *
         * See `phosh_dbus_screenshot_call_screenshot_window_sync()` for the synchronous, blocking version of this method.
         * @param arg_include_frame Argument to pass with the method invocation.
         * @param arg_include_cursor Argument to pass with the method invocation.
         * @param arg_flash Argument to pass with the method invocation.
         * @param arg_filename Argument to pass with the method invocation.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         */
        call_screenshot_window(
            arg_include_frame: boolean,
            arg_include_cursor: boolean,
            arg_flash: boolean,
            arg_filename: string,
            cancellable?: Gio.Cancellable | null,
        ): globalThis.Promise<[boolean, string]>;
        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-gnome-Shell-Screenshot.ScreenshotWindow">ScreenshotWindow()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `phosh_dbus_screenshot_call_screenshot_window_finish()` to get the result of the operation.
         *
         * See `phosh_dbus_screenshot_call_screenshot_window_sync()` for the synchronous, blocking version of this method.
         * @param arg_include_frame Argument to pass with the method invocation.
         * @param arg_include_cursor Argument to pass with the method invocation.
         * @param arg_flash Argument to pass with the method invocation.
         * @param arg_filename Argument to pass with the method invocation.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied or `null`.
         */
        call_screenshot_window(
            arg_include_frame: boolean,
            arg_include_cursor: boolean,
            arg_flash: boolean,
            arg_filename: string,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-gnome-Shell-Screenshot.ScreenshotWindow">ScreenshotWindow()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `phosh_dbus_screenshot_call_screenshot_window_finish()` to get the result of the operation.
         *
         * See `phosh_dbus_screenshot_call_screenshot_window_sync()` for the synchronous, blocking version of this method.
         * @param arg_include_frame Argument to pass with the method invocation.
         * @param arg_include_cursor Argument to pass with the method invocation.
         * @param arg_flash Argument to pass with the method invocation.
         * @param arg_filename Argument to pass with the method invocation.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied or `null`.
         */
        call_screenshot_window(
            arg_include_frame: boolean,
            arg_include_cursor: boolean,
            arg_flash: boolean,
            arg_filename: string,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<[boolean, string]> | void;
        /**
         * Finishes an operation started with `phosh_dbus_screenshot_call_screenshot_window()`.
         * @param res The {@link Gio.AsyncResult} obtained from the {@link Gio.AsyncReadyCallback} passed to `phosh_dbus_screenshot_call_screenshot_window()`.
         * @returns `true` if the call succeeded, `false` if `error` is set.
         */
        call_screenshot_window_finish(res: Gio.AsyncResult): [boolean, boolean, string];
        /**
         * Synchronously invokes the <link linkend="gdbus-method-org-gnome-Shell-Screenshot.ScreenshotWindow">ScreenshotWindow()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
         *
         * See `phosh_dbus_screenshot_call_screenshot_window()` for the asynchronous version of this method.
         * @param arg_include_frame Argument to pass with the method invocation.
         * @param arg_include_cursor Argument to pass with the method invocation.
         * @param arg_flash Argument to pass with the method invocation.
         * @param arg_filename Argument to pass with the method invocation.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @returns `true` if the call succeeded, `false` if `error` is set.
         */
        call_screenshot_window_sync(
            arg_include_frame: boolean,
            arg_include_cursor: boolean,
            arg_flash: boolean,
            arg_filename: string,
            cancellable?: Gio.Cancellable | null,
        ): [boolean, boolean, string];
        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-gnome-Shell-Screenshot.SelectArea">SelectArea()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `phosh_dbus_screenshot_call_select_area_finish()` to get the result of the operation.
         *
         * See `phosh_dbus_screenshot_call_select_area_sync()` for the synchronous, blocking version of this method.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         */
        call_select_area(cancellable?: Gio.Cancellable | null): globalThis.Promise<[number, number, number, number]>;
        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-gnome-Shell-Screenshot.SelectArea">SelectArea()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `phosh_dbus_screenshot_call_select_area_finish()` to get the result of the operation.
         *
         * See `phosh_dbus_screenshot_call_select_area_sync()` for the synchronous, blocking version of this method.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied or `null`.
         */
        call_select_area(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-gnome-Shell-Screenshot.SelectArea">SelectArea()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `phosh_dbus_screenshot_call_select_area_finish()` to get the result of the operation.
         *
         * See `phosh_dbus_screenshot_call_select_area_sync()` for the synchronous, blocking version of this method.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied or `null`.
         */
        call_select_area(
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<[number, number, number, number]> | void;
        /**
         * Finishes an operation started with `phosh_dbus_screenshot_call_select_area()`.
         * @param res The {@link Gio.AsyncResult} obtained from the {@link Gio.AsyncReadyCallback} passed to `phosh_dbus_screenshot_call_select_area()`.
         * @returns `true` if the call succeeded, `false` if `error` is set.
         */
        call_select_area_finish(res: Gio.AsyncResult): [boolean, number, number, number, number];
        /**
         * Synchronously invokes the <link linkend="gdbus-method-org-gnome-Shell-Screenshot.SelectArea">SelectArea()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
         *
         * See `phosh_dbus_screenshot_call_select_area()` for the asynchronous version of this method.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @returns `true` if the call succeeded, `false` if `error` is set.
         */
        call_select_area_sync(cancellable?: Gio.Cancellable | null): [boolean, number, number, number, number];
        /**
         * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-gnome-Shell-Screenshot.FlashArea">FlashArea()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use `g_dbus_method_invocation_return_error()` or similar.
         *
         * This method will free `invocation`, you cannot use it afterwards.
         * @param invocation A {@link Gio.DBusMethodInvocation}.
         */
        complete_flash_area(invocation: Gio.DBusMethodInvocation): void;
        /**
         * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-gnome-Shell-Screenshot.PickColor">PickColor()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use `g_dbus_method_invocation_return_error()` or similar.
         *
         * This method will free `invocation`, you cannot use it afterwards.
         * @param invocation A {@link Gio.DBusMethodInvocation}.
         * @param result Parameter to return.
         */
        complete_pick_color(invocation: Gio.DBusMethodInvocation, result: GLib.Variant): void;
        /**
         * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-gnome-Shell-Screenshot.Screenshot">Screenshot()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use `g_dbus_method_invocation_return_error()` or similar.
         *
         * This method will free `invocation`, you cannot use it afterwards.
         * @param invocation A {@link Gio.DBusMethodInvocation}.
         * @param success Parameter to return.
         * @param filename_used Parameter to return.
         */
        complete_screenshot(invocation: Gio.DBusMethodInvocation, success: boolean, filename_used: string): void;
        /**
         * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-gnome-Shell-Screenshot.ScreenshotArea">ScreenshotArea()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use `g_dbus_method_invocation_return_error()` or similar.
         *
         * This method will free `invocation`, you cannot use it afterwards.
         * @param invocation A {@link Gio.DBusMethodInvocation}.
         * @param success Parameter to return.
         * @param filename_used Parameter to return.
         */
        complete_screenshot_area(invocation: Gio.DBusMethodInvocation, success: boolean, filename_used: string): void;
        /**
         * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-gnome-Shell-Screenshot.ScreenshotWindow">ScreenshotWindow()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use `g_dbus_method_invocation_return_error()` or similar.
         *
         * This method will free `invocation`, you cannot use it afterwards.
         * @param invocation A {@link Gio.DBusMethodInvocation}.
         * @param success Parameter to return.
         * @param filename_used Parameter to return.
         */
        complete_screenshot_window(invocation: Gio.DBusMethodInvocation, success: boolean, filename_used: string): void;
        /**
         * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-gnome-Shell-Screenshot.SelectArea">SelectArea()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use `g_dbus_method_invocation_return_error()` or similar.
         *
         * This method will free `invocation`, you cannot use it afterwards.
         * @param invocation A {@link Gio.DBusMethodInvocation}.
         * @param x Parameter to return.
         * @param y Parameter to return.
         * @param width Parameter to return.
         * @param height Parameter to return.
         */
        complete_select_area(
            invocation: Gio.DBusMethodInvocation,
            x: number,
            y: number,
            width: number,
            height: number,
        ): void;
        /**
         * Handler for the {@link Phosh.DBusScreenshot.SignalSignatures.handle_flash_area | Phosh.DBusScreenshot::handle-flash-area} signal.
         * @param invocation
         * @param arg_x
         * @param arg_y
         * @param arg_width
         * @param arg_height
         * @virtual
         */
        vfunc_handle_flash_area(
            invocation: Gio.DBusMethodInvocation,
            arg_x: number,
            arg_y: number,
            arg_width: number,
            arg_height: number,
        ): boolean;
        /**
         * Handler for the {@link Phosh.DBusScreenshot.SignalSignatures.handle_pick_color | Phosh.DBusScreenshot::handle-pick-color} signal.
         * @param invocation
         * @virtual
         */
        vfunc_handle_pick_color(invocation: Gio.DBusMethodInvocation): boolean;
        /**
         * Handler for the {@link Phosh.DBusScreenshot.SignalSignatures.handle_screenshot | Phosh.DBusScreenshot::handle-screenshot} signal.
         * @param invocation
         * @param arg_include_cursor
         * @param arg_flash
         * @param arg_filename
         * @virtual
         */
        vfunc_handle_screenshot(
            invocation: Gio.DBusMethodInvocation,
            arg_include_cursor: boolean,
            arg_flash: boolean,
            arg_filename: string,
        ): boolean;
        /**
         * Handler for the {@link Phosh.DBusScreenshot.SignalSignatures.handle_screenshot_area | Phosh.DBusScreenshot::handle-screenshot-area} signal.
         * @param invocation
         * @param arg_x
         * @param arg_y
         * @param arg_width
         * @param arg_height
         * @param arg_flash
         * @param arg_filename
         * @virtual
         */
        vfunc_handle_screenshot_area(
            invocation: Gio.DBusMethodInvocation,
            arg_x: number,
            arg_y: number,
            arg_width: number,
            arg_height: number,
            arg_flash: boolean,
            arg_filename: string,
        ): boolean;
        /**
         * Handler for the {@link Phosh.DBusScreenshot.SignalSignatures.handle_screenshot_window | Phosh.DBusScreenshot::handle-screenshot-window} signal.
         * @param invocation
         * @param arg_include_frame
         * @param arg_include_cursor
         * @param arg_flash
         * @param arg_filename
         * @virtual
         */
        vfunc_handle_screenshot_window(
            invocation: Gio.DBusMethodInvocation,
            arg_include_frame: boolean,
            arg_include_cursor: boolean,
            arg_flash: boolean,
            arg_filename: string,
        ): boolean;
        /**
         * Handler for the {@link Phosh.DBusScreenshot.SignalSignatures.handle_select_area | Phosh.DBusScreenshot::handle-select-area} signal.
         * @param invocation
         * @virtual
         */
        vfunc_handle_select_area(invocation: Gio.DBusMethodInvocation): boolean;
        /**
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target`.
         *
         * Whenever the `source_property` is changed the `target_property` is
         * updated using the same value. For instance:
         *
         *
         * ```c
         *   g_object_bind_property (action, "active", widget, "sensitive", 0);
         * ```
         *
         *
         * Will result in the "sensitive" property of the widget {@link GObject.Object} instance to be
         * updated with the same value of the "active" property of the action {@link GObject.Object}
         * instance.
         *
         * If `flags` contains {@link GObject.BindingFlags.BIDIRECTIONAL} then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well.
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. To remove the binding without affecting the
         * `source` and the `target` you can just call `g_object_unref()` on the returned
         * {@link GObject.Binding} instance.
         *
         * Removing the binding by calling `g_object_unref()` on it must only be done if
         * the binding, `source` and `target` are only used from a single thread and it
         * is clear that both `source` and `target` outlive the binding. Especially it
         * is not safe to rely on this if the binding, `source` or `target` can be
         * finalized from different threads. Keep another reference to the binding and
         * use `g_binding_unbind()` instead to be on the safe side.
         *
         * A {@link GObject.Object} can have multiple bindings.
         * @param source_property the property on `source` to bind
         * @param target the target {@link GObject.Object}
         * @param target_property the property on `target` to bind
         * @param flags flags to pass to {@link GObject.Binding}
         * @returns the {@link GObject.Binding} instance representing the     binding between the two {@link GObject.Object} instances. The binding is released     whenever the {@link GObject.Binding} reference count reaches zero.
         */
        bind_property(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
        ): GObject.Binding;
        /**
         * Complete version of `g_object_bind_property()`.
         *
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target`, allowing you to set the transformation functions to be used by
         * the binding.
         *
         * If `flags` contains {@link GObject.BindingFlags.BIDIRECTIONAL} then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well. The `transform_from` function is only used in case
         * of bidirectional bindings, otherwise it will be ignored
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. This will release the reference that is
         * being held on the {@link GObject.Binding} instance; if you want to hold on to the
         * {@link GObject.Binding} instance, you will need to hold a reference to it.
         *
         * To remove the binding, call `g_binding_unbind()`.
         *
         * A {@link GObject.Object} can have multiple bindings.
         *
         * The same `user_data` parameter will be used for both `transform_to`
         * and `transform_from` transformation functions; the `notify` function will
         * be called once, when the binding is removed. If you need different data
         * for each transformation function, please use
         * `g_object_bind_property_with_closures()` instead.
         * @param source_property the property on `source` to bind
         * @param target the target {@link GObject.Object}
         * @param target_property the property on `target` to bind
         * @param flags flags to pass to {@link GObject.Binding}
         * @param transform_to the transformation function     from the `source` to the `target`, or `null` to use the default
         * @param transform_from the transformation function     from the `target` to the `source`, or `null` to use the default
         * @param notify a function to call when disposing the binding, to free     resources used by the transformation functions, or `null` if not required
         * @returns the {@link GObject.Binding} instance representing the     binding between the two {@link GObject.Object} instances. The binding is released     whenever the {@link GObject.Binding} reference count reaches zero.
         */
        bind_property_full(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
            transform_to?: GObject.BindingTransformFunc | null,
            transform_from?: GObject.BindingTransformFunc | null,
            notify?: GLib.DestroyNotify | null,
        ): GObject.Binding;
        /**
         * @param args
         */
        // Conflicted with GObject.Object.bind_property_full
        bind_property_full(...args: never[]): any;
        /**
         * This function is intended for {@link GObject.Object} implementations to re-enforce
         * a [floating][floating-ref] object reference. Doing this is seldom
         * required: all `GInitiallyUnowneds` are created with a floating reference
         * which usually just needs to be sunken by calling `g_object_ref_sink()`.
         */
        force_floating(): void;
        /**
         * Increases the freeze count on `object`. If the freeze count is
         * non-zero, the emission of "notify" signals on `object` is
         * stopped. The signals are queued until the freeze count is decreased
         * to zero. Duplicate notifications are squashed so that at most one
         * {@link GObject.Object.SignalSignatures.notify | GObject.Object::notify} signal is emitted for each property modified while the
         * object is frozen.
         *
         * This is necessary for accessors that modify multiple properties to prevent
         * premature notification while the object is still being modified.
         */
        freeze_notify(): void;
        /**
         * Gets a named field from the objects table of associations (see `g_object_set_data()`).
         * @param key name of the key for that association
         * @returns the data if found,          or `null` if no such data exists.
         */
        get_data(key: string): any | null;
        /**
         * Gets a property of an object.
         *
         * The value can be:
         * - an empty GObject.Value initialized by G_VALUE_INIT, which will be automatically initialized with the expected type of the property (since GLib 2.60)
         * - a GObject.Value initialized with the expected type of the property
         * - a GObject.Value initialized with a type to which the expected type of the property can be transformed
         *
         * In general, a copy is made of the property contents and the caller is responsible for freeing the memory by calling GObject.Value.unset.
         *
         * Note that GObject.Object.get_property is really intended for language bindings, GObject.Object.get is much more convenient for C programming.
         * @param property_name The name of the property to get
         * @param value Return location for the property value. Can be an empty GObject.Value initialized by G_VALUE_INIT (auto-initialized with expected type since GLib 2.60), a GObject.Value initialized with the expected property type, or a GObject.Value initialized with a transformable type
         */
        get_property(property_name: string, value: GObject.Value | any): any;
        /**
         * This function gets back user data pointers stored via
         * `g_object_set_qdata()`.
         * @param quark A {@link GLib.Quark}, naming the user data pointer
         * @returns The user data pointer set, or `null`
         */
        get_qdata(quark: GLib.Quark): any | null;
        /**
         * Gets `n_properties` properties for an `object`.
         * Obtained properties will be set to `values`. All properties must be valid.
         * Warnings will be emitted and undefined behaviour may result if invalid
         * properties are passed in.
         * @param names the names of each property to get
         * @param values the values of each property to get
         */
        getv(names: string[], values: (GObject.Value | any)[]): void;
        /**
         * Checks whether `object` has a [floating][floating-ref] reference.
         * @returns `true` if `object` has a floating reference
         */
        is_floating(): boolean;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use `g_object_notify_by_pspec()`
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * `g_object_freeze_notify()`. In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when `g_object_thaw_notify()` is
         * called.
         * @param property_name the name of a property installed on the class of `object`.
         */
        notify(property_name: string): void;
        /**
         * Emits a "notify" signal for the property specified by `pspec` on `object`.
         *
         * This function omits the property name lookup, hence it is faster than
         * `g_object_notify()`.
         *
         * One way to avoid using `g_object_notify()` from within the
         * class that registered the properties, and using `g_object_notify_by_pspec()`
         * instead, is to store the GParamSpec used with
         * `g_object_class_install_property()` inside a static array, e.g.:
         *
         *
         * ```c
         *   typedef enum
         *   {
         *     PROP_FOO = 1,
         *     PROP_LAST
         *   } MyObjectProperty;
         *
         *   static GParamSpec *properties[PROP_LAST];
         *
         *   static void
         *   my_object_class_init (MyObjectClass *klass)
         *   {
         *     properties[PROP_FOO] = g_param_spec_int ("foo", NULL, NULL,
         *                                              0, 100,
         *                                              50,
         *                                              G_PARAM_READWRITE | G_PARAM_STATIC_STRINGS);
         *     g_object_class_install_property (gobject_class,
         *                                      PROP_FOO,
         *                                      properties[PROP_FOO]);
         *   }
         * ```
         *
         *
         * and then notify a change on the "foo" property with:
         *
         *
         * ```c
         *   g_object_notify_by_pspec (self, properties[PROP_FOO]);
         * ```
         *
         * @param pspec the {@link GObject.ParamSpec} of a property installed on the class of `object`.
         */
        notify_by_pspec(pspec: GObject.ParamSpec): void;
        /**
         * Increases the reference count of `object`.
         *
         * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
         * of `object` will be propagated to the return type (using the GCC `typeof()`
         * extension), so any casting the caller needs to do on the return type must be
         * explicit.
         * @returns the same `object`
         */
        ref(): GObject.Object;
        /**
         * Increase the reference count of `object`, and possibly remove the
         * [floating][floating-ref] reference, if `object` has a floating reference.
         *
         * In other words, if the object is floating, then this call "assumes
         * ownership" of the floating reference, converting it to a normal
         * reference by clearing the floating flag while leaving the reference
         * count unchanged.  If the object is not floating, then this call
         * adds a new normal reference increasing the reference count by one.
         *
         * Since GLib 2.56, the type of `object` will be propagated to the return type
         * under the same conditions as for `g_object_ref()`.
         * @returns `object`
         */
        ref_sink(): GObject.Object;
        /**
         * Releases all references to other objects. This can be used to break
         * reference cycles.
         *
         * This function should only be called from object system implementations.
         */
        run_dispose(): void;
        /**
         * Each object carries around a table of associations from
         * strings to pointers.  This function lets you set an association.
         *
         * If the object already had an association with that name,
         * the old association will be destroyed.
         *
         * Internally, the `key` is converted to a {@link GLib.Quark} using `g_quark_from_string()`.
         * This means a copy of `key` is kept permanently (even after `object` has been
         * finalized) — so it is recommended to only use a small, bounded set of values
         * for `key` in your program, to avoid the {@link GLib.Quark} storage growing unbounded.
         * @param key name of the key
         * @param data data to associate with that key
         */
        set_data(key: string, data?: any | null): void;
        /**
         * Sets a property on an object.
         * @param property_name The name of the property to set
         * @param value The value to set the property to
         */
        set_property(property_name: string, value: GObject.Value | any): void;
        /**
         * Remove a specified datum from the object's data associations,
         * without invoking the association's destroy handler.
         * @param key name of the key
         * @returns the data if found, or `null`          if no such data exists.
         */
        steal_data(key: string): any | null;
        /**
         * This function gets back user data pointers stored via
         * `g_object_set_qdata()` and removes the `data` from object
         * without invoking its `destroy()` function (if any was
         * set).
         * Usually, calling this function is only required to update
         * user data pointers with a destroy notifier, for example:
         *
         * ```c
         * void
         * object_add_to_user_list (GObject     *object,
         *                          const gchar *new_string)
         * {
         *   // the quark, naming the object data
         *   GQuark quark_string_list = g_quark_from_static_string ("my-string-list");
         *   // retrieve the old string list
         *   GList *list = g_object_steal_qdata (object, quark_string_list);
         *
         *   // prepend new string
         *   list = g_list_prepend (list, g_strdup (new_string));
         *   // this changed 'list', so we need to set it again
         *   g_object_set_qdata_full (object, quark_string_list, list, free_string_list);
         * }
         * static void
         * free_string_list (gpointer data)
         * {
         *   GList *node, *list = data;
         *
         *   for (node = list; node; node = node->next)
         *     g_free (node->data);
         *   g_list_free (list);
         * }
         * ```
         *
         * Using `g_object_get_qdata()` in the above example, instead of
         * `g_object_steal_qdata()` would have left the destroy function set,
         * and thus the partial string list would have been freed upon
         * `g_object_set_qdata_full()`.
         * @param quark A {@link GLib.Quark}, naming the user data pointer
         * @returns The user data pointer set, or `null`
         */
        steal_qdata(quark: GLib.Quark): any | null;
        /**
         * Reverts the effect of a previous call to
         * `g_object_freeze_notify()`. The freeze count is decreased on `object`
         * and when it reaches zero, queued "notify" signals are emitted.
         *
         * Duplicate notifications for each property are squashed so that at most one
         * {@link GObject.Object.SignalSignatures.notify | GObject.Object::notify} signal is emitted for each property, in the reverse order
         * in which they have been queued.
         *
         * It is an error to call this function when the freeze count is zero.
         */
        thaw_notify(): void;
        /**
         * Decreases the reference count of `object`. When its reference count
         * drops to 0, the object is finalized (i.e. its memory is freed).
         *
         * If the pointer to the {@link GObject.Object} may be reused in future (for example, if it is
         * an instance variable of another object), it is recommended to clear the
         * pointer to `null` rather than retain a dangling pointer to a potentially
         * invalid {@link GObject.Object} instance. Use `g_clear_object()` for this.
         */
        unref(): void;
        /**
         * This function essentially limits the life time of the `closure` to
         * the life time of the object. That is, when the object is finalized,
         * the `closure` is invalidated by calling `g_closure_invalidate()` on
         * it, in order to prevent invocations of the closure with a finalized
         * (nonexisting) object. Also, `g_object_ref()` and `g_object_unref()` are
         * added as marshal guards to the `closure`, to ensure that an extra
         * reference count is held on `object` during invocation of the
         * `closure`.  Usually, this function will be called on closures that
         * use this `object` as closure data.
         * @param closure {@link GObject.Closure} to watch
         */
        watch_closure(closure: GObject.Closure): void;
        /**
         * the `constructed` function is called by `g_object_new()` as the
         *  final step of the object creation process.  At the point of the call, all
         *  construction properties have been set on the object.  The purpose of this
         *  call is to allow for object initialisation steps that can only be performed
         *  after construction properties have been set.  `constructed` implementors
         *  should chain up to the `constructed` call of their parent class to allow it
         *  to complete its initialisation.
         * @virtual
         */
        vfunc_constructed(): void;
        /**
         * emits property change notification for a bunch
         *  of properties. Overriding `dispatch_properties_changed` should be rarely
         *  needed.
         * @param n_pspecs
         * @param pspecs
         * @virtual
         */
        vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
        /**
         * the `dispose` function is supposed to drop all references to other
         *  objects, but keep the instance otherwise intact, so that client method
         *  invocations still work. It may be run multiple times (due to reference
         *  loops). Before returning, `dispose` should chain up to the `dispose` method
         *  of the parent class.
         * @virtual
         */
        vfunc_dispose(): void;
        /**
         * instance finalization function, should finish the finalization of
         *  the instance begun in `dispose` and chain up to the `finalize` method of the
         *  parent class.
         * @virtual
         */
        vfunc_finalize(): void;
        /**
         * the generic getter for all properties of this type. Should be
         *  overridden for every type with properties.
         * @param property_id
         * @param value
         * @param pspec
         * @virtual
         */
        vfunc_get_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use `g_object_notify_by_pspec()`
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * `g_object_freeze_notify()`. In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when `g_object_thaw_notify()` is
         * called.
         * @param pspec
         * @virtual
         */
        vfunc_notify(pspec: GObject.ParamSpec): void;
        /**
         * the generic setter for all properties of this type. Should be
         *  overridden for every type with properties. If implementations of
         *  `set_property` don't emit property change notification explicitly, this will
         *  be done implicitly by the type system. However, if the notify signal is
         *  emitted explicitly, the type system will not emit it a second time.
         * @param property_id
         * @param value
         * @param pspec
         * @virtual
         */
        vfunc_set_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Disconnects a handler from an instance so it will not be called during any future or currently ongoing emissions of the signal it has been connected to.
         * @param id Handler ID of the handler to be disconnected
         */
        disconnect(id: number): void;
        /**
         * Sets multiple properties of an object at once. The properties argument should be a dictionary mapping property names to values.
         * @param properties Object containing the properties to set
         */
        set(properties: { [key: string]: any }): void;
        /**
         * Blocks a handler of an instance so it will not be called during any signal emissions
         * @param id Handler ID of the handler to be blocked
         */
        block_signal_handler(id: number): void;
        /**
         * Unblocks a handler so it will be called again during any signal emissions
         * @param id Handler ID of the handler to be unblocked
         */
        unblock_signal_handler(id: number): void;
        /**
         * Stops a signal's emission by the given signal name. This will prevent the default handler and any subsequent signal handlers from being invoked.
         * @param detailedName Name of the signal to stop emission of
         */
        stop_emission_by_name(detailedName: string): void;
    }

    namespace DBusScreenshotSkeleton {
        // Signal signatures
        interface SignalSignatures extends Gio.DBusInterfaceSkeleton.SignalSignatures {
            'notify::g-flags': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps
            extends
                Gio.DBusInterfaceSkeleton.ConstructorProps,
                Gio.DBusInterface.ConstructorProps,
                DBusScreenshot.ConstructorProps {}
    }

    /**
     * The {@link Phosh.DBusScreenshotSkeleton} structure contains only private data and should only be accessed using the provided API.
     * @gir-type Class
     */
    class DBusScreenshotSkeleton extends Gio.DBusInterfaceSkeleton implements Gio.DBusInterface, DBusScreenshot {
        static $gtype: GObject.GType<DBusScreenshotSkeleton>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: DBusScreenshotSkeleton.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<DBusScreenshotSkeleton.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): DBusScreenshotSkeleton;

        // Signals

        /** @signal */
        connect<K extends keyof DBusScreenshotSkeleton.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, DBusScreenshotSkeleton.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof DBusScreenshotSkeleton.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, DBusScreenshotSkeleton.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof DBusScreenshotSkeleton.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<DBusScreenshotSkeleton.SignalSignatures[K]> extends [any, ...infer Q]
                ? Q
                : never
        ): void;
        emit(signal: string, ...args: any[]): void;
        /**
         * Gets the {@link Gio.DBusObject} that `interface_` belongs to, if any.
         * @returns A {@link Gio.DBusObject} or `null`. The returned reference should be freed with `g_object_unref()`.
         */
        get_object(): Gio.DBusObject | null;
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
        set_object(object?: Gio.DBusObject | null): void;
        /**
         * Gets the {@link Gio.DBusObject} that `interface_` belongs to, if any.
         * @virtual
         */
        vfunc_dup_object(): Gio.DBusObject | null;
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
        vfunc_set_object(object?: Gio.DBusObject | null): void;
        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-gnome-Shell-Screenshot.FlashArea">FlashArea()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `phosh_dbus_screenshot_call_flash_area_finish()` to get the result of the operation.
         *
         * See `phosh_dbus_screenshot_call_flash_area_sync()` for the synchronous, blocking version of this method.
         * @param arg_x Argument to pass with the method invocation.
         * @param arg_y Argument to pass with the method invocation.
         * @param arg_width Argument to pass with the method invocation.
         * @param arg_height Argument to pass with the method invocation.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         */
        call_flash_area(
            arg_x: number,
            arg_y: number,
            arg_width: number,
            arg_height: number,
            cancellable?: Gio.Cancellable | null,
        ): globalThis.Promise<boolean>;
        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-gnome-Shell-Screenshot.FlashArea">FlashArea()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `phosh_dbus_screenshot_call_flash_area_finish()` to get the result of the operation.
         *
         * See `phosh_dbus_screenshot_call_flash_area_sync()` for the synchronous, blocking version of this method.
         * @param arg_x Argument to pass with the method invocation.
         * @param arg_y Argument to pass with the method invocation.
         * @param arg_width Argument to pass with the method invocation.
         * @param arg_height Argument to pass with the method invocation.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied or `null`.
         */
        call_flash_area(
            arg_x: number,
            arg_y: number,
            arg_width: number,
            arg_height: number,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-gnome-Shell-Screenshot.FlashArea">FlashArea()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `phosh_dbus_screenshot_call_flash_area_finish()` to get the result of the operation.
         *
         * See `phosh_dbus_screenshot_call_flash_area_sync()` for the synchronous, blocking version of this method.
         * @param arg_x Argument to pass with the method invocation.
         * @param arg_y Argument to pass with the method invocation.
         * @param arg_width Argument to pass with the method invocation.
         * @param arg_height Argument to pass with the method invocation.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied or `null`.
         */
        call_flash_area(
            arg_x: number,
            arg_y: number,
            arg_width: number,
            arg_height: number,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<boolean> | void;
        /**
         * Finishes an operation started with `phosh_dbus_screenshot_call_flash_area()`.
         * @param res The {@link Gio.AsyncResult} obtained from the {@link Gio.AsyncReadyCallback} passed to `phosh_dbus_screenshot_call_flash_area()`.
         * @returns `true` if the call succeeded, `false` if `error` is set.
         */
        call_flash_area_finish(res: Gio.AsyncResult): boolean;
        /**
         * Synchronously invokes the <link linkend="gdbus-method-org-gnome-Shell-Screenshot.FlashArea">FlashArea()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
         *
         * See `phosh_dbus_screenshot_call_flash_area()` for the asynchronous version of this method.
         * @param arg_x Argument to pass with the method invocation.
         * @param arg_y Argument to pass with the method invocation.
         * @param arg_width Argument to pass with the method invocation.
         * @param arg_height Argument to pass with the method invocation.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @returns `true` if the call succeeded, `false` if `error` is set.
         */
        call_flash_area_sync(
            arg_x: number,
            arg_y: number,
            arg_width: number,
            arg_height: number,
            cancellable?: Gio.Cancellable | null,
        ): boolean;
        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-gnome-Shell-Screenshot.PickColor">PickColor()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `phosh_dbus_screenshot_call_pick_color_finish()` to get the result of the operation.
         *
         * See `phosh_dbus_screenshot_call_pick_color_sync()` for the synchronous, blocking version of this method.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         */
        call_pick_color(cancellable?: Gio.Cancellable | null): globalThis.Promise<GLib.Variant | null>;
        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-gnome-Shell-Screenshot.PickColor">PickColor()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `phosh_dbus_screenshot_call_pick_color_finish()` to get the result of the operation.
         *
         * See `phosh_dbus_screenshot_call_pick_color_sync()` for the synchronous, blocking version of this method.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied or `null`.
         */
        call_pick_color(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-gnome-Shell-Screenshot.PickColor">PickColor()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `phosh_dbus_screenshot_call_pick_color_finish()` to get the result of the operation.
         *
         * See `phosh_dbus_screenshot_call_pick_color_sync()` for the synchronous, blocking version of this method.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied or `null`.
         */
        call_pick_color(
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<GLib.Variant | null> | void;
        /**
         * Finishes an operation started with `phosh_dbus_screenshot_call_pick_color()`.
         * @param res The {@link Gio.AsyncResult} obtained from the {@link Gio.AsyncReadyCallback} passed to `phosh_dbus_screenshot_call_pick_color()`.
         * @returns `true` if the call succeeded, `false` if `error` is set.
         */
        call_pick_color_finish(res: Gio.AsyncResult): [boolean, GLib.Variant | null];
        /**
         * Synchronously invokes the <link linkend="gdbus-method-org-gnome-Shell-Screenshot.PickColor">PickColor()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
         *
         * See `phosh_dbus_screenshot_call_pick_color()` for the asynchronous version of this method.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @returns `true` if the call succeeded, `false` if `error` is set.
         */
        call_pick_color_sync(cancellable?: Gio.Cancellable | null): [boolean, GLib.Variant | null];
        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-gnome-Shell-Screenshot.Screenshot">Screenshot()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `phosh_dbus_screenshot_call_screenshot_finish()` to get the result of the operation.
         *
         * See `phosh_dbus_screenshot_call_screenshot_sync()` for the synchronous, blocking version of this method.
         * @param arg_include_cursor Argument to pass with the method invocation.
         * @param arg_flash Argument to pass with the method invocation.
         * @param arg_filename Argument to pass with the method invocation.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         */
        call_screenshot(
            arg_include_cursor: boolean,
            arg_flash: boolean,
            arg_filename: string,
            cancellable?: Gio.Cancellable | null,
        ): globalThis.Promise<[boolean, string]>;
        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-gnome-Shell-Screenshot.Screenshot">Screenshot()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `phosh_dbus_screenshot_call_screenshot_finish()` to get the result of the operation.
         *
         * See `phosh_dbus_screenshot_call_screenshot_sync()` for the synchronous, blocking version of this method.
         * @param arg_include_cursor Argument to pass with the method invocation.
         * @param arg_flash Argument to pass with the method invocation.
         * @param arg_filename Argument to pass with the method invocation.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied or `null`.
         */
        call_screenshot(
            arg_include_cursor: boolean,
            arg_flash: boolean,
            arg_filename: string,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-gnome-Shell-Screenshot.Screenshot">Screenshot()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `phosh_dbus_screenshot_call_screenshot_finish()` to get the result of the operation.
         *
         * See `phosh_dbus_screenshot_call_screenshot_sync()` for the synchronous, blocking version of this method.
         * @param arg_include_cursor Argument to pass with the method invocation.
         * @param arg_flash Argument to pass with the method invocation.
         * @param arg_filename Argument to pass with the method invocation.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied or `null`.
         */
        call_screenshot(
            arg_include_cursor: boolean,
            arg_flash: boolean,
            arg_filename: string,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<[boolean, string]> | void;
        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-gnome-Shell-Screenshot.ScreenshotArea">ScreenshotArea()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `phosh_dbus_screenshot_call_screenshot_area_finish()` to get the result of the operation.
         *
         * See `phosh_dbus_screenshot_call_screenshot_area_sync()` for the synchronous, blocking version of this method.
         * @param arg_x Argument to pass with the method invocation.
         * @param arg_y Argument to pass with the method invocation.
         * @param arg_width Argument to pass with the method invocation.
         * @param arg_height Argument to pass with the method invocation.
         * @param arg_flash Argument to pass with the method invocation.
         * @param arg_filename Argument to pass with the method invocation.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         */
        call_screenshot_area(
            arg_x: number,
            arg_y: number,
            arg_width: number,
            arg_height: number,
            arg_flash: boolean,
            arg_filename: string,
            cancellable?: Gio.Cancellable | null,
        ): globalThis.Promise<[boolean, string]>;
        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-gnome-Shell-Screenshot.ScreenshotArea">ScreenshotArea()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `phosh_dbus_screenshot_call_screenshot_area_finish()` to get the result of the operation.
         *
         * See `phosh_dbus_screenshot_call_screenshot_area_sync()` for the synchronous, blocking version of this method.
         * @param arg_x Argument to pass with the method invocation.
         * @param arg_y Argument to pass with the method invocation.
         * @param arg_width Argument to pass with the method invocation.
         * @param arg_height Argument to pass with the method invocation.
         * @param arg_flash Argument to pass with the method invocation.
         * @param arg_filename Argument to pass with the method invocation.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied or `null`.
         */
        call_screenshot_area(
            arg_x: number,
            arg_y: number,
            arg_width: number,
            arg_height: number,
            arg_flash: boolean,
            arg_filename: string,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-gnome-Shell-Screenshot.ScreenshotArea">ScreenshotArea()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `phosh_dbus_screenshot_call_screenshot_area_finish()` to get the result of the operation.
         *
         * See `phosh_dbus_screenshot_call_screenshot_area_sync()` for the synchronous, blocking version of this method.
         * @param arg_x Argument to pass with the method invocation.
         * @param arg_y Argument to pass with the method invocation.
         * @param arg_width Argument to pass with the method invocation.
         * @param arg_height Argument to pass with the method invocation.
         * @param arg_flash Argument to pass with the method invocation.
         * @param arg_filename Argument to pass with the method invocation.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied or `null`.
         */
        call_screenshot_area(
            arg_x: number,
            arg_y: number,
            arg_width: number,
            arg_height: number,
            arg_flash: boolean,
            arg_filename: string,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<[boolean, string]> | void;
        /**
         * Finishes an operation started with `phosh_dbus_screenshot_call_screenshot_area()`.
         * @param res The {@link Gio.AsyncResult} obtained from the {@link Gio.AsyncReadyCallback} passed to `phosh_dbus_screenshot_call_screenshot_area()`.
         * @returns `true` if the call succeeded, `false` if `error` is set.
         */
        call_screenshot_area_finish(res: Gio.AsyncResult): [boolean, boolean, string];
        /**
         * Synchronously invokes the <link linkend="gdbus-method-org-gnome-Shell-Screenshot.ScreenshotArea">ScreenshotArea()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
         *
         * See `phosh_dbus_screenshot_call_screenshot_area()` for the asynchronous version of this method.
         * @param arg_x Argument to pass with the method invocation.
         * @param arg_y Argument to pass with the method invocation.
         * @param arg_width Argument to pass with the method invocation.
         * @param arg_height Argument to pass with the method invocation.
         * @param arg_flash Argument to pass with the method invocation.
         * @param arg_filename Argument to pass with the method invocation.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @returns `true` if the call succeeded, `false` if `error` is set.
         */
        call_screenshot_area_sync(
            arg_x: number,
            arg_y: number,
            arg_width: number,
            arg_height: number,
            arg_flash: boolean,
            arg_filename: string,
            cancellable?: Gio.Cancellable | null,
        ): [boolean, boolean, string];
        /**
         * Finishes an operation started with `phosh_dbus_screenshot_call_screenshot()`.
         * @param res The {@link Gio.AsyncResult} obtained from the {@link Gio.AsyncReadyCallback} passed to `phosh_dbus_screenshot_call_screenshot()`.
         * @returns `true` if the call succeeded, `false` if `error` is set.
         */
        call_screenshot_finish(res: Gio.AsyncResult): [boolean, boolean, string];
        /**
         * Synchronously invokes the <link linkend="gdbus-method-org-gnome-Shell-Screenshot.Screenshot">Screenshot()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
         *
         * See `phosh_dbus_screenshot_call_screenshot()` for the asynchronous version of this method.
         * @param arg_include_cursor Argument to pass with the method invocation.
         * @param arg_flash Argument to pass with the method invocation.
         * @param arg_filename Argument to pass with the method invocation.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @returns `true` if the call succeeded, `false` if `error` is set.
         */
        call_screenshot_sync(
            arg_include_cursor: boolean,
            arg_flash: boolean,
            arg_filename: string,
            cancellable?: Gio.Cancellable | null,
        ): [boolean, boolean, string];
        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-gnome-Shell-Screenshot.ScreenshotWindow">ScreenshotWindow()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `phosh_dbus_screenshot_call_screenshot_window_finish()` to get the result of the operation.
         *
         * See `phosh_dbus_screenshot_call_screenshot_window_sync()` for the synchronous, blocking version of this method.
         * @param arg_include_frame Argument to pass with the method invocation.
         * @param arg_include_cursor Argument to pass with the method invocation.
         * @param arg_flash Argument to pass with the method invocation.
         * @param arg_filename Argument to pass with the method invocation.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         */
        call_screenshot_window(
            arg_include_frame: boolean,
            arg_include_cursor: boolean,
            arg_flash: boolean,
            arg_filename: string,
            cancellable?: Gio.Cancellable | null,
        ): globalThis.Promise<[boolean, string]>;
        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-gnome-Shell-Screenshot.ScreenshotWindow">ScreenshotWindow()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `phosh_dbus_screenshot_call_screenshot_window_finish()` to get the result of the operation.
         *
         * See `phosh_dbus_screenshot_call_screenshot_window_sync()` for the synchronous, blocking version of this method.
         * @param arg_include_frame Argument to pass with the method invocation.
         * @param arg_include_cursor Argument to pass with the method invocation.
         * @param arg_flash Argument to pass with the method invocation.
         * @param arg_filename Argument to pass with the method invocation.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied or `null`.
         */
        call_screenshot_window(
            arg_include_frame: boolean,
            arg_include_cursor: boolean,
            arg_flash: boolean,
            arg_filename: string,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-gnome-Shell-Screenshot.ScreenshotWindow">ScreenshotWindow()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `phosh_dbus_screenshot_call_screenshot_window_finish()` to get the result of the operation.
         *
         * See `phosh_dbus_screenshot_call_screenshot_window_sync()` for the synchronous, blocking version of this method.
         * @param arg_include_frame Argument to pass with the method invocation.
         * @param arg_include_cursor Argument to pass with the method invocation.
         * @param arg_flash Argument to pass with the method invocation.
         * @param arg_filename Argument to pass with the method invocation.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied or `null`.
         */
        call_screenshot_window(
            arg_include_frame: boolean,
            arg_include_cursor: boolean,
            arg_flash: boolean,
            arg_filename: string,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<[boolean, string]> | void;
        /**
         * Finishes an operation started with `phosh_dbus_screenshot_call_screenshot_window()`.
         * @param res The {@link Gio.AsyncResult} obtained from the {@link Gio.AsyncReadyCallback} passed to `phosh_dbus_screenshot_call_screenshot_window()`.
         * @returns `true` if the call succeeded, `false` if `error` is set.
         */
        call_screenshot_window_finish(res: Gio.AsyncResult): [boolean, boolean, string];
        /**
         * Synchronously invokes the <link linkend="gdbus-method-org-gnome-Shell-Screenshot.ScreenshotWindow">ScreenshotWindow()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
         *
         * See `phosh_dbus_screenshot_call_screenshot_window()` for the asynchronous version of this method.
         * @param arg_include_frame Argument to pass with the method invocation.
         * @param arg_include_cursor Argument to pass with the method invocation.
         * @param arg_flash Argument to pass with the method invocation.
         * @param arg_filename Argument to pass with the method invocation.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @returns `true` if the call succeeded, `false` if `error` is set.
         */
        call_screenshot_window_sync(
            arg_include_frame: boolean,
            arg_include_cursor: boolean,
            arg_flash: boolean,
            arg_filename: string,
            cancellable?: Gio.Cancellable | null,
        ): [boolean, boolean, string];
        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-gnome-Shell-Screenshot.SelectArea">SelectArea()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `phosh_dbus_screenshot_call_select_area_finish()` to get the result of the operation.
         *
         * See `phosh_dbus_screenshot_call_select_area_sync()` for the synchronous, blocking version of this method.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         */
        call_select_area(cancellable?: Gio.Cancellable | null): globalThis.Promise<[number, number, number, number]>;
        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-gnome-Shell-Screenshot.SelectArea">SelectArea()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `phosh_dbus_screenshot_call_select_area_finish()` to get the result of the operation.
         *
         * See `phosh_dbus_screenshot_call_select_area_sync()` for the synchronous, blocking version of this method.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied or `null`.
         */
        call_select_area(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-gnome-Shell-Screenshot.SelectArea">SelectArea()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `phosh_dbus_screenshot_call_select_area_finish()` to get the result of the operation.
         *
         * See `phosh_dbus_screenshot_call_select_area_sync()` for the synchronous, blocking version of this method.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied or `null`.
         */
        call_select_area(
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<[number, number, number, number]> | void;
        /**
         * Finishes an operation started with `phosh_dbus_screenshot_call_select_area()`.
         * @param res The {@link Gio.AsyncResult} obtained from the {@link Gio.AsyncReadyCallback} passed to `phosh_dbus_screenshot_call_select_area()`.
         * @returns `true` if the call succeeded, `false` if `error` is set.
         */
        call_select_area_finish(res: Gio.AsyncResult): [boolean, number, number, number, number];
        /**
         * Synchronously invokes the <link linkend="gdbus-method-org-gnome-Shell-Screenshot.SelectArea">SelectArea()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
         *
         * See `phosh_dbus_screenshot_call_select_area()` for the asynchronous version of this method.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @returns `true` if the call succeeded, `false` if `error` is set.
         */
        call_select_area_sync(cancellable?: Gio.Cancellable | null): [boolean, number, number, number, number];
        /**
         * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-gnome-Shell-Screenshot.FlashArea">FlashArea()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use `g_dbus_method_invocation_return_error()` or similar.
         *
         * This method will free `invocation`, you cannot use it afterwards.
         * @param invocation A {@link Gio.DBusMethodInvocation}.
         */
        complete_flash_area(invocation: Gio.DBusMethodInvocation): void;
        /**
         * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-gnome-Shell-Screenshot.PickColor">PickColor()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use `g_dbus_method_invocation_return_error()` or similar.
         *
         * This method will free `invocation`, you cannot use it afterwards.
         * @param invocation A {@link Gio.DBusMethodInvocation}.
         * @param result Parameter to return.
         */
        complete_pick_color(invocation: Gio.DBusMethodInvocation, result: GLib.Variant): void;
        /**
         * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-gnome-Shell-Screenshot.Screenshot">Screenshot()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use `g_dbus_method_invocation_return_error()` or similar.
         *
         * This method will free `invocation`, you cannot use it afterwards.
         * @param invocation A {@link Gio.DBusMethodInvocation}.
         * @param success Parameter to return.
         * @param filename_used Parameter to return.
         */
        complete_screenshot(invocation: Gio.DBusMethodInvocation, success: boolean, filename_used: string): void;
        /**
         * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-gnome-Shell-Screenshot.ScreenshotArea">ScreenshotArea()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use `g_dbus_method_invocation_return_error()` or similar.
         *
         * This method will free `invocation`, you cannot use it afterwards.
         * @param invocation A {@link Gio.DBusMethodInvocation}.
         * @param success Parameter to return.
         * @param filename_used Parameter to return.
         */
        complete_screenshot_area(invocation: Gio.DBusMethodInvocation, success: boolean, filename_used: string): void;
        /**
         * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-gnome-Shell-Screenshot.ScreenshotWindow">ScreenshotWindow()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use `g_dbus_method_invocation_return_error()` or similar.
         *
         * This method will free `invocation`, you cannot use it afterwards.
         * @param invocation A {@link Gio.DBusMethodInvocation}.
         * @param success Parameter to return.
         * @param filename_used Parameter to return.
         */
        complete_screenshot_window(invocation: Gio.DBusMethodInvocation, success: boolean, filename_used: string): void;
        /**
         * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-gnome-Shell-Screenshot.SelectArea">SelectArea()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use `g_dbus_method_invocation_return_error()` or similar.
         *
         * This method will free `invocation`, you cannot use it afterwards.
         * @param invocation A {@link Gio.DBusMethodInvocation}.
         * @param x Parameter to return.
         * @param y Parameter to return.
         * @param width Parameter to return.
         * @param height Parameter to return.
         */
        complete_select_area(
            invocation: Gio.DBusMethodInvocation,
            x: number,
            y: number,
            width: number,
            height: number,
        ): void;
        /**
         * Handler for the {@link Phosh.DBusScreenshot.SignalSignatures.handle_flash_area | Phosh.DBusScreenshot::handle-flash-area} signal.
         * @param invocation
         * @param arg_x
         * @param arg_y
         * @param arg_width
         * @param arg_height
         * @virtual
         */
        vfunc_handle_flash_area(
            invocation: Gio.DBusMethodInvocation,
            arg_x: number,
            arg_y: number,
            arg_width: number,
            arg_height: number,
        ): boolean;
        /**
         * Handler for the {@link Phosh.DBusScreenshot.SignalSignatures.handle_pick_color | Phosh.DBusScreenshot::handle-pick-color} signal.
         * @param invocation
         * @virtual
         */
        vfunc_handle_pick_color(invocation: Gio.DBusMethodInvocation): boolean;
        /**
         * Handler for the {@link Phosh.DBusScreenshot.SignalSignatures.handle_screenshot | Phosh.DBusScreenshot::handle-screenshot} signal.
         * @param invocation
         * @param arg_include_cursor
         * @param arg_flash
         * @param arg_filename
         * @virtual
         */
        vfunc_handle_screenshot(
            invocation: Gio.DBusMethodInvocation,
            arg_include_cursor: boolean,
            arg_flash: boolean,
            arg_filename: string,
        ): boolean;
        /**
         * Handler for the {@link Phosh.DBusScreenshot.SignalSignatures.handle_screenshot_area | Phosh.DBusScreenshot::handle-screenshot-area} signal.
         * @param invocation
         * @param arg_x
         * @param arg_y
         * @param arg_width
         * @param arg_height
         * @param arg_flash
         * @param arg_filename
         * @virtual
         */
        vfunc_handle_screenshot_area(
            invocation: Gio.DBusMethodInvocation,
            arg_x: number,
            arg_y: number,
            arg_width: number,
            arg_height: number,
            arg_flash: boolean,
            arg_filename: string,
        ): boolean;
        /**
         * Handler for the {@link Phosh.DBusScreenshot.SignalSignatures.handle_screenshot_window | Phosh.DBusScreenshot::handle-screenshot-window} signal.
         * @param invocation
         * @param arg_include_frame
         * @param arg_include_cursor
         * @param arg_flash
         * @param arg_filename
         * @virtual
         */
        vfunc_handle_screenshot_window(
            invocation: Gio.DBusMethodInvocation,
            arg_include_frame: boolean,
            arg_include_cursor: boolean,
            arg_flash: boolean,
            arg_filename: string,
        ): boolean;
        /**
         * Handler for the {@link Phosh.DBusScreenshot.SignalSignatures.handle_select_area | Phosh.DBusScreenshot::handle-select-area} signal.
         * @param invocation
         * @virtual
         */
        vfunc_handle_select_area(invocation: Gio.DBusMethodInvocation): boolean;
        /**
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target`.
         *
         * Whenever the `source_property` is changed the `target_property` is
         * updated using the same value. For instance:
         *
         *
         * ```c
         *   g_object_bind_property (action, "active", widget, "sensitive", 0);
         * ```
         *
         *
         * Will result in the "sensitive" property of the widget {@link GObject.Object} instance to be
         * updated with the same value of the "active" property of the action {@link GObject.Object}
         * instance.
         *
         * If `flags` contains {@link GObject.BindingFlags.BIDIRECTIONAL} then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well.
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. To remove the binding without affecting the
         * `source` and the `target` you can just call `g_object_unref()` on the returned
         * {@link GObject.Binding} instance.
         *
         * Removing the binding by calling `g_object_unref()` on it must only be done if
         * the binding, `source` and `target` are only used from a single thread and it
         * is clear that both `source` and `target` outlive the binding. Especially it
         * is not safe to rely on this if the binding, `source` or `target` can be
         * finalized from different threads. Keep another reference to the binding and
         * use `g_binding_unbind()` instead to be on the safe side.
         *
         * A {@link GObject.Object} can have multiple bindings.
         * @param source_property the property on `source` to bind
         * @param target the target {@link GObject.Object}
         * @param target_property the property on `target` to bind
         * @param flags flags to pass to {@link GObject.Binding}
         * @returns the {@link GObject.Binding} instance representing the     binding between the two {@link GObject.Object} instances. The binding is released     whenever the {@link GObject.Binding} reference count reaches zero.
         */
        bind_property(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
        ): GObject.Binding;
        /**
         * Complete version of `g_object_bind_property()`.
         *
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target`, allowing you to set the transformation functions to be used by
         * the binding.
         *
         * If `flags` contains {@link GObject.BindingFlags.BIDIRECTIONAL} then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well. The `transform_from` function is only used in case
         * of bidirectional bindings, otherwise it will be ignored
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. This will release the reference that is
         * being held on the {@link GObject.Binding} instance; if you want to hold on to the
         * {@link GObject.Binding} instance, you will need to hold a reference to it.
         *
         * To remove the binding, call `g_binding_unbind()`.
         *
         * A {@link GObject.Object} can have multiple bindings.
         *
         * The same `user_data` parameter will be used for both `transform_to`
         * and `transform_from` transformation functions; the `notify` function will
         * be called once, when the binding is removed. If you need different data
         * for each transformation function, please use
         * `g_object_bind_property_with_closures()` instead.
         * @param source_property the property on `source` to bind
         * @param target the target {@link GObject.Object}
         * @param target_property the property on `target` to bind
         * @param flags flags to pass to {@link GObject.Binding}
         * @param transform_to the transformation function     from the `source` to the `target`, or `null` to use the default
         * @param transform_from the transformation function     from the `target` to the `source`, or `null` to use the default
         * @param notify a function to call when disposing the binding, to free     resources used by the transformation functions, or `null` if not required
         * @returns the {@link GObject.Binding} instance representing the     binding between the two {@link GObject.Object} instances. The binding is released     whenever the {@link GObject.Binding} reference count reaches zero.
         */
        bind_property_full(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
            transform_to?: GObject.BindingTransformFunc | null,
            transform_from?: GObject.BindingTransformFunc | null,
            notify?: GLib.DestroyNotify | null,
        ): GObject.Binding;
        /**
         * @param args
         */
        // Conflicted with GObject.Object.bind_property_full
        bind_property_full(...args: never[]): any;
        /**
         * This function is intended for {@link GObject.Object} implementations to re-enforce
         * a [floating][floating-ref] object reference. Doing this is seldom
         * required: all `GInitiallyUnowneds` are created with a floating reference
         * which usually just needs to be sunken by calling `g_object_ref_sink()`.
         */
        force_floating(): void;
        /**
         * Increases the freeze count on `object`. If the freeze count is
         * non-zero, the emission of "notify" signals on `object` is
         * stopped. The signals are queued until the freeze count is decreased
         * to zero. Duplicate notifications are squashed so that at most one
         * {@link GObject.Object.SignalSignatures.notify | GObject.Object::notify} signal is emitted for each property modified while the
         * object is frozen.
         *
         * This is necessary for accessors that modify multiple properties to prevent
         * premature notification while the object is still being modified.
         */
        freeze_notify(): void;
        /**
         * Gets a named field from the objects table of associations (see `g_object_set_data()`).
         * @param key name of the key for that association
         * @returns the data if found,          or `null` if no such data exists.
         */
        get_data(key: string): any | null;
        /**
         * Gets a property of an object.
         *
         * The value can be:
         * - an empty GObject.Value initialized by G_VALUE_INIT, which will be automatically initialized with the expected type of the property (since GLib 2.60)
         * - a GObject.Value initialized with the expected type of the property
         * - a GObject.Value initialized with a type to which the expected type of the property can be transformed
         *
         * In general, a copy is made of the property contents and the caller is responsible for freeing the memory by calling GObject.Value.unset.
         *
         * Note that GObject.Object.get_property is really intended for language bindings, GObject.Object.get is much more convenient for C programming.
         * @param property_name The name of the property to get
         * @param value Return location for the property value. Can be an empty GObject.Value initialized by G_VALUE_INIT (auto-initialized with expected type since GLib 2.60), a GObject.Value initialized with the expected property type, or a GObject.Value initialized with a transformable type
         */
        get_property(property_name: string, value: GObject.Value | any): any;
        /**
         * This function gets back user data pointers stored via
         * `g_object_set_qdata()`.
         * @param quark A {@link GLib.Quark}, naming the user data pointer
         * @returns The user data pointer set, or `null`
         */
        get_qdata(quark: GLib.Quark): any | null;
        /**
         * Gets `n_properties` properties for an `object`.
         * Obtained properties will be set to `values`. All properties must be valid.
         * Warnings will be emitted and undefined behaviour may result if invalid
         * properties are passed in.
         * @param names the names of each property to get
         * @param values the values of each property to get
         */
        getv(names: string[], values: (GObject.Value | any)[]): void;
        /**
         * Checks whether `object` has a [floating][floating-ref] reference.
         * @returns `true` if `object` has a floating reference
         */
        is_floating(): boolean;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use `g_object_notify_by_pspec()`
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * `g_object_freeze_notify()`. In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when `g_object_thaw_notify()` is
         * called.
         * @param property_name the name of a property installed on the class of `object`.
         */
        notify(property_name: string): void;
        /**
         * Emits a "notify" signal for the property specified by `pspec` on `object`.
         *
         * This function omits the property name lookup, hence it is faster than
         * `g_object_notify()`.
         *
         * One way to avoid using `g_object_notify()` from within the
         * class that registered the properties, and using `g_object_notify_by_pspec()`
         * instead, is to store the GParamSpec used with
         * `g_object_class_install_property()` inside a static array, e.g.:
         *
         *
         * ```c
         *   typedef enum
         *   {
         *     PROP_FOO = 1,
         *     PROP_LAST
         *   } MyObjectProperty;
         *
         *   static GParamSpec *properties[PROP_LAST];
         *
         *   static void
         *   my_object_class_init (MyObjectClass *klass)
         *   {
         *     properties[PROP_FOO] = g_param_spec_int ("foo", NULL, NULL,
         *                                              0, 100,
         *                                              50,
         *                                              G_PARAM_READWRITE | G_PARAM_STATIC_STRINGS);
         *     g_object_class_install_property (gobject_class,
         *                                      PROP_FOO,
         *                                      properties[PROP_FOO]);
         *   }
         * ```
         *
         *
         * and then notify a change on the "foo" property with:
         *
         *
         * ```c
         *   g_object_notify_by_pspec (self, properties[PROP_FOO]);
         * ```
         *
         * @param pspec the {@link GObject.ParamSpec} of a property installed on the class of `object`.
         */
        notify_by_pspec(pspec: GObject.ParamSpec): void;
        /**
         * Increases the reference count of `object`.
         *
         * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
         * of `object` will be propagated to the return type (using the GCC `typeof()`
         * extension), so any casting the caller needs to do on the return type must be
         * explicit.
         * @returns the same `object`
         */
        ref(): GObject.Object;
        /**
         * Increase the reference count of `object`, and possibly remove the
         * [floating][floating-ref] reference, if `object` has a floating reference.
         *
         * In other words, if the object is floating, then this call "assumes
         * ownership" of the floating reference, converting it to a normal
         * reference by clearing the floating flag while leaving the reference
         * count unchanged.  If the object is not floating, then this call
         * adds a new normal reference increasing the reference count by one.
         *
         * Since GLib 2.56, the type of `object` will be propagated to the return type
         * under the same conditions as for `g_object_ref()`.
         * @returns `object`
         */
        ref_sink(): GObject.Object;
        /**
         * Releases all references to other objects. This can be used to break
         * reference cycles.
         *
         * This function should only be called from object system implementations.
         */
        run_dispose(): void;
        /**
         * Each object carries around a table of associations from
         * strings to pointers.  This function lets you set an association.
         *
         * If the object already had an association with that name,
         * the old association will be destroyed.
         *
         * Internally, the `key` is converted to a {@link GLib.Quark} using `g_quark_from_string()`.
         * This means a copy of `key` is kept permanently (even after `object` has been
         * finalized) — so it is recommended to only use a small, bounded set of values
         * for `key` in your program, to avoid the {@link GLib.Quark} storage growing unbounded.
         * @param key name of the key
         * @param data data to associate with that key
         */
        set_data(key: string, data?: any | null): void;
        /**
         * Sets a property on an object.
         * @param property_name The name of the property to set
         * @param value The value to set the property to
         */
        set_property(property_name: string, value: GObject.Value | any): void;
        /**
         * Remove a specified datum from the object's data associations,
         * without invoking the association's destroy handler.
         * @param key name of the key
         * @returns the data if found, or `null`          if no such data exists.
         */
        steal_data(key: string): any | null;
        /**
         * This function gets back user data pointers stored via
         * `g_object_set_qdata()` and removes the `data` from object
         * without invoking its `destroy()` function (if any was
         * set).
         * Usually, calling this function is only required to update
         * user data pointers with a destroy notifier, for example:
         *
         * ```c
         * void
         * object_add_to_user_list (GObject     *object,
         *                          const gchar *new_string)
         * {
         *   // the quark, naming the object data
         *   GQuark quark_string_list = g_quark_from_static_string ("my-string-list");
         *   // retrieve the old string list
         *   GList *list = g_object_steal_qdata (object, quark_string_list);
         *
         *   // prepend new string
         *   list = g_list_prepend (list, g_strdup (new_string));
         *   // this changed 'list', so we need to set it again
         *   g_object_set_qdata_full (object, quark_string_list, list, free_string_list);
         * }
         * static void
         * free_string_list (gpointer data)
         * {
         *   GList *node, *list = data;
         *
         *   for (node = list; node; node = node->next)
         *     g_free (node->data);
         *   g_list_free (list);
         * }
         * ```
         *
         * Using `g_object_get_qdata()` in the above example, instead of
         * `g_object_steal_qdata()` would have left the destroy function set,
         * and thus the partial string list would have been freed upon
         * `g_object_set_qdata_full()`.
         * @param quark A {@link GLib.Quark}, naming the user data pointer
         * @returns The user data pointer set, or `null`
         */
        steal_qdata(quark: GLib.Quark): any | null;
        /**
         * Reverts the effect of a previous call to
         * `g_object_freeze_notify()`. The freeze count is decreased on `object`
         * and when it reaches zero, queued "notify" signals are emitted.
         *
         * Duplicate notifications for each property are squashed so that at most one
         * {@link GObject.Object.SignalSignatures.notify | GObject.Object::notify} signal is emitted for each property, in the reverse order
         * in which they have been queued.
         *
         * It is an error to call this function when the freeze count is zero.
         */
        thaw_notify(): void;
        /**
         * Decreases the reference count of `object`. When its reference count
         * drops to 0, the object is finalized (i.e. its memory is freed).
         *
         * If the pointer to the {@link GObject.Object} may be reused in future (for example, if it is
         * an instance variable of another object), it is recommended to clear the
         * pointer to `null` rather than retain a dangling pointer to a potentially
         * invalid {@link GObject.Object} instance. Use `g_clear_object()` for this.
         */
        unref(): void;
        /**
         * This function essentially limits the life time of the `closure` to
         * the life time of the object. That is, when the object is finalized,
         * the `closure` is invalidated by calling `g_closure_invalidate()` on
         * it, in order to prevent invocations of the closure with a finalized
         * (nonexisting) object. Also, `g_object_ref()` and `g_object_unref()` are
         * added as marshal guards to the `closure`, to ensure that an extra
         * reference count is held on `object` during invocation of the
         * `closure`.  Usually, this function will be called on closures that
         * use this `object` as closure data.
         * @param closure {@link GObject.Closure} to watch
         */
        watch_closure(closure: GObject.Closure): void;
        /**
         * the `constructed` function is called by `g_object_new()` as the
         *  final step of the object creation process.  At the point of the call, all
         *  construction properties have been set on the object.  The purpose of this
         *  call is to allow for object initialisation steps that can only be performed
         *  after construction properties have been set.  `constructed` implementors
         *  should chain up to the `constructed` call of their parent class to allow it
         *  to complete its initialisation.
         * @virtual
         */
        vfunc_constructed(): void;
        /**
         * emits property change notification for a bunch
         *  of properties. Overriding `dispatch_properties_changed` should be rarely
         *  needed.
         * @param n_pspecs
         * @param pspecs
         * @virtual
         */
        vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
        /**
         * the `dispose` function is supposed to drop all references to other
         *  objects, but keep the instance otherwise intact, so that client method
         *  invocations still work. It may be run multiple times (due to reference
         *  loops). Before returning, `dispose` should chain up to the `dispose` method
         *  of the parent class.
         * @virtual
         */
        vfunc_dispose(): void;
        /**
         * instance finalization function, should finish the finalization of
         *  the instance begun in `dispose` and chain up to the `finalize` method of the
         *  parent class.
         * @virtual
         */
        vfunc_finalize(): void;
        /**
         * the generic getter for all properties of this type. Should be
         *  overridden for every type with properties.
         * @param property_id
         * @param value
         * @param pspec
         * @virtual
         */
        vfunc_get_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use `g_object_notify_by_pspec()`
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * `g_object_freeze_notify()`. In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when `g_object_thaw_notify()` is
         * called.
         * @param pspec
         * @virtual
         */
        vfunc_notify(pspec: GObject.ParamSpec): void;
        /**
         * the generic setter for all properties of this type. Should be
         *  overridden for every type with properties. If implementations of
         *  `set_property` don't emit property change notification explicitly, this will
         *  be done implicitly by the type system. However, if the notify signal is
         *  emitted explicitly, the type system will not emit it a second time.
         * @param property_id
         * @param value
         * @param pspec
         * @virtual
         */
        vfunc_set_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Disconnects a handler from an instance so it will not be called during any future or currently ongoing emissions of the signal it has been connected to.
         * @param id Handler ID of the handler to be disconnected
         */
        disconnect(id: number): void;
        /**
         * Sets multiple properties of an object at once. The properties argument should be a dictionary mapping property names to values.
         * @param properties Object containing the properties to set
         */
        set(properties: { [key: string]: any }): void;
        /**
         * Blocks a handler of an instance so it will not be called during any signal emissions
         * @param id Handler ID of the handler to be blocked
         */
        block_signal_handler(id: number): void;
        /**
         * Unblocks a handler so it will be called again during any signal emissions
         * @param id Handler ID of the handler to be unblocked
         */
        unblock_signal_handler(id: number): void;
        /**
         * Stops a signal's emission by the given signal name. This will prevent the default handler and any subsequent signal handlers from being invoked.
         * @param detailedName Name of the signal to stop emission of
         */
        stop_emission_by_name(detailedName: string): void;
    }

    namespace LayerSurface {
        // Signal signatures
        interface SignalSignatures extends Gtk.Window.SignalSignatures {
            /**
             * This signal is emitted once we received the configure event from the
             * compositor.
             * @signal
             * @run-last
             */
            configured: () => void;
            'notify::anchor': (pspec: GObject.ParamSpec) => void;
            'notify::configured-height': (pspec: GObject.ParamSpec) => void;
            'notify::configured-width': (pspec: GObject.ParamSpec) => void;
            'notify::exclusive-zone': (pspec: GObject.ParamSpec) => void;
            'notify::height': (pspec: GObject.ParamSpec) => void;
            'notify::kbd-interactivity': (pspec: GObject.ParamSpec) => void;
            'notify::layer': (pspec: GObject.ParamSpec) => void;
            'notify::layer-shell': (pspec: GObject.ParamSpec) => void;
            'notify::margin-bottom': (pspec: GObject.ParamSpec) => void;
            'notify::margin-left': (pspec: GObject.ParamSpec) => void;
            'notify::margin-right': (pspec: GObject.ParamSpec) => void;
            'notify::margin-top': (pspec: GObject.ParamSpec) => void;
            'notify::namespace': (pspec: GObject.ParamSpec) => void;
            'notify::width': (pspec: GObject.ParamSpec) => void;
            'notify::wl-output': (pspec: GObject.ParamSpec) => void;
            'notify::accept-focus': (pspec: GObject.ParamSpec) => void;
            'notify::application': (pspec: GObject.ParamSpec) => void;
            'notify::attached-to': (pspec: GObject.ParamSpec) => void;
            'notify::decorated': (pspec: GObject.ParamSpec) => void;
            'notify::default-height': (pspec: GObject.ParamSpec) => void;
            'notify::default-width': (pspec: GObject.ParamSpec) => void;
            'notify::deletable': (pspec: GObject.ParamSpec) => void;
            'notify::destroy-with-parent': (pspec: GObject.ParamSpec) => void;
            'notify::focus-on-map': (pspec: GObject.ParamSpec) => void;
            'notify::focus-visible': (pspec: GObject.ParamSpec) => void;
            'notify::gravity': (pspec: GObject.ParamSpec) => void;
            'notify::has-resize-grip': (pspec: GObject.ParamSpec) => void;
            'notify::has-toplevel-focus': (pspec: GObject.ParamSpec) => void;
            'notify::hide-titlebar-when-maximized': (pspec: GObject.ParamSpec) => void;
            'notify::icon': (pspec: GObject.ParamSpec) => void;
            'notify::icon-name': (pspec: GObject.ParamSpec) => void;
            'notify::is-active': (pspec: GObject.ParamSpec) => void;
            'notify::is-maximized': (pspec: GObject.ParamSpec) => void;
            'notify::mnemonics-visible': (pspec: GObject.ParamSpec) => void;
            'notify::modal': (pspec: GObject.ParamSpec) => void;
            'notify::resizable': (pspec: GObject.ParamSpec) => void;
            'notify::resize-grip-visible': (pspec: GObject.ParamSpec) => void;
            'notify::role': (pspec: GObject.ParamSpec) => void;
            'notify::screen': (pspec: GObject.ParamSpec) => void;
            'notify::skip-pager-hint': (pspec: GObject.ParamSpec) => void;
            'notify::skip-taskbar-hint': (pspec: GObject.ParamSpec) => void;
            'notify::startup-id': (pspec: GObject.ParamSpec) => void;
            'notify::title': (pspec: GObject.ParamSpec) => void;
            'notify::transient-for': (pspec: GObject.ParamSpec) => void;
            'notify::type': (pspec: GObject.ParamSpec) => void;
            'notify::type-hint': (pspec: GObject.ParamSpec) => void;
            'notify::urgency-hint': (pspec: GObject.ParamSpec) => void;
            'notify::window-position': (pspec: GObject.ParamSpec) => void;
            'notify::border-width': (pspec: GObject.ParamSpec) => void;
            'notify::child': (pspec: GObject.ParamSpec) => void;
            'notify::resize-mode': (pspec: GObject.ParamSpec) => void;
            'notify::app-paintable': (pspec: GObject.ParamSpec) => void;
            'notify::can-default': (pspec: GObject.ParamSpec) => void;
            'notify::can-focus': (pspec: GObject.ParamSpec) => void;
            'notify::composite-child': (pspec: GObject.ParamSpec) => void;
            'notify::double-buffered': (pspec: GObject.ParamSpec) => void;
            'notify::events': (pspec: GObject.ParamSpec) => void;
            'notify::expand': (pspec: GObject.ParamSpec) => void;
            'notify::focus-on-click': (pspec: GObject.ParamSpec) => void;
            'notify::halign': (pspec: GObject.ParamSpec) => void;
            'notify::has-default': (pspec: GObject.ParamSpec) => void;
            'notify::has-focus': (pspec: GObject.ParamSpec) => void;
            'notify::has-tooltip': (pspec: GObject.ParamSpec) => void;
            'notify::height-request': (pspec: GObject.ParamSpec) => void;
            'notify::hexpand': (pspec: GObject.ParamSpec) => void;
            'notify::hexpand-set': (pspec: GObject.ParamSpec) => void;
            'notify::is-focus': (pspec: GObject.ParamSpec) => void;
            'notify::margin': (pspec: GObject.ParamSpec) => void;
            'notify::margin-end': (pspec: GObject.ParamSpec) => void;
            'notify::margin-start': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::no-show-all': (pspec: GObject.ParamSpec) => void;
            'notify::opacity': (pspec: GObject.ParamSpec) => void;
            'notify::parent': (pspec: GObject.ParamSpec) => void;
            'notify::receives-default': (pspec: GObject.ParamSpec) => void;
            'notify::scale-factor': (pspec: GObject.ParamSpec) => void;
            'notify::sensitive': (pspec: GObject.ParamSpec) => void;
            'notify::style': (pspec: GObject.ParamSpec) => void;
            'notify::tooltip-markup': (pspec: GObject.ParamSpec) => void;
            'notify::tooltip-text': (pspec: GObject.ParamSpec) => void;
            'notify::valign': (pspec: GObject.ParamSpec) => void;
            'notify::vexpand': (pspec: GObject.ParamSpec) => void;
            'notify::vexpand-set': (pspec: GObject.ParamSpec) => void;
            'notify::visible': (pspec: GObject.ParamSpec) => void;
            'notify::width-request': (pspec: GObject.ParamSpec) => void;
            'notify::window': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps
            extends Gtk.Window.ConstructorProps, Atk.ImplementorIface.ConstructorProps, Gtk.Buildable.ConstructorProps {
            anchor: number;
            configured_height: number;
            configuredHeight: number;
            configured_width: number;
            configuredWidth: number;
            exclusive_zone: number;
            exclusiveZone: number;
            height: number;
            kbd_interactivity: boolean;
            kbdInteractivity: boolean;
            layer: number;
            layer_shell: any;
            layerShell: any;
            margin_bottom: number;
            marginBottom: number;
            margin_left: number;
            marginLeft: number;
            margin_right: number;
            marginRight: number;
            margin_top: number;
            marginTop: number;
            namespace: string;
            width: number;
            wl_output: any;
            wlOutput: any;
        }
    }

    /**
     * A {@link Gtk.Window} rendered as a LayerSurface by the compositor
     *
     * {@link Phosh.LayerSurface} allows to use a Wayland surface backed by the
     * layer-shell protocol as {@link Gtk.Window}. This allows to render e.g. panels and
     * backgrounds using GTK.
     * @gir-type Class
     */
    class LayerSurface extends Gtk.Window implements Atk.ImplementorIface, Gtk.Buildable {
        static $gtype: GObject.GType<LayerSurface>;

        // Properties

        get anchor(): number;
        set anchor(val: number);
        /**
         * @read-only
         */
        get configured_height(): number;
        /**
         * @read-only
         */
        get configuredHeight(): number;
        /**
         * @read-only
         */
        get configured_width(): number;
        /**
         * @read-only
         */
        get configuredWidth(): number;
        get exclusive_zone(): number;
        set exclusive_zone(val: number);
        get exclusiveZone(): number;
        set exclusiveZone(val: number);
        get height(): number;
        set height(val: number);
        get kbd_interactivity(): boolean;
        set kbd_interactivity(val: boolean);
        get kbdInteractivity(): boolean;
        set kbdInteractivity(val: boolean);
        get layer(): number;
        set layer(val: number);
        get layer_shell(): any;
        set layer_shell(val: any);
        get layerShell(): any;
        set layerShell(val: any);
        get margin_bottom(): number;
        set margin_bottom(val: number);
        get marginBottom(): number;
        set marginBottom(val: number);
        get margin_left(): number;
        set margin_left(val: number);
        get marginLeft(): number;
        set marginLeft(val: number);
        get margin_right(): number;
        set margin_right(val: number);
        get marginRight(): number;
        set marginRight(val: number);
        get margin_top(): number;
        set margin_top(val: number);
        get marginTop(): number;
        set marginTop(val: number);
        get namespace(): string;
        set namespace(val: string);
        get width(): number;
        set width(val: number);
        get wl_output(): any;
        set wl_output(val: any);
        get wlOutput(): any;
        set wlOutput(val: any);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: LayerSurface.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<LayerSurface.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof LayerSurface.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, LayerSurface.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof LayerSurface.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, LayerSurface.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof LayerSurface.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<LayerSurface.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods

        /**
         * invoked when layer surface is configured
         * @virtual
         */
        vfunc_configured(): void;
        /**
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target`.
         *
         * Whenever the `source_property` is changed the `target_property` is
         * updated using the same value. For instance:
         *
         *
         * ```c
         *   g_object_bind_property (action, "active", widget, "sensitive", 0);
         * ```
         *
         *
         * Will result in the "sensitive" property of the widget {@link GObject.Object} instance to be
         * updated with the same value of the "active" property of the action {@link GObject.Object}
         * instance.
         *
         * If `flags` contains {@link GObject.BindingFlags.BIDIRECTIONAL} then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well.
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. To remove the binding without affecting the
         * `source` and the `target` you can just call `g_object_unref()` on the returned
         * {@link GObject.Binding} instance.
         *
         * Removing the binding by calling `g_object_unref()` on it must only be done if
         * the binding, `source` and `target` are only used from a single thread and it
         * is clear that both `source` and `target` outlive the binding. Especially it
         * is not safe to rely on this if the binding, `source` or `target` can be
         * finalized from different threads. Keep another reference to the binding and
         * use `g_binding_unbind()` instead to be on the safe side.
         *
         * A {@link GObject.Object} can have multiple bindings.
         * @param source_property the property on `source` to bind
         * @param target the target {@link GObject.Object}
         * @param target_property the property on `target` to bind
         * @param flags flags to pass to {@link GObject.Binding}
         * @returns the {@link GObject.Binding} instance representing the     binding between the two {@link GObject.Object} instances. The binding is released     whenever the {@link GObject.Binding} reference count reaches zero.
         */
        bind_property(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
        ): GObject.Binding;
        /**
         * Complete version of `g_object_bind_property()`.
         *
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target`, allowing you to set the transformation functions to be used by
         * the binding.
         *
         * If `flags` contains {@link GObject.BindingFlags.BIDIRECTIONAL} then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well. The `transform_from` function is only used in case
         * of bidirectional bindings, otherwise it will be ignored
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. This will release the reference that is
         * being held on the {@link GObject.Binding} instance; if you want to hold on to the
         * {@link GObject.Binding} instance, you will need to hold a reference to it.
         *
         * To remove the binding, call `g_binding_unbind()`.
         *
         * A {@link GObject.Object} can have multiple bindings.
         *
         * The same `user_data` parameter will be used for both `transform_to`
         * and `transform_from` transformation functions; the `notify` function will
         * be called once, when the binding is removed. If you need different data
         * for each transformation function, please use
         * `g_object_bind_property_with_closures()` instead.
         * @param source_property the property on `source` to bind
         * @param target the target {@link GObject.Object}
         * @param target_property the property on `target` to bind
         * @param flags flags to pass to {@link GObject.Binding}
         * @param transform_to the transformation function     from the `source` to the `target`, or `null` to use the default
         * @param transform_from the transformation function     from the `target` to the `source`, or `null` to use the default
         * @param notify a function to call when disposing the binding, to free     resources used by the transformation functions, or `null` if not required
         * @returns the {@link GObject.Binding} instance representing the     binding between the two {@link GObject.Object} instances. The binding is released     whenever the {@link GObject.Binding} reference count reaches zero.
         */
        bind_property_full(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
            transform_to?: GObject.BindingTransformFunc | null,
            transform_from?: GObject.BindingTransformFunc | null,
            notify?: GLib.DestroyNotify | null,
        ): GObject.Binding;
        /**
         * @param args
         */
        // Conflicted with GObject.Object.bind_property_full
        bind_property_full(...args: never[]): any;
        /**
         * This function is intended for {@link GObject.Object} implementations to re-enforce
         * a [floating][floating-ref] object reference. Doing this is seldom
         * required: all `GInitiallyUnowneds` are created with a floating reference
         * which usually just needs to be sunken by calling `g_object_ref_sink()`.
         */
        force_floating(): void;
        /**
         * Increases the freeze count on `object`. If the freeze count is
         * non-zero, the emission of "notify" signals on `object` is
         * stopped. The signals are queued until the freeze count is decreased
         * to zero. Duplicate notifications are squashed so that at most one
         * {@link GObject.Object.SignalSignatures.notify | GObject.Object::notify} signal is emitted for each property modified while the
         * object is frozen.
         *
         * This is necessary for accessors that modify multiple properties to prevent
         * premature notification while the object is still being modified.
         */
        freeze_notify(): void;
        /**
         * Gets a named field from the objects table of associations (see `g_object_set_data()`).
         * @param key name of the key for that association
         * @returns the data if found,          or `null` if no such data exists.
         */
        get_data(key: string): any | null;
        /**
         * Gets a property of an object.
         *
         * The value can be:
         * - an empty GObject.Value initialized by G_VALUE_INIT, which will be automatically initialized with the expected type of the property (since GLib 2.60)
         * - a GObject.Value initialized with the expected type of the property
         * - a GObject.Value initialized with a type to which the expected type of the property can be transformed
         *
         * In general, a copy is made of the property contents and the caller is responsible for freeing the memory by calling GObject.Value.unset.
         *
         * Note that GObject.Object.get_property is really intended for language bindings, GObject.Object.get is much more convenient for C programming.
         * @param property_name The name of the property to get
         * @param value Return location for the property value. Can be an empty GObject.Value initialized by G_VALUE_INIT (auto-initialized with expected type since GLib 2.60), a GObject.Value initialized with the expected property type, or a GObject.Value initialized with a transformable type
         */
        get_property(property_name: string, value: GObject.Value | any): any;
        /**
         * This function gets back user data pointers stored via
         * `g_object_set_qdata()`.
         * @param quark A {@link GLib.Quark}, naming the user data pointer
         * @returns The user data pointer set, or `null`
         */
        get_qdata(quark: GLib.Quark): any | null;
        /**
         * Gets `n_properties` properties for an `object`.
         * Obtained properties will be set to `values`. All properties must be valid.
         * Warnings will be emitted and undefined behaviour may result if invalid
         * properties are passed in.
         * @param names the names of each property to get
         * @param values the values of each property to get
         */
        getv(names: string[], values: (GObject.Value | any)[]): void;
        /**
         * Checks whether `object` has a [floating][floating-ref] reference.
         * @returns `true` if `object` has a floating reference
         */
        is_floating(): boolean;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use `g_object_notify_by_pspec()`
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * `g_object_freeze_notify()`. In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when `g_object_thaw_notify()` is
         * called.
         * @param property_name the name of a property installed on the class of `object`.
         */
        notify(property_name: string): void;
        /**
         * Emits a "notify" signal for the property specified by `pspec` on `object`.
         *
         * This function omits the property name lookup, hence it is faster than
         * `g_object_notify()`.
         *
         * One way to avoid using `g_object_notify()` from within the
         * class that registered the properties, and using `g_object_notify_by_pspec()`
         * instead, is to store the GParamSpec used with
         * `g_object_class_install_property()` inside a static array, e.g.:
         *
         *
         * ```c
         *   typedef enum
         *   {
         *     PROP_FOO = 1,
         *     PROP_LAST
         *   } MyObjectProperty;
         *
         *   static GParamSpec *properties[PROP_LAST];
         *
         *   static void
         *   my_object_class_init (MyObjectClass *klass)
         *   {
         *     properties[PROP_FOO] = g_param_spec_int ("foo", NULL, NULL,
         *                                              0, 100,
         *                                              50,
         *                                              G_PARAM_READWRITE | G_PARAM_STATIC_STRINGS);
         *     g_object_class_install_property (gobject_class,
         *                                      PROP_FOO,
         *                                      properties[PROP_FOO]);
         *   }
         * ```
         *
         *
         * and then notify a change on the "foo" property with:
         *
         *
         * ```c
         *   g_object_notify_by_pspec (self, properties[PROP_FOO]);
         * ```
         *
         * @param pspec the {@link GObject.ParamSpec} of a property installed on the class of `object`.
         */
        notify_by_pspec(pspec: GObject.ParamSpec): void;
        /**
         * Increases the reference count of `object`.
         *
         * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
         * of `object` will be propagated to the return type (using the GCC `typeof()`
         * extension), so any casting the caller needs to do on the return type must be
         * explicit.
         * @returns the same `object`
         */
        ref(): GObject.Object;
        /**
         * Increase the reference count of `object`, and possibly remove the
         * [floating][floating-ref] reference, if `object` has a floating reference.
         *
         * In other words, if the object is floating, then this call "assumes
         * ownership" of the floating reference, converting it to a normal
         * reference by clearing the floating flag while leaving the reference
         * count unchanged.  If the object is not floating, then this call
         * adds a new normal reference increasing the reference count by one.
         *
         * Since GLib 2.56, the type of `object` will be propagated to the return type
         * under the same conditions as for `g_object_ref()`.
         * @returns `object`
         */
        ref_sink(): GObject.Object;
        /**
         * Releases all references to other objects. This can be used to break
         * reference cycles.
         *
         * This function should only be called from object system implementations.
         */
        run_dispose(): void;
        /**
         * Each object carries around a table of associations from
         * strings to pointers.  This function lets you set an association.
         *
         * If the object already had an association with that name,
         * the old association will be destroyed.
         *
         * Internally, the `key` is converted to a {@link GLib.Quark} using `g_quark_from_string()`.
         * This means a copy of `key` is kept permanently (even after `object` has been
         * finalized) — so it is recommended to only use a small, bounded set of values
         * for `key` in your program, to avoid the {@link GLib.Quark} storage growing unbounded.
         * @param key name of the key
         * @param data data to associate with that key
         */
        set_data(key: string, data?: any | null): void;
        /**
         * Sets a property on an object.
         * @param property_name The name of the property to set
         * @param value The value to set the property to
         */
        set_property(property_name: string, value: GObject.Value | any): void;
        /**
         * Remove a specified datum from the object's data associations,
         * without invoking the association's destroy handler.
         * @param key name of the key
         * @returns the data if found, or `null`          if no such data exists.
         */
        steal_data(key: string): any | null;
        /**
         * This function gets back user data pointers stored via
         * `g_object_set_qdata()` and removes the `data` from object
         * without invoking its `destroy()` function (if any was
         * set).
         * Usually, calling this function is only required to update
         * user data pointers with a destroy notifier, for example:
         *
         * ```c
         * void
         * object_add_to_user_list (GObject     *object,
         *                          const gchar *new_string)
         * {
         *   // the quark, naming the object data
         *   GQuark quark_string_list = g_quark_from_static_string ("my-string-list");
         *   // retrieve the old string list
         *   GList *list = g_object_steal_qdata (object, quark_string_list);
         *
         *   // prepend new string
         *   list = g_list_prepend (list, g_strdup (new_string));
         *   // this changed 'list', so we need to set it again
         *   g_object_set_qdata_full (object, quark_string_list, list, free_string_list);
         * }
         * static void
         * free_string_list (gpointer data)
         * {
         *   GList *node, *list = data;
         *
         *   for (node = list; node; node = node->next)
         *     g_free (node->data);
         *   g_list_free (list);
         * }
         * ```
         *
         * Using `g_object_get_qdata()` in the above example, instead of
         * `g_object_steal_qdata()` would have left the destroy function set,
         * and thus the partial string list would have been freed upon
         * `g_object_set_qdata_full()`.
         * @param quark A {@link GLib.Quark}, naming the user data pointer
         * @returns The user data pointer set, or `null`
         */
        steal_qdata(quark: GLib.Quark): any | null;
        /**
         * Reverts the effect of a previous call to
         * `g_object_freeze_notify()`. The freeze count is decreased on `object`
         * and when it reaches zero, queued "notify" signals are emitted.
         *
         * Duplicate notifications for each property are squashed so that at most one
         * {@link GObject.Object.SignalSignatures.notify | GObject.Object::notify} signal is emitted for each property, in the reverse order
         * in which they have been queued.
         *
         * It is an error to call this function when the freeze count is zero.
         */
        thaw_notify(): void;
        /**
         * Decreases the reference count of `object`. When its reference count
         * drops to 0, the object is finalized (i.e. its memory is freed).
         *
         * If the pointer to the {@link GObject.Object} may be reused in future (for example, if it is
         * an instance variable of another object), it is recommended to clear the
         * pointer to `null` rather than retain a dangling pointer to a potentially
         * invalid {@link GObject.Object} instance. Use `g_clear_object()` for this.
         */
        unref(): void;
        /**
         * This function essentially limits the life time of the `closure` to
         * the life time of the object. That is, when the object is finalized,
         * the `closure` is invalidated by calling `g_closure_invalidate()` on
         * it, in order to prevent invocations of the closure with a finalized
         * (nonexisting) object. Also, `g_object_ref()` and `g_object_unref()` are
         * added as marshal guards to the `closure`, to ensure that an extra
         * reference count is held on `object` during invocation of the
         * `closure`.  Usually, this function will be called on closures that
         * use this `object` as closure data.
         * @param closure {@link GObject.Closure} to watch
         */
        watch_closure(closure: GObject.Closure): void;
        /**
         * the `constructed` function is called by `g_object_new()` as the
         *  final step of the object creation process.  At the point of the call, all
         *  construction properties have been set on the object.  The purpose of this
         *  call is to allow for object initialisation steps that can only be performed
         *  after construction properties have been set.  `constructed` implementors
         *  should chain up to the `constructed` call of their parent class to allow it
         *  to complete its initialisation.
         * @virtual
         */
        vfunc_constructed(): void;
        /**
         * emits property change notification for a bunch
         *  of properties. Overriding `dispatch_properties_changed` should be rarely
         *  needed.
         * @param n_pspecs
         * @param pspecs
         * @virtual
         */
        vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
        /**
         * the `dispose` function is supposed to drop all references to other
         *  objects, but keep the instance otherwise intact, so that client method
         *  invocations still work. It may be run multiple times (due to reference
         *  loops). Before returning, `dispose` should chain up to the `dispose` method
         *  of the parent class.
         * @virtual
         */
        vfunc_dispose(): void;
        /**
         * instance finalization function, should finish the finalization of
         *  the instance begun in `dispose` and chain up to the `finalize` method of the
         *  parent class.
         * @virtual
         */
        vfunc_finalize(): void;
        /**
         * the generic getter for all properties of this type. Should be
         *  overridden for every type with properties.
         * @param property_id
         * @param value
         * @param pspec
         * @virtual
         */
        vfunc_get_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use `g_object_notify_by_pspec()`
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * `g_object_freeze_notify()`. In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when `g_object_thaw_notify()` is
         * called.
         * @param pspec
         * @virtual
         */
        vfunc_notify(pspec: GObject.ParamSpec): void;
        /**
         * the generic setter for all properties of this type. Should be
         *  overridden for every type with properties. If implementations of
         *  `set_property` don't emit property change notification explicitly, this will
         *  be done implicitly by the type system. However, if the notify signal is
         *  emitted explicitly, the type system will not emit it a second time.
         * @param property_id
         * @param value
         * @param pspec
         * @virtual
         */
        vfunc_set_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Disconnects a handler from an instance so it will not be called during any future or currently ongoing emissions of the signal it has been connected to.
         * @param id Handler ID of the handler to be disconnected
         */
        disconnect(id: number): void;
        /**
         * Sets multiple properties of an object at once. The properties argument should be a dictionary mapping property names to values.
         * @param properties Object containing the properties to set
         */
        set(properties: { [key: string]: any }): void;
        /**
         * Blocks a handler of an instance so it will not be called during any signal emissions
         * @param id Handler ID of the handler to be blocked
         */
        block_signal_handler(id: number): void;
        /**
         * Unblocks a handler so it will be called again during any signal emissions
         * @param id Handler ID of the handler to be unblocked
         */
        unblock_signal_handler(id: number): void;
        /**
         * Stops a signal's emission by the given signal name. This will prevent the default handler and any subsequent signal handlers from being invoked.
         * @param detailedName Name of the signal to stop emission of
         */
        stop_emission_by_name(detailedName: string): void;
    }

    namespace Lockscreen {
        // Signal signatures
        interface SignalSignatures extends LayerSurface.SignalSignatures {
            /**
             * This signal is emitted when authentication was successful and the
             * session should be unlocked.
             * @signal
             * @run-last
             */
            'lockscreen-unlock': () => void;
            /**
             * Emitted when the output showing the lock screen should be woken
             * up.
             * @signal
             * @run-last
             */
            'wakeup-output': () => void;
            'notify::page': (pspec: GObject.ParamSpec) => void;
            'notify::require-unlock': (pspec: GObject.ParamSpec) => void;
            'notify::anchor': (pspec: GObject.ParamSpec) => void;
            'notify::configured-height': (pspec: GObject.ParamSpec) => void;
            'notify::configured-width': (pspec: GObject.ParamSpec) => void;
            'notify::exclusive-zone': (pspec: GObject.ParamSpec) => void;
            'notify::height': (pspec: GObject.ParamSpec) => void;
            'notify::kbd-interactivity': (pspec: GObject.ParamSpec) => void;
            'notify::layer': (pspec: GObject.ParamSpec) => void;
            'notify::layer-shell': (pspec: GObject.ParamSpec) => void;
            'notify::margin-bottom': (pspec: GObject.ParamSpec) => void;
            'notify::margin-left': (pspec: GObject.ParamSpec) => void;
            'notify::margin-right': (pspec: GObject.ParamSpec) => void;
            'notify::margin-top': (pspec: GObject.ParamSpec) => void;
            'notify::namespace': (pspec: GObject.ParamSpec) => void;
            'notify::width': (pspec: GObject.ParamSpec) => void;
            'notify::wl-output': (pspec: GObject.ParamSpec) => void;
            'notify::accept-focus': (pspec: GObject.ParamSpec) => void;
            'notify::application': (pspec: GObject.ParamSpec) => void;
            'notify::attached-to': (pspec: GObject.ParamSpec) => void;
            'notify::decorated': (pspec: GObject.ParamSpec) => void;
            'notify::default-height': (pspec: GObject.ParamSpec) => void;
            'notify::default-width': (pspec: GObject.ParamSpec) => void;
            'notify::deletable': (pspec: GObject.ParamSpec) => void;
            'notify::destroy-with-parent': (pspec: GObject.ParamSpec) => void;
            'notify::focus-on-map': (pspec: GObject.ParamSpec) => void;
            'notify::focus-visible': (pspec: GObject.ParamSpec) => void;
            'notify::gravity': (pspec: GObject.ParamSpec) => void;
            'notify::has-resize-grip': (pspec: GObject.ParamSpec) => void;
            'notify::has-toplevel-focus': (pspec: GObject.ParamSpec) => void;
            'notify::hide-titlebar-when-maximized': (pspec: GObject.ParamSpec) => void;
            'notify::icon': (pspec: GObject.ParamSpec) => void;
            'notify::icon-name': (pspec: GObject.ParamSpec) => void;
            'notify::is-active': (pspec: GObject.ParamSpec) => void;
            'notify::is-maximized': (pspec: GObject.ParamSpec) => void;
            'notify::mnemonics-visible': (pspec: GObject.ParamSpec) => void;
            'notify::modal': (pspec: GObject.ParamSpec) => void;
            'notify::resizable': (pspec: GObject.ParamSpec) => void;
            'notify::resize-grip-visible': (pspec: GObject.ParamSpec) => void;
            'notify::role': (pspec: GObject.ParamSpec) => void;
            'notify::screen': (pspec: GObject.ParamSpec) => void;
            'notify::skip-pager-hint': (pspec: GObject.ParamSpec) => void;
            'notify::skip-taskbar-hint': (pspec: GObject.ParamSpec) => void;
            'notify::startup-id': (pspec: GObject.ParamSpec) => void;
            'notify::title': (pspec: GObject.ParamSpec) => void;
            'notify::transient-for': (pspec: GObject.ParamSpec) => void;
            'notify::type': (pspec: GObject.ParamSpec) => void;
            'notify::type-hint': (pspec: GObject.ParamSpec) => void;
            'notify::urgency-hint': (pspec: GObject.ParamSpec) => void;
            'notify::window-position': (pspec: GObject.ParamSpec) => void;
            'notify::border-width': (pspec: GObject.ParamSpec) => void;
            'notify::child': (pspec: GObject.ParamSpec) => void;
            'notify::resize-mode': (pspec: GObject.ParamSpec) => void;
            'notify::app-paintable': (pspec: GObject.ParamSpec) => void;
            'notify::can-default': (pspec: GObject.ParamSpec) => void;
            'notify::can-focus': (pspec: GObject.ParamSpec) => void;
            'notify::composite-child': (pspec: GObject.ParamSpec) => void;
            'notify::double-buffered': (pspec: GObject.ParamSpec) => void;
            'notify::events': (pspec: GObject.ParamSpec) => void;
            'notify::expand': (pspec: GObject.ParamSpec) => void;
            'notify::focus-on-click': (pspec: GObject.ParamSpec) => void;
            'notify::halign': (pspec: GObject.ParamSpec) => void;
            'notify::has-default': (pspec: GObject.ParamSpec) => void;
            'notify::has-focus': (pspec: GObject.ParamSpec) => void;
            'notify::has-tooltip': (pspec: GObject.ParamSpec) => void;
            'notify::height-request': (pspec: GObject.ParamSpec) => void;
            'notify::hexpand': (pspec: GObject.ParamSpec) => void;
            'notify::hexpand-set': (pspec: GObject.ParamSpec) => void;
            'notify::is-focus': (pspec: GObject.ParamSpec) => void;
            'notify::margin': (pspec: GObject.ParamSpec) => void;
            'notify::margin-end': (pspec: GObject.ParamSpec) => void;
            'notify::margin-start': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::no-show-all': (pspec: GObject.ParamSpec) => void;
            'notify::opacity': (pspec: GObject.ParamSpec) => void;
            'notify::parent': (pspec: GObject.ParamSpec) => void;
            'notify::receives-default': (pspec: GObject.ParamSpec) => void;
            'notify::scale-factor': (pspec: GObject.ParamSpec) => void;
            'notify::sensitive': (pspec: GObject.ParamSpec) => void;
            'notify::style': (pspec: GObject.ParamSpec) => void;
            'notify::tooltip-markup': (pspec: GObject.ParamSpec) => void;
            'notify::tooltip-text': (pspec: GObject.ParamSpec) => void;
            'notify::valign': (pspec: GObject.ParamSpec) => void;
            'notify::vexpand': (pspec: GObject.ParamSpec) => void;
            'notify::vexpand-set': (pspec: GObject.ParamSpec) => void;
            'notify::visible': (pspec: GObject.ParamSpec) => void;
            'notify::width-request': (pspec: GObject.ParamSpec) => void;
            'notify::window': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps
            extends
                LayerSurface.ConstructorProps,
                Atk.ImplementorIface.ConstructorProps,
                Gtk.Buildable.ConstructorProps {
            page: LockscreenPage;
            require_unlock: boolean;
            requireUnlock: boolean;
        }
    }

    /**
     * The main lock screen
     *
     * The lock screen displayed on the primary output featuring the clock
     * and unlock keypad. It handles displaying ongoing calls when the
     * shell is locked and can be extended via plugins.
     *
     * Other outputs are locked via PhoshLockshields.
     *
     * # CSS nodes
     *
     * {@link Phosh.Lockscreen} has a CSS name with the name `phosh-lockscreen`.
     * @gir-type Class
     */
    class Lockscreen extends LayerSurface implements Atk.ImplementorIface, Gtk.Buildable {
        static $gtype: GObject.GType<Lockscreen>;

        // Properties

        /**
         * The currently active carousel page
         * @read-only
         */
        get page(): LockscreenPage;
        /**
         * Require entering PIN or password to unlock. If false, unlock by swiping up.
         */
        get require_unlock(): boolean;
        set require_unlock(val: boolean);
        /**
         * Require entering PIN or password to unlock. If false, unlock by swiping up.
         */
        get requireUnlock(): boolean;
        set requireUnlock(val: boolean);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Lockscreen.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Lockscreen.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof Lockscreen.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Lockscreen.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Lockscreen.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Lockscreen.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Lockscreen.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Lockscreen.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods

        /**
         * This function is invoked when a PIN or password is submitted from the lockscreen
         *     keypad. It allows to implement a custom authentication mechanism. To indicate success the
         *     `lockscreen-unlock` signal should be emitted.
         * @virtual
         */
        vfunc_unlock_submit(): void;

        // Methods

        /**
         * Inserts a custom widget into the "extra" page of the lockscreen. This page sits in-between the
         * info page and the keypad page. By default, this page does not exist and is not used. Once an
         * extra page is added, it can be navigated to by swiping and also via calls to
         * {@link Lockscreen.set_default_page}.
         * @param widget The extra {@link Gtk.Widget} to insert into the lockscreen carousel
         */
        add_extra_page(widget: Gtk.Widget): void;
        /**
         * Clears the current contents of the keypad PIN entry buffer
         */
        clear_pin_entry(): void;
        /**
         * @returns The {@link Phosh.LockscreenPage} that is currently shown
         */
        get_page(): LockscreenPage;
        /**
         * Get the current contents of the keypad PIN entry buffer
         * @returns the contents of the entry buffer
         */
        get_pin_entry(): string;
        /**
         * Specifies which page should be shown by default when the lockscreen is made visible. This will
         * also be the page that is shown when the keypad idle timer is reached.
         * @param page
         */
        set_default_page(page: LockscreenPage | null): void;
        /**
         * Scrolls to a specific page in the carousel. The state of the deck
         * isn't changed.
         * @param page
         */
        set_page(page: LockscreenPage | null): void;
        /**
         * Sets the text displayed in the unlock status label.
         * @param status The status text
         */
        set_unlock_status(status: string): void;
        /**
         * Triggers an animation that shakes the PIN entry left and right for a brief period.
         * After the animation is complete, the PIN entry buffer is cleared. Used to visually indicate
         * authentication errors.
         */
        shake_pin_entry(): void;
        /**
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target`.
         *
         * Whenever the `source_property` is changed the `target_property` is
         * updated using the same value. For instance:
         *
         *
         * ```c
         *   g_object_bind_property (action, "active", widget, "sensitive", 0);
         * ```
         *
         *
         * Will result in the "sensitive" property of the widget {@link GObject.Object} instance to be
         * updated with the same value of the "active" property of the action {@link GObject.Object}
         * instance.
         *
         * If `flags` contains {@link GObject.BindingFlags.BIDIRECTIONAL} then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well.
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. To remove the binding without affecting the
         * `source` and the `target` you can just call `g_object_unref()` on the returned
         * {@link GObject.Binding} instance.
         *
         * Removing the binding by calling `g_object_unref()` on it must only be done if
         * the binding, `source` and `target` are only used from a single thread and it
         * is clear that both `source` and `target` outlive the binding. Especially it
         * is not safe to rely on this if the binding, `source` or `target` can be
         * finalized from different threads. Keep another reference to the binding and
         * use `g_binding_unbind()` instead to be on the safe side.
         *
         * A {@link GObject.Object} can have multiple bindings.
         * @param source_property the property on `source` to bind
         * @param target the target {@link GObject.Object}
         * @param target_property the property on `target` to bind
         * @param flags flags to pass to {@link GObject.Binding}
         * @returns the {@link GObject.Binding} instance representing the     binding between the two {@link GObject.Object} instances. The binding is released     whenever the {@link GObject.Binding} reference count reaches zero.
         */
        bind_property(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
        ): GObject.Binding;
        /**
         * Complete version of `g_object_bind_property()`.
         *
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target`, allowing you to set the transformation functions to be used by
         * the binding.
         *
         * If `flags` contains {@link GObject.BindingFlags.BIDIRECTIONAL} then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well. The `transform_from` function is only used in case
         * of bidirectional bindings, otherwise it will be ignored
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. This will release the reference that is
         * being held on the {@link GObject.Binding} instance; if you want to hold on to the
         * {@link GObject.Binding} instance, you will need to hold a reference to it.
         *
         * To remove the binding, call `g_binding_unbind()`.
         *
         * A {@link GObject.Object} can have multiple bindings.
         *
         * The same `user_data` parameter will be used for both `transform_to`
         * and `transform_from` transformation functions; the `notify` function will
         * be called once, when the binding is removed. If you need different data
         * for each transformation function, please use
         * `g_object_bind_property_with_closures()` instead.
         * @param source_property the property on `source` to bind
         * @param target the target {@link GObject.Object}
         * @param target_property the property on `target` to bind
         * @param flags flags to pass to {@link GObject.Binding}
         * @param transform_to the transformation function     from the `source` to the `target`, or `null` to use the default
         * @param transform_from the transformation function     from the `target` to the `source`, or `null` to use the default
         * @param notify a function to call when disposing the binding, to free     resources used by the transformation functions, or `null` if not required
         * @returns the {@link GObject.Binding} instance representing the     binding between the two {@link GObject.Object} instances. The binding is released     whenever the {@link GObject.Binding} reference count reaches zero.
         */
        bind_property_full(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
            transform_to?: GObject.BindingTransformFunc | null,
            transform_from?: GObject.BindingTransformFunc | null,
            notify?: GLib.DestroyNotify | null,
        ): GObject.Binding;
        /**
         * @param args
         */
        // Conflicted with GObject.Object.bind_property_full
        bind_property_full(...args: never[]): any;
        /**
         * This function is intended for {@link GObject.Object} implementations to re-enforce
         * a [floating][floating-ref] object reference. Doing this is seldom
         * required: all `GInitiallyUnowneds` are created with a floating reference
         * which usually just needs to be sunken by calling `g_object_ref_sink()`.
         */
        force_floating(): void;
        /**
         * Increases the freeze count on `object`. If the freeze count is
         * non-zero, the emission of "notify" signals on `object` is
         * stopped. The signals are queued until the freeze count is decreased
         * to zero. Duplicate notifications are squashed so that at most one
         * {@link GObject.Object.SignalSignatures.notify | GObject.Object::notify} signal is emitted for each property modified while the
         * object is frozen.
         *
         * This is necessary for accessors that modify multiple properties to prevent
         * premature notification while the object is still being modified.
         */
        freeze_notify(): void;
        /**
         * Gets a named field from the objects table of associations (see `g_object_set_data()`).
         * @param key name of the key for that association
         * @returns the data if found,          or `null` if no such data exists.
         */
        get_data(key: string): any | null;
        /**
         * Gets a property of an object.
         *
         * The value can be:
         * - an empty GObject.Value initialized by G_VALUE_INIT, which will be automatically initialized with the expected type of the property (since GLib 2.60)
         * - a GObject.Value initialized with the expected type of the property
         * - a GObject.Value initialized with a type to which the expected type of the property can be transformed
         *
         * In general, a copy is made of the property contents and the caller is responsible for freeing the memory by calling GObject.Value.unset.
         *
         * Note that GObject.Object.get_property is really intended for language bindings, GObject.Object.get is much more convenient for C programming.
         * @param property_name The name of the property to get
         * @param value Return location for the property value. Can be an empty GObject.Value initialized by G_VALUE_INIT (auto-initialized with expected type since GLib 2.60), a GObject.Value initialized with the expected property type, or a GObject.Value initialized with a transformable type
         */
        get_property(property_name: string, value: GObject.Value | any): any;
        /**
         * This function gets back user data pointers stored via
         * `g_object_set_qdata()`.
         * @param quark A {@link GLib.Quark}, naming the user data pointer
         * @returns The user data pointer set, or `null`
         */
        get_qdata(quark: GLib.Quark): any | null;
        /**
         * Gets `n_properties` properties for an `object`.
         * Obtained properties will be set to `values`. All properties must be valid.
         * Warnings will be emitted and undefined behaviour may result if invalid
         * properties are passed in.
         * @param names the names of each property to get
         * @param values the values of each property to get
         */
        getv(names: string[], values: (GObject.Value | any)[]): void;
        /**
         * Checks whether `object` has a [floating][floating-ref] reference.
         * @returns `true` if `object` has a floating reference
         */
        is_floating(): boolean;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use `g_object_notify_by_pspec()`
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * `g_object_freeze_notify()`. In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when `g_object_thaw_notify()` is
         * called.
         * @param property_name the name of a property installed on the class of `object`.
         */
        notify(property_name: string): void;
        /**
         * Emits a "notify" signal for the property specified by `pspec` on `object`.
         *
         * This function omits the property name lookup, hence it is faster than
         * `g_object_notify()`.
         *
         * One way to avoid using `g_object_notify()` from within the
         * class that registered the properties, and using `g_object_notify_by_pspec()`
         * instead, is to store the GParamSpec used with
         * `g_object_class_install_property()` inside a static array, e.g.:
         *
         *
         * ```c
         *   typedef enum
         *   {
         *     PROP_FOO = 1,
         *     PROP_LAST
         *   } MyObjectProperty;
         *
         *   static GParamSpec *properties[PROP_LAST];
         *
         *   static void
         *   my_object_class_init (MyObjectClass *klass)
         *   {
         *     properties[PROP_FOO] = g_param_spec_int ("foo", NULL, NULL,
         *                                              0, 100,
         *                                              50,
         *                                              G_PARAM_READWRITE | G_PARAM_STATIC_STRINGS);
         *     g_object_class_install_property (gobject_class,
         *                                      PROP_FOO,
         *                                      properties[PROP_FOO]);
         *   }
         * ```
         *
         *
         * and then notify a change on the "foo" property with:
         *
         *
         * ```c
         *   g_object_notify_by_pspec (self, properties[PROP_FOO]);
         * ```
         *
         * @param pspec the {@link GObject.ParamSpec} of a property installed on the class of `object`.
         */
        notify_by_pspec(pspec: GObject.ParamSpec): void;
        /**
         * Increases the reference count of `object`.
         *
         * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
         * of `object` will be propagated to the return type (using the GCC `typeof()`
         * extension), so any casting the caller needs to do on the return type must be
         * explicit.
         * @returns the same `object`
         */
        ref(): GObject.Object;
        /**
         * Increase the reference count of `object`, and possibly remove the
         * [floating][floating-ref] reference, if `object` has a floating reference.
         *
         * In other words, if the object is floating, then this call "assumes
         * ownership" of the floating reference, converting it to a normal
         * reference by clearing the floating flag while leaving the reference
         * count unchanged.  If the object is not floating, then this call
         * adds a new normal reference increasing the reference count by one.
         *
         * Since GLib 2.56, the type of `object` will be propagated to the return type
         * under the same conditions as for `g_object_ref()`.
         * @returns `object`
         */
        ref_sink(): GObject.Object;
        /**
         * Releases all references to other objects. This can be used to break
         * reference cycles.
         *
         * This function should only be called from object system implementations.
         */
        run_dispose(): void;
        /**
         * Each object carries around a table of associations from
         * strings to pointers.  This function lets you set an association.
         *
         * If the object already had an association with that name,
         * the old association will be destroyed.
         *
         * Internally, the `key` is converted to a {@link GLib.Quark} using `g_quark_from_string()`.
         * This means a copy of `key` is kept permanently (even after `object` has been
         * finalized) — so it is recommended to only use a small, bounded set of values
         * for `key` in your program, to avoid the {@link GLib.Quark} storage growing unbounded.
         * @param key name of the key
         * @param data data to associate with that key
         */
        set_data(key: string, data?: any | null): void;
        /**
         * Sets a property on an object.
         * @param property_name The name of the property to set
         * @param value The value to set the property to
         */
        set_property(property_name: string, value: GObject.Value | any): void;
        /**
         * Remove a specified datum from the object's data associations,
         * without invoking the association's destroy handler.
         * @param key name of the key
         * @returns the data if found, or `null`          if no such data exists.
         */
        steal_data(key: string): any | null;
        /**
         * This function gets back user data pointers stored via
         * `g_object_set_qdata()` and removes the `data` from object
         * without invoking its `destroy()` function (if any was
         * set).
         * Usually, calling this function is only required to update
         * user data pointers with a destroy notifier, for example:
         *
         * ```c
         * void
         * object_add_to_user_list (GObject     *object,
         *                          const gchar *new_string)
         * {
         *   // the quark, naming the object data
         *   GQuark quark_string_list = g_quark_from_static_string ("my-string-list");
         *   // retrieve the old string list
         *   GList *list = g_object_steal_qdata (object, quark_string_list);
         *
         *   // prepend new string
         *   list = g_list_prepend (list, g_strdup (new_string));
         *   // this changed 'list', so we need to set it again
         *   g_object_set_qdata_full (object, quark_string_list, list, free_string_list);
         * }
         * static void
         * free_string_list (gpointer data)
         * {
         *   GList *node, *list = data;
         *
         *   for (node = list; node; node = node->next)
         *     g_free (node->data);
         *   g_list_free (list);
         * }
         * ```
         *
         * Using `g_object_get_qdata()` in the above example, instead of
         * `g_object_steal_qdata()` would have left the destroy function set,
         * and thus the partial string list would have been freed upon
         * `g_object_set_qdata_full()`.
         * @param quark A {@link GLib.Quark}, naming the user data pointer
         * @returns The user data pointer set, or `null`
         */
        steal_qdata(quark: GLib.Quark): any | null;
        /**
         * Reverts the effect of a previous call to
         * `g_object_freeze_notify()`. The freeze count is decreased on `object`
         * and when it reaches zero, queued "notify" signals are emitted.
         *
         * Duplicate notifications for each property are squashed so that at most one
         * {@link GObject.Object.SignalSignatures.notify | GObject.Object::notify} signal is emitted for each property, in the reverse order
         * in which they have been queued.
         *
         * It is an error to call this function when the freeze count is zero.
         */
        thaw_notify(): void;
        /**
         * Decreases the reference count of `object`. When its reference count
         * drops to 0, the object is finalized (i.e. its memory is freed).
         *
         * If the pointer to the {@link GObject.Object} may be reused in future (for example, if it is
         * an instance variable of another object), it is recommended to clear the
         * pointer to `null` rather than retain a dangling pointer to a potentially
         * invalid {@link GObject.Object} instance. Use `g_clear_object()` for this.
         */
        unref(): void;
        /**
         * This function essentially limits the life time of the `closure` to
         * the life time of the object. That is, when the object is finalized,
         * the `closure` is invalidated by calling `g_closure_invalidate()` on
         * it, in order to prevent invocations of the closure with a finalized
         * (nonexisting) object. Also, `g_object_ref()` and `g_object_unref()` are
         * added as marshal guards to the `closure`, to ensure that an extra
         * reference count is held on `object` during invocation of the
         * `closure`.  Usually, this function will be called on closures that
         * use this `object` as closure data.
         * @param closure {@link GObject.Closure} to watch
         */
        watch_closure(closure: GObject.Closure): void;
        /**
         * the `constructed` function is called by `g_object_new()` as the
         *  final step of the object creation process.  At the point of the call, all
         *  construction properties have been set on the object.  The purpose of this
         *  call is to allow for object initialisation steps that can only be performed
         *  after construction properties have been set.  `constructed` implementors
         *  should chain up to the `constructed` call of their parent class to allow it
         *  to complete its initialisation.
         * @virtual
         */
        vfunc_constructed(): void;
        /**
         * emits property change notification for a bunch
         *  of properties. Overriding `dispatch_properties_changed` should be rarely
         *  needed.
         * @param n_pspecs
         * @param pspecs
         * @virtual
         */
        vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
        /**
         * the `dispose` function is supposed to drop all references to other
         *  objects, but keep the instance otherwise intact, so that client method
         *  invocations still work. It may be run multiple times (due to reference
         *  loops). Before returning, `dispose` should chain up to the `dispose` method
         *  of the parent class.
         * @virtual
         */
        vfunc_dispose(): void;
        /**
         * instance finalization function, should finish the finalization of
         *  the instance begun in `dispose` and chain up to the `finalize` method of the
         *  parent class.
         * @virtual
         */
        vfunc_finalize(): void;
        /**
         * the generic getter for all properties of this type. Should be
         *  overridden for every type with properties.
         * @param property_id
         * @param value
         * @param pspec
         * @virtual
         */
        vfunc_get_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use `g_object_notify_by_pspec()`
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * `g_object_freeze_notify()`. In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when `g_object_thaw_notify()` is
         * called.
         * @param pspec
         * @virtual
         */
        vfunc_notify(pspec: GObject.ParamSpec): void;
        /**
         * the generic setter for all properties of this type. Should be
         *  overridden for every type with properties. If implementations of
         *  `set_property` don't emit property change notification explicitly, this will
         *  be done implicitly by the type system. However, if the notify signal is
         *  emitted explicitly, the type system will not emit it a second time.
         * @param property_id
         * @param value
         * @param pspec
         * @virtual
         */
        vfunc_set_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Disconnects a handler from an instance so it will not be called during any future or currently ongoing emissions of the signal it has been connected to.
         * @param id Handler ID of the handler to be disconnected
         */
        disconnect(id: number): void;
        /**
         * Sets multiple properties of an object at once. The properties argument should be a dictionary mapping property names to values.
         * @param properties Object containing the properties to set
         */
        set(properties: { [key: string]: any }): void;
        /**
         * Blocks a handler of an instance so it will not be called during any signal emissions
         * @param id Handler ID of the handler to be blocked
         */
        block_signal_handler(id: number): void;
        /**
         * Unblocks a handler so it will be called again during any signal emissions
         * @param id Handler ID of the handler to be unblocked
         */
        unblock_signal_handler(id: number): void;
        /**
         * Stops a signal's emission by the given signal name. This will prevent the default handler and any subsequent signal handlers from being invoked.
         * @param detailedName Name of the signal to stop emission of
         */
        stop_emission_by_name(detailedName: string): void;
    }

    namespace LockscreenManager {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            /**
             * Emitted when the outputs should be woken up.
             * @signal
             * @run-last
             */
            'wakeup-outputs': () => void;
            'notify::locked': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            locked: boolean;
        }
    }

    /**
     * The singleton that manages screen locking
     *
     * The {@link Phosh.LockscreenManager} is responsible for putting the {@link Phosh.Lockscreen}
     * on the primary output and a `PhoshLockshield` on other outputs when the session
     * becomes idle or when invoked explicitly via `phosh_lockscreen_manager_set_locked()`.
     * @gir-type Class
     */
    class LockscreenManager extends GObject.Object {
        static $gtype: GObject.GType<LockscreenManager>;

        // Properties

        /**
         * Whether the screen is locked
         */
        get locked(): boolean;
        set locked(val: boolean);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: LockscreenManager.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<LockscreenManager.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof LockscreenManager.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, LockscreenManager.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof LockscreenManager.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, LockscreenManager.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof LockscreenManager.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<LockscreenManager.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        get_active_time(): number;
        get_locked(): boolean;
        /**
         * Gets the current {@link Lockscreen}, if one exists (NULL otherwise).
         * @returns The lockscreen
         */
        get_lockscreen(): Lockscreen | null;
        /**
         * @returns The currently shown {@link Phosh.LockscreenPage} in the {@link Phosh.Lockscreen}
         */
        get_page(): LockscreenPage;
        /**
         * @param state
         */
        set_locked(state: boolean): void;
        /**
         * @param page
         */
        set_page(page: LockscreenPage | null): boolean;
    }

    namespace QuickSetting {
        // Signal signatures
        interface SignalSignatures extends Gtk.Box.SignalSignatures {
            /**
             * @signal
             * @run-last
             */
            clicked: () => void;
            /**
             * @signal
             * @run-last
             */
            'hide-status': () => void;
            /**
             * @signal
             * @run-last
             */
            'long-pressed': () => void;
            /**
             * @signal
             * @run-last
             */
            'show-status': () => void;
            'notify::active': (pspec: GObject.ParamSpec) => void;
            'notify::can-show-status': (pspec: GObject.ParamSpec) => void;
            'notify::long-press-action-name': (pspec: GObject.ParamSpec) => void;
            'notify::long-press-action-target': (pspec: GObject.ParamSpec) => void;
            'notify::showing-status': (pspec: GObject.ParamSpec) => void;
            'notify::status-icon': (pspec: GObject.ParamSpec) => void;
            'notify::status-page': (pspec: GObject.ParamSpec) => void;
            'notify::baseline-position': (pspec: GObject.ParamSpec) => void;
            'notify::homogeneous': (pspec: GObject.ParamSpec) => void;
            'notify::spacing': (pspec: GObject.ParamSpec) => void;
            'notify::border-width': (pspec: GObject.ParamSpec) => void;
            'notify::child': (pspec: GObject.ParamSpec) => void;
            'notify::resize-mode': (pspec: GObject.ParamSpec) => void;
            'notify::app-paintable': (pspec: GObject.ParamSpec) => void;
            'notify::can-default': (pspec: GObject.ParamSpec) => void;
            'notify::can-focus': (pspec: GObject.ParamSpec) => void;
            'notify::composite-child': (pspec: GObject.ParamSpec) => void;
            'notify::double-buffered': (pspec: GObject.ParamSpec) => void;
            'notify::events': (pspec: GObject.ParamSpec) => void;
            'notify::expand': (pspec: GObject.ParamSpec) => void;
            'notify::focus-on-click': (pspec: GObject.ParamSpec) => void;
            'notify::halign': (pspec: GObject.ParamSpec) => void;
            'notify::has-default': (pspec: GObject.ParamSpec) => void;
            'notify::has-focus': (pspec: GObject.ParamSpec) => void;
            'notify::has-tooltip': (pspec: GObject.ParamSpec) => void;
            'notify::height-request': (pspec: GObject.ParamSpec) => void;
            'notify::hexpand': (pspec: GObject.ParamSpec) => void;
            'notify::hexpand-set': (pspec: GObject.ParamSpec) => void;
            'notify::is-focus': (pspec: GObject.ParamSpec) => void;
            'notify::margin': (pspec: GObject.ParamSpec) => void;
            'notify::margin-bottom': (pspec: GObject.ParamSpec) => void;
            'notify::margin-end': (pspec: GObject.ParamSpec) => void;
            'notify::margin-left': (pspec: GObject.ParamSpec) => void;
            'notify::margin-right': (pspec: GObject.ParamSpec) => void;
            'notify::margin-start': (pspec: GObject.ParamSpec) => void;
            'notify::margin-top': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::no-show-all': (pspec: GObject.ParamSpec) => void;
            'notify::opacity': (pspec: GObject.ParamSpec) => void;
            'notify::parent': (pspec: GObject.ParamSpec) => void;
            'notify::receives-default': (pspec: GObject.ParamSpec) => void;
            'notify::scale-factor': (pspec: GObject.ParamSpec) => void;
            'notify::sensitive': (pspec: GObject.ParamSpec) => void;
            'notify::style': (pspec: GObject.ParamSpec) => void;
            'notify::tooltip-markup': (pspec: GObject.ParamSpec) => void;
            'notify::tooltip-text': (pspec: GObject.ParamSpec) => void;
            'notify::valign': (pspec: GObject.ParamSpec) => void;
            'notify::vexpand': (pspec: GObject.ParamSpec) => void;
            'notify::vexpand-set': (pspec: GObject.ParamSpec) => void;
            'notify::visible': (pspec: GObject.ParamSpec) => void;
            'notify::width-request': (pspec: GObject.ParamSpec) => void;
            'notify::window': (pspec: GObject.ParamSpec) => void;
            'notify::orientation': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps
            extends
                Gtk.Box.ConstructorProps,
                Atk.ImplementorIface.ConstructorProps,
                Gtk.Buildable.ConstructorProps,
                Gtk.Orientable.ConstructorProps {
            active: boolean;
            can_show_status: boolean;
            canShowStatus: boolean;
            long_press_action_name: string;
            longPressActionName: string;
            long_press_action_target: string;
            longPressActionTarget: string;
            showing_status: boolean;
            showingStatus: boolean;
            status_icon: StatusIcon;
            statusIcon: StatusIcon;
            status_page: StatusPage;
            statusPage: StatusPage;
        }
    }

    /**
     * A {@link Phosh.QuickSetting} represents a state of an entity (like Wi-Fi, Bluetooth) using an icon
     * and label. It should be added to a PhoshQuickSettingsBox for better integration.
     *
     * A quick-setting displays the state using an icon and label. The state is set by
     * {@link Phosh.StatusIcon}, which must be set as a {@link Phosh.QuickSetting.status_icon}. It
     * can also have a status-page, which can be used to expose additional features. For example, a
     * Wi-Fi quick-setting can show available Wi-Fi hotspots as an extra option. When a status widget is
     * set, the quick-setting displays an arrow at the right end.
     *
     * A quick-setting itself does not have any provision to display its status-page. It is
     * completely upto the user to display and hide the status-pages as required. However the
     * quick-setting can aid in the task with its {@link Phosh.QuickSetting.showing_status} property.
     * When `showing-status` is false, clicking the arrow will cause the quick-setting to emit
     * `Phosh.QuickSetting::show-status`. If `showing-status` is true, then it will emit
     * `Phosh.QuickSetting::hide-status`. The user of the quick-setting is expected to follow
     * this convention and set `showing-status` based on whether they are displaying the status-page
     * or not.
     *
     * A quick-setting might be temporarily prevented from showing its status-page using
     * {@link Phosh.QuickSetting.can_show_status}. Again, `PhoshQuickSettingsBox` can take care of
     * this property, such that once you tell the box if showing status-page is allowed, it will ensure
     * that the children's `can-show-status` are synchronized with it.
     *
     * A quick-setting can be in an active or inactive state. However clicking the quick-setting does
     * not toggle its state. The user must set the state using {@link Phosh.QuickSetting.active}. If
     * the status-icon {@link StatusIcon} has an `enabled` property it will be automatically bound to
     * the {@link Phosh.QuickSetting.active} property.
     *
     * When a quick-setting is clicked, `Phosh.QuickSetting::clicked` is emitted. When it is
     * long-pressed or right-clicked, `Phosh.QuickSetting::long-pressed` is emitted.
     *
     * The common usecase of `long-pressed` is to launch an action (like `panel.launch-panel`). So to
     * avoid duplicating this process for each quick-setting, the user can set
     * {@link Phosh.QuickSetting.long_press_action_name} and
     * {@link Phosh.QuickSetting.long_press_action_target}. The quick-setting then launches that
     * appropriate action.
     * @gir-type Class
     */
    class QuickSetting extends Gtk.Box implements Atk.ImplementorIface, Gtk.Buildable, Gtk.Orientable {
        static $gtype: GObject.GType<QuickSetting>;

        // Properties

        /**
         * The active state of the child.
         */
        get active(): boolean;
        set active(val: boolean);
        /**
         * If the child can display its status.
         */
        get can_show_status(): boolean;
        set can_show_status(val: boolean);
        /**
         * If the child can display its status.
         */
        get canShowStatus(): boolean;
        set canShowStatus(val: boolean);
        /**
         * Action name to trigger on long-press.
         */
        get long_press_action_name(): string;
        set long_press_action_name(val: string);
        /**
         * Action name to trigger on long-press.
         */
        get longPressActionName(): string;
        set longPressActionName(val: string);
        /**
         * Action target for `long-press-action-name`.
         */
        get long_press_action_target(): string;
        set long_press_action_target(val: string);
        /**
         * Action target for `long-press-action-name`.
         */
        get longPressActionTarget(): string;
        set longPressActionTarget(val: string);
        /**
         * If the child is displaying its status.
         */
        get showing_status(): boolean;
        set showing_status(val: boolean);
        /**
         * If the child is displaying its status.
         */
        get showingStatus(): boolean;
        set showingStatus(val: boolean);
        /**
         * The status-icon.
         */
        get status_icon(): StatusIcon;
        set status_icon(val: StatusIcon);
        /**
         * The status-icon.
         */
        get statusIcon(): StatusIcon;
        set statusIcon(val: StatusIcon);
        /**
         * The status-page.
         */
        get status_page(): StatusPage;
        set status_page(val: StatusPage);
        /**
         * The status-page.
         */
        get statusPage(): StatusPage;
        set statusPage(val: StatusPage);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: QuickSetting.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<QuickSetting.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](status_page: StatusPage): QuickSetting;
        // Conflicted with Gtk.Box.new

        static ['new'](...args: never[]): any;

        // Signals

        /** @signal */
        connect<K extends keyof QuickSetting.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, QuickSetting.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof QuickSetting.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, QuickSetting.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof QuickSetting.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<QuickSetting.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        get_active(): boolean;
        get_can_show_status(): boolean;
        get_long_press_action_name(): string;
        get_long_press_action_target(): string;
        get_showing_status(): boolean;
        /**
         * Get the current status-icon of the quick-setting.
         * @returns The status-icon or `NULL`.
         */
        get_status_icon(): StatusIcon;
        /**
         * Get the current status widget of the quick-setting.
         * @returns The status-page or `NULL`.
         */
        get_status_page(): StatusPage;
        /**
         * @param active
         */
        set_active(active: boolean): void;
        /**
         * @param can_show_status
         */
        set_can_show_status(can_show_status: boolean): void;
        /**
         * @param action_name
         */
        set_long_press_action_name(action_name: string): void;
        /**
         * @param action_target
         */
        set_long_press_action_target(action_target: string): void;
        /**
         * @param showing_status
         */
        set_showing_status(showing_status: boolean): void;
        /**
         * Set the status-icon of the quick-setting. Use `NULL` to remove existing icon.
         * @param status_icon A status-icon or `NULL`
         */
        set_status_icon(status_icon: StatusIcon): void;
        /**
         * Set the status-page of the quick-setting.
         * @param status_page A status-page or `NULL`
         */
        set_status_page(status_page: StatusPage): void;
        /**
         * The orientation of the orientable.
         * @since 2.16
         * @category Inherited from Gtk.Orientable
         */
        get orientation(): Gtk.Orientation;
        set orientation(val: Gtk.Orientation);
        /**
         * Retrieves the orientation of the `orientable`.
         * @returns the orientation of the `orientable`.
         */
        get_orientation(): Gtk.Orientation;
        /**
         * Sets the orientation of the `orientable`.
         * @param orientation the orientable’s new orientation.
         */
        set_orientation(orientation: Gtk.Orientation | null): void;
        /**
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target`.
         *
         * Whenever the `source_property` is changed the `target_property` is
         * updated using the same value. For instance:
         *
         *
         * ```c
         *   g_object_bind_property (action, "active", widget, "sensitive", 0);
         * ```
         *
         *
         * Will result in the "sensitive" property of the widget {@link GObject.Object} instance to be
         * updated with the same value of the "active" property of the action {@link GObject.Object}
         * instance.
         *
         * If `flags` contains {@link GObject.BindingFlags.BIDIRECTIONAL} then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well.
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. To remove the binding without affecting the
         * `source` and the `target` you can just call `g_object_unref()` on the returned
         * {@link GObject.Binding} instance.
         *
         * Removing the binding by calling `g_object_unref()` on it must only be done if
         * the binding, `source` and `target` are only used from a single thread and it
         * is clear that both `source` and `target` outlive the binding. Especially it
         * is not safe to rely on this if the binding, `source` or `target` can be
         * finalized from different threads. Keep another reference to the binding and
         * use `g_binding_unbind()` instead to be on the safe side.
         *
         * A {@link GObject.Object} can have multiple bindings.
         * @param source_property the property on `source` to bind
         * @param target the target {@link GObject.Object}
         * @param target_property the property on `target` to bind
         * @param flags flags to pass to {@link GObject.Binding}
         * @returns the {@link GObject.Binding} instance representing the     binding between the two {@link GObject.Object} instances. The binding is released     whenever the {@link GObject.Binding} reference count reaches zero.
         */
        bind_property(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
        ): GObject.Binding;
        /**
         * Complete version of `g_object_bind_property()`.
         *
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target`, allowing you to set the transformation functions to be used by
         * the binding.
         *
         * If `flags` contains {@link GObject.BindingFlags.BIDIRECTIONAL} then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well. The `transform_from` function is only used in case
         * of bidirectional bindings, otherwise it will be ignored
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. This will release the reference that is
         * being held on the {@link GObject.Binding} instance; if you want to hold on to the
         * {@link GObject.Binding} instance, you will need to hold a reference to it.
         *
         * To remove the binding, call `g_binding_unbind()`.
         *
         * A {@link GObject.Object} can have multiple bindings.
         *
         * The same `user_data` parameter will be used for both `transform_to`
         * and `transform_from` transformation functions; the `notify` function will
         * be called once, when the binding is removed. If you need different data
         * for each transformation function, please use
         * `g_object_bind_property_with_closures()` instead.
         * @param source_property the property on `source` to bind
         * @param target the target {@link GObject.Object}
         * @param target_property the property on `target` to bind
         * @param flags flags to pass to {@link GObject.Binding}
         * @param transform_to the transformation function     from the `source` to the `target`, or `null` to use the default
         * @param transform_from the transformation function     from the `target` to the `source`, or `null` to use the default
         * @param notify a function to call when disposing the binding, to free     resources used by the transformation functions, or `null` if not required
         * @returns the {@link GObject.Binding} instance representing the     binding between the two {@link GObject.Object} instances. The binding is released     whenever the {@link GObject.Binding} reference count reaches zero.
         */
        bind_property_full(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
            transform_to?: GObject.BindingTransformFunc | null,
            transform_from?: GObject.BindingTransformFunc | null,
            notify?: GLib.DestroyNotify | null,
        ): GObject.Binding;
        /**
         * @param args
         */
        // Conflicted with GObject.Object.bind_property_full
        bind_property_full(...args: never[]): any;
        /**
         * This function is intended for {@link GObject.Object} implementations to re-enforce
         * a [floating][floating-ref] object reference. Doing this is seldom
         * required: all `GInitiallyUnowneds` are created with a floating reference
         * which usually just needs to be sunken by calling `g_object_ref_sink()`.
         */
        force_floating(): void;
        /**
         * Increases the freeze count on `object`. If the freeze count is
         * non-zero, the emission of "notify" signals on `object` is
         * stopped. The signals are queued until the freeze count is decreased
         * to zero. Duplicate notifications are squashed so that at most one
         * {@link GObject.Object.SignalSignatures.notify | GObject.Object::notify} signal is emitted for each property modified while the
         * object is frozen.
         *
         * This is necessary for accessors that modify multiple properties to prevent
         * premature notification while the object is still being modified.
         */
        freeze_notify(): void;
        /**
         * Gets a named field from the objects table of associations (see `g_object_set_data()`).
         * @param key name of the key for that association
         * @returns the data if found,          or `null` if no such data exists.
         */
        get_data(key: string): any | null;
        /**
         * Gets a property of an object.
         *
         * The value can be:
         * - an empty GObject.Value initialized by G_VALUE_INIT, which will be automatically initialized with the expected type of the property (since GLib 2.60)
         * - a GObject.Value initialized with the expected type of the property
         * - a GObject.Value initialized with a type to which the expected type of the property can be transformed
         *
         * In general, a copy is made of the property contents and the caller is responsible for freeing the memory by calling GObject.Value.unset.
         *
         * Note that GObject.Object.get_property is really intended for language bindings, GObject.Object.get is much more convenient for C programming.
         * @param property_name The name of the property to get
         * @param value Return location for the property value. Can be an empty GObject.Value initialized by G_VALUE_INIT (auto-initialized with expected type since GLib 2.60), a GObject.Value initialized with the expected property type, or a GObject.Value initialized with a transformable type
         */
        get_property(property_name: string, value: GObject.Value | any): any;
        /**
         * This function gets back user data pointers stored via
         * `g_object_set_qdata()`.
         * @param quark A {@link GLib.Quark}, naming the user data pointer
         * @returns The user data pointer set, or `null`
         */
        get_qdata(quark: GLib.Quark): any | null;
        /**
         * Gets `n_properties` properties for an `object`.
         * Obtained properties will be set to `values`. All properties must be valid.
         * Warnings will be emitted and undefined behaviour may result if invalid
         * properties are passed in.
         * @param names the names of each property to get
         * @param values the values of each property to get
         */
        getv(names: string[], values: (GObject.Value | any)[]): void;
        /**
         * Checks whether `object` has a [floating][floating-ref] reference.
         * @returns `true` if `object` has a floating reference
         */
        is_floating(): boolean;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use `g_object_notify_by_pspec()`
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * `g_object_freeze_notify()`. In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when `g_object_thaw_notify()` is
         * called.
         * @param property_name the name of a property installed on the class of `object`.
         */
        notify(property_name: string): void;
        /**
         * Emits a "notify" signal for the property specified by `pspec` on `object`.
         *
         * This function omits the property name lookup, hence it is faster than
         * `g_object_notify()`.
         *
         * One way to avoid using `g_object_notify()` from within the
         * class that registered the properties, and using `g_object_notify_by_pspec()`
         * instead, is to store the GParamSpec used with
         * `g_object_class_install_property()` inside a static array, e.g.:
         *
         *
         * ```c
         *   typedef enum
         *   {
         *     PROP_FOO = 1,
         *     PROP_LAST
         *   } MyObjectProperty;
         *
         *   static GParamSpec *properties[PROP_LAST];
         *
         *   static void
         *   my_object_class_init (MyObjectClass *klass)
         *   {
         *     properties[PROP_FOO] = g_param_spec_int ("foo", NULL, NULL,
         *                                              0, 100,
         *                                              50,
         *                                              G_PARAM_READWRITE | G_PARAM_STATIC_STRINGS);
         *     g_object_class_install_property (gobject_class,
         *                                      PROP_FOO,
         *                                      properties[PROP_FOO]);
         *   }
         * ```
         *
         *
         * and then notify a change on the "foo" property with:
         *
         *
         * ```c
         *   g_object_notify_by_pspec (self, properties[PROP_FOO]);
         * ```
         *
         * @param pspec the {@link GObject.ParamSpec} of a property installed on the class of `object`.
         */
        notify_by_pspec(pspec: GObject.ParamSpec): void;
        /**
         * Increases the reference count of `object`.
         *
         * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
         * of `object` will be propagated to the return type (using the GCC `typeof()`
         * extension), so any casting the caller needs to do on the return type must be
         * explicit.
         * @returns the same `object`
         */
        ref(): GObject.Object;
        /**
         * Increase the reference count of `object`, and possibly remove the
         * [floating][floating-ref] reference, if `object` has a floating reference.
         *
         * In other words, if the object is floating, then this call "assumes
         * ownership" of the floating reference, converting it to a normal
         * reference by clearing the floating flag while leaving the reference
         * count unchanged.  If the object is not floating, then this call
         * adds a new normal reference increasing the reference count by one.
         *
         * Since GLib 2.56, the type of `object` will be propagated to the return type
         * under the same conditions as for `g_object_ref()`.
         * @returns `object`
         */
        ref_sink(): GObject.Object;
        /**
         * Releases all references to other objects. This can be used to break
         * reference cycles.
         *
         * This function should only be called from object system implementations.
         */
        run_dispose(): void;
        /**
         * Each object carries around a table of associations from
         * strings to pointers.  This function lets you set an association.
         *
         * If the object already had an association with that name,
         * the old association will be destroyed.
         *
         * Internally, the `key` is converted to a {@link GLib.Quark} using `g_quark_from_string()`.
         * This means a copy of `key` is kept permanently (even after `object` has been
         * finalized) — so it is recommended to only use a small, bounded set of values
         * for `key` in your program, to avoid the {@link GLib.Quark} storage growing unbounded.
         * @param key name of the key
         * @param data data to associate with that key
         */
        set_data(key: string, data?: any | null): void;
        /**
         * Sets a property on an object.
         * @param property_name The name of the property to set
         * @param value The value to set the property to
         */
        set_property(property_name: string, value: GObject.Value | any): void;
        /**
         * Remove a specified datum from the object's data associations,
         * without invoking the association's destroy handler.
         * @param key name of the key
         * @returns the data if found, or `null`          if no such data exists.
         */
        steal_data(key: string): any | null;
        /**
         * This function gets back user data pointers stored via
         * `g_object_set_qdata()` and removes the `data` from object
         * without invoking its `destroy()` function (if any was
         * set).
         * Usually, calling this function is only required to update
         * user data pointers with a destroy notifier, for example:
         *
         * ```c
         * void
         * object_add_to_user_list (GObject     *object,
         *                          const gchar *new_string)
         * {
         *   // the quark, naming the object data
         *   GQuark quark_string_list = g_quark_from_static_string ("my-string-list");
         *   // retrieve the old string list
         *   GList *list = g_object_steal_qdata (object, quark_string_list);
         *
         *   // prepend new string
         *   list = g_list_prepend (list, g_strdup (new_string));
         *   // this changed 'list', so we need to set it again
         *   g_object_set_qdata_full (object, quark_string_list, list, free_string_list);
         * }
         * static void
         * free_string_list (gpointer data)
         * {
         *   GList *node, *list = data;
         *
         *   for (node = list; node; node = node->next)
         *     g_free (node->data);
         *   g_list_free (list);
         * }
         * ```
         *
         * Using `g_object_get_qdata()` in the above example, instead of
         * `g_object_steal_qdata()` would have left the destroy function set,
         * and thus the partial string list would have been freed upon
         * `g_object_set_qdata_full()`.
         * @param quark A {@link GLib.Quark}, naming the user data pointer
         * @returns The user data pointer set, or `null`
         */
        steal_qdata(quark: GLib.Quark): any | null;
        /**
         * Reverts the effect of a previous call to
         * `g_object_freeze_notify()`. The freeze count is decreased on `object`
         * and when it reaches zero, queued "notify" signals are emitted.
         *
         * Duplicate notifications for each property are squashed so that at most one
         * {@link GObject.Object.SignalSignatures.notify | GObject.Object::notify} signal is emitted for each property, in the reverse order
         * in which they have been queued.
         *
         * It is an error to call this function when the freeze count is zero.
         */
        thaw_notify(): void;
        /**
         * Decreases the reference count of `object`. When its reference count
         * drops to 0, the object is finalized (i.e. its memory is freed).
         *
         * If the pointer to the {@link GObject.Object} may be reused in future (for example, if it is
         * an instance variable of another object), it is recommended to clear the
         * pointer to `null` rather than retain a dangling pointer to a potentially
         * invalid {@link GObject.Object} instance. Use `g_clear_object()` for this.
         */
        unref(): void;
        /**
         * This function essentially limits the life time of the `closure` to
         * the life time of the object. That is, when the object is finalized,
         * the `closure` is invalidated by calling `g_closure_invalidate()` on
         * it, in order to prevent invocations of the closure with a finalized
         * (nonexisting) object. Also, `g_object_ref()` and `g_object_unref()` are
         * added as marshal guards to the `closure`, to ensure that an extra
         * reference count is held on `object` during invocation of the
         * `closure`.  Usually, this function will be called on closures that
         * use this `object` as closure data.
         * @param closure {@link GObject.Closure} to watch
         */
        watch_closure(closure: GObject.Closure): void;
        /**
         * the `constructed` function is called by `g_object_new()` as the
         *  final step of the object creation process.  At the point of the call, all
         *  construction properties have been set on the object.  The purpose of this
         *  call is to allow for object initialisation steps that can only be performed
         *  after construction properties have been set.  `constructed` implementors
         *  should chain up to the `constructed` call of their parent class to allow it
         *  to complete its initialisation.
         * @virtual
         */
        vfunc_constructed(): void;
        /**
         * emits property change notification for a bunch
         *  of properties. Overriding `dispatch_properties_changed` should be rarely
         *  needed.
         * @param n_pspecs
         * @param pspecs
         * @virtual
         */
        vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
        /**
         * the `dispose` function is supposed to drop all references to other
         *  objects, but keep the instance otherwise intact, so that client method
         *  invocations still work. It may be run multiple times (due to reference
         *  loops). Before returning, `dispose` should chain up to the `dispose` method
         *  of the parent class.
         * @virtual
         */
        vfunc_dispose(): void;
        /**
         * instance finalization function, should finish the finalization of
         *  the instance begun in `dispose` and chain up to the `finalize` method of the
         *  parent class.
         * @virtual
         */
        vfunc_finalize(): void;
        /**
         * the generic getter for all properties of this type. Should be
         *  overridden for every type with properties.
         * @param property_id
         * @param value
         * @param pspec
         * @virtual
         */
        vfunc_get_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use `g_object_notify_by_pspec()`
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * `g_object_freeze_notify()`. In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when `g_object_thaw_notify()` is
         * called.
         * @param pspec
         * @virtual
         */
        vfunc_notify(pspec: GObject.ParamSpec): void;
        /**
         * the generic setter for all properties of this type. Should be
         *  overridden for every type with properties. If implementations of
         *  `set_property` don't emit property change notification explicitly, this will
         *  be done implicitly by the type system. However, if the notify signal is
         *  emitted explicitly, the type system will not emit it a second time.
         * @param property_id
         * @param value
         * @param pspec
         * @virtual
         */
        vfunc_set_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Disconnects a handler from an instance so it will not be called during any future or currently ongoing emissions of the signal it has been connected to.
         * @param id Handler ID of the handler to be disconnected
         */
        disconnect(id: number): void;
        /**
         * Sets multiple properties of an object at once. The properties argument should be a dictionary mapping property names to values.
         * @param properties Object containing the properties to set
         */
        set(properties: { [key: string]: any }): void;
        /**
         * Blocks a handler of an instance so it will not be called during any signal emissions
         * @param id Handler ID of the handler to be blocked
         */
        block_signal_handler(id: number): void;
        /**
         * Unblocks a handler so it will be called again during any signal emissions
         * @param id Handler ID of the handler to be unblocked
         */
        unblock_signal_handler(id: number): void;
        /**
         * Stops a signal's emission by the given signal name. This will prevent the default handler and any subsequent signal handlers from being invoked.
         * @param detailedName Name of the signal to stop emission of
         */
        stop_emission_by_name(detailedName: string): void;
    }

    namespace ScreenshotManager {
        // Signal signatures
        interface SignalSignatures extends DBusScreenshotSkeleton.SignalSignatures {
            'notify::g-flags': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps
            extends
                DBusScreenshotSkeleton.ConstructorProps,
                Gio.DBusInterface.ConstructorProps,
                DBusScreenshot.ConstructorProps {}
    }

    /**
     * Screenshot interaction
     *
     * The {@link Phosh.ScreenshotManager} is responsible for
     * taking screenshots.
     * @gir-type Class
     */
    class ScreenshotManager extends DBusScreenshotSkeleton implements Gio.DBusInterface, DBusScreenshot {
        static $gtype: GObject.GType<ScreenshotManager>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: ScreenshotManager.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<ScreenshotManager.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): ScreenshotManager;

        // Signals

        /** @signal */
        connect<K extends keyof ScreenshotManager.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ScreenshotManager.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof ScreenshotManager.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ScreenshotManager.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof ScreenshotManager.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<ScreenshotManager.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Initiate a screenshot of all outputs or the given area. If `copy_to_clipboard` is
         * `TRUE` the screenshot is also copied to the clipboard.
         * @param area The area to capture or `null` to capture all outputs
         * @param filename The output filename or `null` to autogenerate a filename
         * @param copy_to_clipboard Whether to use the clipboard
         * @param include_cursor Whether to include the cursor
         * @returns `FALSE` on failure, otherwise `TRUE`
         */
        take_screenshot(
            area: Gdk.Rectangle | null,
            filename: string | null,
            copy_to_clipboard: boolean,
            include_cursor: boolean,
        ): boolean;
        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-gnome-Shell-Screenshot.FlashArea">FlashArea()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `phosh_dbus_screenshot_call_flash_area_finish()` to get the result of the operation.
         *
         * See `phosh_dbus_screenshot_call_flash_area_sync()` for the synchronous, blocking version of this method.
         * @param arg_x Argument to pass with the method invocation.
         * @param arg_y Argument to pass with the method invocation.
         * @param arg_width Argument to pass with the method invocation.
         * @param arg_height Argument to pass with the method invocation.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         */
        call_flash_area(
            arg_x: number,
            arg_y: number,
            arg_width: number,
            arg_height: number,
            cancellable?: Gio.Cancellable | null,
        ): globalThis.Promise<boolean>;
        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-gnome-Shell-Screenshot.FlashArea">FlashArea()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `phosh_dbus_screenshot_call_flash_area_finish()` to get the result of the operation.
         *
         * See `phosh_dbus_screenshot_call_flash_area_sync()` for the synchronous, blocking version of this method.
         * @param arg_x Argument to pass with the method invocation.
         * @param arg_y Argument to pass with the method invocation.
         * @param arg_width Argument to pass with the method invocation.
         * @param arg_height Argument to pass with the method invocation.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied or `null`.
         */
        call_flash_area(
            arg_x: number,
            arg_y: number,
            arg_width: number,
            arg_height: number,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-gnome-Shell-Screenshot.FlashArea">FlashArea()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `phosh_dbus_screenshot_call_flash_area_finish()` to get the result of the operation.
         *
         * See `phosh_dbus_screenshot_call_flash_area_sync()` for the synchronous, blocking version of this method.
         * @param arg_x Argument to pass with the method invocation.
         * @param arg_y Argument to pass with the method invocation.
         * @param arg_width Argument to pass with the method invocation.
         * @param arg_height Argument to pass with the method invocation.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied or `null`.
         */
        call_flash_area(
            arg_x: number,
            arg_y: number,
            arg_width: number,
            arg_height: number,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<boolean> | void;
        /**
         * Finishes an operation started with `phosh_dbus_screenshot_call_flash_area()`.
         * @param res The {@link Gio.AsyncResult} obtained from the {@link Gio.AsyncReadyCallback} passed to `phosh_dbus_screenshot_call_flash_area()`.
         * @returns `true` if the call succeeded, `false` if `error` is set.
         */
        call_flash_area_finish(res: Gio.AsyncResult): boolean;
        /**
         * Synchronously invokes the <link linkend="gdbus-method-org-gnome-Shell-Screenshot.FlashArea">FlashArea()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
         *
         * See `phosh_dbus_screenshot_call_flash_area()` for the asynchronous version of this method.
         * @param arg_x Argument to pass with the method invocation.
         * @param arg_y Argument to pass with the method invocation.
         * @param arg_width Argument to pass with the method invocation.
         * @param arg_height Argument to pass with the method invocation.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @returns `true` if the call succeeded, `false` if `error` is set.
         */
        call_flash_area_sync(
            arg_x: number,
            arg_y: number,
            arg_width: number,
            arg_height: number,
            cancellable?: Gio.Cancellable | null,
        ): boolean;
        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-gnome-Shell-Screenshot.PickColor">PickColor()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `phosh_dbus_screenshot_call_pick_color_finish()` to get the result of the operation.
         *
         * See `phosh_dbus_screenshot_call_pick_color_sync()` for the synchronous, blocking version of this method.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         */
        call_pick_color(cancellable?: Gio.Cancellable | null): globalThis.Promise<GLib.Variant | null>;
        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-gnome-Shell-Screenshot.PickColor">PickColor()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `phosh_dbus_screenshot_call_pick_color_finish()` to get the result of the operation.
         *
         * See `phosh_dbus_screenshot_call_pick_color_sync()` for the synchronous, blocking version of this method.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied or `null`.
         */
        call_pick_color(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-gnome-Shell-Screenshot.PickColor">PickColor()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `phosh_dbus_screenshot_call_pick_color_finish()` to get the result of the operation.
         *
         * See `phosh_dbus_screenshot_call_pick_color_sync()` for the synchronous, blocking version of this method.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied or `null`.
         */
        call_pick_color(
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<GLib.Variant | null> | void;
        /**
         * Finishes an operation started with `phosh_dbus_screenshot_call_pick_color()`.
         * @param res The {@link Gio.AsyncResult} obtained from the {@link Gio.AsyncReadyCallback} passed to `phosh_dbus_screenshot_call_pick_color()`.
         * @returns `true` if the call succeeded, `false` if `error` is set.
         */
        call_pick_color_finish(res: Gio.AsyncResult): [boolean, GLib.Variant | null];
        /**
         * Synchronously invokes the <link linkend="gdbus-method-org-gnome-Shell-Screenshot.PickColor">PickColor()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
         *
         * See `phosh_dbus_screenshot_call_pick_color()` for the asynchronous version of this method.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @returns `true` if the call succeeded, `false` if `error` is set.
         */
        call_pick_color_sync(cancellable?: Gio.Cancellable | null): [boolean, GLib.Variant | null];
        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-gnome-Shell-Screenshot.Screenshot">Screenshot()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `phosh_dbus_screenshot_call_screenshot_finish()` to get the result of the operation.
         *
         * See `phosh_dbus_screenshot_call_screenshot_sync()` for the synchronous, blocking version of this method.
         * @param arg_include_cursor Argument to pass with the method invocation.
         * @param arg_flash Argument to pass with the method invocation.
         * @param arg_filename Argument to pass with the method invocation.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         */
        call_screenshot(
            arg_include_cursor: boolean,
            arg_flash: boolean,
            arg_filename: string,
            cancellable?: Gio.Cancellable | null,
        ): globalThis.Promise<[boolean, string]>;
        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-gnome-Shell-Screenshot.Screenshot">Screenshot()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `phosh_dbus_screenshot_call_screenshot_finish()` to get the result of the operation.
         *
         * See `phosh_dbus_screenshot_call_screenshot_sync()` for the synchronous, blocking version of this method.
         * @param arg_include_cursor Argument to pass with the method invocation.
         * @param arg_flash Argument to pass with the method invocation.
         * @param arg_filename Argument to pass with the method invocation.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied or `null`.
         */
        call_screenshot(
            arg_include_cursor: boolean,
            arg_flash: boolean,
            arg_filename: string,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-gnome-Shell-Screenshot.Screenshot">Screenshot()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `phosh_dbus_screenshot_call_screenshot_finish()` to get the result of the operation.
         *
         * See `phosh_dbus_screenshot_call_screenshot_sync()` for the synchronous, blocking version of this method.
         * @param arg_include_cursor Argument to pass with the method invocation.
         * @param arg_flash Argument to pass with the method invocation.
         * @param arg_filename Argument to pass with the method invocation.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied or `null`.
         */
        call_screenshot(
            arg_include_cursor: boolean,
            arg_flash: boolean,
            arg_filename: string,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<[boolean, string]> | void;
        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-gnome-Shell-Screenshot.ScreenshotArea">ScreenshotArea()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `phosh_dbus_screenshot_call_screenshot_area_finish()` to get the result of the operation.
         *
         * See `phosh_dbus_screenshot_call_screenshot_area_sync()` for the synchronous, blocking version of this method.
         * @param arg_x Argument to pass with the method invocation.
         * @param arg_y Argument to pass with the method invocation.
         * @param arg_width Argument to pass with the method invocation.
         * @param arg_height Argument to pass with the method invocation.
         * @param arg_flash Argument to pass with the method invocation.
         * @param arg_filename Argument to pass with the method invocation.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         */
        call_screenshot_area(
            arg_x: number,
            arg_y: number,
            arg_width: number,
            arg_height: number,
            arg_flash: boolean,
            arg_filename: string,
            cancellable?: Gio.Cancellable | null,
        ): globalThis.Promise<[boolean, string]>;
        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-gnome-Shell-Screenshot.ScreenshotArea">ScreenshotArea()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `phosh_dbus_screenshot_call_screenshot_area_finish()` to get the result of the operation.
         *
         * See `phosh_dbus_screenshot_call_screenshot_area_sync()` for the synchronous, blocking version of this method.
         * @param arg_x Argument to pass with the method invocation.
         * @param arg_y Argument to pass with the method invocation.
         * @param arg_width Argument to pass with the method invocation.
         * @param arg_height Argument to pass with the method invocation.
         * @param arg_flash Argument to pass with the method invocation.
         * @param arg_filename Argument to pass with the method invocation.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied or `null`.
         */
        call_screenshot_area(
            arg_x: number,
            arg_y: number,
            arg_width: number,
            arg_height: number,
            arg_flash: boolean,
            arg_filename: string,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-gnome-Shell-Screenshot.ScreenshotArea">ScreenshotArea()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `phosh_dbus_screenshot_call_screenshot_area_finish()` to get the result of the operation.
         *
         * See `phosh_dbus_screenshot_call_screenshot_area_sync()` for the synchronous, blocking version of this method.
         * @param arg_x Argument to pass with the method invocation.
         * @param arg_y Argument to pass with the method invocation.
         * @param arg_width Argument to pass with the method invocation.
         * @param arg_height Argument to pass with the method invocation.
         * @param arg_flash Argument to pass with the method invocation.
         * @param arg_filename Argument to pass with the method invocation.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied or `null`.
         */
        call_screenshot_area(
            arg_x: number,
            arg_y: number,
            arg_width: number,
            arg_height: number,
            arg_flash: boolean,
            arg_filename: string,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<[boolean, string]> | void;
        /**
         * Finishes an operation started with `phosh_dbus_screenshot_call_screenshot_area()`.
         * @param res The {@link Gio.AsyncResult} obtained from the {@link Gio.AsyncReadyCallback} passed to `phosh_dbus_screenshot_call_screenshot_area()`.
         * @returns `true` if the call succeeded, `false` if `error` is set.
         */
        call_screenshot_area_finish(res: Gio.AsyncResult): [boolean, boolean, string];
        /**
         * Synchronously invokes the <link linkend="gdbus-method-org-gnome-Shell-Screenshot.ScreenshotArea">ScreenshotArea()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
         *
         * See `phosh_dbus_screenshot_call_screenshot_area()` for the asynchronous version of this method.
         * @param arg_x Argument to pass with the method invocation.
         * @param arg_y Argument to pass with the method invocation.
         * @param arg_width Argument to pass with the method invocation.
         * @param arg_height Argument to pass with the method invocation.
         * @param arg_flash Argument to pass with the method invocation.
         * @param arg_filename Argument to pass with the method invocation.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @returns `true` if the call succeeded, `false` if `error` is set.
         */
        call_screenshot_area_sync(
            arg_x: number,
            arg_y: number,
            arg_width: number,
            arg_height: number,
            arg_flash: boolean,
            arg_filename: string,
            cancellable?: Gio.Cancellable | null,
        ): [boolean, boolean, string];
        /**
         * Finishes an operation started with `phosh_dbus_screenshot_call_screenshot()`.
         * @param res The {@link Gio.AsyncResult} obtained from the {@link Gio.AsyncReadyCallback} passed to `phosh_dbus_screenshot_call_screenshot()`.
         * @returns `true` if the call succeeded, `false` if `error` is set.
         */
        call_screenshot_finish(res: Gio.AsyncResult): [boolean, boolean, string];
        /**
         * Synchronously invokes the <link linkend="gdbus-method-org-gnome-Shell-Screenshot.Screenshot">Screenshot()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
         *
         * See `phosh_dbus_screenshot_call_screenshot()` for the asynchronous version of this method.
         * @param arg_include_cursor Argument to pass with the method invocation.
         * @param arg_flash Argument to pass with the method invocation.
         * @param arg_filename Argument to pass with the method invocation.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @returns `true` if the call succeeded, `false` if `error` is set.
         */
        call_screenshot_sync(
            arg_include_cursor: boolean,
            arg_flash: boolean,
            arg_filename: string,
            cancellable?: Gio.Cancellable | null,
        ): [boolean, boolean, string];
        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-gnome-Shell-Screenshot.ScreenshotWindow">ScreenshotWindow()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `phosh_dbus_screenshot_call_screenshot_window_finish()` to get the result of the operation.
         *
         * See `phosh_dbus_screenshot_call_screenshot_window_sync()` for the synchronous, blocking version of this method.
         * @param arg_include_frame Argument to pass with the method invocation.
         * @param arg_include_cursor Argument to pass with the method invocation.
         * @param arg_flash Argument to pass with the method invocation.
         * @param arg_filename Argument to pass with the method invocation.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         */
        call_screenshot_window(
            arg_include_frame: boolean,
            arg_include_cursor: boolean,
            arg_flash: boolean,
            arg_filename: string,
            cancellable?: Gio.Cancellable | null,
        ): globalThis.Promise<[boolean, string]>;
        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-gnome-Shell-Screenshot.ScreenshotWindow">ScreenshotWindow()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `phosh_dbus_screenshot_call_screenshot_window_finish()` to get the result of the operation.
         *
         * See `phosh_dbus_screenshot_call_screenshot_window_sync()` for the synchronous, blocking version of this method.
         * @param arg_include_frame Argument to pass with the method invocation.
         * @param arg_include_cursor Argument to pass with the method invocation.
         * @param arg_flash Argument to pass with the method invocation.
         * @param arg_filename Argument to pass with the method invocation.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied or `null`.
         */
        call_screenshot_window(
            arg_include_frame: boolean,
            arg_include_cursor: boolean,
            arg_flash: boolean,
            arg_filename: string,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-gnome-Shell-Screenshot.ScreenshotWindow">ScreenshotWindow()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `phosh_dbus_screenshot_call_screenshot_window_finish()` to get the result of the operation.
         *
         * See `phosh_dbus_screenshot_call_screenshot_window_sync()` for the synchronous, blocking version of this method.
         * @param arg_include_frame Argument to pass with the method invocation.
         * @param arg_include_cursor Argument to pass with the method invocation.
         * @param arg_flash Argument to pass with the method invocation.
         * @param arg_filename Argument to pass with the method invocation.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied or `null`.
         */
        call_screenshot_window(
            arg_include_frame: boolean,
            arg_include_cursor: boolean,
            arg_flash: boolean,
            arg_filename: string,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<[boolean, string]> | void;
        /**
         * Finishes an operation started with `phosh_dbus_screenshot_call_screenshot_window()`.
         * @param res The {@link Gio.AsyncResult} obtained from the {@link Gio.AsyncReadyCallback} passed to `phosh_dbus_screenshot_call_screenshot_window()`.
         * @returns `true` if the call succeeded, `false` if `error` is set.
         */
        call_screenshot_window_finish(res: Gio.AsyncResult): [boolean, boolean, string];
        /**
         * Synchronously invokes the <link linkend="gdbus-method-org-gnome-Shell-Screenshot.ScreenshotWindow">ScreenshotWindow()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
         *
         * See `phosh_dbus_screenshot_call_screenshot_window()` for the asynchronous version of this method.
         * @param arg_include_frame Argument to pass with the method invocation.
         * @param arg_include_cursor Argument to pass with the method invocation.
         * @param arg_flash Argument to pass with the method invocation.
         * @param arg_filename Argument to pass with the method invocation.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @returns `true` if the call succeeded, `false` if `error` is set.
         */
        call_screenshot_window_sync(
            arg_include_frame: boolean,
            arg_include_cursor: boolean,
            arg_flash: boolean,
            arg_filename: string,
            cancellable?: Gio.Cancellable | null,
        ): [boolean, boolean, string];
        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-gnome-Shell-Screenshot.SelectArea">SelectArea()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `phosh_dbus_screenshot_call_select_area_finish()` to get the result of the operation.
         *
         * See `phosh_dbus_screenshot_call_select_area_sync()` for the synchronous, blocking version of this method.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         */
        call_select_area(cancellable?: Gio.Cancellable | null): globalThis.Promise<[number, number, number, number]>;
        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-gnome-Shell-Screenshot.SelectArea">SelectArea()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `phosh_dbus_screenshot_call_select_area_finish()` to get the result of the operation.
         *
         * See `phosh_dbus_screenshot_call_select_area_sync()` for the synchronous, blocking version of this method.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied or `null`.
         */
        call_select_area(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-gnome-Shell-Screenshot.SelectArea">SelectArea()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `phosh_dbus_screenshot_call_select_area_finish()` to get the result of the operation.
         *
         * See `phosh_dbus_screenshot_call_select_area_sync()` for the synchronous, blocking version of this method.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied or `null`.
         */
        call_select_area(
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<[number, number, number, number]> | void;
        /**
         * Finishes an operation started with `phosh_dbus_screenshot_call_select_area()`.
         * @param res The {@link Gio.AsyncResult} obtained from the {@link Gio.AsyncReadyCallback} passed to `phosh_dbus_screenshot_call_select_area()`.
         * @returns `true` if the call succeeded, `false` if `error` is set.
         */
        call_select_area_finish(res: Gio.AsyncResult): [boolean, number, number, number, number];
        /**
         * Synchronously invokes the <link linkend="gdbus-method-org-gnome-Shell-Screenshot.SelectArea">SelectArea()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
         *
         * See `phosh_dbus_screenshot_call_select_area()` for the asynchronous version of this method.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @returns `true` if the call succeeded, `false` if `error` is set.
         */
        call_select_area_sync(cancellable?: Gio.Cancellable | null): [boolean, number, number, number, number];
        /**
         * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-gnome-Shell-Screenshot.FlashArea">FlashArea()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use `g_dbus_method_invocation_return_error()` or similar.
         *
         * This method will free `invocation`, you cannot use it afterwards.
         * @param invocation A {@link Gio.DBusMethodInvocation}.
         */
        complete_flash_area(invocation: Gio.DBusMethodInvocation): void;
        /**
         * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-gnome-Shell-Screenshot.PickColor">PickColor()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use `g_dbus_method_invocation_return_error()` or similar.
         *
         * This method will free `invocation`, you cannot use it afterwards.
         * @param invocation A {@link Gio.DBusMethodInvocation}.
         * @param result Parameter to return.
         */
        complete_pick_color(invocation: Gio.DBusMethodInvocation, result: GLib.Variant): void;
        /**
         * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-gnome-Shell-Screenshot.Screenshot">Screenshot()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use `g_dbus_method_invocation_return_error()` or similar.
         *
         * This method will free `invocation`, you cannot use it afterwards.
         * @param invocation A {@link Gio.DBusMethodInvocation}.
         * @param success Parameter to return.
         * @param filename_used Parameter to return.
         */
        complete_screenshot(invocation: Gio.DBusMethodInvocation, success: boolean, filename_used: string): void;
        /**
         * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-gnome-Shell-Screenshot.ScreenshotArea">ScreenshotArea()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use `g_dbus_method_invocation_return_error()` or similar.
         *
         * This method will free `invocation`, you cannot use it afterwards.
         * @param invocation A {@link Gio.DBusMethodInvocation}.
         * @param success Parameter to return.
         * @param filename_used Parameter to return.
         */
        complete_screenshot_area(invocation: Gio.DBusMethodInvocation, success: boolean, filename_used: string): void;
        /**
         * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-gnome-Shell-Screenshot.ScreenshotWindow">ScreenshotWindow()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use `g_dbus_method_invocation_return_error()` or similar.
         *
         * This method will free `invocation`, you cannot use it afterwards.
         * @param invocation A {@link Gio.DBusMethodInvocation}.
         * @param success Parameter to return.
         * @param filename_used Parameter to return.
         */
        complete_screenshot_window(invocation: Gio.DBusMethodInvocation, success: boolean, filename_used: string): void;
        /**
         * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-gnome-Shell-Screenshot.SelectArea">SelectArea()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use `g_dbus_method_invocation_return_error()` or similar.
         *
         * This method will free `invocation`, you cannot use it afterwards.
         * @param invocation A {@link Gio.DBusMethodInvocation}.
         * @param x Parameter to return.
         * @param y Parameter to return.
         * @param width Parameter to return.
         * @param height Parameter to return.
         */
        complete_select_area(
            invocation: Gio.DBusMethodInvocation,
            x: number,
            y: number,
            width: number,
            height: number,
        ): void;
        /**
         * Handler for the {@link Phosh.DBusScreenshot.SignalSignatures.handle_flash_area | Phosh.DBusScreenshot::handle-flash-area} signal.
         * @param invocation
         * @param arg_x
         * @param arg_y
         * @param arg_width
         * @param arg_height
         * @virtual
         */
        vfunc_handle_flash_area(
            invocation: Gio.DBusMethodInvocation,
            arg_x: number,
            arg_y: number,
            arg_width: number,
            arg_height: number,
        ): boolean;
        /**
         * Handler for the {@link Phosh.DBusScreenshot.SignalSignatures.handle_pick_color | Phosh.DBusScreenshot::handle-pick-color} signal.
         * @param invocation
         * @virtual
         */
        vfunc_handle_pick_color(invocation: Gio.DBusMethodInvocation): boolean;
        /**
         * Handler for the {@link Phosh.DBusScreenshot.SignalSignatures.handle_screenshot | Phosh.DBusScreenshot::handle-screenshot} signal.
         * @param invocation
         * @param arg_include_cursor
         * @param arg_flash
         * @param arg_filename
         * @virtual
         */
        vfunc_handle_screenshot(
            invocation: Gio.DBusMethodInvocation,
            arg_include_cursor: boolean,
            arg_flash: boolean,
            arg_filename: string,
        ): boolean;
        /**
         * Handler for the {@link Phosh.DBusScreenshot.SignalSignatures.handle_screenshot_area | Phosh.DBusScreenshot::handle-screenshot-area} signal.
         * @param invocation
         * @param arg_x
         * @param arg_y
         * @param arg_width
         * @param arg_height
         * @param arg_flash
         * @param arg_filename
         * @virtual
         */
        vfunc_handle_screenshot_area(
            invocation: Gio.DBusMethodInvocation,
            arg_x: number,
            arg_y: number,
            arg_width: number,
            arg_height: number,
            arg_flash: boolean,
            arg_filename: string,
        ): boolean;
        /**
         * Handler for the {@link Phosh.DBusScreenshot.SignalSignatures.handle_screenshot_window | Phosh.DBusScreenshot::handle-screenshot-window} signal.
         * @param invocation
         * @param arg_include_frame
         * @param arg_include_cursor
         * @param arg_flash
         * @param arg_filename
         * @virtual
         */
        vfunc_handle_screenshot_window(
            invocation: Gio.DBusMethodInvocation,
            arg_include_frame: boolean,
            arg_include_cursor: boolean,
            arg_flash: boolean,
            arg_filename: string,
        ): boolean;
        /**
         * Handler for the {@link Phosh.DBusScreenshot.SignalSignatures.handle_select_area | Phosh.DBusScreenshot::handle-select-area} signal.
         * @param invocation
         * @virtual
         */
        vfunc_handle_select_area(invocation: Gio.DBusMethodInvocation): boolean;
        /**
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target`.
         *
         * Whenever the `source_property` is changed the `target_property` is
         * updated using the same value. For instance:
         *
         *
         * ```c
         *   g_object_bind_property (action, "active", widget, "sensitive", 0);
         * ```
         *
         *
         * Will result in the "sensitive" property of the widget {@link GObject.Object} instance to be
         * updated with the same value of the "active" property of the action {@link GObject.Object}
         * instance.
         *
         * If `flags` contains {@link GObject.BindingFlags.BIDIRECTIONAL} then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well.
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. To remove the binding without affecting the
         * `source` and the `target` you can just call `g_object_unref()` on the returned
         * {@link GObject.Binding} instance.
         *
         * Removing the binding by calling `g_object_unref()` on it must only be done if
         * the binding, `source` and `target` are only used from a single thread and it
         * is clear that both `source` and `target` outlive the binding. Especially it
         * is not safe to rely on this if the binding, `source` or `target` can be
         * finalized from different threads. Keep another reference to the binding and
         * use `g_binding_unbind()` instead to be on the safe side.
         *
         * A {@link GObject.Object} can have multiple bindings.
         * @param source_property the property on `source` to bind
         * @param target the target {@link GObject.Object}
         * @param target_property the property on `target` to bind
         * @param flags flags to pass to {@link GObject.Binding}
         * @returns the {@link GObject.Binding} instance representing the     binding between the two {@link GObject.Object} instances. The binding is released     whenever the {@link GObject.Binding} reference count reaches zero.
         */
        bind_property(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
        ): GObject.Binding;
        /**
         * Complete version of `g_object_bind_property()`.
         *
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target`, allowing you to set the transformation functions to be used by
         * the binding.
         *
         * If `flags` contains {@link GObject.BindingFlags.BIDIRECTIONAL} then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well. The `transform_from` function is only used in case
         * of bidirectional bindings, otherwise it will be ignored
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. This will release the reference that is
         * being held on the {@link GObject.Binding} instance; if you want to hold on to the
         * {@link GObject.Binding} instance, you will need to hold a reference to it.
         *
         * To remove the binding, call `g_binding_unbind()`.
         *
         * A {@link GObject.Object} can have multiple bindings.
         *
         * The same `user_data` parameter will be used for both `transform_to`
         * and `transform_from` transformation functions; the `notify` function will
         * be called once, when the binding is removed. If you need different data
         * for each transformation function, please use
         * `g_object_bind_property_with_closures()` instead.
         * @param source_property the property on `source` to bind
         * @param target the target {@link GObject.Object}
         * @param target_property the property on `target` to bind
         * @param flags flags to pass to {@link GObject.Binding}
         * @param transform_to the transformation function     from the `source` to the `target`, or `null` to use the default
         * @param transform_from the transformation function     from the `target` to the `source`, or `null` to use the default
         * @param notify a function to call when disposing the binding, to free     resources used by the transformation functions, or `null` if not required
         * @returns the {@link GObject.Binding} instance representing the     binding between the two {@link GObject.Object} instances. The binding is released     whenever the {@link GObject.Binding} reference count reaches zero.
         */
        bind_property_full(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
            transform_to?: GObject.BindingTransformFunc | null,
            transform_from?: GObject.BindingTransformFunc | null,
            notify?: GLib.DestroyNotify | null,
        ): GObject.Binding;
        /**
         * @param args
         */
        // Conflicted with GObject.Object.bind_property_full
        bind_property_full(...args: never[]): any;
        /**
         * This function is intended for {@link GObject.Object} implementations to re-enforce
         * a [floating][floating-ref] object reference. Doing this is seldom
         * required: all `GInitiallyUnowneds` are created with a floating reference
         * which usually just needs to be sunken by calling `g_object_ref_sink()`.
         */
        force_floating(): void;
        /**
         * Increases the freeze count on `object`. If the freeze count is
         * non-zero, the emission of "notify" signals on `object` is
         * stopped. The signals are queued until the freeze count is decreased
         * to zero. Duplicate notifications are squashed so that at most one
         * {@link GObject.Object.SignalSignatures.notify | GObject.Object::notify} signal is emitted for each property modified while the
         * object is frozen.
         *
         * This is necessary for accessors that modify multiple properties to prevent
         * premature notification while the object is still being modified.
         */
        freeze_notify(): void;
        /**
         * Gets a named field from the objects table of associations (see `g_object_set_data()`).
         * @param key name of the key for that association
         * @returns the data if found,          or `null` if no such data exists.
         */
        get_data(key: string): any | null;
        /**
         * Gets a property of an object.
         *
         * The value can be:
         * - an empty GObject.Value initialized by G_VALUE_INIT, which will be automatically initialized with the expected type of the property (since GLib 2.60)
         * - a GObject.Value initialized with the expected type of the property
         * - a GObject.Value initialized with a type to which the expected type of the property can be transformed
         *
         * In general, a copy is made of the property contents and the caller is responsible for freeing the memory by calling GObject.Value.unset.
         *
         * Note that GObject.Object.get_property is really intended for language bindings, GObject.Object.get is much more convenient for C programming.
         * @param property_name The name of the property to get
         * @param value Return location for the property value. Can be an empty GObject.Value initialized by G_VALUE_INIT (auto-initialized with expected type since GLib 2.60), a GObject.Value initialized with the expected property type, or a GObject.Value initialized with a transformable type
         */
        get_property(property_name: string, value: GObject.Value | any): any;
        /**
         * This function gets back user data pointers stored via
         * `g_object_set_qdata()`.
         * @param quark A {@link GLib.Quark}, naming the user data pointer
         * @returns The user data pointer set, or `null`
         */
        get_qdata(quark: GLib.Quark): any | null;
        /**
         * Gets `n_properties` properties for an `object`.
         * Obtained properties will be set to `values`. All properties must be valid.
         * Warnings will be emitted and undefined behaviour may result if invalid
         * properties are passed in.
         * @param names the names of each property to get
         * @param values the values of each property to get
         */
        getv(names: string[], values: (GObject.Value | any)[]): void;
        /**
         * Checks whether `object` has a [floating][floating-ref] reference.
         * @returns `true` if `object` has a floating reference
         */
        is_floating(): boolean;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use `g_object_notify_by_pspec()`
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * `g_object_freeze_notify()`. In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when `g_object_thaw_notify()` is
         * called.
         * @param property_name the name of a property installed on the class of `object`.
         */
        notify(property_name: string): void;
        /**
         * Emits a "notify" signal for the property specified by `pspec` on `object`.
         *
         * This function omits the property name lookup, hence it is faster than
         * `g_object_notify()`.
         *
         * One way to avoid using `g_object_notify()` from within the
         * class that registered the properties, and using `g_object_notify_by_pspec()`
         * instead, is to store the GParamSpec used with
         * `g_object_class_install_property()` inside a static array, e.g.:
         *
         *
         * ```c
         *   typedef enum
         *   {
         *     PROP_FOO = 1,
         *     PROP_LAST
         *   } MyObjectProperty;
         *
         *   static GParamSpec *properties[PROP_LAST];
         *
         *   static void
         *   my_object_class_init (MyObjectClass *klass)
         *   {
         *     properties[PROP_FOO] = g_param_spec_int ("foo", NULL, NULL,
         *                                              0, 100,
         *                                              50,
         *                                              G_PARAM_READWRITE | G_PARAM_STATIC_STRINGS);
         *     g_object_class_install_property (gobject_class,
         *                                      PROP_FOO,
         *                                      properties[PROP_FOO]);
         *   }
         * ```
         *
         *
         * and then notify a change on the "foo" property with:
         *
         *
         * ```c
         *   g_object_notify_by_pspec (self, properties[PROP_FOO]);
         * ```
         *
         * @param pspec the {@link GObject.ParamSpec} of a property installed on the class of `object`.
         */
        notify_by_pspec(pspec: GObject.ParamSpec): void;
        /**
         * Increases the reference count of `object`.
         *
         * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
         * of `object` will be propagated to the return type (using the GCC `typeof()`
         * extension), so any casting the caller needs to do on the return type must be
         * explicit.
         * @returns the same `object`
         */
        ref(): GObject.Object;
        /**
         * Increase the reference count of `object`, and possibly remove the
         * [floating][floating-ref] reference, if `object` has a floating reference.
         *
         * In other words, if the object is floating, then this call "assumes
         * ownership" of the floating reference, converting it to a normal
         * reference by clearing the floating flag while leaving the reference
         * count unchanged.  If the object is not floating, then this call
         * adds a new normal reference increasing the reference count by one.
         *
         * Since GLib 2.56, the type of `object` will be propagated to the return type
         * under the same conditions as for `g_object_ref()`.
         * @returns `object`
         */
        ref_sink(): GObject.Object;
        /**
         * Releases all references to other objects. This can be used to break
         * reference cycles.
         *
         * This function should only be called from object system implementations.
         */
        run_dispose(): void;
        /**
         * Each object carries around a table of associations from
         * strings to pointers.  This function lets you set an association.
         *
         * If the object already had an association with that name,
         * the old association will be destroyed.
         *
         * Internally, the `key` is converted to a {@link GLib.Quark} using `g_quark_from_string()`.
         * This means a copy of `key` is kept permanently (even after `object` has been
         * finalized) — so it is recommended to only use a small, bounded set of values
         * for `key` in your program, to avoid the {@link GLib.Quark} storage growing unbounded.
         * @param key name of the key
         * @param data data to associate with that key
         */
        set_data(key: string, data?: any | null): void;
        /**
         * Sets a property on an object.
         * @param property_name The name of the property to set
         * @param value The value to set the property to
         */
        set_property(property_name: string, value: GObject.Value | any): void;
        /**
         * Remove a specified datum from the object's data associations,
         * without invoking the association's destroy handler.
         * @param key name of the key
         * @returns the data if found, or `null`          if no such data exists.
         */
        steal_data(key: string): any | null;
        /**
         * This function gets back user data pointers stored via
         * `g_object_set_qdata()` and removes the `data` from object
         * without invoking its `destroy()` function (if any was
         * set).
         * Usually, calling this function is only required to update
         * user data pointers with a destroy notifier, for example:
         *
         * ```c
         * void
         * object_add_to_user_list (GObject     *object,
         *                          const gchar *new_string)
         * {
         *   // the quark, naming the object data
         *   GQuark quark_string_list = g_quark_from_static_string ("my-string-list");
         *   // retrieve the old string list
         *   GList *list = g_object_steal_qdata (object, quark_string_list);
         *
         *   // prepend new string
         *   list = g_list_prepend (list, g_strdup (new_string));
         *   // this changed 'list', so we need to set it again
         *   g_object_set_qdata_full (object, quark_string_list, list, free_string_list);
         * }
         * static void
         * free_string_list (gpointer data)
         * {
         *   GList *node, *list = data;
         *
         *   for (node = list; node; node = node->next)
         *     g_free (node->data);
         *   g_list_free (list);
         * }
         * ```
         *
         * Using `g_object_get_qdata()` in the above example, instead of
         * `g_object_steal_qdata()` would have left the destroy function set,
         * and thus the partial string list would have been freed upon
         * `g_object_set_qdata_full()`.
         * @param quark A {@link GLib.Quark}, naming the user data pointer
         * @returns The user data pointer set, or `null`
         */
        steal_qdata(quark: GLib.Quark): any | null;
        /**
         * Reverts the effect of a previous call to
         * `g_object_freeze_notify()`. The freeze count is decreased on `object`
         * and when it reaches zero, queued "notify" signals are emitted.
         *
         * Duplicate notifications for each property are squashed so that at most one
         * {@link GObject.Object.SignalSignatures.notify | GObject.Object::notify} signal is emitted for each property, in the reverse order
         * in which they have been queued.
         *
         * It is an error to call this function when the freeze count is zero.
         */
        thaw_notify(): void;
        /**
         * Decreases the reference count of `object`. When its reference count
         * drops to 0, the object is finalized (i.e. its memory is freed).
         *
         * If the pointer to the {@link GObject.Object} may be reused in future (for example, if it is
         * an instance variable of another object), it is recommended to clear the
         * pointer to `null` rather than retain a dangling pointer to a potentially
         * invalid {@link GObject.Object} instance. Use `g_clear_object()` for this.
         */
        unref(): void;
        /**
         * This function essentially limits the life time of the `closure` to
         * the life time of the object. That is, when the object is finalized,
         * the `closure` is invalidated by calling `g_closure_invalidate()` on
         * it, in order to prevent invocations of the closure with a finalized
         * (nonexisting) object. Also, `g_object_ref()` and `g_object_unref()` are
         * added as marshal guards to the `closure`, to ensure that an extra
         * reference count is held on `object` during invocation of the
         * `closure`.  Usually, this function will be called on closures that
         * use this `object` as closure data.
         * @param closure {@link GObject.Closure} to watch
         */
        watch_closure(closure: GObject.Closure): void;
        /**
         * the `constructed` function is called by `g_object_new()` as the
         *  final step of the object creation process.  At the point of the call, all
         *  construction properties have been set on the object.  The purpose of this
         *  call is to allow for object initialisation steps that can only be performed
         *  after construction properties have been set.  `constructed` implementors
         *  should chain up to the `constructed` call of their parent class to allow it
         *  to complete its initialisation.
         * @virtual
         */
        vfunc_constructed(): void;
        /**
         * emits property change notification for a bunch
         *  of properties. Overriding `dispatch_properties_changed` should be rarely
         *  needed.
         * @param n_pspecs
         * @param pspecs
         * @virtual
         */
        vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
        /**
         * the `dispose` function is supposed to drop all references to other
         *  objects, but keep the instance otherwise intact, so that client method
         *  invocations still work. It may be run multiple times (due to reference
         *  loops). Before returning, `dispose` should chain up to the `dispose` method
         *  of the parent class.
         * @virtual
         */
        vfunc_dispose(): void;
        /**
         * instance finalization function, should finish the finalization of
         *  the instance begun in `dispose` and chain up to the `finalize` method of the
         *  parent class.
         * @virtual
         */
        vfunc_finalize(): void;
        /**
         * the generic getter for all properties of this type. Should be
         *  overridden for every type with properties.
         * @param property_id
         * @param value
         * @param pspec
         * @virtual
         */
        vfunc_get_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use `g_object_notify_by_pspec()`
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * `g_object_freeze_notify()`. In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when `g_object_thaw_notify()` is
         * called.
         * @param pspec
         * @virtual
         */
        vfunc_notify(pspec: GObject.ParamSpec): void;
        /**
         * the generic setter for all properties of this type. Should be
         *  overridden for every type with properties. If implementations of
         *  `set_property` don't emit property change notification explicitly, this will
         *  be done implicitly by the type system. However, if the notify signal is
         *  emitted explicitly, the type system will not emit it a second time.
         * @param property_id
         * @param value
         * @param pspec
         * @virtual
         */
        vfunc_set_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Disconnects a handler from an instance so it will not be called during any future or currently ongoing emissions of the signal it has been connected to.
         * @param id Handler ID of the handler to be disconnected
         */
        disconnect(id: number): void;
        /**
         * Sets multiple properties of an object at once. The properties argument should be a dictionary mapping property names to values.
         * @param properties Object containing the properties to set
         */
        set(properties: { [key: string]: any }): void;
        /**
         * Blocks a handler of an instance so it will not be called during any signal emissions
         * @param id Handler ID of the handler to be blocked
         */
        block_signal_handler(id: number): void;
        /**
         * Unblocks a handler so it will be called again during any signal emissions
         * @param id Handler ID of the handler to be unblocked
         */
        unblock_signal_handler(id: number): void;
        /**
         * Stops a signal's emission by the given signal name. This will prevent the default handler and any subsequent signal handlers from being invoked.
         * @param detailedName Name of the signal to stop emission of
         */
        stop_emission_by_name(detailedName: string): void;
    }

    namespace Shell {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            /**
             * The ready signal is emitted once when the shell finished starting
             * up.
             * @signal
             * @since 0.11.0
             * @run-last
             */
            ready: () => void;
            'notify::docked': (pspec: GObject.ParamSpec) => void;
            'notify::locked': (pspec: GObject.ParamSpec) => void;
            'notify::log-domains': (pspec: GObject.ParamSpec) => void;
            'notify::overview-visible': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps
            extends GObject.Object.ConstructorProps, Gio.ActionGroup.ConstructorProps, Gio.ActionMap.ConstructorProps {
            docked: boolean;
            locked: boolean;
            log_domains: string[];
            logDomains: string[];
            overview_visible: boolean;
            overviewVisible: boolean;
        }
    }

    /**
     * The shell singleton
     *
     * {@link Phosh.Shell} is responsible for instantiating the GUI
     * parts of the shell#PhoshTopPanel, `PhoshHome`,… and the managers that
     * interface with DBus `PhoshMonitorManager`, `PhoshFeedbackManager`, …
     * and coordinates between them.
     * @gir-type Class
     */
    class Shell extends GObject.Object implements Gio.ActionGroup, Gio.ActionMap {
        static $gtype: GObject.GType<Shell>;

        // Properties

        /**
         * Whether the device is currently docked. This mirrors the property
         * from `PhoshDockedManager` for easier access.
         */
        get docked(): boolean;
        set docked(val: boolean);
        /**
         * Whether the screen is currently locked. This mirrors the property
         * from {@link Phosh.LockscreenManager} for easier access.
         */
        get locked(): boolean;
        set locked(val: boolean);
        /**
         * The current log domains
         */
        get log_domains(): string[];
        set log_domains(val: string[]);
        /**
         * The current log domains
         */
        get logDomains(): string[];
        set logDomains(val: string[]);
        /**
         * Whether to display the `PhoshHome` (overview and home bar)
         */
        get overview_visible(): boolean;
        set overview_visible(val: boolean);
        /**
         * Whether to display the `PhoshHome` (overview and home bar)
         */
        get overviewVisible(): boolean;
        set overviewVisible(val: boolean);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Shell.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Shell.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): Shell;

        // Signals

        /** @signal */
        connect<K extends keyof Shell.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Shell.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Shell.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Shell.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Shell.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Shell.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        /**
         * Get the shell singleton
         */
        static get_default(): Shell;

        // Virtual methods

        /**
         * @virtual
         */
        vfunc_get_lockscreen_type(): GObject.GType;

        // Methods

        /**
         * @param timeout
         */
        fade_out(timeout: number): void;
        /**
         * @returns `true` if the shell is currently locked, otherwise `false`.
         */
        get_locked(): boolean;
        /**
         * Get the lockscreen manager
         * @returns The lockscreen manager
         */
        get_lockscreen_manager(): LockscreenManager;
        get_lockscreen_type(): GObject.GType;
        /**
         * Get the screenshot manager
         * @returns The screenshot manager
         */
        get_screenshot_manager(): ScreenshotManager;
        /**
         * Gives the usable area in pixels usable by a client on the primary
         * display.
         */
        get_usable_area(): [number, number, number, number];
        /**
         * Set the PhoshShell singleton that is returned by `phosh_shell_get_default()`
         */
        set_default(): void;
        /**
         * Emits the `Gio.ActionGroup::action-added` signal on `action_group`.
         *
         * This function should only be called by {@link Gio.ActionGroup} implementations.
         * @param action_name the name of an action in the group
         */
        action_added(action_name: string): void;
        /**
         * Emits the `Gio.ActionGroup::action-enabled-changed` signal on `action_group`.
         *
         * This function should only be called by {@link Gio.ActionGroup} implementations.
         * @param action_name the name of an action in the group
         * @param enabled whether the action is now enabled
         */
        action_enabled_changed(action_name: string, enabled: boolean): void;
        /**
         * Emits the `Gio.ActionGroup::action-removed` signal on `action_group`.
         *
         * This function should only be called by {@link Gio.ActionGroup} implementations.
         * @param action_name the name of an action in the group
         */
        action_removed(action_name: string): void;
        /**
         * Emits the `Gio.ActionGroup::action-state-changed` signal on `action_group`.
         *
         * This function should only be called by {@link Gio.ActionGroup} implementations.
         * @param action_name the name of an action in the group
         * @param state the new state of the named action
         */
        action_state_changed(action_name: string, state: GLib.Variant): void;
        /**
         * Activate the named action within `action_group`.
         *
         * If the action is expecting a parameter, then the correct type of
         * parameter must be given as `parameter`.  If the action is expecting no
         * parameters then `parameter` must be `NULL`.  See
         * {@link Gio.ActionGroup.get_action_parameter_type}.
         *
         * If the {@link Gio.ActionGroup} implementation supports asynchronous remote
         * activation over D-Bus, this call may return before the relevant
         * D-Bus traffic has been sent, or any replies have been received. In
         * order to block on such asynchronous activation calls,
         * {@link Gio.DBusConnection.flush} should be called prior to the code, which
         * depends on the result of the action activation. Without flushing
         * the D-Bus connection, there is no guarantee that the action would
         * have been activated.
         *
         * The following code which runs in a remote app instance, shows an
         * example of a ‘quit’ action being activated on the primary app
         * instance over D-Bus. Here {@link Gio.DBusConnection.flush} is called
         * before `exit()`. Without `g_dbus_connection_flush()`, the ‘quit’ action
         * may fail to be activated on the primary instance.
         *
         * ```c
         * // call ‘quit’ action on primary instance
         * g_action_group_activate_action (G_ACTION_GROUP (app), "quit", NULL);
         *
         * // make sure the action is activated now
         * g_dbus_connection_flush (…);
         *
         * g_debug ("Application has been terminated. Exiting.");
         *
         * exit (0);
         * ```
         * @param action_name the name of the action to activate
         * @param parameter parameters to the activation
         */
        activate_action(action_name: string, parameter?: GLib.Variant | null): void;
        /**
         * Request for the state of the named action within `action_group` to be
         * changed to `value`.
         *
         * The action must be stateful and `value` must be of the correct type.
         * See {@link Gio.ActionGroup.get_action_state_type}.
         *
         * This call merely requests a change.  The action may refuse to change
         * its state or may change its state to something other than `value`.
         * See {@link Gio.ActionGroup.get_action_state_hint}.
         *
         * If the `value` GVariant is floating, it is consumed.
         * @param action_name the name of the action to request the change on
         * @param value the new state
         */
        change_action_state(action_name: string, value: GLib.Variant): void;
        /**
         * Checks if the named action within `action_group` is currently enabled.
         *
         * An action must be enabled in order to be activated or in order to
         * have its state changed from outside callers.
         * @param action_name the name of the action to query
         * @returns whether the action is currently enabled
         */
        get_action_enabled(action_name: string): boolean;
        /**
         * Queries the type of the parameter that must be given when activating
         * the named action within `action_group`.
         *
         * When activating the action using {@link Gio.ActionGroup.activate_action},
         * the {@link GLib.Variant} given to that function must be of the type returned
         * by this function.
         *
         * In the case that this function returns `NULL`, you must not give any
         * {@link GLib.Variant}, but `NULL` instead.
         *
         * The parameter type of a particular action will never change but it is
         * possible for an action to be removed and for a new action to be added
         * with the same name but a different parameter type.
         * @param action_name the name of the action to query
         * @returns the parameter type
         */
        get_action_parameter_type(action_name: string): GLib.VariantType | null;
        /**
         * Queries the current state of the named action within `action_group`.
         *
         * If the action is not stateful then `NULL` will be returned.  If the
         * action is stateful then the type of the return value is the type
         * given by {@link Gio.ActionGroup.get_action_state_type}.
         *
         * The return value (if non-`NULL`) should be freed with
         * {@link GLib.Variant.unref} when it is no longer required.
         * @param action_name the name of the action to query
         * @returns the current state of the action
         */
        get_action_state(action_name: string): GLib.Variant | null;
        /**
         * Requests a hint about the valid range of values for the state of the
         * named action within `action_group`.
         *
         * If `NULL` is returned it either means that the action is not stateful
         * or that there is no hint about the valid range of values for the
         * state of the action.
         *
         * If a {@link GLib.Variant} array is returned then each item in the array is a
         * possible value for the state.  If a {@link GLib.Variant} pair (ie: two-tuple) is
         * returned then the tuple specifies the inclusive lower and upper bound
         * of valid values for the state.
         *
         * In any case, the information is merely a hint.  It may be possible to
         * have a state value outside of the hinted range and setting a value
         * within the range may fail.
         *
         * The return value (if non-`NULL`) should be freed with
         * {@link GLib.Variant.unref} when it is no longer required.
         * @param action_name the name of the action to query
         * @returns the state range hint
         */
        get_action_state_hint(action_name: string): GLib.Variant | null;
        /**
         * Queries the type of the state of the named action within
         * `action_group`.
         *
         * If the action is stateful then this function returns the
         * {@link GLib.VariantType} of the state.  All calls to
         * {@link Gio.ActionGroup.change_action_state} must give a {@link GLib.Variant} of this
         * type and {@link Gio.ActionGroup.get_action_state} will return a {@link GLib.Variant}
         * of the same type.
         *
         * If the action is not stateful then this function will return `NULL`.
         * In that case, {@link Gio.ActionGroup.get_action_state} will return `NULL`
         * and you must not call {@link Gio.ActionGroup.change_action_state}.
         *
         * The state type of a particular action will never change but it is
         * possible for an action to be removed and for a new action to be added
         * with the same name but a different state type.
         * @param action_name the name of the action to query
         * @returns the state type, if the action is stateful
         */
        get_action_state_type(action_name: string): GLib.VariantType | null;
        /**
         * Checks if the named action exists within `action_group`.
         * @param action_name the name of the action to check for
         * @returns whether the named action exists
         */
        has_action(action_name: string): boolean;
        /**
         * Lists the actions contained within `action_group`.
         *
         * The caller is responsible for freeing the list with {@link GLib.strfreev} when
         * it is no longer required.
         * @returns a `NULL`-terminated array   of the names of the actions in the group
         */
        list_actions(): string[];
        /**
         * Queries all aspects of the named action within an `action_group`.
         *
         * This function acquires the information available from
         * {@link Gio.ActionGroup.has_action}, {@link Gio.ActionGroup.get_action_enabled},
         * {@link Gio.ActionGroup.get_action_parameter_type},
         * {@link Gio.ActionGroup.get_action_state_type},
         * {@link Gio.ActionGroup.get_action_state_hint} and
         * {@link Gio.ActionGroup.get_action_state} with a single function call.
         *
         * This provides two main benefits.
         *
         * The first is the improvement in efficiency that comes with not having
         * to perform repeated lookups of the action in order to discover
         * different things about it.  The second is that implementing
         * {@link Gio.ActionGroup} can now be done by only overriding this one virtual
         * function.
         *
         * The interface provides a default implementation of this function that
         * calls the individual functions, as required, to fetch the
         * information.  The interface also provides default implementations of
         * those functions that call this function.  All implementations,
         * therefore, must override either this function or all of the others.
         *
         * If the action exists, `TRUE` is returned and any of the requested
         * fields (as indicated by having a non-`NULL` reference passed in) are
         * filled.  If the action doesn’t exist, `FALSE` is returned and the
         * fields may or may not have been modified.
         * @param action_name the name of an action in the group
         * @returns `TRUE` if the action exists, else `FALSE`
         */
        query_action(
            action_name: string,
        ): [
            boolean,
            boolean,
            GLib.VariantType | null,
            GLib.VariantType | null,
            GLib.Variant | null,
            GLib.Variant | null,
        ];
        /**
         * Emits the `Gio.ActionGroup::action-added` signal on `action_group`.
         *
         * This function should only be called by {@link Gio.ActionGroup} implementations.
         * @param action_name the name of an action in the group
         * @virtual
         */
        vfunc_action_added(action_name: string): void;
        /**
         * Emits the `Gio.ActionGroup::action-enabled-changed` signal on `action_group`.
         *
         * This function should only be called by {@link Gio.ActionGroup} implementations.
         * @param action_name the name of an action in the group
         * @param enabled whether the action is now enabled
         * @virtual
         */
        vfunc_action_enabled_changed(action_name: string, enabled: boolean): void;
        /**
         * Emits the `Gio.ActionGroup::action-removed` signal on `action_group`.
         *
         * This function should only be called by {@link Gio.ActionGroup} implementations.
         * @param action_name the name of an action in the group
         * @virtual
         */
        vfunc_action_removed(action_name: string): void;
        /**
         * Emits the `Gio.ActionGroup::action-state-changed` signal on `action_group`.
         *
         * This function should only be called by {@link Gio.ActionGroup} implementations.
         * @param action_name the name of an action in the group
         * @param state the new state of the named action
         * @virtual
         */
        vfunc_action_state_changed(action_name: string, state: GLib.Variant): void;
        /**
         * Activate the named action within `action_group`.
         *
         * If the action is expecting a parameter, then the correct type of
         * parameter must be given as `parameter`.  If the action is expecting no
         * parameters then `parameter` must be `NULL`.  See
         * {@link Gio.ActionGroup.get_action_parameter_type}.
         *
         * If the {@link Gio.ActionGroup} implementation supports asynchronous remote
         * activation over D-Bus, this call may return before the relevant
         * D-Bus traffic has been sent, or any replies have been received. In
         * order to block on such asynchronous activation calls,
         * {@link Gio.DBusConnection.flush} should be called prior to the code, which
         * depends on the result of the action activation. Without flushing
         * the D-Bus connection, there is no guarantee that the action would
         * have been activated.
         *
         * The following code which runs in a remote app instance, shows an
         * example of a ‘quit’ action being activated on the primary app
         * instance over D-Bus. Here {@link Gio.DBusConnection.flush} is called
         * before `exit()`. Without `g_dbus_connection_flush()`, the ‘quit’ action
         * may fail to be activated on the primary instance.
         *
         * ```c
         * // call ‘quit’ action on primary instance
         * g_action_group_activate_action (G_ACTION_GROUP (app), "quit", NULL);
         *
         * // make sure the action is activated now
         * g_dbus_connection_flush (…);
         *
         * g_debug ("Application has been terminated. Exiting.");
         *
         * exit (0);
         * ```
         * @param action_name the name of the action to activate
         * @param parameter parameters to the activation
         * @virtual
         */
        vfunc_activate_action(action_name: string, parameter?: GLib.Variant | null): void;
        /**
         * Request for the state of the named action within `action_group` to be
         * changed to `value`.
         *
         * The action must be stateful and `value` must be of the correct type.
         * See {@link Gio.ActionGroup.get_action_state_type}.
         *
         * This call merely requests a change.  The action may refuse to change
         * its state or may change its state to something other than `value`.
         * See {@link Gio.ActionGroup.get_action_state_hint}.
         *
         * If the `value` GVariant is floating, it is consumed.
         * @param action_name the name of the action to request the change on
         * @param value the new state
         * @virtual
         */
        vfunc_change_action_state(action_name: string, value: GLib.Variant): void;
        /**
         * Checks if the named action within `action_group` is currently enabled.
         *
         * An action must be enabled in order to be activated or in order to
         * have its state changed from outside callers.
         * @param action_name the name of the action to query
         * @virtual
         */
        vfunc_get_action_enabled(action_name: string): boolean;
        /**
         * Queries the type of the parameter that must be given when activating
         * the named action within `action_group`.
         *
         * When activating the action using {@link Gio.ActionGroup.activate_action},
         * the {@link GLib.Variant} given to that function must be of the type returned
         * by this function.
         *
         * In the case that this function returns `NULL`, you must not give any
         * {@link GLib.Variant}, but `NULL` instead.
         *
         * The parameter type of a particular action will never change but it is
         * possible for an action to be removed and for a new action to be added
         * with the same name but a different parameter type.
         * @param action_name the name of the action to query
         * @virtual
         */
        vfunc_get_action_parameter_type(action_name: string): GLib.VariantType | null;
        /**
         * Queries the current state of the named action within `action_group`.
         *
         * If the action is not stateful then `NULL` will be returned.  If the
         * action is stateful then the type of the return value is the type
         * given by {@link Gio.ActionGroup.get_action_state_type}.
         *
         * The return value (if non-`NULL`) should be freed with
         * {@link GLib.Variant.unref} when it is no longer required.
         * @param action_name the name of the action to query
         * @virtual
         */
        vfunc_get_action_state(action_name: string): GLib.Variant | null;
        /**
         * Requests a hint about the valid range of values for the state of the
         * named action within `action_group`.
         *
         * If `NULL` is returned it either means that the action is not stateful
         * or that there is no hint about the valid range of values for the
         * state of the action.
         *
         * If a {@link GLib.Variant} array is returned then each item in the array is a
         * possible value for the state.  If a {@link GLib.Variant} pair (ie: two-tuple) is
         * returned then the tuple specifies the inclusive lower and upper bound
         * of valid values for the state.
         *
         * In any case, the information is merely a hint.  It may be possible to
         * have a state value outside of the hinted range and setting a value
         * within the range may fail.
         *
         * The return value (if non-`NULL`) should be freed with
         * {@link GLib.Variant.unref} when it is no longer required.
         * @param action_name the name of the action to query
         * @virtual
         */
        vfunc_get_action_state_hint(action_name: string): GLib.Variant | null;
        /**
         * Queries the type of the state of the named action within
         * `action_group`.
         *
         * If the action is stateful then this function returns the
         * {@link GLib.VariantType} of the state.  All calls to
         * {@link Gio.ActionGroup.change_action_state} must give a {@link GLib.Variant} of this
         * type and {@link Gio.ActionGroup.get_action_state} will return a {@link GLib.Variant}
         * of the same type.
         *
         * If the action is not stateful then this function will return `NULL`.
         * In that case, {@link Gio.ActionGroup.get_action_state} will return `NULL`
         * and you must not call {@link Gio.ActionGroup.change_action_state}.
         *
         * The state type of a particular action will never change but it is
         * possible for an action to be removed and for a new action to be added
         * with the same name but a different state type.
         * @param action_name the name of the action to query
         * @virtual
         */
        vfunc_get_action_state_type(action_name: string): GLib.VariantType | null;
        /**
         * Checks if the named action exists within `action_group`.
         * @param action_name the name of the action to check for
         * @virtual
         */
        vfunc_has_action(action_name: string): boolean;
        /**
         * Lists the actions contained within `action_group`.
         *
         * The caller is responsible for freeing the list with {@link GLib.strfreev} when
         * it is no longer required.
         * @virtual
         */
        vfunc_list_actions(): string[];
        /**
         * Queries all aspects of the named action within an `action_group`.
         *
         * This function acquires the information available from
         * {@link Gio.ActionGroup.has_action}, {@link Gio.ActionGroup.get_action_enabled},
         * {@link Gio.ActionGroup.get_action_parameter_type},
         * {@link Gio.ActionGroup.get_action_state_type},
         * {@link Gio.ActionGroup.get_action_state_hint} and
         * {@link Gio.ActionGroup.get_action_state} with a single function call.
         *
         * This provides two main benefits.
         *
         * The first is the improvement in efficiency that comes with not having
         * to perform repeated lookups of the action in order to discover
         * different things about it.  The second is that implementing
         * {@link Gio.ActionGroup} can now be done by only overriding this one virtual
         * function.
         *
         * The interface provides a default implementation of this function that
         * calls the individual functions, as required, to fetch the
         * information.  The interface also provides default implementations of
         * those functions that call this function.  All implementations,
         * therefore, must override either this function or all of the others.
         *
         * If the action exists, `TRUE` is returned and any of the requested
         * fields (as indicated by having a non-`NULL` reference passed in) are
         * filled.  If the action doesn’t exist, `FALSE` is returned and the
         * fields may or may not have been modified.
         * @param action_name the name of an action in the group
         * @virtual
         */
        vfunc_query_action(
            action_name: string,
        ): [
            boolean,
            boolean,
            GLib.VariantType | null,
            GLib.VariantType | null,
            GLib.Variant | null,
            GLib.Variant | null,
        ];
        /**
         * Adds an action to the `action_map`.
         *
         * If the action map already contains an action with the same name
         * as `action` then the old action is dropped from the action map.
         *
         * The action map takes its own reference on `action`.
         * @param action a {@link Gio.Action}
         */
        add_action(action: Gio.Action): void;
        /**
         * A convenience function for creating multiple simple actions.
         * See Gio.ActionEntryObj for the structure of the action entry.
         * @param entries Array of action entries to add
         */
        add_action_entries(entries: Gio.ActionEntryObj[]): void;
        /**
         * Looks up the action with the name `action_name` in `action_map`.
         *
         * If no such action exists, returns `NULL`.
         * @param action_name the name of an action
         * @returns a {@link Gio.Action}
         */
        lookup_action(action_name: string): Gio.Action | null;
        /**
         * Removes the named action from the action map.
         *
         * If no action of this name is in the map then nothing happens.
         * @param action_name the name of the action
         */
        remove_action(action_name: string): void;
        /**
         * Remove actions from a {@link Gio.ActionMap}. This is meant as the reverse of
         * {@link Gio.ActionMap.add_action_entries}.
         *
         *
         * ```c
         * static const GActionEntry entries[] = {
         *     { "quit",         activate_quit              },
         *     { "print-string", activate_print_string, "s" }
         * };
         *
         * void
         * add_actions (GActionMap *map)
         * {
         *   g_action_map_add_action_entries (map, entries, G_N_ELEMENTS (entries), NULL);
         * }
         *
         * void
         * remove_actions (GActionMap *map)
         * {
         *   g_action_map_remove_action_entries (map, entries, G_N_ELEMENTS (entries));
         * }
         * ```
         * @param entries a pointer to   the first item in an array of {@link Gio.ActionEntry} structs
         */
        remove_action_entries(entries: Gio.ActionEntry[]): void;
        /**
         * Adds an action to the `action_map`.
         *
         * If the action map already contains an action with the same name
         * as `action` then the old action is dropped from the action map.
         *
         * The action map takes its own reference on `action`.
         * @param action a {@link Gio.Action}
         * @virtual
         */
        vfunc_add_action(action: Gio.Action): void;
        /**
         * Looks up the action with the name `action_name` in `action_map`.
         *
         * If no such action exists, returns `NULL`.
         * @param action_name the name of an action
         * @virtual
         */
        vfunc_lookup_action(action_name: string): Gio.Action | null;
        /**
         * Removes the named action from the action map.
         *
         * If no action of this name is in the map then nothing happens.
         * @param action_name the name of the action
         * @virtual
         */
        vfunc_remove_action(action_name: string): void;
        /**
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target`.
         *
         * Whenever the `source_property` is changed the `target_property` is
         * updated using the same value. For instance:
         *
         *
         * ```c
         *   g_object_bind_property (action, "active", widget, "sensitive", 0);
         * ```
         *
         *
         * Will result in the "sensitive" property of the widget {@link GObject.Object} instance to be
         * updated with the same value of the "active" property of the action {@link GObject.Object}
         * instance.
         *
         * If `flags` contains {@link GObject.BindingFlags.BIDIRECTIONAL} then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well.
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. To remove the binding without affecting the
         * `source` and the `target` you can just call `g_object_unref()` on the returned
         * {@link GObject.Binding} instance.
         *
         * Removing the binding by calling `g_object_unref()` on it must only be done if
         * the binding, `source` and `target` are only used from a single thread and it
         * is clear that both `source` and `target` outlive the binding. Especially it
         * is not safe to rely on this if the binding, `source` or `target` can be
         * finalized from different threads. Keep another reference to the binding and
         * use `g_binding_unbind()` instead to be on the safe side.
         *
         * A {@link GObject.Object} can have multiple bindings.
         * @param source_property the property on `source` to bind
         * @param target the target {@link GObject.Object}
         * @param target_property the property on `target` to bind
         * @param flags flags to pass to {@link GObject.Binding}
         * @returns the {@link GObject.Binding} instance representing the     binding between the two {@link GObject.Object} instances. The binding is released     whenever the {@link GObject.Binding} reference count reaches zero.
         */
        bind_property(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
        ): GObject.Binding;
        /**
         * Complete version of `g_object_bind_property()`.
         *
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target`, allowing you to set the transformation functions to be used by
         * the binding.
         *
         * If `flags` contains {@link GObject.BindingFlags.BIDIRECTIONAL} then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well. The `transform_from` function is only used in case
         * of bidirectional bindings, otherwise it will be ignored
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. This will release the reference that is
         * being held on the {@link GObject.Binding} instance; if you want to hold on to the
         * {@link GObject.Binding} instance, you will need to hold a reference to it.
         *
         * To remove the binding, call `g_binding_unbind()`.
         *
         * A {@link GObject.Object} can have multiple bindings.
         *
         * The same `user_data` parameter will be used for both `transform_to`
         * and `transform_from` transformation functions; the `notify` function will
         * be called once, when the binding is removed. If you need different data
         * for each transformation function, please use
         * `g_object_bind_property_with_closures()` instead.
         * @param source_property the property on `source` to bind
         * @param target the target {@link GObject.Object}
         * @param target_property the property on `target` to bind
         * @param flags flags to pass to {@link GObject.Binding}
         * @param transform_to the transformation function     from the `source` to the `target`, or `null` to use the default
         * @param transform_from the transformation function     from the `target` to the `source`, or `null` to use the default
         * @param notify a function to call when disposing the binding, to free     resources used by the transformation functions, or `null` if not required
         * @returns the {@link GObject.Binding} instance representing the     binding between the two {@link GObject.Object} instances. The binding is released     whenever the {@link GObject.Binding} reference count reaches zero.
         */
        bind_property_full(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
            transform_to?: GObject.BindingTransformFunc | null,
            transform_from?: GObject.BindingTransformFunc | null,
            notify?: GLib.DestroyNotify | null,
        ): GObject.Binding;
        /**
         * @param args
         */
        // Conflicted with GObject.Object.bind_property_full
        bind_property_full(...args: never[]): any;
        /**
         * This function is intended for {@link GObject.Object} implementations to re-enforce
         * a [floating][floating-ref] object reference. Doing this is seldom
         * required: all `GInitiallyUnowneds` are created with a floating reference
         * which usually just needs to be sunken by calling `g_object_ref_sink()`.
         */
        force_floating(): void;
        /**
         * Increases the freeze count on `object`. If the freeze count is
         * non-zero, the emission of "notify" signals on `object` is
         * stopped. The signals are queued until the freeze count is decreased
         * to zero. Duplicate notifications are squashed so that at most one
         * {@link GObject.Object.SignalSignatures.notify | GObject.Object::notify} signal is emitted for each property modified while the
         * object is frozen.
         *
         * This is necessary for accessors that modify multiple properties to prevent
         * premature notification while the object is still being modified.
         */
        freeze_notify(): void;
        /**
         * Gets a named field from the objects table of associations (see `g_object_set_data()`).
         * @param key name of the key for that association
         * @returns the data if found,          or `null` if no such data exists.
         */
        get_data(key: string): any | null;
        /**
         * Gets a property of an object.
         *
         * The value can be:
         * - an empty GObject.Value initialized by G_VALUE_INIT, which will be automatically initialized with the expected type of the property (since GLib 2.60)
         * - a GObject.Value initialized with the expected type of the property
         * - a GObject.Value initialized with a type to which the expected type of the property can be transformed
         *
         * In general, a copy is made of the property contents and the caller is responsible for freeing the memory by calling GObject.Value.unset.
         *
         * Note that GObject.Object.get_property is really intended for language bindings, GObject.Object.get is much more convenient for C programming.
         * @param property_name The name of the property to get
         * @param value Return location for the property value. Can be an empty GObject.Value initialized by G_VALUE_INIT (auto-initialized with expected type since GLib 2.60), a GObject.Value initialized with the expected property type, or a GObject.Value initialized with a transformable type
         */
        get_property(property_name: string, value: GObject.Value | any): any;
        /**
         * This function gets back user data pointers stored via
         * `g_object_set_qdata()`.
         * @param quark A {@link GLib.Quark}, naming the user data pointer
         * @returns The user data pointer set, or `null`
         */
        get_qdata(quark: GLib.Quark): any | null;
        /**
         * Gets `n_properties` properties for an `object`.
         * Obtained properties will be set to `values`. All properties must be valid.
         * Warnings will be emitted and undefined behaviour may result if invalid
         * properties are passed in.
         * @param names the names of each property to get
         * @param values the values of each property to get
         */
        getv(names: string[], values: (GObject.Value | any)[]): void;
        /**
         * Checks whether `object` has a [floating][floating-ref] reference.
         * @returns `true` if `object` has a floating reference
         */
        is_floating(): boolean;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use `g_object_notify_by_pspec()`
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * `g_object_freeze_notify()`. In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when `g_object_thaw_notify()` is
         * called.
         * @param property_name the name of a property installed on the class of `object`.
         */
        notify(property_name: string): void;
        /**
         * Emits a "notify" signal for the property specified by `pspec` on `object`.
         *
         * This function omits the property name lookup, hence it is faster than
         * `g_object_notify()`.
         *
         * One way to avoid using `g_object_notify()` from within the
         * class that registered the properties, and using `g_object_notify_by_pspec()`
         * instead, is to store the GParamSpec used with
         * `g_object_class_install_property()` inside a static array, e.g.:
         *
         *
         * ```c
         *   typedef enum
         *   {
         *     PROP_FOO = 1,
         *     PROP_LAST
         *   } MyObjectProperty;
         *
         *   static GParamSpec *properties[PROP_LAST];
         *
         *   static void
         *   my_object_class_init (MyObjectClass *klass)
         *   {
         *     properties[PROP_FOO] = g_param_spec_int ("foo", NULL, NULL,
         *                                              0, 100,
         *                                              50,
         *                                              G_PARAM_READWRITE | G_PARAM_STATIC_STRINGS);
         *     g_object_class_install_property (gobject_class,
         *                                      PROP_FOO,
         *                                      properties[PROP_FOO]);
         *   }
         * ```
         *
         *
         * and then notify a change on the "foo" property with:
         *
         *
         * ```c
         *   g_object_notify_by_pspec (self, properties[PROP_FOO]);
         * ```
         *
         * @param pspec the {@link GObject.ParamSpec} of a property installed on the class of `object`.
         */
        notify_by_pspec(pspec: GObject.ParamSpec): void;
        /**
         * Increases the reference count of `object`.
         *
         * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
         * of `object` will be propagated to the return type (using the GCC `typeof()`
         * extension), so any casting the caller needs to do on the return type must be
         * explicit.
         * @returns the same `object`
         */
        ref(): GObject.Object;
        /**
         * Increase the reference count of `object`, and possibly remove the
         * [floating][floating-ref] reference, if `object` has a floating reference.
         *
         * In other words, if the object is floating, then this call "assumes
         * ownership" of the floating reference, converting it to a normal
         * reference by clearing the floating flag while leaving the reference
         * count unchanged.  If the object is not floating, then this call
         * adds a new normal reference increasing the reference count by one.
         *
         * Since GLib 2.56, the type of `object` will be propagated to the return type
         * under the same conditions as for `g_object_ref()`.
         * @returns `object`
         */
        ref_sink(): GObject.Object;
        /**
         * Releases all references to other objects. This can be used to break
         * reference cycles.
         *
         * This function should only be called from object system implementations.
         */
        run_dispose(): void;
        /**
         * Each object carries around a table of associations from
         * strings to pointers.  This function lets you set an association.
         *
         * If the object already had an association with that name,
         * the old association will be destroyed.
         *
         * Internally, the `key` is converted to a {@link GLib.Quark} using `g_quark_from_string()`.
         * This means a copy of `key` is kept permanently (even after `object` has been
         * finalized) — so it is recommended to only use a small, bounded set of values
         * for `key` in your program, to avoid the {@link GLib.Quark} storage growing unbounded.
         * @param key name of the key
         * @param data data to associate with that key
         */
        set_data(key: string, data?: any | null): void;
        /**
         * Sets a property on an object.
         * @param property_name The name of the property to set
         * @param value The value to set the property to
         */
        set_property(property_name: string, value: GObject.Value | any): void;
        /**
         * Remove a specified datum from the object's data associations,
         * without invoking the association's destroy handler.
         * @param key name of the key
         * @returns the data if found, or `null`          if no such data exists.
         */
        steal_data(key: string): any | null;
        /**
         * This function gets back user data pointers stored via
         * `g_object_set_qdata()` and removes the `data` from object
         * without invoking its `destroy()` function (if any was
         * set).
         * Usually, calling this function is only required to update
         * user data pointers with a destroy notifier, for example:
         *
         * ```c
         * void
         * object_add_to_user_list (GObject     *object,
         *                          const gchar *new_string)
         * {
         *   // the quark, naming the object data
         *   GQuark quark_string_list = g_quark_from_static_string ("my-string-list");
         *   // retrieve the old string list
         *   GList *list = g_object_steal_qdata (object, quark_string_list);
         *
         *   // prepend new string
         *   list = g_list_prepend (list, g_strdup (new_string));
         *   // this changed 'list', so we need to set it again
         *   g_object_set_qdata_full (object, quark_string_list, list, free_string_list);
         * }
         * static void
         * free_string_list (gpointer data)
         * {
         *   GList *node, *list = data;
         *
         *   for (node = list; node; node = node->next)
         *     g_free (node->data);
         *   g_list_free (list);
         * }
         * ```
         *
         * Using `g_object_get_qdata()` in the above example, instead of
         * `g_object_steal_qdata()` would have left the destroy function set,
         * and thus the partial string list would have been freed upon
         * `g_object_set_qdata_full()`.
         * @param quark A {@link GLib.Quark}, naming the user data pointer
         * @returns The user data pointer set, or `null`
         */
        steal_qdata(quark: GLib.Quark): any | null;
        /**
         * Reverts the effect of a previous call to
         * `g_object_freeze_notify()`. The freeze count is decreased on `object`
         * and when it reaches zero, queued "notify" signals are emitted.
         *
         * Duplicate notifications for each property are squashed so that at most one
         * {@link GObject.Object.SignalSignatures.notify | GObject.Object::notify} signal is emitted for each property, in the reverse order
         * in which they have been queued.
         *
         * It is an error to call this function when the freeze count is zero.
         */
        thaw_notify(): void;
        /**
         * Decreases the reference count of `object`. When its reference count
         * drops to 0, the object is finalized (i.e. its memory is freed).
         *
         * If the pointer to the {@link GObject.Object} may be reused in future (for example, if it is
         * an instance variable of another object), it is recommended to clear the
         * pointer to `null` rather than retain a dangling pointer to a potentially
         * invalid {@link GObject.Object} instance. Use `g_clear_object()` for this.
         */
        unref(): void;
        /**
         * This function essentially limits the life time of the `closure` to
         * the life time of the object. That is, when the object is finalized,
         * the `closure` is invalidated by calling `g_closure_invalidate()` on
         * it, in order to prevent invocations of the closure with a finalized
         * (nonexisting) object. Also, `g_object_ref()` and `g_object_unref()` are
         * added as marshal guards to the `closure`, to ensure that an extra
         * reference count is held on `object` during invocation of the
         * `closure`.  Usually, this function will be called on closures that
         * use this `object` as closure data.
         * @param closure {@link GObject.Closure} to watch
         */
        watch_closure(closure: GObject.Closure): void;
        /**
         * the `constructed` function is called by `g_object_new()` as the
         *  final step of the object creation process.  At the point of the call, all
         *  construction properties have been set on the object.  The purpose of this
         *  call is to allow for object initialisation steps that can only be performed
         *  after construction properties have been set.  `constructed` implementors
         *  should chain up to the `constructed` call of their parent class to allow it
         *  to complete its initialisation.
         * @virtual
         */
        vfunc_constructed(): void;
        /**
         * emits property change notification for a bunch
         *  of properties. Overriding `dispatch_properties_changed` should be rarely
         *  needed.
         * @param n_pspecs
         * @param pspecs
         * @virtual
         */
        vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
        /**
         * the `dispose` function is supposed to drop all references to other
         *  objects, but keep the instance otherwise intact, so that client method
         *  invocations still work. It may be run multiple times (due to reference
         *  loops). Before returning, `dispose` should chain up to the `dispose` method
         *  of the parent class.
         * @virtual
         */
        vfunc_dispose(): void;
        /**
         * instance finalization function, should finish the finalization of
         *  the instance begun in `dispose` and chain up to the `finalize` method of the
         *  parent class.
         * @virtual
         */
        vfunc_finalize(): void;
        /**
         * the generic getter for all properties of this type. Should be
         *  overridden for every type with properties.
         * @param property_id
         * @param value
         * @param pspec
         * @virtual
         */
        vfunc_get_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use `g_object_notify_by_pspec()`
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * `g_object_freeze_notify()`. In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when `g_object_thaw_notify()` is
         * called.
         * @param pspec
         * @virtual
         */
        vfunc_notify(pspec: GObject.ParamSpec): void;
        /**
         * the generic setter for all properties of this type. Should be
         *  overridden for every type with properties. If implementations of
         *  `set_property` don't emit property change notification explicitly, this will
         *  be done implicitly by the type system. However, if the notify signal is
         *  emitted explicitly, the type system will not emit it a second time.
         * @param property_id
         * @param value
         * @param pspec
         * @virtual
         */
        vfunc_set_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Disconnects a handler from an instance so it will not be called during any future or currently ongoing emissions of the signal it has been connected to.
         * @param id Handler ID of the handler to be disconnected
         */
        disconnect(id: number): void;
        /**
         * Sets multiple properties of an object at once. The properties argument should be a dictionary mapping property names to values.
         * @param properties Object containing the properties to set
         */
        set(properties: { [key: string]: any }): void;
        /**
         * Blocks a handler of an instance so it will not be called during any signal emissions
         * @param id Handler ID of the handler to be blocked
         */
        block_signal_handler(id: number): void;
        /**
         * Unblocks a handler so it will be called again during any signal emissions
         * @param id Handler ID of the handler to be unblocked
         */
        unblock_signal_handler(id: number): void;
        /**
         * Stops a signal's emission by the given signal name. This will prevent the default handler and any subsequent signal handlers from being invoked.
         * @param detailedName Name of the signal to stop emission of
         */
        stop_emission_by_name(detailedName: string): void;
    }

    namespace StatusIcon {
        // Signal signatures
        interface SignalSignatures extends Gtk.Bin.SignalSignatures {
            'notify::extra-widget': (pspec: GObject.ParamSpec) => void;
            'notify::icon-name': (pspec: GObject.ParamSpec) => void;
            'notify::icon-size': (pspec: GObject.ParamSpec) => void;
            'notify::info': (pspec: GObject.ParamSpec) => void;
            'notify::pixel-size': (pspec: GObject.ParamSpec) => void;
            'notify::border-width': (pspec: GObject.ParamSpec) => void;
            'notify::child': (pspec: GObject.ParamSpec) => void;
            'notify::resize-mode': (pspec: GObject.ParamSpec) => void;
            'notify::app-paintable': (pspec: GObject.ParamSpec) => void;
            'notify::can-default': (pspec: GObject.ParamSpec) => void;
            'notify::can-focus': (pspec: GObject.ParamSpec) => void;
            'notify::composite-child': (pspec: GObject.ParamSpec) => void;
            'notify::double-buffered': (pspec: GObject.ParamSpec) => void;
            'notify::events': (pspec: GObject.ParamSpec) => void;
            'notify::expand': (pspec: GObject.ParamSpec) => void;
            'notify::focus-on-click': (pspec: GObject.ParamSpec) => void;
            'notify::halign': (pspec: GObject.ParamSpec) => void;
            'notify::has-default': (pspec: GObject.ParamSpec) => void;
            'notify::has-focus': (pspec: GObject.ParamSpec) => void;
            'notify::has-tooltip': (pspec: GObject.ParamSpec) => void;
            'notify::height-request': (pspec: GObject.ParamSpec) => void;
            'notify::hexpand': (pspec: GObject.ParamSpec) => void;
            'notify::hexpand-set': (pspec: GObject.ParamSpec) => void;
            'notify::is-focus': (pspec: GObject.ParamSpec) => void;
            'notify::margin': (pspec: GObject.ParamSpec) => void;
            'notify::margin-bottom': (pspec: GObject.ParamSpec) => void;
            'notify::margin-end': (pspec: GObject.ParamSpec) => void;
            'notify::margin-left': (pspec: GObject.ParamSpec) => void;
            'notify::margin-right': (pspec: GObject.ParamSpec) => void;
            'notify::margin-start': (pspec: GObject.ParamSpec) => void;
            'notify::margin-top': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::no-show-all': (pspec: GObject.ParamSpec) => void;
            'notify::opacity': (pspec: GObject.ParamSpec) => void;
            'notify::parent': (pspec: GObject.ParamSpec) => void;
            'notify::receives-default': (pspec: GObject.ParamSpec) => void;
            'notify::scale-factor': (pspec: GObject.ParamSpec) => void;
            'notify::sensitive': (pspec: GObject.ParamSpec) => void;
            'notify::style': (pspec: GObject.ParamSpec) => void;
            'notify::tooltip-markup': (pspec: GObject.ParamSpec) => void;
            'notify::tooltip-text': (pspec: GObject.ParamSpec) => void;
            'notify::valign': (pspec: GObject.ParamSpec) => void;
            'notify::vexpand': (pspec: GObject.ParamSpec) => void;
            'notify::vexpand-set': (pspec: GObject.ParamSpec) => void;
            'notify::visible': (pspec: GObject.ParamSpec) => void;
            'notify::width-request': (pspec: GObject.ParamSpec) => void;
            'notify::window': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps
            extends Gtk.Bin.ConstructorProps, Atk.ImplementorIface.ConstructorProps, Gtk.Buildable.ConstructorProps {
            extra_widget: Gtk.Widget;
            extraWidget: Gtk.Widget;
            icon_name: string;
            iconName: string;
            icon_size: Gtk.IconSize;
            iconSize: Gtk.IconSize;
            info: string;
            pixel_size: number;
            pixelSize: number;
        }
    }

    /**
     * Base class for status icons used in the Phosh's top-bar or in
     * {@link QuickSetting}s. It's very common to have the same status icon
     * class used for both places.
     *
     * If the widget will be used in a {@link QuickSetting} it is
     * recommended (but not required) that derived classes implement a
     * `enabled` property.
     * @gir-type Class
     */
    class StatusIcon extends Gtk.Bin implements Atk.ImplementorIface, Gtk.Buildable {
        static $gtype: GObject.GType<StatusIcon>;

        // Properties

        /**
         * An extra widget to display. This is used for extra information when
         * used in PhoshTopPanel. When used in {@link QuickSetting} this
         * is not needed.
         */
        get extra_widget(): Gtk.Widget;
        set extra_widget(val: Gtk.Widget);
        /**
         * An extra widget to display. This is used for extra information when
         * used in PhoshTopPanel. When used in {@link QuickSetting} this
         * is not needed.
         */
        get extraWidget(): Gtk.Widget;
        set extraWidget(val: Gtk.Widget);
        /**
         * The name of the icon to display in the widget
         */
        get icon_name(): string;
        set icon_name(val: string);
        /**
         * The name of the icon to display in the widget
         */
        get iconName(): string;
        set iconName(val: string);
        /**
         * The size of the icon to display in the widget
         */
        get icon_size(): Gtk.IconSize;
        set icon_size(val: Gtk.IconSize);
        /**
         * The size of the icon to display in the widget
         */
        get iconSize(): Gtk.IconSize;
        set iconSize(val: Gtk.IconSize);
        /**
         * Textual information to display. Think of it as the {@link StatusIcon}'s
         * label.
         */
        get info(): string;
        set info(val: string);
        /**
         * The size of the icon to display in the widget
         */
        get pixel_size(): number;
        set pixel_size(val: number);
        /**
         * The size of the icon to display in the widget
         */
        get pixelSize(): number;
        set pixelSize(val: number);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: StatusIcon.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<StatusIcon.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): StatusIcon;

        // Signals

        /** @signal */
        connect<K extends keyof StatusIcon.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, StatusIcon.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof StatusIcon.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, StatusIcon.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof StatusIcon.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<StatusIcon.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods

        /**
         * a callback to be invoked once on idle
         * @virtual
         */
        vfunc_idle_init(): void;

        // Methods

        /**
         * Get the extra widget or `null` if there's no extra widget
         * @returns The extra widget
         */
        get_extra_widget(): Gtk.Widget | null;
        get_icon_name(): string;
        /**
         * Return the size of status-icon.
         * @returns The size of status-icon.
         */
        get_icon_size(): Gtk.IconSize;
        get_info(): string;
        get_pixel_size(): number;
        /**
         * @param widget
         */
        set_extra_widget(widget: Gtk.Widget): void;
        /**
         * @param icon_name
         */
        set_icon_name(icon_name: string): void;
        /**
         * Set the size of status-icon.
         * @param size The size of icon
         */
        set_icon_size(size: Gtk.IconSize | null): void;
        /**
         * @param info
         */
        set_info(info: string): void;
        /**
         * @param size
         */
        set_pixel_size(size: number): void;
        /**
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target`.
         *
         * Whenever the `source_property` is changed the `target_property` is
         * updated using the same value. For instance:
         *
         *
         * ```c
         *   g_object_bind_property (action, "active", widget, "sensitive", 0);
         * ```
         *
         *
         * Will result in the "sensitive" property of the widget {@link GObject.Object} instance to be
         * updated with the same value of the "active" property of the action {@link GObject.Object}
         * instance.
         *
         * If `flags` contains {@link GObject.BindingFlags.BIDIRECTIONAL} then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well.
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. To remove the binding without affecting the
         * `source` and the `target` you can just call `g_object_unref()` on the returned
         * {@link GObject.Binding} instance.
         *
         * Removing the binding by calling `g_object_unref()` on it must only be done if
         * the binding, `source` and `target` are only used from a single thread and it
         * is clear that both `source` and `target` outlive the binding. Especially it
         * is not safe to rely on this if the binding, `source` or `target` can be
         * finalized from different threads. Keep another reference to the binding and
         * use `g_binding_unbind()` instead to be on the safe side.
         *
         * A {@link GObject.Object} can have multiple bindings.
         * @param source_property the property on `source` to bind
         * @param target the target {@link GObject.Object}
         * @param target_property the property on `target` to bind
         * @param flags flags to pass to {@link GObject.Binding}
         * @returns the {@link GObject.Binding} instance representing the     binding between the two {@link GObject.Object} instances. The binding is released     whenever the {@link GObject.Binding} reference count reaches zero.
         */
        bind_property(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
        ): GObject.Binding;
        /**
         * Complete version of `g_object_bind_property()`.
         *
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target`, allowing you to set the transformation functions to be used by
         * the binding.
         *
         * If `flags` contains {@link GObject.BindingFlags.BIDIRECTIONAL} then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well. The `transform_from` function is only used in case
         * of bidirectional bindings, otherwise it will be ignored
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. This will release the reference that is
         * being held on the {@link GObject.Binding} instance; if you want to hold on to the
         * {@link GObject.Binding} instance, you will need to hold a reference to it.
         *
         * To remove the binding, call `g_binding_unbind()`.
         *
         * A {@link GObject.Object} can have multiple bindings.
         *
         * The same `user_data` parameter will be used for both `transform_to`
         * and `transform_from` transformation functions; the `notify` function will
         * be called once, when the binding is removed. If you need different data
         * for each transformation function, please use
         * `g_object_bind_property_with_closures()` instead.
         * @param source_property the property on `source` to bind
         * @param target the target {@link GObject.Object}
         * @param target_property the property on `target` to bind
         * @param flags flags to pass to {@link GObject.Binding}
         * @param transform_to the transformation function     from the `source` to the `target`, or `null` to use the default
         * @param transform_from the transformation function     from the `target` to the `source`, or `null` to use the default
         * @param notify a function to call when disposing the binding, to free     resources used by the transformation functions, or `null` if not required
         * @returns the {@link GObject.Binding} instance representing the     binding between the two {@link GObject.Object} instances. The binding is released     whenever the {@link GObject.Binding} reference count reaches zero.
         */
        bind_property_full(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
            transform_to?: GObject.BindingTransformFunc | null,
            transform_from?: GObject.BindingTransformFunc | null,
            notify?: GLib.DestroyNotify | null,
        ): GObject.Binding;
        /**
         * @param args
         */
        // Conflicted with GObject.Object.bind_property_full
        bind_property_full(...args: never[]): any;
        /**
         * This function is intended for {@link GObject.Object} implementations to re-enforce
         * a [floating][floating-ref] object reference. Doing this is seldom
         * required: all `GInitiallyUnowneds` are created with a floating reference
         * which usually just needs to be sunken by calling `g_object_ref_sink()`.
         */
        force_floating(): void;
        /**
         * Increases the freeze count on `object`. If the freeze count is
         * non-zero, the emission of "notify" signals on `object` is
         * stopped. The signals are queued until the freeze count is decreased
         * to zero. Duplicate notifications are squashed so that at most one
         * {@link GObject.Object.SignalSignatures.notify | GObject.Object::notify} signal is emitted for each property modified while the
         * object is frozen.
         *
         * This is necessary for accessors that modify multiple properties to prevent
         * premature notification while the object is still being modified.
         */
        freeze_notify(): void;
        /**
         * Gets a named field from the objects table of associations (see `g_object_set_data()`).
         * @param key name of the key for that association
         * @returns the data if found,          or `null` if no such data exists.
         */
        get_data(key: string): any | null;
        /**
         * Gets a property of an object.
         *
         * The value can be:
         * - an empty GObject.Value initialized by G_VALUE_INIT, which will be automatically initialized with the expected type of the property (since GLib 2.60)
         * - a GObject.Value initialized with the expected type of the property
         * - a GObject.Value initialized with a type to which the expected type of the property can be transformed
         *
         * In general, a copy is made of the property contents and the caller is responsible for freeing the memory by calling GObject.Value.unset.
         *
         * Note that GObject.Object.get_property is really intended for language bindings, GObject.Object.get is much more convenient for C programming.
         * @param property_name The name of the property to get
         * @param value Return location for the property value. Can be an empty GObject.Value initialized by G_VALUE_INIT (auto-initialized with expected type since GLib 2.60), a GObject.Value initialized with the expected property type, or a GObject.Value initialized with a transformable type
         */
        get_property(property_name: string, value: GObject.Value | any): any;
        /**
         * This function gets back user data pointers stored via
         * `g_object_set_qdata()`.
         * @param quark A {@link GLib.Quark}, naming the user data pointer
         * @returns The user data pointer set, or `null`
         */
        get_qdata(quark: GLib.Quark): any | null;
        /**
         * Gets `n_properties` properties for an `object`.
         * Obtained properties will be set to `values`. All properties must be valid.
         * Warnings will be emitted and undefined behaviour may result if invalid
         * properties are passed in.
         * @param names the names of each property to get
         * @param values the values of each property to get
         */
        getv(names: string[], values: (GObject.Value | any)[]): void;
        /**
         * Checks whether `object` has a [floating][floating-ref] reference.
         * @returns `true` if `object` has a floating reference
         */
        is_floating(): boolean;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use `g_object_notify_by_pspec()`
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * `g_object_freeze_notify()`. In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when `g_object_thaw_notify()` is
         * called.
         * @param property_name the name of a property installed on the class of `object`.
         */
        notify(property_name: string): void;
        /**
         * Emits a "notify" signal for the property specified by `pspec` on `object`.
         *
         * This function omits the property name lookup, hence it is faster than
         * `g_object_notify()`.
         *
         * One way to avoid using `g_object_notify()` from within the
         * class that registered the properties, and using `g_object_notify_by_pspec()`
         * instead, is to store the GParamSpec used with
         * `g_object_class_install_property()` inside a static array, e.g.:
         *
         *
         * ```c
         *   typedef enum
         *   {
         *     PROP_FOO = 1,
         *     PROP_LAST
         *   } MyObjectProperty;
         *
         *   static GParamSpec *properties[PROP_LAST];
         *
         *   static void
         *   my_object_class_init (MyObjectClass *klass)
         *   {
         *     properties[PROP_FOO] = g_param_spec_int ("foo", NULL, NULL,
         *                                              0, 100,
         *                                              50,
         *                                              G_PARAM_READWRITE | G_PARAM_STATIC_STRINGS);
         *     g_object_class_install_property (gobject_class,
         *                                      PROP_FOO,
         *                                      properties[PROP_FOO]);
         *   }
         * ```
         *
         *
         * and then notify a change on the "foo" property with:
         *
         *
         * ```c
         *   g_object_notify_by_pspec (self, properties[PROP_FOO]);
         * ```
         *
         * @param pspec the {@link GObject.ParamSpec} of a property installed on the class of `object`.
         */
        notify_by_pspec(pspec: GObject.ParamSpec): void;
        /**
         * Increases the reference count of `object`.
         *
         * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
         * of `object` will be propagated to the return type (using the GCC `typeof()`
         * extension), so any casting the caller needs to do on the return type must be
         * explicit.
         * @returns the same `object`
         */
        ref(): GObject.Object;
        /**
         * Increase the reference count of `object`, and possibly remove the
         * [floating][floating-ref] reference, if `object` has a floating reference.
         *
         * In other words, if the object is floating, then this call "assumes
         * ownership" of the floating reference, converting it to a normal
         * reference by clearing the floating flag while leaving the reference
         * count unchanged.  If the object is not floating, then this call
         * adds a new normal reference increasing the reference count by one.
         *
         * Since GLib 2.56, the type of `object` will be propagated to the return type
         * under the same conditions as for `g_object_ref()`.
         * @returns `object`
         */
        ref_sink(): GObject.Object;
        /**
         * Releases all references to other objects. This can be used to break
         * reference cycles.
         *
         * This function should only be called from object system implementations.
         */
        run_dispose(): void;
        /**
         * Each object carries around a table of associations from
         * strings to pointers.  This function lets you set an association.
         *
         * If the object already had an association with that name,
         * the old association will be destroyed.
         *
         * Internally, the `key` is converted to a {@link GLib.Quark} using `g_quark_from_string()`.
         * This means a copy of `key` is kept permanently (even after `object` has been
         * finalized) — so it is recommended to only use a small, bounded set of values
         * for `key` in your program, to avoid the {@link GLib.Quark} storage growing unbounded.
         * @param key name of the key
         * @param data data to associate with that key
         */
        set_data(key: string, data?: any | null): void;
        /**
         * Sets a property on an object.
         * @param property_name The name of the property to set
         * @param value The value to set the property to
         */
        set_property(property_name: string, value: GObject.Value | any): void;
        /**
         * Remove a specified datum from the object's data associations,
         * without invoking the association's destroy handler.
         * @param key name of the key
         * @returns the data if found, or `null`          if no such data exists.
         */
        steal_data(key: string): any | null;
        /**
         * This function gets back user data pointers stored via
         * `g_object_set_qdata()` and removes the `data` from object
         * without invoking its `destroy()` function (if any was
         * set).
         * Usually, calling this function is only required to update
         * user data pointers with a destroy notifier, for example:
         *
         * ```c
         * void
         * object_add_to_user_list (GObject     *object,
         *                          const gchar *new_string)
         * {
         *   // the quark, naming the object data
         *   GQuark quark_string_list = g_quark_from_static_string ("my-string-list");
         *   // retrieve the old string list
         *   GList *list = g_object_steal_qdata (object, quark_string_list);
         *
         *   // prepend new string
         *   list = g_list_prepend (list, g_strdup (new_string));
         *   // this changed 'list', so we need to set it again
         *   g_object_set_qdata_full (object, quark_string_list, list, free_string_list);
         * }
         * static void
         * free_string_list (gpointer data)
         * {
         *   GList *node, *list = data;
         *
         *   for (node = list; node; node = node->next)
         *     g_free (node->data);
         *   g_list_free (list);
         * }
         * ```
         *
         * Using `g_object_get_qdata()` in the above example, instead of
         * `g_object_steal_qdata()` would have left the destroy function set,
         * and thus the partial string list would have been freed upon
         * `g_object_set_qdata_full()`.
         * @param quark A {@link GLib.Quark}, naming the user data pointer
         * @returns The user data pointer set, or `null`
         */
        steal_qdata(quark: GLib.Quark): any | null;
        /**
         * Reverts the effect of a previous call to
         * `g_object_freeze_notify()`. The freeze count is decreased on `object`
         * and when it reaches zero, queued "notify" signals are emitted.
         *
         * Duplicate notifications for each property are squashed so that at most one
         * {@link GObject.Object.SignalSignatures.notify | GObject.Object::notify} signal is emitted for each property, in the reverse order
         * in which they have been queued.
         *
         * It is an error to call this function when the freeze count is zero.
         */
        thaw_notify(): void;
        /**
         * Decreases the reference count of `object`. When its reference count
         * drops to 0, the object is finalized (i.e. its memory is freed).
         *
         * If the pointer to the {@link GObject.Object} may be reused in future (for example, if it is
         * an instance variable of another object), it is recommended to clear the
         * pointer to `null` rather than retain a dangling pointer to a potentially
         * invalid {@link GObject.Object} instance. Use `g_clear_object()` for this.
         */
        unref(): void;
        /**
         * This function essentially limits the life time of the `closure` to
         * the life time of the object. That is, when the object is finalized,
         * the `closure` is invalidated by calling `g_closure_invalidate()` on
         * it, in order to prevent invocations of the closure with a finalized
         * (nonexisting) object. Also, `g_object_ref()` and `g_object_unref()` are
         * added as marshal guards to the `closure`, to ensure that an extra
         * reference count is held on `object` during invocation of the
         * `closure`.  Usually, this function will be called on closures that
         * use this `object` as closure data.
         * @param closure {@link GObject.Closure} to watch
         */
        watch_closure(closure: GObject.Closure): void;
        /**
         * the `constructed` function is called by `g_object_new()` as the
         *  final step of the object creation process.  At the point of the call, all
         *  construction properties have been set on the object.  The purpose of this
         *  call is to allow for object initialisation steps that can only be performed
         *  after construction properties have been set.  `constructed` implementors
         *  should chain up to the `constructed` call of their parent class to allow it
         *  to complete its initialisation.
         * @virtual
         */
        vfunc_constructed(): void;
        /**
         * emits property change notification for a bunch
         *  of properties. Overriding `dispatch_properties_changed` should be rarely
         *  needed.
         * @param n_pspecs
         * @param pspecs
         * @virtual
         */
        vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
        /**
         * the `dispose` function is supposed to drop all references to other
         *  objects, but keep the instance otherwise intact, so that client method
         *  invocations still work. It may be run multiple times (due to reference
         *  loops). Before returning, `dispose` should chain up to the `dispose` method
         *  of the parent class.
         * @virtual
         */
        vfunc_dispose(): void;
        /**
         * instance finalization function, should finish the finalization of
         *  the instance begun in `dispose` and chain up to the `finalize` method of the
         *  parent class.
         * @virtual
         */
        vfunc_finalize(): void;
        /**
         * the generic getter for all properties of this type. Should be
         *  overridden for every type with properties.
         * @param property_id
         * @param value
         * @param pspec
         * @virtual
         */
        vfunc_get_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use `g_object_notify_by_pspec()`
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * `g_object_freeze_notify()`. In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when `g_object_thaw_notify()` is
         * called.
         * @param pspec
         * @virtual
         */
        vfunc_notify(pspec: GObject.ParamSpec): void;
        /**
         * the generic setter for all properties of this type. Should be
         *  overridden for every type with properties. If implementations of
         *  `set_property` don't emit property change notification explicitly, this will
         *  be done implicitly by the type system. However, if the notify signal is
         *  emitted explicitly, the type system will not emit it a second time.
         * @param property_id
         * @param value
         * @param pspec
         * @virtual
         */
        vfunc_set_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Disconnects a handler from an instance so it will not be called during any future or currently ongoing emissions of the signal it has been connected to.
         * @param id Handler ID of the handler to be disconnected
         */
        disconnect(id: number): void;
        /**
         * Sets multiple properties of an object at once. The properties argument should be a dictionary mapping property names to values.
         * @param properties Object containing the properties to set
         */
        set(properties: { [key: string]: any }): void;
        /**
         * Blocks a handler of an instance so it will not be called during any signal emissions
         * @param id Handler ID of the handler to be blocked
         */
        block_signal_handler(id: number): void;
        /**
         * Unblocks a handler so it will be called again during any signal emissions
         * @param id Handler ID of the handler to be unblocked
         */
        unblock_signal_handler(id: number): void;
        /**
         * Stops a signal's emission by the given signal name. This will prevent the default handler and any subsequent signal handlers from being invoked.
         * @param detailedName Name of the signal to stop emission of
         */
        stop_emission_by_name(detailedName: string): void;
    }

    namespace StatusPage {
        // Signal signatures
        interface SignalSignatures extends Gtk.Bin.SignalSignatures {
            /**
             * The status page should be closed
             * @signal
             * @run-last
             */
            done: () => void;
            'notify::content': (pspec: GObject.ParamSpec) => void;
            'notify::footer': (pspec: GObject.ParamSpec) => void;
            'notify::header': (pspec: GObject.ParamSpec) => void;
            'notify::title': (pspec: GObject.ParamSpec) => void;
            'notify::border-width': (pspec: GObject.ParamSpec) => void;
            'notify::child': (pspec: GObject.ParamSpec) => void;
            'notify::resize-mode': (pspec: GObject.ParamSpec) => void;
            'notify::app-paintable': (pspec: GObject.ParamSpec) => void;
            'notify::can-default': (pspec: GObject.ParamSpec) => void;
            'notify::can-focus': (pspec: GObject.ParamSpec) => void;
            'notify::composite-child': (pspec: GObject.ParamSpec) => void;
            'notify::double-buffered': (pspec: GObject.ParamSpec) => void;
            'notify::events': (pspec: GObject.ParamSpec) => void;
            'notify::expand': (pspec: GObject.ParamSpec) => void;
            'notify::focus-on-click': (pspec: GObject.ParamSpec) => void;
            'notify::halign': (pspec: GObject.ParamSpec) => void;
            'notify::has-default': (pspec: GObject.ParamSpec) => void;
            'notify::has-focus': (pspec: GObject.ParamSpec) => void;
            'notify::has-tooltip': (pspec: GObject.ParamSpec) => void;
            'notify::height-request': (pspec: GObject.ParamSpec) => void;
            'notify::hexpand': (pspec: GObject.ParamSpec) => void;
            'notify::hexpand-set': (pspec: GObject.ParamSpec) => void;
            'notify::is-focus': (pspec: GObject.ParamSpec) => void;
            'notify::margin': (pspec: GObject.ParamSpec) => void;
            'notify::margin-bottom': (pspec: GObject.ParamSpec) => void;
            'notify::margin-end': (pspec: GObject.ParamSpec) => void;
            'notify::margin-left': (pspec: GObject.ParamSpec) => void;
            'notify::margin-right': (pspec: GObject.ParamSpec) => void;
            'notify::margin-start': (pspec: GObject.ParamSpec) => void;
            'notify::margin-top': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::no-show-all': (pspec: GObject.ParamSpec) => void;
            'notify::opacity': (pspec: GObject.ParamSpec) => void;
            'notify::parent': (pspec: GObject.ParamSpec) => void;
            'notify::receives-default': (pspec: GObject.ParamSpec) => void;
            'notify::scale-factor': (pspec: GObject.ParamSpec) => void;
            'notify::sensitive': (pspec: GObject.ParamSpec) => void;
            'notify::style': (pspec: GObject.ParamSpec) => void;
            'notify::tooltip-markup': (pspec: GObject.ParamSpec) => void;
            'notify::tooltip-text': (pspec: GObject.ParamSpec) => void;
            'notify::valign': (pspec: GObject.ParamSpec) => void;
            'notify::vexpand': (pspec: GObject.ParamSpec) => void;
            'notify::vexpand-set': (pspec: GObject.ParamSpec) => void;
            'notify::visible': (pspec: GObject.ParamSpec) => void;
            'notify::width-request': (pspec: GObject.ParamSpec) => void;
            'notify::window': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps
            extends Gtk.Bin.ConstructorProps, Atk.ImplementorIface.ConstructorProps, Gtk.Buildable.ConstructorProps {
            content: Gtk.Widget;
            footer: Gtk.Widget;
            header: Gtk.Widget;
            title: string;
        }
    }

    /**
     * Additional status information associated with a {@link QuickSetting}.
     *
     * This is displayed when the quick setting needs to show status.
     * @gir-type Class
     */
    class StatusPage extends Gtk.Bin implements Atk.ImplementorIface, Gtk.Buildable {
        static $gtype: GObject.GType<StatusPage>;

        // Properties

        /**
         * The content of status page.
         */
        get content(): Gtk.Widget;
        set content(val: Gtk.Widget);
        /**
         * Widget displayed at the very bottom - usually a button.
         */
        get footer(): Gtk.Widget;
        set footer(val: Gtk.Widget);
        /**
         * An extra widget to add to end of the status page's header
         */
        get header(): Gtk.Widget;
        set header(val: Gtk.Widget);
        /**
         * The status page title
         */
        get title(): string;
        set title(val: string);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: StatusPage.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<StatusPage.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): StatusPage;

        // Signals

        /** @signal */
        connect<K extends keyof StatusPage.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, StatusPage.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof StatusPage.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, StatusPage.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof StatusPage.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<StatusPage.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Get the content widget of the status page
         * @returns The status page content
         */
        get_content(): Gtk.Widget;
        /**
         * Get the footer of the status page
         * @returns The status page footer
         */
        get_footer(): Gtk.Widget;
        /**
         * Get the header widget of the status page
         * @returns The status page header
         */
        get_header(): Gtk.Widget;
        get_title(): string;
        /**
         * Set the content widget of the status page. See {@link StatusPage.content}. Use `NULL` to
         * remove existing content.
         * @param content
         */
        set_content(content: Gtk.Widget): void;
        /**
         * Set the footer widget shown at the bottom of a status page
         * @param footer
         */
        set_footer(footer: Gtk.Widget): void;
        /**
         * Set the header widget of the status page. See
         * {@link StatusPage.header}.
         * @param header
         */
        set_header(header: Gtk.Widget): void;
        /**
         * @param title
         */
        set_title(title: string): void;
        /**
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target`.
         *
         * Whenever the `source_property` is changed the `target_property` is
         * updated using the same value. For instance:
         *
         *
         * ```c
         *   g_object_bind_property (action, "active", widget, "sensitive", 0);
         * ```
         *
         *
         * Will result in the "sensitive" property of the widget {@link GObject.Object} instance to be
         * updated with the same value of the "active" property of the action {@link GObject.Object}
         * instance.
         *
         * If `flags` contains {@link GObject.BindingFlags.BIDIRECTIONAL} then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well.
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. To remove the binding without affecting the
         * `source` and the `target` you can just call `g_object_unref()` on the returned
         * {@link GObject.Binding} instance.
         *
         * Removing the binding by calling `g_object_unref()` on it must only be done if
         * the binding, `source` and `target` are only used from a single thread and it
         * is clear that both `source` and `target` outlive the binding. Especially it
         * is not safe to rely on this if the binding, `source` or `target` can be
         * finalized from different threads. Keep another reference to the binding and
         * use `g_binding_unbind()` instead to be on the safe side.
         *
         * A {@link GObject.Object} can have multiple bindings.
         * @param source_property the property on `source` to bind
         * @param target the target {@link GObject.Object}
         * @param target_property the property on `target` to bind
         * @param flags flags to pass to {@link GObject.Binding}
         * @returns the {@link GObject.Binding} instance representing the     binding between the two {@link GObject.Object} instances. The binding is released     whenever the {@link GObject.Binding} reference count reaches zero.
         */
        bind_property(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
        ): GObject.Binding;
        /**
         * Complete version of `g_object_bind_property()`.
         *
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target`, allowing you to set the transformation functions to be used by
         * the binding.
         *
         * If `flags` contains {@link GObject.BindingFlags.BIDIRECTIONAL} then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well. The `transform_from` function is only used in case
         * of bidirectional bindings, otherwise it will be ignored
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. This will release the reference that is
         * being held on the {@link GObject.Binding} instance; if you want to hold on to the
         * {@link GObject.Binding} instance, you will need to hold a reference to it.
         *
         * To remove the binding, call `g_binding_unbind()`.
         *
         * A {@link GObject.Object} can have multiple bindings.
         *
         * The same `user_data` parameter will be used for both `transform_to`
         * and `transform_from` transformation functions; the `notify` function will
         * be called once, when the binding is removed. If you need different data
         * for each transformation function, please use
         * `g_object_bind_property_with_closures()` instead.
         * @param source_property the property on `source` to bind
         * @param target the target {@link GObject.Object}
         * @param target_property the property on `target` to bind
         * @param flags flags to pass to {@link GObject.Binding}
         * @param transform_to the transformation function     from the `source` to the `target`, or `null` to use the default
         * @param transform_from the transformation function     from the `target` to the `source`, or `null` to use the default
         * @param notify a function to call when disposing the binding, to free     resources used by the transformation functions, or `null` if not required
         * @returns the {@link GObject.Binding} instance representing the     binding between the two {@link GObject.Object} instances. The binding is released     whenever the {@link GObject.Binding} reference count reaches zero.
         */
        bind_property_full(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
            transform_to?: GObject.BindingTransformFunc | null,
            transform_from?: GObject.BindingTransformFunc | null,
            notify?: GLib.DestroyNotify | null,
        ): GObject.Binding;
        /**
         * @param args
         */
        // Conflicted with GObject.Object.bind_property_full
        bind_property_full(...args: never[]): any;
        /**
         * This function is intended for {@link GObject.Object} implementations to re-enforce
         * a [floating][floating-ref] object reference. Doing this is seldom
         * required: all `GInitiallyUnowneds` are created with a floating reference
         * which usually just needs to be sunken by calling `g_object_ref_sink()`.
         */
        force_floating(): void;
        /**
         * Increases the freeze count on `object`. If the freeze count is
         * non-zero, the emission of "notify" signals on `object` is
         * stopped. The signals are queued until the freeze count is decreased
         * to zero. Duplicate notifications are squashed so that at most one
         * {@link GObject.Object.SignalSignatures.notify | GObject.Object::notify} signal is emitted for each property modified while the
         * object is frozen.
         *
         * This is necessary for accessors that modify multiple properties to prevent
         * premature notification while the object is still being modified.
         */
        freeze_notify(): void;
        /**
         * Gets a named field from the objects table of associations (see `g_object_set_data()`).
         * @param key name of the key for that association
         * @returns the data if found,          or `null` if no such data exists.
         */
        get_data(key: string): any | null;
        /**
         * Gets a property of an object.
         *
         * The value can be:
         * - an empty GObject.Value initialized by G_VALUE_INIT, which will be automatically initialized with the expected type of the property (since GLib 2.60)
         * - a GObject.Value initialized with the expected type of the property
         * - a GObject.Value initialized with a type to which the expected type of the property can be transformed
         *
         * In general, a copy is made of the property contents and the caller is responsible for freeing the memory by calling GObject.Value.unset.
         *
         * Note that GObject.Object.get_property is really intended for language bindings, GObject.Object.get is much more convenient for C programming.
         * @param property_name The name of the property to get
         * @param value Return location for the property value. Can be an empty GObject.Value initialized by G_VALUE_INIT (auto-initialized with expected type since GLib 2.60), a GObject.Value initialized with the expected property type, or a GObject.Value initialized with a transformable type
         */
        get_property(property_name: string, value: GObject.Value | any): any;
        /**
         * This function gets back user data pointers stored via
         * `g_object_set_qdata()`.
         * @param quark A {@link GLib.Quark}, naming the user data pointer
         * @returns The user data pointer set, or `null`
         */
        get_qdata(quark: GLib.Quark): any | null;
        /**
         * Gets `n_properties` properties for an `object`.
         * Obtained properties will be set to `values`. All properties must be valid.
         * Warnings will be emitted and undefined behaviour may result if invalid
         * properties are passed in.
         * @param names the names of each property to get
         * @param values the values of each property to get
         */
        getv(names: string[], values: (GObject.Value | any)[]): void;
        /**
         * Checks whether `object` has a [floating][floating-ref] reference.
         * @returns `true` if `object` has a floating reference
         */
        is_floating(): boolean;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use `g_object_notify_by_pspec()`
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * `g_object_freeze_notify()`. In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when `g_object_thaw_notify()` is
         * called.
         * @param property_name the name of a property installed on the class of `object`.
         */
        notify(property_name: string): void;
        /**
         * Emits a "notify" signal for the property specified by `pspec` on `object`.
         *
         * This function omits the property name lookup, hence it is faster than
         * `g_object_notify()`.
         *
         * One way to avoid using `g_object_notify()` from within the
         * class that registered the properties, and using `g_object_notify_by_pspec()`
         * instead, is to store the GParamSpec used with
         * `g_object_class_install_property()` inside a static array, e.g.:
         *
         *
         * ```c
         *   typedef enum
         *   {
         *     PROP_FOO = 1,
         *     PROP_LAST
         *   } MyObjectProperty;
         *
         *   static GParamSpec *properties[PROP_LAST];
         *
         *   static void
         *   my_object_class_init (MyObjectClass *klass)
         *   {
         *     properties[PROP_FOO] = g_param_spec_int ("foo", NULL, NULL,
         *                                              0, 100,
         *                                              50,
         *                                              G_PARAM_READWRITE | G_PARAM_STATIC_STRINGS);
         *     g_object_class_install_property (gobject_class,
         *                                      PROP_FOO,
         *                                      properties[PROP_FOO]);
         *   }
         * ```
         *
         *
         * and then notify a change on the "foo" property with:
         *
         *
         * ```c
         *   g_object_notify_by_pspec (self, properties[PROP_FOO]);
         * ```
         *
         * @param pspec the {@link GObject.ParamSpec} of a property installed on the class of `object`.
         */
        notify_by_pspec(pspec: GObject.ParamSpec): void;
        /**
         * Increases the reference count of `object`.
         *
         * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
         * of `object` will be propagated to the return type (using the GCC `typeof()`
         * extension), so any casting the caller needs to do on the return type must be
         * explicit.
         * @returns the same `object`
         */
        ref(): GObject.Object;
        /**
         * Increase the reference count of `object`, and possibly remove the
         * [floating][floating-ref] reference, if `object` has a floating reference.
         *
         * In other words, if the object is floating, then this call "assumes
         * ownership" of the floating reference, converting it to a normal
         * reference by clearing the floating flag while leaving the reference
         * count unchanged.  If the object is not floating, then this call
         * adds a new normal reference increasing the reference count by one.
         *
         * Since GLib 2.56, the type of `object` will be propagated to the return type
         * under the same conditions as for `g_object_ref()`.
         * @returns `object`
         */
        ref_sink(): GObject.Object;
        /**
         * Releases all references to other objects. This can be used to break
         * reference cycles.
         *
         * This function should only be called from object system implementations.
         */
        run_dispose(): void;
        /**
         * Each object carries around a table of associations from
         * strings to pointers.  This function lets you set an association.
         *
         * If the object already had an association with that name,
         * the old association will be destroyed.
         *
         * Internally, the `key` is converted to a {@link GLib.Quark} using `g_quark_from_string()`.
         * This means a copy of `key` is kept permanently (even after `object` has been
         * finalized) — so it is recommended to only use a small, bounded set of values
         * for `key` in your program, to avoid the {@link GLib.Quark} storage growing unbounded.
         * @param key name of the key
         * @param data data to associate with that key
         */
        set_data(key: string, data?: any | null): void;
        /**
         * Sets a property on an object.
         * @param property_name The name of the property to set
         * @param value The value to set the property to
         */
        set_property(property_name: string, value: GObject.Value | any): void;
        /**
         * Remove a specified datum from the object's data associations,
         * without invoking the association's destroy handler.
         * @param key name of the key
         * @returns the data if found, or `null`          if no such data exists.
         */
        steal_data(key: string): any | null;
        /**
         * This function gets back user data pointers stored via
         * `g_object_set_qdata()` and removes the `data` from object
         * without invoking its `destroy()` function (if any was
         * set).
         * Usually, calling this function is only required to update
         * user data pointers with a destroy notifier, for example:
         *
         * ```c
         * void
         * object_add_to_user_list (GObject     *object,
         *                          const gchar *new_string)
         * {
         *   // the quark, naming the object data
         *   GQuark quark_string_list = g_quark_from_static_string ("my-string-list");
         *   // retrieve the old string list
         *   GList *list = g_object_steal_qdata (object, quark_string_list);
         *
         *   // prepend new string
         *   list = g_list_prepend (list, g_strdup (new_string));
         *   // this changed 'list', so we need to set it again
         *   g_object_set_qdata_full (object, quark_string_list, list, free_string_list);
         * }
         * static void
         * free_string_list (gpointer data)
         * {
         *   GList *node, *list = data;
         *
         *   for (node = list; node; node = node->next)
         *     g_free (node->data);
         *   g_list_free (list);
         * }
         * ```
         *
         * Using `g_object_get_qdata()` in the above example, instead of
         * `g_object_steal_qdata()` would have left the destroy function set,
         * and thus the partial string list would have been freed upon
         * `g_object_set_qdata_full()`.
         * @param quark A {@link GLib.Quark}, naming the user data pointer
         * @returns The user data pointer set, or `null`
         */
        steal_qdata(quark: GLib.Quark): any | null;
        /**
         * Reverts the effect of a previous call to
         * `g_object_freeze_notify()`. The freeze count is decreased on `object`
         * and when it reaches zero, queued "notify" signals are emitted.
         *
         * Duplicate notifications for each property are squashed so that at most one
         * {@link GObject.Object.SignalSignatures.notify | GObject.Object::notify} signal is emitted for each property, in the reverse order
         * in which they have been queued.
         *
         * It is an error to call this function when the freeze count is zero.
         */
        thaw_notify(): void;
        /**
         * Decreases the reference count of `object`. When its reference count
         * drops to 0, the object is finalized (i.e. its memory is freed).
         *
         * If the pointer to the {@link GObject.Object} may be reused in future (for example, if it is
         * an instance variable of another object), it is recommended to clear the
         * pointer to `null` rather than retain a dangling pointer to a potentially
         * invalid {@link GObject.Object} instance. Use `g_clear_object()` for this.
         */
        unref(): void;
        /**
         * This function essentially limits the life time of the `closure` to
         * the life time of the object. That is, when the object is finalized,
         * the `closure` is invalidated by calling `g_closure_invalidate()` on
         * it, in order to prevent invocations of the closure with a finalized
         * (nonexisting) object. Also, `g_object_ref()` and `g_object_unref()` are
         * added as marshal guards to the `closure`, to ensure that an extra
         * reference count is held on `object` during invocation of the
         * `closure`.  Usually, this function will be called on closures that
         * use this `object` as closure data.
         * @param closure {@link GObject.Closure} to watch
         */
        watch_closure(closure: GObject.Closure): void;
        /**
         * the `constructed` function is called by `g_object_new()` as the
         *  final step of the object creation process.  At the point of the call, all
         *  construction properties have been set on the object.  The purpose of this
         *  call is to allow for object initialisation steps that can only be performed
         *  after construction properties have been set.  `constructed` implementors
         *  should chain up to the `constructed` call of their parent class to allow it
         *  to complete its initialisation.
         * @virtual
         */
        vfunc_constructed(): void;
        /**
         * emits property change notification for a bunch
         *  of properties. Overriding `dispatch_properties_changed` should be rarely
         *  needed.
         * @param n_pspecs
         * @param pspecs
         * @virtual
         */
        vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
        /**
         * the `dispose` function is supposed to drop all references to other
         *  objects, but keep the instance otherwise intact, so that client method
         *  invocations still work. It may be run multiple times (due to reference
         *  loops). Before returning, `dispose` should chain up to the `dispose` method
         *  of the parent class.
         * @virtual
         */
        vfunc_dispose(): void;
        /**
         * instance finalization function, should finish the finalization of
         *  the instance begun in `dispose` and chain up to the `finalize` method of the
         *  parent class.
         * @virtual
         */
        vfunc_finalize(): void;
        /**
         * the generic getter for all properties of this type. Should be
         *  overridden for every type with properties.
         * @param property_id
         * @param value
         * @param pspec
         * @virtual
         */
        vfunc_get_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use `g_object_notify_by_pspec()`
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * `g_object_freeze_notify()`. In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when `g_object_thaw_notify()` is
         * called.
         * @param pspec
         * @virtual
         */
        vfunc_notify(pspec: GObject.ParamSpec): void;
        /**
         * the generic setter for all properties of this type. Should be
         *  overridden for every type with properties. If implementations of
         *  `set_property` don't emit property change notification explicitly, this will
         *  be done implicitly by the type system. However, if the notify signal is
         *  emitted explicitly, the type system will not emit it a second time.
         * @param property_id
         * @param value
         * @param pspec
         * @virtual
         */
        vfunc_set_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Disconnects a handler from an instance so it will not be called during any future or currently ongoing emissions of the signal it has been connected to.
         * @param id Handler ID of the handler to be disconnected
         */
        disconnect(id: number): void;
        /**
         * Sets multiple properties of an object at once. The properties argument should be a dictionary mapping property names to values.
         * @param properties Object containing the properties to set
         */
        set(properties: { [key: string]: any }): void;
        /**
         * Blocks a handler of an instance so it will not be called during any signal emissions
         * @param id Handler ID of the handler to be blocked
         */
        block_signal_handler(id: number): void;
        /**
         * Unblocks a handler so it will be called again during any signal emissions
         * @param id Handler ID of the handler to be unblocked
         */
        unblock_signal_handler(id: number): void;
        /**
         * Stops a signal's emission by the given signal name. This will prevent the default handler and any subsequent signal handlers from being invoked.
         * @param detailedName Name of the signal to stop emission of
         */
        stop_emission_by_name(detailedName: string): void;
    }

    namespace WallClock {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::date-time': (pspec: GObject.ParamSpec) => void;
            'notify::time': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            date_time: string;
            dateTime: string;
            time: string;
        }
    }

    /**
     * Wall clock used for fetching date and time
     * @gir-type Class
     */
    class WallClock extends GObject.Object {
        static $gtype: GObject.GType<WallClock>;

        // Properties

        /**
         * @read-only
         */
        get date_time(): string;
        /**
         * @read-only
         */
        get dateTime(): string;
        /**
         * @read-only
         */
        get time(): string;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: WallClock.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<WallClock.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): WallClock;

        // Signals

        /** @signal */
        connect<K extends keyof WallClock.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, WallClock.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof WallClock.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, WallClock.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof WallClock.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<WallClock.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        /**
         * Get the wall clock singleton
         */
        static get_default(): WallClock;

        // Virtual methods

        /**
         * Gets the current clock string, if time_only is true this will be just the
         * current time, otherwise the date + time.
         * @param time_only whether to return full clock string or just the time
         * @virtual
         */
        vfunc_get_clock(time_only: boolean): string;
        /**
         * @virtual
         */
        vfunc_get_time_t(): number;

        // Methods

        /**
         * Gets the current clock string, if time_only is true this will be just the
         * current time, otherwise the date + time.
         * @param time_only whether to return full clock string or just the time
         * @returns the clock time string
         */
        get_clock(time_only: boolean): string;
        /**
         * Get the local date as string
         * We honor LC_MESSAGES so we e.g. don't get a translated date when
         * the user has LC_MESSAGES=en_US.UTF-8 but LC_TIME to their local
         * time zone.
         * @returns The local date as string
         */
        local_date(): string;
        /**
         * Set the wall clock singleton. This sets the singleton returned by
         * `phosh_wall_clock_get_default()`.
         */
        set_default(): void;
        /**
         * @param datetime
         * @param clock_format
         * @param show_full_date
         */
        string_for_datetime(
            datetime: GLib.DateTime,
            clock_format: GDesktopEnums.ClockFormat | null,
            show_full_date: boolean,
        ): string;
    }

    /**
     * @gir-type Alias
     */
    type DBusScreenshotIface = typeof DBusScreenshot;
    /**
     * @gir-type Alias
     */
    type DBusScreenshotProxyClass = typeof DBusScreenshotProxy;
    /**
     * @gir-type Struct
     */
    abstract class DBusScreenshotProxyPrivate {
        static $gtype: GObject.GType<DBusScreenshotProxyPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type DBusScreenshotSkeletonClass = typeof DBusScreenshotSkeleton;
    /**
     * @gir-type Struct
     */
    abstract class DBusScreenshotSkeletonPrivate {
        static $gtype: GObject.GType<DBusScreenshotSkeletonPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type LayerSurfaceClass = typeof LayerSurface;
    /**
     * @gir-type Alias
     */
    type LockscreenClass = typeof Lockscreen;
    /**
     * @gir-type Alias
     */
    type LockscreenManagerClass = typeof LockscreenManager;
    /**
     * @gir-type Alias
     */
    type QuickSettingClass = typeof QuickSetting;
    /**
     * @gir-type Alias
     */
    type ScreenshotManagerClass = typeof ScreenshotManager;
    /**
     * @gir-type Alias
     */
    type ShellClass = typeof Shell;
    /**
     * @gir-type Alias
     */
    type StatusIconClass = typeof StatusIcon;
    /**
     * @gir-type Alias
     */
    type StatusPageClass = typeof StatusPage;
    /**
     * @gir-type Alias
     */
    type WallClockClass = typeof WallClock;
    namespace DBusScreenshot {
        /**
         * Interface for implementing DBusScreenshot.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface {
            // Virtual methods

            /**
             * Handler for the {@link Phosh.DBusScreenshot.SignalSignatures.handle_flash_area | Phosh.DBusScreenshot::handle-flash-area} signal.
             * @param invocation
             * @param arg_x
             * @param arg_y
             * @param arg_width
             * @param arg_height
             * @virtual
             */
            vfunc_handle_flash_area(
                invocation: Gio.DBusMethodInvocation,
                arg_x: number,
                arg_y: number,
                arg_width: number,
                arg_height: number,
            ): boolean;
            /**
             * Handler for the {@link Phosh.DBusScreenshot.SignalSignatures.handle_pick_color | Phosh.DBusScreenshot::handle-pick-color} signal.
             * @param invocation
             * @virtual
             */
            vfunc_handle_pick_color(invocation: Gio.DBusMethodInvocation): boolean;
            /**
             * Handler for the {@link Phosh.DBusScreenshot.SignalSignatures.handle_screenshot | Phosh.DBusScreenshot::handle-screenshot} signal.
             * @param invocation
             * @param arg_include_cursor
             * @param arg_flash
             * @param arg_filename
             * @virtual
             */
            vfunc_handle_screenshot(
                invocation: Gio.DBusMethodInvocation,
                arg_include_cursor: boolean,
                arg_flash: boolean,
                arg_filename: string,
            ): boolean;
            /**
             * Handler for the {@link Phosh.DBusScreenshot.SignalSignatures.handle_screenshot_area | Phosh.DBusScreenshot::handle-screenshot-area} signal.
             * @param invocation
             * @param arg_x
             * @param arg_y
             * @param arg_width
             * @param arg_height
             * @param arg_flash
             * @param arg_filename
             * @virtual
             */
            vfunc_handle_screenshot_area(
                invocation: Gio.DBusMethodInvocation,
                arg_x: number,
                arg_y: number,
                arg_width: number,
                arg_height: number,
                arg_flash: boolean,
                arg_filename: string,
            ): boolean;
            /**
             * Handler for the {@link Phosh.DBusScreenshot.SignalSignatures.handle_screenshot_window | Phosh.DBusScreenshot::handle-screenshot-window} signal.
             * @param invocation
             * @param arg_include_frame
             * @param arg_include_cursor
             * @param arg_flash
             * @param arg_filename
             * @virtual
             */
            vfunc_handle_screenshot_window(
                invocation: Gio.DBusMethodInvocation,
                arg_include_frame: boolean,
                arg_include_cursor: boolean,
                arg_flash: boolean,
                arg_filename: string,
            ): boolean;
            /**
             * Handler for the {@link Phosh.DBusScreenshot.SignalSignatures.handle_select_area | Phosh.DBusScreenshot::handle-select-area} signal.
             * @param invocation
             * @virtual
             */
            vfunc_handle_select_area(invocation: Gio.DBusMethodInvocation): boolean;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    export interface DBusScreenshotNamespace {
        $gtype: GObject.GType<DBusScreenshot>;
        prototype: DBusScreenshot;

        /**
         * Gets a machine-readable description of the <link linkend="gdbus-interface-org-gnome-Shell-Screenshot.top_of_page">org.gnome.Shell.Screenshot</link> D-Bus interface.
         */
        interface_info(): Gio.DBusInterfaceInfo;
        /**
         * Overrides all {@link GObject.Object} properties in the {@link Phosh.DBusScreenshot} interface for a concrete class.
         * The properties are overridden in the order they are defined.
         * @param klass The class structure for a {@link GObject.Object} derived class.
         * @param property_id_begin The property id to assign to the first overridden property.
         */
        override_properties(klass: typeof GObject.Object, property_id_begin: number): number;
    }
    /**
     * Abstract interface type for the D-Bus interface <link linkend="gdbus-interface-org-gnome-Shell-Screenshot.top_of_page">org.gnome.Shell.Screenshot</link>.
     * @gir-type Interface
     */
    interface DBusScreenshot extends GObject.Object, DBusScreenshot.Interface {
        // Methods

        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-gnome-Shell-Screenshot.FlashArea">FlashArea()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `phosh_dbus_screenshot_call_flash_area_finish()` to get the result of the operation.
         *
         * See `phosh_dbus_screenshot_call_flash_area_sync()` for the synchronous, blocking version of this method.
         * @param arg_x Argument to pass with the method invocation.
         * @param arg_y Argument to pass with the method invocation.
         * @param arg_width Argument to pass with the method invocation.
         * @param arg_height Argument to pass with the method invocation.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         */
        call_flash_area(
            arg_x: number,
            arg_y: number,
            arg_width: number,
            arg_height: number,
            cancellable?: Gio.Cancellable | null,
        ): globalThis.Promise<boolean>;
        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-gnome-Shell-Screenshot.FlashArea">FlashArea()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `phosh_dbus_screenshot_call_flash_area_finish()` to get the result of the operation.
         *
         * See `phosh_dbus_screenshot_call_flash_area_sync()` for the synchronous, blocking version of this method.
         * @param arg_x Argument to pass with the method invocation.
         * @param arg_y Argument to pass with the method invocation.
         * @param arg_width Argument to pass with the method invocation.
         * @param arg_height Argument to pass with the method invocation.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied or `null`.
         */
        call_flash_area(
            arg_x: number,
            arg_y: number,
            arg_width: number,
            arg_height: number,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-gnome-Shell-Screenshot.FlashArea">FlashArea()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `phosh_dbus_screenshot_call_flash_area_finish()` to get the result of the operation.
         *
         * See `phosh_dbus_screenshot_call_flash_area_sync()` for the synchronous, blocking version of this method.
         * @param arg_x Argument to pass with the method invocation.
         * @param arg_y Argument to pass with the method invocation.
         * @param arg_width Argument to pass with the method invocation.
         * @param arg_height Argument to pass with the method invocation.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied or `null`.
         */
        call_flash_area(
            arg_x: number,
            arg_y: number,
            arg_width: number,
            arg_height: number,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<boolean> | void;
        /**
         * Finishes an operation started with `phosh_dbus_screenshot_call_flash_area()`.
         * @param res The {@link Gio.AsyncResult} obtained from the {@link Gio.AsyncReadyCallback} passed to `phosh_dbus_screenshot_call_flash_area()`.
         * @returns `true` if the call succeeded, `false` if `error` is set.
         */
        call_flash_area_finish(res: Gio.AsyncResult): boolean;
        /**
         * Synchronously invokes the <link linkend="gdbus-method-org-gnome-Shell-Screenshot.FlashArea">FlashArea()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
         *
         * See `phosh_dbus_screenshot_call_flash_area()` for the asynchronous version of this method.
         * @param arg_x Argument to pass with the method invocation.
         * @param arg_y Argument to pass with the method invocation.
         * @param arg_width Argument to pass with the method invocation.
         * @param arg_height Argument to pass with the method invocation.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @returns `true` if the call succeeded, `false` if `error` is set.
         */
        call_flash_area_sync(
            arg_x: number,
            arg_y: number,
            arg_width: number,
            arg_height: number,
            cancellable?: Gio.Cancellable | null,
        ): boolean;
        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-gnome-Shell-Screenshot.PickColor">PickColor()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `phosh_dbus_screenshot_call_pick_color_finish()` to get the result of the operation.
         *
         * See `phosh_dbus_screenshot_call_pick_color_sync()` for the synchronous, blocking version of this method.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         */
        call_pick_color(cancellable?: Gio.Cancellable | null): globalThis.Promise<GLib.Variant | null>;
        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-gnome-Shell-Screenshot.PickColor">PickColor()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `phosh_dbus_screenshot_call_pick_color_finish()` to get the result of the operation.
         *
         * See `phosh_dbus_screenshot_call_pick_color_sync()` for the synchronous, blocking version of this method.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied or `null`.
         */
        call_pick_color(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-gnome-Shell-Screenshot.PickColor">PickColor()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `phosh_dbus_screenshot_call_pick_color_finish()` to get the result of the operation.
         *
         * See `phosh_dbus_screenshot_call_pick_color_sync()` for the synchronous, blocking version of this method.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied or `null`.
         */
        call_pick_color(
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<GLib.Variant | null> | void;
        /**
         * Finishes an operation started with `phosh_dbus_screenshot_call_pick_color()`.
         * @param res The {@link Gio.AsyncResult} obtained from the {@link Gio.AsyncReadyCallback} passed to `phosh_dbus_screenshot_call_pick_color()`.
         * @returns `true` if the call succeeded, `false` if `error` is set.
         */
        call_pick_color_finish(res: Gio.AsyncResult): [boolean, GLib.Variant | null];
        /**
         * Synchronously invokes the <link linkend="gdbus-method-org-gnome-Shell-Screenshot.PickColor">PickColor()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
         *
         * See `phosh_dbus_screenshot_call_pick_color()` for the asynchronous version of this method.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @returns `true` if the call succeeded, `false` if `error` is set.
         */
        call_pick_color_sync(cancellable?: Gio.Cancellable | null): [boolean, GLib.Variant | null];
        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-gnome-Shell-Screenshot.Screenshot">Screenshot()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `phosh_dbus_screenshot_call_screenshot_finish()` to get the result of the operation.
         *
         * See `phosh_dbus_screenshot_call_screenshot_sync()` for the synchronous, blocking version of this method.
         * @param arg_include_cursor Argument to pass with the method invocation.
         * @param arg_flash Argument to pass with the method invocation.
         * @param arg_filename Argument to pass with the method invocation.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         */
        call_screenshot(
            arg_include_cursor: boolean,
            arg_flash: boolean,
            arg_filename: string,
            cancellable?: Gio.Cancellable | null,
        ): globalThis.Promise<[boolean, string]>;
        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-gnome-Shell-Screenshot.Screenshot">Screenshot()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `phosh_dbus_screenshot_call_screenshot_finish()` to get the result of the operation.
         *
         * See `phosh_dbus_screenshot_call_screenshot_sync()` for the synchronous, blocking version of this method.
         * @param arg_include_cursor Argument to pass with the method invocation.
         * @param arg_flash Argument to pass with the method invocation.
         * @param arg_filename Argument to pass with the method invocation.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied or `null`.
         */
        call_screenshot(
            arg_include_cursor: boolean,
            arg_flash: boolean,
            arg_filename: string,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-gnome-Shell-Screenshot.Screenshot">Screenshot()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `phosh_dbus_screenshot_call_screenshot_finish()` to get the result of the operation.
         *
         * See `phosh_dbus_screenshot_call_screenshot_sync()` for the synchronous, blocking version of this method.
         * @param arg_include_cursor Argument to pass with the method invocation.
         * @param arg_flash Argument to pass with the method invocation.
         * @param arg_filename Argument to pass with the method invocation.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied or `null`.
         */
        call_screenshot(
            arg_include_cursor: boolean,
            arg_flash: boolean,
            arg_filename: string,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<[boolean, string]> | void;
        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-gnome-Shell-Screenshot.ScreenshotArea">ScreenshotArea()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `phosh_dbus_screenshot_call_screenshot_area_finish()` to get the result of the operation.
         *
         * See `phosh_dbus_screenshot_call_screenshot_area_sync()` for the synchronous, blocking version of this method.
         * @param arg_x Argument to pass with the method invocation.
         * @param arg_y Argument to pass with the method invocation.
         * @param arg_width Argument to pass with the method invocation.
         * @param arg_height Argument to pass with the method invocation.
         * @param arg_flash Argument to pass with the method invocation.
         * @param arg_filename Argument to pass with the method invocation.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         */
        call_screenshot_area(
            arg_x: number,
            arg_y: number,
            arg_width: number,
            arg_height: number,
            arg_flash: boolean,
            arg_filename: string,
            cancellable?: Gio.Cancellable | null,
        ): globalThis.Promise<[boolean, string]>;
        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-gnome-Shell-Screenshot.ScreenshotArea">ScreenshotArea()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `phosh_dbus_screenshot_call_screenshot_area_finish()` to get the result of the operation.
         *
         * See `phosh_dbus_screenshot_call_screenshot_area_sync()` for the synchronous, blocking version of this method.
         * @param arg_x Argument to pass with the method invocation.
         * @param arg_y Argument to pass with the method invocation.
         * @param arg_width Argument to pass with the method invocation.
         * @param arg_height Argument to pass with the method invocation.
         * @param arg_flash Argument to pass with the method invocation.
         * @param arg_filename Argument to pass with the method invocation.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied or `null`.
         */
        call_screenshot_area(
            arg_x: number,
            arg_y: number,
            arg_width: number,
            arg_height: number,
            arg_flash: boolean,
            arg_filename: string,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-gnome-Shell-Screenshot.ScreenshotArea">ScreenshotArea()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `phosh_dbus_screenshot_call_screenshot_area_finish()` to get the result of the operation.
         *
         * See `phosh_dbus_screenshot_call_screenshot_area_sync()` for the synchronous, blocking version of this method.
         * @param arg_x Argument to pass with the method invocation.
         * @param arg_y Argument to pass with the method invocation.
         * @param arg_width Argument to pass with the method invocation.
         * @param arg_height Argument to pass with the method invocation.
         * @param arg_flash Argument to pass with the method invocation.
         * @param arg_filename Argument to pass with the method invocation.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied or `null`.
         */
        call_screenshot_area(
            arg_x: number,
            arg_y: number,
            arg_width: number,
            arg_height: number,
            arg_flash: boolean,
            arg_filename: string,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<[boolean, string]> | void;
        /**
         * Finishes an operation started with `phosh_dbus_screenshot_call_screenshot_area()`.
         * @param res The {@link Gio.AsyncResult} obtained from the {@link Gio.AsyncReadyCallback} passed to `phosh_dbus_screenshot_call_screenshot_area()`.
         * @returns `true` if the call succeeded, `false` if `error` is set.
         */
        call_screenshot_area_finish(res: Gio.AsyncResult): [boolean, boolean, string];
        /**
         * Synchronously invokes the <link linkend="gdbus-method-org-gnome-Shell-Screenshot.ScreenshotArea">ScreenshotArea()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
         *
         * See `phosh_dbus_screenshot_call_screenshot_area()` for the asynchronous version of this method.
         * @param arg_x Argument to pass with the method invocation.
         * @param arg_y Argument to pass with the method invocation.
         * @param arg_width Argument to pass with the method invocation.
         * @param arg_height Argument to pass with the method invocation.
         * @param arg_flash Argument to pass with the method invocation.
         * @param arg_filename Argument to pass with the method invocation.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @returns `true` if the call succeeded, `false` if `error` is set.
         */
        call_screenshot_area_sync(
            arg_x: number,
            arg_y: number,
            arg_width: number,
            arg_height: number,
            arg_flash: boolean,
            arg_filename: string,
            cancellable?: Gio.Cancellable | null,
        ): [boolean, boolean, string];
        /**
         * Finishes an operation started with `phosh_dbus_screenshot_call_screenshot()`.
         * @param res The {@link Gio.AsyncResult} obtained from the {@link Gio.AsyncReadyCallback} passed to `phosh_dbus_screenshot_call_screenshot()`.
         * @returns `true` if the call succeeded, `false` if `error` is set.
         */
        call_screenshot_finish(res: Gio.AsyncResult): [boolean, boolean, string];
        /**
         * Synchronously invokes the <link linkend="gdbus-method-org-gnome-Shell-Screenshot.Screenshot">Screenshot()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
         *
         * See `phosh_dbus_screenshot_call_screenshot()` for the asynchronous version of this method.
         * @param arg_include_cursor Argument to pass with the method invocation.
         * @param arg_flash Argument to pass with the method invocation.
         * @param arg_filename Argument to pass with the method invocation.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @returns `true` if the call succeeded, `false` if `error` is set.
         */
        call_screenshot_sync(
            arg_include_cursor: boolean,
            arg_flash: boolean,
            arg_filename: string,
            cancellable?: Gio.Cancellable | null,
        ): [boolean, boolean, string];
        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-gnome-Shell-Screenshot.ScreenshotWindow">ScreenshotWindow()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `phosh_dbus_screenshot_call_screenshot_window_finish()` to get the result of the operation.
         *
         * See `phosh_dbus_screenshot_call_screenshot_window_sync()` for the synchronous, blocking version of this method.
         * @param arg_include_frame Argument to pass with the method invocation.
         * @param arg_include_cursor Argument to pass with the method invocation.
         * @param arg_flash Argument to pass with the method invocation.
         * @param arg_filename Argument to pass with the method invocation.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         */
        call_screenshot_window(
            arg_include_frame: boolean,
            arg_include_cursor: boolean,
            arg_flash: boolean,
            arg_filename: string,
            cancellable?: Gio.Cancellable | null,
        ): globalThis.Promise<[boolean, string]>;
        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-gnome-Shell-Screenshot.ScreenshotWindow">ScreenshotWindow()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `phosh_dbus_screenshot_call_screenshot_window_finish()` to get the result of the operation.
         *
         * See `phosh_dbus_screenshot_call_screenshot_window_sync()` for the synchronous, blocking version of this method.
         * @param arg_include_frame Argument to pass with the method invocation.
         * @param arg_include_cursor Argument to pass with the method invocation.
         * @param arg_flash Argument to pass with the method invocation.
         * @param arg_filename Argument to pass with the method invocation.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied or `null`.
         */
        call_screenshot_window(
            arg_include_frame: boolean,
            arg_include_cursor: boolean,
            arg_flash: boolean,
            arg_filename: string,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-gnome-Shell-Screenshot.ScreenshotWindow">ScreenshotWindow()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `phosh_dbus_screenshot_call_screenshot_window_finish()` to get the result of the operation.
         *
         * See `phosh_dbus_screenshot_call_screenshot_window_sync()` for the synchronous, blocking version of this method.
         * @param arg_include_frame Argument to pass with the method invocation.
         * @param arg_include_cursor Argument to pass with the method invocation.
         * @param arg_flash Argument to pass with the method invocation.
         * @param arg_filename Argument to pass with the method invocation.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied or `null`.
         */
        call_screenshot_window(
            arg_include_frame: boolean,
            arg_include_cursor: boolean,
            arg_flash: boolean,
            arg_filename: string,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<[boolean, string]> | void;
        /**
         * Finishes an operation started with `phosh_dbus_screenshot_call_screenshot_window()`.
         * @param res The {@link Gio.AsyncResult} obtained from the {@link Gio.AsyncReadyCallback} passed to `phosh_dbus_screenshot_call_screenshot_window()`.
         * @returns `true` if the call succeeded, `false` if `error` is set.
         */
        call_screenshot_window_finish(res: Gio.AsyncResult): [boolean, boolean, string];
        /**
         * Synchronously invokes the <link linkend="gdbus-method-org-gnome-Shell-Screenshot.ScreenshotWindow">ScreenshotWindow()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
         *
         * See `phosh_dbus_screenshot_call_screenshot_window()` for the asynchronous version of this method.
         * @param arg_include_frame Argument to pass with the method invocation.
         * @param arg_include_cursor Argument to pass with the method invocation.
         * @param arg_flash Argument to pass with the method invocation.
         * @param arg_filename Argument to pass with the method invocation.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @returns `true` if the call succeeded, `false` if `error` is set.
         */
        call_screenshot_window_sync(
            arg_include_frame: boolean,
            arg_include_cursor: boolean,
            arg_flash: boolean,
            arg_filename: string,
            cancellable?: Gio.Cancellable | null,
        ): [boolean, boolean, string];
        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-gnome-Shell-Screenshot.SelectArea">SelectArea()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `phosh_dbus_screenshot_call_select_area_finish()` to get the result of the operation.
         *
         * See `phosh_dbus_screenshot_call_select_area_sync()` for the synchronous, blocking version of this method.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         */
        call_select_area(cancellable?: Gio.Cancellable | null): globalThis.Promise<[number, number, number, number]>;
        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-gnome-Shell-Screenshot.SelectArea">SelectArea()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `phosh_dbus_screenshot_call_select_area_finish()` to get the result of the operation.
         *
         * See `phosh_dbus_screenshot_call_select_area_sync()` for the synchronous, blocking version of this method.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied or `null`.
         */
        call_select_area(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-gnome-Shell-Screenshot.SelectArea">SelectArea()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `phosh_dbus_screenshot_call_select_area_finish()` to get the result of the operation.
         *
         * See `phosh_dbus_screenshot_call_select_area_sync()` for the synchronous, blocking version of this method.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied or `null`.
         */
        call_select_area(
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<[number, number, number, number]> | void;
        /**
         * Finishes an operation started with `phosh_dbus_screenshot_call_select_area()`.
         * @param res The {@link Gio.AsyncResult} obtained from the {@link Gio.AsyncReadyCallback} passed to `phosh_dbus_screenshot_call_select_area()`.
         * @returns `true` if the call succeeded, `false` if `error` is set.
         */
        call_select_area_finish(res: Gio.AsyncResult): [boolean, number, number, number, number];
        /**
         * Synchronously invokes the <link linkend="gdbus-method-org-gnome-Shell-Screenshot.SelectArea">SelectArea()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
         *
         * See `phosh_dbus_screenshot_call_select_area()` for the asynchronous version of this method.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @returns `true` if the call succeeded, `false` if `error` is set.
         */
        call_select_area_sync(cancellable?: Gio.Cancellable | null): [boolean, number, number, number, number];
        /**
         * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-gnome-Shell-Screenshot.FlashArea">FlashArea()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use `g_dbus_method_invocation_return_error()` or similar.
         *
         * This method will free `invocation`, you cannot use it afterwards.
         * @param invocation A {@link Gio.DBusMethodInvocation}.
         */
        complete_flash_area(invocation: Gio.DBusMethodInvocation): void;
        /**
         * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-gnome-Shell-Screenshot.PickColor">PickColor()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use `g_dbus_method_invocation_return_error()` or similar.
         *
         * This method will free `invocation`, you cannot use it afterwards.
         * @param invocation A {@link Gio.DBusMethodInvocation}.
         * @param result Parameter to return.
         */
        complete_pick_color(invocation: Gio.DBusMethodInvocation, result: GLib.Variant): void;
        /**
         * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-gnome-Shell-Screenshot.Screenshot">Screenshot()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use `g_dbus_method_invocation_return_error()` or similar.
         *
         * This method will free `invocation`, you cannot use it afterwards.
         * @param invocation A {@link Gio.DBusMethodInvocation}.
         * @param success Parameter to return.
         * @param filename_used Parameter to return.
         */
        complete_screenshot(invocation: Gio.DBusMethodInvocation, success: boolean, filename_used: string): void;
        /**
         * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-gnome-Shell-Screenshot.ScreenshotArea">ScreenshotArea()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use `g_dbus_method_invocation_return_error()` or similar.
         *
         * This method will free `invocation`, you cannot use it afterwards.
         * @param invocation A {@link Gio.DBusMethodInvocation}.
         * @param success Parameter to return.
         * @param filename_used Parameter to return.
         */
        complete_screenshot_area(invocation: Gio.DBusMethodInvocation, success: boolean, filename_used: string): void;
        /**
         * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-gnome-Shell-Screenshot.ScreenshotWindow">ScreenshotWindow()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use `g_dbus_method_invocation_return_error()` or similar.
         *
         * This method will free `invocation`, you cannot use it afterwards.
         * @param invocation A {@link Gio.DBusMethodInvocation}.
         * @param success Parameter to return.
         * @param filename_used Parameter to return.
         */
        complete_screenshot_window(invocation: Gio.DBusMethodInvocation, success: boolean, filename_used: string): void;
        /**
         * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-gnome-Shell-Screenshot.SelectArea">SelectArea()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use `g_dbus_method_invocation_return_error()` or similar.
         *
         * This method will free `invocation`, you cannot use it afterwards.
         * @param invocation A {@link Gio.DBusMethodInvocation}.
         * @param x Parameter to return.
         * @param y Parameter to return.
         * @param width Parameter to return.
         * @param height Parameter to return.
         */
        complete_select_area(
            invocation: Gio.DBusMethodInvocation,
            x: number,
            y: number,
            width: number,
            height: number,
        ): void;
    }

    export const DBusScreenshot: DBusScreenshotNamespace & {
        new (): DBusScreenshot; // This allows `obj instanceof DBusScreenshot`
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

export default Phosh;

// END
